// SPDX-License-Identifier: MIT OR Apache-2.0

use super::*;

pub(super) fn parse_diff_command(args: &[String]) -> Result<CliAction> {
    let mut left_source = None;
    let mut right_source = None;
    let mut paths = Vec::new();
    let mut output = None;
    let mut format = DiffFormat::Text;
    let mut redacted = false;
    let mut profile = RedactionProfile::Strict;
    let mut index = 0;

    while index < args.len() {
        match args[index].as_str() {
            "--source" => {
                index += 1;
                let source = parse_source_arg(args.get(index), "--source")?;
                left_source.get_or_insert(source);
                right_source.get_or_insert(source);
            }
            arg if arg.starts_with("--source=") => {
                let source = parse_source_value(&arg["--source=".len()..])?;
                left_source.get_or_insert(source);
                right_source.get_or_insert(source);
            }
            "--left-source" | "--source-left" => {
                index += 1;
                left_source = Some(parse_source_arg(args.get(index), "--left-source")?);
            }
            arg if arg.starts_with("--left-source=") => {
                left_source = Some(parse_source_value(&arg["--left-source=".len()..])?);
            }
            "--right-source" | "--source-right" => {
                index += 1;
                right_source = Some(parse_source_arg(args.get(index), "--right-source")?);
            }
            arg if arg.starts_with("--right-source=") => {
                right_source = Some(parse_source_value(&arg["--right-source=".len()..])?);
            }
            "--format" => {
                index += 1;
                format = parse_diff_format(args.get(index), "--format")?;
            }
            arg if arg.starts_with("--format=") => {
                format = parse_diff_format_value(&arg["--format=".len()..])?;
            }
            "-o" | "--output" => {
                index += 1;
                output = Some(PathBuf::from(
                    args.get(index)
                        .ok_or_else(|| anyhow!("diff -o requires an output path"))?,
                ));
            }
            "--redacted" => redacted = true,
            "--profile" => {
                index += 1;
                profile = parse_profile(args.get(index), "--profile")?;
            }
            arg if arg.starts_with("--profile=") => {
                profile = parse_profile_value(&arg["--profile=".len()..])?;
            }
            arg if arg.starts_with('-') => return Err(anyhow!("unknown diff option `{arg}`")),
            path => paths.push(validate_cli_path(path)?),
        }
        index += 1;
    }

    if paths.len() != 2 {
        return Err(anyhow!("diff requires two session JSONL paths"));
    }
    Ok(CliAction::Diff {
        left_source,
        right_source,
        left_input: paths.remove(0),
        right_input: paths.remove(0),
        output,
        format,
        redacted,
        profile,
    })
}
