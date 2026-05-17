# Security

Perlustron is designed for local inspection of sensitive agent logs. Those logs can contain prompts, code, paths, command output, images, tool results, tokens, cookies, environment variables, and credentials.

## Local Server

- The default bind address is `127.0.0.1`.
- API routes require a random per-run local session token in the query string.
- The browser URL printed at startup includes that token.
- Binding to another host with `--host` is an explicit opt-in and may expose session data to your network.
- Perlustron does not add permissive CORS headers.

## Network And Telemetry

- No telemetry is implemented.
- Release-mode UI assets are local. Three.js is bundled into `static/app.js` and embedded into the Rust binary.
- Normal UI use should not make third-party browser requests.
- External image URLs are not fetched.

## Images And Files

Perlustron does not serve arbitrary filesystem paths. The image API decodes embedded image payloads from the selected session JSONL by event index and image index. `--privacy-mode` disables embedded image serving.

## Privacy Mode

Use:

```powershell
perlustron session.jsonl --privacy-mode
```

Privacy mode serves strict-redacted graph data and disables image routes. It is a safety aid for local demos, not a proof that the original file is safe to share.

## Sanitizing Before Sharing

Use:

```powershell
perlustron scan session.jsonl
perlustron sanitize session.jsonl -o sanitized.jsonl --profile standard
perlustron export session.jsonl --format html -o report.html --redacted --profile strict
perlustron diff before.jsonl after.jsonl --redacted --profile strict
perlustron unknowns session.jsonl --redacted -o unknowns-redacted.json
```

The scanner and sanitizer are best-effort. Review sanitized logs and reports manually before sharing.

## Known Limitations

- Secret scanning cannot guarantee detection of every token or proprietary value.
- Redacted reports may still reveal structure, timings, tool names, file extensions, or hashes.
- Hidden or unlogged model reasoning cannot be recovered or verified.
- If you bind outside loopback, your OS/network configuration controls who can connect.

## Reporting Security Issues

Report security issues privately to the repository owner. Do not attach raw private session logs to public issues. Share only sanitized fixtures or minimal synthetic reproductions.
