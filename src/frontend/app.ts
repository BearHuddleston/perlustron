// SPDX-License-Identifier: MIT OR Apache-2.0

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import {
  compactText,
  durationLabel,
  escapeHtml,
  formatBytes,
  formatCountDelta,
  formatDuration,
  formatNumber,
  formatOptionalPercent,
  formatSessionModified,
  recordsLabel,
} from "./utils/format";
import { copySafeReferenceText, copySafeShareSummaryText, safeReferenceSummary } from "./share_safe";

const SIDEBAR_DOT_COLORS = ["green", "blue", "violet", "amber"] as const;
const FILE_CHANGE_TYPES = ["add", "update", "delete", "move"] as const;
const MAX_SUBAGENT_INSPECTION_NODES = 72;

type SessionSource = "codex" | "claude";
type Mode = "overview" | "inspect";
type AppMode = "summary" | "map" | "timeline" | "transcript" | "health" | "insights" | "diff" | "raw" | "export" | "settings";
type SessionFilter = "all" | "live" | "pinned";
type Metric = "error" | "long" | "file" | "diff" | "artifact" | "compaction";
type InspectorPanel = "sessions" | "saved" | "raw" | "health";
type SavedView = "errors" | "files" | "latest";
type ViewAction = "zoom-in" | "zoom-out" | "two-d" | "overview";
type SceneBucket = "prompt" | "call" | "fileChange" | "message" | "compaction";
type OverviewCameraMode = "three-d" | "two-d";
type Connector =
  | [string, string]
  | {
      fromId: string;
      toId: string;
      waypoints: THREE.Vector3[];
    };
type TimerId = ReturnType<typeof setTimeout>;

const DEFAULT_APP_MODES = ["summary", "map", "timeline", "transcript"] as const satisfies readonly AppMode[];
type DefaultAppMode = (typeof DEFAULT_APP_MODES)[number];
const APP_MODES = [...DEFAULT_APP_MODES, "health", "insights", "diff", "raw", "export", "settings"] as const satisfies readonly AppMode[];
const SESSION_FILTERS = ["all", "live", "pinned"] as const satisfies readonly SessionFilter[];
const METRICS = ["error", "long", "file", "diff", "artifact", "compaction"] as const satisfies readonly Metric[];
const INSPECTOR_PANELS = ["sessions", "saved", "raw", "health"] as const satisfies readonly InspectorPanel[];
const SAVED_VIEWS = ["errors", "files", "latest"] as const satisfies readonly SavedView[];
const VIEW_ACTIONS = ["zoom-in", "zoom-out", "two-d", "overview"] as const satisfies readonly ViewAction[];
const APP_MODE_SET = new Set<AppMode>(APP_MODES);
const DEFAULT_APP_MODE_SET = new Set<AppMode>(DEFAULT_APP_MODES);
type FileChangeType = (typeof FILE_CHANGE_TYPES)[number];

interface TimelineTick {
  kind: string;
  height: number;
}

function connectorFromId(connector: Connector): string {
  return Array.isArray(connector) ? connector[0] : connector.fromId;
}

function connectorToId(connector: Connector): string {
  return Array.isArray(connector) ? connector[1] : connector.toId;
}

function connectorSegmentCount(connector: Connector): number {
  return Array.isArray(connector) ? 1 : connector.waypoints.length + 1;
}

function connectorSegmentTotal(nextConnectors: Connector[]): number {
  return nextConnectors.reduce((sum, connector) => sum + connectorSegmentCount(connector), 0);
}

function sameConnectorShape(left: Connector, right: Connector | undefined): boolean {
  if (!right || connectorFromId(left) !== connectorFromId(right) || connectorToId(left) !== connectorToId(right)) {
    return false;
  }
  const leftWaypoints = Array.isArray(left) ? [] : left.waypoints;
  const rightWaypoints = Array.isArray(right) ? [] : right.waypoints;
  return leftWaypoints.length === rightWaypoints.length;
}

interface SessionRootSummary {
  label: string;
  path: string;
  status: string;
}

interface SessionMetadata {
  cliVersion: string | null;
  originator: string | null;
  source: string | null;
  modelProvider: string | null;
  gitCommitHash: string | null;
  repositoryUrl: string | null;
  approvalPolicy: string | null;
  sandbox: string | null;
  model: string | null;
  dynamicTools: DynamicToolSummary[];
}

interface DynamicToolSummary {
  name: string;
  namespace: string | null;
  deferLoading: boolean;
}

interface PromptRowSummary {
  id: string;
  title: string;
  turns: number;
  local: number;
  browser: number;
  web: number;
  files: number;
  isLive: boolean;
  lastEventIndex: number;
}

interface UiSummary {
  source: string;
  sessionName: string;
  totalTurns: number;
  allCount: number;
  liveCount: number;
  metricErrors: number;
  metricLongCalls: number;
  metricFiles: number;
  metricDiffs: number;
  metricArtifacts: number;
  metricCompactions: number;
  metricWeb: number;
  timelineTicks: TimelineTick[];
  timelineLabels: string[];
  roots: SessionRootSummary[];
  promptRows: PromptRowSummary[];
}

interface SessionTotals {
  promptCount: number;
  callCount: number;
  completedCallCount: number;
  assistantMessageCount: number;
  fileChangeCount: number;
  compactionCount: number;
}

interface UnknownEventTypeSummary {
  sourceEventType: string;
  count: number;
}

interface ParserHealth {
  parserVersion: string;
  schemaVersion: string;
  source: string;
  sourceDetectionConfidence: string;
  totalLinesRead: number;
  parsedEventCount: number;
  renderableEventCount: number;
  unknownEventCount: number;
  unknownEventTypes: UnknownEventTypeSummary[];
  unknownEvents?: ParserEventRef[];
  malformedLineCount: number;
  malformedLines?: MalformedLineRef[];
  skippedLargePayloadCount: number;
  skippedLargePayloads?: SkippedPayloadRef[];
  redactedFieldCount: number;
  imageCount: number;
  toolCallCount: number;
  toolResultCount: number;
  fileActivityCount: number;
  compactionCount: number;
  tokenTelemetryAvailable: boolean;
  warnings: string[];
}

interface ParserEventRef {
  lineNumber: number;
  eventIndex: number;
  sourceEventType: string;
  normalizedType: string;
  preview: string;
}

interface MalformedLineRef {
  lineNumber: number;
  eventIndex: number;
  error: string;
  preview: string;
}

interface SkippedPayloadRef {
  lineNumber: number;
  eventIndex: number;
  byteLength: number;
  reason: string;
}

interface ContentImageRef {
  id: string;
  eventIndex: number;
  imageIndex: number;
  detail: string | null;
  mimeType: string;
  url: string;
}

interface MessageNode {
  id: string;
  eventIndex: number;
  timestamp: string | null;
  text: string;
}

interface TokenTelemetry {
  samples: TokenSample[];
  latestTotalTokens: number | null;
  contextWindow: number | null;
  latestContextPercent: number | null;
  primaryRateLimitPercent: number | null;
  secondaryRateLimitPercent: number | null;
}

interface TokenSample {
  eventIndex: number;
  timestamp: string | null;
  totalTokens: number;
  contextWindow: number | null;
  contextPercent: number | null;
  primaryRateLimitPercent: number | null;
  secondaryRateLimitPercent: number | null;
}

interface LivePromptCue {
  id: string;
  eventIndex: number;
  timestamp: string | null;
  title: string;
  text: string;
}

type LiveToolCue = CallNode;

interface LiveTailCues {
  compactionInProgress: boolean;
  pendingPrompt: LivePromptCue | null;
  assistantStreaming: boolean;
  latestAssistantEventIndex: number | null;
  latestAssistantPreview: string | null;
  latestTokenSample: TokenSample | null;
  activeToolCalls: LiveToolCue[];
  completedToolCalls: LiveToolCue[];
}

interface FileChangeNode {
  id: string;
  eventIndex: number;
  timestamp: string | null;
  callId: string | null;
  path: string;
  shortPath: string;
  changeType: FileChangeType;
  detail: string;
  preview: string;
}

interface CallNode {
  id: string;
  eventIndex: number;
  startedAt: string | null;
  completedAt: string | null;
  name: string;
  kind: string;
  status: string;
  durationMs: number | null;
  argumentPreview: string;
  outputPreview: string | null;
  assistantMessageId?: string | null;
  subagentSessionPath?: string | null;
  subagentNodes?: CallNode[];
}

interface PromptNode {
  id: string;
  eventIndex: number;
  timestamp: string | null;
  title: string;
  text: string;
  images: ContentImageRef[];
  calls: CallNode[];
  assistantMessages: MessageNode[];
  fileChanges: FileChangeNode[];
}

interface CompactionNode {
  id: string;
  eventIndex: number;
  timestamp: string | null;
  title: string;
  text: string;
  detail: string;
  replacedMessageCount: number;
  encrypted: boolean;
  reason: string | null;
}

interface PrivacySummary {
  privacyMode: string;
  redactionProfile: string | null;
  apiTokenRequired: boolean;
  imageRouteBehavior: string;
  noTelemetry: boolean;
  noThirdPartyUploads: boolean;
}

interface ShareabilitySummary {
  rawLogsSafeToShare: boolean;
  rawLogCaution: string;
  sanitizedGraphNote: string;
}

interface SessionGraph {
  schemaVersion: string;
  parserVersion: string;
  source: SessionSource;
  sessionId: string | null;
  sessionPath: string;
  cwd: string | null;
  metadata: SessionMetadata;
  generatedAt: string;
  lastModifiedAt: string;
  latestEventIndex: number;
  isLive: boolean;
  lineCount: number;
  byteLength: number;
  processedByteLength: number;
  pendingBytes: number;
  privacySummary: PrivacySummary;
  shareabilitySummary: ShareabilitySummary;
  prompts: PromptNode[];
  compactions: CompactionNode[];
  tokenTelemetry: TokenTelemetry;
  totals: SessionTotals;
  parserHealth: ParserHealth;
  insights: TraceInsights;
  ui: UiSummary;
}

interface TraceInsights {
  inspectionQueue: {
    id: string;
    title: string;
    severity: string;
    confidence: string;
    directness: string;
    summary: string;
    explanation: string;
    eventIds: string[];
    lineNumbers: number[];
    relatedFiles: string[];
    relatedTools: string[];
    redactionSafeSummary: string;
    rawAvailable: boolean;
  }[];
  failureChain: {
    firstLoggedError: InsightEventLink;
    subsequentRetries: InsightEventLink[];
    fileChangesAfterFirstError: InsightEventLink[];
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
  suspiciousToolCalls: {
    toolName: string;
    reason: string;
    call: InsightEventLink;
    status: string;
    durationMs: number | null;
  }[];
  contextPressure: {
    status: string;
    latestTotalTokens: number | null;
    contextWindow: number | null;
    latestContextPercent: number | null;
    highContextMarkers: InsightEventLink[];
    compactionMarkers: InsightEventLink[];
    explanation: string;
  };
  fileImpact: {
    filesEdited: { path: string; count: number; firstLine: number; lastLine: number; classification: string }[];
    filesRead: { path: string; count: number; firstLine: number; lastLine: number; classification: string }[];
    filesReferenced: { path: string; count: number; firstLine: number; lastLine: number; classification: string }[];
    repeatedFiles: { path: string; count: number; firstLine: number; lastLine: number; classification: string }[];
  };
  approvalFriction: { title: string; severity: string; confidence: string; explanation: string; linkedEvents: InsightEventLink[] }[];
  warnings: string[];
}

type InspectionQueueItem = TraceInsights["inspectionQueue"][number];

interface InsightEventLink {
  id: string;
  lineNumber: number;
  eventIndex: number;
  normalizedType: string;
  title: string;
}

interface SessionStatus {
  source: SessionSource;
  sessionPath: string;
  sessionId: string | null;
  generatedAt: string;
  lastModifiedAt: string;
  lineCount: number;
  latestEventIndex: number;
  isLive: boolean;
  byteLength: number;
  processedByteLength: number;
  pendingBytes: number;
  graphChanged: boolean;
  renderableEventCount: number;
  compactionInProgress: boolean;
  parserHealth?: ParserHealth;
  liveCues?: LiveTailCues;
}

interface SessionListItem {
  source: string;
  path: string;
  label: string;
  detail: string;
  lastModifiedAt: string;
  byteLength: number;
  isLive: boolean;
  explicit: boolean;
}

interface SessionListResponse {
  source: string;
  selectedPath: string;
  sessions: SessionListItem[];
}

interface CountDelta {
  left: number;
  right: number;
  delta: number;
}

interface TraceSideSummary {
  source: string;
  sessionId: string | null;
  model: string | null;
  loggedDuration: string;
  lineCount: number;
  parsedEventCount: number;
  renderableEventCount: number;
  unknownEventCount: number;
  malformedLineCount: number;
  toolCallCount: number;
  toolResultCount: number;
  missingToolResultCount: number;
  uniqueToolNames: string[];
  repeatedPatterns: string[];
  errorLikeEventCount: number;
  firstErrorLikeEvent: string | null;
  longestToolCalls: { name: string; lineNumber: number; durationMs: number | null; status: string }[];
  filesTouched: string[];
  compactionCount: number;
  tokenTelemetryAvailable: boolean;
  latestTotalTokens: number | null;
  latestContextPercent: number | null;
}

interface DivergenceCluster {
  kind: string;
  confidence: string;
  summary: string;
  explanation: string;
  leftLine: number | null;
  rightLine: number | null;
  leftEventId: string | null;
  rightEventId: string | null;
  leftSignature: string | null;
  rightSignature: string | null;
}

interface TraceDiff {
  schemaVersion: string;
  generatedAt: string;
  metadata: {
    leftPath: string;
    rightPath: string;
    leftSource: string;
    rightSource: string;
    redacted: boolean;
    redactionProfile: string | null;
    parserVersion: string;
    traceSchemaVersion: string;
  };
  leftSummary: TraceSideSummary;
  rightSummary: TraceSideSummary;
  deltas: { field: string; left: string; right: string }[];
  parserHealthDelta: {
    unknownEvents: CountDelta;
    malformedLines: CountDelta;
    skippedLargePayloads: CountDelta;
    leftUnknownTypes: UnknownEventTypeSummary[];
    rightUnknownTypes: UnknownEventTypeSummary[];
  };
  promptDelta: CountDelta;
  toolDelta: {
    calls: CountDelta;
    results: CountDelta;
    missingResults: CountDelta;
    onlyLeftTools: string[];
    onlyRightTools: string[];
    commonTools: string[];
  };
  fileDelta: {
    leftCount: number;
    rightCount: number;
    onlyLeft: string[];
    onlyRight: string[];
    both: string[];
  };
  errorDelta: {
    errors: CountDelta;
    leftFirstError: string | null;
    rightFirstError: string | null;
  };
  tokenDelta: {
    leftAvailable: boolean;
    rightAvailable: boolean;
    leftLatestTotalTokens: number | null;
    rightLatestTotalTokens: number | null;
    leftContextPercent: number | null;
    rightContextPercent: number | null;
  };
  compactionDelta: CountDelta;
  repeatedPatternDelta: {
    leftCount: number;
    rightCount: number;
    onlyLeft: string[];
    onlyRight: string[];
    both: string[];
  };
  divergence: {
    status: string;
    kind: string;
    confidence: string;
    summary: string;
    explanation: string;
    alignedEventCount: number;
    leftLine: number | null;
    rightLine: number | null;
    leftEventId: string | null;
    rightEventId: string | null;
    leftSignature: string | null;
    rightSignature: string | null;
    clusters: DivergenceCluster[];
  };
  warnings: string[];
  redactionReport: { profile: string; leftRedactedFields: number; rightRedactedFields: number; warnings: string[] } | null;
}

interface UnknownsReport {
  parserVersion: string;
  traceSchemaVersion: string;
  sourceGuess: string;
  sourceConfidence: string;
  totalLines: number;
  unknownEventCount: number;
  unknownEventTypes: UnknownEventTypeSummary[];
  malformedLineCount: number;
  redactedSamples: {
    lineNumber: number;
    eventIndex: number;
    sourceEventType: string;
    shapeHash: string;
    redactedPreview: string;
  }[];
  suggestedFixtureName: string;
  suggestedGithubIssue: string;
  redactionReport: { profile: string; redactedFieldCount: number; warnings: string[] };
}

interface LoadGraphOptions {
  previousLineCountOverride?: number | null;
  previousLatestOverride?: number | null;
  suppressLiveAnimation?: boolean;
}

interface SceneNodeBase<TSource> {
  id: string;
  type: "prompt" | "call" | "fileChange" | "message" | "compaction";
  kind: string;
  promptId: string;
  promptIndex: number;
  callIndex: number;
  eventIndex: number;
  title: string;
  body: string;
  detail: string;
  source: TSource;
  isNew: boolean;
  freshUntil: number;
  position: THREE.Vector3;
  target: THREE.Vector3;
  home?: THREE.Vector3;
  baseScale: number;
  scale: number;
  bucket?: SceneBucket;
  instanceIndex?: number;
  matrixDirty?: boolean;
}

type PromptSceneNode = SceneNodeBase<PromptNode> & {
  type: "prompt";
  kind: "prompt";
  callIndex: -1;
};
type CallSceneNode = SceneNodeBase<CallNode> & {
  type: "call";
};
type FileChangeSceneNode = SceneNodeBase<FileChangeNode> & {
  type: "fileChange";
};
type MessageSceneNode = SceneNodeBase<MessageNode> & {
  type: "message";
  kind: "assistant";
};
type CompactionSceneNode = SceneNodeBase<CompactionNode> & {
  type: "compaction";
  kind: "compaction";
  callIndex: -1;
};
type SceneNode = PromptSceneNode | CallSceneNode | FileChangeSceneNode | MessageSceneNode | CompactionSceneNode;

interface ModeEventRow {
  id: string;
  eventIndex: number;
  lineNumber: number;
  role: string;
  eventType: string;
  toolName: string;
  filePath: string;
  title: string;
  detail: string;
  timestamp: string | null;
  flags: string[];
  source: unknown;
  node?: SceneNode;
}

type TimelineEntry =
  | {
      type: "prompt";
      eventIndex: number;
      prompt: PromptNode;
      promptIndex: number;
    }
  | {
      type: "compaction";
      eventIndex: number;
      compaction: CompactionNode;
      compactionIndex: number;
    };

interface PromptRowParts {
  row: HTMLButtonElement;
  title: HTMLElement;
  count: HTMLElement;
  meta: NodeListOf<HTMLElement>;
  alerts: HTMLElement;
}

interface BuiltScene {
  nodes: SceneNode[];
  connectors: Connector[];
}

interface SubagentBranch {
  launch: CallNode | null;
  result: CallNode | null;
  nodes: CallNode[];
  eventIndex: number;
}

interface InspectNodePlacement {
  node: SceneNode;
  target: THREE.Vector3;
  scale: number;
}

interface InspectBranchLane {
  nodes: SceneNode[];
  eventIndex: number;
  order: number;
  side: -1 | 1;
  lane: number;
  startZ: number;
}

interface InspectLayout {
  placements: InspectNodePlacement[];
  visibleNodes: SceneNode[];
  mainNodes: SceneNode[];
  branches: InspectBranchLane[];
  connectors: Connector[];
  laneDepth: number;
}

type InspectTimelineUnit =
  | {
      type: "node";
      eventIndex: number;
      order: number;
      node: SceneNode;
    }
  | {
      type: "branch";
      eventIndex: number;
      order: number;
      branch: InspectBranchLane;
    };

interface MotionState {
  position: THREE.Vector3;
  target: THREE.Vector3;
  scale: number;
}

type NodeInstancedMesh = THREE.InstancedMesh<THREE.BufferGeometry, THREE.Material> & {
  userData: {
    bucket?: SceneBucket;
    nodes: SceneNode[];
  };
};

type NodePoints = THREE.Points<THREE.BufferGeometry, THREE.PointsMaterial> & {
  userData: {
    nodes: SceneNode[];
  };
};

type PulseMesh = THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial> & {
  userData: {
    nodeId: string;
    offset: number;
  };
};

function queryRequired<T extends Element>(selector: string, root: ParentNode = document): T {
  const element = root.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Missing required element: ${selector}`);
  }
  return element;
}

function queryAll<T extends Element>(selector: string): NodeListOf<T> {
  return document.querySelectorAll<T>(selector);
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function oneOf<T extends string>(values: readonly T[], value: string | undefined, fallback: T): T {
  return value !== undefined && values.includes(value as T) ? (value as T) : fallback;
}

function emptyLiveCues(): LiveTailCues {
  return {
    compactionInProgress: false,
    pendingPrompt: null,
    assistantStreaming: false,
    latestAssistantEventIndex: null,
    latestAssistantPreview: null,
    latestTokenSample: null,
    activeToolCalls: [],
    completedToolCalls: [],
  };
}

function currentGraph(): SessionGraph {
  if (!graph) {
    throw new Error("Session graph has not loaded yet");
  }
  return graph;
}

function timestampForNode(node: SceneNode): string {
  if (node.type === "call") {
    return node.source.completedAt || node.source.startedAt || "Live context";
  }
  return node.source.timestamp || "Live context";
}

function imagesForNode(node: SceneNode): ContentImageRef[] {
  return node.type === "prompt" ? node.source.images : [];
}

const canvas = queryRequired<HTMLCanvasElement>("#space");
const sessionTitle = queryRequired<HTMLElement>("#session-title");
const sessionMeta = queryRequired<HTMLElement>("#session-meta");
const rootList = queryRequired<HTMLElement>("#root-list");
const metadataList = queryRequired<HTMLElement>("#metadata-list");
const promptList = queryRequired<HTMLElement>("#prompt-list");
const streamKind = queryRequired<HTMLElement>("#stream-kind");
const streamTitle = queryRequired<HTMLElement>("#stream-title");
const streamData = queryRequired<HTMLElement>("#stream-data");
const streamImages = queryRequired<HTMLElement>("#stream-images");
const streamClose = queryRequired<HTMLButtonElement>("#stream-close");
const streamMinimize = queryRequired<HTMLButtonElement>("#stream-minimize");
const streamCopyRef = queryRequired<HTMLButtonElement>("#stream-copy-ref");
const streamOpenTimeline = queryRequired<HTMLButtonElement>("#stream-open-timeline");
const streamOpenTranscript = queryRequired<HTMLButtonElement>("#stream-open-transcript");
const streamOpenRaw = queryRequired<HTMLButtonElement>("#stream-open-raw");
const prevEvent = queryRequired<HTMLButtonElement>("#prev-event");
const nextEvent = queryRequired<HTMLButtonElement>("#next-event");
const stageTurnCount = queryRequired<HTMLElement>("#stage-turn-count");
const stageStarted = queryRequired<HTMLElement>("#stage-started");
const contextPressureValue = queryRequired<HTMLElement>("#context-pressure-value");
const contextPressureBars = queryRequired<HTMLElement>("#context-pressure-bars");
const allCount = queryRequired<HTMLElement>("#all-count");
const liveCount = queryRequired<HTMLElement>("#live-count");
const pinnedCount = queryRequired<HTMLElement>("#pinned-count");
const turnNumber = queryRequired<HTMLElement>("#turn-number");
const turnTimestamp = queryRequired<HTMLElement>("#turn-timestamp");
const rawJsonPreview = queryRequired<HTMLElement>("#raw-json-preview");
const rawJsonSize = queryRequired<HTMLElement>("#raw-json-size");
const parserHealthStatus = queryRequired<HTMLElement>("#parser-health-status");
const parserHealthSummary = queryRequired<HTMLElement>("#parser-health-summary");
const metricErrors = queryRequired<HTMLElement>("#metric-errors");
const metricLong = queryRequired<HTMLElement>("#metric-long");
const metricFiles = queryRequired<HTMLElement>("#metric-files");
const metricDiffs = queryRequired<HTMLElement>("#metric-diffs");
const metricArtifacts = queryRequired<HTMLElement>("#metric-artifacts");
const metricCompactions = queryRequired<HTMLElement>("#metric-compactions");
const sidebarSessionName = queryRequired<HTMLElement>("#sidebar-session-name");
const sidebarSource = queryRequired<HTMLElement>("#sidebar-source");
const sidebarTurns = queryRequired<HTMLElement>("#sidebar-turns");
const sidebarRecords = queryRequired<HTMLElement>("#sidebar-records");
const sidebarLiveStatus = queryRequired<HTMLElement>("#sidebar-live-status");
const sidebarSessionPath = queryRequired<HTMLElement>("#sidebar-session-path");
const contextEventTitle = queryRequired<HTMLElement>("#context-event-title");
const savedErrorsSummary = queryRequired<HTMLElement>("#saved-errors-summary");
const savedFilesSummary = queryRequired<HTMLElement>("#saved-files-summary");
const savedLatestSummary = queryRequired<HTMLElement>("#saved-latest-summary");
const savedViewCount = queryRequired<HTMLElement>("#saved-view-count");
const eventPopup = queryRequired<HTMLElement>("#event-popup");
const workspace = queryRequired<HTMLElement>("#workspace");
const inspectorDock = queryRequired<HTMLElement>("#inspector-dock");
const topbar = queryRequired<HTMLElement>("#topbar");
const liveToggle = queryRequired<HTMLButtonElement>("#live-toggle");
const liveState = queryRequired<HTMLElement>("#live-state");
const liveCopy = queryRequired<HTMLElement>("#live-copy");
const rawJsonToggle = queryRequired<HTMLInputElement>("#raw-json-toggle");
const searchInput = queryRequired<HTMLInputElement>("#search-input");
const rawJsonPanel = queryRequired<HTMLElement>(".raw-json");
const modePanel = queryRequired<HTMLElement>("#mode-panel");
const modePanelKicker = queryRequired<HTMLElement>("#mode-panel-kicker");
const modePanelTitle = queryRequired<HTMLElement>("#mode-panel-title");
const modePanelSummary = queryRequired<HTMLElement>("#mode-panel-summary");
const modePanelFilters = queryRequired<HTMLElement>("#mode-panel-filters");
const modePanelContent = queryRequired<HTMLElement>("#mode-panel-content");
const modeFilterRole = queryRequired<HTMLSelectElement>("#mode-filter-role");
const modeFilterType = queryRequired<HTMLSelectElement>("#mode-filter-type");
const modeFilterTool = queryRequired<HTMLSelectElement>("#mode-filter-tool");
const modeFilterFile = queryRequired<HTMLSelectElement>("#mode-filter-file");
const modeFilterErrors = queryRequired<HTMLInputElement>("#mode-filter-errors");
const modeFilterUnknown = queryRequired<HTMLInputElement>("#mode-filter-unknown");
const modeFilterMalformed = queryRequired<HTMLInputElement>("#mode-filter-malformed");
const modeFilterRedacted = queryRequired<HTMLInputElement>("#mode-filter-redacted");
const modeFilterUtc = queryRequired<HTMLInputElement>("#mode-filter-utc");
const sessionFilterButtons = queryAll<HTMLButtonElement>("[data-session-filter]");
const actionButtons = queryAll<HTMLButtonElement>("[data-action]");
const savedViewButtons = queryAll<HTMLButtonElement>("[data-saved-view]");
const viewActionButtons = queryAll<HTMLButtonElement>("[data-view-action]");
const metricButtons = queryAll<HTMLButtonElement>("[data-metric]");
const modeButtons = queryAll<HTMLButtonElement>("[data-app-mode]");
const utilityModeSelect = queryRequired<HTMLSelectElement>("#utility-mode-select");
const inspectorTabs = queryAll<HTMLButtonElement>("[data-inspector-tab]");
const inspectorPanels = queryAll<HTMLElement>("[data-inspector-panel]");
const sourceButtons = queryAll<HTMLButtonElement>("[data-source]");
const sessionSelect = queryRequired<HTMLSelectElement>("#session-select");
const sessionSelectStatus = queryRequired<HTMLElement>("#session-select-status");
const settingsButton = queryRequired<HTMLButtonElement>("#settings-button");
const sidebarToggle = queryRequired<HTMLButtonElement>("#sidebar-toggle");
const openEditorButton = queryRequired<HTMLButtonElement>("#open-editor-button");
const sceneFrame = queryRequired<HTMLElement>("#scene-frame");
const STATUS_FALLBACK_POLL_INTERVAL_MS = 3500;
const LIVE_UPDATE_RETRY_MS = 1000;
const GRAPH_REFRESH_COALESCE_MS = 180;
const GRID_FOLLOW_STEP = 20;
const DEFAULT_OVERVIEW_CAMERA_DISTANCE = 38;
const NARROW_OVERVIEW_CAMERA_DISTANCE = 52;
const DEFAULT_2D_CAMERA_HEIGHT = 46;
const NARROW_2D_CAMERA_HEIGHT = 58;
const INSPECT_MIN_LANE_DEPTH = 24;
const INSPECT_MAX_LANE_DEPTH = 104;
const INSPECT_MAIN_SPACING = 1.72;
const INSPECT_BRANCH_SPACING = 1.08;
const INSPECT_BRANCH_X = 4.3;
const INSPECT_BRANCH_GAP_X = 2.55;
const HIDDEN_INSPECT_POINT_Y = -10000;
const FRESH_ANIMATION_MS = 3600;
const CONTEXT_PRESSURE_SAMPLE_LIMIT = 28;
const COMPACTION_PULSE_COUNT = 3;
const STEERING_PULSE_COUNT = 2;
const COMPACTION_PROGRESS_CUE_ID = "compaction-progress";
const LIVE_PROMPT_CUE_ID = "live-prompt-progress";
const OVERVIEW_MIN_ABOVE_Z = 4.8;
const OVERVIEW_MIN_BELOW_Z = 5.2;
const OVERVIEW_ACTIVITY_MARGIN_Z = 1.25;
const OVERVIEW_SPIRAL_RADIUS = 3.7;
const OVERVIEW_SPIRAL_RADIUS_GROWTH = 0.04;
const OVERVIEW_SPIRAL_MAX_RADIUS_GROWTH = 0.42;
const OVERVIEW_SPIRAL_ANGLE_START = Math.PI / 2;
const OVERVIEW_SPIRAL_ANGLE_STEP = Math.PI * 0.76;
const OVERVIEW_PROMPT_Y = 6.8;
const OVERVIEW_COMPACTION_Y = 5.8;
const OVERVIEW_HELIX_START_DROP_Y = 1.75;
const OVERVIEW_HELIX_STEP_Y = 2.65;
const OVERVIEW_HELIX_Y_WAVE = 0.16;
const OVERVIEW_GROUPED_CALLS_PER_ROW = 6;
const OVERVIEW_GROUPED_CALL_Z_GAP = 0.86;
const OVERVIEW_GROUPED_CALL_X_GAP = 3.05;
const OVERVIEW_GROUPED_CALL_ROW_X_GAP = 0.72;
const OVERVIEW_GROUPED_CALL_Y_GAP = 0.24;
const OVERVIEW_GROUPED_CALL_ROW_Y_GAP = 0.62;
const OVERVIEW_FILE_COLUMNS = 1;
const OVERVIEW_FILE_BAND_OFFSET_Z = 1.4;
const OVERVIEW_FILE_ROW_GAP_Z = 1.35;
const OVERVIEW_FILE_DEPTH_PADDING_Z = 1.7;
const OVERVIEW_FILE_PARENT_X_GAP = 0.62;
const OVERVIEW_FILE_ROW_X_GAP = 0.04;
const OVERVIEW_FILE_COLUMN_X_GAP = 0;
const OVERVIEW_FILE_Y_GAP = 1.15;
const OVERVIEW_FILE_ROW_Y_GAP = 0;
const OVERVIEW_FILE_CONNECTOR_DROP_Y = 1.05;
const OVERVIEW_SUBAGENT_BAND_OFFSET_Z = 3.8;
const OVERVIEW_SUBAGENT_DEPTH_Z = 5.8;
const OVERVIEW_ITEM_PADDING_Z = 2.4;
const CAMERA_ZOOM_UNIT = 4.2;
const CAMERA_ZOOM_WHEEL_DELTA_UNIT = 100;
const CAMERA_ZOOM_MAX_WHEEL_STEPS = 4;
const CAMERA_FLY_MIN_SPEED = 16;
const CAMERA_FLY_MAX_SPEED = 70;
const CAMERA_FLY_DISTANCE_FACTOR = 0.72;
const CAMERA_FLY_FAST_MULTIPLIER = 2.6;
const CAMERA_FLY_KEY_CODES = new Set(["KeyW", "KeyA", "KeyS", "KeyD"]);
const CAMERA_FLY_FAST_KEY_CODES = new Set(["ShiftLeft", "ShiftRight"]);
const CAMERA_FLY_LOOK_SENSITIVITY = 0.0032;
const CAMERA_FLY_LOOK_MIN_TARGET_DISTANCE = 1.4;
const CAMERA_FLY_LOOK_MAX_TARGET_DISTANCE = 28;
const CAMERA_FLY_LOOK_PITCH_LIMIT = Math.PI / 2 - 0.08;

let renderer: THREE.WebGLRenderer | null = null;
try {
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.setClearColor(0x030506, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
} catch (error) {
  canvas.classList.add("webgl-unavailable");
  console.warn(`WebGL renderer unavailable: ${errorMessage(error)}`);
}

const scene = new THREE.Scene();
const compactionPulseGroup = new THREE.Group();
compactionPulseGroup.renderOrder = 4;
scene.add(compactionPulseGroup);
const steeringPulseGroup = new THREE.Group();
steeringPulseGroup.renderOrder = 4.2;
scene.add(steeringPulseGroup);

const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1200);
camera.position.set(0, DEFAULT_2D_CAMERA_HEIGHT, 0.01);

const controls = new OrbitControls(camera, renderer?.domElement ?? canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.07;
controls.enableRotate = false;
controls.enableZoom = false;
controls.mouseButtons.LEFT = THREE.MOUSE.PAN;
controls.mouseButtons.RIGHT = THREE.MOUSE.ROTATE;
controls.maxDistance = Number.POSITIVE_INFINITY;
controls.minDistance = 0;
controls.target.set(0, 0, 0);

const raycaster = new THREE.Raycaster();
raycaster.params.Points.threshold = 1.05;
const pointer = new THREE.Vector2();
const scratchObject = new THREE.Object3D();
const scratchColor = new THREE.Color();
const scratchVector = new THREE.Vector3();
const cameraFlyForward = new THREE.Vector3();
const cameraFlyRight = new THREE.Vector3();
const cameraFlyMove = new THREE.Vector3();
const cameraFlyLookEuler = new THREE.Euler(0, 0, 0, "YXZ");
const whiteColor = new THREE.Color(0xffffff);

let graph: SessionGraph | null = null;
let nodes: SceneNode[] = [];
let connectors: Connector[] = [];
let nodeById = new Map<string, SceneNode>();
let nodesByPromptId = new Map<string, SceneNode[]>();
let activeConnectors: Connector[] = [];
let meshBuckets: Partial<Record<SceneBucket, NodeInstancedMesh>> = {};
let lineMesh: THREE.LineSegments<THREE.BufferGeometry, THREE.LineBasicMaterial> | null = null;
let pointMesh: NodePoints | null = null;
const compactionPulseMeshes = new Map<string, PulseMesh[]>();
const steeringPulseMeshes = new Map<string, PulseMesh[]>();
let activePromptId: string | null = null;
let selectedNodeId: string | null = null;
let streamTimer: TimerId | null = null;
let statusPollTimer: TimerId | null = null;
let liveRetryPollTimer: TimerId | null = null;
let liveEvents: EventSource | null = null;
let pollInFlight = false;
let graphRefreshTimer: TimerId | null = null;
let promptSearchTextCache = new Map<string, string>();
let pendingRefreshBaseline: { previousLineCount: number; previousLatest: number } | null = null;
let nextGraphRequestId = 0;
let latestAppliedGraphRequestId = 0;
let mode: Mode = "overview";
let activeAppMode: AppMode = normalizeAppMode(new URLSearchParams(window.location.search).get("mode"));
let overviewCameraMode: OverviewCameraMode = "three-d";
let activeSource: SessionSource = normalizeSource(new URLSearchParams(window.location.search).get("source"));
let activeSessionPath: string | null = normalizeSessionPath(new URLSearchParams(window.location.search).get("session"));
let sessionOptions: SessionListItem[] = [];
let diffRightSessionPath: string | null = null;
let diffResult: TraceDiff | null = null;
let diffLoading = false;
let diffError: string | null = null;
let nextDiffRequestId = 0;
let unknownsReport: UnknownsReport | null = null;
let unknownsLoading = false;
let unknownsError: string | null = null;
let unknownsReportPromise: Promise<UnknownsReport | null> | null = null;
let activeSessionFilter: SessionFilter = "live";
let activeMetric: Metric | null = null;
let searchTerm = "";
let rawExpanded = true;
let isTailing = true;
let liveEventsConnected = false;
let sessionSwitchInProgress = false;
let activeInspectorPanel: InspectorPanel = "sessions";
let inspectorCollapsed = false;
let eventContextCollapsed = false;
let hasRenderedInitialGraph = false;
let sessionLoadGeneration = 0;
let previousLatestEventIndex: number | null = null;
let lastStatusGraphChanged = false;
let compactionInProgress = false;
let compactionProgressStartedAt = 0;
let liveCues: LiveTailCues = emptyLiveCues();
let newEventFloor = Number.POSITIVE_INFINITY;
let liveGraphAnimationTimer: TimerId | null = null;
let viewportRefreshQueued = false;
let viewportRefreshNeedsOverview = false;
let pointColorsDirty = true;
const activeCameraFlyKeys = new Set<string>();
let cameraPanActive = false;
let cameraFlyLookActive = false;
let cameraFlyLookPointerId: number | null = null;
let cameraFlyLookLastX = 0;
let cameraFlyLookLastY = 0;
let lastFrameTime = performance.now() / 1000;
let elapsedTime = 0;

const kindColor: Record<string, number> = {
  prompt: 0x63e7ff,
  local: 0xf2be5c,
  browser: 0x71f2a2,
  web: 0x7d93ff,
  coordination: 0xf26d6d,
  tool: 0xb7c8cc,
  assistant: 0xffffff,
  message: 0xffffff,
  error: 0xff5f66,
  long: 0xffbd4a,
  file: 0x64f280,
  diff: 0x43d9ff,
  artifact: 0x9068ff,
  compaction: 0xf76fff,
  subagent: 0x8f7dff,
  "subagent-result": 0xc6b8ff,
  "file-add": 0x64f280,
  "file-update": 0x43d9ff,
  "file-delete": 0xff5f66,
  "file-move": 0xffbd4a,
};

function normalizeSource(value: string | null | undefined): SessionSource {
  return value === "claude" ? "claude" : "codex";
}

function normalizeAppMode(value: string | null | undefined): AppMode {
  const normalized = value?.trim().toLowerCase();
  return normalized && APP_MODE_SET.has(normalized as AppMode) ? (normalized as AppMode) : "summary";
}

function sourceLabel(source: SessionSource = activeSource): string {
  return source === "claude" ? "Claude" : "Codex";
}

function normalizeSessionPath(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

function removeTokenFromVisibleUrl(): void {
  const url = new URL(window.location.href);
  if (!url.searchParams.has("token")) {
    return;
  }
  url.searchParams.delete("token");
  window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
}

const localSessionToken = (() => {
  const queryParams = new URLSearchParams(window.location.search);
  const queryToken = queryParams.get("token");
  try {
    const token = queryToken || sessionStorage.getItem("perlustronToken");
    if (token) {
      sessionStorage.setItem("perlustronToken", token);
    }
    if (queryParams.has("token")) {
      removeTokenFromVisibleUrl();
    }
    return token;
  } catch {
    return queryToken;
  }
})();

interface SessionQueryOptions {
  includeSession?: boolean;
  includeSource?: boolean;
  sessionPath?: string | null;
}

function applySessionQuery(
  url: URL,
  { includeSession = true, includeSource = true, sessionPath = activeSessionPath }: SessionQueryOptions = {}
): URL {
  if (includeSource) {
    url.searchParams.set("source", activeSource);
  }
  if (includeSession && sessionPath) {
    url.searchParams.set("session", sessionPath);
  }
  if (localSessionToken) {
    url.searchParams.set("token", localSessionToken);
  }
  return url;
}

function sessionApiUrl(path: string, options: SessionQueryOptions = {}): URL {
  const url = new URL(path, window.location.origin);
  return applySessionQuery(url, options);
}

function isCurrentSessionLoad(generation: number): boolean {
  return generation === sessionLoadGeneration;
}

const nodeGeometry = new THREE.SphereGeometry(0.78, 16, 10);
const promptGeometry = new THREE.CylinderGeometry(0.72, 0.72, 0.12, 32);
const compactionGeometry = new THREE.OctahedronGeometry(0.72, 0);
const fileChangeGeometry = new THREE.BoxGeometry(0.96, 0.12, 0.58);
const compactionPulseGeometry = new THREE.RingGeometry(0.78, 0.9, 96);
const steeringPulseGeometry = new THREE.RingGeometry(0.9, 1.02, 96);
const nodeMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
});
const promptMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
});
const compactionMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
});
const fileChangeMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
});

scene.add(new THREE.HemisphereLight(0x85f1ff, 0x101010, 1.5));
const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
keyLight.position.set(14, 24, 12);
scene.add(keyLight);

const grid = new THREE.GridHelper(2400, 240, 0x16393f, 0x16393f);
grid.position.y = -1.4;
grid.material.transparent = true;
grid.material.opacity = 0.34;
scene.add(grid);

streamClose.addEventListener("click", () => {
  selectedNodeId = null;
  hideEventPopup();
  syncInstanceColors();
  syncEventContextActions();
});

streamMinimize.addEventListener("click", () => setEventContextCollapsed(!eventContextCollapsed));
streamCopyRef.addEventListener("click", copySelectedEventRef);
streamOpenTimeline.addEventListener("click", () => openSelectedEventMode("timeline"));
streamOpenTranscript.addEventListener("click", () => openSelectedEventMode("transcript"));
streamOpenRaw.addEventListener("click", () => openSelectedEventMode("raw"));
setEventContextCollapsed(false);

window.addEventListener("resize", resize);
canvas.addEventListener("contextmenu", preventCanvasContextMenu);
canvas.addEventListener("wheel", handleCameraZoomWheel, { passive: false });
canvas.addEventListener("pointerdown", handleCanvasPointerLockPointerDown);
canvas.addEventListener("pointerdown", handleCameraFlyLookPointerDown);
canvas.addEventListener("pointermove", updatePointer);
canvas.addEventListener("pointermove", handleCameraFlyLookPointerMove);
canvas.addEventListener("pointerup", endCameraFlyLookPointer);
canvas.addEventListener("pointercancel", endCameraFlyLookPointer);
canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("dblclick", onCanvasDoubleClick);
document.addEventListener("mousemove", handleCanvasPointerLockMouseMove);
document.addEventListener("mouseup", handleCanvasPointerLockMouseUp);
document.addEventListener("pointerlockchange", handleCanvasPointerLockChange);
setupControls();
resize();

await loadSessionOptions();
await loadGraph();
startLiveUpdates();
renderer?.setAnimationLoop(render);

async function loadGraph({
  previousLineCountOverride = null,
  previousLatestOverride = null,
  suppressLiveAnimation = false,
}: LoadGraphOptions = {}): Promise<void> {
  const graphRequestId = ++nextGraphRequestId;
  const requestGeneration = sessionLoadGeneration;
  try {
    const response = await fetch(sessionApiUrl("/api/session"), { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Session API returned ${response.status}`);
    }
    const nextGraph = (await response.json()) as SessionGraph;
    if (!isCurrentSessionLoad(requestGeneration)) {
      return;
    }
    if (graphRequestId < latestAppliedGraphRequestId) {
      return;
    }
    latestAppliedGraphRequestId = graphRequestId;
    const hadGraph = graph !== null;
    const previousFollowFocus =
      hadGraph && shouldAutoFollowLiveGraph() ? latestGraphFocusPoint()?.clone() ?? null : null;
    const previousLineCount = previousLineCountOverride ?? graph?.lineCount ?? nextGraph.lineCount;
    const previousLatest = previousLatestOverride ?? previousLatestEventIndex ?? nextGraph.latestEventIndex;
    const hasNewEvents = hadGraph && nextGraph.latestEventIndex > previousLatest;
    const hasSameEventSignature =
      hadGraph && nextGraph.latestEventIndex === previousLatest && nextGraph.lineCount === previousLineCount;
    const shouldAnimateLiveGraph = hasNewEvents && !suppressLiveAnimation;
    newEventFloor = shouldAnimateLiveGraph ? previousLatest : Number.POSITIVE_INFINITY;
    previousLatestEventIndex = nextGraph.latestEventIndex;
    lastStatusGraphChanged = false;
    graph = nextGraph;
    promptSearchTextCache.clear();
    if (hasSameEventSignature && hasRenderedInitialGraph) {
      updateLiveChrome();
      finishSessionGraphLoad();
      return;
    }
    if (hadGraph && hasRenderedInitialGraph && patchExistingScene()) {
      updateLiveChrome();
      if (shouldAnimateLiveGraph) {
        followLatestGraphUpdate(previousFollowFocus);
        animateLiveGraphUpdates();
      }
      finishSessionGraphLoad();
      return;
    }
    rebuildScene({
      preserveView: hadGraph && hasRenderedInitialGraph,
      preserveInspector: hadGraph && hasRenderedInitialGraph,
    });
    hasRenderedInitialGraph = true;
    updateLiveChrome();
    if (shouldAnimateLiveGraph) {
      followLatestGraphUpdate(previousFollowFocus);
      animateLiveGraphUpdates();
    }
    if ((nextGraph.pendingBytes ?? 0) > 0 && !graphRefreshTimer) {
      scheduleGraphRefresh(nextGraph.lineCount, previousLatestEventIndex ?? nextGraph.latestEventIndex);
    }
    finishSessionGraphLoad();
  } catch (error) {
    if (!isCurrentSessionLoad(requestGeneration)) {
      return;
    }
    sessionSwitchInProgress = false;
    setSessionPickerError();
    logTransientError(error);
  }
}

