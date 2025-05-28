import { c as createVirtualRef } from "./virtualRef-B1iNroDN.js";
import { l as logger } from "./logger-DmkfWO2A.js";
import { L as Logo } from "../chunks/windpress-DnIzWi0E.min.js";
import "../chunks/index-SE8wVPz0.min.js";
import "../chunks/isObject-DL0QMHX-.min.js";
import "../chunks/runtime-core.esm-bundler-hRyeZ98I.min.js";
import "../chunks/set-3tkuNXe_.min.js";
import "../chunks/_toKey-BRkTT7LT.min.js";
import "../chunks/get-DXxw6yUY.min.js";
const oxygenToolbarSelector = "#oxygen-topbar .oxygen-toolbar-menus:has(.oxygen-dom-tree-button)";
const settingButtonHtml = document.createRange().createContextualFragment(
  /*html*/
  `
    <div class="windpressoxygen-settings-button">
        ${Logo}
    </div>
`
);
createVirtualRef({}, {
  persist: "windpress.ui.state"
});
const oxygenToolbar = document.querySelector(oxygenToolbarSelector);
oxygenToolbar.insertBefore(settingButtonHtml, oxygenToolbar.firstChild);
window.tippy(".windpressoxygen-settings-button", {
  // content: 'WindPress — Oxygen settings',
  content: "WindPress is detected",
  animation: "shift-toward",
  placement: "bottom"
});
document.querySelector(".windpressoxygen-settings-button");
logger("Module loaded!", { module: "settings" });
