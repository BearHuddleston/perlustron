// SPDX-License-Identifier: MIT OR Apache-2.0

const DEFAULT_PORT: u16 = 8787;
const ARGUMENT_PREVIEW_CHARS: usize = 900;
const OUTPUT_PREVIEW_CHARS: usize = 700;
const MESSAGE_PREVIEW_CHARS: usize = 1_200;
const FILE_CHANGE_PREVIEW_CHARS: usize = 900;
const MAX_TOKEN_SAMPLES: usize = 80;
const MAX_ARGUMENT_PARSE_BYTES: usize = 64 * 1024;
const JSON_PREVIEW_STRING_CHARS: usize = 360;
const JSON_PREVIEW_MAX_ITEMS: usize = 12;
const JSON_PREVIEW_MAX_DEPTH: usize = 3;
const GRAPH_APPEND_PARSE_BYTE_BUDGET: u64 = 256 * 1024;
const SESSION_STATUS_TAIL_BYTES: u64 = 128 * 1024;
const SESSION_EVENT_POLL_MS: u64 = 1_000;
const SESSION_EVENT_KEEPALIVE_SECS: u64 = 15;
const MAX_SUBAGENT_INSPECTION_NODES: usize = 72;
const MAX_SUBAGENT_SESSION_SCAN_ENTRIES: usize = 20_000;
const MAX_SESSION_LIST_ITEMS: usize = 250;
const PARSER_SCHEMA_VERSION: &str = "agent-trace-v1";
const NORMALIZED_TRACE_SCHEMA_VERSION: &str = "agent-trace-v1";
const PARSER_HEALTH_REF_LIMIT: usize = 50;
const LARGE_PAYLOAD_LINE_BYTES: usize = 512 * 1024;

#[derive(Clone)]
struct AppState {
    default_source: SessionSource,
    explicit_paths: Arc<HashMap<SessionSource, PathBuf>>,
    cache: Arc<Mutex<HashMap<String, CachedSession>>>,
    api_token: Option<String>,
    privacy_profile: Option<RedactionProfile>,
    dev_assets: bool,
}

#[derive(Debug, Clone)]
struct CachedSession {
    len: u64,
    modified: SystemTime,
    line_offsets: Vec<u64>,
    subagent_signature: String,
    graph: SessionGraph,
}

#[derive(Debug, Clone)]
struct SessionConfig {
    default_source: SessionSource,
    explicit_paths: HashMap<SessionSource, PathBuf>,
}

#[derive(Debug, Clone)]
struct ServerOptions {
    source: Option<SessionSource>,
    session_path: Option<PathBuf>,
    demo_source: Option<SessionSource>,
    host: IpAddr,
    port: u16,
    open_browser: Option<bool>,
    privacy_mode: bool,
    require_api_token: bool,
    dev_assets: bool,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
enum SessionSource {
    Codex,
    Claude,
}

impl SessionSource {
    fn as_str(self) -> &'static str {
        match self {
            Self::Codex => "codex",
            Self::Claude => "claude",
        }
    }

    fn display_name(self) -> &'static str {
        match self {
            Self::Codex => "Codex",
            Self::Claude => "Claude",
        }
    }

    fn parse(value: &str) -> Option<Self> {
        match value.trim().to_ascii_lowercase().as_str() {
            "codex" => Some(Self::Codex),
            "claude" | "claude-code" | "claude_code" => Some(Self::Claude),
            _ => None,
        }
    }
}

