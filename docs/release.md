# Release

Perlustron releases should be boring to install, usable offline, and honest about signing status. For the v0.2.0 release, use the focused checklist in [v0.2.0 release checklist](release-checklist-v0.2.0.md) before tagging.

## Build Locally

```powershell
npm ci
npm run build
cargo build --release
target\release\perlustron.exe --demo
```

The Rust binary embeds the static UI and demo fixtures. Keep `static/app.js`, `static/styles.css`, and `static/index.html` in sync before tagging.

## Download Latest Release

```bash
gh release download --repo BearHuddleston/perlustron --pattern 'perlustron-linux-x86_64.tar.gz*'
gh release download --repo BearHuddleston/perlustron --pattern 'perlustron-macos-aarch64.tar.gz*'
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

Run the tag push only after the release-prep commit is reviewed, approved, and on `main`:

```bash
git tag -a v0.2.0 -m "v0.2.0 - Interactive Session Compare and Guided Debugging"
git push origin v0.2.0
```

The release workflow builds platform archives for Windows, Linux, macOS x86_64, and macOS arm64 where GitHub runners support them.

## Artifact Expectations

Release assets should include each archive plus its matching `.sha256` file. Extracted archives should include:

- `perlustron` or `perlustron.exe`
- `README.md`
- `SECURITY.md`
- `docs/`
- `LICENSE-MIT`
- `LICENSE-APACHE`

Normal users should not need Node, npm, Rust, or CDN access after downloading a release artifact.

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

## Future Install Channels

Homebrew formula template:

```ruby
class Perlustron < Formula
  desc "Local-first agent-forensics workbench for Codex and Claude Code JSONL logs"
  homepage "https://github.com/BearHuddleston/perlustron"
  url "https://github.com/BearHuddleston/perlustron/releases/download/vVERSION/perlustron-macos-aarch64.tar.gz"
  sha256 "SHA256_FROM_RELEASE"
  license any_of: ["MIT", "Apache-2.0"]

  def install
    bin.install "perlustron"
  end

  test do
    system "#{bin}/perlustron", "--version"
  end
end
```

Do not publish a tap until the release archive names and checksums are stable for the target version.

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

Normal CI and unsigned release builds do not require these secrets. If they are absent, macOS archives are unsigned developer-preview artifacts. Technical users may need to open the binary from Terminal or remove quarantine:

```bash
xattr -dr com.apple.quarantine perlustron
```

Raw CLI tar archives do not always support stapled notarization tickets. The workflow submits the signed macOS payload to Apple and attempts stapling where the target supports it; otherwise Gatekeeper can verify notarization online.

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
