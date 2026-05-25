// SPDX-License-Identifier: MIT OR Apache-2.0

use super::*;

const COMMON_AUTHORIZATION_AND_PASSWORD_FIXTURE: &str =
    "redaction/common-authorization-and-password.jsonl";
const ADVERSARIAL_CODEX_FIXTURE: &str =
    "redaction/adversarial-codex-multiline-query-cookie-tool-bearer.jsonl";
const ADVERSARIAL_CLAUDE_FIXTURE: &str = "redaction/adversarial-claude-image-path-metadata.jsonl";

#[derive(Clone, Copy)]
struct RedactionFixture {
    name: &'static str,
    path: &'static str,
    source: SessionSource,
}

const ADVERSARIAL_REDACTION_FIXTURES: &[RedactionFixture] = &[
    RedactionFixture {
        name: "codex multiline/query/cookie/tool bearer fixture",
        path: ADVERSARIAL_CODEX_FIXTURE,
        source: SessionSource::Codex,
    },
    RedactionFixture {
        name: "claude image/path metadata fixture",
        path: ADVERSARIAL_CLAUDE_FIXTURE,
        source: SessionSource::Claude,
    },
];

const ADVERSARIAL_SECRET_SENTINELS: &[&str] = &[
    "PL_FIXTURE_MULTILINE_SECRET_ALPHA",
    "PL_FIXTURE_MULTILINE_SECRET_BETA",
    "PL_FIXTURE_QUERY_SECRET_0123456789",
    "PL_FIXTURE_COOKIE_SECRET_0123456789",
    "PL_FIXTURE_TOOL_PASSWORD_0123456789",
    "PL_FIXTURE_BEARER_TOKEN_0123456789",
    "QWxwaGEtU2VudGluZWxfMDEyMzQ1Njc4OWFiY2RlZg==",
    "C:\\Users\\perlustron-fixture",
];

const ADVERSARIAL_EXPORT_SENTINELS: &[&str] = &[
    "PL_FIXTURE_MULTILINE_SECRET_ALPHA",
    "PL_FIXTURE_MULTILINE_SECRET_BETA",
    "PL_FIXTURE_QUERY_SECRET_0123456789",
    "PL_FIXTURE_COOKIE_SECRET_0123456789",
    "PL_FIXTURE_TOOL_PASSWORD_0123456789",
    "PL_FIXTURE_BEARER_TOKEN_0123456789",
    "QWxwaGEtU2VudGluZWxfMDEyMzQ1Njc4OWFiY2RlZg==",
    "C:\\Users\\perlustron-fixture",
    "data:image/png;base64,iVBORw0KGgo=",
    "iVBORw0KGgo=",
];

fn assert_no_fixture_sentinels(label: &str, text: &str, sentinels: &[&str]) {
    for secret in sentinels {
        assert!(
            !text.contains(secret),
            "{label} leaked adversarial fixture sentinel: {secret}"
        );
    }
}

fn assert_no_adversarial_secrets(label: &str, text: &str) {
    assert_no_fixture_sentinels(label, text, ADVERSARIAL_SECRET_SENTINELS);
}

fn assert_no_adversarial_export_sentinels(label: &str, text: &str) {
    assert_no_fixture_sentinels(label, text, ADVERSARIAL_EXPORT_SENTINELS);
}

fn assert_scan_contains_kind(scan: &ScanReport, kind: &str) {
    assert!(
        scan.findings_by_kind.iter().any(|count| count.kind == kind),
        "expected scan findings to include {kind}; got {:?}",
        scan.findings_by_kind
            .iter()
            .map(|count| count.kind.as_str())
            .collect::<Vec<_>>()
    );
}

fn app_state_with_privacy_profile(privacy_profile: Option<RedactionProfile>) -> AppState {
    AppState {
        default_source: SessionSource::Codex,
        explicit_paths: Arc::new(HashMap::new()),
        cache: Arc::new(Mutex::new(HashMap::new())),
        api_token: None,
        privacy_profile,
        dev_assets: false,
    }
}

