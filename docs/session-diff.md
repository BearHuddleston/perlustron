# Session Diff

Session diff compares normalized Perlustron traces, not raw JSON line-by-line. It is for answering how two agent runs differed structurally and behaviorally.

## Commands

```bash
perlustron diff run-a.jsonl run-b.jsonl
perlustron diff run-a.jsonl run-b.jsonl --format text
perlustron diff run-a.jsonl run-b.jsonl --format json -o diff.json
perlustron diff run-a.jsonl run-b.jsonl --format html -o diff.html
perlustron diff run-a.jsonl run-b.jsonl --redacted
perlustron diff run-a.jsonl run-b.jsonl --redacted --profile strict
```

Use `--left-source` and `--right-source` when file names do not make the source obvious:

```bash
perlustron diff a.jsonl b.jsonl --left-source codex --right-source claude
```

## Interactive Diff Mode

Open the local UI with `perlustron --demo` or `perlustron path/to/session.jsonl`, then choose `Diff`.

The Diff mode loads the current session as Run A. Pick Run B from discovered sessions, click Compare, then inspect:

- overview metadata and event-count deltas,
- parser-health deltas,
- tool, file, error, repeated-pattern, token/context, and compaction deltas,
- first structural/tool/file/error/compaction divergence where available,
- redacted JSON/HTML exports and a copyable summary.

Diff rows link back to raw/timeline context when Perlustron has a line reference. If a referenced event only exists in one run, the UI shows the available side instead of inventing a counterpart.

## What It Compares

- Source type, parser version, trace schema version, session ID, model, and working directory.
- Line count, parsed event count, renderable event count, unknown events, malformed lines, and parser-health deltas.
- User turns, assistant messages, tool calls, tool results, missing tool results, unique tools, repeated tool patterns, and long calls.
- Error-like event counts and the first logged error-like event.
- Files touched only in A, only in B, and in both.
- Compactions and token/context telemetry when logged.
- Prompt/final-response previews in unredacted mode or stable hashes in redacted mode.
- First likely divergence based on normalized event signatures and sequence alignment.

## Divergence Heuristic

Perlustron parses both sessions into normalized traces, builds comparable event signatures, skips low-value telemetry-only noise, and runs an LCS-style alignment for ordinary sessions. Large sessions use a bounded ordered matching fallback to avoid excessive memory use.

Signatures include normalized event type, role, tool name/status, stable content hashes, call IDs when available, and file-path hashes. Raw timestamps are not part of the default signature.

"First likely divergence" means the first unmatched comparable event after alignment. It is useful for deciding what to inspect first, not proof of root cause or model intent.

## Privacy

`--redacted` hides raw prompts, tool outputs, secrets, home paths, and sensitive file paths. Redacted diffs keep structure, counts, relationships, and stable hashes where useful.

Redaction is best effort. Review generated HTML or JSON before sharing.

## Limits

Diff output is a debugging aid, not proof of model intent. It does not recover hidden reasoning and cannot explain unlogged state.
