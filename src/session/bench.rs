// SPDX-License-Identifier: MIT OR Apache-2.0

#[derive(Debug, Clone, Copy, Default, PartialEq)]
struct BenchThresholds {
    max_full_parse_ms: Option<f64>,
    max_status_refresh_ms: Option<f64>,
    max_append_parse_ms: Option<f64>,
    max_diff_ms: Option<f64>,
    max_export_ms: Option<f64>,
    max_sanitization_ms: Option<f64>,
}

struct BenchmarkReport {
    source: SessionSource,
    generated_lines: Option<usize>,
    path: PathBuf,
    initial_lines: usize,
    appended_lines: usize,
    renderable_events: usize,
    status_renderable_events: usize,
    append_renderable_events: Option<usize>,
    full_parse: Duration,
    status_refresh: Duration,
    append_parse: Option<Duration>,
    diff_time: Duration,
    export_time: Duration,
    sanitization_time: Duration,
    unknown_report_time: Duration,
    export_output_bytes: u64,
    threshold_failures: Vec<String>,
}

fn run_benchmark(
    source: Option<SessionSource>,
    input: Option<PathBuf>,
    generate_lines: Option<usize>,
    append_lines: usize,
    thresholds: BenchThresholds,
) -> Result<BenchmarkReport> {
    if input.is_some() && generate_lines.is_some() {
        return Err(anyhow!("bench accepts either a session path or --generate, not both"));
    }

    let (source, path, generated_lines, remove_after) =
        benchmark_input(source, input, generate_lines)?;
    let cache = Mutex::new(HashMap::new());

    let started = Instant::now();
    let graph = load_session_graph(source, &path, &cache)?;
    let full_parse = started.elapsed();

    let started = Instant::now();
    let status = load_session_status(source, &path, &cache)?;
    let status_refresh = started.elapsed();

    let (append_parse, append_renderable_events) = if append_lines > 0 {
        let append_path = benchmark_append_path(&path)?;
        fs::copy(&path, &append_path).with_context(|| {
            format!(
                "failed to copy benchmark input {} to {}",
                path.display(),
                append_path.display()
            )
        })?;
        let append_cache = Mutex::new(HashMap::new());
        load_session_graph(source, &append_path, &append_cache)?;
        append_generated_fixture(source, &append_path, graph.line_count, append_lines)?;
        let started = Instant::now();
        let appended_graph = load_session_graph(source, &append_path, &append_cache)?;
        let duration = started.elapsed();
        let renderable = appended_graph.parser_health.renderable_event_count;
        let _ = fs::remove_file(&append_path);
        (Some(duration), Some(renderable))
    } else {
        (None, None)
    };

    let started = Instant::now();
    let _ = build_trace_diff_cached(
        source,
        source,
        &path,
        &path,
        &cache,
        true,
        RedactionProfile::Strict,
    )?;
    let diff_time = started.elapsed();

    let export_path = benchmark_temp_path("export-html").with_extension("html");
    let started = Instant::now();
    write_export(
        source,
        &path,
        &export_path,
        ExportFormat::Html,
        true,
        RedactionProfile::Strict,
    )?;
    let export_time = started.elapsed();
    let export_output_bytes = fs::metadata(&export_path)
        .map(|metadata| metadata.len())
        .unwrap_or_default();
    let _ = fs::remove_file(&export_path);

    let sanitize_path = benchmark_temp_path("sanitize").with_extension("jsonl");
    let started = Instant::now();
    sanitize_file(&path, &sanitize_path, RedactionProfile::Strict)?;
    let sanitization_time = started.elapsed();
    let _ = fs::remove_file(&sanitize_path);

    let started = Instant::now();
    let _ = build_unknowns_report_cached(source, &path, &cache, RedactionProfile::Strict)?;
    let unknown_report_time = started.elapsed();

    if remove_after {
        let _ = fs::remove_file(&path);
    }

    let mut report = BenchmarkReport {
        source,
        generated_lines,
        path,
        initial_lines: graph.line_count,
        appended_lines: append_lines,
        renderable_events: graph.parser_health.renderable_event_count,
        status_renderable_events: status.renderable_event_count,
        append_renderable_events,
        full_parse,
        status_refresh,
        append_parse,
        diff_time,
        export_time,
        sanitization_time,
        unknown_report_time,
        export_output_bytes,
        threshold_failures: Vec::new(),
    };
    collect_threshold_failures(&mut report, thresholds);
    Ok(report)
}

fn benchmark_input(
    source: Option<SessionSource>,
    input: Option<PathBuf>,
    generate_lines: Option<usize>,
) -> Result<(SessionSource, PathBuf, Option<usize>, bool)> {
    if let Some(lines) = generate_lines {
        if lines == 0 {
            return Err(anyhow!("bench --generate requires at least one line"));
        }
        let path = benchmark_temp_path("generated");
        write_generated_codex_fixture(&path, 0, lines)?;
        return Ok((SessionSource::Codex, path, Some(lines), true));
    }

    let input = input.ok_or_else(|| anyhow!("bench requires a session JSONL path or --generate"))?;
    let source = source_for_path(&input, source);
    Ok((source, input, None, false))
}

