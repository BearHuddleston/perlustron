// SPDX-License-Identifier: MIT OR Apache-2.0

use super::*;

mod redaction;

fn temp_jsonl_path(test_name: &str) -> PathBuf {
    let nanos = SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .unwrap()
        .as_nanos();
    env::temp_dir().join(format!(
        "agent-space-{test_name}-{}-{nanos}.jsonl",
        std::process::id()
    ))
}

fn fixture_path(name: &str) -> PathBuf {
    PathBuf::from(env!("CARGO_MANIFEST_DIR"))
        .join("fixtures")
        .join(name)
}

fn completed_tool_event(
    id: &str,
    line_number: usize,
    title: &str,
    tool_name: &str,
    argument_preview: &str,
    output_preview: &str,
) -> FlatTraceEvent {
    FlatTraceEvent {
        id: id.to_owned(),
        line_number,
        event_index: line_number.saturating_sub(1),
        normalized_type: "tool_call".to_owned(),
        title: title.to_owned(),
        text: format!("{argument_preview}\n{output_preview}"),
        tool_name: Some(tool_name.to_owned()),
        status: Some("completed".to_owned()),
        duration_ms: None,
        output_preview: Some(output_preview.to_owned()),
    }
}

fn codex_message_line(role: &str, text: &str) -> String {
    let content_type = if role == "user" {
        "input_text"
    } else {
        "output_text"
    };
    json!({
        "timestamp": "2026-05-10T16:04:02.287Z",
        "type": "response_item",
        "payload": {
            "type": "message",
            "role": role,
            "content": [{ "type": content_type, "text": text }]
        }
    })
    .to_string()
}

fn subagent_notification_text() -> String {
    "<subagent_notification>\n{\"agent_path\":\"agent-123\",\"status\":{\"completed\":\"Findings:\\n\\n- Reuse existing helper.\"}}\n</subagent_notification>".to_owned()
}

fn codex_task_started_line(turn_id: &str) -> String {
    json!({
        "timestamp": "2026-05-10T16:04:03.287Z",
        "type": "event_msg",
        "payload": {
            "type": "task_started",
            "turn_id": turn_id,
            "started_at": 1778464399,
            "model_context_window": 258400
        }
    })
    .to_string()
}

fn codex_task_complete_line(turn_id: &str) -> String {
    json!({
        "timestamp": "2026-05-10T16:04:04.287Z",
        "type": "event_msg",
        "payload": {
            "type": "task_complete",
            "turn_id": turn_id,
            "completed_at": 1778464404
        }
    })
    .to_string()
}

#[test]
fn resolves_explicit_selected_session_path() {
    let path = temp_jsonl_path("explicit-session-select");
    fs::write(
        &path,
        codex_message_line("user", "select this session") + "\n",
    )
    .unwrap();
    let mut explicit_paths = HashMap::new();
    explicit_paths.insert(SessionSource::Codex, path.clone());

    let resolved = resolve_requested_session_path(
        SessionSource::Codex,
        &explicit_paths,
        &path.display().to_string(),
    )
    .unwrap();

    let _ = fs::remove_file(&path);
    assert!(same_file_path(&resolved, &path));
}

#[test]
fn rejects_selected_session_with_non_jsonl_extension() {
    let path = temp_jsonl_path("invalid-session-select").with_extension("txt");
    fs::write(&path, "not jsonl").unwrap();
    let explicit_paths = HashMap::new();

    let error = resolve_requested_session_path(
        SessionSource::Codex,
        &explicit_paths,
        &path.display().to_string(),
    )
    .unwrap_err()
    .to_string();

    let _ = fs::remove_file(&path);
    assert!(error.contains("not a JSONL file"));
}

#[test]
fn parses_codex_compacted_checkpoint() {
    let line = json!({
        "timestamp": "2026-05-10T16:04:02.287Z",
        "type": "compacted",
        "payload": {
            "message": "",
            "replacement_history": [
                {
                    "type": "message",
                    "role": "user",
                    "content": [{ "type": "input_text", "text": "first prompt" }]
                },
                {
                    "type": "message",
                    "role": "assistant",
                    "content": [{ "type": "output_text", "text": "first answer" }]
                },
                {
                    "type": "compaction",
                    "encrypted_content": "abc123"
                }
            ]
        }
    })
    .to_string();
    let mut state = SessionParseState::new();

    state.apply_line(SessionSource::Codex, &line, 42).unwrap();

    assert_eq!(state.compactions.len(), 1);
    let compaction = &state.compactions[0];
    assert_eq!(compaction.id, "compaction-42");
    assert_eq!(compaction.replaced_message_count, 2);
    assert!(compaction.encrypted);
    assert!(compaction.text.contains("Compacted 2 prior messages"));
    assert!(
        compaction
            .detail
            .contains("summary: encrypted in session log")
    );
}

#[test]
fn parses_codex_patch_apply_file_changes() {
    let call_line = json!({
        "timestamp": "2026-05-10T16:04:02.287Z",
        "type": "response_item",
        "payload": {
            "type": "custom_tool_call",
            "name": "apply_patch",
            "call_id": "call_patch",
            "input": "*** Begin Patch\n*** Update File: src/main.rs\n*** End Patch"
        }
    })
    .to_string();
    let patch_line = json!({
        "timestamp": "2026-05-10T16:04:03.287Z",
        "type": "event_msg",
        "payload": {
            "type": "patch_apply_end",
            "call_id": "call_patch",
            "stdout": "Success. Updated the following files:\nM src/main.rs\nA static/app.js\n",
            "stderr": "",
            "success": true,
            "changes": {
                "C:\\Projects\\agent-space\\src\\main.rs": {
                    "type": "update",
                    "unified_diff": "@@ -1 +1 @@\n-old\n+new"
                },
                "C:\\Projects\\agent-space\\static\\app.js": {
                    "type": "add",
                    "content": "console.log('new');"
                }
            }
        }
    })
    .to_string();
    let mut state = SessionParseState::new();

    state
        .apply_line(SessionSource::Codex, &call_line, 1)
        .unwrap();
    state
        .apply_line(SessionSource::Codex, &patch_line, 2)
        .unwrap();

    assert_eq!(state.prompts.len(), 1);
    assert_eq!(state.prompts[0].calls[0].event_index, 2);
    assert_eq!(state.prompts[0].calls[0].status, "completed");
    assert_eq!(state.prompts[0].file_changes.len(), 2);
    assert!(
        state.prompts[0]
            .file_changes
            .iter()
            .any(|change| change.change_type == "add"
                && change.short_path == "agent-space/static/app.js")
    );
    assert!(
        state.prompts[0]
            .file_changes
            .iter()
            .any(|change| change.change_type == "update" && change.preview.contains("@@ -1 +1 @@"))
    );
}

#[test]
fn completed_codex_call_uses_completion_event_index() {
    let call_line = json!({
        "timestamp": "2026-05-10T16:04:02.287Z",
        "type": "response_item",
        "payload": {
            "type": "function_call",
            "name": "shell_command",
            "call_id": "call_shell",
            "arguments": "{}"
        }
    })
    .to_string();
    let output_line = json!({
        "timestamp": "2026-05-10T16:04:03.287Z",
        "type": "response_item",
        "payload": {
            "type": "function_call_output",
            "call_id": "call_shell",
            "output": "done"
        }
    })
    .to_string();
    let mut state = SessionParseState::new();

    state
        .apply_line(SessionSource::Codex, &call_line, 10)
        .unwrap();
    state
        .apply_line(SessionSource::Codex, &output_line, 12)
        .unwrap();

    assert_eq!(state.prompts.len(), 1);
    let call = &state.prompts[0].calls[0];
    assert_eq!(call.event_index, 12);
    assert_eq!(call.status, "completed");
    assert_eq!(call.output_preview.as_deref(), Some("done"));
}

#[test]
fn codex_tool_payloads_preserve_full_nested_arguments_and_output() {
    let arguments = json!({
        "plan": [
            {
                "status": "completed",
                "step": "inspect the full nested update_plan payload"
            },
            {
                "status": "in_progress",
                "step": "verify transcript renders without depth placeholders"
            }
        ]
    })
    .to_string();
    let long_output = "x".repeat(732);
    let call_line = json!({
        "timestamp": "2026-05-10T16:04:02.287Z",
        "type": "response_item",
        "payload": {
            "type": "function_call",
            "name": "update_plan",
            "call_id": "call_plan",
            "arguments": arguments
        }
    })
    .to_string();
    let output_line = json!({
        "timestamp": "2026-05-10T16:04:03.287Z",
        "type": "response_item",
        "payload": {
            "type": "function_call_output",
            "call_id": "call_plan",
            "output": long_output
        }
    })
    .to_string();
    let mut state = SessionParseState::new();

    state
        .apply_line(SessionSource::Codex, &call_line, 10)
        .unwrap();
    state
        .apply_line(SessionSource::Codex, &output_line, 12)
        .unwrap();

    let call = &state.prompts[0].calls[0];
    assert!(call.argument_preview.contains("\"status\": \"completed\""));
    assert!(
        call.argument_preview
            .contains("inspect the full nested update_plan payload")
    );
    assert_eq!(call.output_preview.as_deref().map(str::len), Some(732));
    assert_eq!(call.output_preview.as_deref(), Some(long_output.as_str()));
}

