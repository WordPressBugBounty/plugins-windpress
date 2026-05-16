import { nn as e, vn as t } from "./runtime-core.esm-bundler-D9h95518.js";
import { y as n } from "./dist-DLpAN_PP.js";
import { t as r } from "./set-BX7sa9_7.js";
import { t as i } from "./get-EDJoEFUP.js";
function a(a2, o) {
  let s = o?.persist ? n(o.persist, a2) : t(a2), c = {};
  function l(t2, n2) {
    return c[t2] || (c[t2] = e((e2, a3) => ({ get() {
      return e2(), i(s.value, t2, n2);
    }, set(e3) {
      r(s.value, t2, e3), a3();
    } }))), c[t2];
  }
  return { state: s, getVirtualRef: l };
}
export {
  a as t
};
