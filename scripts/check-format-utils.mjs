// SPDX-License-Identifier: MIT OR Apache-2.0

import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "esbuild";

const appPath = "src/frontend/app.ts";
const formatPath = "src/frontend/utils/format.ts";
const app = readFileSync(appPath, "utf8");
const failures = [];

function expect(condition, message) {
  if (!condition) {
    failures.push(message);
  }
}

function expectEqual(actual, expected, message) {
  if (actual !== expected) {
    failures.push(`${message}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

const expectedExports = [
  "durationLabel",
  "escapeHtml",
  "formatBytes",
  "formatCountDelta",
  "formatDuration",
  "formatOptionalPercent",
  "formatSessionModified",
  "recordsLabel",
];

expect(existsSync(formatPath), "Format utilities should live in src/frontend/utils/format.ts.");
expect(app.includes('from "./utils/format"'), "app.ts should import shared formatting helpers from ./utils/format.");
for (const name of expectedExports) {
  expect(!new RegExp(`function\\s+${name}\\s*\\(`).test(app), `${name} should be extracted out of app.ts.`);
}

if (existsSync(formatPath)) {
  const formatSource = readFileSync(formatPath, "utf8");
  for (const name of expectedExports) {
    expect(formatSource.includes(`export function ${name}`), `${name} should be exported from format.ts.`);
  }
}

if (failures.length) {
  console.error("Format utilities check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

const tempDir = mkdtempSync(join(tmpdir(), "perlustron-format-utils-"));
try {
  const bundle = await build({
    entryPoints: [formatPath],
    bundle: true,
    format: "esm",
    platform: "node",
    target: "es2022",
    write: false,
    logLevel: "silent",
  });
  const bundlePath = join(tempDir, "format-utils.mjs");
  writeFileSync(bundlePath, bundle.outputFiles[0].text);
  const format = await import(`${pathToFileURL(bundlePath).href}?${Date.now()}`);

  for (const name of expectedExports) {
    expect(typeof format[name] === "function", `${name} should be importable as a function.`);
  }

  expectEqual(format.formatDuration(999), "999ms", "formatDuration should keep millisecond labels below one second");
  expectEqual(format.formatDuration(1000), "1.00s", "formatDuration should keep two-decimal second labels");
  expectEqual(format.durationLabel(999), "999 ms", "durationLabel should keep spaced millisecond labels below one second");
  expectEqual(format.durationLabel(1000), "1.0 s", "durationLabel should keep one-decimal spaced second labels");
  expectEqual(format.formatBytes(512), "512 B", "formatBytes should keep byte labels below one KiB");
  expectEqual(format.formatBytes(1024), "1 KB", "formatBytes should keep KiB labels rounded up");
  expectEqual(format.formatBytes(1537), "2 KB", "formatBytes should round KiB labels up");
  expectEqual(format.formatBytes(1024 * 1024), "1.0 MB", "formatBytes should keep one-decimal MiB labels");
  expectEqual(format.recordsLabel(12), "12 JSONL records", "recordsLabel should omit pending bytes when none are pending");
  expectEqual(
    format.recordsLabel(12, 1537),
    "12 JSONL records + 2 KB pending",
    "recordsLabel should include formatted pending bytes"
  );
  expectEqual(format.formatCountDelta({ left: 2, right: 5, delta: 3 }), "2 -> 5 (+3)", "formatCountDelta should prefix positive deltas");
  expectEqual(format.formatCountDelta({ left: 5, right: 3, delta: -2 }), "5 -> 3 (-2)", "formatCountDelta should preserve negative deltas");
  expectEqual(format.formatCountDelta({ left: 5, right: 5, delta: 0 }), "5 -> 5 (0)", "formatCountDelta should keep zero deltas unsigned");
  expectEqual(format.formatOptionalPercent(null), "n/a", "formatOptionalPercent should label null values as n/a");
  expectEqual(format.formatOptionalPercent(12.4), "12%", "formatOptionalPercent should round to zero decimals");
  expectEqual(format.escapeHtml('&<>"\''), "&amp;&lt;&gt;&quot;'", "escapeHtml should preserve the existing escaped characters");
  expectEqual(format.formatSessionModified("not-a-date"), "", "formatSessionModified should hide invalid dates");
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}

if (failures.length) {
  console.error("Format utilities check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Format utilities check passed");
