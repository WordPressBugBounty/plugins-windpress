import { Ht as e, J as t, On as n, Zn as r, et as i, g as a, mt as o, qt as s, un as c, v as l, vn as u, wn as d, xt as f } from "./runtime-core.esm-bundler-Twwq1XF8.js";
import { C as p, H as m, N as h, O as g, S as _, V as v, b as y, t as b, x } from "./Button-DbU2pTtV.js";
import { r as S } from "./base-CvBTaoCY.js";
import { a as C, v as w } from "./dist-Bw8ba7To.js";
import { y as T } from "./dist-ChpmCc7n.js";
function E(e2) {
  return v(e2, { dir: `ltr` });
}
function D(e2) {
  return (t2, r2) => O(t2, r2, n(e2));
}
function O(e2, t2, n2) {
  return h(n2, `messages.${e2}`, e2).replace(/\{(\w+)\}/g, (e3, n3) => `${t2?.[n3] ?? `{${n3}}`}`);
}
function k(e2) {
  return { lang: a(() => n(e2).name), code: a(() => n(e2).code), dir: a(() => n(e2).dir), locale: c(e2) ? e2 : u(e2), t: D(e2) };
}
var A = E({ name: `English`, code: `en`, messages: { alert: { close: `Close` }, authForm: { hidePassword: `Hide password`, showPassword: `Show password`, submit: `Continue` }, banner: { close: `Close` }, calendar: { nextMonth: `Next month`, nextYear: `Next year`, prevMonth: `Previous month`, prevYear: `Previous year` }, carousel: { dots: `Choose slide to display`, goto: `Go to slide {slide}`, next: `Next`, prev: `Prev` }, chatPrompt: { placeholder: `Type your message here\u2026` }, chatPromptSubmit: { label: `Send prompt` }, colorMode: { dark: `Dark`, light: `Light`, switchToDark: `Switch to dark mode`, switchToLight: `Switch to light mode`, system: `System` }, commandPalette: { back: `Back`, close: `Close`, noData: `No data`, noMatch: `No matching data`, placeholder: `Type a command or search\u2026` }, contentSearch: { links: `Links`, search: `Results`, theme: `Theme` }, contentSearchButton: { label: `Search\u2026` }, contentToc: { title: `On this page` }, dropdownMenu: { noMatch: `No matching data`, search: `Search\u2026` }, dashboardSearch: { theme: `Theme` }, dashboardSearchButton: { label: `Search\u2026` }, dashboardSidebarCollapse: { collapse: `Collapse sidebar`, expand: `Expand sidebar` }, dashboardSidebarToggle: { close: `Close sidebar`, open: `Open sidebar` }, drawer: { close: `Close` }, error: { clear: `Back to home` }, fileUpload: { removeFile: `Remove {filename}` }, header: { close: `Close menu`, open: `Open menu` }, inputMenu: { create: `Create "{label}"`, noData: `No data`, noMatch: `No matching data` }, inputNumber: { decrement: `Decrement`, increment: `Increment` }, listbox: { noData: `No data`, noMatch: `No matching data`, search: `Search\u2026` }, modal: { close: `Close` }, pricingTable: { caption: `Pricing plan comparison` }, prose: { codeCollapse: { closeText: `Collapse`, name: `code`, openText: `Expand` }, collapsible: { closeText: `Hide`, name: `properties`, openText: `Show` }, pre: { copy: `Copy code to clipboard` }, prompt: { copy: `Copy prompt`, openIn: `Open in {name}` } }, chatReasoning: { thinking: `Thinking\u2026`, thought: `Thought`, thoughtFor: `Thought for {duration}` }, sidebar: { close: `Close`, toggle: `Toggle` }, selectMenu: { create: `Create "{label}"`, noData: `No data`, noMatch: `No matching data`, search: `Search\u2026` }, slideover: { close: `Close` }, table: { noData: `No data` }, toast: { close: `Close` } } }), j = /* @__PURE__ */ Symbol.for(`nuxt-ui.locale-context`), M = C((e2) => {
  let n2 = e2 || d(t(j, A));
  return k(a(() => n2.value || A));
}), [N, P] = g(`DashboardGroup`);
function F(t2, r2 = {}, { collapsed: i2 = u(false) } = {}) {
  let o2 = u(null), s2 = a(() => ({ side: `left`, minSize: 0, maxSize: 100, defaultSize: 0, storage: `cookie`, persistent: true, collapsible: false, collapsedSize: 0, resizable: true, unit: `%`, ...c(r2) ? r2.value : r2 })), { dir: l2 } = M(), d2 = { size: s2.value.defaultSize, collapsed: n(i2) ?? false }, f2 = s2.value.persistent && (s2.value.resizable || s2.value.collapsible) ? s2.value.storage === `cookie` ? S(t2, { ...s2.value.storageOptions, default: () => d2 }) : T(t2, d2, void 0, s2.value.storageOptions) : u(d2), p2 = (e2) => {
    f2.value ? Object.assign(f2.value, e2) : f2.value = { ...d2, ...e2 };
  }, m2 = a({ get: () => f2.value?.collapsed ?? d2.collapsed, set: (e2) => {
    s2.value.collapsible && (c(i2) && (i2.value = e2), p2({ collapsed: e2 }));
  } }), h2 = u(s2.value.defaultSize), g2 = a({ get: () => f2.value?.size ?? s2.value.defaultSize, set: (e2) => {
    p2({ size: e2 });
  } }), _2 = a(() => m2.value ? s2.value.collapsedSize : g2.value), v2 = u(false), y2 = () => s2.value.unit === `rem` ? Number.parseFloat(getComputedStyle(document.documentElement).fontSize) : 1, b2 = (e2, t3, n2, r3) => {
    if (!o2.value || !s2.value.resizable) return;
    let i3 = o2.value.parentElement?.offsetWidth || 1, a2 = l2.value === `rtl`, c2;
    c2 = a2 ? s2.value.side === `left` ? t3 - e2 : e2 - t3 : s2.value.side === `left` ? e2 - t3 : t3 - e2;
    let u2 = n2 + c2, d3;
    if (d3 = s2.value.unit === `rem` ? u2 / r3 : s2.value.unit === `px` ? u2 : u2 / i3 * 100, s2.value.collapsible && d3 < s2.value.collapsedSize + 4) {
      E2(true);
      return;
    } else m2.value && E2(false);
    g2.value = Math.min(s2.value.maxSize, Math.max(s2.value.minSize, d3));
  }, x2 = (e2) => {
    if (!o2.value || !s2.value.resizable) return;
    e2.preventDefault(), e2.stopPropagation();
    let t3 = o2.value.getBoundingClientRect().width;
    if (!t3) return;
    let n2 = e2.clientX, r3 = t3, i3 = y2();
    v2.value = true;
    let a2 = (e3) => {
      b2(e3.clientX, n2, r3, i3);
    }, c2 = () => {
      v2.value = false, document.removeEventListener(`mousemove`, a2), document.removeEventListener(`mouseup`, c2);
    };
    document.addEventListener(`mousemove`, a2), document.addEventListener(`mouseup`, c2);
  }, C2 = (e2) => {
    if (!o2.value || !s2.value.resizable || !e2.touches[0]) return;
    e2.preventDefault(), e2.stopPropagation();
    let t3 = o2.value.getBoundingClientRect().width;
    if (!t3) return;
    let n2 = e2.touches[0].clientX, r3 = t3, i3 = y2();
    v2.value = true;
    let a2 = (e3) => {
      e3.touches[0] && b2(e3.touches[0].clientX, n2, r3, i3);
    }, c2 = () => {
      v2.value = false, document.removeEventListener(`touchmove`, a2), document.removeEventListener(`touchend`, c2), document.removeEventListener(`touchcancel`, c2);
    };
    document.addEventListener(`touchmove`, a2, { passive: false }), document.addEventListener(`touchend`, c2), document.addEventListener(`touchcancel`, c2);
  }, w2 = (e2) => {
    !o2.value || !s2.value.resizable || (e2.preventDefault(), e2.stopPropagation(), m2.value && E2(false), g2.value = s2.value.defaultSize);
  }, E2 = (e2) => {
    if (!s2.value.collapsible) return;
    let t3 = e2 ?? !m2.value;
    t3 && !m2.value ? h2.value = g2.value : !t3 && m2.value && (g2.value = h2.value), m2.value = t3;
  };
  return c(i2) && f2.value?.collapsed && (i2.value = f2.value.collapsed), c(i2) && e(i2, (e2) => {
    s2.value.collapsible && f2.value?.collapsed !== e2 && (m2.value = e2);
  }), { el: o2, size: _2, isDragging: v2, isCollapsed: m2, onMouseDown: x2, onTouchStart: C2, onDoubleClick: w2, collapse: E2 };
}
var I = { base: `hidden lg:block touch-none select-none cursor-ew-resize relative before:absolute before:inset-y-0 before:-left-1.5 before:-right-1.5 before:z-1` }, L = { __name: `DashboardResizeHandle`, props: { as: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e2) {
  let t2 = _(`dashboardResizeHandle`, e2), i2 = m(), c2 = a(() => y({ extend: I, ...i2.ui?.dashboardResizeHandle || {} }));
  return (e3, i3) => (o(), l(n(p), { as: n(t2).as, role: `separator`, class: r(c2.value({ class: [n(t2).ui?.base, n(t2).class] })) }, { default: s(() => [f(e3.$slots, `default`)]), _: 3 }, 8, [`as`, `class`]));
} }, R = { base: `lg:hidden`, variants: { side: { left: ``, right: `` } } }, z = Object.assign({ inheritAttrs: false }, { __name: `DashboardSidebarToggle`, props: { color: { type: null, required: false, default: `neutral` }, variant: { type: null, required: false, default: `ghost` }, side: { type: String, required: false, default: `left` }, ui: { type: Object, required: false }, label: { type: String, required: false }, activeColor: { type: null, required: false }, activeVariant: { type: null, required: false }, size: { type: null, required: false }, square: { type: Boolean, required: false }, block: { type: Boolean, required: false }, loadingAuto: { type: Boolean, required: false }, onClick: { type: [Function, Array], required: false }, class: { type: null, required: false }, icon: { type: null, required: false }, avatar: { type: Object, required: false }, leading: { type: Boolean, required: false }, leadingIcon: { type: null, required: false }, trailing: { type: Boolean, required: false }, trailingIcon: { type: null, required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: null, required: false }, as: { type: null, required: false }, type: { type: null, required: false }, disabled: { type: Boolean, required: false }, exactActiveClass: { type: String, required: false }, viewTransition: { type: Boolean, required: false } }, setup(e2) {
  let t2 = _(`dashboardSidebarToggle`, e2), r2 = x(w(t2, `icon`, `side`, `class`)), { t: s2 } = M(), c2 = m(), { sidebarOpen: d2, toggleSidebar: f2 } = N({ sidebarOpen: u(false), toggleSidebar: () => {
  } }), p2 = a(() => y({ extend: R, ...c2.ui?.dashboardSidebarToggle || {} }));
  return (e3, a2) => (o(), l(b, i({ ...n(r2), icon: n(t2).icon || (n(d2) ? n(c2).ui.icons.close : n(c2).ui.icons.menu), "aria-label": n(d2) ? n(s2)(`dashboardSidebarToggle.close`) : n(s2)(`dashboardSidebarToggle.open`), ...e3.$attrs }, { class: p2.value({ class: [n(t2).ui?.base, n(t2).class], side: n(t2).side }), onClick: n(f2) }), null, 16, [`class`, `onClick`]));
} });
export {
  N as a,
  P as i,
  L as n,
  j as o,
  F as r,
  M as s,
  z as t
};
