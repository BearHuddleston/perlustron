// SPDX-License-Identifier: MIT OR Apache-2.0

import { readFileSync } from "node:fs";

import { createCheck, cssBlockFor } from "./check-helpers.mjs";

const html = readFileSync("static/index.html", "utf8");
const styles = readFileSync("static/styles.css", "utf8");
const app = readFileSync("src/frontend/app.ts", "utf8");
const eventContext = readFileSync("src/frontend/evidence/event_context.ts", "utf8");
const eventContextSurface = `${app}\n${eventContext}`;

const { expect, finish } = createCheck("Event context panel");

const eventPopup = cssBlockFor(styles, ".event-popup");
const eventPopupCompact = cssBlockFor(styles, ".event-popup.compact");
const eventPopupScroll = styles.match(/(?:^|\n)\.event-popup-scroll\s*\{(?<body>[^}]*)\}/m)?.groups?.body ?? "";
const eventPopupActions = cssBlockFor(styles, ".event-popup-actions");
const eventPopupActionButton = cssBlockFor(styles, ".event-popup-actions button");
const contextMeta = cssBlockFor(styles, ".context-meta");
const contextMetaTitle = cssBlockFor(styles, ".context-meta-title");
const contextMetaTitleStrong = cssBlockFor(styles, ".context-meta-title strong");
const contextMetaDetail = cssBlockFor(styles, ".context-meta-detail");
const eventContextActions = cssBlockFor(styles, ".event-context-actions");
const eventContextActionButton = cssBlockFor(styles, ".event-context-actions button");
const streamTitle = cssBlockFor(styles, "#stream-title");
const streamData = cssBlockFor(styles, "#stream-data");
const streamMarkdown = cssBlockFor(styles, "#stream-data.stream-markdown");
const annotationMeta = cssBlockFor(styles, ".annotation-meta");
const loadErrorImageLink = cssBlockFor(styles, ".stream-images figure.load-error .stream-image-link");
const eventContextRenderSignatureBlock = app.match(/function eventContextRenderSignature[\s\S]*?\n}\n\nfunction renderPlainEventContextBody/)?.[0] ?? "";

