// SPDX-License-Identifier: MIT OR Apache-2.0

#[cfg(test)]
fn appended_bytes_may_affect_graph(
    source: SessionSource,
    path: &Path,
    start_byte: u64,
    byte_length: u64,
) -> Result<bool> {
    Ok(appended_session_signals(source, path, start_byte, byte_length, 0)?.graph_changed)
}

fn appended_session_signals(
    source: SessionSource,
    path: &Path,
    start_byte: u64,
    byte_length: u64,
    start_event_index: usize,
) -> Result<AppendSignals> {
    let mut signals = AppendSignals::default();
    if byte_length <= start_byte {
        signals.scanned_to_end = true;
        return Ok(signals);
    }

    let reader = session_jsonl_reader_at(path, start_byte, false)?;

    let appended_byte_length = byte_length - start_byte;
    let mut parsed_bytes = 0_u64;
    let mut last_activity = TailActivity::None;
    let mut live_cues = LiveCueBuilder::default();
    let mut event_index = start_event_index;
    for line in reader.lines() {
        let line =
            line.with_context(|| format!("failed to read appended jsonl {}", path.display()))?;
        parsed_bytes += line.len() as u64 + 1;
        if line.trim().is_empty() {
            continue;
        }
        let head = line_head(&line);
        if source == SessionSource::Codex {
            record_codex_tail_activity(&mut last_activity, head);
            if line_may_affect_live_cues(head) {
                live_cues.observe_line(&line, event_index);
            }
        }

        if line_may_affect_graph(source, &line) {
            signals.graph_changed = true;
        }
        event_index += 1;
        if parsed_bytes >= GRAPH_APPEND_PARSE_BYTE_BUDGET {
            signals.graph_changed = true;
            break;
        }
    }

    signals.live_cues = live_cues.finish();
    signals.live_cues.compaction_in_progress =
        source == SessionSource::Codex && last_activity.is_compaction_in_progress();
    signals.scanned_to_end = parsed_bytes >= appended_byte_length;
    Ok(signals)
}

fn session_tail_compaction_in_progress(
    source: SessionSource,
    path: &Path,
    byte_length: u64,
) -> Result<bool> {
    if source != SessionSource::Codex || byte_length == 0 {
        return Ok(false);
    }

    let start_byte = byte_length.saturating_sub(SESSION_STATUS_TAIL_BYTES);
    let reader = session_jsonl_reader_at(path, start_byte, true)?;

    let mut last_activity = TailActivity::None;
    for line in reader.lines() {
        let line =
            line.with_context(|| format!("failed to read session jsonl {}", path.display()))?;
        if line.trim().is_empty() {
            continue;
        }
        record_codex_tail_activity(&mut last_activity, line_head(&line));
    }

    Ok(last_activity.is_compaction_in_progress())
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum TailActivity {
    None,
    TaskStarted,
    TaskEnded,
    RenderableTurn,
}

impl TailActivity {
    fn is_compaction_in_progress(self) -> bool {
        self == Self::TaskStarted
    }
}

fn record_codex_tail_activity(last_activity: &mut TailActivity, head: &str) {
    if let Some(activity) = codex_tail_activity(head) {
        *last_activity = activity;
    }
}

fn line_may_affect_live_cues(head: &str) -> bool {
    if contains_json_field(head, "\"type\":\"event_msg\"", "\"type\": \"event_msg\"") {
        return contains_json_field(
            head,
            "\"type\":\"user_message\"",
            "\"type\": \"user_message\"",
        ) || contains_json_field(
            head,
            "\"type\":\"agent_message\"",
            "\"type\": \"agent_message\"",
        ) || contains_json_field(
            head,
            "\"type\":\"token_count\"",
            "\"type\": \"token_count\"",
        ) || contains_json_field(
            head,
            "\"type\":\"patch_apply_end\"",
            "\"type\": \"patch_apply_end\"",
        ) || contains_json_field(
            head,
            "\"type\":\"mcp_tool_call_end\"",
            "\"type\": \"mcp_tool_call_end\"",
        );
    }

    contains_json_field(
        head,
        "\"type\":\"response_item\"",
        "\"type\": \"response_item\"",
    ) && (contains_json_field(head, "\"type\":\"message\"", "\"type\": \"message\"")
        || contains_json_field(
            head,
            "\"type\":\"function_call\"",
            "\"type\": \"function_call\"",
        )
        || contains_json_field(
            head,
            "\"type\":\"custom_tool_call\"",
            "\"type\": \"custom_tool_call\"",
        )
        || contains_json_field(
            head,
            "\"type\":\"tool_search_call\"",
            "\"type\": \"tool_search_call\"",
        )
        || contains_json_field(
            head,
            "\"type\":\"function_call_output\"",
            "\"type\": \"function_call_output\"",
        )
        || contains_json_field(
            head,
            "\"type\":\"custom_tool_call_output\"",
            "\"type\": \"custom_tool_call_output\"",
        )
        || contains_json_field(
            head,
            "\"type\":\"tool_search_output\"",
            "\"type\": \"tool_search_output\"",
        )
        || contains_json_field(
            head,
            "\"type\":\"web_search_call\"",
            "\"type\": \"web_search_call\"",
        ))
}

#[derive(Default)]
struct LiveCueBuilder {
    cues: LiveTailCues,
    active_tool_calls: HashMap<String, LiveToolCue>,
    completed_tool_calls: Vec<LiveToolCue>,
}

struct LiveToolCompletion<'a> {
    call_id: &'a str,
    event_index: usize,
    completed_at: Option<String>,
    status: &'a str,
    output_preview: Option<String>,
    duration_ms: Option<u64>,
    fallback_name: &'a str,
}