#[test]
fn api_redaction_profile_respects_privacy_mode() {
    let state = app_state_with_privacy_profile(Some(RedactionProfile::Strict));

    assert_eq!(
        redaction_profile_for_api(&state, Some("minimal")),
        RedactionProfile::Strict
    );

    let state = AppState {
        privacy_profile: None,
        ..state
    };
    assert_eq!(
        redaction_profile_for_api(&state, Some("minimal")),
        RedactionProfile::Minimal
    );
    assert_eq!(
        redaction_profile_for_api(&state, Some("invalid")),
        RedactionProfile::Strict
    );
}

fn assert_no_browser_visible_fixture_paths<T: Serialize>(value: &T) {
    let text = serde_json::to_string(value).unwrap();
    for needle in [
        "C:\\\\Fixtures",
        "/home/",
        "/tmp/",
        "codex-sanitized.jsonl",
        "claude-sanitized.jsonl",
    ] {
        assert!(
            !text.contains(needle),
            "browser-visible privacy payload leaked `{needle}` in {text}"
        );
    }
}

#[test]
fn strict_graph_redaction_scrubs_ui_summary_paths_and_prompt_rows() {
    let path = fixture_path("codex-sanitized.jsonl");
    let cache = Mutex::new(HashMap::new());
    let mut graph = load_session_graph(SessionSource::Codex, &path, &cache).unwrap();
    let unredacted = serde_json::to_string(&graph).unwrap();
    assert!(unredacted.contains("C:\\\\Fixtures"));
    assert!(unredacted.contains("codex-sanitized.jsonl"));

    let report = redact_session_graph(&mut graph, RedactionProfile::Strict);

    assert!(report.redacted_field_count > 0);
    assert_no_browser_visible_fixture_paths(&graph);
    assert!(
        graph
            .ui
            .roots
            .iter()
            .all(|root| root.path.contains("[REDACTED:path"))
    );
    assert!(
        graph
            .ui
            .prompt_rows
            .iter()
            .all(|row| row.title.contains("[REDACTED:content"))
    );
}

#[test]
fn strict_api_redaction_scrubs_session_status_paths() {
    let path = fixture_path("codex-sanitized.jsonl");
    let cache = Mutex::new(HashMap::new());
    let mut status = load_session_status(SessionSource::Codex, &path, &cache).unwrap();
    assert!(
        serde_json::to_string(&status)
            .unwrap()
            .contains("codex-sanitized.jsonl")
    );

    redact_session_status(&mut status, RedactionProfile::Strict);

    assert!(status.session_path.contains("[REDACTED:path"));
    assert_no_browser_visible_fixture_paths(&status);
}

#[test]
fn strict_api_redaction_scrubs_session_list_paths() {
    let path = fixture_path("codex-sanitized.jsonl");
    let explicit_paths = HashMap::from([(SessionSource::Codex, path.clone())]);
    let mut list = list_session_options(SessionSource::Codex, &explicit_paths, None).unwrap();
    assert!(
        serde_json::to_string(&list)
            .unwrap()
            .contains("codex-sanitized.jsonl")
    );

    redact_session_list_response(&mut list, RedactionProfile::Strict);

    assert!(list.selected_path.contains("[REDACTED:path"));
    assert!(
        list.sessions
            .iter()
            .all(|session| session.path.contains("[REDACTED:path"))
    );
    assert_no_browser_visible_fixture_paths(&list);
}

#[test]
fn privacy_and_shareability_summary_defaults_are_cautious_without_privacy_mode() {
    let cache = Mutex::new(HashMap::new());
    let graph = load_session_graph(
        SessionSource::Codex,
        &fixture_path("codex-edge-cases.jsonl"),
        &cache,
    )
    .unwrap();

    assert_eq!(graph.privacy_summary.privacy_mode, "off");
    assert_eq!(graph.privacy_summary.redaction_profile, None);
    assert!(!graph.privacy_summary.api_token_required);
    assert_eq!(
        graph.privacy_summary.image_route_behavior,
        "available-to-local-session"
    );
    assert!(graph.privacy_summary.no_telemetry);
    assert!(graph.privacy_summary.no_third_party_uploads);
    assert!(!graph.shareability_summary.raw_logs_safe_to_share);
    assert!(
        graph
            .shareability_summary
            .raw_log_caution
            .contains("sanitize"),
        "raw-log caution should tell users to sanitize/review before sharing"
    );
}

