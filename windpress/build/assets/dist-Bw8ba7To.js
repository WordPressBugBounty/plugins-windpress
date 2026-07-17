import { En as e, H as t, Ht as n, J as r, L as i, On as a, Tn as o, _n as s, an as c, bn as l, ct as u, g as d, gn as f, in as p, it as m, nn as h, pn as g, tt as ee, un as _, vn as v, wn as te, xn as y } from "./runtime-core.esm-bundler-Twwq1XF8.js";
function b(e2, t2, r2 = {}) {
  let i2, a2, o2, s2 = true, c2 = () => {
    s2 = true, o2();
  };
  n(e2, c2, { flush: `sync`, ...r2 });
  let l2 = typeof t2 == `function` ? t2 : t2.get, u2 = typeof t2 == `function` ? void 0 : t2.set, d2 = h((e3, t3) => (a2 = e3, o2 = t3, { get() {
    return s2 && (s2 = (i2 = l2(i2), false)), a2(), i2;
  }, set(e4) {
    u2?.(e4);
  } }));
  return d2.trigger = c2, d2;
}
function x(e2, t2) {
  return c() ? (g(e2, t2), true) : false;
}
function S() {
  let e2 = /* @__PURE__ */ new Set(), t2 = (t3) => {
    e2.delete(t3);
  };
  return { on: (n2) => {
    e2.add(n2);
    let r2 = () => t2(n2);
    return x(r2), { off: r2 };
  }, off: t2, trigger: (...t3) => Promise.all(Array.from(e2).map((e3) => e3(...t3))), clear: () => {
    e2.clear();
  } };
}
function C(e2) {
  let t2 = false, n2, r2 = p(true);
  return ((...i2) => (t2 || (t2 = (n2 = r2.run(() => e2(...i2)), true)), n2));
}
var w = /* @__PURE__ */ new WeakMap(), T = (...e2) => {
  let n2 = e2[0], a2 = i()?.proxy ?? c();
  if (a2 == null && !t()) throw Error(`injectLocal must be called in setup`);
  return a2 && w.has(a2) && n2 in w.get(a2) ? w.get(a2)[n2] : r(...e2);
}, E = typeof window < `u` && typeof document < `u`;
typeof WorkerGlobalScope < `u` && globalThis instanceof WorkerGlobalScope;
var ne = (e2) => e2 !== void 0, re = (e2) => e2 != null, ie = Object.prototype.toString, D = (e2) => ie.call(e2) === `[object Object]`, O = () => {
}, k = A();
function A() {
  var e2, t2;
  return E && !!(!((e2 = window) == null || (e2 = e2.navigator) == null) && e2.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t2 = window) == null || (t2 = t2.navigator) == null ? void 0 : t2.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent));
}
function j(...e2) {
  if (e2.length !== 1) return te(...e2);
  let t2 = e2[0];
  return typeof t2 == `function` ? s(h(() => ({ get: t2, set: O }))) : v(t2);
}
function M(e2, t2) {
  function n2(...n3) {
    return new Promise((r2, i2) => {
      Promise.resolve(e2(() => t2.apply(this, n3), { fn: t2, thisArg: this, args: n3 })).then(r2).catch(i2);
    });
  }
  return n2;
}
var N = (e2) => e2();
function P(t2, n2 = {}) {
  let r2, i2, a2 = O, o2 = (e2) => {
    clearTimeout(e2), a2(), a2 = O;
  }, s2;
  return (c2) => {
    let l2 = e(t2), u2 = e(n2.maxWait);
    return r2 && o2(r2), l2 <= 0 || u2 !== void 0 && u2 <= 0 ? (i2 && (i2 = (o2(i2), void 0)), Promise.resolve(c2())) : new Promise((e2, t3) => {
      a2 = n2.rejectOnCancel ? t3 : e2, s2 = c2, u2 && !i2 && (i2 = setTimeout(() => {
        r2 && o2(r2), i2 = void 0, e2(s2());
      }, u2)), r2 = setTimeout(() => {
        i2 && o2(i2), i2 = void 0, e2(c2());
      }, l2);
    });
  };
}
function F(...t2) {
  let n2 = 0, r2, i2 = true, a2 = O, o2, s2, c2, l2, u2;
  !_(t2[0]) && typeof t2[0] == `object` ? { delay: s2, trailing: c2 = true, leading: l2 = true, rejectOnCancel: u2 = false } = t2[0] : [s2, c2 = true, l2 = true, u2 = false] = t2;
  let d2 = () => {
    r2 && (clearTimeout(r2), r2 = void 0, a2(), a2 = O);
  };
  return (t3) => {
    let f2 = e(s2), p2 = Date.now() - n2, m2 = () => o2 = t3();
    return d2(), f2 <= 0 ? (n2 = Date.now(), m2()) : (p2 > f2 ? (n2 = Date.now(), (l2 || !i2) && m2()) : c2 && (o2 = new Promise((e2, t4) => {
      a2 = u2 ? t4 : e2, r2 = setTimeout(() => {
        n2 = Date.now(), i2 = true, e2(m2()), d2();
      }, Math.max(0, f2 - p2));
    })), !l2 && !r2 && (r2 = setTimeout(() => i2 = true, f2)), i2 = false, o2);
  };
}
function I(e2 = N, t2 = {}) {
  let { initialState: n2 = `active` } = t2, r2 = j(n2 === `active`);
  function i2() {
    r2.value = false;
  }
  function a2() {
    r2.value = true;
  }
  return { isActive: l(r2), pause: i2, resume: a2, eventFilter: (...t3) => {
    r2.value && e2(...t3);
  } };
}
function L(e2, t2) {
  if (typeof e2 == `number`) return e2 + t2;
  let n2 = e2.match(/^-?\d+\.?\d*/)?.[0] || ``, r2 = e2.slice(n2.length), i2 = Number.parseFloat(n2) + t2;
  return Number.isNaN(i2) ? e2 : i2 + r2;
}
function R(e2) {
  return e2.endsWith(`rem`) ? Number.parseFloat(e2) * 16 : Number.parseFloat(e2);
}
function z(e2) {
  return Array.isArray(e2) ? e2 : [e2];
}
function B(e2) {
  let t2 = /* @__PURE__ */ Object.create(null);
  return ((n2) => t2[n2] || (t2[n2] = e2(n2)));
}
var V = /-(\w)/g, H = B((e2) => e2.replace(V, (e3, t2) => t2 ? t2.toUpperCase() : ``));
function U(e2) {
  return e2 || i();
}
function W(e2) {
  if (!E) return e2;
  let t2 = 0, n2, r2, i2 = () => {
    --t2, r2 && t2 <= 0 && (r2.stop(), n2 = void 0, r2 = void 0);
  };
  return ((...a2) => (t2 += 1, r2 || (r2 = p(true), n2 = r2.run(() => e2(...a2))), x(i2), n2));
}
function G(e2, t2) {
  if (typeof Symbol < `u`) {
    let n2 = { ...e2 };
    return Object.defineProperty(n2, Symbol.iterator, { enumerable: false, value() {
      let e3 = 0;
      return { next: () => ({ value: t2[e3++], done: e3 > t2.length }) };
    } }), n2;
  } else return Object.assign([...t2], e2);
}
function K(e2) {
  return _(e2) ? f(new Proxy({}, { get(t2, n2, r2) {
    return a(Reflect.get(e2.value, n2, r2));
  }, set(t2, n2, r2) {
    return _(e2.value[n2]) && !_(r2) ? e2.value[n2].value = r2 : e2.value[n2] = r2, true;
  }, deleteProperty(t2, n2) {
    return Reflect.deleteProperty(e2.value, n2);
  }, has(t2, n2) {
    return Reflect.has(e2.value, n2);
  }, ownKeys() {
    return Object.keys(e2.value);
  }, getOwnPropertyDescriptor() {
    return { enumerable: true, configurable: true };
  } })) : f(e2);
}
function q(e2) {
  return K(d(e2));
}
function J(t2, ...n2) {
  let r2 = n2.flat(), i2 = r2[0];
  return q(() => Object.fromEntries(typeof i2 == `function` ? Object.entries(o(t2)).filter(([t3, n3]) => !i2(e(n3), t3)) : Object.entries(o(t2)).filter((e2) => !r2.includes(e2[0]))));
}
function Y(t2, ...n2) {
  let r2 = n2.flat(), i2 = r2[0];
  return q(() => Object.fromEntries(typeof i2 == `function` ? Object.entries(o(t2)).filter(([t3, n3]) => i2(e(n3), t3)) : r2.map((e2) => [e2, j(t2, e2)])));
}
function ae(t2, n2 = 1e4) {
  return h((r2, i2) => {
    let a2 = e(t2), o2, s2 = () => setTimeout(() => {
      a2 = e(t2), i2();
    }, e(n2));
    return x(() => {
      clearTimeout(o2);
    }), { get() {
      return r2(), a2;
    }, set(e2) {
      a2 = e2, i2(), clearTimeout(o2), o2 = s2();
    } };
  });
}
function X(e2, t2 = 200, n2 = {}) {
  return M(P(t2, n2), e2);
}
function oe(t2, r2 = 200, i2 = {}) {
  let a2 = v(e(t2)), o2 = X(() => {
    a2.value = t2.value;
  }, r2, i2);
  return n(t2, () => o2()), l(a2);
}
function se(e2, t2 = 200, n2 = false, r2 = true, i2 = false) {
  return M(F(t2, n2, r2, i2), e2);
}
function ce(t2, r2 = 200, i2 = true, a2 = true) {
  if (r2 <= 0) return t2;
  let o2 = v(e(t2)), s2 = se(() => {
    o2.value = t2.value;
  }, r2, i2, a2);
  return n(t2, () => s2()), o2;
}
function le(e2, t2, r2 = {}) {
  let { eventFilter: i2 = N, ...a2 } = r2;
  return n(e2, M(i2, t2), a2);
}
function Z(e2, t2, n2 = {}) {
  let { eventFilter: r2, initialState: i2 = `active`, ...a2 } = n2, { eventFilter: o2, pause: s2, resume: c2, isActive: l2 } = I(r2, { initialState: i2 });
  return { stop: le(e2, t2, { ...a2, eventFilter: o2 }), pause: s2, resume: c2, isActive: l2 };
}
function ue(e2, t2, ...[n2]) {
  let { flush: r2 = `sync`, deep: i2 = false, immediate: a2 = true, direction: o2 = `both`, transform: s2 = {} } = n2 || {}, c2 = [], l2 = `ltr` in s2 && s2.ltr || ((e3) => e3), u2 = `rtl` in s2 && s2.rtl || ((e3) => e3);
  return (o2 === `both` || o2 === `ltr`) && c2.push(Z(e2, (e3) => {
    c2.forEach((e4) => e4.pause()), t2.value = l2(e3), c2.forEach((e4) => e4.resume());
  }, { flush: r2, deep: i2, immediate: a2 })), (o2 === `both` || o2 === `rtl`) && c2.push(Z(t2, (t3) => {
    c2.forEach((e3) => e3.pause()), e2.value = u2(t3), c2.forEach((e3) => e3.resume());
  }, { flush: r2, deep: i2, immediate: a2 })), () => {
    c2.forEach((e3) => e3.stop());
  };
}
function Q(e2, t2) {
  U(t2) && m(e2, t2);
}
function de(e2, t2 = true, n2) {
  U(n2) ? u(e2, n2) : t2 ? e2() : ee(e2);
}
function $(t2, n2, r2 = {}) {
  let { immediate: i2 = true, immediateCallback: a2 = false } = r2, o2 = y(false), s2;
  function c2() {
    s2 && (s2 = (clearTimeout(s2), void 0));
  }
  function u2() {
    o2.value = false, c2();
  }
  function d2(...r3) {
    a2 && t2(), c2(), o2.value = true, s2 = setTimeout(() => {
      o2.value = false, s2 = void 0, t2(...r3);
    }, e(n2));
  }
  return i2 && (o2.value = true, E && d2()), x(u2), { isPending: l(o2), start: d2, stop: u2 };
}
function fe(e2 = 1e3, t2 = {}) {
  let { controls: n2 = false, callback: r2 } = t2, i2 = $(r2 ?? O, e2, t2), a2 = d(() => !i2.isPending.value);
  return n2 ? { ready: a2, ...i2 } : a2;
}
function pe(e2, t2, r2) {
  return n(e2, t2, { ...r2, immediate: true });
}
export {
  fe as A,
  ue as C,
  de as D,
  Q as E,
  pe as M,
  Z as N,
  x as O,
  ce as S,
  j as T,
  q as _,
  W as a,
  ae as b,
  E as c,
  D as d,
  G as f,
  R as g,
  I as h,
  C as i,
  $ as j,
  X as k,
  ne as l,
  re as m,
  b as n,
  L as o,
  O as p,
  S as r,
  T as s,
  H as t,
  k as u,
  J as v,
  z as w,
  oe as x,
  Y as y
};
