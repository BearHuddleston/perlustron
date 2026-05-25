// SPDX-License-Identifier: MIT OR Apache-2.0

use super::*;

pub(super) fn rebuild_calls_by_id(prompts: &[PromptNode]) -> HashMap<String, (usize, usize)> {
    let mut calls_by_id = HashMap::new();
    for (prompt_index, prompt) in prompts.iter().enumerate() {
        for (call_index, call) in prompt.calls.iter().enumerate() {
            calls_by_id.insert(call.id.clone(), (prompt_index, call_index));
        }
    }
    calls_by_id
}

pub(super) fn rebuild_assistant_message_by_prompt(
    prompts: &[PromptNode],
) -> HashMap<usize, String> {
    let mut assistant_message_by_prompt = HashMap::new();
    for (prompt_index, prompt) in prompts.iter().enumerate() {
        if let Some(message) = prompt
            .assistant_messages
            .iter()
            .max_by_key(|message| message.event_index)
        {
            assistant_message_by_prompt.insert(prompt_index, message.id.clone());
        }
    }
    assistant_message_by_prompt
}

pub(super) fn link_pending_calls_to_assistant_message(
    prompts: &mut [PromptNode],
    prompt_index: usize,
    assistant_message_id: &str,
) {
    let Some(prompt) = prompts.get_mut(prompt_index) else {
        return;
    };
    for call in &mut prompt.calls {
        if call.assistant_message_id.is_none() {
            call.assistant_message_id = Some(assistant_message_id.to_owned());
        }
    }
}

fn session_totals(prompts: &[PromptNode], compaction_count: usize) -> SessionTotals {
    let call_count = prompts.iter().map(|prompt| prompt.calls.len()).sum();
    let completed_call_count = prompts
        .iter()
        .flat_map(|prompt| &prompt.calls)
        .filter(|call| call.status == "completed")
        .count();
    let assistant_message_count = prompts
        .iter()
        .map(|prompt| prompt.assistant_messages.len())
        .sum();
    let file_change_count = prompts.iter().map(|prompt| prompt.file_changes.len()).sum();
    SessionTotals {
        prompt_count: prompts.len(),
        call_count,
        completed_call_count,
        assistant_message_count,
        file_change_count,
        compaction_count,
    }
}

fn finalize_parser_health(
    mut health: ParserHealth,
    prompts: &[PromptNode],
    compactions: &[CompactionNode],
    token_telemetry: &TokenTelemetry,
) -> ParserHealth {
    health.renderable_event_count = renderable_event_count_from_parts(prompts, compactions);
    health.image_count = prompts.iter().map(|prompt| prompt.images.len()).sum();
    health.tool_call_count = prompts.iter().map(|prompt| prompt.calls.len()).sum();
    health.tool_result_count = prompts
        .iter()
        .flat_map(|prompt| &prompt.calls)
        .filter(|call| call.status == "completed" || call.output_preview.is_some())
        .count();
    health.file_activity_count = prompts.iter().map(|prompt| prompt.file_changes.len()).sum();
    health.compaction_count = compactions.len();
    health.token_telemetry_available = token_telemetry.latest_total_tokens.is_some();
    if health.malformed_line_count > 0 {
        health.warnings.push(
            "Malformed JSONL lines were skipped but preserved in parser health references."
                .to_owned(),
        );
    }
    if health.unknown_event_count > 0 {
        health.warnings.push(
            "Unknown or unsupported event types were preserved as parser health references."
                .to_owned(),
        );
    }
    health
}

fn renderable_event_count_from_parts(
    prompts: &[PromptNode],
    compactions: &[CompactionNode],
) -> usize {
    prompts
        .iter()
        .map(|prompt| {
            1 + prompt.calls.len() + prompt.assistant_messages.len() + prompt.file_changes.len()
        })
        .sum::<usize>()
        + compactions.len()
}

pub(super) fn build_session_graph(input: SessionGraphInput<'_>) -> SessionGraph {
    let SessionGraphInput {
        source,
        path,
        byte_length,
        processed_byte_length,
        modified,
        session_id,
        cwd,
        metadata,
        prompts,
        compactions,
        token_samples,
        health,
        line_count,
    } = input;
    let latest_event_index = line_count.saturating_sub(1);
    let is_live = is_recent(modified);
    let pending_bytes = byte_length.saturating_sub(processed_byte_length);
    let totals = session_totals(&prompts, compactions.len());
    let token_telemetry = build_token_telemetry(token_samples);
    let parser_health = finalize_parser_health(health, &prompts, &compactions, &token_telemetry);
    let ui = build_ui_summary(
        source,
        path,
        cwd.as_deref(),
        &prompts,
        &compactions,
        is_live,
    );

    let mut graph = SessionGraph {
        schema_version: NORMALIZED_TRACE_SCHEMA_VERSION.to_owned(),
        parser_version: env!("CARGO_PKG_VERSION").to_owned(),
        source: source.as_str().to_owned(),
        session_id,
        session_path: path.display().to_string(),
        cwd,
        metadata,
        generated_at: isoish_now(),
        last_modified_at: system_time_to_rfc3339(modified),
        latest_event_index,
        is_live,
        line_count,
        byte_length,
        processed_byte_length,
        pending_bytes,
        privacy_summary: PrivacySummary::for_server_profile(None, false),
        shareability_summary: ShareabilitySummary::for_server_profile(None),
        totals,
        parser_health,
        insights: TraceInsights::default(),
        ui,
        prompts,
        compactions,
        token_telemetry,
    };
    graph.insights = trace_insights_from_graph(&graph);
    graph
}

