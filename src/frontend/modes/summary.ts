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

interface SummaryInsightEventLink {
  id: string;
  lineNumber: number;
  eventIndex: number;
  normalizedType: string;
  title: string;
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
  failureChain: {
    firstLoggedError: SummaryInsightEventLink;
    subsequentRetries: SummaryInsightEventLink[];
    fileChangesAfterFirstError: SummaryInsightEventLink[];
    finalOutcome: string;
  } | null;
  repeatedPatterns: {
    title: string;
    patternType: string;
    key: string;
    count: number;
    firstLine: number;
    lastLine: number;
    confidence: string;
  }[];
  contextPressure: {
    status: string;
    latestTotalTokens: number | null;
    contextWindow: number | null;
    latestContextPercent: number | null;
    highContextMarkers: SummaryInsightEventLink[];
    compactionMarkers: SummaryInsightEventLink[];
    explanation: string;
  };
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
  isLive: boolean;
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
  setReadableRedactionText(element: HTMLElement, text: string): void;
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

  const verdict = renderForensicVerdictCard(current, rawShareStatus, options);
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
    ], options),
    summaryFact("Activity", [
      ["Prompts", formatNumber(current.totals.promptCount)],
      ["Turns", formatNumber(current.ui.totalTurns)],
      ["Tool calls", `${formatNumber(current.totals.completedCallCount)} / ${formatNumber(current.totals.callCount)} completed`],
      ["Assistant messages", formatNumber(current.totals.assistantMessageCount)],
      ["File changes", formatNumber(current.totals.fileChangeCount)],
      ["Compactions", formatNumber(current.totals.compactionCount)],
      ["Dynamic tools", current.metadata.dynamicTools.length ? current.metadata.dynamicTools.map((tool) => tool.name).slice(0, 5).join(", ") : "none logged"],
    ], options),
    summaryFact("Privacy", [
      ["Mode", privacy.privacyMode || "unknown"],
      ["Redaction profile", privacy.redactionProfile || "default"],
      ["API token required", privacy.apiTokenRequired ? "yes" : "no"],
      ["Images", privacy.imageRouteBehavior || "not logged"],
      ["Telemetry", privacy.noTelemetry ? "disabled" : "check deployment settings"],
      ["Third-party uploads", privacy.noThirdPartyUploads ? "disabled" : "check before sharing"],
    ], options),
    summaryFact("Shareability", [
      ["Raw logs", shareability.rawLogsSafeToShare ? "safe to share" : "review/redact first"],
      ["Raw caution", shareability.rawLogCaution || "Review prompts, paths, and tool output before sharing raw logs."],
      ["Sanitized graph", shareability.sanitizedGraphNote || "Use sanitized graph/export surfaces for sharing."],
      ["Redacted fields", formatNumber(health.redactedFieldCount)],
      ["Images", formatNumber(health.imageCount)],
    ], options),
    summaryFact("Parser Health", parserHealthSummaryLines(health, formatNumber), options),
    summaryFact("Token Context", [
      ["Telemetry", telemetry.latestTotalTokens ? "available" : "not logged"],
      ["Latest tokens", formatNumber(telemetry.latestTotalTokens)],
      ["Context window", formatNumber(telemetry.contextWindow)],
      ["Context pressure", formatOptionalPercent(telemetry.latestContextPercent)],
      ["Primary rate limit", formatOptionalPercent(telemetry.primaryRateLimitPercent)],
      ["Secondary rate limit", formatOptionalPercent(telemetry.secondaryRateLimitPercent)],
    ], options)
  );
  shell.append(verdict, hero, triage, grid);

  if (health.warnings.length || current.insights.warnings.length) {
    shell.append(modeCard("Warnings", [...health.warnings, ...current.insights.warnings].slice(0, 10)));
  }

  modePanelContent.replaceChildren(shell);
}

