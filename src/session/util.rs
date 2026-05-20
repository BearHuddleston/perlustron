// SPDX-License-Identifier: MIT OR Apache-2.0

fn parse_arguments(arguments: Value) -> Value {
    if let Some(raw) = arguments.as_str() {
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
    normalize_text(line).replace('\n', " ")
}

fn looks_like_environment_context(text: &str) -> bool {
    let trimmed = text.trim_start();
    trimmed.starts_with("<environment_context>") || trimmed.starts_with("<developer_context>")
}

fn value_preview(value: &Value) -> String {
    match value {
        Value::String(text) => text.clone(),
        _ => serde_json::to_string_pretty(value).unwrap_or_else(|_| value.to_string()),
    }
}

fn normalize_text(text: &str) -> String {
    let mut compact = String::new();
    let mut chars = text.chars().peekable();

    while let Some(ch) = chars.next() {
        if ch == '\r' {
            if chars.peek() == Some(&'\n') {
                chars.next();
            }
            compact.push('\n');
        } else {
            compact.push(ch);
        }
    }

    compact
}
