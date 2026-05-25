# Privacy And Redaction

Agent session logs are sensitive by default. Treat raw JSONL as private unless you created it as a synthetic fixture.

## Commands

```powershell
perlustron scan session.jsonl
perlustron sanitize session.jsonl -o sanitized.jsonl --profile standard
perlustron sanitize session.jsonl -o strict.jsonl --profile strict
perlustron export session.jsonl --format html -o report.html --redacted --profile strict
perlustron diff before.jsonl after.jsonl --redacted --profile strict
perlustron insights session.jsonl --redacted --profile strict
perlustron unknowns session.jsonl --redacted -o unknowns-redacted.json
```

## Serving Logs Locally

Perlustron binds to `127.0.0.1` by default and keeps API routes tokenless for convenient local-only inspection. Startup prints the current API mode so you can see whether the graph APIs are tokenless or token-protected.

If you bind outside loopback with `--host` and do not set `--require-api-token`, startup prints a `SECURITY WARNING`. Non-loopback tokenless mode can expose raw session graph APIs to anything that can reach the host, and those graphs may include prompts, code, paths, command output, images, tool results, tokens, cookies, environment variables, and credentials. Use `--require-api-token` for non-loopback binds unless the network is isolated and trusted.

## Profiles

| Profile | Behavior |
| --- | --- |
| `minimal` | Redacts detected secrets. |
| `standard` | Redacts detected secrets, auth headers, cookies, environment-looking assignments, and local home paths. |
| `strict` | Redacts secrets plus prompt/content/tool-output-like fields and embedded images in graph/export paths. |
| `structure-only` | Keeps structural identifiers, event types, timings, statuses, and relationships while replacing most strings. |

## Scanner Coverage

The scanner looks for common high-risk patterns such as bearer tokens, authorization headers, cookie headers, OpenAI-style keys, Anthropic-style keys, GitHub tokens, AWS access keys, private-key blocks and headers, URL query tokens, labeled base64-ish credential values, password/token assignments, environment variable dumps, secret-looking JSON fields, local home paths, and email addresses.

This is best-effort. It does not prove a file is safe.

## Adversarial Redaction Tests

The repository includes synthetic adversarial Codex and Claude fixtures that intentionally exercise leak-prone shapes without using real secrets. They cover multiline private-key-shaped blocks, labeled base64-ish tokens, private URL query tokens, Windows home paths, tool-output credentials, unknown/malformed parser-health previews, and embedded image data/metadata.

Strict HTML, Markdown, JSON, unknowns, and fixture-report paths are tested against a shared sentinel inventory so those exports cannot reintroduce the synthetic secret strings or raw image payload markers.

## Sanitized JSONL

`sanitize` preserves JSONL structure where possible and adds a `perlustron_redaction_report` line at the end. Malformed input lines are replaced with a safe placeholder rather than copied verbatim.

## Redacted Exports

Redacted HTML and Markdown exports are labeled with their profile. They are intended for bug reports and review threads where structure matters but raw prompts/output should not be shared.

Redaction is also applied to diff reports, insights reports, unknown-event samples, and fixture reports. In redacted diff mode, prompt and final-response content are represented by stable hashes or omitted previews rather than raw text.
