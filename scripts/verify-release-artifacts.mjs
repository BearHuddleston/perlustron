// SPDX-License-Identifier: MIT OR Apache-2.0

import { createHash } from "node:crypto";
import {
  chmodSync,
  existsSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import {
  basename,
  isAbsolute,
  join,
  relative,
  resolve,
  sep,
} from "node:path";
import { spawn, spawnSync } from "node:child_process";

const TARGET_ARCHIVES = new Map([
  ["linux-x86_64", { archive: "perlustron-linux-x86_64.tar.gz", binary: "perlustron", platform: "linux", arch: "x64" }],
  ["macos-aarch64", { archive: "perlustron-macos-aarch64.tar.gz", binary: "perlustron", platform: "darwin", arch: "arm64" }],
  ["macos-x86_64", { archive: "perlustron-macos-x86_64.tar.gz", binary: "perlustron", platform: "darwin", arch: "x64" }],
  ["windows-x86_64", { archive: "perlustron-windows-x86_64.zip", binary: "perlustron.exe", platform: "win32", arch: "x64" }],
]);

const REQUIRED_MANIFEST_PATHS = [
  "README.md",
  "SECURITY.md",
  "LICENSE-MIT",
  "LICENSE-APACHE",
  "docs/release.md",
  "docs/privacy-and-redaction.md",
  "docs/assets/perlustron-demo.png",
];

function fail(message) {
  console.error(`release artifact verifier error: ${message}`);
  process.exit(1);
}

function log(message) {
  console.log(`[release-verifier] ${message}`);
}

function usage() {
  return `Usage:
  node scripts/verify-release-artifacts.mjs v0.2.0 linux-x86_64
  node scripts/verify-release-artifacts.mjs --repo BearHuddleston/perlustron --tag v0.2.0 --target linux-x86_64

Options:
  --repo OWNER/REPO       GitHub repository (default: BearHuddleston/perlustron)
  --tag vX.Y.Z            Release tag to verify
  --target TARGET         One of: ${[...TARGET_ARCHIVES.keys()].join(", ")}
  --asset-dir DIR         Reuse/download assets in DIR instead of a temp directory
  --port PORT             Local smoke-test port (default: 18787)
  --skip-run              Verify archive/checksum/manifest only; do not execute binary
  --keep                  Keep downloaded/extracted files after verification
  --help                  Show this help
`;
}

function parseArgs(argv) {
  const options = {
    repo: "BearHuddleston/perlustron",
    tag: "",
    target: "",
    assetDir: "",
    port: 18787,
    skipRun: false,
    keep: false,
  };
  const positionals = [];
  let tagFromOption = false;
  let targetFromOption = false;
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--help" || arg === "-h") {
      console.log(usage());
      process.exit(0);
    }
    if (arg === "--skip-run") {
      options.skipRun = true;
      continue;
    }
    if (arg === "--keep") {
      options.keep = true;
      continue;
    }
    if (!arg.startsWith("--")) {
      positionals.push(arg);
      continue;
    }
    const key = arg.slice(2);
    const value = argv[index + 1];
    if (!value || value.startsWith("--")) {
      fail(`missing value for --${key}`);
    }
    index += 1;
    if (key === "repo") options.repo = value;
    else if (key === "tag") {
      options.tag = value;
      tagFromOption = true;
    } else if (key === "target") {
      options.target = value;
      targetFromOption = true;
    } else if (key === "asset-dir") options.assetDir = value;
    else if (key === "port") options.port = Number(value);
    else fail(`unknown option --${key}`);
  }
  if (positionals.length > 2) {
    fail(`unexpected positional arguments: ${positionals.slice(2).join(", ")}`);
  }
  if ((tagFromOption || targetFromOption) && positionals.length > 0) {
    fail(`unexpected positional arguments when using --tag/--target: ${positionals.join(", ")}`);
  }
  if (!tagFromOption && positionals[0]) options.tag = positionals[0];
  if (!targetFromOption && positionals[1]) options.target = positionals[1];
  if (!options.tag) fail("release tag is required");
  if (!/^v\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/.test(options.tag)) {
    fail(`release tag should look like vX.Y.Z, got ${options.tag}`);
  }
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(options.repo)) {
    fail(`repo should look like OWNER/REPO, got ${options.repo}`);
  }
  if (!TARGET_ARCHIVES.has(options.target)) {
    fail(`target must be one of: ${[...TARGET_ARCHIVES.keys()].join(", ")}`);
  }
  if (!Number.isInteger(options.port) || options.port <= 0 || options.port > 65535) {
    fail(`port must be an integer from 1 to 65535, got ${options.port}`);
  }
  return options;
}