expect(html.includes('id="stream-minimize"'), "Event context header should include a minimize/expand button.");
expect(html.includes('class="event-popup-scroll"'), "Event context should keep the header outside the scrollable body.");
expect(/id="prev-event"[^>]+aria-label="Previous event"/.test(html) && /id="next-event"[^>]+aria-label="Next event"/.test(html), "Event context navigation buttons should have clear accessible labels.");
expect(/id="stream-close"[^>]+aria-label="Clear selection"/.test(html), "Event context close control should have a clear accessible label.");
expect(/class="context-meta-title"[\s\S]*id="stream-title-label"[\s\S]*<strong id="stream-kind">/m.test(html), "Event context metadata should put the selected event label/value in a dedicated title row.");
expect(
  /id="stream-minimize"[^>]+aria-label="Collapse context"/.test(html),
  "Event context minimize button should expose an accessible default label."
);
expect(app.includes('queryRequired<HTMLButtonElement>("#stream-minimize")'), "Frontend should query the context minimize button.");
expect(app.includes('queryRequired<HTMLButtonElement>("#stream-copy-ref")'), "Frontend should query the evidence reference copy button.");
expect(html.includes('class="event-context-actions"'), "Event context should expose compact evidence action buttons.");
expect(!html.includes('data-inspector-tab="raw"'), "Removed Raw JSON sidebar tab should stay out of the DOM.");
expect(!html.includes('id="raw-json-preview"'), "Removed Raw JSON preview should stay out of the DOM.");
expect(app.includes("setEventContextCollapsed"), "Frontend should synchronize compact/expanded context state.");
expect(app.includes('streamMinimize.addEventListener("click"'), "Frontend should wire the context minimize button.");
expect(!app.includes("streamMinimize.textContent"), "Collapse control should keep its icon markup instead of replacing it with text.");
expect(app.includes('streamCopyRef.addEventListener("click", copySelectedEventRef)'), "Copy Ref should use the safe evidence-reference helper.");
expect(app.includes('openSelectedEventMode("timeline")') && app.includes('openSelectedEventMode("transcript")') && app.includes('openSelectedEventMode("raw")'), "Event Context actions should jump to Timeline/Transcript/Raw without reopening the overlay.");
expect(app.includes("contextEventTitle.textContent = eventContextKindLabel(node);"), "Event context header should show the selected event kind through display labels.");
expect(eventContextSurface.includes("function eventContextKindLabel") && eventContextSurface.includes("function eventContextPositionLabel"), "Event Context should derive display labels through dedicated helpers.");
expect(eventContextSurface.includes('return "subagent prompt";'), "Nested subagent prompt nodes should not render as a generic prompt label.");
expect(eventContextSurface.includes("SUBAGENT TURN"), "Nested subagent events should not present their local event index as a top-level TURN.");
expect(!app.includes("function subagentNickname"), "Subagent runtime nicknames should not drive Event Context titles.");
expect(eventContextSurface.includes("function formatEventContextTitle"), "Event context should normalize Markdown heading syntax out of displayed titles.");
expect(eventContextSurface.includes("title.replace(/^\\s{0,3}#{1,6}\\s+/"), "Event context title normalization should strip Markdown heading markers.");
expect(app.includes("streamKind.title = title;"), "Event context title metadata should preserve the raw title as a tooltip.");
expect(app.includes('queryRequired<HTMLElement>("#stream-title-label")'), "Event context should query the dynamic title-row label.");
expect(app.includes('eventPopup.classList.toggle("prompt-context", node.type === "prompt");'), "Prompt nodes should hide the prompt-derived title row.");
expect(styles.includes(".event-popup.prompt-context .context-meta-title"), "Prompt nodes should not render a redundant prompt-title metadata row.");
expect(/\.event-popup\.prompt-context\s+\.context-meta-title\s*\{[^}]*display:\s*none\s*;/m.test(styles), "Prompt context should hide the selected-title metadata row.");
expect(app.includes('setEventContextTitle(eventContextHeaderTitle(node), "Selection");'), "Event context metadata should keep selected display titles for non-prompt nodes.");
expect(html.includes('<div id="stream-data"'), "Event context body should render into a generic container so prompt markdown can use real elements.");
expect(!app.includes("streamTimer") && !app.includes("function typeStream"), "Event context should render selected records immediately instead of using a typewriter stream timer.");
expect(app.includes("function openEventContext") && app.includes("function renderPlainEventContextBody"), "Event context should use static selection rendering helpers.");
expect(app.includes("eventContextRenderedSelection"), "Event context should track the rendered selection signature across live refreshes.");
expect(app.includes("function eventContextRenderSignature"), "Event context should compare rendered selection content before repainting.");
expect(app.includes("skipStableRender") && app.includes("openEventContext(selected, { skipStableRender: true })"), "Live graph refreshes should not repaint stable selected Event Context content.");
expect(!eventContextRenderSignatureBlock.includes("image.url"), "Event context render signatures should ignore volatile image cache-busting URLs.");
const followLatestGraphUpdateBlock = app.match(/function followLatestGraphUpdate[\s\S]*?\n}\n\nfunction shouldAutoFollowLiveGraph/)?.[0] ?? "";
expect(followLatestGraphUpdateBlock.length > 0, "Live graph follow helper should remain discoverable.");
expect(!followLatestGraphUpdateBlock.includes("openEventContext(latest)") && !followLatestGraphUpdateBlock.includes("selectedNodeId = latest.id"), "Live graph follow should not change the selected Event Context node.");
expect(app.includes("function renderStreamMarkdown"), "Prompt Event Context bodies should render Markdown instead of raw preformatted text.");
expect(app.includes('if (node.type === "prompt") {\n    renderStreamMarkdown(payload);'), "Prompt nodes should use the Markdown renderer in Event Context.");
expect(app.includes('streamData.classList.add("stream-markdown")'), "Markdown rendering should mark the Event Context body for readable prose styling.");
expect(app.includes("function renderAnnotationPrompt"), "Browser annotation prompts should use a dedicated renderer instead of generic Markdown.");
expect(app.includes('textContent = "Diff comments"'), "Annotation prompt renderer should expose a clean Diff comments heading.");
expect(app.includes('commentBody.className = "annotation-comment"'), "Annotation prompt renderer should surface the user's comment as the primary body.");
expect(app.includes("const ANNOTATION_META_ROWS"), "Annotation prompt metadata should be table-driven instead of repeated append calls.");
expect(app.includes('{ label: "Page", field: "Page URL", asLink: true }'), "Annotation prompt renderer should keep page evidence as structured metadata.");
expect(app.includes("function inlineMarkdownHtml"), "Prompt Markdown should use a small escaped inline renderer.");
expect(app.includes('join("<br>")'), "Prompt Markdown paragraphs should preserve source line breaks instead of collapsing metadata into one line.");
expect(app.includes("escapeHtml(text)"), "Prompt Markdown rendering should escape raw HTML before adding markup.");
expect(app.includes('contextEventTitle.textContent = "SESSION";'), "Session overview context should use SESSION as the header kind.");
expect(eventContextSurface.includes("function formatEventContextTimestamp"), "Event context should use a compact timestamp formatter.");
expect(app.includes("turnTimestamp.title = timestamp;"), "Event context should keep the raw timestamp available as a tooltip.");
expect(app.includes("function canShowEventContext"), "Frontend should centralize whether Event Context is allowed to appear.");
expect(app.includes('return activeAppMode === "map"'), "Event Context should only be allowed in Map mode.");
expect(app.includes('if (nextMode !== "map") {\n    hideEventPopup();\n  }'), "Switching away from Map should hide the Event Context overlay.");
expect(!app.includes('openSyntheticEventContext("TIMELINE"'), "Timeline mode should not open the floating Event Context overlay.");
expect(!app.includes('openSyntheticEventContext("TRANSCRIPT"'), "Transcript mode should not open the floating Event Context overlay.");
expect(app.includes("openEventContext(row.node, { reveal: false })"), "Timeline row selection should update selection/raw payload without revealing Event Context.");

