// SPDX-License-Identifier: MIT OR Apache-2.0

import {
  formatBytes,
  formatNumber,
  formatOptionalPercent,
  formatSessionModified,
  recordsLabel,
  shortPath,
} from "../utils/format";

const SUMMARY_INSPECTION_QUEUE_LIMIT = 5;

type SummaryAppMode = "summary" | "map" | "timeline" | "transcript" | "health" | "insights" | "diff" | "raw" | "export" | "settings";
type SummaryFactLine = [string, string];

interface DynamicToolSummary {
  name: string;
}

interface SummaryTotals {
  promptCount: number;
  callCount: number;
  completedCallCount: number;
  assistantMessageCount: number;
  fileChangeCount: number;
  compactionCount: number;
}

interface SummaryUi {
  sessionName: string;
  totalTurns: number;
}

interface SummaryMetadata {
  model: string | null;
  modelProvider: string | null;
  originator: string | null;
  cliVersion: string | null;
  dynamicTools: DynamicToolSummary[];
}

interface SummaryPrivacy {
  privacyMode: string;
  redactionProfile: string | null;
  apiTokenRequired: boolean;
  imageRouteBehavior: string;
  noTelemetry: boolean;
  noThirdPartyUploads: boolean;
}

interface SummaryShareability {
  rawLogsSafeToShare: boolean;
  rawLogCaution: string;
  sanitizedGraphNote: string;
}

interface SummaryParserHealth {
  parserVersion: string;
  schemaVersion: string;
  renderableEventCount: number;
  unknownEventCount: number;
  malformedLineCount: number;
  skippedLargePayloadCount: number;
  redactedFieldCount: number;
  imageCount: number;
  warnings: string[];
}

interface SummaryTokenTelemetry {
  latestTotalTokens: number | null;
  contextWindow: number | null;
  latestContextPercent: number | null;
  primaryRateLimitPercent: number | null;
  secondaryRateLimitPercent: number | null;
}

interface SummaryInspectionQueueItem {
  id: string;
  title: string;
  severity: string;
  confidence: string;
  directness: string;
  summary: string;
  explanation: string;
  eventIds: string[];
  lineNumbers: number[];
  redactionSafeSummary: string;
}

interface SummaryInsights {
  inspectionQueue: SummaryInspectionQueueItem[];
  warnings: string[];
}

export interface SummaryModeEventRow {
  id: string;
  lineNumber: number;
  node?: {
    id: string;
  };
}

export interface SummarySessionGraph {
  source: string;
  cwd: string | null;
  lineCount: number;
  byteLength: number;
  pendingBytes: number;
  lastModifiedAt: string;
  sessionPath: string;
  metadata: SummaryMetadata;
  privacySummary: SummaryPrivacy;
  shareabilitySummary: SummaryShareability;
  tokenTelemetry: SummaryTokenTelemetry;
  totals: SummaryTotals;
  parserHealth: SummaryParserHealth;
  insights: SummaryInsights;
  ui: SummaryUi;
}

interface SummaryModeOptions {
  graph: SummarySessionGraph | null;
  modePanelSummary: HTMLElement;
  modePanelContent: HTMLElement;
  modeCard(title: string, lines?: string[]): HTMLElement;
  modeParagraph(text: string): HTMLElement;
  modeButton(label: string, onClick: () => void | Promise<void>): HTMLButtonElement;
  modeEmpty(text: string): HTMLElement;
  selectAppMode(mode: SummaryAppMode): void;
  copyText(text: string, title?: string): void;
  copySafeShareSummary(): string;
  setRawModePayload(payload: unknown): void;
  modeTimelineRows(): SummaryModeEventRow[];
  focusEventByLine(lineNumber: number | null | undefined, title: string, payload: unknown, destination?: SummaryAppMode): void;
  showEvidenceFallback(title: string, payload: unknown, detail: string): void;
}

