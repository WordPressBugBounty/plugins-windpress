import { t as e } from "./logger-CvF98D4V.js";
import { t } from "./constant-d2GFTaEb.js";
wp.hooks.addFilter(`windpresslivecanvas-autocomplete-items-query`, `windpresslivecanvas`, async (e2, n) => {
  let r = await t.contentWindow.windpress.module.autocomplete.query(e2);
  return n === void 0 ? r : [...r, ...n];
}), e(`Module loaded!`, { module: `autocomplete` });
