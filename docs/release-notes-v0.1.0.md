# v0.1.0 - Local Session Forensics

Perlustron v0.1.0 is the active public release line for local-first Codex and Claude Code session forensics.

## Summary

- Inspect Codex and Claude JSONL session logs locally.
- Serve a loopback-only browser UI with a per-run local API token.
- Provide CLI views for status, session diffs, insights, unknown event reporting, redacted exports, and fixture reporting.
- Package release archives for Linux, Windows, macOS x86_64, and macOS arm64, each with a matching checksum file.

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

macOS binaries are signed and submitted for notarization when release secrets are configured. If signing secrets are absent, macOS archives are unsigned developer-preview artifacts.