impl LiveCueBuilder {
    fn observe_line(&mut self, line: &str, event_index: usize) {
        let Ok(entry) = serde_json::from_str::<JsonlEntry>(line) else {
            return;
        };

        match entry.entry_type.as_str() {
            "event_msg" => self.observe_event_msg(&entry, event_index),
            "response_item" => self.observe_response_item(&entry, event_index),
            _ => {}
        }
    }

    fn observe_event_msg(&mut self, entry: &JsonlEntry, event_index: usize) {
        let Some(payload_type) = entry.payload.get("type").and_then(Value::as_str) else {
            return;
        };

        match payload_type {
            "user_message" => {
                let message = entry
                    .payload
                    .get("message")
                    .and_then(Value::as_str)
                    .unwrap_or_default();
                if looks_like_subagent_notification(message) {
                    self.completed_tool_calls
                        .push(call_from_subagent_notification(entry, event_index, message));
                } else {
                    self.observe_prompt_text(
                        entry,
                        event_index,
                        compact_text(message, MESSAGE_PREVIEW_CHARS),
                    );
                }
            }
            "agent_message" => {
                self.observe_assistant_preview(
                    event_index,
                    entry
                        .payload
                        .get("message")
                        .and_then(Value::as_str)
                        .map(|message| compact_text(message, MESSAGE_PREVIEW_CHARS)),
                );
            }
            "token_count" => {
                self.cues.latest_token_sample = token_sample_from_event(entry, event_index);
            }
            "patch_apply_end" => {
                self.observe_patch_or_mcp_completion(entry, event_index, "apply_patch");
            }
            "mcp_tool_call_end" => {
                self.observe_patch_or_mcp_completion(entry, event_index, "mcp_tool");
            }
            _ => {}
        }
    }

    fn observe_response_item(&mut self, entry: &JsonlEntry, event_index: usize) {
        let Some(item_type) = entry.payload.get("type").and_then(Value::as_str) else {
            return;
        };

        match item_type {
            "message" => self.observe_message_item(entry, event_index),
            "function_call" => self.observe_tool_start(call_from_function_call(
                entry,
                event_index,
                "function_call",
            )),
            "custom_tool_call" => {
                self.observe_tool_start(call_from_custom_tool_call(entry, event_index))
            }
            "tool_search_call" => {
                self.observe_tool_start(call_from_tool_search_call(entry, event_index))
            }
            "function_call_output" | "custom_tool_call_output" | "tool_search_output" => {
                self.observe_response_item_completion(entry, event_index, item_type);
            }
            "web_search_call" => {
                self.completed_tool_calls
                    .push(call_from_web_search_call(entry, event_index));
            }
            _ => {}
        }
    }

    fn observe_message_item(&mut self, entry: &JsonlEntry, event_index: usize) {
        let role = entry
            .payload
            .get("role")
            .and_then(Value::as_str)
            .unwrap_or("message");
        let raw_text = extract_content_text(&entry.payload);
        let text = compact_text(&raw_text, MESSAGE_PREVIEW_CHARS);
        if text.trim().is_empty() {
            return;
        }

        match role {
            "user" if !looks_like_environment_context(&raw_text) => {
                if looks_like_subagent_notification(&raw_text) {
                    self.completed_tool_calls
                        .push(call_from_subagent_notification(
                            entry,
                            event_index,
                            &raw_text,
                        ));
                } else {
                    self.observe_prompt_text(entry, event_index, text);
                }
            }
            "assistant" => {
                self.observe_assistant_preview(event_index, Some(text));
            }
            _ => {}
        }
    }