function sha256File(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

function normalizePath(path) {
  return path.split(sep).join("/");
}

function safeRelativePath(path, context) {
  if (typeof path !== "string" || !path.trim()) {
    fail(`${context} must be a non-empty relative path`);
  }
  if (path.includes("\0") || path.includes("\\")) {
    fail(`${context} contains an unsafe path: ${JSON.stringify(path)}`);
  }
  let normalized = path.replace(/^\.\/+/, "").replace(/\/+$/u, "");
  if (!normalized || normalized === ".") {
    fail(`${context} must not point at the archive root`);
  }
  if (isAbsolute(normalized) || /^[A-Za-z]:/.test(normalized)) {
    fail(`${context} must be relative, got ${JSON.stringify(path)}`);
  }
  const segments = normalized.split("/");
  if (segments.some((segment) => !segment || segment === "." || segment === "..")) {
    fail(`${context} contains traversal or empty segments: ${JSON.stringify(path)}`);
  }
  return segments.join("/");
}

function safeArchiveMemberPath(path, context) {
  if (typeof path !== "string") {
    fail(`${context} must be a string path`);
  }
  const normalized = path.replace(/^\.\/+/, "").replace(/\/+$/u, "");
  if (!normalized || normalized === ".") {
    return null;
  }
  return safeRelativePath(normalized, context);
}

function resolveInside(root, relativePath, context) {
  const safePath = safeRelativePath(relativePath, context);
  const rootPath = resolve(root);
  const fullPath = resolve(rootPath, ...safePath.split("/"));
  const rel = relative(rootPath, fullPath);
  if (rel.startsWith("..") || isAbsolute(rel)) {
    fail(`${context} resolves outside ${rootPath}: ${relativePath}`);
  }
  return fullPath;
}

async function downloadIfMissing(url, destination) {
  if (existsSync(destination)) {
    log(`using existing ${destination}`);
    return;
  }
  log(`downloading ${basename(destination)}`);
  const response = await fetch(url, {
    headers: {
      "User-Agent": "perlustron-release-verifier",
      Accept: "application/octet-stream",
    },
  });
  if (!response.ok) {
    fail(`failed to download ${url}: HTTP ${response.status}`);
  }
  const bytes = Buffer.from(await response.arrayBuffer());
  writeFileSync(destination, bytes);
}

function verifyChecksum(archivePath, checksumPath) {
  const actual = sha256File(archivePath);
  const checksumLines = readFileSync(checksumPath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const archiveName = basename(archivePath).toLowerCase();
  const matched = checksumLines.some((line) => {
    const [hash, ...fileParts] = line.split(/\s+/);
    const fileName = fileParts.join(" ").replace(/^\*/, "");
    return hash?.toLowerCase() === actual && basename(fileName).toLowerCase() === archiveName;
  });
  if (!matched) {
    fail(`${basename(checksumPath)} does not match ${basename(archivePath)} (${actual})`);
  }
  log(`checksum verified: ${basename(archivePath)} ${actual}`);
  return actual;
}

function expect(condition, message) {
  if (!condition) fail(message);
}

function verifyManifest(manifestPath, { archiveName, archiveSha256, tag, target, binary }) {
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  const expectedVersion = tag.replace(/^v/, "");

  expect(manifest.schema_version === 1, "manifest schema_version should be 1");
  expect(manifest.generated_by === "scripts/write-release-manifest.mjs", "manifest generated_by should name the checked-in writer");
  expect(manifest.package?.name === "perlustron", "manifest package.name should be perlustron");
  expect(manifest.package?.version === expectedVersion, `manifest package.version should be ${expectedVersion}`);
  expect(manifest.package?.target === target, `manifest package.target should be ${target}`);
  expect(manifest.package?.binary === binary, `manifest package.binary should be ${binary}`);
  expect(manifest.archive?.name === archiveName, `manifest archive.name should be ${archiveName}`);
  expect(manifest.archive?.sha256 === archiveSha256, "manifest archive.sha256 should match downloaded archive");
  expect(manifest.archive?.checksum_file === `${archiveName}.sha256`, "manifest archive.checksum_file should match checksum asset name");
  expect(["none"].includes(manifest.privacy?.telemetry), "manifest should record telemetry as none");
  expect(manifest.privacy?.browser_assets === "bundled-local-assets", "manifest should record bundled local browser assets");
  expect(manifest.privacy?.default_bind_address === "127.0.0.1", "manifest should record loopback default bind address");
  expect(Array.isArray(manifest.required_paths), "manifest required_paths should be an array");
  expect(Array.isArray(manifest.contents), "manifest contents should be an array");

  const manifestRequiredPaths = manifest.required_paths.map((requiredPath) =>
    safeRelativePath(requiredPath, "manifest required_paths entry")
  );
  const manifestContents = manifest.contents.map((entry) => {
    const path = safeRelativePath(entry?.path, "manifest contents entry path");
    expect(
      Number.isSafeInteger(entry?.bytes) && entry.bytes >= 0,
      `manifest contents entry ${path} should include a non-negative byte count`
    );
    expect(
      typeof entry?.sha256 === "string" && /^[0-9a-f]{64}$/u.test(entry.sha256),
      `manifest contents entry ${path} should include a lowercase SHA-256`
    );
    return { path, bytes: entry.bytes, sha256: entry.sha256 };
  });
  manifest.required_paths = manifestRequiredPaths;
  manifest.contents = manifestContents;

  const requiredPaths = new Set(manifestRequiredPaths);
  for (const requiredPath of [binary, ...REQUIRED_MANIFEST_PATHS]) {
    expect(requiredPaths.has(requiredPath), `manifest required_paths should include ${requiredPath}`);
  }

  const contentPaths = new Set(manifestContents.map((entry) => entry.path));
  for (const requiredPath of [binary, ...REQUIRED_MANIFEST_PATHS]) {
    expect(contentPaths.has(requiredPath), `manifest contents should include ${requiredPath}`);
  }

  const isMac = target.startsWith("macos-");
  const expectedSigningStatuses = isMac
    ? ["signed", "unsigned-developer-preview"]
    : ["not-applicable"];
  const expectedNotarizationStatuses = isMac
    ? ["submitted-by-release-workflow", "not-configured"]
    : ["not-applicable"];
  expect(
    expectedSigningStatuses.includes(manifest.signing?.status),
    `manifest signing.status should be one of ${expectedSigningStatuses.join(", ")}`
  );
  expect(
    expectedNotarizationStatuses.includes(manifest.signing?.notarization),
    `manifest signing.notarization should be one of ${expectedNotarizationStatuses.join(", ")}`
  );

  log(`manifest verified: ${basename(manifestPath)}`);
  return manifest;
}

function runChecked(command, args, options = {}) {
  const result = spawnSync(command, args, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    ...options,
  });
  if (result.error) {
    fail(`${command} ${args.join(" ")} failed to start: ${result.error.message}`);
  }
  if (result.status !== 0) {
    fail(`${command} ${args.join(" ")} failed with ${result.status}: ${result.stderr || result.stdout}`);
  }
  return result.stdout.trim();
}

function validateArchiveMemberList(paths, context) {
  for (const path of paths) {
    safeArchiveMemberPath(path, context);
  }
}

function validateTarArchive(archivePath) {
  const verboseLines = runChecked("tar", ["-tvzf", archivePath])
    .split(/\r?\n/u)
    .filter(Boolean);
  for (const line of verboseLines) {
    const entryType = line[0];
    if (entryType !== "-" && entryType !== "d") {
      fail(`archive contains unsupported tar entry type ${entryType}: ${line}`);
    }
  }
  const paths = runChecked("tar", ["-tzf", archivePath])
    .split(/\r?\n/u)
    .filter(Boolean);
  validateArchiveMemberList(paths, "tar archive member");
}

function validateZipArchive(archivePath) {
  const zipValidation = String.raw`
import json
import stat
import sys
import zipfile

archive = sys.argv[1]
paths = []
with zipfile.ZipFile(archive) as zf:
    for info in zf.infolist():
        paths.append(info.filename)
        file_type = (info.external_attr >> 16) & 0o170000
        if file_type and file_type not in (stat.S_IFREG, stat.S_IFDIR):
            print(f"unsupported zip entry type {oct(file_type)}: {info.filename}", file=sys.stderr)
            sys.exit(2)
print(json.dumps(paths))
`;
  const result = spawnSync("python3", ["-c", zipValidation, archivePath], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
  if (result.error) {
    fail(`python3 zip validation failed to start: ${result.error.message}`);
  }
  if (result.status !== 0) {
    fail(`zip archive validation failed: ${result.stderr || result.stdout}`);
  }
  validateArchiveMemberList(JSON.parse(result.stdout), "zip archive member");
}

function validateArchive(archivePath) {
  if (archivePath.endsWith(".tar.gz")) {
    validateTarArchive(archivePath);
  } else if (archivePath.endsWith(".zip")) {
    validateZipArchive(archivePath);
  } else {
    fail(`unsupported archive extension: ${archivePath}`);
  }
}

function rejectUnsupportedExtractedEntries(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isSymbolicLink()) {
      fail(`extracted bundle contains unsupported symlink: ${normalizePath(fullPath)}`);
    }
    if (entry.isDirectory()) {
      rejectUnsupportedExtractedEntries(fullPath);
      continue;
    }
    if (!entry.isFile()) {
      fail(`extracted bundle contains unsupported file type: ${normalizePath(fullPath)}`);
    }
  }
}

