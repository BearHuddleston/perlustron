// SPDX-License-Identifier: MIT OR Apache-2.0

const DIFF_SCHEMA_VERSION: &str = "perlustron-trace-diff-v1";
const MAX_EXACT_LCS_CELLS: usize = 2_000_000;

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum DiffFormat {
    Text,
    Json,
    Html,
}

impl DiffFormat {
    fn parse(value: &str) -> Option<Self> {
        match value.trim().to_ascii_lowercase().as_str() {
            "text" | "txt" => Some(Self::Text),
            "json" => Some(Self::Json),
            "html" => Some(Self::Html),
            _ => None,
        }
    }

    fn as_str(self) -> &'static str {
        match self {
            Self::Text => "text",
            Self::Json => "json",
            Self::Html => "html",
        }
    }
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct TraceDiff {
    schema_version: String,
    generated_at: String,
    metadata: DiffMetadata,
    left_summary: TraceSideSummary,
    right_summary: TraceSideSummary,
    deltas: Vec<DiffDelta>,
    parser_health_delta: ParserHealthDelta,
    prompt_delta: CountDelta,
    tool_delta: ToolDelta,
    file_delta: FileDelta,
    error_delta: ErrorDelta,
    token_delta: TokenDelta,
    compaction_delta: CountDelta,
    repeated_pattern_delta: RepeatedPatternDelta,
    divergence: DiffDivergence,
    warnings: Vec<String>,
    redaction_report: Option<DiffRedactionReport>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct DiffMetadata {
    left_path: String,
    right_path: String,
    left_source: String,
    right_source: String,
    redacted: bool,
    redaction_profile: Option<String>,
    parser_version: String,
    trace_schema_version: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct TraceSideSummary {
    label: String,
    source: String,
    parser_version: String,
    trace_schema_version: String,
    session_id: Option<String>,
    model: Option<String>,
    working_directory: Option<String>,
    first_timestamp: Option<String>,
    last_timestamp: Option<String>,
    logged_duration: String,
    line_count: usize,
    parsed_event_count: usize,
    renderable_event_count: usize,
    unknown_event_count: usize,
    unknown_event_types: Vec<UnknownEventTypeSummary>,
    malformed_line_count: usize,
    user_turn_count: usize,
    assistant_message_count: usize,
    tool_call_count: usize,
    tool_result_count: usize,
    missing_tool_result_count: usize,
    unique_tool_names: Vec<String>,
    repeated_patterns: Vec<String>,
    error_like_event_count: usize,
    first_error_like_event: Option<String>,
    longest_tool_calls: Vec<ToolCallSummary>,
    files_touched: Vec<String>,
    compaction_count: usize,
    token_telemetry_available: bool,
    latest_total_tokens: Option<u64>,
    latest_context_percent: Option<f64>,
    prompt_preview: Option<String>,
    prompt_hash: Option<String>,
    final_response_preview: Option<String>,
    final_response_hash: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct ToolCallSummary {
    name: String,
    line_number: usize,
    duration_ms: Option<u64>,
    status: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct DiffDelta {
    field: String,
    left: String,
    right: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct CountDelta {
    left: usize,
    right: usize,
    delta: isize,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct ParserHealthDelta {
    unknown_events: CountDelta,
    malformed_lines: CountDelta,
    skipped_large_payloads: CountDelta,
    left_unknown_types: Vec<UnknownEventTypeSummary>,
    right_unknown_types: Vec<UnknownEventTypeSummary>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct ToolDelta {
    calls: CountDelta,
    results: CountDelta,
    missing_results: CountDelta,
    only_left_tools: Vec<String>,
    only_right_tools: Vec<String>,
    common_tools: Vec<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct FileDelta {
    left_count: usize,
    right_count: usize,
    only_left: Vec<String>,
    only_right: Vec<String>,
    both: Vec<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct ErrorDelta {
    errors: CountDelta,
    left_first_error: Option<String>,
    right_first_error: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct TokenDelta {
    left_available: bool,
    right_available: bool,
    left_latest_total_tokens: Option<u64>,
    right_latest_total_tokens: Option<u64>,
    left_context_percent: Option<f64>,
    right_context_percent: Option<f64>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct RepeatedPatternDelta {
    left_count: usize,
    right_count: usize,
    only_left: Vec<String>,
    only_right: Vec<String>,
    both: Vec<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct DiffDivergence {
    status: String,
    kind: String,
    confidence: String,
    summary: String,
    explanation: String,
    aligned_event_count: usize,
    left_line: Option<usize>,
    right_line: Option<usize>,
    left_event_id: Option<String>,
    right_event_id: Option<String>,
    left_signature: Option<String>,
    right_signature: Option<String>,
    clusters: Vec<DivergenceCluster>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct DivergenceCluster {
    kind: String,
    confidence: String,
    summary: String,
    explanation: String,
    left_line: Option<usize>,
    right_line: Option<usize>,
    left_event_id: Option<String>,
    right_event_id: Option<String>,
    left_signature: Option<String>,
    right_signature: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct DiffRedactionReport {
    profile: String,
    left_redacted_fields: usize,
    right_redacted_fields: usize,
    warnings: Vec<String>,
}

struct DiffWriteOptions<'a> {
    left_source: Option<SessionSource>,
    right_source: Option<SessionSource>,
    left_input: &'a Path,
    right_input: &'a Path,
    output: Option<&'a Path>,
    format: DiffFormat,
    redacted: bool,
    profile: RedactionProfile,
}

#[derive(Debug, Clone, Copy)]
struct TraceDiffBuildOptions<'a> {
    left_source: SessionSource,
    right_source: SessionSource,
    left_input: &'a Path,
    right_input: &'a Path,
    redacted: bool,
    profile: RedactionProfile,
}

fn write_diff(options: DiffWriteOptions<'_>) -> Result<Option<String>> {
    let diff = build_trace_diff(
        source_for_path(options.left_input, options.left_source),
        source_for_path(options.right_input, options.right_source),
        options.left_input,
        options.right_input,
        options.redacted,
        options.profile,
    )?;
    let content = match options.format {
        DiffFormat::Text => render_diff_text(&diff),
        DiffFormat::Json => serde_json::to_string_pretty(&diff).context("failed to encode trace diff")?,
        DiffFormat::Html => render_diff_html(&diff),
    };
    if let Some(output) = options.output {
        fs::write(output, content).with_context(|| format!("failed to write {}", output.display()))?;
        Ok(None)
    } else {
        Ok(Some(content))
    }
}

fn build_trace_diff(
    left_source: SessionSource,
    right_source: SessionSource,
    left_input: &Path,
    right_input: &Path,
    redacted: bool,
    profile: RedactionProfile,
) -> Result<TraceDiff> {
    let left_graph = parse_graph_for_file(left_source, left_input)?;
    let right_graph = parse_graph_for_file(right_source, right_input)?;
    build_trace_diff_from_graphs(
        TraceDiffBuildOptions {
            left_source,
            right_source,
            left_input,
            right_input,
            redacted,
            profile,
        },
        &left_graph,
        &right_graph,
    )
}

fn build_trace_diff_cached(
    left_source: SessionSource,
    right_source: SessionSource,
    left_input: &Path,
    right_input: &Path,
    cache: &Mutex<HashMap<String, CachedSession>>,
    redacted: bool,
    profile: RedactionProfile,
) -> Result<TraceDiff> {
    let left_graph = load_session_graph(left_source, left_input, cache)?;
    let right_graph = load_session_graph(right_source, right_input, cache)?;
    build_trace_diff_from_graphs(
        TraceDiffBuildOptions {
            left_source,
            right_source,
            left_input,
            right_input,
            redacted,
            profile,
        },
        &left_graph,
        &right_graph,
    )
}

fn build_trace_diff_from_graphs(
    options: TraceDiffBuildOptions<'_>,
    left_graph: &SessionGraph,
    right_graph: &SessionGraph,
) -> Result<TraceDiff> {
    let mut redaction_report = None;
    if options.redacted {
        let mut left_redacted = (*left_graph).clone();
        let mut right_redacted = (*right_graph).clone();
        let left_report = redact_session_graph(&mut left_redacted, options.profile);
        let right_report = redact_session_graph(&mut right_redacted, options.profile);
        redaction_report = Some(DiffRedactionReport {
            profile: options.profile.as_str().to_owned(),
            left_redacted_fields: left_report.redacted_field_count,
            right_redacted_fields: right_report.redacted_field_count,
            warnings: vec![
                "Redacted diff preserves structure, counts, relationships, and bounded hashes/previews only where safe.".to_owned(),
                "Review reports before sharing; redaction is best effort.".to_owned(),
            ],
        });
    }

    let left_summary = summarize_trace_side("left", left_graph, options.redacted, options.profile);
    let right_summary = summarize_trace_side("right", right_graph, options.redacted, options.profile);
    let parser_health_delta = ParserHealthDelta {
        unknown_events: count_delta(
            left_summary.unknown_event_count,
            right_summary.unknown_event_count,
        ),
        malformed_lines: count_delta(
            left_summary.malformed_line_count,
            right_summary.malformed_line_count,
        ),
        skipped_large_payloads: count_delta(
            left_graph.parser_health.skipped_large_payload_count,
            right_graph.parser_health.skipped_large_payload_count,
        ),
        left_unknown_types: left_graph.parser_health.unknown_event_types.clone(),
        right_unknown_types: right_graph.parser_health.unknown_event_types.clone(),
    };
    let left_tools = string_set(&left_summary.unique_tool_names);
    let right_tools = string_set(&right_summary.unique_tool_names);
    let tool_delta = ToolDelta {
        calls: count_delta(left_summary.tool_call_count, right_summary.tool_call_count),
        results: count_delta(left_summary.tool_result_count, right_summary.tool_result_count),
        missing_results: count_delta(
            left_summary.missing_tool_result_count,
            right_summary.missing_tool_result_count,
        ),
        only_left_tools: set_difference_sorted(&left_tools, &right_tools),
        only_right_tools: set_difference_sorted(&right_tools, &left_tools),
        common_tools: set_intersection_sorted(&left_tools, &right_tools),
    };
    let left_files = string_set(&left_summary.files_touched);
    let right_files = string_set(&right_summary.files_touched);
    let file_delta = FileDelta {
        left_count: left_files.len(),
        right_count: right_files.len(),
        only_left: set_difference_sorted(&left_files, &right_files),
        only_right: set_difference_sorted(&right_files, &left_files),
        both: set_intersection_sorted(&left_files, &right_files),
    };
    let error_delta = ErrorDelta {
        errors: count_delta(
            left_summary.error_like_event_count,
            right_summary.error_like_event_count,
        ),
        left_first_error: left_summary.first_error_like_event.clone(),
        right_first_error: right_summary.first_error_like_event.clone(),
    };
    let token_delta = TokenDelta {
        left_available: left_summary.token_telemetry_available,
        right_available: right_summary.token_telemetry_available,
        left_latest_total_tokens: left_summary.latest_total_tokens,
        right_latest_total_tokens: right_summary.latest_total_tokens,
        left_context_percent: left_summary.latest_context_percent,
        right_context_percent: right_summary.latest_context_percent,
    };
    let left_patterns = string_set(&left_summary.repeated_patterns);
    let right_patterns = string_set(&right_summary.repeated_patterns);
    let repeated_pattern_delta = RepeatedPatternDelta {
        left_count: left_patterns.len(),
        right_count: right_patterns.len(),
        only_left: set_difference_sorted(&left_patterns, &right_patterns),
        only_right: set_difference_sorted(&right_patterns, &left_patterns),
        both: set_intersection_sorted(&left_patterns, &right_patterns),
    };
    let divergence = find_first_divergence(left_graph, right_graph);
    let deltas = collect_top_level_deltas(&left_summary, &right_summary);
    let mut warnings = Vec::new();
    if left_summary.source != right_summary.source {
        warnings.push("Sessions have different source types; compare parser-health and normalized event counts before drawing behavioral conclusions.".to_owned());
    }
    if options.redacted {
        warnings.push("Redacted diff intentionally hides prompts, tool outputs, sensitive paths, and secrets.".to_owned());
    }
    if left_summary.unknown_event_count + right_summary.unknown_event_count > 0 {
        warnings.push("Unknown events differ or exist; schema drift may limit diff precision.".to_owned());
    }

    Ok(TraceDiff {
        schema_version: DIFF_SCHEMA_VERSION.to_owned(),
        generated_at: isoish_now(),
        metadata: DiffMetadata {
            left_path: path_for_diff(options.left_input, options.redacted, options.profile),
            right_path: path_for_diff(options.right_input, options.redacted, options.profile),
            left_source: options.left_source.as_str().to_owned(),
            right_source: options.right_source.as_str().to_owned(),
            redacted: options.redacted,
            redaction_profile: options.redacted.then(|| options.profile.as_str().to_owned()),
            parser_version: env!("CARGO_PKG_VERSION").to_owned(),
            trace_schema_version: NORMALIZED_TRACE_SCHEMA_VERSION.to_owned(),
        },
        left_summary,
        right_summary,
        deltas,
        parser_health_delta,
        prompt_delta: count_delta(left_graph.totals.prompt_count, right_graph.totals.prompt_count),
        tool_delta,
        file_delta,
        error_delta,
        token_delta,
        compaction_delta: count_delta(
            left_graph.totals.compaction_count,
            right_graph.totals.compaction_count,
        ),
        repeated_pattern_delta,
        divergence,
        warnings,
        redaction_report,
    })
}

fn summarize_trace_side(
    label: &str,
    graph: &SessionGraph,
    redacted: bool,
    profile: RedactionProfile,
) -> TraceSideSummary {
    let flat_events = flatten_graph_events(graph);
    let first_error_like_event = flat_events
        .iter()
        .find(|event| flat_event_is_error_like(event))
        .map(|event| format!("line {} - {}", event.line_number, event.title));
    let error_like_event_count = flat_events.iter().filter(|event| flat_event_is_error_like(event)).count();
    let all_call_refs = collect_call_refs(graph.prompts.iter().flat_map(|prompt| &prompt.calls));
    let mut unique_tool_names = all_call_refs
        .iter()
        .map(|call| call.name.clone())
        .collect::<Vec<_>>();
    unique_tool_names.sort();
    unique_tool_names.dedup();
    let mut longest_tool_calls = all_call_refs
        .iter()
        .filter(|call| call.duration_ms.is_some())
        .map(|call| ToolCallSummary {
            name: call.name.clone(),
            line_number: call.event_index + 1,
            duration_ms: call.duration_ms,
            status: call.status.clone(),
        })
        .collect::<Vec<_>>();
    longest_tool_calls.sort_by_key(|call| std::cmp::Reverse(call.duration_ms));
    longest_tool_calls.truncate(8);
    let files_touched = diff_files_for_summary(graph, redacted, profile);
    let repeated_patterns = graph
        .insights
        .repeated_patterns
        .iter()
        .map(|pattern| {
            format!(
                "{}:{}:{}",
                pattern.pattern_type,
                diff_pattern_key(&pattern.key, redacted),
                pattern.count
            )
        })
        .collect::<Vec<_>>();
    let first_prompt = graph.prompts.first().map(|prompt| prompt.text.as_str());
    let final_response = graph
        .prompts
        .iter()
        .flat_map(|prompt| &prompt.assistant_messages)
        .max_by_key(|message| message.event_index)
        .map(|message| message.text.as_str());
    let timestamp_by_event = event_timestamp_map(graph);
    let timestamps = flat_events
        .iter()
        .filter_map(|event| {
            if event.normalized_type == "token_telemetry" {
                None
            } else {
                timestamp_by_event.get(&event.event_index).cloned()
            }
        })
        .collect::<Vec<_>>();
    let first_timestamp = timestamps.first().cloned();
    let last_timestamp = timestamps.last().cloned();
    let logged_duration = match (&first_timestamp, &last_timestamp) {
        (Some(first), Some(last)) if first != last => format!("{first} to {last}"),
        (Some(first), _) => format!("single timestamp around {first}"),
        _ => "timestamps unavailable".to_owned(),
    };

    TraceSideSummary {
        label: label.to_owned(),
        source: graph.source.clone(),
        parser_version: graph.parser_version.clone(),
        trace_schema_version: graph.schema_version.clone(),
        session_id: graph.session_id.clone(),
        model: graph
            .metadata
            .model
            .clone()
            .or_else(|| graph.metadata.model_provider.clone()),
        working_directory: graph
            .cwd
            .as_deref()
            .map(|cwd| diff_text_value(cwd, redacted, profile, "cwd")),
        first_timestamp,
        last_timestamp,
        logged_duration,
        line_count: graph.line_count,
        parsed_event_count: graph.parser_health.parsed_event_count,
        renderable_event_count: graph.parser_health.renderable_event_count,
        unknown_event_count: graph.parser_health.unknown_event_count,
        unknown_event_types: graph.parser_health.unknown_event_types.clone(),
        malformed_line_count: graph.parser_health.malformed_line_count,
        user_turn_count: graph.totals.prompt_count,
        assistant_message_count: graph.totals.assistant_message_count,
        tool_call_count: graph.parser_health.tool_call_count,
        tool_result_count: graph.parser_health.tool_result_count,
        missing_tool_result_count: all_call_refs
            .iter()
            .filter(|call| call.status != "completed")
            .count(),
        unique_tool_names,
        repeated_patterns,
        error_like_event_count,
        first_error_like_event,
        longest_tool_calls,
        files_touched,
        compaction_count: graph.totals.compaction_count,
        token_telemetry_available: graph.parser_health.token_telemetry_available,
        latest_total_tokens: graph.token_telemetry.latest_total_tokens,
        latest_context_percent: graph.token_telemetry.latest_context_percent,
        prompt_preview: if redacted {
            None
        } else {
            first_prompt.map(|text| compact_text(text, 220))
        },
        prompt_hash: first_prompt.map(stable_hash_text),
        final_response_preview: if redacted {
            None
        } else {
            final_response.map(|text| compact_text(text, 220))
        },
        final_response_hash: final_response.map(stable_hash_text),
    }
}

fn diff_pattern_key(key: &str, redacted: bool) -> String {
    if redacted {
        format!("[REDACTED:pattern-key hash:{}]", stable_hash_text(key))
    } else {
        key.to_owned()
    }
}

fn collect_call_refs<'a>(calls: impl IntoIterator<Item = &'a CallNode>) -> Vec<&'a CallNode> {
    let mut refs = Vec::new();
    for call in calls {
        walk_call_tree(call, &mut |call| refs.push(call));
    }
    refs
}

fn walk_call_tree<'a>(call: &'a CallNode, visitor: &mut impl FnMut(&'a CallNode)) {
    visitor(call);
    for child in &call.subagent_nodes {
        walk_call_tree(child, visitor);
    }
}

fn diff_files_for_summary(
    graph: &SessionGraph,
    redacted: bool,
    profile: RedactionProfile,
) -> Vec<String> {
    let mut files = graph
        .insights
        .file_impact
        .files_edited
        .iter()
        .chain(&graph.insights.file_impact.files_read)
        .chain(&graph.insights.file_impact.files_referenced)
        .map(|file| diff_text_value(&file.path, redacted, profile, "file.path"))
        .collect::<Vec<_>>();
    files.sort();
    files.dedup();
    files
}

fn event_timestamp_map(graph: &SessionGraph) -> HashMap<usize, String> {
    let mut timestamps = HashMap::new();
    for prompt in &graph.prompts {
        if let Some(timestamp) = &prompt.timestamp {
            timestamps.insert(prompt.event_index, timestamp.clone());
        }
        for message in &prompt.assistant_messages {
            if let Some(timestamp) = &message.timestamp {
                timestamps.insert(message.event_index, timestamp.clone());
            }
        }
        for call in &prompt.calls {
            walk_call_tree(call, &mut |call| {
                if let Some(timestamp) = call.completed_at.as_ref().or(call.started_at.as_ref()) {
                    timestamps.insert(call.event_index, timestamp.clone());
                }
            });
        }
    }
    for compaction in &graph.compactions {
        if let Some(timestamp) = &compaction.timestamp {
            timestamps.insert(compaction.event_index, timestamp.clone());
        }
    }
    timestamps
}

fn collect_top_level_deltas(
    left: &TraceSideSummary,
    right: &TraceSideSummary,
) -> Vec<DiffDelta> {
    let fields = [
        ("source", left.source.clone(), right.source.clone()),
        (
            "session_id",
            left.session_id.clone().unwrap_or_else(|| "unknown".to_owned()),
            right.session_id.clone().unwrap_or_else(|| "unknown".to_owned()),
        ),
        (
            "model",
            left.model.clone().unwrap_or_else(|| "unknown".to_owned()),
            right.model.clone().unwrap_or_else(|| "unknown".to_owned()),
        ),
        ("line_count", left.line_count.to_string(), right.line_count.to_string()),
        (
            "renderable_event_count",
            left.renderable_event_count.to_string(),
            right.renderable_event_count.to_string(),
        ),
        (
            "tool_call_count",
            left.tool_call_count.to_string(),
            right.tool_call_count.to_string(),
        ),
        (
            "error_like_event_count",
            left.error_like_event_count.to_string(),
            right.error_like_event_count.to_string(),
        ),
        (
            "file_count",
            left.files_touched.len().to_string(),
            right.files_touched.len().to_string(),
        ),
    ];
    fields
        .into_iter()
        .filter(|(_, left, right)| left != right)
        .map(|(field, left, right)| DiffDelta {
            field: field.to_owned(),
            left,
            right,
        })
        .collect()
}

fn find_first_divergence(left_graph: &SessionGraph, right_graph: &SessionGraph) -> DiffDivergence {
    let left_trace = agent_trace_from_graph(left_graph, None);
    let right_trace = agent_trace_from_graph(right_graph, None);
    let left_events = comparable_events(&left_trace.events, DivergenceKind::Structural);
    let right_events = comparable_events(&right_trace.events, DivergenceKind::Structural);
    let matches = lcs_matches(&left_events, &right_events);
    let structural = first_alignment_divergence(
        DivergenceKind::Structural,
        &left_events,
        &right_events,
        &matches,
    );
    let Some(structural) = structural else {
        return DiffDivergence {
            status: "same normalized sequence".to_owned(),
            kind: "none".to_owned(),
            confidence: "direct".to_owned(),
            summary: "No structural divergence found in comparable normalized events.".to_owned(),
            explanation: "Normalized comparable events aligned after ignoring timestamp-only drift and low-value telemetry-only noise.".to_owned(),
            aligned_event_count: matches.len(),
            left_line: None,
            right_line: None,
            left_event_id: None,
            right_event_id: None,
            left_signature: None,
            right_signature: None,
            clusters: Vec::new(),
        };
    };
    let mut clusters = Vec::new();
    for kind in [
        DivergenceKind::Tool,
        DivergenceKind::File,
        DivergenceKind::Error,
        DivergenceKind::Compaction,
    ] {
        let left = comparable_events(&left_trace.events, kind);
        let right = comparable_events(&right_trace.events, kind);
        let matches = lcs_matches(&left, &right);
        if let Some(cluster) = first_alignment_divergence(kind, &left, &right, &matches) {
            clusters.push(cluster);
        }
    }
    let mut all_clusters = vec![structural.clone()];
    all_clusters.extend(clusters);
    DiffDivergence {
        status: "inferred".to_owned(),
        kind: structural.kind,
        confidence: structural.confidence,
        summary: structural.summary,
        explanation: structural.explanation,
        aligned_event_count: matches.len(),
        left_line: structural.left_line,
        right_line: structural.right_line,
        left_event_id: structural.left_event_id,
        right_event_id: structural.right_event_id,
        left_signature: structural.left_signature,
        right_signature: structural.right_signature,
        clusters: all_clusters,
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum DivergenceKind {
    Structural,
    Tool,
    File,
    Error,
    Compaction,
}

impl DivergenceKind {
    fn as_str(self) -> &'static str {
        match self {
            Self::Structural => "first_structural_divergence",
            Self::Tool => "first_tool_divergence",
            Self::File => "first_file_divergence",
            Self::Error => "first_error_divergence",
            Self::Compaction => "first_compaction_divergence",
        }
    }

    fn label(self) -> &'static str {
        match self {
            Self::Structural => "structural",
            Self::Tool => "tool",
            Self::File => "file",
            Self::Error => "error",
            Self::Compaction => "compaction",
        }
    }
}

#[derive(Clone)]
struct ComparableEvent<'a> {
    event: &'a NormalizedEvent,
    signature: String,
}

fn comparable_events<'a>(
    events: &'a [NormalizedEvent],
    kind: DivergenceKind,
) -> Vec<ComparableEvent<'a>> {
    events
        .iter()
        .filter(|event| event_is_comparable(event, kind))
        .map(|event| ComparableEvent {
            event,
            signature: event_signature(event),
        })
        .collect()
}

fn event_is_comparable(event: &NormalizedEvent, kind: DivergenceKind) -> bool {
    if is_low_value_diff_event(event) {
        return false;
    }
    match kind {
        DivergenceKind::Structural => true,
        DivergenceKind::Tool => event.normalized_type == "tool_call",
        DivergenceKind::File => event.normalized_type == "file_activity",
        DivergenceKind::Error => normalized_event_is_error_like(event),
        DivergenceKind::Compaction => event.normalized_type == "compaction",
    }
}

fn is_low_value_diff_event(event: &NormalizedEvent) -> bool {
    matches!(
        event.normalized_type.as_str(),
        "token_telemetry" | "heartbeat" | "status" | "ui_status"
    )
}

fn lcs_matches(left: &[ComparableEvent<'_>], right: &[ComparableEvent<'_>]) -> Vec<(usize, usize)> {
    let dp_cell_count = left
        .len()
        .saturating_add(1)
        .saturating_mul(right.len().saturating_add(1));
    if dp_cell_count > MAX_EXACT_LCS_CELLS {
        return greedy_ordered_matches(left, right);
    }
    let mut dp = vec![vec![0_usize; right.len() + 1]; left.len() + 1];
    for left_index in (0..left.len()).rev() {
        for right_index in (0..right.len()).rev() {
            dp[left_index][right_index] = if left[left_index].signature == right[right_index].signature {
                dp[left_index + 1][right_index + 1] + 1
            } else {
                dp[left_index + 1][right_index].max(dp[left_index][right_index + 1])
            };
        }
    }

    let mut matches = Vec::new();
    let (mut left_index, mut right_index) = (0, 0);
    while left_index < left.len() && right_index < right.len() {
        if left[left_index].signature == right[right_index].signature {
            matches.push((left_index, right_index));
            left_index += 1;
            right_index += 1;
        } else if dp[left_index + 1][right_index] >= dp[left_index][right_index + 1] {
            left_index += 1;
        } else {
            right_index += 1;
        }
    }
    matches
}

fn greedy_ordered_matches(
    left: &[ComparableEvent<'_>],
    right: &[ComparableEvent<'_>],
) -> Vec<(usize, usize)> {
    let mut right_positions: HashMap<String, std::collections::VecDeque<usize>> = HashMap::new();
    for (index, event) in right.iter().enumerate() {
        right_positions
            .entry(event.signature.clone())
            .or_default()
            .push_back(index);
    }
    let mut matches = Vec::new();
    let mut min_right = 0_usize;
    for (left_index, event) in left.iter().enumerate() {
        let Some(indices) = right_positions.get_mut(&event.signature) else {
            continue;
        };
        while indices.front().is_some_and(|index| *index < min_right) {
            indices.pop_front();
        }
        if let Some(right_index) = indices.pop_front() {
            min_right = right_index + 1;
            matches.push((left_index, right_index));
        }
    }
    matches
}

fn first_alignment_divergence(
    kind: DivergenceKind,
    left: &[ComparableEvent<'_>],
    right: &[ComparableEvent<'_>],
    matches: &[(usize, usize)],
) -> Option<DivergenceCluster> {
    let (mut left_start, mut right_start) = (0_usize, 0_usize);
    for &(left_match, right_match) in matches {
        if left_start < left_match || right_start < right_match {
            return Some(divergence_cluster(
                kind,
                left.get(left_start),
                right.get(right_start),
                matches.len(),
            ));
        }
        left_start = left_match + 1;
        right_start = right_match + 1;
    }
    if left_start < left.len() || right_start < right.len() {
        return Some(divergence_cluster(
            kind,
            left.get(left_start),
            right.get(right_start),
            matches.len(),
        ));
    }
    None
}

fn divergence_cluster(
    kind: DivergenceKind,
    left: Option<&ComparableEvent<'_>>,
    right: Option<&ComparableEvent<'_>>,
    aligned_event_count: usize,
) -> DivergenceCluster {
    let confidence = if left.is_some() && right.is_some() {
        "strong heuristic"
    } else {
        "weak heuristic"
    };
    let left_summary = left
        .map(|item| divergence_event_summary(item.event))
        .unwrap_or_else(|| "no comparable left event".to_owned());
    let right_summary = right
        .map(|item| divergence_event_summary(item.event))
        .unwrap_or_else(|| "no comparable right event".to_owned());
    DivergenceCluster {
        kind: kind.as_str().to_owned(),
        confidence: confidence.to_owned(),
        summary: format!(
            "First {} divergence: left `{}` vs right `{}`.",
            kind.label(),
            left_summary,
            right_summary
        ),
        explanation: format!(
            "Detected after aligning {aligned_event_count} comparable normalized events with an LCS-style pass. Timestamps and telemetry-only noise do not drive this heuristic."
        ),
        left_line: left.map(|item| item.event.line_number),
        right_line: right.map(|item| item.event.line_number),
        left_event_id: left.map(|item| item.event.id.clone()),
        right_event_id: right.map(|item| item.event.id.clone()),
        left_signature: left.map(|item| item.signature.clone()),
        right_signature: right.map(|item| item.signature.clone()),
    }
}

fn divergence_event_summary(event: &NormalizedEvent) -> String {
    let mut parts = vec![event.normalized_type.clone()];
    if let Some(name) = &event.name {
        parts.push(name.clone());
    }
    if let Some(status) = &event.status {
        parts.push(status.clone());
    }
    if !event.files.is_empty() {
        parts.push(event.files.join(","));
    }
    compact_text(&parts.join(" "), 180)
}

fn normalized_event_is_error_like(event: &NormalizedEvent) -> bool {
    text_is_error_like(&event.summary)
        || event
            .status
            .as_deref()
            .is_some_and(text_is_error_like)
        || event
            .output
            .as_deref()
            .is_some_and(text_is_error_like)
        || event
            .content
            .as_deref()
            .is_some_and(text_is_error_like)
}

fn event_signature(event: &NormalizedEvent) -> String {
    let content_hash = event
        .content
        .as_deref()
        .or(event.arguments.as_deref())
        .or(event.output.as_deref())
        .map(stable_hash_text)
        .unwrap_or_else(|| "none".to_owned());
    let file_hash = if event.files.is_empty() {
        "none".to_owned()
    } else {
        stable_hash_text(&event.files.join("|"))
    };
    let call_id = event
        .tool_call_id
        .as_deref()
        .map(stable_hash_text)
        .unwrap_or_else(|| "none".to_owned());
    format!(
        "{}:{}:{}:{}:{}:{}:{}",
        event.normalized_type,
        event.role.as_deref().unwrap_or("-"),
        event.name.as_deref().unwrap_or("-"),
        event.status.as_deref().unwrap_or("-"),
        call_id,
        content_hash,
        file_hash
    )
}

fn render_diff_text(diff: &TraceDiff) -> String {
    let mut out = String::new();
    out.push_str("Perlustron session diff\n");
    out.push_str(&format!(
        "  left: {} ({})\n",
        diff.metadata.left_path, diff.metadata.left_source
    ));
    out.push_str(&format!(
        "  right: {} ({})\n",
        diff.metadata.right_path, diff.metadata.right_source
    ));
    if diff.metadata.redacted {
        out.push_str(&format!(
            "  redaction: {}\n",
            diff.metadata.redaction_profile.as_deref().unwrap_or("enabled")
        ));
    }
    out.push_str("\nKey differences\n");
    if diff.deltas.is_empty() {
        out.push_str("  no top-level count differences detected\n");
    } else {
        for delta in &diff.deltas {
            out.push_str(&format!(
                "  - {}: {} -> {}\n",
                delta.field, delta.left, delta.right
            ));
        }
    }
    out.push_str("\nParser health\n");
    out.push_str(&format!(
        "  unknown events: {} -> {}\n",
        diff.parser_health_delta.unknown_events.left,
        diff.parser_health_delta.unknown_events.right
    ));
    out.push_str(&format!(
        "  malformed lines: {} -> {}\n",
        diff.parser_health_delta.malformed_lines.left,
        diff.parser_health_delta.malformed_lines.right
    ));
    out.push_str("\nTools\n");
    out.push_str(&format!(
        "  calls: {} -> {}; missing results: {} -> {}\n",
        diff.tool_delta.calls.left,
        diff.tool_delta.calls.right,
        diff.tool_delta.missing_results.left,
        diff.tool_delta.missing_results.right
    ));
    if !diff.tool_delta.only_left_tools.is_empty() {
        out.push_str(&format!(
            "  only left tools: {}\n",
            diff.tool_delta.only_left_tools.join(", ")
        ));
    }
    if !diff.tool_delta.only_right_tools.is_empty() {
        out.push_str(&format!(
            "  only right tools: {}\n",
            diff.tool_delta.only_right_tools.join(", ")
        ));
    }
    out.push_str("\nFiles\n");
    out.push_str(&format!(
        "  only left: {}\n  only right: {}\n  both: {}\n",
        diff.file_delta.only_left.len(),
        diff.file_delta.only_right.len(),
        diff.file_delta.both.len()
    ));
    for path in diff.file_delta.only_left.iter().take(8) {
        out.push_str(&format!("    left-only: {path}\n"));
    }
    for path in diff.file_delta.only_right.iter().take(8) {
        out.push_str(&format!("    right-only: {path}\n"));
    }
    out.push_str("\nErrors and divergence\n");
    out.push_str(&format!(
        "  error-like events: {} -> {}\n",
        diff.error_delta.errors.left, diff.error_delta.errors.right
    ));
    out.push_str(&format!(
        "  first likely divergence: {} ({})",
        diff.divergence.summary, diff.divergence.confidence
    ));
    if let Some(line) = diff.divergence.left_line {
        out.push_str(&format!("; left line {line}"));
    }
    if let Some(line) = diff.divergence.right_line {
        out.push_str(&format!("; right line {line}"));
    }
    out.push('\n');
    if !diff.divergence.clusters.is_empty() {
        out.push_str("  divergence categories:\n");
        for cluster in &diff.divergence.clusters {
            out.push_str(&format!(
                "    - {}: {}",
                cluster.kind, cluster.summary
            ));
            if let Some(line) = cluster.left_line {
                out.push_str(&format!("; left line {line}"));
            }
            if let Some(line) = cluster.right_line {
                out.push_str(&format!("; right line {line}"));
            }
            out.push('\n');
        }
    }
    if !diff.warnings.is_empty() {
        out.push_str("\nWarnings\n");
        for warning in &diff.warnings {
            out.push_str(&format!("  - {warning}\n"));
        }
    }
    out
}

fn render_diff_html(diff: &TraceDiff) -> String {
    let mut body = String::new();
    body.push_str("<!doctype html><meta charset=\"utf-8\"><title>Perlustron Diff Report</title>");
    body.push_str("<style>body{font-family:system-ui,sans-serif;margin:32px;line-height:1.45;color:#182125}table{border-collapse:collapse;width:100%;margin:16px 0}td,th{border:1px solid #d7dee2;padding:6px 8px;text-align:left;vertical-align:top}code,pre{background:#f4f6f7;padding:2px 4px;border-radius:4px}pre{white-space:pre-wrap;padding:12px}.warn{color:#8a3b00}.redacted{color:#7a1f1f;font-weight:700}</style>");
    body.push_str("<h1>Perlustron Session Diff</h1>");
    if diff.metadata.redacted {
        body.push_str(&format!(
            "<p class=\"redacted\">Redacted diff using profile <code>{}</code>.</p>",
            escape_html(diff.metadata.redaction_profile.as_deref().unwrap_or("enabled"))
        ));
    } else {
        body.push_str("<p class=\"warn\">Unredacted diff. Raw prompts, paths, and tool output may appear.</p>");
    }
    body.push_str("<h2>Overview</h2><table>");
    push_html_row(&mut body, "Left", &diff.metadata.left_path);
    push_html_row(&mut body, "Right", &diff.metadata.right_path);
    push_html_row(&mut body, "Sources", &format!("{} vs {}", diff.metadata.left_source, diff.metadata.right_source));
    push_html_row(&mut body, "First likely divergence", &diff.divergence.summary);
    push_html_row(&mut body, "Divergence confidence", &diff.divergence.confidence);
    push_html_row(
        &mut body,
        "Aligned comparable events",
        &diff.divergence.aligned_event_count.to_string(),
    );
    body.push_str("</table><h2>Key Differences</h2><table><thead><tr><th>Field</th><th>Left</th><th>Right</th></tr></thead><tbody>");
    for delta in &diff.deltas {
        body.push_str("<tr>");
        push_html_cell(&mut body, &delta.field);
        push_html_cell(&mut body, &delta.left);
        push_html_cell(&mut body, &delta.right);
        body.push_str("</tr>");
    }
    body.push_str("</tbody></table><h2>Parser Health Comparison</h2><table>");
    push_html_row(
        &mut body,
        "Unknown events",
        &format!(
            "{} -> {}",
            diff.parser_health_delta.unknown_events.left,
            diff.parser_health_delta.unknown_events.right
        ),
    );
    push_html_row(
        &mut body,
        "Malformed lines",
        &format!(
            "{} -> {}",
            diff.parser_health_delta.malformed_lines.left,
            diff.parser_health_delta.malformed_lines.right
        ),
    );
    body.push_str("</table><h2>Tool Usage Comparison</h2><table>");
    push_html_row(
        &mut body,
        "Calls",
        &format!("{} -> {}", diff.tool_delta.calls.left, diff.tool_delta.calls.right),
    );
    push_html_row(
        &mut body,
        "Missing/unpaired results",
        &format!(
            "{} -> {}",
            diff.tool_delta.missing_results.left, diff.tool_delta.missing_results.right
        ),
    );
    push_html_row(&mut body, "Only left tools", &diff.tool_delta.only_left_tools.join(", "));
    push_html_row(&mut body, "Only right tools", &diff.tool_delta.only_right_tools.join(", "));
    body.push_str("</table><h2>Error And Failure Comparison</h2><table>");
    push_html_row(
        &mut body,
        "Error-like event count",
        &format!("{} -> {}", diff.error_delta.errors.left, diff.error_delta.errors.right),
    );
    push_html_row(
        &mut body,
        "Left first error-like event",
        diff.error_delta.left_first_error.as_deref().unwrap_or("none"),
    );
    push_html_row(
        &mut body,
        "Right first error-like event",
        diff.error_delta.right_first_error.as_deref().unwrap_or("none"),
    );
    body.push_str("</table><h2>File Activity Comparison</h2><table><thead><tr><th>Side</th><th>File</th></tr></thead><tbody>");
    for file in &diff.file_delta.only_left {
        body.push_str("<tr>");
        push_html_cell(&mut body, "left only");
        push_html_cell(&mut body, file);
        body.push_str("</tr>");
    }
    for file in &diff.file_delta.only_right {
        body.push_str("<tr>");
        push_html_cell(&mut body, "right only");
        push_html_cell(&mut body, file);
        body.push_str("</tr>");
    }
    body.push_str("</tbody></table><h2>Token/Context Comparison</h2><table>");
    push_html_row(
        &mut body,
        "Token telemetry",
        &format!("{} -> {}", diff.token_delta.left_available, diff.token_delta.right_available),
    );
    push_html_row(
        &mut body,
        "Latest tokens",
        &format!(
            "{} -> {}",
            diff.token_delta
                .left_latest_total_tokens
                .map(|value| value.to_string())
                .unwrap_or_else(|| "n/a".to_owned()),
            diff.token_delta
                .right_latest_total_tokens
                .map(|value| value.to_string())
                .unwrap_or_else(|| "n/a".to_owned())
        ),
    );
    body.push_str("</table>");
    body.push_str("<h2>Divergence</h2><table><thead><tr><th>Kind</th><th>Confidence</th><th>Left line</th><th>Right line</th><th>Summary</th></tr></thead><tbody>");
    for cluster in &diff.divergence.clusters {
        body.push_str("<tr>");
        push_html_cell(&mut body, &cluster.kind);
        push_html_cell(&mut body, &cluster.confidence);
        push_html_cell(
            &mut body,
            &cluster
                .left_line
                .map(|line| line.to_string())
                .unwrap_or_else(|| "n/a".to_owned()),
        );
        push_html_cell(
            &mut body,
            &cluster
                .right_line
                .map(|line| line.to_string())
                .unwrap_or_else(|| "n/a".to_owned()),
        );
        push_html_cell(&mut body, &cluster.summary);
        body.push_str("</tr>");
    }
    body.push_str("</tbody></table>");
    if let Some(report) = &diff.redaction_report {
        body.push_str("<h2>Redaction Report</h2><table>");
        push_html_row(&mut body, "Profile", &report.profile);
        push_html_row(
            &mut body,
            "Redacted fields",
            &format!("left {}, right {}", report.left_redacted_fields, report.right_redacted_fields),
        );
        body.push_str("</table>");
    }
    body
}

fn count_delta(left: usize, right: usize) -> CountDelta {
    CountDelta {
        left,
        right,
        delta: right as isize - left as isize,
    }
}

fn string_set(values: &[String]) -> std::collections::HashSet<String> {
    values.iter().cloned().collect()
}

fn set_difference_sorted(
    left: &std::collections::HashSet<String>,
    right: &std::collections::HashSet<String>,
) -> Vec<String> {
    let mut values = left.difference(right).cloned().collect::<Vec<_>>();
    values.sort();
    values
}

fn set_intersection_sorted(
    left: &std::collections::HashSet<String>,
    right: &std::collections::HashSet<String>,
) -> Vec<String> {
    let mut values = left.intersection(right).cloned().collect::<Vec<_>>();
    values.sort();
    values
}

fn path_for_diff(path: &Path, redacted: bool, profile: RedactionProfile) -> String {
    diff_text_value(&path.display().to_string(), redacted, profile, "sessionPath")
}

fn diff_text_value(
    value: &str,
    redacted: bool,
    profile: RedactionProfile,
    field_path: &str,
) -> String {
    if !redacted {
        return value.to_owned();
    }
    let mut report = RedactionReport {
        profile: profile.as_str().to_owned(),
        ..Default::default()
    };
    redact_text(value, profile, field_path, &mut report)
}
