import { n as e, t } from "./dist-Bnj2Qb5M.js";
import { Cn as n, H as r, Ht as i, J as a, Tn as o, an as s, cn as c, fn as l, g as u, gn as d, in as f, pn as p, tt as m, un as h, vn as g } from "./runtime-core.esm-bundler-Twwq1XF8.js";
import { y as _ } from "./dist-ChpmCc7n.js";
import { n as v } from "./index.browser-Du-ZzVpY.js";
e();
var y = typeof window < `u`, b, x = (e2) => b = e2, S = /* @__PURE__ */ Symbol();
function C(e2) {
  return e2 && typeof e2 == `object` && Object.prototype.toString.call(e2) === `[object Object]` && typeof e2.toJSON != `function`;
}
var w = typeof window == `object` && window.window === window ? window : typeof self == `object` && self.self === self ? self : typeof t == `object` && t.global === t ? t : typeof globalThis == `object` ? globalThis : { HTMLElement: null };
function T(e2, { autoBom: t2 = false } = {}) {
  return t2 && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e2.type) ? new Blob([`\uFEFF`, e2], { type: e2.type }) : e2;
}
function E(e2, t2, n2) {
  let r2 = new XMLHttpRequest();
  r2.open(`GET`, e2), r2.responseType = `blob`, r2.onload = function() {
    j(r2.response, t2, n2);
  }, r2.onerror = function() {
    console.error(`could not download file`);
  }, r2.send();
}
function D(e2) {
  let t2 = new XMLHttpRequest();
  t2.open(`HEAD`, e2, false);
  try {
    t2.send();
  } catch {
  }
  return t2.status >= 200 && t2.status <= 299;
}
function O(e2) {
  try {
    e2.dispatchEvent(new MouseEvent(`click`));
  } catch {
    let t2 = new MouseEvent(`click`, { bubbles: true, cancelable: true, view: window, detail: 0, screenX: 80, screenY: 20, clientX: 80, clientY: 20, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, button: 0, relatedTarget: null });
    e2.dispatchEvent(t2);
  }
}
var k = typeof navigator == `object` ? navigator : { userAgent: `` }, A = /Macintosh/.test(k.userAgent) && /AppleWebKit/.test(k.userAgent) && !/Safari/.test(k.userAgent), j = y ? typeof HTMLAnchorElement < `u` && `download` in HTMLAnchorElement.prototype && !A ? M : `msSaveOrOpenBlob` in k ? N : P : () => {
};
function M(e2, t2 = `download`, n2) {
  let r2 = document.createElement(`a`);
  r2.download = t2, r2.rel = `noopener`, typeof e2 == `string` ? (r2.href = e2, r2.origin === location.origin ? O(r2) : D(r2.href) ? E(e2, t2, n2) : (r2.target = `_blank`, O(r2))) : (r2.href = URL.createObjectURL(e2), setTimeout(function() {
    URL.revokeObjectURL(r2.href);
  }, 4e4), setTimeout(function() {
    O(r2);
  }, 0));
}
function N(e2, t2 = `download`, n2) {
  if (typeof e2 == `string`) if (D(e2)) E(e2, t2, n2);
  else {
    let t3 = document.createElement(`a`);
    t3.href = e2, t3.target = `_blank`, setTimeout(function() {
      O(t3);
    });
  }
  else navigator.msSaveOrOpenBlob(T(e2, n2), t2);
}
function P(e2, t2, n2, r2) {
  if (r2 || (r2 = open(``, `_blank`)), r2 && (r2.document.title = r2.document.body.innerText = `downloading...`), typeof e2 == `string`) return E(e2, t2, n2);
  let i2 = e2.type === `application/octet-stream`, a2 = /constructor/i.test(String(w.HTMLElement)) || `safari` in w, o2 = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((o2 || i2 && a2 || A) && typeof FileReader < `u`) {
    let t3 = new FileReader();
    t3.onloadend = function() {
      let e3 = t3.result;
      if (typeof e3 != `string`) throw r2 = null, Error(`Wrong reader.result type`);
      e3 = o2 ? e3 : e3.replace(/^data:[^;]*;/, `data:attachment/file;`), r2 ? r2.location.href = e3 : location.assign(e3), r2 = null;
    }, t3.readAsDataURL(e2);
  } else {
    let t3 = URL.createObjectURL(e2);
    r2 ? r2.location.assign(t3) : location.href = t3, r2 = null, setTimeout(function() {
      URL.revokeObjectURL(t3);
    }, 4e4);
  }
}
var { assign: F } = Object;
function I() {
  let e2 = f(true), t2 = e2.run(() => g({})), n2 = [], r2 = [], i2 = l({ install(e3) {
    x(i2), i2._a = e3, e3.provide(S, i2), e3.config.globalProperties.$pinia = i2, r2.forEach((e4) => n2.push(e4)), r2 = [];
  }, use(e3) {
    return this._a ? n2.push(e3) : r2.push(e3), this;
  }, _p: n2, _a: null, _e: e2, _s: /* @__PURE__ */ new Map(), state: t2 });
  return i2;
}
var L = () => {
};
function R(e2, t2, n2, r2 = L) {
  e2.add(t2);
  let i2 = () => {
    e2.delete(t2) && r2();
  };
  return !n2 && s() && p(i2), i2;
}
function z(e2, ...t2) {
  e2.forEach((e3) => {
    e3(...t2);
  });
}
var B = (e2) => e2(), V = /* @__PURE__ */ Symbol(), H = /* @__PURE__ */ Symbol();
function U(e2, t2) {
  e2 instanceof Map && t2 instanceof Map ? t2.forEach((t3, n2) => e2.set(n2, t3)) : e2 instanceof Set && t2 instanceof Set && t2.forEach(e2.add, e2);
  for (let n2 in t2) {
    if (!Object.hasOwn(t2, n2)) continue;
    let r2 = t2[n2], i2 = e2[n2];
    C(i2) && C(r2) && Object.hasOwn(e2, n2) && !h(r2) && !c(r2) ? e2[n2] = U(i2, r2) : e2[n2] = r2;
  }
  return e2;
}
var W = /* @__PURE__ */ Symbol();
function G(e2) {
  return !e2 || typeof e2 != `object` || !Object.hasOwn(e2, W);
}
var { assign: K } = Object;
function q(e2) {
  return !!(h(e2) && e2.effect);
}
function J(e2, t2, n2, r2) {
  let { state: i2, actions: a2, getters: s2 } = t2, c2 = n2.state.value[e2], d2;
  function f2() {
    return c2 || (n2.state.value[e2] = i2 ? i2() : {}), K(o(n2.state.value[e2]), a2, Object.keys(s2 || {}).reduce((t3, r3) => (t3[r3] = l(u(() => {
      x(n2);
      let t4 = n2._s.get(e2);
      return s2[r3].call(t4, t4);
    })), t3), {}));
  }
  return d2 = Y(e2, f2, t2, n2, r2, true), d2;
}
function Y(e2, t2, r2 = {}, a2, o2, s2) {
  let l2, u2 = K({ actions: {} }, r2), p2 = { deep: true }, g2, _2, v2 = /* @__PURE__ */ new Set(), y2 = /* @__PURE__ */ new Set(), b2 = a2.state.value[e2];
  !s2 && !b2 && (a2.state.value[e2] = {});
  let S2;
  function C2(t3) {
    let n2;
    g2 = _2 = false, typeof t3 == `function` ? (t3(a2.state.value[e2]), n2 = { type: `patch function`, storeId: e2, events: void 0 }) : (U(a2.state.value[e2], t3), n2 = { type: `patch object`, payload: t3, storeId: e2, events: void 0 });
    let r3 = S2 = /* @__PURE__ */ Symbol();
    m().then(() => {
      S2 === r3 && (g2 = true);
    }), _2 = true, z(v2, n2, a2.state.value[e2]);
  }
  let w2 = s2 ? function() {
    let { state: e3 } = r2, t3 = e3 ? e3() : {};
    this.$patch((e4) => {
      K(e4, t3);
    });
  } : L;
  function T2() {
    l2.stop(), v2.clear(), y2.clear(), a2._s.delete(e2);
  }
  let E2 = (t3, n2 = ``) => {
    if (V in t3) return t3[H] = n2, t3;
    let r3 = function() {
      x(a2);
      let n3 = Array.from(arguments), i2 = /* @__PURE__ */ new Set(), o3 = /* @__PURE__ */ new Set();
      function s3(e3) {
        i2.add(e3);
      }
      function c2(e3) {
        o3.add(e3);
      }
      z(y2, { args: n3, name: r3[H], store: D2, after: s3, onError: c2 });
      let l3;
      try {
        l3 = t3.apply(this && this.$id === e2 ? this : D2, n3);
      } catch (e3) {
        throw z(o3, e3), e3;
      }
      return l3 instanceof Promise ? l3.then((e3) => (z(i2, e3), e3)).catch((e3) => (z(o3, e3), Promise.reject(e3))) : (z(i2, l3), l3);
    };
    return r3[V] = true, r3[H] = n2, r3;
  }, D2 = d({ _p: a2, $id: e2, $onAction: R.bind(null, y2), $patch: C2, $reset: w2, $subscribe(t3, n2 = {}) {
    if (v2.has(t3)) return L;
    let r3 = R(v2, t3, n2.detached, () => o3()), o3 = l2.run(() => i(() => a2.state.value[e2], (r4) => {
      (n2.flush === `sync` ? _2 : g2) && t3({ storeId: e2, type: `direct`, events: void 0 }, r4);
    }, K({}, p2, n2)));
    return r3;
  }, $dispose: T2 });
  a2._s.set(e2, D2);
  let O2 = (a2._a && a2._a.runWithContext || B)(() => a2._e.run(() => (l2 = f()).run(() => t2({ action: E2 }))));
  for (let t3 in O2) {
    let n2 = O2[t3];
    h(n2) && !q(n2) || c(n2) ? s2 || (b2 && G(n2) && (h(n2) ? n2.value = b2[t3] : U(n2, b2[t3])), a2.state.value[e2][t3] = n2) : typeof n2 == `function` && (O2[t3] = E2(n2, t3), u2.actions[t3] = n2);
  }
  return K(D2, O2), K(n(D2), O2), Object.defineProperty(D2, "$state", { get: () => a2.state.value[e2], set: (e3) => {
    C2((t3) => {
      K(t3, e3);
    });
  } }), a2._p.forEach((e3) => {
    let t3 = l2.run(() => e3({ store: D2, app: a2._a, pinia: a2, options: u2 }));
    K(D2, t3);
  }), b2 && s2 && r2.hydrate && r2.hydrate(D2.$state, b2), g2 = true, _2 = true, D2;
}
function X(e2, t2, n2) {
  let i2, o2 = typeof t2 == `function`;
  i2 = o2 ? n2 : t2;
  function s2(n3, s3) {
    let c2 = r();
    return n3 || (n3 = c2 ? a(S, null) : null), n3 && x(n3), n3 = b, n3._s.has(e2) || (o2 ? Y(e2, t2, i2, n3) : J(e2, i2, n3)), n3._s.get(e2);
  }
  return s2.$id = e2, s2;
}
function Z() {
  let e2 = { id: `JqhEkI6VK0`, timestamp: 1742407548572, type: `debug`, message: `Thank you for using WindPress! Join us on the Facebook Group: <a href="https://wind.press/go/facebook" target="_blank" class="underline">https://wind.press/go/facebook</a>`, options: { raw: true } }, t2 = _(`windpress.dashboard.store.logs`, [e2]);
  function n2(e3) {
    let n3 = v(10);
    return t2.value.push({ id: n3, timestamp: Date.now(), ...e3 }), n3;
  }
  function r2(e3, n3) {
    let r3 = t2.value.find((t3) => t3.id === e3);
    r3 && Object.assign(r3, n3);
  }
  function i2(e3, n3 = `id`) {
    switch (n3) {
      case `message`:
        t2.value = t2.value.filter((t3) => !t3.message.includes(e3));
        break;
      case `type`:
        t2.value = t2.value.filter((t3) => t3.type !== e3);
        break;
      case `group`:
        t2.value = t2.value.filter((t3) => t3.group !== e3);
        break;
      default:
        t2.value = t2.value.filter((t3) => t3.id !== e3);
        break;
    }
  }
  function a2() {
    t2.value = [], t2.value.push(e2);
  }
  return { logs: t2, add: n2, update: r2, remove: i2, clear: a2 };
}
var Q = X(`log`, () => ({ ...Z() }));
export {
  X as i,
  Q as n,
  I as r,
  Z as t
};
