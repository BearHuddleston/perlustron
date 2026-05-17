# Schema Drift

Codex and Claude Code session-log schemas can change. Perlustron should preserve unknown or malformed data references instead of silently dropping them.

## Commands

```bash
perlustron unknowns session.jsonl
perlustron unknowns session.jsonl -o unknowns.json
perlustron unknowns session.jsonl --redacted -o unknowns-redacted.json
perlustron fixture-report session.jsonl --redacted -o fixture-report.md
```

## Unknowns Report

The unknowns report includes parser version, trace schema version, source guess, source confidence, total lines, unknown event count, unknown event types, malformed line count, redacted samples, line numbers, a suggested fixture name, and suggested GitHub issue content.

Samples are redacted previews by default. They are not raw log lines.

## UI Workflow

Open `Health` in the local UI to copy a parser-health summary, export redacted unknowns JSON, generate a fixture-report markdown file, copy a schema-drift GitHub issue body, and inspect bounded unknown/malformed samples.

Unknown and malformed samples show event type, line number, source guess, a redacted/minimal preview, and warnings. Raw private log content is not dumped by default.

## Fixture Report

The fixture report is GitHub-issue friendly. It summarizes event types, unsupported shapes, redactions, suggested fixture category, and safe contribution steps.

## Contributing Drift Fixtures

Prefer synthetic fixtures. If reducing a real log:

```bash
perlustron scan real.jsonl
perlustron sanitize real.jsonl -o fixture.jsonl --profile strict
perlustron fixture-report fixture.jsonl --redacted -o fixture-report.md
```

Manually review before sharing. Do not attach raw private logs, prompts, source code, command output, secrets, images, or private paths.
