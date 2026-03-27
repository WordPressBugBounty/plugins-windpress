import { n as e, t } from "./dist-BdGzUZX_.js";
import { En as n, H as r, Ht as i, J as a, L as o, On as s, Tn as c, Ut as l, _n as u, an as d, bn as f, ct as p, g as m, gn as h, in as g, it as _, k as v, nn as y, pn as b, pt as x, tt as S, un as C, vn as w, wn as T, xn as E } from "./runtime-core.esm-bundler-CahM68iJ.js";
function D(e2, t2) {
  let n2 = E();
  return l(() => {
    n2.value = e2();
  }, { ...t2, flush: (t2 == null ? void 0 : t2.flush) ?? `sync` }), u(n2);
}
function O(e2, t2, n2 = {}) {
  let r2, a2, o2, s2 = true, c2 = () => {
    s2 = true, o2();
  };
  i(e2, c2, { flush: `sync`, ...n2 });
  let l2 = typeof t2 == `function` ? t2 : t2.get, u2 = typeof t2 == `function` ? void 0 : t2.set, d2 = y((e3, t3) => (a2 = e3, o2 = t3, { get() {
    return s2 && (s2 = (r2 = l2(r2), false)), a2(), r2;
  }, set(e4) {
    u2 == null ? void 0 : u2(e4);
  } }));
  return d2.trigger = c2, d2;
}
function k(e2, t2) {
  return d() ? (b(e2, t2), true) : false;
}
function A() {
  let e2 = /* @__PURE__ */ new Set(), t2 = (t3) => {
    e2.delete(t3);
  };
  return { on: (n2) => {
    e2.add(n2);
    let r2 = () => t2(n2);
    return k(r2), { off: r2 };
  }, off: t2, trigger: (...t3) => Promise.all(Array.from(e2).map((e3) => e3(...t3))), clear: () => {
    e2.clear();
  } };
}
function j(e2) {
  let t2 = false, n2, r2 = g(true);
  return ((...i2) => (t2 || (t2 = (n2 = r2.run(() => e2(...i2)), true)), n2));
}
var M = /* @__PURE__ */ new WeakMap(), ee = (...e2) => {
  var _a;
  let t2 = e2[0], n2 = ((_a = o()) == null ? void 0 : _a.proxy) ?? d();
  if (n2 == null && !r()) throw Error(`injectLocal must be called in setup`);
  return n2 && M.has(n2) && t2 in M.get(n2) ? M.get(n2)[t2] : a(...e2);
}, N = typeof window < `u` && typeof document < `u`;
typeof WorkerGlobalScope < `u` && globalThis instanceof WorkerGlobalScope;
var te = (e2) => e2 !== void 0, ne = (e2) => e2 != null, re = Object.prototype.toString, ie = (e2) => re.call(e2) === `[object Object]`, P = () => {
}, ae = oe();
function oe() {
  var e2, t2;
  return N && !!(!((e2 = window) == null || (e2 = e2.navigator) == null) && e2.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t2 = window) == null || (t2 = t2.navigator) == null ? void 0 : t2.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function F(...e2) {
  if (e2.length !== 1) return T(...e2);
  let t2 = e2[0];
  return typeof t2 == `function` ? u(y(() => ({ get: t2, set: P }))) : w(t2);
}
function I(e2, t2) {
  function n2(...n3) {
    return new Promise((r2, i2) => {
      Promise.resolve(e2(() => t2.apply(this, n3), { fn: t2, thisArg: this, args: n3 })).then(r2).catch(i2);
    });
  }
  return n2;
}
var se = (e2) => e2();
function ce(e2, t2 = {}) {
  let r2, i2, a2 = P, o2 = (e3) => {
    clearTimeout(e3), a2(), a2 = P;
  }, s2;
  return (c2) => {
    let l2 = n(e2), u2 = n(t2.maxWait);
    return r2 && o2(r2), l2 <= 0 || u2 !== void 0 && u2 <= 0 ? (i2 && (i2 = (o2(i2), void 0)), Promise.resolve(c2())) : new Promise((e3, n2) => {
      a2 = t2.rejectOnCancel ? n2 : e3, s2 = c2, u2 && !i2 && (i2 = setTimeout(() => {
        r2 && o2(r2), i2 = void 0, e3(s2());
      }, u2)), r2 = setTimeout(() => {
        i2 && o2(i2), i2 = void 0, e3(c2());
      }, l2);
    });
  };
}
function le(...e2) {
  let t2 = 0, r2, i2 = true, a2 = P, o2, s2, c2, l2, u2;
  !C(e2[0]) && typeof e2[0] == `object` ? { delay: s2, trailing: c2 = true, leading: l2 = true, rejectOnCancel: u2 = false } = e2[0] : [s2, c2 = true, l2 = true, u2 = false] = e2;
  let d2 = () => {
    r2 && (clearTimeout(r2), r2 = void 0, a2(), a2 = P);
  };
  return (e3) => {
    let f2 = n(s2), p2 = Date.now() - t2, m2 = () => o2 = e3();
    return d2(), f2 <= 0 ? (t2 = Date.now(), m2()) : (p2 > f2 ? (t2 = Date.now(), (l2 || !i2) && m2()) : c2 && (o2 = new Promise((e4, n2) => {
      a2 = u2 ? n2 : e4, r2 = setTimeout(() => {
        t2 = Date.now(), i2 = true, e4(m2()), d2();
      }, Math.max(0, f2 - p2));
    })), !l2 && !r2 && (r2 = setTimeout(() => i2 = true, f2)), i2 = false, o2);
  };
}
function ue(e2 = se, t2 = {}) {
  let { initialState: n2 = `active` } = t2, r2 = F(n2 === `active`);
  function i2() {
    r2.value = false;
  }
  function a2() {
    r2.value = true;
  }
  return { isActive: u(r2), pause: i2, resume: a2, eventFilter: (...t3) => {
    r2.value && e2(...t3);
  } };
}
function de(e2, t2) {
  var _a;
  if (typeof e2 == `number`) return e2 + t2;
  let n2 = ((_a = e2.match(/^-?\d+\.?\d*/)) == null ? void 0 : _a[0]) || ``, r2 = e2.slice(n2.length), i2 = Number.parseFloat(n2) + t2;
  return Number.isNaN(i2) ? e2 : i2 + r2;
}
function L(e2) {
  return e2.endsWith(`rem`) ? Number.parseFloat(e2) * 16 : Number.parseFloat(e2);
}
function R(e2) {
  return Array.isArray(e2) ? e2 : [e2];
}
function fe(e2) {
  let t2 = /* @__PURE__ */ Object.create(null);
  return ((n2) => t2[n2] || (t2[n2] = e2(n2)));
}
var pe = /-(\w)/g, me = fe((e2) => e2.replace(pe, (e3, t2) => t2 ? t2.toUpperCase() : ``));
function z(e2) {
  return e2 || o();
}
function he(e2) {
  if (!N) return e2;
  let t2 = 0, n2, r2, i2 = () => {
    --t2, r2 && t2 <= 0 && (r2.stop(), n2 = void 0, r2 = void 0);
  };
  return ((...a2) => (t2 += 1, r2 || (r2 = g(true), n2 = r2.run(() => e2(...a2))), k(i2), n2));
}
function ge(e2, t2) {
  if (typeof Symbol < `u`) {
    let n2 = { ...e2 };
    return Object.defineProperty(n2, Symbol.iterator, { enumerable: false, value() {
      let e3 = 0;
      return { next: () => ({ value: t2[e3++], done: e3 > t2.length }) };
    } }), n2;
  } else return Object.assign([...t2], e2);
}
function _e(e2) {
  return C(e2) ? h(new Proxy({}, { get(t2, n2, r2) {
    return s(Reflect.get(e2.value, n2, r2));
  }, set(t2, n2, r2) {
    return C(e2.value[n2]) && !C(r2) ? e2.value[n2].value = r2 : e2.value[n2] = r2, true;
  }, deleteProperty(t2, n2) {
    return Reflect.deleteProperty(e2.value, n2);
  }, has(t2, n2) {
    return Reflect.has(e2.value, n2);
  }, ownKeys() {
    return Object.keys(e2.value);
  }, getOwnPropertyDescriptor() {
    return { enumerable: true, configurable: true };
  } })) : h(e2);
}
function B(e2) {
  return _e(m(e2));
}
function ve(e2, ...t2) {
  let r2 = t2.flat(), i2 = r2[0];
  return B(() => Object.fromEntries(typeof i2 == `function` ? Object.entries(c(e2)).filter(([e3, t3]) => !i2(n(t3), e3)) : Object.entries(c(e2)).filter((e3) => !r2.includes(e3[0]))));
}
function ye(e2, ...t2) {
  let r2 = t2.flat(), i2 = r2[0];
  return B(() => Object.fromEntries(typeof i2 == `function` ? Object.entries(c(e2)).filter(([e3, t3]) => i2(n(t3), e3)) : r2.map((t3) => [t3, F(e2, t3)])));
}
function be(e2, t2 = 1e4) {
  return y((r2, i2) => {
    let a2 = n(e2), o2, s2 = () => setTimeout(() => {
      a2 = n(e2), i2();
    }, n(t2));
    return k(() => {
      clearTimeout(o2);
    }), { get() {
      return r2(), a2;
    }, set(e3) {
      a2 = e3, i2(), clearTimeout(o2), o2 = s2();
    } };
  });
}
function xe(e2, t2 = 200, n2 = {}) {
  return I(ce(t2, n2), e2);
}
function Se(e2, t2 = 200, n2 = false, r2 = true, i2 = false) {
  return I(le(t2, n2, r2, i2), e2);
}
function Ce(e2, t2 = 200, r2 = true, a2 = true) {
  if (t2 <= 0) return e2;
  let o2 = w(n(e2)), s2 = Se(() => {
    o2.value = e2.value;
  }, t2, r2, a2);
  return i(e2, () => s2()), o2;
}
function we(e2, t2, n2 = {}) {
  let { eventFilter: r2 = se, ...a2 } = n2;
  return i(e2, I(r2, t2), a2);
}
function V(e2, t2, n2 = {}) {
  let { eventFilter: r2, initialState: i2 = `active`, ...a2 } = n2, { eventFilter: o2, pause: s2, resume: c2, isActive: l2 } = ue(r2, { initialState: i2 });
  return { stop: we(e2, t2, { ...a2, eventFilter: o2 }), pause: s2, resume: c2, isActive: l2 };
}
function Te(e2, t2, ...[n2]) {
  let { flush: r2 = `sync`, deep: i2 = false, immediate: a2 = true, direction: o2 = `both`, transform: s2 = {} } = n2 || {}, c2 = [], l2 = `ltr` in s2 && s2.ltr || ((e3) => e3), u2 = `rtl` in s2 && s2.rtl || ((e3) => e3);
  return (o2 === `both` || o2 === `ltr`) && c2.push(V(e2, (e3) => {
    c2.forEach((e4) => e4.pause()), t2.value = l2(e3), c2.forEach((e4) => e4.resume());
  }, { flush: r2, deep: i2, immediate: a2 })), (o2 === `both` || o2 === `rtl`) && c2.push(V(t2, (t3) => {
    c2.forEach((e3) => e3.pause()), e2.value = u2(t3), c2.forEach((e3) => e3.resume());
  }, { flush: r2, deep: i2, immediate: a2 })), () => {
    c2.forEach((e3) => e3.stop());
  };
}
function Ee(e2, t2) {
  z(t2) && _(e2, t2);
}
function H(e2, t2 = true, n2) {
  z(n2) ? p(e2, n2) : t2 ? e2() : S(e2);
}
function U(e2, t2, r2 = {}) {
  let { immediate: i2 = true, immediateCallback: a2 = false } = r2, o2 = E(false), s2;
  function c2() {
    s2 && (s2 = (clearTimeout(s2), void 0));
  }
  function l2() {
    o2.value = false, c2();
  }
  function u2(...r3) {
    a2 && e2(), c2(), o2.value = true, s2 = setTimeout(() => {
      o2.value = false, s2 = void 0, e2(...r3);
    }, n(t2));
  }
  return i2 && (o2.value = true, N && u2()), k(l2), { isPending: f(o2), start: u2, stop: l2 };
}
function De(e2 = 1e3, t2 = {}) {
  let { controls: n2 = false, callback: r2 } = t2, i2 = U(r2 ?? P, e2, t2), a2 = m(() => !i2.isPending.value);
  return n2 ? { ready: a2, ...i2 } : a2;
}
function Oe(e2, t2, n2) {
  return i(e2, t2, { ...n2, immediate: true });
}
e();
function ke(e2, t2, n2) {
  let r2;
  r2 = C(n2) ? { evaluating: n2 } : n2 || {};
  let { lazy: i2 = false, flush: a2 = `sync`, evaluating: o2 = void 0, shallow: s2 = true, onError: c2 = globalThis.reportError ?? P } = r2, u2 = E(!i2), d2 = s2 ? E(t2) : w(t2), f2 = 0;
  return l(async (t3) => {
    if (!u2.value) return;
    f2++;
    let n3 = f2, r3 = false;
    o2 && Promise.resolve().then(() => {
      o2.value = true;
    });
    try {
      let i3 = await e2((e3) => {
        t3(() => {
          o2 && (o2.value = false), r3 || e3();
        });
      });
      n3 === f2 && (d2.value = i3);
    } catch (e3) {
      c2(e3);
    } finally {
      o2 && n3 === f2 && (o2.value = false), r3 = true;
    }
  }, { flush: a2 }), i2 ? m(() => (u2.value = true, d2.value)) : d2;
}
function Ae(e2 = {}) {
  let { inheritAttrs: t2 = true } = e2, n2 = E(), r2 = v({ setup(e3, { slots: t3 }) {
    return () => {
      n2.value = t3.default;
    };
  } }), i2 = v({ inheritAttrs: t2, props: e2.props, setup(r3, { attrs: i3, slots: a2 }) {
    return () => {
      var _a;
      if (!n2.value) throw Error(`[VueUse] Failed to find the definition of reusable template`);
      let o2 = (_a = n2.value) == null ? void 0 : _a.call(n2, { ...e2.props == null ? je(i3) : r3, $slots: a2 });
      return t2 && (o2 == null ? void 0 : o2.length) === 1 ? o2[0] : o2;
    };
  } });
  return ge({ define: r2, reuse: i2 }, [r2, i2]);
}
function je(e2) {
  let t2 = {};
  for (let n2 in e2) t2[me(n2)] = e2[n2];
  return t2;
}
var W = N ? window : void 0;
N && window.document, N && window.navigator, N && window.location;
function G(e2) {
  let t2 = n(e2);
  return (t2 == null ? void 0 : t2.$el) ?? t2;
}
function K(...e2) {
  let t2 = (e3, t3, n2, r3) => (e3.addEventListener(t3, n2, r3), () => e3.removeEventListener(t3, n2, r3)), r2 = m(() => {
    let t3 = R(n(e2[0])).filter((e3) => e3 != null);
    return t3.every((e3) => typeof e3 != `string`) ? t3 : void 0;
  });
  return Oe(() => {
    var _a;
    return [((_a = r2.value) == null ? void 0 : _a.map((e3) => G(e3))) ?? [W].filter((e3) => e3 != null), R(n(r2.value ? e2[1] : e2[0])), R(s(r2.value ? e2[2] : e2[1])), n(r2.value ? e2[3] : e2[2])];
  }, ([e3, n2, r3, i2], a2, o2) => {
    if (!(e3 == null ? void 0 : e3.length) || !(n2 == null ? void 0 : n2.length) || !(r3 == null ? void 0 : r3.length)) return;
    let s2 = ie(i2) ? { ...i2 } : i2, c2 = e3.flatMap((e4) => n2.flatMap((n3) => r3.map((r4) => t2(e4, n3, r4, s2))));
    o2(() => {
      c2.forEach((e4) => e4());
    });
  }, { flush: `post` });
}
function q() {
  let e2 = E(false), t2 = o();
  return t2 && p(() => {
    e2.value = true;
  }, t2), e2;
}
function J(e2) {
  let t2 = q();
  return m(() => (t2.value, !!e2()));
}
function Y(e2, t2, r2 = {}) {
  let { window: a2 = W, ...o2 } = r2, s2, c2 = J(() => a2 && `MutationObserver` in a2), l2 = () => {
    s2 && (s2 = (s2.disconnect(), void 0));
  }, u2 = i(m(() => {
    let t3 = R(n(e2)).map(G).filter(ne);
    return new Set(t3);
  }), (e3) => {
    l2(), c2.value && e3.size && (s2 = new MutationObserver(t2), e3.forEach((e4) => s2.observe(e4, o2)));
  }, { immediate: true, flush: `post` }), d2 = () => s2 == null ? void 0 : s2.takeRecords(), f2 = () => {
    u2(), l2();
  };
  return k(f2), { isSupported: c2, stop: f2, takeRecords: d2 };
}
function Me(e2, t2, n2 = {}) {
  let { window: r2 = W, document: i2 = r2 == null ? void 0 : r2.document, flush: a2 = `sync` } = n2;
  if (!r2 || !i2) return P;
  let o2, s2 = (e3) => {
    o2 == null ? void 0 : o2(), o2 = e3;
  }, c2 = l(() => {
    let n3 = G(e2);
    if (n3) {
      let { stop: e3 } = Y(i2, (e4) => {
        e4.map((e5) => [...e5.removedNodes]).flat().some((e5) => e5 === n3 || e5.contains(n3)) && t2(e4);
      }, { window: r2, childList: true, subtree: true });
      s2(e3);
    }
  }, { flush: a2 }), u2 = () => {
    c2(), s2();
  };
  return k(u2), u2;
}
function Ne(e2) {
  return typeof e2 == `function` ? e2 : typeof e2 == `string` ? (t2) => t2.key === e2 : Array.isArray(e2) ? (t2) => e2.includes(t2.key) : () => true;
}
function Pe(...e2) {
  let t2, r2, i2 = {};
  e2.length === 3 ? (t2 = e2[0], r2 = e2[1], i2 = e2[2]) : e2.length === 2 ? typeof e2[1] == `object` ? (t2 = true, r2 = e2[0], i2 = e2[1]) : (t2 = e2[0], r2 = e2[1]) : (t2 = true, r2 = e2[0]);
  let { target: a2 = W, eventName: o2 = `keydown`, passive: s2 = false, dedupe: c2 = false } = i2, l2 = Ne(t2);
  return K(a2, o2, (e3) => {
    e3.repeat && n(c2) || l2(e3) && r2(e3);
  }, s2);
}
function Fe(e2 = {}) {
  let { window: t2 = W, deep: n2 = true, triggerOnRemoval: r2 = false } = e2, i2 = e2.document ?? (t2 == null ? void 0 : t2.document), a2 = () => {
    let e3 = i2 == null ? void 0 : i2.activeElement;
    if (n2) for (var t3; e3 == null ? void 0 : e3.shadowRoot; ) e3 = e3 == null || (t3 = e3.shadowRoot) == null ? void 0 : t3.activeElement;
    return e3;
  }, o2 = E(), s2 = () => {
    o2.value = a2();
  };
  if (t2) {
    let e3 = { capture: true, passive: true };
    K(t2, `blur`, (e4) => {
      e4.relatedTarget === null && s2();
    }, e3), K(t2, `focus`, s2, e3);
  }
  return r2 && Me(o2, s2, { document: i2 }), s2(), o2;
}
function Ie(e2, t2 = {}) {
  let { immediate: r2 = true, fpsLimit: i2 = null, window: a2 = W, once: o2 = false } = t2, s2 = E(false), c2 = m(() => {
    let e3 = n(i2);
    return e3 ? 1e3 / e3 : null;
  }), l2 = 0, d2 = null;
  function f2(t3) {
    if (!s2.value || !a2) return;
    l2 || (l2 = t3);
    let n2 = t3 - l2;
    if (c2.value && n2 < c2.value) {
      d2 = a2.requestAnimationFrame(f2);
      return;
    }
    if (l2 = t3, e2({ delta: n2, timestamp: t3 }), o2) {
      s2.value = false, d2 = null;
      return;
    }
    d2 = a2.requestAnimationFrame(f2);
  }
  function p2() {
    !s2.value && a2 && (s2.value = true, l2 = 0, d2 = a2.requestAnimationFrame(f2));
  }
  function h2() {
    s2.value = false, d2 != null && a2 && (a2.cancelAnimationFrame(d2), d2 = null);
  }
  return r2 && p2(), k(h2), { isActive: u(s2), pause: h2, resume: p2 };
}
var Le = /* @__PURE__ */ Symbol(`vueuse-ssr-width`);
function Re() {
  let e2 = r() ? ee(Le, null) : null;
  return typeof e2 == `number` ? e2 : void 0;
}
function X(e2, t2 = {}) {
  let { window: r2 = W, ssrWidth: i2 = Re() } = t2, a2 = J(() => r2 && `matchMedia` in r2 && typeof r2.matchMedia == `function`), o2 = E(typeof i2 == `number`), s2 = E(), c2 = E(false);
  return l(() => {
    if (o2.value) {
      o2.value = !a2.value, c2.value = n(e2).split(`,`).some((e3) => {
        let t3 = e3.includes(`not all`), n2 = e3.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), r3 = e3.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), a3 = !!(n2 || r3);
        return n2 && a3 && (a3 = i2 >= L(n2[1])), r3 && a3 && (a3 = i2 <= L(r3[1])), t3 ? !a3 : a3;
      });
      return;
    }
    a2.value && (s2.value = r2.matchMedia(n(e2)), c2.value = s2.value.matches);
  }), K(s2, `change`, (e3) => {
    c2.value = e3.matches;
  }, { passive: true }), m(() => c2.value);
}
var ze = { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 };
function Be(e2, t2 = {}) {
  function r2(t3, r3) {
    let i3 = n(e2[n(t3)]);
    return r3 != null && (i3 = de(i3, r3)), typeof i3 == `number` && (i3 = `${i3}px`), i3;
  }
  let { window: i2 = W, strategy: a2 = `min-width`, ssrWidth: o2 = Re() } = t2, s2 = typeof o2 == `number`, c2 = s2 ? E(false) : { value: true };
  s2 && H(() => c2.value = !!i2);
  function l2(e3, t3) {
    return !c2.value && s2 ? e3 === `min` ? o2 >= L(t3) : o2 <= L(t3) : i2 ? i2.matchMedia(`(${e3}-width: ${t3})`).matches : false;
  }
  let u2 = (e3) => X(() => `(min-width: ${r2(e3)})`, t2), d2 = (e3) => X(() => `(max-width: ${r2(e3)})`, t2), f2 = Object.keys(e2).reduce((e3, t3) => (Object.defineProperty(e3, t3, { get: () => a2 === `min-width` ? u2(t3) : d2(t3), enumerable: true, configurable: true }), e3), {});
  function p2() {
    let t3 = Object.keys(e2).map((e3) => [e3, f2[e3], L(r2(e3))]).sort((e3, t4) => e3[2] - t4[2]);
    return m(() => t3.filter(([, e3]) => e3.value).map(([e3]) => e3));
  }
  return Object.assign(f2, { greaterOrEqual: u2, smallerOrEqual: d2, greater(e3) {
    return X(() => `(min-width: ${r2(e3, 0.1)})`, t2);
  }, smaller(e3) {
    return X(() => `(max-width: ${r2(e3, -0.1)})`, t2);
  }, between(e3, n2) {
    return X(() => `(min-width: ${r2(e3)}) and (max-width: ${r2(n2, -0.1)})`, t2);
  }, isGreater(e3) {
    return l2(`min`, r2(e3, 0.1));
  }, isGreaterOrEqual(e3) {
    return l2(`min`, r2(e3));
  }, isSmaller(e3) {
    return l2(`max`, r2(e3, -0.1));
  }, isSmallerOrEqual(e3) {
    return l2(`max`, r2(e3));
  }, isInBetween(e3, t3) {
    return l2(`min`, r2(e3)) && l2(`max`, r2(t3, -0.1));
  }, current: p2, active() {
    let e3 = p2();
    return m(() => e3.value.length === 0 ? `` : e3.value.at(a2 === `min-width` ? -1 : 0));
  } });
}
function Ve(e2) {
  return JSON.parse(JSON.stringify(e2));
}
var Z = typeof globalThis < `u` ? globalThis : typeof window < `u` ? window : t === void 0 ? typeof self < `u` ? self : {} : t, Q = `__vueuse_ssr_handlers__`, He = Ue();
function Ue() {
  return Q in Z || (Z[Q] = Z[Q] || {}), Z[Q];
}
function We(e2, t2) {
  return He[e2] || t2;
}
function Ge(e2) {
  return X(`(prefers-color-scheme: dark)`, e2);
}
function Ke(e2) {
  return e2 == null ? `any` : e2 instanceof Set ? `set` : e2 instanceof Map ? `map` : e2 instanceof Date ? `date` : typeof e2 == `boolean` ? `boolean` : typeof e2 == `string` ? `string` : typeof e2 == `object` ? `object` : Number.isNaN(e2) ? `any` : `number`;
}
var qe = { boolean: { read: (e2) => e2 === `true`, write: (e2) => String(e2) }, object: { read: (e2) => JSON.parse(e2), write: (e2) => JSON.stringify(e2) }, number: { read: (e2) => Number.parseFloat(e2), write: (e2) => String(e2) }, any: { read: (e2) => e2, write: (e2) => String(e2) }, string: { read: (e2) => e2, write: (e2) => String(e2) }, map: { read: (e2) => new Map(JSON.parse(e2)), write: (e2) => JSON.stringify(Array.from(e2.entries())) }, set: { read: (e2) => new Set(JSON.parse(e2)), write: (e2) => JSON.stringify(Array.from(e2)) }, date: { read: (e2) => new Date(e2), write: (e2) => e2.toISOString() } }, Je = `vueuse-storage`;
function Ye(e2, t2, r2, a2 = {}) {
  let { flush: o2 = `pre`, deep: s2 = true, listenToStorageChanges: c2 = true, writeDefaults: l2 = true, mergeDefaults: u2 = false, shallow: d2, window: f2 = W, eventFilter: p2, onError: h2 = (e3) => {
    console.error(e3);
  }, initOnMounted: g2 } = a2, _2 = (d2 ? E : w)(typeof t2 == `function` ? t2() : t2), v2 = m(() => n(e2));
  if (!r2) try {
    r2 = We(`getDefaultStorage`, () => W == null ? void 0 : W.localStorage)();
  } catch (e3) {
    h2(e3);
  }
  if (!r2) return _2;
  let y2 = n(t2), b2 = Ke(y2), x2 = a2.serializer ?? qe[b2], { pause: C2, resume: T2 } = V(_2, (e3) => k2(e3), { flush: o2, deep: s2, eventFilter: p2 });
  i(v2, () => j2(), { flush: o2 });
  let D2 = false;
  f2 && c2 && (r2 instanceof Storage ? K(f2, `storage`, (e3) => {
    g2 && !D2 || j2(e3);
  }, { passive: true }) : K(f2, Je, (e3) => {
    g2 && !D2 || M2(e3);
  })), g2 ? H(() => {
    D2 = true, j2();
  }) : j2();
  function O2(e3, t3) {
    if (f2) {
      let n2 = { key: v2.value, oldValue: e3, newValue: t3, storageArea: r2 };
      f2.dispatchEvent(r2 instanceof Storage ? new StorageEvent(`storage`, n2) : new CustomEvent(Je, { detail: n2 }));
    }
  }
  function k2(e3) {
    try {
      let t3 = r2.getItem(v2.value);
      if (e3 == null) O2(t3, null), r2.removeItem(v2.value);
      else {
        let n2 = x2.write(e3);
        t3 !== n2 && (r2.setItem(v2.value, n2), O2(t3, n2));
      }
    } catch (e4) {
      h2(e4);
    }
  }
  function A2(e3) {
    let t3 = e3 ? e3.newValue : r2.getItem(v2.value);
    if (t3 == null) return l2 && y2 != null && r2.setItem(v2.value, x2.write(y2)), y2;
    if (!e3 && u2) {
      let e4 = x2.read(t3);
      return typeof u2 == `function` ? u2(e4, y2) : b2 === `object` && !Array.isArray(e4) ? { ...y2, ...e4 } : e4;
    } else if (typeof t3 != `string`) return t3;
    else return x2.read(t3);
  }
  function j2(e3) {
    if (!(e3 && e3.storageArea !== r2)) {
      if (e3 && e3.key == null) {
        _2.value = y2;
        return;
      }
      if (!(e3 && e3.key !== v2.value)) {
        C2();
        try {
          let t3 = x2.write(_2.value);
          (e3 === void 0 || (e3 == null ? void 0 : e3.newValue) !== t3) && (_2.value = A2(e3));
        } catch (e4) {
          h2(e4);
        } finally {
          e3 ? S(T2) : T2();
        }
      }
    }
  }
  function M2(e3) {
    j2(e3.detail);
  }
  return _2;
}
var Xe = `*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`;
function Ze(e2 = {}) {
  let { selector: t2 = `html`, attribute: n2 = `class`, initialValue: r2 = `auto`, window: a2 = W, storage: o2, storageKey: s2 = `vueuse-color-scheme`, listenToStorageChanges: c2 = true, storageRef: l2, emitAuto: u2, disableTransition: d2 = true } = e2, f2 = { auto: ``, light: `light`, dark: `dark`, ...e2.modes || {} }, p2 = Ge({ window: a2 }), h2 = m(() => p2.value ? `dark` : `light`), g2 = l2 || (s2 == null ? F(r2) : Ye(s2, r2, o2, { window: a2, listenToStorageChanges: c2 })), _2 = m(() => g2.value === `auto` ? h2.value : g2.value), v2 = We(`updateHTMLAttrs`, (e3, t3, n3) => {
    let r3 = typeof e3 == `string` ? a2 == null ? void 0 : a2.document.querySelector(e3) : G(e3);
    if (!r3) return;
    let i2 = /* @__PURE__ */ new Set(), o3 = /* @__PURE__ */ new Set(), s3 = null;
    if (t3 === `class`) {
      let e4 = n3.split(/\s/g);
      Object.values(f2).flatMap((e5) => (e5 || ``).split(/\s/g)).filter(Boolean).forEach((t4) => {
        e4.includes(t4) ? i2.add(t4) : o3.add(t4);
      });
    } else s3 = { key: t3, value: n3 };
    if (i2.size === 0 && o3.size === 0 && s3 === null) return;
    let c3;
    d2 && (c3 = a2.document.createElement(`style`), c3.appendChild(document.createTextNode(Xe)), a2.document.head.appendChild(c3));
    for (let e4 of i2) r3.classList.add(e4);
    for (let e4 of o3) r3.classList.remove(e4);
    s3 && r3.setAttribute(s3.key, s3.value), d2 && (a2.getComputedStyle(c3).opacity, document.head.removeChild(c3));
  });
  function y2(e3) {
    v2(t2, n2, f2[e3] ?? e3);
  }
  function b2(t3) {
    e2.onChanged ? e2.onChanged(t3, y2) : y2(t3);
  }
  i(_2, b2, { flush: `post`, immediate: true }), H(() => b2(_2.value));
  let x2 = m({ get() {
    return u2 ? g2.value : _2.value;
  }, set(e3) {
    g2.value = e3;
  } });
  return Object.assign(x2, { store: g2, system: h2, state: _2 });
}
function Qe(e2) {
  let t2 = o(), n2 = O(() => null, () => e2 ? G(e2) : t2.proxy.$el);
  return x(n2.trigger), p(n2.trigger), n2;
}
function $e(e2 = {}) {
  let { valueDark: t2 = `dark`, valueLight: n2 = `` } = e2, r2 = Ze({ ...e2, onChanged: (t3, n3) => {
    var r3;
    e2.onChanged ? (r3 = e2.onChanged) == null || r3.call(e2, t3 === `dark`, n3, t3) : n3(t3);
  }, modes: { dark: t2, light: n2 } }), i2 = m(() => r2.system.value);
  return m({ get() {
    return r2.value === `dark`;
  }, set(e3) {
    let t3 = e3 ? `dark` : `light`;
    i2.value === t3 ? r2.value = `auto` : r2.value = t3;
  } });
}
function et(e2, t2, r2 = {}) {
  let { window: a2 = W, ...o2 } = r2, s2, c2 = J(() => a2 && `ResizeObserver` in a2), l2 = () => {
    s2 && (s2 = (s2.disconnect(), void 0));
  }, u2 = i(m(() => {
    let t3 = n(e2);
    return Array.isArray(t3) ? t3.map((e3) => G(e3)) : [G(t3)];
  }), (e3) => {
    if (l2(), c2.value && a2) {
      s2 = new ResizeObserver(t2);
      for (let t3 of e3) t3 && s2.observe(t3, o2);
    }
  }, { immediate: true, flush: `post` }), d2 = () => {
    l2(), u2();
  };
  return k(d2), { isSupported: c2, stop: d2 };
}
var $ = /* @__PURE__ */ new Map();
function tt(e2) {
  let t2 = d();
  function n2(n3) {
    var r3;
    let a3 = $.get(e2) || /* @__PURE__ */ new Set();
    a3.add(n3), $.set(e2, a3);
    let o3 = () => i2(n3);
    return t2 == null || (r3 = t2.cleanups) == null || r3.push(o3), o3;
  }
  function r2(e3) {
    function t3(...n3) {
      i2(t3), e3(...n3);
    }
    return n2(t3);
  }
  function i2(t3) {
    let n3 = $.get(e2);
    n3 && (n3.delete(t3), n3.size || a2());
  }
  function a2() {
    $.delete(e2);
  }
  function o2(t3, n3) {
    var r3;
    (r3 = $.get(e2)) == null || r3.forEach((e3) => e3(t3, n3));
  }
  return { on: n2, once: r2, off: i2, emit: o2, reset: a2 };
}
var nt = `focusin`, rt = `focusout`, it = `:focus-within`;
function at(e2, t2 = {}) {
  let { window: n2 = W } = t2, r2 = m(() => G(e2)), i2 = E(false), a2 = m(() => i2.value), o2 = Fe(t2);
  if (!n2 || !o2.value) return { focused: a2 };
  let s2 = { passive: true };
  return K(r2, nt, () => i2.value = true, s2), K(r2, rt, () => {
    var e3, t3;
    return i2.value = ((e3 = r2.value) == null || (t3 = e3.matches) == null ? void 0 : t3.call(e3, it)) ?? false;
  }, s2), { focused: a2 };
}
var ot = { page: (e2) => [e2.pageX, e2.pageY], client: (e2) => [e2.clientX, e2.clientY], screen: (e2) => [e2.screenX, e2.screenY], movement: (e2) => e2 instanceof MouseEvent ? [e2.movementX, e2.movementY] : null };
function st(e2 = {}) {
  let { type: t2 = `page`, touch: n2 = true, resetOnTouchEnds: r2 = false, initialValue: i2 = { x: 0, y: 0 }, window: a2 = W, target: o2 = a2, scroll: s2 = true, eventFilter: c2 } = e2, l2 = null, u2 = 0, d2 = 0, f2 = E(i2.x), p2 = E(i2.y), m2 = E(null), h2 = typeof t2 == `function` ? t2 : ot[t2], g2 = (e3) => {
    let t3 = h2(e3);
    l2 = e3, t3 && ([f2.value, p2.value] = t3, m2.value = `mouse`), a2 && (u2 = a2.scrollX, d2 = a2.scrollY);
  }, _2 = (e3) => {
    if (e3.touches.length > 0) {
      let t3 = h2(e3.touches[0]);
      t3 && ([f2.value, p2.value] = t3, m2.value = `touch`);
    }
  }, v2 = () => {
    if (!l2 || !a2) return;
    let e3 = h2(l2);
    l2 instanceof MouseEvent && e3 && (f2.value = e3[0] + a2.scrollX - u2, p2.value = e3[1] + a2.scrollY - d2);
  }, y2 = () => {
    f2.value = i2.x, p2.value = i2.y;
  }, b2 = c2 ? (e3) => c2(() => g2(e3), {}) : (e3) => g2(e3), x2 = c2 ? (e3) => c2(() => _2(e3), {}) : (e3) => _2(e3), S2 = c2 ? () => c2(() => v2(), {}) : () => v2();
  if (o2) {
    let e3 = { passive: true };
    K(o2, [`mousemove`, `dragover`], b2, e3), n2 && t2 !== `movement` && (K(o2, [`touchstart`, `touchmove`], x2, e3), r2 && K(o2, `touchend`, y2, e3)), s2 && t2 === `page` && K(a2, `scroll`, S2, e3);
  }
  return { x: f2, y: p2, sourceType: m2 };
}
function ct(e2, t2 = {}) {
  let { windowResize: n2 = true, windowScroll: r2 = true, handleOutside: a2 = true, window: o2 = W } = t2, s2 = t2.type || `page`, { x: c2, y: l2, sourceType: u2 } = st(t2), d2 = E(e2 ?? (o2 == null ? void 0 : o2.document.body)), f2 = E(0), p2 = E(0), m2 = E(0), h2 = E(0), g2 = E(0), _2 = E(0), v2 = E(true);
  function y2() {
    if (!o2) return;
    let e3 = G(d2);
    if (!(!e3 || !(e3 instanceof Element))) for (let t3 of e3.getClientRects()) {
      let { left: e4, top: n3, width: r3, height: i2 } = t3;
      m2.value = e4 + (s2 === `page` ? o2.pageXOffset : 0), h2.value = n3 + (s2 === `page` ? o2.pageYOffset : 0), g2.value = i2, _2.value = r3;
      let u3 = c2.value - m2.value, d3 = l2.value - h2.value;
      if (v2.value = r3 === 0 || i2 === 0 || u3 < 0 || d3 < 0 || u3 > r3 || d3 > i2, (a2 || !v2.value) && (f2.value = u3, p2.value = d3), !v2.value) break;
    }
  }
  let b2 = [];
  function x2() {
    b2.forEach((e3) => e3()), b2.length = 0;
  }
  if (H(() => {
    y2();
  }), o2) {
    let { stop: e3 } = et(d2, y2), { stop: t3 } = Y(d2, y2, { attributeFilter: [`style`, `class`] }), a3 = i([d2, c2, l2], y2);
    b2.push(e3, t3, a3), K(document, `mouseleave`, () => v2.value = true, { passive: true }), r2 && b2.push(K(`scroll`, y2, { capture: true, passive: true })), n2 && b2.push(K(`resize`, y2, { passive: true }));
  }
  return { x: c2, y: l2, sourceType: u2, elementX: f2, elementY: p2, elementPositionX: m2, elementPositionY: h2, elementHeight: g2, elementWidth: _2, isOutside: v2, stop: x2 };
}
function lt(e2 = Qe()) {
  let t2 = E(), r2 = () => {
    let n2 = G(e2);
    n2 && (t2.value = n2.parentElement);
  };
  return H(r2), i(() => n(e2), r2), t2;
}
function ut(e2, t2, n2, r2 = {}) {
  var a2, s2;
  let { clone: c2 = false, passive: l2 = false, eventName: u2, deep: d2 = false, defaultValue: f2, shouldEmit: p2 } = r2, h2 = o(), g2 = n2 || (h2 == null ? void 0 : h2.emit) || (h2 == null || (a2 = h2.$emit) == null ? void 0 : a2.bind(h2)) || (h2 == null || (s2 = h2.proxy) == null || (s2 = s2.$emit) == null ? void 0 : s2.bind(h2 == null ? void 0 : h2.proxy)), _2 = u2;
  t2 || (t2 = `modelValue`), _2 || (_2 = `update:${t2.toString()}`);
  let v2 = (e3) => c2 ? typeof c2 == `function` ? c2(e3) : Ve(e3) : e3, y2 = () => te(e2[t2]) ? v2(e2[t2]) : f2, b2 = (e3) => {
    p2 ? p2(e3) && g2(_2, e3) : g2(_2, e3);
  };
  if (l2) {
    let n3 = w(y2()), r3 = false;
    return i(() => e2[t2], (e3) => {
      r3 || (r3 = true, n3.value = v2(e3), S(() => r3 = false));
    }), i(n3, (n4) => {
      !r3 && (n4 !== e2[t2] || d2) && b2(n4);
    }, { deep: d2 }), n3;
  } else return m({ get() {
    return y2();
  }, set(e3) {
    b2(e3);
  } });
}
export {
  ye as A,
  j as C,
  ue as D,
  ae as E,
  k as F,
  xe as I,
  De as L,
  Ce as M,
  Te as N,
  B as O,
  Ee as P,
  U as R,
  A as S,
  N as T,
  Ie as _,
  Pe as a,
  ut as b,
  Be as c,
  tt as d,
  K as f,
  lt as g,
  ct as h,
  W as i,
  be as j,
  ve as k,
  Ze as l,
  q as m,
  ke as n,
  G as o,
  at as p,
  Ae as r,
  Fe as s,
  ze as t,
  $e as u,
  et as v,
  he as w,
  D as x,
  Ye as y
};
