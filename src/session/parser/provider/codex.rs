// SPDX-License-Identifier: MIT OR Apache-2.0

use super::*;

pub(super) fn handle_response_item(
    entry: &JsonlEntry,
    event_index: usize,
    prompts: &mut Vec<PromptNode>,
    current_prompt: &mut Option<usize>,
    assistant_message_by_prompt: &mut HashMap<usize, String>,
    calls_by_id: &mut HashMap<String, (usize, usize)>,
) {
    let Some(item_type) = entry.payload.get("type").and_then(Value::as_str) else {
        return;
    };

    match item_type {
        "message" => {
            let role = entry
                .payload
                .get("role")
                .and_then(Value::as_str)
                .unwrap_or("message");

            let raw_text = extract_content_text(&entry.payload);
            let text = normalize_text(&raw_text);
            let images = extract_content_images(SessionSource::Codex, event_index, &entry.payload);
            if text.is_empty() && images.is_empty() {
                return;
            }

            match role {
                "user" => {
                    if !raw_text.is_empty() && looks_like_environment_context(&raw_text) {
                        return;
                    }
                    if looks_like_subagent_notification(&raw_text) {
                        let prompt_index = ensure_prompt(
                            prompts,
                            current_prompt,
                            event_index,
                            entry.timestamp.clone(),
                        );
                        prompts[prompt_index]
                            .calls
                            .push(call_from_subagent_notification(
                                entry,
                                event_index,
                                &raw_text,
                            ));
                        return;
                    }

                    let title = prompt_title(&text);

                    let prompt = PromptNode {
                        id: format!("prompt-{event_index}"),
                        event_index,
                        timestamp: entry.timestamp.clone(),
                        title,
                        text,
                        images,
                        calls: Vec::new(),
                        assistant_messages: Vec::new(),
                        file_changes: Vec::new(),
                    };
                    prompts.push(prompt);
                    *current_prompt = Some(prompts.len() - 1);
                }
                "assistant" if !text.is_empty() => {
                    let prompt_index = ensure_prompt(
                        prompts,
                        current_prompt,
                        event_index,
                        entry.timestamp.clone(),
                    );
                    let message_index = prompts[prompt_index].assistant_messages.len();
                    let message = MessageNode {
                        id: format!("message-{event_index}-{message_index}"),
                        event_index,
                        timestamp: entry.timestamp.clone(),
                        text,
                    };
                    assistant_message_by_prompt.insert(prompt_index, message.id.clone());
                    link_pending_calls_to_assistant_message(prompts, prompt_index, &message.id);
                    prompts[prompt_index].assistant_messages.push(message);
                }
                _ => {}
            }
        }
        "function_call" => {
            let prompt_index = ensure_prompt(
                prompts,
                current_prompt,
                event_index,
                entry.timestamp.clone(),
            );
            let mut call = call_from_function_call(entry, event_index, "function_call");
            call.assistant_message_id = assistant_message_by_prompt.get(&prompt_index).cloned();
            let call_id = call.id.clone();
            prompts[prompt_index].calls.push(call);
            let call_index = prompts[prompt_index].calls.len() - 1;
            calls_by_id.insert(call_id, (prompt_index, call_index));
        }
        "custom_tool_call" => {
            let prompt_index = ensure_prompt(
                prompts,
                current_prompt,
                event_index,
                entry.timestamp.clone(),
            );
            let mut call = call_from_custom_tool_call(entry, event_index);
            call.assistant_message_id = assistant_message_by_prompt.get(&prompt_index).cloned();
            let call_id = call.id.clone();
            prompts[prompt_index].calls.push(call);
            let call_index = prompts[prompt_index].calls.len() - 1;
            calls_by_id.insert(call_id, (prompt_index, call_index));
        }
        "function_call_output" => {
            let Some(call_id) = entry.payload.get("call_id").and_then(Value::as_str) else {
                return;
            };
            if let Some((prompt_index, call_index)) = calls_by_id.get(call_id).copied() {
                let call = &mut prompts[prompt_index].calls[call_index];
                call.event_index = event_index;
                call.status = "completed".to_owned();
                call.completed_at = entry.timestamp.clone();
                let output = entry
                    .payload
                    .get("output")
                    .map(value_preview)
                    .unwrap_or_default();
                call.output_preview = Some(output);
            }
        }
        "custom_tool_call_output" => {
            let Some(call_id) = entry.payload.get("call_id").and_then(Value::as_str) else {
                return;
            };
            if let Some((prompt_index, call_index)) = calls_by_id.get(call_id).copied() {
                let call = &mut prompts[prompt_index].calls[call_index];
                call.event_index = event_index;
                call.status = "completed".to_owned();
                call.completed_at = entry.timestamp.clone();
                let output = entry
                    .payload
                    .get("output")
                    .map(value_preview)
                    .unwrap_or_default();
                call.output_preview = Some(output);
            }
        }
        "tool_search_call" => {
            let prompt_index = ensure_prompt(
                prompts,
                current_prompt,
                event_index,
                entry.timestamp.clone(),
            );
            let mut call = call_from_tool_search_call(entry, event_index);
            call.assistant_message_id = assistant_message_by_prompt.get(&prompt_index).cloned();
            let call_id = call.id.clone();
            prompts[prompt_index].calls.push(call);
            let call_index = prompts[prompt_index].calls.len() - 1;
            calls_by_id.insert(call_id, (prompt_index, call_index));
        }
        "tool_search_output" => {
            let Some(call_id) = entry.payload.get("call_id").and_then(Value::as_str) else {
                return;
            };
            if let Some((prompt_index, call_index)) = calls_by_id.get(call_id).copied() {
                let call = &mut prompts[prompt_index].calls[call_index];
                call.event_index = event_index;
                call.status = entry
                    .payload
                    .get("status")
                    .and_then(Value::as_str)
                    .unwrap_or("completed")
                    .to_owned();
                call.completed_at = entry.timestamp.clone();
                let output = entry
                    .payload
                    .get("tools")
                    .map(value_preview)
                    .unwrap_or_default();
                call.output_preview = Some(output);
            }
        }
        "web_search_call" => {
            let prompt_index = ensure_prompt(
                prompts,
                current_prompt,
                event_index,
                entry.timestamp.clone(),
            );
            let mut call = call_from_web_search_call(entry, event_index);
            call.assistant_message_id = assistant_message_by_prompt.get(&prompt_index).cloned();
            prompts[prompt_index].calls.push(call);
        }
        _ => {}
    }
}

