# Benchmarks

Perlustron ships a small `bench` subcommand for parser and status-cache smoke testing. Current performance guardrails are parser tests, status caching tests, the CI benchmark smoke, and the UI performance choices documented in `docs/ui-performance-research.md`.

## Local Measurements

Use a generated sanitized Codex session when you want a repeatable local baseline:

```powershell
perlustron bench --generate 10000 --append-lines 100
perlustron bench --generate 100000 --append-lines 1000
```

Use a real sanitized fixture when investigating schema-specific behavior:

```powershell
perlustron bench fixtures/codex-edge-cases.jsonl --append-lines 25
perlustron bench fixtures/claude-edge-cases.jsonl --source claude --append-lines 0
```

The generated fixture is synthetic and safe to share. The benchmark reports full parse time, status refresh time, append parse time, diff time, HTML export time, sanitization time, unknown-report time, output size, line count, and renderable event count. Diff timing includes the sequence-aware divergence path with a bounded large-session fallback. For image-evidence or media-route changes, also smoke a generated 100k-line session with an embedded image near the tail so the release notes can say the cached line-offset lookup was exercised without promising hardware-specific timings. Use direct commands when measuring a specific reporting path in isolation:

```powershell
Measure-Command { perlustron diff fixtures/codex-sanitized.jsonl fixtures/codex-loop-error.jsonl --redacted | Out-Null }
Measure-Command { perlustron export fixtures/codex-loop-error.jsonl --format html --redacted -o $env:TEMP\perlustron-report.html }
Measure-Command { perlustron sanitize fixtures/codex-loop-error.jsonl -o $env:TEMP\perlustron-sanitized.jsonl }
```

## Thresholds

Threshold flags make local and CI smoke checks fail when a measurement exceeds the selected bound:

```powershell
perlustron bench --generate 10000 --append-lines 100 --max-full-ms 1000 --max-status-ms 100 --max-append-ms 250
```

Expected local development targets on a typical laptop are:

- 10k generated lines: full parse under 1 second, status refresh under 100 ms, append parse under 250 ms.
- 100k generated lines: use for manual regression checks before parser or renderer-heavy releases; timings are hardware dependent and should be recorded in PR notes.

CI runs a smaller `npm run bench:smoke` subset with 250 generated lines and 25 appended lines. That check is intentionally loose enough to catch broken cache/append behavior without turning CI into a hardware benchmark.
