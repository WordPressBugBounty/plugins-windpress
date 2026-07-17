const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./toggleHighContrast-Df6w4ag4.css","./Colors-CXoklgza.css","./FluidCalculatorSlideover-C5bjejut.css"])))=>i.map(i=>d[i]);
import { i as e, r as t, t as n } from "./lib-pA7nXMx7.js";
import { $ as r, $n as i, D as a, E as o, En as s, Ft as c, H as l, Ht as u, J as d, L as f, Lt as p, On as m, Pt as h, Rt as g, St as _, Tn as v, Ut as y, Zn as b, _ as x, b as S, bt as C, ct as w, er as T, et as E, ft as D, g as O, gt as k, it as A, jt as ee, k as j, l as te, mt as M, nt as N, o as P, ot as F, pn as ne, qt as I, tr as L, tt as re, u as ie, un as ae, v as R, vn as z, w as oe, wn as B, wt as V, xn as se, xt as H, y as U, z as W } from "./runtime-core.esm-bundler-Twwq1XF8.js";
import { C as ce, i as le, w as ue } from "./runtime-dom.esm-bundler-Owfape5M.js";
import { C as de, T as fe, a as pe, d as me, f as he, h as ge, i as _e, m as ve, n as ye, r as be, t as xe, v as Se, x as Ce, y as G } from "./Tooltip-CPUUajce.js";
import { r as we } from "./log-Dd9BHdsz.js";
import { A as Te, C as K, H as q, N as J, O as Ee, R as De, S as Y, T as Oe, V as ke, _ as Ae, b as je, i as Me, k as Ne, m as Pe, n as Fe, r as Ie, t as Le, v as Re, x as ze, y as Be, z as Ve } from "./Button-DbU2pTtV.js";
import { a as He, i as Ue, n as We, s as Ge, t as Ke } from "./base-CvBTaoCY.js";
import { t as qe } from "./chunk-DCG7AFIE-B0f-fxPh.js";
import { A as Je, S as Ye, c as Xe, j as Ze, k as Qe, v as $e, x as et, y as tt } from "./dist-Bw8ba7To.js";
import { _ as nt, a as rt, b as it, f as at, l as ot, o as st, r as ct, s as lt, u as ut } from "./dist-ChpmCc7n.js";
import { a as dt, i as ft, n as pt, o as mt, r as ht, s as gt, t as _t } from "./DashboardSidebarToggle-DwmriNl0.js";
import { h as vt, m as yt } from "./useApi-CROJJdhE-DpbaUaur.js";
import { t as bt } from "./es-SWlwUpoO.js";
import { C as xt, M as St, N as Ct, O as wt, S as Tt, U as Et, _ as Dt, b as Ot, h as kt, v as At, x as jt, y as Mt } from "./namespaced-CFCft_Em.js";
import { t as Nt } from "./NavigationMenu-BjdTXMUa.js";
import { a as Pt, c as Ft, i as It, l as Lt, n as Rt, o as zt, r as Bt, s as Vt, t as Ht } from "./useOverlay-C8E5yp-7.js";
import { n as Ut, t as Wt } from "./useToast-Bh4s-mFR.js";
import { t as Gt } from "./overlay-DR-nxSLa.js";
import { t as Kt } from "./Slideover-BcwYUYf1.js";
import { t as qt } from "./Modal-27Oh9UJQ.js";
import { t as Jt } from "./DropdownMenu-Ctj_cXp7.js";
import { t as Yt } from "./Input-DpfLwGJa.js";
import { t as Xt } from "./settings-DsLgXECG.js";
import { t as Zt } from "./package-q3qef6Zq.js";
import { t as Qt } from "./package-DyXNJo-C.js";
import { t as $t } from "./fuse-WWRhtdKf.js";
import { t as en } from "./virtualizer-DAD-ryu1.js";
import { t as tn } from "./useGenerateCache-BXcjQUMW.js";
import { t as X } from "./preload-helper-CtT0-S4g.js";
import { t as nn, __tla as __tla_0 } from "./worker-BiuQenxL.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var rn = document.querySelectorAll(`link[rel="stylesheet"][href*="wp-admin/load-styles.php"], link[rel="stylesheet"][href*="wp-admin/css/colors/"]`);
  Array.from(rn).reverse().forEach((e2) => {
    e2 instanceof HTMLLinkElement && fetch(e2.href).then((e3) => e3.text()).then((t2) => {
      let n2 = document.createElement(`style`);
      n2.textContent = an(t2), document.head.prepend(n2), e2.remove();
    });
  });
  function an(r2) {
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
  var on = document.querySelector(`#wpbody`);
  on && on.classList.add(`windpress-style`), new MutationObserver((e2) => {
    for (let t2 of e2) t2.type === `childList` && t2.addedNodes.length && t2.addedNodes.forEach((e3) => {
      e3 instanceof HTMLElement && !e3.closest(`#wpbody`) && e3.dataset && Object.keys(e3.dataset).forEach((t3) => {
        (t3.startsWith(`reka`) || t3.startsWith(`dismissable`)) && e3.classList.add(`windpress-style`);
      });
    });
  }).observe(document.body, {
    childList: true,
    subtree: false
  });
  var sn = {
    install() {
    }
  }, cn = /* @__PURE__ */ new Set([
    `link`,
    `style`,
    `script`,
    `noscript`
  ]), ln = /* @__PURE__ */ new Set([
    `title`,
    `titleTemplate`,
    `script`,
    `style`,
    `noscript`
  ]), un = /* @__PURE__ */ new Set([
    `base`,
    `meta`,
    `link`,
    `style`,
    `script`,
    `noscript`
  ]), dn = /* @__PURE__ */ new Set([
    `title`,
    `base`,
    `htmlAttrs`,
    `bodyAttrs`,
    `meta`,
    `link`,
    `style`,
    `script`,
    `noscript`
  ]), fn = /* @__PURE__ */ new Set([
    `base`,
    `title`,
    `titleTemplate`,
    `bodyAttrs`,
    `htmlAttrs`,
    `templateParams`
  ]), pn = /* @__PURE__ */ new Set([
    `key`,
    `tagPosition`,
    `tagPriority`,
    `tagDuplicateStrategy`,
    `innerHTML`,
    `textContent`,
    `processTemplateParams`
  ]), mn = /* @__PURE__ */ new Set([
    `templateParams`,
    `htmlAttrs`,
    `bodyAttrs`
  ]), hn = /* @__PURE__ */ new Set([
    `theme-color`,
    `google-site-verification`,
    `og`,
    `article`,
    `book`,
    `profile`,
    `twitter`,
    `author`
  ]), gn = [
    `name`,
    `property`,
    `http-equiv`
  ], _n = /* @__PURE__ */ new Set([
    `viewport`,
    `description`,
    `keywords`,
    `robots`
  ]);
  function vn(e2) {
    let t2 = e2.split(`:`);
    return t2.length ? hn.has(t2[1]) : false;
  }
  function yn(e2) {
    let { props: t2, tag: n2 } = e2;
    if (fn.has(n2)) return n2;
    if (n2 === `link` && t2.rel === `canonical`) return `canonical`;
    if (n2 === `link` && t2.rel === `alternate`) {
      if (t2.hreflang) return `alternate:${t2.hreflang}`;
      if (t2.type) return `alternate:${t2.type}:${t2.href || ``}`;
    }
    if (t2.charset) return `charset`;
    if (e2.tag === `meta`) {
      for (let r2 of gn) if (t2[r2] !== void 0) {
        let i2 = t2[r2], a2 = i2 && typeof i2 == `string` && i2.includes(`:`), o2 = i2 && _n.has(i2);
        return `${n2}:${i2}${!(a2 || o2) && e2.key ? `:key:${e2.key}` : ``}`;
      }
    }
    if (e2.key) return `${n2}:key:${e2.key}`;
    if (t2.id) return `${n2}:id:${t2.id}`;
    if (n2 === `link` && t2.rel === `alternate`) return `alternate:${t2.href || ``}`;
    if (ln.has(n2)) {
      let t3 = e2.textContent || e2.innerHTML;
      if (t3) return `${n2}:content:${t3}`;
    }
  }
  function bn(e2) {
    return e2._h || e2._d || e2.textContent || e2.innerHTML || `${e2.tag}:${Object.entries(e2.props).map(([e3, t2]) => `${e3}:${String(t2)}`).join(`,`)}`;
  }
  function xn(e2, t2, n2) {
    typeof e2 == `function` && (!n2 || n2 !== `titleTemplate` && !(n2[0] === `o` && n2[1] === `n`)) && (e2 = e2());
    let r2 = t2 ? t2(n2, e2) : e2;
    if (Array.isArray(r2)) return r2.map((e3) => xn(e3, t2));
    if (r2?.constructor === Object) {
      let e3 = {};
      for (let n3 of Object.keys(r2)) e3[n3] = xn(r2[n3], t2, n3);
      return e3;
    }
    return r2;
  }
  function Sn(e2, t2) {
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
  function Cn(e2, t2) {
    if (e2.props = e2.props || {}, !t2) return e2;
    if (e2.tag === `templateParams`) return e2.props = t2, e2;
    let n2 = un.has(e2.tag) || e2.tag === `htmlAttrs` || e2.tag === `bodyAttrs`;
    return Object.entries(t2).forEach(([r2, i2]) => {
      if (r2 === `__proto__` || r2 === `constructor` || r2 === `prototype`) return;
      if (i2 === null) {
        e2.props[r2] = null;
        return;
      }
      if (r2 === `class` || r2 === `style`) {
        e2.props[r2] = Sn(r2, i2);
        return;
      }
      if (pn.has(r2)) {
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
  function wn(e2, t2) {
    let n2 = Cn({
      tag: e2,
      props: {}
    }, typeof t2 == `object` && typeof t2 != `function` ? t2 : {
      [e2 === `script` || e2 === `noscript` || e2 === `style` ? `innerHTML` : `textContent`]: t2
    });
    return n2.key && cn.has(n2.tag) && (n2.props[`data-hid`] = n2._h = n2.key), n2.tag === `script` && typeof n2.innerHTML == `object` && (n2.innerHTML = JSON.stringify(n2.innerHTML), n2.props.type = n2.props.type || `application/json`), Array.isArray(n2.props.content) ? n2.props.content.map((e3) => ({
      ...n2,
      props: {
        ...n2.props,
        content: e3
      }
    })) : n2;
  }
  function Tn(e2, t2) {
    if (!e2) return [];
    typeof e2 == `function` && (e2 = e2());
    let n2 = (e3, n3) => {
      for (let r3 = 0; r3 < t2.length; r3++) n3 = t2[r3](e3, n3);
      return n3;
    };
    e2 = n2(void 0, e2);
    let r2 = [];
    return e2 = xn(e2, n2), Object.entries(e2 || {}).forEach(([e3, t3]) => {
      if (t3 !== void 0) for (let n3 of Array.isArray(t3) ? t3 : [
        t3
      ]) r2.push(wn(e3, n3));
    }), r2.flat();
  }
  var En = (e2, t2) => e2._w === t2._w ? e2._p - t2._p : e2._w - t2._w, Dn = {
    base: -10,
    title: 10
  }, On = {
    critical: -8,
    high: -1,
    low: 2
  }, kn = {
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
  }, An = /@import/, jn = (e2) => e2 === `` || e2 === true;
  function Mn(e2, t2) {
    if (typeof t2.tagPriority == `number`) return t2.tagPriority;
    let n2 = 100, r2 = On[t2.tagPriority] || 0, i2 = e2.resolvedOptions.disableCapoSorting ? {
      link: {},
      script: {},
      style: {}
    } : kn;
    if (t2.tag in Dn) n2 = Dn[t2.tag];
    else if (t2.tag === `meta`) {
      let e3 = t2.props[`http-equiv`] === `content-security-policy` ? `content-security-policy` : t2.props.charset ? `charset` : t2.props.name === `viewport` ? `viewport` : null;
      e3 && (n2 = kn.meta[e3]);
    } else if (t2.tag === `link` && t2.props.rel) n2 = i2.link[t2.props.rel];
    else if (t2.tag === `script`) {
      let e3 = String(t2.props.type);
      jn(t2.props.async) ? n2 = i2.script.async : t2.props.src && !jn(t2.props.defer) && !jn(t2.props.async) && e3 !== `module` && !e3.endsWith(`json`) || t2.innerHTML && !e3.endsWith(`json`) ? n2 = i2.script.sync : (jn(t2.props.defer) && t2.props.src && !jn(t2.props.async) || e3 === `module`) && (n2 = i2.script.defer);
    } else t2.tag === `style` && (n2 = t2.innerHTML && An.test(t2.innerHTML) ? i2.style.imported : i2.style.sync);
    return (n2 || 100) + r2;
  }
  function Nn(e2, t2) {
    let n2 = typeof t2 == `function` ? t2(e2) : t2, r2 = n2.key || String(e2.plugins.size + 1);
    e2.plugins.get(r2) || (e2.plugins.set(r2, n2), e2.hooks.addHooks(n2.hooks || {}));
  }
  function Pn(e2 = {}) {
    let t2 = Ge();
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
      use: (e3) => Nn(o2, e3),
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
              tags: Tn(i4.input, e2.propResolvers || []).map((e3) => Object.assign(e3, i4.options)),
              entry: i4
            };
            await t2.callHook(`entries:normalize`, n5), i4._tags = n5.tags.map((e3, t3) => (e3._w = Mn(o2, e3), e3._p = (i4._i << 10) + t3, e3._d = yn(e3), e3._d || (e3._h = bn(e3)), e3));
          }
        }
        let i3 = false;
        n3.entries.flatMap((e3) => (e3._tags || []).map((e4) => ({
          ...e4,
          props: {
            ...e4.props
          }
        }))).sort(En).reduce((e3, t3) => {
          let n4 = t3._d || t3._h;
          if (!e3.has(n4)) return e3.set(n4, t3);
          let r3 = e3.get(n4);
          if ((t3?.tagDuplicateStrategy || (mn.has(t3.tag) ? `merge` : null) || (t3.key && t3.key === r3.key ? `merge` : null)) === `merge`) {
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
          } else t3._p >> 10 == r3._p >> 10 && t3.tag === `meta` && vn(n4) ? (e3.set(n4, Object.assign([
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
        n3.tags = Array.from(n3.tagMap.values()), i3 && (n3.tags = n3.tags.flat().sort(En)), await t2.callHook(`tags:beforeResolve`, n3), await t2.callHook(`tags:resolve`, n3), await t2.callHook(`tags:afterResolve`, n3);
        let l2 = [];
        for (let e3 of n3.tags) {
          let { innerHTML: t3, tag: n4, props: r3 } = e3;
          dn.has(n4) && (Object.keys(r3).length === 0 && !e3.innerHTML && !e3.textContent || n4 === `meta` && !r3.content && !r3[`http-equiv`] && !r3.charset || (n4 === `script` && t3 && (String(r3.type).endsWith(`json`) ? e3.innerHTML = (typeof t3 == `string` ? t3 : JSON.stringify(t3)).replace(/</g, `\\u003C`) : typeof t3 == `string` && (e3.innerHTML = t3.replace(RegExp(`</${n4}`, `g`), `<\\/${n4}`)), e3._d = yn(e3)), l2.push(e3)));
        }
        return l2;
      },
      invalidate() {
        for (let e3 of r2.values()) a2.add(e3._i);
        o2.dirty = true, t2.callHook(`entries:updated`, o2);
      }
    };
    return (e2?.plugins || []).forEach((e3) => Nn(o2, e3)), o2.hooks.callHook(`init`, o2), e2.init?.forEach((e3) => e3 && o2.push(e3)), o2;
  }
  async function Fn(e2, t2 = {}) {
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
            return e4._d && vn(e4._d) && r3.set(e4._d, t5 + 1), n3;
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
            if (!un.has(t5)) continue;
            let n3 = Cn({
              tag: t5,
              props: {}
            }, {
              innerHTML: e4.innerHTML,
              ...e4.getAttributeNames().reduce((t6, n4) => (t6[n4] = e4.getAttribute(n4), t6), {}) || {}
            });
            if (n3.key = e4.getAttribute(`data-hid`) || void 0, n3._d = yn(n3) || bn(n3), a2.elMap.has(n3._d)) {
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
          e3.$el = e3.$el || a2.elMap.get(i3), e3.$el ? s2(e3) : un.has(t4.tag) && c2.push(e3);
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
  function In(e2 = {}) {
    let t2 = e2.domOptions?.render || Fn;
    e2.document = e2.document || (typeof window < `u` ? document : void 0);
    let n2 = e2.document?.head.querySelector(`script[id="unhead:payload"]`)?.innerHTML || false;
    return Pn({
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
  function Ln(e2, t2) {
    let n2 = 0;
    return () => {
      let r2 = ++n2;
      t2(() => {
        n2 === r2 && e2();
      });
    };
  }
  var Rn = (e2, t2) => ae(t2) ? s(t2) : t2, zn = `usehead`;
  function Bn(e2) {
    return {
      install(t2) {
        t2.config.globalProperties.$unhead = e2, t2.config.globalProperties.$head = e2, t2.provide(zn, e2);
      }
    }.install;
  }
  function Vn() {
    if (l()) {
      let e2 = d(zn);
      if (e2) return e2;
    }
    throw Error(`useHead() was called without provide context, ensure you call it through the setup() function.`);
  }
  function Hn(e2, t2 = {}) {
    let n2 = t2.head || Vn();
    return n2.ssr ? n2.push(e2 || {}, t2) : Un(n2, e2, t2);
  }
  function Un(e2, t2, n2 = {}) {
    let r2 = z(false), i2;
    return y(() => {
      let a2 = r2.value ? {} : xn(t2, Rn);
      i2 ? i2.patch(a2) : i2 = e2.push(a2, n2);
    }), f() && (A(() => {
      i2.dispose();
    }), F(() => {
      r2.value = true;
    }), N(() => {
      r2.value = false;
    })), i2;
  }
  function Wn(e2 = {}) {
    let t2 = In({
      domOptions: {
        render: Ln(() => Fn(t2), (e3) => setTimeout(e3, 0))
      },
      ...e2
    });
    return t2.install = Bn(t2), t2;
  }
  var Gn = {
    install(e2) {
      if (e2._context.provides.usehead) return;
      let t2 = Wn();
      e2.use(t2);
    }
  }, Kn = {
    install(e2, t2) {
      t2?.router && typeof t2.router == `function` && e2.provide(`nuxtui:router`, t2.router);
    }
  }, qn = /^[^-]+.*-.*[^-]+$/, Jn = /^[^_]+.*_.*[^_]+$/, Yn = [
    `arrowleft`,
    `arrowright`,
    `arrowup`,
    `arrowdown`,
    `tab`,
    `escape`,
    `enter`,
    `backspace`
  ];
  function Xn(e2) {
    return /^[a-z]$/i.test(e2) ? `Key${e2.toUpperCase()}` : /^\d$/.test(e2) ? `Digit${e2}` : /^f\d+$/i.test(e2) ? e2.toUpperCase() : {
      space: `Space`,
      enter: `Enter`,
      escape: `Escape`,
      tab: `Tab`,
      backspace: `Backspace`,
      delete: `Delete`,
      arrowup: `ArrowUp`,
      arrowdown: `ArrowDown`,
      arrowleft: `ArrowLeft`,
      arrowright: `ArrowRight`
    }[e2.toLowerCase()] || e2;
  }
  function Zn(e2, t2 = `_`) {
    let n2 = {};
    function r2(e3) {
      e3.forEach((e4) => {
        if (e4.kbds?.length && (e4.onSelect || e4.onClick)) {
          let r3 = e4.kbds.join(t2);
          n2[r3] = e4.onSelect || e4.onClick;
        }
        e4.children && r2(e4.children.flat()), e4.items && r2(e4.items.flat());
      });
    }
    return r2(e2.flat()), n2;
  }
  function Qn(e2, t2 = {}) {
    let n2 = t2.chainDelay ?? 800, r2 = z([]), i2 = () => {
      r2.value.splice(0, r2.value.length);
    }, a2 = Qe(i2, n2), o2, c2 = () => {
      o2 = void 0, u2.stop();
    }, l2 = () => {
      let e3 = o2;
      if (c2(), !e3) return;
      let t3 = y2.value.find((t4) => t4.key === e3.shortcut.key && !t4.metaKey && !t4.ctrlKey && !t4.altKey && !t4.shiftKey);
      t3?.enabled && t3.handler(e3.event);
    }, u2 = Ze(() => {
      l2(), i2();
    }, n2, {
      immediate: false
    }), { macOS: d2 } = fe(), f2 = lt(), p2 = t2.layoutIndependent ?? false, m2 = Yn.map((e3) => Xn(e3)), h2 = (e3) => {
      if (!e3.key) return;
      let t3 = p2 || e3.altKey, n3 = t3 ? /^Key[A-Z]$/i.test(e3.code) : /^[a-z]{1}$/i.test(e3.key), s2 = t3 ? m2.includes(e3.code) : Yn.includes(e3.key.toLowerCase()), d3;
      if (r2.value.push(p2 ? e3.code : e3.key), r2.value.length >= 2) {
        d3 = r2.value.slice(-2).join(`-`);
        for (let t4 of v2.value) if (t4.key === d3) {
          t4.enabled ? (c2(), e3.preventDefault(), t4.handler(e3)) : l2(), i2();
          return;
        }
      }
      l2();
      for (let t4 of y2.value) {
        if (p2) {
          if (e3.code !== t4.key) continue;
        } else if (t4.altKey && e3.altKey) {
          if (e3.code !== Xn(t4.key)) continue;
        } else if (e3.key.toLowerCase() !== t4.key) continue;
        if (e3.metaKey === t4.metaKey && e3.ctrlKey === t4.ctrlKey && e3.altKey === t4.altKey && !((n3 || s2 || t4.shiftKey || e3.shiftKey && (e3.metaKey || e3.ctrlKey)) && e3.shiftKey !== t4.shiftKey)) {
          if (!t4.metaKey && !t4.ctrlKey && !t4.altKey && !t4.shiftKey && b2.value.has(t4.key)) {
            t4.enabled && e3.preventDefault(), o2 = {
              shortcut: t4,
              event: e3
            }, u2.start();
            return;
          }
          t4.enabled && (e3.preventDefault(), t4.handler(e3)), i2();
          return;
        }
      }
      a2();
    }, g2 = O(() => {
      let e3 = f2.value?.tagName, t3 = f2.value?.contentEditable;
      return e3 === `INPUT` || e3 === `TEXTAREA` || t3 === `true` || t3 === `plaintext-only` ? f2.value?.name || true : false;
    }), _2 = O(() => Object.entries(s(e2)).map(([e3, t3]) => {
      if (!t3) return null;
      let n3;
      e3.includes(`-`) && e3 !== `-` && !e3.includes(`_`) && !e3.match(qn)?.length && console.trace(`[Shortcut] Invalid key: "${e3}"`), e3.includes(`_`) && e3 !== `_` && !e3.match(Jn)?.length && console.trace(`[Shortcut] Invalid key: "${e3}"`);
      let r3 = e3.includes(`-`) && e3 !== `-` && !e3.includes(`_`);
      if (r3) n3 = p2 ? {
        key: e3.split(`-`).map((e4) => Xn(e4)).join(`-`),
        metaKey: false,
        ctrlKey: false,
        shiftKey: false,
        altKey: false
      } : {
        key: e3.toLowerCase(),
        metaKey: false,
        ctrlKey: false,
        shiftKey: false,
        altKey: false
      };
      else {
        let t4 = e3.toLowerCase().split(`_`).map((e4) => e4), r4 = t4.filter((e4) => ![
          `meta`,
          `command`,
          `ctrl`,
          `shift`,
          `alt`,
          `option`
        ].includes(e4)).join(`_`);
        p2 && (r4 = Xn(r4)), n3 = {
          key: r4,
          metaKey: t4.includes(`meta`) || t4.includes(`command`),
          ctrlKey: t4.includes(`ctrl`),
          shiftKey: t4.includes(`shift`),
          altKey: t4.includes(`alt`) || t4.includes(`option`)
        };
      }
      if (n3.chained = r3, !d2.value && n3.metaKey && !n3.ctrlKey && (n3.metaKey = false, n3.ctrlKey = true), typeof t3 == `function` ? n3.handler = t3 : typeof t3 == `object` && (n3 = {
        ...n3,
        handler: t3.handler
      }), !n3.handler) return console.trace(`[Shortcut] Invalid value`), null;
      let i3 = true;
      return t3.usingInput ? typeof t3.usingInput == `string` && (i3 = g2.value === t3.usingInput) : i3 = !g2.value, n3.enabled = i3, n3;
    }).filter(Boolean)), v2 = O(() => _2.value.filter((e3) => e3.chained)), y2 = O(() => _2.value.filter((e3) => !e3.chained)), b2 = O(() => new Set(v2.value.map((e3) => e3.key.split(`-`)[0])));
    return at(`keydown`, h2);
  }
  var $n = [
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
  function er(e2, t2) {
    return e2 in qe && typeof qe[e2] == `object` && t2 in qe[e2] ? qe[e2][t2] : ``;
  }
  function tr(e2, t2, n2) {
    let r2 = n2 ? `${n2}-` : ``;
    return `${$n.map((n3) => `--ui-color-${e2}-${n3}: var(--${r2}color-${t2 === `neutral` ? `old-neutral` : t2}-${n3}, ${er(t2, n3)});`).join(`
  `)}`;
  }
  function nr(e2, t2) {
    return `--ui-${e2}: var(--ui-color-${e2}-${t2});`;
  }
  function rr() {
    document.querySelector(`[data-nuxt-ui-colors]`)?.remove();
  }
  var ir = Ke(() => {
    let e2 = q(), t2 = Ue(), n2 = O(() => {
      let { neutral: t3, ...n3 } = e2.ui.colors, r3 = e2.ui.prefix;
      return `@layer theme {
  :root, :host {
  ${Object.entries(e2.ui.colors).map(([e3, t4]) => tr(e3, t4, r3)).join(`
  `)}
  }
  :root, :host, .light {
  ${Object.keys(n3).map((e3) => nr(e3, 500)).join(`
  `)}
  }
  .dark {
  ${Object.keys(n3).map((e3) => nr(e3, 400)).join(`
  `)}
  }
}`;
    }), r2 = {
      style: [
        {
          innerHTML: n2,
          tagPriority: `critical`,
          id: `nuxt-ui-colors`
        }
      ]
    };
    if (t2.isHydrating && !t2.payload.serverRendered) {
      let e3 = document.createElement(`style`);
      e3.innerHTML = n2.value, e3.setAttribute(`data-nuxt-ui-colors`, ``), document.head.appendChild(e3);
      let t3 = Vn().hooks?.hook(`dom:rendered`, () => {
        rr(), t3?.();
      });
    }
    Hn(r2);
  }), ar = {
    install() {
      ut();
    }
  }, or = {
    install(e2, t2 = {}) {
      e2.use(sn, t2), e2.use(Gn, t2), e2.use(Kn, t2), e2.use(ir, t2), e2.use(ar, t2);
    }
  }, sr = j({
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
      let t2 = e2, { forwardRef: n2, currentElement: r2 } = G();
      return w(() => {
        ve.branches.add(r2.value);
      }), D(() => {
        ve.branches.delete(r2.value);
      }), (e3, r3) => (M(), R(m(K), E({
        ref: m(n2)
      }, t2), {
        default: I(() => [
          H(e3.$slots, `default`)
        ]),
        _: 3
      }, 16));
    }
  }), cr = j({
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
      let t2 = e2, n2 = Ot({
        id: ``
      });
      return (e3, r2) => (M(), R(m(K), E(t2, {
        id: m(n2).id
      }), {
        default: I(() => [
          H(e3.$slots, `default`)
        ]),
        _: 3
      }, 16, [
        `id`
      ]));
    }
  }), lr = 100, [ur, dr] = Ee(`ProgressRoot`), fr = (e2) => typeof e2 == `number`;
  function pr(e2, t2) {
    return de(e2) || fr(e2) && !Number.isNaN(e2) && e2 <= t2 && e2 >= 0 ? e2 : (console.error(`Invalid prop \`value\` of value \`${e2}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${lr} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
  }
  function mr(e2) {
    return fr(e2) && !Number.isNaN(e2) && e2 > 0 ? e2 : (console.error(`Invalid prop \`max\` of value \`${e2}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${lr}\`.`), lr);
  }
  var hr = j({
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
        default: lr
      },
      getValueLabel: {
        type: Function,
        required: false,
        default: (e2, t2) => fr(e2) ? `${Math.round(e2 / t2 * lr)}%` : void 0
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
      G();
      let i2 = it(n2, `modelValue`, r2, {
        passive: n2.modelValue === void 0
      }), a2 = it(n2, `max`, r2, {
        passive: n2.max === void 0
      });
      u(() => i2.value, async (e3) => {
        let t3 = pr(e3, n2.max);
        t3 !== e3 && (await re(), i2.value = t3);
      }, {
        immediate: true
      }), u(() => n2.max, (e3) => {
        let t3 = mr(n2.max);
        t3 !== e3 && (a2.value = t3);
      }, {
        immediate: true
      });
      let o2 = O(() => de(i2.value) ? `indeterminate` : i2.value === a2.value ? `complete` : `loading`);
      return dr({
        modelValue: i2,
        max: a2,
        progressState: o2
      }), (e3, t3) => (M(), R(m(K), {
        "as-child": e3.asChild,
        as: e3.as,
        "aria-valuemax": m(a2),
        "aria-valuemin": 0,
        "aria-valuenow": fr(m(i2)) ? m(i2) : void 0,
        "aria-valuetext": e3.getValueText?.(m(i2), m(a2)),
        "aria-label": e3.getValueLabel(m(i2), m(a2)),
        role: `progressbar`,
        "data-state": o2.value,
        "data-value": m(i2) ?? void 0,
        "data-max": m(a2)
      }, {
        default: I(() => [
          H(e3.$slots, `default`, {
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
  }), gr = j({
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
      let t2 = e2, n2 = ur();
      return G(), (e3, r2) => (M(), R(m(K), E(t2, {
        "data-state": m(n2).progressState.value,
        "data-value": m(n2).modelValue?.value ?? void 0,
        "data-max": m(n2).max.value
      }), {
        default: I(() => [
          H(e3.$slots, `default`)
        ]),
        _: 3
      }, 16, [
        `data-state`,
        `data-value`,
        `data-max`
      ]));
    }
  }), _r = j({
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
      return (e3, t2) => (M(), R(m(K), {
        as: e3.as,
        "as-child": e3.asChild,
        "data-reka-toast-announce-exclude": ``,
        "data-reka-toast-announce-alt": e3.altText || void 0
      }, {
        default: I(() => [
          H(e3.$slots, `default`)
        ]),
        _: 3
      }, 8, [
        `as`,
        `as-child`,
        `data-reka-toast-announce-alt`
      ]));
    }
  }), [vr, yr] = Ee(`ToastProvider`), br = j({
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
      wt({
        isProvider: true
      });
      let s2 = z(), c2 = z(0), l2 = z(false), u2 = z(false);
      if (t2.label && typeof t2.label == `string` && !t2.label.trim()) throw Error("Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.");
      return yr({
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
      }), (e3, t3) => H(e3.$slots, `default`);
    }
  }), xr = j({
    __name: `ToastAnnounce`,
    setup(e2) {
      let t2 = vr(), n2 = Je(1e3), r2 = z(false), i2 = 0, a2 = 0;
      return Xe && (i2 = requestAnimationFrame(() => {
        a2 = requestAnimationFrame(() => {
          r2.value = true;
        });
      }), ne(() => {
        cancelAnimationFrame(i2), cancelAnimationFrame(a2);
      })), (e3, i3) => m(n2) || r2.value ? (M(), R(m(me), {
        key: 0,
        feature: `fully-hidden`
      }, {
        default: I(() => [
          o(L(m(t2).label.value) + ` `, 1),
          H(e3.$slots, `default`)
        ]),
        _: 3
      })) : U(`v-if`, true);
    }
  }), Sr = `toast.viewportPause`, Cr = `toast.viewportResume`;
  function wr(e2, t2, n2) {
    let r2 = n2.originalEvent.currentTarget, i2 = new CustomEvent(e2, {
      bubbles: false,
      cancelable: true,
      detail: n2
    });
    t2 && r2.addEventListener(e2, t2, {
      once: true
    }), r2.dispatchEvent(i2);
  }
  function Tr(e2, t2, n2 = 0) {
    let r2 = Math.abs(e2.x), i2 = Math.abs(e2.y), a2 = r2 > i2;
    return t2 === `left` || t2 === `right` ? a2 && r2 > n2 : !a2 && i2 > n2;
  }
  function Er(e2) {
    return e2.nodeType === e2.ELEMENT_NODE;
  }
  function Dr(e2) {
    let t2 = [];
    return Array.from(e2.childNodes).forEach((e3) => {
      if (e3.nodeType === e3.TEXT_NODE && e3.textContent && t2.push(e3.textContent), Er(e3)) {
        let n2 = e3.ariaHidden || e3.hidden || e3.style.display === `none`, r2 = e3.dataset.rekaToastAnnounceExclude === ``;
        if (!n2) if (r2) {
          let n3 = e3.dataset.rekaToastAnnounceAlt;
          n3 && t2.push(n3);
        } else t2.push(...Dr(e3));
      }
    }), t2;
  }
  var [Or, kr] = Ee(`ToastRoot`), Ar = j({
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
      let n2 = e2, r2 = t2, { forwardRef: i2, currentElement: s2 } = G(), { CollectionItem: c2 } = wt(), l2 = vr(), d2 = z(null), f2 = z(null), p2 = O(() => typeof n2.duration == `number` ? n2.duration : l2.duration.value), h2 = z(0), g2 = z(p2.value), _2 = z(0), v2 = z(p2.value), b2 = nt(() => {
        let e3 = Date.now() - h2.value;
        v2.value = Math.max(g2.value - e3, 0);
      }, {
        fpsLimit: 60
      });
      function x2(e3) {
        e3 <= 0 || e3 === 1 / 0 || Xe && (window.clearTimeout(_2.value), h2.value = Date.now(), _2.value = window.setTimeout(T2, e3));
      }
      function T2(e3) {
        let t3 = e3?.pointerType === ``;
        s2.value?.contains(Et()) && t3 && l2.viewport.value?.focus(), t3 && (l2.isClosePausedRef.value = false), r2(`close`);
      }
      let k2 = O(() => s2.value ? Dr(s2.value) : null);
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
            let e5 = Date.now() - h2.value;
            g2.value -= e5, window.clearTimeout(_2.value), b2.pause(), r2(`pause`);
          };
          return t3.addEventListener(Sr, n3), t3.addEventListener(Cr, e4), () => {
            t3.removeEventListener(Sr, n3), t3.removeEventListener(Cr, e4);
          };
        }
      }), u(() => [
        n2.open,
        p2.value
      ], () => {
        g2.value = p2.value, n2.open && !l2.isClosePausedRef.value && x2(p2.value);
      }, {
        immediate: true
      }), rt(`Escape`, (e3) => {
        r2(`escapeKeyDown`, e3), e3.defaultPrevented || (l2.isFocusedToastEscapeKeyDownRef.value = true, T2());
      }), w(() => {
        l2.onToastAdd();
      }), D(() => {
        l2.onToastRemove();
      }), kr({
        onClose: T2
      }), (e3, t3) => (M(), S(P, null, [
        k2.value ? (M(), R(xr, {
          key: 0,
          role: `alert`,
          "aria-live": e3.type === `foreground` ? `assertive` : `polite`
        }, {
          default: I(() => [
            U(`
      Render each chunk as its own text node so screen readers get the
      natural pause break between nodes (see comment in utils.ts).
      Interpolating the array directly with \`{{ announceTextContent }}\`
      would route through Vue's \`toDisplayString\`, which JSON-stringifies
      arrays \u2014 the live region would then announce literal \`[\`, quotes
      and commas instead of the toast title and description.
    `),
            (M(true), S(P, null, C(k2.value, (e4, t4) => (M(), S(P, {
              key: t4
            }, [
              o(L(e4), 1)
            ], 64))), 128))
          ]),
          _: 1
        }, 8, [
          `aria-live`
        ])) : U(`v-if`, true),
        m(l2).viewport.value ? (M(), R(ie, {
          key: 1,
          to: m(l2).viewport.value
        }, [
          a(m(c2), null, {
            default: I(() => [
              a(m(K), E({
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
                onPointerdown: t3[0] || (t3[0] = ue((e4) => {
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
                  i3 ? (f2.value = p3, m(wr)(m(`toast.swipeMove`), (e5) => r2(`swipeMove`, e5), h3)) : m(Tr)(p3, m(l2).swipeDirection.value, u2) ? (f2.value = p3, m(wr)(m(`toast.swipeStart`), (e5) => r2(`swipeStart`, e5), h3), e4.target.setPointerCapture(e4.pointerId)) : (Math.abs(t4) > u2 || Math.abs(n3) > u2) && (d2.value = null);
                }),
                onPointerup: t3[2] || (t3[2] = (e4) => {
                  if (m(l2).disableSwipe.value) return;
                  let t4 = f2.value, n3 = e4.target;
                  if (n3.hasPointerCapture(e4.pointerId) && n3.releasePointerCapture(e4.pointerId), f2.value = null, d2.value = null, t4) {
                    let n4 = e4.currentTarget, i3 = {
                      originalEvent: e4,
                      delta: t4
                    };
                    m(Tr)(t4, m(l2).swipeDirection.value, m(l2).swipeThreshold.value) ? m(wr)(m(`toast.swipeEnd`), (e5) => r2(`swipeEnd`, e5), i3) : m(wr)(m(`toast.swipeCancel`), (e5) => r2(`swipeCancel`, e5), i3), n4?.addEventListener(`click`, (e5) => e5.preventDefault(), {
                      once: true
                    });
                  }
                })
              }), {
                default: I(() => [
                  H(e3.$slots, `default`, {
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
        ])) : U(`v-if`, true)
      ], 64));
    }
  }), jr = j({
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
      let t2 = e2, n2 = Or(), { forwardRef: r2 } = G();
      return (e3, i2) => (M(), R(_r, {
        "as-child": ``
      }, {
        default: I(() => [
          a(m(K), E(t2, {
            ref: m(r2),
            type: e3.as === `button` ? `button` : void 0,
            onClick: m(n2).onClose
          }), {
            default: I(() => [
              H(e3.$slots, `default`)
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
  }), Mr = j({
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
      let { forwardRef: t2 } = G();
      return (e3, n2) => e3.altText ? (M(), R(_r, {
        key: 0,
        "alt-text": e3.altText,
        "as-child": ``
      }, {
        default: I(() => [
          a(jr, {
            ref: m(t2),
            as: e3.as,
            "as-child": e3.asChild
          }, {
            default: I(() => [
              H(e3.$slots, `default`)
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
      ])) : U(`v-if`, true);
    }
  }), Nr = j({
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
      return G(), (e3, n2) => (M(), R(m(K), i(W(t2)), {
        default: I(() => [
          H(e3.$slots, `default`)
        ]),
        _: 3
      }, 16));
    }
  }), Pr = j({
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
      return (e3, n2) => (M(), R(m(he), i(W(t2)), {
        default: I(() => [
          H(e3.$slots, `default`)
        ]),
        _: 3
      }, 16));
    }
  }), Fr = j({
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
      let n2 = e2, r2 = t2, { forwardRef: i2 } = G(), o2 = it(n2, `open`, r2, {
        defaultValue: n2.defaultOpen,
        passive: n2.open === void 0
      });
      return (e3, t3) => (M(), R(m(ge), {
        present: e3.forceMount || m(o2)
      }, {
        default: I(() => [
          a(Ar, E({
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
              H(e3.$slots, `default`, {
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
  }), Ir = j({
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
      return G(), (e3, n2) => (M(), R(m(K), i(W(t2)), {
        default: I(() => [
          H(e3.$slots, `default`)
        ]),
        _: 3
      }, 16));
    }
  }), Lr = j({
    __name: `FocusProxy`,
    emits: [
      `focusFromOutsideViewport`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = t2, r2 = vr();
      return (e3, t3) => (M(), R(m(me), {
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
          H(e3.$slots, `default`)
        ]),
        _: 3
      }));
    }
  }), Rr = j({
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
      let { hotkey: t2, label: n2 } = v(e2), { forwardRef: r2, currentElement: i2 } = G(), { CollectionSlot: o2, getItems: s2 } = wt(), c2 = vr(), l2 = O(() => c2.toastCount.value > 0), u2 = z(), d2 = z(), f2 = /Key/g, p2 = /Digit/g, h2 = O(() => t2.value.join(`+`).replace(f2, ``).replace(p2, ``));
      rt(t2.value, () => {
        i2.value.focus();
      }), w(() => {
        c2.onViewportChange(i2.value);
      }), y((e3) => {
        let t3 = i2.value;
        if (l2.value && t3) {
          let n3 = () => {
            if (!c2.isClosePausedRef.value) {
              let e4 = new CustomEvent(Sr);
              t3.dispatchEvent(e4), c2.isClosePausedRef.value = true;
            }
          }, r3 = () => {
            if (c2.isClosePausedRef.value) {
              let e4 = new CustomEvent(Cr);
              t3.dispatchEvent(e4), c2.isClosePausedRef.value = false;
            }
          }, i3 = (e4) => {
            t3.contains(e4.relatedTarget) || r3();
          }, a2 = () => {
            t3.contains(Et()) || r3();
          }, o3 = (e4) => {
            let n4 = e4.altKey || e4.ctrlKey || e4.metaKey;
            if (e4.key === `Tab` && !n4) {
              let n5 = Et(), r4 = e4.shiftKey;
              if (e4.target === t3 && r4) {
                u2.value?.focus();
                return;
              }
              let i4 = g2({
                tabbingDirection: r4 ? `backwards` : `forwards`
              }), a3 = i4.findIndex((e5) => e5 === n5);
              St(i4.slice(a3 + 1)) ? e4.preventDefault() : r4 ? u2.value?.focus() : d2.value?.focus();
            }
          };
          t3.addEventListener(`focusin`, n3), t3.addEventListener(`focusout`, i3), t3.addEventListener(`pointermove`, n3), t3.addEventListener(`pointerleave`, a2), t3.addEventListener(`keydown`, o3), window.addEventListener(`blur`, n3), window.addEventListener(`focus`, r3), e3(() => {
            t3.removeEventListener(`focusin`, n3), t3.removeEventListener(`focusout`, i3), t3.removeEventListener(`pointermove`, n3), t3.removeEventListener(`pointerleave`, a2), t3.removeEventListener(`keydown`, o3), window.removeEventListener(`blur`, n3), window.removeEventListener(`focus`, r3);
          });
        }
      });
      function g2({ tabbingDirection: e3 }) {
        let t3 = s2().map((e4) => e4.ref).map((t4) => {
          let n3 = [
            t4,
            ...Ct(t4)
          ];
          return e3 === `forwards` ? n3 : n3.reverse();
        });
        return (e3 === `forwards` ? t3.reverse() : t3).flat();
      }
      return (e3, t3) => (M(), R(m(sr), {
        role: `region`,
        "aria-label": typeof m(n2) == `string` ? m(n2).replace(`{hotkey}`, h2.value) : m(n2)(h2.value),
        tabindex: `-1`,
        style: T({
          pointerEvents: l2.value ? void 0 : `none`
        })
      }, {
        default: I(() => [
          l2.value ? (M(), R(Lr, {
            key: 0,
            ref: (e4) => {
              e4 && (u2.value = m(st)(e4));
            },
            onFocusFromOutsideViewport: t3[0] || (t3[0] = () => {
              let e4 = g2({
                tabbingDirection: `forwards`
              });
              m(St)(e4);
            })
          }, null, 512)) : U(`v-if`, true),
          a(m(o2), null, {
            default: I(() => [
              a(m(K), E({
                ref: m(r2),
                tabindex: `-1`,
                as: e3.as,
                "as-child": e3.asChild
              }, e3.$attrs), {
                default: I(() => [
                  H(e3.$slots, `default`)
                ]),
                _: 3
              }, 16, [
                `as`,
                `as-child`
              ])
            ]),
            _: 3
          }),
          l2.value ? (M(), R(Lr, {
            key: 1,
            ref: (e4) => {
              e4 && (d2.value = m(st)(e4));
            },
            onFocusFromOutsideViewport: t3[1] || (t3[1] = () => {
              let e4 = g2({
                tabbingDirection: `backwards`
              });
              m(St)(e4);
            })
          }, null, 512)) : U(`v-if`, true)
        ]),
        _: 3
      }, 8, [
        `aria-label`,
        `style`
      ]));
    }
  }), zr = {
    slots: {
      root: `gap-2`,
      base: `relative overflow-hidden rounded-full bg-accented`,
      indicator: `rounded-full size-full transition-transform duration-200 ease-out motion-reduce:data-[state=indeterminate]:animate-pulse`,
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
          indicator: `motion-safe:data-[state=indeterminate]:animate-[carousel_2s_ease-in-out_infinite] motion-safe:data-[state=indeterminate]:rtl:animate-[carousel-rtl_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `vertical`,
        animation: `carousel`,
        class: {
          indicator: `motion-safe:data-[state=indeterminate]:animate-[carousel-vertical_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `horizontal`,
        animation: `carousel-inverse`,
        class: {
          indicator: `motion-safe:data-[state=indeterminate]:animate-[carousel-inverse_2s_ease-in-out_infinite] motion-safe:data-[state=indeterminate]:rtl:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `vertical`,
        animation: `carousel-inverse`,
        class: {
          indicator: `motion-safe:data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `horizontal`,
        animation: `swing`,
        class: {
          indicator: `motion-safe:data-[state=indeterminate]:animate-[swing_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `vertical`,
        animation: `swing`,
        class: {
          indicator: `motion-safe:data-[state=indeterminate]:animate-[swing-vertical_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `horizontal`,
        animation: `elastic`,
        class: {
          indicator: `motion-safe:data-[state=indeterminate]:animate-[elastic_2s_ease-in-out_infinite]`
        }
      },
      {
        orientation: `vertical`,
        animation: `elastic`,
        class: {
          indicator: `motion-safe:data-[state=indeterminate]:animate-[elastic-vertical_2s_ease-in-out_infinite]`
        }
      }
    ],
    defaultVariants: {
      animation: `carousel`,
      color: `primary`,
      size: `md`
    }
  }, Br = {
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
      let n2 = e2, r2 = t2, i2 = p(), s2 = Y(`progress`, n2), { dir: c2 } = gt(), l2 = q(), u2 = ze(tt(s2, `getValueLabel`, `getValueText`, `modelValue`), r2), d2 = O(() => u2.value.modelValue === null), f2 = O(() => Array.isArray(s2.max)), h2 = O(() => {
        if (!(d2.value || !s2.max)) return Array.isArray(s2.max) ? s2.max.length - 1 : Number(s2.max);
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
        if (g2.value !== void 0) return s2.orientation === `vertical` ? {
          transform: `translateY(${s2.inverted ? `` : `-`}${100 - g2.value}%)`
        } : c2.value === `rtl` ? {
          transform: `translateX(${s2.inverted ? `-` : ``}${100 - g2.value}%)`
        } : {
          transform: `translateX(${s2.inverted ? `` : `-`}${100 - g2.value}%)`
        };
      }), v2 = O(() => {
        let e3 = `${Math.max(g2.value ?? 0, 0)}%`;
        return s2.orientation === `vertical` ? {
          height: e3
        } : {
          width: e3
        };
      });
      function y2(e3) {
        return e3 === Number(s2.modelValue);
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
      let k2 = O(() => je({
        extend: zr,
        ...l2.ui?.progress || {}
      })({
        animation: s2.animation,
        size: s2.size,
        color: s2.color,
        orientation: s2.orientation,
        inverted: s2.inverted
      }));
      return (e3, t3) => (M(), R(m(K), {
        as: m(s2).as,
        "data-orientation": m(s2).orientation,
        "data-slot": `root`,
        class: b(k2.value.root({
          class: [
            m(s2).ui?.root,
            m(s2).class
          ]
        }))
      }, {
        default: I(() => [
          !d2.value && (m(s2).status || i2.status) ? (M(), S(`div`, {
            key: 0,
            "data-slot": `status`,
            class: b(k2.value.status({
              class: m(s2).ui?.status
            })),
            style: T(v2.value)
          }, [
            H(e3.$slots, `status`, {
              percent: g2.value
            }, () => [
              o(L(g2.value) + `% `, 1)
            ])
          ], 6)) : U(``, true),
          a(m(hr), E(m(u2), {
            max: h2.value,
            "data-slot": `base`,
            class: k2.value.base({
              class: m(s2).ui?.base
            }),
            style: {
              transform: `translateZ(0)`
            }
          }), {
            default: I(() => [
              a(m(gr), {
                "data-slot": `indicator`,
                class: b(k2.value.indicator({
                  class: m(s2).ui?.indicator
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
              class: m(s2).ui?.steps
            }))
          }, [
            (M(true), S(P, null, C(m(s2).max, (t4, n3) => (M(), S(`div`, {
              key: n3,
              "data-slot": `step`,
              class: b(k2.value.step({
                class: m(s2).ui?.step,
                step: D2(n3)
              }))
            }, [
              H(e3.$slots, `step-${n3}`, {
                step: t4
              }, () => [
                o(L(t4), 1)
              ])
            ], 2))), 128))
          ], 2)) : U(``, true)
        ]),
        _: 3
      }, 8, [
        `as`,
        `data-orientation`,
        `class`
      ]));
    }
  }, Vr = {
    slots: {
      root: `relative group overflow-hidden bg-default shadow-lg rounded-lg ring ring-default p-4 flex gap-2.5`,
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
          root: `outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary`,
          icon: `text-primary`
        },
        secondary: {
          root: `outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary`,
          icon: `text-secondary`
        },
        success: {
          root: `outline-success/25 focus-visible:outline-3 focus-visible:ring-success`,
          icon: `text-success`
        },
        info: {
          root: `outline-info/25 focus-visible:outline-3 focus-visible:ring-info`,
          icon: `text-info`
        },
        warning: {
          root: `outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning`,
          icon: `text-warning`
        },
        error: {
          root: `outline-error/25 focus-visible:outline-3 focus-visible:ring-error`,
          icon: `text-error`
        },
        neutral: {
          root: `outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted`,
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
  }, Hr = {
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
      duration: {
        type: Number,
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
      let r2 = e2, i2 = n2, s2 = p(), c2 = Y(`toast`, r2), { t: l2 } = gt(), u2 = q(), d2 = ze(tt(c2, `as`, `defaultOpen`, `open`, `duration`, `type`), i2), f2 = O(() => je({
        extend: Vr,
        ...u2.ui?.toast || {}
      })({
        color: c2.color,
        orientation: c2.orientation,
        title: !!c2.title || !!s2.title
      })), h2 = g(`rootRef`), _2 = z(0);
      return w(() => {
        h2.value?.$el?.getBoundingClientRect && (_2.value = h2.value.$el.getBoundingClientRect().height);
      }), t2({
        height: _2
      }), (e3, t3) => (M(), R(m(Fr), E({
        ref_key: `rootRef`,
        ref: h2
      }, m(d2), {
        "data-orientation": m(c2).orientation,
        "data-slot": `root`,
        class: f2.value.root({
          class: [
            m(c2).ui?.root,
            m(c2).class
          ]
        }),
        style: {
          "--height": _2.value
        }
      }), {
        default: I(({ remaining: n3, duration: r3, open: i3 }) => [
          H(e3.$slots, `leading`, {
            ui: f2.value
          }, () => [
            m(c2).avatar ? (M(), R(Ae, E({
              key: 0,
              size: m(c2).ui?.avatarSize || f2.value.avatarSize()
            }, m(c2).avatar, {
              "data-slot": `avatar`,
              class: f2.value.avatar({
                class: m(c2).ui?.avatar
              })
            }), null, 16, [
              `size`,
              `class`
            ])) : m(c2).icon ? (M(), R(Be, {
              key: 1,
              name: m(c2).icon,
              "data-slot": `icon`,
              class: b(f2.value.icon({
                class: m(c2).ui?.icon
              }))
            }, null, 8, [
              `name`,
              `class`
            ])) : U(``, true)
          ]),
          x(`div`, {
            "data-slot": `wrapper`,
            class: b(f2.value.wrapper({
              class: m(c2).ui?.wrapper
            }))
          }, [
            m(c2).title || s2.title ? (M(), R(m(Ir), {
              key: 0,
              "data-slot": `title`,
              class: b(f2.value.title({
                class: m(c2).ui?.title
              }))
            }, {
              default: I(() => [
                H(e3.$slots, `title`, {}, () => [
                  typeof m(c2).title == `function` ? (M(), R(V(m(c2).title()), {
                    key: 0
                  })) : typeof m(c2).title == `object` ? (M(), R(V(m(c2).title), {
                    key: 1
                  })) : (M(), S(P, {
                    key: 2
                  }, [
                    o(L(m(c2).title), 1)
                  ], 64))
                ])
              ]),
              _: 3
            }, 8, [
              `class`
            ])) : U(``, true),
            m(c2).description || s2.description ? (M(), R(m(Nr), {
              key: 1,
              "data-slot": `description`,
              class: b(f2.value.description({
                class: m(c2).ui?.description
              }))
            }, {
              default: I(() => [
                H(e3.$slots, `description`, {}, () => [
                  typeof m(c2).description == `function` ? (M(), R(V(m(c2).description()), {
                    key: 0
                  })) : typeof m(c2).description == `object` ? (M(), R(V(m(c2).description), {
                    key: 1
                  })) : (M(), S(P, {
                    key: 2
                  }, [
                    o(L(m(c2).description), 1)
                  ], 64))
                ])
              ]),
              _: 3
            }, 8, [
              `class`
            ])) : U(``, true),
            m(c2).orientation === `vertical` && (m(c2).actions?.length || s2.actions) ? (M(), S(`div`, {
              key: 2,
              "data-slot": `actions`,
              class: b(f2.value.actions({
                class: m(c2).ui?.actions
              }))
            }, [
              H(e3.$slots, `actions`, {}, () => [
                (M(true), S(P, null, C(m(c2).actions, (e4, n4) => (M(), R(m(Mr), {
                  key: n4,
                  "alt-text": e4.label || `Action`,
                  "as-child": ``,
                  onClick: t3[0] || (t3[0] = ue(() => {
                  }, [
                    `stop`
                  ]))
                }, {
                  default: I(() => [
                    a(Le, E({
                      size: `xs`,
                      color: m(c2).color
                    }, {
                      ref_for: true
                    }, e4), null, 16, [
                      `color`
                    ])
                  ]),
                  _: 2
                }, 1032, [
                  `alt-text`
                ]))), 128))
              ])
            ], 2)) : U(``, true)
          ], 2),
          m(c2).orientation === `horizontal` && (m(c2).actions?.length || s2.actions) || m(c2).close ? (M(), S(`div`, {
            key: 0,
            "data-slot": `actions`,
            class: b(f2.value.actions({
              class: m(c2).ui?.actions,
              orientation: `horizontal`
            }))
          }, [
            m(c2).orientation === `horizontal` && (m(c2).actions?.length || s2.actions) ? H(e3.$slots, `actions`, {}, () => [
              (M(true), S(P, null, C(m(c2).actions, (e4, n4) => (M(), R(m(Mr), {
                key: n4,
                "alt-text": e4.label || `Action`,
                "as-child": ``,
                onClick: t3[1] || (t3[1] = ue(() => {
                }, [
                  `stop`
                ]))
              }, {
                default: I(() => [
                  a(Le, E({
                    size: `xs`,
                    color: m(c2).color
                  }, {
                    ref_for: true
                  }, e4), null, 16, [
                    `color`
                  ])
                ]),
                _: 2
              }, 1032, [
                `alt-text`
              ]))), 128))
            ], void 0, 0) : U(``, true),
            m(c2).close || s2.close ? (M(), R(m(jr), {
              key: 1,
              "as-child": ``
            }, {
              default: I(() => [
                H(e3.$slots, `close`, {
                  ui: f2.value
                }, () => [
                  m(c2).close ? (M(), R(Le, E({
                    key: 0,
                    icon: m(c2).closeIcon || m(u2).ui.icons.close,
                    color: `neutral`,
                    variant: `link`,
                    "aria-label": m(l2)(`toast.close`)
                  }, typeof m(c2).close == `object` ? m(c2).close : {}, {
                    "data-slot": `close`,
                    class: f2.value.close({
                      class: m(c2).ui?.close
                    }),
                    onClick: t3[2] || (t3[2] = ue(() => {
                    }, [
                      `stop`
                    ]))
                  }), null, 16, [
                    `icon`,
                    `aria-label`,
                    `class`
                  ])) : U(``, true)
                ])
              ]),
              _: 3
            })) : U(``, true)
          ], 2)) : U(``, true),
          m(c2).progress && i3 && n3 > 0 && r3 ? (M(), R(Br, E({
            key: 1,
            "model-value": n3 / r3 * 100,
            color: m(c2).color
          }, typeof m(c2).progress == `object` ? m(c2).progress : {}, {
            size: `sm`,
            "data-slot": `progress`,
            class: f2.value.progress({
              class: m(c2).ui?.progress
            })
          }), null, 16, [
            `model-value`,
            `color`,
            `class`
          ])) : U(``, true)
        ]),
        _: 3
      }, 16, [
        `data-orientation`,
        `class`,
        `style`
      ]));
    }
  }, Ur = {
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
  }, Wr = Object.assign({
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
      let t2 = Y(`toaster`, e2), { toasts: n2, remove: r2 } = Ut(), o2 = q();
      k(Wt, B(() => t2.max));
      let s2 = ze(tt(t2, `duration`, `label`, `swipeThreshold`, `disableSwipe`)), c2 = _e(B(() => t2.portal)), l2 = O(() => {
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
      }), u2 = O(() => je({
        extend: Ur,
        ...o2.ui?.toaster || {}
      })({
        position: t2.position,
        swipeDirection: l2.value
      }));
      function d2(e3, t3) {
        e3 || r2(t3);
      }
      let f2 = z(false), p2 = O(() => t2.expand || f2.value), h2 = z([]), g2 = O(() => h2.value.reduce((e3, { height: t3 }) => e3 + t3 + 16, 0)), _2 = O(() => h2.value[h2.value.length - 1]?.height || 0);
      function v2(e3) {
        return h2.value.slice(e3 + 1).reduce((e4, { height: t3 }) => e4 + t3 + 16, 0);
      }
      return (e3, r3) => (M(), R(m(br), E({
        "swipe-direction": l2.value
      }, m(s2)), {
        default: I(() => [
          H(e3.$slots, `default`),
          (M(true), S(P, null, C(m(n2), (e4, r4) => (M(), R(Hr, E({
            key: e4.id,
            ref_for: true,
            ref_key: `refs`,
            ref: h2,
            progress: m(t2).progress
          }, {
            ref_for: true
          }, m(De)(e4, [
            `id`,
            `close`,
            `_duplicate`,
            `_updated`
          ]), {
            close: e4.close,
            "data-expanded": p2.value,
            "data-front": !p2.value && r4 === m(n2).length - 1,
            "data-pulsing": e4._duplicate ? e4._duplicate % 2 == 0 ? `even` : `odd` : void 0,
            style: {
              "--index": r4 - m(n2).length + m(n2).length,
              "--before": m(n2).length - 1 - r4,
              "--offset": v2(r4),
              "--scale": p2.value ? `1` : `calc(1 - var(--before) * var(--scale-factor))`,
              "--translate": p2.value ? `calc(var(--offset) * var(--translate-factor))` : `calc(var(--before) * var(--gap))`,
              "--transform": `translateY(var(--translate)) scale(var(--scale))`
            },
            "data-slot": `base`,
            class: u2.value.base({
              class: [
                m(t2).ui?.base,
                e4.onClick ? `cursor-pointer` : void 0
              ]
            }),
            "onUpdate:open": (t3) => d2(t3, e4.id),
            onClick: (t3) => e4.onClick && e4.onClick(e4)
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
          a(m(Pr), i(W(m(c2))), {
            default: I(() => [
              a(m(Rr), {
                "data-expanded": p2.value,
                "data-slot": `viewport`,
                class: b(u2.value.viewport({
                  class: [
                    m(t2).ui?.viewport,
                    m(t2).class
                  ]
                })),
                style: T({
                  "--scale-factor": `0.05`,
                  "--translate-factor": m(t2).position?.startsWith(`top`) ? `1px` : `-1px`,
                  "--gap": m(t2).position?.startsWith(`top`) ? `16px` : `-16px`,
                  "--front-height": `${_2.value}px`,
                  "--height": `${g2.value}px`
                }),
                onMouseenter: r3[0] || (r3[0] = (e4) => f2.value = true),
                onMouseleave: r3[1] || (r3[1] = (e4) => f2.value = false)
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
  }), Gr = {
    __name: `OverlayProvider`,
    setup(e2) {
      let { overlays: t2, unmount: n2, close: r2 } = Ht(), i2 = O(() => t2.filter((e3) => e3.isMounted)), a2 = (e3) => {
        r2(e3), n2(e3);
      }, o2 = (e3, t3) => {
        r2(e3, t3);
      };
      return (e3, t3) => (M(true), S(P, null, C(i2.value, (e4) => (M(), R(V(e4.component), E({
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
  }, Kr = Object.assign({
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
      let t2 = e2, n2 = Oe(tt(t2, `scrollBody`)), r2 = B(() => t2.tooltip), o2 = B(() => t2.toaster), s2 = B(() => t2.locale);
      return k(mt, s2), k(be, B(() => t2.portal)), (c2, l2) => (M(), R(m(Ce), E({
        "use-id": () => h(),
        dir: t2.dir || s2.value?.dir,
        locale: s2.value?.code
      }, m(n2)), {
        default: I(() => [
          a(m(pe), i(W(r2.value)), {
            default: I(() => [
              e2.toaster === null ? H(c2.$slots, `default`, {}, void 0, void 0, 1) : (M(), R(Wr, i(E({
                key: 0
              }, o2.value)), {
                default: I(() => [
                  H(c2.$slots, `default`)
                ]),
                _: 3
              }, 16)),
              a(Gr)
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
  }), qr = {
    base: `fixed inset-0 flex overflow-hidden`
  }, Jr = {
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
      storageOptions: {
        type: Object,
        required: false
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
      let t2 = Y(`dashboardGroup`, e2), n2 = Ue(), r2 = q(), i2 = O(() => je({
        extend: qr,
        ...r2.ui?.dashboardGroup || {}
      })), a2 = z(false), o2 = z(false);
      return ft({
        storage: t2.storage,
        storageKey: t2.storageKey,
        storageOptions: t2.storageOptions,
        persistent: t2.persistent,
        unit: t2.unit,
        sidebarOpen: a2,
        toggleSidebar: () => {
          n2.hooks.callHook(`dashboard:sidebar:toggle`);
        },
        sidebarCollapsed: o2,
        collapseSidebar: (e3) => {
          n2.hooks.callHook(`dashboard:sidebar:collapse`, e3);
        },
        toggleSearch: () => {
          n2.hooks.callHook(`dashboard:search:toggle`);
        }
      }), (e3, n3) => (M(), R(m(K), {
        as: m(t2).as,
        class: b(i2.value({
          class: [
            m(t2).ui?.base,
            m(t2).class
          ]
        }))
      }, {
        default: I(() => [
          H(e3.$slots, `default`)
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
  var Yr = typeof window < `u` && typeof document < `u`;
  typeof WorkerGlobalScope < `u` && globalThis instanceof WorkerGlobalScope;
  var Xr = (e2) => typeof e2 < `u`;
  function Zr(e2) {
    return JSON.parse(JSON.stringify(e2));
  }
  function Qr(e2, t2, n2, r2 = {}) {
    let { clone: i2 = false, passive: a2 = false, eventName: o2, deep: s2 = false, defaultValue: c2, shouldEmit: l2 } = r2, d2 = f(), p2 = n2 || d2?.emit || d2?.$emit?.bind(d2) || d2?.proxy?.$emit?.bind(d2?.proxy), m2 = o2;
    t2 || (t2 = `modelValue`), m2 || (m2 = `update:${t2.toString()}`);
    let h2 = (e3) => i2 ? typeof i2 == `function` ? i2(e3) : Zr(e3) : e3, g2 = () => Xr(e2[t2]) ? h2(e2[t2]) : c2, _2 = (e3) => {
      l2 ? l2(e3) && p2(m2, e3) : p2(m2, e3);
    };
    if (a2) {
      let n3 = z(g2()), r3 = false;
      return u(() => e2[t2], (e3) => {
        r3 || (r3 = true, n3.value = h2(e3), re(() => r3 = false));
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
  var [$r, ei] = Ee(`DrawerRoot`), ti = /* @__PURE__ */ new WeakMap();
  function Z(e2, t2, n2 = false) {
    if (!e2 || !(e2 instanceof HTMLElement) || !t2) return;
    let r2 = {};
    Object.entries(t2).forEach(([t3, n3]) => {
      if (t3.startsWith(`--`)) {
        e2.style.setProperty(t3, n3);
        return;
      }
      r2[t3] = e2.style[t3], e2.style[t3] = n3;
    }), !n2 && ti.set(e2, r2);
  }
  function ni(e2, t2) {
    if (!e2 || !(e2 instanceof HTMLElement)) return;
    let n2 = ti.get(e2);
    n2 && Object.entries(n2).forEach(([t3, n3]) => {
      e2.style[t3] = n3;
    });
  }
  function ri(e2, t2) {
    let n2 = window.getComputedStyle(e2), r2 = n2.transform || n2.webkitTransform || n2.mozTransform, i2 = r2.match(/^matrix3d\((.+)\)$/);
    return i2 ? Number.parseFloat(i2[1].split(`, `)[Q(t2) ? 13 : 12]) : (i2 = r2.match(/^matrix\((.+)\)$/), i2 ? Number.parseFloat(i2[1].split(`, `)[Q(t2) ? 5 : 4]) : null);
  }
  function ii(e2) {
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
  function ai(e2, t2) {
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
  }, oi = 0.4, si = 0.25, ci = 100, li = 8, ui = 16, di = 26, fi = `vaul-dragging`;
  function pi({ activeSnapPoint: e2, snapPoints: t2, drawerRef: n2, overlayRef: r2, fadeFromIndex: i2, onSnapPointChange: a2, direction: o2 }) {
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
    }), A(() => {
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
      re(() => {
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
      if (a3 > oi && Math.abs(e3) < v3 * 0.4) {
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
  function mi() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
  var hi = null;
  function gi(e2) {
    let { isOpen: t2, modal: n2, nested: r2, hasBeenOpened: i2, preventScrollRestoration: a2, noBodyStyles: o2 } = e2, s2 = z(typeof window < `u` ? window.location.href : ``), c2 = z(0);
    function l2() {
      if (mi() && hi === null && t2.value && !o2.value) {
        hi = {
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
      if (mi() && hi !== null && !o2.value) {
        let e3 = -Number.parseInt(document.body.style.top, 10), t3 = -Number.parseInt(document.body.style.left, 10);
        Object.assign(document.body.style, hi), window.requestAnimationFrame(() => {
          if (a2.value && s2.value !== window.location.href) {
            s2.value = window.location.href;
            return;
          }
          window.scrollTo(t3, e3);
        }), hi = null;
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
  function _i(e2, t2) {
    return e2 && e2.value ? e2 : t2;
  }
  function vi(e2) {
    let { emitDrag: t2, emitRelease: n2, emitClose: r2, emitOpenChange: i2, open: a2, dismissible: o2, nested: s2, modal: c2, shouldScaleBackground: l2, setBackgroundColorOnScale: d2, scrollLockTimeout: f2, closeThreshold: p2, activeSnapPoint: m2, fadeFromIndex: h2, direction: g2, noBodyStyles: _2, handleOnly: v2, preventScrollRestoration: b2 } = e2, x2 = z(a2.value ?? false), S2 = z(false), C2 = z(false), w2 = z(false), T2 = z(null), E2 = z(null), D2 = z(null), k2 = z(null), A2 = z(null), ee2 = z(false), j2 = z(null), te2 = z(0), M2 = z(false);
    z(0);
    let N2 = z(null);
    z(0);
    let P2 = O(() => N2.value?.$el.getBoundingClientRect().height || 0), F2 = _i(e2.snapPoints, z(void 0)), ne2 = O(() => F2 && (F2.value?.length ?? 0) > 0), I2 = z(null), { activeSnapPointIndex: L2, onRelease: re2, snapPointsOffset: ie2, onDrag: ae2, shouldFade: R2, getPercentageDragged: oe2 } = pi({
      snapPoints: F2,
      activeSnapPoint: m2,
      drawerRef: N2,
      fadeFromIndex: h2,
      overlayRef: T2,
      onSnapPointChange: B2,
      direction: g2
    });
    function B2(e3, t3) {
      F2.value && e3 === t3.length - 1 && (E2.value = /* @__PURE__ */ new Date());
    }
    gi({
      isOpen: x2,
      modal: c2,
      nested: s2,
      hasBeenOpened: S2,
      noBodyStyles: _2,
      preventScrollRestoration: b2
    });
    function V2() {
      return (window.innerWidth - di) / window.innerWidth;
    }
    function se2(e3, t3) {
      if (!e3) return false;
      let n3 = e3, r3 = window.getSelection()?.toString(), i3 = N2.value ? ri(N2.value.$el, g2.value) : null, a3 = /* @__PURE__ */ new Date();
      if (n3.hasAttribute(`data-vaul-no-drag`) || n3.closest(`[data-vaul-no-drag]`)) return false;
      if (g2.value === `right` || g2.value === `left`) return true;
      if (E2.value && a3.getTime() - E2.value.getTime() < 500) return false;
      if (i3 !== null && (g2.value === `bottom` ? i3 > 0 : i3 < 0)) return true;
      if (r3 && r3.length > 0) return false;
      if (A2.value && a3.getTime() - A2.value.getTime() < f2.value && i3 === 0 || t3) return A2.value = a3, false;
      for (; n3; ) {
        if (n3.scrollHeight > n3.clientHeight) {
          if (n3.scrollTop !== 0) return A2.value = /* @__PURE__ */ new Date(), false;
          if (n3.getAttribute(`role`) === `dialog`) return true;
        }
        n3 = n3.parentNode;
      }
      return true;
    }
    function H2(e3) {
      !o2.value && !F2.value || N2.value && !N2.value.$el.contains(e3.target) || (C2.value = true, D2.value = /* @__PURE__ */ new Date(), e3.target.setPointerCapture(e3.pointerId), te2.value = Q(g2.value) ? e3.clientY : e3.clientX);
    }
    function U2(e3) {
      var n3;
      if (N2.value && C2.value) {
        let r3 = g2.value === `bottom` || g2.value === `right` ? 1 : -1, i3 = (te2.value - (Q(g2.value) ? e3.clientY : e3.clientX)) * r3, a3 = i3 > 0, s3 = F2.value && !o2.value && !a3;
        if (s3 && L2.value === 0) return;
        let c3 = Math.abs(i3), u2 = document.querySelector(`[data-vaul-drawer-wrapper]`) || document.querySelector(`[vaul-drawer-wrapper]`), d3 = c3 / P2.value, f3 = oe2(c3, a3);
        if (f3 !== null && (d3 = f3), s3 && d3 >= 1 || !ee2.value && !se2(e3.target, a3)) return;
        if ((n3 = N2?.value) == null || n3.$el.classList.add(fi), ee2.value = true, Z(N2.value?.$el, {
          transition: `none`
        }), Z(T2.value?.$el, {
          transition: `none`
        }), F2.value && ae2({
          draggedDistance: i3
        }), a3 && !F2.value) {
          let e4 = ii(i3), t3 = Math.min(e4 * -1, 0) * r3;
          Z(N2.value?.$el, {
            transform: Q(g2.value) ? `translate3d(0, ${t3}px, 0)` : `translate3d(${t3}px, 0, 0)`
          });
          return;
        }
        let p3 = 1 - d3;
        if ((R2.value || h2.value && L2.value === h2.value - 1) && (t2(d3), Z(T2.value?.$el, {
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
    function W2() {
      if (!N2.value) return;
      let e3 = document.querySelector(`[data-vaul-drawer-wrapper]`) || document.querySelector(`[vaul-drawer-wrapper]`), t3 = ri(N2.value.$el, g2.value);
      Z(N2.value.$el, {
        transform: `translate3d(0, 0, 0)`,
        transition: `transform ${$.DURATION}s cubic-bezier(${$.EASE.join(`,`)})`
      }), Z(T2.value?.$el, {
        transition: `opacity ${$.DURATION}s cubic-bezier(${$.EASE.join(`,`)})`,
        opacity: `1`
      }), l2.value && t3 && t3 > 0 && x2.value && Z(e3, {
        borderRadius: `${li}px`,
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
    function ce2(e3) {
      N2.value && (r2(), e3 || (x2.value = false), window.setTimeout(() => {
        F2.value && (m2.value = F2.value[0]);
      }, $.DURATION * 1e3));
    }
    y(() => {
      if (!x2.value && l2.value && Yr) {
        let e3 = setTimeout(() => {
          ni(document.body);
        }, 200);
        return () => clearTimeout(e3);
      }
    }), u(a2, () => {
      x2.value = a2.value, a2.value || ce2();
    });
    function le2(e3) {
      if (!C2.value || !N2.value) return;
      N2.value.$el.classList.remove(fi), ee2.value = false, C2.value = false, k2.value = /* @__PURE__ */ new Date();
      let t3 = ri(N2.value.$el, g2.value);
      if (!se2(e3.target, false) || !t3 || Number.isNaN(t3) || D2.value === null) return;
      let r3 = k2.value.getTime() - D2.value.getTime(), i3 = te2.value - (Q(g2.value) ? e3.clientY : e3.clientX), a3 = Math.abs(i3) / r3;
      if (a3 > 0.05 && (w2.value = true, window.setTimeout(() => {
        w2.value = false;
      }, 200)), F2.value) {
        let e4 = g2.value === `bottom` || g2.value === `right` ? 1 : -1;
        re2({
          draggedDistance: i3 * e4,
          closeDrawer: ce2,
          velocity: a3,
          dismissible: o2.value
        }), n2(true);
        return;
      }
      if (g2.value === `bottom` || g2.value === `right` ? i3 > 0 : i3 < 0) {
        W2(), n2(true);
        return;
      }
      if (a3 > oi) {
        ce2(), n2(false);
        return;
      }
      if (t3 >= Math.min(N2.value.$el.getBoundingClientRect().height ?? 0, window.innerHeight) * p2.value) {
        ce2(), n2(false);
        return;
      }
      n2(true), W2();
    }
    u(x2, (e3) => {
      e3 && (E2.value = /* @__PURE__ */ new Date()), i2(e3);
    }, {
      immediate: true
    });
    function ue2(e3) {
      var t3;
      let n3 = e3 ? (window.innerWidth - ui) / window.innerWidth : 1, r3 = e3 ? -16 : 0;
      j2.value && window.clearTimeout(j2.value), Z(N2.value?.$el, {
        transition: `transform ${$.DURATION}s cubic-bezier(${$.EASE.join(`,`)})`,
        transform: `scale(${n3}) translate3d(0, ${r3}px, 0)`
      }), !e3 && (t3 = N2.value) != null && t3.$el && (j2.value = window.setTimeout(() => {
        let e4 = ri(N2.value?.$el, g2.value);
        Z(N2.value?.$el, {
          transition: `none`,
          transform: Q(g2.value) ? `translate3d(0, ${e4}px, 0)` : `translate3d(${e4}px, 0, 0)`
        });
      }, 500));
    }
    function de2(e3) {
      if (e3 < 0) return;
      let t3 = Q(g2.value) ? window.innerHeight : window.innerWidth, n3 = (t3 - ui) / t3, r3 = n3 + e3 * (1 - n3), i3 = -16 + e3 * ui;
      Z(N2.value?.$el, {
        transform: Q(g2.value) ? `scale(${r3}) translate3d(0, ${i3}px, 0)` : `scale(${r3}) translate3d(${i3}px, 0, 0)`,
        transition: `none`
      });
    }
    function fe2(e3) {
      let t3 = Q(g2.value) ? window.innerHeight : window.innerWidth, n3 = e3 ? (t3 - ui) / t3 : 1, r3 = e3 ? -16 : 0;
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
      handleRef: I2,
      isDragging: C2,
      dragStartTime: D2,
      isAllowedToDrag: ee2,
      snapPoints: F2,
      activeSnapPoint: m2,
      hasSnapPoints: ne2,
      pointerStart: te2,
      dismissible: o2,
      snapPointsOffset: ie2,
      direction: g2,
      shouldFade: R2,
      fadeFromIndex: h2,
      shouldScaleBackground: l2,
      setBackgroundColorOnScale: d2,
      onPress: H2,
      onDrag: U2,
      onRelease: le2,
      closeDrawer: ce2,
      onNestedDrag: de2,
      onNestedRelease: fe2,
      onNestedOpenChange: ue2,
      emitClose: r2,
      emitDrag: t2,
      emitRelease: n2,
      emitOpenChange: i2,
      nested: s2,
      handleOnly: v2,
      noBodyStyles: _2
    };
  }
  var yi = j({
    __name: `DrawerRoot`,
    props: {
      activeSnapPoint: {
        default: void 0
      },
      closeThreshold: {
        default: si
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
        default: ci
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
      let a2 = O(() => r2.fadeFromIndex ?? (r2.snapPoints && r2.snapPoints.length - 1)), o2 = Qr(r2, `open`, i2, {
        defaultValue: r2.defaultOpen,
        passive: r2.open === void 0
      }), s2 = Qr(r2, `activeSnapPoint`, i2, {
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
      }, { closeDrawer: l2, hasBeenOpened: u2, modal: d2, isOpen: f2 } = ei(vi({
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
      }), (e3, t3) => (M(), R(m(Lt), {
        open: m(f2),
        modal: m(d2),
        "onUpdate:open": h2
      }, {
        default: I(() => [
          H(e3.$slots, `default`, {
            open: m(f2)
          })
        ]),
        _: 3
      }, 8, [
        `open`,
        `modal`
      ]));
    }
  }), bi = j({
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
      let n2 = e2, r2 = t2, { onNestedDrag: i2, onNestedOpenChange: a2, onNestedRelease: o2 } = $r();
      function s2() {
        a2(false);
      }
      function c2(e3) {
        i2(e3);
      }
      function l2(e3) {
        e3 && a2(e3), r2(`update:open`, e3);
      }
      let u2 = Se(n2, r2);
      return (e3, t3) => (M(), R(yi, E(m(u2), {
        nested: ``,
        onClose: s2,
        onDrag: c2,
        onRelease: m(o2),
        "onUpdate:open": l2
      }), {
        default: I(() => [
          H(e3.$slots, `default`)
        ]),
        _: 3
      }, 16, [
        `onRelease`
      ]));
    }
  }), xi = j({
    __name: `DrawerOverlay`,
    setup(e2) {
      let { overlayRef: t2, hasSnapPoints: n2, isOpen: r2, shouldFade: i2 } = $r();
      return (e3, a2) => (M(), R(m(Pt), {
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
  function Si() {
    let { direction: e2, isOpen: t2, shouldScaleBackground: n2, setBackgroundColorOnScale: r2, noBodyStyles: i2 } = $r(), a2 = z(null), o2 = z(document.body.style.backgroundColor);
    function s2() {
      return (window.innerWidth - di) / window.innerWidth;
    }
    y((c2) => {
      if (t2.value && n2.value) {
        a2.value && clearTimeout(a2.value);
        let t3 = document.querySelector(`[data-vaul-drawer-wrapper]`) || document.querySelector(`[vaul-drawer-wrapper]`);
        if (!t3) return;
        r2.value && !i2.value && ai(document.body, {
          background: `black`
        }), ai(t3, {
          transformOrigin: Q(e2.value) ? `top` : `left`,
          transitionProperty: `transform, border-radius`,
          transitionDuration: `${$.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${$.EASE.join(`,`)})`
        });
        let n3 = ai(t3, {
          borderRadius: `${li}px`,
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
  var Ci = j({
    __name: `DrawerContent`,
    setup(e2) {
      let { open: t2, isOpen: n2, snapPointsOffset: r2, hasSnapPoints: i2, drawerRef: a2, onPress: o2, onDrag: s2, onRelease: c2, modal: l2, emitOpenChange: u2, dismissible: d2, keyboardIsOpen: f2, closeDrawer: p2, direction: h2, handleOnly: g2 } = $r();
      Si();
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
      }), (e3, t3) => (M(), R(m(Vt), {
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
        onOpenAutoFocus: t3[0] || (t3[0] = ue(() => {
        }, [
          `prevent`
        ])),
        onEscapeKeyDown: t3[1] || (t3[1] = (e4) => {
          m(d2) || e4.preventDefault();
        })
      }, {
        default: I(() => [
          H(e3.$slots, `default`)
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
  }), wi = [
    `data-vaul-drawer-visible`
  ], Ti = {
    "data-vaul-handle-hitarea": ``,
    "aria-hidden": `true`
  }, Ei = 250, Di = 120, Oi = j({
    __name: `DrawerHandle`,
    props: {
      preventCycle: {
        type: Boolean,
        default: false
      }
    },
    setup(e2) {
      let t2 = e2, { onPress: n2, onDrag: r2, handleRef: i2, handleOnly: a2, isOpen: o2, snapPoints: s2, activeSnapPoint: c2, isDragging: l2, dismissible: u2, closeDrawer: d2 } = $r(), f2 = z(null), p2 = z(false);
      function h2() {
        if (p2.value) {
          v2();
          return;
        }
        window.setTimeout(() => {
          g2();
        }, Di);
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
        }, Ei);
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
        x(`span`, Ti, [
          H(e3.$slots, `default`)
        ])
      ], 40, wi));
    }
  }), ki = {
    slots: {
      overlay: `fixed inset-0 bg-elevated/75`,
      content: `fixed bg-default ring ring-default flex focus:outline-none`,
      handle: [
        `shrink-0 !bg-accented`,
        `transition-opacity`
      ],
      container: `w-full flex flex-col gap-4 p-4 overflow-y-auto`,
      header: `flex items-center gap-1.5 min-h-8`,
      wrapper: `min-w-0 flex-1`,
      title: `text-highlighted font-semibold`,
      description: `mt-1 text-muted text-sm`,
      actions: `flex items-center gap-1.5 shrink-0 ms-auto`,
      body: `flex-1`,
      footer: `flex flex-col gap-1.5`,
      close: ``
    },
    variants: {
      direction: {
        top: {
          content: `mb-24 flex-col-reverse`,
          handle: `mb-4`
        },
        right: {
          content: `flex-row rtl:flex-row-reverse`,
          handle: `!ml-4`
        },
        bottom: {
          content: `mt-24 flex-col`,
          handle: `mt-4`
        },
        left: {
          content: `flex-row-reverse rtl:flex-row`,
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
  }, Ai = {
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
      let n2 = e2, r2 = t2, s2 = p(), c2 = Y(`drawer`, n2), { t: l2 } = gt(), u2 = q(), d2 = ze(tt(c2, `activeSnapPoint`, `closeThreshold`, `shouldScaleBackground`, `setBackgroundColorOnScale`, `scrollLockTimeout`, `fixed`, `dismissible`, `modal`, `open`, `defaultOpen`, `nested`, `direction`, `noBodyStyles`, `handleOnly`, `preventScrollRestoration`, `snapPoints`), r2), f2 = _e(B(() => c2.portal)), h2 = B(() => c2.content), g2 = O(() => c2.dismissible ? {
        pointerDownOutside: Gt
      } : [
        `interactOutside`,
        `escapeKeyDown`
      ].reduce((e3, t3) => (e3[t3] = (e4) => {
        e4.preventDefault(), r2(`close:prevent`);
      }, e3), {})), _2 = O(() => je({
        extend: ki,
        ...u2.ui?.drawer || {}
      })({
        direction: c2.direction,
        inset: c2.inset,
        snapPoints: c2.snapPoints && c2.snapPoints.length > 0
      }));
      return (e3, t3) => (M(), R(V(m(c2).nested ? m(bi) : m(yi)), i(W(m(d2))), {
        default: I(() => [
          s2.default ? (M(), R(m(Rt), {
            key: 0,
            "as-child": ``,
            class: b(m(c2).class)
          }, {
            default: I(() => [
              H(e3.$slots, `default`)
            ]),
            _: 3
          }, 8, [
            `class`
          ])) : U(``, true),
          a(m(It), i(W(m(f2))), {
            default: I(() => [
              a(m(Pe), null, {
                default: I(() => [
                  m(c2).overlay ? (M(), R(m(xi), {
                    key: 0,
                    "data-slot": `overlay`,
                    class: b(_2.value.overlay({
                      class: m(c2).ui?.overlay
                    }))
                  }, null, 8, [
                    `class`
                  ])) : U(``, true),
                  a(m(Ci), E({
                    "data-slot": `content`,
                    class: _2.value.content({
                      class: [
                        !s2.default && m(c2).class,
                        m(c2).ui?.content
                      ]
                    })
                  }, h2.value, ee(g2.value)), {
                    default: I(() => [
                      m(c2).handle ? (M(), R(m(Oi), {
                        key: 0,
                        "data-slot": `handle`,
                        class: b(_2.value.handle({
                          class: m(c2).ui?.handle
                        }))
                      }, null, 8, [
                        `class`
                      ])) : U(``, true),
                      !m(c2).title && !s2.title || !m(c2).description && !s2.description || s2.content ? (M(), R(m(me), {
                        key: 1
                      }, {
                        default: I(() => [
                          !m(c2).title && !s2.title ? (M(), R(m(Bt), {
                            key: 0
                          })) : s2.content ? (M(), R(m(Bt), {
                            key: 1
                          }, {
                            default: I(() => [
                              H(e3.$slots, `title`, {}, () => [
                                o(L(m(c2).title), 1)
                              ])
                            ]),
                            _: 3
                          })) : U(``, true),
                          !m(c2).description && !s2.description ? (M(), R(m(zt), {
                            key: 2
                          })) : s2.content ? (M(), R(m(zt), {
                            key: 3
                          }, {
                            default: I(() => [
                              H(e3.$slots, `description`, {}, () => [
                                o(L(m(c2).description), 1)
                              ])
                            ]),
                            _: 3
                          })) : U(``, true)
                        ]),
                        _: 3
                      })) : U(``, true),
                      H(e3.$slots, `content`, {}, () => [
                        x(`div`, {
                          "data-slot": `container`,
                          class: b(_2.value.container({
                            class: m(c2).ui?.container
                          }))
                        }, [
                          s2.header || m(c2).title || s2.title || m(c2).description || s2.description || m(c2).close || s2.close || s2.actions ? (M(), S(`div`, {
                            key: 0,
                            "data-slot": `header`,
                            class: b(_2.value.header({
                              class: m(c2).ui?.header
                            }))
                          }, [
                            H(e3.$slots, `header`, {}, () => [
                              m(c2).title || s2.title || m(c2).description || s2.description ? (M(), S(`div`, {
                                key: 0,
                                "data-slot": `wrapper`,
                                class: b(_2.value.wrapper({
                                  class: m(c2).ui?.wrapper
                                }))
                              }, [
                                m(c2).title || s2.title ? (M(), R(m(Bt), {
                                  key: 0,
                                  "data-slot": `title`,
                                  class: b(_2.value.title({
                                    class: m(c2).ui?.title
                                  }))
                                }, {
                                  default: I(() => [
                                    H(e3.$slots, `title`, {}, () => [
                                      o(L(m(c2).title), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, [
                                  `class`
                                ])) : U(``, true),
                                m(c2).description || s2.description ? (M(), R(m(zt), {
                                  key: 1,
                                  "data-slot": `description`,
                                  class: b(_2.value.description({
                                    class: m(c2).ui?.description
                                  }))
                                }, {
                                  default: I(() => [
                                    H(e3.$slots, `description`, {}, () => [
                                      o(L(m(c2).description), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, [
                                  `class`
                                ])) : U(``, true)
                              ], 2)) : U(``, true),
                              s2.actions || m(c2).close || s2.close ? (M(), S(`div`, {
                                key: 1,
                                "data-slot": `actions`,
                                class: b(_2.value.actions({
                                  class: m(c2).ui?.actions
                                }))
                              }, [
                                H(e3.$slots, `actions`),
                                m(c2).close || s2.close ? (M(), R(m(Ft), {
                                  key: 0,
                                  "as-child": ``
                                }, {
                                  default: I(() => [
                                    H(e3.$slots, `close`, {
                                      ui: _2.value
                                    }, () => [
                                      m(c2).close ? (M(), R(Le, E({
                                        key: 0,
                                        icon: m(c2).closeIcon || m(u2).ui.icons.close,
                                        color: `neutral`,
                                        variant: `ghost`,
                                        "aria-label": m(l2)(`drawer.close`)
                                      }, typeof m(c2).close == `object` ? m(c2).close : {}, {
                                        "data-slot": `close`,
                                        class: _2.value.close({
                                          class: m(c2).ui?.close
                                        })
                                      }), null, 16, [
                                        `icon`,
                                        `aria-label`,
                                        `class`
                                      ])) : U(``, true)
                                    ])
                                  ]),
                                  _: 3
                                })) : U(``, true)
                              ], 2)) : U(``, true)
                            ])
                          ], 2)) : U(``, true),
                          s2.body ? (M(), S(`div`, {
                            key: 1,
                            "data-slot": `body`,
                            class: b(_2.value.body({
                              class: m(c2).ui?.body
                            }))
                          }, [
                            H(e3.$slots, `body`)
                          ], 2)) : U(``, true),
                          s2.footer ? (M(), S(`div`, {
                            key: 2,
                            "data-slot": `footer`,
                            class: b(_2.value.footer({
                              class: m(c2).ui?.footer
                            }))
                          }, [
                            H(e3.$slots, `footer`)
                          ], 2)) : U(``, true)
                        ], 2)
                      ])
                    ]),
                    _: 3
                  }, 16, [
                    `class`
                  ])
                ]),
                _: 3
              })
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 16));
    }
  }, ji = {
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
  }, Mi = [
    `data-collapsed`,
    `data-dragging`
  ], Ni = Object.assign({
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
      let t2 = e2, n2 = p(), r2 = Y(`dashboardSidebar`, t2), o2 = c(e2, `open`, {
        type: Boolean,
        default: false
      }), s2 = c(e2, `collapsed`, {
        type: Boolean,
        default: false
      }), l2 = yt(), { t: d2 } = gt(), f2 = q(), g2 = dt({
        storageKey: `dashboard`,
        unit: `%`,
        sidebarOpen: z(false),
        sidebarCollapsed: z(false)
      }), _2 = `${g2.storageKey}-sidebar-${r2.id || h()}`, { el: v2, size: y2, collapse: C2, isCollapsed: w2, isDragging: T2, onMouseDown: D2, onTouchStart: k2, onDoubleClick: A2 } = ht(_2, B(() => ({
        ...g2,
        ...r2
      })), {
        collapsed: s2
      }), [ee2, j2] = ct(), [te2, N2] = ct();
      He(`dashboard:sidebar:toggle`, () => {
        o2.value = !o2.value;
      }), He(`dashboard:sidebar:collapse`, (e3) => {
        w2.value = e3;
      }), u(o2, () => g2.sidebarOpen.value = o2.value, {
        immediate: true
      }), u(w2, () => g2.sidebarCollapsed.value = w2.value, {
        immediate: true
      }), u(() => l2.fullPath, () => {
        r2.autoClose && (o2.value = false);
      });
      let F2 = O(() => je({
        extend: ji,
        ...f2.ui?.dashboardSidebar || {}
      })({
        side: r2.side
      })), ne2 = O(() => ({
        slideover: Kt,
        modal: qt,
        drawer: Ai
      })[r2.mode]), L2 = B(() => ke(r2.menu, {}, r2.mode === `modal` ? {
        fullscreen: true,
        transition: false
      } : r2.mode === `slideover` ? {
        side: `left`
      } : {}));
      function re2() {
        o2.value = !o2.value;
      }
      return (e3, t3) => (M(), S(P, null, [
        a(m(ee2), null, {
          default: I(() => [
            H(e3.$slots, `toggle`, {
              open: o2.value,
              toggle: re2,
              ui: F2.value
            }, () => [
              m(r2).toggle ? (M(), R(_t, E({
                key: 0
              }, typeof m(r2).toggle == `object` ? m(r2).toggle : {}, {
                side: m(r2).toggleSide,
                "data-slot": `toggle`,
                class: F2.value.toggle({
                  class: m(r2).ui?.toggle,
                  toggleSide: m(r2).toggleSide
                })
              }), null, 16, [
                `side`,
                `class`
              ])) : U(``, true)
            ])
          ]),
          _: 3
        }),
        a(m(te2), null, {
          default: I(() => [
            H(e3.$slots, `resize-handle`, {
              onMouseDown: m(D2),
              onTouchStart: m(k2),
              onDoubleClick: m(A2),
              ui: F2.value
            }, () => [
              m(r2).resizable ? (M(), R(pt, {
                key: 0,
                "aria-controls": _2,
                "data-slot": `handle`,
                class: b(F2.value.handle({
                  class: m(r2).ui?.handle
                })),
                onMousedown: m(D2),
                onTouchstart: m(k2),
                onDblclick: m(A2)
              }, null, 8, [
                `class`,
                `onMousedown`,
                `onTouchstart`,
                `onDblclick`
              ])) : U(``, true)
            ])
          ]),
          _: 3
        }),
        m(r2).side === `right` ? (M(), R(m(N2), {
          key: 0
        })) : U(``, true),
        x(`div`, E({
          id: _2,
          ref_key: `el`,
          ref: v2,
          "data-slot": `root`
        }, e3.$attrs, {
          "data-collapsed": m(w2),
          "data-dragging": m(T2),
          class: F2.value.root({
            class: [
              m(r2).ui?.root,
              m(r2).class
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
              class: m(r2).ui?.header
            }))
          }, [
            H(e3.$slots, `header`, {
              collapsed: m(w2),
              collapse: m(C2)
            })
          ], 2)) : U(``, true),
          x(`div`, {
            "data-slot": `body`,
            class: b(F2.value.body({
              class: m(r2).ui?.body
            }))
          }, [
            H(e3.$slots, `default`, {
              collapsed: m(w2),
              collapse: m(C2)
            })
          ], 2),
          n2.footer ? (M(), S(`div`, {
            key: 1,
            "data-slot": `footer`,
            class: b(F2.value.footer({
              class: m(r2).ui?.footer
            }))
          }, [
            H(e3.$slots, `footer`, {
              collapsed: m(w2),
              collapse: m(C2)
            })
          ], 2)) : U(``, true)
        ], 16, Mi),
        m(r2).side === `left` ? (M(), R(m(N2), {
          key: 1
        })) : U(``, true),
        a(m(ne2), E({
          open: o2.value,
          "onUpdate:open": t3[0] || (t3[0] = (e4) => o2.value = e4),
          title: m(d2)(`dashboardSidebar.title`),
          description: m(d2)(`dashboardSidebar.description`)
        }, L2.value, {
          ui: {
            overlay: F2.value.overlay({
              class: m(r2).ui?.overlay
            }),
            content: F2.value.content({
              class: m(r2).ui?.content
            })
          }
        }), {
          content: I((t4) => [
            H(e3.$slots, `content`, i(W(t4)), () => [
              n2.header || m(r2).mode !== `drawer` ? (M(), S(`div`, {
                key: 0,
                "data-slot": `header`,
                class: b(F2.value.header({
                  class: m(r2).ui?.header,
                  menu: true
                }))
              }, [
                m(r2).mode !== `drawer` && m(r2).toggleSide === `left` ? (M(), R(m(j2), {
                  key: 0
                })) : U(``, true),
                H(e3.$slots, `header`, {
                  collapsed: false,
                  collapse: () => {
                  }
                }),
                m(r2).mode !== `drawer` && m(r2).toggleSide === `right` ? (M(), R(m(j2), {
                  key: 1
                })) : U(``, true)
              ], 2)) : U(``, true),
              x(`div`, {
                "data-slot": `body`,
                class: b(F2.value.body({
                  class: m(r2).ui?.body,
                  menu: true
                }))
              }, [
                H(e3.$slots, `default`, {
                  collapsed: false,
                  collapse: () => {
                  }
                })
              ], 2),
              n2.footer ? (M(), S(`div`, {
                key: 1,
                "data-slot": `footer`,
                class: b(F2.value.footer({
                  class: m(r2).ui?.footer,
                  menu: true
                }))
              }, [
                H(e3.$slots, `footer`, {
                  collapsed: false,
                  collapse: () => {
                  }
                })
              ], 2)) : U(``, true)
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
  }), Pi = j({
    __name: `UserMenu`,
    props: {
      collapsed: {
        type: Boolean
      }
    },
    setup(e2) {
      let t2 = ot(), n2 = q(), r2 = z({
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
        let i3 = Le, s2 = Jt;
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
  }), Fi = {
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
  }, Ii = Object.assign({
    inheritAttrs: false
  }, {
    __name: `DashboardSearchButton`,
    props: {
      icon: {
        type: [
          String,
          Boolean
        ],
        required: false,
        skipCheck: true
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
      let t2 = e2, n2 = p(), r2 = Y(`dashboardSearchButton`, t2), [o2, s2] = ct(), c2 = () => De(n2, [
        `trailing`
      ]), l2 = ze($e(r2, `icon`, `label`, `variant`, `collapsed`, `tooltip`, `kbds`, `class`, `ui`)), u2 = B(() => ke(typeof r2.tooltip == `boolean` ? {} : r2.tooltip, {
        delayDuration: 0,
        content: {
          side: `right`
        }
      })), { t: d2 } = gt(), f2 = q(), { toggleSearch: h2 } = dt({
        toggleSearch: () => {
        }
      }), g2 = O(() => je({
        extend: Fi,
        ...f2.ui?.dashboardSearchButton || {}
      })({
        collapsed: r2.collapsed
      }));
      return (e3, t3) => (M(), S(P, null, [
        a(m(o2), null, {
          default: I(() => [
            a(Le, E({
              icon: m(r2).icon === false ? void 0 : m(r2).icon ?? m(f2).ui.icons.search,
              label: m(r2).label || m(d2)(`dashboardSearchButton.label`),
              variant: m(r2).variant || (m(r2).collapsed ? `ghost` : `outline`)
            }, {
              ...m(l2),
              ...m(r2).collapsed ? {
                square: true,
                "aria-label": m(r2).label || m(d2)(`dashboardSearchButton.label`)
              } : {},
              ...e3.$attrs
            }, {
              class: g2.value.base({
                class: [
                  m(r2).ui?.base,
                  m(r2).class
                ]
              }),
              ui: m(Ve)(g2.value, m(r2).ui),
              onClick: m(h2)
            }), oe({
              trailing: I(({ ui: t4 }) => [
                x(`span`, {
                  "data-slot": `trailing`,
                  class: b(g2.value.trailing({
                    class: m(r2).ui?.trailing
                  }))
                }, [
                  H(e3.$slots, `trailing`, {
                    ui: t4
                  }, () => [
                    m(r2).kbds?.length ? (M(true), S(P, {
                      key: 0
                    }, C(m(r2).kbds, (e4, t5) => (M(), R(ye, E({
                      key: t5,
                      variant: `subtle`
                    }, {
                      ref_for: true
                    }, typeof e4 == `string` ? {
                      value: e4
                    } : e4), null, 16))), 128)) : U(``, true)
                  ])
                ], 2)
              ]),
              _: 2
            }, [
              C(c2(), (t4, n3) => ({
                name: n3,
                fn: I((t5) => [
                  H(e3.$slots, n3, i(W(t5)))
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
        m(r2).collapsed && m(r2).tooltip ? (M(), R(xe, E({
          key: 0,
          text: m(r2).label || m(d2)(`dashboardSearchButton.label`)
        }, u2.value), {
          default: I(() => [
            a(m(s2))
          ]),
          _: 1
        }, 16, [
          `text`
        ])) : (M(), R(m(s2), {
          key: 1
        }))
      ], 64));
    }
  }), Li = `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20512%20512'%20style='enable-background:new%200%200%20512%20512;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20fill='currentColor'%20d='M176,384H16c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h160c8.832,0,16,7.2,16,16s-7.168,16-16,16%20c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c26.464,0,48-21.536,48-48S202.464,384,176,384z'%20/%3e%3c/g%3e%3cg%3e%3cpath%20d='M240,256c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c8.832,0,16,7.2,16,16s-7.168,16-16,16H16%20c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h224c26.464,0,48-21.536,48-48S266.464,256,240,256z'%20/%3e%3c/g%3e%3cg%3e%3cpath%20d='M288,32C164.288,32,64,132.288,64,256c0,10.88,1.056,21.536,2.56,32h128.192c-1.792-4.992-2.752-10.4-2.752-16%20c0-26.464,21.536-48,48-48c44.096,0,80,35.904,80,80c0,44.128-35.904,80-80,80h-0.416C249.76,397.408,256,413.92,256,432%20c0,16.032-4.864,30.944-13.024,43.456c14.56,2.976,29.6,4.544,45.024,4.544c123.712,0,224-100.288,224-224S411.712,32,288,32z'%20/%3e%3c/g%3e%3cstyle%3e%20path%20{%20fill:%20%23000%20}%20@media%20(prefers-color-scheme:dark)%20{%20path%20{%20fill:%20%23fff%20}%20}%20%3c/style%3e%3c/svg%3e`, Ri = j({
    __name: `ProjectsMenu`,
    props: {
      collapsed: {
        type: Boolean
      }
    },
    setup(e2) {
      let t2 = Xt(), n2 = z(z([
        {
          label: `WindPress`,
          avatar: {
            src: Li,
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
            label: Number(t2.virtualOptions(`general.tailwindcss.version`, 4).value) === 4 ? `v${Zt}` : `v${Qt}`,
            icon: `devicon:tailwindcss`
          },
          {
            label: `v${window.windpress._version}`,
            avatar: {
              src: Li,
              alt: `WindPress`
            }
          }
        ]
      ]);
      return (t3, i2) => {
        let o2 = Le, s2 = Jt;
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
  function zi(e2, t2, n2) {
    let r2 = () => new $t(s(t2) ?? [], s(n2)?.fuseOptions), i2 = se(r2());
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
  var Bi = {
    "&": `&amp;`,
    "<": `&lt;`,
    ">": `&gt;`,
    '"': `&quot;`,
    "'": `&#39;`
  };
  function Vi(e2) {
    return e2.replace(/[&<>"']/g, (e3) => Bi[e3]);
  }
  function Hi(e2) {
    return /&(?:amp|lt|gt|quot|#39);/.test(e2);
  }
  function Ui(e2) {
    return Hi(e2) ? e2 : Vi(e2);
  }
  function Wi(e2, t2) {
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
  function Gi(e2, t2, n2, r2, i2) {
    let a2 = i2 && t2.match(/[\p{L}\p{M}\p{N}_]+/gu) || [], o2 = a2.length > 0 ? Math.min(...a2.map((e3) => e3.length)) : t2.length;
    function s2(e3, t3 = []) {
      e3 || (e3 = ``);
      let n3 = ``, r3 = 0;
      t3.forEach((t4) => {
        if (t4.length === 2 && t4[0] === t4[1]) return;
        let i4 = t4[1] + 1, a3 = i4 - t4[0] >= o2;
        n3 += [
          Ui(e3.substring(r3, t4[0])),
          a3 && `<mark>`,
          Ui(e3.substring(t4[0], i4)),
          a3 && `</mark>`
        ].filter(Boolean).join(``), r3 = i4;
      }), n3 += Ui(e3.substring(r3));
      let i3 = n3.indexOf(`<mark>`);
      return i3 !== -1 && (n3 = Wi(n3, n3.length - i3)), n3;
    }
    if (e2.matches?.length) {
      for (let t3 of e2.matches) if (!(n2 && t3.key !== n2) && !r2?.includes(t3.key)) return s2(t3.value, t3.indices);
    }
  }
  var Ki = {
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
      itemLabelBase: `text-highlighted [&>mark]:text-primary [&>mark]:bg-primary/15`,
      itemLabelPrefix: `text-default`,
      itemLabelSuffix: `text-dimmed [&>mark]:text-primary [&>mark]:bg-primary/15`,
      itemDescription: `truncate text-muted [&>mark]:text-primary [&>mark]:bg-primary/15`
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
  }, qi = [
    `innerHTML`
  ], Ji = [
    `innerHTML`
  ], Yi = [
    `innerHTML`
  ], Xi = Object.assign({
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
        type: [
          String,
          Boolean
        ],
        required: false,
        skipCheck: true
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
      searchDelay: {
        type: Number,
        required: false,
        default: 0
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
      let n2 = e2, r2 = t2, i2 = p(), s2 = Y(`commandPalette`, n2), l2 = c(e2, `searchTerm`, {
        type: String,
        default: ``
      }), { t: d2 } = gt(), f2 = q(), h2 = ze(tt(s2, `as`, `disabled`, `multiple`, `modelValue`, `defaultValue`, `highlightOnHover`, `by`), r2), _2 = B(() => s2.virtualize ? ke(typeof s2.virtualize == `boolean` ? {} : s2.virtualize, {
        estimateSize: en(ie2.value, `md`, s2.descriptionKey, !!i2[`item-description`])
      }) : false), [v2, y2] = ct({
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
      }), w2 = O(() => je({
        extend: Ki,
        ...f2.ui?.commandPalette || {}
      })({
        size: s2.size,
        virtualize: !!s2.virtualize
      })), T2 = O(() => ke({}, s2.fuse, {
        fuseOptions: {
          ignoreLocation: true,
          threshold: 0.1,
          keys: [
            s2.labelKey,
            s2.descriptionKey,
            `suffix`
          ]
        },
        resultLimit: 12,
        matchAllWhenSearchEmpty: true
      })), D2 = z([]), k2 = O(() => D2.value[D2.value.length - 1]?.placeholder || s2.placeholder || d2(`commandPalette.placeholder`)), A2 = O(() => D2.value?.length ? [
        D2.value[D2.value.length - 1]
      ] : s2.groups), ee2 = O(() => A2.value?.filter((e3) => e3.id ? !e3.ignoreFilter : (console.warn("[@nuxt/ui] CommandPalette group is missing an `id` property"), false))?.flatMap((e3) => e3.items?.map((t3) => ({
        ...t3,
        group: e3.id
      })) || []) || []), j2 = et(l2, () => s2.searchDelay), { results: te2 } = zi(j2, ee2, T2), N2 = Ye(te2, 16, true);
      function F2(e3, t3) {
        let n3 = t3;
        return e3?.postFilter && typeof e3.postFilter == `function` && (n3 = e3.postFilter(j2.value, n3)), {
          ...e3,
          items: n3.slice(0, T2.value.resultLimit).map((e4) => ({
            ...e4,
            labelHtml: e4.labelHtml ?? Gi(e4, j2.value, s2.labelKey, void 0, T2.value.fuseOptions?.useTokenSearch),
            suffixHtml: e4.suffixHtml ?? Gi(e4, j2.value, `suffix`, [
              s2.labelKey
            ], T2.value.fuseOptions?.useTokenSearch),
            descriptionHtml: e4.descriptionHtml ?? Gi(e4, j2.value, s2.descriptionKey, [
              s2.labelKey,
              `suffix`
            ], T2.value.fuseOptions?.useTokenSearch)
          }))
        };
      }
      let ne2 = O(() => {
        let e3 = A2.value, t3 = N2.value.reduce((e4, t4) => {
          var _a;
          let { item: n4, matches: r3 } = t4;
          return n4.group ? (e4[_a = n4.group] || (e4[_a] = []), e4[n4.group]?.push({
            ...n4,
            matches: r3
          }), e4) : e4;
        }, {});
        if (s2.preserveGroupOrder) {
          let n4 = [];
          for (let r3 of e3 || []) {
            if (!r3.items?.length) continue;
            let e4 = r3.ignoreFilter ? r3.items : t3[r3.id];
            if (!e4?.length) continue;
            let i3 = F2(r3, e4);
            i3.items?.length && n4.push(i3);
          }
          return n4;
        }
        let n3 = [
          ...Object.entries(t3).map(([t4, n4]) => {
            let r3 = e3?.find((e4) => e4.id === t4);
            if (!r3) return;
            let i3 = F2(r3, n4);
            return i3.items?.length ? i3 : void 0;
          }).filter((e4) => !!e4)
        ];
        for (let t4 of e3 || []) {
          if (!t4.ignoreFilter || !t4.items?.length) continue;
          let r3 = F2(t4, t4.items);
          if (!r3.items?.length) continue;
          let i3 = e3.indexOf(t4), a2 = /* @__PURE__ */ new Set();
          for (let t5 = 0; t5 < i3; t5++) a2.add(e3[t5].id);
          let o2 = -1;
          for (let e4 = 0; e4 < n3.length; e4++) a2.has(n3[e4].id) && (o2 = e4);
          n3.splice(o2 + 1, 0, r3);
        }
        return n3;
      }), ie2 = O(() => ne2.value.flatMap((e3) => e3.items || [])), ae2 = g(`rootRef`);
      u(ne2, () => {
        re(() => {
          let e3 = ae2.value;
          e3?.$el?.contains(document.activeElement) ? e3?.highlightFirstItem() : e3?.highlightSelected(void 0, false);
        });
      });
      function V2(e3) {
        e3.children?.length && (D2.value.push({
          id: `history-${D2.value.length}`,
          label: e3.label,
          slot: e3.slot,
          placeholder: e3.placeholder,
          items: e3.children
        }), l2.value = ``, ae2.value?.highlightFirstItem());
      }
      function se2() {
        D2.value.length && (D2.value.pop(), l2.value = ``, ae2.value?.highlightFirstItem());
      }
      function W2() {
        l2.value || se2();
      }
      function le2(e3, t3) {
        t3.children?.length ? (e3.preventDefault(), V2(t3)) : t3.onSelect?.(e3);
      }
      return (e3, t3) => (M(), S(P, null, [
        a(m(v2), null, {
          default: I(({ item: t4, index: n3, group: r3 }) => [
            a(Fe, E(m(Me)(t4), {
              custom: ``
            }), {
              default: I(({ active: c2, ...l3 }) => [
                a(m(At), {
                  value: m(s2).valueKey ? m(J)(t4, m(s2).valueKey) : m(De)(t4, [
                    `matches`,
                    `group`,
                    `onSelect`,
                    `labelHtml`,
                    `suffixHtml`,
                    `descriptionHtml`,
                    `children`
                  ]),
                  disabled: t4.disabled,
                  "as-child": ``,
                  onSelect: (e4) => le2(e4, t4)
                }, {
                  default: I(() => [
                    a(Ie, E(l3, {
                      "data-slot": `item`,
                      class: w2.value.item({
                        class: [
                          m(s2).ui?.item,
                          t4.ui?.item,
                          t4.class
                        ],
                        active: c2 || t4.active
                      })
                    }), {
                      default: I(() => [
                        H(e3.$slots, t4.slot || r3?.slot || `item`, {
                          item: t4,
                          index: n3,
                          ui: w2.value
                        }, () => [
                          H(e3.$slots, t4.slot ? `${t4.slot}-leading` : r3?.slot ? `${r3.slot}-leading` : `item-leading`, {
                            item: t4,
                            index: n3,
                            ui: w2.value
                          }, () => [
                            t4.loading ? (M(), R(Be, {
                              key: 0,
                              name: m(s2).loadingIcon || m(f2).ui.icons.loading,
                              "data-slot": `itemLeadingIcon`,
                              class: b(w2.value.itemLeadingIcon({
                                class: [
                                  m(s2).ui?.itemLeadingIcon,
                                  t4.ui?.itemLeadingIcon
                                ],
                                loading: true
                              }))
                            }, null, 8, [
                              `name`,
                              `class`
                            ])) : t4.icon ? (M(), R(Be, {
                              key: 1,
                              name: t4.icon,
                              "data-slot": `itemLeadingIcon`,
                              class: b(w2.value.itemLeadingIcon({
                                class: [
                                  m(s2).ui?.itemLeadingIcon,
                                  t4.ui?.itemLeadingIcon
                                ],
                                active: c2 || t4.active
                              }))
                            }, null, 8, [
                              `name`,
                              `class`
                            ])) : t4.avatar ? (M(), R(Ae, E({
                              key: 2,
                              size: t4.ui?.itemLeadingAvatarSize || m(s2).ui?.itemLeadingAvatarSize || w2.value.itemLeadingAvatarSize()
                            }, t4.avatar, {
                              "data-slot": `itemLeadingAvatar`,
                              class: w2.value.itemLeadingAvatar({
                                class: [
                                  m(s2).ui?.itemLeadingAvatar,
                                  t4.ui?.itemLeadingAvatar
                                ],
                                active: c2 || t4.active
                              })
                            }), null, 16, [
                              `size`,
                              `class`
                            ])) : t4.chip ? (M(), R(Re, E({
                              key: 3,
                              size: t4.ui?.itemLeadingChipSize || m(s2).ui?.itemLeadingChipSize || w2.value.itemLeadingChipSize(),
                              inset: ``,
                              standalone: ``
                            }, t4.chip, {
                              "data-slot": `itemLeadingChip`,
                              class: w2.value.itemLeadingChip({
                                class: [
                                  m(s2).ui?.itemLeadingChip,
                                  t4.ui?.itemLeadingChip
                                ],
                                active: c2 || t4.active
                              })
                            }), null, 16, [
                              `size`,
                              `class`
                            ])) : U(``, true)
                          ]),
                          t4.prefix || t4.labelHtml || m(J)(t4, m(s2).labelKey) || t4.suffixHtml || t4.suffix || i2[t4.slot ? `${t4.slot}-label` : r3?.slot ? `${r3.slot}-label` : `item-label`] || m(J)(t4, m(s2).descriptionKey) || i2[t4.slot ? `${t4.slot}-description` : r3?.slot ? `${r3.slot}-description` : `item-description`] ? (M(), S(`span`, {
                            key: 0,
                            "data-slot": `itemWrapper`,
                            class: b(w2.value.itemWrapper({
                              class: [
                                m(s2).ui?.itemWrapper,
                                t4.ui?.itemWrapper
                              ]
                            }))
                          }, [
                            x(`span`, {
                              "data-slot": `itemLabel`,
                              class: b(w2.value.itemLabel({
                                class: [
                                  m(s2).ui?.itemLabel,
                                  t4.ui?.itemLabel
                                ],
                                active: c2 || t4.active
                              }))
                            }, [
                              H(e3.$slots, t4.slot ? `${t4.slot}-label` : r3?.slot ? `${r3.slot}-label` : `item-label`, {
                                item: t4,
                                index: n3,
                                ui: w2.value
                              }, () => [
                                t4.prefix ? (M(), S(`span`, {
                                  key: 0,
                                  "data-slot": `itemLabelPrefix`,
                                  class: b(w2.value.itemLabelPrefix({
                                    class: [
                                      m(s2).ui?.itemLabelPrefix,
                                      t4.ui?.itemLabelPrefix
                                    ]
                                  }))
                                }, L(t4.prefix), 3)) : U(``, true),
                                t4.labelHtml ? (M(), S(`span`, {
                                  key: 1,
                                  "data-slot": `itemLabelBase`,
                                  class: b(w2.value.itemLabelBase({
                                    class: [
                                      m(s2).ui?.itemLabelBase,
                                      t4.ui?.itemLabelBase
                                    ],
                                    active: c2 || t4.active
                                  })),
                                  innerHTML: t4.labelHtml
                                }, null, 10, qi)) : (M(), S(`span`, {
                                  key: 2,
                                  "data-slot": `itemLabelBase`,
                                  class: b(w2.value.itemLabelBase({
                                    class: [
                                      m(s2).ui?.itemLabelBase,
                                      t4.ui?.itemLabelBase
                                    ],
                                    active: c2 || t4.active
                                  }))
                                }, L(m(J)(t4, m(s2).labelKey)), 3)),
                                t4.suffixHtml ? (M(), S(`span`, {
                                  key: 3,
                                  "data-slot": `itemLabelSuffix`,
                                  class: b(w2.value.itemLabelSuffix({
                                    class: [
                                      m(s2).ui?.itemLabelSuffix,
                                      t4.ui?.itemLabelSuffix
                                    ],
                                    active: c2 || t4.active
                                  })),
                                  innerHTML: t4.suffixHtml
                                }, null, 10, Ji)) : t4.suffix ? (M(), S(`span`, {
                                  key: 4,
                                  "data-slot": `itemLabelSuffix`,
                                  class: b(w2.value.itemLabelSuffix({
                                    class: [
                                      m(s2).ui?.itemLabelSuffix,
                                      t4.ui?.itemLabelSuffix
                                    ],
                                    active: c2 || t4.active
                                  }))
                                }, L(t4.suffix), 3)) : U(``, true)
                              ])
                            ], 2),
                            t4.descriptionHtml ? (M(), S(`span`, {
                              key: 0,
                              "data-slot": `itemDescription`,
                              class: b(w2.value.itemDescription({
                                class: [
                                  m(s2).ui?.itemDescription,
                                  t4.ui?.itemDescription
                                ]
                              })),
                              innerHTML: t4.descriptionHtml
                            }, null, 10, Yi)) : m(J)(t4, m(s2).descriptionKey) || i2[t4.slot ? `${t4.slot}-description` : r3?.slot ? `${r3.slot}-description` : `item-description`] ? (M(), S(`span`, {
                              key: 1,
                              "data-slot": `itemDescription`,
                              class: b(w2.value.itemDescription({
                                class: [
                                  m(s2).ui?.itemDescription,
                                  t4.ui?.itemDescription
                                ]
                              }))
                            }, [
                              H(e3.$slots, t4.slot ? `${t4.slot}-description` : r3?.slot ? `${r3.slot}-description` : `item-description`, {
                                item: t4,
                                index: n3,
                                ui: w2.value
                              }, () => [
                                o(L(m(J)(t4, m(s2).descriptionKey)), 1)
                              ])
                            ], 2)) : U(``, true)
                          ], 2)) : U(``, true),
                          x(`span`, {
                            "data-slot": `itemTrailing`,
                            class: b(w2.value.itemTrailing({
                              class: [
                                m(s2).ui?.itemTrailing,
                                t4.ui?.itemTrailing
                              ]
                            }))
                          }, [
                            H(e3.$slots, t4.slot ? `${t4.slot}-trailing` : r3?.slot ? `${r3.slot}-trailing` : `item-trailing`, {
                              item: t4,
                              index: n3,
                              ui: w2.value
                            }, () => [
                              t4.children && t4.children.length > 0 ? (M(), R(Be, {
                                key: 0,
                                name: m(s2).childrenIcon || m(f2).ui.icons.chevronRight,
                                "data-slot": `itemTrailingIcon`,
                                class: b(w2.value.itemTrailingIcon({
                                  class: [
                                    m(s2).ui?.itemTrailingIcon,
                                    t4.ui?.itemTrailingIcon
                                  ]
                                }))
                              }, null, 8, [
                                `name`,
                                `class`
                              ])) : t4.kbds?.length ? (M(), S(`span`, {
                                key: 1,
                                "data-slot": `itemTrailingKbds`,
                                class: b(w2.value.itemTrailingKbds({
                                  class: [
                                    m(s2).ui?.itemTrailingKbds,
                                    t4.ui?.itemTrailingKbds
                                  ]
                                }))
                              }, [
                                (M(true), S(P, null, C(t4.kbds, (e4, n4) => (M(), R(ye, E({
                                  key: n4,
                                  size: t4.ui?.itemTrailingKbdsSize || m(s2).ui?.itemTrailingKbdsSize || w2.value.itemTrailingKbdsSize()
                                }, {
                                  ref_for: true
                                }, typeof e4 == `string` ? {
                                  value: e4
                                } : e4), null, 16, [
                                  `size`
                                ]))), 128))
                              ], 2)) : r3?.highlightedIcon ? (M(), R(Be, {
                                key: 2,
                                name: r3.highlightedIcon,
                                "data-slot": `itemTrailingHighlightedIcon`,
                                class: b(w2.value.itemTrailingHighlightedIcon({
                                  class: [
                                    m(s2).ui?.itemTrailingHighlightedIcon,
                                    t4.ui?.itemTrailingHighlightedIcon
                                  ]
                                }))
                              }, null, 8, [
                                `name`,
                                `class`
                              ])) : U(``, true)
                            ]),
                            t4.children?.length ? U(``, true) : (M(), R(m(Dt), {
                              key: 0,
                              "as-child": ``
                            }, {
                              default: I(() => [
                                a(Be, {
                                  name: m(s2).selectedIcon || m(f2).ui.icons.check,
                                  "data-slot": `itemTrailingIcon`,
                                  class: b(w2.value.itemTrailingIcon({
                                    class: [
                                      m(s2).ui?.itemTrailingIcon,
                                      t4.ui?.itemTrailingIcon
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
        a(m(xt), E({
          ref_key: `rootRef`,
          ref: ae2,
          "data-slot": `root`
        }, {
          ...m(h2),
          ...e3.$attrs
        }, {
          "selection-behavior": m(s2).selectionBehavior,
          class: w2.value.root({
            class: [
              m(s2).ui?.root,
              m(s2).class
            ]
          })
        }), {
          default: I(() => [
            m(s2).input ? (M(), R(m(jt), {
              key: 0,
              modelValue: l2.value,
              "onUpdate:modelValue": t3[1] || (t3[1] = (e4) => l2.value = e4),
              "as-child": ``
            }, {
              default: I(() => [
                a(Yt, E({
                  variant: `none`,
                  size: m(s2).size,
                  placeholder: k2.value,
                  autofocus: m(s2).autofocus,
                  loading: m(s2).loading,
                  "loading-icon": m(s2).loadingIcon,
                  "trailing-icon": m(s2).trailingIcon,
                  icon: m(s2).icon === false ? void 0 : m(s2).icon ?? m(f2).ui.icons.search
                }, typeof m(s2).input == `object` ? m(s2).input : {}, {
                  "data-slot": `input`,
                  class: w2.value.input({
                    class: m(s2).ui?.input
                  }),
                  onKeydown: ce(W2, [
                    `backspace`
                  ])
                }), oe({
                  _: 2
                }, [
                  D2.value?.length && (m(s2).back || i2.back) ? {
                    name: `leading`,
                    fn: I(() => [
                      H(e3.$slots, `back`, {
                        ui: w2.value
                      }, () => [
                        a(Le, E({
                          size: m(s2).size,
                          icon: m(s2).backIcon || m(f2).ui.icons.arrowLeft,
                          color: `neutral`,
                          variant: `link`,
                          "aria-label": m(d2)(`commandPalette.back`)
                        }, typeof m(s2).back == `object` ? m(s2).back : {}, {
                          "data-slot": `back`,
                          class: w2.value.back({
                            class: m(s2).ui?.back
                          }),
                          onClick: se2
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
                  m(s2).close || i2.close ? {
                    name: `trailing`,
                    fn: I(() => [
                      H(e3.$slots, `close`, {
                        ui: w2.value
                      }, () => [
                        m(s2).close ? (M(), R(Le, E({
                          key: 0,
                          size: m(s2).size,
                          icon: m(s2).closeIcon || m(f2).ui.icons.close,
                          color: `neutral`,
                          variant: `ghost`,
                          "aria-label": m(d2)(`commandPalette.close`)
                        }, typeof m(s2).close == `object` ? m(s2).close : {}, {
                          "data-slot": `close`,
                          class: w2.value.close({
                            class: m(s2).ui?.close
                          }),
                          onClick: t3[0] || (t3[0] = (e4) => r2(`update:open`, false))
                        }), null, 16, [
                          `size`,
                          `icon`,
                          `aria-label`,
                          `class`
                        ])) : U(``, true)
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
            ])) : U(``, true),
            a(m(Tt), {
              "data-slot": `content`,
              class: b(w2.value.content({
                class: m(s2).ui?.content
              }))
            }, {
              default: I(() => [
                ne2.value?.length ? (M(), S(`div`, {
                  key: 0,
                  role: `presentation`,
                  "data-slot": `viewport`,
                  class: b(w2.value.viewport({
                    class: m(s2).ui?.viewport
                  }))
                }, [
                  m(s2).virtualize ? (M(), R(m(kt), E({
                    key: 0,
                    options: ie2.value,
                    "text-content": (e4) => m(J)(e4, m(s2).labelKey)
                  }, _2.value), {
                    default: I(({ option: e4, virtualItem: t4 }) => [
                      a(m(y2), {
                        item: e4,
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
                  }, C(ne2.value, (t4) => (M(), R(m(Mt), {
                    key: `group-${t4.id}`,
                    "data-slot": `group`,
                    class: b(w2.value.group({
                      class: m(s2).ui?.group
                    }))
                  }, {
                    default: I(() => [
                      m(J)(t4, m(s2).labelKey) || i2[t4.slot ? `${t4.slot}-group-label` : `group-label`] ? (M(), R(m(cr), {
                        key: 0,
                        "data-slot": `label`,
                        class: b(w2.value.label({
                          class: m(s2).ui?.label
                        }))
                      }, {
                        default: I(() => [
                          H(e3.$slots, t4.slot ? `${t4.slot}-group-label` : `group-label`, {
                            group: t4,
                            label: m(J)(t4, m(s2).labelKey),
                            ui: w2.value
                          }, () => [
                            o(L(m(J)(t4, m(s2).labelKey)), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, [
                        `class`
                      ])) : U(``, true),
                      (M(true), S(P, null, C(t4.items, (e4, n3) => (M(), R(m(y2), {
                        key: `group-${t4.id}-${n3}`,
                        item: e4,
                        index: n3,
                        group: t4
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
                  class: b(w2.value.empty({
                    class: m(s2).ui?.empty
                  }))
                }, [
                  H(e3.$slots, `empty`, {
                    searchTerm: l2.value
                  }, () => [
                    o(L(l2.value ? m(d2)(`commandPalette.noMatch`, {
                      searchTerm: l2.value
                    }) : m(d2)(`commandPalette.noData`)), 1)
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
              class: b(w2.value.footer({
                class: m(s2).ui?.footer
              }))
            }, [
              H(e3.$slots, `footer`, {
                ui: w2.value
              })
            ], 2)) : U(``, true)
          ]),
          _: 3
        }, 16, [
          `selection-behavior`,
          `class`
        ])
      ], 64));
    }
  }), Zi = {
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
  }, Qi = {
    __name: `DashboardSearch`,
    props: r({
      size: {
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
      input: {
        type: [
          Boolean,
          Object
        ],
        required: false
      },
      shortcut: {
        type: String,
        required: false,
        default: `meta_k`
      },
      fuse: {
        type: Object,
        required: false
      },
      searchDelay: {
        type: Number,
        required: false,
        default: 100
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
      },
      unmountOnHide: {
        type: Boolean,
        required: false
      },
      icon: {
        type: [
          String,
          Boolean
        ],
        required: false,
        skipCheck: true
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
      closeIcon: {
        type: null,
        required: false
      },
      back: {
        type: [
          Boolean,
          Object
        ],
        required: false
      },
      backIcon: {
        type: null,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      },
      highlightOnHover: {
        type: Boolean,
        required: false
      },
      labelKey: {
        type: null,
        required: false
      },
      descriptionKey: {
        type: null,
        required: false
      },
      preserveGroupOrder: {
        type: Boolean,
        required: false
      },
      virtualize: {
        type: [
          Boolean,
          Object
        ],
        required: false
      },
      groups: {
        type: Array,
        required: false
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
      let n2 = e2, r2 = p(), o2 = Y(`dashboardSearch`, n2), s2 = c(e2, `open`, {
        type: Boolean,
        default: false
      }), l2 = c(e2, `searchTerm`, {
        type: String,
        default: ``
      });
      He(`dashboard:search:toggle`, () => {
        s2.value = !s2.value;
      });
      let { t: u2 } = gt(), d2 = We(), f2 = q(), h2 = ze(tt(o2, `size`, `icon`, `trailingIcon`, `selectedIcon`, `childrenIcon`, `placeholder`, `autofocus`, `loading`, `loadingIcon`, `close`, `closeIcon`, `back`, `backIcon`, `disabled`, `highlightOnHover`, `labelKey`, `descriptionKey`, `preserveGroupOrder`, `virtualize`, `searchDelay`)), _2 = ze(tt(o2, `overlay`, `transition`, `content`, `dismissible`, `fullscreen`, `modal`, `portal`, `unmountOnHide`)), v2 = O(() => o2.input !== false && ke(typeof o2.input == `object` ? o2.input : {}, {
        fixed: true
      })), y2 = () => De(r2, [
        `content`
      ]), b2 = O(() => ke({}, o2.fuse, {
        fuseOptions: {
          useTokenSearch: true
        }
      })), x2 = O(() => je({
        extend: Zi,
        ...f2.ui?.dashboardSearch || {}
      })({
        size: o2.size,
        fullscreen: o2.fullscreen
      })), S2 = O(() => {
        let e3 = [];
        return e3.push(...o2.groups || []), o2.colorMode && !d2?.forced && e3.push({
          id: `theme`,
          label: u2(`dashboardSearch.theme`),
          items: [
            {
              label: u2(`colorMode.system`),
              icon: f2.ui.icons.system,
              active: d2.preference === `system`,
              onSelect: () => {
                d2.preference = `system`;
              }
            },
            {
              label: u2(`colorMode.light`),
              icon: f2.ui.icons.light,
              active: d2.preference === `light`,
              onSelect: () => {
                d2.preference = `light`;
              }
            },
            {
              label: u2(`colorMode.dark`),
              icon: f2.ui.icons.dark,
              active: d2.preference === `dark`,
              onSelect: () => {
                d2.preference = `dark`;
              }
            }
          ]
        }), e3;
      }), w2 = g(`commandPaletteRef`);
      function T2(e3) {
        e3.disabled || (s2.value = false, l2.value = ``);
      }
      return Qn({
        [o2.shortcut]: {
          usingInput: true,
          handler: () => s2.value = !s2.value
        }
      }), t2({
        commandPaletteRef: w2
      }), (e3, t3) => (M(), R(qt, E({
        open: s2.value,
        "onUpdate:open": t3[2] || (t3[2] = (e4) => s2.value = e4),
        title: m(o2).title || m(u2)(`dashboardSearch.title`),
        description: m(o2).description || m(u2)(`dashboardSearch.description`)
      }, m(_2), {
        "data-slot": `modal`,
        class: x2.value.modal({
          class: [
            m(o2).ui?.modal,
            m(o2).class
          ]
        })
      }), {
        content: I((n3) => [
          H(e3.$slots, `content`, i(W(n3)), () => [
            a(Xi, E({
              ref_key: `commandPaletteRef`,
              ref: w2,
              "search-term": l2.value,
              "onUpdate:searchTerm": t3[0] || (t3[0] = (e4) => l2.value = e4)
            }, m(h2), {
              groups: S2.value,
              fuse: b2.value,
              input: v2.value,
              ui: m(Ve)(m(De)(x2.value, [
                `modal`
              ]), m(o2).ui),
              "onUpdate:modelValue": T2,
              "onUpdate:open": t3[1] || (t3[1] = (e4) => s2.value = e4)
            }), oe({
              _: 2
            }, [
              C(y2(), (t4, n4) => ({
                name: n4,
                fn: I((t5) => [
                  H(e3.$slots, n4, i(W(t5)))
                ])
              }))
            ]), 1040, [
              `search-term`,
              `groups`,
              `fuse`,
              `input`,
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
  }, $i = `data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%3e%3cpath%20d='m255.487%20348.511-38.054%2021.97-15.574%20124.592c-.536%204.286.794%208.596%203.653%2011.834s6.97%205.093%2011.289%205.093h75.578c4.32%200%208.43-1.855%2011.289-5.093s4.189-7.548%203.653-11.834l-21.591-172.724c-8.206%2010.444-18.406%2019.327-30.243%2026.162z'%3e%3c/path%3e%3cpath%20d='m270.097%20158.141v-143.082c0-5.219-2.702-10.066-7.142-12.81-4.44-2.743-9.982-2.994-14.651-.659l-27.05%2013.525c-25.759%2012.879-41.761%2038.771-41.761%2067.57v83.59c0%2016.328%205.224%2031.449%2014.064%2043.817l29.912-17.27c11.989-15.749%2028.037-27.701%2046.628-34.681z'%3e%3c/path%3e%3cpath%20d='m236.976%20268.498c-13.719-5.811-23.992-18.2-26.868-33.186l-145.939%2084.259c-4.52%202.609-7.367%207.373-7.523%2012.59-.157%205.217%202.399%2010.143%206.755%2013.018l25.238%2016.664c12.671%208.366%2027.115%2012.574%2041.598%2012.574%2012.988%200%2026.008-3.386%2037.799-10.194l72.391-41.795c14.14-8.164%2024.624-20.249%2030.914-34.088z'%3e%3c/path%3e%3cpath%20d='m417.584%20233.375-72.391-41.795c-17.475-10.09-37.835-12.769-57.325-7.547-3.598.964-7.085%202.18-10.446%203.625%2013.427%207.871%2022.47%2022.446%2022.47%2039.103%200%2013.661-6.087%2025.919-15.68%2034.232l146.636%2084.66c2.327%201.344%204.927%202.018%207.529%202.018%202.452%200%204.906-.598%207.135-1.798%204.596-2.473%207.583-7.149%207.896-12.359l1.813-30.189c1.726-28.747-12.696-55.551-37.637-69.95z'%3e%3c/path%3e%3ccircle%20cx='254.59'%20cy='226.761'%20r='15.184'%3e%3c/circle%3e%3c/g%3e%3cstyle%3e%20path%20{%20fill:%20%23000%20}%20@media%20(prefers-color-scheme:dark)%20{%20path%20{%20fill:%20%23fff%20}%20}%20%3c/style%3e%3c/svg%3e`, ea = `data:image/svg+xml,%3csvg%20width='19'%20height='16'%20viewBox='0%200%2019%2016'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.28%2015.06C2.7%2015.06%202.16%2014.92%201.66%2014.64C1.16%2014.34%200.91%2013.85%200.91%2013.17C0.91%2012.23%201.24%2011.11%201.9%209.81C2.58%208.51%203.35%207.16%204.21%205.76C6.55%201.96%208.21%200.0599992%209.19%200.0599992C9.39%200.0599992%209.59%200.139999%209.79%200.3C10.01%200.44%2010.13%200.599999%2010.15%200.779999L8.05%203.6C7.23%204.7%206.49%205.72%205.83%206.66C5.17%207.58%204.6%208.41%204.12%209.15C3.88%209.53%203.61%209.96%203.31%2010.44C3.01%2010.92%202.74%2011.42%202.5%2011.94C2.28%2012.44%202.17%2012.95%202.17%2013.47C2.17%2013.71%202.24%2013.93%202.38%2014.13C2.52%2014.31%202.77%2014.4%203.13%2014.4C3.77%2014.4%204.61%2014.06%205.65%2013.38C6.69%2012.68%207.72%2011.72%208.74%2010.5C8.84%2010.38%208.95%2010.27%209.07%2010.17C9.19%2010.07%209.29%2010.02%209.37%2010.02C9.47%2010.02%209.52%2010.08%209.52%2010.2C9.52%2010.26%209.45%2010.38%209.31%2010.56C9.19%2010.72%209.09%2010.85%209.01%2010.95L8.29%2011.76C7.89%2012.2%207.41%2012.68%206.85%2013.2C6.31%2013.72%205.73%2014.16%205.11%2014.52C4.51%2014.88%203.9%2015.06%203.28%2015.06ZM10.5749%2015.39C9.93492%2015.39%209.35492%2015.19%208.83492%2014.79C8.31492%2014.37%208.05492%2013.82%208.05492%2013.14C8.05492%2011.72%208.92492%2010.1%2010.6649%208.28C12.4449%206.44%2014.0349%205.52%2015.4349%205.52C15.9149%205.52%2016.2949%205.65%2016.5749%205.91C16.8549%206.15%2016.9949%206.45%2016.9949%206.81C16.9949%207.31%2016.8749%207.77%2016.6349%208.19C16.3549%208.71%2015.9549%208.97%2015.4349%208.97C14.9149%208.97%2014.6549%208.81%2014.6549%208.49C14.6549%208.27%2014.7849%207.94%2015.0449%207.5C15.3249%207.04%2015.4649%206.8%2015.4649%206.78C15.4649%206.74%2015.4349%206.72%2015.3749%206.72C14.8149%206.78%2014.0349%207.19%2013.0349%207.95C12.5949%208.29%2012.2049%208.61%2011.8649%208.91C11.5449%209.21%2011.2849%209.5%2011.0849%209.78L9.91492%2011.49C9.79492%2011.67%209.66492%2011.98%209.52492%2012.42C9.40492%2012.86%209.34492%2013.19%209.34492%2013.41C9.34492%2013.81%209.47492%2014.14%209.73492%2014.4C10.0149%2014.66%2010.3649%2014.79%2010.7849%2014.79C11.7849%2014.79%2013.1049%2014.14%2014.7449%2012.84C16.0649%2011.8%2017.1249%2010.75%2017.9249%209.69C18.0249%209.57%2018.1449%209.51%2018.2849%209.51C18.4249%209.51%2018.4949%209.55%2018.4949%209.63C18.4949%209.69%2018.4449%209.79%2018.3449%209.93C17.2449%2011.39%2015.9549%2012.65%2014.4749%2013.71C12.8949%2014.83%2011.5949%2015.39%2010.5749%2015.39Z'%20fill='currentColor'/%3e%3cstyle%3e%20path%20{%20fill:%20%23000%20}%20@media%20(prefers-color-scheme:dark)%20{%20path%20{%20fill:%20%23fff%20}%20}%20%3c/style%3e%3c/svg%3e`, ta = `data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='400'%20viewBox='0%200%20400%20400'%3e%3cpath%20fill='currentColor'%20fill-rule='evenodd'%20d='M%200%200%20H%20400%20V%20400%20H%200%20Z%20M%20195%2061%20L%20158%2099%20L%20400%20333%20L%20400%20259%20Z%20M%200%2075%20L%200%20149%20L%20195%20339%20L%20232%20301%20Z'%20/%3e%3cstyle%3e%20path%20{%20fill:%20%23000%20}%20@media%20(prefers-color-scheme:dark)%20{%20path%20{%20fill:%20%23fff%20}%20}%20%3c/style%3e%3c/svg%3e`, na = j({
    __name: `App`,
    setup(e2) {
      let t2 = vt(), n2 = Ut(), { generateCache: r2 } = tn(), i2 = [
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
                src: $i,
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
                src: ea,
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
                src: ta,
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
      }), Qn(Zn(o2.value)), (e3, t3) => {
        let n3 = Qi, r3 = Ri, s3 = Ii, c3 = Nt, l3 = Pi, u2 = Ni, d2 = _(`RouterView`), f2 = Jr, p2 = Kr;
        return M(), R(te, null, {
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
  }), ra = Ne({
    history: Te(`${window.windpress.site_meta.web_history}#/`),
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
        component: () => X(() => import("./File-BNzZ-h6Y.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([0]), import.meta.url)
      },
      {
        path: `/logs`,
        name: `logs`,
        component: () => X(() => import("./Log-CYcI0JQQ.js").then(async (m2) => {
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
        component: () => X(() => import("./Wizard-CwwB7lWi.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url),
        children: [
          {
            path: `screens`,
            name: `wizard.screens`,
            component: () => X(() => import("./Screens-Bbj6XcV_.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url)
          },
          {
            path: `colors`,
            name: `wizard.colors`,
            component: () => X(() => import("./Colors-By2zYgD2.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), __vite__mapDeps([1]), import.meta.url)
          },
          {
            path: `typography`,
            name: `wizard.typography`,
            component: () => X(() => import("./Typography-DZKbkCK8.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), __vite__mapDeps([2]), import.meta.url)
          },
          {
            path: `spacing`,
            name: `wizard.spacing`,
            component: () => X(() => import("./Spacing-4B5gQ187.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), __vite__mapDeps([2]), import.meta.url)
          },
          {
            path: `theme`,
            name: `wizard.theme`,
            component: () => X(() => import("./Theme-DeOWZDju.js").then(async (m2) => {
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
        component: () => X(() => import("./Settings-C-B1wvon.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url),
        children: [
          {
            path: `general`,
            name: `settings.general`,
            component: () => X(() => import("./General-C_iNV2Uh.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url)
          },
          {
            path: `performance`,
            name: `settings.performance`,
            component: () => X(() => import("./Performance-Cqm_Zi_6.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url)
          },
          {
            path: `integrations`,
            component: () => X(() => import("./Integrations-D936KnTA.js").then(async (m2) => {
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
                component: () => X(() => import("./_integration_-rkyk4NwJ.js").then(async (m2) => {
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
        component: () => X(() => import("./NotFound-D4mkERzQ.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url)
      }
    ]
  }), ia = {
    install: (e2, t2) => {
      e2.config.globalProperties.i18n = wp.i18n;
    }
  };
  async function aa() {
    await X(() => import("./monaco-editor-C-t9Ci2-.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), __vite__mapDeps([0]), import.meta.url);
    let e2 = le(na), t2 = we();
    e2.config.globalProperties.window = window, t2.use(({ store: e3 }) => {
      [
        `volume`,
        `settings`
      ].includes(e3.$id) && e3.initPull();
    }), e2.use(ra).use(or).use(t2).use(bt).use(ia), e2.mount(`#windpress-app`), nn();
  }
  aa();
});
