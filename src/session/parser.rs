// SPDX-License-Identifier: MIT OR Apache-2.0

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


fn attach_subagent_nodes(source: SessionSource, parent_path: &Path, prompts: &mut [PromptNode]) {
    if source != SessionSource::Codex {
        return;
    }

    let mut resolved_paths: HashMap<String, Option<PathBuf>> = HashMap::new();
    let mut parsed_graphs: HashMap<PathBuf, Option<SessionGraph>> = HashMap::new();

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
            let graph = parsed_graphs
                .entry(path.clone())
                .or_insert_with(|| subagent_graph_for_path(&path));
            let Some(graph) = graph else {
                continue;
            };
            call.subagent_nodes = subagent_inspection_nodes(&call.id, graph);
        }
    }
}

fn is_subagent_call(call: &CallNode) -> bool {
    call.name == "spawn_agent" || call.name == "subagent"
}

fn subagent_graph_for_path(path: &Path) -> Option<SessionGraph> {
    let (byte_length, modified) = session_file_state(path).ok()?;
    parse_session_jsonl_inner(SessionSource::Codex, path, byte_length, modified, false).ok()
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
