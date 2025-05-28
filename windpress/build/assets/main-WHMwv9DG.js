import { c as createVirtualRef } from "./virtualRef-B1iNroDN.js";
import { l as logger } from "./logger-DmkfWO2A.js";
import { L as Logo } from "../chunks/windpress-DnIzWi0E.min.js";
import "../chunks/index-SE8wVPz0.min.js";
import "../chunks/isObject-DL0QMHX-.min.js";
import "../chunks/runtime-core.esm-bundler-hRyeZ98I.min.js";
import "../chunks/set-3tkuNXe_.min.js";
import "../chunks/_toKey-BRkTT7LT.min.js";
import "../chunks/get-DXxw6yUY.min.js";
const settingButtonHtml = document.createRange().createContextualFragment(
  /*html*/
  `
    <button id="windpressbuilderius-settings-navbar" data-tooltip-content="WindPress \u2014 Builderius settings" data-tooltip-place="bottom" class="uniPanelButton">
        <span class="">
            ${Logo}
        </span>
    </button>
`
);
const { getVirtualRef } = createVirtualRef({}, {
  persist: "windpress.ui.state"
});
const builderiusToolbar = document.querySelector(".uniTopPanel__rightCol");
builderiusToolbar.prepend(settingButtonHtml);
const settingsButton = document.querySelector("#windpressbuilderius-settings-navbar");
function toggleMinimize() {
  const currentVal = getVirtualRef("window.minimized", false).value;
  getVirtualRef("window.minimized", false).value = !currentVal;
  if (!currentVal === true) {
    settingsButton.classList.remove("active");
  } else {
    settingsButton.classList.add("active");
  }
}
settingsButton.addEventListener("click", (event) => {
  toggleMinimize();
});
logger("Module loaded!", { module: "settings" });
