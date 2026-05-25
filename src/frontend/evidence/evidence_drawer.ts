// SPDX-License-Identifier: MIT OR Apache-2.0

export type EvidenceAppMode = "summary" | "map" | "timeline" | "transcript" | "health" | "insights" | "diff" | "raw" | "export" | "settings";

export interface EvidenceModeEventRow {
  lineNumber: number;
  node?: unknown;
  source: unknown;
}

type ModeCardFactory = (title: string, lines?: string[]) => HTMLElement;
type ModeButtonFactory = (label: string, onClick: () => void | Promise<void>) => HTMLButtonElement;

interface EvidenceFallbackOptions {
  title: string;
  payload: unknown;
  detail: string;
  activeAppMode: EvidenceAppMode;
  modePanelSummary: HTMLElement;
  modePanelContent: HTMLElement;
  modeCard: ModeCardFactory;
  modeButton: ModeButtonFactory;
  setRawModePayload(payload: unknown): void;
  selectAppMode(mode: EvidenceAppMode): void;
  renderRawPayload(payload: unknown, header?: HTMLElement): void;
  cleanupModePanelRender(): void;
  showEvidenceFallback(title: string, payload: unknown, detail: string): void;
}

export function showEvidenceFallbackPanel(options: EvidenceFallbackOptions): void {
  const { title, payload, detail } = options;
  const message = `${detail} Insights remains available and Raw is updated with the selected evidence payload.`;
  options.setRawModePayload(payload);
  options.modePanelSummary.textContent = "Evidence fallback";
  const card = options.modeCard("Evidence Fallback", [message]);
  card.classList.add("mode-notice");
  const actions = document.createElement("div");
  actions.className = "mode-row-actions";
  actions.append(
    options.modeButton("Open Insights", () => {
      options.selectAppMode("insights");
      options.setRawModePayload(payload);
    }),
    options.modeButton("Audit Raw", () => {
      options.selectAppMode("raw");
      options.showEvidenceFallback(title, payload, detail);
    })
  );
  card.append(actions);
  if (options.activeAppMode === "raw") {
    options.renderRawPayload(payload ?? {}, card);
    return;
  }
  options.cleanupModePanelRender();
  options.modePanelContent.prepend(card);
}

interface FocusEventByLineOptions<Row extends EvidenceModeEventRow> {
  lineNumber: number | null | undefined;
  title: string;
  payload: unknown;
  destination?: EvidenceAppMode;
  modeTimelineRows(): Row[];
  inspectModeRow(row: Row): void;
  openSelectedEventMode(mode: EvidenceAppMode): void;
  selectAppMode(mode: EvidenceAppMode): void;
  setRawModePayload(payload: unknown): void;
  showEvidenceFallback(title: string, payload: unknown, detail: string): void;
}

export function focusEvidenceByLine<Row extends EvidenceModeEventRow>(options: FocusEventByLineOptions<Row>): void {
  const destination = options.destination ?? "raw";
  if (options.lineNumber) {
    const row = options.modeTimelineRows().find((candidate) => candidate.lineNumber === options.lineNumber);
    if (row) {
      options.inspectModeRow(row);
      if (row.node) {
        options.openSelectedEventMode(destination);
      } else if (destination !== "map") {
        options.selectAppMode(destination);
        options.setRawModePayload(row.source);
      }
      return;
    }
  }
  if (destination !== "map") {
    options.selectAppMode(destination);
  }
  const detail = options.lineNumber
    ? `Line ${options.lineNumber} is logged for ${options.title}, but no rendered Timeline or Transcript row is available.`
    : "No event line is logged for this insight or evidence reference; showing fallback payload instead.";
  options.showEvidenceFallback(options.title, options.payload, detail);
}
