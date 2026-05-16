const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../main-6heHhsPc.css","../main-CLglk12r.css"])))=>i.map(i=>d[i]);
import { t as e } from "../preload-helper-DYZqtPCf.js";
import { t } from "../logger-DDCO5Eq-.js";
(async () => {
  t(`Loading...`), (async () => {
    for (; !document.querySelector(`#app`)?.__vue__; ) await new Promise((e2) => setTimeout(e2, 100));
    for (; !document.querySelector(`#app #iframe`)?.contentDocument.querySelector(`#breakdance_canvas`); ) await new Promise((e2) => setTimeout(e2, 100));
    let { bdeIframe: n } = await e(async () => {
      let { bdeIframe: e2 } = await import("../constant-Bip629mT.js").then(async (m) => {
        await m.__tla;
        return m;
      });
      return {
        bdeIframe: e2
      };
    }, [], import.meta.url);
    t(`Loading modules...`), await e(() => import("../main-DBg_J7OS.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0]), import.meta.url), await e(() => import("../main-Bk4FxGJh.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), Number(n.contentWindow.windpress?._tailwindcss_version) === 4 && (await e(() => import("../main-Bgj_zFc9.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-CiGzPdot.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([1]), import.meta.url)), t(`Modules loaded!`);
  })();
})();