export function renderSummaryModePanel(options: SummaryModeOptions): void {
  const { graph, modePanelSummary, modePanelContent, modeCard, modeParagraph, modeButton, selectAppMode } = options;
  if (!graph) {
    modePanelSummary.textContent = "Waiting for session data";
    modePanelContent.replaceChildren(options.modeEmpty("Waiting for session data."));
    return;
  }

  const current = graph;
  const privacy = current.privacySummary;
  const shareability = current.shareabilitySummary;
  const telemetry = current.tokenTelemetry;
  const health = current.parserHealth;
  const sessionName = current.ui.sessionName || current.cwd?.split(/[\\/]/).filter(Boolean).at(-1) || `${sourceLabel(current.source)} session`;
  const rawShareStatus = shareability.rawLogsSafeToShare
    ? "Raw logs marked safe to share"
    : "Raw logs require review before sharing";

  modePanelSummary.textContent = `${rawShareStatus} - ${contextPressureSummary(telemetry)}`;

  const shell = document.createElement("div");
  shell.className = "summary-shell";

  const hero = modeCard("Session Summary");
  hero.classList.add("summary-hero");
  hero.append(
    modeParagraph(
      `${sessionName} is a ${sourceLabel(current.source)} trace with ${formatNumber(current.ui.totalTurns)} turns, ${formatNumber(current.totals.callCount)} tool calls, and ${formatNumber(current.totals.fileChangeCount)} file changes.`
    ),
    modeParagraph(
      `${rawShareStatus}. Sanitized graph/export and copy-safe references reduce exposure compared with raw logs, but they still require human judgment before sharing.`
    )
  );

  const triage = document.createElement("div");
  triage.className = "summary-triage";
  const whatHappened = modeCard("What Happened", [
    `${formatNumber(current.ui.totalTurns)} turns across ${formatNumber(current.totals.promptCount)} prompts`,
    `${formatNumber(current.totals.completedCallCount)} completed tool calls; ${formatNumber(current.totals.fileChangeCount)} file changes`,
    `${formatNumber(health.unknownEventCount)} unknown and ${formatNumber(health.malformedLineCount)} malformed parser records`,
  ]);
  const whatActions = document.createElement("div");
  whatActions.className = "mode-actions";
  whatActions.append(
    modeButton("Open Timeline", () => selectAppMode("timeline")),
    modeButton("Read Transcript", () => selectAppMode("transcript"))
  );
  whatHappened.append(whatActions);
  const shareCard = modeCard("Safe To Share", [
    rawShareStatus,
    shareability.sanitizedGraphNote || "Sanitized graph data is intended for UI and report sharing after review.",
    privacy.apiTokenRequired ? "Local API token is required for browser/API access; token value is not shown." : "No local API token required by this run.",
  ]);
  const shareActions = document.createElement("div");
  shareActions.className = "mode-actions";
  shareActions.append(
    modeButton("Copy Share Summary", () => options.copyText(options.copySafeShareSummary(), "Copy-safe share summary copied")),
    modeButton("Open Export", () => selectAppMode("export")),
    modeButton("Audit Raw", () => selectAppMode("raw"))
  );
  shareCard.append(shareActions);
  triage.append(whatHappened, renderSummaryInsightQueue(current.insights, options), shareCard);

  const grid = document.createElement("div");
  grid.className = "summary-shell-grid";
  grid.append(
    summaryFact("Session", [
      ["Source", sourceLabel(current.source)],
      ["Session", sessionName],
      ["Model", current.metadata.model || current.metadata.modelProvider || "unknown"],
      ["CLI", [current.metadata.originator, current.metadata.cliVersion].filter(Boolean).join(" ") || "unknown"],
      ["Records", recordsLabel(current.lineCount, current.pendingBytes)],
      ["Size", formatBytes(current.byteLength)],
      ["Modified", formatSessionModified(current.lastModifiedAt) || "unknown"],
      ["Path", shortPath(current.sessionPath) || current.sessionPath],
    ]),
    summaryFact("Activity", [
      ["Prompts", formatNumber(current.totals.promptCount)],
      ["Turns", formatNumber(current.ui.totalTurns)],
      ["Tool calls", `${formatNumber(current.totals.completedCallCount)} / ${formatNumber(current.totals.callCount)} completed`],
      ["Assistant messages", formatNumber(current.totals.assistantMessageCount)],
      ["File changes", formatNumber(current.totals.fileChangeCount)],
      ["Compactions", formatNumber(current.totals.compactionCount)],
      ["Dynamic tools", current.metadata.dynamicTools.length ? current.metadata.dynamicTools.map((tool) => tool.name).slice(0, 5).join(", ") : "none logged"],
    ]),
    summaryFact("Privacy", [
      ["Mode", privacy.privacyMode || "unknown"],
      ["Redaction profile", privacy.redactionProfile || "default"],
      ["API token required", privacy.apiTokenRequired ? "yes" : "no"],
      ["Images", privacy.imageRouteBehavior || "not logged"],
      ["Telemetry", privacy.noTelemetry ? "disabled" : "check deployment settings"],
      ["Third-party uploads", privacy.noThirdPartyUploads ? "disabled" : "check before sharing"],
    ]),
    summaryFact("Shareability", [
      ["Raw logs", shareability.rawLogsSafeToShare ? "safe to share" : "review/redact first"],
      ["Raw caution", shareability.rawLogCaution || "Review prompts, paths, and tool output before sharing raw logs."],
      ["Sanitized graph", shareability.sanitizedGraphNote || "Use sanitized graph/export surfaces for sharing."],
      ["Redacted fields", formatNumber(health.redactedFieldCount)],
      ["Images", formatNumber(health.imageCount)],
    ]),
    summaryFact("Parser Health", parserHealthSummaryLines(health, formatNumber)),
    summaryFact("Token Context", [
      ["Telemetry", telemetry.latestTotalTokens ? "available" : "not logged"],
      ["Latest tokens", formatNumber(telemetry.latestTotalTokens)],
      ["Context window", formatNumber(telemetry.contextWindow)],
      ["Context pressure", formatOptionalPercent(telemetry.latestContextPercent)],
      ["Primary rate limit", formatOptionalPercent(telemetry.primaryRateLimitPercent)],
      ["Secondary rate limit", formatOptionalPercent(telemetry.secondaryRateLimitPercent)],
    ])
  );
  shell.append(hero, triage, grid);

  if (health.warnings.length || current.insights.warnings.length) {
    shell.append(modeCard("Warnings", [...health.warnings, ...current.insights.warnings].slice(0, 10)));
  }

  modePanelContent.replaceChildren(shell);
}

