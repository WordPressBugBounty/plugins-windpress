const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../main-D-wNfvOV.css","../main-QuYcUprW.css"])))=>i.map(i=>d[i]);
import { t as e } from "../preload-helper-DYZqtPCf.js";
import { t } from "../logger-DDCO5Eq-.js";
(async () => {
  t(`Loading...`), (async () => {
    for (console.log(`Waiting for Vue app to be ready...`); !document.querySelector(`#app`)?.__vue_app__; ) await new Promise((e2) => setTimeout(e2, 100));
    for (; !document.querySelector(`#app #iframe`)?.contentDocument.querySelector(`#breakdance_canvas`); ) await new Promise((e2) => setTimeout(e2, 100));
    let { bdeIframe: n } = await e(async () => {
      let { bdeIframe: e2 } = await import("../constant-BpdHdtZJ.js").then(async (m) => {
        await m.__tla;
        return m;
      });
      return {
        bdeIframe: e2
      };
    }, [], import.meta.url);
    t(`Loading modules...`), await e(() => import("../main-C9nNo-_K.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0]), import.meta.url), await e(() => import("../main-Co1U6Y99.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-BoCKu7_U.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), Number(n.contentWindow.windpress?._tailwindcss_version) === 4 && (await e(() => import("../main-DASX0-8j.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-Dd1WnEgj.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([1]), import.meta.url)), t(`Modules loaded!`);
  })();
})();
