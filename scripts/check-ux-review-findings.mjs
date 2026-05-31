// SPDX-License-Identifier: MIT OR Apache-2.0

import { readFileSync } from "node:fs";

import { createCheck, cssBlockFor } from "./check-helpers.mjs";

const html = readFileSync("static/index.html", "utf8");
const styles = readFileSync("static/styles.css", "utf8");
const app = readFileSync("src/frontend/app.ts", "utf8");
const summaryMode = readFileSync("src/frontend/modes/summary.ts", "utf8");
const evidenceDrawer = readFileSync("src/frontend/evidence/evidence_drawer.ts", "utf8");
const { expect, finish } = createCheck("UX review findings");

const renderRawModePanelBlock = app.match(/function renderRawModePanel[\s\S]*?\n}\n\nfunction renderExportModePanel/)?.[0] ?? "";
const renderExportModePanelBlock = app.match(/function renderExportModePanel[\s\S]*?\n}\n\nfunction renderSettingsModePanel/)?.[0] ?? "";
const renderTimelineModePanelBlock = app.match(/function renderTimelineModePanel[\s\S]*?\n}\n\nfunction estimateTimelineRowHeight/)?.[0] ?? "";
const modeRowBlock = app.match(/function renderModeRow[\s\S]*?\n}\n\nfunction formatModeTimestamp/)?.[0] ?? "";
const focusEvidenceBlock = evidenceDrawer.match(/export function focusEvidenceByLine[\s\S]*?\n}/)?.[0] ?? "";
const copyTextBlock = app.match(/function copyText[\s\S]*?\n}\n\nfunction errorishText/)?.[0] ?? "";
const searchBox = cssBlockFor(styles, ".search-box");
const searchStatus = cssBlockFor(styles, ".search-status");
const copyFeedback = cssBlockFor(styles, ".copy-feedback");
const rawNotice = cssBlockFor(styles, ".raw-privacy-notice");
const timelineEvidenceNotice = cssBlockFor(styles, ".timeline-evidence-notice");
const summaryPrimaryCta = cssBlockFor(styles, ".summary-primary-cta");

expect(html.includes('id="search-status"'), "Search chrome should expose a persistent status target for result/no-result feedback.");
expect(/id="search-input"[^>]+aria-describedby="search-status"/.test(html), "Search input should be linked to its visible status text.");
expect(html.includes('id="copy-feedback"') && html.includes('role="status"'), "Clipboard actions should have a visible aria-live feedback region.");
expect(searchStatus.length > 0 && /grid-column:\s*1\s*\/\s*-1/.test(searchStatus), "Search status should be styled as a readable line under the input.");
expect(copyFeedback.length > 0 && /position:\s*fixed/.test(copyFeedback), "Copy feedback should render as a fixed toast/status surface.");
expect(app.includes('queryRequired<HTMLElement>("#search-status")'), "Frontend should query the search feedback target.");
expect(app.includes('queryRequired<HTMLElement>("#copy-feedback")'), "Frontend should query the copy feedback target.");
expect(app.includes("function updateSearchStatus"), "Frontend should centralize search result feedback in updateSearchStatus.");
expect(renderTimelineModePanelBlock.includes("updateSearchStatus"), "Timeline rendering should update the visible search result count/no-match state.");
expect(app.includes("function showCopyFeedback"), "Frontend should centralize clipboard confirmations with preview text.");
expect(copyTextBlock.includes("showCopyFeedback") && copyTextBlock.includes("previewClipboardText"), "copyText should show visible success/failure feedback with a sanitized preview.");
expect(!copyTextBlock.includes("openSyntheticEventContext"), "copyText should not rely on the Map-only Event Context overlay for non-Map copy feedback.");

expect(renderRawModePanelBlock.includes('"Raw audit"'), "Raw mode summary should explicitly say this is a raw audit surface.");
expect(renderRawModePanelBlock.includes('modeCard("Raw Privacy Warning"'), "Raw mode should render a Raw-specific privacy warning before JSON.");
expect(renderRawModePanelBlock.includes('modeButton("Copy Safe Reference"'), "Raw mode should offer a safe-reference alternative beside raw JSON.");
expect(rawNotice.length > 0, "Raw privacy warning should have a stable styling hook.");

expect(renderExportModePanelBlock.includes('"Safe-share exports"'), "Export mode summary should lead with safe-share language, not generic redacted reports.");
expect(renderExportModePanelBlock.includes('modeCard("Safe Share Workflow"'), "Export should include a step-by-step safe-share workflow card.");
expect(renderExportModePanelBlock.includes('modeCard("Redacted Report Commands"'), "Export should label redacted report commands explicitly.");
expect(!renderExportModePanelBlock.includes('--format json -o normalized-trace.json'), "JSON export examples must not omit --redacted.");
expect(renderExportModePanelBlock.includes('--format json --redacted -o normalized-trace-redacted.json'), "Export should provide a redacted JSON command with an explicit safe-share filename.");
expect(renderExportModePanelBlock.includes('modeButton("Copy Safe Share Summary"'), "Export should offer a safe-share summary copy action.");

expect(focusEvidenceBlock.includes("setFocusedEvidenceLine"), "Evidence routing should persist the target line before switching evidence surfaces.");
expect(renderTimelineModePanelBlock.includes("focusedEvidenceLine"), "Timeline mode should announce when it is focused on a routed evidence line.");
expect(modeRowBlock.includes("evidence-target") && modeRowBlock.includes('aria-current'), "Timeline target rows should be visually and accessibly marked as evidence targets.");
expect(timelineEvidenceNotice.length > 0, "Focused timeline evidence notice should have a stable styling hook.");

expect(summaryMode.includes("formatCountLabel"), "Summary prose should use a pluralization helper for turns/prompts.");
expect(!summaryMode.includes('turns across ${formatNumber(current.totals.promptCount)} prompts'), "Summary prose must not hard-code plural turns/prompts.");
expect(summaryMode.includes('"Start Inspect-First Review"'), "Summary should expose a dominant inspect-first CTA with action-oriented copy.");
expect(summaryPrimaryCta.length > 0 && /font-size:\s*13px/.test(summaryPrimaryCta) && /text-transform:\s*uppercase/.test(summaryPrimaryCta), "Summary primary CTA should be visually dominant and scannable.");

finish();
