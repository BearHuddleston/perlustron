// SPDX-License-Identifier: MIT OR Apache-2.0

use super::*;

pub(super) fn compaction_node_from_claude_entry(
    entry: &Value,
    event_index: usize,
) -> Option<CompactionNode> {
    let timestamp = entry_timestamp(entry);
    let summary = normalize_text(&claude_summary_text(entry));
    let replacement_count = entry
        .get("replacement_history")
        .and_then(Value::as_array)
        .map(|history| history.len())
        .unwrap_or_default();
    if summary.is_empty() && replacement_count == 0 {
        return None;
    }

    let reason = compaction_reason(entry).or_else(|| Some("Conversation summary".to_owned()));
    let text = if summary.is_empty() {
        format!(
            "Compacted {replacement_count} prior item{} into a summary checkpoint.",
            if replacement_count == 1 { "" } else { "s" }
        )
    } else {
        summary
    };
    let mut detail = vec![
        "compaction: summary checkpoint".to_owned(),
        format!("event: {event_index}"),
        format!("replaced items: {replacement_count}"),
        "summary: plain text".to_owned(),
    ];
    if let Some(timestamp) = &timestamp {
        detail.push(format!("timestamp: {timestamp}"));
    }
    if let Some(reason) = &reason {
        detail.push(format!("reason: {reason}"));
    }
    detail.extend(["".to_owned(), "summary:".to_owned(), text.clone()]);

    Some(CompactionNode {
        id: format!("compaction-{event_index}"),
        event_index,
        timestamp,
        title: "Context summarized".to_owned(),
        text,
        detail: detail.join("\n"),
        replaced_message_count: replacement_count,
        encrypted: false,
        reason,
    })
}

pub(super) fn handle_claude_user_entry(
    entry: &Value,
    event_index: usize,
    prompts: &mut Vec<PromptNode>,
    current_prompt: &mut Option<usize>,
    calls_by_id: &mut HashMap<String, (usize, usize)>,
) {
    let timestamp = entry_timestamp(entry);
    let Some(content) = entry.pointer("/message/content") else {
        return;
    };

    apply_claude_tool_results(content, entry, event_index, prompts, calls_by_id);

    let text = normalize_text(&extract_claude_user_text(content));
    let images = extract_claude_content_images(SessionSource::Claude, event_index, content);
    if text.is_empty() && images.is_empty() {
        return;
    }
    if !text.is_empty() && looks_like_environment_context(&text) {
        return;
    }

    let title = prompt_title(&text);
    prompts.push(PromptNode {
        id: prompt_id_from_entry(entry, event_index),
        event_index,
        timestamp,
        title,
        text,
        images,
        calls: Vec::new(),
        assistant_messages: Vec::new(),
        file_changes: Vec::new(),
    });
    *current_prompt = Some(prompts.len() - 1);
}

