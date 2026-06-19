import { n as e, t } from "./isArray-CI0_UXAa.js";
import { a as n, t as r } from "./isSymbol-B9ImcFp_.js";
var i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/;
function o(e2, n2) {
  if (t(e2)) return false;
  var o2 = typeof e2;
  return o2 == `number` || o2 == `symbol` || o2 == `boolean` || e2 == null || r(e2) ? true : a.test(e2) || !i.test(e2) || n2 != null && e2 in Object(n2);
}
var s = `Expected a function`;
function c(t2, n2) {
  if (typeof t2 != `function` || n2 != null && typeof n2 != `function`) throw TypeError(s);
  var r2 = function() {
    var e2 = arguments, i2 = n2 ? n2.apply(this, e2) : e2[0], a2 = r2.cache;
    if (a2.has(i2)) return a2.get(i2);
    var o2 = t2.apply(this, e2);
    return r2.cache = a2.set(i2, o2) || a2, o2;
  };
  return r2.cache = new (c.Cache || e)(), r2;
}
c.Cache = e;
var l = 500;
function u(e2) {
  var t2 = c(e2, function(e3) {
    return n2.size === l && n2.clear(), e3;
  }), n2 = t2.cache;
  return t2;
}
var d = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, f = /\\(\\)?/g, p = u(function(e2) {
  var t2 = [];
  return e2.charCodeAt(0) === 46 && t2.push(``), e2.replace(d, function(e3, n2, r2, i2) {
    t2.push(r2 ? i2.replace(f, `$1`) : n2 || e3);
  }), t2;
});
function m(e2, t2) {
  for (var n2 = -1, r2 = e2 == null ? 0 : e2.length, i2 = Array(r2); ++n2 < r2; ) i2[n2] = t2(e2[n2], n2, e2);
  return i2;
}
var h = 1 / 0, g = n ? n.prototype : void 0, _ = g ? g.toString : void 0;
function v(e2) {
  if (typeof e2 == `string`) return e2;
  if (t(e2)) return m(e2, v) + ``;
  if (r(e2)) return _ ? _.call(e2) : ``;
  var n2 = e2 + ``;
  return n2 == `0` && 1 / e2 == -h ? `-0` : n2;
}
function y(e2) {
  return e2 == null ? `` : v(e2);
}
function b(e2, n2) {
  return t(e2) ? e2 : o(e2, n2) ? [e2] : p(y(e2));
}
var x = 1 / 0;
function S(e2) {
  if (typeof e2 == `string` || r(e2)) return e2;
  var t2 = e2 + ``;
  return t2 == `0` && 1 / e2 == -x ? `-0` : t2;
}
export {
  b as n,
  S as t
};
