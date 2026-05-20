// SPDX-License-Identifier: MIT OR Apache-2.0

fn line_may_affect_graph(source: SessionSource, line: &str) -> bool {
    if source == SessionSource::Claude {
        return claude_line_may_affect_graph(line);
    }

    let head = line_head(line);
    if contains_json_field(head, "\"type\":\"event_msg\"", "\"type\": \"event_msg\"") {
        return contains_json_field(
            head,
            "\"type\":\"patch_apply_end\"",
            "\"type\": \"patch_apply_end\"",
        ) || contains_json_field(
            head,
            "\"type\":\"mcp_tool_call_end\"",
            "\"type\": \"mcp_tool_call_end\"",
        ) || contains_json_field(
            head,
            "\"type\":\"token_count\"",
            "\"type\": \"token_count\"",
        );
    }

    if contains_json_field(
        head,
        "\"type\":\"session_meta\"",
        "\"type\": \"session_meta\"",
    ) || contains_json_field(
        head,
        "\"type\":\"turn_context\"",
        "\"type\": \"turn_context\"",
    ) {
        return true;
    }

    if line_has_compaction_event(head) {
        return true;
    }

    if !contains_json_field(
        head,
        "\"type\":\"response_item\"",
        "\"type\": \"response_item\"",
    ) {
        return false;
    }

    contains_json_field(
        head,
        "\"type\":\"function_call\"",
        "\"type\": \"function_call\"",
    ) || contains_json_field(
        head,
        "\"type\":\"function_call_output\"",
        "\"type\": \"function_call_output\"",
    ) || contains_json_field(
        head,
        "\"type\":\"custom_tool_call\"",
        "\"type\": \"custom_tool_call\"",
    ) || contains_json_field(
        head,
        "\"type\":\"custom_tool_call_output\"",
        "\"type\": \"custom_tool_call_output\"",
    ) || contains_json_field(
        head,
        "\"type\":\"tool_search_call\"",
        "\"type\": \"tool_search_call\"",
    ) || contains_json_field(
        head,
        "\"type\":\"tool_search_output\"",
        "\"type\": \"tool_search_output\"",
    ) || contains_json_field(
        head,
        "\"type\":\"web_search_call\"",
        "\"type\": \"web_search_call\"",
    ) || (contains_json_field(head, "\"type\":\"message\"", "\"type\": \"message\"")
        && (contains_json_field(head, "\"role\":\"user\"", "\"role\": \"user\"")
            || contains_json_field(head, "\"role\":\"assistant\"", "\"role\": \"assistant\"")))
}

fn parsed_line_may_affect_graph(source: SessionSource, parsed: Option<&Value>, line: &str) -> bool {
    if let Some(value) = parsed {
        return unknown_event_type(source, value).is_none();
    }

    line_may_affect_graph(source, line)
}

fn push_limited<T>(target: &mut Vec<T>, value: T) {
    if target.len() < PARSER_HEALTH_REF_LIMIT {
        target.push(value);
    }
}

fn unknown_event_type(source: SessionSource, value: &Value) -> Option<String> {
    match source {
        SessionSource::Codex => unknown_codex_event_type(value),
        SessionSource::Claude => unknown_claude_event_type(value),
    }
}

fn unknown_codex_event_type(value: &Value) -> Option<String> {
    let entry_type = value
        .get("type")
        .and_then(Value::as_str)
        .unwrap_or("<missing-type>");
    match entry_type {
        "session_meta" | "turn_context" | "compacted" | "compaction" | "summary" => None,
        "response_item" => {
            let item_type = value
                .get("payload")
                .and_then(|payload| payload.get("type"))
                .and_then(Value::as_str)
                .unwrap_or("<missing-payload-type>");
            match item_type {
                "message"
                | "function_call"
                | "function_call_output"
                | "custom_tool_call"
                | "custom_tool_call_output"
                | "tool_search_call"
                | "tool_search_output"
                | "web_search_call" => None,
                _ => Some(format!("codex.response_item:{item_type}")),
            }
        }
        "event_msg" => {
            let payload_type = value
                .get("payload")
                .and_then(|payload| payload.get("type"))
                .and_then(Value::as_str)
                .unwrap_or("<missing-payload-type>");
            match payload_type {
                "patch_apply_end" | "mcp_tool_call_end" | "token_count" => None,
                _ => Some(format!("codex.event_msg:{payload_type}")),
            }
        }
        _ => Some(format!("codex:{entry_type}")),
    }
}

fn unknown_claude_event_type(value: &Value) -> Option<String> {
    let entry_type = value
        .get("type")
        .and_then(Value::as_str)
        .unwrap_or("<missing-type>");
    match entry_type {
        "user" | "assistant" | "summary" | "compacted" | "compaction" | "last-prompt"
        | "ai-title" => None,
        _ => Some(format!("claude:{entry_type}")),
    }
}

fn claude_line_may_affect_graph(line: &str) -> bool {
    contains_json_field(line, "\"type\":\"user\"", "\"type\": \"user\"")
        || contains_json_field(line, "\"type\":\"assistant\"", "\"type\": \"assistant\"")
        || line_has_compaction_event(line)
        || contains_json_field(
            line,
            "\"type\":\"last-prompt\"",
            "\"type\": \"last-prompt\"",
        )
        || contains_json_field(line, "\"type\":\"ai-title\"", "\"type\": \"ai-title\"")
}

fn line_has_compaction_event(head: &str) -> bool {
    contains_json_field(head, "\"type\":\"compacted\"", "\"type\": \"compacted\"")
        || contains_json_field(head, "\"type\":\"compaction\"", "\"type\": \"compaction\"")
        || contains_json_field(head, "\"type\":\"summary\"", "\"type\": \"summary\"")
}

fn contains_json_field(line: &str, compact: &str, spaced: &str) -> bool {
    line.contains(compact) || line.contains(spaced)
}

fn line_head(line: &str) -> &str {
    const MAX_HEADER_BYTES: usize = 768;
    if line.len() <= MAX_HEADER_BYTES {
        return line;
    }

    let mut end = 0;
    for (index, _) in line.char_indices() {
        if index > MAX_HEADER_BYTES {
            break;
        }
        end = index;
    }
    &line[..end]
}

fn parse_session_jsonl_append(
    source: SessionSource,
    path: &Path,
    byte_length: u64,
    modified: SystemTime,
    cached: &CachedSession,
) -> Result<SessionGraph> {
    let mut reader = session_jsonl_reader_at(path, cached.len, false)?;

    let mut state = SessionParseState::from_graph(&cached.graph, source);
    let mut line_count = cached.graph.line_count;
    let mut event_index =
        session_line_count_before(path, cached.len).unwrap_or(cached.graph.line_count);
    let mut processed_byte_length = cached.len;
    let mut parsed_bytes = 0_u64;
    let mut line = String::new();

    loop {
        line.clear();
        let read = reader
            .read_line(&mut line)
            .with_context(|| format!("failed to read appended jsonl line {event_index}"))?;
        if read == 0 {
            break;
        }

        parsed_bytes += read as u64;
        processed_byte_length = reader
            .stream_position()
            .with_context(|| format!("failed to track jsonl position {}", path.display()))?;
        if line.trim().is_empty() {
            continue;
        }

        let parsed = state.health.observe_line(source, &line, event_index);
        if !parsed_line_may_affect_graph(source, parsed.as_ref(), &line) {
            line_count += 1;
            event_index += 1;
            if parsed_bytes >= GRAPH_APPEND_PARSE_BYTE_BUDGET {
                break;
            }
            continue;
        }

        if let Some(value) = parsed
            && let Err(error) = state.apply_value(source, value, event_index)
        {
            state.health.record_malformed(event_index, error, &line);
        }

        line_count += 1;
        event_index += 1;

        if parsed_bytes >= GRAPH_APPEND_PARSE_BYTE_BUDGET {
            break;
        }
    }

    attach_subagent_nodes(source, path, &mut state.prompts);

    Ok(build_session_graph(SessionGraphInput {
        source,
        path,
        byte_length,
        processed_byte_length,
        modified,
        session_id: state.session_id,
        cwd: state.cwd,
        metadata: state.metadata,
        prompts: state.prompts,
        compactions: state.compactions,
        token_samples: state.token_samples,
        health: state.health,
        line_count,
    }))
}

fn rebuild_calls_by_id(prompts: &[PromptNode]) -> HashMap<String, (usize, usize)> {
    let mut calls_by_id = HashMap::new();
    for (prompt_index, prompt) in prompts.iter().enumerate() {
        for (call_index, call) in prompt.calls.iter().enumerate() {
            calls_by_id.insert(call.id.clone(), (prompt_index, call_index));
        }
    }
    calls_by_id
}

