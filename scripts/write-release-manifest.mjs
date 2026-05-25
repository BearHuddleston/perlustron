// SPDX-License-Identifier: MIT OR Apache-2.0

import { createHash } from "node:crypto";
import {
  existsSync,
  lstatSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { basename, join, relative, sep } from "node:path";

function fail(message) {
  console.error(`release manifest error: ${message}`);
  process.exit(1);
}

const args = new Map();
for (let index = 2; index < process.argv.length; index += 1) {
  const arg = process.argv[index];
  if (!arg.startsWith("--")) {
    fail(`unexpected argument ${arg}`);
  }
  const key = arg.slice(2);
  const value = process.argv[index + 1];
  if (!value || value.startsWith("--")) {
    fail(`missing value for --${key}`);
  }
  args.set(key, value);
  index += 1;
}

function option(name, envName) {
  return args.get(name) ?? process.env[envName] ?? "";
}

const target = option("target", "PERLUSTRON_RELEASE_TARGET");
const binary = option("binary", "PERLUSTRON_RELEASE_BINARY");
const archivePath = option("archive", "PERLUSTRON_RELEASE_ARCHIVE");
const bundlePath = option("bundle", "PERLUSTRON_RELEASE_BUNDLE");

if (!target) fail("target is required");
if (!binary) fail("binary is required");
if (!archivePath) fail("archive path is required");
if (!bundlePath) fail("bundle path is required");
if (!existsSync(bundlePath)) fail(`bundle directory does not exist: ${bundlePath}`);
if (!existsSync(archivePath)) fail(`archive does not exist: ${archivePath}`);

const checksumPath = `${archivePath}.sha256`;
if (!existsSync(checksumPath)) fail(`checksum file does not exist: ${checksumPath}`);

function normalizePath(path) {
  return path.split(sep).join("/");
}

function sha256File(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

function walkFiles(root, dir = root) {
  const entries = readdirSync(dir, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const files = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(root, path));
      continue;
    }
    if (entry.isFile()) {
      const stats = statSync(path);
      files.push({
        path: normalizePath(relative(root, path)),
        bytes: stats.size,
        sha256: sha256File(path),
      });
      continue;
    }
    if (entry.isSymbolicLink()) {
      fail(`bundle contains unsupported symlink: ${path}`);
    }
  }
  return files;
}

const requiredPaths = [
  binary,
  "README.md",
  "SECURITY.md",
  "LICENSE-MIT",
  "LICENSE-APACHE",
  "docs/release.md",
  "docs/privacy-and-redaction.md",
  "docs/assets/perlustron-demo.png",
];

for (const requiredPath of requiredPaths) {
  const fullPath = join(bundlePath, ...requiredPath.split("/"));
  if (!existsSync(fullPath)) {
    fail(`bundle is missing required content: ${requiredPath}`);
  }
  const stats = lstatSync(fullPath);
  if (!stats.isFile()) {
    fail(`required bundle path is not a file: ${requiredPath}`);
  }
  if (stats.size === 0) {
    fail(`required bundle file is empty: ${requiredPath}`);
  }
}

const archiveSha256 = sha256File(archivePath);
const checksumLines = readFileSync(checksumPath, "utf8")
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean);
const hasMatchingChecksumEntry = checksumLines.some((line) => {
  const [hash, ...fileParts] = line.split(/\s+/);
  const fileName = fileParts.join(" ").replace(/^\*/, "");
  return (
    hash?.toLowerCase() === archiveSha256 &&
    basename(fileName).toLowerCase() === basename(archivePath).toLowerCase()
  );
});
if (!hasMatchingChecksumEntry) {
  fail(
    `${basename(checksumPath)} does not contain an exact checksum entry for ${basename(
      archivePath
    )}`
  );
}

const isMac = target.startsWith("macos-");
const signingConfigured = Boolean(
  process.env.MACOS_SIGNING_CERTIFICATE_P12_BASE64 &&
    process.env.MACOS_SIGNING_IDENTITY
);
const notarizationConfigured = Boolean(
  signingConfigured &&
    process.env.APPLE_ID &&
    process.env.APPLE_TEAM_ID &&
    process.env.APPLE_APP_SPECIFIC_PASSWORD
);

const packageMetadata = JSON.parse(readFileSync("package.json", "utf8"));
const refName = process.env.GITHUB_REF_NAME || "";
const version = refName.startsWith("v") ? refName.slice(1) : packageMetadata.version;
const manifestPath = `${archivePath}.manifest.json`;

const manifest = {
  schema_version: 1,
  generated_by: "scripts/write-release-manifest.mjs",
  package: {
    name: packageMetadata.name,
    version,
    target,
    binary,
  },
  build: {
    git_ref: refName || null,
    git_commit: process.env.GITHUB_SHA || null,
    workflow: process.env.GITHUB_WORKFLOW || null,
    run_id: process.env.GITHUB_RUN_ID || null,
  },
  archive: {
    name: basename(archivePath),
    sha256: archiveSha256,
    checksum_file: basename(checksumPath),
  },
  signing: {
    status: isMac
      ? signingConfigured
        ? "signed"
        : "unsigned-developer-preview"
      : "not-applicable",
    notarization: isMac
      ? notarizationConfigured
        ? "submitted-by-release-workflow"
        : "not-configured"
      : "not-applicable",
  },
  supply_chain: {
    cargo_build_locked: true,
    npm_ci: true,
    optional_checks: ["npm audit --audit-level=high", "cargo audit", "cargo deny"],
  },
  privacy: {
    telemetry: "none",
    browser_assets: "bundled-local-assets",
    default_bind_address: "127.0.0.1",
  },
  required_paths: requiredPaths,
  contents: walkFiles(bundlePath),
};

writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(
  `wrote ${manifestPath} with ${manifest.contents.length} files and archive sha256 ${archiveSha256}`
);