async function pollSession(): Promise<void> {
  if (pollInFlight) {
    return;
  }

  pollInFlight = true;
  const pollGeneration = sessionLoadGeneration;
  try {
    if (!graph) {
      await loadGraph();
      return;
    }

    const status = await fetchSessionStatus();
    if (!isCurrentSessionLoad(pollGeneration)) {
      return;
    }
    handleSessionStatus(status);
  } catch (error) {
    logTransientError(error);
  } finally {
    pollInFlight = false;
  }
}

async function fetchSessionStatus(): Promise<SessionStatus> {
  const response = await fetch(sessionApiUrl("/api/session/status"), { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Session status returned ${response.status}`);
  }
  return (await response.json()) as SessionStatus;
}

async function fetchTraceDiff(rightSessionPath: string): Promise<TraceDiff> {
  const current = currentGraph();
  const url = sessionApiUrl("/api/session/diff");
  url.searchParams.set("leftSession", current.sessionPath);
  url.searchParams.set("rightSession", rightSessionPath);
  url.searchParams.set("redacted", "true");
  url.searchParams.set("profile", "strict");
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Diff API returned ${response.status}`);
  }
  return (await response.json()) as TraceDiff;
}

async function fetchUnknownsReport(): Promise<UnknownsReport> {
  const url = sessionApiUrl("/api/session/unknowns");
  url.searchParams.set("profile", "strict");
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Unknowns API returned ${response.status}`);
  }
  return (await response.json()) as UnknownsReport;
}

async function loadSessionOptions({
  retryWithoutSelection = true,
  generation = sessionLoadGeneration,
}: { retryWithoutSelection?: boolean; generation?: number } = {}): Promise<void> {
  setSessionPickerLoading();
  try {
    const response = await fetch(sessionApiUrl("/api/sessions"), { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Sessions API returned ${response.status}`);
    }
    const list = (await response.json()) as SessionListResponse;
    if (!isCurrentSessionLoad(generation)) {
      return;
    }
    sessionOptions = list.sessions ?? [];
    renderSessionOptions(list);
  } catch (error) {
    if (!isCurrentSessionLoad(generation)) {
      return;
    }
    if (activeSessionPath && retryWithoutSelection) {
      activeSessionPath = null;
      syncSessionUrl();
      await loadSessionOptions({ retryWithoutSelection: false, generation });
      return;
    }
    sessionOptions = [];
    renderSessionOptions();
    logTransientError(error);
  }
}

function renderSessionOptions(list?: SessionListResponse): void {
  const fragment = document.createDocumentFragment();
  const selectedPath = list?.selectedPath || activeSessionPath || sessionOptions[0]?.path || "";

  if (!sessionOptions.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No sessions found";
    fragment.append(option);
    sessionSelect.replaceChildren(fragment);
    sessionSelect.disabled = true;
    sessionSelectStatus.textContent = "0";
    return;
  }

  sessionOptions.forEach((session) => {
    const option = document.createElement("option");
    option.value = session.path;
    option.textContent = sessionOptionText(session);
    option.title = session.path;
    fragment.append(option);
  });
  sessionSelect.replaceChildren(fragment);
  sessionSelect.value = selectedPath;
  sessionSelect.disabled = false;
  sessionSelectStatus.textContent = `${sessionOptions.length}`;
}

function sessionOptionText(session: SessionListItem): string {
  const parts = [
    session.isLive ? "Live" : "",
    session.explicit ? "Default" : "",
    session.label,
    formatSessionModified(session.lastModifiedAt),
    formatBytes(session.byteLength),
  ].filter(Boolean);
  return parts.join(" - ");
}

async function switchSession(sessionPath: string | null | undefined): Promise<void> {
  const nextSessionPath = normalizeSessionPath(sessionPath);
  if (nextSessionPath === activeSessionPath) {
    return;
  }

  stopLiveUpdates();
  activeSessionPath = nextSessionPath;
  diffResult = null;
  diffError = null;
  unknownsReport = null;
  unknownsError = null;
  sessionSwitchInProgress = true;
  syncSessionUrl();
  resetSessionViewState();
  const switchGeneration = sessionLoadGeneration;
  setSessionLoadingChrome(nextSessionPath);
  await loadGraph({ suppressLiveAnimation: true });
  if (isCurrentSessionLoad(switchGeneration)) {
    startLiveUpdates();
  }
}

