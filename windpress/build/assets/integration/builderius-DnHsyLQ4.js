const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../main-YcKSHWiO.css","../main-BaLYeai_.css"])))=>i.map(i=>d[i]);
import { t as e } from "../preload-helper-CtT0-S4g.js";
import { t } from "../logger-CvF98D4V.js";
(async () => {
  t(`Loading...`), (async () => {
    for (; !document.getElementById(`builderInner`)?.contentDocument.querySelector(`#builderiusBuilder`); ) await new Promise((e2) => setTimeout(e2, 100));
    let { uniIframe: n } = await e(async () => {
      let { uniIframe: e2 } = await import("../constant-Bk4zz4qV.js").then(async (m) => {
        await m.__tla;
        return m;
      });
      return {
        uniIframe: e2
      };
    }, [], import.meta.url);
    t(`Loading modules...`), await e(() => import("../main-D-QYjRt6.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0]), import.meta.url), await e(() => import("../main-sOJ6YwVT.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), Number(n.contentWindow.windpress?._tailwindcss_version) === 4 && (await e(() => import("../main-B4VBa1pS.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-pCpK6H93.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-BR1Rgf3I.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([1]), import.meta.url)), t(`Modules loaded!`);
  })();
})();