fn rebuild_assistant_message_by_prompt(prompts: &[PromptNode]) -> HashMap<usize, String> {
    let mut assistant_message_by_prompt = HashMap::new();
    for (prompt_index, prompt) in prompts.iter().enumerate() {
        if let Some(message) = prompt
            .assistant_messages
            .iter()
            .max_by_key(|message| message.event_index)
        {
            assistant_message_by_prompt.insert(prompt_index, message.id.clone());
        }
    }
    assistant_message_by_prompt
}

fn link_pending_calls_to_assistant_message(
    prompts: &mut [PromptNode],
    prompt_index: usize,
    assistant_message_id: &str,
) {
    let Some(prompt) = prompts.get_mut(prompt_index) else {
        return;
    };
    for call in &mut prompt.calls {
        if call.assistant_message_id.is_none() {
            call.assistant_message_id = Some(assistant_message_id.to_owned());
        }
    }
}

fn session_totals(prompts: &[PromptNode], compaction_count: usize) -> SessionTotals {
    let call_count = prompts.iter().map(|prompt| prompt.calls.len()).sum();
    let completed_call_count = prompts
        .iter()
        .flat_map(|prompt| &prompt.calls)
        .filter(|call| call.status == "completed")
        .count();
    let assistant_message_count = prompts
        .iter()
        .map(|prompt| prompt.assistant_messages.len())
        .sum();
    let file_change_count = prompts.iter().map(|prompt| prompt.file_changes.len()).sum();
    SessionTotals {
        prompt_count: prompts.len(),
        call_count,
        completed_call_count,
        assistant_message_count,
        file_change_count,
        compaction_count,
    }
}

fn finalize_parser_health(
    mut health: ParserHealth,
    prompts: &[PromptNode],
    compactions: &[CompactionNode],
    token_telemetry: &TokenTelemetry,
) -> ParserHealth {
    health.renderable_event_count = renderable_event_count_from_parts(prompts, compactions);
    health.image_count = prompts.iter().map(|prompt| prompt.images.len()).sum();
    health.tool_call_count = prompts.iter().map(|prompt| prompt.calls.len()).sum();
    health.tool_result_count = prompts
        .iter()
        .flat_map(|prompt| &prompt.calls)
        .filter(|call| call.status == "completed" || call.output_preview.is_some())
        .count();
    health.file_activity_count = prompts
        .iter()
        .map(|prompt| prompt.file_changes.len())
        .sum();
    health.compaction_count = compactions.len();
    health.token_telemetry_available = token_telemetry.latest_total_tokens.is_some();
    if health.malformed_line_count > 0 {
        health
            .warnings
            .push("Malformed JSONL lines were skipped but preserved in parser health references.".to_owned());
    }
    if health.unknown_event_count > 0 {
        health
            .warnings
            .push("Unknown or unsupported event types were preserved as parser health references.".to_owned());
    }
    health
}

fn renderable_event_count_from_parts(
    prompts: &[PromptNode],
    compactions: &[CompactionNode],
) -> usize {
    prompts
        .iter()
        .map(|prompt| {
            1 + prompt.calls.len() + prompt.assistant_messages.len() + prompt.file_changes.len()
        })
        .sum::<usize>()
        + compactions.len()
}

fn build_session_graph(input: SessionGraphInput<'_>) -> SessionGraph {
    let SessionGraphInput {
        source,
        path,
        byte_length,
        processed_byte_length,
        modified,
        session_id,
        cwd,
        metadata,
        prompts,
        compactions,
        token_samples,
        health,
        line_count,
    } = input;
    let latest_event_index = line_count.saturating_sub(1);
    let is_live = is_recent(modified);
    let pending_bytes = byte_length.saturating_sub(processed_byte_length);
    let totals = session_totals(&prompts, compactions.len());
    let token_telemetry = build_token_telemetry(token_samples);
    let parser_health = finalize_parser_health(health, &prompts, &compactions, &token_telemetry);
    let ui = build_ui_summary(
        source,
        path,
        cwd.as_deref(),
        &prompts,
        &compactions,
        is_live,
    );

    let mut graph = SessionGraph {
        schema_version: NORMALIZED_TRACE_SCHEMA_VERSION.to_owned(),
        parser_version: env!("CARGO_PKG_VERSION").to_owned(),
        source: source.as_str().to_owned(),
        session_id,
        session_path: path.display().to_string(),
        cwd,
        metadata,
        generated_at: isoish_now(),
        last_modified_at: system_time_to_rfc3339(modified),
        latest_event_index,
        is_live,
        line_count,
        byte_length,
        processed_byte_length,
        pending_bytes,
        privacy_summary: PrivacySummary::for_server_profile(None, false),
        shareability_summary: ShareabilitySummary::for_server_profile(None),
        totals,
        parser_health,
        insights: TraceInsights::default(),
        ui,
        prompts,
        compactions,
        token_telemetry,
    };
    graph.insights = trace_insights_from_graph(&graph);
    graph
}

fn parse_session_jsonl(
    source: SessionSource,
    path: &Path,
    byte_length: u64,
    modified: SystemTime,
) -> Result<SessionGraph> {
    parse_session_jsonl_inner(source, path, byte_length, modified, true)
}

fn parse_session_jsonl_inner(
    source: SessionSource,
    path: &Path,
    byte_length: u64,
    modified: SystemTime,
    include_subagent_nodes: bool,
) -> Result<SessionGraph> {
    let file = fs::File::open(path)
        .with_context(|| format!("failed to open session jsonl {}", path.display()))?;
    let reader = BufReader::new(file);

    let mut state = SessionParseState::new_for_source(source);
    let mut line_count = 0;

    for (event_index, line) in reader.lines().enumerate() {
        let line = line.with_context(|| format!("failed to read jsonl line {event_index}"))?;
        if line.trim().is_empty() {
            continue;
        }

        line_count += 1;
        let parsed = state.health.observe_line(source, &line, event_index);
        if !parsed_line_may_affect_graph(source, parsed.as_ref(), &line) {
            continue;
        }

        if let Some(value) = parsed
            && let Err(error) = state.apply_value(source, value, event_index)
        {
            state.health.record_malformed(event_index, error, &line);
        }
    }

    if include_subagent_nodes {
        attach_subagent_nodes(source, path, &mut state.prompts);
    }

    Ok(build_session_graph(SessionGraphInput {
        source,
        path,
        byte_length,
        processed_byte_length: byte_length,
        modified,
        session_id: state.session_id,
        cwd: state.cwd,
        metadata: state.metadata,
        prompts: state.prompts,
        compactions: state.compactions,
        token_samples: state.token_samples,
        health: state.health,
        line_count,
    }))
}

fn session_line_count_before(path: &Path, byte_length: u64) -> Result<usize> {
    let file = fs::File::open(path)
        .with_context(|| format!("failed to open session jsonl {}", path.display()))?;
    let mut reader = BufReader::new(file);
    let mut position = 0_u64;
    let mut count = 0_usize;
    let mut line = String::new();

    while position < byte_length {
        line.clear();
        let read = reader
            .read_line(&mut line)
            .with_context(|| format!("failed to count session jsonl lines {}", path.display()))?;
        if read == 0 {
            break;
        }
        position += read as u64;
        count += 1;
    }

    Ok(count)
}

fn attach_subagent_nodes(source: SessionSource, parent_path: &Path, prompts: &mut [PromptNode]) {
    if source != SessionSource::Codex {
        return;
    }

    let mut resolved_paths: HashMap<String, Option<PathBuf>> = HashMap::new();
    let mut parsed_graphs: HashMap<PathBuf, Vec<CallNode>> = HashMap::new();

    for prompt in prompts {
        for call in &mut prompt.calls {
            if !is_subagent_call(call) {
                continue;
            }
            call.subagent_session_path = None;
            call.subagent_nodes.clear();
            let Some(agent_id) = subagent_id_from_call(call) else {
                continue;
            };
            let path = resolved_paths
                .entry(agent_id.clone())
                .or_insert_with(|| find_subagent_session_path(parent_path, &agent_id))
                .clone();
            let Some(path) = path else {
                continue;
            };

            call.subagent_session_path = Some(path.display().to_string());
            let nodes = parsed_graphs
                .entry(path.clone())
                .or_insert_with(|| subagent_inspection_nodes_for_path(&path, &call.id));
            call.subagent_nodes = nodes.clone();
        }
    }
}

fn is_subagent_call(call: &CallNode) -> bool {
    call.name == "spawn_agent" || call.name == "subagent"
}

fn subagent_inspection_nodes_for_path(path: &Path, parent_call_id: &str) -> Vec<CallNode> {
    let Ok((byte_length, modified)) = session_file_state(path) else {
        return Vec::new();
    };
    let Ok(graph) =
        parse_session_jsonl_inner(SessionSource::Codex, path, byte_length, modified, false)
    else {
        return Vec::new();
    };
    subagent_inspection_nodes(parent_call_id, &graph)
}