function extractArchive(archivePath, extractDir) {
  validateArchive(archivePath);
  rmSync(extractDir, { recursive: true, force: true });
  mkdirSync(extractDir, { recursive: true });
  if (archivePath.endsWith(".tar.gz")) {
    runChecked("tar", ["-xzf", archivePath, "-C", extractDir]);
  } else if (archivePath.endsWith(".zip")) {
    runChecked("python3", ["-m", "zipfile", "-e", archivePath, extractDir]);
  } else {
    fail(`unsupported archive extension: ${archivePath}`);
  }
  rejectUnsupportedExtractedEntries(extractDir);
  const entries = readdirSync(extractDir).filter((entry) => !entry.startsWith("."));
  if (entries.length === 1) {
    const onlyEntry = join(extractDir, entries[0]);
    if (lstatSync(onlyEntry).isDirectory()) return onlyEntry;
  }
  const archiveBase = basename(archivePath).replace(/\.tar\.gz$|\.zip$/u, "");
  const namedDir = join(extractDir, archiveBase);
  if (existsSync(namedDir) && lstatSync(namedDir).isDirectory()) return namedDir;
  return extractDir;
}

function verifyExtractedBundle(bundleDir, manifest) {
  const contentHashes = new Map(
    manifest.contents.map((entry) => [entry.path, { sha256: entry.sha256, bytes: entry.bytes }])
  );
  for (const requiredPath of manifest.required_paths) {
    const fullPath = resolveInside(bundleDir, requiredPath, "manifest required path");
    expect(existsSync(fullPath), `extracted bundle missing ${requiredPath}`);
    const stats = lstatSync(fullPath);
    expect(!stats.isSymbolicLink(), `extracted bundle required path is an unsupported symlink: ${requiredPath}`);
    expect(stats.isFile(), `extracted bundle required path is not a file: ${requiredPath}`);
    expect(stats.size > 0, `extracted bundle required path is empty: ${requiredPath}`);
    const expected = contentHashes.get(requiredPath);
    if (expected) {
      expect(stats.size === expected.bytes, `extracted bundle size mismatch for ${requiredPath}`);
      expect(sha256File(fullPath) === expected.sha256, `extracted bundle sha256 mismatch for ${requiredPath}`);
    }
  }
  log(`extracted bundle verified: ${normalizePath(bundleDir)}`);
}

