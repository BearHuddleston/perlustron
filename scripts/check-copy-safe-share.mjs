#!/usr/bin/env node
// SPDX-License-Identifier: MIT OR Apache-2.0

import { build } from "esbuild";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { createCheck } from "./check-helpers.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const { expect, fail, finish } = createCheck("Copy-safe share");

const app = readFileSync(path.join(repoRoot, "src/frontend/app.ts"), "utf8");
expect(app.includes('modeButton("Copy Share Summary"'), "Summary should expose a Copy Share Summary action.");
expect(app.includes('modeButton("Copy Safe Reference"') || app.includes('modeButton("Copy Safe Ref"'), "Non-Map event surfaces should expose a Copy Safe Reference action.");
expect(app.includes("copySafeReferenceText"), "App should use the shared copy-safe reference formatter.");
expect(app.includes("copySafeShareSummaryText"), "App should use the shared copy-safe share summary formatter.");
expect(!/copySafeReferenceText\([\s\S]{0,240}(?:row\.title|row\.detail|prompt\.text|outputPreview|argumentPreview)/.test(app), "Copy-safe references must not be built from raw row/prompt/tool text fields.");

const tempDir = mkdtempSync(path.join(tmpdir(), "perlustron-copy-safe-check-"));
try {
  const entryPath = path.join(tempDir, "entry.mjs");
  const outPath = path.join(tempDir, "out.mjs");
  const modulePath = path.join(repoRoot, "src/frontend/share_safe.ts");
  writeFileSync(
    entryPath,
    `
      import {
        copySafeReferenceText,
        copySafeShareSummaryText,
        redactionSafeClipboardText,
        safeReferenceSummary,
      } from ${JSON.stringify(modulePath)};

      const failures = [];
      const expect = (condition, message) => { if (!condition) failures.push(message); };
      const forbidden = [
        "PL_FIXTURE_QUERY_SECRET_0123456789",
        "PL_FIXTURE_TOOL_PASSWORD_0123456789",
        "PL_FIXTURE_COOKIE_SECRET_0123456789",
        "QWxwaGEtU2VudGluZWxfMDEyMzQ1Njc4OWFiY2RlZg==",
        "C:\\\\Users\\\\perlustron-fixture",
        "C:/Users/perlustron-fixture",
        "/home/perlustron-fixture",
        "data:image/png;base64",
        "RAW_PRIVATE_PROMPT_DO_NOT_COPY",
        "token=PL_FIXTURE",
        "access_token=PL_FIXTURE",
      ];

      const hostileText = [
        "RAW_PRIVATE_PROMPT_DO_NOT_COPY",
        "https://example.invalid/private?token=PL_FIXTURE_QUERY_SECRET_0123456789&safe=1",
        "access_token=PL_FIXTURE_QUERY_SECRET_0123456789",
        "Authorization: Bearer PL_FIXTURE_COOKIE_SECRET_0123456789",
        "password=PL_FIXTURE_TOOL_PASSWORD_0123456789",
        "C:\\\\Users\\\\perlustron-fixture\\\\secret-project\\\\trace.jsonl",
        "/home/perlustron-fixture/secret-project/trace.jsonl",
        "data:image/png;base64,iVBORw0KGgo=",
        "credential: QWxwaGEtU2VudGluZWxfMDEyMzQ1Njc4OWFiY2RlZg==",
      ].join(" | ");

      const structuralSummary = safeReferenceSummary({
        role: "tool",
        eventType: "call",
        toolName: "shell_command",
        filePath: "C:\\\\Users\\\\perlustron-fixture\\\\secret-project\\\\trace.jsonl",
        status: "completed",
        rawSummary: hostileText,
      });
      const reference = copySafeReferenceText({
        source: "Codex",
        lineNumber: 7,
        eventIndex: 6,
        kind: "function_call",
        summary: hostileText,
        parserVersion: "0.1.0-fixture",
        schemaVersion: "perlustron.trace.v1",
      });
      const shareSummary = copySafeShareSummaryText({
        source: "Codex",
        sessionName: "Fixture C:\\\\Users\\\\perlustron-fixture\\\\secret-project token=PL_FIXTURE_QUERY_SECRET_0123456789",
        totalTurns: 3,
        callCount: 2,
        fileChangeCount: 1,
        latestEventIndex: 6,
        parserVersion: "0.1.0-fixture",
        schemaVersion: "perlustron.trace.v1",
        cliContext: "codex-test 0.0.0-fixture",
        rawLogsSafeToShare: false,
        rawLogCaution: hostileText,
        sanitizedGraphNote: hostileText,
        redactedFieldCount: 9,
        imageCount: 1,
        apiTokenRequired: true,
      });
      const scrubbed = redactionSafeClipboardText(hostileText);
      const fullClipboardText = redactionSafeClipboardText("abcdefghijklmnop");
      const combined = [structuralSummary, reference, shareSummary, scrubbed].join("\\n---\\n");

      for (const sentinel of forbidden) {
        expect(!combined.includes(sentinel), \`copy-safe text leaked sentinel \${sentinel}\`);
      }
      expect(reference.includes("Perlustron copy-safe reference"), "Reference should be clearly labeled copy-safe.");
      expect(reference.includes("source: Codex"), "Reference should include source.");
      expect(reference.includes("line: 7"), "Reference should include line number.");
      expect(reference.includes("event_index: 6"), "Reference should include event index.");
      expect(reference.includes("kind: function_call"), "Reference should include event kind.");
      expect(reference.includes("perlustron: parser 0.1.0-fixture / schema perlustron.trace.v1"), "Reference should include Perlustron parser/schema context.");
      expect(/token=\\[REDACTED\\]/.test(combined), "Token query parameters should be visibly redacted, not copied raw.");
      expect(structuralSummary.includes("shell_command"), "Structural summary should keep useful tool identity.");
      expect(shareSummary.includes("raw_logs: requires human review before sharing"), "Share summary should say raw logs need review.");
      expect(shareSummary.includes("safe_surfaces:"), "Share summary should distinguish safer sanitized/copy-safe surfaces.");
      expect(shareSummary.includes("human judgment"), "Share summary should preserve human-review caveat.");
      expect(fullClipboardText === "abcdefghijklmnop", "Clipboard text should preserve full content.");

      export { failures };
    `,
    "utf8"
  );
  await build({ entryPoints: [entryPath], bundle: true, platform: "node", format: "esm", outfile: outPath, logLevel: "silent" });
  const result = await import(pathToFileURL(outPath).href);
  result.failures.forEach((failure) => fail(failure));
} catch (error) {
  fail(error.stack || error.message || String(error));
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}

finish();