#[derive(Debug, Deserialize)]
struct SessionQuery {
    source: Option<String>,
    session: Option<String>,
    token: Option<String>,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
struct DiffApiQuery {
    source: Option<String>,
    session: Option<String>,
    token: Option<String>,
    left_source: Option<String>,
    right_source: Option<String>,
    left_session: Option<String>,
    right_session: Option<String>,
    redacted: Option<bool>,
    profile: Option<String>,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
struct UnknownsApiQuery {
    source: Option<String>,
    session: Option<String>,
    token: Option<String>,
    profile: Option<String>,
}

struct ResolvedSession {
    source: SessionSource,
    path: PathBuf,
}

#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
struct SessionListResponse {
    source: String,
    selected_path: String,
    sessions: Vec<SessionListItem>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct SessionListItem {
    source: String,
    path: String,
    label: String,
    detail: String,
    last_modified_at: String,
    byte_length: u64,
    is_live: bool,
    explicit: bool,
}

#[derive(Debug)]
struct SessionParseState {
    session_id: Option<String>,
    cwd: Option<String>,
    metadata: SessionMetadata,
    prompts: Vec<PromptNode>,
    compactions: Vec<CompactionNode>,
    token_samples: Vec<TokenSample>,
    health: ParserHealth,
    current_prompt: Option<usize>,
    assistant_message_by_prompt: HashMap<usize, String>,
    calls_by_id: HashMap<String, (usize, usize)>,
}

#[derive(Default)]
struct UiMetrics {
    errors: usize,
    long_calls: usize,
    files: usize,
    diffs: usize,
    artifacts: usize,
    compactions: usize,
    web: usize,
}

#[derive(Default)]
struct PromptCallCounts {
    local: usize,
    browser: usize,
    web: usize,
}

#[derive(Debug, Deserialize)]
struct JsonlEntry {
    timestamp: Option<String>,
    #[serde(rename = "type")]
    entry_type: String,
    payload: Value,
}

impl SessionParseState {
    #[cfg(test)]
    fn new() -> Self {
        Self::new_for_source(SessionSource::Codex)
    }

    fn new_for_source(source: SessionSource) -> Self {
        Self {
            session_id: None,
            cwd: None,
            metadata: SessionMetadata::default(),
            prompts: Vec::new(),
            compactions: Vec::new(),
            token_samples: Vec::new(),
            health: ParserHealth::new(source),
            current_prompt: None,
            assistant_message_by_prompt: HashMap::new(),
            calls_by_id: HashMap::new(),
        }
    }

    fn from_graph(graph: &SessionGraph, source: SessionSource) -> Self {
        let prompts = graph.prompts.clone();
        let compactions = graph.compactions.clone();
        let token_samples = graph.token_telemetry.samples.clone();
        let current_prompt = prompts.len().checked_sub(1);
        let assistant_message_by_prompt = rebuild_assistant_message_by_prompt(&prompts);
        let calls_by_id = rebuild_calls_by_id(&prompts);
        Self {
            session_id: graph.session_id.clone(),
            cwd: graph.cwd.clone(),
            metadata: graph.metadata.clone(),
            prompts,
            compactions,
            token_samples,
            health: graph.parser_health.clone_for_append(source),
            current_prompt,
            assistant_message_by_prompt,
            calls_by_id,
        }
    }

    fn apply_value(&mut self, source: SessionSource, value: Value, event_index: usize) -> Result<()> {
        match source {
            SessionSource::Codex => {
                let entry: JsonlEntry = serde_json::from_value(value)
                    .with_context(|| format!("invalid codex jsonl at line {}", event_index + 1))?;
                self.apply_codex_entry(&entry, event_index);
            }
            SessionSource::Claude => {
                self.apply_claude_entry(&value, event_index);
            }
        }
        Ok(())
    }

    #[cfg(test)]
    fn apply_line(&mut self, source: SessionSource, line: &str, event_index: usize) -> Result<()> {
        let value = serde_json::from_str(line)
            .with_context(|| format!("invalid jsonl at line {}", event_index + 1))?;
        self.apply_value(source, value, event_index)
    }

    fn apply_codex_entry(&mut self, entry: &JsonlEntry, event_index: usize) {
        match entry.entry_type.as_str() {
            "session_meta" => {
                if let Some(session_id) = entry.payload.get("id").and_then(Value::as_str) {
                    self.session_id = Some(session_id.to_owned());
                }
                if let Some(cwd) = entry.payload.get("cwd").and_then(Value::as_str) {
                    self.cwd = Some(cwd.to_owned());
                }
                update_metadata_from_session_meta(&mut self.metadata, &entry.payload);
            }
            "turn_context" => {
                update_metadata_from_turn_context(&mut self.metadata, &entry.payload);
            }
            "response_item" => handle_response_item(
                entry,
                event_index,
                &mut self.prompts,
                &mut self.current_prompt,
                &mut self.assistant_message_by_prompt,
                &mut self.calls_by_id,
            ),
            "event_msg" => handle_codex_event_msg(
                entry,
                event_index,
                &mut self.prompts,
                &mut self.current_prompt,
                &mut self.assistant_message_by_prompt,
                &mut self.calls_by_id,
                &mut self.token_samples,
            ),
            "compacted" | "compaction" | "summary" => {
                if let Some(compaction) = compaction_node_from_codex_entry(entry, event_index) {
                    self.compactions.push(compaction);
                }
            }
            _ => {}
        }
    }

