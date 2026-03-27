import { Ct as e, D as t, E as n, Ht as r, J as i, On as a, St as o, Yt as s, Zn as c, _ as l, b as u, bt as d, ct as f, er as p, l as m, mt as h, o as g, qt as _, tr as v, tt as y, v as b, vn as x, xt as S, y as C } from "./runtime-core.esm-bundler-CahM68iJ.js";
import { n as ee, r as te, s as ne } from "./vue.runtime.esm-bundler-B0iyRCM8.js";
import { y as w } from "./dist-BKF-Yqo1.js";
import { t as re } from "./set-Re2vSVSO.js";
import { t as ie } from "./vfs-DziqLF6T.js";
import { c as T, i as ae } from "./intellisense-CtRsPNrz.js";
import "./tailwindcss-DNCLGH_x.js";
import { t as E } from "./logger-BvowV9fY.js";
import { t as D } from "./_plugin-vue_export-helper-4qEyeFbT.js";
import { a as oe, i as se, n as ce, r as le, t as ue } from "./chevron-right-BG75Iz4c.js";
import { n as O, r as de, t as k } from "./constant-B8yb_wxs.js";
var fe = { id: `windpressbricks-variable-app-header`, class: `header-container` }, A = { class: `header-content` }, j = { class: `header-logo` }, M = { class: `header-title` }, N = D({ __name: `PanelHeader`, setup(c2) {
  let d2 = i(`variableApp`), p2 = i(`isOpen`);
  function m2() {
    let e2 = d2.querySelector(`#windpressbricks-variable-app-header`), t2 = x(false), n2 = 0, i2 = 0;
    r(t2, (t3) => {
      t3 ? (document.body.style.userSelect = `none`, k.style.pointerEvents = `none`, e2.style.cursor = `grabbing`) : (document.body.style.removeProperty(`user-select`), k.style.removeProperty(`pointer-events`), e2.style.cursor = `grab`);
    });
    let a2 = (r2) => {
      t2.value = true;
      let a3 = e2.getBoundingClientRect();
      n2 = r2.clientX - a3.left, i2 = r2.clientY - a3.top;
    };
    e2.removeEventListener(`mousedown`, a2), e2.addEventListener(`mousedown`, a2);
    let o2 = (r2) => {
      if (!t2.value) return;
      let a3 = e2.getBoundingClientRect(), o3 = r2.clientX, s3 = r2.clientY, c3 = o3 - n2, l2 = s3 - i2, u2 = c3 < 0 ? 0 : c3 > window.innerWidth - a3.width ? window.innerWidth - a3.width : c3, f2 = l2 < 0 ? 0 : l2 > window.innerHeight - a3.height ? window.innerHeight - a3.height : l2;
      d2.style.left = `${u2}px`, d2.style.top = `${f2}px`;
    };
    document.removeEventListener(`mousemove`, o2), document.addEventListener(`mousemove`, o2);
    let s2 = (e3) => {
      t2.value = false;
    };
    document.removeEventListener(`mouseup`, s2), document.addEventListener(`mouseup`, s2);
  }
  return f(() => {
    m2();
  }), (r2, i2) => {
    let c3 = o(`inline-svg`), d3 = le, f2 = e(`tooltip`);
    return h(), u(`div`, fe, [l(`div`, A, [l(`div`, j, [t(c3, { src: a(ce), class: `inline-svg` }, null, 8, [`src`])]), s((h(), u(`div`, M, [...i2[1] || (i2[1] = [n(` WindPress `, -1)])])), [[f2, { placement: `top`, content: `v${r2.windpressbricks._version}` }]]), s((h(), u(`button`, { class: `header-exit`, onClick: i2[0] || (i2[0] = (e2) => p2.value = !a(p2)) }, [t(d3, { class: `iconify` })])), [[f2, { placement: `top`, content: `Close` }]])])]);
  };
} }, [[`__scopeId`, `data-v-8d964b4c`]]), P = { class: `header-slot` }, F = { key: 0, class: `expansion-panel__body` }, I = D({ __name: `ExpansionPanel`, props: { namespace: { type: String, required: true }, name: { type: String, required: true } }, setup(e2, { expose: n2 }) {
  let r2 = e2, i2 = x(null), o2 = w(`windpressbricks-variable-app.ui.expansion-panels.${r2.namespace}`, { [`${r2.name}`]: false }, void 0, { mergeDefaults: true });
  function s2(e3) {
    o2.value[r2.name] = e3 === null ? !o2.value[r2.name] : e3;
  }
  function d2() {
    i2.value.scrollIntoView();
  }
  return n2({ togglePanel: s2, scrollIntoView: d2 }), (n3, r3) => {
    let s3 = ue;
    return h(), u(`div`, { ref_key: `sectionRef`, ref: i2, class: `expansion-panel` }, [l(`div`, { class: c([{}, `expansion-panel__header`]), onClick: r3[0] || (r3[0] = (t2) => a(o2)[e2.name] = !a(o2)[e2.name]) }, [l(`div`, P, [S(n3.$slots, `header`, {}, void 0, true)]), l(`div`, null, [t(s3, { style: p({ transform: a(o2)[e2.name] ? `rotate(-90deg)` : `rotate(0deg)` }), class: `iconify` }, null, 8, [`style`])])]), t(ee, null, { default: _(() => [a(o2)[e2.name] ? (h(), u(`div`, F, [S(n3.$slots, `default`, {}, void 0, true)])) : C(``, true)]), _: 3 })], 512);
  };
} }, [[`__scopeId`, `data-v-e8a9feac`]]), L = { class: `{m:10;pb:15}>div` }, R = { class: `variable-section-title font:14 my:10` }, z = { class: `variable-section-items flex flex:row gap:8 flex-wrap:wrap` }, B = [`onClick`, `onMouseenter`], V = { class: `font:14` }, pe = 1e3, H = D({ __name: `CommonVariableItems`, props: { variableItems: { type: Object, required: true } }, setup(t2) {
  let n2 = i(`focusedInput`), r2 = i(`recentVariableSelectionTimestamp`), a2 = i(`tempInputValue`);
  function o2(e2, t3) {
    performance.now() - r2.value < pe || n2.value && (n2.value.value = `var(${t3})`, n2.value.dispatchEvent(new Event(`input`)), n2.value.focus());
  }
  function c2(e2) {
    !n2.value || a2.value === null || (n2.value.value = a2.value, n2.value.dispatchEvent(new Event(`input`)), n2.value.focus());
  }
  function f2(e2, t3) {
    n2.value && (n2.value.value = `var(${t3})`, n2.value.dispatchEvent(new Event(`input`)), n2.value.focus(), a2.value = `var(${t3})`, r2.value = performance.now());
  }
  return (n3, r3) => {
    let i2 = e(`tooltip`);
    return h(), u(`div`, L, [(h(true), u(g, null, d(t2.variableItems, (e2, t3) => (h(), u(`div`, { key: t3, class: `var-item` }, [l(`div`, R, v(t3.replace(`_`, `-`)), 1), l(`div`, z, [e2.length > 0 ? (h(true), u(g, { key: 0 }, d(e2, (e3, t4) => s((h(), u(`button`, { key: t4, class: `px:12 py:8 r:$(builder-border-radius) fg:$(builder-color) bg:$(builder-bg-2) bg:$(builder-bg-3):hover b:0 flex-grow:1 flex-shrink:1 flex-basis:30% text:center {opacity:.5;font:semibold}>span opacity:100:hover>span`, onClick: (t5) => f2(t5, e3.key), onMouseenter: (t5) => o2(t5, e3.key), onMouseleave: c2 }, [l(`span`, V, v(e3.label), 1)], 40, B)), [[i2, { placement: `top`, content: `var(${e3.key}, ${e3.value})` }]])), 128)) : C(``, true)])]))), 128))]);
  };
} }, [[`__scopeId`, `data-v-4fed79a0`]]);
function U() {
  var _a, _b;
  if (O.$_state.activePanel !== `element`) return null;
  let e2 = (_a = O.$_state) == null ? void 0 : _a.activeElement.id;
  return (_b = O.$_getIframeDoc()) == null ? void 0 : _b.getElementById(`brxe-${e2}`);
}
function me({ selector: e2, callback: t2, options: n2 }) {
  let r2 = new MutationObserver(t2), i2 = document.querySelector(e2);
  if (!i2) {
    E(`Target not found for selector: ${e2}`, { module: `variable-picker`, type: `error` });
    return;
  }
  r2.observe(i2, Object.assign(Object.assign({}, { childList: true, subtree: true }), n2));
}
var he = { class: `{m:10;pb:15}>div` }, ge = { class: `variable-section-title` }, _e = { key: 0, class: `variable-section-items default-color` }, ve = [`onClick`, `onMouseenter`], ye = [`onClick`, `onMouseenter`], be = 1e3, xe = D({ __name: `ColorVariableItems`, props: { variableItems: { type: Object, required: true } }, setup(t2) {
  let n2 = i(`focusedInput`), r2 = i(`recentColorPickerTarget`), a2 = i(`recentVariableSelectionTimestamp`), o2 = i(`tempInputValue`);
  function c2(e2, t3) {
    var _a;
    if (!(performance.now() - a2.value < be)) {
      if (!n2.value) {
        let e3 = U();
        if (!e3) return;
        for (let { property: n3, control: i2 } of [{ property: `color`, control: `typography` }, { property: `backgroundColor`, control: `background` }, { property: `borderColor`, control: `border` }]) ((_a = r2.value) == null ? void 0 : _a.closest(`[data-control="${i2}"]`)) && (e3.style[n3] = `var(${t3})`);
        return;
      }
      n2.value.value = `var(${t3})`, n2.value.dispatchEvent(new Event(`input`)), n2.value.focus();
    }
  }
  function f2(e2) {
    var _a;
    if (!n2.value || o2.value === null) {
      let e3 = U();
      if (!e3) return;
      for (let { property: t3, control: n3 } of [{ property: `color`, control: `typography` }, { property: `backgroundColor`, control: `background` }, { property: `borderColor`, control: `border` }]) ((_a = r2.value) == null ? void 0 : _a.closest(`[data-control="${n3}"]`)) && (e3.style[t3] = ``);
      return;
    }
    n2.value.value = o2.value, n2.value.dispatchEvent(new Event(`input`)), n2.value.focus();
  }
  function m2(e2, t3) {
    if (e2.stopPropagation(), e2.preventDefault(), !n2.value) {
      let e3 = r2.value;
      b2(t3), a2.value = performance.now(), setTimeout(() => {
        let t4 = U();
        if (t4) for (let { property: n3, control: r3 } of [{ property: `color`, control: `typography` }, { property: `backgroundColor`, control: `background` }, { property: `borderColor`, control: `border` }]) (e3 == null ? void 0 : e3.closest(`[data-control="${r3}"]`)) && (t4.style[n3] = ``);
      }, 5);
      return;
    }
    n2.value.value = `var(${t3})`, n2.value.dispatchEvent(new Event(`input`)), n2.value.focus(), o2.value = `var(${t3})`, a2.value = performance.now();
  }
  function _2() {
    document.querySelectorAll(`.windpressbricks-variable-app-colorpopup`).forEach((e2) => {
      e2.remove();
    });
  }
  function y2() {
    if (document.querySelector(`.windpressbricks-variable-app-colorpopup`)) return;
    let e2 = document.createElement(`style`);
    e2.id = `windpressbricks-variable-app-bricks-popup`, e2.appendChild(document.createTextNode(`.bricks-control-popup { display: none !important; }`)), e2.classList.add(`windpressbricks-variable-app-colorpopup`), document.head.appendChild(e2);
  }
  async function b2(e2) {
    var _a, _b, _c, _d, _e2;
    y2(), document.querySelector(`.bricks-control-popup .color-palette.grid`) || ((_b = (_a = r2.value) == null ? void 0 : _a.closest(`.bricks-control-preview`)) == null ? void 0 : _b.click(), await new Promise((e3) => setTimeout(e3, 25)));
    let t3 = document.querySelector(`.bricks-control-popup .color-palette.grid`);
    t3 ? (_d = (_c = t3.querySelector(`[data-balloon="var(${e2})"]`)) == null ? void 0 : _c.parentElement) == null ? void 0 : _d.click() : E(`Failed to select color. Color grid not found.`, { module: `variable-picker`, type: `error` }), (_e2 = document.querySelector(`body`)) == null ? void 0 : _e2.click(), await new Promise((e3) => setTimeout(e3, 2)), document.querySelector(`.bricks-control-popup`) ? (setTimeout(() => {
      var _a2;
      (_a2 = document.querySelector(`body`)) == null ? void 0 : _a2.click(), setTimeout(() => {
        _2();
      }, 5);
    }, 5), E(`Failed to close color picker. Delaying close.`, { module: `variable-picker`, type: `error` })) : _2();
  }
  return (n3, r3) => {
    let i2 = e(`tooltip`);
    return h(), u(`div`, he, [(h(true), u(g, null, d(t2.variableItems, (e2, t3) => (h(), u(`div`, { key: t3, class: `` }, [l(`div`, ge, v(t3), 1), e2.DEFAULT ? (h(), u(`div`, _e, [s(l(`button`, { style: p(`--wp-b-v-item-bg: var(--${e2.DEFAULT.key.slice(2)});`), class: ``, onClick: (t4) => m2(t4, e2.DEFAULT.key), onMouseenter: (t4) => c2(t4, e2.DEFAULT.key), onMouseleave: f2 }, null, 44, ve), [[i2, { placement: `top`, content: `var(${e2.DEFAULT.key}, ${e2.DEFAULT.value})` }]])])) : C(``, true), e2.shades && Object.keys(e2.shades).length > 0 ? (h(), u(`div`, { key: 1, style: p(`--wp-b-v-items-grid: ${Object.keys(e2.shades).length}`), class: `variable-section-items shades-colors` }, [(h(true), u(g, null, d(e2.shades, (e3, t4) => (h(), u(`div`, { key: t4, class: `` }, [s(l(`button`, { style: p(`--wp-b-v-item-bg: var(--${e3.key.slice(2)})`), onClick: (t5) => m2(t5, e3.key), onMouseenter: (t5) => c2(t5, e3.key), onMouseleave: f2 }, null, 44, ye), [[i2, { placement: `top`, content: `var(${e3.key}, ${e3.value})` }]])]))), 128))], 4)) : C(``, true)]))), 128))]);
  };
} }, [[`__scopeId`, `data-v-2285012c`]]), Se = { id: `windpressbricks-variable-app-body`, class: `var-body` }, Ce = D({ __name: `PanelBody`, setup(e2) {
  let n2 = x({ colors: {}, typography: {}, sizing: {} }), a2 = i(`focusedInput`), o2 = i(`recentColorPickerTarget`);
  async function s2() {
    let e3 = await ae(await T({ volume: ie(de.contentWindow.document.querySelector(`script#windpress\\:vfs[type="text/plain"]`).textContent) })), t2 = {};
    e3.filter((e4) => e4.key.startsWith(`--color`)).forEach((e4) => {
      let n3 = e4.key.slice(8), r3 = n3.split(`-`), i3 = ``;
      i3 = r3.length > 1 ? `${r3[0]}.shades.'${r3.slice(1).join(`-`)}'` : `${n3}.DEFAULT`, re(t2, i3, e4);
    }), n2.value.colors = Object.keys(t2).sort().reduce((e4, n3) => (e4[n3] = t2[n3], e4), {});
    let r2 = { font_size: [], line_height: [], letter_spacing: [] };
    e3.filter((e4) => e4.key.startsWith(`--text-`) && !e4.key.endsWith(`--line-height`)).forEach((e4) => {
      let t3 = e4.key.slice(7);
      r2.font_size.push({ key: e4.key, label: t3, value: e4.value });
    }), e3.filter((e4) => e4.key.startsWith(`--leading-`) || e4.key.endsWith(`--leading`)).forEach((e4) => {
      let t3 = e4.key.startsWith(`--leading-`) ? e4.key.slice(10) : e4.key.slice(2, -9);
      r2.line_height.push({ key: e4.key, label: t3, value: e4.value });
    }), r2.line_height.sort((e4, t3) => e4.label.startsWith(`font-size-`) && !t3.label.startsWith(`font-size-`) ? 1 : !e4.label.startsWith(`font-size-`) && t3.label.startsWith(`font-size-`) ? -1 : 0), e3.filter((e4) => e4.key.startsWith(`--tracking-`)).forEach((e4) => {
      let t3 = e4.key.slice(11);
      r2.letter_spacing.push({ key: e4.key, label: t3, value: e4.value });
    }), n2.value.typography = r2;
    let i2 = { container: [], breakpoint: [] };
    e3.filter((e4) => e4.key.startsWith(`--container-`)).forEach((e4) => {
      let t3 = e4.key.slice(12);
      i2.container.push({ key: e4.key, label: t3, value: e4.value });
    }), e3.filter((e4) => e4.key.startsWith(`--breakpoint-`)).forEach((e4) => {
      let t3 = e4.key.slice(13);
      i2.breakpoint.push({ key: e4.key, label: t3, value: e4.value });
    }), n2.value.sizing = i2;
  }
  let c2 = x(null), d2 = x(null), p2 = x(null);
  return r(a2, (e3) => {
    var _a, _b, _c, _d;
    if (e3) {
      let t2 = ((_b = (_a = e3.closest(`[data-controlkey]`)) == null ? void 0 : _a.dataset.controlkey) == null ? void 0 : _b.toLocaleLowerCase()) ?? ``, n3 = [`typography`, `font`].some((e4) => t2.includes(e4)), r2 = [`padding`, `margin`, `gap`, `width`, `height`].some((e4) => t2.includes(e4)), i2 = (_d = (_c = e3.parentElement) == null ? void 0 : _c.parentElement) == null ? void 0 : _d.classList.contains(`color-input`);
      d2.value.togglePanel(false), p2.value.togglePanel(false), c2.value.togglePanel(false), i2 ? (c2.value.togglePanel(true), c2.value.scrollIntoView()) : n3 ? (d2.value.togglePanel(true), d2.value.scrollIntoView()) : r2 && (p2.value.togglePanel(true), p2.value.scrollIntoView());
    }
  }), r(o2, (e3) => {
    e3 && (c2.value.togglePanel(true), c2.value.scrollIntoView());
  }), f(() => {
    s2();
  }), new BroadcastChannel(`windpress`).addEventListener(`message`, async (e3) => {
    let t2 = e3.data;
    t2.source === `windpress/intellisense` && t2.task === `windpress.code-editor.saved.done` && setTimeout(() => {
      s2();
    }, 1e3);
  }), (e3, r2) => (h(), u(`div`, Se, [t(I, { ref_key: `sectionColor`, ref: c2, namespace: `variable`, name: `color` }, { header: _(() => [...r2[0] || (r2[0] = [l(`span`, { class: `var-body-title` }, `Color`, -1)])]), default: _(() => [t(xe, { "variable-items": n2.value.colors }, null, 8, [`variable-items`])]), _: 1 }, 512), t(I, { ref_key: `sectionTypography`, ref: d2, namespace: `variable`, name: `typography` }, { header: _(() => [...r2[1] || (r2[1] = [l(`span`, { class: `var-body-title` }, `Typography`, -1)])]), default: _(() => [t(H, { "variable-items": n2.value.typography }, null, 8, [`variable-items`])]), _: 1 }, 512), t(I, { ref_key: `sectionSpacing`, ref: p2, namespace: `variable`, name: `spacing`, class: `` }, { header: _(() => [...r2[2] || (r2[2] = [l(`span`, { class: `var-body-title` }, `Sizing`, -1)])]), default: _(() => [t(H, { "variable-items": n2.value.sizing }, null, 8, [`variable-items`])]), _: 1 }, 512)]));
} }, [[`__scopeId`, `data-v-eb7aaefb`]]), we = { id: `windpressbricks-variable-app-container`, class: `wp-b-var-container` }, Te = D({ __name: `App`, setup(e2) {
  let n2 = i(`isOpen`);
  return (e3, r2) => s((h(), u(`div`, we, [t(N), (h(), b(m, null, { default: _(() => [t(Ce)]), _: 1 }))], 512)), [[ne, a(n2)]]);
} }, [[`__scopeId`, `data-v-517e011b`]]), W = document.createElement(`windpressbricks-variable-app`);
W.id = `windpressbricks-variable-app`, document.body.appendChild(W);
var G = x(false), K = x(null), q = x(null), J = x(null), Ee = x(0), Y = te(Te);
Y.config.globalProperties.windpressbricks = window.windpressbricks, Y.provide(`variableApp`, W), Y.provide(`isOpen`, G), Y.provide(`focusedInput`, K), Y.provide(`tempInputValue`, q), Y.provide(`recentColorPickerTarget`, J), Y.provide(`recentVariableSelectionTimestamp`, Ee), Y.use(se, { container: `#windpressbricks-variable-app` }), Y.component(`InlineSvg`, oe), Y.mount(`#windpressbricks-variable-app`);
function X(e2) {
  var _a;
  !e2.shiftKey || !e2.target || ((_a = document == null ? void 0 : document.getSelection()) == null ? void 0 : _a.removeAllRanges(), e2.preventDefault(), e2.stopPropagation(), K.value = e2.target, q.value = e2.target.value, G.value = true);
}
function Z(e2) {
  K.value = e2.target;
}
var De = [`div[data-control="number"]`, { selector: `div[data-control="text"]`, hasChild: [`#_flexBasis`, `#_overflow`, `#_gridTemplateColumns`, `#_gridTemplateRows`, `#_gridAutoColumns`, `#_gridAutoRows`, `#_objectPosition`, `[id^="raw-"]`] }];
function Q() {
  setTimeout(() => {
    De.forEach((e2) => {
      (typeof e2 == `string` ? [...document.querySelectorAll(e2)] : [...document.querySelectorAll(e2.selector)].filter((t2) => e2.hasChild.some((e3) => t2.querySelector(e3)))).forEach((e3) => {
        let t2 = e3.querySelector(`input[type='text']`);
        (t2 == null ? void 0 : t2.getAttribute(`windpressbricks-variable-app`)) !== `listened` && (t2 == null ? void 0 : t2.removeEventListener(`click`, X), t2 == null ? void 0 : t2.addEventListener(`click`, X), t2 == null ? void 0 : t2.removeEventListener(`focus`, Z), t2 == null ? void 0 : t2.addEventListener(`focus`, Z), t2 == null ? void 0 : t2.setAttribute(`windpressbricks-variable-app`, `listened`), t2 == null ? void 0 : t2.parentNode.setAttribute(`data-balloon`, `Shift + click to open the Variable Picker`), t2 == null ? void 0 : t2.parentNode.setAttribute(`data-balloon-pos`, `bottom-right`));
      });
    }), [...document.querySelectorAll(`.bricks-control-preview`)].filter((e2) => {
      var _a, _b;
      return ((_b = (_a = e2.closest(`.control-inner`)) == null ? void 0 : _a.querySelector(`label`)) == null ? void 0 : _b.getAttribute(`for`)) === `color`;
    }).forEach((e2) => {
      e2.addEventListener(`contextmenu`, (e3) => {
        var _a;
        !e3.shiftKey || !e3.target || (e3.preventDefault(), e3.stopPropagation(), (_a = document == null ? void 0 : document.getSelection()) == null ? void 0 : _a.removeAllRanges(), K.value = null, G.value = true, J.value = null, y(() => {
          J.value = e3.target;
        }));
      });
    });
  }, 100);
}
var $ = false;
me({ selector: `#bricks-panel-inner`, options: { subtree: true, childList: true }, callback() {
  $ || ($ = true, Q(), setTimeout(() => {
    $ = false;
  }, 100));
} }), Q(), document.addEventListener(`keydown`, (e2) => {
  e2.key === `Escape` && G.value && (G.value = false);
}), r(G, (e2) => {
  W.style.zIndex = e2 ? `calc(Infinity)` : `-1`;
}), E(`Module loaded!`, { module: `variable-picker` });
