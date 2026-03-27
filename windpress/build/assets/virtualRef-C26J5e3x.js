import { nn as e, vn as t } from "./runtime-core.esm-bundler-CahM68iJ.js";
import { y as n } from "./dist-BKF-Yqo1.js";
import { t as r } from "./set-Re2vSVSO.js";
import { t as i } from "./get-zOKxY8EX.js";
function a(a2, o) {
  let s = (o == null ? void 0 : o.persist) ? n(o.persist, a2) : t(a2), c = {};
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