fn build_ui_summary(
    source: SessionSource,
    path: &Path,
    cwd: Option<&str>,
    prompts: &[PromptNode],
    compactions: &[CompactionNode],
    is_live: bool,
) -> UiSummary {
    let total_turns = prompts
        .iter()
        .map(|prompt| {
            prompt.calls.len() + prompt.assistant_messages.len() + prompt.file_changes.len()
        })
        .sum();
    let metrics = collect_ui_metrics(prompts, compactions);

    let timeline_ticks = build_timeline_ticks(prompts, compactions);
    let timeline_labels = build_timeline_labels(prompts, compactions, is_live);
    let roots = build_session_roots(source, path, cwd);
    let prompt_rows = prompts
        .iter()
        .enumerate()
        .map(|(index, prompt)| {
            let turns =
                prompt.calls.len() + prompt.assistant_messages.len() + prompt.file_changes.len();
            let call_counts = prompt_call_counts(prompt);
            PromptRowSummary {
                id: prompt.id.clone(),
                title: prompt.title.clone(),
                turns,
                local: call_counts.local,
                browser: call_counts.browser,
                web: call_counts.web,
                files: prompt.file_changes.len(),
                is_live: is_live && index + 1 == prompts.len(),
                last_event_index: prompt_event_index(prompt),
            }
        })
        .collect();

    UiSummary {
        source: source.as_str().to_owned(),
        session_name: session_name_from_cwd(cwd, source),
        total_turns,
        all_count: prompts.len() + compactions.len(),
        live_count: if is_live {
            (prompts.len() + compactions.len()).max(1)
        } else {
            0
        },
        metric_errors: metrics.errors,
        metric_long_calls: metrics.long_calls,
        metric_files: metrics.files,
        metric_diffs: metrics.diffs,
        metric_artifacts: metrics.artifacts,
        metric_compactions: metrics.compactions,
        metric_web: metrics.web,
        timeline_ticks,
        timeline_labels,
        roots,
        prompt_rows,
    }
}

fn collect_ui_metrics(prompts: &[PromptNode], compactions: &[CompactionNode]) -> UiMetrics {
    let mut metrics = UiMetrics {
        compactions: compactions.len(),
        ..Default::default()
    };

    for call in prompts.iter().flat_map(|prompt| &prompt.calls) {
        let name = call.name.to_ascii_lowercase();
        let kind = call.kind.to_ascii_lowercase();
        let argument_preview = call.argument_preview.to_ascii_lowercase();
        let output_preview = call.output_preview.as_deref().map(str::to_ascii_lowercase);

        let call_matches = |needle: &str| name.contains(needle) || kind.contains(needle);
        let preview_contains = |needle: &str| {
            argument_preview.contains(needle)
                || output_preview
                    .as_deref()
                    .map(|output| output.contains(needle))
                    .unwrap_or(false)
        };

        if call_matches("error") || preview_contains("error") {
            metrics.errors += 1;
        }
        if call.argument_preview.len() > 1_400
            || call
                .output_preview
                .as_deref()
                .map(|output| output.len() > 1_200)
                .unwrap_or(false)
        {
            metrics.long_calls += 1;
        }
        if call_matches("file")
            || call_matches("read")
            || call_matches("write")
            || call_matches("rg")
            || call_matches("patch")
        {
            metrics.files += 1;
        }
        if call_matches("diff") || call_matches("patch") {
            metrics.diffs += 1;
        }
        if call_matches("artifact") || preview_contains("artifact") {
            metrics.artifacts += 1;
        }
        if call.kind == "web" {
            metrics.web += 1;
        }
    }

    for file_change in prompts.iter().flat_map(|prompt| &prompt.file_changes) {
        metrics.files += 1;
        if file_change.change_type != "add" {
            metrics.diffs += 1;
        }
    }

    metrics
}

fn prompt_call_counts(prompt: &PromptNode) -> PromptCallCounts {
    let mut counts = PromptCallCounts::default();

    for call in &prompt.calls {
        match call.kind.as_str() {
            "local" => counts.local += 1,
            "browser" => counts.browser += 1,
            "web" => counts.web += 1,
            _ => {}
        }
    }

    counts
}