function isHostRunnable(targetInfo) {
  return process.platform === targetInfo.platform && process.arch === targetInfo.arch;
}

function wait(ms) {
  return new Promise((resolveWait) => setTimeout(resolveWait, ms));
}

async function fetchText(url) {
  const response = await fetch(url, { headers: { "User-Agent": "perlustron-release-verifier" } });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.text();
}

async function waitForServer(baseUrl, processRef) {
  let lastError = "server did not respond";
  for (let attempt = 0; attempt < 80; attempt += 1) {
    if (processRef.exitCode !== null) {
      throw new Error(`server exited early with code ${processRef.exitCode}`);
    }
    try {
      const html = await fetchText(`${baseUrl}/`);
      if (html.includes("Perlustron")) return html;
      lastError = "index did not include Perlustron";
    } catch (error) {
      lastError = error.message;
    }
    await wait(250);
  }
  throw new Error(lastError);
}

async function smokeRunnableBinary(binaryPath, port) {
  try {
    chmodSync(binaryPath, 0o755);
  } catch {
    // Windows archives and non-POSIX filesystems may not support chmod; spawn will report if unusable.
  }
  const version = runChecked(binaryPath, ["--version"]);
  expect(/perlustron\s+\d+\.\d+\.\d+/.test(version), `unexpected --version output: ${version}`);
  log(`binary version: ${version}`);

  const server = spawn(binaryPath, ["--demo", "--no-open", "--port", String(port)], {
    stdio: ["ignore", "pipe", "pipe"],
  });
  let output = "";
  server.stdout.on("data", (chunk) => {
    output += chunk.toString();
  });
  server.stderr.on("data", (chunk) => {
    output += chunk.toString();
  });
  const baseUrl = `http://127.0.0.1:${port}`;
  try {
    await waitForServer(baseUrl, server);
    const appJs = await fetchText(`${baseUrl}/app.js`);
    expect(appJs.includes("Perlustron") || appJs.includes("perlustron"), "/app.js should look like the bundled Perlustron UI");
    log(`local UI smoke passed: ${baseUrl}/ and /app.js`);
  } catch (error) {
    fail(`local UI smoke failed: ${error.message}\n${output}`);
  } finally {
    if (server.exitCode === null) {
      server.kill("SIGTERM");
      await wait(250);
      if (server.exitCode === null) server.kill("SIGKILL");
    }
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const targetInfo = TARGET_ARCHIVES.get(options.target);
  const archiveName = targetInfo.archive;
  const manifestName = `${archiveName}.manifest.json`;
  const checksumName = `${archiveName}.sha256`;
  const baseReleaseUrl = `https://github.com/${options.repo}/releases/download/${options.tag}`;
  const ownsTempDir = !options.assetDir;
  const rootDir = options.assetDir
    ? resolve(options.assetDir)
    : mkdtempSync(join(tmpdir(), "perlustron-release-verify-"));
  const downloadDir = options.assetDir ? rootDir : join(rootDir, "assets");
  const extractDir = join(rootDir, "extracted");
  mkdirSync(downloadDir, { recursive: true });

  try {
    const archivePath = join(downloadDir, archiveName);
    const checksumPath = join(downloadDir, checksumName);
    const manifestPath = join(downloadDir, manifestName);

    await downloadIfMissing(`${baseReleaseUrl}/${archiveName}`, archivePath);
    await downloadIfMissing(`${baseReleaseUrl}/${checksumName}`, checksumPath);
    await downloadIfMissing(`${baseReleaseUrl}/${manifestName}`, manifestPath);

    const archiveSha256 = verifyChecksum(archivePath, checksumPath);
    const manifest = verifyManifest(manifestPath, {
      archiveName,
      archiveSha256,
      tag: options.tag,
      target: options.target,
      binary: targetInfo.binary,
    });
    const bundleDir = extractArchive(archivePath, extractDir);
    verifyExtractedBundle(bundleDir, manifest);

    const binaryPath = join(bundleDir, targetInfo.binary);
    if (options.skipRun) {
      log("binary run smoke skipped by --skip-run");
    } else if (!isHostRunnable(targetInfo)) {
      log(`binary run smoke skipped: host ${process.platform}/${process.arch} cannot execute ${options.target}`);
    } else {
      await smokeRunnableBinary(binaryPath, options.port);
    }

    log(`verified ${options.repo} ${options.tag} ${options.target}`);
    if (options.keep || !ownsTempDir) {
      log(`kept verification files in ${rootDir}`);
    }
  } finally {
    if (!options.keep && ownsTempDir) {
      rmSync(rootDir, { recursive: true, force: true });
    }
  }
}

main().catch((error) => fail(error.stack || error.message));