fn subagent_inspection_nodes(parent_call_id: &str, graph: &SessionGraph) -> Vec<CallNode> {
    let mut nodes = Vec::new();

    for prompt in &graph.prompts {
        nodes.push(subagent_pseudo_call(
            parent_call_id,
            &format!("prompt-{}", prompt.event_index),
            prompt.event_index,
            prompt.timestamp.clone(),
            ("subagent.prompt", "subagent"),
            prompt.title.clone(),
            Some(prompt.text.clone()),
        ));

        for call in &prompt.calls {
            let mut child = call.clone();
            child.id = format!("{parent_call_id}:child:{}", call.id);
            child.assistant_message_id = None;
            child.subagent_session_path = None;
            child.subagent_nodes = Vec::new();
            nodes.push(child);
        }

        for (message_index, message) in prompt.assistant_messages.iter().enumerate() {
            nodes.push(subagent_pseudo_call(
                parent_call_id,
                &format!("message-{}-{message_index}", message.event_index),
                message.event_index,
                message.timestamp.clone(),
                ("subagent.message", "message"),
                "assistant output".to_owned(),
                Some(message.text.clone()),
            ));
        }

        for (file_index, change) in prompt.file_changes.iter().enumerate() {
            nodes.push(subagent_pseudo_call(
                parent_call_id,
                &format!("file-{}-{file_index}", change.event_index),
                change.event_index,
                change.timestamp.clone(),
                ("subagent.file", &format!("file-{}", change.change_type)),
                change.short_path.clone(),
                Some(format!("{}\n{}", change.path, change.preview)),
            ));
        }
    }

    for compaction in &graph.compactions {
        nodes.push(subagent_pseudo_call(
            parent_call_id,
            &format!("compaction-{}", compaction.event_index),
            compaction.event_index,
            compaction.timestamp.clone(),
            ("subagent.compaction", "compaction"),
            compaction.title.clone(),
            Some(compaction.detail.clone()),
        ));
    }

    nodes.sort_by_key(|node| node.event_index);
    nodes
}

fn subagent_pseudo_call(
    parent_call_id: &str,
    local_id: &str,
    event_index: usize,
    timestamp: Option<String>,
    labels: (&str, &str),
    argument_preview: String,
    output_preview: Option<String>,
) -> CallNode {
    let (name, kind) = labels;
    CallNode {
        id: format!("{parent_call_id}:subagent:{local_id}"),
        event_index,
        started_at: timestamp.clone(),
        completed_at: timestamp,
        name: name.to_owned(),
        kind: kind.to_owned(),
        status: "completed".to_owned(),
        duration_ms: None,
        argument_preview,
        output_preview,
        subagent_session_path: None,
        subagent_nodes: Vec::new(),
        assistant_message_id: None,
    }
}

fn subagent_id_from_call(call: &CallNode) -> Option<String> {
    let text = format!(
        "{}\n{}",
        call.argument_preview,
        call.output_preview.as_deref().unwrap_or_default()
    );
    json_field_string_from_preview(&text, "agent_id")
        .or_else(|| json_field_string_from_preview(&text, "agent_path"))
        .or_else(|| agent_label_from_preview(&text))
}

fn json_field_string_from_preview(text: &str, field: &str) -> Option<String> {
    if let Ok(value) = serde_json::from_str::<Value>(text) {
        if let Some(value) = value.get(field).and_then(Value::as_str) {
            return Some(value.to_owned());
        }
        if let Some(inner) = value.as_str()
            && let Some(value) = json_field_string_from_preview(inner, field)
        {
            return Some(value);
        }
    }

    let needle = format!("\"{field}\"");
    let start = text.find(&needle)?;
    let after_field = &text[start + needle.len()..];
    let colon = after_field.find(':')?;
    let value = after_field[colon + 1..].trim_start();
    let value = value.strip_prefix('"')?;
    let end = value.find('"')?;
    Some(value[..end].to_owned())
}

fn agent_label_from_preview(text: &str) -> Option<String> {
    let start = text.find("agent:")?;
    let value = text[start + "agent:".len()..].trim_start();
    let end = value
        .find(|ch: char| ch.is_whitespace() || ch == ',' || ch == '}')
        .unwrap_or(value.len());
    let value = value[..end].trim();
    (!value.is_empty()).then(|| value.to_owned())
}

fn find_subagent_session_path(parent_path: &Path, agent_id: &str) -> Option<PathBuf> {
    let mut scanned = 0;
    for root in subagent_search_roots(parent_path) {
        if let Some(path) =
            find_session_jsonl_by_id_in_root(&root, parent_path, agent_id, &mut scanned)
        {
            return Some(path);
        }
        if scanned >= MAX_SUBAGENT_SESSION_SCAN_ENTRIES {
            break;
        }
    }
    None
}

fn subagent_search_roots(parent_path: &Path) -> Vec<PathBuf> {
    let mut roots = Vec::new();
    if let Some(root) = parent_path
        .ancestors()
        .find(|ancestor| ancestor.file_name().and_then(|name| name.to_str()) == Some("sessions"))
    {
        push_unique_path(&mut roots, root.to_path_buf());
        if let Some(codex_home) = root.parent() {
            push_unique_path(&mut roots, codex_home.join("archived_sessions"));
        }
    }
    if roots.is_empty()
        && let Some(parent) = parent_path.parent()
    {
        push_unique_path(&mut roots, parent.to_path_buf());
    }
    roots
}

fn push_unique_path(paths: &mut Vec<PathBuf>, path: PathBuf) {
    if !paths.iter().any(|existing| existing == &path) {
        paths.push(path);
    }
}

fn find_session_jsonl_by_id_in_root(
    root: &Path,
    exclude: &Path,
    agent_id: &str,
    scanned: &mut usize,
) -> Option<PathBuf> {
    if *scanned >= MAX_SUBAGENT_SESSION_SCAN_ENTRIES || !root.is_dir() {
        return None;
    }

    let mut dirs = Vec::new();
    let mut files = Vec::new();
    let entries = fs::read_dir(root).ok()?;
    for entry in entries.flatten() {
        *scanned += 1;
        if *scanned >= MAX_SUBAGENT_SESSION_SCAN_ENTRIES {
            break;
        }
        let path = entry.path();
        if path.is_dir() {
            dirs.push(path);
        } else {
            files.push(path);
        }
    }

    files.sort_by(|a, b| b.file_name().cmp(&a.file_name()));
    for path in files {
        if path != exclude && path_is_jsonl_for_agent(&path, agent_id) {
            return Some(path);
        }
    }

    dirs.sort_by(|a, b| b.file_name().cmp(&a.file_name()));
    for dir in dirs {
        if let Some(path) = find_session_jsonl_by_id_in_root(&dir, exclude, agent_id, scanned) {
            return Some(path);
        }
    }
    None
}

fn path_is_jsonl_for_agent(path: &Path, agent_id: &str) -> bool {
    path.extension().and_then(|ext| ext.to_str()) == Some("jsonl")
        && path
            .file_name()
            .and_then(|name| name.to_str())
            .map(|name| name.contains(agent_id))
            .unwrap_or(false)
}

fn graph_subagent_signature(graph: &SessionGraph) -> String {
    let mut paths = graph
        .prompts
        .iter()
        .flat_map(|prompt| &prompt.calls)
        .filter_map(|call| call.subagent_session_path.as_deref())
        .map(str::to_owned)
        .collect::<Vec<_>>();
    paths.sort();
    paths.dedup();

    paths
        .into_iter()
        .map(|path| {
            let path_buf = PathBuf::from(&path);
            let signature = fs::metadata(&path_buf)
                .ok()
                .and_then(|metadata| {
                    let modified = metadata
                        .modified()
                        .ok()?
                        .duration_since(std::time::UNIX_EPOCH)
                        .ok()?
                        .as_nanos();
                    Some(format!("{}:{modified}", metadata.len()))
                })
                .unwrap_or_else(|| "missing".to_owned());
            format!("{path}:{signature}")
        })
        .collect::<Vec<_>>()
        .join("|")
}

