#!/usr/bin/env node
// SPDX-License-Identifier: MIT OR Apache-2.0

import { syncIndexAssetVersion } from "./frontend-asset-version.mjs";

const assetVersion = await syncIndexAssetVersion();
console.log(`Frontend asset version ${assetVersion}`);
