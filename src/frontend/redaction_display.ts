// SPDX-License-Identifier: MIT OR Apache-2.0

export type RedactionDisplayCategory = "content" | "path" | "image" | "credential" | "base64" | "private" | "generic";

export interface RedactionDisplaySegment {
  kind: "text" | "redaction";
  text: string;
  category?: RedactionDisplayCategory;
  length?: number | null;
  key?: string | null;
}

export interface RedactionDisplayGroup {
  category: RedactionDisplayCategory;
  count: number;
  length: number | null;
  key: string | null;
  label: string;
}

const REDACTION_TOKEN_PATTERN =
  /(?<credential>\b(?<credentialKey>[A-Za-z0-9_-]*(?:access[_-]?token|api[_-]?key|token|secret|password|passwd|authorization|auth|session|cookie)[A-Za-z0-9_-]*)\s*(?<credentialSeparator>[:=])\s*\[REDACTED\])|(?<bearer>\bBearer\s+\[REDACTED\])|(?<structured>\[REDACTED:(?<structuredKind>[A-Za-z0-9_-]+)(?:\s+length:(?<structuredLength>\d+))?\])|(?<pathSentinel>\[PATH:(?<pathLeaf>[^\]]*)\])|(?<sentinel>\[(?<sentinelKind>REDACTED_IMAGE_PAYLOAD|REDACTED_BASE64|REDACTED_PRIVATE_TEXT)\])|(?<generic>\[REDACTED\])/gi;

export function readableRedactionSegments(value: string | null | undefined): RedactionDisplaySegment[] {
  const text = String(value ?? "");
  if (!text) {
    return [];
  }
  const segments: RedactionDisplaySegment[] = [];
  let lastIndex = 0;
  for (const match of text.matchAll(REDACTION_TOKEN_PATTERN)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      segments.push({ kind: "text", text: text.slice(lastIndex, index) });
    }
    segments.push(redactionSegmentForMatch(match));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    segments.push({ kind: "text", text: text.slice(lastIndex) });
  }
  return segments.length ? segments : [{ kind: "text", text }];
}

export function readableRedactionText(value: string | null | undefined): string {
  return readableRedactionSegments(value)
    .map((segment) => segment.text)
    .join("");
}

export function redactionDisplayGroups(value: string | null | undefined): RedactionDisplayGroup[] {
  const groups = new Map<string, RedactionDisplayGroup>();
  readableRedactionSegments(value).forEach((segment) => {
    if (segment.kind !== "redaction" || !segment.category) {
      return;
    }
    const length = segment.length ?? null;
    const key = segment.key ?? null;
    const groupKey = `${segment.category}:${length ?? ""}:${key ?? ""}`;
    const existing = groups.get(groupKey);
    if (existing) {
      existing.count += 1;
      existing.label = redactionGroupLabel(existing);
      return;
    }
    const group: RedactionDisplayGroup = {
      category: segment.category,
      count: 1,
      length,
      key,
      label: "",
    };
    group.label = redactionGroupLabel(group);
    groups.set(groupKey, group);
  });
  return Array.from(groups.values()).sort((left, right) => redactionCategoryRank(left.category) - redactionCategoryRank(right.category));
}

export function readableRedactionSummary(value: string | null | undefined): string | null {
  const groups = redactionDisplayGroups(value);
  if (!groups.length) {
    return null;
  }
  return `Redactions: ${groups.map((group) => group.label).join("; ")}`;
}

function redactionSegmentForMatch(match: RegExpMatchArray): RedactionDisplaySegment {
  const groups = match.groups ?? {};
  if (groups.credential) {
    const key = readableCredentialKey(groups.credentialKey);
    return redactionSegment("credential", `${key} hidden`, null, key);
  }
  if (groups.bearer) {
    return redactionSegment("credential", "Bearer token hidden", null, "token");
  }
  if (groups.structured) {
    const category = categoryForStructuredKind(groups.structuredKind);
    const length = parseRedactionLength(groups.structuredLength);
    return redactionSegment(category, labelForCategory(category, length), length, null);
  }
  if (groups.pathSentinel) {
    return redactionSegment("path", "Path hidden", null, null);
  }
  if (groups.sentinelKind === "REDACTED_IMAGE_PAYLOAD") {
    return redactionSegment("image", "Image disabled", null, null);
  }
  if (groups.sentinelKind === "REDACTED_BASE64") {
    return redactionSegment("base64", "Base64 credential hidden", null, null);
  }
  if (groups.sentinelKind === "REDACTED_PRIVATE_TEXT") {
    return redactionSegment("private", "Private text redacted", null, null);
  }
  return redactionSegment("generic", "Value redacted", null, null);
}