#[test]
fn shareability_summary_reflects_strict_server_privacy_mode() {
    let cache = Mutex::new(HashMap::new());
    let mut graph = load_session_graph(
        SessionSource::Codex,
        &fixture_path("codex-edge-cases.jsonl"),
        &cache,
    )
    .unwrap();
    let state = app_state_with_privacy_profile(Some(RedactionProfile::Strict));

    apply_server_privacy_summary(&mut graph, &state);

    assert_eq!(graph.privacy_summary.privacy_mode, "strict");
    assert_eq!(
        graph.privacy_summary.redaction_profile.as_deref(),
        Some("strict")
    );
    assert!(!graph.privacy_summary.api_token_required);
    assert_eq!(
        graph.privacy_summary.image_route_behavior,
        "disabled-in-privacy-mode"
    );
    assert!(!graph.shareability_summary.raw_logs_safe_to_share);
    assert!(
        graph
            .shareability_summary
            .sanitized_graph_note
            .contains("strict redaction")
    );
}

#[test]
fn scan_and_sanitize_redact_common_secrets() {
    let input = fixture_path(COMMON_AUTHORIZATION_AND_PASSWORD_FIXTURE);
    let output = temp_jsonl_path("secret-scan-output");

    let fixture_text = fs::read_to_string(&input).unwrap();
    assert!(fixture_text.contains("abcdef...xyz"));
    assert!(fixture_text.contains("PL_FIXTURE_COMMON_PASSWORD_0123456789"));

    let scan = scan_file(&input).unwrap();
    assert_scan_contains_kind(&scan, "authorization-header");
    assert_scan_contains_kind(&scan, "password-assignment");

    let report = sanitize_file(&input, &output, RedactionProfile::Standard).unwrap();
    let sanitized = fs::read_to_string(&output).unwrap();

    let _ = fs::remove_file(&output);

    assert!(report.redacted_field_count >= 2);
    assert!(!sanitized.contains("abcdef...xyz"));
    assert!(!sanitized.contains("PL_FIXTURE_COMMON_PASSWORD_0123456789"));
    assert!(sanitized.contains("[REDACTED:authorization-header]"));
    assert!(sanitized.contains("[REDACTED:password-assignment]"));
}

#[test]
fn adversarial_redaction_scan_and_standard_sanitize_redact_known_secret_shapes() {
    let input = fixture_path(ADVERSARIAL_CODEX_FIXTURE);
    let output = temp_jsonl_path("adversarial-redaction-standard-output");

    let scan = scan_file(&input).unwrap();
    for kind in [
        "private-key-block",
        "url-query-secret",
        "base64-token",
        "authorization-header",
        "cookie-header",
        "password-assignment",
        "windows-home-path",
    ] {
        assert_scan_contains_kind(&scan, kind);
    }

    let report = sanitize_file(&input, &output, RedactionProfile::Standard).unwrap();
    let sanitized = fs::read_to_string(&output).unwrap();
    let _ = fs::remove_file(&output);

    assert_no_adversarial_secrets("standard sanitized codex jsonl", &sanitized);
    for marker in [
        "[REDACTED:private-key-block]",
        "[REDACTED:url-query-secret]",
        "[REDACTED:base64-token]",
        "[REDACTED:authorization-header]",
        "[REDACTED:cookie-header]",
        "[REDACTED:windows-home-path]",
    ] {
        assert!(
            sanitized.contains(marker),
            "missing redaction marker {marker}"
        );
    }
    assert!(sanitized.contains("perlustron_redaction_report"));
    assert!(report.redacted_field_count >= 8);
}

