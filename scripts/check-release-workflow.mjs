// SPDX-License-Identifier: MIT OR Apache-2.0

import { readFileSync } from "node:fs";

import { createCheck } from "./check-helpers.mjs";

const releaseWorkflow = readFileSync(".github/workflows/release.yml", "utf8");
const releaseDocs = readFileSync("docs/release.md", "utf8");
const readme = readFileSync("README.md", "utf8");
const { expect, finish } = createCheck("Release workflow and docs");

expect(
  releaseWorkflow.includes("Write release artifact manifest"),
  "Release workflow should write an artifact manifest for every platform archive."
);
expect(
  releaseWorkflow.includes("scripts/write-release-manifest.mjs"),
  "Release workflow should use the checked-in manifest writer."
);
expect(
  releaseWorkflow.includes("dist/${{ matrix.archive }}.manifest.json"),
  "Release workflow should upload each archive manifest alongside the archive and checksum."
);
expect(
  releaseWorkflow.includes("docs/release.md") &&
    releaseWorkflow.includes("docs/privacy-and-redaction.md") &&
    releaseWorkflow.includes("docs/assets/perlustron-demo.png"),
  "Release archive validation should assert key docs and assets are packaged."
);
expect(
  /manifest\.json/i.test(releaseWorkflow),
  "Generated GitHub Release body should mention manifest JSON files."
);
expect(
  /unsigned developer-preview/i.test(releaseWorkflow) && /signed and notarized/i.test(releaseWorkflow),
  "Generated GitHub Release body should distinguish unsigned developer-preview artifacts from signed and notarized macOS artifacts."
);

expect(
  /Artifact Manifest/i.test(releaseDocs),
  "Release docs should describe the artifact manifest."
);
expect(
  /Homebrew Distribution Path/i.test(releaseDocs),
  "Release docs should document the Homebrew distribution path."
);
expect(
  /Supply-chain Checks/i.test(releaseDocs),
  "Release docs should document optional supply-chain checks."
);
expect(
  /unsigned developer-preview/i.test(releaseDocs) && /signed\/notarized/i.test(releaseDocs),
  "Release docs should keep developer-preview versus signed/notarized wording explicit."
);
expect(
  /\.manifest\.json/i.test(readme),
  "README install docs should mention release artifact manifests."
);
expect(
  /Homebrew/i.test(readme),
  "README should continue to surface Homebrew as a future install channel."
);

finish();
