# Architecture

Perlustron has four main layers.

## CLI

`src/session/cli.rs` parses commands and options without requiring a heavy CLI dependency. It supports serving the UI, demo fixtures, status summaries, secret scans, sanitized JSONL output, HTML/Markdown/JSON exports, session diff, insights, unknown-event reports, fixture reports, and benchmarks.

## Parser Pipeline

`src/session/parser.rs` streams JSONL lines, preserves line numbers, records parser health, and normalizes recognized Codex and Claude events into the existing session graph. Malformed lines and unknown event types are counted and sampled instead of aborting the whole parse.

The graph keeps practical UI nodes: prompts, assistant messages, tool calls, file changes, compactions, token telemetry, image references, and UI summary metrics.

## Normalized Trace

Exports use `AgentTrace` (`agent-trace-v1`) as a stable downstream shape. It includes session metadata, totals, parser health, normalized events, line references, tool relationships, file references, warnings, redaction markers, and inferred-field notes.

## Analysis Layer

`src/session/analysis.rs` builds `TraceInsights` from the parsed graph. It detects first logged error-like events, repeated patterns, suspicious tool calls, context pressure, file impact, and approval/sandbox friction. Insight text is deliberately cautious and labels inferred activity.

`src/session/diff.rs` builds `TraceDiff` from two normalized traces. Renderers consume the diff model rather than coupling comparison logic to HTML/text output.

## Server/API

The Axum server binds to loopback by default. Static UI assets are embedded into the binary. API routes are tokenless by default for loopback convenience, can require a per-run token with `--require-api-token`, and never serve arbitrary filesystem paths. Startup prints the API mode and warns if a non-loopback bind is tokenless. Embedded images are decoded from the selected session JSONL only.

## Frontend

`src/frontend/app.ts` renders the interactive Three.js map plus dense inspector panels for sessions, saved views, raw graph data, and parser health. `static/app.js` is the checked-in build output.

## Redaction Pipeline

`src/session/sanitize.rs` provides best-effort scanning and redaction. Sanitization works over raw JSONL values; redacted server/export views redact the parsed graph before serialization.

## Performance Strategy

The parser is streaming for full reads, uses cached graph metadata for live status, and performs bounded append parsing for growing sessions. Frontend rendering uses Three.js instancing and compact geometry buffers for large node counts.
