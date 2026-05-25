// SPDX-License-Identifier: MIT OR Apache-2.0

import { readFileSync } from "node:fs";

import { createCheck, cssBlockFor } from "./check-helpers.mjs";
import { mapColorVariableKeys, paletteCssBlock, readFrontendPalette } from "./sync-frontend-palette.mjs";

const html = readFileSync("static/index.html", "utf8");
const app = readFileSync("src/frontend/app.ts", "utf8");
const summaryMode = readFileSync("src/frontend/modes/summary.ts", "utf8");
const summarySurface = `${app}\n${summaryMode}`;
const styles = readFileSync("static/styles.css", "utf8");
const frontendPalette = await readFrontendPalette();

const { expect, finish } = createCheck("Summary mode shell");

function cssMediaBlockFor(source, query) {
  const marker = `@media (${query})`;
  const start = source.indexOf(marker);
  if (start < 0) {
    return "";
  }
  const openBrace = source.indexOf("{", start);
  if (openBrace < 0) {
    return "";
  }
  let depth = 0;
  for (let index = openBrace; index < source.length; index += 1) {
    const char = source[index];
    if (char === "{") {
      depth += 1;
    } else if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        return source.slice(openBrace + 1, index);
      }
    }
  }
  return "";
}

const modeNavIndex = html.indexOf('id="mode-nav"');
const summaryButtonIndex = html.indexOf('data-app-mode="summary"');
const mapButtonIndex = html.indexOf('data-app-mode="map"');
const timelineButtonIndex = html.indexOf('data-app-mode="timeline"');
const transcriptButtonIndex = html.indexOf('data-app-mode="transcript"');
const healthButtonIndex = html.indexOf('data-app-mode="health"');
const insightsButtonIndex = html.indexOf('data-app-mode="insights"');
const diffButtonIndex = html.indexOf('data-app-mode="diff"');
const rawButtonIndex = html.indexOf('data-app-mode="raw"');
const exportButtonIndex = html.indexOf('data-app-mode="export"');
const betaBannerIndex = html.indexOf('id="beta-banner"');
const stageHeaderIndex = html.indexOf('class="stage-header"');
const sourceSwitchIndex = html.indexOf('id="source-switch"');
const sessionSelectIndex = html.indexOf('id="session-select"');
const topActionsIndex = html.indexOf('class="top-actions"');
const topActionsHtml = html.slice(topActionsIndex, html.indexOf("</div>", topActionsIndex));
const statusBarIndex = html.indexOf('id="status-bar"');
const metadataListIndex = html.indexOf('id="metadata-list"');
const sceneFrameIndex = html.indexOf('id="scene-frame"');
const metricFiltersIndex = html.indexOf('aria-label="Metric filters"');
const mapLiveHudIndex = html.indexOf('class="map-live-hud"');
const mapMetricColorStyles = styles.slice(styles.indexOf(".map-metrics .prompt"), styles.indexOf("#scene-frame"));