fn handle_response_item(
    entry: &JsonlEntry,
    event_index: usize,
    prompts: &mut Vec<PromptNode>,
    current_prompt: &mut Option<usize>,
    assistant_message_by_prompt: &mut HashMap<usize, String>,
    calls_by_id: &mut HashMap<String, (usize, usize)>,
) {
    let Some(item_type) = entry.payload.get("type").and_then(Value::as_str) else {
        return;
    };

    match item_type {
        "message" => {
            let role = entry
                .payload
                .get("role")
                .and_then(Value::as_str)
                .unwrap_or("message");

            let raw_text = extract_content_text(&entry.payload);
            let text = normalize_text(&raw_text);
            let images = extract_content_images(SessionSource::Codex, event_index, &entry.payload);
            if text.is_empty() && images.is_empty() {
                return;
            }

            match role {
                "user" => {
                    if !raw_text.is_empty() && looks_like_environment_context(&raw_text) {
                        return;
                    }
                    if looks_like_subagent_notification(&raw_text) {
                        let prompt_index = ensure_prompt(
                            prompts,
                            current_prompt,
                            event_index,
                            entry.timestamp.clone(),
                        );
                        prompts[prompt_index]
                            .calls
                            .push(call_from_subagent_notification(
                                entry,
                                event_index,
                                &raw_text,
                            ));
                        return;
                    }

                    let title = prompt_title(&text);

                    let prompt = PromptNode {
                        id: format!("prompt-{event_index}"),
                        event_index,
                        timestamp: entry.timestamp.clone(),
                        title,
                        text,
                        images,
                        calls: Vec::new(),
                        assistant_messages: Vec::new(),
                        file_changes: Vec::new(),
                    };
                    prompts.push(prompt);
                    *current_prompt = Some(prompts.len() - 1);
                }
                "assistant" if !text.is_empty() => {
                    let prompt_index = ensure_prompt(
                        prompts,
                        current_prompt,
                        event_index,
                        entry.timestamp.clone(),
                    );
                    let message_index = prompts[prompt_index].assistant_messages.len();
                    let message = MessageNode {
                        id: format!("message-{event_index}-{message_index}"),
                        event_index,
                        timestamp: entry.timestamp.clone(),
                        text,
                    };
                    assistant_message_by_prompt.insert(prompt_index, message.id.clone());
                    link_pending_calls_to_assistant_message(
                        prompts,
                        prompt_index,
                        &message.id,
                    );
                    prompts[prompt_index].assistant_messages.push(message);
                }
                _ => {}
            }
        }
        "function_call" => {
            let prompt_index = ensure_prompt(
                prompts,
                current_prompt,
                event_index,
                entry.timestamp.clone(),
            );
            let mut call = call_from_function_call(entry, event_index, "function_call");
            call.assistant_message_id = assistant_message_by_prompt.get(&prompt_index).cloned();
            let call_id = call.id.clone();
            prompts[prompt_index].calls.push(call);
            let call_index = prompts[prompt_index].calls.len() - 1;
            calls_by_id.insert(call_id, (prompt_index, call_index));
        }
        "custom_tool_call" => {
            let prompt_index = ensure_prompt(
                prompts,
                current_prompt,
                event_index,
                entry.timestamp.clone(),
            );
            let mut call = call_from_custom_tool_call(entry, event_index);
            call.assistant_message_id = assistant_message_by_prompt.get(&prompt_index).cloned();
            let call_id = call.id.clone();
            prompts[prompt_index].calls.push(call);
            let call_index = prompts[prompt_index].calls.len() - 1;
            calls_by_id.insert(call_id, (prompt_index, call_index));
        }
        "function_call_output" => {
            let Some(call_id) = entry.payload.get("call_id").and_then(Value::as_str) else {
                return;
            };
            if let Some((prompt_index, call_index)) = calls_by_id.get(call_id).copied() {
                let call = &mut prompts[prompt_index].calls[call_index];
                call.event_index = event_index;
                call.status = "completed".to_owned();
                call.completed_at = entry.timestamp.clone();
                let output = entry
                    .payload
                    .get("output")
                    .map(value_preview)
                    .unwrap_or_default();
                call.output_preview = Some(output);
            }
        }
        "custom_tool_call_output" => {
            let Some(call_id) = entry.payload.get("call_id").and_then(Value::as_str) else {
                return;
            };
            if let Some((prompt_index, call_index)) = calls_by_id.get(call_id).copied() {
                let call = &mut prompts[prompt_index].calls[call_index];
                call.event_index = event_index;
                call.status = "completed".to_owned();
                call.completed_at = entry.timestamp.clone();
                let output = entry
                    .payload
                    .get("output")
                    .map(value_preview)
                    .unwrap_or_default();
                call.output_preview = Some(output);
            }
        }
        "tool_search_call" => {
            let prompt_index = ensure_prompt(
                prompts,
                current_prompt,
                event_index,
                entry.timestamp.clone(),
            );
            let mut call = call_from_tool_search_call(entry, event_index);
            call.assistant_message_id = assistant_message_by_prompt.get(&prompt_index).cloned();
            let call_id = call.id.clone();
            prompts[prompt_index].calls.push(call);
            let call_index = prompts[prompt_index].calls.len() - 1;
            calls_by_id.insert(call_id, (prompt_index, call_index));
        }
        "tool_search_output" => {
            let Some(call_id) = entry.payload.get("call_id").and_then(Value::as_str) else {
                return;
            };
            if let Some((prompt_index, call_index)) = calls_by_id.get(call_id).copied() {
                let call = &mut prompts[prompt_index].calls[call_index];
                call.event_index = event_index;
                call.status = entry
                    .payload
                    .get("status")
                    .and_then(Value::as_str)
                    .unwrap_or("completed")
                    .to_owned();
                call.completed_at = entry.timestamp.clone();
                let output = entry
                    .payload
                    .get("tools")
                    .map(value_preview)
                    .unwrap_or_default();
                call.output_preview = Some(output);
            }
        }
        "web_search_call" => {
            let prompt_index = ensure_prompt(
                prompts,
                current_prompt,
                event_index,
                entry.timestamp.clone(),
            );
            let mut call = call_from_web_search_call(entry, event_index);
            call.assistant_message_id = assistant_message_by_prompt.get(&prompt_index).cloned();
            prompts[prompt_index]
                .calls
                .push(call);
        }
        _ => {}
    }
}

fn handle_codex_event_msg(
    entry: &JsonlEntry,
    event_index: usize,
    prompts: &mut Vec<PromptNode>,
    current_prompt: &mut Option<usize>,
    assistant_message_by_prompt: &mut HashMap<usize, String>,
    calls_by_id: &mut HashMap<String, (usize, usize)>,
    token_samples: &mut Vec<TokenSample>,
) {
    let Some(payload_type) = entry.payload.get("type").and_then(Value::as_str) else {
        return;
    };

    match payload_type {
        "patch_apply_end" => {
            handle_patch_apply_end(entry, event_index, prompts, current_prompt, calls_by_id);
        }
        "mcp_tool_call_end" => {
            handle_mcp_tool_call_end(
                entry,
                event_index,
                prompts,
                current_prompt,
                assistant_message_by_prompt,
                calls_by_id,
            );
        }
        "token_count" => {
            if let Some(sample) = token_sample_from_event(entry, event_index) {
                push_token_sample(token_samples, sample);
            }
        }
        _ => {}
    }
}

fn handle_patch_apply_end(
    entry: &JsonlEntry,
    event_index: usize,
    prompts: &mut Vec<PromptNode>,
    current_prompt: &mut Option<usize>,
    calls_by_id: &HashMap<String, (usize, usize)>,
) {
    let call_id = entry
        .payload
        .get("call_id")
        .and_then(Value::as_str)
        .map(str::to_owned);
    let known_call = call_id
        .as_deref()
        .and_then(|call_id| calls_by_id.get(call_id).copied());
    let prompt_index = known_call
        .map(|(prompt_index, _)| prompt_index)
        .unwrap_or_else(|| {
            ensure_prompt(
                prompts,
                current_prompt,
                event_index,
                entry.timestamp.clone(),
            )
        });

    if let Some((prompt_index, call_index)) = known_call {
        let call = &mut prompts[prompt_index].calls[call_index];
        call.event_index = event_index;
        call.status = if entry
            .payload
            .get("success")
            .and_then(Value::as_bool)
            .unwrap_or(false)
        {
            "completed".to_owned()
        } else {
            "error".to_owned()
        };
        call.completed_at = entry.timestamp.clone();
        call.output_preview = patch_apply_output_preview(&entry.payload);
    }

    let Some(changes) = entry.payload.get("changes").and_then(Value::as_object) else {
        return;
    };

    let mut changes = changes.iter().collect::<Vec<_>>();
    changes.sort_by_key(|(path, _)| *path);

    for (change_index, (path, change)) in changes.into_iter().enumerate() {
        prompts[prompt_index]
            .file_changes
            .push(file_change_node_from_patch(
                event_index,
                change_index,
                entry.timestamp.clone(),
                call_id.clone(),
                path,
                change,
            ));
    }
}

