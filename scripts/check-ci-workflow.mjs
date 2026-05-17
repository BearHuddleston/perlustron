// SPDX-License-Identifier: MIT OR Apache-2.0

import { readFileSync } from "node:fs";

const workflow = readFileSync(".github/workflows/check.yml", "utf8");
const failures = [];

function expect(condition, message) {
  if (!condition) {
    failures.push(message);
  }
}

const runChecksIndex = workflow.indexOf("      - name: Run checks");
const browserSmokeIndex = workflow.indexOf("      - name: Run browser smoke checks");
const cliSmokeIndex = workflow.indexOf("      - name: Run CLI smoke checks");

expect(runChecksIndex !== -1, "CI workflow should keep the main npm run check step.");
expect(browserSmokeIndex !== -1, "CI workflow should include a Run browser smoke checks step.");
expect(cliSmokeIndex !== -1, "CI workflow should keep the CLI smoke step.");

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

if (failures.length) {
  console.error("CI workflow check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("CI workflow check passed");