pub(super) fn handle_codex_event_msg(
    entry: &JsonlEntry,
    event_index: usize,
    prompts: &mut Vec<PromptNode>,
    current_prompt: &mut Option<usize>,
    assistant_message_by_prompt: &mut HashMap<usize, String>,
    calls_by_id: &mut HashMap<String, (usize, usize)>,
    token_samples: &mut Vec<TokenSample>,
) {
    let Some(payload_type) = entry.payload.get("type").and_then(Value::as_str) else {
        return;
    };

    match payload_type {
        "patch_apply_end" => {
            handle_patch_apply_end(entry, event_index, prompts, current_prompt, calls_by_id);
        }
        "mcp_tool_call_end" => {
            handle_mcp_tool_call_end(
                entry,
                event_index,
                prompts,
                current_prompt,
                assistant_message_by_prompt,
                calls_by_id,
            );
        }
        "token_count" => {
            if let Some(sample) = token_sample_from_event(entry, event_index) {
                push_token_sample(token_samples, sample);
            }
        }
        _ => {}
    }
}

fn handle_patch_apply_end(
    entry: &JsonlEntry,
    event_index: usize,
    prompts: &mut Vec<PromptNode>,
    current_prompt: &mut Option<usize>,
    calls_by_id: &HashMap<String, (usize, usize)>,
) {
    let call_id = entry
        .payload
        .get("call_id")
        .and_then(Value::as_str)
        .map(str::to_owned);
    let known_call = call_id
        .as_deref()
        .and_then(|call_id| calls_by_id.get(call_id).copied());
    let prompt_index = known_call
        .map(|(prompt_index, _)| prompt_index)
        .unwrap_or_else(|| {
            ensure_prompt(
                prompts,
                current_prompt,
                event_index,
                entry.timestamp.clone(),
            )
        });

    if let Some((prompt_index, call_index)) = known_call {
        let call = &mut prompts[prompt_index].calls[call_index];
        call.event_index = event_index;
        call.status = if entry
            .payload
            .get("success")
            .and_then(Value::as_bool)
            .unwrap_or(false)
        {
            "completed".to_owned()
        } else {
            "error".to_owned()
        };
        call.completed_at = entry.timestamp.clone();
        call.output_preview = patch_apply_output_preview(&entry.payload);
    }

    let Some(changes) = entry.payload.get("changes").and_then(Value::as_object) else {
        return;
    };

    let mut changes = changes.iter().collect::<Vec<_>>();
    changes.sort_by_key(|(path, _)| *path);

    for (change_index, (path, change)) in changes.into_iter().enumerate() {
        prompts[prompt_index]
            .file_changes
            .push(file_change_node_from_patch(
                event_index,
                change_index,
                entry.timestamp.clone(),
                call_id.clone(),
                path,
                change,
            ));
    }
}

