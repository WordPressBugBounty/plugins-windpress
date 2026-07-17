var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
import { $ as e, $n as t, B as n, D as r, E as i, En as a, Ft as o, Ht as s, J as c, L as l, Lt as u, On as d, Zn as f, b as p, ct as m, et as h, ft as g, g as _, gn as v, gt as y, h as b, jn as x, k as S, mt as C, nr as w, nt as T, o as ee, ot as te, qt as E, r as ne, tr as D, tt as O, un as k, v as A, vn as j, wn as re, wt as M, xn as ie, xt as N, y as P, yn as ae, z as F } from "./runtime-core.esm-bundler-Twwq1XF8.js";
import { k as I, v as oe, y as se } from "./dist-Bw8ba7To.js";
import { a as L, c as R, d as ce, f as le, g as ue, i as z, l as de, m as fe, n as B, o as V, p as pe, r as me, s as he, t as ge, u as _e } from "./useApi-CROJJdhE-DpbaUaur.js";
var ve = /^[a-z0-9]+(-[a-z0-9]+)*$/, ye = (e2, t2, n2, r2 = ``) => {
  let i2 = e2.split(`:`);
  if (e2.slice(0, 1) === `@`) {
    if (i2.length < 2 || i2.length > 3) return null;
    r2 = i2.shift().slice(1);
  }
  if (i2.length > 3 || !i2.length) return null;
  if (i2.length > 1) {
    let e3 = i2.pop(), n3 = i2.pop(), a3 = { provider: i2.length > 0 ? i2[0] : r2, prefix: n3, name: e3 };
    return t2 && !be(a3) ? null : a3;
  }
  let a2 = i2[0], o2 = a2.split(`-`);
  if (o2.length > 1) {
    let e3 = { provider: r2, prefix: o2.shift(), name: o2.join(`-`) };
    return t2 && !be(e3) ? null : e3;
  }
  if (n2 && r2 === ``) {
    let e3 = { provider: r2, prefix: ``, name: a2 };
    return t2 && !be(e3, n2) ? null : e3;
  }
  return null;
}, be = (e2, t2) => e2 ? !!((t2 && e2.prefix === `` || e2.prefix) && e2.name) : false;
function xe(e2, t2) {
  let n2 = e2.icons, r2 = e2.aliases || /* @__PURE__ */ Object.create(null), i2 = /* @__PURE__ */ Object.create(null);
  function a2(e3) {
    if (n2[e3]) return i2[e3] = [];
    if (!(e3 in i2)) {
      i2[e3] = null;
      let t3 = r2[e3] && r2[e3].parent, n3 = t3 && a2(t3);
      n3 && (i2[e3] = [t3].concat(n3));
    }
    return i2[e3];
  }
  return Object.keys(n2).concat(Object.keys(r2)).forEach(a2), i2;
}
var Se = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }), Ce = Object.freeze({ rotate: 0, vFlip: false, hFlip: false }), we = Object.freeze({ ...Se, ...Ce }), Te = Object.freeze({ ...we, body: ``, hidden: false });
function Ee(e2, t2) {
  let n2 = {};
  !e2.hFlip != !t2.hFlip && (n2.hFlip = true), !e2.vFlip != !t2.vFlip && (n2.vFlip = true);
  let r2 = ((e2.rotate || 0) + (t2.rotate || 0)) % 4;
  return r2 && (n2.rotate = r2), n2;
}
function De(e2, t2) {
  let n2 = Ee(e2, t2);
  for (let r2 in Te) r2 in Ce ? r2 in e2 && !(r2 in n2) && (n2[r2] = Ce[r2]) : r2 in t2 ? n2[r2] = t2[r2] : r2 in e2 && (n2[r2] = e2[r2]);
  return n2;
}
function Oe(e2, t2, n2) {
  let r2 = e2.icons, i2 = e2.aliases || /* @__PURE__ */ Object.create(null), a2 = {};
  function o2(e3) {
    a2 = De(r2[e3] || i2[e3], a2);
  }
  return o2(t2), n2.forEach(o2), De(e2, a2);
}
function ke(e2, t2) {
  let n2 = [];
  if (typeof e2 != `object` || typeof e2.icons != `object`) return n2;
  e2.not_found instanceof Array && e2.not_found.forEach((e3) => {
    t2(e3, null), n2.push(e3);
  });
  let r2 = xe(e2);
  for (let i2 in r2) {
    let a2 = r2[i2];
    a2 && (t2(i2, Oe(e2, i2, a2)), n2.push(i2));
  }
  return n2;
}
var Ae = { provider: ``, aliases: {}, not_found: {}, ...Se };
function je(e2, t2) {
  for (let n2 in t2) if (n2 in e2 && typeof e2[n2] != typeof t2[n2]) return false;
  return true;
}
function Me(e2) {
  if (typeof e2 != `object` || !e2) return null;
  let t2 = e2;
  if (typeof t2.prefix != `string` || !e2.icons || typeof e2.icons != `object` || !je(e2, Ae)) return null;
  let n2 = t2.icons;
  for (let e3 in n2) {
    let t3 = n2[e3];
    if (!e3 || typeof t3.body != `string` || !je(t3, Te)) return null;
  }
  let r2 = t2.aliases || /* @__PURE__ */ Object.create(null);
  for (let e3 in r2) {
    let t3 = r2[e3], i2 = t3.parent;
    if (!e3 || typeof i2 != `string` || !n2[i2] && !r2[i2] || !je(t3, Te)) return null;
  }
  return t2;
}
var Ne = /* @__PURE__ */ Object.create(null);
function Pe(e2, t2) {
  return { provider: e2, prefix: t2, icons: /* @__PURE__ */ Object.create(null), missing: /* @__PURE__ */ new Set() };
}
function Fe(e2, t2) {
  let n2 = Ne[e2] || (Ne[e2] = /* @__PURE__ */ Object.create(null));
  return n2[t2] || (n2[t2] = Pe(e2, t2));
}
function Ie(e2, t2) {
  return Me(t2) ? ke(t2, (t3, n2) => {
    n2 ? e2.icons[t3] = n2 : e2.missing.add(t3);
  }) : [];
}
function Le(e2, t2, n2) {
  try {
    if (typeof n2.body == `string`) return e2.icons[t2] = { ...n2 }, true;
  } catch {
  }
  return false;
}
var Re = false;
function ze(e2) {
  return typeof e2 == `boolean` && (Re = e2), Re;
}
function Be(e2) {
  let t2 = typeof e2 == `string` ? ye(e2, true, Re) : e2;
  if (t2) {
    let e3 = Fe(t2.provider, t2.prefix), n2 = t2.name;
    return e3.icons[n2] || (e3.missing.has(n2) ? null : void 0);
  }
}
function Ve(e2, t2) {
  let n2 = ye(e2, true, Re);
  if (!n2) return false;
  let r2 = Fe(n2.provider, n2.prefix);
  return t2 ? Le(r2, n2.name, t2) : (r2.missing.add(n2.name), true);
}
function He(e2, t2) {
  if (typeof e2 != `object`) return false;
  if (typeof t2 != `string` && (t2 = e2.provider || ``), Re && !t2 && !e2.prefix) {
    let t3 = false;
    return Me(e2) && (e2.prefix = ``, ke(e2, (e3, n3) => {
      Ve(e3, n3) && (t3 = true);
    })), t3;
  }
  let n2 = e2.prefix;
  return be({ prefix: n2, name: `a` }) ? !!Ie(Fe(t2, n2), e2) : false;
}
var Ue = Object.freeze({ width: null, height: null }), We = Object.freeze({ ...Ue, ...Ce }), Ge = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Ke = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function qe(e2, t2, n2) {
  if (t2 === 1) return e2;
  if (n2 || (n2 = 100), typeof e2 == `number`) return Math.ceil(e2 * t2 * n2) / n2;
  if (typeof e2 != `string`) return e2;
  let r2 = e2.split(Ge);
  if (r2 === null || !r2.length) return e2;
  let i2 = [], a2 = r2.shift(), o2 = Ke.test(a2);
  for (; ; ) {
    if (o2) {
      let e3 = parseFloat(a2);
      isNaN(e3) ? i2.push(a2) : i2.push(Math.ceil(e3 * t2 * n2) / n2);
    } else i2.push(a2);
    if (a2 = r2.shift(), a2 === void 0) return i2.join(``);
    o2 = !o2;
  }
}
function Je(e2, t2 = `defs`) {
  let n2 = ``, r2 = e2.indexOf(`<` + t2);
  for (; r2 >= 0; ) {
    let i2 = e2.indexOf(`>`, r2), a2 = e2.indexOf(`</` + t2);
    if (i2 === -1 || a2 === -1) break;
    let o2 = e2.indexOf(`>`, a2);
    if (o2 === -1) break;
    n2 += e2.slice(i2 + 1, a2).trim(), e2 = e2.slice(0, r2).trim() + e2.slice(o2 + 1);
  }
  return { defs: n2, content: e2 };
}
function Ye(e2, t2) {
  return e2 ? `<defs>` + e2 + `</defs>` + t2 : t2;
}
function Xe(e2, t2, n2) {
  let r2 = Je(e2);
  return Ye(r2.defs, t2 + r2.content + n2);
}
var Ze = (e2) => e2 === `unset` || e2 === `undefined` || e2 === `none`;
function Qe(e2, t2) {
  let n2 = { ...we, ...e2 }, r2 = { ...We, ...t2 }, i2 = { left: n2.left, top: n2.top, width: n2.width, height: n2.height }, a2 = n2.body;
  [n2, r2].forEach((e3) => {
    let t3 = [], n3 = e3.hFlip, r3 = e3.vFlip, o3 = e3.rotate;
    n3 ? r3 ? o3 += 2 : (t3.push(`translate(` + (i2.width + i2.left).toString() + ` ` + (0 - i2.top).toString() + `)`), t3.push(`scale(-1 1)`), i2.top = i2.left = 0) : r3 && (t3.push(`translate(` + (0 - i2.left).toString() + ` ` + (i2.height + i2.top).toString() + `)`), t3.push(`scale(1 -1)`), i2.top = i2.left = 0);
    let s3;
    switch (o3 < 0 && (o3 -= Math.floor(o3 / 4) * 4), o3 %= 4, o3) {
      case 1:
        s3 = i2.height / 2 + i2.top, t3.unshift(`rotate(90 ` + s3.toString() + ` ` + s3.toString() + `)`);
        break;
      case 2:
        t3.unshift(`rotate(180 ` + (i2.width / 2 + i2.left).toString() + ` ` + (i2.height / 2 + i2.top).toString() + `)`);
        break;
      case 3:
        s3 = i2.width / 2 + i2.left, t3.unshift(`rotate(-90 ` + s3.toString() + ` ` + s3.toString() + `)`);
        break;
    }
    o3 % 2 == 1 && (i2.left !== i2.top && (s3 = i2.left, i2.left = i2.top, i2.top = s3), i2.width !== i2.height && (s3 = i2.width, i2.width = i2.height, i2.height = s3)), t3.length && (a2 = Xe(a2, `<g transform="` + t3.join(` `) + `">`, `</g>`));
  });
  let o2 = r2.width, s2 = r2.height, c2 = i2.width, l2 = i2.height, u2, d2;
  o2 === null ? (d2 = s2 === null ? `1em` : s2 === `auto` ? l2 : s2, u2 = qe(d2, c2 / l2)) : (u2 = o2 === `auto` ? c2 : o2, d2 = s2 === null ? qe(u2, l2 / c2) : s2 === `auto` ? l2 : s2);
  let f2 = {}, p2 = (e3, t3) => {
    Ze(t3) || (f2[e3] = t3.toString());
  };
  p2(`width`, u2), p2(`height`, d2);
  let m2 = [i2.left, i2.top, c2, l2];
  return f2.viewBox = m2.join(` `), { attributes: f2, viewBox: m2, body: a2 };
}
var $e = /\sid="(\S+)"/g, et = /* @__PURE__ */ new Map();
function tt(e2) {
  e2 = e2.replace(/[0-9]+$/, ``) || `a`;
  let t2 = et.get(e2) || 0;
  return et.set(e2, t2 + 1), t2 ? `${e2}${t2}` : e2;
}
function nt(e2) {
  let t2 = [], n2;
  for (; n2 = $e.exec(e2); ) t2.push(n2[1]);
  if (!t2.length) return e2;
  let r2 = `suffix` + (Math.random() * 16777216 | Date.now()).toString(16);
  return t2.forEach((t3) => {
    let n3 = tt(t3), i2 = t3.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
    e2 = e2.replace(RegExp(`([#;"])(` + i2 + `)([")]|\\.[a-z])`, `g`), `$1` + n3 + r2 + `$3`);
  }), e2 = e2.replace(new RegExp(r2, `g`), ``), e2;
}
var rt = /* @__PURE__ */ Object.create(null);
function it(e2, t2) {
  rt[e2] = t2;
}
function at(e2) {
  return rt[e2] || rt[``];
}
function ot(e2) {
  let t2;
  if (typeof e2.resources == `string`) t2 = [e2.resources];
  else if (t2 = e2.resources, !(t2 instanceof Array) || !t2.length) return null;
  return { resources: t2, path: e2.path || `/`, maxURL: e2.maxURL || 500, rotate: e2.rotate || 750, timeout: e2.timeout || 5e3, random: e2.random === true, index: e2.index || 0, dataAfterTimeout: e2.dataAfterTimeout !== false };
}
for (var st = /* @__PURE__ */ Object.create(null), ct = [`https://api.simplesvg.com`, `https://api.unisvg.com`], lt = []; ct.length > 0; ) ct.length === 1 || Math.random() > 0.5 ? lt.push(ct.shift()) : lt.push(ct.pop());
st[``] = ot({ resources: [`https://api.iconify.design`].concat(lt) });
function ut(e2, t2) {
  let n2 = ot(t2);
  return n2 === null ? false : (st[e2] = n2, true);
}
function dt(e2) {
  return st[e2];
}
var ft = (() => {
  let e2;
  try {
    if (e2 = fetch, typeof e2 == `function`) return e2;
  } catch {
  }
})();
function pt(e2, t2) {
  let n2 = dt(e2);
  if (!n2) return 0;
  let r2;
  if (!n2.maxURL) r2 = 0;
  else {
    let e3 = 0;
    n2.resources.forEach((t3) => {
      e3 = Math.max(e3, t3.length);
    });
    let i2 = t2 + `.json?icons=`;
    r2 = n2.maxURL - e3 - n2.path.length - i2.length;
  }
  return r2;
}
function mt(e2) {
  return e2 === 404;
}
var ht = (e2, t2, n2) => {
  let r2 = [], i2 = pt(e2, t2), a2 = `icons`, o2 = { type: a2, provider: e2, prefix: t2, icons: [] }, s2 = 0;
  return n2.forEach((n3, c2) => {
    s2 += n3.length + 1, s2 >= i2 && c2 > 0 && (r2.push(o2), o2 = { type: a2, provider: e2, prefix: t2, icons: [] }, s2 = n3.length), o2.icons.push(n3);
  }), r2.push(o2), r2;
};
function gt(e2) {
  if (typeof e2 == `string`) {
    let t2 = dt(e2);
    if (t2) return t2.path;
  }
  return `/`;
}
var _t = { prepare: ht, send: (e2, t2, n2) => {
  if (!ft) {
    n2(`abort`, 424);
    return;
  }
  let r2 = gt(t2.provider);
  switch (t2.type) {
    case `icons`: {
      let e3 = t2.prefix, n3 = t2.icons.join(`,`), i3 = new URLSearchParams({ icons: n3 });
      r2 += e3 + `.json?` + i3.toString();
      break;
    }
    case `custom`: {
      let e3 = t2.uri;
      r2 += e3.slice(0, 1) === `/` ? e3.slice(1) : e3;
      break;
    }
    default:
      n2(`abort`, 400);
      return;
  }
  let i2 = 503;
  ft(e2 + r2).then((e3) => {
    let t3 = e3.status;
    if (t3 !== 200) {
      setTimeout(() => {
        n2(mt(t3) ? `abort` : `next`, t3);
      });
      return;
    }
    return i2 = 501, e3.json();
  }).then((e3) => {
    if (typeof e3 != `object` || !e3) {
      setTimeout(() => {
        e3 === 404 ? n2(`abort`, e3) : n2(`next`, i2);
      });
      return;
    }
    setTimeout(() => {
      n2(`success`, e3);
    });
  }).catch(() => {
    n2(`next`, i2);
  });
} };
function vt(e2, t2) {
  e2.forEach((e3) => {
    let n2 = e3.loaderCallbacks;
    n2 && (e3.loaderCallbacks = n2.filter((e4) => e4.id !== t2));
  });
}
function yt(e2) {
  e2.pendingCallbacksFlag || (e2.pendingCallbacksFlag = true, setTimeout(() => {
    e2.pendingCallbacksFlag = false;
    let t2 = e2.loaderCallbacks ? e2.loaderCallbacks.slice(0) : [];
    if (!t2.length) return;
    let n2 = false, r2 = e2.provider, i2 = e2.prefix;
    t2.forEach((t3) => {
      let a2 = t3.icons, o2 = a2.pending.length;
      a2.pending = a2.pending.filter((t4) => {
        if (t4.prefix !== i2) return true;
        let o3 = t4.name;
        if (e2.icons[o3]) a2.loaded.push({ provider: r2, prefix: i2, name: o3 });
        else if (e2.missing.has(o3)) a2.missing.push({ provider: r2, prefix: i2, name: o3 });
        else return n2 = true, true;
        return false;
      }), a2.pending.length !== o2 && (n2 || vt([e2], t3.id), t3.callback(a2.loaded.slice(0), a2.missing.slice(0), a2.pending.slice(0), t3.abort));
    });
  }));
}
var bt = 0;
function xt(e2, t2, n2) {
  let r2 = bt++, i2 = vt.bind(null, n2, r2);
  if (!t2.pending.length) return i2;
  let a2 = { id: r2, icons: t2, callback: e2, abort: i2 };
  return n2.forEach((e3) => {
    (e3.loaderCallbacks || (e3.loaderCallbacks = [])).push(a2);
  }), i2;
}
function St(e2) {
  let t2 = { loaded: [], missing: [], pending: [] }, n2 = /* @__PURE__ */ Object.create(null);
  e2.sort((e3, t3) => e3.provider === t3.provider ? e3.prefix === t3.prefix ? e3.name.localeCompare(t3.name) : e3.prefix.localeCompare(t3.prefix) : e3.provider.localeCompare(t3.provider));
  let r2 = { provider: ``, prefix: ``, name: `` };
  return e2.forEach((e3) => {
    if (r2.name === e3.name && r2.prefix === e3.prefix && r2.provider === e3.provider) return;
    r2 = e3;
    let i2 = e3.provider, a2 = e3.prefix, o2 = e3.name, s2 = n2[i2] || (n2[i2] = /* @__PURE__ */ Object.create(null)), c2 = s2[a2] || (s2[a2] = Fe(i2, a2)), l2;
    l2 = o2 in c2.icons ? t2.loaded : a2 === `` || c2.missing.has(o2) ? t2.missing : t2.pending;
    let u2 = { provider: i2, prefix: a2, name: o2 };
    l2.push(u2);
  }), t2;
}
function Ct(e2, t2 = true, n2 = false) {
  let r2 = [];
  return e2.forEach((e3) => {
    let i2 = typeof e3 == `string` ? ye(e3, t2, n2) : e3;
    i2 && r2.push(i2);
  }), r2;
}
var wt = { resources: [], index: 0, timeout: 2e3, rotate: 750, random: false, dataAfterTimeout: false };
function Tt(e2, t2, n2, r2) {
  let i2 = e2.resources.length, a2 = e2.random ? Math.floor(Math.random() * i2) : e2.index, o2;
  if (e2.random) {
    let t3 = e2.resources.slice(0);
    for (o2 = []; t3.length > 1; ) {
      let e3 = Math.floor(Math.random() * t3.length);
      o2.push(t3[e3]), t3 = t3.slice(0, e3).concat(t3.slice(e3 + 1));
    }
    o2 = o2.concat(t3);
  } else o2 = e2.resources.slice(a2).concat(e2.resources.slice(0, a2));
  let s2 = Date.now(), c2 = `pending`, l2 = 0, u2, d2 = null, f2 = [], p2 = [];
  typeof r2 == `function` && p2.push(r2);
  function m2() {
    d2 && (d2 = (clearTimeout(d2), null));
  }
  function h2() {
    c2 === `pending` && (c2 = `aborted`), m2(), f2.forEach((e3) => {
      e3.status === `pending` && (e3.status = `aborted`);
    }), f2 = [];
  }
  function g2(e3, t3) {
    t3 && (p2 = []), typeof e3 == `function` && p2.push(e3);
  }
  function _2() {
    return { startTime: s2, payload: t2, status: c2, queriesSent: l2, queriesPending: f2.length, subscribe: g2, abort: h2 };
  }
  function v2() {
    c2 = `failed`, p2.forEach((e3) => {
      e3(void 0, u2);
    });
  }
  function y2() {
    f2.forEach((e3) => {
      e3.status === `pending` && (e3.status = `aborted`);
    }), f2 = [];
  }
  function b2(t3, n3, r3) {
    let i3 = n3 !== `success`;
    switch (f2 = f2.filter((e3) => e3 !== t3), c2) {
      case `pending`:
        break;
      case `failed`:
        if (i3 || !e2.dataAfterTimeout) return;
        break;
      default:
        return;
    }
    if (n3 === `abort`) {
      u2 = r3, v2();
      return;
    }
    if (i3) {
      u2 = r3, f2.length || (o2.length ? x2() : v2());
      return;
    }
    if (m2(), y2(), !e2.random) {
      let n4 = e2.resources.indexOf(t3.resource);
      n4 !== -1 && n4 !== e2.index && (e2.index = n4);
    }
    c2 = `completed`, p2.forEach((e3) => {
      e3(r3);
    });
  }
  function x2() {
    if (c2 !== `pending`) return;
    m2();
    let r3 = o2.shift();
    if (r3 === void 0) {
      if (f2.length) {
        d2 = setTimeout(() => {
          m2(), c2 === `pending` && (y2(), v2());
        }, e2.timeout);
        return;
      }
      v2();
      return;
    }
    let i3 = { status: `pending`, resource: r3, callback: (e3, t3) => {
      b2(i3, e3, t3);
    } };
    f2.push(i3), l2++, d2 = setTimeout(x2, e2.rotate), n2(r3, t2, i3.callback);
  }
  return setTimeout(x2), _2;
}
function Et(e2) {
  let t2 = { ...wt, ...e2 }, n2 = [];
  function r2() {
    n2 = n2.filter((e3) => e3().status === `pending`);
  }
  function i2(e3, i3, a3) {
    let o2 = Tt(t2, e3, i3, (e4, t3) => {
      r2(), a3 && a3(e4, t3);
    });
    return n2.push(o2), o2;
  }
  function a2(e3) {
    return n2.find((t3) => e3(t3)) || null;
  }
  return { query: i2, find: a2, setIndex: (e3) => {
    t2.index = e3;
  }, getIndex: () => t2.index, cleanup: r2 };
}
function Dt() {
}
var Ot = /* @__PURE__ */ Object.create(null);
function kt(e2) {
  if (!Ot[e2]) {
    let t2 = dt(e2);
    if (!t2) return;
    Ot[e2] = { config: t2, redundancy: Et(t2) };
  }
  return Ot[e2];
}
function At(e2, t2, n2) {
  let r2, i2;
  if (typeof e2 == `string`) {
    let t3 = at(e2);
    if (!t3) return n2(void 0, 424), Dt;
    i2 = t3.send;
    let a2 = kt(e2);
    a2 && (r2 = a2.redundancy);
  } else {
    let t3 = ot(e2);
    if (t3) {
      r2 = Et(t3);
      let n3 = at(e2.resources ? e2.resources[0] : ``);
      n3 && (i2 = n3.send);
    }
  }
  return !r2 || !i2 ? (n2(void 0, 424), Dt) : r2.query(t2, i2, n2)().abort;
}
function jt() {
}
function Mt(e2) {
  e2.iconsLoaderFlag || (e2.iconsLoaderFlag = true, setTimeout(() => {
    e2.iconsLoaderFlag = false, yt(e2);
  }));
}
function Nt(e2) {
  let t2 = [], n2 = [];
  return e2.forEach((e3) => {
    (e3.match(ve) ? t2 : n2).push(e3);
  }), { valid: t2, invalid: n2 };
}
function Pt(e2, t2, n2) {
  function r2() {
    let n3 = e2.pendingIcons;
    t2.forEach((t3) => {
      n3 && n3.delete(t3), e2.icons[t3] || e2.missing.add(t3);
    });
  }
  if (n2 && typeof n2 == `object`) try {
    if (!Ie(e2, n2).length) {
      r2();
      return;
    }
  } catch (e3) {
    console.error(e3);
  }
  r2(), Mt(e2);
}
function Ft(e2, t2) {
  e2 instanceof Promise ? e2.then((e3) => {
    t2(e3);
  }).catch(() => {
    t2(null);
  }) : t2(e2);
}
function It(e2, t2) {
  e2.iconsToLoad ? e2.iconsToLoad = e2.iconsToLoad.concat(t2).sort() : e2.iconsToLoad = t2, e2.iconsQueueFlag || (e2.iconsQueueFlag = true, setTimeout(() => {
    e2.iconsQueueFlag = false;
    let { provider: t3, prefix: n2 } = e2, r2 = e2.iconsToLoad;
    if (delete e2.iconsToLoad, !r2 || !r2.length) return;
    let i2 = e2.loadIcon;
    if (e2.loadIcons && (r2.length > 1 || !i2)) {
      Ft(e2.loadIcons(r2, n2, t3), (t4) => {
        Pt(e2, r2, t4);
      });
      return;
    }
    if (i2) {
      r2.forEach((r3) => {
        Ft(i2(r3, n2, t3), (t4) => {
          Pt(e2, [r3], t4 ? { prefix: n2, icons: { [r3]: t4 } } : null);
        });
      });
      return;
    }
    let { valid: a2, invalid: o2 } = Nt(r2);
    if (o2.length && Pt(e2, o2, null), !a2.length) return;
    let s2 = n2.match(ve) ? at(t3) : null;
    if (!s2) {
      Pt(e2, a2, null);
      return;
    }
    s2.prepare(t3, n2, a2).forEach((n3) => {
      At(t3, n3, (t4) => {
        Pt(e2, n3.icons, t4);
      });
    });
  }));
}
var Lt = (e2, t2) => {
  let n2 = St(Ct(e2, true, ze()));
  if (!n2.pending.length) {
    let e3 = true;
    return t2 && setTimeout(() => {
      e3 && t2(n2.loaded, n2.missing, n2.pending, jt);
    }), () => {
      e3 = false;
    };
  }
  let r2 = /* @__PURE__ */ Object.create(null), i2 = [], a2, o2;
  return n2.pending.forEach((e3) => {
    let { provider: t3, prefix: n3 } = e3;
    if (n3 === o2 && t3 === a2) return;
    a2 = t3, o2 = n3, i2.push(Fe(t3, n3));
    let s2 = r2[t3] || (r2[t3] = /* @__PURE__ */ Object.create(null));
    s2[n3] || (s2[n3] = []);
  }), n2.pending.forEach((e3) => {
    let { provider: t3, prefix: n3, name: i3 } = e3, a3 = Fe(t3, n3), o3 = a3.pendingIcons || (a3.pendingIcons = /* @__PURE__ */ new Set());
    o3.has(i3) || (o3.add(i3), r2[t3][n3].push(i3));
  }), i2.forEach((e3) => {
    let t3 = r2[e3.provider][e3.prefix];
    t3.length && It(e3, t3);
  }), t2 ? xt(t2, n2, i2) : jt;
};
function Rt(e2, t2) {
  let n2 = { ...e2 };
  for (let e3 in t2) {
    let r2 = t2[e3], i2 = typeof r2;
    e3 in Ue ? (r2 === null || r2 && (i2 === `string` || i2 === `number`)) && (n2[e3] = r2) : i2 === typeof n2[e3] && (n2[e3] = e3 === `rotate` ? r2 % 4 : r2);
  }
  return n2;
}
var zt = /[\s,]+/;
function Bt(e2, t2) {
  t2.split(zt).forEach((t3) => {
    switch (t3.trim()) {
      case `horizontal`:
        e2.hFlip = true;
        break;
      case `vertical`:
        e2.vFlip = true;
        break;
    }
  });
}
function Vt(e2, t2 = 0) {
  let n2 = e2.replace(/^-?[0-9.]*/, ``);
  function r2(e3) {
    for (; e3 < 0; ) e3 += 4;
    return e3 % 4;
  }
  if (n2 === ``) {
    let t3 = parseInt(e2);
    return isNaN(t3) ? 0 : r2(t3);
  } else if (n2 !== e2) {
    let t3 = 0;
    switch (n2) {
      case `%`:
        t3 = 25;
        break;
      case `deg`:
        t3 = 90;
    }
    if (t3) {
      let i2 = parseFloat(e2.slice(0, e2.length - n2.length));
      return isNaN(i2) ? 0 : (i2 /= t3, i2 % 1 == 0 ? r2(i2) : 0);
    }
  }
  return t2;
}
function Ht(e2, t2) {
  let n2 = e2.indexOf(`xlink:`) === -1 ? `` : ` xmlns:xlink="http://www.w3.org/1999/xlink"`;
  for (let e3 in t2) n2 += ` ` + e3 + `="` + t2[e3] + `"`;
  return `<svg xmlns="http://www.w3.org/2000/svg"` + n2 + `>` + e2 + `</svg>`;
}
function Ut(e2) {
  return e2.replace(/"/g, `'`).replace(/%/g, `%25`).replace(/#/g, `%23`).replace(/</g, `%3C`).replace(/>/g, `%3E`).replace(/\s+/g, ` `);
}
function Wt(e2) {
  return `data:image/svg+xml,` + Ut(e2);
}
function Gt(e2) {
  return `url("` + Wt(e2) + `")`;
}
var Kt = { ...We, inline: false }, qt = { xmlns: `http://www.w3.org/2000/svg`, "xmlns:xlink": `http://www.w3.org/1999/xlink`, "aria-hidden": true, role: `img` }, Jt = { display: `inline-block` }, Yt = { backgroundColor: `currentColor` }, Xt = { backgroundColor: `transparent` }, Zt = { Image: `var(--svg)`, Repeat: `no-repeat`, Size: `100% 100%` }, Qt = { webkitMask: Yt, mask: Yt, background: Xt };
for (let e2 in Qt) {
  let t2 = Qt[e2];
  for (let n2 in Zt) t2[e2 + n2] = Zt[n2];
}
var $t = {};
[`horizontal`, `vertical`].forEach((e2) => {
  let t2 = e2.slice(0, 1) + `Flip`;
  $t[e2 + `-flip`] = t2, $t[e2.slice(0, 1) + `-flip`] = t2, $t[e2 + `Flip`] = t2;
});
function en(e2) {
  return e2 + (e2.match(/^[-0-9.]+$/) ? `px` : ``);
}
var tn = (e2, t2) => {
  let r2 = Rt(Kt, t2), i2 = { ...qt }, a2 = t2.mode || `svg`, o2 = {}, s2 = t2.style, c2 = typeof s2 == `object` && !(s2 instanceof Array) ? s2 : {};
  for (let e3 in t2) {
    let n2 = t2[e3];
    if (n2 !== void 0) switch (e3) {
      case `icon`:
      case `style`:
      case `onLoad`:
      case `mode`:
      case `ssr`:
      case `customise`:
        break;
      case `inline`:
      case `hFlip`:
      case `vFlip`:
        r2[e3] = n2 === true || n2 === `true` || n2 === 1;
        break;
      case `flip`:
        typeof n2 == `string` && Bt(r2, n2);
        break;
      case `color`:
        o2.color = n2;
        break;
      case `rotate`:
        typeof n2 == `string` ? r2[e3] = Vt(n2) : typeof n2 == `number` && (r2[e3] = n2);
        break;
      case `ariaHidden`:
      case `aria-hidden`:
        n2 !== true && n2 !== `true` && delete i2[`aria-hidden`];
        break;
      default: {
        let t3 = $t[e3];
        t3 ? (n2 === true || n2 === `true` || n2 === 1) && (r2[t3] = true) : Kt[e3] === void 0 && (i2[e3] = n2);
      }
    }
  }
  let l2 = Qe(e2, r2), u2 = l2.attributes;
  if (r2.inline && (o2.verticalAlign = `-0.125em`), a2 === `svg`) return i2.style = { ...o2, ...c2 }, Object.assign(i2, u2), i2.innerHTML = nt(l2.body), n(`svg`, i2);
  let { body: d2, width: f2, height: p2 } = e2, m2 = a2 === `mask` || a2 !== `bg` && d2.indexOf(`currentColor`) !== -1, h2 = Ht(d2, { ...u2, width: f2 + ``, height: p2 + `` });
  return i2.style = { ...o2, "--svg": Gt(h2), width: en(u2.width), height: en(u2.height), ...Jt, ...m2 ? Yt : Xt, ...c2 }, n(`span`, i2);
};
if (ze(true), it(``, _t), typeof document < `u` && typeof window < `u`) {
  let e2 = window;
  if (e2.IconifyPreload !== void 0) {
    let t2 = e2.IconifyPreload, n2 = `Invalid IconifyPreload syntax.`;
    typeof t2 == `object` && t2 && (t2 instanceof Array ? t2 : [t2]).forEach((e3) => {
      try {
        (typeof e3 != `object` || !e3 || e3 instanceof Array || typeof e3.icons != `object` || typeof e3.prefix != `string` || !He(e3)) && console.error(n2);
      } catch {
        console.error(n2);
      }
    });
  }
  if (e2.IconifyProviders !== void 0) {
    let t2 = e2.IconifyProviders;
    if (typeof t2 == `object` && t2) for (let e3 in t2) {
      let n2 = `IconifyProviders[` + e3 + `] is invalid.`;
      try {
        let r2 = t2[e3];
        if (typeof r2 != `object` || !r2 || r2.resources === void 0) continue;
        ut(e3, r2) || console.error(n2);
      } catch {
        console.error(n2);
      }
    }
  }
}
var nn = { ...we, body: `` }, rn = S((e2, { emit: t2 }) => {
  let n2 = j(null);
  function r2() {
    n2.value && (n2.value = (n2.value.abort?.(), null));
  }
  let i2 = j(!!e2.ssr), a2 = j(``), o2 = ie(null);
  function c2() {
    let i3 = e2.icon;
    if (typeof i3 == `object` && i3 && typeof i3.body == `string`) return a2.value = ``, { data: i3 };
    let o3;
    if (typeof i3 != `string` || (o3 = ye(i3, false, true)) === null) return null;
    let s2 = Be(o3);
    if (!s2) {
      let e3 = n2.value;
      return (!e3 || e3.name !== i3) && (s2 === null ? n2.value = { name: i3 } : n2.value = { name: i3, abort: Lt([o3], l2) }), null;
    }
    r2(), a2.value !== i3 && (a2.value = i3, O(() => {
      t2(`load`, i3);
    }));
    let c3 = e2.customise;
    if (c3) {
      s2 = Object.assign({}, s2);
      let e3 = c3(s2.body, o3.name, o3.prefix, o3.provider);
      typeof e3 == `string` && (s2.body = e3);
    }
    let u2 = [`iconify`];
    return o3.prefix !== `` && u2.push(`iconify--` + o3.prefix), o3.provider !== `` && u2.push(`iconify--` + o3.provider), { data: s2, classes: u2 };
  }
  function l2() {
    let e3 = c2();
    e3 ? e3.data !== o2.value?.data && (o2.value = e3) : o2.value = null;
  }
  return i2.value ? l2() : m(() => {
    i2.value = true, l2();
  }), s(() => e2.icon, l2), g(r2), () => {
    let t3 = o2.value;
    if (!t3) return tn(nn, e2);
    let n3 = e2;
    return t3.classes && (n3 = { ...e2, class: t3.classes.join(` `) }), tn({ ...we, ...t3.data }, n3);
  };
}, { props: [`icon`, `mode`, `ssr`, `width`, `height`, `style`, `color`, `inline`, `rotate`, `hFlip`, `horizontalFlip`, `vFlip`, `verticalFlip`, `flip`, `id`, `ariaHidden`, `customise`, `title`], emits: [`load`] }), an = { ui: { colors: { primary: `indigo`, secondary: `blue`, success: `green`, info: `blue`, warning: `yellow`, error: `red`, neutral: `zinc` }, icons: { arrowDown: `i-lucide-arrow-down`, arrowLeft: `i-lucide-arrow-left`, arrowRight: `i-lucide-arrow-right`, arrowUp: `i-lucide-arrow-up`, caution: `i-lucide-circle-alert`, check: `i-lucide-check`, chevronDoubleLeft: `i-lucide-chevrons-left`, chevronDoubleRight: `i-lucide-chevrons-right`, chevronDown: `i-lucide-chevron-down`, chevronLeft: `i-lucide-chevron-left`, chevronRight: `i-lucide-chevron-right`, chevronUp: `i-lucide-chevron-up`, close: `i-lucide-x`, copy: `i-lucide-copy`, copyCheck: `i-lucide-copy-check`, dark: `i-lucide-moon`, drag: `i-lucide-grip-vertical`, ellipsis: `i-lucide-ellipsis`, error: `i-lucide-circle-x`, external: `i-lucide-arrow-up-right`, eye: `i-lucide-eye`, eyeOff: `i-lucide-eye-off`, file: `i-lucide-file`, folder: `i-lucide-folder`, folderOpen: `i-lucide-folder-open`, hash: `i-lucide-hash`, info: `i-lucide-info`, light: `i-lucide-sun`, loading: `i-lucide-loader-circle`, menu: `i-lucide-menu`, minus: `i-lucide-minus`, panelClose: `i-lucide-panel-left-close`, panelOpen: `i-lucide-panel-left-open`, plus: `i-lucide-plus`, reload: `i-lucide-rotate-ccw`, search: `i-lucide-search`, stop: `i-lucide-square`, star: `i-lucide-star`, success: `i-lucide-circle-check`, system: `i-lucide-monitor`, tip: `i-lucide-lightbulb`, upload: `i-lucide-upload`, warning: `i-lucide-triangle-alert` }, tv: { twMergeConfig: {} }, commandPalette: { slots: { root: `z-[10001]` } } }, colorMode: true, icon: {} }, on = v(an), H = () => on;
function sn(e2) {
  if (typeof e2 != `object` || !e2) return false;
  let t2 = Object.getPrototypeOf(e2);
  return t2 !== null && t2 !== Object.prototype && Object.getPrototypeOf(t2) !== null || Symbol.iterator in e2 ? false : Symbol.toStringTag in e2 ? Object.prototype.toString.call(e2) === `[object Module]` : true;
}
function cn(e2, t2, n2 = `.`, r2) {
  if (!sn(t2)) return cn(e2, {}, n2, r2);
  let i2 = { ...t2 };
  for (let t3 of Object.keys(e2)) {
    if (t3 === `__proto__` || t3 === `constructor`) continue;
    let a2 = e2[t3];
    a2 != null && (r2 && r2(i2, t3, a2, n2) || (Array.isArray(a2) && Array.isArray(i2[t3]) ? i2[t3] = [...a2, ...i2[t3]] : sn(a2) && sn(i2[t3]) ? i2[t3] = cn(a2, i2[t3], (n2 ? `${n2}.` : ``) + t3.toString(), r2) : i2[t3] = a2));
  }
  return i2;
}
function ln(e2) {
  return (...t2) => t2.reduce((t3, n2) => cn(t3, n2, ``, e2), {});
}
var un = ln();
function dn(e2) {
  return typeof e2 == `string` ? `'${e2}'` : new fn().serialize(e2);
}
var fn = (function() {
  var _e2;
  class e2 {
    constructor() {
      __privateAdd(this, _e2, /* @__PURE__ */ new Map());
    }
    compare(e3, t2) {
      let n2 = typeof e3, r2 = typeof t2;
      return n2 === `string` && r2 === `string` ? e3.localeCompare(t2) : n2 === `number` && r2 === `number` ? e3 - t2 : String.prototype.localeCompare.call(this.serialize(e3, true), this.serialize(t2, true));
    }
    serialize(e3, t2) {
      if (e3 === null) return `null`;
      switch (typeof e3) {
        case `string`:
          return t2 ? e3 : `'${e3}'`;
        case `bigint`:
          return `${e3}n`;
        case `object`:
          return this.$object(e3);
        case `function`:
          return this.$function(e3);
      }
      return String(e3);
    }
    serializeObject(e3) {
      let t2 = Object.prototype.toString.call(e3);
      if (t2 !== `[object Object]`) return this.serializeBuiltInType(t2.length < 10 ? `unknown:${t2}` : t2.slice(8, -1), e3);
      let n2 = e3.constructor, r2 = n2 === Object || n2 === void 0 ? `` : n2.name;
      if (r2 !== `` && globalThis[r2] === n2) return this.serializeBuiltInType(r2, e3);
      if (typeof e3.toJSON == `function`) {
        let t3 = e3.toJSON();
        return r2 + (typeof t3 == `object` && t3 ? this.$object(t3) : `(${this.serialize(t3)})`);
      }
      return this.serializeObjectEntries(r2, Object.entries(e3));
    }
    serializeBuiltInType(e3, t2) {
      let n2 = this[`$` + e3];
      if (n2) return n2.call(this, t2);
      if (typeof t2?.entries == `function`) return this.serializeObjectEntries(e3, t2.entries());
      throw Error(`Cannot serialize ${e3}`);
    }
    serializeObjectEntries(e3, t2) {
      let n2 = Array.from(t2).sort((e4, t3) => this.compare(e4[0], t3[0])), r2 = `${e3}{`;
      for (let e4 = 0; e4 < n2.length; e4++) {
        let [t3, i2] = n2[e4];
        r2 += `${this.serialize(t3, true)}:${this.serialize(i2)}`, e4 < n2.length - 1 && (r2 += `,`);
      }
      return r2 + `}`;
    }
    $object(e3) {
      let t2 = __privateGet(this, _e2).get(e3);
      return t2 === void 0 && (__privateGet(this, _e2).set(e3, `#${__privateGet(this, _e2).size}`), t2 = this.serializeObject(e3), __privateGet(this, _e2).set(e3, t2)), t2;
    }
    $function(e3) {
      let t2 = Function.prototype.toString.call(e3);
      return t2.slice(-15) === `[native code] }` ? `${e3.name || ``}()[native]` : `${e3.name}(${e3.length})${t2.replace(/\s*\n\s*/g, ``)}`;
    }
    $Array(e3) {
      let t2 = `[`;
      for (let n2 = 0; n2 < e3.length; n2++) t2 += this.serialize(e3[n2]), n2 < e3.length - 1 && (t2 += `,`);
      return t2 + `]`;
    }
    $Date(e3) {
      try {
        return `Date(${e3.toISOString()})`;
      } catch {
        return `Date(null)`;
      }
    }
    $ArrayBuffer(e3) {
      return `ArrayBuffer[${new Uint8Array(e3).join(`,`)}]`;
    }
    $Set(e3) {
      return `Set${this.$Array(Array.from(e3).sort((e4, t2) => this.compare(e4, t2)))}`;
    }
    $Map(e3) {
      return this.serializeObjectEntries(`Map`, e3.entries());
    }
  }
  _e2 = new WeakMap();
  for (let t2 of [`Error`, `RegExp`, `URL`]) e2.prototype[`$` + t2] = function(e3) {
    return `${t2}(${e3})`;
  };
  for (let t2 of [`Int8Array`, `Uint8Array`, `Uint8ClampedArray`, `Int16Array`, `Uint16Array`, `Int32Array`, `Uint32Array`, `Float32Array`, `Float64Array`]) e2.prototype[`$` + t2] = function(e3) {
    return `${t2}[${e3.join(`,`)}]`;
  };
  for (let t2 of [`BigInt64Array`, `BigUint64Array`]) e2.prototype[`$` + t2] = function(e3) {
    return `${t2}[${e3.join(`n,`)}${e3.length > 0 ? `n` : ``}]`;
  };
  return e2;
})();
function pn(e2, t2) {
  return e2 === t2 || dn(e2) === dn(t2);
}
function mn(e2, t2) {
  return hn(gn(e2), gn(t2));
}
function hn(e2, t2) {
  let n2 = [], r2 = /* @__PURE__ */ new Set([...Object.keys(e2.props || {}), ...Object.keys(t2.props || {})]);
  if (e2.props && t2.props) for (let i2 of r2) {
    let r3 = e2.props[i2], a2 = t2.props[i2];
    r3 && a2 ? n2.push(...hn(e2.props?.[i2], t2.props?.[i2])) : (r3 || a2) && n2.push(new _n((a2 || r3).key, r3 ? `removed` : `added`, a2, r3));
  }
  return r2.size === 0 && e2.hash !== t2.hash && n2.push(new _n((t2 || e2).key, `changed`, t2, e2)), n2;
}
function gn(e2, t2 = ``) {
  if (e2 && typeof e2 != `object`) return new vn(t2, e2, dn(e2));
  let n2 = {}, r2 = [];
  for (let i2 in e2) n2[i2] = gn(e2[i2], t2 ? `${t2}.${i2}` : i2), r2.push(n2[i2].hash);
  return new vn(t2, e2, `{${r2.join(`:`)}}`, n2);
}
var _n = class {
  constructor(e2, t2, n2, r2) {
    this.key = e2, this.type = t2, this.newValue = n2, this.oldValue = r2;
  }
  toString() {
    return this.toJSON();
  }
  toJSON() {
    switch (this.type) {
      case `added`:
        return `Added   \`${this.key}\``;
      case `removed`:
        return `Removed \`${this.key}\``;
      case `changed`:
        return `Changed \`${this.key}\` from \`${this.oldValue?.toString() || `-`}\` to \`${this.newValue.toString()}\``;
    }
  }
}, vn = class {
  constructor(e2, t2, n2, r2) {
    this.key = e2, this.value = t2, this.hash = n2, this.props = r2;
  }
  toString() {
    return this.props ? `{${Object.keys(this.props).join(`,`)}}` : JSON.stringify(this.value);
  }
  toJSON() {
    let e2 = this.key || `.`;
    return this.props ? `${e2}({${Object.keys(this.props).join(`,`)}})` : `${e2}(${this.value})`;
  }
};
String.fromCharCode;
var yn = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/, bn = /^[\s\w\0+.-]{2,}:([/\\]{2})?/, xn = /^([/\\]\s*){2,}[^/\\]/;
function Sn(e2, t2 = {}) {
  return typeof t2 == `boolean` && (t2 = { acceptRelative: t2 }), t2.strict ? yn.test(e2) : bn.test(e2) || (t2.acceptRelative ? xn.test(e2) : false);
}
function Cn(e2, t2) {
  let n2 = { ...e2 };
  for (let e3 of t2) delete n2[e3];
  return n2;
}
function U(e2, t2, n2) {
  typeof t2 == `string` && (t2 = t2.split(`.`).map((e3) => {
    let t3 = Number(e3);
    return Number.isNaN(t3) ? e3 : t3;
  }));
  let r2 = e2;
  for (let e3 of t2) {
    if (r2 == null) return n2;
    r2 = r2[e3];
  }
  return r2 === void 0 ? n2 : r2;
}
function wn(e2) {
  let t2 = Number.parseFloat(e2);
  return Number.isNaN(t2) ? e2 : t2;
}
function Tn(e2, t2, n2) {
  return e2 === void 0 || t2 === void 0 ? false : typeof e2 == `string` ? e2 === t2 : typeof n2 == `function` ? n2(e2, t2) : typeof n2 == `string` ? U(e2, n2) === U(t2, n2) : pn(e2, t2);
}
function En(e2) {
  if (e2 == null) return true;
  if (typeof e2 == `boolean` || typeof e2 == `number`) return false;
  if (typeof e2 == `string`) return e2.trim().length === 0;
  if (Array.isArray(e2)) return e2.length === 0;
  if (e2 instanceof Map || e2 instanceof Set) return e2.size === 0;
  if (e2 instanceof Date || e2 instanceof RegExp || typeof e2 == `function`) return false;
  if (typeof e2 == `object`) {
    for (let t2 in e2) if (Object.prototype.hasOwnProperty.call(e2, t2)) return false;
    return true;
  }
  return false;
}
function Dn(e2, t2, n2 = {}) {
  let { valueKey: r2, labelKey: i2, by: a2 } = n2, o2 = e2.find((e3) => Tn(typeof e3 == `object` && e3 && r2 ? U(e3, r2) : e3, t2, a2));
  if (En(t2) && o2) return i2 ? U(o2, i2) : void 0;
  if (En(t2)) return;
  let s2 = o2 ?? t2;
  if (s2 != null) return typeof s2 == `object` ? i2 ? U(s2, i2) : void 0 : String(s2);
}
function On(e2) {
  return Array.isArray(e2[0]);
}
function kn(e2, t2) {
  return !e2 && !t2 ? `` : [...Array.isArray(e2) ? e2 : [e2], t2].filter(Boolean);
}
function An(e2) {
  return e2.map((e3) => {
    if (!e3.children || typeof e3.children == `string`) return e3.children || ``;
    if (Array.isArray(e3.children)) return An(e3.children);
    if (e3.children.default) return An(e3.children.default());
  }).join(``);
}
function jn(e2, t2) {
  return Object.entries(e2).reduce((e3, [n2, r2]) => (e3[n2] = typeof r2 == `function` ? r2({ class: t2?.[n2] }) : r2, e3), { ...t2 || {} });
}
var Mn = typeof document < `u`, Nn = /#/g, Pn = /&/g, Fn = /\//g, In = /=/g, Ln = /\?/g, Rn = /\+/g, zn = /%5B/g, Bn = /%5D/g, Vn = /%5E/g, Hn = /%60/g, Un = /%7B/g, Wn = /%7C/g, Gn = /%7D/g, Kn = /%20/g;
function qn(e2) {
  return e2 == null ? `` : encodeURI(`` + e2).replace(Wn, `|`).replace(zn, `[`).replace(Bn, `]`);
}
function Jn(e2) {
  return qn(e2).replace(Un, `{`).replace(Gn, `}`).replace(Vn, `^`);
}
function Yn(e2) {
  return qn(e2).replace(Rn, `%2B`).replace(Kn, `+`).replace(Nn, `%23`).replace(Pn, `%26`).replace(Hn, "`").replace(Un, `{`).replace(Gn, `}`).replace(Vn, `^`);
}
function Xn(e2) {
  return Yn(e2).replace(In, `%3D`);
}
function Zn(e2) {
  return qn(e2).replace(Nn, `%23`).replace(Ln, `%3F`);
}
function Qn(e2) {
  return Zn(e2).replace(Fn, `%2F`);
}
function $n(e2) {
  if (e2 == null) return null;
  try {
    return decodeURIComponent(`` + e2);
  } catch {
  }
  return `` + e2;
}
var er = /\/$/, tr = (e2) => e2.replace(er, ``);
function nr(e2, t2, n2 = `/`) {
  let r2, i2 = {}, a2 = ``, o2 = ``, s2 = t2.indexOf(`#`), c2 = t2.indexOf(`?`);
  return c2 = s2 >= 0 && c2 > s2 ? -1 : c2, c2 >= 0 && (r2 = t2.slice(0, c2), a2 = t2.slice(c2, s2 > 0 ? s2 : t2.length), i2 = e2(a2.slice(1))), s2 >= 0 && (r2 || (r2 = t2.slice(0, s2)), o2 = t2.slice(s2, t2.length)), r2 = ur(r2 ?? t2, n2), { fullPath: r2 + a2 + o2, path: r2, query: i2, hash: $n(o2) };
}
function rr(e2, t2) {
  let n2 = t2.query ? e2(t2.query) : ``;
  return t2.path + (n2 && `?`) + n2 + (t2.hash || ``);
}
function ir(e2, t2) {
  return !t2 || !e2.toLowerCase().startsWith(t2.toLowerCase()) ? e2 : e2.slice(t2.length) || `/`;
}
function ar(e2, t2, n2) {
  let r2 = t2.matched.length - 1, i2 = n2.matched.length - 1;
  return r2 > -1 && r2 === i2 && or(t2.matched[r2], n2.matched[i2]) && sr(t2.params, n2.params) && e2(t2.query) === e2(n2.query) && t2.hash === n2.hash;
}
function or(e2, t2) {
  return (e2.aliasOf || e2) === (t2.aliasOf || t2);
}
function sr(e2, t2) {
  if (Object.keys(e2).length !== Object.keys(t2).length) return false;
  for (var n2 in e2) if (!cr(e2[n2], t2[n2])) return false;
  return true;
}
function cr(e2, t2) {
  return z(e2) ? lr(e2, t2) : z(t2) ? lr(t2, e2) : (e2 && e2.valueOf()) === (t2 && t2.valueOf());
}
function lr(e2, t2) {
  return z(t2) ? e2.length === t2.length && e2.every((e3, n2) => e3 === t2[n2]) : e2.length === 1 && e2[0] === t2;
}
function ur(e2, t2) {
  if (e2.startsWith(`/`)) return e2;
  if (!e2) return t2;
  let n2 = t2.split(`/`), r2 = e2.split(`/`), i2 = r2[r2.length - 1];
  (i2 === `..` || i2 === `.`) && r2.push(``);
  let a2 = n2.length - 1, o2, s2;
  for (o2 = 0; o2 < r2.length; o2++) if (s2 = r2[o2], s2 !== `.`) if (s2 === `..`) a2 > 1 && a2--;
  else break;
  return n2.slice(0, a2).join(`/`) + `/` + r2.slice(o2).join(`/`);
}
var W = { path: `/`, name: void 0, params: {}, query: {}, hash: ``, fullPath: `/`, matched: [], meta: {}, redirectedFrom: void 0 };
function dr(e2) {
  if (!e2) if (Mn) {
    let t2 = document.querySelector(`base`);
    e2 = t2 && t2.getAttribute(`href`) || `/`, e2 = e2.replace(/^\w+:\/\/[^/]+/, ``);
  } else e2 = `/`;
  return e2[0] !== `/` && e2[0] !== `#` && (e2 = `/` + e2), tr(e2);
}
var fr = /^[^#]+#/;
function pr(e2, t2) {
  return e2.replace(fr, `#`) + t2;
}
function mr(e2, t2) {
  let n2 = document.documentElement.getBoundingClientRect(), r2 = e2.getBoundingClientRect();
  return { behavior: t2.behavior, left: r2.left - n2.left - (t2.left || 0), top: r2.top - n2.top - (t2.top || 0) };
}
var hr = () => ({ left: window.scrollX, top: window.scrollY });
function gr(e2) {
  let t2;
  if (`el` in e2) {
    let n2 = e2.el, r2 = typeof n2 == `string` && n2.startsWith(`#`), i2 = typeof n2 == `string` ? r2 ? document.getElementById(n2.slice(1)) : document.querySelector(n2) : n2;
    if (!i2) return;
    t2 = mr(i2, e2);
  } else t2 = e2;
  `scrollBehavior` in document.documentElement.style ? window.scrollTo(t2) : window.scrollTo(t2.left == null ? window.scrollX : t2.left, t2.top == null ? window.scrollY : t2.top);
}
function _r(e2, t2) {
  return (history.state ? history.state.position - t2 : -1) + e2;
}
var vr = /* @__PURE__ */ new Map();
function yr(e2, t2) {
  vr.set(e2, t2);
}
function br(e2) {
  let t2 = vr.get(e2);
  return vr.delete(e2), t2;
}
function xr(e2) {
  return typeof e2 == `string` || e2 && typeof e2 == `object`;
}
function Sr(e2) {
  return typeof e2 == `string` || typeof e2 == `symbol`;
}
function Cr(e2) {
  let t2 = {};
  if (e2 === `` || e2 === `?`) return t2;
  let n2 = (e2[0] === `?` ? e2.slice(1) : e2).split(`&`);
  for (let e3 = 0; e3 < n2.length; ++e3) {
    let r2 = n2[e3].replace(Rn, ` `), i2 = r2.indexOf(`=`), a2 = $n(i2 < 0 ? r2 : r2.slice(0, i2)), o2 = i2 < 0 ? null : $n(r2.slice(i2 + 1));
    if (a2 in t2) {
      let e4 = t2[a2];
      z(e4) || (e4 = t2[a2] = [e4]), e4.push(o2);
    } else t2[a2] = o2;
  }
  return t2;
}
function wr(e2) {
  let t2 = ``;
  for (let n2 in e2) {
    let r2 = e2[n2];
    if (n2 = Xn(n2), r2 == null) {
      r2 !== void 0 && (t2 += (t2.length ? `&` : ``) + n2);
      continue;
    }
    (z(r2) ? r2.map((e3) => e3 && Yn(e3)) : [r2 && Yn(r2)]).forEach((e3) => {
      e3 !== void 0 && (t2 += (t2.length ? `&` : ``) + n2, e3 != null && (t2 += `=` + e3));
    });
  }
  return t2;
}
function Tr(e2) {
  let t2 = {};
  for (let n2 in e2) {
    let r2 = e2[n2];
    r2 !== void 0 && (t2[n2] = z(r2) ? r2.map((e3) => e3 == null ? null : `` + e3) : r2 == null ? r2 : `` + r2);
  }
  return t2;
}
function Er() {
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
function Dr(e2, t2, n2) {
  let r2 = e2.value;
  if (!r2) return;
  let i2 = r2, a2 = () => {
    i2[t2].delete(n2);
  };
  g(a2), te(a2), T(() => {
    let r3 = e2.value;
    r3 && (i2 = r3), i2[t2].add(n2);
  }), i2[t2].add(n2);
}
function Or(e2) {
  Dr(c(R, {}), `leaveGuards`, e2);
}
function G(e2, t2, n2, r2, i2, a2 = (e3) => e3()) {
  let o2 = r2 && (r2.enterCallbacks[i2] = r2.enterCallbacks[i2] || []);
  return () => new Promise((s2, c2) => {
    let l2 = (e3) => {
      e3 === false ? c2(me(4, { from: n2, to: t2 })) : e3 instanceof Error ? c2(e3) : xr(e3) ? c2(me(2, { from: t2, to: e3 })) : (o2 && r2.enterCallbacks[i2] === o2 && typeof e3 == `function` && o2.push(e3), s2());
    }, u2 = a2(() => e2.call(r2 && r2.instances[i2], t2, n2, l2)), d2 = Promise.resolve(u2);
    e2.length < 3 && (d2 = d2.then(l2)), d2.catch((e3) => c2(e3));
  });
}
function kr(e2, t2, n2, r2, i2 = (e3) => e3()) {
  let a2 = [];
  for (let o2 of e2) for (let e3 in o2.components) {
    let s2 = o2.components[e3];
    if (!(t2 !== `beforeRouteEnter` && !o2.instances[e3])) if (he(s2)) {
      let c2 = (s2.__vccOpts || s2)[t2];
      c2 && a2.push(G(c2, n2, r2, o2, e3, i2));
    } else {
      let c2 = s2();
      a2.push(() => c2.then((a3) => {
        if (!a3) throw Error(`Couldn't resolve component "${e3}" at "${o2.path}"`);
        let s3 = L(a3) ? a3.default : a3;
        o2.mods[e3] = a3, o2.components[e3] = s3;
        let c3 = (s3.__vccOpts || s3)[t2];
        return c3 && G(c3, n2, r2, o2, e3, i2)();
      }));
    }
  }
  return a2;
}
function Ar(e2, t2) {
  let n2 = [], r2 = [], i2 = [], a2 = Math.max(t2.matched.length, e2.matched.length);
  for (let o2 = 0; o2 < a2; o2++) {
    let a3 = t2.matched[o2];
    a3 && (e2.matched.find((e3) => or(e3, a3)) ? r2.push(a3) : n2.push(a3));
    let s2 = e2.matched[o2];
    s2 && (t2.matched.find((e3) => or(e3, s2)) || i2.push(s2));
  }
  return [n2, r2, i2];
}
var jr = () => location.protocol + `//` + location.host;
function Mr(e2, t2) {
  let { pathname: n2, search: r2, hash: i2 } = t2, a2 = e2.indexOf(`#`);
  if (a2 > -1) {
    let t3 = i2.includes(e2.slice(a2)) ? e2.slice(a2).length : 1, n3 = i2.slice(t3);
    return n3[0] !== `/` && (n3 = `/` + n3), ir(n3, ``);
  }
  return ir(n2, e2) + r2 + i2;
}
function Nr(e2, t2, n2, r2) {
  let i2 = [], a2 = [], o2 = null, s2 = ({ state: a3 }) => {
    let s3 = Mr(e2, location), c3 = n2.value, l3 = t2.value, u3 = 0;
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
      e3.replaceState(B({}, e3.state, { scroll: hr() }), ``);
    }
  }
  function d2() {
    for (let e3 of a2) e3();
    a2 = [], window.removeEventListener(`popstate`, s2), window.removeEventListener(`pagehide`, u2), document.removeEventListener(`visibilitychange`, u2);
  }
  return window.addEventListener(`popstate`, s2), window.addEventListener(`pagehide`, u2), document.addEventListener(`visibilitychange`, u2), { pauseListeners: c2, listen: l2, destroy: d2 };
}
function Pr(e2, t2, n2, r2 = false, i2 = false) {
  return { back: e2, current: t2, forward: n2, replaced: r2, position: window.history.length, scroll: i2 ? hr() : null };
}
function Fr(e2) {
  let { history: t2, location: n2 } = window, r2 = { value: Mr(e2, n2) }, i2 = { value: t2.state };
  i2.value || a2(r2.value, { back: null, current: r2.value, forward: null, position: t2.length - 1, replaced: true, scroll: null }, true);
  function a2(r3, a3, o3) {
    let s3 = e2.indexOf(`#`), c2 = s3 > -1 ? (n2.host && document.querySelector(`base`) ? e2 : e2.slice(s3)) + r3 : jr() + e2 + r3;
    try {
      t2[o3 ? `replaceState` : `pushState`](a3, ``, c2), i2.value = a3;
    } catch (e3) {
      console.error(e3), n2[o3 ? `replace` : `assign`](c2);
    }
  }
  function o2(e3, n3) {
    a2(e3, B({}, t2.state, Pr(i2.value.back, e3, i2.value.forward, true), n3, { position: i2.value.position }), true), r2.value = e3;
  }
  function s2(e3, n3) {
    let o3 = B({}, i2.value, t2.state, { forward: e3, scroll: hr() });
    a2(o3.current, o3, true), a2(e3, B({}, Pr(r2.value, e3, null), { position: o3.position + 1 }, n3), false), r2.value = e3;
  }
  return { location: r2, state: i2, push: s2, replace: o2 };
}
function Ir(e2) {
  e2 = dr(e2);
  let t2 = Fr(e2), n2 = Nr(e2, t2.state, t2.location, t2.replace);
  function r2(e3, t3 = true) {
    t3 || n2.pauseListeners(), history.go(e3);
  }
  let i2 = B({ location: ``, base: e2, go: r2, createHref: pr.bind(null, e2) }, t2, n2);
  return Object.defineProperty(i2, "location", { enumerable: true, get: () => t2.location.value }), Object.defineProperty(i2, "state", { enumerable: true, get: () => t2.state.value }), i2;
}
var Lr = { type: 0, value: `` }, Rr = /[a-zA-Z0-9_]/;
function zr(e2) {
  if (!e2) return [[]];
  if (e2 === `/`) return [[Lr]];
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
      c2 === `(` ? n2 = 2 : Rr.test(c2) ? f2() : (d2(), n2 = 0, c2 !== `*` && c2 !== `?` && c2 !== `+` && s2--);
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
var Br = `[^/]+?`, Vr = { sensitive: false, strict: false, start: true, end: true }, Hr = /[.+*?^${}()[\]/\\]/g;
function Ur(e2, t2) {
  let n2 = B({}, Vr, t2), r2 = [], i2 = n2.start ? `^` : ``, a2 = [];
  for (let t3 of e2) {
    let e3 = t3.length ? [] : [90];
    n2.strict && !t3.length && (i2 += `/`);
    for (let r3 = 0; r3 < t3.length; r3++) {
      let o3 = t3[r3], s3 = 40 + (n2.sensitive ? 0.25 : 0);
      if (o3.type === 0) r3 || (i2 += `/`), i2 += o3.value.replace(Hr, `\\$&`), s3 += 40;
      else if (o3.type === 1) {
        let { value: e4, repeatable: n3, optional: c3, regexp: l2 } = o3;
        a2.push({ name: e4, repeatable: n3, optional: c3 });
        let u2 = l2 || Br;
        if (u2 !== Br) {
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
        if (z(c3) && !o3) throw Error(`Provided param "${a3}" is an array but it is not repeatable (* or + modifiers)`);
        let l2 = z(c3) ? c3.join(`/`) : c3;
        if (!l2) if (s3) i3.length < 2 && (n3.endsWith(`/`) ? n3 = n3.slice(0, -1) : r3 = true);
        else throw Error(`Missing required param "${a3}"`);
        n3 += l2;
      }
    }
    return n3 || `/`;
  }
  return { re: o2, score: r2, keys: a2, parse: s2, stringify: c2 };
}
function Wr(e2, t2) {
  let n2 = 0;
  for (; n2 < e2.length && n2 < t2.length; ) {
    let r2 = t2[n2] - e2[n2];
    if (r2) return r2;
    n2++;
  }
  return e2.length < t2.length ? e2.length === 1 && e2[0] === 80 ? -1 : 1 : e2.length > t2.length ? t2.length === 1 && t2[0] === 80 ? 1 : -1 : 0;
}
function Gr(e2, t2) {
  let n2 = 0, r2 = e2.score, i2 = t2.score;
  for (; n2 < r2.length && n2 < i2.length; ) {
    let e3 = Wr(r2[n2], i2[n2]);
    if (e3) return e3;
    n2++;
  }
  if (Math.abs(i2.length - r2.length) === 1) {
    if (Kr(r2)) return 1;
    if (Kr(i2)) return -1;
  }
  return i2.length - r2.length;
}
function Kr(e2) {
  let t2 = e2[e2.length - 1];
  return e2.length > 0 && t2[t2.length - 1] < 0;
}
var qr = { strict: false, end: true, sensitive: false };
function Jr(e2, t2, n2) {
  let r2 = B(Ur(zr(e2.path), n2), { record: e2, parent: t2, children: [], alias: [] });
  return t2 && !r2.record.aliasOf == !t2.record.aliasOf && t2.children.push(r2), r2;
}
function Yr(e2, t2) {
  let n2 = [], r2 = /* @__PURE__ */ new Map();
  t2 = de(qr, t2);
  function i2(e3) {
    return r2.get(e3);
  }
  function a2(e3, n3, r3) {
    let i3 = !r3, s3 = Zr(e3);
    s3.aliasOf = r3 && r3.record;
    let l3 = de(t2, e3), u3 = [s3];
    if (`alias` in e3) {
      let t3 = typeof e3.alias == `string` ? [e3.alias] : e3.alias;
      for (let e4 of t3) u3.push(Zr(B({}, s3, { components: r3 ? r3.record.components : s3.components, path: e4, aliasOf: r3 ? r3.record : s3 })));
    }
    let d2, f2;
    for (let t3 of u3) {
      let { path: u4 } = t3;
      if (n3 && u4[0] !== `/`) {
        let e4 = n3.record.path, r4 = e4[e4.length - 1] === `/` ? `` : `/`;
        t3.path = n3.record.path + (u4 && r4 + u4);
      }
      if (d2 = Jr(t3, n3, l3), r3 ? r3.alias.push(d2) : (f2 || (f2 = d2), f2 !== d2 && f2.alias.push(d2), i3 && e3.name && !$r(d2) && o2(e3.name)), ri(d2) && c2(d2), s3.children) {
        let e4 = s3.children;
        for (let t4 = 0; t4 < e4.length; t4++) a2(e4[t4], d2, r3 && r3.children[t4]);
      }
      r3 || (r3 = d2);
    }
    return f2 ? () => {
      o2(f2);
    } : _e;
  }
  function o2(e3) {
    if (Sr(e3)) {
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
    let t3 = ti(e3, n2);
    n2.splice(t3, 0, e3), e3.record.name && !$r(e3) && r2.set(e3.record.name, e3);
  }
  function l2(e3, t3) {
    let i3, a3 = {}, o3, s3;
    if (`name` in e3 && e3.name) {
      if (i3 = r2.get(e3.name), !i3) throw me(1, { location: e3 });
      s3 = i3.record.name, a3 = B(Xr(t3.params, i3.keys.filter((e4) => !e4.optional).concat(i3.parent ? i3.parent.keys.filter((e4) => e4.optional) : []).map((e4) => e4.name)), e3.params && Xr(e3.params, i3.keys.map((e4) => e4.name))), o3 = i3.stringify(a3);
    } else if (e3.path != null) o3 = e3.path, i3 = n2.find((e4) => e4.re.test(o3)), i3 && (a3 = i3.parse(o3), s3 = i3.record.name, i3.keys.forEach((e4) => {
      e4.optional && !a3[e4.name] && delete a3[e4.name];
    }));
    else {
      if (i3 = t3.name ? r2.get(t3.name) : n2.find((e4) => e4.re.test(t3.path)), !i3) throw me(1, { location: e3, currentLocation: t3 });
      s3 = i3.record.name, a3 = B({}, t3.params, e3.params), o3 = i3.stringify(a3);
    }
    let c3 = [], l3 = i3;
    for (; l3; ) c3.unshift(l3.record), l3 = l3.parent;
    return { name: s3, path: o3, params: a3, matched: c3, meta: ei(c3) };
  }
  e2.forEach((e3) => a2(e3));
  function u2() {
    n2.length = 0, r2.clear();
  }
  return { addRoute: a2, resolve: l2, removeRoute: o2, clearRoutes: u2, getRoutes: s2, getRecordMatcher: i2 };
}
function Xr(e2, t2) {
  let n2 = {};
  for (let r2 of t2) r2 in e2 && (n2[r2] = e2[r2]);
  return n2;
}
function Zr(e2) {
  let t2 = { path: e2.path, redirect: e2.redirect, name: e2.name, meta: e2.meta || {}, aliasOf: e2.aliasOf, beforeEnter: e2.beforeEnter, props: Qr(e2), children: e2.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: `components` in e2 ? e2.components || null : e2.component && { default: e2.component } };
  return Object.defineProperty(t2, "mods", { value: {} }), t2;
}
function Qr(e2) {
  let t2 = {}, n2 = e2.props || false;
  if (`component` in e2) t2.default = n2;
  else for (let r2 in e2.components) t2[r2] = typeof n2 == `object` ? n2[r2] : n2;
  return t2;
}
function $r(e2) {
  for (; e2; ) {
    if (e2.record.aliasOf) return true;
    e2 = e2.parent;
  }
  return false;
}
function ei(e2) {
  return e2.reduce((e3, t2) => B(e3, t2.meta), {});
}
function ti(e2, t2) {
  let n2 = 0, r2 = t2.length;
  for (; n2 !== r2; ) {
    let i3 = n2 + r2 >> 1;
    Gr(e2, t2[i3]) < 0 ? r2 = i3 : n2 = i3 + 1;
  }
  let i2 = ni(e2);
  return i2 && (r2 = t2.lastIndexOf(i2, r2 - 1)), r2;
}
function ni(e2) {
  let t2 = e2;
  for (; t2 = t2.parent; ) if (ri(t2) && Gr(e2, t2) === 0) return t2;
}
function ri({ record: e2 }) {
  return !!(e2.name || e2.components && Object.keys(e2.components).length || e2.redirect);
}
function ii(e2) {
  let t2 = c(le), n2 = c(ce), r2 = _(() => {
    let n3 = d(e2.to);
    return t2.resolve(n3);
  }), i2 = _(() => {
    let { matched: e3 } = r2.value, { length: t3 } = e3, i3 = e3[t3 - 1], a3 = n2.matched;
    if (!i3 || !a3.length) return -1;
    let o3 = a3.findIndex(or.bind(null, i3));
    if (o3 > -1) return o3;
    let s3 = li(e3[t3 - 2]);
    return t3 > 1 && li(i3) === s3 && a3[a3.length - 1].path !== s3 ? a3.findIndex(or.bind(null, e3[t3 - 2])) : o3;
  }), a2 = _(() => i2.value > -1 && ci(n2.params, r2.value.params)), o2 = _(() => i2.value > -1 && i2.value === n2.matched.length - 1 && sr(n2.params, r2.value.params));
  function s2(n3 = {}) {
    if (si(n3)) {
      let n4 = t2[d(e2.replace) ? `replace` : `push`](d(e2.to)).catch(_e);
      return e2.viewTransition && typeof document < `u` && `startViewTransition` in document && document.startViewTransition(() => n4), n4;
    }
    return Promise.resolve();
  }
  return { route: r2, href: _(() => r2.value.href), isActive: a2, isExactActive: o2, navigate: s2 };
}
function ai(e2) {
  return e2.length === 1 ? e2[0] : e2;
}
var oi = S({ name: `RouterLink`, compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: `page` }, viewTransition: Boolean }, useLink: ii, setup(e2, { slots: t2 }) {
  let r2 = v(ii(e2)), { options: i2 } = c(le), a2 = _(() => ({ [ui(e2.activeClass, i2.linkActiveClass, `router-link-active`)]: r2.isActive, [ui(e2.exactActiveClass, i2.linkExactActiveClass, `router-link-exact-active`)]: r2.isExactActive }));
  return () => {
    let i3 = t2.default && ai(t2.default(r2));
    return e2.custom ? i3 : n(`a`, { "aria-current": r2.isExactActive ? e2.ariaCurrentValue : null, href: r2.href, onClick: r2.navigate, class: a2.value }, i3);
  };
} });
function si(e2) {
  if (!(e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey) && !e2.defaultPrevented && !(e2.button !== void 0 && e2.button !== 0)) {
    if (e2.currentTarget && e2.currentTarget.getAttribute) {
      let t2 = e2.currentTarget.getAttribute(`target`);
      if (/\b_blank\b/i.test(t2)) return;
    }
    return e2.preventDefault && e2.preventDefault(), true;
  }
}
function ci(e2, t2) {
  for (let n2 in t2) {
    let r2 = t2[n2], i2 = e2[n2];
    if (typeof r2 == `string`) {
      if (r2 !== i2) return false;
    } else if (!z(i2) || i2.length !== r2.length || r2.some((e3, t3) => e3.valueOf() !== i2[t3].valueOf())) return false;
  }
  return true;
}
function li(e2) {
  return e2 ? e2.aliasOf ? e2.aliasOf.path : e2.path : ``;
}
var ui = (e2, t2, n2) => e2 ?? t2 ?? n2, di = S({ name: `RouterView`, inheritAttrs: false, props: { name: { type: String, default: `default` }, route: Object }, compatConfig: { MODE: 3 }, setup(e2, { attrs: t2, slots: r2 }) {
  let i2 = c(pe), a2 = _(() => e2.route || i2.value), o2 = c(ue, 0), l2 = _(() => {
    let e3 = d(o2), { matched: t3 } = a2.value, n2;
    for (; (n2 = t3[e3]) && !n2.components; ) e3++;
    return e3;
  }), u2 = _(() => a2.value.matched[l2.value]);
  y(ue, _(() => l2.value + 1)), y(R, u2), y(pe, a2);
  let f2 = j();
  return s(() => [f2.value, u2.value, e2.name], ([e3, t3, n2], [r3, i3, a3]) => {
    t3 && (t3.instances[n2] = e3, i3 && i3 !== t3 && e3 && e3 === r3 && (t3.leaveGuards.size || (t3.leaveGuards = i3.leaveGuards), t3.updateGuards.size || (t3.updateGuards = i3.updateGuards))), e3 && t3 && (!i3 || !or(t3, i3) || !r3) && (t3.enterCallbacks[n2] || []).forEach((t4) => t4(e3));
  }, { flush: `post` }), () => {
    let i3 = a2.value, o3 = e2.name, s2 = u2.value, c2 = s2 && s2.components[o3];
    if (!c2) return fi(r2.default, { Component: c2, route: i3 });
    let l3 = s2.props[o3], d2 = n(c2, B({}, l3 ? l3 === true ? i3.params : typeof l3 == `function` ? l3(i3) : l3 : null, t2, { onVnodeUnmounted: (e3) => {
      e3.component.isUnmounted && (s2.instances[o3] = null);
    }, ref: f2 }));
    return fi(r2.default, { Component: d2, route: i3 }) || d2;
  };
} });
function fi(e2, t2) {
  if (!e2) return null;
  let n2 = e2(t2);
  return n2.length === 1 ? n2[0] : n2;
}
var pi = di;
function mi(e2) {
  let t2 = Yr(e2.routes, e2), n2 = e2.parseQuery || Cr, r2 = e2.stringifyQuery || wr, i2 = e2.history, a2 = Er(), o2 = Er(), s2 = Er(), c2 = ie(W), l2 = W;
  Mn && e2.scrollBehavior && `scrollRestoration` in history && (history.scrollRestoration = `manual`);
  let u2 = ge.bind(null, (e3) => `` + e3), f2 = ge.bind(null, Qn), p2 = ge.bind(null, $n);
  function m2(e3, n3) {
    let r3, i3;
    return Sr(e3) ? (r3 = t2.getRecordMatcher(e3), i3 = n3) : i3 = e3, t2.addRoute(i3, r3);
  }
  function h2(e3) {
    let n3 = t2.getRecordMatcher(e3);
    n3 && t2.removeRoute(n3);
  }
  function g2() {
    return t2.getRoutes().map((e3) => e3.record);
  }
  function _2(e3) {
    return !!t2.getRecordMatcher(e3);
  }
  function v2(e3, a3) {
    if (a3 = B({}, a3 || c2.value), typeof e3 == `string`) {
      let r3 = nr(n2, e3, a3.path), o4 = t2.resolve({ path: r3.path }, a3), s4 = i2.createHref(r3.fullPath);
      return B(r3, o4, { params: p2(o4.params), redirectedFrom: void 0, href: s4 });
    }
    let o3;
    if (e3.path != null) o3 = B({}, e3, { path: nr(n2, e3.path, a3.path).path });
    else {
      let t3 = B({}, e3.params);
      for (let e4 in t3) t3[e4] ?? delete t3[e4];
      o3 = B({}, e3, { params: f2(t3) }), a3.params = f2(a3.params);
    }
    let s3 = t2.resolve(o3, a3), l3 = e3.hash || ``;
    s3.params = u2(p2(s3.params));
    let d2 = rr(r2, B({}, e3, { hash: Jn(l3), path: s3.path })), m3 = i2.createHref(d2);
    return B({ fullPath: d2, hash: l3, query: r2 === wr ? Tr(e3.query) : e3.query || {} }, s3, { redirectedFrom: void 0, href: m3 });
  }
  function y2(e3) {
    return typeof e3 == `string` ? nr(n2, e3, c2.value.path) : B({}, e3);
  }
  function b2(e3, t3) {
    if (l2 !== e3) return me(8, { from: t3, to: e3 });
  }
  function x2(e3) {
    return w2(e3);
  }
  function S2(e3) {
    return x2(B(y2(e3), { replace: true }));
  }
  function C2(e3, t3) {
    let n3 = e3.matched[e3.matched.length - 1];
    if (n3 && n3.redirect) {
      let { redirect: r3 } = n3, i3 = typeof r3 == `function` ? r3(e3, t3) : r3;
      return typeof i3 == `string` && (i3 = i3.includes(`?`) || i3.includes(`#`) ? i3 = y2(i3) : { path: i3 }, i3.params = {}), B({ query: e3.query, hash: e3.hash, params: i3.path == null ? e3.params : {} }, i3);
    }
  }
  function w2(e3, t3) {
    let n3 = l2 = v2(e3), i3 = c2.value, a3 = e3.state, o3 = e3.force, s3 = e3.replace === true, u3 = C2(n3, i3);
    if (u3) return w2(B(y2(u3), { state: typeof u3 == `object` ? B({}, a3, u3.state) : a3, force: o3, replace: s3 }), t3 || n3);
    let d2 = n3;
    d2.redirectedFrom = t3;
    let f3;
    return !o3 && ar(r2, i3, n3) && (f3 = me(16, { to: d2, from: i3 }), F2(i3, i3, true, false)), (f3 ? Promise.resolve(f3) : te2(d2, i3)).catch((e4) => V(e4) ? V(e4, 2) ? e4 : P2(e4) : M2(e4, d2, i3)).then((e4) => {
      if (e4) {
        if (V(e4, 2)) return w2(B({ replace: s3 }, y2(e4.to), { state: typeof e4.to == `object` ? B({}, a3, e4.to.state) : a3, force: o3 }), t3 || d2);
      } else e4 = ne2(d2, i3, true, s3, a3);
      return E2(d2, i3, e4), e4;
    });
  }
  function T2(e3, t3) {
    let n3 = b2(e3, t3);
    return n3 ? Promise.reject(n3) : Promise.resolve();
  }
  function ee2(e3) {
    let t3 = se2.values().next().value;
    return t3 && typeof t3.runWithContext == `function` ? t3.runWithContext(e3) : e3();
  }
  function te2(e3, t3) {
    let n3, [r3, i3, s3] = Ar(e3, t3);
    n3 = kr(r3.reverse(), `beforeRouteLeave`, e3, t3);
    for (let i4 of r3) i4.leaveGuards.forEach((r4) => {
      n3.push(G(r4, e3, t3));
    });
    let c3 = T2.bind(null, e3, t3);
    return n3.push(c3), R2(n3).then(() => {
      n3 = [];
      for (let r4 of a2.list()) n3.push(G(r4, e3, t3));
      return n3.push(c3), R2(n3);
    }).then(() => {
      n3 = kr(i3, `beforeRouteUpdate`, e3, t3);
      for (let r4 of i3) r4.updateGuards.forEach((r5) => {
        n3.push(G(r5, e3, t3));
      });
      return n3.push(c3), R2(n3);
    }).then(() => {
      n3 = [];
      for (let r4 of s3) if (r4.beforeEnter) if (z(r4.beforeEnter)) for (let i4 of r4.beforeEnter) n3.push(G(i4, e3, t3));
      else n3.push(G(r4.beforeEnter, e3, t3));
      return n3.push(c3), R2(n3);
    }).then(() => (e3.matched.forEach((e4) => e4.enterCallbacks = {}), n3 = kr(s3, `beforeRouteEnter`, e3, t3, ee2), n3.push(c3), R2(n3))).then(() => {
      n3 = [];
      for (let r4 of o2.list()) n3.push(G(r4, e3, t3));
      return n3.push(c3), R2(n3);
    }).catch((e4) => V(e4, 8) ? e4 : Promise.reject(e4));
  }
  function E2(e3, t3, n3) {
    s2.list().forEach((r3) => ee2(() => r3(e3, t3, n3)));
  }
  function ne2(e3, t3, n3, r3, a3) {
    let o3 = b2(e3, t3);
    if (o3) return o3;
    let s3 = t3 === W, l3 = Mn ? history.state : {};
    n3 && (r3 || s3 ? i2.replace(e3.fullPath, B({ scroll: s3 && l3 && l3.scroll }, a3)) : i2.push(e3.fullPath, a3)), c2.value = e3, F2(e3, t3, n3, s3), P2();
  }
  let D2;
  function k2() {
    D2 || (D2 = i2.listen((e3, t3, n3) => {
      if (!L2.listening) return;
      let r3 = v2(e3), a3 = C2(r3, L2.currentRoute.value);
      if (a3) {
        w2(B(a3, { replace: true, force: true }), r3).catch(_e);
        return;
      }
      l2 = r3;
      let o3 = c2.value;
      Mn && yr(_r(o3.fullPath, n3.delta), hr()), te2(r3, o3).catch((e4) => V(e4, 12) ? e4 : V(e4, 2) ? (w2(B(y2(e4.to), { force: true }), r3).then((e5) => {
        V(e5, 20) && !n3.delta && n3.type === `pop` && i2.go(-1, false);
      }).catch(_e), Promise.reject()) : (n3.delta && i2.go(-n3.delta, false), M2(e4, r3, o3))).then((e4) => {
        e4 || (e4 = ne2(r3, o3, false)), e4 && (n3.delta && !V(e4, 8) ? i2.go(-n3.delta, false) : n3.type === `pop` && V(e4, 20) && i2.go(-1, false)), E2(r3, o3, e4);
      }).catch(_e);
    }));
  }
  let A2 = Er(), j2 = Er(), re2;
  function M2(e3, t3, n3) {
    P2(e3);
    let r3 = j2.list();
    return r3.length ? r3.forEach((r4) => r4(e3, t3, n3)) : console.error(e3), Promise.reject(e3);
  }
  function N2() {
    return re2 && c2.value !== W ? Promise.resolve() : new Promise((e3, t3) => {
      A2.add([e3, t3]);
    });
  }
  function P2(e3) {
    return re2 || (re2 = !e3, k2(), A2.list().forEach(([t3, n3]) => e3 ? n3(e3) : t3()), A2.reset()), e3;
  }
  function F2(t3, n3, r3, i3) {
    let { scrollBehavior: a3 } = e2;
    if (!Mn || !a3) return Promise.resolve();
    let o3 = !r3 && br(_r(t3.fullPath, 0)) || (i3 || !r3) && history.state && history.state.scroll || null;
    return O().then(() => a3(t3, n3, o3)).then((e3) => t3 === c2.value && e3 && gr(e3)).catch((e3) => t3 === c2.value && M2(e3, t3, n3));
  }
  let I2 = (e3) => i2.go(e3), oe2, se2 = /* @__PURE__ */ new Set(), L2 = { currentRoute: c2, listening: true, addRoute: m2, removeRoute: h2, clearRoutes: t2.clearRoutes, hasRoute: _2, getRoutes: g2, resolve: v2, options: e2, push: x2, replace: S2, go: I2, back: () => I2(-1), forward: () => I2(1), beforeEach: a2.add, beforeResolve: o2.add, afterEach: s2.add, onError: j2.add, isReady: N2, install(e3) {
    e3.component(`RouterLink`, oi), e3.component(`RouterView`, pi), e3.config.globalProperties.$router = L2, Object.defineProperty(e3.config.globalProperties, "$route", { enumerable: true, get: () => d(c2) }), Mn && !oe2 && c2.value === W && (oe2 = true, x2(i2.location).catch((e4) => {
    }));
    let t3 = {};
    for (let e4 in W) Object.defineProperty(t3, e4, { get: () => c2.value[e4], enumerable: true });
    e3.provide(le, L2), e3.provide(ce, ae(t3)), e3.provide(pe, c2);
    let n3 = e3.unmount;
    se2.add(e3), e3.unmount = function() {
      se2.delete(e3), se2.size < 1 && (l2 = W, D2 && D2(), D2 = null, c2.value = W, oe2 = false, re2 = false), n3();
    };
  } };
  function R2(e3) {
    return e3.reduce((e4, t3) => e4.then(() => ee2(t3)), Promise.resolve());
  }
  return L2;
}
function hi(e2, t2) {
  let n2 = typeof e2 == `string` && !t2 ? `${e2}Context` : t2, r2 = Symbol(n2);
  return [(t3) => {
    let n3 = c(r2, t3);
    if (n3 || n3 === null) return n3;
    throw Error(`Injection \`${r2.toString()}\` not found. Component must be used within ${Array.isArray(e2) ? `one of the following components: ${e2.join(`, `)}` : `\`${e2}\``}`);
  }, (e3) => (y(r2, e3), e3)];
}
function gi(e2) {
  return e2 ? e2.flatMap((e3) => e3.type === ee ? gi(e3.children) : [e3]) : [];
}
function _i(e2) {
  let t2 = l(), n2 = t2?.type.emits, r2 = {};
  return n2?.length || console.warn(`No emitted event found. Please check component: ${t2?.type.__name}`), n2?.forEach((t3) => {
    r2[w(x(t3))] = (...n3) => e2(t3, ...n3);
  }), r2;
}
function vi(e2) {
  let t2 = l(), n2 = Object.keys(t2?.type.props ?? {}).reduce((e3, n3) => {
    let r3 = (t2?.type.props[n3]).default;
    return r3 !== void 0 && (e3[n3] = r3), e3;
  }, {}), r2 = re(e2);
  return _(() => {
    let e3 = {}, i2 = t2?.vnode.props ?? {};
    return Object.keys(i2).forEach((t3) => {
      e3[x(t3)] = i2[t3];
    }), Object.keys({ ...n2, ...e3 }).reduce((e4, t3) => (r2.value[t3] !== void 0 && (e4[t3] = r2.value[t3]), e4), {});
  });
}
var yi = S({ name: `PrimitiveSlot`, inheritAttrs: false, setup(e2, { attrs: t2, slots: n2 }) {
  return () => {
    if (!n2.default) return null;
    let e3 = gi(n2.default()), r2 = e3.findIndex((e4) => e4.type !== ne);
    if (r2 === -1) return e3;
    let i2 = e3[r2];
    delete i2.props?.ref;
    let a2 = i2.props ? h(t2, i2.props) : t2, o2 = b({ ...i2, props: {} }, a2);
    return e3.length === 1 ? o2 : (e3[r2] = o2, e3);
  };
} }), bi = [`area`, `img`, `input`], xi = S({ name: `Primitive`, inheritAttrs: false, props: { asChild: { type: Boolean, default: false }, as: { type: [String, Object], default: `div` } }, setup(e2, { attrs: t2, slots: r2 }) {
  let i2 = e2.asChild ? `template` : e2.as;
  return typeof i2 == `string` && bi.includes(i2) ? () => n(i2, t2) : i2 === `template` ? () => n(yi, t2, { default: r2.default }) : () => n(e2.as, t2, { default: r2.default });
} }), [Si, Ci] = hi(`UTheme`, `RootContext`), wi = { defaults: _(() => ({})) };
function Ti(e2 = wi) {
  return Si(e2);
}
function Ei(e2) {
  return e2.replace(/-(\w)/g, (e3, t2) => t2.toUpperCase());
}
function Di(e2) {
  return e2.replace(/[A-Z]/g, (e3) => `-${e3.toLowerCase()}`);
}
function Oi(e2, t2) {
  return !e2 || !e2.props ? false : e2.props[Ei(t2)] !== void 0 || e2.props[Di(t2)] !== void 0;
}
function ki(e2, t2) {
  let n2 = l(), { defaults: r2 } = Ti(), i2 = H();
  return new Proxy(t2, { get(t3, a2, o2) {
    if (a2 === `__v_isReactive`) return true;
    if (a2 === `__v_raw`) return t3;
    let s2 = Reflect.get(t3, a2, o2);
    if (typeof a2 != `string`) return s2;
    let c2 = e2.includes(`.`) ? U(r2.value, e2) : r2.value[e2];
    if (a2 === `ui`) {
      let e3 = c2?.ui;
      return !s2 && !e3 ? s2 : un(s2 ?? {}, e3 ?? {});
    }
    if (n2 && Oi(n2.vnode, a2)) return s2;
    let l2 = c2?.[a2];
    if (l2 !== void 0) return l2;
    let u2 = (e2.includes(`.`) ? U(i2.ui ?? {}, e2) : i2.ui?.[e2])?.defaultVariants?.[a2];
    if (u2 !== void 0) return u2;
    let d2 = n2?.type?.props?.[a2];
    if (d2 && Object.prototype.hasOwnProperty.call(d2, `default`)) return s2;
  }, has: (e3, t3) => Reflect.has(e3, t3), ownKeys: (e3) => Reflect.ownKeys(e3), getOwnPropertyDescriptor: (e3, t3) => Reflect.getOwnPropertyDescriptor(e3, t3) });
}
function Ai(e2, t2) {
  let n2 = t2 ? _i(t2) : {};
  return _(() => {
    let t3 = k(e2) ? e2.value : e2, r2 = { ...n2 };
    for (let e3 in t3) {
      let n3 = t3[e3];
      n3 !== void 0 && (r2[e3] = n3);
    }
    return r2;
  });
}
var ji = /\s+/g, Mi = (e2) => typeof e2 != `string` || !e2 ? e2 : e2.replace(ji, ` `).trim(), Ni = (...e2) => {
  let t2 = [], n2 = (e3) => {
    if (!e3 && e3 !== 0 && e3 !== 0n) return;
    if (Array.isArray(e3)) {
      for (let t3 = 0, r3 = e3.length; t3 < r3; t3++) n2(e3[t3]);
      return;
    }
    let r2 = typeof e3;
    if (r2 === `string` || r2 === `number` || r2 === `bigint`) {
      if (r2 === `number` && e3 !== e3) return;
      t2.push(String(e3));
    } else if (r2 === `object`) {
      let n3 = Object.keys(e3);
      for (let r3 = 0, i2 = n3.length; r3 < i2; r3++) {
        let i3 = n3[r3];
        e3[i3] && t2.push(i3);
      }
    }
  };
  for (let t3 = 0, r2 = e2.length; t3 < r2; t3++) {
    let r3 = e2[t3];
    r3 != null && n2(r3);
  }
  return t2.length > 0 ? Mi(t2.join(` `)) : void 0;
}, Pi = (e2) => e2 === false ? `false` : e2 === true ? `true` : e2 === 0 ? `0` : e2, K = (e2) => {
  if (!e2 || typeof e2 != `object`) return true;
  for (let t2 in e2) return false;
  return true;
}, Fi = (e2, t2) => {
  if (e2 === t2) return true;
  if (!e2 || !t2) return false;
  let n2 = Object.keys(e2), r2 = Object.keys(t2);
  if (n2.length !== r2.length) return false;
  for (let i2 = 0; i2 < n2.length; i2++) {
    let a2 = n2[i2];
    if (!r2.includes(a2) || e2[a2] !== t2[a2]) return false;
  }
  return true;
}, Ii = (e2, t2) => {
  for (let n2 in t2) if (Object.prototype.hasOwnProperty.call(t2, n2)) {
    let r2 = t2[n2];
    n2 in e2 ? e2[n2] = Ni(e2[n2], r2) : e2[n2] = r2;
  }
  return e2;
}, Li = (e2, t2) => {
  for (let n2 = 0; n2 < e2.length; n2++) {
    let r2 = e2[n2];
    Array.isArray(r2) ? Li(r2, t2) : r2 && t2.push(r2);
  }
}, Ri = (...e2) => {
  let t2 = [];
  Li(e2, t2);
  let n2 = [];
  for (let e3 = 0; e3 < t2.length; e3++) t2[e3] && n2.push(t2[e3]);
  return n2;
}, zi = (e2, t2) => {
  let n2 = {};
  for (let r2 in e2) {
    let i2 = e2[r2];
    if (r2 in t2) {
      let e3 = t2[r2];
      Array.isArray(i2) || Array.isArray(e3) ? n2[r2] = Ri(e3, i2) : typeof i2 == `object` && typeof e3 == `object` && i2 && e3 ? n2[r2] = zi(i2, e3) : n2[r2] = e3 + ` ` + i2;
    } else n2[r2] = i2;
  }
  for (let r2 in t2) r2 in e2 || (n2[r2] = t2[r2]);
  return n2;
}, Bi = { twMerge: true, twMergeConfig: {} };
function Vi() {
  let e2 = null, t2 = {}, n2 = false;
  return { get cachedTwMerge() {
    return e2;
  }, set cachedTwMerge(t3) {
    e2 = t3;
  }, get cachedTwMergeConfig() {
    return t2;
  }, set cachedTwMergeConfig(e3) {
    t2 = e3;
  }, get didTwMergeConfigChange() {
    return n2;
  }, set didTwMergeConfigChange(e3) {
    n2 = e3;
  }, reset() {
    e2 = null, t2 = {}, n2 = false;
  } };
}
var q = Vi(), Hi = (e2) => {
  let t2 = (t3, n2) => {
    let { extend: r2 = null, slots: i2 = {}, variants: a2 = {}, compoundVariants: o2 = [], compoundSlots: s2 = [], defaultVariants: c2 = {} } = t3, l2 = { ...Bi, ...n2 }, u2 = r2?.base ? Ni(r2.base, t3?.base) : t3?.base, d2 = r2?.variants && !K(r2.variants) ? zi(a2, r2.variants) : a2, f2 = r2?.defaultVariants && !K(r2.defaultVariants) ? { ...r2.defaultVariants, ...c2 } : c2;
    !K(l2.twMergeConfig) && !Fi(l2.twMergeConfig, q.cachedTwMergeConfig) && (q.didTwMergeConfigChange = true, q.cachedTwMergeConfig = l2.twMergeConfig);
    let p2 = K(r2?.slots), m2 = K(i2) ? {} : { base: Ni(t3?.base, p2 && r2?.base), ...i2 }, h2 = p2 ? m2 : Ii({ ...r2?.slots }, K(m2) ? { base: t3?.base } : m2), g2 = K(r2?.compoundVariants) ? o2 : Ri(r2?.compoundVariants, o2), _2 = (t4) => {
      if (K(d2) && K(i2) && p2) return e2(u2, t4?.class, t4?.className)(l2);
      if (g2 && !Array.isArray(g2)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof g2}`);
      if (s2 && !Array.isArray(s2)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s2}`);
      let n3 = (e3, n4 = d2, r4 = null, i3 = null) => {
        let a4 = n4[e3];
        if (!a4 || K(a4)) return null;
        let o4 = i3?.[e3] ?? t4?.[e3];
        if (o4 === null) return null;
        let s3 = Pi(o4);
        if (typeof s3 == `object`) return null;
        let c4 = f2?.[e3];
        return a4[(s3 ?? Pi(c4)) || `false`];
      }, r3 = () => {
        if (!d2) return null;
        let e3 = Object.keys(d2), t5 = [];
        for (let r4 = 0; r4 < e3.length; r4++) {
          let i3 = n3(e3[r4], d2);
          i3 && t5.push(i3);
        }
        return t5;
      }, a3 = (e3, t5) => {
        if (!d2 || typeof d2 != `object`) return null;
        let r4 = [];
        for (let i3 in d2) {
          let a4 = n3(i3, d2, e3, t5), o4 = e3 === `base` && typeof a4 == `string` ? a4 : a4 && a4[e3];
          o4 && r4.push(o4);
        }
        return r4;
      }, o3 = {};
      for (let e3 in t4) {
        let n4 = t4[e3];
        n4 !== void 0 && (o3[e3] = n4);
      }
      let c3 = (e3, n4) => {
        let r4 = typeof t4?.[e3] == `object` ? { [e3]: t4[e3]?.initial } : {};
        return { ...f2, ...o3, ...r4, ...n4 };
      }, m3 = (e3 = [], t5) => {
        let n4 = [], r4 = e3.length;
        for (let i3 = 0; i3 < r4; i3++) {
          let { class: r5, className: a4, ...o4 } = e3[i3], s3 = true, l3 = c3(null, t5);
          for (let e4 in o4) {
            let t6 = o4[e4], n5 = l3[e4];
            if (Array.isArray(t6)) {
              if (!t6.includes(n5)) {
                s3 = false;
                break;
              }
            } else {
              if ((t6 == null || t6 === false) && (n5 == null || n5 === false)) continue;
              if (n5 !== t6) {
                s3 = false;
                break;
              }
            }
          }
          s3 && (r5 && n4.push(r5), a4 && n4.push(a4));
        }
        return n4;
      }, _3 = (t5) => {
        let n4 = m3(g2, t5);
        if (!Array.isArray(n4)) return n4;
        let r4 = {}, i3 = e2;
        for (let e3 = 0; e3 < n4.length; e3++) {
          let t6 = n4[e3];
          if (typeof t6 == `string`) r4.base = i3(r4.base, t6)(l2);
          else if (typeof t6 == `object`) for (let e4 in t6) r4[e4] = i3(r4[e4], t6[e4])(l2);
        }
        return r4;
      }, v2 = (e3) => {
        if (s2.length < 1) return null;
        let t5 = {}, n4 = c3(null, e3);
        for (let e4 = 0; e4 < s2.length; e4++) {
          let { slots: r4 = [], class: i3, className: a4, ...o4 } = s2[e4];
          if (!K(o4)) {
            let e5 = true;
            for (let t6 in o4) {
              let r5 = n4[t6], i4 = o4[t6];
              if (r5 === void 0 || (Array.isArray(i4) ? !i4.includes(r5) : i4 !== r5)) {
                e5 = false;
                break;
              }
            }
            if (!e5) continue;
          }
          for (let e5 = 0; e5 < r4.length; e5++) {
            let n5 = r4[e5];
            t5[n5] || (t5[n5] = []), t5[n5].push([i3, a4]);
          }
        }
        return t5;
      };
      if (!K(i2) || !p2) {
        let t5 = {};
        if (typeof h2 == `object` && !K(h2)) {
          let n4 = e2;
          for (let e3 in h2) t5[e3] = (t6) => {
            let r4 = _3(t6), i3 = v2(t6);
            return n4(h2[e3], a3(e3, t6), r4 ? r4[e3] : void 0, i3 ? i3[e3] : void 0, t6?.class, t6?.className)(l2);
          };
        }
        return t5;
      }
      return e2(u2, r3(), m3(g2), t4?.class, t4?.className)(l2);
    };
    return _2.variantKeys = (() => {
      if (!(!d2 || typeof d2 != `object`)) return Object.keys(d2);
    })(), _2.extend = r2, _2.base = u2, _2.slots = h2, _2.variants = d2, _2.defaultVariants = f2, _2.compoundSlots = s2, _2.compoundVariants = g2, _2;
  };
  return { tv: t2, createTV: (e3) => (n2, r2) => t2(n2, r2 ? zi(e3, r2) : e3) };
}, Ui = (e2, t2) => {
  let n2 = Array(e2.length + t2.length);
  for (let t3 = 0; t3 < e2.length; t3++) n2[t3] = e2[t3];
  for (let r2 = 0; r2 < t2.length; r2++) n2[e2.length + r2] = t2[r2];
  return n2;
}, Wi = (e2, t2) => ({ classGroupId: e2, validator: t2 }), Gi = (e2 = /* @__PURE__ */ new Map(), t2 = null, n2) => ({ nextPart: e2, validators: t2, classGroupId: n2 }), Ki = `-`, qi = [], Ji = `arbitrary..`, Yi = (e2) => {
  let t2 = Qi(e2), { conflictingClassGroups: n2, conflictingClassGroupModifiers: r2 } = e2;
  return { getClassGroupId: (e3) => {
    if (e3.startsWith(`[`) && e3.endsWith(`]`)) return Zi(e3);
    let n3 = e3.split(Ki);
    return Xi(n3, +(n3[0] === `` && n3.length > 1), t2);
  }, getConflictingClassGroupIds: (e3, t3) => {
    if (t3) {
      let t4 = r2[e3], i2 = n2[e3];
      return t4 ? i2 ? Ui(i2, t4) : t4 : i2 || qi;
    }
    return n2[e3] || qi;
  } };
}, Xi = (e2, t2, n2) => {
  if (e2.length - t2 === 0) return n2.classGroupId;
  let r2 = e2[t2], i2 = n2.nextPart.get(r2);
  if (i2) {
    let n3 = Xi(e2, t2 + 1, i2);
    if (n3) return n3;
  }
  let a2 = n2.validators;
  if (a2 === null) return;
  let o2 = t2 === 0 ? e2.join(Ki) : e2.slice(t2).join(Ki), s2 = a2.length;
  for (let e3 = 0; e3 < s2; e3++) {
    let t3 = a2[e3];
    if (t3.validator(o2)) return t3.classGroupId;
  }
}, Zi = (e2) => e2.slice(1, -1).indexOf(`:`) === -1 ? void 0 : (() => {
  let t2 = e2.slice(1, -1), n2 = t2.indexOf(`:`), r2 = t2.slice(0, n2);
  return r2 ? Ji + r2 : void 0;
})(), Qi = (e2) => {
  let { theme: t2, classGroups: n2 } = e2;
  return $i(n2, t2);
}, $i = (e2, t2) => {
  let n2 = Gi();
  for (let r2 in e2) {
    let i2 = e2[r2];
    ea(i2, n2, r2, t2);
  }
  return n2;
}, ea = (e2, t2, n2, r2) => {
  let i2 = e2.length;
  for (let a2 = 0; a2 < i2; a2++) {
    let i3 = e2[a2];
    ta(i3, t2, n2, r2);
  }
}, ta = (e2, t2, n2, r2) => {
  if (typeof e2 == `string`) {
    na(e2, t2, n2);
    return;
  }
  if (typeof e2 == `function`) {
    ra(e2, t2, n2, r2);
    return;
  }
  ia(e2, t2, n2, r2);
}, na = (e2, t2, n2) => {
  let r2 = e2 === `` ? t2 : aa(t2, e2);
  r2.classGroupId = n2;
}, ra = (e2, t2, n2, r2) => {
  if (oa(e2)) {
    ea(e2(r2), t2, n2, r2);
    return;
  }
  t2.validators === null && (t2.validators = []), t2.validators.push(Wi(n2, e2));
}, ia = (e2, t2, n2, r2) => {
  let i2 = Object.entries(e2), a2 = i2.length;
  for (let e3 = 0; e3 < a2; e3++) {
    let [a3, o2] = i2[e3];
    ea(o2, aa(t2, a3), n2, r2);
  }
}, aa = (e2, t2) => {
  let n2 = e2, r2 = t2.split(Ki), i2 = r2.length;
  for (let e3 = 0; e3 < i2; e3++) {
    let t3 = r2[e3], i3 = n2.nextPart.get(t3);
    i3 || (i3 = Gi(), n2.nextPart.set(t3, i3)), n2 = i3;
  }
  return n2;
}, oa = (e2) => `isThemeGetter` in e2 && e2.isThemeGetter === true, sa = (e2) => {
  if (e2 < 1) return { get: () => void 0, set: () => {
  } };
  let t2 = 0, n2 = /* @__PURE__ */ Object.create(null), r2 = /* @__PURE__ */ Object.create(null), i2 = (i3, a2) => {
    n2[i3] = a2, t2++, t2 > e2 && (t2 = 0, r2 = n2, n2 = /* @__PURE__ */ Object.create(null));
  };
  return { get(e3) {
    let t3 = n2[e3];
    if (t3 !== void 0) return t3;
    if ((t3 = r2[e3]) !== void 0) return i2(e3, t3), t3;
  }, set(e3, t3) {
    e3 in n2 ? n2[e3] = t3 : i2(e3, t3);
  } };
}, ca = `!`, la = `:`, ua = [], da = (e2, t2, n2, r2, i2) => ({ modifiers: e2, hasImportantModifier: t2, baseClassName: n2, maybePostfixModifierPosition: r2, isExternal: i2 }), fa = (e2) => {
  let { prefix: t2, experimentalParseClassName: n2 } = e2, r2 = (e3) => {
    let t3 = [], n3 = 0, r3 = 0, i2 = 0, a2, o2 = e3.length;
    for (let s3 = 0; s3 < o2; s3++) {
      let o3 = e3[s3];
      if (n3 === 0 && r3 === 0) {
        if (o3 === la) {
          t3.push(e3.slice(i2, s3)), i2 = s3 + 1;
          continue;
        }
        if (o3 === `/`) {
          a2 = s3;
          continue;
        }
      }
      o3 === `[` ? n3++ : o3 === `]` ? n3-- : o3 === `(` ? r3++ : o3 === `)` && r3--;
    }
    let s2 = t3.length === 0 ? e3 : e3.slice(i2), c2 = s2, l2 = false;
    s2.endsWith(ca) ? (c2 = s2.slice(0, -1), l2 = true) : s2.startsWith(ca) && (c2 = s2.slice(1), l2 = true);
    let u2 = a2 && a2 > i2 ? a2 - i2 : void 0;
    return da(t3, l2, c2, u2);
  };
  if (t2) {
    let e3 = t2 + la, n3 = r2;
    r2 = (t3) => t3.startsWith(e3) ? n3(t3.slice(e3.length)) : da(ua, false, t3, void 0, true);
  }
  if (n2) {
    let e3 = r2;
    r2 = (t3) => n2({ className: t3, parseClassName: e3 });
  }
  return r2;
}, pa = (e2) => {
  let t2 = /* @__PURE__ */ new Map();
  return e2.orderSensitiveModifiers.forEach((e3, n2) => {
    t2.set(e3, 1e6 + n2);
  }), (e3) => {
    let n2 = [], r2 = [];
    for (let i2 = 0; i2 < e3.length; i2++) {
      let a2 = e3[i2], o2 = a2[0] === `[`, s2 = t2.has(a2);
      o2 || s2 ? (r2.length > 0 && (r2.sort(), n2.push(...r2), r2 = []), n2.push(a2)) : r2.push(a2);
    }
    return r2.length > 0 && (r2.sort(), n2.push(...r2)), n2;
  };
}, ma = (e2) => ({ cache: sa(e2.cacheSize), parseClassName: fa(e2), sortModifiers: pa(e2), postfixLookupClassGroupIds: ha(e2), ...Yi(e2) }), ha = (e2) => {
  let t2 = /* @__PURE__ */ Object.create(null), n2 = e2.postfixLookupClassGroups;
  if (n2) for (let e3 = 0; e3 < n2.length; e3++) t2[n2[e3]] = true;
  return t2;
}, ga = /\s+/, _a = (e2, t2) => {
  let { parseClassName: n2, getClassGroupId: r2, getConflictingClassGroupIds: i2, sortModifiers: a2, postfixLookupClassGroupIds: o2 } = t2, s2 = [], c2 = e2.trim().split(ga), l2 = ``;
  for (let e3 = c2.length - 1; e3 >= 0; --e3) {
    let t3 = c2[e3], { isExternal: u2, modifiers: d2, hasImportantModifier: f2, baseClassName: p2, maybePostfixModifierPosition: m2 } = n2(t3);
    if (u2) {
      l2 = t3 + (l2.length > 0 ? ` ` + l2 : l2);
      continue;
    }
    let h2 = !!m2, g2;
    if (h2) {
      g2 = r2(p2.substring(0, m2));
      let e4 = g2 && o2[g2] ? r2(p2) : void 0;
      e4 && e4 !== g2 && (g2 = e4, h2 = false);
    } else g2 = r2(p2);
    if (!g2) {
      if (!h2) {
        l2 = t3 + (l2.length > 0 ? ` ` + l2 : l2);
        continue;
      }
      if (g2 = r2(p2), !g2) {
        l2 = t3 + (l2.length > 0 ? ` ` + l2 : l2);
        continue;
      }
      h2 = false;
    }
    let _2 = d2.length === 0 ? `` : d2.length === 1 ? d2[0] : a2(d2).join(`:`), v2 = f2 ? _2 + ca : _2, y2 = v2 + g2;
    if (s2.indexOf(y2) > -1) continue;
    s2.push(y2);
    let b2 = i2(g2, h2);
    for (let e4 = 0; e4 < b2.length; ++e4) {
      let t4 = b2[e4];
      s2.push(v2 + t4);
    }
    l2 = t3 + (l2.length > 0 ? ` ` + l2 : l2);
  }
  return l2;
}, va = (...e2) => {
  let t2 = 0, n2, r2, i2 = ``;
  for (; t2 < e2.length; ) (n2 = e2[t2++]) && (r2 = ya(n2)) && (i2 && (i2 += ` `), i2 += r2);
  return i2;
}, ya = (e2) => {
  if (typeof e2 == `string`) return e2;
  let t2, n2 = ``;
  for (let r2 = 0; r2 < e2.length; r2++) e2[r2] && (t2 = ya(e2[r2])) && (n2 && (n2 += ` `), n2 += t2);
  return n2;
}, ba = (e2, ...t2) => {
  let n2, r2, i2, a2, o2 = (o3) => (n2 = ma(t2.reduce((e3, t3) => t3(e3), e2())), r2 = n2.cache.get, i2 = n2.cache.set, a2 = s2, s2(o3)), s2 = (e3) => {
    let t3 = r2(e3);
    if (t3) return t3;
    let a3 = _a(e3, n2);
    return i2(e3, a3), a3;
  };
  return a2 = o2, (...e3) => a2(va(...e3));
}, xa = [], J = (e2) => {
  let t2 = (t3) => t3[e2] || xa;
  return t2.isThemeGetter = true, t2;
}, Sa = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ca = /^\((?:(\w[\w-]*):)?(.+)\)$/i, wa = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Ta = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ea = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Da = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Oa = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ka = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Aa = (e2) => wa.test(e2), Y = (e2) => !!e2 && !Number.isNaN(Number(e2)), X = (e2) => !!e2 && Number.isInteger(Number(e2)), ja = (e2) => e2.endsWith(`%`) && Y(e2.slice(0, -1)), Z = (e2) => Ta.test(e2), Ma = () => true, Na = (e2) => Ea.test(e2) && !Da.test(e2), Pa = () => false, Fa = (e2) => Oa.test(e2), Ia = (e2) => ka.test(e2), La = (e2) => !Q(e2) && !$(e2), Ra = (e2) => e2.startsWith(`@container`) && (e2[10] === `/` && e2[11] !== void 0 || e2[11] === `s` && e2[16] !== void 0 && e2.startsWith(`-size/`, 10) || e2[11] === `n` && e2[18] !== void 0 && e2.startsWith(`-normal/`, 10)), za = (e2) => eo(e2, io, Pa), Q = (e2) => Sa.test(e2), Ba = (e2) => eo(e2, ao, Na), Va = (e2) => eo(e2, oo, Y), Ha = (e2) => eo(e2, co, Ma), Ua = (e2) => eo(e2, so, Pa), Wa = (e2) => eo(e2, no, Pa), Ga = (e2) => eo(e2, ro, Ia), Ka = (e2) => eo(e2, lo, Fa), $ = (e2) => Ca.test(e2), qa = (e2) => to(e2, ao), Ja = (e2) => to(e2, so), Ya = (e2) => to(e2, no), Xa = (e2) => to(e2, io), Za = (e2) => to(e2, ro), Qa = (e2) => to(e2, lo, true), $a = (e2) => to(e2, co, true), eo = (e2, t2, n2) => {
  let r2 = Sa.exec(e2);
  return r2 ? r2[1] ? t2(r2[1]) : n2(r2[2]) : false;
}, to = (e2, t2, n2 = false) => {
  let r2 = Ca.exec(e2);
  return r2 ? r2[1] ? t2(r2[1]) : n2 : false;
}, no = (e2) => e2 === `position` || e2 === `percentage`, ro = (e2) => e2 === `image` || e2 === `url`, io = (e2) => e2 === `length` || e2 === `size` || e2 === `bg-size`, ao = (e2) => e2 === `length`, oo = (e2) => e2 === `number`, so = (e2) => e2 === `family-name`, co = (e2) => e2 === `number` || e2 === `weight`, lo = (e2) => e2 === `shadow`, uo = () => {
  let e2 = J(`color`), t2 = J(`font`), n2 = J(`text`), r2 = J(`font-weight`), i2 = J(`tracking`), a2 = J(`leading`), o2 = J(`breakpoint`), s2 = J(`container`), c2 = J(`spacing`), l2 = J(`radius`), u2 = J(`shadow`), d2 = J(`inset-shadow`), f2 = J(`text-shadow`), p2 = J(`drop-shadow`), m2 = J(`blur`), h2 = J(`perspective`), g2 = J(`aspect`), _2 = J(`ease`), v2 = J(`animate`), y2 = () => [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`], b2 = () => [`center`, `top`, `bottom`, `left`, `right`, `top-left`, `left-top`, `top-right`, `right-top`, `bottom-right`, `right-bottom`, `bottom-left`, `left-bottom`], x2 = () => [...b2(), $, Q], S2 = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`], C2 = () => [`auto`, `contain`, `none`], w2 = () => [$, Q, c2], T2 = () => [Aa, `full`, `auto`, ...w2()], ee2 = () => [X, `none`, `subgrid`, $, Q], te2 = () => [`auto`, { span: [`full`, X, $, Q] }, X, $, Q], E2 = () => [X, `auto`, $, Q], ne2 = () => [`auto`, `min`, `max`, `fr`, $, Q], D2 = () => [`start`, `end`, `center`, `between`, `around`, `evenly`, `stretch`, `baseline`, `center-safe`, `end-safe`], O2 = () => [`start`, `end`, `center`, `stretch`, `center-safe`, `end-safe`], k2 = () => [`auto`, ...w2()], A2 = () => [Aa, `auto`, `full`, `dvw`, `dvh`, `lvw`, `lvh`, `svw`, `svh`, `min`, `max`, `fit`, ...w2()], j2 = () => [Aa, `screen`, `full`, `dvw`, `lvw`, `svw`, `min`, `max`, `fit`, ...w2()], re2 = () => [Aa, `screen`, `full`, `lh`, `dvh`, `lvh`, `svh`, `min`, `max`, `fit`, ...w2()], M2 = () => [e2, $, Q], ie2 = () => [...b2(), Ya, Wa, { position: [$, Q] }], N2 = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }], P2 = () => [`auto`, `cover`, `contain`, Xa, za, { size: [$, Q] }], ae2 = () => [ja, qa, Ba], F2 = () => [``, `none`, `full`, l2, $, Q], I2 = () => [``, Y, qa, Ba], oe2 = () => [`solid`, `dashed`, `dotted`, `double`], se2 = () => [`normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`], L2 = () => [Y, ja, Ya, Wa], R2 = () => [``, `none`, m2, $, Q], ce2 = () => [`none`, Y, $, Q], le2 = () => [`none`, Y, $, Q], ue2 = () => [Y, $, Q], z2 = () => [Aa, `full`, ...w2()];
  return { cacheSize: 500, theme: { animate: [`spin`, `ping`, `pulse`, `bounce`], aspect: [`video`], blur: [Z], breakpoint: [Z], color: [Ma], container: [Z], "drop-shadow": [Z], ease: [`in`, `out`, `in-out`], font: [La], "font-weight": [`thin`, `extralight`, `light`, `normal`, `medium`, `semibold`, `bold`, `extrabold`, `black`], "inset-shadow": [Z], leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`], perspective: [`dramatic`, `near`, `normal`, `midrange`, `distant`, `none`], radius: [Z], shadow: [Z], spacing: [`px`, Y], text: [Z], "text-shadow": [Z], tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`] }, classGroups: { aspect: [{ aspect: [`auto`, `square`, Aa, Q, $, g2] }], container: [`container`], "container-type": [{ "@container": [``, `normal`, `size`, $, Q] }], "container-named": [Ra], columns: [{ columns: [Y, Q, $, s2] }], "break-after": [{ "break-after": y2() }], "break-before": [{ "break-before": y2() }], "break-inside": [{ "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] }], "box-decoration": [{ "box-decoration": [`slice`, `clone`] }], box: [{ box: [`border`, `content`] }], display: [`block`, `inline-block`, `inline`, `flex`, `inline-flex`, `table`, `inline-table`, `table-caption`, `table-cell`, `table-column`, `table-column-group`, `table-footer-group`, `table-header-group`, `table-row-group`, `table-row`, `flow-root`, `grid`, `inline-grid`, `contents`, `list-item`, `hidden`], sr: [`sr-only`, `not-sr-only`], float: [{ float: [`right`, `left`, `none`, `start`, `end`] }], clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }], isolation: [`isolate`, `isolation-auto`], "object-fit": [{ object: [`contain`, `cover`, `fill`, `none`, `scale-down`] }], "object-position": [{ object: x2() }], overflow: [{ overflow: S2() }], "overflow-x": [{ "overflow-x": S2() }], "overflow-y": [{ "overflow-y": S2() }], overscroll: [{ overscroll: C2() }], "overscroll-x": [{ "overscroll-x": C2() }], "overscroll-y": [{ "overscroll-y": C2() }], position: [`static`, `fixed`, `absolute`, `relative`, `sticky`], inset: [{ inset: T2() }], "inset-x": [{ "inset-x": T2() }], "inset-y": [{ "inset-y": T2() }], start: [{ "inset-s": T2(), start: T2() }], end: [{ "inset-e": T2(), end: T2() }], "inset-bs": [{ "inset-bs": T2() }], "inset-be": [{ "inset-be": T2() }], top: [{ top: T2() }], right: [{ right: T2() }], bottom: [{ bottom: T2() }], left: [{ left: T2() }], visibility: [`visible`, `invisible`, `collapse`], z: [{ z: [X, `auto`, $, Q] }], basis: [{ basis: [Aa, `full`, `auto`, s2, ...w2()] }], "flex-direction": [{ flex: [`row`, `row-reverse`, `col`, `col-reverse`] }], "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }], flex: [{ flex: [Y, Aa, `auto`, `initial`, `none`, Q] }], grow: [{ grow: [``, Y, $, Q] }], shrink: [{ shrink: [``, Y, $, Q] }], order: [{ order: [X, `first`, `last`, `none`, $, Q] }], "grid-cols": [{ "grid-cols": ee2() }], "col-start-end": [{ col: te2() }], "col-start": [{ "col-start": E2() }], "col-end": [{ "col-end": E2() }], "grid-rows": [{ "grid-rows": ee2() }], "row-start-end": [{ row: te2() }], "row-start": [{ "row-start": E2() }], "row-end": [{ "row-end": E2() }], "grid-flow": [{ "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] }], "auto-cols": [{ "auto-cols": ne2() }], "auto-rows": [{ "auto-rows": ne2() }], gap: [{ gap: w2() }], "gap-x": [{ "gap-x": w2() }], "gap-y": [{ "gap-y": w2() }], "justify-content": [{ justify: [...D2(), `normal`] }], "justify-items": [{ "justify-items": [...O2(), `normal`] }], "justify-self": [{ "justify-self": [`auto`, ...O2()] }], "align-content": [{ content: [`normal`, ...D2()] }], "align-items": [{ items: [...O2(), { baseline: [``, `last`] }] }], "align-self": [{ self: [`auto`, ...O2(), { baseline: [``, `last`] }] }], "place-content": [{ "place-content": D2() }], "place-items": [{ "place-items": [...O2(), `baseline`] }], "place-self": [{ "place-self": [`auto`, ...O2()] }], p: [{ p: w2() }], px: [{ px: w2() }], py: [{ py: w2() }], ps: [{ ps: w2() }], pe: [{ pe: w2() }], pbs: [{ pbs: w2() }], pbe: [{ pbe: w2() }], pt: [{ pt: w2() }], pr: [{ pr: w2() }], pb: [{ pb: w2() }], pl: [{ pl: w2() }], m: [{ m: k2() }], mx: [{ mx: k2() }], my: [{ my: k2() }], ms: [{ ms: k2() }], me: [{ me: k2() }], mbs: [{ mbs: k2() }], mbe: [{ mbe: k2() }], mt: [{ mt: k2() }], mr: [{ mr: k2() }], mb: [{ mb: k2() }], ml: [{ ml: k2() }], "space-x": [{ "space-x": w2() }], "space-x-reverse": [`space-x-reverse`], "space-y": [{ "space-y": w2() }], "space-y-reverse": [`space-y-reverse`], size: [{ size: A2() }], "inline-size": [{ inline: [`auto`, ...j2()] }], "min-inline-size": [{ "min-inline": [`auto`, ...j2()] }], "max-inline-size": [{ "max-inline": [`none`, ...j2()] }], "block-size": [{ block: [`auto`, ...re2()] }], "min-block-size": [{ "min-block": [`auto`, ...re2()] }], "max-block-size": [{ "max-block": [`none`, ...re2()] }], w: [{ w: [s2, `screen`, ...A2()] }], "min-w": [{ "min-w": [s2, `screen`, `none`, ...A2()] }], "max-w": [{ "max-w": [s2, `screen`, `none`, `prose`, { screen: [o2] }, ...A2()] }], h: [{ h: [`screen`, `lh`, ...A2()] }], "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...A2()] }], "max-h": [{ "max-h": [`screen`, `lh`, ...A2()] }], "font-size": [{ text: [`base`, n2, qa, Ba] }], "font-smoothing": [`antialiased`, `subpixel-antialiased`], "font-style": [`italic`, `not-italic`], "font-weight": [{ font: [r2, $a, Ha] }], "font-stretch": [{ "font-stretch": [`ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`, ja, Q] }], "font-family": [{ font: [Ja, Ua, t2] }], "font-features": [{ "font-features": [Q] }], "fvn-normal": [`normal-nums`], "fvn-ordinal": [`ordinal`], "fvn-slashed-zero": [`slashed-zero`], "fvn-figure": [`lining-nums`, `oldstyle-nums`], "fvn-spacing": [`proportional-nums`, `tabular-nums`], "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`], tracking: [{ tracking: [i2, $, Q] }], "line-clamp": [{ "line-clamp": [Y, `none`, $, Va] }], leading: [{ leading: [a2, ...w2()] }], "list-image": [{ "list-image": [`none`, $, Q] }], "list-style-position": [{ list: [`inside`, `outside`] }], "list-style-type": [{ list: [`disc`, `decimal`, `none`, $, Q] }], "text-alignment": [{ text: [`left`, `center`, `right`, `justify`, `start`, `end`] }], "placeholder-color": [{ placeholder: M2() }], "text-color": [{ text: M2() }], "text-decoration": [`underline`, `overline`, `line-through`, `no-underline`], "text-decoration-style": [{ decoration: [...oe2(), `wavy`] }], "text-decoration-thickness": [{ decoration: [Y, `from-font`, `auto`, $, Ba] }], "text-decoration-color": [{ decoration: M2() }], "underline-offset": [{ "underline-offset": [Y, `auto`, $, Q] }], "text-transform": [`uppercase`, `lowercase`, `capitalize`, `normal-case`], "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`], "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }], indent: [{ indent: w2() }], "tab-size": [{ tab: [X, $, Q] }], "vertical-align": [{ align: [`baseline`, `top`, `middle`, `bottom`, `text-top`, `text-bottom`, `sub`, `super`, $, Q] }], whitespace: [{ whitespace: [`normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`, `break-spaces`] }], break: [{ break: [`normal`, `words`, `all`, `keep`] }], wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }], hyphens: [{ hyphens: [`none`, `manual`, `auto`] }], content: [{ content: [`none`, $, Q] }], "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }], "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }], "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }], "bg-position": [{ bg: ie2() }], "bg-repeat": [{ bg: N2() }], "bg-size": [{ bg: P2() }], "bg-image": [{ bg: [`none`, { linear: [{ to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] }, X, $, Q], radial: [``, $, Q], conic: [X, $, Q] }, Za, Ga] }], "bg-color": [{ bg: M2() }], "gradient-from-pos": [{ from: ae2() }], "gradient-via-pos": [{ via: ae2() }], "gradient-to-pos": [{ to: ae2() }], "gradient-from": [{ from: M2() }], "gradient-via": [{ via: M2() }], "gradient-to": [{ to: M2() }], rounded: [{ rounded: F2() }], "rounded-s": [{ "rounded-s": F2() }], "rounded-e": [{ "rounded-e": F2() }], "rounded-t": [{ "rounded-t": F2() }], "rounded-r": [{ "rounded-r": F2() }], "rounded-b": [{ "rounded-b": F2() }], "rounded-l": [{ "rounded-l": F2() }], "rounded-ss": [{ "rounded-ss": F2() }], "rounded-se": [{ "rounded-se": F2() }], "rounded-ee": [{ "rounded-ee": F2() }], "rounded-es": [{ "rounded-es": F2() }], "rounded-tl": [{ "rounded-tl": F2() }], "rounded-tr": [{ "rounded-tr": F2() }], "rounded-br": [{ "rounded-br": F2() }], "rounded-bl": [{ "rounded-bl": F2() }], "border-w": [{ border: I2() }], "border-w-x": [{ "border-x": I2() }], "border-w-y": [{ "border-y": I2() }], "border-w-s": [{ "border-s": I2() }], "border-w-e": [{ "border-e": I2() }], "border-w-bs": [{ "border-bs": I2() }], "border-w-be": [{ "border-be": I2() }], "border-w-t": [{ "border-t": I2() }], "border-w-r": [{ "border-r": I2() }], "border-w-b": [{ "border-b": I2() }], "border-w-l": [{ "border-l": I2() }], "divide-x": [{ "divide-x": I2() }], "divide-x-reverse": [`divide-x-reverse`], "divide-y": [{ "divide-y": I2() }], "divide-y-reverse": [`divide-y-reverse`], "border-style": [{ border: [...oe2(), `hidden`, `none`] }], "divide-style": [{ divide: [...oe2(), `hidden`, `none`] }], "border-color": [{ border: M2() }], "border-color-x": [{ "border-x": M2() }], "border-color-y": [{ "border-y": M2() }], "border-color-s": [{ "border-s": M2() }], "border-color-e": [{ "border-e": M2() }], "border-color-bs": [{ "border-bs": M2() }], "border-color-be": [{ "border-be": M2() }], "border-color-t": [{ "border-t": M2() }], "border-color-r": [{ "border-r": M2() }], "border-color-b": [{ "border-b": M2() }], "border-color-l": [{ "border-l": M2() }], "divide-color": [{ divide: M2() }], "outline-style": [{ outline: [...oe2(), `none`, `hidden`] }], "outline-offset": [{ "outline-offset": [Y, $, Q] }], "outline-w": [{ outline: [``, Y, qa, Ba] }], "outline-color": [{ outline: M2() }], shadow: [{ shadow: [``, `none`, u2, Qa, Ka] }], "shadow-color": [{ shadow: M2() }], "inset-shadow": [{ "inset-shadow": [`none`, d2, Qa, Ka] }], "inset-shadow-color": [{ "inset-shadow": M2() }], "ring-w": [{ ring: I2() }], "ring-w-inset": [`ring-inset`], "ring-color": [{ ring: M2() }], "ring-offset-w": [{ "ring-offset": [Y, Ba] }], "ring-offset-color": [{ "ring-offset": M2() }], "inset-ring-w": [{ "inset-ring": I2() }], "inset-ring-color": [{ "inset-ring": M2() }], "text-shadow": [{ "text-shadow": [`none`, f2, Qa, Ka] }], "text-shadow-color": [{ "text-shadow": M2() }], opacity: [{ opacity: [Y, $, Q] }], "mix-blend": [{ "mix-blend": [...se2(), `plus-darker`, `plus-lighter`] }], "bg-blend": [{ "bg-blend": se2() }], "mask-clip": [{ "mask-clip": [`border`, `padding`, `content`, `fill`, `stroke`, `view`] }, `mask-no-clip`], "mask-composite": [{ mask: [`add`, `subtract`, `intersect`, `exclude`] }], "mask-image-linear-pos": [{ "mask-linear": [Y] }], "mask-image-linear-from-pos": [{ "mask-linear-from": L2() }], "mask-image-linear-to-pos": [{ "mask-linear-to": L2() }], "mask-image-linear-from-color": [{ "mask-linear-from": M2() }], "mask-image-linear-to-color": [{ "mask-linear-to": M2() }], "mask-image-t-from-pos": [{ "mask-t-from": L2() }], "mask-image-t-to-pos": [{ "mask-t-to": L2() }], "mask-image-t-from-color": [{ "mask-t-from": M2() }], "mask-image-t-to-color": [{ "mask-t-to": M2() }], "mask-image-r-from-pos": [{ "mask-r-from": L2() }], "mask-image-r-to-pos": [{ "mask-r-to": L2() }], "mask-image-r-from-color": [{ "mask-r-from": M2() }], "mask-image-r-to-color": [{ "mask-r-to": M2() }], "mask-image-b-from-pos": [{ "mask-b-from": L2() }], "mask-image-b-to-pos": [{ "mask-b-to": L2() }], "mask-image-b-from-color": [{ "mask-b-from": M2() }], "mask-image-b-to-color": [{ "mask-b-to": M2() }], "mask-image-l-from-pos": [{ "mask-l-from": L2() }], "mask-image-l-to-pos": [{ "mask-l-to": L2() }], "mask-image-l-from-color": [{ "mask-l-from": M2() }], "mask-image-l-to-color": [{ "mask-l-to": M2() }], "mask-image-x-from-pos": [{ "mask-x-from": L2() }], "mask-image-x-to-pos": [{ "mask-x-to": L2() }], "mask-image-x-from-color": [{ "mask-x-from": M2() }], "mask-image-x-to-color": [{ "mask-x-to": M2() }], "mask-image-y-from-pos": [{ "mask-y-from": L2() }], "mask-image-y-to-pos": [{ "mask-y-to": L2() }], "mask-image-y-from-color": [{ "mask-y-from": M2() }], "mask-image-y-to-color": [{ "mask-y-to": M2() }], "mask-image-radial": [{ "mask-radial": [$, Q] }], "mask-image-radial-from-pos": [{ "mask-radial-from": L2() }], "mask-image-radial-to-pos": [{ "mask-radial-to": L2() }], "mask-image-radial-from-color": [{ "mask-radial-from": M2() }], "mask-image-radial-to-color": [{ "mask-radial-to": M2() }], "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }], "mask-image-radial-size": [{ "mask-radial": [{ closest: [`side`, `corner`], farthest: [`side`, `corner`] }] }], "mask-image-radial-pos": [{ "mask-radial-at": b2() }], "mask-image-conic-pos": [{ "mask-conic": [Y] }], "mask-image-conic-from-pos": [{ "mask-conic-from": L2() }], "mask-image-conic-to-pos": [{ "mask-conic-to": L2() }], "mask-image-conic-from-color": [{ "mask-conic-from": M2() }], "mask-image-conic-to-color": [{ "mask-conic-to": M2() }], "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }], "mask-origin": [{ "mask-origin": [`border`, `padding`, `content`, `fill`, `stroke`, `view`] }], "mask-position": [{ mask: ie2() }], "mask-repeat": [{ mask: N2() }], "mask-size": [{ mask: P2() }], "mask-type": [{ "mask-type": [`alpha`, `luminance`] }], "mask-image": [{ mask: [`none`, $, Q] }], filter: [{ filter: [``, `none`, $, Q] }], blur: [{ blur: R2() }], brightness: [{ brightness: [Y, $, Q] }], contrast: [{ contrast: [Y, $, Q] }], "drop-shadow": [{ "drop-shadow": [``, `none`, p2, Qa, Ka] }], "drop-shadow-color": [{ "drop-shadow": M2() }], grayscale: [{ grayscale: [``, Y, $, Q] }], "hue-rotate": [{ "hue-rotate": [Y, $, Q] }], invert: [{ invert: [``, Y, $, Q] }], saturate: [{ saturate: [Y, $, Q] }], sepia: [{ sepia: [``, Y, $, Q] }], "backdrop-filter": [{ "backdrop-filter": [``, `none`, $, Q] }], "backdrop-blur": [{ "backdrop-blur": R2() }], "backdrop-brightness": [{ "backdrop-brightness": [Y, $, Q] }], "backdrop-contrast": [{ "backdrop-contrast": [Y, $, Q] }], "backdrop-grayscale": [{ "backdrop-grayscale": [``, Y, $, Q] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Y, $, Q] }], "backdrop-invert": [{ "backdrop-invert": [``, Y, $, Q] }], "backdrop-opacity": [{ "backdrop-opacity": [Y, $, Q] }], "backdrop-saturate": [{ "backdrop-saturate": [Y, $, Q] }], "backdrop-sepia": [{ "backdrop-sepia": [``, Y, $, Q] }], "border-collapse": [{ border: [`collapse`, `separate`] }], "border-spacing": [{ "border-spacing": w2() }], "border-spacing-x": [{ "border-spacing-x": w2() }], "border-spacing-y": [{ "border-spacing-y": w2() }], "table-layout": [{ table: [`auto`, `fixed`] }], caption: [{ caption: [`top`, `bottom`] }], transition: [{ transition: [``, `all`, `colors`, `opacity`, `shadow`, `transform`, `none`, $, Q] }], "transition-behavior": [{ transition: [`normal`, `discrete`] }], duration: [{ duration: [Y, `initial`, $, Q] }], ease: [{ ease: [`linear`, `initial`, _2, $, Q] }], delay: [{ delay: [Y, $, Q] }], animate: [{ animate: [`none`, v2, $, Q] }], backface: [{ backface: [`hidden`, `visible`] }], perspective: [{ perspective: [h2, $, Q] }], "perspective-origin": [{ "perspective-origin": x2() }], rotate: [{ rotate: ce2() }], "rotate-x": [{ "rotate-x": ce2() }], "rotate-y": [{ "rotate-y": ce2() }], "rotate-z": [{ "rotate-z": ce2() }], scale: [{ scale: le2() }], "scale-x": [{ "scale-x": le2() }], "scale-y": [{ "scale-y": le2() }], "scale-z": [{ "scale-z": le2() }], "scale-3d": [`scale-3d`], skew: [{ skew: ue2() }], "skew-x": [{ "skew-x": ue2() }], "skew-y": [{ "skew-y": ue2() }], transform: [{ transform: [$, Q, ``, `none`, `gpu`, `cpu`] }], "transform-origin": [{ origin: x2() }], "transform-style": [{ transform: [`3d`, `flat`] }], translate: [{ translate: z2() }], "translate-x": [{ "translate-x": z2() }], "translate-y": [{ "translate-y": z2() }], "translate-z": [{ "translate-z": z2() }], "translate-none": [`translate-none`], zoom: [{ zoom: [X, $, Q] }], accent: [{ accent: M2() }], appearance: [{ appearance: [`none`, `auto`] }], "caret-color": [{ caret: M2() }], "color-scheme": [{ scheme: [`normal`, `dark`, `light`, `light-dark`, `only-dark`, `only-light`] }], cursor: [{ cursor: [`auto`, `default`, `pointer`, `wait`, `text`, `move`, `help`, `not-allowed`, `none`, `context-menu`, `progress`, `cell`, `crosshair`, `vertical-text`, `alias`, `copy`, `no-drop`, `grab`, `grabbing`, `all-scroll`, `col-resize`, `row-resize`, `n-resize`, `e-resize`, `s-resize`, `w-resize`, `ne-resize`, `nw-resize`, `se-resize`, `sw-resize`, `ew-resize`, `ns-resize`, `nesw-resize`, `nwse-resize`, `zoom-in`, `zoom-out`, $, Q] }], "field-sizing": [{ "field-sizing": [`fixed`, `content`] }], "pointer-events": [{ "pointer-events": [`auto`, `none`] }], resize: [{ resize: [`none`, ``, `y`, `x`] }], "scroll-behavior": [{ scroll: [`auto`, `smooth`] }], "scrollbar-thumb-color": [{ "scrollbar-thumb": M2() }], "scrollbar-track-color": [{ "scrollbar-track": M2() }], "scrollbar-gutter": [{ "scrollbar-gutter": [`auto`, `stable`, `both`] }], "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }], "scroll-m": [{ "scroll-m": w2() }], "scroll-mx": [{ "scroll-mx": w2() }], "scroll-my": [{ "scroll-my": w2() }], "scroll-ms": [{ "scroll-ms": w2() }], "scroll-me": [{ "scroll-me": w2() }], "scroll-mbs": [{ "scroll-mbs": w2() }], "scroll-mbe": [{ "scroll-mbe": w2() }], "scroll-mt": [{ "scroll-mt": w2() }], "scroll-mr": [{ "scroll-mr": w2() }], "scroll-mb": [{ "scroll-mb": w2() }], "scroll-ml": [{ "scroll-ml": w2() }], "scroll-p": [{ "scroll-p": w2() }], "scroll-px": [{ "scroll-px": w2() }], "scroll-py": [{ "scroll-py": w2() }], "scroll-ps": [{ "scroll-ps": w2() }], "scroll-pe": [{ "scroll-pe": w2() }], "scroll-pbs": [{ "scroll-pbs": w2() }], "scroll-pbe": [{ "scroll-pbe": w2() }], "scroll-pt": [{ "scroll-pt": w2() }], "scroll-pr": [{ "scroll-pr": w2() }], "scroll-pb": [{ "scroll-pb": w2() }], "scroll-pl": [{ "scroll-pl": w2() }], "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }], "snap-stop": [{ snap: [`normal`, `always`] }], "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }], "snap-strictness": [{ snap: [`mandatory`, `proximity`] }], touch: [{ touch: [`auto`, `none`, `manipulation`] }], "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }], "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }], "touch-pz": [`touch-pinch-zoom`], select: [{ select: [`none`, `text`, `all`, `auto`] }], "will-change": [{ "will-change": [`auto`, `scroll`, `contents`, `transform`, $, Q] }], fill: [{ fill: [`none`, ...M2()] }], "stroke-w": [{ stroke: [Y, qa, Ba, Va] }], stroke: [{ stroke: [`none`, ...M2()] }], "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }] }, conflictingClassGroups: { "container-named": [`container-type`], overflow: [`overflow-x`, `overflow-y`], overscroll: [`overscroll-x`, `overscroll-y`], inset: [`inset-x`, `inset-y`, `inset-bs`, `inset-be`, `start`, `end`, `top`, `right`, `bottom`, `left`], "inset-x": [`right`, `left`], "inset-y": [`top`, `bottom`], flex: [`basis`, `grow`, `shrink`], gap: [`gap-x`, `gap-y`], p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`], px: [`pr`, `pl`], py: [`pt`, `pb`], m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`], mx: [`mr`, `ml`], my: [`mt`, `mb`], size: [`w`, `h`], "font-size": [`leading`], "fvn-normal": [`fvn-ordinal`, `fvn-slashed-zero`, `fvn-figure`, `fvn-spacing`, `fvn-fraction`], "fvn-ordinal": [`fvn-normal`], "fvn-slashed-zero": [`fvn-normal`], "fvn-figure": [`fvn-normal`], "fvn-spacing": [`fvn-normal`], "fvn-fraction": [`fvn-normal`], "line-clamp": [`display`, `overflow`], rounded: [`rounded-s`, `rounded-e`, `rounded-t`, `rounded-r`, `rounded-b`, `rounded-l`, `rounded-ss`, `rounded-se`, `rounded-ee`, `rounded-es`, `rounded-tl`, `rounded-tr`, `rounded-br`, `rounded-bl`], "rounded-s": [`rounded-ss`, `rounded-es`], "rounded-e": [`rounded-se`, `rounded-ee`], "rounded-t": [`rounded-tl`, `rounded-tr`], "rounded-r": [`rounded-tr`, `rounded-br`], "rounded-b": [`rounded-br`, `rounded-bl`], "rounded-l": [`rounded-tl`, `rounded-bl`], "border-spacing": [`border-spacing-x`, `border-spacing-y`], "border-w": [`border-w-x`, `border-w-y`, `border-w-s`, `border-w-e`, `border-w-bs`, `border-w-be`, `border-w-t`, `border-w-r`, `border-w-b`, `border-w-l`], "border-w-x": [`border-w-r`, `border-w-l`], "border-w-y": [`border-w-t`, `border-w-b`], "border-color": [`border-color-x`, `border-color-y`, `border-color-s`, `border-color-e`, `border-color-bs`, `border-color-be`, `border-color-t`, `border-color-r`, `border-color-b`, `border-color-l`], "border-color-x": [`border-color-r`, `border-color-l`], "border-color-y": [`border-color-t`, `border-color-b`], translate: [`translate-x`, `translate-y`, `translate-none`], "translate-none": [`translate`, `translate-x`, `translate-y`, `translate-z`], "scroll-m": [`scroll-mx`, `scroll-my`, `scroll-ms`, `scroll-me`, `scroll-mbs`, `scroll-mbe`, `scroll-mt`, `scroll-mr`, `scroll-mb`, `scroll-ml`], "scroll-mx": [`scroll-mr`, `scroll-ml`], "scroll-my": [`scroll-mt`, `scroll-mb`], "scroll-p": [`scroll-px`, `scroll-py`, `scroll-ps`, `scroll-pe`, `scroll-pbs`, `scroll-pbe`, `scroll-pt`, `scroll-pr`, `scroll-pb`, `scroll-pl`], "scroll-px": [`scroll-pr`, `scroll-pl`], "scroll-py": [`scroll-pt`, `scroll-pb`], touch: [`touch-x`, `touch-y`, `touch-pz`], "touch-x": [`touch`], "touch-y": [`touch`], "touch-pz": [`touch`] }, conflictingClassGroupModifiers: { "font-size": [`leading`] }, postfixLookupClassGroups: [`container-type`], orderSensitiveModifiers: [`*`, `**`, `after`, `backdrop`, `before`, `details-content`, `file`, `first-letter`, `first-line`, `marker`, `placeholder`, `selection`] };
}, fo = (e2, { cacheSize: t2, prefix: n2, experimentalParseClassName: r2, extend: i2 = {}, override: a2 = {} }) => (po(e2, `cacheSize`, t2), po(e2, `prefix`, n2), po(e2, `experimentalParseClassName`, r2), mo(e2.theme, a2.theme), mo(e2.classGroups, a2.classGroups), mo(e2.conflictingClassGroups, a2.conflictingClassGroups), mo(e2.conflictingClassGroupModifiers, a2.conflictingClassGroupModifiers), po(e2, `postfixLookupClassGroups`, a2.postfixLookupClassGroups), po(e2, `orderSensitiveModifiers`, a2.orderSensitiveModifiers), ho(e2.theme, i2.theme), ho(e2.classGroups, i2.classGroups), ho(e2.conflictingClassGroups, i2.conflictingClassGroups), ho(e2.conflictingClassGroupModifiers, i2.conflictingClassGroupModifiers), go(e2, i2, `postfixLookupClassGroups`), go(e2, i2, `orderSensitiveModifiers`), e2), po = (e2, t2, n2) => {
  n2 !== void 0 && (e2[t2] = n2);
}, mo = (e2, t2) => {
  if (t2) for (let n2 in t2) po(e2, n2, t2[n2]);
}, ho = (e2, t2) => {
  if (t2) for (let n2 in t2) go(e2, t2, n2);
}, go = (e2, t2, n2) => {
  let r2 = t2[n2];
  r2 !== void 0 && (e2[n2] = e2[n2] ? e2[n2].concat(r2) : r2);
}, _o = (e2, ...t2) => typeof e2 == `function` ? ba(uo, e2, ...t2) : ba(() => fo(uo(), e2), ...t2), vo = ba(uo), yo = (e2) => K(e2) ? vo : _o({ ...e2, extend: { theme: e2.theme, classGroups: e2.classGroups, conflictingClassGroupModifiers: e2.conflictingClassGroupModifiers, conflictingClassGroups: e2.conflictingClassGroups, ...e2.extend } }), bo = (e2, t2) => {
  let n2 = Ni(e2);
  return !n2 || !(t2?.twMerge ?? true) ? n2 : ((!q.cachedTwMerge || q.didTwMergeConfigChange) && (q.didTwMergeConfigChange = false, q.cachedTwMerge = yo(q.cachedTwMergeConfig)), q.cachedTwMerge(n2) || void 0);
}, xo = (...e2) => (t2) => bo(e2, t2), { createTV: So, tv: Co } = Hi(xo), wo = an.ui?.tv, To = So(wo);
function Eo(e2) {
  if (typeof e2 == `function`) return e2;
  if (Array.isArray(e2)) for (let t2 = e2.length - 1; t2 >= 0; t2--) {
    let n2 = Eo(e2[t2]);
    if (n2) return n2;
  }
}
function Do(e2) {
  return Array.isArray(e2) ? e2.flatMap((e3) => Do(e3)) : typeof e2 == `function` ? [] : [e2];
}
function Oo(e2, t2, n2) {
  return xo(e2(n2()), ...Do(t2.class), ...Do(t2.className))(wo) ?? ``;
}
function ko(e2, t2) {
  return new Proxy(e2, { get(e3, n2) {
    let r2 = e3[n2];
    return typeof r2 == `function` ? (e4 = {}) => {
      let i2 = Eo(e4.class) ?? Eo(e4.className) ?? t2?.[n2];
      return i2 ? Oo(i2, e4, () => r2({ ...e4, class: void 0, className: void 0 })) : r2(e4);
    } : r2;
  } });
}
function Ao(e2) {
  if (!e2 || typeof e2 != `object`) return { config: e2 };
  let t2 = e2, n2;
  typeof e2.base == `function` && (n2 = { base: e2.base }, t2 = { ...t2, base: `` });
  let r2 = e2.slots;
  if (r2 && typeof r2 == `object`) {
    let e3 = Object.entries(r2).filter(([, e4]) => typeof e4 == `function`);
    if (e3.length) {
      n2 ?? (n2 = {});
      let i2 = { ...r2 };
      for (let [t3, r3] of e3) n2[t3] = r3, i2[t3] = ``;
      t2 = { ...t2, slots: i2 };
    }
  }
  return { config: t2, directives: n2 };
}
var jo = ((e2) => {
  let { config: t2, directives: n2 } = Ao(e2), r2 = To(t2);
  return new Proxy(r2, { apply(e3, t3, r3) {
    let i2 = Reflect.apply(e3, t3, r3);
    if (i2 && typeof i2 == `object`) return ko(i2, n2);
    if (typeof i2 == `string`) {
      let i3 = r3[0] ?? {}, a2 = Eo(i3.class) ?? Eo(i3.className) ?? n2?.base;
      if (a2) return Oo(a2, i3, () => Reflect.apply(e3, t3, [{ ...i3, class: void 0, className: void 0 }]));
    }
    return i2;
  } });
}), Mo = { __name: `Icon`, props: { name: { type: null, required: true }, mode: { type: String, required: false }, size: { type: [String, Number], required: false }, customize: { type: [Function, Boolean, null], required: false } }, setup(e2) {
  let t2 = e2, n2 = H();
  function r2(e3, t3) {
    if (e3 !== false) return e3 === true || e3 === null ? t3 : e3;
  }
  let i2 = _(() => {
    let e3 = t2.mode || n2.icon?.mode;
    return e3 === `css` ? `style` : e3;
  }), a2 = _(() => t2.size || n2.icon?.size), o2 = _(() => r2(t2.customize, n2.icon?.customize));
  return (t3, n3) => typeof e2.name == `string` ? (C(), A(d(rn), { key: 0, icon: e2.name.replace(/^i-/, ``), mode: i2.value, width: a2.value, height: a2.value, customise: o2.value }, null, 8, [`icon`, `mode`, `width`, `height`, `customise`])) : (C(), A(M(e2.name), { key: 1 }));
} }, No = /* @__PURE__ */ Symbol(`nuxt-ui.avatar-group`);
function Po(e2) {
  let t2 = c(No, void 0), n2 = _(() => e2.size ?? t2?.value.size), r2 = _(() => e2.color ?? t2?.value.color);
  return y(No, _(() => ({ size: n2.value, color: r2.value }))), { size: n2, color: r2 };
}
var Fo = { slots: { root: `relative inline-flex items-center justify-center shrink-0`, base: `rounded-full ring ring-bg flex items-center justify-center text-inverted font-medium whitespace-nowrap` }, variants: { color: { primary: `bg-primary`, secondary: `bg-secondary`, success: `bg-success`, info: `bg-info`, warning: `bg-warning`, error: `bg-error`, neutral: `bg-inverted` }, size: { "3xs": `h-[4px] min-w-[4px] text-[4px]`, "2xs": `h-[5px] min-w-[5px] text-[5px]`, xs: `h-[6px] min-w-[6px] text-[6px]`, sm: `h-[7px] min-w-[7px] text-[7px]`, md: `h-[8px] min-w-[8px] text-[8px]`, lg: `h-[9px] min-w-[9px] text-[9px]`, xl: `h-[10px] min-w-[10px] text-[10px]`, "2xl": `h-[11px] min-w-[11px] text-[11px]`, "3xl": `h-[12px] min-w-[12px] text-[12px]` }, position: { "top-right": `top-0 right-0`, "bottom-right": `bottom-0 right-0`, "top-left": `top-0 left-0`, "bottom-left": `bottom-0 left-0` }, inset: { false: `` }, standalone: { false: `absolute` } }, compoundVariants: [{ position: `top-right`, inset: false, class: `-translate-y-1/2 translate-x-1/2 transform` }, { position: `bottom-right`, inset: false, class: `translate-y-1/2 translate-x-1/2 transform` }, { position: `top-left`, inset: false, class: `-translate-y-1/2 -translate-x-1/2 transform` }, { position: `bottom-left`, inset: false, class: `translate-y-1/2 -translate-x-1/2 transform` }], defaultVariants: { size: `md`, color: `primary`, position: `top-right` } }, Io = Object.assign({ inheritAttrs: false }, { __name: `Chip`, props: e({ as: { type: null, required: false }, text: { type: [String, Number], required: false }, color: { type: null, required: false }, size: { type: null, required: false }, position: { type: null, required: false }, inset: { type: Boolean, required: false, default: false }, standalone: { type: Boolean, required: false, default: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, { show: { type: Boolean, default: true }, showModifiers: {} }), emits: [`update:show`], setup(e2) {
  let n2 = e2, a2 = ki(`chip`, n2), s2 = o(e2, `show`, { type: Boolean, default: true }), { size: c2 } = Po(n2), l2 = H(), u2 = _(() => jo({ extend: Fo, ...l2.ui?.chip || {} })({ color: a2.color, size: c2.value ?? a2.size, position: a2.position, inset: a2.inset, standalone: a2.standalone }));
  return (e3, n3) => (C(), A(d(xi), { as: d(a2).as, "data-slot": e3.$attrs[`data-slot`] ?? `root`, class: f(u2.value.root({ class: [d(a2).ui?.root, d(a2).class] })) }, { default: E(() => [r(d(yi), t(F({ ...e3.$attrs, "data-slot": void 0 })), { default: E(() => [N(e3.$slots, `default`)]), _: 3 }, 16), s2.value ? (C(), p(`span`, { key: 0, "data-slot": `base`, class: f(u2.value.base({ class: d(a2).ui?.base })) }, [N(e3.$slots, `content`, {}, () => [i(D(d(a2).text), 1)])], 2)) : P(``, true)]), _: 3 }, 8, [`as`, `data-slot`, `class`]));
} }), Lo = { slots: { root: `inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle`, image: `h-full w-full rounded-[inherit] object-cover`, fallback: `font-medium truncate`, icon: `shrink-0` }, variants: { color: { primary: { root: `bg-primary/10`, fallback: `text-primary`, icon: `text-primary` }, secondary: { root: `bg-secondary/10`, fallback: `text-secondary`, icon: `text-secondary` }, success: { root: `bg-success/10`, fallback: `text-success`, icon: `text-success` }, info: { root: `bg-info/10`, fallback: `text-info`, icon: `text-info` }, warning: { root: `bg-warning/10`, fallback: `text-warning`, icon: `text-warning` }, error: { root: `bg-error/10`, fallback: `text-error`, icon: `text-error` }, neutral: { root: `bg-elevated`, fallback: `text-muted`, icon: `text-muted` } }, size: { "3xs": { root: `size-4 text-[8px]` }, "2xs": { root: `size-5 text-[10px]` }, xs: { root: `size-6 text-xs` }, sm: { root: `size-7 text-sm` }, md: { root: `size-8 text-base` }, lg: { root: `size-9 text-lg` }, xl: { root: `size-10 text-xl` }, "2xl": { root: `size-11 text-[22px]` }, "3xl": { root: `size-12 text-2xl` } } }, defaultVariants: { size: `md`, color: `neutral` } }, Ro = Object.assign({ inheritAttrs: false }, { __name: `Avatar`, props: { as: { type: null, required: false }, src: { type: String, required: false }, alt: { type: String, required: false }, icon: { type: null, required: false }, text: { type: String, required: false }, size: { type: null, required: false }, color: { type: null, required: false }, chip: { type: [Boolean, Object], required: false }, class: { type: null, required: false }, style: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e2) {
  let n2 = e2, r2 = ki(`avatar`, n2), i2 = _(() => typeof r2.as == `string` || typeof r2.as?.render == `function` ? { root: r2.as } : un(r2.as, { root: `span` })), a2 = _(() => r2.text || (r2.alt || ``).split(` `).map((e3) => e3.charAt(0)).join(``).substring(0, 2)), o2 = H(), { size: c2, color: l2 } = Po(n2), u2 = _(() => jo({ extend: Lo, ...o2.ui?.avatar || {} })({ size: c2.value ?? r2.size, color: l2.value ?? r2.color })), m2 = _(() => u2.value.root({ class: [r2.ui?.root, r2.class] })), g2 = _(() => {
    let e3 = (m2.value || ``).split(` `).find((e4) => /^size-\d+$/.test(e4));
    if (e3) {
      let t2 = Number.parseFloat(e3.split(`-`)[1] ?? ``);
      if (!Number.isNaN(t2)) return t2 * 4;
    }
    return null;
  }), v2 = j(false);
  s(() => r2.src, () => {
    v2.value && (v2.value = false);
  });
  function y2() {
    v2.value = true;
  }
  return (e3, n3) => (C(), A(M(d(r2).chip ? Io : d(xi)), h({ as: i2.value.root }, d(r2).chip ? typeof d(r2).chip == `object` ? { inset: true, ...d(r2).chip } : { inset: true } : {}, { "data-slot": e3.$attrs[`data-slot`] ?? `root`, class: m2.value, style: d(r2).style }), { default: E(() => [d(r2).src && !v2.value ? (C(), A(M(i2.value.img || d(`img`)), h({ key: 0, src: d(r2).src, alt: d(r2).alt, width: g2.value, height: g2.value }, e3.$attrs, { "data-slot": `image`, class: u2.value.image({ class: d(r2).ui?.image }), onError: y2 }), null, 16, [`src`, `alt`, `width`, `height`, `class`])) : (C(), A(d(yi), t(h({ key: 1 }, { ...e3.$attrs, "data-slot": void 0 })), { default: E(() => [N(e3.$slots, `default`, {}, () => [d(r2).icon ? (C(), A(Mo, { key: 0, name: d(r2).icon, "data-slot": `icon`, class: f(u2.value.icon({ class: d(r2).ui?.icon })) }, null, 8, [`name`, `class`])) : (C(), p(`span`, { key: 1, "data-slot": `fallback`, class: f(u2.value.fallback({ class: d(r2).ui?.fallback })) }, D(a2.value || `\xA0`), 3))])]), _: 3 }, 16))]), _: 3 }, 16, [`as`, `data-slot`, `class`, `style`]));
} });
function zo(e2) {
  let t2 = H(), n2 = _(() => a(e2)), r2 = _(() => n2.value.icon && n2.value.leading || n2.value.icon && !n2.value.trailing || n2.value.loading && !n2.value.trailing || !!n2.value.leadingIcon);
  return { isLeading: r2, isTrailing: _(() => n2.value.icon && n2.value.trailing || n2.value.loading && n2.value.trailing || !!n2.value.trailingIcon && n2.value.trailing !== false), leadingIconName: _(() => n2.value.loading ? n2.value.loadingIcon || t2.ui.icons.loading : n2.value.leadingIcon || n2.value.icon), trailingIconName: _(() => n2.value.loading && !r2.value ? n2.value.loadingIcon || t2.ui.icons.loading : n2.value.trailingIcon || n2.value.icon) };
}
var Bo = /* @__PURE__ */ Symbol(`nuxt-ui.field-group`);
function Vo(e2) {
  let t2 = c(Bo, void 0);
  return { orientation: _(() => t2?.value.orientation), size: _(() => e2?.size ?? t2?.value.size) };
}
var Ho = S({ name: `FieldGroupReset`, setup(e2, { slots: t2 }) {
  return y(Bo, _(() => ({ size: void 0, orientation: void 0 }))), () => t2.default?.();
} }), Uo = /* @__PURE__ */ Symbol(`nuxt-ui.form-options`), Wo = /* @__PURE__ */ Symbol(`nuxt-ui.form-events`), Go = /* @__PURE__ */ Symbol(`nuxt-ui.form-state`), Ko = /* @__PURE__ */ Symbol(`nuxt-ui.form-field`), qo = /* @__PURE__ */ Symbol(`nuxt-ui.input-id`), Jo = /* @__PURE__ */ Symbol(`nuxt-ui.form-inputs`), Yo = /* @__PURE__ */ Symbol(`nuxt-ui.form-loading`), Xo = /* @__PURE__ */ Symbol(`nuxt-ui.form-errors`);
function Zo(e2, t2) {
  let n2 = c(Uo, void 0), r2 = c(Wo, void 0), i2 = c(Ko, void 0), a2 = c(qo, void 0);
  y(Ko, void 0), i2 && a2 && (t2?.bind === false ? a2.value = void 0 : e2?.id && (a2.value = e2?.id));
  function o2(e3, t3, n3) {
    r2 && i2 && t3 && r2.emit({ type: e3, name: t3, eager: n3 });
  }
  function s2() {
    o2(`blur`, i2?.value.name);
  }
  function l2() {
    o2(`focus`, i2?.value.name);
  }
  function u2() {
    o2(`change`, i2?.value.name);
  }
  let d2 = I(() => {
    o2(`input`, i2?.value.name, !t2?.deferInputValidation || i2?.value.eagerValidation);
  }, i2?.value.validateOnInputDelay ?? n2?.value.validateOnInputDelay ?? 0);
  return { id: _(() => e2?.id ?? a2?.value), name: _(() => e2?.name ?? i2?.value.name), size: _(() => e2?.size ?? i2?.value.size), color: _(() => i2?.value.error ? `error` : e2?.color), highlight: _(() => i2?.value.error ? true : e2?.highlight), disabled: _(() => n2?.value.disabled || e2?.disabled), emitFormBlur: s2, emitFormInput: d2, emitFormChange: u2, emitFormFocus: l2, ariaAttrs: _(() => {
    if (!i2?.value) return;
    let e3 = [`error`, `hint`, `description`, `help`].filter((e4) => i2?.value?.[e4]).map((e4) => `${i2?.value.ariaId}-${e4}`) || [], t3 = { "aria-invalid": !!i2?.value.error };
    return e3.length > 0 && (t3[`aria-describedby`] = e3.join(` `)), t3;
  }) };
}
var Qo = `active.activeClass.ariaCurrentValue.as.disabled.download.exact.exactActiveClass.exactHash.exactQuery.external.form.formaction.formenctype.formmethod.formnovalidate.formtarget.href.hreflang.inactiveClass.locale.media.noPrefetch.noRel.onClick.ping.prefetch.prefetchOn.prefetchedClass.referrerpolicy.rel.replace.target.title.to.trailingSlash.type.viewTransition`.split(`.`);
function $o(e2) {
  let t2 = Object.keys(e2), n2 = t2.filter((e3) => e3.startsWith(`aria-`)), r2 = t2.filter((e3) => e3.startsWith(`data-`));
  return se(e2, ...Qo, ...n2, ...r2);
}
function es(e2, t2) {
  let n2 = mn(e2, t2).reduce((e3, t3) => (t3.type === `added` && e3.add(t3.key), e3), /* @__PURE__ */ new Set());
  return pn(Object.fromEntries(Object.entries(e2).filter(([e3]) => !n2.has(e3))), Object.fromEntries(Object.entries(t2).filter(([e3]) => !n2.has(e3))));
}
var ts = { __name: `LinkBase`, props: { as: { type: String, required: false, default: `button` }, type: { type: String, required: false, default: `button` }, disabled: { type: Boolean, required: false }, onClick: { type: [Function, Array], required: false }, href: { type: [String, null], required: false }, navigate: { type: Function, required: false }, target: { type: [String, Object, null], required: false }, rel: { type: [String, Object, null], required: false }, active: { type: Boolean, required: false }, isExternal: { type: Boolean, required: false } }, setup(e2) {
  let t2 = e2;
  function n2(e3) {
    if (t2.disabled) {
      e3.stopPropagation(), e3.preventDefault();
      return;
    }
    if (t2.onClick) for (let n3 of Array.isArray(t2.onClick) ? t2.onClick : [t2.onClick]) n3(e3);
    t2.href && t2.navigate && !t2.isExternal && t2.navigate(e3);
  }
  return (t3, r2) => (C(), A(d(xi), h(e2.href ? { as: `a`, href: e2.disabled ? void 0 : e2.href, "aria-disabled": e2.disabled ? `true` : void 0, role: e2.disabled ? `link` : void 0, tabindex: e2.disabled ? -1 : void 0 } : e2.as === `button` ? { as: e2.as, type: e2.type, disabled: e2.disabled } : { as: e2.as }, { rel: e2.rel, target: e2.target, onClick: n2 }), { default: E(() => [N(t3.$slots, `default`)]), _: 3 }, 16, [`rel`, `target`]));
} }, ns = { base: `outline-primary/25 focus-visible:outline-3 rounded-md`, variants: { active: { true: `text-primary`, false: `text-muted` }, disabled: { true: `cursor-not-allowed opacity-75` } }, compoundVariants: [{ active: false, disabled: false, class: [`hover:text-default`, `transition-colors`] }] }, rs = Object.assign({ inheritAttrs: false }, { __name: `Link`, props: { as: { type: null, required: false, default: `button` }, href: { type: null, required: false }, external: { type: Boolean, required: false }, target: { type: [String, Object, null], required: false }, rel: { type: [String, Object, null], required: false }, noRel: { type: Boolean, required: false }, type: { type: null, required: false, default: `button` }, disabled: { type: Boolean, required: false }, active: { type: Boolean, required: false, default: void 0 }, exact: { type: Boolean, required: false }, exactQuery: { type: [Boolean, String], required: false }, exactHash: { type: Boolean, required: false }, inactiveClass: { type: String, required: false }, custom: { type: Boolean, required: false }, raw: { type: Boolean, required: false }, class: { type: null, required: false }, activeClass: { type: String, required: false }, exactActiveClass: { type: String, required: false }, ariaCurrentValue: { type: String, required: false, default: `page` }, viewTransition: { type: Boolean, required: false }, to: { type: null, required: false }, replace: { type: Boolean, required: false } }, setup(e2) {
  let n2 = e2, r2 = fe(), i2 = H(), a2 = vi(oe(n2, `as`, `type`, `disabled`, `active`, `exact`, `exactQuery`, `exactHash`, `activeClass`, `inactiveClass`, `to`, `href`, `raw`, `custom`, `class`, `target`, `rel`, `noRel`)), o2 = _(() => jo({ extend: ns, ...un({ variants: { active: { true: kn(i2.ui?.link?.variants?.active?.true, n2.activeClass), false: kn(i2.ui?.link?.variants?.active?.false, n2.inactiveClass) } } }, i2.ui?.link || {}) })), s2 = _(() => n2.to ?? n2.href), c2 = _(() => n2.external ? true : s2.value ? typeof s2.value == `string` && Sn(s2.value, { acceptRelative: true }) : false), l2 = _(() => !!n2.target && n2.target !== `_self`), u2 = _(() => n2.noRel ? null : n2.rel === void 0 ? c2.value || l2.value ? `noopener noreferrer` : null : n2.rel || null);
  function f2({ route: e3, isActive: t2, isExactActive: i3 }) {
    if (n2.active !== void 0) return n2.active;
    if (!s2.value) return false;
    if (n2.exactQuery === `partial`) {
      if (!es(e3.query, r2.query)) return false;
    } else if (n2.exactQuery === true && !pn(e3.query, r2.query)) return false;
    return n2.exactHash && e3.hash !== r2.hash ? false : !!(n2.exact && i3 || !n2.exact && t2);
  }
  function p2({ route: e3, isActive: t2, isExactActive: r3 } = {}) {
    let i3 = f2({ route: e3, isActive: t2, isExactActive: r3 });
    return n2.raw ? [n2.class, i3 ? n2.activeClass : n2.inactiveClass] : o2.value({ class: n2.class, active: i3, disabled: n2.disabled });
  }
  return (r3, i3) => !c2.value && s2.value ? (C(), A(d(oi), h({ key: 0 }, d(a2), { to: s2.value, custom: `` }), { default: E(({ href: i4, navigate: a3, route: o3, isActive: s3, isExactActive: l3 }) => [e2.custom ? (C(), A(d(yi), { key: 0 }, { default: E(() => [N(r3.$slots, `default`, t(F({ ...r3.$attrs, ...e2.exact && l3 ? { "aria-current": n2.ariaCurrentValue } : {}, as: e2.as, type: e2.type, disabled: e2.disabled, href: i4, navigate: a3, rel: u2.value, target: e2.target, isExternal: c2.value, active: f2({ route: o3, isActive: s3, isExactActive: l3 }) })))]), _: 2 }, 1024)) : (C(), A(ts, h({ key: 1 }, { ...r3.$attrs, ...e2.exact && l3 ? { "aria-current": n2.ariaCurrentValue } : {}, as: e2.as, type: e2.type, disabled: e2.disabled, href: i4, navigate: a3, rel: u2.value, target: e2.target, isExternal: c2.value }, { class: p2({ route: o3, isActive: s3, isExactActive: l3 }) }), { default: E(() => [N(r3.$slots, `default`, { active: f2({ route: o3, isActive: s3, isExactActive: l3 }) })]), _: 2 }, 1040, [`class`]))]), _: 3 }, 16, [`to`])) : e2.custom ? (C(), A(d(yi), { key: 1 }, { default: E(() => [N(r3.$slots, `default`, t(F({ ...r3.$attrs, as: e2.as, type: e2.type, disabled: e2.disabled, href: s2.value, rel: u2.value, target: e2.target, active: e2.active ?? false, isExternal: c2.value })))]), _: 3 })) : (C(), A(ts, h({ key: 2 }, { ...r3.$attrs, as: e2.as, type: e2.type, disabled: e2.disabled, href: s2.value, rel: u2.value, target: e2.target, isExternal: c2.value }, { class: p2() }), { default: E(() => [N(r3.$slots, `default`, { active: e2.active ?? false })]), _: 3 }, 16, [`class`]));
} }), is = { slots: { base: [`rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75`, `transition-colors`], label: `truncate`, leadingIcon: `shrink-0`, leadingAvatar: `shrink-0`, leadingAvatarSize: ``, trailingIcon: `shrink-0` }, variants: { fieldGroup: { horizontal: `not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]`, vertical: `not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]` }, color: { primary: ``, secondary: ``, success: ``, info: ``, warning: ``, error: ``, neutral: `` }, variant: { solid: ``, outline: ``, soft: ``, subtle: ``, ghost: ``, link: `` }, size: { xs: { base: `px-2 py-1 text-xs gap-1`, leadingIcon: `size-4`, leadingAvatarSize: `3xs`, trailingIcon: `size-4` }, sm: { base: `px-2.5 py-1.5 text-xs gap-1.5`, leadingIcon: `size-4`, leadingAvatarSize: `3xs`, trailingIcon: `size-4` }, md: { base: `px-2.5 py-1.5 text-sm gap-1.5`, leadingIcon: `size-5`, leadingAvatarSize: `2xs`, trailingIcon: `size-5` }, lg: { base: `px-3 py-2 text-sm gap-2`, leadingIcon: `size-5`, leadingAvatarSize: `2xs`, trailingIcon: `size-5` }, xl: { base: `px-3 py-2 text-base gap-2`, leadingIcon: `size-6`, leadingAvatarSize: `xs`, trailingIcon: `size-6` } }, block: { true: { base: `w-full justify-center`, trailingIcon: `ms-auto` } }, square: { true: `` }, leading: { true: `` }, trailing: { true: `` }, loading: { true: `` }, active: { true: { base: `` }, false: { base: `` } } }, compoundVariants: [{ color: `primary`, variant: `solid`, class: `text-inverted bg-primary hover:bg-primary/75 active:bg-primary/75 disabled:bg-primary aria-disabled:bg-primary outline-primary/25 focus-visible:outline-3` }, { color: `secondary`, variant: `solid`, class: `text-inverted bg-secondary hover:bg-secondary/75 active:bg-secondary/75 disabled:bg-secondary aria-disabled:bg-secondary outline-secondary/25 focus-visible:outline-3` }, { color: `success`, variant: `solid`, class: `text-inverted bg-success hover:bg-success/75 active:bg-success/75 disabled:bg-success aria-disabled:bg-success outline-success/25 focus-visible:outline-3` }, { color: `info`, variant: `solid`, class: `text-inverted bg-info hover:bg-info/75 active:bg-info/75 disabled:bg-info aria-disabled:bg-info outline-info/25 focus-visible:outline-3` }, { color: `warning`, variant: `solid`, class: `text-inverted bg-warning hover:bg-warning/75 active:bg-warning/75 disabled:bg-warning aria-disabled:bg-warning outline-warning/25 focus-visible:outline-3` }, { color: `error`, variant: `solid`, class: `text-inverted bg-error hover:bg-error/75 active:bg-error/75 disabled:bg-error aria-disabled:bg-error outline-error/25 focus-visible:outline-3` }, { color: `primary`, variant: `outline`, class: `ring ring-inset ring-primary/50 text-primary hover:bg-primary/10 active:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary` }, { color: `secondary`, variant: `outline`, class: `ring ring-inset ring-secondary/50 text-secondary hover:bg-secondary/10 active:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary` }, { color: `success`, variant: `outline`, class: `ring ring-inset ring-success/50 text-success hover:bg-success/10 active:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-success/25 focus-visible:outline-3 focus-visible:ring-success` }, { color: `info`, variant: `outline`, class: `ring ring-inset ring-info/50 text-info hover:bg-info/10 active:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-info/25 focus-visible:outline-3 focus-visible:ring-info` }, { color: `warning`, variant: `outline`, class: `ring ring-inset ring-warning/50 text-warning hover:bg-warning/10 active:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning` }, { color: `error`, variant: `outline`, class: `ring ring-inset ring-error/50 text-error hover:bg-error/10 active:bg-error/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-error/25 focus-visible:outline-3 focus-visible:ring-error` }, { color: `primary`, variant: `soft`, class: `text-primary bg-primary/10 hover:bg-primary/15 active:bg-primary/15 outline-primary/25 focus-visible:outline-3 disabled:bg-primary/10 aria-disabled:bg-primary/10` }, { color: `secondary`, variant: `soft`, class: `text-secondary bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 outline-secondary/25 focus-visible:outline-3 disabled:bg-secondary/10 aria-disabled:bg-secondary/10` }, { color: `success`, variant: `soft`, class: `text-success bg-success/10 hover:bg-success/15 active:bg-success/15 outline-success/25 focus-visible:outline-3 disabled:bg-success/10 aria-disabled:bg-success/10` }, { color: `info`, variant: `soft`, class: `text-info bg-info/10 hover:bg-info/15 active:bg-info/15 outline-info/25 focus-visible:outline-3 disabled:bg-info/10 aria-disabled:bg-info/10` }, { color: `warning`, variant: `soft`, class: `text-warning bg-warning/10 hover:bg-warning/15 active:bg-warning/15 outline-warning/25 focus-visible:outline-3 disabled:bg-warning/10 aria-disabled:bg-warning/10` }, { color: `error`, variant: `soft`, class: `text-error bg-error/10 hover:bg-error/15 active:bg-error/15 outline-error/25 focus-visible:outline-3 disabled:bg-error/10 aria-disabled:bg-error/10` }, { color: `primary`, variant: `subtle`, class: `text-primary ring ring-inset ring-primary/25 bg-primary/10 hover:bg-primary/15 active:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10 outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary` }, { color: `secondary`, variant: `subtle`, class: `text-secondary ring ring-inset ring-secondary/25 bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 disabled:bg-secondary/10 aria-disabled:bg-secondary/10 outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary` }, { color: `success`, variant: `subtle`, class: `text-success ring ring-inset ring-success/25 bg-success/10 hover:bg-success/15 active:bg-success/15 disabled:bg-success/10 aria-disabled:bg-success/10 outline-success/25 focus-visible:outline-3 focus-visible:ring-success` }, { color: `info`, variant: `subtle`, class: `text-info ring ring-inset ring-info/25 bg-info/10 hover:bg-info/15 active:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10 outline-info/25 focus-visible:outline-3 focus-visible:ring-info` }, { color: `warning`, variant: `subtle`, class: `text-warning ring ring-inset ring-warning/25 bg-warning/10 hover:bg-warning/15 active:bg-warning/15 disabled:bg-warning/10 aria-disabled:bg-warning/10 outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning` }, { color: `error`, variant: `subtle`, class: `text-error ring ring-inset ring-error/25 bg-error/10 hover:bg-error/15 active:bg-error/15 disabled:bg-error/10 aria-disabled:bg-error/10 outline-error/25 focus-visible:outline-3 focus-visible:ring-error` }, { color: `primary`, variant: `ghost`, class: `text-primary hover:bg-primary/10 active:bg-primary/10 outline-primary/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent` }, { color: `secondary`, variant: `ghost`, class: `text-secondary hover:bg-secondary/10 active:bg-secondary/10 outline-secondary/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent` }, { color: `success`, variant: `ghost`, class: `text-success hover:bg-success/10 active:bg-success/10 outline-success/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent` }, { color: `info`, variant: `ghost`, class: `text-info hover:bg-info/10 active:bg-info/10 outline-info/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent` }, { color: `warning`, variant: `ghost`, class: `text-warning hover:bg-warning/10 active:bg-warning/10 outline-warning/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent` }, { color: `error`, variant: `ghost`, class: `text-error hover:bg-error/10 active:bg-error/10 outline-error/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent` }, { color: `primary`, variant: `link`, class: `text-primary hover:text-primary/75 active:text-primary/75 disabled:text-primary aria-disabled:text-primary outline-primary/25 focus-visible:outline-3` }, { color: `secondary`, variant: `link`, class: `text-secondary hover:text-secondary/75 active:text-secondary/75 disabled:text-secondary aria-disabled:text-secondary outline-secondary/25 focus-visible:outline-3` }, { color: `success`, variant: `link`, class: `text-success hover:text-success/75 active:text-success/75 disabled:text-success aria-disabled:text-success outline-success/25 focus-visible:outline-3` }, { color: `info`, variant: `link`, class: `text-info hover:text-info/75 active:text-info/75 disabled:text-info aria-disabled:text-info outline-info/25 focus-visible:outline-3` }, { color: `warning`, variant: `link`, class: `text-warning hover:text-warning/75 active:text-warning/75 disabled:text-warning aria-disabled:text-warning outline-warning/25 focus-visible:outline-3` }, { color: `error`, variant: `link`, class: `text-error hover:text-error/75 active:text-error/75 disabled:text-error aria-disabled:text-error outline-error/25 focus-visible:outline-3` }, { color: `neutral`, variant: `solid`, class: `text-inverted bg-inverted hover:bg-inverted/90 active:bg-inverted/90 disabled:bg-inverted aria-disabled:bg-inverted outline-inverted/25 focus-visible:outline-3` }, { color: `neutral`, variant: `outline`, class: `ring ring-inset ring-accented text-default bg-default hover:bg-elevated active:bg-elevated disabled:bg-default aria-disabled:bg-default outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted` }, { color: `neutral`, variant: `soft`, class: `text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 outline-inverted/25 focus-visible:outline-3 disabled:bg-elevated aria-disabled:bg-elevated` }, { color: `neutral`, variant: `subtle`, class: `ring ring-inset ring-accented text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted` }, { color: `neutral`, variant: `ghost`, class: `text-default hover:bg-elevated active:bg-elevated outline-inverted/25 focus-visible:outline-3 hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent` }, { color: `neutral`, variant: `link`, class: `text-muted hover:text-default active:text-default disabled:text-muted aria-disabled:text-muted outline-inverted/25 focus-visible:outline-3` }, { size: `xs`, square: true, class: `p-1` }, { size: `sm`, square: true, class: `p-1.5` }, { size: `md`, square: true, class: `p-1.5` }, { size: `lg`, square: true, class: `p-2` }, { size: `xl`, square: true, class: `p-2` }, { loading: true, leading: true, class: { leadingIcon: `animate-spin` } }, { loading: true, leading: false, trailing: true, class: { trailingIcon: `animate-spin` } }], defaultVariants: { color: `primary`, variant: `solid`, size: `md` } }, as = { __name: `Button`, props: { label: { type: String, required: false }, color: { type: null, required: false }, activeColor: { type: null, required: false }, variant: { type: null, required: false }, activeVariant: { type: null, required: false }, size: { type: null, required: false }, square: { type: Boolean, required: false }, block: { type: Boolean, required: false }, loadingAuto: { type: Boolean, required: false }, onClick: { type: [Function, Array], required: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, icon: { type: null, required: false }, avatar: { type: Object, required: false }, leading: { type: Boolean, required: false }, leadingIcon: { type: null, required: false }, trailing: { type: Boolean, required: false }, trailingIcon: { type: null, required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: null, required: false }, as: { type: null, required: false }, type: { type: null, required: false }, disabled: { type: Boolean, required: false }, active: { type: Boolean, required: false }, exact: { type: Boolean, required: false }, exactQuery: { type: [Boolean, String], required: false }, exactHash: { type: Boolean, required: false }, inactiveClass: { type: String, required: false }, locale: { type: [Boolean, String], required: false }, to: { type: null, required: false }, href: { type: null, required: false }, external: { type: Boolean, required: false }, target: { type: [String, Object, null], required: false }, rel: { type: [String, Object, null], required: false }, noRel: { type: Boolean, required: false }, prefetchedClass: { type: String, required: false }, prefetch: { type: Boolean, required: false }, prefetchOn: { type: [String, Object], required: false }, noPrefetch: { type: Boolean, required: false }, trailingSlash: { type: String, required: false }, activeClass: { type: String, required: false }, exactActiveClass: { type: String, required: false }, ariaCurrentValue: { type: String, required: false }, viewTransition: { type: Boolean, required: false }, replace: { type: Boolean, required: false } }, setup(e2) {
  let t2 = e2, n2 = u(), i2 = ki(`button`, t2), a2 = H(), { orientation: o2, size: s2 } = Vo(t2), l2 = Ai($o(i2)), m2 = j(false), g2 = c(Yo, void 0);
  async function v2(e3) {
    m2.value = true;
    let t3 = Array.isArray(i2.onClick) ? i2.onClick : [i2.onClick];
    try {
      await Promise.all(t3.map((t4) => t4?.(e3)));
    } finally {
      m2.value = false;
    }
  }
  let y2 = _(() => i2.loading || i2.loadingAuto && (m2.value || g2?.value && i2.type === `submit`)), { isLeading: b2, isTrailing: x2, leadingIconName: S2, trailingIconName: w2 } = zo(_(() => ({ ...i2, loading: y2.value }))), T2 = _(() => jo({ extend: is, ...un({ variants: { active: { true: { base: kn(a2.ui?.button?.variants?.active?.true?.base, i2.activeClass) }, false: { base: kn(a2.ui?.button?.variants?.active?.false?.base, i2.inactiveClass) } } } }, a2.ui?.button || {}) })({ color: i2.color, variant: i2.variant, size: s2.value ?? i2.size, loading: y2.value, block: i2.block, square: i2.square || !n2.default && !i2.label, leading: b2.value, trailing: x2.value, fieldGroup: o2.value }));
  return (e3, t3) => (C(), A(rs, h({ type: d(i2).type, disabled: d(i2).disabled || y2.value }, d(Cn)(d(l2), [`type`, `disabled`, `onClick`]), { custom: `` }), { default: E(({ active: t4, ...n3 }) => [r(ts, h({ "data-slot": `base` }, n3, { class: T2.value.base({ class: [d(i2).ui?.base, d(i2).class], active: t4, ...t4 && d(i2).activeVariant ? { variant: d(i2).activeVariant } : {}, ...t4 && d(i2).activeColor ? { color: d(i2).activeColor } : {} }), onClick: v2 }), { default: E(() => [N(e3.$slots, `leading`, { ui: T2.value }, () => [d(b2) && d(S2) ? (C(), A(Mo, { key: 0, name: d(S2), "data-slot": `leadingIcon`, class: f(T2.value.leadingIcon({ class: d(i2).ui?.leadingIcon, active: t4 })) }, null, 8, [`name`, `class`])) : d(i2).avatar ? (C(), A(Ro, h({ key: 1, size: d(i2).ui?.leadingAvatarSize || T2.value.leadingAvatarSize() }, d(i2).avatar, { "data-slot": `leadingAvatar`, class: T2.value.leadingAvatar({ class: d(i2).ui?.leadingAvatar, active: t4 }) }), null, 16, [`size`, `class`])) : P(``, true)]), N(e3.$slots, `default`, { ui: T2.value }, () => [d(i2).label !== void 0 && d(i2).label !== null ? (C(), p(`span`, { key: 0, "data-slot": `label`, class: f(T2.value.label({ class: d(i2).ui?.label, active: t4 })) }, D(d(i2).label), 3)) : P(``, true)]), N(e3.$slots, `trailing`, { ui: T2.value }, () => [d(x2) && d(w2) ? (C(), A(Mo, { key: 0, name: d(w2), "data-slot": `trailingIcon`, class: f(T2.value.trailingIcon({ class: d(i2).ui?.trailingIcon, active: t4 })) }, null, 8, [`name`, `class`])) : P(``, true)])]), _: 2 }, 1040, [`class`])]), _: 3 }, 16, [`type`, `disabled`]));
} };
export {
  Ir as A,
  pn as B,
  xi as C,
  gi as D,
  _i as E,
  An as F,
  H,
  On as I,
  wn as L,
  Tn as M,
  U as N,
  hi as O,
  Dn as P,
  Cn as R,
  ki as S,
  vi as T,
  an as U,
  un as V,
  Ve as W,
  Ro as _,
  Wo as a,
  jo as b,
  Jo as c,
  Go as d,
  qo as f,
  zo as g,
  Vo as h,
  $o as i,
  Or as j,
  mi as k,
  Yo as l,
  Ho as m,
  rs as n,
  Xo as o,
  Zo as p,
  ts as r,
  Ko as s,
  as as t,
  Uo as u,
  Io as v,
  yi as w,
  Ai as x,
  Mo as y,
  jn as z
};
