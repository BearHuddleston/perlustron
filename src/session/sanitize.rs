// SPDX-License-Identifier: MIT OR Apache-2.0

#[derive(Debug, Clone, Default, Serialize)]
#[serde(rename_all = "camelCase")]
struct ScanReport {
    path: String,
    total_lines: usize,
    malformed_lines: usize,
    finding_count: usize,
    findings_by_kind: Vec<ScanKindCount>,
    line_refs: Vec<ScanLineRef>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct ScanKindCount {
    kind: String,
    count: usize,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct ScanLineRef {
    line_number: usize,
    kind: String,
}

#[derive(Debug, Clone, Default, Serialize)]
#[serde(rename_all = "camelCase")]
struct RedactionReport {
    profile: String,
    redacted_field_count: usize,
    findings_by_kind: Vec<ScanKindCount>,
    warnings: Vec<String>,
}

struct SecretPattern {
    kind: &'static str,
    regex: regex::Regex,
}

fn scan_file(path: &Path) -> Result<ScanReport> {
    let file =
        fs::File::open(path).with_context(|| format!("failed to open {}", path.display()))?;
    let reader = BufReader::new(file);
    let mut report = ScanReport {
        path: path.display().to_string(),
        ..Default::default()
    };

    for (line_index, line) in reader.lines().enumerate() {
        let line_number = line_index + 1;
        let line = line.with_context(|| format!("failed to read line {line_number}"))?;
        report.total_lines += 1;
        if serde_json::from_str::<Value>(&line).is_err() {
            report.malformed_lines += 1;
        }
        for kind in finding_kinds(&line) {
            report.finding_count += 1;
            increment_kind(&mut report.findings_by_kind, kind);
            push_limited(
                &mut report.line_refs,
                ScanLineRef {
                    line_number,
                    kind: kind.to_owned(),
                },
            );
        }
    }

    Ok(report)
}

fn sanitize_file(input: &Path, output: &Path, profile: RedactionProfile) -> Result<RedactionReport> {
    let file =
        fs::File::open(input).with_context(|| format!("failed to open {}", input.display()))?;
    let reader = BufReader::new(file);
    let mut writer = BufWriter::new(
        fs::File::create(output)
            .with_context(|| format!("failed to create sanitized output {}", output.display()))?,
    );
    let mut report = RedactionReport {
        profile: profile.as_str().to_owned(),
        warnings: vec![
            "Best-effort redaction: review sanitized logs before sharing.".to_owned(),
        ],
        ..Default::default()
    };

    for (line_index, line) in reader.lines().enumerate() {
        let line_number = line_index + 1;
        let line = line.with_context(|| format!("failed to read line {line_number}"))?;
        let mut value = match serde_json::from_str::<Value>(&line) {
            Ok(value) => value,
            Err(error) => json!({
                "type": "perlustron_malformed_line",
                "line_number": line_number,
                "error": normalize_text(&error.to_string()),
                "_redactions": [{ "kind": "malformed-line", "line_number": line_number }]
            }),
        };
        redact_json_value(&mut value, profile, "$", &mut report);
        writeln_json_line(&mut writer, &value)?;
    }

    let report_line = json!({
        "type": "perlustron_redaction_report",
        "profile": report.profile,
        "redacted_field_count": report.redacted_field_count,
        "findings_by_kind": report.findings_by_kind,
        "warnings": report.warnings,
    });
    writeln_json_line(&mut writer, &report_line)?;
    Ok(report)
}

fn writeln_json_line(writer: &mut impl Write, value: &Value) -> Result<()> {
    serde_json::to_writer(&mut *writer, value).context("failed to write sanitized JSON")?;
    writer
        .write_all(b"\n")
        .context("failed to finish sanitized JSONL line")
}

fn redact_session_graph(graph: &mut SessionGraph, profile: RedactionProfile) -> RedactionReport {
    let mut report = RedactionReport {
        profile: profile.as_str().to_owned(),
        warnings: vec![
            "Best-effort redaction: raw source logs may contain secrets not represented in this graph.".to_owned(),
        ],
        ..Default::default()
    };

    graph.session_path = redact_text(&graph.session_path, profile, "sessionPath", &mut report);
    if let Some(cwd) = &mut graph.cwd {
        *cwd = redact_text(cwd, profile, "cwd", &mut report);
    }
    redact_ui_summary(&mut graph.ui, profile, &mut report);
    redact_optional_string(&mut graph.metadata.repository_url, profile, "metadata.repositoryUrl", &mut report);
    redact_optional_string(&mut graph.metadata.git_commit_hash, profile, "metadata.gitCommitHash", &mut report);

    for prompt in &mut graph.prompts {
        prompt.title = redact_text(&prompt.title, profile, "prompt.title", &mut report);
        prompt.text = redact_text(&prompt.text, profile, "prompt.text", &mut report);
        if profile_is_strict_or_structure(profile) {
            if !prompt.images.is_empty() {
                report.redacted_field_count += prompt.images.len();
            }
            prompt.images.clear();
        }
        for message in &mut prompt.assistant_messages {
            message.text = redact_text(&message.text, profile, "assistant.text", &mut report);
        }
        for call in &mut prompt.calls {
            call.argument_preview =
                redact_text(&call.argument_preview, profile, "tool.arguments", &mut report);
            redact_optional_string(&mut call.output_preview, profile, "tool.output", &mut report);
            redact_subagent_calls(&mut call.subagent_nodes, profile, &mut report);
        }
        for change in &mut prompt.file_changes {
            change.path = redact_text(&change.path, profile, "file.path", &mut report);
            change.short_path = redact_text(&change.short_path, profile, "file.shortPath", &mut report);
            change.detail = redact_text(&change.detail, profile, "file.detail", &mut report);
            change.preview = redact_text(&change.preview, profile, "file.preview", &mut report);
        }
    }

    for compaction in &mut graph.compactions {
        compaction.title = redact_text(&compaction.title, profile, "compaction.title", &mut report);
        compaction.text = redact_text(&compaction.text, profile, "compaction.text", &mut report);
        compaction.detail = redact_text(&compaction.detail, profile, "compaction.detail", &mut report);
    }
    redact_parser_health(&mut graph.parser_health, profile, &mut report);

    graph.parser_health.redacted_field_count = report.redacted_field_count;
    report
}

fn redact_session_status(status: &mut SessionStatus, profile: RedactionProfile) -> RedactionReport {
    let mut report = RedactionReport {
        profile: profile.as_str().to_owned(),
        warnings: vec![
            "Best-effort redaction: raw source logs may contain secrets not represented in this status payload.".to_owned(),
        ],
        ..Default::default()
    };

    status.session_path = redact_text(&status.session_path, profile, "status.sessionPath", &mut report);
    redact_parser_health(&mut status.parser_health, profile, &mut report);
    redact_live_tail_cues(&mut status.live_cues, profile, &mut report);
    status.parser_health.redacted_field_count = status
        .parser_health
        .redacted_field_count
        .saturating_add(report.redacted_field_count);
    report
}

fn redact_session_list_response(
    list: &mut SessionListResponse,
    profile: RedactionProfile,
) -> RedactionReport {
    let mut report = RedactionReport {
        profile: profile.as_str().to_owned(),
        warnings: vec![
            "Best-effort redaction: session chooser paths are hidden while privacy mode is enabled.".to_owned(),
        ],
        ..Default::default()
    };

    list.selected_path = redact_text(&list.selected_path, profile, "sessions.selectedPath", &mut report);
    for session in &mut list.sessions {
        session.path = redact_text(&session.path, profile, "sessions.path", &mut report);
        session.label = redact_text(&session.label, profile, "sessions.label.title", &mut report);
        session.detail = redact_text(&session.detail, profile, "sessions.detail", &mut report);
    }
    report
}

fn redact_ui_summary(ui: &mut UiSummary, profile: RedactionProfile, report: &mut RedactionReport) {
    ui.session_name = redact_text(&ui.session_name, profile, "ui.sessionName.title", report);
    for root in &mut ui.roots {
        root.path = redact_text(&root.path, profile, "ui.roots.path", report);
    }
    for row in &mut ui.prompt_rows {
        row.title = redact_text(&row.title, profile, "ui.promptRows.title", report);
    }
}

fn redact_live_tail_cues(
    live_cues: &mut LiveTailCues,
    profile: RedactionProfile,
    report: &mut RedactionReport,
) {
    if let Some(prompt) = &mut live_cues.pending_prompt {
        prompt.title = redact_text(&prompt.title, profile, "live.prompt.title", report);
        prompt.text = redact_text(&prompt.text, profile, "live.prompt.text", report);
    }
    redact_optional_string(
        &mut live_cues.latest_assistant_preview,
        profile,
        "live.assistant.preview",
        report,
    );
    redact_subagent_calls(&mut live_cues.active_tool_calls, profile, report);
    redact_subagent_calls(&mut live_cues.completed_tool_calls, profile, report);
}

fn redact_parser_health(
    parser_health: &mut ParserHealth,
    profile: RedactionProfile,
    report: &mut RedactionReport,
) {
    for unknown in &mut parser_health.unknown_events {
        unknown.preview = redact_text(&unknown.preview, profile, "parser.unknown.preview", report);
    }
    for malformed in &mut parser_health.malformed_lines {
        malformed.preview = redact_text(
            &malformed.preview,
            profile,
            "parser.malformed.preview",
            report,
        );
    }
}

fn redact_subagent_calls(
    calls: &mut [CallNode],
    profile: RedactionProfile,
    report: &mut RedactionReport,
) {
    for call in calls {
        call.argument_preview =
            redact_text(&call.argument_preview, profile, "subagent.arguments", report);
        redact_optional_string(&mut call.output_preview, profile, "subagent.output", report);
        if let Some(path) = &mut call.subagent_session_path {
            *path = redact_text(path, profile, "subagent.sessionPath", report);
        }
        redact_subagent_calls(&mut call.subagent_nodes, profile, report);
    }
}

fn redact_optional_string(
    value: &mut Option<String>,
    profile: RedactionProfile,
    field_path: &str,
    report: &mut RedactionReport,
) {
    if let Some(text) = value {
        *text = redact_text(text, profile, field_path, report);
    }
}

fn redact_json_value(
    value: &mut Value,
    profile: RedactionProfile,
    field_path: &str,
    report: &mut RedactionReport,
) {
    match value {
        Value::Object(map) => {
            let keys = map.keys().cloned().collect::<Vec<_>>();
            for key in keys {
                let next_path = format!("{field_path}.{key}");
                if let Some(child) = map.get_mut(&key) {
                    if should_redact_whole_value(&key, profile) {
                        let label = redaction_label(&key);
                        *child = Value::String(label);
                        report.redacted_field_count += 1;
                        increment_kind(&mut report.findings_by_kind, "field");
                    } else {
                        redact_json_value(child, profile, &next_path, report);
                    }
                }
            }
        }
        Value::Array(items) => {
            for (index, item) in items.iter_mut().enumerate() {
                redact_json_value(item, profile, &format!("{field_path}[{index}]"), report);
            }
        }
        Value::String(text) => {
            *text = redact_text(text, profile, field_path, report);
        }
        _ => {}
    }
}

fn redact_text(
    text: &str,
    profile: RedactionProfile,
    field_path: &str,
    report: &mut RedactionReport,
) -> String {
    if text.is_empty() {
        return text.to_owned();
    }
    if profile == RedactionProfile::StructureOnly && !structure_preserve_field(field_path) {
        report.redacted_field_count += 1;
        increment_kind(&mut report.findings_by_kind, "structure-only");
        return format!("[REDACTED:structure length:{}]", text.len());
    }
    if profile_is_strict_or_structure(profile) && strict_text_field(field_path) {
        report.redacted_field_count += 1;
        increment_kind(&mut report.findings_by_kind, "strict-content");
        return format!("[REDACTED:{} length:{}]", strict_label(field_path), text.len());
    }

    let mut redacted = text.to_owned();
    for pattern in secret_patterns() {
        if pattern.regex.is_match(&redacted) {
            redacted = pattern
                .regex
                .replace_all(&redacted, format!("[REDACTED:{}]", pattern.kind))
                .to_string();
            report.redacted_field_count += 1;
            increment_kind(&mut report.findings_by_kind, pattern.kind);
        }
    }

    redacted
}

fn finding_kinds(text: &str) -> Vec<&'static str> {
    let mut kinds = Vec::new();
    for pattern in secret_patterns() {
        if pattern.regex.is_match(text) {
            kinds.push(pattern.kind);
        }
    }
    kinds
}

fn increment_kind(counts: &mut Vec<ScanKindCount>, kind: &str) {
    if let Some(count) = counts.iter_mut().find(|count| count.kind == kind) {
        count.count += 1;
    } else {
        counts.push(ScanKindCount {
            kind: kind.to_owned(),
            count: 1,
        });
    }
}

fn secret_patterns() -> &'static [SecretPattern] {
    static PATTERNS: std::sync::OnceLock<Vec<SecretPattern>> = std::sync::OnceLock::new();
    PATTERNS.get_or_init(|| {
        vec![
            secret_pattern("private-key-block", r"(?s)-----BEGIN [A-Z0-9 ]*PRIVATE KEY-----.*?-----END [A-Z0-9 ]*PRIVATE KEY-----"),
            secret_pattern("url-query-secret", r#"(?i)([?&](?:access[_-]?token|id[_-]?token|refresh[_-]?token|token|api[_-]?key|client_secret|sig|signature)=)[^"'\s&#<>]+"#),
            secret_pattern("base64-token", r#"(?i)\b(?:token|secret|session[_-]?key|credential|api[_-]?key)\s*[:=]\s*["']?[A-Za-z0-9+/]{32,}={0,2}"#),
            secret_pattern("authorization-header", r"(?i)authorization:\s*bearer\s+[A-Za-z0-9._~+/=-]{8,}"),
            secret_pattern("cookie-header", r"(?i)\bcookie:\s*[^\r\n]+"),
            secret_pattern("openai-api-key", r"\bsk-[A-Za-z0-9_-]{20,}\b"),
            secret_pattern("anthropic-api-key", r"\bsk-ant-[A-Za-z0-9_-]{20,}\b"),
            secret_pattern("github-token", r"\bgh[pousr]_[A-Za-z0-9_]{20,}\b"),
            secret_pattern("aws-access-key", r"\bAKIA[0-9A-Z]{16}\b"),
            secret_pattern("private-key", r"-----BEGIN [A-Z ]*PRIVATE KEY-----"),
            secret_pattern("password-assignment", r#"(?i)\b(password|passwd|pwd|secret|token|api[_-]?key)\s*[:=]\s*["']?[^"',\s;}]{4,}"#),
            secret_pattern("env-assignment", r"(?m)\b[A-Z][A-Z0-9_]{2,}\s*=\s*[^,\s]{8,}"),
            secret_pattern("windows-home-path", r#"(?i)\b[A-Z]:\\Users\\[^\\\s"]+"#),
            secret_pattern("unix-home-path", r"\B/(Users|home)/[^/\s]+"),
            secret_pattern("email-address", r"\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b"),
        ]
    })
}

fn secret_pattern(kind: &'static str, pattern: &str) -> SecretPattern {
    SecretPattern {
        kind,
        regex: regex::RegexBuilder::new(pattern)
            .case_insensitive(false)
            .build()
            .expect("valid secret scanner regex"),
    }
}

fn should_redact_whole_value(key: &str, profile: RedactionProfile) -> bool {
    let key = key.to_ascii_lowercase();
    if matches!(key.as_str(), "type" | "role" | "status" | "timestamp") {
        return false;
    }
    if secret_value_key(&key) {
        return true;
    }
    if profile_is_strict_or_structure(profile)
        && matches!(key.as_str(), "image_url" | "data" | "bytes")
    {
        return true;
    }
    profile == RedactionProfile::StructureOnly && !structure_preserve_key(&key)
}

fn secret_value_key(key: &str) -> bool {
    matches!(
        key,
        "access_token"
            | "access-token"
            | "api_key"
            | "api-key"
            | "apikey"
            | "authorization"
            | "client_secret"
            | "client-secret"
            | "clientsecret"
            | "cookie"
            | "credential"
            | "credentials"
            | "id_token"
            | "id-token"
            | "password"
            | "passwd"
            | "pwd"
            | "refresh_token"
            | "refresh-token"
            | "secret"
            | "session_key"
            | "session-key"
            | "token"
    )
}

fn profile_is_strict_or_structure(profile: RedactionProfile) -> bool {
    matches!(profile, RedactionProfile::Strict | RedactionProfile::StructureOnly)
}

fn strict_text_field(field_path: &str) -> bool {
    let lower = field_path.to_ascii_lowercase();
    lower.contains(".text")
        || lower.contains(".content")
        || lower.contains(".output")
        || lower.contains(".stdout")
        || lower.contains(".stderr")
        || lower.contains(".arguments")
        || lower.contains(".input")
        || lower.contains(".summary")
        || lower.contains(".title")
        || lower.contains(".detail")
        || lower.contains(".preview")
        || lower.contains("path")
        || lower == "cwd"
        || lower.ends_with(".cwd")
}

fn strict_label(field_path: &str) -> &'static str {
    let lower = field_path.to_ascii_lowercase();
    if lower.contains("path") || lower == "cwd" || lower.ends_with(".cwd") {
        "path"
    } else if lower.contains("output") || lower.contains("stdout") || lower.contains("stderr") {
        "tool-output"
    } else if lower.contains("arguments") || lower.contains("input") {
        "tool-input"
    } else if lower.contains("summary") {
        "summary"
    } else {
        "content"
    }
}

fn redaction_label(key: &str) -> String {
    let lower = key.to_ascii_lowercase();
    if lower.contains("image") || lower == "data" || lower == "bytes" {
        "[REDACTED:image]".to_owned()
    } else {
        format!("[REDACTED:{lower}]")
    }
}

fn structure_preserve_key(key: &str) -> bool {
    key == "type"
        || key == "role"
        || key == "status"
        || key == "timestamp"
        || key.ends_with("id")
        || key == "id"
        || key == "call_id"
        || key == "tool_use_id"
        || key == "sessionid"
        || key == "name"
}

fn structure_preserve_field(field_path: &str) -> bool {
    field_path
        .rsplit('.')
        .next()
        .map(|key| structure_preserve_key(&key.to_ascii_lowercase()))
        .unwrap_or(false)
}