#[test]
fn adversarial_redaction_strict_exports_do_not_leak_codex_fixture_secrets() {
    let fixture = fixture_path(ADVERSARIAL_CODEX_FIXTURE);
    let html = temp_jsonl_path("adversarial-codex-export").with_extension("html");
    let markdown = temp_jsonl_path("adversarial-codex-export").with_extension("md");
    let normalized = temp_jsonl_path("adversarial-codex-export").with_extension("json");

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
        true,
        RedactionProfile::Strict,
    )
    .unwrap();

    let html_text = fs::read_to_string(&html).unwrap();
    let markdown_text = fs::read_to_string(&markdown).unwrap();
    let json_text = fs::read_to_string(&normalized).unwrap();
    let _ = fs::remove_file(&html);
    let _ = fs::remove_file(&markdown);
    let _ = fs::remove_file(&normalized);

    assert_no_adversarial_export_sentinels("strict codex html export", &html_text);
    assert_no_adversarial_export_sentinels("strict codex markdown export", &markdown_text);
    assert_no_adversarial_export_sentinels("strict codex json export", &json_text);
    assert!(html_text.contains("Redacted export"));
    assert!(html_text.contains("Parser Health"));
    assert!(markdown_text.contains("**Redacted export:**"));
    assert!(markdown_text.contains("## Parser Health"));
    assert!(!json_text.contains("\"data:image/png;base64"));
    assert!(!json_text.contains("\"image_url\""));

    let normalized: Value = serde_json::from_str(&json_text).unwrap();
    assert_eq!(
        normalized
            .pointer("/redactionReport/profile")
            .and_then(Value::as_str),
        Some("strict")
    );
    assert!(
        normalized
            .pointer("/redactionReport/redactedFieldCount")
            .and_then(Value::as_u64)
            .unwrap_or_default()
            > 0
    );
    let events = normalized
        .get("events")
        .and_then(Value::as_array)
        .expect("normalized events");
    for event in events {
        for key in ["content", "arguments", "output", "summary", "files", "raw"] {
            if let Some(value) = event.get(key) {
                let value_text = serde_json::to_string(value).unwrap();
                assert_no_adversarial_export_sentinels(
                    &format!("strict codex event {key}"),
                    &value_text,
                );
            }
        }
    }
}

#[test]
fn adversarial_redaction_strict_exports_do_not_leak_claude_image_or_path_metadata() {
    let fixture = fixture_path(ADVERSARIAL_CLAUDE_FIXTURE);
    let html = temp_jsonl_path("adversarial-claude-export").with_extension("html");
    let markdown = temp_jsonl_path("adversarial-claude-export").with_extension("md");
    let normalized = temp_jsonl_path("adversarial-claude-export").with_extension("json");

    for (format, output) in [
        (ExportFormat::Html, &html),
        (ExportFormat::Markdown, &markdown),
        (ExportFormat::Json, &normalized),
    ] {
        write_export(
            SessionSource::Claude,
            &fixture,
            output,
            format,
            true,
            RedactionProfile::Strict,
        )
        .unwrap();
    }

    let html_text = fs::read_to_string(&html).unwrap();
    let markdown_text = fs::read_to_string(&markdown).unwrap();
    let json_text = fs::read_to_string(&normalized).unwrap();
    let _ = fs::remove_file(&html);
    let _ = fs::remove_file(&markdown);
    let _ = fs::remove_file(&normalized);

    assert_no_adversarial_export_sentinels("strict claude html export", &html_text);
    assert_no_adversarial_export_sentinels("strict claude markdown export", &markdown_text);
    assert_no_adversarial_export_sentinels("strict claude json export", &json_text);
    assert!(!json_text.contains("source.data"));
    assert!(!json_text.contains("media_type"));

    let normalized: Value = serde_json::from_str(&json_text).unwrap();
    let events = normalized
        .get("events")
        .and_then(Value::as_array)
        .expect("normalized events");
    for event in events {
        let artifacts = event
            .get("artifacts")
            .and_then(Value::as_array)
            .expect("artifacts array");
        assert!(
            artifacts.is_empty(),
            "strict exports should clear image artifacts: {event}"
        );
    }
}

