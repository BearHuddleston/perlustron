# v0.2.0 - Interactive Session Compare and Guided Debugging

Prepared release-note body for the v0.2.0 milestone. Publishing still requires the normal tag, workflow, artifact validation, GitHub draft review, and the release checklist in `docs/release-checklist-v0.2.0.md`.

Wave 3 consolidation note: the Summary-first, copy-safe reference, shareability, and larger-session image-evidence changes summarized below are landed on `dev/nightly`. Before using this body for any public release, confirm the selected tag/release actually contains those commits. Do not edit an existing GitHub Release, move/re-push `v0.2.0`, or mutate GitHub About text without explicit human approval.

## Highlights

- Added first-class in-app Diff mode for comparing two discovered sessions without shelling out.
- Added guided Insights workflow with a "What should I inspect first?" queue over logged failures, repeated patterns, suspicious tools, context pressure, files, approval friction, and schema drift.
- Routed Summary and Insights evidence back into the local UI with copyable event references and fast jumps to Timeline, Transcript, and Raw context when line/event references are available.
- Refreshed the default UI around a Summary-first workflow: Summary, Map, Timeline, and Transcript are the default modes, with Health, Insights, Diff, Raw, Export, and Settings available as utility views.
- Updated the README screenshot/demo asset from the bundled sanitized Codex fixture in privacy mode, showing the Summary-first workflow, inspect-first evidence actions, and raw-log shareability cues.
- Added copy-safe share summaries and event references that keep structural source/session/activity/parser context while redacting token query parameters, bearer/secret assignments, image payloads, long base64-like values, uppercase private sentinels, and local user paths.
- Made shareability copy explicit: sanitized graph/export/copy-safe references are safer than raw logs, but raw prompts, tool output, images, paths, and credentials still require human review before external sharing.
- Improved divergence detection with sequence-aware normalized event alignment and category-specific divergence clusters.
- Cached embedded-image line offsets for larger sessions so image evidence routing can seek directly when the session cache is fresh, while preserving the previous linear scan fallback when the cache is stale, unavailable, or cannot be decoded.
- Added Health actions for schema drift: copy parser summary, export redacted unknowns JSON, create fixture-report markdown, copy issue body, and inspect redacted samples.
- Expanded synthetic scenario fixtures for approval denial, missing tool results, subagents, MCP-heavy sessions, context compaction, Claude loops, Claude summaries, Claude image metadata, malformed/mixed sources, and paired diff runs.
- Strengthened CLI, server, fixture, diff, insight, unknowns, UI, workflow, offline-asset, copy-safe clipboard, browser-smoke, and benchmark coverage.
- Improved install docs for users who download release archives manually from a browser.
- Preserved local-first behavior: loopback bind by default, no telemetry, embedded UI assets, token-protected API routes, privacy-mode image blocking, and redacted sharing workflows.

## Upgrade Notes

- Version metadata remains prepared as `0.2.0`; do not change version numbers or retag without a human release decision.
- Existing CLI commands remain available.
- Diff and Insights are heuristic debugging aids over logged events only. Perlustron cannot recover hidden or unlogged reasoning.
- Copy-safe references are sharing aids, not a proof that raw logs are safe. Review generated text and any raw log/report before forwarding outside the local machine.
- Larger-session image lookup acceleration is best-effort. It uses cached line offsets when available and falls back to the previous linear scan path on cache miss or decode failure.

## Release Validation Focus

- Confirm `docs/assets/perlustron-demo.png` was generated from sanitized bundled demo data, not private logs.
- Confirm `npm run typecheck`, `npm run build:frontend`, `npm run workflow:check`, `npm run offline:check`, and the full `npm run check` suite pass on the selected release candidate.
- Confirm `perlustron --version` reports `0.2.0` from the release candidate binary.
- For parser/media-heavy release candidates, record a 100k generated-session benchmark and an embedded-image evidence lookup smoke in the PR or release checklist notes rather than making hardware-specific performance promises.

## Suggested Release Title

`v0.2.0 - Interactive Session Compare and Guided Debugging`
