import { $n as e, D as t, Ht as n, On as r, Tn as i, Yt as a, ct as o, et as s, fn as c, g as l, gn as u, k as d, mt as f, qt as p, v as m, vn as h, xt as g, y as _, yn as v, z as y } from "./runtime-core.esm-bundler-Twwq1XF8.js";
import { S as b, w as x } from "./runtime-dom.esm-bundler-Owfape5M.js";
import { f as S, g as C, h as w, p as T, y as E } from "./Tooltip-CPUUajce.js";
import { C as D, E as O, O as k } from "./Button-DbU2pTtV.js";
import { a as A } from "./dist-Bw8ba7To.js";
import { b as j } from "./dist-ChpmCc7n.js";
import { A as M, L as N, U as P, V as F, j as I } from "./namespaced-CFCft_Em.js";
var [L, R] = k(`DialogRoot`), z = d({ inheritAttrs: false, __name: `DialogRoot`, props: { open: { type: Boolean, required: false, default: void 0 }, defaultOpen: { type: Boolean, required: false, default: false }, modal: { type: Boolean, required: false, default: true }, unmountOnHide: { type: Boolean, required: false, default: true } }, emits: [`update:open`], setup(e2, { emit: t2 }) {
  let n2 = e2, a2 = j(n2, `open`, t2, { defaultValue: n2.defaultOpen, passive: n2.open === void 0 }), o2 = h(), s2 = h(), { modal: c2, unmountOnHide: l2 } = i(n2);
  return R({ open: a2, modal: c2, unmountOnHide: l2, openModal: () => {
    a2.value = true;
  }, onOpenChange: (e3) => {
    a2.value = e3;
  }, onOpenToggle: () => {
    a2.value = !a2.value;
  }, contentId: ``, titleId: ``, descriptionId: ``, triggerElement: o2, contentElement: s2 }), (e3, t3) => g(e3.$slots, `default`, { open: r(a2), close: () => a2.value = false });
} }), B = d({ __name: `DialogClose`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2;
  E();
  let n2 = L();
  return (e3, i2) => (f(), m(r(D), s(t2, { type: e3.as === `button` ? `button` : void 0, onClick: i2[0] || (i2[0] = (e4) => r(n2).onOpenChange(false)) }), { default: p(() => [g(e3.$slots, `default`)]), _: 3 }, 16, [`type`]));
} }), V = d({ __name: `DialogContentImpl`, props: { forceMount: { type: Boolean, required: false }, trapFocus: { type: Boolean, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, present: { type: Boolean, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: n2 }) {
  let i2 = e2, a2 = n2, c2 = L(), { forwardRef: l2, currentElement: u2 } = E();
  return c2.titleId || (c2.titleId = C(void 0, `reka-dialog-title`)), c2.descriptionId || (c2.descriptionId = C(void 0, `reka-dialog-description`)), o(() => {
    c2.contentElement = u2, P() !== document.body && (c2.triggerElement.value = P());
  }), (e3, n3) => (f(), m(r(I), { "as-child": ``, loop: ``, trapped: i2.trapFocus, present: i2.present, onMountAutoFocus: n3[5] || (n3[5] = (e4) => a2(`openAutoFocus`, e4)), onUnmountAutoFocus: n3[6] || (n3[6] = (e4) => a2(`closeAutoFocus`, e4)) }, { default: p(() => [t(r(T), s({ id: r(c2).contentId, ref: r(l2), as: e3.as, "as-child": e3.asChild, present: i2.present, "disable-outside-pointer-events": e3.disableOutsidePointerEvents, role: `dialog`, "aria-describedby": r(c2).descriptionId, "aria-labelledby": r(c2).titleId, "data-state": r(M)(r(c2).open.value) }, e3.$attrs, { onDismiss: n3[0] || (n3[0] = (e4) => r(c2).onOpenChange(false)), onEscapeKeyDown: n3[1] || (n3[1] = (e4) => a2(`escapeKeyDown`, e4)), onFocusOutside: n3[2] || (n3[2] = (e4) => a2(`focusOutside`, e4)), onInteractOutside: n3[3] || (n3[3] = (e4) => a2(`interactOutside`, e4)), onPointerDownOutside: n3[4] || (n3[4] = (e4) => a2(`pointerDownOutside`, e4)) }), { default: p(() => [g(e3.$slots, `default`)]), _: 3 }, 16, [`id`, `as`, `as-child`, `present`, `disable-outside-pointer-events`, `aria-describedby`, `aria-labelledby`, `data-state`])]), _: 3 }, 8, [`trapped`, `present`]));
} }), H = d({ __name: `DialogContentModal`, props: { forceMount: { type: Boolean, required: false }, trapFocus: { type: Boolean, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false, default: true }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, present: { type: Boolean, required: true } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let i2 = e2, a2 = t2, o2 = L(), c2 = O(a2), { forwardRef: u2, currentElement: d2 } = E();
  N(l(() => i2.present ? d2.value : void 0));
  let h2 = l(() => {
    let { present: e3, ...t3 } = i2;
    return t3;
  });
  return n(() => i2.present, (e3, t3) => {
    !e3 && t3 && o2.triggerElement.value?.focus();
  }), (e3, t3) => (f(), m(V, s({ ...h2.value, ...r(c2) }, { ref: r(u2), present: e3.present, "trap-focus": r(o2).open.value, "disable-outside-pointer-events": i2.disableOutsidePointerEvents, onCloseAutoFocus: t3[0] || (t3[0] = (e4) => {
    e4.defaultPrevented || (e4.preventDefault(), r(o2).triggerElement.value?.focus());
  }), onPointerDownOutside: t3[1] || (t3[1] = (e4) => {
    let t4 = e4.detail.originalEvent, n2 = t4.button === 0 && t4.ctrlKey === true;
    (t4.button === 2 || n2) && e4.preventDefault();
  }), onFocusOutside: t3[2] || (t3[2] = (e4) => {
    e4.preventDefault();
  }) }), { default: p(() => [g(e3.$slots, `default`)]), _: 3 }, 16, [`present`, `trap-focus`, `disable-outside-pointer-events`]));
} }), U = d({ __name: `DialogContentNonModal`, props: { forceMount: { type: Boolean, required: false }, trapFocus: { type: Boolean, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, present: { type: Boolean, required: true } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let i2 = e2, a2 = O(t2);
  E();
  let o2 = L(), c2 = h(false), u2 = h(false), d2 = l(() => {
    let { present: e3, ...t3 } = i2;
    return t3;
  });
  return n(() => i2.present, (e3, t3) => {
    !e3 && t3 && (c2.value || o2.triggerElement.value?.focus(), c2.value = false, u2.value = false);
  }), (e3, t3) => (f(), m(V, s({ ...d2.value, ...r(a2) }, { present: e3.present, "trap-focus": false, "disable-outside-pointer-events": false, onCloseAutoFocus: t3[0] || (t3[0] = (e4) => {
    e4.defaultPrevented || (c2.value || r(o2).triggerElement.value?.focus(), e4.preventDefault()), c2.value = false, u2.value = false;
  }), onInteractOutside: t3[1] || (t3[1] = (e4) => {
    e4.defaultPrevented || (c2.value = true, e4.detail.originalEvent.type === `pointerdown` && (u2.value = true));
    let t4 = e4.target;
    r(o2).triggerElement.value?.contains(t4) && e4.preventDefault(), e4.detail.originalEvent.type === `focusin` && u2.value && e4.preventDefault();
  }) }), { default: p(() => [g(e3.$slots, `default`)]), _: 3 }, 16, [`present`]));
} }), W = d({ __name: `DialogContent`, props: { forceMount: { type: Boolean, required: false }, disableOutsidePointerEvents: { type: Boolean, required: false, default: void 0 }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, emits: [`escapeKeyDown`, `pointerDownOutside`, `focusOutside`, `interactOutside`, `openAutoFocus`, `closeAutoFocus`], setup(e2, { emit: t2 }) {
  let n2 = e2, i2 = t2, o2 = L(), c2 = O(i2), { forwardRef: l2 } = E();
  return (e3, t3) => (f(), m(r(w), { present: e3.forceMount || r(o2).open.value, "force-mount": e3.forceMount || !r(o2).unmountOnHide.value }, { default: p(({ present: t4 }) => [r(o2).modal.value ? a((f(), m(H, s({ key: 0, ref: r(l2), present: r(o2).unmountOnHide.value || t4 }, { ...n2, ...r(c2), ...e3.$attrs }), { default: p(() => [g(e3.$slots, `default`)]), _: 2 }, 1040, [`present`])), [[b, r(o2).unmountOnHide.value || t4]]) : a((f(), m(U, s({ key: 1, ref: r(l2), present: r(o2).unmountOnHide.value || t4 }, { ...n2, ...r(c2), ...e3.$attrs }), { default: p(() => [g(e3.$slots, `default`)]), _: 2 }, 1040, [`present`])), [[b, r(o2).unmountOnHide.value || t4]])]), _: 3 }, 8, [`present`, `force-mount`]));
} }), G = d({ __name: `DialogDescription`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `p` } }, setup(e2) {
  let t2 = e2;
  E();
  let n2 = L();
  return (e3, i2) => (f(), m(r(D), s(t2, { id: r(n2).descriptionId }), { default: p(() => [g(e3.$slots, `default`)]), _: 3 }, 16, [`id`]));
} }), K = d({ __name: `DialogOverlayImpl`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false }, present: { type: Boolean, required: false, default: true } }, setup(e2) {
  let t2 = e2, i2 = L(), a2 = F(t2.present);
  return n(() => t2.present, (e3) => a2.value = e3), E(), (e3, t3) => (f(), m(r(D), { as: e3.as, "as-child": e3.asChild, "data-state": r(i2).open.value ? `open` : `closed`, style: { "pointer-events": `auto` }, onPointerdown: t3[0] || (t3[0] = x(() => {
  }, [`left`, `self`, `prevent`])) }, { default: p(() => [g(e3.$slots, `default`)]), _: 3 }, 8, [`as`, `as-child`, `data-state`]));
} }), q = d({ __name: `DialogOverlay`, props: { forceMount: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let n2 = L(), { forwardRef: i2 } = E();
  return (e3, o2) => r(n2)?.modal.value ? (f(), m(r(w), { key: 0, present: e3.forceMount || r(n2).open.value, "force-mount": e3.forceMount || !r(n2).unmountOnHide.value }, { default: p(({ present: o3 }) => [a(t(K, s(e3.$attrs, { ref: r(i2), as: e3.as, "as-child": e3.asChild, present: r(n2).unmountOnHide.value || o3 }), { default: p(() => [g(e3.$slots, `default`)]), _: 2 }, 1040, [`as`, `as-child`, `present`]), [[b, r(n2).unmountOnHide.value || o3]])]), _: 3 }, 8, [`present`, `force-mount`])) : _(`v-if`, true);
} }), J = d({ __name: `DialogPortal`, props: { to: { type: null, required: false }, disabled: { type: Boolean, required: false }, defer: { type: Boolean, required: false }, forceMount: { type: Boolean, required: false } }, setup(t2) {
  let n2 = t2;
  return (t3, i2) => (f(), m(r(S), e(y(n2)), { default: p(() => [g(t3.$slots, `default`)]), _: 3 }, 16));
} }), Y = d({ __name: `DialogTitle`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `h2` } }, setup(e2) {
  let t2 = e2, n2 = L();
  return E(), (e3, i2) => (f(), m(r(D), s(t2, { id: r(n2).titleId }), { default: p(() => [g(e3.$slots, `default`)]), _: 3 }, 16, [`id`]));
} }), X = d({ __name: `DialogTrigger`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2, n2 = L(), { forwardRef: i2, currentElement: a2 } = E();
  return n2.contentId || (n2.contentId = C(void 0, `reka-dialog-content`)), o(() => {
    n2.triggerElement.value = a2.value;
  }), (e3, a3) => (f(), m(r(D), s(t2, { ref: r(i2), type: e3.as === `button` ? `button` : void 0, "aria-haspopup": `dialog`, "aria-expanded": r(n2).open.value || false, "aria-controls": r(n2).open.value ? r(n2).contentId : void 0, "data-state": r(n2).open.value ? `open` : `closed`, onClick: r(n2).onOpenToggle }), { default: p(() => [g(e3.$slots, `default`)]), _: 3 }, 16, [`type`, `aria-expanded`, `aria-controls`, `data-state`, `onClick`]));
} });
function Z() {
  let e2 = v([]), t2 = (t3, i3) => {
    let { props: a3, defaultOpen: s3, destroyOnClose: l2 } = i3 || {}, d2 = u({ id: /* @__PURE__ */ Symbol(import.meta.dev ? `useOverlay` : ``), isOpen: !!s3, component: c(t3), isMounted: !!s3, destroyOnClose: !!l2, originalProps: a3 || {}, props: { ...a3 } });
    return e2.push(d2), { ...d2, open: (e3) => n2(d2.id, e3), close: (e3) => r2(d2.id, e3), patch: (e3) => o2(d2.id, e3) };
  }, n2 = (e3, t3) => {
    let n3 = s2(e3);
    t3 ? n3.props = { ...n3.originalProps, ...t3 } : n3.props = { ...n3.originalProps }, n3.isOpen = true, n3.isMounted = true;
    let r3 = new Promise((e4) => n3.resolvePromise = e4);
    return Object.assign(r3, { id: e3, isMounted: n3.isMounted, isOpen: n3.isOpen, result: r3 });
  }, r2 = (e3, t3) => {
    let n3 = s2(e3);
    n3.isOpen = false, n3.resolvePromise && (n3.resolvePromise = (n3.resolvePromise(t3), void 0));
  }, i2 = () => {
    e2.forEach((e3) => r2(e3.id));
  }, a2 = (t3) => {
    let n3 = s2(t3);
    if (n3.isMounted = false, n3.destroyOnClose) {
      let n4 = e2.findIndex((e3) => e3.id === t3);
      e2.splice(n4, 1);
    }
  }, o2 = (e3, t3) => {
    let n3 = s2(e3);
    n3.props = { ...n3.props, ...t3 };
  }, s2 = (t3) => {
    let n3 = e2.find((e3) => e3.id === t3);
    if (!n3) throw Error(`Overlay not found`);
    return n3;
  };
  return { overlays: e2, open: n2, close: r2, closeAll: i2, create: t2, patch: o2, unmount: a2, isOpen: (e3) => s2(e3).isOpen };
}
var Q = A(Z);
export {
  q as a,
  B as c,
  J as i,
  z as l,
  X as n,
  G as o,
  Y as r,
  W as s,
  Q as t
};