fn handle_mcp_tool_call_end(
    entry: &JsonlEntry,
    event_index: usize,
    prompts: &mut Vec<PromptNode>,
    current_prompt: &mut Option<usize>,
    assistant_message_by_prompt: &HashMap<usize, String>,
    calls_by_id: &mut HashMap<String, (usize, usize)>,
) {
    let call_id = entry
        .payload
        .get("call_id")
        .and_then(Value::as_str)
        .map(str::to_owned)
        .unwrap_or_else(|| format!("mcp-tool-{event_index}"));
    let duration_ms = duration_ms_from_value(entry.payload.get("duration"));
    let output_preview = entry
        .payload
        .get("result")
        .map(value_preview);

    if let Some((prompt_index, call_index)) = calls_by_id.get(&call_id).copied() {
        let call = &mut prompts[prompt_index].calls[call_index];
        call.event_index = event_index;
        call.status = mcp_status(&entry.payload);
        call.completed_at = entry.timestamp.clone();
        call.duration_ms = duration_ms;
        call.output_preview = output_preview;
        return;
    }

    let prompt_index = ensure_prompt(
        prompts,
        current_prompt,
        event_index,
        entry.timestamp.clone(),
    );
    let invocation = entry.payload.get("invocation");
    let name = invocation
        .and_then(|invocation| {
            let server = invocation.get("server").and_then(Value::as_str);
            let tool = invocation.get("tool").and_then(Value::as_str);
            match (server, tool) {
                (Some(server), Some(tool)) => Some(format!("{server}.{tool}")),
                (_, Some(tool)) => Some(tool.to_owned()),
                _ => None,
            }
        })
        .unwrap_or_else(|| "mcp.tool".to_owned());
    let arguments = invocation
        .and_then(|invocation| invocation.get("arguments"))
        .cloned()
        .unwrap_or_else(|| json!({}));
    let call = CallNode {
        id: call_id.clone(),
        event_index,
        started_at: None,
        completed_at: entry.timestamp.clone(),
        kind: classify_call(&name),
        name,
        status: mcp_status(&entry.payload),
        duration_ms,
        argument_preview: value_preview(&arguments),
        output_preview,
        assistant_message_id: assistant_message_by_prompt.get(&prompt_index).cloned(),
        subagent_session_path: None,
        subagent_nodes: Vec::new(),
    };
    prompts[prompt_index].calls.push(call);
    let call_index = prompts[prompt_index].calls.len() - 1;
    calls_by_id.insert(call_id, (prompt_index, call_index));
}

fn mcp_status(payload: &Value) -> String {
    let result = payload.get("result");
    let is_error = result
        .and_then(|result| result.get("Ok"))
        .and_then(|ok| ok.get("isError"))
        .and_then(Value::as_bool)
        .unwrap_or(false);
    if result.and_then(|result| result.get("Err")).is_some() || is_error {
        "error".to_owned()
    } else {
        "completed".to_owned()
    }
}

fn duration_ms_from_value(value: Option<&Value>) -> Option<u64> {
    let value = value?;
    if let Some(ms) = value.get("millis").and_then(Value::as_u64) {
        return Some(ms);
    }
    let secs = value.get("secs").and_then(Value::as_u64).unwrap_or(0);
    let nanos = value.get("nanos").and_then(Value::as_u64).unwrap_or(0);
    if secs == 0 && nanos == 0 {
        None
    } else {
        Some(secs.saturating_mul(1_000) + nanos / 1_000_000)
    }
}

fn token_sample_from_event(entry: &JsonlEntry, event_index: usize) -> Option<TokenSample> {
    let info = entry.payload.get("info")?;
    let usage = info
        .get("last_token_usage")
        .or_else(|| info.get("total_token_usage"))?;
    let total_tokens = usage.get("total_tokens").and_then(Value::as_u64)?;
    let context_window = info.get("model_context_window").and_then(Value::as_u64);
    let context_tokens = usage
        .get("input_tokens")
        .and_then(Value::as_u64)
        .unwrap_or(total_tokens);
    let context_percent = context_window
        .filter(|context_window| *context_window > 0)
        .map(|context_window| (context_tokens as f64 / context_window as f64) * 100.0);
    let rate_limits = entry.payload.get("rate_limits");

    Some(TokenSample {
        event_index,
        timestamp: entry.timestamp.clone(),
        total_tokens,
        context_window,
        context_percent,
        primary_rate_limit_percent: rate_limit_percent(rate_limits, "primary"),
        secondary_rate_limit_percent: rate_limit_percent(rate_limits, "secondary"),
    })
}

fn push_token_sample(samples: &mut Vec<TokenSample>, sample: TokenSample) {
    samples.push(sample);
    if samples.len() > MAX_TOKEN_SAMPLES {
        samples.remove(0);
    }
}

fn rate_limit_percent(rate_limits: Option<&Value>, key: &str) -> Option<f64> {
    rate_limits?
        .get(key)?
        .get("used_percent")
        .and_then(Value::as_f64)
}

fn build_token_telemetry(mut samples: Vec<TokenSample>) -> TokenTelemetry {
    if samples.len() > MAX_TOKEN_SAMPLES {
        samples = samples.split_off(samples.len() - MAX_TOKEN_SAMPLES);
    }

    let latest = samples.last().cloned();
    TokenTelemetry {
        latest_total_tokens: latest.as_ref().map(|sample| sample.total_tokens),
        context_window: latest.as_ref().and_then(|sample| sample.context_window),
        latest_context_percent: latest.as_ref().and_then(|sample| sample.context_percent),
        primary_rate_limit_percent: latest
            .as_ref()
            .and_then(|sample| sample.primary_rate_limit_percent),
        secondary_rate_limit_percent: latest
            .as_ref()
            .and_then(|sample| sample.secondary_rate_limit_percent),
        samples,
    }
}

fn patch_apply_output_preview(payload: &Value) -> Option<String> {
    let preview = joined_text_lines(
        [
            payload.get("stdout").and_then(Value::as_str),
            payload.get("stderr").and_then(Value::as_str),
        ]
        .into_iter()
        .flatten(),
    );
    if preview.trim().is_empty() {
        None
    } else {
        Some(normalize_text(&preview))
    }
}

fn short_path(path: &str) -> String {
    let parts = path
        .rsplit(['/', '\\'])
        .filter(|part| !part.trim().is_empty())
        .take(3)
        .collect::<Vec<_>>();
    parts.into_iter().rev().collect::<Vec<_>>().join("/")
}

fn file_change_node_from_patch(
    event_index: usize,
    change_index: usize,
    timestamp: Option<String>,
    call_id: Option<String>,
    path: &str,
    change: &Value,
) -> FileChangeNode {
    let change_type =
        normalize_file_change_type(change.get("type").and_then(Value::as_str)).to_owned();
    let preview = patch_change_preview(change);
    let detail = patch_change_detail(path, &change_type, change, &preview);

    FileChangeNode {
        id: format!("file-change-{event_index}-{change_index}"),
        event_index,
        timestamp,
        call_id,
        path: path.to_owned(),
        short_path: short_path(path),
        change_type,
        detail,
        preview,
    }
}

fn normalize_file_change_type(change_type: Option<&str>) -> &'static str {
    match change_type
        .unwrap_or("update")
        .trim()
        .to_ascii_lowercase()
        .as_str()
    {
        "add" | "added" | "create" | "created" => "add",
        "delete" | "deleted" | "remove" | "removed" => "delete",
        "move" | "moved" | "rename" | "renamed" => "move",
        _ => "update",
    }
}

fn patch_change_preview(change: &Value) -> String {
    change
        .get("unified_diff")
        .or_else(|| change.get("content"))
        .and_then(Value::as_str)
        .map(normalize_text)
        .or_else(|| {
            change
                .get("move_path")
                .and_then(Value::as_str)
                .map(|path| format!("moved to {path}"))
        })
        .unwrap_or_else(|| value_preview(change))
}

fn patch_change_detail(path: &str, change_type: &str, change: &Value, preview: &str) -> String {
    let mut parts = vec![format!("change: {change_type}"), format!("path: {path}")];
    if let Some(move_path) = change.get("move_path").and_then(Value::as_str) {
        parts.push(format!("move path: {move_path}"));
    }
    if !preview.trim().is_empty() {
        parts.push(String::new());
        parts.push(preview.to_owned());
    }
    parts.join("\n")
}

