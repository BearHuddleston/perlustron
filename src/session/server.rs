// SPDX-License-Identifier: MIT OR Apache-2.0

const INDEX_HTML: &str = include_str!("../../static/index.html");
const APP_JS: &str = include_str!("../../static/app.js");
const STYLES_CSS: &str = include_str!("../../static/styles.css");

async fn run_server(options: ServerOptions) -> Result<()> {
    if options.dev_assets && !cfg!(debug_assertions) {
        return Err(anyhow!("--dev-assets is only available in debug builds"));
    }

    let mut session_config = session_config_from_env()?;
    if let Some(source) = options.source {
        session_config.default_source = source;
    }
    if let Some(source) = options.demo_source {
        let path = demo_fixture_path(source)?;
        session_config.default_source = source;
        session_config.explicit_paths.insert(source, path);
    }
    if let Some(path) = options.session_path {
        let source = options
            .source
            .or_else(|| infer_source_from_path(&path))
            .unwrap_or(session_config.default_source);
        session_config.default_source = source;
        session_config.explicit_paths.insert(source, path);
    }

    let startup_session = resolve_session_path(
        session_config.default_source,
        &session_config.explicit_paths,
    )?;
    session_config
        .explicit_paths
        .entry(startup_session.source)
        .or_insert_with(|| startup_session.path.clone());
    let addr = SocketAddr::new(options.host, options.port);
    let api_token = options.require_api_token.then(generate_api_token);
    let url = if let Some(token) = api_token.as_deref() {
        format!("http://{addr}/?token={token}")
    } else {
        format!("http://{addr}/")
    };

    let state = AppState {
        default_source: session_config.default_source,
        explicit_paths: Arc::new(session_config.explicit_paths),
        cache: Arc::new(Mutex::new(HashMap::new())),
        api_token,
        privacy_profile: options
            .privacy_mode
            .then_some(RedactionProfile::Strict),
        dev_assets: options.dev_assets,
    };

    let app = Router::new()
        .route("/api/sessions", get(sessions_handler))
        .route("/api/session", get(session_handler))
        .route("/api/session/status", get(session_status_handler))
        .route("/api/session/events", get(session_events_handler))
        .route("/api/session/diff", get(session_diff_handler))
        .route("/api/session/unknowns", get(session_unknowns_handler))
        .route(
            "/api/session/image/{event_index}/{image_index}",
            get(session_image_handler),
        )
        .fallback(static_asset_handler)
        .layer(TraceLayer::new_for_http())
        .with_state(state);

    let listener = TcpListener::bind(addr)
        .await
        .with_context(|| format!("failed to bind http://{addr}"))?;

    println!("Serving Perlustron at {url}");
    println!("API mode: {}", api_auth_mode_label(options.require_api_token));
    if let Some(warning) = tokenless_non_loopback_warning(options.host, options.require_api_token) {
        eprintln!("{warning}");
    }
    if options.privacy_mode {
        println!("Privacy mode: strict redaction is enabled and embedded image routes are disabled.");
    }
    if options.dev_assets {
        println!("Dev assets: serving static/index.html, static/app.js, and static/styles.css from disk.");
    }
    info!("serving {url}");
    info!(
        "{} session jsonl {}",
        startup_session.source.display_name(),
        startup_session.path.display()
    );
    if should_open_browser(options.open_browser)
        && let Err(error) = open_browser(&url)
    {
        eprintln!("Failed to open browser automatically: {error}");
        eprintln!("Open this URL manually: {url}");
    }
    axum::serve(listener, app).await?;
    Ok(())
}

fn api_auth_mode_label(require_api_token: bool) -> &'static str {
    if require_api_token {
        "token-protected; a per-run local session token is required on API routes"
    } else {
        "tokenless; API routes do not require a token"
    }
}

fn tokenless_non_loopback_warning(host: IpAddr, require_api_token: bool) -> Option<String> {
    if require_api_token || host.is_loopback() {
        return None;
    }

    Some(format!(
        "SECURITY WARNING: Perlustron is serving a tokenless API on non-loopback host {host}. Raw session logs can contain prompts, code, paths, command output, images, tool results, tokens, cookies, environment variables, and credentials. Use --require-api-token or bind --host 127.0.0.1 unless this is an isolated trusted network."
    ))
}