fn benchmark_temp_path(label: &str) -> PathBuf {
    let nanos = SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .unwrap_or_default()
        .as_nanos();
    env::temp_dir().join(format!(
        "perlustron-bench-{label}-{}-{nanos}.jsonl",
        std::process::id()
    ))
}

fn benchmark_append_path(path: &Path) -> Result<PathBuf> {
    let stem = path
        .file_stem()
        .and_then(|stem| stem.to_str())
        .unwrap_or("session");
    let append_path = benchmark_temp_path(&format!("{stem}-append"));
    Ok(append_path)
}

fn write_generated_codex_fixture(path: &Path, start_index: usize, line_count: usize) -> Result<()> {
    let file = fs::File::create(path)
        .with_context(|| format!("failed to create generated benchmark {}", path.display()))?;
    let mut writer = BufWriter::new(file);
    write_generated_codex_lines(&mut writer, start_index, line_count)?;
    writer
        .flush()
        .with_context(|| format!("failed to flush generated benchmark {}", path.display()))
}

fn append_generated_fixture(
    source: SessionSource,
    path: &Path,
    start_index: usize,
    line_count: usize,
) -> Result<()> {
    let file = fs::OpenOptions::new()
        .append(true)
        .open(path)
        .with_context(|| format!("failed to append benchmark lines to {}", path.display()))?;
    let mut writer = BufWriter::new(file);
    match source {
        SessionSource::Codex => write_generated_codex_lines(&mut writer, start_index, line_count)?,
        SessionSource::Claude => {
            write_generated_claude_lines(&mut writer, start_index, line_count)?
        }
    }
    writer
        .flush()
        .with_context(|| format!("failed to flush appended benchmark {}", path.display()))
}

fn write_generated_codex_lines(
    writer: &mut impl Write,
    start_index: usize,
    line_count: usize,
) -> Result<()> {
    for offset in 0..line_count {
        let event_index = start_index + offset;
        let line = generated_codex_line(event_index);
        writeln!(writer, "{line}").context("failed to write generated benchmark line")?;
    }
    Ok(())
}

fn generated_codex_line(event_index: usize) -> String {
    if event_index == 0 {
        return json!({
            "timestamp": "2026-05-10T16:00:00Z",
            "type": "session_meta",
            "payload": {
                "id": "perlustron-benchmark-session",
                "cwd": "C:\\Fixtures\\perlustron-benchmark",
                "cli_version": "0.0.0-benchmark",
                "originator": "perlustron-bench",
                "source": "codex",
                "model_provider": "openai"
            }
        })
        .to_string();
    }

    let turn = event_index / 5;
    let timestamp = format!("2026-05-10T16:{:02}:{:02}Z", (event_index / 60) % 60, event_index % 60);
    match event_index % 5 {
        1 => json!({
            "timestamp": timestamp,
            "type": "response_item",
            "payload": {
                "type": "message",
                "role": "user",
                "content": [{ "type": "input_text", "text": format!("Benchmark prompt {turn}") }]
            }
        }),
        2 => json!({
            "timestamp": timestamp,
            "type": "response_item",
            "payload": {
                "type": "function_call",
                "name": "shell_command",
                "call_id": format!("bench-shell-{turn}"),
                "arguments": { "command": "echo sanitized benchmark" }
            }
        }),
        3 => json!({
            "timestamp": timestamp,
            "type": "response_item",
            "payload": {
                "type": "function_call_output",
                "call_id": format!("bench-shell-{turn}"),
                "output": format!("sanitized benchmark output {turn}")
            }
        }),
        4 => json!({
            "timestamp": timestamp,
            "type": "response_item",
            "payload": {
                "type": "message",
                "role": "assistant",
                "content": [{ "type": "output_text", "text": format!("Benchmark answer {turn}") }]
            }
        }),
        _ => json!({
            "timestamp": timestamp,
            "type": "event_msg",
            "payload": {
                "type": "token_count",
                "info": {
                    "model_context_window": 258400,
                    "last_token_usage": {
                        "input_tokens": 1000 + turn,
                        "output_tokens": 100,
                        "total_tokens": 1100 + turn
                    }
                }
            }
        }),
    }
    .to_string()
}

fn write_generated_claude_lines(
    writer: &mut impl Write,
    start_index: usize,
    line_count: usize,
) -> Result<()> {
    for offset in 0..line_count {
        let event_index = start_index + offset;
        let line = generated_claude_line(event_index);
        writeln!(writer, "{line}").context("failed to write generated benchmark line")?;
    }
    Ok(())
}

