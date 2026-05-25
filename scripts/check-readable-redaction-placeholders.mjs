#!/usr/bin/env node
// SPDX-License-Identifier: MIT OR Apache-2.0

import { existsSync, readFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import * as esbuild from "esbuild";
import { createCheck, cssBlockFor } from "./check-helpers.mjs";

const { expect, expectEqual, fail, finish } = createCheck("Readable redaction placeholders");

const appSource = readFileSync("src/frontend/app.ts", "utf8");
const styles = readFileSync("static/styles.css", "utf8");
const helperPath = "src/frontend/redaction_display.ts";

expect(existsSync(helperPath), "readable redaction display helper module exists");
expect(appSource.includes('from "./redaction_display"'), "app imports the readable redaction display helpers");
expect(appSource.includes("setReadableRedactionText"), "app uses a central DOM renderer for readable redactions");
expect(appSource.includes("renderPlainEventContextBody(payload)"), "event context still routes through the plain payload renderer");
expect(appSource.includes("modeParagraph") && appSource.includes("setReadableRedactionText(paragraph"), "mode paragraphs render readable redaction placeholders");
expect(appSource.includes("modeCard") && appSource.includes("setReadableRedactionText(item"), "mode-card evidence lists render readable redaction placeholders");
expect(appSource.includes("summaryFact") && appSource.includes("setReadableRedactionText(detail"), "summary facts render readable redaction placeholders");

const chipBlock = cssBlockFor(styles, ".redaction-chip");
const summaryBlock = cssBlockFor(styles, ".redaction-group-summary");
expect(chipBlock.includes("border"), "redaction chips have an explicit bordered style");
expect(chipBlock.includes("background"), "redaction chips have a visible privacy-mode background");
expect(summaryBlock.includes("display"), "grouped redaction summaries have layout styling");
expect(summaryBlock.includes("Redactions" ) || appSource.includes("Redactions:"), "UI labels grouped redaction summaries explicitly");

if (existsSync(helperPath)) {
  try {
    const outfile = path.join(os.tmpdir(), `perlustron-redaction-display-${process.pid}.mjs`);
    await esbuild.build({
      entryPoints: [helperPath],
      outfile,
      bundle: true,
      platform: "browser",
      format: "esm",
      logLevel: "silent",
    });
    const module = await import(pathToFileURL(outfile));
    const { readableRedactionText, readableRedactionSummary, redactionDisplayGroups } = module;

    const fixture = [
      "user prompt [REDACTED:content length:15]",
      "path [REDACTED:path length:32]",
      "repeat [REDACTED:path length:32]",
      "image [REDACTED:image length:2048]",
      "api token=[REDACTED]",
      "service_api_key=[REDACTED]",
    ].join(" | ");
    const readable = readableRedactionText(fixture);
    const summary = readableRedactionSummary(fixture) || "";
    const groups = redactionDisplayGroups(fixture);

    expect(readable.includes("Content redacted · 15 chars"), "content placeholders render as readable text with length");
    expect(readable.includes("Path hidden · 32 chars"), "path placeholders render as readable text with length");
    expect(readable.includes("Image disabled"), "image placeholders render as readable text");
    expect(readable.includes("token hidden"), "redacted credential assignments render as readable hidden-token text");
    expect(readable.includes("API key hidden"), "redacted API key assignments render generically without variable names");
    expect(!readable.includes("service_api_key"), "readable credential labels do not expose raw variable names");
    expect(!readable.includes("[REDACTED:content"), "readable text does not expose raw content placeholder syntax");
    expect(!readable.includes("[REDACTED:path"), "readable text does not expose raw path placeholder syntax");
    expect(summary.includes("2 paths hidden · 32 chars"), "summary groups repeated path placeholders");
    expect(summary.includes("1 content redacted · 15 chars"), "summary keeps content redaction count readable");
    expect(!summary.includes("[REDACTED"), "group summary does not expose raw placeholder syntax");
    expect(
      groups.some((group) => group.category === "path" && group.count === 2 && group.length === 32),
      "path placeholders are grouped by kind and length"
    );
    expect(
      groups.some((group) => group.category === "image" && group.count === 1),
      "image placeholders are tracked as a group"
    );
    expectEqual(readableRedactionText("no placeholders here"), "no placeholders here", "plain strings are unchanged");
  } catch (error) {
    fail(`redaction display helper bundles and imports: ${error?.message || error}`);
  }
}

finish();