function renderForensicVerdictCard(current: SummarySessionGraph, rawShareStatus: string, options: SummaryModeOptions): HTMLElement {
  const priorityFinding = current.insights.inspectionQueue[0] ?? null;
  const confidenceFinding = highestConfidenceInspectionItem(current.insights.inspectionQueue) ?? priorityFinding;
  const card = options.modeCard("Forensic Verdict");
  card.classList.add("summary-verdict");

  const verdictGrid = document.createElement("div");
  verdictGrid.className = "summary-verdict-grid";
  verdictGrid.append(
    summaryVerdictField("Outcome", forensicVerdictOutcome(current), options),
    summaryVerdictField("First critical event", forensicVerdictFirstCriticalEvent(current, priorityFinding), options),
    summaryVerdictField("Highest-confidence finding", forensicVerdictFinding(confidenceFinding), options),
    summaryVerdictField("Safe-share state", forensicVerdictSafeShareState(current, rawShareStatus), options),
    summaryVerdictField("Inspect next", forensicVerdictInspectNext(priorityFinding), options)
  );

  const action = priorityFinding
    ? options.modeButton("Inspect Highest-Priority Finding", () => openInsightEvidence(priorityFinding, "raw", options))
    : options.modeButton("Review Parser Health", () => options.selectAppMode("health"));
  action.classList.add("summary-primary-cta");
  const actions = document.createElement("div");
  actions.className = "summary-verdict-actions";
  actions.append(action);

  card.append(verdictGrid, actions);
  return card;
}

function summaryVerdictField(label: string, value: string, options: SummaryModeOptions): HTMLElement {
  const field = document.createElement("div");
  field.className = "summary-verdict-field";
  const term = document.createElement("strong");
  term.textContent = label;
  const detail = document.createElement("span");
  options.setReadableRedactionText(detail, value);
  field.append(term, detail);
  return field;
}

function forensicVerdictOutcome(current: SummarySessionGraph): string {
  const { insights, parserHealth } = current;
  if (insights.failureChain) {
    const outcome = insights.failureChain.finalOutcome || insights.failureChain.firstLoggedError.title;
    return `Failed - ${compactSummaryInsightText(outcome, 132)}`;
  }
  const repeatedToolPattern = insights.repeatedPatterns.find((pattern) => pattern.patternType !== "file_activity");
  if (repeatedToolPattern) {
    return `Looped - ${formatNumber(repeatedToolPattern.count)} repeated ${repeatedToolPattern.key} records`;
  }
  if (insights.contextPressure.highContextMarkers.length || insights.contextPressure.compactionMarkers.length) {
    return `Drifted - ${insights.contextPressure.status || "context pressure"}`;
  }
  if (parserHealth.unknownEventCount || parserHealth.malformedLineCount) {
    return `Unknown - ${formatNumber(parserHealth.unknownEventCount)} unknown / ${formatNumber(parserHealth.malformedLineCount)} malformed parser records`;
  }
  return current.isLive ? "Live - session is still receiving events" : "Completed - no failure chain detected";
}

function forensicVerdictFirstCriticalEvent(current: SummarySessionGraph, priorityFinding: SummaryInspectionQueueItem | null): string {
  const firstError = current.insights.failureChain?.firstLoggedError;
  if (firstError) {
    return `${firstError.title} at line ${formatNumber(firstError.lineNumber)}`;
  }
  if (priorityFinding) {
    const line = firstInsightLine(priorityFinding);
    return line ? `${priorityFinding.title} at line ${formatNumber(line)}` : `${priorityFinding.title} (no event line logged)`;
  }
  const firstWarning = current.insights.warnings[0] || current.parserHealth.warnings[0];
  return firstWarning ? compactSummaryInsightText(firstWarning, 132) : "No critical or suspicious event detected";
}

function highestConfidenceInspectionItem(items: SummaryInspectionQueueItem[]): SummaryInspectionQueueItem | null {
  return items.reduce<SummaryInspectionQueueItem | null>((best, item) => {
    if (!best) {
      return item;
    }
    const itemRank = insightConfidenceRank(item.confidence);
    const bestRank = insightConfidenceRank(best.confidence);
    if (itemRank < bestRank) {
      return item;
    }
    if (itemRank === bestRank && insightSeverityRank(item.severity) < insightSeverityRank(best.severity)) {
      return item;
    }
    return best;
  }, null);
}

function insightConfidenceRank(confidence: string): number {
  switch (confidence.toLowerCase()) {
    case "direct":
    case "high":
      return 0;
    case "strong heuristic":
    case "medium":
      return 1;
    case "weak heuristic":
    case "low":
      return 2;
    default:
      return 3;
  }
}

