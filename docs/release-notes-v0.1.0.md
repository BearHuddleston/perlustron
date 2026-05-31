# v0.1.0 - Local Session Forensics

Perlustron v0.1.0 was the initial public release line for local-first Codex and Claude Code session forensics.

## Summary

- Inspect Codex and Claude JSONL session logs locally.
- Serve a loopback-only browser UI; API routes are tokenless by default on loopback, with optional per-run local API token auth via `--require-api-token`.
- Provide CLI views for status, session diffs, insights, unknown event reporting, redacted exports, and fixture reporting.
- Package release archives for Linux, Windows, macOS x86_64, and macOS arm64, each with a matching checksum file.
- Include a concise [narrative forensic demo](forensic-demo.md) that uses the sanitized `codex-loop-error` fixture to show Summary, Timeline/Transcript evidence navigation, and Safe To Share workflow.

## Security And Privacy

- No telemetry is implemented.
- Release builds embed browser assets locally.
- Normal UI use makes no third-party browser requests.
- Redacted exports and scan output are best-effort sharing aids; review before sharing.

## Install

Download the archive for your platform from the `v0.1.0` GitHub release, verify the matching `.sha256` checksum, extract the archive, and run:

```bash
perlustron --demo
```

## macOS Signing

The v0.1.0 macOS archives are unsigned developer-preview artifacts because signing/notarization secrets were not configured for this release run. Future releases can be signed and submitted for notarization when the required Apple Developer secrets are configured.