fn handle_mcp_tool_call_end(
    entry: &JsonlEntry,
    event_index: usize,
    prompts: &mut Vec<PromptNode>,
    current_prompt: &mut Option<usize>,
    assistant_message_by_prompt: &HashMap<usize, String>,
    calls_by_id: &mut HashMap<String, (usize, usize)>,
) {
    let call_id = entry
        .payload
        .get("call_id")
        .and_then(Value::as_str)
        .map(str::to_owned)
        .unwrap_or_else(|| format!("mcp-tool-{event_index}"));
    let duration_ms = duration_ms_from_value(entry.payload.get("duration"));
    let output_preview = entry.payload.get("result").map(value_preview);

    if let Some((prompt_index, call_index)) = calls_by_id.get(&call_id).copied() {
        let call = &mut prompts[prompt_index].calls[call_index];
        call.event_index = event_index;
        call.status = mcp_status(&entry.payload);
        call.completed_at = entry.timestamp.clone();
        call.duration_ms = duration_ms;
        call.output_preview = output_preview;
        return;
    }

    let prompt_index = ensure_prompt(
        prompts,
        current_prompt,
        event_index,
        entry.timestamp.clone(),
    );
    let invocation = entry.payload.get("invocation");
    let name = invocation
        .and_then(|invocation| {
            let server = invocation.get("server").and_then(Value::as_str);
            let tool = invocation.get("tool").and_then(Value::as_str);
            match (server, tool) {
                (Some(server), Some(tool)) => Some(format!("{server}.{tool}")),
                (_, Some(tool)) => Some(tool.to_owned()),
                _ => None,
            }
        })
        .unwrap_or_else(|| "mcp.tool".to_owned());
    let arguments = invocation
        .and_then(|invocation| invocation.get("arguments"))
        .cloned()
        .unwrap_or_else(|| json!({}));
    let call = CallNode {
        id: call_id.clone(),
        event_index,
        started_at: None,
        completed_at: entry.timestamp.clone(),
        kind: classify_call(&name),
        name,
        status: mcp_status(&entry.payload),
        duration_ms,
        argument_preview: value_preview(&arguments),
        output_preview,
        assistant_message_id: assistant_message_by_prompt.get(&prompt_index).cloned(),
        subagent_session_path: None,
        subagent_nodes: Vec::new(),
    };
    prompts[prompt_index].calls.push(call);
    let call_index = prompts[prompt_index].calls.len() - 1;
    calls_by_id.insert(call_id, (prompt_index, call_index));
}

fn mcp_status(payload: &Value) -> String {
    let result = payload.get("result");
    let is_error = result
        .and_then(|result| result.get("Ok"))
        .and_then(|ok| ok.get("isError"))
        .and_then(Value::as_bool)
        .unwrap_or(false);
    if result.and_then(|result| result.get("Err")).is_some() || is_error {
        "error".to_owned()
    } else {
        "completed".to_owned()
    }
}

