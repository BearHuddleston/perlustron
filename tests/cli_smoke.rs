// SPDX-License-Identifier: MIT OR Apache-2.0

use std::{
    env, fs,
    io::{BufRead, BufReader, Read, Write},
    net::{TcpListener, TcpStream},
    path::{Path, PathBuf},
    process::{Child, Command, Stdio},
    sync::{
        atomic::{AtomicUsize, Ordering},
        mpsc,
    },
    time::Duration,
};

static TEMP_COUNTER: AtomicUsize = AtomicUsize::new(0);

fn perlustron_bin() -> PathBuf {
    if let Some(path) = option_env!("CARGO_BIN_EXE_perlustron") {
        return PathBuf::from(path);
    }

    let mut path = env::current_exe().expect("test executable path");
    path.pop();
    if path.ends_with("deps") {
        path.pop();
    }
    path.push(format!("perlustron{}", env::consts::EXE_SUFFIX));
    path
}

fn repo_path(path: &str) -> PathBuf {
    Path::new(env!("CARGO_MANIFEST_DIR")).join(path)
}

struct TempDirGuard {
    path: PathBuf,
}

impl TempDirGuard {
    fn new(test_name: &str) -> Self {
        let counter = TEMP_COUNTER.fetch_add(1, Ordering::Relaxed);
        let path = env::temp_dir().join(format!(
            "perlustron-cli-smoke-{}-{test_name}-{counter}",
            std::process::id()
        ));
        let _ = fs::remove_dir_all(&path);
        fs::create_dir_all(&path).expect("create smoke test temp directory");
        Self { path }
    }

    fn path(&self, name: &str, extension: &str) -> PathBuf {
        self.path.join(format!("{name}.{extension}"))
    }
}

impl Drop for TempDirGuard {
    fn drop(&mut self) {
        let _ = fs::remove_dir_all(&self.path);
    }
}

fn run_ok(args: &[&str]) -> String {
    let output = Command::new(perlustron_bin())
        .current_dir(env!("CARGO_MANIFEST_DIR"))
        .args(args)
        .output()
        .unwrap_or_else(|error| panic!("failed to run perlustron {args:?}: {error}"));
    assert!(
        output.status.success(),
        "perlustron {args:?} failed\nstdout:\n{}\nstderr:\n{}",
        String::from_utf8_lossy(&output.stdout),
        String::from_utf8_lossy(&output.stderr)
    );
    String::from_utf8_lossy(&output.stdout).into_owned()
}

#[test]
fn cli_help_and_version_are_useful() {
    let help = run_ok(&["--help"]);
    assert!(help.contains("perlustron diff LEFT.jsonl RIGHT.jsonl"));
    assert!(help.contains("perlustron insights SESSION.jsonl"));
    assert!(help.contains("perlustron unknowns SESSION.jsonl"));
    assert!(help.contains("--host 127.0.0.1"));

    let version = run_ok(&["--version"]);
    assert!(version.contains("perlustron"));
    assert!(version.contains("parser schema"));
    assert!(version.contains("trace schema"));
}