#[test]
fn codex_calls_link_to_preceding_assistant_message() {
    let mut state = SessionParseState::new();
    state
        .apply_line(
            SessionSource::Codex,
            &codex_message_line("user", "inspect grouping"),
            0,
        )
        .unwrap();
    state
        .apply_line(
            SessionSource::Codex,
            &codex_message_line("assistant", "I will inspect files."),
            1,
        )
        .unwrap();
    state
        .apply_line(
            SessionSource::Codex,
            &json!({
                "timestamp": "2026-05-10T16:04:03.287Z",
                "type": "response_item",
                "payload": {
                    "type": "function_call",
                    "name": "shell_command",
                    "call_id": "call_grouped",
                    "arguments": {"command": "rg --files"}
                }
            })
            .to_string(),
            2,
        )
        .unwrap();

    let prompt = &state.prompts[0];
    assert_eq!(prompt.assistant_messages.len(), 1);
    assert_eq!(
        prompt.calls[0].assistant_message_id.as_deref(),
        Some(prompt.assistant_messages[0].id.as_str())
    );
}

#[test]
fn codex_final_assistant_message_groups_prior_calls() {
    let mut state = SessionParseState::new();
    state
        .apply_line(
            SessionSource::Codex,
            &codex_message_line("user", "inspect final grouping"),
            0,
        )
        .unwrap();
    state
        .apply_line(
            SessionSource::Codex,
            &json!({
                "timestamp": "2026-05-10T16:04:03.287Z",
                "type": "response_item",
                "payload": {
                    "type": "function_call",
                    "name": "shell_command",
                    "call_id": "call_final_grouped",
                    "arguments": {"command": "rg --files"}
                }
            })
            .to_string(),
            1,
        )
        .unwrap();
    state
        .apply_line(
            SessionSource::Codex,
            &json!({
                "timestamp": "2026-05-10T16:04:04.287Z",
                "type": "response_item",
                "payload": {
                    "type": "function_call_output",
                    "call_id": "call_final_grouped",
                    "output": "README.md\n"
                }
            })
            .to_string(),
            2,
        )
        .unwrap();
    state
        .apply_line(
            SessionSource::Codex,
            &codex_message_line("assistant", "I inspected the files."),
            3,
        )
        .unwrap();

    let prompt = &state.prompts[0];
    assert_eq!(prompt.assistant_messages.len(), 1);
    assert_eq!(
        prompt.calls[0].assistant_message_id.as_deref(),
        Some(prompt.assistant_messages[0].id.as_str())
    );
}

#[test]
fn claude_tool_uses_link_to_same_assistant_message() {
    let mut state = SessionParseState::new_for_source(SessionSource::Claude);
    state
        .apply_line(
            SessionSource::Claude,
            &json!({
                "timestamp": "2026-05-10T17:00:00Z",
                "type": "user",
                "sessionId": "claude-grouping",
                "message": {"content": [{"type": "text", "text": "inspect grouping"}]}
            })
            .to_string(),
            0,
        )
        .unwrap();
    state
        .apply_line(
            SessionSource::Claude,
            &json!({
                "timestamp": "2026-05-10T17:00:01Z",
                "type": "assistant",
                "sessionId": "claude-grouping",
                "message": {
                    "content": [
                        {"type": "text", "text": "I will read the file."},
                        {"type": "tool_use", "id": "toolu_grouped", "name": "Read", "input": {"file_path": "README.md"}}
                    ]
                }
            })
            .to_string(),
            1,
        )
        .unwrap();

    let prompt = &state.prompts[0];
    assert_eq!(prompt.assistant_messages.len(), 1);
    assert_eq!(
        prompt.calls[0].assistant_message_id.as_deref(),
        Some(prompt.assistant_messages[0].id.as_str())
    );
}

#[test]
fn parses_subagent_notifications_as_side_calls() {
    let prompt_line = codex_message_line("user", "use subagents");
    let subagent_line = codex_message_line("user", &subagent_notification_text());
    let mut state = SessionParseState::new();

    state
        .apply_line(SessionSource::Codex, &prompt_line, 10)
        .unwrap();
    state
        .apply_line(SessionSource::Codex, &subagent_line, 12)
        .unwrap();

    assert_eq!(state.prompts.len(), 1);
    assert_eq!(state.prompts[0].title, "use subagents");
    assert_eq!(state.prompts[0].calls.len(), 1);
    let call = &state.prompts[0].calls[0];
    assert_eq!(call.id, "subagent-12");
    assert_eq!(call.name, "subagent");
    assert_eq!(call.kind, "coordination");
    assert_eq!(call.status, "completed");
    assert!(call.argument_preview.contains("agent-123"));
    assert!(
        call.output_preview
            .as_deref()
            .unwrap_or_default()
            .contains("Reuse existing helper")
    );
}

#[test]
fn attaches_subagent_session_nodes_to_spawn_call() {
    let root = temp_jsonl_path("subagent-root").with_extension("");
    let _ = fs::remove_dir_all(&root);
    fs::create_dir_all(&root).unwrap();
    let agent_id = "019e1704-test-agent";
    let parent_path = root.join("rollout-main.jsonl");
    let child_path = root.join(format!("rollout-2026-05-11T07-30-37-{agent_id}.jsonl"));
    let parent = [
        codex_message_line("user", "use subagents"),
        json!({
            "timestamp": "2026-05-10T16:04:03.287Z",
            "type": "response_item",
            "payload": {
                "type": "function_call",
                "name": "spawn_agent",
                "call_id": "spawn_agent_1",
                "arguments": { "agent_type": "explorer" }
            }
        })
        .to_string(),
        json!({
            "timestamp": "2026-05-10T16:04:04.287Z",
            "type": "response_item",
            "payload": {
                "type": "function_call_output",
                "call_id": "spawn_agent_1",
                "output": { "agent_id": agent_id, "nickname": "Curie" }
            }
        })
        .to_string(),
    ]
    .join("\n");
    let child_prompt = format!(
        "inspect child graph {}",
        "with full prompt detail ".repeat(80)
    )
    .trim_end()
    .to_owned();
    let mut child_lines = vec![codex_message_line("user", &child_prompt)];
    for index in 0..80 {
        child_lines.push(
            json!({
                "timestamp": "2026-05-10T16:04:05.287Z",
                "type": "response_item",
                "payload": {
                    "type": "function_call",
                    "name": "shell_command",
                    "call_id": format!("child_shell_{index}"),
                    "arguments": { "command": format!("rg TODO {index}") }
                }
            })
            .to_string(),
        );
    }
    let child = child_lines.join("\n");
    fs::write(&parent_path, parent + "\n").unwrap();
    fs::write(&child_path, child + "\n").unwrap();

    let graph = parse_session_jsonl(
        SessionSource::Codex,
        &parent_path,
        fs::metadata(&parent_path).unwrap().len(),
        fs::metadata(&parent_path).unwrap().modified().unwrap(),
    )
    .unwrap();

    let call = &graph.prompts[0].calls[0];
    assert_eq!(call.name, "spawn_agent");
    let expected_child_path = child_path.display().to_string();
    assert_eq!(
        call.subagent_session_path.as_deref(),
        Some(expected_child_path.as_str())
    );
    assert!(call.subagent_nodes.iter().any(|node| {
        node.name == "subagent.prompt"
            && node.output_preview.as_deref() == Some(child_prompt.as_str())
    }));
    assert!(call.subagent_nodes.len() >= 81);
    assert!(
        !call
            .subagent_nodes
            .iter()
            .any(|node| node.name == "subagent.more")
    );
    assert!(
        call.subagent_nodes
            .iter()
            .any(|node| node.name == "shell_command")
    );

    fs::remove_dir_all(root).unwrap();
}

