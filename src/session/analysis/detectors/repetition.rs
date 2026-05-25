// SPDX-License-Identifier: MIT OR Apache-2.0

use super::*;

pub(super) fn detect_repeated_patterns(
    events: &[FlatTraceEvent],
    file_observations: &[FileObservation],
) -> Vec<RepeatedPatternInsight> {
    let mut grouped: HashMap<String, Vec<&FlatTraceEvent>> = HashMap::new();
    for event in events
        .iter()
        .filter(|event| event.normalized_type == "tool_call")
    {
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
                key: normalize_text(&key),
                count: group.len(),
                first_line: first.line_number,
                last_line: last.line_number,
                examples: group.iter().map(|event| event.title.clone()).collect(),
                linked_events: group
                    .iter()
                    .map(|event| insight_link_from_flat_event(event))
                    .collect(),
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
                .map(|file| format!("{} ({})", file.path, file.classification))
                .collect(),
            linked_events: group
                .iter()
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
    repeated
}

fn normalized_repeat_key(text: &str) -> String {
    let collapsed = text
        .split_whitespace()
        .collect::<Vec<_>>()
        .join(" ")
        .to_ascii_lowercase();
    normalize_text(&collapsed)
}

pub(super) fn stable_hash_text(text: &str) -> String {
    let mut hash: u64 = 0xcbf29ce484222325;
    for byte in text.as_bytes() {
        hash ^= u64::from(*byte);
        hash = hash.wrapping_mul(0x100000001b3);
    }
    format!("{hash:016x}")
}
