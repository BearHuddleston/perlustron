// SPDX-License-Identifier: MIT OR Apache-2.0

use super::*;

pub(super) fn analyze_context_pressure(graph: &SessionGraph) -> ContextPressureInsight {
    let telemetry = &graph.token_telemetry;
    let high_context_markers = telemetry
        .samples
        .iter()
        .filter(|sample| sample.context_percent.unwrap_or_default() >= 80.0)
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
