import { n as e, o as t, r as n, s as r, t as i } from "./isArray-CI0_UXAa.js";
import { i as a, n as o, o as s, s as c } from "./isSymbol-B9ImcFp_.js";
import { t as ee } from "./_isIndex-BOCGn4UD.js";
function l() {
  this.__data__ = new r(), this.size = 0;
}
function u(e2) {
  var t2 = this.__data__, n2 = t2.delete(e2);
  return this.size = t2.size, n2;
}
function te(e2) {
  return this.__data__.get(e2);
}
function ne(e2) {
  return this.__data__.has(e2);
}
var re = 200;
function ie(t2, i2) {
  var a2 = this.__data__;
  if (a2 instanceof r) {
    var o2 = a2.__data__;
    if (!n || o2.length < re - 1) return o2.push([t2, i2]), this.size = ++a2.size, this;
    a2 = this.__data__ = new e(o2);
  }
  return a2.set(t2, i2), this.size = a2.size, this;
}
function d(e2) {
  var t2 = this.__data__ = new r(e2);
  this.size = t2.size;
}
d.prototype.clear = l, d.prototype.delete = u, d.prototype.get = te, d.prototype.has = ne, d.prototype.set = ie;
function f(e2, t2) {
  for (var n2 = -1, r2 = Array(e2); ++n2 < e2; ) r2[n2] = t2(n2);
  return r2;
}
var ae = `[object Arguments]`;
function p(e2) {
  return o(e2) && a(e2) == ae;
}
var m = Object.prototype, h = m.hasOwnProperty, oe = m.propertyIsEnumerable, g = p(/* @__PURE__ */ (function() {
  return arguments;
})()) ? p : function(e2) {
  return o(e2) && h.call(e2, `callee`) && !oe.call(e2, `callee`);
};
function se() {
  return false;
}
var _ = typeof exports == `object` && exports && !exports.nodeType && exports, v = _ && typeof module == `object` && module && !module.nodeType && module, y = v && v.exports === _ ? s.Buffer : void 0, b = (y ? y.isBuffer : void 0) || se, x = 9007199254740991;
function S(e2) {
  return typeof e2 == `number` && e2 > -1 && e2 % 1 == 0 && e2 <= x;
}
var C = `[object Arguments]`, w = `[object Array]`, T = `[object Boolean]`, E = `[object Date]`, D = `[object Error]`, O = `[object Function]`, k = `[object Map]`, A = `[object Number]`, j = `[object Object]`, M = `[object RegExp]`, N = `[object Set]`, P = `[object String]`, F = `[object WeakMap]`, I = `[object ArrayBuffer]`, L = `[object DataView]`, R = `[object Float32Array]`, z = `[object Float64Array]`, B = `[object Int8Array]`, ce = `[object Int16Array]`, V = `[object Int32Array]`, H = `[object Uint8Array]`, U = `[object Uint8ClampedArray]`, W = `[object Uint16Array]`, G = `[object Uint32Array]`, K = {};
K[R] = K[z] = K[B] = K[ce] = K[V] = K[H] = K[U] = K[W] = K[G] = true, K[C] = K[w] = K[I] = K[T] = K[L] = K[E] = K[D] = K[O] = K[k] = K[A] = K[j] = K[M] = K[N] = K[P] = K[F] = false;
function le(e2) {
  return o(e2) && S(e2.length) && !!K[a(e2)];
}
function q(e2) {
  return function(t2) {
    return e2(t2);
  };
}
var J = typeof exports == `object` && exports && !exports.nodeType && exports, Y = J && typeof module == `object` && module && !module.nodeType && module, X = Y && Y.exports === J && c.process, Z = (function() {
  try {
    return Y && Y.require && Y.require(`util`).types || X && X.binding && X.binding(`util`);
  } catch {
  }
})(), Q = Z && Z.isTypedArray, $ = Q ? q(Q) : le, ue = Object.prototype.hasOwnProperty;
function de(e2, t2) {
  var n2 = i(e2), r2 = !n2 && g(e2), a2 = !n2 && !r2 && b(e2), o2 = !n2 && !r2 && !a2 && $(e2), s2 = n2 || r2 || a2 || o2, c2 = s2 ? f(e2.length, String) : [], l2 = c2.length;
  for (var u2 in e2) (t2 || ue.call(e2, u2)) && !(s2 && (u2 == `length` || a2 && (u2 == `offset` || u2 == `parent`) || o2 && (u2 == `buffer` || u2 == `byteLength` || u2 == `byteOffset`) || ee(u2, l2))) && c2.push(u2);
  return c2;
}
var fe = Object.prototype;
function pe(e2) {
  var t2 = e2 && e2.constructor;
  return e2 === (typeof t2 == `function` && t2.prototype || fe);
}
function me(e2, t2) {
  return function(n2) {
    return e2(t2(n2));
  };
}
function he(e2) {
  return e2 != null && S(e2.length) && !t(e2);
}
var ge = s.Uint8Array;
export {
  de as a,
  q as c,
  d,
  pe as i,
  b as l,
  he as n,
  $ as o,
  me as r,
  Z as s,
  ge as t,
  g as u
};
