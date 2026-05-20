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

fn build_inspection_queue(
    graph: &SessionGraph,
    failure_chain: Option<&FailureChainInsight>,
    repeated_patterns: &[RepeatedPatternInsight],
    suspicious_tool_calls: &[SuspiciousToolCallInsight],
    context_pressure: &ContextPressureInsight,
    file_impact: &FileImpactInsight,
    approval_friction: &[InsightNote],
) -> Vec<InspectionQueueItem> {
    let mut queue = Vec::new();
    if let Some(chain) = failure_chain {
        queue.push(InspectionQueueItem {
            id: "first-logged-error".to_owned(),
            title: "First logged error-like event".to_owned(),
            severity: "high".to_owned(),
            confidence: chain.confidence.clone(),
            directness: "directly logged".to_owned(),
            summary: format!(
                "line {} - {}",
                chain.first_logged_error.line_number, chain.first_logged_error.title
            ),
            explanation: chain.explanation.clone(),
            event_ids: vec![chain.first_logged_error.id.clone()],
            line_numbers: vec![chain.first_logged_error.line_number],
            related_files: chain
                .file_changes_after_first_error
                .iter()
                .map(|event| event.title.clone())
                .take(8)
                .collect(),
            related_tools: Vec::new(),
            redaction_safe_summary: format!(
                "First logged error-like event at line {}.",
                chain.first_logged_error.line_number
            ),
            raw_available: true,
        });
    }
    for call in suspicious_tool_calls.iter().take(4) {
        queue.push(InspectionQueueItem {
            id: format!("suspicious-tool-{}", call.call.event_index),
            title: "Suspicious tool call".to_owned(),
            severity: call.severity.clone(),
            confidence: call.confidence.clone(),
            directness: "directly logged".to_owned(),
            summary: format!(
                "line {} `{}`: {}",
                call.call.line_number, call.tool_name, call.reason
            ),
            explanation: "Tool-call status, duration, emptiness, and output are inspected from logged tool records.".to_owned(),
            event_ids: vec![call.call.id.clone()],
            line_numbers: vec![call.call.line_number],
            related_files: Vec::new(),
            related_tools: vec![call.tool_name.clone()],
            redaction_safe_summary: format!(
                "Suspicious tool call `{}` at line {}.",
                call.tool_name, call.call.line_number
            ),
            raw_available: true,
        });
    }
    for pattern in repeated_patterns.iter().take(4) {
        let failed = pattern.severity == "warning" || pattern.key.to_ascii_lowercase().contains("error");
        queue.push(InspectionQueueItem {
            id: format!("repeated-{}-{}", pattern.pattern_type, pattern.first_line),
            title: if pattern.pattern_type == "tool_call" {
                "Repeated tool-call pattern".to_owned()
            } else {
                "Repeated file activity".to_owned()
            },
            severity: if failed { "warning" } else { "info" }.to_owned(),
            confidence: pattern.confidence.clone(),
            directness: pattern.directness.clone(),
            summary: format!(
                "{} repeated {} times between lines {} and {}",
                pattern.pattern_type, pattern.count, pattern.first_line, pattern.last_line
            ),
            explanation: "Repeated logged signatures can indicate a retry loop or local churn, but this remains heuristic.".to_owned(),
            event_ids: pattern
                .linked_events
                .iter()
                .map(|event| event.id.clone())
                .take(8)
                .collect(),
            line_numbers: pattern
                .linked_events
                .iter()
                .map(|event| event.line_number)
                .take(8)
                .collect(),
            related_files: if pattern.pattern_type == "file_activity" {
                vec![pattern.key.clone()]
            } else {
                Vec::new()
            },
            related_tools: if pattern.pattern_type == "tool_call" {
                pattern
                    .examples
                    .iter()
                    .map(|example| compact_text(example, 80))
                    .take(3)
                    .collect()
            } else {
                Vec::new()
            },
            redaction_safe_summary: format!(
                "{} repeated {} times.",
                pattern.pattern_type, pattern.count
            ),
            raw_available: !pattern.linked_events.is_empty(),
        });
    }
    if let Some(note) = approval_friction.first() {
        queue.push(InspectionQueueItem {
            id: "approval-sandbox-friction".to_owned(),
            title: "Approval or sandbox friction".to_owned(),
            severity: "warning".to_owned(),
            confidence: note.confidence.clone(),
            directness: "strong heuristic".to_owned(),
            summary: note.explanation.clone(),
            explanation: "Logged text mentions approval, sandbox, permission, policy, or denied access.".to_owned(),
            event_ids: note
                .linked_events
                .iter()
                .map(|event| event.id.clone())
                .collect(),
            line_numbers: note
                .linked_events
                .iter()
                .map(|event| event.line_number)
                .collect(),
            related_files: Vec::new(),
            related_tools: Vec::new(),
            redaction_safe_summary: "Approval or sandbox friction was logged.".to_owned(),
            raw_available: !note.linked_events.is_empty(),
        });
    }
    if !context_pressure.high_context_markers.is_empty() || !context_pressure.compaction_markers.is_empty() {
        queue.push(InspectionQueueItem {
            id: "context-pressure".to_owned(),
            title: "Context pressure marker".to_owned(),
            severity: if context_pressure.status.contains("high") {
                "warning"
            } else {
                "info"
            }
            .to_owned(),
            confidence: "direct".to_owned(),
            directness: "directly logged".to_owned(),
            summary: context_pressure.status.clone(),
            explanation: context_pressure.explanation.clone(),
            event_ids: context_pressure
                .high_context_markers
                .iter()
                .chain(&context_pressure.compaction_markers)
                .map(|event| event.id.clone())
                .take(8)
                .collect(),
            line_numbers: context_pressure
                .high_context_markers
                .iter()
                .chain(&context_pressure.compaction_markers)
                .map(|event| event.line_number)
                .take(8)
                .collect(),
            related_files: Vec::new(),
            related_tools: Vec::new(),
            redaction_safe_summary: "Context pressure or compaction marker was logged.".to_owned(),
            raw_available: true,
        });
    }
    if let Some(file) = file_impact.files_edited.first() {
        queue.push(InspectionQueueItem {
            id: "file-impact".to_owned(),
            title: "File impact".to_owned(),
            severity: "info".to_owned(),
            confidence: if file.evidence.contains("direct") {
                "direct"
            } else {
                "weak heuristic"
            }
            .to_owned(),
            directness: file.evidence.clone(),
            summary: format!(
                "{} touched {} time(s), first line {}",
                file.path, file.count, file.first_line
            ),
            explanation: "File impact combines direct file-change records and inferred paths from tool payloads.".to_owned(),
            event_ids: Vec::new(),
            line_numbers: vec![file.first_line],
            related_files: vec![file.path.clone()],
            related_tools: Vec::new(),
            redaction_safe_summary: "File activity was logged or inferred.".to_owned(),
            raw_available: false,
        });
    }
    if graph.parser_health.unknown_event_count > 0 || graph.parser_health.malformed_line_count > 0 {
        queue.push(InspectionQueueItem {
            id: "schema-drift".to_owned(),
            title: "Unknown or malformed log data".to_owned(),
            severity: "info".to_owned(),
            confidence: "direct".to_owned(),
            directness: "directly logged by parser health".to_owned(),
            summary: format!(
                "{} unknown events, {} malformed lines",
                graph.parser_health.unknown_event_count, graph.parser_health.malformed_line_count
            ),
            explanation: "Schema drift may hide details from normalized views; use Health actions to export a redacted report.".to_owned(),
            event_ids: graph
                .parser_health
                .unknown_events
                .iter()
                .map(|event| format!("unknown-{}", event.event_index))
                .take(8)
                .collect(),
            line_numbers: graph
                .parser_health
                .unknown_events
                .iter()
                .map(|event| event.line_number)
                .chain(
                    graph
                        .parser_health
                        .malformed_lines
                        .iter()
                        .map(|line| line.line_number),
                )
                .take(8)
                .collect(),
            related_files: Vec::new(),
            related_tools: Vec::new(),
            redaction_safe_summary: "Unknown or malformed log data may limit analysis.".to_owned(),
            raw_available: true,
        });
    }
    queue.truncate(12);
    queue
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
                title: compact_text(&message.text, 120),
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
        .take(5)
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
                .take(6)
                .map(insight_link_from_flat_event)
                .collect::<Vec<_>>()
        })
        .unwrap_or_default();
    let file_changes_after_first_error = file_observations
        .iter()
        .filter(|file| file.line_number > first_error.line_number && file.classification == "edited")
        .take(8)
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
        .map(|event| compact_text(&event.title, 180))
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

