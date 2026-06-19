import { c as e, i as t } from "./isArray-CI0_UXAa.js";
import { r as n } from "./isSymbol-B9ImcFp_.js";
import { t as r } from "./_isIndex-BOCGn4UD.js";
import { n as i, t as a } from "./_toKey-Cl0nXGgz.js";
var o = (function() {
  try {
    var e2 = t(Object, `defineProperty`);
    return e2({}, ``, {}), e2;
  } catch {
  }
})();
function s(e2, t2, n2) {
  t2 == `__proto__` && o ? o(e2, t2, { configurable: true, enumerable: true, value: n2, writable: true }) : e2[t2] = n2;
}
var c = Object.prototype.hasOwnProperty;
function l(t2, n2, r2) {
  var i2 = t2[n2];
  (!(c.call(t2, n2) && e(i2, r2)) || r2 === void 0 && !(n2 in t2)) && s(t2, n2, r2);
}
function u(e2, t2, o2, s2) {
  if (!n(e2)) return e2;
  t2 = i(t2, e2);
  for (var c2 = -1, u2 = t2.length, d2 = u2 - 1, f = e2; f != null && ++c2 < u2; ) {
    var p = a(t2[c2]), m = o2;
    if (p === `__proto__` || p === `constructor` || p === `prototype`) return e2;
    if (c2 != d2) {
      var h = f[p];
      m = s2 ? s2(h, p, f) : void 0, m === void 0 && (m = n(h) ? h : r(t2[c2 + 1]) ? [] : {});
    }
    l(f, p, m), f = f[p];
  }
  return e2;
}
function d(e2, t2, n2) {
  return e2 == null ? e2 : u(e2, t2, n2);
}
export {
  o as i,
  l as n,
  s as r,
  d as t
};
