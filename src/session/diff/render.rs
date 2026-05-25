// SPDX-License-Identifier: MIT OR Apache-2.0

use super::*;

pub(super) fn render_diff_text(diff: &TraceDiff) -> String {
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
            diff.metadata
                .redaction_profile
                .as_deref()
                .unwrap_or("enabled")
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
        diff.parser_health_delta.unknown_events.left, diff.parser_health_delta.unknown_events.right
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
    for path in &diff.file_delta.only_left {
        out.push_str(&format!("    left-only: {path}\n"));
    }
    for path in &diff.file_delta.only_right {
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
            out.push_str(&format!("    - {}: {}", cluster.kind, cluster.summary));
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

pub(super) fn render_diff_html(diff: &TraceDiff) -> String {
    let mut body = String::new();
    body.push_str("<!doctype html><meta charset=\"utf-8\"><title>Perlustron Diff Report</title>");
    body.push_str("<style>body{font-family:system-ui,sans-serif;margin:32px;line-height:1.45;color:#182125}table{border-collapse:collapse;width:100%;margin:16px 0}td,th{border:1px solid #d7dee2;padding:6px 8px;text-align:left;vertical-align:top}code,pre{background:#f4f6f7;padding:2px 4px;border-radius:4px}pre{white-space:pre-wrap;padding:12px}.warn{color:#8a3b00}.redacted{color:#7a1f1f;font-weight:700}</style>");
    body.push_str("<h1>Perlustron Session Diff</h1>");
    if diff.metadata.redacted {
        body.push_str(&format!(
            "<p class=\"redacted\">Redacted diff using profile <code>{}</code>.</p>",
            escape_html(
                diff.metadata
                    .redaction_profile
                    .as_deref()
                    .unwrap_or("enabled")
            )
        ));
    } else {
        body.push_str("<p class=\"warn\">Unredacted diff. Raw prompts, paths, and tool output may appear.</p>");
    }
    body.push_str("<h2>Overview</h2><table>");
    push_html_row(&mut body, "Left", &diff.metadata.left_path);
    push_html_row(&mut body, "Right", &diff.metadata.right_path);
    push_html_row(
        &mut body,
        "Sources",
        &format!(
            "{} vs {}",
            diff.metadata.left_source, diff.metadata.right_source
        ),
    );
    push_html_row(
        &mut body,
        "First likely divergence",
        &diff.divergence.summary,
    );
    push_html_row(
        &mut body,
        "Divergence confidence",
        &diff.divergence.confidence,
    );
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
        &format!(
            "{} -> {}",
            diff.tool_delta.calls.left, diff.tool_delta.calls.right
        ),
    );
    push_html_row(
        &mut body,
        "Missing/unpaired results",
        &format!(
            "{} -> {}",
            diff.tool_delta.missing_results.left, diff.tool_delta.missing_results.right
        ),
    );
    push_html_row(
        &mut body,
        "Only left tools",
        &diff.tool_delta.only_left_tools.join(", "),
    );
    push_html_row(
        &mut body,
        "Only right tools",
        &diff.tool_delta.only_right_tools.join(", "),
    );
    body.push_str("</table><h2>Error And Failure Comparison</h2><table>");
    push_html_row(
        &mut body,
        "Error-like event count",
        &format!(
            "{} -> {}",
            diff.error_delta.errors.left, diff.error_delta.errors.right
        ),
    );
    push_html_row(
        &mut body,
        "Left first error-like event",
        diff.error_delta
            .left_first_error
            .as_deref()
            .unwrap_or("none"),
    );
    push_html_row(
        &mut body,
        "Right first error-like event",
        diff.error_delta
            .right_first_error
            .as_deref()
            .unwrap_or("none"),
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
        &format!(
            "{} -> {}",
            diff.token_delta.left_available, diff.token_delta.right_available
        ),
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
            &format!(
                "left {}, right {}",
                report.left_redacted_fields, report.right_redacted_fields
            ),
        );
        body.push_str("</table>");
    }
    body
}
