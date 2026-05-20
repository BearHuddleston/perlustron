// SPDX-License-Identifier: MIT OR Apache-2.0

fn session_config_from_env() -> Result<SessionConfig> {
    let mut explicit_paths = HashMap::new();

    if let Ok(path) = env::var("CODEX_SESSION_JSONL") {
        explicit_paths.insert(
            SessionSource::Codex,
            validate_session_path("CODEX_SESSION_JSONL", path)?,
        );
    }
    if let Ok(path) = env::var("CLAUDE_SESSION_JSONL") {
        explicit_paths.insert(
            SessionSource::Claude,
            validate_session_path("CLAUDE_SESSION_JSONL", path)?,
        );
    }
    if let Ok(path) = env::var("SESSION_JSONL") {
        let path = validate_session_path("SESSION_JSONL", path)?;
        let source = env::var("SESSION_SOURCE")
            .ok()
            .and_then(|value| SessionSource::parse(&value))
            .or_else(|| infer_source_from_path(&path))
            .unwrap_or(SessionSource::Codex);
        explicit_paths.entry(source).or_insert(path);
    }

    let default_source = env::var("SESSION_SOURCE")
        .ok()
        .and_then(|value| SessionSource::parse(&value))
        .or_else(|| {
            if explicit_paths.contains_key(&SessionSource::Claude)
                && !explicit_paths.contains_key(&SessionSource::Codex)
            {
                Some(SessionSource::Claude)
            } else {
                None
            }
        })
        .unwrap_or(SessionSource::Codex);

    Ok(SessionConfig {
        default_source,
        explicit_paths,
    })
}

fn validate_session_path(var_name: &str, path: String) -> Result<PathBuf> {
    let path = PathBuf::from(path);
    if path.is_file() {
        Ok(path)
    } else {
        Err(anyhow!(
            "{var_name} does not point to a file: {}",
            path.display()
        ))
    }
}

fn infer_source_from_path(path: &Path) -> Option<SessionSource> {
    let path_text = path.display().to_string().to_ascii_lowercase();
    if path_text.contains("\\.claude\\") || path_text.contains("/.claude/") {
        Some(SessionSource::Claude)
    } else if path_text.contains("\\.codex\\") || path_text.contains("/.codex/") {
        Some(SessionSource::Codex)
    } else if path_text.contains("claude") {
        Some(SessionSource::Claude)
    } else if path_text.contains("codex") {
        Some(SessionSource::Codex)
    } else {
        None
    }
}

fn resolve_session_request(state: &AppState, query: &SessionQuery) -> Result<ResolvedSession> {
    let source = session_source_from_query(state, query)?;
    if let Some(session) = query.session.as_deref().filter(|session| !session.is_empty()) {
        let path = resolve_requested_session_path(source, state.explicit_paths.as_ref(), session)?;
        return Ok(ResolvedSession { source, path });
    }
    resolve_session_path(source, state.explicit_paths.as_ref())
}

fn session_source_from_query(state: &AppState, query: &SessionQuery) -> Result<SessionSource> {
    let source = match query.source.as_deref() {
        Some(value) => SessionSource::parse(value)
            .ok_or_else(|| anyhow!("unknown session source: {value}; expected codex or claude"))?,
        None => state.default_source,
    };
    Ok(source)
}

fn resolve_session_path(
    source: SessionSource,
    explicit_paths: &HashMap<SessionSource, PathBuf>,
) -> Result<ResolvedSession> {
    let path = explicit_paths
        .get(&source)
        .cloned()
        .map(Ok)
        .unwrap_or_else(|| find_latest_jsonl(&sessions_root(source)?, source))?;
    Ok(ResolvedSession { source, path })
}

fn resolve_requested_session_path(
    source: SessionSource,
    explicit_paths: &HashMap<SessionSource, PathBuf>,
    session: &str,
) -> Result<PathBuf> {
    let path = PathBuf::from(session);
    if path.extension().and_then(|ext| ext.to_str()) != Some("jsonl") {
        return Err(anyhow!("selected session is not a JSONL file: {}", path.display()));
    }
    if !path.is_file() {
        return Err(anyhow!("selected session does not exist: {}", path.display()));
    }
    if explicit_paths
        .get(&source)
        .is_some_and(|explicit| same_file_path(explicit, &path))
    {
        return Ok(path);
    }
    if sessions_root(source)
        .ok()
        .is_some_and(|root| path_is_within(&path, &root))
    {
        return Ok(path);
    }
    Err(anyhow!(
        "selected session must be under the {} sessions root",
        source.display_name()
    ))
}

