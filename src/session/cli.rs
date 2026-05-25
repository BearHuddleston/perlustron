// SPDX-License-Identifier: MIT OR Apache-2.0

use std::io::IsTerminal;

pub async fn run() -> Result<()> {
    init_tracing();
    match parse_cli(env::args().skip(1).collect::<Vec<_>>())? {
        CliAction::Help => {
            print_help();
            Ok(())
        }
        CliAction::Version => {
            print_version();
            Ok(())
        }
        CliAction::Serve(options) => run_server(options).await,
        CliAction::Status { source, path } => {
            let graph = parse_graph_for_file(source_for_path(&path, source), &path)?;
            print_status(&graph);
            Ok(())
        }
        CliAction::Scan { path } => {
            let report = scan_file(&path)?;
            print_scan_report(&report);
            if report.finding_count > 0 {
                std::process::exit(2);
            }
            Ok(())
        }
        CliAction::Sanitize {
            input,
            output,
            profile,
        } => {
            let report = sanitize_file(&input, &output, profile)?;
            println!(
                "Wrote sanitized JSONL to {} using profile `{}` ({} redactions).",
                output.display(),
                report.profile,
                report.redacted_field_count
            );
            Ok(())
        }
        CliAction::Export {
            source,
            input,
            output,
            format,
            redacted,
            profile,
        } => {
            write_export(
                source_for_path(&input, source),
                &input,
                &output,
                format,
                redacted,
                profile,
            )?;
            println!(
                "Wrote {} export to {}{}.",
                format.as_str(),
                output.display(),
                if redacted { " with redaction" } else { "" }
            );
            Ok(())
        }
        CliAction::Diff {
            left_source,
            right_source,
            left_input,
            right_input,
            output,
            format,
            redacted,
            profile,
        } => {
            let rendered = write_diff(DiffWriteOptions {
                left_source,
                right_source,
                left_input: &left_input,
                right_input: &right_input,
                output: output.as_deref(),
                format,
                redacted,
                profile,
            })?;
            if let Some(rendered) = rendered {
                print!("{rendered}");
            } else if let Some(output) = output {
                println!(
                    "Wrote {} diff report to {}{}.",
                    format.as_str(),
                    output.display(),
                    if redacted { " with redaction" } else { "" }
                );
            }
            Ok(())
        }
        CliAction::Insights {
            source,
            input,
            output,
            format,
            redacted,
            profile,
        } => {
            let rendered = write_insights_report(
                source,
                &input,
                output.as_deref(),
                format,
                redacted,
                profile,
            )?;
            if let Some(rendered) = rendered {
                print!("{rendered}");
            } else if let Some(output) = output {
                println!(
                    "Wrote {} insights report to {}{}.",
                    format.as_str(),
                    output.display(),
                    if redacted { " with redaction" } else { "" }
                );
            }
            Ok(())
        }
        CliAction::Unknowns {
            source,
            input,
            output,
            profile,
        } => {
            let rendered = write_unknowns_report(source, &input, output.as_deref(), profile)?;
            if let Some(rendered) = rendered {
                print!("{rendered}");
            } else if let Some(output) = output {
                println!("Wrote redacted unknown-event report to {}.", output.display());
            }
            Ok(())
        }
        CliAction::FixtureReport {
            source,
            input,
            output,
            profile,
        } => {
            write_fixture_report(source, &input, &output, profile)?;
            println!("Wrote fixture report to {}.", output.display());
            Ok(())
        }
        CliAction::Bench {
            source,
            input,
            generate_lines,
            append_lines,
            thresholds,
        } => {
            let report = run_benchmark(source, input, generate_lines, append_lines, thresholds)?;
            let threshold_failed = !report.threshold_failures.is_empty();
            print_benchmark_report(&report);
            if threshold_failed {
                std::process::exit(2);
            }
            Ok(())
        }
    }
}

