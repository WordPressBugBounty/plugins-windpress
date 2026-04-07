const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./toggleHighContrast-Df6w4ag4.css","./Colors-CXoklgza.css","./FluidCalculatorSlideover-C5bjejut.css"])))=>i.map(i=>d[i]);
import { i as e, r as t, t as n } from "./lib-EBvX16vz.js";
import { $ as r, $n as i, D as a, E as o, En as s, Ft as c, H as l, Ht as u, J as d, L as f, Lt as p, On as m, Pt as h, Rt as g, St as _, Tn as v, Ut as y, Zn as b, _ as x, b as S, bt as C, ct as w, er as T, et as E, ft as D, g as O, gt as k, it as ee, jt as te, k as A, l as j, mt as M, nt as N, o as P, ot as F, qt as I, tr as L, tt as ne, u as re, un as ie, v as R, vn as z, w as ae, wn as B, wt as oe, xt as V, y as H, z as U } from "./runtime-core.esm-bundler-C_RgxGrN.js";
import { c as se, l as ce, r as le } from "./vue.runtime.esm-bundler-CFaGDlW9.js";
import { r as ue } from "./log-DwuCDoY0.js";
import { A as de, B as fe, C as pe, D as me, E as he, F as W, G as ge, J as _e, M as ve, N as ye, T as be, U as xe, V as Se, W as Ce, _ as we, b as G, g as Te, i as Ee, k as De, n as Oe, q as K, r as ke, t as Ae, v as je, x as q, y as J } from "./Button-C1y42oVo.js";
import { t as Me } from "./chunk-X4GG3EDV-DB6k4nCN.js";
import { A as Ne, L as Pe, M as Fe, T as Ie, _ as Le, a as Re, b as ze, k as Be, l as Ve, o as He, r as Ue, u as We } from "./dist-BVQ2eZ4j.js";
import { a as Ge, n as Ke, o as qe, r as Je } from "./vue-router-duOdSZkK.js";
import { t as Ye } from "./es-YmaFSzk_.js";
import { D as Xe, M as Ze, S as Qe, V as $e, _ as et, b as tt, g as nt, j as rt, m as it, v as at, x as ot, y as st } from "./namespaced-DqTNyUG4.js";
import { C as ct, a as lt, d as ut, f as dt, h as ft, i as pt, m as mt, n as ht, r as gt, t as _t, v as vt, x as yt, y as Y } from "./Tooltip-C9kG7ywk.js";
import { t as bt } from "./NavigationMenu-UgM29N80.js";
import { a as xt, i as St, l as Ct, n as wt, o as Tt, r as Et, s as Dt, t as Ot } from "./useOverlay-Db99omlQ.js";
import { n as kt, t as At } from "./useToast-CD4zU2hG.js";
import { a as jt, i as Mt, n as Nt, r as Pt, t as Ft } from "./DashboardSidebarToggle-N7Zj2ZiP.js";
import { t as It } from "./overlay-DdDSYYrH.js";
import { t as Lt } from "./Slideover-DgumlK1R.js";
import { t as Rt } from "./Modal-CCmWsnAZ.js";
import { t as zt } from "./DropdownMenu-Crf7DwtN.js";
import { t as Bt } from "./Input-VRzwsNLL.js";
import { t as Vt } from "./settings-CqVcAWve.js";
import { t as Ht } from "./package-DcQ75GNV.js";
import { t as Ut } from "./package-BsrS9kUU.js";
import { t as Wt } from "./fuse-B1xTA2op.js";
import { t as Gt } from "./virtualizer-CgDGs9nP.js";
import { t as Kt } from "./useGenerateCache-tcdh7CEt.js";
import { t as X } from "./preload-helper-Cb81DA_d.js";
import { t as qt, __tla as __tla_0 } from "./worker-BWgWRoiT.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var Jt = document.querySelectorAll(`link[rel="stylesheet"][href*="wp-admin/load-styles.php"], link[rel="stylesheet"][href*="wp-admin/css/colors/"]`);
  Array.from(Jt).reverse().forEach((e2) => {
    e2 instanceof HTMLLinkElement && fetch(e2.href).then((e3) => e3.text()).then((t2) => {
      let n2 = document.createElement(`style`);
      n2.textContent = Yt(t2), document.head.prepend(n2), e2.remove();
    });
  });
  function Yt(r2) {
    let i2 = t(r2);
    return e(i2, {
      enter: (t2, n2, r3) => {
        if (t2.type === `Atrule` && t2.name === `keyframes`) return e.skip;
        t2.type === `SelectorList` && t2.children.forEach((e2) => {
          e2.children.some((e3) => e3.type === `PseudoClassSelector` && ![
            `visible`,
            `hover`,
            `focus`,
            `focus-visible`,
            `focus-within`,
            `target`,
            `read-write`,
            `active`,
            `visited`,
            `link`
          ].includes(e3.name)) || e2.children.push({
            type: `PseudoClassSelector`,
            name: `not`,
            children: [
              {
                type: `ClassSelector`,
                name: `windpress-style`
              },
              {
                type: `Combinator`,
                name: ` `
              },
              {
                type: `TypeSelector`,
                name: `*`
              }
            ]
          });
        });
      }
    }), n(i2);
  }
  var Xt = document.querySelector(`#wpbody`);
  Xt && Xt.classList.add(`windpress-style`), new MutationObserver((e2) => {
    for (let t2 of e2) t2.type === `childList` && t2.addedNodes.length && t2.addedNodes.forEach((e3) => {
      e3 instanceof HTMLElement && !e3.closest(`#wpbody`) && e3.dataset && Object.keys(e3.dataset).forEach((t3) => {
        (t3.startsWith(`reka`) || t3.startsWith(`dismissable`)) && e3.classList.add(`windpress-style`);
      });
    });
  }).observe(document.body, {
    childList: true,
    subtree: false
  });
  var Zt = /* @__PURE__ */ new Set([
    `link`,
    `style`,
    `script`,
    `noscript`
  ]), Qt = /* @__PURE__ */ new Set([
    `title`,
    `titleTemplate`,
    `script`,
    `style`,
    `noscript`
  ]), $t = /* @__PURE__ */ new Set([
    `base`,
    `meta`,
    `link`,
    `style`,
    `script`,
    `noscript`
  ]), en = /* @__PURE__ */ new Set([
    `title`,
    `base`,
    `htmlAttrs`,
    `bodyAttrs`,
    `meta`,
    `link`,
    `style`,
    `script`,
    `noscript`
  ]), tn = /* @__PURE__ */ new Set([
    `base`,
    `title`,
    `titleTemplate`,
    `bodyAttrs`,
    `htmlAttrs`,
    `templateParams`
  ]), nn = /* @__PURE__ */ new Set([
    `key`,
    `tagPosition`,
    `tagPriority`,
    `tagDuplicateStrategy`,
    `innerHTML`,
    `textContent`,
    `processTemplateParams`
  ]), rn = /* @__PURE__ */ new Set([
    `templateParams`,
    `htmlAttrs`,
    `bodyAttrs`
  ]), an = /* @__PURE__ */ new Set([
    `theme-color`,
    `google-site-verification`,
    `og`,
    `article`,
    `book`,
    `profile`,
    `twitter`,
    `author`
  ]), on = [
    `name`,
    `property`,
    `http-equiv`
  ], sn = /* @__PURE__ */ new Set([
    `viewport`,
    `description`,
    `keywords`,
    `robots`
  ]);
  function cn(e2) {
    let t2 = e2.split(`:`);
    return t2.length ? an.has(t2[1]) : false;
  }
  function ln(e2) {
    let { props: t2, tag: n2 } = e2;
    if (tn.has(n2)) return n2;
    if (n2 === `link` && t2.rel === `canonical`) return `canonical`;
    if (n2 === `link` && t2.rel === `alternate`) {
      let e3 = t2.hreflang || t2.type;
      if (e3) return `alternate:${e3}`;
    }
    if (t2.charset) return `charset`;
    if (e2.tag === `meta`) {
      for (let r2 of on) if (t2[r2] !== void 0) {
        let i2 = t2[r2], a2 = i2 && typeof i2 == `string` && i2.includes(`:`), o2 = i2 && sn.has(i2);
        return `${n2}:${i2}${!(a2 || o2) && e2.key ? `:key:${e2.key}` : ``}`;
      }
    }
    if (e2.key) return `${n2}:key:${e2.key}`;
    if (t2.id) return `${n2}:id:${t2.id}`;
    if (n2 === `link` && t2.rel === `alternate`) return `alternate:${t2.href || ``}`;
    if (Qt.has(n2)) {
      let t3 = e2.textContent || e2.innerHTML;
      if (t3) return `${n2}:content:${t3}`;
    }
  }
  function un(e2) {
    return e2._h || e2._d || e2.textContent || e2.innerHTML || `${e2.tag}:${Object.entries(e2.props).map(([e3, t2]) => `${e3}:${String(t2)}`).join(`,`)}`;
  }
  function dn(e2, t2, n2) {
    typeof e2 == `function` && (!n2 || n2 !== `titleTemplate` && !(n2[0] === `o` && n2[1] === `n`)) && (e2 = e2());
    let r2 = t2 ? t2(n2, e2) : e2;
    if (Array.isArray(r2)) return r2.map((e3) => dn(e3, t2));
    if (r2?.constructor === Object) {
      let e3 = {};
      for (let n3 of Object.keys(r2)) e3[n3] = dn(r2[n3], t2, n3);
      return e3;
    }
    return r2;
  }
  function fn(e2, t2) {
    let n2 = e2 === `style` ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set();
    function r2(t3) {
      if (t3 == null || t3 === void 0) return;
      let r3 = String(t3).trim();
      if (r3) if (e2 === `style`) {
        let [e3, ...t4] = r3.split(`:`).map((e4) => e4 ? e4.trim() : ``);
        e3 && t4.length && n2.set(e3, t4.join(`:`));
      } else r3.split(` `).filter(Boolean).forEach((e3) => n2.add(e3));
    }
    return typeof t2 == `string` ? e2 === `style` ? t2.split(`;`).forEach(r2) : r2(t2) : Array.isArray(t2) ? t2.forEach((e3) => r2(e3)) : t2 && typeof t2 == `object` && Object.entries(t2).forEach(([t3, i2]) => {
      i2 && i2 !== `false` && (e2 === `style` ? n2.set(String(t3).trim(), String(i2)) : r2(t3));
    }), n2;
  }
  function pn(e2, t2) {
    if (e2.props = e2.props || {}, !t2) return e2;
    if (e2.tag === `templateParams`) return e2.props = t2, e2;
    let n2 = $t.has(e2.tag) || e2.tag === `htmlAttrs` || e2.tag === `bodyAttrs`;
    return Object.entries(t2).forEach(([r2, i2]) => {
      if (r2 === `__proto__` || r2 === `constructor` || r2 === `prototype`) return;
      if (i2 === null) {
        e2.props[r2] = null;
        return;
      }
      if (r2 === `class` || r2 === `style`) {
        e2.props[r2] = fn(r2, i2);
        return;
      }
      if (nn.has(r2)) {
        if ((r2 === `textContent` || r2 === `innerHTML`) && typeof i2 == `object`) {
          let n3 = t2.type;
          if (t2.type || (n3 = `application/json`), !n3?.endsWith(`json`) && n3 !== `speculationrules`) return;
          t2.type = n3, e2.props.type = n3, e2[r2] = JSON.stringify(i2);
        } else e2[r2] = i2;
        return;
      }
      let a2 = r2.startsWith(`data-`), o2 = n2 && !a2 ? r2.toLowerCase() : r2, s2 = String(i2), c2 = e2.tag === `meta` && o2 === `content`;
      s2 === `true` || s2 === `` ? e2.props[o2] = a2 || c2 ? s2 : true : !i2 && a2 && s2 === `false` ? e2.props[o2] = `false` : i2 !== void 0 && (e2.props[o2] = i2);
    }), e2;
  }
  function mn(e2, t2) {
    let n2 = pn({
      tag: e2,
      props: {}
    }, typeof t2 == `object` && typeof t2 != `function` ? t2 : {
      [e2 === `script` || e2 === `noscript` || e2 === `style` ? `innerHTML` : `textContent`]: t2
    });
    return n2.key && Zt.has(n2.tag) && (n2.props[`data-hid`] = n2._h = n2.key), n2.tag === `script` && typeof n2.innerHTML == `object` && (n2.innerHTML = JSON.stringify(n2.innerHTML), n2.props.type = n2.props.type || `application/json`), Array.isArray(n2.props.content) ? n2.props.content.map((e3) => ({
      ...n2,
      props: {
        ...n2.props,
        content: e3
      }
    })) : n2;
  }
  function hn(e2, t2) {
    if (!e2) return [];
    typeof e2 == `function` && (e2 = e2());
    let n2 = (e3, n3) => {
      for (let r3 = 0; r3 < t2.length; r3++) n3 = t2[r3](e3, n3);
      return n3;
    };
    e2 = n2(void 0, e2);
    let r2 = [];
    return e2 = dn(e2, n2), Object.entries(e2 || {}).forEach(([e3, t3]) => {
      if (t3 !== void 0) for (let n3 of Array.isArray(t3) ? t3 : [
        t3
      ]) r2.push(mn(e3, n3));
    }), r2.flat();
  }
  var gn = (e2, t2) => e2._w === t2._w ? e2._p - t2._p : e2._w - t2._w, _n = {
    base: -10,
    title: 10
  }, vn = {
    critical: -8,
    high: -1,
    low: 2
  }, yn = {
    meta: {
      "content-security-policy": -30,
      charset: -20,
      viewport: -15
    },
    link: {
      preconnect: 20,
      stylesheet: 60,
      preload: 70,
      modulepreload: 70,
      prefetch: 90,
      "dns-prefetch": 90,
      prerender: 90
    },
    script: {
      async: 30,
      defer: 80,
      sync: 50
    },
    style: {
      imported: 40,
      sync: 60
    }
  }, bn = /@import/, xn = (e2) => e2 === `` || e2 === true;
  function Sn(e2, t2) {
    if (typeof t2.tagPriority == `number`) return t2.tagPriority;
    let n2 = 100, r2 = vn[t2.tagPriority] || 0, i2 = e2.resolvedOptions.disableCapoSorting ? {
      link: {},
      script: {},
      style: {}
    } : yn;
    if (t2.tag in _n) n2 = _n[t2.tag];
    else if (t2.tag === `meta`) {
      let e3 = t2.props[`http-equiv`] === `content-security-policy` ? `content-security-policy` : t2.props.charset ? `charset` : t2.props.name === `viewport` ? `viewport` : null;
      e3 && (n2 = yn.meta[e3]);
    } else if (t2.tag === `link` && t2.props.rel) n2 = i2.link[t2.props.rel];
    else if (t2.tag === `script`) {
      let e3 = String(t2.props.type);
      xn(t2.props.async) ? n2 = i2.script.async : t2.props.src && !xn(t2.props.defer) && !xn(t2.props.async) && e3 !== `module` && !e3.endsWith(`json`) || t2.innerHTML && !e3.endsWith(`json`) ? n2 = i2.script.sync : (xn(t2.props.defer) && t2.props.src && !xn(t2.props.async) || e3 === `module`) && (n2 = i2.script.defer);
    } else t2.tag === `style` && (n2 = t2.innerHTML && bn.test(t2.innerHTML) ? i2.style.imported : i2.style.sync);
    return (n2 || 100) + r2;
  }
  function Cn(e2, t2) {
    let n2 = typeof t2 == `function` ? t2(e2) : t2, r2 = n2.key || String(e2.plugins.size + 1);
    e2.plugins.get(r2) || (e2.plugins.set(r2, n2), e2.hooks.addHooks(n2.hooks || {}));
  }
  function wn(e2 = {}) {
    let t2 = _e();
    t2.addHooks(e2.hooks || {});
    let n2 = !e2.document, r2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Set(), o2 = {
      _entryCount: 1,
      plugins: i2,
      dirty: false,
      resolvedOptions: e2,
      hooks: t2,
      ssr: n2,
      entries: r2,
      headEntries() {
        return [
          ...r2.values()
        ];
      },
      use: (e3) => Cn(o2, e3),
      push(e3, i3) {
        let s2 = {
          ...i3 || {}
        };
        delete s2.head;
        let c2 = s2._index ?? o2._entryCount++, l2 = {
          _i: c2,
          input: e3,
          options: s2
        }, u2 = {
          _poll(e4 = false) {
            o2.dirty = true, !e4 && a2.add(c2), t2.callHook(`entries:updated`, o2);
          },
          dispose() {
            r2.delete(c2) && o2.invalidate();
          },
          patch(e4) {
            (!s2.mode || s2.mode === `server` && n2 || s2.mode === `client` && !n2) && (l2.input = e4, r2.set(c2, l2), u2._poll());
          }
        };
        return u2.patch(e3), u2;
      },
      async resolveTags() {
        let n3 = {
          tagMap: /* @__PURE__ */ new Map(),
          tags: [],
          entries: [
            ...o2.entries.values()
          ]
        };
        for (await t2.callHook(`entries:resolve`, n3); a2.size; ) {
          let n4 = a2.values().next().value;
          a2.delete(n4);
          let i4 = r2.get(n4);
          if (i4) {
            let n5 = {
              tags: hn(i4.input, e2.propResolvers || []).map((e3) => Object.assign(e3, i4.options)),
              entry: i4
            };
            await t2.callHook(`entries:normalize`, n5), i4._tags = n5.tags.map((e3, t3) => (e3._w = Sn(o2, e3), e3._p = (i4._i << 10) + t3, e3._d = ln(e3), e3._d || (e3._h = un(e3)), e3));
          }
        }
        let i3 = false;
        n3.entries.flatMap((e3) => (e3._tags || []).map((e4) => ({
          ...e4,
          props: {
            ...e4.props
          }
        }))).sort(gn).reduce((e3, t3) => {
          let n4 = t3._d || t3._h;
          if (!e3.has(n4)) return e3.set(n4, t3);
          let r3 = e3.get(n4);
          if ((t3?.tagDuplicateStrategy || (rn.has(t3.tag) ? `merge` : null) || (t3.key && t3.key === r3.key ? `merge` : null)) === `merge`) {
            let i4 = {
              ...r3.props
            };
            Object.entries(t3.props).forEach(([e4, t4]) => i4[e4] = e4 === `style` ? new Map([
              ...r3.props.style || /* @__PURE__ */ new Map(),
              ...t4
            ]) : e4 === `class` ? /* @__PURE__ */ new Set([
              ...r3.props.class || /* @__PURE__ */ new Set(),
              ...t4
            ]) : t4), e3.set(n4, {
              ...t3,
              props: i4
            });
          } else t3._p >> 10 == r3._p >> 10 && t3.tag === `meta` && cn(n4) ? (e3.set(n4, Object.assign([
            ...Array.isArray(r3) ? r3 : [
              r3
            ],
            t3
          ], t3)), i3 = true) : (t3._w === r3._w ? t3._p > r3._p : t3?._w < r3?._w) && e3.set(n4, t3);
          return e3;
        }, n3.tagMap);
        let s2 = n3.tagMap.get(`title`), c2 = n3.tagMap.get(`titleTemplate`);
        if (o2._title = s2?.textContent, c2) {
          let e3 = c2?.textContent;
          if (o2._titleTemplate = e3, e3) {
            let t3 = typeof e3 == `function` ? e3(s2?.textContent) : e3;
            typeof t3 == `string` && !o2.plugins.has(`template-params`) && (t3 = t3.replace(`%s`, s2?.textContent || ``)), s2 ? t3 === null ? n3.tagMap.delete(`title`) : n3.tagMap.set(`title`, {
              ...s2,
              textContent: t3
            }) : (c2.tag = `title`, c2.textContent = t3);
          }
        }
        n3.tags = Array.from(n3.tagMap.values()), i3 && (n3.tags = n3.tags.flat().sort(gn)), await t2.callHook(`tags:beforeResolve`, n3), await t2.callHook(`tags:resolve`, n3), await t2.callHook(`tags:afterResolve`, n3);
        let l2 = [];
        for (let e3 of n3.tags) {
          let { innerHTML: t3, tag: n4, props: r3 } = e3;
          en.has(n4) && (Object.keys(r3).length === 0 && !e3.innerHTML && !e3.textContent || n4 === `meta` && !r3.content && !r3[`http-equiv`] && !r3.charset || (n4 === `script` && t3 && (String(r3.type).endsWith(`json`) ? e3.innerHTML = (typeof t3 == `string` ? t3 : JSON.stringify(t3)).replace(/</g, `\\u003C`) : typeof t3 == `string` && (e3.innerHTML = t3.replace(RegExp(`</${n4}`, `g`), `<\\/${n4}`)), e3._d = ln(e3)), l2.push(e3)));
        }
        return l2;
      },
      invalidate() {
        for (let e3 of r2.values()) a2.add(e3._i);
        o2.dirty = true, t2.callHook(`entries:updated`, o2);
      }
    };
    return (e2?.plugins || []).forEach((e3) => Cn(o2, e3)), o2.hooks.callHook(`init`, o2), e2.init?.forEach((e3) => e3 && o2.push(e3)), o2;
  }
  async function Tn(e2, t2 = {}) {
    let n2 = t2.document || e2.resolvedOptions.document;
    if (!n2 || !e2.dirty) return;
    let r2 = {
      shouldRender: true,
      tags: []
    };
    if (await e2.hooks.callHook(`dom:beforeRender`, r2), r2.shouldRender) return e2._domUpdatePromise || (e2._domUpdatePromise = new Promise(async (t3) => {
      let r3 = /* @__PURE__ */ new Map(), i2 = new Promise((t4) => {
        e2.resolveTags().then((e3) => {
          t4(e3.map((e4) => {
            let t5 = r3.get(e4._d) || 0, n3 = {
              tag: e4,
              id: (t5 ? `${e4._d}:${t5}` : e4._d) || e4._h,
              shouldRender: true
            };
            return e4._d && cn(e4._d) && r3.set(e4._d, t5 + 1), n3;
          }));
        });
      }), a2 = e2._dom;
      if (!a2) {
        a2 = {
          title: n2.title,
          elMap: (/* @__PURE__ */ new Map()).set(`htmlAttrs`, n2.documentElement).set(`bodyAttrs`, n2.body)
        };
        for (let e3 of [
          `body`,
          `head`
        ]) {
          let t4 = n2[e3]?.children;
          for (let e4 of t4) {
            let t5 = e4.tagName.toLowerCase();
            if (!$t.has(t5)) continue;
            let n3 = pn({
              tag: t5,
              props: {}
            }, {
              innerHTML: e4.innerHTML,
              ...e4.getAttributeNames().reduce((t6, n4) => (t6[n4] = e4.getAttribute(n4), t6), {}) || {}
            });
            if (n3.key = e4.getAttribute(`data-hid`) || void 0, n3._d = ln(n3) || un(n3), a2.elMap.has(n3._d)) {
              let t6 = 1, r4 = n3._d;
              for (; a2.elMap.has(r4); ) r4 = `${n3._d}:${t6++}`;
              a2.elMap.set(r4, e4);
            } else a2.elMap.set(n3._d, e4);
          }
        }
      }
      a2.pendingSideEffects = {
        ...a2.sideEffects
      }, a2.sideEffects = {};
      function o2(e3, t4, n3) {
        let r4 = `${e3}:${t4}`;
        a2.sideEffects[r4] = n3, delete a2.pendingSideEffects[r4];
      }
      function s2({ id: e3, $el: t4, tag: r4 }) {
        let i3 = r4.tag.endsWith(`Attrs`);
        a2.elMap.set(e3, t4), i3 || (r4.textContent && r4.textContent !== t4.textContent && (t4.textContent = r4.textContent), r4.innerHTML && r4.innerHTML !== t4.innerHTML && (t4.innerHTML = r4.innerHTML), o2(e3, `el`, () => {
          t4?.remove(), a2.elMap.delete(e3);
        }));
        for (let a3 in r4.props) {
          if (!Object.prototype.hasOwnProperty.call(r4.props, a3)) continue;
          let s3 = r4.props[a3];
          if (a3.startsWith(`on`) && typeof s3 == `function`) {
            let e4 = t4?.dataset;
            if (e4 && e4[`${a3}fired`]) {
              let e5 = a3.slice(0, -5);
              s3.call(t4, new Event(e5.substring(2)));
            }
            t4.getAttribute(`data-${a3}`) !== `` && ((r4.tag === `bodyAttrs` ? n2.defaultView : t4).addEventListener(a3.substring(2), s3.bind(t4)), t4.setAttribute(`data-${a3}`, ``));
            continue;
          }
          let c3 = `attr:${a3}`;
          if (a3 === `class`) {
            if (!s3) continue;
            for (let n3 of s3) i3 && o2(e3, `${c3}:${n3}`, () => t4.classList.remove(n3)), !t4.classList.contains(n3) && t4.classList.add(n3);
          } else if (a3 === `style`) {
            if (!s3) continue;
            for (let [n3, r5] of s3) o2(e3, `${c3}:${n3}`, () => {
              t4.style.removeProperty(n3);
            }), t4.style.setProperty(n3, r5);
          } else s3 !== false && s3 !== null && (t4.getAttribute(a3) !== s3 && t4.setAttribute(a3, s3 === true ? `` : String(s3)), i3 && o2(e3, c3, () => t4.removeAttribute(a3)));
        }
      }
      let c2 = [], l2 = {
        bodyClose: void 0,
        bodyOpen: void 0,
        head: void 0
      }, u2 = await i2;
      for (let e3 of u2) {
        let { tag: t4, shouldRender: r4, id: i3 } = e3;
        if (r4) {
          if (t4.tag === `title`) {
            n2.title = t4.textContent, o2(`title`, ``, () => n2.title = a2.title);
            continue;
          }
          e3.$el = e3.$el || a2.elMap.get(i3), e3.$el ? s2(e3) : $t.has(t4.tag) && c2.push(e3);
        }
      }
      for (let e3 of c2) {
        let t4 = e3.tag.tagPosition || `head`;
        e3.$el = n2.createElement(e3.tag.tag), s2(e3), l2[t4] = l2[t4] || n2.createDocumentFragment(), l2[t4].appendChild(e3.$el);
      }
      for (let t4 of u2) await e2.hooks.callHook(`dom:renderTag`, t4, n2, o2);
      l2.head && n2.head.appendChild(l2.head), l2.bodyOpen && n2.body.insertBefore(l2.bodyOpen, n2.body.firstChild), l2.bodyClose && n2.body.appendChild(l2.bodyClose);
      for (let e3 in a2.pendingSideEffects) a2.pendingSideEffects[e3]();
      e2._dom = a2, await e2.hooks.callHook(`dom:rendered`, {
        renders: u2
      }), t3();
    }).finally(() => {
      e2._domUpdatePromise = void 0, e2.dirty = false;
    })), e2._domUpdatePromise;
  }
  function En(e2 = {}) {
    let t2 = e2.domOptions?.render || Tn;
    e2.document = e2.document || (typeof window < `u` ? document : void 0);
    let n2 = e2.document?.head.querySelector(`script[id="unhead:payload"]`)?.innerHTML || false;
    return wn({
      ...e2,
      plugins: [
        ...e2.plugins || [],
        {
          key: `client`,
          hooks: {
            "entries:updated": t2
          }
        }
      ],
      init: [
        n2 ? JSON.parse(n2) : false,
        ...e2.init || []
      ]
    });
  }
  function Dn(e2, t2) {
    let n2 = 0;
    return () => {
      let r2 = ++n2;
      t2(() => {
        n2 === r2 && e2();
      });
    };
  }
  var On = (e2, t2) => ie(t2) ? s(t2) : t2, kn = `usehead`;
  function An(e2) {
    return {
      install(t2) {
        t2.config.globalProperties.$unhead = e2, t2.config.globalProperties.$head = e2, t2.provide(kn, e2);
      }
    }.install;
  }
  function jn() {
    if (l()) {
      let e2 = d(kn);
      if (e2) return e2;
    }
    throw Error(`useHead() was called without provide context, ensure you call it through the setup() function.`);
  }
  function Mn(e2, t2 = {}) {
    let n2 = t2.head || jn();
    return n2.ssr ? n2.push(e2 || {}, t2) : Nn(n2, e2, t2);
  }
  function Nn(e2, t2, n2 = {}) {
    let r2 = z(false), i2;
    return y(() => {
      let a2 = r2.value ? {} : dn(t2, On);
      i2 ? i2.patch(a2) : i2 = e2.push(a2, n2);
    }), f() && (ee(() => {
      i2.dispose();
    }), F(() => {
      r2.value = true;
    }), N(() => {
      r2.value = false;
    })), i2;
  }
  function Pn(e2 = {}) {
    let t2 = En({
      domOptions: {
        render: Dn(() => Tn(t2), (e3) => setTimeout(e3, 0))
      },
      ...e2
    });
    return t2.install = An(t2), t2;
  }
  var Fn = {
    install(e2) {
      if (e2._context.provides.usehead) return;
      let t2 = Pn();
      e2.use(t2);
    }
  }, In = {
    install(e2, t2) {
      t2?.router && typeof t2.router == `function` && e2.provide(`nuxtui:router`, t2.router);
    }
  }, Ln = [
    50,
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    950
  ];
  function Rn(e2, t2) {
    return e2 in Me && typeof Me[e2] == `object` && t2 in Me[e2] ? Me[e2][t2] : ``;
  }
  function zn(e2, t2, n2) {
    let r2 = n2 ? `${n2}-` : ``;
    return `${Ln.map((n3) => `--ui-color-${e2}-${n3}: var(--${r2}color-${t2 === `neutral` ? `old-neutral` : t2}-${n3}, ${Rn(t2, n3)});`).join(`
  `)}`;
  }
  function Bn(e2, t2) {
    return `--ui-${e2}: var(--ui-color-${e2}-${t2});`;
  }
  var Vn = he(() => {
    let e2 = K(), t2 = De(), n2 = O(() => {
      let { neutral: t3, ...n3 } = e2.ui.colors, r3 = e2.ui.prefix;
      return `@layer theme {
  :root, :host {
  ${Object.entries(e2.ui.colors).map(([e3, t4]) => zn(e3, t4, r3)).join(`
  `)}
  }
  :root, :host, .light {
  ${Object.keys(n3).map((e3) => Bn(e3, 500)).join(`
  `)}
  }
  .dark {
  ${Object.keys(n3).map((e3) => Bn(e3, 400)).join(`
  `)}
  }
}`;
    }), r2 = {
      style: [
        {
          innerHTML: () => n2.value,
          tagPriority: -2,
          id: `nuxt-ui-colors`
        }
      ]
    };
    if (t2.isHydrating && !t2.payload.serverRendered) {
      let e3 = document.createElement(`style`);
      e3.innerHTML = n2.value, e3.setAttribute(`data-nuxt-ui-colors`, ``), document.head.appendChild(e3), r2.script = [
        {
          innerHTML: `document.head.removeChild(document.querySelector('[data-nuxt-ui-colors]'))`
        }
      ];
    }
    Mn(r2);
  }), Hn = {
    install() {
      We();
    }
  }, Un = {
    install(e2, t2 = {}) {
      e2.use(Fn, t2), e2.use(In, t2), e2.use(Vn, t2), e2.use(Hn, t2);
    }
  }, Wn = A({
    __name: `DismissableLayerBranch`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2, { forwardRef: n2, currentElement: r2 } = Y();
      return w(() => {
        mt.branches.add(r2.value);
      }), D(() => {
        mt.branches.delete(r2.value);
      }), (e3, r3) => (M(), R(m(q), E({
        ref: m(n2)
      }, t2), {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }, 16));
    }
  }), Gn = A({
    __name: `ListboxGroupLabel`,
    props: {
      for: {
        type: String,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `div`
      }
    },
    setup(e2) {
      let t2 = e2, n2 = st({
        id: ``
      });
      return (e3, r2) => (M(), R(m(q), E(t2, {
        id: m(n2).id
      }), {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }, 16, [
        `id`
      ]));
    }
  }), Kn = 100, [qn, Jn] = be(`ProgressRoot`), Yn = (e2) => typeof e2 == `number`;
  function Xn(e2, t2) {
    return ct(e2) || Yn(e2) && !Number.isNaN(e2) && e2 <= t2 && e2 >= 0 ? e2 : (console.error(`Invalid prop \`value\` of value \`${e2}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Kn} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
  }
  function Zn(e2) {
    return Yn(e2) && !Number.isNaN(e2) && e2 > 0 ? e2 : (console.error(`Invalid prop \`max\` of value \`${e2}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Kn}\`.`), Kn);
  }
  var Qn = A({
    __name: `ProgressRoot`,
    props: {
      modelValue: {
        type: [
          Number,
          null
        ],
        required: false
      },
      max: {
        type: Number,
        required: false,
        default: Kn
      },
      getValueLabel: {
        type: Function,
        required: false,
        default: (e2, t2) => Yn(e2) ? `${Math.round(e2 / t2 * Kn)}%` : void 0
      },
      getValueText: {
        type: Function,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    emits: [
      `update:modelValue`,
      `update:max`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = e2, r2 = t2;
      Y();
      let i2 = ze(n2, `modelValue`, r2, {
        passive: n2.modelValue === void 0
      }), a2 = ze(n2, `max`, r2, {
        passive: n2.max === void 0
      });
      u(() => i2.value, async (e3) => {
        let t3 = Xn(e3, n2.max);
        t3 !== e3 && (await ne(), i2.value = t3);
      }, {
        immediate: true
      }), u(() => n2.max, (e3) => {
        let t3 = Zn(n2.max);
        t3 !== e3 && (a2.value = t3);
      }, {
        immediate: true
      });
      let o2 = O(() => ct(i2.value) ? `indeterminate` : i2.value === a2.value ? `complete` : `loading`);
      return Jn({
        modelValue: i2,
        max: a2,
        progressState: o2
      }), (e3, t3) => (M(), R(m(q), {
        "as-child": e3.asChild,
        as: e3.as,
        "aria-valuemax": m(a2),
        "aria-valuemin": 0,
        "aria-valuenow": Yn(m(i2)) ? m(i2) : void 0,
        "aria-valuetext": e3.getValueText?.(m(i2), m(a2)),
        "aria-label": e3.getValueLabel(m(i2), m(a2)),
        role: `progressbar`,
        "data-state": o2.value,
        "data-value": m(i2) ?? void 0,
        "data-max": m(a2)
      }, {
        default: I(() => [
          V(e3.$slots, `default`, {
            modelValue: m(i2)
          })
        ]),
        _: 3
      }, 8, [
        `as-child`,
        `as`,
        `aria-valuemax`,
        `aria-valuenow`,
        `aria-valuetext`,
        `aria-label`,
        `data-state`,
        `data-value`,
        `data-max`
      ]));
    }
  }), $n = A({
    __name: `ProgressIndicator`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2, n2 = qn();
      return Y(), (e3, r2) => (M(), R(m(q), E(t2, {
        "data-state": m(n2).progressState.value,
        "data-value": m(n2).modelValue?.value ?? void 0,
        "data-max": m(n2).max.value
      }), {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }, 16, [
        `data-state`,
        `data-value`,
        `data-max`
      ]));
    }
  }), er = A({
    __name: `ToastAnnounceExclude`,
    props: {
      altText: {
        type: String,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      return (e3, t2) => (M(), R(m(q), {
        as: e3.as,
        "as-child": e3.asChild,
        "data-reka-toast-announce-exclude": ``,
        "data-reka-toast-announce-alt": e3.altText || void 0
      }, {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }, 8, [
        `as`,
        `as-child`,
        `data-reka-toast-announce-alt`
      ]));
    }
  }), [tr, nr] = be(`ToastProvider`), rr = A({
    inheritAttrs: false,
    __name: `ToastProvider`,
    props: {
      label: {
        type: String,
        required: false,
        default: `Notification`
      },
      duration: {
        type: Number,
        required: false,
        default: 5e3
      },
      disableSwipe: {
        type: Boolean,
        required: false
      },
      swipeDirection: {
        type: String,
        required: false,
        default: `right`
      },
      swipeThreshold: {
        type: Number,
        required: false,
        default: 50
      }
    },
    setup(e2) {
      let t2 = e2, { label: n2, duration: r2, disableSwipe: i2, swipeDirection: a2, swipeThreshold: o2 } = v(t2);
      Xe({
        isProvider: true
      });
      let s2 = z(), c2 = z(0), l2 = z(false), u2 = z(false);
      if (t2.label && typeof t2.label == `string` && !t2.label.trim()) throw Error("Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.");
      return nr({
        label: n2,
        duration: r2,
        disableSwipe: i2,
        swipeDirection: a2,
        swipeThreshold: o2,
        toastCount: c2,
        viewport: s2,
        onViewportChange(e3) {
          s2.value = e3;
        },
        onToastAdd() {
          c2.value++;
        },
        onToastRemove() {
          c2.value--;
        },
        isFocusedToastEscapeKeyDownRef: l2,
        isClosePausedRef: u2
      }), (e3, t3) => V(e3.$slots, `default`);
    }
  }), ir = A({
    __name: `ToastAnnounce`,
    setup(e2) {
      let t2 = tr(), n2 = Pe(1e3), r2 = z(false);
      return Le(() => {
        r2.value = true;
      }), (e3, i2) => m(n2) || r2.value ? (M(), R(m(ut), {
        key: 0,
        feature: `fully-hidden`
      }, {
        default: I(() => [
          o(L(m(t2).label.value) + ` `, 1),
          V(e3.$slots, `default`)
        ]),
        _: 3
      })) : H(`v-if`, true);
    }
  }), ar = `toast.viewportPause`, or = `toast.viewportResume`;
  function sr(e2, t2, n2) {
    let r2 = n2.originalEvent.currentTarget, i2 = new CustomEvent(e2, {
      bubbles: false,
      cancelable: true,
      detail: n2
    });
    t2 && r2.addEventListener(e2, t2, {
      once: true
    }), r2.dispatchEvent(i2);
  }
  function cr(e2, t2, n2 = 0) {
    let r2 = Math.abs(e2.x), i2 = Math.abs(e2.y), a2 = r2 > i2;
    return t2 === `left` || t2 === `right` ? a2 && r2 > n2 : !a2 && i2 > n2;
  }
  function lr(e2) {
    return e2.nodeType === e2.ELEMENT_NODE;
  }
  function ur(e2) {
    let t2 = [];
    return Array.from(e2.childNodes).forEach((e3) => {
      if (e3.nodeType === e3.TEXT_NODE && e3.textContent && t2.push(e3.textContent), lr(e3)) {
        let n2 = e3.ariaHidden || e3.hidden || e3.style.display === `none`, r2 = e3.dataset.rekaToastAnnounceExclude === ``;
        if (!n2) if (r2) {
          let n3 = e3.dataset.rekaToastAnnounceAlt;
          n3 && t2.push(n3);
        } else t2.push(...ur(e3));
      }
    }), t2;
  }
  var [dr, fr] = be(`ToastRoot`), pr = A({
    inheritAttrs: false,
    __name: `ToastRootImpl`,
    props: {
      type: {
        type: String,
        required: false
      },
      open: {
        type: Boolean,
        required: false,
        default: false
      },
      duration: {
        type: Number,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `li`
      }
    },
    emits: [
      `close`,
      `escapeKeyDown`,
      `pause`,
      `resume`,
      `swipeStart`,
      `swipeMove`,
      `swipeCancel`,
      `swipeEnd`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = e2, r2 = t2, { forwardRef: i2, currentElement: s2 } = Y(), { CollectionItem: c2 } = Xe(), l2 = tr(), d2 = z(null), f2 = z(null), p2 = O(() => typeof n2.duration == `number` ? n2.duration : l2.duration.value), h2 = z(0), g2 = z(p2.value), _2 = z(0), v2 = z(p2.value), b2 = Le(() => {
        let e3 = (/* @__PURE__ */ new Date()).getTime() - h2.value;
        v2.value = Math.max(g2.value - e3, 0);
      }, {
        fpsLimit: 60
      });
      function x2(e3) {
        e3 <= 0 || e3 === 1 / 0 || Ie && (window.clearTimeout(_2.value), h2.value = (/* @__PURE__ */ new Date()).getTime(), _2.value = window.setTimeout(C2, e3));
      }
      function C2(e3) {
        let t3 = e3?.pointerType === ``;
        s2.value?.contains($e()) && t3 && l2.viewport.value?.focus(), t3 && (l2.isClosePausedRef.value = false), r2(`close`);
      }
      let T2 = O(() => s2.value ? ur(s2.value) : null);
      if (n2.type && ![
        `foreground`,
        `background`
      ].includes(n2.type)) throw Error("Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.");
      return y((e3) => {
        let t3 = l2.viewport.value;
        if (t3) {
          let e4 = () => {
            x2(g2.value), b2.resume(), r2(`resume`);
          }, n3 = () => {
            let e5 = (/* @__PURE__ */ new Date()).getTime() - h2.value;
            g2.value -= e5, window.clearTimeout(_2.value), b2.pause(), r2(`pause`);
          };
          return t3.addEventListener(ar, n3), t3.addEventListener(or, e4), () => {
            t3.removeEventListener(ar, n3), t3.removeEventListener(or, e4);
          };
        }
      }), u(() => [
        n2.open,
        p2.value
      ], () => {
        g2.value = p2.value, n2.open && !l2.isClosePausedRef.value && x2(p2.value);
      }, {
        immediate: true
      }), Re(`Escape`, (e3) => {
        r2(`escapeKeyDown`, e3), e3.defaultPrevented || (l2.isFocusedToastEscapeKeyDownRef.value = true, C2());
      }), w(() => {
        l2.onToastAdd();
      }), D(() => {
        l2.onToastRemove();
      }), fr({
        onClose: C2
      }), (e3, t3) => (M(), S(P, null, [
        T2.value ? (M(), R(ir, {
          key: 0,
          role: `alert`,
          "aria-live": e3.type === `foreground` ? `assertive` : `polite`
        }, {
          default: I(() => [
            o(L(T2.value), 1)
          ]),
          _: 1
        }, 8, [
          `aria-live`
        ])) : H(`v-if`, true),
        m(l2).viewport.value ? (M(), R(re, {
          key: 1,
          to: m(l2).viewport.value
        }, [
          a(m(c2), null, {
            default: I(() => [
              a(m(q), E({
                ref: m(i2),
                tabindex: `0`
              }, e3.$attrs, {
                as: e3.as,
                "as-child": e3.asChild,
                "data-state": e3.open ? `open` : `closed`,
                "data-swipe-direction": m(l2).swipeDirection.value,
                style: m(l2).disableSwipe.value ? void 0 : {
                  userSelect: `none`,
                  touchAction: `none`
                },
                onPointerdown: t3[0] || (t3[0] = ce((e4) => {
                  m(l2).disableSwipe.value || (d2.value = {
                    x: e4.clientX,
                    y: e4.clientY
                  });
                }, [
                  `left`
                ])),
                onPointermove: t3[1] || (t3[1] = (e4) => {
                  if (m(l2).disableSwipe.value || !d2.value) return;
                  let t4 = e4.clientX - d2.value.x, n3 = e4.clientY - d2.value.y, i3 = !!f2.value, a2 = [
                    `left`,
                    `right`
                  ].includes(m(l2).swipeDirection.value), o2 = [
                    `left`,
                    `up`
                  ].includes(m(l2).swipeDirection.value) ? Math.min : Math.max, s3 = a2 ? o2(0, t4) : 0, c3 = a2 ? 0 : o2(0, n3), u2 = e4.pointerType === `touch` ? 10 : 2, p3 = {
                    x: s3,
                    y: c3
                  }, h3 = {
                    originalEvent: e4,
                    delta: p3
                  };
                  i3 ? (f2.value = p3, m(sr)(m(`toast.swipeMove`), (e5) => r2(`swipeMove`, e5), h3)) : m(cr)(p3, m(l2).swipeDirection.value, u2) ? (f2.value = p3, m(sr)(m(`toast.swipeStart`), (e5) => r2(`swipeStart`, e5), h3), e4.target.setPointerCapture(e4.pointerId)) : (Math.abs(t4) > u2 || Math.abs(n3) > u2) && (d2.value = null);
                }),
                onPointerup: t3[2] || (t3[2] = (e4) => {
                  if (m(l2).disableSwipe.value) return;
                  let t4 = f2.value, n3 = e4.target;
                  if (n3.hasPointerCapture(e4.pointerId) && n3.releasePointerCapture(e4.pointerId), f2.value = null, d2.value = null, t4) {
                    let n4 = e4.currentTarget, i3 = {
                      originalEvent: e4,
                      delta: t4
                    };
                    m(cr)(t4, m(l2).swipeDirection.value, m(l2).swipeThreshold.value) ? m(sr)(m(`toast.swipeEnd`), (e5) => r2(`swipeEnd`, e5), i3) : m(sr)(m(`toast.swipeCancel`), (e5) => r2(`swipeCancel`, e5), i3), n4?.addEventListener(`click`, (e5) => e5.preventDefault(), {
                      once: true
                    });
                  }
                })
              }), {
                default: I(() => [
                  V(e3.$slots, `default`, {
                    remaining: v2.value,
                    duration: p2.value
                  })
                ]),
                _: 3
              }, 16, [
                `as`,
                `as-child`,
                `data-state`,
                `data-swipe-direction`,
                `style`
              ])
            ]),
            _: 3
          })
        ], 8, [
          `to`
        ])) : H(`v-if`, true)
      ], 64));
    }
  }), mr = A({
    __name: `ToastClose`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `button`
      }
    },
    setup(e2) {
      let t2 = e2, n2 = dr(), { forwardRef: r2 } = Y();
      return (e3, i2) => (M(), R(er, {
        "as-child": ``
      }, {
        default: I(() => [
          a(m(q), E(t2, {
            ref: m(r2),
            type: e3.as === `button` ? `button` : void 0,
            onClick: m(n2).onClose
          }), {
            default: I(() => [
              V(e3.$slots, `default`)
            ]),
            _: 3
          }, 16, [
            `type`,
            `onClick`
          ])
        ]),
        _: 3
      }));
    }
  }), hr = A({
    __name: `ToastAction`,
    props: {
      altText: {
        type: String,
        required: true
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      if (!e2.altText) throw Error("Missing prop `altText` expected on `ToastAction`");
      let { forwardRef: t2 } = Y();
      return (e3, n2) => e3.altText ? (M(), R(er, {
        key: 0,
        "alt-text": e3.altText,
        "as-child": ``
      }, {
        default: I(() => [
          a(mr, {
            ref: m(t2),
            as: e3.as,
            "as-child": e3.asChild
          }, {
            default: I(() => [
              V(e3.$slots, `default`)
            ]),
            _: 3
          }, 8, [
            `as`,
            `as-child`
          ])
        ]),
        _: 3
      }, 8, [
        `alt-text`
      ])) : H(`v-if`, true);
    }
  }), gr = A({
    __name: `ToastDescription`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2;
      return Y(), (e3, n2) => (M(), R(m(q), i(U(t2)), {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }, 16));
    }
  }), _r = A({
    __name: `ToastPortal`,
    props: {
      to: {
        type: null,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      },
      defer: {
        type: Boolean,
        required: false
      },
      forceMount: {
        type: Boolean,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2;
      return (e3, n2) => (M(), R(m(dt), i(U(t2)), {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }, 16));
    }
  }), vr = A({
    __name: `ToastRoot`,
    props: {
      defaultOpen: {
        type: Boolean,
        required: false,
        default: true
      },
      forceMount: {
        type: Boolean,
        required: false
      },
      type: {
        type: String,
        required: false,
        default: `foreground`
      },
      open: {
        type: Boolean,
        required: false,
        default: void 0
      },
      duration: {
        type: Number,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `li`
      }
    },
    emits: [
      `escapeKeyDown`,
      `pause`,
      `resume`,
      `swipeStart`,
      `swipeMove`,
      `swipeCancel`,
      `swipeEnd`,
      `update:open`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = e2, r2 = t2, { forwardRef: i2 } = Y(), o2 = ze(n2, `open`, r2, {
        defaultValue: n2.defaultOpen,
        passive: n2.open === void 0
      });
      return (e3, t3) => (M(), R(m(ft), {
        present: e3.forceMount || m(o2)
      }, {
        default: I(() => [
          a(pr, E({
            ref: m(i2),
            open: m(o2),
            type: e3.type,
            as: e3.as,
            "as-child": e3.asChild,
            duration: e3.duration
          }, e3.$attrs, {
            onClose: t3[0] || (t3[0] = (e4) => o2.value = false),
            onPause: t3[1] || (t3[1] = (e4) => r2(`pause`)),
            onResume: t3[2] || (t3[2] = (e4) => r2(`resume`)),
            onEscapeKeyDown: t3[3] || (t3[3] = (e4) => r2(`escapeKeyDown`, e4)),
            onSwipeStart: t3[4] || (t3[4] = (e4) => {
              r2(`swipeStart`, e4), e4.defaultPrevented || e4.currentTarget.setAttribute(`data-swipe`, `start`);
            }),
            onSwipeMove: t3[5] || (t3[5] = (e4) => {
              if (r2(`swipeMove`, e4), !e4.defaultPrevented) {
                let { x: t4, y: n3 } = e4.detail.delta, r3 = e4.currentTarget;
                r3.setAttribute(`data-swipe`, `move`), r3.style.setProperty(`--reka-toast-swipe-move-x`, `${t4}px`), r3.style.setProperty(`--reka-toast-swipe-move-y`, `${n3}px`);
              }
            }),
            onSwipeCancel: t3[6] || (t3[6] = (e4) => {
              if (r2(`swipeCancel`, e4), !e4.defaultPrevented) {
                let t4 = e4.currentTarget;
                t4.setAttribute(`data-swipe`, `cancel`), t4.style.removeProperty(`--reka-toast-swipe-move-x`), t4.style.removeProperty(`--reka-toast-swipe-move-y`), t4.style.removeProperty(`--reka-toast-swipe-end-x`), t4.style.removeProperty(`--reka-toast-swipe-end-y`);
              }
            }),
            onSwipeEnd: t3[7] || (t3[7] = (e4) => {
              if (r2(`swipeEnd`, e4), !e4.defaultPrevented) {
                let { x: t4, y: n3 } = e4.detail.delta, r3 = e4.currentTarget;
                r3.setAttribute(`data-swipe`, `end`), r3.style.removeProperty(`--reka-toast-swipe-move-x`), r3.style.removeProperty(`--reka-toast-swipe-move-y`), r3.style.setProperty(`--reka-toast-swipe-end-x`, `${t4}px`), r3.style.setProperty(`--reka-toast-swipe-end-y`, `${n3}px`), o2.value = false;
              }
            })
          }), {
            default: I(({ remaining: t4, duration: n3 }) => [
              V(e3.$slots, `default`, {
                remaining: t4,
                duration: n3,
                open: m(o2)
              })
            ]),
            _: 3
          }, 16, [
            `open`,
            `type`,
            `as`,
            `as-child`,
            `duration`
          ])
        ]),
        _: 3
      }, 8, [
        `present`
      ]));
    }
  }), yr = A({
    __name: `ToastTitle`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2;
      return Y(), (e3, n2) => (M(), R(m(q), i(U(t2)), {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }, 16));
    }
  }), br = A({
    __name: `FocusProxy`,
    emits: [
      `focusFromOutsideViewport`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = t2, r2 = tr();
      return (e3, t3) => (M(), R(m(ut), {
        tabindex: `0`,
        style: {
          position: `fixed`
        },
        onFocus: t3[0] || (t3[0] = (e4) => {
          let t4 = e4.relatedTarget;
          m(r2).viewport.value?.contains(t4) || n2(`focusFromOutsideViewport`);
        })
      }, {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }));
    }
  }), xr = A({
    inheritAttrs: false,
    __name: `ToastViewport`,
    props: {
      hotkey: {
        type: Array,
        required: false,
        default: () => [
          `F8`
        ]
      },
      label: {
        type: [
          String,
          Function
        ],
        required: false,
        default: `Notifications ({hotkey})`
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `ol`
      }
    },
    setup(e2) {
      let { hotkey: t2, label: n2 } = v(e2), { forwardRef: r2, currentElement: i2 } = Y(), { CollectionSlot: o2, getItems: s2 } = Xe(), c2 = tr(), l2 = O(() => c2.toastCount.value > 0), u2 = z(), d2 = z(), f2 = O(() => t2.value.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``));
      Re(t2.value, () => {
        i2.value.focus();
      }), w(() => {
        c2.onViewportChange(i2.value);
      }), y((e3) => {
        let t3 = i2.value;
        if (l2.value && t3) {
          let n3 = () => {
            if (!c2.isClosePausedRef.value) {
              let e4 = new CustomEvent(ar);
              t3.dispatchEvent(e4), c2.isClosePausedRef.value = true;
            }
          }, r3 = () => {
            if (c2.isClosePausedRef.value) {
              let e4 = new CustomEvent(or);
              t3.dispatchEvent(e4), c2.isClosePausedRef.value = false;
            }
          }, i3 = (e4) => {
            t3.contains(e4.relatedTarget) || r3();
          }, a2 = () => {
            t3.contains($e()) || r3();
          }, o3 = (e4) => {
            let n4 = e4.altKey || e4.ctrlKey || e4.metaKey;
            if (e4.key === `Tab` && !n4) {
              let n5 = $e(), r4 = e4.shiftKey;
              if (e4.target === t3 && r4) {
                u2.value?.focus();
                return;
              }
              let i4 = p2({
                tabbingDirection: r4 ? `backwards` : `forwards`
              }), a3 = i4.findIndex((e5) => e5 === n5);
              rt(i4.slice(a3 + 1)) ? e4.preventDefault() : r4 ? u2.value?.focus() : d2.value?.focus();
            }
          };
          t3.addEventListener(`focusin`, n3), t3.addEventListener(`focusout`, i3), t3.addEventListener(`pointermove`, n3), t3.addEventListener(`pointerleave`, a2), t3.addEventListener(`keydown`, o3), window.addEventListener(`blur`, n3), window.addEventListener(`focus`, r3), e3(() => {
            t3.removeEventListener(`focusin`, n3), t3.removeEventListener(`focusout`, i3), t3.removeEventListener(`pointermove`, n3), t3.removeEventListener(`pointerleave`, a2), t3.removeEventListener(`keydown`, o3), window.removeEventListener(`blur`, n3), window.removeEventListener(`focus`, r3);
          });
        }
      });
      function p2({ tabbingDirection: e3 }) {
        let t3 = s2().map((e4) => e4.ref).map((t4) => {
          let n3 = [
            t4,
            ...Ze(t4)
          ];
          return e3 === `forwards` ? n3 : n3.reverse();
        });
        return (e3 === `forwards` ? t3.reverse() : t3).flat();
      }
      return (e3, t3) => (M(), R(m(Wn), {
        role: `region`,
        "aria-label": typeof m(n2) == `string` ? m(n2).replace(`{hotkey}`, f2.value) : m(n2)(f2.value),
        tabindex: `-1`,
        style: T({
          pointerEvents: l2.value ? void 0 : `none`
        })
      }, {
        default: I(() => [
          l2.value ? (M(), R(br, {
            key: 0,
            ref: (e4) => {
              u2.value = m(He)(e4);
            },
            onFocusFromOutsideViewport: t3[0] || (t3[0] = () => {
              let e4 = p2({
                tabbingDirection: `forwards`
              });
              m(rt)(e4);
            })
          }, null, 512)) : H(`v-if`, true),
          a(m(o2), null, {
            default: I(() => [
              a(m(q), E({
                ref: m(r2),
                tabindex: `-1`,
                as: e3.as,
                "as-child": e3.asChild
              }, e3.$attrs), {
                default: I(() => [
                  V(e3.$slots, `default`)
                ]),
                _: 3
              }, 16, [
                `as`,
                `as-child`
              ])
            ]),
            _: 3
          }),
          l2.value ? (M(), R(br, {
            key: 1,
            ref: (e4) => {
              d2.value = m(He)(e4);
            },
            onFocusFromOutsideViewport: t3[1] || (t3[1] = () => {
              let e4 = p2({
                tabbingDirection: `backwards`
              });
              m(rt)(e4);
            })
          }, null, 512)) : H(`v-if`, true)
        ]),
        _: 3
      }, 8, [
        `aria-label`,
        `style`
      ]));
    }
  }), Sr = {
    slots: {
      root: `gap-2`,
      base: `relative overflow-hidden rounded-full bg-accented`,
      indicator: `rounded-full size-full transition-transform duration-200 ease-out`,
      status: `flex text-dimmed transition-[width] duration-200`,
      steps: `grid items-end`,
      step: `truncate text-end row-start-1 col-start-1 transition-opacity`
    },
    variants: {
      animation: {
        carousel: ``,
        "carousel-inverse": ``,
        swing: ``,
        elastic: ``
      },
      color: {
        primary: {
          indicator: `bg-primary`,
          steps: `text-primary`
        },
        secondary: {
          indicator: `bg-secondary`,
          steps: `text-secondary`
        },
        success: {
          indicator: `bg-success`,
          steps: `text-success`
        },
        info: {
          indicator: `bg-info`,
          steps: `text-info`
        },
        warning: {
          indicator: `bg-warning`,
          steps: `text-warning`
        },
        error: {
          indicator: `bg-error`,
          steps: `text-error`
        },
        neutral: {
          indicator: `bg-inverted`,
          steps: `text-inverted`
        }
      },
      size: {
        "2xs": {
          status: `text-xs`,
          steps: `text-xs`
        },
        xs: {
          status: `text-xs`,
          steps: `text-xs`
        },
        sm: {
          status: `text-sm`,
          steps: `text-sm`
        },
        md: {
          status: `text-sm`,
          steps: `text-sm`
        },
        lg: {
          status: `text-sm`,
          steps: `text-sm`
        },
        xl: {
          status: `text-base`,
          steps: `text-base`
        },
        "2xl": {
          status: `text-base`,
          steps: `text-base`
        }
      },
      step: {
        active: {
          step: `opacity-100`
        },
        first: {
          step: `opacity-100 text-muted`
        },
        other: {
          step: `opacity-0`
        },
        last: {
          step: ``
        }
      },
      orientation: {
        horizontal: {
          root: `w-full flex flex-col`,
          base: `w-full`,
          status: `flex-row items-center justify-end min-w-fit`
        },
        vertical: {
          root: `h-full flex flex-row-reverse`,
          base: `h-full`,
          status: `flex-col justify-end min-h-fit`
        }
      },
      inverted: {
        true: {
          status: `self-end`
        }
      }
    },
    compoundVariants: [
      {
        inverted: true,
        orientation: `horizontal`,
        class: {
          step: `text-start`,
          status: `flex-row-reverse`
        }
      },
      {
        inverted: true,
        orientation: `vertical`,
        class: {
          steps: `items-start`,
          status: `flex-col-reverse`
        }
      },
      {
        orientation: `horizontal`,
        size: `2xs`,
        class: `h-px`
      },
      {
        orientation: `horizontal`,
        size: `xs`,
        class: `h-0.5`
      },
      {
        orientation: `horizontal`,
        size: `sm`,
        class: `h-1`
      },
      {
        orientation: `horizontal`,
        size: `md`,
        class: `h-2`
      },
      {
        orientation: `horizontal`,
        size: `lg`,
        class: `h-3`
      },
      {
        orientation: `horizontal`,
        size: `xl`,
        class: `h-4`
      },
      {
        orientation: `horizontal`,
        size: `2xl`,
        class: `h-5`
      },
      {
        orientation: `vertical`,
        size: `2xs`,
        class: `w-px`
      },
      {
        orientation: `vertical`,
        size: `xs`,
        class: `w-0.5`
      },
      {
        orientation: `vertical`,
        size: `sm`,
        class: `w-1`
      },
      {
        orientation: `vertical`,
        size: `md`,
        class: `w-2`
      },
      {
        orientation: `vertical`,
        size: `lg`,
        class: `w-3`
      },
      {
        orientation: `vertical`,
        size: `xl`,
        class: `w-4`
      },
      {
        orientation: `vertical`,
        size: `2xl`,
        class: `w-5`
      },
      {
        orientation: `horizontal`,
        animation: `carousel`,
        class: {
          indicator: `data-[state=indeterminate]:animate-[carousel_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-rtl_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `vertical`,
        animation: `carousel`,
        class: {
          indicator: `data-[state=indeterminate]:animate-[carousel-vertical_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `horizontal`,
        animation: `carousel-inverse`,
        class: {
          indicator: `data-[state=indeterminate]:animate-[carousel-inverse_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `vertical`,
        animation: `carousel-inverse`,
        class: {
          indicator: `data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `horizontal`,
        animation: `swing`,
        class: {
          indicator: `data-[state=indeterminate]:animate-[swing_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `vertical`,
        animation: `swing`,
        class: {
          indicator: `data-[state=indeterminate]:animate-[swing-vertical_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `horizontal`,
        animation: `elastic`,
        class: {
          indicator: `data-[state=indeterminate]:animate-[elastic_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `vertical`,
        animation: `elastic`,
        class: {
          indicator: `data-[state=indeterminate]:animate-[elastic-vertical_2s_ease-in-out_infinite]`
        }
      }
    ],
    defaultVariants: {
      animation: `carousel`,
      color: `primary`,
      size: `md`
    }
  }, Cr = {
    __name: `Progress`,
    props: {
      as: {
        type: null,
        required: false
      },
      max: {
        type: [
          Number,
          Array
        ],
        required: false
      },
      status: {
        type: Boolean,
        required: false
      },
      inverted: {
        type: Boolean,
        required: false,
        default: false
      },
      size: {
        type: null,
        required: false
      },
      color: {
        type: null,
        required: false
      },
      orientation: {
        type: null,
        required: false,
        default: `horizontal`
      },
      animation: {
        type: null,
        required: false
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      getValueLabel: {
        type: Function,
        required: false
      },
      getValueText: {
        type: Function,
        required: false
      },
      modelValue: {
        type: [
          Number,
          null
        ],
        required: false,
        default: null
      }
    },
    emits: [
      `update:modelValue`,
      `update:max`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = e2, r2 = t2, i2 = p(), { dir: s2 } = ye(), c2 = K(), l2 = G(`progress`, n2), u2 = vt(Ne(n2, `getValueLabel`, `getValueText`, `modelValue`), r2), d2 = O(() => u2.value.modelValue === null), f2 = O(() => Array.isArray(n2.max)), h2 = O(() => {
        if (!(d2.value || !n2.max)) return Array.isArray(n2.max) ? n2.max.length - 1 : Number(n2.max);
      }), g2 = O(() => {
        if (!d2.value) switch (true) {
          case u2.value.modelValue < 0:
            return 0;
          case u2.value.modelValue > (h2.value ?? 100):
            return 100;
          default:
            return Math.round(u2.value.modelValue / (h2.value ?? 100) * 100);
        }
      }), _2 = O(() => {
        if (g2.value !== void 0) return n2.orientation === `vertical` ? {
          transform: `translateY(${n2.inverted ? `` : `-`}${100 - g2.value}%)`
        } : s2.value === `rtl` ? {
          transform: `translateX(${n2.inverted ? `-` : ``}${100 - g2.value}%)`
        } : {
          transform: `translateX(${n2.inverted ? `` : `-`}${100 - g2.value}%)`
        };
      }), v2 = O(() => {
        let e3 = `${Math.max(g2.value ?? 0, 0)}%`;
        return n2.orientation === `vertical` ? {
          height: e3
        } : {
          width: e3
        };
      });
      function y2(e3) {
        return e3 === Number(n2.modelValue);
      }
      function x2(e3) {
        return e3 === 0;
      }
      function w2(e3) {
        return e3 === h2.value;
      }
      function D2(e3) {
        return e3 = Number(e3), y2(e3) && !x2(e3) ? `active` : x2(e3) && y2(e3) ? `first` : w2(e3) && y2(e3) ? `last` : `other`;
      }
      let k2 = O(() => J({
        extend: J(Sr),
        ...c2.ui?.progress || {}
      })({
        animation: n2.animation,
        size: n2.size,
        color: n2.color,
        orientation: n2.orientation,
        inverted: n2.inverted
      }));
      return (t3, r3) => (M(), R(m(q), {
        as: e2.as,
        "data-orientation": e2.orientation,
        "data-slot": `root`,
        class: b(k2.value.root({
          class: [
            m(l2)?.root,
            n2.class
          ]
        }))
      }, {
        default: I(() => [
          !d2.value && (e2.status || i2.status) ? (M(), S(`div`, {
            key: 0,
            "data-slot": `status`,
            class: b(k2.value.status({
              class: m(l2)?.status
            })),
            style: T(v2.value)
          }, [
            V(t3.$slots, `status`, {
              percent: g2.value
            }, () => [
              o(L(g2.value) + `% `, 1)
            ])
          ], 6)) : H(``, true),
          a(m(Qn), E(m(u2), {
            max: h2.value,
            "data-slot": `base`,
            class: k2.value.base({
              class: m(l2)?.base
            }),
            style: {
              transform: `translateZ(0)`
            }
          }), {
            default: I(() => [
              a(m($n), {
                "data-slot": `indicator`,
                class: b(k2.value.indicator({
                  class: m(l2)?.indicator
                })),
                style: T(_2.value)
              }, null, 8, [
                `class`,
                `style`
              ])
            ]),
            _: 1
          }, 16, [
            `max`,
            `class`
          ]),
          f2.value ? (M(), S(`div`, {
            key: 1,
            "data-slot": `steps`,
            class: b(k2.value.steps({
              class: m(l2)?.steps
            }))
          }, [
            (M(true), S(P, null, C(e2.max, (e3, n3) => (M(), S(`div`, {
              key: n3,
              "data-slot": `step`,
              class: b(k2.value.step({
                class: m(l2)?.step,
                step: D2(n3)
              }))
            }, [
              V(t3.$slots, `step-${n3}`, {
                step: e3
              }, () => [
                o(L(e3), 1)
              ])
            ], 2))), 128))
          ], 2)) : H(``, true)
        ]),
        _: 3
      }, 8, [
        `as`,
        `data-orientation`,
        `class`
      ]));
    }
  }, wr = {
    slots: {
      root: `relative group overflow-hidden bg-default shadow-lg rounded-lg ring ring-default p-4 flex gap-2.5 focus:outline-none`,
      wrapper: `w-0 flex-1 flex flex-col`,
      title: `text-sm font-medium text-highlighted`,
      description: `text-sm text-muted`,
      icon: `shrink-0 size-5`,
      avatar: `shrink-0`,
      avatarSize: `2xl`,
      actions: `flex gap-1.5 shrink-0`,
      progress: `absolute inset-x-0 bottom-0`,
      close: `p-0`
    },
    variants: {
      color: {
        primary: {
          root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary`,
          icon: `text-primary`
        },
        secondary: {
          root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary`,
          icon: `text-secondary`
        },
        success: {
          root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success`,
          icon: `text-success`
        },
        info: {
          root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info`,
          icon: `text-info`
        },
        warning: {
          root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning`,
          icon: `text-warning`
        },
        error: {
          root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error`,
          icon: `text-error`
        },
        neutral: {
          root: `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted`,
          icon: `text-highlighted`
        }
      },
      orientation: {
        horizontal: {
          root: `items-center`,
          actions: `items-center`
        },
        vertical: {
          root: `items-start`,
          actions: `items-start mt-2.5`
        }
      },
      title: {
        true: {
          description: `mt-1`
        }
      }
    },
    defaultVariants: {
      color: `primary`
    }
  }, Tr = {
    __name: `Toast`,
    props: {
      as: {
        type: null,
        required: false
      },
      title: {
        type: [
          String,
          Object,
          Function
        ],
        required: false
      },
      description: {
        type: [
          String,
          Object,
          Function
        ],
        required: false
      },
      icon: {
        type: null,
        required: false
      },
      avatar: {
        type: Object,
        required: false
      },
      color: {
        type: null,
        required: false
      },
      orientation: {
        type: null,
        required: false,
        default: `vertical`
      },
      close: {
        type: [
          Boolean,
          Object
        ],
        required: false,
        default: true
      },
      closeIcon: {
        type: null,
        required: false
      },
      actions: {
        type: Array,
        required: false
      },
      progress: {
        type: [
          Boolean,
          Object
        ],
        required: false,
        default: true
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      defaultOpen: {
        type: Boolean,
        required: false
      },
      open: {
        type: Boolean,
        required: false
      },
      type: {
        type: String,
        required: false
      },
      duration: {
        type: Number,
        required: false
      }
    },
    emits: [
      `escapeKeyDown`,
      `pause`,
      `resume`,
      `swipeStart`,
      `swipeMove`,
      `swipeCancel`,
      `swipeEnd`,
      `update:open`
    ],
    setup(e2, { expose: t2, emit: n2 }) {
      let r2 = e2, i2 = n2, s2 = p(), { t: c2 } = ye(), l2 = K(), u2 = G(`toast`, r2), d2 = vt(Ne(r2, `as`, `defaultOpen`, `open`, `duration`, `type`), i2), f2 = O(() => J({
        extend: J(wr),
        ...l2.ui?.toast || {}
      })({
        color: r2.color,
        orientation: r2.orientation,
        title: !!r2.title || !!s2.title
      })), h2 = g(`rootRef`), _2 = z(0);
      return w(() => {
        h2.value?.$el?.getBoundingClientRect && (_2.value = h2.value.$el.getBoundingClientRect().height);
      }), t2({
        height: _2
      }), (t3, n3) => (M(), R(m(vr), E({
        ref_key: `rootRef`,
        ref: h2
      }, m(d2), {
        "data-orientation": e2.orientation,
        "data-slot": `root`,
        class: f2.value.root({
          class: [
            m(u2)?.root,
            r2.class
          ]
        }),
        style: {
          "--height": _2.value
        }
      }), {
        default: I(({ remaining: r3, duration: i3, open: d3 }) => [
          V(t3.$slots, `leading`, {
            ui: f2.value
          }, () => [
            e2.avatar ? (M(), R(Te, E({
              key: 0,
              size: m(u2)?.avatarSize || f2.value.avatarSize()
            }, e2.avatar, {
              "data-slot": `avatar`,
              class: f2.value.avatar({
                class: m(u2)?.avatar
              })
            }), null, 16, [
              `size`,
              `class`
            ])) : e2.icon ? (M(), R(je, {
              key: 1,
              name: e2.icon,
              "data-slot": `icon`,
              class: b(f2.value.icon({
                class: m(u2)?.icon
              }))
            }, null, 8, [
              `name`,
              `class`
            ])) : H(``, true)
          ]),
          x(`div`, {
            "data-slot": `wrapper`,
            class: b(f2.value.wrapper({
              class: m(u2)?.wrapper
            }))
          }, [
            e2.title || s2.title ? (M(), R(m(yr), {
              key: 0,
              "data-slot": `title`,
              class: b(f2.value.title({
                class: m(u2)?.title
              }))
            }, {
              default: I(() => [
                V(t3.$slots, `title`, {}, () => [
                  typeof e2.title == `function` ? (M(), R(oe(e2.title()), {
                    key: 0
                  })) : typeof e2.title == `object` ? (M(), R(oe(e2.title), {
                    key: 1
                  })) : (M(), S(P, {
                    key: 2
                  }, [
                    o(L(e2.title), 1)
                  ], 64))
                ])
              ]),
              _: 3
            }, 8, [
              `class`
            ])) : H(``, true),
            e2.description || s2.description ? (M(), R(m(gr), {
              key: 1,
              "data-slot": `description`,
              class: b(f2.value.description({
                class: m(u2)?.description
              }))
            }, {
              default: I(() => [
                V(t3.$slots, `description`, {}, () => [
                  typeof e2.description == `function` ? (M(), R(oe(e2.description()), {
                    key: 0
                  })) : typeof e2.description == `object` ? (M(), R(oe(e2.description), {
                    key: 1
                  })) : (M(), S(P, {
                    key: 2
                  }, [
                    o(L(e2.description), 1)
                  ], 64))
                ])
              ]),
              _: 3
            }, 8, [
              `class`
            ])) : H(``, true),
            e2.orientation === `vertical` && (e2.actions?.length || s2.actions) ? (M(), S(`div`, {
              key: 2,
              "data-slot": `actions`,
              class: b(f2.value.actions({
                class: m(u2)?.actions
              }))
            }, [
              V(t3.$slots, `actions`, {}, () => [
                (M(true), S(P, null, C(e2.actions, (t4, r4) => (M(), R(m(hr), {
                  key: r4,
                  "alt-text": t4.label || `Action`,
                  "as-child": ``,
                  onClick: n3[0] || (n3[0] = ce(() => {
                  }, [
                    `stop`
                  ]))
                }, {
                  default: I(() => [
                    a(Ae, E({
                      size: `xs`,
                      color: e2.color
                    }, {
                      ref_for: true
                    }, t4), null, 16, [
                      `color`
                    ])
                  ]),
                  _: 2
                }, 1032, [
                  `alt-text`
                ]))), 128))
              ])
            ], 2)) : H(``, true)
          ], 2),
          e2.orientation === `horizontal` && (e2.actions?.length || s2.actions) || e2.close ? (M(), S(`div`, {
            key: 0,
            "data-slot": `actions`,
            class: b(f2.value.actions({
              class: m(u2)?.actions,
              orientation: `horizontal`
            }))
          }, [
            e2.orientation === `horizontal` && (e2.actions?.length || s2.actions) ? V(t3.$slots, `actions`, {
              key: 0
            }, () => [
              (M(true), S(P, null, C(e2.actions, (t4, r4) => (M(), R(m(hr), {
                key: r4,
                "alt-text": t4.label || `Action`,
                "as-child": ``,
                onClick: n3[1] || (n3[1] = ce(() => {
                }, [
                  `stop`
                ]))
              }, {
                default: I(() => [
                  a(Ae, E({
                    size: `xs`,
                    color: e2.color
                  }, {
                    ref_for: true
                  }, t4), null, 16, [
                    `color`
                  ])
                ]),
                _: 2
              }, 1032, [
                `alt-text`
              ]))), 128))
            ]) : H(``, true),
            e2.close || s2.close ? (M(), R(m(mr), {
              key: 1,
              "as-child": ``
            }, {
              default: I(() => [
                V(t3.$slots, `close`, {
                  ui: f2.value
                }, () => [
                  e2.close ? (M(), R(Ae, E({
                    key: 0,
                    icon: e2.closeIcon || m(l2).ui.icons.close,
                    color: `neutral`,
                    variant: `link`,
                    "aria-label": m(c2)(`toast.close`)
                  }, typeof e2.close == `object` ? e2.close : {}, {
                    "data-slot": `close`,
                    class: f2.value.close({
                      class: m(u2)?.close
                    }),
                    onClick: n3[2] || (n3[2] = ce(() => {
                    }, [
                      `stop`
                    ]))
                  }), null, 16, [
                    `icon`,
                    `aria-label`,
                    `class`
                  ])) : H(``, true)
                ])
              ]),
              _: 3
            })) : H(``, true)
          ], 2)) : H(``, true),
          e2.progress && d3 && r3 > 0 && i3 ? (M(), R(Cr, E({
            key: 1,
            "model-value": r3 / i3 * 100,
            color: e2.color
          }, typeof e2.progress == `object` ? e2.progress : {}, {
            size: `sm`,
            "data-slot": `progress`,
            class: f2.value.progress({
              class: m(u2)?.progress
            })
          }), null, 16, [
            `model-value`,
            `color`,
            `class`
          ])) : H(``, true)
        ]),
        _: 3
      }, 16, [
        `data-orientation`,
        `class`,
        `style`
      ]));
    }
  }, Er = {
    slots: {
      viewport: `fixed flex flex-col w-[calc(100%-2rem)] sm:w-96 z-[100] data-[expanded=true]:h-(--height) focus:outline-none`,
      base: `pointer-events-auto absolute inset-x-0 z-(--index) transform-(--transform) data-[expanded=false]:data-[front=false]:h-(--front-height) data-[expanded=false]:data-[front=false]:*:opacity-0 data-[front=false]:*:transition-opacity data-[front=false]:*:duration-100 data-[state=closed]:animate-[toast-closed_200ms_ease-in-out] data-[state=closed]:data-[expanded=false]:data-[front=false]:animate-[toast-collapsed-closed_200ms_ease-in-out] data-[state=open]:data-[pulsing=odd]:animate-[toast-pulse-a_300ms_ease-out] data-[state=open]:data-[pulsing=even]:animate-[toast-pulse-b_300ms_ease-out] data-[swipe=move]:transition-none transition-[transform,translate,height] duration-200 ease-out`
    },
    variants: {
      position: {
        "top-left": {
          viewport: `left-4`
        },
        "top-center": {
          viewport: `left-1/2 transform -translate-x-1/2`
        },
        "top-right": {
          viewport: `right-4`
        },
        "bottom-left": {
          viewport: `left-4`
        },
        "bottom-center": {
          viewport: `left-1/2 transform -translate-x-1/2`
        },
        "bottom-right": {
          viewport: `right-4`
        }
      },
      swipeDirection: {
        up: `data-[swipe=end]:animate-[toast-slide-up_200ms_ease-out]`,
        right: `data-[swipe=end]:animate-[toast-slide-right_200ms_ease-out]`,
        down: `data-[swipe=end]:animate-[toast-slide-down_200ms_ease-out]`,
        left: `data-[swipe=end]:animate-[toast-slide-left_200ms_ease-out]`
      }
    },
    compoundVariants: [
      {
        position: [
          `top-left`,
          `top-center`,
          `top-right`
        ],
        class: {
          viewport: `top-4`,
          base: `top-0 data-[state=open]:animate-[toast-slide-in-from-top_200ms_ease-in-out]`
        }
      },
      {
        position: [
          `bottom-left`,
          `bottom-center`,
          `bottom-right`
        ],
        class: {
          viewport: `bottom-4`,
          base: `bottom-0 data-[state=open]:animate-[toast-slide-in-from-bottom_200ms_ease-in-out]`
        }
      },
      {
        swipeDirection: [
          `left`,
          `right`
        ],
        class: `data-[swipe=move]:translate-x-(--reka-toast-swipe-move-x) data-[swipe=end]:translate-x-(--reka-toast-swipe-end-x) data-[swipe=cancel]:translate-x-0`
      },
      {
        swipeDirection: [
          `up`,
          `down`
        ],
        class: `data-[swipe=move]:translate-y-(--reka-toast-swipe-move-y) data-[swipe=end]:translate-y-(--reka-toast-swipe-end-y) data-[swipe=cancel]:translate-y-0`
      }
    ],
    defaultVariants: {
      position: `bottom-right`
    }
  }, Dr = Object.assign({
    name: `Toaster`
  }, {
    props: {
      position: {
        type: null,
        required: false
      },
      expand: {
        type: Boolean,
        required: false,
        default: true
      },
      progress: {
        type: Boolean,
        required: false,
        default: true
      },
      portal: {
        type: [
          Boolean,
          String
        ],
        required: false,
        skipCheck: true,
        default: true
      },
      max: {
        type: Number,
        required: false,
        default: 5
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      label: {
        type: String,
        required: false
      },
      duration: {
        type: Number,
        required: false,
        default: 5e3
      },
      disableSwipe: {
        type: Boolean,
        required: false
      },
      swipeThreshold: {
        type: Number,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2, { toasts: n2, remove: r2 } = kt(), o2 = K(), s2 = G(`toaster`, t2);
      k(At, B(() => t2.max));
      let c2 = pe(Ne(t2, `duration`, `label`, `swipeThreshold`, `disableSwipe`)), l2 = pt(B(() => t2.portal)), u2 = O(() => {
        switch (t2.position) {
          case `top-center`:
            return `up`;
          case `top-right`:
          case `bottom-right`:
            return `right`;
          case `bottom-center`:
            return `down`;
          case `top-left`:
          case `bottom-left`:
            return `left`;
        }
        return `right`;
      }), d2 = O(() => J({
        extend: J(Er),
        ...o2.ui?.toaster || {}
      })({
        position: t2.position,
        swipeDirection: u2.value
      }));
      function f2(e3, t3) {
        e3 || r2(t3);
      }
      let p2 = z(false), h2 = O(() => t2.expand || p2.value), g2 = z([]), _2 = O(() => g2.value.reduce((e3, { height: t3 }) => e3 + t3 + 16, 0)), v2 = O(() => g2.value[g2.value.length - 1]?.height || 0);
      function y2(e3) {
        return g2.value.slice(e3 + 1).reduce((e4, { height: t3 }) => e4 + t3 + 16, 0);
      }
      return (r3, o3) => (M(), R(m(rr), E({
        "swipe-direction": u2.value
      }, m(c2)), {
        default: I(() => [
          V(r3.$slots, `default`),
          (M(true), S(P, null, C(m(n2), (t3, r4) => (M(), R(Tr, E({
            key: t3.id,
            ref_for: true,
            ref_key: `refs`,
            ref: g2,
            progress: e2.progress
          }, {
            ref_for: true
          }, m(fe)(t3, [
            `id`,
            `close`,
            `_duplicate`,
            `_updated`
          ]), {
            close: t3.close,
            "data-expanded": h2.value,
            "data-front": !h2.value && r4 === m(n2).length - 1,
            "data-pulsing": t3._duplicate ? t3._duplicate % 2 == 0 ? `even` : `odd` : void 0,
            style: {
              "--index": r4 - m(n2).length + m(n2).length,
              "--before": m(n2).length - 1 - r4,
              "--offset": y2(r4),
              "--scale": h2.value ? `1` : `calc(1 - var(--before) * var(--scale-factor))`,
              "--translate": h2.value ? `calc(var(--offset) * var(--translate-factor))` : `calc(var(--before) * var(--gap))`,
              "--transform": `translateY(var(--translate)) scale(var(--scale))`
            },
            "data-slot": `base`,
            class: d2.value.base({
              class: [
                m(s2)?.base,
                t3.onClick ? `cursor-pointer` : void 0
              ]
            }),
            "onUpdate:open": (e3) => f2(e3, t3.id),
            onClick: (e3) => t3.onClick && t3.onClick(t3)
          }), null, 16, [
            `progress`,
            `close`,
            `data-expanded`,
            `data-front`,
            `data-pulsing`,
            `style`,
            `class`,
            `onUpdate:open`,
            `onClick`
          ]))), 128)),
          a(m(_r), i(U(m(l2))), {
            default: I(() => [
              a(m(xr), {
                "data-expanded": h2.value,
                "data-slot": `viewport`,
                class: b(d2.value.viewport({
                  class: [
                    m(s2)?.viewport,
                    t2.class
                  ]
                })),
                style: T({
                  "--scale-factor": `0.05`,
                  "--translate-factor": e2.position?.startsWith(`top`) ? `1px` : `-1px`,
                  "--gap": e2.position?.startsWith(`top`) ? `16px` : `-16px`,
                  "--front-height": `${v2.value}px`,
                  "--height": `${_2.value}px`
                }),
                onMouseenter: o3[0] || (o3[0] = (e3) => p2.value = true),
                onMouseleave: o3[1] || (o3[1] = (e3) => p2.value = false)
              }, null, 8, [
                `data-expanded`,
                `class`,
                `style`
              ])
            ]),
            _: 1
          }, 16)
        ]),
        _: 3
      }, 16, [
        `swipe-direction`
      ]));
    }
  }), Or = {
    __name: `OverlayProvider`,
    setup(e2) {
      let { overlays: t2, unmount: n2, close: r2 } = Ot(), i2 = O(() => t2.filter((e3) => e3.isMounted)), a2 = (e3) => {
        r2(e3), n2(e3);
      }, o2 = (e3, t3) => {
        r2(e3, t3);
      };
      return (e3, t3) => (M(true), S(P, null, C(i2.value, (e4) => (M(), R(oe(e4.component), E({
        key: e4.id
      }, {
        ref_for: true
      }, e4.props, {
        open: e4.isOpen,
        "onUpdate:open": (t4) => e4.isOpen = t4,
        onClose: (t4) => o2(e4.id, t4),
        "onAfter:leave": (t4) => a2(e4.id)
      }), null, 16, [
        `open`,
        `onUpdate:open`,
        `onClose`,
        `onAfter:leave`
      ]))), 128));
    }
  }, kr = Object.assign({
    name: `App`
  }, {
    props: {
      tooltip: {
        type: Object,
        required: false
      },
      toaster: {
        type: [
          Object,
          null
        ],
        required: false
      },
      locale: {
        type: Object,
        required: false
      },
      portal: {
        type: [
          Boolean,
          String
        ],
        required: false,
        skipCheck: true,
        default: `body`
      },
      dir: {
        type: String,
        required: false
      },
      scrollBody: {
        type: [
          Boolean,
          Object
        ],
        required: false
      },
      nonce: {
        type: String,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2, n2 = pe(Ne(t2, `scrollBody`)), r2 = B(() => t2.tooltip), o2 = B(() => t2.toaster), s2 = B(() => t2.locale);
      return k(ve, s2), k(gt, B(() => t2.portal)), (c2, l2) => (M(), R(m(yt), E({
        "use-id": () => h(),
        dir: t2.dir || s2.value?.dir,
        locale: s2.value?.code
      }, m(n2)), {
        default: I(() => [
          a(m(lt), i(U(r2.value)), {
            default: I(() => [
              e2.toaster === null ? V(c2.$slots, `default`, {
                key: 1
              }) : (M(), R(Dr, i(E({
                key: 0
              }, o2.value)), {
                default: I(() => [
                  V(c2.$slots, `default`)
                ]),
                _: 3
              }, 16)),
              a(Or)
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 16, [
        `use-id`,
        `dir`,
        `locale`
      ]));
    }
  }), Ar = {
    base: `fixed inset-0 flex overflow-hidden`
  }, jr = {
    __name: `DashboardGroup`,
    props: {
      as: {
        type: null,
        required: false
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      storage: {
        type: String,
        required: false,
        default: `cookie`
      },
      storageKey: {
        type: String,
        required: false,
        default: `dashboard`
      },
      persistent: {
        type: Boolean,
        required: false,
        default: true
      },
      unit: {
        type: String,
        required: false,
        default: `%`
      }
    },
    setup(e2) {
      let t2 = e2, n2 = De(), r2 = K(), i2 = G(`dashboardGroup`, t2), a2 = O(() => J({
        extend: J(Ar),
        ...r2.ui?.dashboardGroup || {}
      })), o2 = z(false), s2 = z(false);
      return Mt({
        storage: t2.storage,
        storageKey: t2.storageKey,
        persistent: t2.persistent,
        unit: t2.unit,
        sidebarOpen: o2,
        toggleSidebar: () => {
          n2.hooks.callHook(`dashboard:sidebar:toggle`);
        },
        sidebarCollapsed: s2,
        collapseSidebar: (e3) => {
          n2.hooks.callHook(`dashboard:sidebar:collapse`, e3);
        },
        toggleSearch: () => {
          n2.hooks.callHook(`dashboard:search:toggle`);
        }
      }), (n3, r3) => (M(), R(m(q), {
        as: e2.as,
        class: b(a2.value({
          class: [
            m(i2)?.base,
            t2.class
          ]
        }))
      }, {
        default: I(() => [
          V(n3.$slots, `default`)
        ]),
        _: 3
      }, 8, [
        `as`,
        `class`
      ]));
    }
  };
  (function() {
    try {
      if (typeof document < `u`) {
        var e2 = document.createElement(`style`);
        e2.nonce = document.head.querySelector(`meta[property=csp-nonce]`)?.content, e2.appendChild(document.createTextNode(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32,.72,0,1);animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform, 100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform, 100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true]):after{content:"";position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:hover,[data-vaul-handle]:active{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover: hover) and (pointer: fine){[data-vaul-drawer]{-webkit-user-select:none;user-select:none}}@media (pointer: fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{0%{transform:translate3d(0,var(--initial-transform, 100%),0)}to{transform:translateZ(0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform, 100%),0)}}@keyframes slideFromTop{0%{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}to{transform:translateZ(0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}}@keyframes slideFromLeft{0%{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}to{transform:translateZ(0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}}@keyframes slideFromRight{0%{transform:translate3d(var(--initial-transform, 100%),0,0)}to{transform:translateZ(0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform, 100%),0,0)}}`)), document.head.appendChild(e2);
      }
    } catch (e3) {
      console.error(`vite-plugin-css-injected-by-js`, e3);
    }
  })();
  var Mr = typeof window < `u` && typeof document < `u`;
  typeof WorkerGlobalScope < `u` && globalThis instanceof WorkerGlobalScope;
  var Nr = (e2) => typeof e2 < `u`;
  function Pr(e2) {
    return JSON.parse(JSON.stringify(e2));
  }
  function Fr(e2, t2, n2, r2 = {}) {
    let { clone: i2 = false, passive: a2 = false, eventName: o2, deep: s2 = false, defaultValue: c2, shouldEmit: l2 } = r2, d2 = f(), p2 = n2 || d2?.emit || d2?.$emit?.bind(d2) || d2?.proxy?.$emit?.bind(d2?.proxy), m2 = o2;
    t2 || (t2 = `modelValue`), m2 || (m2 = `update:${t2.toString()}`);
    let h2 = (e3) => i2 ? typeof i2 == `function` ? i2(e3) : Pr(e3) : e3, g2 = () => Nr(e2[t2]) ? h2(e2[t2]) : c2, _2 = (e3) => {
      l2 ? l2(e3) && p2(m2, e3) : p2(m2, e3);
    };
    if (a2) {
      let n3 = z(g2()), r3 = false;
      return u(() => e2[t2], (e3) => {
        r3 || (r3 = true, n3.value = h2(e3), ne(() => r3 = false));
      }), u(n3, (n4) => {
        !r3 && (n4 !== e2[t2] || s2) && _2(n4);
      }, {
        deep: s2
      }), n3;
    } else return O({
      get() {
        return g2();
      },
      set(e3) {
        _2(e3);
      }
    });
  }
  var [Ir, Lr] = be(`DrawerRoot`), Rr = /* @__PURE__ */ new WeakMap();
  function Z(e2, t2, n2 = false) {
    if (!e2 || !(e2 instanceof HTMLElement) || !t2) return;
    let r2 = {};
    Object.entries(t2).forEach(([t3, n3]) => {
      if (t3.startsWith(`--`)) {
        e2.style.setProperty(t3, n3);
        return;
      }
      r2[t3] = e2.style[t3], e2.style[t3] = n3;
    }), !n2 && Rr.set(e2, r2);
  }
  function zr(e2, t2) {
    if (!e2 || !(e2 instanceof HTMLElement)) return;
    let n2 = Rr.get(e2);
    n2 && Object.entries(n2).forEach(([t3, n3]) => {
      e2.style[t3] = n3;
    });
  }
  function Br(e2, t2) {
    let n2 = window.getComputedStyle(e2), r2 = n2.transform || n2.webkitTransform || n2.mozTransform, i2 = r2.match(/^matrix3d\((.+)\)$/);
    return i2 ? Number.parseFloat(i2[1].split(`, `)[Q(t2) ? 13 : 12]) : (i2 = r2.match(/^matrix\((.+)\)$/), i2 ? Number.parseFloat(i2[1].split(`, `)[Q(t2) ? 5 : 4]) : null);
  }
  function Vr(e2) {
    return 8 * (Math.log(e2 + 1) - 2);
  }
  function Q(e2) {
    switch (e2) {
      case `top`:
      case `bottom`:
        return true;
      case `left`:
      case `right`:
        return false;
      default:
        return e2;
    }
  }
  function Hr(e2, t2) {
    if (!e2) return () => {
    };
    let n2 = e2.style.cssText;
    return Object.assign(e2.style, t2), () => {
      e2.style.cssText = n2;
    };
  }
  var $ = {
    DURATION: 0.5,
    EASE: [
      0.32,
      0.72,
      0,
      1
    ]
  }, Ur = 0.4, Wr = 0.25, Gr = 100, Kr = 8, qr = 16, Jr = 26, Yr = `vaul-dragging`;
  function Xr({ activeSnapPoint: e2, snapPoints: t2, drawerRef: n2, overlayRef: r2, fadeFromIndex: i2, onSnapPointChange: a2, direction: o2 }) {
    let s2 = z(typeof window < `u` ? {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    } : void 0);
    function c2() {
      s2.value = {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      };
    }
    w(() => {
      typeof window < `u` && window.addEventListener(`resize`, c2);
    }), ee(() => {
      typeof window < `u` && window.removeEventListener(`resize`, c2);
    });
    let l2 = O(() => (t2.value && e2.value === t2.value[t2.value.length - 1]) ?? null), d2 = O(() => t2.value && t2.value.length > 0 && (i2?.value || i2?.value === 0) && !Number.isNaN(i2?.value) && t2.value[i2?.value ?? -1] === e2.value || !t2.value), f2 = O(() => t2.value?.findIndex((t3) => t3 === e2.value) ?? null), p2 = O(() => t2.value?.map((e3) => {
      let t3 = typeof e3 == `string`, n3 = 0;
      if (t3 && (n3 = Number.parseInt(e3, 10)), Q(o2.value)) {
        let r4 = t3 ? n3 : s2.value ? e3 * s2.value.innerHeight : 0;
        return s2.value ? o2.value === `bottom` ? s2.value.innerHeight - r4 : -s2.value.innerHeight + r4 : r4;
      }
      let r3 = t3 ? n3 : s2.value ? e3 * s2.value.innerWidth : 0;
      return s2.value ? o2.value === `right` ? s2.value.innerWidth - r3 : -s2.value.innerWidth + r3 : r3;
    }) ?? []), m2 = O(() => f2.value === null ? null : p2.value?.[f2.value]), h2 = (s3) => {
      let c3 = p2.value?.findIndex((e3) => e3 === s3) ?? null;
      ne(() => {
        a2(c3, p2.value), Z(n2.value?.$el, {
          transition: `transform ${$.DURATION}s cubic-bezier(${$.EASE.join(`,`)})`,
          transform: Q(o2.value) ? `translate3d(0, ${s3}px, 0)` : `translate3d(${s3}px, 0, 0)`
        });
      }), p2.value && c3 !== p2.value.length - 1 && c3 !== i2?.value ? Z(r2.value?.$el, {
        transition: `opacity ${$.DURATION}s cubic-bezier(${$.EASE.join(`,`)})`,
        opacity: `0`
      }) : Z(r2.value?.$el, {
        transition: `opacity ${$.DURATION}s cubic-bezier(${$.EASE.join(`,`)})`,
        opacity: `1`
      }), e2.value = c3 === null ? null : t2.value?.[c3] ?? null;
    };
    u([
      e2,
      p2,
      t2
    ], () => {
      if (e2.value) {
        let n3 = t2.value?.findIndex((t3) => t3 === e2.value) ?? -1;
        p2.value && n3 !== -1 && typeof p2.value[n3] == `number` && h2(p2.value[n3]);
      }
    }, {
      immediate: true
    });
    function g2({ draggedDistance: e3, closeDrawer: n3, velocity: a3, dismissible: s3 }) {
      if (i2.value === void 0) return;
      let c3 = o2.value === `bottom` || o2.value === `right` ? (m2.value ?? 0) - e3 : (m2.value ?? 0) + e3, u2 = f2.value === i2.value - 1, d3 = f2.value === 0, g3 = e3 > 0;
      if (u2 && Z(r2.value?.$el, {
        transition: `opacity ${$.DURATION}s cubic-bezier(${$.EASE.join(`,`)})`
      }), a3 > 2 && !g3) {
        s3 ? n3() : h2(p2.value[0]);
        return;
      }
      if (a3 > 2 && g3 && p2 && t2.value) {
        h2(p2.value[t2.value.length - 1]);
        return;
      }
      let _3 = p2.value?.reduce((e4, t3) => typeof e4 != `number` || typeof t3 != `number` ? e4 : Math.abs(t3 - c3) < Math.abs(e4 - c3) ? t3 : e4), v3 = Q(o2.value) ? window.innerHeight : window.innerWidth;
      if (a3 > Ur && Math.abs(e3) < v3 * 0.4) {
        let e4 = g3 ? 1 : -1;
        if (e4 > 0 && l2) {
          h2(p2.value[(t2.value?.length ?? 0) - 1]);
          return;
        }
        if (d3 && e4 < 0 && s3 && n3(), f2.value === null) return;
        h2(p2.value[f2.value + e4]);
        return;
      }
      h2(_3);
    }
    function _2({ draggedDistance: e3 }) {
      if (m2.value === null) return;
      let t3 = o2.value === `bottom` || o2.value === `right` ? m2.value - e3 : m2.value + e3;
      (o2.value === `bottom` || o2.value === `right`) && t3 < p2.value[p2.value.length - 1] || (o2.value === `top` || o2.value === `left`) && t3 > p2.value[p2.value.length - 1] || Z(n2.value?.$el, {
        transform: Q(o2.value) ? `translate3d(0, ${t3}px, 0)` : `translate3d(${t3}px, 0, 0)`
      });
    }
    function v2(e3, n3) {
      if (!t2.value || typeof f2.value != `number` || !p2.value || i2.value === void 0) return null;
      let r3 = f2.value === i2.value - 1;
      if (f2.value >= i2.value && n3) return 0;
      if (r3 && !n3) return 1;
      if (!d2.value && !r3) return null;
      let a3 = r3 ? f2.value + 1 : f2.value - 1, o3 = r3 ? p2.value[a3] - p2.value[a3 - 1] : p2.value[a3 + 1] - p2.value[a3], s3 = e3 / Math.abs(o3);
      return r3 ? 1 - s3 : s3;
    }
    return {
      isLastSnapPoint: l2,
      shouldFade: d2,
      getPercentageDragged: v2,
      activeSnapPointIndex: f2,
      onRelease: g2,
      onDrag: _2,
      snapPointsOffset: p2
    };
  }
  function Zr() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
  var Qr = null;
  function $r(e2) {
    let { isOpen: t2, modal: n2, nested: r2, hasBeenOpened: i2, preventScrollRestoration: a2, noBodyStyles: o2 } = e2, s2 = z(typeof window < `u` ? window.location.href : ``), c2 = z(0);
    function l2() {
      if (Zr() && Qr === null && t2.value && !o2.value) {
        Qr = {
          position: document.body.style.position,
          top: document.body.style.top,
          left: document.body.style.left,
          height: document.body.style.height
        };
        let { scrollX: e3, innerHeight: t3 } = window;
        document.body.style.setProperty(`position`, `fixed`, `important`), Object.assign(document.body.style, {
          top: `${-c2.value}px`,
          left: `${-e3}px`,
          right: `0px`,
          height: `auto`
        }), setTimeout(() => {
          requestAnimationFrame(() => {
            let e4 = t3 - window.innerHeight;
            e4 && c2.value >= t3 && (document.body.style.top = `-${c2.value + e4}px`);
          });
        }, 300);
      }
    }
    function d2() {
      if (Zr() && Qr !== null && !o2.value) {
        let e3 = -Number.parseInt(document.body.style.top, 10), t3 = -Number.parseInt(document.body.style.left, 10);
        Object.assign(document.body.style, Qr), window.requestAnimationFrame(() => {
          if (a2.value && s2.value !== window.location.href) {
            s2.value = window.location.href;
            return;
          }
          window.scrollTo(t3, e3);
        }), Qr = null;
      }
    }
    return w(() => {
      function e3() {
        c2.value = window.scrollY;
      }
      e3(), window.addEventListener(`scroll`, e3), D(() => {
        window.removeEventListener(`scroll`, e3);
      });
    }), u([
      t2,
      i2,
      s2
    ], () => {
      r2.value || !i2.value || (t2.value ? (window.matchMedia(`(display-mode: standalone)`).matches || l2(), n2.value || setTimeout(() => {
        d2();
      }, 500)) : d2());
    }), {
      restorePositionSetting: d2
    };
  }
  function ei(e2, t2) {
    return e2 && e2.value ? e2 : t2;
  }
  function ti(e2) {
    let { emitDrag: t2, emitRelease: n2, emitClose: r2, emitOpenChange: i2, open: a2, dismissible: o2, nested: s2, modal: c2, shouldScaleBackground: l2, setBackgroundColorOnScale: d2, scrollLockTimeout: f2, closeThreshold: p2, activeSnapPoint: m2, fadeFromIndex: h2, direction: g2, noBodyStyles: _2, handleOnly: v2, preventScrollRestoration: b2 } = e2, x2 = z(a2.value ?? false), S2 = z(false), C2 = z(false), w2 = z(false), T2 = z(null), E2 = z(null), D2 = z(null), k2 = z(null), ee2 = z(null), te2 = z(false), A2 = z(null), j2 = z(0), M2 = z(false);
    z(0);
    let N2 = z(null);
    z(0);
    let P2 = O(() => N2.value?.$el.getBoundingClientRect().height || 0), F2 = ei(e2.snapPoints, z(void 0)), I2 = O(() => F2 && (F2.value?.length ?? 0) > 0), L2 = z(null), { activeSnapPointIndex: ne2, onRelease: re2, snapPointsOffset: ie2, onDrag: R2, shouldFade: ae2, getPercentageDragged: B2 } = Xr({
      snapPoints: F2,
      activeSnapPoint: m2,
      drawerRef: N2,
      fadeFromIndex: h2,
      overlayRef: T2,
      onSnapPointChange: oe2,
      direction: g2
    });
    function oe2(e3, t3) {
      F2.value && e3 === t3.length - 1 && (E2.value = /* @__PURE__ */ new Date());
    }
    $r({
      isOpen: x2,
      modal: c2,
      nested: s2,
      hasBeenOpened: S2,
      noBodyStyles: _2,
      preventScrollRestoration: b2
    });
    function V2() {
      return (window.innerWidth - Jr) / window.innerWidth;
    }
    function H2(e3, t3) {
      if (!e3) return false;
      let n3 = e3, r3 = window.getSelection()?.toString(), i3 = N2.value ? Br(N2.value.$el, g2.value) : null, a3 = /* @__PURE__ */ new Date();
      if (n3.hasAttribute(`data-vaul-no-drag`) || n3.closest(`[data-vaul-no-drag]`)) return false;
      if (g2.value === `right` || g2.value === `left`) return true;
      if (E2.value && a3.getTime() - E2.value.getTime() < 500) return false;
      if (i3 !== null && (g2.value === `bottom` ? i3 > 0 : i3 < 0)) return true;
      if (r3 && r3.length > 0) return false;
      if (ee2.value && a3.getTime() - ee2.value.getTime() < f2.value && i3 === 0 || t3) return ee2.value = a3, false;
      for (; n3; ) {
        if (n3.scrollHeight > n3.clientHeight) {
          if (n3.scrollTop !== 0) return ee2.value = /* @__PURE__ */ new Date(), false;
          if (n3.getAttribute(`role`) === `dialog`) return true;
        }
        n3 = n3.parentNode;
      }
      return true;
    }
    function U2(e3) {
      !o2.value && !F2.value || N2.value && !N2.value.$el.contains(e3.target) || (C2.value = true, D2.value = /* @__PURE__ */ new Date(), e3.target.setPointerCapture(e3.pointerId), j2.value = Q(g2.value) ? e3.clientY : e3.clientX);
    }
    function se2(e3) {
      var n3;
      if (N2.value && C2.value) {
        let r3 = g2.value === `bottom` || g2.value === `right` ? 1 : -1, i3 = (j2.value - (Q(g2.value) ? e3.clientY : e3.clientX)) * r3, a3 = i3 > 0, s3 = F2.value && !o2.value && !a3;
        if (s3 && ne2.value === 0) return;
        let c3 = Math.abs(i3), u2 = document.querySelector(`[data-vaul-drawer-wrapper]`) || document.querySelector(`[vaul-drawer-wrapper]`), d3 = c3 / P2.value, f3 = B2(c3, a3);
        if (f3 !== null && (d3 = f3), s3 && d3 >= 1 || !te2.value && !H2(e3.target, a3)) return;
        if ((n3 = N2?.value) == null || n3.$el.classList.add(Yr), te2.value = true, Z(N2.value?.$el, {
          transition: `none`
        }), Z(T2.value?.$el, {
          transition: `none`
        }), F2.value && R2({
          draggedDistance: i3
        }), a3 && !F2.value) {
          let e4 = Vr(i3), t3 = Math.min(e4 * -1, 0) * r3;
          Z(N2.value?.$el, {
            transform: Q(g2.value) ? `translate3d(0, ${t3}px, 0)` : `translate3d(${t3}px, 0, 0)`
          });
          return;
        }
        let p3 = 1 - d3;
        if ((ae2.value || h2.value && ne2.value === h2.value - 1) && (t2(d3), Z(T2.value?.$el, {
          opacity: `${p3}`,
          transition: `none`
        }, true)), u2 && T2.value && l2.value) {
          let e4 = Math.min(V2() + d3 * (1 - V2()), 1), t3 = 8 - d3 * 8, n4 = Math.max(0, 14 - d3 * 14);
          Z(u2, {
            borderRadius: `${t3}px`,
            transform: Q(g2.value) ? `scale(${e4}) translate3d(0, ${n4}px, 0)` : `scale(${e4}) translate3d(${n4}px, 0, 0)`,
            transition: `none`
          }, true);
        }
        if (!F2.value) {
          let e4 = c3 * r3;
          Z(N2.value?.$el, {
            transform: Q(g2.value) ? `translate3d(0, ${e4}px, 0)` : `translate3d(${e4}px, 0, 0)`
          });
        }
      }
    }
    function ce2() {
      if (!N2.value) return;
      let e3 = document.querySelector(`[data-vaul-drawer-wrapper]`) || document.querySelector(`[vaul-drawer-wrapper]`), t3 = Br(N2.value.$el, g2.value);
      Z(N2.value.$el, {
        transform: `translate3d(0, 0, 0)`,
        transition: `transform ${$.DURATION}s cubic-bezier(${$.EASE.join(`,`)})`
      }), Z(T2.value?.$el, {
        transition: `opacity ${$.DURATION}s cubic-bezier(${$.EASE.join(`,`)})`,
        opacity: `1`
      }), l2.value && t3 && t3 > 0 && x2.value && Z(e3, {
        borderRadius: `${Kr}px`,
        overflow: `hidden`,
        ...Q(g2.value) ? {
          transform: `scale(${V2()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: `top`
        } : {
          transform: `scale(${V2()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: `left`
        },
        transitionProperty: `transform, border-radius`,
        transitionDuration: `${$.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${$.EASE.join(`,`)})`
      }, true);
    }
    function le2(e3) {
      N2.value && (r2(), e3 || (x2.value = false), window.setTimeout(() => {
        F2.value && (m2.value = F2.value[0]);
      }, $.DURATION * 1e3));
    }
    y(() => {
      if (!x2.value && l2.value && Mr) {
        let e3 = setTimeout(() => {
          zr(document.body);
        }, 200);
        return () => clearTimeout(e3);
      }
    }), u(a2, () => {
      x2.value = a2.value, a2.value || le2();
    });
    function ue2(e3) {
      if (!C2.value || !N2.value) return;
      N2.value.$el.classList.remove(Yr), te2.value = false, C2.value = false, k2.value = /* @__PURE__ */ new Date();
      let t3 = Br(N2.value.$el, g2.value);
      if (!H2(e3.target, false) || !t3 || Number.isNaN(t3) || D2.value === null) return;
      let r3 = k2.value.getTime() - D2.value.getTime(), i3 = j2.value - (Q(g2.value) ? e3.clientY : e3.clientX), a3 = Math.abs(i3) / r3;
      if (a3 > 0.05 && (w2.value = true, window.setTimeout(() => {
        w2.value = false;
      }, 200)), F2.value) {
        re2({
          draggedDistance: i3 * (g2.value === `bottom` || g2.value === `right` ? 1 : -1),
          closeDrawer: le2,
          velocity: a3,
          dismissible: o2.value
        }), n2(true);
        return;
      }
      if (g2.value === `bottom` || g2.value === `right` ? i3 > 0 : i3 < 0) {
        ce2(), n2(true);
        return;
      }
      if (a3 > Ur) {
        le2(), n2(false);
        return;
      }
      if (t3 >= Math.min(N2.value.$el.getBoundingClientRect().height ?? 0, window.innerHeight) * p2.value) {
        le2(), n2(false);
        return;
      }
      n2(true), ce2();
    }
    u(x2, (e3) => {
      e3 && (E2.value = /* @__PURE__ */ new Date()), i2(e3);
    }, {
      immediate: true
    });
    function de2(e3) {
      var t3;
      let n3 = e3 ? (window.innerWidth - qr) / window.innerWidth : 1, r3 = e3 ? -16 : 0;
      A2.value && window.clearTimeout(A2.value), Z(N2.value?.$el, {
        transition: `transform ${$.DURATION}s cubic-bezier(${$.EASE.join(`,`)})`,
        transform: `scale(${n3}) translate3d(0, ${r3}px, 0)`
      }), !e3 && (t3 = N2.value) != null && t3.$el && (A2.value = window.setTimeout(() => {
        let e4 = Br(N2.value?.$el, g2.value);
        Z(N2.value?.$el, {
          transition: `none`,
          transform: Q(g2.value) ? `translate3d(0, ${e4}px, 0)` : `translate3d(${e4}px, 0, 0)`
        });
      }, 500));
    }
    function fe2(e3) {
      if (e3 < 0) return;
      let t3 = Q(g2.value) ? window.innerHeight : window.innerWidth, n3 = (t3 - qr) / t3, r3 = n3 + e3 * (1 - n3), i3 = -16 + e3 * qr;
      Z(N2.value?.$el, {
        transform: Q(g2.value) ? `scale(${r3}) translate3d(0, ${i3}px, 0)` : `scale(${r3}) translate3d(${i3}px, 0, 0)`,
        transition: `none`
      });
    }
    function pe2(e3) {
      let t3 = Q(g2.value) ? window.innerHeight : window.innerWidth, n3 = e3 ? (t3 - qr) / t3 : 1, r3 = e3 ? -16 : 0;
      e3 && Z(N2.value?.$el, {
        transition: `transform ${$.DURATION}s cubic-bezier(${$.EASE.join(`,`)})`,
        transform: Q(g2.value) ? `scale(${n3}) translate3d(0, ${r3}px, 0)` : `scale(${n3}) translate3d(${r3}px, 0, 0)`
      });
    }
    return {
      open: a2,
      isOpen: x2,
      modal: c2,
      keyboardIsOpen: M2,
      hasBeenOpened: S2,
      drawerRef: N2,
      drawerHeightRef: P2,
      overlayRef: T2,
      handleRef: L2,
      isDragging: C2,
      dragStartTime: D2,
      isAllowedToDrag: te2,
      snapPoints: F2,
      activeSnapPoint: m2,
      hasSnapPoints: I2,
      pointerStart: j2,
      dismissible: o2,
      snapPointsOffset: ie2,
      direction: g2,
      shouldFade: ae2,
      fadeFromIndex: h2,
      shouldScaleBackground: l2,
      setBackgroundColorOnScale: d2,
      onPress: U2,
      onDrag: se2,
      onRelease: ue2,
      closeDrawer: le2,
      onNestedDrag: fe2,
      onNestedRelease: pe2,
      onNestedOpenChange: de2,
      emitClose: r2,
      emitDrag: t2,
      emitRelease: n2,
      emitOpenChange: i2,
      nested: s2,
      handleOnly: v2,
      noBodyStyles: _2
    };
  }
  var ni = A({
    __name: `DrawerRoot`,
    props: {
      activeSnapPoint: {
        default: void 0
      },
      closeThreshold: {
        default: Wr
      },
      shouldScaleBackground: {
        type: Boolean,
        default: void 0
      },
      setBackgroundColorOnScale: {
        type: Boolean,
        default: true
      },
      scrollLockTimeout: {
        default: Gr
      },
      fixed: {
        type: Boolean,
        default: void 0
      },
      dismissible: {
        type: Boolean,
        default: true
      },
      modal: {
        type: Boolean,
        default: true
      },
      open: {
        type: Boolean,
        default: void 0
      },
      defaultOpen: {
        type: Boolean,
        default: void 0
      },
      nested: {
        type: Boolean,
        default: false
      },
      direction: {
        default: `bottom`
      },
      noBodyStyles: {
        type: Boolean
      },
      handleOnly: {
        type: Boolean,
        default: false
      },
      preventScrollRestoration: {
        type: Boolean
      },
      snapPoints: {
        default: void 0
      },
      fadeFromIndex: {
        default: void 0
      }
    },
    emits: [
      `drag`,
      `release`,
      `close`,
      `update:open`,
      `update:activeSnapPoint`,
      `animationEnd`
    ],
    setup(e2, { expose: t2, emit: n2 }) {
      let r2 = e2, i2 = n2;
      p();
      let a2 = O(() => r2.fadeFromIndex ?? (r2.snapPoints && r2.snapPoints.length - 1)), o2 = Fr(r2, `open`, i2, {
        defaultValue: r2.defaultOpen,
        passive: r2.open === void 0
      }), s2 = Fr(r2, `activeSnapPoint`, i2, {
        passive: r2.activeSnapPoint === void 0
      }), c2 = {
        emitDrag: (e3) => i2(`drag`, e3),
        emitRelease: (e3) => i2(`release`, e3),
        emitClose: () => i2(`close`),
        emitOpenChange: (e3) => {
          i2(`update:open`, e3), setTimeout(() => {
            i2(`animationEnd`, e3);
          }, $.DURATION * 1e3);
        }
      }, { closeDrawer: l2, hasBeenOpened: u2, modal: d2, isOpen: f2 } = Lr(ti({
        ...c2,
        ...v(r2),
        activeSnapPoint: s2,
        fadeFromIndex: a2,
        open: o2
      }));
      function h2(e3) {
        if (o2.value !== void 0) {
          c2.emitOpenChange(e3);
          return;
        }
        f2.value = e3, e3 ? u2.value = true : l2();
      }
      return t2({
        open: f2
      }), (e3, t3) => (M(), R(m(Ct), {
        open: m(f2),
        modal: m(d2),
        "onUpdate:open": h2
      }, {
        default: I(() => [
          V(e3.$slots, `default`, {
            open: m(f2)
          })
        ]),
        _: 3
      }, 8, [
        `open`,
        `modal`
      ]));
    }
  }), ri = A({
    __name: `DrawerRootNested`,
    props: {
      activeSnapPoint: {},
      closeThreshold: {},
      shouldScaleBackground: {
        type: Boolean
      },
      setBackgroundColorOnScale: {
        type: Boolean
      },
      scrollLockTimeout: {},
      fixed: {
        type: Boolean
      },
      dismissible: {
        type: Boolean
      },
      modal: {
        type: Boolean
      },
      open: {
        type: Boolean
      },
      defaultOpen: {
        type: Boolean
      },
      nested: {
        type: Boolean
      },
      direction: {},
      noBodyStyles: {
        type: Boolean
      },
      handleOnly: {
        type: Boolean
      },
      preventScrollRestoration: {
        type: Boolean
      },
      snapPoints: {},
      fadeFromIndex: {}
    },
    emits: [
      `drag`,
      `release`,
      `close`,
      `update:open`,
      `update:activeSnapPoint`,
      `animationEnd`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = e2, r2 = t2, { onNestedDrag: i2, onNestedOpenChange: a2, onNestedRelease: o2 } = Ir();
      function s2() {
        a2(false);
      }
      function c2(e3) {
        i2(e3);
      }
      function l2(e3) {
        e3 && a2(e3), r2(`update:open`, e3);
      }
      let u2 = vt(n2, r2);
      return (e3, t3) => (M(), R(ni, E(m(u2), {
        nested: ``,
        onClose: s2,
        onDrag: c2,
        onRelease: m(o2),
        "onUpdate:open": l2
      }), {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }, 16, [
        `onRelease`
      ]));
    }
  }), ii = A({
    __name: `DrawerOverlay`,
    setup(e2) {
      let { overlayRef: t2, hasSnapPoints: n2, isOpen: r2, shouldFade: i2 } = Ir();
      return (e3, a2) => (M(), R(m(xt), {
        ref_key: `overlayRef`,
        ref: t2,
        "data-vaul-overlay": ``,
        "data-vaul-snap-points": m(r2) && m(n2) ? `true` : `false`,
        "data-vaul-snap-points-overlay": m(r2) && m(i2) ? `true` : `false`
      }, null, 8, [
        `data-vaul-snap-points`,
        `data-vaul-snap-points-overlay`
      ]));
    }
  });
  function ai() {
    let { direction: e2, isOpen: t2, shouldScaleBackground: n2, setBackgroundColorOnScale: r2, noBodyStyles: i2 } = Ir(), a2 = z(null), o2 = z(document.body.style.backgroundColor);
    function s2() {
      return (window.innerWidth - Jr) / window.innerWidth;
    }
    y((c2) => {
      if (t2.value && n2.value) {
        a2.value && clearTimeout(a2.value);
        let t3 = document.querySelector(`[data-vaul-drawer-wrapper]`) || document.querySelector(`[vaul-drawer-wrapper]`);
        if (!t3) return;
        r2.value && !i2.value && Hr(document.body, {
          background: `black`
        }), Hr(t3, {
          transformOrigin: Q(e2.value) ? `top` : `left`,
          transitionProperty: `transform, border-radius`,
          transitionDuration: `${$.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${$.EASE.join(`,`)})`
        });
        let n3 = Hr(t3, {
          borderRadius: `${Kr}px`,
          overflow: `hidden`,
          ...Q(e2.value) ? {
            transform: `scale(${s2()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
          } : {
            transform: `scale(${s2()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
          }
        });
        c2(() => {
          n3(), a2.value = window.setTimeout(() => {
            o2.value ? document.body.style.background = o2.value : document.body.style.removeProperty(`background`);
          }, $.DURATION * 1e3);
        });
      }
    }, {
      flush: `pre`
    });
  }
  var oi = A({
    __name: `DrawerContent`,
    setup(e2) {
      let { open: t2, isOpen: n2, snapPointsOffset: r2, hasSnapPoints: i2, drawerRef: a2, onPress: o2, onDrag: s2, onRelease: c2, modal: l2, emitOpenChange: u2, dismissible: d2, keyboardIsOpen: f2, closeDrawer: p2, direction: h2, handleOnly: g2 } = Ir();
      ai();
      let _2 = z(false), v2 = O(() => r2.value && r2.value.length > 0 ? `${r2.value[0]}px` : `0`);
      function b2(e3) {
        if (!l2.value || e3.defaultPrevented) {
          e3.preventDefault();
          return;
        }
        f2.value && (f2.value = false), d2.value ? u2(false) : e3.preventDefault();
      }
      function x2(e3) {
        g2.value || o2(e3);
      }
      function S2(e3) {
        g2.value || s2(e3);
      }
      return y(() => {
        i2.value && window.requestAnimationFrame(() => {
          _2.value = true;
        });
      }), (e3, t3) => (M(), R(m(Dt), {
        ref_key: `drawerRef`,
        ref: a2,
        "data-vaul-drawer": ``,
        "data-vaul-drawer-direction": m(h2),
        "data-vaul-delayed-snap-points": _2.value ? `true` : `false`,
        "data-vaul-snap-points": m(n2) && m(i2) ? `true` : `false`,
        style: T({
          "--snap-point-height": v2.value
        }),
        onPointerdown: x2,
        onPointermove: S2,
        onPointerup: m(c2),
        onPointerDownOutside: b2,
        onOpenAutoFocus: t3[0] || (t3[0] = ce(() => {
        }, [
          `prevent`
        ])),
        onEscapeKeyDown: t3[1] || (t3[1] = (e4) => {
          m(d2) || e4.preventDefault();
        })
      }, {
        default: I(() => [
          V(e3.$slots, `default`)
        ]),
        _: 3
      }, 8, [
        `data-vaul-drawer-direction`,
        `data-vaul-delayed-snap-points`,
        `data-vaul-snap-points`,
        `style`,
        `onPointerup`
      ]));
    }
  }), si = [
    `data-vaul-drawer-visible`
  ], ci = {
    "data-vaul-handle-hitarea": ``,
    "aria-hidden": `true`
  }, li = 250, ui = 120, di = A({
    __name: `DrawerHandle`,
    props: {
      preventCycle: {
        type: Boolean,
        default: false
      }
    },
    setup(e2) {
      let t2 = e2, { onPress: n2, onDrag: r2, handleRef: i2, handleOnly: a2, isOpen: o2, snapPoints: s2, activeSnapPoint: c2, isDragging: l2, dismissible: u2, closeDrawer: d2 } = Ir(), f2 = z(null), p2 = z(false);
      function h2() {
        if (p2.value) {
          v2();
          return;
        }
        window.setTimeout(() => {
          g2();
        }, ui);
      }
      function g2() {
        if (l2.value || t2.preventCycle || p2.value) {
          v2();
          return;
        }
        if (v2(), !s2.value || s2.value.length === 0) {
          u2.value || d2();
          return;
        }
        let e3 = c2.value === s2.value[s2.value.length - 1];
        if (e3 && u2.value) {
          d2();
          return;
        }
        let n3 = s2.value.findIndex((e4) => e4 === c2.value);
        if (n3 === -1) return;
        let r3 = e3 ? 0 : n3 + 1;
        c2.value = s2.value[r3];
      }
      function _2() {
        f2.value = window.setTimeout(() => {
          p2.value = true;
        }, li);
      }
      function v2() {
        f2.value && window.clearTimeout(f2.value), p2.value = false;
      }
      function y2(e3) {
        a2.value && n2(e3), _2();
      }
      function b2(e3) {
        a2.value && r2(e3);
      }
      return (e3, t3) => (M(), S(`div`, {
        ref_key: `handleRef`,
        ref: i2,
        "data-vaul-drawer-visible": m(o2) ? `true` : `false`,
        "data-vaul-handle": ``,
        "aria-hidden": `true`,
        onClick: h2,
        onPointercancel: v2,
        onPointerdown: y2,
        onPointermove: b2
      }, [
        x(`span`, ci, [
          V(e3.$slots, `default`)
        ])
      ], 40, si));
    }
  }), fi = {
    slots: {
      overlay: `fixed inset-0 bg-elevated/75`,
      content: `fixed bg-default ring ring-default flex focus:outline-none`,
      handle: [
        `shrink-0 !bg-accented`,
        `transition-opacity`
      ],
      container: `w-full flex flex-col gap-4 p-4 overflow-y-auto`,
      header: ``,
      title: `text-highlighted font-semibold`,
      description: `mt-1 text-muted text-sm`,
      body: `flex-1`,
      footer: `flex flex-col gap-1.5`
    },
    variants: {
      direction: {
        top: {
          content: `mb-24 flex-col-reverse`,
          handle: `mb-4`
        },
        right: {
          content: `flex-row`,
          handle: `!ml-4`
        },
        bottom: {
          content: `mt-24 flex-col`,
          handle: `mt-4`
        },
        left: {
          content: `flex-row-reverse`,
          handle: `!mr-4`
        }
      },
      inset: {
        true: {
          content: `rounded-lg after:hidden overflow-hidden [--initial-transform:calc(100%+1.5rem)]`
        }
      },
      snapPoints: {
        true: ``
      }
    },
    compoundVariants: [
      {
        direction: [
          `top`,
          `bottom`
        ],
        class: {
          content: `h-auto max-h-[96%]`,
          handle: `!w-12 !h-1.5 mx-auto`
        }
      },
      {
        direction: [
          `top`,
          `bottom`
        ],
        snapPoints: true,
        class: {
          content: `h-full`
        }
      },
      {
        direction: [
          `right`,
          `left`
        ],
        class: {
          content: `w-auto max-w-[calc(100%-2rem)]`,
          handle: `!h-12 !w-1.5 mt-auto mb-auto`
        }
      },
      {
        direction: [
          `right`,
          `left`
        ],
        snapPoints: true,
        class: {
          content: `w-full`
        }
      },
      {
        direction: `top`,
        inset: true,
        class: {
          content: `inset-x-4 top-4`
        }
      },
      {
        direction: `top`,
        inset: false,
        class: {
          content: `inset-x-0 top-0 rounded-b-lg`
        }
      },
      {
        direction: `bottom`,
        inset: true,
        class: {
          content: `inset-x-4 bottom-4`
        }
      },
      {
        direction: `bottom`,
        inset: false,
        class: {
          content: `inset-x-0 bottom-0 rounded-t-lg`
        }
      },
      {
        direction: `left`,
        inset: true,
        class: {
          content: `inset-y-4 left-4`
        }
      },
      {
        direction: `left`,
        inset: false,
        class: {
          content: `inset-y-0 left-0 rounded-r-lg`
        }
      },
      {
        direction: `right`,
        inset: true,
        class: {
          content: `inset-y-4 right-4`
        }
      },
      {
        direction: `right`,
        inset: false,
        class: {
          content: `inset-y-0 right-0 rounded-l-lg`
        }
      }
    ]
  }, pi = {
    __name: `Drawer`,
    props: {
      as: {
        type: null,
        required: false
      },
      title: {
        type: String,
        required: false
      },
      description: {
        type: String,
        required: false
      },
      inset: {
        type: Boolean,
        required: false
      },
      content: {
        type: Object,
        required: false
      },
      overlay: {
        type: Boolean,
        required: false,
        default: true
      },
      handle: {
        type: Boolean,
        required: false,
        default: true
      },
      portal: {
        type: [
          Boolean,
          String
        ],
        required: false,
        skipCheck: true,
        default: true
      },
      nested: {
        type: Boolean,
        required: false
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      activeSnapPoint: {
        type: [
          Number,
          String,
          null
        ],
        required: false
      },
      closeThreshold: {
        type: Number,
        required: false
      },
      shouldScaleBackground: {
        type: Boolean,
        required: false
      },
      setBackgroundColorOnScale: {
        type: Boolean,
        required: false
      },
      scrollLockTimeout: {
        type: Number,
        required: false
      },
      fixed: {
        type: Boolean,
        required: false
      },
      dismissible: {
        type: Boolean,
        required: false,
        default: true
      },
      modal: {
        type: Boolean,
        required: false,
        default: true
      },
      open: {
        type: Boolean,
        required: false
      },
      defaultOpen: {
        type: Boolean,
        required: false
      },
      direction: {
        type: String,
        required: false,
        default: `bottom`
      },
      noBodyStyles: {
        type: Boolean,
        required: false
      },
      handleOnly: {
        type: Boolean,
        required: false
      },
      preventScrollRestoration: {
        type: Boolean,
        required: false
      },
      snapPoints: {
        type: Array,
        required: false
      }
    },
    emits: [
      `close:prevent`,
      `drag`,
      `release`,
      `close`,
      `update:open`,
      `update:activeSnapPoint`,
      `animationEnd`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = e2, r2 = t2, s2 = p(), c2 = K(), l2 = G(`drawer`, n2), u2 = vt(Ne(n2, `activeSnapPoint`, `closeThreshold`, `shouldScaleBackground`, `setBackgroundColorOnScale`, `scrollLockTimeout`, `fixed`, `dismissible`, `modal`, `open`, `defaultOpen`, `nested`, `direction`, `noBodyStyles`, `handleOnly`, `preventScrollRestoration`, `snapPoints`), r2), d2 = pt(B(() => n2.portal)), f2 = B(() => n2.content), h2 = O(() => n2.dismissible ? {
        pointerDownOutside: It
      } : [
        `interactOutside`,
        `escapeKeyDown`
      ].reduce((e3, t3) => (e3[t3] = (e4) => {
        e4.preventDefault(), r2(`close:prevent`);
      }, e3), {})), g2 = O(() => J({
        extend: J(fi),
        ...c2.ui?.drawer || {}
      })({
        direction: n2.direction,
        inset: n2.inset,
        snapPoints: n2.snapPoints && n2.snapPoints.length > 0
      }));
      return (t3, r3) => (M(), R(oe(e2.nested ? m(ri) : m(ni)), i(U(m(u2))), {
        default: I(() => [
          s2.default ? (M(), R(m(wt), {
            key: 0,
            "as-child": ``,
            class: b(n2.class)
          }, {
            default: I(() => [
              V(t3.$slots, `default`)
            ]),
            _: 3
          }, 8, [
            `class`
          ])) : H(``, true),
          a(m(St), i(U(m(d2))), {
            default: I(() => [
              e2.overlay ? (M(), R(m(ii), {
                key: 0,
                "data-slot": `overlay`,
                class: b(g2.value.overlay({
                  class: m(l2)?.overlay
                }))
              }, null, 8, [
                `class`
              ])) : H(``, true),
              a(m(oi), E({
                "data-slot": `content`,
                class: g2.value.content({
                  class: [
                    !s2.default && n2.class,
                    m(l2)?.content
                  ]
                })
              }, f2.value, te(h2.value)), {
                default: I(() => [
                  e2.handle ? (M(), R(m(di), {
                    key: 0,
                    "data-slot": `handle`,
                    class: b(g2.value.handle({
                      class: m(l2)?.handle
                    }))
                  }, null, 8, [
                    `class`
                  ])) : H(``, true),
                  !e2.title && !s2.title || !e2.description && !s2.description || s2.content ? (M(), R(m(ut), {
                    key: 1
                  }, {
                    default: I(() => [
                      !e2.title && !s2.title ? (M(), R(m(Et), {
                        key: 0
                      })) : s2.content ? (M(), R(m(Et), {
                        key: 1
                      }, {
                        default: I(() => [
                          V(t3.$slots, `title`, {}, () => [
                            o(L(e2.title), 1)
                          ])
                        ]),
                        _: 3
                      })) : H(``, true),
                      !e2.description && !s2.description ? (M(), R(m(Tt), {
                        key: 2
                      })) : s2.content ? (M(), R(m(Tt), {
                        key: 3
                      }, {
                        default: I(() => [
                          V(t3.$slots, `description`, {}, () => [
                            o(L(e2.description), 1)
                          ])
                        ]),
                        _: 3
                      })) : H(``, true)
                    ]),
                    _: 3
                  })) : H(``, true),
                  V(t3.$slots, `content`, {}, () => [
                    x(`div`, {
                      "data-slot": `container`,
                      class: b(g2.value.container({
                        class: m(l2)?.container
                      }))
                    }, [
                      s2.header || e2.title || s2.title || e2.description || s2.description ? (M(), S(`div`, {
                        key: 0,
                        "data-slot": `header`,
                        class: b(g2.value.header({
                          class: m(l2)?.header
                        }))
                      }, [
                        V(t3.$slots, `header`, {}, () => [
                          e2.title || s2.title ? (M(), R(m(Et), {
                            key: 0,
                            "data-slot": `title`,
                            class: b(g2.value.title({
                              class: m(l2)?.title
                            }))
                          }, {
                            default: I(() => [
                              V(t3.$slots, `title`, {}, () => [
                                o(L(e2.title), 1)
                              ])
                            ]),
                            _: 3
                          }, 8, [
                            `class`
                          ])) : H(``, true),
                          e2.description || s2.description ? (M(), R(m(Tt), {
                            key: 1,
                            "data-slot": `description`,
                            class: b(g2.value.description({
                              class: m(l2)?.description
                            }))
                          }, {
                            default: I(() => [
                              V(t3.$slots, `description`, {}, () => [
                                o(L(e2.description), 1)
                              ])
                            ]),
                            _: 3
                          }, 8, [
                            `class`
                          ])) : H(``, true)
                        ])
                      ], 2)) : H(``, true),
                      s2.body ? (M(), S(`div`, {
                        key: 1,
                        "data-slot": `body`,
                        class: b(g2.value.body({
                          class: m(l2)?.body
                        }))
                      }, [
                        V(t3.$slots, `body`)
                      ], 2)) : H(``, true),
                      s2.footer ? (M(), S(`div`, {
                        key: 2,
                        "data-slot": `footer`,
                        class: b(g2.value.footer({
                          class: m(l2)?.footer
                        }))
                      }, [
                        V(t3.$slots, `footer`)
                      ], 2)) : H(``, true)
                    ], 2)
                  ])
                ]),
                _: 3
              }, 16, [
                `class`
              ])
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 16));
    }
  }, mi = {
    slots: {
      root: `relative hidden lg:flex flex-col min-h-svh min-w-16 w-(--width) shrink-0`,
      header: `h-(--ui-header-height) shrink-0 flex items-center gap-1.5 px-4`,
      body: `flex flex-col gap-4 flex-1 overflow-y-auto px-4 py-2`,
      footer: `shrink-0 flex items-center gap-1.5 px-4 py-2`,
      toggle: ``,
      handle: ``,
      content: `lg:hidden`,
      overlay: `lg:hidden`
    },
    variants: {
      menu: {
        true: {
          header: `sm:px-6`,
          body: `sm:px-6`,
          footer: `sm:px-6`
        }
      },
      side: {
        left: {
          root: `border-e border-default`
        },
        right: {
          root: ``
        }
      },
      toggleSide: {
        left: {
          toggle: ``
        },
        right: {
          toggle: `ms-auto`
        }
      }
    }
  }, hi = [
    `data-collapsed`,
    `data-dragging`
  ], gi = Object.assign({
    inheritAttrs: false
  }, {
    __name: `DashboardSidebar`,
    props: r({
      mode: {
        type: null,
        required: false,
        default: `slideover`
      },
      menu: {
        type: null,
        required: false
      },
      toggle: {
        type: [
          Boolean,
          Object
        ],
        required: false,
        default: true
      },
      toggleSide: {
        type: String,
        required: false,
        default: `left`
      },
      autoClose: {
        type: Boolean,
        required: false,
        default: true
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      id: {
        type: String,
        required: false
      },
      side: {
        type: String,
        required: false,
        default: `left`
      },
      minSize: {
        type: Number,
        required: false,
        default: 10
      },
      maxSize: {
        type: Number,
        required: false,
        default: 20
      },
      defaultSize: {
        type: Number,
        required: false,
        default: 15
      },
      resizable: {
        type: Boolean,
        required: false,
        default: false
      },
      collapsible: {
        type: Boolean,
        required: false,
        default: false
      },
      collapsedSize: {
        type: Number,
        required: false,
        default: 0
      }
    }, {
      open: {
        type: Boolean,
        default: false
      },
      openModifiers: {},
      collapsed: {
        type: Boolean,
        default: false
      },
      collapsedModifiers: {}
    }),
    emits: [
      `update:open`,
      `update:collapsed`
    ],
    setup(e2) {
      let t2 = e2, n2 = p(), r2 = c(e2, `open`, {
        type: Boolean,
        default: false
      }), o2 = c(e2, `collapsed`, {
        type: Boolean,
        default: false
      }), s2 = Ge(), { t: l2 } = ye(), d2 = K(), f2 = G(`dashboardSidebar`, t2), g2 = jt({
        storageKey: `dashboard`,
        unit: `%`,
        sidebarOpen: z(false),
        sidebarCollapsed: z(false)
      }), _2 = `${g2.storageKey}-sidebar-${t2.id || h()}`, { el: v2, size: y2, collapse: C2, isCollapsed: w2, isDragging: T2, onMouseDown: D2, onTouchStart: k2, onDoubleClick: ee2 } = Pt(_2, B(() => ({
        ...g2,
        ...t2
      })), {
        collapsed: o2
      }), [te2, A2] = Ue(), [j2, N2] = Ue();
      de(`dashboard:sidebar:toggle`, () => {
        r2.value = !r2.value;
      }), de(`dashboard:sidebar:collapse`, (e3) => {
        w2.value = e3;
      }), u(r2, () => g2.sidebarOpen.value = r2.value, {
        immediate: true
      }), u(w2, () => g2.sidebarCollapsed.value = w2.value, {
        immediate: true
      }), u(() => s2.fullPath, () => {
        t2.autoClose && (r2.value = false);
      });
      let F2 = O(() => J({
        extend: J(mi),
        ...d2.ui?.dashboardSidebar || {}
      })({
        side: t2.side
      })), L2 = O(() => ({
        slideover: Lt,
        modal: Rt,
        drawer: pi
      })[t2.mode]), ne2 = B(() => xe(t2.menu, {
        content: {
          onOpenAutoFocus: (e3) => e3.preventDefault()
        }
      }, t2.mode === `modal` ? {
        fullscreen: true,
        transition: false
      } : t2.mode === `slideover` ? {
        side: `left`
      } : {}));
      function re2() {
        r2.value = !r2.value;
      }
      return (o3, s3) => (M(), S(P, null, [
        a(m(te2), null, {
          default: I(() => [
            V(o3.$slots, `toggle`, {
              open: r2.value,
              toggle: re2,
              ui: F2.value
            }, () => [
              e2.toggle ? (M(), R(Ft, E({
                key: 0
              }, typeof e2.toggle == `object` ? e2.toggle : {}, {
                side: e2.toggleSide,
                "data-slot": `toggle`,
                class: F2.value.toggle({
                  class: m(f2)?.toggle,
                  toggleSide: e2.toggleSide
                })
              }), null, 16, [
                `side`,
                `class`
              ])) : H(``, true)
            ])
          ]),
          _: 3
        }),
        a(m(j2), null, {
          default: I(() => [
            V(o3.$slots, `resize-handle`, {
              onMouseDown: m(D2),
              onTouchStart: m(k2),
              onDoubleClick: m(ee2),
              ui: F2.value
            }, () => [
              e2.resizable ? (M(), R(Nt, {
                key: 0,
                "aria-controls": _2,
                "data-slot": `handle`,
                class: b(F2.value.handle({
                  class: m(f2)?.handle
                })),
                onMousedown: m(D2),
                onTouchstart: m(k2),
                onDblclick: m(ee2)
              }, null, 8, [
                `class`,
                `onMousedown`,
                `onTouchstart`,
                `onDblclick`
              ])) : H(``, true)
            ])
          ]),
          _: 3
        }),
        e2.side === `right` ? (M(), R(m(N2), {
          key: 0
        })) : H(``, true),
        x(`div`, E({
          id: _2,
          ref_key: `el`,
          ref: v2
        }, o3.$attrs, {
          "data-collapsed": m(w2),
          "data-dragging": m(T2),
          "data-slot": `root`,
          class: F2.value.root({
            class: [
              m(f2)?.root,
              t2.class
            ]
          }),
          style: {
            "--width": `${m(y2) || 0}${m(g2).unit}`
          }
        }), [
          n2.header ? (M(), S(`div`, {
            key: 0,
            "data-slot": `header`,
            class: b(F2.value.header({
              class: m(f2)?.header
            }))
          }, [
            V(o3.$slots, `header`, {
              collapsed: m(w2),
              collapse: m(C2)
            })
          ], 2)) : H(``, true),
          x(`div`, {
            "data-slot": `body`,
            class: b(F2.value.body({
              class: m(f2)?.body
            }))
          }, [
            V(o3.$slots, `default`, {
              collapsed: m(w2),
              collapse: m(C2)
            })
          ], 2),
          n2.footer ? (M(), S(`div`, {
            key: 1,
            "data-slot": `footer`,
            class: b(F2.value.footer({
              class: m(f2)?.footer
            }))
          }, [
            V(o3.$slots, `footer`, {
              collapsed: m(w2),
              collapse: m(C2)
            })
          ], 2)) : H(``, true)
        ], 16, hi),
        e2.side === `left` ? (M(), R(m(N2), {
          key: 1
        })) : H(``, true),
        a(m(L2), E({
          open: r2.value,
          "onUpdate:open": s3[0] || (s3[0] = (e3) => r2.value = e3),
          title: m(l2)(`dashboardSidebar.title`),
          description: m(l2)(`dashboardSidebar.description`)
        }, ne2.value, {
          ui: {
            overlay: F2.value.overlay({
              class: m(f2)?.overlay
            }),
            content: F2.value.content({
              class: m(f2)?.content
            })
          }
        }), {
          content: I((t3) => [
            V(o3.$slots, `content`, i(U(t3)), () => [
              n2.header || e2.mode !== `drawer` ? (M(), S(`div`, {
                key: 0,
                "data-slot": `header`,
                class: b(F2.value.header({
                  class: m(f2)?.header,
                  menu: true
                }))
              }, [
                e2.mode !== `drawer` && e2.toggleSide === `left` ? (M(), R(m(A2), {
                  key: 0
                })) : H(``, true),
                V(o3.$slots, `header`, {
                  collapsed: false,
                  collapse: () => {
                  }
                }),
                e2.mode !== `drawer` && e2.toggleSide === `right` ? (M(), R(m(A2), {
                  key: 1
                })) : H(``, true)
              ], 2)) : H(``, true),
              x(`div`, {
                "data-slot": `body`,
                class: b(F2.value.body({
                  class: m(f2)?.body,
                  menu: true
                }))
              }, [
                V(o3.$slots, `default`, {
                  collapsed: false,
                  collapse: () => {
                  }
                })
              ], 2),
              n2.footer ? (M(), S(`div`, {
                key: 1,
                "data-slot": `footer`,
                class: b(F2.value.footer({
                  class: m(f2)?.footer,
                  menu: true
                }))
              }, [
                V(o3.$slots, `footer`, {
                  collapsed: false,
                  collapse: () => {
                  }
                })
              ], 2)) : H(``, true)
            ])
          ]),
          _: 3
        }, 16, [
          `open`,
          `title`,
          `description`,
          `ui`
        ])
      ], 64));
    }
  }), _i = A({
    __name: `UserMenu`,
    props: {
      collapsed: {
        type: Boolean
      }
    },
    setup(e2) {
      let t2 = Ve(), n2 = K(), r2 = z({
        name: windpress.current_user.name,
        avatar: {
          src: windpress.current_user.avatar,
          alt: windpress.current_user.name
        }
      }), i2 = O(() => {
        let e3 = [
          {
            label: wp.i18n.__(`Rate us`, `windpress`),
            icon: `lucide:star`,
            to: `https://wordpress.org/support/plugin/windpress/reviews/?filter=5/#new-post`,
            target: `_blank`
          },
          {
            label: wp.i18n.__(`Community`, `windpress`),
            icon: `fa6-brands:facebook`,
            to: `https://wind.press/go/facebook`,
            target: `_blank`
          },
          {
            label: wp.i18n.__(`Report an issue`, `windpress`),
            icon: `lucide:bug`,
            to: `https://github.com/wind-press/windpress/issues`,
            target: `_blank`
          },
          {
            label: wp.i18n.__(`Support`, `windpress`),
            icon: `lucide:headset`,
            to: `https://rosua.org/support-portal?utm_source=wordpress-plugins&utm_medium=plugin-menu&utm_campaign=windpress&utm_id=all-edition&windpress_version=${window.windpress._version}`,
            target: `_blank`
          }
        ];
        return window.windpress._via_wp_org && e3.push({
          label: wp.i18n.__(`Upgrade to Pro`, `windpress`),
          icon: `lucide:sparkles`,
          to: `https://wind.press/?utm_source=wordpress-plugins&utm_medium=plugin-menu&utm_campaign=windpress&utm_id=all-edition&windpress_version=${window.windpress._version}#pricing`,
          target: `_blank`
        }), e3;
      }), o2 = O(() => [
        [
          {
            type: `label`,
            label: r2.value.name,
            avatar: r2.value.avatar
          }
        ],
        [
          {
            label: wp.i18n.__(`Appearance`, `windpress`),
            icon: `i-lucide-sun-moon`,
            children: [
              {
                label: wp.i18n.__(`Light`, `windpress`),
                icon: n2.ui.icons.light,
                type: `checkbox`,
                checked: t2.value === `light`,
                onSelect(e3) {
                  e3.preventDefault(), t2.value = `light`;
                }
              },
              {
                label: wp.i18n.__(`Dark`, `windpress`),
                icon: n2.ui.icons.dark,
                type: `checkbox`,
                checked: t2.value === `dark`,
                onUpdateChecked(e3) {
                  e3 && (t2.value = `dark`);
                },
                onSelect(e3) {
                  e3.preventDefault();
                }
              },
              {
                label: wp.i18n.__(`System`, `windpress`),
                icon: n2.ui.icons.system,
                type: `checkbox`,
                checked: t2.value === `system`,
                onUpdateChecked(e3) {
                  e3 && (t2.value = `system`);
                },
                onSelect(e3) {
                  e3.preventDefault();
                }
              }
            ]
          }
        ],
        [
          ...i2.value
        ]
      ]);
      return (t3, n3) => {
        let i3 = Ae, s2 = zt;
        return M(), R(s2, {
          items: o2.value,
          content: {
            align: `center`,
            collisionPadding: 12
          },
          ui: {
            content: e2.collapsed ? `w-48` : `w-(--reka-dropdown-menu-trigger-width)`
          }
        }, {
          "chip-leading": I(({ item: e3 }) => [
            x(`span`, {
              style: T({
                "--chip": `var(--color-${e3.chip}-400)`
              }),
              class: `ms-0.5 size-2 rounded-full bg-(--chip)`
            }, null, 4)
          ]),
          default: I(() => [
            a(i3, E({
              ...r2.value,
              label: e2.collapsed ? void 0 : r2.value?.name,
              trailingIcon: e2.collapsed ? void 0 : `i-lucide-chevrons-up-down`
            }, {
              color: `neutral`,
              variant: `ghost`,
              block: ``,
              square: e2.collapsed,
              class: `data-[state=open]:bg-(--ui-bg-elevated)`,
              ui: {
                trailingIcon: `text-(--ui-text-dimmed)`
              }
            }), null, 16, [
              `square`
            ])
          ]),
          _: 1
        }, 8, [
          `items`,
          `ui`
        ]);
      };
    }
  }), vi = {
    slots: {
      base: ``,
      label: ``,
      trailing: `hidden lg:flex items-center gap-0.5 ms-auto`
    },
    variants: {
      collapsed: {
        true: {
          label: `hidden`,
          trailing: `lg:hidden`
        }
      }
    }
  }, yi = Object.assign({
    inheritAttrs: false
  }, {
    __name: `DashboardSearchButton`,
    props: {
      icon: {
        type: null,
        required: false
      },
      label: {
        type: String,
        required: false
      },
      color: {
        type: null,
        required: false,
        default: `neutral`
      },
      variant: {
        type: null,
        required: false
      },
      collapsed: {
        type: Boolean,
        required: false,
        default: false
      },
      tooltip: {
        type: [
          Boolean,
          Object
        ],
        required: false,
        default: false
      },
      kbds: {
        type: Array,
        required: false,
        default: () => [
          `meta`,
          `k`
        ]
      },
      ui: {
        type: Object,
        required: false
      },
      class: {
        type: null,
        required: false
      },
      activeColor: {
        type: null,
        required: false
      },
      activeVariant: {
        type: null,
        required: false
      },
      size: {
        type: null,
        required: false
      },
      square: {
        type: Boolean,
        required: false
      },
      block: {
        type: Boolean,
        required: false
      },
      loadingAuto: {
        type: Boolean,
        required: false
      },
      onClick: {
        type: [
          Function,
          Array
        ],
        required: false
      },
      avatar: {
        type: Object,
        required: false
      },
      leading: {
        type: Boolean,
        required: false
      },
      leadingIcon: {
        type: null,
        required: false
      },
      trailing: {
        type: Boolean,
        required: false
      },
      trailingIcon: {
        type: null,
        required: false
      },
      loading: {
        type: Boolean,
        required: false
      },
      loadingIcon: {
        type: null,
        required: false
      },
      as: {
        type: null,
        required: false
      },
      type: {
        type: null,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      },
      exactActiveClass: {
        type: String,
        required: false
      },
      viewTransition: {
        type: Boolean,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2, n2 = p(), [r2, o2] = Ue(), s2 = () => fe(n2, [
        `trailing`
      ]), c2 = pe(Be(t2, `icon`, `label`, `variant`, `collapsed`, `tooltip`, `kbds`, `class`, `ui`)), l2 = B(() => xe(typeof t2.tooltip == `boolean` ? {} : t2.tooltip, {
        delayDuration: 0,
        content: {
          side: `right`
        }
      })), { t: u2 } = ye(), d2 = K(), f2 = G(`dashboardSearchButton`, t2), { toggleSearch: h2 } = jt({
        toggleSearch: () => {
        }
      }), g2 = O(() => J({
        extend: J(vi),
        ...d2.ui?.dashboardSearchButton || {}
      })({
        collapsed: t2.collapsed
      }));
      return (n3, p2) => (M(), S(P, null, [
        a(m(r2), null, {
          default: I(() => [
            a(Ae, E({
              icon: e2.icon || m(d2).ui.icons.search,
              label: e2.label || m(u2)(`dashboardSearchButton.label`),
              variant: e2.variant || (e2.collapsed ? `ghost` : `outline`)
            }, {
              ...m(c2),
              ...e2.collapsed ? {
                square: true,
                "aria-label": e2.label || m(u2)(`dashboardSearchButton.label`)
              } : {},
              ...n3.$attrs
            }, {
              class: g2.value.base({
                class: [
                  m(f2)?.base,
                  t2.class
                ]
              }),
              ui: m(Se)(g2.value, m(f2)),
              onClick: m(h2)
            }), ae({
              trailing: I(({ ui: t3 }) => [
                x(`span`, {
                  "data-slot": `trailing`,
                  class: b(g2.value.trailing({
                    class: m(f2)?.trailing
                  }))
                }, [
                  V(n3.$slots, `trailing`, {
                    ui: t3
                  }, () => [
                    e2.kbds?.length ? (M(true), S(P, {
                      key: 0
                    }, C(e2.kbds, (e3, t4) => (M(), R(ht, E({
                      key: t4,
                      variant: `subtle`
                    }, {
                      ref_for: true
                    }, typeof e3 == `string` ? {
                      value: e3
                    } : e3), null, 16))), 128)) : H(``, true)
                  ])
                ], 2)
              ]),
              _: 2
            }, [
              C(s2(), (e3, t3) => ({
                name: t3,
                fn: I((e4) => [
                  V(n3.$slots, t3, i(U(e4)))
                ])
              }))
            ]), 1040, [
              `icon`,
              `label`,
              `variant`,
              `class`,
              `ui`,
              `onClick`
            ])
          ]),
          _: 3
        }),
        e2.collapsed && e2.tooltip ? (M(), R(_t, E({
          key: 0,
          text: e2.label || m(u2)(`dashboardSearchButton.label`)
        }, l2.value), {
          default: I(() => [
            a(m(o2))
          ]),
          _: 1
        }, 16, [
          `text`
        ])) : (M(), R(m(o2), {
          key: 1
        }))
      ], 64));
    }
  }), bi = `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20512%20512'%20style='enable-background:new%200%200%20512%20512;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20fill='currentColor'%20d='M176,384H16c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h160c8.832,0,16,7.2,16,16s-7.168,16-16,16%20c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c26.464,0,48-21.536,48-48S202.464,384,176,384z'%20/%3e%3c/g%3e%3cg%3e%3cpath%20d='M240,256c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c8.832,0,16,7.2,16,16s-7.168,16-16,16H16%20c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h224c26.464,0,48-21.536,48-48S266.464,256,240,256z'%20/%3e%3c/g%3e%3cg%3e%3cpath%20d='M288,32C164.288,32,64,132.288,64,256c0,10.88,1.056,21.536,2.56,32h128.192c-1.792-4.992-2.752-10.4-2.752-16%20c0-26.464,21.536-48,48-48c44.096,0,80,35.904,80,80c0,44.128-35.904,80-80,80h-0.416C249.76,397.408,256,413.92,256,432%20c0,16.032-4.864,30.944-13.024,43.456c14.56,2.976,29.6,4.544,45.024,4.544c123.712,0,224-100.288,224-224S411.712,32,288,32z'%20/%3e%3c/g%3e%3cstyle%3e%20path%20{%20fill:%20%23000%20}%20@media%20(prefers-color-scheme:dark)%20{%20path%20{%20fill:%20%23fff%20}%20}%20%3c/style%3e%3c/svg%3e`, xi = A({
    __name: `ProjectsMenu`,
    props: {
      collapsed: {
        type: Boolean
      }
    },
    setup(e2) {
      let t2 = Vt(), n2 = z(z([
        {
          label: `WindPress`,
          avatar: {
            src: bi,
            alt: `WindPress`
          }
        }
      ]).value[0]), r2 = O(() => [
        [
          {
            label: `v${window.windpress._wp_version}`,
            icon: `fa6-brands:wordpress`
          },
          {
            label: Number(t2.virtualOptions(`general.tailwindcss.version`, 4).value) === 4 ? `v${Ht}` : `v${Ut}`,
            icon: `devicon:tailwindcss`
          },
          {
            label: `v${window.windpress._version}`,
            avatar: {
              src: bi,
              alt: `WindPress`
            }
          }
        ]
      ]);
      return (t3, i2) => {
        let o2 = Ae, s2 = zt;
        return M(), R(s2, {
          items: r2.value,
          content: {
            align: `center`,
            collisionPadding: 12
          },
          ui: {
            content: e2.collapsed ? `w-40` : `w-(--reka-dropdown-menu-trigger-width)`
          }
        }, {
          default: I(() => [
            a(o2, E({
              ...n2.value,
              label: e2.collapsed ? void 0 : n2.value?.label,
              trailingIcon: e2.collapsed ? void 0 : `i-lucide-chevrons-up-down`
            }, {
              color: `neutral`,
              variant: `ghost`,
              block: ``,
              square: e2.collapsed,
              class: [
                `data-[state=open]:bg-(--ui-bg-elevated)`,
                [
                  !e2.collapsed && `py-2`
                ]
              ],
              ui: {
                trailingIcon: `text-(--ui-text-dimmed)`
              }
            }), null, 16, [
              `square`,
              `class`
            ])
          ]),
          _: 1
        }, 8, [
          `items`,
          `ui`
        ]);
      };
    }
  });
  function Si(e2, t2, n2) {
    let r2 = () => new Wt(s(t2) ?? [], s(n2)?.fuseOptions), i2 = z(r2());
    return u(() => s(n2)?.fuseOptions, () => {
      i2.value = r2();
    }, {
      deep: true
    }), u(() => s(t2), (e3) => {
      i2.value.setCollection(e3);
    }, {
      deep: true
    }), {
      fuse: i2,
      results: O(() => {
        let r3 = s(n2);
        if (r3?.matchAllWhenSearchEmpty && !s(e2)) return s(t2).map((e3, t3) => ({
          item: e3,
          refIndex: t3
        }));
        let a2 = r3?.resultLimit;
        return i2.value.search(s(e2), a2 ? {
          limit: a2
        } : void 0);
      })
    };
  }
  var Ci = {
    "&": `&amp;`,
    "<": `&lt;`,
    ">": `&gt;`,
    '"': `&quot;`,
    "'": `&#39;`
  };
  function wi(e2) {
    return e2.replace(/[&<>"']/g, (e3) => Ci[e3]);
  }
  function Ti(e2) {
    return /&(?:amp|lt|gt|quot|#39);/.test(e2);
  }
  function Ei(e2) {
    return Ti(e2) ? e2 : wi(e2);
  }
  function Di(e2, t2) {
    let n2 = ``, r2 = 0, i2 = false;
    for (let a2 = e2.length - 1; a2 >= 0; a2--) {
      if (e2[a2] === `>`) i2 = true;
      else if (e2[a2] === `<`) {
        i2 = false, n2 = e2[a2] + n2;
        continue;
      }
      if (i2 || r2++, r2 <= t2) n2 = e2[a2] + n2;
      else {
        n2 = `...` + n2;
        break;
      }
    }
    return n2;
  }
  function Oi(e2, t2, n2, r2) {
    function i2(e3, n3 = []) {
      e3 || (e3 = ``);
      let r3 = ``, i3 = 0;
      n3.forEach((n4) => {
        if (n4.length === 2 && n4[0] === n4[1]) return;
        let a3 = n4[1] + 1, o2 = a3 - n4[0] >= t2.length;
        r3 += [
          Ei(e3.substring(i3, n4[0])),
          o2 && `<mark>`,
          Ei(e3.substring(n4[0], a3)),
          o2 && `</mark>`
        ].filter(Boolean).join(``), i3 = a3;
      }), r3 += Ei(e3.substring(i3));
      let a2 = r3.indexOf(`<mark>`);
      return a2 !== -1 && (r3 = Di(r3, r3.length - a2)), r3;
    }
    if (e2.matches?.length) {
      for (let t3 of e2.matches) if (!(n2 && t3.key !== n2) && !r2?.includes(t3.key)) return i2(t3.value, t3.indices);
    }
  }
  var ki = {
    slots: {
      root: `flex flex-col min-h-0 min-w-0 divide-y divide-default`,
      input: ``,
      close: ``,
      back: `p-0`,
      content: `relative overflow-hidden flex flex-col`,
      footer: `p-1`,
      viewport: `relative scroll-py-1 overflow-y-auto flex-1 focus:outline-none`,
      group: `p-1 isolate`,
      empty: `text-center text-muted`,
      label: `font-semibold text-highlighted`,
      item: `group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75`,
      itemLeadingIcon: `shrink-0`,
      itemLeadingAvatar: `shrink-0`,
      itemLeadingAvatarSize: ``,
      itemLeadingChip: `shrink-0`,
      itemLeadingChipSize: ``,
      itemTrailing: `ms-auto inline-flex items-center`,
      itemTrailingIcon: `shrink-0`,
      itemTrailingHighlightedIcon: `shrink-0 text-dimmed hidden group-data-highlighted:inline-flex`,
      itemTrailingKbds: `hidden lg:inline-flex items-center shrink-0`,
      itemTrailingKbdsSize: ``,
      itemWrapper: `flex-1 flex flex-col text-start min-w-0`,
      itemLabel: `truncate space-x-1 text-dimmed`,
      itemDescription: `truncate text-muted`,
      itemLabelBase: `text-highlighted [&>mark]:text-inverted [&>mark]:bg-primary`,
      itemLabelPrefix: `text-default`,
      itemLabelSuffix: `text-dimmed [&>mark]:text-inverted [&>mark]:bg-primary`
    },
    variants: {
      virtualize: {
        true: {
          viewport: `p-1 isolate`
        },
        false: {
          viewport: `divide-y divide-default`
        }
      },
      size: {
        xs: {
          input: `[&>input]:h-10`,
          empty: `py-3 text-xs`,
          label: `p-1 text-[10px]/3 gap-1`,
          item: `p-1 text-xs gap-1`,
          itemLeadingIcon: `size-4`,
          itemLeadingAvatarSize: `3xs`,
          itemLeadingChip: `size-4`,
          itemLeadingChipSize: `sm`,
          itemTrailing: `gap-1`,
          itemTrailingIcon: `size-4`,
          itemTrailingHighlightedIcon: `size-4`,
          itemTrailingKbds: `gap-0.5`,
          itemTrailingKbdsSize: `sm`
        },
        sm: {
          input: `[&>input]:h-11`,
          empty: `py-4 text-xs`,
          label: `p-1.5 text-[10px]/3 gap-1.5`,
          item: `p-1.5 text-xs gap-1.5`,
          itemLeadingIcon: `size-4`,
          itemLeadingAvatarSize: `3xs`,
          itemLeadingChip: `size-4`,
          itemLeadingChipSize: `sm`,
          itemTrailing: `gap-1.5`,
          itemTrailingIcon: `size-4`,
          itemTrailingHighlightedIcon: `size-4`,
          itemTrailingKbds: `gap-0.5`,
          itemTrailingKbdsSize: `sm`
        },
        md: {
          input: `[&>input]:h-12`,
          empty: `py-6 text-sm`,
          label: `p-1.5 text-xs gap-1.5`,
          item: `p-1.5 text-sm gap-1.5`,
          itemLeadingIcon: `size-5`,
          itemLeadingAvatarSize: `2xs`,
          itemLeadingChip: `size-5`,
          itemLeadingChipSize: `md`,
          itemTrailing: `gap-1.5`,
          itemTrailingIcon: `size-5`,
          itemTrailingHighlightedIcon: `size-5`,
          itemTrailingKbds: `gap-0.5`,
          itemTrailingKbdsSize: `md`
        },
        lg: {
          input: `[&>input]:h-13`,
          empty: `py-7 text-sm`,
          label: `p-2 text-xs gap-2`,
          item: `p-2 text-sm gap-2`,
          itemLeadingIcon: `size-5`,
          itemLeadingAvatarSize: `2xs`,
          itemLeadingChip: `size-5`,
          itemLeadingChipSize: `md`,
          itemTrailing: `gap-2`,
          itemTrailingIcon: `size-5`,
          itemTrailingHighlightedIcon: `size-5`,
          itemTrailingKbds: `gap-0.5`,
          itemTrailingKbdsSize: `md`
        },
        xl: {
          input: `[&>input]:h-14`,
          empty: `py-8 text-base`,
          label: `p-2 text-sm gap-2`,
          item: `p-2 text-base gap-2`,
          itemLeadingIcon: `size-6`,
          itemLeadingAvatarSize: `xs`,
          itemLeadingChip: `size-6`,
          itemLeadingChipSize: `lg`,
          itemTrailing: `gap-2`,
          itemTrailingIcon: `size-6`,
          itemTrailingHighlightedIcon: `size-6`,
          itemTrailingKbds: `gap-0.5`,
          itemTrailingKbdsSize: `lg`
        }
      },
      active: {
        true: {
          item: `text-highlighted before:bg-elevated`,
          itemLeadingIcon: `text-default`
        },
        false: {
          item: [
            `text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50`,
            `transition-colors before:transition-colors`
          ],
          itemLeadingIcon: [
            `text-dimmed group-data-highlighted:not-group-data-disabled:text-default`,
            `transition-colors`
          ]
        }
      },
      loading: {
        true: {
          itemLeadingIcon: `animate-spin`
        }
      }
    },
    defaultVariants: {
      size: `md`
    }
  }, Ai = [
    `innerHTML`
  ], ji = [
    `innerHTML`
  ], Mi = Object.assign({
    inheritAttrs: false
  }, {
    __name: `CommandPalette`,
    props: r({
      as: {
        type: null,
        required: false
      },
      size: {
        type: null,
        required: false
      },
      icon: {
        type: null,
        required: false
      },
      trailingIcon: {
        type: null,
        required: false
      },
      selectedIcon: {
        type: null,
        required: false
      },
      childrenIcon: {
        type: null,
        required: false
      },
      placeholder: {
        type: String,
        required: false
      },
      autofocus: {
        type: Boolean,
        required: false,
        default: true
      },
      close: {
        type: [
          Boolean,
          Object
        ],
        required: false
      },
      closeIcon: {
        type: null,
        required: false
      },
      back: {
        type: [
          Boolean,
          Object
        ],
        required: false,
        default: true
      },
      backIcon: {
        type: null,
        required: false
      },
      input: {
        type: [
          Boolean,
          Object
        ],
        required: false,
        default: true
      },
      groups: {
        type: Array,
        required: false
      },
      fuse: {
        type: Object,
        required: false
      },
      virtualize: {
        type: [
          Boolean,
          Object
        ],
        required: false,
        default: false
      },
      valueKey: {
        type: null,
        required: false
      },
      labelKey: {
        type: null,
        required: false,
        default: `label`
      },
      descriptionKey: {
        type: null,
        required: false,
        default: `description`
      },
      preserveGroupOrder: {
        type: Boolean,
        required: false,
        default: false
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      multiple: {
        type: Boolean,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      },
      modelValue: {
        type: null,
        required: false
      },
      defaultValue: {
        type: null,
        required: false
      },
      highlightOnHover: {
        type: Boolean,
        required: false,
        default: true
      },
      selectionBehavior: {
        type: String,
        required: false
      },
      by: {
        type: [
          String,
          Function
        ],
        required: false
      },
      loading: {
        type: Boolean,
        required: false
      },
      loadingIcon: {
        type: null,
        required: false
      }
    }, {
      searchTerm: {
        type: String,
        default: ``
      },
      searchTermModifiers: {}
    }),
    emits: r([
      `update:modelValue`,
      `highlight`,
      `entryFocus`,
      `leave`,
      `update:open`
    ], [
      `update:searchTerm`
    ]),
    setup(e2, { emit: t2 }) {
      let n2 = e2, r2 = t2, i2 = p(), s2 = c(e2, `searchTerm`, {
        type: String,
        default: ``
      }), { t: l2 } = ye(), u2 = K(), d2 = G(`commandPalette`, n2), f2 = vt(Ne(n2, `as`, `disabled`, `multiple`, `modelValue`, `defaultValue`, `highlightOnHover`, `by`), r2), h2 = B(() => n2.virtualize ? xe(typeof n2.virtualize == `boolean` ? {} : n2.virtualize, {
        estimateSize: Gt(N2.value, `md`, n2.descriptionKey, !!i2[`item-description`])
      }) : false), [_2, v2] = Ue({
        props: {
          item: {
            type: Object,
            required: true
          },
          group: {
            type: Object,
            required: false
          },
          index: {
            type: Number,
            required: false
          }
        }
      }), y2 = O(() => J({
        extend: J(ki),
        ...u2.ui?.commandPalette || {}
      })({
        size: n2.size,
        virtualize: !!n2.virtualize
      })), w2 = O(() => xe({}, n2.fuse, {
        fuseOptions: {
          ignoreLocation: true,
          threshold: 0.1,
          keys: [
            n2.labelKey,
            `suffix`
          ]
        },
        resultLimit: 12,
        matchAllWhenSearchEmpty: true
      })), T2 = z([]), D2 = O(() => T2.value[T2.value.length - 1]?.placeholder || n2.placeholder || l2(`commandPalette.placeholder`)), k2 = O(() => T2.value?.length ? [
        T2.value[T2.value.length - 1]
      ] : n2.groups), { results: ee2 } = Si(s2, O(() => k2.value?.filter((e3) => e3.id ? !e3.ignoreFilter : (console.warn("[@nuxt/ui] CommandPalette group is missing an `id` property"), false))?.flatMap((e3) => e3.items?.map((t3) => ({
        ...t3,
        group: e3.id
      })) || []) || []), w2), te2 = Fe(ee2, 16, true);
      function A2(e3, t3) {
        let r3 = t3;
        return e3?.postFilter && typeof e3.postFilter == `function` && (r3 = e3.postFilter(s2.value, r3)), {
          ...e3,
          items: r3.slice(0, w2.value.resultLimit).map((e4) => ({
            ...e4,
            labelHtml: Oi(e4, s2.value, n2.labelKey),
            suffixHtml: Oi(e4, s2.value, void 0, [
              n2.labelKey
            ])
          }))
        };
      }
      let j2 = O(() => {
        let e3 = k2.value, t3 = te2.value.reduce((e4, t4) => {
          var _a;
          let { item: n3, matches: r4 } = t4;
          return n3.group ? (e4[_a = n3.group] || (e4[_a] = []), e4[n3.group]?.push({
            ...n3,
            matches: r4
          }), e4) : e4;
        }, {});
        if (n2.preserveGroupOrder) {
          let n3 = [];
          for (let r4 of e3 || []) {
            if (!r4.items?.length) continue;
            let e4 = r4.ignoreFilter ? r4.items : t3[r4.id];
            if (!e4?.length) continue;
            let i3 = A2(r4, e4);
            i3.items?.length && n3.push(i3);
          }
          return n3;
        }
        let r3 = Object.entries(t3).map(([t4, n3]) => {
          let r4 = e3?.find((e4) => e4.id === t4);
          if (!r4) return;
          let i3 = A2(r4, n3);
          return i3.items?.length ? i3 : void 0;
        }).filter((e4) => !!e4);
        return (e3?.map((e4, t4) => ({
          ...e4,
          index: t4
        }))?.filter((e4) => e4.ignoreFilter && e4.items?.length)?.map((e4) => ({
          ...A2(e4, e4.items || []),
          index: e4.index
        }))?.filter((e4) => e4.items?.length) || []).reduce((e4, t4) => (e4.splice(t4.index, 0, t4), e4), [
          ...r3
        ]);
      }), N2 = O(() => j2.value.flatMap((e3) => e3.items || [])), F2 = g(`rootRef`);
      function ne2(e3) {
        e3.children?.length && (T2.value.push({
          id: `history-${T2.value.length}`,
          label: e3.label,
          slot: e3.slot,
          placeholder: e3.placeholder,
          items: e3.children
        }), s2.value = ``, F2.value?.highlightFirstItem());
      }
      function re2() {
        T2.value.length && (T2.value.pop(), s2.value = ``, F2.value?.highlightFirstItem());
      }
      function ie2() {
        s2.value || re2();
      }
      function oe2(e3, t3) {
        t3.children?.length ? (e3.preventDefault(), ne2(t3)) : t3.onSelect?.(e3);
      }
      return (t3, c2) => (M(), S(P, null, [
        a(m(_2), null, {
          default: I(({ item: r3, index: s3, group: c3 }) => [
            a(Oe, E(m(Ee)(r3), {
              custom: ``
            }), {
              default: I(({ active: l3, ...f3 }) => [
                a(m(et), {
                  value: n2.valueKey ? m(W)(r3, n2.valueKey) : m(fe)(r3, [
                    `matches`,
                    `group`,
                    `onSelect`,
                    `labelHtml`,
                    `suffixHtml`,
                    `children`
                  ]),
                  disabled: r3.disabled,
                  "as-child": ``,
                  onSelect: (e3) => oe2(e3, r3)
                }, {
                  default: I(() => [
                    a(ke, E(f3, {
                      "data-slot": `item`,
                      class: y2.value.item({
                        class: [
                          m(d2)?.item,
                          r3.ui?.item,
                          r3.class
                        ],
                        active: l3 || r3.active
                      })
                    }), {
                      default: I(() => [
                        V(t3.$slots, r3.slot || c3?.slot || `item`, {
                          item: r3,
                          index: s3,
                          ui: y2.value
                        }, () => [
                          V(t3.$slots, r3.slot ? `${r3.slot}-leading` : c3?.slot ? `${c3.slot}-leading` : `item-leading`, {
                            item: r3,
                            index: s3,
                            ui: y2.value
                          }, () => [
                            r3.loading ? (M(), R(je, {
                              key: 0,
                              name: e2.loadingIcon || m(u2).ui.icons.loading,
                              "data-slot": `itemLeadingIcon`,
                              class: b(y2.value.itemLeadingIcon({
                                class: [
                                  m(d2)?.itemLeadingIcon,
                                  r3.ui?.itemLeadingIcon
                                ],
                                loading: true
                              }))
                            }, null, 8, [
                              `name`,
                              `class`
                            ])) : r3.icon ? (M(), R(je, {
                              key: 1,
                              name: r3.icon,
                              "data-slot": `itemLeadingIcon`,
                              class: b(y2.value.itemLeadingIcon({
                                class: [
                                  m(d2)?.itemLeadingIcon,
                                  r3.ui?.itemLeadingIcon
                                ],
                                active: l3 || r3.active
                              }))
                            }, null, 8, [
                              `name`,
                              `class`
                            ])) : r3.avatar ? (M(), R(Te, E({
                              key: 2,
                              size: r3.ui?.itemLeadingAvatarSize || m(d2)?.itemLeadingAvatarSize || y2.value.itemLeadingAvatarSize()
                            }, r3.avatar, {
                              "data-slot": `itemLeadingAvatar`,
                              class: y2.value.itemLeadingAvatar({
                                class: [
                                  m(d2)?.itemLeadingAvatar,
                                  r3.ui?.itemLeadingAvatar
                                ],
                                active: l3 || r3.active
                              })
                            }), null, 16, [
                              `size`,
                              `class`
                            ])) : r3.chip ? (M(), R(we, E({
                              key: 3,
                              size: r3.ui?.itemLeadingChipSize || m(d2)?.itemLeadingChipSize || y2.value.itemLeadingChipSize(),
                              inset: ``,
                              standalone: ``
                            }, r3.chip, {
                              "data-slot": `itemLeadingChip`,
                              class: y2.value.itemLeadingChip({
                                class: [
                                  m(d2)?.itemLeadingChip,
                                  r3.ui?.itemLeadingChip
                                ],
                                active: l3 || r3.active
                              })
                            }), null, 16, [
                              `size`,
                              `class`
                            ])) : H(``, true)
                          ]),
                          r3.prefix || r3.labelHtml || m(W)(r3, n2.labelKey) || r3.suffixHtml || r3.suffix || i2[r3.slot ? `${r3.slot}-label` : c3?.slot ? `${c3.slot}-label` : `item-label`] || m(W)(r3, n2.descriptionKey) || i2[r3.slot ? `${r3.slot}-description` : c3?.slot ? `${c3.slot}-description` : `item-description`] ? (M(), S(`span`, {
                            key: 0,
                            "data-slot": `itemWrapper`,
                            class: b(y2.value.itemWrapper({
                              class: [
                                m(d2)?.itemWrapper,
                                r3.ui?.itemWrapper
                              ]
                            }))
                          }, [
                            x(`span`, {
                              "data-slot": `itemLabel`,
                              class: b(y2.value.itemLabel({
                                class: [
                                  m(d2)?.itemLabel,
                                  r3.ui?.itemLabel
                                ],
                                active: l3 || r3.active
                              }))
                            }, [
                              V(t3.$slots, r3.slot ? `${r3.slot}-label` : c3?.slot ? `${c3.slot}-label` : `item-label`, {
                                item: r3,
                                index: s3,
                                ui: y2.value
                              }, () => [
                                r3.prefix ? (M(), S(`span`, {
                                  key: 0,
                                  "data-slot": `itemLabelPrefix`,
                                  class: b(y2.value.itemLabelPrefix({
                                    class: [
                                      m(d2)?.itemLabelPrefix,
                                      r3.ui?.itemLabelPrefix
                                    ]
                                  }))
                                }, L(r3.prefix), 3)) : H(``, true),
                                r3.labelHtml ? (M(), S(`span`, {
                                  key: 1,
                                  "data-slot": `itemLabelBase`,
                                  class: b(y2.value.itemLabelBase({
                                    class: [
                                      m(d2)?.itemLabelBase,
                                      r3.ui?.itemLabelBase
                                    ],
                                    active: l3 || r3.active
                                  })),
                                  innerHTML: r3.labelHtml
                                }, null, 10, Ai)) : (M(), S(`span`, {
                                  key: 2,
                                  "data-slot": `itemLabelBase`,
                                  class: b(y2.value.itemLabelBase({
                                    class: [
                                      m(d2)?.itemLabelBase,
                                      r3.ui?.itemLabelBase
                                    ],
                                    active: l3 || r3.active
                                  }))
                                }, L(m(W)(r3, n2.labelKey)), 3)),
                                r3.suffixHtml ? (M(), S(`span`, {
                                  key: 3,
                                  "data-slot": `itemLabelSuffix`,
                                  class: b(y2.value.itemLabelSuffix({
                                    class: [
                                      m(d2)?.itemLabelSuffix,
                                      r3.ui?.itemLabelSuffix
                                    ],
                                    active: l3 || r3.active
                                  })),
                                  innerHTML: r3.suffixHtml
                                }, null, 10, ji)) : r3.suffix ? (M(), S(`span`, {
                                  key: 4,
                                  "data-slot": `itemLabelSuffix`,
                                  class: b(y2.value.itemLabelSuffix({
                                    class: [
                                      m(d2)?.itemLabelSuffix,
                                      r3.ui?.itemLabelSuffix
                                    ],
                                    active: l3 || r3.active
                                  }))
                                }, L(r3.suffix), 3)) : H(``, true)
                              ])
                            ], 2),
                            m(W)(r3, n2.descriptionKey) || i2[r3.slot ? `${r3.slot}-description` : c3?.slot ? `${c3.slot}-description` : `item-description`] ? (M(), S(`span`, {
                              key: 0,
                              "data-slot": `itemDescription`,
                              class: b(y2.value.itemDescription({
                                class: [
                                  m(d2)?.itemDescription,
                                  r3.ui?.itemDescription
                                ]
                              }))
                            }, [
                              V(t3.$slots, r3.slot ? `${r3.slot}-description` : c3?.slot ? `${c3.slot}-description` : `item-description`, {
                                item: r3,
                                index: s3,
                                ui: y2.value
                              }, () => [
                                o(L(m(W)(r3, n2.descriptionKey)), 1)
                              ])
                            ], 2)) : H(``, true)
                          ], 2)) : H(``, true),
                          x(`span`, {
                            "data-slot": `itemTrailing`,
                            class: b(y2.value.itemTrailing({
                              class: [
                                m(d2)?.itemTrailing,
                                r3.ui?.itemTrailing
                              ]
                            }))
                          }, [
                            V(t3.$slots, r3.slot ? `${r3.slot}-trailing` : c3?.slot ? `${c3.slot}-trailing` : `item-trailing`, {
                              item: r3,
                              index: s3,
                              ui: y2.value
                            }, () => [
                              r3.children && r3.children.length > 0 ? (M(), R(je, {
                                key: 0,
                                name: e2.childrenIcon || m(u2).ui.icons.chevronRight,
                                "data-slot": `itemTrailingIcon`,
                                class: b(y2.value.itemTrailingIcon({
                                  class: [
                                    m(d2)?.itemTrailingIcon,
                                    r3.ui?.itemTrailingIcon
                                  ]
                                }))
                              }, null, 8, [
                                `name`,
                                `class`
                              ])) : r3.kbds?.length ? (M(), S(`span`, {
                                key: 1,
                                "data-slot": `itemTrailingKbds`,
                                class: b(y2.value.itemTrailingKbds({
                                  class: [
                                    m(d2)?.itemTrailingKbds,
                                    r3.ui?.itemTrailingKbds
                                  ]
                                }))
                              }, [
                                (M(true), S(P, null, C(r3.kbds, (e3, t4) => (M(), R(ht, E({
                                  key: t4,
                                  size: r3.ui?.itemTrailingKbdsSize || m(d2)?.itemTrailingKbdsSize || y2.value.itemTrailingKbdsSize()
                                }, {
                                  ref_for: true
                                }, typeof e3 == `string` ? {
                                  value: e3
                                } : e3), null, 16, [
                                  `size`
                                ]))), 128))
                              ], 2)) : c3?.highlightedIcon ? (M(), R(je, {
                                key: 2,
                                name: c3.highlightedIcon,
                                "data-slot": `itemTrailingHighlightedIcon`,
                                class: b(y2.value.itemTrailingHighlightedIcon({
                                  class: [
                                    m(d2)?.itemTrailingHighlightedIcon,
                                    r3.ui?.itemTrailingHighlightedIcon
                                  ]
                                }))
                              }, null, 8, [
                                `name`,
                                `class`
                              ])) : H(``, true)
                            ]),
                            r3.children?.length ? H(``, true) : (M(), R(m(nt), {
                              key: 0,
                              "as-child": ``
                            }, {
                              default: I(() => [
                                a(je, {
                                  name: e2.selectedIcon || m(u2).ui.icons.check,
                                  "data-slot": `itemTrailingIcon`,
                                  class: b(y2.value.itemTrailingIcon({
                                    class: [
                                      m(d2)?.itemTrailingIcon,
                                      r3.ui?.itemTrailingIcon
                                    ]
                                  }))
                                }, null, 8, [
                                  `name`,
                                  `class`
                                ])
                              ]),
                              _: 2
                            }, 1024))
                          ], 2)
                        ])
                      ]),
                      _: 2
                    }, 1040, [
                      `class`
                    ])
                  ]),
                  _: 2
                }, 1032, [
                  `value`,
                  `disabled`,
                  `onSelect`
                ])
              ]),
              _: 2
            }, 1040)
          ]),
          _: 3
        }),
        a(m(Qe), E({
          ...m(f2),
          ...t3.$attrs
        }, {
          ref_key: `rootRef`,
          ref: F2,
          "selection-behavior": e2.selectionBehavior,
          "data-slot": `root`,
          class: y2.value.root({
            class: [
              m(d2)?.root,
              n2.class
            ]
          })
        }), {
          default: I(() => [
            e2.input ? (M(), R(m(tt), {
              key: 0,
              modelValue: s2.value,
              "onUpdate:modelValue": c2[1] || (c2[1] = (e3) => s2.value = e3),
              "as-child": ``
            }, {
              default: I(() => [
                a(Bt, E({
                  variant: `none`,
                  size: e2.size
                }, typeof n2.input == `object` ? n2.input : {}, {
                  placeholder: D2.value,
                  autofocus: e2.autofocus,
                  loading: e2.loading,
                  "loading-icon": e2.loadingIcon,
                  "trailing-icon": e2.trailingIcon,
                  icon: e2.icon || m(u2).ui.icons.search,
                  "data-slot": `input`,
                  class: y2.value.input({
                    class: m(d2)?.input
                  }),
                  onKeydown: se(ie2, [
                    `backspace`
                  ])
                }), ae({
                  _: 2
                }, [
                  T2.value?.length && (e2.back || i2.back) ? {
                    name: `leading`,
                    fn: I(() => [
                      V(t3.$slots, `back`, {
                        ui: y2.value
                      }, () => [
                        a(Ae, E({
                          size: e2.size,
                          icon: e2.backIcon || m(u2).ui.icons.arrowLeft,
                          color: `neutral`,
                          variant: `link`,
                          "aria-label": m(l2)(`commandPalette.back`)
                        }, typeof e2.back == `object` ? e2.back : {}, {
                          "data-slot": `back`,
                          class: y2.value.back({
                            class: m(d2)?.back
                          }),
                          onClick: re2
                        }), null, 16, [
                          `size`,
                          `icon`,
                          `aria-label`,
                          `class`
                        ])
                      ])
                    ]),
                    key: `0`
                  } : void 0,
                  e2.close || i2.close ? {
                    name: `trailing`,
                    fn: I(() => [
                      V(t3.$slots, `close`, {
                        ui: y2.value
                      }, () => [
                        e2.close ? (M(), R(Ae, E({
                          key: 0,
                          size: e2.size,
                          icon: e2.closeIcon || m(u2).ui.icons.close,
                          color: `neutral`,
                          variant: `ghost`,
                          "aria-label": m(l2)(`commandPalette.close`)
                        }, typeof e2.close == `object` ? e2.close : {}, {
                          "data-slot": `close`,
                          class: y2.value.close({
                            class: m(d2)?.close
                          }),
                          onClick: c2[0] || (c2[0] = (e3) => r2(`update:open`, false))
                        }), null, 16, [
                          `size`,
                          `icon`,
                          `aria-label`,
                          `class`
                        ])) : H(``, true)
                      ])
                    ]),
                    key: `1`
                  } : void 0
                ]), 1040, [
                  `size`,
                  `placeholder`,
                  `autofocus`,
                  `loading`,
                  `loading-icon`,
                  `trailing-icon`,
                  `icon`,
                  `class`
                ])
              ]),
              _: 3
            }, 8, [
              `modelValue`
            ])) : H(``, true),
            a(m(ot), {
              "data-slot": `content`,
              class: b(y2.value.content({
                class: m(d2)?.content
              }))
            }, {
              default: I(() => [
                j2.value?.length ? (M(), S(`div`, {
                  key: 0,
                  role: `presentation`,
                  "data-slot": `viewport`,
                  class: b(y2.value.viewport({
                    class: m(d2)?.viewport
                  }))
                }, [
                  e2.virtualize ? (M(), R(m(it), E({
                    key: 0,
                    options: N2.value,
                    "text-content": (e3) => m(W)(e3, n2.labelKey)
                  }, h2.value), {
                    default: I(({ option: e3, virtualItem: t4 }) => [
                      a(m(v2), {
                        item: e3,
                        index: t4.index
                      }, null, 8, [
                        `item`,
                        `index`
                      ])
                    ]),
                    _: 1
                  }, 16, [
                    `options`,
                    `text-content`
                  ])) : (M(true), S(P, {
                    key: 1
                  }, C(j2.value, (e3) => (M(), R(m(at), {
                    key: `group-${e3.id}`,
                    "data-slot": `group`,
                    class: b(y2.value.group({
                      class: m(d2)?.group
                    }))
                  }, {
                    default: I(() => [
                      m(W)(e3, n2.labelKey) ? (M(), R(m(Gn), {
                        key: 0,
                        "data-slot": `label`,
                        class: b(y2.value.label({
                          class: m(d2)?.label
                        }))
                      }, {
                        default: I(() => [
                          o(L(m(W)(e3, n2.labelKey)), 1)
                        ]),
                        _: 2
                      }, 1032, [
                        `class`
                      ])) : H(``, true),
                      (M(true), S(P, null, C(e3.items, (t4, n3) => (M(), R(m(v2), {
                        key: `group-${e3.id}-${n3}`,
                        item: t4,
                        index: n3,
                        group: e3
                      }, null, 8, [
                        `item`,
                        `index`,
                        `group`
                      ]))), 128))
                    ]),
                    _: 2
                  }, 1032, [
                    `class`
                  ]))), 128))
                ], 2)) : (M(), S(`div`, {
                  key: 1,
                  "data-slot": `empty`,
                  class: b(y2.value.empty({
                    class: m(d2)?.empty
                  }))
                }, [
                  V(t3.$slots, `empty`, {
                    searchTerm: s2.value
                  }, () => [
                    o(L(s2.value ? m(l2)(`commandPalette.noMatch`, {
                      searchTerm: s2.value
                    }) : m(l2)(`commandPalette.noData`)), 1)
                  ])
                ], 2))
              ]),
              _: 3
            }, 8, [
              `class`
            ]),
            i2.footer ? (M(), S(`div`, {
              key: 1,
              "data-slot": `footer`,
              class: b(y2.value.footer({
                class: m(d2)?.footer
              }))
            }, [
              V(t3.$slots, `footer`, {
                ui: y2.value
              })
            ], 2)) : H(``, true)
          ]),
          _: 3
        }, 16, [
          `selection-behavior`,
          `class`
        ])
      ], 64));
    }
  }), Ni = {
    slots: {
      modal: ``,
      input: ``
    },
    variants: {
      fullscreen: {
        false: {
          modal: `sm:max-w-3xl h-full sm:h-[28rem]`
        }
      },
      size: {
        xs: {},
        sm: {},
        md: {},
        lg: {},
        xl: {}
      }
    },
    defaultVariants: {
      size: `md`
    }
  }, Pi = {
    __name: `DashboardSearch`,
    props: r({
      size: {
        type: null,
        required: false
      },
      icon: {
        type: null,
        required: false
      },
      placeholder: {
        type: String,
        required: false
      },
      autofocus: {
        type: Boolean,
        required: false
      },
      loading: {
        type: Boolean,
        required: false
      },
      loadingIcon: {
        type: null,
        required: false
      },
      close: {
        type: [
          Boolean,
          Object
        ],
        required: false,
        default: true
      },
      closeIcon: {
        type: null,
        required: false
      },
      shortcut: {
        type: String,
        required: false,
        default: `meta_k`
      },
      groups: {
        type: Array,
        required: false
      },
      fuse: {
        type: Object,
        required: false
      },
      colorMode: {
        type: Boolean,
        required: false,
        default: true
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      title: {
        type: String,
        required: false
      },
      description: {
        type: String,
        required: false
      },
      overlay: {
        type: Boolean,
        required: false
      },
      transition: {
        type: Boolean,
        required: false
      },
      content: {
        type: Object,
        required: false
      },
      dismissible: {
        type: Boolean,
        required: false
      },
      fullscreen: {
        type: Boolean,
        required: false,
        default: false
      },
      modal: {
        type: Boolean,
        required: false
      },
      portal: {
        type: [
          Boolean,
          String
        ],
        required: false,
        skipCheck: true
      }
    }, {
      open: {
        type: Boolean,
        default: false
      },
      openModifiers: {},
      searchTerm: {
        type: String,
        default: ``
      },
      searchTermModifiers: {}
    }),
    emits: [
      `update:open`,
      `update:searchTerm`
    ],
    setup(e2, { expose: t2 }) {
      let n2 = e2, r2 = p(), o2 = c(e2, `open`, {
        type: Boolean,
        default: false
      }), s2 = c(e2, `searchTerm`, {
        type: String,
        default: ``
      });
      de(`dashboard:search:toggle`, () => {
        o2.value = !o2.value;
      });
      let { t: l2 } = ye(), u2 = me(), d2 = K(), f2 = G(`dashboardSearch`, n2), h2 = pe(Ne(n2, `size`, `icon`, `placeholder`, `autofocus`, `loading`, `loadingIcon`, `close`, `closeIcon`)), _2 = pe(Ne(n2, `overlay`, `transition`, `content`, `dismissible`, `fullscreen`, `modal`, `portal`)), v2 = () => fe(r2, [
        `content`
      ]), y2 = O(() => xe({}, n2.fuse, {
        fuseOptions: {}
      })), b2 = O(() => J({
        extend: J(Ni),
        ...d2.ui?.dashboardSearch || {}
      })({
        size: n2.size,
        fullscreen: n2.fullscreen
      })), x2 = O(() => {
        let e3 = [];
        return e3.push(...n2.groups || []), n2.colorMode && !u2?.forced && e3.push({
          id: `theme`,
          label: l2(`dashboardSearch.theme`),
          items: [
            {
              label: l2(`colorMode.system`),
              icon: d2.ui.icons.system,
              active: u2.preference === `system`,
              onSelect: () => {
                u2.preference = `system`;
              }
            },
            {
              label: l2(`colorMode.light`),
              icon: d2.ui.icons.light,
              active: u2.preference === `light`,
              onSelect: () => {
                u2.preference = `light`;
              }
            },
            {
              label: l2(`colorMode.dark`),
              icon: d2.ui.icons.dark,
              active: u2.preference === `dark`,
              onSelect: () => {
                u2.preference = `dark`;
              }
            }
          ]
        }), e3;
      }), S2 = g(`commandPaletteRef`);
      function w2(e3) {
        e3.disabled || (o2.value = false, s2.value = ``);
      }
      return Ce({
        [n2.shortcut]: {
          usingInput: true,
          handler: () => o2.value = !o2.value
        }
      }), t2({
        commandPaletteRef: S2
      }), (t3, r3) => (M(), R(Rt, E({
        open: o2.value,
        "onUpdate:open": r3[2] || (r3[2] = (e3) => o2.value = e3),
        title: e2.title || m(l2)(`dashboardSearch.title`),
        description: e2.description || m(l2)(`dashboardSearch.description`)
      }, m(_2), {
        "data-slot": `modal`,
        class: b2.value.modal({
          class: [
            m(f2)?.modal,
            n2.class
          ]
        })
      }), {
        content: I((e3) => [
          V(t3.$slots, `content`, i(U(e3)), () => [
            a(Mi, E({
              ref_key: `commandPaletteRef`,
              ref: S2,
              "search-term": s2.value,
              "onUpdate:searchTerm": r3[0] || (r3[0] = (e4) => s2.value = e4)
            }, m(h2), {
              groups: x2.value,
              fuse: y2.value,
              input: {
                fixed: true
              },
              ui: m(Se)(m(fe)(b2.value, [
                `modal`
              ]), m(f2)),
              "onUpdate:modelValue": w2,
              "onUpdate:open": r3[1] || (r3[1] = (e4) => o2.value = e4)
            }), ae({
              _: 2
            }, [
              C(v2(), (e4, n3) => ({
                name: n3,
                fn: I((e5) => [
                  V(t3.$slots, n3, i(U(e5)))
                ])
              }))
            ]), 1040, [
              `search-term`,
              `groups`,
              `fuse`,
              `ui`
            ])
          ])
        ]),
        _: 3
      }, 16, [
        `open`,
        `title`,
        `description`,
        `class`
      ]));
    }
  }, Fi = `data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%3e%3cpath%20d='m255.487%20348.511-38.054%2021.97-15.574%20124.592c-.536%204.286.794%208.596%203.653%2011.834s6.97%205.093%2011.289%205.093h75.578c4.32%200%208.43-1.855%2011.289-5.093s4.189-7.548%203.653-11.834l-21.591-172.724c-8.206%2010.444-18.406%2019.327-30.243%2026.162z'%3e%3c/path%3e%3cpath%20d='m270.097%20158.141v-143.082c0-5.219-2.702-10.066-7.142-12.81-4.44-2.743-9.982-2.994-14.651-.659l-27.05%2013.525c-25.759%2012.879-41.761%2038.771-41.761%2067.57v83.59c0%2016.328%205.224%2031.449%2014.064%2043.817l29.912-17.27c11.989-15.749%2028.037-27.701%2046.628-34.681z'%3e%3c/path%3e%3cpath%20d='m236.976%20268.498c-13.719-5.811-23.992-18.2-26.868-33.186l-145.939%2084.259c-4.52%202.609-7.367%207.373-7.523%2012.59-.157%205.217%202.399%2010.143%206.755%2013.018l25.238%2016.664c12.671%208.366%2027.115%2012.574%2041.598%2012.574%2012.988%200%2026.008-3.386%2037.799-10.194l72.391-41.795c14.14-8.164%2024.624-20.249%2030.914-34.088z'%3e%3c/path%3e%3cpath%20d='m417.584%20233.375-72.391-41.795c-17.475-10.09-37.835-12.769-57.325-7.547-3.598.964-7.085%202.18-10.446%203.625%2013.427%207.871%2022.47%2022.446%2022.47%2039.103%200%2013.661-6.087%2025.919-15.68%2034.232l146.636%2084.66c2.327%201.344%204.927%202.018%207.529%202.018%202.452%200%204.906-.598%207.135-1.798%204.596-2.473%207.583-7.149%207.896-12.359l1.813-30.189c1.726-28.747-12.696-55.551-37.637-69.95z'%3e%3c/path%3e%3ccircle%20cx='254.59'%20cy='226.761'%20r='15.184'%3e%3c/circle%3e%3c/g%3e%3cstyle%3e%20path%20{%20fill:%20%23000%20}%20@media%20(prefers-color-scheme:dark)%20{%20path%20{%20fill:%20%23fff%20}%20}%20%3c/style%3e%3c/svg%3e`, Ii = `data:image/svg+xml,%3csvg%20width='19'%20height='16'%20viewBox='0%200%2019%2016'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.28%2015.06C2.7%2015.06%202.16%2014.92%201.66%2014.64C1.16%2014.34%200.91%2013.85%200.91%2013.17C0.91%2012.23%201.24%2011.11%201.9%209.81C2.58%208.51%203.35%207.16%204.21%205.76C6.55%201.96%208.21%200.0599992%209.19%200.0599992C9.39%200.0599992%209.59%200.139999%209.79%200.3C10.01%200.44%2010.13%200.599999%2010.15%200.779999L8.05%203.6C7.23%204.7%206.49%205.72%205.83%206.66C5.17%207.58%204.6%208.41%204.12%209.15C3.88%209.53%203.61%209.96%203.31%2010.44C3.01%2010.92%202.74%2011.42%202.5%2011.94C2.28%2012.44%202.17%2012.95%202.17%2013.47C2.17%2013.71%202.24%2013.93%202.38%2014.13C2.52%2014.31%202.77%2014.4%203.13%2014.4C3.77%2014.4%204.61%2014.06%205.65%2013.38C6.69%2012.68%207.72%2011.72%208.74%2010.5C8.84%2010.38%208.95%2010.27%209.07%2010.17C9.19%2010.07%209.29%2010.02%209.37%2010.02C9.47%2010.02%209.52%2010.08%209.52%2010.2C9.52%2010.26%209.45%2010.38%209.31%2010.56C9.19%2010.72%209.09%2010.85%209.01%2010.95L8.29%2011.76C7.89%2012.2%207.41%2012.68%206.85%2013.2C6.31%2013.72%205.73%2014.16%205.11%2014.52C4.51%2014.88%203.9%2015.06%203.28%2015.06ZM10.5749%2015.39C9.93492%2015.39%209.35492%2015.19%208.83492%2014.79C8.31492%2014.37%208.05492%2013.82%208.05492%2013.14C8.05492%2011.72%208.92492%2010.1%2010.6649%208.28C12.4449%206.44%2014.0349%205.52%2015.4349%205.52C15.9149%205.52%2016.2949%205.65%2016.5749%205.91C16.8549%206.15%2016.9949%206.45%2016.9949%206.81C16.9949%207.31%2016.8749%207.77%2016.6349%208.19C16.3549%208.71%2015.9549%208.97%2015.4349%208.97C14.9149%208.97%2014.6549%208.81%2014.6549%208.49C14.6549%208.27%2014.7849%207.94%2015.0449%207.5C15.3249%207.04%2015.4649%206.8%2015.4649%206.78C15.4649%206.74%2015.4349%206.72%2015.3749%206.72C14.8149%206.78%2014.0349%207.19%2013.0349%207.95C12.5949%208.29%2012.2049%208.61%2011.8649%208.91C11.5449%209.21%2011.2849%209.5%2011.0849%209.78L9.91492%2011.49C9.79492%2011.67%209.66492%2011.98%209.52492%2012.42C9.40492%2012.86%209.34492%2013.19%209.34492%2013.41C9.34492%2013.81%209.47492%2014.14%209.73492%2014.4C10.0149%2014.66%2010.3649%2014.79%2010.7849%2014.79C11.7849%2014.79%2013.1049%2014.14%2014.7449%2012.84C16.0649%2011.8%2017.1249%2010.75%2017.9249%209.69C18.0249%209.57%2018.1449%209.51%2018.2849%209.51C18.4249%209.51%2018.4949%209.55%2018.4949%209.63C18.4949%209.69%2018.4449%209.79%2018.3449%209.93C17.2449%2011.39%2015.9549%2012.65%2014.4749%2013.71C12.8949%2014.83%2011.5949%2015.39%2010.5749%2015.39Z'%20fill='currentColor'/%3e%3cstyle%3e%20path%20{%20fill:%20%23000%20}%20@media%20(prefers-color-scheme:dark)%20{%20path%20{%20fill:%20%23fff%20}%20}%20%3c/style%3e%3c/svg%3e`, Li = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='400'%20viewBox='0%200%20400%20400'%3e%3cpath%20fill='currentColor'%20fill-rule='evenodd'%20d='M%200%200%20H%20400%20V%20400%20H%200%20Z%20M%20195%2061%20L%20158%2099%20L%20400%20333%20L%20400%20259%20Z%20M%200%2075%20L%200%20149%20L%20195%20339%20L%20232%20301%20Z'%20/%3e%3cstyle%3e%20path%20{%20fill:%20%23000%20}%20@media%20(prefers-color-scheme:dark)%20{%20path%20{%20fill:%20%23fff%20}%20}%20%3c/style%3e%3c/svg%3e`, Ri = A({
    __name: `App`,
    setup(e2) {
      let t2 = qe(), n2 = kt(), { generateCache: r2 } = Kt(), i2 = [
        [
          {
            label: wp.i18n.__(`Files`, `windpress`),
            icon: `lucide:folder`,
            to: t2.resolve({
              name: `files`
            })
          },
          {
            label: wp.i18n.__(`Wizard`, `windpress`),
            icon: `lucide:zap`,
            to: t2.resolve({
              name: `wizard`
            })
          },
          {
            label: wp.i18n.__(`Logs`, `windpress`),
            icon: `lucide:logs`,
            to: t2.resolve({
              name: `logs`
            })
          },
          {
            label: wp.i18n.__(`Settings`, `windpress`),
            icon: `lucide:settings`,
            to: t2.resolve({
              name: `settings`
            }),
            defaultOpen: true,
            children: [
              {
                label: wp.i18n.__(`General`, `windpress`),
                to: t2.resolve({
                  name: `settings.general`
                }),
                exact: true
              },
              {
                label: wp.i18n.__(`Performance`, `windpress`),
                to: t2.resolve({
                  name: `settings.performance`
                }),
                exact: true
              },
              {
                label: wp.i18n.__(`Integrations`, `windpress`),
                to: t2.resolve({
                  name: `settings.integrations`
                })
              }
            ]
          }
        ],
        [
          {
            label: wp.i18n.__(`Documentation`, `windpress`),
            icon: `i-lucide-book-open`,
            to: `https://wind.press/docs?utm_source=wordpress-plugins&utm_medium=plugin-menu&utm_campaign=windpress&utm_id=all-edition&windpress_version=${window.windpress._version}`,
            target: `_blank`
          },
          {
            label: wp.i18n.__(`Discussions`, `windpress`),
            icon: `lucide:messages-square`,
            to: `https://github.com/wind-press/windpress/discussions`,
            target: `_blank`
          }
        ]
      ], o2 = O(() => [
        {
          id: `links`,
          label: wp.i18n.__(`Go to`, `windpress`),
          items: i2[0].flat()
        },
        {
          id: `actions`,
          label: wp.i18n.__(`Actions`, `windpress`),
          items: [
            {
              label: wp.i18n.__(`Generate cache`, `windpress`),
              icon: `lucide:codesandbox`,
              kbds: [
                `meta`,
                `J`
              ],
              onSelect: () => {
                r2();
              }
            }
          ]
        },
        {
          id: `misc`,
          label: wp.i18n.__(`Misc`, `windpress`),
          items: [
            {
              id: `yabe-webfont`,
              label: `Yabe Webfont`,
              avatar: {
                src: Fi,
                alt: `Yabe Webfont`,
                class: `rounded-none bg-transparent`
              },
              to: `https://webfont.yabe.land/?utm_source=wordpress-plugins&utm_medium=plugin-menu&utm_campaign=windpress&utm_id=all-edition&windpress_version=${window.windpress._version}`,
              target: `_blank`
            },
            {
              id: `livecanvas`,
              label: `LiveCanvas`,
              avatar: {
                src: Ii,
                alt: `LiveCanvas`,
                class: `rounded-none bg-transparent [&>img]:object-contain`
              },
              to: `https://livecanvas.com/?utm_source=wordpress-plugins&utm_medium=plugin-menu&utm_campaign=windpress&utm_id=all-edition&windpress_version=${window.windpress._version}`,
              target: `_blank`
            },
            {
              id: `omni-icon`,
              label: `Omni Icon`,
              avatar: {
                src: Li,
                alt: `Omni Icon`,
                class: `rounded-none bg-transparent`
              },
              to: `https://wordpress.org/plugins/omni-icon/?utm_source=wordpress-plugins&utm_medium=plugin-menu&utm_campaign=windpress&utm_id=all-edition&windpress_version=${window.windpress._version}`,
              target: `_blank`
            },
            ...i2[1].flat()
          ]
        }
      ]), s2 = localStorage.getItem(`windpress-ask-for-review-${window.windpress._version}`) ?? -1, c2 = z(s2 === -1 || s2 !== `done` && s2 !== `never` && /* @__PURE__ */ new Date() > new Date(s2)), l2 = (e3) => {
        if (localStorage.setItem(`windpress-ask-for-review-${window.windpress._version}`, e3), e3 === `done`) window.open(`https://wordpress.org/support/plugin/windpress/reviews/?filter=5/#new-post`, `_blank`);
        else if (e3 === `later`) {
          let e4 = /* @__PURE__ */ new Date();
          e4.setDate(e4.getDate() + 7), localStorage.setItem(`windpress-ask-for-review-${window.windpress._version}`, e4.toString());
        }
        c2.value = false;
      };
      return w(() => {
        c2.value && n2.add({
          title: wp.i18n.__(`WindPress will always try to make you smile.`, `windpress`),
          icon: `lucide:smile`,
          description: wp.i18n.__(`Would you mind taking a moment to leave a review on WordPress.org? It would mean a lot to us!`, `windpress`),
          duration: 0,
          close: false,
          actions: [
            {
              label: wp.i18n.__(`OK, Let's do it!`, `windpress`),
              color: `success`,
              variant: `outline`,
              block: true,
              onClick: () => {
                l2(`done`);
              }
            },
            {
              label: wp.i18n.__(`Later`, `windpress`),
              color: `neutral`,
              variant: `ghost`,
              onClick: () => {
                l2(`later`);
              }
            },
            {
              label: wp.i18n.__(`Never`, `windpress`),
              color: `error`,
              variant: `ghost`,
              onClick: () => {
                l2(`never`);
              }
            }
          ]
        });
      }), Ce(ge(o2.value)), (e3, t3) => {
        let n3 = Pi, r3 = xi, s3 = yi, c3 = bt, l3 = _i, u2 = gi, d2 = _(`RouterView`), f2 = jr, p2 = kr;
        return M(), R(j, null, {
          default: I(() => [
            a(p2, {
              toaster: {
                class: `windpress-style`
              }
            }, {
              default: I(() => [
                a(f2, {
                  storage: `local`,
                  class: `bg-(--ui-bg) text-(--ui-text) top-(--wp-admin--admin-bar--height) left-(--wp-admin--sidebar-width) right-0 bottom-0`
                }, {
                  default: I(() => [
                    a(n3, {
                      groups: o2.value,
                      placeholder: e3.i18n.__(`Type a command or search...`, `windpress`),
                      colorMode: false
                    }, null, 8, [
                      `groups`,
                      `placeholder`
                    ]),
                    a(u2, {
                      collapsible: ``,
                      resizable: ``,
                      class: `bg-(--ui-bg-elevated)/25 min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]`,
                      ui: {
                        root: `flex`,
                        footer: `lg:border-t lg:border-(--ui-border)`
                      }
                    }, {
                      header: I(({ collapsed: e4 }) => [
                        a(r3, {
                          collapsed: e4
                        }, null, 8, [
                          `collapsed`
                        ])
                      ]),
                      default: I(({ collapsed: t4 }) => [
                        a(s3, {
                          label: e3.i18n.__(`Search...`, `windpress`),
                          collapsed: t4,
                          class: `bg-transparent ring-(--ui-border)`
                        }, null, 8, [
                          `label`,
                          `collapsed`
                        ]),
                        a(c3, {
                          collapsed: t4,
                          items: i2[0],
                          orientation: `vertical`
                        }, null, 8, [
                          `collapsed`,
                          `items`
                        ]),
                        a(c3, {
                          collapsed: t4,
                          items: i2[1],
                          orientation: `vertical`,
                          class: `mt-auto`
                        }, null, 8, [
                          `collapsed`,
                          `items`
                        ])
                      ]),
                      footer: I(({ collapsed: e4 }) => [
                        a(l3, {
                          collapsed: e4
                        }, null, 8, [
                          `collapsed`
                        ])
                      ]),
                      _: 1
                    }),
                    a(d2)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        });
      };
    }
  }), zi = Ke({
    history: Je(`${window.windpress.site_meta.web_history}#/`),
    scrollBehavior(e2, t2, n2) {
      return n2 || {
        left: 0,
        top: 0
      };
    },
    routes: [
      {
        path: `/`,
        name: `home`,
        redirect: {
          name: `files`
        }
      },
      {
        path: `/files`,
        name: `files`,
        component: () => X(() => import("./File-F6HCIp7a.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([0]), import.meta.url)
      },
      {
        path: `/logs`,
        name: `logs`,
        component: () => X(() => import("./Log-BlcQ9KvR.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url)
      },
      {
        path: `/wizard`,
        name: `wizard`,
        redirect: {
          name: `wizard.theme`
        },
        component: () => X(() => import("./Wizard-Di2-xgQV.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url),
        children: [
          {
            path: `screens`,
            name: `wizard.screens`,
            component: () => X(() => import("./Screens-Lfp2oVWY.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url)
          },
          {
            path: `colors`,
            name: `wizard.colors`,
            component: () => X(() => import("./Colors-DIZfUZM9.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), __vite__mapDeps([1]), import.meta.url)
          },
          {
            path: `typography`,
            name: `wizard.typography`,
            component: () => X(() => import("./Typography-C_uSmqyZ.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), __vite__mapDeps([2]), import.meta.url)
          },
          {
            path: `spacing`,
            name: `wizard.spacing`,
            component: () => X(() => import("./Spacing-ClsboDge.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), __vite__mapDeps([2]), import.meta.url)
          },
          {
            path: `theme`,
            name: `wizard.theme`,
            component: () => X(() => import("./Theme-D2dl3_JY.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url)
          }
        ]
      },
      {
        path: `/settings`,
        name: `settings`,
        redirect: {
          name: `settings.general`
        },
        component: () => X(() => import("./Settings-Cs79Nbvi.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url),
        children: [
          {
            path: `general`,
            name: `settings.general`,
            component: () => X(() => import("./General-CnCae0dz.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url)
          },
          {
            path: `performance`,
            name: `settings.performance`,
            component: () => X(() => import("./Performance-j4K4ZAWx.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url)
          },
          {
            path: `integrations`,
            component: () => X(() => import("./Integrations-CMbNVe9V.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url),
            children: [
              {
                path: ``,
                name: `settings.integrations`,
                component: {
                  template: `<div />`
                }
              },
              {
                path: `:integration`,
                name: `settings.integrations.detail`,
                component: () => X(() => import("./_integration_-CWRsAu6u.js").then(async (m2) => {
                  await m2.__tla;
                  return m2;
                }), [], import.meta.url)
              }
            ]
          }
        ]
      },
      {
        path: `/:pathMatch(.*)*`,
        name: `NotFound`,
        component: () => X(() => import("./NotFound-D1uuTsc5.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url)
      }
    ]
  }), Bi = {
    install: (e2, t2) => {
      e2.config.globalProperties.i18n = wp.i18n;
    }
  };
  async function Vi() {
    await X(() => import("./monaco-editor-DlV60XaO.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), __vite__mapDeps([0]), import.meta.url);
    let e2 = le(Ri), t2 = ue();
    e2.config.globalProperties.window = window, t2.use(({ store: e3 }) => {
      [
        `volume`,
        `settings`
      ].includes(e3.$id) && e3.initPull();
    }), e2.use(zi).use(Un).use(t2).use(Ye).use(Bi), e2.mount(`#windpress-app`), qt();
  }
  Vi();
});