fn build_timeline_ticks(
    prompts: &[PromptNode],
    compactions: &[CompactionNode],
) -> Vec<TimelineTick> {
    let mut events: Vec<(usize, String)> = prompts
        .iter()
        .flat_map(|prompt| {
            prompt
                .calls
                .iter()
                .map(|call| (call.event_index, call.kind.clone()))
                .chain(
                    prompt
                        .assistant_messages
                        .iter()
                        .map(|message| (message.event_index, "message".to_owned())),
                )
                .chain(
                    prompt
                        .file_changes
                        .iter()
                        .map(|change| (change.event_index, format!("file-{}", change.change_type))),
                )
        })
        .collect();
    events.extend(
        compactions
            .iter()
            .map(|compaction| (compaction.event_index, "compaction".to_owned())),
    );
    events.sort_by_key(|(event_index, _)| *event_index);

    events
        .into_iter()
        .enumerate()
        .map(|(index, (event_index, kind))| TimelineTick {
            kind,
            height: 6 + ((event_index + index) % 5) * 4,
        })
        .collect()
}

fn build_timeline_labels(
    prompts: &[PromptNode],
    compactions: &[CompactionNode],
    is_live: bool,
) -> Vec<String> {
    let mut timestamps = Vec::new();
    for prompt in prompts {
        push_timestamp(&mut timestamps, prompt.timestamp.as_deref());
        for call in &prompt.calls {
            push_timestamp(&mut timestamps, call.started_at.as_deref());
            push_timestamp(&mut timestamps, call.completed_at.as_deref());
        }
        for message in &prompt.assistant_messages {
            push_timestamp(&mut timestamps, message.timestamp.as_deref());
        }
        for file_change in &prompt.file_changes {
            push_timestamp(&mut timestamps, file_change.timestamp.as_deref());
        }
    }
    for compaction in compactions {
        push_timestamp(&mut timestamps, compaction.timestamp.as_deref());
    }

    timestamps.sort();
    let freshness = if is_live { "LIVE" } else { "STALE" }.to_owned();
    if timestamps.is_empty() {
        return vec![
            "Start".to_owned(),
            "Mid".to_owned(),
            "Latest".to_owned(),
            freshness,
        ];
    }

    let first = timestamps[0].as_str();
    let middle = timestamps[timestamps.len() / 2].as_str();
    let latest = timestamps.last().map(String::as_str).unwrap_or(first);
    vec![
        format_time_label(first),
        format_time_label(middle),
        format_time_label(latest),
        freshness,
    ]
}

fn push_timestamp(target: &mut Vec<String>, value: Option<&str>) {
    if let Some(value) = value.filter(|value| !value.trim().is_empty()) {
        target.push(value.to_owned());
    }
}

fn format_time_label(timestamp: &str) -> String {
    timestamp
        .split_once('T')
        .and_then(|(_, rest)| rest.get(0..5))
        .map(str::to_owned)
        .unwrap_or_else(|| timestamp.to_owned())
}

fn build_session_roots(
    source: SessionSource,
    path: &Path,
    cwd: Option<&str>,
) -> Vec<SessionRootSummary> {
    let mut roots = Vec::new();
    push_session_root(
        &mut roots,
        "Session file",
        path.display().to_string(),
        "Loaded",
    );

    if let Some(cwd) = cwd.filter(|cwd| !cwd.trim().is_empty()) {
        push_session_root(&mut roots, "Working directory", cwd.to_owned(), "CWD");
    }

    if let Ok(root) = sessions_root(source) {
        push_session_root(
            &mut roots,
            match source {
                SessionSource::Codex => "Codex sessions",
                SessionSource::Claude => "Claude projects",
            },
            root.display().to_string(),
            "Local",
        );
    }

    roots
}

fn push_session_root(roots: &mut Vec<SessionRootSummary>, label: &str, path: String, status: &str) {
    if roots.iter().any(|root| root.path == path) {
        return;
    }

    roots.push(SessionRootSummary {
        label: label.to_owned(),
        path,
        status: status.to_owned(),
    });
}

fn prompt_event_index(prompt: &PromptNode) -> usize {
    prompt
        .calls
        .iter()
        .map(|call| call.event_index)
        .chain(
            prompt
                .assistant_messages
                .iter()
                .map(|message| message.event_index),
        )
        .chain(prompt.file_changes.iter().map(|change| change.event_index))
        .max()
        .unwrap_or(prompt.event_index)
}

fn session_name_from_cwd(cwd: Option<&str>, source: SessionSource) -> String {
    cwd.and_then(|path| {
        path.rsplit(['/', '\\'])
            .find(|part| !part.trim().is_empty())
            .map(str::to_owned)
    })
    .unwrap_or_else(|| format!("{} session", source.display_name()))
}
