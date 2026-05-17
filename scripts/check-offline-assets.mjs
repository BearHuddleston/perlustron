// SPDX-License-Identifier: MIT OR Apache-2.0

import fs from "node:fs";

const checks = [
  ["static/index.html", /\b(?:src|href)=["']https?:\/\//i],
  ["static/styles.css", /url\(["']?https?:\/\//i],
  ["src/frontend/app.ts", /\b(?:fetch|import)\(\s*["']https?:\/\//i],
  ["src/frontend/app.ts", /\bnew\s+(?:EventSource|WebSocket|Worker)\(\s*["'](?:https?|wss?):\/\//i],
  ["static/app.js", /\b(?:fetch|import)\(\s*["']https?:\/\//i],
  ["static/app.js", /\bnew\s+(?:EventSource|WebSocket|Worker)\(\s*["'](?:https?|wss?):\/\//i],
];

const failures = [];
for (const [path, pattern] of checks) {
  const text = fs.readFileSync(path, "utf8");
  if (pattern.test(text)) {
    failures.push(path);
  }
}

if (failures.length) {
  console.error(`Remote asset references found in: ${failures.join(", ")}`);
  process.exit(1);
}

console.log("Offline asset check passed");
