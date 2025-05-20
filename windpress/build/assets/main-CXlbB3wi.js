import { bdeIframe } from "./constant-J0FlTYG6.js";
import { d as decodeVFSContainer } from "./vfs-BhDTf5tB.js";
import "../chunks/index-D-_5JoM7.min.js";
import { __tla as __tla_0 } from "./cssesc-DkbcYlXT.js";
import { __tla as __tla_1 } from "../chunks/index-Bl9ik6kS.min.js";
import { d as getVariableList } from "./intellisense-DQDOfCvw.js";
import { l as loadDesignSystem } from "./design-system-maAqXts2.js";
import { l as logger } from "./logger-DmkfWO2A.js";
import "../chunks/preload-helper-BVFHbGtQ.min.js";
import "../chunks/index-Dfa4cJMK.min.js";
import "../chunks/index-DP3Svjvz.min.js";
import "../chunks/index-CvyxREt8.min.js";
import "./pre-process-QQBu2FRt.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  async function mountVariablesStylesheet() {
    const vfsContainer = bdeIframe.contentWindow.document.querySelector('script#windpress\\:vfs[type="text/plain"]');
    const volume = decodeVFSContainer(vfsContainer.textContent);
    const variableLists = await getVariableList(await loadDesignSystem({
      volume
    }));
    let css = "";
    variableLists.forEach((variable) => {
      css += `--${variable.key.substring(2)}: ${variable.value};
`;
    });
    css = `@layer base { :root { ${css} } }`;
    let topStyle;
    if (document.head.querySelector("style#windpress-variables")) {
      topStyle = document.head.querySelector("style#windpress-variables");
    } else {
      topStyle = document.createElement("style");
      topStyle.id = "windpress-variables";
      document.head.appendChild(topStyle);
    }
    if (topStyle) {
      topStyle.textContent = css;
    }
    let iframeStyle;
    if (bdeIframe.contentWindow.document.head.querySelector("style#windpress-variables")) {
      iframeStyle = bdeIframe.contentWindow.document.head.querySelector("style#windpress-variables");
    } else {
      iframeStyle = bdeIframe.contentWindow.document.createElement("style");
      iframeStyle.id = "windpress-variables";
      bdeIframe.contentWindow.document.head.appendChild(iframeStyle);
    }
    if (iframeStyle) {
      iframeStyle.textContent = css;
    }
  }
  const channel = new BroadcastChannel("windpress");
  channel.addEventListener("message", async (e) => {
    const data = e.data;
    const source = "windpress/autocomplete";
    const task = "windpress.code-editor.saved.done";
    if (data.source === source && data.task === task) {
      setTimeout(() => {
        mountVariablesStylesheet();
      }, 1e3);
    }
  });
  mountVariablesStylesheet();
  logger("Module loaded!", {
    module: "variables"
  });
});
