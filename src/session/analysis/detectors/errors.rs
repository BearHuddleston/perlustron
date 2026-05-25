// SPDX-License-Identifier: MIT OR Apache-2.0

use super::*;

pub(super) fn detect_suspicious_tool_calls(
    events: &[FlatTraceEvent],
) -> Vec<SuspiciousToolCallInsight> {
    let mut suspicious = Vec::new();
    let mut seen = std::collections::HashSet::new();
    for event in events
        .iter()
        .filter(|event| event.normalized_type == "tool_call")
    {
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
            output_preview: event.output_preview.as_deref().map(normalize_text),
        });
    }
    suspicious
}

pub(super) fn detect_approval_friction(events: &[FlatTraceEvent]) -> Vec<InsightNote> {
    events
        .iter()
        .filter(|event| event_mentions_approval_friction(event))
        .map(|event| InsightNote {
            title: "Approval or sandbox friction".to_owned(),
            severity: "warning".to_owned(),
            confidence: "strong heuristic".to_owned(),
            explanation:
                "Logged text mentions approval, sandbox, permission, policy, or denied access."
                    .to_owned(),
            linked_events: vec![insight_link_from_flat_event(event)],
        })
        .collect()
}

pub(super) fn flat_event_is_error_like(event: &FlatTraceEvent) -> bool {
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

pub(super) fn tool_argument_text(event: &FlatTraceEvent) -> &str {
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

pub(super) fn text_is_error_like(text: &str) -> bool {
    let lower = text.to_ascii_lowercase();
    ERROR_LIKE_TERMS.iter().any(|term| lower.contains(term))
}

fn approval_friction_text(text: &str) -> bool {
    let lower = text.to_ascii_lowercase();
    APPROVAL_FRICTION_TERMS
        .iter()
        .any(|term| lower.contains(term))
}