#[test]
fn adversarial_redaction_unknowns_and_fixture_reports_do_not_leak_samples() {
    let input = fixture_path(ADVERSARIAL_CODEX_FIXTURE);
    let report =
        build_unknowns_report(SessionSource::Codex, &input, RedactionProfile::Strict).unwrap();

    assert!(report.unknown_event_count >= 1);
    assert!(report.malformed_line_count >= 1);
    for sample in &report.redacted_samples {
        assert_no_adversarial_export_sentinels(
            "strict adversarial unknown sample",
            &sample.redacted_preview,
        );
    }

    let output = temp_jsonl_path("adversarial-fixture-report").with_extension("md");
    write_fixture_report(
        Some(SessionSource::Codex),
        &input,
        &output,
        RedactionProfile::Strict,
    )
    .unwrap();
    let text = fs::read_to_string(&output).unwrap();
    let _ = fs::remove_file(&output);
    assert!(text.contains("Safe Contribution Checklist"));
    assert_no_adversarial_export_sentinels("strict adversarial fixture report", &text);
}

#[test]
fn adversarial_redaction_fixtures_parse() {
    let cache = Mutex::new(HashMap::new());

    for fixture in ADVERSARIAL_REDACTION_FIXTURES {
        let graph = load_session_graph(fixture.source, &fixture_path(fixture.path), &cache)
            .unwrap_or_else(|err| panic!("{} should parse: {err}", fixture.name));
        assert!(
            graph.parser_health.total_lines_read > 0,
            "{} should read fixture lines",
            fixture.name
        );

        match fixture.source {
            SessionSource::Codex => {
                assert!(!graph.prompts.is_empty(), "{}", fixture.name);
                assert!(
                    graph.prompts.iter().any(|prompt| !prompt.calls.is_empty()),
                    "{} should preserve tool-call coverage",
                    fixture.name
                );
                assert!(
                    graph
                        .prompts
                        .iter()
                        .any(|prompt| !prompt.file_changes.is_empty()),
                    "{} should preserve file-change coverage",
                    fixture.name
                );
                assert!(
                    graph.parser_health.unknown_event_count >= 1,
                    "{}",
                    fixture.name
                );
                assert!(
                    graph.parser_health.malformed_line_count >= 1,
                    "{}",
                    fixture.name
                );
                assert!(graph.parser_health.image_count >= 1, "{}", fixture.name);
            }
            SessionSource::Claude => {
                assert!(graph.parser_health.image_count >= 1, "{}", fixture.name);
                assert!(
                    graph.parser_health.tool_result_count >= 1,
                    "{} should preserve tool-result coverage",
                    fixture.name
                );
            }
        }
    }
}

#[test]
fn unknowns_and_fixture_reports_are_redacted_and_issue_ready() {
    let input = fixture_path("codex-sanitized.jsonl");
    let report =
        build_unknowns_report(SessionSource::Codex, &input, RedactionProfile::Strict).unwrap();

    assert_eq!(report.unknown_event_count, 1);
    assert_eq!(report.malformed_line_count, 1);
    assert!(report.suggested_github_issue.contains("Perlustron version"));
    assert!(
        report
            .redacted_samples
            .iter()
            .any(|sample| sample.source_event_type.contains("fixture_unknown_event"))
    );

    let output = temp_jsonl_path("fixture-report").with_extension("md");
    write_fixture_report(
        Some(SessionSource::Codex),
        &input,
        &output,
        RedactionProfile::Strict,
    )
    .unwrap();
    let text = fs::read_to_string(&output).unwrap();
    let _ = fs::remove_file(&output);
    assert!(text.contains("Safe Contribution Checklist"));
    assert!(!text.contains("Inspect the sanitized Perlustron fixture."));
}
