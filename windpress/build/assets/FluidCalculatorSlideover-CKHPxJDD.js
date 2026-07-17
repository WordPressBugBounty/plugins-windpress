import { $ as e, $n as t, Cn as n, D as r, E as i, Ft as a, Ht as o, Lt as s, Nt as c, On as l, Rt as u, Tn as d, Zn as f, _ as p, b as m, bt as h, ct as g, et as _, g as v, k as y, mt as b, o as x, qt as S, tr as C, tt as w, v as T, vn as E, wn as D, xt as O, y as k, z as A } from "./runtime-core.esm-bundler-Twwq1XF8.js";
import { C as j, w as M } from "./runtime-dom.esm-bundler-Owfape5M.js";
import { C as N, S as P, b as F, g as I, i as ee, y as L } from "./Tooltip-CPUUajce.js";
import { B as R, C as z, H as B, I as te, L as ne, M as re, N as V, O as H, P as U, S as ie, V as ae, _ as oe, b as se, g as ce, h as le, m as ue, p as de, t as fe, v as pe, x as me, y as W } from "./Button-DbU2pTtV.js";
import { _ as G, c as he, r as ge, v as _e, y as ve } from "./dist-Bw8ba7To.js";
import { b as ye, f as K, o as be, p as xe, r as Se, y as Ce } from "./dist-ChpmCc7n.js";
import { s as we } from "./DashboardSidebarToggle-DwmriNl0.js";
import { B as Te, H as Ee, I as De, O as Oe, U as ke, n as Ae, t as je } from "./namespaced-CFCft_Em.js";
import { n as Me, t as Ne } from "./clamp-CgcnoKpi.js";
import { n as Pe, r as Fe, t as Ie } from "./VisuallyHiddenInput-UWwfew4D.js";
import { t as Le } from "./Separator-orOTcb49.js";
import { t as Re } from "./Slideover-BcwYUYf1.js";
import { n as ze } from "./DropdownMenu-Ctj_cXp7.js";
import { t as Be } from "./Input-DpfLwGJa.js";
import { t as Ve } from "./virtualizer-DAD-ryu1.js";
import { t as He } from "./_plugin-vue_export-helper-BDNMzG2s.js";
function Ue(e2) {
  let t2 = P({ locale: E(`en`) });
  return v(() => e2?.value || t2.locale?.value || `en`);
}
var We = /* @__PURE__ */ new Map(), Ge = false;
try {
  Ge = new Intl.NumberFormat(`de-DE`, { signDisplay: `exceptZero` }).resolvedOptions().signDisplay === `exceptZero`;
} catch {
}
var q = false;
try {
  q = new Intl.NumberFormat(`de-DE`, { style: `unit`, unit: `degree` }).resolvedOptions().style === `unit`;
} catch {
}
var Ke = { degree: { narrow: { default: `\xB0`, "ja-JP": ` \u5EA6`, "zh-TW": `\u5EA6`, "sl-SI": ` \xB0` } } }, qe = class {
  constructor(e2, t2 = {}) {
    this.numberFormatter = Je(e2, t2), this.options = t2;
  }
  format(e2) {
    let t2 = ``;
    if (t2 = !Ge && this.options.signDisplay != null ? Ye(this.numberFormatter, this.options.signDisplay, e2) : this.numberFormatter.format(e2), this.options.style === `unit` && !q) {
      let { unit: e3, unitDisplay: n2 = `short`, locale: r2 } = this.resolvedOptions();
      if (!e3) return t2;
      let i2 = Ke[e3]?.[n2];
      t2 += i2[r2] || i2.default;
    }
    return t2;
  }
  formatToParts(e2) {
    return this.numberFormatter.formatToParts(e2);
  }
  formatRange(e2, t2) {
    if (typeof this.numberFormatter.formatRange == `function`) return this.numberFormatter.formatRange(e2, t2);
    if (t2 < e2) throw RangeError(`End date must be >= start date`);
    return `${this.format(e2)} \u2013 ${this.format(t2)}`;
  }
  formatRangeToParts(e2, t2) {
    if (typeof this.numberFormatter.formatRangeToParts == `function`) return this.numberFormatter.formatRangeToParts(e2, t2);
    if (t2 < e2) throw RangeError(`End date must be >= start date`);
    let n2 = this.numberFormatter.formatToParts(e2), r2 = this.numberFormatter.formatToParts(t2);
    return [...n2.map((e3) => ({ ...e3, source: `startRange` })), { type: `literal`, value: ` \u2013 `, source: `shared` }, ...r2.map((e3) => ({ ...e3, source: `endRange` }))];
  }
  resolvedOptions() {
    let e2 = this.numberFormatter.resolvedOptions();
    return !Ge && this.options.signDisplay != null && (e2 = { ...e2, signDisplay: this.options.signDisplay }), !q && this.options.style === `unit` && (e2 = { ...e2, style: `unit`, unit: this.options.unit, unitDisplay: this.options.unitDisplay }), e2;
  }
};
function Je(e2, t2 = {}) {
  let { numberingSystem: n2 } = t2;
  if (n2 && e2.includes(`-nu-`) && (e2.includes(`-u-`) || (e2 += `-u-`), e2 += `-nu-${n2}`), t2.style === `unit` && !q) {
    let { unit: e3, unitDisplay: n3 = `short` } = t2;
    if (!e3) throw Error(`unit option must be provided with style: "unit"`);
    if (!Ke[e3]?.[n3]) throw Error(`Unsupported unit ${e3} with unitDisplay = ${n3}`);
    t2 = { ...t2, style: `decimal` };
  }
  let r2 = e2 + (t2 ? Object.entries(t2).sort((e3, t3) => e3[0] < t3[0] ? -1 : 1).join() : ``);
  if (We.has(r2)) return We.get(r2);
  let i2 = new Intl.NumberFormat(e2, t2);
  return We.set(r2, i2), i2;
}
function Ye(e2, t2, n2) {
  if (t2 === `auto`) return e2.format(n2);
  if (t2 === `never`) return e2.format(Math.abs(n2));
  {
    let r2 = false;
    if (t2 === `always` ? r2 = n2 > 0 || Object.is(n2, 0) : t2 === `exceptZero` && (Object.is(n2, -0) || Object.is(n2, 0) ? n2 = Math.abs(n2) : r2 = n2 > 0), r2) {
      let t3 = e2.format(-n2), r3 = e2.format(n2), i2 = t3.replace(r3, ``).replace(/\u200e|\u061C/, ``);
      return [...i2].length !== 1 && console.warn(`@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case`), t3.replace(r3, `!!!`).replace(i2, `+`).replace(`!!!`, r3);
    } else return e2.format(n2);
  }
}
var Xe = RegExp(`^.*\\(.*\\).*$`), Ze = [`latn`, `arab`, `hanidec`, `deva`, `beng`, `fullwide`], Qe = class {
  constructor(e2, t2 = {}) {
    this.locale = e2, this.options = t2;
  }
  parse(e2) {
    return J(this.locale, this.options, e2).parse(e2);
  }
  isValidPartialNumber(e2, t2, n2) {
    return J(this.locale, this.options, e2).isValidPartialNumber(e2, t2, n2);
  }
  getNumberingSystem(e2) {
    return J(this.locale, this.options, e2).options.numberingSystem;
  }
}, $e = /* @__PURE__ */ new Map();
function J(e2, t2, n2) {
  let r2 = et(e2, t2);
  if (!e2.includes(`-nu-`) && !r2.isValidPartialNumber(n2)) {
    for (let i2 of Ze) if (i2 !== r2.options.numberingSystem) {
      let r3 = et(e2 + (e2.includes(`-u-`) ? `-nu-` : `-u-nu-`) + i2, t2);
      if (r3.isValidPartialNumber(n2)) return r3;
    }
  }
  return r2;
}
function et(e2, t2) {
  let n2 = e2 + (t2 ? Object.entries(t2).sort((e3, t3) => e3[0] < t3[0] ? -1 : 1).join() : ``), r2 = $e.get(n2);
  return r2 || (r2 = new tt(e2, t2), $e.set(n2, r2)), r2;
}
var tt = class {
  constructor(e2, t2 = {}) {
    this.locale = e2, t2.roundingIncrement !== 1 && t2.roundingIncrement != null && (t2.maximumFractionDigits == null && t2.minimumFractionDigits == null ? (t2.maximumFractionDigits = 0, t2.minimumFractionDigits = 0) : t2.maximumFractionDigits == null ? t2.maximumFractionDigits = t2.minimumFractionDigits : t2.minimumFractionDigits ?? (t2.minimumFractionDigits = t2.maximumFractionDigits)), this.formatter = new Intl.NumberFormat(e2, t2), this.options = this.formatter.resolvedOptions(), this.symbols = it(e2, this.formatter, this.options, t2), this.options.style === `percent` && ((this.options.minimumFractionDigits ?? 0) > 18 || (this.options.maximumFractionDigits ?? 0) > 18) && console.warn(`NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.`);
  }
  parse(e2) {
    let t2 = this.formatter.resolvedOptions().useGrouping, n2 = this.sanitize(e2);
    if (!t2 && this.symbols.group && n2.includes(this.symbols.group)) return NaN;
    if (this.symbols.group && (n2 = n2.replaceAll(this.symbols.group, ``)), this.symbols.decimal && (n2 = n2.replace(this.symbols.decimal, `.`)), this.symbols.minusSign && (n2 = n2.replace(this.symbols.minusSign, `-`)), n2 = n2.replace(this.symbols.numeral, this.symbols.index), this.options.style === `percent`) {
      let e3 = n2.indexOf(`-`);
      n2 = n2.replace(`-`, ``), n2 = n2.replace(`+`, ``);
      let t3 = n2.indexOf(`.`);
      t3 === -1 && (t3 = n2.length), n2 = n2.replace(`.`, ``), n2 = t3 - 2 == 0 ? `0.${n2}` : t3 - 2 == -1 ? `0.0${n2}` : t3 - 2 == -2 ? `0.00` : `${n2.slice(0, t3 - 2)}.${n2.slice(t3 - 2)}`, e3 > -1 && (n2 = `-${n2}`);
    }
    let r2 = n2 ? +n2 : NaN;
    if (isNaN(r2)) return NaN;
    if (this.options.style === `percent`) {
      let e3 = { ...this.options, style: `decimal`, minimumFractionDigits: Math.min((this.options.minimumFractionDigits ?? 0) + 2, 20), maximumFractionDigits: Math.min((this.options.maximumFractionDigits ?? 0) + 2, 20) };
      return new Qe(this.locale, e3).parse(new qe(this.locale, e3).format(r2));
    }
    return this.options.currencySign === `accounting` && Xe.test(e2) && (r2 = -1 * r2), r2;
  }
  sanitize(e2) {
    let t2 = this.formatter.resolvedOptions().useGrouping;
    return this.symbols.noNumeralUnits.length > 0 && this.symbols.noNumeralUnits.find((t3) => t3.unit === e2) ? this.symbols.noNumeralUnits.find((t3) => t3.unit === e2).value.toString() : (e2 = e2.replace(this.symbols.literals, ``), this.symbols.minusSign && (e2 = e2.replace(`-`, this.symbols.minusSign)), this.options.numberingSystem === `arab` && (this.symbols.decimal && (e2 = Y(e2, `,`, this.symbols.decimal), e2 = Y(e2, `\u060C`, this.symbols.decimal)), this.symbols.group && t2 && (e2 = Y(e2, `.`, this.symbols.group))), this.symbols.group === `\u2019` && e2.includes(`'`) && t2 && (e2 = Y(e2, `'`, this.symbols.group)), this.symbols.group === `'` && e2.includes(`\u2019`) && t2 && (e2 = Y(e2, `\u2019`, this.symbols.group)), this.options.locale === `fr-FR` && this.symbols.group && t2 && (e2 = Y(e2, ` `, this.symbols.group), e2 = Y(e2, /\u00A0/g, this.symbols.group)), e2);
  }
  isValidPartialNumber(e2, t2 = -1 / 0, n2 = 1 / 0) {
    let r2 = this.formatter.resolvedOptions().useGrouping;
    return e2 = this.sanitize(e2), this.symbols.minusSign && e2.startsWith(this.symbols.minusSign) && t2 < 0 ? e2 = e2.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e2.startsWith(this.symbols.plusSign) && n2 > 0 && (e2 = e2.slice(this.symbols.plusSign.length)), this.symbols.decimal && e2.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? false : (this.symbols.group && r2 && (e2 = Y(e2, this.symbols.group, ``)), e2 = e2.replace(this.symbols.numeral, ``), this.symbols.decimal && (e2 = e2.replace(this.symbols.decimal, ``)), e2.length === 0);
  }
}, nt = /* @__PURE__ */ new Set([`decimal`, `fraction`, `integer`, `minusSign`, `plusSign`, `group`]), rt = [0, 4, 2, 1, 11, 20, 3, 7, 100, 21, 0.1, 1.1];
function it(e2, t2, n2, r2) {
  let i2 = new Intl.NumberFormat(e2, { ...n2, minimumSignificantDigits: 1, maximumSignificantDigits: 21, roundingIncrement: 1, roundingPriority: `auto`, roundingMode: `halfExpand`, useGrouping: true }), a2 = i2.formatToParts(-10000.111), o2 = i2.formatToParts(10000.111), s2 = rt.map((e3) => i2.formatToParts(e3)), c2 = s2.map((e3, t3) => {
    let n3 = e3.find((e4) => e4.type === `unit`);
    return n3 && !e3.some((e4) => e4.type === `integer` || e4.type === `fraction`) ? { unit: n3.value, value: rt[t3] } : null;
  }).filter((e3) => !!e3), l2 = a2.find((e3) => e3.type === `minusSign`)?.value ?? `-`, u2 = o2.find((e3) => e3.type === `plusSign`)?.value;
  !u2 && (r2?.signDisplay === `exceptZero` || r2?.signDisplay === `always`) && (u2 = `+`);
  let d2 = new Intl.NumberFormat(e2, { ...n2, minimumFractionDigits: 2, maximumFractionDigits: 2 }).formatToParts(1e-3).find((e3) => e3.type === `decimal`)?.value, f2 = a2.find((e3) => e3.type === `group`)?.value, p2 = a2.filter((e3) => !nt.has(e3.type)).map((e3) => X(e3.value)), m2 = s2.flatMap((e3) => e3.filter((e4) => !nt.has(e4.type)).map((e4) => X(e4.value))), h2 = [.../* @__PURE__ */ new Set([...p2, ...m2])].sort((e3, t3) => t3.length - e3.length), g2 = h2.length === 0 ? RegExp(`\\p{White_Space}|\\p{Cf}`, `gu`) : RegExp(`${h2.join(`|`)}|\\p{White_Space}|\\p{Cf}`, `gu`), _2 = [...new Intl.NumberFormat(n2.locale, { useGrouping: false }).format(9876543210)].reverse(), v2 = new Map(_2.map((e3, t3) => [e3, t3])), y2 = RegExp(`[${_2.join(``)}]`, `g`);
  return { minusSign: l2, plusSign: u2, decimal: d2, group: f2, literals: g2, numeral: y2, numerals: _2, index: (e3) => String(v2.get(e3)), noNumeralUnits: c2 };
}
function Y(e2, t2, n2) {
  return e2.replaceAll ? e2.replaceAll(t2, n2) : e2.split(t2).join(n2);
}
function X(e2) {
  return e2.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
function Z(e2) {
  let { disabled: t2 } = e2, n2 = E(), r2 = ge(), i2 = () => window.clearTimeout(n2.value), a2 = (e3) => {
    i2(), !t2.value && (r2.trigger(), n2.value = window.setTimeout(() => {
      a2(60);
    }, e3));
  }, o2 = () => {
    a2(400);
  }, s2 = () => {
    i2();
  }, c2 = E(false), l2 = v(() => be(e2.target)), u2 = (e3) => {
    e3.button !== 0 || c2.value || (e3.preventDefault(), c2.value = true, o2());
  }, d2 = () => {
    c2.value = false, s2();
  };
  return he && (K(l2 || window, `pointerdown`, u2), K(window, `pointerup`, d2), K(window, `pointercancel`, d2)), { isPressed: c2, onTrigger: r2.on };
}
function at(e2, t2 = E({})) {
  return G(() => new qe(e2.value, t2.value));
}
function ot(e2, t2 = E({})) {
  return G(() => new Qe(e2.value, t2.value));
}
function Q(e2, t2, n2) {
  let r2 = e2 === `+` ? t2 + n2 : t2 - n2;
  if (t2 % 1 != 0 || n2 % 1 != 0) {
    let i2 = t2.toString().split(`.`), a2 = n2.toString().split(`.`), o2 = i2[1] && i2[1].length || 0, s2 = a2[1] && a2[1].length || 0, c2 = 10 ** Math.max(o2, s2);
    t2 = Math.round(t2 * c2), n2 = Math.round(n2 * c2), r2 = e2 === `+` ? t2 + n2 : t2 - n2, r2 /= c2;
  }
  return r2;
}
var [st, ct] = H(`NumberFieldRoot`), lt = y({ inheritAttrs: false, __name: `NumberFieldRoot`, props: { defaultValue: { type: Number, required: false, default: void 0 }, modelValue: { type: [Number, null], required: false }, min: { type: Number, required: false }, max: { type: Number, required: false }, step: { type: Number, required: false, default: 1 }, stepSnapping: { type: Boolean, required: false, default: true }, focusOnChange: { type: Boolean, required: false, default: true }, formatOptions: { type: null, required: false }, locale: { type: String, required: false }, disabled: { type: Boolean, required: false }, readonly: { type: Boolean, required: false }, disableWheelChange: { type: Boolean, required: false }, invertWheelChange: { type: Boolean, required: false }, id: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `div` }, name: { type: String, required: false }, required: { type: Boolean, required: false } }, emits: [`update:modelValue`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, { disabled: i2, readonly: a2, disableWheelChange: o2, invertWheelChange: s2, min: c2, max: u2, step: f2, stepSnapping: p2, formatOptions: m2, id: h2, locale: g2 } = d(n2), y2 = ye(n2, `modelValue`, r2, { defaultValue: n2.defaultValue, passive: n2.modelValue === void 0 }), { primitiveElement: x2, currentElement: C2 } = Pe(), w2 = Ue(g2), D2 = Fe(C2), A2 = E(), j2 = v(() => N(y2.value) || isNaN(y2.value) ? false : P2(`decrease`, y2.value) >= y2.value), M2 = v(() => N(y2.value) || isNaN(y2.value) ? false : P2(`increase`, y2.value) <= y2.value);
  function P2(e3, t3, n3 = 1) {
    let r3 = f2.value ?? 1, i3 = e3 === `increase` ? `+` : `-`, a3;
    if (p2.value && !isNaN(r3)) {
      let o3 = Me(t3, c2.value, u2.value, r3);
      if (o3 === t3) a3 = Q(i3, t3, r3 * n3);
      else {
        let s3 = e3 === `increase` ? o3 > t3 ? o3 : Q(`+`, o3, r3) : o3 < t3 ? o3 : Q(`-`, o3, r3);
        a3 = n3 > 1 ? Q(i3, s3, r3 * (n3 - 1)) : s3;
      }
    } else a3 = Q(i3, t3, r3 * n3);
    return U2(a3);
  }
  function F2(e3, t3 = 1) {
    if (n2.focusOnChange && A2.value?.focus(), n2.disabled || n2.readonly) return;
    let r3 = B2.parse(A2.value?.value ?? ``);
    if (isNaN(r3)) {
      y2.value = U2(c2.value ?? 0);
      return;
    }
    y2.value = P2(e3, r3, t3);
  }
  function I2(e3 = 1) {
    F2(`increase`, e3);
  }
  function ee2(e3 = 1) {
    F2(`decrease`, e3);
  }
  function L2(e3) {
    e3 === `min` && c2.value !== void 0 ? y2.value = U2(c2.value) : e3 === `max` && u2.value !== void 0 && (y2.value = U2(u2.value));
  }
  let R2 = at(w2, m2), B2 = ot(w2, m2), te2 = v(() => R2.resolvedOptions().maximumFractionDigits > 0 ? `decimal` : `numeric`), ne2 = at(w2, m2), re2 = v(() => N(y2.value) || isNaN(y2.value) ? `` : ne2.format(y2.value));
  function V2(e3) {
    return B2.isValidPartialNumber(e3, c2.value, u2.value);
  }
  function H2(e3) {
    A2.value && (A2.value.value = e3);
  }
  function U2(e3) {
    let t3;
    return t3 = f2.value === void 0 || isNaN(f2.value) || !p2.value ? Ne(e3, c2.value, u2.value) : Me(e3, c2.value, u2.value, f2.value), t3 = B2.parse(R2.format(t3)), t3;
  }
  function ie2(e3) {
    let t3 = B2.parse(e3);
    return y2.value = isNaN(t3) ? void 0 : U2(t3), e3.length ? H2(re2.value) : H2(e3);
  }
  return ct({ modelValue: y2, handleDecrease: ee2, handleIncrease: I2, handleMinMaxValue: L2, inputMode: te2, inputEl: A2, onInputElement: (e3) => A2.value = e3, textValue: re2, readonly: a2, validate: V2, applyInputValue: ie2, disabled: i2, disableWheelChange: o2, invertWheelChange: s2, max: u2, min: c2, isDecreaseDisabled: j2, isIncreaseDisabled: M2, id: h2 }), (e3, t3) => (b(), T(l(z), _(e3.$attrs, { ref_key: `primitiveElement`, ref: x2, role: `group`, as: e3.as, "as-child": e3.asChild, "data-disabled": l(i2) ? `` : void 0, "data-readonly": l(a2) ? `` : void 0 }), { default: S(() => [O(e3.$slots, `default`, { modelValue: l(y2), textValue: re2.value, readonly: l(a2) }), l(D2) && e3.name ? (b(), T(l(Ie), { key: 0, type: `text`, value: l(y2), name: e3.name, disabled: l(i2), readonly: l(a2), required: e3.required }, null, 8, [`value`, `name`, `disabled`, `readonly`, `required`])) : k(`v-if`, true)]), _: 3 }, 16, [`as`, `as-child`, `data-disabled`, `data-readonly`]));
} }), ut = y({ __name: `NumberFieldDecrement`, props: { disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2, n2 = st(), r2 = v(() => n2.disabled?.value || n2.readonly.value || t2.disabled || n2.isDecreaseDisabled.value), { primitiveElement: i2, currentElement: a2 } = Pe(), { isPressed: o2, onTrigger: s2 } = Z({ target: a2, disabled: r2 });
  return s2(() => {
    n2.handleDecrease();
  }), (e3, n3) => (b(), T(l(z), _(t2, { ref_key: `primitiveElement`, ref: i2, tabindex: `-1`, "aria-label": `Decrease`, type: e3.as === `button` ? `button` : void 0, style: { userSelect: l(o2) ? `none` : void 0 }, disabled: r2.value ? `` : void 0, "data-disabled": r2.value ? `` : void 0, "data-pressed": l(o2) ? `true` : void 0, onContextmenu: n3[0] || (n3[0] = M(() => {
  }, [`prevent`])) }), { default: S(() => [O(e3.$slots, `default`)]), _: 3 }, 16, [`type`, `style`, `disabled`, `data-disabled`, `data-pressed`]));
} }), dt = y({ __name: `NumberFieldIncrement`, props: { disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2, n2 = st(), r2 = v(() => n2.disabled?.value || n2.readonly.value || t2.disabled || n2.isIncreaseDisabled.value), { primitiveElement: i2, currentElement: a2 } = Pe(), { isPressed: o2, onTrigger: s2 } = Z({ target: a2, disabled: r2 });
  return s2(() => {
    n2.handleIncrease();
  }), (e3, n3) => (b(), T(l(z), _(t2, { ref_key: `primitiveElement`, ref: i2, tabindex: `-1`, "aria-label": `Increase`, type: e3.as === `button` ? `button` : void 0, style: { userSelect: l(o2) ? `none` : void 0 }, disabled: r2.value ? `` : void 0, "data-disabled": r2.value ? `` : void 0, "data-pressed": l(o2) ? `true` : void 0, onContextmenu: n3[0] || (n3[0] = M(() => {
  }, [`prevent`])) }), { default: S(() => [O(e3.$slots, `default`)]), _: 3 }, 16, [`type`, `style`, `disabled`, `data-disabled`, `data-pressed`]));
} }), ft = y({ __name: `NumberFieldInput`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `input` } }, setup(e2) {
  let t2 = e2, { primitiveElement: n2, currentElement: r2 } = Pe(), i2 = st(), a2 = De(), { isComposing: s2, handleCompositionStart: c2, handleCompositionEnd: u2 } = Te();
  function d2(e3) {
    if (!(s2.value || e3.isComposing)) switch (e3.key) {
      case a2.ARROW_UP:
        e3.preventDefault(), i2.handleIncrease();
        break;
      case a2.ARROW_DOWN:
        e3.preventDefault(), i2.handleDecrease();
        break;
      case a2.PAGE_UP:
        e3.preventDefault(), i2.handleIncrease(10);
        break;
      case a2.PAGE_DOWN:
        e3.preventDefault(), i2.handleDecrease(10);
        break;
      case a2.HOME:
        e3.preventDefault(), i2.handleMinMaxValue(`min`);
        break;
      case a2.END:
        e3.preventDefault(), i2.handleMinMaxValue(`max`);
        break;
      case a2.ENTER:
        i2.applyInputValue(e3.target?.value);
        break;
    }
  }
  function f2(e3) {
    i2.disableWheelChange.value || e3.target === ke() && (Math.abs(e3.deltaY) <= Math.abs(e3.deltaX) || (e3.preventDefault(), e3.deltaY > 0 ? i2.invertWheelChange.value ? i2.handleDecrease() : i2.handleIncrease() : e3.deltaY < 0 && (i2.invertWheelChange.value ? i2.handleIncrease() : i2.handleDecrease())));
  }
  g(() => {
    i2.onInputElement(r2.value);
  });
  let p2 = E(i2.textValue.value);
  o(() => i2.textValue.value, () => {
    p2.value = i2.textValue.value;
  }, { immediate: true, deep: true });
  function m2() {
    requestAnimationFrame(() => {
      p2.value = i2.textValue.value;
    });
  }
  return (e3, r3) => (b(), T(l(z), _(t2, { id: l(i2).id.value, ref_key: `primitiveElement`, ref: n2, value: p2.value, role: `spinbutton`, type: `text`, tabindex: `0`, inputmode: l(i2).inputMode.value, disabled: l(i2).disabled.value ? `` : void 0, "data-disabled": l(i2).disabled.value ? `` : void 0, readonly: l(i2).readonly.value ? `` : void 0, "data-readonly": l(i2).readonly.value ? `` : void 0, autocomplete: `off`, autocorrect: `off`, spellcheck: `false`, "aria-roledescription": `Number field`, "aria-valuenow": l(i2).modelValue.value, "aria-valuemin": l(i2).min.value, "aria-valuemax": l(i2).max.value, onKeydown: d2, onWheel: f2, onBeforeinput: r3[0] || (r3[0] = (e4) => {
    if (e4.isComposing) return;
    let t3 = e4.target, n3 = t3.value.slice(0, t3.selectionStart ?? void 0) + (e4.data ?? ``) + t3.value.slice(t3.selectionEnd ?? void 0);
    l(i2).validate(n3) || e4.preventDefault();
  }), onInput: r3[1] || (r3[1] = (e4) => {
    let t3 = e4.target;
    p2.value = t3.value;
  }), onChange: m2, onBlur: r3[2] || (r3[2] = (e4) => l(i2).applyInputValue(e4.target?.value)), onCompositionstart: l(c2), onCompositionend: l(u2) }), { default: S(() => [O(e3.$slots, `default`)]), _: 3 }, 16, [`id`, `value`, `inputmode`, `disabled`, `data-disabled`, `readonly`, `data-readonly`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `onCompositionstart`, `onCompositionend`]));
} }), [pt, $] = H(`TagsInputRoot`), mt = y({ __name: `TagsInputRoot`, props: { modelValue: { type: [Array, null], required: false }, defaultValue: { type: Array, required: false, default: () => [] }, addOnPaste: { type: Boolean, required: false }, addOnTab: { type: Boolean, required: false }, addOnBlur: { type: Boolean, required: false }, duplicate: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, delimiter: { type: null, required: false, default: `,` }, dir: { type: String, required: false }, max: { type: Number, required: false, default: 0 }, id: { type: String, required: false }, convertValue: { type: Function, required: false }, displayValue: { type: Function, required: false, default: (e2) => e2.toString() }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, name: { type: String, required: false }, required: { type: Boolean, required: false } }, emits: [`update:modelValue`, `invalid`, `addTag`, `removeTag`], setup(e2, { emit: t2 }) {
  let n2 = e2, i2 = t2, { addOnPaste: a2, disabled: o2, delimiter: s2, max: c2, id: u2, dir: f2, addOnBlur: p2, addOnTab: m2 } = d(n2), h2 = F(f2), g2 = ye(n2, `modelValue`, i2, { defaultValue: n2.defaultValue, passive: true, deep: true }), { forwardRef: _2, currentElement: y2 } = L(), { focused: x2 } = xe(y2), C2 = Fe(y2), { getItems: w2, CollectionSlot: D2 } = Oe({ isProvider: true }), A2 = E(), j2 = E(false), M2 = v(() => Array.isArray(g2.value) ? [...g2.value] : []);
  function N2(e3) {
    if (e3 !== -1) {
      let t3 = w2().filter((e4) => e4.ref.dataset.disabled !== ``);
      g2.value = g2.value.filter((t4, n3) => n3 !== e3), i2(`removeTag`, t3[e3].value);
    }
  }
  return $({ modelValue: g2, onAddValue: (e3) => {
    let t3 = [...M2.value], r2 = t3.length > 0 && typeof t3[0] == `object`, a3 = t3.length > 0 && typeof n2.defaultValue[0] == `object`;
    if ((r2 || a3) && typeof n2.convertValue != `function`) throw Error("You must provide a `convertValue` function when using objects as values.");
    let o3 = n2.convertValue ? n2.convertValue(e3) : e3;
    if (t3.length >= c2.value && c2.value) return i2(`invalid`, o3), false;
    if (n2.duplicate) return g2.value = [...t3, o3], i2(`addTag`, o3), true;
    if (t3.includes(o3)) j2.value = true;
    else return g2.value = [...t3, o3], i2(`addTag`, o3), true;
    return i2(`invalid`, o3), false;
  }, onRemoveValue: N2, onInputKeydown: (e3) => {
    if (e3.isComposing) return;
    let t3 = e3.target, n3 = w2().map((e4) => e4.ref).filter((e4) => e4.dataset.disabled !== ``);
    if (!n3.length) return;
    let r2 = n3.at(-1);
    switch (e3.key) {
      case `Delete`:
      case `Backspace`:
        if (t3.selectionStart !== 0 || t3.selectionEnd !== 0) break;
        if (A2.value) {
          let t4 = n3.findIndex((e4) => e4 === A2.value);
          N2(t4), A2.value = A2.value === r2 ? n3.at(t4 - 1) : n3.at(t4 + 1), e3.preventDefault();
        } else e3.key === `Backspace` && (A2.value = r2, e3.preventDefault());
        break;
      case `Home`:
      case `End`:
      case `ArrowRight`:
      case `ArrowLeft`: {
        let i3 = e3.key === `ArrowRight` && h2.value === `ltr` || e3.key === `ArrowLeft` && h2.value === `rtl`, a3 = !i3;
        if (t3.selectionStart !== 0 || t3.selectionEnd !== 0) break;
        if (a3 && !A2.value) A2.value = r2, e3.preventDefault();
        else if (i3 && r2 && A2.value === r2) A2.value = void 0, e3.preventDefault();
        else if (A2.value) {
          let t4 = Ee(e3, A2.value, void 0, { itemsArray: n3, loop: false, dir: h2.value });
          t4 && (A2.value = t4), e3.preventDefault();
        }
        break;
      }
      case `ArrowUp`:
      case `ArrowDown`:
        A2.value && e3.preventDefault();
        break;
      default:
        A2.value = void 0;
    }
  }, selectedElement: A2, isInvalidInput: j2, addOnPaste: a2, addOnBlur: p2, addOnTab: m2, dir: h2, disabled: o2, delimiter: s2, max: c2, id: u2, displayValue: n2.displayValue }), (e3, t3) => (b(), T(l(D2), null, { default: S(() => [r(l(z), { ref: l(_2), dir: l(h2), as: e3.as, "as-child": e3.asChild, "data-invalid": j2.value ? `` : void 0, "data-disabled": l(o2) ? `` : void 0, "data-focused": l(x2) ? `` : void 0 }, { default: S(() => [O(e3.$slots, `default`, { modelValue: l(g2) }), l(C2) && e3.name ? (b(), T(l(Ie), { key: 0, name: e3.name, value: l(g2), required: e3.required, disabled: l(o2) }, null, 8, [`name`, `value`, `required`, `disabled`])) : k(`v-if`, true)]), _: 3 }, 8, [`dir`, `as`, `as-child`, `data-invalid`, `data-disabled`, `data-focused`])]), _: 3 }));
} }), ht = y({ __name: `TagsInputInput`, props: { placeholder: { type: String, required: false }, autoFocus: { type: Boolean, required: false }, maxLength: { type: Number, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `input` } }, setup(e2) {
  let t2 = e2, n2 = pt(), { forwardRef: r2, currentElement: i2 } = L();
  function a2(e3) {
    if (n2.selectedElement.value = void 0, !n2.addOnBlur.value) return;
    let t3 = e3.target, r3 = e3.relatedTarget, i3 = t3.getAttribute(`aria-controls`);
    i3 && r3?.closest(`#${CSS.escape(i3)}`) || t3.value && n2.onAddValue(t3.value) && (t3.value = ``);
  }
  function o2(e3) {
    n2.addOnTab.value && d2(e3);
  }
  let { isComposing: s2, handleCompositionStart: c2, handleCompositionEnd: u2 } = Te();
  async function d2(e3) {
    if (s2.value || (await w(), e3.defaultPrevented)) return;
    let t3 = e3.target;
    t3.value && (n2.onAddValue(t3.value) && (t3.value = ``), e3.preventDefault());
  }
  function f2(e3) {
    if (s2.value || (n2.isInvalidInput.value = false, e3.data === null)) return;
    let t3 = n2.delimiter.value;
    if (t3 === e3.data || t3 instanceof RegExp && t3.test(e3.data)) {
      let r3 = e3.target;
      if (r3.value = r3.value.replace(t3, ``), r3.value.trim() === ``) {
        r3.value = ``;
        return;
      }
      n2.onAddValue(r3.value) && (r3.value = ``);
    }
  }
  function p2(e3) {
    s2.value || n2.onInputKeydown(e3);
  }
  function m2(e3) {
    if (n2.addOnPaste.value) {
      e3.preventDefault();
      let t3 = e3.clipboardData;
      if (!t3) return;
      let r3 = t3.getData(`text`);
      n2.delimiter.value ? r3.split(n2.delimiter.value).forEach((e4) => {
        n2.onAddValue(e4);
      }) : n2.onAddValue(r3);
    }
  }
  return g(() => {
    let e3 = i2.value.nodeName === `INPUT` ? i2.value : i2.value.querySelector(`input`);
    e3 && setTimeout(() => {
      t2.autoFocus && e3?.focus();
    }, 1);
  }), (e3, t3) => (b(), T(l(z), { id: l(n2).id?.value, ref: l(r2), type: `text`, autocomplete: `off`, autocorrect: `off`, autocapitalize: `off`, as: e3.as, "as-child": e3.asChild, maxlength: e3.maxLength, placeholder: e3.placeholder, disabled: l(n2).disabled.value, "data-invalid": l(n2).isInvalidInput.value ? `` : void 0, onInput: f2, onKeydown: [j(d2, [`enter`]), j(o2, [`tab`]), p2], onBlur: a2, onCompositionstart: l(c2), onCompositionend: l(u2), onPaste: m2 }, { default: S(() => [O(e3.$slots, `default`)]), _: 3 }, 8, [`id`, `as`, `as-child`, `maxlength`, `placeholder`, `disabled`, `data-invalid`, `onCompositionstart`, `onCompositionend`]));
} }), [gt, _t] = H(`TagsInputItem`), vt = y({ __name: `TagsInputItem`, props: { value: { type: null, required: true }, disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2, { value: n2 } = d(t2), i2 = pt(), { forwardRef: a2, currentElement: o2 } = L(), { CollectionItem: s2 } = Oe(), c2 = v(() => i2.selectedElement.value === o2.value), u2 = v(() => t2.disabled || i2.disabled.value), f2 = _t({ value: n2, isSelected: c2, disabled: u2, textId: ``, displayValue: v(() => i2.displayValue(n2.value)) });
  return (e3, t3) => (b(), T(l(s2), { value: l(n2) }, { default: S(() => [r(l(z), { ref: l(a2), as: e3.as, "as-child": e3.asChild, "aria-labelledby": l(f2).textId, "aria-current": c2.value, "data-disabled": u2.value ? `` : void 0, "data-state": c2.value ? `active` : `inactive` }, { default: S(() => [O(e3.$slots, `default`)]), _: 3 }, 8, [`as`, `as-child`, `aria-labelledby`, `aria-current`, `data-disabled`, `data-state`])]), _: 3 }, 8, [`value`]));
} }), yt = y({ __name: `TagsInputItemDelete`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2;
  L();
  let n2 = pt(), r2 = gt(), i2 = v(() => r2.disabled?.value || n2.disabled.value);
  function a2() {
    if (i2.value) return;
    let e3 = n2.modelValue.value.findIndex((e4) => R(e4, r2.value.value));
    n2.onRemoveValue(e3);
  }
  return (e3, n3) => (b(), T(l(z), _({ tabindex: `-1` }, t2, { "aria-labelledby": l(r2).textId, "aria-current": l(r2).isSelected.value, "data-state": l(r2).isSelected.value ? `active` : `inactive`, "data-disabled": i2.value ? `` : void 0, type: e3.as === `button` ? `button` : void 0, onClick: a2 }), { default: S(() => [O(e3.$slots, `default`)]), _: 3 }, 16, [`aria-labelledby`, `aria-current`, `data-state`, `data-disabled`, `type`]));
} }), bt = y({ __name: `TagsInputItemText`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `span` } }, setup(e2) {
  let t2 = e2, n2 = gt();
  return L(), n2.textId || (n2.textId = I(void 0, `reka-tags-input-item-text`)), (e3, r2) => (b(), T(l(z), _(t2, { id: l(n2).textId }), { default: S(() => [O(e3.$slots, `default`, {}, () => [i(C(l(n2).displayValue.value), 1)])]), _: 3 }, 16, [`id`]));
} }), xt = { slots: { root: `relative inline-flex items-center`, base: [`w-full rounded-md border-0 placeholder:text-dimmed disabled:cursor-not-allowed disabled:opacity-75`, `transition-colors`], increment: `absolute flex items-center`, decrement: `absolute flex items-center` }, variants: { fieldGroup: { horizontal: { root: `group has-focus-visible:z-[1]`, base: `group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none` }, vertical: { root: `group has-focus-visible:z-[1]`, base: `group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none` } }, color: { primary: ``, secondary: ``, success: ``, info: ``, warning: ``, error: ``, neutral: `` }, size: { xs: `px-2 py-1 text-sm/4 gap-1`, sm: `px-2.5 py-1.5 text-sm/4 gap-1.5`, md: `px-2.5 py-1.5 text-base/5 gap-1.5`, lg: `px-3 py-2 text-base/5 gap-2`, xl: `px-3 py-2 text-base gap-2` }, variant: { outline: `text-highlighted bg-default ring ring-inset ring-accented`, soft: `text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50`, subtle: `text-highlighted bg-elevated ring ring-inset ring-accented`, ghost: `text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent`, none: `text-highlighted bg-transparent focus:outline-none` }, disabled: { true: { increment: `opacity-75 cursor-not-allowed`, decrement: `opacity-75 cursor-not-allowed` } }, orientation: { horizontal: { base: `text-center`, increment: `inset-y-0 end-0 pe-1`, decrement: `inset-y-0 start-0 ps-1` }, vertical: { increment: `top-0 end-0 pe-1 [&>button]:py-0 scale-80`, decrement: `bottom-0 end-0 pe-1 [&>button]:py-0 scale-80` } }, highlight: { true: `` }, fixed: { false: `` }, increment: { false: `` }, decrement: { false: `` } }, compoundVariants: [{ color: `primary`, variant: [`outline`, `subtle`], class: `outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary` }, { color: `secondary`, variant: [`outline`, `subtle`], class: `outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary` }, { color: `success`, variant: [`outline`, `subtle`], class: `outline-success/25 focus-visible:outline-3 focus-visible:ring-success` }, { color: `info`, variant: [`outline`, `subtle`], class: `outline-info/25 focus-visible:outline-3 focus-visible:ring-info` }, { color: `warning`, variant: [`outline`, `subtle`], class: `outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning` }, { color: `error`, variant: [`outline`, `subtle`], class: `outline-error/25 focus-visible:outline-3 focus-visible:ring-error` }, { color: `primary`, variant: [`soft`, `ghost`], class: `outline-primary/25 focus-visible:outline-3` }, { color: `secondary`, variant: [`soft`, `ghost`], class: `outline-secondary/25 focus-visible:outline-3` }, { color: `success`, variant: [`soft`, `ghost`], class: `outline-success/25 focus-visible:outline-3` }, { color: `info`, variant: [`soft`, `ghost`], class: `outline-info/25 focus-visible:outline-3` }, { color: `warning`, variant: [`soft`, `ghost`], class: `outline-warning/25 focus-visible:outline-3` }, { color: `error`, variant: [`soft`, `ghost`], class: `outline-error/25 focus-visible:outline-3` }, { color: `primary`, highlight: true, class: `ring ring-inset ring-primary` }, { color: `secondary`, highlight: true, class: `ring ring-inset ring-secondary` }, { color: `success`, highlight: true, class: `ring ring-inset ring-success` }, { color: `info`, highlight: true, class: `ring ring-inset ring-info` }, { color: `warning`, highlight: true, class: `ring ring-inset ring-warning` }, { color: `error`, highlight: true, class: `ring ring-inset ring-error` }, { color: `neutral`, variant: [`outline`, `subtle`], class: `outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted` }, { color: `neutral`, variant: [`soft`, `ghost`], class: `outline-inverted/25 focus-visible:outline-3` }, { color: `neutral`, highlight: true, class: `ring ring-inset ring-inverted` }, { orientation: `horizontal`, decrement: false, class: `text-start` }, { decrement: true, size: `xs`, class: `ps-7` }, { decrement: true, size: `sm`, class: `ps-8` }, { decrement: true, size: `md`, class: `ps-9` }, { decrement: true, size: `lg`, class: `ps-10` }, { decrement: true, size: `xl`, class: `ps-11` }, { increment: true, size: `xs`, class: `pe-7` }, { increment: true, size: `sm`, class: `pe-8` }, { increment: true, size: `md`, class: `pe-9` }, { increment: true, size: `lg`, class: `pe-10` }, { increment: true, size: `xl`, class: `pe-11` }, { fixed: false, size: `xs`, class: `md:text-xs` }, { fixed: false, size: `sm`, class: `md:text-xs` }, { fixed: false, size: `md`, class: `md:text-sm` }, { fixed: false, size: `lg`, class: `md:text-sm` }], defaultVariants: { size: `md`, color: `primary`, variant: `outline` } }, St = Object.assign({ inheritAttrs: false }, { __name: `InputNumber`, props: { as: { type: null, required: false }, placeholder: { type: String, required: false }, color: { type: null, required: false }, variant: { type: null, required: false }, size: { type: null, required: false }, highlight: { type: Boolean, required: false }, fixed: { type: Boolean, required: false }, orientation: { type: null, required: false, default: `horizontal` }, increment: { type: [Boolean, Object], required: false, default: true }, incrementIcon: { type: null, required: false }, incrementDisabled: { type: Boolean, required: false }, decrement: { type: [Boolean, Object], required: false, default: true }, decrementIcon: { type: null, required: false }, decrementDisabled: { type: Boolean, required: false }, autofocus: { type: Boolean, required: false }, autofocusDelay: { type: Number, required: false }, defaultValue: { type: null, required: false }, modelValue: { type: null, required: false }, modelModifiers: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, min: { type: Number, required: false }, max: { type: Number, required: false }, step: { type: Number, required: false }, stepSnapping: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, required: { type: Boolean, required: false }, id: { type: String, required: false }, name: { type: String, required: false }, formatOptions: { type: null, required: false }, disableWheelChange: { type: Boolean, required: false }, invertWheelChange: { type: Boolean, required: false }, readonly: { type: Boolean, required: false }, focusOnChange: { type: Boolean, required: false }, locale: { type: String, required: false } }, emits: [`update:modelValue`, `blur`, `change`], setup(e2, { expose: t2, emit: n2 }) {
  let i2 = e2, a2 = n2, o2 = ie(`inputNumber`, i2), s2 = ye(o2, `modelValue`, a2, { defaultValue: o2.defaultValue }), { t: c2 } = we(), d2 = B(), p2 = me(ve(o2, `as`, `stepSnapping`, `formatOptions`, `disableWheelChange`, `invertWheelChange`, `required`, `readonly`, `focusOnChange`, `locale`), a2), { emitFormBlur: h2, emitFormFocus: y2, emitFormChange: x2, emitFormInput: C2, id: w2, color: E2, size: A2, name: j2, highlight: M2, disabled: N2, ariaAttrs: P2 } = de(i2), { orientation: F2, size: I2 } = le(i2), ee2 = v(() => I2.value || A2.value), L2 = v(() => se({ extend: xt, ...d2.ui?.inputNumber || {} })({ color: E2.value ?? o2.color, variant: o2.variant, size: ee2.value ?? o2.size, highlight: M2.value ?? o2.highlight, fixed: o2.fixed, orientation: o2.orientation, fieldGroup: F2.value, increment: o2.orientation === `vertical` ? !!o2.increment || !!o2.decrement : !!o2.increment, decrement: o2.orientation !== `vertical` && !!o2.decrement })), R2 = v(() => o2.incrementIcon || (o2.orientation === `horizontal` ? d2.ui.icons.plus : d2.ui.icons.chevronUp)), z2 = v(() => o2.decrementIcon || (o2.orientation === `horizontal` ? d2.ui.icons.minus : d2.ui.icons.chevronDown)), te2 = u(`inputRef`);
  function ne2(e3) {
    o2.modelModifiers?.optional && (s2.value = e3 ?? (e3 = void 0));
    let t3 = new Event(`change`, { target: { value: e3 } });
    a2(`change`, t3), x2(), C2();
  }
  function re2(e3) {
    h2(), a2(`blur`, e3);
  }
  function V2() {
    o2.autofocus && te2.value?.$el?.focus();
  }
  return g(() => {
    setTimeout(() => {
      V2();
    }, o2.autofocusDelay);
  }), t2({ inputRef: D(() => te2.value?.$el) }), (e3, t3) => (b(), T(l(lt), _(l(p2), { id: l(w2), "default-value": l(o2).defaultValue, "model-value": l(s2), min: l(o2).min, max: l(o2).max, step: l(o2).step, "data-slot": e3.$attrs[`data-slot`] ?? `root`, class: L2.value.root({ class: [l(o2).ui?.root, l(o2).class] }), name: l(j2), disabled: l(N2), "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => ne2(e4)) }), { default: S(() => [r(l(ft), _({ ...e3.$attrs, ...l(P2) }, { ref_key: `inputRef`, ref: te2, placeholder: l(o2).placeholder, required: l(o2).required, "data-slot": `base`, class: L2.value.base({ class: l(o2).ui?.base }), onBlur: re2, onFocus: l(y2) }), null, 16, [`placeholder`, `required`, `class`, `onFocus`]), l(o2).increment ? (b(), m(`div`, { key: 0, "data-slot": `increment`, class: f(L2.value.increment({ class: l(o2).ui?.increment })) }, [r(l(dt), { "as-child": ``, disabled: l(N2) || l(o2).incrementDisabled }, { default: S(() => [O(e3.$slots, `increment`, {}, () => [r(fe, _({ icon: R2.value, color: l(E2), size: ee2.value, variant: `link`, "aria-label": l(c2)(`inputNumber.increment`) }, typeof l(o2).increment == `object` ? l(o2).increment : void 0), null, 16, [`icon`, `color`, `size`, `aria-label`])])]), _: 3 }, 8, [`disabled`])], 2)) : k(``, true), l(o2).decrement ? (b(), m(`div`, { key: 1, "data-slot": `decrement`, class: f(L2.value.decrement({ class: l(o2).ui?.decrement })) }, [r(l(ut), { "as-child": ``, disabled: l(N2) || l(o2).decrementDisabled }, { default: S(() => [O(e3.$slots, `decrement`, {}, () => [r(fe, _({ icon: z2.value, color: l(E2), size: ee2.value, variant: `link`, "aria-label": l(c2)(`inputNumber.decrement`) }, typeof l(o2).decrement == `object` ? l(o2).decrement : void 0), null, 16, [`icon`, `color`, `size`, `aria-label`])])]), _: 3 }, 8, [`disabled`])], 2)) : k(``, true)]), _: 3 }, 16, [`id`, `default-value`, `model-value`, `min`, `max`, `step`, `data-slot`, `class`, `name`, `disabled`]));
} }), Ct = { slots: { root: `relative inline-flex items-center`, base: [`rounded-md`, `transition-colors`], leading: `absolute inset-y-0 start-0 flex items-center`, leadingIcon: `shrink-0 text-dimmed`, leadingAvatar: `shrink-0`, leadingAvatarSize: ``, trailing: `group absolute inset-y-0 end-0 flex items-center disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none`, trailingIcon: `shrink-0 text-dimmed`, trailingClear: `p-0`, arrow: `fill-bg stroke-default`, content: `max-h-[min(15rem,var(--reka-combobox-content-available-height,15rem))] w-(--reka-combobox-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-combobox-content-transform-origin) pointer-events-auto flex flex-col`, viewport: `relative scroll-py-1 overflow-y-auto flex-1`, group: `p-1 isolate`, empty: `text-center text-muted`, label: `font-semibold text-highlighted`, separator: `-mx-1 my-1 h-px bg-border`, item: [`group relative w-full flex items-start gap-1.5 p-1.5 text-sm select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50`, `transition-colors before:transition-colors`], itemLeadingIcon: [`shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default`, `transition-colors`], itemLeadingAvatar: `shrink-0`, itemLeadingAvatarSize: ``, itemLeadingChip: `shrink-0`, itemLeadingChipSize: ``, itemTrailing: `ms-auto inline-flex gap-1.5 items-center`, itemTrailingIcon: `shrink-0`, itemWrapper: `flex-1 flex flex-col min-w-0`, itemLabel: `truncate`, itemDescription: `truncate text-muted`, tagsItem: `px-1.5 py-0.5 rounded-sm font-medium inline-flex items-center gap-0.5 ring ring-inset ring-accented bg-elevated text-default data-disabled:cursor-not-allowed data-disabled:opacity-75`, tagsItemText: `truncate`, tagsItemDelete: [`inline-flex items-center rounded-xs text-dimmed hover:text-default hover:bg-accented/75 disabled:pointer-events-none`, `transition-colors`], tagsItemDeleteIcon: `shrink-0`, tagsInput: `flex-1 border-0 bg-transparent placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75` }, variants: { fieldGroup: { horizontal: { root: `group has-focus-visible:z-[1]`, base: `group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none` }, vertical: { root: `group has-focus-visible:z-[1]`, base: `group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none` } }, size: { xs: { base: `px-2 py-1 text-sm/4 gap-1`, leading: `ps-2`, trailing: `pe-2`, leadingIcon: `size-4`, leadingAvatarSize: `3xs`, trailingIcon: `size-4`, label: `p-1 text-[10px]/3 gap-1`, item: `p-1 text-xs gap-1`, itemLeadingIcon: `size-4`, itemLeadingAvatarSize: `3xs`, itemLeadingChip: `size-4`, itemLeadingChipSize: `sm`, itemTrailingIcon: `size-4`, tagsItem: `text-[10px]/3`, tagsItemDeleteIcon: `size-3`, empty: `p-2 text-xs` }, sm: { base: `px-2.5 py-1.5 text-sm/4 gap-1.5`, leading: `ps-2.5`, trailing: `pe-2.5`, leadingIcon: `size-4`, leadingAvatarSize: `3xs`, trailingIcon: `size-4`, label: `p-1.5 text-[10px]/3 gap-1.5`, item: `p-1.5 text-xs gap-1.5`, itemLeadingIcon: `size-4`, itemLeadingAvatarSize: `3xs`, itemLeadingChip: `size-4`, itemLeadingChipSize: `sm`, itemTrailingIcon: `size-4`, tagsItem: `text-[10px]/3`, tagsItemDeleteIcon: `size-3`, empty: `p-2.5 text-xs` }, md: { base: `px-2.5 py-1.5 text-base/5 gap-1.5`, leading: `ps-2.5`, trailing: `pe-2.5`, leadingIcon: `size-5`, leadingAvatarSize: `2xs`, trailingIcon: `size-5`, label: `p-1.5 text-xs gap-1.5`, item: `p-1.5 text-sm gap-1.5`, itemLeadingIcon: `size-5`, itemLeadingAvatarSize: `2xs`, itemLeadingChip: `size-5`, itemLeadingChipSize: `md`, itemTrailingIcon: `size-5`, tagsItem: `text-xs`, tagsItemDeleteIcon: `size-3.5`, empty: `p-2.5 text-sm` }, lg: { base: `px-3 py-2 text-base/5 gap-2`, leading: `ps-3`, trailing: `pe-3`, leadingIcon: `size-5`, leadingAvatarSize: `2xs`, trailingIcon: `size-5`, label: `p-2 text-xs gap-2`, item: `p-2 text-sm gap-2`, itemLeadingIcon: `size-5`, itemLeadingAvatarSize: `2xs`, itemLeadingChip: `size-5`, itemLeadingChipSize: `md`, itemTrailingIcon: `size-5`, tagsItem: `text-xs`, tagsItemDeleteIcon: `size-3.5`, empty: `p-3 text-sm` }, xl: { base: `px-3 py-2 text-base gap-2`, leading: `ps-3`, trailing: `pe-3`, leadingIcon: `size-6`, leadingAvatarSize: `xs`, trailingIcon: `size-6`, label: `p-2 text-sm gap-2`, item: `p-2 text-base gap-2`, itemLeadingIcon: `size-6`, itemLeadingAvatarSize: `xs`, itemLeadingChip: `size-6`, itemLeadingChipSize: `lg`, itemTrailingIcon: `size-6`, tagsItem: `text-sm`, tagsItemDeleteIcon: `size-4`, empty: `p-3 text-base` } }, variant: { outline: `text-highlighted bg-default ring ring-inset ring-accented`, soft: `text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50`, subtle: `text-highlighted bg-elevated ring ring-inset ring-accented`, ghost: `text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent`, none: `text-highlighted bg-transparent focus:outline-none` }, color: { primary: ``, secondary: ``, success: ``, info: ``, warning: ``, error: ``, neutral: `` }, leading: { true: `` }, trailing: { true: `` }, loading: { true: `` }, highlight: { true: `` }, fixed: { false: `` }, type: { file: `file:me-1.5 file:font-medium file:text-muted file:outline-none` }, virtualize: { true: { viewport: `p-1 isolate` }, false: { viewport: `divide-y divide-default` } }, multiple: { true: { root: `flex-wrap` }, false: { base: `w-full border-0 placeholder:text-dimmed disabled:cursor-not-allowed disabled:opacity-75` } } }, compoundVariants: [{ variant: `soft`, multiple: true, class: `has-focus:bg-elevated has-focus-visible:outline-3` }, { variant: `ghost`, multiple: true, class: `has-focus:bg-elevated has-focus-visible:outline-3` }, { color: `primary`, multiple: true, variant: [`outline`, `subtle`], class: `has-focus-visible:outline-3 has-focus-visible:ring-primary` }, { color: `secondary`, multiple: true, variant: [`outline`, `subtle`], class: `has-focus-visible:outline-3 has-focus-visible:ring-secondary` }, { color: `success`, multiple: true, variant: [`outline`, `subtle`], class: `has-focus-visible:outline-3 has-focus-visible:ring-success` }, { color: `info`, multiple: true, variant: [`outline`, `subtle`], class: `has-focus-visible:outline-3 has-focus-visible:ring-info` }, { color: `warning`, multiple: true, variant: [`outline`, `subtle`], class: `has-focus-visible:outline-3 has-focus-visible:ring-warning` }, { color: `error`, multiple: true, variant: [`outline`, `subtle`], class: `has-focus-visible:outline-3 has-focus-visible:ring-error` }, { color: `neutral`, multiple: true, variant: [`outline`, `subtle`], class: `has-focus-visible:outline-3 has-focus-visible:ring-inverted` }, { color: `primary`, variant: [`outline`, `subtle`], class: `outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary` }, { color: `secondary`, variant: [`outline`, `subtle`], class: `outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary` }, { color: `success`, variant: [`outline`, `subtle`], class: `outline-success/25 focus-visible:outline-3 focus-visible:ring-success` }, { color: `info`, variant: [`outline`, `subtle`], class: `outline-info/25 focus-visible:outline-3 focus-visible:ring-info` }, { color: `warning`, variant: [`outline`, `subtle`], class: `outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning` }, { color: `error`, variant: [`outline`, `subtle`], class: `outline-error/25 focus-visible:outline-3 focus-visible:ring-error` }, { color: `primary`, variant: [`soft`, `ghost`], class: `outline-primary/25 focus-visible:outline-3` }, { color: `secondary`, variant: [`soft`, `ghost`], class: `outline-secondary/25 focus-visible:outline-3` }, { color: `success`, variant: [`soft`, `ghost`], class: `outline-success/25 focus-visible:outline-3` }, { color: `info`, variant: [`soft`, `ghost`], class: `outline-info/25 focus-visible:outline-3` }, { color: `warning`, variant: [`soft`, `ghost`], class: `outline-warning/25 focus-visible:outline-3` }, { color: `error`, variant: [`soft`, `ghost`], class: `outline-error/25 focus-visible:outline-3` }, { color: `primary`, highlight: true, class: `ring ring-inset ring-primary` }, { color: `secondary`, highlight: true, class: `ring ring-inset ring-secondary` }, { color: `success`, highlight: true, class: `ring ring-inset ring-success` }, { color: `info`, highlight: true, class: `ring ring-inset ring-info` }, { color: `warning`, highlight: true, class: `ring ring-inset ring-warning` }, { color: `error`, highlight: true, class: `ring ring-inset ring-error` }, { color: `neutral`, variant: [`outline`, `subtle`], class: `outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted` }, { color: `neutral`, variant: [`soft`, `ghost`], class: `outline-inverted/25 focus-visible:outline-3` }, { color: `neutral`, highlight: true, class: `ring ring-inset ring-inverted` }, { leading: true, size: `xs`, class: `ps-7` }, { leading: true, size: `sm`, class: `ps-8` }, { leading: true, size: `md`, class: `ps-9` }, { leading: true, size: `lg`, class: `ps-10` }, { leading: true, size: `xl`, class: `ps-11` }, { trailing: true, size: `xs`, class: `pe-7` }, { trailing: true, size: `sm`, class: `pe-8` }, { trailing: true, size: `md`, class: `pe-9` }, { trailing: true, size: `lg`, class: `pe-10` }, { trailing: true, size: `xl`, class: `pe-11` }, { loading: true, leading: true, class: { leadingIcon: `animate-spin` } }, { loading: true, leading: false, trailing: true, class: { trailingIcon: `animate-spin` } }, { fixed: false, size: `xs`, class: `md:text-xs` }, { fixed: false, size: `sm`, class: `md:text-xs` }, { fixed: false, size: `md`, class: `md:text-sm` }, { fixed: false, size: `lg`, class: `md:text-sm` }], defaultVariants: { size: `md`, color: `primary`, variant: `outline` } }, wt = Object.assign({ inheritAttrs: false }, { __name: `InputMenu`, props: e({ as: { type: null, required: false }, id: { type: String, required: false }, type: { type: null, required: false, default: `text` }, placeholder: { type: String, required: false }, color: { type: null, required: false }, variant: { type: null, required: false }, size: { type: null, required: false }, required: { type: Boolean, required: false }, autofocus: { type: Boolean, required: false }, autofocusDelay: { type: Number, required: false, default: 0 }, trailingIcon: { type: null, required: false }, selectedIcon: { type: null, required: false }, deleteIcon: { type: null, required: false }, clear: { type: [Boolean, Object], required: false }, clearIcon: { type: null, required: false }, content: { type: Object, required: false }, arrow: { type: [Boolean, Object], required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, virtualize: { type: [Boolean, Object], required: false, default: false }, valueKey: { type: null, required: false }, labelKey: { type: null, required: false, default: `label` }, descriptionKey: { type: null, required: false, default: `description` }, items: { type: null, required: false }, defaultValue: { type: null, required: false }, modelValue: { type: null, required: false }, modelModifiers: { type: null, required: false }, multiple: { type: Boolean, required: false }, highlight: { type: Boolean, required: false }, fixed: { type: Boolean, required: false }, mode: { type: String, required: false, default: `combobox` }, createItem: { type: [Boolean, String, Object], required: false }, filterFields: { type: Array, required: false }, ignoreFilter: { type: Boolean, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, open: { type: Boolean, required: false }, defaultOpen: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, name: { type: String, required: false }, resetSearchTermOnBlur: { type: Boolean, required: false, default: true }, resetSearchTermOnSelect: { type: Boolean, required: false, default: true }, resetModelValueOnClear: { type: Boolean, required: false, default: true }, highlightOnHover: { type: Boolean, required: false }, openOnClick: { type: Boolean, required: false }, openOnFocus: { type: Boolean, required: false }, by: { type: [String, Function], required: false }, icon: { type: null, required: false }, avatar: { type: Object, required: false }, leading: { type: Boolean, required: false }, leadingIcon: { type: null, required: false }, trailing: { type: Boolean, required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: null, required: false } }, { searchTerm: { type: String, default: `` }, searchTermModifiers: {} }), emits: e([`change`, `blur`, `focus`, `create`, `clear`, `highlight`, `remove-tag`, `update:modelValue`, `update:open`], [`update:searchTerm`]), setup(e2, { expose: d2, emit: y2 }) {
  let j2 = e2, N2 = y2, P2 = s(), F2 = ie(`inputMenu`, j2), I2 = a(e2, `searchTerm`, { type: String, default: `` }), { t: L2 } = we(), z2 = B(), { filterGroups: H2 } = ze(), G2 = v(() => F2.mode === `autocomplete`), he2 = ve(F2, `as`, `modelValue`, `defaultValue`, `open`, `defaultOpen`, `required`, `multiple`, `resetSearchTermOnBlur`, `resetSearchTermOnSelect`, `resetModelValueOnClear`, `highlightOnHover`, `openOnClick`, `openOnFocus`, `by`), ge2 = _e(he2, `multiple`, `resetSearchTermOnSelect`, `resetModelValueOnClear`, `by`), ye2 = me(v(() => G2.value ? ge2 : he2), N2), K2 = v(() => G2.value ? je : Ae), be2 = c(), xe2 = v(() => F2.multiple && !G2.value ? be2[`data-slot`] ?? `base` : `base`), Ce2 = ee(D(() => F2.portal)), Te2 = D(() => ae(F2.content, { side: `bottom`, sideOffset: 8, collisionPadding: 8, position: `popper` })), Ee2 = D(() => ae(F2.arrow, { rounded: true })), De2 = v(() => typeof F2.clear == `object` ? F2.clear : {}), Oe2 = D(() => F2.virtualize ? ae(typeof F2.virtualize == `boolean` ? {} : F2.virtualize, { estimateSize: Ve(it2.value, Ye2.value || `md`, F2.descriptionKey, !!P2[`item-description`]) }) : false), { emitFormBlur: ke2, emitFormFocus: Me2, emitFormChange: Ne2, emitFormInput: Pe2, size: Fe2, color: Ie2, id: Le2, name: Re2, highlight: Be2, disabled: He2, ariaAttrs: Ue2 } = de(j2), { orientation: We2, size: Ge2 } = le(j2), { isLeading: q2, isTrailing: Ke2, leadingIconName: qe2, trailingIconName: Je2 } = ce(D(() => ae(F2, { trailingIcon: z2.ui.icons.chevronDown }))), Ye2 = v(() => Ge2.value || Fe2.value), [Xe2, Ze2] = Se(), [Qe2, $e2] = Se({ props: { item: { type: [Object, String, Number, Boolean], required: true }, index: { type: Number, required: false } } }), J2 = v(() => se({ extend: Ct, ...z2.ui?.inputMenu || {} })({ color: Ie2.value ?? F2.color, variant: F2.variant, size: Ye2?.value ?? F2.size, loading: F2.loading, highlight: Be2.value ?? F2.highlight, fixed: F2.fixed, leading: q2.value || !!F2.avatar || !!P2.leading, trailing: Ke2.value || !!P2.trailing, multiple: F2.multiple, fieldGroup: We2.value, virtualize: !!F2.virtualize })), et2 = v(() => nt2.value.flatMap((e3) => e3));
  function tt2(e3) {
    return U(et2.value, e3, { labelKey: F2.labelKey, valueKey: F2.valueKey, by: F2.by }) ?? ``;
  }
  let nt2 = v(() => F2.items?.length ? te(F2.items) ? F2.items : [F2.items] : []), rt2 = v(() => {
    if (F2.ignoreFilter || !I2.value) return nt2.value;
    let e3 = Array.isArray(F2.filterFields) ? F2.filterFields : [F2.labelKey];
    return H2(nt2.value, I2.value, { fields: e3, isStructural: (e4) => $2(e4) && !!e4.type && [`label`, `separator`].includes(e4.type) });
  }), it2 = v(() => rt2.value.flatMap((e3) => e3)), Y2 = v(() => {
    if (!F2.createItem || !I2.value) return false;
    let e3 = F2.valueKey ? { [F2.valueKey]: I2.value } : I2.value;
    return typeof F2.createItem == `object` && F2.createItem.when === `always` || F2.createItem === `always` ? !it2.value.find((t2) => re(t2, e3, F2.by ?? F2.valueKey)) : !it2.value.length;
  }), X2 = v(() => typeof F2.createItem == `object` ? F2.createItem.position : `bottom`), Z2 = u(`inputRef`);
  function at2() {
    F2.autofocus && Z2.value?.$el?.focus();
  }
  g(() => {
    w(() => {
      G2.value ? I2.value = String(F2.modelValue ?? F2.defaultValue ?? ``) : I2.value = ``;
    }), setTimeout(() => {
      at2();
    }, F2.autofocusDelay);
  }), o(() => F2.modelValue, (e3) => {
    G2.value && (I2.value = String(e3 ?? ``));
  });
  function ot2(e3) {
    if (n(F2.modelValue) === e3) return;
    F2.modelModifiers?.trim && (typeof e3 == `string` || e3 == null) && (e3 = e3?.trim() ?? null), F2.modelModifiers?.number && (e3 = ne(e3)), F2.modelModifiers?.nullable && (e3 ?? (e3 = null)), F2.modelModifiers?.optional && !F2.modelModifiers?.nullable && e3 !== null && (e3 ?? (e3 = void 0));
    let t2 = new Event(`change`, { target: { value: e3 } });
    N2(`change`, t2), Ne2(), Pe2(), G2.value ? I2.value = String(e3 ?? ``) : F2.resetSearchTermOnSelect && (I2.value = ``);
  }
  function Q2(e3) {
    G2.value || (I2.value = e3);
  }
  function st2(e3) {
    N2(`blur`, e3), ke2();
  }
  function ct2(e3) {
    N2(`focus`, e3), Me2();
  }
  let lt2 = E(false);
  function ut2(e3) {
    lt2.value = e3;
    let t2;
    if (e3) {
      let e4 = new FocusEvent(`focus`);
      N2(`focus`, e4), Me2(), clearTimeout(t2);
    } else {
      let e4 = new FocusEvent(`blur`);
      N2(`blur`, e4), ke2(), !G2.value && F2.resetSearchTermOnBlur && (t2 = setTimeout(() => {
        I2.value = ``;
      }, 100));
    }
  }
  function dt2(e3, t2) {
    if (F2.multiple) {
      let n2 = t2.filter((t3) => !R(t3, e3));
      N2(`update:modelValue`, n2), N2(`remove-tag`, e3), ot2(n2);
    }
  }
  function ft2(e3) {
    e3.preventDefault(), e3.stopPropagation(), N2(`create`, I2.value);
  }
  function pt2(e3, t2) {
    if ($2(t2)) {
      if (t2.disabled) {
        e3.preventDefault();
        return;
      }
      t2.onSelect?.(e3);
    }
  }
  function $2(e3) {
    return typeof e3 == `object` && !!e3;
  }
  function gt2(e3) {
    return F2.multiple && Array.isArray(e3) ? e3.length === 0 : e3 == null || e3 === ``;
  }
  function _t2() {
    N2(`clear`);
  }
  let xt2 = u(`viewportRef`), St2 = u(`comboboxRootRef`);
  return o(() => F2.items, async () => {
    !lt2.value || !F2.createItem || (await w(), St2.value?.highlightFirstItem?.());
  }, { flush: `post` }), d2({ inputRef: D(() => Z2.value?.$el), viewportRef: D(() => xt2.value) }), (e3, n2) => (b(), m(x, null, [r(l(Xe2), null, { default: S(() => [r(l(K2).Item, { "data-slot": `item`, class: f(J2.value.item({ class: l(F2).ui?.item })), value: I2.value, onSelect: ft2 }, { default: S(() => [p(`span`, { "data-slot": `itemLabel`, class: f(J2.value.itemLabel({ class: l(F2).ui?.itemLabel })) }, [O(e3.$slots, `create-item-label`, { item: I2.value }, () => [i(C(l(L2)(`inputMenu.create`, { label: I2.value })), 1)])], 2)]), _: 3 }, 8, [`class`, `value`])]), _: 3 }), r(l(Qe2), null, { default: S(({ item: t2, index: n3 }) => [$2(t2) && t2.type === `label` ? (b(), T(l(K2).Label, { key: 0, "data-slot": `label`, class: f(J2.value.label({ class: [l(F2).ui?.label, t2.ui?.label, t2.class] })) }, { default: S(() => [i(C(l(V)(t2, l(F2).labelKey)), 1)]), _: 2 }, 1032, [`class`])) : $2(t2) && t2.type === `separator` ? (b(), T(l(K2).Separator, { key: 1, "data-slot": `separator`, class: f(J2.value.separator({ class: [l(F2).ui?.separator, t2.ui?.separator, t2.class] })) }, null, 8, [`class`])) : (b(), T(l(K2).Item, { key: 2, "data-slot": `item`, class: f(J2.value.item({ class: [l(F2).ui?.item, $2(t2) && t2.ui?.item, $2(t2) && t2.class] })), disabled: $2(t2) && t2.disabled, value: l(F2).valueKey && $2(t2) ? l(V)(t2, l(F2).valueKey) : t2, onSelect: (e4) => pt2(e4, t2) }, { default: S(() => [O(e3.$slots, `item`, { item: t2, index: n3, ui: J2.value }, () => [O(e3.$slots, `item-leading`, { item: t2, index: n3, ui: J2.value }, () => [$2(t2) && t2.icon ? (b(), T(W, { key: 0, name: t2.icon, "data-slot": `itemLeadingIcon`, class: f(J2.value.itemLeadingIcon({ class: [l(F2).ui?.itemLeadingIcon, t2.ui?.itemLeadingIcon] })) }, null, 8, [`name`, `class`])) : $2(t2) && t2.avatar ? (b(), T(oe, _({ key: 1, size: t2.ui?.itemLeadingAvatarSize || l(F2).ui?.itemLeadingAvatarSize || J2.value.itemLeadingAvatarSize() }, t2.avatar, { "data-slot": `itemLeadingAvatar`, class: J2.value.itemLeadingAvatar({ class: [l(F2).ui?.itemLeadingAvatar, t2.ui?.itemLeadingAvatar] }) }), null, 16, [`size`, `class`])) : $2(t2) && t2.chip ? (b(), T(pe, _({ key: 2, size: t2.ui?.itemLeadingChipSize || l(F2).ui?.itemLeadingChipSize || J2.value.itemLeadingChipSize(), inset: ``, standalone: `` }, t2.chip, { "data-slot": `itemLeadingChip`, class: J2.value.itemLeadingChip({ class: [l(F2).ui?.itemLeadingChip, t2.ui?.itemLeadingChip] }) }), null, 16, [`size`, `class`])) : k(``, true)]), p(`span`, { "data-slot": `itemWrapper`, class: f(J2.value.itemWrapper({ class: [l(F2).ui?.itemWrapper, $2(t2) && t2.ui?.itemWrapper] })) }, [p(`span`, { "data-slot": `itemLabel`, class: f(J2.value.itemLabel({ class: [l(F2).ui?.itemLabel, $2(t2) && t2.ui?.itemLabel] })) }, [O(e3.$slots, `item-label`, { item: t2, index: n3 }, () => [i(C($2(t2) ? l(V)(t2, l(F2).labelKey) : t2), 1)])], 2), $2(t2) && (l(V)(t2, l(F2).descriptionKey) || P2[`item-description`]) ? (b(), m(`span`, { key: 0, "data-slot": `itemDescription`, class: f(J2.value.itemDescription({ class: [l(F2).ui?.itemDescription, $2(t2) && t2.ui?.itemDescription] })) }, [O(e3.$slots, `item-description`, { item: t2, index: n3 }, () => [i(C(l(V)(t2, l(F2).descriptionKey)), 1)])], 2)) : k(``, true)], 2), p(`span`, { "data-slot": `itemTrailing`, class: f(J2.value.itemTrailing({ class: [l(F2).ui?.itemTrailing, $2(t2) && t2.ui?.itemTrailing] })) }, [O(e3.$slots, `item-trailing`, { item: t2, index: n3, ui: J2.value }), G2.value ? k(``, true) : (b(), T(l(K2).ItemIndicator, { key: 0, "as-child": `` }, { default: S(() => [r(W, { name: l(F2).selectedIcon || l(z2).ui.icons.check, "data-slot": `itemTrailingIcon`, class: f(J2.value.itemTrailingIcon({ class: [l(F2).ui?.itemTrailingIcon, $2(t2) && t2.ui?.itemTrailingIcon] })) }, null, 8, [`name`, `class`])]), _: 2 }, 1024))], 2)])]), _: 2 }, 1032, [`class`, `disabled`, `value`, `onSelect`]))]), _: 3 }), r(l(K2).Root, _({ ref_key: `comboboxRootRef`, ref: St2 }, l(ye2), { name: l(Re2), disabled: l(He2), "data-slot": e3.$attrs[`data-slot`] ?? `root`, class: J2.value.root({ class: [l(F2).ui?.root, l(F2).class] }), "as-child": !!l(F2).multiple && !G2.value, "ignore-filter": ``, "onUpdate:modelValue": ot2, "onUpdate:open": ut2 }), { default: S(({ modelValue: a2, open: o2 }) => [r(l(K2).Anchor, { "as-child": !l(F2).multiple, "data-slot": xe2.value, class: f(J2.value.base({ class: l(F2).ui?.base })) }, { default: S(() => [l(F2).multiple && !G2.value ? (b(), T(l(mt), { key: 0, "model-value": a2, disabled: l(He2), required: l(F2).required, delimiter: ``, "as-child": ``, onBlur: st2, onFocus: ct2, onRemoveTag: (e4) => dt2(e4, a2) }, { default: S(({ modelValue: t2 }) => [(b(true), m(x, null, h(t2, (t3, n3) => (b(), T(l(vt), { key: n3, value: t3, "data-slot": `tagsItem`, class: f(J2.value.tagsItem({ class: [l(F2).ui?.tagsItem, $2(t3) && t3.ui?.tagsItem] })) }, { default: S(() => [r(l(bt), { "data-slot": `tagsItemText`, class: f(J2.value.tagsItemText({ class: [l(F2).ui?.tagsItemText, $2(t3) && t3.ui?.tagsItemText] })) }, { default: S(() => [O(e3.$slots, `tags-item-text`, { item: t3, index: n3 }, () => [i(C(tt2(t3)), 1)])]), _: 2 }, 1032, [`class`]), r(l(yt), { "data-slot": `tagsItemDelete`, class: f(J2.value.tagsItemDelete({ class: [l(F2).ui?.tagsItemDelete, $2(t3) && t3.ui?.tagsItemDelete] })), disabled: l(He2) }, { default: S(() => [O(e3.$slots, `tags-item-delete`, { item: t3, index: n3, ui: J2.value }, () => [r(W, { name: l(F2).deleteIcon || l(z2).ui.icons.close, "data-slot": `tagsItemDeleteIcon`, class: f(J2.value.tagsItemDeleteIcon({ class: [l(F2).ui?.tagsItemDeleteIcon, $2(t3) && t3.ui?.tagsItemDeleteIcon] })) }, null, 8, [`name`, `class`])])]), _: 2 }, 1032, [`class`, `disabled`])]), _: 2 }, 1032, [`value`, `class`]))), 128)), r(l(K2).Input, { modelValue: I2.value, "onUpdate:modelValue": n2[1] || (n2[1] = (e4) => I2.value = e4), "as-child": `` }, { default: S(() => [r(l(ht), _({ id: l(Le2), ref_key: `inputRef`, ref: Z2 }, { ...e3.$attrs, ...l(Ue2) }, { placeholder: l(F2).placeholder, "data-slot": `tagsInput`, class: J2.value.tagsInput({ class: l(F2).ui?.tagsInput }), onChange: n2[0] || (n2[0] = M(() => {
  }, [`stop`])) }), null, 16, [`id`, `placeholder`, `class`])]), _: 1 }, 8, [`modelValue`])]), _: 3 }, 8, [`model-value`, `disabled`, `required`, `onRemoveTag`])) : (b(), T(l(K2).Input, _({ key: 1, id: l(Le2), ref_key: `inputRef`, ref: Z2 }, { ...G2.value ? {} : { displayValue: tt2 }, ...e3.$attrs, ...l(Ue2) }, { "data-slot": l(F2).multiple ? void 0 : `base`, type: l(F2).type, placeholder: l(F2).placeholder, required: l(F2).required, onBlur: st2, onFocus: ct2, onChange: n2[2] || (n2[2] = M(() => {
  }, [`stop`])), "onUpdate:modelValue": Q2 }), null, 16, [`id`, `data-slot`, `type`, `placeholder`, `required`])), l(q2) || l(F2).avatar || P2.leading ? (b(), m(`span`, { key: 2, "data-slot": `leading`, class: f(J2.value.leading({ class: l(F2).ui?.leading })) }, [O(e3.$slots, `leading`, { modelValue: a2, open: o2, ui: J2.value }, () => [l(q2) && l(qe2) ? (b(), T(W, { key: 0, name: l(qe2), "data-slot": `leadingIcon`, class: f(J2.value.leadingIcon({ class: l(F2).ui?.leadingIcon })) }, null, 8, [`name`, `class`])) : l(F2).avatar ? (b(), T(oe, _({ key: 1, size: l(F2).ui?.itemLeadingAvatarSize || J2.value.itemLeadingAvatarSize() }, l(F2).avatar, { "data-slot": `itemLeadingAvatar`, class: J2.value.itemLeadingAvatar({ class: l(F2).ui?.itemLeadingAvatar }) }), null, 16, [`size`, `class`])) : k(``, true)])], 2)) : k(``, true), l(Ke2) || P2.trailing || l(F2).clear ? (b(), T(l(K2).Trigger, { key: 3, "data-slot": `trailing`, class: f(J2.value.trailing({ class: l(F2).ui?.trailing })) }, { default: S(() => [O(e3.$slots, `trailing`, { modelValue: a2, open: o2, ui: J2.value }, () => [l(F2).clear && !gt2(a2) ? (b(), T(l(K2).Cancel, { key: 0, "as-child": `` }, { default: S(() => [r(fe, _({ as: `span`, icon: l(F2).clearIcon || l(z2).ui.icons.close, size: Ye2.value, variant: `link`, color: `neutral`, tabindex: `-1` }, De2.value, { "data-slot": `trailingClear`, class: J2.value.trailingClear({ class: l(F2).ui?.trailingClear }), onClick: M(_t2, [`stop`]) }), null, 16, [`icon`, `size`, `class`])]), _: 1 })) : l(Je2) ? (b(), T(W, { key: 1, name: l(Je2), "data-slot": `trailingIcon`, class: f(J2.value.trailingIcon({ class: l(F2).ui?.trailingIcon })) }, null, 8, [`name`, `class`])) : k(``, true)])]), _: 2 }, 1032, [`class`])) : k(``, true)]), _: 2 }, 1032, [`as-child`, `data-slot`, `class`]), r(l(K2).Portal, t(A(l(Ce2))), { default: S(() => [r(l(ue), null, { default: S(() => [r(l(K2).Content, _({ "data-slot": `content`, class: J2.value.content({ class: l(F2).ui?.content }) }, Te2.value, { onFocusOutside: n2[3] || (n2[3] = M(() => {
  }, [`prevent`])) }), { default: S(() => [O(e3.$slots, `content-top`), r(l(K2).Empty, { "data-slot": `empty`, class: f(J2.value.empty({ class: l(F2).ui?.empty })) }, { default: S(() => [O(e3.$slots, `empty`, { searchTerm: I2.value }, () => [i(C(I2.value ? l(L2)(`inputMenu.noMatch`, { searchTerm: I2.value }) : l(L2)(`inputMenu.noData`)), 1)])]), _: 3 }, 8, [`class`]), p(`div`, { ref_key: `viewportRef`, ref: xt2, role: `presentation`, "data-slot": `viewport`, class: f(J2.value.viewport({ class: l(F2).ui?.viewport })) }, [l(F2).virtualize ? (b(), m(x, { key: 0 }, [Y2.value && X2.value === `top` ? (b(), T(l(Ze2), { key: 0 })) : k(``, true), r(l(K2).Virtualizer, _({ options: it2.value, "text-content": (e4) => $2(e4) ? l(V)(e4, l(F2).labelKey) : String(e4) }, Oe2.value), { default: S(({ option: e4, virtualItem: t2 }) => [r(l($e2), { item: e4, index: t2.index }, null, 8, [`item`, `index`])]), _: 1 }, 16, [`options`, `text-content`]), Y2.value && X2.value === `bottom` ? (b(), T(l(Ze2), { key: 1 })) : k(``, true)], 64)) : (b(), m(x, { key: 1 }, [Y2.value && X2.value === `top` ? (b(), T(l(K2).Group, { key: 0, "data-slot": `group`, class: f(J2.value.group({ class: l(F2).ui?.group })) }, { default: S(() => [r(l(Ze2))]), _: 1 }, 8, [`class`])) : k(``, true), (b(true), m(x, null, h(rt2.value, (e4, t2) => (b(), T(l(K2).Group, { key: `group-${t2}`, "data-slot": `group`, class: f(J2.value.group({ class: l(F2).ui?.group })) }, { default: S(() => [(b(true), m(x, null, h(e4, (e5, n3) => (b(), T(l($e2), { key: `group-${t2}-${n3}`, item: e5, index: n3 }, null, 8, [`item`, `index`]))), 128))]), _: 2 }, 1032, [`class`]))), 128)), Y2.value && X2.value === `bottom` ? (b(), T(l(K2).Group, { key: 1, "data-slot": `group`, class: f(J2.value.group({ class: l(F2).ui?.group })) }, { default: S(() => [r(l(Ze2))]), _: 1 }, 8, [`class`])) : k(``, true)], 64))], 2), O(e3.$slots, `content-bottom`), l(F2).arrow ? (b(), T(l(K2).Arrow, _({ key: 0 }, Ee2.value, { "data-slot": `arrow`, class: J2.value.arrow({ class: l(F2).ui?.arrow }) }), null, 16, [`class`])) : k(``, true)]), _: 3 }, 16, [`class`])]), _: 3 })]), _: 3 }, 16)]), _: 3 }, 16, [`name`, `disabled`, `data-slot`, `class`, `as-child`])], 64));
} }), Tt = { class: `grid gap-4` }, Et = { class: `text-base text-pretty font-semibold text-highlighted` }, Dt = { class: `pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal` }, Ot = { class: `inline-flex bg-default px-1` }, kt = { class: `pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal` }, At = { class: `inline-flex bg-default px-1` }, jt = { class: `peer relative inline-flex items-center w-full` }, Mt = { class: `pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal` }, Nt = { class: `inline-flex bg-default px-1` }, Pt = { class: `grid gap-4` }, Ft = { class: `text-base text-pretty font-semibold text-highlighted` }, It = { class: `pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal` }, Lt = { class: `inline-flex bg-default px-1` }, Rt = { class: `pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal` }, zt = { class: `inline-flex bg-default px-1` }, Bt = { class: `peer relative inline-flex items-center w-full` }, Vt = { class: `pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal` }, Ht = { class: `inline-flex bg-default px-1` }, Ut = { class: `grid gap-4` }, Wt = { class: `text-base text-pretty font-semibold text-highlighted` }, Gt = { class: `grid grid-cols-1 md:grid-cols-2 gap-4` }, Kt = { class: `peer relative inline-flex items-center w-full` }, qt = { class: `pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal` }, Jt = { class: `inline-flex bg-default px-1` }, Yt = { class: `peer relative inline-flex items-center w-full` }, Xt = { class: `pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal` }, Zt = { class: `inline-flex bg-default px-1` }, Qt = { class: `grid gap-2.5 grid-cols-5 text-center select-none text-default` }, $t = [`onClick`], en = { key: 0 }, tn = { key: 1 }, nn = { key: 2 }, rn = [`onClick`], an = { key: 0 }, on = { key: 1 }, sn = { key: 2 }, cn = { class: `grid gap-4` }, ln = { class: `text-base text-pretty font-semibold text-highlighted` }, un = { class: `pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal` }, dn = { class: `inline-flex bg-default px-1` };
function fn(e2, t2, n2, r2) {
  let i2 = (t2 - e2) / (r2 - n2), a2 = -1 * n2 * i2 + e2;
  return `clamp(${parseFloat((e2 / 16).toFixed(4).toString())}rem, ${parseFloat((a2 / 16).toFixed(4).toString())}rem + ${parseFloat((i2 * 100).toFixed(4).toString())}vw, ${parseFloat((t2 / 16).toFixed(4).toString())}rem)`;
}
var pn = He(y({ __name: `FluidCalculatorSlideover`, emits: [`close`], setup(e2, { emit: t2 }) {
  let n2 = t2, i2 = E([{ name: wp.i18n.__(`Perfect Unison`, `windpress`), decimal: 1, fractional: [1, 1] }, { name: wp.i18n.__(`Minor Second`, `windpress`), decimal: 1.067, fractional: [16, 15] }, { name: wp.i18n.__(`Major Second`, `windpress`), decimal: 1.125, fractional: [9, 8] }, { name: wp.i18n.__(`Minor Third`, `windpress`), decimal: 1.2, fractional: [6, 5] }, { name: wp.i18n.__(`Major Third`, `windpress`), decimal: 1.25, fractional: [5, 4] }, { name: wp.i18n.__(`Perfect Fourth`, `windpress`), decimal: 1.333, fractional: [4, 3] }, { name: wp.i18n.__(`Tritone`, `windpress`), decimal: 1.414, fractional: [Math.sqrt(2), 1] }, { name: wp.i18n.__(`Perfect Fifth`, `windpress`), decimal: 1.5, fractional: [3, 2] }, { name: wp.i18n.__(`Minor Sixth`, `windpress`), decimal: 1.6, fractional: [8, 5] }, { name: wp.i18n.__(`Golden Ratio`, `windpress`), decimal: 1.618, fractional: [89, 55] }, { name: wp.i18n.__(`Major Sixth`, `windpress`), decimal: 1.667, fractional: [5, 3] }, { name: wp.i18n.__(`Minor Seventh`, `windpress`), decimal: 1.778, fractional: [16, 9] }, { name: wp.i18n.__(`Major Seventh`, `windpress`), decimal: 1.875, fractional: [15, 8] }, { name: wp.i18n.__(`Perfect Octave`, `windpress`), decimal: 2, fractional: [2, 1] }]), a2 = v(() => i2.value.map((e3) => ({ ...e3, label: `${e3.name} (${e3.decimal})` }))), o2 = Ce(`windpress.ui.wizard.fluid-calculator`, { minSize: 18, maxSize: 20, minScale: a2.value[3], maxScale: a2.value[4], minViewport: 320, maxViewport: 1400, stepsSmaller: 4, stepsLarger: 4, miscPrefix: `fluid-` });
  function s2(e3, t3 = `min`) {
    if (!e3 || !e3.trim() || isNaN(parseFloat(e3))) return;
    let n3 = e3.split(`/`).map((e4) => e4.trim()), r2 = n3.reduce((e4, t4) => e4 * parseFloat(t4), 1), s3 = n3.map((e4) => {
      let t4 = e4.trim();
      return isNaN(parseFloat(t4)) ? 1 : parseFloat(t4);
    });
    if (isNaN(r2) || r2 <= 0 || (s3.length === 1 && s3.push(1), s3.some((e4) => isNaN(e4) || e4 <= 0))) return;
    i2.value.push({ name: e3, decimal: r2, fractional: s3 });
    let c3 = a2.value[a2.value.length - 1];
    t3 === `min` ? o2.value.minScale = c3 : o2.value.maxScale = c3;
  }
  function c2() {
    confirm(wp.i18n.__(`Are you sure you want to generate the fluid scale and import it?`, `windpress`)) && n2(`close`, { minSize: o2.value.minSize, maxSize: o2.value.maxSize, minScale: parseFloat(String(o2.value.minScale.decimal ?? o2.value.minScale.label)), maxScale: parseFloat(String(o2.value.maxScale.decimal ?? o2.value.maxScale.label)), minViewport: o2.value.minViewport, maxViewport: o2.value.maxViewport, stepsSmaller: o2.value.stepsSmaller, stepsLarger: o2.value.stepsLarger, miscPrefix: o2.value.miscPrefix });
  }
  return (e3, t3) => {
    let n3 = Be, i3 = wt, u2 = Le, d2 = St, g2 = W, _2 = fe, v2 = Re;
    return b(), T(v2, { title: e3.i18n.__(`Fluid Calculator`, `windpress`), ui: { content: `top-(--wp-admin--admin-bar--height) bottom-0` } }, { body: S(() => [p(`div`, Tt, [p(`div`, Et, C(l(wp.i18n.__)(`Min Viewport`, `windpress`)), 1), p(`div`, null, [r(n3, { modelValue: l(o2).minSize, "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => l(o2).minSize = e4), type: `number`, required: ``, ui: { trailing: `pointer-events-none`, base: `peer` }, class: `w-full` }, { trailing: S(() => [...t3[13] || (t3[13] = [p(`div`, { class: `text-xs text-muted tabular-nums` }, `px`, -1)])]), default: S(() => [p(`label`, Dt, [p(`span`, Ot, C(e3.i18n.__(`Size`, `windpress`)), 1)])]), _: 1 }, 8, [`modelValue`])]), p(`div`, null, [r(n3, { modelValue: l(o2).minViewport, "onUpdate:modelValue": t3[1] || (t3[1] = (e4) => l(o2).minViewport = e4), type: `number`, required: ``, ui: { trailing: `pointer-events-none`, base: `peer` }, class: `w-full` }, { trailing: S(() => [...t3[14] || (t3[14] = [p(`div`, { class: `text-xs text-muted tabular-nums` }, `px`, -1)])]), default: S(() => [p(`label`, kt, [p(`span`, At, C(e3.i18n.__(`Viewport`, `windpress`)), 1)])]), _: 1 }, 8, [`modelValue`])]), p(`div`, null, [p(`div`, jt, [r(i3, { modelValue: l(o2).minScale, "onUpdate:modelValue": t3[2] || (t3[2] = (e4) => l(o2).minScale = e4), "create-item": ``, items: a2.value, loading: false, onCreate: t3[3] || (t3[3] = (e4) => s2(e4, `min`)), class: `w-full` }, null, 8, [`modelValue`, `items`]), p(`label`, Mt, [p(`span`, Nt, C(e3.i18n.__(`Scale ratio`, `windpress`)), 1)])])])]), r(u2, { class: `my-4` }), p(`div`, Pt, [p(`div`, Ft, C(l(wp.i18n.__)(`Max Viewport`, `windpress`)), 1), p(`div`, null, [r(n3, { modelValue: l(o2).maxSize, "onUpdate:modelValue": t3[4] || (t3[4] = (e4) => l(o2).maxSize = e4), type: `number`, required: ``, ui: { trailing: `pointer-events-none`, base: `peer` }, class: `w-full` }, { trailing: S(() => [...t3[15] || (t3[15] = [p(`div`, { class: `text-xs text-muted tabular-nums` }, `px`, -1)])]), default: S(() => [p(`label`, It, [p(`span`, Lt, C(e3.i18n.__(`Size`, `windpress`)), 1)])]), _: 1 }, 8, [`modelValue`])]), p(`div`, null, [r(n3, { modelValue: l(o2).maxViewport, "onUpdate:modelValue": t3[5] || (t3[5] = (e4) => l(o2).maxViewport = e4), type: `number`, required: ``, ui: { trailing: `pointer-events-none`, base: `peer` }, class: `w-full` }, { trailing: S(() => [...t3[16] || (t3[16] = [p(`div`, { class: `text-xs text-muted tabular-nums` }, `px`, -1)])]), default: S(() => [p(`label`, Rt, [p(`span`, zt, C(e3.i18n.__(`Viewport`, `windpress`)), 1)])]), _: 1 }, 8, [`modelValue`])]), p(`div`, null, [p(`div`, Bt, [r(i3, { modelValue: l(o2).maxScale, "onUpdate:modelValue": t3[6] || (t3[6] = (e4) => l(o2).maxScale = e4), "create-item": ``, items: a2.value, loading: false, onCreate: t3[7] || (t3[7] = (e4) => s2(e4, `max`)), class: `w-full` }, null, 8, [`modelValue`, `items`]), p(`label`, Vt, [p(`span`, Ht, C(e3.i18n.__(`Scale ratio`, `windpress`)), 1)])])])]), r(u2, { class: `my-4` }), p(`div`, Ut, [p(`div`, Wt, C(l(wp.i18n.__)(`Scale Steps`, `windpress`)), 1), p(`div`, Gt, [p(`div`, Kt, [r(d2, { modelValue: l(o2).stepsSmaller, "onUpdate:modelValue": t3[8] || (t3[8] = (e4) => l(o2).stepsSmaller = e4), min: 0, step: 1, required: ``, class: `w-full` }, null, 8, [`modelValue`]), p(`label`, qt, [p(`span`, Jt, C(e3.i18n.__(`Smaller steps`, `windpress`)), 1)])]), p(`div`, Yt, [r(d2, { modelValue: l(o2).stepsLarger, "onUpdate:modelValue": t3[9] || (t3[9] = (e4) => l(o2).stepsLarger = e4), min: 0, step: 1, required: ``, class: `w-full` }, null, 8, [`modelValue`]), p(`label`, Xt, [p(`span`, Zt, C(e3.i18n.__(`Larger steps`, `windpress`)), 1)])])]), p(`div`, Qt, [p(`div`, { onClick: t3[10] || (t3[10] = (e4) => l(o2).stepsSmaller++), class: `stripe-bg flex items-center border border-transparent hover:border-muted cursor-pointer font-semibold justify-center px-4 py-2.5 rounded-md` }, [r(g2, { name: `lucide:plus`, class: `text-tonned` })]), (b(true), m(x, null, h(l(o2).stepsSmaller, (e4) => (b(), m(`div`, { key: e4, onClick: (t4) => l(o2).stepsSmaller -= +(e4 === 1), class: f([e4 === 1 ? `cursor-pointer hover:border-muted` : ``, `flex items-center bg-elevated border border-transparent justify-center px-4 py-2.5 rounded-md`]) }, [e4 === l(o2).stepsSmaller ? (b(), m(`span`, en, `sm`)) : e4 === l(o2).stepsSmaller - 1 ? (b(), m(`span`, tn, `xs`)) : (b(), m(`span`, nn, C(l(o2).stepsSmaller - e4) + `xs`, 1))], 10, $t))), 128)), t3[17] || (t3[17] = p(`div`, { class: `flex items-center text-inverted bg-primary font-semibold justify-center px-4 py-2.5 rounded-md` }, ` base `, -1)), (b(true), m(x, null, h(l(o2).stepsLarger, (e4) => (b(), m(`div`, { key: e4, onClick: (t4) => l(o2).stepsLarger -= +(e4 === l(o2).stepsLarger), class: f([e4 === l(o2).stepsLarger ? `cursor-pointer hover:border-muted` : ``, `flex items-center bg-accented border border-transparent font-semibold justify-center px-4 py-2.5 rounded-md`]) }, [e4 === 1 ? (b(), m(`span`, an, `lg`)) : e4 === 2 ? (b(), m(`span`, on, `xl`)) : (b(), m(`span`, sn, C(e4 - 1) + `xl`, 1))], 10, rn))), 128)), p(`div`, { onClick: t3[11] || (t3[11] = (e4) => l(o2).stepsLarger++), class: `stripe-bg flex items-center border border-transparent hover:border-muted cursor-pointer font-semibold justify-center px-4 py-2.5 rounded-md` }, [r(g2, { name: `lucide:plus`, class: `text-tonned` })])])]), r(u2, { class: `my-4` }), p(`div`, cn, [p(`div`, ln, C(l(wp.i18n.__)(`Misc`, `windpress`)), 1), p(`div`, null, [r(n3, { modelValue: l(o2).miscPrefix, "onUpdate:modelValue": t3[12] || (t3[12] = (e4) => l(o2).miscPrefix = e4), required: ``, placeholder: e3.i18n.__(`prefix-`, `windpress`), ui: { trailing: `pointer-events-none`, base: `peer` }, class: `w-full` }, { default: S(() => [p(`label`, un, [p(`span`, dn, C(e3.i18n.__(`Prefix`, `windpress`)), 1)])]), _: 1 }, 8, [`modelValue`, `placeholder`])])])]), footer: S(({ close: t4 }) => [r(_2, { label: e3.i18n.__(`Generate`, `windpress`), color: `info`, variant: `soft`, onClick: c2, "leading-icon": `lucide:sparkles`, ui: { leadingIcon: `opacity-60` } }, null, 8, [`label`])]), _: 1 }, 8, [`title`]);
  };
} }), [[`__scopeId`, `data-v-3aa2a4d7`]]);
export {
  fn as n,
  pn as t
};
