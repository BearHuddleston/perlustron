// SPDX-License-Identifier: MIT OR Apache-2.0

import { shortPath } from "../utils/format";

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

type MetadataIcon = "codex" | "source" | "git" | "policy" | "model" | "tools";

interface DynamicToolMetadata {
  namespace: string | null;
  name: string;
}

export interface MetadataSummary {
  cliVersion: string | null;
  originator: string | null;
  source: string | null;
  modelProvider: string | null;
  gitCommitHash: string | null;
  repositoryUrl: string | null;
  approvalPolicy: string | null;
  sandbox: string | null;
  model: string | null;
  dynamicTools: DynamicToolMetadata[];
}

type MetadataRow = {
  label: string;
  detail: string;
  icon: MetadataIcon;
};

const METADATA_ICON_PATHS: Record<MetadataIcon, readonly string[]> = {
  codex: ["M4 7l5 5-5 5", "M12 17h8"],
  source: ["M5 6h14", "M5 12h14", "M5 18h14", "M8 4v4", "M16 10v4", "M11 16v4"],
  git: [
    "M6 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0",
    "M6 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0",
    "M18 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0",
    "M6 6v8a4 4 0 0 0 4 4h6",
    "M6 10h6a4 4 0 0 1 4 4v4",
  ],
  policy: ["M12 3l7 4v5c0 4.5-2.8 7.4-7 9-4.2-1.6-7-4.5-7-9V7l7-4z", "M9 12l2 2 4-5"],
  model: ["M8 8h8v8H8z", "M4 10h4", "M4 14h4", "M16 10h4", "M16 14h4", "M10 4v4", "M14 4v4", "M10 16v4", "M14 16v4"],
  tools: ["M14.7 6.3l3-3a2.1 2.1 0 0 1 3 3l-3 3", "M13 8l3 3", "M3 21l8-8", "M9 11l4 4"],
};

export function renderMetadataList(metadataList: HTMLElement, metadata: MetadataSummary | null | undefined): void {
  const toolNames = (metadata?.dynamicTools || [])
    .map((tool) => (tool.namespace ? `${tool.namespace}.${tool.name}` : tool.name))
    .slice(0, 6);
  const rows = ([
    { label: "Codex", detail: [metadata?.originator, metadata?.cliVersion].filter(Boolean).join(" "), icon: "codex" },
    { label: "Source", detail: [metadata?.source, metadata?.modelProvider].filter(Boolean).join(" / "), icon: "source" },
    { label: "Git", detail: shortCommit(metadata?.gitCommitHash) || shortPath(metadata?.repositoryUrl || ""), icon: "git" },
    { label: "Policy", detail: [metadata?.approvalPolicy, metadata?.sandbox].filter(Boolean).join(" / "), icon: "policy" },
    { label: "Model", detail: metadata?.model || "", icon: "model" },
    { label: "Tools", detail: toolNames.join(", "), icon: "tools" },
  ] satisfies MetadataRow[]).filter((row) => row.detail);

  const fragment = document.createDocumentFragment();
  rows.forEach((row) => fragment.append(renderMetadataRow(row)));
  metadataList.replaceChildren(fragment);
}

function renderMetadataRow({ label, detail, icon }: MetadataRow): HTMLDivElement {
  const row = document.createElement("div");
  row.className = "root-row metadata-row";
  row.title = detail;

  const iconElement = renderStatusIcon(icon);
  const copy = document.createElement("span");
  copy.className = "root-copy";
  const rowLabel = document.createElement("strong");
  rowLabel.textContent = label;
  const rowDetail = document.createElement("small");
  rowDetail.textContent = detail;
  copy.append(rowLabel, rowDetail);
  row.append(iconElement, copy);
  return row;
}

function renderStatusIcon(icon: MetadataIcon): HTMLSpanElement {
  const iconElement = document.createElement("span");
  iconElement.className = `root-icon ${icon}`;
  iconElement.setAttribute("aria-hidden", "true");

  const svg = document.createElementNS(SVG_NAMESPACE, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("focusable", "false");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");

  for (const d of METADATA_ICON_PATHS[icon]) {
    const path = document.createElementNS(SVG_NAMESPACE, "path");
    path.setAttribute("d", d);
    svg.append(path);
  }
  iconElement.append(svg);
  return iconElement;
}

function shortCommit(commit: string | null | undefined): string {
  return commit ? commit.slice(0, 10) : "";
}