function syncSessionUrl(): void {
  const url = new URL(window.location.href);
  url.searchParams.set("source", activeSource);
  url.searchParams.set("mode", activeAppMode);
  if (activeSessionPath) {
    url.searchParams.set("session", activeSessionPath);
  } else {
    url.searchParams.delete("session");
  }
  url.searchParams.delete("token");
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

function resetSessionViewState(): void {
  sessionLoadGeneration += 1;
  if (graphRefreshTimer) {
    clearTimeout(graphRefreshTimer);
  }
  graphRefreshTimer = null;
  pendingRefreshBaseline = null;
  nextGraphRequestId = 0;
  latestAppliedGraphRequestId = 0;
  selectedNodeId = null;
  activePromptId = null;
  mode = "overview";
  previousLatestEventIndex = null;
  lastStatusGraphChanged = false;
  liveCues = emptyLiveCues();
  compactionInProgress = false;
  compactionProgressStartedAt = 0;
  newEventFloor = Number.POSITIVE_INFINITY;
  if (liveGraphAnimationTimer) {
    clearTimeout(liveGraphAnimationTimer);
  }
  liveGraphAnimationTimer = null;
  hasRenderedInitialGraph = false;
  graph = null;
  nodes = [];
  connectors = [];
  nodeById.clear();
  nodesByPromptId.clear();
  clearWorkflowMeshes();
  resetInspector();
}

function setSessionPickerLoading(): void {
  sessionSelect.disabled = true;
  sessionSelectStatus.textContent = "Loading";
}

function finishSessionGraphLoad(): void {
  setSessionPickerReady({ switched: sessionSwitchInProgress });
  sessionSwitchInProgress = false;
}

function setSessionPickerReady({ switched = false }: { switched?: boolean } = {}): void {
  sessionSelect.disabled = sessionOptions.length === 0;
  sessionSelectStatus.textContent = switched ? "Loaded" : sessionOptions.length ? `${sessionOptions.length}` : "0";
}

function setSessionPickerError(): void {
  sessionSelect.disabled = sessionOptions.length === 0;
  sessionSelectStatus.textContent = "Error";
}

function setSessionLoadingChrome(sessionPath: string | null): void {
  const label = sessionLabelForPath(sessionPath);
  sessionTitle.textContent = "Loading session";
  sessionMeta.textContent = label;
  stageTurnCount.textContent = "Loading";
  stageStarted.textContent = "Reading JSONL";
  sidebarSessionName.textContent = "Loading session";
  sidebarSource.textContent = sourceLabel();
  sidebarTurns.textContent = "0";
  sidebarRecords.textContent = "0";
  sidebarLiveStatus.textContent = "Loading";
  sidebarSessionPath.textContent = label;
  sidebarSessionPath.title = sessionPath || "Latest session";
  liveState.textContent = "LOAD";
  liveCopy.textContent = "Switching session...";
  setSessionPickerLoading();
}

function sessionLabelForPath(sessionPath: string | null): string {
  if (!sessionPath) {
    return "Latest session";
  }
  const option = sessionOptions.find((session) => session.path === sessionPath);
  return option?.label || shortPath(sessionPath) || sessionPath;
}

function handleSessionStatus(status: SessionStatus): void {
  if (!graph) {
    void loadGraph();
    return;
  }

  const current = graph;
  const previousLineCount = current.lineCount;
  const previousLatest = previousLatestEventIndex ?? current.latestEventIndex;
  const previousByteLength = current.byteLength ?? current.processedByteLength ?? 0;
  const statusByteLength = status.byteLength ?? previousByteLength;
  const currentPendingBytes = current.pendingBytes ?? 0;
  const statusPendingBytes = status.pendingBytes ?? 0;
  const statusGraphChanged = status.graphChanged === true;
  const nextLiveCues = normalizeLiveCues(status);
  const statusCompactionInProgress = nextLiveCues.compactionInProgress;
  const liveCueChanged = liveCueSignature(nextLiveCues) !== liveCueSignature(liveCues);
  const byteDelta = Math.max(0, statusByteLength - previousByteLength);
  const hasUnprocessedBytes = statusPendingBytes > 0;
  const hasAppendedBytes = byteDelta > 0 || statusPendingBytes > currentPendingBytes;
  const hasRenderableCountChange = status.renderableEventCount !== renderableEventCount(current);
  const hasParsedAdvance =
    statusPendingBytes === 0 &&
    (status.latestEventIndex > previousLatest || status.lineCount > previousLineCount || hasRenderableCountChange);
  const hasSameEventSignature =
    status.latestEventIndex === previousLatest &&
    status.lineCount === previousLineCount &&
    byteDelta === 0 &&
    statusPendingBytes === currentPendingBytes &&
    statusGraphChanged === lastStatusGraphChanged &&
    !liveCueChanged;
  const shouldRefreshGraph =
    statusGraphChanged ||
    (hasUnprocessedBytes && !statusCompactionInProgress) ||
    (hasAppendedBytes && !statusCompactionInProgress) ||
    hasRenderableCountChange ||
    hasParsedAdvance;

  applySessionStatus(status, nextLiveCues);
  if (liveCueChanged && (statusCompactionInProgress || !shouldRefreshGraph)) {
    rebuildScene({ preserveView: true, preserveInspector: true });
  }
  if (shouldRefreshGraph && (!hasSameEventSignature || hasUnprocessedBytes || hasRenderableCountChange || hasParsedAdvance)) {
    scheduleGraphRefresh(previousLineCount, previousLatest);
  }
}

function renderableEventCount(current: SessionGraph): number {
  return (
    current.totals.promptCount +
    current.totals.callCount +
    current.totals.assistantMessageCount +
    current.totals.fileChangeCount +
    current.totals.compactionCount
  );
}

function normalizeLiveCues(status: SessionStatus): LiveTailCues {
  const cues = status.liveCues ?? emptyLiveCues();
  return {
    compactionInProgress: cues.compactionInProgress || status.compactionInProgress === true,
    pendingPrompt: cues.pendingPrompt ?? null,
    assistantStreaming: cues.assistantStreaming === true,
    latestAssistantEventIndex: cues.latestAssistantEventIndex ?? null,
    latestAssistantPreview: cues.latestAssistantPreview ?? null,
    latestTokenSample: cues.latestTokenSample ?? null,
    activeToolCalls: cues.activeToolCalls ?? [],
    completedToolCalls: cues.completedToolCalls ?? [],
  };
}

function liveCueSignature(cues: LiveTailCues): string {
  return [
    cues.compactionInProgress ? "compact:1" : "compact:0",
    cues.pendingPrompt
      ? `prompt:${cues.pendingPrompt.eventIndex}:${textStamp(cues.pendingPrompt.title)}:${textStamp(cues.pendingPrompt.text)}`
      : "prompt:",
    cues.assistantStreaming
      ? `assistant:${cues.latestAssistantEventIndex ?? ""}:${textStamp(cues.latestAssistantPreview)}`
      : "assistant:",
    cues.latestTokenSample
      ? `tokens:${cues.latestTokenSample.eventIndex}:${cues.latestTokenSample.totalTokens}:${cues.latestTokenSample.contextPercent ?? ""}`
      : "tokens:",
    `active:${toolCueSignature(cues.activeToolCalls)}`,
    `done:${toolCueSignature(cues.completedToolCalls)}`,
  ].join("|");
}

function toolCueSignature(calls: LiveToolCue[]): string {
  return calls
    .map(
      (call) =>
        `${call.id}:${call.eventIndex}:${call.status}:${call.completedAt ?? ""}:${textStamp(call.argumentPreview)}:${textStamp(call.outputPreview)}`
    )
    .join(",");
}

function textStamp(value: string | null | undefined): string {
  return value ? `${value.length}:${value.slice(0, 48)}` : "";
}

function followLatestGraphUpdate(previousFocus: THREE.Vector3 | null = null): void {
  if (!shouldAutoFollowLiveGraph()) {
    return;
  }

  const latest = latestGraphFocusNode();
  if (!latest) {
    return;
  }

  if (latest.type === "prompt") {
    activePromptId = latest.id;
  } else if (latest.type === "compaction") {
    activePromptId = null;
  } else {
    activePromptId = latest.promptId;
  }
  const shouldRestartStream = selectedNodeId !== latest.id;
  const contextWasVisible = isEventPopupVisible();
  mode = "overview";
  setLayoutTargets({ preserveCamera: true });
  if (previousFocus) {
    panWithFollowFocus(previousFocus, focusPointForNode(latest));
  } else {
    frameOverview({ preserveDistance: true });
  }
  renderPromptList();
  if (contextWasVisible) {
    openStream(latest, { restartStream: shouldRestartStream });
  } else {
    selectedNodeId = latest.id;
    syncInstanceColors();
  }
}

function shouldAutoFollowLiveGraph(): boolean {
  return isTailing && activeSessionFilter === "live" && !searchTerm && !activeMetric;
}

function panWithFollowFocus(previousFocus: THREE.Vector3, nextFocus: THREE.Vector3): void {
  const deltaX = nextFocus.x - previousFocus.x;
  const deltaY = nextFocus.y - previousFocus.y;
  const deltaZ = nextFocus.z - previousFocus.z;
  controls.target.x += deltaX;
  controls.target.y += deltaY;
  controls.target.z += deltaZ;
  camera.position.x += deltaX;
  camera.position.y += deltaY;
  camera.position.z += deltaZ;
  controls.update();
}

function scheduleGraphRefresh(previousLineCount: number, previousLatest: number): void {
  if (!pendingRefreshBaseline) {
    pendingRefreshBaseline = { previousLineCount, previousLatest };
  }
  if (graphRefreshTimer) {
    clearTimeout(graphRefreshTimer);
  }
  graphRefreshTimer = setTimeout(() => {
    const baseline = pendingRefreshBaseline;
    pendingRefreshBaseline = null;
    graphRefreshTimer = null;
    if (!baseline) {
      return;
    }
    void loadGraph({
      previousLineCountOverride: baseline.previousLineCount,
      previousLatestOverride: baseline.previousLatest,
      suppressLiveAnimation: false,
    });
  }, GRAPH_REFRESH_COALESCE_MS);
}

function applySessionStatus(status: SessionStatus, nextLiveCues: LiveTailCues): void {
  const current = currentGraph();
  current.source = status.source;
  current.sessionPath = status.sessionPath;
  current.sessionId = status.sessionId;
  current.generatedAt = status.generatedAt;
  current.lastModifiedAt = status.lastModifiedAt;
  current.lineCount = status.lineCount;
  current.latestEventIndex = status.latestEventIndex;
  current.isLive = status.isLive;
  current.byteLength = status.byteLength;
  current.processedByteLength = status.processedByteLength;
  current.pendingBytes = status.pendingBytes;
  lastStatusGraphChanged = status.graphChanged === true;
  liveCues = nextLiveCues;
  setCompactionInProgress(liveCues.compactionInProgress);
  stageStarted.textContent = recordsLabel(status.lineCount, current.pendingBytes);
  liveCount.textContent = `${status.isLive ? current.ui.allCount : 0}`;
  sidebarRecords.textContent = `${status.lineCount}`;
  renderContextPressure(tokenTelemetryWithLiveCue(current.tokenTelemetry, liveCues.latestTokenSample));
  updateLiveChrome();
  renderActiveModePanel();
}

function setCompactionInProgress(next: boolean): boolean {
  if (compactionInProgress === next) {
    return false;
  }
  compactionInProgress = next;
  compactionProgressStartedAt = next ? performance.now() : 0;
  return true;
}

function rebuildScene({ preserveView = false, preserveInspector = false }: { preserveView?: boolean; preserveInspector?: boolean } = {}): void {
  const previousMotion = preserveView ? captureNodeMotionState() : null;
  clearWorkflowMeshes();
  const built = buildNodes(currentGraph());
  nodes = built.nodes;
  connectors = built.connectors;
  indexSceneNodes();
  activePromptId = activePromptId && nodeById.has(activePromptId) ? activePromptId : nodes.find((node) => node.type === "prompt")?.id ?? null;

  updateGraphChrome();

  setLayoutTargets({ preserveCamera: preserveView });
  if (previousMotion) {
    restoreNodeMotionState(previousMotion);
  }
  createInstances();
  createPointMarkers();
  createConnectors();
  updateConnectorGeometry();
  syncInstanceColors();
  if (selectedNodeId && nodeById.has(selectedNodeId)) {
    syncSelectedSource({ restartStream: !preserveInspector });
  } else {
    selectedNodeId = null;
    if (preserveInspector) {
      refreshInspectorTotals();
    } else {
      resetInspector();
    }
  }
}

function updateGraphChrome(): void {
  const current = currentGraph();
  const ui = current.ui;
  const sessionName = ui.sessionName || current.cwd?.split(/[\\/]/).filter(Boolean).at(-1) || `${sourceLabel()} session`;
  sessionTitle.textContent = sessionName;
  sessionMeta.textContent = `${sourceLabel(current.source)}  |  ${shortPath(current.sessionPath)}  |  ${current.cwd || "local"}`;
  stageTurnCount.textContent = `${ui.totalTurns} turns`;
  stageStarted.textContent = recordsLabel(current.lineCount, current.pendingBytes);
  sidebarSessionName.textContent = sessionName;
  sidebarSource.textContent = sourceLabel(current.source);
  sidebarTurns.textContent = `${ui.totalTurns}`;
  sidebarRecords.textContent = `${current.lineCount}`;
  sidebarSessionPath.textContent = shortPath(current.sessionPath) || current.sessionPath;
  sidebarSessionPath.title = current.sessionPath;
  allCount.textContent = `${ui.allCount}`;
  liveCount.textContent = `${ui.liveCount}`;
  pinnedCount.textContent = `${pinnedPromptCount(current)}`;
  metricErrors.textContent = `${ui.metricErrors}`;
  metricLong.textContent = `${ui.metricLongCalls}`;
  metricFiles.textContent = `${ui.metricFiles}`;
  metricDiffs.textContent = `${ui.metricDiffs}`;
  metricArtifacts.textContent = `${ui.metricArtifacts}`;
  metricCompactions.textContent = `${ui.metricCompactions}`;
  renderContextPressure(current.tokenTelemetry);
  updateSavedViewChrome(current);
  renderRootList();
  renderMetadataList();
  renderParserHealth(current.parserHealth);
  renderPromptList();
  renderActiveModePanel();
}

function renderParserHealth(health: ParserHealth | undefined): void {
  if (!health) {
    parserHealthStatus.textContent = "Unavailable";
    parserHealthSummary.replaceChildren();
    return;
  }
  const issues = health.unknownEventCount + health.malformedLineCount + health.skippedLargePayloadCount;
  parserHealthStatus.textContent = issues ? `${issues} issue${issues === 1 ? "" : "s"}` : "Healthy";
  const rows: [string, string][] = [
    ["Lines read", `${health.totalLinesRead}`],
    ["Parsed events", `${health.parsedEventCount}`],
    ["Renderable events", `${health.renderableEventCount}`],
    ["Unknown events", `${health.unknownEventCount}`],
    ["Malformed lines", `${health.malformedLineCount}`],
    ["Skipped large payloads", `${health.skippedLargePayloadCount}`],
    ["Redacted fields", `${health.redactedFieldCount}`],
    ["Images", `${health.imageCount}`],
    ["Tool calls", `${health.toolCallCount}`],
    ["Tool results", `${health.toolResultCount}`],
    ["File activity", `${health.fileActivityCount}`],
    ["Compactions", `${health.compactionCount}`],
    ["Token telemetry", health.tokenTelemetryAvailable ? "available" : "not logged"],
    ["Parser", `${health.parserVersion} / ${health.schemaVersion}`],
  ];
  const fragment = document.createDocumentFragment();
  rows.forEach(([label, value]) => {
    const row = document.createElement("div");
    const labelElement = document.createElement("span");
    const valueElement = document.createElement("strong");
    labelElement.textContent = label;
    valueElement.textContent = value;
    row.append(labelElement, valueElement);
    fragment.append(row);
  });
  if (health.unknownEventTypes?.length) {
    const unknowns = document.createElement("pre");
    unknowns.textContent = health.unknownEventTypes
      .map((eventType) => `${eventType.sourceEventType}: ${eventType.count}`)
      .join("\n");
    fragment.append(unknowns);
  }
  parserHealthSummary.replaceChildren(fragment);
}

function renderContextPressure(telemetry: TokenTelemetry | undefined): void {
  const latestPercent = telemetry?.latestContextPercent ?? null;
  contextPressureValue.textContent =
    latestPercent === null ? "n/a" : `${Math.min(999, Math.round(latestPercent))}%`;
  contextPressureValue.title =
    telemetry?.latestTotalTokens && telemetry?.contextWindow
      ? `${formatNumber(telemetry.latestTotalTokens)} / ${formatNumber(telemetry.contextWindow)} tokens`
      : "No token telemetry in this session";

  const samples = telemetry?.samples?.length ? telemetry.samples.slice(-CONTEXT_PRESSURE_SAMPLE_LIMIT) : [];
  if (!samples.length) {
    contextPressureBars.replaceChildren();
    return;
  }

  const fragment = document.createDocumentFragment();
  samples.forEach((sample) => {
    const bar = document.createElement("span");
    const height = Math.max(2, Math.min(28, Math.round((sample.contextPercent ?? 0) / 4)));
    bar.style.height = `${height}px`;
    bar.title = `${Math.round(sample.contextPercent ?? 0)}% context at event ${sample.eventIndex}`;
    fragment.append(bar);
  });
  contextPressureBars.replaceChildren(fragment);
}

function tokenTelemetryWithLiveCue(
  telemetry: TokenTelemetry,
  latestTokenSample: TokenSample | null
): TokenTelemetry {
  if (!latestTokenSample) {
    return telemetry;
  }

  const samples = telemetry.samples ?? [];
  const lastSample = samples.at(-1);
  const mergedSamples =
    lastSample?.eventIndex === latestTokenSample.eventIndex
      ? samples
      : [...samples, latestTokenSample].slice(-CONTEXT_PRESSURE_SAMPLE_LIMIT);
  return {
    ...telemetry,
    samples: mergedSamples,
    latestTotalTokens: latestTokenSample.totalTokens,
    contextWindow: latestTokenSample.contextWindow,
    latestContextPercent: latestTokenSample.contextPercent,
    primaryRateLimitPercent: latestTokenSample.primaryRateLimitPercent,
    secondaryRateLimitPercent: latestTokenSample.secondaryRateLimitPercent,
  };
}

function updateSavedViewChrome(current: SessionGraph): void {
  const ui = current.ui;
  const latestPrompt = current.prompts.at(-1);
  savedErrorsSummary.textContent = `${ui.metricErrors} errors, ${ui.metricLongCalls} long calls`;
  savedFilesSummary.textContent = `${ui.metricFiles} file operations, ${ui.metricDiffs} diffs`;
  savedLatestSummary.textContent = latestPrompt
    ? `${latestPrompt.calls.length} calls, ${latestPrompt.fileChanges?.length ?? 0} file changes`
    : "Waiting for session data";
  savedViewCount.textContent = `${savedViewButtons.length}`;
}

function pinnedPromptCount(current: SessionGraph): number {
  return Math.min(3, current.prompts.length);
}

function patchExistingScene(): boolean {
  const built = buildNodes(currentGraph());
  if (built.nodes.length !== nodes.length || built.connectors.length !== connectors.length) {
    return false;
  }
  for (let index = 0; index < built.nodes.length; index += 1) {
    if (built.nodes[index].id !== nodes[index]?.id) {
      return false;
    }
  }
  for (let index = 0; index < built.connectors.length; index += 1) {
    if (!sameConnectorShape(built.connectors[index], connectors[index])) {
      return false;
    }
  }

  const now = performance.now();
  built.nodes.forEach((nextNode, index) => {
    const node = nodes[index];
    node.kind = nextNode.kind;
    node.eventIndex = nextNode.eventIndex;
    node.title = nextNode.title;
    node.body = nextNode.body;
    node.detail = nextNode.detail;
    node.source = nextNode.source;
    if (nextNode.isNew) {
      node.freshUntil = Math.max(node.freshUntil || 0, nextNode.freshUntil || 0);
    }
    node.isNew = nextNode.isNew || nodeIsFreshAt(node, now);
    node.baseScale = nextNode.baseScale;
    node.matrixDirty = true;
    if (mode === "overview") {
      node.target.copy(nextNode.target);
    }
  });

  connectors = built.connectors;
  indexSceneNodes();
  setLayoutTargets({ preserveCamera: true });
  updateConnectorGeometry();
  updateGraphChrome();
  syncInstanceColors();
  if (selectedNodeId && nodeById.has(selectedNodeId)) {
    syncSelectedSource({ restartStream: false });
  } else {
    refreshInspectorTotals();
  }
  return true;
}

function captureNodeMotionState(): Map<string, MotionState> {
  return new Map(
    nodes.map((node) => [
      node.id,
      {
        position: node.position.clone(),
        target: node.target.clone(),
        scale: node.scale,
      },
    ])
  );
}

function indexSceneNodes(): void {
  nodeById = new Map();
  nodesByPromptId = new Map();
  nodes.forEach((node) => {
    nodeById.set(node.id, node);
    const promptNodes = nodesByPromptId.get(node.promptId);
    if (promptNodes) {
      promptNodes.push(node);
    } else {
      nodesByPromptId.set(node.promptId, [node]);
    }
  });
}

function restoreNodeMotionState(previousMotion: Map<string, MotionState>): void {
  const incomingConnectorByToId = new Map(connectors.map((connector) => [connectorToId(connector), connectorFromId(connector)]));
  const compactionHandoffId = compactionProgressCompletionNodeId(previousMotion);
  const compactionHandoffMotion = compactionHandoffId ? previousMotion.get(COMPACTION_PROGRESS_CUE_ID) : null;
  const livePromptHandoffId = livePromptCompletionNodeId(previousMotion);
  const livePromptHandoffMotion = livePromptHandoffId ? previousMotion.get(LIVE_PROMPT_CUE_ID) : null;
  const now = performance.now();
  nodes.forEach((node) => {
    const previous = previousMotion.get(node.id);
    if (previous) {
      node.position.copy(previous.position);
      node.scale = previous.scale;
      node.matrixDirty = true;
      return;
    }

    const handoffMotion =
      node.id === compactionHandoffId
        ? compactionHandoffMotion
        : node.id === livePromptHandoffId
          ? livePromptHandoffMotion
          : null;
    if (handoffMotion) {
      node.position.copy(handoffMotion.position);
      node.scale = Math.max(node.scale, handoffMotion.scale);
      node.freshUntil = Math.min(node.freshUntil || Number.POSITIVE_INFINITY, now + FRESH_ANIMATION_MS * 0.58);
      node.isNew = true;
      node.matrixDirty = true;
      return;
    }

    node.position.copy(mode === "inspect" ? node.target : graphOriginForNewNode(node, previousMotion, incomingConnectorByToId));
    node.matrixDirty = true;
  });
}

function compactionProgressCompletionNodeId(previousMotion: Map<string, MotionState>): string | null {
  if (!previousMotion.has(COMPACTION_PROGRESS_CUE_ID)) {
    return null;
  }

  const completedCompactions = nodes.filter(
    (node): node is CompactionSceneNode =>
      node.type === "compaction" && node.id !== COMPACTION_PROGRESS_CUE_ID && !previousMotion.has(node.id)
  );
  if (!completedCompactions.length) {
    return null;
  }

  return completedCompactions.reduce((latest, node) => (node.eventIndex >= latest.eventIndex ? node : latest)).id;
}

function livePromptCompletionNodeId(previousMotion: Map<string, MotionState>): string | null {
  if (!previousMotion.has(LIVE_PROMPT_CUE_ID)) {
    return null;
  }

  const completedPrompts = nodes.filter(
    (node): node is PromptSceneNode => node.type === "prompt" && node.id !== LIVE_PROMPT_CUE_ID && !previousMotion.has(node.id)
  );
  if (!completedPrompts.length) {
    return null;
  }

  return completedPrompts.reduce((latest, node) => (node.eventIndex >= latest.eventIndex ? node : latest)).id;
}

function graphOriginForNewNode(
  node: SceneNode,
  previousMotion: Map<string, MotionState>,
  incomingConnectorByToId: Map<string, string>
): THREE.Vector3 {
  const fromId = incomingConnectorByToId.get(node.id);
  if (!fromId) {
    return node.target;
  }

  const previousParent = previousMotion.get(fromId);
  if (previousParent) {
    return previousParent.position;
  }

  return nodeById.get(fromId)?.position ?? node.target;
}

type PromptActivityUnit =
  | {
      type: "assistant";
      message: MessageNode;
      calls: CallNode[];
    }
  | {
      type: "call";
      call: CallNode;
    };

interface OverviewLayoutPlan {
  above: number;
  below: number;
  promptCalls: CallNode[];
  subagentBranches: SubagentBranch[];
  activityUnits: PromptActivityUnit[];
  activityDepth: number;
  fileRows: number;
}

interface OverviewActivityAnchor {
  id: string;
  eventIndex: number;
}

interface TranscriptEntry {
  label: string;
  title: string;
  body: string;
  eventIndex: number;
}

function promptActivityUnits(prompt: PromptNode, calls: CallNode[]): PromptActivityUnit[] {
  const messageIds = new Set(prompt.assistantMessages.map((message) => message.id));
  const callsByMessage = new Map<string, CallNode[]>();
  const groupedCallIds = new Set<string>();

  calls.forEach((call) => {
    const messageId = call.assistantMessageId || "";
    if (!messageIds.has(messageId)) {
      return;
    }
    const groupedCalls = callsByMessage.get(messageId) ?? [];
    groupedCalls.push(call);
    callsByMessage.set(messageId, groupedCalls);
    groupedCallIds.add(call.id);
  });

  const units: PromptActivityUnit[] = [
    ...prompt.assistantMessages.map((message) => ({
      type: "assistant" as const,
      message,
      calls: callsByMessage.get(message.id) ?? [],
    })),
    ...calls
      .filter((call) => !groupedCallIds.has(call.id))
      .map((call) => ({
        type: "call" as const,
        call,
      })),
  ];

  return units.sort((a, b) => {
    const eventDelta = activityUnitEventIndex(a) - activityUnitEventIndex(b);
    if (eventDelta !== 0) {
      return eventDelta;
    }
    return activityUnitOrder(a) - activityUnitOrder(b);
  });
}

function activityUnitEventIndex(unit: PromptActivityUnit): number {
  return unit.type === "assistant" ? unit.message.eventIndex : unit.call.eventIndex;
}

function activityUnitOrder(unit: PromptActivityUnit): number {
  return unit.type === "assistant" ? 0 : 1;
}

function overviewLayoutPlan(source: SessionGraph, item: TimelineEntry): OverviewLayoutPlan {
  if (item.type === "compaction") {
    return {
      above: OVERVIEW_MIN_ABOVE_Z,
      below: OVERVIEW_MIN_BELOW_Z,
      promptCalls: [],
      subagentBranches: [],
      activityUnits: [],
      activityDepth: 0,
      fileRows: 0,
    };
  }

  const prompt = item.prompt;
  const promptCalls = callsWithLiveCues(source, prompt);
  const subagentBranches = subagentBranchesForCalls(promptCalls);
  const branchCallIds = new Set(
    subagentBranches.flatMap((branch) => [branch.launch?.id, branch.result?.id].filter((id): id is string => Boolean(id)))
  );
  const regularCalls = promptCalls.filter((call) => !branchCallIds.has(call.id));
  const activityUnits = promptActivityUnits(prompt, regularCalls);
  const activityDepth = overviewActivityDepth(activityUnits);
  const fileRows = Math.ceil((prompt.fileChanges?.length ?? 0) / OVERVIEW_FILE_COLUMNS);
  const above = activityDepth + overviewFileDepth(fileRows) + OVERVIEW_ITEM_PADDING_Z;
  const below = activityDepth + overviewSubagentDepth(subagentBranches) + OVERVIEW_ITEM_PADDING_Z;

  return {
    above: Math.max(OVERVIEW_MIN_ABOVE_Z, above),
    below: Math.max(OVERVIEW_MIN_BELOW_Z, below),
    promptCalls,
    subagentBranches,
    activityUnits,
    activityDepth,
    fileRows,
  };
}

function overviewActivityDepth(activityUnits: PromptActivityUnit[]): number {
  if (!activityUnits.length) {
    return 0;
  }

  let maxZ = 0;
  let minZ = 0;
  activityUnits.forEach((unit, unitIndex) => {
    const unitZ = overviewActivityUnitZ(unitIndex);
    maxZ = Math.max(maxZ, unitZ);
    minZ = Math.min(minZ, unitZ);
    if (unit.type === "assistant") {
      unit.calls.forEach((_, callIndex) => {
        const callZ = unitZ + groupedCallSlotZ(callIndex, unit.calls.length);
        maxZ = Math.max(maxZ, callZ);
        minZ = Math.min(minZ, callZ);
      });
    }
  });
  return Math.max(Math.abs(minZ), Math.abs(maxZ)) + OVERVIEW_ACTIVITY_MARGIN_Z;
}

function overviewActivityUnitZ(unitIndex: number): number {
  return overviewActivityUnitOffset(unitIndex).z;
}

function overviewActivityUnitOffset(unitIndex: number): THREE.Vector3 {
  const angle = OVERVIEW_SPIRAL_ANGLE_START + unitIndex * OVERVIEW_SPIRAL_ANGLE_STEP;
  const radius =
    OVERVIEW_SPIRAL_RADIUS +
    Math.min(OVERVIEW_SPIRAL_MAX_RADIUS_GROWTH, unitIndex * OVERVIEW_SPIRAL_RADIUS_GROWTH);
  return new THREE.Vector3(
    Math.sin(angle) * radius,
    -OVERVIEW_HELIX_START_DROP_Y - unitIndex * OVERVIEW_HELIX_STEP_Y + Math.cos(angle) * OVERVIEW_HELIX_Y_WAVE,
    Math.cos(angle) * radius
  );
}

function overviewActivityUnitTarget(promptZ: number, unitIndex: number): THREE.Vector3 {
  const offset = overviewActivityUnitOffset(unitIndex);
  return new THREE.Vector3(offset.x, OVERVIEW_PROMPT_Y + offset.y, promptZ + offset.z);
}

function overviewActivityConnector(
  fromId: string,
  toId: string,
  promptZ: number,
  fromUnitIndex: number | null,
  toUnitIndex: number
): Connector {
  if (fromUnitIndex == null) {
    const targetOffset = overviewActivityUnitOffset(toUnitIndex);
    return {
      fromId,
      toId,
      waypoints: [
        new THREE.Vector3(0, OVERVIEW_PROMPT_Y + targetOffset.y * 0.36, promptZ + targetOffset.z * 0.18),
        new THREE.Vector3(targetOffset.x * 0.58, OVERVIEW_PROMPT_Y + targetOffset.y * 0.72, promptZ + targetOffset.z * 0.58),
      ],
    };
  }

  const waypointCount = 5;
  const waypoints: THREE.Vector3[] = [];
  for (let waypointIndex = 1; waypointIndex <= waypointCount; waypointIndex += 1) {
    const progress = waypointIndex / (waypointCount + 1);
    const interpolatedUnitIndex = fromUnitIndex + (toUnitIndex - fromUnitIndex) * progress;
    const offset = overviewActivityUnitOffset(interpolatedUnitIndex);
    waypoints.push(new THREE.Vector3(offset.x, OVERVIEW_PROMPT_Y + offset.y, promptZ + offset.z));
  }
  return { fromId, toId, waypoints };
}

function groupedCallSlotZ(callIndex: number, callCount: number): number {
  const row = Math.floor(callIndex / OVERVIEW_GROUPED_CALLS_PER_ROW);
  const slot = callIndex % OVERVIEW_GROUPED_CALLS_PER_ROW;
  const rowCount = Math.min(callCount - row * OVERVIEW_GROUPED_CALLS_PER_ROW, OVERVIEW_GROUPED_CALLS_PER_ROW);
  return (slot - (rowCount - 1) / 2) * OVERVIEW_GROUPED_CALL_Z_GAP + row * 0.32;
}

function overviewFileDepth(fileRows: number): number {
  if (fileRows <= 0) {
    return 0;
  }
  return OVERVIEW_FILE_BAND_OFFSET_Z + (fileRows - 1) * OVERVIEW_FILE_ROW_GAP_Z + OVERVIEW_FILE_DEPTH_PADDING_Z;
}

function overviewSubagentDepth(subagentBranches: SubagentBranch[]): number {
  if (!subagentBranches.length) {
    return 0;
  }
  const childDepth = subagentBranches.reduce((maxDepth, branch) => {
    const groups = subagentChildGroups(branch.nodes);
    return Math.max(maxDepth, groups.length * 3.0);
  }, 0);
  return OVERVIEW_SUBAGENT_BAND_OFFSET_Z + OVERVIEW_SUBAGENT_DEPTH_Z + childDepth;
}

function outwardSide(target: THREE.Vector3): -1 | 1 {
  return target.x < 0 ? -1 : 1;
}

function overviewRadialFrame(target: THREE.Vector3, axisZ: number): {
  radialX: number;
  radialZ: number;
  tangentX: number;
  tangentZ: number;
} {
  let radialX = target.x;
  let radialZ = target.z - axisZ;
  let length = Math.hypot(radialX, radialZ);
  if (length < 0.001) {
    radialX = outwardSide(target);
    radialZ = 0;
    length = 1;
  }
  radialX /= length;
  radialZ /= length;
  return {
    radialX,
    radialZ,
    tangentX: -radialZ,
    tangentZ: radialX,
  };
}

function assistantGroupedCallTarget(
  anchorTarget: THREE.Vector3,
  axisZ: number,
  callIndex: number,
  callCount: number
): THREE.Vector3 {
  const frame = overviewRadialFrame(anchorTarget, axisZ);
  const tier = Math.floor(callIndex / OVERVIEW_GROUPED_CALLS_PER_ROW);
  const slot = callIndex % OVERVIEW_GROUPED_CALLS_PER_ROW;
  const tangentOffset = groupedCallSlotZ(callIndex, callCount);
  const radialOffset = OVERVIEW_GROUPED_CALL_X_GAP + tier * OVERVIEW_GROUPED_CALL_ROW_X_GAP;
  return new THREE.Vector3(
    anchorTarget.x + frame.radialX * radialOffset + frame.tangentX * tangentOffset,
    anchorTarget.y - 0.48 - slot * OVERVIEW_GROUPED_CALL_Y_GAP - tier * OVERVIEW_GROUPED_CALL_ROW_Y_GAP,
    anchorTarget.z + frame.radialZ * radialOffset + frame.tangentZ * tangentOffset
  );
}

function assistantParentId(call: CallNode, fallbackParentId: string, assistantMessageIds: Set<string>): string {
  const messageId = call.assistantMessageId || "";
  return assistantMessageIds.has(messageId) ? messageId : fallbackParentId;
}

function activityAnchorIdForEvent(
  eventIndex: number | null | undefined,
  anchors: OverviewActivityAnchor[],
  fallbackParentId: string
): string {
  if (!anchors.length || eventIndex == null) {
    return anchors.at(-1)?.id ?? fallbackParentId;
  }

  let selected = fallbackParentId;
  let selectedEventIndex = Number.NEGATIVE_INFINITY;
  anchors.forEach((anchor) => {
    if (anchor.eventIndex <= eventIndex && anchor.eventIndex >= selectedEventIndex) {
      selected = anchor.id;
      selectedEventIndex = anchor.eventIndex;
    }
  });
  return selected;
}

function overviewFileChangeTarget(
  parentTarget: THREE.Vector3,
  axisZ: number,
  fileIndex: number,
  fileCount: number
): THREE.Vector3 {
  const frame = overviewRadialFrame(parentTarget, axisZ);
  const row = Math.floor(fileIndex / OVERVIEW_FILE_COLUMNS);
  const slot = fileIndex % OVERVIEW_FILE_COLUMNS;
  const rowCount = Math.min(fileCount - row * OVERVIEW_FILE_COLUMNS, OVERVIEW_FILE_COLUMNS);
  const centeredSlot = slot - (rowCount - 1) / 2;
  const verticalIndex = row * OVERVIEW_FILE_COLUMNS + slot;
  const radialOffset = OVERVIEW_FILE_PARENT_X_GAP + row * OVERVIEW_FILE_ROW_X_GAP;
  const tangentOffset = centeredSlot * OVERVIEW_FILE_COLUMN_X_GAP;
  return new THREE.Vector3(
    parentTarget.x + frame.radialX * radialOffset + frame.tangentX * tangentOffset,
    parentTarget.y - 1.62 - verticalIndex * OVERVIEW_FILE_Y_GAP - row * OVERVIEW_FILE_ROW_Y_GAP,
    parentTarget.z + frame.radialZ * radialOffset + frame.tangentZ * tangentOffset
  );
}

function overviewFileChangeConnector(
  parentId: string,
  fileId: string,
  parentTarget: THREE.Vector3
): Connector {
  return {
    fromId: parentId,
    toId: fileId,
    waypoints: [new THREE.Vector3(parentTarget.x, parentTarget.y - OVERVIEW_FILE_CONNECTOR_DROP_Y, parentTarget.z)],
  };
}

function buildNodes(source: SessionGraph): BuiltScene {
  const allNodes: SceneNode[] = [];
  const allConnectors: Connector[] = [];
  const timelineItems = timelineEntries(source, { includeCompactionProgress: true });
  const overviewPlans = timelineItems.map((item) => overviewLayoutPlan(source, item));
  const totalSpan = overviewPlans.reduce((sum, plan) => sum + plan.above + plan.below, 0);
  let itemTopZ = totalSpan / 2;
  const freshUntil = performance.now() + FRESH_ANIMATION_MS;
  const centerlineNodes: SceneNode[] = [];

  timelineItems.forEach((item, timelineIndex) => {
    const plan = overviewPlans[timelineIndex];
    const promptZ = itemTopZ - plan.above;
    itemTopZ -= plan.above + plan.below;

    if (item.type === "compaction") {
      const compaction = item.compaction;
      const compactionIsNew = compaction.eventIndex > newEventFloor;
      const compactionNode: CompactionSceneNode = {
        id: compaction.id,
        type: "compaction",
        kind: "compaction",
        promptId: compaction.id,
        promptIndex: item.compactionIndex,
        callIndex: -1,
        eventIndex: compaction.eventIndex,
        title: compaction.title,
        body: compaction.text,
        detail: compaction.detail,
        source: compaction,
        isNew: compactionIsNew,
        freshUntil: compactionIsNew ? freshUntil : 0,
        position: new THREE.Vector3(0, OVERVIEW_COMPACTION_Y, promptZ),
        target: new THREE.Vector3(0, OVERVIEW_COMPACTION_Y, promptZ),
        baseScale: 0.58,
        scale: 0.58,
      };
      allNodes.push(compactionNode);
      centerlineNodes.push(compactionNode);
      return;
    }

    const { prompt, promptIndex } = item;
    const promptNodeStartIndex = allNodes.length;
    const { promptCalls, subagentBranches } = plan;
    const fileChanges = prompt.fileChanges || [];
    const promptIsNew = prompt.eventIndex > newEventFloor;
    const promptNode: PromptSceneNode = {
      id: prompt.id,
      type: "prompt",
      kind: "prompt",
      promptId: prompt.id,
      promptIndex,
      callIndex: -1,
      eventIndex: prompt.eventIndex ?? promptIndex,
      title: prompt.title,
      body: prompt.text,
      detail: prompt.text,
      source: prompt,
      isNew: promptIsNew,
      freshUntil: promptIsNew ? freshUntil : 0,
      position: new THREE.Vector3(0, OVERVIEW_PROMPT_Y, promptZ),
      target: new THREE.Vector3(0, OVERVIEW_PROMPT_Y, promptZ),
      baseScale: 0.78,
      scale: 0.78,
    };
    allNodes.push(promptNode);
    centerlineNodes.push(promptNode);

    const promptCallIds = new Set(promptCalls.map((call) => call.id));
    const assistantMessageIds = new Set(prompt.assistantMessages.map((message) => message.id));
    const activityUnits = plan.activityUnits;
    const activityAnchors: OverviewActivityAnchor[] = [];
    let previousActivityNodeId = promptNode.id;
    let previousActivityUnitIndex: number | null = null;
    let callIndexCursor = 0;

    activityUnits.forEach((unit, unitIndex) => {
      const stepTarget = overviewActivityUnitTarget(promptZ, unitIndex);

      if (unit.type === "call") {
        allNodes.push(callSceneNode(prompt, promptIndex, unit.call, callIndexCursor, stepTarget, freshUntil));
        allConnectors.push(
          overviewActivityConnector(previousActivityNodeId, unit.call.id, promptZ, previousActivityUnitIndex, unitIndex)
        );
        activityAnchors.push({ id: unit.call.id, eventIndex: unit.call.eventIndex });
        previousActivityNodeId = unit.call.id;
        previousActivityUnitIndex = unitIndex;
        callIndexCursor += 1;
        return;
      }

      const messageNode = messageSceneNode(
        prompt,
        promptIndex,
        unit.message,
        callIndexCursor,
        stepTarget,
        freshUntil,
        unit.calls.length ? 0.58 : 0.32
      );
      allNodes.push(messageNode);
      allConnectors.push(
        overviewActivityConnector(previousActivityNodeId, messageNode.id, promptZ, previousActivityUnitIndex, unitIndex)
      );
      activityAnchors.push({ id: messageNode.id, eventIndex: unit.message.eventIndex });
      previousActivityNodeId = messageNode.id;
      previousActivityUnitIndex = unitIndex;
      callIndexCursor += 1;

      unit.calls.forEach((call, groupedCallIndex) => {
        const target = assistantGroupedCallTarget(messageNode.target, promptZ, groupedCallIndex, unit.calls.length);
        allNodes.push(callSceneNode(prompt, promptIndex, call, callIndexCursor, target, freshUntil));
        allConnectors.push([messageNode.id, call.id]);
        activityAnchors.push({ id: call.id, eventIndex: call.eventIndex });
        callIndexCursor += 1;
      });
    });

    subagentBranches.forEach((branch, branchIndex) => {
      const side = branchIndex % 2 === 0 ? 1 : -1;
      const lane = Math.floor(branchIndex / 2);
      const branchX = side * Math.min(13.5, 4.8 + lane * 2.2);
      const branchZ = promptZ - OVERVIEW_SUBAGENT_BAND_OFFSET_Z - lane * 0.55;
      const resultZ = branchZ - 3.3;
      const branchY = OVERVIEW_PROMPT_Y - 1.2 - (branchIndex % 2) * 0.28;
      const branchChildStart = callIndexCursor + subagentBranches.length * 2 + branchIndex * MAX_SUBAGENT_INSPECTION_NODES;

      if (branch.launch) {
        const launchNode = callSceneNode(
          prompt,
          promptIndex,
          branch.launch,
          callIndexCursor,
          new THREE.Vector3(branchX, branchY, branchZ),
          freshUntil,
          {
            kind: "subagent",
            title: subagentBranchTitle(branch.launch),
            baseScale: 0.52,
          }
        );
        allNodes.push(launchNode);
        allConnectors.push([assistantParentId(branch.launch, promptNode.id, assistantMessageIds), launchNode.id]);
        callIndexCursor += 1;
      }

      if (branch.result) {
        const resultNode = callSceneNode(
          prompt,
          promptIndex,
          branch.result,
          callIndexCursor,
          new THREE.Vector3(branchX, branchY - 0.34, branch.launch ? resultZ : branchZ),
          freshUntil,
          {
            kind: "subagent-result",
            title: subagentBranchTitle(branch.result),
            baseScale: 0.38,
          }
        );
        allNodes.push(resultNode);
        allConnectors.push([
          branch.launch?.id ?? assistantParentId(branch.result, promptNode.id, assistantMessageIds),
          resultNode.id,
        ]);
        callIndexCursor += 1;
      }

      addSubagentInspectionNodes({
        branch,
        parentId: branch.result?.id ?? branch.launch?.id ?? promptNode.id,
        prompt,
        promptIndex,
        branchX,
        branchY,
        startZ: (branch.result ? resultZ : branchZ) - 2.1,
        callIndexStart: branchChildStart,
        freshUntil,
        allNodes,
        allConnectors,
      });
    });

    const promptNodesById = new Map<string, SceneNode>();
    for (let nodeIndex = promptNodeStartIndex; nodeIndex < allNodes.length; nodeIndex += 1) {
      const node = allNodes[nodeIndex];
      promptNodesById.set(node.id, node);
    }
    const fileParentIdByChangeId = new Map<string, string>();
    const fileChangesByParent = new Map<string, FileChangeNode[]>();
    fileChanges.forEach((change) => {
      const parentId =
        change.callId && promptCallIds.has(change.callId) && promptNodesById.has(change.callId)
          ? change.callId
          : activityAnchorIdForEvent(change.eventIndex, activityAnchors, promptNode.id);
      fileParentIdByChangeId.set(change.id, parentId);
      const siblings = fileChangesByParent.get(parentId) ?? [];
      siblings.push(change);
      fileChangesByParent.set(parentId, siblings);
    });

    fileChanges.forEach((change, changeIndex) => {
      const parentId = fileParentIdByChangeId.get(change.id) ?? promptNode.id;
      const parentNode = promptNodesById.get(parentId) ?? promptNode;
      const siblingFileChanges = fileChangesByParent.get(parentId) ?? [change];
      const siblingIndex = Math.max(
        0,
        siblingFileChanges.findIndex((sibling) => sibling.id === change.id)
      );
      const target = overviewFileChangeTarget(parentNode.target, promptZ, siblingIndex, siblingFileChanges.length);
      const changeKind = `file-${normalizedFileChangeType(change)}`;
      const fileNode: FileChangeSceneNode = {
        id: change.id,
        type: "fileChange",
        kind: changeKind,
        promptId: prompt.id,
        promptIndex,
        callIndex: callIndexCursor + changeIndex,
        eventIndex: change.eventIndex ?? prompt.eventIndex ?? promptIndex,
        title: change.shortPath || shortPath(change.path) || "file change",
        body: change.preview || change.path,
        detail: detailForFileChange(change),
        source: change,
        isNew: change.eventIndex > newEventFloor,
        freshUntil: change.eventIndex > newEventFloor ? freshUntil : 0,
        position: target.clone(),
        target,
        baseScale: 0.42,
        scale: 0.42,
      };
      allNodes.push(fileNode);
      allConnectors.push(overviewFileChangeConnector(parentId, fileNode.id, parentNode.target));
    });
  });

  centerlineNodes.forEach((node, index) => {
    const next = centerlineNodes[index + 1];
    if (next) {
      allConnectors.push([node.id, next.id]);
    }
  });

  allNodes.forEach((node) => {
    node.home = node.target.clone();
  });

  return { nodes: allNodes, connectors: allConnectors };
}

function addSubagentInspectionNodes({
  branch,
  parentId,
  prompt,
  promptIndex,
  branchX,
  branchY,
  startZ,
  callIndexStart,
  freshUntil,
  allNodes,
  allConnectors,
}: {
  branch: SubagentBranch;
  parentId: string;
  prompt: PromptNode;
  promptIndex: number;
  branchX: number;
  branchY: number;
  startZ: number;
  callIndexStart: number;
  freshUntil: number;
  allNodes: SceneNode[];
  allConnectors: Connector[];
}): void {
  const groups = subagentChildGroups(branch.nodes);
  let trunkParentId = parentId;
  let childOffset = 0;

  groups.forEach((group, groupIndex) => {
    const groupZ = startZ - groupIndex * 3.0;
    let groupParentId = trunkParentId;

    if (group.prompt) {
      const promptNode = callSceneNode(
        prompt,
        promptIndex,
        group.prompt,
        callIndexStart + childOffset,
        new THREE.Vector3(branchX, branchY - 0.9, groupZ),
        freshUntil,
        {
          kind: "subagent",
          title: subagentChildTitle(group.prompt),
          baseScale: 0.30,
        }
      );
      allNodes.push(promptNode);
      allConnectors.push([trunkParentId, promptNode.id]);
      trunkParentId = promptNode.id;
      groupParentId = promptNode.id;
      childOffset += 1;
    }

    let sequenceParentId = groupParentId;
    group.children.forEach((child, childIndex) => {
      const childTarget = subagentChildTarget(branchX, branchY, groupZ, childIndex);
      const childNode = callSceneNode(
          prompt,
          promptIndex,
          child,
          callIndexStart + childOffset,
          childTarget,
          freshUntil,
          {
            title: subagentChildTitle(child),
            baseScale: subagentChildScale(child),
          }
      );
      allNodes.push(childNode);
      allConnectors.push([sequenceParentId, childNode.id]);
      sequenceParentId = childNode.id;
      childOffset += 1;
    });
  });
}

function subagentChildTarget(branchX: number, branchY: number, groupZ: number, childIndex: number): THREE.Vector3 {
  const slot = childIndex % 8;
  const row = Math.floor(childIndex / 8);
  const side = slot % 2 === 0 ? -1 : 1;
  const lane = Math.floor(slot / 2);
  const x = branchX + side * (0.68 + lane * 0.42);
  const y = branchY - 1.16 - row * 0.18 + (slot % 4) * 0.06;
  const z = groupZ - 0.58 - row * 0.92 - Math.floor(slot / 2) * 0.18;
  return new THREE.Vector3(x, y, z);
}

interface SubagentChildGroup {
  prompt: CallNode | null;
  children: CallNode[];
}

function subagentChildGroups(children: CallNode[]): SubagentChildGroup[] {
  const groups: SubagentChildGroup[] = [];
  let current: SubagentChildGroup | null = null;

  children.forEach((child) => {
    if (child.name === "subagent.prompt") {
      current = { prompt: child, children: [] };
      groups.push(current);
      return;
    }
    if (!current) {
      current = { prompt: null, children: [] };
      groups.push(current);
    }
    current.children.push(child);
  });
  return groups;
}

function callSceneNode(
  prompt: PromptNode,
  promptIndex: number,
  call: CallNode,
  callIndex: number,
  target: THREE.Vector3,
  freshUntil: number,
  {
    kind = call.kind || "tool",
    title = call.name,
    baseScale = call.status === "completed" ? 0.30 : 0.40,
  }: { kind?: string; title?: string; baseScale?: number } = {}
): CallSceneNode {
  const callIsNew = call.eventIndex > newEventFloor;
  return {
    id: call.id,
    type: "call",
    kind,
    promptId: prompt.id,
    promptIndex,
    callIndex,
    eventIndex: call.eventIndex ?? prompt.eventIndex ?? promptIndex,
    title,
    body: call.argumentPreview || "",
    detail: detailForCall(call),
    source: call,
    isNew: callIsNew,
    freshUntil: callIsNew ? freshUntil : 0,
    position: target.clone(),
    target,
    baseScale,
    scale: baseScale,
  };
}

function messageSceneNode(
  prompt: PromptNode,
  promptIndex: number,
  message: MessageNode,
  callIndex: number,
  target: THREE.Vector3,
  freshUntil: number,
  baseScale = 0.32
): MessageSceneNode {
  const messageIsNew = message.eventIndex > newEventFloor;
  return {
    id: message.id,
    type: "message",
    kind: "assistant",
    promptId: prompt.id,
    promptIndex,
    callIndex,
    eventIndex: message.eventIndex ?? prompt.eventIndex ?? promptIndex,
    title: "assistant message",
    body: message.text,
    detail: message.text,
    source: message,
    isNew: messageIsNew,
    freshUntil: messageIsNew ? freshUntil : 0,
    position: target.clone(),
    target,
    baseScale,
    scale: baseScale,
  };
}

function subagentBranchesForCalls(calls: CallNode[]): SubagentBranch[] {
  const launches = calls.filter(isSubagentLaunchCall);
  const results = calls.filter(isSubagentResultCall);
  const unusedResults = new Set(results);
  const resultsByAgentId = new Map<string, CallNode[]>();

  results.forEach((result) => {
    const agentId = subagentAgentId(result);
    if (!agentId) {
      return;
    }
    const matches = resultsByAgentId.get(agentId) ?? [];
    matches.push(result);
    resultsByAgentId.set(agentId, matches);
  });

  const branches: Array<SubagentBranch & { order: number }> = launches.map((launch, index) => {
    const agentId = subagentAgentId(launch);
    const matchedByAgent = agentId ? resultsByAgentId.get(agentId)?.find((result) => unusedResults.has(result)) : null;
    const matchedByOrder =
      matchedByAgent ??
      results.find((result) => unusedResults.has(result) && result.eventIndex >= launch.eventIndex) ??
      null;
    if (matchedByOrder) {
      unusedResults.delete(matchedByOrder);
    }
    return {
      launch,
      result: matchedByOrder,
      nodes: subagentNodesForBranch(launch, matchedByOrder),
      eventIndex: Math.min(launch.eventIndex, matchedByOrder?.eventIndex ?? launch.eventIndex),
      order: index,
    };
  });

  unusedResults.forEach((result) => {
    branches.push({
      launch: null,
      result,
      nodes: subagentNodesForBranch(null, result),
      eventIndex: result.eventIndex,
      order: launches.length + branches.length,
    });
  });

  return branches.sort((a, b) => a.eventIndex - b.eventIndex || a.order - b.order);
}

function isSubagentLaunchCall(call: CallNode): boolean {
  return call.name === "spawn_agent";
}

function isSubagentResultCall(call: CallNode): boolean {
  return call.name === "subagent";
}

function subagentNodesForBranch(launch: CallNode | null, result: CallNode | null): CallNode[] {
  if (launch?.subagentNodes?.length) {
    return launch.subagentNodes;
  }
  return result?.subagentNodes ?? [];
}

function subagentAgentId(call: CallNode): string | null {
  const text = `${call.argumentPreview || ""}\n${call.outputPreview || ""}`;
  return (
    text.match(/"agent_id"\s*:\s*"([^"]+)"/)?.[1] ??
    text.match(/\bagent:\s*([^\s,}]+)/)?.[1] ??
    text.match(/"agent_path"\s*:\s*"([^"]+)"/)?.[1] ??
    null
  );
}

