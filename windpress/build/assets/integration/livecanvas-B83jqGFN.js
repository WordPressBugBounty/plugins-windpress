const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../main-CVmv1UYZ.css","../main-B9kzaE24.css"])))=>i.map(i=>d[i]);
import { t as e } from "../preload-helper-CtT0-S4g.js";
import { t } from "../logger-CvF98D4V.js";
(async () => {
  t(`Loading...`), (async () => {
    for (; !document.getElementById(`previewiframe`)?.contentDocument.querySelector(`#lc-main`); ) await new Promise((e2) => setTimeout(e2, 100));
    t(`Loading modules...`), await e(() => import("../main-CR6fP_-W2.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-CCjX2Ybz2.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-C5hBiGyQ2.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../main-z0cln8hO.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0]), import.meta.url), await e(() => import("../main-RImWPFXy.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([1]), import.meta.url), t(`Modules loaded!`);
  })();
})();