    fn observe_prompt_text(&mut self, entry: &JsonlEntry, event_index: usize, text: String) {
        if text.trim().is_empty() {
            return;
        }

        self.cues.pending_prompt = Some(LivePromptCue {
            id: format!("live-prompt-{event_index}"),
            event_index,
            timestamp: entry.timestamp.clone(),
            title: prompt_title(&text),
            text,
        });
    }

    fn observe_assistant_preview(&mut self, event_index: usize, preview: Option<String>) {
        self.cues.assistant_streaming = true;
        self.cues.latest_assistant_event_index = Some(event_index);
        self.cues.latest_assistant_preview = preview;
    }

    fn observe_tool_start(&mut self, call: LiveToolCue) {
        self.active_tool_calls.insert(call.id.clone(), call);
    }

    fn observe_response_item_completion(
        &mut self,
        entry: &JsonlEntry,
        event_index: usize,
        item_type: &str,
    ) {
        let Some(call_id) = entry.payload.get("call_id").and_then(Value::as_str) else {
            return;
        };
        let status = entry
            .payload
            .get("status")
            .and_then(Value::as_str)
            .unwrap_or("completed");
        let output_preview = match item_type {
            "tool_search_output" => entry
                .payload
                .get("tools")
                .map(|output| value_preview_limited(output, OUTPUT_PREVIEW_CHARS)),
            _ => entry
                .payload
                .get("output")
                .map(|output| value_preview_limited(output, OUTPUT_PREVIEW_CHARS)),
        };
        self.complete_tool_call(LiveToolCompletion {
            call_id,
            event_index,
            completed_at: entry.timestamp.clone(),
            status,
            output_preview,
            duration_ms: None,
            fallback_name: item_type,
        });
    }

    fn observe_patch_or_mcp_completion(
        &mut self,
        entry: &JsonlEntry,
        event_index: usize,
        fallback_name: &str,
    ) {
        let call_id = entry
            .payload
            .get("call_id")
            .and_then(Value::as_str)
            .unwrap_or(fallback_name);
        let status = entry
            .payload
            .get("status")
            .and_then(Value::as_str)
            .unwrap_or_else(|| {
                if entry
                    .payload
                    .get("success")
                    .and_then(Value::as_bool)
                    .unwrap_or(false)
                {
                    "completed"
                } else {
                    "failed"
                }
            });
        let output_preview = entry
            .payload
            .get("result")
            .or_else(|| entry.payload.get("stdout"))
            .or_else(|| entry.payload.get("stderr"))
            .map(|output| value_preview_limited(output, OUTPUT_PREVIEW_CHARS));
        let duration_ms = entry.payload.get("duration").and_then(Value::as_u64);
        self.complete_tool_call(LiveToolCompletion {
            call_id,
            event_index,
            completed_at: entry.timestamp.clone(),
            status,
            output_preview,
            duration_ms,
            fallback_name,
        });
    }

    fn complete_tool_call(&mut self, completion: LiveToolCompletion<'_>) {
        let mut call = self
            .active_tool_calls
            .remove(completion.call_id)
            .unwrap_or_else(|| LiveToolCue {
                id: completion.call_id.to_owned(),
                event_index: completion.event_index,
                started_at: None,
                completed_at: None,
                name: completion.fallback_name.to_owned(),
                kind: classify_call(completion.fallback_name),
                status: "running".to_owned(),
                duration_ms: None,
                argument_preview: String::new(),
                output_preview: None,
                assistant_message_id: None,
                subagent_session_path: None,
                subagent_nodes: Vec::new(),
            });
        call.event_index = completion.event_index;
        call.completed_at = completion.completed_at;
        call.status = completion.status.to_owned();
        call.duration_ms = completion.duration_ms.or(call.duration_ms);
        if completion.output_preview.is_some() {
            call.output_preview = completion.output_preview;
        }
        self.completed_tool_calls.push(call);
    }

    fn finish(mut self) -> LiveTailCues {
        let mut active_tool_calls = self.active_tool_calls.into_values().collect::<Vec<_>>();
        active_tool_calls.sort_by_key(|call| call.event_index);
        if active_tool_calls.len() > JSON_PREVIEW_MAX_ITEMS {
            active_tool_calls =
                active_tool_calls.split_off(active_tool_calls.len() - JSON_PREVIEW_MAX_ITEMS);
        }

        if self.completed_tool_calls.len() > JSON_PREVIEW_MAX_ITEMS {
            self.completed_tool_calls = self
                .completed_tool_calls
                .split_off(self.completed_tool_calls.len() - JSON_PREVIEW_MAX_ITEMS);
        }
        self.cues.active_tool_calls = active_tool_calls;
        self.cues.completed_tool_calls = self.completed_tool_calls;
        self.cues
    }
}