fn compaction_node_from_codex_entry(
    entry: &JsonlEntry,
    event_index: usize,
) -> Option<CompactionNode> {
    let replacement_history = entry
        .payload
        .get("replacement_history")
        .and_then(Value::as_array);
    let compaction_payload = replacement_history.and_then(|history| {
        history
            .iter()
            .find(|item| item.get("type").and_then(Value::as_str) == Some("compaction"))
    });
    let replaced_message_count = replacement_history
        .map(|history| {
            history
                .iter()
                .filter(|item| item.get("type").and_then(Value::as_str) == Some("message"))
                .count()
        })
        .unwrap_or_default();
    let encrypted_content_len = compaction_payload
        .and_then(|payload| payload.get("encrypted_content"))
        .and_then(Value::as_str)
        .map(str::len)
        .unwrap_or_default();
    let encrypted = encrypted_content_len > 0;
    let summary = normalize_text(&compaction_summary_text(&entry.payload, compaction_payload));

    if summary.is_empty() && replaced_message_count == 0 && !encrypted {
        return None;
    }

    let reason =
        compaction_reason(&entry.payload).or_else(|| Some("Context window compacted".to_owned()));
    let text = if summary.is_empty() {
        format!(
            "Compacted {replaced_message_count} prior message{} into {} context checkpoint.",
            if replaced_message_count == 1 { "" } else { "s" },
            if encrypted { "an encrypted" } else { "a" }
        )
    } else {
        summary
    };
    let mut detail = vec![
        "compaction: context checkpoint".to_owned(),
        format!("event: {event_index}"),
        format!("replaced messages: {replaced_message_count}"),
        format!(
            "summary: {}",
            if encrypted {
                "encrypted in session log"
            } else {
                "plain text"
            }
        ),
    ];
    if let Some(timestamp) = &entry.timestamp {
        detail.push(format!("timestamp: {timestamp}"));
    }
    if let Some(reason) = &reason {
        detail.push(format!("reason: {reason}"));
    }
    if encrypted {
        detail.push(format!("encrypted bytes: {encrypted_content_len}"));
    }
    detail.extend(["".to_owned(), "summary:".to_owned(), text.clone()]);

    Some(CompactionNode {
        id: format!("compaction-{event_index}"),
        event_index,
        timestamp: entry.timestamp.clone(),
        title: "Context compacted".to_owned(),
        text,
        detail: detail.join("\n"),
        replaced_message_count,
        encrypted,
        reason,
    })
}

fn compaction_node_from_claude_entry(entry: &Value, event_index: usize) -> Option<CompactionNode> {
    let timestamp = entry_timestamp(entry);
    let summary = normalize_text(&claude_summary_text(entry));
    let replacement_count = entry
        .get("replacement_history")
        .and_then(Value::as_array)
        .map(|history| history.len())
        .unwrap_or_default();
    if summary.is_empty() && replacement_count == 0 {
        return None;
    }

    let reason = compaction_reason(entry).or_else(|| Some("Conversation summary".to_owned()));
    let text = if summary.is_empty() {
        format!(
            "Compacted {replacement_count} prior item{} into a summary checkpoint.",
            if replacement_count == 1 { "" } else { "s" }
        )
    } else {
        summary
    };
    let mut detail = vec![
        "compaction: summary checkpoint".to_owned(),
        format!("event: {event_index}"),
        format!("replaced items: {replacement_count}"),
        "summary: plain text".to_owned(),
    ];
    if let Some(timestamp) = &timestamp {
        detail.push(format!("timestamp: {timestamp}"));
    }
    if let Some(reason) = &reason {
        detail.push(format!("reason: {reason}"));
    }
    detail.extend(["".to_owned(), "summary:".to_owned(), text.clone()]);

    Some(CompactionNode {
        id: format!("compaction-{event_index}"),
        event_index,
        timestamp,
        title: "Context summarized".to_owned(),
        text,
        detail: detail.join("\n"),
        replaced_message_count: replacement_count,
        encrypted: false,
        reason,
    })
}

fn handle_claude_user_entry(
    entry: &Value,
    event_index: usize,
    prompts: &mut Vec<PromptNode>,
    current_prompt: &mut Option<usize>,
    calls_by_id: &mut HashMap<String, (usize, usize)>,
) {
    let timestamp = entry_timestamp(entry);
    let Some(content) = entry.pointer("/message/content") else {
        return;
    };

    apply_claude_tool_results(content, entry, event_index, prompts, calls_by_id);

    let text = normalize_text(&extract_claude_user_text(content));
    let images = extract_claude_content_images(SessionSource::Claude, event_index, content);
    if text.is_empty() && images.is_empty() {
        return;
    }
    if !text.is_empty() && looks_like_environment_context(&text) {
        return;
    }

    let title = prompt_title(&text);
    prompts.push(PromptNode {
        id: prompt_id_from_entry(entry, event_index),
        event_index,
        timestamp,
        title,
        text,
        images,
        calls: Vec::new(),
        assistant_messages: Vec::new(),
        file_changes: Vec::new(),
    });
    *current_prompt = Some(prompts.len() - 1);
}

fn handle_claude_assistant_entry(
    entry: &Value,
    event_index: usize,
    prompts: &mut Vec<PromptNode>,
    current_prompt: &mut Option<usize>,
    assistant_message_by_prompt: &mut HashMap<usize, String>,
    calls_by_id: &mut HashMap<String, (usize, usize)>,
) {
    let timestamp = entry_timestamp(entry);
    let Some(content) = entry.pointer("/message/content") else {
        return;
    };

    let text = normalize_text(&extract_claude_assistant_text(content));
    let assistant_message_id = if text.is_empty() {
        None
    } else {
        let prompt_index = ensure_prompt(prompts, current_prompt, event_index, timestamp.clone());
        let message_index = prompts[prompt_index].assistant_messages.len();
        let message = MessageNode {
            id: format!("claude-message-{event_index}-{message_index}"),
            event_index,
            timestamp: timestamp.clone(),
            text,
        };
        let message_id = message.id.clone();
        assistant_message_by_prompt.insert(prompt_index, message_id.clone());
        link_pending_calls_to_assistant_message(prompts, prompt_index, &message_id);
        prompts[prompt_index].assistant_messages.push(message);
        Some(message_id)
    };

    if let Some(items) = content.as_array() {
        for (part_index, part) in items.iter().enumerate() {
            if part.get("type").and_then(Value::as_str) != Some("tool_use") {
                continue;
            }

            let prompt_index =
                ensure_prompt(prompts, current_prompt, event_index, timestamp.clone());
            let name = part
                .get("name")
                .and_then(Value::as_str)
                .unwrap_or("tool_use")
                .to_owned();
            let call_id = part
                .get("id")
                .and_then(Value::as_str)
                .map(str::to_owned)
                .unwrap_or_else(|| format!("claude-tool-{event_index}-{part_index}"));
            let arguments = part.get("input").cloned().unwrap_or_else(|| json!({}));
            let call = CallNode {
                id: call_id.clone(),
                event_index,
                started_at: timestamp.clone(),
                completed_at: None,
                kind: classify_call(&name),
                name,
                status: "running".to_owned(),
                duration_ms: None,
                argument_preview: value_preview(&arguments),
                output_preview: None,
                assistant_message_id: assistant_message_id.clone(),
                subagent_session_path: None,
                subagent_nodes: Vec::new(),
            };
            prompts[prompt_index].calls.push(call);
            let call_index = prompts[prompt_index].calls.len() - 1;
            calls_by_id.insert(call_id, (prompt_index, call_index));
        }
    }
}

fn apply_claude_tool_results(
    content: &Value,
    entry: &Value,
    event_index: usize,
    prompts: &mut [PromptNode],
    calls_by_id: &HashMap<String, (usize, usize)>,
) {
    let Some(items) = content.as_array() else {
        return;
    };

    for part in items {
        if part.get("type").and_then(Value::as_str) != Some("tool_result") {
            continue;
        }
        let Some(call_id) = part.get("tool_use_id").and_then(Value::as_str) else {
            continue;
        };
        let Some((prompt_index, call_index)) = calls_by_id.get(call_id).copied() else {
            continue;
        };
        let Some(prompt) = prompts.get_mut(prompt_index) else {
            continue;
        };
        let Some(call) = prompt.calls.get_mut(call_index) else {
            continue;
        };
        call.status = if part
            .get("is_error")
            .and_then(Value::as_bool)
            .unwrap_or(false)
        {
            "error".to_owned()
        } else {
            "completed".to_owned()
        };
        call.completed_at = entry_timestamp(entry);
        let output = part
            .get("content")
            .or_else(|| entry.get("toolUseResult"))
            .map(value_preview)
            .unwrap_or_else(|| format!("Claude tool result at event {event_index}"));
        call.output_preview = Some(output);
    }
}

fn entry_timestamp(entry: &Value) -> Option<String> {
    entry
        .get("timestamp")
        .and_then(Value::as_str)
        .map(str::to_owned)
}

fn prompt_id_from_entry(entry: &Value, event_index: usize) -> String {
    entry
        .get("promptId")
        .and_then(Value::as_str)
        .or_else(|| entry.get("uuid").and_then(Value::as_str))
        .map(|id| format!("prompt-{id}"))
        .unwrap_or_else(|| format!("prompt-{event_index}"))
}

