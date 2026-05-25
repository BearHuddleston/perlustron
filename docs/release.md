# Release

Perlustron releases should be boring to install, usable offline, and honest about signing status. The current public version line is `v0.1.0`; release notes live in [v0.1.0 release notes](release-notes-v0.1.0.md).

## Release Safety Gates

Release docs may include tag, download, and repository-description commands for operator convenience. Treat them as future/manual commands only: do not push tags, edit or publish GitHub Releases, force-update existing tags, publish package channels, or mutate GitHub About text unless a human release owner explicitly approves the exact action.

Before applying new release notes to a public release, confirm the selected tag actually contains the documented content. If a tag already exists, stop and get a human decision for a new version, release addendum, or retag policy before changing anything irreversible.

## Release Classification

Perlustron release assets should always state which trust tier they belong to:

- **Unsigned developer-preview**: platform archives built by GitHub Actions without Apple Developer signing secrets. These are appropriate for technical early adopters who can verify checksums and understand quarantine prompts.
- **Signed/notarized macOS release**: macOS archives produced when the Apple Developer certificate and notarization secrets are configured. The workflow signs the CLI payload, submits it to Apple, and attempts stapling where raw CLI archives support it.

Do not describe a macOS archive as signed/notarized unless the manifest and workflow logs show signing and notarization were configured for that exact run.

## Build Locally

```powershell
npm ci
npm run build
cargo build --release
target\release\perlustron.exe --demo
```

The Rust binary embeds the static UI and demo fixtures. Keep `static/app.js`, `static/styles.css`, `static/index.html`, and `docs/assets/perlustron-demo.png` in sync before tagging.

## Download v0.1.0 Release

```bash
gh release download --repo BearHuddleston/perlustron --pattern 'perlustron-linux-x86_64.tar.gz*'
gh release download --repo BearHuddleston/perlustron --pattern 'perlustron-macos-aarch64.tar.gz*'
gh release download --repo BearHuddleston/perlustron --pattern 'perlustron-macos-x86_64.tar.gz*'
gh release download --repo BearHuddleston/perlustron --pattern 'perlustron-windows-x86_64.zip*'
```

Verify checksums before running:

```bash
sha256sum -c perlustron-linux-x86_64.tar.gz.sha256
shasum -a 256 -c perlustron-macos-aarch64.tar.gz.sha256
```

PowerShell:

```powershell
Get-FileHash .\perlustron-windows-x86_64.zip -Algorithm SHA256
Get-Content .\perlustron-windows-x86_64.zip.sha256
```

## Tag Release

Run the tag push only after the release-prep commit is reviewed, approved, and on `main`, and only after confirming the tag does not already exist. If `v0.1.0` already exists, do not delete, force-update, or re-push it without explicit human approval:

```bash
git tag -a v0.1.0 -m "Perlustron v0.1.0"
git push origin v0.1.0
```

The release workflow builds platform archives for Windows, Linux, macOS x86_64, and macOS arm64 where GitHub runners support them.

## Large-Session Benchmark Checklist

Run the PR-sized guardrail before every release prep branch:

```bash
npm run bench:large
```

For releases that touch parser, export, sanitize, diff, or large-session rendering paths, also run the 100k generated-session benchmark manually on a known local machine and record the timings in the release PR notes:

```bash
cargo run --release -- bench --generate 100000 --append-lines 1000
```

At minimum, compare and record full parse, append parse, warm diff, HTML export, and sanitization times against `docs/benchmarks.md`. The 100k run is intentionally manual because it is hardware-sensitive and too slow/noisy for normal PR CI.

## Artifact Expectations

Release assets should include each archive plus its matching `.sha256` and `.manifest.json` files. The release body should not claim features that are not present in the selected tag. Extracted archives should include:

- `perlustron` or `perlustron.exe`
- `README.md`
- `SECURITY.md`
- `docs/`
- `LICENSE-MIT`
- `LICENSE-APACHE`

Normal users should not need Node, npm, Rust, or CDN access after downloading a release artifact.

## Artifact Manifest

Every platform archive should publish `ARCHIVE_NAME.manifest.json` beside the archive and checksum. The manifest is generated from the staged bundle before upload and records:

- package name, version/tag, target triple label, source commit, workflow, and run id;
- archive filename, archive SHA-256, and matching checksum filename;
- macOS signing status: `unsigned-developer-preview`, `signed`, or `not-applicable`;
- notarization status: `not-configured`, `submitted-by-release-workflow`, or `not-applicable`;
- required package paths such as the binary, licenses, `SECURITY.md`, `docs/release.md`, privacy docs, and bundled screenshot asset;
- per-file size and SHA-256 for the packaged bundle contents.

Use the `.sha256` file for quick download verification and the manifest when auditing exactly which docs/assets/checksums were included in a release. The workflow also extracts each archive and checks required docs/assets before starting the UI smoke test so the manifest is not the only packaging guard.

## Runtime Configuration

Perlustron binds to loopback by default and serves the embedded UI from the binary:

```powershell
perlustron --demo --no-open
perlustron path\to\session.jsonl --source codex --host 127.0.0.1 --port 8787
```

Environment variables are useful for packaged shortcuts and repeatable local launches:

- `PORT`: default port when `--port` is not provided.
- `SESSION_JSONL`: explicit session file for the selected or inferred source.
- `SESSION_SOURCE`: `codex` or `claude`; sets the default source and disambiguates `SESSION_JSONL`.
- `CODEX_SESSION_JSONL`: explicit Codex JSONL file.
- `CLAUDE_SESSION_JSONL`: explicit Claude JSONL file.