expect(eventPopup.length > 0, "Missing .event-popup styles.");
expect(/\bright:\s*16px\s*;/.test(eventPopup) && /\btop:\s*16px\s*;/.test(eventPopup), "Event context should anchor to the top-right of the map.");
expect(!/\bbottom:\s*/.test(eventPopup), "Event context should not anchor to the bottom of the map.");
expect(!/\bmax-height:\s*none\s*;/.test(eventPopup), "Event context should cap its height so it cannot cover the whole map.");
expect(/\bmax-height:\s*[^;]*(?:vh|calc|min)\(/.test(eventPopup), "Event context should use a responsive max-height.");
expect(/\bborder-radius:\s*[^;]+;/.test(eventPopup), "Event context should render as a floating card rather than a wall-to-wall drawer.");
expect(/\bbox-shadow:\s*[^;]+;/.test(eventPopup), "Event context floating card should have depth/shadow treatment.");
expect(/\bbackdrop-filter:\s*[^;]+;/.test(eventPopup), "Event context should preserve the glass panel treatment.");
expect(/overflow:\s*visible/.test(eventPopup), "Event context shell should not let the scrollbar shrink the fixed header controls.");
expect(/overflow-y:\s*auto/.test(eventPopupScroll) && /overflow-x:\s*hidden/.test(eventPopupScroll), "Event context scroll body should own vertical scrolling below the header.");
expect(/margin-right:\s*-10px/.test(eventPopupScroll) && /padding-right:\s*10px/.test(eventPopupScroll), "Event context scrollbar should sit on the outer edge without shifting header controls.");

expect(eventPopupCompact.length > 0, "Event context should define a compact/minimized state.");
expect(/\.event-popup\.compact\s+\.context-meta\s*,\s*\.event-popup\.compact\s+\.event-context-actions\s*,\s*\.event-popup\.compact\s+\.event-summary\s*\{[^}]*display:\s*none\s*;/m.test(styles), "Compact event context should hide detailed metadata, actions, and JSON copy.");
expect(/\.event-popup\.compact\s+\.event-popup-scroll\s*\{[^}]*display:\s*none\s*;/m.test(styles), "Compact event context should hide the scroll body.");
expect(/grid-template-columns:\s*repeat\(4,\s*28px\)/.test(eventPopupActions), "Event context header controls should render as a stable icon grid.");
expect(/place-items:\s*center/.test(eventPopupActionButton) && /border-radius:\s*4px/.test(eventPopupActionButton), "Event context header buttons should be compact centered icon controls.");
expect(/\.event-context-actions\s*\{[^}]*flex-wrap:\s*wrap\s*;/m.test(styles), "Event evidence actions should wrap instead of overflowing cramped cards.");
expect(/display:\s*grid/.test(contextMeta) && /grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/.test(contextMeta) && /background:\s*transparent/.test(contextMeta), "Event metadata should render as a flat two-tier grid instead of cramped columns.");
expect(/grid-column:\s*1\s*\/\s*-1/.test(contextMetaTitle) && /border-bottom:/.test(contextMetaTitle), "Event title metadata should span the full panel width.");
expect(/white-space:\s*normal/.test(contextMetaTitleStrong) && /overflow-wrap:\s*anywhere/.test(contextMetaTitleStrong), "Event title metadata should wrap instead of truncating in a cramped row.");
expect(/grid-template-columns:\s*auto minmax\(0,\s*1fr\)/.test(contextMetaDetail), "Event position/time metadata should share the compact detail row below the title.");
expect(/background:\s*transparent/.test(eventContextActions), "Event evidence action row should not use a boxed toolbar background.");
expect(/border:\s*0/.test(eventContextActionButton) && /border-bottom:/.test(eventContextActionButton) && /border-radius:\s*0/.test(eventContextActionButton), "Event evidence actions should use flat underline controls instead of pill buttons.");
expect(/display:\s*none/.test(streamTitle), "Event body should not repeat the selected event title already shown in the panel header.");
expect(/(?:^|\n)\.event-summary\s*\{[^}]*overflow:\s*visible/m.test(styles), "Event summary should expand inside the popup instead of owning an inner scrollbar.");
expect(/border:\s*0/.test(streamData) && /border-top:/.test(streamData) && /background:\s*transparent/.test(streamData), "Event body should use a flat section instead of a nested card.");
expect(/overflow:\s*visible/.test(streamData) && /max-height:\s*none/.test(streamData), "Event body should not create a nested scrollbar.");
expect(/font-family:\s*var\(--font\)/.test(streamMarkdown) && /white-space:\s*normal/.test(streamMarkdown), "Prompt Markdown should render as readable prose instead of raw monospace text.");
expect(/(?:^|\n)#stream-data\.stream-markdown pre\s*\{[^}]*overflow:\s*visible[^}]*white-space:\s*pre-wrap/m.test(styles), "Markdown code blocks should wrap inside the popup instead of adding another scrollbar.");
expect(/grid-template-columns:\s*max-content minmax\(0,\s*1fr\)/.test(annotationMeta), "Annotation metadata should render as a compact label/value grid.");
expect(!app.includes("stream-image-placeholder"), "Event Context should not render an empty-media placeholder when no media exists.");
expect(!styles.includes(".stream-image-placeholder"), "Event Context should not keep unused empty-media placeholder styling.");
expect(/min-height:\s*72px/.test(loadErrorImageLink) && /background:\s*transparent/.test(loadErrorImageLink), "Unavailable event images should use a compact flat placeholder.");
expect(/\.stream-images\s+figure\.load-error\s+img\s*\{[^}]*display:\s*none\s*;/m.test(styles), "Broken event images should be hidden behind the unavailable-image placeholder.");

finish();
