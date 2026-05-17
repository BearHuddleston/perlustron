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
  const args = ["run", "--quiet", "--", "--demo", "--no-open", "--dev-assets", "--port", String(port)];
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
      const title = document.querySelector("#session-title")?.textContent?.trim() || "";
      const rows = document.querySelectorAll("#prompt-list .prompt-row").length;
      const turns = document.querySelector("#stage-turn-count")?.textContent?.trim() || "";
      return title && title !== "Loading session" && rows > 0 && !turns.startsWith("0 ");
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

async function assertInspectorTab(page, tabName) {
  await page.click(`[data-inspector-tab="${tabName}"]`);
  await page.waitForFunction(
    (tab) => document.querySelector(`[data-inspector-panel="${tab}"]`)?.classList.contains("active"),
    tabName,
    { timeout: UI_TIMEOUT_MS }
  );
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
  assert(summary.facts >= 4, "Summary deep link should render summary fact cards");
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

  const hasEvidenceCta = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".summary-triage .mode-action-button")).some(
      (button) => button.textContent?.trim() === "Open Evidence"
    )
  );
  assert(hasEvidenceCta, "Summary should expose an Open Evidence CTA");
  await page.locator(".summary-triage .mode-action-button", { hasText: "Open Evidence" }).click();
  await page.waitForFunction(() => document.querySelector("#mode-panel-title")?.textContent?.trim() === "Raw", null, {
    timeout: UI_TIMEOUT_MS,
  });

  const evidence = await page.evaluate(() => {
    const panelJsonText = document.querySelector("#mode-panel-content pre")?.textContent || "";
    const rawJsonText = document.querySelector("#raw-json-preview")?.textContent || "";
    const parseObject = (text) => {
      try {
        const payload = JSON.parse(text);
        return payload && typeof payload === "object" && !Array.isArray(payload);
      } catch {
        return false;
      }
    };
    return {
      utilityMode: document.querySelector("#utility-mode-select")?.value,
      panelHidden: document.querySelector("#mode-panel")?.classList.contains("hidden"),
      panelSummary: document.querySelector("#mode-panel-summary")?.textContent?.trim(),
      panelJsonText,
      panelJsonObject: parseObject(panelJsonText),
      rawJsonText,
      rawJsonObject: parseObject(rawJsonText),
      eventPopupHidden: document.querySelector("#event-popup")?.classList.contains("hidden"),
      visibleUrl: window.location.href,
    };
  });
  assert(evidence.utilityMode === "raw", "Open Evidence should route to the Raw evidence surface");
  assert(evidence.panelHidden === false, "Open Evidence should show a visible evidence panel");
  assert(evidence.panelSummary === "Selected event", "Open Evidence should preserve the selected event in Raw mode");
  assert(evidence.panelJsonObject && evidence.rawJsonObject, "Open Evidence should expose parseable selected event JSON");
  assert(evidence.panelJsonText === evidence.rawJsonText, "Open Evidence should keep panel and Raw preview on the same selected payload");
  assert(evidence.eventPopupHidden === true, "Open Evidence should not reveal Map-only Event Context outside Map mode");
  assert(evidence.visibleUrl.includes("mode=raw"), "Open Evidence should update the visible URL to the evidence mode");
  assert(!evidence.visibleUrl.includes("token="), "Open Evidence should keep the visible URL token-stripped");
}

async function openEventPopup(page) {
  await page.click('[data-app-mode="map"]');
  await page.waitForFunction(() => document.querySelector("#mode-panel")?.classList.contains("hidden"), null, {
    timeout: UI_TIMEOUT_MS,
  });

  const compactionRows = await page.locator("#prompt-list .compaction-row").count();
  if (compactionRows > 0) {
    await page.locator("#prompt-list .compaction-row").first().click();
    await page.waitForTimeout(250);
    const opened = await page.locator("#event-popup").evaluate((node) => !node.classList.contains("hidden"));
    if (opened) {
      return true;
    }
  }

  const promptRows = page.locator("#prompt-list .prompt-row");
  const promptRowCount = await promptRows.count();
  for (let index = 0; index < Math.min(promptRowCount, 4); index += 1) {
    await promptRows.nth(index).click();
    await page.waitForTimeout(250);
    const opened = await page.locator("#event-popup").evaluate((node) => !node.classList.contains("hidden"));
    if (opened) {
      return true;
    }
  }

  const twoD = page.locator('[data-view-action="two-d"]');
  if ((await twoD.count()) > 0) {
    await twoD.first().click({ force: true });
    await page.waitForTimeout(300);
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
      title: document.querySelector("#session-title")?.textContent?.trim(),
      turnCount: document.querySelector("#stage-turn-count")?.textContent?.trim(),
      modeButtons: Array.from(document.querySelectorAll("[data-app-mode]")).map((button) => button.textContent?.trim()),
      inspectorTabs: Array.from(document.querySelectorAll("[data-inspector-tab]")).map((button) => button.getAttribute("data-inspector-tab")),
      visibleUrl: window.location.href,
    }));
    assert(chrome.title && chrome.title !== "Loading session", "demo should load a concrete session title");
    assert(chrome.turnCount && !chrome.turnCount.startsWith("0 "), "demo should render non-zero turn count");
    assert(chrome.modeButtons.includes("Summary"), "Summary tab should render");
    assert(chrome.modeButtons.includes("Map"), "Map tab should render");
    assert(chrome.modeButtons.includes("Timeline"), "Timeline tab should render");
    assert(chrome.modeButtons.includes("Transcript"), "Transcript tab should render");
    await assertSummaryDeepLink(page, server);
    await assertSummaryOpenEvidenceRoutesToRaw(page, server);
    for (const tab of ["sessions", "saved", "raw", "health"]) {
      assert(chrome.inspectorTabs.includes(tab), `Inspector tab ${tab} should render`);
    }
    assert(!chrome.visibleUrl.includes("token="), "token should be removed from the visible browser URL");

    await assertInspectorTab(page, "saved");
    await assertInspectorTab(page, "raw");
    await assertInspectorTab(page, "health");
    await assertInspectorTab(page, "sessions");

    await assertMode(page, '[data-app-mode="timeline"]', "Timeline");
    await assertMode(page, '[data-app-mode="transcript"]', "Transcript");
    await page.selectOption("#utility-mode-select", "health");
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
