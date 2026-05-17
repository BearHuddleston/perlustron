// SPDX-License-Identifier: MIT OR Apache-2.0

export interface SafeReferenceSummaryInput {
  role?: string | null;
  eventType?: string | null;
  toolName?: string | null;
  filePath?: string | null;
  status?: string | null;
  rawSummary?: string | null;
}

export interface CopySafeReferenceInput {
  source?: string | null;
  lineNumber?: number | null;
  eventIndex?: number | null;
  kind?: string | null;
  summary?: string | null;
  parserVersion?: string | null;
  schemaVersion?: string | null;
}

export interface CopySafeShareSummaryInput {
  source?: string | null;
  sessionName?: string | null;
  totalTurns?: number | null;
  callCount?: number | null;
  fileChangeCount?: number | null;
  latestEventIndex?: number | null;
  parserVersion?: string | null;
  schemaVersion?: string | null;
  cliContext?: string | null;
  rawLogsSafeToShare?: boolean | null;
  rawLogCaution?: string | null;
  sanitizedGraphNote?: string | null;
  redactedFieldCount?: number | null;
  imageCount?: number | null;
  apiTokenRequired?: boolean | null;
}

const SECRET_QUERY_PARAM_PATTERN = /([?&])((?:access_)?token|api[_-]?key|secret|password|passwd|auth|session|cookie)=([^&#\s]+)/gi;
const SECRET_ASSIGNMENT_PATTERN = /\b((?:access_)?token|api[_-]?key|secret|password|passwd|cookie|authorization)\s*([:=])\s*("[^"]*"|'[^']*'|[^\s|;,]+)/gi;
const BEARER_PATTERN = /\bBearer\s+[A-Za-z0-9._~+/=-]{6,}/gi;
const IMAGE_PAYLOAD_PATTERN = /data:image\/[a-z0-9.+-]+;base64,[A-Za-z0-9+/=]+/gi;
const LONG_BASE64_PATTERN = /\b[A-Za-z0-9+/]{32,}={0,2}\b/g;
const UPPERCASE_SECRET_SENTINEL_PATTERN = /\b[A-Z0-9_]*(?:SECRET|PASSWORD|TOKEN|PRIVATE|COOKIE|DO_NOT_COPY)[A-Z0-9_]*\b/g;
const WINDOWS_USER_PATH_PATTERN = /[A-Za-z]:[\\/]+Users[\\/]+[^\s|"'<>]+/g;
const POSIX_PRIVATE_PATH_PATTERN = /\/(?:home|Users)\/[^\s|"'<>]+/g;

export function redactionSafeClipboardText(value: string | null | undefined, maxChars = 240): string {
  const original = normalizeClipboardText(value);
  if (!original) {
    return "";
  }
  const redacted = original
    .replace(IMAGE_PAYLOAD_PATTERN, "[REDACTED_IMAGE_PAYLOAD]")
    .replace(SECRET_QUERY_PARAM_PATTERN, (_match, separator: string, key: string) => `${separator}${key}=[REDACTED]`)
    .replace(BEARER_PATTERN, "Bearer [REDACTED]")
    .replace(SECRET_ASSIGNMENT_PATTERN, (_match, key: string, separator: string) => `${key}${separator === ":" ? ": " : "="}[REDACTED]`)
    .replace(WINDOWS_USER_PATH_PATTERN, redactedPathLabel)
    .replace(POSIX_PRIVATE_PATH_PATTERN, redactedPathLabel)
    .replace(LONG_BASE64_PATTERN, "[REDACTED_BASE64]")
    .replace(UPPERCASE_SECRET_SENTINEL_PATTERN, "[REDACTED_PRIVATE_TEXT]");
  return compactClipboardText(redacted, maxChars);
}

export function safeReferenceSummary(input: SafeReferenceSummaryInput): string {
  const parts = [
    safeField(input.role),
    safeField(input.eventType),
    input.toolName ? `tool: ${safeField(input.toolName)}` : "",
    input.filePath ? `path: ${redactionSafeClipboardText(input.filePath, 96)}` : "",
    input.status ? `status: ${safeField(input.status)}` : "",
  ].filter(Boolean);
  const rawSummary = normalizeClipboardText(input.rawSummary);
  if (rawSummary) {
    const safeSummary = redactionSafeClipboardText(rawSummary, Number.POSITIVE_INFINITY);
    parts.push(rawSummary === safeSummary ? "detail: omitted for safe sharing" : "detail: redacted for safe sharing");
  }
  return parts.length ? parts.join("; ") : "event summary unavailable";
}

export function copySafeReferenceText(input: CopySafeReferenceInput): string {
  return [
    "Perlustron copy-safe reference",
    input.source ? `source: ${safeField(input.source)}` : null,
    input.lineNumber !== null && input.lineNumber !== undefined ? `line: ${input.lineNumber}` : null,
    input.eventIndex !== null && input.eventIndex !== undefined ? `event_index: ${input.eventIndex}` : null,
    input.kind ? `kind: ${safeField(input.kind)}` : null,
    input.summary ? `summary: ${redactionSafeClipboardText(input.summary, 220)}` : null,
    `perlustron: parser ${safeField(input.parserVersion || "unknown")} / schema ${safeField(input.schemaVersion || "unknown")}`,
    "caveat: copy-safe reference only; review raw logs separately before sharing raw content",
  ]
    .filter((line): line is string => Boolean(line))
    .join("\n");
}

export function copySafeShareSummaryText(input: CopySafeShareSummaryInput): string {
  const rawStatus = input.rawLogsSafeToShare ? "marked safe by current scan; still review before forwarding" : "requires human review before sharing";
  return [
    "Perlustron copy-safe share summary",
    input.source ? `source: ${safeField(input.source)}` : null,
    input.sessionName ? `session: ${redactionSafeClipboardText(input.sessionName, 140)}` : null,
    `activity: ${numberOrUnknown(input.totalTurns)} turns / ${numberOrUnknown(input.callCount)} tool calls / ${numberOrUnknown(input.fileChangeCount)} file changes`,
    input.latestEventIndex !== null && input.latestEventIndex !== undefined ? `latest_event_index: ${input.latestEventIndex}` : null,
    input.cliContext ? `cli: ${redactionSafeClipboardText(input.cliContext, 120)}` : null,
    `perlustron: parser ${safeField(input.parserVersion || "unknown")} / schema ${safeField(input.schemaVersion || "unknown")}`,
    `raw_logs: ${rawStatus}`,
    `raw_caution: ${redactionSafeClipboardText(input.rawLogCaution || "Raw logs can contain prompts, paths, tool output, images, and credentials.", 180)}`,
    `safe_surfaces: sanitized graph/export/copy-safe references are safer than raw logs, but still require human judgment before external sharing`,
    `sanitized_graph: ${redactionSafeClipboardText(input.sanitizedGraphNote || "Use sanitized graph/export surfaces for review-friendly sharing.", 180)}`,
    `redactions: ${numberOrUnknown(input.redactedFieldCount)} fields; images: ${numberOrUnknown(input.imageCount)}; api_token_required: ${input.apiTokenRequired ? "yes (value not copied)" : "no"}`,
  ]
    .filter((line): line is string => Boolean(line))
    .join("\n");
}

function normalizeClipboardText(value: string | null | undefined): string {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function compactClipboardText(value: string, maxChars: number): string {
  if (maxChars === Number.POSITIVE_INFINITY || value.length <= maxChars) {
    return value;
  }
  if (maxChars <= 1) {
    return "…";
  }
  return `${value.slice(0, maxChars - 1).replace(/\s+$/, "")}…`;
}

function safeField(value: string | null | undefined): string {
  return redactionSafeClipboardText(value, 120);
}

function numberOrUnknown(value: number | null | undefined): string {
  return value === null || value === undefined ? "unknown" : value.toLocaleString();
}

function redactedPathLabel(value: string): string {
  const parts = value.replace(/\\/g, "/").split("/").filter(Boolean);
  const leaf = parts.length ? parts[parts.length - 1] : "path";
  return `[PATH:${leaf}]`;
}