function subagentBranchTitle(call: CallNode): string {
  const nickname = subagentNickname(call);
  if (nickname) {
    return nickname;
  }
  return isSubagentResultCall(call) ? "subagent result" : "subagent";
}

function subagentNickname(call: CallNode): string | null {
  const output = call.outputPreview;
  if (!output) {
    return null;
  }
  try {
    const parsed = JSON.parse(output) as { nickname?: unknown };
    return typeof parsed.nickname === "string" && parsed.nickname.trim() ? parsed.nickname : null;
  } catch {
    return output.match(/"nickname"\s*:\s*"([^"]+)"/)?.[1] ?? null;
  }
}

function subagentChildTitle(call: CallNode): string {
  if (call.name.startsWith("subagent.")) {
    const title = call.name.slice("subagent.".length);
    return title === "more" ? call.argumentPreview || "more" : title;
  }
  return call.name;
}

function subagentChildScale(call: CallNode): number {
  if (call.name === "subagent.prompt") {
    return 0.34;
  }
  if (call.name === "subagent.more") {
    return 0.26;
  }
  return call.status === "completed" ? 0.24 : 0.32;
}

function detailForCall(call: CallNode): string {
  const parts = [
    `call: ${call.name}`,
    `kind: ${call.kind}`,
    `status: ${call.status}`,
    call.assistantMessageId ? `assistant message: ${call.assistantMessageId}` : "",
    call.subagentSessionPath ? `subagent session: ${call.subagentSessionPath}` : "",
    call.subagentNodes?.length ? `subagent nodes: ${call.subagentNodes.length}` : "",
    call.startedAt ? `started: ${call.startedAt}` : "",
    call.completedAt ? `completed: ${call.completedAt}` : "",
    call.durationMs !== null && call.durationMs !== undefined ? `duration: ${formatDuration(call.durationMs)}` : "",
    "",
    "arguments:",
    call.argumentPreview || "{}",
  ];
  if (call.outputPreview) {
    parts.push("", "output:", call.outputPreview);
  }
  return parts.filter(Boolean).join("\n");
}

function detailForFileChange(change: FileChangeNode): string {
  const parts = [
    `change: ${change.changeType}`,
    `path: ${change.path}`,
    change.callId ? `call: ${change.callId}` : "",
    change.timestamp ? `time: ${change.timestamp}` : "",
    "",
    change.detail || change.preview,
  ];
  return parts.filter(Boolean).join("\n");
}

function createInstances(): void {
  const promptNodes = nodes.filter((node) => node.type === "prompt");
  const callNodes = nodes.filter((node) => node.type === "call");
  const fileChangeNodes = nodes.filter((node) => node.type === "fileChange");
  const messageNodes = nodes.filter((node) => node.type === "message");
  const compactionNodes = nodes.filter((node) => node.type === "compaction");

  meshBuckets.prompt = createBucket("prompt", promptNodes, promptGeometry, promptMaterial);
  meshBuckets.call = createBucket("call", callNodes, nodeGeometry, nodeMaterial);
  meshBuckets.fileChange = createBucket("fileChange", fileChangeNodes, fileChangeGeometry, fileChangeMaterial);
  meshBuckets.message = createBucket("message", messageNodes, nodeGeometry, nodeMaterial);
  meshBuckets.compaction = createBucket("compaction", compactionNodes, compactionGeometry, compactionMaterial);
}

function createBucket(
  bucketName: SceneBucket,
  bucketNodes: SceneNode[],
  geometry: THREE.BufferGeometry,
  material: THREE.Material
): NodeInstancedMesh | undefined {
  if (!bucketNodes.length) {
    return undefined;
  }

  const mesh = new THREE.InstancedMesh(geometry.clone(), material.clone(), bucketNodes.length) as NodeInstancedMesh;
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  mesh.userData.bucket = bucketName;
  mesh.userData.nodes = bucketNodes;
  mesh.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 600);
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  scene.add(mesh);

  const now = performance.now();
  bucketNodes.forEach((node, index) => {
    node.bucket = bucketName;
    node.instanceIndex = index;
    writeNodeMatrix(mesh, node, index, 0, now);
    node.matrixDirty = false;
    mesh.setColorAt(index, colorForNode(node, false));
  });

  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) {
    mesh.instanceColor.needsUpdate = true;
  }
  return mesh;
}

function createConnectors() {
  const maxSegmentCount = Math.max(
    connectorSegmentTotal(connectors),
    connectorSegmentTotal(activeConnectors),
    Math.max(nodes.length - 1, 1)
  );
  const positions = new Float32Array(maxSegmentCount * 2 * 3);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setDrawRange(0, connectorSegmentTotal(activeConnectors) * 2);
  geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 600);
  const material = new THREE.LineBasicMaterial({
    color: 0x63e7ff,
    transparent: true,
    opacity: 0.42,
  });
  lineMesh = new THREE.LineSegments(geometry, material);
  scene.add(lineMesh);
}

function clearWorkflowMeshes() {
  Object.values(meshBuckets).forEach((mesh) => {
    if (!mesh) {
      return;
    }
    scene.remove(mesh);
    mesh.geometry.dispose();
    mesh.material.dispose();
  });
  meshBuckets = {};

  if (lineMesh) {
    scene.remove(lineMesh);
    lineMesh.geometry.dispose();
    lineMesh.material.dispose();
    lineMesh = null;
  }

  if (pointMesh) {
    scene.remove(pointMesh);
    pointMesh.geometry.dispose();
    pointMesh.material.dispose();
    pointMesh = null;
  }

  clearPulseMeshes(compactionPulseMeshes, compactionPulseGroup);
  clearPulseMeshes(steeringPulseMeshes, steeringPulseGroup);
}

function clearPulseMeshes(meshesByNode: Map<string, PulseMesh[]>, group: THREE.Group): void {
  meshesByNode.forEach((meshes) => {
    disposePulseMeshes(meshes, group);
  });
  meshesByNode.clear();
}

function removeInactivePulseMeshes(
  meshesByNode: Map<string, PulseMesh[]>,
  group: THREE.Group,
  activeIds: Set<string>
): void {
  Array.from(meshesByNode.keys()).forEach((nodeId) => {
    if (activeIds.has(nodeId)) {
      return;
    }
    disposePulseMeshes(meshesByNode.get(nodeId), group);
    meshesByNode.delete(nodeId);
  });
}

function disposePulseMeshes(meshes: PulseMesh[] | undefined, group: THREE.Group): void {
  meshes?.forEach((mesh) => {
    group.remove(mesh);
    mesh.material.dispose();
  });
}

function getOrCreatePulseMeshes(
  meshesByNode: Map<string, PulseMesh[]>,
  nodeId: string,
  count: number,
  group: THREE.Group,
  geometry: THREE.RingGeometry,
  color: number
): PulseMesh[] {
  let meshes = meshesByNode.get(nodeId);
  if (!meshes) {
    meshes = Array.from({ length: count }, (_, index) =>
      createPulseMesh(nodeId, index / count, group, geometry, color)
    );
    meshesByNode.set(nodeId, meshes);
  }
  return meshes;
}

function createPulseMesh(
  nodeId: string,
  offset: number,
  group: THREE.Group,
  geometry: THREE.RingGeometry,
  color: number
): PulseMesh {
  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const mesh = new THREE.Mesh(geometry, material) as PulseMesh;
  mesh.userData = { nodeId, offset };
  mesh.rotation.x = -Math.PI / 2;
  mesh.visible = false;
  group.add(mesh);
  return mesh;
}

function setLayoutTargets({ preserveCamera = false } = {}) {
  let inspectLayout: InspectLayout | undefined;
  if (mode === "inspect" && activePromptId) {
    const layout = buildInspectLayout(activePromptId);
    inspectLayout = layout;
    const placementById = new Map(layout.placements.map((placement) => [placement.node.id, placement]));
    nodes.forEach((node) => {
      const placement = placementById.get(node.id);
      if (placement) {
        node.target.copy(placement.target);
        node.scale = placement.scale;
      } else {
        node.target.set(node.position.x, HIDDEN_INSPECT_POINT_Y, node.position.z);
        node.scale = 0;
      }
      node.matrixDirty = true;
    });
    if (!preserveCamera) {
      controls.target.set(0, 0.2, -layout.laneDepth * 0.12);
      camera.position.set(0, 18, Math.max(27, layout.laneDepth * 0.58));
    }
  } else {
    nodes.forEach((node) => {
      node.target.copy(node.home ?? node.position);
      node.scale = node.baseScale;
      if (node.position.y < -1000) {
        node.position.copy(node.target);
      }
      node.matrixDirty = true;
    });
    if (!preserveCamera) {
      frameOverview();
    }
  }
  syncModeChrome();
  refreshActiveConnectors(inspectLayout);
  updateConnectorGeometry();
  pointColorsDirty = true;
  updatePointMarkers();
}

function refreshActiveConnectors(inspectLayout?: InspectLayout) {
  if (mode === "inspect" && activePromptId) {
    activeConnectors = (inspectLayout ?? buildInspectLayout(activePromptId)).connectors;
    return;
  }

  activeConnectors = connectors;
}

function buildInspectLayout(promptId: string): InspectLayout {
  const activeNodes = nodes.filter((node) => node.promptId === promptId);
  const branches = inspectSubagentBranches(promptId);
  const branchNodeIds = new Set(branches.flatMap((branch) => branch.nodes.map((node) => node.id)));
  const mainNodes = activeNodes
    .filter((node) => node.type === "prompt" || !branchNodeIds.has(node.id))
    .sort(inspectNodeSort);

  const timelineUnits: InspectTimelineUnit[] = [
    ...mainNodes.map((node, index) => ({
      type: "node" as const,
      eventIndex: node.eventIndex,
      order: index * 2,
      node,
    })),
    ...branches.map((branch) => ({
      type: "branch" as const,
      eventIndex: branch.eventIndex,
      order: branch.order * 2 + 1,
      branch,
    })),
  ].sort(inspectTimelineSort);

  const longestBranch = branches.reduce((longest, branch) => Math.max(longest, branch.nodes.length), 0);
  const laneDepth = Math.min(
    INSPECT_MAX_LANE_DEPTH,
    Math.max(
      INSPECT_MIN_LANE_DEPTH,
      Math.max(0, timelineUnits.length - 1) * INSPECT_MAIN_SPACING,
      Math.max(0, longestBranch - 1) * INSPECT_BRANCH_SPACING + 8
    )
  );
  const spacing = timelineUnits.length > 1 ? laneDepth / (timelineUnits.length - 1) : 0;
  const startZ = laneDepth / 2;
  const nodeZ = new Map<string, number>();

  timelineUnits.forEach((unit, index) => {
    const z = startZ - index * spacing;
    if (unit.type === "node") {
      nodeZ.set(unit.node.id, z);
    } else {
      unit.branch.startZ = z;
    }
  });

  const placements: InspectNodePlacement[] = mainNodes.map((node) => ({
    node,
    target: new THREE.Vector3(0, inspectMainYForNode(node), nodeZ.get(node.id) ?? 0),
    scale: inspectScaleForNode(node),
  }));

  branches.forEach((branch) => {
    const laneX = branch.side * (INSPECT_BRANCH_X + branch.lane * INSPECT_BRANCH_GAP_X);
    branch.nodes.forEach((node, nodeIndex) => {
      placements.push({
        node,
        target: new THREE.Vector3(
          laneX + inspectBranchXOffset(node, nodeIndex, branch.side),
          inspectBranchYForNode(node),
          branch.startZ - nodeIndex * INSPECT_BRANCH_SPACING
        ),
        scale: inspectScaleForNode(node),
      });
    });
  });

  const connectors = inspectConnectors(timelineUnits, mainNodes, branches);
  return {
    placements,
    visibleNodes: uniqueSceneNodes([...mainNodes, ...branches.flatMap((branch) => branch.nodes)]),
    mainNodes,
    branches,
    connectors,
    laneDepth,
  };
}

function inspectSubagentBranches(promptId: string): InspectBranchLane[] {
  const current = graph;
  const prompt = current?.prompts.find((candidate) => candidate.id === promptId);
  if (!current || !prompt) {
    return [];
  }

  return subagentBranchesForCalls(callsWithLiveCues(current, prompt))
    .map((branch, order): InspectBranchLane | null => {
      const branchNodes = uniqueSceneNodes([
        branch.launch ? nodeById.get(branch.launch.id) : null,
        ...branch.nodes.map((node) => nodeById.get(node.id)),
        branch.result ? nodeById.get(branch.result.id) : null,
      ]);
      if (!branchNodes.length) {
        return null;
      }
      return {
        nodes: branchNodes,
        eventIndex: branch.eventIndex,
        order,
        side: order % 2 === 0 ? -1 : 1,
        lane: Math.floor(order / 2),
        startZ: 0,
      };
    })
    .filter((branch): branch is InspectBranchLane => Boolean(branch));
}

function inspectConnectors(
  timelineUnits: InspectTimelineUnit[],
  mainNodes: SceneNode[],
  branches: InspectBranchLane[]
): Connector[] {
  const nextConnectors: Connector[] = [];
  mainNodes.slice(1).forEach((node, index) => {
    nextConnectors.push([mainNodes[index].id, node.id]);
  });

  branches.forEach((branch) => {
    const first = branch.nodes[0];
    if (!first) {
      return;
    }
    const branchUnitIndex = timelineUnits.findIndex((unit) => unit.type === "branch" && unit.branch === branch);
    const parent = nearestMainNodeBefore(timelineUnits, branchUnitIndex) ?? mainNodes[0] ?? null;
    if (parent) {
      nextConnectors.push([parent.id, first.id]);
    }
    branch.nodes.slice(1).forEach((node, index) => {
      nextConnectors.push([branch.nodes[index].id, node.id]);
    });
  });

  return nextConnectors;
}

function nearestMainNodeBefore(timelineUnits: InspectTimelineUnit[], unitIndex: number): SceneNode | null {
  for (let index = unitIndex - 1; index >= 0; index -= 1) {
    const unit = timelineUnits[index];
    if (unit?.type === "node") {
      return unit.node;
    }
  }
  return null;
}

function uniqueSceneNodes(candidates: Array<SceneNode | null | undefined>): SceneNode[] {
  const seen = new Set<string>();
  return candidates.filter((node): node is SceneNode => {
    if (!node || seen.has(node.id)) {
      return false;
    }
    seen.add(node.id);
    return true;
  });
}

function inspectNodeSort(a: SceneNode, b: SceneNode): number {
  if (a.type === "prompt" && b.type !== "prompt") {
    return -1;
  }
  if (b.type === "prompt" && a.type !== "prompt") {
    return 1;
  }
  return a.eventIndex - b.eventIndex || a.callIndex - b.callIndex || inspectTypeOrder(a) - inspectTypeOrder(b);
}

function inspectTimelineSort(a: InspectTimelineUnit, b: InspectTimelineUnit): number {
  const aIsPrompt = a.type === "node" && a.node.type === "prompt";
  const bIsPrompt = b.type === "node" && b.node.type === "prompt";
  if (aIsPrompt !== bIsPrompt) {
    return aIsPrompt ? -1 : 1;
  }
  return a.eventIndex - b.eventIndex || a.order - b.order;
}

function inspectTypeOrder(node: SceneNode): number {
  if (node.type === "prompt") {
    return 0;
  }
  if (node.type === "message") {
    return 1;
  }
  if (node.type === "call") {
    return 2;
  }
  if (node.type === "fileChange") {
    return 3;
  }
  return 4;
}

function inspectMainYForNode(node: SceneNode): number {
  if (node.type === "prompt") {
    return 1.15;
  }
  if (node.type === "fileChange") {
    return -0.32;
  }
  if (node.type === "message") {
    return 0.62;
  }
  if (node.type === "compaction") {
    return 0.82;
  }
  return 0.24;
}

function inspectBranchYForNode(node: SceneNode): number {
  if (node.type !== "call") {
    return inspectMainYForNode(node);
  }
  if (node.source.name === "subagent.prompt") {
    return 0.72;
  }
  if (node.source.name === "subagent.compaction") {
    return 0.54;
  }
  if (node.source.name === "spawn_agent") {
    return 0.46;
  }
  if (node.source.name === "subagent") {
    return 0.3;
  }
  if (node.source.name === "subagent.file") {
    return -0.16;
  }
  if (node.source.name === "subagent.message") {
    return 0.2;
  }
  return 0.04;
}

function inspectBranchXOffset(node: SceneNode, index: number, side: -1 | 1): number {
  if (node.type !== "call" || index === 0) {
    return 0;
  }
  if (node.source.name === "subagent.prompt" || node.source.name === "subagent" || node.source.name === "subagent.more") {
    return 0;
  }
  const offsets = [0.3, -0.3, 0.58, -0.58];
  return offsets[(index - 1) % offsets.length] * side;
}

function inspectScaleForNode(node: SceneNode): number {
  if (node.type === "prompt") {
    return 0.62;
  }
  if (node.type === "fileChange") {
    return 0.36;
  }
  if (node.type === "message") {
    return 0.28;
  }
  if (node.type === "compaction") {
    return 0.48;
  }
  if (node.source.name === "spawn_agent") {
    return 0.44;
  }
  if (node.source.name === "subagent") {
    return 0.36;
  }
  if (node.source.name === "subagent.prompt") {
    return 0.34;
  }
  if (node.source.name === "subagent.more") {
    return 0.26;
  }
  return Math.min(0.34, Math.max(0.24, node.baseScale));
}

function syncModeChrome(): void {
  const inspectActive = mode === "inspect" && Boolean(activePromptId);
  sceneFrame.classList.toggle("inspect-active", inspectActive);
  canvas.setAttribute(
    "aria-label",
    inspectActive ? "Perlustron focused prompt inspection" : "Perlustron session workflow"
  );
}

function timelineEntries(
  source: SessionGraph,
  { includeCompactionProgress = false }: { includeCompactionProgress?: boolean } = {}
): TimelineEntry[] {
  const prompts = promptsWithLiveCues(source);
  const entries: TimelineEntry[] = [
    ...prompts.map((prompt, promptIndex) => ({
      type: "prompt" as const,
      eventIndex: promptTimelineEventIndex(source, prompts, prompt, promptIndex),
      prompt,
      promptIndex,
    })),
    ...(source.compactions || []).map((compaction, compactionIndex) => ({
      type: "compaction" as const,
      eventIndex: compaction.eventIndex,
      compaction,
      compactionIndex,
    })),
  ];
  const progressEntry = includeCompactionProgress ? compactionProgressTimelineEntry(source, entries) : null;
  if (progressEntry) {
    entries.push(progressEntry);
  }
  return entries.sort((a, b) => a.eventIndex - b.eventIndex);
}

function promptTimelineEventIndex(
  source: SessionGraph,
  prompts: PromptNode[],
  prompt: PromptNode,
  promptIndex: number
): number {
  const nextPromptEventIndex = prompts[promptIndex + 1]?.eventIndex ?? Number.POSITIVE_INFINITY;
  const ownActivityEventIndex = latestPromptActivityEventIndex(source, prompt);
  const latestCompactionInTurn =
    source.compactions
      ?.filter((compaction) => compaction.eventIndex > prompt.eventIndex && compaction.eventIndex < nextPromptEventIndex)
      .reduce<number | null>(
        (latest, compaction) => (latest === null || compaction.eventIndex > latest ? compaction.eventIndex : latest),
        null
      ) ?? null;

  if (latestCompactionInTurn !== null) {
    return Math.max(ownActivityEventIndex, latestCompactionInTurn + 0.25);
  }
  return ownActivityEventIndex;
}

function latestPromptActivityEventIndex(source: SessionGraph, prompt: PromptNode): number {
  const callCueEventIndexes =
    prompt.id === liveCueTargetPromptId(source)
      ? [...liveCues.activeToolCalls, ...liveCues.completedToolCalls].map((call) => call.eventIndex)
      : [];
  return Math.max(
    prompt.eventIndex,
    ...prompt.calls.map((call) => call.eventIndex),
    ...prompt.assistantMessages.map((message) => message.eventIndex),
    ...(prompt.fileChanges || []).map((change) => change.eventIndex),
    ...callCueEventIndexes
  );
}

function promptsWithLiveCues(source: SessionGraph): PromptNode[] {
  const livePrompt = livePromptNode(source);
  return livePrompt ? [...source.prompts, livePrompt] : source.prompts;
}

function livePromptNode(source: SessionGraph): PromptNode | null {
  const cue = liveCues.pendingPrompt;
  if (!cue || cue.eventIndex <= source.latestEventIndex) {
    return null;
  }
  return {
    id: LIVE_PROMPT_CUE_ID,
    eventIndex: cue.eventIndex,
    timestamp: cue.timestamp,
    title: cue.title || "Incoming prompt",
    text: cue.text,
    images: [],
    calls: [],
    assistantMessages: [],
    fileChanges: [],
  };
}

function callsWithLiveCues(source: SessionGraph, prompt: PromptNode): CallNode[] {
  if (prompt.id !== liveCueTargetPromptId(source)) {
    return prompt.calls;
  }

  const existingIds = new Set(prompt.calls.map((call) => call.id));
  const cueCalls = [...liveCues.activeToolCalls, ...liveCues.completedToolCalls]
    .filter((call) => !existingIds.has(call.id) && call.eventIndex > source.latestEventIndex);
  return cueCalls.length ? [...prompt.calls, ...cueCalls] : prompt.calls;
}

function liveCueTargetPromptId(source: SessionGraph): string | null {
  if (livePromptNode(source)) {
    return LIVE_PROMPT_CUE_ID;
  }
  return source.prompts.at(-1)?.id ?? null;
}