fn detect_repeated_patterns(
    events: &[FlatTraceEvent],
    file_observations: &[FileObservation],
) -> Vec<RepeatedPatternInsight> {
    let mut grouped: HashMap<String, Vec<&FlatTraceEvent>> = HashMap::new();
    for event in events.iter().filter(|event| event.normalized_type == "tool_call") {
        let Some(tool_name) = event.tool_name.as_deref() else {
            continue;
        };
        let key = format!(
            "tool:{}:{}",
            tool_name.to_ascii_lowercase(),
            normalized_repeat_key(tool_argument_text(event))
        );
        grouped.entry(key).or_default().push(event);
    }

    let mut repeated = grouped
        .into_iter()
        .filter_map(|(key, group)| {
            if group.len() < 2 {
                return None;
            }
            let first = group.first()?;
            let last = group.last()?;
            Some(RepeatedPatternInsight {
                title: "Repeated tool-call pattern".to_owned(),
                severity: if group.iter().any(|event| flat_event_is_error_like(event)) {
                    "warning".to_owned()
                } else {
                    "info".to_owned()
                },
                confidence: "direct".to_owned(),
                pattern_type: "tool_call".to_owned(),
                key: compact_text(&key, 240),
                count: group.len(),
                first_line: first.line_number,
                last_line: last.line_number,
                examples: group
                    .iter()
                    .take(3)
                    .map(|event| compact_text(&event.title, 160))
                    .collect(),
                linked_events: group.iter().take(8).map(|event| insight_link_from_flat_event(event)).collect(),
                directness: "directly logged".to_owned(),
            })
        })
        .collect::<Vec<_>>();

    let mut file_groups: HashMap<String, Vec<&FileObservation>> = HashMap::new();
    for file in file_observations {
        file_groups.entry(file.path.clone()).or_default().push(file);
    }
    repeated.extend(file_groups.into_iter().filter_map(|(path, mut group)| {
        if group.len() < 2 {
            return None;
        }
        group.sort_by_key(|file| file.line_number);
        let first = group.first()?;
        let last = group.last()?;
        Some(RepeatedPatternInsight {
            title: "Repeated file activity".to_owned(),
            severity: "info".to_owned(),
            confidence: if group.iter().any(|file| file.classification == "edited") {
                "direct".to_owned()
            } else {
                "weak heuristic".to_owned()
            },
            pattern_type: "file_activity".to_owned(),
            key: path.clone(),
            count: group.len(),
            first_line: first.line_number,
            last_line: last.line_number,
            examples: group
                .iter()
                .take(3)
                .map(|file| format!("{} ({})", file.path, file.classification))
                .collect(),
            linked_events: group
                .iter()
                .take(8)
                .map(|file| InsightEventLink {
                    id: format!("file-{}", file.event_index),
                    line_number: file.line_number,
                    event_index: file.event_index,
                    normalized_type: "file_activity".to_owned(),
                    title: file.path.clone(),
                })
                .collect(),
            directness: if group.iter().any(|file| file.classification == "edited") {
                "directly logged".to_owned()
            } else {
                "inferred from tool arguments".to_owned()
            },
        })
    }));

    repeated.sort_by(|left, right| {
        right
            .count
            .cmp(&left.count)
            .then_with(|| left.first_line.cmp(&right.first_line))
    });
    repeated.truncate(24);
    repeated
}

