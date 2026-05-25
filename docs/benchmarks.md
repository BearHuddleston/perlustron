# Benchmarks

Perlustron ships a small `bench` subcommand for parser, status-cache, diff, export, sanitization, and unknown-report smoke testing. Current performance guardrails are parser tests, status caching tests, the CI benchmark smoke, the CI 10k large-session guardrail, and the UI performance choices documented in `docs/ui-performance-research.md`.

## Local Measurements

Use generated sanitized Codex sessions when you want a repeatable local baseline:

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

## Baseline Expectations

These numbers are audit baselines from the `v0.1.0` development cycle. They are not promises for every developer machine or GitHub-hosted runner; use them to spot obvious regressions and record the machine/runtime context in PR or release notes.

| Generated lines | Full parse | Status refresh | Append parse | Warm diff | HTML export | Sanitization |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 250 | 8.38 ms | 3.79 ms | 4.68 ms | 8.26 ms | 13.31 ms | 43.19 ms |
| 10k | 323.53 ms | 18.99 ms | 156.44 ms | 281.44 ms | 522.23 ms | 717.54 ms |
| 100k | 3.25 s | 113.47 ms | 1.58 s | 2.95 s | 5.33 s | 6.90 s |

Expected local development targets on a typical laptop are:

- 10k generated lines: full parse under 1 second, status refresh under 100 ms, append parse under 250 ms, warm diff under 1 second, HTML export under 2 seconds, and sanitization under 2 seconds.
- 100k generated lines: use for manual regression checks before parser/export/sanitize/diff-heavy releases; timings are hardware dependent and should be recorded in PR or release notes.

## Thresholds

Threshold flags make local and CI smoke checks fail when a measurement exceeds the selected bound:

```powershell
perlustron bench --generate 10000 --append-lines 100 --max-full-ms 5000 --max-status-ms 1000 --max-append-ms 3000 --max-diff-ms 5000 --max-export-ms 10000 --max-sanitize-ms 12000
```

The intentionally loose 10k CI gate is available as:

```bash
npm run bench:large
```

It is calibrated to catch obvious large-session regressions without treating GitHub Actions as a precise hardware benchmark. Keep thresholds several times higher than the audit baseline unless CI evidence shows the runner has stable headroom.

## CI And Release Checklist

CI runs two generated-session benchmark checks on every PR:

- `npm run bench:smoke`: 250 generated lines, 25 appended lines, fast parser/status/append thresholds.
- `npm run bench:large`: 10k generated lines, 100 appended lines, intentionally loose parser/status/append/diff/export/sanitize thresholds.

Do not run the 100k generated-session benchmark in PR CI by default. Before releases that touch parser, export, sanitize, diff, or large-session rendering paths, run the 100k benchmark manually and paste the measured full parse, append parse, warm diff, export, and sanitization times into the release PR notes. See `docs/release.md` for the release checklist command.
