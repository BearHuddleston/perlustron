// SPDX-License-Identifier: MIT OR Apache-2.0

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum ExportFormat {
    Html,
    Markdown,
    Json,
}

impl ExportFormat {
    fn parse(value: &str) -> Option<Self> {
        match value.trim().to_ascii_lowercase().as_str() {
            "html" => Some(Self::Html),
            "markdown" | "md" => Some(Self::Markdown),
            "json" => Some(Self::Json),
            _ => None,
        }
    }

    fn as_str(self) -> &'static str {
        match self {
            Self::Html => "html",
            Self::Markdown => "markdown",
            Self::Json => "json",
        }
    }
}

fn parse_graph_for_file(source: SessionSource, path: &Path) -> Result<SessionGraph> {
    let (len, modified) = session_file_state(path)?;
    parse_session_jsonl(source, path, len, modified)
}

enum PromptExportItem<'a> {
    Message(&'a MessageNode),
    Call(&'a CallNode),
    FileChange(&'a FileChangeNode),
}

impl PromptExportItem<'_> {
    fn event_index(&self) -> usize {
        match self {
            Self::Message(message) => message.event_index,
            Self::Call(call) => call.event_index,
            Self::FileChange(change) => change.event_index,
        }
    }

    fn order(&self) -> usize {
        match self {
            Self::Message(_) => 0,
            Self::Call(_) => 1,
            Self::FileChange(_) => 2,
        }
    }
}

fn agent_trace_from_graph(
    graph: &SessionGraph,
    redaction_report: Option<RedactionReport>,
) -> AgentTrace {
    let mut events = Vec::new();
    for prompt in &graph.prompts {
        events.push(NormalizedEvent {
            id: prompt.id.clone(),
            source: graph.source.clone(),
            source_event_type: "message".to_owned(),
            normalized_type: "user_prompt".to_owned(),
            role: Some("user".to_owned()),
            timestamp: prompt.timestamp.clone(),
            line_number: prompt.event_index + 1,
            parent_id: None,
            turn_id: Some(prompt.id.clone()),
            tool_call_id: None,
            name: None,
            status: None,
            duration_ms: None,
            summary: prompt.title.clone(),
            content: Some(prompt.text.clone()),
            arguments: None,
            output: None,
            files: Vec::new(),
            artifacts: prompt.images.iter().map(|image| image.id.clone()).collect(),
            raw: raw_ref(graph, prompt.event_index),
            warnings: Vec::new(),
            redactions: Vec::new(),
            inferred: Vec::new(),
        });

        let mut prompt_items = Vec::new();
        prompt_items.extend(
            prompt
                .assistant_messages
                .iter()
                .map(PromptExportItem::Message),
        );
        prompt_items.extend(prompt.calls.iter().map(PromptExportItem::Call));
        prompt_items.extend(
            prompt
                .file_changes
                .iter()
                .map(PromptExportItem::FileChange),
        );
        prompt_items.sort_by_key(|item| (item.event_index(), item.order()));

        for item in prompt_items {
            match item {
                PromptExportItem::Message(message) => {
                    events.push(normalized_assistant_message_event(graph, prompt, message));
                }
                PromptExportItem::Call(call) => {
                    events.push(normalized_call_event(graph, prompt, call));
                    push_subagent_normalized_events(graph, prompt, call, &mut events);
                }
                PromptExportItem::FileChange(change) => {
                    events.push(normalized_file_change_event(graph, prompt, change));
                }
            }
        }
    }

    for compaction in &graph.compactions {
        events.push(NormalizedEvent {
            id: compaction.id.clone(),
            source: graph.source.clone(),
            source_event_type: "compaction".to_owned(),
            normalized_type: "compaction".to_owned(),
            role: None,
            timestamp: compaction.timestamp.clone(),
            line_number: compaction.event_index + 1,
            parent_id: None,
            turn_id: None,
            tool_call_id: None,
            name: compaction.reason.clone(),
            status: None,
            duration_ms: None,
            summary: compaction.title.clone(),
            content: Some(compaction.detail.clone()),
            arguments: None,
            output: None,
            files: Vec::new(),
            artifacts: Vec::new(),
            raw: raw_ref(graph, compaction.event_index),
            warnings: Vec::new(),
            redactions: Vec::new(),
            inferred: Vec::new(),
        });
    }

    for unknown in &graph.parser_health.unknown_events {
        events.push(NormalizedEvent {
            id: format!("unknown-{}", unknown.event_index),
            source: graph.source.clone(),
            source_event_type: unknown.source_event_type.clone(),
            normalized_type: "unknown".to_owned(),
            role: None,
            timestamp: None,
            line_number: unknown.line_number,
            parent_id: None,
            turn_id: None,
            tool_call_id: None,
            name: Some(unknown.source_event_type.clone()),
            status: Some("unsupported".to_owned()),
            duration_ms: None,
            summary: format!("Unknown event {}", unknown.source_event_type),
            content: Some(unknown.preview.clone()),
            arguments: None,
            output: None,
            files: Vec::new(),
            artifacts: Vec::new(),
            raw: raw_ref(graph, unknown.event_index),
            warnings: vec!["Preserved as unknown because this parser does not recognize the event shape.".to_owned()],
            redactions: Vec::new(),
            inferred: Vec::new(),
        });
    }

    for malformed in &graph.parser_health.malformed_lines {
        events.push(NormalizedEvent {
            id: format!("malformed-{}", malformed.event_index),
            source: graph.source.clone(),
            source_event_type: "malformed_jsonl".to_owned(),
            normalized_type: "malformed".to_owned(),
            role: None,
            timestamp: None,
            line_number: malformed.line_number,
            parent_id: None,
            turn_id: None,
            tool_call_id: None,
            name: None,
            status: Some("malformed".to_owned()),
            duration_ms: None,
            summary: malformed.error.clone(),
            content: Some(malformed.preview.clone()),
            arguments: None,
            output: None,
            files: Vec::new(),
            artifacts: Vec::new(),
            raw: raw_ref(graph, malformed.event_index),
            warnings: vec!["Malformed JSONL line was skipped during normalization.".to_owned()],
            redactions: Vec::new(),
            inferred: Vec::new(),
        });
    }

    events.sort_by_key(|event| event.line_number);
    AgentTrace {
        schema_version: NORMALIZED_TRACE_SCHEMA_VERSION.to_owned(),
        parser_version: env!("CARGO_PKG_VERSION").to_owned(),
        generated_at: isoish_now(),
        source: graph.source.clone(),
        session_id: graph.session_id.clone(),
        log_file_path: graph.session_path.clone(),
        cwd: graph.cwd.clone(),
        metadata: graph.metadata.clone(),
        totals: graph.totals.clone(),
        parser_health: graph.parser_health.clone(),
        insights: graph.insights.clone(),
        redaction_report,
        events,
    }
}

fn normalized_call_event(graph: &SessionGraph, prompt: &PromptNode, call: &CallNode) -> NormalizedEvent {
    NormalizedEvent {
        id: call.id.clone(),
        source: graph.source.clone(),
        source_event_type: "tool_call".to_owned(),
        normalized_type: "tool_call".to_owned(),
        role: None,
        timestamp: call.started_at.clone().or_else(|| call.completed_at.clone()),
        line_number: call.event_index + 1,
        parent_id: call
            .assistant_message_id
            .clone()
            .or_else(|| Some(prompt.id.clone())),
        turn_id: Some(prompt.id.clone()),
        tool_call_id: Some(call.id.clone()),
        name: Some(call.name.clone()),
        status: Some(call.status.clone()),
        duration_ms: call.duration_ms,
        summary: format!("{} {}", call.kind, call.name),
        content: None,
        arguments: Some(call.argument_preview.clone()),
        output: call.output_preview.clone(),
        files: Vec::new(),
        artifacts: Vec::new(),
        raw: raw_ref(graph, call.event_index),
        warnings: if call.status != "completed" {
            vec!["Tool call has no linked completed result.".to_owned()]
        } else {
            Vec::new()
        },
        redactions: Vec::new(),
        inferred: Vec::new(),
    }
}

fn normalized_assistant_message_event(
    graph: &SessionGraph,
    prompt: &PromptNode,
    message: &MessageNode,
) -> NormalizedEvent {
    NormalizedEvent {
        id: message.id.clone(),
        source: graph.source.clone(),
        source_event_type: "message".to_owned(),
        normalized_type: "assistant_message".to_owned(),
        role: Some("assistant".to_owned()),
        timestamp: message.timestamp.clone(),
        line_number: message.event_index + 1,
        parent_id: Some(prompt.id.clone()),
        turn_id: Some(prompt.id.clone()),
        tool_call_id: None,
        name: None,
        status: None,
        duration_ms: None,
        summary: normalize_text(&message.text),
        content: Some(message.text.clone()),
        arguments: None,
        output: None,
        files: Vec::new(),
        artifacts: Vec::new(),
        raw: raw_ref(graph, message.event_index),
        warnings: Vec::new(),
        redactions: Vec::new(),
        inferred: Vec::new(),
    }
}

fn normalized_file_change_event(
    graph: &SessionGraph,
    prompt: &PromptNode,
    change: &FileChangeNode,
) -> NormalizedEvent {
    NormalizedEvent {
        id: change.id.clone(),
        source: graph.source.clone(),
        source_event_type: "file_change".to_owned(),
        normalized_type: "file_activity".to_owned(),
        role: None,
        timestamp: change.timestamp.clone(),
        line_number: change.event_index + 1,
        parent_id: change.call_id.clone().or_else(|| Some(prompt.id.clone())),
        turn_id: Some(prompt.id.clone()),
        tool_call_id: change.call_id.clone(),
        name: Some(change.change_type.clone()),
        status: None,
        duration_ms: None,
        summary: change.detail.clone(),
        content: Some(change.preview.clone()),
        arguments: None,
        output: None,
        files: vec![change.path.clone()],
        artifacts: Vec::new(),
        raw: raw_ref(graph, change.event_index),
        warnings: Vec::new(),
        redactions: Vec::new(),
        inferred: vec!["file activity inferred from logged tool payload".to_owned()],
    }
}

fn push_subagent_normalized_events(
    graph: &SessionGraph,
    prompt: &PromptNode,
    call: &CallNode,
    events: &mut Vec<NormalizedEvent>,
) {
    for child in &call.subagent_nodes {
        let mut event = normalized_call_event(graph, prompt, child);
        event.parent_id = Some(call.id.clone());
        event.inferred.push("subagent event linked from child session scan".to_owned());
        events.push(event);
        push_subagent_normalized_events(graph, prompt, child, events);
    }
}

fn raw_ref(graph: &SessionGraph, event_index: usize) -> RawEventRef {
    RawEventRef {
        line_number: event_index + 1,
        event_index,
        session_path: graph.session_path.clone(),
    }
}

fn write_export(
    source: SessionSource,
    input: &Path,
    output: &Path,
    format: ExportFormat,
    redacted: bool,
    profile: RedactionProfile,
) -> Result<()> {
    let mut graph = parse_graph_for_file(source, input)?;
    let redaction_report = redacted.then(|| {
        let report = redact_session_graph(&mut graph, profile);
        graph.insights = trace_insights_from_graph(&graph);
        report
    });
    let trace = agent_trace_from_graph(&graph, redaction_report.clone());
    let content = match format {
        ExportFormat::Html => render_html_report(&trace, redaction_report.as_ref()),
        ExportFormat::Markdown => render_markdown_report(&trace, redaction_report.as_ref()),
        ExportFormat::Json => serde_json::to_string_pretty(&trace).context("failed to encode normalized trace")?,
    };
    fs::write(output, content).with_context(|| format!("failed to write {}", output.display()))
}

fn render_html_report(trace: &AgentTrace, redaction_report: Option<&RedactionReport>) -> String {
    let mut body = String::new();
    body.push_str("<!doctype html><meta charset=\"utf-8\"><title>Perlustron Report</title>");
    body.push_str("<style>body{font-family:system-ui,sans-serif;margin:32px;line-height:1.45;color:#182125}table{border-collapse:collapse;width:100%;margin:16px 0}td,th{border:1px solid #d7dee2;padding:6px 8px;text-align:left;vertical-align:top}code,pre{background:#f4f6f7;padding:2px 4px;border-radius:4px}pre{white-space:pre-wrap;padding:12px}.warn{color:#8a3b00}.redacted{color:#7a1f1f;font-weight:700}</style>");
    body.push_str(&format!("<h1>Perlustron {} Session Report</h1>", escape_html(&trace.source)));
    if let Some(report) = redaction_report {
        body.push_str(&format!(
            "<p class=\"redacted\">Redacted export using profile <code>{}</code>. Review before sharing.</p>",
            escape_html(&report.profile)
        ));
    } else {
        body.push_str("<p class=\"warn\">Unredacted report. Raw logs may contain prompts, paths, command output, images, and secrets.</p>");
    }
    body.push_str("<h2>Metadata</h2><table>");
    push_html_row(&mut body, "Source", &trace.source);
    push_html_row(&mut body, "Session ID", trace.session_id.as_deref().unwrap_or("unknown"));
    push_html_row(&mut body, "Log file", &trace.log_file_path);
    push_html_row(&mut body, "Working directory", trace.cwd.as_deref().unwrap_or("unknown"));
    push_html_row(&mut body, "Schema", &trace.schema_version);
    body.push_str("</table>");
    body.push_str(&render_health_html(&trace.parser_health));
    body.push_str(&render_insight_section_html(&trace.insights));
    body.push_str(&render_file_impact_section_html(&trace.insights));
    body.push_str("<h2>Timeline</h2><table><thead><tr><th>Line</th><th>Type</th><th>Name</th><th>Status</th><th>Summary</th></tr></thead><tbody>");
    for event in &trace.events {
        body.push_str("<tr>");
        push_html_cell(&mut body, &event.line_number.to_string());
        push_html_cell(&mut body, &event.normalized_type);
        push_html_cell(&mut body, event.name.as_deref().unwrap_or(""));
        push_html_cell(&mut body, event.status.as_deref().unwrap_or(""));
        push_html_cell(&mut body, &event.summary);
        body.push_str("</tr>");
    }
    body.push_str("</tbody></table><h2>Transcript</h2>");
    for event in &trace.events {
        if matches!(
            event.normalized_type.as_str(),
            "user_prompt" | "assistant_message" | "tool_call" | "compaction" | "malformed" | "unknown"
        ) {
            body.push_str(&format!(
                "<h3>Line {}: {}</h3><pre>{}</pre>",
                event.line_number,
                escape_html(&event.summary),
                escape_html(
                    event
                        .content
                        .as_deref()
                        .or(event.output.as_deref())
                        .or(event.arguments.as_deref())
                        .unwrap_or("")
                )
            ));
        }
    }
    body
}

fn render_health_html(health: &ParserHealth) -> String {
    let mut body = String::from("<h2>Parser Health</h2><table>");
    push_html_row(&mut body, "Lines read", &health.total_lines_read.to_string());
    push_html_row(&mut body, "Parsed events", &health.parsed_event_count.to_string());
    push_html_row(&mut body, "Renderable events", &health.renderable_event_count.to_string());
    push_html_row(&mut body, "Unknown events", &health.unknown_event_count.to_string());
    push_html_row(&mut body, "Malformed lines", &health.malformed_line_count.to_string());
    push_html_row(
        &mut body,
        "Skipped large payloads",
        &health.skipped_large_payload_count.to_string(),
    );
    push_html_row(&mut body, "Tool calls", &health.tool_call_count.to_string());
    push_html_row(&mut body, "Tool results", &health.tool_result_count.to_string());
    push_html_row(&mut body, "File activity", &health.file_activity_count.to_string());
    push_html_row(&mut body, "Compactions", &health.compaction_count.to_string());
    push_html_row(
        &mut body,
        "Token telemetry",
        if health.token_telemetry_available { "yes" } else { "no" },
    );
    body.push_str("</table>");
    if !health.unknown_event_types.is_empty() {
        body.push_str("<h3>Unknown Event Types</h3><ul>");
        for unknown in &health.unknown_event_types {
            body.push_str(&format!(
                "<li><code>{}</code>: {}</li>",
                escape_html(&unknown.source_event_type),
                unknown.count
            ));
        }
        body.push_str("</ul>");
    }
    body
}

fn render_markdown_report(trace: &AgentTrace, redaction_report: Option<&RedactionReport>) -> String {
    let mut out = String::new();
    out.push_str(&format!("# Perlustron {} Session Report\n\n", trace.source));
    if let Some(report) = redaction_report {
        out.push_str(&format!(
            "**Redacted export:** profile `{}`. Review before sharing.\n\n",
            report.profile
        ));
    } else {
        out.push_str("**Warning:** unredacted report. Raw logs may contain sensitive content.\n\n");
    }
    out.push_str("## Metadata\n\n");
    out.push_str(&format!("- Source: `{}`\n", trace.source));
    out.push_str(&format!(
        "- Session ID: `{}`\n",
        trace.session_id.as_deref().unwrap_or("unknown")
    ));
    out.push_str(&format!("- Log file: `{}`\n", trace.log_file_path));
    out.push_str(&format!(
        "- Working directory: `{}`\n",
        trace.cwd.as_deref().unwrap_or("unknown")
    ));
    out.push_str("\n## Parser Health\n\n");
    out.push_str(&format!("- Lines read: {}\n", trace.parser_health.total_lines_read));
    out.push_str(&format!("- Parsed events: {}\n", trace.parser_health.parsed_event_count));
    out.push_str(&format!(
        "- Renderable events: {}\n",
        trace.parser_health.renderable_event_count
    ));
    out.push_str(&format!("- Unknown events: {}\n", trace.parser_health.unknown_event_count));
    out.push_str(&format!("- Malformed lines: {}\n", trace.parser_health.malformed_line_count));
    out.push_str(&format!("- Tool calls: {}\n", trace.parser_health.tool_call_count));
    out.push_str(&format!("- Tool results: {}\n", trace.parser_health.tool_result_count));
    out.push_str(&format!("- File activity: {}\n", trace.parser_health.file_activity_count));
    out.push_str(&format!("- Compactions: {}\n", trace.parser_health.compaction_count));
    out.push_str("\n## Insight Summary\n\n");
    out.push_str("### What should I inspect first?\n\n");
    if trace.insights.inspection_queue.is_empty() {
        out.push_str("- No high-priority findings detected.\n");
    } else {
        for item in &trace.insights.inspection_queue {
            out.push_str(&format!(
                "- **{}** `{}`: {}\n",
                markdown_cell(&item.title),
                markdown_cell(&item.confidence),
                markdown_cell(&item.redaction_safe_summary)
            ));
        }
    }
    out.push('\n');
    if let Some(chain) = &trace.insights.failure_chain {
        out.push_str(&format!(
            "- First logged error-like event: line {} - {}\n",
            chain.first_logged_error.line_number, chain.first_logged_error.title
        ));
        out.push_str(&format!("- Final logged outcome: {}\n", chain.final_outcome));
    } else {
        out.push_str("- First logged error-like event: none detected\n");
    }
    out.push_str(&format!(
        "- Repeated patterns: {}\n",
        trace.insights.repeated_patterns.len()
    ));
    out.push_str(&format!(
        "- Suspicious tool calls: {}\n",
        trace.insights.suspicious_tool_calls.len()
    ));
    out.push_str(&format!(
        "- Context pressure: {}\n",
        trace.insights.context_pressure.status
    ));
    out.push_str(&format!(
        "- Files edited/read/referenced: {}/{}/{}\n",
        trace.insights.file_impact.files_edited.len(),
        trace.insights.file_impact.files_read.len(),
        trace.insights.file_impact.files_referenced.len()
    ));
    out.push_str("\n## Timeline\n\n| Line | Type | Name | Status | Summary |\n| --- | --- | --- | --- | --- |\n");
    for event in &trace.events {
        out.push_str(&format!(
            "| {} | {} | {} | {} | {} |\n",
            event.line_number,
            markdown_cell(&event.normalized_type),
            markdown_cell(event.name.as_deref().unwrap_or("")),
            markdown_cell(event.status.as_deref().unwrap_or("")),
            markdown_cell(&event.summary)
        ));
    }
    out.push_str("\n## Transcript\n\n");
    for event in &trace.events {
        if matches!(
            event.normalized_type.as_str(),
            "user_prompt" | "assistant_message" | "tool_call" | "compaction" | "malformed" | "unknown"
        ) {
            out.push_str(&format!("### Line {}: {}\n\n", event.line_number, event.summary));
            let text = event
                .content
                .as_deref()
                .or(event.output.as_deref())
                .or(event.arguments.as_deref())
                .unwrap_or("");
            out.push_str("```text\n");
            out.push_str(&normalize_text(text));
            out.push_str("\n```\n\n");
        }
    }
    out
}

fn render_insight_section_html(insights: &TraceInsights) -> String {
    let mut body = String::from("<h2>Insight Summary</h2><table>");
    push_html_row(
        &mut body,
        "Inspection queue",
        &insights.inspection_queue.len().to_string(),
    );
    if let Some(chain) = &insights.failure_chain {
        push_html_row(
            &mut body,
            "First logged error-like event",
            &format!(
                "line {} - {}",
                chain.first_logged_error.line_number, chain.first_logged_error.title
            ),
        );
        push_html_row(&mut body, "Final logged outcome", &chain.final_outcome);
    } else {
        push_html_row(&mut body, "First logged error-like event", "none detected");
    }
    push_html_row(
        &mut body,
        "Repeated patterns",
        &insights.repeated_patterns.len().to_string(),
    );
    push_html_row(
        &mut body,
        "Suspicious tool calls",
        &insights.suspicious_tool_calls.len().to_string(),
    );
    push_html_row(
        &mut body,
        "Context pressure",
        &insights.context_pressure.status,
    );
    push_html_row(
        &mut body,
        "Approval/sandbox friction",
        &insights.approval_friction.len().to_string(),
    );
    body.push_str("</table>");
    if !insights.inspection_queue.is_empty() {
        body.push_str("<h3>What Should I Inspect First?</h3><ul>");
        for item in &insights.inspection_queue {
            body.push_str(&format!(
                "<li><strong>{}</strong> <code>{}</code>: {}</li>",
                escape_html(&item.title),
                escape_html(&item.confidence),
                escape_html(&item.redaction_safe_summary)
            ));
        }
        body.push_str("</ul>");
    }
    if !insights.repeated_patterns.is_empty() {
        body.push_str("<h3>Repeated Patterns</h3><ul>");
        for pattern in &insights.repeated_patterns {
            body.push_str(&format!(
                "<li>{} x{} on lines {}-{}</li>",
                escape_html(&pattern.title),
                pattern.count,
                pattern.first_line,
                pattern.last_line
            ));
        }
        body.push_str("</ul>");
    }
    if !insights.suspicious_tool_calls.is_empty() {
        body.push_str("<h3>Suspicious Tool Calls</h3><ul>");
        for call in &insights.suspicious_tool_calls {
            body.push_str(&format!(
                "<li>line {} <code>{}</code>: {}</li>",
                call.call.line_number,
                escape_html(&call.tool_name),
                escape_html(&call.reason)
            ));
        }
        body.push_str("</ul>");
    }
    body
}

fn render_file_impact_section_html(insights: &TraceInsights) -> String {
    let mut body = String::from("<h2>File Impact</h2><table><thead><tr><th>Class</th><th>File</th><th>Count</th><th>Lines</th><th>Evidence</th></tr></thead><tbody>");
    for (class_name, files) in [
        ("edited", insights.file_impact.files_edited.as_slice()),
        ("read", insights.file_impact.files_read.as_slice()),
        ("referenced", insights.file_impact.files_referenced.as_slice()),
    ] {
        for file in files {
            body.push_str("<tr>");
            push_html_cell(&mut body, class_name);
            push_html_cell(&mut body, &file.path);
            push_html_cell(&mut body, &file.count.to_string());
            push_html_cell(
                &mut body,
                &format!("{}-{}", file.first_line, file.last_line),
            );
            push_html_cell(&mut body, &file.evidence);
            body.push_str("</tr>");
        }
    }
    body.push_str("</tbody></table>");
    body
}

fn push_html_row(body: &mut String, label: &str, value: &str) {
    body.push_str("<tr>");
    push_html_cell(body, label);
    push_html_cell(body, value);
    body.push_str("</tr>");
}

fn push_html_cell(body: &mut String, value: &str) {
    body.push_str("<td>");
    body.push_str(&escape_html(value));
    body.push_str("</td>");
}

fn escape_html(value: &str) -> String {
    value
        .replace('&', "&amp;")
        .replace('<', "&lt;")
        .replace('>', "&gt;")
        .replace('"', "&quot;")
}

fn markdown_cell(value: &str) -> String {
    value.replace('|', "\\|").replace('\n', " ")
}