fn call_from_function_call(
    entry: &JsonlEntry,
    event_index: usize,
    fallback_name: &str,
) -> LiveToolCue {
    let name = entry
        .payload
        .get("name")
        .and_then(Value::as_str)
        .unwrap_or(fallback_name)
        .to_owned();
    let call_id = entry
        .payload
        .get("call_id")
        .and_then(Value::as_str)
        .map(str::to_owned)
        .unwrap_or_else(|| format!("call-{event_index}"));
    let parsed_arguments = parse_arguments(
        entry
            .payload
            .get("arguments")
            .cloned()
            .unwrap_or_else(|| json!({})),
    );
    LiveToolCue {
        id: call_id,
        event_index,
        started_at: entry.timestamp.clone(),
        completed_at: None,
        name: name.clone(),
        kind: classify_call(&name),
        status: "running".to_owned(),
        duration_ms: None,
        argument_preview: value_preview_limited(&parsed_arguments, ARGUMENT_PREVIEW_CHARS),
        output_preview: None,
        assistant_message_id: None,
        subagent_session_path: None,
        subagent_nodes: Vec::new(),
    }
}

fn call_from_custom_tool_call(entry: &JsonlEntry, event_index: usize) -> LiveToolCue {
    let name = entry
        .payload
        .get("name")
        .and_then(Value::as_str)
        .unwrap_or("custom_tool_call")
        .to_owned();
    let call_id = entry
        .payload
        .get("call_id")
        .and_then(Value::as_str)
        .map(str::to_owned)
        .unwrap_or_else(|| format!("custom-call-{event_index}"));
    let input = entry
        .payload
        .get("input")
        .cloned()
        .unwrap_or_else(|| json!({}));
    let mut call = LiveToolCue {
        id: call_id,
        event_index,
        started_at: entry.timestamp.clone(),
        completed_at: None,
        name: name.clone(),
        kind: classify_call(&name),
        status: "running".to_owned(),
        duration_ms: None,
        argument_preview: value_preview_limited(&input, ARGUMENT_PREVIEW_CHARS),
        output_preview: None,
        assistant_message_id: None,
        subagent_session_path: None,
        subagent_nodes: Vec::new(),
    };
    if let Some(status) = entry.payload.get("status").and_then(Value::as_str) {
        call.status = status.to_owned();
    }
    call
}

fn call_from_tool_search_call(entry: &JsonlEntry, event_index: usize) -> LiveToolCue {
    let call_id = entry
        .payload
        .get("call_id")
        .and_then(Value::as_str)
        .map(str::to_owned)
        .unwrap_or_else(|| format!("tool-search-{event_index}"));
    let arguments = entry
        .payload
        .get("arguments")
        .cloned()
        .unwrap_or_else(|| json!({}));
    LiveToolCue {
        id: call_id,
        event_index,
        started_at: entry.timestamp.clone(),
        completed_at: None,
        name: "tool.search".to_owned(),
        kind: "coordination".to_owned(),
        status: entry
            .payload
            .get("status")
            .and_then(Value::as_str)
            .unwrap_or("running")
            .to_owned(),
        duration_ms: None,
        argument_preview: value_preview_limited(&arguments, ARGUMENT_PREVIEW_CHARS),
        output_preview: None,
        assistant_message_id: None,
        subagent_session_path: None,
        subagent_nodes: Vec::new(),
    }
}

fn call_from_web_search_call(entry: &JsonlEntry, event_index: usize) -> LiveToolCue {
    let parsed_arguments = entry
        .payload
        .get("action")
        .cloned()
        .unwrap_or_else(|| entry.payload.clone());
    LiveToolCue {
        id: format!("web-{event_index}"),
        event_index,
        started_at: entry.timestamp.clone(),
        completed_at: entry.timestamp.clone(),
        name: "web.search".to_owned(),
        kind: "web".to_owned(),
        status: entry
            .payload
            .get("status")
            .and_then(Value::as_str)
            .unwrap_or("completed")
            .to_owned(),
        duration_ms: None,
        argument_preview: value_preview_limited(&parsed_arguments, ARGUMENT_PREVIEW_CHARS),
        output_preview: None,
        assistant_message_id: None,
        subagent_session_path: None,
        subagent_nodes: Vec::new(),
    }
}

