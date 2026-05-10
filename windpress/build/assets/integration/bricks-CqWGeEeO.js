const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../main-CtFFRAP_.css","../style-DadGt3jf.css","../main-Bs6rESXf.css"])))=>i.map(i=>d[i]);
import { t as e } from "../preload-helper-DYZqtPCf.js";
import { t } from "../logger-DDCO5Eq-.js";
(async () => {
  t(`Loading...`), (async () => {
    for (; !document.querySelector(`.brx-body`)?.__vue_app__; ) await new Promise((e2) => setTimeout(e2, 100));
    for (; document.getElementById(`bricks-preloader`); ) await new Promise((e2) => setTimeout(e2, 100));
    for (; !document.getElementById(`bricks-builder-iframe`)?.contentDocument.querySelector(`.brx-body`)?.__vue_app__; ) await new Promise((e2) => setTimeout(e2, 100));
    let { brxIframe: n } = await e(async () => {
      let { brxIframe: e2 } = await import("../constant-BDiVUC59.js").then(async (m) => {
        await m.__tla;
        return m;
      });
      return {
        brxIframe: e2
      };
    }, [], import.meta.url);
    t(`Loading modules...`), await e(() => import("../main-CItoCUqY.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0]), import.meta.url), window.bricksData.version.startsWith(`1`) ? await e(() => import("../main-1.x-DSI6U-LT.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([1]), import.meta.url) : await e(() => import("../main-RV9MWa7F.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([1]), import.meta.url), await e(() => import("../main-AwGqstAV.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-BMrnxYUN.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), Number(n.contentWindow.windpress?._tailwindcss_version) === 4 && (await e(() => import("../main-Dwh7i-mo.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-DJ-5rdi_.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-DE-_WVT1.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([2]), import.meta.url)), t(`Modules loaded!`);
  })();
})();
