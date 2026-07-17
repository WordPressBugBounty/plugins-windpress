import { On as e, et as t, k as n, mt as r, qt as i, v as a, xt as o } from "./runtime-core.esm-bundler-Twwq1XF8.js";
import { y as s } from "./Tooltip-CPUUajce.js";
import { C as c } from "./Button-DbU2pTtV.js";
var l = n({ __name: `Label`, props: { for: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `label` } }, setup(n2) {
  let l2 = n2;
  return s(), (n3, s2) => (r(), a(e(c), t(l2, { onMousedown: s2[0] || (s2[0] = (e2) => {
    !e2.defaultPrevented && e2.detail > 1 && e2.preventDefault();
  }) }), { default: i(() => [o(n3.$slots, `default`)]), _: 3 }, 16));
} });
export {
  l as t
};
