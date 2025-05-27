import { uniIframe } from "./constant-DeVUt7A7.js";
import { d as decodeVFSContainer } from "./vfs-DVp6Ta7R.js";
import "../chunks/index-BkUw_IqI.min.js";
import { __tla as __tla_0 } from "./cssesc-Dhzqn1Ra.js";
import { __tla as __tla_1 } from "../chunks/index-D-rQrmfb.min.js";
import { d as getVariableList } from "./intellisense-ESrreZjU.js";
import { l as loadDesignSystem } from "./design-system-DUAD_aaS.js";
import { l as logger } from "./logger-DmkfWO2A.js";
import "../chunks/preload-helper-BVFHbGtQ.min.js";
import "../chunks/index-Dfa4cJMK.min.js";
import "../chunks/index-DQH7Y8rH.min.js";
import "../chunks/index-CvyxREt8.min.js";
import "./pre-process-DDmkQORd.js";
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
    const vfsContainer = uniIframe.contentWindow.document.querySelector('script#windpress\\:vfs[type="text/plain"]');
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
    let iframeStyle;
    if (uniIframe.contentWindow.document.head.querySelector("style#windpress-variables")) {
      iframeStyle = uniIframe.contentWindow.document.head.querySelector("style#windpress-variables");
    } else {
      iframeStyle = uniIframe.contentWindow.document.createElement("style");
      iframeStyle.id = "windpress-variables";
      uniIframe.contentWindow.document.head.appendChild(iframeStyle);
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