function summaryFact(title: string, facts: SummaryFactLine[]): HTMLElement {
  const card = document.createElement("article");
  card.className = "summary-fact";
  const heading = document.createElement("h3");
  heading.textContent = title;
  const list = document.createElement("dl");
  facts.forEach(([label, value]) => {
    const term = document.createElement("dt");
    term.textContent = label;
    const detail = document.createElement("dd");
    detail.textContent = value;
    list.append(term, detail);
  });
  card.append(heading, list);
  return card;
}

function renderSummaryInsightQueue(insights: SummaryInsights, options: SummaryModeOptions): HTMLElement {
  const card = options.modeCard("Inspect First");
  card.classList.add("summary-insights");
  const totalItems = insights.inspectionQueue.length;
  const items = insights.inspectionQueue.slice(0, SUMMARY_INSPECTION_QUEUE_LIMIT);
  if (!totalItems) {
    card.append(
      options.modeParagraph("No high-priority findings detected. Parser health and raw inspection remain available for audit."),
      summaryInsightActionRow([
        options.modeButton("Open Insights", () => options.selectAppMode("insights")),
        options.modeButton("Audit Raw", () => options.selectAppMode("raw")),
      ])
    );
    return card;
  }

  const intro = options.modeParagraph(
    totalItems > items.length
      ? `Showing the first ${formatNumber(items.length)} of ${formatNumber(totalItems)} queued findings for inspect-first review.`
      : "Top queued findings are ready for inspect-first review; each evidence action routes to an existing panel and falls back clearly when no event line is logged."
  );
  const list = document.createElement("div");
  list.className = "mode-linked-list";
  items.forEach((item, index) => {
    const row = document.createElement("article");
    row.className = `mode-linked-row severity-${item.severity}`;
    const body = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = `${index + 1}. ${item.title}`;
    const meta = document.createElement("small");
    meta.textContent = summaryInsightMeta(item);
    const summary = document.createElement("p");
    summary.textContent = item.redactionSafeSummary || item.summary;
    body.append(title, meta, summary);

    const actions = summaryInsightActionRow([
      options.modeButton("Open Insights", () => openInsightDetails(item, options)),
      options.modeButton("Timeline Evidence", () => openInsightEvidence(item, "timeline", options)),
      options.modeButton("Transcript Evidence", () => openInsightEvidence(item, "transcript", options)),
      options.modeButton("Raw Evidence", () => openInsightEvidence(item, "raw", options)),
    ]);
    row.append(body, actions);
    list.append(row);
  });
  card.append(intro, list);
  return card;
}