enum CliAction {
    Help,
    Version,
    Serve(ServerOptions),
    Status {
        source: Option<SessionSource>,
        path: PathBuf,
    },
    Scan {
        path: PathBuf,
    },
    Sanitize {
        input: PathBuf,
        output: PathBuf,
        profile: RedactionProfile,
    },
    Export {
        source: Option<SessionSource>,
        input: PathBuf,
        output: PathBuf,
        format: ExportFormat,
        redacted: bool,
        profile: RedactionProfile,
    },
    Diff {
        left_source: Option<SessionSource>,
        right_source: Option<SessionSource>,
        left_input: PathBuf,
        right_input: PathBuf,
        output: Option<PathBuf>,
        format: DiffFormat,
        redacted: bool,
        profile: RedactionProfile,
    },
    Insights {
        source: Option<SessionSource>,
        input: PathBuf,
        output: Option<PathBuf>,
        format: DiffFormat,
        redacted: bool,
        profile: RedactionProfile,
    },
    Unknowns {
        source: Option<SessionSource>,
        input: PathBuf,
        output: Option<PathBuf>,
        profile: RedactionProfile,
    },
    FixtureReport {
        source: Option<SessionSource>,
        input: PathBuf,
        output: PathBuf,
        profile: RedactionProfile,
    },
    Bench {
        source: Option<SessionSource>,
        input: Option<PathBuf>,
        generate_lines: Option<usize>,
        append_lines: usize,
        thresholds: BenchThresholds,
    },
}

fn parse_cli(args: Vec<String>) -> Result<CliAction> {
    if args.iter().any(|arg| arg == "--version" || arg == "-V") {
        return Ok(CliAction::Version);
    }
    if args.iter().any(|arg| arg == "--help" || arg == "-h") {
        return Ok(CliAction::Help);
    }
    match args.first().map(String::as_str) {
        Some("status") => parse_status_command(&args[1..]),
        Some("scan") => parse_scan_command(&args[1..]),
        Some("sanitize") => parse_sanitize_command(&args[1..]),
        Some("export") => parse_export_command(&args[1..]),
        Some("diff") => parse_diff_command(&args[1..]),
        Some("insights") => parse_insights_command(&args[1..]),
        Some("unknowns") => parse_unknowns_command(&args[1..]),
        Some("fixture-report") => parse_fixture_report_command(&args[1..]),
        Some("bench") => parse_bench_command(&args[1..]),
        Some("help") => Ok(CliAction::Help),
        _ => parse_serve_command(&args),
    }
}


#[derive(Clone, Copy)]
enum SingleInputRedacted {
    Reject,
    Flag,
    StrictProfile,
}

