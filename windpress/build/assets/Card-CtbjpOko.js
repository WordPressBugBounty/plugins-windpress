import { Lt as e, On as t, Zn as n, b as r, g as i, mt as a, qt as o, v as s, xt as c, y as l } from "./runtime-core.esm-bundler-CahM68iJ.js";
import { b as u, q as d, x as f, y as p } from "./Button-DpvhuBJO.js";
var m = { slots: { root: `rounded-lg overflow-hidden`, header: `p-4 sm:px-6`, body: `p-4 sm:p-6`, footer: `p-4 sm:px-6` }, variants: { variant: { solid: { root: `bg-inverted text-inverted` }, outline: { root: `bg-default ring ring-default divide-y divide-default` }, soft: { root: `bg-elevated/50 divide-y divide-default` }, subtle: { root: `bg-elevated/50 ring ring-default divide-y divide-default` } } }, defaultVariants: { variant: `outline` } }, h = { __name: `Card`, props: { as: { type: null, required: false }, variant: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(h2) {
  let g = h2, _ = e(), v = d(), y = u(`card`, g), b = i(() => {
    var _a;
    return p({ extend: p(m), ...((_a = v.ui) == null ? void 0 : _a.card) || {} })({ variant: g.variant });
  });
  return (e2, i2) => {
    var _a;
    return a(), s(t(f), { as: h2.as, "data-slot": `root`, class: n(b.value.root({ class: [(_a = t(y)) == null ? void 0 : _a.root, g.class] })) }, { default: o(() => {
      var _a2, _b, _c;
      return [_.header ? (a(), r(`div`, { key: 0, "data-slot": `header`, class: n(b.value.header({ class: (_a2 = t(y)) == null ? void 0 : _a2.header })) }, [c(e2.$slots, `header`)], 2)) : l(``, true), _.default ? (a(), r(`div`, { key: 1, "data-slot": `body`, class: n(b.value.body({ class: (_b = t(y)) == null ? void 0 : _b.body })) }, [c(e2.$slots, `default`)], 2)) : l(``, true), _.footer ? (a(), r(`div`, { key: 2, "data-slot": `footer`, class: n(b.value.footer({ class: (_c = t(y)) == null ? void 0 : _c.footer })) }, [c(e2.$slots, `footer`)], 2)) : l(``, true)];
    }), _: 3 }, 8, [`as`, `class`]);
  };
} };
export {
  h as t
};