function compactionProgressTimelineEntry(source: SessionGraph, entries: TimelineEntry[]): TimelineEntry | null {
  if (!compactionInProgress) {
    return null;
  }

  const latestPrompt = entries.reduce<Extract<TimelineEntry, { type: "prompt" }> | null>((latest, entry) => {
    if (entry.type !== "prompt") {
      return latest;
    }
    return !latest || entry.eventIndex >= latest.eventIndex ? entry : latest;
  }, null);
  const latestEventIndex = Math.max(source.latestEventIndex, latestPrompt?.eventIndex ?? 0);
  const eventIndex = latestEventIndex + 0.5;
  const compaction: CompactionNode = {
    id: COMPACTION_PROGRESS_CUE_ID,
    eventIndex,
    timestamp: source.lastModifiedAt || source.generatedAt || null,
    title: "Compacting context",
    text: "Compaction in progress",
    detail: [
      "compaction: in progress",
      latestPrompt ? `anchor: ${latestPrompt.prompt.title}` : "",
      source.pendingBytes > 0 ? `pending bytes: ${source.pendingBytes}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
    replacedMessageCount: 0,
    encrypted: false,
    reason: "in progress",
  };
  return {
    type: "compaction",
    eventIndex,
    compaction,
    compactionIndex: source.compactions.length,
  };
}

function renderSidebarRow({
  label,
  detail,
  status,
  title = detail,
  className = "",
  dotIndex,
}: {
  label: string;
  detail: string;
  status?: string;
  title?: string;
  className?: string;
  dotIndex: number;
}): HTMLDivElement {
  const row = document.createElement("div");
  row.className = ["root-row", className].filter(Boolean).join(" ");
  row.title = title;

  const dot = document.createElement("span");
  dot.className = `root-dot ${SIDEBAR_DOT_COLORS[dotIndex % SIDEBAR_DOT_COLORS.length]}`;
  const copy = document.createElement("span");
  copy.className = "root-copy";
  const rowLabel = document.createElement("strong");
  rowLabel.textContent = label;
  const rowDetail = document.createElement("small");
  rowDetail.textContent = detail;
  copy.append(rowLabel, rowDetail);
  row.append(dot, copy);

  if (status) {
    const statusElement = document.createElement("em");
    statusElement.textContent = status;
    row.append(statusElement);
  }

  return row;
}

function renderRootList(): void {
  const current = currentGraph();
  const roots = current.ui?.roots?.length
    ? current.ui.roots
    : [
        {
          label: "Session file",
          path: current.sessionPath,
          status: "Loaded",
        },
      ];
  const fragment = document.createDocumentFragment();

  roots.forEach((root, index) => {
    fragment.append(
      renderSidebarRow({
        label: root.label || "Session root",
        detail: shortPath(root.path) || root.path || "Local path",
        status: root.status || "Local",
        title: root.path || "",
        dotIndex: index,
      }),
    );
  });
  rootList.replaceChildren(fragment);
}

function renderMetadataList(): void {
  const metadata = currentGraph().metadata;
  const toolNames = (metadata?.dynamicTools || [])
    .map((tool) => (tool.namespace ? `${tool.namespace}.${tool.name}` : tool.name))
    .slice(0, 6);
  const rows = [
    ["Codex", [metadata?.originator, metadata?.cliVersion].filter(Boolean).join(" ")],
    ["Source", [metadata?.source, metadata?.modelProvider].filter(Boolean).join(" / ")],
    ["Git", shortCommit(metadata?.gitCommitHash) || shortPath(metadata?.repositoryUrl || "")],
    ["Policy", [metadata?.approvalPolicy, metadata?.sandbox].filter(Boolean).join(" / ")],
    ["Model", metadata?.model || ""],
    ["Tools", toolNames.join(", ")],
  ].filter(([, value]) => value);

  const fragment = document.createDocumentFragment();
  rows.forEach(([label, value], index) => {
    fragment.append(
      renderSidebarRow({
        label,
        detail: value,
        className: "metadata-row",
        dotIndex: index,
      }),
    );
  });
  metadataList.replaceChildren(fragment);
}

function shortCommit(commit: string | null | undefined): string {
  return commit ? commit.slice(0, 10) : "";
}

function renderPromptList(): void {
  const current = currentGraph();
  const rowsById = new Map<string, PromptRowSummary>((current.ui?.promptRows || []).map((row) => [row.id, row]));
  const sessionRows = timelineEntries(current);
  const visibleRows = sessionRows.filter((row, rowIndex) => {
    if (row.type === "compaction") {
      const matchesSearch = compactionMatchesSearch(row.compaction);
      if (!matchesSearch) {
        return false;
      }
      if (searchTerm || activeSessionFilter === "all") {
        return true;
      }
      return activeSessionFilter === "live" && current.isLive && rowIndex + 1 === sessionRows.length;
    }

    const { prompt, promptIndex } = row;
    const rowSummary = rowsById.get(prompt.id);
    const matchesFilter =
      searchTerm ||
      activeSessionFilter === "all" ||
      (activeSessionFilter === "live" && (rowSummary?.isLive || promptIndex + 1 === current.prompts.length)) ||
      (activeSessionFilter === "pinned" && promptIndex < pinnedPromptCount(current));
    return matchesFilter && promptMatchesSearch(prompt);
  });

  if (!visibleRows.length) {
    const empty = document.createElement("div");
    empty.className = "prompt-empty";
    empty.textContent = "No matching sessions";
    promptList.replaceChildren(empty);
    return;
  }

  const fragment = document.createDocumentFragment();
  visibleRows.forEach((sessionRow) => {
    if (sessionRow.type === "compaction") {
      fragment.append(renderCompactionRow(sessionRow.compaction));
      return;
    }
    const { prompt } = sessionRow;
    const rowSummary = rowsById.get(prompt.id);
    const parts = createPromptRow(prompt.id === activePromptId ? "prompt-row active" : "prompt-row");
    const { row, meta } = parts;
    row.dataset.promptId = prompt.id;
    parts.title.textContent = prompt.title;
    parts.count.textContent = rowSummary?.isLive ? "LIVE" : "LOCAL";
    meta[0].textContent = `${rowSummary?.turns ?? prompt.calls.length + prompt.assistantMessages.length + (prompt.fileChanges?.length ?? 0)} turns`;
    meta[1].textContent = `${rowSummary?.local ?? prompt.calls.filter((call) => call.kind === "local").length} local`;
    meta[2].textContent = `${rowSummary?.browser ?? prompt.calls.filter((call) => call.kind === "browser").length} browser`;
    meta[3].textContent = `${rowSummary?.files ?? prompt.fileChanges?.length ?? 0} files`;
    parts.alerts.textContent = promptBadges(prompt).join("  ");
    row.addEventListener("click", () => {
      enterInspectMode(prompt.id, nodeById.get(prompt.id));
    });
    fragment.append(row);
  });
  promptList.replaceChildren(fragment);
}

function renderCompactionRow(compaction: CompactionNode): HTMLButtonElement {
  const parts = createPromptRow(`prompt-row compaction-row ${compaction.id === selectedNodeId ? "active" : ""}`);
  const { row, meta } = parts;
  row.dataset.compactionId = compaction.id;
  parts.title.textContent = compaction.title;
  parts.count.textContent = "COMPACT";
  meta[0].textContent = `${compaction.replacedMessageCount} messages`;
  meta[1].textContent = compaction.encrypted ? "encrypted" : "plain text";
  meta[2].textContent = `event ${compaction.eventIndex}`;
  meta[3].textContent = compaction.reason || "context checkpoint";
  parts.alerts.textContent = "compacted";
  row.addEventListener("click", () => {
    activePromptId = null;
    if (mode === "inspect") {
      exitInspectMode({ preserveCamera: true });
    } else {
      setLayoutTargets({ preserveCamera: true });
    }
    renderPromptList();
    openStream(nodeById.get(compaction.id));
  });
  return row;
}

function createPromptRow(className: string): PromptRowParts {
  const row = document.createElement("button");
  row.type = "button";
  row.className = className;
  row.innerHTML = `<span class="prompt-row-title"></span><span class="prompt-row-count"></span><span class="prompt-row-meta"><span></span><span></span><span></span><span></span></span><span class="prompt-row-alerts"></span>`;
  return {
    row,
    title: queryRequired<HTMLElement>(".prompt-row-title", row),
    count: queryRequired<HTMLElement>(".prompt-row-count", row),
    meta: row.querySelectorAll<HTMLElement>(".prompt-row-meta span"),
    alerts: queryRequired<HTMLElement>(".prompt-row-alerts", row),
  };
}

function promptBadges(prompt: PromptNode): string[] {
  let errorCount = 0;
  let artifactCount = 0;
  let fileCount = 0;
  prompt.calls.forEach((call) => {
    const text = callSearchText(call);
    if (text.includes("error")) {
      errorCount += 1;
    }
    if (text.includes("artifact")) {
      artifactCount += 1;
    }
    if (/(file|read|write|rg|patch)/.test(text)) {
      fileCount += 1;
    }
  });
  const fileChangeCount = prompt.fileChanges?.length ?? 0;
  const changeCounts = fileChangeCounts(prompt.fileChanges);
  const badges = [];
  if (errorCount) {
    badges.push(countLabel(errorCount, "error"));
  }
  if (artifactCount) {
    badges.push(countLabel(artifactCount, "artifact"));
  }
  if (fileCount || fileChangeCount) {
    badges.push(`${fileCount + fileChangeCount} file ops`);
  }
  const added = changeCounts.add;
  const updated = changeCounts.update;
  const deleted = changeCounts.delete;
  if (added || updated || deleted) {
    badges.push(`+${added} ~${updated} -${deleted}`);
  }
  if (prompt.images.length) {
    badges.push(countLabel(prompt.images.length, "image"));
  }
  if (prompt.assistantMessages.length) {
    badges.push(countLabel(prompt.assistantMessages.length, "message"));
  }
  return badges.length ? badges : ["clean"];
}

function countLabel(count: number, label: string): string {
  return `${count} ${label}${count === 1 ? "" : "s"}`;
}

function fileChangeCounts(fileChanges: FileChangeNode[] = []): Record<FileChangeType, number> {
  const counts: Record<FileChangeType, number> = {
    add: 0,
    update: 0,
    delete: 0,
    move: 0,
  };
  fileChanges.forEach((change) => {
    counts[normalizedFileChangeType(change)] += 1;
  });
  return counts;
}

function normalizedFileChangeType(change: FileChangeNode): FileChangeType {
  return FILE_CHANGE_TYPES.includes(change.changeType) ? change.changeType : "update";
}

function promptMatchesSearch(prompt: PromptNode): boolean {
  if (!searchTerm) {
    return true;
  }
  return promptSearchText(prompt).includes(searchTerm);
}

function promptSearchText(prompt: PromptNode): string {
  const cached = promptSearchTextCache.get(prompt.id);
  if (cached) {
    return cached;
  }
  const haystack =
    `${prompt.title} ${prompt.text} ${prompt.calls.map((call) => `${call.name} ${call.argumentPreview} ${call.outputPreview || ""}`).join(" ")} ${(prompt.fileChanges || []).map(fileChangeSearchText).join(" ")} ${prompt.assistantMessages.map((message) => message.text).join(" ")}`.toLowerCase();
  promptSearchTextCache.set(prompt.id, haystack);
  return haystack;
}

function compactionMatchesSearch(compaction: CompactionNode): boolean {
  if (!searchTerm) {
    return true;
  }
  const haystack =
    `${compaction.title} ${compaction.text} ${compaction.detail} compacted compaction checkpoint`.toLowerCase();
  return haystack.includes(searchTerm);
}

function render() {
  const now = performance.now();
  const nowSeconds = now / 1000;
  const delta = Math.min(nowSeconds - lastFrameTime, 0.04);
  lastFrameTime = nowSeconds;
  elapsedTime += delta;

  const moved = updateNodePositions(delta);
  expireFreshNodes(now);
  writeAllInstanceMatrices(elapsedTime, now);
  if (moved || pointColorsDirty) {
    updatePointMarkers();
  }
  if (moved) {
    updateConnectorGeometry();
  }
  updateCompactionPulseEffects(now, elapsedTime);
  updateSteeringPulseEffects(now, elapsedTime);
  updateCameraFlight(delta);
  controls.update();
  updateInfiniteGrid();
  renderer?.render(scene, camera);
}

function updateCameraFlight(delta: number): void {
  const forwardInput = (activeCameraFlyKeys.has("KeyW") ? 1 : 0) - (activeCameraFlyKeys.has("KeyS") ? 1 : 0);
  const strafeInput = (activeCameraFlyKeys.has("KeyD") ? 1 : 0) - (activeCameraFlyKeys.has("KeyA") ? 1 : 0);
  if (!forwardInput && !strafeInput) {
    return;
  }

  clampCameraFlyLookTarget();
  camera.getWorldDirection(cameraFlyForward);
  cameraFlyRight.crossVectors(cameraFlyForward, camera.up).normalize();
  cameraFlyMove
    .set(0, 0, 0)
    .addScaledVector(cameraFlyForward, forwardInput)
    .addScaledVector(cameraFlyRight, strafeInput);
  if (cameraFlyMove.lengthSq() < 0.000001) {
    return;
  }

  const distance = camera.position.distanceTo(controls.target);
  const baseSpeed = Math.min(CAMERA_FLY_MAX_SPEED, Math.max(CAMERA_FLY_MIN_SPEED, distance * CAMERA_FLY_DISTANCE_FACTOR));
  const speed = isCameraFlyFastActive() ? baseSpeed * CAMERA_FLY_FAST_MULTIPLIER : baseSpeed;
  cameraFlyMove.normalize().multiplyScalar(speed * delta);
  camera.position.add(cameraFlyMove);
  controls.target.add(cameraFlyMove);
}

function preventCanvasContextMenu(event: MouseEvent): void {
  event.preventDefault();
}

function handleCameraZoomWheel(event: WheelEvent): void {
  const modeScale =
    event.deltaMode === WheelEvent.DOM_DELTA_PAGE
      ? window.innerHeight
      : event.deltaMode === WheelEvent.DOM_DELTA_LINE
        ? 16
        : 1;
  const steps = Math.max(
    -CAMERA_ZOOM_MAX_WHEEL_STEPS,
    Math.min(CAMERA_ZOOM_MAX_WHEEL_STEPS, (event.deltaY * modeScale) / CAMERA_ZOOM_WHEEL_DELTA_UNIT)
  );
  if (Math.abs(steps) < 0.001) {
    return;
  }
  zoomCamera(-steps * CAMERA_ZOOM_UNIT);
  event.preventDefault();
}

function handleCanvasPointerLockPointerDown(event: PointerEvent): void {
  if (event.button !== 2 || isTextEntryTarget(event.target)) {
    return;
  }
  // Left clicks need normal client coordinates for raycast picking; OrbitControls
  // still handles left-drag panning without pointer lock.
  requestCanvasPointerLock();
}

function requestCanvasPointerLock(): void {
  if (document.pointerLockElement === canvas || typeof canvas.requestPointerLock !== "function") {
    return;
  }
  try {
    const lockResult = canvas.requestPointerLock() as Promise<void> | void;
    void lockResult?.catch(logTransientError);
  } catch (error) {
    logTransientError(error);
  }
}

function handleCanvasPointerLockMouseMove(event: MouseEvent): void {
  if (document.pointerLockElement !== canvas) {
    return;
  }
  if (cameraFlyLookActive) {
    applyCameraFlyLookDelta(event.movementX, event.movementY);
    event.preventDefault();
  } else if (cameraPanActive) {
    panCameraByPointerDelta(event.movementX, event.movementY);
    event.preventDefault();
  }
}

function handleCanvasPointerLockMouseUp(event: MouseEvent): void {
  if (event.button === 0) {
    cameraPanActive = false;
  } else if (event.button === 2) {
    stopCameraFlyLook();
  }

  if ((event.buttons & 3) === 0) {
    exitCanvasPointerLock();
  }
}

function handleCanvasPointerLockChange(): void {
  if (document.pointerLockElement === canvas) {
    return;
  }
  cameraPanActive = false;
  stopCameraFlyLook();
}

function exitCanvasPointerLock(): void {
  if (document.pointerLockElement === canvas && typeof document.exitPointerLock === "function") {
    document.exitPointerLock();
  }
}

function panCameraByPointerDelta(deltaX: number, deltaY: number): void {
  if (!deltaX && !deltaY) {
    return;
  }
  const distance = Math.max(1, camera.position.distanceTo(controls.target));
  const worldPerPixel =
    (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5)) * distance) / Math.max(1, canvas.clientHeight);
  camera.getWorldDirection(cameraFlyForward);
  cameraFlyRight.crossVectors(cameraFlyForward, camera.up).normalize();
  scratchVector.crossVectors(cameraFlyRight, cameraFlyForward).normalize();
  cameraFlyMove
    .copy(cameraFlyRight)
    .multiplyScalar(-deltaX * worldPerPixel)
    .addScaledVector(scratchVector, deltaY * worldPerPixel);
  camera.position.add(cameraFlyMove);
  controls.target.add(cameraFlyMove);
  controls.update();
}

function handleCameraFlyLookPointerDown(event: PointerEvent): void {
  if (event.button !== 2 || !shouldHandleCameraFlyLook(event)) {
    return;
  }
  cameraFlyLookActive = true;
  cameraFlyLookPointerId = event.pointerId;
  cameraFlyLookLastX = event.clientX;
  cameraFlyLookLastY = event.clientY;
  syncCameraFlyLookTarget();
  try {
    canvas.setPointerCapture(event.pointerId);
  } catch {
    // Pointer lock can take ownership before pointer capture is available.
  }
  event.preventDefault();
}

function handleCameraFlyLookPointerMove(event: PointerEvent): void {
  if (!cameraFlyLookActive || event.pointerId !== cameraFlyLookPointerId) {
    return;
  }
  if (document.pointerLockElement === canvas) {
    return;
  }

  const deltaX = event.clientX - cameraFlyLookLastX;
  const deltaY = event.clientY - cameraFlyLookLastY;
  cameraFlyLookLastX = event.clientX;
  cameraFlyLookLastY = event.clientY;
  applyCameraFlyLookDelta(deltaX, deltaY);
  event.preventDefault();
}

function endCameraFlyLookPointer(event: PointerEvent): void {
  if (event.pointerId !== cameraFlyLookPointerId) {
    return;
  }
  stopCameraFlyLook(event.pointerId);
  event.preventDefault();
}

function applyCameraFlyLookDelta(deltaX: number, deltaY: number): void {
  if (!deltaX && !deltaY) {
    return;
  }
  cameraFlyLookEuler.setFromQuaternion(camera.quaternion, "YXZ");
  cameraFlyLookEuler.y -= deltaX * CAMERA_FLY_LOOK_SENSITIVITY;
  cameraFlyLookEuler.x = Math.max(
    -CAMERA_FLY_LOOK_PITCH_LIMIT,
    Math.min(CAMERA_FLY_LOOK_PITCH_LIMIT, cameraFlyLookEuler.x - deltaY * CAMERA_FLY_LOOK_SENSITIVITY)
  );
  camera.quaternion.setFromEuler(cameraFlyLookEuler);
  syncCameraFlyLookTarget();
}

function stopCameraFlyLook(pointerId: number | null = cameraFlyLookPointerId): void {
  cameraFlyLookActive = false;
  cameraFlyLookPointerId = null;
  try {
    if (pointerId != null && canvas.hasPointerCapture(pointerId)) {
      canvas.releasePointerCapture(pointerId);
    }
  } catch {
    // Pointer lock may already have released the pointer capture state.
  }
}

function shouldHandleCameraFlyLook(event: PointerEvent): boolean {
  return !(mode === "overview" && overviewCameraMode === "two-d") && !isTextEntryTarget(event.target);
}

function clampCameraFlyLookTarget(): void {
  if (camera.position.distanceTo(controls.target) > CAMERA_FLY_LOOK_MAX_TARGET_DISTANCE) {
    syncCameraFlyLookTarget();
  }
}

function syncCameraFlyLookTarget(): void {
  const targetDistance = Math.min(
    CAMERA_FLY_LOOK_MAX_TARGET_DISTANCE,
    Math.max(CAMERA_FLY_LOOK_MIN_TARGET_DISTANCE, camera.position.distanceTo(controls.target))
  );
  camera.getWorldDirection(cameraFlyForward);
  controls.target.copy(camera.position).addScaledVector(cameraFlyForward, targetDistance);
  controls.update();
}

function updateInfiniteGrid() {
  grid.position.x = Math.round(controls.target.x / GRID_FOLLOW_STEP) * GRID_FOLLOW_STEP;
  grid.position.z = Math.round(controls.target.z / GRID_FOLLOW_STEP) * GRID_FOLLOW_STEP;
}

function updateNodePositions(delta: number): boolean {
  const lerpFactor = 1 - Math.pow(0.001, delta);
  let moved = false;
  nodes.forEach((node) => {
    if (node.position.distanceToSquared(node.target) < 0.000004) {
      return;
    }
    node.position.lerp(node.target, lerpFactor);
    node.matrixDirty = true;
    moved = true;
  });
  return moved;
}

function expireFreshNodes(now: number): void {
  let expired = false;
  nodes.forEach((node) => {
    if (node.isNew && !nodeIsFreshAt(node, now)) {
      node.isNew = false;
      node.matrixDirty = true;
      expired = true;
    }
  });
  if (expired) {
    syncInstanceColors();
  }
}

function updateCompactionPulseEffects(now: number, time: number): void {
  const freshCompactions = nodes.filter(
    (node): node is CompactionSceneNode => node.type === "compaction" && nodeIsFreshAt(node, now)
  );
  const pulseCues = new Map<
    string,
    { position: THREE.Vector3; eventIndex: number; progress: number; inProgress: boolean }
  >();
  freshCompactions.forEach((node) => {
    pulseCues.set(node.id, {
      position: node.position,
      eventIndex: node.eventIndex,
      progress: freshAnimationProgress(node, now),
      inProgress: false,
    });
  });

  const progressAnchor = compactionInProgress ? compactionProgressAnchorNode() : null;
  if (progressAnchor) {
    const progressElapsed = compactionProgressStartedAt ? now - compactionProgressStartedAt : 0;
    pulseCues.set(COMPACTION_PROGRESS_CUE_ID, {
      position: progressAnchor.position,
      eventIndex: progressAnchor.eventIndex,
      progress: (progressElapsed / 2200) % 1,
      inProgress: true,
    });
  }
  const activeIds = new Set(pulseCues.keys());

  removeInactivePulseMeshes(compactionPulseMeshes, compactionPulseGroup, activeIds);

  pulseCues.forEach((cue, cueId) => {
    const meshes = getOrCreatePulseMeshes(
      compactionPulseMeshes,
      cueId,
      COMPACTION_PULSE_COUNT,
      compactionPulseGroup,
      compactionPulseGeometry,
      kindColor.compaction
    );

    const envelope = cue.inProgress ? 0.82 : Math.sin(Math.min(1, cue.progress) * Math.PI);
    meshes.forEach((mesh, index) => {
      const wave = (cue.progress + mesh.userData.offset) % 1;
      const opacity = Math.pow(1 - wave, cue.inProgress ? 1.35 : 1.8) * (0.18 + envelope * 0.56);
      mesh.position.set(cue.position.x, cue.position.y - (cue.inProgress ? 0.82 : 0.66), cue.position.z);
      mesh.scale.setScalar(cue.inProgress ? 1.45 + wave * 6.2 + Math.sin(time * 5.2) * 0.16 : 1.2 + wave * 8.4);
      mesh.rotation.z = time * (cue.inProgress ? -0.9 : 0.45) + cue.eventIndex * 0.01 + index * 0.72;
      mesh.material.opacity = opacity;
      mesh.visible = opacity > 0.012;
    });
  });
}

function compactionProgressAnchorNode(): SceneNode | null {
  const progressNode = nodeById.get(COMPACTION_PROGRESS_CUE_ID);
  if (progressNode) {
    return progressNode;
  }
  if (activePromptId) {
    const activePrompt = nodeById.get(activePromptId);
    if (activePrompt?.type === "prompt") {
      return activePrompt;
    }
  }
  return latestPromptFocusNode() ?? latestTimelineFocusNode() ?? latestGraphNode();
}

function updateSteeringPulseEffects(now: number, time: number): void {
  const freshPrompts = nodes.filter(
    (node): node is PromptSceneNode => node.type === "prompt" && nodeIsFreshAt(node, now)
  );
  const streamingPrompt = liveCues.assistantStreaming ? latestPromptFocusNode() : null;
  const steeringPrompts = uniquePromptNodes(streamingPrompt ? [...freshPrompts, streamingPrompt] : freshPrompts);
  const activeIds = new Set(steeringPrompts.map((node) => node.id));

  removeInactivePulseMeshes(steeringPulseMeshes, steeringPulseGroup, activeIds);

  steeringPrompts.forEach((node) => {
    const meshes = getOrCreatePulseMeshes(
      steeringPulseMeshes,
      node.id,
      STEERING_PULSE_COUNT,
      steeringPulseGroup,
      steeringPulseGeometry,
      kindColor.prompt
    );

    const progress = freshAnimationProgress(node, now);
    const envelope = Math.sin(Math.min(1, progress) * Math.PI);
    meshes.forEach((mesh, index) => {
      const wave = (progress + mesh.userData.offset) % 1;
      const opacity = Math.pow(1 - wave, 1.55) * (0.1 + envelope * 0.38);
      mesh.position.set(node.position.x, node.position.y - 0.74, node.position.z);
      mesh.scale.set(1.0 + wave * 3.2, 1.0 + wave * 5.4, 1);
      mesh.rotation.z = time * 0.72 + node.eventIndex * 0.012 + index * Math.PI * 0.5;
      mesh.material.opacity = opacity;
      mesh.visible = opacity > 0.01;
    });
  });
}

function uniquePromptNodes(promptNodes: PromptSceneNode[]): PromptSceneNode[] {
  const seen = new Set<string>();
  return promptNodes.filter((node) => {
    if (seen.has(node.id)) {
      return false;
    }
    seen.add(node.id);
    return true;
  });
}

function createPointMarkers(): void {
  if (!nodes.length) {
    return;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(nodes.length * 3), 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(new Float32Array(nodes.length * 3), 3));
  geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 600);
  const material = new THREE.PointsMaterial({
    size: 3,
    sizeAttenuation: false,
    vertexColors: true,
    transparent: true,
    opacity: 0.92,
    depthWrite: false,
  });
  const nextPointMesh = new THREE.Points(geometry, material) as NodePoints;
  nextPointMesh.renderOrder = 5;
  nextPointMesh.userData.nodes = nodes;
  pointMesh = nextPointMesh;
  scene.add(nextPointMesh);
  pointColorsDirty = true;
  updatePointMarkers();
}

function updatePointMarkers(): void {
  if (!pointMesh) {
    return;
  }
  const positionAttr = pointMesh.geometry.getAttribute("position");
  const positions = positionAttr.array;

  nodes.forEach((node, index) => {
    const offset = index * 3;
    if (nodeVisibleInCurrentMode(node)) {
      positions[offset] = node.position.x;
      positions[offset + 1] = node.position.y;
      positions[offset + 2] = node.position.z;
    } else {
      positions[offset] = 0;
      positions[offset + 1] = HIDDEN_INSPECT_POINT_Y;
      positions[offset + 2] = 0;
    }
  });

  positionAttr.needsUpdate = true;
  if (pointColorsDirty) {
    syncPointMarkerColors();
  }
}

function writeAllInstanceMatrices(time: number, now: number): void {
  Object.values(meshBuckets).forEach((mesh) => {
    if (!mesh) {
      return;
    }
    let updated = false;
    mesh.userData.nodes.forEach((node, index) => {
      const fresh = nodeIsFreshAt(node, now);
      const selected = node.id === selectedNodeId;
      if (!node.matrixDirty && !fresh && !selected) {
        return;
      }
      writeNodeMatrix(mesh, node, index, time, now, fresh, selected);
      node.matrixDirty = false;
      updated = true;
    });
    if (updated) {
      mesh.instanceMatrix.needsUpdate = true;
    }
  });
}

function writeNodeMatrix(
  mesh: NodeInstancedMesh,
  node: SceneNode,
  index: number,
  time: number,
  now = performance.now(),
  fresh = nodeIsFreshAt(node, now),
  selected = node.id === selectedNodeId
): void {
  const freshProgress = freshAnimationProgress(node, now);
  const freshCompaction = fresh && node.type === "compaction";
  const growth = fresh ? (freshCompaction ? 0.18 + easeOutCubic(freshProgress) * 1.08 : 0.26 + easeOutCubic(freshProgress) * 0.74) : 1;
  const pulseAmount = freshCompaction ? 0.28 : 0.16;
  const freshPulse = fresh ? 1 + Math.max(0, Math.sin(time * (freshCompaction ? 14 : 9) + node.eventIndex)) * pulseAmount : 1;
  const pulse = (selected ? 1.18 : fresh ? 1 + Math.sin(time * 2.3 + node.eventIndex) * 0.018 : 1) * freshPulse;
  scratchObject.position.copy(node.position);
  if (mode === "inspect" || (!fresh && !selected)) {
    scratchObject.rotation.set(0, 0, 0);
  } else if (freshCompaction) {
    scratchObject.rotation.set(time * 1.45, time * 2.2 + node.eventIndex * 0.03, time * 1.1);
  } else {
    scratchObject.rotation.set(0.08 * Math.sin(time + node.eventIndex), time * 0.2 + node.eventIndex * 0.07, 0);
  }
  scratchObject.scale.setScalar(node.scale * growth * pulse);
  scratchObject.updateMatrix();
  mesh.setMatrixAt(index, scratchObject.matrix);
}

function nodeIsFreshAt(node: SceneNode, now: number): boolean {
  return Boolean(node.freshUntil && node.freshUntil > now);
}

function freshAnimationProgress(node: SceneNode, now: number): number {
  if (!node.freshUntil || node.freshUntil <= now) {
    return 1;
  }
  return Math.max(0, Math.min(1, 1 - (node.freshUntil - now) / FRESH_ANIMATION_MS));
}

function easeOutCubic(value: number): number {
  return 1 - Math.pow(1 - value, 3);
}

function updateConnectorGeometry(): void {
  if (!lineMesh) {
    return;
  }

  const attr = lineMesh.geometry.getAttribute("position");
  const positions = attr.array;

  let segmentIndex = 0;
  const writeSegment = (start: THREE.Vector3, end: THREE.Vector3): void => {
    const offset = segmentIndex * 6;
    positions[offset] = start.x;
    positions[offset + 1] = start.y;
    positions[offset + 2] = start.z;
    positions[offset + 3] = end.x;
    positions[offset + 4] = end.y;
    positions[offset + 5] = end.z;
    segmentIndex += 1;
  };

  activeConnectors.forEach((connector) => {
    const fromId = connectorFromId(connector);
    const toId = connectorToId(connector);
    const from = nodeById.get(fromId);
    const to = nodeById.get(toId);
    if (!from || !to) {
      return;
    }
    let previous = from.position;
    if (!Array.isArray(connector)) {
      connector.waypoints.forEach((waypoint) => {
        writeSegment(previous, waypoint);
        previous = waypoint;
      });
    }
    writeSegment(previous, to.position);
  });
  lineMesh.geometry.setDrawRange(0, segmentIndex * 2);
  attr.needsUpdate = true;
}

function onCanvasClick(event: MouseEvent): void {
  updatePointer(event);
  const hit = pickNode();
  if (hit) {
    openStream(hit);
  }
}

function onCanvasDoubleClick(event: MouseEvent): void {
  updatePointer(event);
  const hit = pickNode();
  if (!hit) {
    return;
  }
  if (hit.type === "compaction") {
    activePromptId = null;
    mode = "overview";
    setLayoutTargets();
    renderPromptList();
    openStream(hit);
    return;
  }
  if (hit.type === "prompt") {
    enterInspectMode(hit.id, hit);
  } else {
    enterInspectMode(hit.promptId, hit);
  }
}

function updatePointer(event: MouseEvent | PointerEvent): void {
  const rect = canvas.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
}

function pickNode(): SceneNode | null {
  raycaster.setFromCamera(pointer, camera);
  const meshes: THREE.Object3D[] = Object.values(meshBuckets).filter((mesh): mesh is NodeInstancedMesh => Boolean(mesh));
  if (pointMesh) {
    meshes.push(pointMesh);
  }
  const hits = raycaster.intersectObjects(meshes, false);
  for (const hit of hits) {
    if (hit.object === pointMesh && hit.index !== undefined) {
      return pointMesh.userData.nodes[hit.index] || null;
    }
    if (hit.instanceId !== undefined) {
      const bucketNodes = (hit.object as NodeInstancedMesh).userData.nodes;
      return bucketNodes[hit.instanceId] || null;
    }
  }
  return null;
}

function setRawJsonPayload(payload: unknown): void {
  const text = JSON.stringify(payload ?? {}, null, 2);
  rawJsonPreview.textContent = text;
  rawJsonSize.textContent = `${Math.max(1, Math.round(text.length / 1024))} KB`;
}

function openStream(
  node: SceneNode | undefined | null,
  { restartStream = true, reveal = true }: { restartStream?: boolean; reveal?: boolean } = {}
): void {
  if (!node) {
    return;
  }
  selectedNodeId = node.id;
  if (reveal) {
    showEventPopup();
  }
  syncInstanceColors();
  streamKind.textContent = node.kind.toUpperCase();
  turnNumber.textContent =
    node.type === "prompt"
      ? `PROMPT ${node.promptIndex + 1}`
      : node.type === "compaction"
        ? `CHECKPOINT ${node.eventIndex}`
        : node.type === "fileChange"
          ? `FILE ${node.eventIndex}`
          : node.type === "message"
            ? `ASSISTANT ${node.eventIndex}`
            : `TURN ${node.eventIndex}`;
  turnTimestamp.textContent = timestampForNode(node);
  contextEventTitle.textContent = node.title;
  streamTitle.textContent = node.title;
  setRawJsonPayload(node.source);
  syncEventContextActions();
  renderStreamImages(imagesForNode(node));
  const payload = node.detail || node.body || node.title;
  if (restartStream) {
    typeStream(payload);
  }
}

function typeStream(payload: string): void {
  if (streamTimer) {
    clearInterval(streamTimer);
  }

  const lines = payload.split("\n");
  let index = 0;
  streamData.textContent = "";
  streamTimer = setInterval(() => {
    const nextLines = lines.slice(index, index + 2);
    if (!nextLines.length) {
      if (streamTimer) {
        clearInterval(streamTimer);
      }
      streamTimer = null;
      return;
    }
    streamData.textContent += `${nextLines.join("\n")}\n`;
    index += 2;
  }, 34);
}

function renderStreamImages(images: ContentImageRef[] = []): void {
  streamImages.replaceChildren();
  if (!images.length) {
    const placeholder = document.createElement("div");
    placeholder.className = "stream-image-placeholder";
    placeholder.textContent = "No event media available; inspect Timeline, Transcript, or Raw for auditable evidence.";
    streamImages.append(placeholder);
    return;
  }

  const fragment = document.createDocumentFragment();
  images.forEach((image, index) => {
    const figure = document.createElement("figure");
    const imageUrl = sessionVersionedImageUrl(image);
    const link = document.createElement("a");
    link.className = "stream-image-link";
    link.href = imageUrl;
    link.target = "_blank";
    link.rel = "noopener";
    link.title = `Prompt image ${index + 1}`;

    const preview = document.createElement("img");
    preview.loading = "eager";
    preview.decoding = "async";
    preview.src = imageUrl;
    preview.alt = `Prompt image ${index + 1}`;
    preview.addEventListener("load", () => {
      figure.classList.add("loaded");
      figure.classList.remove("load-error");
    });
    preview.addEventListener("error", () => {
      figure.classList.add("load-error");
      caption.textContent = "Image unavailable in this local/privacy context; use Raw or Export for redacted evidence.";
    });

    const caption = document.createElement("figcaption");
    const detail = image.detail ? ` (${image.detail})` : "";
    caption.textContent = `${image.mimeType || "image"}${detail}`;

    link.append(preview);
    figure.append(link, caption);
    fragment.append(figure);
  });
  streamImages.append(fragment);
}

function sessionVersionedImageUrl(image: ContentImageRef): string {
  const url = new URL(image.url, window.location.origin);
  const cacheToken = graph?.lastModifiedAt || graph?.generatedAt || `${image.eventIndex}`;
  const imageSessionPath = activeSessionPath || graph?.sessionPath || null;
  url.searchParams.set("v", cacheToken);
  applySessionQuery(url, { includeSource: false, sessionPath: imageSessionPath });
  return `${url.pathname}${url.search}`;
}

function syncInstanceColors(): void {
  nodes.forEach((node) => {
    node.matrixDirty = true;
  });
  Object.values(meshBuckets).forEach((mesh) => {
    if (!mesh) {
      return;
    }
    mesh.userData.nodes.forEach((node, index) => {
      mesh.setColorAt(index, colorForNode(node, node.id === selectedNodeId));
    });
    if (mesh.instanceColor) {
      mesh.instanceColor.needsUpdate = true;
    }
  });
  pointColorsDirty = true;
  syncPointMarkerColors();
}

function syncPointMarkerColors(): void {
  if (!pointMesh) {
    return;
  }

  const colorAttr = pointMesh.geometry.getAttribute("color");
  const colors = colorAttr.array;
  nodes.forEach((node, index) => {
    const offset = index * 3;
    const color = colorForNode(node, node.id === selectedNodeId);
    colors[offset] = color.r;
    colors[offset + 1] = color.g;
    colors[offset + 2] = color.b;
  });
  colorAttr.needsUpdate = true;
  pointColorsDirty = false;
}

function colorForNode(node: SceneNode, selected: boolean): THREE.Color {
  const base = kindColor[node.kind] ?? kindColor.tool;
  scratchColor.setHex(base);
  if (!nodeVisibleInCurrentMode(node)) {
    scratchColor.setRGB(0, 0, 0);
  } else if (selected) {
    scratchColor.lerp(whiteColor, 0.38);
  } else if (node.isNew) {
    scratchColor.lerp(whiteColor, 0.24);
  } else if (mode === "inspect" && node.promptId !== activePromptId) {
    scratchColor.multiplyScalar(0.34);
  } else if ((activeMetric && !nodeMatchesMetric(node, activeMetric)) || !nodeMatchesSearch(node)) {
    scratchColor.multiplyScalar(0.38);
  }
  return scratchColor;
}

function nodeVisibleInCurrentMode(node: SceneNode): boolean {
  return mode !== "inspect" || !activePromptId || node.promptId === activePromptId;
}

function resize(): void {
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(1, Math.floor(rect.width));
  const height = Math.max(1, Math.floor(rect.height));
  renderer?.setSize(width, height, false);
  renderer?.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function frameOverview({ preserveDistance = false }: { preserveDistance?: boolean } = {}): void {
  if (!nodes.length || mode !== "overview") {
    return;
  }

  const latest = latestGraphFocusNode();
  const isNarrowViewport = camera.aspect < 0.75;
  const currentDistance = Math.max(18, camera.position.distanceTo(controls.target));
  const distance = preserveDistance
    ? Math.min(90, currentDistance)
    : isNarrowViewport
      ? overviewCameraMode === "two-d"
        ? NARROW_2D_CAMERA_HEIGHT
        : NARROW_OVERVIEW_CAMERA_DISTANCE
      : overviewCameraMode === "two-d"
        ? DEFAULT_2D_CAMERA_HEIGHT
        : DEFAULT_OVERVIEW_CAMERA_DISTANCE;
  const focus = latest ? overviewFrameFocusForNode(latest) : scratchVector.set(0, 0, 0);
  controls.target.set(focus.x, focus.y, focus.z);
  if (overviewCameraMode === "two-d") {
    camera.position.set(focus.x, focus.y + distance, focus.z + 0.01);
  } else {
    camera.position.set(focus.x + distance * 0.38, focus.y + distance * 0.68, focus.z + distance * 0.58);
  }
  controls.update();
}

function overviewFrameFocusForNode(node: SceneNode): THREE.Vector3 {
  const promptNodes = nodes.filter((candidate) => candidate.promptId === node.promptId && nodeVisibleInCurrentMode(candidate));
  if (promptNodes.length <= 1) {
    return focusPointForNode(node);
  }

  let minX = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let minY = Number.POSITIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;
  let minZ = Number.POSITIVE_INFINITY;
  let maxZ = Number.NEGATIVE_INFINITY;
  promptNodes.forEach((candidate) => {
    const point = focusPointForNode(candidate);
    minX = Math.min(minX, point.x);
    maxX = Math.max(maxX, point.x);
    minY = Math.min(minY, point.y);
    maxY = Math.max(maxY, point.y);
    minZ = Math.min(minZ, point.z);
    maxZ = Math.max(maxZ, point.z);
  });
  return new THREE.Vector3((minX + maxX) / 2, (minY + maxY) / 2, (minZ + maxZ) / 2);
}

function focusPointForNode(node: SceneNode): THREE.Vector3 {
  return node.home ?? node.target;
}

function latestGraphFocusPoint(): THREE.Vector3 | null {
  const latest = latestGraphFocusNode();
  return latest ? focusPointForNode(latest) : null;
}

function latestGraphNode(): SceneNode | null {
  return nodes.reduce<SceneNode | null>(
    (latest, node) => (!latest || node.eventIndex >= latest.eventIndex ? node : latest),
    null
  );
}

function latestPromptFocusNode(): PromptSceneNode | null {
  return nodes.reduce<PromptSceneNode | null>((latest, node) => {
    if (node.type !== "prompt") {
      return latest;
    }
    return !latest || node.eventIndex >= latest.eventIndex ? node : latest;
  }, null);
}

function latestSessionPromptFocusNode(): PromptSceneNode | null {
  return nodes.reduce<PromptSceneNode | null>((latest, node) => {
    if (node.type !== "prompt" || node.id === LIVE_PROMPT_CUE_ID) {
      return latest;
    }
    return !latest || node.eventIndex >= latest.eventIndex ? node : latest;
  }, null);
}

function latestTimelineFocusNode(): SceneNode | null {
  const latestTimelineItem = graph ? timelineEntries(graph).at(-1) : null;
  if (!latestTimelineItem) {
    return null;
  }
  const focusId = latestTimelineItem.type === "prompt" ? latestTimelineItem.prompt.id : latestTimelineItem.compaction.id;
  return nodeById.get(focusId) ?? null;
}

function latestGraphFocusNode(): SceneNode | null {
  const latestTimelineNode = latestTimelineFocusNode();
  if (latestTimelineNode?.type === "prompt") {
    if (latestTimelineNode.id === LIVE_PROMPT_CUE_ID) {
      return latestSessionPromptFocusNode() ?? latestTimelineNode;
    }
    return latestTimelineNode;
  }
  if (activePromptId) {
    const activePrompt = nodeById.get(activePromptId);
    if (activePrompt?.type === "prompt") {
      return activePrompt;
    }
  }
  return latestPromptFocusNode() ?? latestTimelineNode ?? latestGraphNode();
}

function resetInspector(): void {
  hideEventPopup();
  const current = graph;
  const latestPrompt = current?.prompts.at(-1);
  streamKind.textContent = "SESSION";
  turnNumber.textContent = current ? `${current.totals.promptCount} prompts` : "Loading";
  turnTimestamp.textContent = current?.lastModifiedAt || "Live context";
  contextEventTitle.textContent = current?.ui.sessionName || "Session overview";
  streamTitle.textContent = latestPrompt?.title || current?.ui.sessionName || "Session overview";
  streamData.textContent = sessionOverviewText();
  renderStreamImages();
  setRawJsonPayload(graph?.totals);
}

function refreshInspectorTotals(): void {
  setRawJsonPayload(graph?.totals);
}

function showEventPopup(): void {
  if (!canShowEventContext()) {
    hideEventPopup();
    return;
  }
  eventPopup.classList.remove("hidden");
  syncEventContextCollapse();
}

function canShowEventContext(): boolean {
  return activeAppMode === "map";
}

function isEventPopupVisible(): boolean {
  return !eventPopup.classList.contains("hidden");
}

function hideEventPopup(): void {
  eventPopup.classList.add("hidden");
  syncEventContextActions();
}

function selectedEventContext(): { node: SceneNode; row?: ModeEventRow } | null {
  if (!selectedNodeId) {
    return null;
  }
  const node = nodeById.get(selectedNodeId);
  if (!node) {
    return null;
  }
  const row = modeTimelineRows().find((candidate) => candidate.node?.id === node.id || candidate.eventIndex === node.eventIndex);
  return row ? { node, row } : { node };
}

function selectedEventReferenceText(): string | null {
  const selected = selectedEventContext();
  if (!selected) {
    return null;
  }
  return copySafeReferenceForModeRow(selected.row ?? modeRowFromSceneNode(selected.node));
}

function copySafeReferenceForModeRow(row: ModeEventRow): string {
  const current = currentGraph();
  return copySafeReferenceText({
    source: sourceLabel(current.source),
    lineNumber: row.lineNumber,
    eventIndex: row.eventIndex,
    kind: [row.role, row.eventType, row.toolName].filter(Boolean).join(" / "),
    summary: modeRowSafeReferenceSummary(row),
    parserVersion: current.parserVersion,
    schemaVersion: current.schemaVersion,
  });
}

function modeRowSafeReferenceSummary(row: ModeEventRow): string {
  return safeReferenceSummary({
    role: row.role,
    eventType: row.eventType,
    toolName: row.toolName,
    filePath: row.filePath,
    rawSummary: modeRowDisplaySummary(row),
  });
}

function modeRowDisplaySummary(row: ModeEventRow): string {
  return [row.title, row.detail].filter(Boolean).join(" - ");
}

function syncEventContextActions(): void {
  const hasSelection = Boolean(selectedEventContext());
  eventPopup.classList.toggle("has-selection", hasSelection);
  for (const button of [streamCopyRef, streamOpenTimeline, streamOpenTranscript, streamOpenRaw]) {
    button.disabled = !hasSelection;
  }
  if (!hasSelection) {
    streamCopyRef.textContent = "Copy Safe Ref";
  }
}

async function copySelectedEventRef(): Promise<void> {
  const referenceText = selectedEventReferenceText();
  if (!referenceText) {
    syncEventContextActions();
    return;
  }
  try {
    await navigator.clipboard.writeText(referenceText);
    streamCopyRef.textContent = "Copied";
    window.setTimeout(() => {
      streamCopyRef.textContent = "Copy Safe Ref";
    }, 1200);
  } catch (error) {
    openSyntheticStream("COPY", "Copy failed", errorMessage(error));
  }
}

function copySelectedSafeReference(): void {
  const referenceText = selectedEventReferenceText();
  if (!referenceText) {
    openSyntheticStream("COPY", "Select an event first", "Open Map or Timeline and select an event before copying a safe reference.");
    return;
  }
  copyText(referenceText, "Copy-safe reference copied");
}

function copySafeShareSummaryForGraph(current: SessionGraph): string {
  const shareability = current.shareabilitySummary;
  const privacy = current.privacySummary;
  const health = current.parserHealth;
  return copySafeShareSummaryText({
    source: sourceLabel(current.source),
    sessionName: current.ui.sessionName || current.sessionPath || `${sourceLabel(current.source)} session`,
    totalTurns: current.ui.totalTurns,
    callCount: current.totals.callCount,
    fileChangeCount: current.totals.fileChangeCount,
    latestEventIndex: current.latestEventIndex,
    parserVersion: current.parserVersion,
    schemaVersion: current.schemaVersion,
    cliContext: [current.metadata.originator, current.metadata.cliVersion].filter(Boolean).join(" ") || null,
    rawLogsSafeToShare: shareability.rawLogsSafeToShare,
    rawLogCaution: shareability.rawLogCaution,
    sanitizedGraphNote: shareability.sanitizedGraphNote,
    redactedFieldCount: health.redactedFieldCount,
    imageCount: health.imageCount,
    apiTokenRequired: privacy.apiTokenRequired,
  });
}

function openSelectedEventMode(nextMode: AppMode): void {
  const selected = selectedEventContext();
  if (!selected) {
    syncEventContextActions();
    return;
  }
  const selectedId = selected.node.id;
  const selectedPromptId = selected.node.promptId;
  const selectedPayload = selected.row?.source ?? selected.node.source;
  selectAppMode(nextMode);
  selectedNodeId = selectedId;
  activePromptId = selectedPromptId;
  setRawJsonPayload(selectedPayload);
  syncInstanceColors();
  if (nextMode !== "map") {
    renderActiveModePanel();
  }
}

function setEventContextCollapsed(collapsed: boolean): void {
  eventContextCollapsed = collapsed;
  syncEventContextCollapse();
}

function syncEventContextCollapse(): void {
  eventPopup.classList.toggle("compact", eventContextCollapsed);
  streamMinimize.textContent = eventContextCollapsed ? "+" : "_";
  streamMinimize.title = eventContextCollapsed ? "Expand context" : "Minimize context";
  streamMinimize.setAttribute("aria-label", eventContextCollapsed ? "Expand context" : "Collapse context");
  streamMinimize.setAttribute("aria-expanded", String(!eventContextCollapsed));
}

function setActiveButton(buttons: Iterable<HTMLButtonElement>, isActive: (button: HTMLButtonElement) => boolean): void {
  for (const button of buttons) {
    button.classList.toggle("active", isActive(button));
  }
}

function syncSourceButtons(): void {
  setActiveButton(sourceButtons, (button) => button.dataset.source === activeSource);
}

async function switchSource(source: string | undefined): Promise<void> {
  const nextSource = normalizeSource(source);
  if (nextSource === activeSource) {
    return;
  }

  stopLiveUpdates();
  activeSource = nextSource;
  activeSessionPath = null;
  diffRightSessionPath = null;
  diffResult = null;
  diffError = null;
  unknownsReport = null;
  unknownsError = null;
  syncSourceButtons();
  syncSessionUrl();
  resetSessionViewState();
  const switchGeneration = sessionLoadGeneration;
  await loadSessionOptions({ generation: switchGeneration });
  await loadGraph({ suppressLiveAnimation: true });
  if (isCurrentSessionLoad(switchGeneration)) {
    startLiveUpdates();
  }
}

function sessionOverviewText(): string {
  if (!graph) {
    return "Waiting for session data";
  }
  return [
    `${sourceLabel(graph.source)} session`,
    `Prompts: ${graph.totals.promptCount}`,
    `Turns: ${graph.ui.totalTurns}`,
    `Calls: ${graph.totals.callCount}`,
    `Completed calls: ${graph.totals.completedCallCount}`,
    `Messages: ${graph.totals.assistantMessageCount}`,
    `File changes: ${graph.totals.fileChangeCount}`,
    `Context: ${contextPressureSummary(graph.tokenTelemetry)}`,
    `Compactions: ${graph.totals.compactionCount}`,
    `Unknown events: ${graph.parserHealth?.unknownEventCount ?? 0}`,
    `Malformed lines: ${graph.parserHealth?.malformedLineCount ?? 0}`,
    `Codex: ${[graph.metadata.originator, graph.metadata.cliVersion].filter(Boolean).join(" ") || "unknown"}`,
    `Model: ${graph.metadata.model || graph.metadata.modelProvider || "unknown"}`,
    `Records: ${graph.lineCount}`,
    `Session file: ${shortPath(graph.sessionPath) || graph.sessionPath}`,
  ].join("\n");
}

function syncModePanelVisibility(): void {
  const active = activeAppMode !== "map";
  modePanel.classList.toggle("hidden", !active);
  sceneFrame.classList.toggle("mode-panel-active", active);
}

function renderActiveModePanel(): void {
  syncModePanelVisibility();
  if (activeAppMode === "map") {
    return;
  }
  modePanelKicker.textContent = sourceLabel(graph?.source ?? activeSource);
  modePanelTitle.textContent = appModeTitle(activeAppMode);
  modePanelFilters.classList.toggle("hidden", activeAppMode !== "timeline");
  if (!graph) {
    modePanelSummary.textContent = "Waiting for session data";
    modePanelContent.replaceChildren(modeEmpty("Waiting for session data."));
    return;
  }
  switch (activeAppMode) {
    case "summary":
      renderSummaryModePanel();
      return;
    case "timeline":
      renderTimelineModePanel();
      return;
    case "transcript":
      renderTranscriptModePanel();
      return;
    case "health":
      renderHealthModePanel();
      return;
    case "insights":
      renderInsightsModePanel();
      return;
    case "diff":
      renderDiffModePanel();
      return;
    case "raw":
      renderRawModePanel();
      return;
    case "export":
      renderExportModePanel();
      return;
    case "settings":
      renderSettingsModePanel();
      return;
  }
}

function appModeTitle(appMode: AppMode): string {
  return appMode.charAt(0).toUpperCase() + appMode.slice(1);
}

function renderSummaryModePanel(): void {
  if (!graph) {
    modePanelSummary.textContent = "Waiting for session data";
    modePanelContent.replaceChildren(modeEmpty("Waiting for session data."));
    return;
  }
  const current = currentGraph();
  const privacy = graph.privacySummary;
  const shareability = graph.shareabilitySummary;
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
    modeButton("Copy Share Summary", () => copyText(copySafeShareSummaryForGraph(current), "Copy-safe share summary copied")),
    modeButton("Open Export", () => selectAppMode("export")),
    modeButton("Audit Raw", () => selectAppMode("raw"))
  );
  shareCard.append(shareActions);
  triage.append(whatHappened, renderSummaryInsightQueue(current.insights), shareCard);

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
    summaryFact("Parser Health", [
      ["Parser", `${health.parserVersion} / ${health.schemaVersion}`],
      ["Renderable events", formatNumber(health.renderableEventCount)],
      ["Unknown events", formatNumber(health.unknownEventCount)],
      ["Malformed lines", formatNumber(health.malformedLineCount)],
      ["Skipped payloads", formatNumber(health.skippedLargePayloadCount)],
      ["Warnings", formatNumber(health.warnings.length)],
    ]),
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

function summaryFact(title: string, facts: [string, string][]): HTMLElement {
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

function renderSummaryInsightQueue(insights: TraceInsights): HTMLElement {
  const card = modeCard("Inspect First");
  card.classList.add("summary-insights");
  const items = insights.inspectionQueue.slice(0, 3);
  if (!items.length) {
    card.append(
      modeParagraph("No high-priority findings detected. Parser health and raw inspection remain available for audit."),
      summaryInsightActionRow([modeButton("Open Insights", () => selectAppMode("insights")), modeButton("Audit Raw", () => selectAppMode("raw"))])
    );
    return card;
  }

  const intro = modeParagraph("Top queued findings are ready for inspect-first review; each evidence action routes to an existing panel and falls back clearly when no event line is logged.");
  const list = document.createElement("div");
  list.className = "summary-insight-list";
  items.forEach((item, index) => {
    const row = document.createElement("article");
    row.className = `summary-insight severity-${item.severity}`;
    const body = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = `${index + 1}. ${item.title}`;
    const meta = document.createElement("small");
    meta.textContent = summaryInsightMeta(item);
    const summary = document.createElement("p");
    summary.textContent = item.redactionSafeSummary || item.summary;
    body.append(title, meta, summary);

    const actions = summaryInsightActionRow([
      modeButton("Open Insights", () => openInsightDetails(item)),
      modeButton("Timeline Evidence", () => openInsightEvidence(item, "timeline")),
      modeButton("Transcript Evidence", () => openInsightEvidence(item, "transcript")),
      modeButton("Raw Evidence", () => openInsightEvidence(item, "raw")),
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

function summaryInsightMeta(item: InspectionQueueItem): string {
  const line = firstInsightLine(item);
  const eventLabel = item.eventIds.length ? `${formatNumber(item.eventIds.length)} linked events` : "no linked event ids";
  const lineLabel = line ? `line ${line}` : "no event line logged";
  return [item.severity, item.confidence, item.directness, lineLabel, eventLabel].filter(Boolean).join(" - ");
}

function firstInsightLine(item: InspectionQueueItem): number | null {
  return item.lineNumbers.find((line) => Number.isFinite(line) && line > 0) ?? null;
}

function evidenceRowForInsight(item: InspectionQueueItem): ModeEventRow | null {
  const rows = modeTimelineRows();
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

function openInsightDetails(item: InspectionQueueItem): void {
  selectAppMode("insights");
  setRawJsonPayload(item);
  modePanelSummary.textContent = `Queued insight selected - ${item.title}`;
  const notice = modeEmpty("Selected insight loaded in Raw for audit; use evidence actions to jump into Timeline, Transcript, or Raw rows when line/event data is available.");
  notice.classList.add("mode-notice");
  modePanelContent.prepend(notice);
}

function openInsightEvidence(item: InspectionQueueItem, destination: AppMode): void {
  const row = evidenceRowForInsight(item);
  if (row) {
    focusEventByLine(row.lineNumber, item.title, item, destination);
    return;
  }
  const detail = firstInsightLine(item) || item.eventIds.length
    ? "Logged evidence did not match a rendered Timeline or Transcript row; showing the queued insight instead."
    : "No event line is logged for this insight; showing the queued insight instead.";
  openInsightDetails(item);
  showEvidenceFallback(item.title, item, detail);
}

function renderTimelineModePanel(): void {
  const rows = modeTimelineRows();
  populateTimelineFilterOptions(rows);
  const filtered = rows.filter(modeRowMatchesFilters);
  const visible = filtered.slice(0, 600);
  modePanelSummary.textContent = `${filtered.length} of ${rows.length} events`;
  if (!visible.length) {
    modePanelContent.replaceChildren(modeEmpty("No timeline events match the current filters."));
    return;
  }
  const fragment = document.createDocumentFragment();
  const actions = document.createElement("div");
  actions.className = "mode-actions";
  actions.append(modeButton("Copy Safe Reference", () => copySelectedSafeReference()));
  fragment.append(actions);
  visible.forEach((row) => fragment.append(renderModeRow(row)));
  if (filtered.length > visible.length) {
    fragment.append(modeEmpty(`${filtered.length - visible.length} additional events hidden; narrow filters or search to inspect them.`));
  }
  modePanelContent.replaceChildren(fragment);
}

function modeTimelineRows(): ModeEventRow[] {
  if (!graph) {
    return [];
  }
  const rows = nodes.map(modeRowFromSceneNode);
  for (const unknown of graph.parserHealth.unknownEvents || []) {
    rows.push({
      id: `unknown-${unknown.eventIndex}`,
      eventIndex: unknown.eventIndex,
      lineNumber: unknown.lineNumber,
      role: "unknown",
      eventType: unknown.sourceEventType,
      toolName: "",
      filePath: "",
      title: `Unknown event ${unknown.sourceEventType}`,
      detail: unknown.preview,
      timestamp: null,
      flags: ["unknown"],
      source: unknown,
    });
  }
  for (const malformed of graph.parserHealth.malformedLines || []) {
    rows.push({
      id: `malformed-${malformed.eventIndex}`,
      eventIndex: malformed.eventIndex,
      lineNumber: malformed.lineNumber,
      role: "malformed",
      eventType: "malformed_jsonl",
      toolName: "",
      filePath: "",
      title: malformed.error,
      detail: malformed.preview,
      timestamp: null,
      flags: ["malformed"],
      source: malformed,
    });
  }
  for (const skipped of graph.parserHealth.skippedLargePayloads || []) {
    rows.push({
      id: `skipped-${skipped.eventIndex}`,
      eventIndex: skipped.eventIndex,
      lineNumber: skipped.lineNumber,
      role: "parser",
      eventType: "skipped_large_payload",
      toolName: "",
      filePath: "",
      title: skipped.reason,
      detail: `${formatNumber(skipped.byteLength)} bytes`,
      timestamp: null,
      flags: ["large"],
      source: skipped,
    });
  }
  rows.sort((left, right) => left.eventIndex - right.eventIndex || left.lineNumber - right.lineNumber);
  return rows;
}

function modeRowFromSceneNode(node: SceneNode): ModeEventRow {
  const role = node.type === "prompt" ? "user" : node.type === "message" ? "assistant" : node.type === "call" ? "tool" : node.type === "fileChange" ? "file" : "system";
  const toolName = node.type === "call" ? node.source.name : "";
  const filePath = node.type === "fileChange" ? node.source.path : "";
  const detail = [node.detail, node.body].filter(Boolean).join("\n");
  const flags = new Set<string>();
  if (nodeMatchesMetric(node, "error") || errorishText(`${node.title} ${detail}`)) {
    flags.add("error");
  }
  if (node.type === "call" && node.source.durationMs !== null && node.source.durationMs > 30_000) {
    flags.add("long");
  }
  if (node.type === "fileChange") {
    flags.add("file");
  }
  if (node.type === "compaction") {
    flags.add("compaction");
  }
  if (`${node.title} ${detail}`.includes("[REDACTED")) {
    flags.add("redacted");
  }
  const duration = node.type === "call" && node.source.durationMs !== null ? durationLabel(node.source.durationMs) : "";
  return {
    id: node.id,
    eventIndex: node.eventIndex,
    lineNumber: node.eventIndex + 1,
    role,
    eventType: node.type === "fileChange" ? `file_${node.source.changeType}` : node.type,
    toolName,
    filePath,
    title: node.title,
    detail: [duration, detail].filter(Boolean).join("\n"),
    timestamp: node.type === "call" ? node.source.startedAt || node.source.completedAt : node.source.timestamp,
    flags: [...flags],
    source: node.source,
    node,
  };
}

function populateTimelineFilterOptions(rows: ModeEventRow[]): void {
  populateModeSelect(modeFilterRole, "All roles", rows.map((row) => row.role));
  populateModeSelect(modeFilterType, "All types", rows.map((row) => row.eventType));
  populateModeSelect(modeFilterTool, "All tools", rows.map((row) => row.toolName).filter(Boolean));
  populateModeSelect(modeFilterFile, "All files", rows.map((row) => shortPath(row.filePath) || row.filePath).filter(Boolean));
}

function populateModeSelect(select: HTMLSelectElement, label: string, values: string[]): void {
  const selected = select.value;
  const unique = [...new Set(values)].sort((left, right) => left.localeCompare(right));
  const fragment = document.createDocumentFragment();
  const all = document.createElement("option");
  all.value = "";
  all.textContent = label;
  fragment.append(all);
  unique.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    fragment.append(option);
  });
  select.replaceChildren(fragment);
  select.value = unique.includes(selected) ? selected : "";
}

function modeRowMatchesFilters(row: ModeEventRow): boolean {
  if (modeFilterRole.value && row.role !== modeFilterRole.value) {
    return false;
  }
  if (modeFilterType.value && row.eventType !== modeFilterType.value) {
    return false;
  }
  if (modeFilterTool.value && row.toolName !== modeFilterTool.value) {
    return false;
  }
  const rowShortFile = shortPath(row.filePath) || row.filePath;
  if (modeFilterFile.value && rowShortFile !== modeFilterFile.value) {
    return false;
  }
  if (modeFilterErrors.checked && !row.flags.includes("error")) {
    return false;
  }
  if (modeFilterUnknown.checked && !row.flags.includes("unknown")) {
    return false;
  }
  if (modeFilterMalformed.checked && !row.flags.includes("malformed")) {
    return false;
  }
  if (modeFilterRedacted.checked && !row.flags.includes("redacted")) {
    return false;
  }
  if (searchTerm) {
    return [row.role, row.eventType, row.toolName, row.filePath, row.title, row.detail, row.flags.join(" ")]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm);
  }
  return true;
}

function renderModeRow(row: ModeEventRow): HTMLButtonElement {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `mode-row ${row.node?.id === selectedNodeId ? "active" : ""}`;
  const line = document.createElement("code");
  line.textContent = [`L${row.lineNumber}`, formatModeTimestamp(row.timestamp)].filter(Boolean).join("\n");
  const kind = document.createElement("small");
  kind.textContent = [row.role, row.eventType, row.toolName].filter(Boolean).join(" / ");
  const title = document.createElement("strong");
  title.textContent = row.title;
  const detail = document.createElement("small");
  detail.textContent = compactUiText([row.filePath, row.detail].filter(Boolean).join(" - "), 260);
  button.append(line, kind, title, detail);
  button.addEventListener("click", () => inspectModeRow(row));
  return button;
}

function formatModeTimestamp(timestamp: string | null): string {
  if (!timestamp) {
    return "";
  }
  const date = new Date(timestamp);
  if (Number.isNaN(date.valueOf())) {
    return timestamp;
  }
  if (modeFilterUtc.checked) {
    return date.toISOString().replace(".000Z", "Z");
  }
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function inspectModeRow(row: ModeEventRow): void {
  if (row.node) {
    selectedNodeId = row.node.id;
    activePromptId = row.node.promptId;
    syncInstanceColors();
    openStream(row.node, { reveal: false });
  } else {
    openSyntheticStream(row.eventType.toUpperCase(), row.title, row.detail || row.title);
  }
  setRawJsonPayload(row.source);
}

function renderTranscriptModePanel(): void {
  const current = currentGraph();
  modePanelSummary.textContent = `${current.prompts.length} turns`;
  const fragment = document.createDocumentFragment();
  current.prompts.forEach((prompt, index) => {
    const card = modeCard(`User ${index + 1}: ${prompt.title}`);
    const flow = document.createElement("div");
    flow.className = "transcript-flow";
    transcriptEntriesForPrompt(prompt).forEach((entry) => {
      flow.append(transcriptStep(entry));
    });
    card.append(flow);
    fragment.append(card);
  });
  modePanelContent.replaceChildren(fragment.childNodes.length ? fragment : modeEmpty("No transcript events were parsed."));
}

function transcriptEntriesForPrompt(prompt: PromptNode): TranscriptEntry[] {
  const entries: TranscriptEntry[] = [];
  promptActivityUnits(prompt, prompt.calls).forEach((unit) => {
    if (unit.type === "assistant") {
      entries.push({
        label: "Assistant",
        title: "Response",
        body: unit.message.text,
        eventIndex: unit.message.eventIndex,
      });
      unit.calls.forEach((call) => entries.push(...transcriptEntriesForCall(call)));
      return;
    }
    entries.push(...transcriptEntriesForCall(unit.call));
  });
  prompt.fileChanges.forEach((file) => {
    entries.push({
      label: "File",
      title: `${file.changeType}: ${file.shortPath || file.path}`,
      body: file.preview || file.detail,
      eventIndex: file.eventIndex,
    });
  });
  return [{ label: "Prompt", title: prompt.title, body: prompt.text, eventIndex: prompt.eventIndex }, ...entries.sort((a, b) => a.eventIndex - b.eventIndex)];
}

function transcriptEntriesForCall(call: CallNode): TranscriptEntry[] {
  const argumentText = call.argumentPreview || "No arguments logged.";
  const resultText = call.outputPreview || (call.status === "completed" ? "No result preview logged." : `Status: ${call.status}`);
  return [
    { label: "Tool", title: `${call.name} (${call.status})`, body: argumentText, eventIndex: call.eventIndex },
    { label: "Result", title: call.name, body: resultText, eventIndex: call.eventIndex },
  ];
}

function transcriptStep(entry: TranscriptEntry): HTMLElement {
  const row = document.createElement("div");
  row.className = "transcript-step";
  const badge = document.createElement("code");
  badge.textContent = entry.label;
  const content = document.createElement("div");
  const heading = document.createElement("strong");
  heading.textContent = entry.title;
  const paragraph = modeParagraph(compactUiText(entry.body, 520));
  content.append(heading, paragraph);
  row.append(badge, content);
  return row;
}

function renderHealthModePanel(): void {
  const health = currentGraph().parserHealth;
  modePanelSummary.textContent = `${health.unknownEventCount} unknown / ${health.malformedLineCount} malformed / ${health.skippedLargePayloadCount} skipped`;
  void ensureUnknownsReportLoaded();
  const fragment = document.createDocumentFragment();
  const actions = document.createElement("div");
  actions.className = "mode-actions";
  actions.append(
    modeButton("Copy Parser Summary", () => copyText(parserHealthSummaryText(currentGraph()), "Parser health summary copied")),
    modeButton("Export Unknowns JSON", () => exportUnknownsJson()),
    modeButton("Copy Issue Body", () => copySchemaDriftIssueBody()),
    modeButton("Fixture Report", () => exportFixtureReportMarkdown())
  );
  fragment.append(actions);
  const grid = document.createElement("div");
  grid.className = "mode-card-grid";
  grid.append(
    modeCard("Parser", [
      `${health.parserVersion} / ${health.schemaVersion}`,
      `Source confidence: ${health.sourceDetectionConfidence}`,
      `Parsed ${health.parsedEventCount} of ${health.totalLinesRead} lines`,
    ]),
    modeCard("Unknown Events", [
      `${health.unknownEventCount} total`,
      ...(health.unknownEventTypes || []).map((eventType) => `${eventType.sourceEventType}: ${eventType.count}`),
    ]),
    modeCard("Malformed And Skipped", [
      `Malformed lines: ${health.malformedLineCount}`,
      `Skipped large payloads: ${health.skippedLargePayloadCount}`,
      ...((health.malformedLines || []).slice(0, 5).map((line) => `Line ${line.lineNumber}: ${line.error}`)),
    ]),
    modeCard("Coverage", [
      `Tool calls/results: ${health.toolCallCount}/${health.toolResultCount}`,
      `File activity: ${health.fileActivityCount}`,
      `Token telemetry: ${health.tokenTelemetryAvailable ? "available" : "not logged"}`,
      `Redacted fields: ${health.redactedFieldCount}`,
    ])
  );
  fragment.append(grid);
  const sampleCard = modeCard("Unknown Samples");
  sampleCard.append(renderUnknownSamples(health));
  fragment.append(sampleCard);
  if (unknownsLoading) {
    fragment.append(modeEmpty("Preparing redacted schema-drift report..."));
  } else if (unknownsError) {
    fragment.append(modeEmpty(unknownsError));
  } else if (unknownsReport) {
    fragment.append(
      modeCard("Issue Template", [
        `Fixture: ${unknownsReport.suggestedFixtureName}`,
        `Samples: ${unknownsReport.redactedSamples.length}`,
        `Profile: ${unknownsReport.redactionReport.profile}`,
      ])
    );
  }
  modePanelContent.replaceChildren(fragment);
}

function renderInsightsModePanel(): void {
  const insights = currentGraph().insights;
  modePanelSummary.textContent = `${insights.inspectionQueue.length} queued / ${insights.repeatedPatterns.length} repeated / ${insights.suspiciousToolCalls.length} suspicious`;
  const fragment = document.createDocumentFragment();
  const actions = document.createElement("div");
  actions.className = "mode-actions";
  actions.append(
    modeButton("Copy Insight Summary", () => copyText(insightSummaryText(insights), "Insight summary copied"))
  );
  fragment.append(actions);
  const queue = modeCard("What Should I Inspect First?");
  queue.append(renderInspectionQueue(insights));
  fragment.append(queue);
  const grid = document.createElement("div");
  grid.className = "mode-card-grid";
  grid.append(
    modeCard(
      "Failure Chain",
      insights.failureChain
        ? [
            `First logged error-like event: line ${insights.failureChain.firstLoggedError.lineNumber} - ${insights.failureChain.firstLoggedError.title}`,
            `Possible retries: ${insights.failureChain.subsequentRetries.length}`,
            `File changes after first error: ${insights.failureChain.fileChangesAfterFirstError.length}`,
            `Final logged outcome: ${insights.failureChain.finalOutcome}`,
          ]
        : ["No logged error-like event detected."]
    ),
    modeCard("Repeated Patterns", insights.repeatedPatterns.slice(0, 8).map((pattern) => `${pattern.patternType} x${pattern.count} lines ${pattern.firstLine}-${pattern.lastLine}: ${pattern.key}`)),
    modeCard("Suspicious Tool Calls", insights.suspiciousToolCalls.slice(0, 8).map((call) => `Line ${call.call.lineNumber} ${call.toolName}: ${call.reason}`)),
    modeCard("Context Pressure", [
      insights.contextPressure.status,
      insights.contextPressure.explanation,
      `High-context markers: ${insights.contextPressure.highContextMarkers.length}`,
      `Compaction markers: ${insights.contextPressure.compactionMarkers.length}`,
    ]),
    modeCard("File Impact", [
      `Edited: ${insights.fileImpact.filesEdited.length}`,
      `Read: ${insights.fileImpact.filesRead.length}`,
      `Referenced: ${insights.fileImpact.filesReferenced.length}`,
      ...insights.fileImpact.filesEdited.slice(0, 6).map((file) => `${file.path} (${file.count})`),
    ]),
    modeCard("Approval And Sandbox", insights.approvalFriction.slice(0, 8).map((note) => `${note.severity}: ${note.title}`))
  );
  fragment.append(grid);
  modePanelContent.replaceChildren(fragment);
}

function renderDiffModePanel(): void {
  const current = currentGraph();
  const options = diffSessionOptions(current);
  const rightOptions = options.filter((session) => session.path !== current.sessionPath);
  if (
    !diffRightSessionPath ||
    diffRightSessionPath === current.sessionPath ||
    !rightOptions.some((session) => session.path === diffRightSessionPath)
  ) {
    diffRightSessionPath = rightOptions[0]?.path ?? null;
  }
  modePanelSummary.textContent = diffResult
    ? `${diffResult.toolDelta.calls.left} -> ${diffResult.toolDelta.calls.right} tools / ${diffResult.errorDelta.errors.left} -> ${diffResult.errorDelta.errors.right} errors`
    : "Select Run B to compare";
  const fragment = document.createDocumentFragment();
  const controls = modeCard("Compare Sessions");
  const controlRow = document.createElement("div");
  controlRow.className = "mode-control-row";
  const left = document.createElement("div");
  left.className = "mode-field";
  left.append(modeSmallLabel("Run A"), modeCode(current.sessionPath));
  const right = document.createElement("div");
  right.className = "mode-field";
  right.append(modeSmallLabel("Run B"));
  const select = document.createElement("select");
  select.className = "mode-select";
  select.setAttribute("aria-label", "Run B session");
  rightOptions.forEach((session) => {
    const option = document.createElement("option");
    option.value = session.path;
    option.textContent = sessionOptionText(session);
    option.title = session.path;
    select.append(option);
  });
  select.value = diffRightSessionPath ?? "";
  select.disabled = rightOptions.length === 0;
  const applyRightSessionSelection = () => {
    diffRightSessionPath = selectedSessionValue(select);
    diffResult = null;
    diffError = null;
    modePanelSummary.textContent = "Select Run B to compare";
  };
  select.addEventListener("change", () => {
    applyRightSessionSelection();
    void runDiffCompare();
  });
  select.addEventListener("input", applyRightSessionSelection);
  const compare = modeButton("Compare", () => {
    diffRightSessionPath = selectedSessionValue(select);
    void runDiffCompare();
  });
  compare.disabled = rightOptions.length === 0;
  right.append(select, compare);
  controlRow.append(left, right);
  controls.append(controlRow);
  fragment.append(controls);
  if (rightOptions.length === 0) {
    fragment.append(modeEmpty("No other sessions are available to compare with this run."));
    modePanelContent.replaceChildren(fragment);
    return;
  }
  if (diffLoading) {
    fragment.append(modeEmpty("Comparing normalized traces..."));
    modePanelContent.replaceChildren(fragment);
    return;
  }
  if (diffError) {
    fragment.append(modeEmpty(diffError));
  }
  if (!diffResult) {
    fragment.append(modeEmpty("Choose a second session and compare. Diff results are redacted by default."));
    modePanelContent.replaceChildren(fragment);
    return;
  }
  const result = diffResult;
  const actions = document.createElement("div");
  actions.className = "mode-actions";
  actions.append(
    modeButton("Copy Summary", () => copyText(diffSummaryText(result), "Diff summary copied")),
    modeButton("Export JSON", () => downloadText("perlustron-diff.json", JSON.stringify(result, null, 2), "application/json")),
    modeButton("Export HTML", () => downloadText("perlustron-diff.html", diffHtmlReport(result), "text/html"))
  );
  fragment.append(actions);
  const grid = document.createElement("div");
  grid.className = "mode-card-grid";
  grid.append(
    modeCard("Overview", [
      `Sources: ${result.leftSummary.source} -> ${result.rightSummary.source}`,
      `Session IDs: ${result.leftSummary.sessionId || "unknown"} -> ${result.rightSummary.sessionId || "unknown"}`,
      `Models: ${result.leftSummary.model || "unknown"} -> ${result.rightSummary.model || "unknown"}`,
      `Events: ${result.leftSummary.renderableEventCount} -> ${result.rightSummary.renderableEventCount}`,
      `Duration: ${result.leftSummary.loggedDuration} / ${result.rightSummary.loggedDuration}`,
    ]),
    modeCard("Parser Health Delta", [
      `Parsed: ${result.leftSummary.parsedEventCount} -> ${result.rightSummary.parsedEventCount}`,
      `Renderable: ${result.leftSummary.renderableEventCount} -> ${result.rightSummary.renderableEventCount}`,
      `Unknown: ${formatCountDelta(result.parserHealthDelta.unknownEvents)}`,
      `Malformed: ${formatCountDelta(result.parserHealthDelta.malformedLines)}`,
      `Skipped payloads: ${formatCountDelta(result.parserHealthDelta.skippedLargePayloads)}`,
    ]),
    modeCard("Tool Delta", [
      `Calls: ${formatCountDelta(result.toolDelta.calls)}`,
      `Results: ${formatCountDelta(result.toolDelta.results)}`,
      `Missing results: ${formatCountDelta(result.toolDelta.missingResults)}`,
      `Only A: ${limitedList(result.toolDelta.onlyLeftTools, 6)}`,
      `Only B: ${limitedList(result.toolDelta.onlyRightTools, 6)}`,
    ]),
    modeCard("File Delta", [
      `Only A: ${result.fileDelta.onlyLeft.length}`,
      `Only B: ${result.fileDelta.onlyRight.length}`,
      `Both: ${result.fileDelta.both.length}`,
      ...result.fileDelta.onlyLeft.slice(0, 4).map((file) => `A: ${file}`),
      ...result.fileDelta.onlyRight.slice(0, 4).map((file) => `B: ${file}`),
    ]),
    modeCard("Error And Failure Delta", [
      `Error-like events: ${formatCountDelta(result.errorDelta.errors)}`,
      `First A: ${result.errorDelta.leftFirstError || "none"}`,
      `First B: ${result.errorDelta.rightFirstError || "none"}`,
      `Repeated patterns: ${result.repeatedPatternDelta.leftCount} -> ${result.repeatedPatternDelta.rightCount}`,
    ]),
    modeCard("Token And Context Delta", [
      `Telemetry: ${result.tokenDelta.leftAvailable ? "A yes" : "A no"} / ${result.tokenDelta.rightAvailable ? "B yes" : "B no"}`,
      `Latest tokens: ${result.tokenDelta.leftLatestTotalTokens ?? "n/a"} -> ${result.tokenDelta.rightLatestTotalTokens ?? "n/a"}`,
      `Context percent: ${formatOptionalPercent(result.tokenDelta.leftContextPercent)} -> ${formatOptionalPercent(result.tokenDelta.rightContextPercent)}`,
      `Compactions: ${formatCountDelta(result.compactionDelta)}`,
    ])
  );
  fragment.append(grid);
  const divergence = modeCard("Divergence");
  divergence.append(renderDivergenceList(result));
  fragment.append(divergence);
  if (result.warnings.length) {
    fragment.append(modeCard("Warnings", result.warnings));
  }
  modePanelContent.replaceChildren(fragment);
}

function renderRawModePanel(): void {
  const current = currentGraph();
  modePanelSummary.textContent = selectedNodeId ? "Selected event" : "Session graph";
  const payload = selectedNodeId ? nodeById.get(selectedNodeId)?.source : current;
  const pre = document.createElement("pre");
  pre.textContent = JSON.stringify(payload ?? current.totals, null, 2);
  modePanelContent.replaceChildren(pre);
}

function renderExportModePanel(): void {
  const current = currentGraph();
  modePanelSummary.textContent = "Redacted reports";
  const grid = document.createElement("div");
  grid.className = "mode-card-grid";
  grid.append(
    modeCard("Reports", [
      `perlustron export ${current.sessionPath} --format html --redacted -o report.html`,
      `perlustron export ${current.sessionPath} --format markdown --redacted -o report.md`,
      `perlustron export ${current.sessionPath} --format json -o normalized-trace.json`,
    ]),
    modeCard("Schema Drift", [
      `perlustron unknowns ${current.sessionPath} --redacted -o unknowns-redacted.json`,
      `perlustron fixture-report ${current.sessionPath} --redacted -o fixture-report.md`,
    ])
  );
  modePanelContent.replaceChildren(grid);
}

function renderSettingsModePanel(): void {
  const current = currentGraph();
  modePanelSummary.textContent = "Local observatory settings";
  const grid = document.createElement("div");
  grid.className = "mode-card-grid";
  grid.append(
    modeCard("Session", [
      `Source: ${sourceLabel(current.source)}`,
      `Session: ${activeSessionPath ? shortPath(activeSessionPath) : shortPath(current.sessionPath) || "latest"}`,
      `Live updates: ${isTailing ? (liveEventsConnected ? "SSE stream" : "fallback polling") : "paused"}`,
    ]),
    modeCard("Renderer", [
      "Three.js instancing",
      `Mode panel: ${activeAppMode === "settings" ? "visible" : "hidden"}`,
      `Raw JSON: ${rawExpanded ? "visible" : "collapsed"}`,
    ]),
    modeCard("Backend", [
      "Rust Axum JSONL parser",
      `Parser: ${current.parserHealth.parserVersion} / ${current.parserHealth.schemaVersion}`,
      `API token required: ${current.privacySummary.apiTokenRequired ? "yes" : "no"}`,
    ])
  );
  modePanelContent.replaceChildren(grid);
}

function modeCard(title: string, lines: string[] = []): HTMLElement {
  const card = document.createElement("section");
  card.className = "mode-card";
  const heading = document.createElement("h3");
  heading.textContent = title;
  card.append(heading);
  if (lines.length) {
    const list = document.createElement("ul");
    lines.forEach((line) => {
      const item = document.createElement("li");
      item.textContent = line;
      list.append(item);
    });
    card.append(list);
  }
  return card;
}

function modeParagraph(text: string): HTMLElement {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function modeEmpty(text: string): HTMLElement {
  const empty = document.createElement("p");
  empty.className = "mode-empty";
  empty.textContent = text;
  return empty;
}

function modeButton(label: string, onClick: () => void | Promise<void>): HTMLButtonElement {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "mode-action-button";
  button.textContent = label;
  button.addEventListener("click", () => {
    void onClick();
  });
  return button;
}

function modeSmallLabel(text: string): HTMLElement {
  const label = document.createElement("span");
  label.className = "mode-small-label";
  label.textContent = text;
  return label;
}

function modeCode(text: string): HTMLElement {
  const code = document.createElement("code");
  code.textContent = text;
  return code;
}

function renderInspectionQueue(insights: TraceInsights): HTMLElement {
  if (!insights.inspectionQueue.length) {
    return modeEmpty("No high-priority findings detected. Parser health and raw inspection remain available.");
  }
  const list = document.createElement("div");
  list.className = "mode-linked-list";
  insights.inspectionQueue.slice(0, 12).forEach((item, index) => {
    const row = document.createElement("article");
    row.className = `mode-linked-row severity-${item.severity}`;
    const body = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = `${index + 1}. ${item.title}`;
    const detail = document.createElement("small");
    detail.textContent = `${item.summary} - ${item.confidence} - ${item.directness}`;
    const why = document.createElement("p");
    why.textContent = item.explanation;
    body.append(title, detail, why);
    const actions = document.createElement("div");
    actions.className = "mode-row-actions";
    const firstLine = item.lineNumbers[0];
    actions.append(
      modeButton("Open Raw", () => focusEventByLine(firstLine, item.title, item)),
      modeButton("Copy Ref", () => copyText(`line ${firstLine ?? "n/a"} - ${item.redactionSafeSummary}`, "Line reference copied"))
    );
    row.append(body, actions);
    list.append(row);
  });
  return list;
}

function renderDivergenceList(diff: TraceDiff): HTMLElement {
  const list = document.createElement("div");
  list.className = "mode-linked-list";
  const clusters = divergenceClusters(diff);
  clusters.forEach((cluster) => {
    const row = document.createElement("article");
    row.className = "mode-linked-row";
    const body = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = cluster.kind.replaceAll("_", " ");
    const detail = document.createElement("small");
    detail.textContent = `${cluster.confidence} - A line ${cluster.leftLine ?? "n/a"} - B line ${cluster.rightLine ?? "n/a"}`;
    const summary = document.createElement("p");
    summary.textContent = cluster.summary;
    body.append(title, detail, summary);
    const actions = document.createElement("div");
    actions.className = "mode-row-actions";
    actions.append(
      modeButton("Open A", () => focusEventByLine(cluster.leftLine, cluster.kind, cluster)),
      modeButton("Copy Ref", () =>
        copyText(`${cluster.kind}: A line ${cluster.leftLine ?? "n/a"}, B line ${cluster.rightLine ?? "n/a"}`, "Divergence reference copied")
      )
    );
    row.append(body, actions);
    list.append(row);
  });
  return list;
}

function renderUnknownSamples(health: ParserHealth): HTMLElement {
  const list = document.createElement("div");
  list.className = "mode-linked-list";
  const unknowns = [
    ...(health.unknownEvents || []).map((event) => ({
      title: `Unknown ${event.sourceEventType}`,
      detail: event.preview,
      lineNumber: event.lineNumber,
      payload: event,
    })),
    ...(health.malformedLines || []).map((line) => ({
      title: "Malformed JSONL",
      detail: line.error,
      lineNumber: line.lineNumber,
      payload: line,
    })),
  ].slice(0, 12);
  if (!unknowns.length) {
    return modeEmpty("No unknown or malformed samples captured.");
  }
  unknowns.forEach((sample) => {
    const row = document.createElement("article");
    row.className = "mode-linked-row";
    const body = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = sample.title;
    const detail = document.createElement("small");
    detail.textContent = `line ${sample.lineNumber} - ${compactUiText(sample.detail, 180)}`;
    body.append(title, detail);
    const actions = document.createElement("div");
    actions.className = "mode-row-actions";
    actions.append(modeButton("Open Raw", () => focusEventByLine(sample.lineNumber, sample.title, sample.payload)));
    row.append(body, actions);
    list.append(row);
  });
  return list;
}

function diffSessionOptions(current: SessionGraph): SessionListItem[] {
  const options = sessionOptions.filter((session) => session.source === current.source);
  const currentOption = options.find((session) => session.path === current.sessionPath);
  if (currentOption) {
    return [currentOption, ...options.filter((session) => session.path !== current.sessionPath)];
  }
  return [
    {
      source: current.source,
      path: current.sessionPath,
      label: "Current session",
      detail: current.sessionId || "loaded",
      lastModifiedAt: current.lastModifiedAt,
      byteLength: current.byteLength,
      isLive: current.isLive,
      explicit: true,
    },
    ...options,
  ];
}

function selectedSessionValue(select: HTMLSelectElement): string | null {
  return select.selectedOptions.item(0)?.value || select.value || null;
}

async function runDiffCompare(): Promise<void> {
  if (!diffRightSessionPath) {
    diffError = "Select a Run B session first.";
    diffResult = null;
    renderDiffModePanel();
    return;
  }
  const leftSessionPath = currentGraph().sessionPath;
  const rightSessionPath = diffRightSessionPath;
  if (rightSessionPath === leftSessionPath) {
    diffError = "Run A and Run B must be different sessions.";
    diffResult = null;
    renderDiffModePanel();
    return;
  }
  const requestId = ++nextDiffRequestId;
  const isCurrentRequest = () =>
    requestId === nextDiffRequestId &&
    currentGraph().sessionPath === leftSessionPath &&
    diffRightSessionPath === rightSessionPath;
  diffResult = null;
  diffLoading = true;
  diffError = null;
  renderDiffModePanel();
  try {
    const result = await fetchTraceDiff(rightSessionPath);
    if (!isCurrentRequest()) {
      return;
    }
    diffResult = result;
  } catch (error) {
    if (!isCurrentRequest()) {
      return;
    }
    diffResult = null;
    diffError = errorMessage(error);
  } finally {
    if (isCurrentRequest()) {
      diffLoading = false;
      renderDiffModePanel();
    }
  }
}

async function ensureUnknownsReportLoaded(force = false): Promise<UnknownsReport | null> {
  if (!force && unknownsReport) {
    return unknownsReport;
  }
  if (!force && unknownsError) {
    return null;
  }
  if (unknownsReportPromise) {
    return unknownsReportPromise;
  }
  unknownsReport = null;
  unknownsError = null;
  unknownsLoading = true;
  unknownsReportPromise = fetchUnknownsReport()
    .then((report) => {
      unknownsReport = report;
      return report;
    })
    .catch((error) => {
      unknownsError = errorMessage(error);
      return null;
    })
    .finally(() => {
      unknownsLoading = false;
      unknownsReportPromise = null;
      if (activeAppMode === "health") {
        renderHealthModePanel();
      }
    });
  return unknownsReportPromise;
}

function showEvidenceFallback(title: string, payload: unknown, detail: string): void {
  const message = `${detail} Insights remains available and Raw is updated with the selected evidence payload.`;
  setRawJsonPayload(payload);
  modePanelSummary.textContent = "Evidence fallback";
  const card = modeCard("Evidence Fallback", [message]);
  card.classList.add("mode-notice");
  const actions = document.createElement("div");
  actions.className = "mode-row-actions";
  actions.append(
    modeButton("Open Insights", () => {
      selectAppMode("insights");
      setRawJsonPayload(payload);
    }),
    modeButton("Audit Raw", () => {
      selectAppMode("raw");
      showEvidenceFallback(title, payload, detail);
    })
  );
  card.append(actions);
  if (activeAppMode === "raw") {
    const pre = document.createElement("pre");
    pre.textContent = JSON.stringify(payload ?? {}, null, 2);
    modePanelContent.replaceChildren(card, pre);
    return;
  }
  modePanelContent.prepend(card);
}

function focusEventByLine(lineNumber: number | null | undefined, title: string, payload: unknown, destination: AppMode = "raw"): void {
  if (lineNumber) {
    const row = modeTimelineRows().find((candidate) => candidate.lineNumber === lineNumber);
    if (row) {
      inspectModeRow(row);
      if (row.node) {
        openSelectedEventMode(destination);
      } else if (destination !== "map") {
        selectAppMode(destination);
        setRawJsonPayload(row.source);
      }
      return;
    }
  }
  if (destination !== "map") {
    selectAppMode(destination);
  }
  const detail = lineNumber
    ? `Line ${lineNumber} is logged for ${title}, but no rendered Timeline or Transcript row is available.`
    : "No event line is logged for this insight or evidence reference; showing fallback payload instead.";
  showEvidenceFallback(title, payload, detail);
}

function parserHealthSummaryText(current: SessionGraph): string {
  const health = current.parserHealth;
  return [
    `Perlustron parser health for ${shortPath(current.sessionPath)}`,
    `Parser: ${health.parserVersion} / ${health.schemaVersion}`,
    `Source: ${health.source} (${health.sourceDetectionConfidence})`,
    `Lines: ${health.totalLinesRead}`,
    `Parsed/renderable: ${health.parsedEventCount}/${health.renderableEventCount}`,
    `Unknown events: ${health.unknownEventCount}`,
    `Malformed lines: ${health.malformedLineCount}`,
    `Skipped large payloads: ${health.skippedLargePayloadCount}`,
  ].join("\n");
}

function insightSummaryText(insights: TraceInsights): string {
  const lines = ["Perlustron insights", "What should I inspect first?"];
  if (!insights.inspectionQueue.length) {
    lines.push("- No high-priority findings detected.");
  } else {
    insights.inspectionQueue.slice(0, 6).forEach((item, index) => {
      lines.push(`${index + 1}. [${item.severity}] ${item.title}: ${item.redactionSafeSummary || item.summary}`);
    });
  }
  lines.push(`Repeated patterns: ${insights.repeatedPatterns.length}`);
  lines.push(`Suspicious tool calls: ${insights.suspiciousToolCalls.length}`);
  lines.push(`Approval/sandbox friction: ${insights.approvalFriction.length}`);
  return lines.join("\n");
}

function diffSummaryText(diff: TraceDiff): string {
  return [
    "Perlustron redacted diff summary",
    `A: ${shortPath(diff.metadata.leftPath)} (${diff.metadata.leftSource})`,
    `B: ${shortPath(diff.metadata.rightPath)} (${diff.metadata.rightSource})`,
    `Events: ${diff.leftSummary.renderableEventCount} -> ${diff.rightSummary.renderableEventCount}`,
    `Tools: ${diff.toolDelta.calls.left} -> ${diff.toolDelta.calls.right}`,
    `Errors: ${diff.errorDelta.errors.left} -> ${diff.errorDelta.errors.right}`,
    `Files: ${diff.fileDelta.leftCount} -> ${diff.fileDelta.rightCount}`,
    `First likely divergence: ${diff.divergence.summary} (${diff.divergence.confidence})`,
  ].join("\n");
}

function limitedList(values: string[], limit: number): string {
  if (!values.length) {
    return "none";
  }
  const shown = values.slice(0, limit).join(", ");
  return values.length > limit ? `${shown} ... +${values.length - limit}` : shown;
}

async function exportUnknownsJson(): Promise<void> {
  const report = unknownsReport ?? (await ensureUnknownsReportLoaded(true));
  if (report) {
    downloadText("perlustron-unknowns-redacted.json", JSON.stringify(report, null, 2), "application/json");
  }
}

async function copySchemaDriftIssueBody(): Promise<void> {
  const report = unknownsReport ?? (await ensureUnknownsReportLoaded(true));
  if (report) {
    copyText(report.suggestedGithubIssue, "Schema-drift issue body copied");
  }
}

async function exportFixtureReportMarkdown(): Promise<void> {
  const report = unknownsReport ?? (await ensureUnknownsReportLoaded(true));
  if (report) {
    downloadText("perlustron-fixture-report.md", fixtureReportMarkdown(report), "text/markdown");
  }
}

function divergenceClusters(diff: TraceDiff): DivergenceCluster[] {
  if (diff.divergence.clusters.length) {
    return diff.divergence.clusters;
  }
  return [
    {
      kind: diff.divergence.kind,
      confidence: diff.divergence.confidence,
      summary: diff.divergence.summary,
      explanation: diff.divergence.explanation,
      leftLine: diff.divergence.leftLine,
      rightLine: diff.divergence.rightLine,
      leftEventId: diff.divergence.leftEventId,
      rightEventId: diff.divergence.rightEventId,
      leftSignature: diff.divergence.leftSignature,
      rightSignature: diff.divergence.rightSignature,
    },
  ];
}

function fixtureReportMarkdown(report: UnknownsReport): string {
  const samples = report.redactedSamples
    .slice(0, 12)
    .map((sample) => `### Line ${sample.lineNumber} ${sample.sourceEventType}\n\nShape hash: \`${sample.shapeHash}\`\n\n\`\`\`json\n${sample.redactedPreview}\n\`\`\``)
    .join("\n\n");
  return [
    "# Perlustron Fixture Report",
    "",
    "This report avoids raw private log content.",
    "",
    "## Parser Health",
    "",
    `- Perlustron version: \`${report.parserVersion}\``,
    `- Trace schema: \`${report.traceSchemaVersion}\``,
    `- Source guess: \`${report.sourceGuess}\``,
    `- Unknown events: \`${report.unknownEventCount}\``,
    `- Malformed lines: \`${report.malformedLineCount}\``,
    `- Suggested fixture: \`${report.suggestedFixtureName}\``,
    "",
    "## Redacted Samples",
    "",
    samples || "No unknown or malformed samples captured.",
    "",
    "## Safe Contribution Checklist",
    "",
    "- Do not attach raw private Codex or Claude logs.",
    "- Prefer synthetic data.",
    "- Review prompts, paths, command output, images, and tool results before sharing.",
  ].join("\n");
}

function diffHtmlReport(diff: TraceDiff): string {
  const rows = divergenceClusters(diff)
    .map(
      (cluster) =>
        `<tr><td>${escapeHtml(cluster.kind)}</td><td>${escapeHtml(cluster.confidence)}</td><td>${cluster.leftLine ?? "n/a"}</td><td>${cluster.rightLine ?? "n/a"}</td><td>${escapeHtml(cluster.summary)}</td></tr>`
    )
    .join("");
  return `<!doctype html><meta charset="utf-8"><title>Perlustron Diff Report</title><style>body{font-family:system-ui,sans-serif;margin:32px;color:#182125;line-height:1.45}table{border-collapse:collapse;width:100%;margin:16px 0}td,th{border:1px solid #d7dee2;padding:6px 8px;text-align:left}code{background:#f4f6f7;padding:2px 4px}.redacted{color:#7a1f1f;font-weight:700}</style><h1>Perlustron Session Diff</h1><p class="redacted">Redacted diff. Review before sharing.</p><h2>Overview</h2><table><tr><td>A</td><td>${escapeHtml(diff.metadata.leftPath)}</td></tr><tr><td>B</td><td>${escapeHtml(diff.metadata.rightPath)}</td></tr><tr><td>Events</td><td>${diff.leftSummary.renderableEventCount} -> ${diff.rightSummary.renderableEventCount}</td></tr><tr><td>Tools</td><td>${formatCountDelta(diff.toolDelta.calls)}</td></tr><tr><td>Errors</td><td>${formatCountDelta(diff.errorDelta.errors)}</td></tr></table><h2>Parser Health</h2><table><tr><td>Unknown</td><td>${formatCountDelta(diff.parserHealthDelta.unknownEvents)}</td></tr><tr><td>Malformed</td><td>${formatCountDelta(diff.parserHealthDelta.malformedLines)}</td></tr></table><h2>Files</h2><table><tr><td>Only A</td><td>${escapeHtml(limitedList(diff.fileDelta.onlyLeft, 20))}</td></tr><tr><td>Only B</td><td>${escapeHtml(limitedList(diff.fileDelta.onlyRight, 20))}</td></tr></table><h2>Divergence</h2><table><thead><tr><th>Kind</th><th>Confidence</th><th>A line</th><th>B line</th><th>Summary</th></tr></thead><tbody>${rows}</tbody></table><h2>Redaction</h2><p>Profile: ${escapeHtml(diff.metadata.redactionProfile || "strict")}. Raw prompts, command output, sensitive paths, and tool outputs are not intentionally included.</p>`;
}

function downloadText(filename: string, text: string, type: string): void {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function copyText(text: string, title = "Copied"): void {
  void navigator.clipboard
    .writeText(text)
    .then(() => openSyntheticStream("COPY", title, text))
    .catch((error) => openSyntheticStream("COPY", "Copy failed", errorMessage(error)));
}

function errorishText(text: string): boolean {
  return /\b(error|failed|failure|exception|panic|denied|permission|timeout|traceback|not found|exit code|fatal|forbidden|sandbox)\b/i.test(text);
}

function isDefaultAppMode(appMode: AppMode): appMode is DefaultAppMode {
  return DEFAULT_APP_MODE_SET.has(appMode);
}

function selectAppMode(nextMode: AppMode): void {
  activeAppMode = nextMode;
  syncSessionUrl();
  setActiveButton(modeButtons, (button) => button.dataset.appMode === activeAppMode);
  utilityModeSelect.value = isDefaultAppMode(activeAppMode) ? "" : activeAppMode;
  syncModePanelVisibility();
  if (nextMode !== "map") {
    hideEventPopup();
  }
  if (nextMode === "map") {
    setInspectorPanel("sessions");
    exitInspectMode({ preserveCamera: true });
    frameOverview();
    return;
  }
  renderActiveModePanel();
  if (nextMode === "summary") {
    setInspectorPanel("sessions");
    return;
  }
  if (nextMode === "timeline") {
    setInspectorPanel("sessions");
    setInspectorCollapsed(false);
    return;
  }
  if (nextMode === "transcript") {
    return;
  }
  if (nextMode === "health") {
    setInspectorPanel("health");
    setInspectorCollapsed(false);
    openSyntheticStream("HEALTH", "Parser health", healthModeText());
    return;
  }
  if (nextMode === "insights") {
    openSyntheticStream("INSIGHTS", "Debugging insights", insightsModeText());
    return;
  }
  if (nextMode === "raw") {
    setInspectorPanel("raw");
    setInspectorCollapsed(false);
    openSyntheticStream("RAW", "Raw and normalized event inspection", rawModeText());
    return;
  }
  if (nextMode === "diff") {
    exitInspectMode({ preserveCamera: true });
    return;
  }
  if (nextMode === "settings") {
    return;
  }
  openSyntheticStream("EXPORT", "Export reports", exportModeText());
}

function renderSearchAwareModePanel(): void {
  if (activeAppMode !== "transcript") {
    renderActiveModePanel();
  }
}

function timelineModeText(): string {
  if (!graph) {
    return "Waiting for session data.";
  }
  return [
    "Use the session browser and search box for chronological inspection.",
    `Renderable events: ${graph.parserHealth.renderableEventCount}`,
    `Unknown events: ${graph.parserHealth.unknownEventCount}`,
    `Malformed lines: ${graph.parserHealth.malformedLineCount}`,
    `Tool calls: ${graph.parserHealth.toolCallCount}`,
    `File activity: ${graph.parserHealth.fileActivityCount}`,
    "Filters available here: live/all/pinned, metric buttons, search, and next/previous event navigation.",
  ].join("\n");
}

function transcriptModeText(): string {
  if (!graph) {
    return "Waiting for session data.";
  }
  const lines: string[] = [];
  graph.prompts.slice(0, 12).forEach((prompt, index) => {
    lines.push(`User ${index + 1}: ${prompt.title}`);
    const entries = transcriptEntriesForPrompt(prompt).filter((entry) => entry.label !== "Prompt");
    entries.slice(0, 10).forEach((entry) => {
      lines.push(`  ${entry.label}: ${entry.title} - ${compactUiText(entry.body, 220)}`);
    });
    const hiddenEntries = entries.length - 10;
    if (hiddenEntries > 0) {
      lines.push(`  ...[${hiddenEntries} additional transcript entries summarized]`);
    }
  });
  if (graph.prompts.length > 12) {
    lines.push(`...[${graph.prompts.length - 12} additional prompts summarized]`);
  }
  return lines.join("\n") || "No transcript events were parsed.";
}

function healthModeText(): string {
  if (!graph) {
    return "Waiting for session data.";
  }
  const health = graph.parserHealth;
  return [
    `Parser: ${health.parserVersion} / ${health.schemaVersion}`,
    `Lines read: ${health.totalLinesRead}`,
    `Parsed events: ${health.parsedEventCount}`,
    `Renderable events: ${health.renderableEventCount}`,
    `Unknown events: ${health.unknownEventCount}`,
    `Malformed lines: ${health.malformedLineCount}`,
    `Skipped large payloads: ${health.skippedLargePayloadCount}`,
    `Token telemetry: ${health.tokenTelemetryAvailable ? "available" : "not logged"}`,
    ...(health.unknownEventTypes || []).map((eventType) => `Unknown: ${eventType.sourceEventType} x${eventType.count}`),
  ].join("\n");
}

function insightsModeText(): string {
  const insights = graph?.insights;
  if (!graph || !insights) {
    return "Waiting for session insights.";
  }
  const lines = [
    "Insights are heuristics over logged events only. Hidden or unlogged reasoning cannot be recovered.",
  ];
  if (insights.failureChain) {
    lines.push(
      `First logged error-like event: line ${insights.failureChain.firstLoggedError.lineNumber} - ${insights.failureChain.firstLoggedError.title}`
    );
    lines.push(`Final logged outcome: ${insights.failureChain.finalOutcome}`);
  } else {
    lines.push("First logged error-like event: none detected");
  }
  lines.push(`Repeated patterns: ${insights.repeatedPatterns.length}`);
  insights.repeatedPatterns.slice(0, 6).forEach((pattern) => {
    lines.push(`  ${pattern.patternType} x${pattern.count} lines ${pattern.firstLine}-${pattern.lastLine}: ${pattern.key}`);
  });
  lines.push(`Suspicious tool calls: ${insights.suspiciousToolCalls.length}`);
  insights.suspiciousToolCalls.slice(0, 6).forEach((call) => {
    lines.push(`  line ${call.call.lineNumber} ${call.toolName}: ${call.reason}`);
  });
  lines.push(`Context pressure: ${insights.contextPressure.status}`);
  lines.push(
    `File impact: ${insights.fileImpact.filesEdited.length} edited, ${insights.fileImpact.filesRead.length} read, ${insights.fileImpact.filesReferenced.length} referenced`
  );
  lines.push(`Approval/sandbox friction: ${insights.approvalFriction.length}`);
  return lines.join("\n");
}

function rawModeText(): string {
  return "Select any event to inspect its parsed payload. Use the Raw JSON inspector to copy the selected raw or normalized event.";
}

function diffModeText(): string {
  return [
    "Compare two sessions from the CLI:",
    "perlustron diff run-a.jsonl run-b.jsonl",
    "perlustron diff run-a.jsonl run-b.jsonl --format html --redacted -o diff.html",
    "",
    "The diff model compares normalized traces, parser health, tools, errors, files, token telemetry, repeated patterns, and first likely divergence.",
  ].join("\n");
}

function exportModeText(): string {
  if (!graph) {
    return "Waiting for session data.";
  }
  return [
    "Export redacted reports from the CLI:",
    `perlustron export ${graph.sessionPath} --format html --redacted -o report.html`,
    `perlustron export ${graph.sessionPath} --format markdown --redacted -o report.md`,
    `perlustron export ${graph.sessionPath} --format json -o normalized-trace.json`,
    "",
    "Redacted exports are best-effort sharing aids. Review before sending.",
  ].join("\n");
}

function shortcutsText(): string {
  return [
    "/ search",
    "n next event",
    "N previous event",
    "m map",
    "l timeline",
    "t transcript",
    "h health",
    "i insights",
    "d diff",
    "r raw",
    "e export",
    "Esc close inspection",
  ].join("\n");
}

function compactUiText(text: string, maxChars: number): string {
  return compactText(text, maxChars, "\n...[truncated]");
}

function contextPressureSummary(telemetry: TokenTelemetry | undefined): string {
  if (!telemetry?.latestTotalTokens) {
    return "no token telemetry";
  }
  const percent = telemetry.latestContextPercent === null ? "n/a" : `${Math.round(telemetry.latestContextPercent)}%`;
  const window = telemetry.contextWindow ? ` / ${formatNumber(telemetry.contextWindow)}` : "";
  return `${formatNumber(telemetry.latestTotalTokens)}${window} tokens (${percent})`;
}

function openSessionOverview(): void {
  if (mode === "inspect") {
    exitInspectMode({ preserveCamera: true });
  }
  selectedNodeId = null;
  syncInstanceColors();
  openSyntheticStream("SESSION", graph?.ui.sessionName || "Session overview", sessionOverviewText());
}

function focusMetricReview(metric: Metric): void {
  activeMetric = metric;
  setActiveButton(metricButtons, (button) => button.dataset.metric === activeMetric);
  syncInstanceColors();
  focusFirstMetricMatch(metric);
}

function focusLatestPrompt(): void {
  const latestPrompt = graph?.prompts.at(-1);
  if (!latestPrompt) {
    return;
  }
  enterInspectMode(latestPrompt.id, nodeById.get(latestPrompt.id));
}

function enterInspectMode(promptId: string, streamNode: SceneNode | undefined | null = nodeById.get(promptId)): void {
  activePromptId = promptId;
  mode = "inspect";
  setLayoutTargets();
  renderPromptList();
  openStream(streamNode);
}

function exitInspectMode({ preserveCamera = false }: { preserveCamera?: boolean } = {}): void {
  if (mode !== "inspect") {
    return;
  }
  mode = "overview";
  setLayoutTargets({ preserveCamera });
  renderPromptList();
}

function setupControls() {
  syncSourceButtons();
  setActiveButton(modeButtons, (button) => button.dataset.appMode === activeAppMode);
  utilityModeSelect.value = isDefaultAppMode(activeAppMode) ? "" : activeAppMode;
  syncModePanelVisibility();
  syncSessionUrl();

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectAppMode(oneOf(APP_MODES, button.dataset.appMode, "map"));
    });
  });

  utilityModeSelect.addEventListener("change", () => {
    if (!utilityModeSelect.value) {
      utilityModeSelect.value = isDefaultAppMode(activeAppMode) ? "" : activeAppMode;
      return;
    }
    selectAppMode(oneOf(APP_MODES, utilityModeSelect.value, "health"));
  });

  sourceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switchSource(button.dataset.source);
    });
  });

  sessionSelect.addEventListener("change", () => {
    void switchSession(sessionSelect.value);
  });

  liveToggle.addEventListener("click", () => {
    isTailing = !isTailing;
    updateLiveChrome();
    if (isTailing) {
      startLiveUpdates();
    } else {
      stopLiveUpdates();
    }
  });

  inspectorTabs.forEach((button) => {
    button.addEventListener("click", () => {
      const panel = oneOf(INSPECTOR_PANELS, button.dataset.inspectorTab, "sessions");
      if (panel === activeInspectorPanel && !inspectorCollapsed) {
        setInspectorCollapsed(true);
        return;
      }
      setInspectorCollapsed(false);
      setInspectorPanel(panel);
    });
  });

  sidebarToggle.addEventListener("click", () => setInspectorCollapsed(!inspectorCollapsed));

  rawJsonToggle.addEventListener("change", () => setRawExpanded(rawJsonToggle.checked));
  setRawExpanded(true);
  setInspectorPanel("sessions", { force: true });

  searchInput.addEventListener("input", () => {
    searchTerm = searchInput.value.trim().toLowerCase();
    renderPromptList();
    syncInstanceColors();
    renderSearchAwareModePanel();
  });
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      searchInput.value = "";
      searchTerm = "";
      renderPromptList();
      syncInstanceColors();
      renderSearchAwareModePanel();
    }
  });

  [
    modeFilterRole,
    modeFilterType,
    modeFilterTool,
    modeFilterFile,
    modeFilterErrors,
    modeFilterUnknown,
    modeFilterMalformed,
    modeFilterRedacted,
    modeFilterUtc,
  ].forEach((control) => {
    control.addEventListener("change", renderActiveModePanel);
  });

  document.addEventListener("keydown", handleCameraFlyKeydown);
  document.addEventListener("keyup", handleCameraFlyKeyup);
  document.addEventListener("keydown", handleGlobalKeydown);
  document.addEventListener("visibilitychange", clearCameraFlyKeysWhenHidden);
  window.addEventListener("blur", clearCameraFlyKeys);

  sessionFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeSessionFilter = oneOf(SESSION_FILTERS, button.dataset.sessionFilter, "live");
      setActiveButton(sessionFilterButtons, (item) => item === button);
      renderPromptList();
    });
  });

  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      if (action === "sessions") {
        openSessionOverview();
        return;
      }
      openSyntheticStream("SYSTEM", `${action} controls`, sessionOverviewText());
    });
  });

  savedViewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const savedView = oneOf(SAVED_VIEWS, button.dataset.savedView, "latest");
      setActiveButton(savedViewButtons, (item) => item === button);
      if (savedView === "errors") {
        focusMetricReview(findMetricWithResults(["error", "long"]) || "error");
      } else if (savedView === "files") {
        focusMetricReview("file");
      } else {
        focusLatestPrompt();
      }
    });
  });

  viewActionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = oneOf(VIEW_ACTIONS, button.dataset.viewAction, "two-d");
      if (action === "zoom-in") {
        zoomCamera(CAMERA_ZOOM_UNIT);
      } else if (action === "zoom-out") {
        zoomCamera(-CAMERA_ZOOM_UNIT);
      } else if (action === "overview") {
        exitInspectMode();
        overviewCameraMode = "three-d";
        frameOverview();
      } else {
        mode = "overview";
        overviewCameraMode = "two-d";
        setLayoutTargets({ preserveCamera: true });
        frameOverview();
        renderPromptList();
      }
    });
  });

  prevEvent.addEventListener("click", () => navigateSelected(-1));
  nextEvent.addEventListener("click", () => navigateSelected(1));

  metricButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectMetric(oneOf(METRICS, button.dataset.metric, "error"));
    });
  });

  settingsButton.addEventListener("click", () => {
    selectAppMode("settings");
  });

  openEditorButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(rawJsonPreview.textContent);
    } catch (error) {
      logTransientError(error);
    }
  });
}

