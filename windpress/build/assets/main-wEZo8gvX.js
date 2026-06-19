import { t as e } from "./preload-helper-CwQZjUKM.js";
import { t } from "./vfs-DGZNrgMJ.js";
import { c as n, i as r } from "./intellisense-Cuajj_d-.js";
import { __tla as __tla_0 } from "./tailwindcss-me5qj0Ys.js";
import { t as i } from "./logger-CvF98D4V.js";
import { i as a, r as o } from "./constant-DpZqgQ1m.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var s = `WindPress`, c = `windpress-`, l = 10, u = 500, d = /^(#|rgb\(|rgba\(|hsl\(|hsla\(|hwb\(|lab\(|lch\(|oklab\(|oklch\(|color\(|color-mix\()/i, f = /\.(avif|bmp|gif|jpe?g|png|svg|webp)(\?|#|$)/i, p = /^(-?\d*\.?\d+)(px|r?em|%|vw|vh|vmin|vmax|svw|svh|lvw|lvh|dvw|dvh|ch|ex|lh|rlh|cqw|cqh|cqi|cqb|cqmin|cqmax|cm|mm|q|in|pc|pt|fr|deg|grad|rad|turn|s|ms|hz|khz|dpi|dpcm|dppx)$/i, m = [], h, g, _ = false, v;
  async function y() {
    let e2 = a.contentWindow.document.querySelector(`script#windpress\\:vfs[type="text/plain"]`)?.textContent;
    return e2 ? (await r(await n({
      volume: b(t(e2))
    }))).filter(x) : [];
  }
  function b(e2) {
    return Object.fromEntries(Object.entries(e2).map(([e3, t2]) => e3.endsWith(`.css`) ? [
      e3,
      t2.replace(/--\s*\*\s*:\s*initial\s*;/g, ``)
    ] : [
      e3,
      t2
    ]));
  }
  function x(e2) {
    return typeof e2.value == `string`;
  }
  function S(e2) {
    let t2 = ``;
    e2.forEach((e3) => {
      t2 += `--${e3.key.substring(2)}: ${e3.value};
`;
    }), t2 = `@layer base { :root { ${t2} } }`;
    let n2;
    document.head.querySelector(`style#windpress-variables`) ? n2 = document.head.querySelector(`style#windpress-variables`) : (n2 = document.createElement(`style`), n2.id = `windpress-variables`, document.head.appendChild(n2)), n2 && (n2.textContent = t2);
    let r2;
    a.contentWindow.document.head.querySelector(`style#windpress-variables`) ? r2 = a.contentWindow.document.head.querySelector(`style#windpress-variables`) : (r2 = a.contentWindow.document.createElement(`style`), r2.id = `windpress-variables`, a.contentWindow.document.head.appendChild(r2)), r2 && (r2.textContent = t2);
  }
  function C(e2) {
    return e2.map((e3) => {
      let t2 = e3.key.substring(2), n2 = T(t2, e3.value);
      return {
        id: `${c}${t2.replace(/[^a-zA-Z0-9_-]/g, `-`)}`,
        type: n2,
        label: t2,
        cssVariableName: t2,
        collection: s,
        value: w(n2, e3.value)
      };
    });
  }
  function w(e2, t2) {
    return e2 === `unit` ? N(t2) ?? t2 : t2;
  }
  function T(e2, t2) {
    return E(e2, t2) ? `color` : D(e2) ? `font_family` : O(t2) ? `image_url` : k(t2) ? `url` : j(t2) ? `number` : M(t2) ? `unit` : `custom`;
  }
  function E(e2, t2) {
    return e2.startsWith(`color-`) || d.test(t2.trim()) || [
      `transparent`,
      `currentcolor`,
      `currentColor`
    ].includes(t2.trim());
  }
  function D(e2) {
    return e2.startsWith(`font-`) && !e2.startsWith(`font-weight-`);
  }
  function O(e2) {
    let t2 = A(e2);
    return /^data:image\//i.test(t2) || f.test(t2);
  }
  function k(e2) {
    return /^(url\(|https?:\/\/|\/\/|data:|blob:)/i.test(e2.trim());
  }
  function A(e2) {
    return e2.trim().replace(/^url\((.*)\)$/i, `$1`).replace(/^['"]|['"]$/g, ``);
  }
  function j(e2) {
    return /^-?\d*\.?\d+$/.test(e2.trim());
  }
  function M(e2) {
    return p.test(e2.trim());
  }
  function N(e2) {
    let t2 = e2.trim(), n2 = t2.match(p);
    return n2 ? {
      number: Number(n2[1]),
      unit: n2[2],
      style: t2
    } : null;
  }
  function P() {
    return performance.getEntriesByType(`resource`).map((e2) => e2.name).find((e2) => /\/builder\/dist\/js\/store-[^/]+\.js(?:\?|$)/.test(e2)) ?? null;
  }
  async function F() {
    return v || (v = (async () => {
      let t2 = P();
      if (!t2) return null;
      let n2 = await e(() => import(t2).then(async (m2) => {
        await m2.__tla;
        return m2;
      }), [], import.meta.url);
      return Object.values(n2).find((e2) => typeof e2 == `object` && !!e2 && typeof e2.ignore == `function`) ?? null;
    })()), v;
  }
  async function I(e2) {
    let t2 = o;
    if (!(!t2 || e2.length === 0) && !L()) {
      _ = true;
      try {
        let n2 = t2.variablesHasUnsavedChangesPresent, r2 = C(e2), i2 = t2.variables.filter((e3) => !e3.id?.startsWith(c)), a2 = [
          .../* @__PURE__ */ new Set([
            ...t2.variablesCollections,
            s
          ])
        ], o2 = () => {
          t2.setVariables([
            ...i2,
            ...r2
          ]), t2.setVariablesCollections(a2), n2 || t2.markCurrentVariablesAsUntouched();
        }, l2 = await F();
        l2 ? l2.ignore(o2) : o2();
      } finally {
        _ = false;
      }
    }
  }
  function L() {
    let e2 = o;
    if (!e2 || m.length === 0) return true;
    let t2 = e2.variables.filter((e3) => e3.id?.startsWith(c)), n2 = C(m), r2 = new Map(t2.map((e3) => [
      e3.id,
      e3
    ]));
    return t2.length === n2.length && e2.variablesCollections.includes(s) && n2.every((e3) => {
      let t3 = r2.get(e3.id);
      return t3?.type === e3.type && t3.label === e3.label && t3.cssVariableName === e3.cssVariableName && t3.collection === e3.collection && R(t3.value, e3.value);
    });
  }
  function R(e2, t2) {
    return typeof e2 == `string` || typeof t2 == `string` ? e2 === t2 : Number(e2.number) === Number(t2.number) && e2.unit === t2.unit && e2.style === t2.style;
  }
  function z() {
    g && clearTimeout(g), g = setTimeout(() => {
      _ || L() || I(m);
    }, 0);
  }
  function B() {
    let e2 = o;
    e2 && (e2.$onAction(({ name: e3, after: t2 }) => {
      e3 !== `setVariables` && e3 !== `setVariablesCollections` || t2(() => {
        z();
      });
    }), e2.$subscribe(() => {
      z();
    }));
  }
  async function V(e2 = 0) {
    let t2 = await y();
    if (t2.length === 0 && e2 < l) {
      h && clearTimeout(h), h = setTimeout(() => {
        V(e2 + 1);
      }, u);
      return;
    }
    t2.length !== 0 && (m = t2, S(t2), await I(t2));
  }
  new BroadcastChannel(`windpress`).addEventListener(`message`, async (e2) => {
    let t2 = e2.data;
    t2.source === `windpress/dashboard` && t2.target === `windpress/intellisense` && t2.task === `windpress.code-editor.saved` && setTimeout(() => {
      V();
    }, 1500), t2.source === `windpress/intellisense` && t2.task === `windpress.code-editor.saved.done` && setTimeout(() => {
      V();
    }, 1e3);
  }), B(), V(), i(`Module loaded!`, {
    module: `variables`
  });
});
