import { a as e, i as t, n, r, t as i } from "./_Uint8Array-B15EB2HR.js";
import { o as a, r as o } from "./isSymbol-B9ImcFp_.js";
import { n as s, r as c } from "./set-HZS68aKk.js";
function l(e2, t2, n2, r2) {
  var i2 = !n2;
  n2 || (n2 = {});
  for (var a2 = -1, o2 = t2.length; ++a2 < o2; ) {
    var l2 = t2[a2], u2 = r2 ? r2(n2[l2], e2[l2], l2, n2, e2) : void 0;
    u2 === void 0 && (u2 = e2[l2]), i2 ? c(n2, l2, u2) : s(n2, l2, u2);
  }
  return n2;
}
function u(e2) {
  var t2 = [];
  if (e2 != null) for (var n2 in Object(e2)) t2.push(n2);
  return t2;
}
var d = Object.prototype.hasOwnProperty;
function f(e2) {
  if (!o(e2)) return u(e2);
  var n2 = t(e2), r2 = [];
  for (var i2 in e2) i2 == `constructor` && (n2 || !d.call(e2, i2)) || r2.push(i2);
  return r2;
}
function p(t2) {
  return n(t2) ? e(t2, true) : f(t2);
}
var m = typeof exports == `object` && exports && !exports.nodeType && exports, h = m && typeof module == `object` && module && !module.nodeType && module, g = h && h.exports === m ? a.Buffer : void 0, _ = g ? g.allocUnsafe : void 0;
function v(e2, t2) {
  if (t2) return e2.slice();
  var n2 = e2.length, r2 = _ ? _(n2) : new e2.constructor(n2);
  return e2.copy(r2), r2;
}
function y(e2, t2) {
  var n2 = -1, r2 = e2.length;
  for (t2 || (t2 = Array(r2)); ++n2 < r2; ) t2[n2] = e2[n2];
  return t2;
}
var b = r(Object.getPrototypeOf, Object);
function x(e2) {
  var t2 = new e2.constructor(e2.byteLength);
  return new i(t2).set(new i(e2)), t2;
}
function S(e2, t2) {
  var n2 = t2 ? x(e2.buffer) : e2.buffer;
  return new e2.constructor(n2, e2.byteOffset, e2.length);
}
var C = Object.create, w = /* @__PURE__ */ (function() {
  function e2() {
  }
  return function(t2) {
    if (!o(t2)) return {};
    if (C) return C(t2);
    e2.prototype = t2;
    var n2 = new e2();
    return e2.prototype = void 0, n2;
  };
})();
function T(e2) {
  return typeof e2.constructor == `function` && !t(e2) ? w(b(e2)) : {};
}
export {
  y as a,
  l as c,
  b as i,
  S as n,
  v as o,
  x as r,
  p as s,
  T as t
};