fn list_session_options(
    source: SessionSource,
    explicit_paths: &HashMap<SessionSource, PathBuf>,
    selected_session: Option<&str>,
) -> Result<SessionListResponse> {
    let root_result = sessions_root(source);
    let mut candidates = Vec::new();
    if let Ok(root) = &root_result {
        collect_session_jsonl_candidates(root, &mut candidates);
    }

    let selected_path = if let Some(session) = selected_session.filter(|session| !session.is_empty())
    {
        resolve_requested_session_path(source, explicit_paths, session)?
    } else if let Some(path) = explicit_paths.get(&source) {
        path.clone()
    } else {
        let root = root_result?;
        latest_session_candidate(&candidates)
            .map(|candidate| candidate.path.clone())
            .ok_or_else(|| {
                anyhow!(
                    "no {} session jsonl files found under {}",
                    source.display_name(),
                    root.display()
                )
            })?
    };

    if let Some(path) = explicit_paths.get(&source) {
        push_unique_session_candidate(&mut candidates, path.clone(), false);
    }
    push_unique_session_candidate(&mut candidates, selected_path.clone(), false);

    let mut sessions = candidates
        .iter()
        .map(|candidate| session_list_item(source, candidate, explicit_paths))
        .collect::<Vec<_>>();
    sessions.sort_by(|left, right| {
        right
            .last_modified_at
            .cmp(&left.last_modified_at)
            .then_with(|| left.label.cmp(&right.label))
    });
    Ok(SessionListResponse {
        source: source.as_str().to_owned(),
        selected_path: selected_path.display().to_string(),
        sessions,
    })
}

#[derive(Debug, Clone)]
struct SessionListCandidate {
    path: PathBuf,
    modified: SystemTime,
    byte_length: u64,
}

fn collect_session_jsonl_candidates(root: &Path, candidates: &mut Vec<SessionListCandidate>) {
    let mut stack = vec![root.to_path_buf()];

    while let Some(dir) = stack.pop() {
        let Ok(entries) = fs::read_dir(&dir) else {
            continue;
        };

        for entry in entries.flatten() {
            let path = entry.path();
            let Ok(metadata) = entry.metadata() else {
                continue;
            };

            if metadata.is_dir() {
                stack.push(path);
            } else if let Some(candidate) = session_list_candidate(path, metadata, true) {
                candidates.push(candidate);
            }
        }
    }
}

fn push_unique_session_candidate(
    candidates: &mut Vec<SessionListCandidate>,
    path: PathBuf,
    require_non_empty: bool,
) {
    if candidates
        .iter()
        .any(|existing| same_file_path(&existing.path, &path))
    {
        return;
    }

    if let Ok(metadata) = fs::metadata(&path)
        && let Some(candidate) = session_list_candidate(path, metadata, require_non_empty)
    {
        candidates.push(candidate);
    }
}

fn session_list_candidate(
    path: PathBuf,
    metadata: fs::Metadata,
    require_non_empty: bool,
) -> Option<SessionListCandidate> {
    if !metadata.is_file()
        || (require_non_empty && metadata.len() == 0)
        || path.extension().and_then(|ext| ext.to_str()) != Some("jsonl")
    {
        return None;
    }

    Some(SessionListCandidate {
        path,
        modified: metadata.modified().unwrap_or(SystemTime::UNIX_EPOCH),
        byte_length: metadata.len(),
    })
}

fn latest_session_candidate(
    candidates: &[SessionListCandidate],
) -> Option<&SessionListCandidate> {
    candidates.iter().max_by_key(|candidate| candidate.modified)
}

fn session_list_item(
    source: SessionSource,
    candidate: &SessionListCandidate,
    explicit_paths: &HashMap<SessionSource, PathBuf>,
) -> SessionListItem {
    let path = &candidate.path;
    let label = session_option_label(path);
    let detail = session_option_detail(path);
    SessionListItem {
        source: source.as_str().to_owned(),
        path: path.display().to_string(),
        label,
        detail,
        last_modified_at: system_time_to_rfc3339(candidate.modified),
        byte_length: candidate.byte_length,
        is_live: is_recent(candidate.modified),
        explicit: explicit_paths
            .get(&source)
            .is_some_and(|explicit| same_file_path(explicit, path)),
    }
}