async fn sessions_handler(
    State(state): State<AppState>,
    Query(query): Query<SessionQuery>,
) -> impl IntoResponse {
    if let Some(response) = authorize_api_request(&state, &query) {
        return response;
    }
    let source = match session_source_from_query(&state, &query) {
        Ok(source) => source,
        Err(error) => {
            return api_error_response(StatusCode::BAD_REQUEST, error);
        }
    };
    let explicit_paths = Arc::clone(&state.explicit_paths);
    let selected_session = query.session.clone();
    let loaded = tokio::task::spawn_blocking(move || {
        list_session_options(source, explicit_paths.as_ref(), selected_session.as_deref())
    })
    .await;

    match loaded {
        Ok(Ok(mut sessions)) => {
            if let Some(profile) = state.privacy_profile {
                redact_session_list_response(&mut sessions, profile);
            }
            (StatusCode::OK, Json(sessions)).into_response()
        }
        Ok(Err(error)) => api_error_response(StatusCode::BAD_REQUEST, error),
        Err(error) => api_error_response(StatusCode::INTERNAL_SERVER_ERROR, error),
    }
}

async fn session_handler(
    State(state): State<AppState>,
    Query(query): Query<SessionQuery>,
) -> impl IntoResponse {
    if let Some(response) = authorize_api_request(&state, &query) {
        return response;
    }
    let resolved = match resolve_session_request(&state, &query) {
        Ok(resolved) => resolved,
        Err(error) => {
            return api_error_response(StatusCode::BAD_REQUEST, error);
        }
    };
    let cache = Arc::clone(&state.cache);
    let parsed = tokio::task::spawn_blocking(move || {
        load_session_graph(resolved.source, &resolved.path, cache.as_ref())
    })
    .await;

    match parsed {
        Ok(Ok(mut graph)) => {
            if let Some(profile) = state.privacy_profile {
                let report = redact_session_graph(&mut graph, profile);
                graph.parser_health.redacted_field_count = report.redacted_field_count;
                graph.insights = trace_insights_from_graph(&graph);
            }
            apply_server_privacy_summary(&mut graph, &state);
            (StatusCode::OK, Json(graph)).into_response()
        }
        Ok(Err(error)) => api_error_response(StatusCode::INTERNAL_SERVER_ERROR, error),
        Err(error) => api_error_response(StatusCode::INTERNAL_SERVER_ERROR, error),
    }
}

async fn session_status_handler(
    State(state): State<AppState>,
    Query(query): Query<SessionQuery>,
) -> impl IntoResponse {
    if let Some(response) = authorize_api_request(&state, &query) {
        return response;
    }
    let resolved = match resolve_session_request(&state, &query) {
        Ok(resolved) => resolved,
        Err(error) => {
            return api_error_response(StatusCode::BAD_REQUEST, error);
        }
    };
    let cache = Arc::clone(&state.cache);
    let parsed = tokio::task::spawn_blocking(move || {
        load_session_status(resolved.source, &resolved.path, cache.as_ref())
    })
    .await;

    match parsed {
        Ok(Ok(mut status)) => {
            if let Some(profile) = state.privacy_profile {
                redact_session_status(&mut status, profile);
            }
            (StatusCode::OK, Json(status)).into_response()
        }
        Ok(Err(error)) => api_error_response(StatusCode::INTERNAL_SERVER_ERROR, error),
        Err(error) => api_error_response(StatusCode::INTERNAL_SERVER_ERROR, error),
    }
}

async fn session_events_handler(
    State(state): State<AppState>,
    Query(query): Query<SessionQuery>,
) -> Response {
    if let Some(response) = authorize_api_request(&state, &query) {
        return response;
    }
    let resolved = match resolve_session_request(&state, &query) {
        Ok(resolved) => resolved,
        Err(error) => {
            return api_error_response(StatusCode::BAD_REQUEST, error);
        }
    };

    let cache = Arc::clone(&state.cache);
    let source = resolved.source;
    let path = resolved.path;
    let privacy_profile = state.privacy_profile;
    let stream = async_stream::stream! {
        let mut previous_signature: Option<SessionStatusSignature> = None;
        let mut ticks = interval(Duration::from_millis(SESSION_EVENT_POLL_MS));
        ticks.set_missed_tick_behavior(MissedTickBehavior::Skip);

        loop {
            ticks.tick().await;

            let cache = Arc::clone(&cache);
            let path = path.clone();
            let status = tokio::task::spawn_blocking(move || {
                load_session_status(source, &path, cache.as_ref())
            })
            .await;

            match status {
                Ok(Ok(mut status)) => {
                    if let Some(profile) = privacy_profile {
                        redact_session_status(&mut status, profile);
                    }
                    let signature = status_signature(&status);
                    if previous_signature.as_ref() == Some(&signature) {
                        continue;
                    }
                    previous_signature = Some(signature);
                    match session_status_event(&status) {
                        Ok(event) => {
                            yield Ok::<Event, Infallible>(event);
                        }
                        Err(error) => {
                            yield Ok::<Event, Infallible>(session_error_event(error));
                        }
                    }
                }
                Ok(Err(error)) => {
                    yield Ok::<Event, Infallible>(session_error_event(error));
                }
                Err(error) => {
                    yield Ok::<Event, Infallible>(session_error_event(error));
                }
            }
        }
    };

    Sse::new(stream)
        .keep_alive(
            KeepAlive::new()
                .interval(Duration::from_secs(SESSION_EVENT_KEEPALIVE_SECS))
                .text("keepalive"),
        )
        .into_response()
}

