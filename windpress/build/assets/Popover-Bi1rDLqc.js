import { $n as e, D as t, Lt as n, On as r, Zn as i, et as a, g as o, jt as s, mt as c, qt as l, v as u, wn as d, xt as f, y as p, z as m } from "./runtime-core.esm-bundler-CahM68iJ.js";
import { U as h, b as g, q as _, y as v } from "./Button-DpvhuBJO.js";
import { A as y } from "./dist-BKF-Yqo1.js";
import { a as b, o as x } from "./namespaced-BdQ8WLes.js";
import { i as S, v as C } from "./Tooltip-CZRNrufK.js";
import { t as w } from "./overlay-DdDSYYrH.js";
var T = { slots: { content: `bg-default shadow-lg rounded-md ring ring-default data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto`, arrow: `fill-bg stroke-default` } }, E = { __name: `Popover`, props: { mode: { type: null, required: false, default: `click` }, content: { type: Object, required: false }, arrow: { type: [Boolean, Object], required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, reference: { type: null, required: false }, dismissible: { type: Boolean, required: false, default: true }, class: { type: null, required: false }, ui: { type: null, required: false }, defaultOpen: { type: Boolean, required: false }, open: { type: Boolean, required: false }, modal: { type: Boolean, required: false }, openDelay: { type: Number, required: false, default: 0 }, closeDelay: { type: Number, required: false, default: 0 } }, emits: [`close:prevent`, `update:open`], setup(E2, { emit: D }) {
  let O = E2, k = D, A = n(), j = _(), M = g(`popover`, O), N = C(O.mode === `hover` ? y(O, `defaultOpen`, `open`, `openDelay`, `closeDelay`) : y(O, `defaultOpen`, `open`, `modal`), k), P = S(d(() => O.portal)), F = d(() => h(O.content, { side: `bottom`, sideOffset: 8, collisionPadding: 8 })), I = o(() => O.dismissible ? { pointerDownOutside: w } : [`interactOutside`, `escapeKeyDown`].reduce((e2, t2) => (e2[t2] = (e3) => {
    e3.preventDefault(), k(`close:prevent`);
  }, e2), {})), L = d(() => h(O.arrow, { rounded: true })), R = o(() => {
    var _a;
    return v({ extend: v(T), ...((_a = j.ui) == null ? void 0 : _a.popover) || {} })({ side: F.value.side });
  }), z = o(() => O.mode === `hover` ? b : x);
  return (n2, o2) => (c(), u(r(z).Root, e(m(r(N))), { default: l(({ open: o3, close: d2 }) => [A.default || E2.reference ? (c(), u(r(z).Trigger, { key: 0, "as-child": ``, reference: E2.reference, class: i(O.class) }, { default: l(() => [f(n2.$slots, `default`, { open: o3 })]), _: 2 }, 1032, [`reference`, `class`])) : p(``, true), `Anchor` in z.value && A.anchor ? (c(), u(r(z).Anchor, { key: 1, "as-child": `` }, { default: l(() => [f(n2.$slots, `anchor`, e(m(d2 ? { close: d2 } : {})))]), _: 2 }, 1024)) : p(``, true), t(r(z).Portal, e(m(r(P))), { default: l(() => {
    var _a;
    return [t(r(z).Content, a(F.value, { "data-slot": `content`, class: R.value.content({ class: [!A.default && O.class, (_a = r(M)) == null ? void 0 : _a.content] }) }, s(I.value)), { default: l(() => {
      var _a2;
      return [f(n2.$slots, `content`, e(m(d2 ? { close: d2 } : {}))), E2.arrow ? (c(), u(r(z).Arrow, a({ key: 0 }, L.value, { "data-slot": `arrow`, class: R.value.arrow({ class: (_a2 = r(M)) == null ? void 0 : _a2.arrow }) }), null, 16, [`class`])) : p(``, true)];
    }), _: 2 }, 1040, [`class`])];
  }), _: 2 }, 1040)]), _: 3 }, 16));
} };
export {
  E as t
};
