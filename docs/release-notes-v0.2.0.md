# v0.2.0 - Interactive Session Compare and Guided Debugging

Prepared release-note body for the v0.2.0 milestone. Publishing still requires the normal tag, workflow, artifact validation, GitHub draft review, and the release checklist in `docs/release-checklist-v0.2.0.md`.

## Highlights

- Added first-class in-app Diff mode for comparing two discovered sessions without shelling out.
- Added guided Insights workflow with a "What should I inspect first?" queue.
- Improved divergence detection with sequence-aware normalized event alignment and category-specific divergence clusters.
- Added Health actions for schema drift: copy parser summary, export redacted unknowns JSON, create fixture-report markdown, copy issue body, and inspect redacted samples.
- Expanded synthetic scenario fixtures for approval denial, missing tool results, subagents, MCP-heavy sessions, context compaction, Claude loops, Claude summaries, Claude image metadata, malformed/mixed sources, and paired diff runs.
- Strengthened CLI, server, fixture, diff, insight, unknowns, and benchmark coverage.
- Improved install docs for users who download release archives manually from a browser.
- Preserved local-first behavior: loopback bind by default, no telemetry, embedded UI assets, token-protected API routes, and redacted sharing workflows.

## Upgrade Notes

- Version metadata is prepared as `0.2.0`.
- Existing CLI commands remain available.
- Diff and Insights are heuristic debugging aids over logged events only. Perlustron cannot recover hidden or unlogged reasoning.

## Suggested Release Title

`v0.2.0 - Interactive Session Compare and Guided Debugging`
