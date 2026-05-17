// SPDX-License-Identifier: MIT OR Apache-2.0

import fs from "node:fs";
import { assertIndexAssetVersion, computeFrontendAssetVersion } from "./frontend-asset-version.mjs";

const checks = [
  ["static/index.html", /\b(?:src|href)=["']https?:\/\//i],
  ["static/styles.css", /url\(["']?https?:\/\//i],
  ["src/frontend/app.ts", /\b(?:fetch|import)\(\s*["']https?:\/\//i],
  ["src/frontend/app.ts", /\bnew\s+(?:EventSource|WebSocket|Worker)\(\s*["'](?:https?|wss?):\/\//i],
  ["static/app.js", /\b(?:fetch|import)\(\s*["']https?:\/\//i],
  ["static/app.js", /\bnew\s+(?:EventSource|WebSocket|Worker)\(\s*["'](?:https?|wss?):\/\//i],
];

const errors = [];
const remoteAssetFailures = [];
for (const [path, pattern] of checks) {
  const text = fs.readFileSync(path, "utf8");
  if (pattern.test(text)) {
    remoteAssetFailures.push(path);
  }
}

if (remoteAssetFailures.length) {
  errors.push(`Remote asset references found in: ${remoteAssetFailures.join(", ")}`);
}

try {
  const indexHtml = fs.readFileSync("static/index.html", "utf8");
  assertIndexAssetVersion(indexHtml, await computeFrontendAssetVersion());
} catch (error) {
  errors.push(error.message);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Offline asset check passed");
