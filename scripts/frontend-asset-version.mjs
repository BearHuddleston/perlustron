// SPDX-License-Identifier: MIT OR Apache-2.0

import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";

const HASH_HEX_DIGITS = 12;
const indexPath = new URL("../static/index.html", import.meta.url);
const assetInputs = [
  ["app.js", new URL("../static/app.js", import.meta.url)],
  ["styles.css", new URL("../static/styles.css", import.meta.url)],
];

const indexAssetPatterns = {
  app: /\/app-v(\d+)\.js/,
  styles: /\/styles\.css\?v=(\d+)/,
};

export async function computeFrontendAssetVersion() {
  const hash = createHash("sha256");
  const inputs = await Promise.all(
    assetInputs.map(async ([name, path]) => [name, await readFile(path)])
  );

  for (const [name, content] of inputs) {
    hash.update(name);
    hash.update("\0");
    hash.update(content);
    hash.update("\0");
  }

  return BigInt(`0x${hash.digest("hex").slice(0, HASH_HEX_DIGITS)}`).toString();
}

export function readIndexAssetVersions(indexHtml) {
  const app = indexHtml.match(indexAssetPatterns.app)?.[1];
  const styles = indexHtml.match(indexAssetPatterns.styles)?.[1];

  if (!app || !styles) {
    throw new Error("static/index.html must reference /app-v<digits>.js and /styles.css?v=<digits>");
  }

  return { app, styles };
}

export function assertIndexAssetVersion(indexHtml, expectedVersion) {
  const versions = readIndexAssetVersions(indexHtml);

  if (versions.app !== versions.styles) {
    throw new Error(
      `static/index.html asset versions differ: app=${versions.app}, styles=${versions.styles}`
    );
  }

  if (expectedVersion && versions.app !== expectedVersion) {
    throw new Error(
      `static/index.html asset version is stale: expected ${expectedVersion}, got ${versions.app}. Run npm run build:frontend.`
    );
  }

  return versions.app;
}

export function updateIndexAssetVersion(indexHtml, assetVersion) {
  readIndexAssetVersions(indexHtml);

  return indexHtml
    .replace(indexAssetPatterns.app, `/app-v${assetVersion}.js`)
    .replace(indexAssetPatterns.styles, `/styles.css?v=${assetVersion}`);
}

export async function syncIndexAssetVersion() {
  const [indexHtml, assetVersion] = await Promise.all([
    readFile(indexPath, "utf8"),
    computeFrontendAssetVersion(),
  ]);
  const updated = updateIndexAssetVersion(indexHtml, assetVersion);

  if (updated !== indexHtml) {
    await writeFile(indexPath, updated);
  }

  return assetVersion;
}