fn detect_suspicious_tool_calls(events: &[FlatTraceEvent]) -> Vec<SuspiciousToolCallInsight> {
    let mut suspicious = Vec::new();
    let mut seen = std::collections::HashSet::new();
    for event in events.iter().filter(|event| event.normalized_type == "tool_call") {
        if suspicious.len() >= 32 {
            break;
        }
        if event_is_subagent_summary_tool(event) {
            continue;
        }
        let mut reasons = Vec::new();
        if event.status.as_deref() != Some("completed") {
            reasons.push(SuspiciousReason::MissingResult);
        }
        if event.duration_ms.is_some_and(|duration| duration >= 30_000) {
            reasons.push(SuspiciousReason::LongRunning);
        }
        if event.output_preview.as_deref() == Some("") {
            reasons.push(SuspiciousReason::EmptyOutput);
        }
        if let Some(reason) = tool_output_error_reason(event) {
            reasons.push(reason);
        }
        if reasons.is_empty() {
            continue;
        }
        if !seen.insert(event.id.as_str()) {
            continue;
        }
        let reason = reasons
            .iter()
            .map(|reason| reason.message())
            .collect::<Vec<_>>()
            .join("; ");
        suspicious.push(SuspiciousToolCallInsight {
            title: "Suspicious tool result".to_owned(),
            severity: if reasons.iter().any(|reason| reason.is_high()) {
                "high".to_owned()
            } else {
                "warning".to_owned()
            },
            confidence: "strong heuristic".to_owned(),
            reason,
            call: insight_link_from_flat_event(event),
            tool_name: event.tool_name.clone().unwrap_or_else(|| "tool".to_owned()),
            status: event.status.clone().unwrap_or_else(|| "unknown".to_owned()),
            duration_ms: event.duration_ms,
            output_preview: event.output_preview.as_deref().map(|output| compact_text(output, 360)),
        });
    }
    suspicious
}

