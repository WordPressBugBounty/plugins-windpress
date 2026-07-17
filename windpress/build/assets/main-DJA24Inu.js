import { Ht as e } from "./runtime-core.esm-bundler-Twwq1XF8.js";
import { t } from "./virtualRef-BIMnStjw.js";
import { t as n } from "./logger-CvF98D4V.js";
import { t as r } from "./windpress-DeFkqy8G.js";
import { i } from "./constant-DpZqgQ1m.js";
var a = `.topbar-section.undo-redo-top-bar-section`, o = `windpressoxygen-settings-button`, s = `breakdance-toolbar-icon-button-active`, c = 20, l = 250, u = document.createRange().createContextualFragment(`
    <div class="topbar-section topbar-section-bl">
        <div id="${o}" class="breakdance-toolbar-icon-button" role="button" tabindex="0" aria-label="Open WindPress settings" title="WindPress settings">
            <div class="breakdance-icon" style="width: 18px; height: 18px;">
                ${r}
            </div>
        </div>
    </div>
`), { getVirtualRef: d } = t({}, { persist: `windpress.ui.state` }), f, p = false;
function m(e2 = 0) {
  let t2 = document.querySelector(`#${o}`);
  if (t2) {
    b(t2);
    return;
  }
  let r2 = document.querySelector(a) ?? document.querySelector(`.topbar-section`);
  if (!r2?.parentNode) {
    if (e2 < c) {
      setTimeout(() => m(e2 + 1), l);
      return;
    }
    n(`Unable to mount the settings button: toolbar not found.`, { module: `settings`, type: `warn` });
    return;
  }
  r2.parentNode.insertBefore(u, r2), b(document.querySelector(`#${o}`));
}
function h() {
  return document.querySelector(`#windpress-iframe`) ?? i?.contentDocument?.querySelector(`#windpress-iframe`);
}
function g() {
  let e2 = d(`window.minimized`, false).value;
  d(`window.minimized`, false).value = !e2;
}
function _() {
  let e2 = window.windpressoxygen?.site_meta?.admin_url;
  if (!e2) {
    n(`Unable to open WindPress settings: admin URL is missing.`, { module: `settings`, type: `warn` });
    return;
  }
  window.open(e2, `_blank`, `noopener,noreferrer`);
}
function v(e2) {
  let t2 = h();
  f?.classList.toggle(s, !!(t2 && e2)), f?.setAttribute(`aria-pressed`, String(!!(t2 && e2))), t2 && (t2.style.display = e2 ? `block` : `none`);
}
function y(e2) {
  if (e2.preventDefault(), e2.stopPropagation(), !h()) {
    _();
    return;
  }
  g(), v(!d(`window.minimized`, false).value);
}
function b(t2) {
  !t2 || t2.dataset.windpressoxygenSettingsMounted === `true` || (f = t2, f.dataset.windpressoxygenSettingsMounted = `true`, f.addEventListener(`click`, y), f.addEventListener(`keydown`, (e2) => {
    [`Enter`, ` `].includes(e2.key) && y(e2);
  }), p || (p = true, e(() => d(`window.minimized`, false).value, (e2) => {
    v(!e2);
  })), v(!d(`window.minimized`, false).value));
}
m(), n(`Module loaded!`, { module: `settings` });
