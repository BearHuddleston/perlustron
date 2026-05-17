// SPDX-License-Identifier: MIT OR Apache-2.0

import { readFileSync } from "node:fs";

import { createCheck, cssBlockFor } from "./check-helpers.mjs";

const html = readFileSync("static/index.html", "utf8");
const styles = readFileSync("static/styles.css", "utf8");
const app = readFileSync("src/frontend/app.ts", "utf8");

const { expect, finish } = createCheck("Event context panel");

const eventPopup = cssBlockFor(styles, ".event-popup");
const eventPopupCompact = cssBlockFor(styles, ".event-popup.compact");

expect(html.includes('id="stream-minimize"'), "Event context header should include a minimize/expand button.");
expect(
  /id="stream-minimize"[^>]+aria-label="Collapse context"/.test(html),
  "Event context minimize button should expose an accessible default label."
);
expect(app.includes('queryRequired<HTMLButtonElement>("#stream-minimize")'), "Frontend should query the context minimize button.");
expect(app.includes('queryRequired<HTMLButtonElement>("#stream-copy-ref")'), "Frontend should query the evidence reference copy button.");
expect(html.includes('class="event-context-actions"'), "Event context should expose compact evidence action buttons.");
expect(app.includes("setEventContextCollapsed"), "Frontend should synchronize compact/expanded context state.");
expect(app.includes('streamMinimize.addEventListener("click"'), "Frontend should wire the context minimize button.");
expect(app.includes('streamCopyRef.addEventListener("click", copySelectedEventRef)'), "Copy Ref should use the safe evidence-reference helper.");
expect(app.includes('openSelectedEventMode("timeline")') && app.includes('openSelectedEventMode("transcript")') && app.includes('openSelectedEventMode("raw")'), "Event Context actions should jump to Timeline/Transcript/Raw without reopening the overlay.");
expect(app.includes("function canShowEventContext"), "Frontend should centralize whether Event Context is allowed to appear.");
expect(app.includes('return activeAppMode === "map"'), "Event Context should only be allowed in Map mode.");
expect(app.includes('if (nextMode !== "map") {\n    hideEventPopup();\n  }'), "Switching away from Map should hide the Event Context overlay.");
expect(!app.includes('openSyntheticStream("TIMELINE"'), "Timeline mode should not open the floating Event Context overlay.");
expect(!app.includes('openSyntheticStream("TRANSCRIPT"'), "Transcript mode should not open the floating Event Context overlay.");
expect(app.includes("openStream(row.node, { reveal: false })"), "Timeline row selection should update selection/raw payload without revealing Event Context.");

expect(eventPopup.length > 0, "Missing .event-popup styles.");
expect(!/\btop:\s*0\s*;/.test(eventPopup), "Event context should not be pinned to the top of the scene.");
expect(!/\bbottom:\s*0\s*;/.test(eventPopup), "Event context should not be pinned to the bottom as a full-height sheet.");
expect(!/\bmax-height:\s*none\s*;/.test(eventPopup), "Event context should cap its height so it cannot cover the whole map.");
expect(/\bmax-height:\s*[^;]*(?:vh|calc|min)\(/.test(eventPopup), "Event context should use a responsive max-height.");
expect(/\bborder-radius:\s*[^;]+;/.test(eventPopup), "Event context should render as a floating card rather than a wall-to-wall drawer.");
expect(/\bbox-shadow:\s*[^;]+;/.test(eventPopup), "Event context floating card should have depth/shadow treatment.");
expect(/\bbackdrop-filter:\s*[^;]+;/.test(eventPopup), "Event context should preserve the glass panel treatment.");

expect(eventPopupCompact.length > 0, "Event context should define a compact/minimized state.");
expect(/\.event-popup\.compact\s+\.context-meta\s*,\s*\.event-popup\.compact\s+\.inspector-summary\s*\{[^}]*display:\s*none\s*;/m.test(styles), "Compact event context should hide detailed metadata and JSON copy.");
expect(/\.event-context-actions\s*\{[^}]*flex-wrap:\s*wrap\s*;/m.test(styles), "Event evidence actions should wrap instead of overflowing cramped cards.");
expect(/\.stream-image-placeholder\s*\{[^}]*border:/m.test(styles), "Missing styled empty-media placeholder for Event Context.");
expect(/\.stream-images\s+figure\.load-error\s+img\s*\{[^}]*display:\s*none\s*;/m.test(styles), "Broken event images should be hidden behind the unavailable-image placeholder.");

finish();