fn analyze_context_pressure(graph: &SessionGraph) -> ContextPressureInsight {
    let telemetry = &graph.token_telemetry;
    let high_context_markers = telemetry
        .samples
        .iter()
        .filter(|sample| sample.context_percent.unwrap_or_default() >= 80.0)
        .take(12)
        .map(|sample| InsightEventLink {
            id: format!("token-{}", sample.event_index),
            line_number: sample.event_index + 1,
            event_index: sample.event_index,
            normalized_type: "token_telemetry".to_owned(),
            title: format!(
                "{} tokens{}",
                sample.total_tokens,
                sample
                    .context_percent
                    .map(|percent| format!(" ({percent:.0}% context)"))
                    .unwrap_or_default()
            ),
        })
        .collect::<Vec<_>>();
    let compaction_markers = graph
        .compactions
        .iter()
        .map(|compaction| InsightEventLink {
            id: compaction.id.clone(),
            line_number: compaction.event_index + 1,
            event_index: compaction.event_index,
            normalized_type: "compaction".to_owned(),
            title: compaction.title.clone(),
        })
        .collect::<Vec<_>>();
    let status = if !high_context_markers.is_empty() {
        "high context markers logged"
    } else if !compaction_markers.is_empty() {
        "compaction markers logged"
    } else if telemetry.samples.is_empty() {
        "not logged"
    } else {
        "token telemetry logged"
    };
    let explanation = if !high_context_markers.is_empty() || !compaction_markers.is_empty() {
        "Context pressure is based only on logged token telemetry and compaction markers. This may be relevant to later behavior but does not expose hidden state.".to_owned()
    } else if telemetry.samples.is_empty() {
        "No token/context telemetry was logged, so Perlustron cannot infer context pressure for this session.".to_owned()
    } else {
        "Token telemetry was logged without high-context or compaction markers.".to_owned()
    };

    ContextPressureInsight {
        status: status.to_owned(),
        latest_total_tokens: telemetry.latest_total_tokens,
        context_window: telemetry.context_window,
        latest_context_percent: telemetry.latest_context_percent,
        high_context_markers,
        compaction_markers,
        explanation,
    }
}

