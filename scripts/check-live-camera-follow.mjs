// SPDX-License-Identifier: MIT OR Apache-2.0

import { readFileSync } from "node:fs";

import { createCheck } from "./check-helpers.mjs";

const app = readFileSync("src/frontend/app.ts", "utf8");

const { expect, finish } = createCheck("Live camera follow");

const followLatestGraphUpdateBlock = app.match(/function followLatestGraphUpdate[\s\S]*?\n}\n\nfunction shouldAutoFollowLiveGraph/)?.[0] ?? "";
const renderBlock = app.match(/function render\(\)[\s\S]*?\n}\n\nfunction updateCameraFlight/)?.[0] ?? "";
const manualNavigationBlock = app.match(/function markManualCameraNavigation[\s\S]*?\n}\n\nfunction resumeCameraAutoFollow/)?.[0] ?? "";
const visibleFocusBranch = followLatestGraphUpdateBlock.match(/if \(isFocusPointComfortablyVisible\(nextFocus\)\) \{(?<body>[\s\S]*?)\n    \} else \{/)?.groups?.body ?? "";
const durationMatch = app.match(/const LIVE_CAMERA_FOLLOW_DURATION_MS = (?<duration>\d+);/);
const followDuration = Number(durationMatch?.groups?.duration ?? 0);

expect(followLatestGraphUpdateBlock.length > 0, "Live graph follow helper should remain discoverable.");
expect(
  followLatestGraphUpdateBlock.includes("startLiveCameraFollowPan(previousFocus, nextFocus)") &&
    !followLatestGraphUpdateBlock.includes("panWithFollowFocus(previousFocus"),
  "Live graph follow should queue an eased camera pan instead of mutating the camera in one frame."
);
expect(
  app.includes("const LIVE_CAMERA_FOLLOW_DURATION_MS") && app.includes("function updateLiveCameraFollow"),
  "Live camera follow should have explicit duration/state and a frame updater."
);
expect(
  renderBlock.includes("updateLiveCameraFollow(now)") &&
    renderBlock.indexOf("updateLiveCameraFollow(now)") < renderBlock.indexOf("controls.update()"),
  "Render loop should advance live camera follow before OrbitControls is updated."
);
expect(
  app.includes("function isFocusPointComfortablyVisible") && followLatestGraphUpdateBlock.includes("isFocusPointComfortablyVisible(nextFocus)"),
  "Auto-follow should skip camera motion when the newest focus point is already comfortably visible."
);
expect(
  followLatestGraphUpdateBlock.includes("if (!isFocusPointComfortablyVisible(nextFocus)) {\n      startLiveCameraFollowPan(previousFocus, nextFocus);\n    }") &&
    !visibleFocusBranch.includes("cancelLiveCameraFollow()") &&
    !visibleFocusBranch.includes("return;"),
  "Comfortably visible live updates should skip new camera motion without cancelling animation or aborting color/context refresh."
);
expect(
  followDuration >= 1000 && app.includes("function liveCameraFollowEase") && !app.includes("1 - Math.pow(1 - progress, 3)"),
  "Live camera follow should use a slower ease-in/out curve, not an ease-out curve that jumps quickly at animation start."
);
expect(
  manualNavigationBlock.includes("cancelLiveCameraFollow()"),
  "Manual camera navigation should cancel any in-flight live auto-follow animation."
);

finish();
