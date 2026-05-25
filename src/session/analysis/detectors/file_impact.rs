// SPDX-License-Identifier: MIT OR Apache-2.0

use super::*;

pub(super) fn analyze_file_impact(
    observations: &[FileObservation],
    first_error_line: Option<usize>,
) -> FileImpactInsight {
    let mut groups: HashMap<String, Vec<&FileObservation>> = HashMap::new();
    for observation in observations {
        groups
            .entry(observation.path.clone())
            .or_default()
            .push(observation);
    }

    let mut edited = Vec::new();
    let mut read = Vec::new();
    let mut referenced = Vec::new();
    let mut repeated = Vec::new();
    for (path, group) in groups {
        let item = file_impact_item(&path, &group);
        if group.len() > 1 {
            repeated.push(item.clone());
        }
        if group.iter().any(|file| file.classification == "edited") {
            edited.push(item);
        } else if group.iter().any(|file| file.classification == "read") {
            read.push(item);
        } else {
            referenced.push(item);
        }
    }
    edited.sort_by_key(|item| item.first_line);
    read.sort_by_key(|item| item.first_line);
    referenced.sort_by_key(|item| item.first_line);
    repeated.sort_by(|left, right| {
        right
            .count
            .cmp(&left.count)
            .then_with(|| left.first_line.cmp(&right.first_line))
    });
    let files_before_first_error = first_error_line
        .map(|line| unique_paths(observations.iter().filter(|file| file.line_number <= line)))
        .unwrap_or_default();
    let files_after_first_error = first_error_line
        .map(|line| unique_paths(observations.iter().filter(|file| file.line_number > line)))
        .unwrap_or_default();

    FileImpactInsight {
        files_read: read,
        files_edited: edited,
        files_referenced: referenced,
        repeated_files: repeated,
        files_before_first_error,
        files_after_first_error,
        notes: vec![
            "Edited files come from explicit file-change records where available.".to_owned(),
            "Read and referenced files may be inferred from tool names and arguments.".to_owned(),
        ],
    }
}

pub(super) fn collect_file_observations(
    graph: &SessionGraph,
    events: &[FlatTraceEvent],
) -> Vec<FileObservation> {
    let mut observations = Vec::new();
    for prompt in &graph.prompts {
        for change in &prompt.file_changes {
            observations.push(FileObservation {
                path: change.path.clone(),
                line_number: change.event_index + 1,
                event_index: change.event_index,
                classification: "edited".to_owned(),
                evidence: "direct file-change record".to_owned(),
            });
        }
    }
    for event in events
        .iter()
        .filter(|event| event.normalized_type == "tool_call")
    {
        let classification = file_activity_classification(event);
        for path in inferred_paths_from_text(&event.text) {
            observations.push(FileObservation {
                path,
                line_number: event.line_number,
                event_index: event.event_index,
                classification: classification.clone(),
                evidence: format!(
                    "{} from {}",
                    if classification == "referenced" {
                        "inferred reference"
                    } else {
                        "inferred activity"
                    },
                    event.tool_name.as_deref().unwrap_or("tool")
                ),
            });
        }
    }
    dedupe_file_observations(observations)
}

fn dedupe_file_observations(observations: Vec<FileObservation>) -> Vec<FileObservation> {
    let mut seen = std::collections::HashSet::new();
    observations
        .into_iter()
        .filter(|observation| {
            seen.insert((
                observation.path.clone(),
                observation.line_number,
                observation.classification.clone(),
            ))
        })
        .collect()
}

fn file_activity_classification(event: &FlatTraceEvent) -> String {
    let name = event
        .tool_name
        .as_deref()
        .unwrap_or_default()
        .to_ascii_lowercase();
    let text = event.text.to_ascii_lowercase();
    if name.contains("write")
        || name.contains("edit")
        || name.contains("patch")
        || text.contains("apply_patch")
        || text.contains("*** update file:")
        || text.contains("*** add file:")
    {
        "edited".to_owned()
    } else if name.contains("read")
        || name.contains("grep")
        || name.contains("rg")
        || name.contains("search")
        || text.contains("rg ")
        || text.contains("get-content")
    {
        "read".to_owned()
    } else {
        "referenced".to_owned()
    }
}

fn inferred_paths_from_text(text: &str) -> Vec<String> {
    let mut paths = Vec::new();
    for token in text
        .split(|ch: char| {
            ch.is_whitespace() || matches!(ch, '"' | '\'' | ',' | ';' | '(' | ')' | '[' | ']')
        })
        .map(|token| token.trim_matches(|ch: char| matches!(ch, ':' | '{' | '}' | '<' | '>' | '`')))
        .filter(|token| token.len() >= 4 && looks_like_file_path(token))
    {
        let cleaned = token.trim_matches('\\').trim_matches('/').to_owned();
        if !paths.contains(&cleaned) {
            paths.push(cleaned);
        }
        if paths.len() >= 20 {
            break;
        }
    }
    paths
}

fn looks_like_file_path(token: &str) -> bool {
    if token.starts_with("http://") || token.starts_with("https://") {
        return false;
    }
    let lower = token.to_ascii_lowercase();
    (token.contains('/') || token.contains('\\') || lower.contains('.'))
        && (lower.ends_with(".rs")
            || lower.ends_with(".ts")
            || lower.ends_with(".js")
            || lower.ends_with(".json")
            || lower.ends_with(".jsonl")
            || lower.ends_with(".md")
            || lower.ends_with(".toml")
            || lower.ends_with(".yml")
            || lower.ends_with(".yaml")
            || lower.ends_with(".html")
            || lower.ends_with(".css")
            || lower.contains("src/")
            || lower.contains("src\\")
            || lower.contains("docs/")
            || lower.contains("fixtures/")
            || lower.contains("static/"))
}

fn file_impact_item(path: &str, group: &[&FileObservation]) -> FileImpactItem {
    let first_line = group
        .iter()
        .map(|file| file.line_number)
        .min()
        .unwrap_or_default();
    let last_line = group
        .iter()
        .map(|file| file.line_number)
        .max()
        .unwrap_or_default();
    let classification = if group.iter().any(|file| file.classification == "edited") {
        "edited"
    } else if group.iter().any(|file| file.classification == "read") {
        "read"
    } else {
        "referenced"
    };
    FileImpactItem {
        path: path.to_owned(),
        count: group.len(),
        first_line,
        last_line,
        classification: classification.to_owned(),
        evidence: group
            .first()
            .map(|file| file.evidence.clone())
            .unwrap_or_else(|| "inferred".to_owned()),
    }
}

fn unique_paths<'a>(observations: impl Iterator<Item = &'a FileObservation>) -> Vec<String> {
    let mut paths = Vec::new();
    for observation in observations {
        if !paths.contains(&observation.path) {
            paths.push(observation.path.clone());
        }
    }
    paths
}
