var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { E as e, Ht as t, J as n, Lt as r, On as i, Pt as a, Rt as o, Zn as s, _ as c, _n as l, b as u, ct as d, er as f, et as p, ft as m, g as h, gn as g, gt as _, mt as v, qt as y, tr as b, tt as x, v as S, vn as C, wt as w, xt as T, y as E } from "./runtime-core.esm-bundler-CahM68iJ.js";
import { l as D } from "./vue.runtime.esm-bundler-B0iyRCM8.js";
import { L as O, a as k, b as A, c as ee, d as j, l as te, n as M, o as ne, q as N, u as re, v as P, x as F, y as I } from "./Button-DpvhuBJO.js";
import { D as L, d as ie, h as R } from "./dist-BKF-Yqo1.js";
function z(e3) {
  return `schema` in e3 && typeof e3.coercer == `function` && typeof e3.validator == `function` && typeof e3.refiner == `function`;
}
function B(e3) {
  return `~standard` in e3;
}
async function V(e3, t2) {
  var _a;
  let n2 = await t2[`~standard`].validate(e3);
  return n2.issues ? { errors: ((_a = n2.issues) == null ? void 0 : _a.map((e4) => {
    var _a2;
    return { name: ((_a2 = e4.path) == null ? void 0 : _a2.map((e5) => typeof e5 == `object` ? e5.key : e5).join(`.`)) || ``, message: e4.message };
  })) || [], result: null } : { errors: null, result: n2.value };
}
async function H(e3, t2) {
  let [n2, r2] = t2.validate(e3);
  return n2 ? { errors: n2.failures().map((e4) => ({ message: e4.message, name: e4.path.join(`.`) })), result: null } : { errors: null, result: r2 };
}
function ae(e3, t2) {
  if (B(t2)) return V(e3, t2);
  if (z(t2)) return H(e3, t2);
  throw Error(`Form validation failed: Unsupported form schema`);
}
function oe(e3, t2) {
  return t2 ? t2.split(`.`).reduce((e4, t3) => e4 == null ? void 0 : e4[t3], e3) : e3;
}
function se(e3, t2, n2) {
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
var U = class e2 extends Error {
  constructor(t2, n2) {
    super(`Form validation exception`);
    __publicField(this, "formId");
    __publicField(this, "errors");
    this.formId = t2, this.errors = n2, Object.setPrototypeOf(this, e2.prototype);
  }
}, ce = { base: `` }, W = { __name: `Form`, props: { id: { type: [String, Number], required: false }, schema: { type: null, required: false }, state: { type: null, required: false }, validate: { type: Function, required: false }, validateOn: { type: Array, required: false, default() {
  return [`input`, `blur`, `change`];
} }, disabled: { type: Boolean, required: false }, name: { type: null, required: false }, validateOnInputDelay: { type: Number, required: false, default: 300 }, transform: { type: null, required: false, default: () => true }, nested: { type: Boolean, required: false }, loadingAuto: { type: Boolean, required: false, default: true }, class: { type: null, required: false }, ui: { type: Object, required: false }, onSubmit: { type: Function, required: false } }, emits: [`submit`, `error`], setup(e3, { expose: t2, emit: r2 }) {
  let c2 = e3, u2 = r2, f2 = N(), p2 = A(`form`, c2), b2 = h(() => {
    var _a;
    return I({ extend: I(ce), ...((_a = f2.ui) == null ? void 0 : _a.form) || {} });
  }), E2 = c2.id ?? a(), O2 = o(`formRef`), M2 = ie(`form-${E2}`), P2 = c2.nested === true && n(k, void 0), F2 = c2.nested === true ? n(j, void 0) : void 0, L2 = h(() => (F2 == null ? void 0 : F2.value) ? c2.name ? oe(F2.value, c2.name) : F2.value : c2.state);
  _(k, M2), _(j, L2);
  let R2 = C(/* @__PURE__ */ new Map());
  d(async () => {
    P2 && (await x(), P2.emit({ type: `attach`, validate: q, formId: E2, name: c2.name, api: _e }));
  }), m(() => {
    M2.reset(), P2 && P2.emit({ type: `detach`, formId: E2 });
  }), d(async () => {
    M2.on(async (e4) => {
      var _a;
      e4.type === `attach` ? R2.value.set(e4.formId, { validate: e4.validate, name: e4.name, api: e4.api }) : e4.type === `detach` ? R2.value.delete(e4.formId) : ((_a = c2.validateOn) == null ? void 0 : _a.includes(e4.type)) && !J.value && (e4.type === `input` ? (e4.eager || W2.has(e4.name)) && await q({ name: e4.name, silent: true, nested: false }) : await q({ name: e4.name, silent: true, nested: false })), e4.type === `blur` && W2.add(e4.name), (e4.type === `change` || e4.type === `input` || e4.type === `blur` || e4.type === `focus`) && H2.add(e4.name), (e4.type === `change` || e4.type === `input`) && V2.add(e4.name);
    });
  });
  let z2 = C([]);
  _(ne, z2);
  let B2 = C({});
  _(ee, B2);
  let V2 = g(/* @__PURE__ */ new Set()), H2 = g(/* @__PURE__ */ new Set()), W2 = g(/* @__PURE__ */ new Set());
  function G2(e4) {
    return e4.map((e5) => {
      var _a;
      return { ...e5, id: (e5 == null ? void 0 : e5.name) ? (_a = B2.value[e5.name]) == null ? void 0 : _a.id : void 0 };
    });
  }
  let K2 = C(null);
  async function le() {
    let e4 = c2.validate ? await c2.validate(L2.value) ?? [] : [];
    if (c2.schema) {
      let { errors: t3, result: n2 } = await ae(L2.value, c2.schema);
      t3 ? e4 = e4.concat(t3) : K2.value = n2;
    }
    return G2(e4);
  }
  async function q(e4 = { silent: false, nested: false, transform: false }) {
    var _a;
    let t3 = e4.name && !Array.isArray(e4.name) ? [e4.name] : e4.name, n2 = [], r3 = [];
    if (!t3 && e4.nested) {
      let t4 = Array.from(R2.value.values()).map((t5) => ue(t5, e4)), i3 = await Promise.all(t4);
      r3 = i3.filter((e5) => e5.error).flatMap((e5) => e5.error.errors.map((t5) => de(t5, e5.name))), n2 = i3.filter((e5) => e5.output !== void 0);
    }
    let i2 = [...await le(), ...r3];
    if (t3 ? z2.value = he(i2, t3) : z2.value = i2, (_a = z2.value) == null ? void 0 : _a.length) {
      if (e4.silent) return false;
      throw new U(E2, z2.value);
    }
    return e4.transform ? (n2.forEach((e5) => {
      e5.name ? se(K2.value, e5.name, e5.output) : Object.assign(K2.value, e5.output);
    }), K2.value ?? L2.value) : L2.value;
  }
  let J = C(false);
  _(te, l(J));
  async function Y(e4) {
    var _a;
    J.value = c2.loadingAuto && true;
    let t3 = e4;
    try {
      t3.data = await q({ nested: true, transform: c2.transform }), await ((_a = c2.onSubmit) == null ? void 0 : _a.call(c2, t3)), V2.clear();
    } catch (e5) {
      if (!(e5 instanceof U)) throw e5;
      u2(`error`, { ...t3, errors: e5.errors });
    } finally {
      J.value = false;
    }
  }
  let X = h(() => c2.disabled || J.value);
  _(re, h(() => ({ disabled: X.value, validateOnInputDelay: c2.validateOnInputDelay })));
  async function ue(e4, t3) {
    try {
      let n2 = await e4.validate({ ...t3, silent: false });
      return { name: e4.name, output: n2 };
    } catch (t4) {
      if (!(t4 instanceof U)) throw t4;
      return { name: e4.name, error: t4 };
    }
  }
  function de(e4, t3) {
    return !t3 || !e4.name ? e4 : { ...e4, name: t3 + `.` + e4.name };
  }
  function fe(e4, t3) {
    var _a;
    let n2 = t3 + `.`, r3 = ((_a = e4 == null ? void 0 : e4.name) == null ? void 0 : _a.startsWith(n2)) ? e4.name.substring(n2.length) : e4.name;
    return { ...e4, name: r3 };
  }
  function pe(e4, t3) {
    return t3 ? e4.filter((e5) => {
      var _a;
      return (_a = e5 == null ? void 0 : e5.name) == null ? void 0 : _a.startsWith(t3 + `.`);
    }).map((e5) => fe(e5, t3)) : e4;
  }
  function Z(e4) {
    return e4.api.getErrors().map((t3) => e4.name ? { ...t3, name: e4.name + `.` + t3.name } : t3);
  }
  function Q(e4, t3) {
    return !e4 || !t3 ? true : e4 instanceof RegExp ? e4.test(t3) : t3 === e4 || typeof e4 == `string` && e4.startsWith(t3 + `.`);
  }
  function me(e4, t3) {
    if (!e4 || e4 instanceof RegExp) return e4;
    if (t3 !== e4) return typeof e4 == `string` && e4.startsWith(t3 + `.`) ? e4.substring(t3.length + 1) : e4;
  }
  function he(e4, t3) {
    let n2 = new Set(t3), r3 = t3.map((e5) => {
      var _a, _b;
      return (_b = (_a = B2.value) == null ? void 0 : _a[e5]) == null ? void 0 : _b.pattern;
    }).filter(Boolean), i2 = (e5) => e5.name ? n2.has(e5.name) ? true : r3.some((t4) => t4.test(e5.name)) : false, a2 = z2.value.filter((e5) => !i2(e5)), o2 = e4.filter(i2);
    return [...a2, ...o2];
  }
  function ge(e4, t3) {
    return e4.filter((e5) => t3 instanceof RegExp ? !(e5.name && t3.test(e5.name)) : !e5.name || e5.name !== t3);
  }
  function $(e4) {
    return !e4.name || !!B2.value[e4.name];
  }
  let _e = { validate: q, errors: z2, setErrors(e4, t3) {
    let n2 = G2(e4.filter($)), r3 = [];
    for (let n3 of R2.value.values()) if (Q(t3, n3.name)) {
      let i2 = pe(e4, n3.name);
      n3.api.setErrors(i2, me(t3, n3.name || ``)), r3.push(...Z(n3));
    }
    t3 ? z2.value = [...ge(z2.value, t3), ...n2, ...r3] : z2.value = [...n2, ...r3];
  }, async submit() {
    O2.value instanceof HTMLFormElement && O2.value.reportValidity() === false || await Y(new Event(`submit`));
  }, getErrors(e4) {
    return e4 ? z2.value.filter((t3) => e4 instanceof RegExp ? t3.name && e4.test(t3.name) : t3.name === e4) : z2.value;
  }, clear(e4) {
    let t3 = e4 ? z2.value.filter((t4) => $(t4) && (e4 instanceof RegExp ? !(t4.name && e4.test(t4.name)) : t4.name !== e4)) : [], n2 = [];
    for (let t4 of R2.value.values()) Q(e4, t4.name) && t4.api.clear(), n2.push(...Z(t4));
    z2.value = [...t3, ...n2];
  }, disabled: X, loading: J, dirty: h(() => !!V2.size), dirtyFields: l(V2), blurredFields: l(W2), touchedFields: l(H2) };
  return t2(_e), (e4, t3) => {
    var _a;
    return v(), S(w(i(P2) ? `div` : `form`), { id: i(E2), ref_key: `formRef`, ref: O2, class: s(b2.value({ class: [(_a = i(p2)) == null ? void 0 : _a.base, c2.class] })), onSubmit: D(Y, [`prevent`]) }, { default: y(() => [T(e4.$slots, `default`, { errors: z2.value, loading: J.value })]), _: 3 }, 40, [`id`, `class`]);
  };
} }, G = { slots: { root: `relative flex rounded-lg`, spotlight: `absolute inset-0 rounded-[inherit] pointer-events-none bg-default/90`, container: `relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-6`, wrapper: `flex flex-col flex-1 items-start`, header: `mb-4`, body: `flex-1`, footer: `pt-4 mt-auto`, leading: `inline-flex items-center mb-2.5`, leadingIcon: `size-5 shrink-0 text-primary`, title: `text-base text-pretty font-semibold text-highlighted`, description: `text-[15px] text-pretty` }, variants: { orientation: { horizontal: { container: `lg:grid-cols-2 lg:items-center` }, vertical: { container: `` } }, reverse: { true: { wrapper: `order-last` } }, variant: { solid: { root: `bg-inverted text-inverted`, title: `text-inverted`, description: `text-dimmed` }, outline: { root: `bg-default ring ring-default`, description: `text-muted` }, soft: { root: `bg-elevated/50`, description: `text-toned` }, subtle: { root: `bg-elevated/50 ring ring-default`, description: `text-toned` }, ghost: { description: `text-muted` }, naked: { container: `p-0 sm:p-0`, description: `text-muted` } }, to: { true: { root: [`has-focus-visible:ring-2 has-focus-visible:ring-primary`, `transition`] } }, title: { true: { description: `mt-1` } }, highlight: { true: { root: `ring-2` } }, highlightColor: { primary: ``, secondary: ``, success: ``, info: ``, warning: ``, error: ``, neutral: `` }, spotlight: { true: { root: `[--spotlight-size:400px] before:absolute before:-inset-px before:pointer-events-none before:rounded-[inherit] before:bg-[radial-gradient(var(--spotlight-size)_var(--spotlight-size)_at_calc(var(--spotlight-x,0px))_calc(var(--spotlight-y,0px)),var(--spotlight-color),transparent_70%)]` } }, spotlightColor: { primary: ``, secondary: ``, success: ``, info: ``, warning: ``, error: ``, neutral: `` } }, compoundVariants: [{ variant: `solid`, to: true, class: { root: `hover:bg-inverted/90` } }, { variant: `outline`, to: true, class: { root: `hover:bg-elevated/50` } }, { variant: `soft`, to: true, class: { root: `hover:bg-elevated` } }, { variant: `subtle`, to: true, class: { root: `hover:bg-elevated` } }, { variant: `subtle`, to: true, highlight: false, class: { root: `hover:ring-accented` } }, { variant: `ghost`, to: true, class: { root: `hover:bg-elevated/50` } }, { highlightColor: `primary`, highlight: true, class: { root: `ring-primary` } }, { highlightColor: `secondary`, highlight: true, class: { root: `ring-secondary` } }, { highlightColor: `success`, highlight: true, class: { root: `ring-success` } }, { highlightColor: `info`, highlight: true, class: { root: `ring-info` } }, { highlightColor: `warning`, highlight: true, class: { root: `ring-warning` } }, { highlightColor: `error`, highlight: true, class: { root: `ring-error` } }, { highlightColor: `neutral`, highlight: true, class: { root: `ring-inverted` } }, { spotlightColor: `primary`, spotlight: true, class: { root: `[--spotlight-color:var(--ui-primary)]` } }, { spotlightColor: `secondary`, spotlight: true, class: { root: `[--spotlight-color:var(--ui-secondary)]` } }, { spotlightColor: `success`, spotlight: true, class: { root: `[--spotlight-color:var(--ui-success)]` } }, { spotlightColor: `info`, spotlight: true, class: { root: `[--spotlight-color:var(--ui-info)]` } }, { spotlightColor: `warning`, spotlight: true, class: { root: `[--spotlight-color:var(--ui-warning)]` } }, { spotlightColor: `error`, spotlight: true, class: { root: `[--spotlight-color:var(--ui-error)]` } }, { spotlightColor: `neutral`, spotlight: true, class: { root: `[--spotlight-color:var(--ui-bg-inverted)]` } }], defaultVariants: { variant: `outline`, highlightColor: `primary`, spotlightColor: `primary` } }, K = Object.assign({ inheritAttrs: false }, { __name: `PageCard`, props: { as: { type: null, required: false }, icon: { type: null, required: false }, title: { type: String, required: false }, description: { type: String, required: false }, orientation: { type: null, required: false, default: `vertical` }, reverse: { type: Boolean, required: false }, highlight: { type: Boolean, required: false }, highlightColor: { type: null, required: false }, spotlight: { type: Boolean, required: false }, spotlightColor: { type: null, required: false }, variant: { type: null, required: false }, to: { type: null, required: false }, target: { type: [String, Object, null], required: false }, onClick: { type: Function, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(n2) {
  let a2 = n2, o2 = r(), l2 = C(), d2 = L(), m2 = N(), g2 = A(`pageCard`, a2), { elementX: _2, elementY: x2 } = R(l2, { eventFilter: d2.eventFilter }), w2 = h(() => a2.spotlight && (_2.value !== 0 || x2.value !== 0));
  t(() => a2.spotlight, (e3) => {
    e3 ? d2.resume() : d2.pause();
  }, { immediate: true });
  let D2 = h(() => {
    var _a;
    return I({ extend: I(G), ...((_a = m2.ui) == null ? void 0 : _a.pageCard) || {} })({ orientation: a2.orientation, reverse: a2.reverse, variant: a2.variant, to: !!a2.to || !!a2.onClick, title: !!a2.title || !!o2.title, highlight: a2.highlight, highlightColor: a2.highlightColor, spotlight: w2.value, spotlightColor: a2.spotlightColor });
  }), k2 = h(() => (o2.title && O(o2.title()) || a2.title || `Card link`).trim());
  return (t2, r2) => {
    var _a;
    return v(), S(i(F), { ref_key: `cardRef`, ref: l2, as: n2.as, "data-orientation": n2.orientation, "data-slot": `root`, class: s(D2.value.root({ class: [(_a = i(g2)) == null ? void 0 : _a.root, a2.class] })), style: f(w2.value && { "--spotlight-x": `${i(_2)}px`, "--spotlight-y": `${i(x2)}px` }), onClick: n2.onClick }, { default: y(() => {
      var _a2, _b, _c, _d, _e, _f, _g;
      return [a2.spotlight ? (v(), u(`div`, { key: 0, "data-slot": `spotlight`, class: s(D2.value.spotlight({ class: (_a2 = i(g2)) == null ? void 0 : _a2.spotlight })) }, null, 2)) : E(``, true), c(`div`, { "data-slot": `container`, class: s(D2.value.container({ class: (_b = i(g2)) == null ? void 0 : _b.container })) }, [o2.header || n2.icon || o2.leading || o2.body || n2.title || o2.title || n2.description || o2.description || o2.footer ? (v(), u(`div`, { key: 0, "data-slot": `wrapper`, class: s(D2.value.wrapper({ class: (_c = i(g2)) == null ? void 0 : _c.wrapper })) }, [o2.header ? (v(), u(`div`, { key: 0, "data-slot": `header`, class: s(D2.value.header({ class: (_d = i(g2)) == null ? void 0 : _d.header })) }, [T(t2.$slots, `header`)], 2)) : E(``, true), n2.icon || o2.leading ? (v(), u(`div`, { key: 1, "data-slot": `leading`, class: s(D2.value.leading({ class: (_e = i(g2)) == null ? void 0 : _e.leading })) }, [T(t2.$slots, `leading`, { ui: D2.value }, () => {
        var _a3;
        return [n2.icon ? (v(), S(P, { key: 0, name: n2.icon, "data-slot": `leadingIcon`, class: s(D2.value.leadingIcon({ class: (_a3 = i(g2)) == null ? void 0 : _a3.leadingIcon })) }, null, 8, [`name`, `class`])) : E(``, true)];
      })], 2)) : E(``, true), o2.body || n2.title || o2.title || n2.description || o2.description ? (v(), u(`div`, { key: 2, "data-slot": `body`, class: s(D2.value.body({ class: (_f = i(g2)) == null ? void 0 : _f.body })) }, [T(t2.$slots, `body`, {}, () => {
        var _a3, _b2;
        return [n2.title || o2.title ? (v(), u(`div`, { key: 0, "data-slot": `title`, class: s(D2.value.title({ class: (_a3 = i(g2)) == null ? void 0 : _a3.title })) }, [T(t2.$slots, `title`, {}, () => [e(b(n2.title), 1)])], 2)) : E(``, true), n2.description || o2.description ? (v(), u(`div`, { key: 1, "data-slot": `description`, class: s(D2.value.description({ class: (_b2 = i(g2)) == null ? void 0 : _b2.description })) }, [T(t2.$slots, `description`, {}, () => [e(b(n2.description), 1)])], 2)) : E(``, true)];
      })], 2)) : E(``, true), o2.footer ? (v(), u(`div`, { key: 3, "data-slot": `footer`, class: s(D2.value.footer({ class: (_g = i(g2)) == null ? void 0 : _g.footer })) }, [T(t2.$slots, `footer`)], 2)) : E(``, true)], 2)) : E(``, true), T(t2.$slots, `default`)], 2), n2.to ? (v(), S(M, p({ key: 1, "aria-label": k2.value }, { to: n2.to, target: n2.target, ...t2.$attrs }, { class: `focus:outline-none peer`, raw: `` }), { default: y(() => [...r2[0] || (r2[0] = [c(`span`, { class: `absolute inset-0`, "aria-hidden": `true` }, null, -1)])]), _: 1 }, 16, [`aria-label`])) : E(``, true)];
    }), _: 3 }, 8, [`as`, `data-orientation`, `class`, `style`, `onClick`]);
  };
} });
export {
  W as n,
  K as t
};