function summaryInsightActionRow(buttons: HTMLButtonElement[]): HTMLElement {
  const actions = document.createElement("div");
  actions.className = "mode-row-actions";
  actions.append(...buttons);
  return actions;
}

function summaryInsightMeta(item: SummaryInspectionQueueItem): string {
  const line = firstInsightLine(item);
  const eventLabel = item.eventIds.length ? `${formatNumber(item.eventIds.length)} linked events` : "no linked event ids";
  const lineLabel = line ? `line ${line}` : "no event line logged";
  return [item.severity, item.confidence, item.directness, lineLabel, eventLabel].filter(Boolean).join(" - ");
}

function firstInsightLine(item: SummaryInspectionQueueItem): number | null {
  return item.lineNumbers.find((line) => Number.isFinite(line) && line > 0) ?? null;
}

function evidenceRowForInsight(item: SummaryInspectionQueueItem, options: SummaryModeOptions): SummaryModeEventRow | null {
  const rows = options.modeTimelineRows();
  const line = firstInsightLine(item);
  const lineMatch = line ? rows.find((row) => row.lineNumber === line) : null;
  if (lineMatch) {
    return lineMatch;
  }
  if (!item.eventIds.length) {
    return null;
  }
  const eventIds = new Set(item.eventIds);
  return rows.find((row) => eventIds.has(row.id) || (row.node ? eventIds.has(row.node.id) : false)) ?? null;
}

function openInsightDetails(item: SummaryInspectionQueueItem, options: SummaryModeOptions): void {
  options.selectAppMode("insights");
  options.setRawModePayload(item);
  options.modePanelSummary.textContent = `Queued insight selected - ${item.title}`;
  const notice = options.modeEmpty("Selected insight loaded in Raw for audit; use evidence actions to jump into Timeline, Transcript, or Raw rows when line/event data is available.");
  notice.classList.add("mode-notice");
  options.modePanelContent.prepend(notice);
}

function openInsightEvidence(item: SummaryInspectionQueueItem, destination: SummaryAppMode, options: SummaryModeOptions): void {
  const row = evidenceRowForInsight(item, options);
  if (row) {
    options.focusEventByLine(row.lineNumber, item.title, item, destination);
    return;
  }
  const detail = firstInsightLine(item) || item.eventIds.length
    ? "Logged evidence did not match a rendered Timeline or Transcript row; showing the queued insight instead."
    : "No event line is logged for this insight; showing the queued insight instead.";
  openInsightDetails(item, options);
  options.showEvidenceFallback(item.title, item, detail);
}

function parserHealthSummaryLines(health: SummaryParserHealth, formatValue: (value: number) => string): SummaryFactLine[] {
  return [
    ["Parser", `${health.parserVersion} / ${health.schemaVersion}`],
    ["Renderable events", formatValue(health.renderableEventCount)],
    ["Unknown events", formatValue(health.unknownEventCount)],
    ["Malformed lines", formatValue(health.malformedLineCount)],
    ["Skipped payloads", formatValue(health.skippedLargePayloadCount)],
    ["Warnings", formatValue(health.warnings.length)],
  ];
}

function contextPressureSummary(telemetry: SummaryTokenTelemetry | undefined): string {
  if (!telemetry?.latestTotalTokens) {
    return "no token telemetry";
  }
  const percent = telemetry.latestContextPercent === null ? "n/a" : `${Math.round(telemetry.latestContextPercent)}%`;
  const window = telemetry.contextWindow ? ` / ${formatNumber(telemetry.contextWindow)}` : "";
  return `${formatNumber(telemetry.latestTotalTokens)}${window} tokens (${percent})`;
}

function sourceLabel(source: string): string {
  return source === "claude" ? "Claude" : "Codex";
}