function handleGlobalKeydown(event: KeyboardEvent): void {
  if (event.key === "/" && !isTextEntryTarget(event.target)) {
    event.preventDefault();
    searchInput.focus();
    searchInput.select();
    return;
  }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
    searchInput.select();
    return;
  }
  if (!isTextEntryTarget(event.target)) {
    const shortcutMode = modeForShortcut(event.key);
    if (shortcutMode) {
      event.preventDefault();
      selectAppMode(shortcutMode);
      return;
    }
    if (event.key === "n") {
      event.preventDefault();
      navigateSelected(1);
      return;
    }
    if (event.key === "N") {
      event.preventDefault();
      navigateSelected(-1);
      return;
    }
    if (event.key === "?") {
      event.preventDefault();
      openSyntheticStream("SHORTCUTS", "Keyboard shortcuts", shortcutsText());
      return;
    }
  }
  if (event.key !== "Escape" || mode !== "inspect" || isTextEntryTarget(event.target)) {
    return;
  }
  event.preventDefault();
  exitInspectMode();
  frameOverview();
}

function modeForShortcut(key: string): AppMode | null {
  switch (key) {
    case "m":
      return "map";
    case "l":
      return "timeline";
    case "t":
      return "transcript";
    case "h":
      return "health";
    case "i":
      return "insights";
    case "d":
      return "diff";
    case "r":
      return "raw";
    case "e":
      return "export";
    default:
      return null;
  }
}

