import { t as e } from "./preload-helper-DYZqtPCf.js";
import { t } from "./logger-DDCO5Eq-.js";
import { n, t as r } from "./tippy.esm-BM7Jrbjn.js";
import { n as i, t as a } from "./dist-CnmMLal_.js";
import { t as o } from "./constant-FwoLVRhV2.js";
(async () => {
  var s = null;
  (async () => {
    s = await i({
      themes: [
        e(() => import("./dark-plus-DFfF31dX.js").then(async (m) => {
          await m.__tla;
          return m;
        }), [], import.meta.url),
        e(() => import("./light-plus-CPnO7ha4.js").then(async (m) => {
          await m.__tla;
          return m;
        }), [], import.meta.url)
      ],
      langs: [
        e(() => import("./css-CfUXbuaZ.js").then(async (m) => {
          await m.__tla;
          return m;
        }), [], import.meta.url)
      ],
      engine: a(e(() => import("./wasm-DB77wBvQ.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url))
    });
  })();
  var c = n(document.createElement(`div`), {
    plugins: [
      r
    ],
    allowHTML: true,
    arrow: false,
    duration: [
      500,
      0
    ],
    followCursor: true,
    trigger: `manual`
  });
  async function l(e2) {
    let t2 = await o().contentWindow.windpress.module.classnameToCss.generate(e2);
    if (t2 === null || t2.trim() === ``) return null;
    c.setContent(s.codeToHtml(t2, {
      lang: `css`,
      theme: `dark-plus`
    })), c.show();
  }
  new MutationObserver(() => {
    document.querySelectorAll(`.cm-etch-selector:not([data-windpressInjected])`).forEach((e2) => {
      e2.addEventListener(`mouseover`, () => {
        let t2 = e2.firstChild?.textContent;
        t2 && l(t2);
      }), e2.addEventListener(`mouseout`, () => {
        c.hide();
      }), e2.setAttribute(`data-windpressInjected`, `true`);
    });
  }).observe(document, {
    subtree: true,
    childList: true
  }), t(`Intellisense: classname-to-css.ts loaded`);
})();