function redactionSegment(category: RedactionDisplayCategory, text: string, length: number | null, key: string | null): RedactionDisplaySegment {
  return { kind: "redaction", text, category, length, key };
}

function categoryForStructuredKind(kindValue: string | undefined): RedactionDisplayCategory {
  const kind = String(kindValue ?? "").toLowerCase();
  if (kind.includes("path") || kind.includes("file") || kind.includes("cwd")) {
    return "path";
  }
  if (kind.includes("image") || kind.includes("screenshot")) {
    return "image";
  }
  if (kind.includes("token") || kind.includes("secret") || kind.includes("password") || kind.includes("credential") || kind.includes("auth")) {
    return "credential";
  }
  if (kind.includes("base64")) {
    return "base64";
  }
  if (kind.includes("private") || kind.includes("prompt")) {
    return "private";
  }
  if (kind.includes("content") || kind.includes("text") || kind.includes("body") || kind.includes("output")) {
    return "content";
  }
  return "generic";
}

function labelForCategory(category: RedactionDisplayCategory, length: number | null): string {
  const lengthLabel = formatRedactionLength(length);
  if (category === "content") {
    return `Content redacted${lengthLabel}`;
  }
  if (category === "path") {
    return `Path hidden${lengthLabel}`;
  }
  if (category === "image") {
    return "Image disabled";
  }
  if (category === "credential") {
    return "Credential hidden";
  }
  if (category === "base64") {
    return "Base64 credential hidden";
  }
  if (category === "private") {
    return `Private text redacted${lengthLabel}`;
  }
  return `Value redacted${lengthLabel}`;
}

function redactionGroupLabel(group: RedactionDisplayGroup): string {
  const count = group.count;
  const lengthLabel = formatRedactionLength(group.length);
  if (group.category === "content") {
    return `${count} content redacted${lengthLabel}`;
  }
  if (group.category === "path") {
    return `${count} ${count === 1 ? "path" : "paths"} hidden${lengthLabel}`;
  }
  if (group.category === "image") {
    return `${count} ${count === 1 ? "image" : "images"} disabled`;
  }
  if (group.category === "credential") {
    const key = group.key || "credential";
    return `${count} ${count === 1 ? key : pluralizeKey(key)} hidden`;
  }
  if (group.category === "base64") {
    return `${count} base64 ${count === 1 ? "credential" : "credentials"} hidden`;
  }
  if (group.category === "private") {
    return `${count} private ${count === 1 ? "text" : "text blocks"} redacted${lengthLabel}`;
  }
  return `${count} ${count === 1 ? "value" : "values"} redacted${lengthLabel}`;
}

function readableCredentialKey(key: string | undefined): string {
  const normalized = String(key ?? "credential").replace(/[^A-Za-z0-9_-]+/g, "_").toLowerCase();
  if (!normalized || normalized === "authorization" || normalized === "auth") {
    return "credential";
  }
  if (/api[_-]?key/.test(normalized)) {
    return "API key";
  }
  if (normalized.includes("token")) {
    return "token";
  }
  if (normalized.includes("password") || normalized.includes("passwd")) {
    return "password";
  }
  if (normalized.includes("secret")) {
    return "secret";
  }
  if (normalized.includes("cookie") || normalized.includes("session")) {
    return "session credential";
  }
  return normalized;
}

function pluralizeKey(key: string): string {
  if (key.endsWith("s")) {
    return key;
  }
  if (key.includes(" ")) {
    return `${key}s`;
  }
  return `${key}s`;
}

function parseRedactionLength(value: string | undefined): number | null {
  const length = Number(value);
  return Number.isFinite(length) && length >= 0 ? length : null;
}

function formatRedactionLength(length: number | null): string {
  if (length === null) {
    return "";
  }
  return ` · ${length} ${length === 1 ? "char" : "chars"}`;
}

function redactionCategoryRank(category: RedactionDisplayCategory): number {
  return ["content", "private", "path", "image", "credential", "base64", "generic"].indexOf(category);
}