function handleCameraFlyKeydown(event: KeyboardEvent): void {
  if (!shouldHandleCameraFlyKey(event)) {
    return;
  }
  activeCameraFlyKeys.add(event.code);
  event.preventDefault();
}

function handleCameraFlyKeyup(event: KeyboardEvent): void {
  if (!isCameraFlyCode(event.code)) {
    return;
  }
  activeCameraFlyKeys.delete(event.code);
  event.preventDefault();
}

function shouldHandleCameraFlyKey(event: KeyboardEvent): boolean {
  return (
    isCameraFlyCode(event.code) &&
    !event.ctrlKey &&
    !event.metaKey &&
    !event.altKey &&
    !isTextEntryTarget(event.target)
  );
}

function isCameraFlyCode(code: string): boolean {
  return CAMERA_FLY_KEY_CODES.has(code) || CAMERA_FLY_FAST_KEY_CODES.has(code);
}

function isCameraFlyFastActive(): boolean {
  return activeCameraFlyKeys.has("ShiftLeft") || activeCameraFlyKeys.has("ShiftRight");
}

function clearCameraFlyKeys(): void {
  activeCameraFlyKeys.clear();
}

function clearCameraFlyKeysWhenHidden(): void {
  if (document.hidden) {
    clearCameraFlyKeys();
  }
}

