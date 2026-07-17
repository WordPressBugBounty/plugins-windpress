import { D as e, E as t, Ht as n, Lt as r, On as i, Rt as a, Tn as o, Zn as s, _ as c, b as l, bt as u, ct as d, er as f, et as p, ft as m, g as h, h as g, k as _, mt as v, o as y, qt as b, tr as x, tt as S, v as C, vn as w, wn as T, wt as E, xt as D, y as O } from "./runtime-core.esm-bundler-Twwq1XF8.js";
import { C as k, w as A } from "./runtime-dom.esm-bundler-Owfape5M.js";
import { b as j, g as M, w as N } from "./Tooltip-CPUUajce.js";
import { C as P, H as F, N as I, O as L, S as R, V as z, b as ee, x as te, y as B } from "./Button-DbU2pTtV.js";
import { b as ne, r as V, y as re } from "./dist-Bw8ba7To.js";
import { b as H, g as U, r as W } from "./dist-ChpmCc7n.js";
import { D as G, E as K, F as q, O as J, P as ie, T as ae, U as Y, W as X, f as oe, g as se, p as ce, w as Z } from "./namespaced-CFCft_Em.js";
import { t as le } from "./virtualizer-DAD-ryu1.js";
function ue(e2, t2) {
  let n2 = w(), r2 = (r3, i3) => {
    if (t2.multiple && Array.isArray(e2.value)) if (t2.selectionBehavior === `replace`) e2.value = [r3], n2.value = r3;
    else {
      let t3 = e2.value.findIndex((e3) => i3(e3));
      t3 === -1 ? e2.value = [...e2.value, r3] : e2.value = e2.value.filter((e3, n3) => n3 !== t3);
    }
    else t2.selectionBehavior === `replace` ? e2.value = { ...r3 } : !Array.isArray(e2.value) && i3(e2.value) ? e2.value = void 0 : e2.value = { ...r3 };
    return e2.value;
  };
  function i2(r3, i3, a2, o2) {
    if (!n2?.value || !t2.multiple || !Array.isArray(e2.value)) return;
    let s2 = a2().filter((e3) => e3.ref.dataset.disabled !== ``).find((e3) => e3.ref === i3)?.value;
    if (!s2) return;
    let c2 = null;
    switch (r3) {
      case `prev`:
      case `next`:
        c2 = X(o2, n2.value, s2);
        break;
      case `first`:
        c2 = X(o2, n2.value, o2?.[0]);
        break;
      case `last`:
        c2 = X(o2, n2.value, o2.at(-1));
        break;
    }
    e2.value = c2;
  }
  return { firstValue: n2, onSelectItem: r2, handleMultipleReplace: i2 };
}
var Q = _({ __name: `RovingFocusItem`, props: { tabStopId: { type: String, required: false }, focusable: { type: Boolean, required: false, default: true }, active: { type: Boolean, required: false }, allowShiftKey: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `span` } }, setup(t2) {
  let r2 = t2, a2 = ce(), o2 = M(), s2 = h(() => r2.tabStopId || o2), c2 = h(() => a2.currentTabStopId.value === s2.value), { getItems: l2, CollectionItem: u2 } = J();
  d(() => {
    r2.focusable && a2.onFocusableItemAdd();
  }), m(() => {
    r2.focusable && a2.onFocusableItemRemove();
  }), n(() => r2.focusable, (e2, t3) => {
    e2 !== t3 && (e2 ? a2.onFocusableItemAdd() : a2.onFocusableItemRemove());
  });
  function f2(e2) {
    if (e2.key === `Tab` && e2.shiftKey) {
      a2.onItemShiftTab();
      return;
    }
    if (e2.target !== e2.currentTarget) return;
    let t3 = K(e2, a2.orientation.value, a2.dir.value);
    if (t3 !== void 0) {
      if (e2.metaKey || e2.ctrlKey || e2.altKey || !r2.allowShiftKey && e2.shiftKey) return;
      e2.preventDefault();
      let n2 = [...l2().map((e3) => e3.ref).filter((e3) => e3.dataset.disabled !== ``)];
      if (t3 === `last`) n2.reverse();
      else if (t3 === `prev` || t3 === `next`) {
        t3 === `prev` && n2.reverse();
        let r3 = n2.indexOf(e2.currentTarget);
        n2 = a2.loop.value ? G(n2, r3 + 1) : n2.slice(r3 + 1);
      }
      S(() => ae(n2));
    }
  }
  return (t3, n2) => (v(), C(i(u2), null, { default: b(() => [e(i(P), { tabindex: c2.value ? 0 : -1, "data-orientation": i(a2).orientation.value, "data-active": t3.active ? `` : void 0, "data-disabled": t3.focusable ? void 0 : ``, as: t3.as, "as-child": t3.asChild, onMousedown: n2[0] || (n2[0] = (e2) => {
    t3.focusable ? i(a2).onItemFocus(s2.value) : e2.preventDefault();
  }), onFocus: n2[1] || (n2[1] = (e2) => i(a2).onItemFocus(s2.value)), onKeydown: f2 }, { default: b(() => [D(t3.$slots, `default`)]), _: 3 }, 8, [`tabindex`, `data-orientation`, `data-active`, `data-disabled`, `as`, `as-child`])]), _: 3 }));
} });
function $(e2) {
  return e2.reduce((e3, t2) => (e3.push(t2), t2.children && e3.push(...$(t2.children)), e3), []);
}
var [de, fe] = L(`TreeRoot`), pe = _({ __name: `TreeRoot`, props: { modelValue: { type: null, required: false }, defaultValue: { type: null, required: false }, items: { type: Array, required: false }, expanded: { type: Array, required: false }, defaultExpanded: { type: Array, required: false }, getKey: { type: Function, required: true }, getChildren: { type: Function, required: false, default: (e2) => e2.children }, selectionBehavior: { type: String, required: false, default: `toggle` }, multiple: { type: Boolean, required: false, skipCheck: true }, dir: { type: String, required: false }, disabled: { type: Boolean, required: false }, propagateSelect: { type: Boolean, required: false }, bubbleSelect: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `ul` } }, emits: [`update:modelValue`, `update:expanded`], setup(t2, { emit: n2 }) {
  let r2 = t2, a2 = n2, { items: s2, multiple: c2, disabled: l2, propagateSelect: u2, dir: d2, bubbleSelect: f2 } = o(r2), { handleTypeaheadSearch: p2 } = q(), m2 = j(d2), g2 = w(), _2 = w(false), y2 = V(), x2 = H(r2, `modelValue`, a2, { defaultValue: r2.defaultValue ?? (c2.value ? [] : void 0), passive: true, deep: true }), T2 = H(r2, `expanded`, a2, { defaultValue: r2.defaultExpanded ?? [], passive: r2.expanded === void 0, deep: true }), { onSelectItem: E2, handleMultipleReplace: O2 } = ue(x2, r2), M2 = h(() => c2.value && Array.isArray(x2.value) ? x2.value.map((e2) => r2.getKey(e2)) : [r2.getKey(x2.value ?? {})]);
  function N2(e2, t3 = 1, n3) {
    return e2.reduce((i2, a3, o2) => {
      let s3 = r2.getKey(a3), c3 = r2.getChildren(a3), l3 = T2.value.includes(s3), u3 = { _id: s3, value: a3, index: o2, level: t3, parentItem: n3, hasChildren: !!c3, bind: { value: a3, level: t3, "aria-setsize": e2.length, "aria-posinset": o2 + 1 } };
      return i2.push(u3), c3 && l3 && i2.push(...N2(c3, t3 + 1, a3)), i2;
    }, []);
  }
  let F2 = h(() => {
    let e2 = r2.items;
    return T2.value.map((e3) => e3), N2(e2 ?? []);
  });
  function I2(e2) {
    if (_2.value) y2.trigger(e2);
    else {
      let t3 = g2.value?.getItems() ?? [];
      p2(e2.key, t3);
    }
  }
  function L2(e2) {
    if (_2.value) return;
    let t3 = Z[e2.key];
    S(() => {
      O2(t3, Y(), g2.value?.getItems, F2.value.map((e3) => e3.value));
    });
  }
  function R2(e2) {
    if (e2.parentItem != null && Array.isArray(x2.value) && r2.multiple) {
      let t3 = F2.value.find((t4) => e2.parentItem != null && r2.getKey(t4.value) === r2.getKey(e2.parentItem));
      t3 != null && (r2.getChildren(t3.value)?.every((e3) => x2.value.find((t4) => r2.getKey(t4) === r2.getKey(e3))) ? x2.value = [...x2.value, t3.value] : x2.value = x2.value.filter((e3) => r2.getKey(e3) !== r2.getKey(t3.value)), R2(t3));
    }
  }
  return fe({ modelValue: x2, selectedKeys: M2, onSelect: (e2) => {
    let t3 = (t4) => r2.getKey(t4 ?? {}) === r2.getKey(e2), n3 = r2.multiple && Array.isArray(x2.value) ? x2.value?.findIndex(t3) !== -1 : void 0;
    if (E2(e2, t3), r2.bubbleSelect && r2.multiple && Array.isArray(x2.value)) {
      let t4 = F2.value.find((t5) => r2.getKey(t5.value) === r2.getKey(e2));
      t4 != null && R2(t4);
    }
    if (r2.propagateSelect && r2.multiple && Array.isArray(x2.value)) {
      let t4 = $(r2.getChildren(e2) ?? []);
      n3 ? x2.value = [...x2.value].filter((e3) => !t4.some((t5) => r2.getKey(e3 ?? {}) === r2.getKey(t5))) : x2.value = [...x2.value, ...t4];
    }
  }, expanded: T2, onToggle(e2) {
    if (!(e2 && r2.getChildren(e2))) return;
    let t3 = r2.getKey(e2) ?? e2;
    T2.value.includes(t3) ? T2.value = T2.value.filter((e3) => e3 !== t3) : T2.value = [...T2.value, t3];
  }, getKey: r2.getKey, getChildren: r2.getChildren, items: s2, expandedItems: F2, disabled: l2, multiple: c2, dir: m2, propagateSelect: u2, bubbleSelect: f2, isVirtual: _2, virtualKeydownHook: y2, handleMultipleReplace: O2 }), (t3, n3) => (v(), C(i(oe), { ref_key: `rovingFocusGroupRef`, ref: g2, "as-child": ``, orientation: `vertical`, dir: i(m2) }, { default: b(() => [e(i(P), { role: `tree`, as: t3.as, "as-child": t3.asChild, "aria-multiselectable": i(c2) ? true : void 0, onKeydown: [I2, k(A(L2, [`shift`]), [`up`, `down`])] }, { default: b(() => [D(t3.$slots, `default`, { flattenItems: F2.value, modelValue: i(x2), expanded: i(T2) })]), _: 3 }, 8, [`as`, `as-child`, `aria-multiselectable`, `onKeydown`])]), _: 3 }, 8, [`dir`]));
} }), me = `tree.select`, he = `tree.toggle`, ge = _({ inheritAttrs: false, __name: `TreeItem`, props: { value: { type: null, required: true }, level: { type: Number, required: true }, disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `li` } }, emits: [`select`, `toggle`], setup(t2, { expose: n2, emit: r2 }) {
  let a2 = t2, o2 = r2, s2 = de(), { getItems: c2 } = J(), l2 = h(() => !!s2.getChildren(a2.value)), u2 = h(() => {
    let e2 = s2.getKey(a2.value);
    return s2.expanded.value.includes(e2);
  }), d2 = h(() => {
    let e2 = s2.getKey(a2.value);
    return s2.selectedKeys.value.includes(e2);
  }), f2 = h(() => {
    if (s2.bubbleSelect.value && l2.value && Array.isArray(s2.modelValue.value)) {
      let e2 = $(s2.getChildren(a2.value) || []);
      return e2.some((e3) => s2.modelValue.value.find((t3) => s2.getKey(t3) === s2.getKey(e3))) && !e2.every((e3) => s2.modelValue.value.find((t3) => s2.getKey(t3) === s2.getKey(e3)));
    } else if (s2.propagateSelect.value && d2.value && l2.value && Array.isArray(s2.modelValue.value)) return !$(s2.getChildren(a2.value) || []).every((e2) => s2.modelValue.value.find((t3) => s2.getKey(t3) === s2.getKey(e2)));
    else return;
  }), m2 = h(() => s2.disabled.value || a2.disabled);
  function g2(e2) {
    if (!m2.value && l2.value) if (u2.value) {
      let e3 = c2().map((e4) => e4.ref), t3 = Y(), n3 = e3.indexOf(t3), r3 = [...e3].slice(n3).find((e4) => Number(e4.getAttribute(`data-indent`)) === a2.level + 1);
      r3 && r3.focus();
    } else w2(e2);
  }
  function _2(e2) {
    if (!m2.value) if (u2.value) w2(e2);
    else {
      let e3 = c2().map((e4) => e4.ref), t3 = Y(), n3 = e3.indexOf(t3), r3 = [...e3].slice(0, n3).reverse().find((e4) => Number(e4.getAttribute(`data-indent`)) === a2.level - 1);
      r3 && r3.focus();
    }
  }
  async function y2(e2) {
    m2.value || (o2(`select`, e2), !e2?.defaultPrevented && s2.onSelect(a2.value));
  }
  async function x2(e2) {
    m2.value || (o2(`toggle`, e2), !e2?.defaultPrevented && s2.onToggle(a2.value));
  }
  async function S2(e2) {
    e2 && N(me, y2, { originalEvent: e2, value: a2.value, isExpanded: u2.value, isSelected: d2.value });
  }
  async function w2(e2) {
    e2 && N(he, x2, { originalEvent: e2, value: a2.value, isExpanded: u2.value, isSelected: d2.value });
  }
  return n2({ isExpanded: u2, isSelected: d2, isIndeterminate: f2, isDisabled: m2, handleToggle: () => s2.onToggle(a2.value), handleSelect: () => s2.onSelect(a2.value) }), (t3, n3) => (v(), C(i(Q), { "as-child": ``, value: t3.value, "allow-shift-key": ``, focusable: !m2.value }, { default: b(() => [e(i(P), p(t3.$attrs, { role: `treeitem`, as: t3.as, "as-child": t3.asChild, "aria-selected": d2.value, "aria-expanded": l2.value ? u2.value : void 0, "aria-level": t3.level, "aria-disabled": m2.value ? true : void 0, "data-indent": t3.level, "data-selected": d2.value ? `` : void 0, "data-expanded": u2.value ? `` : void 0, "data-disabled": m2.value ? `` : void 0, onKeydown: [k(A(S2, [`self`, `prevent`]), [`enter`, `space`]), n3[0] || (n3[0] = k(A((e2) => i(s2).dir.value === `ltr` ? g2(e2) : _2(e2), [`prevent`]), [`right`])), n3[1] || (n3[1] = k(A((e2) => i(s2).dir.value === `ltr` ? _2(e2) : g2(e2), [`prevent`]), [`left`]))], onClick: n3[2] || (n3[2] = A((e2) => {
    S2(e2), w2(e2);
  }, [`stop`])) }), { default: b(() => [D(t3.$slots, `default`, { isExpanded: u2.value, isSelected: d2.value, isIndeterminate: f2.value, isDisabled: m2.value, handleSelect: () => i(s2).onSelect(t3.value), handleToggle: () => i(s2).onToggle(t3.value) })]), _: 3 }, 16, [`as`, `as-child`, `aria-selected`, `aria-expanded`, `aria-level`, `aria-disabled`, `data-indent`, `data-selected`, `data-expanded`, `data-disabled`, `onKeydown`])]), _: 3 }, 8, [`value`, `focusable`]));
} }), _e = _({ __name: `TreeVirtualizer`, props: { overscan: { type: Number, required: false }, estimateSize: { type: [Number, Function], required: false }, textContent: { type: Function, required: false } }, setup(e2) {
  let t2 = e2, n2 = r(), a2 = de(), o2 = U(), { getItems: s2 } = J(), c2 = ne(``, 1e3), d2 = h(() => {
    let e3 = (e4) => t2.textContent ? t2.textContent(e4) : e4.toString().toLowerCase();
    return a2.expandedItems.value.map((t3, n3) => ({ index: n3, textContent: e3(t3.value) }));
  });
  a2.isVirtual.value = true;
  let p2 = h(() => {
    let e3 = o2.value;
    if (e3) {
      let t3 = window.getComputedStyle(e3);
      return { start: Number.parseFloat(t3.paddingBlockStart || t3.paddingTop), end: Number.parseFloat(t3.paddingBlockEnd || t3.paddingBottom) };
    } else return { start: 0, end: 0 };
  }), m2 = se({ get scrollPaddingStart() {
    return p2.value.start;
  }, get scrollPaddingEnd() {
    return p2.value.end;
  }, get count() {
    return a2.expandedItems.value.length ?? 0;
  }, get horizontal() {
    return false;
  }, getItemKey(e3) {
    return e3 + a2.getKey(a2.expandedItems.value[e3].value);
  }, estimateSize(e3) {
    return typeof t2.estimateSize == `function` ? t2.estimateSize(e3) : t2.estimateSize ?? 28;
  }, getScrollElement() {
    return o2.value;
  }, overscan: t2.overscan ?? 12 }), _2 = h(() => m2.value.getVirtualItems().map((e3) => ({ item: e3, is: g(n2.default({ item: a2.expandedItems.value[e3.index], virtualizer: m2.value, virtualItem: e3 })[0], { "data-index": e3.index, style: { position: `absolute`, top: 0, left: 0, transform: `translateY(${e3.start}px)`, overflowAnchor: `none` } }) })));
  function b2(e3) {
    m2.value.scrollToIndex(e3, { align: `start` }), requestAnimationFrame(() => {
      let t3 = o2.value.querySelector(`[data-index="${e3}"]`);
      t3 instanceof HTMLElement && t3.focus();
    });
  }
  return a2.virtualKeydownHook.on((e3) => {
    let t3 = e3.altKey || e3.ctrlKey || e3.metaKey;
    if (e3.key === `Tab` && !t3) return;
    let n3 = Z[e3.key];
    if ([`first`, `last`].includes(n3)) {
      e3.preventDefault();
      let t4 = n3 === `first` ? 0 : a2.expandedItems.value.length - 1;
      m2.value.scrollToIndex(t4), requestAnimationFrame(() => {
        let e4 = s2().filter((e5) => e5.ref.dataset.disabled !== ``);
        e4.length && (n3 === `first` ? e4[0] : e4.at(-1)).ref.focus();
      });
    } else if (n3 === `prev` && e3.key !== `ArrowUp`) {
      let e4 = Y(), t4 = Number(e4.getAttribute(`data-index`)), n4 = Number(e4.getAttribute(`data-indent`)), r2 = a2.expandedItems.value.slice(0, t4).map((e5, t5) => ({ ...e5, index: t5 })).reverse().find((e5) => e5.level === n4 - 1);
      r2 && b2(r2.index);
    } else if (!n3 && !t3) {
      c2.value += e3.key;
      let t4 = Number(Y()?.getAttribute(`data-index`)), n4 = d2.value[t4].textContent, r2 = ie(d2.value.map((e4) => e4.textContent), c2.value, n4), i2 = d2.value.find((e4) => e4.textContent === r2);
      i2 && b2(i2.index);
    }
    S(() => {
      e3.shiftKey && n3 && a2.handleMultipleReplace(n3, Y(), s2, a2.expandedItems.value.map((e4) => e4.value));
    });
  }), (e3, t3) => (v(), l(`div`, { "data-reka-virtualizer": ``, style: f({ position: `relative`, width: `100%`, height: `${i(m2).getTotalSize()}px` }) }, [(v(true), l(y, null, u(_2.value, ({ is: e4, item: t4 }) => (v(), C(E(e4), { key: t4.key }))), 128))], 4));
} }), ve = { slots: { root: `relative isolate`, item: `w-full`, listWithChildren: `border-s border-default`, itemWithChildren: `ps-1.5 -ms-px`, link: `relative group w-full flex items-center text-sm select-none before:absolute before:inset-y-px before:inset-x-0 before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:outline-3`, linkLeadingIcon: `shrink-0 relative`, linkLabel: `truncate`, linkTrailing: `ms-auto inline-flex gap-1.5 items-center`, linkTrailingIcon: `shrink-0 transform transition-transform duration-200 group-data-expanded:rotate-180` }, variants: { virtualize: { true: { root: `overflow-y-auto` } }, color: { primary: { link: `before:outline-primary/25` }, secondary: { link: `before:outline-secondary/25` }, success: { link: `before:outline-success/25` }, info: { link: `before:outline-info/25` }, warning: { link: `before:outline-warning/25` }, error: { link: `before:outline-error/25` }, neutral: { link: `before:outline-inverted/25` } }, size: { xs: { listWithChildren: `ms-4`, link: `px-2 py-1 text-xs gap-1`, linkLeadingIcon: `size-4`, linkTrailingIcon: `size-4` }, sm: { listWithChildren: `ms-4.5`, link: `px-2.5 py-1.5 text-xs gap-1.5`, linkLeadingIcon: `size-4`, linkTrailingIcon: `size-4` }, md: { listWithChildren: `ms-5`, link: `px-2.5 py-1.5 text-sm gap-1.5`, linkLeadingIcon: `size-5`, linkTrailingIcon: `size-5` }, lg: { listWithChildren: `ms-5.5`, link: `px-3 py-2 text-sm gap-2`, linkLeadingIcon: `size-5`, linkTrailingIcon: `size-5` }, xl: { listWithChildren: `ms-6`, link: `px-3 py-2 text-base gap-2`, linkLeadingIcon: `size-6`, linkTrailingIcon: `size-6` } }, selected: { true: { link: `before:bg-elevated` } }, disabled: { true: { link: `cursor-not-allowed opacity-75` } } }, compoundVariants: [{ color: `primary`, selected: true, class: { link: `text-primary` } }, { color: `secondary`, selected: true, class: { link: `text-secondary` } }, { color: `success`, selected: true, class: { link: `text-success` } }, { color: `info`, selected: true, class: { link: `text-info` } }, { color: `warning`, selected: true, class: { link: `text-warning` } }, { color: `error`, selected: true, class: { link: `text-error` } }, { color: `neutral`, selected: true, class: { link: `text-highlighted` } }, { selected: false, disabled: false, class: { link: [`hover:text-highlighted hover:before:bg-elevated/50`, `transition-colors before:transition-colors`] } }], defaultVariants: { color: `primary`, size: `md` } }, ye = Object.assign({ inheritAttrs: false }, { __name: `Tree`, props: { as: { type: null, required: false }, color: { type: null, required: false }, size: { type: null, required: false }, getKey: { type: Function, required: false }, labelKey: { type: null, required: false, default: `label` }, trailingIcon: { type: null, required: false }, expandedIcon: { type: null, required: false }, collapsedIcon: { type: null, required: false }, items: { type: null, required: false }, modelValue: { type: null, required: false }, defaultValue: { type: null, required: false }, multiple: { type: Boolean, required: false }, nested: { type: Boolean, required: false, default: true }, virtualize: { type: [Boolean, Object], required: false, default: false }, onSelect: { type: Function, required: false }, onToggle: { type: Function, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, expanded: { type: Array, required: false }, defaultExpanded: { type: Array, required: false }, selectionBehavior: { type: String, required: false }, propagateSelect: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, bubbleSelect: { type: Boolean, required: false } }, emits: [`update:modelValue`, `update:expanded`], setup(n2, { expose: o2, emit: d2 }) {
  let m2 = n2, g2 = d2, _2 = r(), S2 = R(`tree`, m2), w2 = F(), k2 = te(re(S2, `items`, `multiple`, `expanded`, `disabled`, `propagateSelect`, `bubbleSelect`), g2), A2 = h(() => typeof S2.as == `string` || typeof S2.as?.render == `function` ? { root: S2.as, link: `button` } : z(S2.as, { root: `ul`, link: `button` })), j2 = h(() => !S2.virtualize && S2.nested), M2 = h(() => {
    let e2 = { xs: { base: 2, perLevel: 5.5 }, sm: { base: 2.5, perLevel: 6 }, md: { base: 2.5, perLevel: 6.5 }, lg: { base: 3, perLevel: 7 }, xl: { base: 3, perLevel: 7.5 } }[S2.size || `md`];
    return (t2) => `calc(var(--spacing) * ${(t2 - 1) * e2.perLevel + e2.base})`;
  }), N2 = T(() => S2.virtualize ? z(typeof S2.virtualize == `boolean` ? {} : S2.virtualize, { estimateSize: le(S2.items || [], S2.size || `md`) }) : false), [P2, L2] = W(), [ne2, V2] = W({ props: { item: { type: Object, required: true }, index: { type: Number, required: true }, level: { type: Number, required: true } } }), H2 = h(() => ee({ extend: ve, ...w2.ui?.tree || {} })({ color: S2.color, size: S2.size, virtualize: !!S2.virtualize })), U2 = a(`rootRef`);
  function G2(e2) {
    return I(e2, S2.labelKey);
  }
  function K2(e2) {
    return S2.getKey && S2.getKey(e2) || G2(e2);
  }
  function q2(e2) {
    return [e2.defaultExpanded ? K2(e2) : null, ...e2.children?.flatMap((e3) => q2(e3)) ?? []].filter(Boolean);
  }
  let J2 = h(() => S2.defaultExpanded ?? S2.items?.flatMap((e2) => q2(e2)));
  return o2({ get $el() {
    return U2.value?.$el;
  } }), (n3, r2) => (v(), l(y, null, [e(i(ne2), null, { default: b(({ item: r3, index: a2, level: o3 }) => [c(`li`, { role: `presentation`, class: s(j2.value && o3 > 1 ? H2.value.itemWithChildren({ class: [i(S2).ui?.itemWithChildren, r3.ui?.itemWithChildren] }) : H2.value.item({ class: [i(S2).ui?.item, r3.ui?.item] })) }, [e(i(ge), { level: o3, value: r3, "as-child": ``, onToggle: (e2) => (r3.onToggle ?? i(S2).onToggle)?.(e2, r3), onSelect: (e2) => (r3.onSelect ?? i(S2).onSelect)?.(e2, r3) }, { default: b(({ isExpanded: c2, isSelected: u2, isIndeterminate: d3, handleSelect: m3, handleToggle: h2 }) => [D(n3.$slots, r3.slot ? `${r3.slot}-wrapper` : `item-wrapper`, p({ index: a2, level: o3, expanded: c2, selected: u2, indeterminate: d3, handleSelect: m3, handleToggle: h2, ui: H2.value }, { item: r3 }), () => [(v(), C(E(A2.value.link), { type: A2.value.link === `button` ? `button` : void 0, disabled: r3.disabled || i(S2).disabled, "data-slot": `link`, class: s(H2.value.link({ class: [i(S2).ui?.link, r3.ui?.link, r3.class], selected: u2, disabled: r3.disabled || i(S2).disabled })), style: f(!j2.value && o3 > 1 ? { paddingLeft: M2.value(o3) } : void 0) }, { default: b(() => [D(n3.$slots, r3.slot || `item`, p({ index: a2, level: o3, expanded: c2, selected: u2, indeterminate: d3, handleSelect: m3, handleToggle: h2, ui: H2.value }, { item: r3 }), () => [D(n3.$slots, r3.slot ? `${r3.slot}-leading` : `item-leading`, p({ index: a2, level: o3, expanded: c2, selected: u2, indeterminate: d3, handleSelect: m3, handleToggle: h2, ui: H2.value }, { item: r3 }), () => [r3.icon ? (v(), C(B, { key: 0, name: r3.icon, "data-slot": `linkLeadingIcon`, class: s(H2.value.linkLeadingIcon({ class: [i(S2).ui?.linkLeadingIcon, r3.ui?.linkLeadingIcon] })) }, null, 8, [`name`, `class`])) : r3.children?.length ? (v(), C(B, { key: 1, name: c2 ? i(S2).expandedIcon ?? i(w2).ui.icons.folderOpen : i(S2).collapsedIcon ?? i(w2).ui.icons.folder, "data-slot": `linkLeadingIcon`, class: s(H2.value.linkLeadingIcon({ class: [i(S2).ui?.linkLeadingIcon, r3.ui?.linkLeadingIcon] })) }, null, 8, [`name`, `class`])) : O(``, true)]), G2(r3) || _2[r3.slot ? `${r3.slot}-label` : `item-label`] ? (v(), l(`span`, { key: 0, "data-slot": `linkLabel`, class: s(H2.value.linkLabel({ class: [i(S2).ui?.linkLabel, r3.ui?.linkLabel] })) }, [D(n3.$slots, r3.slot ? `${r3.slot}-label` : `item-label`, p({ index: a2, level: o3, expanded: c2, selected: u2, indeterminate: d3, handleSelect: m3, handleToggle: h2, ui: H2.value }, { item: r3 }), () => [t(x(G2(r3)), 1)])], 2)) : O(``, true), r3.trailingIcon || r3.children?.length || _2[r3.slot ? `${r3.slot}-trailing` : `item-trailing`] ? (v(), l(`span`, { key: 1, "data-slot": `linkTrailing`, class: s(H2.value.linkTrailing({ class: [i(S2).ui?.linkTrailing, r3.ui?.linkTrailing] })) }, [D(n3.$slots, r3.slot ? `${r3.slot}-trailing` : `item-trailing`, p({ index: a2, level: o3, expanded: c2, selected: u2, indeterminate: d3, handleSelect: m3, handleToggle: h2, ui: H2.value }, { item: r3 }), () => [r3.trailingIcon ? (v(), C(B, { key: 0, name: r3.trailingIcon, "data-slot": `linkTrailingIcon`, class: s(H2.value.linkTrailingIcon({ class: [i(S2).ui?.linkTrailingIcon, r3.ui?.linkTrailingIcon] })) }, null, 8, [`name`, `class`])) : r3.children?.length ? (v(), C(B, { key: 1, name: i(S2).trailingIcon ?? i(w2).ui.icons.chevronDown, "data-slot": `linkTrailingIcon`, class: s(H2.value.linkTrailingIcon({ class: [i(S2).ui?.linkTrailingIcon, r3.ui?.linkTrailingIcon] })) }, null, 8, [`name`, `class`])) : O(``, true)])], 2)) : O(``, true)])]), _: 2 }, 1032, [`type`, `disabled`, `class`, `style`]))]), j2.value && r3.children?.length && c2 ? (v(), l(`ul`, { key: 0, role: `group`, "data-slot": `listWithChildren`, class: s(H2.value.listWithChildren({ class: [i(S2).ui?.listWithChildren, r3.ui?.listWithChildren] })) }, [e(i(L2), { items: r3.children, level: o3 + 1 }, null, 8, [`items`, `level`])], 2)) : O(``, true)]), _: 2 }, 1032, [`level`, `value`, `onToggle`, `onSelect`])], 2)]), _: 3 }), e(i(P2), null, { default: b(({ items: e2, level: t2 }) => [(v(true), l(y, null, u(e2, (e3, n4) => (v(), C(i(V2), { key: `${t2}-${n4}`, item: e3, index: n4, level: t2 }, null, 8, [`item`, `index`, `level`]))), 128))]), _: 1 }), e(i(pe), p({ ref_key: `rootRef`, ref: U2, "data-slot": `root` }, { ...i(k2), ...n3.$attrs }, { as: A2.value.root, "model-value": i(S2).modelValue, "default-value": i(S2).defaultValue, class: H2.value.root({ class: [i(S2).ui?.root, i(S2).class] }), "get-key": K2, "default-expanded": J2.value, "selection-behavior": i(S2).selectionBehavior }), { default: b(({ flattenItems: t2 }) => [i(S2).virtualize ? (v(), C(i(_e), p({ key: 0, "text-content": (e2) => G2(e2.value) }, N2.value), { default: b(({ item: t3, virtualItem: n4 }) => [e(i(V2), { item: t3.value, index: n4.index, level: t3.level }, null, 8, [`item`, `index`, `level`])]), _: 1 }, 16, [`text-content`])) : j2.value ? (v(), C(i(L2), { key: 2, items: i(S2).items, level: 1 }, null, 8, [`items`])) : (v(true), l(y, { key: 1 }, u(t2, (e2, t3) => (v(), C(i(V2), { key: e2._id, item: e2.value, index: t3, level: e2.level }, null, 8, [`item`, `index`, `level`]))), 128))]), _: 1 }, 16, [`as`, `model-value`, `default-value`, `class`, `default-expanded`, `selection-behavior`])], 64));
} });
export {
  Q as n,
  ye as t
};
