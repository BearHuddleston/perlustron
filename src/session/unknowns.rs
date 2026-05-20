// SPDX-License-Identifier: MIT OR Apache-2.0

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct UnknownsReport {
    parser_version: String,
    trace_schema_version: String,
    source_guess: String,
    source_confidence: String,
    total_lines: usize,
    unknown_event_count: usize,
    unknown_event_types: Vec<UnknownEventTypeSummary>,
    malformed_line_count: usize,
    redacted_samples: Vec<UnknownSample>,
    suggested_fixture_name: String,
    suggested_github_issue: String,
    redaction_report: RedactionReport,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct UnknownSample {
    line_number: usize,
    event_index: usize,
    source_event_type: String,
    shape_hash: String,
    redacted_preview: String,
}

fn build_unknowns_report(
    source: SessionSource,
    input: &Path,
    profile: RedactionProfile,
) -> Result<UnknownsReport> {
    let graph = parse_graph_for_file(source, input)?;
    build_unknowns_report_from_graph(source, input, &graph, profile)
}

fn build_unknowns_report_cached(
    source: SessionSource,
    input: &Path,
    cache: &Mutex<HashMap<String, CachedSession>>,
    profile: RedactionProfile,
) -> Result<UnknownsReport> {
    let graph = load_session_graph(source, input, cache)?;
    build_unknowns_report_from_graph(source, input, &graph, profile)
}

fn build_unknowns_report_from_graph(
    source: SessionSource,
    input: &Path,
    graph: &SessionGraph,
    profile: RedactionProfile,
) -> Result<UnknownsReport> {
    let mut redaction_report = RedactionReport {
        profile: profile.as_str().to_owned(),
        warnings: vec![
            "Unknown samples are redacted previews, not raw log lines.".to_owned(),
            "Review before sharing; redaction is best effort.".to_owned(),
        ],
        ..Default::default()
    };
    let mut redacted_samples = graph
        .parser_health
        .unknown_events
        .iter()
        .map(|event| UnknownSample {
            line_number: event.line_number,
            event_index: event.event_index,
            source_event_type: event.source_event_type.clone(),
            shape_hash: stable_hash_text(&event.preview),
            redacted_preview: redact_text(
                &event.preview,
                profile,
                "parser.unknown.preview",
                &mut redaction_report,
            ),
        })
        .collect::<Vec<_>>();
    redacted_samples.extend(graph.parser_health.malformed_lines.iter().map(|line| {
        UnknownSample {
            line_number: line.line_number,
            event_index: line.event_index,
            source_event_type: "malformed_jsonl".to_owned(),
            shape_hash: stable_hash_text(&line.preview),
            redacted_preview: redact_text(
                &line.preview,
                profile,
                "parser.malformed.preview",
                &mut redaction_report,
            ),
        }
    }));
    let suggested_fixture_name = suggested_fixture_name(source, &graph.parser_health);
    let suggested_github_issue = suggested_schema_drift_issue(
        source,
        input,
        &graph.parser_health,
        &suggested_fixture_name,
    );

    Ok(UnknownsReport {
        parser_version: env!("CARGO_PKG_VERSION").to_owned(),
        trace_schema_version: NORMALIZED_TRACE_SCHEMA_VERSION.to_owned(),
        source_guess: source.as_str().to_owned(),
        source_confidence: graph.parser_health.source_detection_confidence.clone(),
        total_lines: graph.parser_health.total_lines_read,
        unknown_event_count: graph.parser_health.unknown_event_count,
        unknown_event_types: graph.parser_health.unknown_event_types.clone(),
        malformed_line_count: graph.parser_health.malformed_line_count,
        redacted_samples,
        suggested_fixture_name,
        suggested_github_issue,
        redaction_report,
    })
}

fn write_unknowns_report(
    source: Option<SessionSource>,
    input: &Path,
    output: Option<&Path>,
    profile: RedactionProfile,
) -> Result<Option<String>> {
    let report = build_unknowns_report(source_for_path(input, source), input, profile)?;
    let content = if output.is_some() {
        serde_json::to_string_pretty(&report).context("failed to encode unknowns report")?
    } else {
        render_unknowns_text(&report)
    };
    if let Some(output) = output {
        fs::write(output, content).with_context(|| format!("failed to write {}", output.display()))?;
        Ok(None)
    } else {
        Ok(Some(content))
    }
}

fn write_fixture_report(
    source: Option<SessionSource>,
    input: &Path,
    output: &Path,
    profile: RedactionProfile,
) -> Result<()> {
    let report = build_unknowns_report(source_for_path(input, source), input, profile)?;
    let content = render_fixture_report_markdown(input, &report);
    fs::write(output, content).with_context(|| format!("failed to write {}", output.display()))
}

fn render_unknowns_text(report: &UnknownsReport) -> String {
    let mut out = String::new();
    out.push_str("Perlustron unknowns\n");
    out.push_str(&format!("  source guess: {}\n", report.source_guess));
    out.push_str(&format!("  parser: {}\n", report.parser_version));
    out.push_str(&format!("  lines: {}\n", report.total_lines));
    out.push_str(&format!("  unknown events: {}\n", report.unknown_event_count));
    for event_type in &report.unknown_event_types {
        out.push_str(&format!(
            "    - {}: {}\n",
            event_type.source_event_type, event_type.count
        ));
    }
    out.push_str(&format!(
        "  malformed lines: {}\n",
        report.malformed_line_count
    ));
    out.push_str(&format!(
        "  suggested fixture: {}\n",
        report.suggested_fixture_name
    ));
    if !report.redacted_samples.is_empty() {
        out.push_str("  redacted samples:\n");
        for sample in &report.redacted_samples {
            out.push_str(&format!(
                "    - line {} {} shape {}\n",
                sample.line_number, sample.source_event_type, sample.shape_hash
            ));
        }
    }
    out
}

fn render_fixture_report_markdown(input: &Path, report: &UnknownsReport) -> String {
    let mut out = String::new();
    out.push_str("# Perlustron Fixture Report\n\n");
    out.push_str("This report is designed for a GitHub issue or fixture contribution. It intentionally avoids raw private log content.\n\n");
    out.push_str("## Source\n\n");
    out.push_str(&format!("- Input: `{}`\n", markdown_cell(&input.display().to_string())));
    out.push_str(&format!("- Source guess: `{}`\n", report.source_guess));
    out.push_str(&format!("- Parser version: `{}`\n", report.parser_version));
    out.push_str(&format!("- Trace schema: `{}`\n", report.trace_schema_version));
    out.push_str(&format!("- Total lines: `{}`\n", report.total_lines));
    out.push_str("\n## Unsupported Or Malformed Shapes\n\n");
    out.push_str(&format!("- Unknown events: `{}`\n", report.unknown_event_count));
    out.push_str(&format!("- Malformed lines: `{}`\n", report.malformed_line_count));
    if !report.unknown_event_types.is_empty() {
        out.push_str("\n| Event type | Count |\n| --- | --- |\n");
        for event_type in &report.unknown_event_types {
            out.push_str(&format!(
                "| `{}` | {} |\n",
                markdown_cell(&event_type.source_event_type),
                event_type.count
            ));
        }
    }
    out.push_str("\n## Redactions Applied\n\n");
    out.push_str(&format!(
        "- Profile: `{}`\n- Redacted fields in samples: `{}`\n",
        report.redaction_report.profile, report.redaction_report.redacted_field_count
    ));
    for kind in &report.redaction_report.findings_by_kind {
        out.push_str(&format!("- {}: `{}`\n", kind.kind, kind.count));
    }
    out.push_str("\n## Redacted Samples\n\n");
    if report.redacted_samples.is_empty() {
        out.push_str("No unknown or malformed samples were captured.\n");
    } else {
        for sample in &report.redacted_samples {
            out.push_str(&format!(
                "### Line {} `{}`\n\nShape hash: `{}`\n\n```json\n{}\n```\n\n",
                sample.line_number,
                markdown_cell(&sample.source_event_type),
                sample.shape_hash,
                sample.redacted_preview
            ));
        }
    }
    out.push_str("## Suggested Fixture Category\n\n");
    out.push_str(&format!("- `{}`\n", report.suggested_fixture_name));
    out.push_str("\n## Safe Contribution Checklist\n\n");
    out.push_str("- Start from synthetic data when possible.\n");
    out.push_str("- Do not attach raw private Codex or Claude logs.\n");
    out.push_str("- Run `perlustron scan` and `perlustron sanitize --profile strict` before sharing.\n");
    out.push_str("- Manually review prompts, paths, command output, images, and tool results.\n");
    out
}

fn suggested_fixture_name(source: SessionSource, health: &ParserHealth) -> String {
    let unknown = health
        .unknown_event_types
        .first()
        .map(|event_type| {
            event_type
                .source_event_type
                .replace([':', '/', '\\', '<', '>', ' '], "-")
        })
        .unwrap_or_else(|| "malformed-jsonl".to_owned());
    format!("{}-schema-drift-{}.jsonl", source.as_str(), unknown)
}

fn suggested_schema_drift_issue(
    source: SessionSource,
    input: &Path,
    health: &ParserHealth,
    fixture_name: &str,
) -> String {
    let mut body = String::new();
    body.push_str("## Summary\n\nPerlustron found unsupported or malformed session-log shapes.\n\n");
    body.push_str("## Environment\n\n");
    body.push_str(&format!("- Perlustron version: `{}`\n", env!("CARGO_PKG_VERSION")));
    body.push_str(&format!("- Parser version: `{}`\n", env!("CARGO_PKG_VERSION")));
    body.push_str(&format!(
        "- Trace schema version: `{}`\n",
        NORMALIZED_TRACE_SCHEMA_VERSION
    ));
    body.push_str(&format!("- Source type: `{}`\n", source.as_str()));
    body.push_str(&format!(
        "- Source confidence: `{}`\n",
        health.source_detection_confidence
    ));
    body.push_str(&format!("- Session path shared? `no, local only ({})`\n", input.file_name().and_then(|name| name.to_str()).unwrap_or("session.jsonl")));
    body.push_str("\n## Parser Health\n\n");
    body.push_str(&format!("- Total lines: `{}`\n", health.total_lines_read));
    body.push_str(&format!("- Unknown events: `{}`\n", health.unknown_event_count));
    body.push_str(&format!("- Malformed lines: `{}`\n", health.malformed_line_count));
    body.push_str("\n## Unknown Event Types\n\n");
    for event_type in &health.unknown_event_types {
        body.push_str(&format!(
            "- `{}`: `{}`\n",
            event_type.source_event_type, event_type.count
        ));
    }
    body.push_str("\n## Fixture\n\n");
    body.push_str(&format!(
        "Suggested sanitized fixture name: `{fixture_name}`\n\n"
    ));
    body.push_str("Redacted sample shapes are available from `perlustron unknowns --redacted`; raw private logs should not be attached.\n\n");
    body.push_str("I can provide a synthetic or strict-redacted fixture if needed. I will not attach raw private logs.\n");
    body
}
