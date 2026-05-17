// SPDX-License-Identifier: MIT OR Apache-2.0

import { readFile, writeFile } from "node:fs/promises";

const path = new URL("../static/app.js", import.meta.url);
const source = await readFile(path, "utf8");
const cleaned = source.replace(/^ +\t/gm, "\t").replace(/[ \t]+$/gm, "");

if (cleaned !== source) {
  await writeFile(path, cleaned);
}
