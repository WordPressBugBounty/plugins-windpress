import { t as e } from "./logger-DDCO5Eq-.js";
import { t } from "./constant-DsrzjBa4.js";
wp.hooks.addFilter(`windpresslivecanvas-autocomplete-items-query`, `windpresslivecanvas`, async (e2, n) => {
  let r = await t.contentWindow.windpress.module.autocomplete.query(e2);
  return n === void 0 ? r : [...r, ...n];
}), e(`Module loaded!`, { module: `autocomplete` });
