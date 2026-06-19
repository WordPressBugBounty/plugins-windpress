import { $n as e, B as t, D as n, Dn as r, E as i, Gt as a, Ht as o, J as s, L as c, Lt as l, On as u, Q as d, Tn as f, Ut as p, Xt as m, b as h, bt as g, ct as _, er as v, et as y, fn as b, ft as x, g as S, gn as C, gt as w, h as T, k as E, mt as D, o as O, pn as k, qt as A, rt as j, tr as M, tt as N, un as P, v as F, vn as I, wt as L, xn as ee, xt as R, y as z, z as B } from "./runtime-core.esm-bundler-Ci9kEgM7.js";
import { c as V, l as H } from "./vue.runtime.esm-bundler-CWCE91rd.js";
import { C as U, D as W, E as te, G as ne, K as re, O as G, w as ie } from "./Button-CzGEASGR.js";
import { C as ae, E as oe, F as se, P as ce, S as le, T as ue, b as K, f as de, g as fe, j as pe, k as me, o as he, w as ge } from "./dist-D5YmEqpM.js";
import { C as _e, b as q, c as ve, d as ye, g as be, l as xe, m as Se, o as Ce, p as we, s as Te, u as Ee, v as De, x as J, y as Y } from "./Tooltip-CmrGYuQV.js";
import { n as X, r as Oe, t as ke } from "./VisuallyHiddenInput-BKQ13hRt.js";
function Ae(e2) {
  let t2 = S(() => u(e2)), n2 = S(() => new Intl.Collator(`en`, { usage: `search`, ...t2.value }));
  return { startsWith: (e3, t3) => t3.length === 0 ? true : (e3 = e3.normalize(`NFC`), t3 = t3.normalize(`NFC`), n2.value.compare(e3.slice(0, t3.length), t3) === 0), endsWith: (e3, t3) => t3.length === 0 ? true : (e3 = e3.normalize(`NFC`), t3 = t3.normalize(`NFC`), n2.value.compare(e3.slice(-t3.length), t3) === 0), contains: (e3, t3) => {
    if (t3.length === 0) return true;
    e3 = e3.normalize(`NFC`), t3 = t3.normalize(`NFC`);
    let r2 = 0, i2 = t3.length;
    for (; r2 + i2 <= e3.length; r2++) {
      let a2 = e3.slice(r2, r2 + i2);
      if (n2.value.compare(t3, a2) === 0) return true;
    }
    return false;
  } };
}
function Z(e2) {
  let t2 = _e({ dir: I(`ltr`) });
  return S(() => e2?.value || t2.dir?.value || `ltr`);
}
var je = [`INPUT`, `TEXTAREA`];
function Me(e2, t2, n2, r2 = {}) {
  if (!t2 || r2.enableIgnoredElement && je.includes(t2.nodeName)) return null;
  let { arrowKeyOptions: i2 = `both`, attributeName: a2 = `[data-reka-collection-item]`, itemsArray: o2 = [], loop: s2 = true, dir: c2 = `ltr`, preventScroll: l2 = true, focus: u2 = false } = r2, [d2, f2, p2, m2, h2, g2] = [e2.key === `ArrowRight`, e2.key === `ArrowLeft`, e2.key === `ArrowUp`, e2.key === `ArrowDown`, e2.key === `Home`, e2.key === `End`], _2 = p2 || m2, v2 = d2 || f2;
  if (!h2 && !g2 && (!_2 && !v2 || i2 === `vertical` && v2 || i2 === `horizontal` && _2)) return null;
  let y2 = n2 ? Array.from(n2.querySelectorAll(a2)) : o2;
  if (!y2.length) return null;
  l2 && e2.preventDefault();
  let b2 = null;
  return v2 || _2 ? b2 = Ne(y2, t2, { goForward: _2 ? m2 : c2 === `ltr` ? d2 : f2, loop: s2 }) : h2 ? b2 = y2.at(0) || null : g2 && (b2 = y2.at(-1) || null), u2 && b2?.focus(), b2;
}
function Ne(e2, t2, n2, r2 = e2.includes(t2) ? e2.length : e2.length + 1) {
  if (--r2 === 0) return null;
  let i2 = e2.indexOf(t2), a2;
  if (a2 = i2 === -1 ? n2.goForward ? 0 : e2.length - 1 : n2.goForward ? i2 + 1 : i2 - 1, !n2.loop && (a2 < 0 || a2 >= e2.length)) return null;
  let o2 = e2[(a2 + e2.length) % e2.length];
  return o2 ? o2.hasAttribute(`disabled`) && o2.getAttribute(`disabled`) !== `false` ? Ne(e2, o2, n2, r2) : o2 : null;
}
var Pe = function(e2) {
  return typeof document > `u` ? null : (Array.isArray(e2) ? e2[0] : e2).ownerDocument.body;
}, Fe = /* @__PURE__ */ new WeakMap(), Ie = /* @__PURE__ */ new WeakMap(), Le = {}, Re = 0, ze = function(e2) {
  return e2 && (e2.host || ze(e2.parentNode));
}, Be = function(e2, t2) {
  return t2.map(function(t3) {
    if (e2.contains(t3)) return t3;
    var n2 = ze(t3);
    return n2 && e2.contains(n2) ? n2 : (console.error(`aria-hidden`, t3, `in not contained inside`, e2, `. Doing nothing`), null);
  }).filter(function(e3) {
    return !!e3;
  });
}, Ve = function(e2, t2, n2, r2) {
  var i2 = Be(t2, Array.isArray(e2) ? e2 : [e2]);
  Le[n2] || (Le[n2] = /* @__PURE__ */ new WeakMap());
  var a2 = Le[n2], o2 = [], s2 = /* @__PURE__ */ new Set(), c2 = new Set(i2), l2 = function(e3) {
    !e3 || s2.has(e3) || (s2.add(e3), l2(e3.parentNode));
  };
  i2.forEach(l2);
  var u2 = function(e3) {
    !e3 || c2.has(e3) || Array.prototype.forEach.call(e3.children, function(e4) {
      if (s2.has(e4)) u2(e4);
      else try {
        var t3 = e4.getAttribute(r2), i3 = t3 !== null && t3 !== `false`, c3 = (Fe.get(e4) || 0) + 1, l3 = (a2.get(e4) || 0) + 1;
        Fe.set(e4, c3), a2.set(e4, l3), o2.push(e4), c3 === 1 && i3 && Ie.set(e4, true), l3 === 1 && e4.setAttribute(n2, `true`), i3 || e4.setAttribute(r2, `true`);
      } catch (t4) {
        console.error(`aria-hidden: cannot operate on `, e4, t4);
      }
    });
  };
  return u2(t2), s2.clear(), Re++, function() {
    o2.forEach(function(e3) {
      var t3 = Fe.get(e3) - 1, i3 = a2.get(e3) - 1;
      Fe.set(e3, t3), a2.set(e3, i3), t3 || (Ie.has(e3) || e3.removeAttribute(r2), Ie.delete(e3)), i3 || e3.removeAttribute(n2);
    }), Re--, Re || (Fe = /* @__PURE__ */ new WeakMap(), Fe = /* @__PURE__ */ new WeakMap(), Ie = /* @__PURE__ */ new WeakMap(), Le = {});
  };
}, He = function(e2, t2, n2) {
  n2 === void 0 && (n2 = `data-aria-hidden`);
  var r2 = Array.from(Array.isArray(e2) ? e2 : [e2]), i2 = t2 || Pe(e2);
  return i2 ? (r2.push.apply(r2, Array.from(i2.querySelectorAll(`[aria-live], script`))), Ve(r2, i2, n2, `aria-hidden`)) : function() {
    return null;
  };
};
function Ue(e2) {
  let t2;
  o(() => he(e2), (e3) => {
    let n2 = false;
    try {
      n2 = !!e3?.closest(`[popover]:not(:popover-open)`);
    } catch {
    }
    e3 && !n2 ? t2 = He(e3) : t2 && t2();
  }), x(() => {
    t2 && t2();
  });
}
function Q() {
  let e2 = document.activeElement;
  if (e2 == null) return null;
  for (; e2 != null && e2.shadowRoot != null && e2.shadowRoot.activeElement != null; ) e2 = e2.shadowRoot.activeElement;
  return e2;
}
var We = ae(() => I([]));
function Ge() {
  let e2 = We();
  return { add(t2) {
    let n2 = e2.value[0];
    t2 !== n2 && n2?.pause(), e2.value = Ke(e2.value, t2), e2.value.unshift(t2);
  }, remove(t2) {
    e2.value = Ke(e2.value, t2), e2.value[0]?.resume();
  } };
}
function Ke(e2, t2) {
  let n2 = [...e2], r2 = n2.indexOf(t2);
  return r2 !== -1 && n2.splice(r2, 1), n2;
}
var qe = `focusScope.autoFocusOnMount`, Je = `focusScope.autoFocusOnUnmount`, Ye = { bubbles: false, cancelable: true };
function Xe(e2, { select: t2 = false } = {}) {
  let n2 = Q();
  for (let r2 of e2) if (nt(r2, { select: t2 }), Q() !== n2) return true;
}
function Ze(e2) {
  let t2 = Qe(e2);
  return [$e(t2, e2), $e(t2.reverse(), e2)];
}
function Qe(e2) {
  let t2 = [], n2 = document.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, { acceptNode: (e3) => {
    let t3 = e3.tagName === `INPUT` && e3.type === `hidden`;
    return e3.disabled || e3.hidden || t3 ? NodeFilter.FILTER_SKIP : e3.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n2.nextNode(); ) t2.push(n2.currentNode);
  return t2;
}
function $e(e2, t2) {
  for (let n2 of e2) if (!et(n2, { upTo: t2 })) return n2;
}
function et(e2, { upTo: t2 }) {
  if (getComputedStyle(e2).visibility === `hidden`) return true;
  for (; e2; ) {
    if (t2 !== void 0 && e2 === t2) return false;
    if (getComputedStyle(e2).display === `none`) return true;
    e2 = e2.parentElement;
  }
  return false;
}
function tt(e2) {
  return e2 instanceof HTMLInputElement && `select` in e2;
}
function nt(e2, { select: t2 = false } = {}) {
  if (e2 && e2.focus) {
    let n2 = Q();
    e2.focus({ preventScroll: true }), e2 !== n2 && tt(e2) && t2 && e2.select();
  }
}
var rt = E({ __name: `FocusScope`, props: { loop: { type: Boolean, required: false, default: false }, trapped: { type: Boolean, required: false, default: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`mountAutoFocus`, `unmountAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, { currentRef: i2, currentElement: a2 } = q(), o2 = I(null), s2 = Ge(), c2 = C({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } });
  p((e3) => {
    if (!ue) return;
    let t3 = a2.value;
    if (!n2.trapped) return;
    function r3(e4) {
      if (c2.paused || !t3) return;
      let n3 = e4.target;
      t3.contains(n3) ? o2.value = n3 : nt(o2.value, { select: true });
    }
    function i3(e4) {
      if (c2.paused || !t3) return;
      let n3 = e4.relatedTarget;
      n3 !== null && (t3.contains(n3) || nt(o2.value, { select: true }));
    }
    function s3(e4) {
      let n3 = o2.value;
      n3 !== null && e4.some((e5) => e5.removedNodes.length > 0) && (t3.contains(n3) || nt(t3));
    }
    document.addEventListener(`focusin`, r3), document.addEventListener(`focusout`, i3);
    let l3 = new MutationObserver(s3);
    t3 && l3.observe(t3, { childList: true, subtree: true }), e3(() => {
      document.removeEventListener(`focusin`, r3), document.removeEventListener(`focusout`, i3), l3.disconnect();
    });
  }), p(async (e3) => {
    let t3 = a2.value;
    if (await N(), !t3) return;
    s2.add(c2);
    let n3 = Q();
    if (!t3.contains(n3)) {
      let e4 = new CustomEvent(qe, Ye);
      t3.addEventListener(qe, (e5) => r2(`mountAutoFocus`, e5)), t3.dispatchEvent(e4), e4.defaultPrevented || (Xe(Qe(t3), { select: true }), Q() === n3 && nt(t3));
    }
    e3(() => {
      t3.removeEventListener(qe, (e5) => r2(`mountAutoFocus`, e5));
      let e4 = new CustomEvent(Je, Ye), i3 = (e5) => {
        r2(`unmountAutoFocus`, e5);
      };
      t3.addEventListener(Je, i3), t3.dispatchEvent(e4), t3.setAttribute(`data-focus-scope-unmounting`, ``), setTimeout(() => {
        e4.defaultPrevented || nt(n3 ?? document.body, { select: true }), t3.removeEventListener(Je, i3), s2.remove(c2), t3.removeAttribute(`data-focus-scope-unmounting`);
      }, 0);
    });
  });
  function l2(e3) {
    if (!n2.loop && !n2.trapped || c2.paused) return;
    let t3 = e3.key === `Tab` && !e3.altKey && !e3.ctrlKey && !e3.metaKey, r3 = Q();
    if (t3 && r3) {
      let t4 = e3.currentTarget, [i3, a3] = Ze(t4);
      i3 && a3 ? !e3.shiftKey && r3 === a3 ? (e3.preventDefault(), n2.loop && nt(i3, { select: true })) : e3.shiftKey && r3 === i3 && (e3.preventDefault(), n2.loop && nt(a3, { select: true })) : r3 === t4 && e3.preventDefault();
    }
  }
  return (e3, t3) => (D(), F(u(U), { ref_key: `currentRef`, ref: i2, tabindex: `-1`, "as-child": e3.asChild, as: e3.as, onKeydown: l2 }, { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 8, [`as-child`, `as`]));
} }), it = `menu.itemSelect`, at = [`Enter`, ` `], ot = [`ArrowDown`, `PageUp`, `Home`], st = [`ArrowUp`, `PageDown`, `End`], ct = [...ot, ...st], lt = { ltr: [...at, `ArrowRight`], rtl: [...at, `ArrowLeft`] }, ut = { ltr: [`ArrowLeft`], rtl: [`ArrowRight`] };
function dt(e2) {
  return e2 ? `open` : `closed`;
}
function ft(e2) {
  return e2 === `indeterminate`;
}
function pt(e2) {
  return ft(e2) ? `indeterminate` : e2 ? `checked` : `unchecked`;
}
function mt(e2) {
  let t2 = Q();
  for (let n2 of e2) if (n2 === t2 || (n2.focus(), Q() !== t2)) return;
}
function ht(e2, t2) {
  let { x: n2, y: r2 } = e2, i2 = false;
  for (let e3 = 0, a2 = t2.length - 1; e3 < t2.length; a2 = e3++) {
    let o2 = t2[e3].x, s2 = t2[e3].y, c2 = t2[a2].x, l2 = t2[a2].y;
    s2 > r2 != l2 > r2 && n2 < (c2 - o2) * (r2 - s2) / (l2 - s2) + o2 && (i2 = !i2);
  }
  return i2;
}
function gt(e2, t2) {
  return t2 ? ht({ x: e2.clientX, y: e2.clientY }, t2) : false;
}
function _t(e2) {
  return e2.pointerType === `mouse`;
}
var vt = ge(() => {
  let e2 = I(/* @__PURE__ */ new Map()), t2 = I(), n2 = S(() => {
    for (let t3 of e2.value.values()) if (t3) return true;
    return false;
  }), r2 = _e({ scrollBody: I(true) }), i2 = null, a2 = () => {
    document.body.style.paddingRight = ``, document.body.style.marginRight = ``, document.body.style.pointerEvents = ``, document.documentElement.style.removeProperty(`--scrollbar-width`), document.body.style.overflow = t2.value ?? ``, oe && i2?.(), t2.value = void 0;
  };
  return o(n2, (e3, o2) => {
    if (!ue) return;
    if (!e3) {
      o2 && a2();
      return;
    }
    t2.value === void 0 && (t2.value = document.body.style.overflow);
    let s2 = window.innerWidth - document.documentElement.clientWidth, c2 = { padding: s2, margin: 0 }, l2 = r2.scrollBody?.value ? typeof r2.scrollBody.value == `object` ? re({ padding: r2.scrollBody.value.padding === true ? s2 : r2.scrollBody.value.padding, margin: r2.scrollBody.value.margin === true ? s2 : r2.scrollBody.value.margin }, c2) : c2 : { padding: 0, margin: 0 };
    s2 > 0 && (document.body.style.paddingRight = typeof l2.padding == `number` ? `${l2.padding}px` : String(l2.padding), document.body.style.marginRight = typeof l2.margin == `number` ? `${l2.margin}px` : String(l2.margin), document.documentElement.style.setProperty(`--scrollbar-width`, `${s2}px`), document.body.style.overflow = `hidden`), oe && (i2 = de(document, `touchmove`, (e4) => xt(e4), { passive: false })), N(() => {
      n2.value && (document.body.style.pointerEvents = `none`, document.body.style.overflow = `hidden`);
    });
  }, { immediate: true, flush: `sync` }), e2;
});
function yt(e2) {
  let t2 = Math.random().toString(36).substring(2, 7), n2 = vt();
  n2.value.set(t2, e2 ?? false);
  let r2 = S({ get: () => n2.value.get(t2) ?? false, set: (e3) => n2.value.set(t2, e3) });
  return se(() => {
    n2.value.delete(t2);
  }), r2;
}
function bt(e2) {
  let t2 = window.getComputedStyle(e2);
  if (t2.overflowX === `scroll` || t2.overflowY === `scroll` || t2.overflowX === `auto` && e2.clientWidth < e2.scrollWidth || t2.overflowY === `auto` && e2.clientHeight < e2.scrollHeight) return true;
  {
    let t3 = e2.parentNode;
    return !(t3 instanceof Element) || t3.tagName === `BODY` ? false : bt(t3);
  }
}
function xt(e2) {
  let t2 = e2 || window.event, n2 = t2.target;
  return n2 instanceof Element && bt(n2) ? false : t2.touches.length > 1 ? true : (t2.preventDefault && t2.cancelable && t2.preventDefault(), false);
}
function St(e2, t2, n2) {
  let r2 = e2.findIndex((e3) => ne(e3, t2)), i2 = e2.findIndex((e3) => ne(e3, n2));
  if (r2 === -1 || i2 === -1) return [];
  let [a2, o2] = [r2, i2].sort((e3, t3) => e3 - t3);
  return e2.slice(a2, o2 + 1);
}
function Ct() {
  return { ALT: `Alt`, ARROW_DOWN: `ArrowDown`, ARROW_LEFT: `ArrowLeft`, ARROW_RIGHT: `ArrowRight`, ARROW_UP: `ArrowUp`, BACKSPACE: `Backspace`, CAPS_LOCK: `CapsLock`, CONTROL: `Control`, DELETE: `Delete`, END: `End`, ENTER: `Enter`, ESCAPE: `Escape`, F1: `F1`, F10: `F10`, F11: `F11`, F12: `F12`, F2: `F2`, F3: `F3`, F4: `F4`, F5: `F5`, F6: `F6`, F7: `F7`, F8: `F8`, F9: `F9`, HOME: `Home`, META: `Meta`, PAGE_DOWN: `PageDown`, PAGE_UP: `PageUp`, SHIFT: `Shift`, SPACE: ` `, TAB: `Tab`, CTRL: `Control`, ASTERISK: `*`, SPACE_CODE: `Space` };
}
function wt(e2) {
  let t2 = pe(``, 1e3);
  return { search: t2, handleTypeaheadSearch: (n2, r2) => {
    if (t2.value += n2, e2) e2(n2);
    else {
      let e3 = Q(), n3 = r2.map((e4) => ({ ...e4, textValue: e4.value?.textValue ?? e4.ref.textContent?.trim() ?? `` })), i2 = n3.find((t3) => t3.ref === e3), a2 = Et(n3.map((e4) => e4.textValue), t2.value, i2?.textValue), o2 = n3.find((e4) => e4.textValue === a2);
      return o2 && o2.ref.focus(), o2?.ref;
    }
  }, resetTypeahead: () => {
    t2.value = ``;
  } };
}
function Tt(e2, t2) {
  return e2.map((n2, r2) => e2[(t2 + r2) % e2.length]);
}
function Et(e2, t2, n2) {
  let r2 = t2.length > 1 && Array.from(t2).every((e3) => e3 === t2[0]) ? t2[0] : t2, i2 = n2 ? e2.indexOf(n2) : -1, a2 = Tt(e2, Math.max(i2, 0));
  r2.length === 1 && (a2 = a2.filter((e3) => e3 !== n2));
  let o2 = a2.find((e3) => e3.toLowerCase().startsWith(r2.toLowerCase()));
  return o2 === n2 ? void 0 : o2;
}
var Dt = `data-reka-collection-item`;
function Ot(e2 = {}) {
  let { key: n2 = ``, isProvider: r2 = false } = e2, i2 = `${n2}CollectionProvider`, a2;
  if (r2) {
    let e3 = I(/* @__PURE__ */ new Map());
    a2 = { collectionRef: I(), itemMap: e3 }, w(i2, a2);
  } else a2 = s(i2);
  let c2 = (e3 = false) => {
    let t2 = a2.collectionRef.value;
    if (!t2) return [];
    let n3 = Array.from(t2.querySelectorAll(`[${Dt}]`)), r3 = Array.from(a2.itemMap.value.values()).sort((e4, t3) => n3.indexOf(e4.ref) - n3.indexOf(t3.ref));
    return e3 ? r3 : r3.filter((e4) => e4.ref.dataset.disabled !== ``);
  }, l2 = E({ name: `CollectionSlot`, inheritAttrs: false, setup(e3, { slots: n3, attrs: r3 }) {
    let { primitiveElement: i3, currentElement: s2 } = X();
    return o(s2, () => {
      a2.collectionRef.value = s2.value;
    }), () => t(ie, { ref: i3, ...r3 }, n3);
  } }), u2 = E({ name: `CollectionItem`, inheritAttrs: false, props: { value: { validator: () => true } }, setup(e3, { slots: n3, attrs: r3 }) {
    let { primitiveElement: i3, currentElement: o2 } = X();
    return p((t2) => {
      if (o2.value) {
        let n4 = b(o2.value);
        a2.itemMap.value.set(n4, { ref: o2.value, value: e3.value }), t2(() => a2.itemMap.value.delete(n4));
      }
    }), () => t(ie, { ...r3, [Dt]: ``, ref: i3 }, n3);
  } });
  return { getItems: c2, reactiveItems: S(() => Array.from(a2.itemMap.value.values())), itemMapSize: S(() => a2.itemMap.value.size), CollectionSlot: l2, CollectionItem: u2 };
}
function kt(e2) {
  return e2?.querySelector(`[data-state=checked]`);
}
function At(e2, t2, n2) {
  return e2 === void 0 ? false : Array.isArray(e2) ? e2.some((e3) => jt(e3, t2, n2)) : jt(e2, t2, n2);
}
function jt(e2, t2, n2) {
  return e2 === void 0 || t2 === void 0 ? false : typeof e2 == `string` ? e2 === t2 : typeof n2 == `function` ? n2(e2, t2) : typeof n2 == `string` ? e2?.[n2] === t2?.[n2] : ne(e2, t2);
}
var Mt = `rovingFocusGroup.onEntryFocus`, Nt = { bubbles: false, cancelable: true }, Pt = { ArrowLeft: `prev`, ArrowUp: `prev`, ArrowRight: `next`, ArrowDown: `next`, PageUp: `first`, Home: `first`, PageDown: `last`, End: `last` };
function Ft(e2, t2) {
  return t2 === `rtl` ? e2 === `ArrowLeft` ? `ArrowRight` : e2 === `ArrowRight` ? `ArrowLeft` : e2 : e2;
}
function It(e2, t2, n2) {
  let r2 = Ft(e2.key, n2);
  if (!(t2 === `vertical` && [`ArrowLeft`, `ArrowRight`].includes(r2)) && !(t2 === `horizontal` && [`ArrowUp`, `ArrowDown`].includes(r2))) return Pt[r2];
}
function Lt(e2, t2 = false) {
  let n2 = Q();
  for (let r2 of e2) if (r2 === n2 || (r2.focus({ preventScroll: t2 }), Q() !== n2)) return;
}
function Rt(e2, t2) {
  return e2.map((n2, r2) => e2[(t2 + r2) % e2.length]);
}
var [zt, Bt] = G(`ListboxRoot`), Vt = E({ __name: `ListboxRoot`, props: { modelValue: { type: null, required: false }, defaultValue: { type: null, required: false }, multiple: { type: Boolean, required: false }, orientation: { type: String, required: false, default: `vertical` }, dir: { type: String, required: false }, disabled: { type: Boolean, required: false }, selectionBehavior: { type: String, required: false, default: `toggle` }, highlightOnHover: { type: Boolean, required: false }, by: { type: [String, Function], required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, name: { type: String, required: false }, required: { type: Boolean, required: false } }, emits: [`update:modelValue`, `highlight`, `entryFocus`, `leave`], setup(e2, { expose: t2, emit: n2 }) {
  let r2 = e2, i2 = n2, { multiple: a2, highlightOnHover: s2, orientation: c2, disabled: l2, selectionBehavior: d2, dir: p2 } = f(r2), { getItems: m2 } = Ot({ isProvider: true }), { handleTypeaheadSearch: h2 } = wt(), { primitiveElement: g2, currentElement: _2 } = X(), v2 = Ct(), y2 = Z(p2), b2 = Oe(_2), x2 = I(), S2 = I(false), C2 = I(true), w2 = K(r2, `modelValue`, i2, { defaultValue: r2.defaultValue ?? (a2.value ? [] : void 0), passive: r2.modelValue === void 0, deep: true });
  function T2(e3) {
    if (S2.value = true, r2.multiple) {
      let t3 = Array.isArray(w2.value) ? [...w2.value] : [], n3 = t3.findIndex((t4) => jt(t4, e3, r2.by));
      r2.selectionBehavior === `toggle` ? (n3 === -1 ? t3.push(e3) : t3.splice(n3, 1), w2.value = t3) : (w2.value = [e3], x2.value = e3);
    } else r2.selectionBehavior === `toggle` && jt(w2.value, e3, r2.by) ? w2.value = void 0 : w2.value = e3;
    setTimeout(() => {
      S2.value = false;
    }, 1);
  }
  let E2 = I(null), O2 = I(null), k2 = I(false), j2 = I(false), M2 = le(), P2 = le(), L2 = le();
  function ee2() {
    return m2().map((e3) => e3.ref).filter((e3) => e3.dataset.disabled !== ``);
  }
  function B2(e3, t3 = true, n3) {
    e3 && (E2.value = e3, (n3 ?? C2.value) && E2.value.focus(), t3 && E2.value.scrollIntoView({ block: `nearest` }), i2(`highlight`, m2().find((t4) => t4.ref === e3)));
  }
  function V2(e3) {
    if (k2.value) L2.trigger(e3);
    else {
      let t3 = m2().find((t4) => jt(t4.value, e3, r2.by));
      t3 && (E2.value = t3.ref, B2(t3.ref));
    }
  }
  function H2(e3) {
    E2.value && E2.value.isConnected && (e3.preventDefault(), e3.stopPropagation(), j2.value || E2.value.click());
  }
  function W2(e3) {
    if (C2.value) {
      if (S2.value = true, k2.value) P2.trigger(e3);
      else {
        let t3 = e3.altKey || e3.ctrlKey || e3.metaKey;
        if (t3 && e3.key === `a` && a2.value) {
          let t4 = m2();
          w2.value = [...t4.map((e4) => e4.value)], e3.preventDefault();
          let n3 = t4.at(-1);
          n3 && B2(n3.ref);
        } else if (!t3) {
          let t4 = h2(e3.key, m2());
          t4 && B2(t4);
        }
      }
      setTimeout(() => {
        S2.value = false;
      }, 1);
    }
  }
  function te2() {
    j2.value = true;
  }
  function ne2() {
    N(() => {
      j2.value = false;
    });
  }
  function re2() {
    N(() => {
      ae2(new KeyboardEvent(`keydown`, { key: `PageUp` }));
    });
  }
  function G2(e3) {
    let t3 = E2.value;
    t3?.isConnected && (O2.value = t3), E2.value = null, i2(`leave`, e3);
  }
  function ie2(e3) {
    let t3 = new CustomEvent(`listbox.entryFocus`, { bubbles: false, cancelable: true });
    if (e3.currentTarget?.dispatchEvent(t3), i2(`entryFocus`, t3), !t3.defaultPrevented) if (O2.value) B2(O2.value);
    else {
      let e4 = ee2()?.[0];
      B2(e4);
    }
  }
  function ae2(e3) {
    let t3 = It(e3, c2.value, y2.value);
    if (!t3) return;
    let n3 = ee2();
    if (E2.value) {
      if (t3 === `last`) n3.reverse();
      else if (t3 === `prev` || t3 === `next`) {
        t3 === `prev` && n3.reverse();
        let e4 = n3.indexOf(E2.value);
        n3 = n3.slice(e4 + 1);
      }
      oe2(e3, n3[0]);
    }
    if (n3.length) {
      let e4 = !E2.value && t3 === `prev` ? n3.length - 1 : 0;
      B2(n3[e4]);
    }
    if (k2.value) return P2.trigger(e3);
  }
  function oe2(e3, t3) {
    if (!(k2.value || r2.selectionBehavior !== `replace` || !a2.value || !Array.isArray(w2.value)) && !((e3.altKey || e3.ctrlKey || e3.metaKey) && !e3.shiftKey) && e3.shiftKey) {
      let n3 = m2().filter((e4) => e4.ref.dataset.disabled !== ``), r3 = n3.find((e4) => e4.ref === t3)?.value;
      if (e3.key === v2.END ? r3 = n3.at(-1)?.value : e3.key === v2.HOME && (r3 = n3[0]?.value), !r3 || !x2.value) return;
      w2.value = St(n3.map((e4) => e4.value), x2.value, r3);
    }
  }
  async function se2(e3, t3 = true) {
    if (ue) if (await N(), k2.value) M2.trigger({ event: e3, scroll: t3 });
    else {
      let e4 = ee2(), n3 = e4.find((e5) => e5.dataset.state === `checked`), r3 = t3 ? void 0 : false;
      n3 ? B2(n3, t3, r3) : e4.length && B2(e4[0], t3, r3);
    }
  }
  let ce2 = false;
  return o(w2, () => {
    if (!S2.value) {
      let e3 = ce2;
      ce2 = true, N(() => {
        se2(void 0, e3);
      });
    }
  }, { immediate: true, deep: true }), t2({ highlightedElement: E2, highlightItem: V2, highlightFirstItem: re2, highlightSelected: se2, getItems: m2 }), Bt({ modelValue: w2, onValueChange: T2, multiple: a2, orientation: c2, dir: y2, disabled: l2, highlightOnHover: s2, highlightedElement: E2, isVirtual: k2, virtualFocusHook: M2, virtualKeydownHook: P2, virtualHighlightHook: L2, by: r2.by, firstValue: x2, selectionBehavior: d2, focusable: C2, onLeave: G2, onEnter: ie2, changeHighlight: B2, onKeydownEnter: H2, onKeydownNavigation: ae2, onKeydownTypeAhead: W2, onCompositionStart: te2, onCompositionEnd: ne2, highlightFirstItem: re2 }), (e3, t3) => (D(), F(u(U), { ref_key: `primitiveElement`, ref: g2, as: e3.as, "as-child": e3.asChild, dir: u(y2), "data-disabled": u(l2) ? `` : void 0, onPointerleave: G2, onFocusout: t3[0] || (t3[0] = async (e4) => {
    let t4 = e4.relatedTarget || e4.target;
    await N(), E2.value && u(_2) && !u(_2).contains(t4) && G2(e4);
  }) }, { default: A(() => [R(e3.$slots, `default`, { modelValue: u(w2) }), u(b2) && e3.name ? (D(), F(u(ke), { key: 0, name: e3.name, value: u(w2), disabled: u(l2), required: e3.required }, null, 8, [`name`, `value`, `disabled`, `required`])) : z(`v-if`, true)]), _: 3 }, 8, [`as`, `as-child`, `dir`, `data-disabled`]));
} }), Ht = E({ __name: `ListboxContent`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let { CollectionSlot: t2 } = Ot(), r2 = zt(), i2 = pe(false, 10);
  return (e3, a2) => (D(), F(u(t2), null, { default: A(() => [n(u(U), { role: `listbox`, as: e3.as, "as-child": e3.asChild, tabindex: u(r2).focusable.value ? u(r2).highlightedElement.value ? `-1` : `0` : `-1`, "aria-orientation": u(r2).orientation.value, "aria-multiselectable": !!u(r2).multiple.value, "data-orientation": u(r2).orientation.value, onMousedown: a2[0] || (a2[0] = H((e4) => i2.value = true, [`left`])), onFocus: a2[1] || (a2[1] = (e4) => {
    u(i2) || u(r2).onEnter(e4);
  }), onKeydown: [a2[2] || (a2[2] = V((e4) => {
    u(r2).orientation.value === `vertical` && (e4.key === `ArrowLeft` || e4.key === `ArrowRight`) || u(r2).orientation.value === `horizontal` && (e4.key === `ArrowUp` || e4.key === `ArrowDown`) || (e4.preventDefault(), u(r2).focusable.value && u(r2).onKeydownNavigation(e4));
  }, [`down`, `up`, `left`, `right`, `home`, `end`])), V(u(r2).onKeydownEnter, [`enter`]), u(r2).onKeydownTypeAhead] }, { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 8, [`as`, `as-child`, `tabindex`, `aria-orientation`, `aria-multiselectable`, `data-orientation`, `onKeydown`])]), _: 3 }));
} });
function Ut(e2) {
  let t2 = I(false);
  function n2() {
    t2.value = true;
  }
  function r2(n3) {
    N(() => {
      t2.value = false, e2?.(n3);
    });
  }
  return { isComposing: t2, handleCompositionStart: n2, handleCompositionEnd: r2 };
}
var Wt = E({ __name: `ListboxFilter`, props: { modelValue: { type: String, required: false }, autoFocus: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `input` } }, emits: [`update:modelValue`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = K(n2, `modelValue`, t2, { defaultValue: ``, passive: n2.modelValue === void 0 }), i2 = zt(), { primitiveElement: o2, currentElement: s2 } = X(), c2 = S(() => n2.disabled || i2.disabled.value || false), l2 = I();
  a(() => l2.value = i2.highlightedElement.value?.id), _(() => {
    i2.focusable.value = false, setTimeout(() => {
      n2.autoFocus && s2.value?.focus();
    }, 1);
  }), x(() => {
    i2.focusable.value = true;
  });
  let { isComposing: d2, handleCompositionStart: f2, handleCompositionEnd: p2 } = Ut((e3) => {
    r2.value = e3.target.value, i2.onCompositionEnd(), i2.highlightFirstItem();
  });
  function m2() {
    i2.onCompositionStart(), f2();
  }
  function h2(e3) {
    d2.value || (r2.value = e3.target.value, i2.highlightFirstItem());
  }
  function g2(e3) {
    d2.value || (e3.preventDefault(), i2.onKeydownNavigation(e3));
  }
  function v2(e3) {
    d2.value || i2.onKeydownEnter(e3);
  }
  return (e3, t3) => (D(), F(u(U), { ref_key: `primitiveElement`, ref: o2, as: e3.as, "as-child": e3.asChild, value: u(r2), disabled: c2.value ? `` : void 0, "data-disabled": c2.value ? `` : void 0, "aria-disabled": c2.value ?? void 0, "aria-activedescendant": l2.value, type: `text`, onKeydown: [V(g2, [`down`, `up`, `home`, `end`]), V(v2, [`enter`])], onInput: h2, onCompositionstart: m2, onCompositionend: u(p2) }, { default: A(() => [R(e3.$slots, `default`, { modelValue: u(r2) })]), _: 3 }, 8, [`as`, `as-child`, `value`, `disabled`, `data-disabled`, `aria-disabled`, `aria-activedescendant`, `onCompositionend`]));
} }), [Gt, Kt] = G(`ListboxGroup`), qt = E({ __name: `ListboxGroup`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2, n2 = Y(void 0, `reka-listbox-group`);
  return Kt({ id: n2 }), (e3, r2) => (D(), F(u(U), y({ role: `group` }, t2, { "aria-labelledby": u(n2) }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`aria-labelledby`]));
} }), Jt = `listbox.select`, [Yt, Xt] = G(`ListboxItem`), Zt = E({ __name: `ListboxItem`, props: { value: { type: null, required: true }, disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `div` } }, emits: [`select`], setup(e2, { emit: t2 }) {
  let r2 = e2, i2 = t2, a2 = Y(void 0, `reka-listbox-item`), { CollectionItem: o2 } = Ot(), { forwardRef: s2, currentElement: c2 } = q(), l2 = zt(), d2 = S(() => c2.value != null && c2.value === l2.highlightedElement.value), f2 = S(() => At(l2.modelValue.value, r2.value, l2.by)), p2 = S(() => l2.disabled.value || r2.disabled);
  async function h2(e3) {
    i2(`select`, e3), !e3?.defaultPrevented && !p2.value && e3 && (l2.onValueChange(r2.value), l2.changeHighlight(c2.value));
  }
  function g2(e3) {
    be(Jt, h2, { originalEvent: e3, value: r2.value });
  }
  return Xt({ isSelected: f2 }), (e3, t3) => (D(), F(u(o2), { value: e3.value }, { default: A(() => [m([d2.value, f2.value, p2.value, u(l2).focusable.value], () => n(u(U), y({ id: u(a2) }, e3.$attrs, { ref: u(s2), role: `option`, tabindex: u(l2).focusable.value ? d2.value ? `0` : `-1` : -1, "aria-selected": f2.value, as: e3.as, "as-child": e3.asChild, disabled: p2.value ? `` : void 0, "data-disabled": p2.value ? `` : void 0, "data-highlighted": d2.value ? `` : void 0, "data-state": f2.value ? `checked` : `unchecked`, onClick: g2, onKeydown: V(H(g2, [`prevent`]), [`space`]), onPointermove: t3[0] || (t3[0] = () => {
    u(l2).highlightedElement.value !== u(c2) && u(l2).highlightOnHover.value && u(l2).changeHighlight(u(c2), false, false);
  }) }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`id`, `tabindex`, `aria-selected`, `as`, `as-child`, `disabled`, `data-disabled`, `data-highlighted`, `data-state`, `onKeydown`]), t3, 1)]), _: 3 }, 8, [`value`]));
} }), Qt = E({ __name: `ListboxItemIndicator`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `span` } }, setup(e2) {
  let t2 = e2;
  q();
  let n2 = Yt();
  return (e3, r2) => u(n2).isSelected.value ? (D(), F(u(U), y({ key: 0, "aria-hidden": `true` }, t2), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16)) : z(`v-if`, true);
} });
function $t(e2, t2, n2) {
  let r2 = Array(e2);
  return new Proxy(r2, { get(r3, i2, a2) {
    if (typeof i2 == `string`) {
      let a3 = i2.charCodeAt(0);
      if (a3 >= 48 && a3 <= 57) {
        let a4 = +i2;
        if (Number.isInteger(a4) && a4 >= 0 && a4 < e2) {
          let e3 = r3[a4];
          if (!e3) {
            let i3 = t2[a4 * 2];
            e3 = r3[a4] = { index: a4, key: n2(a4), start: i3, size: t2[a4 * 2 + 1], end: i3 + t2[a4 * 2 + 1], lane: 0 };
          }
          return e3;
        }
      }
      if (i2 === `length`) return e2;
    }
    return Reflect.get(r3, i2, a2);
  } });
}
function en(e2, t2, n2) {
  let r2 = n2.initialDeps ?? [], i2, a2 = true;
  function o2() {
    let o3 = e2();
    return o3.length !== r2.length || o3.some((e3, t3) => r2[t3] !== e3) ? (r2 = o3, i2 = t2(...o3), n2?.onChange && !(a2 && n2.skipInitialOnChange) && n2.onChange(i2), a2 = false, i2) : i2;
  }
  return o2.updateDeps = (e3) => {
    r2 = e3;
  }, o2;
}
function tn(e2, t2) {
  if (e2 === void 0) throw Error(`Unexpected undefined${t2 ? `: ${t2}` : ``}`);
  return e2;
}
var nn = (e2, t2) => Math.abs(e2 - t2) < 1.01, rn = (e2, t2, n2) => {
  let r2;
  return function(...i2) {
    e2.clearTimeout(r2), r2 = e2.setTimeout(() => t2.apply(this, i2), n2);
  };
}, an, on = () => {
  if (an !== void 0) return an;
  if (typeof navigator > `u`) return an = false;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return an = true;
  let e2 = navigator.maxTouchPoints;
  return an = navigator.platform === `MacIntel` && e2 !== void 0 && e2 > 0;
}, sn = (e2) => {
  let { offsetWidth: t2, offsetHeight: n2 } = e2;
  return { width: t2, height: n2 };
}, cn = (e2) => e2, ln = (e2) => {
  let t2 = Math.max(e2.startIndex - e2.overscan, 0), n2 = Math.min(e2.endIndex + e2.overscan, e2.count - 1) - t2 + 1, r2 = Array(n2);
  for (let e3 = 0; e3 < n2; e3++) r2[e3] = t2 + e3;
  return r2;
}, un = (e2, t2) => {
  let n2 = e2.scrollElement;
  if (!n2) return;
  let r2 = e2.targetWindow;
  if (!r2) return;
  let i2 = (e3) => {
    let { width: n3, height: r3 } = e3;
    t2({ width: Math.round(n3), height: Math.round(r3) });
  };
  if (i2(sn(n2)), !r2.ResizeObserver) return () => {
  };
  let a2 = new r2.ResizeObserver((t3) => {
    let r3 = () => {
      let e3 = t3[0];
      if (e3?.borderBoxSize) {
        let t4 = e3.borderBoxSize[0];
        if (t4) {
          i2({ width: t4.inlineSize, height: t4.blockSize });
          return;
        }
      }
      i2(sn(n2));
    };
    e2.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(r3) : r3();
  });
  return a2.observe(n2, { box: `border-box` }), () => {
    a2.unobserve(n2);
  };
}, dn = { passive: true }, fn = typeof window > `u` ? true : `onscrollend` in window, pn = (e2, t2, n2) => {
  let r2 = e2.scrollElement;
  if (!r2) return;
  let i2 = e2.targetWindow;
  if (!i2) return;
  let a2 = e2.options.useScrollendEvent && fn, o2 = 0, s2 = a2 ? null : rn(i2, () => t2(o2, false), e2.options.isScrollingResetDelay), c2 = (e3) => () => {
    o2 = n2(r2), s2?.(), t2(o2, e3);
  }, l2 = c2(true), u2 = c2(false);
  return r2.addEventListener(`scroll`, l2, dn), a2 && r2.addEventListener(`scrollend`, u2, dn), () => {
    r2.removeEventListener(`scroll`, l2), a2 && r2.removeEventListener(`scrollend`, u2);
  };
}, mn = (e2, t2) => pn(e2, t2, (t3) => {
  let { horizontal: n2, isRtl: r2 } = e2.options;
  return n2 ? t3.scrollLeft * (r2 && -1 || 1) : t3.scrollTop;
}), hn = (e2, t2, n2) => {
  if (n2.options.useCachedMeasurements) {
    let t3 = n2.indexFromElement(e2), r2 = n2.options.getItemKey(t3);
    return n2.itemSizeCache.get(r2) ?? n2.options.estimateSize(t3);
  }
  if (t2?.borderBoxSize) {
    let e3 = t2.borderBoxSize[0];
    if (e3) return Math.round(e3[n2.options.horizontal ? `inlineSize` : `blockSize`]);
  }
  if (!t2) {
    let t3 = n2.indexFromElement(e2), r2 = n2.options.getItemKey(t3), i2 = n2.itemSizeCache.get(r2);
    if (i2 !== void 0) return i2;
  }
  return e2[n2.options.horizontal ? `offsetWidth` : `offsetHeight`];
}, gn = (e2, { adjustments: t2 = 0, behavior: n2 }, r2) => {
  var i2, a2;
  (a2 = (i2 = r2.scrollElement)?.scrollTo) == null || a2.call(i2, { [r2.options.horizontal ? `left` : `top`]: e2 + t2, behavior: n2 });
}, _n = class {
  constructor(e2) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = false, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = false, this.lanesSettling = false, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = false, this._iosJustTouchEnded = false, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var e3;
      return (e3 = this.targetWindow?.performance)?.now?.call(e3) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let e3 = null, t2 = () => e3 || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e3 = new this.targetWindow.ResizeObserver((e4) => {
        e4.forEach((e5) => {
          let t3 = () => {
            let t4 = e5.target, n2 = this.indexFromElement(t4);
            if (!t4.isConnected) {
              this.observer.unobserve(t4);
              for (let [e6, n3] of this.elementsCache) if (n3 === t4) {
                this.elementsCache.delete(e6);
                break;
              }
              return;
            }
            this.shouldMeasureDuringScroll(n2) && this.resizeItem(n2, this.options.measureElement(t4, e5, this));
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t3) : t3();
        });
      }));
      return { disconnect: () => {
        var n2;
        (n2 = t2()) == null || n2.disconnect(), e3 = null;
      }, observe: (e4) => t2()?.observe(e4, { box: `border-box` }), unobserve: (e4) => t2()?.unobserve(e4) };
    })(), this.range = null, this.setOptions = (e3) => {
      let t2 = { debug: false, initialOffset: 0, overscan: 1, paddingStart: 0, paddingEnd: 0, scrollPaddingStart: 0, scrollPaddingEnd: 0, horizontal: false, getItemKey: cn, rangeExtractor: ln, onChange: () => {
      }, measureElement: hn, initialRect: { width: 0, height: 0 }, scrollMargin: 0, gap: 0, indexAttribute: `data-index`, initialMeasurementsCache: [], lanes: 1, anchorTo: `start`, followOnAppend: false, scrollEndThreshold: 1, isScrollingResetDelay: 150, enabled: true, isRtl: false, useScrollendEvent: false, useAnimationFrameWithResizeObserver: false, laneAssignmentMode: `estimate`, useCachedMeasurements: false };
      for (let n3 in e3) {
        let r3 = e3[n3];
        r3 !== void 0 && (t2[n3] = r3);
      }
      let n2 = this.options, r2 = null, i2 = null, a2 = false;
      if (n2 !== void 0 && n2.enabled && t2.enabled && t2.anchorTo === `end` && this.scrollElement !== null) {
        let e4 = n2.count, o3 = t2.count, s3 = this.getMeasurements(), c2 = e4 > 0 ? s3[0]?.key ?? n2.getItemKey(0) : null, l2 = e4 > 0 ? s3[e4 - 1]?.key ?? n2.getItemKey(e4 - 1) : null;
        if (o3 !== e4 || e4 > 0 && o3 > 0 && (t2.getItemKey(0) !== c2 || t2.getItemKey(o3 - 1) !== l2)) {
          a2 = true;
          let c3 = e4 > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? s3[0] : null;
          c3 && (r2 = [c3.key, this.getScrollOffset() - c3.start]);
          let u2 = t2.followOnAppend === true ? `auto` : t2.followOnAppend || null;
          u2 && o3 > e4 && this.isAtEnd(n2.scrollEndThreshold) && (e4 === 0 || t2.getItemKey(o3 - 1) !== l2) && (i2 = u2);
        }
      }
      this.options = t2, a2 && (this.pendingMin = 0, this.itemSizeCacheVersion++);
      let o2 = false, s2 = 0;
      if (r2 && this.scrollOffset !== null) {
        let [e4, t3] = r2, n3 = this.getMeasurements(), { count: i3, getItemKey: a3 } = this.options, c2 = 0;
        for (; c2 < i3 && a3(c2) !== e4; ) c2++;
        if (c2 < i3) {
          let e5 = n3[c2];
          if (e5) {
            let n4 = e5.start + t3;
            n4 !== this.scrollOffset && (s2 = n4 - this.scrollOffset, this.scrollOffset = n4, o2 = true);
          }
        }
      }
      (o2 || i2) && (this.pendingScrollAnchor = [o2 ? r2[0] : null, o2 ? r2[1] : 0, i2, s2]);
    }, this.notify = (e3) => {
      var t2, n2;
      (n2 = (t2 = this.options).onChange) == null || n2.call(t2, this, e3);
    }, this.maybeNotify = en(() => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]), (e3) => {
      this.notify(e3);
    }, { key: false, debug: () => this.options.debug, initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null] }), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((e3) => e3()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      let e3 = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== e3) {
        if (this.cleanup(), !e3) {
          this.maybeNotify();
          return;
        }
        if (this.scrollElement = e3, this.scrollElement && `ownerDocument` in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = this.scrollElement?.window ?? null, this.elementsCache.forEach((e4) => {
          this.observer.observe(e4);
        }), this.unsubs.push(this.options.observeElementRect(this, (e4) => {
          this.scrollRect = e4, this.maybeNotify();
        })), this.unsubs.push(this.options.observeElementOffset(this, (e4, t3) => {
          this._intendedScrollOffset !== null && Math.abs(e4 - this._intendedScrollOffset) < 1.5 && (e4 = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0, this.scrollDirection = t3 ? this.getScrollOffset() < e4 ? `forward` : `backward` : null, this.scrollOffset = e4, this.isScrolling = t3, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
        })), `addEventListener` in this.scrollElement) {
          let e4 = this.scrollElement, t3 = () => {
            this._iosTouching = true, this._iosJustTouchEnded = false, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, n2 = () => {
            this._iosTouching = false, !(!on() || this.targetWindow == null) && (this._iosJustTouchEnded = true, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = false, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          e4.addEventListener(`touchstart`, t3, dn), e4.addEventListener(`touchend`, n2, dn), this.unsubs.push(() => {
            e4.removeEventListener(`touchstart`, t3), e4.removeEventListener(`touchend`, n2), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 });
      }
      let t2 = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, t2 && this.scrollElement && this.options.enabled) {
        let [e4, n2, r2, i2] = t2;
        e4 !== null && !r2 && (on() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? i2 !== 0 && (this._iosDeferredAdjustment += i2) : this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 })), r2 && this.scrollToEnd({ behavior: r2 });
      }
    }, this._flushIosDeferredIfReady = () => {
      if (this._iosDeferredAdjustment === 0 || this.isScrolling || this._iosTouching || this._iosJustTouchEnded) return;
      let e3 = this.getScrollOffset(), t2 = this.getMaxScrollOffset();
      if (e3 < 0 || e3 > t2) return;
      let n2 = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0, this._scrollToOffset(e3, { adjustments: this.scrollAdjustments += n2, behavior: void 0 });
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? `width` : `height`]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == `function` ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e3, t2) => {
      let n2 = /* @__PURE__ */ new Map(), r2 = /* @__PURE__ */ new Map();
      for (let i2 = t2 - 1; i2 >= 0; i2--) {
        let t3 = e3[i2];
        if (n2.has(t3.lane)) continue;
        let a2 = r2.get(t3.lane);
        if (a2 == null || t3.end > a2.end ? r2.set(t3.lane, t3) : t3.end < a2.end && n2.set(t3.lane, true), n2.size === this.options.lanes) break;
      }
      return r2.size === this.options.lanes ? Array.from(r2.values()).sort((e4, t3) => e4.end === t3.end ? e4.index - t3.index : e4.end - t3.end)[0] : void 0;
    }, this.getMeasurementOptions = en(() => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled, this.options.lanes, this.options.laneAssignmentMode], (e3, t2, n2, r2, i2, a2, o2) => (this.prevLanes !== void 0 && this.prevLanes !== a2 && (this.lanesChangedFlag = true), this.prevLanes = a2, this.pendingMin = null, { count: e3, paddingStart: t2, scrollMargin: n2, getItemKey: r2, enabled: i2, lanes: a2, laneAssignmentMode: o2 }), { key: false }), this.getMeasurements = en(() => [this.getMeasurementOptions(), this.itemSizeCacheVersion], ({ count: e3, paddingStart: t2, scrollMargin: n2, getItemKey: r2, enabled: i2, lanes: a2, laneAssignmentMode: o2 }, s2) => {
      let c2 = this.itemSizeCache;
      if (!i2) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
      if (this.laneAssignments.size > e3) for (let t3 of this.laneAssignments.keys()) t3 >= e3 && this.laneAssignments.delete(t3);
      this.lanesChangedFlag && (this.lanesChangedFlag = false, this.lanesSettling = true, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((e4) => {
        this.itemSizeCache.set(e4.key, e4.size);
      }));
      let l2 = this.lanesSettling ? 0 : this.pendingMin ?? 0;
      if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === e3 && (this.lanesSettling = false), a2 === 1) {
        let i3 = this.options.gap, a3 = e3 * 2, o3 = this._flatMeasurements;
        if (!o3 || o3.length < a3) {
          let e4 = new Float64Array(a3);
          o3 && l2 > 0 && e4.set(o3.subarray(0, l2 * 2)), o3 = e4, this._flatMeasurements = o3;
        }
        let s3;
        if (l2 === 0) s3 = t2 + n2;
        else {
          let e4 = l2 - 1;
          s3 = o3[e4 * 2] + o3[e4 * 2 + 1] + i3;
        }
        for (let t3 = l2; t3 < e3; t3++) {
          let e4 = r2(t3), n3 = c2.get(e4), a4 = typeof n3 == `number` ? n3 : this.options.estimateSize(t3);
          o3[t3 * 2] = s3, o3[t3 * 2 + 1] = a4, s3 += a4 + i3;
        }
        let u3 = $t(e3, o3, r2);
        return this.measurementsCache = u3, u3;
      }
      let u2 = this.measurementsCache.slice(0, l2), d2 = Array(a2).fill(void 0);
      for (let e4 = 0; e4 < l2; e4++) {
        let t3 = u2[e4];
        t3 && (d2[t3.lane] = e4);
      }
      for (let i3 = l2; i3 < e3; i3++) {
        let e4 = r2(i3), a3 = this.laneAssignments.get(i3), s3, l3, f2 = o2 === `estimate` || c2.has(e4);
        if (a3 !== void 0 && this.options.lanes > 1) {
          s3 = a3;
          let e5 = d2[s3], r3 = e5 === void 0 ? void 0 : u2[e5];
          l3 = r3 ? r3.end + this.options.gap : t2 + n2;
        } else {
          let e5 = this.options.lanes === 1 ? u2[i3 - 1] : this.getFurthestMeasurement(u2, i3);
          l3 = e5 ? e5.end + this.options.gap : t2 + n2, s3 = e5 ? e5.lane : i3 % this.options.lanes, this.options.lanes > 1 && f2 && this.laneAssignments.set(i3, s3);
        }
        let p2 = c2.get(e4), m2 = typeof p2 == `number` ? p2 : this.options.estimateSize(i3), h2 = l3 + m2;
        u2[i3] = { index: i3, start: l3, size: m2, end: h2, key: e4, lane: s3 }, d2[s3] = i3;
      }
      return this.measurementsCache = u2, u2;
    }, { key: false, debug: () => this.options.debug }), this.calculateRange = en(() => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes], (e3, t2, n2, r2) => this.range = e3.length > 0 && t2 > 0 ? yn({ measurements: e3, outerSize: t2, scrollOffset: n2, lanes: r2, flat: r2 === 1 && this._flatMeasurements != null ? this._flatMeasurements : null }) : null, { key: false, debug: () => this.options.debug }), this.getVirtualIndexes = en(() => {
      let e3 = null, t2 = null, n2 = this.calculateRange();
      return n2 && (e3 = n2.startIndex, t2 = n2.endIndex), this.maybeNotify.updateDeps([this.isScrolling, e3, t2]), [this.options.rangeExtractor, this.options.overscan, this.options.count, e3, t2];
    }, (e3, t2, n2, r2, i2) => r2 === null || i2 === null ? [] : e3({ startIndex: r2, endIndex: i2, overscan: t2, count: n2 }), { key: false, debug: () => this.options.debug }), this.indexFromElement = (e3) => {
      let t2 = this.options.indexAttribute, n2 = e3.getAttribute(t2);
      return n2 ? parseInt(n2, 10) : (console.warn(`Missing attribute name '${t2}={index}' on measured element.`), -1);
    }, this.shouldMeasureDuringScroll = (e3) => {
      if (!this.scrollState || this.scrollState.behavior !== `smooth`) return true;
      let t2 = this.scrollState.index ?? this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)?.index;
      if (t2 !== void 0 && this.range) {
        let n2 = Math.max(this.options.overscan, Math.ceil((this.range.endIndex - this.range.startIndex) / 2)), r2 = Math.max(0, t2 - n2), i2 = Math.min(this.options.count - 1, t2 + n2);
        return e3 >= r2 && e3 <= i2;
      }
      return true;
    }, this.measureElement = (e3) => {
      if (!e3) {
        this.elementsCache.forEach((e4, t3) => {
          e4.isConnected || (this.observer.unobserve(e4), this.elementsCache.delete(t3));
        });
        return;
      }
      let t2 = this.indexFromElement(e3), n2 = this.options.getItemKey(t2), r2 = this.elementsCache.get(n2);
      r2 !== e3 && (r2 && this.observer.unobserve(r2), this.observer.observe(e3), this.elementsCache.set(n2, e3)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(t2) && this.resizeItem(t2, this.options.measureElement(e3, void 0, this));
    }, this.resizeItem = (e3, t2) => {
      if (e3 < 0 || e3 >= this.options.count) return;
      let n2, r2, i2, a2 = this._flatMeasurements;
      if (this.options.lanes === 1 && a2 !== null) i2 = this.options.getItemKey(e3), r2 = a2[e3 * 2], n2 = a2[e3 * 2 + 1];
      else {
        let t3 = this.measurementsCache[e3];
        if (!t3) return;
        i2 = t3.key, r2 = t3.start, n2 = t3.size;
      }
      let o2 = t2 - (this.itemSizeCache.get(i2) ?? n2);
      if (o2 !== 0) {
        let a3 = this.options.anchorTo === `end` && this.scrollState?.behavior !== `smooth` && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, s2 = a3 ? this.getTotalSize() : 0, c2 = this.scrollState?.behavior !== `smooth` && (this.shouldAdjustScrollPositionOnItemSizeChange === void 0 ? r2 < this.getScrollOffset() + this.scrollAdjustments && (!this.itemSizeCache.has(i2) || this.scrollDirection !== `backward`) : this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e3] ?? { index: e3, key: i2, start: r2, size: n2, end: r2 + n2, lane: 0 }, o2, this));
        (this.pendingMin === null || e3 < this.pendingMin) && (this.pendingMin = e3), this.itemSizeCache.set(i2, t2), this.itemSizeCacheVersion++, a3 ? this.applyScrollAdjustment(this.getTotalSize() - s2) : c2 && this.applyScrollAdjustment(o2), this.notify(false);
      }
    }, this.getVirtualItems = en(() => [this.getVirtualIndexes(), this.getMeasurements()], (e3, t2) => {
      let n2 = [];
      for (let r2 = 0, i2 = e3.length; r2 < i2; r2++) {
        let i3 = t2[e3[r2]];
        n2.push(i3);
      }
      return n2;
    }, { key: false, debug: () => this.options.debug }), this.getVirtualItemForOffset = (e3) => {
      let t2 = this.getMeasurements();
      if (t2.length === 0) return;
      let n2 = this._flatMeasurements, r2 = this.options.lanes === 1 && n2 != null;
      return tn(t2[vn(0, t2.length - 1, r2 ? (e4) => n2[e4 * 2] : (e4) => tn(t2[e4]).start, e3)]);
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if (`scrollHeight` in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        let e3 = this.scrollElement.document.documentElement;
        return this.options.horizontal ? e3.scrollWidth - this.scrollElement.innerWidth : e3.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getVirtualDistanceFromEnd = () => Math.max(this.getTotalSize() - this.getSize() - this.getScrollOffset(), 0), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (e3 = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= e3, this.getOffsetForAlignment = (e3, t2, n2 = 0) => {
      if (!this.scrollElement) return 0;
      let r2 = this.getSize(), i2 = this.getScrollOffset();
      t2 === `auto` && (t2 = e3 >= i2 + r2 ? `end` : `start`), t2 === `center` ? e3 += (n2 - r2) / 2 : t2 === `end` && (e3 -= r2);
      let a2 = this.getMaxScrollOffset();
      return Math.max(Math.min(a2, e3), 0);
    }, this.getOffsetForIndex = (e3, t2 = `auto`) => {
      e3 = Math.max(0, Math.min(e3, this.options.count - 1));
      let n2 = this.getSize(), r2 = this.getScrollOffset(), i2 = this.measurementsCache[e3];
      if (!i2) return;
      if (t2 === `auto`) if (i2.end >= r2 + n2 - this.options.scrollPaddingEnd) t2 = `end`;
      else if (i2.start <= r2 + this.options.scrollPaddingStart) t2 = `start`;
      else return [r2, t2];
      if (t2 === `end` && e3 === this.options.count - 1) return [this.getMaxScrollOffset(), t2];
      let a2 = t2 === `end` ? i2.end + this.options.scrollPaddingEnd : i2.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(a2, t2, i2.size), t2];
    }, this.scrollToOffset = (e3, { align: t2 = `start`, behavior: n2 = `auto` } = {}) => {
      let r2 = this.getOffsetForAlignment(e3, t2), i2 = this.now();
      this.scrollState = { index: null, align: t2, behavior: n2, startedAt: i2, lastTargetOffset: r2, stableFrames: 0 }, this._scrollToOffset(r2, { adjustments: void 0, behavior: n2 }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (e3, { align: t2 = `auto`, behavior: n2 = `auto` } = {}) => {
      e3 = Math.max(0, Math.min(e3, this.options.count - 1));
      let r2 = this.getOffsetForIndex(e3, t2);
      if (!r2) return;
      let [i2, a2] = r2, o2 = this.now();
      this.scrollState = { index: e3, align: a2, behavior: n2, startedAt: o2, lastTargetOffset: i2, stableFrames: 0 }, this._scrollToOffset(i2, { adjustments: void 0, behavior: n2 }), this.scheduleScrollReconcile();
    }, this.scrollBy = (e3, { behavior: t2 = `auto` } = {}) => {
      let n2 = this.getScrollOffset() + e3, r2 = this.now();
      this.scrollState = { index: null, align: `start`, behavior: t2, startedAt: r2, lastTargetOffset: n2, stableFrames: 0 }, this._scrollToOffset(n2, { adjustments: void 0, behavior: t2 }), this.scheduleScrollReconcile();
    }, this.scrollToEnd = ({ behavior: e3 = `auto` } = {}) => {
      if (this.options.count > 0) {
        this.scrollToIndex(this.options.count - 1, { align: `end`, behavior: e3 });
        return;
      }
      this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), { behavior: e3 });
    }, this.getTotalSize = () => {
      let e3 = this.getMeasurements(), t2;
      if (e3.length === 0) t2 = this.options.paddingStart;
      else if (this.options.lanes === 1) {
        let n2 = e3.length - 1, r2 = this._flatMeasurements;
        t2 = r2 == null ? e3[n2]?.end ?? 0 : r2[n2 * 2] + r2[n2 * 2 + 1];
      } else {
        let n2 = Array(this.options.lanes).fill(null), r2 = e3.length - 1;
        for (; r2 >= 0 && n2.some((e4) => e4 === null); ) {
          let t3 = e3[r2];
          n2[t3.lane] === null && (n2[t3.lane] = t3.end), r2--;
        }
        t2 = Math.max(...n2.filter((e4) => e4 !== null));
      }
      return Math.max(t2 - this.options.scrollMargin + this.options.paddingEnd, 0);
    }, this.takeSnapshot = () => {
      let e3 = [];
      if (this.itemSizeCache.size === 0) return e3;
      let t2 = this.getMeasurements();
      for (let n2 of t2) n2 && this.itemSizeCache.has(n2.key) && e3.push({ index: n2.index, key: n2.key, start: n2.start, size: n2.size, end: n2.end, lane: n2.lane });
      return e3;
    }, this._scrollToOffset = (e3, { adjustments: t2, behavior: n2 }) => {
      this._intendedScrollOffset = e3 + (t2 ?? 0), this.options.scrollToFn(e3, { behavior: n2, adjustments: t2 }, this);
    }, this.measure = () => {
      this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(false);
    }, this.setOptions(e2);
  }
  applyScrollAdjustment(e2, t2) {
    e2 !== 0 && (on() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? this._iosDeferredAdjustment += e2 : this._scrollToOffset(this.getScrollOffset(), { adjustments: this.scrollAdjustments += e2, behavior: t2 }));
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    this.rafId ?? (this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null, this.reconcileScroll();
    }));
  }
  reconcileScroll() {
    if (!this.scrollState || !this.scrollElement) return;
    if (this.now() - this.scrollState.startedAt > 5e3) {
      this.scrollState = null;
      return;
    }
    let e2 = this.scrollState.index == null ? void 0 : this.getOffsetForIndex(this.scrollState.index, this.scrollState.align), t2 = e2 ? e2[0] : this.scrollState.lastTargetOffset, n2 = t2 !== this.scrollState.lastTargetOffset;
    if (!n2 && nn(t2, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= 1) {
        this.getScrollOffset() !== t2 && this._scrollToOffset(t2, { adjustments: void 0, behavior: `auto` }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, n2) {
      let e3 = this.getSize() || 600, n3 = Math.abs(t2 - this.getScrollOffset()), r2 = this.scrollState.behavior === `smooth` && n3 > e3;
      this.scrollState.lastTargetOffset = t2, r2 || (this.scrollState.behavior = `auto`), this._scrollToOffset(t2, { adjustments: void 0, behavior: r2 ? `smooth` : `auto` });
    }
    this.scheduleScrollReconcile();
  }
}, vn = (e2, t2, n2, r2) => {
  for (; e2 <= t2; ) {
    let i2 = (e2 + t2) / 2 | 0, a2 = n2(i2);
    if (a2 < r2) e2 = i2 + 1;
    else if (a2 > r2) t2 = i2 - 1;
    else return i2;
  }
  return e2 > 0 ? e2 - 1 : 0;
};
function yn({ measurements: e2, outerSize: t2, scrollOffset: n2, lanes: r2, flat: i2 }) {
  let a2 = e2.length - 1, o2 = i2 ? (e3) => i2[e3 * 2] : (t3) => e2[t3].start, s2 = i2 ? (e3) => i2[e3 * 2] + i2[e3 * 2 + 1] : (t3) => e2[t3].end;
  if (e2.length <= r2) return { startIndex: 0, endIndex: a2 };
  let c2 = vn(0, a2, o2, n2), l2 = c2;
  if (r2 === 1) for (; l2 < a2 && s2(l2) < n2 + t2; ) l2++;
  else if (r2 > 1) {
    let i3 = Array(r2).fill(0);
    for (; l2 < a2 && i3.some((e3) => e3 < n2 + t2); ) {
      let t3 = e2[l2];
      i3[t3.lane] = t3.end, l2++;
    }
    let o3 = Array(r2).fill(n2 + t2);
    for (; c2 >= 0 && o3.some((e3) => e3 >= n2); ) {
      let t3 = e2[c2];
      o3[t3.lane] = t3.start, c2--;
    }
    c2 = Math.max(0, c2 - c2 % r2), l2 = Math.min(a2, l2 + (r2 - 1 - l2 % r2));
  }
  return { startIndex: c2, endIndex: l2 };
}
function bn(e2) {
  let t2 = new _n(u(e2)), n2 = ee(t2), i2 = t2._didMount();
  return o(() => u(e2).getScrollElement(), (e3) => {
    e3 && t2._willUpdate();
  }, { immediate: true }), o(() => u(e2), (e3) => {
    t2.setOptions({ ...e3, onChange: (t3, i3) => {
      var a2;
      r(n2), (a2 = e3.onChange) == null || a2.call(e3, t3, i3);
    } }), t2._willUpdate(), r(n2);
  }, { immediate: true }), k(i2), n2;
}
function xn(e2) {
  return bn(S(() => ({ observeElementRect: un, observeElementOffset: mn, scrollToFn: gn, ...u(e2) })));
}
var Sn = E({ __name: `ListboxVirtualizer`, props: { options: { type: Array, required: true }, overscan: { type: Number, required: false }, estimateSize: { type: [Number, Function], required: false }, textContent: { type: Function, required: false } }, setup(e2) {
  let t2 = e2, n2 = l(), r2 = zt(), i2 = fe(), { getItems: a2 } = Ot();
  r2.isVirtual.value = true;
  let o2 = S(() => {
    let e3 = i2.value;
    if (e3) {
      let t3 = window.getComputedStyle(e3);
      return { start: Number.parseFloat(t3.paddingBlockStart || t3.paddingTop), end: Number.parseFloat(t3.paddingBlockEnd || t3.paddingBottom) };
    } else return { start: 0, end: 0 };
  }), s2 = xn({ get scrollPaddingStart() {
    return o2.value.start;
  }, get scrollPaddingEnd() {
    return o2.value.end;
  }, get count() {
    return t2.options.length;
  }, get horizontal() {
    return r2.orientation.value === `horizontal`;
  }, estimateSize(e3) {
    return typeof t2.estimateSize == `function` ? t2.estimateSize(e3) : t2.estimateSize ?? 28;
  }, getScrollElement() {
    return i2.value;
  }, overscan: t2.overscan ?? 12 }), c2 = S(() => s2.value.getVirtualItems().map((e3) => {
    let r3 = n2.default({ option: t2.options[e3.index], virtualizer: s2.value, virtualItem: e3 })[0];
    return { item: e3, is: T(r3.type === O && Array.isArray(r3.children) ? r3.children.find((e4) => typeof e4.type != `symbol`) : r3, { key: `${e3.key}`, "data-index": e3.index, "aria-setsize": t2.options.length, "aria-posinset": e3.index + 1, style: { position: `absolute`, top: 0, left: 0, transform: `translateY(${e3.start}px)`, overflowAnchor: `none` } }) };
  }));
  r2.virtualFocusHook.on(({ event: e3, scroll: n3 }) => {
    let o3 = t2.options.findIndex((e4) => Array.isArray(r2.modelValue.value) ? jt(e4, r2.modelValue.value[0], r2.by) : jt(e4, r2.modelValue.value, r2.by));
    o3 === -1 ? n3 ? r2.highlightFirstItem() : requestAnimationFrame(() => {
      let e4 = a2().find((e5) => e5.ref.dataset.disabled !== ``)?.ref;
      e4 && r2.changeHighlight(e4, false, false);
    }) : (e3?.preventDefault(), s2.value.scrollToIndex(o3, { align: `start` }), requestAnimationFrame(() => {
      let t3 = kt(i2.value);
      t3 && (r2.changeHighlight(t3, n3, n3 ? void 0 : false), e3 && t3?.focus());
    }));
  }), r2.virtualHighlightHook.on((e3) => {
    let n3 = t2.options.findIndex((t3) => jt(t3, e3, r2.by));
    s2.value.scrollToIndex(n3, { align: `start` }), requestAnimationFrame(() => {
      let e4 = kt(i2.value);
      e4 && r2.changeHighlight(e4);
    });
  });
  let d2 = pe(``, 1e3), f2 = S(() => {
    let e3 = (e4) => t2.textContent ? t2.textContent(e4) : e4?.toString().toLowerCase();
    return t2.options.map((t3, n3) => ({ index: n3, textContent: e3(t3) }));
  });
  function p2(e3, n3) {
    if (!r2.firstValue?.value || !r2.multiple.value || !Array.isArray(r2.modelValue.value)) return;
    let i3 = a2().filter((e4) => e4.ref.dataset.disabled !== ``).find((e4) => e4.ref === r2.highlightedElement.value)?.value;
    if (!i3) return;
    let o3 = null;
    switch (n3) {
      case `prev`:
      case `next`:
        o3 = St(t2.options, r2.firstValue.value, i3);
        break;
      case `first`:
        o3 = St(t2.options, r2.firstValue.value, t2.options?.[0]);
        break;
      case `last`:
        o3 = St(t2.options, r2.firstValue.value, t2.options.at(-1));
        break;
    }
    r2.modelValue.value = o3;
  }
  return r2.virtualKeydownHook.on((e3) => {
    let n3 = e3.altKey || e3.ctrlKey || e3.metaKey;
    if (e3.key === `Tab` && !n3) return;
    let o3 = Pt[e3.key];
    if (n3 && e3.key === `a` && r2.multiple.value ? (e3.preventDefault(), r2.modelValue.value = [...t2.options], o3 = `last`) : e3.shiftKey && o3 && p2(e3, o3), [`first`, `last`].includes(o3)) {
      e3.preventDefault();
      let n4 = o3 === `first` ? 0 : t2.options.length - 1;
      s2.value.scrollToIndex(n4), requestAnimationFrame(() => {
        let e4 = a2(), t3 = o3 === `first` ? e4[0] : e4.at(-1);
        t3 && r2.changeHighlight(t3.ref);
      });
    } else if (!o3 && !n3) {
      d2.value += e3.key;
      let t3 = Number(Q()?.getAttribute(`data-index`)), n4 = f2.value[t3].textContent, a3 = Et(f2.value.map((e4) => e4.textContent ?? ``), d2.value, n4), o4 = f2.value.find((e4) => e4.textContent === a3);
      o4 && (s2.value.scrollToIndex(o4.index, { align: `start` }), requestAnimationFrame(() => {
        let e4 = i2.value.querySelector(`[data-index="${o4.index}"]`);
        e4 instanceof HTMLElement && r2.changeHighlight(e4);
      }));
    }
  }), (e3, t3) => (D(), h(`div`, { "data-reka-virtualizer": ``, style: v({ position: `relative`, width: `100%`, height: `${u(s2).getTotalSize()}px` }) }, [(D(true), h(O, null, g(c2.value, ({ is: e4, item: t4 }) => (D(), F(L(e4), { key: t4.index }))), 128))], 4));
} }), [$, Cn] = G(`ComboboxRoot`), wn = E({ __name: `ComboboxRoot`, props: { open: { type: Boolean, required: false, default: void 0 }, defaultOpen: { type: Boolean, required: false }, resetSearchTermOnBlur: { type: Boolean, required: false, default: true }, resetSearchTermOnSelect: { type: Boolean, required: false, default: true }, openOnFocus: { type: Boolean, required: false, default: false }, openOnClick: { type: Boolean, required: false, default: false }, ignoreFilter: { type: Boolean, required: false }, resetModelValueOnClear: { type: Boolean, required: false, default: false }, modelValue: { type: null, required: false }, defaultValue: { type: null, required: false }, multiple: { type: Boolean, required: false }, dir: { type: String, required: false }, disabled: { type: Boolean, required: false }, highlightOnHover: { type: Boolean, required: false, default: true }, by: { type: [String, Function], required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, name: { type: String, required: false }, required: { type: Boolean, required: false } }, emits: [`update:modelValue`, `highlight`, `update:open`], setup(e2, { expose: t2, emit: r2 }) {
  let i2 = e2, a2 = r2, { primitiveElement: o2, currentElement: s2 } = X(), { multiple: l2, disabled: d2, ignoreFilter: p2, resetSearchTermOnSelect: m2, openOnFocus: h2, openOnClick: g2, dir: v2, resetModelValueOnClear: b2, highlightOnHover: x2 } = f(i2), C2 = Z(v2), w2 = K(i2, `modelValue`, a2, { defaultValue: i2.defaultValue ?? (l2.value ? [] : void 0), passive: i2.modelValue === void 0, deep: true }), T2 = K(i2, `open`, a2, { defaultValue: i2.defaultOpen, passive: i2.open === void 0 });
  async function E2(e3) {
    T2.value = e3, H2.value = ``, e3 ? (await N(), o2.value?.highlightSelected(), k2.value = true, M2.value?.focus()) : (k2.value = false, setTimeout(() => {
      !e3 && i2.resetSearchTermOnBlur && O2.trigger();
    }, 1));
  }
  let O2 = le(), k2 = I(false), j2 = I(false), M2 = I(), L2 = I(), ee2 = S(() => o2.value?.highlightedElement ?? void 0), z2 = I(/* @__PURE__ */ new Map()), B2 = I(/* @__PURE__ */ new Map()), { contains: V2 } = Ae({ sensitivity: `base` }), H2 = I(``), U2 = S((e3) => {
    if (!H2.value || i2.ignoreFilter || j2.value) return { count: z2.value.size, items: e3?.items ?? /* @__PURE__ */ new Map(), groups: e3?.groups ?? new Set(B2.value.keys()) };
    let t3 = 0, n2 = /* @__PURE__ */ new Map(), r3 = /* @__PURE__ */ new Set();
    for (let [e4, r4] of z2.value) {
      let i3 = V2(r4, H2.value);
      n2.set(e4, +!!i3), i3 && t3++;
    }
    for (let [e4, t4] of B2.value) for (let i3 of t4) if (n2.get(i3) > 0) {
      r3.add(e4);
      break;
    }
    return { count: t3, items: n2, groups: r3 };
  }), W2 = c();
  return _(() => {
    W2?.exposed && (W2.exposed.highlightItem = o2.value?.highlightItem, W2.exposed.highlightFirstItem = o2.value?.highlightFirstItem, W2.exposed.highlightSelected = o2.value?.highlightSelected);
  }), t2({ filtered: U2, highlightedElement: ee2, highlightItem: o2.value?.highlightItem, highlightFirstItem: o2.value?.highlightFirstItem, highlightSelected: o2.value?.highlightSelected }), Cn({ modelValue: w2, multiple: l2, disabled: d2, open: T2, onOpenChange: E2, contentId: ``, isUserInputted: k2, isVirtual: j2, inputElement: M2, highlightedElement: ee2, onInputElementChange: (e3) => M2.value = e3, triggerElement: L2, onTriggerElementChange: (e3) => L2.value = e3, parentElement: s2, resetSearchTermOnSelect: m2, onResetSearchTerm: O2.on, allItems: z2, allGroups: B2, filterSearch: H2, filterState: U2, ignoreFilter: p2, openOnFocus: h2, openOnClick: g2, resetModelValueOnClear: b2 }), (e3, t3) => (D(), F(u(ye), null, { default: A(() => [n(u(Vt), y({ ref_key: `primitiveElement`, ref: o2 }, e3.$attrs, { modelValue: u(w2), "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => P(w2) ? w2.value = e4 : null), style: { pointerEvents: u(T2) ? `auto` : void 0 }, as: e3.as, "as-child": e3.asChild, dir: u(C2), multiple: u(l2), name: e3.name, required: e3.required, disabled: u(d2), "highlight-on-hover": u(x2), by: i2.by, onHighlight: t3[1] || (t3[1] = (e4) => a2(`highlight`, e4)) }), { default: A(() => [R(e3.$slots, `default`, { open: u(T2), modelValue: u(w2) })]), _: 3 }, 16, [`modelValue`, `style`, `as`, `as-child`, `dir`, `multiple`, `name`, `required`, `disabled`, `highlight-on-hover`, `by`])]), _: 3 }));
} }), [Tn, En] = G(`AutocompleteRoot`), Dn = E({ __name: `AutocompleteRoot`, props: { modelValue: { type: String, required: false }, defaultValue: { type: String, required: false }, open: { type: Boolean, required: false, default: void 0 }, defaultOpen: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, dir: { type: String, required: false }, name: { type: String, required: false }, required: { type: Boolean, required: false }, resetSearchTermOnBlur: { type: Boolean, required: false, default: false }, openOnFocus: { type: Boolean, required: false, default: false }, openOnClick: { type: Boolean, required: false, default: false }, ignoreFilter: { type: Boolean, required: false }, highlightOnHover: { type: Boolean, required: false, default: true }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`update:modelValue`, `highlight`, `update:open`], setup(e2, { expose: t2, emit: r2 }) {
  let i2 = e2, a2 = r2, { primitiveElement: o2, currentElement: s2 } = X(), { disabled: l2, ignoreFilter: d2, openOnFocus: p2, openOnClick: m2, dir: h2, highlightOnHover: g2 } = f(i2), v2 = Z(h2), b2 = K(i2, `modelValue`, a2, { defaultValue: i2.defaultValue ?? ``, passive: i2.modelValue === void 0 }), x2 = K(i2, `open`, a2, { defaultValue: i2.defaultOpen, passive: i2.open === void 0 }), C2 = S({ get: () => b2.value, set: (e3) => {
    e3 == null ? b2.value = `` : b2.value = String(e3);
  } });
  async function w2(e3) {
    x2.value = e3, e3 ? (z2.value = b2.value || ``, await N(), o2.value?.highlightSelected(), E2.value = true, k2.value?.focus()) : (E2.value = false, z2.value = ``, setTimeout(() => {
      !e3 && i2.resetSearchTermOnBlur && T2.trigger();
    }, 1));
  }
  let T2 = le(), E2 = I(false), O2 = I(false), k2 = I(), j2 = I(), M2 = S(() => o2.value?.highlightedElement ?? void 0), P2 = I(/* @__PURE__ */ new Map()), L2 = I(/* @__PURE__ */ new Map()), { contains: ee2 } = Ae({ sensitivity: `base` }), z2 = I(``), B2 = S((e3) => {
    if (!z2.value || i2.ignoreFilter || O2.value) return { count: P2.value.size, items: e3?.items ?? /* @__PURE__ */ new Map(), groups: e3?.groups ?? new Set(L2.value.keys()) };
    let t3 = 0, n2 = /* @__PURE__ */ new Map(), r3 = /* @__PURE__ */ new Set();
    for (let [e4, r4] of P2.value) {
      let i3 = ee2(r4, z2.value);
      n2.set(e4, +!!i3), i3 && t3++;
    }
    for (let [e4, t4] of L2.value) for (let i3 of t4) if (n2.get(i3) > 0) {
      r3.add(e4);
      break;
    }
    return { count: t3, items: n2, groups: r3 };
  }), V2 = c();
  return _(() => {
    V2?.exposed && (V2.exposed.highlightItem = o2.value?.highlightItem, V2.exposed.highlightFirstItem = o2.value?.highlightFirstItem, V2.exposed.highlightSelected = o2.value?.highlightSelected);
  }), t2({ filtered: B2, highlightedElement: M2, highlightItem: o2.value?.highlightItem, highlightFirstItem: o2.value?.highlightFirstItem, highlightSelected: o2.value?.highlightSelected }), Cn({ modelValue: C2, multiple: I(false), disabled: l2, open: x2, onOpenChange: w2, contentId: ``, isUserInputted: E2, isVirtual: O2, inputElement: k2, highlightedElement: M2, onInputElementChange: (e3) => k2.value = e3, triggerElement: j2, onTriggerElementChange: (e3) => j2.value = e3, parentElement: s2, resetSearchTermOnSelect: I(false), onResetSearchTerm: T2.on, allItems: P2, allGroups: L2, filterSearch: z2, filterState: B2, ignoreFilter: d2, openOnFocus: p2, openOnClick: m2, resetModelValueOnClear: I(true) }), En({ modelValue: b2 }), (e3, t3) => (D(), F(u(ye), null, { default: A(() => [n(u(Vt), y({ ref_key: `primitiveElement`, ref: o2 }, e3.$attrs, { modelValue: C2.value, "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => C2.value = e4), style: { pointerEvents: u(x2) ? `auto` : void 0 }, as: e3.as, "as-child": e3.asChild, dir: u(v2), name: e3.name, required: e3.required, disabled: u(l2), "highlight-on-hover": u(g2), onHighlight: t3[1] || (t3[1] = (e4) => a2(`highlight`, e4)) }), { default: A(() => [R(e3.$slots, `default`, { open: u(x2), modelValue: u(b2) })]), _: 3 }, 16, [`modelValue`, `style`, `as`, `as-child`, `dir`, `name`, `required`, `disabled`, `highlight-on-hover`])]), _: 3 }));
} }), On = E({ __name: `AutocompleteInput`, props: { modelValue: { type: String, required: false }, autoFocus: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `input` } }, emits: [`update:modelValue`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, i2 = $(), a2 = Tn(), s2 = zt(), { primitiveElement: c2, currentElement: l2 } = X(), d2 = K(n2, `modelValue`, r2, { passive: n2.modelValue === void 0 });
  a2.modelValue.value && (d2.value = a2.modelValue.value), _(() => {
    l2.value && i2.onInputElementChange(l2.value);
  });
  let { isComposing: f2, handleCompositionStart: p2, handleCompositionEnd: m2 } = Ut((e3) => {
    let t3 = e3.target;
    t3 && g2(t3.value);
  });
  function h2(e3) {
    f2.value || (e3.preventDefault(), i2.open.value || i2.onOpenChange(true));
  }
  function g2(e3) {
    i2.open.value ? i2.filterSearch.value = e3 : (i2.onOpenChange(true), N(() => {
      e3 && (i2.filterSearch.value = e3, s2.highlightFirstItem());
    })), a2.modelValue.value = e3;
  }
  function v2(e3) {
    f2.value || g2(e3.target.value);
  }
  function y2() {
    i2.openOnFocus.value && !i2.open.value && i2.onOpenChange(true);
  }
  function b2() {
    i2.openOnClick.value && !i2.open.value && i2.onOpenChange(true);
  }
  return o(a2.modelValue, (e3) => {
    let t3 = e3 ?? ``;
    d2.value !== t3 && (d2.value = t3);
  }), i2.onResetSearchTerm(() => {
    d2.value = a2.modelValue.value ?? ``;
  }), o(i2.filterState, (e3, t3) => {
    !i2.isVirtual.value && t3.count === 0 && s2.highlightFirstItem();
  }), (e3, t3) => (D(), F(u(Wt), { ref_key: `primitiveElement`, ref: c2, modelValue: u(d2), "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => P(d2) ? d2.value = e4 : null), as: e3.as, "as-child": e3.asChild, "auto-focus": e3.autoFocus, disabled: e3.disabled, "aria-expanded": u(i2).open.value, "aria-controls": u(i2).contentId, "aria-autocomplete": `list`, role: `combobox`, autocomplete: `off`, onClick: b2, onInput: v2, onKeydown: V(h2, [`down`, `up`]), onFocus: y2, onCompositionstart: u(p2), onCompositionend: u(m2) }, { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 8, [`modelValue`, `as`, `as-child`, `auto-focus`, `disabled`, `aria-expanded`, `aria-controls`, `onCompositionstart`, `onCompositionend`]));
} }), kn = E({ __name: `ComboboxAnchor`, props: { reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let { forwardRef: t2 } = q();
  return (e3, r2) => (D(), F(u(Ee), { "as-child": ``, reference: e3.reference }, { default: A(() => [n(u(U), y({ ref: u(t2), "as-child": e3.asChild, as: e3.as }, e3.$attrs), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`as-child`, `as`])]), _: 3 }, 8, [`reference`]));
} }), An = 0;
function jn() {
  p((e2) => {
    if (!ue) return;
    let t2 = document.querySelectorAll(`[data-reka-focus-guard]`);
    document.body.insertAdjacentElement(`afterbegin`, t2[0] ?? Mn()), document.body.insertAdjacentElement(`beforeend`, t2[1] ?? Mn()), An++, e2(() => {
      An === 1 && document.querySelectorAll(`[data-reka-focus-guard]`).forEach((e3) => e3.remove()), An--;
    });
  });
}
function Mn() {
  let e2 = document.createElement(`span`);
  return e2.setAttribute(`data-reka-focus-guard`, ``), e2.tabIndex = 0, e2.style.outline = `none`, e2.style.opacity = `0`, e2.style.position = `fixed`, e2.style.pointerEvents = `none`, e2;
}
var [Nn, Pn] = G(`ComboboxContent`), Fn = E({ __name: `ComboboxContentImpl`, props: { position: { type: String, required: false, default: `inline` }, bodyLock: { type: Boolean, required: false }, hideWhenEmpty: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`], setup(e2, { emit: t2 }) {
  let r2 = e2, i2 = t2, { position: a2 } = f(r2), o2 = $(), s2 = S(() => o2.ignoreFilter.value ? o2.allItems.value.size === 0 : o2.filterState.value.count === 0), { forwardRef: c2, currentElement: l2 } = q();
  yt(r2.bodyLock), jn(), Ue(o2.parentElement);
  let d2 = te(S(() => r2.position === `popper` ? r2 : {}).value), p2 = { boxSizing: `border-box`, "--reka-combobox-content-transform-origin": `var(--reka-popper-transform-origin)`, "--reka-combobox-content-available-width": `var(--reka-popper-available-width)`, "--reka-combobox-content-available-height": `var(--reka-popper-available-height)`, "--reka-combobox-trigger-width": `var(--reka-popper-anchor-width)`, "--reka-combobox-trigger-height": `var(--reka-popper-anchor-height)` };
  Pn({ position: a2 });
  let m2 = I(false);
  _(() => {
    o2.inputElement.value && (m2.value = l2.value.contains(o2.inputElement.value), m2.value && o2.inputElement.value.focus());
  }), x(() => {
    let e3 = Q();
    m2.value && (!e3 || e3 === document.body) && o2.triggerElement.value?.focus();
  });
  function h2(e3) {
    if (o2.parentElement.value?.contains(e3)) return true;
    let t3 = (e3 instanceof Element ? e3.closest(`label`) : null)?.control;
    return !!t3 && !!o2.parentElement.value?.contains(t3);
  }
  return (e3, t3) => (D(), F(u(Ht), { "as-child": `` }, { default: A(() => [n(u(rt), { "as-child": ``, onMountAutoFocus: t3[5] || (t3[5] = H(() => {
  }, [`prevent`])), onUnmountAutoFocus: t3[6] || (t3[6] = H(() => {
  }, [`prevent`])) }, { default: A(() => [n(u(Se), { "as-child": ``, "disable-outside-pointer-events": e3.disableOutsidePointerEvents, onDismiss: t3[0] || (t3[0] = (e4) => u(o2).onOpenChange(false)), onFocusOutside: t3[1] || (t3[1] = (e4) => {
    h2(e4.target) && e4.preventDefault(), i2(`focusOutside`, e4);
  }), onInteractOutside: t3[2] || (t3[2] = (e4) => i2(`interactOutside`, e4)), onEscapeKeyDown: t3[3] || (t3[3] = (e4) => i2(`escapeKeyDown`, e4)), onPointerDownOutside: t3[4] || (t3[4] = (e4) => {
    h2(e4.target) && e4.preventDefault(), i2(`pointerDownOutside`, e4);
  }) }, { default: A(() => [(D(), F(L(u(a2) === `popper` ? u(xe) : u(U)), y({ ...e3.$attrs, ...u(d2) }, { id: u(o2).contentId, ref: u(c2), "data-state": u(o2).open.value ? `open` : `closed`, "data-empty": s2.value ? `` : void 0, style: { display: r2.hideWhenEmpty && s2.value ? `none` : `flex`, flexDirection: `column`, outline: `none`, ...u(a2) === `popper` ? p2 : {} } }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`id`, `data-state`, `data-empty`, `style`]))]), _: 3 }, 8, [`disable-outside-pointer-events`])]), _: 3 })]), _: 3 }));
} }), In = E({ __name: `ComboboxArrow`, props: { width: { type: Number, required: false, default: 10 }, height: { type: Number, required: false, default: 5 }, rounded: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `svg` } }, setup(t2) {
  let n2 = t2, r2 = $(), i2 = Nn();
  return q(), (t3, a2) => u(r2).open.value && u(i2).position.value === `popper` ? (D(), F(u(Te), e(y({ key: 0 }, n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16)) : z(`v-if`, true);
} }), Ln = E({ __name: `ComboboxCancel`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2;
  q();
  let n2 = $();
  function r2() {
    n2.filterSearch.value = ``, n2.inputElement.value && (n2.inputElement.value.value = ``, n2.inputElement.value.focus()), n2.resetModelValueOnClear?.value && (n2.modelValue.value = n2.multiple.value ? [] : null);
  }
  return (e3, n3) => (D(), F(u(U), y({ type: e3.as === `button` ? `button` : void 0 }, t2, { tabindex: `-1`, onClick: r2 }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`type`]));
} }), Rn = E({ __name: `ComboboxContent`, props: { forceMount: { type: Boolean, required: false }, position: { type: String, required: false }, bodyLock: { type: Boolean, required: false }, hideWhenEmpty: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`], setup(e2, { emit: t2 }) {
  let r2 = J(e2, t2), { forwardRef: i2 } = q(), a2 = $();
  return a2.contentId || (a2.contentId = Y(void 0, `reka-combobox-content`)), (e3, t3) => (D(), F(u(De), { present: e3.forceMount || u(a2).open.value }, { default: A(() => [n(Fn, y({ ...u(r2), ...e3.$attrs }, { ref: u(i2) }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16)]), _: 3 }, 8, [`present`]));
} }), zn = E({ __name: `ComboboxEmpty`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2, r2 = $(), a2 = S(() => r2.ignoreFilter.value ? r2.allItems.value.size === 0 : r2.filterState.value.count === 0);
  return (t3, r3) => a2.value ? (D(), F(u(U), e(y({ key: 0 }, n2)), { default: A(() => [R(t3.$slots, `default`, {}, () => [r3[0] || (r3[0] = i(`No options`))])]), _: 3 }, 16)) : z(`v-if`, true);
} }), [Bn, Vn] = G(`ComboboxGroup`), Hn = E({ __name: `ComboboxGroup`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2, n2 = Y(void 0, `reka-combobox-group`), r2 = $(), i2 = S(() => r2.ignoreFilter.value ? true : r2.filterSearch.value ? r2.filterState.value.groups.has(n2) : true), a2 = Vn({ id: n2, labelId: `` });
  return _(() => {
    r2.allGroups.value.has(n2) || r2.allGroups.value.set(n2, /* @__PURE__ */ new Set());
  }), x(() => {
    r2.allGroups.value.delete(n2);
  }), (e3, r3) => (D(), F(u(qt), y({ id: u(n2), "aria-labelledby": u(a2).labelId }, t2, { hidden: i2.value ? void 0 : true }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`id`, `aria-labelledby`, `hidden`]));
} }), Un = E({ __name: `ComboboxInput`, props: { displayValue: { type: Function, required: false }, modelValue: { type: String, required: false }, autoFocus: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `input` } }, emits: [`update:modelValue`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, i2 = $(), a2 = zt(), { primitiveElement: s2, currentElement: c2 } = X(), l2 = K(n2, `modelValue`, r2, { passive: n2.modelValue === void 0 });
  _(() => {
    c2.value && i2.onInputElementChange(c2.value);
  });
  let { isComposing: d2, handleCompositionStart: f2, handleCompositionEnd: p2 } = Ut((e3) => {
    let t3 = e3.target;
    t3 && h2(t3.value);
  });
  function m2(e3) {
    d2.value || (e3.preventDefault(), i2.open.value || i2.onOpenChange(true));
  }
  function h2(e3) {
    i2.open.value ? i2.filterSearch.value = e3 : (i2.onOpenChange(true), N(() => {
      e3 && (i2.filterSearch.value = e3, a2.highlightFirstItem());
    }));
  }
  function g2(e3) {
    d2.value || h2(e3.target.value);
  }
  function v2() {
    i2.openOnFocus.value && !i2.open.value && i2.onOpenChange(true);
  }
  function y2(e3) {
    if (!i2.open.value) return;
    let t3 = e3.relatedTarget;
    if (!t3) return;
    let n3 = i2.parentElement.value?.contains(t3), r3 = document.getElementById(i2.contentId)?.contains(t3);
    !n3 && !r3 && requestAnimationFrame(() => {
      if (!i2.open.value) return;
      let e4 = document.activeElement;
      !i2.parentElement.value?.contains(e4) && !document.getElementById(i2.contentId)?.contains(e4) && i2.onOpenChange(false);
    });
  }
  function b2() {
    i2.openOnClick.value && !i2.open.value && i2.onOpenChange(true);
  }
  function x2() {
    let e3 = i2.modelValue.value;
    n2.displayValue ? l2.value = n2.displayValue(e3) : !i2.multiple.value && e3 && !Array.isArray(e3) ? typeof e3 == `object` ? l2.value = `` : l2.value = e3.toString() : l2.value = ``, N(() => {
      l2.value = l2.value;
    });
  }
  return i2.onResetSearchTerm(() => {
    x2();
  }), o(i2.modelValue, async () => {
    !i2.isUserInputted.value && i2.resetSearchTermOnSelect.value && x2();
  }, { immediate: true, deep: true }), o(i2.filterState, (e3, t3) => {
    !i2.isVirtual.value && t3.count === 0 && a2.highlightFirstItem();
  }), (e3, t3) => (D(), F(u(Wt), { ref_key: `primitiveElement`, ref: s2, modelValue: u(l2), "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => P(l2) ? l2.value = e4 : null), as: e3.as, "as-child": e3.asChild, "auto-focus": e3.autoFocus, disabled: e3.disabled, "aria-expanded": u(i2).open.value, "aria-controls": u(i2).contentId, "aria-autocomplete": `list`, role: `combobox`, autocomplete: `off`, onClick: b2, onInput: g2, onKeydown: V(m2, [`down`, `up`]), onFocus: v2, onBlur: y2, onCompositionstart: u(f2), onCompositionend: u(p2) }, { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 8, [`modelValue`, `as`, `as-child`, `auto-focus`, `disabled`, `aria-expanded`, `aria-controls`, `onCompositionstart`, `onCompositionend`]));
} }), Wn = E({ __name: `ComboboxItem`, props: { textValue: { type: String, required: false }, value: { type: null, required: true }, disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, a2 = Y(void 0, `reka-combobox-item`), o2 = $(), s2 = Bn(null), { primitiveElement: c2, currentElement: l2 } = X();
  if (n2.value === ``) throw Error(`A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.`);
  let d2 = S(() => {
    if (o2.isVirtual.value || o2.ignoreFilter.value || !o2.filterSearch.value) return true;
    {
      let e3 = o2.filterState.value.items.get(a2);
      return e3 === void 0 ? true : e3 > 0;
    }
  });
  return _(() => {
    o2.allItems.value.set(a2, n2.textValue || l2.value.textContent || l2.value.innerText);
    let e3 = s2?.id;
    e3 && (o2.allGroups.value.has(e3) ? o2.allGroups.value.get(e3)?.add(a2) : o2.allGroups.value.set(e3, /* @__PURE__ */ new Set([a2])));
  }), x(() => {
    o2.allItems.value.delete(a2);
  }), (e3, t3) => d2.value ? (D(), F(u(Zt), y({ key: 0 }, n2, { id: u(a2), ref_key: `primitiveElement`, ref: c2, disabled: u(o2).disabled.value || e3.disabled, onSelect: t3[0] || (t3[0] = (t4) => {
    r2(`select`, t4), !t4.defaultPrevented && (!u(o2).multiple.value && !e3.disabled && !u(o2).disabled.value ? (t4.preventDefault(), u(o2).onOpenChange(false), u(o2).modelValue.value = n2.value) : u(o2).multiple.value && u(o2).inputElement.value?.focus());
  }) }), { default: A(() => [R(e3.$slots, `default`, {}, () => [i(M(e3.value), 1)])]), _: 3 }, 16, [`id`, `disabled`])) : z(`v-if`, true);
} }), Gn = E({ __name: `ComboboxItemIndicator`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `span` } }, setup(t2) {
  let n2 = t2;
  return (t3, r2) => (D(), F(u(Qt), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), Kn = E({ __name: `ComboboxLabel`, props: { for: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `div` } }, setup(e2) {
  let t2 = e2;
  q();
  let n2 = Bn({ id: ``, labelId: `` });
  return n2.labelId || (n2.labelId = Y(void 0, `reka-combobox-group-label`)), (e3, r2) => (D(), F(u(U), y(t2, { id: u(n2).labelId }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`id`]));
} }), qn = E({ __name: `ComboboxPortal`, props: { to: { type: null, required: false }, disabled: { type: Boolean, required: false }, defer: { type: Boolean, required: false }, forceMount: { type: Boolean, required: false } }, setup(t2) {
  let n2 = t2;
  return (t3, r2) => (D(), F(u(we), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), Jn = E({ __name: `ComboboxSeparator`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2;
  return q(), (e3, n2) => (D(), F(u(U), y(t2, { "aria-hidden": `true` }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16));
} }), Yn = E({ __name: `ComboboxTrigger`, props: { disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2, { forwardRef: n2, currentElement: r2 } = q(), i2 = $(), a2 = S(() => t2.disabled || i2.disabled.value || false);
  return _(() => {
    r2.value && i2.onTriggerElementChange(r2.value);
  }), (e3, r3) => (D(), F(u(U), y(t2, { ref: u(n2), type: e3.as === `button` ? `button` : void 0, tabindex: `-1`, "aria-label": `Show popup`, "aria-haspopup": `listbox`, "aria-expanded": u(i2).open.value, "aria-controls": u(i2).contentId, "data-state": u(i2).open.value ? `open` : `closed`, disabled: a2.value, "data-disabled": a2.value ? `` : void 0, "aria-disabled": a2.value ?? void 0, onClick: r3[0] || (r3[0] = (e4) => u(i2).onOpenChange(!u(i2).open.value)) }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`type`, `aria-expanded`, `aria-controls`, `data-state`, `disabled`, `data-disabled`, `aria-disabled`]));
} });
function Xn(e2) {
  let t2 = _e({ nonce: I() });
  return S(() => e2?.value || t2.nonce?.value);
}
var Zn = E({ __name: `ComboboxViewport`, props: { nonce: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2, { forwardRef: r2 } = q(), { nonce: a2 } = f(t2), o2 = Xn(a2), s2 = $();
  return (e3, a3) => (D(), h(O, null, [n(u(U), y({ ...e3.$attrs, ...t2 }, { ref: u(r2), "data-reka-combobox-viewport": ``, role: `presentation`, style: { position: `relative`, flex: u(s2).isVirtual.value ? void 0 : 1, overflow: `auto` } }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`style`]), n(u(U), { as: `style`, nonce: u(o2) }, { default: A(() => a3[0] || (a3[0] = [i(` /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } `)])), _: 1, __: [0] }, 8, [`nonce`])], 64));
} }), Qn = E({ __name: `ComboboxVirtualizer`, props: { options: { type: Array, required: true }, overscan: { type: Number, required: false }, estimateSize: { type: [Number, Function], required: false }, textContent: { type: Function, required: false } }, setup(t2) {
  let n2 = t2, r2 = $();
  return r2.isVirtual.value = true, (t3, r3) => (D(), F(Sn, e(B(n2)), { default: A((n3) => [R(t3.$slots, `default`, e(B(n3)))]), _: 3 }, 16));
} }), [$n, er] = G(`RovingFocusGroup`), tr = E({ __name: `RovingFocusGroup`, props: { orientation: { type: String, required: false, default: void 0 }, dir: { type: String, required: false }, loop: { type: Boolean, required: false, default: false }, currentTabStopId: { type: [String, null], required: false }, defaultCurrentTabStopId: { type: String, required: false }, preventScrollOnEntryFocus: { type: Boolean, required: false, default: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`entryFocus`, `update:currentTabStopId`], setup(e2, { expose: t2, emit: r2 }) {
  let i2 = e2, a2 = r2, { loop: o2, orientation: s2, dir: c2 } = f(i2), l2 = Z(c2), d2 = K(i2, `currentTabStopId`, a2, { defaultValue: i2.defaultCurrentTabStopId, passive: i2.currentTabStopId === void 0 }), p2 = I(false), m2 = I(false), h2 = I(0), { getItems: g2, CollectionSlot: _2 } = Ot({ isProvider: true });
  function v2(e3) {
    let t3 = !m2.value;
    if (e3.currentTarget && e3.target === e3.currentTarget && t3 && !p2.value) {
      let t4 = new CustomEvent(Mt, Nt);
      if (e3.currentTarget.dispatchEvent(t4), a2(`entryFocus`, t4), !t4.defaultPrevented) {
        let e4 = g2().map((e5) => e5.ref).filter((e5) => e5.dataset.disabled !== ``);
        Lt([e4.find((e5) => e5.getAttribute(`data-active`) === ``), e4.find((e5) => e5.getAttribute(`data-highlighted`) === ``), e4.find((e5) => e5.id === d2.value), ...e4].filter(Boolean), i2.preventScrollOnEntryFocus);
      }
    }
    m2.value = false;
  }
  function y2() {
    setTimeout(() => {
      m2.value = false;
    }, 1);
  }
  return t2({ getItems: g2 }), er({ loop: o2, dir: l2, orientation: s2, currentTabStopId: d2, onItemFocus: (e3) => {
    d2.value = e3;
  }, onItemShiftTab: () => {
    p2.value = true;
  }, onFocusableItemAdd: () => {
    h2.value++;
  }, onFocusableItemRemove: () => {
    h2.value--;
  } }), (e3, t3) => (D(), F(u(_2), null, { default: A(() => [n(u(U), { tabindex: p2.value || h2.value === 0 ? -1 : 0, "data-orientation": u(s2), as: e3.as, "as-child": e3.asChild, dir: u(l2), style: { outline: `none` }, onMousedown: t3[0] || (t3[0] = (e4) => m2.value = true), onMouseup: y2, onFocus: v2, onBlur: t3[1] || (t3[1] = (e4) => p2.value = false) }, { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 8, [`tabindex`, `data-orientation`, `as`, `as-child`, `dir`])]), _: 3 }));
} }), nr = E({ __name: `MenuArrow`, props: { width: { type: Number, required: false }, height: { type: Number, required: false }, rounded: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return (t3, r2) => (D(), F(u(Te), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), rr = E({ __name: `ContextMenuArrow`, props: { width: { type: Number, required: false, default: 10 }, height: { type: Number, required: false, default: 5 }, rounded: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `svg` } }, setup(t2) {
  let n2 = t2;
  return q(), (t3, r2) => (D(), F(u(nr), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} });
function ir() {
  let e2 = I(false);
  return _(() => {
    de(`keydown`, () => {
      e2.value = true;
    }, { capture: true, passive: true }), de([`pointerdown`, `pointermove`], () => {
      e2.value = false;
    }, { capture: true, passive: true });
  }), e2;
}
var ar = ge(ir), [or, sr] = G([`MenuRoot`, `MenuSub`], `MenuContext`), [cr, lr] = G(`MenuRoot`), ur = E({ __name: `MenuRoot`, props: { open: { type: Boolean, required: false, default: false }, dir: { type: String, required: false }, modal: { type: Boolean, required: false, default: true } }, emits: [`update:open`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, { modal: i2, dir: a2 } = f(n2), o2 = Z(a2), s2 = K(n2, `open`, r2), c2 = I(), l2 = ar();
  return sr({ open: s2, onOpenChange: (e3) => {
    s2.value = e3;
  }, content: c2, onContentChange: (e3) => {
    c2.value = e3;
  } }), lr({ onClose: () => {
    s2.value = false;
  }, isUsingKeyboardRef: l2, dir: o2, modal: i2 }), (e3, t3) => (D(), F(u(ye), null, { default: A(() => [R(e3.$slots, `default`)]), _: 3 }));
} }), [dr, fr] = G(`MenuContent`), pr = E({ __name: `MenuContentImpl`, props: d({ loop: { type: Boolean, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false }, disableOutsideScroll: { type: Boolean, required: false }, trapFocus: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, { ...ve }), emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`, `dismiss`], setup(e2, { emit: t2 }) {
  let r2 = e2, i2 = t2, a2 = or(), s2 = cr(), { trapFocus: c2, disableOutsidePointerEvents: l2, loop: d2 } = f(r2);
  jn(), yt(l2.value);
  let p2 = I(``), m2 = I(0), h2 = I(0), g2 = I(null), _2 = I(`right`), v2 = I(0), y2 = I(null), b2 = I(), { forwardRef: S2, currentElement: C2 } = q(), { handleTypeaheadSearch: w2 } = wt(), T2 = I();
  function E2(e3) {
    let t3 = Me(e3, T2.value || Q(), C2.value, { loop: d2.value, arrowKeyOptions: `vertical`, dir: s2?.dir.value, focus: false, attributeName: `[data-reka-collection-item]:not([data-disabled])` });
    t3 && (T2.value = t3, t3.scrollIntoView({ block: `nearest` }));
  }
  function O2() {
    T2.value && T2.value.click();
  }
  let k2 = I(), j2 = I();
  o(T2, (e3) => {
    j2.value && (e3 === void 0 || e3 !== j2.value.trigger.value) && (j2.value.onOpenChange(false), j2.value = void 0);
  }), o(C2, (e3) => {
    a2.onContentChange(e3);
  }), x(() => {
    window.clearTimeout(m2.value);
  });
  function M2(e3) {
    return _2.value === g2.value?.side && gt(e3, g2.value?.area);
  }
  async function N2(e3) {
    i2(`openAutoFocus`, e3), !e3.defaultPrevented && (e3.preventDefault(), C2.value?.focus({ preventScroll: true }));
  }
  function P2(e3) {
    if (e3.defaultPrevented) return;
    let t3 = e3.target, n2 = t3.closest(`[data-reka-menu-content]`) === e3.currentTarget, r3 = [`input`, `textarea`].includes(t3.tagName.toLowerCase()), i3 = e3.ctrlKey || e3.altKey || e3.metaKey, a3 = e3.key.length === 1, o2 = Me(e3, Q(), C2.value, { loop: d2.value, arrowKeyOptions: `vertical`, dir: s2?.dir.value, focus: true, attributeName: `[data-reka-collection-item]:not([data-disabled])` });
    if (o2) return o2?.focus();
    if (e3.code === `Space`) return;
    let c3 = b2.value?.getItems() ?? [];
    if (n2 && (e3.key === `Tab` && e3.preventDefault(), !i3 && a3 && !r3 && w2(e3.key, c3)), e3.target !== C2.value || !ct.includes(e3.key)) return;
    e3.preventDefault();
    let l3 = [...c3.map((e4) => e4.ref)];
    st.includes(e3.key) && l3.reverse(), mt(l3);
  }
  function L2(e3) {
    e3?.currentTarget?.contains?.(e3.target) || (window.clearTimeout(m2.value), p2.value = ``);
  }
  function ee2(e3) {
    if (!_t(e3)) return;
    let t3 = e3.target, n2 = v2.value !== e3.clientX;
    e3?.currentTarget?.contains(t3) && n2 && (_2.value = e3.clientX > v2.value ? `right` : `left`, v2.value = e3.clientX);
  }
  function z2(e3) {
    _t(e3) && k2.value && k2.value.focus();
  }
  return fr({ onItemEnter: (e3) => !!M2(e3), onItemLeave: (e3) => M2(e3) ? true : ([`INPUT`, `TEXTAREA`].includes(Q()?.tagName || ``) || C2.value?.focus(), y2.value = null, false), onTriggerLeave: (e3) => !!M2(e3), searchRef: p2, highlightedElement: T2, onKeydownNavigation: E2, onKeydownEnter: O2, filterElement: k2, onFilterElementChange: (e3) => {
    k2.value = e3;
  }, activeSubmenuContext: j2, pointerGraceTimerRef: h2, onPointerGraceIntentChange: (e3) => {
    g2.value = e3;
  } }), (e3, t3) => (D(), F(u(rt), { "as-child": ``, trapped: u(c2), onMountAutoFocus: N2, onUnmountAutoFocus: t3[7] || (t3[7] = (e4) => i2(`closeAutoFocus`, e4)) }, { default: A(() => [n(u(Se), { "as-child": ``, "disable-outside-pointer-events": u(l2), onEscapeKeyDown: t3[2] || (t3[2] = (e4) => i2(`escapeKeyDown`, e4)), onPointerDownOutside: t3[3] || (t3[3] = (e4) => i2(`pointerDownOutside`, e4)), onFocusOutside: t3[4] || (t3[4] = (e4) => i2(`focusOutside`, e4)), onInteractOutside: t3[5] || (t3[5] = (e4) => i2(`interactOutside`, e4)), onDismiss: t3[6] || (t3[6] = (e4) => i2(`dismiss`)) }, { default: A(() => [n(u(tr), { ref_key: `rovingFocusGroupRef`, ref: b2, "current-tab-stop-id": y2.value, "onUpdate:currentTabStopId": t3[0] || (t3[0] = (e4) => y2.value = e4), "as-child": ``, orientation: `vertical`, dir: u(s2).dir.value, loop: u(d2), onEntryFocus: t3[1] || (t3[1] = (e4) => {
    i2(`entryFocus`, e4), u(s2).isUsingKeyboardRef.value || e4.preventDefault();
  }) }, { default: A(() => [n(u(xe), { ref: u(S2), role: `menu`, as: e3.as, "as-child": e3.asChild, "aria-orientation": `vertical`, "data-reka-menu-content": ``, "data-state": u(dt)(u(a2).open.value), dir: u(s2).dir.value, side: e3.side, "side-offset": e3.sideOffset, align: e3.align, "align-offset": e3.alignOffset, "avoid-collisions": e3.avoidCollisions, "collision-boundary": e3.collisionBoundary, "collision-padding": e3.collisionPadding, "arrow-padding": e3.arrowPadding, "prioritize-position": e3.prioritizePosition, "position-strategy": e3.positionStrategy, "update-position-strategy": e3.updatePositionStrategy, sticky: e3.sticky, "hide-when-detached": e3.hideWhenDetached, reference: e3.reference, onKeydown: P2, onBlur: L2, onPointermove: ee2, onPointerenter: z2 }, { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 8, [`as`, `as-child`, `data-state`, `dir`, `side`, `side-offset`, `align`, `align-offset`, `avoid-collisions`, `collision-boundary`, `collision-padding`, `arrow-padding`, `prioritize-position`, `position-strategy`, `update-position-strategy`, `sticky`, `hide-when-detached`, `reference`])]), _: 3 }, 8, [`current-tab-stop-id`, `dir`, `loop`])]), _: 3 }, 8, [`disable-outside-pointer-events`])]), _: 3 }, 8, [`trapped`]));
} }), mr = E({ inheritAttrs: false, __name: `MenuItemImpl`, props: { disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2, r2 = dr(), { forwardRef: i2, currentElement: a2 } = q(), { CollectionItem: o2 } = Ot(), s2 = I(false), c2 = S(() => s2.value || a2.value != null && r2.highlightedElement.value === a2.value);
  async function l2(e3) {
    if (!(e3.defaultPrevented || !_t(e3))) {
      if (t2.disabled) r2.onItemLeave(e3);
      else if (!r2.onItemEnter(e3)) {
        let t3 = e3.currentTarget;
        r2.highlightedElement.value = t3, [`INPUT`, `TEXTAREA`].includes(Q()?.tagName || ``) || t3.focus({ preventScroll: true });
      }
    }
  }
  async function d2(e3) {
    await N(), !e3.defaultPrevented && _t(e3) && r2.highlightedElement.value === a2.value && !r2.onItemLeave(e3) && r2.highlightedElement.value === a2.value && (r2.highlightedElement.value = void 0);
  }
  return (e3, t3) => (D(), F(u(o2), { value: { textValue: e3.textValue } }, { default: A(() => [n(u(U), y({ ref: u(i2), role: `menuitem`, tabindex: `-1` }, e3.$attrs, { as: e3.as, "as-child": e3.asChild, "aria-disabled": e3.disabled || void 0, "data-disabled": e3.disabled ? `` : void 0, "data-highlighted": c2.value ? `` : void 0, onPointermove: l2, onPointerleave: d2, onFocus: t3[0] || (t3[0] = async (t4) => {
    await N(), !(t4.defaultPrevented || e3.disabled) && (s2.value = true, u(r2).highlightedElement.value = t4.currentTarget);
  }), onBlur: t3[1] || (t3[1] = async (e4) => {
    await N(), !e4.defaultPrevented && (s2.value = false);
  }) }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`as`, `as-child`, `aria-disabled`, `data-disabled`, `data-highlighted`])]), _: 3 }, 8, [`value`]));
} }), hr = E({ __name: `MenuItem`, props: { disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, { forwardRef: i2, currentElement: a2 } = q(), o2 = cr(), s2 = dr(), c2 = I(false);
  async function l2() {
    let e3 = a2.value;
    if (!n2.disabled && e3) {
      let e4 = new CustomEvent(it, { bubbles: true, cancelable: true });
      r2(`select`, e4), await N(), e4.defaultPrevented ? c2.value = false : o2.onClose();
    }
  }
  return (e3, t3) => (D(), F(mr, y(n2, { ref: u(i2), onClick: l2, onPointerdown: t3[0] || (t3[0] = () => {
    c2.value = true;
  }), onPointerup: t3[1] || (t3[1] = async (e4) => {
    await N(), !e4.defaultPrevented && (c2.value || e4.currentTarget?.click());
  }), onKeydown: t3[2] || (t3[2] = async (t4) => {
    let n3 = u(s2).searchRef.value !== ``;
    e3.disabled || n3 && t4.key === ` ` || u(at).includes(t4.key) && (t4.currentTarget?.click(), t4.preventDefault());
  }) }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16));
} }), [gr, _r] = G([`MenuCheckboxItem`, `MenuRadioItem`], `MenuItemIndicatorContext`), vr = E({ __name: `MenuItemIndicator`, props: { forceMount: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `span` } }, setup(e2) {
  let t2 = gr({ modelValue: I(false) });
  return (e3, r2) => (D(), F(u(De), { present: e3.forceMount || u(ft)(u(t2).modelValue.value) || u(t2).modelValue.value === true }, { default: A(() => [n(u(U), { as: e3.as, "as-child": e3.asChild, "data-state": u(pt)(u(t2).modelValue.value) }, { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 8, [`as`, `as-child`, `data-state`])]), _: 3 }, 8, [`present`]));
} }), yr = E({ __name: `MenuCheckboxItem`, props: { modelValue: { type: [Boolean, String], required: false, default: false }, disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`, `update:modelValue`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, i2 = te(me(n2, [`modelValue`])), a2 = K(n2, `modelValue`, r2);
  return _r({ modelValue: a2 }), (e3, t3) => (D(), F(hr, y({ role: `menuitemcheckbox` }, u(i2), { "aria-checked": u(ft)(u(a2)) ? `mixed` : u(a2), "data-state": u(pt)(u(a2)), onSelect: t3[0] || (t3[0] = async (e4) => {
    r2(`select`, e4), u(ft)(u(a2)) ? a2.value = true : a2.value = !u(a2);
  }) }), { default: A(() => [R(e3.$slots, `default`, { modelValue: u(a2) })]), _: 3 }, 16, [`aria-checked`, `data-state`]));
} }), br = E({ __name: `ContextMenuCheckboxItem`, props: { modelValue: { type: [Boolean, String], required: false }, disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`, `update:modelValue`], setup(t2, { emit: n2 }) {
  let r2 = t2, i2 = W(n2);
  return q(), (t3, n3) => (D(), F(u(yr), e(B({ ...r2, ...u(i2) })), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), [xr, Sr] = G(`ContextMenuRoot`), Cr = E({ inheritAttrs: false, __name: `ContextMenuRoot`, props: { pressOpenDelay: { type: Number, required: false, default: 700 }, dir: { type: String, required: false }, modal: { type: Boolean, required: false, default: true } }, emits: [`update:open`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, { dir: i2, modal: a2, pressOpenDelay: s2 } = f(n2);
  q();
  let c2 = Z(i2), l2 = I(false);
  return Sr({ open: l2, onOpenChange: (e3) => {
    l2.value = e3;
  }, dir: c2, modal: a2, triggerElement: I(), pressOpenDelay: s2 }), o(l2, (e3) => {
    r2(`update:open`, e3);
  }), (e3, t3) => (D(), F(u(ur), { open: l2.value, "onUpdate:open": t3[0] || (t3[0] = (e4) => l2.value = e4), dir: u(c2), modal: u(a2) }, { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 8, [`open`, `dir`, `modal`]));
} }), wr = E({ __name: `MenuRootContentModal`, props: { loop: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, i2 = J(n2, r2), a2 = or(), { forwardRef: o2, currentElement: s2 } = q();
  return Ue(s2), (e3, t3) => (D(), F(pr, y(u(i2), { ref: u(o2), "trap-focus": u(a2).open.value, "disable-outside-pointer-events": u(a2).open.value, "disable-outside-scroll": true, onDismiss: t3[0] || (t3[0] = (e4) => u(a2).onOpenChange(false)), onFocusOutside: t3[1] || (t3[1] = H((e4) => r2(`focusOutside`, e4), [`prevent`])) }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`trap-focus`, `disable-outside-pointer-events`]));
} }), Tr = E({ __name: `MenuRootContentNonModal`, props: { loop: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = J(e2, t2), r2 = or();
  return (e3, t3) => (D(), F(pr, y(u(n2), { "trap-focus": false, "disable-outside-pointer-events": false, "disable-outside-scroll": false, onDismiss: t3[0] || (t3[0] = (e4) => u(r2).onOpenChange(false)) }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16));
} }), Er = E({ __name: `MenuContent`, props: { forceMount: { type: Boolean, required: false }, loop: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`], setup(t2, { emit: n2 }) {
  let r2 = J(t2, n2), i2 = or(), a2 = cr();
  return (t3, n3) => (D(), F(u(De), { present: t3.forceMount || u(i2).open.value }, { default: A(() => [u(a2).modal.value ? (D(), F(wr, e(y({ key: 0 }, { ...t3.$attrs, ...u(r2) })), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16)) : (D(), F(Tr, e(y({ key: 1 }, { ...t3.$attrs, ...u(r2) })), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16))]), _: 3 }, 8, [`present`]));
} }), Dr = E({ __name: `ContextMenuContent`, props: { forceMount: { type: Boolean, required: false }, loop: { type: Boolean, required: false }, sideFlip: { type: Boolean, required: false }, alignOffset: { type: Number, required: false, default: 0 }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false, default: true }, collisionBoundary: { type: null, required: false, default: () => [] }, collisionPadding: { type: [Number, Object], required: false, default: 0 }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false, default: `partial` }, hideWhenDetached: { type: Boolean, required: false, default: false }, positionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = J(e2, t2);
  q();
  let r2 = xr(), i2 = I(false);
  return (e3, t3) => (D(), F(u(Er), y(u(n2), { side: `right`, "side-offset": 2, align: `start`, "update-position-strategy": `always`, style: { "--reka-context-menu-content-transform-origin": `var(--reka-popper-transform-origin)`, "--reka-context-menu-content-available-width": `var(--reka-popper-available-width)`, "--reka-context-menu-content-available-height": `var(--reka-popper-available-height)`, "--reka-context-menu-trigger-width": `var(--reka-popper-anchor-width)`, "--reka-context-menu-trigger-height": `var(--reka-popper-anchor-height)` }, onCloseAutoFocus: t3[0] || (t3[0] = (e4) => {
    !e4.defaultPrevented && i2.value && e4.preventDefault(), i2.value = false;
  }), onInteractOutside: t3[1] || (t3[1] = (e4) => {
    e4.detail.originalEvent.button === 2 && e4.target === u(r2).triggerElement.value && e4.preventDefault(), !e4.defaultPrevented && !u(r2).modal.value && (i2.value = true);
  }) }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16));
} }), [Or, kr] = G(`MenuGroup`), Ar = E({ __name: `MenuGroup`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2, n2 = Y(void 0, `reka-menu-group`);
  return kr({ id: n2 }), (e3, r2) => (D(), F(u(U), y({ role: `group` }, t2, { "aria-labelledby": u(n2) }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`aria-labelledby`]));
} }), jr = E({ __name: `ContextMenuGroup`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return q(), (t3, r2) => (D(), F(u(Ar), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), Mr = E({ __name: `ContextMenuItem`, props: { disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`], setup(t2, { emit: n2 }) {
  let r2 = t2, i2 = W(n2);
  return q(), (t3, n3) => (D(), F(u(hr), e(B({ ...r2, ...u(i2) })), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), Nr = E({ __name: `ContextMenuItemIndicator`, props: { forceMount: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return q(), (t3, r2) => (D(), F(u(vr), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), Pr = E({ __name: `MenuLabel`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `div` } }, setup(e2) {
  let t2 = e2, n2 = Or({ id: `` });
  return (e3, r2) => (D(), F(u(U), y(t2, { id: u(n2).id || void 0 }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`id`]));
} }), Fr = E({ __name: `ContextMenuLabel`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return q(), (t3, r2) => (D(), F(u(Pr), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), Ir = E({ __name: `MenuPortal`, props: { to: { type: null, required: false }, disabled: { type: Boolean, required: false }, defer: { type: Boolean, required: false }, forceMount: { type: Boolean, required: false } }, setup(t2) {
  let n2 = t2;
  return (t3, r2) => (D(), F(u(we), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), Lr = E({ __name: `ContextMenuPortal`, props: { to: { type: null, required: false }, disabled: { type: Boolean, required: false }, defer: { type: Boolean, required: false }, forceMount: { type: Boolean, required: false } }, setup(t2) {
  let n2 = t2;
  return (t3, r2) => (D(), F(u(Ir), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), [Rr, zr] = G(`MenuRadioGroup`), Br = E({ __name: `MenuRadioGroup`, props: { modelValue: { type: null, required: false, default: `` }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`update:modelValue`], setup(t2, { emit: n2 }) {
  let r2 = t2, i2 = n2, a2 = te(me(r2, [`modelValue`])), o2 = K(r2, `modelValue`, i2);
  return zr({ modelValue: o2, onValueChange: (e2) => {
    o2.value = e2;
  } }), (t3, n3) => (D(), F(Ar, e(B(u(a2))), { default: A(() => [R(t3.$slots, `default`, { modelValue: u(o2) })]), _: 3 }, 16));
} }), Vr = E({ __name: `ContextMenuRadioGroup`, props: { modelValue: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`update:modelValue`], setup(t2, { emit: n2 }) {
  let r2 = t2, i2 = W(n2);
  return q(), (t3, n3) => (D(), F(u(Br), e(B({ ...r2, ...u(i2) })), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), Hr = E({ __name: `MenuRadioItem`, props: { value: { type: null, required: true }, disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, i2 = te(me(n2, [`value`])), { value: a2 } = f(n2), o2 = Rr(), s2 = S(() => o2.modelValue.value === a2?.value);
  return _r({ modelValue: s2 }), (e3, t3) => (D(), F(hr, y({ role: `menuitemradio` }, u(i2), { "aria-checked": s2.value, "data-state": u(pt)(s2.value), onSelect: t3[0] || (t3[0] = async (e4) => {
    r2(`select`, e4), u(o2).onValueChange(u(a2));
  }) }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`aria-checked`, `data-state`]));
} }), Ur = E({ __name: `ContextMenuRadioItem`, props: { value: { type: null, required: true }, disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`], setup(t2, { emit: n2 }) {
  let r2 = t2, i2 = W(n2);
  return q(), (t3, n3) => (D(), F(u(Hr), e(B({ ...r2, ...u(i2) })), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), Wr = E({ __name: `MenuSeparator`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2;
  return (e3, n2) => (D(), F(u(U), y(t2, { role: `separator`, "aria-orientation": `horizontal` }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16));
} }), Gr = E({ __name: `ContextMenuSeparator`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return q(), (t3, r2) => (D(), F(u(Wr), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), [Kr, qr] = G(`MenuSub`), Jr = E({ __name: `MenuSub`, props: { open: { type: Boolean, required: false, default: void 0 } }, emits: [`update:open`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = K(n2, `open`, t2, { defaultValue: false, passive: n2.open === void 0 }), i2 = or(), a2 = I(), o2 = I();
  return p((e3) => {
    i2?.open.value === false && (r2.value = false), e3(() => r2.value = false);
  }), sr({ open: r2, onOpenChange: (e3) => {
    r2.value = e3;
  }, content: o2, onContentChange: (e3) => {
    o2.value = e3;
  } }), qr({ triggerId: ``, contentId: ``, trigger: a2, onTriggerChange: (e3) => {
    a2.value = e3;
  } }), (e3, t3) => (D(), F(u(ye), null, { default: A(() => [R(e3.$slots, `default`)]), _: 3 }));
} }), Yr = E({ __name: `ContextMenuSub`, props: { defaultOpen: { type: Boolean, required: false }, open: { type: Boolean, required: false, default: void 0 } }, emits: [`update:open`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2;
  q();
  let i2 = K(n2, `open`, r2, { defaultValue: n2.defaultOpen, passive: n2.open === void 0 });
  return (e3, t3) => (D(), F(u(Jr), { open: u(i2), "onUpdate:open": t3[0] || (t3[0] = (e4) => P(i2) ? i2.value = e4 : null) }, { default: A(() => [R(e3.$slots, `default`, { open: u(i2) })]), _: 3 }, 8, [`open`]));
} }), Xr = E({ __name: `MenuSubContent`, props: { forceMount: { type: Boolean, required: false }, loop: { type: Boolean, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false, default: true }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let r2 = J(e2, t2), i2 = or(), a2 = cr(), o2 = Kr(), s2 = dr(), { forwardRef: c2, currentElement: l2 } = q();
  return o2.contentId || (o2.contentId = Y(void 0, `reka-menu-sub-content`)), (e3, t3) => (D(), F(u(De), { present: e3.forceMount || u(i2).open.value }, { default: A(() => [n(pr, y(u(r2), { id: u(o2).contentId, ref: u(c2), "aria-labelledby": u(o2).triggerId, align: `start`, side: u(a2).dir.value === `rtl` ? `left` : `right`, "disable-outside-pointer-events": false, "disable-outside-scroll": false, "trap-focus": false, onOpenAutoFocus: t3[0] || (t3[0] = H((e4) => {
    u(a2).isUsingKeyboardRef.value && u(l2)?.focus();
  }, [`prevent`])), onCloseAutoFocus: t3[1] || (t3[1] = H(() => {
  }, [`prevent`])), onFocusOutside: t3[2] || (t3[2] = (e4) => {
    if (e4.defaultPrevented) return;
    let t4 = u(s2).filterElement.value?.contains(e4.target);
    e4.target !== u(o2).trigger.value && !t4 && u(i2).onOpenChange(false);
  }), onEscapeKeyDown: t3[3] || (t3[3] = (e4) => {
    u(a2).onClose(), e4.preventDefault();
  }), onKeydown: t3[4] || (t3[4] = (e4) => {
    let t4 = e4.currentTarget?.contains(e4.target), n2 = u(ut)[u(a2).dir.value].includes(e4.key);
    t4 && n2 && (u(i2).onOpenChange(false), u(s2).filterElement.value ? (u(s2).filterElement.value.focus(), u(s2).highlightedElement.value = u(o2).trigger.value, u(o2).trigger.value?.scrollIntoView({ block: `nearest` })) : u(o2).trigger.value?.focus(), e4.preventDefault());
  }) }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`id`, `aria-labelledby`, `side`])]), _: 3 }, 8, [`present`]));
} }), Zr = E({ __name: `ContextMenuSubContent`, props: { forceMount: { type: Boolean, required: false }, loop: { type: Boolean, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = J(e2, t2);
  return q(), (e3, t3) => (D(), F(u(Xr), y(u(n2), { style: { "--reka-context-menu-content-transform-origin": `var(--reka-popper-transform-origin)`, "--reka-context-menu-content-available-width": `var(--reka-popper-available-width)`, "--reka-context-menu-content-available-height": `var(--reka-popper-available-height)`, "--reka-context-menu-trigger-width": `var(--reka-popper-anchor-width)`, "--reka-context-menu-trigger-height": `var(--reka-popper-anchor-height)` } }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16));
} }), Qr = E({ __name: `MenuAnchor`, props: { reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return (t3, r2) => (D(), F(u(Ee), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), $r = E({ __name: `MenuSubTrigger`, props: { disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2, r2 = or(), i2 = cr(), a2 = Kr(), s2 = dr();
  o(r2.open, (e3) => {
    e3 ? s2.activeSubmenuContext.value = { onOpenChange: r2.onOpenChange, trigger: a2.trigger } : s2.activeSubmenuContext.value?.trigger.value === a2.trigger.value && (s2.activeSubmenuContext.value = void 0);
  });
  let c2 = I(null);
  a2.triggerId || (a2.triggerId = Y(void 0, `reka-menu-sub-trigger`));
  function l2() {
    c2.value && window.clearTimeout(c2.value), c2.value = null;
  }
  x(() => {
    l2();
  });
  function d2(e3) {
    _t(e3) && (s2.onItemEnter(e3) || !t2.disabled && !r2.open.value && !c2.value && (s2.onPointerGraceIntentChange(null), c2.value = window.setTimeout(() => {
      r2.onOpenChange(true), l2();
    }, 100)));
  }
  async function f2(e3) {
    if (!_t(e3)) return;
    l2();
    let t3 = r2.content.value?.getBoundingClientRect();
    if (t3?.width) {
      let n2 = r2.content.value?.dataset.side, i3 = n2 === `right`, a3 = i3 ? -5 : 5, o2 = t3[i3 ? `left` : `right`], c3 = t3[i3 ? `right` : `left`];
      s2.onPointerGraceIntentChange({ area: [{ x: e3.clientX + a3, y: e3.clientY }, { x: o2, y: t3.top }, { x: c3, y: t3.top }, { x: c3, y: t3.bottom }, { x: o2, y: t3.bottom }], side: n2 }), window.clearTimeout(s2.pointerGraceTimerRef.value), s2.pointerGraceTimerRef.value = window.setTimeout(() => s2.onPointerGraceIntentChange(null), 300);
    } else {
      if (s2.onTriggerLeave(e3)) return;
      s2.onPointerGraceIntentChange(null);
    }
  }
  async function p2(e3) {
    let n2 = s2.searchRef.value !== ``;
    t2.disabled || n2 && e3.key === ` ` || lt[i2.dir.value].includes(e3.key) && (r2.onOpenChange(true), await N(), r2.content.value?.focus(), e3.preventDefault());
  }
  return (e3, i3) => (D(), F(Qr, { "as-child": `` }, { default: A(() => [n(mr, y(t2, { id: u(a2).triggerId, ref: (e4) => {
    e4 && u(a2)?.onTriggerChange(e4?.$el);
  }, "aria-haspopup": `menu`, "aria-expanded": u(r2).open.value, "aria-controls": u(a2).contentId, "data-state": u(dt)(u(r2).open.value), onClick: i3[0] || (i3[0] = async (e4) => {
    t2.disabled || e4.defaultPrevented || (e4.currentTarget?.focus(), u(r2).open.value || u(r2).onOpenChange(true));
  }), onPointermove: d2, onPointerleave: f2, onKeydown: p2 }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`id`, `aria-expanded`, `aria-controls`, `data-state`])]), _: 3 }));
} }), ei = E({ __name: `ContextMenuSubTrigger`, props: { disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return q(), (t3, r2) => (D(), F(u($r), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} });
function ti(e2) {
  return e2.pointerType !== `mouse`;
}
var ni = E({ inheritAttrs: false, __name: `ContextMenuTrigger`, props: { disabled: { type: Boolean, required: false, default: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `span` } }, setup(e2) {
  let { disabled: t2 } = f(e2), { forwardRef: r2, currentElement: i2 } = q(), a2 = xr(), o2 = I({ x: 0, y: 0 }), s2 = S(() => ({ getBoundingClientRect: () => ({ width: 0, height: 0, left: o2.value.x, right: o2.value.x, top: o2.value.y, bottom: o2.value.y, ...o2.value }) })), c2 = I(0);
  function l2() {
    window.clearTimeout(c2.value);
  }
  function d2(e3) {
    o2.value = { x: e3.clientX, y: e3.clientY }, a2.onOpenChange(true);
  }
  async function p2(e3) {
    t2.value || (await N(), e3.defaultPrevented || (l2(), d2(e3), e3.preventDefault()));
  }
  async function m2(e3) {
    t2.value || (await N(), ti(e3) && !e3.defaultPrevented && (l2(), c2.value = window.setTimeout(d2, a2.pressOpenDelay.value, e3)));
  }
  async function g2(e3) {
    t2.value || (await N(), ti(e3) && !e3.defaultPrevented && l2());
  }
  return _(() => {
    i2.value && (a2.triggerElement.value = i2.value);
  }), (e3, i3) => (D(), h(O, null, [n(u(Qr), { as: `template`, reference: s2.value }, null, 8, [`reference`]), n(u(U), y({ ref: u(r2), as: e3.as, "as-child": e3.asChild, "data-state": u(a2).open.value ? `open` : `closed`, "data-disabled": u(t2) ? `` : void 0, style: { WebkitTouchCallout: `none`, pointerEvents: `auto` } }, e3.$attrs, { onContextmenu: p2, onPointerdown: m2, onPointermove: g2, onPointercancel: g2, onPointerup: g2 }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`as`, `as-child`, `data-state`, `data-disabled`])], 64));
} }), [ri, ii] = G(`PopoverRoot`), ai = E({ __name: `PopoverRoot`, props: { defaultOpen: { type: Boolean, required: false, default: false }, open: { type: Boolean, required: false, default: void 0 }, modal: { type: Boolean, required: false, default: false } }, emits: [`update:open`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, { modal: i2 } = f(n2), a2 = K(n2, `open`, r2, { defaultValue: n2.defaultOpen, passive: n2.open === void 0 });
  return ii({ contentId: ``, triggerId: ``, modal: i2, open: a2, onOpenChange: (e3) => {
    a2.value = e3;
  }, onOpenToggle: () => {
    a2.value = !a2.value;
  }, triggerElement: I(), hasCustomAnchor: I(false) }), (e3, t3) => (D(), F(u(ye), null, { default: A(() => [R(e3.$slots, `default`, { open: u(a2), close: () => a2.value = false })]), _: 3 }));
} }), oi = E({ __name: `PopoverAnchor`, props: { reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  q();
  let r2 = ri();
  return j(() => {
    r2.hasCustomAnchor.value = true;
  }), x(() => {
    r2.hasCustomAnchor.value = false;
  }), (t3, r3) => (D(), F(u(Ee), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), si = E({ __name: `PopoverArrow`, props: { width: { type: Number, required: false, default: 10 }, height: { type: Number, required: false, default: 5 }, rounded: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `svg` } }, setup(t2) {
  let n2 = t2;
  return q(), (t3, r2) => (D(), F(u(Te), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), ci = E({ __name: `PopoverClose`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2;
  q();
  let n2 = ri();
  return (e3, r2) => (D(), F(u(U), { type: e3.as === `button` ? `button` : void 0, as: e3.as, "as-child": t2.asChild, onClick: r2[0] || (r2[0] = (e4) => u(n2).onOpenChange(false)) }, { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 8, [`type`, `as`, `as-child`]));
} }), li = E({ __name: `PopoverContentImpl`, props: { trapFocus: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let r2 = e2, i2 = t2, a2 = te(me(r2, `trapFocus`, `disableOutsidePointerEvents`)), { forwardRef: o2 } = q(), s2 = ri();
  return jn(), (e3, t3) => (D(), F(u(rt), { "as-child": ``, loop: ``, trapped: e3.trapFocus, onMountAutoFocus: t3[5] || (t3[5] = (e4) => i2(`openAutoFocus`, e4)), onUnmountAutoFocus: t3[6] || (t3[6] = (e4) => i2(`closeAutoFocus`, e4)) }, { default: A(() => [n(u(Se), { "as-child": ``, "disable-outside-pointer-events": e3.disableOutsidePointerEvents, onPointerDownOutside: t3[0] || (t3[0] = (e4) => i2(`pointerDownOutside`, e4)), onInteractOutside: t3[1] || (t3[1] = (e4) => i2(`interactOutside`, e4)), onEscapeKeyDown: t3[2] || (t3[2] = (e4) => i2(`escapeKeyDown`, e4)), onFocusOutside: t3[3] || (t3[3] = (e4) => i2(`focusOutside`, e4)), onDismiss: t3[4] || (t3[4] = (e4) => u(s2).onOpenChange(false)) }, { default: A(() => [n(u(xe), y(u(a2), { id: u(s2).contentId, ref: u(o2), "data-state": u(s2).open.value ? `open` : `closed`, "aria-labelledby": u(s2).triggerId, style: { "--reka-popover-content-transform-origin": `var(--reka-popper-transform-origin)`, "--reka-popover-content-available-width": `var(--reka-popper-available-width)`, "--reka-popover-content-available-height": `var(--reka-popper-available-height)`, "--reka-popover-trigger-width": `var(--reka-popper-anchor-width)`, "--reka-popover-trigger-height": `var(--reka-popper-anchor-height)` }, role: `dialog` }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`id`, `data-state`, `aria-labelledby`])]), _: 3 }, 8, [`disable-outside-pointer-events`])]), _: 3 }, 8, [`trapped`]));
} }), ui = E({ __name: `PopoverContentModal`, props: { side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, i2 = ri(), a2 = I(false);
  yt(true);
  let o2 = J(n2, r2), { forwardRef: s2, currentElement: c2 } = q();
  return Ue(c2), (e3, t3) => (D(), F(li, y(u(o2), { ref: u(s2), "trap-focus": u(i2).open.value, "disable-outside-pointer-events": ``, onCloseAutoFocus: t3[0] || (t3[0] = H((e4) => {
    r2(`closeAutoFocus`, e4), a2.value || u(i2).triggerElement.value?.focus();
  }, [`prevent`])), onPointerDownOutside: t3[1] || (t3[1] = (e4) => {
    r2(`pointerDownOutside`, e4);
    let t4 = e4.detail.originalEvent, n3 = t4.button === 0 && t4.ctrlKey === true;
    a2.value = t4.button === 2 || n3;
  }), onFocusOutside: t3[2] || (t3[2] = H(() => {
  }, [`prevent`])) }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`trap-focus`]));
} }), di = E({ __name: `PopoverContentNonModal`, props: { side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, i2 = ri(), a2 = I(false), o2 = I(false), s2 = J(n2, r2);
  return (e3, t3) => (D(), F(li, y(u(s2), { "trap-focus": false, "disable-outside-pointer-events": false, onCloseAutoFocus: t3[0] || (t3[0] = (e4) => {
    r2(`closeAutoFocus`, e4), e4.defaultPrevented || (a2.value || u(i2).triggerElement.value?.focus(), e4.preventDefault()), a2.value = false, o2.value = false;
  }), onInteractOutside: t3[1] || (t3[1] = async (e4) => {
    r2(`interactOutside`, e4), e4.defaultPrevented || (a2.value = true, e4.detail.originalEvent.type === `pointerdown` && (o2.value = true));
    let t4 = e4.target;
    u(i2).triggerElement.value?.contains(t4) && e4.preventDefault(), e4.detail.originalEvent.type === `focusin` && o2.value && e4.preventDefault();
  }) }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16));
} }), fi = E({ __name: `PopoverContent`, props: { forceMount: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, i2 = ri(), a2 = J(n2, r2), { forwardRef: o2 } = q();
  return i2.contentId || (i2.contentId = Y(void 0, `reka-popover-content`)), (e3, t3) => (D(), F(u(De), { present: e3.forceMount || u(i2).open.value }, { default: A(() => [u(i2).modal.value ? (D(), F(ui, y({ key: 0 }, u(a2), { ref: u(o2) }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16)) : (D(), F(di, y({ key: 1 }, u(a2), { ref: u(o2) }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16))]), _: 3 }, 8, [`present`]));
} }), pi = E({ __name: `PopoverPortal`, props: { to: { type: null, required: false }, disabled: { type: Boolean, required: false }, defer: { type: Boolean, required: false }, forceMount: { type: Boolean, required: false } }, setup(t2) {
  let n2 = t2;
  return (t3, r2) => (D(), F(u(we), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), mi = E({ __name: `PopoverTrigger`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2, r2 = ri(), { forwardRef: i2, currentElement: a2 } = q();
  return r2.triggerId || (r2.triggerId = Y(void 0, `reka-popover-trigger`)), _(() => {
    r2.triggerElement.value = a2.value;
  }), (e3, a3) => (D(), F(L(u(r2).hasCustomAnchor.value ? u(U) : u(Ee)), { "as-child": `` }, { default: A(() => [n(u(U), { id: u(r2).triggerId, ref: u(i2), type: e3.as === `button` ? `button` : void 0, "aria-haspopup": `dialog`, "aria-expanded": u(r2).open.value, "aria-controls": u(r2).contentId, "data-state": u(r2).open.value ? `open` : `closed`, as: e3.as, "as-child": t2.asChild, onClick: u(r2).onOpenToggle }, { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 8, [`id`, `type`, `aria-expanded`, `aria-controls`, `data-state`, `as`, `as-child`, `onClick`])]), _: 3 }));
} }), hi = E({ __name: `DropdownMenuArrow`, props: { width: { type: Number, required: false, default: 10 }, height: { type: Number, required: false, default: 5 }, rounded: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `svg` } }, setup(t2) {
  let n2 = t2;
  return q(), (t3, r2) => (D(), F(u(nr), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), gi = E({ __name: `DropdownMenuCheckboxItem`, props: { modelValue: { type: [Boolean, String], required: false }, disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`, `update:modelValue`], setup(t2, { emit: n2 }) {
  let r2 = t2, i2 = W(n2);
  return q(), (t3, n3) => (D(), F(u(yr), e(B({ ...r2, ...u(i2) })), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), [_i, vi] = G(`DropdownMenuRoot`), yi = E({ __name: `DropdownMenuRoot`, props: { defaultOpen: { type: Boolean, required: false }, open: { type: Boolean, required: false, default: void 0 }, dir: { type: String, required: false }, modal: { type: Boolean, required: false, default: true } }, emits: [`update:open`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2;
  q();
  let i2 = K(n2, `open`, r2, { defaultValue: n2.defaultOpen, passive: n2.open === void 0 }), a2 = I(), { modal: o2, dir: s2 } = f(n2), c2 = Z(s2);
  return vi({ open: i2, onOpenChange: (e3) => {
    i2.value = e3;
  }, onOpenToggle: () => {
    i2.value = !i2.value;
  }, triggerId: ``, triggerElement: a2, contentId: ``, modal: o2, dir: c2 }), (e3, t3) => (D(), F(u(ur), { open: u(i2), "onUpdate:open": t3[0] || (t3[0] = (e4) => P(i2) ? i2.value = e4 : null), dir: u(c2), modal: u(o2) }, { default: A(() => [R(e3.$slots, `default`, { open: u(i2) })]), _: 3 }, 8, [`open`, `dir`, `modal`]));
} }), bi = E({ __name: `DropdownMenuContent`, props: { forceMount: { type: Boolean, required: false }, loop: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = J(e2, t2);
  q();
  let r2 = _i(), i2 = I(false);
  function a2(e3) {
    e3.defaultPrevented || (i2.value || setTimeout(() => {
      r2.triggerElement.value?.focus();
    }, 0), i2.value = false, e3.preventDefault());
  }
  return r2.contentId || (r2.contentId = Y(void 0, `reka-dropdown-menu-content`)), (e3, t3) => (D(), F(u(Er), y(u(n2), { id: u(r2).contentId, "aria-labelledby": u(r2)?.triggerId, style: { "--reka-dropdown-menu-content-transform-origin": `var(--reka-popper-transform-origin)`, "--reka-dropdown-menu-content-available-width": `var(--reka-popper-available-width)`, "--reka-dropdown-menu-content-available-height": `var(--reka-popper-available-height)`, "--reka-dropdown-menu-trigger-width": `var(--reka-popper-anchor-width)`, "--reka-dropdown-menu-trigger-height": `var(--reka-popper-anchor-height)` }, onCloseAutoFocus: a2, onInteractOutside: t3[0] || (t3[0] = (e4) => {
    if (e4.defaultPrevented) return;
    let t4 = e4.detail.originalEvent, n3 = t4.button === 0 && t4.ctrlKey === true, a3 = t4.button === 2 || n3;
    (!u(r2).modal.value || a3) && (i2.value = true), u(r2).triggerElement.value?.contains(e4.target) && e4.preventDefault();
  }) }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`id`, `aria-labelledby`]));
} }), xi = E({ __name: `DropdownMenuFilter`, props: { modelValue: { type: String, required: false }, autoFocus: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `input` } }, emits: [`update:modelValue`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = K(n2, `modelValue`, t2, { defaultValue: ``, passive: n2.modelValue === void 0 }), i2 = cr(), s2 = dr(), c2 = Kr(null);
  o(r2, (e3) => {
    s2.searchRef.value = e3 ?? ``;
  }, { immediate: true });
  let { primitiveElement: l2, currentElement: d2 } = X(), f2 = S(() => n2.disabled || false), p2 = I();
  a(() => p2.value = s2.highlightedElement.value?.id), _(() => {
    s2.onFilterElementChange(d2.value), setTimeout(() => {
      n2.autoFocus && (!c2 || i2.isUsingKeyboardRef.value) && d2.value?.focus();
    }, 1);
  }), x(() => {
    s2.onFilterElementChange(void 0), s2.searchRef.value = ``;
  });
  let { isComposing: m2, handleCompositionStart: h2, handleCompositionEnd: g2 } = Ut((e3) => {
    let t3 = e3.target;
    t3 && (r2.value = t3.value, s2.searchRef.value = t3.value);
  });
  function v2(e3) {
    if (f2.value || m2.value) return;
    let t3 = e3.target;
    r2.value = t3.value, s2.searchRef.value = t3.value;
  }
  function y2(e3) {
    if (!f2.value) {
      if (m2.value) {
        e3.stopPropagation();
        return;
      }
      [`ArrowDown`, `ArrowUp`, `Home`, `End`].includes(e3.key) ? (e3.preventDefault(), s2.onKeydownNavigation(e3)) : e3.key === `Enter` ? (e3.preventDefault(), s2.onKeydownEnter(e3)) : e3.key === `Escape` && r2.value && (e3.stopPropagation(), r2.value = ``, s2.searchRef.value = ``);
    }
  }
  return (e3, t3) => (D(), F(u(U), { ref_key: `primitiveElement`, ref: l2, as: e3.as, "as-child": e3.asChild, value: u(r2), disabled: f2.value ? `` : void 0, "data-disabled": f2.value ? `` : void 0, "aria-disabled": f2.value ? true : void 0, "aria-activedescendant": p2.value, type: `text`, role: `searchbox`, onInput: v2, onKeydown: y2, onCompositionstart: u(h2), onCompositionend: u(g2) }, { default: A(() => [R(e3.$slots, `default`, { modelValue: u(r2) })]), _: 3 }, 8, [`as`, `as-child`, `value`, `disabled`, `data-disabled`, `aria-disabled`, `aria-activedescendant`, `onCompositionstart`, `onCompositionend`]));
} }), Si = E({ __name: `DropdownMenuGroup`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return q(), (t3, r2) => (D(), F(u(Ar), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), Ci = E({ __name: `DropdownMenuItem`, props: { disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`], setup(t2, { emit: n2 }) {
  let r2 = t2, i2 = W(n2);
  return q(), (t3, n3) => (D(), F(u(hr), e(B({ ...r2, ...u(i2) })), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), wi = E({ __name: `DropdownMenuItemIndicator`, props: { forceMount: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return q(), (t3, r2) => (D(), F(u(vr), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), Ti = E({ __name: `DropdownMenuLabel`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return q(), (t3, r2) => (D(), F(u(Pr), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), Ei = E({ __name: `DropdownMenuPortal`, props: { to: { type: null, required: false }, disabled: { type: Boolean, required: false }, defer: { type: Boolean, required: false }, forceMount: { type: Boolean, required: false } }, setup(t2) {
  let n2 = t2;
  return (t3, r2) => (D(), F(u(Ir), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), Di = E({ __name: `DropdownMenuRadioGroup`, props: { modelValue: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`update:modelValue`], setup(t2, { emit: n2 }) {
  let r2 = t2, i2 = W(n2);
  return q(), (t3, n3) => (D(), F(u(Br), e(B({ ...r2, ...u(i2) })), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), Oi = E({ __name: `DropdownMenuRadioItem`, props: { value: { type: null, required: true }, disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`select`], setup(t2, { emit: n2 }) {
  let r2 = J(t2, n2);
  return q(), (t3, n3) => (D(), F(u(Hr), e(B(u(r2))), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), ki = E({ __name: `DropdownMenuSeparator`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return q(), (t3, r2) => (D(), F(u(Wr), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), Ai = E({ __name: `DropdownMenuSub`, props: { defaultOpen: { type: Boolean, required: false }, open: { type: Boolean, required: false, default: void 0 } }, emits: [`update:open`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = K(n2, `open`, t2, { passive: n2.open === void 0, defaultValue: n2.defaultOpen ?? false });
  return q(), (e3, t3) => (D(), F(u(Jr), { open: u(r2), "onUpdate:open": t3[0] || (t3[0] = (e4) => P(r2) ? r2.value = e4 : null) }, { default: A(() => [R(e3.$slots, `default`, { open: u(r2) })]), _: 3 }, 8, [`open`]));
} }), ji = E({ __name: `DropdownMenuSubContent`, props: { forceMount: { type: Boolean, required: false }, loop: { type: Boolean, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `entryFocus`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = J(e2, t2);
  return q(), (e3, t3) => (D(), F(u(Xr), y(u(n2), { style: { "--reka-dropdown-menu-content-transform-origin": `var(--reka-popper-transform-origin)`, "--reka-dropdown-menu-content-available-width": `var(--reka-popper-available-width)`, "--reka-dropdown-menu-content-available-height": `var(--reka-popper-available-height)`, "--reka-dropdown-menu-trigger-width": `var(--reka-popper-anchor-width)`, "--reka-dropdown-menu-trigger-height": `var(--reka-popper-anchor-height)` } }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16));
} }), Mi = E({ __name: `DropdownMenuSubTrigger`, props: { disabled: { type: Boolean, required: false }, textValue: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t2) {
  let n2 = t2;
  return q(), (t3, r2) => (D(), F(u($r), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), Ni = E({ __name: `DropdownMenuTrigger`, props: { disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2, r2 = _i(), { forwardRef: i2, currentElement: a2 } = q();
  return _(() => {
    r2.triggerElement = a2;
  }), r2.triggerId || (r2.triggerId = Y(void 0, `reka-dropdown-menu-trigger`)), (e3, a3) => (D(), F(u(Qr), { "as-child": `` }, { default: A(() => [n(u(U), { id: u(r2).triggerId, ref: u(i2), type: e3.as === `button` ? `button` : void 0, "as-child": t2.asChild, as: e3.as, "aria-haspopup": `menu`, "aria-expanded": u(r2).open.value, "aria-controls": u(r2).open.value ? u(r2).contentId : void 0, "data-disabled": e3.disabled ? `` : void 0, disabled: e3.disabled, "data-state": u(r2).open.value ? `open` : `closed`, onClick: a3[0] || (a3[0] = async (t3) => {
    !e3.disabled && t3.button === 0 && t3.ctrlKey === false && (u(r2)?.onOpenToggle(), await N(), u(r2).open.value && t3.preventDefault());
  }), onKeydown: a3[1] || (a3[1] = V((t3) => {
    e3.disabled || ([`Enter`, ` `].includes(t3.key) && u(r2).onOpenToggle(), t3.key === `ArrowDown` && u(r2).onOpenChange(true), [`Enter`, ` `, `ArrowDown`].includes(t3.key) && t3.preventDefault());
  }, [`enter`, `space`, `arrow-down`])) }, { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 8, [`id`, `type`, `as-child`, `as`, `aria-expanded`, `aria-controls`, `data-disabled`, `disabled`, `data-state`])]), _: 3 }));
} }), Pi = E({ __name: `HoverCardArrow`, props: { width: { type: Number, required: false, default: 10 }, height: { type: Number, required: false, default: 5 }, rounded: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `svg` } }, setup(t2) {
  let n2 = t2;
  return q(), (t3, r2) => (D(), F(u(Te), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), [Fi, Ii] = G(`HoverCardRoot`), Li = E({ __name: `HoverCardRoot`, props: { defaultOpen: { type: Boolean, required: false, default: false }, open: { type: Boolean, required: false, default: void 0 }, openDelay: { type: Number, required: false, default: 700 }, closeDelay: { type: Number, required: false, default: 300 } }, emits: [`update:open`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, { openDelay: i2, closeDelay: a2 } = f(n2);
  q();
  let o2 = K(n2, `open`, r2, { defaultValue: n2.defaultOpen, passive: n2.open === void 0 }), s2 = I(0), c2 = I(0), l2 = I(false), d2 = I(false), p2 = I(false), m2 = I();
  function h2() {
    clearTimeout(c2.value), s2.value = window.setTimeout(() => o2.value = true, i2.value);
  }
  function g2() {
    clearTimeout(s2.value), !l2.value && !d2.value && (c2.value = window.setTimeout(() => o2.value = false, a2.value));
  }
  function _2() {
    o2.value = false;
  }
  return Ii({ open: o2, onOpenChange(e3) {
    o2.value = e3;
  }, onOpen: h2, onClose: g2, onDismiss: _2, hasSelectionRef: l2, isPointerDownOnContentRef: d2, isPointerInTransitRef: p2, triggerElement: m2 }), (e3, t3) => (D(), F(u(ye), null, { default: A(() => [R(e3.$slots, `default`, { open: u(o2) })]), _: 3 }));
} });
function Ri(e2) {
  return (t2) => t2.pointerType === `touch` ? void 0 : e2();
}
function zi(e2) {
  let t2 = [], n2 = document.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, { acceptNode: (e3) => e3.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
  for (; n2.nextNode(); ) t2.push(n2.currentNode);
  return t2;
}
var Bi = E({ __name: `HoverCardContentImpl`, props: { side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`], setup(e2, { emit: t2 }) {
  let r2 = e2, i2 = t2, a2 = te(r2), { forwardRef: o2, currentElement: s2 } = q(), c2 = Fi(), { isPointerInTransit: l2, onPointerExit: d2 } = Ce(c2.triggerElement, s2);
  ce(c2.isPointerInTransitRef, l2, { direction: `rtl` }), d2(() => {
    c2.onClose();
  });
  let f2 = I(false), m2;
  p((e3) => {
    if (f2.value) {
      let t3 = document.body;
      m2 = t3.style.userSelect || t3.style.webkitUserSelect, t3.style.userSelect = `none`, t3.style.webkitUserSelect = `none`, e3(() => {
        t3.style.userSelect = m2, t3.style.webkitUserSelect = m2;
      });
    }
  });
  function h2() {
    f2.value = false, c2.isPointerDownOnContentRef.value = false, N(() => {
      document.getSelection()?.toString() !== `` && (c2.hasSelectionRef.value = true);
    });
  }
  return _(() => {
    s2.value && (document.addEventListener(`pointerup`, h2), zi(s2.value).forEach((e3) => e3.setAttribute(`tabindex`, `-1`))), de(window, `scroll`, (e3) => {
      e3.target?.contains(c2.triggerElement.value) && c2.onDismiss();
    }, { capture: true });
  }), x(() => {
    document.removeEventListener(`pointerup`, h2), c2.hasSelectionRef.value = false, c2.isPointerDownOnContentRef.value = false;
  }), (e3, t3) => (D(), F(u(Se), { "as-child": ``, "disable-outside-pointer-events": false, onEscapeKeyDown: t3[1] || (t3[1] = (e4) => i2(`escapeKeyDown`, e4)), onPointerDownOutside: t3[2] || (t3[2] = (e4) => i2(`pointerDownOutside`, e4)), onFocusOutside: t3[3] || (t3[3] = H((e4) => i2(`focusOutside`, e4), [`prevent`])), onDismiss: u(c2).onDismiss }, { default: A(() => [n(u(xe), y({ ...u(a2), ...e3.$attrs }, { ref: u(o2), "data-state": u(c2).open.value ? `open` : `closed`, style: { userSelect: f2.value ? `text` : void 0, WebkitUserSelect: f2.value ? `text` : void 0, "--reka-hover-card-content-transform-origin": `var(--reka-popper-transform-origin)`, "--reka-hover-card-content-available-width": `var(--reka-popper-available-width)`, "--reka-hover-card-content-available-height": `var(--reka-popper-available-height)`, "--reka-hover-card-trigger-width": `var(--reka-popper-anchor-width)`, "--reka-hover-card-trigger-height": `var(--reka-popper-anchor-height)` }, onPointerdown: t3[0] || (t3[0] = (e4) => {
    e4.currentTarget.contains(e4.target) && (f2.value = true), u(c2).hasSelectionRef.value = false, u(c2).isPointerDownOnContentRef.value = true;
  }) }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16, [`data-state`, `style`])]), _: 3 }, 8, [`onDismiss`]));
} }), Vi = E({ __name: `HoverCardContent`, props: { forceMount: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`], setup(e2, { emit: t2 }) {
  let r2 = J(e2, t2), { forwardRef: i2 } = q(), a2 = Fi();
  return (e3, t3) => (D(), F(u(De), { present: e3.forceMount || u(a2).open.value }, { default: A(() => [n(Bi, y(u(r2), { ref: u(i2), onPointerenter: t3[0] || (t3[0] = (e4) => u(Ri)(u(a2).onOpen)(e4)) }), { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 16)]), _: 3 }, 8, [`present`]));
} }), Hi = E({ __name: `HoverCardPortal`, props: { to: { type: null, required: false }, disabled: { type: Boolean, required: false }, defer: { type: Boolean, required: false }, forceMount: { type: Boolean, required: false } }, setup(t2) {
  let n2 = t2;
  return (t3, r2) => (D(), F(u(we), e(B(n2)), { default: A(() => [R(t3.$slots, `default`)]), _: 3 }, 16));
} }), Ui = E({ __name: `HoverCardTrigger`, props: { reference: { type: null, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `a` } }, setup(e2) {
  let { forwardRef: t2, currentElement: r2 } = q(), i2 = Fi();
  i2.triggerElement = r2;
  function a2() {
    setTimeout(() => {
      !i2.isPointerInTransitRef.value && !i2.open.value && i2.onClose();
    }, 0);
  }
  return (e3, r3) => (D(), F(u(Ee), { "as-child": ``, reference: e3.reference }, { default: A(() => [n(u(U), { ref: u(t2), "as-child": e3.asChild, as: e3.as, "data-state": u(i2).open.value ? `open` : `closed`, "data-grace-area-trigger": ``, onPointerenter: r3[0] || (r3[0] = (e4) => u(Ri)(u(i2).onOpen)(e4)), onPointerleave: r3[1] || (r3[1] = (e4) => u(Ri)(a2)(e4)), onFocus: r3[2] || (r3[2] = (e4) => u(i2).onOpen()), onBlur: r3[3] || (r3[3] = (e4) => u(i2).onClose()) }, { default: A(() => [R(e3.$slots, `default`)]), _: 3 }, 8, [`as-child`, `as`, `data-state`])]), _: 3 }, 8, [`reference`]));
} }), Wi = { Root: Dn, Input: On, Anchor: kn, Empty: zn, Trigger: Yn, Cancel: Ln, Group: Hn, Label: Kn, Content: Rn, Viewport: Zn, Virtualizer: Qn, Item: Wn, ItemIndicator: Gn, Separator: Jn, Arrow: In, Portal: qn }, Gi = { Root: wn, Input: Un, Anchor: kn, Empty: zn, Trigger: Yn, Cancel: Ln, Group: Hn, Label: Kn, Content: Rn, Viewport: Zn, Virtualizer: Qn, Item: Wn, ItemIndicator: Gn, Separator: Jn, Arrow: In, Portal: qn }, Ki = { Root: Cr, Trigger: ni, Portal: Lr, Content: Dr, Arrow: rr, Item: Mr, Group: jr, Separator: Gr, CheckboxItem: br, ItemIndicator: Nr, Label: Fr, RadioGroup: Vr, RadioItem: Ur, Sub: Yr, SubContent: Zr, SubTrigger: ei }, qi = { Root: yi, Trigger: Ni, Portal: Ei, Content: bi, Arrow: hi, Item: Ci, Group: Si, Separator: ki, CheckboxItem: gi, ItemIndicator: wi, Label: Ti, RadioGroup: Di, RadioItem: Oi, Sub: Ai, SubContent: ji, SubTrigger: Mi, Filter: xi }, Ji = { Root: Li, Trigger: Ui, Portal: Hi, Content: Vi, Arrow: Pi }, Yi = { Root: ai, Trigger: mi, Portal: pi, Content: fi, Arrow: si, Close: ci, Anchor: oi };
export {
  Ot as A,
  Qe as B,
  Ut as C,
  Lt as D,
  Pt as E,
  yt as F,
  Ae as G,
  Ue as H,
  mt as I,
  dt as L,
  wt as M,
  Ct as N,
  It as O,
  St as P,
  rt as R,
  Wt as S,
  Vt as T,
  Me as U,
  Q as V,
  Z as W,
  xn as _,
  Ji as a,
  qt as b,
  yi as c,
  Cr as d,
  tr as f,
  Sn as g,
  jn as h,
  qi as i,
  Et as j,
  Rt as k,
  hi as l,
  Xn as m,
  Gi as n,
  Yi as o,
  $n as p,
  Ki as r,
  Ni as s,
  Wi as t,
  ni as u,
  Qt as v,
  Ht as w,
  Gt as x,
  Zt as y,
  Xe as z
};