#[test]
fn child_subagent_session_changes_invalidate_cached_status() {
    let root = temp_jsonl_path("subagent-cache-root").with_extension("");
    fs::create_dir_all(&root).unwrap();
    let agent_id = "019e1704-cache-agent";
    let parent_path = root.join("rollout-main.jsonl");
    let child_path = root.join(format!("rollout-2026-05-11T07-30-37-{agent_id}.jsonl"));
    let parent = [
        codex_message_line("user", "use subagents"),
        json!({
            "timestamp": "2026-05-10T16:04:03.287Z",
            "type": "response_item",
            "payload": {
                "type": "function_call",
                "name": "spawn_agent",
                "call_id": "spawn_agent_1",
                "arguments": { "agent_type": "explorer" }
            }
        })
        .to_string(),
        json!({
            "timestamp": "2026-05-10T16:04:04.287Z",
            "type": "response_item",
            "payload": {
                "type": "function_call_output",
                "call_id": "spawn_agent_1",
                "output": { "agent_id": agent_id, "nickname": "Curie" }
            }
        })
        .to_string(),
    ]
    .join("\n");
    let child_initial = codex_message_line("user", "inspect child graph") + "\n";
    fs::write(&parent_path, parent + "\n").unwrap();
    fs::write(&child_path, child_initial.clone()).unwrap();

    let cache = Mutex::new(HashMap::new());
    let graph = load_session_graph(SessionSource::Codex, &parent_path, &cache).unwrap();
    assert_eq!(graph.prompts[0].calls[0].subagent_nodes.len(), 1);

    fs::write(
        &child_path,
        child_initial + &codex_message_line("assistant", "child answer") + "\n",
    )
    .unwrap();
    let status = load_session_status(SessionSource::Codex, &parent_path, &cache).unwrap();

    assert!(status.graph_changed);

    fs::remove_dir_all(root).unwrap();
}

#[test]
fn preserves_plain_compaction_summary_when_available() {
    let entry = JsonlEntry {
        timestamp: Some("2026-05-10T16:04:02.287Z".to_owned()),
        entry_type: "summary".to_owned(),
        payload: json!({
            "summary": "The session was summarized around the sidebar work.",
            "reason": "token budget"
        }),
    };

    let compaction = compaction_node_from_codex_entry(&entry, 7).unwrap();

    assert_eq!(
        compaction.text,
        "The session was summarized around the sidebar work."
    );
    assert_eq!(compaction.reason.as_deref(), Some("token budget"));
    assert!(!compaction.encrypted);
    assert!(compaction.detail.contains("summary: plain text"));
}

#[test]
fn parses_claude_summary_as_compaction_checkpoint() {
    let entry = json!({
        "timestamp": "2026-05-10T16:04:02.287Z",
        "type": "summary",
        "summary": "Previous work was summarized for the next turn.",
        "reason": "context window"
    });
    let mut state = SessionParseState::new();

    state
        .apply_line(SessionSource::Claude, &entry.to_string(), 9)
        .unwrap();

    assert_eq!(state.compactions.len(), 1);
    let compaction = &state.compactions[0];
    assert_eq!(compaction.title, "Context summarized");
    assert_eq!(
        compaction.text,
        "Previous work was summarized for the next turn."
    );
    assert_eq!(compaction.reason.as_deref(), Some("context window"));
}

