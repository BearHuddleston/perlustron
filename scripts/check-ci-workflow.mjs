// SPDX-License-Identifier: MIT OR Apache-2.0

import { readFileSync } from "node:fs";

import { createCheck } from "./check-helpers.mjs";

const workflow = readFileSync(".github/workflows/check.yml", "utf8");
const { expect, finish } = createCheck("CI workflow");

const runChecksIndex = workflow.indexOf("      - name: Run checks");
const browserSmokeIndex = workflow.indexOf("      - name: Run browser smoke checks");
const cliSmokeIndex = workflow.indexOf("      - name: Run CLI smoke checks");
const benchmarkSmokeIndex = workflow.indexOf("      - name: Run benchmark smoke");
const largeBenchmarkIndex = workflow.indexOf("      - name: Run large-session benchmark guardrail");

expect(runChecksIndex !== -1, "CI workflow should keep the main npm run check step.");
expect(browserSmokeIndex !== -1, "CI workflow should include a Run browser smoke checks step.");
expect(cliSmokeIndex !== -1, "CI workflow should keep the CLI smoke step.");
expect(benchmarkSmokeIndex !== -1, "CI workflow should keep the 250-line benchmark smoke step.");
expect(largeBenchmarkIndex !== -1, "CI workflow should include the 10k large-session benchmark guardrail step.");

if (browserSmokeIndex !== -1) {
  expect(
    runChecksIndex === -1 || browserSmokeIndex > runChecksIndex,
    "Browser smoke should run after npm run check so cheaper checks fail first."
  );
  expect(
    cliSmokeIndex === -1 || browserSmokeIndex < cliSmokeIndex,
    "Browser smoke should run before the longer CLI smoke/benchmark checks."
  );

  const nextStepIndex = workflow.indexOf("\n      - name:", browserSmokeIndex + 1);
  const browserSmokeBlock = workflow.slice(
    browserSmokeIndex,
    nextStepIndex === -1 ? workflow.length : nextStepIndex
  );

  expect(
    /^        run: npm run smoke:browser$/m.test(browserSmokeBlock),
    "Browser smoke step should run npm run smoke:browser."
  );
  expect(
    /^        env:\n          CHROME_BIN: \/usr\/bin\/google-chrome$/m.test(browserSmokeBlock),
    "Browser smoke should use the GitHub-hosted runner system Chrome via CHROME_BIN."
  );
}

if (benchmarkSmokeIndex !== -1) {
  expect(
    cliSmokeIndex === -1 || benchmarkSmokeIndex > cliSmokeIndex,
    "Benchmark smoke should run after CLI smoke checks so functional failures appear first."
  );

  const nextStepIndex = workflow.indexOf("\n      - name:", benchmarkSmokeIndex + 1);
  const benchmarkSmokeBlock = workflow.slice(
    benchmarkSmokeIndex,
    nextStepIndex === -1 ? workflow.length : nextStepIndex
  );

  expect(
    /^        run: npm run bench:smoke$/m.test(benchmarkSmokeBlock),
    "Benchmark smoke step should run npm run bench:smoke."
  );
}

if (largeBenchmarkIndex !== -1) {
  expect(
    benchmarkSmokeIndex === -1 || largeBenchmarkIndex > benchmarkSmokeIndex,
    "Large-session benchmark guardrail should run after the smaller benchmark smoke."
  );

  const nextStepIndex = workflow.indexOf("\n      - name:", largeBenchmarkIndex + 1);
  const largeBenchmarkBlock = workflow.slice(
    largeBenchmarkIndex,
    nextStepIndex === -1 ? workflow.length : nextStepIndex
  );

  expect(
    /^        run: npm run bench:large$/m.test(largeBenchmarkBlock),
    "Large-session benchmark guardrail should run npm run bench:large."
  );
}

finish();
