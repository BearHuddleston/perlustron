# v0.3.0 Release Checklist

Use this checklist after the release-prep changes are reviewed and merged to `main`. Do not run the tag push, publish or edit a GitHub Release, move/re-push an existing tag, or mutate GitHub repository About text until a human explicitly approves those irreversible steps.

## Preflight Consistency

- Version metadata is `0.3.0` in `Cargo.toml`, `Cargo.lock`, `package.json`, and `package-lock.json`.
- The static UI badge reads `v0.3.0`.
- README install docs list the same release archive names produced by `.github/workflows/release.yml`.
- v0.3.0 release notes live at `docs/release-notes-v0.3.0.md` with the suggested title `v0.3.0 - Summary Evidence, Copy-Safe Sharing, and Large-Session Polish`.
- The selected tag includes the Wave 3 `dev/nightly` history and the promoted main-tree content.
- README and `docs/fixtures.md` identify the screenshot as generated from the bundled sanitized Codex demo in privacy mode; do not use private logs for release screenshots.
- `.github/workflows/release.yml` is tag-driven (`v*`) and publishes a GitHub draft release rather than an immediately public release.
- Before running any tag or release command, verify whether `v0.3.0` already exists on GitHub. If it exists, stop: do not delete, force-update, re-push, edit, or republish it unless a human release owner explicitly approves the exact plan.

## Final Local Checks

```bash
git checkout main
git pull --ff-only origin main
npm ci
npm run build:frontend
npm run check
cargo +stable run --quiet -- --version
```

If `cargo +stable` is unavailable on the release machine, use the configured stable Rust toolchain and record the exact command in the checklist notes.

Expected version output:

```text
perlustron 0.3.0 (build local, parser schema agent-trace-v1, trace schema agent-trace-v1)
```

## Exact Tag Command

Run this only after human approval, after the reviewed release-prep commit is on `main`, and after confirming `v0.3.0` does not already exist. If the tag or release already exists, stop and get an explicit human decision for a new version, addendum, or retag policy before doing anything irreversible:

```bash
git tag -a v0.3.0 -m "v0.3.0 - Summary Evidence, Copy-Safe Sharing, and Large-Session Polish"
git push origin v0.3.0
```

## Workflow Expectations

Pushing `v0.3.0` should trigger `.github/workflows/release.yml` only when the tag is new. Do not force-update an existing release tag to retrigger the workflow without explicit human approval.

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
mkdir -p /tmp/perlustron-v0.3.0-validate
cd /tmp/perlustron-v0.3.0-validate
gh release download v0.3.0 --repo BearHuddleston/perlustron --pattern 'perlustron-*'
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
./perlustron-linux-x86_64/perlustron --demo --no-open --port 9876 > /tmp/perlustron-v0.3.0-demo.log 2>&1 &
server_pid=$!
curl -fsS http://127.0.0.1:9876/ > /tmp/perlustron-v0.3.0-index.html
curl -fsS http://127.0.0.1:9876/app.js > /tmp/perlustron-v0.3.0-app.js
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

- Replace or augment the generated draft body with `docs/release-notes-v0.3.0.md` only if the selected tag includes the documented content.
- Confirm the release title is `v0.3.0 - Summary Evidence, Copy-Safe Sharing, and Large-Session Polish`.
- Confirm every archive has a matching `.sha256` asset.
- Confirm local-first privacy claims remain true: loopback default bind, per-run token-protected API routes, bundled UI assets, no telemetry.
- Confirm copy-safe references/share summaries preserve structural context without copying raw prompt/tool/result text, and keep the human-review caveat for raw logs.
- Confirm the README screenshot and any release images are generated from sanitized bundled demo data in privacy mode.
- Confirm the larger-session image-evidence lookup path was smoke tested or explicitly deferred with a benchmark note.
- Confirm macOS signing/notarization status is accurately described for this run.
