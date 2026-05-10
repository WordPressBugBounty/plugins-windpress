const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../main-CVmv1UYZ.css","../main-B9kzaE24.css"])))=>i.map(i=>d[i]);
import { t as e } from "../preload-helper-DYZqtPCf.js";
import { t } from "../logger-DDCO5Eq-.js";
(async () => {
  t(`Loading...`), (async () => {
    for (; !document.getElementById(`previewiframe`)?.contentDocument.querySelector(`#lc-main`); ) await new Promise((e2) => setTimeout(e2, 100));
    t(`Loading modules...`), await e(() => import("../main-B6W99Kna2.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-BmyDaA3Q2.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-oSYs9fvp2.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main--xZMhtJH.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0]), import.meta.url), await e(() => import("../main-DX_gN-a5.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([1]), import.meta.url), t(`Modules loaded!`);
  })();
})();
