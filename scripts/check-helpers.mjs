// SPDX-License-Identifier: MIT OR Apache-2.0

export function createCheck(name) {
  const failures = [];
  return {
    expect(condition, message) {
      if (!condition) {
        failures.push(message);
      }
    },
    expectEqual(actual, expected, message) {
      if (actual !== expected) {
        failures.push(`${message}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
      }
    },
    fail(message) {
      failures.push(message);
    },
    hasFailures() {
      return failures.length > 0;
    },
    finish() {
      if (failures.length) {
        console.error(`${name} check failed:`);
        failures.forEach((failure) => console.error(`- ${failure}`));
        process.exit(1);
      }
      console.log(`${name} check passed`);
    },
  };
}

export function cssBlockFor(styles, selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = styles.match(new RegExp(`${escaped}\\s*\\{(?<body>[^}]*)\\}`, "m"));
  return match?.groups?.body ?? "";
}
