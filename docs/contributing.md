# Contributing

Run the checks before opening a PR:

```powershell
npm ci
npm run build
npm run check
npm run bench:smoke
```

Keep frontend source and built assets together: edit `src/frontend/app.ts`, then run `npm run build:frontend` so `static/app.js` is updated.

For live browser testing, use the debug asset server:

```powershell
npm run dev
```

That command starts Perlustron with `--dev-assets`, which reads only `static/index.html`, `static/app.js`, and `static/styles.css` from disk. After TypeScript edits, rerun `npm run build:frontend` and refresh the browser; a Rust rebuild is not needed unless Rust code changed. Release builds still embed the static UI.

For parser changes, add sanitized fixtures or unit tests that cover the new event shape. Unknown or malformed data should be surfaced through parser health, not silently dropped. Use:

```powershell
perlustron unknowns session.jsonl --redacted -o unknowns-redacted.json
perlustron fixture-report session.jsonl --redacted -o fixture-report.md
```

For docs, keep README concise and move detailed behavior into `docs/`.