pub(super) fn handle_claude_assistant_entry(
    entry: &Value,
    event_index: usize,
    prompts: &mut Vec<PromptNode>,
    current_prompt: &mut Option<usize>,
    assistant_message_by_prompt: &mut HashMap<usize, String>,
    calls_by_id: &mut HashMap<String, (usize, usize)>,
) {
    let timestamp = entry_timestamp(entry);
    let Some(content) = entry.pointer("/message/content") else {
        return;
    };

    let text = normalize_text(&extract_claude_assistant_text(content));
    let assistant_message_id = if text.is_empty() {
        None
    } else {
        let prompt_index = ensure_prompt(prompts, current_prompt, event_index, timestamp.clone());
        let message_index = prompts[prompt_index].assistant_messages.len();
        let message = MessageNode {
            id: format!("claude-message-{event_index}-{message_index}"),
            event_index,
            timestamp: timestamp.clone(),
            text,
        };
        let message_id = message.id.clone();
        assistant_message_by_prompt.insert(prompt_index, message_id.clone());
        link_pending_calls_to_assistant_message(prompts, prompt_index, &message_id);
        prompts[prompt_index].assistant_messages.push(message);
        Some(message_id)
    };

    if let Some(items) = content.as_array() {
        for (part_index, part) in items.iter().enumerate() {
            if part.get("type").and_then(Value::as_str) != Some("tool_use") {
                continue;
            }

            let prompt_index =
                ensure_prompt(prompts, current_prompt, event_index, timestamp.clone());
            let name = part
                .get("name")
                .and_then(Value::as_str)
                .unwrap_or("tool_use")
                .to_owned();
            let call_id = part
                .get("id")
                .and_then(Value::as_str)
                .map(str::to_owned)
                .unwrap_or_else(|| format!("claude-tool-{event_index}-{part_index}"));
            let arguments = part.get("input").cloned().unwrap_or_else(|| json!({}));
            let call = CallNode {
                id: call_id.clone(),
                event_index,
                started_at: timestamp.clone(),
                completed_at: None,
                kind: classify_call(&name),
                name,
                status: "running".to_owned(),
                duration_ms: None,
                argument_preview: value_preview(&arguments),
                output_preview: None,
                assistant_message_id: assistant_message_id.clone(),
                subagent_session_path: None,
                subagent_nodes: Vec::new(),
            };
            prompts[prompt_index].calls.push(call);
            let call_index = prompts[prompt_index].calls.len() - 1;
            calls_by_id.insert(call_id, (prompt_index, call_index));
        }
    }
}

fn apply_claude_tool_results(
    content: &Value,
    entry: &Value,
    event_index: usize,
    prompts: &mut [PromptNode],
    calls_by_id: &HashMap<String, (usize, usize)>,
) {
    let Some(items) = content.as_array() else {
        return;
    };

    for part in items {
        if part.get("type").and_then(Value::as_str) != Some("tool_result") {
            continue;
        }
        let Some(call_id) = part.get("tool_use_id").and_then(Value::as_str) else {
            continue;
        };
        let Some((prompt_index, call_index)) = calls_by_id.get(call_id).copied() else {
            continue;
        };
        let Some(prompt) = prompts.get_mut(prompt_index) else {
            continue;
        };
        let Some(call) = prompt.calls.get_mut(call_index) else {
            continue;
        };
        call.status = if part
            .get("is_error")
            .and_then(Value::as_bool)
            .unwrap_or(false)
        {
            "error".to_owned()
        } else {
            "completed".to_owned()
        };
        call.completed_at = entry_timestamp(entry);
        let output = part
            .get("content")
            .or_else(|| entry.get("toolUseResult"))
            .map(value_preview)
            .unwrap_or_else(|| format!("Claude tool result at event {event_index}"));
        call.output_preview = Some(output);
    }
}

fn entry_timestamp(entry: &Value) -> Option<String> {
    entry
        .get("timestamp")
        .and_then(Value::as_str)
        .map(str::to_owned)
}

fn prompt_id_from_entry(entry: &Value, event_index: usize) -> String {
    entry
        .get("promptId")
        .and_then(Value::as_str)
        .or_else(|| entry.get("uuid").and_then(Value::as_str))
        .map(|id| format!("prompt-{id}"))
        .unwrap_or_else(|| format!("prompt-{event_index}"))
}

fn extract_claude_user_text(content: &Value) -> String {
    match content {
        Value::String(text) => text.trim().to_owned(),
        Value::Array(items) => joined_text_lines(
            items
                .iter()
                .filter_map(|part| {
                    if matches!(
                        part.get("type").and_then(Value::as_str),
                        Some("tool_result" | "image")
                    ) {
                        return None;
                    }
                    part.get("text").and_then(Value::as_str)
                })
                .filter(|text| !is_image_placeholder_text(text)),
        ),
        _ => String::new(),
    }
}

fn extract_claude_assistant_text(content: &Value) -> String {
    match content {
        Value::String(text) => text.trim().to_owned(),
        Value::Array(items) => joined_text_lines(
            items
                .iter()
                .filter(|part| part.get("type").and_then(Value::as_str) == Some("text"))
                .filter_map(|part| part.get("text").and_then(Value::as_str)),
        ),
        _ => String::new(),
    }
}