#[test]
fn cli_reports_exports_diff_insights_unknowns_and_bench_work() {
    let temp = TempDirGuard::new("reports");
    let codex = repo_path("fixtures/codex-sanitized.jsonl");
    let loop_fixture = repo_path("fixtures/codex-loop-error.jsonl");
    let codex_str = codex.to_str().expect("fixture path is utf-8");
    let loop_str = loop_fixture.to_str().expect("fixture path is utf-8");

    let status = run_ok(&["status", codex_str]);
    assert!(status.contains("parser health"));
    assert!(status.contains("unknown events"));

    let scan = run_ok(&["scan", codex_str]);
    assert!(scan.contains("Perlustron scan"));

    let sanitized = temp.path("sanitized", "jsonl");
    let sanitized_str = sanitized.to_str().expect("temp path is utf-8");
    run_ok(&[
        "sanitize",
        codex_str,
        "-o",
        sanitized_str,
        "--profile",
        "strict",
    ]);
    let sanitized_text = fs::read_to_string(&sanitized).expect("sanitized output");
    assert!(sanitized_text.contains("perlustron_redaction_report"));

    let html_report = temp.path("report", "html");
    let html_report_str = html_report.to_str().expect("temp path is utf-8");
    run_ok(&[
        "export",
        loop_str,
        "--format",
        "html",
        "--redacted",
        "-o",
        html_report_str,
    ]);
    let html = fs::read_to_string(&html_report).expect("html report");
    assert!(html.contains("Insight Summary"));
    assert_no_sensitive_loop_fixture_text(&html);

    let markdown_report = temp.path("report", "md");
    let markdown_report_str = markdown_report.to_str().expect("temp path is utf-8");
    run_ok(&[
        "export",
        loop_str,
        "--format",
        "markdown",
        "--redacted",
        "-o",
        markdown_report_str,
    ]);
    let markdown = fs::read_to_string(&markdown_report).expect("markdown report");
    assert!(markdown.contains("## Insight Summary"));
    assert_no_sensitive_loop_fixture_text(&markdown);

    let json_trace = temp.path("trace", "json");
    let json_trace_str = json_trace.to_str().expect("temp path is utf-8");
    run_ok(&[
        "export",
        codex_str,
        "--format",
        "json",
        "-o",
        json_trace_str,
    ]);
    let trace = fs::read_to_string(&json_trace).expect("trace json");
    assert!(trace.contains("\"schemaVersion\""));
    assert!(trace.contains("\"parserHealth\""));

    let diff_text = run_ok(&["diff", codex_str, loop_str]);
    assert!(diff_text.contains("Perlustron session diff"));
    assert!(diff_text.contains("first likely divergence"));

    let diff_json = temp.path("diff", "json");
    let diff_json_str = diff_json.to_str().expect("temp path is utf-8");
    run_ok(&[
        "diff",
        codex_str,
        loop_str,
        "--format",
        "json",
        "--redacted",
        "-o",
        diff_json_str,
    ]);
    let diff = fs::read_to_string(&diff_json).expect("diff json");
    assert!(diff.contains("\"schemaVersion\""));
    assert!(diff.contains("perlustron-trace-diff-v1"));
    assert!(diff.contains("\"redactionReport\""));
    assert_no_sensitive_loop_fixture_text(&diff);

    let diff_html = temp.path("diff", "html");
    let diff_html_str = diff_html.to_str().expect("temp path is utf-8");
    run_ok(&[
        "diff",
        codex_str,
        loop_str,
        "--format",
        "html",
        "--redacted",
        "-o",
        diff_html_str,
    ]);
    let diff_html_text = fs::read_to_string(&diff_html).expect("diff html");
    assert!(diff_html_text.contains("Perlustron Session Diff"));
    assert_no_sensitive_loop_fixture_text(&diff_html_text);

    let insights_json = temp.path("insights", "json");
    let insights_json_str = insights_json.to_str().expect("temp path is utf-8");
    run_ok(&[
        "insights",
        loop_str,
        "--format",
        "json",
        "--redacted",
        "-o",
        insights_json_str,
    ]);
    let insights = fs::read_to_string(&insights_json).expect("insights json");
    assert!(insights.contains("\"failureChain\""));
    assert!(insights.contains("\"repeatedPatterns\""));
    assert_no_sensitive_loop_fixture_text(&insights);

    let unknowns_json = temp.path("unknowns", "json");
    let unknowns_json_str = unknowns_json.to_str().expect("temp path is utf-8");
    run_ok(&["unknowns", codex_str, "--redacted", "-o", unknowns_json_str]);
    let unknowns = fs::read_to_string(&unknowns_json).expect("unknowns json");
    assert!(unknowns.contains("\"suggestedGithubIssue\""));
    assert!(unknowns.contains("\"redactedSamples\""));

    let fixture_report = temp.path("fixture-report", "md");
    let fixture_report_str = fixture_report.to_str().expect("temp path is utf-8");
    run_ok(&[
        "fixture-report",
        codex_str,
        "--redacted",
        "-o",
        fixture_report_str,
    ]);
    let fixture_report_text = fs::read_to_string(&fixture_report).expect("fixture report");
    assert!(fixture_report_text.contains("Safe Contribution Checklist"));

    let bench = run_ok(&[
        "bench",
        "--generate",
        "250",
        "--append-lines",
        "25",
        "--max-full-ms",
        "1000",
        "--max-status-ms",
        "1000",
        "--max-append-ms",
        "1000",
    ]);
    assert!(bench.contains("full parse"));
    assert!(bench.contains("diff time"));
    assert!(bench.contains("unknown report"));
}

