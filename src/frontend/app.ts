// SPDX-License-Identifier: MIT OR Apache-2.0

import * as THREE from "three";
import { layout as layoutText, prepare as prepareText, type PreparedText } from "@chenglou/pretext";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import {
  durationLabel,
  escapeHtml,
  formatBytes,
  formatCountDelta,
  formatDuration,
  formatNumber,
  formatOptionalPercent,
  formatSessionModified,
  recordsLabel,
  shortPath,
} from "./utils/format";
import { kindColor } from "./palette";
import { readableRedactionSegments, readableRedactionSummary, type RedactionDisplaySegment } from "./redaction_display";
import { copySafeReferenceText, copySafeShareSummaryText, redactionSafeClipboardText, safeReferenceSummary } from "./share_safe";
import {
  eventContextHeaderTitle,
  eventContextKindLabel,
  eventContextPositionLabel,
  eventContextStreamTitle,
  formatEventContextTimestamp,
  formatEventContextTitle,
  isNestedSubagentEventName,
  subagentEventLabel,
} from "./evidence/event_context";
import { focusEvidenceByLine, showEvidenceFallbackPanel } from "./evidence/evidence_drawer";
import { renderMetadataList } from "./chrome/metadata";
import { renderSummaryModePanel as renderSummaryModePanelView } from "./modes/summary";

const FILE_CHANGE_TYPES = ["add", "update", "delete", "move"] as const;

type SessionSource = "codex" | "claude";
type Mode = "overview" | "inspect";
type AppMode = "summary" | "map" | "timeline" | "transcript" | "health" | "insights" | "diff" | "raw" | "export" | "settings";
type AppModeMaturity = "beta" | "experimental" | "advanced";
interface AppModeMaturityInfo {
  label: string;
  maturity: AppModeMaturity;
  title: string;
}
type Metric = "error" | "long" | "file" | "diff" | "artifact" | "compaction" | "skill";
type NodeRole = "prompt" | "local" | "patch" | "browser" | "web" | "coordination" | "message";
type CallNodeRole = Exclude<NodeRole, "prompt" | "message">;
type MapRoleMetric = "prompts" | "local" | "patch" | "browser" | "web" | "coordination" | "messages";
type MapFilter = { kind: "metric"; metric: Metric } | { kind: "role"; role: NodeRole };
type ViewAction = "zoom-in" | "zoom-out" | "two-d" | "overview";
type SceneBucket = "prompt" | "call" | "fileChange" | "message" | "compaction";
type OverviewCameraMode = "three-d" | "two-d";
type MapMetricCounts = Record<Metric | MapRoleMetric, number>;
type Connector =
  | [string, string]
  | {
      fromId: string;
      toId: string;
      waypoints: THREE.Vector3[];
    };
type TimerId = ReturnType<typeof setTimeout>;

const DEFAULT_APP_MODES = ["summary", "map", "timeline", "transcript"] as const satisfies readonly AppMode[];
const APP_MODES = [...DEFAULT_APP_MODES, "health", "insights", "diff", "raw", "export", "settings"] as const satisfies readonly AppMode[];
const METRICS = ["error", "long", "file", "diff", "artifact", "compaction", "skill"] as const satisfies readonly Metric[];
const NODE_ROLES = ["prompt", "local", "patch", "browser", "web", "coordination", "message"] as const satisfies readonly NodeRole[];
const CALL_NODE_ROLES = ["local", "patch", "browser", "web", "coordination"] as const satisfies readonly CallNodeRole[];
const NODE_ROLE_METRICS = {
  prompt: "prompts",
  local: "local",
  patch: "patch",
  browser: "browser",
  web: "web",
  coordination: "coordination",
  message: "messages",
} as const satisfies Record<NodeRole, MapRoleMetric>;
const MAP_ROLE_LABELS = {
  prompt: "Prompts",
  local: "Local calls",
  patch: "Patch calls",
  browser: "Browser calls",
  web: "Web calls",
  coordination: "Coordination calls",
  message: "Assistant messages",
} as const satisfies Record<NodeRole, string>;
const MAP_METRIC_LABELS = {
  error: "Errors",
  long: "Long calls",
  file: "Files",
  diff: "Diffs",
  artifact: "Artifacts",
  compaction: "Compactions",
  skill: "Skills",
} as const satisfies Record<Metric, string>;
const LONG_CALL_DURATION_MS = 30_000;
const RAW_TEXT_LINE_HEIGHT = 18;
const RAW_TEXT_FULL_RENDER_LINE_LIMIT = 3_000;
const RAW_TEXT_OVERSCAN_LINES = 80;
const VIRTUAL_LIST_OVERSCAN_PX = 900;
const VIRTUAL_LIST_WIDTH_FALLBACK = 840;
const INSIGHTS_PRIORITY_SIGNAL_LIMIT = 10;
const INSIGHTS_FILE_CHURN_LIMIT = 12;
const INSIGHTS_CARD_ITEM_LIMIT = 12;
const INSIGHTS_TEXT_PREVIEW_LIMIT = 180;
const INSIGHT_TITLE_REPEATED_FILE_ACTIVITY = "Repeated file activity";
const INSIGHT_TITLE_SUSPICIOUS_TOOL_CALL = "Suspicious tool call";
const INSIGHT_TITLE_REPEATED_TOOL_CALL_PATTERN = "Repeated tool-call pattern";
const INSIGHT_SEVERITY_ORDER = ["critical", "high", "warning", "info", "low"] as const;
const APP_MODE_MATURITY: Record<AppMode, AppModeMaturityInfo> = {
  summary: {
    label: "Beta",
    maturity: "beta",
    title: "Beta view: available for early use while the interface continues to mature.",
  },
  map: {
    label: "Beta",
    maturity: "beta",
    title: "Beta view: available for early use while the interface continues to mature.",
  },
  timeline: {
    label: "Beta",
    maturity: "beta",
    title: "Beta view: available for early use while the interface continues to mature.",
  },
  transcript: {
    label: "Beta",
    maturity: "beta",
    title: "Beta view: available for early use while the interface continues to mature.",
  },
  health: {
    label: "Advanced",
    maturity: "advanced",
    title: "Advanced view: intended for audit, debugging, or export workflows.",
  },
  insights: {
    label: "Experimental",
    maturity: "experimental",
    title: "Experimental view: useful for beta feedback, but verify important conclusions.",
  },
  diff: {
    label: "Experimental",
    maturity: "experimental",
    title: "Experimental view: useful for beta feedback, but verify important conclusions.",
  },
  raw: {
    label: "Advanced",
    maturity: "advanced",
    title: "Advanced view: intended for audit, debugging, or export workflows.",
  },
  export: {
    label: "Advanced",
    maturity: "advanced",
    title: "Advanced view: intended for audit, debugging, or export workflows.",
  },
  settings: {
    label: "Advanced",
    maturity: "advanced",
    title: "Advanced view: intended for audit, debugging, or export workflows.",
  },
};
const TIMELINE_ROW_MIN_HEIGHT = 88;
const TIMELINE_ROW_MAX_HEIGHT = 180;
const TRANSCRIPT_TURN_ROW_HEIGHT = 56;
const TRANSCRIPT_ENTRY_MIN_HEIGHT = 72;
const TRANSCRIPT_TEXT_FONT = '13px "Segoe UI", Arial, sans-serif';
const TRANSCRIPT_TITLE_FONT = '700 13px "Segoe UI", Arial, sans-serif';
const TRANSCRIPT_TEXT_LINE_HEIGHT = 19;
const TRANSCRIPT_TITLE_LINE_HEIGHT = 18;
const TRANSCRIPT_ROW_LABEL_WIDTH = 84;
const TRANSCRIPT_ROW_COLUMN_GAP = 12;
const TRANSCRIPT_ROW_VERTICAL_PADDING = 16;
const TRANSCRIPT_TEXT_HEIGHT_PAD = 4;
const UI_TEXT_LINE_HEIGHT = 19;
const UI_MONO_LINE_HEIGHT = 16;
const VIEW_ACTIONS = ["zoom-in", "zoom-out", "two-d", "overview"] as const satisfies readonly ViewAction[];
const APP_MODE_SET = new Set<AppMode>(APP_MODES);
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

type ParserHealthLine = [label: string, value: string];

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

interface InsightPriorityGroup {
  title: string;
  severity: string;
  confidence: string;
  directness: string;
  summary: string;
  explanation: string;
  lineNumbers: number[];
  redactionSafeSummary: string;
  representative: InspectionQueueItem;
  count: number;
}

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
  fileAxisX?: number;
  fileAxisZ?: number;
  home?: THREE.Vector3;
  baseScale: number;
  scale: number;
  skillNames?: string[];
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
  kind: "assistant" | "skill";
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

function setEventContextTimestamp(timestamp: string): void {
  turnTimestamp.textContent = formatEventContextTimestamp(timestamp);
  turnTimestamp.title = timestamp;
}

function setEventContextTitle(title: string, label = "Selection"): void {
  streamTitleLabel.textContent = label;
  streamKind.textContent = formatEventContextTitle(title);
  streamKind.title = title;
}

function skillNamesForNode(node: SceneNode): string[] {
  if (node.skillNames) {
    return node.skillNames;
  }
  if (node.type === "call") {
    return skillNamesForCall(node.source);
  }
  if (node.type === "message") {
    return skillNamesFromText(node.source.text);
  }
  return [];
}

function nodeIsSkillUse(node: SceneNode): boolean {
  return node.kind === "skill" || skillNamesForNode(node).length > 0;
}

function skillNamesForCall(call: CallNode): string[] {
  return skillNamesFromText(`${call.name}\n${call.argumentPreview}`);
}

function skillUseTitle(names: readonly string[]): string {
  if (!names.length) {
    return "skill use";
  }
  const visible = names.slice(0, 3).join(", ");
  const overflow = names.length > 3 ? ` +${names.length - 3}` : "";
  return `${names.length === 1 ? "skill" : "skills"}: ${visible}${overflow}`;
}

function skillNamesFromText(text: string): string[] {
  const names = new Set<string>();
  const source = boundedSkillScanText(text).replaceAll("\\\\", "\\");
  collectSkillPathNames(source, names);
  collectSkillPatternNames(source, names, /\b(?:using|use|uses|used|loading|load|loads|loaded|invoking|invoke|invokes|invoked|running|run|runs|ran|applying|apply|applies|applied)\s+(?:the\s+)?(?:[$`])?([a-z][a-z0-9:_-]{1,80})(?:[`])?\s+skill\b/gi);
  collectSkillPatternNames(source, names, /\bskills?\s*[:=]\s*(?:[$`])?([a-z][a-z0-9:_-]{1,80})(?:[`])?/gi);
  collectAnnouncedSkillNames(source, names);
  return [...names].sort((left, right) => left.localeCompare(right));
}

function boundedSkillScanText(text: string): string {
  if (text.length <= 8_000) {
    return text;
  }
  return `${text.slice(0, 4_000)}\n${text.slice(-4_000)}`;
}

function collectSkillPathNames(text: string, names: Set<string>): void {
  const pattern = /(?:^|[\\/])([^\\/\s"'<>()[\]{}]+)[\\/]SKILL\.md\b/gi;
  for (const match of text.matchAll(pattern)) {
    addSkillName(names, match[1], { requireExplicitMarker: false });
  }
}

function collectSkillPatternNames(text: string, names: Set<string>, pattern: RegExp): void {
  for (const match of text.matchAll(pattern)) {
    addSkillName(names, match[1], { requireExplicitMarker: false });
  }
}

function collectAnnouncedSkillNames(text: string, names: Set<string>): void {
  const pattern =
    /\b(?:using|loading|invoking|running|applying)\s+(?:the\s+)?([$`]?)([a-z][a-z0-9:_-]{1,80})([`]?)(?=\s+(?:for|because|to|workflow|and|,|$))/gi;
  for (const match of text.matchAll(pattern)) {
    const marked = Boolean(match[1] || match[3]);
    addSkillName(names, match[2], { requireExplicitMarker: !marked });
  }
}

function addSkillName(names: Set<string>, rawName: string, { requireExplicitMarker }: { requireExplicitMarker: boolean }): void {
  const name = rawName
    .trim()
    .replace(/^[$`]+/, "")
    .replace(/[`.,:;)\]]+$/, "")
    .toLowerCase();
  if (!/^[a-z][a-z0-9:_-]{1,80}$/.test(name)) {
    return;
  }
  if (name === "skill" || name === "skills" || name === "relevant" || name === "right" || name === "same" || name === "this") {
    return;
  }
  if (requireExplicitMarker && !/[-:]/.test(name)) {
    return;
  }
  names.add(name);
}

function imagesForNode(node: SceneNode): ContentImageRef[] {
  return node.type === "prompt" ? node.source.images : [];
}

const canvas = queryRequired<HTMLCanvasElement>("#space");
const metadataList = queryRequired<HTMLElement>("#metadata-list");
const streamTitleLabel = queryRequired<HTMLElement>("#stream-title-label");
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
const turnNumber = queryRequired<HTMLElement>("#turn-number");
const turnTimestamp = queryRequired<HTMLElement>("#turn-timestamp");
const metricPrompts = queryRequired<HTMLElement>("#metric-prompts");
const metricLocal = queryRequired<HTMLElement>("#metric-local");
const metricPatch = queryRequired<HTMLElement>("#metric-patch");
const metricBrowser = queryRequired<HTMLElement>("#metric-browser");
const metricWeb = queryRequired<HTMLElement>("#metric-web");
const metricCoordination = queryRequired<HTMLElement>("#metric-coordination");
const metricMessages = queryRequired<HTMLElement>("#metric-messages");
const metricErrors = queryRequired<HTMLElement>("#metric-errors");
const metricLong = queryRequired<HTMLElement>("#metric-long");
const metricFiles = queryRequired<HTMLElement>("#metric-files");
const metricDiffs = queryRequired<HTMLElement>("#metric-diffs");
const metricArtifacts = queryRequired<HTMLElement>("#metric-artifacts");
const metricCompactions = queryRequired<HTMLElement>("#metric-compactions");
const metricSkills = queryRequired<HTMLElement>("#metric-skills");
const mapLiveHud = queryRequired<HTMLElement>(".map-live-hud");
const mapFilterStatus = queryRequired<HTMLElement>("#map-filter-status");
const nodeRoleMetricElements: Record<NodeRole, HTMLElement> = {
  prompt: metricPrompts,
  local: metricLocal,
  patch: metricPatch,
  browser: metricBrowser,
  web: metricWeb,
  coordination: metricCoordination,
  message: metricMessages,
};
const contextEventTitle = queryRequired<HTMLElement>("#context-event-title");
const eventPopup = queryRequired<HTMLElement>("#event-popup");
const topbar = queryRequired<HTMLElement>("#topbar");
const liveToggle = queryRequired<HTMLButtonElement>("#live-toggle");
const liveState = queryRequired<HTMLElement>("#live-state");
const liveCopy = queryRequired<HTMLElement>("#live-copy");
const searchInput = queryRequired<HTMLInputElement>("#search-input");
const searchStatus = queryRequired<HTMLElement>("#search-status");
const copyFeedback = queryRequired<HTMLElement>("#copy-feedback");
const modePanel = queryRequired<HTMLElement>("#mode-panel");
const modePanelKicker = queryRequired<HTMLElement>("#mode-panel-kicker");
const modePanelTitle = queryRequired<HTMLElement>("#mode-panel-title");
const modePanelStatus = queryRequired<HTMLElement>("#mode-panel-status");
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
const viewActionButtons = queryAll<HTMLButtonElement>("[data-view-action]");
const metricButtons = queryAll<HTMLButtonElement>("[data-metric]");
const nodeRoleButtons = queryAll<HTMLButtonElement>("[data-node-role]");
const modeButtons = queryAll<HTMLButtonElement>("[data-app-mode]");
const sourceButtons = queryAll<HTMLButtonElement>("[data-source]");
const sessionSelect = queryRequired<HTMLSelectElement>("#session-select");
const sessionSelectStatus = queryRequired<HTMLElement>("#session-select-status");
const settingsButton = queryRequired<HTMLButtonElement>("#settings-button");
const sceneFrame = queryRequired<HTMLElement>("#scene-frame");
const STATUS_FALLBACK_POLL_INTERVAL_MS = 3500;
const LIVE_UPDATE_RETRY_MS = 1000;
const GRAPH_REFRESH_COALESCE_MS = 180;
const LIVE_CAMERA_FOLLOW_DURATION_MS = 1200;
const LIVE_CAMERA_FOLLOW_SAFE_NDC = 0.72;
const LIVE_CAMERA_FOLLOW_EPSILON_SQ = 0.0001;
const MAP_CAMERA_FAR = 12_000;
const MAP_GRID_DIVISIONS = 1_200;
const MAP_GRID_SIZE = 12_000;
const GRID_FOLLOW_STEP = 20;
const MAP_FLOOR_Y = -1.4;
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
const OVERVIEW_SUBAGENT_BRANCH_BASE_X = 9.2;
const OVERVIEW_SUBAGENT_BRANCH_MAX_X = 22;
const OVERVIEW_SUBAGENT_BRANCH_LANE_X_GAP = 6.4;
const OVERVIEW_SUBAGENT_BRANCH_LANE_Z_GAP = 2.35;
const OVERVIEW_SUBAGENT_BRANCH_SIDE_Y_GAP = 0.78;
const OVERVIEW_SUBAGENT_BRANCH_LANE_Y_DROP = 0.36;
const OVERVIEW_SUBAGENT_LEAD_IN_LAUNCH_INSET_X = 1.85;
const OVERVIEW_SUBAGENT_LEAD_IN_RESULT_OFFSET_X = 2.15;
const OVERVIEW_SUBAGENT_LEAD_IN_RESULT_DROP_Z = 4.15;
const OVERVIEW_SUBAGENT_CHILD_START_DROP_Z = 2.1;
const OVERVIEW_SUBAGENT_GROUP_SPINE_Z_STEP = 0.2;
const OVERVIEW_SUBAGENT_GROUP_SPIRAL_RADIUS = 0.86;
const OVERVIEW_SUBAGENT_GROUP_SPIRAL_RADIUS_GROWTH = 0.03;
const OVERVIEW_SUBAGENT_GROUP_SPIRAL_MAX_RADIUS_GROWTH = 0.24;
const OVERVIEW_SUBAGENT_GROUP_SPIRAL_ANGLE_STEP = OVERVIEW_SPIRAL_ANGLE_STEP;
const OVERVIEW_SUBAGENT_GROUP_SPIRAL_OUTWARD_BIAS = 0.72;
const OVERVIEW_SUBAGENT_GROUP_Y_STEP = 1.85;
const OVERVIEW_SUBAGENT_GROUP_Y_WAVE = 0.1;
const OVERVIEW_SUBAGENT_GROUPED_CALLS_PER_ROW = 5;
const OVERVIEW_SUBAGENT_GROUPED_CALL_X_GAP = 0.78;
const OVERVIEW_SUBAGENT_GROUPED_CALL_ROW_X_GAP = 0.44;
const OVERVIEW_SUBAGENT_GROUPED_CALL_Z_GAP = 0.38;
const OVERVIEW_SUBAGENT_GROUPED_CALL_Y_GAP = 0.1;
const OVERVIEW_SUBAGENT_GROUPED_CALL_ROW_Y_GAP = 0.3;
const OVERVIEW_ITEM_PADDING_Z = 2.4;
const CAMERA_ZOOM_MIN_UNIT = 6.5;
const CAMERA_ZOOM_DISTANCE_FACTOR = 0.16;
const CAMERA_ZOOM_MAX_UNIT = 34;
const CAMERA_ZOOM_WHEEL_DELTA_UNIT = 100;
const CAMERA_ZOOM_MAX_WHEEL_STEPS = 4;
const CAMERA_FLY_MIN_SPEED = 16;
const CAMERA_FLY_MAX_SPEED = 70;
const CAMERA_FLY_DISTANCE_FACTOR = 0.72;
const CAMERA_FLY_FAST_MULTIPLIER = 2.6;
const CAMERA_FLY_MOVE_KEY_CODES = new Set(["KeyW", "KeyA", "KeyS", "KeyD"]);
const CAMERA_FLY_UP_KEY_CODE = "Space";
const CAMERA_FLY_DOWN_KEY_CODES = new Set(["ControlLeft", "ControlRight"]);
const CAMERA_FLY_FAST_KEY_CODES = new Set(["ShiftLeft", "ShiftRight"]);
const CAMERA_FLY_LOOK_SENSITIVITY = 0.0032;
const CAMERA_FLY_LOOK_MIN_TARGET_DISTANCE = 1.4;
const CAMERA_FLY_LOOK_MAX_TARGET_DISTANCE = 28;
const CAMERA_FLY_LOOK_PITCH_LIMIT = Math.PI / 2 - 0.08;
const CAMERA_GRAB_PAN_CLICK_SLOP_PX = 4;
const SCREEN_PICK_RADIUS_PX = 24;

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

