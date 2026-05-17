// SPDX-License-Identifier: MIT OR Apache-2.0

import { readFileSync } from "node:fs";

import { createCheck, cssBlockFor } from "./check-helpers.mjs";

const html = readFileSync("static/index.html", "utf8");
const app = readFileSync("src/frontend/app.ts", "utf8");
const styles = readFileSync("static/styles.css", "utf8");

const { expect, finish } = createCheck("Summary mode shell");

const modeNavIndex = html.indexOf('id="mode-nav"');
const summaryButtonIndex = html.indexOf('data-app-mode="summary"');
const mapButtonIndex = html.indexOf('data-app-mode="map"');
const timelineButtonIndex = html.indexOf('data-app-mode="timeline"');
const transcriptButtonIndex = html.indexOf('data-app-mode="transcript"');
const statusBarIndex = html.indexOf('id="status-bar"');
const metadataListIndex = html.indexOf('id="metadata-list"');

expect(modeNavIndex >= 0, "Mode navigation should exist in static/index.html.");
expect(summaryButtonIndex > modeNavIndex, "Summary should be available as a primary mode button.");
expect(mapButtonIndex > summaryButtonIndex, "Summary should lead the primary mode buttons without removing Map.");
expect(timelineButtonIndex > mapButtonIndex, "Timeline button should remain after Map.");
expect(transcriptButtonIndex > timelineButtonIndex, "Transcript button should remain after Timeline.");
expect(statusBarIndex > 0, "Session metadata should render in a persistent status bar.");
expect(metadataListIndex > statusBarIndex, "Metadata rows should mount inside the status bar.");
expect(html.indexOf('id="metadata-list"', metadataListIndex + 1) === -1, "Metadata list should have a single DOM target.");
expect(!html.includes('aria-label="Session metadata"'), "Session metadata should not be a sidebar card.");
expect(!html.includes('id="inspector-dock"'), "Sessions sidebar should be removed from the shell.");
expect(!html.includes('id="stream-panel"'), "Sidebar stream panel should be removed from the shell.");
expect(!html.includes('data-inspector-tab='), "Removed sidebar tabs should not render after gutting the sidebar.");
expect(!html.includes('data-inspector-tab="saved"'), "Saved views should not render as a sidebar tab.");
expect(!html.includes('data-saved-view='), "Saved view shortcuts should not render in the sidebar.");
expect(!html.includes('id="prompt-list"'), "Prompt cards should not render as a sidebar session list.");
expect(!html.includes('data-session-filter='), "Session list filters should not render in the sidebar.");
expect(html.includes('class="stage-root-list"'), "Session roots should move into the stage header above the map.");
expect(!html.includes('id="session-meta"'), "Map header should not repeat source/session/cwd metadata already shown elsewhere.");
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
expect(app.includes("function renderSummaryInsightQueue"), "Summary should render a dedicated top-insights queue.");
expect(/inspectionQueue\.slice\(0,\s*3\)/m.test(app), "Summary should cap its actionable top-insights list to the first three queued findings.");
expect(app.includes("summary-insights"), "Summary top-insights queue should have stable CSS hooks.");
expect(app.includes('modeButton("Timeline Evidence"') && app.includes('modeButton("Transcript Evidence"') && app.includes('modeButton("Raw Evidence"'), "Summary insights should expose Timeline, Transcript, and Raw evidence routing actions.");
expect(app.includes("function openInsightEvidence"), "Summary evidence actions should route through an explicit insight evidence helper.");
expect(app.includes("No event line is logged for this insight"), "Insight evidence routing should show a deterministic no-line fallback instead of silently failing.");
expect(app.includes("showEvidenceFallback"), "Evidence fallbacks should update the Raw mode panel directly.");
const focusEventByLineBlock = app.match(/function focusEventByLine[\s\S]*?\n}\n\nfunction parserHealthSummaryText/)?.[0] ?? "";
expect(focusEventByLineBlock.length > 0, "focusEventByLine should remain discoverable for static evidence-routing checks.");
expect(!focusEventByLineBlock.includes("openSyntheticStream"), "Evidence routing fallbacks must not reopen the floating Event Context panel outside Map mode.");
expect(!app.includes("localSessionToken") || !/renderSummaryModePanel[\s\S]*localSessionToken/.test(app), "Summary renderer must not expose the local API token.");
expect(app.includes('if (nextMode === "summary")'), "Selecting Summary should have an explicit chrome branch.");
expect(app.includes('return activeAppMode === "map"'), "Event Context should remain Map-only after Summary is added.");

const summaryGrid = cssBlockFor(styles, ".summary-shell-grid");
expect(summaryGrid.length > 0, "Summary shell should have CSS grid styling.");
expect(/grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(/.test(summaryGrid), "Summary shell grid should be responsive.");
expect(styles.includes(".summary-fact"), "Summary facts should have dedicated card styling.");
expect(styles.includes(".summary-triage") && /\.summary-triage\s*\{[^}]*grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(/m.test(styles), "Summary triage cards should wrap responsively.");
const topActionButton = cssBlockFor(styles, ".top-actions button");
const modeNav = cssBlockFor(styles, ".mode-nav");
const modeFilters = cssBlockFor(styles, ".mode-filters");
const statusBar = cssBlockFor(styles, "#status-bar");
expect(/border-radius:\s*var\(--radius-sm\)/.test(topActionButton) && /box-shadow:/m.test(topActionButton), "Top action chrome polish should be folded into the base button selector.");
expect(/background:\s*[\s\S]*linear-gradient/.test(modeNav) && /scrollbar-width:\s*thin/.test(modeNav), "Mode nav chrome polish should be folded into the base nav selector.");
expect(/padding:\s*12px 28px/.test(modeFilters) && /scrollbar-width:\s*thin/.test(modeFilters), "Mode filter chrome polish should be folded into the base filter selector.");
expect(/grid-template-columns:\s*auto minmax\(0,\s*1fr\)/.test(statusBar), "Status bar should reserve a label and a scrollable metadata row.");
expect(styles.includes(".status-bar-items .root-row.metadata-row"), "Metadata rows should have compact status-bar styling.");
expect(styles.includes(".stage-root-list .root-row"), "Stage roots should have compact header styling.");
expect(!styles.includes(".stage-roots-label"), "Stage roots should not keep a redundant Roots label.");
expect(!styles.includes("#inspector-dock"), "Sidebar dock styling should be removed with the sidebar.");
expect(!styles.includes("#stream-panel"), "Stream panel styling should be removed with the sidebar.");
expect(!styles.includes(".saved button"), "Saved-view sidebar styling should be removed with the Saved tab.");
expect(!styles.includes(".prompt-row"), "Prompt-card sidebar styling should be removed with the prompt list.");
expect(app.includes('root.label !== "Session file"'), "Stage roots should omit the session file already shown in the top session picker.");
expect(!styles.includes("/* Wave 2 frontend polish"), "Obsolete Wave-2 chrome polish grouping comment should be removed after folding overrides.");

finish();
