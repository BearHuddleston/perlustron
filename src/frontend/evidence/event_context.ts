// SPDX-License-Identifier: MIT OR Apache-2.0

interface EventContextNodeBase {
  type: "prompt" | "call" | "fileChange" | "message" | "compaction";
  kind: string;
  eventIndex: number;
  promptIndex: number;
  title: string;
}

interface EventContextCallNode extends EventContextNodeBase {
  type: "call";
  source: {
    name: string;
  };
}

interface EventContextNonCallNode extends EventContextNodeBase {
  type: "prompt" | "fileChange" | "message" | "compaction";
}

export type EventContextNode = EventContextCallNode | EventContextNonCallNode;

export function formatEventContextTimestamp(timestamp: string): string {
  const date = new Date(timestamp);
  if (Number.isNaN(date.valueOf())) {
    return timestamp;
  }
  return date.toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

export function formatEventContextTitle(title: string): string {
  const headingText = title.replace(/^\s{0,3}#{1,6}\s+/, "").trim();
  return (headingText ? headingText.replace(/:$/, "").trim() : title) || title;
}

export function eventContextKindLabel(node: EventContextNode): string {
  if (node.type === "call") {
    const subagentLabel = subagentEventLabel(node.source.name);
    if (subagentLabel) {
      return subagentLabel.toUpperCase();
    }
  }
  return node.kind.replace(/[-_]+/g, " ").toUpperCase();
}

export function eventContextHeaderTitle(node: EventContextNode): string {
  if (node.type === "prompt") {
    return "";
  }
  return eventContextStreamTitle(node);
}

export function eventContextStreamTitle(node: EventContextNode): string {
  if (node.type === "call") {
    return subagentEventLabel(node.source.name) ?? node.title;
  }
  return node.title;
}

export function eventContextPositionLabel(node: EventContextNode): string {
  if (node.type === "prompt") {
    return `PROMPT ${node.promptIndex + 1}`;
  }
  if (node.type === "compaction") {
    return `CHECKPOINT ${node.eventIndex}`;
  }
  if (node.type === "fileChange") {
    return `FILE ${node.eventIndex}`;
  }
  if (node.type === "message") {
    return `ASSISTANT ${node.eventIndex}`;
  }
  if (node.type === "call" && isNestedSubagentEventName(node.source.name)) {
    return `SUBAGENT TURN ${node.eventIndex}`;
  }
  return `TURN ${node.eventIndex}`;
}

export function subagentEventLabel(name: string): string | null {
  if (name === "spawn_agent") {
    return "subagent launch";
  }
  if (name === "subagent") {
    return "subagent result";
  }
  if (name === "subagent.prompt") {
    return "subagent prompt";
  }
  if (name === "subagent.message") {
    return "subagent message";
  }
  if (name === "subagent.file") {
    return "subagent file";
  }
  if (name === "subagent.compaction") {
    return "subagent compaction";
  }
  if (name === "subagent.more") {
    return "subagent overflow";
  }
  return null;
}

export function isNestedSubagentEventName(name: string): boolean {
  return name.startsWith("subagent.") && name !== "subagent";
}
