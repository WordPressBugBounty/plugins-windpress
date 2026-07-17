import { D as e, On as t, St as n, Zn as r, _ as i, g as a, k as o, mt as s, qt as c, v as l, xt as u } from "./runtime-core.esm-bundler-Twwq1XF8.js";
import { t as d } from "./Tooltip-CPUUajce.js";
import { C as f, H as p, S as m, b as h, t as g, v as _ } from "./Button-DbU2pTtV.js";
import { h as v } from "./useApi-CROJJdhE-DpbaUaur.js";
import { t as y } from "./NavigationMenu-BjdTXMUa.js";
import { n as b } from "./useToast-Bh4s-mFR.js";
import { r as x, t as S } from "./settings-DsLgXECG.js";
import { n as C, t as w } from "./DashboardNavbar-BmMVUB2G.js";
import { t as T } from "./DashboardSidebarCollapse-_wrNpC08.js";
var E = { slots: { root: `shrink-0 flex items-center justify-between border-b border-default px-4 sm:px-6 gap-1.5 overflow-x-auto min-h-[49px]`, left: `flex items-center gap-1.5`, right: `flex items-center gap-1.5` } }, D = { __name: `DashboardToolbar`, props: { as: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e2) {
  let n2 = m(`dashboardToolbar`, e2), o2 = p(), d2 = a(() => h({ extend: E, ...o2.ui?.dashboardToolbar || {} })());
  return (e3, a2) => (s(), l(t(f), { as: t(n2).as, "data-slot": `root`, class: r(d2.value.root({ class: [t(n2).ui?.root, t(n2).class] })) }, { default: c(() => [u(e3.$slots, `default`, {}, () => [i(`div`, { "data-slot": `left`, class: r(d2.value.left({ class: [t(n2).ui?.left] })) }, [u(e3.$slots, `left`)], 2), i(`div`, { "data-slot": `right`, class: r(d2.value.right({ class: [t(n2).ui?.right] })) }, [u(e3.$slots, `right`)], 2)])]), _: 3 }, 8, [`as`, `class`]));
} }, O = { class: `flex flex-col gap-4 sm:gap-6 lg:gap-12 w-full lg:max-w-2xl mx-auto` }, k = { class: `flex justify-end` }, A = o({ __name: `Settings`, setup(r2) {
  let o2 = v(), u2 = b(), f2 = S(), p2 = x();
  async function m2() {
    let e2 = { title: wp.i18n.__(`Saving...`, `windpress`), description: wp.i18n.__(`Please wait while we save your changes.`, `windpress`), duration: 0, icon: `lucide:loader-circle`, close: false, color: `neutral`, ui: { icon: `animate-spin` } };
    return u2.toasts.value.find((e3) => e3.id === `settings.doSave`) ? u2.update(`settings.doSave`, { ...e2 }) : u2.add({ id: `settings.doSave`, ...e2 }), f2.doPush().then(() => {
      u2.update(`settings.doSave`, { title: wp.i18n.__(`Saved`, `windpress`), description: wp.i18n.__(`Your changes have been saved.`, `windpress`), icon: `i-lucide-save`, color: `success`, duration: void 0, close: true, ui: { icon: void 0 } });
    }).catch((e3) => {
      u2.update(`settings.doSave`, { title: wp.i18n.__(`Error`, `windpress`), description: wp.i18n.__(`An error occurred while saving your changes.`, `windpress`), icon: `i-lucide-save`, color: `error`, duration: void 0, close: true, ui: { icon: void 0 } });
    }).finally(() => {
    });
  }
  let h2 = a(() => [[{ label: wp.i18n.__(`General`, `windpress`), to: o2.resolve({ name: `settings.general` }), icon: `lucide:settings`, exact: true }, { label: wp.i18n.__(`Performance`, `windpress`), to: o2.resolve({ name: `settings.performance` }), icon: `lucide:rocket`, exact: true }, { label: wp.i18n.__(`Integrations`, `windpress`), to: o2.resolve({ name: `settings.integrations` }), icon: `lucide:package` }], [{ label: wp.i18n.__(`Save`, `windpress`), icon: `lucide:save`, color: `primary`, onSelect: m2, disabled: p2.isBusy, badge: f2.hasChanged ? { color: `warning`, variant: `solid` } : void 0 }]]);
  return (r3, a2) => {
    let o3 = T, u3 = w, v2 = y, b2 = D, x2 = n(`RouterView`), S2 = g, E2 = _, A2 = d, j = C;
    return s(), l(j, { id: `settings`, ui: { body: `lg:py-12` } }, { header: c(() => [e(u3, { title: r3.i18n.__(`Settings`, `windpress`) }, { leading: c(() => [e(o3)]), _: 1 }, 8, [`title`]), e(b2, null, { default: c(() => [e(v2, { items: h2.value, highlight: ``, class: `-mx-1 flex-1` }, null, 8, [`items`])]), _: 1 })]), body: c(() => [i(`div`, O, [e(x2), i(`div`, k, [e(A2, { text: r3.i18n.__(`Save`, `windpress`) }, { default: c(() => [t(f2).hasChanged ? (s(), l(E2, { key: 0, color: `warning`, size: `md` }, { default: c(() => [e(S2, { icon: `i-lucide-save`, color: `primary`, label: r3.i18n.__(`Save`, `windpress`), onClick: m2, disabled: t(p2).isBusy }, null, 8, [`label`, `disabled`])]), _: 1 })) : (s(), l(S2, { key: 1, icon: `i-lucide-save`, color: `primary`, label: r3.i18n.__(`Save`, `windpress`), onClick: m2, disabled: t(p2).isBusy }, null, 8, [`label`, `disabled`]))]), _: 1 }, 8, [`text`])])])]), _: 1 });
  };
} });
export {
  A as default
};