const camera = new THREE.PerspectiveCamera(50, 1, 0.1, MAP_CAMERA_FAR);
camera.position.set(0, DEFAULT_2D_CAMERA_HEIGHT, 0.01);

const controls = new OrbitControls(camera, renderer?.domElement ?? canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.07;
controls.enablePan = false;
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
const centerPointer = new THREE.Vector2(0, 0);
const scratchObject = new THREE.Object3D();
const scratchColor = new THREE.Color();
const scratchVector = new THREE.Vector3();
const grabPanAnchorPoint = new THREE.Vector3();
const grabPanCurrentPoint = new THREE.Vector3();
const grabPanFloorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -MAP_FLOOR_Y);
const grabPanMove = new THREE.Vector3();
const grabPanRaycaster = new THREE.Raycaster();
const grabPanRight = new THREE.Vector3();
const grabPanUp = new THREE.Vector3();
const cameraFlyForward = new THREE.Vector3();
const cameraFlyRight = new THREE.Vector3();
const cameraFlyMove = new THREE.Vector3();
const cameraFlyLookEuler = new THREE.Euler(0, 0, 0, "YXZ");
const liveCameraFollowStartPosition = new THREE.Vector3();
const liveCameraFollowStartTarget = new THREE.Vector3();
const liveCameraFollowEndPosition = new THREE.Vector3();
const liveCameraFollowEndTarget = new THREE.Vector3();
const whiteColor = new THREE.Color(0xffffff);

let graph: SessionGraph | null = null;
let nodes: SceneNode[] = [];
let connectors: Connector[] = [];
let nodeById = new Map<string, SceneNode>();
let nodesByPromptId = new Map<string, SceneNode[]>();
let rolesByPromptId = new Map<string, Set<NodeRole>>();
let activeConnectors: Connector[] = [];
let meshBuckets: Partial<Record<SceneBucket, NodeInstancedMesh>> = {};
let lineMesh: THREE.LineSegments<THREE.BufferGeometry, THREE.LineBasicMaterial> | null = null;
let pointMesh: NodePoints | null = null;
const compactionPulseMeshes = new Map<string, PulseMesh[]>();
const steeringPulseMeshes = new Map<string, PulseMesh[]>();
let activePromptId: string | null = null;
let selectedNodeId: string | null = null;
let statusPollTimer: TimerId | null = null;
let liveRetryPollTimer: TimerId | null = null;
let liveEvents: EventSource | null = null;
let pollInFlight = false;
let graphRefreshTimer: TimerId | null = null;
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
let activeMapFilter: MapFilter | null = null;
let searchTerm = "";
let rawPayload: unknown = null;
let focusedEvidenceLine: number | null = null;
let copyFeedbackTimer: TimerId | null = null;
const virtualScrollTopByMode: Partial<Record<AppMode, number>> = {};
const transcriptTextMeasureCache = new Map<string, TranscriptTextMeasureCacheEntry>();
let isTailing = true;
let liveEventsConnected = false;
let sessionSwitchInProgress = false;
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
let eventContextRenderedSelection: { nodeId: string; signature: string } | null = null;
let userPinnedCamera = false;
let liveCameraFollowActive = false;
let liveCameraFollowStartedAt = 0;
const activeCameraFlyKeys = new Set<string>();
let cameraFlyLookActive = false;
let cameraFlyLookPointerId: number | null = null;
let cameraFlyLookLastX = 0;
let cameraFlyLookLastY = 0;
let orbitPanPointerId: number | null = null;
let orbitPanMoved = false;
let orbitPanLastX = 0;
let orbitPanLastY = 0;
let orbitPanStartX = 0;
let orbitPanStartY = 0;
let orbitPanHasFloorAnchor = false;
let suppressNextCanvasClick = false;
let lastFrameTime = performance.now() / 1000;
let elapsedTime = 0;

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

const grid = new THREE.GridHelper(MAP_GRID_SIZE, MAP_GRID_DIVISIONS, 0x16393f, 0x16393f);
grid.position.y = MAP_FLOOR_Y;
grid.material.transparent = true;
grid.material.opacity = 0.34;
scene.add(grid);

streamClose.addEventListener("click", () => {
  selectedNodeId = null;
  clearRawModePayload();
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
canvas.addEventListener("pointerdown", handleOrbitPanPointerDown, { capture: true });
canvas.addEventListener("pointermove", handleOrbitPanPointerMove, { capture: true });
canvas.addEventListener("pointerup", endOrbitPanPointer, { capture: true });
canvas.addEventListener("pointercancel", endOrbitPanPointer, { capture: true });
canvas.addEventListener("pointerdown", handleCameraFlyLookPointerDown);
canvas.addEventListener("pointermove", updatePointer);
canvas.addEventListener("pointermove", handleCameraFlyLookPointerMove);
canvas.addEventListener("pointerup", endCameraFlyLookPointer);
canvas.addEventListener("pointercancel", endCameraFlyLookPointer);
canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("dblclick", onCanvasDoubleClick);
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
      preserveEventContext: hadGraph && hasRenderedInitialGraph,
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
  setSessionLoadingChrome();
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
  rawPayload = null;
  focusedEvidenceLine = null;
  Object.keys(virtualScrollTopByMode).forEach((key) => {
    delete virtualScrollTopByMode[key as AppMode];
  });
  transcriptTextMeasureCache.clear();
  mode = "overview";
  previousLatestEventIndex = null;
  lastStatusGraphChanged = false;
  liveCues = emptyLiveCues();
  compactionInProgress = false;
  compactionProgressStartedAt = 0;
  newEventFloor = Number.POSITIVE_INFINITY;
  cancelLiveCameraFollow();
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
  rolesByPromptId.clear();
  clearWorkflowMeshes();
  resetEventContext();
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

function setSessionLoadingChrome(): void {
  stageTurnCount.textContent = "Loading";
  stageStarted.textContent = "Reading JSONL";
  liveState.textContent = "LOAD";
  liveCopy.textContent = "Switching session...";
  setSessionPickerLoading();
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
    rebuildScene({ preserveView: true, preserveEventContext: true });
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
  mode = "overview";
  setLayoutTargets({ preserveCamera: true });
  if (previousFocus) {
    const nextFocus = focusPointForNode(latest);
    if (!isFocusPointComfortablyVisible(nextFocus)) {
      startLiveCameraFollowPan(previousFocus, nextFocus);
    }
  } else {
    frameOverview({ preserveDistance: true });
  }
  if (selectedNodeId && isEventPopupVisible()) {
    syncSelectedSource();
  }
  syncInstanceColors();
}

function shouldAutoFollowLiveGraph(): boolean {
  return isTailing && !userPinnedCamera && !searchTerm && !activeMapFilter;
}

function markManualCameraNavigation(): void {
  userPinnedCamera = true;
  cancelLiveCameraFollow();
}

function resumeCameraAutoFollow(): void {
  userPinnedCamera = false;
}

function isFocusPointComfortablyVisible(focus: THREE.Vector3): boolean {
  const rect = canvas.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) {
    return false;
  }

  camera.updateMatrixWorld();
  scratchVector.copy(focus).project(camera);
  return (
    scratchVector.z >= -1 &&
    scratchVector.z <= 1 &&
    Math.abs(scratchVector.x) <= LIVE_CAMERA_FOLLOW_SAFE_NDC &&
    Math.abs(scratchVector.y) <= LIVE_CAMERA_FOLLOW_SAFE_NDC
  );
}

function startLiveCameraFollowPan(previousFocus: THREE.Vector3, nextFocus: THREE.Vector3): void {
  const deltaX = nextFocus.x - previousFocus.x;
  const deltaY = nextFocus.y - previousFocus.y;
  const deltaZ = nextFocus.z - previousFocus.z;
  if (deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ < LIVE_CAMERA_FOLLOW_EPSILON_SQ) {
    return;
  }

  liveCameraFollowStartPosition.copy(camera.position);
  liveCameraFollowStartTarget.copy(controls.target);
  if (liveCameraFollowActive) {
    liveCameraFollowEndPosition.x += deltaX;
    liveCameraFollowEndPosition.y += deltaY;
    liveCameraFollowEndPosition.z += deltaZ;
    liveCameraFollowEndTarget.x += deltaX;
    liveCameraFollowEndTarget.y += deltaY;
    liveCameraFollowEndTarget.z += deltaZ;
  } else {
    liveCameraFollowEndPosition.set(camera.position.x + deltaX, camera.position.y + deltaY, camera.position.z + deltaZ);
    liveCameraFollowEndTarget.set(controls.target.x + deltaX, controls.target.y + deltaY, controls.target.z + deltaZ);
  }
  liveCameraFollowStartedAt = performance.now();
  liveCameraFollowActive = true;
}

function updateLiveCameraFollow(now: number): void {
  if (!liveCameraFollowActive) {
    return;
  }
  if (!shouldAutoFollowLiveGraph()) {
    cancelLiveCameraFollow();
    return;
  }

  const progress = THREE.MathUtils.clamp((now - liveCameraFollowStartedAt) / LIVE_CAMERA_FOLLOW_DURATION_MS, 0, 1);
  const eased = liveCameraFollowEase(progress);
  camera.position.lerpVectors(liveCameraFollowStartPosition, liveCameraFollowEndPosition, eased);
  controls.target.lerpVectors(liveCameraFollowStartTarget, liveCameraFollowEndTarget, eased);
  if (progress >= 1) {
    camera.position.copy(liveCameraFollowEndPosition);
    controls.target.copy(liveCameraFollowEndTarget);
    liveCameraFollowActive = false;
  }
}

function liveCameraFollowEase(progress: number): number {
  return progress * progress * progress * (progress * (progress * 6 - 15) + 10);
}

function cancelLiveCameraFollow(): void {
  liveCameraFollowActive = false;
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
  stageStarted.textContent = recordMetricValue(status.lineCount, current.pendingBytes);
  renderContextPressure(tokenTelemetryWithLiveCue(current.tokenTelemetry, liveCues.latestTokenSample));
  updateLiveChrome();
  refreshEventContextTotals();
}

function setCompactionInProgress(next: boolean): boolean {
  if (compactionInProgress === next) {
    return false;
  }
  compactionInProgress = next;
  compactionProgressStartedAt = next ? performance.now() : 0;
  return true;
}

function rebuildScene({
  preserveView = false,
  preserveEventContext = false,
}: {
  preserveView?: boolean;
  preserveEventContext?: boolean;
} = {}): void {
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
    syncSelectedSource();
  } else {
    selectedNodeId = null;
    if (preserveEventContext) {
      refreshEventContextTotals();
    } else {
      resetEventContext();
    }
  }
}

function updateGraphChrome(): void {
  const current = currentGraph();
  const ui = current.ui;
  const mapMetrics = collectMapMetricCounts();
  stageTurnCount.textContent = formatNumber(ui.totalTurns);
  stageStarted.textContent = recordMetricValue(current.lineCount, current.pendingBytes);
  NODE_ROLES.forEach((role) => {
    nodeRoleMetricElements[role].textContent = formatNumber(mapMetrics[NODE_ROLE_METRICS[role]]);
  });
  metricErrors.textContent = formatNumber(mapMetrics.error);
  metricLong.textContent = formatNumber(mapMetrics.long);
  metricFiles.textContent = formatNumber(mapMetrics.file);
  metricDiffs.textContent = formatNumber(mapMetrics.diff);
  metricArtifacts.textContent = formatNumber(mapMetrics.artifact);
  metricCompactions.textContent = formatNumber(mapMetrics.compaction);
  metricSkills.textContent = formatNumber(mapMetrics.skill);
  syncMapFilterControls(mapMetrics);
  renderContextPressure(current.tokenTelemetry);
  renderMetadataList(metadataList, current.metadata);
  renderActiveModePanel();
}

function collectMapMetricCounts(): MapMetricCounts {
  const counts: MapMetricCounts = {
    prompts: 0,
    local: 0,
    patch: 0,
    browser: 0,
    web: 0,
    coordination: 0,
    messages: 0,
    error: 0,
    long: 0,
    file: 0,
    diff: 0,
    artifact: 0,
    compaction: 0,
    skill: 0,
  };

  nodes.forEach((node) => {
    if (!nodeVisibleInCurrentMode(node)) {
      return;
    }
    const role = directNodeRole(node);
    if (role) {
      counts[NODE_ROLE_METRICS[role]] += 1;
    }
    if (node.type === "prompt") {
      return;
    }
    METRICS.forEach((metric) => {
      if (nodeMatchesMetric(node, metric)) {
        counts[metric] += 1;
      }
    });
  });
  return counts;
}

function parserHealthNumber(value: number): string {
  return `${value}`;
}

function recordMetricValue(lineCount: number, pendingBytes = 0): string {
  if (pendingBytes > 0) {
    return `${formatNumber(lineCount)} + ${formatBytes(pendingBytes)} pending`;
  }
  return formatNumber(lineCount);
}

function parserHealthVersionValue(health: ParserHealth): string {
  return `${health.parserVersion} / ${health.schemaVersion}`;
}

function parserHealthIssueCount(health: ParserHealth): number {
  return health.unknownEventCount + health.malformedLineCount + health.skippedLargePayloadCount + health.warnings.length;
}

function parserHealthRenderableLine(health: ParserHealth, formatValue = parserHealthNumber): ParserHealthLine {
  return ["Renderable events", formatValue(health.renderableEventCount)];
}

function parserHealthUnknownEventsLine(health: ParserHealth, formatValue = parserHealthNumber): ParserHealthLine {
  return ["Unknown events", formatValue(health.unknownEventCount)];
}

function parserHealthMalformedLinesLine(health: ParserHealth, formatValue = parserHealthNumber): ParserHealthLine {
  return ["Malformed lines", formatValue(health.malformedLineCount)];
}

function parserHealthSkippedPayloadsLine(health: ParserHealth, formatValue = parserHealthNumber, label = "Skipped payloads"): ParserHealthLine {
  return [label, formatValue(health.skippedLargePayloadCount)];
}

function parserHealthWarningsLine(health: ParserHealth, formatValue = parserHealthNumber): ParserHealthLine {
  return ["Warnings", formatValue(health.warnings.length)];
}

function parserHealthIssueLines(health: ParserHealth, formatValue = parserHealthNumber, skippedPayloadLabel = "Skipped payloads"): ParserHealthLine[] {
  return [
    parserHealthUnknownEventsLine(health, formatValue),
    parserHealthMalformedLinesLine(health, formatValue),
    parserHealthSkippedPayloadsLine(health, formatValue, skippedPayloadLabel),
    parserHealthWarningsLine(health, formatValue),
  ];
}

function parserHealthSummaryLines(health: ParserHealth, formatValue = parserHealthNumber, skippedPayloadLabel = "Skipped payloads"): ParserHealthLine[] {
  return [
    ["Parser", parserHealthVersionValue(health)],
    parserHealthRenderableLine(health, formatValue),
    ...parserHealthIssueLines(health, formatValue, skippedPayloadLabel),
  ];
}

function parserHealthTextLines(lines: ParserHealthLine[]): string[] {
  return lines.map(([label, value]) => `${label}: ${value}`);
}

function parserHealthUnknownTypeLines(health: ParserHealth): string[] {
  return (health.unknownEventTypes || []).map((eventType) => `${eventType.sourceEventType}: ${eventType.count}`);
}

function parserHealthUnknownEventLines(health: ParserHealth): string[] {
  const [, count] = parserHealthUnknownEventsLine(health);
  return [`${count} total`, ...parserHealthUnknownTypeLines(health)];
}

function parserHealthSyntheticUnknownTypeLines(health: ParserHealth): string[] {
  return (health.unknownEventTypes || []).map((eventType) => `Unknown: ${eventType.sourceEventType} x${eventType.count}`);
}

function parserHealthMalformedSampleLines(health: ParserHealth): string[] {
  return (health.malformedLines || []).slice(0, 5).map((line) => `Line ${line.lineNumber}: ${line.error}`);
}

function parserHealthMalformedSkippedLines(health: ParserHealth): string[] {
  return [
    ...parserHealthTextLines([parserHealthMalformedLinesLine(health), parserHealthSkippedPayloadsLine(health, parserHealthNumber, "Skipped large payloads")]),
    ...parserHealthMalformedSampleLines(health),
  ];
}

