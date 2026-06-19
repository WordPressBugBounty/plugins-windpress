import { $ as e, $n as t, Cn as n, D as r, E as i, Ft as a, Ht as o, Lt as s, On as c, Rt as l, Tn as u, Zn as d, _ as f, b as p, bt as m, ct as h, et as g, g as _, k as v, mt as y, o as b, qt as x, tr as S, tt as C, v as w, vn as T, wn as E, xt as D, y as O, z as k } from "./runtime-core.esm-bundler-Ci9kEgM7.js";
import { c as A, l as j } from "./vue.runtime.esm-bundler-CWCE91rd.js";
import { C as M, G as N, H as P, I as ee, K as F, L as te, O as I, R as L, S as ne, V as re, X as ie, _ as ae, b as R, g as z, h as oe, m as se, p as ce, t as le, v as ue, x as de, y as B, z as fe } from "./Button-CzGEASGR.js";
import { A as pe, O as V, S as H, T as me, b as U, f as he, k as ge, o as W, p as _e, r as ve, y as ye } from "./dist-D5YmEqpM.js";
import { C as be, _ as G, b as K, i as xe, y as Se } from "./Tooltip-CmrGYuQV.js";
import { A as Ce, C as we, N as Te, U as Ee, V as De, W as Oe, n as ke, t as Ae } from "./namespaced-DmrIZId-.js";
import { n as je, r as Me, t as Ne } from "./VisuallyHiddenInput-BKQ13hRt.js";
import { n as Pe, t as Fe } from "./clamp-CgcnoKpi.js";
import { t as Ie } from "./Separator-D24uVBc5.js";
import { t as Le } from "./Slideover-CjoUKxIP.js";
import { n as Re } from "./DropdownMenu-IyulwgeE.js";
import { t as ze } from "./Input-BVMp8rOG.js";
import { t as Be } from "./virtualizer-DzE67sFV.js";
import { t as Ve } from "./_plugin-vue_export-helper-BDNMzG2s.js";
function He(e2) {
  let t2 = be({ locale: T(`en`) });
  return _(() => e2?.value || t2.locale?.value || `en`);
}
var q = /* @__PURE__ */ new Map(), Ue = false;
try {
  Ue = new Intl.NumberFormat(`de-DE`, { signDisplay: `exceptZero` }).resolvedOptions().signDisplay === `exceptZero`;
} catch {
}
var J = false;
try {
  J = new Intl.NumberFormat(`de-DE`, { style: `unit`, unit: `degree` }).resolvedOptions().style === `unit`;
} catch {
}
var We = { degree: { narrow: { default: `\xB0`, "ja-JP": ` \u5EA6`, "zh-TW": `\u5EA6`, "sl-SI": ` \xB0` } } }, Ge = class {
  constructor(e2, t2 = {}) {
    this.numberFormatter = Ke(e2, t2), this.options = t2;
  }
  format(e2) {
    let t2 = ``;
    if (t2 = !Ue && this.options.signDisplay != null ? qe(this.numberFormatter, this.options.signDisplay, e2) : this.numberFormatter.format(e2), this.options.style === `unit` && !J) {
      let { unit: e3, unitDisplay: n2 = `short`, locale: r2 } = this.resolvedOptions();
      if (!e3) return t2;
      let i2 = We[e3]?.[n2];
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
    return !Ue && this.options.signDisplay != null && (e2 = { ...e2, signDisplay: this.options.signDisplay }), !J && this.options.style === `unit` && (e2 = { ...e2, style: `unit`, unit: this.options.unit, unitDisplay: this.options.unitDisplay }), e2;
  }
};
function Ke(e2, t2 = {}) {
  let { numberingSystem: n2 } = t2;
  if (n2 && e2.includes(`-nu-`) && (e2.includes(`-u-`) || (e2 += `-u-`), e2 += `-nu-${n2}`), t2.style === `unit` && !J) {
    let { unit: e3, unitDisplay: n3 = `short` } = t2;
    if (!e3) throw Error(`unit option must be provided with style: "unit"`);
    if (!We[e3]?.[n3]) throw Error(`Unsupported unit ${e3} with unitDisplay = ${n3}`);
    t2 = { ...t2, style: `decimal` };
  }
  let r2 = e2 + (t2 ? Object.entries(t2).sort((e3, t3) => e3[0] < t3[0] ? -1 : 1).join() : ``);
  if (q.has(r2)) return q.get(r2);
  let i2 = new Intl.NumberFormat(e2, t2);
  return q.set(r2, i2), i2;
}
function qe(e2, t2, n2) {
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
var Je = RegExp(`^.*\\(.*\\).*$`), Ye = [`latn`, `arab`, `hanidec`, `deva`, `beng`, `fullwide`], Y = class {
  constructor(e2, t2 = {}) {
    this.locale = e2, this.options = t2;
  }
  parse(e2) {
    return Ze(this.locale, this.options, e2).parse(e2);
  }
  isValidPartialNumber(e2, t2, n2) {
    return Ze(this.locale, this.options, e2).isValidPartialNumber(e2, t2, n2);
  }
  getNumberingSystem(e2) {
    return Ze(this.locale, this.options, e2).options.numberingSystem;
  }
}, Xe = /* @__PURE__ */ new Map();
function Ze(e2, t2, n2) {
  let r2 = Qe(e2, t2);
  if (!e2.includes(`-nu-`) && !r2.isValidPartialNumber(n2)) {
    for (let i2 of Ye) if (i2 !== r2.options.numberingSystem) {
      let r3 = Qe(e2 + (e2.includes(`-u-`) ? `-nu-` : `-u-nu-`) + i2, t2);
      if (r3.isValidPartialNumber(n2)) return r3;
    }
  }
  return r2;
}
function Qe(e2, t2) {
  let n2 = e2 + (t2 ? Object.entries(t2).sort((e3, t3) => e3[0] < t3[0] ? -1 : 1).join() : ``), r2 = Xe.get(n2);
  return r2 || (r2 = new $e(e2, t2), Xe.set(n2, r2)), r2;
}
var $e = class {
  constructor(e2, t2 = {}) {
    this.locale = e2, t2.roundingIncrement !== 1 && t2.roundingIncrement != null && (t2.maximumFractionDigits == null && t2.minimumFractionDigits == null ? (t2.maximumFractionDigits = 0, t2.minimumFractionDigits = 0) : t2.maximumFractionDigits == null ? t2.maximumFractionDigits = t2.minimumFractionDigits : t2.minimumFractionDigits ?? (t2.minimumFractionDigits = t2.maximumFractionDigits)), this.formatter = new Intl.NumberFormat(e2, t2), this.options = this.formatter.resolvedOptions(), this.symbols = et(e2, this.formatter, this.options, t2), this.options.style === `percent` && ((this.options.minimumFractionDigits ?? 0) > 18 || (this.options.maximumFractionDigits ?? 0) > 18) && console.warn(`NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.`);
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
      return new Y(this.locale, e3).parse(new Ge(this.locale, e3).format(r2));
    }
    return this.options.currencySign === `accounting` && Je.test(e2) && (r2 = -1 * r2), r2;
  }
  sanitize(e2) {
    let t2 = this.formatter.resolvedOptions().useGrouping;
    return this.symbols.noNumeralUnits.length > 0 && this.symbols.noNumeralUnits.find((t3) => t3.unit === e2) ? this.symbols.noNumeralUnits.find((t3) => t3.unit === e2).value.toString() : (e2 = e2.replace(this.symbols.literals, ``), this.symbols.minusSign && (e2 = e2.replace(`-`, this.symbols.minusSign)), this.options.numberingSystem === `arab` && (this.symbols.decimal && (e2 = Q(e2, `,`, this.symbols.decimal), e2 = Q(e2, `\u060C`, this.symbols.decimal)), this.symbols.group && t2 && (e2 = Q(e2, `.`, this.symbols.group))), this.symbols.group === `\u2019` && e2.includes(`'`) && t2 && (e2 = Q(e2, `'`, this.symbols.group)), this.symbols.group === `'` && e2.includes(`\u2019`) && t2 && (e2 = Q(e2, `\u2019`, this.symbols.group)), this.options.locale === `fr-FR` && this.symbols.group && t2 && (e2 = Q(e2, ` `, this.symbols.group), e2 = Q(e2, /\u00A0/g, this.symbols.group)), e2);
  }
  isValidPartialNumber(e2, t2 = -1 / 0, n2 = 1 / 0) {
    let r2 = this.formatter.resolvedOptions().useGrouping;
    return e2 = this.sanitize(e2), this.symbols.minusSign && e2.startsWith(this.symbols.minusSign) && t2 < 0 ? e2 = e2.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e2.startsWith(this.symbols.plusSign) && n2 > 0 && (e2 = e2.slice(this.symbols.plusSign.length)), this.symbols.decimal && e2.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0 ? false : (this.symbols.group && r2 && (e2 = Q(e2, this.symbols.group, ``)), e2 = e2.replace(this.symbols.numeral, ``), this.symbols.decimal && (e2 = e2.replace(this.symbols.decimal, ``)), e2.length === 0);
  }
}, X = /* @__PURE__ */ new Set([`decimal`, `fraction`, `integer`, `minusSign`, `plusSign`, `group`]), Z = [0, 4, 2, 1, 11, 20, 3, 7, 100, 21, 0.1, 1.1];
function et(e2, t2, n2, r2) {
  let i2 = new Intl.NumberFormat(e2, { ...n2, minimumSignificantDigits: 1, maximumSignificantDigits: 21, roundingIncrement: 1, roundingPriority: `auto`, roundingMode: `halfExpand`, useGrouping: true }), a2 = i2.formatToParts(-10000.111), o2 = i2.formatToParts(10000.111), s2 = Z.map((e3) => i2.formatToParts(e3)), c2 = s2.map((e3, t3) => {
    let n3 = e3.find((e4) => e4.type === `unit`);
    return n3 && !e3.some((e4) => e4.type === `integer` || e4.type === `fraction`) ? { unit: n3.value, value: Z[t3] } : null;
  }).filter((e3) => !!e3), l2 = a2.find((e3) => e3.type === `minusSign`)?.value ?? `-`, u2 = o2.find((e3) => e3.type === `plusSign`)?.value;
  !u2 && (r2?.signDisplay === `exceptZero` || r2?.signDisplay === `always`) && (u2 = `+`);
  let d2 = new Intl.NumberFormat(e2, { ...n2, minimumFractionDigits: 2, maximumFractionDigits: 2 }).formatToParts(1e-3).find((e3) => e3.type === `decimal`)?.value, f2 = a2.find((e3) => e3.type === `group`)?.value, p2 = a2.filter((e3) => !X.has(e3.type)).map((e3) => tt(e3.value)), m2 = s2.flatMap((e3) => e3.filter((e4) => !X.has(e4.type)).map((e4) => tt(e4.value))), h2 = [.../* @__PURE__ */ new Set([...p2, ...m2])].sort((e3, t3) => t3.length - e3.length), g2 = h2.length === 0 ? RegExp(`\\p{White_Space}|\\p{Cf}`, `gu`) : RegExp(`${h2.join(`|`)}|\\p{White_Space}|\\p{Cf}`, `gu`), _2 = [...new Intl.NumberFormat(n2.locale, { useGrouping: false }).format(9876543210)].reverse(), v2 = new Map(_2.map((e3, t3) => [e3, t3])), y2 = RegExp(`[${_2.join(``)}]`, `g`);
  return { minusSign: l2, plusSign: u2, decimal: d2, group: f2, literals: g2, numeral: y2, numerals: _2, index: (e3) => String(v2.get(e3)), noNumeralUnits: c2 };
}
function Q(e2, t2, n2) {
  return e2.replaceAll ? e2.replaceAll(t2, n2) : e2.split(t2).join(n2);
}
function tt(e2) {
  return e2.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
function nt(e2) {
  let { disabled: t2 } = e2, n2 = T(), r2 = H(), i2 = () => window.clearTimeout(n2.value), a2 = (e3) => {
    i2(), !t2.value && (r2.trigger(), n2.value = window.setTimeout(() => {
      a2(60);
    }, e3));
  }, o2 = () => {
    a2(400);
  }, s2 = () => {
    i2();
  }, c2 = T(false), l2 = _(() => W(e2.target)), u2 = (e3) => {
    e3.button !== 0 || c2.value || (e3.preventDefault(), c2.value = true, o2());
  }, d2 = () => {
    c2.value = false, s2();
  };
  return me && (he(l2 || window, `pointerdown`, u2), he(window, `pointerup`, d2), he(window, `pointercancel`, d2)), { isPressed: c2, onTrigger: r2.on };
}
function rt(e2, t2 = T({})) {
  return V(() => new Ge(e2.value, t2.value));
}
function it(e2, t2 = T({})) {
  return V(() => new Y(e2.value, t2.value));
}
function at(e2, t2, n2) {
  let r2 = e2 === `+` ? t2 + n2 : t2 - n2;
  if (t2 % 1 != 0 || n2 % 1 != 0) {
    let i2 = t2.toString().split(`.`), a2 = n2.toString().split(`.`), o2 = i2[1] && i2[1].length || 0, s2 = a2[1] && a2[1].length || 0, c2 = 10 ** Math.max(o2, s2);
    t2 = Math.round(t2 * c2), n2 = Math.round(n2 * c2), r2 = e2 === `+` ? t2 + n2 : t2 - n2, r2 /= c2;
  }
  return r2;
}
var [ot, st] = I(`NumberFieldRoot`), ct = v({ inheritAttrs: false, __name: `NumberFieldRoot`, props: { defaultValue: { type: Number, required: false, default: void 0 }, modelValue: { type: [Number, null], required: false }, min: { type: Number, required: false }, max: { type: Number, required: false }, step: { type: Number, required: false, default: 1 }, stepSnapping: { type: Boolean, required: false, default: true }, focusOnChange: { type: Boolean, required: false, default: true }, formatOptions: { type: null, required: false }, locale: { type: String, required: false }, disabled: { type: Boolean, required: false }, readonly: { type: Boolean, required: false }, disableWheelChange: { type: Boolean, required: false }, invertWheelChange: { type: Boolean, required: false }, id: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `div` }, name: { type: String, required: false }, required: { type: Boolean, required: false } }, emits: [`update:modelValue`], setup(e2, { emit: t2 }) {
  let n2 = e2, r2 = t2, { disabled: i2, readonly: a2, disableWheelChange: o2, invertWheelChange: s2, min: l2, max: d2, step: f2, stepSnapping: p2, formatOptions: m2, id: h2, locale: v2 } = u(n2), b2 = U(n2, `modelValue`, r2, { defaultValue: n2.defaultValue, passive: n2.modelValue === void 0 }), { primitiveElement: S2, currentElement: C2 } = je(), E2 = He(v2), k2 = Me(C2), A2 = T(), j2 = _(() => !G(b2.value) && (z2(b2.value) === l2.value || l2.value && !isNaN(b2.value) ? at(`-`, b2.value, f2.value) < l2.value : false)), N2 = _(() => !G(b2.value) && (z2(b2.value) === d2.value || d2.value && !isNaN(b2.value) ? at(`+`, b2.value, f2.value) > d2.value : false));
  function P2(e3, t3 = 1) {
    if (n2.focusOnChange && A2.value?.focus(), n2.disabled || n2.readonly) return;
    let r3 = L2.parse(A2.value?.value ?? ``);
    isNaN(r3) ? b2.value = l2.value ?? 0 : e3 === `increase` ? b2.value = z2(r3 + (f2.value ?? 1) * t3) : b2.value = z2(r3 - (f2.value ?? 1) * t3);
  }
  function ee2(e3 = 1) {
    P2(`increase`, e3);
  }
  function F2(e3 = 1) {
    P2(`decrease`, e3);
  }
  function te2(e3) {
    e3 === `min` && l2.value !== void 0 ? b2.value = z2(l2.value) : e3 === `max` && d2.value !== void 0 && (b2.value = z2(d2.value));
  }
  let I2 = rt(E2, m2), L2 = it(E2, m2), ne2 = _(() => I2.resolvedOptions().maximumFractionDigits > 0 ? `decimal` : `numeric`), re2 = rt(E2, m2), ie2 = _(() => G(b2.value) || isNaN(b2.value) ? `` : re2.format(b2.value));
  function ae2(e3) {
    return L2.isValidPartialNumber(e3, l2.value, d2.value);
  }
  function R2(e3) {
    A2.value && (A2.value.value = e3);
  }
  function z2(e3) {
    let t3;
    return t3 = f2.value === void 0 || isNaN(f2.value) || !p2.value ? Fe(e3, l2.value, d2.value) : Pe(e3, l2.value, d2.value, f2.value), t3 = L2.parse(I2.format(t3)), t3;
  }
  function oe2(e3) {
    let t3 = L2.parse(e3);
    return b2.value = isNaN(t3) ? void 0 : z2(t3), e3.length ? R2(ie2.value) : R2(e3);
  }
  return st({ modelValue: b2, handleDecrease: F2, handleIncrease: ee2, handleMinMaxValue: te2, inputMode: ne2, inputEl: A2, onInputElement: (e3) => A2.value = e3, textValue: ie2, readonly: a2, validate: ae2, applyInputValue: oe2, disabled: i2, disableWheelChange: o2, invertWheelChange: s2, max: d2, min: l2, isDecreaseDisabled: j2, isIncreaseDisabled: N2, id: h2 }), (e3, t3) => (y(), w(c(M), g(e3.$attrs, { ref_key: `primitiveElement`, ref: S2, role: `group`, as: e3.as, "as-child": e3.asChild, "data-disabled": c(i2) ? `` : void 0, "data-readonly": c(a2) ? `` : void 0 }), { default: x(() => [D(e3.$slots, `default`, { modelValue: c(b2), textValue: ie2.value, readonly: c(a2) }), c(k2) && e3.name ? (y(), w(c(Ne), { key: 0, type: `text`, value: c(b2), name: e3.name, disabled: c(i2), readonly: c(a2), required: e3.required }, null, 8, [`value`, `name`, `disabled`, `readonly`, `required`])) : O(`v-if`, true)]), _: 3 }, 16, [`as`, `as-child`, `data-disabled`, `data-readonly`]));
} }), lt = v({ __name: `NumberFieldDecrement`, props: { disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2, n2 = ot(), r2 = _(() => n2.disabled?.value || n2.readonly.value || t2.disabled || n2.isDecreaseDisabled.value), { primitiveElement: i2, currentElement: a2 } = je(), { isPressed: o2, onTrigger: s2 } = nt({ target: a2, disabled: r2 });
  return s2(() => {
    n2.handleDecrease();
  }), (e3, n3) => (y(), w(c(M), g(t2, { ref_key: `primitiveElement`, ref: i2, tabindex: `-1`, "aria-label": `Decrease`, type: e3.as === `button` ? `button` : void 0, style: { userSelect: c(o2) ? `none` : void 0 }, disabled: r2.value ? `` : void 0, "data-disabled": r2.value ? `` : void 0, "data-pressed": c(o2) ? `true` : void 0, onContextmenu: n3[0] || (n3[0] = j(() => {
  }, [`prevent`])) }), { default: x(() => [D(e3.$slots, `default`)]), _: 3 }, 16, [`type`, `style`, `disabled`, `data-disabled`, `data-pressed`]));
} }), ut = v({ __name: `NumberFieldIncrement`, props: { disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2, n2 = ot(), r2 = _(() => n2.disabled?.value || n2.readonly.value || t2.disabled || n2.isIncreaseDisabled.value), { primitiveElement: i2, currentElement: a2 } = je(), { isPressed: o2, onTrigger: s2 } = nt({ target: a2, disabled: r2 });
  return s2(() => {
    n2.handleIncrease();
  }), (e3, n3) => (y(), w(c(M), g(t2, { ref_key: `primitiveElement`, ref: i2, tabindex: `-1`, "aria-label": `Increase`, type: e3.as === `button` ? `button` : void 0, style: { userSelect: c(o2) ? `none` : void 0 }, disabled: r2.value ? `` : void 0, "data-disabled": r2.value ? `` : void 0, "data-pressed": c(o2) ? `true` : void 0, onContextmenu: n3[0] || (n3[0] = j(() => {
  }, [`prevent`])) }), { default: x(() => [D(e3.$slots, `default`)]), _: 3 }, 16, [`type`, `style`, `disabled`, `data-disabled`, `data-pressed`]));
} }), $ = v({ __name: `NumberFieldInput`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `input` } }, setup(e2) {
  let t2 = e2, { primitiveElement: n2, currentElement: r2 } = je(), i2 = ot(), a2 = Te(), { isComposing: s2, handleCompositionStart: l2, handleCompositionEnd: u2 } = we();
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
    i2.disableWheelChange.value || e3.target === De() && (Math.abs(e3.deltaY) <= Math.abs(e3.deltaX) || (e3.preventDefault(), e3.deltaY > 0 ? i2.invertWheelChange.value ? i2.handleDecrease() : i2.handleIncrease() : e3.deltaY < 0 && (i2.invertWheelChange.value ? i2.handleIncrease() : i2.handleDecrease())));
  }
  h(() => {
    i2.onInputElement(r2.value);
  });
  let p2 = T(i2.textValue.value);
  o(() => i2.textValue.value, () => {
    p2.value = i2.textValue.value;
  }, { immediate: true, deep: true });
  function m2() {
    requestAnimationFrame(() => {
      p2.value = i2.textValue.value;
    });
  }
  return (e3, r3) => (y(), w(c(M), g(t2, { id: c(i2).id.value, ref_key: `primitiveElement`, ref: n2, value: p2.value, role: `spinbutton`, type: `text`, tabindex: `0`, inputmode: c(i2).inputMode.value, disabled: c(i2).disabled.value ? `` : void 0, "data-disabled": c(i2).disabled.value ? `` : void 0, readonly: c(i2).readonly.value ? `` : void 0, "data-readonly": c(i2).readonly.value ? `` : void 0, autocomplete: `off`, autocorrect: `off`, spellcheck: `false`, "aria-roledescription": `Number field`, "aria-valuenow": c(i2).modelValue.value, "aria-valuemin": c(i2).min.value, "aria-valuemax": c(i2).max.value, onKeydown: d2, onWheel: f2, onBeforeinput: r3[0] || (r3[0] = (e4) => {
    if (e4.isComposing) return;
    let t3 = e4.target, n3 = t3.value.slice(0, t3.selectionStart ?? void 0) + (e4.data ?? ``) + t3.value.slice(t3.selectionEnd ?? void 0);
    c(i2).validate(n3) || e4.preventDefault();
  }), onInput: r3[1] || (r3[1] = (e4) => {
    p2.value = e4.target.value;
  }), onChange: m2, onBlur: r3[2] || (r3[2] = (e4) => c(i2).applyInputValue(e4.target?.value)), onCompositionstart: c(l2), onCompositionend: c(u2) }), { default: x(() => [D(e3.$slots, `default`)]), _: 3 }, 16, [`id`, `value`, `inputmode`, `disabled`, `data-disabled`, `readonly`, `data-readonly`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `onCompositionstart`, `onCompositionend`]));
} }), [dt, ft] = I(`TagsInputRoot`), pt = v({ __name: `TagsInputRoot`, props: { modelValue: { type: [Array, null], required: false }, defaultValue: { type: Array, required: false, default: () => [] }, addOnPaste: { type: Boolean, required: false }, addOnTab: { type: Boolean, required: false }, addOnBlur: { type: Boolean, required: false }, duplicate: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, delimiter: { type: null, required: false, default: `,` }, dir: { type: String, required: false }, max: { type: Number, required: false, default: 0 }, id: { type: String, required: false }, convertValue: { type: Function, required: false }, displayValue: { type: Function, required: false, default: (e2) => e2.toString() }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, name: { type: String, required: false }, required: { type: Boolean, required: false } }, emits: [`update:modelValue`, `invalid`, `addTag`, `removeTag`], setup(e2, { emit: t2 }) {
  let n2 = e2, i2 = t2, { addOnPaste: a2, disabled: o2, delimiter: s2, max: l2, id: d2, dir: f2, addOnBlur: p2, addOnTab: m2 } = u(n2), h2 = Oe(f2), g2 = U(n2, `modelValue`, i2, { defaultValue: n2.defaultValue, passive: true, deep: true }), { forwardRef: v2, currentElement: b2 } = K(), { focused: S2 } = _e(b2), C2 = Me(b2), { getItems: E2, CollectionSlot: k2 } = Ce({ isProvider: true }), A2 = T(), j2 = T(false), N2 = _(() => Array.isArray(g2.value) ? [...g2.value] : []);
  function P2(e3) {
    if (e3 !== -1) {
      let t3 = E2().filter((e4) => e4.ref.dataset.disabled !== ``);
      g2.value = g2.value.filter((t4, n3) => n3 !== e3), i2(`removeTag`, t3[e3].value);
    }
  }
  return ft({ modelValue: g2, onAddValue: (e3) => {
    let t3 = [...N2.value], r2 = t3.length > 0 && typeof t3[0] == `object`, a3 = t3.length > 0 && typeof n2.defaultValue[0] == `object`;
    if ((r2 || a3) && typeof n2.convertValue != `function`) throw Error("You must provide a `convertValue` function when using objects as values.");
    let o3 = n2.convertValue ? n2.convertValue(e3) : e3;
    if (t3.length >= l2.value && l2.value) return i2(`invalid`, o3), false;
    if (n2.duplicate) return g2.value = [...t3, o3], i2(`addTag`, o3), true;
    if (t3.includes(o3)) j2.value = true;
    else return g2.value = [...t3, o3], i2(`addTag`, o3), true;
    return i2(`invalid`, o3), false;
  }, onRemoveValue: P2, onInputKeydown: (e3) => {
    if (e3.isComposing) return;
    let t3 = e3.target, n3 = E2().map((e4) => e4.ref).filter((e4) => e4.dataset.disabled !== ``);
    if (!n3.length) return;
    let r2 = n3.at(-1);
    switch (e3.key) {
      case `Delete`:
      case `Backspace`:
        if (t3.selectionStart !== 0 || t3.selectionEnd !== 0) break;
        if (A2.value) {
          let t4 = n3.findIndex((e4) => e4 === A2.value);
          P2(t4), A2.value = A2.value === r2 ? n3.at(t4 - 1) : n3.at(t4 + 1), e3.preventDefault();
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
  }, selectedElement: A2, isInvalidInput: j2, addOnPaste: a2, addOnBlur: p2, addOnTab: m2, dir: h2, disabled: o2, delimiter: s2, max: l2, id: d2, displayValue: n2.displayValue }), (e3, t3) => (y(), w(c(k2), null, { default: x(() => [r(c(M), { ref: c(v2), dir: c(h2), as: e3.as, "as-child": e3.asChild, "data-invalid": j2.value ? `` : void 0, "data-disabled": c(o2) ? `` : void 0, "data-focused": c(S2) ? `` : void 0 }, { default: x(() => [D(e3.$slots, `default`, { modelValue: c(g2) }), c(C2) && e3.name ? (y(), w(c(Ne), { key: 0, name: e3.name, value: c(g2), required: e3.required, disabled: c(o2) }, null, 8, [`name`, `value`, `required`, `disabled`])) : O(`v-if`, true)]), _: 3 }, 8, [`dir`, `as`, `as-child`, `data-invalid`, `data-disabled`, `data-focused`])]), _: 3 }));
} }), mt = v({ __name: `TagsInputInput`, props: { placeholder: { type: String, required: false }, autoFocus: { type: Boolean, required: false }, maxLength: { type: Number, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `input` } }, setup(e2) {
  let t2 = e2, n2 = dt(), { forwardRef: r2, currentElement: i2 } = K();
  function a2(e3) {
    if (n2.selectedElement.value = void 0, !n2.addOnBlur.value) return;
    let t3 = e3.target, r3 = e3.relatedTarget, i3 = t3.getAttribute(`aria-controls`);
    i3 && r3?.closest(`#${CSS.escape(i3)}`) || t3.value && n2.onAddValue(t3.value) && (t3.value = ``);
  }
  function o2(e3) {
    n2.addOnTab.value && d2(e3);
  }
  let { isComposing: s2, handleCompositionStart: l2, handleCompositionEnd: u2 } = we();
  async function d2(e3) {
    if (s2.value || (await C(), e3.defaultPrevented)) return;
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
  return h(() => {
    let e3 = i2.value.nodeName === `INPUT` ? i2.value : i2.value.querySelector(`input`);
    e3 && setTimeout(() => {
      t2.autoFocus && e3?.focus();
    }, 1);
  }), (e3, t3) => (y(), w(c(M), { id: c(n2).id?.value, ref: c(r2), type: `text`, autocomplete: `off`, autocorrect: `off`, autocapitalize: `off`, as: e3.as, "as-child": e3.asChild, maxlength: e3.maxLength, placeholder: e3.placeholder, disabled: c(n2).disabled.value, "data-invalid": c(n2).isInvalidInput.value ? `` : void 0, onInput: f2, onKeydown: [A(d2, [`enter`]), A(o2, [`tab`]), p2], onBlur: a2, onCompositionstart: c(l2), onCompositionend: c(u2), onPaste: m2 }, { default: x(() => [D(e3.$slots, `default`)]), _: 3 }, 8, [`id`, `as`, `as-child`, `maxlength`, `placeholder`, `disabled`, `data-invalid`, `onCompositionstart`, `onCompositionend`]));
} }), [ht, gt] = I(`TagsInputItem`), _t = v({ __name: `TagsInputItem`, props: { value: { type: null, required: true }, disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(e2) {
  let t2 = e2, { value: n2 } = u(t2), i2 = dt(), { forwardRef: a2, currentElement: o2 } = K(), { CollectionItem: s2 } = Ce(), l2 = _(() => i2.selectedElement.value === o2.value), d2 = _(() => t2.disabled || i2.disabled.value), f2 = gt({ value: n2, isSelected: l2, disabled: d2, textId: ``, displayValue: _(() => i2.displayValue(n2.value)) });
  return (e3, t3) => (y(), w(c(s2), { value: c(n2) }, { default: x(() => [r(c(M), { ref: c(a2), as: e3.as, "as-child": e3.asChild, "aria-labelledby": c(f2).textId, "aria-current": l2.value, "data-disabled": d2.value ? `` : void 0, "data-state": l2.value ? `active` : `inactive` }, { default: x(() => [D(e3.$slots, `default`)]), _: 3 }, 8, [`as`, `as-child`, `aria-labelledby`, `aria-current`, `data-disabled`, `data-state`])]), _: 3 }, 8, [`value`]));
} }), vt = v({ __name: `TagsInputItemDelete`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `button` } }, setup(e2) {
  let t2 = e2;
  K();
  let n2 = dt(), r2 = ht(), i2 = _(() => r2.disabled?.value || n2.disabled.value);
  function a2() {
    if (i2.value) return;
    let e3 = n2.modelValue.value.findIndex((e4) => N(e4, r2.value.value));
    n2.onRemoveValue(e3);
  }
  return (e3, n3) => (y(), w(c(M), g({ tabindex: `-1` }, t2, { "aria-labelledby": c(r2).textId, "aria-current": c(r2).isSelected.value, "data-state": c(r2).isSelected.value ? `active` : `inactive`, "data-disabled": i2.value ? `` : void 0, type: e3.as === `button` ? `button` : void 0, onClick: a2 }), { default: x(() => [D(e3.$slots, `default`)]), _: 3 }, 16, [`aria-labelledby`, `aria-current`, `data-state`, `data-disabled`, `type`]));
} }), yt = v({ __name: `TagsInputItemText`, props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: `span` } }, setup(e2) {
  let t2 = e2, n2 = ht();
  return K(), n2.textId || (n2.textId = Se(void 0, `reka-tags-input-item-text`)), (e3, r2) => (y(), w(c(M), g(t2, { id: c(n2).textId }), { default: x(() => [D(e3.$slots, `default`, {}, () => [i(S(c(n2).displayValue.value), 1)])]), _: 3 }, 16, [`id`]));
} }), bt = { slots: { root: `relative inline-flex items-center`, base: [`w-full rounded-md border-0 placeholder:text-dimmed disabled:cursor-not-allowed disabled:opacity-75`, `transition-colors`], increment: `absolute flex items-center`, decrement: `absolute flex items-center` }, variants: { fieldGroup: { horizontal: { root: `group has-focus-visible:z-[1]`, base: `group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none` }, vertical: { root: `group has-focus-visible:z-[1]`, base: `group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none` } }, color: { primary: ``, secondary: ``, success: ``, info: ``, warning: ``, error: ``, neutral: `` }, size: { xs: `px-2 py-1 text-sm/4 gap-1`, sm: `px-2.5 py-1.5 text-sm/4 gap-1.5`, md: `px-2.5 py-1.5 text-base/5 gap-1.5`, lg: `px-3 py-2 text-base/5 gap-2`, xl: `px-3 py-2 text-base gap-2` }, variant: { outline: `text-highlighted bg-default ring ring-inset ring-accented`, soft: `text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50`, subtle: `text-highlighted bg-elevated ring ring-inset ring-accented`, ghost: `text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent`, none: `text-highlighted bg-transparent focus:outline-none` }, disabled: { true: { increment: `opacity-75 cursor-not-allowed`, decrement: `opacity-75 cursor-not-allowed` } }, orientation: { horizontal: { base: `text-center`, increment: `inset-y-0 end-0 pe-1`, decrement: `inset-y-0 start-0 ps-1` }, vertical: { increment: `top-0 end-0 pe-1 [&>button]:py-0 scale-80`, decrement: `bottom-0 end-0 pe-1 [&>button]:py-0 scale-80` } }, highlight: { true: `` }, fixed: { false: `` }, increment: { false: `` }, decrement: { false: `` } }, compoundVariants: [{ color: `primary`, variant: [`outline`, `subtle`], class: `outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary` }, { color: `secondary`, variant: [`outline`, `subtle`], class: `outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary` }, { color: `success`, variant: [`outline`, `subtle`], class: `outline-success/25 focus-visible:outline-3 focus-visible:ring-success` }, { color: `info`, variant: [`outline`, `subtle`], class: `outline-info/25 focus-visible:outline-3 focus-visible:ring-info` }, { color: `warning`, variant: [`outline`, `subtle`], class: `outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning` }, { color: `error`, variant: [`outline`, `subtle`], class: `outline-error/25 focus-visible:outline-3 focus-visible:ring-error` }, { color: `primary`, variant: [`soft`, `ghost`], class: `outline-primary/25 focus-visible:outline-3` }, { color: `secondary`, variant: [`soft`, `ghost`], class: `outline-secondary/25 focus-visible:outline-3` }, { color: `success`, variant: [`soft`, `ghost`], class: `outline-success/25 focus-visible:outline-3` }, { color: `info`, variant: [`soft`, `ghost`], class: `outline-info/25 focus-visible:outline-3` }, { color: `warning`, variant: [`soft`, `ghost`], class: `outline-warning/25 focus-visible:outline-3` }, { color: `error`, variant: [`soft`, `ghost`], class: `outline-error/25 focus-visible:outline-3` }, { color: `primary`, highlight: true, class: `ring ring-inset ring-primary` }, { color: `secondary`, highlight: true, class: `ring ring-inset ring-secondary` }, { color: `success`, highlight: true, class: `ring ring-inset ring-success` }, { color: `info`, highlight: true, class: `ring ring-inset ring-info` }, { color: `warning`, highlight: true, class: `ring ring-inset ring-warning` }, { color: `error`, highlight: true, class: `ring ring-inset ring-error` }, { color: `neutral`, variant: [`outline`, `subtle`], class: `outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted` }, { color: `neutral`, variant: [`soft`, `ghost`], class: `outline-inverted/25 focus-visible:outline-3` }, { color: `neutral`, highlight: true, class: `ring ring-inset ring-inverted` }, { orientation: `horizontal`, decrement: false, class: `text-start` }, { decrement: true, size: `xs`, class: `ps-7` }, { decrement: true, size: `sm`, class: `ps-8` }, { decrement: true, size: `md`, class: `ps-9` }, { decrement: true, size: `lg`, class: `ps-10` }, { decrement: true, size: `xl`, class: `ps-11` }, { increment: true, size: `xs`, class: `pe-7` }, { increment: true, size: `sm`, class: `pe-8` }, { increment: true, size: `md`, class: `pe-9` }, { increment: true, size: `lg`, class: `pe-10` }, { increment: true, size: `xl`, class: `pe-11` }, { fixed: false, size: `xs`, class: `md:text-xs` }, { fixed: false, size: `sm`, class: `md:text-xs` }, { fixed: false, size: `md`, class: `md:text-sm` }, { fixed: false, size: `lg`, class: `md:text-sm` }], defaultVariants: { size: `md`, color: `primary`, variant: `outline` } }, xt = Object.assign({ inheritAttrs: false }, { __name: `InputNumber`, props: { as: { type: null, required: false }, placeholder: { type: String, required: false }, color: { type: null, required: false }, variant: { type: null, required: false }, size: { type: null, required: false }, highlight: { type: Boolean, required: false }, fixed: { type: Boolean, required: false }, orientation: { type: null, required: false, default: `horizontal` }, increment: { type: [Boolean, Object], required: false, default: true }, incrementIcon: { type: null, required: false }, incrementDisabled: { type: Boolean, required: false }, decrement: { type: [Boolean, Object], required: false, default: true }, decrementIcon: { type: null, required: false }, decrementDisabled: { type: Boolean, required: false }, autofocus: { type: Boolean, required: false }, autofocusDelay: { type: Number, required: false }, defaultValue: { type: null, required: false }, modelValue: { type: null, required: false }, modelModifiers: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, min: { type: Number, required: false }, max: { type: Number, required: false }, step: { type: Number, required: false }, stepSnapping: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, required: { type: Boolean, required: false }, id: { type: String, required: false }, name: { type: String, required: false }, formatOptions: { type: null, required: false }, disableWheelChange: { type: Boolean, required: false }, invertWheelChange: { type: Boolean, required: false }, readonly: { type: Boolean, required: false }, focusOnChange: { type: Boolean, required: false }, locale: { type: String, required: false } }, emits: [`update:modelValue`, `blur`, `change`], setup(e2, { expose: t2, emit: n2 }) {
  let i2 = e2, a2 = n2, o2 = ne(`inputNumber`, i2), s2 = U(o2, `modelValue`, a2, { defaultValue: o2.defaultValue }), { t: u2 } = ee(), f2 = ie(), m2 = de(pe(o2, `as`, `stepSnapping`, `formatOptions`, `disableWheelChange`, `invertWheelChange`, `required`, `readonly`, `focusOnChange`, `locale`), a2), { emitFormBlur: v2, emitFormFocus: b2, emitFormChange: S2, emitFormInput: C2, id: T2, color: k2, size: A2, name: j2, highlight: M2, disabled: N2, ariaAttrs: P2 } = ce(i2), { orientation: F2, size: te2 } = oe(i2), I2 = _(() => te2.value || A2.value), L2 = _(() => R({ extend: R(bt), ...f2.ui?.inputNumber || {} })({ color: k2.value ?? o2.color, variant: o2.variant, size: I2.value ?? o2.size, highlight: M2.value ?? o2.highlight, fixed: o2.fixed, orientation: o2.orientation, fieldGroup: F2.value, increment: o2.orientation === `vertical` ? !!o2.increment || !!o2.decrement : !!o2.increment, decrement: o2.orientation === `vertical` ? false : !!o2.decrement })), re2 = _(() => o2.incrementIcon || (o2.orientation === `horizontal` ? f2.ui.icons.plus : f2.ui.icons.chevronUp)), ae2 = _(() => o2.decrementIcon || (o2.orientation === `horizontal` ? f2.ui.icons.minus : f2.ui.icons.chevronDown)), z2 = l(`inputRef`);
  function se2(e3) {
    o2.modelModifiers?.optional && (s2.value = e3 ?? (e3 = void 0)), a2(`change`, new Event(`change`, { target: { value: e3 } })), S2(), C2();
  }
  function ue2(e3) {
    v2(), a2(`blur`, e3);
  }
  function B2() {
    o2.autofocus && z2.value?.$el?.focus();
  }
  return h(() => {
    setTimeout(() => {
      B2();
    }, o2.autofocusDelay);
  }), t2({ inputRef: E(() => z2.value?.$el) }), (e3, t3) => (y(), w(c(ct), g(c(m2), { id: c(T2), "default-value": c(o2).defaultValue, "model-value": c(s2), min: c(o2).min, max: c(o2).max, step: c(o2).step, "data-slot": `root`, class: L2.value.root({ class: [c(o2).ui?.root, c(o2).class] }), name: c(j2), disabled: c(N2), "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => se2(e4)) }), { default: x(() => [r(c($), g({ ...e3.$attrs, ...c(P2) }, { ref_key: `inputRef`, ref: z2, placeholder: c(o2).placeholder, required: c(o2).required, "data-slot": `base`, class: L2.value.base({ class: c(o2).ui?.base }), onBlur: ue2, onFocus: c(b2) }), null, 16, [`placeholder`, `required`, `class`, `onFocus`]), c(o2).increment ? (y(), p(`div`, { key: 0, "data-slot": `increment`, class: d(L2.value.increment({ class: c(o2).ui?.increment })) }, [r(c(ut), { "as-child": ``, disabled: c(N2) || c(o2).incrementDisabled }, { default: x(() => [D(e3.$slots, `increment`, {}, () => [r(le, g({ icon: re2.value, color: c(k2), size: I2.value, variant: `link`, "aria-label": c(u2)(`inputNumber.increment`) }, typeof c(o2).increment == `object` ? c(o2).increment : void 0), null, 16, [`icon`, `color`, `size`, `aria-label`])])]), _: 3 }, 8, [`disabled`])], 2)) : O(``, true), c(o2).decrement ? (y(), p(`div`, { key: 1, "data-slot": `decrement`, class: d(L2.value.decrement({ class: c(o2).ui?.decrement })) }, [r(c(lt), { "as-child": ``, disabled: c(N2) || c(o2).decrementDisabled }, { default: x(() => [D(e3.$slots, `decrement`, {}, () => [r(le, g({ icon: ae2.value, color: c(k2), size: I2.value, variant: `link`, "aria-label": c(u2)(`inputNumber.decrement`) }, typeof c(o2).decrement == `object` ? c(o2).decrement : void 0), null, 16, [`icon`, `color`, `size`, `aria-label`])])]), _: 3 }, 8, [`disabled`])], 2)) : O(``, true)]), _: 3 }, 16, [`id`, `default-value`, `model-value`, `min`, `max`, `step`, `class`, `name`, `disabled`]));
} }), St = { slots: { root: `relative inline-flex items-center`, base: [`rounded-md`, `transition-colors`], leading: `absolute inset-y-0 start-0 flex items-center`, leadingIcon: `shrink-0 text-dimmed`, leadingAvatar: `shrink-0`, leadingAvatarSize: ``, trailing: `group absolute inset-y-0 end-0 flex items-center disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none`, trailingIcon: `shrink-0 text-dimmed`, trailingClear: `p-0`, arrow: `fill-bg stroke-default`, content: `max-h-[min(15rem,var(--reka-combobox-content-available-height,15rem))] w-(--reka-combobox-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-combobox-content-transform-origin) pointer-events-auto flex flex-col`, viewport: `relative scroll-py-1 overflow-y-auto flex-1`, group: `p-1 isolate`, empty: `text-center text-muted`, label: `font-semibold text-highlighted`, separator: `-mx-1 my-1 h-px bg-border`, item: [`group relative w-full flex items-start gap-1.5 p-1.5 text-sm select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50`, `transition-colors before:transition-colors`], itemLeadingIcon: [`shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default`, `transition-colors`], itemLeadingAvatar: `shrink-0`, itemLeadingAvatarSize: ``, itemLeadingChip: `shrink-0`, itemLeadingChipSize: ``, itemTrailing: `ms-auto inline-flex gap-1.5 items-center`, itemTrailingIcon: `shrink-0`, itemWrapper: `flex-1 flex flex-col min-w-0`, itemLabel: `truncate`, itemDescription: `truncate text-muted`, tagsItem: `px-1.5 py-0.5 rounded-sm font-medium inline-flex items-center gap-0.5 ring ring-inset ring-accented bg-elevated text-default data-disabled:cursor-not-allowed data-disabled:opacity-75`, tagsItemText: `truncate`, tagsItemDelete: [`inline-flex items-center rounded-xs text-dimmed hover:text-default hover:bg-accented/75 disabled:pointer-events-none`, `transition-colors`], tagsItemDeleteIcon: `shrink-0`, tagsInput: `flex-1 border-0 bg-transparent placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75` }, variants: { fieldGroup: { horizontal: { root: `group has-focus-visible:z-[1]`, base: `group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none` }, vertical: { root: `group has-focus-visible:z-[1]`, base: `group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none` } }, size: { xs: { base: `px-2 py-1 text-sm/4 gap-1`, leading: `ps-2`, trailing: `pe-2`, leadingIcon: `size-4`, leadingAvatarSize: `3xs`, trailingIcon: `size-4`, label: `p-1 text-[10px]/3 gap-1`, item: `p-1 text-xs gap-1`, itemLeadingIcon: `size-4`, itemLeadingAvatarSize: `3xs`, itemLeadingChip: `size-4`, itemLeadingChipSize: `sm`, itemTrailingIcon: `size-4`, tagsItem: `text-[10px]/3`, tagsItemDeleteIcon: `size-3`, empty: `p-2 text-xs` }, sm: { base: `px-2.5 py-1.5 text-sm/4 gap-1.5`, leading: `ps-2.5`, trailing: `pe-2.5`, leadingIcon: `size-4`, leadingAvatarSize: `3xs`, trailingIcon: `size-4`, label: `p-1.5 text-[10px]/3 gap-1.5`, item: `p-1.5 text-xs gap-1.5`, itemLeadingIcon: `size-4`, itemLeadingAvatarSize: `3xs`, itemLeadingChip: `size-4`, itemLeadingChipSize: `sm`, itemTrailingIcon: `size-4`, tagsItem: `text-[10px]/3`, tagsItemDeleteIcon: `size-3`, empty: `p-2.5 text-xs` }, md: { base: `px-2.5 py-1.5 text-base/5 gap-1.5`, leading: `ps-2.5`, trailing: `pe-2.5`, leadingIcon: `size-5`, leadingAvatarSize: `2xs`, trailingIcon: `size-5`, label: `p-1.5 text-xs gap-1.5`, item: `p-1.5 text-sm gap-1.5`, itemLeadingIcon: `size-5`, itemLeadingAvatarSize: `2xs`, itemLeadingChip: `size-5`, itemLeadingChipSize: `md`, itemTrailingIcon: `size-5`, tagsItem: `text-xs`, tagsItemDeleteIcon: `size-3.5`, empty: `p-2.5 text-sm` }, lg: { base: `px-3 py-2 text-base/5 gap-2`, leading: `ps-3`, trailing: `pe-3`, leadingIcon: `size-5`, leadingAvatarSize: `2xs`, trailingIcon: `size-5`, label: `p-2 text-xs gap-2`, item: `p-2 text-sm gap-2`, itemLeadingIcon: `size-5`, itemLeadingAvatarSize: `2xs`, itemLeadingChip: `size-5`, itemLeadingChipSize: `md`, itemTrailingIcon: `size-5`, tagsItem: `text-xs`, tagsItemDeleteIcon: `size-3.5`, empty: `p-3 text-sm` }, xl: { base: `px-3 py-2 text-base gap-2`, leading: `ps-3`, trailing: `pe-3`, leadingIcon: `size-6`, leadingAvatarSize: `xs`, trailingIcon: `size-6`, label: `p-2 text-sm gap-2`, item: `p-2 text-base gap-2`, itemLeadingIcon: `size-6`, itemLeadingAvatarSize: `xs`, itemLeadingChip: `size-6`, itemLeadingChipSize: `lg`, itemTrailingIcon: `size-6`, tagsItem: `text-sm`, tagsItemDeleteIcon: `size-4`, empty: `p-3 text-base` } }, variant: { outline: `text-highlighted bg-default ring ring-inset ring-accented`, soft: `text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50`, subtle: `text-highlighted bg-elevated ring ring-inset ring-accented`, ghost: `text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent`, none: `text-highlighted bg-transparent focus:outline-none` }, color: { primary: ``, secondary: ``, success: ``, info: ``, warning: ``, error: ``, neutral: `` }, leading: { true: `` }, trailing: { true: `` }, loading: { true: `` }, highlight: { true: `` }, fixed: { false: `` }, type: { file: `file:me-1.5 file:font-medium file:text-muted file:outline-none` }, virtualize: { true: { viewport: `p-1 isolate` }, false: { viewport: `divide-y divide-default` } }, multiple: { true: { root: `flex-wrap` }, false: { base: `w-full border-0 placeholder:text-dimmed disabled:cursor-not-allowed disabled:opacity-75` } } }, compoundVariants: [{ variant: `soft`, multiple: true, class: `has-focus:bg-elevated has-focus-visible:outline-3` }, { variant: `ghost`, multiple: true, class: `has-focus:bg-elevated has-focus-visible:outline-3` }, { color: `primary`, multiple: true, variant: [`outline`, `subtle`], class: `has-focus-visible:outline-3 has-focus-visible:ring-primary` }, { color: `secondary`, multiple: true, variant: [`outline`, `subtle`], class: `has-focus-visible:outline-3 has-focus-visible:ring-secondary` }, { color: `success`, multiple: true, variant: [`outline`, `subtle`], class: `has-focus-visible:outline-3 has-focus-visible:ring-success` }, { color: `info`, multiple: true, variant: [`outline`, `subtle`], class: `has-focus-visible:outline-3 has-focus-visible:ring-info` }, { color: `warning`, multiple: true, variant: [`outline`, `subtle`], class: `has-focus-visible:outline-3 has-focus-visible:ring-warning` }, { color: `error`, multiple: true, variant: [`outline`, `subtle`], class: `has-focus-visible:outline-3 has-focus-visible:ring-error` }, { color: `neutral`, multiple: true, variant: [`outline`, `subtle`], class: `has-focus-visible:outline-3 has-focus-visible:ring-inverted` }, { color: `primary`, variant: [`outline`, `subtle`], class: `outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary` }, { color: `secondary`, variant: [`outline`, `subtle`], class: `outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary` }, { color: `success`, variant: [`outline`, `subtle`], class: `outline-success/25 focus-visible:outline-3 focus-visible:ring-success` }, { color: `info`, variant: [`outline`, `subtle`], class: `outline-info/25 focus-visible:outline-3 focus-visible:ring-info` }, { color: `warning`, variant: [`outline`, `subtle`], class: `outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning` }, { color: `error`, variant: [`outline`, `subtle`], class: `outline-error/25 focus-visible:outline-3 focus-visible:ring-error` }, { color: `primary`, variant: [`soft`, `ghost`], class: `outline-primary/25 focus-visible:outline-3` }, { color: `secondary`, variant: [`soft`, `ghost`], class: `outline-secondary/25 focus-visible:outline-3` }, { color: `success`, variant: [`soft`, `ghost`], class: `outline-success/25 focus-visible:outline-3` }, { color: `info`, variant: [`soft`, `ghost`], class: `outline-info/25 focus-visible:outline-3` }, { color: `warning`, variant: [`soft`, `ghost`], class: `outline-warning/25 focus-visible:outline-3` }, { color: `error`, variant: [`soft`, `ghost`], class: `outline-error/25 focus-visible:outline-3` }, { color: `primary`, highlight: true, class: `ring ring-inset ring-primary` }, { color: `secondary`, highlight: true, class: `ring ring-inset ring-secondary` }, { color: `success`, highlight: true, class: `ring ring-inset ring-success` }, { color: `info`, highlight: true, class: `ring ring-inset ring-info` }, { color: `warning`, highlight: true, class: `ring ring-inset ring-warning` }, { color: `error`, highlight: true, class: `ring ring-inset ring-error` }, { color: `neutral`, variant: [`outline`, `subtle`], class: `outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted` }, { color: `neutral`, variant: [`soft`, `ghost`], class: `outline-inverted/25 focus-visible:outline-3` }, { color: `neutral`, highlight: true, class: `ring ring-inset ring-inverted` }, { leading: true, size: `xs`, class: `ps-7` }, { leading: true, size: `sm`, class: `ps-8` }, { leading: true, size: `md`, class: `ps-9` }, { leading: true, size: `lg`, class: `ps-10` }, { leading: true, size: `xl`, class: `ps-11` }, { trailing: true, size: `xs`, class: `pe-7` }, { trailing: true, size: `sm`, class: `pe-8` }, { trailing: true, size: `md`, class: `pe-9` }, { trailing: true, size: `lg`, class: `pe-10` }, { trailing: true, size: `xl`, class: `pe-11` }, { loading: true, leading: true, class: { leadingIcon: `animate-spin` } }, { loading: true, leading: false, trailing: true, class: { trailingIcon: `animate-spin` } }, { fixed: false, size: `xs`, class: `md:text-xs` }, { fixed: false, size: `sm`, class: `md:text-xs` }, { fixed: false, size: `md`, class: `md:text-sm` }, { fixed: false, size: `lg`, class: `md:text-sm` }], defaultVariants: { size: `md`, color: `primary`, variant: `outline` } }, Ct = Object.assign({ inheritAttrs: false }, { __name: `InputMenu`, props: e({ as: { type: null, required: false }, id: { type: String, required: false }, type: { type: null, required: false, default: `text` }, placeholder: { type: String, required: false }, color: { type: null, required: false }, variant: { type: null, required: false }, size: { type: null, required: false }, required: { type: Boolean, required: false }, autofocus: { type: Boolean, required: false }, autofocusDelay: { type: Number, required: false, default: 0 }, trailingIcon: { type: null, required: false }, selectedIcon: { type: null, required: false }, deleteIcon: { type: null, required: false }, clear: { type: [Boolean, Object], required: false }, clearIcon: { type: null, required: false }, content: { type: Object, required: false }, arrow: { type: [Boolean, Object], required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, virtualize: { type: [Boolean, Object], required: false, default: false }, valueKey: { type: null, required: false }, labelKey: { type: null, required: false, default: `label` }, descriptionKey: { type: null, required: false, default: `description` }, items: { type: null, required: false }, defaultValue: { type: null, required: false }, modelValue: { type: null, required: false }, modelModifiers: { type: null, required: false }, multiple: { type: Boolean, required: false }, highlight: { type: Boolean, required: false }, fixed: { type: Boolean, required: false }, mode: { type: String, required: false, default: `combobox` }, createItem: { type: [Boolean, String, Object], required: false }, filterFields: { type: Array, required: false }, ignoreFilter: { type: Boolean, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, open: { type: Boolean, required: false }, defaultOpen: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, name: { type: String, required: false }, resetSearchTermOnBlur: { type: Boolean, required: false, default: true }, resetSearchTermOnSelect: { type: Boolean, required: false, default: true }, resetModelValueOnClear: { type: Boolean, required: false, default: true }, highlightOnHover: { type: Boolean, required: false }, openOnClick: { type: Boolean, required: false }, openOnFocus: { type: Boolean, required: false }, by: { type: [String, Function], required: false }, icon: { type: null, required: false }, avatar: { type: Object, required: false }, leading: { type: Boolean, required: false }, leadingIcon: { type: null, required: false }, trailing: { type: Boolean, required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: null, required: false } }, { searchTerm: { type: String, default: `` }, searchTermModifiers: {} }), emits: e([`change`, `blur`, `focus`, `create`, `clear`, `highlight`, `remove-tag`, `update:modelValue`, `update:open`], [`update:searchTerm`]), setup(e2, { expose: u2, emit: v2 }) {
  let A2 = e2, M2 = v2, I2 = s(), V2 = ne(`inputMenu`, A2), H2 = a(e2, `searchTerm`, { type: String, default: `` }), { t: me2 } = ee(), U2 = ie(), { filterGroups: he2 } = Re(), W2 = _(() => V2.mode === `autocomplete`), _e2 = pe(V2, `as`, `modelValue`, `defaultValue`, `open`, `defaultOpen`, `required`, `multiple`, `resetSearchTermOnBlur`, `resetSearchTermOnSelect`, `resetModelValueOnClear`, `highlightOnHover`, `openOnClick`, `openOnFocus`, `by`), ye2 = ge(_e2, `multiple`, `resetSearchTermOnSelect`, `resetModelValueOnClear`, `by`), be2 = de(_(() => W2.value ? ye2 : _e2), M2), G2 = _(() => W2.value ? Ae : ke), K2 = xe(E(() => V2.portal)), Se2 = E(() => F(V2.content, { side: `bottom`, sideOffset: 8, collisionPadding: 8, position: `popper` })), Ce2 = E(() => F(V2.arrow, { rounded: true })), we2 = _(() => typeof V2.clear == `object` ? V2.clear : {}), Te2 = E(() => V2.virtualize ? F(typeof V2.virtualize == `boolean` ? {} : V2.virtualize, { estimateSize: Be(X2.value, Ge2.value || `md`, V2.descriptionKey, !!I2[`item-description`]) }) : false), { emitFormBlur: Ee2, emitFormFocus: De2, emitFormChange: Oe2, emitFormInput: je2, size: Me2, color: Ne2, id: Pe2, name: Fe2, highlight: Ie2, disabled: Le2, ariaAttrs: ze2 } = ce(A2), { orientation: Ve2, size: He2 } = oe(A2), { isLeading: q2, isTrailing: Ue2, leadingIconName: J2, trailingIconName: We2 } = z(E(() => F(V2, { trailingIcon: U2.ui.icons.chevronDown }))), Ge2 = _(() => He2.value || Me2.value), [Ke2, qe2] = ve(), [Je2, Ye2] = ve({ props: { item: { type: [Object, String, Number, Boolean], required: true }, index: { type: Number, required: false } } }), Y2 = _(() => R({ extend: R(St), ...U2.ui?.inputMenu || {} })({ color: Ne2.value ?? V2.color, variant: V2.variant, size: Ge2?.value ?? V2.size, loading: V2.loading, highlight: Ie2.value ?? V2.highlight, fixed: V2.fixed, leading: q2.value || !!V2.avatar || !!I2.leading, trailing: Ue2.value || !!I2.trailing, multiple: V2.multiple, fieldGroup: Ve2.value, virtualize: !!V2.virtualize })), Xe2 = _(() => Qe2.value.flatMap((e3) => e3));
  function Ze2(e3) {
    return fe(Xe2.value, e3, { labelKey: V2.labelKey, valueKey: V2.valueKey, by: V2.by }) ?? ``;
  }
  let Qe2 = _(() => V2.items?.length ? re(V2.items) ? V2.items : [V2.items] : []), $e2 = _(() => {
    if (V2.ignoreFilter || !H2.value) return Qe2.value;
    let e3 = Array.isArray(V2.filterFields) ? V2.filterFields : [V2.labelKey];
    return he2(Qe2.value, H2.value, { fields: e3, isStructural: (e4) => $2(e4) && !!e4.type && [`label`, `separator`].includes(e4.type) });
  }), X2 = _(() => $e2.value.flatMap((e3) => e3)), Z2 = _(() => {
    if (!V2.createItem || !H2.value) return false;
    let e3 = V2.valueKey ? { [V2.valueKey]: H2.value } : H2.value;
    return typeof V2.createItem == `object` && V2.createItem.when === `always` || V2.createItem === `always` ? !X2.value.find((t2) => te(t2, e3, V2.by ?? V2.valueKey)) : !X2.value.length;
  }), et2 = _(() => typeof V2.createItem == `object` ? V2.createItem.position : `bottom`), Q2 = l(`inputRef`);
  function tt2() {
    V2.autofocus && Q2.value?.$el?.focus();
  }
  h(() => {
    C(() => {
      W2.value ? H2.value = String(V2.modelValue ?? V2.defaultValue ?? ``) : H2.value = ``;
    }), setTimeout(() => {
      tt2();
    }, V2.autofocusDelay);
  }), o(() => V2.modelValue, (e3) => {
    W2.value && (H2.value = String(e3 ?? ``));
  });
  function nt2(e3) {
    n(V2.modelValue) !== e3 && (V2.modelModifiers?.trim && (typeof e3 == `string` || e3 == null) && (e3 = e3?.trim() ?? null), V2.modelModifiers?.number && (e3 = P(e3)), V2.modelModifiers?.nullable && (e3 ?? (e3 = null)), V2.modelModifiers?.optional && !V2.modelModifiers?.nullable && e3 !== null && (e3 ?? (e3 = void 0)), M2(`change`, new Event(`change`, { target: { value: e3 } })), Oe2(), je2(), W2.value ? H2.value = String(e3 ?? ``) : V2.resetSearchTermOnSelect && (H2.value = ``));
  }
  function rt2(e3) {
    W2.value || (H2.value = e3);
  }
  function it2(e3) {
    M2(`blur`, e3), Ee2();
  }
  function at2(e3) {
    M2(`focus`, e3), De2();
  }
  let ot2 = T(false);
  function st2(e3) {
    ot2.value = e3;
    let t2;
    e3 ? (M2(`focus`, new FocusEvent(`focus`)), De2(), clearTimeout(t2)) : (M2(`blur`, new FocusEvent(`blur`)), Ee2(), !W2.value && V2.resetSearchTermOnBlur && (t2 = setTimeout(() => {
      H2.value = ``;
    }, 100)));
  }
  function ct2(e3, t2) {
    if (V2.multiple) {
      let n2 = t2.filter((t3) => !N(t3, e3));
      M2(`update:modelValue`, n2), M2(`remove-tag`, e3), nt2(n2);
    }
  }
  function lt2(e3) {
    e3.preventDefault(), e3.stopPropagation(), M2(`create`, H2.value);
  }
  function ut2(e3, t2) {
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
  function dt2(e3) {
    return V2.multiple && Array.isArray(e3) ? e3.length === 0 : e3 == null || e3 === ``;
  }
  function ft2() {
    M2(`clear`);
  }
  let ht2 = l(`viewportRef`), gt2 = l(`comboboxRootRef`);
  return o(() => V2.items, async () => {
    ot2.value && (await C(), gt2.value?.highlightFirstItem?.());
  }, { flush: `post` }), u2({ inputRef: E(() => Q2.value?.$el), viewportRef: E(() => ht2.value) }), (e3, n2) => (y(), p(b, null, [r(c(Ke2), null, { default: x(() => [r(c(G2).Item, { "data-slot": `item`, class: d(Y2.value.item({ class: c(V2).ui?.item })), value: H2.value, onSelect: lt2 }, { default: x(() => [f(`span`, { "data-slot": `itemLabel`, class: d(Y2.value.itemLabel({ class: c(V2).ui?.itemLabel })) }, [D(e3.$slots, `create-item-label`, { item: H2.value }, () => [i(S(c(me2)(`inputMenu.create`, { label: H2.value })), 1)])], 2)]), _: 3 }, 8, [`class`, `value`])]), _: 3 }), r(c(Je2), null, { default: x(({ item: t2, index: n3 }) => [$2(t2) && t2.type === `label` ? (y(), w(c(G2).Label, { key: 0, "data-slot": `label`, class: d(Y2.value.label({ class: [c(V2).ui?.label, t2.ui?.label, t2.class] })) }, { default: x(() => [i(S(c(L)(t2, c(V2).labelKey)), 1)]), _: 2 }, 1032, [`class`])) : $2(t2) && t2.type === `separator` ? (y(), w(c(G2).Separator, { key: 1, "data-slot": `separator`, class: d(Y2.value.separator({ class: [c(V2).ui?.separator, t2.ui?.separator, t2.class] })) }, null, 8, [`class`])) : (y(), w(c(G2).Item, { key: 2, "data-slot": `item`, class: d(Y2.value.item({ class: [c(V2).ui?.item, $2(t2) && t2.ui?.item, $2(t2) && t2.class] })), disabled: $2(t2) && t2.disabled, value: c(V2).valueKey && $2(t2) ? c(L)(t2, c(V2).valueKey) : t2, onSelect: (e4) => ut2(e4, t2) }, { default: x(() => [D(e3.$slots, `item`, { item: t2, index: n3, ui: Y2.value }, () => [D(e3.$slots, `item-leading`, { item: t2, index: n3, ui: Y2.value }, () => [$2(t2) && t2.icon ? (y(), w(B, { key: 0, name: t2.icon, "data-slot": `itemLeadingIcon`, class: d(Y2.value.itemLeadingIcon({ class: [c(V2).ui?.itemLeadingIcon, t2.ui?.itemLeadingIcon] })) }, null, 8, [`name`, `class`])) : $2(t2) && t2.avatar ? (y(), w(ae, g({ key: 1, size: t2.ui?.itemLeadingAvatarSize || c(V2).ui?.itemLeadingAvatarSize || Y2.value.itemLeadingAvatarSize() }, t2.avatar, { "data-slot": `itemLeadingAvatar`, class: Y2.value.itemLeadingAvatar({ class: [c(V2).ui?.itemLeadingAvatar, t2.ui?.itemLeadingAvatar] }) }), null, 16, [`size`, `class`])) : $2(t2) && t2.chip ? (y(), w(ue, g({ key: 2, size: t2.ui?.itemLeadingChipSize || c(V2).ui?.itemLeadingChipSize || Y2.value.itemLeadingChipSize(), inset: ``, standalone: `` }, t2.chip, { "data-slot": `itemLeadingChip`, class: Y2.value.itemLeadingChip({ class: [c(V2).ui?.itemLeadingChip, t2.ui?.itemLeadingChip] }) }), null, 16, [`size`, `class`])) : O(``, true)]), f(`span`, { "data-slot": `itemWrapper`, class: d(Y2.value.itemWrapper({ class: [c(V2).ui?.itemWrapper, $2(t2) && t2.ui?.itemWrapper] })) }, [f(`span`, { "data-slot": `itemLabel`, class: d(Y2.value.itemLabel({ class: [c(V2).ui?.itemLabel, $2(t2) && t2.ui?.itemLabel] })) }, [D(e3.$slots, `item-label`, { item: t2, index: n3 }, () => [i(S($2(t2) ? c(L)(t2, c(V2).labelKey) : t2), 1)])], 2), $2(t2) && (c(L)(t2, c(V2).descriptionKey) || I2[`item-description`]) ? (y(), p(`span`, { key: 0, "data-slot": `itemDescription`, class: d(Y2.value.itemDescription({ class: [c(V2).ui?.itemDescription, $2(t2) && t2.ui?.itemDescription] })) }, [D(e3.$slots, `item-description`, { item: t2, index: n3 }, () => [i(S(c(L)(t2, c(V2).descriptionKey)), 1)])], 2)) : O(``, true)], 2), f(`span`, { "data-slot": `itemTrailing`, class: d(Y2.value.itemTrailing({ class: [c(V2).ui?.itemTrailing, $2(t2) && t2.ui?.itemTrailing] })) }, [D(e3.$slots, `item-trailing`, { item: t2, index: n3, ui: Y2.value }), W2.value ? O(``, true) : (y(), w(c(G2).ItemIndicator, { key: 0, "as-child": `` }, { default: x(() => [r(B, { name: c(V2).selectedIcon || c(U2).ui.icons.check, "data-slot": `itemTrailingIcon`, class: d(Y2.value.itemTrailingIcon({ class: [c(V2).ui?.itemTrailingIcon, $2(t2) && t2.ui?.itemTrailingIcon] })) }, null, 8, [`name`, `class`])]), _: 2 }, 1024))], 2)])]), _: 2 }, 1032, [`class`, `disabled`, `value`, `onSelect`]))]), _: 3 }), r(c(G2).Root, g({ ref_key: `comboboxRootRef`, ref: gt2 }, c(be2), { name: c(Fe2), disabled: c(Le2), "data-slot": `root`, class: Y2.value.root({ class: [c(V2).ui?.root, c(V2).class] }), "as-child": !!c(V2).multiple && !W2.value, "ignore-filter": ``, "onUpdate:modelValue": nt2, "onUpdate:open": st2 }), { default: x(({ modelValue: a2, open: o2 }) => [r(c(G2).Anchor, { "as-child": !c(V2).multiple, "data-slot": `base`, class: d(Y2.value.base({ class: c(V2).ui?.base })) }, { default: x(() => [c(V2).multiple && !W2.value ? (y(), w(c(pt), { key: 0, "model-value": a2, disabled: c(Le2), required: c(V2).required, delimiter: ``, "as-child": ``, onBlur: it2, onFocus: at2, onRemoveTag: (e4) => ct2(e4, a2) }, { default: x(({ modelValue: t2 }) => [(y(true), p(b, null, m(t2, (t3, n3) => (y(), w(c(_t), { key: n3, value: t3, "data-slot": `tagsItem`, class: d(Y2.value.tagsItem({ class: [c(V2).ui?.tagsItem, $2(t3) && t3.ui?.tagsItem] })) }, { default: x(() => [r(c(yt), { "data-slot": `tagsItemText`, class: d(Y2.value.tagsItemText({ class: [c(V2).ui?.tagsItemText, $2(t3) && t3.ui?.tagsItemText] })) }, { default: x(() => [D(e3.$slots, `tags-item-text`, { item: t3, index: n3 }, () => [i(S(Ze2(t3)), 1)])]), _: 2 }, 1032, [`class`]), r(c(vt), { "data-slot": `tagsItemDelete`, class: d(Y2.value.tagsItemDelete({ class: [c(V2).ui?.tagsItemDelete, $2(t3) && t3.ui?.tagsItemDelete] })), disabled: c(Le2) }, { default: x(() => [D(e3.$slots, `tags-item-delete`, { item: t3, index: n3, ui: Y2.value }, () => [r(B, { name: c(V2).deleteIcon || c(U2).ui.icons.close, "data-slot": `tagsItemDeleteIcon`, class: d(Y2.value.tagsItemDeleteIcon({ class: [c(V2).ui?.tagsItemDeleteIcon, $2(t3) && t3.ui?.tagsItemDeleteIcon] })) }, null, 8, [`name`, `class`])])]), _: 2 }, 1032, [`class`, `disabled`])]), _: 2 }, 1032, [`value`, `class`]))), 128)), r(c(G2).Input, { modelValue: H2.value, "onUpdate:modelValue": n2[1] || (n2[1] = (e4) => H2.value = e4), "as-child": `` }, { default: x(() => [r(c(mt), g({ id: c(Pe2), ref_key: `inputRef`, ref: Q2 }, { ...e3.$attrs, ...c(ze2) }, { placeholder: c(V2).placeholder, "data-slot": `tagsInput`, class: Y2.value.tagsInput({ class: c(V2).ui?.tagsInput }), onChange: n2[0] || (n2[0] = j(() => {
  }, [`stop`])) }), null, 16, [`id`, `placeholder`, `class`])]), _: 1 }, 8, [`modelValue`])]), _: 3 }, 8, [`model-value`, `disabled`, `required`, `onRemoveTag`])) : (y(), w(c(G2).Input, g({ key: 1, id: c(Pe2), ref_key: `inputRef`, ref: Q2 }, { ...W2.value ? {} : { displayValue: Ze2 }, ...e3.$attrs, ...c(ze2) }, { type: c(V2).type, placeholder: c(V2).placeholder, required: c(V2).required, onBlur: it2, onFocus: at2, onChange: n2[2] || (n2[2] = j(() => {
  }, [`stop`])), "onUpdate:modelValue": rt2 }), null, 16, [`id`, `type`, `placeholder`, `required`])), c(q2) || c(V2).avatar || I2.leading ? (y(), p(`span`, { key: 2, "data-slot": `leading`, class: d(Y2.value.leading({ class: c(V2).ui?.leading })) }, [D(e3.$slots, `leading`, { modelValue: a2, open: o2, ui: Y2.value }, () => [c(q2) && c(J2) ? (y(), w(B, { key: 0, name: c(J2), "data-slot": `leadingIcon`, class: d(Y2.value.leadingIcon({ class: c(V2).ui?.leadingIcon })) }, null, 8, [`name`, `class`])) : c(V2).avatar ? (y(), w(ae, g({ key: 1, size: c(V2).ui?.itemLeadingAvatarSize || Y2.value.itemLeadingAvatarSize() }, c(V2).avatar, { "data-slot": `itemLeadingAvatar`, class: Y2.value.itemLeadingAvatar({ class: c(V2).ui?.itemLeadingAvatar }) }), null, 16, [`size`, `class`])) : O(``, true)])], 2)) : O(``, true), c(Ue2) || I2.trailing || c(V2).clear ? (y(), w(c(G2).Trigger, { key: 3, "data-slot": `trailing`, class: d(Y2.value.trailing({ class: c(V2).ui?.trailing })) }, { default: x(() => [D(e3.$slots, `trailing`, { modelValue: a2, open: o2, ui: Y2.value }, () => [c(V2).clear && !dt2(a2) ? (y(), w(c(G2).Cancel, { key: 0, "as-child": `` }, { default: x(() => [r(le, g({ as: `span`, icon: c(V2).clearIcon || c(U2).ui.icons.close, size: Ge2.value, variant: `link`, color: `neutral`, tabindex: `-1` }, we2.value, { "data-slot": `trailingClear`, class: Y2.value.trailingClear({ class: c(V2).ui?.trailingClear }), onClick: j(ft2, [`stop`]) }), null, 16, [`icon`, `size`, `class`])]), _: 1 })) : c(We2) ? (y(), w(B, { key: 1, name: c(We2), "data-slot": `trailingIcon`, class: d(Y2.value.trailingIcon({ class: c(V2).ui?.trailingIcon })) }, null, 8, [`name`, `class`])) : O(``, true)])]), _: 2 }, 1032, [`class`])) : O(``, true)]), _: 2 }, 1032, [`as-child`, `class`]), r(c(G2).Portal, t(k(c(K2))), { default: x(() => [r(c(se), null, { default: x(() => [r(c(G2).Content, g({ "data-slot": `content`, class: Y2.value.content({ class: c(V2).ui?.content }) }, Se2.value, { onFocusOutside: n2[3] || (n2[3] = j(() => {
  }, [`prevent`])) }), { default: x(() => [D(e3.$slots, `content-top`), r(c(G2).Empty, { "data-slot": `empty`, class: d(Y2.value.empty({ class: c(V2).ui?.empty })) }, { default: x(() => [D(e3.$slots, `empty`, { searchTerm: H2.value }, () => [i(S(H2.value ? c(me2)(`inputMenu.noMatch`, { searchTerm: H2.value }) : c(me2)(`inputMenu.noData`)), 1)])]), _: 3 }, 8, [`class`]), f(`div`, { ref_key: `viewportRef`, ref: ht2, role: `presentation`, "data-slot": `viewport`, class: d(Y2.value.viewport({ class: c(V2).ui?.viewport })) }, [c(V2).virtualize ? (y(), p(b, { key: 0 }, [Z2.value && et2.value === `top` ? (y(), w(c(qe2), { key: 0 })) : O(``, true), r(c(G2).Virtualizer, g({ options: X2.value, "text-content": (e4) => $2(e4) ? c(L)(e4, c(V2).labelKey) : String(e4) }, Te2.value), { default: x(({ option: e4, virtualItem: t2 }) => [r(c(Ye2), { item: e4, index: t2.index }, null, 8, [`item`, `index`])]), _: 1 }, 16, [`options`, `text-content`]), Z2.value && et2.value === `bottom` ? (y(), w(c(qe2), { key: 1 })) : O(``, true)], 64)) : (y(), p(b, { key: 1 }, [Z2.value && et2.value === `top` ? (y(), w(c(G2).Group, { key: 0, "data-slot": `group`, class: d(Y2.value.group({ class: c(V2).ui?.group })) }, { default: x(() => [r(c(qe2))]), _: 1 }, 8, [`class`])) : O(``, true), (y(true), p(b, null, m($e2.value, (e4, t2) => (y(), w(c(G2).Group, { key: `group-${t2}`, "data-slot": `group`, class: d(Y2.value.group({ class: c(V2).ui?.group })) }, { default: x(() => [(y(true), p(b, null, m(e4, (e5, n3) => (y(), w(c(Ye2), { key: `group-${t2}-${n3}`, item: e5, index: n3 }, null, 8, [`item`, `index`]))), 128))]), _: 2 }, 1032, [`class`]))), 128)), Z2.value && et2.value === `bottom` ? (y(), w(c(G2).Group, { key: 1, "data-slot": `group`, class: d(Y2.value.group({ class: c(V2).ui?.group })) }, { default: x(() => [r(c(qe2))]), _: 1 }, 8, [`class`])) : O(``, true)], 64))], 2), D(e3.$slots, `content-bottom`), c(V2).arrow ? (y(), w(c(G2).Arrow, g({ key: 0 }, Ce2.value, { "data-slot": `arrow`, class: Y2.value.arrow({ class: c(V2).ui?.arrow }) }), null, 16, [`class`])) : O(``, true)]), _: 3 }, 16, [`class`])]), _: 3 })]), _: 3 }, 16)]), _: 3 }, 16, [`name`, `disabled`, `class`, `as-child`])], 64));
} }), wt = { class: `grid gap-4` }, Tt = { class: `text-base text-pretty font-semibold text-highlighted` }, Et = { class: `pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal` }, Dt = { class: `inline-flex bg-default px-1` }, Ot = { class: `pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal` }, kt = { class: `inline-flex bg-default px-1` }, At = { class: `peer relative inline-flex items-center w-full` }, jt = { class: `pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal` }, Mt = { class: `inline-flex bg-default px-1` }, Nt = { class: `grid gap-4` }, Pt = { class: `text-base text-pretty font-semibold text-highlighted` }, Ft = { class: `pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal` }, It = { class: `inline-flex bg-default px-1` }, Lt = { class: `pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal` }, Rt = { class: `inline-flex bg-default px-1` }, zt = { class: `peer relative inline-flex items-center w-full` }, Bt = { class: `pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal` }, Vt = { class: `inline-flex bg-default px-1` }, Ht = { class: `grid gap-4` }, Ut = { class: `text-base text-pretty font-semibold text-highlighted` }, Wt = { class: `grid grid-cols-1 md:grid-cols-2 gap-4` }, Gt = { class: `peer relative inline-flex items-center w-full` }, Kt = { class: `pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal` }, qt = { class: `inline-flex bg-default px-1` }, Jt = { class: `peer relative inline-flex items-center w-full` }, Yt = { class: `pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal` }, Xt = { class: `inline-flex bg-default px-1` }, Zt = { class: `grid gap-2.5 grid-cols-5 text-center select-none text-default` }, Qt = [`onClick`], $t = { key: 0 }, en = { key: 1 }, tn = { key: 2 }, nn = [`onClick`], rn = { key: 0 }, an = { key: 1 }, on = { key: 2 }, sn = { class: `grid gap-4` }, cn = { class: `text-base text-pretty font-semibold text-highlighted` }, ln = { class: `pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal` }, un = { class: `inline-flex bg-default px-1` };
function dn(e2, t2, n2, r2) {
  let i2 = (t2 - e2) / (r2 - n2), a2 = -1 * n2 * i2 + e2;
  return `clamp(${parseFloat((e2 / 16).toFixed(4).toString())}rem, ${parseFloat((a2 / 16).toFixed(4).toString())}rem + ${parseFloat((i2 * 100).toFixed(4).toString())}vw, ${parseFloat((t2 / 16).toFixed(4).toString())}rem)`;
}
var fn = Ve(v({ __name: `FluidCalculatorSlideover`, emits: [`close`], setup(e2, { emit: t2 }) {
  let n2 = t2, i2 = T([{ name: wp.i18n.__(`Perfect Unison`, `windpress`), decimal: 1, fractional: [1, 1] }, { name: wp.i18n.__(`Minor Second`, `windpress`), decimal: 1.067, fractional: [16, 15] }, { name: wp.i18n.__(`Major Second`, `windpress`), decimal: 1.125, fractional: [9, 8] }, { name: wp.i18n.__(`Minor Third`, `windpress`), decimal: 1.2, fractional: [6, 5] }, { name: wp.i18n.__(`Major Third`, `windpress`), decimal: 1.25, fractional: [5, 4] }, { name: wp.i18n.__(`Perfect Fourth`, `windpress`), decimal: 1.333, fractional: [4, 3] }, { name: wp.i18n.__(`Tritone`, `windpress`), decimal: 1.414, fractional: [Math.sqrt(2), 1] }, { name: wp.i18n.__(`Perfect Fifth`, `windpress`), decimal: 1.5, fractional: [3, 2] }, { name: wp.i18n.__(`Minor Sixth`, `windpress`), decimal: 1.6, fractional: [8, 5] }, { name: wp.i18n.__(`Golden Ratio`, `windpress`), decimal: 1.618, fractional: [89, 55] }, { name: wp.i18n.__(`Major Sixth`, `windpress`), decimal: 1.667, fractional: [5, 3] }, { name: wp.i18n.__(`Minor Seventh`, `windpress`), decimal: 1.778, fractional: [16, 9] }, { name: wp.i18n.__(`Major Seventh`, `windpress`), decimal: 1.875, fractional: [15, 8] }, { name: wp.i18n.__(`Perfect Octave`, `windpress`), decimal: 2, fractional: [2, 1] }]), a2 = _(() => i2.value.map((e3) => ({ ...e3, label: `${e3.name} (${e3.decimal})` }))), o2 = ye(`windpress.ui.wizard.fluid-calculator`, { minSize: 18, maxSize: 20, minScale: a2.value[3], maxScale: a2.value[4], minViewport: 320, maxViewport: 1400, stepsSmaller: 4, stepsLarger: 4, miscPrefix: `fluid-` });
  function s2(e3, t3 = `min`) {
    if (!e3 || !e3.trim() || isNaN(parseFloat(e3))) return;
    let n3 = e3.split(`/`).map((e4) => e4.trim()), r2 = n3.reduce((e4, t4) => e4 * parseFloat(t4), 1), s3 = n3.map((e4) => {
      let t4 = e4.trim();
      return isNaN(parseFloat(t4)) ? 1 : parseFloat(t4);
    });
    if (isNaN(r2) || r2 <= 0 || (s3.length === 1 && s3.push(1), s3.some((e4) => isNaN(e4) || e4 <= 0))) return;
    i2.value.push({ name: e3, decimal: r2, fractional: s3 });
    let c2 = a2.value[a2.value.length - 1];
    t3 === `min` ? o2.value.minScale = c2 : o2.value.maxScale = c2;
  }
  function l2() {
    confirm(wp.i18n.__(`Are you sure you want to generate the fluid scale and import it?`, `windpress`)) && n2(`close`, { minSize: o2.value.minSize, maxSize: o2.value.maxSize, minScale: parseFloat(String(o2.value.minScale.decimal ?? o2.value.minScale.label)), maxScale: parseFloat(String(o2.value.maxScale.decimal ?? o2.value.maxScale.label)), minViewport: o2.value.minViewport, maxViewport: o2.value.maxViewport, stepsSmaller: o2.value.stepsSmaller, stepsLarger: o2.value.stepsLarger, miscPrefix: o2.value.miscPrefix });
  }
  return (e3, t3) => {
    let n3 = ze, i3 = Ct, u2 = Ie, h2 = xt, g2 = B, _2 = le, v2 = Le;
    return y(), w(v2, { title: e3.i18n.__(`Fluid Calculator`, `windpress`), ui: { content: `top-(--wp-admin--admin-bar--height) bottom-0` } }, { body: x(() => [f(`div`, wt, [f(`div`, Tt, S(c(wp.i18n.__)(`Min Viewport`, `windpress`)), 1), f(`div`, null, [r(n3, { modelValue: c(o2).minSize, "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => c(o2).minSize = e4), type: `number`, required: ``, ui: { trailing: `pointer-events-none`, base: `peer` }, class: `w-full` }, { trailing: x(() => [...t3[13] || (t3[13] = [f(`div`, { class: `text-xs text-muted tabular-nums` }, `px`, -1)])]), default: x(() => [f(`label`, Et, [f(`span`, Dt, S(e3.i18n.__(`Size`, `windpress`)), 1)])]), _: 1 }, 8, [`modelValue`])]), f(`div`, null, [r(n3, { modelValue: c(o2).minViewport, "onUpdate:modelValue": t3[1] || (t3[1] = (e4) => c(o2).minViewport = e4), type: `number`, required: ``, ui: { trailing: `pointer-events-none`, base: `peer` }, class: `w-full` }, { trailing: x(() => [...t3[14] || (t3[14] = [f(`div`, { class: `text-xs text-muted tabular-nums` }, `px`, -1)])]), default: x(() => [f(`label`, Ot, [f(`span`, kt, S(e3.i18n.__(`Viewport`, `windpress`)), 1)])]), _: 1 }, 8, [`modelValue`])]), f(`div`, null, [f(`div`, At, [r(i3, { modelValue: c(o2).minScale, "onUpdate:modelValue": t3[2] || (t3[2] = (e4) => c(o2).minScale = e4), "create-item": ``, items: a2.value, loading: false, onCreate: t3[3] || (t3[3] = (e4) => s2(e4, `min`)), class: `w-full` }, null, 8, [`modelValue`, `items`]), f(`label`, jt, [f(`span`, Mt, S(e3.i18n.__(`Scale ratio`, `windpress`)), 1)])])])]), r(u2, { class: `my-4` }), f(`div`, Nt, [f(`div`, Pt, S(c(wp.i18n.__)(`Max Viewport`, `windpress`)), 1), f(`div`, null, [r(n3, { modelValue: c(o2).maxSize, "onUpdate:modelValue": t3[4] || (t3[4] = (e4) => c(o2).maxSize = e4), type: `number`, required: ``, ui: { trailing: `pointer-events-none`, base: `peer` }, class: `w-full` }, { trailing: x(() => [...t3[15] || (t3[15] = [f(`div`, { class: `text-xs text-muted tabular-nums` }, `px`, -1)])]), default: x(() => [f(`label`, Ft, [f(`span`, It, S(e3.i18n.__(`Size`, `windpress`)), 1)])]), _: 1 }, 8, [`modelValue`])]), f(`div`, null, [r(n3, { modelValue: c(o2).maxViewport, "onUpdate:modelValue": t3[5] || (t3[5] = (e4) => c(o2).maxViewport = e4), type: `number`, required: ``, ui: { trailing: `pointer-events-none`, base: `peer` }, class: `w-full` }, { trailing: x(() => [...t3[16] || (t3[16] = [f(`div`, { class: `text-xs text-muted tabular-nums` }, `px`, -1)])]), default: x(() => [f(`label`, Lt, [f(`span`, Rt, S(e3.i18n.__(`Viewport`, `windpress`)), 1)])]), _: 1 }, 8, [`modelValue`])]), f(`div`, null, [f(`div`, zt, [r(i3, { modelValue: c(o2).maxScale, "onUpdate:modelValue": t3[6] || (t3[6] = (e4) => c(o2).maxScale = e4), "create-item": ``, items: a2.value, loading: false, onCreate: t3[7] || (t3[7] = (e4) => s2(e4, `max`)), class: `w-full` }, null, 8, [`modelValue`, `items`]), f(`label`, Bt, [f(`span`, Vt, S(e3.i18n.__(`Scale ratio`, `windpress`)), 1)])])])]), r(u2, { class: `my-4` }), f(`div`, Ht, [f(`div`, Ut, S(c(wp.i18n.__)(`Scale Steps`, `windpress`)), 1), f(`div`, Wt, [f(`div`, Gt, [r(h2, { modelValue: c(o2).stepsSmaller, "onUpdate:modelValue": t3[8] || (t3[8] = (e4) => c(o2).stepsSmaller = e4), min: 0, step: 1, required: ``, class: `w-full` }, null, 8, [`modelValue`]), f(`label`, Kt, [f(`span`, qt, S(e3.i18n.__(`Smaller steps`, `windpress`)), 1)])]), f(`div`, Jt, [r(h2, { modelValue: c(o2).stepsLarger, "onUpdate:modelValue": t3[9] || (t3[9] = (e4) => c(o2).stepsLarger = e4), min: 0, step: 1, required: ``, class: `w-full` }, null, 8, [`modelValue`]), f(`label`, Yt, [f(`span`, Xt, S(e3.i18n.__(`Larger steps`, `windpress`)), 1)])])]), f(`div`, Zt, [f(`div`, { onClick: t3[10] || (t3[10] = (e4) => c(o2).stepsSmaller++), class: `stripe-bg flex items-center border border-transparent hover:border-muted cursor-pointer font-semibold justify-center px-4 py-2.5 rounded-md` }, [r(g2, { name: `lucide:plus`, class: `text-tonned` })]), (y(true), p(b, null, m(c(o2).stepsSmaller, (e4) => (y(), p(`div`, { key: e4, onClick: (t4) => c(o2).stepsSmaller -= +(e4 === 1), class: d([e4 === 1 ? `cursor-pointer hover:border-muted` : ``, `flex items-center bg-elevated border border-transparent justify-center px-4 py-2.5 rounded-md`]) }, [e4 === c(o2).stepsSmaller ? (y(), p(`span`, $t, `sm`)) : e4 === c(o2).stepsSmaller - 1 ? (y(), p(`span`, en, `xs`)) : (y(), p(`span`, tn, S(c(o2).stepsSmaller - e4) + `xs`, 1))], 10, Qt))), 128)), t3[17] || (t3[17] = f(`div`, { class: `flex items-center text-inverted bg-primary font-semibold justify-center px-4 py-2.5 rounded-md` }, ` base `, -1)), (y(true), p(b, null, m(c(o2).stepsLarger, (e4) => (y(), p(`div`, { key: e4, onClick: (t4) => c(o2).stepsLarger -= +(e4 === c(o2).stepsLarger), class: d([e4 === c(o2).stepsLarger ? `cursor-pointer hover:border-muted` : ``, `flex items-center bg-accented border border-transparent font-semibold justify-center px-4 py-2.5 rounded-md`]) }, [e4 === 1 ? (y(), p(`span`, rn, `lg`)) : e4 === 2 ? (y(), p(`span`, an, `xl`)) : (y(), p(`span`, on, S(e4 - 1) + `xl`, 1))], 10, nn))), 128)), f(`div`, { onClick: t3[11] || (t3[11] = (e4) => c(o2).stepsLarger++), class: `stripe-bg flex items-center border border-transparent hover:border-muted cursor-pointer font-semibold justify-center px-4 py-2.5 rounded-md` }, [r(g2, { name: `lucide:plus`, class: `text-tonned` })])])]), r(u2, { class: `my-4` }), f(`div`, sn, [f(`div`, cn, S(c(wp.i18n.__)(`Misc`, `windpress`)), 1), f(`div`, null, [r(n3, { modelValue: c(o2).miscPrefix, "onUpdate:modelValue": t3[12] || (t3[12] = (e4) => c(o2).miscPrefix = e4), required: ``, placeholder: e3.i18n.__(`prefix-`, `windpress`), ui: { trailing: `pointer-events-none`, base: `peer` }, class: `w-full` }, { default: x(() => [f(`label`, ln, [f(`span`, un, S(e3.i18n.__(`Prefix`, `windpress`)), 1)])]), _: 1 }, 8, [`modelValue`, `placeholder`])])])]), footer: x(({ close: t4 }) => [r(_2, { label: e3.i18n.__(`Generate`, `windpress`), color: `info`, variant: `soft`, onClick: l2, "leading-icon": `lucide:sparkles`, ui: { leadingIcon: `opacity-60` } }, null, 8, [`label`])]), _: 1 }, 8, [`title`]);
  };
} }), [[`__scopeId`, `data-v-3aa2a4d7`]]);
export {
  dn as n,
  fn as t
};
