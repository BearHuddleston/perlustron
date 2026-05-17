# Supported Formats

Perlustron parses Codex and Claude Code JSONL logs into a normalized trace model. Schema drift is expected; parser health shows what was recognized, unknown, malformed, skipped, or redacted.

## Matrix

| Feature | Codex | Claude Code | Notes |
| --- | --- | --- | --- |
| Session metadata | Yes | Partial | Depends on fields present in the log. |
| User prompts | Yes | Yes | Redactable in strict exports. |
| Assistant messages | Yes | Yes | Hidden/unlogged reasoning is not available. |
| Reasoning summaries | Partial | Partial | Only logged summaries/compactions are shown. |
| Tool calls | Yes | Yes | Function/custom/tool-use calls are normalized. |
| Tool results | Yes | Yes | Missing results are surfaced as incomplete calls. |
| Shell commands | Yes | Partial | Tool names and arguments are shown when logged. |
| Patch/file changes | Yes | Partial | Codex patch payloads are parsed; other file activity may be inferred. |
| File reads | Partial | Partial | Inferred from tool names/arguments where obvious. |
| Images | Yes | Yes | Embedded images only; no external fetching. |
| Token usage | Yes, when logged | Partial | Context pressure is shown only when counts exist. |
| Context pressure | Yes, when logged | Partial | No claims are made when telemetry is absent. |
| Compactions | Yes | Yes | Summary checkpoints are surfaced. |
| Summaries | Yes | Yes | Only logged summary text is available. |
| MCP events | Partial | Partial | Known Codex MCP completions are parsed. |
| Web/search | Partial | Partial | Known tool-search/web-search calls are parsed. |
| Subagents | Partial | Partial | Codex subagent notifications and child-session scans are best effort. |
| Unknown events | Yes | Yes | Counted and sampled in parser health. |
| Malformed lines | Yes | Yes | Counted and sampled without crashing the full parse. |
| Raw references | Yes | Yes | Normalized events preserve line/event references. |
| Session diff | Yes | Yes | Supports same-source and cross-source normalized trace comparison in CLI reports and in-app Diff mode. |
| Insights | Yes | Yes | Guided queue and heuristic quality vary with logged tool/result/token detail. |

## What Perlustron Does Not Do

- It does not recover hidden reasoning.
- It does not infer facts that were never logged.
- It does not upload logs for schema detection.
- It does not fetch external images or remote assets in normal use.

## Parser Health

Parser health reports line counts, parsed counts, renderable counts, unknown event types, malformed lines, bounded large-payload notices, redaction counts, image counts, tool counts, file activity, compactions, token telemetry availability, source confidence, parser version, and schema version.

Use parser health to decide whether a visualization is complete enough to trust. Unknown and malformed items are expected when Codex or Claude changes log schemas; contribute sanitized fixtures for new shapes.

Use `perlustron unknowns` and `perlustron fixture-report` when parser health shows drift. These commands are designed to produce safe, redacted issue material without raw private logs.