function isTextEntryTarget(target: EventTarget | null): boolean {
  return (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    (target instanceof HTMLElement && target.isContentEditable)
  );
}

function startLiveUpdates(): void {
  stopLiveUpdates();
  if (!isTailing) {
    return;
  }
  startStatusPollingGuard();
  if (typeof EventSource === "undefined") {
    return;
  }

  liveEvents = new EventSource(sessionApiUrl("/api/session/events").toString());
  liveEvents.addEventListener("open", () => {
    liveEventsConnected = true;
    updateLiveChrome();
  });
  liveEvents.addEventListener("session-status", (event) => {
    liveEventsConnected = true;
    updateLiveChrome();
    try {
      handleSessionStatus(JSON.parse((event as MessageEvent<string>).data) as SessionStatus);
    } catch (error) {
      logTransientError(error);
    }
  });
  liveEvents.addEventListener("session-error", (event) => {
    logTransientError((event as MessageEvent<string>).data || "Session stream error");
  });
  liveEvents.addEventListener("error", () => {
    liveEventsConnected = false;
    updateLiveChrome();
    scheduleLiveRetryPoll();
  });
}

function stopLiveUpdates(): void {
  stopLiveEventSource();
  stopStatusPollingGuard();
  clearLiveRetryPoll();
}

function stopLiveEventSource(): void {
  if (liveEvents) {
    liveEvents.close();
    liveEvents = null;
  }
  liveEventsConnected = false;
}

function startStatusPollingGuard(): void {
  stopStatusPollingGuard();
  if (!isTailing) {
    return;
  }
  void pollSession();
  statusPollTimer = setInterval(pollSession, STATUS_FALLBACK_POLL_INTERVAL_MS);
}

function stopStatusPollingGuard(): void {
  if (statusPollTimer) {
    clearInterval(statusPollTimer);
    statusPollTimer = null;
  }
}

function scheduleLiveRetryPoll(): void {
  if (liveRetryPollTimer) {
    return;
  }

  liveRetryPollTimer = setTimeout(() => {
    liveRetryPollTimer = null;
    if (!liveEventsConnected && isTailing) {
      void pollSession();
    }
  }, LIVE_UPDATE_RETRY_MS);
}

function clearLiveRetryPoll(): void {
  if (liveRetryPollTimer) {
    clearTimeout(liveRetryPollTimer);
    liveRetryPollTimer = null;
  }
}

function updateLiveChrome(): void {
  const live = Boolean(graph?.isLive);
  topbar.classList.toggle("paused", !isTailing || !live);
  liveState.textContent = isTailing ? (live ? "LIVE" : "STALE") : "PAUSED";
  liveCopy.textContent = isTailing
    ? live
      ? liveEventsConnected
        ? "Streaming session..."
        : "Watching session..."
      : "Waiting for writes..."
    : "Updates paused";
  sidebarLiveStatus.textContent = isTailing ? (live ? "Live" : "Stale") : "Paused";
}

function animateLiveGraphUpdates(): void {
  if (liveGraphAnimationTimer) {
    return;
  }

  liveGraphAnimationTimer = setTimeout(() => {
    liveGraphAnimationTimer = null;

    const now = performance.now();
    const freshNodes = nodes.filter((node) => nodeIsFreshAt(node, now));
    if (freshNodes.length) {
      freshNodes.forEach((node) => {
        node.matrixDirty = true;
      });
      syncInstanceColors();
    }
  }, 120);
}

function logTransientError(error: unknown): void {
  console.warn(errorMessage(error));
}

function syncInspectorChrome(): void {
  workspace.classList.toggle("inspector-collapsed", inspectorCollapsed);
  inspectorDock.classList.toggle("inspector-collapsed", inspectorCollapsed);
  inspectorDock.setAttribute("aria-expanded", `${!inspectorCollapsed}`);
  sidebarToggle.setAttribute("aria-expanded", `${!inspectorCollapsed}`);
  sidebarToggle.setAttribute("aria-label", inspectorCollapsed ? "Expand sidebar" : "Collapse sidebar");
  sidebarToggle.title = inspectorCollapsed ? "Expand sidebar" : "Collapse sidebar";
  sidebarToggle.textContent = inspectorCollapsed ? ">" : "<";
  inspectorTabs.forEach((button) => {
    const active = button.dataset.inspectorTab === activeInspectorPanel;
    button.classList.toggle("active", active);
    button.setAttribute("aria-expanded", `${active && !inspectorCollapsed}`);
  });
  inspectorPanels.forEach((section) => {
    section.classList.toggle("active", section.dataset.inspectorPanel === activeInspectorPanel);
  });
}

function setInspectorPanel(
  panel: InspectorPanel,
  { force = false }: { force?: boolean } = {}
): void {
  const changed = panel !== activeInspectorPanel;
  if (!changed && !force) {
    return;
  }

  activeInspectorPanel = panel;
  syncInspectorChrome();
  scheduleViewportRefresh();
}

function setInspectorCollapsed(collapsed: boolean): void {
  if (collapsed === inspectorCollapsed) {
    return;
  }

  inspectorCollapsed = collapsed;
  syncInspectorChrome();
  scheduleViewportRefresh({ overview: true });
}

function scheduleViewportRefresh({ overview = false }: { overview?: boolean } = {}): void {
  viewportRefreshNeedsOverview = viewportRefreshNeedsOverview || overview;
  if (viewportRefreshQueued) {
    return;
  }

  viewportRefreshQueued = true;
  window.requestAnimationFrame(() => {
    viewportRefreshQueued = false;
    resize();
    if (viewportRefreshNeedsOverview) {
      frameOverview();
    }
    viewportRefreshNeedsOverview = false;
  });
}

function setRawExpanded(expanded: boolean): void {
  rawExpanded = expanded;
  rawJsonToggle.checked = expanded;
  rawJsonPanel.classList.toggle("collapsed", !expanded);
}

function zoomCamera(units: number): void {
  if (Math.abs(units) < 0.001) {
    return;
  }
  camera.getWorldDirection(cameraFlyForward);
  camera.position.addScaledVector(cameraFlyForward, units);
  controls.target.addScaledVector(cameraFlyForward, units);
  controls.update();
}

function navigateSelected(direction: number): void {
  const ordered = orderedSelectableNodes();
  if (!ordered.length) {
    return;
  }
  const currentIndex = Math.max(0, ordered.findIndex((node) => node.id === selectedNodeId));
  const nextIndex = (currentIndex + direction + ordered.length) % ordered.length;
  const next = ordered[nextIndex];
  selectedNodeId = next.id;
  activePromptId = next.promptId;
  openStream(next);
}

function orderedSelectableNodes(): SceneNode[] {
  const selectableNodes = mode === "inspect" && activePromptId ? buildInspectLayout(activePromptId).visibleNodes : nodes;
  return selectableNodes
    .filter((node) => node.type !== "prompt" || node.promptId === activePromptId || mode === "overview")
    .sort(inspectNodeSort);
}

function selectMetric(metric: Metric): void {
  activeMetric = activeMetric === metric ? null : metric;
  setActiveButton(metricButtons, (button) => button.dataset.metric === activeMetric);
  syncInstanceColors();
  if (activeMetric) {
    focusFirstMetricMatch(activeMetric);
  }
}

function focusFirstMetricMatch(metric: Metric): boolean {
  const match = nodes.find((node) => node.type !== "prompt" && nodeMatchesMetric(node, metric));
  if (!match) {
    return false;
  }
  enterInspectMode(match.promptId, match);
  return true;
}

function findMetricWithResults(metrics: Metric[]): Metric | undefined {
  return metrics.find((metric) => nodes.some((node) => node.type !== "prompt" && nodeMatchesMetric(node, metric)));
}

function nodeMatchesMetric(node: SceneNode, metric: Metric | null): boolean {
  if (!metric) {
    return true;
  }
  if (metric === "compaction") {
    return node.type === "compaction";
  }
  if (node.type === "compaction") {
    return false;
  }
  if (node.type === "prompt") {
    return (nodesByPromptId.get(node.id) || []).some((child) => child.id !== node.id && nodeMatchesMetric(child, metric));
  }
  if (node.type === "fileChange") {
    return fileChangeMatchesMetric(node.source, metric);
  }
  if (node.type === "message") {
    return messageMatchesMetric(node.source, metric);
  }
  return callMatchesMetric(node.source, metric);
}

function messageMatchesMetric(message: MessageNode, metric: Metric | null): boolean {
  if (!metric) {
    return true;
  }
  if (metric === "long") {
    return message.text.length > 1200;
  }
  return message.text.toLowerCase().includes(metric);
}

function fileChangeMatchesMetric(change: FileChangeNode, metric: Metric | null): boolean {
  if (!metric) {
    return true;
  }
  const text = fileChangeSearchText(change).toLowerCase();
  if (metric === "file") {
    return true;
  }
  if (metric === "diff") {
    return normalizedFileChangeType(change) !== "add" || text.includes("diff") || text.includes("@@");
  }
  if (metric === "long") {
    return (change.preview || "").length > 1200 || (change.detail || "").length > 1600;
  }
  return text.includes(metric);
}

function fileChangeSearchText(change: FileChangeNode): string {
  return `${normalizedFileChangeType(change)} ${change.path} ${change.preview} ${change.detail}`;
}

function callMatchesMetric(call: CallNode, metric: Metric | null): boolean {
  if (!metric) {
    return true;
  }
  const text = callSearchText(call);
  if (metric === "long") {
    return (call.argumentPreview || "").length > 1400 || (call.outputPreview || "").length > 1200;
  }
  if (metric === "file") {
    return /(file|read|write|rg|patch)/.test(text);
  }
  if (metric === "diff") {
    return /(diff|patch)/.test(text);
  }
  if (metric === "artifact") {
    return text.includes("artifact");
  }
  return text.includes(metric);
}

function callSearchText(call: CallNode): string {
  return `${call.kind} ${call.name} ${call.argumentPreview || ""} ${call.outputPreview || ""}`.toLowerCase();
}

function nodeMatchesSearch(node: SceneNode): boolean {
  if (!searchTerm) {
    return true;
  }
  return `${node.kind} ${node.title} ${node.body}`.toLowerCase().includes(searchTerm);
}

function syncSelectedSource({ restartStream = false }: { restartStream?: boolean } = {}): void {
  const selected = selectedNodeId ? nodeById.get(selectedNodeId) : null;
  if (selected && isEventPopupVisible()) {
    openStream(selected, { restartStream });
  }
}

function openSyntheticStream(kind: string, title: string, body: string): void {
  selectedNodeId = null;
  showEventPopup();
  syncInstanceColors();
  streamKind.textContent = kind;
  turnNumber.textContent = "Control surface";
  turnTimestamp.textContent = new Date().toLocaleTimeString();
  contextEventTitle.textContent = title;
  streamTitle.textContent = title;
  setRawJsonPayload({ kind, title, body, generatedAt: new Date().toISOString() });
  syncEventContextActions();
  renderStreamImages();
  typeStream(body);
}

function shortPath(path: string | null | undefined): string {
  if (!path) {
    return "";
  }
  const parts = path.split(/[\\/]/);
  if (parts.length <= 4) {
    return path;
  }
  return `${parts.at(-4)}/${parts.at(-3)}/${parts.at(-2)}/${parts.at(-1)}`;
}