fn extract_claude_user_text(content: &Value) -> String {
    match content {
        Value::String(text) => text.trim().to_owned(),
        Value::Array(items) => joined_text_lines(
            items
                .iter()
                .filter_map(|part| {
                    if matches!(
                        part.get("type").and_then(Value::as_str),
                        Some("tool_result" | "image")
                    ) {
                        return None;
                    }
                    part.get("text").and_then(Value::as_str)
                })
                .filter(|text| !is_image_placeholder_text(text)),
        ),
        _ => String::new(),
    }
}

fn extract_claude_assistant_text(content: &Value) -> String {
    match content {
        Value::String(text) => text.trim().to_owned(),
        Value::Array(items) => joined_text_lines(
            items
                .iter()
                .filter(|part| part.get("type").and_then(Value::as_str) == Some("text"))
                .filter_map(|part| part.get("text").and_then(Value::as_str)),
        ),
        _ => String::new(),
    }
}

fn ensure_prompt(
    prompts: &mut Vec<PromptNode>,
    current_prompt: &mut Option<usize>,
    event_index: usize,
    timestamp: Option<String>,
) -> usize {
    if let Some(prompt_index) = *current_prompt {
        return prompt_index;
    }

    prompts.push(PromptNode {
        id: format!("prompt-synthetic-{event_index}"),
        event_index,
        timestamp,
        title: "Session startup".to_owned(),
        text: "Tool activity captured before the first user prompt.".to_owned(),
        images: Vec::new(),
        calls: Vec::new(),
        assistant_messages: Vec::new(),
        file_changes: Vec::new(),
    });
    *current_prompt = Some(prompts.len() - 1);
    prompts.len() - 1
}

fn update_metadata_from_session_meta(metadata: &mut SessionMetadata, payload: &Value) {
    set_if_present(
        &mut metadata.cli_version,
        optional_string(payload, "cli_version"),
    );
    set_if_present(
        &mut metadata.originator,
        optional_string(payload, "originator"),
    );
    set_if_present(&mut metadata.source, optional_string(payload, "source"));
    set_if_present(
        &mut metadata.model_provider,
        optional_string(payload, "model_provider"),
    );
    if let Some(git) = payload.get("git") {
        set_if_present(
            &mut metadata.git_commit_hash,
            optional_string(git, "commit_hash"),
        );
        set_if_present(
            &mut metadata.repository_url,
            optional_string(git, "repository_url"),
        );
    }
    if let Some(tools) = payload.get("dynamic_tools").and_then(Value::as_array) {
        metadata.dynamic_tools = tools
            .iter()
            .filter_map(dynamic_tool_summary)
            .collect::<Vec<_>>();
    }
}

fn update_metadata_from_turn_context(metadata: &mut SessionMetadata, payload: &Value) {
    set_if_present(
        &mut metadata.approval_policy,
        optional_string(payload, "approval_policy"),
    );
    set_if_present(&mut metadata.model, optional_string(payload, "model"));
    let sandbox = payload
        .get("sandbox_policy")
        .and_then(|sandbox| {
            sandbox
                .get("type")
                .and_then(Value::as_str)
                .or_else(|| sandbox.as_str())
        })
        .map(str::to_owned);
    set_if_present(&mut metadata.sandbox, sandbox);
}

fn set_if_present(slot: &mut Option<String>, value: Option<String>) {
    if value.is_some() {
        *slot = value;
    }
}

fn optional_string(payload: &Value, key: &str) -> Option<String> {
    payload
        .get(key)
        .and_then(Value::as_str)
        .filter(|value| !value.trim().is_empty())
        .map(str::to_owned)
}

fn dynamic_tool_summary(tool: &Value) -> Option<DynamicToolSummary> {
    let name = optional_string(tool, "name")?;
    Some(DynamicToolSummary {
        name,
        namespace: optional_string(tool, "namespace"),
        defer_loading: tool
            .get("deferLoading")
            .or_else(|| tool.get("defer_loading"))
            .and_then(Value::as_bool)
            .unwrap_or(false),
    })
}

fn build_ui_summary(
    source: SessionSource,
    path: &Path,
    cwd: Option<&str>,
    prompts: &[PromptNode],
    compactions: &[CompactionNode],
    is_live: bool,
) -> UiSummary {
    let total_turns = prompts
        .iter()
        .map(|prompt| {
            prompt.calls.len() + prompt.assistant_messages.len() + prompt.file_changes.len()
        })
        .sum();
    let metrics = collect_ui_metrics(prompts, compactions);

    let timeline_ticks = build_timeline_ticks(prompts, compactions);
    let timeline_labels = build_timeline_labels(prompts, compactions, is_live);
    let roots = build_session_roots(source, path, cwd);
    let prompt_rows = prompts
        .iter()
        .enumerate()
        .map(|(index, prompt)| {
            let turns =
                prompt.calls.len() + prompt.assistant_messages.len() + prompt.file_changes.len();
            let call_counts = prompt_call_counts(prompt);
            PromptRowSummary {
                id: prompt.id.clone(),
                title: prompt.title.clone(),
                turns,
                local: call_counts.local,
                browser: call_counts.browser,
                web: call_counts.web,
                files: prompt.file_changes.len(),
                is_live: is_live && index + 1 == prompts.len(),
                last_event_index: prompt_event_index(prompt),
            }
        })
        .collect();

    UiSummary {
        source: source.as_str().to_owned(),
        session_name: session_name_from_cwd(cwd, source),
        total_turns,
        all_count: prompts.len() + compactions.len(),
        live_count: if is_live {
            (prompts.len() + compactions.len()).max(1)
        } else {
            0
        },
        metric_errors: metrics.errors,
        metric_long_calls: metrics.long_calls,
        metric_files: metrics.files,
        metric_diffs: metrics.diffs,
        metric_artifacts: metrics.artifacts,
        metric_compactions: metrics.compactions,
        metric_web: metrics.web,
        timeline_ticks,
        timeline_labels,
        roots,
        prompt_rows,
    }
}

fn collect_ui_metrics(prompts: &[PromptNode], compactions: &[CompactionNode]) -> UiMetrics {
    let mut metrics = UiMetrics {
        compactions: compactions.len(),
        ..Default::default()
    };

    for call in prompts.iter().flat_map(|prompt| &prompt.calls) {
        let name = call.name.to_ascii_lowercase();
        let kind = call.kind.to_ascii_lowercase();
        let argument_preview = call.argument_preview.to_ascii_lowercase();
        let output_preview = call.output_preview.as_deref().map(str::to_ascii_lowercase);

        let call_matches = |needle: &str| name.contains(needle) || kind.contains(needle);
        let preview_contains = |needle: &str| {
            argument_preview.contains(needle)
                || output_preview
                    .as_deref()
                    .map(|output| output.contains(needle))
                    .unwrap_or(false)
        };

        if call_matches("error") || preview_contains("error") {
            metrics.errors += 1;
        }
        if call.argument_preview.len() > 1_400
            || call
                .output_preview
                .as_deref()
                .map(|output| output.len() > 1_200)
                .unwrap_or(false)
        {
            metrics.long_calls += 1;
        }
        if call_matches("file")
            || call_matches("read")
            || call_matches("write")
            || call_matches("rg")
            || call_matches("patch")
        {
            metrics.files += 1;
        }
        if call_matches("diff") || call_matches("patch") {
            metrics.diffs += 1;
        }
        if call_matches("artifact") || preview_contains("artifact") {
            metrics.artifacts += 1;
        }
        if call.kind == "web" {
            metrics.web += 1;
        }
    }

    for file_change in prompts.iter().flat_map(|prompt| &prompt.file_changes) {
        metrics.files += 1;
        if file_change.change_type != "add" {
            metrics.diffs += 1;
        }
    }

    metrics
}

fn prompt_call_counts(prompt: &PromptNode) -> PromptCallCounts {
    let mut counts = PromptCallCounts::default();

    for call in &prompt.calls {
        match call.kind.as_str() {
            "local" => counts.local += 1,
            "browser" => counts.browser += 1,
            "web" => counts.web += 1,
            _ => {}
        }
    }

    counts
}

fn build_timeline_ticks(
    prompts: &[PromptNode],
    compactions: &[CompactionNode],
) -> Vec<TimelineTick> {
    let mut events: Vec<(usize, String)> = prompts
        .iter()
        .flat_map(|prompt| {
            prompt
                .calls
                .iter()
                .map(|call| (call.event_index, call.kind.clone()))
                .chain(
                    prompt
                        .assistant_messages
                        .iter()
                        .map(|message| (message.event_index, "message".to_owned())),
                )
                .chain(
                    prompt
                        .file_changes
                        .iter()
                        .map(|change| (change.event_index, format!("file-{}", change.change_type))),
                )
        })
        .collect();
    events.extend(
        compactions
            .iter()
            .map(|compaction| (compaction.event_index, "compaction".to_owned())),
    );
    events.sort_by_key(|(event_index, _)| *event_index);

    events
        .into_iter()
        .enumerate()
        .map(|(index, (event_index, kind))| TimelineTick {
            kind,
            height: 6 + ((event_index + index) % 5) * 4,
        })
        .collect()
}

