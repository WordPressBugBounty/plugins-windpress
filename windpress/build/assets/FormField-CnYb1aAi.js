import { D as e, E as t, Ht as n, J as r, Lt as i, On as a, Pt as o, Zn as s, _ as c, b as l, g as u, gt as d, mt as f, qt as p, tr as m, v as h, vn as g, xt as _, y as v } from "./runtime-core.esm-bundler-CahM68iJ.js";
import { b as y, c as b, f as x, o as S, q as C, s as w, x as T, y as E } from "./Button-DpvhuBJO.js";
import { t as D } from "./Label-DkrxXJk5.js";
var O = { slots: { root: ``, wrapper: ``, labelWrapper: `flex content-center items-center justify-between gap-1`, label: `block font-medium text-default`, container: `relative`, description: `text-muted`, error: `mt-2 text-error`, hint: `text-muted`, help: `mt-2 text-muted` }, variants: { size: { xs: { root: `text-xs` }, sm: { root: `text-xs` }, md: { root: `text-sm` }, lg: { root: `text-sm` }, xl: { root: `text-base` } }, required: { true: { label: `after:content-['*'] after:ms-0.5 after:text-error` } }, orientation: { vertical: { container: `mt-1` }, horizontal: { root: `flex justify-between place-items-baseline gap-2` } } }, defaultVariants: { size: `md`, orientation: `vertical` } }, k = [`id`], A = [`id`], j = [`id`], M = [`id`], N = { __name: `FormField`, props: { as: { type: null, required: false }, name: { type: String, required: false }, errorPattern: { type: null, required: false }, label: { type: String, required: false }, description: { type: String, required: false }, help: { type: String, required: false }, error: { type: [Boolean, String], required: false, default: void 0 }, hint: { type: String, required: false }, size: { type: null, required: false }, required: { type: Boolean, required: false }, eagerValidation: { type: Boolean, required: false }, validateOnInputDelay: { type: Number, required: false }, orientation: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(N2) {
  let P = N2, F = i(), I = C(), L = y(`formField`, P), R = u(() => {
    var _a;
    return E({ extend: E(O), ...((_a = I.ui) == null ? void 0 : _a.formField) || {} })({ size: P.size, required: P.required, orientation: P.orientation });
  }), z = r(S, null), B = u(() => {
    var _a, _b;
    return P.error || ((_b = (_a = z == null ? void 0 : z.value) == null ? void 0 : _a.find((e2) => {
      var _a2;
      return e2.name === P.name || P.errorPattern && ((_a2 = e2.name) == null ? void 0 : _a2.match(P.errorPattern));
    })) == null ? void 0 : _b.message);
  }), V = g(o()), H = V.value, U = r(b, void 0);
  return n(V, () => {
    U && P.name && (U.value[P.name] = { id: V.value, pattern: P.errorPattern });
  }, { immediate: true }), d(x, V), d(w, u(() => ({ error: B.value, name: P.name, size: P.size, eagerValidation: P.eagerValidation, validateOnInputDelay: P.validateOnInputDelay, errorPattern: P.errorPattern, hint: P.hint, description: P.description, help: P.help, ariaId: H }))), (n2, r2) => {
    var _a;
    return f(), h(a(T), { as: N2.as, "data-orientation": N2.orientation, "data-slot": `root`, class: s(R.value.root({ class: [(_a = a(L)) == null ? void 0 : _a.root, P.class] })) }, { default: p(() => {
      var _a2, _b, _c, _d, _e, _f, _g, _h;
      return [c(`div`, { "data-slot": `wrapper`, class: s(R.value.wrapper({ class: (_a2 = a(L)) == null ? void 0 : _a2.wrapper })) }, [N2.label || F.label ? (f(), l(`div`, { key: 0, "data-slot": `labelWrapper`, class: s(R.value.labelWrapper({ class: (_b = a(L)) == null ? void 0 : _b.labelWrapper })) }, [e(a(D), { for: V.value, "data-slot": `label`, class: s(R.value.label({ class: (_c = a(L)) == null ? void 0 : _c.label })) }, { default: p(() => [_(n2.$slots, `label`, { label: N2.label }, () => [t(m(N2.label), 1)])]), _: 3 }, 8, [`for`, `class`]), N2.hint || F.hint ? (f(), l(`span`, { key: 0, id: `${a(H)}-hint`, "data-slot": `hint`, class: s(R.value.hint({ class: (_d = a(L)) == null ? void 0 : _d.hint })) }, [_(n2.$slots, `hint`, { hint: N2.hint }, () => [t(m(N2.hint), 1)])], 10, k)) : v(``, true)], 2)) : v(``, true), N2.description || F.description ? (f(), l(`p`, { key: 1, id: `${a(H)}-description`, "data-slot": `description`, class: s(R.value.description({ class: (_e = a(L)) == null ? void 0 : _e.description })) }, [_(n2.$slots, `description`, { description: N2.description }, () => [t(m(N2.description), 1)])], 10, A)) : v(``, true)], 2), c(`div`, { class: s([(N2.label || !!F.label || N2.description || !!F.description) && R.value.container({ class: (_f = a(L)) == null ? void 0 : _f.container })]) }, [_(n2.$slots, `default`, { error: B.value }), P.error !== false && (typeof B.value == `string` && B.value || F.error) ? (f(), l(`div`, { key: 0, id: `${a(H)}-error`, "data-slot": `error`, class: s(R.value.error({ class: (_g = a(L)) == null ? void 0 : _g.error })) }, [_(n2.$slots, `error`, { error: B.value }, () => [t(m(B.value), 1)])], 10, j)) : N2.help || F.help ? (f(), l(`div`, { key: 1, id: `${a(H)}-help`, "data-slot": `help`, class: s(R.value.help({ class: (_h = a(L)) == null ? void 0 : _h.help })) }, [_(n2.$slots, `help`, { help: N2.help }, () => [t(m(N2.help), 1)])], 10, M)) : v(``, true)], 2)];
    }), _: 3 }, 8, [`as`, `data-orientation`, `class`]);
  };
} };
export {
  N as t
};