fn analyze_file_impact(
    observations: &[FileObservation],
    first_error_line: Option<usize>,
) -> FileImpactInsight {
    let mut groups: HashMap<String, Vec<&FileObservation>> = HashMap::new();
    for observation in observations {
        groups.entry(observation.path.clone()).or_default().push(observation);
    }

    let mut edited = Vec::new();
    let mut read = Vec::new();
    let mut referenced = Vec::new();
    let mut repeated = Vec::new();
    for (path, group) in groups {
        let item = file_impact_item(&path, &group);
        if group.len() > 1 {
            repeated.push(item.clone());
        }
        if group.iter().any(|file| file.classification == "edited") {
            edited.push(item);
        } else if group.iter().any(|file| file.classification == "read") {
            read.push(item);
        } else {
            referenced.push(item);
        }
    }
    edited.sort_by_key(|item| item.first_line);
    read.sort_by_key(|item| item.first_line);
    referenced.sort_by_key(|item| item.first_line);
    repeated.sort_by(|left, right| {
        right
            .count
            .cmp(&left.count)
            .then_with(|| left.first_line.cmp(&right.first_line))
    });
    edited.truncate(40);
    read.truncate(40);
    referenced.truncate(40);
    repeated.truncate(20);

    let files_before_first_error = first_error_line
        .map(|line| unique_paths(observations.iter().filter(|file| file.line_number <= line)))
        .unwrap_or_default();
    let files_after_first_error = first_error_line
        .map(|line| unique_paths(observations.iter().filter(|file| file.line_number > line)))
        .unwrap_or_default();

    FileImpactInsight {
        files_read: read,
        files_edited: edited,
        files_referenced: referenced,
        repeated_files: repeated,
        files_before_first_error,
        files_after_first_error,
        notes: vec![
            "Edited files come from explicit file-change records where available.".to_owned(),
            "Read and referenced files may be inferred from tool names and arguments.".to_owned(),
        ],
    }
}

fn detect_approval_friction(events: &[FlatTraceEvent]) -> Vec<InsightNote> {
    events
        .iter()
        .filter(|event| event_mentions_approval_friction(event))
        .take(20)
        .map(|event| InsightNote {
            title: "Approval or sandbox friction".to_owned(),
            severity: "warning".to_owned(),
            confidence: "strong heuristic".to_owned(),
            explanation: "Logged text mentions approval, sandbox, permission, policy, or denied access.".to_owned(),
            linked_events: vec![insight_link_from_flat_event(event)],
        })
        .collect()
}

fn collect_file_observations(
    graph: &SessionGraph,
    events: &[FlatTraceEvent],
) -> Vec<FileObservation> {
    let mut observations = Vec::new();
    for prompt in &graph.prompts {
        for change in &prompt.file_changes {
            observations.push(FileObservation {
                path: change.path.clone(),
                line_number: change.event_index + 1,
                event_index: change.event_index,
                classification: "edited".to_owned(),
                evidence: "direct file-change record".to_owned(),
            });
        }
    }
    for event in events.iter().filter(|event| event.normalized_type == "tool_call") {
        let classification = file_activity_classification(event);
        for path in inferred_paths_from_text(&event.text) {
            observations.push(FileObservation {
                path,
                line_number: event.line_number,
                event_index: event.event_index,
                classification: classification.clone(),
                evidence: format!(
                    "{} from {}",
                    if classification == "referenced" { "inferred reference" } else { "inferred activity" },
                    event.tool_name.as_deref().unwrap_or("tool")
                ),
            });
        }
    }
    dedupe_file_observations(observations)
}

fn dedupe_file_observations(observations: Vec<FileObservation>) -> Vec<FileObservation> {
    let mut seen = std::collections::HashSet::new();
    observations
        .into_iter()
        .filter(|observation| {
            seen.insert((
                observation.path.clone(),
                observation.line_number,
                observation.classification.clone(),
            ))
        })
        .collect()
}

fn file_activity_classification(event: &FlatTraceEvent) -> String {
    let name = event
        .tool_name
        .as_deref()
        .unwrap_or_default()
        .to_ascii_lowercase();
    let text = event.text.to_ascii_lowercase();
    if name.contains("write")
        || name.contains("edit")
        || name.contains("patch")
        || text.contains("apply_patch")
        || text.contains("*** update file:")
        || text.contains("*** add file:")
    {
        "edited".to_owned()
    } else if name.contains("read")
        || name.contains("grep")
        || name.contains("rg")
        || name.contains("search")
        || text.contains("rg ")
        || text.contains("get-content")
    {
        "read".to_owned()
    } else {
        "referenced".to_owned()
    }
}

