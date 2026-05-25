# Narrative Forensic Demo

This demo uses the synthetic `fixtures/codex-loop-error.jsonl` fixture to show Perlustron's product payoff without private logs or external assets.

## 30-Second Story

Codex was asked to run a sanitized test suite and fix the fixture failure. The first `cargo test` failed with a permission error, the same command was retried, a later ignored-test command never logged a completed result, and a file patch happened after the first failure.

Perlustron turns that messy log into three answers:

1. What happened? Summary and Insights identify the first logged failure at line 6, repeated failed shell output at lines 6 and 8, the missing linked result at line 9, one file edit after the failure, and high context pressure.
2. Where should I inspect? The Summary-first queue links to Timeline and Transcript evidence so a reviewer can jump directly to the failing shell result, the repeated retry, the missing-result tool call, and the later patch/compaction context.
3. Can I safely share this? Copy-safe share summaries, safe event references, and redacted exports preserve structure while avoiding raw prompts, private paths, token values, image payloads, and tool-output secrets. They are still review aids, not a replacement for human review.

## Reproduce Locally

```bash
perlustron fixtures/codex-loop-error.jsonl
perlustron insights fixtures/codex-loop-error.jsonl
perlustron export fixtures/codex-loop-error.jsonl --format html --redacted -o loop-demo.html
```

For a quick CLI sanity check, `perlustron insights fixtures/codex-loop-error.jsonl` should show:

- first logged error-like event: line 6 - local `shell_command`
- possible retries after first error: 2
- repeated tool-call pattern between lines 6 and 8
- suspicious tool calls at lines 6, 8, and 9
- one file change after the first error
- high context markers logged

## Suggested Demo Flow

| Moment | UI state | Evidence to point at |
| --- | --- | --- |
| Start with the answer | Summary / Insights | "First logged error-like event: line 6" and "possible retries after first error: 2". |
| Prove the loop | Timeline | Two failing `shell_command` results on lines 6 and 8 with the same permission-denied output. |
| Inspect the drift | Transcript | The ignored-test command at line 9 has no linked completed result, followed by a patch and compaction context. |
| Share safely | Safe To Share actions / Export | Copy the share summary or safe reference, then export redacted HTML or Markdown instead of forwarding the raw JSONL. |

## Fixture Safety

The case is intentionally synthetic. It uses fixture paths such as `C:\Fixtures\perlustron-loop`, a fake model/provider, and sanitized command output. Do not replace it with private customer logs, real source paths, screenshots that reveal secrets, or generated assets that fetch external browser resources.