expect(modeNavIndex >= 0, "Mode navigation should exist in static/index.html.");
expect(betaBannerIndex > topActionsIndex && betaBannerIndex < modeNavIndex, "Beta banner should sit between the top bar and mode navigation.");
expect(summaryButtonIndex > modeNavIndex, "Summary should be available as a primary mode button.");
expect(mapButtonIndex > summaryButtonIndex, "Summary should lead the primary mode buttons without removing Map.");
expect(timelineButtonIndex > mapButtonIndex, "Timeline button should remain after Map.");
expect(transcriptButtonIndex > timelineButtonIndex, "Transcript button should remain after Timeline.");
expect(healthButtonIndex > transcriptButtonIndex, "Health should render as a mode tab after Transcript.");
expect(insightsButtonIndex > healthButtonIndex, "Insights should render as a mode tab after Health.");
expect(diffButtonIndex > insightsButtonIndex, "Diff should render as a mode tab after Insights.");
expect(rawButtonIndex > diffButtonIndex, "Raw should render as a mode tab after Diff.");
expect(exportButtonIndex > rawButtonIndex, "Export should render as a mode tab after Raw.");
expect(!html.includes('data-app-mode="settings"'), "Settings should not render as a redundant mode tab.");
expect(!html.includes('id="utility-mode-select"'), "Utility modes should not use a select control.");
expect(!html.includes('class="utility-mode-picker"'), "Utility modes should not render a separate picker label.");
expect(!html.includes('class="local-pill"'), "Top bar should not render a redundant LOCAL badge.");
expect(stageHeaderIndex > exportButtonIndex, "Stage context row should sit below the mode nav.");
expect(sourceSwitchIndex > stageHeaderIndex, "Source switcher should move into the below-nav context row.");
expect(sessionSelectIndex > sourceSwitchIndex, "Session picker should sit beside the source switcher in the context row.");
expect(!topActionsHtml.includes('id="source-switch"'), "Top bar should not keep the source switcher.");
expect(!topActionsHtml.includes('id="session-select"'), "Top bar should not keep the session picker.");
expect(/id="settings-button"[\s\S]*<svg/.test(topActionsHtml), "Top bar settings control should render as a cog icon button.");
expect(!topActionsHtml.includes(">Settings</button>"), "Top bar settings control should not render visible Settings text.");
expect(statusBarIndex > 0, "Session metadata should render in a persistent status bar.");
expect(metadataListIndex > statusBarIndex, "Metadata rows should mount inside the status bar.");
expect(html.indexOf('id="metadata-list"', metadataListIndex + 1) === -1, "Metadata list should have a single DOM target.");
expect(sceneFrameIndex > stageHeaderIndex, "Map scene frame should render below the stage context row.");
expect(mapLiveHudIndex > sceneFrameIndex, "Map LIVE status should render inside the scene frame.");
expect(metricFiltersIndex > mapLiveHudIndex, "Metric filters should move into the in-map LIVE HUD.");
expect(!html.includes('class="legend"'), "Metric filters should not render as a full-width header legend.");
expect(html.includes('data-maturity="beta"') && html.includes('data-maturity="experimental"') && html.includes('data-maturity="advanced"'), "Mode tabs should expose stable beta, experimental, and advanced maturity keys.");
expect(html.includes('data-status="Beta"') && html.includes('data-status="Experimental"') && html.includes('data-status="Advanced"'), "Mode tabs should expose beta, experimental, and advanced maturity labels.");
expect(html.includes('id="mode-panel-status"'), "Mode panel should show a per-page maturity label.");
expect(html.includes('id="metric-prompts"'), "Map metric HUD should count rendered prompt nodes instead of showing an uncounted Turn label.");
expect(html.includes('id="metric-skills"'), "Map metric HUD should expose a Skills filter for inferred skill usage.");
expect(/data-view-action="two-d"[^>]+aria-pressed="false"/.test(html), "2D view control should render as a toggle button with an initial pressed state.");
expect(!html.includes('aria-label="Session metadata"'), "Session metadata should not be a sidebar card.");
expect(!html.includes('id="inspector-dock"'), "Sessions sidebar should be removed from the shell.");
expect(!html.includes('id="stream-panel"'), "Sidebar stream panel should be removed from the shell.");
expect(!html.includes('data-inspector-tab='), "Removed sidebar tabs should not render after gutting the sidebar.");
expect(!html.includes('data-inspector-tab="saved"'), "Saved views should not render as a sidebar tab.");
expect(!html.includes('data-saved-view='), "Saved view shortcuts should not render in the sidebar.");
expect(!html.includes('id="prompt-list"'), "Prompt cards should not render as a sidebar session list.");
expect(!html.includes('data-session-filter='), "Session list filters should not render in the sidebar.");
expect(!html.includes('id="session-title"'), "Stage header should not repeat the selected session title.");
expect(!html.includes('id="root-list"'), "Stage header should not repeat session root metadata.");
expect(!html.includes('class="stage-root-list"'), "Stage roots should not render above the map.");
expect(!html.includes('id="session-meta"'), "Map header should not repeat source/session/cwd metadata already shown elsewhere.");
expect(/type AppMode = [^;]*"summary"/m.test(app), "AppMode should include summary.");
expect(
  /DEFAULT_APP_MODES\s*=\s*\["summary",\s*"map",\s*"timeline",\s*"transcript"\]/m.test(app),
  "Summary should be part of the default mode cluster before Map/Timeline/Transcript."
);
expect(app.includes('let activeAppMode: AppMode = normalizeAppMode(new URLSearchParams(window.location.search).get("mode"));'), "Initial mode should be parsed from ?mode= deep links.");
expect(app.includes("function normalizeAppMode"), "Deep-link parsing should normalize app modes through a dedicated helper.");
expect(/normalizeAppMode[\s\S]*:\s*"summary";/.test(app), "Summary should be the default landing mode when no ?mode= is provided.");
expect(/<button class="active" type="button" data-app-mode="summary" data-maturity="beta" data-status="Beta">Summary<\/button>/.test(html), "Static shell should mark Summary as the initial active beta mode.");
expect(app.includes('url.searchParams.set("mode", activeAppMode)'), "Visible URL should keep the current mode deep link.");
expect(app.includes('url.searchParams.delete("token")'), "Visible URL synchronization should strip API tokens.");
expect(!/searchParams\.set\("token",\s*localSessionToken\)/.test(app.slice(app.indexOf("function syncSessionUrl"), app.indexOf("function resetSessionViewState"))), "Visible URL synchronization must not re-add the API token.");
expect(app.includes('case "summary":\n      renderSummaryModePanel();'), "Summary mode should render through renderSummaryModePanel.");
expect(app.includes("type AppModeMaturity"), "Frontend should model per-mode maturity labels.");
expect(app.includes("const APP_MODE_MATURITY"), "Frontend should keep runtime mode maturity labels in one typed map.");
expect(app.includes("function appModeMaturity"), "Frontend should resolve beta, experimental, and advanced labels by mode.");
expect(app.includes("function syncModePanelStatus"), "Frontend should sync the mode-panel maturity label.");
expect(app.includes("button.dataset.maturity = status.maturity"), "Frontend should sync nav maturity keys from the typed map.");
expect(app.includes("function renderSummaryModePanel"), "Summary mode should have a dedicated renderer.");
expect(summarySurface.includes("function renderForensicVerdictCard"), "Summary should render an answer-first Forensic Verdict card.");
expect(summarySurface.includes('modeCard("Forensic Verdict"'), "Forensic Verdict should have a clear top-card heading.");
expect(summarySurface.includes("function forensicVerdictOutcome"), "Forensic Verdict should summarize the run outcome explicitly.");
expect(summarySurface.includes("function forensicVerdictFirstCriticalEvent"), "Forensic Verdict should call out the first critical or suspicious event.");
expect(summarySurface.includes("Highest-confidence finding"), "Forensic Verdict should name the highest-priority finding before the detail queue.");
expect(summarySurface.includes('modeButton("Inspect Highest-Priority Finding"'), "Forensic Verdict should expose one obvious primary CTA for the top finding.");
const confidenceRankBlock = summarySurface.match(/function insightConfidenceRank[\s\S]*?\n}\n\nfunction insightSeverityRank/)?.[0] ?? "";
expect(/case "direct":[\s\S]*return 0;/.test(confidenceRankBlock), "Forensic Verdict confidence ranking should treat direct evidence as the highest-confidence source.");
expect(/case "strong heuristic":[\s\S]*return 1;/.test(confidenceRankBlock), "Forensic Verdict confidence ranking should rank strong heuristic evidence ahead of weak heuristics.");
expect(/case "weak heuristic":[\s\S]*return 2;/.test(confidenceRankBlock), "Forensic Verdict confidence ranking should rank weak heuristic evidence below direct and strong heuristic evidence.");
expect(summarySurface.includes("privacySummary"), "Summary renderer should display backend privacySummary facts.");
expect(summarySurface.includes("shareabilitySummary"), "Summary renderer should display backend shareabilitySummary facts.");
expect(summarySurface.includes("rawLogsSafeToShare"), "Summary renderer should expose raw log shareability status.");
expect(summarySurface.includes("apiTokenRequired"), "Summary renderer should expose only token requirement status, not token contents.");
expect(summarySurface.includes('triage.className = "summary-triage"'), "Summary renderer should include the triage section row.");
expect(summarySurface.includes('modeButton("Open Timeline"') && summarySurface.includes('modeButton("Open Export"'), "Summary triage sections should route to primary inspection and export flows.");
expect(summarySurface.includes("function renderSummaryInsightQueue"), "Summary should render a dedicated top-insights queue.");
expect(summarySurface.includes("const SUMMARY_INSPECTION_QUEUE_LIMIT = 5;"), "Summary should cap inspect-first findings at five.");
expect(summarySurface.includes("insights.inspectionQueue.slice(0, SUMMARY_INSPECTION_QUEUE_LIMIT)"), "Summary Insights should render only the first capped inspection findings.");
expect(summarySurface.includes("summary-insights"), "Summary top-insights queue should have stable CSS hooks.");
expect(summarySurface.includes('modeButton("View Evidence"'), "Summary insights should expose one primary View Evidence CTA per finding.");
expect(!summarySurface.includes('modeButton("Timeline Evidence"') && !summarySurface.includes('modeButton("Transcript Evidence"') && !summarySurface.includes('modeButton("Raw Evidence"'), "Summary insights should not render repeated per-finding evidence CTAs.");
expect(summarySurface.includes("function summaryInsightEvidenceDrawer"), "Summary insights should render a unified evidence drawer.");
expect(summarySurface.includes('trigger.setAttribute("aria-controls", drawerId)') && summarySurface.includes('trigger.setAttribute("aria-expanded", "false")'), "Summary evidence drawer trigger should expose keyboard and screen-reader expansion state.");
expect(summarySurface.includes('surfaceActions.setAttribute("role", "group")'), "Summary evidence drawer surfaces should be grouped for assistive tech.");
expect(summarySurface.includes("function openInsightEvidence"), "Summary drawer actions should route through an explicit insight evidence helper.");
expect(summarySurface.includes("No event line is logged for this insight"), "Insight evidence routing should show a deterministic no-line fallback instead of silently failing.");
expect(summarySurface.includes("showEvidenceFallback"), "Evidence fallbacks should update the Raw mode panel directly.");
expect(app.includes("const INSIGHTS_PRIORITY_SIGNAL_LIMIT = 10;"), "Insights should cap primary priority signals.");
expect(app.includes("function insightPriorityItems"), "Insights should derive a focused priority signal list.");
expect(app.includes("function insightPriorityGroup"), "Insights should group repeated priority rows before rendering.");
expect(app.includes("INSIGHT_TITLE_REPEATED_FILE_ACTIVITY"), "Insights should keep repeated file churn filtering behind a named title constant.");
expect(app.includes("function renderFileChurnDetails"), "Insights should move repeated file activity into a separate file-churn section.");
expect(app.includes("function suspiciousToolCallSummaryLines"), "Insights should summarize suspicious tool calls by reason.");
expect(app.includes("function repeatedToolPatternSummaryLines"), "Insights should summarize repeated tool-call families.");
expect(app.includes("function compactInsightText"), "Insights should truncate long final outcomes before rendering.");
expect(app.includes('modeCard("How To Read This"'), "Insights should lead with plain-language heuristic guidance.");
expect(app.includes('modeCard("Priority Signals"'), "Insights should rename the main queue to Priority Signals.");
expect(app.includes('modeCard("Repeated Tool Patterns"'), "Insights should separate repeated tool patterns from file churn.");
const focusEventByLineBlock = app.match(/function focusEventByLine[\s\S]*?\n}\n\nfunction parserHealthSummaryText/)?.[0] ?? "";
expect(focusEventByLineBlock.length > 0, "focusEventByLine should remain discoverable for static evidence-routing checks.");
expect(!focusEventByLineBlock.includes("openSyntheticStream"), "Evidence routing fallbacks must not reopen the floating Event Context panel outside Map mode.");
const renderSummaryModePanelBlock = app.match(/function renderSummaryModePanel[\s\S]*?\n}\n\nfunction cleanupModePanelRender/)?.[0] ?? "";
expect(!summaryMode.includes("localSessionToken") && !renderSummaryModePanelBlock.includes("localSessionToken"), "Summary renderer must not expose the local API token.");
expect(app.includes('if (nextMode === "summary")'), "Selecting Summary should have an explicit chrome branch.");
expect(app.includes('return activeAppMode === "map"'), "Event Context should remain Map-only after Summary is added.");

