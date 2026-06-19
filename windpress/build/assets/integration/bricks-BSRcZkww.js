const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../main-CtFFRAP_.css","../style-DadGt3jf.css","../main-Bs6rESXf.css"])))=>i.map(i=>d[i]);
import { t as e } from "../preload-helper-CwQZjUKM.js";
import { t } from "../logger-CvF98D4V.js";
(async () => {
  t(`Loading...`), (async () => {
    for (; !document.querySelector(`.brx-body`)?.__vue_app__; ) await new Promise((e2) => setTimeout(e2, 100));
    for (; document.getElementById(`bricks-preloader`); ) await new Promise((e2) => setTimeout(e2, 100));
    for (; !document.getElementById(`bricks-builder-iframe`)?.contentDocument.querySelector(`.brx-body`)?.__vue_app__; ) await new Promise((e2) => setTimeout(e2, 100));
    let { brxIframe: n } = await e(async () => {
      let { brxIframe: e2 } = await import("../constant-AeTmsCu2.js").then(async (m) => {
        await m.__tla;
        return m;
      });
      return {
        brxIframe: e2
      };
    }, [], import.meta.url);
    t(`Loading modules...`), await e(() => import("../main-CY6tmBlr.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0]), import.meta.url), window.bricksData.version.startsWith(`1`) ? await e(() => import("../main-1.x-s9vlUUUG.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([1]), import.meta.url) : await e(() => import("../main-CPoCR2_A.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([1]), import.meta.url), await e(() => import("../main-Cl6KqhUU.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-DPFNniuY.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), Number(n.contentWindow.windpress?._tailwindcss_version) === 4 && (await e(() => import("../main-CEZZ2JaX.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-77RUYj_H.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-C4_4o98E.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([2]), import.meta.url)), t(`Modules loaded!`);
  })();
})();
