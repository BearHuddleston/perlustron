# UI And Performance Research

Perlustron is a local session observatory: Rust does the JSONL parsing and summary work, while the browser focuses on rendering and interaction.

## Rendering choices

- Three.js `InstancedMesh` is the right primitive for repeated workflow nodes because it draws many objects that share geometry/material with different transforms, reducing draw calls.
- The central lane, event particles, and timeline use compact geometry buffers instead of one DOM element per event. The app updates instance matrices and line buffer attributes in place.
- Dynamic node transforms use `DynamicDrawUsage`, which tells Three.js/WebGL that a buffer is expected to change after creation.
- The scene caps pixel ratio, disables antialiasing, uses `MeshBasicMaterial` for event nodes, and avoids expensive shadows/postprocessing so the visualization remains responsive as JSONL sessions grow.

Primary references:

- https://threejs.org/docs/pages/InstancedMesh.html
- https://threejs.org/manual/en/optimize-lots-of-objects.html
- https://threejs.org/docs/pages/BufferAttribute.html

## Backend choices

- Axum serves `/api/session` and the embedded static Three.js app from one local-only Rust process.
- The API reparses the active JSONL file on demand in `spawn_blocking`, keeping file I/O and JSON processing off the async runtime worker path.
- Rust computes the UI-facing summaries: session name, live state, latest event index, prompt rows, metrics, session roots, timeline ticks, and timeline labels. The browser still computes 3D positions because those are camera/layout concerns.
- The page uses server-sent events with a polling fallback while live. When `latestEventIndex` advances, the browser highlights fresh events and emits visible pulse animations.

Primary references:

- https://docs.rs/axum/latest/axum/routing/struct.Router.html
- https://docs.rs/tower-http/latest/tower_http/trace/index.html

## Interaction choices

- The screenshot-style shell uses real controls instead of decorative chrome: session filters, saved views, metric filters, raw JSON toggles, camera controls, previous/next navigation, search, bookmarks, settings, and live pause/resume all update visible state.
- Double-clicking a prompt or any event enters inspection mode, where the main prompt flow stays ordered and subagent work branches into side lanes for review.
- Clicking an event opens the animated inspector stream with the underlying JSONL-derived record.
