#!/usr/bin/env node
// SPDX-License-Identifier: MIT OR Apache-2.0

import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { once } from "node:events";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright-core";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const START_TIMEOUT_MS = Number(process.env.PERLUSTRON_SMOKE_START_TIMEOUT_MS || 120_000);
const UI_TIMEOUT_MS = Number(process.env.PERLUSTRON_SMOKE_UI_TIMEOUT_MS || 30_000);
const REDACTED_TOKEN = "<redacted-token>";
const RESPONSIVE_STATUS_WIDTHS = [1391, 1295];
const RESPONSIVE_STATUS_HEIGHT = 979;
const LOW_CHROME_VIEWPORT = { width: 887, height: 979 };

const chromeCandidates = [
  process.env.CHROME_BIN,
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);

const cargoBinDirs = [
  process.env.CARGO_HOME ? path.join(process.env.CARGO_HOME, "bin") : undefined,
  process.env.HOME ? path.join(process.env.HOME, ".cargo", "bin") : undefined,
  process.env.USER ? path.join("/home", process.env.USER, ".cargo", "bin") : undefined,
  process.env.LOGNAME ? path.join("/home", process.env.LOGNAME, ".cargo", "bin") : undefined,
].filter(Boolean);

const cargoCandidates = [
  process.env.CARGO_BIN,
  ...cargoBinDirs.map((dir) => path.join(dir, "cargo")),
  "cargo",
].filter(Boolean);