fn generated_claude_line(event_index: usize) -> String {
    let turn = event_index / 4;
    let timestamp = format!(
        "2026-05-10T17:{:02}:{:02}Z",
        (event_index / 60) % 60,
        event_index % 60
    );
    match event_index % 4 {
        0 => json!({
            "timestamp": timestamp,
            "type": "user",
            "sessionId": "perlustron-claude-benchmark-session",
            "cwd": "C:\\Fixtures\\perlustron-benchmark",
            "uuid": format!("bench-claude-prompt-{turn}"),
            "message": {
                "content": [{ "type": "text", "text": format!("Benchmark Claude prompt {turn}") }]
            }
        }),
        1 => json!({
            "timestamp": timestamp,
            "type": "assistant",
            "sessionId": "perlustron-claude-benchmark-session",
            "cwd": "C:\\Fixtures\\perlustron-benchmark",
            "message": {
                "content": [
                    { "type": "text", "text": format!("Benchmark Claude answer {turn}") },
                    {
                        "type": "tool_use",
                        "id": format!("toolu_bench_{turn}"),
                        "name": "Read",
                        "input": { "file_path": "README.md" }
                    }
                ]
            }
        }),
        2 => json!({
            "timestamp": timestamp,
            "type": "user",
            "sessionId": "perlustron-claude-benchmark-session",
            "cwd": "C:\\Fixtures\\perlustron-benchmark",
            "message": {
                "content": [{
                    "type": "tool_result",
                    "tool_use_id": format!("toolu_bench_{turn}"),
                    "content": format!("Synthetic Claude benchmark result {turn}.")
                }]
            }
        }),
        _ => json!({
            "timestamp": timestamp,
            "type": "summary",
            "sessionId": "perlustron-claude-benchmark-session",
            "cwd": "C:\\Fixtures\\perlustron-benchmark",
            "summary": format!("Benchmark Claude summary {turn}."),
            "reason": "benchmark"
        }),
    }
    .to_string()
}

fn collect_threshold_failures(report: &mut BenchmarkReport, thresholds: BenchThresholds) {
    push_threshold_failure(
        &mut report.threshold_failures,
        "full parse",
        report.full_parse,
        thresholds.max_full_parse_ms,
    );
    push_threshold_failure(
        &mut report.threshold_failures,
        "status refresh",
        report.status_refresh,
        thresholds.max_status_refresh_ms,
    );
    if let Some(append_parse) = report.append_parse {
        push_threshold_failure(
            &mut report.threshold_failures,
            "append parse",
            append_parse,
            thresholds.max_append_parse_ms,
        );
    }
    push_threshold_failure(
        &mut report.threshold_failures,
        "warm diff",
        report.diff_time,
        thresholds.max_diff_ms,
    );
    push_threshold_failure(
        &mut report.threshold_failures,
        "export",
        report.export_time,
        thresholds.max_export_ms,
    );
    push_threshold_failure(
        &mut report.threshold_failures,
        "sanitization",
        report.sanitization_time,
        thresholds.max_sanitization_ms,
    );
}

fn push_threshold_failure(
    failures: &mut Vec<String>,
    label: &str,
    duration: Duration,
    threshold_ms: Option<f64>,
) {
    let Some(threshold_ms) = threshold_ms else {
        return;
    };
    let duration_ms = duration.as_secs_f64() * 1_000.0;
    if duration_ms > threshold_ms {
        failures.push(format!(
            "{label} took {:.2} ms, above {:.2} ms",
            duration_ms, threshold_ms
        ));
    }
}

fn print_benchmark_report(report: &BenchmarkReport) {
    println!("Perlustron benchmark");
    println!("  source: {}", report.source.as_str());
    if let Some(lines) = report.generated_lines {
        println!("  input: generated sanitized Codex fixture ({lines} lines)");
    } else {
        println!("  input: {}", report.path.display());
    }
    println!("  lines: {}", report.initial_lines);
    println!("  renderable events: {}", report.renderable_events);
    println!(
        "  status renderable events: {}",
        report.status_renderable_events
    );
    println!("  full parse: {}", format_duration_ms(report.full_parse));
    println!(
        "  status refresh: {}",
        format_duration_ms(report.status_refresh)
    );
    if let Some(append_parse) = report.append_parse {
        println!("  append lines: {}", report.appended_lines);
        if let Some(renderable) = report.append_renderable_events {
            println!("  append renderable events: {renderable}");
        }
        println!("  append parse: {}", format_duration_ms(append_parse));
    }
    println!(
        "  warm diff time: {}",
        format_duration_ms(report.diff_time)
    );
    println!("  export time: {}", format_duration_ms(report.export_time));
    println!(
        "  sanitization time: {}",
        format_duration_ms(report.sanitization_time)
    );
    println!(
        "  warm unknown report time: {}",
        format_duration_ms(report.unknown_report_time)
    );
    println!("  export output size: {} bytes", report.export_output_bytes);
    for failure in &report.threshold_failures {
        println!("  threshold failure: {failure}");
    }
}

fn format_duration_ms(duration: Duration) -> String {
    format!("{:.2} ms", duration.as_secs_f64() * 1_000.0)
}
