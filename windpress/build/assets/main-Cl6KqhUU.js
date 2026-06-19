import { Ht as e } from "./runtime-core.esm-bundler-Ci9kEgM7.js";
import { t } from "./index.browser-BEODCD8T.js";
import { c as n, o as r, t as i } from "./isArray-CI0_UXAa.js";
import { d as a, l as o, n as s, o as c, u as l } from "./_Uint8Array-B15EB2HR.js";
import { i as u, n as d, r as f } from "./isSymbol-B9ImcFp_.js";
import { i as p, r as m } from "./set-HZS68aKk.js";
import { a as ee, c as h, i as g, n as te, o as ne, s as _, t as v } from "./_initCloneObject-CuPjIsdx.js";
import { t as y } from "./_isIndex-BOCGn4UD.js";
import { t as b } from "./logger-CvF98D4V.js";
import { a as x, n as S } from "./constant-BTz5UqQe.js";
function C(e2, t2, r2) {
  (r2 !== void 0 && !n(e2[t2], r2) || r2 === void 0 && !(t2 in e2)) && m(e2, t2, r2);
}
function re(e2) {
  return function(t2, n2, r2) {
    for (var i2 = -1, a2 = Object(t2), o2 = r2(t2), s2 = o2.length; s2--; ) {
      var c2 = o2[e2 ? s2 : ++i2];
      if (n2(a2[c2], c2, a2) === false) break;
    }
    return t2;
  };
}
var ie = re();
function ae(e2) {
  return d(e2) && s(e2);
}
var w = `[object Object]`, oe = Function.prototype, se = Object.prototype, T = oe.toString, ce = se.hasOwnProperty, le = T.call(Object);
function ue(e2) {
  if (!d(e2) || u(e2) != w) return false;
  var t2 = g(e2);
  if (t2 === null) return true;
  var n2 = ce.call(t2, `constructor`) && t2.constructor;
  return typeof n2 == `function` && n2 instanceof n2 && T.call(n2) == le;
}
function E(e2, t2) {
  if (!(t2 === `constructor` && typeof e2[t2] == `function`) && t2 != `__proto__`) return e2[t2];
}
function de(e2) {
  return h(e2, _(e2));
}
function fe(e2, t2, n2, a2, s2, u2, d2) {
  var p2 = E(e2, n2), m2 = E(t2, n2), h2 = d2.get(m2);
  if (h2) {
    C(e2, n2, h2);
    return;
  }
  var g2 = u2 ? u2(p2, m2, n2 + ``, e2, t2, d2) : void 0, _2 = g2 === void 0;
  if (_2) {
    var y2 = i(m2), b2 = !y2 && o(m2), x2 = !y2 && !b2 && c(m2);
    g2 = m2, y2 || b2 || x2 ? i(p2) ? g2 = p2 : ae(p2) ? g2 = ee(p2) : b2 ? (_2 = false, g2 = ne(m2, true)) : x2 ? (_2 = false, g2 = te(m2, true)) : g2 = [] : ue(m2) || l(m2) ? (g2 = p2, l(p2) ? g2 = de(p2) : (!f(p2) || r(p2)) && (g2 = v(m2))) : _2 = false;
  }
  _2 && (d2.set(m2, g2), s2(g2, m2, a2, u2, d2), d2.delete(m2)), C(e2, n2, g2);
}
function D(e2, t2, n2, r2, i2) {
  e2 !== t2 && ie(t2, function(o2, s2) {
    if (i2 || (i2 = new a()), f(o2)) fe(e2, t2, s2, n2, D, r2, i2);
    else {
      var c2 = r2 ? r2(E(e2, s2), o2, s2 + ``, e2, t2, i2) : void 0;
      c2 === void 0 && (c2 = o2), C(e2, s2, c2);
    }
  }, _);
}
function O(e2) {
  return e2;
}
function pe(e2, t2, n2) {
  switch (n2.length) {
    case 0:
      return e2.call(t2);
    case 1:
      return e2.call(t2, n2[0]);
    case 2:
      return e2.call(t2, n2[0], n2[1]);
    case 3:
      return e2.call(t2, n2[0], n2[1], n2[2]);
  }
  return e2.apply(t2, n2);
}
var k = Math.max;
function A(e2, t2, n2) {
  return t2 = k(t2 === void 0 ? e2.length - 1 : t2, 0), function() {
    for (var r2 = arguments, i2 = -1, a2 = k(r2.length - t2, 0), o2 = Array(a2); ++i2 < a2; ) o2[i2] = r2[t2 + i2];
    i2 = -1;
    for (var s2 = Array(t2 + 1); ++i2 < t2; ) s2[i2] = r2[i2];
    return s2[t2] = n2(o2), pe(e2, this, s2);
  };
}
function j(e2) {
  return function() {
    return e2;
  };
}
var M = p ? function(e2, t2) {
  return p(e2, `toString`, { configurable: true, enumerable: false, value: j(t2), writable: true });
} : O, N = 800, P = 16, F = Date.now;
function I(e2) {
  var t2 = 0, n2 = 0;
  return function() {
    var r2 = F(), i2 = P - (r2 - n2);
    if (n2 = r2, i2 > 0) {
      if (++t2 >= N) return arguments[0];
    } else t2 = 0;
    return e2.apply(void 0, arguments);
  };
}
var L = I(M);
function R(e2, t2) {
  return L(A(e2, t2, O), e2 + ``);
}
function z(e2, t2, r2) {
  if (!f(r2)) return false;
  var i2 = typeof t2;
  return (i2 == `number` ? s(r2) && y(t2, r2.length) : i2 == `string` && t2 in r2) ? n(r2[t2], e2) : false;
}
function me(e2) {
  return R(function(t2, n2) {
    var r2 = -1, i2 = n2.length, a2 = i2 > 1 ? n2[i2 - 1] : void 0, o2 = i2 > 2 ? n2[2] : void 0;
    for (a2 = e2.length > 3 && typeof a2 == `function` ? (i2--, a2) : void 0, o2 && z(n2[0], n2[1], o2) && (a2 = i2 < 3 ? void 0 : a2, i2 = 1), t2 = Object(t2); ++r2 < i2; ) {
      var s2 = n2[r2];
      s2 && e2(t2, s2, r2, a2);
    }
    return t2;
  });
}
var B = me(function(e2, t2, n2) {
  D(e2, t2, n2);
}), V = () => t(`1234567890abcdefghijklmnopqrstuvwxyz`, 6)();
function H() {
  let e2 = V();
  for (; e2.match(/^\d/); ) e2 = V();
  return `windpress${e2}`;
}
function he(e2) {
  let t2 = [];
  return e2.childNodes.forEach((e3) => {
    let n2 = U(e3);
    n2.transformedNode && t2.push(n2.transformedNode);
  }), W(t2, 0);
}
function ge(e2) {
  let t2 = e2.tagName.toLowerCase(), n2 = { id: H(), name: `div`, settings: { tag: t2 }, children: [] }, r2 = [], i2 = [`id`, `class`, `href`, `src`];
  if (Object.keys(e2.attributes).forEach((t3) => {
    let a2 = e2.attributes[t3].name;
    i2.includes(a2) ? (a2 === `class` && e2.attributes[t3].value.trim() !== `` && B(n2.settings, { _cssClasses: e2.attributes[t3].value }), a2 === `id` && e2.id.trim() !== `` && B(n2.settings, { _cssId: e2.id }), a2 === `href` && e2.tagName.toLowerCase() === `a` && B(n2.settings, { link: { url: e2.getAttribute(`href`) } })) : r2.push({ id: H(), name: a2, value: e2.attributes[t3].value });
  }), B(n2.settings, { _attributes: r2 }), t2 === `svg`) return n2.name = `svg`, B(n2.settings, { source: `code`, code: e2.outerHTML }), n2.settings._attributes = [], n2;
  if (t2 === `img`) {
    let t3 = e2.getAttribute(`src`);
    return n2.name = `image`, B(n2.settings, { image: { external: true, url: t3 || ``, full: t3 || ``, filename: t3.split(`/`).pop() || `` }, altText: e2.getAttribute(`alt`) || `` }), delete n2.settings.tag, n2;
  }
  if (t2.match(/h[1-6]/) && (n2.name = `heading`, B(n2.settings, { text: e2.innerText, tag: t2 })), t2 === `video` || t2 === `iframe` && (e2.getAttribute(`src`).includes(`youtube.com`) || e2.getAttribute(`src`).includes(`vimeo.com`))) return n2.name = `video`, B(n2.settings, { source: `url`, url: t2 === `video` ? e2.getAttribute(`src`) : e2.getAttribute(`src`).split(`?`)[0] }), delete n2.settings.tag, n2;
  if (t2 === `a`) {
    if (B(n2.settings, { link: { type: `external`, url: e2.getAttribute(`href`) || ``, newTab: e2.getAttribute(`target`) === `_blank`, ariaLabel: e2.getAttribute(`aria-label`) || ``, title: e2.getAttribute(`title`) || ``, rel: e2.getAttribute(`rel`) || `` } }), e2.children.length === 0) return n2.name = `text-basic`, B(n2.settings, { text: e2.innerText }), n2;
    B(n2.settings, { text: e2.innerText });
  }
  return e2.childNodes.forEach((t3) => {
    let { transformedNode: r3, brxNode: i3 = null } = U(t3, e2, n2);
    r3 && n2.children.push(r3), i3 && (n2 = i3);
  }), n2;
}
function U(e2, t2 = null, n2 = null) {
  return e2.nodeType === Node.ELEMENT_NODE ? { transformedNode: ge(e2) } : e2.nodeType === Node.TEXT_NODE && e2.nodeValue.trim() !== `` ? t2 && n2 && t2.childNodes.length === 1 && (t2.tagName.toLowerCase() === `p` || t2.tagName.toLowerCase() === `span` || t2.tagName.toLowerCase() === `div`) ? (n2.name = `text-basic`, B(n2.settings, { text: e2.nodeValue }), { transformedNode: null, brxNode: n2 }) : { transformedNode: { id: H(), name: `text-basic`, settings: { tag: `span`, text: e2.nodeValue }, children: [] } } : { transformedNode: null };
}
function W(e2, t2) {
  let n2 = [];
  return e2.forEach((e3) => {
    e3.parent = t2, e3._children = e3.children.map((e4) => e4.id), n2.push(e3), n2.push(...W(e3.children, e3.id)), e3.children = e3._children, delete e3._children;
  }), n2;
}
async function G(e2) {
  if (!navigator.permissions || typeof navigator.permissions.query != `function`) return null;
  try {
    return await navigator.permissions.query({ name: e2 });
  } catch {
    return null;
  }
}
async function _e() {
  if (!navigator.clipboard || typeof navigator.clipboard.readText != `function` || typeof navigator.clipboard.writeText != `function`) return b(`Clipboard API not supported`, { module: `html2bricks`, type: `error` }), false;
  let e2 = await G(`clipboard-read`);
  if (e2 && e2.state === `denied`) return b(`Clipboard-read permission denied`, { module: `html2bricks`, type: `error` }), false;
  let t2 = ``;
  try {
    t2 = await navigator.clipboard.readText();
  } catch (e3) {
    return b(`Clipboard-read permission denied`, e3, { module: `html2bricks`, type: `error` }), false;
  }
  let n2 = await G(`clipboard-write`);
  if (n2 && n2.state === `denied`) return b(`Clipboard-write permission denied`, { module: `html2bricks`, type: `error` }), false;
  try {
    await navigator.clipboard.writeText(t2);
  } catch (e3) {
    return b(`Clipboard-write permission denied`, e3, { module: `html2bricks`, type: `error` }), false;
  }
  return true;
}
function ve(e2) {
  return e2.clipboardData ? (e2.clipboardData.getData(`text/html`) || e2.clipboardData.getData(`text/plain`) || ``).trim() : ``;
}
async function K(e2 = ``) {
  let t2 = typeof e2 == `string` ? e2.trim() : ``;
  if (!t2) {
    if (!await _e()) {
      S.$_showMessage(`[WindPress] Clipboard access not available`);
      return;
    }
    try {
      t2 = (await navigator.clipboard.readText()).trim();
    } catch (e3) {
      b(`Clipboard-read permission denied`, e3, { module: `html2bricks`, type: `error` }), S.$_showMessage(`[WindPress] Clipboard access not available`);
      return;
    }
  }
  if (!t2 || t2.charAt(0) !== `<`) {
    b(`Pasted content is not HTML`, { module: `html2bricks`, type: `error` }), S.$_showMessage(`[WindPress] Pasted content is not HTML`);
    return;
  }
  let n2 = new DOMParser().parseFromString(t2, `text/html`).body, r2 = { content: he(n2), source: `bricksCopiedElements`, sourceUrl: window.bricksData.siteUrl, version: window.bricksData.version, globalClasses: [], globalElements: [] };
  try {
    await navigator.clipboard.writeText(JSON.stringify(r2, null));
  } catch (e3) {
    b(`Clipboard-write permission denied`, e3, { module: `html2bricks`, type: `error` }), S.$_showMessage(`[WindPress] Clipboard access not available`);
    return;
  }
  S.$_pasteElements(), S.$_showMessage(`[WindPress] HTML pasted`);
}
var q = false, J = null;
function Y() {
  q = false, J && (J = (window.clearTimeout(J), null));
}
document.addEventListener(`paste`, (e2) => {
  !q || !x(`module.html2bricks.copy-paste`, true).value || (Y(), e2.preventDefault(), e2.stopPropagation(), K(ve(e2)));
}, true), document.addEventListener(`keydown`, (e2) => {
  x(`module.html2bricks.copy-paste`, true).value && (e2.target.id === `bricks-toolbar` || e2.target.id === `bricks-panel` || !(e2.ctrlKey || e2.metaKey) || !e2.shiftKey || e2.key.toLowerCase() !== `v` || (e2.stopPropagation(), q = true, J && window.clearTimeout(J), J = window.setTimeout(() => {
    q && (Y(), K());
  }, 0)));
}, true);
var X = document.createElement(`li`);
X.id = `windpressbricks-html2bricks-context-menu`, X.classList.add(`sep`), X.innerHTML = `<span class="label">Paste HTML</span><span class="shortcut">CTRL + SHIFT + V</span>`, X.addEventListener(`click`, K);
var Z = document.createElement(`li`);
Z.dataset.balloon = `Paste HTML`, Z.dataset.balloonPos = `bottom-right`, Z.innerHTML = `
    <span class="bricks-svg-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-html5" fill="none" stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" /></svg>
    </span>
`, Z.addEventListener(`click`, K);
function Q() {
  return document.querySelector(`#bricks-builder-context-menu li:nth-child(2)`);
}
function ye() {
  let e2 = document.querySelector(`#bricks-panel-header > ul.actions`), t2 = `${S.i18n?.paste ?? `Paste`} (${S.i18n?.all ?? `All`})`;
  return [...e2?.children ?? []].find((e3) => e3.dataset.balloon === t2);
}
var $ = () => {
  let e2 = Q();
  e2 && !X.isConnected && (e2.classList.remove(`sep`), e2.insertAdjacentElement(`afterend`, X));
  let t2 = ye();
  t2 && !Z.isConnected && t2.insertAdjacentElement(`afterend`, Z);
}, be = () => {
  Q()?.classList.add(`sep`), X.remove(), Z.remove();
};
x(`module.html2bricks.copy-paste`, true).value && $(), e(() => x(`module.html2bricks.copy-paste`, true).value, (e2) => {
  e2 ? $() : be();
}), b(`Module loaded!`, { module: `html2bricks` });