const browserLaunchArgs = [
  "--no-sandbox",
  "--disable-dev-shm-usage",
  "--ignore-gpu-blocklist",
  "--enable-unsafe-swiftshader",
  "--use-angle=swiftshader",
  "--use-gl=angle",
  "--enable-webgl",
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function redact(value) {
  return String(value)
    .replace(/([?&]token=)[^\s&"']+/g, `$1${REDACTED_TOKEN}`)
    .replace(/(token=)[^\s&"']+/g, `$1${REDACTED_TOKEN}`);
}

function findExecutable(candidates, label) {
  for (const candidate of candidates) {
    if (!candidate) {
      continue;
    }
    if (candidate.includes(path.sep)) {
      if (existsSync(candidate)) {
        return candidate;
      }
      continue;
    }
    return candidate;
  }
  throw new Error(`Unable to find ${label}; set ${label.toUpperCase()}_BIN to the executable path.`);
}

async function reservePort() {
  const server = net.createServer();
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  const address = server.address();
  assert(address && typeof address === "object", "reserved port did not have a TCP address");
  const { port } = address;
  await new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
  return port;
}

async function startDemoServer({ privacyMode = false } = {}) {
  const port = await reservePort();
  const cargoBin = findExecutable(cargoCandidates, "cargo");
  const args = [
    "run",
    "--quiet",
    "--",
    "--demo",
    "--no-open",
    "--dev-assets",
    "--require-api-token",
    "--port",
    String(port),
  ];
  if (privacyMode) {
    args.push("--privacy-mode");
  }

  const env = {
    ...process.env,
    PATH: [process.env.PATH, ...cargoBinDirs].filter(Boolean).join(path.delimiter),
    RUSTUP_TOOLCHAIN: process.env.RUSTUP_TOOLCHAIN || "stable",
  };
  const child = spawn(cargoBin, args, {
    cwd: repoRoot,
    env,
    stdio: ["ignore", "pipe", "pipe"],
  });
  const logs = [];
  let resolved = false;
  let lineBuffer = "";

  const startup = new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      if (resolved) {
        return;
      }
      resolved = true;
      reject(new Error(`Perlustron demo server did not publish a startup URL within ${START_TIMEOUT_MS}ms. Logs:\n${logs.join("\n")}`));
    }, START_TIMEOUT_MS);

    const handleLine = (line) => {
      const safeLine = redact(line);
      if (safeLine.trim()) {
        logs.push(safeLine);
      }
      const match = line.match(/Serving Perlustron at\s+(http:\/\/[^\s]+)/);
      if (!match) {
        return;
      }
      const startupUrl = new URL(match[1]);
      const token = startupUrl.searchParams.get("token");
      if (!token || token === REDACTED_TOKEN) {
        return;
      }
      if (!resolved) {
        resolved = true;
        clearTimeout(timeout);
        resolve({
          child,
          port,
          token,
          baseUrl: `http://127.0.0.1:${port}`,
          privacyMode,
          logs,
        });
      }
    };

    const handleChunk = (chunk) => {
      lineBuffer += chunk.toString("utf8");
      const lines = lineBuffer.split(/\r?\n/);
      lineBuffer = lines.pop() || "";
      for (const line of lines) {
        handleLine(line);
      }
    };

    child.stdout.on("data", handleChunk);
    child.stderr.on("data", handleChunk);
    child.once("exit", (code, signal) => {
      if (lineBuffer.trim()) {
        handleLine(lineBuffer);
      }
      if (!resolved) {
        resolved = true;
        clearTimeout(timeout);
        reject(new Error(`Perlustron demo server exited before startup (code=${code}, signal=${signal}). Logs:\n${logs.join("\n")}`));
      }
    });
    child.once("error", (error) => {
      if (!resolved) {
        resolved = true;
        clearTimeout(timeout);
        reject(error);
      }
    });
  });

  const server = await startup;
  await waitForHttpOk(`${server.baseUrl}/`, "demo index");
  return server;
}

async function stopDemoServer(server) {
  if (!server?.child || server.child.exitCode !== null) {
    return;
  }
  server.child.kill("SIGTERM");
  const exited = once(server.child, "exit");
  await Promise.race([
    exited,
    delay(5_000).then(() => {
      if (server.child.exitCode === null) {
        server.child.kill("SIGKILL");
      }
    }),
  ]);
}

async function waitForHttpOk(url, label) {
  const deadline = Date.now() + 20_000;
  let lastError;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (response.ok) {
        return;
      }
      lastError = new Error(`${label} returned HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await delay(250);
  }
  throw new Error(`${label} did not become ready: ${lastError?.message || "unknown error"}`);
}

async function fetchJson(url, expectedStatus = 200) {
  const response = await fetch(url, { cache: "no-store" });
  const body = await response.text();
  assert(
    response.status === expectedStatus,
    `Expected ${redact(url)} to return HTTP ${expectedStatus}, got ${response.status}: ${body.slice(0, 400)}`
  );
  return body ? JSON.parse(body) : null;
}

async function testApiTokenGate(server) {
  const unauthorized = await fetch(`${server.baseUrl}/api/session`, { cache: "no-store" });
  const unauthorizedBody = await unauthorized.text();
  assert(unauthorized.status === 401, `API token gate should reject missing token, got HTTP ${unauthorized.status}`);
  assert(
    unauthorizedBody.includes("missing or invalid local session token"),
    "API token gate should explain missing/invalid local token"
  );

  const graph = await fetchJson(`${server.baseUrl}/api/session?token=${encodeURIComponent(server.token)}`);
  assert(graph?.parserHealth, "authorized session response should include parserHealth");
  assert((graph?.prompts?.length || 0) > 0, "authorized demo graph should include prompts");
  assert((graph?.ui?.totalTurns || 0) > 0, "authorized demo graph should include renderable turns");
  return graph;
}

function requestUrlAllowed(rawUrl, baseOrigin) {
  const url = new URL(rawUrl);
  if (["about:", "data:", "blob:"].includes(url.protocol)) {
    return true;
  }
  if (!["http:", "https:", "ws:", "wss:"].includes(url.protocol)) {
    return true;
  }
  return url.origin === baseOrigin;
}

async function waitForLoadedDemo(page) {
  await page.waitForSelector("#app", { timeout: UI_TIMEOUT_MS });
  await page.waitForFunction(
    () => {
      const turns = document.querySelector("#stage-turn-count")?.textContent?.trim() || "";
      const metadataRows = document.querySelectorAll("#metadata-list .root-row").length;
      return turns && !turns.startsWith("0 ") && metadataRows > 0;
    },
    null,
    { timeout: UI_TIMEOUT_MS }
  );
}

async function assertMode(page, selector, expectedTitle) {
  await page.click(selector);
  await page.waitForFunction(
    (title) => document.querySelector("#mode-panel-title")?.textContent?.trim() === title,
    expectedTitle,
    { timeout: UI_TIMEOUT_MS }
  );
  const hidden = await page.locator("#mode-panel").evaluate((node) => node.classList.contains("hidden"));
  assert(!hidden, `${expectedTitle} mode panel should be visible`);
}

async function assertSummaryDeepLink(page, server) {
  await page.goto(`${server.baseUrl}/?mode=summary&token=${encodeURIComponent(server.token)}`, { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => !window.location.search.includes("token="), null, { timeout: UI_TIMEOUT_MS });
  await waitForLoadedDemo(page);
  await page.waitForFunction(() => document.querySelector("#mode-panel-title")?.textContent?.trim() === "Summary", null, {
    timeout: UI_TIMEOUT_MS,
  });

  const summary = await page.evaluate(() => ({
    activeMode: document.querySelector("#mode-nav button.active")?.getAttribute("data-app-mode"),
    facts: document.querySelectorAll(".summary-fact").length,
    hidden: document.querySelector("#mode-panel")?.classList.contains("hidden"),
    text: document.querySelector("#mode-panel")?.textContent || "",
    visibleUrl: window.location.href,
  }));
  assert(summary.activeMode === "summary", "Summary deep link should activate the Summary tab");
  assert(summary.hidden === false, "Summary deep link should show the mode panel");
  assert(summary.facts >= 4, "Summary deep link should render summary fact sections");
  assert(summary.text.includes("API token required"), "Summary should expose token requirement status only");
  assert(summary.text.includes("Raw logs"), "Summary should expose raw log shareability status");
  assert(summary.visibleUrl.includes("mode=summary"), "Summary deep link should preserve mode=summary in the visible URL");
  assert(!summary.visibleUrl.includes("token="), "Summary deep link should strip token from the visible URL");
}

async function assertSummaryOpenEvidenceRoutesToRaw(page, server) {
  await page.goto(`${server.baseUrl}/?mode=summary&token=${encodeURIComponent(server.token)}`, { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => !window.location.search.includes("token="), null, { timeout: UI_TIMEOUT_MS });
  await waitForLoadedDemo(page);
  await page.waitForFunction(() => document.querySelector("#mode-panel-title")?.textContent?.trim() === "Summary", null, {
    timeout: UI_TIMEOUT_MS,
  });

  const expectedQueuedCount =
    (await fetchJson(`${server.baseUrl}/api/session?token=${encodeURIComponent(server.token)}`))?.insights?.inspectionQueue?.length ?? 0;
  const summaryInsights = await page.evaluate((queued) => {
    const legacyLabels = new Set(["Raw Evidence", "Timeline Evidence", "Transcript Evidence"]);
    const allActionButtons = Array.from(document.querySelectorAll(".summary-insights .mode-action-button"));
    const triggers = Array.from(document.querySelectorAll(".summary-insights .summary-evidence-trigger"));
    return {
      rows: document.querySelectorAll(".summary-insights .mode-linked-row").length,
      queued,
      viewEvidenceButtons: triggers.filter((button) => button.textContent?.trim() === "View Evidence").length,
      legacyEvidenceButtons: allActionButtons.filter((button) => legacyLabels.has(button.textContent?.trim() || "")).length,
      hiddenDrawers: document.querySelectorAll(".summary-insights .summary-evidence-drawer[hidden]").length,
      drawerRegions: document.querySelectorAll('.summary-insights .summary-evidence-drawer[role="region"]').length,
      triggersWithControls: triggers.filter(
        (button) => button.getAttribute("aria-controls") && button.getAttribute("aria-expanded") === "false"
      ).length,
    };
  }, expectedQueuedCount);
  const expectedVisibleRows = Math.min(summaryInsights.queued, 5);
  assert(
    summaryInsights.rows > 0 && summaryInsights.rows === expectedVisibleRows,
    "Summary should expose only the first five queued Insight findings"
  );
  assert(summaryInsights.viewEvidenceButtons === expectedVisibleRows, "Summary should expose one View Evidence CTA per queued finding");
  assert(summaryInsights.legacyEvidenceButtons === 0, "Summary should collapse repeated Raw/Timeline/Transcript evidence CTAs");
  assert(summaryInsights.hiddenDrawers === expectedVisibleRows, "Summary evidence drawers should start collapsed");
  assert(summaryInsights.drawerRegions === expectedVisibleRows, "Summary evidence drawers should be screen-reader regions");
  assert(summaryInsights.triggersWithControls === expectedVisibleRows, "Summary evidence triggers should describe collapsed drawer state");

  await page.locator(".summary-insights .summary-evidence-trigger", { hasText: "View Evidence" }).first().click();
  await page.waitForFunction(
    () => {
      const drawer = document.querySelector(".summary-insights .summary-evidence-drawer:not([hidden])");
      return drawer && drawer.querySelector('.summary-evidence-tabs button') && document.activeElement === drawer;
    },
    null,
    { timeout: UI_TIMEOUT_MS }
  );
  const drawer = await page.evaluate(() => {
    const openDrawer = document.querySelector(".summary-insights .summary-evidence-drawer:not([hidden])");
    const trigger = document.querySelector(".summary-insights .summary-evidence-trigger");
    return {
      triggerExpanded: trigger?.getAttribute("aria-expanded"),
      triggerText: trigger?.textContent?.trim(),
      text: openDrawer?.textContent || "",
      surfaceLabels: Array.from(openDrawer?.querySelectorAll(".summary-evidence-tabs button") || []).map(
        (button) => button.textContent?.trim() || ""
      ),
    };
  });
  assert(drawer.triggerExpanded === "true" && drawer.triggerText === "Hide Evidence", "View Evidence should expose expanded state");
  assert(drawer.text.includes("Summary") && drawer.text.includes("Evidence surfaces"), "Evidence drawer should include Summary and surface sections");
  for (const label of ["Timeline", "Transcript", "Raw JSON", "Insights"]) {
    assert(drawer.surfaceLabels.includes(label), `Evidence drawer should expose the ${label} surface`);
  }

  await page.locator(".summary-insights .summary-evidence-drawer:not([hidden]) .mode-action-button", { hasText: "Raw JSON" }).first().click();
  await page.waitForFunction(() => document.querySelector("#mode-panel-title")?.textContent?.trim() === "Raw", null, {
    timeout: UI_TIMEOUT_MS,
  });
  await page.waitForFunction(() => document.querySelectorAll("#mode-panel-content .virtual-text-line").length > 0, null, {
    timeout: UI_TIMEOUT_MS,
  });

  const evidence = await page.evaluate(() => {
    const virtualJsonText = Array.from(document.querySelectorAll("#mode-panel-content .virtual-text-line"))
      .map((line) => line.textContent || "")
      .join("\n");
    const panelJsonText = document.querySelector("#mode-panel-content pre")?.textContent || virtualJsonText;
    const parseObject = (text) => {
      try {
        const payload = JSON.parse(text);
        return payload && typeof payload === "object" && !Array.isArray(payload);
      } catch {
        return false;
      }
    };
    return {
      activeMode: document.querySelector("#mode-nav button.active")?.getAttribute("data-app-mode"),
      panelHidden: document.querySelector("#mode-panel")?.classList.contains("hidden"),
      panelSummary: document.querySelector("#mode-panel-summary")?.textContent?.trim(),
      panelJsonText,
      panelJsonObject: parseObject(panelJsonText),
      virtualRawViewport: Boolean(document.querySelector("#mode-panel-content .virtual-text-viewport")),
      rawJsonPreviewExists: Boolean(document.querySelector("#raw-json-preview")),
      eventPopupHidden: document.querySelector("#event-popup")?.classList.contains("hidden"),
      visibleUrl: window.location.href,
    };
  });
  assert(evidence.activeMode === "raw", "Raw JSON should route to the Raw evidence surface");
  assert(evidence.panelHidden === false, "Raw JSON should show a visible evidence panel");
  assert(evidence.panelSummary === "Selected event", "Raw JSON should preserve the selected event in Raw mode");
  assert(evidence.virtualRawViewport, "Raw JSON should use the virtualized Raw text viewer");
  assert(evidence.panelJsonObject, "Raw JSON should expose parseable selected event JSON");
  assert(!evidence.rawJsonPreviewExists, "Removed Raw JSON preview should stay out of the DOM");
  assert(evidence.eventPopupHidden === true, "Raw JSON should not reveal Map-only Event Context outside Map mode");
  assert(evidence.visibleUrl.includes("mode=raw"), "Raw JSON should update the visible URL to the evidence mode");
  assert(!evidence.visibleUrl.includes("token="), "Raw JSON should keep the visible URL token-stripped");

  for (const [label, mode, title] of [
    ["Timeline", "timeline", "Timeline"],
    ["Transcript", "transcript", "Transcript"],
  ]) {
    await page.goto(`${server.baseUrl}/?mode=summary&token=${encodeURIComponent(server.token)}`, { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => !window.location.search.includes("token="), null, { timeout: UI_TIMEOUT_MS });
    await waitForLoadedDemo(page);
    await page.locator(".summary-insights .summary-evidence-trigger", { hasText: "View Evidence" }).first().click();
    await page.waitForFunction(() => document.querySelector(".summary-insights .summary-evidence-drawer:not([hidden])"), null, {
      timeout: UI_TIMEOUT_MS,
    });
    await page.locator(".summary-insights .summary-evidence-drawer:not([hidden]) .mode-action-button", { hasText: label }).first().click();
    await page.waitForFunction((expectedTitle) => document.querySelector("#mode-panel-title")?.textContent?.trim() === expectedTitle, title, {
      timeout: UI_TIMEOUT_MS,
    });
    const routed = await page.evaluate(() => ({
      activeMode: document.querySelector("#mode-nav button.active")?.getAttribute("data-app-mode"),
      panelHidden: document.querySelector("#mode-panel")?.classList.contains("hidden"),
      eventPopupHidden: document.querySelector("#event-popup")?.classList.contains("hidden"),
      visibleUrl: window.location.href,
    }));
    assert(routed.activeMode === mode, `${label} should route to ${title} mode`);
    assert(routed.panelHidden === false, `${label} should show a visible evidence panel`);
    assert(routed.eventPopupHidden === true, `${label} should not reveal Map-only Event Context outside Map mode`);
    assert(routed.visibleUrl.includes(`mode=${mode}`), `${label} should update the visible URL to ${mode}`);
    assert(!routed.visibleUrl.includes("token="), `${label} should keep the visible URL token-stripped`);
  }

  await page.goto(`${server.baseUrl}/?mode=summary&token=${encodeURIComponent(server.token)}`, { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => !window.location.search.includes("token="), null, { timeout: UI_TIMEOUT_MS });
  await waitForLoadedDemo(page);
  await page.locator(".summary-insights .summary-evidence-trigger", { hasText: "View Evidence" }).first().click();
  await page.waitForFunction(() => document.querySelector(".summary-insights .summary-evidence-drawer:not([hidden])"), null, {
    timeout: UI_TIMEOUT_MS,
  });
  await page.locator(".summary-insights .summary-evidence-drawer:not([hidden]) .mode-action-button", { hasText: "Insights" }).first().click();
  await page.waitForFunction(() => document.querySelector("#mode-panel-title")?.textContent?.trim() === "Insights", null, {
    timeout: UI_TIMEOUT_MS,
  });
  const insightRoute = await page.evaluate(() => ({
    activeMode: document.querySelector("#mode-nav button.active")?.getAttribute("data-app-mode"),
    panelHidden: document.querySelector("#mode-panel")?.classList.contains("hidden"),
    panelSummary: document.querySelector("#mode-panel-summary")?.textContent?.trim() || "",
    eventPopupHidden: document.querySelector("#event-popup")?.classList.contains("hidden"),
    visibleUrl: window.location.href,
  }));
  assert(insightRoute.activeMode === "insights", "Insights should route to the Insights evidence surface");
  assert(insightRoute.panelHidden === false, "Insights should show a visible evidence panel");
  assert(insightRoute.panelSummary.includes("Queued insight selected"), "Insights should keep the selected finding context");
  assert(insightRoute.eventPopupHidden === true, "Insights should not reveal Map-only Event Context outside Map mode");
  assert(insightRoute.visibleUrl.includes("mode=insights"), "Insights should update the visible URL to insights");
  assert(!insightRoute.visibleUrl.includes("token="), "Insights should keep the visible URL token-stripped");
}

async function assertInsightsPrioritizeSignals(page, server) {
  await page.goto(`${server.baseUrl}/?mode=insights&token=${encodeURIComponent(server.token)}`, { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => !window.location.search.includes("token="), null, { timeout: UI_TIMEOUT_MS });
  await waitForLoadedDemo(page);
  await page.waitForFunction(() => document.querySelector("#mode-panel-title")?.textContent?.trim() === "Insights", null, {
    timeout: UI_TIMEOUT_MS,
  });

  const insightData = (await fetchJson(`${server.baseUrl}/api/session?token=${encodeURIComponent(server.token)}`))?.insights;
  const prioritySignals = (insightData?.inspectionQueue || []).filter(
    (item) => item.title !== "Repeated file activity" && (item.severity === "high" || item.severity === "warning")
  );
  const fallbackSignals = (insightData?.inspectionQueue || []).filter((item) => item.title !== "Repeated file activity");
  const priorityGroups = new Set((prioritySignals.length ? prioritySignals : fallbackSignals).map((item) => item.title));
  const expectedPriorityRows = Math.min(priorityGroups.size, 10);
  const fileChurnCount = (insightData?.repeatedPatterns || []).filter((pattern) => pattern.patternType === "file_activity").length;

  const insights = await page.evaluate(() => {
    const priorityText = Array.from(document.querySelectorAll(".mode-linked-row strong")).map((node) => node.textContent?.trim() || "");
    const suspiciousCard = Array.from(document.querySelectorAll("#mode-panel-content .mode-card")).find(
      (card) => card.querySelector("h3")?.textContent?.trim() === "Suspicious Tool Calls"
    );
    return {
      summary: document.querySelector("#mode-panel-summary")?.textContent?.trim() || "",
      cardHeadings: Array.from(document.querySelectorAll("#mode-panel-content .mode-card h3")).map((node) => node.textContent?.trim() || ""),
      priorityRows: document.querySelectorAll(".mode-linked-row").length,
      priorityText,
      suspiciousText: suspiciousCard?.textContent || "",
      fileChurnExists: Boolean(document.querySelector(".file-churn-details")),
      fileChurnOpen: document.querySelector(".file-churn-details")?.hasAttribute("open") || false,
      fileChurnSummary: document.querySelector(".file-churn-details summary")?.textContent?.trim() || "",
      panelText: document.querySelector("#mode-panel-content")?.textContent || "",
    };
  });

  assert(insights.summary.includes("priority signal groups"), "Insights summary should use grouped priority signal wording");
  assert(insights.summary.includes("file-churn patterns"), "Insights summary should separate file churn from priority signals");
  assert(insights.cardHeadings.includes("How To Read This"), "Insights should start with heuristic guidance");
  assert(insights.cardHeadings.includes("Priority Signals"), "Insights should rename the main queue to Priority Signals");
  assert(insights.cardHeadings.includes("Repeated Tool Patterns"), "Insights should separate repeated tool patterns from file churn");
  assert(insights.priorityRows === expectedPriorityRows, "Insights should cap the priority signal list");
  assert(!insights.priorityText.some((text) => text.includes("Repeated file activity")), "Priority Signals should not include repeated file activity rows");
  assert(new Set(insights.priorityText.map((text) => text.replace(/^\d+\.\s*/, "").replace(/\s+\(\d[\d,]*\)$/, ""))).size === insights.priorityText.length, "Priority Signals should not repeat the same signal category");
  assert(!/\bLine \d+/.test(insights.suspiciousText), "Suspicious Tool Calls should summarize reasons instead of repeating individual priority rows");
  assert(insights.fileChurnExists === fileChurnCount > 0, "Insights should expose file churn only when repeated file patterns exist");
  assert(!insights.fileChurnOpen, "File Churn should be collapsed by default");
  if (fileChurnCount > 0) {
    assert(insights.fileChurnSummary.includes("File Churn"), "Collapsed file churn section should be clearly labeled");
  }
  assert(insights.panelText.includes("leads, not root cause"), "Insights should explain that signals are not root-cause verdicts");
  assert(insights.panelText.includes("grouped"), "Insights should explain that repeated rows are grouped");
}

async function assertSettingsButtonOpensVisibleSurfaceFromSummary(page, server) {
  await page.goto(`${server.baseUrl}/?mode=summary&token=${encodeURIComponent(server.token)}`, { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => !window.location.search.includes("token="), null, { timeout: UI_TIMEOUT_MS });
  await waitForLoadedDemo(page);
  await page.waitForFunction(() => document.querySelector("#mode-panel-title")?.textContent?.trim() === "Summary", null, {
    timeout: UI_TIMEOUT_MS,
  });

  await page.click("#settings-button");
  await page.waitForTimeout(250);

  const settings = await page.evaluate(() => ({
    activeNavMode: document.querySelector("#mode-nav button.active")?.getAttribute("data-app-mode") || "",
    settingsButtonActive: document.querySelector("#settings-button")?.classList.contains("active"),
    panelHidden: document.querySelector("#mode-panel")?.classList.contains("hidden"),
    panelTitle: document.querySelector("#mode-panel-title")?.textContent?.trim(),
    panelStatus: document.querySelector("#mode-panel-status")?.textContent?.trim(),
    panelSummary: document.querySelector("#mode-panel-summary")?.textContent?.trim(),
    panelText: document.querySelector("#mode-panel")?.textContent || "",
    eventPopupHidden: document.querySelector("#event-popup")?.classList.contains("hidden"),
    visibleUrl: window.location.href,
  }));

  assert(!settings.activeNavMode, "Settings mode should not keep a redundant active nav tab");
  assert(settings.settingsButtonActive === true, "Settings cog should show the active settings state");
  assert(settings.panelHidden === false, "Settings button should open a visible mode panel outside Map mode");
  assert(settings.panelTitle === "Settings", "Settings button should show a visible Settings panel from Summary");
  assert(settings.panelStatus === "Advanced", "Settings panel should show an advanced maturity label");
  assert(settings.panelSummary === "Local observatory settings", "Settings panel should identify the local observatory control surface");
  assert(settings.panelText.includes("Renderer") && settings.panelText.includes("Backend"), "Settings panel should show renderer/backend details");
  assert(settings.eventPopupHidden === true, "Settings button should not reveal Map-only Event Context outside Map mode");
  assert(settings.visibleUrl.includes("mode=settings"), "Settings button should deep-link the visible Settings surface");
  assert(!settings.visibleUrl.includes("token="), "Settings button should keep the visible URL token-stripped");
}

async function openEventPopup(page) {
  await page.click('[data-app-mode="map"]');
  await page.waitForFunction(() => document.querySelector("#mode-panel")?.classList.contains("hidden"), null, {
    timeout: UI_TIMEOUT_MS,
  });

  const twoD = page.locator('[data-view-action="two-d"]');
  if ((await twoD.count()) > 0) {
    const twoDButton = twoD.first();
    if ((await twoDButton.getAttribute("aria-pressed")) !== "true") {
      await twoDButton.click({ force: true });
      await page.waitForTimeout(300);
    }
  }

  const canvas = page.locator("#space");
  const box = await canvas.boundingBox();
  assert(box, "canvas should have a visible bounding box");
  const points = [
    [0.5, 0.5],
    [0.45, 0.5],
    [0.55, 0.5],
    [0.5, 0.45],
    [0.5, 0.55],
    [0.38, 0.5],
    [0.62, 0.5],
    [0.5, 0.35],
    [0.5, 0.65],
    [0.35, 0.38],
    [0.65, 0.38],
    [0.35, 0.62],
    [0.65, 0.62],
  ];

  for (const [x, y] of points) {
    await page.mouse.click(box.x + box.width * x, box.y + box.height * y);
    await page.waitForTimeout(150);
    const opened = await page.locator("#event-popup").evaluate((node) => !node.classList.contains("hidden"));
    if (opened) {
      return true;
    }
  }
  return false;
}

async function withViewports(page, viewports, callback) {
  const originalViewport = page.viewportSize() || { width: 1440, height: 960 };
  try {
    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.waitForFunction(
        ([width, height]) => window.innerWidth === width && window.innerHeight === height,
        [viewport.width, viewport.height],
        { timeout: UI_TIMEOUT_MS }
      );
      await callback(viewport);
    }
  } finally {
    await page.setViewportSize(originalViewport);
    await page.waitForFunction(
      ([width, height]) => window.innerWidth === width && window.innerHeight === height,
      [originalViewport.width, originalViewport.height],
      { timeout: UI_TIMEOUT_MS }
    );
  }
}

async function withViewport(page, viewport, callback) {
  let result;
  await withViewports(page, [viewport], async () => {
    result = await callback();
  });
  return result;
}

async function assertMediumResolutionStatusBar(page) {
  const viewports = RESPONSIVE_STATUS_WIDTHS.map((width) => ({ width, height: RESPONSIVE_STATUS_HEIGHT }));
  await withViewports(page, viewports, async ({ width }) => {
    const mediumStatus = await page.evaluate(() => {
      const statusItems = document.querySelector("#metadata-list");
      const rows = Array.from(document.querySelectorAll("#metadata-list .root-row"));
      const rowWidths = rows.map((row) => row.getBoundingClientRect().width);
      return {
        clientWidth: statusItems?.clientWidth || 0,
        rowCount: rows.length,
        rowMaxWidth: rowWidths.length ? Math.max(...rowWidths) : 0,
        scrollWidth: statusItems?.scrollWidth || 0,
        scrollbarWidth: statusItems ? getComputedStyle(statusItems).scrollbarWidth : "",
      };
    });

    assert(mediumStatus.rowCount > 0, `${width}px status bar should render metadata rows`);
    assert(mediumStatus.scrollbarWidth === "none", `${width}px status bar should hide the native scrollbar`);
    assert(
      mediumStatus.scrollWidth <= mediumStatus.clientWidth + 1,
      `${width}px status bar should fit metadata without horizontal overflow`
    );
    assert(mediumStatus.rowMaxWidth <= 280, `${width}px status rows should cap long values`);
  });
}

async function assertLowResolutionChrome(page) {
  const lowChrome = await withViewport(page, LOW_CHROME_VIEWPORT, () =>
    page.evaluate(() => {
      const modeNav = document.querySelector("#mode-nav");
      const statusItems = document.querySelector("#metadata-list");
      const buttons = Array.from(document.querySelectorAll("#mode-nav button"));
      const experimentalButton = document.querySelector('#mode-nav [data-maturity="experimental"]');
      const modeNavStyle = modeNav ? getComputedStyle(modeNav) : null;
      const statusStyle = statusItems ? getComputedStyle(statusItems) : null;
      const navBox = modeNav?.getBoundingClientRect();
      const buttonBoxes = buttons.map((button) => button.getBoundingClientRect());
      const badgeStyle = experimentalButton ? getComputedStyle(experimentalButton, "::before") : null;
      return {
        badgeWidth: badgeStyle ? Number.parseFloat(badgeStyle.width) : 0,
        buttonMaxHeight: buttonBoxes.length ? Math.max(...buttonBoxes.map((box) => box.height)) : 0,
        navHeight: navBox?.height || 0,
        navOverflowY: modeNavStyle?.overflowY || "",
        navScrollbarWidth: modeNavStyle?.scrollbarWidth || "",
        statusMaskImage: statusStyle?.maskImage || statusStyle?.webkitMaskImage || "",
        statusOverflowX: statusStyle?.overflowX || "",
        statusScrollbarWidth: statusStyle?.scrollbarWidth || "",
      };
    })
  );

  assert(lowChrome.navScrollbarWidth === "none", "low-resolution mode nav should hide the native scrollbar");
  assert(lowChrome.navOverflowY === "hidden", "low-resolution mode nav should prevent vertical badge overflow");
  assert(lowChrome.badgeWidth > 0 && lowChrome.badgeWidth <= 8, "low-resolution mode nav should collapse maturity labels to markers");
  assert(lowChrome.navHeight > 0 && lowChrome.buttonMaxHeight <= lowChrome.navHeight, "low-resolution mode buttons should stay within the nav rail");
  assert(lowChrome.statusScrollbarWidth === "none", "low-resolution status bar should hide the native scrollbar");
  assert(lowChrome.statusOverflowX === "auto", "low-resolution status bar should remain horizontally scrollable");
  assert(lowChrome.statusMaskImage && lowChrome.statusMaskImage !== "none", "low-resolution status bar should fade overflowing metadata");
}

async function testBrowserUi(server, browser) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 960 },
    ignoreHTTPSErrors: false,
  });
  const page = await context.newPage();
  const baseOrigin = new URL(server.baseUrl).origin;
  const externalRequests = [];
  const consoleErrors = [];
  const pageErrors = [];

  page.on("request", (request) => {
    const url = request.url();
    if (!requestUrlAllowed(url, baseOrigin)) {
      externalRequests.push(redact(url));
    }
  });
  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });
  page.on("pageerror", (error) => pageErrors.push(error.stack || error.message));

  try {
    await page.goto(`${server.baseUrl}/?token=${encodeURIComponent(server.token)}`, { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => !window.location.search.includes("token="), null, { timeout: UI_TIMEOUT_MS });
    await waitForLoadedDemo(page);

    const chrome = await page.evaluate(() => ({
      betaBannerText: document.querySelector("#beta-banner")?.textContent?.replace(/\s+/g, " ").trim() || "",
      turnCount: document.querySelector("#stage-turn-count")?.textContent?.trim(),
      statusRows: document.querySelectorAll("#metadata-list .root-row").length,
      statusIcons: document.querySelectorAll("#metadata-list .root-icon svg").length,
      statusDots: document.querySelectorAll("#metadata-list .root-dot").length,
      modeButtons: Array.from(document.querySelectorAll("[data-app-mode]")).map((button) => button.textContent?.trim()),
      modeStatuses: Array.from(document.querySelectorAll("[data-app-mode]")).map((button) => [
        button.getAttribute("data-app-mode"),
        {
          label: button.getAttribute("data-status"),
          maturity: button.getAttribute("data-maturity"),
        },
      ]),
      panelStatus: document.querySelector("#mode-panel-status")?.textContent?.trim() || "",
      settingsIcon: Boolean(document.querySelector("#settings-button svg")),
      settingsText: document.querySelector("#settings-button")?.textContent?.trim(),
      sessionsSidebarExists: Boolean(document.querySelector("#inspector-dock")),
      sessionTitleExists: Boolean(document.querySelector("#session-title")),
      rootListExists: Boolean(document.querySelector("#root-list")),
      visibleUrl: window.location.href,
    }));
    assert(chrome.turnCount && !chrome.turnCount.startsWith("0 "), "demo should render non-zero turn count");
    assert(chrome.betaBannerText.includes("Beta") && chrome.betaBannerText.includes("experimental"), "beta banner should identify experimental beta surfaces");
    assert(chrome.statusRows > 0, "demo should render status-bar metadata");
    assert(chrome.statusIcons === chrome.statusRows, "status-bar metadata should use semantic icons for every row");
    assert(chrome.statusDots === 0, "status-bar metadata should not render generic color squares");
    assert(chrome.settingsIcon && !chrome.settingsText, "top-bar Settings control should be an icon-only cog button");
    assert(chrome.modeButtons.includes("Summary"), "Summary tab should render");
    assert(chrome.modeButtons.includes("Map"), "Map tab should render");
    assert(chrome.modeButtons.includes("Timeline"), "Timeline tab should render");
    assert(chrome.modeButtons.includes("Transcript"), "Transcript tab should render");
    for (const tab of ["Health", "Insights", "Diff", "Raw", "Export"]) {
      assert(chrome.modeButtons.includes(tab), `${tab} tab should render`);
    }
    const modeStatus = Object.fromEntries(chrome.modeStatuses);
    assert(
      modeStatus.summary?.label === "Beta" && modeStatus.map?.maturity === "beta" && modeStatus.timeline?.maturity === "beta",
      "primary modes should be labeled beta"
    );
    assert(
      modeStatus.insights?.label === "Experimental" && modeStatus.diff?.maturity === "experimental",
      "heuristic modes should be labeled experimental"
    );
    assert(
      modeStatus.health?.label === "Advanced" && modeStatus.raw?.maturity === "advanced" && modeStatus.export?.maturity === "advanced",
      "utility modes should be labeled advanced"
    );
    assert(chrome.panelStatus === "Beta", "Summary panel should show a beta maturity label");
    assert(!chrome.modeButtons.includes("Settings"), "Settings should not render as a redundant mode tab");
    await assertMediumResolutionStatusBar(page);
    await assertLowResolutionChrome(page);
    await assertSummaryDeepLink(page, server);
    await assertSummaryOpenEvidenceRoutesToRaw(page, server);
    await assertInsightsPrioritizeSignals(page, server);
    await assertSettingsButtonOpensVisibleSurfaceFromSummary(page, server);
    assert(!chrome.sessionsSidebarExists, "Gutted sessions sidebar should not render");
    assert(!chrome.sessionTitleExists, "Redundant stage session title should not render");
    assert(!chrome.rootListExists, "Redundant stage roots should not render");
    assert(!chrome.visibleUrl.includes("token="), "token should be removed from the visible browser URL");

    await assertMode(page, '[data-app-mode="timeline"]', "Timeline");
    await assertMode(page, '[data-app-mode="transcript"]', "Transcript");
    await page.click('[data-app-mode="health"]');
    await page.waitForFunction(() => document.querySelector("#mode-panel-title")?.textContent?.trim() === "Health", null, {
      timeout: UI_TIMEOUT_MS,
    });

    const popupOpened = await openEventPopup(page);
    assert(popupOpened, "clicking a rendered event should open Event Context popup");
    const popupTitle = await page.locator("#context-event-title").textContent();
    assert(popupTitle && popupTitle.trim() !== "Latest context", "Event Context popup should show a concrete event title");
    await page.click("#stream-minimize");
    await page.waitForFunction(() => document.querySelector("#event-popup")?.classList.contains("compact"), null, {
      timeout: UI_TIMEOUT_MS,
    });
    await page.click('[data-app-mode="timeline"]');
    await page.waitForFunction(() => document.querySelector("#event-popup")?.classList.contains("hidden"), null, {
      timeout: UI_TIMEOUT_MS,
    });

    assert(externalRequests.length === 0, `browser made third-party requests:\n${externalRequests.join("\n")}`);
    assert(pageErrors.length === 0, `browser page errors:\n${pageErrors.join("\n")}`);
    assert(consoleErrors.length === 0, `browser console errors:\n${consoleErrors.join("\n")}`);
  } finally {
    await context.close();
  }
}

function privacyPathLeaks(value, jsonPath = "$", leaks = []) {
  if (value === null || value === undefined) {
    return leaks;
  }
  if (typeof value === "string") {
    if (/(?:^|\s)(?:[A-Za-z]:\\|\/(?:home|tmp)\/)/.test(value) || /(?:^|[/\\])fixtures(?:[/\\]|$)/i.test(value) || /\.jsonl\b/i.test(value)) {
      leaks.push(`${jsonPath}: ${value}`);
    }
    return leaks;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => privacyPathLeaks(item, `${jsonPath}[${index}]`, leaks));
    return leaks;
  }
  if (typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      privacyPathLeaks(child, `${jsonPath}.${key}`, leaks);
    }
  }
  return leaks;
}

async function testPrivacyMode(server, browser) {
  const graph = await fetchJson(`${server.baseUrl}/api/session?token=${encodeURIComponent(server.token)}`);
  assert((graph?.parserHealth?.redactedFieldCount || 0) > 0, "privacy mode should record redacted fields");
  const imageCount = (graph?.prompts || []).reduce((sum, prompt) => sum + (prompt.images?.length || 0), 0);
  assert(imageCount === 0, "privacy mode should strip prompt image metadata from graph responses");
  const leaks = privacyPathLeaks(graph);
  assert(leaks.length === 0, `privacy mode graph exposed local paths:\n${leaks.join("\n")}`);

  const status = await fetchJson(`${server.baseUrl}/api/session/status?token=${encodeURIComponent(server.token)}`);
  const statusLeaks = privacyPathLeaks(status);
  assert(statusLeaks.length === 0, `privacy mode status exposed local paths:\n${statusLeaks.join("\n")}`);

  const sessions = await fetchJson(`${server.baseUrl}/api/sessions?token=${encodeURIComponent(server.token)}`);
  const sessionListLeaks = privacyPathLeaks(sessions);
  assert(sessionListLeaks.length === 0, `privacy mode session list exposed local paths:\n${sessionListLeaks.join("\n")}`);

  const imageResponse = await fetch(`${server.baseUrl}/api/session/image/0/0?token=${encodeURIComponent(server.token)}`, {
    cache: "no-store",
  });
  assert(imageResponse.status === 403, `privacy mode image route should be disabled, got HTTP ${imageResponse.status}`);

  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  const baseOrigin = new URL(server.baseUrl).origin;
  const externalRequests = [];
  const consoleErrors = [];
  page.on("request", (request) => {
    const url = request.url();
    if (!requestUrlAllowed(url, baseOrigin)) {
      externalRequests.push(redact(url));
    }
  });
  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  try {
    await page.goto(`${server.baseUrl}/?token=${encodeURIComponent(server.token)}`, { waitUntil: "domcontentloaded" });
    await waitForLoadedDemo(page);
    const bodyText = await page.locator("body").innerText();
    assert(!/\/(?:home|tmp)\//.test(bodyText), "privacy mode UI should not expose Unix local paths");
    assert(!/[A-Za-z]:\\/.test(bodyText), "privacy mode UI should not expose Windows local paths");
    assert((await page.locator("#stream-images img").count()) === 0, "privacy mode UI should not render embedded images");
    assert(externalRequests.length === 0, `privacy page made third-party requests:\n${externalRequests.join("\n")}`);
    assert(consoleErrors.length === 0, `privacy page console errors:\n${consoleErrors.join("\n")}`);
  } finally {
    await context.close();
  }
}

async function main() {
  const chromePath = findExecutable(chromeCandidates, "chrome");
  console.log(`browser smoke: launching ${chromePath}`);
  const browser = await chromium.launch({
    executablePath: chromePath,
    headless: true,
    args: browserLaunchArgs,
  });

  const servers = [];
  try {
    const demoServer = await startDemoServer();
    servers.push(demoServer);
    await testApiTokenGate(demoServer);
    await testBrowserUi(demoServer, browser);
    console.log("browser smoke: demo load, token gate, tabs/panels, event popup, and no-third-party checks passed");

    const privateServer = await startDemoServer({ privacyMode: true });
    servers.push(privateServer);
    await testPrivacyMode(privateServer, browser);
    console.log("browser smoke: privacy mode path/image checks passed");
  } finally {
    await browser.close().catch(() => {});
    await Promise.all(servers.map((server) => stopDemoServer(server)));
  }
}

main().catch((error) => {
  console.error(redact(error.stack || error.message || error));
  process.exit(1);
});
