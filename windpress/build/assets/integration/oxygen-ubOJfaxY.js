const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../main-D-wNfvOV.css","../main-QuYcUprW.css"])))=>i.map(i=>d[i]);
import { t as e } from "../preload-helper-CwQZjUKM.js";
import { t } from "../logger-CvF98D4V.js";
(async () => {
  t(`Loading...`), (async () => {
    for (console.log(`Waiting for Vue app to be ready...`); !document.querySelector(`#app`)?.__vue_app__; ) await new Promise((e2) => setTimeout(e2, 100));
    for (; !document.querySelector(`#app #iframe`)?.contentDocument.querySelector(`#breakdance_canvas`); ) await new Promise((e2) => setTimeout(e2, 100));
    let { bdeIframe: n } = await e(async () => {
      let { bdeIframe: e2 } = await import("../constant-DuIqP03f.js").then(async (m) => {
        await m.__tla;
        return m;
      });
      return {
        bdeIframe: e2
      };
    }, [], import.meta.url);
    t(`Loading modules...`), await e(() => import("../main-CKe5bNXN.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0]), import.meta.url), await e(() => import("../main-B1GpM8tm.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-1c4RxPS3.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), Number(n.contentWindow.windpress?._tailwindcss_version) === 4 && (await e(() => import("../main-wEZo8gvX.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-BvOx3HCo.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([1]), import.meta.url)), t(`Modules loaded!`);
  })();
})();