function insightSeverityRank(severity: string): number {
  switch (severity.toLowerCase()) {
    case "critical":
    case "high":
      return 0;
    case "warning":
    case "medium":
      return 1;
    case "info":
    case "low":
      return 2;
    default:
      return 3;
  }
}

function forensicVerdictFinding(finding: SummaryInspectionQueueItem | null): string {
  if (!finding) {
    return "No queued high-confidence finding; use parser health for audit context.";
  }
  const summary = compactSummaryInsightText(finding.redactionSafeSummary || finding.summary, 132);
  return `${finding.title} (${finding.confidence} confidence, ${finding.severity} severity) - ${summary}`;
}

function forensicVerdictSafeShareState(current: SummarySessionGraph, rawShareStatus: string): string {
  const tokenStatus = current.privacySummary.apiTokenRequired ? "API token required; token value hidden" : "No API token requirement logged";
  return `${rawShareStatus}; ${tokenStatus}`;
}

function forensicVerdictInspectNext(priorityFinding: SummaryInspectionQueueItem | null): string {
  if (!priorityFinding) {
    return "No queued finding; review Parser Health only if the audit needs raw parser details.";
  }
  return `${priorityFinding.title} - ${summaryInsightPlainReason(priorityFinding)}`;
}

function summaryInsightPlainReason(item: SummaryInspectionQueueItem): string {
  if (item.title === "First logged error-like event") {
    return "Start here because this is the earliest logged event that looked broken.";
  }
  if (item.title === "Suspicious tool call") {
    return "One or more tool records look failed, missing, long-running, empty, or error-like.";
  }
  if (item.title === "Repeated tool-call pattern") {
    return "Similar tool calls repeated, which can point to retry loops or stuck local work.";
  }
  if (item.title === "Approval or sandbox friction") {
    return "Permission, sandbox, or approval friction can explain blocked or retried work.";
  }
  if (item.title === "Context pressure marker") {
    return "Context pressure or compaction markers can explain abrupt summaries or degraded continuity.";
  }
  if (item.title === "Unknown or malformed log data") {
    return "Parser gaps can hide details from normalized views, so audit raw or Health output.";
  }
  if (item.title === "File impact") {
    return "Use this as audit context for touched files, not as a root-cause claim.";
  }
  return "Use this as a lead into the raw log evidence, not as a root-cause verdict.";
}

function compactSummaryInsightText(text: string, limit: number): string {
  const compact = text.replace(/::git-[^}]+}/g, "").replace(/\s+/g, " ").trim();
  if (!compact) {
    return "none logged";
  }
  return compact.length > limit ? `${compact.slice(0, Math.max(0, limit - 3)).trimEnd()}...` : compact;
}