const summaryGrid = cssBlockFor(styles, ".summary-shell-grid");
expect(summaryGrid.length > 0, "Summary shell should have CSS grid styling.");
expect(/grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(/.test(summaryGrid), "Summary shell grid should be responsive.");
expect(styles.includes(".summary-fact"), "Summary facts should have dedicated section styling.");
expect(styles.includes(".summary-evidence-drawer") && /\.summary-evidence-drawer\s*\{[^}]*grid-column:\s*1\s*\/\s*-1/m.test(styles), "Summary evidence drawer should span the row width.");
expect(styles.includes(".summary-evidence-drawer[hidden]") && styles.includes(".summary-evidence-tabs"), "Summary evidence drawer should have hidden-state and surface-tab styling.");
expect(styles.includes(".summary-verdict") && styles.includes(".summary-verdict-grid"), "Forensic Verdict should have dedicated answer-first layout styling.");
expect(styles.includes(".summary-primary-cta"), "Forensic Verdict primary CTA should have a stable styling hook.");
expect(styles.includes(".summary-triage") && /\.summary-triage\s*\{[^}]*grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(/m.test(styles), "Summary triage sections should wrap responsively.");
expect(styles.includes(".mode-details") && styles.includes(".mode-details summary"), "Insights file-churn disclosure should have dedicated styling.");
expect(styles.includes(".beta-banner") && styles.includes(".mode-status-label"), "Beta banner and mode maturity labels should have dedicated styling.");
const topActionButton = cssBlockFor(styles, ".top-actions button");
const modeNav = cssBlockFor(styles, ".mode-nav");
const modeNavButton = cssBlockFor(styles, ".mode-nav button");
const modeNavButtonActive = cssBlockFor(styles, ".mode-nav button:hover,\n.mode-nav button.active");
const modeFilters = cssBlockFor(styles, ".mode-filters");
const modeCard = cssBlockFor(styles, ".mode-card");
const summaryFact = cssBlockFor(styles, ".summary-fact");
const modeCardSurface = cssBlockFor(styles, ".mode-card,\n.summary-fact");
const modeRow = cssBlockFor(styles, ".mode-row");
const modeActionButton = cssBlockFor(styles, ".mode-action-button");
const modePanelPre = cssBlockFor(styles, ".mode-panel-content > pre");
const statusBar = cssBlockFor(styles, "#status-bar");
const statusBarItems = cssBlockFor(styles, ".status-bar-items");
const statusBarScrollbar = cssBlockFor(styles, ".status-bar-items::-webkit-scrollbar");
const statusBarValue = cssBlockFor(styles, ".status-bar-items .root-copy small");
const stageMetric = cssBlockFor(styles, ".stage-metric");
const stage = cssBlockFor(styles, "#stage");
const mapCanvas = cssBlockFor(styles, "#space");
const mapLiveHud = cssBlockFor(styles, ".map-live-hud");
const mapMetrics = cssBlockFor(styles, ".map-metrics");
const lowWidthStyles = cssMediaBlockFor(styles, "max-width: 1100px");
const lowWidthModeStatus = cssBlockFor(lowWidthStyles, ".mode-nav button[data-status]::before");
const lowWidthModeScrollbar = cssBlockFor(lowWidthStyles, ".mode-nav::-webkit-scrollbar");
const lowWidthStatusItems = cssBlockFor(lowWidthStyles, ".status-bar-items");
expect(/border:\s*0/.test(topActionButton) && /background:\s*transparent/.test(topActionButton) && /box-shadow:\s*none/.test(topActionButton), "Top action controls should use a flat inline style instead of boxed cards.");
expect(app.includes("function syncAppModeControls") && app.includes('activeAppMode === "settings"'), "Settings cog should carry the active state for settings mode.");
expect(app.includes("const MAP_CAMERA_FAR = 12_000") && app.includes("new THREE.PerspectiveCamera(50, 1, 0.1, MAP_CAMERA_FAR)"), "Map camera should use the extended named far clipping plane.");
expect(app.includes("const MAP_GRID_SIZE = 12_000") && app.includes("new THREE.GridHelper(MAP_GRID_SIZE, MAP_GRID_DIVISIONS"), "Map grid should cover the increased render distance.");
expect(!app.includes("requestPointerLock") && !app.includes("pointerlockchange"), "Map camera drag should avoid browser Pointer Lock prompts.");
expect(app.includes("canvas.setPointerCapture(event.pointerId)"), "Map camera drag should use pointer capture for browser-compatible right-drag look.");
expect(app.includes("function canFallbackPairSubagentResult"), "Subagent branch pairing should guard order fallback against stealing agent-specific results.");
expect(app.includes("resultAgentIds"), "Subagent branch pairing should cache result agent ids before fallback matching.");
expect(app.includes("const CAMERA_ZOOM_MIN_UNIT") && app.includes("const CAMERA_ZOOM_DISTANCE_FACTOR") && app.includes("function cameraZoomStepSize"), "Map zoom should scale its step size from camera distance to the floor.");
expect(app.includes("cameraFloorViewDistance() * CAMERA_ZOOM_DISTANCE_FACTOR"), "Map zoom should speed up as the camera moves farther from the floor.");
expect(app.includes("zoomCamera(-steps)") && app.includes("zoomCamera(1)") && app.includes("zoomCamera(-1)"), "Map wheel and button zoom controls should use shared zoom-step semantics.");
expect(app.includes("controls.enablePan = false"), "Map left-drag panning should use the app's grab-pan behavior instead of OrbitControls pan.");
expect(app.includes("const MAP_FLOOR_Y = -1.4") && app.includes("grid.position.y = MAP_FLOOR_Y"), "Map drag math should share the same floor height as the rendered grid.");
expect(app.includes("function translateCameraByFloorDrag") && app.includes("function grabPanFloorPointForPointer"), "Map left-drag panning should anchor pointer movement to the rendered floor plane.");
expect(app.includes("grabPanAnchorPoint") && app.includes("grabPanFloorPlane"), "Map grab-pan should keep the initial floor point under the cursor while dragging.");
expect(app.includes("function translateCameraByScreenDrag") && app.includes("function cameraFloorViewDistance"), "Map grab-pan should fall back to floor-distance screen scaling when the floor ray is unavailable.");
expect(app.includes("const movedCamera = orbitPanHasFloorAnchor") && app.includes("if (movedCamera) {\n    markManualCameraNavigation();"), "Map grab-pan should mark manual navigation only after actual camera movement.");
expect(app.includes("camera.position.add(grabPanMove)") && app.includes("controls.target.add(grabPanMove)"), "Map grab-pan should translate the camera and target together.");
expect(app.includes("suppressNextCanvasClick"), "Map grab-pan should not select a node when releasing after a drag.");
expect(app.includes("userPinnedCamera") && app.includes("function markManualCameraNavigation") && app.includes("function resumeCameraAutoFollow"), "Manual map navigation should suspend live auto-follow until an explicit overview reset.");
expect(app.includes("isTailing && !userPinnedCamera"), "Live graph updates should not recenter the camera after manual map navigation.");
expect(app.includes("function toggleOverviewCameraMode"), "2D view control should toggle between 2D and 3D overview modes.");
expect(app.includes('button.setAttribute("aria-pressed", String(twoDActive))'), "2D view control should keep aria-pressed synchronized with camera mode.");
expect(app.includes('button.classList.toggle("active", twoDActive)'), "2D view control should expose a visible active state.");
expect(/background:\s*[\s\S]*linear-gradient/.test(modeNav) && /scrollbar-width:\s*thin/.test(modeNav), "Mode nav chrome polish should be folded into the base nav selector.");
expect(/border:\s*0/.test(modeNavButton) && !/border-radius/.test(modeNavButton), "Mode nav buttons should not use rounded card styling.");
expect(/background:\s*transparent/.test(modeNavButtonActive) && /box-shadow:\s*none/.test(modeNavButtonActive), "Mode nav active state should rely on underline color instead of a rounded card.");
expect(
  /content:\s*""/.test(lowWidthModeStatus) && /width:\s*6px/.test(lowWidthModeStatus),
  "Low-width mode nav should collapse maturity labels into compact markers."
);
expect(
  /display:\s*none/.test(lowWidthModeScrollbar) && /display:\s*none/.test(statusBarScrollbar),
  "Responsive chrome rails should stay scrollable without exposing native scrollbars."
);
expect(
  /scrollbar-width:\s*none/.test(statusBarItems) && /max-width:\s*180px/.test(statusBarValue),
  "Status metadata should use compact base sizing before the footer overflows."
);
expect(
  /mask-image:\s*linear-gradient/.test(lowWidthStatusItems),
  "Low-width status metadata should fade overflowing content."
);
expect(/padding:\s*12px 28px/.test(modeFilters) && /background:\s*transparent/.test(modeFilters) && /scrollbar-width:\s*thin/.test(modeFilters), "Mode filter chrome should be flat and folded into the base filter selector.");
expect(/border:\s*0/.test(modeCard) && /background:\s*transparent/.test(modeCard), "Mode page sections should not use boxed card surfaces.");
expect(/border:\s*0/.test(summaryFact) && /background:\s*transparent/.test(summaryFact), "Summary fact sections should not use boxed card surfaces.");
expect(/border-radius:\s*0/.test(modeCardSurface) && /box-shadow:\s*none/.test(modeCardSurface), "Shared mode surfaces should be flat separators, not rounded cards.");
expect(/border:\s*0/.test(modeRow) && /border-bottom:/.test(modeRow) && /background:\s*transparent/.test(modeRow), "Timeline rows should render as flat list rows instead of cards.");
expect(/border:\s*0/.test(modeActionButton) && /border-bottom:/.test(modeActionButton) && /background:\s*transparent/.test(modeActionButton), "Mode action buttons should use flat link-style controls.");
expect(/width:\s*max-content/.test(modeActionButton), "Mode action buttons should size to their labels instead of stretching like cards.");
expect(/border-radius:\s*0/.test(modePanelPre) && /background:\s*transparent/.test(modePanelPre) && /overflow:\s*auto/.test(modePanelPre), "Raw/pre mode content should render as a flat scrollable section.");
expect(/grid-template-columns:\s*auto minmax\(0,\s*1fr\)/.test(statusBar), "Status bar should reserve a label and a scrollable metadata row.");
expect(styles.includes(".status-bar-items .root-row.metadata-row"), "Metadata rows should have compact status-bar styling.");
expect(styles.includes(".status-bar-items .root-icon"), "Status bar metadata rows should use compact semantic icons.");
expect(!styles.includes(".status-bar-items .root-dot"), "Status bar metadata rows should not render generic color squares.");
expect(!styles.includes(".root-row em"), "Metadata rows should not keep unused status-badge styling.");
expect(app.includes("METADATA_ICON_PATHS") && app.includes("renderStatusIcon"), "Metadata renderer should map status sections to semantic icons.");
expect(app.includes("function renderMetadataRow") && !app.includes("function renderInfoRow"), "Metadata renderer should not keep the removed generic info-row API.");
expect(styles.includes(".stage-session-context"), "Stage context row should style the moved source/session controls.");
expect(styles.includes(".stage-metric"), "Stage context row should render metrics with the same compact inline style as session controls.");
expect(/border:\s*0/.test(stageMetric) && /background:\s*transparent/.test(stageMetric) && /box-shadow:\s*none/.test(stageMetric), "Stage metrics should use a flat inline style instead of boxed cards.");
expect(/grid-template-rows:\s*44px minmax\(0,\s*1fr\)/.test(stage), "Stage should not reserve a full-width legend row above the map.");
expect(/cursor:\s*grab/.test(mapCanvas) && /touch-action:\s*none/.test(mapCanvas), "Map canvas should expose direct grab-pan affordance and avoid browser gesture interception.");
expect(styles.includes("#space.grabbing"), "Map canvas should expose a grabbing cursor during drag-pan.");
expect(/position:\s*absolute/.test(mapLiveHud) && /bottom:\s*16px/.test(mapLiveHud), "Map LIVE HUD should sit inside the map viewport.");
expect(/display:\s*flex/.test(mapLiveHud) && /transform:\s*translateX\(-50%\)/.test(mapLiveHud), "Map LIVE HUD should align the LIVE chip and metrics together.");
expect(/overflow-x:\s*auto/.test(mapMetrics) && /scrollbar-width:\s*none/.test(mapMetrics), "In-map metric filters should stay compact without exposing a header scrollbar.");
expect(
  html.includes('data-node-role="prompt"') && html.includes('data-node-role="patch"') && html.includes('data-node-role="browser"'),
  "Role counters should be clickable map filters."
);
expect(styles.includes(".map-metrics button.active"), "In-map metric filters should keep their active metric styling.");
expect(styles.includes(".map-metrics .patch"), "Apply-patch calls should have their own map/HUD color.");
expect(styles.includes(paletteCssBlock(frontendPalette)), "Map color CSS variables should be generated from the frontend palette.");
expect(!app.includes("const kindColor: Record<string, number> = {"), "WebGL node colors should not keep a duplicated inline palette.");
expect(
  mapColorVariableKeys(styles).every((key) => frontendPalette[key]),
  "Every map color CSS variable should be backed by the frontend palette."
);
expect(
  ["local", "patch", "file"].every((key) => mapColorVariableKeys(mapMetricColorStyles).includes(key)) &&
    !/color:\s*#[0-9a-f]{6}/i.test(mapMetricColorStyles),
  "Map metric colors should reference generated palette variables instead of duplicated hex values."
);
expect(!styles.includes(".legend"), "Metric legend styling should be removed after moving filters into the map HUD.");
expect(app.includes("function collectMapMetricCounts"), "Metric HUD counts should be derived from the rendered map node set.");
expect(app.includes("nodeRoleMetricElements[role].textContent = formatNumber(mapMetrics[NODE_ROLE_METRICS[role]])"), "Metric HUD should show rendered role node counts.");
expect(app.includes("metricSkills.textContent = formatNumber(mapMetrics.skill)"), "Metric HUD should show rendered skill-use count.");
expect(app.includes('const METRICS = ["error", "long", "file", "diff", "artifact", "compaction", "skill"]'), "Metric filtering should include skill-use nodes.");
expect(!app.includes("overviewHidden"), "Overview should render subagent internals instead of collapsing them.");
expect(
  app.includes("function addSubagentInspectionNodes") &&
    app.includes("allNodes.push(childNode)") &&
    app.includes("allConnectors.push([unitParentId, childNode.id])"),
  "Subagent inspection nodes should render visible children connected to their local spine parent."
);
expect(
  app.includes("change.callId && promptNodesById.has(change.callId)") &&
    app.includes("isSubagentFileChild") &&
    app.includes("function addSubagentFileNodes") &&
    app.includes("overviewFileChangeTarget(parent") &&
    app.includes("overviewFileChangeConnector("),
  "Subagent file changes should attach to rendered subagent nodes and use the prompt-style local file fan."
);
expect(
  app.includes("function hasRenderableSubagentBranchContent") &&
    app.includes(".filter(hasRenderableSubagentBranchContent)") &&
    app.includes("return Boolean(branch.result || branch.nodes.length)"),
  "Empty launch-only subagent calls should stay in the main activity path instead of consuming overview branch lanes."
);
expect(
  app.includes("function overviewSubagentBranchDepth") &&
    app.includes("function overviewSubagentBranchFrame") &&
    app.includes("function overviewSubagentChildMinZ") &&
    app.includes("function overviewSubagentFileMinZ") &&
    !app.includes("OVERVIEW_SUBAGENT_GROUP_DEPTH_Z"),
  "Subagent-heavy turns should reserve timeline space from rendered Z targets instead of a per-message depth estimate."
);
expect(
  app.includes("interface SubagentFileAssignment") &&
    app.includes("function subagentFileAssignments") &&
    app.includes("subagentFileAssignments(files, fileAnchors).forEach"),
  "Subagent file placement should share file-parent assignment logic between rendering and layout measurement."
);
expect(!app.includes("metricErrors.textContent = `${ui.metricErrors}`"), "Metric HUD error count should not use stale session-summary metrics.");
expect(app.includes("mesh.frustumCulled = false") && app.includes("lineMesh.frustumCulled = false") && app.includes("nextPointMesh.frustumCulled = false"), "Dynamic map layers should not disappear from coarse frustum culling while navigating.");
expect(app.includes("function nodeVisibleInCurrentView"), "Map metric filtering should have an explicit node visibility predicate.");
expect(app.includes("function nodeMatchesActiveMapFilter"), "Map filters should share a single visibility predicate.");
expect(app.includes("nodeMatchesMetric(node, activeMapFilter.metric)"), "Metric filters should hide non-matching rendered nodes.");
expect(app.includes("nodeMatchesRole(node, activeMapFilter.role)"), "Role filters should hide non-matching rendered nodes.");
expect(app.includes("const nodeRoleButtons = queryAll<HTMLButtonElement>(\"[data-node-role]\")"), "Role filter buttons should be queried alongside metric filter buttons.");
expect(app.includes("function selectMapFilter") && app.includes("function nodeMatchesRole"), "Filter clicks should share the in-place map filtering behavior.");
expect(app.includes("function isPatchCall") && app.includes('"patch"'), "apply_patch tool calls should render as a distinct patch node kind.");
expect(app.includes("!nodeVisibleInCurrentView(from) || !nodeVisibleInCurrentView(to)"), "Metric filters should hide connector segments attached to hidden nodes.");
const selectMetricBlock = app.match(/function selectMetric[\s\S]*?\n}\n\nfunction nodeMatchesMetric/)?.[0] ?? "";
expect(selectMetricBlock.length > 0, "selectMetric should remain discoverable for metric-filter behavior checks.");
expect(!selectMetricBlock.includes("enterInspectMode") && !app.includes("focusFirstMetricMatch"), "Metric clicks should filter the map in place instead of jumping into inspect mode.");
const pickNodeBlock = app.match(/function pickNode[\s\S]*?\n}\n\nfunction setRawModePayload/)?.[0] ?? "";
expect(pickNodeBlock.includes("nodeVisibleInCurrentView(node)"), "Map picking should ignore nodes hidden by metric filters.");
expect(pickNodeBlock.includes("const nearest = nearestVisibleScreenNode();") && pickNodeBlock.indexOf("nearestVisibleScreenNode") < pickNodeBlock.indexOf("raycaster.setFromCamera"), "Map selection should prefer the nearest projected node before raycast depth so large prompt nodes do not steal subagent clicks.");
expect(app.includes("function nearestVisibleScreenNode"), "Map picking should fall back to a visible screen-space node target when raycasting misses.");
expect(app.includes("SCREEN_PICK_RADIUS_PX"), "Map screen-space picking should use a bounded click radius.");
const nodeMatchesMetricBlock = app.match(/function nodeMatchesMetric[\s\S]*?\n}\n\nfunction fileChangeMatchesMetric/)?.[0] ?? "";
expect(nodeMatchesMetricBlock.includes('node.type === "message"') && nodeMatchesMetricBlock.includes("return false;"), "Assistant messages should not be classified as errors/files by arbitrary text matches.");
const callMatchesMetricBlock = app.match(/function callMatchesMetric[\s\S]*?\n}\n\nfunction callNameMatches/)?.[0] ?? "";
const errorMetricBranch = callMatchesMetricBlock.match(/if \(metric === "error"\)[\s\S]*?\n  \}/)?.[0] ?? "";
expect(errorMetricBranch.includes("errorishText(status)") && !errorMetricBranch.includes("argumentPreview") && !errorMetricBranch.includes("outputPreview"), "Error metrics should use structured call status instead of argument/output text.");
expect(callMatchesMetricBlock.includes('callNameMatches(call.name, ["file"'), "File metrics should use explicit file-tool names instead of generic command text.");
const longMetricBranch = callMatchesMetricBlock.match(/if \(metric === "long"\)[\s\S]*?\n  \}/)?.[0] ?? "";
expect(app.includes("const LONG_CALL_DURATION_MS = 30_000"), "Long-call threshold should be named and shared.");
expect(app.includes("function isLongCall") && app.includes("isLongCall(node.source)") && app.includes("isLongCall(call)"), "Timeline and map long-call checks should share the same duration predicate.");
expect(longMetricBranch.includes("isLongCall(call)") && !longMetricBranch.includes("argumentPreview") && !longMetricBranch.includes("outputPreview"), "Long-call metric should use call duration instead of payload size.");
expect(!app.includes("function messageMatchesMetric"), "Frontend should not keep a message metric helper when message nodes do not match metric filters.");
expect(!styles.includes(".utility-mode-picker"), "Utility picker styling should be removed after replacing it with tabs.");
expect(!styles.includes(".local-pill"), "Top bar should not keep styling for a removed LOCAL badge.");
expect(!app.includes("utilityModeSelect"), "Frontend should not keep select-specific utility mode state.");
expect(!app.includes('queryRequired<HTMLSelectElement>("#utility-mode-select")'), "Frontend should not query the removed utility select.");
expect(!styles.includes(".stage-root-list"), "Stage root styling should be removed with the redundant root strip.");
expect(!styles.includes(".stage-roots"), "Stage roots should not keep redundant styling.");
expect(!styles.includes("#inspector-dock"), "Sidebar dock styling should be removed with the sidebar.");
expect(!styles.includes("#stream-panel"), "Stream panel styling should be removed with the sidebar.");
expect(!styles.includes(".saved button"), "Saved-view sidebar styling should be removed with the Saved tab.");
expect(!styles.includes(".prompt-row"), "Prompt-card sidebar styling should be removed with the prompt list.");
expect(!app.includes("renderRootList"), "Frontend should not retain a renderer for removed stage roots.");
expect(!app.includes('queryRequired<HTMLElement>("#root-list")'), "Frontend should not query removed stage roots.");
expect(!styles.includes("/* Wave 2 frontend polish"), "Obsolete Wave-2 chrome polish grouping comment should be removed after folding overrides.");

finish();
