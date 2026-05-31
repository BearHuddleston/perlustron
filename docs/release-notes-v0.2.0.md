# v0.2.0 - Summary Evidence and Release Hardening

Perlustron v0.2.0 moves the public line from a local session viewer toward a guided agent-forensics workbench: better first-glance verdicts, stronger evidence navigation, safer sharing defaults, larger-session guardrails, and release artifacts that are easier to audit.

## Summary

- Add Summary-first forensic verdicts that point reviewers toward the highest-signal failures, repeated patterns, file impact, context pressure, and schema-drift evidence.
- Add a unified evidence drawer, copy-safe event references, and readable privacy-mode placeholders so findings are easier to trace and safer to share.
- Improve Map navigation with palette/filter polish, live camera follow fixes, vertical fly controls, and consistent node coloring.
- Improve Timeline/Transcript/Health/Insights/Diff surfaces with faster full-session text rendering, better signal quality, and stronger beta-view layout polish.
- Warn loudly when serving non-loopback raw APIs without `--require-api-token`; loopback remains tokenless by default for local convenience.
- Split parser, analysis, diff, CLI, summary, evidence, metadata, and redaction display code into focused modules for safer follow-up changes.
- Add fixture-driven redaction/privacy coverage and regression coverage for duplicate rendered subagent child node IDs.
- Harden release distribution with platform archive validation, `.sha256` checksum files, `.manifest.json` artifact inventories, release-workflow checks, browser/CLI smoke coverage, and 10k-line benchmark guardrails.

## Security And Privacy

- No telemetry is implemented.
- Release builds embed browser assets locally.
- Normal UI use makes no third-party browser requests.
- API routes are tokenless by default on loopback; launch with `--require-api-token` to require a random per-run local token, especially when binding outside loopback.
- Redacted exports, privacy-mode graph data, and scan output are best-effort sharing aids; review them before forwarding.

## Install

Download the archive for your platform from the `v0.2.0` GitHub release, verify the matching `.sha256` checksum, optionally inspect the `.manifest.json` inventory, extract the archive, and run:

```bash
perlustron --demo
```

## macOS Signing

macOS archives are signed and notarized only when Apple Developer signing secrets are configured for the release run. Check the per-archive manifest and workflow logs for the exact v0.2.0 signing/notarization status; unsigned developer-preview archives may require opening from Terminal or removing quarantine manually.

## Upgrade Notes

- Existing `v0.1.0` artifacts remain historical and should not be retagged or force-updated.
- At release planning time, `v0.1.0` was the only public release/tag, so `v0.2.0` is the next public version rather than a retag.
- Homebrew/tap publishing remains a separate follow-up channel after the GitHub Release artifacts and checksums are approved.
