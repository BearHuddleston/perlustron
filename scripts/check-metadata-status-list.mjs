// SPDX-License-Identifier: MIT OR Apache-2.0

import { existsSync, readFileSync } from "node:fs";

import { createCheck, cssBlockFor } from "./check-helpers.mjs";

const appSource = readFileSync("src/frontend/app.ts", "utf8");
const styles = readFileSync("static/styles.css", "utf8");
const metadataModulePath = "src/frontend/chrome/metadata.ts";
const metadataSource = existsSync(metadataModulePath) ? readFileSync(metadataModulePath, "utf8") : "";
const metadataRowStyles = cssBlockFor(styles, ".status-bar-items .root-row.metadata-row");
const metadataIconStyles = cssBlockFor(styles, ".status-bar-items .root-icon");

const { expect, finish } = createCheck("Metadata status list");

expect(metadataSource.length > 0, "Metadata status list renderer should live in src/frontend/chrome/metadata.ts.");
expect(appSource.includes('from "./chrome/metadata"'), "app.ts should import the metadata status list renderer from chrome/metadata.");
expect(!appSource.includes("function renderMetadataRow"), "app.ts should not keep the metadata row DOM renderer inline.");
expect(!appSource.includes("function renderStatusIcon"), "app.ts should not keep the status icon SVG renderer inline.");
expect(!appSource.includes("const METADATA_ICON_PATHS"), "app.ts should not keep metadata SVG path data inline.");
expect(!appSource.includes("function shortCommit"), "app.ts should not keep metadata-only shortCommit inline.");
expect(metadataSource.includes("export function renderMetadataList"), "metadata module should export renderMetadataList.");
expect(metadataSource.includes("interface MetadataSummary"), "metadata module should describe the metadata shape it consumes.");
expect(metadataSource.includes('shortPath(metadata?.repositoryUrl || "")'), "Git metadata row should keep repository URL fallback behavior.");
expect(metadataSource.includes("commit.slice(0, 10)"), "Git metadata row should keep ten-character commit abbreviations.");
expect(metadataSource.includes(".slice(0, 6)"), "Tools metadata row should keep the six-tool display cap.");
expect(metadataSource.includes("document.createDocumentFragment()"), "Metadata rendering should continue replacing rows with a document fragment.");
expect(metadataSource.includes("metadataList.replaceChildren(fragment)"), "Metadata rendering should keep replaceChildren semantics.");
for (const label of ["Codex", "Source", "Git", "Policy", "Model", "Tools"]) {
  expect(metadataSource.includes(`label: "${label}"`), `Metadata list should keep the ${label} row.`);
}
for (const icon of ["codex", "source", "git", "policy", "model", "tools"]) {
  expect(metadataSource.includes(`root-icon ${icon}`) || metadataSource.includes("`root-icon ${icon}`"), `Metadata icon renderer should keep the ${icon} root-icon class.`);
}
expect(/createElementNS\(SVG_NAMESPACE,\s*"svg"\)/.test(metadataSource), "Metadata icons should still render as SVG elements.");
expect(/createElementNS\(SVG_NAMESPACE,\s*"path"\)/.test(metadataSource), "Metadata icons should still render path elements from the icon table.");
expect(metadataRowStyles.length > 0, "Metadata rows should keep dedicated status bar styling.");
expect(/grid-template-columns:\s*14px minmax\(0, auto\)/.test(metadataRowStyles), "Metadata rows should keep compact icon-plus-copy layout.");
expect(/align-items:\s*center/.test(metadataRowStyles), "Metadata rows should remain vertically centered.");
expect(metadataIconStyles.length > 0, "Metadata status icons should keep scoped status bar styles.");
expect(/color:\s*rgba\(203, 215, 230, 0\.82\)/.test(metadataIconStyles), "Metadata status icons should keep muted status-bar coloring.");

finish();
