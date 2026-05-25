// SPDX-License-Identifier: MIT OR Apache-2.0

use super::*;

pub(super) fn build_inspection_queue(
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
                .collect(),
            related_tools: Vec::new(),
            redaction_safe_summary: format!(
                "First logged error-like event at line {}.",
                chain.first_logged_error.line_number
            ),
            raw_available: true,
        });
    }
    for call in suspicious_tool_calls {
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
    for pattern in repeated_patterns {
        let failed =
            pattern.severity == "warning" || pattern.key.to_ascii_lowercase().contains("error");
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
                .collect(),
            line_numbers: pattern
                .linked_events
                .iter()
                .map(|event| event.line_number)
                .collect(),
            related_files: if pattern.pattern_type == "file_activity" {
                vec![pattern.key.clone()]
            } else {
                Vec::new()
            },
            related_tools: if pattern.pattern_type == "tool_call" {
                pattern.examples.to_vec()
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
    if !approval_friction.is_empty() {
        let approval_events = approval_friction
            .iter()
            .flat_map(|note| note.linked_events.iter())
            .collect::<Vec<_>>();
        queue.push(InspectionQueueItem {
            id: "approval-sandbox-friction".to_owned(),
            title: "Approval or sandbox friction".to_owned(),
            severity: "warning".to_owned(),
            confidence: "strong heuristic".to_owned(),
            directness: "strong heuristic".to_owned(),
            summary: format!(
                "{} approval/sandbox friction event(s)",
                approval_friction.len()
            ),
            explanation:
                "Logged text mentions approval, sandbox, permission, policy, or denied access."
                    .to_owned(),
            event_ids: approval_events
                .iter()
                .map(|event| event.id.clone())
                .collect(),
            line_numbers: approval_events
                .iter()
                .map(|event| event.line_number)
                .collect(),
            related_files: Vec::new(),
            related_tools: Vec::new(),
            redaction_safe_summary: "Approval or sandbox friction was logged.".to_owned(),
            raw_available: !approval_events.is_empty(),
        });
    }
    if !context_pressure.high_context_markers.is_empty()
        || !context_pressure.compaction_markers.is_empty()
    {
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
                .collect(),
            line_numbers: context_pressure
                .high_context_markers
                .iter()
                .chain(&context_pressure.compaction_markers)
                .map(|event| event.line_number)
                .collect(),
            related_files: Vec::new(),
            related_tools: Vec::new(),
            redaction_safe_summary: "Context pressure or compaction marker was logged.".to_owned(),
            raw_available: true,
        });
    }
    let impacted_files = file_impact
        .files_edited
        .iter()
        .chain(&file_impact.files_read)
        .chain(&file_impact.files_referenced)
        .collect::<Vec<_>>();
    if !impacted_files.is_empty() {
        queue.push(InspectionQueueItem {
            id: "file-impact".to_owned(),
            title: "File impact".to_owned(),
            severity: "info".to_owned(),
            confidence: if file_impact
                .files_edited
                .iter()
                .any(|file| file.evidence.contains("direct"))
            {
                "direct"
            } else {
                "weak heuristic"
            }
            .to_owned(),
            directness: "direct and inferred file activity".to_owned(),
            summary: format!(
                "{} edited / {} read / {} referenced file(s)",
                file_impact.files_edited.len(),
                file_impact.files_read.len(),
                file_impact.files_referenced.len()
            ),
            explanation: "File impact combines direct file-change records and inferred paths from tool payloads.".to_owned(),
            event_ids: Vec::new(),
            line_numbers: impacted_files.iter().map(|file| file.first_line).collect(),
            related_files: impacted_files
                .iter()
                .map(|file| file.path.clone())
                .collect(),
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
                .collect(),
            related_files: Vec::new(),
            related_tools: Vec::new(),
            redaction_safe_summary: "Unknown or malformed log data may limit analysis.".to_owned(),
            raw_available: true,
        });
    }
    queue
}