function summaryFact(title: string, facts: SummaryFactLine[], options: SummaryModeOptions): HTMLElement {
  const card = document.createElement("article");
  card.className = "summary-fact";
  const heading = document.createElement("h3");
  heading.textContent = title;
  const list = document.createElement("dl");
  facts.forEach(([label, value]) => {
    const term = document.createElement("dt");
    term.textContent = label;
    const detail = document.createElement("dd");
    options.setReadableRedactionText(detail, value);
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
      : "Top queued findings are ready for inspect-first review; each row exposes one evidence drawer that keeps Timeline, Transcript, Raw JSON, and Insights reachable."
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
    options.setReadableRedactionText(summary, item.redactionSafeSummary || item.summary);
    body.append(title, meta, summary);

    const drawerId = `summary-evidence-drawer-${index + 1}`;
    const triggerId = `${drawerId}-trigger`;
    const drawer = summaryInsightEvidenceDrawer(item, drawerId, triggerId, options);
    const trigger = options.modeButton("View Evidence", () => {
      const expanded = drawer.hidden;
      if (expanded) {
        closeOtherSummaryEvidenceDrawers(list, drawer);
      }
      setSummaryEvidenceDrawerExpanded(trigger, drawer, expanded);
    });
    trigger.id = triggerId;
    trigger.classList.add("summary-evidence-trigger");
    trigger.setAttribute("aria-controls", drawerId);
    trigger.setAttribute("aria-expanded", "false");
    const actions = summaryInsightActionRow([trigger]);
    row.append(body, actions, drawer);
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

function summaryInsightEvidenceDrawer(item: SummaryInspectionQueueItem, drawerId: string, triggerId: string, options: SummaryModeOptions): HTMLElement {
  const drawer = document.createElement("section");
  drawer.id = drawerId;
  drawer.className = "summary-evidence-drawer";
  drawer.hidden = true;
  drawer.tabIndex = -1;
  drawer.dataset.triggerId = triggerId;
  drawer.setAttribute("role", "region");
  drawer.setAttribute("aria-labelledby", `${drawerId}-title`);

  const heading = document.createElement("h4");
  heading.id = `${drawerId}-title`;
  heading.textContent = `Evidence drawer: ${item.title}`;
  const helper = options.modeParagraph("Start with the summary here, then open the focused evidence surface without losing this finding as context.");

  const summarySection = document.createElement("section");
  summarySection.className = "summary-evidence-section";
  summarySection.setAttribute("aria-labelledby", `${drawerId}-summary`);
  const summaryHeading = document.createElement("h5");
  summaryHeading.id = `${drawerId}-summary`;
  summaryHeading.textContent = "Summary";
  const summaryText = options.modeParagraph(item.redactionSafeSummary || item.summary);
  const facts = document.createElement("dl");
  facts.className = "summary-evidence-meta";
  const line = firstInsightLine(item);
  ([
    ["Severity", item.severity],
    ["Confidence", item.confidence],
    ["Directness", item.directness],
    ["Line", line ? `line ${line}` : "no event line logged"],
    ["Events", item.eventIds.length ? `${formatNumber(item.eventIds.length)} linked` : "no linked event ids"],
  ] as [string, string][]).forEach(([label, value]) => {
    const term = document.createElement("dt");
    term.textContent = label;
    const detail = document.createElement("dd");
    options.setReadableRedactionText(detail, value);
    facts.append(term, detail);
  });
  summarySection.append(summaryHeading, summaryText, facts);

  const surfaceSection = document.createElement("section");
  surfaceSection.className = "summary-evidence-section";
  surfaceSection.setAttribute("aria-labelledby", `${drawerId}-surfaces`);
  const surfaceHeading = document.createElement("h5");
  surfaceHeading.id = `${drawerId}-surfaces`;
  surfaceHeading.textContent = "Evidence surfaces";
  const surfaceText = options.modeParagraph("Open Timeline or Transcript for positioned rows, Raw JSON for the selected payload, or Insights for the grouped finding view.");
  const surfaceActions = summaryInsightActionRow([
    options.modeButton("Timeline", () => openInsightEvidence(item, "timeline", options)),
    options.modeButton("Transcript", () => openInsightEvidence(item, "transcript", options)),
    options.modeButton("Raw JSON", () => openInsightEvidence(item, "raw", options)),
    options.modeButton("Insights", () => openInsightDetails(item, options)),
  ]);
  surfaceActions.classList.add("summary-evidence-tabs");
  surfaceActions.setAttribute("role", "group");
  surfaceActions.setAttribute("aria-label", `Evidence surfaces for ${item.title}`);
  surfaceSection.append(surfaceHeading, surfaceText, surfaceActions);

  drawer.append(heading, helper, summarySection, surfaceSection);
  return drawer;
}

function closeOtherSummaryEvidenceDrawers(list: HTMLElement, activeDrawer: HTMLElement): void {
  list.querySelectorAll<HTMLElement>(".summary-evidence-drawer").forEach((drawer) => {
    if (drawer === activeDrawer || drawer.hidden) {
      return;
    }
    const trigger = drawer.dataset.triggerId ? document.getElementById(drawer.dataset.triggerId) : null;
    if (trigger instanceof HTMLButtonElement) {
      setSummaryEvidenceDrawerExpanded(trigger, drawer, false);
    } else {
      drawer.hidden = true;
    }
  });
}

function setSummaryEvidenceDrawerExpanded(trigger: HTMLButtonElement, drawer: HTMLElement, expanded: boolean): void {
  drawer.hidden = !expanded;
  trigger.textContent = expanded ? "Hide Evidence" : "View Evidence";
  trigger.setAttribute("aria-expanded", String(expanded));
  if (expanded) {
    drawer.focus();
  }
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