fn session_option_label(path: &Path) -> String {
    path.file_stem()
        .and_then(|stem| stem.to_str())
        .map(|stem| stem.replace('_', " "))
        .filter(|label| !label.is_empty())
        .unwrap_or_else(|| "Session JSONL".to_owned())
}

fn session_option_detail(path: &Path) -> String {
    path.parent()
        .and_then(|parent| parent.file_name())
        .and_then(|name| name.to_str())
        .map(|name| name.to_owned())
        .unwrap_or_else(|| path.display().to_string())
}

fn same_file_path(left: &Path, right: &Path) -> bool {
    if left == right {
        return true;
    }
    match (fs::canonicalize(left), fs::canonicalize(right)) {
        (Ok(left), Ok(right)) => left == right,
        _ => false,
    }
}

fn path_is_within(path: &Path, root: &Path) -> bool {
    match (fs::canonicalize(path), fs::canonicalize(root)) {
        (Ok(path), Ok(root)) => path.starts_with(root),
        _ => false,
    }
}

fn session_cache_key(source: SessionSource, path: &Path) -> String {
    format!("{}:{}", source.as_str(), path.display())
}

fn sessions_root(source: SessionSource) -> Result<PathBuf> {
    match source {
        SessionSource::Codex => codex_sessions_root(),
        SessionSource::Claude => claude_projects_root(),
    }
}

fn codex_sessions_root() -> Result<PathBuf> {
    user_home_dir()
        .map(|home| home.join(".codex").join("sessions"))
        .ok_or_else(|| {
            anyhow!(
                "could not locate Codex sessions; set CODEX_SESSION_JSONL to a session jsonl file"
            )
        })
}

fn claude_projects_root() -> Result<PathBuf> {
    user_home_dir()
        .map(|home| home.join(".claude").join("projects"))
        .ok_or_else(|| {
            anyhow!(
                "could not locate Claude projects; set CLAUDE_SESSION_JSONL to a session jsonl file"
            )
        })
}

fn user_home_dir() -> Option<PathBuf> {
    env::var("USERPROFILE")
        .or_else(|_| env::var("HOME"))
        .ok()
        .map(PathBuf::from)
}

fn find_latest_jsonl(root: &Path, source: SessionSource) -> Result<PathBuf> {
    let mut latest: Option<(SystemTime, PathBuf)> = None;
    let mut stack = vec![root.to_path_buf()];

    while let Some(dir) = stack.pop() {
        let Ok(entries) = fs::read_dir(&dir) else {
            continue;
        };

        for entry in entries.flatten() {
            let path = entry.path();
            let Ok(metadata) = entry.metadata() else {
                continue;
            };

            if metadata.is_dir() {
                stack.push(path);
            } else if metadata.is_file()
                && metadata.len() > 0
                && path.extension().and_then(|ext| ext.to_str()) == Some("jsonl")
            {
                let modified = metadata.modified().unwrap_or(SystemTime::UNIX_EPOCH);
                if latest
                    .as_ref()
                    .map(|(latest_time, _)| modified > *latest_time)
                    .unwrap_or(true)
                {
                    latest = Some((modified, path));
                }
            }
        }
    }

    latest.map(|(_, path)| path).ok_or_else(|| {
        anyhow!(
            "no {} session jsonl files found under {}",
            source.display_name(),
            root.display()
        )
    })
}

fn isoish_now() -> String {
    OffsetDateTime::now_utc()
        .format(&Rfc3339)
        .unwrap_or_else(|_| format!("{:?}", SystemTime::now()))
}

fn system_time_to_rfc3339(time: SystemTime) -> String {
    OffsetDateTime::from(time)
        .format(&Rfc3339)
        .unwrap_or_else(|_| format!("{time:?}"))
}

fn is_recent(time: SystemTime) -> bool {
    SystemTime::now()
        .duration_since(time)
        .map(|age| age.as_secs() <= 300)
        .unwrap_or(true)
}