function parserHealthModeTextLines(health: ParserHealth): string[] {
  return [
    ...parserHealthTextLines([
      ["Parser", parserHealthVersionValue(health)],
      ["Lines read", parserHealthNumber(health.totalLinesRead)],
      ["Parsed events", parserHealthNumber(health.parsedEventCount)],
      parserHealthRenderableLine(health),
      ...parserHealthIssueLines(health, parserHealthNumber, "Skipped large payloads"),
      ["Token telemetry", health.tokenTelemetryAvailable ? "available" : "not logged"],
    ]),
    ...parserHealthSyntheticUnknownTypeLines(health),
  ];
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
    syncSelectedSource();
  } else {
    refreshEventContextTotals();
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
  rolesByPromptId = new Map();
  nodes.forEach((node) => {
    nodeById.set(node.id, node);
    const promptNodes = nodesByPromptId.get(node.promptId);
    if (promptNodes) {
      promptNodes.push(node);
    } else {
      nodesByPromptId.set(node.promptId, [node]);
    }
    const role = directNodeRole(node);
    if (role && role !== "prompt") {
      const promptRoles = rolesByPromptId.get(node.promptId);
      if (promptRoles) {
        promptRoles.add(role);
      } else {
        rolesByPromptId.set(node.promptId, new Set([role]));
      }
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

interface FileLayoutAnchor {
  id: string;
  eventIndex: number;
  target: THREE.Vector3;
  fileAxisX?: number;
  fileAxisZ?: number;
}

interface OverviewSubagentBranchFrame {
  side: -1 | 1;
  lane: number;
  branchX: number;
  branchY: number;
  branchZ: number;
  launchX: number;
  resultX: number;
  resultZ: number;
  childStartZ: number;
}

interface SubagentFileAssignment {
  file: CallNode;
  parent: FileLayoutAnchor;
  siblingIndex: number;
  siblingCount: number;
}

interface TranscriptEntry {
  label: string;
  title: string;
  body: string;
  eventIndex: number;
  marker?: string;
}

type TranscriptPanelRow =
  | {
      type: "turn";
      prompt: PromptNode;
      promptIndex: number;
    }
  | {
      type: "entry";
      entry: TranscriptEntry;
    };

interface VirtualListOptions<T> {
  ariaLabel: string;
  items: T[];
  keyForItem: (item: T, index: number) => string;
  estimateHeight: (item: T, index: number, viewportWidth: number) => number;
  measureHeight?: (item: T, index: number, viewportWidth: number) => number;
  renderItem: (item: T, index: number) => HTMLElement;
}

interface VirtualCleanupElement extends HTMLElement {
  perlustronCleanup?: () => void;
}

interface TranscriptCachedText {
  text: string;
  font: string;
  prepared: PreparedText;
}

interface TranscriptTextMeasureCacheEntry {
  body?: TranscriptCachedText;
  title?: TranscriptCachedText;
  heights: Map<string, number>;
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
  return groupedSlotOffset(callIndex, callCount, OVERVIEW_GROUPED_CALLS_PER_ROW, OVERVIEW_GROUPED_CALL_Z_GAP, 0.32);
}

function groupedSlotOffset(itemIndex: number, itemCount: number, itemsPerRow: number, slotGap: number, rowOffset: number): number {
  const row = Math.floor(itemIndex / itemsPerRow);
  const slot = itemIndex % itemsPerRow;
  const rowCount = Math.min(itemCount - row * itemsPerRow, itemsPerRow);
  return (slot - (rowCount - 1) / 2) * slotGap + row * rowOffset;
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
  return subagentBranches.reduce(
    (maxDepth, branch, branchIndex) => Math.max(maxDepth, overviewSubagentBranchDepth(branch, branchIndex)),
    0
  );
}

function overviewSubagentBranchDepth(branch: SubagentBranch, branchIndex: number): number {
  const frame = overviewSubagentBranchFrame(branch, branchIndex, 0);
  const minZ = Math.min(
    frame.branchZ,
    branch.result ? frame.resultZ : frame.branchZ,
    branch.nodes.length ? overviewSubagentChildMinZ(branch.nodes, frame.branchX, frame.branchY, frame.childStartZ) : frame.branchZ
  );
  return Math.abs(Math.min(0, minZ));
}

function overviewSubagentBranchFrame(branch: SubagentBranch, branchIndex: number, promptZ: number): OverviewSubagentBranchFrame {
  const side: -1 | 1 = branchIndex % 2 === 0 ? 1 : -1;
  const lane = Math.floor(branchIndex / 2);
  const branchX =
    side *
    Math.min(OVERVIEW_SUBAGENT_BRANCH_MAX_X, OVERVIEW_SUBAGENT_BRANCH_BASE_X + lane * OVERVIEW_SUBAGENT_BRANCH_LANE_X_GAP);
  const branchZ = promptZ - OVERVIEW_SUBAGENT_BAND_OFFSET_Z - lane * OVERVIEW_SUBAGENT_BRANCH_LANE_Z_GAP;
  const resultZ = branchZ - OVERVIEW_SUBAGENT_LEAD_IN_RESULT_DROP_Z;
  return {
    side,
    lane,
    branchX,
    branchY:
      OVERVIEW_PROMPT_Y -
      1.2 -
      (branchIndex % 2) * OVERVIEW_SUBAGENT_BRANCH_SIDE_Y_GAP -
      lane * OVERVIEW_SUBAGENT_BRANCH_LANE_Y_DROP,
    branchZ,
    launchX: branchX - side * OVERVIEW_SUBAGENT_LEAD_IN_LAUNCH_INSET_X,
    resultX: branchX + side * OVERVIEW_SUBAGENT_LEAD_IN_RESULT_OFFSET_X,
    resultZ,
    childStartZ: (branch.result ? resultZ : branchZ) - OVERVIEW_SUBAGENT_CHILD_START_DROP_Z,
  };
}

function overviewSubagentChildMinZ(children: CallNode[], branchX: number, branchY: number, startZ: number): number {
  const groups = subagentChildGroups(children);
  let minZ = startZ;
  let trunkAnchor: FileLayoutAnchor = {
    id: "",
    eventIndex: Number.NEGATIVE_INFINITY,
    target: new THREE.Vector3(branchX, branchY, startZ),
    fileAxisX: branchX,
    fileAxisZ: startZ,
  };
  let spineUnitIndex = 0;

  groups.forEach((group) => {
    const units = subagentSpineUnits(group);
    units.forEach((unit) => {
      const currentSpineUnitIndex = spineUnitIndex;
      const spineTarget = subagentGroupTarget(branchX, branchY, startZ, currentSpineUnitIndex);
      const spineAxisZ = subagentSpineAxisZ(startZ, currentSpineUnitIndex);
      let unitParentAnchor: FileLayoutAnchor = {
        ...trunkAnchor,
        eventIndex: unit.spine?.eventIndex ?? trunkAnchor.eventIndex,
        target: spineTarget,
        fileAxisX: branchX,
        fileAxisZ: spineAxisZ,
      };
      const fileAnchors: FileLayoutAnchor[] = [unitParentAnchor];

      if (unit.spine) {
        unitParentAnchor = {
          id: unit.spine.id,
          eventIndex: unit.spine.eventIndex,
          target: spineTarget,
          fileAxisX: branchX,
          fileAxisZ: spineAxisZ,
        };
        fileAnchors[0] = unitParentAnchor;
        trunkAnchor = unitParentAnchor;
        minZ = Math.min(minZ, spineTarget.z);
      }

      const childFrame = overviewRadialFrame(spineTarget, spineAxisZ, branchX, branchX < 0 ? -1 : 1);
      unit.children.forEach((child, childIndex) => {
        const childTarget = subagentGroupedChildTarget(spineTarget, childFrame, childIndex, unit.children.length);
        const childAnchor: FileLayoutAnchor = {
          id: child.id,
          eventIndex: child.eventIndex,
          target: childTarget,
          fileAxisX: branchX,
          fileAxisZ: spineAxisZ,
        };
        fileAnchors.push(childAnchor);
        minZ = Math.min(minZ, childTarget.z);
      });

      minZ = Math.min(minZ, overviewSubagentFileMinZ(unit.files, fileAnchors, spineAxisZ));
      spineUnitIndex += 1;
    });
  });

  return minZ;
}

function overviewSubagentFileMinZ(files: CallNode[], fileAnchors: FileLayoutAnchor[], axisZ: number): number {
  if (!files.length) {
    return axisZ;
  }
  let minZ = axisZ;
  subagentFileAssignments(files, fileAnchors).forEach(({ parent, siblingIndex, siblingCount }) => {
    minZ = Math.min(minZ, overviewFileChangeTarget(parent, axisZ, siblingIndex, siblingCount).z);
  });

  return minZ;
}

function subagentFileAssignments(files: CallNode[], fileAnchors: FileLayoutAnchor[]): SubagentFileAssignment[] {
  const filesByParent = new Map<string, CallNode[]>();
  const assignments = files.map((file): Omit<SubagentFileAssignment, "siblingCount"> => {
    const parent = subagentFileAnchorForEvent(file.eventIndex, fileAnchors);
    const siblings = filesByParent.get(parent.id) ?? [];
    const siblingIndex = siblings.length;
    siblings.push(file);
    filesByParent.set(parent.id, siblings);
    return { file, parent, siblingIndex };
  });

  return assignments.map((assignment) => ({
    ...assignment,
    siblingCount: filesByParent.get(assignment.parent.id)?.length ?? 1,
  }));
}

function outwardSide(target: THREE.Vector3): -1 | 1 {
  return target.x < 0 ? -1 : 1;
}

function overviewRadialFrame(
  target: THREE.Vector3,
  axisZ: number,
  axisX = 0,
  fallbackSide: -1 | 1 = outwardSide(target)
): {
  radialX: number;
  radialZ: number;
  tangentX: number;
  tangentZ: number;
} {
  let radialX = target.x - axisX;
  let radialZ = target.z - axisZ;
  let length = Math.hypot(radialX, radialZ);
  if (length < 0.001) {
    radialX = fallbackSide;
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

function latestAnchorAtOrBefore<T extends { eventIndex: number }>(
  eventIndex: number | null | undefined,
  anchors: T[],
  fallback: T | null
): T | null {
  if (eventIndex == null) {
    return fallback;
  }
  let selected = fallback;
  let selectedEventIndex = Number.NEGATIVE_INFINITY;
  anchors.forEach((anchor) => {
    if (anchor.eventIndex <= eventIndex && anchor.eventIndex >= selectedEventIndex) {
      selected = anchor;
      selectedEventIndex = anchor.eventIndex;
    }
  });
  return selected;
}

function activityAnchorIdForEvent(
  eventIndex: number | null | undefined,
  anchors: OverviewActivityAnchor[],
  fallbackParentId: string
): string {
  if (!anchors.length || eventIndex == null) {
    return anchors.at(-1)?.id ?? fallbackParentId;
  }
  return latestAnchorAtOrBefore(eventIndex, anchors, null)?.id ?? fallbackParentId;
}

function overviewFileChangeTarget(parentNode: FileLayoutAnchor, axisZ: number, fileIndex: number, fileCount: number): THREE.Vector3 {
  const parentTarget = parentNode.target;
  const frameAxisX = parentNode.fileAxisX ?? 0;
  const frameAxisZ = parentNode.fileAxisZ ?? axisZ;
  const frame = overviewRadialFrame(parentTarget, frameAxisZ, frameAxisX, parentTarget.x < frameAxisX ? -1 : 1);
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

    let subagentChildIndexCursor = callIndexCursor + subagentBranches.length * 2;
    subagentBranches.forEach((branch, branchIndex) => {
      const branchFrame = overviewSubagentBranchFrame(branch, branchIndex, promptZ);
      const branchChildStart = subagentChildIndexCursor;
      subagentChildIndexCursor += branch.nodes.length;

      if (branch.launch) {
        const launchNode = callSceneNode(
          prompt,
          promptIndex,
          branch.launch,
          callIndexCursor,
          new THREE.Vector3(branchFrame.launchX, branchFrame.branchY, branchFrame.branchZ),
          freshUntil,
          {
            kind: "subagent",
            title: subagentBranchTitle(branch.launch),
            baseScale: 0.52,
            fileAxisX: branchFrame.branchX,
            fileAxisZ: branchFrame.branchZ,
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
          new THREE.Vector3(
            branchFrame.resultX,
            branchFrame.branchY - 0.34,
            branch.launch ? branchFrame.resultZ : branchFrame.branchZ
          ),
          freshUntil,
          {
            kind: "subagent-result",
            title: subagentBranchTitle(branch.result),
            baseScale: 0.38,
            fileAxisX: branchFrame.branchX,
            fileAxisZ: branch.launch ? branchFrame.resultZ : branchFrame.branchZ,
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
        branchX: branchFrame.branchX,
        branchY: branchFrame.branchY,
        startZ: branchFrame.childStartZ,
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
        change.callId && promptNodesById.has(change.callId)
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
      const target = overviewFileChangeTarget(parentNode, promptZ, siblingIndex, siblingFileChanges.length);
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
  let previousSpineUnitIndex: number | null = null;
  let spineUnitIndex = 0;
  let childOffset = 0;
  const baseZ = startZ;

  groups.forEach((group) => {
    const units = subagentSpineUnits(group);
    units.forEach((unit) => {
      const currentSpineUnitIndex = spineUnitIndex;
      const spineTarget = subagentGroupTarget(branchX, branchY, baseZ, currentSpineUnitIndex);
      const spineAxisZ = subagentSpineAxisZ(baseZ, currentSpineUnitIndex);
      let unitParentId = trunkParentId;
      const fileAnchors: FileLayoutAnchor[] = [
        {
          id: unitParentId,
          eventIndex: unit.spine?.eventIndex ?? Number.NEGATIVE_INFINITY,
          target: spineTarget,
          fileAxisX: branchX,
          fileAxisZ: spineAxisZ,
        },
      ];

      if (unit.spine) {
        const spineNode = callSceneNode(
          prompt,
          promptIndex,
          unit.spine,
          callIndexStart + childOffset,
          spineTarget,
          freshUntil,
          {
            kind: unit.spine.name === "subagent.prompt" ? "subagent" : unit.spine.kind,
            title: subagentChildTitle(unit.spine),
            baseScale: subagentChildScale(unit.spine),
            fileAxisX: branchX,
            fileAxisZ: spineAxisZ,
          }
        );
        allNodes.push(spineNode);
        allConnectors.push(
          subagentSpineConnector(
            trunkParentId,
            spineNode.id,
            branchX,
            branchY,
            baseZ,
            previousSpineUnitIndex,
            currentSpineUnitIndex
          )
        );
        trunkParentId = spineNode.id;
        previousSpineUnitIndex = currentSpineUnitIndex;
        unitParentId = spineNode.id;
        fileAnchors[0] = spineNode;
        childOffset += 1;
      }

      const childFrame = overviewRadialFrame(spineTarget, spineAxisZ, branchX, branchX < 0 ? -1 : 1);
      unit.children.forEach((child, childIndex) => {
        const childTarget = subagentGroupedChildTarget(spineTarget, childFrame, childIndex, unit.children.length);
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
            fileAxisX: branchX,
            fileAxisZ: spineAxisZ,
          }
        );
        allNodes.push(childNode);
        allConnectors.push([unitParentId, childNode.id]);
        fileAnchors.push(childNode);
        childOffset += 1;
      });

      addSubagentFileNodes({
        files: unit.files,
        fileAnchors,
        axisZ: spineAxisZ,
        prompt,
        promptIndex,
        callIndexStart,
        childOffset,
        freshUntil,
        allNodes,
        allConnectors,
      });
      childOffset += unit.files.length;
      spineUnitIndex += 1;
    });
  });
}

function addSubagentFileNodes({
  files,
  fileAnchors,
  axisZ,
  prompt,
  promptIndex,
  callIndexStart,
  childOffset,
  freshUntil,
  allNodes,
  allConnectors,
}: {
  files: CallNode[];
  fileAnchors: FileLayoutAnchor[];
  axisZ: number;
  prompt: PromptNode;
  promptIndex: number;
  callIndexStart: number;
  childOffset: number;
  freshUntil: number;
  allNodes: SceneNode[];
  allConnectors: Connector[];
}): void {
  subagentFileAssignments(files, fileAnchors).forEach(({ file, parent, siblingIndex, siblingCount }, assignmentIndex) => {
    const fileTarget = overviewFileChangeTarget(parent, axisZ, siblingIndex, siblingCount);
    const fileNode = callSceneNode(
      prompt,
      promptIndex,
      file,
      callIndexStart + childOffset + assignmentIndex,
      fileTarget,
      freshUntil,
      {
        title: file.argumentPreview || subagentChildTitle(file),
        baseScale: subagentChildScale(file),
        fileAxisX: parent.fileAxisX,
        fileAxisZ: parent.fileAxisZ,
      }
    );
    allNodes.push(fileNode);
    allConnectors.push(overviewFileChangeConnector(parent.id, fileNode.id, parent.target));
  });
}

function subagentSpineUnits(group: SubagentChildGroup): SubagentSpineUnit[] {
  const units: SubagentSpineUnit[] = [];
  let current: SubagentSpineUnit | null = null;

  if (group.prompt) {
    current = { spine: group.prompt, children: [], files: [] };
    units.push(current);
  }

  group.children.forEach((child) => {
    if (isSubagentSpineChild(child)) {
      current = { spine: child, children: [], files: [] };
      units.push(current);
      return;
    }
    if (!current) {
      current = { spine: null, children: [], files: [] };
      units.push(current);
    }
    if (isSubagentFileChild(child)) {
      current.files.push(child);
      return;
    }
    current.children.push(child);
  });

  return units.length ? units : [{ spine: null, children: [], files: [] }];
}

function isSubagentSpineChild(child: CallNode): boolean {
  return child.name === "subagent.message" || child.name === "subagent.compaction" || child.name === "subagent.more";
}

function isSubagentFileChild(child: CallNode): boolean {
  return child.name === "subagent.file";
}

function subagentFileAnchorForEvent(eventIndex: number | null | undefined, anchors: FileLayoutAnchor[]): FileLayoutAnchor {
  return latestAnchorAtOrBefore(eventIndex, anchors, anchors[0]) ?? anchors[0];
}

function subagentSpineAxisZ(baseZ: number, unitIndex: number): number {
  return baseZ - unitIndex * OVERVIEW_SUBAGENT_GROUP_SPINE_Z_STEP;
}

function subagentSpineConnector(
  fromId: string,
  toId: string,
  branchX: number,
  branchY: number,
  baseZ: number,
  fromUnitIndex: number | null,
  toUnitIndex: number
): Connector {
  const startUnitIndex = fromUnitIndex ?? toUnitIndex - 0.85;
  const waypointCount = 6;
  const waypoints: THREE.Vector3[] = [];
  for (let waypointIndex = 1; waypointIndex <= waypointCount; waypointIndex += 1) {
    const progress = waypointIndex / (waypointCount + 1);
    const interpolatedUnitIndex = startUnitIndex + (toUnitIndex - startUnitIndex) * progress;
    waypoints.push(subagentGroupTarget(branchX, branchY, baseZ, interpolatedUnitIndex));
  }
  return { fromId, toId, waypoints };
}

function subagentGroupTarget(branchX: number, branchY: number, groupZ: number, groupIndex: number): THREE.Vector3 {
  const side = branchX < 0 ? -1 : 1;
  const angle = OVERVIEW_SPIRAL_ANGLE_START + groupIndex * OVERVIEW_SUBAGENT_GROUP_SPIRAL_ANGLE_STEP + side * 0.28;
  const radius =
    OVERVIEW_SUBAGENT_GROUP_SPIRAL_RADIUS +
    Math.min(OVERVIEW_SUBAGENT_GROUP_SPIRAL_MAX_RADIUS_GROWTH, groupIndex * OVERVIEW_SUBAGENT_GROUP_SPIRAL_RADIUS_GROWTH);
  return new THREE.Vector3(
    branchX + side * OVERVIEW_SUBAGENT_GROUP_SPIRAL_OUTWARD_BIAS + Math.sin(angle) * radius * side,
    branchY - 0.9 - groupIndex * OVERVIEW_SUBAGENT_GROUP_Y_STEP + Math.cos(angle) * OVERVIEW_SUBAGENT_GROUP_Y_WAVE,
    subagentSpineAxisZ(groupZ, groupIndex) + Math.cos(angle) * radius
  );
}

function subagentGroupedCallSlotZ(callIndex: number, callCount: number): number {
  return groupedSlotOffset(
    callIndex,
    callCount,
    OVERVIEW_SUBAGENT_GROUPED_CALLS_PER_ROW,
    OVERVIEW_SUBAGENT_GROUPED_CALL_Z_GAP,
    0.2
  );
}

function subagentGroupedChildTarget(
  groupTarget: THREE.Vector3,
  frame: ReturnType<typeof overviewRadialFrame>,
  childIndex: number,
  childCount: number
): THREE.Vector3 {
  const tier = Math.floor(childIndex / OVERVIEW_SUBAGENT_GROUPED_CALLS_PER_ROW);
  const slot = childIndex % OVERVIEW_SUBAGENT_GROUPED_CALLS_PER_ROW;
  const tangentOffset = subagentGroupedCallSlotZ(childIndex, childCount);
  const radialOffset = OVERVIEW_SUBAGENT_GROUPED_CALL_X_GAP + tier * OVERVIEW_SUBAGENT_GROUPED_CALL_ROW_X_GAP;
  return new THREE.Vector3(
    groupTarget.x + frame.radialX * radialOffset + frame.tangentX * tangentOffset,
    groupTarget.y - 0.36 - slot * OVERVIEW_SUBAGENT_GROUPED_CALL_Y_GAP - tier * OVERVIEW_SUBAGENT_GROUPED_CALL_ROW_Y_GAP,
    groupTarget.z + frame.radialZ * radialOffset + frame.tangentZ * tangentOffset
  );
}

interface SubagentChildGroup {
  prompt: CallNode | null;
  children: CallNode[];
}

interface SubagentSpineUnit {
  spine: CallNode | null;
  children: CallNode[];
  files: CallNode[];
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
    fileAxisX,
    fileAxisZ,
  }: { kind?: string; title?: string; baseScale?: number; fileAxisX?: number; fileAxisZ?: number } = {}
): CallSceneNode {
  const callIsNew = call.eventIndex > newEventFloor;
  const skillNames = skillNamesForCall(call);
  const displayKind = skillNames.length ? "skill" : isPatchCall(call) ? "patch" : kind;
  const displayTitle = skillNames.length ? skillUseTitle(skillNames) : title;
  return {
    id: call.id,
    type: "call",
    kind: displayKind,
    promptId: prompt.id,
    promptIndex,
    callIndex,
    eventIndex: call.eventIndex ?? prompt.eventIndex ?? promptIndex,
    title: displayTitle,
    body: call.argumentPreview || "",
    detail: detailForCall(call),
    source: call,
    isNew: callIsNew,
    freshUntil: callIsNew ? freshUntil : 0,
    position: target.clone(),
    target,
    fileAxisX,
    fileAxisZ,
    baseScale,
    scale: baseScale,
    skillNames,
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
  const skillNames = skillNamesFromText(message.text);
  return {
    id: message.id,
    type: "message",
    kind: skillNames.length ? "skill" : "assistant",
    promptId: prompt.id,
    promptIndex,
    callIndex,
    eventIndex: message.eventIndex ?? prompt.eventIndex ?? promptIndex,
    title: skillNames.length ? skillUseTitle(skillNames) : "assistant message",
    body: message.text,
    detail: message.text,
    source: message,
    isNew: messageIsNew,
    freshUntil: messageIsNew ? freshUntil : 0,
    position: target.clone(),
    target,
    baseScale,
    scale: baseScale,
    skillNames,
  };
}

function subagentBranchesForCalls(calls: CallNode[]): SubagentBranch[] {
  const launches = calls.filter(isSubagentLaunchCall);
  const results = calls.filter(isSubagentResultCall);
  const unusedResults = new Set(results);
  const resultsByAgentId = new Map<string, CallNode[]>();
  const resultAgentIds = new Map<string, string | null>();

  results.forEach((result) => {
    const agentId = subagentAgentId(result);
    resultAgentIds.set(result.id, agentId);
    if (!agentId) {
      return;
    }
    const matches = resultsByAgentId.get(agentId) ?? [];
    matches.push(result);
    resultsByAgentId.set(agentId, matches);
  });

  const branches: Array<SubagentBranch & { order: number }> = launches
    .map((launch, index) => {
      const agentId = subagentAgentId(launch);
      const matchedByAgent = agentId
        ? resultsByAgentId.get(agentId)?.find((result) => unusedResults.has(result) && result.eventIndex >= launch.eventIndex)
        : null;
      const matchedByOrder =
        matchedByAgent ??
        results.find(
          (result) =>
            unusedResults.has(result) &&
            result.eventIndex >= launch.eventIndex &&
            canFallbackPairSubagentResult(agentId, resultAgentIds.get(result.id) ?? null)
        ) ??
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
    })
    .filter(hasRenderableSubagentBranchContent);

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

function canFallbackPairSubagentResult(launchAgentId: string | null, resultAgentId: string | null): boolean {
  return resultAgentId === null || launchAgentId === resultAgentId;
}

function hasRenderableSubagentBranchContent(branch: SubagentBranch): boolean {
  return Boolean(branch.result || branch.nodes.length);
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
  return subagentEventLabel(call.name) ?? (isSubagentResultCall(call) ? "subagent result" : "subagent launch");
}

function subagentChildTitle(call: CallNode): string {
  const subagentLabel = subagentEventLabel(call.name);
  if (subagentLabel) {
    return call.name === "subagent.more" && call.argumentPreview ? call.argumentPreview : subagentLabel;
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
  mesh.frustumCulled = false;
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
  lineMesh.frustumCulled = false;
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
  syncViewActionControls();
}

function syncViewActionControls(): void {
  const twoDActive = mode === "overview" && overviewCameraMode === "two-d";
  viewActionButtons.forEach((button) => {
    if (button.dataset.viewAction !== "two-d") {
      return;
    }
    const label = twoDActive ? "Switch to 3D overview" : "Switch to 2D overview";
    button.classList.toggle("active", twoDActive);
    button.setAttribute("aria-pressed", String(twoDActive));
    button.setAttribute("aria-label", label);
    button.title = label;
  });
}

function switchOverviewCameraMode(nextMode: OverviewCameraMode): void {
  resumeCameraAutoFollow();
  mode = "overview";
  overviewCameraMode = nextMode;
  setLayoutTargets({ preserveCamera: true });
  frameOverview();
  syncViewActionControls();
}

function toggleOverviewCameraMode(): void {
  switchOverviewCameraMode(mode === "overview" && overviewCameraMode === "two-d" ? "three-d" : "two-d");
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

function normalizedFileChangeType(change: FileChangeNode): FileChangeType {
  return FILE_CHANGE_TYPES.includes(change.changeType) ? change.changeType : "update";
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
  updateLiveCameraFollow(now);
  controls.update();
  updateInfiniteGrid();
  renderer?.render(scene, camera);
}

function updateCameraFlight(delta: number): void {
  const forwardInput = (activeCameraFlyKeys.has("KeyW") ? 1 : 0) - (activeCameraFlyKeys.has("KeyS") ? 1 : 0);
  const strafeInput = (activeCameraFlyKeys.has("KeyD") ? 1 : 0) - (activeCameraFlyKeys.has("KeyA") ? 1 : 0);
  const verticalInput = (activeCameraFlyKeys.has(CAMERA_FLY_UP_KEY_CODE) ? 1 : 0) - (isCameraFlyDownActive() ? 1 : 0);
  if (!forwardInput && !strafeInput && !verticalInput) {
    return;
  }

  clampCameraFlyLookTarget();
  camera.getWorldDirection(cameraFlyForward);
  cameraFlyRight.crossVectors(cameraFlyForward, camera.up).normalize();
  cameraFlyMove
    .set(0, 0, 0)
    .addScaledVector(cameraFlyForward, forwardInput)
    .addScaledVector(cameraFlyRight, strafeInput)
    .addScaledVector(camera.up, verticalInput);
  if (cameraFlyMove.lengthSq() < 0.000001) {
    return;
  }
  markManualCameraNavigation();

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
  zoomCamera(-steps);
  event.preventDefault();
}

function handleOrbitPanPointerDown(event: PointerEvent): void {
  if (event.button !== 0 || !shouldHandleOrbitPan(event)) {
    return;
  }
  orbitPanPointerId = event.pointerId;
  orbitPanMoved = false;
  orbitPanLastX = event.clientX;
  orbitPanLastY = event.clientY;
  orbitPanStartX = event.clientX;
  orbitPanStartY = event.clientY;
  orbitPanHasFloorAnchor = grabPanFloorPointForPointer(event, grabPanAnchorPoint);
  canvas.classList.add("grabbing");
  try {
    canvas.setPointerCapture(event.pointerId);
  } catch {
    // The browser may already be routing this pointer elsewhere.
  }
  event.preventDefault();
  event.stopImmediatePropagation();
}

function handleOrbitPanPointerMove(event: PointerEvent): void {
  if (event.pointerId !== orbitPanPointerId) {
    return;
  }
  if ((event.buttons & 1) === 0) {
    endOrbitPanPointer(event);
    return;
  }
  const deltaX = event.clientX - orbitPanLastX;
  const deltaY = event.clientY - orbitPanLastY;
  orbitPanLastX = event.clientX;
  orbitPanLastY = event.clientY;
  const movedDistanceSq = (event.clientX - orbitPanStartX) ** 2 + (event.clientY - orbitPanStartY) ** 2;
  orbitPanMoved = orbitPanMoved || movedDistanceSq > CAMERA_GRAB_PAN_CLICK_SLOP_PX ** 2;
  const movedCamera = orbitPanHasFloorAnchor
    ? translateCameraByFloorDrag(event)
    : translateCameraByScreenDrag(deltaX, deltaY);
  if (movedCamera) {
    markManualCameraNavigation();
  }
  event.preventDefault();
  event.stopImmediatePropagation();
}

function endOrbitPanPointer(event: PointerEvent): void {
  if (event.pointerId !== orbitPanPointerId) {
    return;
  }
  orbitPanPointerId = null;
  suppressNextCanvasClick = suppressNextCanvasClick || orbitPanMoved;
  orbitPanMoved = false;
  orbitPanHasFloorAnchor = false;
  canvas.classList.remove("grabbing");
  try {
    if (canvas.hasPointerCapture(event.pointerId)) {
      canvas.releasePointerCapture(event.pointerId);
    }
  } catch {
    // The pointer may already have been released by the browser.
  }
  event.stopImmediatePropagation();
}

function translateCameraByFloorDrag(event: PointerEvent): boolean {
  if (!grabPanFloorPointForPointer(event, grabPanCurrentPoint)) {
    return false;
  }
  grabPanMove.copy(grabPanAnchorPoint).sub(grabPanCurrentPoint);
  if (grabPanMove.lengthSq() <= 0.000001) {
    return false;
  }
  camera.position.add(grabPanMove);
  controls.target.add(grabPanMove);
  controls.update();
  return true;
}

function grabPanFloorPointForPointer(event: PointerEvent, target: THREE.Vector3): boolean {
  updatePointer(event);
  grabPanRaycaster.setFromCamera(pointer, camera);
  return Boolean(grabPanRaycaster.ray.intersectPlane(grabPanFloorPlane, target));
}

function translateCameraByScreenDrag(deltaX: number, deltaY: number): boolean {
  if (!deltaX && !deltaY) {
    return false;
  }
  const rect = canvas.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) {
    return false;
  }
  const floorDistance = cameraFloorViewDistance();
  const visibleHeight = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * floorDistance;
  const unitsPerPixelY = visibleHeight / rect.height;
  const unitsPerPixelX = (visibleHeight * camera.aspect) / rect.width;
  grabPanRight.setFromMatrixColumn(camera.matrix, 0).normalize();
  grabPanUp.setFromMatrixColumn(camera.matrix, 1).normalize();
  grabPanMove
    .set(0, 0, 0)
    .addScaledVector(grabPanRight, -deltaX * unitsPerPixelX)
    .addScaledVector(grabPanUp, deltaY * unitsPerPixelY);
  camera.position.add(grabPanMove);
  controls.target.add(grabPanMove);
  controls.update();
  return true;
}

function cameraFloorViewDistance(): number {
  grabPanRaycaster.setFromCamera(centerPointer, camera);
  if (grabPanRaycaster.ray.intersectPlane(grabPanFloorPlane, scratchVector)) {
    return Math.max(0.001, camera.position.distanceTo(scratchVector));
  }
  camera.getWorldDirection(cameraFlyForward);
  const verticalDistance = Math.abs(camera.position.y - MAP_FLOOR_Y);
  return Math.max(0.001, verticalDistance / Math.max(0.12, Math.abs(cameraFlyForward.y)));
}

function shouldHandleOrbitPan(event: PointerEvent): boolean {
  return activeAppMode === "map" && !isTextEntryTarget(event.target);
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
  markManualCameraNavigation();
}

function stopCameraFlyLook(pointerId: number | null = cameraFlyLookPointerId): void {
  cameraFlyLookActive = false;
  cameraFlyLookPointerId = null;
  try {
    if (pointerId != null && canvas.hasPointerCapture(pointerId)) {
      canvas.releasePointerCapture(pointerId);
    }
  } catch {
    // The pointer may have already been released by the browser.
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
    (node): node is CompactionSceneNode => node.type === "compaction" && nodeVisibleInCurrentView(node) && nodeIsFreshAt(node, now)
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
    (node): node is PromptSceneNode => node.type === "prompt" && nodeVisibleInCurrentView(node) && nodeIsFreshAt(node, now)
  );
  const streamingPrompt = liveCues.assistantStreaming ? latestPromptFocusNode() : null;
  const visibleStreamingPrompt = streamingPrompt && nodeVisibleInCurrentView(streamingPrompt) ? streamingPrompt : null;
  const steeringPrompts = uniquePromptNodes(visibleStreamingPrompt ? [...freshPrompts, visibleStreamingPrompt] : freshPrompts);
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
  nextPointMesh.frustumCulled = false;
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
    if (nodeVisibleInCurrentView(node)) {
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
  if (!nodeVisibleInCurrentView(node)) {
    scratchObject.position.set(0, HIDDEN_INSPECT_POINT_Y, 0);
    scratchObject.rotation.set(0, 0, 0);
    scratchObject.scale.setScalar(0);
    scratchObject.updateMatrix();
    mesh.setMatrixAt(index, scratchObject.matrix);
    return;
  }

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
    if (!from || !to || !nodeVisibleInCurrentView(from) || !nodeVisibleInCurrentView(to)) {
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
  if (suppressNextCanvasClick) {
    suppressNextCanvasClick = false;
    return;
  }
  updatePointer(event);
  const hit = pickNode();
  if (hit) {
    openEventContext(hit);
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
    openEventContext(hit);
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
  const nearest = nearestVisibleScreenNode();
  if (nearest) {
    return nearest;
  }

  raycaster.setFromCamera(pointer, camera);
  const meshes: THREE.Object3D[] = Object.values(meshBuckets).filter((mesh): mesh is NodeInstancedMesh => Boolean(mesh));
  if (pointMesh) {
    meshes.push(pointMesh);
  }
  const hits = raycaster.intersectObjects(meshes, false);
  for (const hit of hits) {
    if (hit.object === pointMesh && hit.index !== undefined) {
      const node = pointMesh.userData.nodes[hit.index] || null;
      if (node && nodeVisibleInCurrentView(node)) {
        return node;
      }
      continue;
    }
    if (hit.instanceId !== undefined) {
      const bucketNodes = (hit.object as NodeInstancedMesh).userData.nodes;
      const node = bucketNodes[hit.instanceId] || null;
      if (node && nodeVisibleInCurrentView(node)) {
        return node;
      }
    }
  }
  return null;
}

function nearestVisibleScreenNode(): SceneNode | null {
  const rect = canvas.getBoundingClientRect();
  const pickX = rect.left + ((pointer.x + 1) / 2) * rect.width;
  const pickY = rect.top + ((1 - pointer.y) / 2) * rect.height;
  let nearest: SceneNode | null = null;
  let nearestDistanceSq = SCREEN_PICK_RADIUS_PX * SCREEN_PICK_RADIUS_PX;

  nodes.forEach((node) => {
    if (!nodeVisibleInCurrentView(node)) {
      return;
    }
    scratchVector.copy(node.position).project(camera);
    if (scratchVector.z < -1 || scratchVector.z > 1) {
      return;
    }
    const nodeX = rect.left + ((scratchVector.x + 1) / 2) * rect.width;
    const nodeY = rect.top + ((1 - scratchVector.y) / 2) * rect.height;
    const distanceSq = (nodeX - pickX) ** 2 + (nodeY - pickY) ** 2;
    if (distanceSq <= nearestDistanceSq) {
      nearest = node;
      nearestDistanceSq = distanceSq;
    }
  });

  return nearest;
}

function setRawModePayload(payload: unknown): void {
  rawPayload = payload ?? {};
  if (activeAppMode === "raw" && graph) {
    renderRawModePanel();
  }
}

function setFocusedEvidenceLine(lineNumber: number | null | undefined): void {
  focusedEvidenceLine = lineNumber ?? null;
  if (activeAppMode === "timeline" && graph) {
    renderTimelineModePanel();
  }
}

function clearRawModePayload(): void {
  rawPayload = null;
  if (activeAppMode === "raw" && graph) {
    renderRawModePanel();
  }
}

function openEventContext(
  node: SceneNode | undefined | null,
  { reveal = true, skipStableRender = false }: { reveal?: boolean; skipStableRender?: boolean } = {}
): void {
  if (!node) {
    return;
  }
  selectedNodeId = node.id;
  const nextSignature = eventContextRenderSignature(node);
  if (
    skipStableRender &&
    eventContextRenderedSelection?.nodeId === node.id &&
    eventContextRenderedSelection.signature === nextSignature &&
    isEventPopupVisible()
  ) {
    setRawModePayload(node.source);
    syncEventContextActions();
    return;
  }
  if (reveal) {
    showEventPopup();
  }
  syncInstanceColors();
  contextEventTitle.textContent = eventContextKindLabel(node);
  eventPopup.classList.toggle("prompt-context", node.type === "prompt");
  setEventContextTitle(eventContextHeaderTitle(node), "Selection");
  turnNumber.textContent = eventContextPositionLabel(node);
  setEventContextTimestamp(timestampForNode(node));
  streamTitle.textContent = eventContextStreamTitle(node);
  setRawModePayload(node.source);
  syncEventContextActions();
  renderStreamImages(imagesForNode(node));
  const payload = node.detail || node.body || node.title;
  if (node.type === "prompt") {
    renderStreamMarkdown(payload);
  } else {
    renderPlainEventContextBody(payload);
  }
  eventContextRenderedSelection = { nodeId: node.id, signature: nextSignature };
}

function eventContextRenderSignature(node: SceneNode): string {
  const images = imagesForNode(node)
    .map((image) => [image.id, image.eventIndex, image.imageIndex, image.detail ?? "", image.mimeType].join("\u001f"))
    .join("\u001e");
  return [
    node.id,
    node.type,
    node.kind,
    node.eventIndex,
    node.type === "prompt" ? node.promptIndex : "",
    eventContextHeaderTitle(node),
    eventContextPositionLabel(node),
    timestampForNode(node),
    node.detail || node.body || node.title,
    images,
  ].join("\u001d");
}

function setReadableRedactionText(element: HTMLElement, text: string | null | undefined, options: { includeSummary?: boolean } = {}): void {
  const value = String(text ?? "");
  const segments = readableRedactionSegments(value);
  const hasRedactions = segments.some((segment) => segment.kind === "redaction");
  element.classList.toggle("redaction-readable-text", hasRedactions);
  element.replaceChildren();
  if (!hasRedactions) {
    element.textContent = value;
    return;
  }
  if (options.includeSummary) {
    const summary = readableRedactionSummary(value);
    if (summary) {
      const summaryElement = document.createElement("div");
      summaryElement.className = "redaction-group-summary";
      summaryElement.setAttribute("aria-label", "Redactions: grouped readable placeholders");
      summaryElement.textContent = summary;
      element.append(summaryElement);
    }
  }
  appendReadableRedactionSegments(element, segments);
}

function appendReadableRedactionSegments(element: HTMLElement, segments: RedactionDisplaySegment[]): void {
  segments.forEach((segment) => {
    if (segment.kind === "text" || !segment.category) {
      element.append(document.createTextNode(segment.text));
      return;
    }
    const chip = document.createElement("span");
    chip.className = `redaction-chip redaction-${segment.category}`;
    chip.textContent = segment.text;
    chip.title = "Readable redaction placeholder; raw sensitive value is not present in this UI surface.";
    element.append(chip);
  });
}

function readableRedactionSummaryElement(text: string): HTMLElement | null {
  const summary = readableRedactionSummary(text);
  if (!summary) {
    return null;
  }
  const element = document.createElement("div");
  element.className = "redaction-group-summary";
  element.setAttribute("aria-label", "Redactions: grouped readable placeholders");
  element.textContent = summary;
  return element;
}

function renderPlainEventContextBody(payload: string): void {
  streamData.classList.remove("stream-markdown");
  setReadableRedactionText(streamData, payload, { includeSummary: true });
}

function renderStreamMarkdown(markdown: string): void {
  streamData.classList.add("stream-markdown");
  const redactionSegments = readableRedactionSegments(markdown);
  const readableMarkdown = redactionSegments.some((segment) => segment.kind === "redaction")
    ? redactionSegments.map((segment) => segment.text).join("")
    : markdown;
  const summary = readableRedactionSummaryElement(markdown);
  const content = renderAnnotationPrompt(readableMarkdown) ?? renderMarkdownFragment(readableMarkdown);
  streamData.replaceChildren(...[summary, content].filter((node): node is HTMLElement | DocumentFragment => Boolean(node)));
}

const ANNOTATION_FIELD_LABELS = [
  "File",
  "Side",
  "Lines",
  "Node position",
  "Page URL",
  "Frame",
  "Target",
  "Target selector",
  "Target path",
  "Comment",
] as const;

type AnnotationField = (typeof ANNOTATION_FIELD_LABELS)[number];

const ANNOTATION_META_ROWS: ReadonlyArray<{
  label: string;
  field: AnnotationField;
  asLink?: boolean;
}> = [
  { label: "File", field: "File" },
  { label: "Side", field: "Side" },
  { label: "Lines", field: "Lines" },
  { label: "Node", field: "Node position" },
  { label: "Target", field: "Target" },
  { label: "Selector", field: "Target selector" },
  { label: "Path", field: "Target path" },
  { label: "Page", field: "Page URL", asLink: true },
  { label: "Frame", field: "Frame" },
];

interface PromptAnnotation {
  number: string;
  fields: Map<AnnotationField, string>;
}

function renderAnnotationPrompt(markdown: string): DocumentFragment | null {
  if (!/^#\s+Diff comments:\s*$/m.test(markdown)) {
    return null;
  }

  const comments = parsePromptAnnotations(markdown);
  if (!comments.length) {
    return null;
  }

  const fragment = document.createDocumentFragment();
  const section = document.createElement("section");
  section.className = "annotation-prompt";

  const heading = document.createElement("h1");
  heading.textContent = "Diff comments";
  section.append(heading);

  const browserUrl = markdown.match(/^- Current URL:\s*(.+)$/m)?.[1]?.trim();
  comments.forEach((comment) => {
    const article = document.createElement("article");
    article.className = "annotation-item";

    const marker = document.createElement("span");
    marker.className = "annotation-marker";
    marker.textContent = `Comment ${comment.number}`;
    article.append(marker);

    const commentBody = document.createElement("p");
    commentBody.className = "annotation-comment";
    commentBody.textContent = annotationValue(comment, "Comment") || "No comment text.";
    article.append(commentBody);

    const meta = document.createElement("dl");
    meta.className = "annotation-meta";
    ANNOTATION_META_ROWS.forEach((row) => {
      appendAnnotationMeta(meta, row.label, annotationValue(comment, row.field), row.asLink);
    });
    appendAnnotationMeta(meta, "Current", browserUrl, true);
    article.append(meta);

    section.append(article);
  });

  fragment.append(section);
  return fragment;
}

function parsePromptAnnotations(markdown: string): PromptAnnotation[] {
  const normalized = markdown.replace(/\r\n?/g, "\n");
  const starts = [...normalized.matchAll(/^##\s+Comment\s+(\d+)\s*$/gm)];
  return starts.map((start, index) => {
    const nextStart = starts[index + 1]?.index ?? normalized.search(/\n# In app browser:/);
    const end = nextStart >= 0 ? nextStart : normalized.length;
    const block = normalized.slice((start.index ?? 0) + start[0].length, end);
    return {
      number: start[1],
      fields: parseAnnotationFields(block),
    };
  });
}

function parseAnnotationFields(block: string): Map<AnnotationField, string> {
  const fields = new Map<AnnotationField, string>();
  const lines = block.split("\n");
  let index = 0;
  while (index < lines.length) {
    const match = lines[index].match(/^([A-Z][A-Za-z ]+):\s*(.*)$/);
    const label = match?.[1];
    if (!label || !isAnnotationField(label)) {
      index += 1;
      continue;
    }

    const inlineValue = match[2].trim();
    if (inlineValue) {
      fields.set(label, inlineValue);
      index += 1;
      continue;
    }

    const valueLines: string[] = [];
    index += 1;
    while (index < lines.length) {
      const line = lines[index];
      if (!line.trim() || /^#{1,6}\s+/.test(line) || isAnnotationFieldStart(line)) {
        break;
      }
      valueLines.push(line.trim());
      index += 1;
    }
    fields.set(label, valueLines.join("\n").trim());
  }
  return fields;
}

function isAnnotationField(label: string): label is AnnotationField {
  return (ANNOTATION_FIELD_LABELS as readonly string[]).includes(label);
}

function isAnnotationFieldStart(line: string): boolean {
  const match = line.match(/^([A-Z][A-Za-z ]+):/);
  return Boolean(match && isAnnotationField(match[1]));
}

function annotationValue(annotation: PromptAnnotation, field: AnnotationField): string {
  return annotation.fields.get(field) ?? "";
}

function appendAnnotationMeta(list: HTMLDListElement, label: string, value: string | undefined, asLink = false): void {
  const text = value?.trim();
  if (!text) {
    return;
  }

  const term = document.createElement("dt");
  term.textContent = label;
  const description = document.createElement("dd");
  if (asLink && /^https?:\/\//.test(text)) {
    const link = document.createElement("a");
    link.href = text;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = text;
    description.append(link);
  } else {
    description.textContent = text;
  }
  list.append(term, description);
}

function renderMarkdownFragment(markdown: string): DocumentFragment {
  const fragment = document.createDocumentFragment();
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  let index = 0;

  const appendInline = (element: HTMLElement, text: string): void => {
    element.innerHTML = inlineMarkdownHtml(text);
  };

  const appendInlineLines = (element: HTMLElement, lineParts: string[]): void => {
    element.innerHTML = lineParts.map((part) => inlineMarkdownHtml(part.trim())).join("<br>");
  };

  while (index < lines.length) {
    const line = lines[index] ?? "";
    if (!line.trim()) {
      index += 1;
      continue;
    }

    const fence = line.match(/^\s*```(\S*)\s*$/);
    if (fence) {
      const codeLines: string[] = [];
      index += 1;
      while (index < lines.length && !/^\s*```\s*$/.test(lines[index] ?? "")) {
        codeLines.push(lines[index] ?? "");
        index += 1;
      }
      if (index < lines.length) {
        index += 1;
      }
      const pre = document.createElement("pre");
      const code = document.createElement("code");
      if (fence[1]) {
        code.dataset.language = fence[1];
      }
      code.textContent = codeLines.join("\n");
      pre.append(code);
      fragment.append(pre);
      continue;
    }

    const heading = line.match(/^\s{0,3}(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = Math.min(6, heading[1].length);
      const element = document.createElement(`h${level}`);
      appendInline(element, heading[2]);
      fragment.append(element);
      index += 1;
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const list = document.createElement("ul");
      while (index < lines.length) {
        const item = (lines[index] ?? "").match(/^\s*[-*]\s+(.+)$/);
        if (!item) {
          break;
        }
        const li = document.createElement("li");
        appendInline(li, item[1]);
        list.append(li);
        index += 1;
      }
      fragment.append(list);
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const list = document.createElement("ol");
      while (index < lines.length) {
        const item = (lines[index] ?? "").match(/^\s*\d+\.\s+(.+)$/);
        if (!item) {
          break;
        }
        const li = document.createElement("li");
        appendInline(li, item[1]);
        list.append(li);
        index += 1;
      }
      fragment.append(list);
      continue;
    }

    const paragraphLines: string[] = [];
    while (index < lines.length) {
      const paragraphLine = lines[index] ?? "";
      if (
        !paragraphLine.trim() ||
        /^\s*```/.test(paragraphLine) ||
        /^\s{0,3}#{1,6}\s+/.test(paragraphLine) ||
        /^\s*[-*]\s+/.test(paragraphLine) ||
        /^\s*\d+\.\s+/.test(paragraphLine)
      ) {
        break;
      }
      paragraphLines.push(paragraphLine.trim());
      index += 1;
    }
    const paragraph = document.createElement("p");
    appendInlineLines(paragraph, paragraphLines);
    fragment.append(paragraph);
  }

  if (!fragment.childNodes.length) {
    const paragraph = document.createElement("p");
    paragraph.textContent = "";
    fragment.append(paragraph);
  }
  return fragment;
}

function inlineMarkdownHtml(text: string): string {
  const codeSpans: string[] = [];
  let html = escapeHtml(text).replace(/`([^`]+)`/g, (_match, code: string) => {
    const token = `@@CODE_SPAN_${codeSpans.length}@@`;
    codeSpans.push(`<code>${code}</code>`);
    return token;
  });

  html = html.replace(/\[([^\]\n]+)\]\(((?:https?:\/\/|\/)[^\s)]+)\)/g, (_match, label: string, href: string) => {
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  });
  html = html.replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/(^|[^\*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
  html = html.replace(/@@CODE_SPAN_(\d+)@@/g, (_match, index: string) => codeSpans[Number(index)] ?? "");
  return html;
}

function renderStreamImages(images: ContentImageRef[] = []): void {
  streamImages.replaceChildren();
  if (!images.length) {
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
    const bucketNodes = mesh.userData.nodes as SceneNode[];
    bucketNodes.forEach((node: SceneNode, index: number) => {
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
  if (!nodeVisibleInCurrentView(node)) {
    scratchColor.setRGB(0, 0, 0);
  } else if (selected) {
    scratchColor.lerp(whiteColor, 0.26);
  } else if (node.isNew) {
    scratchColor.lerp(whiteColor, 0.14);
  } else if (mode === "inspect" && node.promptId !== activePromptId) {
    scratchColor.multiplyScalar(0.42);
  } else if (!nodeMatchesSearch(node)) {
    scratchColor.multiplyScalar(0.46);
  }
  return scratchColor;
}

function nodeVisibleInCurrentMode(node: SceneNode): boolean {
  return mode !== "inspect" || !activePromptId || node.promptId === activePromptId;
}

function nodeVisibleInCurrentView(node: SceneNode): boolean {
  return nodeVisibleInCurrentMode(node) && nodeMatchesActiveMapFilter(node);
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

function resetEventContext(): void {
  hideEventPopup();
  eventContextRenderedSelection = null;
  const current = graph;
  const latestPrompt = current?.prompts.at(-1);
  eventPopup.classList.remove("prompt-context");
  contextEventTitle.textContent = "SESSION";
  setEventContextTitle(current?.ui.sessionName || "Session overview", "Session");
  turnNumber.textContent = current ? `${current.totals.promptCount} prompts` : "Loading";
  setEventContextTimestamp(current?.lastModifiedAt || "Live context");
  streamTitle.textContent = latestPrompt?.title || current?.ui.sessionName || "Session overview";
  streamData.classList.remove("stream-markdown");
  streamData.textContent = sessionOverviewText();
  renderStreamImages();
}

function refreshEventContextTotals(): void {
  if (activeAppMode === "raw") {
    modePanelSummary.textContent = selectedNodeId ? "Selected event" : "Session graph";
  }
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
  eventContextRenderedSelection = null;
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
  const canNavigate = orderedSelectableNodes().length > 1;
  eventPopup.classList.toggle("has-selection", hasSelection);
  for (const button of [streamCopyRef, streamOpenTimeline, streamOpenTranscript, streamOpenRaw]) {
    button.disabled = !hasSelection;
  }
  prevEvent.disabled = !canNavigate;
  nextEvent.disabled = !canNavigate;
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
    openSyntheticEventContext("COPY", "Copy failed", errorMessage(error));
  }
}

function copySelectedSafeReference(): void {
  const referenceText = selectedEventReferenceText();
  if (!referenceText) {
    showCopyFeedback("Select an event first", "Open Map or Timeline and select an event before copying a safe reference.", "error");
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
  setRawModePayload(selectedPayload);
  selectAppMode(nextMode);
  selectedNodeId = selectedId;
  activePromptId = selectedPromptId;
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
  streamMinimize.title = eventContextCollapsed ? "Expand context" : "Minimize context";
  streamMinimize.setAttribute("aria-label", eventContextCollapsed ? "Expand context" : "Collapse context");
  streamMinimize.setAttribute("aria-expanded", String(!eventContextCollapsed));
}

function setActiveButton(buttons: Iterable<HTMLButtonElement>, isActive: (button: HTMLButtonElement) => boolean): void {
  for (const button of buttons) {
    button.classList.toggle("active", isActive(button));
  }
}

function syncAppModeControls(): void {
  modeButtons.forEach((button) => {
    const buttonMode = button.dataset.appMode as AppMode | undefined;
    if (buttonMode && APP_MODE_SET.has(buttonMode)) {
      const status = appModeMaturity(buttonMode);
      button.dataset.status = status.label;
      button.dataset.maturity = status.maturity;
      button.title = status.title;
    }
    button.classList.toggle("active", buttonMode === activeAppMode);
  });
  settingsButton.classList.toggle("active", activeAppMode === "settings");
  settingsButton.setAttribute("aria-pressed", String(activeAppMode === "settings"));
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
  cleanupModePanelRender();
  modePanelKicker.textContent = sourceLabel(graph?.source ?? activeSource);
  modePanelTitle.textContent = appModeTitle(activeAppMode);
  syncModePanelStatus(activeAppMode);
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

function appModeMaturity(appMode: AppMode): AppModeMaturityInfo {
  return APP_MODE_MATURITY[appMode];
}

function syncModePanelStatus(appMode: AppMode): void {
  const status = appModeMaturity(appMode);
  modePanelStatus.textContent = status.label;
  modePanelStatus.title = status.title;
  modePanelStatus.className = `mode-status-label ${status.maturity}`;
}

function renderSummaryModePanel(): void {
  const renderedGraph = graph;
  renderSummaryModePanelView({
    graph: renderedGraph,
    modePanelSummary,
    modePanelContent,
    modeCard,
    modeParagraph,
    modeButton,
    modeEmpty,
    setReadableRedactionText,
    selectAppMode,
    copyText,
    copySafeShareSummary: () => renderedGraph ? copySafeShareSummaryForGraph(renderedGraph) : "",
    setRawModePayload,
    modeTimelineRows,
    focusEventByLine,
    showEvidenceFallback,
  });
}

function cleanupModePanelRender(): void {
  modePanelContent.querySelectorAll<HTMLElement>(".virtual-list-viewport, .virtual-text-viewport").forEach((element) => {
    (element as VirtualCleanupElement).perlustronCleanup?.();
  });
  modePanelContent.classList.remove("virtual-mode-host");
}

function renderVirtualModePanel(main: HTMLElement, header?: HTMLElement): void {
  cleanupModePanelRender();
  modePanelContent.classList.add("virtual-mode-host");
  const shell = document.createElement("div");
  shell.className = "virtual-mode-panel";
  if (header) {
    shell.append(header);
  }
  shell.append(main);
  modePanelContent.replaceChildren(shell);
}

function renderVirtualList<T>(options: VirtualListOptions<T>): HTMLElement {
  const viewport = document.createElement("div");
  viewport.className = "virtual-list-viewport";
  viewport.tabIndex = 0;
  viewport.setAttribute("role", "region");
  viewport.setAttribute("aria-label", options.ariaLabel);

  const canvas = document.createElement("div");
  canvas.className = "virtual-list-canvas";
  viewport.append(canvas);

  const initialViewportWidth = Math.max(1, viewport.clientWidth || VIRTUAL_LIST_WIDTH_FALLBACK);
  const heights = options.items.map((item, index) => Math.max(24, Math.ceil(options.estimateHeight(item, index, initialViewportWidth))));
  const offsets = new Array<number>(options.items.length);
  let totalHeight = 0;
  const rebuildOffsets = (startIndex = 0) => {
    const firstIndex = Math.max(0, startIndex);
    totalHeight = firstIndex > 0 ? offsets[firstIndex] : 0;
    for (let index = firstIndex; index < options.items.length; index += 1) {
      offsets[index] = totalHeight;
      totalHeight += heights[index];
    }
    canvas.style.height = `${Math.max(1, totalHeight)}px`;
  };
  rebuildOffsets();

  let pendingFrame = 0;
  let destroyed = false;
  let resizeObserver: ResizeObserver | null = null;
  const scrollKey = activeAppMode;

  const firstVisibleIndex = (targetOffset: number): number => {
    if (!options.items.length) {
      return -1;
    }
    let low = 0;
    let high = options.items.length - 1;
    let result = options.items.length;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const itemBottom = offsets[mid] + heights[mid];
      if (itemBottom >= targetOffset) {
        result = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return Math.min(result, options.items.length - 1);
  };

  const lastVisibleIndex = (startIndex: number, endOffset: number): number => {
    let endIndex = startIndex;
    for (let index = startIndex; index < options.items.length; index += 1) {
      if (offsets[index] > endOffset) {
        break;
      }
      endIndex = index;
    }
    return endIndex;
  };

  const measureRenderedRange = (startIndex: number, endIndex: number): boolean => {
    if (!options.measureHeight || startIndex < 0 || endIndex < startIndex) {
      return false;
    }
    const viewportWidth = Math.max(1, viewport.clientWidth || initialViewportWidth);
    const anchorIndex = firstVisibleIndex(viewport.scrollTop + 1);
    const anchorOffset = anchorIndex >= 0 ? viewport.scrollTop - offsets[anchorIndex] : 0;
    let firstChangedIndex = options.items.length;
    for (let index = startIndex; index <= endIndex; index += 1) {
      const nextHeight = Math.max(24, Math.ceil(options.measureHeight(options.items[index], index, viewportWidth)));
      if (Math.abs(nextHeight - heights[index]) <= 1) {
        continue;
      }
      heights[index] = nextHeight;
      firstChangedIndex = Math.min(firstChangedIndex, index);
    }
    if (firstChangedIndex === options.items.length) {
      return false;
    }
    rebuildOffsets(firstChangedIndex);
    if (anchorIndex >= 0 && firstChangedIndex < anchorIndex) {
      viewport.scrollTop = Math.max(0, offsets[anchorIndex] + anchorOffset);
      virtualScrollTopByMode[scrollKey] = viewport.scrollTop;
    }
    return true;
  };

  const renderVisibleRows = () => {
    pendingFrame = 0;
    if (destroyed) {
      return;
    }
    if (!options.items.length) {
      canvas.replaceChildren();
      canvas.style.height = "1px";
      return;
    }
    const startOffset = Math.max(0, viewport.scrollTop - VIRTUAL_LIST_OVERSCAN_PX);
    const endOffset = viewport.scrollTop + viewport.clientHeight + VIRTUAL_LIST_OVERSCAN_PX;
    let startIndex = firstVisibleIndex(startOffset);
    let endIndex = lastVisibleIndex(startIndex, endOffset);
    if (measureRenderedRange(startIndex, endIndex)) {
      startIndex = firstVisibleIndex(Math.max(0, viewport.scrollTop - VIRTUAL_LIST_OVERSCAN_PX));
      endIndex = lastVisibleIndex(startIndex, viewport.scrollTop + viewport.clientHeight + VIRTUAL_LIST_OVERSCAN_PX);
    }
    const fragment = document.createDocumentFragment();
    for (let index = startIndex; index <= endIndex; index += 1) {
      const item = options.items[index];
      const wrapper = document.createElement("div");
      wrapper.className = "virtual-list-item";
      wrapper.dataset.index = String(index);
      wrapper.dataset.key = options.keyForItem(item, index);
      wrapper.style.transform = `translateY(${offsets[index]}px)`;
      wrapper.style.height = `${heights[index]}px`;
      wrapper.append(options.renderItem(item, index));
      fragment.append(wrapper);
    }
    canvas.replaceChildren(fragment);
  };

  const scheduleRender = () => {
    if (destroyed) {
      return;
    }
    if (!pendingFrame) {
      pendingFrame = window.requestAnimationFrame(renderVisibleRows);
    }
  };

  viewport.addEventListener(
    "scroll",
    () => {
      virtualScrollTopByMode[scrollKey] = viewport.scrollTop;
      scheduleRender();
    },
    { passive: true }
  );
  resizeObserver = new ResizeObserver(() => {
    if (destroyed) {
      return;
    }
    scheduleRender();
  });
  resizeObserver.observe(viewport);
  (viewport as VirtualCleanupElement).perlustronCleanup = () => {
    destroyed = true;
    if (pendingFrame) {
      window.cancelAnimationFrame(pendingFrame);
    }
    resizeObserver?.disconnect();
  };
  window.requestAnimationFrame(() => {
    const savedScrollTop = virtualScrollTopByMode[scrollKey] ?? 0;
    viewport.scrollTop = Math.min(savedScrollTop, Math.max(0, totalHeight - viewport.clientHeight));
    renderVisibleRows();
  });
  return viewport;
}

function estimateTextLines(text: string, charsPerLine: number, maxLines: number): number {
  const safeCharsPerLine = Math.max(8, charsPerLine);
  let hardBreaks = 1;
  let searchFrom = 0;
  while (hardBreaks < maxLines) {
    const nextBreak = text.indexOf("\n", searchFrom);
    if (nextBreak === -1) {
      break;
    }
    hardBreaks += 1;
    searchFrom = nextBreak + 1;
  }
  const softLines = Math.ceil(Math.min(text.length, safeCharsPerLine * maxLines) / safeCharsPerLine);
  return Math.min(maxLines, Math.max(1, hardBreaks, softLines));
}

function renderVirtualRawText(text: string): HTMLElement {
  const lines = text.split(/\r?\n/);
  const viewport = document.createElement("div");
  viewport.className = "virtual-text-viewport";
  viewport.tabIndex = 0;
  viewport.setAttribute("role", "region");
  viewport.setAttribute("aria-label", "Raw JSON payload");
  viewport.style.setProperty("--raw-line-height", `${RAW_TEXT_LINE_HEIGHT}px`);
  viewport.style.setProperty("--raw-gutter-width", `${Math.max(4, String(lines.length).length + 2)}ch`);

  const canvas = document.createElement("div");
  canvas.className = "virtual-text-canvas";
  canvas.style.height = `${Math.max(1, lines.length * RAW_TEXT_LINE_HEIGHT)}px`;
  viewport.append(canvas);

  let pendingFrame = 0;
  let destroyed = false;

  const renderVisibleLines = () => {
    pendingFrame = 0;
    if (destroyed) {
      return;
    }
    const renderAllLines = lines.length <= RAW_TEXT_FULL_RENDER_LINE_LIMIT;
    const start = renderAllLines ? 0 : Math.max(0, Math.floor(viewport.scrollTop / RAW_TEXT_LINE_HEIGHT) - RAW_TEXT_OVERSCAN_LINES);
    const end = renderAllLines
      ? lines.length
      : Math.min(lines.length, Math.ceil((viewport.scrollTop + viewport.clientHeight) / RAW_TEXT_LINE_HEIGHT) + RAW_TEXT_OVERSCAN_LINES);
    const fragment = document.createDocumentFragment();
    for (let index = start; index < end; index += 1) {
      const row = document.createElement("div");
      row.className = "virtual-text-row";
      row.style.transform = `translateY(${index * RAW_TEXT_LINE_HEIGHT}px)`;
      const lineNumber = document.createElement("span");
      lineNumber.className = "virtual-text-line-number";
      lineNumber.textContent = String(index + 1);
      const lineText = document.createElement("span");
      lineText.className = "virtual-text-line";
      lineText.textContent = lines[index] || " ";
      row.append(lineNumber, lineText);
      fragment.append(row);
    }
    canvas.replaceChildren(fragment);
  };

  const scheduleRender = () => {
    if (destroyed) {
      return;
    }
    if (!pendingFrame) {
      pendingFrame = window.requestAnimationFrame(renderVisibleLines);
    }
  };

  viewport.addEventListener("scroll", scheduleRender, { passive: true });
  (viewport as VirtualCleanupElement).perlustronCleanup = () => {
    destroyed = true;
    if (pendingFrame) {
      window.cancelAnimationFrame(pendingFrame);
    }
  };
  window.requestAnimationFrame(renderVisibleLines);
  return viewport;
}

function stringifyRawPayload(payload: unknown): string {
  try {
    return JSON.stringify(payload, null, 2);
  } catch (error) {
    return JSON.stringify({ error: errorMessage(error) }, null, 2);
  }
}

function renderRawPayload(payload: unknown, header?: HTMLElement): void {
  renderVirtualModePanel(renderVirtualRawText(stringifyRawPayload(payload)), header);
}

function renderTimelineModePanel(): void {
  const rows = modeTimelineRows();
  populateTimelineFilterOptions(rows);
  const filtered = rows.filter(modeRowMatchesFilters);
  updateSearchStatus(rows.length, filtered.length);
  const evidenceSuffix = focusedEvidenceLine ? ` - evidence target line ${focusedEvidenceLine}` : "";
  modePanelSummary.textContent = `${filtered.length} of ${rows.length} events${evidenceSuffix}`;
  if (!filtered.length) {
    modePanelContent.replaceChildren(modeEmpty("No timeline events match the current filters."));
    return;
  }
  const header = document.createElement("div");
  header.className = "mode-panel-header-stack";
  if (focusedEvidenceLine) {
    const notice = modeCard("Evidence Target", [
      `Opened from Summary or Insights. Line ${focusedEvidenceLine} is highlighted below when it is visible in the filtered Timeline.`,
    ]);
    notice.classList.add("timeline-evidence-notice");
    header.append(notice);
  }
  const actions = document.createElement("div");
  actions.className = "mode-actions";
  actions.append(modeButton("Copy Safe Reference", () => copySelectedSafeReference()));
  header.append(actions);
  renderVirtualModePanel(
    renderVirtualList({
      ariaLabel: "Timeline events",
      items: filtered,
      keyForItem: (row) => row.id,
      estimateHeight: estimateTimelineRowHeight,
      renderItem: (row) => renderModeRow(row),
    }),
    header
  );
}

function estimateTimelineRowHeight(row: ModeEventRow): number {
  const titleHeight = estimateTextLines(row.title, 58, 3) * UI_TEXT_LINE_HEIGHT;
  const detailHeight = estimateTextLines([row.filePath, row.detail].filter(Boolean).join(" - "), 110, 7) * UI_MONO_LINE_HEIGHT;
  const timestampHeight = row.timestamp ? UI_MONO_LINE_HEIGHT * 2 : UI_MONO_LINE_HEIGHT;
  return Math.min(TIMELINE_ROW_MAX_HEIGHT, Math.max(TIMELINE_ROW_MIN_HEIGHT, 28 + Math.max(timestampHeight, titleHeight, detailHeight)));
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
  const skillNames = skillNamesForNode(node);
  const flags = new Set<string>();
  if (skillNames.length) {
    flags.add("skill");
  }
  if (nodeMatchesMetric(node, "error") || errorishText(`${node.title} ${detail}`)) {
    flags.add("error");
  }
  if (node.type === "call" && isLongCall(node.source)) {
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
    eventType: skillNames.length ? "skill_use" : node.type === "fileChange" ? `file_${node.source.changeType}` : node.type,
    toolName,
    filePath,
    title: skillNames.length ? skillUseTitle(skillNames) : node.title,
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
  return modeRowMatchesSearchTerm(row);
}

function modeRowMatchesSearchTerm(row: ModeEventRow): boolean {
  if (!searchTerm) {
    return true;
  }
  return [row.role, row.eventType, row.toolName, row.filePath, row.title, row.detail, row.flags.join(" ")]
    .join(" ")
    .toLowerCase()
    .includes(searchTerm);
}

function renderModeRow(row: ModeEventRow): HTMLButtonElement {
  const button = document.createElement("button");
  button.type = "button";
  const isSelected = row.node?.id === selectedNodeId;
  const isEvidenceTarget = focusedEvidenceLine !== null && row.lineNumber === focusedEvidenceLine;
  button.className = `mode-row ${isSelected ? "active" : ""} ${isEvidenceTarget ? "evidence-target" : ""} ${row.flags.includes("skill") ? "skill-row" : ""}`;
  if (isSelected || isEvidenceTarget) {
    button.setAttribute("aria-current", isEvidenceTarget ? "location" : "true");
  }
  if (isEvidenceTarget) {
    button.title = "Evidence target opened from Summary or Insights.";
  }
  const line = document.createElement("code");
  line.textContent = [`L${row.lineNumber}`, formatModeTimestamp(row.timestamp)].filter(Boolean).join("\n");
  const kind = document.createElement("small");
  kind.textContent = [row.role, row.eventType, row.toolName].filter(Boolean).join(" / ");
  const title = document.createElement("strong");
  setReadableRedactionText(title, row.title);
  const detail = document.createElement("small");
  setReadableRedactionText(detail, [row.filePath, row.detail].filter(Boolean).join(" - "));
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
    openEventContext(row.node, { reveal: false });
  } else {
    openSyntheticEventContext(row.eventType.toUpperCase(), row.title, row.detail || row.title);
  }
  setRawModePayload(row.source);
}

function renderTranscriptModePanel(): void {
  const current = currentGraph();
  const rows = transcriptPanelRows(current);
  pruneTranscriptMeasureCache(rows);
  modePanelSummary.textContent = `${current.prompts.length} turns / ${rows.filter((row) => row.type === "entry").length} entries`;
  if (!rows.length) {
    modePanelContent.replaceChildren(modeEmpty("No transcript events were parsed."));
    return;
  }
  renderVirtualModePanel(
    renderVirtualList({
      ariaLabel: "Transcript entries",
      items: rows,
      keyForItem: transcriptPanelRowKey,
      estimateHeight: estimateTranscriptRowHeight,
      measureHeight: measureTranscriptRowHeight,
      renderItem: renderTranscriptPanelRow,
    })
  );
}

function transcriptPanelRows(current: SessionGraph): TranscriptPanelRow[] {
  const rows: TranscriptPanelRow[] = [];
  current.prompts.forEach((prompt, index) => {
    rows.push({ type: "turn", prompt, promptIndex: index });
    transcriptEntriesForPrompt(prompt).forEach((entry) => rows.push({ type: "entry", entry }));
  });
  return rows;
}

function transcriptPanelRowKey(row: TranscriptPanelRow, index: number): string {
  return row.type === "turn" ? `turn-${row.prompt.id}` : `entry-${row.entry.eventIndex}-${row.entry.label}-${index}`;
}

function estimateTranscriptRowHeight(row: TranscriptPanelRow, index: number, viewportWidth: number): number {
  if (row.type === "turn") {
    return TRANSCRIPT_TURN_ROW_HEIGHT;
  }
  const textWidth = transcriptTextWidth(viewportWidth);
  const roughCharsPerLine = Math.max(36, Math.floor(textWidth / 7.2));
  const titleHeight = estimateTextLines(row.entry.title, roughCharsPerLine, 4) * TRANSCRIPT_TITLE_LINE_HEIGHT;
  const bodyHeight = estimateTextLines(row.entry.body, roughCharsPerLine, 18) * TRANSCRIPT_TEXT_LINE_HEIGHT;
  return Math.max(TRANSCRIPT_ENTRY_MIN_HEIGHT, TRANSCRIPT_ROW_VERTICAL_PADDING + titleHeight + bodyHeight + TRANSCRIPT_TEXT_HEIGHT_PAD);
}

function measureTranscriptRowHeight(row: TranscriptPanelRow, index: number, viewportWidth: number): number {
  if (row.type === "turn") {
    return TRANSCRIPT_TURN_ROW_HEIGHT;
  }
  const rowKey = transcriptPanelRowKey(row, index);
  const textWidth = transcriptTextWidth(viewportWidth);
  const widthKey = Math.max(1, Math.round(textWidth));
  const cache = transcriptTextMeasureCache.get(rowKey) ?? { heights: new Map<string, number>() };
  transcriptTextMeasureCache.set(rowKey, cache);
  if (
    (cache.title && (cache.title.text !== row.entry.title || cache.title.font !== TRANSCRIPT_TITLE_FONT)) ||
    (cache.body && (cache.body.text !== row.entry.body || cache.body.font !== TRANSCRIPT_TEXT_FONT))
  ) {
    cache.heights.clear();
  }
  const cached = cache.heights.get(String(widthKey));
  if (cached !== undefined) {
    return cached;
  }
  const titleHeight = measureTranscriptText(cache, "title", row.entry.title, TRANSCRIPT_TITLE_FONT, widthKey, TRANSCRIPT_TITLE_LINE_HEIGHT);
  const bodyHeight = measureTranscriptText(cache, "body", row.entry.body, TRANSCRIPT_TEXT_FONT, widthKey, TRANSCRIPT_TEXT_LINE_HEIGHT);
  const height = Math.max(
    TRANSCRIPT_ENTRY_MIN_HEIGHT,
    TRANSCRIPT_ROW_VERTICAL_PADDING + titleHeight + bodyHeight + TRANSCRIPT_TEXT_HEIGHT_PAD
  );
  cache.heights.set(String(widthKey), height);
  return height;
}

function pruneTranscriptMeasureCache(rows: TranscriptPanelRow[]): void {
  if (!transcriptTextMeasureCache.size) {
    return;
  }
  const rowKeys = new Set<string>();
  rows.forEach((row, index) => {
    if (row.type === "entry") {
      rowKeys.add(transcriptPanelRowKey(row, index));
    }
  });
  for (const key of transcriptTextMeasureCache.keys()) {
    if (!rowKeys.has(key)) {
      transcriptTextMeasureCache.delete(key);
    }
  }
}

function transcriptTextWidth(viewportWidth: number): number {
  return Math.max(80, viewportWidth - TRANSCRIPT_ROW_LABEL_WIDTH - TRANSCRIPT_ROW_COLUMN_GAP);
}

function measureTranscriptText(
  cache: TranscriptTextMeasureCacheEntry,
  part: "body" | "title",
  text: string,
  font: string,
  width: number,
  lineHeight: number
): number {
  if (!text) {
    return 0;
  }
  const current = cache[part];
  const prepared =
    current && current.text === text && current.font === font
      ? current.prepared
      : prepareTranscriptText(cache, part, text, font);
  const { lineCount } = layoutText(prepared, width, lineHeight);
  return Math.max(1, lineCount) * lineHeight;
}

function prepareTranscriptText(
  cache: TranscriptTextMeasureCacheEntry,
  part: "body" | "title",
  text: string,
  font: string
): PreparedText {
  const prepared = prepareText(text, font, { whiteSpace: "pre-wrap" });
  cache[part] = { text, font, prepared };
  cache.heights.clear();
  return prepared;
}

function renderTranscriptPanelRow(row: TranscriptPanelRow, index: number): HTMLElement {
  if (row.type === "entry") {
    return transcriptStep(row.entry);
  }
  const section = document.createElement("section");
  section.className = "transcript-turn-row";
  const label = document.createElement("small");
  label.textContent = `User ${row.promptIndex + 1}`;
  const title = document.createElement("strong");
  setReadableRedactionText(title, row.prompt.title);
  section.append(label, title);
  return section;
}

function transcriptEntriesForPrompt(prompt: PromptNode): TranscriptEntry[] {
  const entries: TranscriptEntry[] = [];
  promptActivityUnits(prompt, prompt.calls).forEach((unit) => {
    if (unit.type === "assistant") {
      const skillNames = skillNamesFromText(unit.message.text);
      entries.push({
        label: skillNames.length ? "Skill" : "Assistant",
        title: skillNames.length ? skillUseTitle(skillNames) : "Response",
        body: unit.message.text,
        eventIndex: unit.message.eventIndex,
        marker: skillNames.length ? "skill" : undefined,
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
  const skillNames = skillNamesForCall(call);
  const argumentText = call.argumentPreview || "No arguments logged.";
  const resultText = call.outputPreview || (call.status === "completed" ? "No result preview logged." : `Status: ${call.status}`);
  const toolLabel = skillNames.length ? "Skill" : "Tool";
  const toolTitle = skillNames.length ? `${skillUseTitle(skillNames)} (${call.status})` : `${call.name} (${call.status})`;
  return [
    { label: toolLabel, title: toolTitle, body: argumentText, eventIndex: call.eventIndex, marker: skillNames.length ? "skill" : undefined },
    { label: "Result", title: call.name, body: resultText, eventIndex: call.eventIndex, marker: skillNames.length ? "skill" : undefined },
  ];
}

function transcriptStep(entry: TranscriptEntry): HTMLElement {
  const row = document.createElement("div");
  row.className = `transcript-step ${entry.marker ?? ""}`;
  const badge = document.createElement("code");
  badge.textContent = entry.label;
  const content = document.createElement("div");
  const heading = document.createElement("strong");
  setReadableRedactionText(heading, entry.title);
  const paragraph = modeParagraph(entry.body);
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
      parserHealthVersionValue(health),
      `Source confidence: ${health.sourceDetectionConfidence}`,
      `Parsed ${health.parsedEventCount} of ${health.totalLinesRead} lines`,
      ...parserHealthTextLines([parserHealthRenderableLine(health)]),
    ]),
    modeCard("Unknown Events", parserHealthUnknownEventLines(health)),
    modeCard("Malformed And Skipped", parserHealthMalformedSkippedLines(health)),
    modeCard("Coverage", [
      `Tool calls/results: ${health.toolCallCount}/${health.toolResultCount}`,
      `File activity: ${health.fileActivityCount}`,
      `Token telemetry: ${health.tokenTelemetryAvailable ? "available" : "not logged"}`,
      `Redacted fields: ${health.redactedFieldCount}`,
      ...parserHealthTextLines([parserHealthWarningsLine(health)]),
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
  const priorityCandidates = insightPriorityCandidates(insights);
  const prioritySignals = priorityCandidates.slice(0, INSIGHTS_PRIORITY_SIGNAL_LIMIT);
  const prioritySignalCount = priorityCandidates.length;
  const fileChurnPatterns = insightFileChurnPatterns(insights);
  modePanelSummary.textContent = `${prioritySignalCount} priority signal groups / ${fileChurnPatterns.length} file-churn patterns / ${insights.suspiciousToolCalls.length} suspicious calls`;
  const fragment = document.createDocumentFragment();
  const actions = document.createElement("div");
  actions.className = "mode-actions";
  actions.append(
    modeButton("Copy Insight Summary", () => copyText(insightSummaryText(insights), "Insight summary copied"))
  );
  fragment.append(actions);
  const takeaway = modeCard("How To Read This", [
    "Insights are heuristic signals from logged events only; they are leads, not root cause.",
    "Repeated event rows are grouped so the panel shows signal categories before backing detail.",
    "Start with Priority Signals. Expand File Churn only when you need audit detail for repeated path activity.",
  ]);
  takeaway.classList.add("mode-takeaway");
  fragment.append(takeaway);
  const queue = modeCard("Priority Signals");
  queue.append(renderInspectionQueue(insights, prioritySignals, prioritySignalCount));
  fragment.append(queue);
  const fileChurn = renderFileChurnDetails(insights, fileChurnPatterns);
  if (fileChurn) {
    fragment.append(fileChurn);
  }
  const grid = document.createElement("div");
  grid.className = "mode-card-grid";
  const repeatedToolPatterns = insights.repeatedPatterns.filter((pattern) => pattern.patternType !== "file_activity");
  grid.append(
    modeCard(
      "Error Timeline",
      insights.failureChain
        ? [
            `First logged error-like event: line ${insights.failureChain.firstLoggedError.lineNumber} - ${insights.failureChain.firstLoggedError.title}`,
            `Later retry-like events: ${insights.failureChain.subsequentRetries.length}`,
            `File changes after first error: ${insights.failureChain.fileChangesAfterFirstError.length}`,
            `Final logged outcome: ${compactInsightText(insights.failureChain.finalOutcome)}`,
          ]
        : ["No logged error-like event detected."]
    ),
    modeCard("Repeated Tool Patterns", repeatedToolPatternSummaryLines(repeatedToolPatterns)),
    modeCard("Suspicious Tool Calls", suspiciousToolCallSummaryLines(insights.suspiciousToolCalls)),
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
      `Top edited: ${fileCountSummary(insights.fileImpact.filesEdited)}`,
      `Top read: ${fileCountSummary(insights.fileImpact.filesRead)}`,
      `Top referenced: ${fileCountSummary(insights.fileImpact.filesReferenced)}`,
    ]),
    modeCard("Approval And Sandbox", insights.approvalFriction.map((note) => `${note.severity}: ${note.title}`))
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
  const rawAuditTarget = selectedNodeId ? "selected event" : "session graph";
  modePanelSummary.textContent = ["Raw audit", rawAuditTarget].join(" - ");
  const payload = rawPayload ?? (selectedNodeId ? nodeById.get(selectedNodeId)?.source : current);
  const header = document.createElement("div");
  header.className = "mode-panel-header-stack";
  const warning = modeCard("Raw Privacy Warning", [
    "Raw audit JSON may include prompts, private paths, tool output, image metadata, and credentials that were intentionally hidden from safe-share summaries.",
    "Prefer Copy Safe Reference or Export safe-share reports unless you are doing local forensic review.",
  ]);
  warning.classList.add("raw-privacy-notice");
  const actions = document.createElement("div");
  actions.className = "mode-actions";
  actions.append(
    modeButton("Copy Safe Reference", () => copySelectedSafeReference()),
    modeButton("Copy Safe Share Summary", () => copyText(copySafeShareSummaryForGraph(current), "Safe-share summary copied"))
  );
  header.append(warning, actions);
  renderRawPayload(payload ?? current.totals, header);
}

function renderExportModePanel(): void {
  const current = currentGraph();
  modePanelSummary.textContent = "Safe-share exports";
  const shell = document.createElement("div");
  shell.className = "mode-panel-header-stack";
  const grid = document.createElement("div");
  grid.className = "mode-card-grid";
  grid.append(
    modeCard("Safe Share Workflow", [
      "Start with Copy Safe Share Summary for a compact shareable status update.",
      "Use redacted HTML/Markdown/JSON exports for review artifacts; keep raw logs local unless a human explicitly approves sharing them.",
      "Before forwarding externally, scan the generated artifact for private paths, prompts, image payloads, and secrets.",
    ]),
    modeCard("Redacted Report Commands", [
      `perlustron export ${current.sessionPath} --format html --redacted -o report.html`,
      `perlustron export ${current.sessionPath} --format markdown --redacted -o report.md`,
      `perlustron export ${current.sessionPath} --format json --redacted -o normalized-trace-redacted.json`,
    ]),
    modeCard("Schema Drift", [
      `perlustron unknowns ${current.sessionPath} --redacted -o unknowns-redacted.json`,
      `perlustron fixture-report ${current.sessionPath} --redacted -o fixture-report.md`,
    ])
  );
  const actions = document.createElement("div");
  actions.className = "mode-actions";
  actions.append(
    modeButton("Copy Safe Share Summary", () => copyText(copySafeShareSummaryForGraph(current), "Safe-share summary copied")),
    modeButton("Export Unknowns JSON", () => exportUnknownsJson()),
    modeButton("Copy Schema Issue", () => copySchemaDriftIssueBody()),
    modeButton("Export Fixture Report", () => exportFixtureReportMarkdown())
  );
  shell.append(actions, grid);
  modePanelContent.replaceChildren(shell);
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
      setReadableRedactionText(item, line);
      list.append(item);
    });
    card.append(list);
  }
  return card;
}

function modeParagraph(text: string): HTMLElement {
  const paragraph = document.createElement("p");
  setReadableRedactionText(paragraph, text);
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

function insightFileChurnPatterns(insights: TraceInsights): TraceInsights["repeatedPatterns"] {
  return insights.repeatedPatterns.filter((pattern) => pattern.patternType === "file_activity");
}

function isPriorityInspectionItem(item: InspectionQueueItem): boolean {
  return item.title !== INSIGHT_TITLE_REPEATED_FILE_ACTIVITY && (item.severity === "high" || item.severity === "warning");
}

function insightPriorityCandidateItems(insights: TraceInsights): InspectionQueueItem[] {
  const priorityItems = insights.inspectionQueue.filter(isPriorityInspectionItem);
  if (priorityItems.length) {
    return priorityItems;
  }
  return insights.inspectionQueue.filter((item) => item.title !== INSIGHT_TITLE_REPEATED_FILE_ACTIVITY);
}

function insightPriorityCandidates(insights: TraceInsights): InsightPriorityGroup[] {
  const groups = new Map<string, InspectionQueueItem[]>();
  insightPriorityCandidateItems(insights).forEach((item) => {
    const key = insightPriorityGroupKey(item);
    const existing = groups.get(key);
    if (existing) {
      existing.push(item);
    } else {
      groups.set(key, [item]);
    }
  });
  return Array.from(groups.values()).map(insightPriorityGroup);
}

function insightPriorityItems(insights: TraceInsights): InsightPriorityGroup[] {
  return insightPriorityCandidates(insights).slice(0, INSIGHTS_PRIORITY_SIGNAL_LIMIT);
}

function insightPriorityGroupKey(item: InspectionQueueItem): string {
  if (item.title === INSIGHT_TITLE_SUSPICIOUS_TOOL_CALL) {
    return "suspicious-tool-calls";
  }
  if (item.title === INSIGHT_TITLE_REPEATED_TOOL_CALL_PATTERN) {
    return "repeated-tool-call-patterns";
  }
  return item.title;
}

function insightPriorityGroup(items: InspectionQueueItem[]): InsightPriorityGroup {
  const representative = items[0];
  return {
    title: representative.title,
    severity: highestSeverity(items),
    confidence: representative.confidence,
    directness: representative.directness,
    summary: insightPriorityGroupSummary(representative, items),
    explanation: insightPriorityGroupExplanation(representative, items),
    lineNumbers: representative.lineNumbers,
    redactionSafeSummary: insightPriorityGroupSafeSummary(representative, items),
    representative,
    count: items.length,
  };
}

function highestSeverity(items: InspectionQueueItem[]): string {
  return items.reduce((highest, item) => {
    const highestRank = insightSeverityRank(highest);
    const itemRank = insightSeverityRank(item.severity);
    return itemRank < highestRank ? item.severity : highest;
  }, items[0]?.severity ?? "info");
}

function insightSeverityRank(severity: string): number {
  const rank = INSIGHT_SEVERITY_ORDER.indexOf(severity as (typeof INSIGHT_SEVERITY_ORDER)[number]);
  return rank === -1 ? INSIGHT_SEVERITY_ORDER.length : rank;
}

function insightPriorityGroupSummary(representative: InspectionQueueItem, items: InspectionQueueItem[]): string {
  if (items.length === 1) {
    return representative.summary;
  }
  if (representative.title === INSIGHT_TITLE_SUSPICIOUS_TOOL_CALL) {
    return `${formatNumber(items.length)} suspicious tool-call records grouped; first example: ${representative.summary}`;
  }
  if (representative.title === INSIGHT_TITLE_REPEATED_TOOL_CALL_PATTERN) {
    return `${formatNumber(items.length)} repeated tool-call pattern records grouped; first example: ${representative.summary}`;
  }
  return `${formatNumber(items.length)} related ${representative.title.toLowerCase()} records grouped; first example: ${representative.summary}`;
}

function insightPriorityGroupSafeSummary(representative: InspectionQueueItem, items: InspectionQueueItem[]): string {
  const safe = representative.redactionSafeSummary || representative.summary;
  if (items.length === 1) {
    return safe;
  }
  return `${formatNumber(items.length)} grouped records; first example: ${safe}`;
}

function insightPriorityGroupExplanation(representative: InspectionQueueItem, items: InspectionQueueItem[]): string {
  if (items.length === 1) {
    return representative.explanation;
  }
  return `${representative.explanation} ${formatNumber(items.length)} matching rows were grouped to avoid repeating the same signal in the main list.`;
}

function insightPlainReason(item: Pick<InsightPriorityGroup, "title"> | InspectionQueueItem): string {
  if (item.title === "First logged error-like event") {
    return "Start here because this is the earliest logged event that looked broken.";
  }
  if (item.title === INSIGHT_TITLE_SUSPICIOUS_TOOL_CALL) {
    return "One or more tool records look failed, missing, long-running, empty, or error-like.";
  }
  if (item.title === INSIGHT_TITLE_REPEATED_TOOL_CALL_PATTERN) {
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

function limitedInsightLines<T>(items: T[], render: (item: T) => string, limit = INSIGHTS_CARD_ITEM_LIMIT): string[] {
  const lines = items.slice(0, limit).map(render);
  if (items.length > limit) {
    lines.push(`Showing ${formatNumber(limit)} of ${formatNumber(items.length)} items.`);
  }
  return lines;
}

function compactInsightText(text: string, limit = INSIGHTS_TEXT_PREVIEW_LIMIT): string {
  const compact = text.replace(/::git-[^}]+}/g, "").replace(/\s+/g, " ").trim();
  if (!compact) {
    return "none logged";
  }
  return compact.length > limit ? `${compact.slice(0, Math.max(0, limit - 3)).trimEnd()}...` : compact;
}

function repeatedToolPatternSummaryLines(patterns: TraceInsights["repeatedPatterns"]): string[] {
  if (!patterns.length) {
    return ["No repeated tool-call patterns detected."];
  }
  const grouped = new Map<string, { label: string; count: number; patterns: number; firstLine: number; lastLine: number }>();
  patterns.forEach((pattern) => {
    const label = repeatedToolPatternFamily(pattern.key);
    const existing = grouped.get(label);
    if (existing) {
      existing.count += pattern.count;
      existing.patterns += 1;
      existing.firstLine = Math.min(existing.firstLine, pattern.firstLine);
      existing.lastLine = Math.max(existing.lastLine, pattern.lastLine);
    } else {
      grouped.set(label, {
        label,
        count: pattern.count,
        patterns: 1,
        firstLine: pattern.firstLine,
        lastLine: pattern.lastLine,
      });
    }
  });
  const summaries = Array.from(grouped.values()).sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  return limitedInsightLines(
    summaries,
    (group) =>
      `${group.label}: ${formatNumber(group.count)} repeated calls across ${formatNumber(group.patterns)} pattern groups, lines ${group.firstLine}-${group.lastLine}`
  );
}

function repeatedToolPatternFamily(key: string): string {
  const body = key.startsWith("tool:") ? key.slice(5) : key;
  return body.split(/[:.]/)[0] || "tool";
}

function suspiciousToolCallSummaryLines(calls: TraceInsights["suspiciousToolCalls"]): string[] {
  if (!calls.length) {
    return ["No suspicious tool calls detected."];
  }
  const grouped = new Map<string, { reason: string; count: number; tools: Map<string, number> }>();
  calls.forEach((call) => {
    const existing = grouped.get(call.reason);
    const group = existing ?? { reason: call.reason, count: 0, tools: new Map<string, number>() };
    group.count += 1;
    group.tools.set(call.toolName, (group.tools.get(call.toolName) ?? 0) + 1);
    grouped.set(call.reason, group);
  });
  const summaries = Array.from(grouped.values()).sort((a, b) => b.count - a.count || a.reason.localeCompare(b.reason));
  return limitedInsightLines(summaries, (group) => {
    const tools = Array.from(group.tools.entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 3)
      .map(([tool, count]) => `${tool} ${formatNumber(count)}`)
      .join(", ");
    return `${group.reason}: ${formatNumber(group.count)} calls${tools ? ` (${tools})` : ""}`;
  });
}

function fileCountSummary(files: TraceInsights["fileImpact"]["filesEdited"], limit = 3): string {
  if (!files.length) {
    return "none";
  }
  return files
    .slice()
    .sort((a, b) => b.count - a.count || a.path.localeCompare(b.path))
    .slice(0, limit)
    .map((file) => `${shortPath(file.path) || file.path} (${formatNumber(file.count)})`)
    .join(", ");
}

function renderInspectionQueue(insights: TraceInsights, items = insightPriorityItems(insights), totalPriorityItems = insightPriorityCandidates(insights).length): HTMLElement {
  if (!items.length) {
    return modeEmpty("No priority signals detected. Parser health, file churn, and raw inspection remain available for audit.");
  }
  const container = document.createElement("div");
  const intro = modeParagraph(
    totalPriorityItems > items.length
      ? `Showing ${formatNumber(items.length)} of ${formatNumber(totalPriorityItems)} grouped priority signals. Lower-priority file churn is collapsed below.`
      : "Showing grouped priority signals from logged evidence. These are leads for inspection, not root-cause conclusions."
  );
  const list = document.createElement("div");
  list.className = "mode-linked-list";
  items.forEach((item, index) => {
    const row = document.createElement("article");
    row.className = `mode-linked-row severity-${item.severity}`;
    const body = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = `${index + 1}. ${item.count > 1 ? `${item.title} (${formatNumber(item.count)})` : item.title}`;
    const detail = document.createElement("small");
    setReadableRedactionText(detail, `Evidence: ${item.redactionSafeSummary || item.summary} - ${item.confidence} - ${item.directness}`);
    const why = document.createElement("p");
    why.textContent = `Why it matters: ${insightPlainReason(item)}`;
    const detected = document.createElement("p");
    setReadableRedactionText(detected, `How detected: ${item.explanation}`);
    body.append(title, why, detail, detected);
    const actions = document.createElement("div");
    actions.className = "mode-row-actions";
    const firstLine = item.lineNumbers[0];
    actions.append(
      modeButton("Open Raw", () => focusEventByLine(firstLine, item.title, item.representative)),
      modeButton("Copy Ref", () => copyText(`line ${firstLine ?? "n/a"} - ${item.redactionSafeSummary}`, "Line reference copied"))
    );
    row.append(body, actions);
    list.append(row);
  });
  container.append(intro, list);
  return container;
}

function renderFileChurnDetails(insights: TraceInsights, patterns = insightFileChurnPatterns(insights)): HTMLElement | null {
  const repeatedFiles = insights.fileImpact.repeatedFiles;
  if (!patterns.length && !repeatedFiles.length) {
    return null;
  }
  const details = document.createElement("details");
  details.className = "mode-details file-churn-details";
  const summary = document.createElement("summary");
  summary.textContent = patterns.length
    ? `File Churn (${formatNumber(patterns.length)} repeated file patterns)`
    : `File Churn (${formatNumber(repeatedFiles.length)} repeated files)`;
  details.append(summary);
  details.append(modeParagraph("Repeated file activity is audit context. Expand it when you need to inspect which paths dominated the run."));
  const lines = patterns.length
    ? limitedInsightLines(
        patterns,
        (pattern) => `${pattern.key} - ${formatNumber(pattern.count)} mentions, lines ${pattern.firstLine}-${pattern.lastLine}`,
        INSIGHTS_FILE_CHURN_LIMIT
      )
    : limitedInsightLines(
        repeatedFiles,
        (file) => `${file.path} - ${formatNumber(file.count)} mentions, lines ${file.firstLine}-${file.lastLine}`,
        INSIGHTS_FILE_CHURN_LIMIT
      );
  if (lines.length) {
    const list = document.createElement("ul");
    lines.forEach((line) => {
      const item = document.createElement("li");
      setReadableRedactionText(item, line);
      list.append(item);
    });
    details.append(list);
  }
  return details;
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
    setReadableRedactionText(summary, cluster.summary);
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
    setReadableRedactionText(title, sample.title);
    const detail = document.createElement("small");
    setReadableRedactionText(detail, `line ${sample.lineNumber} - ${sample.detail}`);
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
  showEvidenceFallbackPanel({
    title,
    payload,
    detail,
    activeAppMode,
    modePanelSummary,
    modePanelContent,
    modeCard,
    modeButton,
    setRawModePayload,
    selectAppMode,
    renderRawPayload,
    cleanupModePanelRender,
    showEvidenceFallback,
  });
}

function focusEventByLine(lineNumber: number | null | undefined, title: string, payload: unknown, destination: AppMode = "raw"): void {
  focusEvidenceByLine({
    lineNumber,
    title,
    payload,
    destination,
    modeTimelineRows,
    inspectModeRow,
    openSelectedEventMode,
    selectAppMode,
    setRawModePayload,
    setFocusedEvidenceLine,
    showEvidenceFallback,
  });
}

function parserHealthSummaryText(current: SessionGraph): string {
  const health = current.parserHealth;
  return [
    `Perlustron parser health for ${shortPath(current.sessionPath)}`,
    `Parser: ${parserHealthVersionValue(health)}`,
    `Source: ${health.source} (${health.sourceDetectionConfidence})`,
    `Lines: ${health.totalLinesRead}`,
    `Parsed/renderable: ${health.parsedEventCount}/${health.renderableEventCount}`,
    ...parserHealthTextLines(parserHealthIssueLines(health, parserHealthNumber, "Skipped large payloads")),
  ].join("\n");
}

function insightSummaryText(insights: TraceInsights): string {
  const priorityItems = insightPriorityItems(insights);
  const priorityCount = insightPriorityCandidates(insights).length;
  const fileChurnCount = insightFileChurnPatterns(insights).length;
  const lines = [
    "Perlustron insights",
    "Insights are heuristic signals from logged events only; they are leads, not root cause.",
    "Priority signal groups",
  ];
  if (!priorityItems.length) {
    lines.push("- No priority signals detected.");
  } else {
    priorityItems.forEach((item, index) => {
      const countLabel = item.count > 1 ? ` (${formatNumber(item.count)} grouped)` : "";
      lines.push(`${index + 1}. [${item.severity}] ${item.title}${countLabel}: ${item.redactionSafeSummary || item.summary}`);
    });
    if (priorityCount > priorityItems.length) {
      lines.push(`Showing ${formatNumber(priorityItems.length)} of ${formatNumber(priorityCount)} priority signal groups.`);
    }
  }
  lines.push(`File-churn patterns: ${fileChurnCount}`);
  lines.push(`Suspicious calls: ${insights.suspiciousToolCalls.length}`);
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
  const preview = previewClipboardText(text);
  void navigator.clipboard
    .writeText(text)
    .then(() => showCopyFeedback(title, preview))
    .catch((error) => showCopyFeedback("Copy failed", errorMessage(error), "error"));
}

function previewClipboardText(text: string): string {
  const preview = redactionSafeClipboardText(text).replace(/\s+/g, " ").trim();
  if (!preview) {
    return "Clipboard payload was empty.";
  }
  return preview.length > 140 ? `${preview.slice(0, 137).trimEnd()}...` : preview;
}

function showCopyFeedback(title: string, detail: string, tone: "success" | "error" = "success"): void {
  if (copyFeedbackTimer) {
    window.clearTimeout(copyFeedbackTimer);
  }
  const heading = document.createElement("strong");
  heading.textContent = title;
  const body = document.createElement("small");
  body.textContent = detail;
  copyFeedback.classList.toggle("error", tone === "error");
  copyFeedback.replaceChildren(heading, body);
  copyFeedback.hidden = false;
  copyFeedbackTimer = window.setTimeout(() => {
    copyFeedback.hidden = true;
    copyFeedbackTimer = null;
  }, 3600);
}

function errorishText(text: string): boolean {
  return /\b(error|failed|failure|exception|panic|denied|permission|timeout|traceback|not found|exit code|fatal|forbidden|sandbox)\b/i.test(text);
}

function selectAppMode(nextMode: AppMode): void {
  activeAppMode = nextMode;
  syncSessionUrl();
  syncAppModeControls();
  syncModePanelVisibility();
  if (nextMode !== "map") {
    hideEventPopup();
  }
  if (nextMode === "map") {
    resumeCameraAutoFollow();
    exitInspectMode({ preserveCamera: true });
    frameOverview();
    return;
  }
  renderActiveModePanel();
  if (nextMode === "summary") {
    return;
  }
  if (nextMode === "timeline") {
    return;
  }
  if (nextMode === "transcript") {
    return;
  }
  if (nextMode === "health") {
    openSyntheticEventContext("HEALTH", "Parser health", healthModeText());
    return;
  }
  if (nextMode === "insights") {
    openSyntheticEventContext("INSIGHTS", "Debugging insights", insightsModeText());
    return;
  }
  if (nextMode === "raw") {
    return;
  }
  if (nextMode === "diff") {
    exitInspectMode({ preserveCamera: true });
    return;
  }
  if (nextMode === "settings") {
    return;
  }
  openSyntheticEventContext("EXPORT", "Export reports", exportModeText());
}

function renderSearchAwareModePanel(): void {
  updateSearchStatus();
  if (activeAppMode !== "transcript") {
    renderActiveModePanel();
  }
}

function updateSearchStatus(totalEvents?: number, matchingEvents?: number): void {
  searchStatus.classList.remove("has-results", "no-results");
  if (!searchTerm) {
    searchStatus.textContent = "Search filters Timeline evidence; type to see matching events.";
    return;
  }
  if (!graph) {
    searchStatus.textContent = `Searching for "${searchTerm}" once session data loads.`;
    return;
  }
  if (activeAppMode === "timeline") {
    const total = totalEvents ?? modeTimelineRows().length;
    const matching = matchingEvents ?? modeTimelineRows().filter(modeRowMatchesSearchTerm).length;
    searchStatus.classList.add(matching ? "has-results" : "no-results");
    searchStatus.textContent = matching
      ? `Search "${searchTerm}" matched ${formatNumber(matching)} of ${formatNumber(total)} Timeline events.`
      : `No Timeline events match "${searchTerm}". Clear search or try another event, file, role, or tool term.`;
    return;
  }
  const matchingNodes = nodes.filter(nodeMatchesSearch).length;
  searchStatus.classList.add(matchingNodes ? "has-results" : "no-results");
  searchStatus.textContent = matchingNodes
    ? `Search "${searchTerm}" highlights ${formatNumber(matchingNodes)} map events; open Timeline for event-level results.`
    : `No map events match "${searchTerm}"; open Timeline or clear search to continue.`;
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
  graph.prompts.forEach((prompt, index) => {
    lines.push(`User ${index + 1}: ${prompt.title}`);
    const entries = transcriptEntriesForPrompt(prompt).filter((entry) => entry.label !== "Prompt");
    entries.forEach((entry) => {
      lines.push(`  ${entry.label}: ${entry.title} - ${entry.body}`);
    });
  });
  return lines.join("\n") || "No transcript events were parsed.";
}

function healthModeText(): string {
  if (!graph) {
    return "Waiting for session data.";
  }
  return parserHealthModeTextLines(graph.parserHealth).join("\n");
}

function insightsModeText(): string {
  const insights = graph?.insights;
  if (!graph || !insights) {
    return "Waiting for session insights.";
  }
  const priorityItems = insightPriorityItems(insights);
  const priorityCount = insightPriorityCandidates(insights).length;
  const fileChurnCount = insightFileChurnPatterns(insights).length;
  const lines = [
    "Insights are heuristic signals from logged events only. Hidden or unlogged reasoning cannot be recovered.",
    "Repeated event rows are grouped before backing detail is summarized.",
  ];
  lines.push(`Priority signal groups: ${formatNumber(priorityCount)}`);
  priorityItems.forEach((item, index) => {
    const countLabel = item.count > 1 ? ` (${formatNumber(item.count)} grouped)` : "";
    lines.push(`  ${index + 1}. [${item.severity}] ${item.title}${countLabel}: ${item.redactionSafeSummary || item.summary}`);
  });
  if (priorityCount > priorityItems.length) {
    lines.push(`  Showing ${formatNumber(priorityItems.length)} of ${formatNumber(priorityCount)} priority signal groups.`);
  }
  if (insights.failureChain) {
    lines.push(
      `First logged error-like event: line ${insights.failureChain.firstLoggedError.lineNumber} - ${insights.failureChain.firstLoggedError.title}`
    );
    lines.push(`Final logged outcome: ${compactInsightText(insights.failureChain.finalOutcome)}`);
  } else {
    lines.push("First logged error-like event: none detected");
  }
  const repeatedToolPatterns = insights.repeatedPatterns.filter((pattern) => pattern.patternType !== "file_activity");
  lines.push(`Repeated tool patterns: ${formatNumber(repeatedToolPatterns.length)}`);
  repeatedToolPatternSummaryLines(repeatedToolPatterns).forEach((line) => lines.push(`  ${line}`));
  lines.push(`File-churn patterns: ${formatNumber(fileChurnCount)}`);
  lines.push(`Suspicious calls: ${formatNumber(insights.suspiciousToolCalls.length)}`);
  suspiciousToolCallSummaryLines(insights.suspiciousToolCalls).forEach((line) => lines.push(`  ${line}`));
  lines.push(`Context pressure: ${insights.contextPressure.status}`);
  lines.push(
    `File impact: ${insights.fileImpact.filesEdited.length} edited, ${insights.fileImpact.filesRead.length} read, ${insights.fileImpact.filesReferenced.length} referenced`
  );
  lines.push(`Approval/sandbox friction: ${insights.approvalFriction.length}`);
  return lines.join("\n");
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
    "r raw",
    "e export",
    "Esc close inspection",
  ].join("\n");
}

function contextPressureSummary(telemetry: TokenTelemetry | undefined): string {
  if (!telemetry?.latestTotalTokens) {
    return "no token telemetry";
  }
  const percent = telemetry.latestContextPercent === null ? "n/a" : `${Math.round(telemetry.latestContextPercent)}%`;
  const window = telemetry.contextWindow ? ` / ${formatNumber(telemetry.contextWindow)}` : "";
  return `${formatNumber(telemetry.latestTotalTokens)}${window} tokens (${percent})`;
}

function enterInspectMode(promptId: string, streamNode: SceneNode | undefined | null = nodeById.get(promptId)): void {
  activePromptId = promptId;
  mode = "inspect";
  setLayoutTargets();
  openEventContext(streamNode);
}

function exitInspectMode({ preserveCamera = false }: { preserveCamera?: boolean } = {}): void {
  if (mode !== "inspect") {
    return;
  }
  mode = "overview";
  setLayoutTargets({ preserveCamera });
}

function setupControls() {
  syncSourceButtons();
  syncAppModeControls();
  syncModePanelVisibility();
  syncSessionUrl();

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectAppMode(oneOf(APP_MODES, button.dataset.appMode, "map"));
    });
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
    if (isTailing) {
      resumeCameraAutoFollow();
    }
    updateLiveChrome();
    if (isTailing) {
      startLiveUpdates();
    } else {
      cancelLiveCameraFollow();
      stopLiveUpdates();
    }
  });

  searchInput.addEventListener("input", () => {
    searchTerm = searchInput.value.trim().toLowerCase();
    syncInstanceColors();
    renderSearchAwareModePanel();
  });
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      searchInput.value = "";
      searchTerm = "";
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

  viewActionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = oneOf(VIEW_ACTIONS, button.dataset.viewAction, "two-d");
      if (action === "zoom-in") {
        zoomCamera(1);
      } else if (action === "zoom-out") {
        zoomCamera(-1);
      } else if (action === "overview") {
        exitInspectMode();
        switchOverviewCameraMode("three-d");
      } else {
        toggleOverviewCameraMode();
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

  nodeRoleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectNodeRole(oneOf(NODE_ROLES, button.dataset.nodeRole, "prompt"));
    });
  });

  settingsButton.addEventListener("click", () => {
    selectAppMode("settings");
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
      openSyntheticEventContext("SHORTCUTS", "Keyboard shortcuts", shortcutsText());
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
  const wasActive = activeCameraFlyKeys.delete(event.code);
  if (wasActive) {
    event.preventDefault();
  }
}

function shouldHandleCameraFlyKey(event: KeyboardEvent): boolean {
  const isVerticalKey = isCameraFlyVerticalCode(event.code);
  if (isVerticalKey && (activeAppMode !== "map" || isKeyboardControlTarget(event.target))) {
    return false;
  }
  const allowsCtrlModifier = isVerticalKey || (activeAppMode === "map" && isCameraFlyDownActive());
  return (
    isCameraFlyCode(event.code) &&
    (!event.ctrlKey || allowsCtrlModifier) &&
    !event.metaKey &&
    !event.altKey &&
    !isTextEntryTarget(event.target)
  );
}

function isCameraFlyCode(code: string): boolean {
  return isCameraFlyMoveCode(code) || isCameraFlyVerticalCode(code) || CAMERA_FLY_FAST_KEY_CODES.has(code);
}

function isCameraFlyMoveCode(code: string): boolean {
  return CAMERA_FLY_MOVE_KEY_CODES.has(code);
}

function isCameraFlyVerticalCode(code: string): boolean {
  return code === CAMERA_FLY_UP_KEY_CODE || isCameraFlyDownCode(code);
}

function isCameraFlyDownCode(code: string): boolean {
  return CAMERA_FLY_DOWN_KEY_CODES.has(code);
}

function isCameraFlyFastActive(): boolean {
  return activeCameraFlyKeys.has("ShiftLeft") || activeCameraFlyKeys.has("ShiftRight");
}

function isCameraFlyDownActive(): boolean {
  return activeCameraFlyKeys.has("ControlLeft") || activeCameraFlyKeys.has("ControlRight");
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

function isKeyboardControlTarget(target: EventTarget | null): boolean {
  return (
    target instanceof HTMLElement &&
    (isTextEntryTarget(target) || Boolean(target.closest("button, select, a[href]")))
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

function zoomCamera(steps: number): void {
  if (Math.abs(steps) < 0.001) {
    return;
  }
  markManualCameraNavigation();
  const units = steps * cameraZoomStepSize();
  camera.getWorldDirection(cameraFlyForward);
  camera.position.addScaledVector(cameraFlyForward, units);
  controls.target.addScaledVector(cameraFlyForward, units);
  controls.update();
}

function cameraZoomStepSize(): number {
  return Math.min(CAMERA_ZOOM_MAX_UNIT, Math.max(CAMERA_ZOOM_MIN_UNIT, cameraFloorViewDistance() * CAMERA_ZOOM_DISTANCE_FACTOR));
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
  openEventContext(next);
}

function orderedSelectableNodes(): SceneNode[] {
  const selectableNodes = mode === "inspect" && activePromptId ? buildInspectLayout(activePromptId).visibleNodes : nodes;
  return selectableNodes
    .filter((node) => nodeVisibleInCurrentView(node) && (node.type !== "prompt" || node.promptId === activePromptId || mode === "overview"))
    .sort(inspectNodeSort);
}

function selectMetric(metric: Metric): void {
  selectMapFilter({ kind: "metric", metric });
}

function selectNodeRole(role: NodeRole): void {
  selectMapFilter({ kind: "role", role });
}

function selectMapFilter(filter: MapFilter): void {
  if (!mapFilterMatches(activeMapFilter, filter) && mapFilterCount(filter) <= 0) {
    syncMapFilterControls();
    return;
  }
  activeMapFilter = mapFilterMatches(activeMapFilter, filter) ? null : filter;
  refreshMapFilterView();
}

function mapFilterMatches(left: MapFilter | null, right: MapFilter): boolean {
  if (!left || left.kind !== right.kind) {
    return false;
  }
  if (left.kind === "metric" && right.kind === "metric") {
    return left.metric === right.metric;
  }
  return left.kind === "role" && right.kind === "role" && left.role === right.role;
}

function refreshMapFilterView(): void {
  syncMapFilterControls();
  if (mode === "inspect") {
    mode = "overview";
    activePromptId = null;
    setLayoutTargets({ preserveCamera: true });
  } else {
    refreshActiveConnectors();
    updateConnectorGeometry();
    updatePointMarkers();
  }
  syncInstanceColors();
}

function syncMapFilterControls(mapMetrics: MapMetricCounts = collectMapMetricCounts()): void {
  if (activeMapFilter && mapFilterCount(activeMapFilter, mapMetrics) <= 0) {
    activeMapFilter = null;
  }

  const filterActive = Boolean(activeMapFilter);
  sceneFrame.classList.toggle("map-filter-active", filterActive);
  mapLiveHud.classList.toggle("filter-active", filterActive);
  syncMapFilterButtons(mapMetrics);

  if (!activeMapFilter) {
    const totalVisibleNodes = nodes.filter(nodeVisibleInCurrentMode).length;
    mapFilterStatus.textContent = `${formatNumber(totalVisibleNodes)} map nodes shown. Click a chip to isolate a role or metric.`;
    return;
  }

  const label = mapFilterLabel(activeMapFilter);
  const count = mapFilterCount(activeMapFilter, mapMetrics);
  mapFilterStatus.textContent = `Filtering to ${label}: ${formatNumber(count)} matching nodes shown; other map nodes hidden. Click ${label} again to clear.`;
}

function syncMapFilterButtons(mapMetrics: MapMetricCounts = collectMapMetricCounts()): void {
  [...metricButtons, ...nodeRoleButtons].forEach((button) => {
    const filter = mapFilterForButton(button);
    if (!filter) {
      return;
    }
    const active = mapFilterMatches(activeMapFilter, filter);
    const count = mapFilterButtonCount(button, mapMetrics);
    const label = mapFilterLabel(filter);
    const countLabel = `${formatNumber(count)} matching ${count === 1 ? "node" : "nodes"}`;
    button.classList.toggle("active", active);
    button.classList.toggle("map-filter-empty", count <= 0);
    button.setAttribute("aria-pressed", String(active));
    button.disabled = count <= 0;
    button.title = count <= 0
      ? `No ${label.toLowerCase()} in this map`
      : active
        ? `Clear ${label} map filter (${countLabel})`
        : `Show only ${label} (${countLabel})`;
    button.setAttribute(
      "aria-label",
      count <= 0
        ? `No ${label} in this map`
        : active
          ? `Clear ${label} filter; ${countLabel} currently shown`
          : `Filter map to ${label}; ${countLabel}`
    );
  });
}

function mapFilterButtonCount(button: HTMLButtonElement, mapMetrics: MapMetricCounts = collectMapMetricCounts()): number {
  const filter = mapFilterForButton(button);
  return filter ? mapFilterCount(filter, mapMetrics) : 0;
}

function mapFilterForButton(button: HTMLButtonElement): MapFilter | null {
  const metric = button.dataset.metric;
  if (isMetricValue(metric)) {
    return { kind: "metric", metric };
  }
  const role = button.dataset.nodeRole;
  if (isNodeRoleValue(role)) {
    return { kind: "role", role };
  }
  return null;
}

function isMetricValue(value: string | undefined): value is Metric {
  return value !== undefined && (METRICS as readonly string[]).includes(value);
}

function isNodeRoleValue(value: string | undefined): value is NodeRole {
  return value !== undefined && (NODE_ROLES as readonly string[]).includes(value);
}

function mapFilterCount(filter: MapFilter, mapMetrics: MapMetricCounts = collectMapMetricCounts()): number {
  return filter.kind === "metric" ? mapMetrics[filter.metric] : mapMetrics[NODE_ROLE_METRICS[filter.role]];
}

function mapFilterLabel(filter: MapFilter): string {
  return filter.kind === "metric" ? MAP_METRIC_LABELS[filter.metric] : MAP_ROLE_LABELS[filter.role];
}

function nodeMatchesActiveMapFilter(node: SceneNode): boolean {
  if (!activeMapFilter) {
    return true;
  }
  return activeMapFilter.kind === "metric"
    ? nodeMatchesMetric(node, activeMapFilter.metric)
    : nodeMatchesRole(node, activeMapFilter.role);
}

function nodeMatchesRole(node: SceneNode, role: NodeRole | null): boolean {
  if (!role) {
    return true;
  }
  if (node.type === "prompt") {
    if (role === "prompt") {
      return true;
    }
    return rolesByPromptId.get(node.id)?.has(role) ?? false;
  }
  if (role === "prompt") {
    return false;
  }
  return directNodeRole(node) === role;
}

function directNodeRole(node: SceneNode): NodeRole | null {
  if (node.type === "prompt") {
    return "prompt";
  }
  if (node.type === "message") {
    return "message";
  }
  if (node.type === "call" && isCallNodeRole(node.kind)) {
    return node.kind;
  }
  return null;
}

function isCallNodeRole(kind: string): kind is CallNodeRole {
  return (CALL_NODE_ROLES as readonly string[]).includes(kind);
}

function nodeMatchesMetric(node: SceneNode, metric: Metric | null): boolean {
  if (!metric) {
    return true;
  }
  if (metric === "compaction") {
    return node.type === "compaction";
  }
  if (metric === "skill") {
    return nodeIsSkillUse(node);
  }
  if (node.type === "compaction") {
    return false;
  }
  if (node.type === "prompt") {
    return (nodesByPromptId.get(node.id) || []).some(
      (child) => child.id !== node.id && nodeVisibleInCurrentMode(child) && nodeMatchesMetric(child, metric)
    );
  }
  if (node.type === "fileChange") {
    return fileChangeMatchesMetric(node.source, metric);
  }
  if (node.type === "message") {
    return false;
  }
  return callMatchesMetric(node.source, metric);
}

function fileChangeMatchesMetric(change: FileChangeNode, metric: Metric): boolean {
  if (metric === "file") {
    return true;
  }
  if (metric === "diff") {
    const text = fileChangeSearchText(change).toLowerCase();
    return normalizedFileChangeType(change) !== "add" || text.includes("diff") || text.includes("@@");
  }
  return false;
}

function fileChangeSearchText(change: FileChangeNode): string {
  return `${normalizedFileChangeType(change)} ${change.path} ${change.preview} ${change.detail}`;
}

function callMatchesMetric(call: CallNode, metric: Metric): boolean {
  if (metric === "skill") {
    return call.kind.toLowerCase() === "skill" || skillNamesForCall(call).length > 0;
  }
  if (metric === "long") {
    return isLongCall(call);
  }
  if (metric === "error") {
    const kind = call.kind.toLowerCase();
    const status = call.status.toLowerCase();
    return kind === "error" || errorishText(status);
  }
  if (metric === "file") {
    return callNameMatches(call.name, ["file", "read", "write", "edit", "multiedit", "grep", "glob", "ls", "apply_patch"]);
  }
  if (metric === "diff") {
    return callNameMatches(call.name, ["diff", "apply_patch"]);
  }
  if (metric === "artifact") {
    const kind = call.kind.toLowerCase();
    return kind === "artifact" || callNameMatches(call.name, ["artifact"]);
  }
  return false;
}

function isPatchCall(call: Pick<CallNode, "name">): boolean {
  return callNameMatches(call.name, ["apply_patch"]);
}

function isLongCall(call: Pick<CallNode, "durationMs">): boolean {
  return call.durationMs !== null && call.durationMs >= LONG_CALL_DURATION_MS;
}

function callNameMatches(callName: string, tokens: readonly string[]): boolean {
  const normalizedCallName = callName.toLowerCase();
  return tokens.some((token) => {
    if (normalizedCallName === token) {
      return true;
    }
    return new RegExp(`(^|[._:-])${token}([._:-]|$)`).test(normalizedCallName);
  });
}

function nodeMatchesSearch(node: SceneNode): boolean {
  if (!searchTerm) {
    return true;
  }
  return `${node.kind} ${node.title} ${node.body}`.toLowerCase().includes(searchTerm);
}

function syncSelectedSource(): void {
  const selected = selectedNodeId ? nodeById.get(selectedNodeId) : null;
  if (selected && isEventPopupVisible()) {
    openEventContext(selected, { skipStableRender: true });
  }
}

function openSyntheticEventContext(kind: string, title: string, body: string): void {
  selectedNodeId = null;
  eventContextRenderedSelection = null;
  clearRawModePayload();
  showEventPopup();
  syncInstanceColors();
  eventPopup.classList.remove("prompt-context");
  contextEventTitle.textContent = kind;
  setEventContextTitle(title, "Selection");
  turnNumber.textContent = "Control surface";
  setEventContextTimestamp(new Date().toISOString());
  streamTitle.textContent = title;
  syncEventContextActions();
  renderStreamImages();
  renderPlainEventContextBody(body);
}