fn duration_ms_from_value(value: Option<&Value>) -> Option<u64> {
    let value = value?;
    if let Some(ms) = value.get("millis").and_then(Value::as_u64) {
        return Some(ms);
    }
    let secs = value.get("secs").and_then(Value::as_u64).unwrap_or(0);
    let nanos = value.get("nanos").and_then(Value::as_u64).unwrap_or(0);
    if secs == 0 && nanos == 0 {
        None
    } else {
        Some(secs.saturating_mul(1_000) + nanos / 1_000_000)
    }
}

pub(super) fn token_sample_from_event(
    entry: &JsonlEntry,
    event_index: usize,
) -> Option<TokenSample> {
    let info = entry.payload.get("info")?;
    let usage = info
        .get("last_token_usage")
        .or_else(|| info.get("total_token_usage"))?;
    let total_tokens = usage.get("total_tokens").and_then(Value::as_u64)?;
    let context_window = info.get("model_context_window").and_then(Value::as_u64);
    let context_tokens = usage
        .get("input_tokens")
        .and_then(Value::as_u64)
        .unwrap_or(total_tokens);
    let context_percent = context_window
        .filter(|context_window| *context_window > 0)
        .map(|context_window| (context_tokens as f64 / context_window as f64) * 100.0);
    let rate_limits = entry.payload.get("rate_limits");

    Some(TokenSample {
        event_index,
        timestamp: entry.timestamp.clone(),
        total_tokens,
        context_window,
        context_percent,
        primary_rate_limit_percent: rate_limit_percent(rate_limits, "primary"),
        secondary_rate_limit_percent: rate_limit_percent(rate_limits, "secondary"),
    })
}

fn push_token_sample(samples: &mut Vec<TokenSample>, sample: TokenSample) {
    samples.push(sample);
    if samples.len() > MAX_TOKEN_SAMPLES {
        samples.remove(0);
    }
}

fn rate_limit_percent(rate_limits: Option<&Value>, key: &str) -> Option<f64> {
    rate_limits?
        .get(key)?
        .get("used_percent")
        .and_then(Value::as_f64)
}

pub(super) fn build_token_telemetry(mut samples: Vec<TokenSample>) -> TokenTelemetry {
    if samples.len() > MAX_TOKEN_SAMPLES {
        samples = samples.split_off(samples.len() - MAX_TOKEN_SAMPLES);
    }

    let latest = samples.last().cloned();
    TokenTelemetry {
        latest_total_tokens: latest.as_ref().map(|sample| sample.total_tokens),
        context_window: latest.as_ref().and_then(|sample| sample.context_window),
        latest_context_percent: latest.as_ref().and_then(|sample| sample.context_percent),
        primary_rate_limit_percent: latest
            .as_ref()
            .and_then(|sample| sample.primary_rate_limit_percent),
        secondary_rate_limit_percent: latest
            .as_ref()
            .and_then(|sample| sample.secondary_rate_limit_percent),
        samples,
    }
}

fn patch_apply_output_preview(payload: &Value) -> Option<String> {
    let preview = joined_text_lines(
        [
            payload.get("stdout").and_then(Value::as_str),
            payload.get("stderr").and_then(Value::as_str),
        ]
        .into_iter()
        .flatten(),
    );
    if preview.trim().is_empty() {
        None
    } else {
        Some(normalize_text(&preview))
    }
}

fn short_path(path: &str) -> String {
    let parts = path
        .rsplit(['/', '\\'])
        .filter(|part| !part.trim().is_empty())
        .take(3)
        .collect::<Vec<_>>();
    parts.into_iter().rev().collect::<Vec<_>>().join("/")
}

fn file_change_node_from_patch(
    event_index: usize,
    change_index: usize,
    timestamp: Option<String>,
    call_id: Option<String>,
    path: &str,
    change: &Value,
) -> FileChangeNode {
    let change_type =
        normalize_file_change_type(change.get("type").and_then(Value::as_str)).to_owned();
    let preview = patch_change_preview(change);
    let detail = patch_change_detail(path, &change_type, change, &preview);

    FileChangeNode {
        id: format!("file-change-{event_index}-{change_index}"),
        event_index,
        timestamp,
        call_id,
        path: path.to_owned(),
        short_path: short_path(path),
        change_type,
        detail,
        preview,
    }
}

