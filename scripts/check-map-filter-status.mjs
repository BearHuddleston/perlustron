#!/usr/bin/env node
// SPDX-License-Identifier: MIT OR Apache-2.0

import { readFileSync } from "node:fs";

import { createCheck, cssBlockFor } from "./check-helpers.mjs";

const html = readFileSync("static/index.html", "utf8");
const styles = readFileSync("static/styles.css", "utf8");
const app = readFileSync("src/frontend/app.ts", "utf8");
const { expect, finish } = createCheck("Map filter status");

const mapFilterStatusBlock = cssBlockFor(styles, ".map-filter-status");
const mapFilterActiveBlock = cssBlockFor(styles, ".map-live-hud.filter-active .map-metrics button:not(.active)");
const mapFilterEmptyBlock = cssBlockFor(styles, ".map-metrics button.map-filter-empty");
const syncMapFilterControlsBlock = app.match(/function syncMapFilterControls[\s\S]*?\n}\n\nfunction syncMapFilterButtons/)?.[0] ?? "";
const syncMapFilterButtonsBlock = app.match(/function syncMapFilterButtons[\s\S]*?\n}\n\nfunction mapFilterButtonCount/)?.[0] ?? "";
const selectMapFilterBlock = app.match(/function selectMapFilter[\s\S]*?\n}\n\nfunction mapFilterMatches/)?.[0] ?? "";
const updateGraphChromeBlock = app.match(/function updateGraphChrome[\s\S]*?\n}\n\nfunction collectMapMetricCounts/)?.[0] ?? "";

expect(html.includes('id="map-filter-status"'), "Map HUD should include a visible status line for filter state and density.");
expect(/id="map-filter-status"[^>]+role="status"[^>]+aria-live="polite"/.test(html), "Map filter status should be announced politely to assistive tech.");
expect(html.includes('aria-describedby="map-filter-status"'), "Map metric/filter controls should reference the visible filter status.");

expect(app.includes('queryRequired<HTMLElement>("#map-filter-status")'), "Frontend should query the map filter status element.");
expect(app.includes("function syncMapFilterControls"), "Frontend should centralize map filter status/control syncing.");
expect(updateGraphChromeBlock.includes("syncMapFilterControls(mapMetrics)"), "Graph chrome updates should refresh filter button counts, empty states, and status copy together.");
expect(selectMapFilterBlock.includes("mapFilterCount(filter) <= 0"), "Selecting a zero-count map filter should be ignored instead of blanking the map.");
expect(syncMapFilterControlsBlock.includes("mapFilterStatus.textContent"), "Filter control sync should update visible status copy.");
expect(syncMapFilterControlsBlock.includes("sceneFrame.classList.toggle(\"map-filter-active\""), "Active filters should set a stable scene-frame hook.");
expect(syncMapFilterControlsBlock.includes("mapLiveHud.classList.toggle(\"filter-active\""), "Active filters should set a stable HUD hook.");
expect(syncMapFilterButtonsBlock.includes('button.setAttribute("aria-pressed"'), "Filter chips should expose pressed state accessibly.");
expect(syncMapFilterButtonsBlock.includes("map-filter-empty"), "Zero-count filters should receive a stable empty-state hook.");
expect(syncMapFilterButtonsBlock.includes("button.disabled = count <= 0"), "Zero-count filters should be disabled to prevent empty-map traps.");
expect(syncMapFilterButtonsBlock.includes("button.title ="), "Filter chips should explain click-to-filter/clear behavior in their titles.");

expect(mapFilterStatusBlock.length > 0 && /grid-column:\s*1\s*\/\s*-1/.test(mapFilterStatusBlock), "Filter status should sit under the HUD controls without colliding with the legend.");
expect(mapFilterActiveBlock.length > 0 && /opacity:\s*0\.[0-9]+/.test(mapFilterActiveBlock), "Inactive chips should be visually de-emphasized while a filter is active.");
expect(mapFilterEmptyBlock.length > 0 && /cursor:\s*not-allowed/.test(mapFilterEmptyBlock), "Empty chips should look unavailable, not like useful filters.");

finish();
