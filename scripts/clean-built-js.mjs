// SPDX-License-Identifier: MIT OR Apache-2.0

import { pathToFileURL } from "node:url";
import { readFile, writeFile } from "node:fs/promises";

const defaultPath = new URL("../static/app.js", import.meta.url);

export async function cleanBuiltJs(path = defaultPath) {
  const source = await readFile(path, "utf8");
  const cleaned = source.replace(/^ +\t/gm, "\t").replace(/[ \t]+$/gm, "");

  if (cleaned !== source) {
    await writeFile(path, cleaned);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await cleanBuiltJs();
}
