import { i as e, o as t, r as n } from "./isSymbol-B9ImcFp_.js";
function r() {
  this.__data__ = [], this.size = 0;
}
function i(e2, t2) {
  return e2 === t2 || e2 !== e2 && t2 !== t2;
}
function a(e2, t2) {
  for (var n2 = e2.length; n2--; ) if (i(e2[n2][0], t2)) return n2;
  return -1;
}
var o = Array.prototype.splice;
function s(e2) {
  var t2 = this.__data__, n2 = a(t2, e2);
  return n2 < 0 ? false : (n2 == t2.length - 1 ? t2.pop() : o.call(t2, n2, 1), --this.size, true);
}
function c(e2) {
  var t2 = this.__data__, n2 = a(t2, e2);
  return n2 < 0 ? void 0 : t2[n2][1];
}
function l(e2) {
  return a(this.__data__, e2) > -1;
}
function u(e2, t2) {
  var n2 = this.__data__, r2 = a(n2, e2);
  return r2 < 0 ? (++this.size, n2.push([e2, t2])) : n2[r2][1] = t2, this;
}
function d(e2) {
  var t2 = -1, n2 = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e2[t2];
    this.set(r2[0], r2[1]);
  }
}
d.prototype.clear = r, d.prototype.delete = s, d.prototype.get = c, d.prototype.has = l, d.prototype.set = u;
var f = `[object AsyncFunction]`, p = `[object Function]`, m = `[object GeneratorFunction]`, h = `[object Proxy]`;
function g(t2) {
  if (!n(t2)) return false;
  var r2 = e(t2);
  return r2 == p || r2 == m || r2 == f || r2 == h;
}
var _ = t[`__core-js_shared__`], v = (function() {
  var e2 = /[^.]+$/.exec(_ && _.keys && _.keys.IE_PROTO || ``);
  return e2 ? `Symbol(src)_1.` + e2 : ``;
})();
function y(e2) {
  return !!v && v in e2;
}
var b = Function.prototype.toString;
function x(e2) {
  if (e2 != null) {
    try {
      return b.call(e2);
    } catch {
    }
    try {
      return e2 + ``;
    } catch {
    }
  }
  return ``;
}
var S = /[\\^$.*+?()[\]{}|]/g, C = /^\[object .+?Constructor\]$/, w = Function.prototype, T = Object.prototype, E = w.toString, D = T.hasOwnProperty, O = RegExp(`^` + E.call(D).replace(S, `\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, `$1.*?`) + `$`);
function k(e2) {
  return !n(e2) || y(e2) ? false : (g(e2) ? O : C).test(x(e2));
}
function A(e2, t2) {
  return e2?.[t2];
}
function j(e2, t2) {
  var n2 = A(e2, t2);
  return k(n2) ? n2 : void 0;
}
var M = j(t, `Map`), N = j(Object, `create`);
function P() {
  this.__data__ = N ? N(null) : {}, this.size = 0;
}
function F(e2) {
  var t2 = this.has(e2) && delete this.__data__[e2];
  return this.size -= +!!t2, t2;
}
var I = `__lodash_hash_undefined__`, L = Object.prototype.hasOwnProperty;
function R(e2) {
  var t2 = this.__data__;
  if (N) {
    var n2 = t2[e2];
    return n2 === I ? void 0 : n2;
  }
  return L.call(t2, e2) ? t2[e2] : void 0;
}
var z = Object.prototype.hasOwnProperty;
function B(e2) {
  var t2 = this.__data__;
  return N ? t2[e2] !== void 0 : z.call(t2, e2);
}
var V = `__lodash_hash_undefined__`;
function H(e2, t2) {
  var n2 = this.__data__;
  return this.size += +!this.has(e2), n2[e2] = N && t2 === void 0 ? V : t2, this;
}
function U(e2) {
  var t2 = -1, n2 = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e2[t2];
    this.set(r2[0], r2[1]);
  }
}
U.prototype.clear = P, U.prototype.delete = F, U.prototype.get = R, U.prototype.has = B, U.prototype.set = H;
function W() {
  this.size = 0, this.__data__ = { hash: new U(), map: new (M || d)(), string: new U() };
}
function G(e2) {
  var t2 = typeof e2;
  return t2 == `string` || t2 == `number` || t2 == `symbol` || t2 == `boolean` ? e2 !== `__proto__` : e2 === null;
}
function K(e2, t2) {
  var n2 = e2.__data__;
  return G(t2) ? n2[typeof t2 == `string` ? `string` : `hash`] : n2.map;
}
function q(e2) {
  var t2 = K(this, e2).delete(e2);
  return this.size -= +!!t2, t2;
}
function J(e2) {
  return K(this, e2).get(e2);
}
function Y(e2) {
  return K(this, e2).has(e2);
}
function X(e2, t2) {
  var n2 = K(this, e2), r2 = n2.size;
  return n2.set(e2, t2), this.size += n2.size == r2 ? 0 : 1, this;
}
function Z(e2) {
  var t2 = -1, n2 = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t2 < n2; ) {
    var r2 = e2[t2];
    this.set(r2[0], r2[1]);
  }
}
Z.prototype.clear = W, Z.prototype.delete = q, Z.prototype.get = J, Z.prototype.has = Y, Z.prototype.set = X;
var Q = Array.isArray;
export {
  x as a,
  i as c,
  j as i,
  Z as n,
  g as o,
  M as r,
  d as s,
  Q as t
};
