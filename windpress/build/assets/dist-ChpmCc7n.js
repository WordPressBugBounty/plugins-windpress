import { n as e, t } from "./dist-Bnj2Qb5M.js";
import { En as n, H as r, Ht as i, L as a, On as o, Ut as s, an as c, bn as l, ct as u, g as d, k as f, pt as p, tt as m, un as h, vn as g, xn as _ } from "./runtime-core.esm-bundler-Twwq1XF8.js";
import { D as v, M as y, N as b, O as x, T as S, c as C, d as w, f as T, g as E, l as D, m as O, n as k, o as A, p as j, s as M, t as N, w as P } from "./dist-Bw8ba7To.js";
e();
function ee(e2, t2, n2) {
  let r2;
  r2 = h(n2) ? { evaluating: n2 } : n2 || {};
  let { lazy: i2 = false, flush: a2 = `sync`, evaluating: o2 = void 0, shallow: c2 = true, onError: l2 = globalThis.reportError ?? j } = r2, u2 = _(!i2), f2 = c2 ? _(t2) : g(t2), p2 = 0;
  return s(async (t3) => {
    if (!u2.value) return;
    p2++;
    let n3 = p2, r3 = false;
    o2 && Promise.resolve().then(() => {
      o2.value = true;
    });
    try {
      let i3 = await e2((e3) => {
        t3(() => {
          o2 && (o2.value = false), r3 || e3();
        });
      });
      n3 === p2 && (f2.value = i3);
    } catch (e3) {
      l2(e3);
    } finally {
      o2 && n3 === p2 && (o2.value = false), r3 = true;
    }
  }, { flush: a2 }), i2 ? d(() => (u2.value = true, f2.value)) : f2;
}
function te(e2 = {}) {
  let { inheritAttrs: t2 = true, name: n2 = `ReusableTemplate` } = e2, r2 = _(), i2 = f({ name: `${n2}.define`, setup(e3, { slots: t3 }) {
    return () => {
      r2.value = t3.default;
    };
  } }), a2 = f({ inheritAttrs: t2, name: `${n2}.reuse`, props: e2.props, setup(n3, { attrs: i3, slots: a3 }) {
    return () => {
      if (!r2.value) throw Error(`[VueUse] Failed to find the definition of reusable template`);
      let o2 = r2.value?.call(r2, { ...e2.props == null ? ne(i3) : n3, $slots: a3 });
      return t2 && o2?.length === 1 ? o2[0] : o2;
    };
  } });
  return T({ define: i2, reuse: a2 }, [i2, a2]);
}
function ne(e2) {
  let t2 = {};
  for (let n2 in e2) t2[N(n2)] = e2[n2];
  return t2;
}
var F = C ? window : void 0;
C && window.document, C && window.navigator, C && window.location;
function I(e2) {
  let t2 = n(e2);
  return t2?.$el ?? t2;
}
function L(...e2) {
  let t2 = (e3, t3, n2, r3) => (e3.addEventListener(t3, n2, r3), () => e3.removeEventListener(t3, n2, r3)), r2 = d(() => {
    let t3 = P(n(e2[0])).filter((e3) => e3 != null);
    return t3.every((e3) => typeof e3 != `string`) ? t3 : void 0;
  });
  return y(() => [r2.value?.map((e3) => I(e3)) ?? [F].filter((e3) => e3 != null), P(n(r2.value ? e2[1] : e2[0])), P(o(r2.value ? e2[2] : e2[1])), n(r2.value ? e2[3] : e2[2])], ([e3, n2, r3, i2], a2, o2) => {
    if (!e3?.length || !n2?.length || !r3?.length) return;
    let s2 = w(i2) ? { ...i2 } : i2, c2 = e3.flatMap((e4) => n2.flatMap((n3) => r3.map((r4) => t2(e4, n3, r4, s2))));
    o2(() => {
      c2.forEach((e4) => e4());
    });
  }, { flush: `post` });
}
function R() {
  let e2 = _(false), t2 = a();
  return t2 && u(() => {
    e2.value = true;
  }, t2), e2;
}
function z(e2) {
  let t2 = R();
  return d(() => (t2.value, !!e2()));
}
function B(e2, t2, r2 = {}) {
  let { window: a2 = F, ...o2 } = r2, s2, c2 = z(() => a2 && `MutationObserver` in a2), l2 = () => {
    s2 && (s2 = (s2.disconnect(), void 0));
  }, u2 = i(d(() => {
    let t3 = P(n(e2)).map(I).filter(O);
    return new Set(t3);
  }), (e3) => {
    l2(), c2.value && e3.size && (s2 = new MutationObserver(t2), e3.forEach((e4) => s2.observe(e4, o2)));
  }, { immediate: true, flush: `post` }), f2 = () => s2?.takeRecords(), p2 = () => {
    u2(), l2();
  };
  return x(p2), { isSupported: c2, stop: p2, takeRecords: f2 };
}
function re(e2, t2, n2 = {}) {
  let { window: r2 = F, document: i2 = r2?.document, flush: a2 = `sync` } = n2;
  if (!r2 || !i2) return j;
  let o2, c2 = (e3) => {
    o2?.(), o2 = e3;
  }, l2 = s(() => {
    let n3 = I(e2);
    if (n3) {
      let { stop: e3 } = B(i2, (e4) => {
        e4.map((e5) => [...e5.removedNodes]).flat().some((e5) => e5 === n3 || e5.contains(n3)) && t2(e4);
      }, { window: r2, childList: true, subtree: true });
      c2(e3);
    }
  }, { flush: a2 }), u2 = () => {
    l2(), c2();
  };
  return x(u2), u2;
}
function ie(e2) {
  return typeof e2 == `function` ? e2 : typeof e2 == `string` ? (t2) => t2.key === e2 : Array.isArray(e2) ? (t2) => e2.includes(t2.key) : () => true;
}
function ae(...e2) {
  let t2, r2, i2 = {};
  e2.length === 3 ? (t2 = e2[0], r2 = e2[1], i2 = e2[2]) : e2.length === 2 ? typeof e2[1] == `object` ? (t2 = true, r2 = e2[0], i2 = e2[1]) : (t2 = e2[0], r2 = e2[1]) : (t2 = true, r2 = e2[0]);
  let { target: a2 = F, eventName: o2 = `keydown`, passive: s2 = false, dedupe: c2 = false } = i2, l2 = ie(t2);
  return L(a2, o2, (e3) => {
    e3.repeat && n(c2) || l2(e3) && r2(e3);
  }, s2);
}
function V(e2 = {}) {
  let { window: t2 = F, deep: n2 = true, triggerOnRemoval: r2 = false } = e2, i2 = e2.document ?? t2?.document, a2 = () => {
    let e3 = i2?.activeElement;
    if (n2) for (var t3; e3?.shadowRoot; ) e3 = e3 == null || (t3 = e3.shadowRoot) == null ? void 0 : t3.activeElement;
    return e3;
  }, o2 = _(), s2 = () => {
    o2.value = a2();
  };
  if (t2) {
    let e3 = { capture: true, passive: true };
    L(t2, `blur`, (e4) => {
      e4.relatedTarget === null && s2();
    }, e3), L(t2, `focus`, s2, e3);
  }
  return r2 && re(o2, s2, { document: i2 }), s2(), o2;
}
function oe(e2, t2 = {}) {
  let { immediate: r2 = true, fpsLimit: i2 = null, window: a2 = F, once: o2 = false } = t2, s2 = _(false), c2 = d(() => {
    let e3 = n(i2);
    return e3 ? 1e3 / e3 : null;
  }), u2 = 0, f2 = null;
  function p2(t3) {
    if (!s2.value || !a2) return;
    u2 || (u2 = t3);
    let n2 = t3 - u2;
    if (c2.value && n2 < c2.value) {
      f2 = a2.requestAnimationFrame(p2);
      return;
    }
    if (u2 = t3, e2({ delta: n2, timestamp: t3 }), o2) {
      s2.value = false, f2 = null;
      return;
    }
    f2 = a2.requestAnimationFrame(p2);
  }
  function m2() {
    !s2.value && a2 && (s2.value = true, u2 = 0, f2 = a2.requestAnimationFrame(p2));
  }
  function h2() {
    s2.value = false, f2 != null && a2 && (a2.cancelAnimationFrame(f2), f2 = null);
  }
  return r2 && m2(), x(h2), { isActive: l(s2), pause: h2, resume: m2 };
}
var se = /* @__PURE__ */ Symbol(`vueuse-ssr-width`);
function H() {
  let e2 = r() ? M(se, null) : null;
  return typeof e2 == `number` ? e2 : void 0;
}
function U(e2, t2 = {}) {
  let { window: r2 = F, ssrWidth: i2 = H() } = t2, a2 = z(() => r2 && `matchMedia` in r2 && typeof r2.matchMedia == `function`), o2 = _(typeof i2 == `number`), c2 = _(), l2 = _(false);
  return s(() => {
    if (o2.value) {
      o2.value = !a2.value, l2.value = n(e2).split(`,`).some((e3) => {
        let t3 = e3.includes(`not all`), n2 = e3.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), r3 = e3.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), a3 = !!(n2 || r3);
        return n2 && a3 && (a3 = i2 >= E(n2[1])), r3 && a3 && (a3 = i2 <= E(r3[1])), t3 ? !a3 : a3;
      });
      return;
    }
    a2.value && (c2.value = r2.matchMedia(n(e2)), l2.value = c2.value.matches);
  }), L(c2, `change`, (e3) => {
    l2.value = e3.matches;
  }, { passive: true }), d(() => l2.value);
}
var ce = { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 };
function W(e2, t2 = {}) {
  function r2(t3, r3) {
    let i3 = n(e2[n(t3)]);
    return r3 != null && (i3 = A(i3, r3)), typeof i3 == `number` && (i3 = `${i3}px`), i3;
  }
  let { window: i2 = F, strategy: a2 = `min-width`, ssrWidth: o2 = H() } = t2, s2 = typeof o2 == `number`, c2 = s2 ? _(false) : { value: true };
  s2 && v(() => c2.value = !!i2);
  function l2(e3, t3) {
    return !c2.value && s2 ? e3 === `min` ? o2 >= E(t3) : o2 <= E(t3) : i2 ? i2.matchMedia(`(${e3}-width: ${t3})`).matches : false;
  }
  let u2 = (e3) => U(() => `(min-width: ${r2(e3)})`, t2), f2 = (e3) => U(() => `(max-width: ${r2(e3)})`, t2), p2 = Object.keys(e2).reduce((e3, t3) => (Object.defineProperty(e3, t3, { get: () => a2 === `min-width` ? u2(t3) : f2(t3), enumerable: true, configurable: true }), e3), {});
  function m2() {
    let t3 = Object.keys(e2).map((e3) => [e3, p2[e3], E(r2(e3))]).sort((e3, t4) => e3[2] - t4[2]);
    return d(() => t3.filter(([, e3]) => e3.value).map(([e3]) => e3));
  }
  return Object.assign(p2, { greaterOrEqual: u2, smallerOrEqual: f2, greater(e3) {
    return U(() => `(min-width: ${r2(e3, 0.1)})`, t2);
  }, smaller(e3) {
    return U(() => `(max-width: ${r2(e3, -0.1)})`, t2);
  }, between(e3, n2) {
    return U(() => `(min-width: ${r2(e3)}) and (max-width: ${r2(n2, -0.1)})`, t2);
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
  }, current: m2, active() {
    let e3 = m2();
    return d(() => e3.value.length === 0 ? `` : e3.value.at(a2 === `min-width` ? -1 : 0));
  } });
}
function le(e2) {
  return JSON.parse(JSON.stringify(e2));
}
var G = typeof globalThis < `u` ? globalThis : typeof window < `u` ? window : t === void 0 ? typeof self < `u` ? self : {} : t, K = `__vueuse_ssr_handlers__`, ue = q();
function q() {
  return K in G || (G[K] = G[K] || {}), G[K];
}
function J(e2, t2) {
  return ue[e2] || t2;
}
function de(e2) {
  return U(`(prefers-color-scheme: dark)`, e2);
}
function fe(e2) {
  return e2 == null ? `any` : e2 instanceof Set ? `set` : e2 instanceof Map ? `map` : e2 instanceof Date ? `date` : typeof e2 == `boolean` ? `boolean` : typeof e2 == `string` ? `string` : typeof e2 == `object` ? `object` : Number.isNaN(e2) ? `any` : `number`;
}
var pe = { boolean: { read: (e2) => e2 === `true`, write: (e2) => String(e2) }, object: { read: (e2) => JSON.parse(e2), write: (e2) => JSON.stringify(e2) }, number: { read: (e2) => Number.parseFloat(e2), write: (e2) => String(e2) }, any: { read: (e2) => e2, write: (e2) => String(e2) }, string: { read: (e2) => e2, write: (e2) => String(e2) }, map: { read: (e2) => new Map(JSON.parse(e2)), write: (e2) => JSON.stringify(Array.from(e2.entries())) }, set: { read: (e2) => new Set(JSON.parse(e2)), write: (e2) => JSON.stringify(Array.from(e2)) }, date: { read: (e2) => new Date(e2), write: (e2) => e2.toISOString() } }, Y = `vueuse-storage`;
function X(e2, t2, r2, a2 = {}) {
  let { flush: o2 = `pre`, deep: s2 = true, listenToStorageChanges: c2 = true, writeDefaults: l2 = true, mergeDefaults: u2 = false, shallow: f2, window: p2 = F, eventFilter: h2, onError: y2 = (e3) => {
    console.error(e3);
  }, initOnMounted: x2 } = a2, S2 = (f2 ? _ : g)(typeof t2 == `function` ? t2() : t2), C2 = d(() => n(e2));
  if (!r2) try {
    r2 = J(`getDefaultStorage`, () => F?.localStorage)();
  } catch (e3) {
    y2(e3);
  }
  if (!r2) return S2;
  let w2 = n(t2), T2 = fe(w2), E2 = a2.serializer ?? pe[T2], { pause: D2, resume: O2 } = b(S2, (e3) => j2(e3), { flush: o2, deep: s2, eventFilter: h2 });
  i(C2, () => N2(), { flush: o2 });
  let k2 = false;
  p2 && c2 && (r2 instanceof Storage ? L(p2, `storage`, (e3) => {
    x2 && !k2 || N2(e3);
  }, { passive: true }) : L(p2, Y, (e3) => {
    x2 && !k2 || P2(e3);
  })), x2 ? v(() => {
    k2 = true, N2();
  }) : N2();
  function A2(e3, t3) {
    if (p2) {
      let n2 = { key: C2.value, oldValue: e3, newValue: t3, storageArea: r2 };
      p2.dispatchEvent(r2 instanceof Storage ? new StorageEvent(`storage`, n2) : new CustomEvent(Y, { detail: n2 }));
    }
  }
  function j2(e3) {
    try {
      let t3 = r2.getItem(C2.value);
      if (e3 == null) A2(t3, null), r2.removeItem(C2.value);
      else {
        let n2 = E2.write(e3);
        t3 !== n2 && (r2.setItem(C2.value, n2), A2(t3, n2));
      }
    } catch (e4) {
      y2(e4);
    }
  }
  function M2(e3) {
    let t3 = e3 ? e3.newValue : r2.getItem(C2.value);
    if (t3 == null) return l2 && w2 != null && r2.setItem(C2.value, E2.write(w2)), w2;
    if (!e3 && u2) {
      let e4 = E2.read(t3);
      return typeof u2 == `function` ? u2(e4, w2) : T2 === `object` && !Array.isArray(e4) ? { ...w2, ...e4 } : e4;
    } else if (typeof t3 != `string`) return t3;
    else return E2.read(t3);
  }
  function N2(e3) {
    if (!(e3 && e3.storageArea !== r2)) {
      if (e3 && e3.key == null) {
        S2.value = w2;
        return;
      }
      if (!(e3 && e3.key !== C2.value)) {
        D2();
        try {
          let t3 = E2.write(S2.value);
          (e3 === void 0 || e3?.newValue !== t3) && (S2.value = M2(e3));
        } catch (e4) {
          y2(e4);
        } finally {
          e3 ? m(O2) : O2();
        }
      }
    }
  }
  function P2(e3) {
    N2(e3.detail);
  }
  return S2;
}
var me = `*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`;
function Z(e2 = {}) {
  let { selector: t2 = `html`, attribute: n2 = `class`, initialValue: r2 = `auto`, window: a2 = F, storage: o2, storageKey: s2 = `vueuse-color-scheme`, listenToStorageChanges: c2 = true, storageRef: l2, emitAuto: u2, disableTransition: f2 = true } = e2, p2 = { auto: ``, light: `light`, dark: `dark`, ...e2.modes || {} }, m2 = de({ window: a2 }), h2 = d(() => m2.value ? `dark` : `light`), g2 = l2 || (s2 == null ? S(r2) : X(s2, r2, o2, { window: a2, listenToStorageChanges: c2 })), _2 = d(() => g2.value === `auto` ? h2.value : g2.value), y2 = J(`updateHTMLAttrs`, (e3, t3, n3) => {
    let r3 = typeof e3 == `string` ? a2?.document.querySelector(e3) : I(e3);
    if (!r3) return;
    let i2 = /* @__PURE__ */ new Set(), o3 = /* @__PURE__ */ new Set(), s3 = null;
    if (t3 === `class`) {
      let e4 = n3.split(/\s/g);
      Object.values(p2).flatMap((e5) => (e5 || ``).split(/\s/g)).filter(Boolean).forEach((t4) => {
        e4.includes(t4) ? i2.add(t4) : o3.add(t4);
      });
    } else s3 = { key: t3, value: n3 };
    if (i2.size === 0 && o3.size === 0 && s3 === null) return;
    let c3;
    f2 && (c3 = a2.document.createElement(`style`), c3.appendChild(document.createTextNode(me)), a2.document.head.appendChild(c3));
    for (let e4 of i2) r3.classList.add(e4);
    for (let e4 of o3) r3.classList.remove(e4);
    s3 && r3.setAttribute(s3.key, s3.value), f2 && (a2.getComputedStyle(c3).opacity, document.head.removeChild(c3));
  });
  function b2(e3) {
    y2(t2, n2, p2[e3] ?? e3);
  }
  function x2(t3) {
    e2.onChanged ? e2.onChanged(t3, b2) : b2(t3);
  }
  i(_2, x2, { flush: `post`, immediate: true }), v(() => x2(_2.value));
  let C2 = d({ get() {
    return u2 ? g2.value : _2.value;
  }, set(e3) {
    g2.value = e3;
  } });
  return Object.assign(C2, { store: g2, system: h2, state: _2 });
}
function he(e2) {
  let t2 = a(), n2 = k(() => null, () => e2 ? I(e2) : t2.proxy.$el);
  return p(n2.trigger), u(n2.trigger), n2;
}
function ge(e2 = {}) {
  let { valueDark: t2 = `dark`, valueLight: n2 = `` } = e2, r2 = Z({ ...e2, onChanged: (t3, n3) => {
    var r3;
    e2.onChanged ? (r3 = e2.onChanged) == null || r3.call(e2, t3 === `dark`, n3, t3) : n3(t3);
  }, modes: { dark: t2, light: n2 } }), i2 = d(() => r2.system.value);
  return d({ get() {
    return r2.value === `dark`;
  }, set(e3) {
    let t3 = e3 ? `dark` : `light`;
    i2.value === t3 ? r2.value = `auto` : r2.value = t3;
  } });
}
function Q(e2, t2, r2 = {}) {
  let { window: a2 = F, ...o2 } = r2, s2, c2 = z(() => a2 && `ResizeObserver` in a2), l2 = () => {
    s2 && (s2 = (s2.disconnect(), void 0));
  }, u2 = i(d(() => {
    let t3 = n(e2);
    return Array.isArray(t3) ? t3.map((e3) => I(e3)) : [I(t3)];
  }), (e3) => {
    if (l2(), c2.value && a2) {
      s2 = new ResizeObserver(t2);
      for (let t3 of e3) t3 && s2.observe(t3, o2);
    }
  }, { immediate: true, flush: `post` }), f2 = () => {
    l2(), u2();
  };
  return x(f2), { isSupported: c2, stop: f2 };
}
var $ = /* @__PURE__ */ new Map();
function _e(e2) {
  let t2 = c();
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
var ve = `focusin`, ye = `focusout`, be = `:focus-within`;
function xe(e2, t2 = {}) {
  let { window: n2 = F } = t2, r2 = d(() => I(e2)), i2 = _(false), a2 = d(() => i2.value), o2 = V(t2);
  if (!n2 || !o2.value) return { focused: a2 };
  let s2 = { passive: true };
  return L(r2, ve, () => i2.value = true, s2), L(r2, ye, () => {
    var e3, t3;
    return i2.value = ((e3 = r2.value) == null || (t3 = e3.matches) == null ? void 0 : t3.call(e3, be)) ?? false;
  }, s2), { focused: a2 };
}
var Se = { page: (e2) => [e2.pageX, e2.pageY], client: (e2) => [e2.clientX, e2.clientY], screen: (e2) => [e2.screenX, e2.screenY], movement: (e2) => e2 instanceof MouseEvent ? [e2.movementX, e2.movementY] : null };
function Ce(e2 = {}) {
  let { type: t2 = `page`, touch: n2 = true, resetOnTouchEnds: r2 = false, initialValue: i2 = { x: 0, y: 0 }, window: a2 = F, target: o2 = a2, scroll: s2 = true, eventFilter: c2 } = e2, l2 = null, u2 = 0, d2 = 0, f2 = _(i2.x), p2 = _(i2.y), m2 = _(null), h2 = typeof t2 == `function` ? t2 : Se[t2], g2 = (e3) => {
    let t3 = h2(e3);
    l2 = e3, t3 && ([f2.value, p2.value] = t3, m2.value = `mouse`), a2 && (u2 = a2.scrollX, d2 = a2.scrollY);
  }, v2 = (e3) => {
    if (e3.touches.length > 0) {
      let t3 = h2(e3.touches[0]);
      t3 && ([f2.value, p2.value] = t3, m2.value = `touch`);
    }
  }, y2 = () => {
    if (!l2 || !a2) return;
    let e3 = h2(l2);
    l2 instanceof MouseEvent && e3 && (f2.value = e3[0] + a2.scrollX - u2, p2.value = e3[1] + a2.scrollY - d2);
  }, b2 = () => {
    f2.value = i2.x, p2.value = i2.y;
  }, x2 = c2 ? (e3) => c2(() => g2(e3), {}) : (e3) => g2(e3), S2 = c2 ? (e3) => c2(() => v2(e3), {}) : (e3) => v2(e3), C2 = c2 ? () => c2(() => y2(), {}) : () => y2();
  if (o2) {
    let e3 = { passive: true };
    L(o2, [`mousemove`, `dragover`], x2, e3), n2 && t2 !== `movement` && (L(o2, [`touchstart`, `touchmove`], S2, e3), r2 && L(o2, `touchend`, b2, e3)), s2 && t2 === `page` && L(a2, `scroll`, C2, e3);
  }
  return { x: f2, y: p2, sourceType: m2 };
}
function we(e2, t2 = {}) {
  let { windowResize: n2 = true, windowScroll: r2 = true, handleOutside: a2 = true, window: o2 = F } = t2, s2 = t2.type || `page`, { x: c2, y: l2, sourceType: u2 } = Ce(t2), d2 = _(e2 ?? o2?.document.body), f2 = _(0), p2 = _(0), m2 = _(0), h2 = _(0), g2 = _(0), y2 = _(0), b2 = _(true);
  function x2() {
    if (!o2) return;
    let e3 = I(d2);
    if (!(!e3 || !(e3 instanceof Element))) for (let t3 of e3.getClientRects()) {
      let { left: e4, top: n3, width: r3, height: i2 } = t3;
      m2.value = e4 + (s2 === `page` ? o2.pageXOffset : 0), h2.value = n3 + (s2 === `page` ? o2.pageYOffset : 0), g2.value = i2, y2.value = r3;
      let u3 = c2.value - m2.value, d3 = l2.value - h2.value;
      if (b2.value = r3 === 0 || i2 === 0 || u3 < 0 || d3 < 0 || u3 > r3 || d3 > i2, (a2 || !b2.value) && (f2.value = u3, p2.value = d3), !b2.value) break;
    }
  }
  let S2 = [];
  function C2() {
    S2.forEach((e3) => e3()), S2.length = 0;
  }
  if (v(() => {
    x2();
  }), o2) {
    let { stop: e3 } = Q(d2, x2), { stop: t3 } = B(d2, x2, { attributeFilter: [`style`, `class`] }), a3 = i([d2, c2, l2], x2);
    S2.push(e3, t3, a3), L(document, `mouseleave`, () => b2.value = true, { passive: true }), r2 && S2.push(L(`scroll`, x2, { capture: true, passive: true })), n2 && S2.push(L(`resize`, x2, { passive: true }));
  }
  return { x: c2, y: l2, sourceType: u2, elementX: f2, elementY: p2, elementPositionX: m2, elementPositionY: h2, elementHeight: g2, elementWidth: y2, isOutside: b2, stop: C2 };
}
function Te(e2 = he()) {
  let t2 = _(), r2 = () => {
    let n2 = I(e2);
    n2 && (t2.value = n2.parentElement);
  };
  return v(r2), i(() => n(e2), r2), t2;
}
function Ee(e2, t2, n2, r2 = {}) {
  var o2, s2;
  let { clone: c2 = false, passive: l2 = false, eventName: u2, deep: f2 = false, defaultValue: p2, shouldEmit: h2 } = r2, _2 = a(), v2 = n2 || _2?.emit || (_2 == null || (o2 = _2.$emit) == null ? void 0 : o2.bind(_2)) || (_2 == null || (s2 = _2.proxy) == null || (s2 = s2.$emit) == null ? void 0 : s2.bind(_2?.proxy)), y2 = u2;
  t2 || (t2 = `modelValue`), y2 || (y2 = `update:${t2.toString()}`);
  let b2 = (e3) => c2 ? typeof c2 == `function` ? c2(e3) : le(e3) : e3, x2 = () => D(e2[t2]) ? b2(e2[t2]) : p2, S2 = (e3) => {
    h2 ? h2(e3) && v2(y2, e3) : v2(y2, e3);
  };
  if (l2) {
    let n3 = g(x2()), r3 = false;
    return i(() => e2[t2], (e3) => {
      r3 || (r3 = true, n3.value = b2(e3), m(() => r3 = false));
    }), i(n3, (n4) => {
      !r3 && (n4 !== e2[t2] || f2) && S2(n4);
    }, { deep: f2 }), n3;
  } else return d({ get() {
    return x2();
  }, set(e3) {
    S2(e3);
  } });
}
export {
  oe as _,
  ae as a,
  Ee as b,
  W as c,
  _e as d,
  L as f,
  Te as g,
  we as h,
  F as i,
  Z as l,
  R as m,
  ee as n,
  I as o,
  xe as p,
  te as r,
  V as s,
  ce as t,
  ge as u,
  Q as v,
  X as y
};
