// SPDX-License-Identifier: MIT OR Apache-2.0

fn session_file_state(path: &Path) -> Result<(u64, SystemTime)> {
    let metadata = fs::metadata(path)
        .with_context(|| format!("failed to stat session jsonl {}", path.display()))?;
    let modified = metadata.modified().unwrap_or_else(|_| SystemTime::now());
    Ok((metadata.len(), modified))
}

fn session_jsonl_reader_at(
    path: &Path,
    start_byte: u64,
    discard_partial_line: bool,
) -> Result<BufReader<fs::File>> {
    let file = fs::File::open(path)
        .with_context(|| format!("failed to open session jsonl {}", path.display()))?;
    let mut reader = BufReader::new(file);
    reader
        .seek(SeekFrom::Start(start_byte))
        .with_context(|| format!("failed to seek session jsonl {}", path.display()))?;

    if discard_partial_line && start_byte > 0 {
        let mut partial = String::new();
        reader
            .read_line(&mut partial)
            .with_context(|| format!("failed to read session jsonl {}", path.display()))?;
    }

    Ok(reader)
}

fn cache_snapshot(
    cache: &Mutex<HashMap<String, CachedSession>>,
    key: &str,
) -> Result<Option<CachedSession>> {
    Ok(cache
        .lock()
        .map_err(|_| anyhow!("session cache lock poisoned"))?
        .get(key)
        .cloned())
}

fn store_cached_graph(
    cache: &Mutex<HashMap<String, CachedSession>>,
    key: String,
    path: &Path,
    len: u64,
    modified: SystemTime,
    graph: SessionGraph,
) -> Result<()> {
    let subagent_signature = graph_subagent_signature(&graph);
    {
        let cache = cache
            .lock()
            .map_err(|_| anyhow!("session cache lock poisoned"))?;
        if cache
            .get(&key)
            .is_some_and(|existing| cached_session_is_newer(existing, len, modified))
        {
            return Ok(());
        }
    }

    let line_offsets = if graph.parser_health.image_count > 0 {
        session_line_offsets(path, len).unwrap_or_default()
    } else {
        Vec::new()
    };
    let mut cache = cache
        .lock()
        .map_err(|_| anyhow!("session cache lock poisoned"))?;
    if cache
        .get(&key)
        .is_some_and(|existing| cached_session_is_newer(existing, len, modified))
    {
        return Ok(());
    }
    cache.insert(
        key,
        CachedSession {
            len,
            modified,
            line_offsets,
            subagent_signature,
            graph,
        },
    );
    Ok(())
}

fn cached_session_is_newer(existing: &CachedSession, len: u64, modified: SystemTime) -> bool {
    existing.modified > modified || (existing.modified == modified && existing.len > len)
}

fn load_session_graph(
    source: SessionSource,
    path: &Path,
    cache: &Mutex<HashMap<String, CachedSession>>,
) -> Result<SessionGraph> {
    let (len, modified) = session_file_state(path)?;
    let key = session_cache_key(source, path);

    if let Some(graph) = cached_graph(cache, &key, len, modified)? {
        return Ok(graph);
    }

    let graph = if let Some(cached) = cache_snapshot(cache, &key)?.filter(|cached| len > cached.len)
    {
        parse_session_jsonl_append(source, path, len, modified, &cached)
            .or_else(|_| parse_session_jsonl(source, path, len, modified))?
    } else {
        parse_session_jsonl(source, path, len, modified)?
    };
    store_cached_graph(
        cache,
        key,
        path,
        graph.processed_byte_length,
        modified,
        graph.clone(),
    )?;
    Ok(graph)
}

fn load_session_status(
    source: SessionSource,
    path: &Path,
    cache: &Mutex<HashMap<String, CachedSession>>,
) -> Result<SessionStatus> {
    let (len, modified) = session_file_state(path)?;
    let key = session_cache_key(source, path);

    if let Some(cached) = cache_snapshot(cache, &key)?
        && cached.len == len
        && cached.modified == modified
        && graph_subagent_signature(&cached.graph) != cached.subagent_signature
    {
        let mut status = status_from_graph(source, &cached.graph, path)?;
        status.graph_changed = true;
        return Ok(status);
    }

    if let Some(graph) = cached_graph(cache, &key, len, modified)? {
        return status_from_graph(source, &graph, path);
    }

    if let Some(cached) = cache_snapshot(cache, &key)?.filter(|cached| len > cached.len) {
        return status_from_cached_graph_metadata(source, path, &cached, len, modified);
    }

    let graph = parse_session_jsonl(source, path, len, modified)?;
    let status = status_from_graph(source, &graph, path)?;
    store_cached_graph(cache, key, path, graph.processed_byte_length, modified, graph)?;
    Ok(status)
}

