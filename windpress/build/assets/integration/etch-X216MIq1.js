const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../classname-to-css-jJYwSMkU.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "../../chunks/preload-helper-BVFHbGtQ.min.js";
import { l as logger } from "../logger-DmkfWO2A.js";
(async () => {
  logger("Loading...");
  (async () => {
    var _a;
    while (!((_a = document.getElementById("etch-iframe")) == null ? void 0 : _a.contentDocument.querySelector("body"))) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    logger("Loading modules...");
    await __vitePreload(() => import("../observer-MEmHG1Cz.js"), true ? [] : void 0, import.meta.url);
    await __vitePreload(() => import("../classname-to-css-yqD6oJnx.js").then(async (m) => {
      await m.__tla;
      return m;
    }), true ? __vite__mapDeps([0]) : void 0, import.meta.url);
    await __vitePreload(() => import("../element-attribute-panel-DAIeRWZ7.js"), true ? [] : void 0, import.meta.url);
  })();
})();