fn normalize_file_change_type(change_type: Option<&str>) -> &'static str {
    match change_type
        .unwrap_or("update")
        .trim()
        .to_ascii_lowercase()
        .as_str()
    {
        "add" | "added" | "create" | "created" => "add",
        "delete" | "deleted" | "remove" | "removed" => "delete",
        "move" | "moved" | "rename" | "renamed" => "move",
        _ => "update",
    }
}

fn patch_change_preview(change: &Value) -> String {
    change
        .get("unified_diff")
        .or_else(|| change.get("content"))
        .and_then(Value::as_str)
        .map(normalize_text)
        .or_else(|| {
            change
                .get("move_path")
                .and_then(Value::as_str)
                .map(|path| format!("moved to {path}"))
        })
        .unwrap_or_else(|| value_preview(change))
}

fn patch_change_detail(path: &str, change_type: &str, change: &Value, preview: &str) -> String {
    let mut parts = vec![format!("change: {change_type}"), format!("path: {path}")];
    if let Some(move_path) = change.get("move_path").and_then(Value::as_str) {
        parts.push(format!("move path: {move_path}"));
    }
    if !preview.trim().is_empty() {
        parts.push(String::new());
        parts.push(preview.to_owned());
    }
    parts.join("\n")
}

pub(super) fn compaction_node_from_codex_entry(
    entry: &JsonlEntry,
    event_index: usize,
) -> Option<CompactionNode> {
    let replacement_history = entry
        .payload
        .get("replacement_history")
        .and_then(Value::as_array);
    let compaction_payload = replacement_history.and_then(|history| {
        history
            .iter()
            .find(|item| item.get("type").and_then(Value::as_str) == Some("compaction"))
    });
    let replaced_message_count = replacement_history
        .map(|history| {
            history
                .iter()
                .filter(|item| item.get("type").and_then(Value::as_str) == Some("message"))
                .count()
        })
        .unwrap_or_default();
    let encrypted_content_len = compaction_payload
        .and_then(|payload| payload.get("encrypted_content"))
        .and_then(Value::as_str)
        .map(str::len)
        .unwrap_or_default();
    let encrypted = encrypted_content_len > 0;
    let summary = normalize_text(&compaction_summary_text(&entry.payload, compaction_payload));

    if summary.is_empty() && replaced_message_count == 0 && !encrypted {
        return None;
    }

    let reason =
        compaction_reason(&entry.payload).or_else(|| Some("Context window compacted".to_owned()));
    let text = if summary.is_empty() {
        format!(
            "Compacted {replaced_message_count} prior message{} into {} context checkpoint.",
            if replaced_message_count == 1 { "" } else { "s" },
            if encrypted { "an encrypted" } else { "a" }
        )
    } else {
        summary
    };
    let mut detail = vec![
        "compaction: context checkpoint".to_owned(),
        format!("event: {event_index}"),
        format!("replaced messages: {replaced_message_count}"),
        format!(
            "summary: {}",
            if encrypted {
                "encrypted in session log"
            } else {
                "plain text"
            }
        ),
    ];
    if let Some(timestamp) = &entry.timestamp {
        detail.push(format!("timestamp: {timestamp}"));
    }
    if let Some(reason) = &reason {
        detail.push(format!("reason: {reason}"));
    }
    if encrypted {
        detail.push(format!("encrypted bytes: {encrypted_content_len}"));
    }
    detail.extend(["".to_owned(), "summary:".to_owned(), text.clone()]);

    Some(CompactionNode {
        id: format!("compaction-{event_index}"),
        event_index,
        timestamp: entry.timestamp.clone(),
        title: "Context compacted".to_owned(),
        text,
        detail: detail.join("\n"),
        replaced_message_count,
        encrypted,
        reason,
    })
}
