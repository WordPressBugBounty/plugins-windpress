import { On as e, et as t, g as n, mt as r, v as i, vn as a } from "./runtime-core.esm-bundler-Twwq1XF8.js";
import { H as o, S as s, b as c, t as l, x as u } from "./Button-DbU2pTtV.js";
import { v as d } from "./dist-Bw8ba7To.js";
import { a as f, s as p } from "./DashboardSidebarToggle-DwmriNl0.js";
var m = { base: `hidden lg:flex`, variants: { side: { left: ``, right: `` } } }, h = { __name: `DashboardSidebarCollapse`, props: { color: { type: null, required: false, default: `neutral` }, variant: { type: null, required: false, default: `ghost` }, side: { type: String, required: false, default: `left` }, ui: { type: Object, required: false }, label: { type: String, required: false }, activeColor: { type: null, required: false }, activeVariant: { type: null, required: false }, size: { type: null, required: false }, square: { type: Boolean, required: false }, block: { type: Boolean, required: false }, loadingAuto: { type: Boolean, required: false }, onClick: { type: [Function, Array], required: false }, class: { type: null, required: false }, icon: { type: null, required: false }, avatar: { type: Object, required: false }, leading: { type: Boolean, required: false }, leadingIcon: { type: null, required: false }, trailing: { type: Boolean, required: false }, trailingIcon: { type: null, required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: null, required: false }, as: { type: null, required: false }, type: { type: null, required: false }, disabled: { type: Boolean, required: false }, exactActiveClass: { type: String, required: false }, viewTransition: { type: Boolean, required: false } }, setup(h2) {
  let g = s(`dashboardSidebarCollapse`, h2), _ = u(d(g, `icon`, `side`, `class`)), { t: v } = p(), y = o(), { sidebarCollapsed: b, collapseSidebar: x } = f({ sidebarCollapsed: a(false), collapseSidebar: () => {
  } }), S = n(() => c({ extend: m, ...y.ui?.dashboardSidebarCollapse || {} }));
  return (n2, a2) => (r(), i(l, t({ ...e(_), icon: e(g).icon || (e(b) ? e(y).ui.icons.panelOpen : e(y).ui.icons.panelClose), "aria-label": e(b) ? e(v)(`dashboardSidebarCollapse.expand`) : e(v)(`dashboardSidebarCollapse.collapse`), ...n2.$attrs }, { class: S.value({ class: [e(g).ui?.base, e(g).class], side: e(g).side }), onClick: a2[0] || (a2[0] = (t2) => e(x)?.(!e(b))) }), null, 16, [`class`]));
} };
export {
  h as t
};
