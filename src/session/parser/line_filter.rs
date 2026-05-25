// SPDX-License-Identifier: MIT OR Apache-2.0

use super::*;

pub(super) fn line_may_affect_graph(source: SessionSource, line: &str) -> bool {
    if source == SessionSource::Claude {
        return claude_line_may_affect_graph(line);
    }

    let head = line_head(line);
    if contains_json_field(head, "\"type\":\"event_msg\"", "\"type\": \"event_msg\"") {
        return contains_json_field(
            head,
            "\"type\":\"patch_apply_end\"",
            "\"type\": \"patch_apply_end\"",
        ) || contains_json_field(
            head,
            "\"type\":\"mcp_tool_call_end\"",
            "\"type\": \"mcp_tool_call_end\"",
        ) || contains_json_field(
            head,
            "\"type\":\"token_count\"",
            "\"type\": \"token_count\"",
        );
    }

    if contains_json_field(
        head,
        "\"type\":\"session_meta\"",
        "\"type\": \"session_meta\"",
    ) || contains_json_field(
        head,
        "\"type\":\"turn_context\"",
        "\"type\": \"turn_context\"",
    ) {
        return true;
    }

    if line_has_compaction_event(head) {
        return true;
    }

    if !contains_json_field(
        head,
        "\"type\":\"response_item\"",
        "\"type\": \"response_item\"",
    ) {
        return false;
    }

    contains_json_field(
        head,
        "\"type\":\"function_call\"",
        "\"type\": \"function_call\"",
    ) || contains_json_field(
        head,
        "\"type\":\"function_call_output\"",
        "\"type\": \"function_call_output\"",
    ) || contains_json_field(
        head,
        "\"type\":\"custom_tool_call\"",
        "\"type\": \"custom_tool_call\"",
    ) || contains_json_field(
        head,
        "\"type\":\"custom_tool_call_output\"",
        "\"type\": \"custom_tool_call_output\"",
    ) || contains_json_field(
        head,
        "\"type\":\"tool_search_call\"",
        "\"type\": \"tool_search_call\"",
    ) || contains_json_field(
        head,
        "\"type\":\"tool_search_output\"",
        "\"type\": \"tool_search_output\"",
    ) || contains_json_field(
        head,
        "\"type\":\"web_search_call\"",
        "\"type\": \"web_search_call\"",
    ) || (contains_json_field(head, "\"type\":\"message\"", "\"type\": \"message\"")
        && (contains_json_field(head, "\"role\":\"user\"", "\"role\": \"user\"")
            || contains_json_field(head, "\"role\":\"assistant\"", "\"role\": \"assistant\"")))
}

pub(super) fn parsed_line_may_affect_graph(
    source: SessionSource,
    parsed: Option<&Value>,
    line: &str,
) -> bool {
    if let Some(value) = parsed {
        return unknown_event_type(source, value).is_none();
    }

    line_may_affect_graph(source, line)
}

pub(super) fn push_limited<T>(target: &mut Vec<T>, value: T) {
    if target.len() < PARSER_HEALTH_REF_LIMIT {
        target.push(value);
    }
}

pub(super) fn unknown_event_type(source: SessionSource, value: &Value) -> Option<String> {
    match source {
        SessionSource::Codex => unknown_codex_event_type(value),
        SessionSource::Claude => unknown_claude_event_type(value),
    }
}

fn unknown_codex_event_type(value: &Value) -> Option<String> {
    let entry_type = value
        .get("type")
        .and_then(Value::as_str)
        .unwrap_or("<missing-type>");
    match entry_type {
        "session_meta" | "turn_context" | "compacted" | "compaction" | "summary" => None,
        "response_item" => {
            let item_type = value
                .get("payload")
                .and_then(|payload| payload.get("type"))
                .and_then(Value::as_str)
                .unwrap_or("<missing-payload-type>");
            match item_type {
                "message"
                | "function_call"
                | "function_call_output"
                | "custom_tool_call"
                | "custom_tool_call_output"
                | "tool_search_call"
                | "tool_search_output"
                | "web_search_call" => None,
                _ => Some(format!("codex.response_item:{item_type}")),
            }
        }
        "event_msg" => {
            let payload_type = value
                .get("payload")
                .and_then(|payload| payload.get("type"))
                .and_then(Value::as_str)
                .unwrap_or("<missing-payload-type>");
            match payload_type {
                "patch_apply_end" | "mcp_tool_call_end" | "token_count" => None,
                _ => Some(format!("codex.event_msg:{payload_type}")),
            }
        }
        _ => Some(format!("codex:{entry_type}")),
    }
}

fn unknown_claude_event_type(value: &Value) -> Option<String> {
    let entry_type = value
        .get("type")
        .and_then(Value::as_str)
        .unwrap_or("<missing-type>");
    match entry_type {
        "user" | "assistant" | "summary" | "compacted" | "compaction" | "last-prompt"
        | "ai-title" => None,
        _ => Some(format!("claude:{entry_type}")),
    }
}

fn claude_line_may_affect_graph(line: &str) -> bool {
    contains_json_field(line, "\"type\":\"user\"", "\"type\": \"user\"")
        || contains_json_field(line, "\"type\":\"assistant\"", "\"type\": \"assistant\"")
        || line_has_compaction_event(line)
        || contains_json_field(
            line,
            "\"type\":\"last-prompt\"",
            "\"type\": \"last-prompt\"",
        )
        || contains_json_field(line, "\"type\":\"ai-title\"", "\"type\": \"ai-title\"")
}

pub(super) fn line_has_compaction_event(head: &str) -> bool {
    contains_json_field(head, "\"type\":\"compacted\"", "\"type\": \"compacted\"")
        || contains_json_field(head, "\"type\":\"compaction\"", "\"type\": \"compaction\"")
        || contains_json_field(head, "\"type\":\"summary\"", "\"type\": \"summary\"")
}

pub(super) fn contains_json_field(line: &str, compact: &str, spaced: &str) -> bool {
    line.contains(compact) || line.contains(spaced)
}

pub(super) fn line_head(line: &str) -> &str {
    const MAX_HEADER_BYTES: usize = 768;
    if line.len() <= MAX_HEADER_BYTES {
        return line;
    }

    let mut end = 0;
    for (index, _) in line.char_indices() {
        if index > MAX_HEADER_BYTES {
            break;
        }
        end = index;
    }
    &line[..end]
}
