# Insights

Insights are cautious heuristics over logged events. They help answer why a run may have failed, looped, bloated, or diverged, but they do not recover hidden or unlogged reasoning.

## Commands

```bash
perlustron insights session.jsonl
perlustron insights session.jsonl --format json -o insights.json
perlustron insights session.jsonl --format html -o insights.html
perlustron insights session.jsonl --redacted
```

## Panels

- What should I inspect first: a deterministic queue that prioritizes direct errors, missing/unpaired tool results, repeated failed commands, approval/sandbox friction, high context before failure, schema drift, long-running calls, and file churn.
- Failure chain: first logged error-like event, nearby events, retries, file changes after the error, and final logged outcome.
- Loop detector: repeated tool-call patterns and repeated file activity.
- Suspicious tool calls: missing results, long calls, empty outputs, and error-like outputs.
- Context pressure: token telemetry, high-context markers, and compactions when logged.
- File impact: edited, read, referenced, and repeated files, with inferred activity labeled.
- Approval/sandbox friction: approval, policy, permission, denied, or sandbox-related logged text.

## Language Rules

Perlustron uses phrases such as "first logged error-like event", "possibly related", and "this may indicate". It avoids claiming root cause unless the log directly proves it.

Severity is `high`, `warning`, or `info`. Confidence is `direct`, `strong heuristic`, or `weak heuristic`. Direct means the log explicitly contained the evidence. Heuristic means Perlustron inferred a pattern from normalized records.

The UI exposes copyable insight summaries and raw/timeline links where line references are available.

## Missing Data

If a session has no token telemetry, no compactions, or no tool-result records, the relevant insight is limited or absent rather than invented.