fn inferred_paths_from_text(text: &str) -> Vec<String> {
    let mut paths = Vec::new();
    for token in text
        .split(|ch: char| ch.is_whitespace() || matches!(ch, '"' | '\'' | ',' | ';' | '(' | ')' | '[' | ']'))
        .map(|token| token.trim_matches(|ch: char| matches!(ch, ':' | '{' | '}' | '<' | '>' | '`')))
        .filter(|token| token.len() >= 4 && looks_like_file_path(token))
    {
        let cleaned = token.trim_matches('\\').trim_matches('/').to_owned();
        if !paths.contains(&cleaned) {
            paths.push(cleaned);
        }
        if paths.len() >= 20 {
            break;
        }
    }
    paths
}

fn looks_like_file_path(token: &str) -> bool {
    if token.starts_with("http://") || token.starts_with("https://") {
        return false;
    }
    let lower = token.to_ascii_lowercase();
    (token.contains('/') || token.contains('\\') || lower.contains('.'))
        && (lower.ends_with(".rs")
            || lower.ends_with(".ts")
            || lower.ends_with(".js")
            || lower.ends_with(".json")
            || lower.ends_with(".jsonl")
            || lower.ends_with(".md")
            || lower.ends_with(".toml")
            || lower.ends_with(".yml")
            || lower.ends_with(".yaml")
            || lower.ends_with(".html")
            || lower.ends_with(".css")
            || lower.contains("src/")
            || lower.contains("src\\")
            || lower.contains("docs/")
            || lower.contains("fixtures/")
            || lower.contains("static/"))
}

fn file_impact_item(path: &str, group: &[&FileObservation]) -> FileImpactItem {
    let first_line = group
        .iter()
        .map(|file| file.line_number)
        .min()
        .unwrap_or_default();
    let last_line = group
        .iter()
        .map(|file| file.line_number)
        .max()
        .unwrap_or_default();
    let classification = if group.iter().any(|file| file.classification == "edited") {
        "edited"
    } else if group.iter().any(|file| file.classification == "read") {
        "read"
    } else {
        "referenced"
    };
    FileImpactItem {
        path: path.to_owned(),
        count: group.len(),
        first_line,
        last_line,
        classification: classification.to_owned(),
        evidence: group
            .first()
            .map(|file| file.evidence.clone())
            .unwrap_or_else(|| "inferred".to_owned()),
    }
}

fn unique_paths<'a>(observations: impl Iterator<Item = &'a FileObservation>) -> Vec<String> {
    let mut paths = Vec::new();
    for observation in observations {
        if !paths.contains(&observation.path) {
            paths.push(observation.path.clone());
        }
        if paths.len() >= 40 {
            break;
        }
    }
    paths
}

fn insight_link_from_flat_event(event: &FlatTraceEvent) -> InsightEventLink {
    InsightEventLink {
        id: event.id.clone(),
        line_number: event.line_number,
        event_index: event.event_index,
        normalized_type: event.normalized_type.clone(),
        title: compact_text(&event.title, 160),
    }
}

fn flat_event_is_error_like(event: &FlatTraceEvent) -> bool {
    if matches!(
        event.normalized_type.as_str(),
        "user_prompt" | "assistant_message"
    ) {
        return false;
    }
    if event.normalized_type == "tool_call" {
        if event_is_subagent_summary_tool(event) {
            return false;
        }
        return text_is_error_like(&event.title)
            || tool_output_error_reason(event).is_some()
            || event.status.as_deref().is_some_and(text_is_error_like);
    }
    text_is_error_like(&event.title)
        || text_is_error_like(&event.text)
        || event.status.as_deref().is_some_and(text_is_error_like)
}

fn tool_output_error_reason(event: &FlatTraceEvent) -> Option<SuspiciousReason> {
    let output = event.output_preview.as_deref()?;
    if let Some(code) = logged_exit_code(output) {
        if is_empty_probe_result(event, code, output) {
            return None;
        }
        return (code != 0).then_some(SuspiciousReason::NonzeroExit);
    }
    text_is_error_like(output).then_some(SuspiciousReason::ErrorLikeOutput)
}

