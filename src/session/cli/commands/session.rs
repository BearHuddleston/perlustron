// SPDX-License-Identifier: MIT OR Apache-2.0

use super::*;

pub(super) fn parse_insights_command(args: &[String]) -> Result<CliAction> {
    let default_format = DiffFormat::Text;
    let options = parse_single_input_command(
        args,
        SingleInputCommandConfig {
            command: "insights",
            allow_source: true,
            default_profile: RedactionProfile::Strict,
            redacted: SingleInputRedacted::Flag,
            output: SingleInputOutput::Optional,
            formats: SingleInputFormats::Optional {
                default: default_format,
                parse_arg: parse_diff_format,
                parse_value: parse_diff_format_value,
            },
        },
    )?;

    Ok(CliAction::Insights {
        source: options.source,
        input: options.input,
        output: options.output,
        format: options.format.unwrap_or(default_format),
        redacted: options.redacted,
        profile: options.profile,
    })
}

pub(super) fn parse_unknowns_command(args: &[String]) -> Result<CliAction> {
    let options = parse_single_input_command::<()>(
        args,
        SingleInputCommandConfig {
            command: "unknowns",
            allow_source: true,
            default_profile: RedactionProfile::Standard,
            redacted: SingleInputRedacted::StrictProfile,
            output: SingleInputOutput::Optional,
            formats: SingleInputFormats::None,
        },
    )?;

    Ok(CliAction::Unknowns {
        source: options.source,
        input: options.input,
        output: options.output,
        profile: options.profile,
    })
}

pub(super) fn parse_fixture_report_command(args: &[String]) -> Result<CliAction> {
    let output_required = "fixture-report requires -o <report.md>";
    let options = parse_single_input_command::<()>(
        args,
        SingleInputCommandConfig {
            command: "fixture-report",
            allow_source: true,
            default_profile: RedactionProfile::Strict,
            redacted: SingleInputRedacted::StrictProfile,
            output: SingleInputOutput::Required(output_required),
            formats: SingleInputFormats::None,
        },
    )?;

    Ok(CliAction::FixtureReport {
        source: options.source,
        input: options.input,
        output: require_single_input_output(options.output, output_required)?,
        profile: options.profile,
    })
}

pub(super) fn parse_serve_command(args: &[String]) -> Result<CliAction> {
    let mut source = None;
    let mut session_path = None;
    let mut demo_source = None;
    let mut host = IpAddr::V4(Ipv4Addr::LOCALHOST);
    let mut port = env::var("PORT")
        .ok()
        .and_then(|value| value.parse::<u16>().ok())
        .unwrap_or(DEFAULT_PORT);
    let mut open_browser = None;
    let mut privacy_mode = false;
    let mut require_api_token = false;
    let mut dev_assets = false;
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
            "--host" => {
                index += 1;
                host = args
                    .get(index)
                    .ok_or_else(|| anyhow!("--host requires an IP address"))?
                    .parse()
                    .with_context(|| format!("invalid --host value `{}`", args[index]))?;
            }
            arg if arg.starts_with("--host=") => {
                host = arg["--host=".len()..]
                    .parse()
                    .with_context(|| format!("invalid --host value `{arg}`"))?;
            }
            "--port" => {
                index += 1;
                port = parse_port(args.get(index), "--port")?;
            }
            arg if arg.starts_with("--port=") => {
                port = arg["--port=".len()..]
                    .parse()
                    .with_context(|| format!("invalid --port value `{arg}`"))?;
            }
            "--demo" => {
                let next = args.get(index + 1).map(String::as_str);
                if let Some(value) = next.and_then(SessionSource::parse) {
                    demo_source = Some(value);
                    index += 1;
                } else {
                    demo_source = Some(SessionSource::Codex);
                }
            }
            arg if arg.starts_with("--demo=") => {
                demo_source = Some(parse_source_value(&arg["--demo=".len()..])?);
            }
            "--no-open" => open_browser = Some(false),
            "--open" => open_browser = Some(true),
            "--privacy-mode" => privacy_mode = true,
            "--require-api-token" => require_api_token = true,
            "--dev-assets" => dev_assets = true,
            arg if arg.starts_with('-') => return Err(anyhow!("unknown option `{arg}`")),
            path => {
                if session_path.is_some() {
                    return Err(anyhow!("only one session JSONL path can be provided"));
                }
                session_path = Some(validate_cli_path(path)?);
            }
        }
        index += 1;
    }

    Ok(CliAction::Serve(ServerOptions {
        source,
        session_path,
        demo_source,
        host,
        port,
        open_browser,
        privacy_mode,
        require_api_token,
        dev_assets,
    }))
}

pub(super) fn parse_status_command(args: &[String]) -> Result<CliAction> {
    let (source, paths) = parse_source_and_paths(args)?;
    let path = paths
        .first()
        .ok_or_else(|| anyhow!("status requires a session JSONL path"))?;
    Ok(CliAction::Status {
        source,
        path: validate_cli_path(path)?,
    })
}

pub(super) fn parse_scan_command(args: &[String]) -> Result<CliAction> {
    let path = args
        .first()
        .ok_or_else(|| anyhow!("scan requires a session JSONL path"))?;
    Ok(CliAction::Scan {
        path: validate_cli_path(path)?,
    })
}

