// SPDX-License-Identifier: MIT OR Apache-2.0

const INSIGHT_SCHEMA_VERSION: &str = "perlustron-insights-v1";
const ERROR_LIKE_TERMS: &[&str] = &[
    "error",
    "failed",
    "failure",
    "exception",
    "panic",
    "denied",
    "permission",
    "timeout",
    "traceback",
    "not found",
    "exit code",
    "fatal",
    "forbidden",
    "sandbox",
];
const APPROVAL_FRICTION_TERMS: &[&str] = &[
    "approval",
    "permission",
    "sandbox",
    "denied",
    "forbidden",
    "policy",
    "access is denied",
];

#[derive(Debug, Clone, Default, Serialize)]
#[serde(rename_all = "camelCase")]
struct TraceInsights {
    schema_version: String,
    generated_at: String,
    inspection_queue: Vec<InspectionQueueItem>,
    failure_chain: Option<FailureChainInsight>,
    repeated_patterns: Vec<RepeatedPatternInsight>,
    suspicious_tool_calls: Vec<SuspiciousToolCallInsight>,
    context_pressure: ContextPressureInsight,
    file_impact: FileImpactInsight,
    approval_friction: Vec<InsightNote>,
    warnings: Vec<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct InspectionQueueItem {
    id: String,
    title: String,
    severity: String,
    confidence: String,
    directness: String,
    summary: String,
    explanation: String,
    event_ids: Vec<String>,
    line_numbers: Vec<usize>,
    related_files: Vec<String>,
    related_tools: Vec<String>,
    redaction_safe_summary: String,
    raw_available: bool,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct FailureChainInsight {
    title: String,
    severity: String,
    confidence: String,
    explanation: String,
    first_logged_error: InsightEventLink,
    possibly_related_events: Vec<InsightEventLink>,
    subsequent_retries: Vec<InsightEventLink>,
    file_changes_after_first_error: Vec<InsightEventLink>,
    final_outcome: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct RepeatedPatternInsight {
    title: String,
    severity: String,
    confidence: String,
    pattern_type: String,
    key: String,
    count: usize,
    first_line: usize,
    last_line: usize,
    examples: Vec<String>,
    linked_events: Vec<InsightEventLink>,
    directness: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct SuspiciousToolCallInsight {
    title: String,
    severity: String,
    confidence: String,
    reason: String,
    call: InsightEventLink,
    tool_name: String,
    status: String,
    duration_ms: Option<u64>,
    output_preview: Option<String>,
}

#[derive(Debug, Clone, Default, Serialize)]
#[serde(rename_all = "camelCase")]
struct ContextPressureInsight {
    status: String,
    latest_total_tokens: Option<u64>,
    context_window: Option<u64>,
    latest_context_percent: Option<f64>,
    high_context_markers: Vec<InsightEventLink>,
    compaction_markers: Vec<InsightEventLink>,
    explanation: String,
}

#[derive(Debug, Clone, Default, Serialize)]
#[serde(rename_all = "camelCase")]
struct FileImpactInsight {
    files_read: Vec<FileImpactItem>,
    files_edited: Vec<FileImpactItem>,
    files_referenced: Vec<FileImpactItem>,
    repeated_files: Vec<FileImpactItem>,
    files_before_first_error: Vec<String>,
    files_after_first_error: Vec<String>,
    notes: Vec<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct FileImpactItem {
    path: String,
    count: usize,
    first_line: usize,
    last_line: usize,
    classification: String,
    evidence: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct InsightEventLink {
    id: String,
    line_number: usize,
    event_index: usize,
    normalized_type: String,
    title: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct InsightNote {
    title: String,
    severity: String,
    confidence: String,
    explanation: String,
    linked_events: Vec<InsightEventLink>,
}

#[derive(Debug, Clone)]
struct FlatTraceEvent {
    id: String,
    line_number: usize,
    event_index: usize,
    normalized_type: String,
    title: String,
    text: String,
    tool_name: Option<String>,
    status: Option<String>,
    duration_ms: Option<u64>,
    output_preview: Option<String>,
}

#[derive(Debug, Clone, Copy)]
enum SuspiciousReason {
    MissingResult,
    LongRunning,
    EmptyOutput,
    NonzeroExit,
    ErrorLikeOutput,
}

impl SuspiciousReason {
    fn message(self) -> &'static str {
        match self {
            Self::MissingResult => "tool call has no linked completed result",
            Self::LongRunning => "tool call ran for at least 30 seconds",
            Self::EmptyOutput => "tool result output was empty",
            Self::NonzeroExit => "tool output logged nonzero exit code",
            Self::ErrorLikeOutput => "tool output contains error-like text",
        }
    }

    fn is_high(self) -> bool {
        matches!(
            self,
            Self::MissingResult | Self::NonzeroExit | Self::ErrorLikeOutput
        )
    }
}

#[derive(Debug, Clone)]
struct FileObservation {
    path: String,
    line_number: usize,
    event_index: usize,
    classification: String,
    evidence: String,
}

fn trace_insights_from_graph(graph: &SessionGraph) -> TraceInsights {
    let events = flatten_graph_events(graph);
    let first_error_index = events.iter().position(flat_event_is_error_like);
    let first_error = first_error_index.and_then(|index| events.get(index));
    let file_observations = collect_file_observations(graph, &events);
    let failure_chain = first_error.map(|event| {
        build_failure_chain(
            event,
            first_error_index.unwrap_or_default(),
            &events,
            &file_observations,
        )
    });
    let repeated_patterns = detect_repeated_patterns(&events, &file_observations);
    let suspicious_tool_calls = detect_suspicious_tool_calls(&events);
    let context_pressure = analyze_context_pressure(graph);
    let file_impact = analyze_file_impact(&file_observations, first_error.map(|event| event.line_number));
    let approval_friction = detect_approval_friction(&events);
    let mut warnings = Vec::new();
    if graph.parser_health.unknown_event_count > 0 {
        warnings.push("Unknown events were preserved in parser health; insights may be incomplete for those shapes.".to_owned());
    }
    if graph.parser_health.malformed_line_count > 0 {
        warnings.push("Malformed lines were preserved as parser health references and skipped for semantic insight analysis.".to_owned());
    }
    if graph.token_telemetry.samples.is_empty() {
        warnings.push("No token telemetry was logged; context-pressure insight is limited.".to_owned());
    }
    let inspection_queue = build_inspection_queue(
        graph,
        failure_chain.as_ref(),
        &repeated_patterns,
        &suspicious_tool_calls,
        &context_pressure,
        &file_impact,
        &approval_friction,
    );

    TraceInsights {
        schema_version: INSIGHT_SCHEMA_VERSION.to_owned(),
        generated_at: isoish_now(),
        inspection_queue,
        failure_chain,
        repeated_patterns,
        suspicious_tool_calls,
        context_pressure,
        file_impact,
        approval_friction,
        warnings,
    }
}


fn flatten_graph_events(graph: &SessionGraph) -> Vec<FlatTraceEvent> {
    let mut events = Vec::new();
    for prompt in &graph.prompts {
        events.push(FlatTraceEvent {
            id: prompt.id.clone(),
            line_number: prompt.event_index + 1,
            event_index: prompt.event_index,
            normalized_type: "user_prompt".to_owned(),
            title: prompt.title.clone(),
            text: prompt.text.clone(),
            tool_name: None,
            status: None,
            duration_ms: None,
            output_preview: None,
        });
        for message in &prompt.assistant_messages {
            events.push(FlatTraceEvent {
                id: message.id.clone(),
                line_number: message.event_index + 1,
                event_index: message.event_index,
                normalized_type: "assistant_message".to_owned(),
                title: normalize_text(&message.text),
                text: message.text.clone(),
                tool_name: None,
                status: None,
                duration_ms: None,
                output_preview: None,
            });
        }
        for call in &prompt.calls {
            push_flat_call_event(call, &mut events);
        }
        for change in &prompt.file_changes {
            events.push(FlatTraceEvent {
                id: change.id.clone(),
                line_number: change.event_index + 1,
                event_index: change.event_index,
                normalized_type: "file_activity".to_owned(),
                title: change.detail.clone(),
                text: format!("{}\n{}\n{}", change.path, change.detail, change.preview),
                tool_name: None,
                status: None,
                duration_ms: None,
                output_preview: None,
            });
        }
    }
    for compaction in &graph.compactions {
        events.push(FlatTraceEvent {
            id: compaction.id.clone(),
            line_number: compaction.event_index + 1,
            event_index: compaction.event_index,
            normalized_type: "compaction".to_owned(),
            title: compaction.title.clone(),
            text: compaction.detail.clone(),
            tool_name: None,
            status: None,
            duration_ms: None,
            output_preview: None,
        });
    }
    for unknown in &graph.parser_health.unknown_events {
        events.push(FlatTraceEvent {
            id: format!("unknown-{}", unknown.event_index),
            line_number: unknown.line_number,
            event_index: unknown.event_index,
            normalized_type: "unknown".to_owned(),
            title: unknown.source_event_type.clone(),
            text: unknown.preview.clone(),
            tool_name: None,
            status: Some("unsupported".to_owned()),
            duration_ms: None,
            output_preview: None,
        });
    }
    for malformed in &graph.parser_health.malformed_lines {
        events.push(FlatTraceEvent {
            id: format!("malformed-{}", malformed.event_index),
            line_number: malformed.line_number,
            event_index: malformed.event_index,
            normalized_type: "malformed".to_owned(),
            title: malformed.error.clone(),
            text: malformed.preview.clone(),
            tool_name: None,
            status: Some("malformed".to_owned()),
            duration_ms: None,
            output_preview: None,
        });
    }
    events.sort_by_key(|event| event.line_number);
    events
}

fn push_flat_call_event(call: &CallNode, events: &mut Vec<FlatTraceEvent>) {
    events.push(FlatTraceEvent {
        id: call.id.clone(),
        line_number: call.event_index + 1,
        event_index: call.event_index,
        normalized_type: "tool_call".to_owned(),
        title: format!("{} {}", call.kind, call.name),
        text: format!(
            "{}\n{}",
            call.argument_preview,
            call.output_preview.as_deref().unwrap_or_default()
        ),
        tool_name: Some(call.name.clone()),
        status: Some(call.status.clone()),
        duration_ms: call.duration_ms,
        output_preview: call.output_preview.clone(),
    });
    for child in &call.subagent_nodes {
        push_flat_call_event(child, events);
    }
}

fn build_failure_chain(
    first_error: &FlatTraceEvent,
    first_error_index: usize,
    events: &[FlatTraceEvent],
    file_observations: &[FileObservation],
) -> FailureChainInsight {
    let related = events
        .iter()
        .skip(first_error_index.saturating_sub(2))
        .filter(|event| event.id != first_error.id)
        .map(insight_link_from_flat_event)
        .collect::<Vec<_>>();
    let retry_key = first_error.tool_name.as_deref().or_else(|| {
        if first_error.normalized_type == "tool_call" {
            Some(first_error.title.as_str())
        } else {
            None
        }
    });
    let subsequent_retries = retry_key
        .map(|key| {
            events
                .iter()
                .skip(first_error_index + 1)
                .filter(|event| {
                    event
                        .tool_name
                        .as_deref()
                .map(|name| name == key)
                        .unwrap_or(false)
                        || event.title == key
                })
                .map(insight_link_from_flat_event)
                .collect::<Vec<_>>()
        })
        .unwrap_or_default();
    let file_changes_after_first_error = file_observations
        .iter()
        .filter(|file| file.line_number > first_error.line_number && file.classification == "edited")
        .map(|file| InsightEventLink {
            id: format!("file-{}", file.event_index),
            line_number: file.line_number,
            event_index: file.event_index,
            normalized_type: "file_activity".to_owned(),
            title: file.path.clone(),
        })
        .collect::<Vec<_>>();
    let final_outcome = events
        .iter()
        .rev()
        .find(|event| event.normalized_type == "assistant_message")
        .map(|event| event.title.clone())
        .unwrap_or_else(|| "No final assistant message was logged after the first error-like event.".to_owned());

    FailureChainInsight {
        title: "First logged error-like event".to_owned(),
        severity: "warning".to_owned(),
        confidence: "strong heuristic".to_owned(),
        explanation: "This highlights the first logged event whose text resembles an error, then nearby logged events. It does not prove hidden reasoning or root cause.".to_owned(),
        first_logged_error: insight_link_from_flat_event(first_error),
        possibly_related_events: related,
        subsequent_retries,
        file_changes_after_first_error,
        final_outcome,
    }
}

fn insight_link_from_flat_event(event: &FlatTraceEvent) -> InsightEventLink {
    InsightEventLink {
        id: event.id.clone(),
        line_number: event.line_number,
        event_index: event.event_index,
        normalized_type: event.normalized_type.clone(),
        title: normalize_text(&event.title),
    }
}

fn render_insights_text(insights: &TraceInsights) -> String {
    let mut out = String::new();
    out.push_str("Perlustron insights\n");
    out.push_str("  what should I inspect first:\n");
    if insights.inspection_queue.is_empty() {
        out.push_str("    - no high-priority findings detected\n");
    } else {
        for item in &insights.inspection_queue {
            out.push_str(&format!(
                "    - [{}] {}: {} ({})\n",
                item.severity, item.title, item.summary, item.confidence
            ));
        }
    }
    if let Some(chain) = &insights.failure_chain {
        out.push_str(&format!(
            "  first logged error-like event: line {} - {}\n",
            chain.first_logged_error.line_number, chain.first_logged_error.title
        ));
        if !chain.subsequent_retries.is_empty() {
            out.push_str(&format!(
                "  possible retries after first error: {}\n",
                chain.subsequent_retries.len()
            ));
        }
        if !chain.file_changes_after_first_error.is_empty() {
            out.push_str(&format!(
                "  file changes after first error: {}\n",
                chain.file_changes_after_first_error.len()
            ));
        }
    } else {
        out.push_str("  first logged error-like event: none detected\n");
    }
    out.push_str(&format!(
        "  repeated patterns: {}\n",
        insights.repeated_patterns.len()
    ));
    for pattern in &insights.repeated_patterns {
        out.push_str(&format!(
            "    - {} x{} (lines {}-{})\n",
            pattern.title, pattern.count, pattern.first_line, pattern.last_line
        ));
    }
    out.push_str(&format!(
        "  suspicious tool calls: {}\n",
        insights.suspicious_tool_calls.len()
    ));
    for call in &insights.suspicious_tool_calls {
        out.push_str(&format!(
            "    - line {} {}: {}\n",
            call.call.line_number, call.tool_name, call.reason
        ));
    }
    out.push_str(&format!(
        "  context pressure: {}\n",
        insights.context_pressure.status
    ));
    out.push_str(&format!(
        "  files edited/read/referenced: {}/{}/{}\n",
        insights.file_impact.files_edited.len(),
        insights.file_impact.files_read.len(),
        insights.file_impact.files_referenced.len()
    ));
    out.push_str(&format!(
        "  approval/sandbox friction events: {}\n",
        insights.approval_friction.len()
    ));
    out
}

fn write_insights_report(
    source: Option<SessionSource>,
    input: &Path,
    output: Option<&Path>,
    format: DiffFormat,
    redacted: bool,
    profile: RedactionProfile,
) -> Result<Option<String>> {
    let graph = parse_graph_for_file(source_for_path(input, source), input)?;
    let mut insights = graph.insights.clone();
    let mut session_path = graph.session_path.clone();
    let redaction_report = redacted.then(|| {
        let mut redacted_graph = graph.clone();
        let report = redact_session_graph(&mut redacted_graph, profile);
        session_path = redacted_graph.session_path;
        redact_trace_insights(&mut insights, profile);
        report
    });
    let content = match format {
        DiffFormat::Text => render_insights_text(&insights),
        DiffFormat::Json => {
            let value = json!({
                "schemaVersion": INSIGHT_SCHEMA_VERSION,
                "source": graph.source,
                "sessionId": graph.session_id,
                "sessionPath": session_path,
                "redactionReport": redaction_report,
                "insights": insights,
            });
            serde_json::to_string_pretty(&value).context("failed to encode insights report")?
        }
        DiffFormat::Html => render_insights_html(&insights, "Perlustron Insights Report"),
    };
    if let Some(output) = output {
        fs::write(output, content).with_context(|| format!("failed to write {}", output.display()))?;
        Ok(None)
    } else {
        Ok(Some(content))
    }
}

fn redact_trace_insights(insights: &mut TraceInsights, profile: RedactionProfile) {
    let mut report = RedactionReport {
        profile: profile.as_str().to_owned(),
        ..Default::default()
    };
    if let Some(chain) = &mut insights.failure_chain {
        redact_insight_link(&mut chain.first_logged_error, profile, &mut report);
        for event in &mut chain.possibly_related_events {
            redact_insight_link(event, profile, &mut report);
        }
        for event in &mut chain.subsequent_retries {
            redact_insight_link(event, profile, &mut report);
        }
        for event in &mut chain.file_changes_after_first_error {
            redact_insight_link(event, profile, &mut report);
        }
        chain.final_outcome = redact_text(
            &chain.final_outcome,
            profile,
            "insights.finalOutcome",
            &mut report,
        );
    }
    for item in &mut insights.inspection_queue {
        item.summary = redact_text(&item.summary, profile, "insights.queue.summary", &mut report);
        item.explanation = redact_text(
            &item.explanation,
            profile,
            "insights.queue.explanation",
            &mut report,
        );
        for file in &mut item.related_files {
            *file = redact_text(file, profile, "insights.queue.file", &mut report);
        }
        item.redaction_safe_summary = redact_text(
            &item.redaction_safe_summary,
            profile,
            "insights.queue.safeSummary",
            &mut report,
        );
    }
    for pattern in &mut insights.repeated_patterns {
        if profile_is_strict_or_structure(profile) {
            pattern.key = format!("[REDACTED:pattern-key hash:{}]", stable_hash_text(&pattern.key));
            report.redacted_field_count += 1;
            increment_kind(&mut report.findings_by_kind, "strict-content");
        } else {
            pattern.key = redact_text(&pattern.key, profile, "insights.pattern.key", &mut report);
        }
        for example in &mut pattern.examples {
            *example = redact_text(example, profile, "insights.pattern.example", &mut report);
        }
        for event in &mut pattern.linked_events {
            redact_insight_link(event, profile, &mut report);
        }
    }
    for call in &mut insights.suspicious_tool_calls {
        redact_insight_link(&mut call.call, profile, &mut report);
        if let Some(output) = &mut call.output_preview {
            *output = redact_text(output, profile, "insights.tool.output", &mut report);
        }
    }
    for event in &mut insights.context_pressure.high_context_markers {
        redact_insight_link(event, profile, &mut report);
    }
    for event in &mut insights.context_pressure.compaction_markers {
        redact_insight_link(event, profile, &mut report);
    }
    for collection in [
        &mut insights.file_impact.files_read,
        &mut insights.file_impact.files_edited,
        &mut insights.file_impact.files_referenced,
        &mut insights.file_impact.repeated_files,
    ] {
        for file in collection {
            file.path = redact_text(&file.path, profile, "insights.file.path", &mut report);
        }
    }
    for path in &mut insights.file_impact.files_before_first_error {
        *path = redact_text(path, profile, "insights.file.path", &mut report);
    }
    for path in &mut insights.file_impact.files_after_first_error {
        *path = redact_text(path, profile, "insights.file.path", &mut report);
    }
    for note in &mut insights.approval_friction {
        for event in &mut note.linked_events {
            redact_insight_link(event, profile, &mut report);
        }
    }
}

fn redact_insight_link(
    link: &mut InsightEventLink,
    profile: RedactionProfile,
    report: &mut RedactionReport,
) {
    link.title = redact_text(&link.title, profile, "insights.event.title", report);
}

fn render_insights_html(insights: &TraceInsights, title: &str) -> String {
    let mut body = String::new();
    body.push_str("<!doctype html><meta charset=\"utf-8\">");
    body.push_str(&format!("<title>{}</title>", escape_html(title)));
    body.push_str("<style>body{font-family:system-ui,sans-serif;margin:32px;line-height:1.45;color:#182125}table{border-collapse:collapse;width:100%;margin:16px 0}td,th{border:1px solid #d7dee2;padding:6px 8px;text-align:left;vertical-align:top}code,pre{background:#f4f6f7;padding:2px 4px;border-radius:4px}pre{white-space:pre-wrap;padding:12px}.warn{color:#8a3b00}.muted{color:#5f6b74}</style>");
    body.push_str(&format!("<h1>{}</h1>", escape_html(title)));
    body.push_str("<p class=\"muted\">Insights are cautious heuristics over logged events only. Perlustron does not recover hidden or unlogged reasoning.</p>");
    body.push_str("<h2>What Should I Inspect First?</h2><table><thead><tr><th>Severity</th><th>Finding</th><th>Confidence</th><th>Lines</th><th>Why</th></tr></thead><tbody>");
    for item in &insights.inspection_queue {
        body.push_str("<tr>");
        push_html_cell(&mut body, &item.severity);
        push_html_cell(&mut body, &item.title);
        push_html_cell(&mut body, &item.confidence);
        push_html_cell(
            &mut body,
            &item
                .line_numbers
                .iter()
                .map(|line| line.to_string())
                .collect::<Vec<_>>()
                .join(", "),
        );
        push_html_cell(&mut body, &item.summary);
        body.push_str("</tr>");
    }
    body.push_str("</tbody></table>");
    if let Some(chain) = &insights.failure_chain {
        body.push_str("<h2>Failure Chain</h2><table>");
        push_html_row(&mut body, "First logged error-like event", &format!("line {} - {}", chain.first_logged_error.line_number, chain.first_logged_error.title));
        push_html_row(&mut body, "Confidence", &chain.confidence);
        push_html_row(&mut body, "Final logged outcome", &chain.final_outcome);
        body.push_str("</table>");
    }
    body.push_str("<h2>Repeated Patterns</h2><table><thead><tr><th>Type</th><th>Count</th><th>Lines</th><th>Pattern</th></tr></thead><tbody>");
    for pattern in &insights.repeated_patterns {
        body.push_str("<tr>");
        push_html_cell(&mut body, &pattern.pattern_type);
        push_html_cell(&mut body, &pattern.count.to_string());
        push_html_cell(&mut body, &format!("{}-{}", pattern.first_line, pattern.last_line));
        push_html_cell(&mut body, &pattern.key);
        body.push_str("</tr>");
    }
    body.push_str("</tbody></table><h2>Suspicious Tool Calls</h2><table><thead><tr><th>Line</th><th>Tool</th><th>Reason</th></tr></thead><tbody>");
    for call in &insights.suspicious_tool_calls {
        body.push_str("<tr>");
        push_html_cell(&mut body, &call.call.line_number.to_string());
        push_html_cell(&mut body, &call.tool_name);
        push_html_cell(&mut body, &call.reason);
        body.push_str("</tr>");
    }
    body.push_str("</tbody></table><h2>Context Pressure</h2><p>");
    body.push_str(&escape_html(&insights.context_pressure.explanation));
    body.push_str("</p><h2>File Impact</h2><table><thead><tr><th>Class</th><th>File</th><th>Count</th><th>Lines</th></tr></thead><tbody>");
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
            push_html_cell(&mut body, &format!("{}-{}", file.first_line, file.last_line));
            body.push_str("</tr>");
        }
    }
    body.push_str("</tbody></table>");
    body
}
