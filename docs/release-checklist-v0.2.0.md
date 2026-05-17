# v0.2.0 Release Checklist

Use this checklist after the release-prep changes are reviewed and merged to `main`. Do not run the tag push, publish the draft, or mutate GitHub repository About text until a human explicitly approves those irreversible steps.

## Preflight Consistency

- Version metadata is `0.2.0` in `Cargo.toml`, `Cargo.lock`, `package.json`, and `package-lock.json`.
- README install docs list the same release archive names produced by `.github/workflows/release.yml`.
- v0.2.0 release notes live at `docs/release-notes-v0.2.0.md` with the suggested title `v0.2.0 - Interactive Session Compare and Guided Debugging`.
- `.github/workflows/release.yml` is tag-driven (`v*`) and publishes a GitHub draft release rather than an immediately public release.
- GitHub currently has `v0.1.0` as the latest published release; `v0.2.0` should not exist before tagging.

## Final Local Checks

```bash
git checkout main
git pull --ff-only origin main
npm ci
npm run check
cargo run --quiet -- --version
```

Expected version output:

```text
perlustron 0.2.0 (build local, parser schema agent-trace-v1, trace schema agent-trace-v1)
```

## Exact Tag Command

Run this only after human approval and after the reviewed release-prep commit is on `main`:

```bash
git tag -a v0.2.0 -m "v0.2.0 - Interactive Session Compare and Guided Debugging"
git push origin v0.2.0
```

## Workflow Expectations

Pushing `v0.2.0` should trigger `.github/workflows/release.yml`.

The `build` matrix should produce these archives and matching `.sha256` files:

- `perlustron-linux-x86_64.tar.gz`
- `perlustron-windows-x86_64.zip`
- `perlustron-macos-x86_64.tar.gz`
- `perlustron-macos-aarch64.tar.gz`

Each matrix job should:

1. Install Node.js 24 and the stable Rust toolchain.
2. Run `npm ci`.
3. Run `npm run build`.
4. Run `cargo build --release --locked` with `PERLUSTRON_BUILD_COMMIT` set to the tag commit SHA.
5. Package the binary with README, SECURITY, docs, and both license files.
6. Generate a `.sha256` checksum beside the archive.
7. Extract the archive, run `perlustron --version`, launch `perlustron --demo --no-open`, and verify both `/` and `/app.js` load from loopback.

The `publish` job should download all build artifacts and create a GitHub draft release via `softprops/action-gh-release`. Human review is still required before publishing that draft.

macOS signing and notarization are conditional. If signing/notarization secrets are absent, the macOS artifacts are expected to be unsigned developer-preview archives and the release notes should preserve the quarantine-removal guidance.

## Artifact Validation Before Publishing The Draft

After the release workflow completes, validate the draft release assets before pressing Publish.

```bash
mkdir -p /tmp/perlustron-v0.2.0-validate
cd /tmp/perlustron-v0.2.0-validate
gh release download v0.2.0 --repo BearHuddleston/perlustron --pattern 'perlustron-*'
ls -1
sha256sum -c perlustron-linux-x86_64.tar.gz.sha256
shasum -a 256 -c perlustron-macos-x86_64.tar.gz.sha256
shasum -a 256 -c perlustron-macos-aarch64.tar.gz.sha256
```

Windows checksum validation from PowerShell:

```powershell
Get-FileHash .\perlustron-windows-x86_64.zip -Algorithm SHA256
Get-Content .\perlustron-windows-x86_64.zip.sha256
```

Extract and smoke test at least one Unix archive locally:

```bash
tar -xzf perlustron-linux-x86_64.tar.gz
./perlustron-linux-x86_64/perlustron --version
./perlustron-linux-x86_64/perlustron --demo --no-open --port 9876 > /tmp/perlustron-v0.2.0-demo.log 2>&1 &
server_pid=$!
curl -fsS http://127.0.0.1:9876/ > /tmp/perlustron-v0.2.0-index.html
curl -fsS http://127.0.0.1:9876/app.js > /tmp/perlustron-v0.2.0-app.js
kill "$server_pid"
```

Expected archive contents:

- `perlustron` or `perlustron.exe`
- `README.md`
- `SECURITY.md`
- `docs/`
- `LICENSE-MIT`
- `LICENSE-APACHE`

## Draft Release Review

- Replace or augment the generated draft body with `docs/release-notes-v0.2.0.md`.
- Confirm the release title is `v0.2.0 - Interactive Session Compare and Guided Debugging`.
- Confirm every archive has a matching `.sha256` asset.
- Confirm local-first privacy claims remain true: loopback default bind, per-run token-protected API routes, bundled UI assets, no telemetry.
- Confirm macOS signing/notarization status is accurately described for this run.

## GitHub About Text Update

Current GitHub About description observed during release prep:

```text
Local 3D session workflow viewer for Codex and Claude JSONL
```

Recommended replacement text, matching README:

```text
Local agent-forensics workbench for Codex and Claude Code JSONL sessions: map, timeline, transcript, diff, insights, and redacted reports.
```

After the release is approved, update the repository About description with:

```bash
gh repo edit BearHuddleston/perlustron --description "Local agent-forensics workbench for Codex and Claude Code JSONL sessions: map, timeline, transcript, diff, insights, and redacted reports."
```
