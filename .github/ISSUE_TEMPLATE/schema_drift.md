---
name: Schema drift / unknown event
about: Report unsupported Codex or Claude Code session-log shapes safely
title: "Schema drift: "
labels: ["schema-drift"]
---

## Summary

What did Perlustron fail to recognize?

## Environment

- Perlustron version:
- Source type: Codex / Claude Code
- Platform:

## Parser Health

Paste redacted output from:

```bash
perlustron status path/to/session.jsonl
perlustron unknowns path/to/session.jsonl --redacted -o unknowns-redacted.json
```

## Redacted Unknowns

Attach or paste only redacted `unknowns-redacted.json` output. Do not attach raw private logs.

## Fixture

Can you provide a synthetic or strict-redacted fixture?

- [ ] Yes, synthetic
- [ ] Yes, strict-redacted
- [ ] Not yet

