# v0.3.0 - Summary Evidence, Copy-Safe Sharing, and Large-Session Polish

Perlustron v0.3.0 promotes the Wave 3 nightly work to a public release: summary-first debugging, safer share/reference flows, large-session image evidence indexing, and refreshed demo assets.

## Highlights

- Added Summary evidence routing so insight cards can point back to the raw turns, tool calls, and media evidence they summarize.
- Added copy-safe reference and share summary UI that preserves structure while avoiding accidental prompt, tool-result, or private-log disclosure.
- Improved larger-session performance by caching image line-offset lookups used by evidence/reporting paths.
- Refreshed the Summary-first demo screenshot from bundled sanitized Codex demo data in privacy mode.
- Consolidated release-candidate notes, benchmark guidance, fixture documentation, and security/privacy claims for the Wave 3 milestone.

## Upgrade Notes

- Version metadata is prepared as `0.3.0`.
- Existing CLI commands and local-first defaults remain available.
- Copy-safe references and redacted exports are review aids, not a substitute for human review before sharing logs.
- Large-session cache behavior is internal; it should improve reporting/evidence paths without changing normalized trace semantics.

## Suggested Release Title

`v0.3.0 - Summary Evidence, Copy-Safe Sharing, and Large-Session Polish`