#[test]
fn parses_claude_assistant_when_type_follows_large_message_payload() {
    let path = temp_jsonl_path("claude-late-assistant-type");
    let prompt_line = json!({
        "parentUuid": null,
        "isSidechain": false,
        "promptId": "prompt-late-type",
        "type": "user",
        "message": {
            "role": "user",
            "content": "Check the late assistant type record."
        },
        "uuid": "user-late-type",
        "timestamp": "2026-05-10T17:00:00Z",
        "sessionId": "claude-late-type",
        "cwd": "C:\\Fixtures\\late-type"
    })
    .to_string();
    let padding = "x".repeat(900);
    let assistant_line = format!(
        r#"{{"parentUuid":"user-late-type","isSidechain":false,"message":{{"role":"assistant","padding":"{padding}","content":[{{"type":"text","text":"Assistant response after a late top-level type."}},{{"type":"tool_use","id":"toolu_late","name":"Bash","input":{{"command":"pwd"}}}}]}},"requestId":"req-late","type":"assistant","uuid":"assistant-late-type","timestamp":"2026-05-10T17:00:01Z","sessionId":"claude-late-type","cwd":"C:\\Fixtures\\late-type"}}"#
    );
    assert!(assistant_line.find(r#""type":"assistant""#).unwrap() > 768);
    assert!(line_may_affect_graph(
        SessionSource::Claude,
        &assistant_line
    ));
    fs::write(&path, format!("{prompt_line}\n{assistant_line}\n")).unwrap();
    let metadata = fs::metadata(&path).unwrap();

    let graph = parse_session_jsonl(
        SessionSource::Claude,
        &path,
        metadata.len(),
        metadata.modified().unwrap(),
    )
    .unwrap();

    let _ = fs::remove_file(&path);
    assert_eq!(graph.prompts.len(), 1);
    assert_eq!(graph.prompts[0].calls.len(), 1);
    assert_eq!(graph.prompts[0].calls[0].name, "Bash");
    assert_eq!(graph.prompts[0].assistant_messages.len(), 1);
    assert_eq!(
        graph.prompts[0].assistant_messages[0].text,
        "Assistant response after a late top-level type."
    );
}

#[test]
fn appended_bytes_may_affect_graph_ignores_non_renderable_codex_events() {
    let path = temp_jsonl_path("non-renderable-append");
    let initial = codex_message_line("user", "first prompt") + "\n";
    let append = json!({
        "timestamp": "2026-05-10T16:04:03.287Z",
        "type": "event_msg",
        "payload": { "type": "agent_reasoning_delta", "text": "thinking" }
    })
    .to_string()
        + "\n";
    let start_byte = initial.len() as u64;
    fs::write(&path, initial + &append).unwrap();

    let affects_graph = appended_bytes_may_affect_graph(
        SessionSource::Codex,
        &path,
        start_byte,
        start_byte + append.len() as u64,
    )
    .unwrap();

    let _ = fs::remove_file(&path);
    assert!(!affects_graph);
}

#[test]
fn appended_bytes_may_affect_graph_detects_renderable_codex_events() {
    let path = temp_jsonl_path("renderable-append");
    let initial = codex_message_line("user", "first prompt") + "\n";
    let append = codex_message_line("assistant", "first answer") + "\n";
    let start_byte = initial.len() as u64;
    fs::write(&path, initial + &append).unwrap();

    let affects_graph = appended_bytes_may_affect_graph(
        SessionSource::Codex,
        &path,
        start_byte,
        start_byte + append.len() as u64,
    )
    .unwrap();

    let _ = fs::remove_file(&path);
    assert!(affects_graph);
}

#[test]
fn appended_session_signals_detects_compaction_in_progress() {
    let path = temp_jsonl_path("compaction-progress-append");
    let initial = codex_message_line("user", "first prompt") + "\n";
    let append = codex_task_started_line("maintenance") + "\n";
    let start_byte = initial.len() as u64;
    fs::write(&path, initial + &append).unwrap();

    let signals = appended_session_signals(
        SessionSource::Codex,
        &path,
        start_byte,
        start_byte + append.len() as u64,
        1,
    )
    .unwrap();

    let _ = fs::remove_file(&path);
    assert!(!signals.graph_changed);
    assert!(signals.live_cues.compaction_in_progress);
}

#[test]
fn appended_session_signals_keep_compaction_when_append_also_changes_graph() {
    let path = temp_jsonl_path("compaction-after-renderable-append");
    let initial = codex_message_line("user", "first prompt") + "\n";
    let append = codex_message_line("assistant", "first answer")
        + "\n"
        + &codex_task_complete_line("user-turn")
        + "\n"
        + &codex_task_started_line("maintenance")
        + "\n";
    let start_byte = initial.len() as u64;
    fs::write(&path, initial + &append).unwrap();

    let signals = appended_session_signals(
        SessionSource::Codex,
        &path,
        start_byte,
        start_byte + append.len() as u64,
        1,
    )
    .unwrap();

    let _ = fs::remove_file(&path);
    assert!(signals.graph_changed);
    assert!(signals.live_cues.compaction_in_progress);
}

#[test]
fn appended_session_signals_use_latest_activity_for_stale_cache() {
    let path = temp_jsonl_path("compaction-after-stale-user-turn");
    let initial = codex_message_line("user", "first prompt") + "\n";
    let append = codex_task_started_line("user-turn")
        + "\n"
        + &codex_message_line("user", "next prompt")
        + "\n"
        + &codex_task_complete_line("user-turn")
        + "\n"
        + &codex_task_started_line("maintenance")
        + "\n";
    let start_byte = initial.len() as u64;
    fs::write(&path, initial + &append).unwrap();

    let signals = appended_session_signals(
        SessionSource::Codex,
        &path,
        start_byte,
        start_byte + append.len() as u64,
        1,
    )
    .unwrap();

    let _ = fs::remove_file(&path);
    assert!(signals.graph_changed);
    assert!(signals.live_cues.compaction_in_progress);
}

#[test]
fn load_session_status_reports_compaction_after_task_start_is_cached() {
    let path = temp_jsonl_path("cached-compaction-start");
    let cache = Mutex::new(HashMap::new());
    let initial = codex_message_line("user", "first prompt") + "\n";
    fs::write(&path, &initial).unwrap();
    load_session_graph(SessionSource::Codex, &path, &cache).unwrap();

    let append = codex_task_complete_line("user-turn")
        + "\n"
        + &codex_task_started_line("maintenance")
        + "\n";
    fs::write(&path, initial + &append).unwrap();
    load_session_graph(SessionSource::Codex, &path, &cache).unwrap();

    let status = load_session_status(SessionSource::Codex, &path, &cache).unwrap();

    let _ = fs::remove_file(&path);
    assert!(!status.graph_changed);
    assert_eq!(status.pending_bytes, 0);
    assert!(status.compaction_in_progress);
}

#[test]
fn appended_session_signals_does_not_mark_user_turn_as_compaction() {
    let path = temp_jsonl_path("user-turn-append");
    let initial = codex_message_line("user", "first prompt") + "\n";
    let append = codex_task_started_line("user-turn")
        + "\n"
        + &codex_message_line("user", "next prompt")
        + "\n";
    let start_byte = initial.len() as u64;
    fs::write(&path, initial + &append).unwrap();

    let signals = appended_session_signals(
        SessionSource::Codex,
        &path,
        start_byte,
        start_byte + append.len() as u64,
        1,
    )
    .unwrap();

    let _ = fs::remove_file(&path);
    assert!(signals.graph_changed);
    assert!(!signals.live_cues.compaction_in_progress);
}

#[test]
fn appended_session_signals_reports_prompt_and_assistant_cues() {
    let path = temp_jsonl_path("prompt-assistant-cues");
    let initial = codex_message_line("user", "first prompt") + "\n";
    let append = json!({
        "timestamp": "2026-05-10T16:04:03.287Z",
        "type": "event_msg",
        "payload": {
            "type": "user_message",
            "message": "add live cues"
        }
    })
    .to_string()
        + "\n"
        + &json!({
            "timestamp": "2026-05-10T16:04:04.287Z",
            "type": "event_msg",
            "payload": {
                "type": "agent_message",
                "message": "Working on live cues."
            }
        })
        .to_string()
        + "\n";
    let start_byte = initial.len() as u64;
    fs::write(&path, initial + &append).unwrap();

    let signals = appended_session_signals(
        SessionSource::Codex,
        &path,
        start_byte,
        start_byte + append.len() as u64,
        1,
    )
    .unwrap();

    let _ = fs::remove_file(&path);
    let prompt = signals.live_cues.pending_prompt.unwrap();
    assert_eq!(prompt.event_index, 1);
    assert_eq!(prompt.title, "add live cues");
    assert!(signals.live_cues.assistant_streaming);
    assert_eq!(signals.live_cues.latest_assistant_event_index, Some(2));
}

#[test]
fn appended_session_signals_tracks_tool_call_lifecycle_cues() {
    let path = temp_jsonl_path("tool-cue-lifecycle");
    let initial = codex_message_line("user", "first prompt") + "\n";
    let start_line = json!({
        "timestamp": "2026-05-10T16:04:03.287Z",
        "type": "response_item",
        "payload": {
            "type": "function_call",
            "name": "shell_command",
            "call_id": "call_shell",
            "arguments": "{\"command\":\"git status\"}"
        }
    })
    .to_string();
    let output_line = json!({
        "timestamp": "2026-05-10T16:04:04.287Z",
        "type": "response_item",
        "payload": {
            "type": "function_call_output",
            "call_id": "call_shell",
            "output": "clean"
        }
    })
    .to_string();
    let append = start_line + "\n" + &output_line + "\n";
    let start_byte = initial.len() as u64;
    fs::write(&path, initial + &append).unwrap();

    let signals = appended_session_signals(
        SessionSource::Codex,
        &path,
        start_byte,
        start_byte + append.len() as u64,
        1,
    )
    .unwrap();

    let _ = fs::remove_file(&path);
    assert!(signals.live_cues.active_tool_calls.is_empty());
    assert_eq!(signals.live_cues.completed_tool_calls.len(), 1);
    let call = &signals.live_cues.completed_tool_calls[0];
    assert_eq!(call.id, "call_shell");
    assert_eq!(call.event_index, 2);
    assert_eq!(call.status, "completed");
    assert_eq!(call.output_preview.as_deref(), Some("clean"));
}

#[test]
fn appended_session_signals_treats_subagent_notifications_as_call_cues() {
    let path = temp_jsonl_path("subagent-notification-cues");
    let initial = codex_message_line("user", "use subagents") + "\n";
    let append = codex_message_line("user", &subagent_notification_text()) + "\n";
    let start_byte = initial.len() as u64;
    fs::write(&path, initial + &append).unwrap();

    let signals = appended_session_signals(
        SessionSource::Codex,
        &path,
        start_byte,
        start_byte + append.len() as u64,
        1,
    )
    .unwrap();

    let _ = fs::remove_file(&path);
    assert!(signals.live_cues.pending_prompt.is_none());
    assert_eq!(signals.live_cues.completed_tool_calls.len(), 1);
    let call = &signals.live_cues.completed_tool_calls[0];
    assert_eq!(call.id, "subagent-1");
    assert_eq!(call.kind, "coordination");
    assert_eq!(call.status, "completed");
}

#[test]
fn load_session_status_reparses_shrunk_cached_file() {
    let path = temp_jsonl_path("status-shrink");
    let cache = Mutex::new(HashMap::new());
    fs::write(&path, codex_message_line("user", "first prompt") + "\n").unwrap();

    let first = load_session_status(SessionSource::Codex, &path, &cache).unwrap();
    assert_eq!(first.line_count, 1);

    fs::write(&path, "").unwrap();
    let second = load_session_status(SessionSource::Codex, &path, &cache).unwrap();

    let _ = fs::remove_file(&path);
    assert_eq!(second.line_count, 0);
    assert_eq!(second.byte_length, 0);
    assert_eq!(second.pending_bytes, 0);
    assert!(!second.graph_changed);
}

#[test]
fn cached_unknowns_report_uses_cached_session_graph() {
    let cached_graph =
        parse_graph_for_file(SessionSource::Codex, &fixture_path("codex-sanitized.jsonl")).unwrap();
    let path = temp_jsonl_path("cached-unknowns-report");
    fs::write(&path, codex_message_line("user", "placeholder") + "\n").unwrap();
    let (len, modified) = session_file_state(&path).unwrap();
    let cache = Mutex::new(HashMap::new());
    store_cached_graph(
        &cache,
        session_cache_key(SessionSource::Codex, &path),
        &path,
        len,
        modified,
        cached_graph.clone(),
    )
    .unwrap();

    let report = build_unknowns_report_cached(
        SessionSource::Codex,
        &path,
        &cache,
        RedactionProfile::Strict,
    )
    .unwrap();

    let _ = fs::remove_file(&path);
    assert_eq!(
        report.total_lines,
        cached_graph.parser_health.total_lines_read
    );
    assert_eq!(
        report.unknown_event_count,
        cached_graph.parser_health.unknown_event_count
    );
}

#[test]
fn cached_session_line_offsets_are_best_effort() {
    let graph =
        parse_graph_for_file(SessionSource::Codex, &fixture_path("codex-sanitized.jsonl")).unwrap();
    assert!(graph.parser_health.image_count > 0);
    let missing_path = temp_jsonl_path("missing-image-offsets");
    let _ = fs::remove_file(&missing_path);
    let cache = Mutex::new(HashMap::new());
    let key = session_cache_key(SessionSource::Codex, &missing_path);

    store_cached_graph(
        &cache,
        key.clone(),
        &missing_path,
        graph.processed_byte_length,
        SystemTime::UNIX_EPOCH,
        graph,
    )
    .unwrap();

    let cached = cache_snapshot(&cache, &key)
        .unwrap()
        .expect("cached session");
    assert!(cached.line_offsets.is_empty());
}

#[test]
fn cached_trace_diff_uses_cached_session_graphs() {
    let left_graph =
        parse_graph_for_file(SessionSource::Codex, &fixture_path("codex-sanitized.jsonl")).unwrap();
    let right_graph = parse_graph_for_file(
        SessionSource::Codex,
        &fixture_path("codex-edge-cases.jsonl"),
    )
    .unwrap();
    let left_path = temp_jsonl_path("cached-diff-left");
    let right_path = temp_jsonl_path("cached-diff-right");
    fs::write(
        &left_path,
        codex_message_line("user", "left placeholder") + "\n",
    )
    .unwrap();
    fs::write(
        &right_path,
        codex_message_line("user", "right placeholder") + "\n",
    )
    .unwrap();
    let (left_len, left_modified) = session_file_state(&left_path).unwrap();
    let (right_len, right_modified) = session_file_state(&right_path).unwrap();
    let cache = Mutex::new(HashMap::new());
    store_cached_graph(
        &cache,
        session_cache_key(SessionSource::Codex, &left_path),
        &left_path,
        left_len,
        left_modified,
        left_graph.clone(),
    )
    .unwrap();
    store_cached_graph(
        &cache,
        session_cache_key(SessionSource::Codex, &right_path),
        &right_path,
        right_len,
        right_modified,
        right_graph.clone(),
    )
    .unwrap();

    let diff = build_trace_diff_cached(
        SessionSource::Codex,
        SessionSource::Codex,
        &left_path,
        &right_path,
        &cache,
        true,
        RedactionProfile::Strict,
    )
    .unwrap();

    let _ = fs::remove_file(&left_path);
    let _ = fs::remove_file(&right_path);
    assert_eq!(diff.left_summary.line_count, left_graph.line_count);
    assert_eq!(diff.right_summary.line_count, right_graph.line_count);
    assert_eq!(diff.parser_health_delta.unknown_events.left, 1);
    assert_eq!(
        diff.parser_health_delta.unknown_events.right,
        right_graph.parser_health.unknown_event_count
    );
}

#[test]
fn parses_codex_fixture_graph_and_status() {
    let path = fixture_path("codex-sanitized.jsonl");
    let cache = Mutex::new(HashMap::new());

    let graph = load_session_graph(SessionSource::Codex, &path, &cache).unwrap();

    assert_eq!(graph.session_id.as_deref(), Some("codex-fixture-session"));
    assert_eq!(graph.cwd.as_deref(), Some("C:\\Fixtures\\perlustron-demo"));
    assert_eq!(graph.line_count, 13);
    assert_eq!(graph.latest_event_index, 12);
    assert_eq!(graph.prompts.len(), 2);
    assert_eq!(
        graph.prompts[0].title,
        "Inspect the sanitized Perlustron fixture."
    );
    assert_eq!(graph.prompts[0].calls.len(), 2);
    assert_eq!(graph.prompts[0].calls[0].name, "shell_command");
    assert_eq!(graph.prompts[0].calls[0].status, "completed");
    assert_eq!(graph.prompts[0].calls[1].name, "apply_patch");
    assert_eq!(graph.prompts[0].file_changes.len(), 1);
    assert_eq!(graph.prompts[0].file_changes[0].short_path, "README.md");
    assert_eq!(graph.prompts[0].assistant_messages.len(), 1);
    assert_eq!(graph.compactions.len(), 1);
    assert_eq!(graph.token_telemetry.latest_total_tokens, Some(1500));
    assert_eq!(graph.metadata.model.as_deref(), Some("gpt-fixture"));
    assert_eq!(graph.totals.completed_call_count, 2);
    assert_eq!(graph.parser_health.unknown_event_count, 1);
    assert_eq!(graph.parser_health.malformed_line_count, 1);
    assert_eq!(graph.parser_health.image_count, 1);

    let status = load_session_status(SessionSource::Codex, &path, &cache).unwrap();

    assert_eq!(status.session_id.as_deref(), Some("codex-fixture-session"));
    assert_eq!(status.line_count, graph.line_count);
    assert_eq!(status.latest_event_index, graph.latest_event_index);
    assert_eq!(status.renderable_event_count, 7);
    assert_eq!(status.parser_health.unknown_event_count, 1);
    assert!(!status.graph_changed);
    assert!(!status.compaction_in_progress);
}

#[test]
fn cached_session_stores_line_offsets_for_large_image_fetches() {
    let path = temp_jsonl_path("cached-image-offsets");
    let filler_lines = (0..64)
        .map(|index| {
            json!({
                "timestamp": "2026-05-10T16:04:02.287Z",
                "type": "event_msg",
                "payload": { "type": "agent_reasoning_delta", "text": format!("thinking {index}") }
            })
            .to_string()
        })
        .collect::<Vec<_>>();
    let image_event_index = filler_lines.len();
    let image_offset = filler_lines
        .iter()
        .map(|line| line.len() + 1)
        .sum::<usize>() as u64;
    let image_line = json!({
        "timestamp": "2026-05-10T16:04:03.287Z",
        "type": "response_item",
        "payload": {
            "type": "message",
            "role": "user",
            "content": [
                { "type": "input_text", "text": "image prompt" },
                { "image_url": "data:text/plain;base64,aGVsbG8=" }
            ]
        }
    })
    .to_string();
    let contents = filler_lines
        .into_iter()
        .chain(std::iter::once(image_line))
        .collect::<Vec<_>>()
        .join("\n")
        + "\n";
    fs::write(&path, contents).unwrap();

    let cache = Mutex::new(HashMap::new());
    let graph = load_session_graph(SessionSource::Codex, &path, &cache).unwrap();
    let key = session_cache_key(SessionSource::Codex, &path);
    let cached = cache_snapshot(&cache, &key)
        .unwrap()
        .expect("cached session");

    assert_eq!(graph.parser_health.image_count, 1);
    assert_eq!(graph.prompts[0].images[0].event_index, image_event_index);
    assert_eq!(
        cached.line_offsets.get(image_event_index),
        Some(&image_offset)
    );

    let image =
        load_session_image(SessionSource::Codex, &path, image_event_index, 0, &cache).unwrap();
    assert_eq!(image.mime_type, "text/plain");
    assert_eq!(image.bytes, b"hello");

    {
        let mut cache = cache.lock().unwrap();
        cache.get_mut(&key).unwrap().line_offsets[image_event_index] = 0;
    }
    let fallback_image =
        load_session_image(SessionSource::Codex, &path, image_event_index, 0, &cache).unwrap();

    let _ = fs::remove_file(&path);
    assert_eq!(fallback_image.mime_type, "text/plain");
    assert_eq!(fallback_image.bytes, b"hello");
}

#[test]
fn appended_image_prompts_keep_media_line_index() {
    let path = temp_jsonl_path("append-image-line-index");
    let cache = Mutex::new(HashMap::new());
    let initial = codex_message_line("user", "first prompt") + "\n";
    fs::write(&path, &initial).unwrap();

    let first = load_session_graph(SessionSource::Codex, &path, &cache).unwrap();
    assert_eq!(first.prompts[0].event_index, 0);
    let key = session_cache_key(SessionSource::Codex, &path);
    {
        let mut cache = cache.lock().unwrap();
        cache.get_mut(&key).unwrap().graph.line_count += 4;
    }

    let image_line = json!({
        "timestamp": "2026-05-10T16:04:03.287Z",
        "type": "response_item",
        "payload": {
            "type": "message",
            "role": "user",
            "content": [
                { "type": "input_text", "text": "image prompt" },
                { "type": "input_image", "image_url": "data:text/plain;base64,aGVsbG8=", "detail": "high" }
            ]
        }
    })
    .to_string();
    fs::write(&path, initial + &image_line + "\n").unwrap();

    let graph = load_session_graph(SessionSource::Codex, &path, &cache).unwrap();
    let image_ref = &graph.prompts[1].images[0];
    let image = load_session_image(
        SessionSource::Codex,
        &path,
        image_ref.event_index,
        image_ref.image_index,
        &cache,
    )
    .unwrap();

    let _ = fs::remove_file(&path);
    assert_eq!(image_ref.event_index, 1);
    assert_eq!(image.bytes, b"hello");
}

#[test]
fn parses_claude_fixture_graph_and_status() {
    let path = fixture_path("claude-sanitized.jsonl");
    let cache = Mutex::new(HashMap::new());

    let graph = load_session_graph(SessionSource::Claude, &path, &cache).unwrap();

    assert_eq!(graph.session_id.as_deref(), Some("claude-fixture-session"));
    assert_eq!(graph.cwd.as_deref(), Some("C:\\Fixtures\\perlustron-demo"));
    assert_eq!(graph.line_count, 6);
    assert_eq!(graph.latest_event_index, 5);
    assert_eq!(graph.prompts.len(), 1);
    assert_eq!(
        graph.prompts[0].title,
        "Review the sanitized Claude fixture."
    );
    assert_eq!(graph.prompts[0].calls.len(), 1);
    assert_eq!(graph.prompts[0].calls[0].name, "Read");
    assert_eq!(graph.prompts[0].calls[0].status, "completed");
    assert_eq!(graph.prompts[0].assistant_messages.len(), 2);
    assert_eq!(graph.compactions.len(), 1);
    assert_eq!(graph.totals.completed_call_count, 1);
    assert_eq!(graph.parser_health.unknown_event_count, 1);

    let status = load_session_status(SessionSource::Claude, &path, &cache).unwrap();

    assert_eq!(status.session_id.as_deref(), Some("claude-fixture-session"));
    assert_eq!(status.line_count, graph.line_count);
    assert_eq!(status.latest_event_index, graph.latest_event_index);
    assert_eq!(status.renderable_event_count, 5);
    assert!(!status.graph_changed);
    assert!(!status.compaction_in_progress);
}

#[test]
fn parses_codex_edge_fixture_graph_and_status() {
    let path = fixture_path("codex-edge-cases.jsonl");
    let cache = Mutex::new(HashMap::new());

    let graph = load_session_graph(SessionSource::Codex, &path, &cache).unwrap();

    assert_eq!(
        graph.session_id.as_deref(),
        Some("codex-edge-fixture-session")
    );
    assert_eq!(graph.line_count, 11);
    assert_eq!(graph.prompts.len(), 1);
    assert_eq!(graph.prompts[0].calls.len(), 5);
    assert!(
        graph.prompts[0]
            .calls
            .iter()
            .any(|call| call.name == "spawn_agent" && call.status == "completed")
    );
    assert!(
        graph.prompts[0]
            .calls
            .iter()
            .any(|call| call.name == "subagent" && call.kind == "coordination")
    );
    assert!(
        graph.prompts[0]
            .calls
            .iter()
            .any(|call| call.name == "tool.search" && call.status == "completed")
    );
    assert!(
        graph.prompts[0]
            .calls
            .iter()
            .any(|call| call.name == "web.search" && call.kind == "web")
    );
    assert!(
        graph.prompts[0]
            .calls
            .iter()
            .any(|call| call.name == "github.list_issues" && call.duration_ms == Some(250))
    );
    assert_eq!(graph.compactions.len(), 1);
    assert_eq!(graph.token_telemetry.latest_total_tokens, Some(1290));
    assert_eq!(graph.totals.completed_call_count, 5);
    assert_eq!(graph.parser_health.tool_call_count, 5);
    assert_eq!(graph.parser_health.unknown_event_count, 0);
    assert_eq!(graph.parser_health.malformed_line_count, 0);

    let status = load_session_status(SessionSource::Codex, &path, &cache).unwrap();

    assert_eq!(status.line_count, graph.line_count);
    assert_eq!(status.latest_event_index, 10);
    assert_eq!(status.renderable_event_count, 7);
    assert!(!status.graph_changed);
}

#[test]
fn parses_claude_edge_fixture_graph_and_status() {
    let path = fixture_path("claude-edge-cases.jsonl");
    let cache = Mutex::new(HashMap::new());

    let graph = load_session_graph(SessionSource::Claude, &path, &cache).unwrap();

    assert_eq!(
        graph.session_id.as_deref(),
        Some("claude-edge-fixture-session")
    );
    assert_eq!(graph.line_count, 6);
    assert_eq!(graph.prompts.len(), 1);
    assert_eq!(graph.prompts[0].images.len(), 1);
    assert_eq!(graph.prompts[0].images[0].mime_type, "image/png");
    assert_eq!(graph.prompts[0].calls.len(), 1);
    assert_eq!(graph.prompts[0].calls[0].name, "WebSearch");
    assert_eq!(graph.prompts[0].calls[0].kind, "web");
    assert_eq!(graph.prompts[0].calls[0].status, "completed");
    assert_eq!(graph.prompts[0].assistant_messages.len(), 1);
    assert_eq!(graph.compactions.len(), 1);
    assert_eq!(graph.parser_health.image_count, 1);
    assert_eq!(graph.parser_health.unknown_event_count, 1);
    assert_eq!(graph.parser_health.malformed_line_count, 1);

    let status = load_session_status(SessionSource::Claude, &path, &cache).unwrap();

    assert_eq!(status.line_count, graph.line_count);
    assert_eq!(status.latest_event_index, 5);
    assert_eq!(status.renderable_event_count, 4);
    assert_eq!(status.parser_health.unknown_event_count, 1);
    assert_eq!(status.parser_health.malformed_line_count, 1);
    assert!(!status.graph_changed);
}

#[test]
fn exports_include_parser_health_sections() {
    let fixture = fixture_path("codex-sanitized.jsonl");
    let html = temp_jsonl_path("export-report").with_extension("html");
    let markdown = temp_jsonl_path("export-report").with_extension("md");
    let normalized = temp_jsonl_path("export-report").with_extension("json");

    write_export(
        SessionSource::Codex,
        &fixture,
        &html,
        ExportFormat::Html,
        true,
        RedactionProfile::Strict,
    )
    .unwrap();
    write_export(
        SessionSource::Codex,
        &fixture,
        &markdown,
        ExportFormat::Markdown,
        true,
        RedactionProfile::Strict,
    )
    .unwrap();
    write_export(
        SessionSource::Codex,
        &fixture,
        &normalized,
        ExportFormat::Json,
        false,
        RedactionProfile::Standard,
    )
    .unwrap();

    let html_text = fs::read_to_string(&html).unwrap();
    let markdown_text = fs::read_to_string(&markdown).unwrap();
    let json_text = fs::read_to_string(&normalized).unwrap();

    let _ = fs::remove_file(&html);
    let _ = fs::remove_file(&markdown);
    let _ = fs::remove_file(&normalized);

    assert!(html_text.contains("Parser Health"));
    assert!(html_text.contains("Redacted export"));
    assert!(!html_text.contains("Inspect the sanitized Perlustron fixture."));
    assert!(markdown_text.contains("## Parser Health"));
    assert!(json_text.contains("\"schemaVersion\""));
    assert!(json_text.contains("\"unknown\""));
}

#[test]
fn diff_reports_parser_health_tools_files_and_redaction() {
    let left = fixture_path("codex-sanitized.jsonl");
    let right = fixture_path("codex-loop-error.jsonl");
    let diff = build_trace_diff(
        SessionSource::Codex,
        SessionSource::Codex,
        &left,
        &right,
        true,
        RedactionProfile::Strict,
    )
    .unwrap();

    assert_eq!(diff.schema_version, DIFF_SCHEMA_VERSION);
    assert!(diff.metadata.redacted);
    assert_eq!(diff.left_summary.unknown_event_count, 1);
    assert!(diff.right_summary.missing_tool_result_count >= 1);
    assert!(diff.right_summary.error_like_event_count >= 1);
    assert!(
        diff.repeated_pattern_delta.right_count > diff.repeated_pattern_delta.left_count
            || !diff.repeated_pattern_delta.only_right.is_empty()
    );
    assert!(
        diff.file_delta
            .only_right
            .iter()
            .any(|file| file.contains("[REDACTED:path"))
    );
    assert!(diff.redaction_report.is_some());

    let text = render_diff_text(&diff);
    assert!(text.contains("Perlustron session diff"));
    assert!(text.contains("first likely divergence"));
    let json = serde_json::to_string(&diff).unwrap();
    assert!(json.contains("perlustron-trace-diff-v1"));
}

#[test]
fn diff_handles_similar_sessions_and_cross_source_sessions() {
    let codex = fixture_path("codex-sanitized.jsonl");
    let claude = fixture_path("claude-sanitized.jsonl");
    let claude_edge = fixture_path("claude-edge-cases.jsonl");

    let similar = build_trace_diff(
        SessionSource::Claude,
        SessionSource::Claude,
        &claude,
        &claude,
        false,
        RedactionProfile::Standard,
    )
    .unwrap();
    assert_eq!(similar.metadata.left_source, "claude");
    assert_eq!(similar.metadata.right_source, "claude");
    assert_eq!(similar.divergence.status, "same normalized sequence");
    assert_eq!(similar.tool_delta.calls.delta, 0);

    let claude_vs_claude = build_trace_diff(
        SessionSource::Claude,
        SessionSource::Claude,
        &claude,
        &claude_edge,
        true,
        RedactionProfile::Strict,
    )
    .unwrap();
    assert!(claude_vs_claude.metadata.redacted);
    assert!(
        claude_vs_claude.parser_health_delta.unknown_events.delta != 0
            || claude_vs_claude.tool_delta.calls.delta != 0
            || claude_vs_claude.file_delta.left_count != claude_vs_claude.file_delta.right_count
    );

    let cross_source = build_trace_diff(
        SessionSource::Codex,
        SessionSource::Claude,
        &codex,
        &claude,
        true,
        RedactionProfile::Strict,
    )
    .unwrap();
    assert_eq!(cross_source.metadata.left_source, "codex");
    assert_eq!(cross_source.metadata.right_source, "claude");
    assert!(
        cross_source
            .warnings
            .iter()
            .any(|warning| warning.contains("different source types"))
    );
    let html = render_diff_html(&cross_source);
    assert!(html.contains("Perlustron Session Diff"));
    assert!(html.contains("Parser Health"));
    assert!(html.contains("First likely divergence"));
}

#[test]
fn insights_detect_failure_loop_missing_result_context_and_files() {
    let path = fixture_path("codex-loop-error.jsonl");
    let cache = Mutex::new(HashMap::new());
    let graph = load_session_graph(SessionSource::Codex, &path, &cache).unwrap();

    let insights = trace_insights_from_graph(&graph);

    assert!(insights.failure_chain.is_some());
    assert!(
        insights
            .repeated_patterns
            .iter()
            .any(|pattern| pattern.pattern_type == "tool_call")
    );
    assert!(
        insights
            .suspicious_tool_calls
            .iter()
            .any(|call| call.reason.contains("no linked completed result"))
    );
    assert_eq!(
        insights.context_pressure.status,
        "high context markers logged"
    );
    assert!(
        insights
            .file_impact
            .files_edited
            .iter()
            .any(|file| file.path.ends_with("src/lib.rs"))
    );
    assert!(!insights.approval_friction.is_empty());
}

#[test]
fn insights_group_repeated_tool_calls_by_arguments_not_outputs() {
    let events = vec![
        completed_tool_event(
            "call-1",
            1,
            "local shell_command",
            "shell_command",
            "{\"command\":\"cargo test\"}",
            "first failure output",
        ),
        completed_tool_event(
            "call-2",
            3,
            "local shell_command",
            "shell_command",
            "{\"command\":\"cargo test\"}",
            "second failure output",
        ),
    ];

    let repeated = detect_repeated_patterns(&events, &[]);

    assert!(repeated.iter().any(|pattern| {
        pattern.pattern_type == "tool_call"
            && pattern.count == 2
            && pattern.first_line == 1
            && pattern.last_line == 3
    }));
}

#[test]
fn insights_ignore_successful_shell_output_that_mentions_error_words() {
    let event = completed_tool_event(
        "call-success",
        4,
        "local shell_command",
        "shell_command",
        "{\"command\":\"Get-Content review.md\"}",
        "Exit code: 0\nOutput:\nThe review mentions error handling, sandbox policy, approval flow, and failed tests as examples.",
    );

    assert!(!flat_event_is_error_like(&event));
    assert!(detect_suspicious_tool_calls(std::slice::from_ref(&event)).is_empty());
    assert!(detect_approval_friction(&[event]).is_empty());
}

#[test]
fn insights_ignore_probe_outputs_and_patch_arguments_as_failures() {
    let empty_nonzero_probe = completed_tool_event(
        "call-probe",
        8,
        "local shell_command",
        "shell_command",
        "{\n  \"command\": \"rg -n \\\"missing-pattern\\\" fixtures src tests\",\n  \"workdir\": \"C:\\\\Projects\\\\agent-space\"\n}",
        "Exit code: 1\nWall time: 0.1 seconds\nOutput:\n\n",
    );
    let successful_patch_with_friction_terms = completed_tool_event(
        "call-patch",
        12,
        "local apply_patch",
        "apply_patch",
        "patch text mentions approval, sandbox, and permission examples",
        "{\"output\":\"Success. Updated the following files:\\nM src\\\\session\\\\tests.rs\\n\"}",
    );
    let subagent_file_summary = completed_tool_event(
        "call-parent:subagent:file-1",
        16,
        "file-update subagent.file",
        "subagent.file",
        "src/lib.rs",
        "updated error handling text",
    );
    let subagent_message_summary = completed_tool_event(
        "call-parent:subagent:message-1",
        18,
        "message subagent.message",
        "subagent.message",
        "subagent reported review status",
        "Found issues around error handling and sandbox wording.",
    );

    assert!(!flat_event_is_error_like(&empty_nonzero_probe));
    assert!(detect_suspicious_tool_calls(std::slice::from_ref(&empty_nonzero_probe)).is_empty());
    assert!(!flat_event_is_error_like(&subagent_file_summary));
    assert!(detect_suspicious_tool_calls(std::slice::from_ref(&subagent_file_summary)).is_empty());
    assert!(!flat_event_is_error_like(&subagent_message_summary));
    assert!(
        detect_suspicious_tool_calls(std::slice::from_ref(&subagent_message_summary)).is_empty()
    );
    assert!(detect_approval_friction(&[successful_patch_with_friction_terms]).is_empty());
}

#[test]
fn insights_dedupe_suspicious_tool_call_records() {
    let event = completed_tool_event(
        "call-duplicate",
        21,
        "local shell_command",
        "shell_command",
        "{\"command\":\"npm test\"}",
        "Exit code: 1\nOutput:\nfailed",
    );
    let events = vec![event.clone(), event];

    let suspicious = detect_suspicious_tool_calls(&events);

    assert_eq!(suspicious.len(), 1);
}

#[test]
fn insights_keep_all_repeated_and_suspicious_tool_findings() {
    let events = (0..40)
        .map(|index| {
            completed_tool_event(
                &format!("call-{index}"),
                index + 1,
                "local shell_command",
                "shell_command",
                "{\"command\":\"cargo test insights\"}",
                "Exit code: 1\nOutput:\nfailed",
            )
        })
        .collect::<Vec<_>>();

    let repeated = detect_repeated_patterns(&events, &[]);
    let suspicious = detect_suspicious_tool_calls(&events);

    let repeated_tool = repeated
        .iter()
        .find(|pattern| pattern.pattern_type == "tool_call")
        .expect("repeated tool-call pattern should be reported");
    assert_eq!(repeated_tool.count, 40);
    assert_eq!(repeated_tool.examples.len(), 40);
    assert_eq!(repeated_tool.linked_events.len(), 40);
    assert_eq!(suspicious.len(), 40);
}

#[test]
fn inspection_queue_prioritizes_actionable_debugging_findings() {
    let path = fixture_path("codex-loop-error.jsonl");
    let cache = Mutex::new(HashMap::new());
    let graph = load_session_graph(SessionSource::Codex, &path, &cache).unwrap();

    let queue = &graph.insights.inspection_queue;

    assert!(!queue.is_empty());
    assert_eq!(queue[0].id, "first-logged-error");
    assert_eq!(queue[0].severity, "high");
    assert!(
        queue
            .iter()
            .any(|item| item.id.starts_with("suspicious-tool"))
    );
    assert!(queue.iter().any(|item| item.id == "context-pressure"));
    assert!(
        queue
            .iter()
            .any(|item| item.id == "approval-sandbox-friction")
    );
}

#[test]
fn scenario_fixtures_cover_debugging_workflows() {
    let scenarios = [
        ("codex-approval-denied.jsonl", SessionSource::Codex),
        ("codex-missing-tool-result.jsonl", SessionSource::Codex),
        ("codex-subagent-tree.jsonl", SessionSource::Codex),
        ("codex-mcp-heavy.jsonl", SessionSource::Codex),
        ("codex-context-compaction.jsonl", SessionSource::Codex),
        ("claude-tool-use-loop.jsonl", SessionSource::Claude),
        ("claude-compact-summary.jsonl", SessionSource::Claude),
        ("claude-image-metadata.jsonl", SessionSource::Claude),
        (
            "redaction/adversarial-codex-multiline-query-cookie-tool-bearer.jsonl",
            SessionSource::Codex,
        ),
        (
            "redaction/adversarial-claude-image-path-metadata.jsonl",
            SessionSource::Claude,
        ),
        ("malformed-mixed-source.jsonl", SessionSource::Codex),
    ];
    let cache = Mutex::new(HashMap::new());

    for (name, source) in scenarios {
        let path = fixture_path(name);
        let graph = load_session_graph(source, &path, &cache).unwrap();
        assert!(graph.parser_health.total_lines_read > 0, "{name}");
        assert!(
            graph.parser_health.parsed_event_count > 0
                || graph.parser_health.malformed_line_count > 0,
            "{name}"
        );
    }

    let approval = load_session_graph(
        SessionSource::Codex,
        &fixture_path("codex-approval-denied.jsonl"),
        &cache,
    )
    .unwrap();
    assert!(!approval.insights.approval_friction.is_empty());

    let missing = load_session_graph(
        SessionSource::Codex,
        &fixture_path("codex-missing-tool-result.jsonl"),
        &cache,
    )
    .unwrap();
    let missing_call = missing
        .insights
        .suspicious_tool_calls
        .iter()
        .find(|call| call.reason.contains("no linked completed result"))
        .expect("missing-result fixture should expose a suspicious call");
    let missing_queue_item = missing
        .insights
        .inspection_queue
        .iter()
        .find(|item| item.event_ids.contains(&missing_call.call.id))
        .expect("missing-result suspicious call should be queued");
    assert_eq!(missing_call.severity, "high");
    assert_eq!(missing_queue_item.severity, missing_call.severity);

    let context = load_session_graph(
        SessionSource::Codex,
        &fixture_path("codex-context-compaction.jsonl"),
        &cache,
    )
    .unwrap();
    assert_eq!(
        context.insights.context_pressure.status,
        "high context markers logged"
    );
    assert_eq!(context.compactions.len(), 1);

    let compaction_only = load_session_graph(
        SessionSource::Claude,
        &fixture_path("claude-sanitized.jsonl"),
        &cache,
    )
    .unwrap();
    assert_eq!(
        compaction_only.insights.context_pressure.status,
        "compaction markers logged"
    );
    assert!(
        compaction_only
            .insights
            .inspection_queue
            .iter()
            .any(|item| item.id == "context-pressure")
    );

    let mixed = load_session_graph(
        SessionSource::Codex,
        &fixture_path("malformed-mixed-source.jsonl"),
        &cache,
    )
    .unwrap();
    assert!(mixed.parser_health.unknown_event_count >= 1);
    assert_eq!(mixed.parser_health.malformed_line_count, 1);
}

#[test]
fn sequence_aware_diff_ignores_inserted_telemetry_noise() {
    let left = fixture_path("diff-run-a.jsonl");
    let right = fixture_path("diff-run-b.jsonl");
    let diff = build_trace_diff(
        SessionSource::Codex,
        SessionSource::Codex,
        &left,
        &right,
        true,
        RedactionProfile::Strict,
    )
    .unwrap();

    assert_eq!(diff.divergence.kind, "first_structural_divergence");
    assert!(diff.divergence.aligned_event_count >= 2);
    assert_eq!(diff.divergence.right_line, Some(7));
    assert!(
        diff.divergence
            .clusters
            .iter()
            .any(|cluster| cluster.kind == "first_file_divergence")
    );
    assert!(
        diff.file_delta
            .both
            .iter()
            .any(|file| { file.contains("[REDACTED:path") || file.contains("src/lib.rs") })
    );
}

#[test]
fn normalized_export_parents_calls_to_assistant_message() {
    let input = temp_jsonl_path("assistant-call-export");
    let output = temp_jsonl_path("assistant-call-export").with_extension("json");
    let session = [
        codex_message_line("user", "inspect grouping"),
        codex_message_line("assistant", "I will inspect files."),
        json!({
            "timestamp": "2026-05-10T16:04:03.287Z",
            "type": "response_item",
            "payload": {
                "type": "function_call",
                "name": "shell_command",
                "call_id": "call_grouped_export",
                "arguments": {"command": "rg --files"}
            }
        })
        .to_string(),
    ]
    .join("\n");
    fs::write(&input, session + "\n").unwrap();

    write_export(
        SessionSource::Codex,
        &input,
        &output,
        ExportFormat::Json,
        false,
        RedactionProfile::Standard,
    )
    .unwrap();
    let exported: Value = serde_json::from_str(&fs::read_to_string(&output).unwrap()).unwrap();

    let _ = fs::remove_file(&input);
    let _ = fs::remove_file(&output);

    let events = exported
        .get("events")
        .and_then(Value::as_array)
        .expect("normalized export events");
    let assistant_index = events
        .iter()
        .position(|event| {
            event.get("normalizedType").and_then(Value::as_str) == Some("assistant_message")
        })
        .expect("assistant message event");
    let call_index = events
        .iter()
        .position(|event| {
            event.get("toolCallId").and_then(Value::as_str) == Some("call_grouped_export")
        })
        .expect("tool call event");
    let assistant_id = events[assistant_index]
        .get("id")
        .and_then(Value::as_str)
        .expect("assistant id");

    assert!(assistant_index < call_index);
    assert_eq!(
        events[call_index].get("parentId").and_then(Value::as_str),
        Some(assistant_id)
    );
}

#[test]
fn cli_parses_demo_and_export_commands() {
    let serve = parse_cli(vec![
        "--demo".to_owned(),
        "claude".to_owned(),
        "--no-open".to_owned(),
    ])
    .unwrap();
    match serve {
        CliAction::Serve(options) => {
            assert_eq!(options.demo_source, Some(SessionSource::Claude));
            assert_eq!(options.open_browser, Some(false));
            assert!(!options.require_api_token);
            assert!(!options.dev_assets);
        }
        _ => panic!("expected serve action"),
    }

    let dev_serve = parse_cli(vec!["--demo".to_owned(), "--dev-assets".to_owned()]).unwrap();
    match dev_serve {
        CliAction::Serve(options) => assert!(options.dev_assets),
        _ => panic!("expected serve action"),
    }

    let token_serve =
        parse_cli(vec!["--demo".to_owned(), "--require-api-token".to_owned()]).unwrap();
    match token_serve {
        CliAction::Serve(options) => assert!(options.require_api_token),
        _ => panic!("expected serve action"),
    }

    let export = parse_cli(vec![
        "export".to_owned(),
        "fixtures/codex-sanitized.jsonl".to_owned(),
        "--format".to_owned(),
        "json".to_owned(),
        "-o".to_owned(),
        "trace.json".to_owned(),
        "--redacted".to_owned(),
    ])
    .unwrap();
    match export {
        CliAction::Export {
            format, redacted, ..
        } => {
            assert_eq!(format, ExportFormat::Json);
            assert!(redacted);
        }
        _ => panic!("expected export action"),
    }

    let bench = parse_cli(vec![
        "bench".to_owned(),
        "--generate".to_owned(),
        "1000".to_owned(),
        "--append-lines=50".to_owned(),
        "--max-full-ms".to_owned(),
        "500".to_owned(),
    ])
    .unwrap();
    match bench {
        CliAction::Bench {
            generate_lines,
            append_lines,
            thresholds,
            ..
        } => {
            assert_eq!(generate_lines, Some(1000));
            assert_eq!(append_lines, 50);
            assert_eq!(thresholds.max_full_parse_ms, Some(500.0));
        }
        _ => panic!("expected bench action"),
    }

    let diff = parse_cli(vec![
        "diff".to_owned(),
        "fixtures/codex-sanitized.jsonl".to_owned(),
        "fixtures/codex-loop-error.jsonl".to_owned(),
        "--format=json".to_owned(),
        "--redacted".to_owned(),
    ])
    .unwrap();
    match diff {
        CliAction::Diff {
            format, redacted, ..
        } => {
            assert_eq!(format, DiffFormat::Json);
            assert!(redacted);
        }
        _ => panic!("expected diff action"),
    }

    let unknowns = parse_cli(vec![
        "unknowns".to_owned(),
        "fixtures/codex-sanitized.jsonl".to_owned(),
        "--redacted".to_owned(),
        "-o".to_owned(),
        "unknowns.json".to_owned(),
    ])
    .unwrap();
    match unknowns {
        CliAction::Unknowns {
            output, profile, ..
        } => {
            assert!(output.is_some());
            assert_eq!(profile, RedactionProfile::Strict);
        }
        _ => panic!("expected unknowns action"),
    }
}

#[test]
fn generated_benchmark_runs_full_status_and_append_parse() {
    let report = run_benchmark(
        None,
        None,
        Some(25),
        5,
        BenchThresholds {
            max_full_parse_ms: Some(1_000.0),
            max_status_refresh_ms: Some(1_000.0),
            max_append_parse_ms: Some(1_000.0),
        },
    )
    .unwrap();

    assert_eq!(report.source, SessionSource::Codex);
    assert_eq!(report.generated_lines, Some(25));
    assert_eq!(report.initial_lines, 25);
    assert_eq!(report.appended_lines, 5);
    assert!(report.renderable_events > 0);
    assert!(report.append_renderable_events.unwrap_or_default() >= report.renderable_events);
    assert!(report.threshold_failures.is_empty());
}