fn call_from_subagent_notification(entry: &JsonlEntry, event_index: usize, text: &str) -> CallNode {
    let payload = subagent_notification_payload(text);
    let agent_path = payload
        .as_ref()
        .and_then(|payload| payload.get("agent_path"))
        .and_then(Value::as_str)
        .or_else(|| {
            payload
                .as_ref()
                .and_then(|payload| payload.get("agent_id"))
                .and_then(Value::as_str)
        });
    let (status, output_preview) = subagent_status_preview(payload.as_ref(), text);
    CallNode {
        id: format!("subagent-{event_index}"),
        event_index,
        started_at: None,
        completed_at: entry.timestamp.clone(),
        name: "subagent".to_owned(),
        kind: "coordination".to_owned(),
        status,
        duration_ms: None,
        argument_preview: agent_path
            .map(|path| format!("agent: {path}"))
            .unwrap_or_else(|| "subagent notification".to_owned()),
        output_preview,
        assistant_message_id: None,
        subagent_session_path: None,
        subagent_nodes: Vec::new(),
    }
}

fn looks_like_subagent_notification(text: &str) -> bool {
    text.trim_start().starts_with("<subagent_notification>")
}

fn subagent_notification_payload(text: &str) -> Option<Value> {
    let body = text.trim().strip_prefix("<subagent_notification>")?.trim();
    let body = body
        .strip_suffix("</subagent_notification>")
        .unwrap_or(body)
        .trim();
    serde_json::from_str(body).ok()
}

fn subagent_status_preview(payload: Option<&Value>, text: &str) -> (String, Option<String>) {
    let Some(status) = payload.and_then(|payload| payload.get("status")) else {
        return (
            "completed".to_owned(),
            Some(compact_text(text, OUTPUT_PREVIEW_CHARS)),
        );
    };

    if let Some(completed) = status.get("completed") {
        return (
            "completed".to_owned(),
            Some(value_preview_limited(completed, OUTPUT_PREVIEW_CHARS)),
        );
    }
    if let Some(failed) = status.get("failed").or_else(|| status.get("error")) {
        return (
            "error".to_owned(),
            Some(value_preview_limited(failed, OUTPUT_PREVIEW_CHARS)),
        );
    }
    if let Some(status_text) = status.as_str() {
        return (status_text.to_owned(), None);
    }
    if let Some((name, value)) = status.as_object().and_then(|object| object.iter().next()) {
        return (
            if name.contains("fail") || name.contains("error") {
                "error".to_owned()
            } else {
                name.to_owned()
            },
            Some(value_preview_limited(value, OUTPUT_PREVIEW_CHARS)),
        );
    }

    (
        "completed".to_owned(),
        Some(value_preview_limited(status, OUTPUT_PREVIEW_CHARS)),
    )
}

fn codex_tail_activity(head: &str) -> Option<TailActivity> {
    if contains_json_field(head, "\"type\":\"event_msg\"", "\"type\": \"event_msg\"") {
        if contains_json_field(
            head,
            "\"type\":\"task_started\"",
            "\"type\": \"task_started\"",
        ) {
            return Some(TailActivity::TaskStarted);
        }
        if contains_json_field(
            head,
            "\"type\":\"task_complete\"",
            "\"type\": \"task_complete\"",
        ) || contains_json_field(
            head,
            "\"type\":\"context_compacted\"",
            "\"type\": \"context_compacted\"",
        ) {
            return Some(TailActivity::TaskEnded);
        }
        if contains_json_field(
            head,
            "\"type\":\"agent_message\"",
            "\"type\": \"agent_message\"",
        ) {
            return Some(TailActivity::RenderableTurn);
        }
        return None;
    }

    if line_has_compaction_event(head) {
        return Some(TailActivity::TaskEnded);
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
        return Some(TailActivity::RenderableTurn);
    }

    if contains_json_field(
        head,
        "\"type\":\"response_item\"",
        "\"type\": \"response_item\"",
    ) {
        return Some(TailActivity::RenderableTurn);
    }

    None
}

fn status_signature(status: &SessionStatus) -> SessionStatusSignature {
    SessionStatusSignature {
        last_modified_at: status.last_modified_at.clone(),
        line_count: status.line_count,
        latest_event_index: status.latest_event_index,
        byte_length: status.byte_length,
        processed_byte_length: status.processed_byte_length,
        pending_bytes: status.pending_bytes,
        graph_changed: status.graph_changed,
        renderable_event_count: status.renderable_event_count,
        compaction_in_progress: status.compaction_in_progress,
        live_cues: status.live_cues.clone(),
        is_live: status.is_live,
    }
}

fn renderable_event_count(totals: &SessionTotals) -> usize {
    totals.prompt_count
        + totals.call_count
        + totals.assistant_message_count
        + totals.file_change_count
        + totals.compaction_count
}
