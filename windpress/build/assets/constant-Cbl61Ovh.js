import { c as createVirtualRef } from "./virtualRef-B1iNroDN.js";
import "../chunks/index-SE8wVPz0.min.js";
import "../chunks/isObject-DL0QMHX-.min.js";
import "../chunks/runtime-core.esm-bundler-hRyeZ98I.min.js";
import "../chunks/set-3tkuNXe_.min.js";
import "../chunks/_toKey-BRkTT7LT.min.js";
import "../chunks/get-DXxw6yUY.min.js";
const brx = document.querySelector(".brx-body");
const brxGlobalProp = document.querySelector(".brx-body").__vue_app__.config.globalProperties;
const brxIframe = document.getElementById("bricks-builder-iframe");
const brxIframeGlobalProp = brxIframe.contentDocument.querySelector(".brx-body").__vue_app__.config.globalProperties;
const { getVirtualRef: settingsState } = createVirtualRef({}, {
  persist: "windpress.bricks.settings.state"
});
export {
  brx,
  brxGlobalProp,
  brxIframe,
  brxIframeGlobalProp,
  settingsState
};
