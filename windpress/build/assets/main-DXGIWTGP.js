import { oxyIframe } from "./constant-DULjF_Zq.js";
import { d as decodeVFSContainer } from "./vfs-CPNgPHio.js";
import "../chunks/index-BMiidzjj.min.js";
import { __tla as __tla_0 } from "./cssesc-Dk8RdEx_.js";
import "../chunks/index-BmWe5YW7.min.js";
import "../chunks/remapping.umd-Cxi90pr4.min.js";
import { __tla as __tla_1 } from "../chunks/index-CZV-ReBk.min.js";
import { g as getVariableList } from "./intellisense-CRkIqNUQ.js";
import "../chunks/redaxios.module-Dyf46lvQ.min.js";
import { l as loadDesignSystem } from "./design-system-B7GawTvC.js";
import { l as logger } from "./logger-DmkfWO2A.js";
import "../chunks/chunk-HTB5LLOP-DSy4Fbcf.min.js";
import "../chunks/preload-helper-BVFHbGtQ.min.js";
import "../chunks/source-map-generator-DcyUj2ax.min.js";
import "../chunks/index-BmLSY3Qb.min.js";
import "../chunks/index-0ko3lTyl.min.js";
import "../chunks/index-CvyxREt8.min.js";
import "./pre-process-DUd5xNxE.js";
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