fn session_status_event(status: &SessionStatus) -> Result<Event, axum::Error> {
    Event::default().event("session-status").json_data(status)
}

fn session_error_event(error: impl ToString) -> Event {
    Event::default()
        .event("session-error")
        .data(error.to_string())
}

async fn session_diff_handler(
    State(state): State<AppState>,
    Query(query): Query<DiffApiQuery>,
) -> impl IntoResponse {
    if let Some(response) = authorize_api_token(&state, query.token.as_deref()) {
        return response;
    }
    let profile = redaction_profile_for_api(&state, query.profile.as_deref());
    let redacted = query.redacted.unwrap_or(true) || state.privacy_profile.is_some();
    let left_source = match query_source(
        query.left_source.as_deref().or(query.source.as_deref()),
        state.default_source,
    ) {
        Ok(source) => source,
        Err(error) => return api_error_response(StatusCode::BAD_REQUEST, error),
    };
    let right_source = match query_source(query.right_source.as_deref(), left_source) {
        Ok(source) => source,
        Err(error) => return api_error_response(StatusCode::BAD_REQUEST, error),
    };
    let left_path = match resolve_side_session(
        left_source,
        state.explicit_paths.as_ref(),
        query.left_session.as_deref().or(query.session.as_deref()),
    ) {
        Ok(path) => path,
        Err(error) => return api_error_response(StatusCode::BAD_REQUEST, error),
    };
    let right_path = match resolve_side_session(
        right_source,
        state.explicit_paths.as_ref(),
        query.right_session.as_deref(),
    ) {
        Ok(path) => path,
        Err(error) => return api_error_response(StatusCode::BAD_REQUEST, error),
    };

    let cache = Arc::clone(&state.cache);
    let loaded = tokio::task::spawn_blocking(move || {
        build_trace_diff_cached(
            left_source,
            right_source,
            &left_path,
            &right_path,
            cache.as_ref(),
            redacted,
            profile,
        )
    })
    .await;

    match loaded {
        Ok(Ok(diff)) => (StatusCode::OK, Json(diff)).into_response(),
        Ok(Err(error)) => api_error_response(StatusCode::INTERNAL_SERVER_ERROR, error),
        Err(error) => api_error_response(StatusCode::INTERNAL_SERVER_ERROR, error),
    }
}

async fn session_unknowns_handler(
    State(state): State<AppState>,
    Query(query): Query<UnknownsApiQuery>,
) -> impl IntoResponse {
    if let Some(response) = authorize_api_token(&state, query.token.as_deref()) {
        return response;
    }
    let profile = redaction_profile_for_api(&state, query.profile.as_deref());
    let source = match query_source(query.source.as_deref(), state.default_source) {
        Ok(source) => source,
        Err(error) => return api_error_response(StatusCode::BAD_REQUEST, error),
    };
    let path = match resolve_side_session(
        source,
        state.explicit_paths.as_ref(),
        query.session.as_deref(),
    ) {
        Ok(path) => path,
        Err(error) => return api_error_response(StatusCode::BAD_REQUEST, error),
    };

    let cache = Arc::clone(&state.cache);
    let loaded = tokio::task::spawn_blocking(move || {
        build_unknowns_report_cached(source, &path, cache.as_ref(), profile)
    })
    .await;

    match loaded {
        Ok(Ok(report)) => (StatusCode::OK, Json(report)).into_response(),
        Ok(Err(error)) => api_error_response(StatusCode::INTERNAL_SERVER_ERROR, error),
        Err(error) => api_error_response(StatusCode::INTERNAL_SERVER_ERROR, error),
    }
}

async fn session_image_handler(
    State(state): State<AppState>,
    Query(query): Query<SessionQuery>,
    AxumPath((event_index, image_index)): AxumPath<(usize, usize)>,
) -> Response {
    if let Some(response) = authorize_api_request(&state, &query) {
        return response;
    }
    if state.privacy_profile.is_some() {
        return api_error_response(
            StatusCode::FORBIDDEN,
            "embedded images are disabled while privacy mode is enabled",
        );
    }
    let resolved = match resolve_session_request(&state, &query) {
        Ok(resolved) => resolved,
        Err(error) => {
            return api_error_response(StatusCode::BAD_REQUEST, error);
        }
    };
    let cache = state.cache.clone();
    let loaded = tokio::task::spawn_blocking(move || {
        load_session_image(
            resolved.source,
            &resolved.path,
            event_index,
            image_index,
            cache.as_ref(),
        )
    })
    .await;

    match loaded {
        Ok(Ok(image)) => {
            let mut headers = HeaderMap::new();
            let content_type = HeaderValue::from_str(&image.mime_type)
                .unwrap_or_else(|_| HeaderValue::from_static("application/octet-stream"));
            headers.insert(header::CONTENT_TYPE, content_type);
            headers.insert(
                header::CACHE_CONTROL,
                HeaderValue::from_static("private, max-age=3600"),
            );
            (headers, image.bytes).into_response()
        }
        Ok(Err(error)) => api_error_response(StatusCode::NOT_FOUND, error),
        Err(error) => api_error_response(StatusCode::INTERNAL_SERVER_ERROR, error),
    }
}