pub(super) fn parse_sanitize_command(args: &[String]) -> Result<CliAction> {
    let output_required = "sanitize requires -o <output.jsonl>";
    let options = parse_single_input_command::<()>(
        args,
        SingleInputCommandConfig {
            command: "sanitize",
            allow_source: false,
            default_profile: RedactionProfile::Standard,
            redacted: SingleInputRedacted::Reject,
            output: SingleInputOutput::Required(output_required),
            formats: SingleInputFormats::None,
        },
    )?;

    Ok(CliAction::Sanitize {
        input: options.input,
        output: require_single_input_output(options.output, output_required)?,
        profile: options.profile,
    })
}

pub(super) fn parse_export_command(args: &[String]) -> Result<CliAction> {
    let output_required = "export requires -o <output>";
    let format_required = "export requires --format html|markdown|json";
    let options = parse_single_input_command(
        args,
        SingleInputCommandConfig {
            command: "export",
            allow_source: true,
            default_profile: RedactionProfile::Strict,
            redacted: SingleInputRedacted::Flag,
            output: SingleInputOutput::Required(output_required),
            formats: SingleInputFormats::Required {
                missing_message: format_required,
                parse_arg: parse_export_format,
                parse_value: parse_export_format_value,
            },
        },
    )?;

    Ok(CliAction::Export {
        source: options.source,
        input: options.input,
        output: require_single_input_output(options.output, output_required)?,
        format: require_single_input_format(options.format, format_required)?,
        redacted: options.redacted,
        profile: options.profile,
    })
}

pub(super) fn parse_bench_command(args: &[String]) -> Result<CliAction> {
    let mut source = None;
    let mut input = None;
    let mut generate_lines = None;
    let mut append_lines = 100;
    let mut thresholds = BenchThresholds::default();
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
            "--generate" => {
                index += 1;
                generate_lines = Some(parse_usize_arg(args.get(index), "--generate")?);
            }
            arg if arg.starts_with("--generate=") => {
                generate_lines = Some(parse_usize_value(
                    &arg["--generate=".len()..],
                    "--generate",
                )?);
            }
            "--append-lines" => {
                index += 1;
                append_lines = parse_usize_arg(args.get(index), "--append-lines")?;
            }
            arg if arg.starts_with("--append-lines=") => {
                append_lines =
                    parse_usize_value(&arg["--append-lines=".len()..], "--append-lines")?;
            }
            "--max-full-ms" => {
                index += 1;
                thresholds.max_full_parse_ms =
                    Some(parse_millis_arg(args.get(index), "--max-full-ms")?);
            }
            arg if arg.starts_with("--max-full-ms=") => {
                thresholds.max_full_parse_ms = Some(parse_millis_value(
                    &arg["--max-full-ms=".len()..],
                    "--max-full-ms",
                )?);
            }
            "--max-status-ms" => {
                index += 1;
                thresholds.max_status_refresh_ms =
                    Some(parse_millis_arg(args.get(index), "--max-status-ms")?);
            }
            arg if arg.starts_with("--max-status-ms=") => {
                thresholds.max_status_refresh_ms = Some(parse_millis_value(
                    &arg["--max-status-ms=".len()..],
                    "--max-status-ms",
                )?);
            }
            "--max-append-ms" => {
                index += 1;
                thresholds.max_append_parse_ms =
                    Some(parse_millis_arg(args.get(index), "--max-append-ms")?);
            }
            arg if arg.starts_with("--max-append-ms=") => {
                thresholds.max_append_parse_ms = Some(parse_millis_value(
                    &arg["--max-append-ms=".len()..],
                    "--max-append-ms",
                )?);
            }
            "--max-diff-ms" => {
                index += 1;
                thresholds.max_diff_ms = Some(parse_millis_arg(args.get(index), "--max-diff-ms")?);
            }
            arg if arg.starts_with("--max-diff-ms=") => {
                thresholds.max_diff_ms = Some(parse_millis_value(
                    &arg["--max-diff-ms=".len()..],
                    "--max-diff-ms",
                )?);
            }
            "--max-export-ms" => {
                index += 1;
                thresholds.max_export_ms = Some(parse_millis_arg(args.get(index), "--max-export-ms")?);
            }
            arg if arg.starts_with("--max-export-ms=") => {
                thresholds.max_export_ms = Some(parse_millis_value(
                    &arg["--max-export-ms=".len()..],
                    "--max-export-ms",
                )?);
            }
            "--max-sanitize-ms" | "--max-sanitization-ms" => {
                let flag = args[index].as_str();
                index += 1;
                thresholds.max_sanitization_ms = Some(parse_millis_arg(args.get(index), flag)?);
            }
            arg if arg.starts_with("--max-sanitize-ms=") => {
                thresholds.max_sanitization_ms = Some(parse_millis_value(
                    &arg["--max-sanitize-ms=".len()..],
                    "--max-sanitize-ms",
                )?);
            }
            arg if arg.starts_with("--max-sanitization-ms=") => {
                thresholds.max_sanitization_ms = Some(parse_millis_value(
                    &arg["--max-sanitization-ms=".len()..],
                    "--max-sanitization-ms",
                )?);
            }
            arg if arg.starts_with('-') => return Err(anyhow!("unknown bench option `{arg}`")),
            path => {
                if input.is_some() {
                    return Err(anyhow!("bench accepts one input path"));
                }
                input = Some(validate_cli_path(path)?);
            }
        }
        index += 1;
    }

    Ok(CliAction::Bench {
        source,
        input,
        generate_lines,
        append_lines,
        thresholds,
    })
}