#[derive(Clone, Copy)]
enum SingleInputOutput {
    Optional,
    Required(&'static str),
}

#[derive(Clone, Copy)]
enum SingleInputFormats<F> {
    None,
    Optional {
        default: F,
        parse_arg: fn(Option<&String>, &str) -> Result<F>,
        parse_value: fn(&str) -> Result<F>,
    },
    Required {
        missing_message: &'static str,
        parse_arg: fn(Option<&String>, &str) -> Result<F>,
        parse_value: fn(&str) -> Result<F>,
    },
}

#[derive(Clone, Copy)]
struct SingleInputCommandConfig<F> {
    command: &'static str,
    allow_source: bool,
    default_profile: RedactionProfile,
    redacted: SingleInputRedacted,
    output: SingleInputOutput,
    formats: SingleInputFormats<F>,
}

struct SingleInputCommandOptions<F> {
    source: Option<SessionSource>,
    input: PathBuf,
    output: Option<PathBuf>,
    format: Option<F>,
    redacted: bool,
    profile: RedactionProfile,
}

fn parse_single_input_command<F: Copy>(
    args: &[String],
    config: SingleInputCommandConfig<F>,
) -> Result<SingleInputCommandOptions<F>> {
    let mut source = None;
    let mut input = None;
    let mut output = None;
    let mut format = match config.formats {
        SingleInputFormats::Optional { default, .. } => Some(default),
        SingleInputFormats::None | SingleInputFormats::Required { .. } => None,
    };
    let mut redacted = false;
    let mut profile = config.default_profile;
    let mut index = 0;

    while index < args.len() {
        match args[index].as_str() {
            "--source" if config.allow_source => {
                index += 1;
                source = Some(parse_source_arg(args.get(index), "--source")?);
            }
            arg if config.allow_source && arg.starts_with("--source=") => {
                source = Some(parse_source_value(&arg["--source=".len()..])?);
            }
            "--format" => match config.formats {
                SingleInputFormats::None => {
                    return Err(anyhow!("unknown {} option `{}`", config.command, args[index]));
                }
                SingleInputFormats::Optional { parse_arg, .. }
                | SingleInputFormats::Required { parse_arg, .. } => {
                    index += 1;
                    format = Some(parse_arg(args.get(index), "--format")?);
                }
            },
            arg if arg.starts_with("--format=") => match config.formats {
                SingleInputFormats::None => {
                    return Err(anyhow!("unknown {} option `{arg}`", config.command));
                }
                SingleInputFormats::Optional { parse_value, .. }
                | SingleInputFormats::Required { parse_value, .. } => {
                    format = Some(parse_value(&arg["--format=".len()..])?);
                }
            },
            "-o" | "--output" => {
                index += 1;
                output = Some(PathBuf::from(args.get(index).ok_or_else(|| {
                    anyhow!("{} -o requires an output path", config.command)
                })?));
            }
            "--redacted" => match config.redacted {
                SingleInputRedacted::Reject => {
                    return Err(anyhow!("unknown {} option `--redacted`", config.command));
                }
                SingleInputRedacted::Flag => redacted = true,
                SingleInputRedacted::StrictProfile => profile = RedactionProfile::Strict,
            },
            "--profile" => {
                index += 1;
                profile = parse_profile(args.get(index), "--profile")?;
            }
            arg if arg.starts_with("--profile=") => {
                profile = parse_profile_value(&arg["--profile=".len()..])?;
            }
            arg if arg.starts_with('-') => {
                return Err(anyhow!("unknown {} option `{arg}`", config.command));
            }
            path => {
                if input.is_some() {
                    return Err(anyhow!("{} accepts one input path", config.command));
                }
                input = Some(validate_cli_path(path)?);
            }
        }
        index += 1;
    }

    let input = input.ok_or_else(|| anyhow!("{} requires a session JSONL path", config.command))?;

    if let SingleInputOutput::Required(message) = config.output
        && output.is_none()
    {
        return Err(anyhow!("{message}"));
    }

    if let SingleInputFormats::Required {
        missing_message, ..
    } = config.formats
        && format.is_none()
    {
        return Err(anyhow!("{missing_message}"));
    }

    Ok(SingleInputCommandOptions {
        source,
        input,
        output,
        format,
        redacted,
        profile,
    })
}

fn require_single_input_output(output: Option<PathBuf>, message: &'static str) -> Result<PathBuf> {
    output.ok_or_else(|| anyhow!("{message}"))
}

fn require_single_input_format<F>(format: Option<F>, message: &'static str) -> Result<F> {
    format.ok_or_else(|| anyhow!("{message}"))
}

fn parse_source_and_paths(args: &[String]) -> Result<(Option<SessionSource>, Vec<String>)> {
    let mut source = None;
    let mut paths = Vec::new();
    let mut index = 0;
    while index < args.len() {
        match args[index].as_str() {
            "--source" => {
                index += 1;
                source = Some(parse_source_arg(args.get(index), "--source")?);
            }
            arg if arg.starts_with("--source=") => {
                source = Some(parse_source_value(&arg["--source=".len()..])?);
            }
            arg if arg.starts_with('-') => return Err(anyhow!("unknown option `{arg}`")),
            path => paths.push(path.to_owned()),
        }
        index += 1;
    }
    Ok((source, paths))
}

fn parse_source_arg(value: Option<&String>, flag: &str) -> Result<SessionSource> {
    parse_source_value(value.ok_or_else(|| anyhow!("{flag} requires codex or claude"))?)
}

fn parse_source_value(value: &str) -> Result<SessionSource> {
    SessionSource::parse(value)
        .ok_or_else(|| anyhow!("unknown source `{value}`; expected codex or claude"))
}

fn parse_port(value: Option<&String>, flag: &str) -> Result<u16> {
    value
        .ok_or_else(|| anyhow!("{flag} requires a port"))?
        .parse()
        .with_context(|| format!("invalid {flag} value"))
}

fn parse_usize_arg(value: Option<&String>, flag: &str) -> Result<usize> {
    parse_usize_value(value.ok_or_else(|| anyhow!("{flag} requires a positive integer"))?, flag)
}

fn parse_usize_value(value: &str, flag: &str) -> Result<usize> {
    let parsed = value
        .parse()
        .with_context(|| format!("invalid {flag} value `{value}`"))?;
    if parsed == 0 && flag == "--generate" {
        Err(anyhow!("{flag} requires a positive integer"))
    } else {
        Ok(parsed)
    }
}

fn parse_millis_arg(value: Option<&String>, flag: &str) -> Result<f64> {
    parse_millis_value(value.ok_or_else(|| anyhow!("{flag} requires milliseconds"))?, flag)
}

fn parse_millis_value(value: &str, flag: &str) -> Result<f64> {
    let parsed: f64 = value
        .parse()
        .with_context(|| format!("invalid {flag} value `{value}`"))?;
    if parsed.is_sign_positive() && parsed.is_finite() {
        Ok(parsed)
    } else {
        Err(anyhow!("{flag} requires positive finite milliseconds"))
    }
}

fn parse_profile(value: Option<&String>, flag: &str) -> Result<RedactionProfile> {
    parse_profile_value(value.ok_or_else(|| anyhow!("{flag} requires a profile"))?)
}

fn parse_profile_value(value: &str) -> Result<RedactionProfile> {
    RedactionProfile::parse(value).ok_or_else(|| {
        anyhow!("unknown redaction profile `{value}`; expected minimal, standard, strict, or structure-only")
    })
}

fn parse_export_format(value: Option<&String>, flag: &str) -> Result<ExportFormat> {
    parse_export_format_value(value.ok_or_else(|| anyhow!("{flag} requires a format"))?)
}

fn parse_export_format_value(value: &str) -> Result<ExportFormat> {
    ExportFormat::parse(value)
        .ok_or_else(|| anyhow!("unknown export format `{value}`; expected html, markdown, or json"))
}

fn parse_diff_format(value: Option<&String>, flag: &str) -> Result<DiffFormat> {
    parse_diff_format_value(value.ok_or_else(|| anyhow!("{flag} requires a format"))?)
}

fn parse_diff_format_value(value: &str) -> Result<DiffFormat> {
    DiffFormat::parse(value)
        .ok_or_else(|| anyhow!("unknown format `{value}`; expected text, html, or json"))
}

fn validate_cli_path(path: &str) -> Result<PathBuf> {
    let path = PathBuf::from(path);
    if path.is_file() {
        Ok(path)
    } else {
        Err(anyhow!("session JSONL path does not exist: {}", path.display()))
    }
}

fn source_for_path(path: &Path, source: Option<SessionSource>) -> SessionSource {
    source
        .or_else(|| infer_source_from_path(path))
        .unwrap_or(SessionSource::Codex)
}

fn demo_fixture_path(source: SessionSource) -> Result<PathBuf> {
    let (name, contents) = match source {
        SessionSource::Codex => ("perlustron-demo-codex.jsonl", include_str!("../../fixtures/codex-sanitized.jsonl")),
        SessionSource::Claude => ("perlustron-demo-claude.jsonl", include_str!("../../fixtures/claude-sanitized.jsonl")),
    };
    let path = env::temp_dir().join(name);
    fs::write(&path, contents)
        .with_context(|| format!("failed to write bundled demo fixture {}", path.display()))?;
    Ok(path)
}

fn generate_api_token() -> String {
    let mut bytes = [0_u8; 16];
    if getrandom::fill(&mut bytes).is_err() {
        let fallback = format!("{}-{:?}", std::process::id(), SystemTime::now());
        return fallback
            .bytes()
            .take(32)
            .map(|byte| format!("{byte:02x}"))
            .collect();
    }
    bytes.iter().map(|byte| format!("{byte:02x}")).collect()
}

fn should_open_browser(open_browser: Option<bool>) -> bool {
    open_browser.unwrap_or_else(|| std::io::stdout().is_terminal())
}

fn open_browser(url: &str) -> Result<()> {
    #[cfg(target_os = "windows")]
    {
        std::process::Command::new("cmd")
            .args(["/C", "start", "", url])
            .spawn()
            .context("failed to launch Windows browser")?;
    }
    #[cfg(target_os = "macos")]
    {
        std::process::Command::new("open")
            .arg(url)
            .spawn()
            .context("failed to launch macOS browser")?;
    }
    #[cfg(all(unix, not(target_os = "macos")))]
    {
        std::process::Command::new("xdg-open")
            .arg(url)
            .spawn()
            .context("failed to launch browser with xdg-open")?;
    }
    Ok(())
}

fn init_tracing() {
    let _ = tracing_subscriber::fmt()
        .with_env_filter(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "perlustron=info,tower_http=info".into()),
        )
        .try_init();
}