    fn apply_claude_entry(&mut self, entry: &Value, event_index: usize) {
        if let Some(session_id) = entry.get("sessionId").and_then(Value::as_str) {
            self.session_id = Some(session_id.to_owned());
        }
        if let Some(cwd) = entry.get("cwd").and_then(Value::as_str) {
            self.cwd = Some(cwd.to_owned());
        }

        match entry
            .get("type")
            .and_then(Value::as_str)
            .unwrap_or_default()
        {
            "user" => handle_claude_user_entry(
                entry,
                event_index,
                &mut self.prompts,
                &mut self.current_prompt,
                &mut self.calls_by_id,
            ),
            "assistant" => handle_claude_assistant_entry(
                entry,
                event_index,
                &mut self.prompts,
                &mut self.current_prompt,
                &mut self.assistant_message_by_prompt,
                &mut self.calls_by_id,
            ),
            "summary" | "compacted" | "compaction" => {
                if let Some(compaction) = compaction_node_from_claude_entry(entry, event_index) {
                    self.compactions.push(compaction);
                }
            }
            _ => {}
        }
    }
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct SessionGraph {
    schema_version: String,
    parser_version: String,
    source: String,
    session_id: Option<String>,
    session_path: String,
    cwd: Option<String>,
    metadata: SessionMetadata,
    generated_at: String,
    last_modified_at: String,
    latest_event_index: usize,
    is_live: bool,
    line_count: usize,
    byte_length: u64,
    processed_byte_length: u64,
    pending_bytes: u64,
    privacy_summary: PrivacySummary,
    shareability_summary: ShareabilitySummary,
    prompts: Vec<PromptNode>,
    compactions: Vec<CompactionNode>,
    token_telemetry: TokenTelemetry,
    totals: SessionTotals,
    parser_health: ParserHealth,
    insights: TraceInsights,
    ui: UiSummary,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct PrivacySummary {
    privacy_mode: String,
    redaction_profile: Option<String>,
    api_token_required: bool,
    image_route_behavior: String,
    no_telemetry: bool,
    no_third_party_uploads: bool,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct ShareabilitySummary {
    raw_logs_safe_to_share: bool,
    raw_log_caution: String,
    sanitized_graph_note: String,
}

impl PrivacySummary {
    fn for_server_profile(profile: Option<RedactionProfile>, api_token_required: bool) -> Self {
        Self {
            privacy_mode: profile
                .map(|profile| profile.as_str().to_owned())
                .unwrap_or_else(|| "off".to_owned()),
            redaction_profile: profile.map(|profile| profile.as_str().to_owned()),
            api_token_required,
            image_route_behavior: if profile.is_some() {
                "disabled-in-privacy-mode".to_owned()
            } else if api_token_required {
                "available-to-authorized-local-session".to_owned()
            } else {
                "available-to-local-session".to_owned()
            },
            no_telemetry: true,
            no_third_party_uploads: true,
        }
    }
}

impl ShareabilitySummary {
    fn for_server_profile(profile: Option<RedactionProfile>) -> Self {
        let sanitized_graph_note = if let Some(profile) = profile {
            format!(
                "Session graph responses are served with {} redaction while privacy mode is enabled; still review excerpts before sharing.",
                profile.as_str()
            )
        } else {
            "Session graph responses are not privacy-mode redacted by default; use privacy mode or sanitized exports before sharing.".to_owned()
        };

        Self {
            raw_logs_safe_to_share: false,
            raw_log_caution:
                "Raw source logs may contain secrets, local paths, prompts, outputs, and images; sanitize and review before sharing."
                    .to_owned(),
            sanitized_graph_note,
        }
    }
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct ParserHealth {
    parser_version: String,
    schema_version: String,
    source: String,
    source_detection_confidence: String,
    total_lines_read: usize,
    parsed_event_count: usize,
    renderable_event_count: usize,
    unknown_event_count: usize,
    unknown_event_types: Vec<UnknownEventTypeSummary>,
    unknown_events: Vec<ParserEventRef>,
    malformed_line_count: usize,
    malformed_lines: Vec<MalformedLineRef>,
    skipped_large_payload_count: usize,
    skipped_large_payloads: Vec<SkippedPayloadRef>,
    redacted_field_count: usize,
    image_count: usize,
    tool_call_count: usize,
    tool_result_count: usize,
    file_activity_count: usize,
    compaction_count: usize,
    token_telemetry_available: bool,
    warnings: Vec<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct UnknownEventTypeSummary {
    source_event_type: String,
    count: usize,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct ParserEventRef {
    line_number: usize,
    event_index: usize,
    source_event_type: String,
    normalized_type: String,
    preview: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct MalformedLineRef {
    line_number: usize,
    event_index: usize,
    error: String,
    preview: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct SkippedPayloadRef {
    line_number: usize,
    event_index: usize,
    byte_length: usize,
    reason: String,
}

impl ParserHealth {
    fn new(source: SessionSource) -> Self {
        Self {
            parser_version: env!("CARGO_PKG_VERSION").to_owned(),
            schema_version: PARSER_SCHEMA_VERSION.to_owned(),
            source: source.as_str().to_owned(),
            source_detection_confidence: "explicit".to_owned(),
            total_lines_read: 0,
            parsed_event_count: 0,
            renderable_event_count: 0,
            unknown_event_count: 0,
            unknown_event_types: Vec::new(),
            unknown_events: Vec::new(),
            malformed_line_count: 0,
            malformed_lines: Vec::new(),
            skipped_large_payload_count: 0,
            skipped_large_payloads: Vec::new(),
            redacted_field_count: 0,
            image_count: 0,
            tool_call_count: 0,
            tool_result_count: 0,
            file_activity_count: 0,
            compaction_count: 0,
            token_telemetry_available: false,
            warnings: Vec::new(),
        }
    }

    fn clone_for_append(&self, source: SessionSource) -> Self {
        let mut health = self.clone();
        health.source = source.as_str().to_owned();
        health
    }

    fn observe_line(&mut self, source: SessionSource, line: &str, event_index: usize) -> Option<Value> {
        self.total_lines_read += 1;
        if line.len() > LARGE_PAYLOAD_LINE_BYTES {
            self.skipped_large_payload_count += 1;
            push_limited(
                &mut self.skipped_large_payloads,
                SkippedPayloadRef {
                    line_number: event_index + 1,
                    event_index,
                    byte_length: line.len(),
                    reason: "large JSONL line; previews are bounded".to_owned(),
                },
            );
        }

        let value = match serde_json::from_str::<Value>(line) {
            Ok(value) => value,
            Err(error) => {
                self.record_malformed(event_index, error, line);
                return None;
            }
        };

        self.parsed_event_count += 1;
        if let Some(source_event_type) = unknown_event_type(source, &value) {
            self.record_unknown(event_index, source_event_type, &value);
        }
        Some(value)
    }

    fn record_malformed(&mut self, event_index: usize, error: impl ToString, line: &str) {
        self.malformed_line_count += 1;
        push_limited(
            &mut self.malformed_lines,
            MalformedLineRef {
                line_number: event_index + 1,
                event_index,
                error: compact_text(&error.to_string(), 240),
                preview: compact_text(line.trim(), 700),
            },
        );
    }

    fn record_unknown(&mut self, event_index: usize, source_event_type: String, value: &Value) {
        self.unknown_event_count += 1;
        if let Some(summary) = self
            .unknown_event_types
            .iter_mut()
            .find(|summary| summary.source_event_type == source_event_type)
        {
            summary.count += 1;
        } else {
            self.unknown_event_types.push(UnknownEventTypeSummary {
                source_event_type: source_event_type.clone(),
                count: 1,
            });
        }
        push_limited(
            &mut self.unknown_events,
            ParserEventRef {
                line_number: event_index + 1,
                event_index,
                source_event_type,
                normalized_type: "unknown".to_owned(),
                preview: value_preview_limited(value, 700),
            },
        );
    }
}

#[derive(Debug, Clone, Default, Serialize)]
#[serde(rename_all = "camelCase")]
struct SessionMetadata {
    cli_version: Option<String>,
    originator: Option<String>,
    source: Option<String>,
    model_provider: Option<String>,
    git_commit_hash: Option<String>,
    repository_url: Option<String>,
    approval_policy: Option<String>,
    sandbox: Option<String>,
    model: Option<String>,
    dynamic_tools: Vec<DynamicToolSummary>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct DynamicToolSummary {
    name: String,
    namespace: Option<String>,
    defer_loading: bool,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct SessionTotals {
    prompt_count: usize,
    call_count: usize,
    completed_call_count: usize,
    assistant_message_count: usize,
    file_change_count: usize,
    compaction_count: usize,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct UiSummary {
    source: String,
    session_name: String,
    total_turns: usize,
    all_count: usize,
    live_count: usize,
    metric_errors: usize,
    metric_long_calls: usize,
    metric_files: usize,
    metric_diffs: usize,
    metric_artifacts: usize,
    metric_compactions: usize,
    metric_web: usize,
    timeline_ticks: Vec<TimelineTick>,
    timeline_labels: Vec<String>,
    roots: Vec<SessionRootSummary>,
    prompt_rows: Vec<PromptRowSummary>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct TimelineTick {
    kind: String,
    height: usize,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct SessionRootSummary {
    label: String,
    path: String,
    status: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct PromptRowSummary {
    id: String,
    title: String,
    turns: usize,
    local: usize,
    browser: usize,
    web: usize,
    files: usize,
    is_live: bool,
    last_event_index: usize,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct PromptNode {
    id: String,
    event_index: usize,
    timestamp: Option<String>,
    title: String,
    text: String,
    images: Vec<ContentImageRef>,
    calls: Vec<CallNode>,
    assistant_messages: Vec<MessageNode>,
    file_changes: Vec<FileChangeNode>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct CompactionNode {
    id: String,
    event_index: usize,
    timestamp: Option<String>,
    title: String,
    text: String,
    detail: String,
    replaced_message_count: usize,
    encrypted: bool,
    reason: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct ContentImageRef {
    id: String,
    event_index: usize,
    image_index: usize,
    detail: Option<String>,
    mime_type: String,
    url: String,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct MessageNode {
    id: String,
    event_index: usize,
    timestamp: Option<String>,
    text: String,
}

#[derive(Debug, Clone, Default, Serialize)]
#[serde(rename_all = "camelCase")]
struct TokenTelemetry {
    samples: Vec<TokenSample>,
    latest_total_tokens: Option<u64>,
    context_window: Option<u64>,
    latest_context_percent: Option<f64>,
    primary_rate_limit_percent: Option<f64>,
    secondary_rate_limit_percent: Option<f64>,
}

#[derive(Debug, Clone, Serialize, PartialEq)]
#[serde(rename_all = "camelCase")]
struct TokenSample {
    event_index: usize,
    timestamp: Option<String>,
    total_tokens: u64,
    context_window: Option<u64>,
    context_percent: Option<f64>,
    primary_rate_limit_percent: Option<f64>,
    secondary_rate_limit_percent: Option<f64>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct FileChangeNode {
    id: String,
    event_index: usize,
    timestamp: Option<String>,
    call_id: Option<String>,
    path: String,
    short_path: String,
    change_type: String,
    detail: String,
    preview: String,
}

#[derive(Debug, Clone, Serialize, PartialEq)]
#[serde(rename_all = "camelCase")]
struct CallNode {
    id: String,
    event_index: usize,
    started_at: Option<String>,
    completed_at: Option<String>,
    name: String,
    kind: String,
    status: String,
    duration_ms: Option<u64>,
    argument_preview: String,
    output_preview: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    assistant_message_id: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    subagent_session_path: Option<String>,
    #[serde(skip_serializing_if = "Vec::is_empty")]
    subagent_nodes: Vec<CallNode>,
}

#[derive(Debug, Serialize)]
struct ApiError {
    error: String,
}

struct SessionImage {
    mime_type: String,
    bytes: Vec<u8>,
}

#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
struct SessionStatus {
    source: String,
    session_path: String,
    session_id: Option<String>,
    generated_at: String,
    last_modified_at: String,
    line_count: usize,
    latest_event_index: usize,
    is_live: bool,
    byte_length: u64,
    processed_byte_length: u64,
    pending_bytes: u64,
    graph_changed: bool,
    renderable_event_count: usize,
    compaction_in_progress: bool,
    parser_health: ParserHealth,
    live_cues: LiveTailCues,
}

#[derive(Debug, Clone, Default, Serialize, PartialEq)]
#[serde(rename_all = "camelCase")]
struct LiveTailCues {
    compaction_in_progress: bool,
    pending_prompt: Option<LivePromptCue>,
    assistant_streaming: bool,
    latest_assistant_event_index: Option<usize>,
    latest_assistant_preview: Option<String>,
    latest_token_sample: Option<TokenSample>,
    active_tool_calls: Vec<LiveToolCue>,
    completed_tool_calls: Vec<LiveToolCue>,
}

#[derive(Debug, Clone, Serialize, PartialEq)]
#[serde(rename_all = "camelCase")]
struct LivePromptCue {
    id: String,
    event_index: usize,
    timestamp: Option<String>,
    title: String,
    text: String,
}

type LiveToolCue = CallNode;

#[derive(PartialEq)]
struct SessionStatusSignature {
    last_modified_at: String,
    line_count: usize,
    latest_event_index: usize,
    byte_length: u64,
    processed_byte_length: u64,
    pending_bytes: u64,
    graph_changed: bool,
    renderable_event_count: usize,
    compaction_in_progress: bool,
    live_cues: LiveTailCues,
    is_live: bool,
}

#[derive(Default)]
struct AppendSignals {
    graph_changed: bool,
    scanned_to_end: bool,
    live_cues: LiveTailCues,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum RedactionProfile {
    Minimal,
    Standard,
    Strict,
    StructureOnly,
}

impl RedactionProfile {
    fn parse(value: &str) -> Option<Self> {
        match value.trim().to_ascii_lowercase().as_str() {
            "minimal" => Some(Self::Minimal),
            "standard" => Some(Self::Standard),
            "strict" => Some(Self::Strict),
            "structure-only" | "structure_only" | "structure" => Some(Self::StructureOnly),
            _ => None,
        }
    }

    fn as_str(self) -> &'static str {
        match self {
            Self::Minimal => "minimal",
            Self::Standard => "standard",
            Self::Strict => "strict",
            Self::StructureOnly => "structure-only",
        }
    }
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct AgentTrace {
    schema_version: String,
    parser_version: String,
    generated_at: String,
    source: String,
    session_id: Option<String>,
    log_file_path: String,
    cwd: Option<String>,
    metadata: SessionMetadata,
    totals: SessionTotals,
    parser_health: ParserHealth,
    insights: TraceInsights,
    redaction_report: Option<RedactionReport>,
    events: Vec<NormalizedEvent>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct NormalizedEvent {
    id: String,
    source: String,
    source_event_type: String,
    normalized_type: String,
    role: Option<String>,
    timestamp: Option<String>,
    line_number: usize,
    parent_id: Option<String>,
    turn_id: Option<String>,
    tool_call_id: Option<String>,
    name: Option<String>,
    status: Option<String>,
    duration_ms: Option<u64>,
    summary: String,
    content: Option<String>,
    arguments: Option<String>,
    output: Option<String>,
    files: Vec<String>,
    artifacts: Vec<String>,
    raw: RawEventRef,
    warnings: Vec<String>,
    redactions: Vec<String>,
    inferred: Vec<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct RawEventRef {
    line_number: usize,
    event_index: usize,
    session_path: String,
}

struct SessionGraphInput<'a> {
    source: SessionSource,
    path: &'a Path,
    byte_length: u64,
    processed_byte_length: u64,
    modified: SystemTime,
    session_id: Option<String>,
    cwd: Option<String>,
    metadata: SessionMetadata,
    prompts: Vec<PromptNode>,
    compactions: Vec<CompactionNode>,
    token_samples: Vec<TokenSample>,
    health: ParserHealth,
    line_count: usize,
}
