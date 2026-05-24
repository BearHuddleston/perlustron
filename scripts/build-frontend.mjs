#!/usr/bin/env node
// SPDX-License-Identifier: MIT OR Apache-2.0

import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { build, context } from "esbuild";

import { cleanBuiltJs } from "./clean-built-js.mjs";
import { syncIndexAssetVersion } from "./frontend-asset-version.mjs";
import { syncFrontendPaletteAssets } from "./sync-frontend-palette.mjs";

const args = new Set(process.argv.slice(2));
const watch = args.has("--watch");
const minify = args.has("--minify");
const paletteJsonPath = fileURLToPath(new URL("../src/frontend/palette.json", import.meta.url));
const paletteModulePath = fileURLToPath(new URL("../src/frontend/palette.ts", import.meta.url));

async function postprocessFrontendBuild() {
  await cleanBuiltJs();
  const assetVersion = await syncIndexAssetVersion();
  console.log(`Frontend asset version ${assetVersion}`);
}

const frontendPalettePlugin = {
  name: "frontend-palette",
  setup(buildContext) {
    buildContext.onStart(async () => {
      await syncFrontendPaletteAssets();
    });

    buildContext.onLoad({ filter: /src[\\/]frontend[\\/]palette\.ts$/ }, async () => ({
      contents: await readFile(paletteModulePath, "utf8"),
      loader: "ts",
      watchFiles: [paletteJsonPath],
    }));

    buildContext.onEnd(async (result) => {
      if (!result.errors.length) {
        await postprocessFrontendBuild();
      }
    });
  },
};

const buildOptions = {
  entryPoints: ["src/frontend/app.ts"],
  bundle: true,
  format: "esm",
  target: "es2022",
  minify,
  outfile: "static/app.js",
  logLevel: "info",
  plugins: [frontendPalettePlugin],
};

if (watch) {
  const buildContext = await context(buildOptions);
  await buildContext.watch();
  console.log("Watching frontend assets");
} else {
  await build(buildOptions);
}
