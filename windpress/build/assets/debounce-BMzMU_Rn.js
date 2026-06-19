import { o as e, r as t, t as n } from "./isSymbol-B9ImcFp_.js";
var r = function() {
  return e.Date.now();
}, i = /\s/;
function a(e2) {
  for (var t2 = e2.length; t2-- && i.test(e2.charAt(t2)); ) ;
  return t2;
}
var o = /^\s+/;
function s(e2) {
  return e2 && e2.slice(0, a(e2) + 1).replace(o, ``);
}
var c = NaN, l = /^[-+]0x[0-9a-f]+$/i, u = /^0b[01]+$/i, d = /^0o[0-7]+$/i, f = parseInt;
function p(e2) {
  if (typeof e2 == `number`) return e2;
  if (n(e2)) return c;
  if (t(e2)) {
    var r2 = typeof e2.valueOf == `function` ? e2.valueOf() : e2;
    e2 = t(r2) ? r2 + `` : r2;
  }
  if (typeof e2 != `string`) return e2 === 0 ? e2 : +e2;
  e2 = s(e2);
  var i2 = u.test(e2);
  return i2 || d.test(e2) ? f(e2.slice(2), i2 ? 2 : 8) : l.test(e2) ? c : +e2;
}
var m = `Expected a function`, h = Math.max, g = Math.min;
function _(e2, n2, i2) {
  var a2, o2, s2, c2, l2, u2, d2 = 0, f2 = false, _2 = false, v = true;
  if (typeof e2 != `function`) throw TypeError(m);
  n2 = p(n2) || 0, t(i2) && (f2 = !!i2.leading, _2 = `maxWait` in i2, s2 = _2 ? h(p(i2.maxWait) || 0, n2) : s2, v = `trailing` in i2 ? !!i2.trailing : v);
  function y(t2) {
    var n3 = a2, r2 = o2;
    return a2 = o2 = void 0, d2 = t2, c2 = e2.apply(r2, n3), c2;
  }
  function b(e3) {
    return d2 = e3, l2 = setTimeout(C, n2), f2 ? y(e3) : c2;
  }
  function x(e3) {
    var t2 = e3 - u2, r2 = e3 - d2, i3 = n2 - t2;
    return _2 ? g(i3, s2 - r2) : i3;
  }
  function S(e3) {
    var t2 = e3 - u2, r2 = e3 - d2;
    return u2 === void 0 || t2 >= n2 || t2 < 0 || _2 && r2 >= s2;
  }
  function C() {
    var e3 = r();
    if (S(e3)) return w(e3);
    l2 = setTimeout(C, x(e3));
  }
  function w(e3) {
    return l2 = void 0, v && a2 ? y(e3) : (a2 = o2 = void 0, c2);
  }
  function T() {
    l2 !== void 0 && clearTimeout(l2), d2 = 0, a2 = u2 = o2 = l2 = void 0;
  }
  function E() {
    return l2 === void 0 ? c2 : w(r());
  }
  function D() {
    var e3 = r(), t2 = S(e3);
    if (a2 = arguments, o2 = this, u2 = e3, t2) {
      if (l2 === void 0) return b(u2);
      if (_2) return clearTimeout(l2), l2 = setTimeout(C, n2), y(u2);
    }
    return l2 === void 0 && (l2 = setTimeout(C, n2)), c2;
  }
  return D.cancel = T, D.flush = E, D;
}
export {
  _ as t
};