fn session_line_offsets(path: &Path, byte_length: u64) -> Result<Vec<u64>> {
    let file = fs::File::open(path)
        .with_context(|| format!("failed to open session jsonl {}", path.display()))?;
    let mut reader = BufReader::new(file);
    let mut offsets = Vec::new();
    let mut position = 0_u64;
    let mut line = String::new();

    while position < byte_length {
        offsets.push(position);
        line.clear();
        let read = reader
            .read_line(&mut line)
            .with_context(|| format!("failed to index session jsonl {}", path.display()))?;
        if read == 0 {
            break;
        }
        position += read as u64;
    }

    Ok(offsets)
}

fn cached_session_line_offset(
    source: SessionSource,
    path: &Path,
    cache: &Mutex<HashMap<String, CachedSession>>,
    event_index: usize,
) -> Option<u64> {
    let (len, modified) = session_file_state(path).ok()?;
    let key = session_cache_key(source, path);
    let cached = cache_snapshot(cache, &key).ok()??;

    if cached.len != len
        || cached.modified != modified
        || graph_subagent_signature(&cached.graph) != cached.subagent_signature
    {
        return None;
    }

    cached.line_offsets.get(event_index).copied()
}

fn cached_graph(
    cache: &Mutex<HashMap<String, CachedSession>>,
    key: &str,
    len: u64,
    modified: SystemTime,
) -> Result<Option<SessionGraph>> {
    let Some(cached) = cache
        .lock()
        .map_err(|_| anyhow!("session cache lock poisoned"))?
        .get(key)
        .filter(|cached| cached.len == len && cached.modified == modified)
        .cloned()
    else {
        return Ok(None);
    };
    if graph_subagent_signature(&cached.graph) != cached.subagent_signature {
        return Ok(None);
    }

    let mut graph = cached.graph;
    graph.generated_at = isoish_now();
    graph.last_modified_at = system_time_to_rfc3339(modified);
    graph.is_live = is_recent(modified);
    graph.byte_length = len;
    graph.processed_byte_length = cached.len;
    graph.pending_bytes = 0;
    graph.ui.live_count = if graph.is_live {
        graph.ui.all_count.max(1)
    } else {
        0
    };
    Ok(Some(graph))
}

fn status_from_graph(
    source: SessionSource,
    graph: &SessionGraph,
    path: &Path,
) -> Result<SessionStatus> {
    let live_cues = LiveTailCues {
        compaction_in_progress: session_tail_compaction_in_progress(
            source,
            path,
            graph.byte_length,
        )?,
        ..Default::default()
    };
    Ok(SessionStatus {
        source: graph.source.clone(),
        session_path: graph.session_path.clone(),
        session_id: graph.session_id.clone(),
        generated_at: graph.generated_at.clone(),
        last_modified_at: graph.last_modified_at.clone(),
        line_count: graph.line_count,
        latest_event_index: graph.latest_event_index,
        is_live: graph.is_live,
        byte_length: graph.byte_length,
        processed_byte_length: graph.processed_byte_length,
        pending_bytes: graph.pending_bytes,
        graph_changed: false,
        renderable_event_count: renderable_event_count(&graph.totals),
        compaction_in_progress: live_cues.compaction_in_progress,
        parser_health: graph.parser_health.clone(),
        live_cues,
    })
}

fn status_from_cached_graph_metadata(
    source: SessionSource,
    path: &Path,
    cached: &CachedSession,
    len: u64,
    modified: SystemTime,
) -> Result<SessionStatus> {
    let pending_bytes = len.saturating_sub(cached.len);
    let append_signals = if pending_bytes > 0 {
        appended_session_signals(source, path, cached.len, len, cached.graph.line_count)?
    } else {
        AppendSignals::default()
    };
    let mut live_cues = append_signals.live_cues;
    if !live_cues.compaction_in_progress && !append_signals.scanned_to_end {
        live_cues.compaction_in_progress = session_tail_compaction_in_progress(source, path, len)?;
    }
    Ok(SessionStatus {
        source: cached.graph.source.clone(),
        session_path: cached.graph.session_path.clone(),
        session_id: cached.graph.session_id.clone(),
        generated_at: isoish_now(),
        last_modified_at: system_time_to_rfc3339(modified),
        line_count: cached.graph.line_count,
        latest_event_index: cached.graph.latest_event_index,
        is_live: is_recent(modified),
        byte_length: len,
        processed_byte_length: cached.len,
        pending_bytes,
        graph_changed: append_signals.graph_changed,
        renderable_event_count: renderable_event_count(&cached.graph.totals),
        compaction_in_progress: live_cues.compaction_in_progress,
        parser_health: cached.graph.parser_health.clone(),
        live_cues,
    })
}