#[test]
fn demo_server_serves_local_assets_and_requires_api_token() {
    let temp = TempDirGuard::new("server");
    let listener = TcpListener::bind("127.0.0.1:0").expect("reserve local port");
    let port = listener.local_addr().expect("local address").port();
    drop(listener);

    let mut child = Command::new(perlustron_bin())
        .current_dir(env!("CARGO_MANIFEST_DIR"))
        .args(["--demo", "--no-open", "--port", &port.to_string()])
        .stdout(Stdio::piped())
        .stderr(Stdio::piped())
        .spawn()
        .expect("spawn demo server");
    let stdout = child.stdout.take().expect("server stdout");
    let mut guard = ChildGuard(&mut child);
    let (sender, receiver) = mpsc::channel();
    std::thread::spawn(move || {
        let reader = BufReader::new(stdout);
        for line in reader.lines().map_while(Result::ok) {
            if line.contains("Serving Perlustron at ") {
                let _ = sender.send(line);
                return;
            }
        }
    });

    let line = receiver
        .recv_timeout(Duration::from_secs(10))
        .expect("demo server should print startup URL");
    let token = line
        .split("?token=")
        .nth(1)
        .expect("startup URL includes token")
        .trim()
        .to_owned();

    let index = http_get(port, "/");
    assert!(index.starts_with("HTTP/1.1 200 OK"), "{index}");
    assert!(index.contains("Perlustron"));
    assert_no_remote_runtime_requests(&index);

    let app_js = http_get(port, "/app.js");
    assert!(app_js.starts_with("HTTP/1.1 200 OK"), "{app_js}");
    assert_no_remote_runtime_requests(&app_js);

    let unauthorized = http_get(port, "/api/session");
    assert!(
        unauthorized.starts_with("HTTP/1.1 401 Unauthorized"),
        "{unauthorized}"
    );
    assert!(unauthorized.contains("missing or invalid local session token"));

    let authorized = http_get(port, &format!("/api/session?token={token}"));
    assert!(authorized.starts_with("HTTP/1.1 200 OK"), "{authorized}");
    assert!(authorized.contains("\"parserHealth\""));
    let session_path = response_json(&authorized)
        .get("sessionPath")
        .and_then(|value| value.as_str())
        .expect("authorized session has path")
        .to_owned();

    let diff = http_get(
        port,
        &format!(
            "/api/session/diff?token={token}&rightSession={}",
            encode_query_component(&session_path)
        ),
    );
    assert!(diff.starts_with("HTTP/1.1 200 OK"), "{diff}");
    assert!(diff.contains("\"schemaVersion\""));
    assert!(diff.contains("\"divergence\""));

    let unknowns = http_get(port, &format!("/api/session/unknowns?token={token}"));
    assert!(unknowns.starts_with("HTTP/1.1 200 OK"), "{unknowns}");
    assert!(unknowns.contains("\"suggestedGithubIssue\""));

    let outside_session = temp.path("outside-session", "jsonl");
    fs::write(&outside_session, "{}\n").expect("write outside session probe");
    let outside = http_get(
        port,
        &format!(
            "/api/session?token={token}&session={}",
            encode_query_component(&outside_session.display().to_string())
        ),
    );
    assert!(outside.starts_with("HTTP/1.1 400 Bad Request"), "{outside}");
    assert!(
        outside.contains("selected session must be under")
            || outside.contains("selected session does not exist")
            || outside.contains("selected session is not a JSONL file"),
        "{outside}"
    );

    guard.kill();
}

fn response_json(response: &str) -> serde_json::Value {
    let body = response
        .split("\r\n\r\n")
        .nth(1)
        .expect("response has body");
    serde_json::from_str(body).expect("response body is json")
}

struct ChildGuard<'a>(&'a mut Child);

impl ChildGuard<'_> {
    fn kill(&mut self) {
        let _ = self.0.kill();
        let _ = self.0.wait();
    }
}

impl Drop for ChildGuard<'_> {
    fn drop(&mut self) {
        self.kill();
    }
}

fn http_get(port: u16, path: &str) -> String {
    let mut stream = TcpStream::connect(("127.0.0.1", port)).expect("connect to demo server");
    write!(
        stream,
        "GET {path} HTTP/1.1\r\nHost: 127.0.0.1:{port}\r\nConnection: close\r\n\r\n"
    )
    .expect("write request");
    let mut response = String::new();
    stream.read_to_string(&mut response).expect("read response");
    response
}

fn encode_query_component(value: &str) -> String {
    let mut encoded = String::new();
    for byte in value.bytes() {
        match byte {
            b'A'..=b'Z' | b'a'..=b'z' | b'0'..=b'9' | b'-' | b'_' | b'.' | b'~' => {
                encoded.push(byte as char)
            }
            _ => encoded.push_str(&format!("%{byte:02X}")),
        }
    }
    encoded
}

fn assert_no_sensitive_loop_fixture_text(text: &str) {
    for needle in [
        "Run the sanitized test suite",
        "Permission denied",
        "cargo test",
        "Inspect the sanitized Perlustron fixture",
        "C:\\Fixtures",
    ] {
        assert!(
            !text.contains(needle),
            "redacted output leaked sensitive fixture text `{needle}`"
        );
    }
}

fn assert_no_remote_runtime_requests(text: &str) {
    for needle in [
        "fetch(\"http://",
        "fetch('http://",
        "fetch(\"https://",
        "fetch('https://",
        "import(\"http://",
        "import('http://",
        "import(\"https://",
        "import('https://",
        "new EventSource(\"http://",
        "new EventSource('http://",
        "new EventSource(\"https://",
        "new EventSource('https://",
        "new WebSocket(\"ws://",
        "new WebSocket('ws://",
        "new WebSocket(\"wss://",
        "new WebSocket('wss://",
    ] {
        assert!(
            !text.contains(needle),
            "asset contains remote runtime request pattern `{needle}`"
        );
    }
}
