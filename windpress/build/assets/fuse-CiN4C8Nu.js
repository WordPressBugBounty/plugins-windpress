function e(e2) {
  return Array.isArray ? Array.isArray(e2) : u(e2) === `[object Array]`;
}
function t(e2) {
  if (typeof e2 == `string`) return e2;
  if (typeof e2 == `bigint`) return e2.toString();
  let t2 = e2 + ``;
  return t2 == `0` && 1 / e2 == -1 / 0 ? `-0` : t2;
}
function n(e2) {
  return e2 == null ? `` : t(e2);
}
function r(e2) {
  return typeof e2 == `string`;
}
function i(e2) {
  return typeof e2 == `number`;
}
function a(e2) {
  return e2 === true || e2 === false || s(e2) && u(e2) == `[object Boolean]`;
}
function o(e2) {
  return typeof e2 == `object`;
}
function s(e2) {
  return o(e2) && e2 !== null;
}
function c(e2) {
  return e2 != null;
}
function l(e2) {
  return !e2.trim().length;
}
function u(e2) {
  return e2 == null ? e2 === void 0 ? `[object Undefined]` : `[object Null]` : Object.prototype.toString.call(e2);
}
var d = `Incorrect 'index' type`, f = `Invalid doc index: must be a non-negative integer within the bounds of the docs array`, p = (e2) => `Invalid value for key ${e2}`, m = (e2) => `Pattern length exceeds max of ${e2}.`, h = (e2) => `Missing ${e2} property in key`, g = (e2) => `Property 'weight' in key '${e2}' must be a positive integer`, _ = `Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.`, v = Object.prototype.hasOwnProperty, y = class {
  constructor(e2) {
    this._keys = [], this._keyMap = {};
    let t2 = 0;
    e2.forEach((e3) => {
      let n2 = b(e3);
      this._keys.push(n2), this._keyMap[n2.id] = n2, t2 += n2.weight;
    }), this._keys.forEach((e3) => {
      e3.weight /= t2;
    });
  }
  get(e2) {
    return this._keyMap[e2];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
};
function b(t2) {
  let n2 = null, i2 = null, a2 = null, o2 = 1, s2 = null;
  if (r(t2) || e(t2)) a2 = t2, n2 = x(t2), i2 = S(t2);
  else {
    if (!v.call(t2, `name`)) throw Error(h(`name`));
    let e2 = t2.name;
    if (a2 = e2, v.call(t2, `weight`) && t2.weight !== void 0 && (o2 = t2.weight, o2 <= 0)) throw Error(g(S(e2)));
    n2 = x(e2), i2 = S(e2), s2 = t2.getFn ?? null;
  }
  return { path: n2, id: i2, weight: o2, src: a2, getFn: s2 };
}
function x(t2) {
  return e(t2) ? t2 : t2.split(`.`);
}
function S(t2) {
  return e(t2) ? t2.join(`.`) : t2;
}
function C(t2, o2) {
  let s2 = [], l2 = false, u2 = (t3, o3, d2, f2) => {
    if (c(t3)) if (!o3[d2]) s2.push(f2 === void 0 ? t3 : { v: t3, i: f2 });
    else {
      let p2 = t3[o3[d2]];
      if (!c(p2)) return;
      if (d2 === o3.length - 1 && (r(p2) || i(p2) || a(p2) || typeof p2 == `bigint`)) s2.push(f2 === void 0 ? n(p2) : { v: n(p2), i: f2 });
      else if (e(p2)) {
        l2 = true;
        for (let e2 = 0, t4 = p2.length; e2 < t4; e2 += 1) u2(p2[e2], o3, d2 + 1, e2);
      } else o3.length && u2(p2, o3, d2 + 1, f2);
    }
  };
  return u2(t2, r(o2) ? o2.split(`.`) : o2, 0), l2 ? s2 : s2[0];
}
var w = { includeMatches: false, findAllMatches: false, minMatchCharLength: 1 }, T = { isCaseSensitive: false, ignoreDiacritics: false, includeScore: false, keys: [], shouldSort: true, sortFn: (e2, t2) => e2.score === t2.score ? e2.idx < t2.idx ? -1 : 1 : e2.score < t2.score ? -1 : 1 }, E = { location: 0, threshold: 0.6, distance: 100 }, ee = { useExtendedSearch: false, useTokenSearch: false, tokenize: void 0, tokenMatch: `any`, getFn: C, ignoreLocation: false, ignoreFieldNorm: false, fieldNormWeight: 1 }, D = Object.freeze({ ...T, ...w, ...E, ...ee });
function te(e2 = 1, t2 = 3) {
  let n2 = /* @__PURE__ */ new Map(), r2 = 10 ** t2;
  return { get(t3) {
    let i2 = 1, a2 = false;
    for (let e3 = 0; e3 < t3.length; e3++) t3.charCodeAt(e3) === 32 ? a2 || (a2 = (i2++, true)) : a2 = false;
    if (n2.has(i2)) return n2.get(i2);
    let o2 = Math.round(r2 / i2 ** (0.5 * e2)) / r2;
    return n2.set(i2, o2), o2;
  }, clear() {
    n2.clear();
  } };
}
var O = class {
  constructor({ getFn: e2 = D.getFn, fieldNormWeight: t2 = D.fieldNormWeight } = {}) {
    this.norm = te(t2, 3), this.getFn = e2, this.isCreated = false, this.docs = [], this.keys = [], this._keysMap = {}, this.setIndexRecords();
  }
  setSources(e2 = []) {
    this.docs = e2;
  }
  setIndexRecords(e2 = []) {
    this.records = e2;
  }
  setKeys(e2 = []) {
    this.keys = e2, this._keysMap = {}, e2.forEach((e3, t2) => {
      this._keysMap[e3.id] = t2;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) return;
    this.isCreated = true;
    let e2 = this.docs.length;
    this.records = Array(e2);
    let t2 = 0;
    if (r(this.docs[0])) for (let n2 = 0; n2 < e2; n2++) {
      let e3 = this._createStringRecord(this.docs[n2], n2);
      e3 && (this.records[t2++] = e3);
    }
    else for (let n2 = 0; n2 < e2; n2++) this.records[t2++] = this._createObjectRecord(this.docs[n2], n2);
    this.records.length = t2, this.norm.clear();
  }
  add(e2, t2) {
    if (!Number.isInteger(t2) || t2 < 0) throw Error(f);
    if (r(e2)) {
      let n3 = this._createStringRecord(e2, t2);
      return n3 && this.records.push(n3), n3;
    }
    let n2 = this._createObjectRecord(e2, t2);
    return this.records.push(n2), n2;
  }
  removeAt(e2) {
    if (!Number.isInteger(e2) || e2 < 0) throw Error(f);
    for (let t2 = 0, n2 = this.records.length; t2 < n2; t2 += 1) if (this.records[t2].i === e2) {
      this.records.splice(t2, 1);
      break;
    }
    for (let t2 = 0, n2 = this.records.length; t2 < n2; t2 += 1) this.records[t2].i > e2 && --this.records[t2].i;
  }
  removeAll(e2) {
    let t2 = /* @__PURE__ */ new Set();
    for (let n3 of e2) Number.isInteger(n3) && n3 >= 0 && t2.add(n3);
    if (t2.size === 0) return;
    this.records = this.records.filter((e3) => !t2.has(e3.i));
    let n2 = Array.from(t2).sort((e3, t3) => e3 - t3);
    for (let e3 of this.records) {
      let t3 = 0, r2 = n2.length;
      for (; t3 < r2; ) {
        let i2 = t3 + r2 >>> 1;
        n2[i2] < e3.i ? t3 = i2 + 1 : r2 = i2;
      }
      e3.i -= t3;
    }
  }
  getValueForItemAtKeyId(e2, t2) {
    return e2[this._keysMap[t2]];
  }
  size() {
    return this.records.length;
  }
  _createStringRecord(e2, t2) {
    return !c(e2) || l(e2) ? null : { v: e2, i: t2, n: this.norm.get(e2) };
  }
  _createObjectRecord(t2, i2) {
    let a2 = { i: i2, $: {} };
    for (let i3 = 0, o2 = this.keys.length; i3 < o2; i3++) {
      let o3 = this.keys[i3], s2 = o3.getFn ? o3.getFn(t2) : this.getFn(t2, o3.path);
      if (c(s2)) {
        if (e(s2)) {
          let e2 = [];
          for (let t3 = 0, i4 = s2.length; t3 < i4; t3 += 1) {
            let i5 = s2[t3];
            if (c(i5)) {
              if (r(i5)) {
                if (!l(i5)) {
                  let n2 = { v: i5, i: t3, n: this.norm.get(i5) };
                  e2.push(n2);
                }
              } else if (c(i5.v)) {
                let t4 = r(i5.v) ? i5.v : n(i5.v);
                if (!l(t4)) {
                  let n2 = { v: t4, i: i5.i, n: this.norm.get(t4) };
                  e2.push(n2);
                }
              }
            }
          }
          a2.$[i3] = e2;
        } else if (r(s2) && !l(s2)) {
          let e2 = { v: s2, n: this.norm.get(s2) };
          a2.$[i3] = e2;
        }
      }
    }
    return a2;
  }
  toJSON() {
    return { keys: this.keys.map(({ getFn: e2, ...t2 }) => t2), records: this.records };
  }
};
function k(e2, t2, { getFn: n2 = D.getFn, fieldNormWeight: r2 = D.fieldNormWeight } = {}) {
  let i2 = new O({ getFn: n2, fieldNormWeight: r2 });
  return i2.setKeys(e2.map(b)), i2.setSources(t2), i2.create(), i2;
}
function ne(e2, { getFn: t2 = D.getFn, fieldNormWeight: n2 = D.fieldNormWeight } = {}) {
  let { keys: r2, records: i2 } = e2, a2 = new O({ getFn: t2, fieldNormWeight: n2 });
  return a2.setKeys(r2), a2.setIndexRecords(i2), a2;
}
function A(e2 = [], t2 = D.minMatchCharLength) {
  let n2 = [], r2 = -1, i2 = -1, a2 = 0;
  for (let o2 = e2.length; a2 < o2; a2 += 1) {
    let o3 = e2[a2];
    o3 && r2 === -1 ? r2 = a2 : !o3 && r2 !== -1 && (i2 = a2 - 1, i2 - r2 + 1 >= t2 && n2.push([r2, i2]), r2 = -1);
  }
  return e2[a2 - 1] && a2 - r2 >= t2 && n2.push([r2, a2 - 1]), n2;
}
function re(e2, t2, n2, { location: r2 = D.location, distance: i2 = D.distance, threshold: a2 = D.threshold, findAllMatches: o2 = D.findAllMatches, minMatchCharLength: s2 = D.minMatchCharLength, includeMatches: c2 = D.includeMatches, ignoreLocation: l2 = D.ignoreLocation } = {}) {
  if (t2.length > 32) throw Error(m(32));
  let u2 = t2.length, d2 = e2.length, f2 = Math.max(0, Math.min(r2, d2)), p2 = a2, h2 = f2, g2 = (e3, t3) => {
    let n3 = e3 / u2;
    if (l2) return n3;
    let r3 = Math.abs(f2 - t3);
    return i2 ? n3 + r3 / i2 : r3 ? 1 : n3;
  }, _2 = s2 > 1 || c2, v2 = _2 ? Array(d2) : [], y2;
  for (; (y2 = e2.indexOf(t2, h2)) > -1; ) {
    let e3 = g2(0, y2);
    if (p2 = Math.min(e3, p2), h2 = y2 + u2, _2) {
      let e4 = 0;
      for (; e4 < u2; ) v2[y2 + e4] = 1, e4 += 1;
    }
  }
  h2 = -1;
  let b2 = [], x2 = 1, S2 = 0, C2 = u2 + d2, w2 = 1 << u2 - 1;
  for (let t3 = 0; t3 < u2; t3 += 1) {
    let r3 = 0, i3 = C2;
    for (; r3 < i3; ) g2(t3, f2 + i3) <= p2 ? r3 = i3 : C2 = i3, i3 = Math.floor((C2 - r3) / 2 + r3);
    C2 = i3;
    let a3 = Math.max(1, f2 - i3 + 1), s3 = o2 ? d2 : Math.min(f2 + i3, d2) + u2, c3 = Array(s3 + 2);
    c3[s3 + 1] = (1 << t3) - 1;
    for (let r4 = s3; r4 >= a3; --r4) {
      let i4 = r4 - 1, o3 = n2[e2[i4]];
      if (c3[r4] = (c3[r4 + 1] << 1 | 1) & o3, t3 && (c3[r4] |= (b2[r4 + 1] | b2[r4]) << 1 | 1 | b2[r4 + 1]), c3[r4] & w2 && (x2 = g2(t3, i4), x2 <= p2)) {
        if (p2 = x2, h2 = i4, S2 = t3, h2 <= f2) break;
        a3 = Math.max(1, 2 * f2 - h2);
      }
    }
    if (g2(t3 + 1, f2) > p2) break;
    b2 = c3;
  }
  if (_2 && h2 >= 0) {
    let t3 = Math.min(d2 - 1, h2 + u2 - 1 + S2);
    for (let r3 = h2; r3 <= t3; r3 += 1) n2[e2[r3]] && (v2[r3] = 1);
  }
  let T2 = { isMatch: h2 >= 0, score: Math.max(1e-3, x2) };
  if (_2) {
    let e3 = A(v2, s2);
    e3.length ? c2 && (T2.indices = e3) : T2.isMatch = false;
  }
  return T2;
}
function ie(e2) {
  let t2 = {};
  for (let n2 = 0, r2 = e2.length; n2 < r2; n2 += 1) {
    let i2 = e2.charAt(n2);
    t2[i2] = (t2[i2] || 0) | 1 << r2 - n2 - 1;
  }
  return t2;
}
function j(e2) {
  if (e2.length <= 1) return e2;
  e2.sort((e3, t3) => e3[0] - t3[0] || e3[1] - t3[1]);
  let t2 = [e2[0]];
  for (let n2 = 1, r2 = e2.length; n2 < r2; n2 += 1) {
    let r3 = t2[t2.length - 1], i2 = e2[n2];
    i2[0] <= r3[1] + 1 ? r3[1] = Math.max(r3[1], i2[1]) : t2.push(i2);
  }
  return t2;
}
var M = { \u0142: `l`, \u0141: `L`, \u0111: `d`, \u0110: `D`, \u00F8: `o`, \u00D8: `O`, \u0127: `h`, \u0126: `H`, \u0167: `t`, \u0166: `T`, \u0131: `i`, \u00DF: `ss` }, ae = RegExp(`[` + Object.keys(M).join(``) + `]`, `g`), N = typeof String.prototype.normalize == `function` ? (e2) => e2.normalize(`NFD`).replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, ``).replace(ae, (e3) => M[e3]) : (e2) => e2, P = class {
  constructor(e2, { location: t2 = D.location, threshold: n2 = D.threshold, distance: r2 = D.distance, includeMatches: i2 = D.includeMatches, findAllMatches: a2 = D.findAllMatches, minMatchCharLength: o2 = D.minMatchCharLength, isCaseSensitive: s2 = D.isCaseSensitive, ignoreDiacritics: c2 = D.ignoreDiacritics, ignoreLocation: l2 = D.ignoreLocation } = {}) {
    if (this.options = { location: t2, threshold: n2, distance: r2, includeMatches: i2, findAllMatches: a2, minMatchCharLength: o2, isCaseSensitive: s2, ignoreDiacritics: c2, ignoreLocation: l2 }, e2 = s2 ? e2 : e2.toLowerCase(), e2 = c2 ? N(e2) : e2, this.pattern = e2, this.chunks = [], !this.pattern.length) return;
    let u2 = (e3, t3) => {
      this.chunks.push({ pattern: e3, alphabet: ie(e3), startIndex: t3 });
    }, d2 = this.pattern.length;
    if (d2 > 32) {
      let e3 = 0, t3 = d2 % 32, n3 = d2 - t3;
      for (; e3 < n3; ) u2(this.pattern.substr(e3, 32), e3), e3 += 32;
      if (t3) {
        let e4 = d2 - 32;
        u2(this.pattern.substr(e4), e4);
      }
    } else u2(this.pattern, 0);
  }
  searchIn(e2) {
    let { isCaseSensitive: t2, ignoreDiacritics: n2, includeMatches: r2 } = this.options;
    if (e2 = t2 ? e2 : e2.toLowerCase(), e2 = n2 ? N(e2) : e2, this.pattern === e2) {
      let t3 = { isMatch: true, score: 0 };
      return r2 && (t3.indices = [[0, e2.length - 1]]), t3;
    }
    let { location: i2, distance: a2, threshold: o2, findAllMatches: s2, minMatchCharLength: c2, ignoreLocation: l2 } = this.options, u2 = [], d2 = 0, f2 = false;
    this.chunks.forEach(({ pattern: t3, alphabet: n3, startIndex: p3 }) => {
      let { isMatch: m2, score: h2, indices: g2 } = re(e2, t3, n3, { location: i2 + p3, distance: a2, threshold: o2, findAllMatches: s2, minMatchCharLength: c2, includeMatches: r2, ignoreLocation: l2 });
      m2 && (f2 = true), d2 += h2, m2 && g2 && u2.push(...g2);
    });
    let p2 = { isMatch: f2, score: f2 ? d2 / this.chunks.length : 1 };
    return f2 && r2 && (p2.indices = j(u2)), p2;
  }
}, oe = /* @__PURE__ */ new Set([`fuzzy`, `include`]);
function se(e2) {
  return e2.startsWith(`inverse`);
}
var F = [{ type: `exact`, multiRegex: /^="(.*)"$/, singleRegex: /^=(.*)$/, create: (e2) => ({ type: `exact`, search(t2) {
  let n2 = t2 === e2;
  return { isMatch: n2, score: +!n2, indices: [0, e2.length - 1] };
} }) }, { type: `include`, multiRegex: /^'"(.*)"$/, singleRegex: /^'(.*)$/, create: (e2) => ({ type: `include`, search(t2) {
  let n2 = 0, r2, i2 = [], a2 = e2.length;
  for (; (r2 = t2.indexOf(e2, n2)) > -1; ) n2 = r2 + a2, i2.push([r2, n2 - 1]);
  let o2 = !!i2.length;
  return { isMatch: o2, score: +!o2, indices: i2 };
} }) }, { type: `prefix-exact`, multiRegex: /^\^"(.*)"$/, singleRegex: /^\^(.*)$/, create: (e2) => ({ type: `prefix-exact`, search(t2) {
  let n2 = t2.startsWith(e2);
  return { isMatch: n2, score: +!n2, indices: [0, e2.length - 1] };
} }) }, { type: `inverse-prefix-exact`, multiRegex: /^!\^"(.*)"$/, singleRegex: /^!\^(.*)$/, create: (e2) => ({ type: `inverse-prefix-exact`, search(t2) {
  let n2 = !t2.startsWith(e2);
  return { isMatch: n2, score: +!n2, indices: [0, t2.length - 1] };
} }) }, { type: `inverse-suffix-exact`, multiRegex: /^!"(.*)"\$$/, singleRegex: /^!(.*)\$$/, create: (e2) => ({ type: `inverse-suffix-exact`, search(t2) {
  let n2 = !t2.endsWith(e2);
  return { isMatch: n2, score: +!n2, indices: [0, t2.length - 1] };
} }) }, { type: `suffix-exact`, multiRegex: /^"(.*)"\$$/, singleRegex: /^(.*)\$$/, create: (e2) => ({ type: `suffix-exact`, search(t2) {
  let n2 = t2.endsWith(e2);
  return { isMatch: n2, score: +!n2, indices: [t2.length - e2.length, t2.length - 1] };
} }) }, { type: `inverse-exact`, multiRegex: /^!"(.*)"$/, singleRegex: /^!(.*)$/, create: (e2) => ({ type: `inverse-exact`, search(t2) {
  let n2 = t2.indexOf(e2) === -1;
  return { isMatch: n2, score: +!n2, indices: [0, t2.length - 1] };
} }) }, { type: `fuzzy`, multiRegex: /^"(.*)"$/, singleRegex: /^(.*)$/, create: (e2, t2 = {}) => {
  let n2 = new P(e2, { location: t2.location ?? D.location, threshold: t2.threshold ?? D.threshold, distance: t2.distance ?? D.distance, includeMatches: t2.includeMatches ?? D.includeMatches, findAllMatches: t2.findAllMatches ?? D.findAllMatches, minMatchCharLength: t2.minMatchCharLength ?? D.minMatchCharLength, isCaseSensitive: t2.isCaseSensitive ?? D.isCaseSensitive, ignoreDiacritics: t2.ignoreDiacritics ?? D.ignoreDiacritics, ignoreLocation: t2.ignoreLocation ?? D.ignoreLocation });
  return { type: `fuzzy`, search(e3) {
    return n2.searchIn(e3);
  } };
} }], I = F.length, ce = `\0`, le = `|`;
function ue(e2) {
  let t2 = [], n2 = e2.length, r2 = 0;
  for (; r2 < n2; ) {
    for (; r2 < n2 && e2[r2] === ` `; ) r2++;
    if (r2 >= n2) break;
    let i2 = r2;
    for (; i2 < n2 && e2[i2] !== ` ` && e2[i2] !== `"`; ) i2++;
    if (i2 < n2 && e2[i2] === `"`) {
      for (i2++; i2 < n2; ) {
        if (e2[i2] === `"`) {
          let t3 = i2 + 1;
          if (t3 >= n2 || e2[t3] === ` `) {
            i2++;
            break;
          }
          if (e2[t3] === `$` && (t3 + 1 >= n2 || e2[t3 + 1] === ` `)) {
            i2 += 2;
            break;
          }
        }
        i2++;
      }
      t2.push(e2.substring(r2, i2)), r2 = i2;
    } else {
      for (; i2 < n2 && e2[i2] !== ` `; ) i2++;
      t2.push(e2.substring(r2, i2)), r2 = i2;
    }
  }
  return t2;
}
function L(e2, t2) {
  let n2 = e2.match(t2);
  return n2 ? n2[1] : null;
}
function de(e2, t2 = {}) {
  return e2.replace(/\\\|/g, ce).split(le).map((e3) => {
    let n2 = ue(e3.replace(/\u0000/g, `|`).trim()).filter((e4) => e4 && !!e4.trim()), r2 = [];
    for (let e4 = 0, i2 = n2.length; e4 < i2; e4 += 1) {
      let i3 = n2[e4], a2 = false, o2 = -1;
      for (; !a2 && ++o2 < I; ) {
        let e5 = F[o2], n3 = L(i3, e5.multiRegex);
        n3 && (r2.push(e5.create(n3, t2)), a2 = true);
      }
      if (!a2) for (o2 = -1; ++o2 < I; ) {
        let e5 = F[o2], n3 = L(i3, e5.singleRegex);
        if (n3) {
          r2.push(e5.create(n3, t2));
          break;
        }
      }
    }
    return r2;
  });
}
var fe = class {
  constructor(e2, { isCaseSensitive: t2 = D.isCaseSensitive, ignoreDiacritics: n2 = D.ignoreDiacritics, includeMatches: r2 = D.includeMatches, minMatchCharLength: i2 = D.minMatchCharLength, ignoreLocation: a2 = D.ignoreLocation, findAllMatches: o2 = D.findAllMatches, location: s2 = D.location, threshold: c2 = D.threshold, distance: l2 = D.distance } = {}) {
    this.query = null, this.options = { isCaseSensitive: t2, ignoreDiacritics: n2, includeMatches: r2, minMatchCharLength: i2, findAllMatches: o2, ignoreLocation: a2, location: s2, threshold: c2, distance: l2 }, e2 = t2 ? e2 : e2.toLowerCase(), e2 = n2 ? N(e2) : e2, this.pattern = e2, this.query = de(this.pattern, this.options);
  }
  static condition(e2, t2) {
    return t2.useExtendedSearch;
  }
  searchIn(e2) {
    let t2 = this.query;
    if (!t2) return { isMatch: false, score: 1 };
    let { includeMatches: n2, isCaseSensitive: r2, ignoreDiacritics: i2 } = this.options;
    e2 = r2 ? e2 : e2.toLowerCase(), e2 = i2 ? N(e2) : e2;
    let a2 = 0, o2 = [], s2 = 0, c2 = false;
    for (let r3 = 0, i3 = t2.length; r3 < i3; r3 += 1) {
      let i4 = t2[r3];
      o2.length = 0, a2 = 0, c2 = false;
      for (let t3 = 0, r4 = i4.length; t3 < r4; t3 += 1) {
        let r5 = i4[t3], { isMatch: l2, indices: u2, score: d2 } = r5.search(e2);
        if (l2) a2 += 1, s2 += d2, se(r5.type) && (c2 = true), n2 && (oe.has(r5.type) ? o2.push(...u2) : o2.push(u2));
        else {
          s2 = 0, a2 = 0, o2.length = 0, c2 = false;
          break;
        }
      }
      if (a2) {
        let e3 = { isMatch: true, score: s2 / a2 };
        return c2 && (e3.hasInverse = true), n2 && (e3.indices = j(o2)), e3;
      }
    }
    return { isMatch: false, score: 1 };
  }
}, R = [];
function z(...e2) {
  R.push(...e2);
}
function B(e2, t2) {
  for (let n2 = 0, r2 = R.length; n2 < r2; n2 += 1) {
    let r3 = R[n2];
    if (r3.condition(e2, t2)) return new r3(e2, t2);
  }
  return new P(e2, t2);
}
var V = { AND: `$and`, OR: `$or` }, H = { PATH: `$path`, PATTERN: `$val` }, U = (e2) => !!(e2[V.AND] || e2[V.OR]), pe = (e2) => !!e2[H.PATH], W = (t2) => !e(t2) && o(t2) && !U(t2), G = (e2) => ({ [V.AND]: Object.keys(e2).map((t2) => ({ [t2]: e2[t2] })) });
function K(t2, n2, { auto: i2 = true } = {}) {
  let a2 = (t3) => {
    if (r(t3)) {
      let e2 = { keyId: null, pattern: t3 };
      return i2 && (e2.searcher = B(t3, n2)), e2;
    }
    let o2 = Object.keys(t3), s2 = pe(t3);
    if (!s2 && o2.length > 1 && !U(t3)) return a2(G(t3));
    if (W(t3)) {
      let e2 = s2 ? t3[H.PATH] : o2[0], a3 = s2 ? t3[H.PATTERN] : t3[e2];
      if (!r(a3)) throw Error(p(e2));
      let c3 = { keyId: S(e2), pattern: a3 };
      return i2 && (c3.searcher = B(a3, n2)), c3;
    }
    let c2 = { children: [], operator: o2[0] };
    return o2.forEach((n3) => {
      let r2 = t3[n3];
      e(r2) && r2.forEach((e2) => {
        c2.children.push(a2(e2));
      });
    }), c2;
  };
  return U(t2) || (t2 = G(t2)), a2(t2);
}
function q(e2, { ignoreFieldNorm: t2 = D.ignoreFieldNorm }) {
  let n2 = 1;
  return e2.forEach(({ key: e3, norm: r2, score: i2 }) => {
    let a2 = e3 ? e3.weight : null;
    n2 *= (i2 === 0 && a2 ? 2 ** -52 : i2) ** +((a2 || 1) * (t2 ? 1 : r2));
  }), n2;
}
function me(e2, { ignoreFieldNorm: t2 = D.ignoreFieldNorm }) {
  e2.forEach((e3) => {
    e3.score = q(e3.matches, { ignoreFieldNorm: t2 });
  });
}
var he = class {
  constructor(e2) {
    this.limit = e2, this.heap = [];
  }
  get size() {
    return this.heap.length;
  }
  shouldInsert(e2) {
    return this.size < this.limit || e2 < this.heap[0].score;
  }
  insert(e2) {
    this.size < this.limit ? (this.heap.push(e2), this._bubbleUp(this.size - 1)) : e2.score < this.heap[0].score && (this.heap[0] = e2, this._sinkDown(0));
  }
  extractSorted(e2) {
    return this.heap.sort(e2);
  }
  _bubbleUp(e2) {
    let t2 = this.heap;
    for (; e2 > 0; ) {
      let n2 = e2 - 1 >> 1;
      if (t2[e2].score <= t2[n2].score) break;
      let r2 = t2[e2];
      t2[e2] = t2[n2], t2[n2] = r2, e2 = n2;
    }
  }
  _sinkDown(e2) {
    let t2 = this.heap, n2 = t2.length, r2 = e2;
    do {
      e2 = r2;
      let i2 = 2 * e2 + 1, a2 = 2 * e2 + 2;
      if (i2 < n2 && t2[i2].score > t2[r2].score && (r2 = i2), a2 < n2 && t2[a2].score > t2[r2].score && (r2 = a2), r2 !== e2) {
        let n3 = t2[e2];
        t2[e2] = t2[r2], t2[r2] = n3;
      }
    } while (r2 !== e2);
  }
};
function ge(e2) {
  let t2 = [];
  return e2.matches.forEach((e3) => {
    if (!c(e3.indices) || !e3.indices.length) return;
    let n2 = { indices: e3.indices, value: e3.value };
    e3.key && (n2.key = e3.key.id), e3.idx > -1 && (n2.refIndex = e3.idx), t2.push(n2);
  }), t2;
}
function _e(e2, t2, { includeMatches: n2 = D.includeMatches, includeScore: r2 = D.includeScore } = {}) {
  return e2.map((e3) => {
    let { idx: i2 } = e3, a2 = { item: t2[i2], refIndex: i2 };
    return n2 && (a2.matches = ge(e3)), r2 && (a2.score = e3.score), a2;
  });
}
var ve = /[\p{L}\p{M}\p{N}_]+/gu, J = /* @__PURE__ */ new WeakSet();
function ye(e2) {
  J.has(e2) || (J.add(e2), console.warn(`[Fuse] tokenize regex ${e2} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`));
}
function be(e2) {
  if (typeof e2 == `function`) {
    let t2 = false;
    return (n2) => {
      let r2 = e2(n2);
      if (!t2 && (t2 = true, !Array.isArray(r2) || r2.some((e3) => typeof e3 != `string`))) throw Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(r2) ? `array containing non-strings` : typeof r2}.`);
      return r2;
    };
  }
  return e2 instanceof RegExp ? (e2.global || ye(e2), (t2) => t2.match(e2) || []) : (e3) => e3.match(ve) || [];
}
function Y({ isCaseSensitive: e2 = false, ignoreDiacritics: t2 = false, tokenize: n2 } = {}) {
  let r2 = be(n2);
  return { tokenize(n3) {
    return e2 || (n3 = n3.toLowerCase()), t2 && (n3 = N(n3)), r2(n3);
  } };
}
var xe = class {
  static condition(e2, t2) {
    return t2.useTokenSearch;
  }
  constructor(e2, t2) {
    this.options = t2, this.analyzer = Y({ isCaseSensitive: t2.isCaseSensitive, ignoreDiacritics: t2.ignoreDiacritics, tokenize: t2.tokenize });
    let n2 = this.analyzer.tokenize(e2), { df: r2, fieldCount: i2 } = t2._invertedIndex;
    this.termSearchers = [], this.idfWeights = [];
    for (let e3 of n2) {
      this.termSearchers.push(new P(e3, { location: t2.location, threshold: t2.threshold, distance: t2.distance, includeMatches: t2.includeMatches, findAllMatches: t2.findAllMatches, minMatchCharLength: t2.minMatchCharLength, isCaseSensitive: t2.isCaseSensitive, ignoreDiacritics: t2.ignoreDiacritics, ignoreLocation: true }));
      let n3 = r2.get(e3) || 0, a2 = Math.log(1 + (i2 - n3 + 0.5) / (n3 + 0.5));
      this.idfWeights.push(a2);
    }
    this.combineAll = t2.tokenMatch === `all`, this.numTerms = this.termSearchers.length, this.useMask = this.numTerms <= 31;
  }
  searchIn(e2) {
    if (!this.termSearchers.length) return { isMatch: false, score: 1 };
    let t2 = [], n2 = 0, r2 = 0, i2 = 0, a2 = 0, o2 = this.combineAll && !this.useMask ? /* @__PURE__ */ new Set() : null;
    for (let s3 = 0; s3 < this.termSearchers.length; s3++) {
      let c3 = this.termSearchers[s3].searchIn(e2), l2 = this.idfWeights[s3];
      r2 += l2, c3.isMatch && (i2++, n2 += l2 * (1 - c3.score), c3.indices && t2.push(...c3.indices), this.combineAll && (this.useMask ? a2 |= 1 << s3 : o2.add(s3)));
    }
    if (i2 === 0) return { isMatch: false, score: 1 };
    let s2 = r2 > 0 ? 1 - n2 / r2 : 0, c2 = { isMatch: true, score: Math.max(1e-3, s2) };
    return this.options.includeMatches && t2.length && (c2.indices = j(t2)), this.combineAll && (this.useMask ? c2.matchedMask = a2 : c2.matchedTerms = o2, c2.termCount = this.numTerms), c2;
  }
};
function X(e2, t2, n2, r2) {
  let i2 = r2.tokenize(t2);
  if (!i2.length) return;
  e2.fieldCount++, e2.docFieldCount.set(n2, (e2.docFieldCount.get(n2) || 0) + 1);
  let a2 = new Set(i2), o2 = e2.docTermFieldHits.get(n2);
  o2 || (o2 = /* @__PURE__ */ new Map(), e2.docTermFieldHits.set(n2, o2));
  for (let t3 of a2) o2.set(t3, (o2.get(t3) || 0) + 1), e2.df.set(t3, (e2.df.get(t3) || 0) + 1);
}
function Z(e2, t2, n2, r2) {
  let { i: i2, v: a2, $: o2 } = t2;
  if (a2 !== void 0) {
    X(e2, a2, i2, r2);
    return;
  }
  if (o2) for (let t3 = 0; t3 < n2; t3++) {
    let n3 = o2[t3];
    if (n3) if (Array.isArray(n3)) for (let t4 of n3) X(e2, t4.v, i2, r2);
    else X(e2, n3.v, i2, r2);
  }
}
function Se(e2, t2, n2) {
  let r2 = { fieldCount: 0, df: /* @__PURE__ */ new Map(), docFieldCount: /* @__PURE__ */ new Map(), docTermFieldHits: /* @__PURE__ */ new Map() };
  for (let i2 of e2) Z(r2, i2, t2, n2);
  return r2;
}
function Ce(e2, t2, n2, r2) {
  Z(e2, t2, n2, r2);
}
function we(e2, t2) {
  let n2 = e2.docFieldCount.get(t2);
  if (n2 === void 0) return;
  e2.fieldCount -= n2, e2.docFieldCount.delete(t2);
  let r2 = e2.docTermFieldHits.get(t2);
  if (r2) {
    for (let [t3, n3] of r2) {
      let r3 = (e2.df.get(t3) || 0) - n3;
      r3 <= 0 ? e2.df.delete(t3) : e2.df.set(t3, r3);
    }
    e2.docTermFieldHits.delete(t2);
  }
}
function Q(e2, t2) {
  if (t2.length === 0) return;
  let n2 = Array.from(new Set(t2)).sort((e3, t3) => e3 - t3);
  for (let t3 of n2) we(e2, t3);
  let r2 = (e3) => {
    let t3 = 0, r3 = n2.length;
    for (; t3 < r3; ) {
      let i3 = t3 + r3 >>> 1;
      n2[i3] < e3 ? t3 = i3 + 1 : r3 = i3;
    }
    return e3 - t3;
  }, i2 = n2[0], a2 = /* @__PURE__ */ new Map();
  for (let [t3, n3] of e2.docFieldCount) a2.set(t3 > i2 ? r2(t3) : t3, n3);
  e2.docFieldCount = a2;
  let o2 = /* @__PURE__ */ new Map();
  for (let [t3, n3] of e2.docTermFieldHits) o2.set(t3 > i2 ? r2(t3) : t3, n3);
  e2.docTermFieldHits = o2;
}
var $ = class {
  constructor(e2, t2, n2) {
    this.options = { ...D, ...t2 }, this.options.useExtendedSearch, this.options.useTokenSearch, this._keyStore = new y(this.options.keys), this._docs = e2, this._myIndex = null, this._invertedIndex = null, this.setCollection(e2, n2), this._lastQuery = null, this._lastSearcher = null;
  }
  _getSearcher(e2) {
    if (this._lastQuery === e2) return this._lastSearcher;
    let t2 = B(e2, this._invertedIndex ? { ...this.options, _invertedIndex: this._invertedIndex } : this.options);
    return this._lastQuery = e2, this._lastSearcher = t2, t2;
  }
  setCollection(e2, t2) {
    if (this._docs = e2, t2 && !(t2 instanceof O)) throw Error(d);
    if (this._myIndex = t2 || k(this.options.keys, this._docs, { getFn: this.options.getFn, fieldNormWeight: this.options.fieldNormWeight }), this.options.useTokenSearch) {
      let e3 = Y({ isCaseSensitive: this.options.isCaseSensitive, ignoreDiacritics: this.options.ignoreDiacritics, tokenize: this.options.tokenize });
      this._invertedIndex = Se(this._myIndex.records, this._myIndex.keys.length, e3);
    }
    this._invalidateSearcherCache();
  }
  add(e2) {
    if (!c(e2)) return;
    this._docs.push(e2);
    let t2 = this._myIndex.add(e2, this._docs.length - 1);
    if (this._invertedIndex && t2) {
      let e3 = Y({ isCaseSensitive: this.options.isCaseSensitive, ignoreDiacritics: this.options.ignoreDiacritics, tokenize: this.options.tokenize });
      Ce(this._invertedIndex, t2, this._myIndex.keys.length, e3);
    }
    this._invalidateSearcherCache();
  }
  remove(e2 = () => false) {
    let t2 = [], n2 = [];
    for (let r2 = 0, i2 = this._docs.length; r2 < i2; r2 += 1) e2(this._docs[r2], r2) && (t2.push(this._docs[r2]), n2.push(r2));
    if (n2.length) {
      this._invertedIndex && Q(this._invertedIndex, n2);
      let e3 = new Set(n2);
      this._docs = this._docs.filter((t3, n3) => !e3.has(n3)), this._myIndex.removeAll(n2), this._invalidateSearcherCache();
    }
    return t2;
  }
  removeAt(e2) {
    if (!Number.isInteger(e2) || e2 < 0 || e2 >= this._docs.length) throw Error(f);
    this._invertedIndex && Q(this._invertedIndex, [e2]);
    let t2 = this._docs.splice(e2, 1)[0];
    return this._myIndex.removeAt(e2), this._invalidateSearcherCache(), t2;
  }
  _invalidateSearcherCache() {
    this._lastQuery = null, this._lastSearcher = null;
  }
  getIndex() {
    return this._myIndex;
  }
  search(e2, t2) {
    let { limit: n2 = -1 } = t2 || {}, { includeMatches: a2, includeScore: o2, shouldSort: s2, sortFn: c2, ignoreFieldNorm: l2 } = this.options;
    if (r(e2) && !e2.trim()) {
      let e3 = this._docs.map((e4, t3) => ({ item: e4, refIndex: t3 }));
      return i(n2) && n2 > -1 && (e3 = e3.slice(0, n2)), e3;
    }
    let u2 = i(n2) && n2 > 0 && r(e2), d2;
    if (u2) {
      let t3 = new he(n2);
      r(this._docs[0]) ? this._searchStringList(e2, { heap: t3, ignoreFieldNorm: l2 }) : this._searchObjectList(e2, { heap: t3, ignoreFieldNorm: l2 }), d2 = t3.extractSorted(c2);
    } else d2 = r(e2) ? r(this._docs[0]) ? this._searchStringList(e2) : this._searchObjectList(e2) : this._searchLogical(e2), me(d2, { ignoreFieldNorm: l2 }), s2 && d2.sort(c2), i(n2) && n2 > -1 && (d2 = d2.slice(0, n2));
    return _e(d2, this._docs, { includeMatches: a2, includeScore: o2 });
  }
  _searchStringList(e2, { heap: t2, ignoreFieldNorm: n2 } = {}) {
    let r2 = this._getSearcher(e2), i2 = this.options.useTokenSearch && this.options.tokenMatch === `all`, { records: a2 } = this._myIndex, o2 = t2 ? null : [];
    return a2.forEach(({ v: e3, i: a3, n: s2 }) => {
      if (!c(e3)) return;
      let l2 = r2.searchIn(e3);
      if (l2.isMatch) {
        let r3 = { score: l2.score, value: e3, norm: s2, indices: l2.indices };
        i2 && (r3.matchedMask = l2.matchedMask, r3.matchedTerms = l2.matchedTerms, r3.termCount = l2.termCount);
        let c2 = [r3];
        if (!i2 || this._coversAllTokens(c2)) {
          let r4 = { item: e3, idx: a3, matches: c2 };
          t2 ? (r4.score = q(r4.matches, { ignoreFieldNorm: n2 }), t2.shouldInsert(r4.score) && t2.insert(r4)) : o2.push(r4);
        }
      }
    }), o2;
  }
  _searchLogical(e2) {
    let t2 = K(e2, this.options), n2 = (e3, t3, r3) => {
      if (!(`children` in e3)) {
        let { keyId: n3, searcher: i4 } = e3, a4;
        return n3 === null ? (a4 = [], this._myIndex.keys.forEach((e4, n4) => {
          a4.push(...this._findMatches({ key: e4, value: t3[n4], searcher: i4 }));
        })) : a4 = this._findMatches({ key: this._keyStore.get(n3), value: this._myIndex.getValueForItemAtKeyId(t3, n3), searcher: i4 }), a4 && a4.length ? [{ idx: r3, item: t3, matches: a4 }] : [];
      }
      let { children: i3, operator: a3 } = e3, o2 = [];
      for (let e4 = 0, s2 = i3.length; e4 < s2; e4 += 1) {
        let s3 = i3[e4], c2 = n2(s3, t3, r3);
        if (c2.length) o2.push(...c2);
        else if (a3 === V.AND) return [];
      }
      return o2;
    }, r2 = this._myIndex.records, i2 = /* @__PURE__ */ new Map(), a2 = [];
    return r2.forEach(({ $: e3, i: r3 }) => {
      if (c(e3)) {
        let o2 = n2(t2, e3, r3);
        o2.length && (i2.has(r3) || (i2.set(r3, { idx: r3, item: e3, matches: [] }), a2.push(i2.get(r3))), o2.forEach(({ matches: e4 }) => {
          i2.get(r3).matches.push(...e4);
        }));
      }
    }), a2;
  }
  _searchObjectList(e2, { heap: t2, ignoreFieldNorm: n2 } = {}) {
    let r2 = this._getSearcher(e2), i2 = this.options.useTokenSearch && this.options.tokenMatch === `all`, { keys: a2, records: o2 } = this._myIndex, s2 = t2 ? null : [];
    return o2.forEach(({ $: e3, i: o3 }) => {
      if (!c(e3)) return;
      let l2 = [], u2 = false, d2 = false;
      if (a2.forEach((t3, n3) => {
        let i3 = this._findMatches({ key: t3, value: e3[n3], searcher: r2 });
        i3.length ? (l2.push(...i3), i3[0].hasInverse && (d2 = true)) : u2 = true;
      }), !(d2 && u2) && l2.length && (!i2 || this._coversAllTokens(l2))) {
        let r3 = { idx: o3, item: e3, matches: l2 };
        t2 ? (r3.score = q(r3.matches, { ignoreFieldNorm: n2 }), t2.shouldInsert(r3.score) && t2.insert(r3)) : s2.push(r3);
      }
    }), s2;
  }
  _findMatches({ key: t2, value: n2, searcher: r2 }) {
    if (!c(n2)) return [];
    let i2 = [];
    if (e(n2)) n2.forEach(({ v: e2, i: n3, n: a2 }) => {
      if (!c(e2)) return;
      let o2 = r2.searchIn(e2);
      if (o2.isMatch) {
        let r3 = { score: o2.score, key: t2, value: e2, idx: n3, norm: a2, indices: o2.indices, hasInverse: o2.hasInverse };
        o2.termCount !== void 0 && (r3.matchedMask = o2.matchedMask, r3.matchedTerms = o2.matchedTerms, r3.termCount = o2.termCount), i2.push(r3);
      }
    });
    else {
      let { v: e2, n: a2 } = n2, o2 = r2.searchIn(e2);
      if (o2.isMatch) {
        let n3 = { score: o2.score, key: t2, value: e2, norm: a2, indices: o2.indices, hasInverse: o2.hasInverse };
        o2.termCount !== void 0 && (n3.matchedMask = o2.matchedMask, n3.matchedTerms = o2.matchedTerms, n3.termCount = o2.termCount), i2.push(n3);
      }
    }
    return i2;
  }
  _coversAllTokens(e2) {
    let t2 = e2.length ? e2[0].termCount : void 0;
    if (t2 === void 0) return true;
    if (t2 <= 31) {
      let n3 = 0;
      for (let t3 = 0; t3 < e2.length; t3++) n3 |= e2[t3].matchedMask || 0;
      return n3 === 2 ** t2 - 1;
    }
    let n2 = /* @__PURE__ */ new Set();
    for (let t3 = 0; t3 < e2.length; t3++) {
      let r2 = e2[t3].matchedTerms;
      if (r2) for (let e3 of r2) n2.add(e3);
    }
    return n2.size === t2;
  }
};
$.version = `7.4.2`, $.createIndex = k, $.parseIndex = ne, $.config = D, $.match = function(e2, t2, n2) {
  if (n2 && n2.useTokenSearch) throw Error(_);
  return B(e2, { ...D, ...n2 }).searchIn(t2);
}, $.parseQuery = K, z(fe), z(xe), $.use = function(...e2) {
  e2.forEach((e3) => z(e3));
};
var Te = $;
export {
  Te as t
};
