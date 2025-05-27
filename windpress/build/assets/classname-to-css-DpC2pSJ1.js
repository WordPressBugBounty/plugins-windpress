import { _ as __vitePreload } from "../chunks/preload-helper-BVFHbGtQ.min.js";
import { l as logger } from "./logger-DmkfWO2A.js";
import { t as tippy, f as followCursor } from "../chunks/tippy.esm-CGVrShBA.min.js";
import { e as etchIframe } from "./constant-CgE2OgEV.js";
import { c as createHighlighterCore, a as createOnigurumaEngine } from "../chunks/index-C1eb-OTL.min.js";
import "../chunks/index-Dfa4cJMK.min.js";
(async () => {
  let shikiHighlighter = null;
  (async () => {
    shikiHighlighter = await createHighlighterCore({
      themes: [
        __vitePreload(() => import("../chunks/dark-plus-DP7-e98C.min.js"), true ? [] : void 0, import.meta.url),
        __vitePreload(() => import("../chunks/light-plus-D6etIKYp.min.js"), true ? [] : void 0, import.meta.url)
      ],
      langs: [
        __vitePreload(() => import("../chunks/css-NxIBojpu.min.js"), true ? [] : void 0, import.meta.url)
      ],
      engine: createOnigurumaEngine(__vitePreload(() => import("../chunks/wasm-CmTHlobv.min.js"), true ? [] : void 0, import.meta.url))
    });
  })();
  let tippyInstance = tippy(document.createElement("div"), {
    plugins: [
      followCursor
    ],
    allowHTML: true,
    arrow: false,
    duration: [
      500,
      0
    ],
    followCursor: true,
    trigger: "manual"
  });
  async function showTippy(classname) {
    const generatedCssCode = await etchIframe().contentWindow.windpress.module.classnameToCss.generate(classname);
    if (generatedCssCode === null || generatedCssCode.trim() === "") {
      return null;
    }
    tippyInstance.setContent(shikiHighlighter.codeToHtml(generatedCssCode, {
      lang: "css",
      theme: "dark-plus"
    }));
    tippyInstance.show();
  }
  const observer = new MutationObserver(() => {
    const elements = document.querySelectorAll(".cm-etch-selector:not([data-windpressInjected])");
    elements.forEach((element) => {
      element.addEventListener("mouseover", () => {
        var _a;
        const textContent = (_a = element.firstChild) == null ? void 0 : _a.textContent;
        if (textContent) {
          showTippy(textContent);
        }
      });
      element.addEventListener("mouseout", () => {
        tippyInstance.hide();
      });
      element.setAttribute("data-windpressInjected", "true");
    });
  });
  observer.observe(document, {
    subtree: true,
    childList: true
  });
  logger("Intellisense: classname-to-css.ts loaded");
})();