async fn static_asset_handler(
    State(state): State<AppState>,
    uri: axum::http::Uri,
) -> Response {
    let path = uri.path().trim_start_matches('/');
    if is_app_js_path(path) {
        return asset_text_response(
            state.dev_assets,
            "text/javascript; charset=utf-8",
            "static/app.js",
            APP_JS,
        );
    }

    match path {
        "" | "index.html" => asset_text_response(
            state.dev_assets,
            "text/html; charset=utf-8",
            "static/index.html",
            INDEX_HTML,
        ),
        "styles.css" => asset_text_response(
            state.dev_assets,
            "text/css; charset=utf-8",
            "static/styles.css",
            STYLES_CSS,
        ),
        _ => asset_text_response(
            state.dev_assets,
            "text/html; charset=utf-8",
            "static/index.html",
            INDEX_HTML,
        ),
    }
}

fn is_app_js_path(path: &str) -> bool {
    path == "app.js"
        || path
            .strip_prefix("app-v")
            .and_then(|version| version.strip_suffix(".js"))
            .is_some_and(|version| !version.is_empty() && version.bytes().all(|byte| byte.is_ascii_digit()))
}

fn asset_text_response(
    dev_assets: bool,
    content_type: &'static str,
    dev_path: &'static str,
    embedded_body: &'static str,
) -> Response {
    if dev_assets {
        let path = Path::new(env!("CARGO_MANIFEST_DIR")).join(dev_path);
        return match fs::read_to_string(&path) {
            Ok(body) => static_text_response(content_type, body, "no-store"),
            Err(error) => api_error_response(
                StatusCode::INTERNAL_SERVER_ERROR,
                anyhow!("failed to read dev asset {}: {error}", path.display()),
            ),
        };
    }
    static_text_response(content_type, embedded_body, "private, max-age=3600")
}

fn static_text_response(
    content_type: &'static str,
    body: impl IntoResponse,
    cache_control: &'static str,
) -> Response {
    let mut headers = HeaderMap::new();
    headers.insert(header::CONTENT_TYPE, HeaderValue::from_static(content_type));
    headers.insert(header::CACHE_CONTROL, HeaderValue::from_static(cache_control));
    (headers, body).into_response()
}

fn authorize_api_request(state: &AppState, query: &SessionQuery) -> Option<Response> {
    authorize_api_token(state, query.token.as_deref())
}

fn apply_server_privacy_summary(graph: &mut SessionGraph, state: &AppState) {
    graph.privacy_summary =
        PrivacySummary::for_server_profile(state.privacy_profile, state.api_token.is_some());
    graph.shareability_summary = ShareabilitySummary::for_server_profile(state.privacy_profile);
}

fn authorize_api_token(state: &AppState, token: Option<&str>) -> Option<Response> {
    let expected_token = state.api_token.as_deref()?;
    if token == Some(expected_token) {
        None
    } else {
        Some(api_error_response(
            StatusCode::UNAUTHORIZED,
            "missing or invalid local session token",
        ))
    }
}

fn query_source(value: Option<&str>, fallback: SessionSource) -> Result<SessionSource> {
    value
        .map(|source| {
            SessionSource::parse(source)
                .ok_or_else(|| anyhow!("unknown session source: {source}; expected codex or claude"))
        })
        .unwrap_or(Ok(fallback))
}

fn redaction_profile_for_api(state: &AppState, requested: Option<&str>) -> RedactionProfile {
    state.privacy_profile.unwrap_or_else(|| {
        requested
            .and_then(RedactionProfile::parse)
            .unwrap_or(RedactionProfile::Strict)
    })
}

fn resolve_side_session(
    source: SessionSource,
    explicit_paths: &HashMap<SessionSource, PathBuf>,
    session: Option<&str>,
) -> Result<PathBuf> {
    if let Some(session) = session.filter(|session| !session.is_empty()) {
        resolve_requested_session_path(source, explicit_paths, session)
    } else {
        Ok(resolve_session_path(source, explicit_paths)?.path)
    }
}

fn api_error_response(status: StatusCode, error: impl ToString) -> Response {
    (
        status,
        Json(ApiError {
            error: error.to_string(),
        }),
    )
        .into_response()
}
