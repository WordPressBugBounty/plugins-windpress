import { oxyIframe } from "./constant-DULjF_Zq.js";
import { d as decodeVFSContainer } from "./vfs-pKuuw0Od.js";
import "../chunks/index-C1H1LqHQ.min.js";
import { __tla as __tla_0 } from "./cssesc-B11S6O1g.js";
import { __tla as __tla_1 } from "../chunks/index-ggmHCP0X.min.js";
import { d as getVariableList } from "./intellisense-Cp0kqlI7.js";
import { l as loadDesignSystem } from "./design-system-mZjtWJEN.js";
import { l as logger } from "./logger-DmkfWO2A.js";
import "../chunks/preload-helper-BVFHbGtQ.min.js";
import "../chunks/index-Dfa4cJMK.min.js";
import "../chunks/index-Z7Z9gSAB.min.js";
import "../chunks/index-CvyxREt8.min.js";
import "./pre-process-Q0cZU5CN.js";
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
    const vfsContainer = oxyIframe.contentWindow.document.querySelector('script#windpress\\:vfs[type="text/plain"]');
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
    if (oxyIframe.contentWindow.document.head.querySelector("style#windpress-variables")) {
      iframeStyle = oxyIframe.contentWindow.document.head.querySelector("style#windpress-variables");
    } else {
      iframeStyle = oxyIframe.contentWindow.document.createElement("style");
      iframeStyle.id = "windpress-variables";
      oxyIframe.contentWindow.document.head.appendChild(iframeStyle);
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
