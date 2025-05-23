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
    await __vitePreload(() => import("../observer-BtL9khbm.js"), true ? [] : void 0, import.meta.url);
  })();
})();
