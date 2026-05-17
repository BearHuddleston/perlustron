// SPDX-License-Identifier: MIT OR Apache-2.0

import { readFileSync } from "node:fs";

const html = readFileSync("static/index.html", "utf8");
const app = readFileSync("src/frontend/app.ts", "utf8");
const styles = readFileSync("static/styles.css", "utf8");

const failures = [];

function expect(condition, message) {
  if (!condition) {
    failures.push(message);
  }
}

function blockFor(selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = styles.match(new RegExp(`${escaped}\\s*\\{(?<body>[^}]*)\\}`, "m"));
  return match?.groups?.body ?? "";
}

const modeNavIndex = html.indexOf('id="mode-nav"');
const summaryButtonIndex = html.indexOf('data-app-mode="summary"');
const mapButtonIndex = html.indexOf('data-app-mode="map"');
const timelineButtonIndex = html.indexOf('data-app-mode="timeline"');
const transcriptButtonIndex = html.indexOf('data-app-mode="transcript"');

expect(modeNavIndex >= 0, "Mode navigation should exist in static/index.html.");
expect(summaryButtonIndex > modeNavIndex, "Summary should be available as a primary mode button.");
expect(mapButtonIndex > summaryButtonIndex, "Summary should lead the primary mode buttons without removing Map.");
expect(timelineButtonIndex > mapButtonIndex, "Timeline button should remain after Map.");
expect(transcriptButtonIndex > timelineButtonIndex, "Transcript button should remain after Timeline.");
expect(/type AppMode = [^;]*"summary"/m.test(app), "AppMode should include summary.");
expect(
  /DEFAULT_APP_MODES\s*=\s*\["summary",\s*"map",\s*"timeline",\s*"transcript"\]/m.test(app),
  "Summary should be part of the default mode cluster before Map/Timeline/Transcript."
);
expect(app.includes('let activeAppMode: AppMode = normalizeAppMode(new URLSearchParams(window.location.search).get("mode"));'), "Initial mode should be parsed from ?mode= deep links.");
expect(app.includes("function normalizeAppMode"), "Deep-link parsing should normalize app modes through a dedicated helper.");
expect(/normalizeAppMode[\s\S]*:\s*"summary";/.test(app), "Summary should be the default landing mode when no ?mode= is provided.");
expect(/<button class="active" type="button" data-app-mode="summary">Summary<\/button>/.test(html), "Static shell should mark Summary as the initial active primary mode.");
expect(app.includes('url.searchParams.set("mode", activeAppMode)'), "Visible URL should keep the current mode deep link.");
expect(app.includes('url.searchParams.delete("token")'), "Visible URL synchronization should strip API tokens.");
expect(!/searchParams\.set\("token",\s*localSessionToken\)/.test(app.slice(app.indexOf("function syncSessionUrl"), app.indexOf("function resetSessionViewState"))), "Visible URL synchronization must not re-add the API token.");
expect(app.includes('case "summary":\n      renderSummaryModePanel();'), "Summary mode should render through renderSummaryModePanel.");
expect(app.includes("function renderSummaryModePanel"), "Summary mode should have a dedicated renderer.");
expect(app.includes("graph.privacySummary"), "Summary renderer should display backend privacySummary facts.");
expect(app.includes("graph.shareabilitySummary"), "Summary renderer should display backend shareabilitySummary facts.");
expect(app.includes("rawLogsSafeToShare"), "Summary renderer should expose raw log shareability status.");
expect(app.includes("apiTokenRequired"), "Summary renderer should expose only token requirement status, not token contents.");
expect(app.includes('triage.className = "summary-triage"'), "Summary renderer should include the wave-2 triage card row.");
expect(app.includes('modeButton("Open Timeline"') && app.includes('modeButton("Open Export"'), "Summary triage cards should route to primary inspection and export flows.");
expect(!app.includes("localSessionToken") || !/renderSummaryModePanel[\s\S]*localSessionToken/.test(app), "Summary renderer must not expose the local API token.");
expect(app.includes('if (nextMode === "summary")'), "Selecting Summary should have an explicit chrome branch.");
expect(app.includes('return activeAppMode === "map"'), "Event Context should remain Map-only after Summary is added.");

const summaryGrid = blockFor(".summary-shell-grid");
expect(summaryGrid.length > 0, "Summary shell should have CSS grid styling.");
expect(/grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(/.test(summaryGrid), "Summary shell grid should be responsive.");
expect(styles.includes(".summary-fact"), "Summary facts should have dedicated card styling.");
expect(styles.includes(".summary-triage") && /\.summary-triage\s*\{[^}]*grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(/m.test(styles), "Summary triage cards should wrap responsively.");
expect(styles.includes("/* Wave 2 frontend polish"), "Wave-2 chrome polish styles should stay grouped and documented.");

if (failures.length) {
  console.error("Summary mode shell check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Summary mode shell check passed");
