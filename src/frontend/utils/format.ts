// SPDX-License-Identifier: MIT OR Apache-2.0

export interface CountDeltaLike {
  left: number;
  right: number;
  delta: number;
}

export function formatSessionModified(value: string): string {
  const modified = new Date(value);
  if (Number.isNaN(modified.valueOf())) {
    return "";
  }
  return modified.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function formatDuration(durationMs: number): string {
  if (durationMs >= 1000) {
    return `${(durationMs / 1000).toFixed(2)}s`;
  }
  return `${durationMs}ms`;
}

export function durationLabel(durationMs: number): string {
  if (durationMs < 1000) {
    return `${durationMs} ms`;
  }
  return `${(durationMs / 1000).toFixed(1)} s`;
}

export function formatCountDelta(delta: CountDeltaLike): string {
  const sign = delta.delta > 0 ? "+" : "";
  return `${delta.left} -> ${delta.right} (${sign}${delta.delta})`;
}

export function formatOptionalPercent(value: number | null): string {
  return value == null ? "n/a" : `${value.toFixed(0)}%`;
}

export function formatNumber(value: number | null | undefined, fallback = "n/a"): string {
  return value == null || !Number.isFinite(value) ? fallback : value.toLocaleString();
}

export function compactText(value: string, maxChars: number, marker = "..."): string {
  if (maxChars === Number.POSITIVE_INFINITY || value.length <= maxChars) {
    return value;
  }
  if (maxChars <= 0) {
    return "";
  }
  if (maxChars <= marker.length) {
    return marker.slice(0, maxChars);
  }
  return `${value.slice(0, maxChars - marker.length).replace(/\s+$/, "")}${marker}`;
}

export function escapeHtml(value: string): string {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

export function recordsLabel(lineCount: number, pendingBytes = 0): string {
  if (pendingBytes > 0) {
    return `${lineCount} JSONL records + ${formatBytes(pendingBytes)} pending`;
  }
  return `${lineCount} JSONL records`;
}

export function formatBytes(bytes: number): string {
  if (bytes >= 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }
  if (bytes >= 1024) {
    return `${Math.ceil(bytes / 1024)} KB`;
  }
  return `${bytes} B`;
}