When no path or env var is provided, Perlustron discovers the latest JSONL under the default source root in the user's home directory.

## Platform Install Notes

macOS:

```bash
tar -xzf perlustron-macos-aarch64.tar.gz
./perlustron-macos-aarch64/perlustron --demo
```

Linux:

```bash
tar -xzf perlustron-linux-x86_64.tar.gz
./perlustron-linux-x86_64/perlustron --demo
```

Windows:

```powershell
New-Item -ItemType Directory -Force .\perlustron-unpacked | Out-Null
Expand-Archive .\perlustron-windows-x86_64.zip -DestinationPath .\perlustron-unpacked
.\perlustron-unpacked\perlustron-windows-x86_64\perlustron.exe --demo
```

## Homebrew Distribution Path

Homebrew should be treated as a follow-up publishing channel, not an automatic side effect of tagging this repo. A release owner should only publish or update a tap after the GitHub Release is approved, archives are stable, checksums match, and the manifest confirms the expected bundle contents.

Recommended manual tap flow:

1. Create or update a separate tap repository such as `BearHuddleston/homebrew-tap`.
2. Copy the final macOS archive URL and SHA-256 from the published release assets.
3. Add a formula that selects the correct macOS archive for Apple Silicon or Intel.
4. Run `brew audit --strict --new-formula perlustron` and `brew test perlustron` from a clean machine.
5. Link the tap from the release notes only after the formula installs and runs `perlustron --version`.

Formula sketch:

```ruby
class Perlustron < Formula
  desc "Local-first agent-forensics workbench for Codex and Claude Code JSONL logs"
  homepage "https://github.com/BearHuddleston/perlustron"
  license any_of: ["MIT", "Apache-2.0"]

  on_macos do
    if Hardware::CPU.arm?
      url "https://github.com/BearHuddleston/perlustron/releases/download/vVERSION/perlustron-macos-aarch64.tar.gz"
      sha256 "SHA256_FROM_AARCH64_RELEASE"
    else
      url "https://github.com/BearHuddleston/perlustron/releases/download/vVERSION/perlustron-macos-x86_64.tar.gz"
      sha256 "SHA256_FROM_X86_64_RELEASE"
    end
  end

  def install
    bin.install "perlustron"
  end

  test do
    assert_match version.to_s, shell_output("#{bin}/perlustron --version")
  end
end
```

Do not publish a tap, mutate a tap repository, or advertise `brew install` commands until a human release owner explicitly approves that channel for the target version.

Cargo source install is supported for developers:

```bash
cargo install --path .
```

Publishing to crates.io is not part of the current release flow. The crate metadata is prepared so a future publish can be evaluated separately.

## macOS Signing And Notarization

The release workflow signs and submits macOS binaries for notarization when these GitHub Actions secrets are configured:

- `MACOS_SIGNING_CERTIFICATE_P12_BASE64`
- `MACOS_SIGNING_CERTIFICATE_PASSWORD`
- `MACOS_SIGNING_IDENTITY`
- `APPLE_ID`
- `APPLE_TEAM_ID`
- `APPLE_APP_SPECIFIC_PASSWORD`

The certificate should be a Developer ID Application certificate exported as a password-protected `.p12` and base64-encoded for the secret.

The published v0.1.0 macOS archives are unsigned developer-preview artifacts because these secrets were not configured for the release run. Normal CI and unsigned release builds do not require these secrets. If signing secrets are absent in a future release run, macOS archives remain unsigned developer-preview artifacts. Technical users may need to open the binary from Terminal or remove quarantine:

```bash
xattr -dr com.apple.quarantine perlustron
```

Raw CLI tar archives do not always support stapled notarization tickets. The workflow submits the signed macOS payload to Apple and attempts stapling where the target supports it; otherwise Gatekeeper can verify notarization online.

## Supply-chain Checks

Required release builds already use `npm ci`, `cargo build --release --locked`, `cargo fmt --check`, Rust tests, and clippy through `npm run check`. Optional supply-chain checks can be run during release prep and recorded in the release notes when the tools/configuration are available:

```bash
npm audit --audit-level=high
cargo install cargo-audit --locked
cargo audit
cargo install cargo-deny --locked
cargo deny check advisories bans licenses sources
```

Do not make `cargo audit`, `cargo deny`, SBOM generation, or signing-key attestations required CI gates until their configs and false-positive handling are checked into the repo. If adopted later, add the config files and document the exact policy before blocking releases on them.

## Smoke Test

```powershell
perlustron --version
perlustron status fixtures/codex-sanitized.jsonl
perlustron diff fixtures/codex-sanitized.jsonl fixtures/codex-loop-error.jsonl --redacted
perlustron diff fixtures/diff-run-a.jsonl fixtures/diff-run-b.jsonl --format html --redacted -o diff.html
perlustron insights fixtures/codex-loop-error.jsonl
perlustron unknowns fixtures/malformed-mixed-source.jsonl --redacted
```

Run the demo server in a separate terminal, or background it and stop it after checking the local UI:

```bash
perlustron --demo --no-open --port 9876 > /tmp/perlustron-demo.log 2>&1 &
server_pid=$!
curl -fsS http://127.0.0.1:9876/ > /tmp/perlustron-index.html
curl -fsS http://127.0.0.1:9876/app.js > /tmp/perlustron-app.js
kill "$server_pid"
```

For packaged binaries, use `--demo` because fixtures are embedded. The release workflow extracts each archive, launches the packaged binary from the extracted bundle, and loads `http://127.0.0.1:8787/` plus `/app.js` before uploading artifacts.
