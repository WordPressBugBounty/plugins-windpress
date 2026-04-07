import { Ht as e } from "./runtime-core.esm-bundler-C_RgxGrN.js";
import { t } from "./index.browser-DL6dchOu.js";
import { i as n, r, t as i } from "./isObject-Da6SbqXi.js";
import { c as a, i as o, s } from "./_MapCache-DvbvAB3A.js";
import { a as c, c as l, i as u, n as ee, o as d, s as f, t as p } from "./_initCloneObject-q3M5bXWr.js";
import { i as m, r as h } from "./set-DC7ePnRQ.js";
import { t as g } from "./_isIndex-Bbyz4ars.js";
import { a as _, c as v, d as y, l as b, n as x } from "./_Uint8Array-CQ8L7y0L.js";
import { t as S } from "./logger-BvowV9fY.js";
import { a as C, n as w } from "./constant-DTLwn-yt.js";
function T(e2) {
  return e2;
}
function te(e2, t2, n2) {
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
var ne = 800, re = 16, ie = Date.now;
function ae(e2) {
  var t2 = 0, n2 = 0;
  return function() {
    var r2 = ie(), i2 = re - (r2 - n2);
    if (n2 = r2, i2 > 0) {
      if (++t2 >= ne) return arguments[0];
    } else t2 = 0;
    return e2.apply(void 0, arguments);
  };
}
function oe(e2) {
  return function() {
    return e2;
  };
}
var se = ae(m ? function(e2, t2) {
  return m(e2, `toString`, { configurable: true, enumerable: false, value: oe(t2), writable: true });
} : T), E = Math.max;
function ce(e2, t2, n2) {
  return t2 = E(t2 === void 0 ? e2.length - 1 : t2, 0), function() {
    for (var r2 = arguments, i2 = -1, a2 = E(r2.length - t2, 0), o2 = Array(a2); ++i2 < a2; ) o2[i2] = r2[t2 + i2];
    i2 = -1;
    for (var s2 = Array(t2 + 1); ++i2 < t2; ) s2[i2] = r2[i2];
    return s2[t2] = n2(o2), te(e2, this, s2);
  };
}
function le(e2, t2) {
  return se(ce(e2, t2, T), e2 + ``);
}
function ue(e2, t2, n2) {
  if (!i(n2)) return false;
  var r2 = typeof t2;
  return (r2 == `number` ? y(n2) && g(t2, n2.length) : r2 == `string` && t2 in n2) ? o(n2[t2], e2) : false;
}
function de(e2) {
  return le(function(t2, n2) {
    var r2 = -1, i2 = n2.length, a2 = i2 > 1 ? n2[i2 - 1] : void 0, o2 = i2 > 2 ? n2[2] : void 0;
    for (a2 = e2.length > 3 && typeof a2 == `function` ? (i2--, a2) : void 0, o2 && ue(n2[0], n2[1], o2) && (a2 = i2 < 3 ? void 0 : a2, i2 = 1), t2 = Object(t2); ++r2 < i2; ) {
      var s2 = n2[r2];
      s2 && e2(t2, s2, r2, a2);
    }
    return t2;
  });
}
var fe = `[object Object]`, pe = Function.prototype, me = Object.prototype, D = pe.toString, O = me.hasOwnProperty, k = D.call(Object);
function A(e2) {
  if (!r(e2) || n(e2) != fe) return false;
  var t2 = c(e2);
  if (t2 === null) return true;
  var i2 = O.call(t2, `constructor`) && t2.constructor;
  return typeof i2 == `function` && i2 instanceof i2 && D.call(i2) == k;
}
function j(e2) {
  return function(t2, n2, r2) {
    for (var i2 = -1, a2 = Object(t2), o2 = r2(t2), s2 = o2.length; s2--; ) {
      var c2 = o2[e2 ? s2 : ++i2];
      if (n2(a2[c2], c2, a2) === false) break;
    }
    return t2;
  };
}
var M = j();
function N(e2, t2, n2) {
  (n2 !== void 0 && !o(e2[t2], n2) || n2 === void 0 && !(t2 in e2)) && h(e2, t2, n2);
}
function P(e2) {
  return r(e2) && y(e2);
}
function F(e2, t2) {
  if (!(t2 === `constructor` && typeof e2[t2] == `function`) && t2 != `__proto__`) return e2[t2];
}
function I(e2) {
  return f(e2, d(e2));
}
function L(e2, t2, n2, r2, o2, c2, d2) {
  var f2 = F(e2, n2), m2 = F(t2, n2), h2 = d2.get(m2);
  if (h2) {
    N(e2, n2, h2);
    return;
  }
  var g2 = c2 ? c2(f2, m2, n2 + ``, e2, t2, d2) : void 0, y2 = g2 === void 0;
  if (y2) {
    var x2 = a(m2), S2 = !x2 && v(m2), C2 = !x2 && !S2 && _(m2);
    g2 = m2, x2 || S2 || C2 ? a(f2) ? g2 = f2 : P(f2) ? g2 = l(f2) : S2 ? (y2 = false, g2 = u(m2, true)) : C2 ? (y2 = false, g2 = ee(m2, true)) : g2 = [] : A(m2) || b(m2) ? (g2 = f2, b(f2) ? g2 = I(f2) : (!i(f2) || s(f2)) && (g2 = p(m2))) : y2 = false;
  }
  y2 && (d2.set(m2, g2), o2(g2, m2, r2, c2, d2), d2.delete(m2)), N(e2, n2, g2);
}
function R(e2, t2, n2, r2, a2) {
  e2 !== t2 && M(t2, function(o2, s2) {
    if (a2 || (a2 = new x()), i(o2)) L(e2, t2, s2, n2, R, r2, a2);
    else {
      var c2 = r2 ? r2(F(e2, s2), o2, s2 + ``, e2, t2, a2) : void 0;
      c2 === void 0 && (c2 = o2), N(e2, s2, c2);
    }
  }, d);
}
var z = de(function(e2, t2, n2) {
  R(e2, t2, n2);
}), B = () => t(`1234567890abcdefghijklmnopqrstuvwxyz`, 6)();
function V() {
  let e2 = B();
  for (; e2.match(/^\d/); ) e2 = B();
  return `windpress${e2}`;
}
function he(e2) {
  let t2 = [];
  return e2.childNodes.forEach((e3) => {
    let n2 = H(e3);
    n2.transformedNode && t2.push(n2.transformedNode);
  }), U(t2, 0);
}
function ge(e2) {
  let t2 = e2.tagName.toLowerCase(), n2 = { id: V(), name: `div`, settings: { tag: t2 }, children: [] }, r2 = [], i2 = [`id`, `class`, `href`, `src`];
  if (Object.keys(e2.attributes).forEach((t3) => {
    let a2 = e2.attributes[t3].name;
    i2.includes(a2) ? (a2 === `class` && e2.attributes[t3].value.trim() !== `` && z(n2.settings, { _cssClasses: e2.attributes[t3].value }), a2 === `id` && e2.id.trim() !== `` && z(n2.settings, { _cssId: e2.id }), a2 === `href` && e2.tagName.toLowerCase() === `a` && z(n2.settings, { link: { url: e2.getAttribute(`href`) } })) : r2.push({ id: V(), name: a2, value: e2.attributes[t3].value });
  }), z(n2.settings, { _attributes: r2 }), t2 === `svg`) return n2.name = `svg`, z(n2.settings, { source: `code`, code: e2.outerHTML }), n2.settings._attributes = [], n2;
  if (t2 === `img`) {
    let t3 = e2.getAttribute(`src`);
    return n2.name = `image`, z(n2.settings, { image: { external: true, url: t3 || ``, full: t3 || ``, filename: t3.split(`/`).pop() || `` }, altText: e2.getAttribute(`alt`) || `` }), delete n2.settings.tag, n2;
  }
  if (t2.match(/h[1-6]/) && (n2.name = `heading`, z(n2.settings, { text: e2.innerText, tag: t2 })), t2 === `video` || t2 === `iframe` && (e2.getAttribute(`src`).includes(`youtube.com`) || e2.getAttribute(`src`).includes(`vimeo.com`))) return n2.name = `video`, z(n2.settings, { source: `url`, url: t2 === `video` ? e2.getAttribute(`src`) : e2.getAttribute(`src`).split(`?`)[0] }), delete n2.settings.tag, n2;
  if (t2 === `a`) {
    if (z(n2.settings, { link: { type: `external`, url: e2.getAttribute(`href`) || ``, newTab: e2.getAttribute(`target`) === `_blank`, ariaLabel: e2.getAttribute(`aria-label`) || ``, title: e2.getAttribute(`title`) || ``, rel: e2.getAttribute(`rel`) || `` } }), e2.children.length === 0) return n2.name = `text-basic`, z(n2.settings, { text: e2.innerText }), n2;
    z(n2.settings, { text: e2.innerText });
  }
  return e2.childNodes.forEach((t3) => {
    let { transformedNode: r3, brxNode: i3 = null } = H(t3, e2, n2);
    r3 && n2.children.push(r3), i3 && (n2 = i3);
  }), n2;
}
function H(e2, t2 = null, n2 = null) {
  return e2.nodeType === Node.ELEMENT_NODE ? { transformedNode: ge(e2) } : e2.nodeType === Node.TEXT_NODE && e2.nodeValue.trim() !== `` ? t2 && n2 && t2.childNodes.length === 1 && (t2.tagName.toLowerCase() === `p` || t2.tagName.toLowerCase() === `span` || t2.tagName.toLowerCase() === `div`) ? (n2.name = `text-basic`, z(n2.settings, { text: e2.nodeValue }), { transformedNode: null, brxNode: n2 }) : { transformedNode: { id: V(), name: `text-basic`, settings: { tag: `span`, text: e2.nodeValue }, children: [] } } : { transformedNode: null };
}
function U(e2, t2) {
  let n2 = [];
  return e2.forEach((e3) => {
    e3.parent = t2, e3._children = e3.children.map((e4) => e4.id), n2.push(e3), n2.push(...U(e3.children, e3.id)), e3.children = e3._children, delete e3._children;
  }), n2;
}
async function W(e2) {
  if (!navigator.permissions || typeof navigator.permissions.query != `function`) return null;
  try {
    return await navigator.permissions.query({ name: e2 });
  } catch {
    return null;
  }
}
async function _e() {
  if (!navigator.clipboard || typeof navigator.clipboard.readText != `function` || typeof navigator.clipboard.writeText != `function`) return S(`Clipboard API not supported`, { module: `html2bricks`, type: `error` }), false;
  let e2 = await W(`clipboard-read`);
  if (e2 && e2.state === `denied`) return S(`Clipboard-read permission denied`, { module: `html2bricks`, type: `error` }), false;
  let t2 = ``;
  try {
    t2 = await navigator.clipboard.readText();
  } catch (e3) {
    return S(`Clipboard-read permission denied`, e3, { module: `html2bricks`, type: `error` }), false;
  }
  let n2 = await W(`clipboard-write`);
  if (n2 && n2.state === `denied`) return S(`Clipboard-write permission denied`, { module: `html2bricks`, type: `error` }), false;
  try {
    await navigator.clipboard.writeText(t2);
  } catch (e3) {
    return S(`Clipboard-write permission denied`, e3, { module: `html2bricks`, type: `error` }), false;
  }
  return true;
}
function ve(e2) {
  return e2.clipboardData ? (e2.clipboardData.getData(`text/html`) || e2.clipboardData.getData(`text/plain`) || ``).trim() : ``;
}
async function G(e2 = ``) {
  let t2 = typeof e2 == `string` ? e2.trim() : ``;
  if (!t2) {
    if (!await _e()) {
      w.$_showMessage(`[WindPress] Clipboard access not available`);
      return;
    }
    try {
      t2 = (await navigator.clipboard.readText()).trim();
    } catch (e3) {
      S(`Clipboard-read permission denied`, e3, { module: `html2bricks`, type: `error` }), w.$_showMessage(`[WindPress] Clipboard access not available`);
      return;
    }
  }
  if (!t2 || t2.charAt(0) !== `<`) {
    S(`Pasted content is not HTML`, { module: `html2bricks`, type: `error` }), w.$_showMessage(`[WindPress] Pasted content is not HTML`);
    return;
  }
  let n2 = new DOMParser().parseFromString(t2, `text/html`).body, r2 = { content: he(n2), source: `bricksCopiedElements`, sourceUrl: window.bricksData.siteUrl, version: window.bricksData.version, globalClasses: [], globalElements: [] };
  try {
    await navigator.clipboard.writeText(JSON.stringify(r2, null));
  } catch (e3) {
    S(`Clipboard-write permission denied`, e3, { module: `html2bricks`, type: `error` }), w.$_showMessage(`[WindPress] Clipboard access not available`);
    return;
  }
  w.$_pasteElements(), w.$_showMessage(`[WindPress] HTML pasted`);
}
var K = false, q = null;
function J() {
  K = false, q && (q = (window.clearTimeout(q), null));
}
document.addEventListener(`paste`, (e2) => {
  !K || !C(`module.html2bricks.copy-paste`, true).value || (J(), e2.preventDefault(), e2.stopPropagation(), G(ve(e2)));
}, true), document.addEventListener(`keydown`, (e2) => {
  C(`module.html2bricks.copy-paste`, true).value && (e2.target.id === `bricks-toolbar` || e2.target.id === `bricks-panel` || !(e2.ctrlKey || e2.metaKey) || !e2.shiftKey || e2.key.toLowerCase() !== `v` || (e2.stopPropagation(), K = true, q && window.clearTimeout(q), q = window.setTimeout(() => {
    K && (J(), G());
  }, 0)));
}, true);
var Y = document.querySelector(`#bricks-builder-context-menu li:nth-child(2)`), X = document.createElement(`li`);
X.id = `windpressbricks-html2bricks-context-menu`, X.classList.add(`sep`), X.innerHTML = `<span class="label">Paste HTML</span><span class="shortcut">CTRL + SHIFT + V</span>`, X.addEventListener(`click`, G);
var Z = document.querySelector(`#bricks-panel-header>ul.actions>li[data-balloon="Paste (All)"]`), Q = document.createElement(`li`);
Q.dataset.balloon = `Paste HTML`, Q.dataset.balloonPos = `bottom-right`, Q.innerHTML = `
    <span class="bricks-svg-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-html5" fill="none" stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" /></svg>
    </span>
`, Q.addEventListener(`click`, G);
var $ = () => {
  Y.classList.remove(`sep`), Y.insertAdjacentElement(`afterend`, X), Z.insertAdjacentElement(`afterend`, Q);
}, ye = () => {
  Y.classList.add(`sep`), X.remove(), Q.remove();
};
C(`module.html2bricks.copy-paste`, true).value && $(), e(() => C(`module.html2bricks.copy-paste`, true).value, (e2) => {
  e2 ? $() : ye();
}), S(`Module loaded!`, { module: `html2bricks` });
