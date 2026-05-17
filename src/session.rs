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
