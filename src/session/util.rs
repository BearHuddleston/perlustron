// SPDX-License-Identifier: MIT OR Apache-2.0

fn parse_arguments(arguments: Value) -> Value {
    if let Some(raw) = arguments.as_str() {
        if raw.len() > MAX_ARGUMENT_PARSE_BYTES {
            return json!({ "raw": compact_text(raw, ARGUMENT_PREVIEW_CHARS) });
        }
        serde_json::from_str(raw).unwrap_or_else(|_| json!({ "raw": raw }))
    } else {
        arguments
    }
}

fn classify_call(name: &str) -> String {
    let lower = name.to_ascii_lowercase();
    if lower.contains("tool_search") || lower.contains("tool.search") {
        "coordination".to_owned()
    } else if lower.contains("bash")
        || lower.contains("shell")
        || lower.contains("parallel")
        || lower.contains("apply_patch")
        || lower == "read"
        || lower == "write"
        || lower == "edit"
        || lower == "multiedit"
        || lower == "grep"
        || lower == "glob"
        || lower == "ls"
    {
        "local".to_owned()
    } else if lower == "js" || lower.contains("browser") || lower.contains("node_repl") {
        "browser".to_owned()
    } else if lower.contains("web") || lower.contains("search") || lower.contains("open") {
        "web".to_owned()
    } else if lower.contains("agent") || lower.contains("goal") || lower.contains("plan") {
        "coordination".to_owned()
    } else {
        "tool".to_owned()
    }
}

fn title_from_text(text: &str) -> String {
    let line = text
        .lines()
        .map(str::trim)
        .find(|line| !line.is_empty())
        .unwrap_or("Prompt");
    compact_text(line, 96).replace('\n', " ")
}

fn looks_like_environment_context(text: &str) -> bool {
    let trimmed = text.trim_start();
    trimmed.starts_with("<environment_context>") || trimmed.starts_with("<developer_context>")
}

fn value_preview_limited(value: &Value, max_chars: usize) -> String {
    match value {
        Value::String(text) => compact_text(text, max_chars),
        _ => {
            let bounded = bounded_json_value(value);
            let preview =
                serde_json::to_string_pretty(&bounded).unwrap_or_else(|_| bounded.to_string());
            compact_text(&preview, max_chars)
        }
    }
}

fn bounded_json_value(value: &Value) -> Value {
    bounded_json_value_at_depth(value, JSON_PREVIEW_MAX_DEPTH)
}

fn bounded_json_value_at_depth(value: &Value, depth: usize) -> Value {
    if depth == 0 {
        return Value::String("...[truncated depth]".to_owned());
    }

    match value {
        Value::String(text) => Value::String(compact_text(text, JSON_PREVIEW_STRING_CHARS)),
        Value::Array(items) => {
            let mut bounded = items
                .iter()
                .take(JSON_PREVIEW_MAX_ITEMS)
                .map(|item| bounded_json_value_at_depth(item, depth - 1))
                .collect::<Vec<_>>();
            if items.len() > JSON_PREVIEW_MAX_ITEMS {
                bounded.push(Value::String(format!(
                    "...[{} more items truncated]",
                    items.len() - JSON_PREVIEW_MAX_ITEMS
                )));
            }
            Value::Array(bounded)
        }
        Value::Object(object) => {
            let mut bounded = serde_json::Map::new();
            for (key, value) in object.iter().take(JSON_PREVIEW_MAX_ITEMS) {
                bounded.insert(key.clone(), bounded_json_value_at_depth(value, depth - 1));
            }
            if object.len() > JSON_PREVIEW_MAX_ITEMS {
                bounded.insert(
                    "__truncated".to_owned(),
                    Value::String(format!(
                        "{} more fields omitted",
                        object.len() - JSON_PREVIEW_MAX_ITEMS
                    )),
                );
            }
            Value::Object(bounded)
        }
        _ => value.clone(),
    }
}

fn compact_text(text: &str, max_chars: usize) -> String {
    let mut compact = String::new();
    let mut chars = text.chars().peekable();
    let mut count = 0;

    while let Some(ch) = chars.next() {
        if count >= max_chars {
            compact.push_str("\n...[truncated]");
            return compact;
        }

        if ch == '\r' {
            if chars.peek() == Some(&'\n') {
                chars.next();
            }
            compact.push('\n');
        } else {
            compact.push(ch);
        }
        count += 1;
    }

    compact
}