fn print_version() {
    println!(
        "perlustron {} (build {}, parser schema {}, trace schema {})",
        env!("CARGO_PKG_VERSION"),
        option_env!("PERLUSTRON_BUILD_COMMIT").unwrap_or("local"),
        PARSER_SCHEMA_VERSION,
        NORMALIZED_TRACE_SCHEMA_VERSION
    );
}

fn print_status(graph: &SessionGraph) {
    let health = &graph.parser_health;
    println!("Perlustron status");
    println!("  source: {}", graph.source);
    println!("  session: {}", graph.session_id.as_deref().unwrap_or("unknown"));
    println!("  path: {}", graph.session_path);
    println!("  parser health:");
    println!("  lines read: {}", health.total_lines_read);
    println!("  parsed events: {}", health.parsed_event_count);
    println!("  renderable events: {}", health.renderable_event_count);
    println!("  prompts: {}", graph.totals.prompt_count);
    println!("  tool calls: {}", health.tool_call_count);
    println!("  tool results: {}", health.tool_result_count);
    println!("  file activity: {}", health.file_activity_count);
    println!("  compactions: {}", health.compaction_count);
    println!("  images: {}", health.image_count);
    println!("  unknown events: {}", health.unknown_event_count);
    for unknown in &health.unknown_event_types {
        println!("    - {}: {}", unknown.source_event_type, unknown.count);
    }
    println!("  malformed lines: {}", health.malformed_line_count);
    println!(
        "  token telemetry: {}",
        if health.token_telemetry_available { "available" } else { "not logged" }
    );
    if let Some(chain) = &graph.insights.failure_chain {
        println!(
            "  first logged error-like event: line {} - {}",
            chain.first_logged_error.line_number, chain.first_logged_error.title
        );
    }
    println!(
        "  repeated patterns: {}",
        graph.insights.repeated_patterns.len()
    );
    println!(
        "  suspicious tool calls: {}",
        graph.insights.suspicious_tool_calls.len()
    );
}