fn build_timeline_labels(
    prompts: &[PromptNode],
    compactions: &[CompactionNode],
    is_live: bool,
) -> Vec<String> {
    let mut timestamps = Vec::new();
    for prompt in prompts {
        push_timestamp(&mut timestamps, prompt.timestamp.as_deref());
        for call in &prompt.calls {
            push_timestamp(&mut timestamps, call.started_at.as_deref());
            push_timestamp(&mut timestamps, call.completed_at.as_deref());
        }
        for message in &prompt.assistant_messages {
            push_timestamp(&mut timestamps, message.timestamp.as_deref());
        }
        for file_change in &prompt.file_changes {
            push_timestamp(&mut timestamps, file_change.timestamp.as_deref());
        }
    }
    for compaction in compactions {
        push_timestamp(&mut timestamps, compaction.timestamp.as_deref());
    }

    timestamps.sort();
    let freshness = if is_live { "LIVE" } else { "STALE" }.to_owned();
    if timestamps.is_empty() {
        return vec![
            "Start".to_owned(),
            "Mid".to_owned(),
            "Latest".to_owned(),
            freshness,
        ];
    }

    let first = timestamps[0].as_str();
    let middle = timestamps[timestamps.len() / 2].as_str();
    let latest = timestamps.last().map(String::as_str).unwrap_or(first);
    vec![
        format_time_label(first),
        format_time_label(middle),
        format_time_label(latest),
        freshness,
    ]
}

fn push_timestamp(target: &mut Vec<String>, value: Option<&str>) {
    if let Some(value) = value.filter(|value| !value.trim().is_empty()) {
        target.push(value.to_owned());
    }
}

fn format_time_label(timestamp: &str) -> String {
    timestamp
        .split_once('T')
        .and_then(|(_, rest)| rest.get(0..5))
        .map(str::to_owned)
        .unwrap_or_else(|| timestamp.to_owned())
}

fn build_session_roots(
    source: SessionSource,
    path: &Path,
    cwd: Option<&str>,
) -> Vec<SessionRootSummary> {
    let mut roots = Vec::new();
    push_session_root(
        &mut roots,
        "Session file",
        path.display().to_string(),
        "Loaded",
    );

    if let Some(cwd) = cwd.filter(|cwd| !cwd.trim().is_empty()) {
        push_session_root(&mut roots, "Working directory", cwd.to_owned(), "CWD");
    }

    if let Ok(root) = sessions_root(source) {
        push_session_root(
            &mut roots,
            match source {
                SessionSource::Codex => "Codex sessions",
                SessionSource::Claude => "Claude projects",
            },
            root.display().to_string(),
            "Local",
        );
    }

    roots
}

fn push_session_root(roots: &mut Vec<SessionRootSummary>, label: &str, path: String, status: &str) {
    if roots.iter().any(|root| root.path == path) {
        return;
    }

    roots.push(SessionRootSummary {
        label: label.to_owned(),
        path,
        status: status.to_owned(),
    });
}

fn prompt_event_index(prompt: &PromptNode) -> usize {
    prompt
        .calls
        .iter()
        .map(|call| call.event_index)
        .chain(
            prompt
                .assistant_messages
                .iter()
                .map(|message| message.event_index),
        )
        .chain(prompt.file_changes.iter().map(|change| change.event_index))
        .max()
        .unwrap_or(prompt.event_index)
}

fn session_name_from_cwd(cwd: Option<&str>, source: SessionSource) -> String {
    cwd.and_then(|path| {
        path.rsplit(['/', '\\'])
            .find(|part| !part.trim().is_empty())
            .map(str::to_owned)
    })
    .unwrap_or_else(|| format!("{} session", source.display_name()))
}

fn prompt_title(text: &str) -> String {
    if text.is_empty() {
        "Image prompt".to_owned()
    } else {
        title_from_text(text)
    }
}

fn compaction_summary_text(payload: &Value, compaction_payload: Option<&Value>) -> String {
    first_readable_text([
        payload.get("message"),
        payload.get("summary"),
        payload.get("text"),
        compaction_payload.and_then(|payload| payload.get("summary")),
        compaction_payload.and_then(|payload| payload.get("text")),
        compaction_payload.and_then(|payload| payload.get("content")),
    ])
}

fn claude_summary_text(entry: &Value) -> String {
    first_readable_text([
        entry.get("summary"),
        entry.get("message"),
        entry.get("text"),
        entry.get("content"),
        entry.pointer("/message/content"),
    ])
}

fn first_readable_text<'a>(values: impl IntoIterator<Item = Option<&'a Value>>) -> String {
    values
        .into_iter()
        .flatten()
        .filter_map(readable_text_from_value)
        .find(|text| !text.trim().is_empty())
        .unwrap_or_default()
}

fn compaction_reason(payload: &Value) -> Option<String> {
    payload
        .get("reason")
        .or_else(|| payload.get("cause"))
        .or_else(|| payload.get("trigger"))
        .and_then(readable_text_from_value)
        .filter(|reason| !reason.trim().is_empty())
}

fn readable_text_from_value(value: &Value) -> Option<String> {
    match value {
        Value::String(text) => Some(text.trim().to_owned()),
        Value::Array(items) => Some(joined_text_lines(items.iter().filter_map(|item| {
            item.get("text")
                .and_then(Value::as_str)
                .or_else(|| item.get("input_text").and_then(Value::as_str))
                .or_else(|| item.get("output_text").and_then(Value::as_str))
        }))),
        Value::Object(_) => value
            .get("text")
            .and_then(Value::as_str)
            .map(|text| text.trim().to_owned())
            .or_else(|| {
                value
                    .get("content")
                    .and_then(readable_text_from_value)
                    .filter(|text| !text.trim().is_empty())
            }),
        _ => None,
    }
}

fn extract_content_text(payload: &Value) -> String {
    let Some(content) = payload.get("content").and_then(Value::as_array) else {
        return String::new();
    };

    joined_text_lines(content.iter().filter_map(|part| {
        let text = part
            .get("text")
            .and_then(Value::as_str)
            .or_else(|| part.get("input_text").and_then(Value::as_str))
            .or_else(|| part.get("output_text").and_then(Value::as_str))?;
        if is_image_placeholder_text(text) {
            None
        } else {
            Some(text)
        }
    }))
}

fn joined_text_lines<'a>(parts: impl Iterator<Item = &'a str>) -> String {
    let mut text = String::new();
    for part in parts {
        if !text.is_empty() {
            text.push('\n');
        }
        text.push_str(part);
    }
    text.trim().to_owned()
}

fn image_ref(
    source: SessionSource,
    event_index: usize,
    image_index: usize,
    detail: Option<&str>,
    mime_type: String,
) -> ContentImageRef {
    ContentImageRef {
        id: format!("image-{event_index}-{image_index}"),
        event_index,
        image_index,
        detail: detail.map(str::to_owned),
        mime_type,
        url: session_image_url(source, event_index, image_index),
    }
}

fn extract_content_images(
    source: SessionSource,
    event_index: usize,
    payload: &Value,
) -> Vec<ContentImageRef> {
    let Some(content) = payload.get("content").and_then(Value::as_array) else {
        return Vec::new();
    };

    let mut images = Vec::new();
    for part in content {
        let Some(image_url) = part.get("image_url").and_then(Value::as_str) else {
            continue;
        };
        let image_index = images.len();
        images.push(image_ref(
            source,
            event_index,
            image_index,
            part.get("detail").and_then(Value::as_str),
            mime_type_from_image_url(image_url),
        ));
    }
    images
}

fn extract_claude_content_images(
    source: SessionSource,
    event_index: usize,
    content: &Value,
) -> Vec<ContentImageRef> {
    let Some(items) = content.as_array() else {
        return Vec::new();
    };

    let mut images = Vec::new();
    for part in items {
        let Some(image_source) = part.get("source") else {
            continue;
        };
        if image_source.get("data").and_then(Value::as_str).is_none() {
            continue;
        }

        let image_index = images.len();
        images.push(image_ref(
            source,
            event_index,
            image_index,
            part.get("detail")
                .and_then(Value::as_str)
                .or_else(|| part.get("type").and_then(Value::as_str)),
            image_source
                .get("media_type")
                .and_then(Value::as_str)
                .unwrap_or("image/*")
                .to_owned(),
        ));
    }
    images
}