fn event_is_subagent_summary_tool(event: &FlatTraceEvent) -> bool {
    event
        .tool_name
        .as_deref()
        .is_some_and(|name| name.starts_with("subagent."))
}

fn is_empty_probe_result(event: &FlatTraceEvent, code: i32, output: &str) -> bool {
    code == 1
        && logged_output_body_is_empty(output) == Some(true)
        && event.tool_name.as_deref() == Some("shell_command")
        && {
            let arguments = tool_argument_text(event).to_ascii_lowercase();
            ["rg ", "select-string", "get-childitem", "test-path"]
                .iter()
                .any(|probe| arguments.contains(probe))
        }
}

fn tool_argument_text(event: &FlatTraceEvent) -> &str {
    if let Some(output) = event.output_preview.as_deref()
        && let Some(arguments) = event.text.strip_suffix(output)
    {
        return arguments.trim_end_matches(['\r', '\n']);
    }
    event
        .text
        .split_once('\n')
        .map(|(arguments, _)| arguments)
        .unwrap_or(&event.text)
}

fn event_mentions_approval_friction(event: &FlatTraceEvent) -> bool {
    match event.normalized_type.as_str() {
        "tool_call" => {
            if event
                .output_preview
                .as_deref()
                .and_then(logged_exit_code)
                .is_some_and(|code| code == 0)
            {
                return false;
            }
            approval_friction_text(&event.title)
                || event
                    .output_preview
                    .as_deref()
                    .is_some_and(approval_friction_text)
        }
        "unknown" | "malformed" => {
            approval_friction_text(&event.text) || approval_friction_text(&event.title)
        }
        _ => false,
    }
}

fn logged_exit_code(text: &str) -> Option<i32> {
    for line in text.lines() {
        let lower = line.trim_start().to_ascii_lowercase();
        let Some(raw_code) = lower.strip_prefix("exit code:") else {
            continue;
        };
        return raw_code.split_whitespace().next()?.parse().ok();
    }
    None
}

fn logged_output_body_is_empty(text: &str) -> Option<bool> {
    let mut after_output_marker = false;
    for line in text.lines() {
        if after_output_marker && !line.trim().is_empty() {
            return Some(false);
        }
        if line.trim() == "Output:" {
            after_output_marker = true;
        }
    }
    after_output_marker.then_some(true)
}

fn text_is_error_like(text: &str) -> bool {
    let lower = text.to_ascii_lowercase();
    ERROR_LIKE_TERMS.iter().any(|term| lower.contains(term))
}

fn approval_friction_text(text: &str) -> bool {
    let lower = text.to_ascii_lowercase();
    APPROVAL_FRICTION_TERMS
        .iter()
        .any(|term| lower.contains(term))
}

fn normalized_repeat_key(text: &str) -> String {
    let collapsed = text
        .split_whitespace()
        .collect::<Vec<_>>()
        .join(" ")
        .to_ascii_lowercase();
    compact_text(&collapsed, 220)
}

fn stable_hash_text(text: &str) -> String {
    let mut hash: u64 = 0xcbf29ce484222325;
    for byte in text.as_bytes() {
        hash ^= u64::from(*byte);
        hash = hash.wrapping_mul(0x100000001b3);
    }
    format!("{hash:016x}")
}

fn render_insights_text(insights: &TraceInsights) -> String {
    let mut out = String::new();
    out.push_str("Perlustron insights\n");
    out.push_str("  what should I inspect first:\n");
    if insights.inspection_queue.is_empty() {
        out.push_str("    - no high-priority findings detected\n");
    } else {
        for item in insights.inspection_queue.iter().take(8) {
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
    for pattern in insights.repeated_patterns.iter().take(8) {
        out.push_str(&format!(
            "    - {} x{} (lines {}-{})\n",
            pattern.title, pattern.count, pattern.first_line, pattern.last_line
        ));
    }
    out.push_str(&format!(
        "  suspicious tool calls: {}\n",
        insights.suspicious_tool_calls.len()
    ));
    for call in insights.suspicious_tool_calls.iter().take(8) {
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
