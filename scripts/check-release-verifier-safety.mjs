// SPDX-License-Identifier: MIT OR Apache-2.0

import { createHash } from "node:crypto";
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  statSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

import { createCheck } from "./check-helpers.mjs";

const { expect, finish } = createCheck("Release verifier safety");

function sha256File(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

function write(path, content) {
  writeFileSync(path, content);
}

const root = mkdtempSync(join(tmpdir(), "perlustron-release-verifier-safety-"));
const bundle = join(root, "bundle");
const assets = join(root, "assets");
const archive = join(assets, "perlustron-linux-x86_64.tar.gz");
const checksum = `${archive}.sha256`;
const manifest = `${archive}.manifest.json`;

const extraPositional = spawnSync(
  "node",
  [
    "scripts/verify-release-artifacts.mjs",
    "--tag",
    "v9.9.9",
    "--target",
    "linux-x86_64",
    "unexpected-extra",
    "--skip-run",
    "--port",
    "0",
  ],
  { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }
);
const extraPositionalOutput = `${extraPositional.stdout}\n${extraPositional.stderr}`;
expect(extraPositional.status !== 0, "Verifier should reject extra positional arguments.");
expect(
  /unexpected positional/i.test(extraPositionalOutput),
  `Verifier should report unexpected positional arguments before other validation errors, got: ${extraPositionalOutput}`
);

try {
  mkdirSync(join(bundle, "docs", "assets"), { recursive: true });
  mkdirSync(assets, { recursive: true });

  write(join(bundle, "perlustron"), "#!/bin/sh\necho perlustron 9.9.9\n");
  write(join(bundle, "SECURITY.md"), "security notes\n");
  symlinkSync("SECURITY.md", join(bundle, "README.md"));
  write(join(bundle, "LICENSE-MIT"), "MIT\n");
  write(join(bundle, "LICENSE-APACHE"), "Apache\n");
  write(join(bundle, "docs", "release.md"), "release docs\n");
  write(join(bundle, "docs", "privacy-and-redaction.md"), "privacy docs\n");
  write(join(bundle, "docs", "assets", "perlustron-demo.png"), "png bytes\n");

  const tar = spawnSync("tar", ["-czf", archive, "-C", bundle, "."], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
  expect(tar.status === 0, `test setup should create tar archive: ${tar.stderr}`);

  const archiveSha = sha256File(archive);
  write(checksum, `${archiveSha}  perlustron-linux-x86_64.tar.gz\n`);

  const requiredPaths = [
    "perlustron",
    "README.md",
    "SECURITY.md",
    "LICENSE-MIT",
    "LICENSE-APACHE",
    "docs/release.md",
    "docs/privacy-and-redaction.md",
    "docs/assets/perlustron-demo.png",
  ];
  const contents = requiredPaths.map((path) => {
    const fullPath = join(bundle, ...path.split("/"));
    const stats = statSync(fullPath);
    return { path, bytes: stats.size, sha256: sha256File(fullPath) };
  });
  write(
    manifest,
    `${JSON.stringify(
      {
        schema_version: 1,
        generated_by: "scripts/write-release-manifest.mjs",
        package: {
          name: "perlustron",
          version: "9.9.9",
          target: "linux-x86_64",
          binary: "perlustron",
        },
        build: {},
        archive: {
          name: "perlustron-linux-x86_64.tar.gz",
          sha256: archiveSha,
          checksum_file: "perlustron-linux-x86_64.tar.gz.sha256",
        },
        signing: { status: "not-applicable", notarization: "not-applicable" },
        privacy: {
          telemetry: "none",
          browser_assets: "bundled-local-assets",
          default_bind_address: "127.0.0.1",
        },
        required_paths: requiredPaths,
        contents,
      },
      null,
      2
    )}\n`
  );

  const verifier = spawnSync(
    "node",
    [
      "scripts/verify-release-artifacts.mjs",
      "v9.9.9",
      "linux-x86_64",
      "--asset-dir",
      assets,
      "--skip-run",
    ],
    { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }
  );
  const output = `${verifier.stdout}\n${verifier.stderr}`;
  expect(
    verifier.status !== 0,
    "Verifier should reject archives whose required files are symlinks before trusting manifest hashes."
  );
  expect(
    /symlink|link|unsupported/i.test(output),
    `Verifier failure should explain unsupported links, got: ${output}`
  );

  const staleBundle = join(root, "stale-bundle");
  const staleAssets = join(root, "stale-assets");
  const staleArchive = join(staleAssets, "perlustron-linux-x86_64.tar.gz");
  const staleChecksum = `${staleArchive}.sha256`;
  const staleManifest = `${staleArchive}.manifest.json`;
  const staleReadme = "stale readme that must not satisfy a fresh extraction\n";
  mkdirSync(join(staleBundle, "docs", "assets"), { recursive: true });
  mkdirSync(join(staleAssets, "extracted"), { recursive: true });
  write(join(staleAssets, "extracted", "README.md"), staleReadme);
  write(join(staleBundle, "perlustron"), "#!/bin/sh\necho perlustron 9.9.9\n");
  write(join(staleBundle, "SECURITY.md"), "security notes\n");
  write(join(staleBundle, "LICENSE-MIT"), "MIT\n");
  write(join(staleBundle, "LICENSE-APACHE"), "Apache\n");
  write(join(staleBundle, "docs", "release.md"), "release docs\n");
  write(join(staleBundle, "docs", "privacy-and-redaction.md"), "privacy docs\n");
  write(join(staleBundle, "docs", "assets", "perlustron-demo.png"), "png bytes\n");
  const staleTar = spawnSync("tar", ["-czf", staleArchive, "-C", staleBundle, "."], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
  expect(staleTar.status === 0, `test setup should create stale tar archive: ${staleTar.stderr}`);
  const staleArchiveSha = sha256File(staleArchive);
  write(staleChecksum, `${staleArchiveSha}  perlustron-linux-x86_64.tar.gz\n`);
  const staleContents = requiredPaths.map((path) => {
    if (path === "README.md") {
      return {
        path,
        bytes: Buffer.byteLength(staleReadme),
        sha256: createHash("sha256").update(staleReadme).digest("hex"),
      };
    }
    const fullPath = join(staleBundle, ...path.split("/"));
    const stats = statSync(fullPath);
    return { path, bytes: stats.size, sha256: sha256File(fullPath) };
  });
  write(
    staleManifest,
    `${JSON.stringify(
      {
        schema_version: 1,
        generated_by: "scripts/write-release-manifest.mjs",
        package: {
          name: "perlustron",
          version: "9.9.9",
          target: "linux-x86_64",
          binary: "perlustron",
        },
        build: {},
        archive: {
          name: "perlustron-linux-x86_64.tar.gz",
          sha256: staleArchiveSha,
          checksum_file: "perlustron-linux-x86_64.tar.gz.sha256",
        },
        signing: { status: "not-applicable", notarization: "not-applicable" },
        privacy: {
          telemetry: "none",
          browser_assets: "bundled-local-assets",
          default_bind_address: "127.0.0.1",
        },
        required_paths: requiredPaths,
        contents: staleContents,
      },
      null,
      2
    )}\n`
  );
  const staleVerifier = spawnSync(
    "node",
    [
      "scripts/verify-release-artifacts.mjs",
      "v9.9.9",
      "linux-x86_64",
      "--asset-dir",
      staleAssets,
      "--skip-run",
    ],
    { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }
  );
  const staleOutput = `${staleVerifier.stdout}\n${staleVerifier.stderr}`;
  expect(
    staleVerifier.status !== 0,
    "Verifier should clear stale extraction directories before checking required files."
  );
  expect(
    /missing README\.md/i.test(staleOutput),
    `Verifier failure should report the freshly extracted bundle is missing README.md, got: ${staleOutput}`
  );
} finally {
  rmSync(root, { recursive: true, force: true });
}

finish();
