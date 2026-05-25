// SPDX-License-Identifier: MIT OR Apache-2.0

use std::{
    collections::HashMap,
    convert::Infallible,
    env, fs,
    io::{BufRead, BufReader, BufWriter, Seek, SeekFrom, Write},
    net::{IpAddr, Ipv4Addr, SocketAddr},
    path::{Path, PathBuf},
    sync::{Arc, Mutex},
    time::{Duration, Instant, SystemTime},
};

use anyhow::{Context, Result, anyhow};
use axum::{
    Json, Router,
    extract::{Path as AxumPath, Query, State},
    http::{HeaderMap, HeaderValue, StatusCode, header},
    response::{
        IntoResponse, Response,
        sse::{Event, KeepAlive, Sse},
    },
    routing::get,
};
use base64::{Engine as _, engine::general_purpose::STANDARD as BASE64_STANDARD};
use serde::{Deserialize, Serialize};
use serde_json::{Value, json};
use time::{OffsetDateTime, format_description::well_known::Rfc3339};
use tokio::{
    net::TcpListener,
    time::{MissedTickBehavior, interval},
};
use tower_http::trace::TraceLayer;
use tracing::info;

#[path = "session/parser/line_filter.rs"]
mod parser_line_filter;
#[path = "session/parser/line_index.rs"]
mod parser_line_index;
#[path = "session/parser/normalize.rs"]
mod parser_normalize;
#[path = "session/parser/provider/claude.rs"]
mod parser_provider_claude;
#[path = "session/parser/provider/codex.rs"]
mod parser_provider_codex;

#[path = "session/analysis/detectors/context_pressure.rs"]
mod analysis_context_pressure;
#[path = "session/analysis/detectors/errors.rs"]
mod analysis_errors;
#[path = "session/analysis/detectors/file_impact.rs"]
mod analysis_file_impact;
#[path = "session/analysis/inspection_queue.rs"]
mod analysis_inspection_queue;
#[path = "session/analysis/detectors/repetition.rs"]
mod analysis_repetition;

#[path = "session/diff/divergence.rs"]
mod diff_divergence;
#[path = "session/diff/render.rs"]
mod diff_render;

#[path = "session/cli/commands/diff.rs"]
mod cli_command_diff;
#[path = "session/cli/commands/session.rs"]
mod cli_command_session;

use analysis_context_pressure::analyze_context_pressure;
use analysis_errors::{
    detect_approval_friction, detect_suspicious_tool_calls, flat_event_is_error_like,
    text_is_error_like, tool_argument_text,
};
use analysis_file_impact::{analyze_file_impact, collect_file_observations};
use analysis_inspection_queue::build_inspection_queue;
use analysis_repetition::{detect_repeated_patterns, stable_hash_text};
use cli_command_diff::parse_diff_command;
use cli_command_session::{
    parse_bench_command, parse_export_command, parse_fixture_report_command,
    parse_insights_command, parse_sanitize_command, parse_scan_command, parse_serve_command,
    parse_status_command, parse_unknowns_command,
};
use diff_divergence::find_first_divergence;
use diff_render::{render_diff_html, render_diff_text};
use parser_line_filter::{
    contains_json_field, line_has_compaction_event, line_head, line_may_affect_graph,
    parsed_line_may_affect_graph, push_limited, unknown_event_type,
};
use parser_line_index::session_line_count_before;
use parser_normalize::{
    build_session_graph, link_pending_calls_to_assistant_message,
    rebuild_assistant_message_by_prompt, rebuild_calls_by_id,
};
use parser_provider_claude::{
    compaction_node_from_claude_entry, handle_claude_assistant_entry, handle_claude_user_entry,
};
use parser_provider_codex::{
    build_token_telemetry, compaction_node_from_codex_entry, handle_codex_event_msg,
    handle_response_item, token_sample_from_event,
};

include!("session/model.rs");
include!("session/server.rs");
include!("session/cache.rs");
include!("session/live.rs");
include!("session/parser.rs");
include!("session/media.rs");
include!("session/util.rs");
include!("session/config.rs");
include!("session/sanitize.rs");
include!("session/analysis.rs");
include!("session/export.rs");
include!("session/diff.rs");
include!("session/unknowns.rs");
include!("session/bench.rs");
include!("session/cli.rs");

#[cfg(test)]
mod tests;
