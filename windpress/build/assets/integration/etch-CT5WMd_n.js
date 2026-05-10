const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../classname-to-css-bnJC-Ck2.css"])))=>i.map(i=>d[i]);
import { t as e } from "../preload-helper-DYZqtPCf.js";
import { t } from "../logger-DDCO5Eq-.js";
(async () => {
  t(`Loading...`), (async () => {
    for (; !document.getElementById(`etch-iframe`)?.contentDocument?.querySelector(`body`); ) await new Promise((e2) => setTimeout(e2, 100));
    t(`Loading modules...`), await e(() => import("../observer-CQrgnZmx.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url), await e(() => import("../classname-to-css-DlMnMqgj.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0]), import.meta.url), await e(() => import("../element-attribute-panel-MPZ_8ACX.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url);
  })();
})();
