var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
import { r as e } from "./rolldown-runtime-DAXXjFlN.js";
function t(e4, t2) {
  let n2 = e4.length, r2, i2, a2 = false, o2 = false;
  Array.isArray(e4[0]) ? r2 = e4 : (r2 = [e4], n2 = r2.length, a2 = true), Array.isArray(t2[0]) ? i2 = t2 : (i2 = t2.length > 0 ? t2.map((e5) => [e5]) : [[]], o2 = true);
  let s2 = i2[0].length, c2 = i2[0].map((e5, t3) => i2.map((e6) => e6[t3])), l2 = r2.map((e5) => c2.map((t3) => {
    let n3 = 0;
    if (!Array.isArray(e5)) {
      for (let r3 of t3) n3 += e5 * r3;
      return n3;
    }
    for (let r3 = 0; r3 < e5.length; r3++) n3 += e5[r3] * (t3[r3] || 0);
    return n3;
  }));
  return n2 === 1 && a2 && (l2 = l2[0]), s2 === 1 && o2 ? n2 === 1 && a2 ? l2[0] : l2.map((e5) => e5[0]) : l2;
}
function n(e4, t2) {
  return e4[0] * t2[0] + e4[1] * t2[1] + e4[2] * t2[2];
}
function r(e4, t2, r2 = [0, 0, 0]) {
  let i2 = n(e4, t2[0]), a2 = n(e4, t2[1]), o2 = n(e4, t2[2]);
  return r2[0] = i2, r2[1] = a2, r2[2] = o2, r2;
}
var i = e({ bisectLeft: () => v, clamp: () => m, copySign: () => h, diag: () => b, interpolate: () => d, interpolateInv: () => f, inv: () => E, isInstance: () => y, isNone: () => c, isString: () => a, lu: () => x, mapRange: () => p, multiplyMatrices: () => t, multiply_v3_m3x3: () => r, serializeNumber: () => s, skipNone: () => l, solve: () => ee, spow: () => g, toPrecision: () => u, type: () => o, zdiv: () => _ });
function a(e4) {
  return o(e4) === `string`;
}
function o(e4) {
  return (Object.prototype.toString.call(e4).match(/^\[object\s+(.*?)\]$/)[1] || ``).toLowerCase();
}
function s(e4, { precision: t2 = 16, unit: n2 }) {
  return c(e4) ? `none` : (e4 = +u(e4, t2), e4 + (n2 ?? ``));
}
function c(e4) {
  return e4 === null;
}
function l(e4) {
  return c(e4) ? 0 : e4;
}
function u(e4, t2) {
  if (e4 === 0) return 0;
  let n2 = ~~e4, r2 = 0;
  n2 && t2 && (r2 = ~~Math.log10(Math.abs(n2)) + 1);
  let i2 = 10 ** (t2 - r2);
  return Math.floor(e4 * i2 + 0.5) / i2;
}
function d(e4, t2, n2) {
  return c(e4) || isNaN(e4) ? t2 : c(t2) || isNaN(t2) ? e4 : e4 + (t2 - e4) * n2;
}
function f(e4, t2, n2) {
  return (n2 - e4) / (t2 - e4);
}
function p(e4, t2, n2) {
  return !e4 || !t2 || e4 === t2 || e4[0] === t2[0] && e4[1] === t2[1] || isNaN(n2) || n2 === null ? n2 : d(t2[0], t2[1], f(e4[0], e4[1], n2));
}
function m(e4, t2, n2) {
  return Math.max(Math.min(n2, t2), e4);
}
function h(e4, t2) {
  return Math.sign(e4) === Math.sign(t2) ? e4 : -e4;
}
function g(e4, t2) {
  return h(Math.abs(e4) ** t2, e4);
}
function _(e4, t2) {
  return t2 === 0 ? 0 : e4 / t2;
}
function v(e4, t2, n2 = 0, r2 = e4.length) {
  for (; n2 < r2; ) {
    let i2 = n2 + r2 >> 1;
    e4[i2] < t2 ? n2 = i2 + 1 : r2 = i2;
  }
  return n2;
}
function y(e4, t2) {
  if (e4 instanceof t2) return true;
  let n2 = t2.name;
  for (; e4; ) {
    let t3 = Object.getPrototypeOf(e4), r2 = t3?.constructor?.name;
    if (r2 === n2) return true;
    if (!r2 || r2 === `Object`) return false;
    e4 = t3;
  }
  return false;
}
function b(e4) {
  let t2 = e4.length, n2 = [];
  for (let r2 = 0; r2 < t2; r2++) {
    n2[r2] = [];
    for (let i2 = 0; i2 < t2; i2++) n2[r2][i2] = r2 === i2 ? e4[r2] : 0;
  }
  return n2;
}
function x(e4, { pIndices: t2 = false } = {}) {
  let n2, r2, i2, a2, o2 = e4.length;
  t2 ? (n2 = Array.from({ length: o2 }, (e5, t3) => t3), i2 = b(Array(o2).fill(1))) : (r2 = b(Array(o2).fill(1)), i2 = structuredClone(r2)), a2 = structuredClone(e4);
  for (let e5 = 0; e5 < o2 - 1; e5++) {
    let s2 = e5, c2 = Math.abs(a2[e5][e5]);
    for (let t3 = e5 + 1; t3 < o2; t3++) {
      let n3 = Math.abs(a2[t3][e5]);
      n3 > c2 && (s2 = t3, c2 = n3);
    }
    if (s2 != e5) {
      if ([a2[e5], a2[s2]] = [a2[s2], a2[e5]], t2 ? [n2[e5], n2[s2]] = [n2[s2], n2[e5]] : [r2[e5], r2[s2]] = [r2[s2], r2[e5]], e5) for (let t3 = 0; t3 < e5; t3++) [i2[e5][t3], i2[s2][t3]] = [i2[s2][t3], i2[e5][t3]];
    } else if (!c2) continue;
    for (let t3 = e5 + 1; t3 < o2; t3++) {
      let n3 = a2[t3][e5] / a2[e5][e5];
      for (let r3 = e5; r3 < o2; r3++) a2[t3][r3] += -a2[e5][r3] * n3, i2[t3][r3] += i2[e5][r3] * n3;
    }
  }
  return t2 ? [n2, i2, a2] : [r2, i2, a2];
}
function S(e4, t2, n2) {
  for (let r2 = 0; r2 < n2; r2++) {
    let i2 = t2[r2];
    for (let a2 = 0; a2 < r2; a2++) for (let o2 = 0; o2 < n2; o2++) i2[o2] -= e4[r2][a2] * t2[a2][o2];
    for (let t3 = 0; t3 < n2; t3++) i2[t3] /= e4[r2][r2];
  }
  return t2;
}
function C(e4, t2, n2) {
  for (let i2 = n2 - 1; i2 > -1; i2--) {
    let a2 = t2[i2];
    for (let o2 = i2 + 1; o2 < n2; o2++) for (var r2 = 0; r2 < n2; r2++) a2[r2] -= e4[i2][o2] * t2[o2][r2];
    for (let r3 = 0; r3 < n2; r3++) t2[i2][r3] /= e4[i2][i2];
  }
  return t2;
}
function w(e4, t2, n2) {
  for (let r2 = 0; r2 < n2; r2++) {
    let n3 = t2[r2];
    for (let i2 = 0; i2 < r2; i2++) n3 -= e4[r2][i2] * t2[i2];
    t2[r2] = n3 / e4[r2][r2];
  }
  return t2;
}
function T(e4, t2, n2) {
  for (let r2 = n2 - 1; r2 > -1; r2--) {
    let i2 = t2[r2];
    for (let a2 = r2 + 1; a2 < n2; a2++) i2 -= e4[r2][a2] * t2[a2];
    t2[r2] = i2 / e4[r2][r2];
  }
  return t2;
}
function E(e4) {
  let [t2, n2, r2] = x(e4), i2 = n2.length;
  if (n2.map((e5, t3) => e5[t3] * r2[t3][t3]).reduce((e5, t3) => e5 * t3, 1) === 0) throw Error(`Matrix is singular`);
  return C(r2, S(n2, t2, i2), i2);
}
function ee(e4, t2) {
  let [n2, r2, i2] = x(e4, { pIndices: true }), a2 = r2.length;
  if (r2.map((e5, t3) => e5[t3] * i2[t3][t3]).reduce((e5, t3) => e5 * t3, 1) === 0) throw Error(`Matrix is singular`);
  return T(i2, w(r2, n2.map((e5) => t2[e5]), a2), a2);
}
var D = new class {
  add(e4, t2, n2) {
    if (typeof arguments[0] != `string`) {
      for (var e4 in arguments[0]) this.add(e4, arguments[0][e4], arguments[1]);
      return;
    }
    (Array.isArray(e4) ? e4 : [e4]).forEach(function(e5) {
      this[e5] = this[e5] || [], t2 && this[e5][n2 ? `unshift` : `push`](t2);
    }, this);
  }
  run(e4, t2) {
    this[e4] = this[e4] || [], this[e4].forEach(function(e5) {
      e5.call(t2 && t2.context ? t2.context : t2, t2);
    });
  }
}(), O = { gamut_mapping: `css`, precision: 5, deltaE: `76`, verbose: true, warn: function(e4) {
  this.verbose && globalThis?.console?.warn?.(e4);
} }, te = class {
  constructor(e4, t2) {
    __publicField(this, "type");
    __publicField(this, "coordMeta");
    __publicField(this, "coordRange");
    __publicField(this, "range");
    if (typeof e4 == `object` && (this.coordMeta = e4), t2 && (this.coordMeta = t2, this.coordRange = t2.range ?? t2.refRange), typeof e4 == `string`) {
      let t3 = e4.trim().match(/^(?<type><[a-z]+>)(\[(?<min>-?[.\d]+),\s*(?<max>-?[.\d]+)\])?$/);
      if (!t3) throw TypeError(`Cannot parse ${e4} as a type definition.`);
      this.type = t3.groups.type;
      let { min: n2, max: r2 } = t3.groups;
      (n2 || r2) && (this.range = [+n2, +r2]);
    }
  }
  get computedRange() {
    return this.range ? this.range : this.type === `<percentage>` ? this.percentageRange() : this.type === `<angle>` ? [0, 360] : null;
  }
  get unit() {
    return this.type === `<percentage>` ? `%` : this.type === `<angle>` ? `deg` : ``;
  }
  resolve(e4) {
    if (this.type === `<angle>`) return e4;
    let t2 = this.computedRange, n2 = this.coordRange;
    return this.type === `<percentage>` && (n2 ?? (n2 = this.percentageRange())), p(t2, n2, e4);
  }
  serialize(e4, t2) {
    let n2 = this.type === `<percentage>` ? this.percentageRange(100) : this.computedRange, r2 = this.unit;
    return e4 = p(this.coordRange, n2, e4), s(e4, { unit: r2, precision: t2 });
  }
  toString() {
    let e4 = this.type;
    if (this.range) {
      let [t2 = ``, n2 = ``] = this.range;
      e4 += `[${t2},${n2}]`;
    }
    return e4;
  }
  percentageRange(e4 = 1) {
    let t2;
    return t2 = this.coordMeta && this.coordMeta.range || this.coordRange && this.coordRange[0] >= 0 ? [0, 1] : [-1, 1], [t2[0] * e4, t2[1] * e4];
  }
  static get(e4, t2) {
    return y(e4, this) ? e4 : new this(e4, t2);
  }
}, ne = /* @__PURE__ */ Symbol(`instance`), k = class e2 {
  constructor(e4, t2 = e4.space) {
    __publicField(this, "type");
    __publicField(this, "name");
    __publicField(this, "spaceCoords");
    __publicField(this, "coords");
    __publicField(this, "id");
    __publicField(this, "alpha");
    e4[ne] = this, this.type = `function`, this.name = `color`, Object.assign(this, e4), this.space = t2, this.type !== `custom` && (this.spaceCoords = Object.values(t2.coords), this.coords || (this.coords = this.spaceCoords.map((e5) => {
      let t3 = [`<number>`, `<percentage>`];
      return e5.type === `angle` && t3.push(`<angle>`), t3;
    })), this.coords = this.coords.map((e5, t3) => {
      let n2 = this.spaceCoords[t3];
      return typeof e5 == `string` && (e5 = e5.trim().split(/\s*\|\s*/)), e5.map((e6) => te.get(e6, n2));
    }));
  }
  serializeCoords(e4, t2, n2) {
    return n2 = e4.map((e5, t3) => te.get(n2?.[t3] ?? this.coords[t3][0], this.spaceCoords[t3])), e4.map((e5, r2) => n2[r2].serialize(e5, t2));
  }
  coerceCoords(e4, t2) {
    return Object.entries(this.space.coords).map(([n2, r2], i2) => {
      let a2 = e4[i2];
      if (c(a2) || isNaN(a2)) return a2;
      let o2 = t2[i2], s2 = this.coords[i2].find((e5) => e5.type == o2);
      if (!s2) {
        let e5 = r2.name || n2;
        throw TypeError(`${o2 ?? a2?.raw ?? a2} not allowed for ${e5} in ${this.name}()`);
      }
      return a2 = s2.resolve(a2), s2.range && (t2[i2] = s2.toString()), a2;
    });
  }
  canSerialize() {
    return this.type === `function` || this.serialize;
  }
  parse(e4) {
    return null;
  }
  static get(t2, ...n2) {
    return !t2 || y(t2, this) ? t2 : t2[ne] ? t2[ne] : new e2(t2, ...n2);
  }
}, A = { D50: [0.3457 / 0.3585, 1, 0.2958 / 0.3585], D65: [0.3127 / 0.329, 1, 0.3583 / 0.329] };
function re(e4) {
  return Array.isArray(e4) ? e4 : A[e4];
}
function ie(e4, t2, n2, i2 = {}) {
  if (e4 = re(e4), t2 = re(t2), !e4 || !t2) throw TypeError(`Missing white point to convert ${e4 ? `` : `from`}${!e4 && !t2 ? `/` : ``}${t2 ? `` : `to`}`);
  if (e4 === t2) return n2;
  let a2 = { W1: e4, W2: t2, XYZ: n2, options: i2 };
  if (D.run(`chromatic-adaptation-start`, a2), a2.M || (a2.W1 === A.D65 && a2.W2 === A.D50 ? a2.M = [[1.0479297925449969, 0.022946870601609652, -0.05019226628920524], [0.02962780877005599, 0.9904344267538799, -0.017073799063418826], [-0.009243040646204504, 0.015055191490298152, 0.7518742814281371]] : a2.W1 === A.D50 && a2.W2 === A.D65 && (a2.M = [[0.955473421488075, -0.02309845494876471, 0.06325924320057072], [-0.0283697093338637, 1.0099953980813041, 0.021041441191917323], [0.012314014864481998, -0.020507649298898964, 1.330365926242124]])), D.run(`chromatic-adaptation-end`, a2), a2.M) return r(a2.XYZ, a2.M);
  throw TypeError(`Only Bradford CAT with white points D50 and D65 supported for now.`);
}
function j(e4, t2) {
  let n2 = { str: String(e4)?.trim(), options: t2 };
  if (D.run(`parse-start`, n2), n2.color) return n2.color;
  n2.parsed = ce(n2.str);
  let r2, i2 = n2.options ? n2.options.parseMeta ?? n2.options.meta : null;
  if (n2.parsed) {
    let t3 = n2.parsed.name, a2, o2, s2 = n2.parsed.args, c2 = s2.map((e5, t4) => n2.parsed.argMeta[t4]?.type);
    if (t3 === `color`) {
      let r3 = s2.shift();
      c2.shift();
      let i3 = r3.startsWith(`--`) ? r3.substring(2) : `--${r3}`, l3 = [r3, i3];
      if (a2 = N.findFormat({ name: t3, id: l3, type: `function` }), !a2) {
        let t4, a3 = r3 in N.registry ? r3 : i3;
        if (a3 in N.registry) {
          let n3 = N.registry[a3].formats?.color?.id;
          n3 && (t4 = `Did you mean ${e4.replace(`color(` + r3, `color(` + n3)}?`);
        }
        throw TypeError(`Cannot parse ${n2.str}. ` + (t4 ?? `Missing a plugin?`));
      }
      o2 = a2.space, a2.id.startsWith(`--`) && !r3.startsWith(`--`) && O.warn(`${o2.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${a2.id}) instead of color(${r3}).`), r3.startsWith(`--`) && !a2.id.startsWith(`--`) && O.warn(`${o2.name} is a standard space and supported in the CSS spec. Use color(${a2.id}) instead of prefixed color(${r3}).`);
    } else a2 = N.findFormat({ name: t3, type: `function` }), o2 = a2.space;
    i2 && Object.assign(i2, { format: a2, formatId: a2.name, types: c2, commas: n2.parsed.commas });
    let l2 = 1;
    n2.parsed.lastAlpha && (l2 = n2.parsed.args.pop(), i2 && (i2.alphaType = c2.pop()));
    let u2 = a2.coords.length;
    if (s2.length !== u2) throw TypeError(`Expected ${u2} coordinates for ${o2.id} in ${n2.str}), got ${s2.length}`);
    s2 = a2.coerceCoords(s2, c2), r2 = { spaceId: o2.id, coords: s2, alpha: l2 };
  } else spaceloop: for (let e5 of N.all) for (let t3 in e5.formats) {
    let a2 = e5.formats[t3];
    if (a2.type !== `custom` || a2.test && !a2.test(n2.str)) continue;
    let o2 = e5.getFormat(a2), s2 = o2.parse(n2.str);
    if (s2) {
      i2 && Object.assign(i2, { format: o2, formatId: t3 }), r2 = s2;
      break spaceloop;
    }
  }
  if (!r2) throw TypeError(`Could not parse ${e4} as a color. Missing a plugin?`);
  return r2.alpha = c(r2.alpha) ? r2.alpha : r2.alpha === void 0 ? 1 : m(0, r2.alpha, 1), r2;
}
var ae = { "%": 0.01, deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 }, oe = { function: /^([a-z]+)\(((?:calc\(NaN\)|.)+?)\)$/i, number: /^([-+]?(?:[0-9]*\.)?[0-9]+(e[-+]?[0-9]+)?)$/i, unitValue: RegExp(`(${Object.keys(ae).join(`|`)})$`), singleArgument: /\/?\s*(none|NaN|calc\(NaN\)|[-+\w.]+(?:%|deg|g?rad|turn)?)/g };
function se(e4) {
  let t2 = {}, n2 = e4.match(oe.unitValue)?.[0], r2 = t2.raw = e4;
  return n2 ? (t2.type = n2 === `%` ? `<percentage>` : `<angle>`, t2.unit = n2, t2.unitless = Number(r2.slice(0, -n2.length)), r2 = t2.unitless * ae[n2]) : oe.number.test(r2) ? (r2 = Number(r2), t2.type = `<number>`) : r2 === `none` ? r2 = null : r2 === `NaN` || r2 === `calc(NaN)` ? (r2 = NaN, t2.type = `<number>`) : t2.type = `<ident>`, { value: r2, meta: t2 };
}
function ce(e4) {
  if (!e4) return;
  e4 = e4.trim();
  let t2 = e4.match(oe.function);
  if (t2) {
    let e5 = [], n2 = [], r2 = false, i2 = t2[1].toLowerCase(), a2 = t2[2].replace(oe.singleArgument, (t3, a3) => {
      let { value: o2, meta: s2 } = se(a3);
      return (t3.startsWith(`/`) || i2 !== `color` && e5.length === 3) && (r2 = true), e5.push(o2), n2.push(s2), ``;
    });
    return { name: i2, args: e5, argMeta: n2, lastAlpha: r2, commas: a2.includes(`,`), rawName: t2[1], rawArgs: t2[2] };
  }
}
function M(e4, t2) {
  if (Array.isArray(e4)) return e4.map((e5) => M(e5, t2));
  if (!e4) throw TypeError(`Empty color reference`);
  a(e4) && (e4 = j(e4, t2));
  let n2 = e4.space || e4.spaceId;
  return typeof n2 == `string` && (e4.space = N.get(n2)), e4.alpha === void 0 && (e4.alpha = 1), e4;
}
var le = 75e-6, N = (_a = class {
  constructor(t2) {
    this.id = t2.id, this.name = t2.name, this.base = t2.base ? _a.get(t2.base) : null, this.aliases = t2.aliases, this.displaySpaces = t2.displaySpaces?.map((t3) => _a.get(t3)), this.bases = [];
    for (let e4 = this.base; e4; e4 = e4.base) this.bases.push(e4);
    t2.rgbGamut && (this.rgbGamut = t2.rgbGamut), t2.linearGamut && (this.linearGamut = t2.linearGamut), this.base && (t2.fromBase && (this.fromBase = t2.fromBase), t2.toBase && (this.toBase = t2.toBase));
    let n2 = t2.coords ?? this.base.coords;
    for (let e4 in n2) `name` in n2[e4] || (n2[e4].name = e4);
    this.coords = n2;
    let r2 = t2.white ?? this.base.white ?? `D65`;
    this.white = re(r2), this.formats = t2.formats ?? {};
    for (let e4 in this.formats) {
      let t3 = this.formats[e4];
      t3.type || (t3.type = `function`), t3.name || (t3.name = e4);
    }
    this.formats.color?.id || (this.formats.color = { ...this.formats.color ?? {}, id: t2.cssId || this.id }), t2.gamutSpace ? this.gamutSpace = t2.gamutSpace === `self` ? this : _a.get(t2.gamutSpace) : this.isPolar ? this.gamutSpace = this.base : this.gamutSpace = this, this.gamutSpace.isUnbounded && (this.inGamut = (e4, t3) => true), this.M = t2.M ?? {}, this.referred = t2.referred, Object.defineProperty(this, "path", { value: ue(this).reverse(), writable: false, enumerable: true, configurable: true }), D.run(`colorspace-init-end`, this);
  }
  inGamut(e4, { epsilon: t2 = le } = {}) {
    if (!this.equals(this.gamutSpace)) return e4 = this.to(this.gamutSpace, e4), this.gamutSpace.inGamut(e4, { epsilon: t2 });
    let n2 = Object.values(this.coords);
    return e4.every((e5, r2) => {
      let i2 = n2[r2];
      if (i2.type !== `angle` && i2.range) {
        if (c(e5)) return true;
        let [n3, r3] = i2.range;
        return (n3 === void 0 || e5 >= n3 - t2) && (r3 === void 0 || e5 <= r3 + t2);
      }
      return true;
    });
  }
  get isUnbounded() {
    return Object.values(this.coords).every((e4) => !(`range` in e4));
  }
  get cssId() {
    return this.formats?.color?.id || this.id;
  }
  get hueId() {
    for (let e4 in this.coords) if (this.coords[e4].type === `angle`) return e4;
    return null;
  }
  get hueIndex() {
    return Object.keys(this.coords).findIndex((e4) => this.coords[e4].type === `angle`);
  }
  get isPolar() {
    return this.hueId !== null;
  }
  getFormat(e4) {
    if (!e4) return null;
    e4 === "default" ? e4 = Object.values(this.formats)[0] : typeof e4 == `string` && (e4 = this.formats[e4]);
    let t2 = k.get(e4, this);
    return t2 !== e4 && e4.name in this.formats && (this.formats[e4.name] = t2), t2;
  }
  equals(e4) {
    return e4 ? this === e4 || this.id === e4 || this.id === e4.id : false;
  }
  to(t2, n2) {
    if (arguments.length === 1) {
      let e4 = M(t2);
      [t2, n2] = [e4.space, e4.coords];
    }
    if (t2 = _a.get(t2), this.equals(t2)) return n2;
    n2 = n2.map((e4) => c(e4) ? 0 : e4);
    let r2 = this.path, i2 = t2.path, a2, o2;
    for (let e4 = 0; e4 < r2.length && r2[e4].equals(i2[e4]); e4++) a2 = r2[e4], o2 = e4;
    if (!a2) throw Error(`Cannot convert between color spaces ${this} and ${t2}: no connection space was found`);
    for (let e4 = r2.length - 1; e4 > o2; e4--) n2 = r2[e4].toBase(n2);
    for (let e4 = o2 + 1; e4 < i2.length; e4++) n2 = i2[e4].fromBase(n2);
    return n2;
  }
  from(t2, n2) {
    if (arguments.length === 1) {
      let e4 = M(t2);
      [t2, n2] = [e4.space, e4.coords];
    }
    return t2 = _a.get(t2), t2.to(this, n2);
  }
  toString() {
    return `${this.name} (${this.id})`;
  }
  getMinCoords() {
    let e4 = [];
    for (let t2 in this.coords) {
      let n2 = this.coords[t2], r2 = n2.range || n2.refRange;
      e4.push(r2?.min ?? 0);
    }
    return e4;
  }
  static get all() {
    return [...new Set(Object.values(_a.registry))];
  }
  static register(e4, t2) {
    if (arguments.length === 1 && (t2 = arguments[0], e4 = t2.id), t2 = this.get(t2), this.registry[e4] && this.registry[e4] !== t2) throw Error(`Duplicate color space registration: '${e4}'`);
    if (this.registry[e4] = t2, arguments.length === 1 && t2.aliases) for (let e5 of t2.aliases) this.register(e5, t2);
    return t2;
  }
  static get(t2, ...n2) {
    if (!t2 || y(t2, this)) return t2;
    if (o(t2) === `string`) {
      let n3 = _a.registry[t2.toLowerCase()];
      if (!n3) throw TypeError(`No color space found with id = "${t2}"`);
      return n3;
    }
    if (n2.length) return _a.get(...n2);
    throw TypeError(`${t2} is not a valid color space`);
  }
  static findFormat(t2, n2 = _a.all) {
    if (!t2) return null;
    typeof t2 == `string` && (t2 = { name: t2 });
    for (let e4 of n2) for (let [n3, r2] of Object.entries(e4.formats)) {
      r2.name ?? (r2.name = n3), r2.type ?? (r2.type = `function`);
      let i2 = (!t2.name || r2.name === t2.name) && (!t2.type || r2.type === t2.type);
      if (t2.id) {
        let e5 = r2.ids || [r2.id], n4 = Array.isArray(t2.id) ? t2.id : [t2.id];
        i2 && (i2 = n4.some((t3) => e5.includes(t3)));
      }
      if (i2) {
        let t3 = k.get(r2, e4);
        return t3 !== r2 && (e4.formats[r2.name] = t3), t3;
      }
    }
    return null;
  }
  static resolveCoord(t2, n2) {
    let r2 = o(t2), i2, a2;
    if (r2 === `string` ? t2.includes(`.`) ? [i2, a2] = t2.split(`.`) : [i2, a2] = [, t2] : Array.isArray(t2) ? [i2, a2] = t2 : (i2 = t2.space, a2 = t2.coordId), i2 = _a.get(i2), i2 || (i2 = n2), !i2) throw TypeError(`Cannot resolve coordinate reference ${t2}: No color space specified and relative references are not allowed here`);
    if (r2 = o(a2), r2 === `number` || r2 === `string` && a2 >= 0) {
      let e4 = Object.entries(i2.coords)[a2];
      if (e4) return { space: i2, id: e4[0], index: a2, ...e4[1] };
    }
    i2 = _a.get(i2);
    let s2 = a2.toLowerCase(), c2 = 0;
    for (let e4 in i2.coords) {
      let t3 = i2.coords[e4];
      if (e4.toLowerCase() === s2 || t3.name?.toLowerCase() === s2) return { space: i2, id: e4, index: c2, ...t3 };
      c2++;
    }
    throw TypeError(`No "${a2}" coordinate found in ${i2.name}. Its coordinates are: ${Object.keys(i2.coords).join(`, `)}`);
  }
}, __publicField(_a, "registry", {}), __publicField(_a, "DEFAULT_FORMAT", { type: `functions`, name: `color` }), _a);
function ue(e4) {
  let t2 = [e4];
  for (let n2 = e4; n2 = n2.base; ) t2.push(n2);
  return t2;
}
var P = new N({ id: `xyz-d65`, name: `XYZ D65`, coords: { x: { refRange: [0, 1], name: `X` }, y: { refRange: [0, 1], name: `Y` }, z: { refRange: [0, 1], name: `Z` } }, white: `D65`, formats: { color: { ids: [`xyz-d65`, `xyz`] } }, aliases: [`xyz`] }), F = class extends N {
  constructor(e4) {
    e4.coords || (e4.coords = { r: { range: [0, 1], name: `Red` }, g: { range: [0, 1], name: `Green` }, b: { range: [0, 1], name: `Blue` } }), e4.base || (e4.base = P);
    let t2 = e4.toXYZ_M ?? e4.M?.toXYZ, n2 = e4.fromXYZ_M ?? e4.M?.fromXYZ;
    e4.referred ?? (e4.referred = `display`), super(e4), t2 && n2 && (this.M.toXYZ = t2, this.M.fromXYZ = n2);
  }
  toBase(e4) {
    let t2 = r(e4, this.M.toXYZ);
    return this.white !== this.base.white && (t2 = ie(this.white, this.base.white, t2)), t2;
  }
  fromBase(e4) {
    return e4 = ie(this.base.white, this.white, e4), r(e4, this.M.fromXYZ);
  }
}, de = new N({ id: `xyz-d50`, name: `XYZ D50`, white: `D50`, base: P, fromBase: (e4) => ie(P.white, `D50`, e4), toBase: (e4) => ie(`D50`, P.white, e4) }), fe = 216 / 24389, pe = 24 / 116, me = 24389 / 27, he = A.D50, I = new N({ id: `lab`, name: `Lab`, coords: { l: { refRange: [0, 100], name: `Lightness` }, a: { refRange: [-125, 125] }, b: { refRange: [-125, 125] } }, white: he, base: de, fromBase(e4) {
  let t2 = e4.map((e5, t3) => e5 / he[t3]).map((e5) => e5 > fe ? Math.cbrt(e5) : (me * e5 + 16) / 116);
  return [116 * t2[1] - 16, 500 * (t2[0] - t2[1]), 200 * (t2[1] - t2[2])];
}, toBase(e4) {
  let [t2, n2, r2] = e4, i2 = [];
  return i2[1] = (t2 + 16) / 116, i2[0] = n2 / 500 + i2[1], i2[2] = i2[1] - r2 / 200, [i2[0] > pe ? i2[0] ** 3 : (116 * i2[0] - 16) / me, e4[0] > 8 ? ((e4[0] + 16) / 116) ** 3 : e4[0] / me, i2[2] > pe ? i2[2] ** 3 : (116 * i2[2] - 16) / me].map((e5, t3) => e5 * he[t3]);
}, formats: { lab: { coords: [`<percentage> | <number>`, `<number> | <percentage>`, `<number> | <percentage>`] } } });
function L(e4) {
  return typeof e4 == `number` ? (e4 % 360 + 360) % 360 : e4;
}
function ge(e4, t2) {
  let [n2, r2] = t2, i2 = c(n2), a2 = c(r2);
  if (i2 && a2) return [n2, r2];
  if (i2 ? n2 = r2 : a2 && (r2 = n2), e4 === `raw`) return t2;
  n2 = L(n2), r2 = L(r2);
  let o2 = r2 - n2;
  return e4 === `increasing` ? o2 < 0 && (r2 += 360) : e4 === `decreasing` ? o2 > 0 && (n2 += 360) : e4 === `longer` ? -180 < o2 && o2 < 180 && (o2 > 0 ? n2 += 360 : r2 += 360) : e4 === `shorter` && (o2 > 180 ? n2 += 360 : o2 < -180 && (r2 += 360)), [n2, r2];
}
var R = new N({ id: `lch`, name: `LCH`, coords: { l: { refRange: [0, 100], name: `Lightness` }, c: { refRange: [0, 150], name: `Chroma` }, h: { refRange: [0, 360], type: `angle`, name: `Hue` } }, base: I, fromBase(e4) {
  if (this.\u03B5 === void 0) {
    let e5 = Object.values(this.base.coords)[1].refRange, t3 = e5[1] - e5[0];
    this.\u03B5 = t3 / 1e5;
  }
  let [t2, n2, r2] = e4, i2 = Math.abs(n2) < this.\u03B5 && Math.abs(r2) < this.\u03B5, a2 = i2 ? null : L(Math.atan2(r2, n2) * 180 / Math.PI);
  return [t2, i2 ? 0 : Math.sqrt(n2 ** 2 + r2 ** 2), a2];
}, toBase(e4) {
  let [t2, n2, r2] = e4, i2 = null, a2 = null;
  return c(r2) || (n2 = n2 < 0 ? 0 : n2, i2 = n2 * Math.cos(r2 * Math.PI / 180), a2 = n2 * Math.sin(r2 * Math.PI / 180)), [t2, i2, a2];
}, formats: { lch: { coords: [`<percentage> | <number>`, `<number> | <percentage>`, `<number> | <angle>`] } } }), _e = 25 ** 7, ve = Math.PI, ye = 180 / ve, be = ve / 180;
function xe(e4) {
  let t2 = e4 * e4;
  return t2 * t2 * t2 * e4;
}
function Se(e4, t2, { kL: n2 = 1, kC: r2 = 1, kH: i2 = 1 } = {}) {
  [e4, t2] = M([e4, t2]);
  let [a2, o2, s2] = I.from(e4), c2 = R.from(I, [a2, o2, s2])[1], [l2, u2, d2] = I.from(t2), f2 = R.from(I, [l2, u2, d2])[1];
  c2 < 0 && (c2 = 0), f2 < 0 && (f2 = 0);
  let p2 = xe((c2 + f2) / 2), m2 = 0.5 * (1 - Math.sqrt(p2 / (p2 + _e))), h2 = (1 + m2) * o2, g2 = (1 + m2) * u2, _2 = Math.sqrt(h2 ** 2 + s2 ** 2), v2 = Math.sqrt(g2 ** 2 + d2 ** 2), y2 = h2 === 0 && s2 === 0 ? 0 : Math.atan2(s2, h2), b2 = g2 === 0 && d2 === 0 ? 0 : Math.atan2(d2, g2);
  y2 < 0 && (y2 += 2 * ve), b2 < 0 && (b2 += 2 * ve), y2 *= ye, b2 *= ye;
  let x2 = l2 - a2, S2 = v2 - _2, C2 = b2 - y2, w2 = y2 + b2, T2 = Math.abs(C2), E2;
  _2 * v2 === 0 ? E2 = 0 : T2 <= 180 ? E2 = C2 : C2 > 180 ? E2 = C2 - 360 : C2 < -180 ? E2 = C2 + 360 : O.warn(`the unthinkable has happened`);
  let ee2 = 2 * Math.sqrt(v2 * _2) * Math.sin(E2 * be / 2), D2 = (a2 + l2) / 2, te2 = (_2 + v2) / 2, ne2 = xe(te2), k2;
  k2 = _2 * v2 === 0 ? w2 : T2 <= 180 ? w2 / 2 : w2 < 360 ? (w2 + 360) / 2 : (w2 - 360) / 2;
  let A2 = (D2 - 50) ** 2, re2 = 1 + 0.015 * A2 / Math.sqrt(20 + A2), ie2 = 1 + 0.045 * te2, j2 = 1;
  j2 -= 0.17 * Math.cos((k2 - 30) * be), j2 += 0.24 * Math.cos(2 * k2 * be), j2 += 0.32 * Math.cos((3 * k2 + 6) * be), j2 -= 0.2 * Math.cos((4 * k2 - 63) * be);
  let ae2 = 1 + 0.015 * te2 * j2, oe2 = 30 * Math.exp(-1 * ((k2 - 275) / 25) ** 2), se2 = 2 * Math.sqrt(ne2 / (ne2 + _e)), ce2 = -1 * Math.sin(2 * oe2 * be) * se2, le2 = (x2 / (n2 * re2)) ** 2;
  return le2 += (S2 / (r2 * ie2)) ** 2, le2 += (ee2 / (i2 * ae2)) ** 2, le2 += ce2 * (S2 / (r2 * ie2)) * (ee2 / (i2 * ae2)), Math.sqrt(le2);
}
var Ce = { XYZtoLMS: [[0.819022437996703, 0.3619062600528904, -0.1288737815209879], [0.0329836539323885, 0.9292868615863434, 0.0361446663506424], [0.0481771893596242, 0.2642395317527308, 0.6335478284694309]], LMStoXYZ: [[1.2268798758459243, -0.5578149944602171, 0.2813910456659647], [-0.0405757452148008, 1.112286803280317, -0.0717110580655164], [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816]], LMStoLab: [[0.210454268309314, 0.7936177747023054, -0.0040720430116193], [1.9779985324311684, -2.42859224204858, 0.450593709617411], [0.0259040424655478, 0.7827717124575296, -0.8086757549230774]], LabtoLMS: [[1, 0.3963377773761749, 0.2158037573099136], [1, -0.1055613458156586, -0.0638541728258133], [1, -0.0894841775298119, -1.2914855480194092]] }, z = new N({ id: `oklab`, name: `Oklab`, coords: { l: { refRange: [0, 1], name: `Lightness` }, a: { refRange: [-0.4, 0.4] }, b: { refRange: [-0.4, 0.4] } }, white: `D65`, base: P, M: Ce, fromBase(e4) {
  let t2 = r(e4, Ce.XYZtoLMS);
  return t2[0] = Math.cbrt(t2[0]), t2[1] = Math.cbrt(t2[1]), t2[2] = Math.cbrt(t2[2]), r(t2, Ce.LMStoLab, t2);
}, toBase(e4) {
  let t2 = r(e4, Ce.LabtoLMS);
  return t2[0] **= 3, t2[1] **= 3, t2[2] **= 3, r(t2, Ce.LMStoXYZ, t2);
}, formats: { oklab: { coords: [`<percentage> | <number>`, `<number> | <percentage>`, `<number> | <percentage>`] } } });
function we(e4, t2) {
  [e4, t2] = M([e4, t2]);
  let [n2, r2, i2] = z.from(e4), [a2, o2, s2] = z.from(t2), c2 = n2 - a2, l2 = r2 - o2, u2 = i2 - s2;
  return Math.sqrt(c2 ** 2 + l2 ** 2 + u2 ** 2);
}
var Te = 75e-6;
function Ee(e4, t2, { epsilon: n2 = Te } = {}) {
  e4 = M(e4), t2 || (t2 = e4.space), t2 = N.get(t2);
  let r2 = e4.coords;
  return t2 !== e4.space && (r2 = t2.from(e4)), t2.inGamut(r2, { epsilon: n2 });
}
function B(e4, t2, { inGamut: n2 } = {}) {
  e4 = M(e4), t2 = N.get(t2);
  let r2 = t2.from(e4), i2 = { space: t2, coords: r2, alpha: e4.alpha };
  return n2 && (i2 = K(i2, n2 === true ? void 0 : n2)), i2;
}
B.returns = `color`;
function De(e4, t2) {
  e4 = M(e4);
  let n2 = N.get(t2, t2?.space), r2 = t2?.precision, i2;
  return i2 = !n2 || e4.space.equals(n2) ? e4.coords.slice() : n2.from(e4), r2 === void 0 ? i2 : i2.map((e5) => u(e5, r2));
}
function V(e4, t2) {
  if (e4 = M(e4), t2 === `alpha`) return e4.alpha ?? 1;
  let { space: n2, index: r2 } = N.resolveCoord(t2, e4.space);
  return De(e4, n2)[r2];
}
var Oe = new N({ id: `oklch`, name: `OkLCh`, coords: { l: { refRange: [0, 1], name: `Lightness` }, c: { refRange: [0, 0.4], name: `Chroma` }, h: { refRange: [0, 360], type: `angle`, name: `Hue` } }, white: `D65`, base: z, fromBase: R.fromBase, toBase: R.toBase, formats: { oklch: { coords: [`<percentage> | <number>`, `<number> | <percentage>`, `<number> | <angle>`] } } });
function ke(e4, t2, n2, r2) {
  return e4 = M(e4), Array.isArray(t2) && ([t2, n2, r2] = [e4.space, t2, n2]), t2 = N.get(t2), e4.coords = t2 === e4.space ? n2.slice() : t2.to(e4.space, n2), r2 !== void 0 && (e4.alpha = r2), e4;
}
ke.returns = `color`;
function H(e4, t2, n2) {
  if (e4 = M(e4), arguments.length === 2 && o(arguments[1]) === `object`) {
    let t3 = arguments[1];
    for (let n3 in t3) H(e4, n3, t3[n3]);
  } else if (typeof n2 == `function` && (n2 = n2(V(e4, t2))), t2 === `alpha`) e4.alpha = n2;
  else {
    let { space: r2, index: i2 } = N.resolveCoord(t2, e4.space), a2 = De(e4, r2);
    a2[i2] = n2, ke(e4, r2, a2);
  }
  return e4;
}
H.returns = `color`;
function Ae(e4) {
  return { space: e4.space, coords: e4.coords.slice(), alpha: e4.alpha };
}
function je(e4, t2, n2 = `lab`) {
  n2 = N.get(n2);
  let r2 = n2.from(e4), i2 = n2.from(t2);
  return Math.sqrt(r2.reduce((e5, t3, n3) => {
    let r3 = i2[n3];
    return c(t3) || c(r3) ? e5 : e5 + (r3 - t3) ** 2;
  }, 0));
}
function Me(e4, t2) {
  return je(e4, t2, `lab`);
}
var Ne = Math.PI / 180;
function Pe(e4, t2, { l: n2 = 2, c: r2 = 1 } = {}) {
  [e4, t2] = M([e4, t2]);
  let [i2, a2, o2] = I.from(e4), [, s2, l2] = R.from(I, [i2, a2, o2]), [u2, d2, f2] = I.from(t2), p2 = R.from(I, [u2, d2, f2])[1];
  s2 < 0 && (s2 = 0), p2 < 0 && (p2 = 0);
  let m2 = i2 - u2, h2 = s2 - p2, g2 = a2 - d2, _2 = o2 - f2, v2 = g2 ** 2 + _2 ** 2 - h2 ** 2, y2 = 0.511;
  i2 >= 16 && (y2 = 0.040975 * i2 / (1 + 0.01765 * i2));
  let b2 = 0.0638 * s2 / (1 + 0.0131 * s2) + 0.638, x2;
  c(l2) && (l2 = 0), x2 = l2 >= 164 && l2 <= 345 ? 0.56 + Math.abs(0.2 * Math.cos((l2 + 168) * Ne)) : 0.36 + Math.abs(0.4 * Math.cos((l2 + 35) * Ne));
  let S2 = s2 ** 4, C2 = Math.sqrt(S2 / (S2 + 1900)), w2 = b2 * (C2 * x2 + 1 - C2), T2 = (m2 / (n2 * y2)) ** 2;
  return T2 += (h2 / (r2 * b2)) ** 2, T2 += v2 / w2 ** 2, Math.sqrt(T2);
}
var Fe = 203, Ie = new N({ id: `xyz-abs-d65`, cssId: `--xyz-abs-d65`, name: `Absolute XYZ D65`, coords: { x: { refRange: [0, 9504.7], name: `Xa` }, y: { refRange: [0, 1e4], name: `Ya` }, z: { refRange: [0, 10888.3], name: `Za` } }, base: P, fromBase(e4) {
  return e4.map((e5) => e5 * Fe);
}, toBase(e4) {
  return e4.map((e5) => e5 / Fe);
} }), Le = 1.15, Re = 0.66, ze = 2610 / 2 ** 14, Be = 2 ** 14 / 2610, Ve = 3424 / 2 ** 12, He = 2413 / 2 ** 7, Ue = 2392 / 2 ** 7, We = 1.7 * 2523 / 2 ** 5, Ge = 2 ** 5 / (1.7 * 2523), Ke = -0.56, qe = 16295499532821565e-27, Je = { XYZtoCone: [[0.41478972, 0.579999, 0.014648], [-0.20151, 1.120649, 0.0531008], [-0.0166008, 0.2648, 0.6684799]], ConetoXYZ: [[1.9242264357876067, -1.0047923125953657, 0.037651404030618], [0.35031676209499907, 0.7264811939316552, -0.06538442294808501], [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]], ConetoIab: [[0.5, 0.5, 0], [3.524, -4.066708, 0.542708], [0.199076, 1.096799, -1.295875]], IabtoCone: [[1, 0.13860504327153927, 0.05804731615611883], [1, -0.1386050432715393, -0.058047316156118904], [1, -0.09601924202631895, -0.811891896056039]] }, Ye = new N({ id: `jzazbz`, name: `Jzazbz`, coords: { jz: { refRange: [0, 1], name: `Jz` }, az: { refRange: [-0.21, 0.21] }, bz: { refRange: [-0.21, 0.21] } }, base: Ie, M: Je, fromBase(e4) {
  let [t2, n2, i2] = e4, [a2, o2, s2] = r(r([Le * t2 - (Le - 1) * i2, Re * n2 - (Re - 1) * t2, i2], Je.XYZtoCone).map(function(e5) {
    return g((Ve + He * g(e5 / 1e4, ze)) / (1 + Ue * g(e5 / 1e4, ze)), We);
  }), Je.ConetoIab);
  return [0.43999999999999995 * a2 / (1 + Ke * a2) - qe, o2, s2];
}, toBase(e4) {
  let [t2, n2, i2] = e4, [a2, o2, s2] = r(r([(t2 + qe) / (0.43999999999999995 - Ke * (t2 + qe)), n2, i2], Je.IabtoCone).map(function(e5) {
    return 1e4 * g((Ve - g(e5, Ge)) / (Ue * g(e5, Ge) - He), Be);
  }), Je.ConetoXYZ), c2 = (a2 + (Le - 1) * s2) / Le;
  return [c2, (o2 + (Re - 1) * c2) / Re, s2];
}, formats: { jzazbz: { coords: [`<percentage> | <number>`, `<number> | <percentage>`, `<number> | <percentage>`] } } }), Xe = new N({ id: `jzczhz`, name: `JzCzHz`, coords: { jz: { refRange: [0, 1], name: `Jz` }, cz: { refRange: [0, 0.26], name: `Chroma` }, hz: { refRange: [0, 360], type: `angle`, name: `Hue` } }, base: Ye, fromBase: R.fromBase, toBase: R.toBase, formats: { jzczhz: { coords: [`<percentage> | <number>`, `<number> | <percentage>`, `<number> | <angle>`] } } });
function Ze(e4, t2) {
  [e4, t2] = M([e4, t2]);
  let [n2, r2, i2] = Xe.from(e4), [a2, o2, s2] = Xe.from(t2), l2 = n2 - a2, u2 = r2 - o2;
  c(i2) && c(s2) ? (i2 = 0, s2 = 0) : c(i2) ? i2 = s2 : c(s2) && (s2 = i2);
  let d2 = i2 - s2, f2 = 2 * Math.sqrt(r2 * o2) * Math.sin(d2 / 2 * (Math.PI / 180));
  return Math.sqrt(l2 ** 2 + u2 ** 2 + f2 ** 2);
}
var Qe = 3424 / 4096, $e = 2413 / 128, et = 2392 / 128, tt = 2610 / 16384, nt = 2523 / 32, rt = 16384 / 2610, it = 32 / 2523, at = { XYZtoLMS: [[0.3592832590121217, 0.6976051147779502, -0.035891593232029], [-0.1920808463704993, 1.100476797037432, 0.0753748658519118], [0.0070797844607479, 0.0748396662186362, 0.8433265453898765]], LMStoIPT: [[2048 / 4096, 2048 / 4096, 0], [6610 / 4096, -13613 / 4096, 7003 / 4096], [17933 / 4096, -17390 / 4096, -543 / 4096]], IPTtoLMS: [[0.9999999999999998, 0.0086090370379328, 0.111029625003026], [0.9999999999999998, -0.0086090370379328, -0.1110296250030259], [0.9999999999999998, 0.5600313357106791, -0.3206271749873188]], LMStoXYZ: [[2.0701522183894223, -1.3263473389671563, 0.2066510476294053], [0.3647385209748072, 0.6805660249472273, -0.0453045459220347], [-0.0497472075358123, -0.0492609666966131, 1.1880659249923042]] }, ot = new N({ id: `ictcp`, name: `ICTCP`, coords: { i: { refRange: [0, 1], name: `I` }, ct: { refRange: [-0.5, 0.5], name: `CT` }, cp: { refRange: [-0.5, 0.5], name: `CP` } }, base: Ie, M: at, fromBase(e4) {
  return st(r(e4, at.XYZtoLMS));
}, toBase(e4) {
  return r(ct(e4), at.LMStoXYZ);
}, formats: { ictcp: { coords: [`<percentage> | <number>`, `<number> | <percentage>`, `<number> | <percentage>`] } } });
function st(e4) {
  return r(e4.map(function(e5) {
    return ((Qe + $e * (e5 / 1e4) ** tt) / (1 + et * (e5 / 1e4) ** tt)) ** nt;
  }), at.LMStoIPT);
}
function ct(e4) {
  return r(e4, at.IPTtoLMS).map(function(e5) {
    return 1e4 * (Math.max(e5 ** it - Qe, 0) / ($e - et * e5 ** it)) ** rt;
  });
}
function lt(e4, t2) {
  [e4, t2] = M([e4, t2]);
  let [n2, r2, i2] = ot.from(e4), [a2, o2, s2] = ot.from(t2);
  return 720 * Math.sqrt((n2 - a2) ** 2 + 0.25 * (r2 - o2) ** 2 + (i2 - s2) ** 2);
}
function ut(e4, t2) {
  [e4, t2] = M([e4, t2]);
  let [n2, r2, i2] = z.from(e4), [a2, o2, s2] = z.from(t2), c2 = n2 - a2, l2 = 2 * (r2 - o2), u2 = 2 * (i2 - s2);
  return Math.sqrt(c2 ** 2 + l2 ** 2 + u2 ** 2);
}
var dt = A.D65, ft = 0.42, pt = 1 / ft, mt = 2 * Math.PI, ht = { cat16: [[0.401288, 0.650173, -0.051461], [-0.250268, 1.204414, 0.045854], [-2079e-6, 0.048952, 0.953127]], cat16Inv: [[1.8620678550872327, -1.0112546305316843, 0.14918677544445175], [0.38752654323613717, 0.6214474419314753, -0.008973985167612518], [-0.015841498849333856, -0.03412293802851557, 1.0499644368778496]], m1: [[460, 451, 288], [460, -891, -261], [460, -220, -6300]] }, gt = { dark: [0.8, 0.525, 0.8], dim: [0.9, 0.59, 0.9], average: [1, 0.69, 1] }, _t = { h: [20.14, 90, 164.25, 237.53, 380.14], e: [0.8, 0.7, 1, 1.2, 0.8], H: [0, 100, 200, 300, 400] }, vt = 180 / Math.PI, yt = Math.PI / 180;
function bt(e4, t2) {
  return e4.map((e5) => {
    let n2 = g(t2 * Math.abs(e5) * 0.01, ft);
    return 400 * h(n2, e5) / (n2 + 27.13);
  });
}
function xt(e4, t2) {
  let n2 = 100 / t2 * 27.13 ** pt;
  return e4.map((e5) => {
    let t3 = Math.abs(e5);
    return h(n2 * g(t3 / (400 - t3), pt), e5);
  });
}
function St(e4) {
  let t2 = L(e4);
  t2 <= _t.h[0] && (t2 += 360);
  let n2 = v(_t.h, t2) - 1, [r2, i2] = _t.h.slice(n2, n2 + 2), [a2, o2] = _t.e.slice(n2, n2 + 2), s2 = _t.H[n2], c2 = (t2 - r2) / a2;
  return s2 + 100 * c2 / (c2 + (i2 - t2) / o2);
}
function Ct(e4) {
  let t2 = (e4 % 400 + 400) % 400, n2 = Math.floor(0.01 * t2);
  t2 %= 100;
  let [r2, i2] = _t.h.slice(n2, n2 + 2), [a2, o2] = _t.e.slice(n2, n2 + 2);
  return L((t2 * (o2 * r2 - a2 * i2) - 100 * r2 * o2) / (t2 * (o2 - a2) - 100 * o2));
}
function wt(e4, t2, n2, i2, a2) {
  let o2 = {};
  o2.discounting = a2, o2.refWhite = e4, o2.surround = i2;
  let s2 = e4.map((e5) => e5 * 100);
  o2.la = t2, o2.yb = n2;
  let c2 = s2[1], l2 = r(s2, ht.cat16), u2 = gt[o2.surround], f2 = u2[0];
  o2.c = u2[1], o2.nc = u2[2];
  let p2 = (1 / (5 * o2.la + 1)) ** 4;
  o2.fl = p2 * o2.la + 0.1 * (1 - p2) * (1 - p2) * Math.cbrt(5 * o2.la), o2.flRoot = o2.fl ** 0.25, o2.n = o2.yb / c2, o2.z = 1.48 + Math.sqrt(o2.n), o2.nbb = 0.725 * o2.n ** -0.2, o2.ncb = o2.nbb;
  let m2 = a2 ? 1 : Math.max(Math.min(f2 * (1 - 1 / 3.6 * Math.exp((-o2.la - 42) / 92)), 1), 0);
  o2.dRgb = l2.map((e5) => d(1, c2 / e5, m2)), o2.dRgbInv = o2.dRgb.map((e5) => 1 / e5);
  let h2 = bt(l2.map((e5, t3) => e5 * o2.dRgb[t3]), o2.fl);
  return o2.aW = o2.nbb * (2 * h2[0] + h2[1] + 0.05 * h2[2]), o2;
}
var Tt = wt(dt, 64 / Math.PI * 0.2, 20, `average`, false);
function Et(e4, t2) {
  if (!(e4.J !== void 0 ^ e4.Q !== void 0)) throw Error(`Conversion requires one and only one: 'J' or 'Q'`);
  if (!(e4.C !== void 0 ^ e4.M !== void 0 ^ e4.s !== void 0)) throw Error(`Conversion requires one and only one: 'C', 'M' or 's'`);
  if (!(e4.h !== void 0 ^ e4.H !== void 0)) throw Error(`Conversion requires one and only one: 'h' or 'H'`);
  if (e4.J === 0 || e4.Q === 0) return [0, 0, 0];
  let n2 = 0;
  n2 = e4.h === void 0 ? Ct(e4.H) * yt : L(e4.h) * yt;
  let i2 = Math.cos(n2), a2 = Math.sin(n2), o2 = 0;
  e4.J === void 0 ? e4.Q !== void 0 && (o2 = 0.25 * t2.c * e4.Q / ((t2.aW + 4) * t2.flRoot)) : o2 = g(e4.J, 1 / 2) * 0.1;
  let s2 = 0;
  e4.C === void 0 ? e4.M === void 0 ? e4.s !== void 0 && (s2 = 4e-4 * e4.s ** 2 * (t2.aW + 4) / t2.c) : s2 = e4.M / t2.flRoot / o2 : s2 = e4.C / o2;
  let c2 = g(s2 * (1.64 - 0.29 ** t2.n) ** -0.73, 10 / 9), l2 = 0.25 * (Math.cos(n2 + 2) + 3.8), u2 = t2.aW * g(o2, 2 / t2.c / t2.z), d2 = 5e4 / 13 * t2.nc * t2.ncb * l2, f2 = u2 / t2.nbb, p2 = 23 * (f2 + 0.305) * _(c2, 23 * d2 + c2 * (11 * i2 + 108 * a2));
  return r(xt(r([f2, p2 * i2, p2 * a2], ht.m1).map((e5) => e5 * 1 / 1403), t2.fl).map((e5, n3) => e5 * t2.dRgbInv[n3]), ht.cat16Inv).map((e5) => e5 / 100);
}
function Dt(e4, t2) {
  let n2 = bt(r(e4.map((e5) => e5 * 100), ht.cat16).map((e5, n3) => e5 * t2.dRgb[n3]), t2.fl), i2 = n2[0] + (-12 * n2[1] + n2[2]) / 11, a2 = (n2[0] + n2[1] - 2 * n2[2]) / 9, o2 = (Math.atan2(a2, i2) % mt + mt) % mt, s2 = 0.25 * (Math.cos(o2 + 2) + 3.8), c2 = g(5e4 / 13 * t2.nc * t2.ncb * _(s2 * Math.sqrt(i2 ** 2 + a2 ** 2), n2[0] + n2[1] + 1.05 * n2[2] + 0.305), 0.9) * (1.64 - 0.29 ** t2.n) ** 0.73, l2 = g(t2.nbb * (2 * n2[0] + n2[1] + 0.05 * n2[2]) / t2.aW, 0.5 * t2.c * t2.z), u2 = 100 * g(l2, 2), d2 = 4 / t2.c * l2 * (t2.aW + 4) * t2.flRoot, f2 = c2 * l2, p2 = f2 * t2.flRoot, m2 = L(o2 * vt), h2 = St(m2);
  return { J: u2, C: f2, h: m2, s: 50 * g(t2.c * c2 / (t2.aW + 4), 1 / 2), Q: d2, M: p2, H: h2 };
}
var Ot = new N({ id: `cam16-jmh`, cssId: `--cam16-jmh`, name: `CAM16-JMh`, coords: { j: { refRange: [0, 100], name: `J` }, m: { refRange: [0, 105], name: `Colorfulness` }, h: { refRange: [0, 360], type: `angle`, name: `Hue` } }, base: P, M: ht, fromBase(e4) {
  this.\u03B5 === void 0 && (this.\u03B5 = Object.values(this.coords)[1].refRange[1] / 1e5);
  let t2 = Dt(e4, Tt), n2 = Math.abs(t2.M) < this.\u03B5;
  return [t2.J, n2 ? 0 : t2.M, n2 ? null : t2.h];
}, toBase(e4) {
  return Et({ J: e4[0], M: e4[1], h: e4[2] }, Tt);
} }), kt = A.D65, At = 216 / 24389, jt = 24389 / 27;
function Mt(e4) {
  return 116 * (e4 > At ? Math.cbrt(e4) : (jt * e4 + 16) / 116) - 16;
}
function Nt(e4) {
  return e4 > 8 ? ((e4 + 16) / 116) ** 3 : e4 / jt;
}
function Pt(e4, t2) {
  let [n2, r2, i2] = e4, a2 = [], o2 = 0;
  if (i2 === 0) return [0, 0, 0];
  let s2 = Nt(i2);
  o2 = i2 > 0 ? 0.00379058511492914 * i2 ** 2 + 0.608983189401032 * i2 + 0.9155088574762233 : 9514440756550361e-21 * i2 ** 2 + 0.08693057439788597 * i2 - 21.928975842194614;
  let c2 = 0, l2 = 1 / 0, u2 = [0, 0, 0];
  for (; c2 <= 15; ) {
    a2 = Et({ J: o2, C: r2, h: n2 }, t2);
    let e5 = Math.abs(a2[1] - s2);
    if (e5 < l2) {
      if (e5 <= 2e-12) return a2;
      u2 = a2, l2 = e5;
    }
    o2 -= (a2[1] - s2) * o2 / (2 * a2[1]), c2 += 1;
  }
  return u2;
}
function Ft(e4, t2) {
  let n2 = Mt(e4[1]);
  if (n2 === 0) return [0, 0, 0];
  let r2 = Dt(e4, It);
  return [L(r2.h), r2.C, n2];
}
var It = wt(kt, 200 / Math.PI * Nt(50), Nt(50) * 100, `average`, false), Lt = new N({ id: `hct`, name: `HCT`, coords: { h: { refRange: [0, 360], type: `angle`, name: `Hue` }, c: { refRange: [0, 145], name: `Colorfulness` }, t: { refRange: [0, 100], name: `Tone` } }, base: P, fromBase(e4) {
  this.\u03B5 === void 0 && (this.\u03B5 = Object.values(this.coords)[1].refRange[1] / 1e5);
  let t2 = Ft(e4, It);
  return t2[1] < this.\u03B5 && (t2[1] = 0, t2[0] = null), t2;
}, toBase(e4) {
  return Pt(e4, It);
}, formats: { color: { id: `--hct`, coords: [`<number> | <angle>`, `<percentage> | <number>`, `<percentage> | <number>`] } } });
180 / Math.PI;
var Rt = Math.PI / 180, zt = [1, 7e-3, 0.0228];
function Bt(e4) {
  e4[1] < 0 && (e4 = Lt.fromBase(Lt.toBase(e4)));
  let t2 = Math.log(Math.max(1 + zt[2] * e4[1] * It.flRoot, 1)) / zt[2], n2 = e4[0] * Rt, r2 = t2 * Math.cos(n2), i2 = t2 * Math.sin(n2);
  return [e4[2], r2, i2];
}
function Vt(e4, t2) {
  [e4, t2] = M([e4, t2]);
  let [n2, r2, i2] = Bt(Lt.from(e4)), [a2, o2, s2] = Bt(Lt.from(t2));
  return Math.sqrt((n2 - a2) ** 2 + (r2 - o2) ** 2 + (i2 - s2) ** 2);
}
var { cos: U, sin: W, sqrt: Ht, atan2: G, exp: Ut, abs: Wt, pow: Gt, PI: Kt } = Math, qt = [[1.000042977349746, 20718877053183e-18, -4361018085669474e-20], [26946201090235744e-21, 0.9999906145080147, -14898828405401079e-21], [-7941753620756204e-21, 12875204405137254e-21, 0.9997859822609763]], Jt = [[0.9999570254019492, -2071874272730964e-20, 4361733292468361e-20], [-2694517763358666e-20, 1.000009385946497, 1490098223546482e-20], [7943459292954202e-21, -1287824596735154e-20, 1.000214063706999]], Yt = [[0.7212986433113499, 0.45344826541531813, -0.19288975751942616], [-0.788211869495579, 1.795241376757236, 0.0876172451181785], [-0.0917700599912156, 0.45765588659459255, 1.2922045513917677]], Xt = [[1.065107295808859, -0.3150044075301121, 0.1803492381741039], [0.4721107713837796, 0.4271995765962455, 0.04150680489380985], [-0.09156391926309541, -0.1736709363194979, 0.7719790382558294]], Zt = [0.47229813098762524, 0.5149184096354483, 0.5113233386366979], Qt = [2.1173067060606283, 1.9420552485353544, 1.9557096741686448], $t = { CAT_TO_HELM: qt, CAT_FROM_HELM: Jt, M1: Yt, M1_INV: Xt, M2: [[-0.26355622180094096, 0.4168322883703174, 0.4926763141656403], [1.8897570508777322, -3.1212232034205774, 1.0421666921060384], [0.3585108617962056, 1.7694028193790368, -1.4120626067695372]], M2_INV: [[0.9183897822815021, 0.5232051237088666, 0.7065804598090856], [1.0899090574433026, 0.07005324849041904, 0.4319776874787044], [1.598895729264209, 0.22061850068770233, 0.012506037355220951]] }, en = -0.02833024015436984, tn = -0.21131429516166544, nn = 0.2189784817615645, rn = -0.06871898981942523, an = 0.005506053349515315, on = -0.0641329861299175, sn = -0.053592461436994296, cn = -0.00954137464208059, ln = 0.2676231133101982, un = 0.8934892185255707, dn = 0.7173169828841472, fn = 0.6915224124600773, pn = 0.48647127559605596, mn = 0.9853124591201782, hn = 0.5385456675962418, gn = 0.12508858146241716, _n = 0.6768950256217603, vn = -0.4963251525324449, yn = -0.09564696283240552, bn = -0.029053748937210654, xn = 1.3346761652952872, Sn = -0.1698908144723919, Cn = -0.195370576218515, wn = 0.5330819227283227, Tn = 0.08863325582067766, En = 0.9365540137751136, Dn = 0.13789738139719568, On = 0.061650260197979936, kn = 0.0641970862504494, An = -0.027401052793571013, jn = -0.09900209889026965, Mn = 0.059635520647228726, Nn = -0.013586499967803128, Pn = 0.2253393118474472, Fn = -1.5239477450767043, In = -1.751157310240011, Ln = -0.43576378069144767, Rn = 1.060094063845983, zn = 0.47931193034584496, Bn = -0.2622579649434462, Vn = 0.13610794232685908, Hn = 0.1168702235362288, Un = -0.01617739641422492, Wn = 0.038145638815030566, Gn = -28.2 * Kt / 180, Kn = U(Gn), qn = W(Gn);
function Jn(e4) {
  return en * U(e4) + tn * W(e4) + nn * U(2 * e4) + rn * W(2 * e4) + an * U(3 * e4) + on * W(3 * e4) + sn * U(4 * e4) + cn * W(4 * e4);
}
function Yn(e4) {
  return 0.02833024015436984 * W(e4) + tn * U(e4) + -2 * nn * W(2 * e4) + 2 * rn * U(2 * e4) + -3 * an * W(3 * e4) + 3 * on * U(3 * e4) + -4 * sn * W(4 * e4) + 4 * cn * U(4 * e4);
}
function Xn(e4) {
  return Ut(Cn * U(e4) + wn * W(e4) + Tn * U(2 * e4) + En * W(2 * e4) + Dn * U(3 * e4) + On * W(3 * e4) + kn * U(4 * e4) + An * W(4 * e4));
}
function Zn(e4) {
  let t2 = e4 - 0.5;
  return Ut(m(-30, Fn * t2 + In * t2 * t2, 30));
}
function Qn(e4, t2) {
  let n2 = Ln * U(e4) + Rn * W(e4) + zn * U(2 * e4) + Bn * W(2 * e4);
  return Ut(m(-30, (t2 - 0.5) * n2, 30));
}
function $n(e4) {
  return Ut(Vn * U(e4) + Hn * W(e4) + Un * U(2 * e4) + Wn * W(2 * e4));
}
function er(e4) {
  return 1 + jn * U(e4) + Mn * W(e4) + Nn * U(2 * e4) + Pn * W(2 * e4);
}
function tr(e4, t2) {
  let n2 = e4 * (1 - e4), r2 = e4 + hn * n2 + gn * n2 * (0.5 - e4) + _n * n2 * n2;
  return r2 += n2 * (vn * U(t2) + yn * W(t2)), r2;
}
function nr(e4, t2) {
  let n2 = vn * U(t2) + yn * W(t2), r2 = e4;
  for (let t3 = 0; t3 < 15; t3++) {
    let t4 = r2 * (1 - r2), i2 = 1 - 2 * r2, a2 = r2 + (hn + n2) * t4 + gn * t4 * (0.5 - r2) + _n * t4 * t4 - e4, o2 = 1 + (hn + n2) * i2 + gn * (i2 * (0.5 - r2) - t4) + _n * 2 * t4 * i2;
    Wt(o2) < 1e-10 && (o2 = 1), r2 -= a2 / o2;
  }
  return r2;
}
function rr(e4, t2) {
  let n2 = bn + xn * U(t2) + Sn * W(t2), r2 = e4 < 1 ? 1 - e4 : 0;
  return e4 * Ut(m(-30, n2 * e4 * r2 * r2, 30));
}
function ir(e4, t2) {
  let n2 = bn + xn * U(t2) + Sn * W(t2), r2 = e4;
  for (let t3 = 0; t3 < 12; t3++) {
    let t4 = r2 < 1 ? 1 - r2 : 0, i2 = Ut(m(-30, n2 * r2 * t4 * t4, 30)), a2 = r2 * i2 - e4, o2 = n2 * t4 * (1 - 3 * r2), s2 = i2 * (1 + r2 * o2);
    Wt(s2) < 1e-10 && (s2 = 1), r2 -= a2 / s2;
  }
  return r2;
}
var ar = function(e4) {
  let [t2, n2, i2] = r(r(e4, $t.CAT_TO_HELM), $t.M1), [a2, o2, s2] = r([g(t2, Zt[0]), g(n2, Zt[1]), g(i2, Zt[2])], $t.M2), c2 = G(s2, o2), l2 = Ht(o2 * o2 + s2 * s2), u2 = Jn(c2), d2 = c2 + u2;
  o2 = l2 * U(d2), s2 = l2 * W(d2);
  let f2 = ln * Gt(Ht(o2 * o2 + s2 * s2), m(0.01, un, 10)), p2 = G(s2, o2), h2 = 1 + dn * U(p2) + fn * W(p2) + pn * U(2 * p2) + mn * W(2 * p2);
  a2 += f2 * h2, c2 = G(s2, o2), a2 = tr(a2, c2), c2 = G(s2, o2), a2 = rr(a2, c2), c2 = G(s2, o2);
  let _2 = Xn(c2);
  o2 *= _2, s2 *= _2, c2 = G(s2, o2), l2 = Ht(o2 * o2 + s2 * s2);
  let v2 = er(c2), y2 = l2 > 0 ? Gt(l2, v2) : 0;
  o2 = y2 * U(c2), s2 = y2 * W(c2);
  let b2 = Zn(a2);
  o2 *= b2, s2 *= b2, c2 = G(s2, o2);
  let x2 = Qn(c2, a2);
  o2 *= x2, s2 *= x2, c2 = G(s2, o2), a2 *= $n(c2);
  let S2 = o2 * Kn - s2 * qn, C2 = o2 * qn + s2 * Kn;
  return [a2, S2, C2];
}, or = function(e4) {
  let [t2, n2, i2] = e4, a2 = n2 * Kn + i2 * qn, o2 = -n2 * qn + i2 * Kn;
  n2 = a2, i2 = o2;
  let s2 = G(i2, n2);
  t2 /= $n(s2), s2 = G(i2, n2);
  let c2 = Qn(s2, t2);
  n2 /= c2, i2 /= c2;
  let l2 = Zn(t2);
  n2 /= l2, i2 /= l2, s2 = G(i2, n2);
  let u2 = Ht(n2 * n2 + i2 * i2), d2 = er(s2), f2 = u2 > 0 ? Gt(u2, 1 / d2) : 0;
  n2 = f2 * U(s2), i2 = f2 * W(s2), s2 = G(i2, n2);
  let p2 = Xn(s2);
  n2 /= p2, i2 /= p2, s2 = G(i2, n2), t2 = ir(t2, s2), s2 = G(i2, n2), t2 = nr(t2, s2);
  let h2 = ln * Gt(Ht(n2 * n2 + i2 * i2), m(0.01, un, 10)), _2 = G(i2, n2), v2 = 1 + dn * U(_2) + fn * W(_2) + pn * U(2 * _2) + mn * W(2 * _2);
  t2 -= h2 * v2;
  let y2 = G(i2, n2);
  u2 = Ht(n2 * n2 + i2 * i2);
  let b2 = y2;
  for (let e5 = 0; e5 < 8; e5++) {
    let e6 = b2 + Jn(b2) - y2, t3 = 1 + Yn(b2);
    Wt(t3) < 1e-10 && (t3 = 1), b2 -= e6 / t3;
  }
  n2 = u2 * U(b2), i2 = u2 * W(b2);
  let [x2, S2, C2] = r([t2, n2, i2], $t.M2_INV);
  return r(r([g(x2, Qt[0]), g(S2, Qt[1]), g(C2, Qt[2])], $t.M1_INV), $t.CAT_FROM_HELM);
}, sr = new N({ id: `helmlab-metric`, name: `Helmlab MetricSpace`, cssId: `--helmlab-metric`, coords: { l: { refRange: [0, 1.6], name: `Lightness` }, a: { refRange: [-1.5, 1.5] }, b: { refRange: [-1.5, 1.5] } }, white: `D65`, base: P, M: $t, fromBase(e4) {
  return ar(e4);
}, toBase(e4) {
  return or(e4);
} }), cr = -0.9155125151657894, lr = 2.9268353744941558, ur = 3.966003089807536, dr = 1.9737081170404969, fr = 52.473130649294724, pr = 0.47897301074925214;
function mr(e4, t2) {
  [e4, t2] = M([e4, t2]);
  let [n2, r2, i2] = sr.from(e4), [a2, o2, s2] = sr.from(t2), c2 = n2 - a2, l2 = r2 - o2, u2 = i2 - s2, d2 = 1 + cr * ((n2 + a2) * 0.5 - 0.5) ** 2, f2 = 1 + lr * ((Math.sqrt(r2 ** 2 + i2 ** 2) + Math.sqrt(o2 ** 2 + s2 ** 2)) * 0.5), p2 = (c2 ** 2 / d2 ** 2 + ur * (l2 ** 2 + u2 ** 2) / f2 ** 2) ** (dr / 2);
  return (p2 / (1 + fr * p2)) ** pr;
}
var hr = { deltaE76: Me, deltaECMC: Pe, deltaE2000: Se, deltaEJz: Ze, deltaEITP: lt, deltaEOK: we, deltaEOK2: ut, deltaEHCT: Vt, deltaEHelmlab: mr };
function gr(e4) {
  return Math.max(parseFloat(`1e${(e4 ? Math.floor(Math.log10(Math.abs(e4))) : 0) - 2}`), 1e-6);
}
var _r = { hct: { method: `hct.c`, jnd: 2, deltaEMethod: `hct`, blackWhiteClamp: {} }, "hct-tonal": { method: `hct.c`, jnd: 0, deltaEMethod: `hct`, blackWhiteClamp: { channel: `hct.t`, min: 0, max: 100 } } };
function K(e4, { method: t2 = O.gamut_mapping, space: n2 = void 0, deltaEMethod: r2 = ``, jnd: i2 = 2, blackWhiteClamp: o2 = void 0 } = {}) {
  if (e4 = M(e4), a(arguments[1]) ? n2 = arguments[1] : n2 || (n2 = e4.space), n2 = N.get(n2), Ee(e4, n2, { epsilon: 0 })) return e4;
  let s2;
  if (t2 === `css`) s2 = yr(e4, { space: n2 });
  else if (t2 === `raytrace`) s2 = xr(e4, { space: n2 });
  else {
    if (t2 !== `clip`) {
      Object.prototype.hasOwnProperty.call(_r, t2) && ({ method: t2, jnd: i2, deltaEMethod: r2, blackWhiteClamp: o2 } = _r[t2]);
      let a2 = Se;
      if (r2 !== ``) {
        for (let e5 in hr) if (`deltae` + r2.toLowerCase() === e5.toLowerCase()) {
          a2 = hr[e5];
          break;
        }
      }
      i2 === 0 && (i2 = 1e-16);
      let l2 = K(B(e4, n2), { method: `clip`, space: n2 });
      if (a2(e4, l2) > i2) {
        if (o2 && Object.keys(o2).length === 3) {
          let t3 = N.resolveCoord(o2.channel), n3 = V(B(e4, t3.space), t3.id);
          if (c(n3) && (n3 = 0), n3 >= o2.max) return B({ space: `xyz-d65`, coords: A.D65 }, e4.space);
          if (n3 <= o2.min) return B({ space: `xyz-d65`, coords: [0, 0, 0] }, e4.space);
        }
        let r3 = N.resolveCoord(t2), l3 = r3.space, u2 = r3.id, d2 = B(e4, l3);
        d2.coords.forEach((e5, t3) => {
          c(e5) && (d2.coords[t3] = 0);
        });
        let f2 = (r3.range || r3.refRange)[0], p2 = gr(i2), m2 = f2, h2 = V(d2, u2);
        for (; h2 - m2 > p2; ) {
          let e5 = Ae(d2);
          e5 = K(e5, { space: n2, method: `clip` }), a2(d2, e5) - i2 < p2 ? m2 = V(d2, u2) : h2 = V(d2, u2), H(d2, u2, (m2 + h2) / 2);
        }
        s2 = B(d2, n2);
      } else s2 = l2;
    } else s2 = B(e4, n2);
    if (t2 === `clip` || !Ee(s2, n2, { epsilon: 0 })) {
      let e5 = Object.values(n2.coords).map((e6) => e6.range || []);
      s2.coords = s2.coords.map((t3, n3) => {
        let [r3, i3] = e5[n3];
        return r3 !== void 0 && (t3 = Math.max(r3, t3)), i3 !== void 0 && (t3 = Math.min(t3, i3)), t3;
      });
    }
  }
  return n2 !== e4.space && (s2 = B(s2, e4.space)), e4.coords = s2.coords, e4;
}
K.returns = `color`;
var vr = { WHITE: { space: z, coords: [1, 0, 0], alpha: 1 }, BLACK: { space: z, coords: [0, 0, 0], alpha: 1 } };
function yr(e4, { space: t2 } = {}) {
  let n2 = 0.02, r2 = 1e-4;
  if (e4 = M(e4), t2 || (t2 = e4.space), t2 = N.get(t2), t2.isUnbounded) return B(e4, t2);
  let i2 = B(e4, Oe), a2 = i2.coords[0];
  if (a2 >= 1) {
    let n3 = B(vr.WHITE, t2);
    return n3.alpha = e4.alpha, B(n3, t2);
  }
  if (a2 <= 0) {
    let n3 = B(vr.BLACK, t2);
    return n3.alpha = e4.alpha, B(n3, t2);
  }
  if (Ee(i2, t2, { epsilon: 0 })) return B(i2, t2);
  function o2(e5) {
    let n3 = B(e5, t2), r3 = Object.values(t2.coords);
    return n3.coords = n3.coords.map((e6, t3) => {
      if (`range` in r3[t3]) {
        let [n4, i3] = r3[t3].range;
        return m(n4, e6, i3);
      }
      return e6;
    }), n3;
  }
  let s2 = 0, c2 = i2.coords[1], l2 = true, u2 = Ae(i2), d2 = o2(u2), f2 = we(d2, u2);
  if (f2 < n2) return d2;
  for (; c2 - s2 > r2; ) {
    let e5 = (s2 + c2) / 2;
    if (u2.coords[1] = e5, l2 && Ee(u2, t2, { epsilon: 0 })) s2 = e5;
    else if (d2 = o2(u2), f2 = we(d2, u2), f2 < n2) {
      if (n2 - f2 < r2) break;
      l2 = false, s2 = e5;
    } else c2 = e5;
  }
  return d2;
}
function br(e4, t2, n2 = [0, 0, 0], r2 = [1, 1, 1]) {
  let i2 = 1 / 0, a2 = -1 / 0, o2 = [];
  for (let s2 = 0; s2 < 3; s2++) {
    let c2 = e4[s2], l2 = t2[s2] - c2, u2 = n2[s2], d2 = r2[s2];
    if (o2.push(l2), Math.abs(l2) > 1e-12) {
      let e5 = 1 / l2, t3 = (u2 - c2) * e5, n3 = (d2 - c2) * e5;
      a2 = Math.max(Math.min(t3, n3), a2), i2 = Math.min(Math.max(t3, n3), i2);
    } else if (c2 < u2 || c2 > d2) return [];
  }
  return a2 > i2 || i2 < 0 || (a2 < 0 && (a2 = i2), !isFinite(a2)) ? [] : [e4[0] + o2[0] * a2, e4[1] + o2[1] * a2, e4[2] + o2[2] * a2];
}
function xr(e4, { space: t2 } = {}) {
  if (e4 = M(e4), t2 || (t2 = e4.space), t2 = N.get(t2), t2.isUnbounded) return B(e4, t2);
  let n2 = B(e4, Oe), [r2, i2, a2] = n2.coords;
  if (r2 >= 1) {
    let n3 = B(vr.WHITE, t2);
    return n3.alpha = e4.alpha, B(n3, t2);
  } else if (r2 <= 0) {
    let n3 = B(vr.BLACK, t2);
    return n3.alpha = e4.alpha, B(n3, t2);
  }
  let o2 = t2, s2 = t2.rgbGamut;
  if (s2 !== void 0 && (t2 = s2), !y(t2, F)) throw Error(`An RGB gamut is required`);
  let [c2, l2] = Object.values(t2.coords)[0].range, u2 = [l2, l2, l2], d2 = t2.linearGamut;
  d2 !== void 0 && (l2 = B({ space: t2, coords: u2, alpha: e4.alpha }, d2).coords[0], u2 = [l2, l2, l2], t2 = d2, c2 = Object.values(t2.coords)[0].range[0]);
  let f2 = [c2, c2, c2], p2 = B(n2, t2);
  if (!p2.coords.every((e5) => c2 <= e5 && e5 <= l2)) {
    let e5 = B({ space: Oe, coords: [r2, 0, a2] }, t2).coords, n3 = c2 + 1e-12, i3 = l2 - 1e-12, o3 = p2.coords;
    for (let s3 = 0; s3 < 4; s3++) {
      if (s3) {
        let e6 = B(p2, Oe);
        e6.coords[0] = r2, e6.coords[2] = a2, p2 = B(e6, t2);
      }
      let c3 = br(e5, p2.coords, f2, u2);
      if (c3.length === 0) {
        p2.coords = [...o3];
        break;
      }
      s3 && p2.coords.every((e6) => n3 < e6 && e6 < i3) && (e5 = [...p2.coords]), o3 = c3, p2.coords = [...c3];
    }
  }
  p2 = B(p2, o2);
  let h2 = Object.values(o2.coords);
  return p2.coords = p2.coords.map((e5, t3) => {
    if (`range` in h2[t3]) {
      let [n3, r3] = h2[t3].range;
      return m(n3, e5, r3);
    }
    return e5;
  }), p2;
}
var Sr = class extends N {
  constructor(e4) {
    let t2 = N.get(e4.base), n2 = e4.chroma ?? `c`, r2 = Object.keys(t2.coords), i2 = r2.indexOf(n2);
    if (i2 === -1) throw TypeError(`GamutRelativeColorSpace needs a "${n2}" coordinate, got ${t2.id}`);
    let a2 = Object.fromEntries(Object.entries(t2.coords).map(([e5, t3]) => [e5, { ...t3 }]));
    a2[n2].range = [0, 1], delete a2[n2].refRange, e4.coords ?? (e4.coords = a2), e4.formats ?? (e4.formats = { color: { coords: r2.map((e5) => {
      if (t2.coords[e5].type === `angle`) return `<number> | <angle>`;
      let [r3, i3] = t2.coords[e5].range ?? t2.coords[e5].refRange ?? [];
      return e5 === n2 || r3 === 0 && i3 === 1 ? `<percentage> | <number>` : `<number> | <percentage>`;
    }) } }), super(e4), this.chromaIndex = i2, this.method = `${t2.id}.${n2}`;
    let o2 = [[0, 0, 1], [0, 1, 0], [0, 1, 1], [1, 0, 0], [1, 0, 1], [1, 1, 0]];
    this.oogChroma = 1.01 * Math.max(...o2.map((e5) => t2.from(this.gamutSpace, e5)[this.chromaIndex] || 0));
  }
  maxChroma(e4) {
    let t2 = [...e4];
    return t2[this.chromaIndex] = this.oogChroma, K({ space: this.base, coords: t2 }, { space: this.gamutSpace, method: this.method, deltaEMethod: `OK`, jnd: 0 }).coords[this.chromaIndex];
  }
  toBase(e4) {
    return e4 = [...e4], e4.some((e5, t2) => t2 !== this.chromaIndex && c(e5)) ? e4[this.chromaIndex] !== 0 && (e4[this.chromaIndex] = null) : c(e4[this.chromaIndex]) || (e4[this.chromaIndex] *= this.maxChroma(e4)), e4;
  }
  fromBase(e4) {
    if (e4 = [...e4], e4.some((e5, t2) => t2 !== this.chromaIndex && c(e5))) e4[this.chromaIndex] !== 0 && (e4[this.chromaIndex] = null);
    else if (!c(e4[this.chromaIndex])) {
      let t2 = this.maxChroma(e4);
      e4[this.chromaIndex] = t2 ? e4[this.chromaIndex] / t2 : 0;
    }
    return e4;
  }
};
function Cr(e4, t2 = {}) {
  if (Array.isArray(e4)) return e4.map((e5) => Cr(e5, t2));
  let { cssProperty: n2 = `background-color`, element: r2, ...i2 } = t2, o2 = null;
  try {
    return M(e4, i2);
  } catch (e5) {
    o2 = e5;
  }
  let { CSS: s2, getComputedStyle: c2 } = globalThis;
  if (a(e4) && r2 && s2 && c2 && s2.supports(n2, e4)) {
    let t3 = r2.style[n2];
    e4 !== t3 && (r2.style[n2] = e4);
    let a2 = c2(r2).getPropertyValue(n2);
    if (e4 !== t3 && (r2.style[n2] = t3), a2 !== e4) try {
      return M(a2, i2);
    } catch (e5) {
      o2 = e5;
    }
    else o2 = { message: `Color value is a valid CSS color, but it could not be resolved :(` };
  }
  return t2.errorMeta && (t2.errorMeta.error = o2), null;
}
function wr(e4, t2 = {}) {
  let { precision: n2 = O.precision, format: r2, inGamut: i2 = true, coords: a2, alpha: o2, commas: c2 } = t2, l2, u2 = M(e4), d2 = r2, f2 = u2.parseMeta;
  f2 && !r2 && (f2.format.canSerialize() && (r2 = f2.format, d2 = f2.formatId), a2 ?? (a2 = f2.types), o2 ?? (o2 = f2.alphaType), c2 ?? (c2 = f2.commas)), d2 && (r2 = u2.space.getFormat(r2) ?? N.findFormat(d2)), r2 || (r2 = u2.space.getFormat(`default`) ?? N.DEFAULT_FORMAT, d2 = r2.name), r2 && r2.space && r2.space !== u2.space && (u2 = B(u2, r2.space));
  let p2 = u2.coords.slice();
  if (i2 || (i2 = r2.toGamut), i2 && !Ee(u2) && (p2 = K(Ae(u2), i2 === true ? void 0 : i2).coords), r2.type === `custom`) if (r2.serialize) l2 = r2.serialize(p2, u2.alpha, t2);
  else throw TypeError(`format ${d2} can only be used to parse colors, not for serialization`);
  else {
    let e5 = r2.name || `color`, t3 = r2.serializeCoords(p2, n2, a2);
    if (e5 === `color`) {
      let e6 = r2.id || r2.ids?.[0] || u2.space.cssId || u2.space.id;
      t3.unshift(e6);
    }
    let i3 = u2.alpha;
    o2 !== void 0 && typeof o2 != `object` && (o2 = typeof o2 == `string` ? { type: o2 } : { include: o2 });
    let d3 = o2?.type ?? `<number>`, f3 = o2?.include === true || r2.alpha === true || o2?.include !== false && r2.alpha !== false && i3 < 1, m2 = ``;
    if (c2 ?? (c2 = r2.commas), f3) {
      if (n2 !== null) {
        let e6;
        d3 === `<percentage>` && (e6 = `%`, i3 *= 100), i3 = s(i3, { precision: n2, unit: e6 });
      }
      m2 = `${c2 ? `,` : ` /`} ${i3}`;
    }
    l2 = `${e5}(${t3.join(c2 ? `, ` : ` `)}${m2})`;
  }
  return l2;
}
var Tr = { toXYZ: [[0.6369580483012914, 0.14461690358620832, 0.1688809751641721], [0.2627002120112671, 0.6779980715188708, 0.05930171646986196], [0, 0.028072693049087428, 1.060985057710791]], fromXYZ: [[1.716651187971268, -0.355670783776392, -0.25336628137366], [-0.666684351832489, 1.616481236634939, 0.0157685458139111], [0.017639857445311, -0.042770613257809, 0.942103121235474]] }, Er = new F({ id: `rec2020-linear`, cssId: `--rec2020-linear`, name: `Linear REC.2020`, white: `D65`, M: Tr }), Dr = new F({ id: `rec2020`, name: `REC.2020`, base: Er, linearGamut: Er, toBase(e4) {
  return e4.map(function(e5) {
    let t2 = e5 < 0 ? -1 : 1;
    return t2 * (e5 * t2) ** 2.4;
  });
}, fromBase(e4) {
  return e4.map(function(e5) {
    let t2 = e5 < 0 ? -1 : 1;
    return t2 * (e5 * t2) ** (1 / 2.4);
  });
} }), Or = new F({ id: `p3-linear`, cssId: `display-p3-linear`, name: `Linear P3`, white: `D65`, M: { toXYZ: [[0.4865709486482162, 0.26566769316909306, 0.1982172852343625], [0.2289745640697488, 0.6917385218365064, 0.079286914093745], [0, 0.04511338185890264, 1.043944368900976]], fromXYZ: [[2.493496911941425, -0.9313836179191239, -0.40271078445071684], [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577], [0.03584583024378447, -0.07617238926804182, 0.9568845240076872]] } }), kr = { toXYZ: [[0.41239079926595934, 0.357584339383878, 0.1804807884018343], [0.21263900587151027, 0.715168678767756, 0.07219231536073371], [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]], fromXYZ: [[3.2409699419045226, -1.537383177570094, -0.4986107602930034], [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559], [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]] }, Ar = new F({ id: `srgb-linear`, name: `Linear sRGB`, white: `D65`, M: kr }), jr = { aliceblue: [240 / 255, 248 / 255, 1], antiquewhite: [250 / 255, 235 / 255, 215 / 255], aqua: [0, 1, 1], aquamarine: [127 / 255, 1, 212 / 255], azure: [240 / 255, 1, 1], beige: [245 / 255, 245 / 255, 220 / 255], bisque: [1, 228 / 255, 196 / 255], black: [0, 0, 0], blanchedalmond: [1, 235 / 255, 205 / 255], blue: [0, 0, 1], blueviolet: [138 / 255, 43 / 255, 226 / 255], brown: [165 / 255, 42 / 255, 42 / 255], burlywood: [222 / 255, 184 / 255, 135 / 255], cadetblue: [95 / 255, 158 / 255, 160 / 255], chartreuse: [127 / 255, 1, 0], chocolate: [210 / 255, 105 / 255, 30 / 255], coral: [1, 127 / 255, 80 / 255], cornflowerblue: [100 / 255, 149 / 255, 237 / 255], cornsilk: [1, 248 / 255, 220 / 255], crimson: [220 / 255, 20 / 255, 60 / 255], cyan: [0, 1, 1], darkblue: [0, 0, 139 / 255], darkcyan: [0, 139 / 255, 139 / 255], darkgoldenrod: [184 / 255, 134 / 255, 11 / 255], darkgray: [169 / 255, 169 / 255, 169 / 255], darkgreen: [0, 100 / 255, 0], darkgrey: [169 / 255, 169 / 255, 169 / 255], darkkhaki: [189 / 255, 183 / 255, 107 / 255], darkmagenta: [139 / 255, 0, 139 / 255], darkolivegreen: [85 / 255, 107 / 255, 47 / 255], darkorange: [1, 140 / 255, 0], darkorchid: [153 / 255, 50 / 255, 204 / 255], darkred: [139 / 255, 0, 0], darksalmon: [233 / 255, 150 / 255, 122 / 255], darkseagreen: [143 / 255, 188 / 255, 143 / 255], darkslateblue: [72 / 255, 61 / 255, 139 / 255], darkslategray: [47 / 255, 79 / 255, 79 / 255], darkslategrey: [47 / 255, 79 / 255, 79 / 255], darkturquoise: [0, 206 / 255, 209 / 255], darkviolet: [148 / 255, 0, 211 / 255], deeppink: [1, 20 / 255, 147 / 255], deepskyblue: [0, 191 / 255, 1], dimgray: [105 / 255, 105 / 255, 105 / 255], dimgrey: [105 / 255, 105 / 255, 105 / 255], dodgerblue: [30 / 255, 144 / 255, 1], firebrick: [178 / 255, 34 / 255, 34 / 255], floralwhite: [1, 250 / 255, 240 / 255], forestgreen: [34 / 255, 139 / 255, 34 / 255], fuchsia: [1, 0, 1], gainsboro: [220 / 255, 220 / 255, 220 / 255], ghostwhite: [248 / 255, 248 / 255, 1], gold: [1, 215 / 255, 0], goldenrod: [218 / 255, 165 / 255, 32 / 255], gray: [128 / 255, 128 / 255, 128 / 255], green: [0, 128 / 255, 0], greenyellow: [173 / 255, 1, 47 / 255], grey: [128 / 255, 128 / 255, 128 / 255], honeydew: [240 / 255, 1, 240 / 255], hotpink: [1, 105 / 255, 180 / 255], indianred: [205 / 255, 92 / 255, 92 / 255], indigo: [75 / 255, 0, 130 / 255], ivory: [1, 1, 240 / 255], khaki: [240 / 255, 230 / 255, 140 / 255], lavender: [230 / 255, 230 / 255, 250 / 255], lavenderblush: [1, 240 / 255, 245 / 255], lawngreen: [124 / 255, 252 / 255, 0], lemonchiffon: [1, 250 / 255, 205 / 255], lightblue: [173 / 255, 216 / 255, 230 / 255], lightcoral: [240 / 255, 128 / 255, 128 / 255], lightcyan: [224 / 255, 1, 1], lightgoldenrodyellow: [250 / 255, 250 / 255, 210 / 255], lightgray: [211 / 255, 211 / 255, 211 / 255], lightgreen: [144 / 255, 238 / 255, 144 / 255], lightgrey: [211 / 255, 211 / 255, 211 / 255], lightpink: [1, 182 / 255, 193 / 255], lightsalmon: [1, 160 / 255, 122 / 255], lightseagreen: [32 / 255, 178 / 255, 170 / 255], lightskyblue: [135 / 255, 206 / 255, 250 / 255], lightslategray: [119 / 255, 136 / 255, 153 / 255], lightslategrey: [119 / 255, 136 / 255, 153 / 255], lightsteelblue: [176 / 255, 196 / 255, 222 / 255], lightyellow: [1, 1, 224 / 255], lime: [0, 1, 0], limegreen: [50 / 255, 205 / 255, 50 / 255], linen: [250 / 255, 240 / 255, 230 / 255], magenta: [1, 0, 1], maroon: [128 / 255, 0, 0], mediumaquamarine: [102 / 255, 205 / 255, 170 / 255], mediumblue: [0, 0, 205 / 255], mediumorchid: [186 / 255, 85 / 255, 211 / 255], mediumpurple: [147 / 255, 112 / 255, 219 / 255], mediumseagreen: [60 / 255, 179 / 255, 113 / 255], mediumslateblue: [123 / 255, 104 / 255, 238 / 255], mediumspringgreen: [0, 250 / 255, 154 / 255], mediumturquoise: [72 / 255, 209 / 255, 204 / 255], mediumvioletred: [199 / 255, 21 / 255, 133 / 255], midnightblue: [25 / 255, 25 / 255, 112 / 255], mintcream: [245 / 255, 1, 250 / 255], mistyrose: [1, 228 / 255, 225 / 255], moccasin: [1, 228 / 255, 181 / 255], navajowhite: [1, 222 / 255, 173 / 255], navy: [0, 0, 128 / 255], oldlace: [253 / 255, 245 / 255, 230 / 255], olive: [128 / 255, 128 / 255, 0], olivedrab: [107 / 255, 142 / 255, 35 / 255], orange: [1, 165 / 255, 0], orangered: [1, 69 / 255, 0], orchid: [218 / 255, 112 / 255, 214 / 255], palegoldenrod: [238 / 255, 232 / 255, 170 / 255], palegreen: [152 / 255, 251 / 255, 152 / 255], paleturquoise: [175 / 255, 238 / 255, 238 / 255], palevioletred: [219 / 255, 112 / 255, 147 / 255], papayawhip: [1, 239 / 255, 213 / 255], peachpuff: [1, 218 / 255, 185 / 255], peru: [205 / 255, 133 / 255, 63 / 255], pink: [1, 192 / 255, 203 / 255], plum: [221 / 255, 160 / 255, 221 / 255], powderblue: [176 / 255, 224 / 255, 230 / 255], purple: [128 / 255, 0, 128 / 255], rebeccapurple: [102 / 255, 51 / 255, 153 / 255], red: [1, 0, 0], rosybrown: [188 / 255, 143 / 255, 143 / 255], royalblue: [65 / 255, 105 / 255, 225 / 255], saddlebrown: [139 / 255, 69 / 255, 19 / 255], salmon: [250 / 255, 128 / 255, 114 / 255], sandybrown: [244 / 255, 164 / 255, 96 / 255], seagreen: [46 / 255, 139 / 255, 87 / 255], seashell: [1, 245 / 255, 238 / 255], sienna: [160 / 255, 82 / 255, 45 / 255], silver: [192 / 255, 192 / 255, 192 / 255], skyblue: [135 / 255, 206 / 255, 235 / 255], slateblue: [106 / 255, 90 / 255, 205 / 255], slategray: [112 / 255, 128 / 255, 144 / 255], slategrey: [112 / 255, 128 / 255, 144 / 255], snow: [1, 250 / 255, 250 / 255], springgreen: [0, 1, 127 / 255], steelblue: [70 / 255, 130 / 255, 180 / 255], tan: [210 / 255, 180 / 255, 140 / 255], teal: [0, 128 / 255, 128 / 255], thistle: [216 / 255, 191 / 255, 216 / 255], tomato: [1, 99 / 255, 71 / 255], turquoise: [64 / 255, 224 / 255, 208 / 255], violet: [238 / 255, 130 / 255, 238 / 255], wheat: [245 / 255, 222 / 255, 179 / 255], white: [1, 1, 1], whitesmoke: [245 / 255, 245 / 255, 245 / 255], yellow: [1, 1, 0], yellowgreen: [154 / 255, 205 / 255, 50 / 255] }, Mr = [, , ,].fill(`<percentage> | <number>[0, 255]`), Nr = [, , ,].fill(`<number>[0, 255]`), q = new F({ id: `srgb`, name: `sRGB`, base: Ar, linearGamut: Ar, fromBase: (e4) => e4.map((e5) => {
  let t2 = e5 < 0 ? -1 : 1, n2 = e5 * t2;
  return n2 > 31308e-7 ? t2 * (1.055 * n2 ** (1 / 2.4) - 0.055) : 12.92 * e5;
}), toBase: (e4) => e4.map((e5) => {
  let t2 = e5 < 0 ? -1 : 1, n2 = e5 * t2;
  return n2 <= 0.04045 ? e5 / 12.92 : t2 * ((n2 + 0.055) / 1.055) ** 2.4;
}), formats: { rgb: { coords: Mr }, rgb_number: { name: `rgb`, commas: true, coords: Nr, alpha: false }, color: {}, rgba: { coords: Mr, commas: true, alpha: true }, rgba_number: { name: `rgba`, commas: true, coords: Nr }, hex: { type: `custom`, toGamut: true, test: (e4) => /^#(([a-f0-9]{2}){3,4}|[a-f0-9]{3,4})$/i.test(e4), parse(e4) {
  e4.length <= 5 && (e4 = e4.replace(/[a-f0-9]/gi, `$&$&`));
  let t2 = [];
  return e4.replace(/[a-f0-9]{2}/gi, (e5) => {
    t2.push(parseInt(e5, 16) / 255);
  }), { spaceId: `srgb`, coords: t2.slice(0, 3), alpha: t2.slice(3)[0] };
}, serialize: (e4, t2, { collapse: n2 = true, alpha: r2 } = {}) => {
  (r2 !== false && t2 < 1 || r2 === true) && e4.push(t2), e4 = e4.map((e5) => Math.round(e5 * 255));
  let i2 = n2 && e4.every((e5) => e5 % 17 == 0);
  return `#` + e4.map((e5) => i2 ? (e5 / 17).toString(16) : e5.toString(16).padStart(2, `0`)).join(``);
} }, keyword: { type: `custom`, test: (e4) => /^[a-z]+$/i.test(e4), parse(e4) {
  e4 = e4.toLowerCase();
  let t2 = { spaceId: `srgb`, coords: null, alpha: 1 };
  if (e4 === `transparent` ? (t2.coords = jr.black, t2.alpha = 0) : t2.coords = jr[e4], t2.coords) return t2;
} } } }), Pr = new F({ id: `p3`, cssId: `display-p3`, name: `P3`, base: Or, linearGamut: Or, fromBase: q.fromBase, toBase: q.toBase });
O.display_space = q;
var Fr;
if (typeof CSS < `u` && CSS.supports) for (let e4 of [I, Dr, Pr]) {
  let t2 = wr({ space: e4, coords: e4.getMinCoords(), alpha: 1 });
  if (CSS.supports(`color`, t2)) {
    O.display_space = e4;
    break;
  }
}
function Ir(e4, { space: t2, supports: n2 = globalThis.CSS?.supports, ...r2 } = {}) {
  e4 = M(e4);
  let i2 = wr(e4, r2);
  if (!n2 || n2(`color`, i2) || !O.display_space) i2 = new String(i2), i2.color = e4;
  else {
    let a2 = e4;
    if ((e4.coords.some(c) || c(e4.alpha)) && !(Fr ?? (Fr = n2(`color`, `hsl(none 50% 50%)`))) && (a2 = Ae(e4), a2.coords = a2.coords.map(l), a2.alpha = l(a2.alpha), i2 = wr(a2, r2), n2(`color`, i2))) return i2 = new String(i2), i2.color = a2, i2;
    if (t2 === void 0) {
      t2 = a2.space;
      let e5 = t2.displaySpaces ?? t2.bases;
      !t2.displaySpaces && !t2.id.startsWith(`xyz-`) && (e5 = e5.filter((e6) => !e6.id.startsWith(`xyz-`)));
      for (let t3 of e5) {
        let e6 = B(a2, t3), o2 = wr(e6, r2);
        if (n2(`color`, o2)) return i2 = new String(o2), i2.color = e6, i2;
      }
      t2 = O.display_space;
    }
    a2 = B(a2, t2), i2 = new String(wr(a2, r2)), i2.color = a2;
  }
  return i2;
}
function Lr(e4, t2, { space: n2, hue: r2 = `shorter` } = {}) {
  e4 = M(e4), n2 || (n2 = e4.space), n2 = N.get(n2);
  let i2 = Object.values(n2.coords);
  [e4, t2] = [e4, t2].map((e5) => B(e5, n2));
  let [a2, o2] = [e4, t2].map((e5) => e5.coords), s2 = a2.map((e5, t3) => {
    let n3 = i2[t3], a3 = o2[t3];
    return n3.type === `angle` && ([e5, a3] = ge(r2, [e5, a3])), Rr(e5, a3);
  }), c2 = Rr(e4.alpha, t2.alpha);
  return { space: n2, coords: s2, alpha: c2 };
}
function Rr(e4, t2) {
  return c(e4) || c(t2) ? e4 === t2 ? null : 0 : e4 - t2;
}
function zr(e4, t2) {
  return e4 = M(e4), t2 = M(t2), e4.space === t2.space && e4.alpha === t2.alpha && e4.coords.every((e5, n2) => e5 === t2.coords[n2]);
}
var Br = e({ getLuminance: () => Vr, register: () => Ur, setLuminance: () => Hr });
function Vr(e4) {
  return V(e4, [P, `y`]);
}
function Hr(e4, t2) {
  H(e4, [P, `y`], t2);
}
function Ur(e4) {
  Object.defineProperty(e4.prototype, "luminance", { get() {
    return Vr(this);
  }, set(e5) {
    Hr(this, e5);
  } });
}
function Wr(e4, t2) {
  e4 = M(e4), t2 = M(t2);
  let n2 = Math.max(Vr(e4), 0), r2 = Math.max(Vr(t2), 0);
  return r2 > n2 && ([n2, r2] = [r2, n2]), (n2 + 0.05) / (r2 + 0.05);
}
var Gr = 0.56, Kr = 0.57, qr = 0.62, Jr = 0.65, Yr = 0.022, Xr = 1.414, Zr = 0.1, Qr = 5e-4, $r = 1.14, ei = 0.027, ti = 1.14;
function ni(e4) {
  return e4 >= Yr ? e4 : e4 + (Yr - e4) ** Xr;
}
function ri(e4) {
  return (e4 < 0 ? -1 : 1) * Math.abs(e4) ** 2.4;
}
function ii(e4, t2) {
  t2 = M(t2), e4 = M(e4);
  let n2, r2, i2, a2, o2, s2;
  t2 = B(t2, `srgb`), [a2, o2, s2] = t2.coords.map((e5) => c(e5) ? 0 : e5);
  let l2 = ri(a2) * 0.2126729 + ri(o2) * 0.7151522 + ri(s2) * 0.072175;
  e4 = B(e4, `srgb`), [a2, o2, s2] = e4.coords.map((e5) => c(e5) ? 0 : e5);
  let u2 = ri(a2) * 0.2126729 + ri(o2) * 0.7151522 + ri(s2) * 0.072175, d2 = ni(l2), f2 = ni(u2), p2 = f2 > d2;
  return Math.abs(f2 - d2) < Qr ? r2 = 0 : p2 ? (n2 = f2 ** Gr - d2 ** Kr, r2 = n2 * $r) : (n2 = f2 ** Jr - d2 ** qr, r2 = n2 * ti), i2 = Math.abs(r2) < Zr ? 0 : r2 > 0 ? r2 - ei : r2 + ei, i2 * 100;
}
function ai(e4, t2) {
  e4 = M(e4), t2 = M(t2);
  let n2 = Math.max(Vr(e4), 0), r2 = Math.max(Vr(t2), 0);
  r2 > n2 && ([n2, r2] = [r2, n2]);
  let i2 = n2 + r2;
  return i2 === 0 ? 0 : (n2 - r2) / i2;
}
var oi = 5e4;
function si(e4, t2) {
  e4 = M(e4), t2 = M(t2);
  let n2 = Math.max(Vr(e4), 0), r2 = Math.max(Vr(t2), 0);
  return r2 > n2 && ([n2, r2] = [r2, n2]), r2 === 0 ? oi : (n2 - r2) / r2;
}
function ci(e4, t2) {
  e4 = M(e4), t2 = M(t2);
  let n2 = V(e4, [I, `l`]), r2 = V(t2, [I, `l`]);
  return Math.abs(n2 - r2);
}
var li = 216 / 24389, ui = 24 / 116, di = 24389 / 27, fi = A.D65, pi = new N({ id: `lab-d65`, name: `Lab D65`, coords: { l: { refRange: [0, 100], name: `Lightness` }, a: { refRange: [-125, 125] }, b: { refRange: [-125, 125] } }, white: fi, base: P, fromBase(e4) {
  let t2 = e4.map((e5, t3) => e5 / fi[t3]).map((e5) => e5 > li ? Math.cbrt(e5) : (di * e5 + 16) / 116);
  return [116 * t2[1] - 16, 500 * (t2[0] - t2[1]), 200 * (t2[1] - t2[2])];
}, toBase(e4) {
  let t2 = [];
  return t2[1] = (e4[0] + 16) / 116, t2[0] = e4[1] / 500 + t2[1], t2[2] = t2[1] - e4[2] / 200, [t2[0] > ui ? t2[0] ** 3 : (116 * t2[0] - 16) / di, e4[0] > 8 ? ((e4[0] + 16) / 116) ** 3 : e4[0] / di, t2[2] > ui ? t2[2] ** 3 : (116 * t2[2] - 16) / di].map((e5, t3) => e5 * fi[t3]);
}, formats: { "lab-d65": { coords: [`<number> | <percentage>`, `<number> | <percentage>`, `<number> | <percentage>`] } } }), mi = 5 ** 0.5 * 0.5 + 0.5;
function hi(e4, t2) {
  e4 = M(e4), t2 = M(t2);
  let n2 = V(e4, [pi, `l`]), r2 = V(t2, [pi, `l`]), i2 = Math.abs(n2 ** +mi - r2 ** +mi) ** (1 / mi) * Math.SQRT2 - 40;
  return i2 < 7.5 ? 0 : i2;
}
var gi = e({ contrastAPCA: () => ii, contrastDeltaPhi: () => hi, contrastLstar: () => ci, contrastMichelson: () => ai, contrastWCAG21: () => Wr, contrastWeber: () => si });
function _i(e4, t2, n2) {
  a(n2) && (n2 = { algorithm: n2 });
  let { algorithm: r2, ...i2 } = n2 || {};
  if (!r2) {
    let e5 = Object.keys(gi).map((e6) => e6.replace(/^contrast/, ``)).join(`, `);
    throw TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${e5}`);
  }
  e4 = M(e4), t2 = M(t2);
  for (let n3 in gi) if (`contrast` + r2.toLowerCase() === n3.toLowerCase()) return gi[n3](e4, t2, i2);
  throw TypeError(`Unknown contrast algorithm: ${r2}`);
}
var vi = e({ register: () => xi, uv: () => yi, xy: () => bi });
function yi(e4) {
  let [t2, n2, r2] = De(e4, P), i2 = t2 + 15 * n2 + 3 * r2;
  return [4 * t2 / i2, 9 * n2 / i2];
}
function bi(e4) {
  let [t2, n2, r2] = De(e4, P), i2 = t2 + n2 + r2;
  return [t2 / i2, n2 / i2];
}
function xi(e4) {
  Object.defineProperty(e4.prototype, "uv", { get() {
    return yi(this);
  } }), Object.defineProperty(e4.prototype, "xy", { get() {
    return bi(this);
  } });
}
function Si(e4, t2, n2 = {}) {
  a(n2) && (n2 = { method: n2 });
  let { method: r2 = O.deltaE, ...i2 } = n2;
  for (let n3 in hr) if (`deltae` + r2.toLowerCase() === n3.toLowerCase()) return hr[n3](e4, t2, i2);
  throw TypeError(`Unknown deltaE method: ${r2}`);
}
var Ci = e({ darken: () => Ti, lighten: () => wi });
function wi(e4, t2 = 0.25) {
  return H(e4, [N.get(`oklch`, `lch`), `l`], (e5) => e5 * (1 + t2));
}
function Ti(e4, t2 = 0.25) {
  return H(e4, [N.get(`oklch`, `lch`), `l`], (e5) => e5 * (1 - t2));
}
wi.returns = `color`, Ti.returns = `color`;
var Ei = e({ isRange: () => ji, mix: () => Di, range: () => ki, register: () => Mi, steps: () => Oi });
function Di(e4, t2, n2, r2 = {}) {
  return [e4, t2] = [M(e4), M(t2)], o(n2) === `object` && ([n2, r2] = [0.5, n2]), ki(e4, t2, r2)(n2 ?? 0.5);
}
function Oi(e4, t2, n2 = {}) {
  let r2;
  ji(e4) && ([r2, n2] = [e4, t2], [e4, t2] = r2.rangeArgs.colors);
  let { maxDeltaE: i2, deltaEMethod: a2, steps: o2 = 2, maxSteps: s2 = 1e3, ...c2 } = n2;
  r2 || (r2 = ([e4, t2] = [M(e4), M(t2)], ki(e4, t2, c2)));
  let l2 = Si(e4, t2), u2 = i2 > 0 ? Math.max(o2, Math.ceil(l2 / i2) + 1) : o2, d2 = [];
  if (s2 !== void 0 && (u2 = Math.min(u2, s2)), u2 === 1) d2 = [{ p: 0.5, color: r2(0.5) }];
  else {
    let e5 = 1 / (u2 - 1);
    d2 = Array.from({ length: u2 }, (t3, n3) => {
      let i3 = n3 * e5;
      return { p: i3, color: r2(i3) };
    });
  }
  if (i2 > 0) {
    let e5 = d2.reduce((e6, t3, n3) => {
      if (n3 === 0) return 0;
      let r3 = Si(t3.color, d2[n3 - 1].color, a2);
      return Math.max(e6, r3);
    }, 0);
    for (; e5 > i2; ) {
      e5 = 0;
      for (let t3 = 1; t3 < d2.length && d2.length < s2; t3++) {
        let n3 = d2[t3 - 1], i3 = d2[t3], a3 = (i3.p + n3.p) / 2, o3 = r2(a3);
        e5 = Math.max(e5, Si(o3, n3.color), Si(o3, i3.color)), d2.splice(t3, 0, { p: a3, color: r2(a3) }), t3++;
      }
    }
  }
  return d2 = d2.map((e5) => e5.color), d2;
}
function ki(e4, t2, n2 = {}) {
  if (ji(e4)) {
    let [n3, r3] = [e4, t2];
    return ki(...n3.rangeArgs.colors, { ...n3.rangeArgs.options, ...r3 });
  }
  let { space: r2, outputSpace: i2, progression: a2, premultiplied: o2 } = n2;
  e4 = M(e4), t2 = M(t2), e4 = Ae(e4), t2 = Ae(t2);
  let s2 = { colors: [e4, t2], options: n2 };
  r2 = r2 ? N.get(r2) : N.registry[O.interpolationSpace] || e4.space, i2 = i2 ? N.get(i2) : r2, e4 = B(e4, r2), t2 = B(t2, r2), e4 = K(e4), t2 = K(t2);
  let l2 = r2.hueId, u2 = r2.hueIndex;
  if (l2) {
    let i3 = n2.hue = n2.hue || `shorter`, a3 = [r2, l2], [o3, s3] = [V(e4, a3), V(t2, a3)];
    c(o3) && !c(s3) ? o3 = s3 : c(s3) && !c(o3) && (s3 = o3), [o3, s3] = ge(i3, [o3, s3]), H(e4, a3, o3), H(t2, a3, s3);
  }
  return c(e4.alpha) && !c(t2.alpha) ? e4.alpha = t2.alpha : c(t2.alpha) && !c(e4.alpha) && (t2.alpha = e4.alpha), o2 && (e4.coords = Ai(e4.coords, e4.alpha, u2), t2.coords = Ai(t2.coords, t2.alpha, u2)), Object.assign((n3) => {
    n3 = a2 ? a2(n3) : n3;
    let s3 = e4.coords.map((e5, r3) => {
      let i3 = t2.coords[r3];
      return d(e5, i3, n3);
    }), c2 = d(e4.alpha, t2.alpha, n3), l3 = { space: r2, coords: s3, alpha: c2 };
    return o2 && (l3.coords = Ai(l3.coords, c2, u2, true)), i2 !== r2 && (l3 = B(l3, i2)), l3;
  }, { rangeArgs: s2 });
}
function Ai(e4, t2, n2, r2 = false) {
  return c(t2) || r2 && t2 === 0 ? e4 : e4.map((e5, i2) => i2 === n2 || c(e5) ? e5 : r2 ? e5 / t2 : e5 * t2);
}
function ji(e4) {
  return o(e4) === `function` && !!e4.rangeArgs;
}
O.interpolationSpace = `lab`;
function Mi(e4) {
  e4.defineFunction(`mix`, Di, { returns: `color` }), e4.defineFunction(`range`, ki, { returns: `function<color>` }), e4.defineFunction(`steps`, Oi, { returns: `array<color>` });
}
var J = new N({ id: `hsl`, name: `HSL`, coords: { h: { refRange: [0, 360], type: `angle`, name: `Hue` }, s: { range: [0, 100], name: `Saturation` }, l: { range: [0, 100], name: `Lightness` } }, base: q, rgbGamut: q, fromBase: (e4) => {
  let t2 = Math.max(...e4), n2 = Math.min(...e4), [r2, i2, a2] = e4, [o2, s2, c2] = [null, 0, (n2 + t2) / 2], l2 = t2 - n2;
  if (l2 !== 0) {
    switch (s2 = c2 === 0 || c2 === 1 ? 0 : (t2 - c2) / Math.min(c2, 1 - c2), t2) {
      case r2:
        o2 = (i2 - a2) / l2 + (i2 < a2 ? 6 : 0);
        break;
      case i2:
        o2 = (a2 - r2) / l2 + 2;
        break;
      case a2:
        o2 = (r2 - i2) / l2 + 4;
    }
    o2 *= 60;
  }
  return s2 < 0 && (o2 += 180, s2 = Math.abs(s2)), o2 >= 360 && (o2 -= 360), [o2, s2 * 100, c2 * 100];
}, toBase: (e4) => {
  let [t2, n2, r2] = e4;
  t2 %= 360, t2 < 0 && (t2 += 360), n2 /= 100, r2 /= 100;
  function i2(e5) {
    let i3 = (e5 + t2 / 30) % 12, a2 = n2 * Math.min(r2, 1 - r2);
    return r2 - a2 * Math.max(-1, Math.min(i3 - 3, 9 - i3, 1));
  }
  return [i2(0), i2(8), i2(4)];
}, formats: { hsl: { coords: [`<number> | <angle>`, `<percentage> | <number>`, `<percentage> | <number>`] }, hsla: { coords: [`<number> | <angle>`, `<percentage> | <number>`, `<percentage> | <number>`], commas: true, alpha: true } } }), Ni = new N({ id: `hsl-p3`, cssId: `--hsl-p3`, name: `HSL P3`, coords: { h: { refRange: [0, 360], type: `angle`, name: `Hue` }, s: { range: [0, 100], name: `Saturation` }, l: { range: [0, 100], name: `Lightness` } }, base: Pr, rgbGamut: Pr, fromBase: J.fromBase, toBase: J.toBase }), Pi = new N({ id: `hsl-rec2020`, cssId: `--hsl-rec2020`, name: `HSL Rec.2020`, coords: { h: { refRange: [0, 360], type: `angle`, name: `Hue` }, s: { range: [0, 100], name: `Saturation` }, l: { range: [0, 100], name: `Lightness` } }, base: Dr, rgbGamut: Dr, fromBase: J.fromBase, toBase: J.toBase }), Fi = new N({ id: `hsv`, name: `HSV`, coords: { h: { refRange: [0, 360], type: `angle`, name: `Hue` }, s: { range: [0, 100], name: `Saturation` }, v: { range: [0, 100], name: `Value` } }, base: q, rgbGamut: q, fromBase(e4) {
  let t2 = Math.max(...e4), n2 = Math.min(...e4), [r2, i2, a2] = e4, [o2, s2, c2] = [null, 0, t2], l2 = t2 - n2;
  if (l2 !== 0) {
    switch (t2) {
      case r2:
        o2 = (i2 - a2) / l2 + (i2 < a2 ? 6 : 0);
        break;
      case i2:
        o2 = (a2 - r2) / l2 + 2;
        break;
      case a2:
        o2 = (r2 - i2) / l2 + 4;
    }
    o2 *= 60;
  }
  return c2 && (s2 = l2 / c2), o2 >= 360 && (o2 -= 360), [o2, s2 * 100, c2 * 100];
}, toBase(e4) {
  let [t2, n2, r2] = e4;
  t2 %= 360, t2 < 0 && (t2 += 360), n2 /= 100, r2 /= 100;
  function i2(e5) {
    let i3 = (e5 + t2 / 60) % 6;
    return r2 - r2 * n2 * Math.max(0, Math.min(i3, 4 - i3, 1));
  }
  return [i2(5), i2(3), i2(1)];
}, formats: { color: { id: `--hsv`, coords: [`<number> | <angle>`, `<percentage> | <number>`, `<percentage> | <number>`] } } }), Ii = new N({ id: `hwb`, name: `HWB`, coords: { h: { refRange: [0, 360], type: `angle`, name: `Hue` }, w: { range: [0, 100], name: `Whiteness` }, b: { range: [0, 100], name: `Blackness` } }, base: Fi, rgbGamut: q, fromBase(e4) {
  let [t2, n2, r2] = e4;
  return [t2, r2 * (100 - n2) / 100, 100 - r2];
}, toBase(e4) {
  let [t2, n2, r2] = e4;
  n2 /= 100, r2 /= 100;
  let i2 = n2 + r2;
  if (i2 >= 1) return [t2, 0, n2 / i2 * 100];
  let a2 = 1 - r2;
  return [t2, (a2 === 0 ? 0 : 1 - n2 / a2) * 100, a2 * 100];
}, formats: { hwb: { coords: [`<number> | <angle>`, `<percentage> | <number>`, `<percentage> | <number>`] } } }), Li = new F({ id: `a98rgb-linear`, cssId: `--a98-rgb-linear`, name: `Linear Adobe\xAE 98 RGB compatible`, white: `D65`, M: { toXYZ: [[0.5766690429101305, 0.1855582379065463, 0.1882286462349947], [0.29734497525053605, 0.6273635662554661, 0.07529145849399788], [0.02703136138641234, 0.07068885253582723, 0.9913375368376388]], fromXYZ: [[2.0415879038107465, -0.5650069742788596, -0.34473135077832956], [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557], [0.013444280632031142, -0.11836239223101838, 1.0151749943912054]] } }), Ri = new F({ id: `a98rgb`, cssId: `a98-rgb`, name: `Adobe\xAE 98 RGB compatible`, base: Li, linearGamut: Li, toBase: (e4) => e4.map((e5) => Math.abs(e5) ** (563 / 256) * Math.sign(e5)), fromBase: (e4) => e4.map((e5) => Math.abs(e5) ** (256 / 563) * Math.sign(e5)) }), zi = new F({ id: `prophoto-linear`, cssId: `--prophoto-rgb-linear`, name: `Linear ProPhoto`, white: `D50`, base: de, M: { toXYZ: [[0.7977666449006423, 0.13518129740053308, 0.0313477341283922], [0.2880748288194013, 0.711835234241873, 8993693872564e-17], [0, 0, 0.8251046025104602]], fromXYZ: [[1.3457868816471583, -0.25557208737979464, -0.05110186497554526], [-0.5446307051249019, 1.5082477428451468, 0.02052744743642139], [0, 0, 1.2119675456389452]] } }), Bi = 1 / 512, Vi = 16 / 512, Hi = new F({ id: `prophoto`, cssId: `prophoto-rgb`, name: `ProPhoto`, base: zi, linearGamut: zi, toBase(e4) {
  return e4.map((e5) => {
    let t2 = e5 < 0 ? -1 : 1, n2 = e5 * t2;
    return n2 < Vi ? e5 / 16 : t2 * n2 ** 1.8;
  });
}, fromBase(e4) {
  return e4.map((e5) => {
    let t2 = e5 < 0 ? -1 : 1, n2 = e5 * t2;
    return n2 >= Bi ? t2 * n2 ** (1 / 1.8) : 16 * e5;
  });
} }), Ui = 1.09929682680944, Wi = 0.018053968510807, Gi = new F({ id: `--rec2020-oetf`, name: `REC.2020_Scene_Referred`, base: Er, linearGamut: Er, referred: `scene`, toBase(e4) {
  return e4.map(function(e5) {
    let t2 = e5 < 0 ? -1 : 1, n2 = e5 * t2;
    return n2 < Wi * 4.5 ? e5 / 4.5 : t2 * ((n2 + Ui - 1) / Ui) ** (1 / 0.45);
  });
}, fromBase(e4) {
  return e4.map(function(e5) {
    let t2 = e5 < 0 ? -1 : 1, n2 = e5 * t2;
    return n2 >= Wi ? t2 * (Ui * n2 ** 0.45 - (Ui - 1)) : 4.5 * e5;
  });
} }), Ki = new Sr({ id: `oklch-p3`, cssId: `--oklch-p3`, name: `OKLCh P3`, base: Oe, gamutSpace: Pr }), qi = new Sr({ id: `oklch-srgb`, cssId: `--oklch-srgb`, name: `OKLCh sRGB`, base: Oe, gamutSpace: q }), Ji = new Sr({ id: `oklch-rec2020`, cssId: `--oklch-rec2020`, name: `OKLCh Rec.2020`, base: Oe, gamutSpace: Dr }), Yi = new Sr({ id: `lch-p3`, cssId: `--lch-p3`, name: `LCH P3`, base: R, gamutSpace: Pr }), Xi = new Sr({ id: `lch-srgb`, cssId: `--lch-srgb`, name: `LCH sRGB`, base: R, gamutSpace: q }), Zi = new Sr({ id: `lch-rec2020`, cssId: `--lch-rec2020`, name: `LCH Rec.2020`, base: R, gamutSpace: Dr }), Qi = 2 * Math.PI, Y = { ...z.M, toLMS: [[0.4122214694707629, 0.5363325372617349, 0.0514459932675022], [0.2119034958178251, 0.6806995506452344, 0.1073969535369405], [0.0883024591900564, 0.2817188391361215, 0.6299787016738222]], toSRGBLinear: [[4.076741636075958, -3.307711539258063, 0.2309699031821043], [-1.2684379732850315, 2.609757349287688, -0.341319376002657], [-0.0041960761386756, -0.7034186179359362, 1.7076146940746117]] }, $i = [[[-1.8817031, -0.80936501], [1.19086277, 1.76576728, 0.59662641, 0.75515197, 0.56771245]], [[1.8144408, -1.19445267], [0.73956515, -0.45954404, 0.08285427, 0.12541073, -0.14503204]], [[0.13110758, 1.81333971], [1.35733652, -915799e-8, -1.1513021, -0.50559606, 692167e-8]]], ea = Number.MAX_VALUE, ta = 0.206, na = 0.03, ra = 1.206 / 1.03;
function X(e4, t2) {
  let n2 = e4.length;
  if (n2 !== t2.length) throw Error(`Vectors of size ${n2} and ${t2.length} are not aligned`);
  let r2 = 0;
  return e4.forEach((e5, n3) => {
    r2 += e5 * t2[n3];
  }), r2;
}
function ia(e4) {
  return 0.5 * (ra * e4 - ta + Math.sqrt((ra * e4 - ta) * (ra * e4 - ta) + 4 * na * ra * e4));
}
function aa(e4) {
  return (e4 ** 2 + ta * e4) / (ra * (e4 + na));
}
function oa(e4) {
  let [t2, n2] = e4;
  return [n2 / t2, n2 / (1 - t2)];
}
function sa(e4, t2) {
  return [0.11516993 + 1 / (7.4477897 + 4.1590124 * t2 + e4 * (-2.19557347 + 1.75198401 * t2 + e4 * (-2.13704948 - 10.02301043 * t2 + e4 * (-4.24894561 + 5.38770819 * t2 + 4.69891013 * e4)))), 0.11239642 + 1 / (1.6132032 - 0.68124379 * t2 + e4 * (0.40370612 + 0.90148123 * t2 + e4 * (-0.27087943 + 0.6122399 * t2 + e4 * (299215e-8 - 0.45399568 * t2 - 0.14661872 * e4))))];
}
function ca(e4, t2) {
  let n2 = r(e4, Y.LabtoLMS);
  return n2[0] **= 3, n2[1] **= 3, n2[2] **= 3, r(n2, t2, n2);
}
function la(e4, t2, n2, r2) {
  let i2 = fa(e4, t2, n2, r2), a2 = ca([1, i2 * e4, i2 * t2], n2), o2 = g(1 / Math.max(...a2), 1 / 3);
  return [o2, o2 * i2];
}
function ua(e4, t2, n2, r2, i2, a2, o2, s2) {
  let c2;
  if (s2 === void 0 && (s2 = la(e4, t2, a2, o2)), (n2 - i2) * s2[1] - (s2[0] - i2) * r2 <= 0) c2 = s2[1] * i2 / (r2 * s2[0] + s2[1] * (i2 - n2));
  else {
    c2 = s2[1] * (i2 - 1) / (r2 * (s2[0] - 1) + s2[1] * (i2 - n2));
    let o3 = n2 - i2, l2 = r2, u2 = X(Y.LabtoLMS[0].slice(1), [e4, t2]), d2 = X(Y.LabtoLMS[1].slice(1), [e4, t2]), f2 = X(Y.LabtoLMS[2].slice(1), [e4, t2]), p2 = o3 + l2 * u2, m2 = o3 + l2 * d2, h2 = o3 + l2 * f2, g2 = i2 * (1 - c2) + c2 * n2, _2 = c2 * r2, v2 = g2 + _2 * u2, y2 = g2 + _2 * d2, b2 = g2 + _2 * f2, x2 = v2 ** 3, S2 = y2 ** 3, C2 = b2 ** 3, w2 = 3 * p2 * v2 ** 2, T2 = 3 * m2 * y2 ** 2, E2 = 3 * h2 * b2 ** 2, ee2 = 6 * p2 ** 2 * v2, D2 = 6 * m2 ** 2 * y2, O2 = 6 * h2 ** 2 * b2, te2 = X(a2[0], [x2, S2, C2]) - 1, ne2 = X(a2[0], [w2, T2, E2]), k2 = X(a2[0], [ee2, D2, O2]), A2 = ne2 / (ne2 * ne2 - 0.5 * te2 * k2), re2 = -te2 * A2, ie2 = X(a2[1], [x2, S2, C2]) - 1, j2 = X(a2[1], [w2, T2, E2]), ae2 = X(a2[1], [ee2, D2, O2]), oe2 = j2 / (j2 * j2 - 0.5 * ie2 * ae2), se2 = -ie2 * oe2, ce2 = X(a2[2], [x2, S2, C2]) - 1, M2 = X(a2[2], [w2, T2, E2]), le2 = X(a2[2], [ee2, D2, O2]), N2 = M2 / (M2 * M2 - 0.5 * ce2 * le2), ue2 = -ce2 * N2;
    re2 = A2 >= 0 ? re2 : ea, se2 = oe2 >= 0 ? se2 : ea, ue2 = N2 >= 0 ? ue2 : ea, c2 += Math.min(re2, Math.min(se2, ue2));
  }
  return c2;
}
function da(e4, t2, n2) {
  let [r2, i2, a2] = e4, o2 = la(i2, a2, t2, n2), s2 = ua(i2, a2, r2, 1, r2, t2, n2, o2), c2 = oa(o2), l2 = s2 / Math.min(r2 * c2[0], (1 - r2) * c2[1]), u2 = sa(i2, a2), d2 = r2 * u2[0], f2 = (1 - r2) * u2[1], p2 = 0.9 * l2 * Math.sqrt(Math.sqrt(1 / (1 / d2 ** 4 + 1 / f2 ** 4)));
  return d2 = r2 * 0.4, f2 = (1 - r2) * 0.8, [Math.sqrt(1 / (1 / d2 ** 2 + 1 / f2 ** 2)), p2, s2];
}
function fa(e4, t2, n2, r2) {
  let i2, a2, o2, s2, c2, l2, u2, d2;
  X(r2[0][0], [e4, t2]) > 1 ? ([i2, a2, o2, s2, c2] = r2[0][1], [l2, u2, d2] = n2[0]) : X(r2[1][0], [e4, t2]) > 1 ? ([i2, a2, o2, s2, c2] = r2[1][1], [l2, u2, d2] = n2[1]) : ([i2, a2, o2, s2, c2] = r2[2][1], [l2, u2, d2] = n2[2]);
  let f2 = i2 + a2 * e4 + o2 * t2 + s2 * e4 ** 2 + c2 * e4 * t2, p2 = X(Y.LabtoLMS[0].slice(1), [e4, t2]), m2 = X(Y.LabtoLMS[1].slice(1), [e4, t2]), h2 = X(Y.LabtoLMS[2].slice(1), [e4, t2]), g2 = 1 + f2 * p2, _2 = 1 + f2 * m2, v2 = 1 + f2 * h2, y2 = g2 ** 3, b2 = _2 ** 3, x2 = v2 ** 3, S2 = 3 * p2 * g2 ** 2, C2 = 3 * m2 * _2 ** 2, w2 = 3 * h2 * v2 ** 2, T2 = 6 * p2 ** 2 * g2, E2 = 6 * m2 ** 2 * _2, ee2 = 6 * h2 ** 2 * v2, D2 = l2 * y2 + u2 * b2 + d2 * x2, O2 = l2 * S2 + u2 * C2 + d2 * w2, te2 = l2 * T2 + u2 * E2 + d2 * ee2;
  return f2 -= D2 * O2 / (O2 ** 2 - 0.5 * D2 * te2), f2;
}
function pa(e4, t2, n2) {
  let [r2, i2, a2] = e4, o2 = aa(a2), s2 = null, c2 = null;
  if (r2 = L(r2) / 360, o2 !== 0 && o2 !== 1 && i2 !== 0) {
    let e5 = Math.cos(Qi * r2), a3 = Math.sin(Qi * r2), [l2, u2, d2] = da([o2, e5, a3], t2, n2), f2 = 0.8, p2, m2, h2, g2;
    i2 < f2 ? (p2 = 1.25 * i2, m2 = 0, h2 = f2 * l2, g2 = 1 - h2 / u2) : (p2 = 5 * (i2 - 0.8), m2 = u2, h2 = 0.2 * u2 ** 2 * 1.25 ** 2 / l2, g2 = 1 - h2 / (d2 - u2));
    let _2 = m2 + p2 * h2 / (1 - g2 * p2);
    s2 = _2 * e5, c2 = _2 * a3;
  }
  return [o2, s2, c2];
}
function ma(e4, t2, n2) {
  let r2 = e4[0], i2 = 0, a2 = ia(r2), o2 = Math.sqrt(e4[1] ** 2 + e4[2] ** 2), s2 = 0.5 + Math.atan2(-e4[2], -e4[1]) / Qi;
  if (a2 !== 0 && a2 !== 1 && o2 !== 0) {
    let [a3, s3, c3] = da([r2, e4[1] / o2, e4[2] / o2], t2, n2), l2 = 0.8, u2, d2, f2, p2;
    o2 < s3 ? (d2 = l2 * a3, f2 = 1 - d2 / s3, p2 = o2 / (d2 + f2 * o2), i2 = p2 * l2) : (u2 = s3, d2 = 0.2 * s3 ** 2 * 1.25 ** 2 / a3, f2 = 1 - d2 / (c3 - s3), p2 = (o2 - u2) / (d2 + f2 * (o2 - u2)), i2 = l2 + 0.2 * p2);
  }
  let c2 = Math.abs(i2) < 1e-4;
  return c2 || a2 === 0 || Math.abs(1 - a2) < 1e-7 ? (s2 = null, c2 || (i2 = 0)) : s2 = L(s2 * 360), [s2, i2, a2];
}
var ha = new N({ id: `okhsl`, name: `Okhsl`, coords: { h: { refRange: [0, 360], type: `angle`, name: `Hue` }, s: { range: [0, 1], name: `Saturation` }, l: { range: [0, 1], name: `Lightness` } }, base: z, gamutSpace: `self`, M: Y, fromBase(e4) {
  return ma(e4, Y.toSRGBLinear, $i);
}, toBase(e4) {
  return pa(e4, Y.toSRGBLinear, $i);
}, formats: { color: { id: `--okhsl`, coords: [`<number> | <angle>`, `<percentage> | <number>`, `<percentage> | <number>`] } } });
ha.rgbGamut = new F({ id: `okhsl-prism`, cssId: `--okhsl-prism`, name: `Okhsl Prism`, base: ha, fromBase(e4) {
  return J.toBase([e4[0], e4[1] * 100, e4[2] * 100]);
}, toBase(e4) {
  let t2 = J.fromBase(e4);
  return t2[1] /= 100, t2[2] /= 100, t2;
} });
var ga = new N({ id: `oklrab`, name: `Oklrab`, coords: { l: { refRange: [0, 1], name: `Lightness` }, a: { refRange: [-0.4, 0.4] }, b: { refRange: [-0.4, 0.4] } }, white: `D65`, base: z, fromBase(e4) {
  return [ia(e4[0]), e4[1], e4[2]];
}, toBase(e4) {
  return [aa(e4[0]), e4[1], e4[2]];
}, formats: { color: { coords: [`<percentage> | <number>`, `<number> | <percentage>[-1,1]`, `<number> | <percentage>[-1,1]`] } } }), _a2 = new N({ id: `oklrch`, name: `Oklrch`, coords: { l: { refRange: [0, 1], name: `Lightness` }, c: { refRange: [0, 0.4], name: `Chroma` }, h: { refRange: [0, 360], type: `angle`, name: `Hue` } }, white: `D65`, base: ga, fromBase: R.fromBase, toBase: R.toBase, formats: { color: { coords: [`<percentage> | <number>`, `<number> | <percentage>[0,1]`, `<number> | <angle>`] } } }), va = { toSRGBLinear: ha.M.toSRGBLinear };
function ya(e4, t2, n2) {
  let [r2, i2, a2] = e4;
  r2 = L(r2) / 360;
  let o2 = aa(a2), s2 = null, c2 = null;
  if (o2 !== 0 && i2 !== 0) {
    let e5 = Math.cos(Qi * r2), l2 = Math.sin(Qi * r2), [u2, d2] = oa(la(e5, l2, t2, n2)), f2 = 0.5, p2 = 1 - f2 / u2, m2 = 1 - i2 * f2 / (f2 + d2 - d2 * p2 * i2), h2 = i2 * d2 * f2 / (f2 + d2 - d2 * p2 * i2);
    o2 = a2 * m2;
    let _2 = a2 * h2, v2 = aa(m2), y2 = h2 * v2 / m2, b2 = aa(o2);
    _2 = _2 * b2 / o2, o2 = b2;
    let [x2, S2, C2] = ca([v2, e5 * y2, l2 * y2], t2), w2 = g(1 / Math.max(Math.max(x2, S2), Math.max(C2, 0)), 1 / 3);
    o2 *= w2, _2 *= w2, s2 = _2 * e5, c2 = _2 * l2;
  }
  return [o2, s2, c2];
}
function ba(e4, t2, n2) {
  let r2 = e4[0], i2 = 0, a2 = ia(r2), o2 = Math.sqrt(e4[1] ** 2 + e4[2] ** 2), s2 = 0.5 + Math.atan2(-e4[2], -e4[1]) / Qi;
  if (r2 !== 0 && r2 !== 1 && o2 !== 0) {
    let s3 = e4[1] / o2, c2 = e4[2] / o2, [l2, u2] = oa(la(s3, c2, t2, n2)), d2 = 0.5, f2 = 1 - d2 / l2, p2 = u2 / (o2 + r2 * u2), m2 = p2 * r2, h2 = p2 * o2, _2 = aa(m2), v2 = h2 * _2 / m2, [y2, b2, x2] = ca([_2, s3 * v2, c2 * v2], t2), S2 = g(1 / Math.max(Math.max(y2, b2), Math.max(x2, 0)), 1 / 3);
    r2 /= S2, o2 /= S2, o2 = o2 * ia(r2) / r2, r2 = ia(r2), a2 = r2 / m2, i2 = (d2 + u2) * h2 / (u2 * d2 + u2 * f2 * h2);
  }
  return s2 = Math.abs(i2) < 1e-4 || a2 === 0 ? null : L(s2 * 360), [s2, i2, a2];
}
var xa = new N({ id: `okhsv`, name: `Okhsv`, coords: { h: { refRange: [0, 360], type: `angle`, name: `Hue` }, s: { range: [0, 1], name: `Saturation` }, v: { range: [0, 1], name: `Value` } }, base: z, gamutSpace: `self`, M: va, fromBase(e4) {
  return ba(e4, va.toSRGBLinear, $i);
}, toBase(e4) {
  return ya(e4, va.toSRGBLinear, $i);
}, formats: { color: { id: `--okhsv`, coords: [`<number> | <angle>`, `<percentage> | <number>`, `<percentage> | <number>`] } } });
xa.rgbGamut = new F({ id: `okhsv-prism`, cssId: `--okhsv-prism`, name: `Okhsv Prism`, base: xa, fromBase(e4) {
  return J.toBase([e4[0], e4[1] * 100, e4[2] * 100]);
}, toBase(e4) {
  let t2 = J.fromBase(e4);
  return t2[1] /= 100, t2[2] /= 100, t2;
} });
var Sa = A.D65, Ca = 216 / 24389, wa = 24389 / 27, [Ta, Ea] = yi({ space: P, coords: Sa }), Da = new N({ id: `luv`, name: `Luv`, coords: { l: { refRange: [0, 100], name: `Lightness` }, u: { refRange: [-215, 215] }, v: { refRange: [-215, 215] } }, white: Sa, base: P, fromBase(e4) {
  let t2 = [l(e4[0]), l(e4[1]), l(e4[2])], n2 = t2[1], [r2, i2] = yi({ space: P, coords: t2 });
  if (!Number.isFinite(r2) || !Number.isFinite(i2)) return [0, 0, 0];
  let a2 = n2 <= Ca ? wa * n2 : 116 * Math.cbrt(n2) - 16;
  return [a2, 13 * a2 * (r2 - Ta), 13 * a2 * (i2 - Ea)];
}, toBase(e4) {
  let [t2, n2, r2] = e4;
  if (t2 === 0 || c(t2)) return [0, 0, 0];
  n2 = l(n2), r2 = l(r2);
  let i2 = n2 / (13 * t2) + Ta, a2 = r2 / (13 * t2) + Ea, o2 = t2 <= 8 ? t2 / wa : ((t2 + 16) / 116) ** 3;
  return [o2 * (9 * i2 / (4 * a2)), o2, o2 * ((12 - 3 * i2 - 20 * a2) / (4 * a2))];
}, formats: { color: { id: `--luv`, coords: [`<number> | <percentage>`, `<number> | <percentage>`, `<number> | <percentage>`] } } }), Oa = new N({ id: `lchuv`, name: `LChuv`, coords: { l: { refRange: [0, 100], name: `Lightness` }, c: { refRange: [0, 220], name: `Chroma` }, h: { refRange: [0, 360], type: `angle`, name: `Hue` } }, base: Da, fromBase: R.fromBase, toBase: R.toBase, formats: { color: { id: `--lchuv`, coords: [`<number> | <percentage>`, `<number> | <percentage>`, `<number> | <angle>`] } } }), ka = 216 / 24389, Aa = 24389 / 27, Z = kr.fromXYZ, ja = Z[0][0], Ma = Z[0][1], Na = Z[0][2], Pa = Z[1][0], Fa = Z[1][1], Ia = Z[1][2], La = Z[2][0], Ra = Z[2][1], za = Z[2][2];
function Ba(e4, t2, n2) {
  let r2 = t2 / (Math.sin(n2) - e4 * Math.cos(n2));
  return r2 < 0 ? 1 / 0 : r2;
}
function Va(e4) {
  let t2 = (e4 + 16) ** 3 / 1560896, n2 = t2 > ka ? t2 : e4 / Aa, r2 = n2 * (284517 * ja - 94839 * Na), i2 = n2 * (838422 * Na + 769860 * Ma + 731718 * ja), a2 = n2 * (632260 * Na - 126452 * Ma), o2 = n2 * (284517 * Pa - 94839 * Ia), s2 = n2 * (838422 * Ia + 769860 * Fa + 731718 * Pa), c2 = n2 * (632260 * Ia - 126452 * Fa), l2 = n2 * (284517 * La - 94839 * za), u2 = n2 * (838422 * za + 769860 * Ra + 731718 * La), d2 = n2 * (632260 * za - 126452 * Ra);
  return { r0s: r2 / a2, r0i: i2 * e4 / a2, r1s: r2 / (a2 + 126452), r1i: (i2 - 769860) * e4 / (a2 + 126452), g0s: o2 / c2, g0i: s2 * e4 / c2, g1s: o2 / (c2 + 126452), g1i: (s2 - 769860) * e4 / (c2 + 126452), b0s: l2 / d2, b0i: u2 * e4 / d2, b1s: l2 / (d2 + 126452), b1i: (u2 - 769860) * e4 / (d2 + 126452) };
}
function Ha(e4, t2) {
  let n2 = t2 / 360 * Math.PI * 2, r2 = Ba(e4.r0s, e4.r0i, n2), i2 = Ba(e4.r1s, e4.r1i, n2), a2 = Ba(e4.g0s, e4.g0i, n2), o2 = Ba(e4.g1s, e4.g1i, n2), s2 = Ba(e4.b0s, e4.b0i, n2), c2 = Ba(e4.b1s, e4.b1i, n2);
  return Math.min(r2, i2, a2, o2, s2, c2);
}
var Ua = new N({ id: `hsluv`, name: `HSLuv`, coords: { h: { refRange: [0, 360], type: `angle`, name: `Hue` }, s: { range: [0, 100], name: `Saturation` }, l: { range: [0, 100], name: `Lightness` } }, base: Oa, gamutSpace: q, rgbGamut: q, fromBase(e4) {
  let [t2, n2, r2] = [l(e4[0]), l(e4[1]), l(e4[2])], i2;
  return t2 > 99.9999999 ? (i2 = 0, t2 = 100) : t2 < 1e-8 ? (i2 = 0, t2 = 0) : i2 = n2 / Ha(Va(t2), r2) * 100, [r2, i2, t2];
}, toBase(e4) {
  let [t2, n2, r2] = [l(e4[0]), l(e4[1]), l(e4[2])], i2;
  return r2 > 99.9999999 ? (r2 = 100, i2 = 0) : r2 < 1e-8 ? (r2 = 0, i2 = 0) : i2 = Ha(Va(r2), t2) / 100 * n2, [r2, i2, t2];
}, formats: { color: { id: `--hsluv`, coords: [`<number> | <angle>`, `<percentage> | <number>`, `<percentage> | <number>`] } } }), Q = kr.fromXYZ;
Q[0][0], Q[0][1], Q[0][2], Q[1][0], Q[1][1], Q[1][2], Q[2][0], Q[2][1], Q[2][2];
function Wa(e4, t2) {
  return Math.abs(t2) / Math.sqrt(e4 ** 2 + 1);
}
function Ga(e4) {
  let t2 = Wa(e4.r0s, e4.r0i), n2 = Wa(e4.r1s, e4.r1i), r2 = Wa(e4.g0s, e4.g0i), i2 = Wa(e4.g1s, e4.g1i), a2 = Wa(e4.b0s, e4.b0i), o2 = Wa(e4.b1s, e4.b1i);
  return Math.min(t2, n2, r2, i2, a2, o2);
}
var Ka = new N({ id: `hpluv`, name: `HPLuv`, coords: { h: { refRange: [0, 360], type: `angle`, name: `Hue` }, s: { range: [0, 100], name: `Saturation` }, l: { range: [0, 100], name: `Lightness` } }, base: Oa, gamutSpace: `self`, fromBase(e4) {
  let [t2, n2, r2] = [l(e4[0]), l(e4[1]), l(e4[2])], i2;
  return t2 > 99.9999999 ? (i2 = 0, t2 = 100) : t2 < 1e-8 ? (i2 = 0, t2 = 0) : i2 = n2 / Ga(Va(t2)) * 100, [r2, i2, t2];
}, toBase(e4) {
  let [t2, n2, r2] = [l(e4[0]), l(e4[1]), l(e4[2])], i2;
  return r2 > 99.9999999 ? (r2 = 100, i2 = 0) : r2 < 1e-8 ? (r2 = 0, i2 = 0) : i2 = Ga(Va(r2)) / 100 * n2, [r2, i2, t2];
}, formats: { color: { id: `--hpluv`, coords: [`<number> | <angle>`, `<percentage> | <number>`, `<percentage> | <number>`] } } });
Ka.rgbGamut = new F({ id: `hpluv-prism`, cssId: `--hpluv-prism`, name: `HPLuv Prism`, base: Ka, fromBase(e4) {
  return J.toBase(e4);
}, toBase(e4) {
  return J.fromBase(e4);
} });
var qa = 0.021, Ja = Math.sqrt(qa / 3), Ya = Ja * Ja * Ja, Xa = 0.978, Za = 0.058, Qa = 264.5 * Math.PI / 180, $a = 0.7, eo = 0.37, to = 1, no = { M1: [[0.8154832155941288, 0.36033406153856506, -0.12434135574228214], [0.03301008352745078, 0.9292865057066169, 0.03612192716575443], [0.04818827356456861, 0.2642841575338424, 0.6334971784195534]], M1_INV: [[1.2325947975032656, -0.5557590239287523, 0.2736201534771583], [-0.040801327874216024, 1.112228863738653, -0.07142753586443781], [-0.07673825928337766, -0.42172784577108585, 1.5875238558143416]], M2: [[0.21193779684470104, 0.7992121834263127, -0.00410075161564345], [2.4672018828033475, -2.9877348024830788, 0.520532919679731], [-0.11390787868068575, 1.3932982808117473, -1.279390402131062]], M2_INV: [[0.9930001151336143, 0.32599327253052285, 0.1294508563171392], [0.9930001151336139, -0.08708353111074627, -0.03861361743004929], [0.9930001151336136, -0.12386097008215022, -0.8351991365871061]] }, ro = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1], io = [0, 0.009494013522189627, 0.02564569838030986, 0.055259661658689105, 0.10574901531227408, 0.16055853320726027, 0.21405964892993756, 0.26786230508811226, 0.3220435246104499, 0.3739052098520243, 0.43020997780918835, 0.4835465162128873, 0.5399824670411353, 0.5956710081330342, 0.6542161666450478, 0.7115380216519989, 0.7702762412711669, 0.8293313467712837, 0.889406386197059, 0.9462829573474728, 1], ao = ro.length;
function oo(e4) {
  let t2 = e4 / (2 * Ya), n2 = 2 * Ja * Math.sinh(Math.asinh(t2) / 3), r2 = n2 * n2 * n2 + qa * n2 - e4, i2 = 3 * n2 * n2 + qa, a2 = 6 * n2, o2 = 2 * i2 * i2 - r2 * a2;
  return Math.abs(o2) > 1e-30 && (n2 -= 2 * r2 * i2 / o2), n2;
}
function so(e4) {
  return e4 * e4 * e4 + qa * e4;
}
function co(e4) {
  let t2 = Math.max(0, Math.min(1, (e4 - eo) / (to - eo)));
  return Math.sin(Math.PI * t2) ** 2;
}
function lo(e4, t2, n2) {
  let r2 = Math.sqrt(t2 * t2 + n2 * n2);
  if (r2 < 1e-12) return [t2, n2];
  let i2 = co(e4);
  if (i2 < 1e-12) return [t2, n2];
  let a2 = Math.atan2(n2, t2), o2 = a2 - Qa;
  o2 -= Math.round(o2 / (2 * Math.PI)) * 2 * Math.PI;
  let s2 = Math.exp(-0.5 * (o2 / $a) ** 2), c2 = a2 + Za * i2 * s2;
  return [r2 * Math.cos(c2), r2 * Math.sin(c2)];
}
function uo(e4, t2, n2) {
  let r2 = Math.sqrt(t2 * t2 + n2 * n2);
  if (r2 < 1e-12) return [t2, n2];
  let i2 = co(e4);
  if (i2 < 1e-12) return [t2, n2];
  let a2 = Math.atan2(n2, t2), o2 = $a * $a, s2 = Za * i2, c2 = a2;
  for (let e5 = 0; e5 < 8; e5++) {
    let e6 = c2 - Qa;
    e6 -= Math.round(e6 / (2 * Math.PI)) * 2 * Math.PI;
    let t3 = Math.exp(-0.5 * e6 * e6 / o2), n3 = c2 + s2 * t3 - a2, r3 = 1 + s2 * t3 * (-e6 / o2), i3 = s2 * t3 * (-1 / o2 + e6 * e6 / (o2 * o2)), l2 = 2 * r3 * r3 - n3 * i3;
    Math.abs(l2) > 1e-30 && (c2 -= 2 * n3 * r3 / l2);
  }
  return [r2 * Math.cos(c2), r2 * Math.sin(c2)];
}
function fo(e4) {
  if (e4 <= 0 || e4 >= 1) return e4;
  let t2 = 0, n2 = ao - 1;
  for (; n2 - t2 > 1; ) {
    let r3 = t2 + n2 >> 1;
    ro[r3] <= e4 ? t2 = r3 : n2 = r3;
  }
  let r2 = (e4 - ro[t2]) / (ro[n2] - ro[t2]);
  return io[t2] + r2 * (io[n2] - io[t2]);
}
function po(e4) {
  if (e4 <= io[0] || e4 >= io[ao - 1]) return e4;
  let t2 = 0, n2 = ao - 1;
  for (; n2 - t2 > 1; ) {
    let r3 = t2 + n2 >> 1;
    io[r3] <= e4 ? t2 = r3 : n2 = r3;
  }
  let r2 = (e4 - io[t2]) / (io[n2] - io[t2]);
  return ro[t2] + r2 * (ro[n2] - ro[t2]);
}
var mo = new N({ id: `helmgen`, name: `HelmGen`, cssId: `--helmgen`, coords: { l: { refRange: [0, 1], name: `Lightness` }, a: { refRange: [-0.6, 0.6] }, b: { refRange: [-0.6, 0.6] } }, white: `D65`, base: P, M: no, fromBase(e4) {
  let t2 = r(e4, no.M1), n2 = oo(Math.max(t2[0], 0)), i2 = oo(Math.max(t2[1], 0)), a2 = oo(Math.max(t2[2], 0));
  {
    let e5 = (n2 + i2 + a2) / 3, t3 = (Math.max(n2, i2, a2) - Math.min(n2, i2, a2)) / Math.max(Math.abs(e5), 1e-30), r2 = Math.exp(-((t3 / 1e-5) ** 2));
    n2 += r2 * (e5 - n2), i2 += r2 * (e5 - i2), a2 += r2 * (e5 - a2);
  }
  let [o2, s2, c2] = r([n2, i2, a2], no.M2);
  {
    let e5 = Math.sqrt(s2 * s2 + c2 * c2);
    if (e5 > 1e-12) {
      let t3 = e5 ** +Xa / e5;
      s2 *= t3, c2 *= t3;
    }
  }
  return o2 = fo(o2), [s2, c2] = lo(o2, s2, c2), [o2, s2, c2];
}, toBase(e4) {
  let [t2, n2, i2] = e4;
  [n2, i2] = uo(t2, n2, i2), t2 = po(t2);
  {
    let e5 = Math.sqrt(n2 * n2 + i2 * i2);
    if (e5 > 1e-12) {
      let t3 = e5 ** (1 / Xa) / e5;
      n2 *= t3, i2 *= t3;
    }
  }
  let [a2, o2, s2] = r([t2, n2, i2], no.M2_INV);
  {
    let e5 = (a2 + o2 + s2) / 3, t3 = (Math.max(a2, o2, s2) - Math.min(a2, o2, s2)) / Math.max(Math.abs(e5), 1e-30), n3 = Math.exp(-((t3 / 1e-5) ** 2));
    a2 += n3 * (e5 - a2), o2 += n3 * (e5 - o2), s2 += n3 * (e5 - s2);
  }
  return r([so(a2), so(o2), so(s2)], no.M1_INV);
} }), ho = new N({ id: `helmgenlch`, name: `HelmGenLCh`, cssId: `--helmgenlch`, coords: { l: { refRange: [0, 1], name: `Lightness` }, c: { refRange: [0, 0.65], name: `Chroma` }, h: { refRange: [0, 360], type: `angle`, name: `Hue` } }, white: `D65`, base: mo, fromBase: R.fromBase, toBase: R.toBase }), go = new F({ id: `rec2100-linear`, name: `Linear REC.2100`, white: `D65`, M: Tr }), _o = 203, vo = 2610 / 2 ** 14, yo = 2 ** 14 / 2610, bo = 2523 / 2 ** 5, xo = 2 ** 5 / 2523, So = 3424 / 2 ** 12, Co = 2413 / 2 ** 7, wo = 2392 / 2 ** 7, To = new F({ id: `rec2100pq`, cssId: `rec2100-pq`, name: `REC.2100-PQ`, base: go, linearGamut: go, toBase(e4) {
  return e4.map(function(e5) {
    return (Math.max(e5 ** xo - So, 0) / (Co - wo * e5 ** xo)) ** yo * 1e4 / _o;
  });
}, fromBase(e4) {
  return e4.map(function(e5) {
    let t2 = Math.max(e5 * _o / 1e4, 0);
    return ((So + Co * t2 ** vo) / (1 + wo * t2 ** vo)) ** bo;
  });
} }), Eo = 0.17883277, Do = 0.28466892, Oo = 0.55991073, ko = 3.7743, Ao = new F({ id: `rec2100hlg`, cssId: `rec2100-hlg`, name: `REC.2100-HLG`, referred: `scene`, base: go, linearGamut: go, toBase(e4) {
  return e4.map(function(e5) {
    return e5 <= 0.5 ? e5 ** 2 / 3 * ko : (Math.exp((e5 - Oo) / Eo) + Do) / 12 * ko;
  });
}, fromBase(e4) {
  return e4.map(function(e5) {
    return e5 /= ko, e5 <= 1 / 12 ? g(3 * e5, 0.5) : Eo * Math.log(12 * e5 - Do) + Oo;
  });
} });
A.ACES = [0.32168 / 0.33767, 1, 0.34065 / 0.33767];
var jo = new F({ id: `acescg`, cssId: `--acescg`, name: `ACEScg`, coords: { r: { range: [0, 65504], name: `Red` }, g: { range: [0, 65504], name: `Green` }, b: { range: [0, 65504], name: `Blue` } }, referred: `scene`, white: A.ACES, M: { toXYZ: [[0.6624541811085053, 0.13400420645643313, 0.1561876870049078], [0.27222871678091454, 0.6740817658111484, 0.05368951740793705], [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971]], fromXYZ: [[1.6410233796943257, -0.32480329418479, -0.23642469523761225], [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137], [0.011721894328375376, -0.008284441996237409, 0.9883948585390215]] } }), Mo = 2 ** -16, No = -0.35828683, Po = (Math.log2(65504) + 9.72) / 17.52, Fo = new F({ id: `acescc`, cssId: `--acescc`, name: `ACEScc`, coords: { r: { range: [No, Po], name: `Red` }, g: { range: [No, Po], name: `Green` }, b: { range: [No, Po], name: `Blue` } }, referred: `scene`, base: jo, linearGamut: jo, toBase(e4) {
  return e4.map(function(e5) {
    return e5 <= -0.3013698630136986 ? (2 ** (e5 * 17.52 - 9.72) - Mo) * 2 : e5 < Po ? 2 ** (e5 * 17.52 - 9.72) : 65504;
  });
}, fromBase(e4) {
  return e4.map(function(e5) {
    return e5 <= 0 ? (Math.log2(Mo) + 9.72) / 17.52 : e5 < Mo ? (Math.log2(Mo + e5 * 0.5) + 9.72) / 17.52 : (Math.log2(e5) + 9.72) / 17.52;
  });
} }), Io = e({ A98RGB: () => Ri, A98RGB_Linear: () => Li, ACEScc: () => Fo, ACEScg: () => jo, CAM16_JMh: () => Ot, HCT: () => Lt, HPLuv: () => Ka, HSL: () => J, HSL_P3: () => Ni, HSL_REC2020: () => Pi, HSLuv: () => Ua, HSV: () => Fi, HWB: () => Ii, HelmGen: () => mo, HelmGenLCh: () => ho, Helmlab: () => sr, ICTCP: () => ot, JzCzHz: () => Xe, Jzazbz: () => Ye, LCH: () => R, LCH_P3: () => Yi, LCH_REC_2020: () => Zi, LCH_sRGB: () => Xi, LCHuv: () => Oa, Lab: () => I, Lab_D65: () => pi, Luv: () => Da, OKLCH: () => Oe, OKLCH_P3: () => Ki, OKLCH_REC_2020: () => Ji, OKLCH_sRGB: () => qi, OKLab: () => z, OKLrCH: () => _a2, OKLrab: () => ga, Okhsl: () => ha, Okhsv: () => xa, P3: () => Pr, P3_Linear: () => Or, ProPhoto: () => Hi, ProPhoto_Linear: () => zi, REC_2020: () => Dr, REC_2020_Linear: () => Er, REC_2020_Scene_Referred: () => Gi, REC_2100_HLG: () => Ao, REC_2100_Linear: () => go, REC_2100_PQ: () => To, XYZ_ABS_D65: () => Ie, XYZ_D50: () => de, XYZ_D65: () => P, sRGB: () => q, sRGB_Linear: () => Ar }), $ = class e3 {
  constructor(...e4) {
    let t2;
    if (e4.length === 1) {
      let n3 = {};
      typeof e4[0] == `object` && Object.getPrototypeOf(e4[0]).constructor === Object && (e4[0] = { ...e4[0] }), t2 = M(e4[0], { parseMeta: n3 }), n3.format && (this.parseMeta = n3);
    }
    let n2, r2, i2;
    t2 ? (n2 = t2.space || t2.spaceId, r2 = t2.coords, i2 = t2.alpha) : [n2, r2, i2] = e4, Object.defineProperty(this, "space", { value: N.get(n2), writable: false, enumerable: true, configurable: true }), this.coords = r2 ? r2.slice() : [0, 0, 0], this.alpha = c(i2) ? i2 : i2 === void 0 ? 1 : m(0, i2, 1);
    for (let e5 in this.space.coords) Object.defineProperty(this, e5, { get: () => this.get(e5), set: (t3) => this.set(e5, t3) });
  }
  get spaceId() {
    return this.space.id;
  }
  clone() {
    return new e3(this.space, this.coords, this.alpha);
  }
  toJSON() {
    return { spaceId: this.spaceId, coords: this.coords, alpha: this.alpha };
  }
  display(...t2) {
    let n2 = Ir(this, ...t2);
    return n2.color = new e3(n2.color), n2;
  }
  static get(t2, ...n2) {
    return y(t2, this) ? t2 : new e3(t2, ...n2);
  }
  static try(t2, n2) {
    if (y(t2, this)) return t2;
    let r2 = Cr(t2, n2);
    return r2 ? new e3(r2) : null;
  }
  static defineFunction(t2, n2, r2 = n2) {
    let { instance: i2 = true, returns: a2 } = r2, o2 = function(...t3) {
      let r3 = n2(...t3);
      if (a2 === `color`) r3 = e3.get(r3);
      else if (a2 === `function<color>`) {
        let t4 = r3;
        r3 = function(...n3) {
          let r4 = t4(...n3);
          return e3.get(r4);
        }, Object.assign(r3, t4);
      } else a2 === `array<color>` && (r3 = r3.map((t4) => e3.get(t4)));
      return r3;
    };
    t2 in e3 || (e3[t2] = o2), i2 && (e3.prototype[t2] = function(...e4) {
      return o2(this, ...e4);
    });
  }
  static defineFunctions(t2) {
    for (let n2 in t2) e3.defineFunction(n2, t2[n2], t2[n2]);
  }
  static extend(t2) {
    if (t2.register) t2.register(e3);
    else for (let n2 in t2) e3.defineFunction(n2, t2[n2]);
  }
};
$.defineFunctions({ get: V, getAll: De, set: H, setAll: ke, to: B, equals: zr, inGamut: Ee, toGamut: K, distance: je, deltas: Lr, toString: wr }), Object.assign($, { util: i, hooks: D, WHITES: A, Space: N, spaces: N.registry, parse: j, defaults: O });
for (let e4 of Object.keys(Io)) N.register(Io[e4]);
$.extend(hr), $.extend({ deltaE: Si }), Object.assign($, { deltaEMethods: hr }), $.extend(Ci), $.extend({ contrast: _i }), $.extend(vi), $.extend(Br), $.extend(Ei), $.extend(gi);
var Lo = $;
export {
  Lo as t
};
