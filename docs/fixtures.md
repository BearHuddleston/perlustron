# Fixtures

Fixtures under `fixtures/` are synthetic/sanitized and safe for demos, tests, screenshots, and benchmarks.
The README screenshot at `docs/assets/perlustron-demo.png` is generated from the bundled sanitized Codex demo in privacy mode on the Summary-first workflow, including inspect-first evidence actions and raw-log shareability cues.

## Current Fixtures

- `codex-sanitized.jsonl`: Codex-style session metadata, prompt, shell call, tool result, patch/file activity, token telemetry, assistant message, compaction, embedded image metadata, unknown event, and malformed line.
- `claude-sanitized.jsonl`: Claude-style prompt, assistant tool use, tool result, assistant response, summary, and unknown event.
- `codex-edge-cases.jsonl`: Codex-style subagent notification, `spawn_agent` result, tool search, web search, MCP result, token telemetry, and compaction coverage.
- `codex-loop-error.jsonl`: Codex-style repeated failed shell command, missing tool result, permission friction, high context telemetry, file edit after first error, and compaction coverage.
- `codex-approval-denied.jsonl`: approval/sandbox denial fixture.
- `codex-missing-tool-result.jsonl`: unpaired tool call fixture.
- `codex-subagent-tree.jsonl`: spawn/subagent notification fixture.
- `codex-mcp-heavy.jsonl`: MCP-heavy tool result fixture.
- `codex-context-compaction.jsonl`: high-context and compaction fixture.
- `claude-edge-cases.jsonl`: Claude-style image payload, web-like tool call/result, summary, unknown event, and malformed line coverage.
- `claude-tool-use-loop.jsonl`: repeated Claude tool-use failure fixture.
- `claude-compact-summary.jsonl`: Claude summary/compaction fixture.
- `claude-image-metadata.jsonl`: Claude embedded image metadata fixture.
- `redaction/common-authorization-and-password.jsonl`: minimal Codex-style fixture for common authorization-header and password-assignment redaction.
- `redaction/adversarial-codex-multiline-query-cookie-tool-bearer.jsonl`: synthetic Codex-style adversarial redaction fixture covering multiline secrets, URL query tokens, labeled base64-ish credentials, Windows home paths, tool-output credentials, unknown/malformed previews, and embedded image metadata. It is not an example of real credentials.
- `redaction/adversarial-claude-image-path-metadata.jsonl`: synthetic Claude-style adversarial redaction fixture covering private URL/query tokens, image payload metadata, tool-use credentials, Windows home paths, unknown/malformed previews, and strict export non-leak coverage. It is not an example of real credentials.
- `malformed-mixed-source.jsonl`: unknown and malformed mixed-source parser-health fixture.
- `diff-run-a.jsonl` and `diff-run-b.jsonl`: paired diff fixtures with inserted telemetry noise and later file divergence.

## Rules

Do not include:

- Real tokens, cookies, API keys, private keys, or passwords.
- Private prompts or proprietary code.
- Real personal names, emails, customer names, hostnames, or private repo paths.
- Screenshots or images containing secrets.
- Command output that reveals private files, paths, credentials, or business data.

## Creating A Fixture

Start with a synthetic log where possible. If reducing a real log:

```powershell
perlustron scan real.jsonl
perlustron sanitize real.jsonl -o fixture.jsonl --profile strict
perlustron status fixture.jsonl
```

Manually review the result before committing it.

## Fixture Tests

Run:

```powershell
cargo test
perlustron status fixtures/codex-sanitized.jsonl
perlustron status fixtures/claude-sanitized.jsonl --source claude
perlustron status fixtures/codex-edge-cases.jsonl
perlustron insights fixtures/codex-loop-error.jsonl
perlustron diff fixtures/codex-sanitized.jsonl fixtures/codex-loop-error.jsonl --redacted
perlustron status fixtures/claude-edge-cases.jsonl --source claude
perlustron status fixtures/redaction/common-authorization-and-password.jsonl
perlustron status fixtures/redaction/adversarial-codex-multiline-query-cookie-tool-bearer.jsonl
perlustron status fixtures/redaction/adversarial-claude-image-path-metadata.jsonl --source claude
```
