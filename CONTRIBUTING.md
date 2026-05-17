# Contributing

Thanks for helping improve Perlustron.

Start with the developer guide in [docs/contributing.md](docs/contributing.md). Before opening a PR, run:

```powershell
npm ci
npm run build
npm run check
npm run bench:smoke
```

Fixtures must be synthetic or sanitized. Do not commit raw private Codex or Claude Code logs.

Unless stated otherwise, contributions submitted for inclusion in Perlustron are dual licensed under `MIT OR Apache-2.0`.
