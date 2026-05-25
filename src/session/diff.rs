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
            first_prompt.map(normalize_text)
        },
        prompt_hash: first_prompt.map(stable_hash_text),
        final_response_preview: if redacted {
            None
        } else {
            final_response.map(normalize_text)
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
