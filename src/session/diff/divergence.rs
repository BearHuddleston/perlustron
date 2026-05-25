// SPDX-License-Identifier: MIT OR Apache-2.0

use super::*;

pub(super) fn find_first_divergence(
    left_graph: &SessionGraph,
    right_graph: &SessionGraph,
) -> DiffDivergence {
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
            dp[left_index][right_index] =
                if left[left_index].signature == right[right_index].signature {
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
    normalize_text(&parts.join(" "))
}

fn normalized_event_is_error_like(event: &NormalizedEvent) -> bool {
    text_is_error_like(&event.summary)
        || event.status.as_deref().is_some_and(text_is_error_like)
        || event.output.as_deref().is_some_and(text_is_error_like)
        || event.content.as_deref().is_some_and(text_is_error_like)
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
