const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../main-CVmv1UYZ.css","../main-B9kzaE24.css"])))=>i.map(i=>d[i]);
import { t as e } from "../preload-helper-Cb81DA_d.js";
import { t } from "../logger-BvowV9fY.js";
(async () => {
  t(`Loading...`), (async () => {
    var _a;
    for (; !((_a = document.getElementById(`previewiframe`)) == null ? void 0 : _a.contentDocument.querySelector(`#lc-main`)); ) await new Promise((e2) => setTimeout(e2, 100));
    t(`Loading modules...`), await e(() => import("../main-DfX09HsX2.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-Slm9ZyF22.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-C7kKol_b2.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-CqWrjfff.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0]), import.meta.url), await e(() => import("../main-BA_EiqEk.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([1]), import.meta.url), t(`Modules loaded!`);
  })();
})();
