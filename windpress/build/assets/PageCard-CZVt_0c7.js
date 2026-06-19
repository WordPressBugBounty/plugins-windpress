var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { E as e, Ht as t, J as n, Lt as r, On as i, Pt as a, Rt as o, Zn as s, _ as c, _n as l, b as u, ct as d, er as f, et as p, ft as m, g as h, gn as g, gt as _, mt as v, qt as y, tr as b, tt as x, v as S, vn as C, wt as w, xt as T, y as E } from "./runtime-core.esm-bundler-Ci9kEgM7.js";
import { l as D } from "./vue.runtime.esm-bundler-CWCE91rd.js";
import { B as O, C as k, S as A, X as j, a as M, b as N, c as P, d as F, l as ee, n as I, o as te, u as ne, y as L } from "./Button-CzGEASGR.js";
import { D as R, d as re, h as z } from "./dist-D5YmEqpM.js";
function B(e3) {
  return `schema` in e3 && typeof e3.coercer == `function` && typeof e3.validator == `function` && typeof e3.refiner == `function`;
}
function V(e3) {
  return `~standard` in e3;
}
async function H(e3, t2) {
  let n2 = await t2[`~standard`].validate(e3);
  return n2.issues ? { errors: n2.issues?.map((e4) => ({ name: e4.path?.map((e5) => typeof e5 == `object` ? e5.key : e5).join(`.`) || ``, message: e4.message })) || [], result: null } : { errors: null, result: n2.value };
}
async function U(e3, t2) {
  let [n2, r2] = t2.validate(e3);
  return n2 ? { errors: n2.failures().map((e4) => ({ message: e4.message, name: e4.path.join(`.`) })), result: null } : { errors: null, result: r2 };
}
function ie(e3, t2) {
  if (V(t2)) return H(e3, t2);
  if (B(t2)) return U(e3, t2);
  throw Error(`Form validation failed: Unsupported form schema`);
}
function ae(e3, t2) {
  return t2 ? t2.split(`.`).reduce((e4, t3) => e4?.[t3], e3) : e3;
}
function oe(e3, t2, n2) {
  if (!t2) return Object.assign(e3, n2);
  if (!e3) return e3;
  let r2 = t2.split(`.`), i2 = e3;
  for (let e4 = 0; e4 < r2.length - 1; e4++) {
    let t3 = r2[e4];
    (i2[t3] === void 0 || i2[t3] === null) && (e4 + 1 < r2.length && !Number.isNaN(Number(r2[e4 + 1])) ? i2[t3] = [] : i2[t3] = {}), i2 = i2[t3];
  }
  let a2 = r2[r2.length - 1];
  return i2[a2] = n2, e3;
}
var W = class e2 extends Error {
  constructor(t2, n2) {
    super(`Form validation exception`);
    __publicField(this, "formId");
    __publicField(this, "errors");
    this.formId = t2, this.errors = n2, Object.setPrototypeOf(this, e2.prototype);
  }
}, se = { base: `` }, G = { __name: `Form`, props: { id: { type: [String, Number], required: false }, schema: { type: null, required: false }, state: { type: null, required: false }, validate: { type: Function, required: false }, validateOn: { type: Array, required: false, default() {
  return [`input`, `blur`, `change`];
} }, disabled: { type: Boolean, required: false }, name: { type: String, required: false }, validateOnInputDelay: { type: Number, required: false, default: 300 }, transform: { type: null, required: false, default: () => true }, nested: { type: Boolean, required: false }, loadingAuto: { type: Boolean, required: false, default: true }, class: { type: null, required: false }, ui: { type: Object, required: false }, onSubmit: { type: Function, required: false } }, emits: [`submit`, `error`], setup(e3, { expose: t2, emit: r2 }) {
  let c2 = e3, u2 = r2, f2 = A(`form`, c2), p2 = j(), b2 = h(() => N({ extend: N(se), ...p2.ui?.form || {} })), E2 = f2.id ?? a(), O2 = o(`formRef`), k2 = re(`form-${E2}`), I2 = f2.nested === true && n(M, void 0), L2 = f2.nested === true ? n(F, void 0) : void 0, R2 = h(() => L2?.value ? f2.name ? ae(L2.value, f2.name) : L2.value : f2.state);
  _(M, k2), _(F, R2);
  let z2 = C(/* @__PURE__ */ new Map());
  d(async () => {
    I2 && (await x(), I2.emit({ type: `attach`, validate: Y, formId: E2, name: f2.name, api: _e }));
  }), m(() => {
    k2.reset(), I2 && I2.emit({ type: `detach`, formId: E2 });
  }), d(async () => {
    k2.on(async (e4) => {
      e4.type === `attach` ? z2.value.set(e4.formId, { validate: e4.validate, name: e4.name, api: e4.api }) : e4.type === `detach` ? z2.value.delete(e4.formId) : f2.validateOn?.includes(e4.type) && !X.value && (e4.type === `input` ? (e4.eager || G2.has(e4.name)) && await Y({ name: e4.name, silent: true, nested: false }) : await Y({ name: e4.name, silent: true, nested: false })), e4.type === `blur` && G2.add(e4.name), (e4.type === `change` || e4.type === `input` || e4.type === `blur` || e4.type === `focus`) && U2.add(e4.name), (e4.type === `change` || e4.type === `input`) && H2.add(e4.name);
    });
  });
  let B2 = C([]);
  _(te, B2);
  let V2 = C({});
  _(P, V2);
  let H2 = g(/* @__PURE__ */ new Set()), U2 = g(/* @__PURE__ */ new Set()), G2 = g(/* @__PURE__ */ new Set());
  function K2(e4) {
    return e4.map((e5) => ({ ...e5, id: e5?.name ? V2.value[e5.name]?.id : void 0 }));
  }
  let q2 = C(null);
  async function J2() {
    let e4 = f2.validate ? await f2.validate(R2.value) ?? [] : [];
    if (f2.schema) {
      let { errors: t3, result: n2 } = await ie(R2.value, f2.schema);
      t3 ? e4 = e4.concat(t3) : q2.value = n2;
    }
    return K2(e4);
  }
  async function Y(e4 = { silent: false, nested: false, transform: false }) {
    let t3 = e4.name && !Array.isArray(e4.name) ? [e4.name] : e4.name, n2 = [], r3 = [];
    if (!t3 && e4.nested) {
      let t4 = Array.from(z2.value.values()).map((t5) => ce(t5, e4)), i3 = await Promise.all(t4);
      r3 = i3.filter((e5) => e5.error).flatMap((e5) => e5.error.errors.map((t5) => le(t5, e5.name))), n2 = i3.filter((e5) => e5.output !== void 0);
    }
    let i2 = [...await J2(), ...r3];
    if (t3 ? B2.value = me(i2, t3) : B2.value = i2, B2.value?.length) {
      if (e4.silent) return false;
      throw new W(E2, B2.value);
    }
    return e4.transform ? (n2.forEach((e5) => {
      e5.name ? oe(q2.value, e5.name, e5.output) : Object.assign(q2.value, e5.output);
    }), q2.value ?? R2.value) : R2.value;
  }
  let X = C(false);
  _(ee, l(X));
  async function Z(e4) {
    X.value = !!f2.loadingAuto;
    let t3 = e4;
    try {
      t3.data = await Y({ nested: true, transform: f2.transform }), await f2.onSubmit?.(t3), H2.clear();
    } catch (e5) {
      if (!(e5 instanceof W)) throw e5;
      u2(`error`, { ...t3, errors: e5.errors });
    } finally {
      X.value = false;
    }
  }
  let Q = h(() => f2.disabled || X.value);
  _(ne, h(() => ({ disabled: Q.value, validateOnInputDelay: f2.validateOnInputDelay })));
  async function ce(e4, t3) {
    try {
      let n2 = await e4.validate({ ...t3, silent: false });
      return { name: e4.name, output: n2 };
    } catch (t4) {
      if (!(t4 instanceof W)) throw t4;
      return { name: e4.name, error: t4 };
    }
  }
  function le(e4, t3) {
    return !t3 || !e4.name ? e4 : { ...e4, name: t3 + `.` + e4.name };
  }
  function ue(e4, t3) {
    let n2 = t3 + `.`, r3 = e4?.name?.startsWith(n2) ? e4.name.substring(n2.length) : e4.name;
    return { ...e4, name: r3 };
  }
  function de(e4, t3) {
    return t3 ? e4.filter((e5) => e5?.name?.startsWith(t3 + `.`)).map((e5) => ue(e5, t3)) : e4;
  }
  function $(e4) {
    return e4.api.getErrors().map((t3) => e4.name ? { ...t3, name: e4.name + `.` + t3.name } : t3);
  }
  function fe(e4, t3) {
    return !e4 || !t3 ? true : e4 instanceof RegExp ? e4.test(t3) : t3 === e4 || typeof e4 == `string` && e4.startsWith(t3 + `.`);
  }
  function pe(e4, t3) {
    if (!e4 || e4 instanceof RegExp) return e4;
    if (t3 !== e4) return typeof e4 == `string` && e4.startsWith(t3 + `.`) ? e4.substring(t3.length + 1) : e4;
  }
  function me(e4, t3) {
    let n2 = new Set(t3), r3 = t3.map((e5) => V2.value?.[e5]?.pattern).filter(Boolean), i2 = (e5) => e5.name ? n2.has(e5.name) ? true : r3.some((t4) => t4.test(e5.name)) : false, a2 = B2.value.filter((e5) => !i2(e5)), o2 = e4.filter(i2);
    return [...a2, ...o2];
  }
  function he(e4, t3) {
    return e4.filter((e5) => t3 instanceof RegExp ? !(e5.name && t3.test(e5.name)) : !e5.name || e5.name !== t3);
  }
  function ge(e4) {
    return !e4.name || !!V2.value[e4.name];
  }
  let _e = { validate: Y, errors: B2, setErrors(e4, t3) {
    let n2 = K2(e4.filter(ge)), r3 = [];
    for (let n3 of z2.value.values()) if (fe(t3, n3.name)) {
      let i2 = de(e4, n3.name);
      n3.api.setErrors(i2, pe(t3, n3.name || ``)), r3.push(...$(n3));
    }
    t3 ? B2.value = [...he(B2.value, t3), ...n2, ...r3] : B2.value = [...n2, ...r3];
  }, async submit() {
    O2.value instanceof HTMLFormElement && O2.value.reportValidity() === false || await Z(new Event(`submit`));
  }, getErrors(e4) {
    return e4 ? B2.value.filter((t3) => e4 instanceof RegExp ? t3.name && e4.test(t3.name) : t3.name === e4) : B2.value;
  }, clear(e4) {
    let t3 = e4 ? B2.value.filter((t4) => ge(t4) && (e4 instanceof RegExp ? !(t4.name && e4.test(t4.name)) : t4.name !== e4)) : [], n2 = [];
    for (let t4 of z2.value.values()) fe(e4, t4.name) && t4.api.clear(), n2.push(...$(t4));
    B2.value = [...t3, ...n2];
  }, disabled: Q, loading: X, dirty: h(() => !!H2.size), dirtyFields: l(H2), blurredFields: l(G2), touchedFields: l(U2) };
  return t2(_e), (e4, t3) => (v(), S(w(i(I2) ? `div` : `form`), { id: i(E2), ref_key: `formRef`, ref: O2, name: i(I2) ? void 0 : i(f2).name, method: `post`, class: s(b2.value({ class: [i(f2).ui?.base, i(f2).class] })), onSubmit: D(Z, [`prevent`]) }, { default: y(() => [T(e4.$slots, `default`, { errors: B2.value, loading: X.value })]), _: 3 }, 40, [`id`, `name`, `class`]));
} };
function K() {
  let e3 = j().ui?.prefix;
  return (t2) => !e3 || !t2 ? t2 : t2.split(/\s+/).filter(Boolean).map((t3) => `${e3}:${t3}`).join(` `);
}
var q = { slots: { root: `relative flex rounded-lg`, spotlight: `absolute inset-0 rounded-[inherit] pointer-events-none bg-default/90`, container: `relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-6`, wrapper: `flex flex-col flex-1 items-start`, header: `mb-4`, body: `flex-1`, footer: `pt-4 mt-auto`, leading: `inline-flex items-center mb-2.5`, leadingIcon: `size-5 shrink-0 text-primary`, title: `text-base text-pretty font-semibold text-highlighted`, description: `text-[15px] text-pretty` }, variants: { orientation: { horizontal: { container: `lg:grid-cols-2 lg:items-center` }, vertical: { container: `` } }, reverse: { true: { wrapper: `order-last` } }, variant: { solid: { root: `bg-inverted text-inverted`, title: `text-inverted`, description: `text-dimmed` }, outline: { root: `bg-default ring ring-default`, description: `text-muted` }, soft: { root: `bg-elevated/50`, description: `text-toned` }, subtle: { root: `bg-elevated/50 ring ring-default`, description: `text-toned` }, ghost: { description: `text-muted` }, naked: { container: `p-0 sm:p-0`, description: `text-muted` } }, to: { true: { root: [`outline-primary/25 has-[>a:focus-visible]:outline-3`, `transition`] } }, title: { true: { description: `mt-1` } }, highlight: { true: { root: `ring-2` } }, highlightColor: { primary: ``, secondary: ``, success: ``, info: ``, warning: ``, error: ``, neutral: `` }, spotlight: { true: { root: `[--spotlight-size:400px] before:absolute before:-inset-px before:pointer-events-none before:rounded-[inherit] before:bg-[radial-gradient(var(--spotlight-size)_var(--spotlight-size)_at_calc(var(--spotlight-x,0px))_calc(var(--spotlight-y,0px)),var(--spotlight-color),transparent_70%)]` } }, spotlightColor: { primary: ``, secondary: ``, success: ``, info: ``, warning: ``, error: ``, neutral: `` } }, compoundVariants: [{ variant: `solid`, to: true, class: { root: `hover:bg-inverted/90` } }, { variant: `outline`, to: true, class: { root: `hover:bg-elevated/50` } }, { variant: `soft`, to: true, class: { root: `hover:bg-elevated` } }, { variant: `subtle`, to: true, class: { root: `hover:bg-elevated` } }, { variant: `subtle`, to: true, highlight: false, class: { root: `hover:ring-accented` } }, { variant: [`outline`, `subtle`], to: true, highlight: false, class: { root: `has-[>a:focus-visible]:ring-primary` } }, { variant: `ghost`, to: true, class: { root: `hover:bg-elevated/50` } }, { highlightColor: `primary`, highlight: true, class: { root: `ring-primary` } }, { highlightColor: `secondary`, highlight: true, class: { root: `ring-secondary` } }, { highlightColor: `success`, highlight: true, class: { root: `ring-success` } }, { highlightColor: `info`, highlight: true, class: { root: `ring-info` } }, { highlightColor: `warning`, highlight: true, class: { root: `ring-warning` } }, { highlightColor: `error`, highlight: true, class: { root: `ring-error` } }, { highlightColor: `neutral`, highlight: true, class: { root: `ring-inverted` } }, { spotlightColor: `primary`, spotlight: true, class: { root: `[--spotlight-color:var(--ui-primary)]` } }, { spotlightColor: `secondary`, spotlight: true, class: { root: `[--spotlight-color:var(--ui-secondary)]` } }, { spotlightColor: `success`, spotlight: true, class: { root: `[--spotlight-color:var(--ui-success)]` } }, { spotlightColor: `info`, spotlight: true, class: { root: `[--spotlight-color:var(--ui-info)]` } }, { spotlightColor: `warning`, spotlight: true, class: { root: `[--spotlight-color:var(--ui-warning)]` } }, { spotlightColor: `error`, spotlight: true, class: { root: `[--spotlight-color:var(--ui-error)]` } }, { spotlightColor: `neutral`, spotlight: true, class: { root: `[--spotlight-color:var(--ui-bg-inverted)]` } }], defaultVariants: { variant: `outline`, highlightColor: `primary`, spotlightColor: `primary` } }, J = Object.assign({ inheritAttrs: false }, { __name: `PageCard`, props: { as: { type: null, required: false }, icon: { type: null, required: false }, title: { type: String, required: false }, description: { type: String, required: false }, orientation: { type: null, required: false, default: `vertical` }, reverse: { type: Boolean, required: false }, highlight: { type: Boolean, required: false }, highlightColor: { type: null, required: false }, spotlight: { type: Boolean, required: false }, spotlightColor: { type: null, required: false }, variant: { type: null, required: false }, to: { type: null, required: false }, target: { type: [String, Object, null], required: false }, onClick: { type: Function, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(n2) {
  let a2 = n2, o2 = r(), l2 = A(`pageCard`, a2), d2 = C(), m2 = R(), g2 = j(), { elementX: _2, elementY: x2 } = z(d2, { eventFilter: m2.eventFilter }), w2 = K(), D2 = h(() => l2.spotlight && (_2.value !== 0 || x2.value !== 0));
  t(() => l2.spotlight, (e3) => {
    e3 ? m2.resume() : m2.pause();
  }, { immediate: true });
  let M2 = h(() => N({ extend: N(q), ...g2.ui?.pageCard || {} })({ orientation: l2.orientation, reverse: l2.reverse, variant: l2.variant, to: !!l2.to || !!l2.onClick, title: !!l2.title || !!o2.title, highlight: l2.highlight, highlightColor: l2.highlightColor, spotlight: D2.value, spotlightColor: l2.spotlightColor })), P2 = h(() => (o2.title && O(o2.title()) || l2.title || `Card link`).trim());
  return (t2, n3) => (v(), S(i(k), { ref_key: `cardRef`, ref: d2, as: i(l2).as, "data-orientation": i(l2).orientation, "data-slot": `root`, class: s(M2.value.root({ class: [i(l2).ui?.root, i(l2).class] })), style: f(D2.value && { "--spotlight-x": `${i(_2)}px`, "--spotlight-y": `${i(x2)}px` }), onClick: i(l2).onClick }, { default: y(() => [i(l2).spotlight ? (v(), u(`div`, { key: 0, "data-slot": `spotlight`, class: s(M2.value.spotlight({ class: i(l2).ui?.spotlight })) }, null, 2)) : E(``, true), c(`div`, { "data-slot": `container`, class: s(M2.value.container({ class: i(l2).ui?.container })) }, [o2.header || i(l2).icon || o2.leading || o2.body || i(l2).title || o2.title || i(l2).description || o2.description || o2.footer ? (v(), u(`div`, { key: 0, "data-slot": `wrapper`, class: s(M2.value.wrapper({ class: i(l2).ui?.wrapper })) }, [o2.header ? (v(), u(`div`, { key: 0, "data-slot": `header`, class: s(M2.value.header({ class: i(l2).ui?.header })) }, [T(t2.$slots, `header`)], 2)) : E(``, true), i(l2).icon || o2.leading ? (v(), u(`div`, { key: 1, "data-slot": `leading`, class: s(M2.value.leading({ class: i(l2).ui?.leading })) }, [T(t2.$slots, `leading`, { ui: M2.value }, () => [i(l2).icon ? (v(), S(L, { key: 0, name: i(l2).icon, "data-slot": `leadingIcon`, class: s(M2.value.leadingIcon({ class: i(l2).ui?.leadingIcon })) }, null, 8, [`name`, `class`])) : E(``, true)])], 2)) : E(``, true), o2.body || i(l2).title || o2.title || i(l2).description || o2.description ? (v(), u(`div`, { key: 2, "data-slot": `body`, class: s(M2.value.body({ class: i(l2).ui?.body })) }, [T(t2.$slots, `body`, {}, () => [i(l2).title || o2.title ? (v(), u(`div`, { key: 0, "data-slot": `title`, class: s(M2.value.title({ class: i(l2).ui?.title })) }, [T(t2.$slots, `title`, {}, () => [e(b(i(l2).title), 1)])], 2)) : E(``, true), i(l2).description || o2.description ? (v(), u(`div`, { key: 1, "data-slot": `description`, class: s(M2.value.description({ class: i(l2).ui?.description })) }, [T(t2.$slots, `description`, {}, () => [e(b(i(l2).description), 1)])], 2)) : E(``, true)])], 2)) : E(``, true), o2.footer ? (v(), u(`div`, { key: 3, "data-slot": `footer`, class: s(M2.value.footer({ class: i(l2).ui?.footer })) }, [T(t2.$slots, `footer`)], 2)) : E(``, true)], 2)) : E(``, true), T(t2.$slots, `default`)], 2), i(l2).to ? (v(), S(I, p({ key: 1, "aria-label": P2.value }, { to: i(l2).to, target: i(l2).target, ...t2.$attrs }, { class: i(w2)(`focus:outline-none peer`), raw: `` }), { default: y(() => [c(`span`, { class: s(i(w2)(`absolute inset-0`)), "aria-hidden": `true` }, null, 2)]), _: 1 }, 16, [`aria-label`, `class`])) : E(``, true)]), _: 3 }, 8, [`as`, `data-orientation`, `class`, `style`, `onClick`]));
} });
export {
  G as n,
  J as t
};