fn print_scan_report(report: &ScanReport) {
    println!("Perlustron scan");
    println!("  path: {}", report.path);
    println!("  lines: {}", report.total_lines);
    println!("  malformed lines: {}", report.malformed_lines);
    println!("  findings: {}", report.finding_count);
    for kind in &report.findings_by_kind {
        println!("    - {}: {}", kind.kind, kind.count);
    }
    if !report.line_refs.is_empty() {
        println!("  first finding references:");
        for line_ref in &report.line_refs {
            println!("    - line {}: {}", line_ref.line_number, line_ref.kind);
        }
    }
}

fn print_help() {
    println!(
        r#"Perlustron is a local agent-forensics workbench for Codex and Claude Code JSONL logs.

Usage:
  perlustron [SESSION.jsonl] [options]
  perlustron status SESSION.jsonl [--source codex|claude]
  perlustron scan SESSION.jsonl
  perlustron sanitize SESSION.jsonl -o sanitized.jsonl [--profile standard|strict|structure-only]
  perlustron export SESSION.jsonl --format html|markdown|json -o report [--redacted] [--profile strict]
  perlustron diff LEFT.jsonl RIGHT.jsonl [--format text|json|html] [-o report] [--redacted]
  perlustron insights SESSION.jsonl [--format text|json|html] [-o report] [--redacted]
  perlustron unknowns SESSION.jsonl [-o unknowns.json] [--redacted]
  perlustron fixture-report SESSION.jsonl --redacted -o fixture-report.md
  perlustron bench SESSION.jsonl [--source codex|claude] [--append-lines 100]
  perlustron bench --generate 10000 [--append-lines 100]

Serve options:
  --demo [codex|claude]       Run with a bundled sanitized demo fixture
  --source codex|claude      Select source parser or discovery root
  --host 127.0.0.1           Bind host (default 127.0.0.1)
  --port 8787                Bind port (default 8787 or PORT env var)
  --open                     Open browser after server starts
  --no-open                  Do not open browser
  --privacy-mode             Serve strict-redacted graph data and disable images
  --require-api-token        Require a per-run token on local API routes
  --dev-assets               Debug only: serve static assets from disk without rebuilding Rust
  --help                     Show this help
  --version                  Show version and parser schema

Examples:
  perlustron --demo --no-open
  perlustron --demo claude
  perlustron path/to/session.jsonl
  perlustron --source codex --host 127.0.0.1 --port 8787
  perlustron status fixtures/codex-sanitized.jsonl
  perlustron scan fixtures/codex-sanitized.jsonl
  perlustron sanitize fixtures/codex-sanitized.jsonl -o sanitized.jsonl
  perlustron export fixtures/codex-sanitized.jsonl --format html -o report.html
  perlustron diff fixtures/codex-sanitized.jsonl fixtures/codex-edge-cases.jsonl
  perlustron insights fixtures/codex-sanitized.jsonl
  perlustron unknowns fixtures/codex-sanitized.jsonl
  perlustron bench --generate 10000 --append-lines 100
"#
    );
}
