import { B as e, Ht as t, J as n, On as r, ft as i, g as a, gn as o, gt as s, k as c, nt as l, ot as u, tt as d, vn as f, xn as ee, yn as p } from "./runtime-core.esm-bundler-Ci9kEgM7.js";
var m = typeof document < `u`;
function h(e2) {
  return typeof e2 == `object` || `displayName` in e2 || `props` in e2 || `__vccOpts` in e2;
}
function g(e2) {
  return e2.__esModule || e2[Symbol.toStringTag] === `Module` || e2.default && h(e2.default);
}
var _ = Object.assign;
function te(e2, t2) {
  let n2 = {};
  for (let r2 in t2) {
    let i2 = t2[r2];
    n2[r2] = y(i2) ? i2.map(e2) : e2(i2);
  }
  return n2;
}
var v = () => {
}, y = Array.isArray;
function b(e2, t2) {
  let n2 = {};
  for (let r2 in e2) n2[r2] = r2 in t2 ? t2[r2] : e2[r2];
  return n2;
}
var x = /* @__PURE__ */ Symbol(``);
function S(e2, t2) {
  return _(Error(), { type: e2, [x]: true }, t2);
}
function C(e2, t2) {
  return e2 instanceof Error && x in e2 && (t2 == null || !!(e2.type & t2));
}
var ne = /* @__PURE__ */ Symbol(``), re = /* @__PURE__ */ Symbol(``), w = /* @__PURE__ */ Symbol(``), ie = /* @__PURE__ */ Symbol(``), T = /* @__PURE__ */ Symbol(``);
function E() {
  return n(w);
}
function D(e2) {
  return n(ie);
}
var O = /#/g, k = /&/g, ae = /\//g, A = /=/g, j = /\?/g, M = /\+/g, N = /%5B/g, P = /%5D/g, F = /%5E/g, I = /%60/g, L = /%7B/g, oe = /%7C/g, R = /%7D/g, se = /%20/g;
function z(e2) {
  return e2 == null ? `` : encodeURI(`` + e2).replace(oe, `|`).replace(N, `[`).replace(P, `]`);
}
function ce(e2) {
  return z(e2).replace(L, `{`).replace(R, `}`).replace(F, `^`);
}
function B(e2) {
  return z(e2).replace(M, `%2B`).replace(se, `+`).replace(O, `%23`).replace(k, `%26`).replace(I, "`").replace(L, `{`).replace(R, `}`).replace(F, `^`);
}
function le(e2) {
  return B(e2).replace(A, `%3D`);
}
function V(e2) {
  return z(e2).replace(O, `%23`).replace(j, `%3F`);
}
function ue(e2) {
  return V(e2).replace(ae, `%2F`);
}
function H(e2) {
  if (e2 == null) return null;
  try {
    return decodeURIComponent(`` + e2);
  } catch {
  }
  return `` + e2;
}
var U = /\/$/, W = (e2) => e2.replace(U, ``);
function G(e2, t2, n2 = `/`) {
  let r2, i2 = {}, a2 = ``, o2 = ``, s2 = t2.indexOf(`#`), c2 = t2.indexOf(`?`);
  return c2 = s2 >= 0 && c2 > s2 ? -1 : c2, c2 >= 0 && (r2 = t2.slice(0, c2), a2 = t2.slice(c2, s2 > 0 ? s2 : t2.length), i2 = e2(a2.slice(1))), s2 >= 0 && (r2 || (r2 = t2.slice(0, s2)), o2 = t2.slice(s2, t2.length)), r2 = me(r2 ?? t2, n2), { fullPath: r2 + a2 + o2, path: r2, query: i2, hash: H(o2) };
}
function de(e2, t2) {
  let n2 = t2.query ? e2(t2.query) : ``;
  return t2.path + (n2 && `?`) + n2 + (t2.hash || ``);
}
function K(e2, t2) {
  return !t2 || !e2.toLowerCase().startsWith(t2.toLowerCase()) ? e2 : e2.slice(t2.length) || `/`;
}
function fe(e2, t2, n2) {
  let r2 = t2.matched.length - 1, i2 = n2.matched.length - 1;
  return r2 > -1 && r2 === i2 && q(t2.matched[r2], n2.matched[i2]) && J(t2.params, n2.params) && e2(t2.query) === e2(n2.query) && t2.hash === n2.hash;
}
function q(e2, t2) {
  return (e2.aliasOf || e2) === (t2.aliasOf || t2);
}
function J(e2, t2) {
  if (Object.keys(e2).length !== Object.keys(t2).length) return false;
  for (var n2 in e2) if (!Y(e2[n2], t2[n2])) return false;
  return true;
}
function Y(e2, t2) {
  return y(e2) ? pe(e2, t2) : y(t2) ? pe(t2, e2) : (e2 && e2.valueOf()) === (t2 && t2.valueOf());
}
function pe(e2, t2) {
  return y(t2) ? e2.length === t2.length && e2.every((e3, n2) => e3 === t2[n2]) : e2.length === 1 && e2[0] === t2;
}
function me(e2, t2) {
  if (e2.startsWith(`/`)) return e2;
  if (!e2) return t2;
  let n2 = t2.split(`/`), r2 = e2.split(`/`), i2 = r2[r2.length - 1];
  (i2 === `..` || i2 === `.`) && r2.push(``);
  let a2 = n2.length - 1, o2, s2;
  for (o2 = 0; o2 < r2.length; o2++) if (s2 = r2[o2], s2 !== `.`) if (s2 === `..`) a2 > 1 && a2--;
  else break;
  return n2.slice(0, a2).join(`/`) + `/` + r2.slice(o2).join(`/`);
}
var X = { path: `/`, name: void 0, params: {}, query: {}, hash: ``, fullPath: `/`, matched: [], meta: {}, redirectedFrom: void 0 };
function he(e2) {
  if (!e2) if (m) {
    let t2 = document.querySelector(`base`);
    e2 = t2 && t2.getAttribute(`href`) || `/`, e2 = e2.replace(/^\w+:\/\/[^/]+/, ``);
  } else e2 = `/`;
  return e2[0] !== `/` && e2[0] !== `#` && (e2 = `/` + e2), W(e2);
}
var ge = /^[^#]+#/;
function _e(e2, t2) {
  return e2.replace(ge, `#`) + t2;
}
function ve(e2, t2) {
  let n2 = document.documentElement.getBoundingClientRect(), r2 = e2.getBoundingClientRect();
  return { behavior: t2.behavior, left: r2.left - n2.left - (t2.left || 0), top: r2.top - n2.top - (t2.top || 0) };
}
var Z = () => ({ left: window.scrollX, top: window.scrollY });
function ye(e2) {
  let t2;
  if (`el` in e2) {
    let n2 = e2.el, r2 = typeof n2 == `string` && n2.startsWith(`#`), i2 = typeof n2 == `string` ? r2 ? document.getElementById(n2.slice(1)) : document.querySelector(n2) : n2;
    if (!i2) return;
    t2 = ve(i2, e2);
  } else t2 = e2;
  `scrollBehavior` in document.documentElement.style ? window.scrollTo(t2) : window.scrollTo(t2.left == null ? window.scrollX : t2.left, t2.top == null ? window.scrollY : t2.top);
}
function be(e2, t2) {
  return (history.state ? history.state.position - t2 : -1) + e2;
}
var xe = /* @__PURE__ */ new Map();
function Se(e2, t2) {
  xe.set(e2, t2);
}
function Ce(e2) {
  let t2 = xe.get(e2);
  return xe.delete(e2), t2;
}
function we(e2) {
  return typeof e2 == `string` || e2 && typeof e2 == `object`;
}
function Te(e2) {
  return typeof e2 == `string` || typeof e2 == `symbol`;
}
function Ee(e2) {
  let t2 = {};
  if (e2 === `` || e2 === `?`) return t2;
  let n2 = (e2[0] === `?` ? e2.slice(1) : e2).split(`&`);
  for (let e3 = 0; e3 < n2.length; ++e3) {
    let r2 = n2[e3].replace(M, ` `), i2 = r2.indexOf(`=`), a2 = H(i2 < 0 ? r2 : r2.slice(0, i2)), o2 = i2 < 0 ? null : H(r2.slice(i2 + 1));
    if (a2 in t2) {
      let e4 = t2[a2];
      y(e4) || (e4 = t2[a2] = [e4]), e4.push(o2);
    } else t2[a2] = o2;
  }
  return t2;
}
function De(e2) {
  let t2 = ``;
  for (let n2 in e2) {
    let r2 = e2[n2];
    if (n2 = le(n2), r2 == null) {
      r2 !== void 0 && (t2 += (t2.length ? `&` : ``) + n2);
      continue;
    }
    (y(r2) ? r2.map((e3) => e3 && B(e3)) : [r2 && B(r2)]).forEach((e3) => {
      e3 !== void 0 && (t2 += (t2.length ? `&` : ``) + n2, e3 != null && (t2 += `=` + e3));
    });
  }
  return t2;
}
function Oe(e2) {
  let t2 = {};
  for (let n2 in e2) {
    let r2 = e2[n2];
    r2 !== void 0 && (t2[n2] = y(r2) ? r2.map((e3) => e3 == null ? null : `` + e3) : r2 == null ? r2 : `` + r2);
  }
  return t2;
}
function Q() {
  let e2 = [];
  function t2(t3) {
    return e2.push(t3), () => {
      let n3 = e2.indexOf(t3);
      n3 > -1 && e2.splice(n3, 1);
    };
  }
  function n2() {
    e2 = [];
  }
  return { add: t2, list: () => e2.slice(), reset: n2 };
}
function ke(e2, t2, n2) {
  let r2 = e2.value;
  if (!r2) return;
  let a2 = r2, o2 = () => {
    a2[t2].delete(n2);
  };
  i(o2), u(o2), l(() => {
    let r3 = e2.value;
    r3 && (a2 = r3), a2[t2].add(n2);
  }), a2[t2].add(n2);
}
function Ae(e2) {
  ke(n(ne, {}), `leaveGuards`, e2);
}
function $(e2, t2, n2, r2, i2, a2 = (e3) => e3()) {
  let o2 = r2 && (r2.enterCallbacks[i2] = r2.enterCallbacks[i2] || []);
  return () => new Promise((s2, c2) => {
    let l2 = (e3) => {
      e3 === false ? c2(S(4, { from: n2, to: t2 })) : e3 instanceof Error ? c2(e3) : we(e3) ? c2(S(2, { from: t2, to: e3 })) : (o2 && r2.enterCallbacks[i2] === o2 && typeof e3 == `function` && o2.push(e3), s2());
    }, u2 = a2(() => e2.call(r2 && r2.instances[i2], t2, n2, l2)), d2 = Promise.resolve(u2);
    e2.length < 3 && (d2 = d2.then(l2)), d2.catch((e3) => c2(e3));
  });
}
function je(e2, t2, n2, r2, i2 = (e3) => e3()) {
  let a2 = [];
  for (let o2 of e2) for (let e3 in o2.components) {
    let s2 = o2.components[e3];
    if (!(t2 !== `beforeRouteEnter` && !o2.instances[e3])) if (h(s2)) {
      let c2 = (s2.__vccOpts || s2)[t2];
      c2 && a2.push($(c2, n2, r2, o2, e3, i2));
    } else {
      let c2 = s2();
      a2.push(() => c2.then((a3) => {
        if (!a3) throw Error(`Couldn't resolve component "${e3}" at "${o2.path}"`);
        let s3 = g(a3) ? a3.default : a3;
        o2.mods[e3] = a3, o2.components[e3] = s3;
        let c3 = (s3.__vccOpts || s3)[t2];
        return c3 && $(c3, n2, r2, o2, e3, i2)();
      }));
    }
  }
  return a2;
}
function Me(e2, t2) {
  let n2 = [], r2 = [], i2 = [], a2 = Math.max(t2.matched.length, e2.matched.length);
  for (let o2 = 0; o2 < a2; o2++) {
    let a3 = t2.matched[o2];
    a3 && (e2.matched.find((e3) => q(e3, a3)) ? r2.push(a3) : n2.push(a3));
    let s2 = e2.matched[o2];
    s2 && (t2.matched.find((e3) => q(e3, s2)) || i2.push(s2));
  }
  return [n2, r2, i2];
}
var Ne = () => location.protocol + `//` + location.host;
function Pe(e2, t2) {
  let { pathname: n2, search: r2, hash: i2 } = t2, a2 = e2.indexOf(`#`);
  if (a2 > -1) {
    let t3 = i2.includes(e2.slice(a2)) ? e2.slice(a2).length : 1, n3 = i2.slice(t3);
    return n3[0] !== `/` && (n3 = `/` + n3), K(n3, ``);
  }
  return K(n2, e2) + r2 + i2;
}
function Fe(e2, t2, n2, r2) {
  let i2 = [], a2 = [], o2 = null, s2 = ({ state: a3 }) => {
    let s3 = Pe(e2, location), c3 = n2.value, l3 = t2.value, u3 = 0;
    if (a3) {
      if (n2.value = s3, t2.value = a3, o2 && o2 === c3) {
        o2 = null;
        return;
      }
      u3 = l3 ? a3.position - l3.position : 0;
    } else r2(s3);
    i2.forEach((e3) => {
      e3(n2.value, c3, { delta: u3, type: `pop`, direction: u3 ? u3 > 0 ? `forward` : `back` : `` });
    });
  };
  function c2() {
    o2 = n2.value;
  }
  function l2(e3) {
    i2.push(e3);
    let t3 = () => {
      let t4 = i2.indexOf(e3);
      t4 > -1 && i2.splice(t4, 1);
    };
    return a2.push(t3), t3;
  }
  function u2() {
    if (document.visibilityState === `hidden`) {
      let { history: e3 } = window;
      if (!e3.state) return;
      e3.replaceState(_({}, e3.state, { scroll: Z() }), ``);
    }
  }
  function d2() {
    for (let e3 of a2) e3();
    a2 = [], window.removeEventListener(`popstate`, s2), window.removeEventListener(`pagehide`, u2), document.removeEventListener(`visibilitychange`, u2);
  }
  return window.addEventListener(`popstate`, s2), window.addEventListener(`pagehide`, u2), document.addEventListener(`visibilitychange`, u2), { pauseListeners: c2, listen: l2, destroy: d2 };
}
function Ie(e2, t2, n2, r2 = false, i2 = false) {
  return { back: e2, current: t2, forward: n2, replaced: r2, position: window.history.length, scroll: i2 ? Z() : null };
}
function Le(e2) {
  let { history: t2, location: n2 } = window, r2 = { value: Pe(e2, n2) }, i2 = { value: t2.state };
  i2.value || a2(r2.value, { back: null, current: r2.value, forward: null, position: t2.length - 1, replaced: true, scroll: null }, true);
  function a2(r3, a3, o3) {
    let s3 = e2.indexOf(`#`), c2 = s3 > -1 ? (n2.host && document.querySelector(`base`) ? e2 : e2.slice(s3)) + r3 : Ne() + e2 + r3;
    try {
      t2[o3 ? `replaceState` : `pushState`](a3, ``, c2), i2.value = a3;
    } catch (e3) {
      console.error(e3), n2[o3 ? `replace` : `assign`](c2);
    }
  }
  function o2(e3, n3) {
    a2(e3, _({}, t2.state, Ie(i2.value.back, e3, i2.value.forward, true), n3, { position: i2.value.position }), true), r2.value = e3;
  }
  function s2(e3, n3) {
    let o3 = _({}, i2.value, t2.state, { forward: e3, scroll: Z() });
    a2(o3.current, o3, true), a2(e3, _({}, Ie(r2.value, e3, null), { position: o3.position + 1 }, n3), false), r2.value = e3;
  }
  return { location: r2, state: i2, push: s2, replace: o2 };
}
function Re(e2) {
  e2 = he(e2);
  let t2 = Le(e2), n2 = Fe(e2, t2.state, t2.location, t2.replace);
  function r2(e3, t3 = true) {
    t3 || n2.pauseListeners(), history.go(e3);
  }
  let i2 = _({ location: ``, base: e2, go: r2, createHref: _e.bind(null, e2) }, t2, n2);
  return Object.defineProperty(i2, "location", { enumerable: true, get: () => t2.location.value }), Object.defineProperty(i2, "state", { enumerable: true, get: () => t2.state.value }), i2;
}
var ze = { type: 0, value: `` }, Be = /[a-zA-Z0-9_]/;
function Ve(e2) {
  if (!e2) return [[]];
  if (e2 === `/`) return [[ze]];
  if (!e2.startsWith(`/`)) throw Error(`Invalid path "${e2}"`);
  function t2(e3) {
    throw Error(`ERR (${n2})/"${l2}": ${e3}`);
  }
  let n2 = 0, r2 = n2, i2 = [], a2;
  function o2() {
    a2 && i2.push(a2), a2 = [];
  }
  let s2 = 0, c2, l2 = ``, u2 = ``;
  function d2() {
    l2 && (l2 = (n2 === 0 ? a2.push({ type: 0, value: l2 }) : n2 === 1 || n2 === 2 || n2 === 3 ? (a2.length > 1 && (c2 === `*` || c2 === `+`) && t2(`A repeatable param (${l2}) must be alone in its segment. eg: '/:ids+.`), a2.push({ type: 1, value: l2, regexp: u2, repeatable: c2 === `*` || c2 === `+`, optional: c2 === `*` || c2 === `?` })) : t2(`Invalid state to consume buffer`), ``));
  }
  function f2() {
    l2 += c2;
  }
  for (; s2 < e2.length; ) switch (c2 = e2[s2++], n2) {
    case 0:
      c2 === `\\` ? (r2 = n2, n2 = 4) : c2 === `/` ? (l2 && d2(), o2()) : c2 === `:` ? (d2(), n2 = 1) : f2();
      break;
    case 4:
      f2(), n2 = r2;
      break;
    case 1:
      c2 === `(` ? n2 = 2 : Be.test(c2) ? f2() : (d2(), n2 = 0, c2 !== `*` && c2 !== `?` && c2 !== `+` && s2--);
      break;
    case 2:
      c2 === `)` ? u2[u2.length - 1] == `\\` ? u2 = u2.slice(0, -1) + c2 : n2 = 3 : u2 += c2;
      break;
    case 3:
      d2(), n2 = 0, c2 !== `*` && c2 !== `?` && c2 !== `+` && s2--, u2 = ``;
      break;
    default:
      t2(`Unknown state`);
      break;
  }
  return n2 === 2 && t2(`Unfinished custom RegExp for param "${l2}"`), d2(), o2(), i2;
}
var He = `[^/]+?`, Ue = { sensitive: false, strict: false, start: true, end: true }, We = /[.+*?^${}()[\]/\\]/g;
function Ge(e2, t2) {
  let n2 = _({}, Ue, t2), r2 = [], i2 = n2.start ? `^` : ``, a2 = [];
  for (let t3 of e2) {
    let e3 = t3.length ? [] : [90];
    n2.strict && !t3.length && (i2 += `/`);
    for (let r3 = 0; r3 < t3.length; r3++) {
      let o3 = t3[r3], s3 = 40 + (n2.sensitive ? 0.25 : 0);
      if (o3.type === 0) r3 || (i2 += `/`), i2 += o3.value.replace(We, `\\$&`), s3 += 40;
      else if (o3.type === 1) {
        let { value: e4, repeatable: n3, optional: c3, regexp: l2 } = o3;
        a2.push({ name: e4, repeatable: n3, optional: c3 });
        let u2 = l2 || He;
        if (u2 !== He) {
          s3 += 10;
          try {
            RegExp(`(${u2})`);
          } catch (t4) {
            throw Error(`Invalid custom RegExp for param "${e4}" (${u2}): ` + t4.message);
          }
        }
        let d2 = n3 ? `((?:${u2})(?:/(?:${u2}))*)` : `(${u2})`;
        r3 || (d2 = c3 && t3.length < 2 ? `(?:/${d2})` : `/` + d2), c3 && (d2 += `?`), i2 += d2, s3 += 20, c3 && (s3 += -8), n3 && (s3 += -20), u2 === `.*` && (s3 += -50);
      }
      e3.push(s3);
    }
    r2.push(e3);
  }
  if (n2.strict && n2.end) {
    let e3 = r2.length - 1;
    r2[e3][r2[e3].length - 1] += 0.7000000000000001;
  }
  n2.strict || (i2 += `/?`), n2.end ? i2 += `$` : n2.strict && !i2.endsWith(`/`) && (i2 += `(?:/|$)`);
  let o2 = new RegExp(i2, n2.sensitive ? `` : `i`);
  function s2(e3) {
    let t3 = e3.match(o2), n3 = {};
    if (!t3) return null;
    for (let e4 = 1; e4 < t3.length; e4++) {
      let r3 = t3[e4] || ``, i3 = a2[e4 - 1];
      n3[i3.name] = r3 && i3.repeatable ? r3.split(`/`) : r3;
    }
    return n3;
  }
  function c2(t3) {
    let n3 = ``, r3 = false;
    for (let i3 of e2) {
      (!r3 || !n3.endsWith(`/`)) && (n3 += `/`), r3 = false;
      for (let e3 of i3) if (e3.type === 0) n3 += e3.value;
      else if (e3.type === 1) {
        let { value: a3, repeatable: o3, optional: s3 } = e3, c3 = a3 in t3 ? t3[a3] : ``;
        if (y(c3) && !o3) throw Error(`Provided param "${a3}" is an array but it is not repeatable (* or + modifiers)`);
        let l2 = y(c3) ? c3.join(`/`) : c3;
        if (!l2) if (s3) i3.length < 2 && (n3.endsWith(`/`) ? n3 = n3.slice(0, -1) : r3 = true);
        else throw Error(`Missing required param "${a3}"`);
        n3 += l2;
      }
    }
    return n3 || `/`;
  }
  return { re: o2, score: r2, keys: a2, parse: s2, stringify: c2 };
}
function Ke(e2, t2) {
  let n2 = 0;
  for (; n2 < e2.length && n2 < t2.length; ) {
    let r2 = t2[n2] - e2[n2];
    if (r2) return r2;
    n2++;
  }
  return e2.length < t2.length ? e2.length === 1 && e2[0] === 80 ? -1 : 1 : e2.length > t2.length ? t2.length === 1 && t2[0] === 80 ? 1 : -1 : 0;
}
function qe(e2, t2) {
  let n2 = 0, r2 = e2.score, i2 = t2.score;
  for (; n2 < r2.length && n2 < i2.length; ) {
    let e3 = Ke(r2[n2], i2[n2]);
    if (e3) return e3;
    n2++;
  }
  if (Math.abs(i2.length - r2.length) === 1) {
    if (Je(r2)) return 1;
    if (Je(i2)) return -1;
  }
  return i2.length - r2.length;
}
function Je(e2) {
  let t2 = e2[e2.length - 1];
  return e2.length > 0 && t2[t2.length - 1] < 0;
}
var Ye = { strict: false, end: true, sensitive: false };
function Xe(e2, t2, n2) {
  let r2 = _(Ge(Ve(e2.path), n2), { record: e2, parent: t2, children: [], alias: [] });
  return t2 && !r2.record.aliasOf == !t2.record.aliasOf && t2.children.push(r2), r2;
}
function Ze(e2, t2) {
  let n2 = [], r2 = /* @__PURE__ */ new Map();
  t2 = b(Ye, t2);
  function i2(e3) {
    return r2.get(e3);
  }
  function a2(e3, n3, r3) {
    let i3 = !r3, s3 = $e(e3);
    s3.aliasOf = r3 && r3.record;
    let l3 = b(t2, e3), u3 = [s3];
    if (`alias` in e3) {
      let t3 = typeof e3.alias == `string` ? [e3.alias] : e3.alias;
      for (let e4 of t3) u3.push($e(_({}, s3, { components: r3 ? r3.record.components : s3.components, path: e4, aliasOf: r3 ? r3.record : s3 })));
    }
    let d2, f2;
    for (let t3 of u3) {
      let { path: u4 } = t3;
      if (n3 && u4[0] !== `/`) {
        let e4 = n3.record.path, r4 = e4[e4.length - 1] === `/` ? `` : `/`;
        t3.path = n3.record.path + (u4 && r4 + u4);
      }
      if (d2 = Xe(t3, n3, l3), r3 ? r3.alias.push(d2) : (f2 || (f2 = d2), f2 !== d2 && f2.alias.push(d2), i3 && e3.name && !tt(d2) && o2(e3.name)), at(d2) && c2(d2), s3.children) {
        let e4 = s3.children;
        for (let t4 = 0; t4 < e4.length; t4++) a2(e4[t4], d2, r3 && r3.children[t4]);
      }
      r3 || (r3 = d2);
    }
    return f2 ? () => {
      o2(f2);
    } : v;
  }
  function o2(e3) {
    if (Te(e3)) {
      let t3 = r2.get(e3);
      t3 && (r2.delete(e3), n2.splice(n2.indexOf(t3), 1), t3.children.forEach(o2), t3.alias.forEach(o2));
    } else {
      let t3 = n2.indexOf(e3);
      t3 > -1 && (n2.splice(t3, 1), e3.record.name && r2.delete(e3.record.name), e3.children.forEach(o2), e3.alias.forEach(o2));
    }
  }
  function s2() {
    return n2;
  }
  function c2(e3) {
    let t3 = rt(e3, n2);
    n2.splice(t3, 0, e3), e3.record.name && !tt(e3) && r2.set(e3.record.name, e3);
  }
  function l2(e3, t3) {
    let i3, a3 = {}, o3, s3;
    if (`name` in e3 && e3.name) {
      if (i3 = r2.get(e3.name), !i3) throw S(1, { location: e3 });
      s3 = i3.record.name, a3 = _(Qe(t3.params, i3.keys.filter((e4) => !e4.optional).concat(i3.parent ? i3.parent.keys.filter((e4) => e4.optional) : []).map((e4) => e4.name)), e3.params && Qe(e3.params, i3.keys.map((e4) => e4.name))), o3 = i3.stringify(a3);
    } else if (e3.path != null) o3 = e3.path, i3 = n2.find((e4) => e4.re.test(o3)), i3 && (a3 = i3.parse(o3), s3 = i3.record.name, i3.keys.forEach((e4) => {
      e4.optional && !a3[e4.name] && delete a3[e4.name];
    }));
    else {
      if (i3 = t3.name ? r2.get(t3.name) : n2.find((e4) => e4.re.test(t3.path)), !i3) throw S(1, { location: e3, currentLocation: t3 });
      s3 = i3.record.name, a3 = _({}, t3.params, e3.params), o3 = i3.stringify(a3);
    }
    let c3 = [], l3 = i3;
    for (; l3; ) c3.unshift(l3.record), l3 = l3.parent;
    return { name: s3, path: o3, params: a3, matched: c3, meta: nt(c3) };
  }
  e2.forEach((e3) => a2(e3));
  function u2() {
    n2.length = 0, r2.clear();
  }
  return { addRoute: a2, resolve: l2, removeRoute: o2, clearRoutes: u2, getRoutes: s2, getRecordMatcher: i2 };
}
function Qe(e2, t2) {
  let n2 = {};
  for (let r2 of t2) r2 in e2 && (n2[r2] = e2[r2]);
  return n2;
}
function $e(e2) {
  let t2 = { path: e2.path, redirect: e2.redirect, name: e2.name, meta: e2.meta || {}, aliasOf: e2.aliasOf, beforeEnter: e2.beforeEnter, props: et(e2), children: e2.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: `components` in e2 ? e2.components || null : e2.component && { default: e2.component } };
  return Object.defineProperty(t2, "mods", { value: {} }), t2;
}
function et(e2) {
  let t2 = {}, n2 = e2.props || false;
  if (`component` in e2) t2.default = n2;
  else for (let r2 in e2.components) t2[r2] = typeof n2 == `object` ? n2[r2] : n2;
  return t2;
}
function tt(e2) {
  for (; e2; ) {
    if (e2.record.aliasOf) return true;
    e2 = e2.parent;
  }
  return false;
}
function nt(e2) {
  return e2.reduce((e3, t2) => _(e3, t2.meta), {});
}
function rt(e2, t2) {
  let n2 = 0, r2 = t2.length;
  for (; n2 !== r2; ) {
    let i3 = n2 + r2 >> 1;
    qe(e2, t2[i3]) < 0 ? r2 = i3 : n2 = i3 + 1;
  }
  let i2 = it(e2);
  return i2 && (r2 = t2.lastIndexOf(i2, r2 - 1)), r2;
}
function it(e2) {
  let t2 = e2;
  for (; t2 = t2.parent; ) if (at(t2) && qe(e2, t2) === 0) return t2;
}
function at({ record: e2 }) {
  return !!(e2.name || e2.components && Object.keys(e2.components).length || e2.redirect);
}
function ot(e2) {
  let t2 = n(w), i2 = n(ie), o2 = a(() => {
    let n2 = r(e2.to);
    return t2.resolve(n2);
  }), s2 = a(() => {
    let { matched: e3 } = o2.value, { length: t3 } = e3, n2 = e3[t3 - 1], r2 = i2.matched;
    if (!n2 || !r2.length) return -1;
    let a2 = r2.findIndex(q.bind(null, n2));
    if (a2 > -1) return a2;
    let s3 = dt(e3[t3 - 2]);
    return t3 > 1 && dt(n2) === s3 && r2[r2.length - 1].path !== s3 ? r2.findIndex(q.bind(null, e3[t3 - 2])) : a2;
  }), c2 = a(() => s2.value > -1 && ut(i2.params, o2.value.params)), l2 = a(() => s2.value > -1 && s2.value === i2.matched.length - 1 && J(i2.params, o2.value.params));
  function u2(n2 = {}) {
    if (lt(n2)) {
      let n3 = t2[r(e2.replace) ? `replace` : `push`](r(e2.to)).catch(v);
      return e2.viewTransition && typeof document < `u` && `startViewTransition` in document && document.startViewTransition(() => n3), n3;
    }
    return Promise.resolve();
  }
  return { route: o2, href: a(() => o2.value.href), isActive: c2, isExactActive: l2, navigate: u2 };
}
function st(e2) {
  return e2.length === 1 ? e2[0] : e2;
}
var ct = c({ name: `RouterLink`, compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: `page` }, viewTransition: Boolean }, useLink: ot, setup(t2, { slots: r2 }) {
  let i2 = o(ot(t2)), { options: s2 } = n(w), c2 = a(() => ({ [ft(t2.activeClass, s2.linkActiveClass, `router-link-active`)]: i2.isActive, [ft(t2.exactActiveClass, s2.linkExactActiveClass, `router-link-exact-active`)]: i2.isExactActive }));
  return () => {
    let n2 = r2.default && st(r2.default(i2));
    return t2.custom ? n2 : e(`a`, { "aria-current": i2.isExactActive ? t2.ariaCurrentValue : null, href: i2.href, onClick: i2.navigate, class: c2.value }, n2);
  };
} });
function lt(e2) {
  if (!(e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey) && !e2.defaultPrevented && !(e2.button !== void 0 && e2.button !== 0)) {
    if (e2.currentTarget && e2.currentTarget.getAttribute) {
      let t2 = e2.currentTarget.getAttribute(`target`);
      if (/\b_blank\b/i.test(t2)) return;
    }
    return e2.preventDefault && e2.preventDefault(), true;
  }
}
function ut(e2, t2) {
  for (let n2 in t2) {
    let r2 = t2[n2], i2 = e2[n2];
    if (typeof r2 == `string`) {
      if (r2 !== i2) return false;
    } else if (!y(i2) || i2.length !== r2.length || r2.some((e3, t3) => e3.valueOf() !== i2[t3].valueOf())) return false;
  }
  return true;
}
function dt(e2) {
  return e2 ? e2.aliasOf ? e2.aliasOf.path : e2.path : ``;
}
var ft = (e2, t2, n2) => e2 ?? t2 ?? n2, pt = c({ name: `RouterView`, inheritAttrs: false, props: { name: { type: String, default: `default` }, route: Object }, compatConfig: { MODE: 3 }, setup(i2, { attrs: o2, slots: c2 }) {
  let l2 = n(T), u2 = a(() => i2.route || l2.value), d2 = n(re, 0), ee2 = a(() => {
    let e2 = r(d2), { matched: t2 } = u2.value, n2;
    for (; (n2 = t2[e2]) && !n2.components; ) e2++;
    return e2;
  }), p2 = a(() => u2.value.matched[ee2.value]);
  s(re, a(() => ee2.value + 1)), s(ne, p2), s(T, u2);
  let m2 = f();
  return t(() => [m2.value, p2.value, i2.name], ([e2, t2, n2], [r2, i3, a2]) => {
    t2 && (t2.instances[n2] = e2, i3 && i3 !== t2 && e2 && e2 === r2 && (t2.leaveGuards.size || (t2.leaveGuards = i3.leaveGuards), t2.updateGuards.size || (t2.updateGuards = i3.updateGuards))), e2 && t2 && (!i3 || !q(t2, i3) || !r2) && (t2.enterCallbacks[n2] || []).forEach((t3) => t3(e2));
  }, { flush: `post` }), () => {
    let t2 = u2.value, n2 = i2.name, r2 = p2.value, a2 = r2 && r2.components[n2];
    if (!a2) return mt(c2.default, { Component: a2, route: t2 });
    let s2 = r2.props[n2], l3 = e(a2, _({}, s2 ? s2 === true ? t2.params : typeof s2 == `function` ? s2(t2) : s2 : null, o2, { onVnodeUnmounted: (e2) => {
      e2.component.isUnmounted && (r2.instances[n2] = null);
    }, ref: m2 }));
    return mt(c2.default, { Component: l3, route: t2 }) || l3;
  };
} });
function mt(e2, t2) {
  if (!e2) return null;
  let n2 = e2(t2);
  return n2.length === 1 ? n2[0] : n2;
}
var ht = pt;
function gt(e2) {
  let t2 = Ze(e2.routes, e2), n2 = e2.parseQuery || Ee, i2 = e2.stringifyQuery || De, a2 = e2.history, o2 = Q(), s2 = Q(), c2 = Q(), l2 = ee(X), u2 = X;
  m && e2.scrollBehavior && `scrollRestoration` in history && (history.scrollRestoration = `manual`);
  let f2 = te.bind(null, (e3) => `` + e3), h2 = te.bind(null, ue), g2 = te.bind(null, H);
  function b2(e3, n3) {
    let r2, i3;
    return Te(e3) ? (r2 = t2.getRecordMatcher(e3), i3 = n3) : i3 = e3, t2.addRoute(i3, r2);
  }
  function x2(e3) {
    let n3 = t2.getRecordMatcher(e3);
    n3 && t2.removeRoute(n3);
  }
  function ne2() {
    return t2.getRoutes().map((e3) => e3.record);
  }
  function re2(e3) {
    return !!t2.getRecordMatcher(e3);
  }
  function E2(e3, r2) {
    if (r2 = _({}, r2 || l2.value), typeof e3 == `string`) {
      let i3 = G(n2, e3, r2.path), o4 = t2.resolve({ path: i3.path }, r2), s4 = a2.createHref(i3.fullPath);
      return _(i3, o4, { params: g2(o4.params), redirectedFrom: void 0, href: s4 });
    }
    let o3;
    if (e3.path != null) o3 = _({}, e3, { path: G(n2, e3.path, r2.path).path });
    else {
      let t3 = _({}, e3.params);
      for (let e4 in t3) t3[e4] ?? delete t3[e4];
      o3 = _({}, e3, { params: h2(t3) }), r2.params = h2(r2.params);
    }
    let s3 = t2.resolve(o3, r2), c3 = e3.hash || ``;
    s3.params = f2(g2(s3.params));
    let u3 = de(i2, _({}, e3, { hash: ce(c3), path: s3.path })), d2 = a2.createHref(u3);
    return _({ fullPath: u3, hash: c3, query: i2 === De ? Oe(e3.query) : e3.query || {} }, s3, { redirectedFrom: void 0, href: d2 });
  }
  function D2(e3) {
    return typeof e3 == `string` ? G(n2, e3, l2.value.path) : _({}, e3);
  }
  function O2(e3, t3) {
    if (u2 !== e3) return S(8, { from: t3, to: e3 });
  }
  function k2(e3) {
    return j2(e3);
  }
  function ae2(e3) {
    return k2(_(D2(e3), { replace: true }));
  }
  function A2(e3, t3) {
    let n3 = e3.matched[e3.matched.length - 1];
    if (n3 && n3.redirect) {
      let { redirect: r2 } = n3, i3 = typeof r2 == `function` ? r2(e3, t3) : r2;
      return typeof i3 == `string` && (i3 = i3.includes(`?`) || i3.includes(`#`) ? i3 = D2(i3) : { path: i3 }, i3.params = {}), _({ query: e3.query, hash: e3.hash, params: i3.path == null ? e3.params : {} }, i3);
    }
  }
  function j2(e3, t3) {
    let n3 = u2 = E2(e3), r2 = l2.value, a3 = e3.state, o3 = e3.force, s3 = e3.replace === true, c3 = A2(n3, r2);
    if (c3) return j2(_(D2(c3), { state: typeof c3 == `object` ? _({}, a3, c3.state) : a3, force: o3, replace: s3 }), t3 || n3);
    let d2 = n3;
    d2.redirectedFrom = t3;
    let f3;
    return !o3 && fe(i2, r2, n3) && (f3 = S(16, { to: d2, from: r2 }), U2(r2, r2, true, false)), (f3 ? Promise.resolve(f3) : P2(d2, r2)).catch((e4) => C(e4) ? C(e4, 2) ? e4 : V2(e4) : B2(e4, d2, r2)).then((e4) => {
      if (e4) {
        if (C(e4, 2)) return j2(_({ replace: s3 }, D2(e4.to), { state: typeof e4.to == `object` ? _({}, a3, e4.to.state) : a3, force: o3 }), t3 || d2);
      } else e4 = I2(d2, r2, true, s3, a3);
      return F2(d2, r2, e4), e4;
    });
  }
  function M2(e3, t3) {
    let n3 = O2(e3, t3);
    return n3 ? Promise.reject(n3) : Promise.resolve();
  }
  function N2(e3) {
    let t3 = q2.values().next().value;
    return t3 && typeof t3.runWithContext == `function` ? t3.runWithContext(e3) : e3();
  }
  function P2(e3, t3) {
    let n3, [r2, i3, a3] = Me(e3, t3);
    n3 = je(r2.reverse(), `beforeRouteLeave`, e3, t3);
    for (let i4 of r2) i4.leaveGuards.forEach((r3) => {
      n3.push($(r3, e3, t3));
    });
    let c3 = M2.bind(null, e3, t3);
    return n3.push(c3), Y2(n3).then(() => {
      n3 = [];
      for (let r3 of o2.list()) n3.push($(r3, e3, t3));
      return n3.push(c3), Y2(n3);
    }).then(() => {
      n3 = je(i3, `beforeRouteUpdate`, e3, t3);
      for (let r3 of i3) r3.updateGuards.forEach((r4) => {
        n3.push($(r4, e3, t3));
      });
      return n3.push(c3), Y2(n3);
    }).then(() => {
      n3 = [];
      for (let r3 of a3) if (r3.beforeEnter) if (y(r3.beforeEnter)) for (let i4 of r3.beforeEnter) n3.push($(i4, e3, t3));
      else n3.push($(r3.beforeEnter, e3, t3));
      return n3.push(c3), Y2(n3);
    }).then(() => (e3.matched.forEach((e4) => e4.enterCallbacks = {}), n3 = je(a3, `beforeRouteEnter`, e3, t3, N2), n3.push(c3), Y2(n3))).then(() => {
      n3 = [];
      for (let r3 of s2.list()) n3.push($(r3, e3, t3));
      return n3.push(c3), Y2(n3);
    }).catch((e4) => C(e4, 8) ? e4 : Promise.reject(e4));
  }
  function F2(e3, t3, n3) {
    c2.list().forEach((r2) => N2(() => r2(e3, t3, n3)));
  }
  function I2(e3, t3, n3, r2, i3) {
    let o3 = O2(e3, t3);
    if (o3) return o3;
    let s3 = t3 === X, c3 = m ? history.state : {};
    n3 && (r2 || s3 ? a2.replace(e3.fullPath, _({ scroll: s3 && c3 && c3.scroll }, i3)) : a2.push(e3.fullPath, i3)), l2.value = e3, U2(e3, t3, n3, s3), V2();
  }
  let L2;
  function oe2() {
    L2 || (L2 = a2.listen((e3, t3, n3) => {
      if (!J2.listening) return;
      let r2 = E2(e3), i3 = A2(r2, J2.currentRoute.value);
      if (i3) {
        j2(_(i3, { replace: true, force: true }), r2).catch(v);
        return;
      }
      u2 = r2;
      let o3 = l2.value;
      m && Se(be(o3.fullPath, n3.delta), Z()), P2(r2, o3).catch((e4) => C(e4, 12) ? e4 : C(e4, 2) ? (j2(_(D2(e4.to), { force: true }), r2).then((e5) => {
        C(e5, 20) && !n3.delta && n3.type === `pop` && a2.go(-1, false);
      }).catch(v), Promise.reject()) : (n3.delta && a2.go(-n3.delta, false), B2(e4, r2, o3))).then((e4) => {
        e4 || (e4 = I2(r2, o3, false)), e4 && (n3.delta && !C(e4, 8) ? a2.go(-n3.delta, false) : n3.type === `pop` && C(e4, 20) && a2.go(-1, false)), F2(r2, o3, e4);
      }).catch(v);
    }));
  }
  let R2 = Q(), se2 = Q(), z2;
  function B2(e3, t3, n3) {
    V2(e3);
    let r2 = se2.list();
    return r2.length ? r2.forEach((r3) => r3(e3, t3, n3)) : console.error(e3), Promise.reject(e3);
  }
  function le2() {
    return z2 && l2.value !== X ? Promise.resolve() : new Promise((e3, t3) => {
      R2.add([e3, t3]);
    });
  }
  function V2(e3) {
    return z2 || (z2 = !e3, oe2(), R2.list().forEach(([t3, n3]) => e3 ? n3(e3) : t3()), R2.reset()), e3;
  }
  function U2(t3, n3, r2, i3) {
    let { scrollBehavior: a3 } = e2;
    if (!m || !a3) return Promise.resolve();
    let o3 = !r2 && Ce(be(t3.fullPath, 0)) || (i3 || !r2) && history.state && history.state.scroll || null;
    return d().then(() => a3(t3, n3, o3)).then((e3) => e3 && ye(e3)).catch((e3) => B2(e3, t3, n3));
  }
  let W2 = (e3) => a2.go(e3), K2, q2 = /* @__PURE__ */ new Set(), J2 = { currentRoute: l2, listening: true, addRoute: b2, removeRoute: x2, clearRoutes: t2.clearRoutes, hasRoute: re2, getRoutes: ne2, resolve: E2, options: e2, push: k2, replace: ae2, go: W2, back: () => W2(-1), forward: () => W2(1), beforeEach: o2.add, beforeResolve: s2.add, afterEach: c2.add, onError: se2.add, isReady: le2, install(e3) {
    e3.component(`RouterLink`, ct), e3.component(`RouterView`, ht), e3.config.globalProperties.$router = J2, Object.defineProperty(e3.config.globalProperties, "$route", { enumerable: true, get: () => r(l2) }), m && !K2 && l2.value === X && (K2 = true, k2(a2.location).catch((e4) => {
    }));
    let t3 = {};
    for (let e4 in X) Object.defineProperty(t3, e4, { get: () => l2.value[e4], enumerable: true });
    e3.provide(w, J2), e3.provide(ie, p(t3)), e3.provide(T, l2);
    let n3 = e3.unmount;
    q2.add(e3), e3.unmount = function() {
      q2.delete(e3), q2.size < 1 && (u2 = X, L2 && L2(), L2 = null, l2.value = X, K2 = false, z2 = false), n3();
    };
  } };
  function Y2(e3) {
    return e3.reduce((e4, t3) => e4.then(() => N2(t3)), Promise.resolve());
  }
  return J2;
}
export {
  D as a,
  Ae as i,
  gt as n,
  E as o,
  Re as r,
  ct as t
};
