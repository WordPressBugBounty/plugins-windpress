import { r as e } from "./chunk-DlkHe4MQ.js";
import { t } from "./source-map-generator-BXXozWul.js";
var n = e({ AtKeyword: () => 3, BadString: () => 6, BadUrl: () => 8, CDC: () => 15, CDO: () => 14, Colon: () => 16, Comma: () => 18, Comment: () => 25, Delim: () => 9, Dimension: () => 12, EOF: () => 0, Function: () => 2, Hash: () => 4, Ident: () => 1, LeftCurlyBracket: () => 23, LeftParenthesis: () => 21, LeftSquareBracket: () => 19, Number: () => 10, Percentage: () => 11, RightCurlyBracket: () => 24, RightParenthesis: () => 22, RightSquareBracket: () => 20, Semicolon: () => 17, String: () => 5, Url: () => 7, WhiteSpace: () => 13 }), r = 0;
function i(e3) {
  return e3 >= 48 && e3 <= 57;
}
function a(e3) {
  return i(e3) || e3 >= 65 && e3 <= 70 || e3 >= 97 && e3 <= 102;
}
function o(e3) {
  return e3 >= 65 && e3 <= 90;
}
function s(e3) {
  return e3 >= 97 && e3 <= 122;
}
function c(e3) {
  return o(e3) || s(e3);
}
function l(e3) {
  return e3 >= 128;
}
function u(e3) {
  return c(e3) || l(e3) || e3 === 95;
}
function d(e3) {
  return u(e3) || i(e3) || e3 === 45;
}
function f(e3) {
  return e3 >= 0 && e3 <= 8 || e3 === 11 || e3 >= 14 && e3 <= 31 || e3 === 127;
}
function p(e3) {
  return e3 === 10 || e3 === 13 || e3 === 12;
}
function m(e3) {
  return p(e3) || e3 === 32 || e3 === 9;
}
function h(e3, t2) {
  return !(e3 !== 92 || p(t2) || t2 === r);
}
function g(e3, t2, n2) {
  return e3 === 45 ? u(t2) || t2 === 45 || h(t2, n2) : u(e3) ? true : e3 === 92 ? h(e3, t2) : false;
}
function _(e3, t2, n2) {
  return e3 === 43 || e3 === 45 ? i(t2) ? 2 : t2 === 46 && i(n2) ? 3 : 0 : e3 === 46 ? i(t2) ? 2 : 0 : i(e3) ? 1 : 0;
}
function v(e3) {
  return e3 === 65279 || e3 === 65534 ? 1 : 0;
}
var y = Array(128);
for (let e3 = 0; e3 < y.length; e3++) y[e3] = m(e3) && 130 || i(e3) && 131 || u(e3) && 132 || f(e3) && 133 || e3 || 128;
function b(e3) {
  return e3 < 128 ? y[e3] : 132;
}
function x(e3, t2) {
  return t2 < e3.length ? e3.charCodeAt(t2) : 0;
}
function ee(e3, t2, n2) {
  return n2 === 13 && x(e3, t2 + 1) === 10 ? 2 : 1;
}
function S(e3, t2, n2) {
  let r2 = e3.charCodeAt(t2);
  return o(r2) && (r2 |= 32), r2 === n2;
}
function te(e3, t2, n2, r2) {
  if (n2 - t2 !== r2.length || t2 < 0 || n2 > e3.length) return false;
  for (let i2 = t2; i2 < n2; i2++) {
    let n3 = r2.charCodeAt(i2 - t2), a2 = e3.charCodeAt(i2);
    if (o(a2) && (a2 |= 32), a2 !== n3) return false;
  }
  return true;
}
function ne(e3, t2) {
  for (; t2 >= 0 && m(e3.charCodeAt(t2)); t2--) ;
  return t2 + 1;
}
function re(e3, t2) {
  for (; t2 < e3.length && m(e3.charCodeAt(t2)); t2++) ;
  return t2;
}
function ie(e3, t2) {
  for (; t2 < e3.length && i(e3.charCodeAt(t2)); t2++) ;
  return t2;
}
function C(e3, t2) {
  if (t2 += 2, a(x(e3, t2 - 1))) {
    for (let n3 = Math.min(e3.length, t2 + 5); t2 < n3 && a(x(e3, t2)); t2++) ;
    let n2 = x(e3, t2);
    m(n2) && (t2 += ee(e3, t2, n2));
  }
  return t2;
}
function ae(e3, t2) {
  for (; t2 < e3.length; t2++) {
    let n2 = e3.charCodeAt(t2);
    if (!d(n2)) {
      if (h(n2, x(e3, t2 + 1))) {
        t2 = C(e3, t2) - 1;
        continue;
      }
      break;
    }
  }
  return t2;
}
function oe(e3, t2) {
  let n2 = e3.charCodeAt(t2);
  if ((n2 === 43 || n2 === 45) && (n2 = e3.charCodeAt(t2 += 1)), i(n2) && (t2 = ie(e3, t2 + 1), n2 = e3.charCodeAt(t2)), n2 === 46 && i(e3.charCodeAt(t2 + 1)) && (t2 += 2, t2 = ie(e3, t2)), S(e3, t2, 101)) {
    let r2 = 0;
    n2 = e3.charCodeAt(t2 + 1), (n2 === 45 || n2 === 43) && (r2 = 1, n2 = e3.charCodeAt(t2 + 2)), i(n2) && (t2 = ie(e3, t2 + 1 + r2 + 1));
  }
  return t2;
}
function se(e3, t2) {
  for (; t2 < e3.length; t2++) {
    let n2 = e3.charCodeAt(t2);
    if (n2 === 41) {
      t2++;
      break;
    }
    h(n2, x(e3, t2 + 1)) && (t2 = C(e3, t2));
  }
  return t2;
}
function ce(e3) {
  if (e3.length === 1 && !a(e3.charCodeAt(0))) return e3[0];
  let t2 = parseInt(e3, 16);
  return (t2 === 0 || t2 >= 55296 && t2 <= 57343 || t2 > 1114111) && (t2 = 65533), String.fromCodePoint(t2);
}
var le = `EOF-token.ident-token.function-token.at-keyword-token.hash-token.string-token.bad-string-token.url-token.bad-url-token.delim-token.number-token.percentage-token.dimension-token.whitespace-token.CDO-token.CDC-token.colon-token.semicolon-token.comma-token.[-token.]-token.(-token.)-token.{-token.}-token.comment-token`.split(`.`), ue = 16 * 1024;
function de(e3 = null, t2) {
  return e3 === null || e3.length < t2 ? new Uint32Array(Math.max(t2 + 1024, ue)) : e3;
}
var fe = 10, pe = 12, me = 13;
function he(e3) {
  let t2 = e3.source, n2 = t2.length, r2 = t2.length > 0 ? v(t2.charCodeAt(0)) : 0, i2 = de(e3.lines, n2), a2 = de(e3.columns, n2), o2 = e3.startLine, s2 = e3.startColumn;
  for (let e4 = r2; e4 < n2; e4++) {
    let r3 = t2.charCodeAt(e4);
    i2[e4] = o2, a2[e4] = s2++, (r3 === fe || r3 === me || r3 === pe) && (r3 === me && e4 + 1 < n2 && t2.charCodeAt(e4 + 1) === fe && (e4++, i2[e4] = o2, a2[e4] = s2), o2++, s2 = 1);
  }
  i2[n2] = o2, a2[n2] = s2, e3.lines = i2, e3.columns = a2, e3.computed = true;
}
var ge = class {
  constructor(e3, t2, n2, r2) {
    this.setSource(e3, t2, n2, r2), this.lines = null, this.columns = null;
  }
  setSource(e3 = ``, t2 = 0, n2 = 1, r2 = 1) {
    this.source = e3, this.startOffset = t2, this.startLine = n2, this.startColumn = r2, this.computed = false;
  }
  getLocation(e3, t2) {
    return this.computed || he(this), { source: t2, offset: this.startOffset + e3, line: this.lines[e3], column: this.columns[e3] };
  }
  getLocationRange(e3, t2, n2) {
    return this.computed || he(this), { source: n2, start: { offset: this.startOffset + e3, line: this.lines[e3], column: this.columns[e3] }, end: { offset: this.startOffset + t2, line: this.lines[t2], column: this.columns[t2] } };
  }
}, w = 16777215, T = 24, _e = 1, ve = 2, E = new Uint8Array(32);
E[2] = 22, E[21] = 22, E[19] = 20, E[23] = 24;
var D = new Uint8Array(32);
D[2] = _e, D[21] = _e, D[19] = _e, D[23] = _e, D[22] = ve, D[20] = ve, D[24] = ve;
function ye(e3, t2, n2) {
  return e3 < t2 ? t2 : e3 > n2 ? n2 : e3;
}
var be = class {
  constructor(e3, t2) {
    this.setSource(e3, t2);
  }
  reset() {
    this.eof = false, this.tokenIndex = -1, this.tokenType = 0, this.tokenStart = this.firstCharOffset, this.tokenEnd = this.firstCharOffset;
  }
  setSource(e3 = ``, t2 = () => {
  }) {
    e3 = String(e3 || ``);
    let n2 = e3.length, r2 = de(this.offsetAndType, e3.length + 1), i2 = de(this.balance, e3.length + 1), a2 = 0, o2 = -1, s2 = 0, c2 = e3.length;
    this.offsetAndType = null, this.balance = null, i2.fill(0), t2(e3, (e4, t3, n3) => {
      let l2 = a2++;
      if (r2[l2] = e4 << T | n3, o2 === -1 && (o2 = t3), i2[l2] = c2, e4 === s2) {
        let e5 = i2[c2];
        i2[c2] = l2, c2 = e5, s2 = E[r2[e5] >> T];
      } else this.isBlockOpenerTokenType(e4) && (c2 = l2, s2 = E[e4]);
    }), r2[a2] = 0 << T | n2, i2[a2] = a2;
    for (let e4 = 0; e4 < a2; e4++) {
      let t3 = i2[e4];
      if (t3 <= e4) {
        let n3 = i2[t3];
        n3 !== e4 && (i2[e4] = n3);
      } else t3 > a2 && (i2[e4] = a2);
    }
    this.source = e3, this.firstCharOffset = o2 === -1 ? 0 : o2, this.tokenCount = a2, this.offsetAndType = r2, this.balance = i2, this.reset(), this.next();
  }
  lookupType(e3) {
    return e3 += this.tokenIndex, e3 < this.tokenCount ? this.offsetAndType[e3] >> T : 0;
  }
  lookupTypeNonSC(e3) {
    for (let t2 = this.tokenIndex; t2 < this.tokenCount; t2++) {
      let n2 = this.offsetAndType[t2] >> T;
      if (n2 !== 13 && n2 !== 25 && e3-- === 0) return n2;
    }
    return 0;
  }
  lookupOffset(e3) {
    return e3 += this.tokenIndex, e3 < this.tokenCount ? this.offsetAndType[e3 - 1] & w : this.source.length;
  }
  lookupOffsetNonSC(e3) {
    for (let t2 = this.tokenIndex; t2 < this.tokenCount; t2++) {
      let n2 = this.offsetAndType[t2] >> T;
      if (n2 !== 13 && n2 !== 25 && e3-- === 0) return t2 - this.tokenIndex;
    }
    return 0;
  }
  lookupValue(e3, t2) {
    return e3 += this.tokenIndex, e3 < this.tokenCount ? te(this.source, this.offsetAndType[e3 - 1] & w, this.offsetAndType[e3] & w, t2) : false;
  }
  getTokenStart(e3) {
    return e3 === this.tokenIndex ? this.tokenStart : e3 > 0 ? e3 < this.tokenCount ? this.offsetAndType[e3 - 1] & w : this.offsetAndType[this.tokenCount] & w : this.firstCharOffset;
  }
  getTokenEnd(e3) {
    return e3 === this.tokenIndex ? this.tokenEnd : this.offsetAndType[ye(e3, 0, this.tokenCount)] & w;
  }
  getTokenType(e3) {
    return e3 === this.tokenIndex ? this.tokenType : this.offsetAndType[ye(e3, 0, this.tokenCount)] >> T;
  }
  substrToCursor(e3) {
    return this.source.substring(e3, this.tokenStart);
  }
  isBlockOpenerTokenType(e3) {
    return D[e3] === _e;
  }
  isBlockCloserTokenType(e3) {
    return D[e3] === ve;
  }
  getBlockTokenPairIndex(e3) {
    let t2 = this.getTokenType(e3);
    if (D[t2] === 1) {
      let n2 = this.balance[e3], r2 = this.getTokenType(n2);
      return E[t2] === r2 ? n2 : -1;
    } else if (D[t2] === 2) {
      let n2 = this.balance[e3];
      return E[this.getTokenType(n2)] === t2 ? n2 : -1;
    }
    return -1;
  }
  isBalanceEdge(e3) {
    return this.balance[this.tokenIndex] < e3;
  }
  isDelim(e3, t2) {
    return t2 ? this.lookupType(t2) === 9 && this.source.charCodeAt(this.lookupOffset(t2)) === e3 : this.tokenType === 9 && this.source.charCodeAt(this.tokenStart) === e3;
  }
  skip(e3) {
    let t2 = this.tokenIndex + e3;
    t2 < this.tokenCount ? (this.tokenIndex = t2, this.tokenStart = this.offsetAndType[t2 - 1] & w, t2 = this.offsetAndType[t2], this.tokenType = t2 >> T, this.tokenEnd = t2 & w) : (this.tokenIndex = this.tokenCount, this.next());
  }
  next() {
    let e3 = this.tokenIndex + 1;
    e3 < this.tokenCount ? (this.tokenIndex = e3, this.tokenStart = this.tokenEnd, e3 = this.offsetAndType[e3], this.tokenType = e3 >> T, this.tokenEnd = e3 & w) : (this.eof = true, this.tokenIndex = this.tokenCount, this.tokenType = 0, this.tokenStart = this.tokenEnd = this.source.length);
  }
  skipSC() {
    for (; this.tokenType === 13 || this.tokenType === 25; ) this.next();
  }
  skipUntilBalanced(e3, t2) {
    let n2 = e3, r2 = 0, i2 = 0;
    loop: for (; n2 < this.tokenCount; n2++) {
      if (r2 = this.balance[n2], r2 < e3) break loop;
      switch (i2 = n2 > 0 ? this.offsetAndType[n2 - 1] & w : this.firstCharOffset, t2(this.source.charCodeAt(i2))) {
        case 1:
          break loop;
        case 2:
          n2++;
          break loop;
        default:
          this.isBlockOpenerTokenType(this.offsetAndType[n2] >> T) && (n2 = r2);
      }
    }
    this.skip(n2 - this.tokenIndex);
  }
  forEachToken(e3) {
    for (let t2 = 0, n2 = this.firstCharOffset; t2 < this.tokenCount; t2++) {
      let r2 = n2, i2 = this.offsetAndType[t2], a2 = i2 & w, o2 = i2 >> T;
      n2 = a2, e3(o2, r2, a2, t2);
    }
  }
  dump() {
    let e3 = Array(this.tokenCount);
    return this.forEachToken((t2, n2, r2, i2) => {
      e3[i2] = { idx: i2, type: le[t2], chunk: this.source.substring(n2, r2), balance: this.balance[i2] };
    }), e3;
  }
};
function xe(e3, t2) {
  function n2(t3) {
    return t3 < s2 ? e3.charCodeAt(t3) : 0;
  }
  function r2() {
    if (l2 = oe(e3, l2), g(n2(l2), n2(l2 + 1), n2(l2 + 2))) {
      u2 = 12, l2 = ae(e3, l2);
      return;
    }
    if (n2(l2) === 37) {
      u2 = 11, l2++;
      return;
    }
    u2 = 10;
  }
  function i2() {
    let t3 = l2;
    if (l2 = ae(e3, l2), te(e3, t3, l2, `url`) && n2(l2) === 40) {
      if (l2 = re(e3, l2 + 1), n2(l2) === 34 || n2(l2) === 39) {
        u2 = 2, l2 = t3 + 4;
        return;
      }
      o2();
      return;
    }
    if (n2(l2) === 40) {
      u2 = 2, l2++;
      return;
    }
    u2 = 1;
  }
  function a2(t3) {
    for (t3 || (t3 = n2(l2++)), u2 = 5; l2 < e3.length; l2++) {
      let r3 = e3.charCodeAt(l2);
      switch (b(r3)) {
        case t3:
          l2++;
          return;
        case 130:
          if (p(r3)) {
            l2 += ee(e3, l2, r3), u2 = 6;
            return;
          }
          break;
        case 92:
          if (l2 === e3.length - 1) break;
          let i3 = n2(l2 + 1);
          p(i3) ? l2 += ee(e3, l2 + 1, i3) : h(r3, i3) && (l2 = C(e3, l2) - 1);
          break;
      }
    }
  }
  function o2() {
    for (u2 = 7, l2 = re(e3, l2); l2 < e3.length; l2++) {
      let t3 = e3.charCodeAt(l2);
      switch (b(t3)) {
        case 41:
          l2++;
          return;
        case 130:
          if (l2 = re(e3, l2), n2(l2) === 41 || l2 >= e3.length) {
            l2 < e3.length && l2++;
            return;
          }
          l2 = se(e3, l2), u2 = 8;
          return;
        case 34:
        case 39:
        case 40:
        case 133:
          l2 = se(e3, l2), u2 = 8;
          return;
        case 92:
          if (h(t3, n2(l2 + 1))) {
            l2 = C(e3, l2) - 1;
            break;
          }
          l2 = se(e3, l2), u2 = 8;
          return;
      }
    }
  }
  e3 = String(e3 || ``);
  let s2 = e3.length, c2 = v(n2(0)), l2 = c2, u2;
  for (; l2 < s2; ) {
    let o3 = e3.charCodeAt(l2);
    switch (b(o3)) {
      case 130:
        u2 = 13, l2 = re(e3, l2 + 1);
        break;
      case 34:
        a2();
        break;
      case 35:
        d(n2(l2 + 1)) || h(n2(l2 + 1), n2(l2 + 2)) ? (u2 = 4, l2 = ae(e3, l2 + 1)) : (u2 = 9, l2++);
        break;
      case 39:
        a2();
        break;
      case 40:
        u2 = 21, l2++;
        break;
      case 41:
        u2 = 22, l2++;
        break;
      case 43:
        _(o3, n2(l2 + 1), n2(l2 + 2)) ? r2() : (u2 = 9, l2++);
        break;
      case 44:
        u2 = 18, l2++;
        break;
      case 45:
        _(o3, n2(l2 + 1), n2(l2 + 2)) ? r2() : n2(l2 + 1) === 45 && n2(l2 + 2) === 62 ? (u2 = 15, l2 += 3) : g(o3, n2(l2 + 1), n2(l2 + 2)) ? i2() : (u2 = 9, l2++);
        break;
      case 46:
        _(o3, n2(l2 + 1), n2(l2 + 2)) ? r2() : (u2 = 9, l2++);
        break;
      case 47:
        n2(l2 + 1) === 42 ? (u2 = 25, l2 = e3.indexOf(`*/`, l2 + 2), l2 = l2 === -1 ? e3.length : l2 + 2) : (u2 = 9, l2++);
        break;
      case 58:
        u2 = 16, l2++;
        break;
      case 59:
        u2 = 17, l2++;
        break;
      case 60:
        n2(l2 + 1) === 33 && n2(l2 + 2) === 45 && n2(l2 + 3) === 45 ? (u2 = 14, l2 += 4) : (u2 = 9, l2++);
        break;
      case 64:
        g(n2(l2 + 1), n2(l2 + 2), n2(l2 + 3)) ? (u2 = 3, l2 = ae(e3, l2 + 1)) : (u2 = 9, l2++);
        break;
      case 91:
        u2 = 19, l2++;
        break;
      case 92:
        h(o3, n2(l2 + 1)) ? i2() : (u2 = 9, l2++);
        break;
      case 93:
        u2 = 20, l2++;
        break;
      case 123:
        u2 = 23, l2++;
        break;
      case 125:
        u2 = 24, l2++;
        break;
      case 131:
        r2();
        break;
      case 132:
        i2();
        break;
      default:
        u2 = 9, l2++;
    }
    t2(u2, c2, c2 = l2);
  }
}
var O = null, k = class e2 {
  static createItem(e3) {
    return { prev: null, next: null, data: e3 };
  }
  constructor() {
    this.head = null, this.tail = null, this.cursor = null;
  }
  createItem(t2) {
    return e2.createItem(t2);
  }
  allocateCursor(e3, t2) {
    let n2;
    return O === null ? n2 = { prev: e3, next: t2, cursor: this.cursor } : (n2 = O, O = O.cursor, n2.prev = e3, n2.next = t2, n2.cursor = this.cursor), this.cursor = n2, n2;
  }
  releaseCursor() {
    let { cursor: e3 } = this;
    this.cursor = e3.cursor, e3.prev = null, e3.next = null, e3.cursor = O, O = e3;
  }
  updateCursors(e3, t2, n2, r2) {
    let { cursor: i2 } = this;
    for (; i2 !== null; ) i2.prev === e3 && (i2.prev = t2), i2.next === n2 && (i2.next = r2), i2 = i2.cursor;
  }
  *[Symbol.iterator]() {
    for (let e3 = this.head; e3 !== null; e3 = e3.next) yield e3.data;
  }
  get size() {
    let e3 = 0;
    for (let t2 = this.head; t2 !== null; t2 = t2.next) e3++;
    return e3;
  }
  get isEmpty() {
    return this.head === null;
  }
  get first() {
    return this.head && this.head.data;
  }
  get last() {
    return this.tail && this.tail.data;
  }
  fromArray(t2) {
    let n2 = null;
    this.head = null;
    for (let r2 of t2) {
      let t3 = e2.createItem(r2);
      n2 === null ? this.head = t3 : n2.next = t3, t3.prev = n2, n2 = t3;
    }
    return this.tail = n2, this;
  }
  toArray() {
    return [...this];
  }
  toJSON() {
    return [...this];
  }
  forEach(e3, t2 = this) {
    let n2 = this.allocateCursor(null, this.head);
    for (; n2.next !== null; ) {
      let r2 = n2.next;
      n2.next = r2.next, e3.call(t2, r2.data, r2, this);
    }
    this.releaseCursor();
  }
  forEachRight(e3, t2 = this) {
    let n2 = this.allocateCursor(this.tail, null);
    for (; n2.prev !== null; ) {
      let r2 = n2.prev;
      n2.prev = r2.prev, e3.call(t2, r2.data, r2, this);
    }
    this.releaseCursor();
  }
  reduce(e3, t2, n2 = this) {
    let r2 = this.allocateCursor(null, this.head), i2 = t2, a2;
    for (; r2.next !== null; ) a2 = r2.next, r2.next = a2.next, i2 = e3.call(n2, i2, a2.data, a2, this);
    return this.releaseCursor(), i2;
  }
  reduceRight(e3, t2, n2 = this) {
    let r2 = this.allocateCursor(this.tail, null), i2 = t2, a2;
    for (; r2.prev !== null; ) a2 = r2.prev, r2.prev = a2.prev, i2 = e3.call(n2, i2, a2.data, a2, this);
    return this.releaseCursor(), i2;
  }
  some(e3, t2 = this) {
    for (let n2 = this.head; n2 !== null; n2 = n2.next) if (e3.call(t2, n2.data, n2, this)) return true;
    return false;
  }
  map(t2, n2 = this) {
    let r2 = new e2();
    for (let e3 = this.head; e3 !== null; e3 = e3.next) r2.appendData(t2.call(n2, e3.data, e3, this));
    return r2;
  }
  filter(t2, n2 = this) {
    let r2 = new e2();
    for (let e3 = this.head; e3 !== null; e3 = e3.next) t2.call(n2, e3.data, e3, this) && r2.appendData(e3.data);
    return r2;
  }
  nextUntil(e3, t2, n2 = this) {
    if (e3 === null) return;
    let r2 = this.allocateCursor(null, e3);
    for (; r2.next !== null; ) {
      let e4 = r2.next;
      if (r2.next = e4.next, t2.call(n2, e4.data, e4, this)) break;
    }
    this.releaseCursor();
  }
  prevUntil(e3, t2, n2 = this) {
    if (e3 === null) return;
    let r2 = this.allocateCursor(e3, null);
    for (; r2.prev !== null; ) {
      let e4 = r2.prev;
      if (r2.prev = e4.prev, t2.call(n2, e4.data, e4, this)) break;
    }
    this.releaseCursor();
  }
  clear() {
    this.head = null, this.tail = null;
  }
  copy() {
    let t2 = new e2();
    for (let e3 of this) t2.appendData(e3);
    return t2;
  }
  prepend(e3) {
    return this.updateCursors(null, e3, this.head, e3), this.head === null ? this.tail = e3 : (this.head.prev = e3, e3.next = this.head), this.head = e3, this;
  }
  prependData(t2) {
    return this.prepend(e2.createItem(t2));
  }
  append(e3) {
    return this.insert(e3);
  }
  appendData(t2) {
    return this.insert(e2.createItem(t2));
  }
  insert(e3, t2 = null) {
    if (t2 !== null) if (this.updateCursors(t2.prev, e3, t2, e3), t2.prev === null) {
      if (this.head !== t2) throw Error(`before doesn't belong to list`);
      this.head = e3, t2.prev = e3, e3.next = t2, this.updateCursors(null, e3);
    } else t2.prev.next = e3, e3.prev = t2.prev, t2.prev = e3, e3.next = t2;
    else this.updateCursors(this.tail, e3, null, e3), this.tail === null ? this.head = e3 : (this.tail.next = e3, e3.prev = this.tail), this.tail = e3;
    return this;
  }
  insertData(t2, n2) {
    return this.insert(e2.createItem(t2), n2);
  }
  remove(e3) {
    if (this.updateCursors(e3, e3.prev, e3, e3.next), e3.prev !== null) e3.prev.next = e3.next;
    else {
      if (this.head !== e3) throw Error(`item doesn't belong to list`);
      this.head = e3.next;
    }
    if (e3.next !== null) e3.next.prev = e3.prev;
    else {
      if (this.tail !== e3) throw Error(`item doesn't belong to list`);
      this.tail = e3.prev;
    }
    return e3.prev = null, e3.next = null, e3;
  }
  push(t2) {
    this.insert(e2.createItem(t2));
  }
  pop() {
    return this.tail === null ? null : this.remove(this.tail);
  }
  unshift(t2) {
    this.prepend(e2.createItem(t2));
  }
  shift() {
    return this.head === null ? null : this.remove(this.head);
  }
  prependList(e3) {
    return this.insertList(e3, this.head);
  }
  appendList(e3) {
    return this.insertList(e3);
  }
  insertList(e3, t2) {
    return e3.head === null ? this : (t2 == null ? (this.updateCursors(this.tail, e3.tail, null, e3.head), this.tail === null ? this.head = e3.head : (this.tail.next = e3.head, e3.head.prev = this.tail), this.tail = e3.tail) : (this.updateCursors(t2.prev, e3.tail, t2, e3.head), t2.prev === null ? this.head = e3.head : (t2.prev.next = e3.head, e3.head.prev = t2.prev), t2.prev = e3.tail, e3.tail.next = t2), e3.head = null, e3.tail = null, this);
  }
  replace(e3, t2) {
    `head` in t2 ? this.insertList(t2, e3) : this.insert(t2, e3), this.remove(e3);
  }
};
function Se(e3, t2) {
  let n2 = Object.create(SyntaxError.prototype), r2 = Error();
  return Object.assign(n2, { name: e3, message: t2, get stack() {
    return (r2.stack || ``).replace(/^(.+\n){1,3}/, `${e3}: ${t2}
`);
  } });
}
var Ce = 100, we = 60, Te = `    `;
function Ee({ source: e3, line: t2, column: n2, baseLine: r2, baseColumn: i2 }, a2) {
  function o2(e4, t3) {
    return s2.slice(e4, t3).map((t4, n3) => String(e4 + n3 + 1).padStart(u2) + ` |` + t4).join(`
`);
  }
  let s2 = (`
`.repeat(Math.max(r2 - 1, 0)) + ` `.repeat(Math.max(i2 - 1, 0)) + e3).split(/\r\n?|\n|\f/), c2 = Math.max(1, t2 - a2) - 1, l2 = Math.min(t2 + a2, s2.length + 1), u2 = Math.max(4, String(l2).length) + 1, d2 = 0;
  n2 += 3 * (s2[t2 - 1].substr(0, n2 - 1).match(/\t/g) || []).length, n2 > Ce && (d2 = n2 - we + 3, n2 = we - 2);
  for (let e4 = c2; e4 <= l2; e4++) e4 >= 0 && e4 < s2.length && (s2[e4] = s2[e4].replace(/\t/g, Te), s2[e4] = (d2 > 0 && s2[e4].length > d2 ? `\u2026` : ``) + s2[e4].substr(d2, Ce - 2) + (s2[e4].length > d2 + Ce - 1 ? `\u2026` : ``));
  return [o2(c2, t2), Array(n2 + u2 + 2).join(`-`) + `^`, o2(t2, l2)].filter(Boolean).join(`
`).replace(/^(\s+\d+\s+\|\n)+/, ``).replace(/\n(\s+\d+\s+\|)+$/, ``);
}
function De(e3, t2, n2, r2, i2, a2 = 1, o2 = 1) {
  return Object.assign(Se(`SyntaxError`, e3), { source: t2, offset: n2, line: r2, column: i2, sourceFragment(e4) {
    return Ee({ source: t2, line: r2, column: i2, baseLine: a2, baseColumn: o2 }, isNaN(e4) ? 0 : e4);
  }, get formattedMessage() {
    return `Parse error: ${e3}
` + Ee({ source: t2, line: r2, column: i2, baseLine: a2, baseColumn: o2 }, 2);
  } });
}
function Oe(e3) {
  let t2 = this.createList(), n2 = false, r2 = { recognizer: e3 };
  for (; !this.eof; ) {
    switch (this.tokenType) {
      case 25:
        this.next();
        continue;
      case 13:
        n2 = true, this.next();
        continue;
    }
    let i2 = e3.getNode.call(this, r2);
    if (i2 === void 0) break;
    n2 && (n2 = (e3.onWhiteSpace && e3.onWhiteSpace.call(this, i2, t2, r2), false)), t2.push(i2);
  }
  return n2 && e3.onWhiteSpace && e3.onWhiteSpace.call(this, null, t2, r2), t2;
}
var A = () => {
}, ke = 33, Ae = 35, je = 59, Me = 123, Ne = 0, Pe = { createList() {
  return [];
}, createSingleNodeList(e3) {
  return [e3];
}, getFirstListNode(e3) {
  return e3 && e3[0] || null;
}, getLastListNode(e3) {
  return e3 && e3.length > 0 ? e3[e3.length - 1] : null;
} }, Fe = { createList() {
  return new k();
}, createSingleNodeList(e3) {
  return new k().appendData(e3);
}, getFirstListNode(e3) {
  return e3 && e3.first;
}, getLastListNode(e3) {
  return e3 && e3.last;
} };
function Ie(e3) {
  return function() {
    return this[e3]();
  };
}
function Le(e3) {
  let t2 = /* @__PURE__ */ Object.create(null);
  for (let n2 of Object.keys(e3)) {
    let r2 = e3[n2], i2 = r2.parse || r2;
    i2 && (t2[n2] = i2);
  }
  return t2;
}
function Re(e3) {
  let t2 = { context: /* @__PURE__ */ Object.create(null), features: Object.assign(/* @__PURE__ */ Object.create(null), e3.features), scope: Object.assign(/* @__PURE__ */ Object.create(null), e3.scope), atrule: Le(e3.atrule), pseudo: Le(e3.pseudo), node: Le(e3.node) };
  for (let [n2, r2] of Object.entries(e3.parseContext)) switch (typeof r2) {
    case `function`:
      t2.context[n2] = r2;
      break;
    case `string`:
      t2.context[n2] = Ie(r2);
      break;
  }
  return { config: t2, ...t2, ...t2.node };
}
function ze(e3) {
  let t2 = ``, n2 = `<unknown>`, r2 = false, i2 = A, a2 = false, o2 = new ge(), s2 = Object.assign(new be(), Re(e3 || {}), { parseAtrulePrelude: true, parseRulePrelude: true, parseValue: true, parseCustomProperty: false, readSequence: Oe, consumeUntilBalanceEnd: () => 0, consumeUntilLeftCurlyBracket(e4) {
    return e4 === Me ? 1 : 0;
  }, consumeUntilLeftCurlyBracketOrSemicolon(e4) {
    return e4 === Me || e4 === je ? 1 : 0;
  }, consumeUntilExclamationMarkOrSemicolon(e4) {
    return e4 === ke || e4 === je ? 1 : 0;
  }, consumeUntilSemicolonIncluded(e4) {
    return e4 === je ? 2 : 0;
  }, createList: A, createSingleNodeList: A, getFirstListNode: A, getLastListNode: A, parseWithFallback(e4, t3) {
    let n3 = this.tokenIndex;
    try {
      return e4.call(this);
    } catch (e5) {
      if (a2) throw e5;
      this.skip(n3 - this.tokenIndex);
      let r3 = t3.call(this);
      return a2 = true, i2(e5, r3), a2 = false, r3;
    }
  }, lookupNonWSType(e4) {
    let t3;
    do
      if (t3 = this.lookupType(e4++), t3 !== 13 && t3 !== 25) return t3;
    while (t3 !== Ne);
    return Ne;
  }, charCodeAt(e4) {
    return e4 >= 0 && e4 < t2.length ? t2.charCodeAt(e4) : 0;
  }, substring(e4, n3) {
    return t2.substring(e4, n3);
  }, substrToCursor(e4) {
    return this.source.substring(e4, this.tokenStart);
  }, cmpChar(e4, n3) {
    return S(t2, e4, n3);
  }, cmpStr(e4, n3, r3) {
    return te(t2, e4, n3, r3);
  }, consume(e4) {
    let t3 = this.tokenStart;
    return this.eat(e4), this.substrToCursor(t3);
  }, consumeFunctionName() {
    let e4 = t2.substring(this.tokenStart, this.tokenEnd - 1);
    return this.eat(2), e4;
  }, consumeNumber(e4) {
    let n3 = t2.substring(this.tokenStart, oe(t2, this.tokenStart));
    return this.eat(e4), n3;
  }, eat(e4) {
    if (this.tokenType !== e4) {
      let t3 = le[e4].slice(0, -6).replace(/-/g, ` `).replace(/^./, (e5) => e5.toUpperCase()), n3 = `${/[[\](){}]/.test(t3) ? `"${t3}"` : t3} is expected`, r3 = this.tokenStart;
      switch (e4) {
        case 1:
          this.tokenType === 2 || this.tokenType === 7 ? (r3 = this.tokenEnd - 1, n3 = `Identifier is expected but function found`) : n3 = `Identifier is expected`;
          break;
        case 4:
          this.isDelim(Ae) && (this.next(), r3++, n3 = `Name is expected`);
          break;
        case 11:
          this.tokenType === 10 && (r3 = this.tokenEnd, n3 = `Percent sign is expected`);
          break;
      }
      this.error(n3, r3);
    }
    this.next();
  }, eatIdent(e4) {
    (this.tokenType !== 1 || this.lookupValue(0, e4) === false) && this.error(`Identifier "${e4}" is expected`), this.next();
  }, eatDelim(e4) {
    this.isDelim(e4) || this.error(`Delim "${String.fromCharCode(e4)}" is expected`), this.next();
  }, getLocation(e4, t3) {
    return r2 ? o2.getLocationRange(e4, t3, n2) : null;
  }, getLocationFromList(e4) {
    if (r2) {
      let t3 = this.getFirstListNode(e4), r3 = this.getLastListNode(e4);
      return o2.getLocationRange(t3 === null ? this.tokenStart : t3.loc.start.offset - o2.startOffset, r3 === null ? this.tokenStart : r3.loc.end.offset - o2.startOffset, n2);
    }
    return null;
  }, error(e4, n3) {
    let r3 = n3 !== void 0 && n3 < t2.length ? o2.getLocation(n3) : this.eof ? o2.getLocation(ne(t2, t2.length - 1)) : o2.getLocation(this.tokenStart);
    throw new De(e4 || `Unexpected input`, t2, r3.offset, r3.line, r3.column, o2.startLine, o2.startColumn);
  } }), c2 = () => ({ filename: n2, source: t2, tokenCount: s2.tokenCount, getTokenType: (e4) => s2.getTokenType(e4), getTokenTypeName: (e4) => le[s2.getTokenType(e4)], getTokenStart: (e4) => s2.getTokenStart(e4), getTokenEnd: (e4) => s2.getTokenEnd(e4), getTokenValue: (e4) => s2.source.substring(s2.getTokenStart(e4), s2.getTokenEnd(e4)), substring: (e4, t3) => s2.source.substring(e4, t3), balance: s2.balance.subarray(0, s2.tokenCount + 1), isBlockOpenerTokenType: s2.isBlockOpenerTokenType, isBlockCloserTokenType: s2.isBlockCloserTokenType, getBlockTokenPairIndex: (e4) => s2.getBlockTokenPairIndex(e4), getLocation: (e4) => o2.getLocation(e4, n2), getRangeLocation: (e4, t3) => o2.getLocationRange(e4, t3, n2) });
  return Object.assign(function(e4, l2) {
    t2 = e4, l2 || (l2 = {}), s2.setSource(t2, xe), o2.setSource(t2, l2.offset, l2.line, l2.column), n2 = l2.filename || `<unknown>`, r2 = !!l2.positions, i2 = typeof l2.onParseError == `function` ? l2.onParseError : A, a2 = false, s2.parseAtrulePrelude = `parseAtrulePrelude` in l2 ? !!l2.parseAtrulePrelude : true, s2.parseRulePrelude = `parseRulePrelude` in l2 ? !!l2.parseRulePrelude : true, s2.parseValue = `parseValue` in l2 ? !!l2.parseValue : true, s2.parseCustomProperty = `parseCustomProperty` in l2 ? !!l2.parseCustomProperty : false;
    let { context: u2 = `default`, list: d2 = true, onComment: f2, onToken: p2 } = l2;
    if (!(u2 in s2.context)) throw Error("Unknown context `" + u2 + "`");
    Object.assign(s2, d2 ? Fe : Pe), Array.isArray(p2) ? s2.forEachToken((e5, t3, n3) => {
      p2.push({ type: e5, start: t3, end: n3 });
    }) : typeof p2 == `function` && s2.forEachToken(p2.bind(c2())), typeof f2 == `function` && s2.forEachToken((e5, n3, r3) => {
      if (e5 === 25) {
        let e6 = s2.getLocation(n3, r3);
        f2(te(t2, r3 - 2, r3, `*/`) ? t2.slice(n3 + 2, r3 - 2) : t2.slice(n3 + 2, r3), e6);
      }
    });
    let m2 = s2.context[u2].call(s2, l2);
    return s2.eof || s2.error(), m2;
  }, { SyntaxError: De, config: s2.config });
}
var Be = t(), Ve = /* @__PURE__ */ new Set([`Atrule`, `Selector`, `Declaration`]);
function He(e3) {
  let t2 = new Be.SourceMapGenerator(), n2 = { line: 1, column: 0 }, r2 = { line: 0, column: 0 }, i2 = { line: 1, column: 0 }, a2 = { generated: i2 }, o2 = 1, s2 = 0, c2 = false, l2 = e3.node;
  e3.node = function(e4) {
    if (e4.loc && e4.loc.start && Ve.has(e4.type)) {
      let l3 = e4.loc.start.line, u3 = e4.loc.start.column - 1;
      (r2.line !== l3 || r2.column !== u3) && (r2.line = l3, r2.column = u3, n2.line = o2, n2.column = s2, c2 && (c2 = false, (n2.line !== i2.line || n2.column !== i2.column) && t2.addMapping(a2)), c2 = true, t2.addMapping({ source: e4.loc.source, original: r2, generated: n2 }));
    }
    l2.call(this, e4), c2 && Ve.has(e4.type) && (i2.line = o2, i2.column = s2);
  };
  let u2 = e3.emit;
  e3.emit = function(e4, t3, n3) {
    for (let t4 = 0; t4 < e4.length; t4++) e4.charCodeAt(t4) === 10 ? (o2++, s2 = 0) : s2++;
    u2(e4, t3, n3);
  };
  let d2 = e3.result;
  return e3.result = function() {
    return c2 && t2.addMapping(a2), { css: d2(), map: t2 };
  }, e3;
}
var Ue = e({ safe: () => Ze, spec: () => Xe }), We = 43, Ge = 45, Ke = (e3, t2) => (e3 === 9 && (e3 = t2), typeof e3 == `string` && (e3 = Math.min(e3.charCodeAt(0), 128) << 6), e3 << 1), qe = [[1, 1], [1, 2], [1, 7], [1, 8], [1, `-`], [1, 10], [1, 11], [1, 12], [1, 15], [1, 21], [3, 1], [3, 2], [3, 7], [3, 8], [3, `-`], [3, 10], [3, 11], [3, 12], [3, 15], [4, 1], [4, 2], [4, 7], [4, 8], [4, `-`], [4, 10], [4, 11], [4, 12], [4, 15], [12, 1], [12, 2], [12, 7], [12, 8], [12, `-`], [12, 10], [12, 11], [12, 12], [12, 15], [`#`, 1], [`#`, 2], [`#`, 7], [`#`, 8], [`#`, `-`], [`#`, 10], [`#`, 11], [`#`, 12], [`#`, 15], [`-`, 1], [`-`, 2], [`-`, 7], [`-`, 8], [`-`, `-`], [`-`, 10], [`-`, 11], [`-`, 12], [`-`, 15], [10, 1], [10, 2], [10, 7], [10, 8], [10, 10], [10, 11], [10, 12], [10, `%`], [10, 15], [`@`, 1], [`@`, 2], [`@`, 7], [`@`, 8], [`@`, `-`], [`@`, 15], [`.`, 10], [`.`, 11], [`.`, 12], [`+`, 10], [`+`, 11], [`+`, 12], [`/`, `*`]], Je = qe.concat([[1, 4], [12, 4], [4, 4], [3, 21], [3, 5], [3, 16], [11, 11], [11, 12], [11, 2], [11, `-`], [22, 1], [22, 2], [22, 11], [22, 12], [22, 4], [22, `-`]]);
function Ye(e3) {
  let t2 = new Set(e3.map(([e4, t3]) => Ke(e4) << 16 | Ke(t3)));
  return function(e4, n2, r2) {
    let i2 = Ke(n2, r2), a2 = r2.charCodeAt(0);
    return i2 | (a2 === Ge && n2 !== 1 && n2 !== 2 && n2 !== 15 || a2 === We ? t2.has((e4 & 65534) << 16 | a2 << 7) : t2.has((e4 & 65534) << 16 | i2));
  };
}
var Xe = Ye(qe), Ze = Ye(Je), Qe = 92;
function $e(e3, t2) {
  if (typeof t2 == `function`) {
    let n2 = null;
    e3.children.forEach((e4) => {
      n2 !== null && t2.call(this, n2), this.node(e4), n2 = e4;
    });
    return;
  }
  e3.children.forEach(this.node, this);
}
function et(e3) {
  let t2 = /* @__PURE__ */ new Map();
  for (let [n2, r2] of Object.entries(e3.node)) typeof (r2.generate || r2) == `function` && t2.set(n2, r2.generate || r2);
  return function(e4, n2) {
    let r2 = ``, i2 = 0, a2 = { node(e5) {
      if (t2.has(e5.type)) t2.get(e5.type).call(o2, e5);
      else throw Error(`Unknown node type: ` + e5.type);
    }, tokenBefore: Ze, token(e5, t3, n3) {
      i2 = this.tokenBefore(i2, e5, t3), !n3 && i2 & 1 && this.emit(` `, 13, true), this.emit(t3, e5, false), e5 === 9 && t3.charCodeAt(0) === Qe && this.emit(`
`, 13, true);
    }, emit(e5) {
      r2 += e5;
    }, result() {
      return r2;
    } };
    n2 && (typeof n2.decorator == `function` && (a2 = n2.decorator(a2)), n2.sourceMap && (a2 = He(a2)), n2.mode in Ue && (a2.tokenBefore = Ue[n2.mode]));
    let o2 = { node: (e5) => a2.node(e5), children: $e, token: (e5, t3) => a2.token(e5, t3), tokenize: (e5) => xe(e5, (t3, n3, r3) => {
      a2.token(t3, e5.slice(n3, r3), n3 !== 0);
    }) };
    return a2.node(e4), a2.result();
  };
}
function tt(e3) {
  return { fromPlainObject(t2) {
    return e3(t2, { enter(e4) {
      e4.children && !(e4.children instanceof k) && (e4.children = new k().fromArray(e4.children));
    } }), t2;
  }, toPlainObject(t2) {
    return e3(t2, { leave(e4) {
      e4.children && e4.children instanceof k && (e4.children = e4.children.toArray());
    } }), t2;
  } };
}
var { hasOwnProperty: nt } = Object.prototype, rt = function() {
};
function it(e3) {
  return typeof e3 == `function` ? e3 : rt;
}
function at(e3, t2) {
  return function(n2, r2, i2) {
    n2.type === t2 && e3.call(this, n2, r2, i2);
  };
}
function ot(e3, t2) {
  let n2 = t2.structure, r2 = [];
  for (let e4 in n2) {
    if (nt.call(n2, e4) === false) continue;
    let t3 = n2[e4], i2 = { name: e4, type: false, nullable: false };
    Array.isArray(t3) || (t3 = [t3]);
    for (let e5 of t3) e5 === null ? i2.nullable = true : typeof e5 == `string` ? i2.type = `node` : Array.isArray(e5) && (i2.type = `list`);
    i2.type && r2.push(i2);
  }
  return r2.length ? { context: t2.walkContext, fields: r2 } : null;
}
function st(e3) {
  let t2 = {};
  for (let n2 in e3.node) if (nt.call(e3.node, n2)) {
    let r2 = e3.node[n2];
    if (!r2.structure) throw Error("Missed `structure` field in `" + n2 + "` node type definition");
    t2[n2] = ot(n2, r2);
  }
  return t2;
}
function ct(e3, t2) {
  let n2 = e3.fields.slice(), r2 = e3.context, i2 = typeof r2 == `string`;
  return t2 && n2.reverse(), function(e4, a2, o2, s2) {
    let c2;
    i2 && (c2 = a2[r2], a2[r2] = e4);
    for (let r3 of n2) {
      let n3 = e4[r3.name];
      if (!r3.nullable || n3) {
        if (r3.type === `list`) {
          if (t2 ? n3.reduceRight(s2, false) : n3.reduce(s2, false)) return true;
        } else if (o2(n3)) return true;
      }
    }
    i2 && (a2[r2] = c2);
  };
}
function lt({ StyleSheet: e3, Atrule: t2, Rule: n2, Block: r2, DeclarationList: i2 }) {
  return { Atrule: { StyleSheet: e3, Atrule: t2, Rule: n2, Block: r2 }, Rule: { StyleSheet: e3, Atrule: t2, Rule: n2, Block: r2 }, Declaration: { StyleSheet: e3, Atrule: t2, Rule: n2, Block: r2, DeclarationList: i2 } };
}
function ut(e3) {
  let t2 = st(e3), n2 = {}, r2 = {}, i2 = /* @__PURE__ */ Symbol(`break-walk`), a2 = /* @__PURE__ */ Symbol(`skip-node`);
  for (let e4 in t2) nt.call(t2, e4) && t2[e4] !== null && (n2[e4] = ct(t2[e4], false), r2[e4] = ct(t2[e4], true));
  let o2 = lt(n2), s2 = lt(r2), c2 = function(e4, c3) {
    function l2(e5, t3, n3) {
      let r3 = u2.call(m2, e5, t3, n3);
      return r3 === i2 ? true : r3 === a2 ? false : !!(f2.hasOwnProperty(e5.type) && f2[e5.type](e5, m2, l2, p2) || d2.call(m2, e5, t3, n3) === i2);
    }
    let u2 = rt, d2 = rt, f2 = n2, p2 = (e5, t3, n3, r3) => e5 || l2(t3, n3, r3), m2 = { break: i2, skip: a2, root: e4, stylesheet: null, atrule: null, atrulePrelude: null, rule: null, selector: null, block: null, declaration: null, function: null };
    if (typeof c3 == `function`) u2 = c3;
    else if (c3 && (u2 = it(c3.enter), d2 = it(c3.leave), c3.reverse && (f2 = r2), c3.visit)) {
      if (o2.hasOwnProperty(c3.visit)) f2 = c3.reverse ? s2[c3.visit] : o2[c3.visit];
      else if (!t2.hasOwnProperty(c3.visit)) throw Error("Bad value `" + c3.visit + "` for `visit` option (should be: " + Object.keys(t2).sort().join(`, `) + `)`);
      u2 = at(u2, c3.visit), d2 = at(d2, c3.visit);
    }
    if (u2 === rt && d2 === rt) throw Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
    l2(e4);
  };
  return c2.break = i2, c2.skip = a2, c2.find = function(e4, t3) {
    let n3 = null;
    return c2(e4, function(e5, r3, a3) {
      if (t3.call(this, e5, r3, a3)) return n3 = e5, i2;
    }), n3;
  }, c2.findLast = function(e4, t3) {
    let n3 = null;
    return c2(e4, { reverse: true, enter(e5, r3, a3) {
      if (t3.call(this, e5, r3, a3)) return n3 = e5, i2;
    } }), n3;
  }, c2.findAll = function(e4, t3) {
    let n3 = [];
    return c2(e4, function(e5, r3, i3) {
      t3.call(this, e5, r3, i3) && n3.push(e5);
    }), n3;
  }, c2;
}
function dt(e3) {
  return e3;
}
function ft(e3) {
  let { min: t2, max: n2, comma: r2 } = e3;
  return t2 === 0 && n2 === 0 ? r2 ? `#?` : `*` : t2 === 0 && n2 === 1 ? `?` : t2 === 1 && n2 === 0 ? r2 ? `#` : `+` : t2 === 1 && n2 === 1 ? `` : (r2 ? `#` : ``) + (t2 === n2 ? `{` + t2 + `}` : `{` + t2 + `,` + (n2 === 0 ? `` : n2) + `}`);
}
function pt(e3) {
  switch (e3.type) {
    case `Range`:
      return ` [` + (e3.min === null ? `-\u221E` : e3.min) + `,` + (e3.max === null ? `\u221E` : e3.max) + `]`;
    default:
      throw Error("Unknown node type `" + e3.type + "`");
  }
}
function mt(e3, t2, n2, r2) {
  let i2 = e3.combinator === ` ` || r2 ? e3.combinator : ` ` + e3.combinator + ` `, a2 = e3.terms.map((e4) => ht(e4, t2, n2, r2)).join(i2);
  return e3.explicit || n2 ? (r2 || a2[0] === `,` ? `[` : `[ `) + a2 + (r2 ? `]` : ` ]`) : a2;
}
function ht(e3, t2, n2, r2) {
  let i2;
  switch (e3.type) {
    case `Group`:
      i2 = mt(e3, t2, n2, r2) + (e3.disallowEmpty ? `!` : ``);
      break;
    case `Multiplier`:
      return ht(e3.term, t2, n2, r2) + t2(ft(e3), e3);
    case `Boolean`:
      i2 = `<boolean-expr[` + ht(e3.term, t2, n2, r2) + `]>`;
      break;
    case `Type`:
      i2 = `<` + e3.name + (e3.opts ? t2(pt(e3.opts), e3.opts) : ``) + `>`;
      break;
    case `Property`:
      i2 = `<'` + e3.name + `'>`;
      break;
    case `Keyword`:
      i2 = e3.name;
      break;
    case `AtKeyword`:
      i2 = `@` + e3.name;
      break;
    case `Function`:
      i2 = e3.name + `(`;
      break;
    case `String`:
    case `Token`:
      i2 = e3.value;
      break;
    case `Comma`:
      i2 = `,`;
      break;
    default:
      throw Error("Unknown node type `" + e3.type + "`");
  }
  return t2(i2, e3);
}
function gt(e3, t2) {
  let n2 = dt, r2 = false, i2 = false;
  return typeof t2 == `function` ? n2 = t2 : t2 && (r2 = !!t2.forceBraces, i2 = !!t2.compact, typeof t2.decorate == `function` && (n2 = t2.decorate)), ht(e3, n2, r2, i2);
}
var _t = { offset: 0, line: 1, column: 1 };
function vt(e3, t2) {
  let n2 = e3.tokens, r2 = e3.longestMatch, i2 = r2 < n2.length && n2[r2].node || null, a2 = i2 === t2 ? null : i2, o2 = 0, s2 = 0, c2 = 0, l2 = ``, u2, d2;
  for (let e4 = 0; e4 < n2.length; e4++) {
    let t3 = n2[e4].value;
    e4 === r2 && (s2 = t3.length, o2 = l2.length), a2 !== null && n2[e4].node === a2 && (e4 <= r2 ? c2++ : c2 = 0), l2 += t3;
  }
  return r2 === n2.length || c2 > 1 ? (u2 = yt(a2 || t2, `end`) || bt(_t, l2), d2 = bt(u2)) : (u2 = yt(a2, `start`) || bt(yt(t2, `start`) || _t, l2.slice(0, o2)), d2 = yt(a2, `end`) || bt(u2, l2.substr(o2, s2))), { css: l2, mismatchOffset: o2, mismatchLength: s2, start: u2, end: d2 };
}
function yt(e3, t2) {
  let n2 = e3 && e3.loc && e3.loc[t2];
  return n2 ? `line` in n2 ? bt(n2) : n2 : null;
}
function bt({ offset: e3, line: t2, column: n2 }, r2) {
  let i2 = { offset: e3, line: t2, column: n2 };
  if (r2) {
    let e4 = r2.split(/\n|\r\n?|\f/);
    i2.offset += r2.length, i2.line += e4.length - 1, i2.column = e4.length === 1 ? i2.column + r2.length : e4.pop().length + 1;
  }
  return i2;
}
var xt = function(e3, t2) {
  let n2 = Se(`SyntaxReferenceError`, e3 + (t2 ? " `" + t2 + "`" : ``));
  return n2.reference = t2, n2;
}, St = function(e3, t2, n2, r2) {
  let i2 = Se(`SyntaxMatchError`, e3), { css: a2, mismatchOffset: o2, mismatchLength: s2, start: c2, end: l2 } = vt(r2, n2);
  return i2.rawMessage = e3, i2.syntax = t2 ? gt(t2) : `<generic>`, i2.css = a2, i2.mismatchOffset = o2, i2.mismatchLength = s2, i2.message = e3 + `
  syntax: ` + i2.syntax + `
   value: ` + (a2 || `<empty string>`) + `
  --------` + Array(i2.mismatchOffset + 1).join(`-`) + `^`, Object.assign(i2, c2), i2.loc = { source: n2 && n2.loc && n2.loc.source || `<unknown>`, start: c2, end: l2 }, i2;
}, Ct = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), wt = 45, Tt = At, Et = jt, Dt = kt;
function Ot(e3, t2) {
  return t2 || (t2 = 0), e3.length - t2 >= 2 && e3.charCodeAt(t2) === wt && e3.charCodeAt(t2 + 1) === wt;
}
function kt(e3, t2) {
  if (t2 || (t2 = 0), e3.length - t2 >= 3 && e3.charCodeAt(t2) === wt && e3.charCodeAt(t2 + 1) !== wt) {
    let n2 = e3.indexOf(`-`, t2 + 2);
    if (n2 !== -1) return e3.substring(t2, n2 + 1);
  }
  return ``;
}
function At(e3) {
  if (Ct.has(e3)) return Ct.get(e3);
  let t2 = e3.toLowerCase(), n2 = Ct.get(t2);
  if (n2 === void 0) {
    let e4 = Ot(t2, 0), r2 = e4 ? `` : kt(t2, 0);
    n2 = Object.freeze({ basename: t2.substr(r2.length), name: t2, prefix: r2, vendor: r2, custom: e4 });
  }
  return Ct.set(e3, n2), n2;
}
function jt(e3) {
  if (j.has(e3)) return j.get(e3);
  let t2 = e3, n2 = e3[0];
  n2 === `/` ? n2 = e3[1] === `/` ? `//` : `/` : n2 !== `_` && n2 !== `*` && n2 !== `$` && n2 !== `#` && n2 !== `+` && n2 !== `&` && (n2 = ``);
  let r2 = Ot(t2, n2.length);
  if (!r2 && (t2 = t2.toLowerCase(), j.has(t2))) {
    let n3 = j.get(t2);
    return j.set(e3, n3), n3;
  }
  let i2 = r2 ? `` : kt(t2, n2.length), a2 = t2.substr(0, n2.length + i2.length), o2 = Object.freeze({ basename: t2.substr(a2.length), name: t2.substr(n2.length), hack: n2, vendor: i2, prefix: a2, custom: r2 });
  return j.set(e3, o2), o2;
}
var Mt = [`initial`, `inherit`, `unset`, `revert`, `revert-layer`], Nt = 43, M = 45, Pt = 110, N = true, Ft = false;
function It(e3, t2) {
  return e3 !== null && e3.type === 9 && e3.value.charCodeAt(0) === t2;
}
function Lt(e3, t2, n2) {
  for (; e3 !== null && (e3.type === 13 || e3.type === 25); ) e3 = n2(++t2);
  return t2;
}
function P(e3, t2, n2, r2) {
  if (!e3) return 0;
  let a2 = e3.value.charCodeAt(t2);
  if (a2 === Nt || a2 === M) {
    if (n2) return 0;
    t2++;
  }
  for (; t2 < e3.value.length; t2++) if (!i(e3.value.charCodeAt(t2))) return 0;
  return r2 + 1;
}
function Rt(e3, t2, n2) {
  let r2 = false, i2 = Lt(e3, t2, n2);
  if (e3 = n2(i2), e3 === null) return t2;
  if (e3.type !== 10) if (It(e3, Nt) || It(e3, M)) {
    if (r2 = true, i2 = Lt(n2(++i2), i2, n2), e3 = n2(i2), e3 === null || e3.type !== 10) return 0;
  } else return t2;
  if (!r2) {
    let t3 = e3.value.charCodeAt(0);
    if (t3 !== Nt && t3 !== M) return 0;
  }
  return P(e3, r2 ? 0 : 1, r2, i2);
}
function zt(e3, t2) {
  let n2 = 0;
  if (!e3) return 0;
  if (e3.type === 10) return P(e3, 0, Ft, n2);
  if (e3.type === 1 && e3.value.charCodeAt(0) === M) {
    if (!S(e3.value, 1, Pt)) return 0;
    switch (e3.value.length) {
      case 2:
        return Rt(t2(++n2), n2, t2);
      case 3:
        return e3.value.charCodeAt(2) === M ? (n2 = Lt(t2(++n2), n2, t2), e3 = t2(n2), P(e3, 0, N, n2)) : 0;
      default:
        return e3.value.charCodeAt(2) === M ? P(e3, 3, N, n2) : 0;
    }
  } else if (e3.type === 1 || It(e3, Nt) && t2(n2 + 1).type === 1) {
    if (e3.type !== 1 && (e3 = t2(++n2)), e3 === null || !S(e3.value, 0, Pt)) return 0;
    switch (e3.value.length) {
      case 1:
        return Rt(t2(++n2), n2, t2);
      case 2:
        return e3.value.charCodeAt(1) === M ? (n2 = Lt(t2(++n2), n2, t2), e3 = t2(n2), P(e3, 0, N, n2)) : 0;
      default:
        return e3.value.charCodeAt(1) === M ? P(e3, 2, N, n2) : 0;
    }
  } else if (e3.type === 12) {
    let r2 = e3.value.charCodeAt(0), a2 = r2 === Nt || r2 === M ? 1 : 0, o2 = a2;
    for (; o2 < e3.value.length && i(e3.value.charCodeAt(o2)); o2++) ;
    return o2 === a2 || !S(e3.value, o2, Pt) ? 0 : o2 + 1 === e3.value.length ? Rt(t2(++n2), n2, t2) : e3.value.charCodeAt(o2 + 1) === M ? o2 + 2 === e3.value.length ? (n2 = Lt(t2(++n2), n2, t2), e3 = t2(n2), P(e3, 0, N, n2)) : P(e3, o2 + 2, N, n2) : 0;
  }
  return 0;
}
var Bt = 43, Vt = 45, Ht = 63, Ut = 117;
function Wt(e3, t2) {
  return e3 !== null && e3.type === 9 && e3.value.charCodeAt(0) === t2;
}
function Gt(e3, t2) {
  return e3.value.charCodeAt(0) === t2;
}
function Kt(e3, t2, n2) {
  let r2 = 0;
  for (let i2 = t2; i2 < e3.value.length; i2++) {
    let o2 = e3.value.charCodeAt(i2);
    if (o2 === Vt && n2 && r2 !== 0) return Kt(e3, t2 + r2 + 1, false), 6;
    if (!a(o2) || ++r2 > 6) return 0;
  }
  return r2;
}
function qt(e3, t2, n2) {
  if (!e3) return 0;
  for (; Wt(n2(t2), Ht); ) {
    if (++e3 > 6) return 0;
    t2++;
  }
  return t2;
}
function Jt(e3, t2) {
  let n2 = 0;
  if (e3 === null || e3.type !== 1 || !S(e3.value, 0, Ut) || (e3 = t2(++n2), e3 === null)) return 0;
  if (Wt(e3, Bt)) return e3 = t2(++n2), e3 === null ? 0 : e3.type === 1 ? qt(Kt(e3, 0, true), ++n2, t2) : Wt(e3, Ht) ? qt(1, ++n2, t2) : 0;
  if (e3.type === 10) {
    let r2 = Kt(e3, 1, true);
    return r2 === 0 ? 0 : (e3 = t2(++n2), e3 === null ? n2 : e3.type === 12 || e3.type === 10 ? !Gt(e3, Vt) || !Kt(e3, 1, false) ? 0 : n2 + 1 : qt(r2, n2, t2));
  }
  return e3.type === 12 ? qt(Kt(e3, 1, true), ++n2, t2) : 0;
}
var Yt = [`calc(`, `-moz-calc(`, `-webkit-calc(`], Xt = [`min(`, `max(`, `clamp(`], Zt = [`round(`, `mod(`, `rem(`], Qt = [`sin(`, `cos(`, `tan(`], $t = [`asin(`, `acos(`, `atan(`, `atan2(`], en = [`pow(`, `sqrt(`, `log(`, `exp(`, `sign(`], tn = [`hypot(`], nn = [`abs(`], rn = [...Yt, ...Xt, ...Zt, ...Qt, ...en, ...tn, ...nn], an = [...Yt, ...Xt, ...Zt, ...tn, ...nn], F = [...Yt, ...Xt, ...Zt, ...$t, ...tn, ...nn], on = /* @__PURE__ */ new Map([[2, 22], [21, 22], [19, 20], [23, 24]]);
function I(e3, t2) {
  return t2 < e3.length ? e3.charCodeAt(t2) : 0;
}
function sn(e3, t2) {
  return te(e3, 0, e3.length, t2);
}
function cn(e3, t2) {
  for (let n2 = 0; n2 < t2.length; n2++) if (sn(e3, t2[n2])) return true;
  return false;
}
function ln(e3, t2) {
  return t2 === e3.length - 2 ? I(e3, t2) === 92 && i(I(e3, t2 + 1)) : false;
}
function un(e3, t2, n2) {
  if (e3 && e3.type === `Range`) {
    let r2 = Number(n2 !== void 0 && n2 !== t2.length ? t2.substr(0, n2) : t2);
    if (isNaN(r2) || e3.min !== null && r2 < e3.min && typeof e3.min != `string` || e3.max !== null && r2 > e3.max && typeof e3.max != `string`) return true;
  }
  return false;
}
function dn(e3, t2) {
  let n2 = 0, r2 = [], i2 = 0;
  scan: do {
    switch (e3.type) {
      case 24:
      case 22:
      case 20:
        if (e3.type !== n2) break scan;
        if (n2 = r2.pop(), r2.length === 0) {
          i2++;
          break scan;
        }
        break;
      case 2:
      case 21:
      case 19:
      case 23:
        r2.push(n2), n2 = on.get(e3.type);
        break;
    }
    i2++;
  } while (e3 = t2(i2));
  return i2;
}
function L(e3, t2) {
  return function(n2, r2, i2) {
    return n2 === null ? 0 : n2.type === 2 && cn(n2.value, t2) ? dn(n2, r2) : e3(n2, r2, i2);
  };
}
function R(e3) {
  return function(t2) {
    return t2 === null || t2.type !== e3 ? 0 : 1;
  };
}
function fn(e3) {
  if (e3 === null || e3.type !== 1) return 0;
  let t2 = e3.value.toLowerCase();
  return cn(t2, Mt) || sn(t2, `default`) ? 0 : 1;
}
function pn(e3) {
  return e3 === null || e3.type !== 1 || I(e3.value, 0) !== 45 || I(e3.value, 1) !== 45 ? 0 : 1;
}
function mn(e3) {
  return !pn(e3) || e3.value === `--` ? 0 : 1;
}
function hn(e3) {
  if (e3 === null || e3.type !== 4) return 0;
  let t2 = e3.value.length;
  if (t2 !== 4 && t2 !== 5 && t2 !== 7 && t2 !== 9) return 0;
  for (let n2 = 1; n2 < t2; n2++) if (!a(I(e3.value, n2))) return 0;
  return 1;
}
function gn(e3) {
  return e3 === null || e3.type !== 4 || !g(I(e3.value, 1), I(e3.value, 2), I(e3.value, 3)) ? 0 : 1;
}
function _n(e3, t2) {
  if (!e3) return 0;
  let n2 = 0, r2 = [], i2 = 0;
  scan: do {
    switch (e3.type) {
      case 6:
      case 8:
        break scan;
      case 24:
      case 22:
      case 20:
        if (e3.type !== n2) break scan;
        n2 = r2.pop();
        break;
      case 17:
        if (n2 === 0) break scan;
        break;
      case 9:
        if (n2 === 0 && e3.value === `!`) break scan;
        break;
      case 2:
      case 21:
      case 19:
      case 23:
        r2.push(n2), n2 = on.get(e3.type);
        break;
    }
    i2++;
  } while (e3 = t2(i2));
  return i2;
}
function vn(e3, t2) {
  if (!e3) return 0;
  let n2 = 0, r2 = [], i2 = 0;
  scan: do {
    switch (e3.type) {
      case 6:
      case 8:
        break scan;
      case 24:
      case 22:
      case 20:
        if (e3.type !== n2) break scan;
        n2 = r2.pop();
        break;
      case 2:
      case 21:
      case 19:
      case 23:
        r2.push(n2), n2 = on.get(e3.type);
        break;
    }
    i2++;
  } while (e3 = t2(i2));
  return i2;
}
function z(e3) {
  return e3 && (e3 = new Set(e3)), function(t2, n2, r2) {
    if (t2 === null || t2.type !== 12) return 0;
    let i2 = oe(t2.value, 0);
    if (e3 !== null) {
      let n3 = t2.value.indexOf(`\\`, i2), r3 = n3 === -1 || !ln(t2.value, n3) ? t2.value.substr(i2) : t2.value.substring(i2, n3);
      if (e3.has(r3.toLowerCase()) === false) return 0;
    }
    return un(r2, t2.value, i2) ? 0 : 1;
  };
}
function yn(e3, t2, n2) {
  return e3 === null || e3.type !== 11 || un(n2, e3.value, e3.value.length - 1) ? 0 : 1;
}
function bn(e3) {
  return typeof e3 != `function` && (e3 = function() {
    return 0;
  }), function(t2, n2, r2) {
    return t2 !== null && t2.type === 10 && Number(t2.value) === 0 ? 1 : e3(t2, n2, r2);
  };
}
function xn(e3, t2, n2) {
  if (e3 === null) return 0;
  let r2 = oe(e3.value, 0);
  return r2 !== e3.value.length && !ln(e3.value, r2) || un(n2, e3.value, r2) ? 0 : 1;
}
function Sn(e3, t2, n2) {
  if (e3 === null || e3.type !== 10) return 0;
  let r2 = I(e3.value, 0) === 43 || I(e3.value, 0) === 45 ? 1 : 0;
  for (; r2 < e3.value.length; r2++) if (!i(I(e3.value, r2))) return 0;
  return un(n2, e3.value, r2) ? 0 : 1;
}
var Cn = { "ident-token": R(1), "function-token": R(2), "at-keyword-token": R(3), "hash-token": R(4), "string-token": R(5), "bad-string-token": R(6), "url-token": R(7), "bad-url-token": R(8), "delim-token": R(9), "number-token": R(10), "percentage-token": R(11), "dimension-token": R(12), "whitespace-token": R(13), "CDO-token": R(14), "CDC-token": R(15), "colon-token": R(16), "semicolon-token": R(17), "comma-token": R(18), "[-token": R(19), "]-token": R(20), "(-token": R(21), ")-token": R(22), "{-token": R(23), "}-token": R(24) }, wn = { string: R(5), ident: R(1), percentage: L(yn, an), zero: bn(), number: L(xn, rn), integer: L(Sn, rn), "custom-ident": fn, "dashed-ident": pn, "custom-property-name": mn, "hex-color": hn, "id-selector": gn, "an-plus-b": zt, urange: Jt, "declaration-value": _n, "any-value": vn }, Tn = [`length`, `angle`, `time`, `frequency`, `resolution`, `flex`, `decibel`, `semitones`];
function En(e3) {
  let { angle: t2, decibel: n2, frequency: r2, flex: i2, length: a2, resolution: o2, semitones: s2, time: c2 } = e3 || {};
  return { dimension: L(z(null), F), angle: L(z(t2), F), decibel: L(z(n2), F), frequency: L(z(r2), F), flex: L(z(i2), F), length: L(bn(z(a2)), F), resolution: L(z(o2), F), semitones: L(z(s2), F), time: L(z(c2), F) };
}
function Dn(e3) {
  let t2 = /* @__PURE__ */ new Set();
  for (let n2 of Tn) if (Array.isArray(e3[n2])) for (let r2 of e3[n2]) t2.add(r2.toLowerCase());
  return function(e4) {
    return e4 === null ? 0 : e4.type === 9 && e4.value === `%` || e4.type === 1 && t2.has(e4.value.toLowerCase()) ? 1 : 0;
  };
}
function On(e3) {
  return { ...Cn, ...wn, ...En(e3), "attr-unit": Dn(e3) };
}
var kn = e({ angle: () => jn, decibel: () => In, flex: () => Fn, frequency: () => Nn, length: () => An, resolution: () => Pn, semitones: () => Ln, time: () => Mn }), An = `cm.mm.q.in.pt.pc.px.em.rem.ex.rex.cap.rcap.ch.rch.ic.ric.lh.rlh.vw.svw.lvw.dvw.vh.svh.lvh.dvh.vi.svi.lvi.dvi.vb.svb.lvb.dvb.vmin.svmin.lvmin.dvmin.vmax.svmax.lvmax.dvmax.cqw.cqh.cqi.cqb.cqmin.cqmax`.split(`.`), jn = [`deg`, `grad`, `rad`, `turn`], Mn = [`s`, `ms`], Nn = [`hz`, `khz`], Pn = [`dpi`, `dpcm`, `dppx`, `x`], Fn = [`fr`], In = [`db`], Ln = [`st`];
function Rn(e3, t2, n2) {
  return Object.assign(Se(`SyntaxError`, e3), { input: t2, offset: n2, rawMessage: e3, message: e3 + `
  ` + t2 + `
--` + Array((n2 || t2.length) + 1).join(`-`) + `^` });
}
var zn = 9, Bn = 10, Vn = 12, Hn = 13, Un = 32, Wn = new Uint8Array(128).map((e3, t2) => /[a-zA-Z0-9\-]/.test(String.fromCharCode(t2)) ? 1 : 0), Gn = class {
  constructor(e3) {
    this.str = e3, this.pos = 0;
  }
  charCodeAt(e3) {
    return e3 < this.str.length ? this.str.charCodeAt(e3) : 0;
  }
  charCode() {
    return this.charCodeAt(this.pos);
  }
  isNameCharCode(e3 = this.charCode()) {
    return e3 < 128 && Wn[e3] === 1;
  }
  nextCharCode() {
    return this.charCodeAt(this.pos + 1);
  }
  nextNonWsCode(e3) {
    return this.charCodeAt(this.findWsEnd(e3));
  }
  skipWs() {
    this.pos = this.findWsEnd(this.pos);
  }
  findWsEnd(e3) {
    for (; e3 < this.str.length; e3++) {
      let t2 = this.str.charCodeAt(e3);
      if (t2 !== Hn && t2 !== Bn && t2 !== Vn && t2 !== Un && t2 !== zn) break;
    }
    return e3;
  }
  substringToPos(e3) {
    return this.str.substring(this.pos, this.pos = e3);
  }
  eat(e3) {
    this.charCode() !== e3 && this.error("Expect `" + String.fromCharCode(e3) + "`"), this.pos++;
  }
  peek() {
    return this.pos < this.str.length ? this.str.charAt(this.pos++) : ``;
  }
  error(e3) {
    throw new Rn(e3, this.str, this.pos);
  }
  scanSpaces() {
    return this.substringToPos(this.findWsEnd(this.pos));
  }
  scanWord() {
    let e3 = this.pos;
    for (; e3 < this.str.length; e3++) {
      let t2 = this.str.charCodeAt(e3);
      if (t2 >= 128 || Wn[t2] === 0) break;
    }
    return this.pos === e3 && this.error(`Expect a keyword`), this.substringToPos(e3);
  }
  scanNumber() {
    let e3 = this.pos;
    for (; e3 < this.str.length; e3++) {
      let t2 = this.str.charCodeAt(e3);
      if (t2 < 48 || t2 > 57) break;
    }
    return this.pos === e3 && this.error(`Expect a number`), this.substringToPos(e3);
  }
  scanString() {
    let e3 = this.str.indexOf(`'`, this.pos + 1);
    return e3 === -1 && (this.pos = this.str.length, this.error(`Expect an apostrophe`)), this.substringToPos(e3 + 1);
  }
}, Kn = 9, qn = 10, Jn = 12, Yn = 13, Xn = 32, Zn = 33, Qn = 35, $n = 38, er = 39, tr = 40, nr = 41, rr = 42, ir = 43, ar = 44, or = 45, sr = 60, cr = 62, lr = 63, ur = 64, dr = 91, B = 93, fr = 123, pr = 124, mr = 125, hr = 8734, gr = { " ": 1, "&&": 2, "||": 3, "|": 4 };
function _r(e3) {
  let t2 = null, n2 = null;
  return e3.eat(fr), e3.skipWs(), t2 = e3.scanNumber(e3), e3.skipWs(), e3.charCode() === ar ? (e3.pos++, e3.skipWs(), e3.charCode() !== mr && (n2 = e3.scanNumber(e3), e3.skipWs())) : n2 = t2, e3.eat(mr), { min: Number(t2), max: n2 ? Number(n2) : 0 };
}
function vr(e3) {
  let t2 = null, n2 = false;
  switch (e3.charCode()) {
    case rr:
      e3.pos++, t2 = { min: 0, max: 0 };
      break;
    case ir:
      e3.pos++, t2 = { min: 1, max: 0 };
      break;
    case lr:
      e3.pos++, t2 = { min: 0, max: 1 };
      break;
    case Qn:
      e3.pos++, n2 = true, e3.charCode() === fr ? t2 = _r(e3) : e3.charCode() === lr ? (e3.pos++, t2 = { min: 0, max: 0 }) : t2 = { min: 1, max: 0 };
      break;
    case fr:
      t2 = _r(e3);
      break;
    default:
      return null;
  }
  return { type: `Multiplier`, comma: n2, min: t2.min, max: t2.max, term: null };
}
function V(e3, t2) {
  let n2 = vr(e3);
  return n2 === null ? t2 : (n2.term = t2, e3.charCode() === Qn && e3.charCodeAt(e3.pos - 1) === ir || e3.charCode() === lr && e3.charCodeAt(e3.pos - 1) === mr ? V(e3, n2) : n2);
}
function yr(e3) {
  let t2 = e3.peek();
  return t2 === `` ? null : V(e3, { type: `Token`, value: t2 });
}
function br(e3) {
  let t2;
  return e3.eat(sr), e3.eat(er), t2 = e3.scanWord(), e3.eat(er), e3.eat(cr), V(e3, { type: `Property`, name: t2 });
}
function xr(e3) {
  let t2 = null, n2 = null, r2 = 1;
  return e3.eat(dr), e3.charCode() === or && (e3.peek(), r2 = -1), r2 == -1 && e3.charCode() === hr ? e3.peek() : (t2 = r2 * Number(e3.scanNumber(e3)), e3.isNameCharCode() && (t2 += e3.scanWord())), e3.skipWs(), e3.eat(ar), e3.skipWs(), e3.charCode() === hr ? e3.peek() : (r2 = 1, e3.charCode() === or && (e3.peek(), r2 = -1), n2 = r2 * Number(e3.scanNumber(e3)), e3.isNameCharCode() && (n2 += e3.scanWord())), e3.eat(B), { type: `Range`, min: t2, max: n2 };
}
function Sr(e3) {
  let t2, n2 = null;
  if (e3.eat(sr), t2 = e3.scanWord(), t2 === `boolean-expr`) {
    e3.eat(dr);
    let t3 = Tr(e3, B);
    return e3.eat(B), e3.eat(cr), V(e3, { type: `Boolean`, term: t3.terms.length === 1 ? t3.terms[0] : t3 });
  }
  return e3.charCode() === tr && e3.nextCharCode() === nr && (e3.pos += 2, t2 += `()`), e3.charCodeAt(e3.findWsEnd(e3.pos)) === dr && (e3.skipWs(), n2 = xr(e3)), e3.eat(cr), V(e3, { type: `Type`, name: t2, opts: n2 });
}
function Cr(e3) {
  let t2 = e3.scanWord();
  return e3.charCode() === tr ? (e3.pos++, { type: `Function`, name: t2 }) : V(e3, { type: `Keyword`, name: t2 });
}
function wr(e3, t2) {
  function n2(e4, t3) {
    return { type: `Group`, terms: e4, combinator: t3, disallowEmpty: false, explicit: false };
  }
  let r2;
  for (t2 = Object.keys(t2).sort((e4, t3) => gr[e4] - gr[t3]); t2.length > 0; ) {
    r2 = t2.shift();
    let i2 = 0, a2 = 0;
    for (; i2 < e3.length; i2++) {
      let t3 = e3[i2];
      t3.type === `Combinator` && (t3.value === r2 ? (a2 === -1 && (a2 = i2 - 1), e3.splice(i2, 1), i2--) : (a2 !== -1 && i2 - a2 > 1 && (e3.splice(a2, i2 - a2, n2(e3.slice(a2, i2), r2)), i2 = a2 + 1), a2 = -1));
    }
    a2 !== -1 && t2.length && e3.splice(a2, i2 - a2, n2(e3.slice(a2, i2), r2));
  }
  return r2;
}
function Tr(e3, t2 = -1) {
  let n2 = /* @__PURE__ */ Object.create(null), r2 = [], i2 = null, a2 = e3.pos, o2 = false;
  for (; e3.charCode() !== t2; ) {
    let t3 = o2 ? Tr(e3, nr) : Dr(e3);
    if (!t3) break;
    if (t3.type !== `Spaces`) {
      if (o2) {
        if (t3.terms.length === 0) {
          o2 = false;
          continue;
        }
        if (t3.combinator === ` `) {
          for (; t3.terms.length > 1; ) n2[` `] = true, r2.push({ type: `Combinator`, value: ` ` }, t3.terms.shift());
          t3 = t3.terms[0];
        }
      }
      t3.type === `Combinator` ? ((i2 === null || i2.type === `Combinator`) && (e3.pos = a2, e3.error(`Unexpected combinator`)), n2[t3.value] = true) : i2 !== null && i2.type !== `Combinator` && (n2[` `] = true, r2.push({ type: `Combinator`, value: ` ` })), r2.push(t3), i2 = t3, a2 = e3.pos, o2 = t3.type === `Function`;
    }
  }
  return i2 !== null && i2.type === `Combinator` && (e3.pos -= a2, e3.error(`Unexpected combinator`)), { type: `Group`, terms: r2, combinator: wr(r2, n2) || ` `, disallowEmpty: false, explicit: false };
}
function Er(e3) {
  let t2;
  return e3.eat(dr), t2 = Tr(e3, B), e3.eat(B), t2.explicit = true, e3.charCode() === Zn && (e3.pos++, t2.disallowEmpty = true), t2;
}
function Dr(e3) {
  let t2 = e3.charCode();
  switch (t2) {
    case B:
      break;
    case dr:
      return V(e3, Er(e3));
    case sr:
      return e3.nextCharCode() === er ? br(e3) : Sr(e3);
    case pr:
      return { type: `Combinator`, value: e3.substringToPos(e3.pos + (e3.nextCharCode() === pr ? 2 : 1)) };
    case $n:
      return e3.pos++, e3.eat($n), { type: `Combinator`, value: `&&` };
    case ar:
      return e3.pos++, { type: `Comma` };
    case er:
      return V(e3, { type: `String`, value: e3.scanString() });
    case Xn:
    case Kn:
    case qn:
    case Yn:
    case Jn:
      return { type: `Spaces`, value: e3.scanSpaces() };
    case ur:
      return t2 = e3.nextCharCode(), e3.isNameCharCode(t2) ? (e3.pos++, { type: `AtKeyword`, name: e3.scanWord() }) : yr(e3);
    case rr:
    case ir:
    case lr:
    case Qn:
    case Zn:
      break;
    case fr:
      if (t2 = e3.nextCharCode(), t2 < 48 || t2 > 57) return yr(e3);
      break;
    default:
      return e3.isNameCharCode(t2) ? Cr(e3) : yr(e3);
  }
}
function Or(e3) {
  let t2 = new Gn(e3), n2 = Tr(t2);
  return t2.pos !== e3.length && t2.error(`Unexpected input`), n2.terms.length === 1 && n2.terms[0].type === `Group` ? n2.terms[0] : n2;
}
var kr = function() {
};
function Ar(e3) {
  return typeof e3 == `function` ? e3 : kr;
}
function jr(e3, t2, n2) {
  function r2(e4) {
    switch (i2.call(n2, e4), e4.type) {
      case `Group`:
        e4.terms.forEach(r2);
        break;
      case `Multiplier`:
      case `Boolean`:
        r2(e4.term);
        break;
      case `Type`:
      case `Property`:
      case `Keyword`:
      case `AtKeyword`:
      case `Function`:
      case `String`:
      case `Token`:
      case `Comma`:
        break;
      default:
        throw Error(`Unknown type: ` + e4.type);
    }
    a2.call(n2, e4);
  }
  let i2 = kr, a2 = kr;
  if (typeof t2 == `function` ? i2 = t2 : t2 && (i2 = Ar(t2.enter), a2 = Ar(t2.leave)), i2 === kr && a2 === kr) throw Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
  r2(e3, n2);
}
var Mr = e({ SyntaxError: () => Rn, generate: () => gt, parse: () => Or, walk: () => jr }), Nr = { decorator(e3) {
  let t2 = [], n2 = null;
  return { ...e3, node(t3) {
    let r2 = n2;
    n2 = t3, e3.node.call(this, t3), n2 = r2;
  }, emit(e4, r2, i2) {
    t2.push({ type: r2, value: e4, node: i2 ? null : n2 });
  }, result() {
    return t2;
  } };
} };
function Pr(e3) {
  let t2 = [];
  return xe(e3, (n2, r2, i2) => t2.push({ type: n2, value: e3.slice(r2, i2), node: null })), t2;
}
function Fr(e3, t2) {
  return typeof e3 == `string` ? Pr(e3) : t2.generate(e3, Nr);
}
var H = { type: `Match` }, U = { type: `Mismatch` }, Ir = { type: `DisallowEmpty` }, Lr = 40, Rr = 41;
function W(e3, t2, n2) {
  return t2 === H && n2 === U || e3 === H && t2 === H && n2 === H ? e3 : (e3.type === `If` && e3.else === U && t2 === H && (t2 = e3.then, e3 = e3.match), { type: `If`, match: e3, then: t2, else: n2 });
}
function zr(e3) {
  return e3.length > 2 && e3.charCodeAt(e3.length - 2) === Lr && e3.charCodeAt(e3.length - 1) === Rr;
}
function Br(e3) {
  return e3.type === `Keyword` || e3.type === `AtKeyword` || e3.type === `Function` || e3.type === `Type` && zr(e3.name);
}
function G(e3, t2 = ` `, n2 = false) {
  return { type: `Group`, terms: e3, combinator: t2, disallowEmpty: false, explicit: n2 };
}
function Vr(e3, t2, n2 = /* @__PURE__ */ new Set()) {
  if (!n2.has(e3)) switch (n2.add(e3), e3.type) {
    case `If`:
      e3.match = Vr(e3.match, t2, n2), e3.then = Vr(e3.then, t2, n2), e3.else = Vr(e3.else, t2, n2);
      break;
    case `Type`:
      return t2[e3.name] || e3;
  }
  return e3;
}
function Hr(e3, t2, n2) {
  switch (e3) {
    case ` `: {
      let e4 = H;
      for (let n3 = t2.length - 1; n3 >= 0; n3--) {
        let r2 = t2[n3];
        e4 = W(r2, e4, U);
      }
      return e4;
    }
    case `|`: {
      let e4 = U, n3 = null;
      for (let r2 = t2.length - 1; r2 >= 0; r2--) {
        let i2 = t2[r2];
        if (Br(i2) && (n3 === null && r2 > 0 && Br(t2[r2 - 1]) && (n3 = /* @__PURE__ */ Object.create(null), e4 = W({ type: `Enum`, map: n3 }, H, e4)), n3 !== null)) {
          let e5 = (zr(i2.name) ? i2.name.slice(0, -1) : i2.name).toLowerCase();
          if (!(e5 in n3)) {
            n3[e5] = i2;
            continue;
          }
        }
        n3 = null, e4 = W(i2, H, e4);
      }
      return e4;
    }
    case `&&`: {
      if (t2.length > 5) return { type: `MatchOnce`, terms: t2, all: true };
      let n3 = U;
      for (let r2 = t2.length - 1; r2 >= 0; r2--) {
        let i2 = t2[r2], a2;
        a2 = t2.length > 1 ? Hr(e3, t2.filter(function(e4) {
          return e4 !== i2;
        }), false) : H, n3 = W(i2, a2, n3);
      }
      return n3;
    }
    case `||`: {
      if (t2.length > 5) return { type: `MatchOnce`, terms: t2, all: false };
      let r2 = n2 ? H : U;
      for (let n3 = t2.length - 1; n3 >= 0; n3--) {
        let i2 = t2[n3], a2;
        a2 = t2.length > 1 ? Hr(e3, t2.filter(function(e4) {
          return e4 !== i2;
        }), true) : H, r2 = W(i2, a2, r2);
      }
      return r2;
    }
  }
}
function Ur(e3) {
  let t2 = H, n2 = K(e3.term);
  if (e3.max === 0) n2 = W(n2, Ir, U), t2 = W(n2, null, U), t2.then = W(H, H, t2), e3.comma && (t2.then.else = W({ type: `Comma`, syntax: e3 }, t2, U));
  else for (let r2 = e3.min || 1; r2 <= e3.max; r2++) e3.comma && t2 !== H && (t2 = W({ type: `Comma`, syntax: e3 }, t2, U)), t2 = W(n2, W(H, H, t2), U);
  if (e3.min === 0) t2 = W(H, H, t2);
  else for (let r2 = 0; r2 < e3.min - 1; r2++) e3.comma && t2 !== H && (t2 = W({ type: `Comma`, syntax: e3 }, t2, U)), t2 = W(n2, t2, U);
  return t2;
}
function K(e3) {
  if (typeof e3 == `function`) return { type: `Generic`, fn: e3 };
  switch (e3.type) {
    case `Group`: {
      let t2 = Hr(e3.combinator, e3.terms.map(K), false);
      return e3.disallowEmpty && (t2 = W(t2, Ir, U)), t2;
    }
    case `Multiplier`:
      return Ur(e3);
    case `Boolean`: {
      let t2 = K(e3.term), n2 = K(G([G([{ type: `Keyword`, name: `not` }, { type: `Type`, name: `!boolean-group` }]), G([{ type: `Type`, name: `!boolean-group` }, G([{ type: `Multiplier`, comma: false, min: 0, max: 0, term: G([{ type: `Keyword`, name: `and` }, { type: `Type`, name: `!boolean-group` }]) }, { type: `Multiplier`, comma: false, min: 0, max: 0, term: G([{ type: `Keyword`, name: `or` }, { type: `Type`, name: `!boolean-group` }]) }], `|`)])], `|`)), r2 = K(G([{ type: `Type`, name: `!term` }, G([{ type: `Token`, value: `(` }, { type: `Type`, name: `!self` }, { type: `Token`, value: `)` }]), { type: `Type`, name: `general-enclosed` }], `|`));
      return Vr(r2, { "!term": t2, "!self": n2 }), Vr(n2, { "!boolean-group": r2 }), n2;
    }
    case `Type`:
    case `Property`:
      return { type: e3.type, name: e3.name, syntax: e3 };
    case `Keyword`:
      return { type: e3.type, name: e3.name.toLowerCase(), syntax: e3 };
    case `AtKeyword`:
      return { type: e3.type, name: `@` + e3.name.toLowerCase(), syntax: e3 };
    case `Function`:
      return { type: e3.type, name: e3.name.toLowerCase() + `(`, syntax: e3 };
    case `String`:
      return e3.value.length === 3 ? { type: `Token`, value: e3.value.charAt(1), syntax: e3 } : { type: e3.type, value: e3.value.substr(1, e3.value.length - 2).replace(/\\'/g, `'`), syntax: e3 };
    case `Token`:
      return { type: e3.type, value: e3.value, syntax: e3 };
    case `Comma`:
      return { type: e3.type, syntax: e3 };
    default:
      throw Error(`Unknown node type:`, e3.type);
  }
}
function Wr(e3, t2) {
  return typeof e3 == `string` && (e3 = Or(e3)), { type: `MatchGraph`, match: K(e3), syntax: t2 || null, source: e3 };
}
var { hasOwnProperty: Gr } = Object.prototype, Kr = 0, qr = 1, Jr = 2, Yr = 3, Xr = `Match`, Zr = `Mismatch`, Qr = `Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)`, $r = 15e3, ei = 0;
function ti(e3) {
  let t2 = null, n2 = null, r2 = e3;
  for (; r2 !== null; ) n2 = r2.prev, r2.prev = t2, t2 = r2, r2 = n2;
  return t2;
}
function ni(e3, t2) {
  if (e3.length !== t2.length) return false;
  for (let n2 = 0; n2 < e3.length; n2++) {
    let r2 = t2.charCodeAt(n2), i2 = e3.charCodeAt(n2);
    if (i2 >= 65 && i2 <= 90 && (i2 |= 32), i2 !== r2) return false;
  }
  return true;
}
function ri(e3) {
  return e3.type === 9 ? e3.value !== `?` : false;
}
function ii(e3) {
  return e3 === null ? true : e3.type === 18 || e3.type === 2 || e3.type === 21 || e3.type === 19 || e3.type === 23 || ri(e3);
}
function ai(e3) {
  return e3 === null ? true : e3.type === 22 || e3.type === 20 || e3.type === 24 || e3.type === 9 && e3.value === `/`;
}
function oi(e3, t2, n2) {
  function r2() {
    do
      v2++, _2 = v2 < e3.length ? e3[v2] : null;
    while (_2 !== null && (_2.type === 13 || _2.type === 25));
  }
  function i2(t3) {
    let n3 = v2 + t3;
    return n3 < e3.length ? e3[n3] : null;
  }
  function a2(e4, t3) {
    return { nextState: e4, matchStack: b2, syntaxStack: d2, thenStack: f2, tokenIndex: v2, prev: t3 };
  }
  function o2(e4) {
    f2 = { nextState: e4, matchStack: b2, syntaxStack: d2, prev: f2 };
  }
  function s2(e4) {
    p2 = a2(e4, p2);
  }
  function c2() {
    b2 = { type: qr, syntax: t2.syntax, token: _2, prev: b2 }, r2(), m2 = null, v2 > y2 && (y2 = v2);
  }
  function l2() {
    d2 = { syntax: t2.syntax, opts: t2.syntax.opts || d2 !== null && d2.opts || null, prev: d2 }, b2 = { type: Jr, syntax: t2.syntax, token: b2.token, prev: b2 };
  }
  function u2() {
    b2 = b2.type === Jr ? b2.prev : { type: Yr, syntax: d2.syntax, token: b2.token, prev: b2 }, d2 = d2.prev;
  }
  let d2 = null, f2 = null, p2 = null, m2 = null, h2 = 0, g2 = null, _2 = null, v2 = -1, y2 = 0, b2 = { type: Kr, syntax: null, token: null, prev: null };
  for (r2(); g2 === null && ++h2 < $r; ) switch (t2.type) {
    case `Match`:
      if (f2 === null) {
        if (_2 !== null && (v2 !== e3.length - 1 || _2.value !== `\\0` && _2.value !== `\\9`)) {
          t2 = U;
          break;
        }
        g2 = Xr;
        break;
      }
      if (t2 = f2.nextState, t2 === Ir) if (f2.matchStack === b2) {
        t2 = U;
        break;
      } else t2 = H;
      for (; f2.syntaxStack !== d2; ) u2();
      f2 = f2.prev;
      break;
    case `Mismatch`:
      if (m2 !== null && m2 !== false) (p2 === null || v2 > p2.tokenIndex) && (p2 = m2, m2 = false);
      else if (p2 === null) {
        g2 = Zr;
        break;
      }
      t2 = p2.nextState, f2 = p2.thenStack, d2 = p2.syntaxStack, b2 = p2.matchStack, v2 = p2.tokenIndex, _2 = v2 < e3.length ? e3[v2] : null, p2 = p2.prev;
      break;
    case `MatchGraph`:
      t2 = t2.match;
      break;
    case `If`:
      t2.else !== U && s2(t2.else), t2.then !== H && o2(t2.then), t2 = t2.match;
      break;
    case `MatchOnce`:
      t2 = { type: `MatchOnceBuffer`, syntax: t2, index: 0, mask: 0 };
      break;
    case `MatchOnceBuffer`: {
      let e4 = t2.syntax.terms;
      if (t2.index === e4.length) {
        if (t2.mask === 0 || t2.syntax.all) {
          t2 = U;
          break;
        }
        t2 = H;
        break;
      }
      if (t2.mask === (1 << e4.length) - 1) {
        t2 = H;
        break;
      }
      for (; t2.index < e4.length; t2.index++) {
        let n3 = 1 << t2.index;
        if ((t2.mask & n3) === 0) {
          s2(t2), o2({ type: `AddMatchOnce`, syntax: t2.syntax, mask: t2.mask | n3 }), t2 = e4[t2.index++];
          break;
        }
      }
      break;
    }
    case `AddMatchOnce`:
      t2 = { type: `MatchOnceBuffer`, syntax: t2.syntax, index: 0, mask: t2.mask };
      break;
    case `Enum`:
      if (_2 !== null) {
        let e4 = _2.value.toLowerCase();
        if (e4.indexOf(`\\`) !== -1 && (e4 = e4.replace(/\\[09].*$/, ``)), Gr.call(t2.map, e4)) {
          t2 = t2.map[e4];
          break;
        }
      }
      t2 = U;
      break;
    case `Generic`: {
      let e4 = d2 === null ? null : d2.opts, n3 = v2 + Math.floor(t2.fn(_2, i2, e4));
      if (!isNaN(n3) && n3 > v2) {
        for (; v2 < n3; ) c2();
        t2 = H;
      } else t2 = U;
      break;
    }
    case `Type`:
    case `Property`: {
      let e4 = t2.type === `Type` ? `types` : `properties`, r4 = Gr.call(n2, e4) ? n2[e4][t2.name] : null;
      if (!r4 || !r4.match) throw Error(`Bad syntax reference: ` + (t2.type === `Type` ? `<` + t2.name + `>` : `<'` + t2.name + `'>`));
      if (m2 !== false && _2 !== null && t2.type === `Type` && (t2.name === `custom-ident` && _2.type === 1 || t2.name === `length` && _2.value === `0`)) {
        m2 === null && (m2 = a2(t2, p2)), t2 = U;
        break;
      }
      l2(), t2 = r4.matchRef || r4.match;
      break;
    }
    case `Keyword`: {
      let e4 = t2.name;
      if (_2 !== null) {
        let n3 = _2.value;
        if (n3.indexOf(`\\`) !== -1 && (n3 = n3.replace(/\\[09].*$/, ``)), ni(n3, e4)) {
          c2(), t2 = H;
          break;
        }
      }
      t2 = U;
      break;
    }
    case `AtKeyword`:
    case `Function`:
      if (_2 !== null && ni(_2.value, t2.name)) {
        c2(), t2 = H;
        break;
      }
      t2 = U;
      break;
    case `Token`:
      if (_2 !== null && _2.value === t2.value) {
        c2(), t2 = H;
        break;
      }
      t2 = U;
      break;
    case `Comma`:
      _2 !== null && _2.type === 18 ? ii(b2.token) ? t2 = U : (c2(), t2 = ai(_2) ? U : H) : t2 = ii(b2.token) || ai(_2) ? H : U;
      break;
    case `String`:
      let r3 = ``, h3 = v2;
      for (; h3 < e3.length && r3.length < t2.value.length; h3++) r3 += e3[h3].value;
      if (ni(r3, t2.value)) {
        for (; v2 < h3; ) c2();
        t2 = H;
      } else t2 = U;
      break;
    default:
      throw Error(`Unknown node type: ` + t2.type);
  }
  switch (ei += h2, g2) {
    case null:
      console.warn(`[csstree-match] BREAK after ` + $r + ` iterations`), g2 = Qr, b2 = null;
      break;
    case Xr:
      for (; d2 !== null; ) u2();
      break;
    default:
      b2 = null;
  }
  return { tokens: e3, reason: g2, iterations: h2, match: b2, longestMatch: y2 };
}
function si(e3, t2, n2) {
  let r2 = oi(e3, t2, n2 || {});
  if (r2.match === null) return r2;
  let i2 = r2.match, a2 = r2.match = { syntax: t2.syntax || null, match: [] }, o2 = [a2];
  for (i2 = ti(i2).prev; i2 !== null; ) {
    switch (i2.type) {
      case Jr:
        a2.match.push(a2 = { syntax: i2.syntax, match: [] }), o2.push(a2);
        break;
      case Yr:
        o2.pop(), a2 = o2[o2.length - 1];
        break;
      default:
        a2.match.push({ syntax: i2.syntax || null, token: i2.token.value, node: i2.token.node });
    }
    i2 = i2.prev;
  }
  return r2;
}
var ci = e({ getTrace: () => li, isKeyword: () => fi, isProperty: () => di, isType: () => ui });
function li(e3) {
  function t2(e4) {
    return e4 === null ? false : e4.type === `Type` || e4.type === `Property` || e4.type === `Keyword`;
  }
  function n2(i2) {
    if (Array.isArray(i2.match)) {
      for (let e4 = 0; e4 < i2.match.length; e4++) if (n2(i2.match[e4])) return t2(i2.syntax) && r2.unshift(i2.syntax), true;
    } else if (i2.node === e3) return r2 = t2(i2.syntax) ? [i2.syntax] : [], true;
    return false;
  }
  let r2 = null;
  return this.matched !== null && n2(this.matched), r2;
}
function ui(e3, t2) {
  return pi(this, e3, (e4) => e4.type === `Type` && e4.name === t2);
}
function di(e3, t2) {
  return pi(this, e3, (e4) => e4.type === `Property` && e4.name === t2);
}
function fi(e3) {
  return pi(this, e3, (e4) => e4.type === `Keyword`);
}
function pi(e3, t2, n2) {
  let r2 = li.call(e3, t2);
  return r2 === null ? false : r2.some(n2);
}
function mi(e3) {
  return `node` in e3 ? e3.node : mi(e3.match[0]);
}
function hi(e3) {
  return `node` in e3 ? e3.node : hi(e3.match[e3.match.length - 1]);
}
function gi(e3, t2, n2, r2, i2) {
  function a2(n3) {
    if (n3.syntax !== null && n3.syntax.type === r2 && n3.syntax.name === i2) {
      let r3 = mi(n3), i3 = hi(n3);
      e3.syntax.walk(t2, function(e4, t3, n4) {
        if (e4 === r3) {
          let e5 = new k();
          do {
            if (e5.appendData(t3.data), t3.data === i3) break;
            t3 = t3.next;
          } while (t3 !== null);
          o2.push({ parent: n4, nodes: e5 });
        }
      });
    }
    Array.isArray(n3.match) && n3.match.forEach(a2);
  }
  let o2 = [];
  return n2.matched !== null && a2(n2.matched), o2;
}
var { hasOwnProperty: _i } = Object.prototype;
function vi(e3) {
  return typeof e3 == `number` && isFinite(e3) && Math.floor(e3) === e3 && e3 >= 0;
}
function yi(e3) {
  return !!e3 && vi(e3.offset) && vi(e3.line) && vi(e3.column);
}
function bi(e3, t2) {
  return function(n2, r2) {
    if (!n2 || n2.constructor !== Object) return r2(n2, `Type of node should be an Object`);
    for (let i2 in n2) {
      let a2 = true;
      if (_i.call(n2, i2) !== false) {
        if (i2 === `type`) n2.type !== e3 && r2(n2, "Wrong node type `" + n2.type + "`, expected `" + e3 + "`");
        else if (i2 === `loc`) {
          if (n2.loc === null) continue;
          if (n2.loc && n2.loc.constructor === Object) if (typeof n2.loc.source != `string`) i2 += `.source`;
          else if (!yi(n2.loc.start)) i2 += `.start`;
          else if (!yi(n2.loc.end)) i2 += `.end`;
          else continue;
          a2 = false;
        } else if (t2.hasOwnProperty(i2)) {
          a2 = false;
          for (let e4 = 0; !a2 && e4 < t2[i2].length; e4++) {
            let r3 = t2[i2][e4];
            switch (r3) {
              case String:
                a2 = typeof n2[i2] == `string`;
                break;
              case Boolean:
                a2 = typeof n2[i2] == `boolean`;
                break;
              case null:
                a2 = n2[i2] === null;
                break;
              default:
                typeof r3 == `string` ? a2 = n2[i2] && n2[i2].type === r3 : Array.isArray(r3) && (a2 = n2[i2] instanceof k);
            }
          }
        } else r2(n2, "Unknown field `" + i2 + "` for " + e3 + ` node type`);
        a2 || r2(n2, "Bad value for `" + e3 + `.` + i2 + "`");
      }
    }
    for (let i2 in t2) _i.call(t2, i2) && _i.call(n2, i2) === false && r2(n2, "Field `" + e3 + `.` + i2 + "` is missed");
  };
}
function xi(e3, t2) {
  let n2 = [];
  for (let r2 = 0; r2 < e3.length; r2++) {
    let i2 = e3[r2];
    if (i2 === String || i2 === Boolean) n2.push(i2.name.toLowerCase());
    else if (i2 === null) n2.push(`null`);
    else if (typeof i2 == `string`) n2.push(i2);
    else if (Array.isArray(i2)) n2.push(`List<` + (xi(i2, t2) || `any`) + `>`);
    else throw Error("Wrong value `" + i2 + "` in `" + t2 + "` structure definition");
  }
  return n2.join(` | `);
}
function Si(e3, t2) {
  let n2 = t2.structure, r2 = { type: String, loc: true }, i2 = { type: `"` + e3 + `"` };
  for (let t3 in n2) _i.call(n2, t3) !== false && (i2[t3] = xi(r2[t3] = Array.isArray(n2[t3]) ? n2[t3].slice() : [n2[t3]], e3 + `.` + t3));
  return { docs: i2, check: bi(e3, r2) };
}
function Ci(e3) {
  let t2 = {};
  if (e3.node) {
    for (let n2 in e3.node) if (_i.call(e3.node, n2)) {
      let r2 = e3.node[n2];
      if (r2.structure) t2[n2] = Si(n2, r2);
      else throw Error("Missed `structure` field in `" + n2 + "` node type definition");
    }
  }
  return t2;
}
function wi(e3, t2, n2) {
  let r2 = {};
  for (let i2 in e3) e3[i2].syntax && (r2[i2] = n2 ? e3[i2].syntax : gt(e3[i2].syntax, { compact: t2 }));
  return r2;
}
function Ti(e3, t2, n2) {
  let r2 = {};
  for (let [i2, a2] of Object.entries(e3)) r2[i2] = { prelude: a2.prelude && (n2 ? a2.prelude.syntax : gt(a2.prelude.syntax, { compact: t2 })), descriptors: a2.descriptors && wi(a2.descriptors, t2, n2) };
  return r2;
}
function Ei(e3) {
  for (let t2 = 0; t2 < e3.length; t2++) if (e3[t2].value.toLowerCase() === `var(`) return true;
  return false;
}
function Di(e3) {
  let t2 = e3.terms[0];
  return e3.explicit === false && e3.terms.length === 1 && t2.type === `Multiplier` && t2.comma === true;
}
function q(e3, t2, n2) {
  return { matched: e3, iterations: n2, error: t2, ...ci };
}
function J(e3, t2, n2, r2) {
  let i2 = Fr(n2, e3.syntax), a2;
  return Ei(i2) ? q(null, Error(`Matching for a tree with var() is not supported`)) : (r2 && (a2 = si(i2, e3.cssWideKeywordsSyntax, e3)), (!r2 || !a2.match) && (a2 = si(i2, t2.match, e3), !a2.match) ? q(null, new St(a2.reason, t2.syntax, n2, a2), a2.iterations) : q(a2.match, null, a2.iterations));
}
var Oi = class {
  constructor(e3, t2, n2) {
    if (this.cssWideKeywords = Mt, this.syntax = t2, this.generic = false, this.units = { ...kn }, this.atrules = /* @__PURE__ */ Object.create(null), this.properties = /* @__PURE__ */ Object.create(null), this.types = /* @__PURE__ */ Object.create(null), this.structure = n2 || Ci(e3), e3) {
      if (e3.cssWideKeywords && (this.cssWideKeywords = e3.cssWideKeywords), e3.units) for (let t3 of Object.keys(kn)) Array.isArray(e3.units[t3]) && (this.units[t3] = e3.units[t3]);
      if (e3.types) for (let [t3, n3] of Object.entries(e3.types)) this.addType_(t3, n3);
      if (e3.generic) {
        this.generic = true;
        for (let [e4, t3] of Object.entries(On(this.units))) this.addType_(e4, t3);
      }
      if (e3.atrules) for (let [t3, n3] of Object.entries(e3.atrules)) this.addAtrule_(t3, n3);
      if (e3.properties) for (let [t3, n3] of Object.entries(e3.properties)) this.addProperty_(t3, n3);
    }
    this.cssWideKeywordsSyntax = Wr(this.cssWideKeywords.join(` |  `));
  }
  checkStructure(e3) {
    function t2(e4, t3) {
      r2.push({ node: e4, message: t3 });
    }
    let n2 = this.structure, r2 = [];
    return this.syntax.walk(e3, function(e4) {
      n2.hasOwnProperty(e4.type) ? n2[e4.type].check(e4, t2) : t2(e4, "Unknown node type `" + e4.type + "`");
    }), r2.length ? r2 : false;
  }
  createDescriptor(e3, t2, n2, r2 = null) {
    let i2 = { type: t2, name: n2 }, a2 = { type: t2, name: n2, parent: r2, serializable: typeof e3 == `string` || e3 && typeof e3.type == `string`, syntax: null, match: null, matchRef: null };
    return typeof e3 == `function` ? a2.match = Wr(e3, i2) : (typeof e3 == `string` ? Object.defineProperty(a2, `syntax`, { get() {
      return Object.defineProperty(a2, `syntax`, { value: Or(e3) }), a2.syntax;
    } }) : a2.syntax = e3, Object.defineProperty(a2, `match`, { get() {
      return Object.defineProperty(a2, `match`, { value: Wr(a2.syntax, i2) }), a2.match;
    } }), t2 === `Property` && Object.defineProperty(a2, `matchRef`, { get() {
      let e4 = a2.syntax, t3 = Di(e4) ? Wr({ ...e4, terms: [e4.terms[0].term] }, i2) : null;
      return Object.defineProperty(a2, `matchRef`, { value: t3 }), t3;
    } })), a2;
  }
  addAtrule_(e3, t2) {
    t2 && (this.atrules[e3] = { type: `Atrule`, name: e3, prelude: t2.prelude ? this.createDescriptor(t2.prelude, `AtrulePrelude`, e3) : null, descriptors: t2.descriptors ? Object.keys(t2.descriptors).reduce((n2, r2) => (n2[r2] = this.createDescriptor(t2.descriptors[r2], `AtruleDescriptor`, r2, e3), n2), /* @__PURE__ */ Object.create(null)) : null });
  }
  addProperty_(e3, t2) {
    t2 && (this.properties[e3] = this.createDescriptor(t2, `Property`, e3));
  }
  addType_(e3, t2) {
    t2 && (this.types[e3] = this.createDescriptor(t2, `Type`, e3));
  }
  checkAtruleName(e3) {
    if (!this.getAtrule(e3)) return new xt(`Unknown at-rule`, `@` + e3);
  }
  checkAtrulePrelude(e3, t2) {
    let n2 = this.checkAtruleName(e3);
    if (n2) return n2;
    let r2 = this.getAtrule(e3);
    if (!r2.prelude && t2) return SyntaxError("At-rule `@" + e3 + "` should not contain a prelude");
    if (r2.prelude && !t2 && !J(this, r2.prelude, ``, false).matched) return SyntaxError("At-rule `@" + e3 + "` should contain a prelude");
  }
  checkAtruleDescriptorName(e3, t2) {
    let n2 = this.checkAtruleName(e3);
    if (n2) return n2;
    let r2 = this.getAtrule(e3), i2 = Tt(t2);
    if (!r2.descriptors) return SyntaxError("At-rule `@" + e3 + "` has no known descriptors");
    if (!r2.descriptors[i2.name] && !r2.descriptors[i2.basename]) return new xt(`Unknown at-rule descriptor`, t2);
  }
  checkPropertyName(e3) {
    if (!this.getProperty(e3)) return new xt(`Unknown property`, e3);
  }
  matchAtrulePrelude(e3, t2) {
    let n2 = this.checkAtrulePrelude(e3, t2);
    if (n2) return q(null, n2);
    let r2 = this.getAtrule(e3);
    return r2.prelude ? J(this, r2.prelude, t2 || ``, false) : q(null, null);
  }
  matchAtruleDescriptor(e3, t2, n2) {
    let r2 = this.checkAtruleDescriptorName(e3, t2);
    if (r2) return q(null, r2);
    let i2 = this.getAtrule(e3), a2 = Tt(t2);
    return J(this, i2.descriptors[a2.name] || i2.descriptors[a2.basename], n2, false);
  }
  matchDeclaration(e3) {
    return e3.type === `Declaration` ? this.matchProperty(e3.property, e3.value) : q(null, Error(`Not a Declaration node`));
  }
  matchProperty(e3, t2) {
    if (Et(e3).custom) return q(null, Error(`Lexer matching doesn't applicable for custom properties`));
    let n2 = this.checkPropertyName(e3);
    return n2 ? q(null, n2) : J(this, this.getProperty(e3), t2, true);
  }
  matchType(e3, t2) {
    let n2 = this.getType(e3);
    return n2 ? J(this, n2, t2, false) : q(null, new xt(`Unknown type`, e3));
  }
  match(e3, t2) {
    return typeof e3 != `string` && (!e3 || !e3.type) ? q(null, new xt(`Bad syntax`)) : ((typeof e3 == `string` || !e3.match) && (e3 = this.createDescriptor(e3, `Type`, `anonymous`)), J(this, e3, t2, false));
  }
  findValueFragments(e3, t2, n2, r2) {
    return gi(this, t2, this.matchProperty(e3, t2), n2, r2);
  }
  findDeclarationValueFragments(e3, t2, n2) {
    return gi(this, e3.value, this.matchDeclaration(e3), t2, n2);
  }
  findAllFragments(e3, t2, n2) {
    let r2 = [];
    return this.syntax.walk(e3, { visit: `Declaration`, enter: (e4) => {
      r2.push.apply(r2, this.findDeclarationValueFragments(e4, t2, n2));
    } }), r2;
  }
  getAtrule(e3, t2 = true) {
    let n2 = Tt(e3);
    return (n2.vendor && t2 ? this.atrules[n2.name] || this.atrules[n2.basename] : this.atrules[n2.name]) || null;
  }
  getAtrulePrelude(e3, t2 = true) {
    let n2 = this.getAtrule(e3, t2);
    return n2 && n2.prelude || null;
  }
  getAtruleDescriptor(e3, t2) {
    return this.atrules.hasOwnProperty(e3) && this.atrules.declarators && this.atrules[e3].declarators[t2] || null;
  }
  getProperty(e3, t2 = true) {
    let n2 = Et(e3);
    return (n2.vendor && t2 ? this.properties[n2.name] || this.properties[n2.basename] : this.properties[n2.name]) || null;
  }
  getType(e3) {
    return hasOwnProperty.call(this.types, e3) ? this.types[e3] : null;
  }
  validate() {
    function e3(e4, t3) {
      return t3 ? `<${e4}>` : `<'${e4}'>`;
    }
    function t2(a3, o3, s2, c2) {
      if (s2.has(o3)) return s2.get(o3);
      s2.set(o3, false), c2.syntax !== null && jr(c2.syntax, function(c3) {
        if (c3.type !== `Type` && c3.type !== `Property`) return;
        let l2 = c3.type === `Type` ? a3.types : a3.properties, u2 = c3.type === `Type` ? r2 : i2;
        hasOwnProperty.call(l2, c3.name) ? t2(a3, c3.name, u2, l2[c3.name]) && (n2.push(`${e3(o3, s2 === r2)} used broken syntax definition ${e3(c3.name, c3.type === `Type`)}`), s2.set(o3, true)) : (n2.push(`${e3(o3, s2 === r2)} used missed syntax definition ${e3(c3.name, c3.type === `Type`)}`), s2.set(o3, true));
      }, this);
    }
    let n2 = [], r2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map();
    for (let e4 in this.types) t2(this, e4, r2, this.types[e4]);
    for (let e4 in this.properties) t2(this, e4, i2, this.properties[e4]);
    let a2 = [...r2.keys()].filter((e4) => r2.get(e4)), o2 = [...i2.keys()].filter((e4) => i2.get(e4));
    return a2.length || o2.length ? { errors: n2, types: a2, properties: o2 } : null;
  }
  dump(e3, t2) {
    return { generic: this.generic, cssWideKeywords: this.cssWideKeywords, units: this.units, types: wi(this.types, !t2, e3), properties: wi(this.properties, !t2, e3), atrules: Ti(this.atrules, !t2, e3) };
  }
  toString() {
    return JSON.stringify(this.dump());
  }
};
function ki(e3, t2) {
  return typeof t2 == `string` && /^\s*\|/.test(t2) ? typeof e3 == `string` ? e3 + t2 : t2.replace(/^\s*\|\s*/, ``) : t2 || null;
}
function Ai(e3, t2) {
  let n2 = /* @__PURE__ */ Object.create(null);
  for (let r2 of Object.keys(e3)) t2.includes(r2) && (n2[r2] = e3[r2]);
  return n2;
}
function ji(e3, t2, n2) {
  let r2 = { ...e3 };
  for (let [e4, i2] of Object.entries(t2)) r2[e4] = { ...r2[e4], ...n2 ? Ai(i2, n2) : i2 };
  return r2;
}
function Mi(e3, t2) {
  let n2 = { ...e3 };
  for (let [r2, i2] of Object.entries(t2)) switch (r2) {
    case `generic`:
      n2[r2] = !!i2;
      break;
    case `cssWideKeywords`:
      n2[r2] = e3[r2] ? [...e3[r2], ...i2] : i2 || [];
      break;
    case `units`:
      n2[r2] = { ...e3[r2] };
      for (let [e4, t3] of Object.entries(i2)) n2[r2][e4] = Array.isArray(t3) ? t3 : [];
      break;
    case `atrules`:
      n2[r2] = { ...e3[r2] };
      for (let [e4, t3] of Object.entries(i2)) {
        let i3 = n2[r2][e4] || {}, a2 = n2[r2][e4] = { prelude: i3.prelude || null, descriptors: { ...i3.descriptors } };
        if (t3) {
          a2.prelude = t3.prelude ? ki(a2.prelude, t3.prelude) : a2.prelude || null;
          for (let [e5, n3] of Object.entries(t3.descriptors || {})) a2.descriptors[e5] = n3 ? ki(a2.descriptors[e5], n3) : null;
          Object.keys(a2.descriptors).length || (a2.descriptors = null);
        }
      }
      break;
    case `types`:
    case `properties`:
      n2[r2] = { ...e3[r2] };
      for (let [e4, t3] of Object.entries(i2)) n2[r2][e4] = ki(n2[r2][e4], t3);
      break;
    case `parseContext`:
      n2[r2] = { ...e3[r2], ...i2 };
      break;
    case `scope`:
    case `features`:
      n2[r2] = ji(e3[r2], i2);
      break;
    case `atrule`:
    case `pseudo`:
      n2[r2] = ji(e3[r2], i2, [`parse`]);
      break;
    case `node`:
      n2[r2] = ji(e3[r2], i2, [`name`, `structure`, `parse`, `generate`, `walkContext`]);
      break;
  }
  return n2;
}
function Ni(e3) {
  let t2 = ze(e3), n2 = ut(e3), r2 = et(e3), { fromPlainObject: i2, toPlainObject: a2 } = tt(n2), o2 = { lexer: null, createLexer: (e4) => new Oi(e4, o2, o2.lexer.structure), tokenize: xe, parse: t2, generate: r2, walk: n2, find: n2.find, findLast: n2.findLast, findAll: n2.findAll, fromPlainObject: i2, toPlainObject: a2, fork(t3) {
    let n3 = Mi({}, e3);
    return Ni(typeof t3 == `function` ? t3(n3) : Mi(n3, t3));
  } };
  return o2.lexer = new Oi({ generic: e3.generic, cssWideKeywords: e3.cssWideKeywords, units: e3.units, types: e3.types, atrules: e3.atrules, properties: e3.properties, node: e3.node }, o2), o2;
}
var Pi = (e3) => Ni(Mi({}, e3)), Fi = { generic: true, cssWideKeywords: [`initial`, `inherit`, `unset`, `revert`, `revert-layer`], units: { angle: [`deg`, `grad`, `rad`, `turn`], decibel: [`db`], flex: [`fr`], frequency: [`hz`, `khz`], length: `cm.mm.q.in.pt.pc.px.em.rem.ex.rex.cap.rcap.ch.rch.ic.ric.lh.rlh.vw.svw.lvw.dvw.vh.svh.lvh.dvh.vi.svi.lvi.dvi.vb.svb.lvb.dvb.vmin.svmin.lvmin.dvmin.vmax.svmax.lvmax.dvmax.cqw.cqh.cqi.cqb.cqmin.cqmax`.split(`.`), resolution: [`dpi`, `dpcm`, `dppx`, `x`], semitones: [`st`], time: [`s`, `ms`] }, types: { "abs()": `abs( <calc-sum> )`, "absolute-size": `xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large`, "acos()": `acos( <calc-sum> )`, "alpha-value": `<number>|<percentage>`, "an+b": `odd|even|<integer>|<n-dimension>|'+'? \u2020 n|-n|<ndashdigit-dimension>|'+'? \u2020 <ndashdigit-ident>|<dashndashdigit-ident>|<n-dimension> <signed-integer>|'+'? \u2020 n <signed-integer>|-n <signed-integer>|<ndash-dimension> <signless-integer>|'+'? \u2020 n- <signless-integer>|-n- <signless-integer>|<n-dimension> ['+'|'-'] <signless-integer>|'+'? \u2020 n ['+'|'-'] <signless-integer>|-n ['+'|'-'] <signless-integer>`, "anchor()": `anchor( <anchor-name>?&&<anchor-side> , <length-percentage>? )`, "anchor-name": `<dashed-ident>`, "anchor-side": `inside|outside|top|left|right|bottom|start|end|self-start|self-end|<percentage>|center`, "anchor-size": `width|height|block|inline|self-block|self-inline`, "anchor-size()": `anchor-size( [<anchor-name>||<anchor-size>]? , <length-percentage>? )`, "angle-percentage": `<angle>|<percentage>`, "angular-color-hint": `<angle-percentage>|<zero>`, "angular-color-stop": `<color> <color-stop-angle>?`, "angular-color-stop-list": `<angular-color-stop> , [<angular-color-hint>? , <angular-color-stop>]#?`, "animateable-feature": `scroll-position|contents|<custom-ident>`, "animation-action": `none|play|play-once|play-forwards|play-backwards|pause|reset|replay`, "asin()": `asin( <calc-sum> )`, "atan()": `atan( <calc-sum> )`, "atan2()": `atan2( <calc-sum> , <calc-sum> )`, attachment: `scroll|fixed|local`, "attr()": `attr( <attr-name> <attr-type>? , <declaration-value>? )`, "attr-matcher": `['~'|'|'|'^'|'$'|'*']? '='`, "attr-modifier": `i|s`, "attr-type": `type( <syntax> )|raw-string|number|<attr-unit>`, "attribute-selector": `'[' <wq-name> ']'|'[' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? ']'`, "auto-repeat": `repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )`, "auto-track-list": `[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?`, axis: `block|inline|x|y`, "baseline-position": `[first|last]? baseline`, "basic-shape": `<inset()>|<xywh()>|<rect()>|<circle()>|<ellipse()>|<polygon()>|<path()>`, "basic-shape-rect": `<inset()>|<rect()>|<xywh()>`, "bg-clip": `<visual-box>|border-area|text`, "bg-image": `<image>|none`, "bg-layer": `<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<visual-box>||<visual-box>`, "bg-position": `[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]`, "bg-size": `[<length-percentage [0,\u221E]>|auto]{1,2}|cover|contain`, "blend-mode": `normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity`, "blur()": `blur( <length>? )`, "brightness()": `brightness( [<number>|<percentage>]? )`, "calc()": `calc( <calc-sum> )`, "calc-constant": `e|pi|infinity|-infinity|NaN`, "calc-product": `<calc-value> ['*' <calc-value>|'/' <number>]*`, "calc-size()": `calc-size( <calc-size-basis> , <calc-sum> )`, "calc-size-basis": `<intrinsic-size-keyword>|<calc-size()>|any|<calc-sum>`, "calc-sum": `<calc-product> [['+'|'-'] <calc-product>]*`, "calc-value": `<number>|<dimension>|<percentage>|<calc-constant>|( <calc-sum> )`, "cf-final-image": `<image>|<color>`, "cf-mixing-image": `<percentage>?&&<image>`, "circle()": `circle( <radial-size>? [at <position>]? )`, "clamp()": `clamp( <calc-sum>#{3} )`, "class-selector": `'.' <ident-token>`, "clip-source": `<url>`, color: `<color-base>|currentColor|<system-color>|<device-cmyk()>|<light-dark()>|<-non-standard-color>`, "color()": `color( <colorspace-params> [/ [<alpha-value>|none]]? )`, "color-base": `<hex-color>|<color-function>|<named-color>|<color-mix()>|transparent`, "color-function": `<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hwb()>|<lab()>|<lch()>|<oklab()>|<oklch()>|<color()>`, "color-interpolation-method": `in [<rectangular-color-space>|<polar-color-space> <hue-interpolation-method>?|<custom-color-space>]`, "color-mix()": `color-mix( <color-interpolation-method> , [<color>&&<percentage [0,100]>?]#{2} )`, "color-stop": `<color-stop-length>|<color-stop-angle>`, "color-stop-angle": `[<angle-percentage>|<zero>]{1,2}`, "color-stop-length": `<length-percentage>{1,2}`, "color-stop-list": `<linear-color-stop> , [<linear-color-hint>? , <linear-color-stop>]#?`, "colorspace-params": `[<predefined-rgb-params>|<xyz-params>]`, combinator: `'>'|'+'|'~'|['|' '|']`, "common-lig-values": `[common-ligatures|no-common-ligatures]`, "compat-auto": `searchfield|textarea|checkbox|radio|menulist|listbox|meter|progress-bar|button`, "compat-special": `textfield|menulist-button`, "complex-selector": `<complex-selector-unit> [<combinator>? <complex-selector-unit>]*`, "complex-selector-list": `<complex-selector>#`, "composite-style": `clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor`, "compositing-operator": `add|subtract|intersect|exclude`, "compound-selector": `[<type-selector>? <subclass-selector>*]!`, "compound-selector-list": `<compound-selector>#`, "conic-gradient()": `conic-gradient( [<conic-gradient-syntax>] )`, "conic-gradient-syntax": `[[[from [<angle>|<zero>]]? [at <position>]?]||<color-interpolation-method>]? , <angular-color-stop-list>`, "container-condition": `not <query-in-parens>|<query-in-parens> [[and <query-in-parens>]*|[or <query-in-parens>]*]`, "container-name": `<custom-ident>`, "container-query": `not <query-in-parens>|<query-in-parens> [[and <query-in-parens>]*|[or <query-in-parens>]*]`, "content-distribution": `space-between|space-around|space-evenly|stretch`, "content-list": `[<string>|contents|<image>|<counter>|<quote>|<target>|<leader()>|<attr()>]+`, "content-position": `center|start|end|flex-start|flex-end`, "content-replacement": `<image>`, "contextual-alt-values": `[contextual|no-contextual]`, "contrast()": `contrast( [<number>|<percentage>]? )`, "coord-box": `content-box|padding-box|border-box|fill-box|stroke-box|view-box`, "corner-shape-value": `round|scoop|bevel|notch|square|squircle|<superellipse()>`, "cos()": `cos( <calc-sum> )`, counter: `<counter()>|<counters()>`, "counter()": `counter( <counter-name> , <counter-style>? )`, "counter-name": `<custom-ident>`, "counter-style": `<counter-style-name>|symbols( )`, "counter-style-name": `<custom-ident>`, "counters()": `counters( <counter-name> , <string> , <counter-style>? )`, "cross-fade()": `cross-fade( <cf-mixing-image> , <cf-final-image>? )`, "cubic-bezier()": `cubic-bezier( [<number [0,1]> , <number>]#{2} )`, "cubic-bezier-easing-function": `ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number [0,1]> , <number> , <number [0,1]> , <number> )`, "cursor-predefined": `auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing`, "custom-color-space": `<dashed-ident>`, "custom-params": `<dashed-ident> [<number>|<percentage>|none]+`, dasharray: `[[<length-percentage>|<number>]+]#`, "dashndashdigit-ident": `<ident-token>`, "deprecated-system-color": `ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonHighlight|ButtonShadow|CaptionText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText`, "discretionary-lig-values": `[discretionary-ligatures|no-discretionary-ligatures]`, "display-box": `contents|none`, "display-inside": `flow|flow-root|table|flex|grid|ruby`, "display-internal": `table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container`, "display-legacy": `inline-block|inline-list-item|inline-table|inline-flex|inline-grid`, "display-listitem": `<display-outside>?&&[flow|flow-root]?&&list-item`, "display-outside": `block|inline|run-in`, "drop-shadow()": `drop-shadow( [<color>?&&<length>{2,3}] )`, "dynamic-range-limit-mix()": `dynamic-range-limit-mix( [<'dynamic-range-limit'>&&<percentage [0,100]>]#{2,} )`, "easing-function": `<linear-easing-function>|<cubic-bezier-easing-function>|<step-easing-function>`, "east-asian-variant-values": `[jis78|jis83|jis90|jis04|simplified|traditional]`, "east-asian-width-values": `[full-width|proportional-width]`, "element()": `element( <custom-ident> , [first|start|last|first-except]? )|element( <id-selector> )`, "ellipse()": `ellipse( <radial-size>? [at <position>]? )`, "env()": `env( <custom-ident> , <declaration-value>? )`, "exp()": `exp( <calc-sum> )`, "explicit-track-list": `[<line-names>? <track-size>]+ <line-names>?`, "family-name": `<string>|<custom-ident>+`, "feature-tag-value": `<string> [<integer>|on|off]?`, "feature-type": `@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation`, "feature-value-block": `<feature-type> '{' <feature-value-declaration-list> '}'`, "feature-value-block-list": `<feature-value-block>+`, "feature-value-declaration": `<custom-ident> : <integer>+ ;`, "feature-value-declaration-list": `<feature-value-declaration>`, "feature-value-name": `<custom-ident>`, "filter-function": `<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>`, "filter-value-list": `[<filter-function>|<url>]+`, "final-bg-layer": `<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<visual-box>||<visual-box>||<'background-color'>`, "fit-content()": `fit-content( <length-percentage [0,\u221E]> )`, "fixed-breadth": `<length-percentage>`, "fixed-repeat": `repeat( [<integer [1,\u221E]>] , [<line-names>? <fixed-size>]+ <line-names>? )`, "fixed-size": `<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )`, "font-stretch-absolute": `normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>`, "font-variant-css2": `normal|small-caps`, "font-weight-absolute": `normal|bold|<number [1,1000]>`, "font-width-css3": `normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded`, "form-control-identifier": `select`, "frequency-percentage": `<frequency>|<percentage>`, "generic-complete": `serif|sans-serif|system-ui|cursive|fantasy|math|monospace`, "general-enclosed": `[<function-token> <any-value>? )]|[( <any-value>? )]`, "generic-family": `<generic-script-specific>|<generic-complete>|<generic-incomplete>|<-non-standard-generic-family>`, "generic-incomplete": `ui-serif|ui-sans-serif|ui-monospace|ui-rounded`, "geometry-box": `<shape-box>|fill-box|stroke-box|view-box`, gradient: `<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<repeating-conic-gradient()>|<-legacy-gradient>`, "grayscale()": `grayscale( [<number>|<percentage>]? )`, "grid-line": `auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]`, "historical-lig-values": `[historical-ligatures|no-historical-ligatures]`, "hsl()": `hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )|hsl( [<hue>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )`, "hsla()": `hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )|hsla( [<hue>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )`, hue: `<number>|<angle>`, "hue-interpolation-method": `[shorter|longer|increasing|decreasing] hue`, "hue-rotate()": `hue-rotate( [<angle>|<zero>]? )`, "hwb()": `hwb( [<hue>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )`, "hypot()": `hypot( <calc-sum># )`, image: `<url>|<image()>|<image-set()>|<element()>|<paint()>|<cross-fade()>|<gradient>`, "image()": `image( <image-tags>? [<image-src>? , <color>?]! )`, "image-set()": `image-set( <image-set-option># )`, "image-set-option": `[<image>|<string>] [<resolution>||type( <string> )]`, "image-src": `<url>|<string>`, "image-tags": `ltr|rtl`, "inflexible-breadth": `<length-percentage>|min-content|max-content|auto`, "inset()": `inset( <length-percentage>{1,4} [round <'border-radius'>]? )`, "invert()": `invert( [<number>|<percentage>]? )`, "keyframe-block": `<keyframe-selector># { <declaration-list> }`, "keyframe-selector": `from|to|<percentage [0,100]>|<timeline-range-name> <percentage>`, "keyframes-name": `<custom-ident>|<string>`, "lab()": `lab( [<percentage>|<number>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )`, "layer()": `layer( <layer-name> )`, "layer-name": `<ident> ['.' <ident>]*`, "lch()": `lch( [<percentage>|<number>|none] [<percentage>|<number>|none] [<hue>|none] [/ [<alpha-value>|none]]? )`, "leader()": `leader( <leader-type> )`, "leader-type": `dotted|solid|space|<string>`, "length-percentage": `<length>|<percentage>`, "light-dark()": `light-dark( <color> , <color> )`, "line-name-list": `[<line-names>|<name-repeat>]+`, "line-names": `'[' <custom-ident>* ']'`, "line-style": `none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset`, "line-width": `<length>|thin|medium|thick`, "linear()": `linear( [<number>&&<percentage>{0,2}]# )`, "linear-color-hint": `<length-percentage>`, "linear-color-stop": `<color> <color-stop-length>?`, "linear-easing-function": `linear|<linear()>`, "linear-gradient()": `linear-gradient( [<linear-gradient-syntax>] )`, "linear-gradient-syntax": `[[<angle>|<zero>|to <side-or-corner>]||<color-interpolation-method>]? , <color-stop-list>`, "log()": `log( <calc-sum> , <calc-sum>? )`, "mask-layer": `<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>`, "mask-position": `[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?`, "mask-reference": `none|<image>|<mask-source>`, "mask-source": `<url>`, "masking-mode": `alpha|luminance|match-source`, "matrix()": `matrix( <number>#{6} )`, "matrix3d()": `matrix3d( <number>#{16} )`, "max()": `max( <calc-sum># )`, "media-and": `<media-in-parens> [and <media-in-parens>]+`, "media-condition": `<media-not>|<media-and>|<media-or>|<media-in-parens>`, "media-condition-without-or": `<media-not>|<media-and>|<media-in-parens>`, "media-feature": `( [<mf-plain>|<mf-boolean>|<mf-range>] )`, "media-in-parens": `( <media-condition> )|<media-feature>|<general-enclosed>`, "media-not": `not <media-in-parens>`, "media-or": `<media-in-parens> [or <media-in-parens>]+`, "media-query": `<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?`, "media-query-list": `<media-query>#`, "media-type": `<ident>`, "mf-boolean": `<mf-name>`, "mf-name": `<ident>`, "mf-plain": `<mf-name> : <mf-value>`, "mf-range": `<mf-name> ['<'|'>']? '='? <mf-value>|<mf-value> ['<'|'>']? '='? <mf-name>|<mf-value> '<' '='? <mf-name> '<' '='? <mf-value>|<mf-value> '>' '='? <mf-name> '>' '='? <mf-value>`, "mf-value": `<number>|<dimension>|<ident>|<ratio>`, "min()": `min( <calc-sum># )`, "minmax()": `minmax( [<length-percentage>|min-content|max-content|auto] , [<length-percentage>|<flex>|min-content|max-content|auto] )`, "mod()": `mod( <calc-sum> , <calc-sum> )`, "n-dimension": `<dimension-token>`, "name-repeat": `repeat( [<integer [1,\u221E]>|auto-fill] , <line-names>+ )`, "named-color": `aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen`, "namespace-prefix": `<ident>`, "ndash-dimension": `<dimension-token>`, "ndashdigit-dimension": `<dimension-token>`, "ndashdigit-ident": `<ident-token>`, "ns-prefix": `[<ident-token>|'*']? '|'`, "number-percentage": `<number>|<percentage>`, "numeric-figure-values": `[lining-nums|oldstyle-nums]`, "numeric-fraction-values": `[diagonal-fractions|stacked-fractions]`, "numeric-spacing-values": `[proportional-nums|tabular-nums]`, "offset-path": `<ray()>|<url>|<basic-shape>`, "oklab()": `oklab( [<percentage>|<number>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )`, "oklch()": `oklch( [<percentage>|<number>|none] [<percentage>|<number>|none] [<hue>|none] [/ [<alpha-value>|none]]? )`, "opacity()": `opacity( [<number>|<percentage>]? )`, "opacity-value": `<number>|<percentage>`, "outline-line-style": `none|dotted|dashed|solid|double|groove|ridge|inset|outset`, "outline-radius": `<length>|<percentage>`, "overflow-position": `unsafe|safe`, "page-body": `<declaration>? [; <page-body>]?|<page-margin-box> <page-body>`, "page-margin-box": `<page-margin-box-type> '{' <declaration-list> '}'`, "page-margin-box-type": `@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom`, "page-selector": `<pseudo-page>+|<ident> <pseudo-page>*`, "page-selector-list": `[<page-selector>#]?`, "page-size": `A5|A4|A3|B5|B4|JIS-B5|JIS-B4|letter|legal|ledger`, paint: `none|<color>|<url> [none|<color>]?|context-fill|context-stroke`, "paint()": `paint( <ident> , <declaration-value>? )`, "paint-box": `<visual-box>|fill-box|stroke-box`, "palette-identifier": `<dashed-ident>`, "palette-mix()": `palette-mix( <color-interpolation-method> , [[normal|light|dark|<palette-identifier>|<palette-mix()>]&&<percentage [0,100]>?]#{2} )`, "path()": `path( <'fill-rule'>? , <string> )`, "perspective()": `perspective( [<length [0,\u221E]>|none] )`, "polar-color-space": `hsl|hwb|lch|oklch`, "polygon()": `polygon( <'fill-rule'>? , [<length-percentage> <length-percentage>]# )`, position: `[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]`, "position-area": `[[left|center|right|span-left|span-right|x-start|x-end|span-x-start|span-x-end|x-self-start|x-self-end|span-x-self-start|span-x-self-end|span-all]||[top|center|bottom|span-top|span-bottom|y-start|y-end|span-y-start|span-y-end|y-self-start|y-self-end|span-y-self-start|span-y-self-end|span-all]|[block-start|center|block-end|span-block-start|span-block-end|span-all]||[inline-start|center|inline-end|span-inline-start|span-inline-end|span-all]|[self-block-start|center|self-block-end|span-self-block-start|span-self-block-end|span-all]||[self-inline-start|center|self-inline-end|span-self-inline-start|span-self-inline-end|span-all]|[start|center|end|span-start|span-end|span-all]{1,2}|[self-start|center|self-end|span-self-start|span-self-end|span-all]{1,2}]`, "pow()": `pow( <calc-sum> , <calc-sum> )`, "predefined-rgb": `srgb|srgb-linear|display-p3|display-p3-linear|a98-rgb|prophoto-rgb|rec2020`, "predefined-rgb-params": `<predefined-rgb> [<number>|<percentage>|none]{3}`, "pseudo-class-selector": `':' <ident-token>|':' <function-token> <any-value> ')'`, "pseudo-element-selector": `':' <pseudo-class-selector>|<legacy-pseudo-element-selector>`, "pseudo-page": `: [left|right|first|blank]`, "query-in-parens": `( <container-condition> )|( <size-feature> )|style( <style-query> )|<general-enclosed>`, quote: `open-quote|close-quote|no-open-quote|no-close-quote`, "radial-extent": `closest-corner|closest-side|farthest-corner|farthest-side`, "radial-gradient()": `radial-gradient( [<radial-gradient-syntax>] )`, "radial-gradient-syntax": `[[[<radial-shape>||<radial-size>]? [at <position>]?]||<color-interpolation-method>]? , <color-stop-list>`, "radial-shape": `circle|ellipse`, "radial-size": `<radial-extent>|<length [0,\u221E]>|<length-percentage [0,\u221E]>{2}`, ratio: `<number [0,\u221E]> [/ <number [0,\u221E]>]?`, "ray()": `ray( <angle>&&<ray-size>?&&contain?&&[at <position>]? )`, "ray-size": `closest-side|closest-corner|farthest-side|farthest-corner|sides`, "rect()": `rect( [<length-percentage>|auto]{4} [round <'border-radius'>]? )`, "rectangular-color-space": `srgb|srgb-linear|display-p3|display-p3-linear|a98-rgb|prophoto-rgb|rec2020|lab|oklab|xyz|xyz-d50|xyz-d65`, "relative-selector": `<combinator>? <complex-selector>`, "relative-selector-list": `<relative-selector>#`, "relative-size": `larger|smaller`, "rem()": `rem( <calc-sum> , <calc-sum> )`, "repeat-style": `repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}`, "repeating-conic-gradient()": `repeating-conic-gradient( [<conic-gradient-syntax>] )`, "repeating-linear-gradient()": `repeating-linear-gradient( [<linear-gradient-syntax>] )`, "repeating-radial-gradient()": `repeating-radial-gradient( [<radial-gradient-syntax>] )`, "reversed-counter-name": `reversed( <counter-name> )`, "rgb()": `rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )|rgb( [<number>|<percentage>|none]{3} [/ [<alpha-value>|none]]? )`, "rgba()": `rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )|rgba( [<number>|<percentage>|none]{3} [/ [<alpha-value>|none]]? )`, "rotate()": `rotate( [<angle>|<zero>] )`, "rotate3d()": `rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )`, "rotateX()": `rotateX( [<angle>|<zero>] )`, "rotateY()": `rotateY( [<angle>|<zero>] )`, "rotateZ()": `rotateZ( [<angle>|<zero>] )`, "round()": `round( <rounding-strategy>? , <calc-sum> , <calc-sum> )`, "rounding-strategy": `nearest|up|down|to-zero`, "saturate()": `saturate( [<number>|<percentage>]? )`, "scale()": `scale( [<number>|<percentage>]#{1,2} )`, "scale3d()": `scale3d( [<number>|<percentage>]#{3} )`, "scaleX()": `scaleX( [<number>|<percentage>] )`, "scaleY()": `scaleY( [<number>|<percentage>] )`, "scaleZ()": `scaleZ( [<number>|<percentage>] )`, "scope-end": `<forgiving-selector-list>`, "scope-start": `<forgiving-selector-list>`, "scroll()": `scroll( [<scroller>||<axis>]? )`, scroller: `root|nearest|self`, "scroll-state-feature": `<media-query-list>`, "scroll-state-in-parens": `( <scroll-state-query> )|( <scroll-state-feature> )|<general-enclosed>`, "scroll-state-query": `not <scroll-state-in-parens>|<scroll-state-in-parens> [[and <scroll-state-in-parens>]*|[or <scroll-state-in-parens>]*]|<scroll-state-feature>`, "selector-list": `<complex-selector-list>`, "self-position": `center|start|end|self-start|self-end|flex-start|flex-end`, "sepia()": `sepia( [<number>|<percentage>]? )`, shadow: `inset?&&<length>{2,4}&&<color>?`, "shadow-t": `[<length>{2,3}&&<color>?]`, shape: `rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )`, "shape-box": `<visual-box>|margin-box`, "side-or-corner": `[left|right]||[top|bottom]`, "sign()": `sign( <calc-sum> )`, "signed-integer": `<number-token>`, "signless-integer": `<number-token>`, "sin()": `sin( <calc-sum> )`, "single-animation": `<'animation-duration'>||<easing-function>||<'animation-delay'>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]||<single-animation-timeline>`, "single-animation-composition": `replace|add|accumulate`, "single-animation-direction": `normal|reverse|alternate|alternate-reverse`, "single-animation-fill-mode": `none|forwards|backwards|both`, "single-animation-iteration-count": `infinite|<number>`, "single-animation-play-state": `running|paused`, "single-animation-timeline": `auto|none|<dashed-ident>|<scroll()>|<view()>`, "single-transition": `[none|<single-transition-property>]||<time>||<easing-function>||<time>||<transition-behavior-value>`, "single-transition-property": `all|<custom-ident>`, size: `closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}`, "size-feature": `<mf-plain>|<mf-boolean>|<mf-range>`, "skew()": `skew( [<angle>|<zero>] , [<angle>|<zero>]? )`, "skewX()": `skewX( [<angle>|<zero>] )`, "skewY()": `skewY( [<angle>|<zero>] )`, "sqrt()": `sqrt( <calc-sum> )`, "step-position": `jump-start|jump-end|jump-none|jump-both|start|end`, "step-easing-function": `step-start|step-end|<steps()>`, "steps()": `steps( <integer> , <step-position>? )`, "style-feature": `<declaration>`, "style-in-parens": `( <style-condition> )|( <style-feature> )|<general-enclosed>`, "style-query": `<style-condition>|<style-feature>`, "subclass-selector": `<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>`, "superellipse()": `superellipse( [<number>|infinity|-infinity] )`, "supports-condition": `not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*`, "supports-decl": `( <declaration> )`, "supports-feature": `<supports-decl>|<supports-selector-fn>`, "supports-in-parens": `( <supports-condition> )|<supports-feature>|<general-enclosed>`, "supports-selector-fn": `selector( <complex-selector> )`, symbol: `<string>|<image>|<custom-ident>`, "symbols()": `symbols( <symbols-type>? [<string>|<image>]+ )`, "symbols-type": `cyclic|numeric|alphabetic|symbolic|fixed`, "system-color": `AccentColor|AccentColorText|ActiveText|ButtonBorder|ButtonFace|ButtonText|Canvas|CanvasText|Field|FieldText|GrayText|Highlight|HighlightText|LinkText|Mark|MarkText|SelectedItem|SelectedItemText|VisitedText`, "system-family-name": `caption|icon|menu|message-box|small-caption|status-bar`, "tan()": `tan( <calc-sum> )`, target: `<target-counter()>|<target-counters()>|<target-text()>`, "target-counter()": `target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )`, "target-counters()": `target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )`, "target-text()": `target-text( [<string>|<url>] , [content|before|after|first-letter]? )`, "text-edge": `[text|cap|ex|ideographic|ideographic-ink] [text|alphabetic|ideographic|ideographic-ink]?`, "time-percentage": `<time>|<percentage>`, "timeline-range-name": `cover|contain|entry|exit|entry-crossing|exit-crossing`, "track-breadth": `<length-percentage>|<flex>|min-content|max-content|auto`, "track-list": `[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?`, "track-repeat": `repeat( [<integer [1,\u221E]>] , [<line-names>? <track-size>]+ <line-names>? )`, "track-size": `<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( <length-percentage> )`, "transform-function": `<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>`, "transform-list": `<transform-function>+`, "transition-behavior-value": `normal|allow-discrete`, "translate()": `translate( <length-percentage> , <length-percentage>? )`, "translate3d()": `translate3d( <length-percentage> , <length-percentage> , <length> )`, "translateX()": `translateX( <length-percentage> )`, "translateY()": `translateY( <length-percentage> )`, "translateZ()": `translateZ( <length> )`, "try-size": `most-width|most-height|most-block-size|most-inline-size`, "try-tactic": `flip-block||flip-inline||flip-start`, "type-or-unit": `string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%`, "type-selector": `<wq-name>|<ns-prefix>? '*'`, "var()": `var( <custom-property-name> , <declaration-value>? )`, "view()": `view( [<axis>||<'view-timeline-inset'>]? )`, "viewport-length": `auto|<length-percentage>`, "visual-box": `content-box|padding-box|border-box`, "wq-name": `<ns-prefix>? <ident-token>`, "xywh()": `xywh( <length-percentage>{2} <length-percentage [0,\u221E]>{2} [round <'border-radius'>]? )`, xyz: `xyz|xyz-d50|xyz-d65`, "xyz-params": `<xyz-space> [<number>|<percentage>|none]{3}`, "-legacy-gradient": `<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>`, "-legacy-linear-gradient": `-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )`, "-legacy-repeating-linear-gradient": `-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )`, "-legacy-linear-gradient-arguments": `[<angle>|<side-or-corner>]? , <color-stop-list>`, "-legacy-radial-gradient": `-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )`, "-legacy-repeating-radial-gradient": `-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )`, "-legacy-radial-gradient-arguments": `[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>`, "-legacy-radial-gradient-size": `closest-side|closest-corner|farthest-side|farthest-corner|contain|cover`, "-legacy-radial-gradient-shape": `circle|ellipse`, "-non-standard-font": `-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body`, "-non-standard-color": `-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text`, "-non-standard-image-rendering": `optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast`, "-non-standard-overflow": `overlay|-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable`, "-non-standard-size": `intrinsic|min-intrinsic|-webkit-fill-available|-webkit-fit-content|-webkit-min-content|-webkit-max-content|-moz-available|-moz-fit-content|-moz-min-content|-moz-max-content`, "-webkit-gradient()": `-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )`, "-webkit-gradient-color-stop": `from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )`, "-webkit-gradient-point": `[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]`, "-webkit-gradient-radius": `<length>|<percentage>`, "-webkit-gradient-type": `linear|radial`, "-webkit-mask-box-repeat": `repeat|stretch|round`, "-ms-filter-function-list": `<-ms-filter-function>+`, "-ms-filter-function": `<-ms-filter-function-progid>|<-ms-filter-function-legacy>`, "-ms-filter-function-progid": `'progid:' [<ident-token> '.']* [<ident-token>|<function-token> <any-value>? )]`, "-ms-filter-function-legacy": `<ident-token>|<function-token> <any-value>? )`, age: `child|young|old`, "attr-name": `<wq-name>`, "attr-fallback": `<any-value>`, autospace: `no-autospace|[ideograph-alpha||ideograph-numeric||punctuation]||[insert|replace]`, bottom: `<length>|auto`, "generic-voice": `[<age>? <gender> <integer>?]`, gender: `male|female|neutral`, "generic-script-specific": `generic( kai )|generic( fangsong )|generic( nastaliq )`, "-non-standard-generic-family": `-apple-system|BlinkMacSystemFont`, "intrinsic-size-keyword": `min-content|max-content|fit-content`, left: `<length>|auto`, "device-cmyk()": `<legacy-device-cmyk-syntax>|<modern-device-cmyk-syntax>`, "legacy-device-cmyk-syntax": `device-cmyk( <number>#{4} )`, "modern-device-cmyk-syntax": `device-cmyk( <cmyk-component>{4} [/ [<alpha-value>|none]]? )`, "cmyk-component": `<number>|<percentage>|none`, "color-space": `<rectangular-color-space>|<polar-color-space>|<custom-color-space>`, right: `<length>|auto`, "forgiving-selector-list": `<complex-real-selector-list>`, "forgiving-relative-selector-list": `<relative-real-selector-list>`, "complex-real-selector-list": `<complex-real-selector>#`, "simple-selector-list": `<simple-selector>#`, "relative-real-selector-list": `<relative-real-selector>#`, "complex-selector-unit": `[<compound-selector>? <pseudo-compound-selector>*]!`, "complex-real-selector": `<compound-selector> [<combinator>? <compound-selector>]*`, "relative-real-selector": `<combinator>? <complex-real-selector>`, "pseudo-compound-selector": `<pseudo-element-selector> <pseudo-class-selector>*`, "simple-selector": `<type-selector>|<subclass-selector>`, "legacy-pseudo-element-selector": `':' [before|after|first-line|first-letter]`, "svg-length": `<percentage>|<length>|<number>`, "svg-writing-mode": `lr-tb|rl-tb|tb-rl|lr|rl|tb`, top: `<length>|auto`, x: `<number>`, y: `<number>`, declaration: `<ident-token> : <declaration-value>? ['!' important]?`, "declaration-list": `[<declaration>? ';']* <declaration>?`, url: `url( <string> <url-modifier>* )|<url-token>`, "url-modifier": `<ident>|<function-token> <any-value> )`, "number-zero-one": `<number [0,1]>`, "number-one-or-greater": `<number [1,\u221E]>`, "xyz-space": `xyz|xyz-d50|xyz-d65`, "style-condition": `not <style-in-parens>|<style-in-parens> [[and <style-in-parens>]*|[or <style-in-parens>]*]`, "-non-standard-display": `-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box`, "inset-area": `[[left|center|right|span-left|span-right|x-start|x-end|span-x-start|span-x-end|x-self-start|x-self-end|span-x-self-start|span-x-self-end|span-all]||[top|center|bottom|span-top|span-bottom|y-start|y-end|span-y-start|span-y-end|y-self-start|y-self-end|span-y-self-start|span-y-self-end|span-all]|[block-start|center|block-end|span-block-start|span-block-end|span-all]||[inline-start|center|inline-end|span-inline-start|span-inline-end|span-all]|[self-block-start|self-block-end|span-self-block-start|span-self-block-end|span-all]||[self-inline-start|self-inline-end|span-self-inline-start|span-self-inline-end|span-all]|[start|center|end|span-start|span-end|span-all]{1,2}|[self-start|center|self-end|span-self-start|span-self-end|span-all]{1,2}]`, syntax: `'*'|<syntax-component> [<syntax-combinator> <syntax-component>]*|<syntax-string>`, "syntax-component": `<syntax-single-component> <syntax-multiplier>?|'<' transform-list '>'`, "syntax-single-component": `'<' <syntax-type-name> '>'|<ident>`, "syntax-type-name": `angle|color|custom-ident|image|integer|length|length-percentage|number|percentage|resolution|string|time|url|transform-function`, "syntax-combinator": `'|'`, "syntax-multiplier": `'#'|'+'`, "syntax-string": `<string>` }, properties: { "--*": `<declaration-value>`, "-ms-accelerator": `false|true`, "-ms-block-progression": `tb|rl|bt|lr`, "-ms-content-zoom-chaining": `none|chained`, "-ms-content-zoom-limit": `<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>`, "-ms-content-zoom-limit-max": `<percentage>`, "-ms-content-zoom-limit-min": `<percentage>`, "-ms-content-zoom-snap": `<'-ms-content-zoom-snap-type'>||<'-ms-content-zoom-snap-points'>`, "-ms-content-zoom-snap-points": `snapInterval( <percentage> , <percentage> )|snapList( <percentage># )`, "-ms-content-zoom-snap-type": `none|proximity|mandatory`, "-ms-content-zooming": `none|zoom`, "-ms-filter": `<string>`, "-ms-flow-from": `[none|<custom-ident>]#`, "-ms-flow-into": `[none|<custom-ident>]#`, "-ms-grid-columns": `none|<track-list>|<auto-track-list>`, "-ms-grid-rows": `none|<track-list>|<auto-track-list>`, "-ms-high-contrast-adjust": `auto|none`, "-ms-hyphenate-limit-chars": `auto|<integer>{1,3}`, "-ms-hyphenate-limit-lines": `no-limit|<integer>`, "-ms-hyphenate-limit-zone": `<percentage>|<length>`, "-ms-ime-align": `auto|after`, "-ms-overflow-style": `auto|none|scrollbar|-ms-autohiding-scrollbar`, "-ms-scroll-chaining": `chained|none`, "-ms-scroll-limit": `<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>`, "-ms-scroll-limit-x-max": `auto|<length>`, "-ms-scroll-limit-x-min": `<length>`, "-ms-scroll-limit-y-max": `auto|<length>`, "-ms-scroll-limit-y-min": `<length>`, "-ms-scroll-rails": `none|railed`, "-ms-scroll-snap-points-x": `snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )`, "-ms-scroll-snap-points-y": `snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )`, "-ms-scroll-snap-type": `none|proximity|mandatory`, "-ms-scroll-snap-x": `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>`, "-ms-scroll-snap-y": `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>`, "-ms-scroll-translation": `none|vertical-to-horizontal`, "-ms-scrollbar-3dlight-color": `<color>`, "-ms-scrollbar-arrow-color": `<color>`, "-ms-scrollbar-base-color": `<color>`, "-ms-scrollbar-darkshadow-color": `<color>`, "-ms-scrollbar-face-color": `<color>`, "-ms-scrollbar-highlight-color": `<color>`, "-ms-scrollbar-shadow-color": `<color>`, "-ms-scrollbar-track-color": `<color>`, "-ms-text-autospace": `none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space`, "-ms-touch-select": `grippers|none`, "-ms-user-select": `none|element|text`, "-ms-wrap-flow": `auto|both|start|end|maximum|clear`, "-ms-wrap-margin": `<length>`, "-ms-wrap-through": `wrap|none`, "-moz-appearance": `none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized`, "-moz-binding": `<url>|none`, "-moz-border-bottom-colors": `<color>+|none`, "-moz-border-left-colors": `<color>+|none`, "-moz-border-right-colors": `<color>+|none`, "-moz-border-top-colors": `<color>+|none`, "-moz-context-properties": `none|[fill|fill-opacity|stroke|stroke-opacity]#`, "-moz-float-edge": `border-box|content-box|margin-box|padding-box`, "-moz-force-broken-image-icon": `0|1`, "-moz-orient": `inline|block|horizontal|vertical`, "-moz-outline-radius": `<outline-radius>{1,4} [/ <outline-radius>{1,4}]?`, "-moz-outline-radius-bottomleft": `<outline-radius>`, "-moz-outline-radius-bottomright": `<outline-radius>`, "-moz-outline-radius-topleft": `<outline-radius>`, "-moz-outline-radius-topright": `<outline-radius>`, "-moz-stack-sizing": `ignore|stretch-to-fit`, "-moz-text-blink": `none|blink`, "-moz-user-focus": `ignore|normal|select-after|select-before|select-menu|select-same|select-all|none`, "-moz-user-input": `auto|none|enabled|disabled`, "-moz-user-modify": `read-only|read-write|write-only`, "-moz-window-dragging": `drag|no-drag`, "-moz-window-shadow": `default|menu|tooltip|sheet|none`, "-webkit-appearance": `none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|inner-spin-button|listbox|listitem|media-controls-background|media-controls-fullscreen-background|media-current-time-display|media-enter-fullscreen-button|media-exit-fullscreen-button|media-fullscreen-button|media-mute-button|media-overlay-play-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|media-time-remaining-display|media-toggle-closed-captions-button|media-volume-slider|media-volume-slider-container|media-volume-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|meter|progress-bar|progress-bar-value|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield|-apple-pay-button`, "-webkit-border-before": `<'border-width'>||<'border-style'>||<color>`, "-webkit-border-before-color": `<color>`, "-webkit-border-before-style": `<'border-style'>`, "-webkit-border-before-width": `<'border-width'>`, "-webkit-box-reflect": `[above|below|right|left]? <length>? <image>?`, "-webkit-line-clamp": `none|<integer>`, "-webkit-mask": `[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<visual-box>|border|padding|content|text]||[<visual-box>|border|padding|content]]#`, "-webkit-mask-attachment": `<attachment>#`, "-webkit-mask-clip": `[<coord-box>|no-clip|border|padding|content|text]#`, "-webkit-mask-composite": `<composite-style>#`, "-webkit-mask-image": `<mask-reference>#`, "-webkit-mask-origin": `[<coord-box>|border|padding|content]#`, "-webkit-mask-position": `<position>#`, "-webkit-mask-position-x": `[<length-percentage>|left|center|right]#`, "-webkit-mask-position-y": `[<length-percentage>|top|center|bottom]#`, "-webkit-mask-repeat": `<repeat-style>#`, "-webkit-mask-repeat-x": `repeat|no-repeat|space|round`, "-webkit-mask-repeat-y": `repeat|no-repeat|space|round`, "-webkit-mask-size": `<bg-size>#`, "-webkit-overflow-scrolling": `auto|touch`, "-webkit-tap-highlight-color": `<color>`, "-webkit-text-fill-color": `<color>`, "-webkit-text-stroke": `<length>||<color>`, "-webkit-text-stroke-color": `<color>`, "-webkit-text-stroke-width": `<length>`, "-webkit-touch-callout": `default|none`, "-webkit-user-modify": `read-only|read-write|read-write-plaintext-only`, "-webkit-user-select": `auto|none|text|all`, "accent-color": `auto|<color>`, "align-content": `normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>`, "align-items": `normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]|anchor-center`, "align-self": `auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>|anchor-center`, "align-tracks": `[normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>]#`, "alignment-baseline": `auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical`, all: `initial|inherit|unset|revert|revert-layer`, "anchor-name": `none|<dashed-ident>#`, "anchor-scope": `none|all|<dashed-ident>#`, animation: `<single-animation>#`, "animation-composition": `<single-animation-composition>#`, "animation-delay": `<time>#`, "animation-direction": `<single-animation-direction>#`, "animation-duration": `[auto|<time [0s,\u221E]>]#`, "animation-fill-mode": `<single-animation-fill-mode>#`, "animation-iteration-count": `<single-animation-iteration-count>#`, "animation-name": `[none|<keyframes-name>]#`, "animation-play-state": `<single-animation-play-state>#`, "animation-range": `[<'animation-range-start'> <'animation-range-end'>?]#`, "animation-range-end": `[normal|<length-percentage>|<timeline-range-name> <length-percentage>?]#`, "animation-range-start": `[normal|<length-percentage>|<timeline-range-name> <length-percentage>?]#`, "animation-timeline": `<single-animation-timeline>#`, "animation-timing-function": `<easing-function>#`, "animation-trigger": `[none|[<dashed-ident> <animation-action>+]+]#`, appearance: `none|auto|<compat-auto>|<compat-special>`, "aspect-ratio": `auto||<ratio>`, "backdrop-filter": `none|<filter-value-list>`, "backface-visibility": `visible|hidden`, background: `<bg-layer>#? , <final-bg-layer>`, "background-attachment": `<attachment>#`, "background-blend-mode": `<blend-mode>#`, "background-clip": `<bg-clip>#`, "background-color": `<color>`, "background-image": `<bg-image>#`, "background-origin": `<visual-box>#`, "background-position": `<bg-position>#`, "background-position-x": `[center|[[left|right|x-start|x-end]? <length-percentage>?]!]#`, "background-position-y": `[center|[[top|bottom|y-start|y-end]? <length-percentage>?]!]#`, "background-repeat": `<repeat-style>#`, "background-size": `<bg-size>#`, "baseline-shift": `baseline|sub|super|<svg-length>`, "baseline-source": `auto|first|last`, "block-size": `<'width'>`, border: `<line-width>||<line-style>||<color>`, "border-block": `<'border-block-start'>`, "border-block-color": `<'border-top-color'>{1,2}`, "border-block-end": `<'border-top-width'>||<'border-top-style'>||<color>`, "border-block-end-color": `<'border-top-color'>`, "border-block-end-style": `<'border-top-style'>`, "border-block-end-width": `<'border-top-width'>`, "border-block-start": `<'border-top-width'>||<'border-top-style'>||<color>`, "border-block-start-color": `<'border-top-color'>`, "border-block-start-style": `<'border-top-style'>`, "border-block-start-width": `<'border-top-width'>`, "border-block-style": `<'border-top-style'>{1,2}`, "border-block-width": `<'border-top-width'>{1,2}`, "border-bottom": `<line-width>||<line-style>||<color>`, "border-bottom-color": `<'border-top-color'>`, "border-bottom-left-radius": `<length-percentage [0,\u221E]>{1,2}`, "border-bottom-right-radius": `<length-percentage [0,\u221E]>{1,2}`, "border-bottom-style": `<line-style>`, "border-bottom-width": `<line-width>`, "border-collapse": `separate|collapse`, "border-color": `<color>{1,4}`, "border-end-end-radius": `<'border-top-left-radius'>`, "border-end-start-radius": `<'border-top-left-radius'>`, "border-image": `<'border-image-source'>||<'border-image-slice'> [/ <'border-image-width'>|/ <'border-image-width'>? / <'border-image-outset'>]?||<'border-image-repeat'>`, "border-image-outset": `[<length [0,\u221E]>|<number [0,\u221E]>]{1,4}`, "border-image-repeat": `[stretch|repeat|round|space]{1,2}`, "border-image-slice": `[<number [0,\u221E]>|<percentage [0,\u221E]>]{1,4}&&fill?`, "border-image-source": `none|<image>`, "border-image-width": `[<length-percentage [0,\u221E]>|<number [0,\u221E]>|auto]{1,4}`, "border-inline": `<'border-block-start'>`, "border-inline-color": `<'border-top-color'>{1,2}`, "border-inline-end": `<'border-top-width'>||<'border-top-style'>||<color>`, "border-inline-end-color": `<'border-top-color'>`, "border-inline-end-style": `<'border-top-style'>`, "border-inline-end-width": `<'border-top-width'>`, "border-inline-start": `<'border-top-width'>||<'border-top-style'>||<color>`, "border-inline-start-color": `<'border-top-color'>`, "border-inline-start-style": `<'border-top-style'>`, "border-inline-start-width": `<'border-top-width'>`, "border-inline-style": `<'border-top-style'>{1,2}`, "border-inline-width": `<'border-top-width'>{1,2}`, "border-left": `<line-width>||<line-style>||<color>`, "border-left-color": `<color>`, "border-left-style": `<line-style>`, "border-left-width": `<line-width>`, "border-radius": `<length-percentage [0,\u221E]>{1,4} [/ <length-percentage [0,\u221E]>{1,4}]?`, "border-right": `<line-width>||<line-style>||<color>`, "border-right-color": `<color>`, "border-right-style": `<line-style>`, "border-right-width": `<line-width>`, "border-spacing": `<length>{1,2}`, "border-start-end-radius": `<'border-top-left-radius'>`, "border-start-start-radius": `<'border-top-left-radius'>`, "border-style": `<line-style>{1,4}`, "border-top": `<line-width>||<line-style>||<color>`, "border-top-color": `<color>`, "border-top-left-radius": `<length-percentage [0,\u221E]>{1,2}`, "border-top-right-radius": `<length-percentage [0,\u221E]>{1,2}`, "border-top-style": `<line-style>`, "border-top-width": `<line-width>`, "border-width": `<line-width>{1,4}`, bottom: `auto|<length-percentage>|<anchor()>|<anchor-size()>`, "box-align": `start|center|end|baseline|stretch`, "box-decoration-break": `slice|clone`, "box-direction": `normal|reverse|inherit`, "box-flex": `<number>`, "box-flex-group": `<integer>`, "box-lines": `single|multiple`, "box-ordinal-group": `<integer>`, "box-orient": `horizontal|vertical|inline-axis|block-axis|inherit`, "box-pack": `start|center|end|justify`, "box-shadow": `none|<shadow>#`, "box-sizing": `content-box|border-box`, "break-after": `auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region`, "break-before": `auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region`, "break-inside": `auto|avoid|avoid-page|avoid-column|avoid-region`, "caption-side": `top|bottom`, caret: `<'caret-color'>||<'caret-animation'>||<'caret-shape'>`, "caret-animation": `auto|manual`, "caret-color": `auto|<color>`, "caret-shape": `auto|bar|block|underscore`, clear: `none|left|right|both|inline-start|inline-end`, clip: `<shape>|auto`, "clip-path": `<clip-source>|[<basic-shape>||<geometry-box>]|none`, "clip-rule": `nonzero|evenodd`, color: `<color>`, "color-interpolation-filters": `auto|sRGB|linearRGB`, "color-scheme": `normal|[light|dark|<custom-ident>]+&&only?`, "column-count": `<integer>|auto`, "column-fill": `auto|balance`, "column-gap": `normal|<length-percentage>`, "column-height": `auto|<length [0,\u221E]>`, "column-rule": `<'column-rule-width'>||<'column-rule-style'>||<'column-rule-color'>`, "column-rule-color": `<color>`, "column-rule-style": `<'border-style'>`, "column-rule-width": `<'border-width'>`, "column-span": `none|all`, "column-width": `auto|<length [0,\u221E]>`, "column-wrap": `auto|nowrap|wrap`, columns: `[<'column-width'>||<'column-count'>] [/ <'column-height'>]?`, contain: `none|strict|content|[[size||inline-size]||layout||style||paint]`, "contain-intrinsic-block-size": `auto? [none|<length>]`, "contain-intrinsic-height": `auto? [none|<length>]`, "contain-intrinsic-inline-size": `auto? [none|<length>]`, "contain-intrinsic-size": `[auto? [none|<length>]]{1,2}`, "contain-intrinsic-width": `auto? [none|<length>]`, container: `<'container-name'> [/ <'container-type'>]?`, "container-name": `none|<custom-ident>+`, "container-type": `normal||[size|inline-size]`, content: `normal|none|[<content-replacement>|<content-list>] [/ [<string>|<counter>|<attr()>]+]?`, "content-visibility": `visible|auto|hidden`, "corner-block-end-shape": `<corner-shape-value>{1,2}`, "corner-block-start-shape": `<corner-shape-value>{1,2}`, "corner-bottom-shape": `<corner-shape-value>{1,2}`, "corner-bottom-left-shape": `<corner-shape-value>`, "corner-bottom-right-shape": `<corner-shape-value>`, "corner-end-end-shape": `<corner-shape-value>`, "corner-end-start-shape": `<corner-shape-value>`, "corner-inline-end-shape": `<corner-shape-value>{1,2}`, "corner-inline-start-shape": `<corner-shape-value>{1,2}`, "corner-left-shape": `<corner-shape-value>{1,2}`, "corner-right-shape": `<corner-shape-value>{1,2}`, "corner-shape": `<corner-shape-value>{1,4}`, "corner-start-start-shape": `<corner-shape-value>`, "corner-start-end-shape": `<corner-shape-value>`, "corner-top-shape": `<corner-shape-value>{1,2}`, "corner-top-left-shape": `<corner-shape-value>`, "corner-top-right-shape": `<corner-shape-value>`, "counter-increment": `[<counter-name> <integer>?]+|none`, "counter-reset": `[<counter-name> <integer>?|<reversed-counter-name> <integer>?]+|none`, "counter-set": `[<counter-name> <integer>?]+|none`, cursor: `[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]`, cx: `<length>|<percentage>`, cy: `<length>|<percentage>`, d: `none|path( <string> )`, direction: `ltr|rtl`, display: `[<display-outside>||<display-inside>]|<display-listitem>|<display-internal>|<display-box>|<display-legacy>|<-non-standard-display>`, "dominant-baseline": `auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge`, "dynamic-range-limit": `standard|no-limit|constrained|<dynamic-range-limit-mix()>`, "empty-cells": `show|hide`, "field-sizing": `content|fixed`, fill: `<paint>`, "fill-opacity": `<number-zero-one>|<percentage>`, "fill-rule": `nonzero|evenodd`, filter: `none|<filter-value-list>|<-ms-filter-function-list>`, flex: `none|[<'flex-grow'> <'flex-shrink'>?||<'flex-basis'>]`, "flex-basis": `content|<'width'>`, "flex-direction": `row|row-reverse|column|column-reverse`, "flex-flow": `<'flex-direction'>||<'flex-wrap'>`, "flex-grow": `<number>`, "flex-shrink": `<number>`, "flex-wrap": `nowrap|wrap|wrap-reverse`, float: `left|right|none|inline-start|inline-end`, "flood-color": `<color>`, "flood-opacity": `<'opacity'>`, font: `[[<'font-style'>||<font-variant-css2>||<'font-weight'>||<font-width-css3>]? <'font-size'> [/ <'line-height'>]? <'font-family'>#]|<system-family-name>|<-non-standard-font>`, "font-family": `[<family-name>|<generic-family>]#`, "font-feature-settings": `normal|<feature-tag-value>#`, "font-kerning": `auto|normal|none`, "font-language-override": `normal|<string>`, "font-optical-sizing": `auto|none`, "font-palette": `normal|light|dark|<palette-identifier>|<palette-mix()>`, "font-size": `<absolute-size>|<relative-size>|<length-percentage [0,\u221E]>|math`, "font-size-adjust": `none|[ex-height|cap-height|ch-width|ic-width|ic-height]? [from-font|<number>]`, "font-smooth": `auto|never|always|<absolute-size>|<length>`, "font-stretch": `<font-stretch-absolute>`, "font-style": `normal|italic|oblique <angle>?`, "font-synthesis": `none|[weight||style||small-caps||position]`, "font-synthesis-position": `auto|none`, "font-synthesis-small-caps": `auto|none`, "font-synthesis-style": `auto|none`, "font-synthesis-weight": `auto|none`, "font-variant": `normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]`, "font-variant-alternates": `normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]`, "font-variant-caps": `normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps`, "font-variant-east-asian": `normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]`, "font-variant-emoji": `normal|text|emoji|unicode`, "font-variant-ligatures": `normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]`, "font-variant-numeric": `normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]`, "font-variant-position": `normal|sub|super`, "font-variation-settings": `normal|[<string> <number>]#`, "font-weight": `<font-weight-absolute>|bolder|lighter`, "font-width": `normal|<percentage [0,\u221E]>|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded`, "forced-color-adjust": `auto|none|preserve-parent-color`, gap: `<'row-gap'> <'column-gap'>?`, grid: `<'grid-template'>|<'grid-template-rows'> / [auto-flow&&dense?] <'grid-auto-columns'>?|[auto-flow&&dense?] <'grid-auto-rows'>? / <'grid-template-columns'>`, "grid-area": `<grid-line> [/ <grid-line>]{0,3}`, "grid-auto-columns": `<track-size>+`, "grid-auto-flow": `[row|column]||dense`, "grid-auto-rows": `<track-size>+`, "grid-column": `<grid-line> [/ <grid-line>]?`, "grid-column-end": `<grid-line>`, "grid-column-gap": `<length-percentage>`, "grid-column-start": `<grid-line>`, "grid-gap": `<'grid-row-gap'> <'grid-column-gap'>?`, "grid-row": `<grid-line> [/ <grid-line>]?`, "grid-row-end": `<grid-line>`, "grid-row-gap": `<length-percentage>`, "grid-row-start": `<grid-line>`, "grid-template": `none|[<'grid-template-rows'> / <'grid-template-columns'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?`, "grid-template-areas": `none|<string>+`, "grid-template-columns": `none|<track-list>|<auto-track-list>|subgrid <line-name-list>?`, "grid-template-rows": `none|<track-list>|<auto-track-list>|subgrid <line-name-list>?`, "hanging-punctuation": `none|[first||[force-end|allow-end]||last]`, height: `auto|<length-percentage [0,\u221E]>|min-content|max-content|fit-content|fit-content( <length-percentage [0,\u221E]> )|<calc-size()>|<anchor-size()>|stretch|<-non-standard-size>`, "hyphenate-character": `auto|<string>`, "hyphenate-limit-chars": `[auto|<integer>]{1,3}`, hyphens: `none|manual|auto`, "image-orientation": `from-image|<angle>|[<angle>? flip]`, "image-rendering": `auto|crisp-edges|pixelated|smooth|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>`, "image-resolution": `[from-image||<resolution>]&&snap?`, "ime-mode": `auto|normal|active|inactive|disabled`, "initial-letter": `normal|[<number> <integer>?]`, "initial-letter-align": `[auto|alphabetic|hanging|ideographic]`, "inline-size": `<'width'>`, inset: `<'top'>{1,4}`, "inset-block": `<'top'>{1,2}`, "inset-block-end": `<'top'>`, "inset-block-start": `<'top'>`, "inset-inline": `<'top'>{1,2}`, "inset-inline-end": `<'top'>`, "inset-inline-start": `<'top'>`, "interpolate-size": `numeric-only|allow-keywords`, isolation: `auto|isolate`, interactivity: `auto|inert`, "interest-delay": `<'interest-delay-start'>{1,2}`, "interest-delay-end": `normal|<time>`, "interest-delay-start": `normal|<time>`, "justify-content": `normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]`, "justify-items": `normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]|anchor-center`, "justify-self": `auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|anchor-center`, "justify-tracks": `[normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]]#`, left: `auto|<length-percentage>|<anchor()>|<anchor-size()>`, "letter-spacing": `normal|<length-percentage>`, "lighting-color": `<color>`, "line-break": `auto|loose|normal|strict|anywhere`, "line-clamp": `none|<integer>`, "line-height": `normal|<number>|<length>|<percentage>`, "line-height-step": `<length>`, "list-style": `<'list-style-type'>||<'list-style-position'>||<'list-style-image'>`, "list-style-image": `<image>|none`, "list-style-position": `inside|outside`, "list-style-type": `<counter-style>|<string>|none`, margin: `<'margin-top'>{1,4}`, "margin-block": `<'margin-top'>{1,2}`, "margin-block-end": `<'margin-top'>`, "margin-block-start": `<'margin-top'>`, "margin-bottom": `<length-percentage>|auto|<anchor-size()>`, "margin-inline": `<'margin-top'>{1,2}`, "margin-inline-end": `<'margin-top'>`, "margin-inline-start": `<'margin-top'>`, "margin-left": `<length-percentage>|auto|<anchor-size()>`, "margin-right": `<length-percentage>|auto|<anchor-size()>`, "margin-top": `<length-percentage>|auto|<anchor-size()>`, "margin-trim": `none|in-flow|all`, marker: `none|<url>`, "marker-end": `none|<url>`, "marker-mid": `none|<url>`, "marker-start": `none|<url>`, mask: `<mask-layer>#`, "mask-border": `<'mask-border-source'>||<'mask-border-slice'> [/ <'mask-border-width'>? [/ <'mask-border-outset'>]?]?||<'mask-border-repeat'>||<'mask-border-mode'>`, "mask-border-mode": `luminance|alpha`, "mask-border-outset": `[<length>|<number>]{1,4}`, "mask-border-repeat": `[stretch|repeat|round|space]{1,2}`, "mask-border-slice": `<number-percentage>{1,4} fill?`, "mask-border-source": `none|<image>`, "mask-border-width": `[<length-percentage>|<number>|auto]{1,4}`, "mask-clip": `[<coord-box>|no-clip]#`, "mask-composite": `<compositing-operator>#`, "mask-image": `<mask-reference>#`, "mask-mode": `<masking-mode>#`, "mask-origin": `<coord-box>#`, "mask-position": `<position>#`, "mask-repeat": `<repeat-style>#`, "mask-size": `<bg-size>#`, "mask-type": `luminance|alpha`, "masonry-auto-flow": `[pack|next]||[definite-first|ordered]`, "math-depth": `auto-add|add( <integer> )|<integer>`, "math-shift": `normal|compact`, "math-style": `normal|compact`, "max-block-size": `<'max-width'>`, "max-height": `none|<length-percentage [0,\u221E]>|min-content|max-content|fit-content|fit-content( <length-percentage [0,\u221E]> )|<calc-size()>|<anchor-size()>|stretch|<-non-standard-size>`, "max-inline-size": `<'max-width'>`, "max-lines": `none|<integer>`, "max-width": `none|<length-percentage [0,\u221E]>|min-content|max-content|fit-content|fit-content( <length-percentage [0,\u221E]> )|<calc-size()>|<anchor-size()>|stretch|<-non-standard-size>`, "min-block-size": `<'min-width'>`, "min-height": `auto|<length-percentage [0,\u221E]>|min-content|max-content|fit-content|fit-content( <length-percentage [0,\u221E]> )|<calc-size()>|<anchor-size()>|stretch|<-non-standard-size>`, "min-inline-size": `<'min-width'>`, "min-width": `auto|<length-percentage [0,\u221E]>|min-content|max-content|fit-content|fit-content( <length-percentage [0,\u221E]> )|<calc-size()>|<anchor-size()>|stretch|<-non-standard-size>`, "mix-blend-mode": `<blend-mode>|plus-darker|plus-lighter`, "object-fit": `fill|contain|cover|none|scale-down`, "object-position": `<position>`, "object-view-box": `none|<basic-shape-rect>`, offset: `[<'offset-position'>? [<'offset-path'> [<'offset-distance'>||<'offset-rotate'>]?]?]! [/ <'offset-anchor'>]?`, "offset-anchor": `auto|<position>`, "offset-distance": `<length-percentage>`, "offset-path": `none|<offset-path>||<coord-box>`, "offset-position": `normal|auto|<position>`, "offset-rotate": `[auto|reverse]||<angle>`, opacity: `<opacity-value>`, order: `<integer>`, orphans: `<integer>`, outline: `<'outline-width'>||<'outline-style'>||<'outline-color'>`, "outline-color": `auto|<color>`, "outline-offset": `<length>`, "outline-style": `auto|<outline-line-style>`, "outline-width": `<line-width>`, overflow: `[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>`, "overflow-anchor": `auto|none`, "overflow-block": `visible|hidden|clip|scroll|auto|<-non-standard-overflow>`, "overflow-clip-box": `padding-box|content-box`, "overflow-clip-margin": `<visual-box>||<length [0,\u221E]>`, "overflow-inline": `visible|hidden|clip|scroll|auto|<-non-standard-overflow>`, "overflow-wrap": `normal|break-word|anywhere`, "overflow-x": `visible|hidden|clip|scroll|auto|<-non-standard-overflow>`, "overflow-y": `visible|hidden|clip|scroll|auto|<-non-standard-overflow>`, overlay: `none|auto`, "overscroll-behavior": `[contain|none|auto]{1,2}`, "overscroll-behavior-block": `contain|none|auto`, "overscroll-behavior-inline": `contain|none|auto`, "overscroll-behavior-x": `contain|none|auto`, "overscroll-behavior-y": `contain|none|auto`, padding: `<'padding-top'>{1,4}`, "padding-block": `<'padding-top'>{1,2}`, "padding-block-end": `<'padding-top'>`, "padding-block-start": `<'padding-top'>`, "padding-bottom": `<length-percentage [0,\u221E]>`, "padding-inline": `<'padding-top'>{1,2}`, "padding-inline-end": `<'padding-top'>`, "padding-inline-start": `<'padding-top'>`, "padding-left": `<length-percentage [0,\u221E]>`, "padding-right": `<length-percentage [0,\u221E]>`, "padding-top": `<length-percentage [0,\u221E]>`, page: `auto|<custom-ident>`, "page-break-after": `auto|always|avoid|left|right|recto|verso`, "page-break-before": `auto|always|avoid|left|right|recto|verso`, "page-break-inside": `auto|avoid`, "paint-order": `normal|[fill||stroke||markers]`, perspective: `none|<length>`, "perspective-origin": `<position>`, "place-content": `<'align-content'> <'justify-content'>?`, "place-items": `<'align-items'> <'justify-items'>?`, "place-self": `<'align-self'> <'justify-self'>?`, "pointer-events": `auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit`, position: `static|relative|absolute|sticky|fixed|-webkit-sticky`, "position-anchor": `auto|none|<anchor-name>`, "position-area": `none|<position-area>`, "position-try": `<'position-try-order'>? <'position-try-fallbacks'>`, "position-try-fallbacks": `none|[[<dashed-ident>||<try-tactic>]|<'position-area'>]#`, "position-try-order": `normal|<try-size>`, "position-visibility": `always|[anchors-valid||anchors-visible||no-overflow]`, "print-color-adjust": `economy|exact`, quotes: `none|auto|[<string> <string>]+`, r: `<length>|<percentage>`, "reading-flow": `normal|source-order|flex-visual|flex-flow|grid-rows|grid-columns|grid-order`, "reading-order": `<integer>`, resize: `none|both|horizontal|vertical|block|inline`, right: `auto|<length-percentage>|<anchor()>|<anchor-size()>`, rotate: `none|<angle>|[x|y|z|<number>{3}]&&<angle>`, "row-gap": `normal|<length-percentage>`, "ruby-align": `start|center|space-between|space-around`, "ruby-merge": `separate|collapse|auto`, "ruby-overhang": `auto|none`, "ruby-position": `[alternate||[over|under]]|inter-character`, rx: `<length>|<percentage>`, ry: `<length>|<percentage>`, scale: `none|[<number>|<percentage>]{1,3}`, "scroll-behavior": `auto|smooth`, "scroll-initial-target": `none|nearest`, "scroll-margin": `<length>{1,4}`, "scroll-margin-block": `<length>{1,2}`, "scroll-margin-block-end": `<length>`, "scroll-margin-block-start": `<length>`, "scroll-margin-bottom": `<length>`, "scroll-margin-inline": `<length>{1,2}`, "scroll-margin-inline-end": `<length>`, "scroll-margin-inline-start": `<length>`, "scroll-margin-left": `<length>`, "scroll-margin-right": `<length>`, "scroll-margin-top": `<length>`, "scroll-marker-group": `none|before|after`, "scroll-padding": `[auto|<length-percentage>]{1,4}`, "scroll-padding-block": `[auto|<length-percentage>]{1,2}`, "scroll-padding-block-end": `auto|<length-percentage>`, "scroll-padding-block-start": `auto|<length-percentage>`, "scroll-padding-bottom": `auto|<length-percentage>`, "scroll-padding-inline": `[auto|<length-percentage>]{1,2}`, "scroll-padding-inline-end": `auto|<length-percentage>`, "scroll-padding-inline-start": `auto|<length-percentage>`, "scroll-padding-left": `auto|<length-percentage>`, "scroll-padding-right": `auto|<length-percentage>`, "scroll-padding-top": `auto|<length-percentage>`, "scroll-snap-align": `[none|start|end|center]{1,2}`, "scroll-snap-coordinate": `none|<position>#`, "scroll-snap-destination": `<position>`, "scroll-snap-points-x": `none|repeat( <length-percentage> )`, "scroll-snap-points-y": `none|repeat( <length-percentage> )`, "scroll-snap-stop": `normal|always`, "scroll-snap-type": `none|[x|y|block|inline|both] [mandatory|proximity]?`, "scroll-snap-type-x": `none|mandatory|proximity`, "scroll-snap-type-y": `none|mandatory|proximity`, "scroll-target-group": `none|auto`, "scroll-timeline": `[<'scroll-timeline-name'> <'scroll-timeline-axis'>?]#`, "scroll-timeline-axis": `[block|inline|x|y]#`, "scroll-timeline-name": `[none|<dashed-ident>]#`, "scrollbar-color": `auto|<color>{2}`, "scrollbar-gutter": `auto|stable&&both-edges?`, "scrollbar-width": `auto|thin|none`, "shape-image-threshold": `<opacity-value>`, "shape-margin": `<length-percentage>`, "shape-outside": `none|[<shape-box>||<basic-shape>]|<image>`, "shape-rendering": `auto|optimizeSpeed|crispEdges|geometricPrecision`, "speak-as": `normal|spell-out||digits||[literal-punctuation|no-punctuation]`, "stop-color": `<'color'>`, "stop-opacity": `<'opacity'>`, stroke: `<paint>`, "stroke-color": `<color>`, "stroke-dasharray": `none|[<svg-length>+]#`, "stroke-dashoffset": `<svg-length>`, "stroke-linecap": `butt|round|square`, "stroke-linejoin": `miter|round|bevel`, "stroke-miterlimit": `<number-one-or-greater>`, "stroke-opacity": `<'opacity'>`, "stroke-width": `<svg-length>`, "tab-size": `<integer>|<length>`, "table-layout": `auto|fixed`, "text-align": `start|end|left|right|center|justify|match-parent`, "text-align-last": `auto|start|end|left|right|center|justify`, "text-anchor": `start|middle|end`, "text-autospace": `normal|<autospace>|auto`, "text-box": `normal|<'text-box-trim'>||<'text-box-edge'>`, "text-box-edge": `auto|<text-edge>`, "text-box-trim": `none|trim-start|trim-end|trim-both`, "text-combine-upright": `none|all|[digits <integer>?]`, "text-decoration": `<'text-decoration-line'>||<'text-decoration-style'>||<'text-decoration-color'>||<'text-decoration-thickness'>`, "text-decoration-color": `<color>`, "text-decoration-inset": `<length>{1,2}|auto`, "text-decoration-line": `none|[underline||overline||line-through||blink]|spelling-error|grammar-error`, "text-decoration-skip": `none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]`, "text-decoration-skip-ink": `auto|all|none`, "text-decoration-style": `solid|double|dotted|dashed|wavy`, "text-decoration-thickness": `auto|from-font|<length>|<percentage>`, "text-emphasis": `<'text-emphasis-style'>||<'text-emphasis-color'>`, "text-emphasis-color": `<color>`, "text-emphasis-position": `auto|[over|under]&&[right|left]?`, "text-emphasis-style": `none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>`, "text-indent": `<length-percentage>&&hanging?&&each-line?`, "text-justify": `auto|inter-character|inter-word|none`, "text-orientation": `mixed|upright|sideways`, "text-overflow": `[clip|ellipsis|<string>]{1,2}`, "text-rendering": `auto|optimizeSpeed|optimizeLegibility|geometricPrecision`, "text-shadow": `none|<shadow-t>#`, "text-size-adjust": `none|auto|<percentage>`, "text-spacing-trim": `space-all|normal|space-first|trim-start`, "text-transform": `none|[capitalize|uppercase|lowercase]||full-width||full-size-kana|math-auto`, "text-underline-offset": `auto|<length>|<percentage>`, "text-underline-position": `auto|from-font|[under||[left|right]]`, "text-wrap": `<'text-wrap-mode'>||<'text-wrap-style'>`, "text-wrap-mode": `wrap|nowrap`, "text-wrap-style": `auto|balance|stable|pretty`, "timeline-scope": `none|<dashed-ident>#`, "timeline-trigger": `none|[<'timeline-trigger-name'> <'timeline-trigger-source'> <'timeline-trigger-range'> ['/' <'timeline-trigger-exit-range'>]?]#`, "timeline-trigger-name": `none|<dashed-ident>#`, "timeline-trigger-exit-range": `[<'timeline-trigger-exit-range-start'> <'timeline-trigger-exit-range-end'>?]#`, "timeline-trigger-exit-range-end": `[auto|normal|<length-percentage>|<timeline-range-name> <length-percentage>?]#`, "timeline-trigger-exit-range-start": `[auto|normal|<length-percentage>|<timeline-range-name> <length-percentage>?]#`, "timeline-trigger-range": `[<'timeline-trigger-range-start'> <'timeline-trigger-range-end'>?]#`, "timeline-trigger-range-end": `[normal|<length-percentage>|<timeline-range-name> <length-percentage>?]#`, "timeline-trigger-range-start": `[normal|<length-percentage>|<timeline-range-name> <length-percentage>?]#`, "timeline-trigger-source": `<single-animation-timeline>#`, top: `auto|<length-percentage>|<anchor()>|<anchor-size()>`, "touch-action": `auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation`, transform: `none|<transform-list>`, "transform-box": `content-box|border-box|fill-box|stroke-box|view-box`, "transform-origin": `[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?`, "transform-style": `flat|preserve-3d`, transition: `<single-transition>#`, "transition-behavior": `<transition-behavior-value>#`, "transition-delay": `<time>#`, "transition-duration": `<time>#`, "transition-property": `none|<single-transition-property>#`, "transition-timing-function": `<easing-function>#`, translate: `none|<length-percentage> [<length-percentage> <length>?]?`, "trigger-scope": `none|all|<dashed-ident>#`, "unicode-bidi": `normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate|-webkit-isolate-override|-webkit-plaintext`, "user-select": `auto|text|none|all`, "vector-effect": `none|non-scaling-stroke|non-scaling-size|non-rotation|fixed-position`, "vertical-align": `baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>`, "view-timeline": `[<'view-timeline-name'> [<'view-timeline-axis'>||<'view-timeline-inset'>]?]#`, "view-timeline-axis": `[block|inline|x|y]#`, "view-timeline-inset": `[[auto|<length-percentage>]{1,2}]#`, "view-timeline-name": `[none|<dashed-ident>]#`, "view-transition-class": `none|<custom-ident>+`, "view-transition-name": `none|<custom-ident>|match-element`, visibility: `visible|hidden|collapse`, "white-space": `normal|pre|pre-wrap|pre-line|<'white-space-collapse'>||<'text-wrap-mode'>`, "white-space-collapse": `collapse|preserve|preserve-breaks|preserve-spaces|break-spaces`, widows: `<integer>`, width: `auto|<length-percentage [0,\u221E]>|min-content|max-content|fit-content|fit-content( <length-percentage [0,\u221E]> )|<calc-size()>|<anchor-size()>|stretch|<-non-standard-size>`, "will-change": `auto|<animateable-feature>#`, "word-break": `normal|break-all|keep-all|break-word|auto-phrase`, "word-spacing": `normal|<length>`, "word-wrap": `normal|break-word`, "writing-mode": `horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>`, x: `<length>|<percentage>`, y: `<length>|<percentage>`, "z-index": `auto|<integer>`, zoom: `normal|reset|<number [0,\u221E]>||<percentage [0,\u221E]>`, "-moz-background-clip": `padding|border`, "-moz-border-radius-bottomleft": `<'border-bottom-left-radius'>`, "-moz-border-radius-bottomright": `<'border-bottom-right-radius'>`, "-moz-border-radius-topleft": `<'border-top-left-radius'>`, "-moz-border-radius-topright": `<'border-bottom-right-radius'>`, "-moz-control-character-visibility": `visible|hidden`, "-moz-osx-font-smoothing": `auto|grayscale`, "-moz-user-select": `none|text|all|-moz-none`, "-ms-flex-align": `start|end|center|baseline|stretch`, "-ms-flex-item-align": `auto|start|end|center|baseline|stretch`, "-ms-flex-line-pack": `start|end|center|justify|distribute|stretch`, "-ms-flex-negative": `<'flex-shrink'>`, "-ms-flex-pack": `start|end|center|justify|distribute`, "-ms-flex-order": `<integer>`, "-ms-flex-positive": `<'flex-grow'>`, "-ms-flex-preferred-size": `<'flex-basis'>`, "-ms-interpolation-mode": `nearest-neighbor|bicubic`, "-ms-grid-column-align": `start|end|center|stretch`, "-ms-grid-row-align": `start|end|center|stretch`, "-ms-hyphenate-limit-last": `none|always|column|page|spread`, "-webkit-background-clip": `[<visual-box>|border|padding|content|text]#`, "-webkit-column-break-after": `always|auto|avoid`, "-webkit-column-break-before": `always|auto|avoid`, "-webkit-column-break-inside": `always|auto|avoid`, "-webkit-font-smoothing": `auto|none|antialiased|subpixel-antialiased`, "-webkit-mask-box-image": `[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?`, "-webkit-print-color-adjust": `economy|exact`, "-webkit-text-security": `none|circle|disc|square`, "-webkit-user-drag": `none|element|auto`, behavior: `<url>+`, cue: `<'cue-before'> <'cue-after'>?`, "cue-after": `<url> <decibel>?|none`, "cue-before": `<url> <decibel>?|none`, "glyph-orientation-horizontal": `<angle>`, "glyph-orientation-vertical": `<angle>`, kerning: `auto|<svg-length>`, pause: `<'pause-before'> <'pause-after'>?`, "pause-after": `<time>|none|x-weak|weak|medium|strong|x-strong`, "pause-before": `<time>|none|x-weak|weak|medium|strong|x-strong`, "position-try-options": `<'position-try-fallbacks'>`, rest: `<'rest-before'> <'rest-after'>?`, "rest-after": `<time>|none|x-weak|weak|medium|strong|x-strong`, "rest-before": `<time>|none|x-weak|weak|medium|strong|x-strong`, speak: `auto|never|always`, "voice-balance": `<number>|left|center|right|leftwards|rightwards`, "voice-duration": `auto|<time>`, "voice-family": `[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve`, "voice-pitch": `<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]`, "voice-range": `<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]`, "voice-rate": `[normal|x-slow|slow|medium|fast|x-fast]||<percentage>`, "voice-stress": `normal|strong|moderate|none|reduced`, "voice-volume": `silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]`, "white-space-trim": `none|discard-before||discard-after||discard-inner` }, atrules: { charset: { prelude: `<string>`, descriptors: null }, "counter-style": { prelude: `<counter-style-name>`, descriptors: { "additive-symbols": `[<integer [0,\u221E]>&&<symbol>]#`, fallback: `<counter-style-name>`, negative: `<symbol> <symbol>?`, pad: `<integer [0,\u221E]>&&<symbol>`, prefix: `<symbol>`, range: `[[<integer>|infinite]{2}]#|auto`, "speak-as": `auto|bullets|numbers|words|spell-out|<counter-style-name>`, suffix: `<symbol>`, symbols: `<symbol>+`, system: `cyclic|numeric|alphabetic|symbolic|additive|[fixed <integer>?]|[extends <counter-style-name>]` } }, container: { prelude: `[<container-name>]? <container-condition>`, descriptors: null }, document: { prelude: `[<url>|url-prefix( <string> )|domain( <string> )|media-document( <string> )|regexp( <string> )]#`, descriptors: null }, "font-face": { prelude: null, descriptors: { "ascent-override": `normal|<percentage>`, "descent-override": `normal|<percentage>`, "font-display": `auto|block|swap|fallback|optional`, "font-family": `<family-name>`, "font-feature-settings": `normal|<feature-tag-value>#`, "font-stretch": `<font-stretch-absolute>{1,2}`, "font-style": `normal|italic|oblique <angle>{0,2}`, "font-variation-settings": `normal|[<string> <number>]#`, "font-weight": `<font-weight-absolute>{1,2}`, "line-gap-override": `normal|<percentage>`, "size-adjust": `<percentage>`, src: `[<url> [format( <string># )]?|local( <family-name> )]#`, "unicode-range": `<urange>#` } }, "font-feature-values": { prelude: `<family-name>#`, descriptors: null }, "font-palette-values": { prelude: `<dashed-ident>`, descriptors: { "base-palette": `light|dark|<integer [0,\u221E]>`, "font-family": `<family-name>#`, "override-colors": `[<integer [0,\u221E]> <color>]#` } }, import: { prelude: `[<string>|<url>] [layer|layer( <layer-name> )]? [supports( [<supports-condition>|<declaration>] )]? <media-query-list>?`, descriptors: null }, keyframes: { prelude: `<keyframes-name>`, descriptors: null }, layer: { prelude: `[<layer-name>#|<layer-name>?]`, descriptors: null }, media: { prelude: `<media-query-list>`, descriptors: null }, namespace: { prelude: `<namespace-prefix>? [<string>|<url>]`, descriptors: null }, page: { prelude: `<page-selector-list>`, descriptors: { bleed: `auto|<length>`, marks: `none|[crop||cross]`, "page-orientation": `upright|rotate-left|rotate-right`, size: `<length [0,\u221E]>{1,2}|auto|[<page-size>||[portrait|landscape]]` } }, "position-try": { prelude: `<dashed-ident>`, descriptors: { top: `<'top'>`, left: `<'left'>`, bottom: `<'bottom'>`, right: `<'right'>`, "inset-block-start": `<'inset-block-start'>`, "inset-block-end": `<'inset-block-end'>`, "inset-inline-start": `<'inset-inline-start'>`, "inset-inline-end": `<'inset-inline-end'>`, "inset-block": `<'inset-block'>`, "inset-inline": `<'inset-inline'>`, inset: `<'inset'>`, "margin-top": `<'margin-top'>`, "margin-left": `<'margin-left'>`, "margin-bottom": `<'margin-bottom'>`, "margin-right": `<'margin-right'>`, "margin-block-start": `<'margin-block-start'>`, "margin-block-end": `<'margin-block-end'>`, "margin-inline-start": `<'margin-inline-start'>`, "margin-inline-end": `<'margin-inline-end'>`, margin: `<'margin'>`, "margin-block": `<'margin-block'>`, "margin-inline": `<'margin-inline'>`, width: `<'width'>`, height: `<'height'>`, "min-width": `<'min-width'>`, "min-height": `<'min-height'>`, "max-width": `<'max-width'>`, "max-height": `<'max-height'>`, "block-size": `<'block-size'>`, "inline-size": `<'inline-size'>`, "min-block-size": `<'min-block-size'>`, "min-inline-size": `<'min-inline-size'>`, "max-block-size": `<'max-block-size'>`, "max-inline-size": `<'max-inline-size'>`, "align-self": `<'align-self'>|anchor-center`, "justify-self": `<'justify-self'>|anchor-center` } }, property: { prelude: `<custom-property-name>`, descriptors: { inherits: `true|false`, "initial-value": `<declaration-value>?`, syntax: `<string>` } }, scope: { prelude: `[( <scope-start> )]? [to ( <scope-end> )]?`, descriptors: null }, "starting-style": { prelude: null, descriptors: null }, supports: { prelude: `<supports-condition>`, descriptors: null }, "view-transition": { prelude: null, descriptors: { navigation: `auto|none`, types: `none|<custom-ident>+` } }, "font-features-values": { prelude: `[<string>|<custom-ident>]+`, descriptors: { "font-display": `auto|block|swap|fallback|optional` } } } }, Ii = e({ generate: () => Gi, name: () => Hi, parse: () => Wi, structure: () => Ui }), Y = 43, X = 45, Li = 110, Z = true, Ri = false;
function zi(e3, t2) {
  let n2 = this.tokenStart + e3, r2 = this.charCodeAt(n2);
  for ((r2 === Y || r2 === X) && (t2 && this.error(`Number sign is not allowed`), n2++); n2 < this.tokenEnd; n2++) i(this.charCodeAt(n2)) || this.error(`Integer is expected`, n2);
}
function Bi(e3) {
  return zi.call(this, 0, e3);
}
function Q(e3, t2) {
  if (!this.cmpChar(this.tokenStart + e3, t2)) {
    let n2 = ``;
    switch (t2) {
      case Li:
        n2 = `N is expected`;
        break;
      case X:
        n2 = `HyphenMinus is expected`;
        break;
    }
    this.error(n2, this.tokenStart + e3);
  }
}
function Vi() {
  let e3 = 0, t2 = 0, n2 = this.tokenType;
  for (; n2 === 13 || n2 === 25; ) n2 = this.lookupType(++e3);
  if (n2 !== 10) if (this.isDelim(Y, e3) || this.isDelim(X, e3)) {
    t2 = this.isDelim(Y, e3) ? Y : X;
    do
      n2 = this.lookupType(++e3);
    while (n2 === 13 || n2 === 25);
    n2 !== 10 && (this.skip(e3), Bi.call(this, Z));
  } else return null;
  return e3 > 0 && this.skip(e3), t2 === 0 && (n2 = this.charCodeAt(this.tokenStart), n2 !== Y && n2 !== X && this.error(`Number sign is expected`)), Bi.call(this, t2 !== 0), t2 === X ? `-` + this.consume(10) : this.consume(10);
}
var Hi = `AnPlusB`, Ui = { a: [String, null], b: [String, null] };
function Wi() {
  let e3 = this.tokenStart, t2 = null, n2 = null;
  if (this.tokenType === 10) Bi.call(this, Ri), n2 = this.consume(10);
  else if (this.tokenType === 1 && this.cmpChar(this.tokenStart, X)) switch (t2 = `-1`, Q.call(this, 1, Li), this.tokenEnd - this.tokenStart) {
    case 2:
      this.next(), n2 = Vi.call(this);
      break;
    case 3:
      Q.call(this, 2, X), this.next(), this.skipSC(), Bi.call(this, Z), n2 = `-` + this.consume(10);
      break;
    default:
      Q.call(this, 2, X), zi.call(this, 3, Z), this.next(), n2 = this.substrToCursor(e3 + 2);
  }
  else if (this.tokenType === 1 || this.isDelim(Y) && this.lookupType(1) === 1) {
    let r2 = 0;
    switch (t2 = `1`, this.isDelim(Y) && (r2 = 1, this.next()), Q.call(this, 0, Li), this.tokenEnd - this.tokenStart) {
      case 1:
        this.next(), n2 = Vi.call(this);
        break;
      case 2:
        Q.call(this, 1, X), this.next(), this.skipSC(), Bi.call(this, Z), n2 = `-` + this.consume(10);
        break;
      default:
        Q.call(this, 1, X), zi.call(this, 2, Z), this.next(), n2 = this.substrToCursor(e3 + r2 + 1);
    }
  } else if (this.tokenType === 12) {
    let r2 = this.charCodeAt(this.tokenStart), a2 = r2 === Y || r2 === X, o2 = this.tokenStart + a2;
    for (; o2 < this.tokenEnd && i(this.charCodeAt(o2)); o2++) ;
    o2 === this.tokenStart + a2 && this.error(`Integer is expected`, this.tokenStart + a2), Q.call(this, o2 - this.tokenStart, Li), t2 = this.substring(e3, o2), o2 + 1 === this.tokenEnd ? (this.next(), n2 = Vi.call(this)) : (Q.call(this, o2 - this.tokenStart + 1, X), o2 + 2 === this.tokenEnd ? (this.next(), this.skipSC(), Bi.call(this, Z), n2 = `-` + this.consume(10)) : (zi.call(this, o2 - this.tokenStart + 2, Z), this.next(), n2 = this.substrToCursor(o2 + 1)));
  } else this.error();
  return t2 !== null && t2.charCodeAt(0) === Y && (t2 = t2.substr(1)), n2 !== null && n2.charCodeAt(0) === Y && (n2 = n2.substr(1)), { type: `AnPlusB`, loc: this.getLocation(e3, this.tokenStart), a: t2, b: n2 };
}
function Gi(e3) {
  if (e3.a) {
    let t2 = e3.a === `+1` && `n` || e3.a === `1` && `n` || e3.a === `-1` && `-n` || e3.a + `n`;
    if (e3.b) {
      let n2 = e3.b[0] === `-` || e3.b[0] === `+` ? e3.b : `+` + e3.b;
      this.tokenize(t2 + n2);
    } else this.tokenize(t2);
  } else this.tokenize(e3.b);
}
var Ki = e({ generate: () => $i, name: () => Yi, parse: () => Qi, structure: () => Zi, walkContext: () => Xi });
function qi() {
  return this.Raw(this.consumeUntilLeftCurlyBracketOrSemicolon, true);
}
function Ji() {
  for (let e3 = 1, t2; t2 = this.lookupType(e3); e3++) {
    if (t2 === 24) return true;
    if (t2 === 23 || t2 === 3) return false;
  }
  return false;
}
var Yi = `Atrule`, Xi = `atrule`, Zi = { name: String, prelude: [`AtrulePrelude`, `Raw`, null], block: [`Block`, null] };
function Qi(e3 = false) {
  let t2 = this.tokenStart, n2, r2, i2 = null, a2 = null;
  switch (this.eat(3), n2 = this.substrToCursor(t2 + 1), r2 = n2.toLowerCase(), this.skipSC(), this.eof === false && this.tokenType !== 23 && this.tokenType !== 17 && (i2 = this.parseAtrulePrelude ? this.parseWithFallback(this.AtrulePrelude.bind(this, n2, e3), qi) : qi.call(this, this.tokenIndex), this.skipSC()), this.tokenType) {
    case 17:
      this.next();
      break;
    case 23:
      a2 = hasOwnProperty.call(this.atrule, r2) && typeof this.atrule[r2].block == `function` ? this.atrule[r2].block.call(this, e3) : this.Block(Ji.call(this));
      break;
  }
  return { type: `Atrule`, loc: this.getLocation(t2, this.tokenStart), name: n2, prelude: i2, block: a2 };
}
function $i(e3) {
  this.token(3, `@` + e3.name), e3.prelude !== null && this.node(e3.prelude), e3.block ? this.node(e3.block) : this.token(17, `;`);
}
var ea = e({ generate: () => aa, name: () => ta, parse: () => ia, structure: () => ra, walkContext: () => na }), ta = `AtrulePrelude`, na = `atrulePrelude`, ra = { children: [[]] };
function ia(e3) {
  let t2 = null;
  return e3 !== null && (e3 = e3.toLowerCase()), this.skipSC(), t2 = hasOwnProperty.call(this.atrule, e3) && typeof this.atrule[e3].prelude == `function` ? this.atrule[e3].prelude.call(this) : this.readSequence(this.scope.AtrulePrelude), this.skipSC(), this.eof !== true && this.tokenType !== 23 && this.tokenType !== 17 && this.error(`Semicolon or block is expected`), { type: `AtrulePrelude`, loc: this.getLocationFromList(t2), children: t2 };
}
function aa(e3) {
  this.children(e3);
}
var oa = e({ generate: () => va, name: () => ha, parse: () => _a, structure: () => ga }), sa = 36, ca = 42, la = 61, ua = 94, da = 124, fa = 126;
function pa() {
  this.eof && this.error(`Unexpected end of input`);
  let e3 = this.tokenStart, t2 = false;
  return this.isDelim(ca) ? (t2 = true, this.next()) : this.isDelim(da) || this.eat(1), this.isDelim(da) ? this.charCodeAt(this.tokenStart + 1) === la ? t2 && this.error(`Identifier is expected`, this.tokenEnd) : (this.next(), this.eat(1)) : t2 && this.error(`Vertical line is expected`), { type: `Identifier`, loc: this.getLocation(e3, this.tokenStart), name: this.substrToCursor(e3) };
}
function ma() {
  let e3 = this.tokenStart, t2 = this.charCodeAt(e3);
  return t2 !== la && t2 !== fa && t2 !== ua && t2 !== sa && t2 !== ca && t2 !== da && this.error(`Attribute selector (=, ~=, ^=, $=, *=, |=) is expected`), this.next(), t2 !== la && (this.isDelim(la) || this.error(`Equal sign is expected`), this.next()), this.substrToCursor(e3);
}
var ha = `AttributeSelector`, ga = { name: `Identifier`, matcher: [String, null], value: [`String`, `Identifier`, null], flags: [String, null] };
function _a() {
  let e3 = this.tokenStart, t2, n2 = null, r2 = null, i2 = null;
  return this.eat(19), this.skipSC(), t2 = pa.call(this), this.skipSC(), this.tokenType !== 20 && (this.tokenType !== 1 && (n2 = ma.call(this), this.skipSC(), r2 = this.tokenType === 5 ? this.String() : this.Identifier(), this.skipSC()), this.tokenType === 1 && (i2 = this.consume(1), this.skipSC())), this.eat(20), { type: `AttributeSelector`, loc: this.getLocation(e3, this.tokenStart), name: t2, matcher: n2, value: r2, flags: i2 };
}
function va(e3) {
  this.token(9, `[`), this.node(e3.name), e3.matcher !== null && (this.tokenize(e3.matcher), this.node(e3.value)), e3.flags !== null && this.token(1, e3.flags), this.token(9, `]`);
}
var ya = e({ generate: () => ka, name: () => Ta, parse: () => Oa, structure: () => Da, walkContext: () => Ea }), ba = 38;
function xa() {
  return this.Raw(null, true);
}
function Sa() {
  return this.parseWithFallback(this.Rule, xa);
}
function Ca() {
  return this.Raw(this.consumeUntilSemicolonIncluded, true);
}
function wa() {
  if (this.tokenType === 17) return Ca.call(this, this.tokenIndex);
  let e3 = this.parseWithFallback(this.Declaration, Ca);
  return this.tokenType === 17 && this.next(), e3;
}
var Ta = `Block`, Ea = `block`, Da = { children: [[`Atrule`, `Rule`, `Declaration`]] };
function Oa(e3) {
  let t2 = e3 ? wa : Sa, n2 = this.tokenStart, r2 = this.createList();
  this.eat(23);
  scan: for (; !this.eof; ) switch (this.tokenType) {
    case 24:
      break scan;
    case 13:
    case 25:
      this.next();
      break;
    case 3:
      r2.push(this.parseWithFallback(this.Atrule.bind(this, e3), xa));
      break;
    default:
      e3 && this.isDelim(ba) ? r2.push(Sa.call(this)) : r2.push(t2.call(this));
  }
  return this.eof || this.eat(24), { type: `Block`, loc: this.getLocation(n2, this.tokenStart), children: r2 };
}
function ka(e3) {
  this.token(23, `{`), this.children(e3, (e4) => {
    e4.type === `Declaration` && this.token(17, `;`);
  }), this.token(24, `}`);
}
var Aa = e({ generate: () => Pa, name: () => ja, parse: () => Na, structure: () => Ma }), ja = `Brackets`, Ma = { children: [[]] };
function Na(e3, t2) {
  let n2 = this.tokenStart, r2 = null;
  return this.eat(19), r2 = e3.call(this, t2), this.eof || this.eat(20), { type: `Brackets`, loc: this.getLocation(n2, this.tokenStart), children: r2 };
}
function Pa(e3) {
  this.token(9, `[`), this.children(e3), this.token(9, `]`);
}
var Fa = e({ generate: () => Ra, name: () => `CDC`, parse: () => La, structure: () => Ia }), Ia = [];
function La() {
  let e3 = this.tokenStart;
  return this.eat(15), { type: `CDC`, loc: this.getLocation(e3, this.tokenStart) };
}
function Ra() {
  this.token(15, `-->`);
}
var za = e({ generate: () => Ha, name: () => `CDO`, parse: () => Va, structure: () => Ba }), Ba = [];
function Va() {
  let e3 = this.tokenStart;
  return this.eat(14), { type: `CDO`, loc: this.getLocation(e3, this.tokenStart) };
}
function Ha() {
  this.token(14, `<!--`);
}
var Ua = e({ generate: () => Ja, name: () => Ga, parse: () => qa, structure: () => Ka }), Wa = 46, Ga = `ClassSelector`, Ka = { name: String };
function qa() {
  return this.eatDelim(Wa), { type: `ClassSelector`, loc: this.getLocation(this.tokenStart - 1, this.tokenEnd), name: this.consume(1) };
}
function Ja(e3) {
  this.token(9, `.`), this.token(1, e3.name);
}
var Ya = e({ generate: () => ro, name: () => eo, parse: () => no, structure: () => to }), Xa = 43, Za = 47, Qa = 62, $a = 126, eo = `Combinator`, to = { name: String };
function no() {
  let e3 = this.tokenStart, t2;
  switch (this.tokenType) {
    case 13:
      t2 = ` `;
      break;
    case 9:
      switch (this.charCodeAt(this.tokenStart)) {
        case Qa:
        case Xa:
        case $a:
          this.next();
          break;
        case Za:
          this.next(), this.eatIdent(`deep`), this.eatDelim(Za);
          break;
        default:
          this.error(`Combinator is expected`);
      }
      t2 = this.substrToCursor(e3);
      break;
  }
  return { type: `Combinator`, loc: this.getLocation(e3, this.tokenStart), name: t2 };
}
function ro(e3) {
  this.tokenize(e3.name);
}
var io = e({ generate: () => uo, name: () => so, parse: () => lo, structure: () => co }), ao = 42, oo = 47, so = `Comment`, co = { value: String };
function lo() {
  let e3 = this.tokenStart, t2 = this.tokenEnd;
  return this.eat(25), t2 - e3 + 2 >= 2 && this.charCodeAt(t2 - 2) === ao && this.charCodeAt(t2 - 1) === oo && (t2 -= 2), { type: `Comment`, loc: this.getLocation(e3, this.tokenStart), value: this.substring(e3 + 2, t2) };
}
function uo(e3) {
  this.token(25, `/*` + e3.value + `*/`);
}
var fo = e({ generate: () => yo, name: () => mo, parse: () => vo, structure: () => ho }), po = /* @__PURE__ */ new Set([16, 22, 0]), mo = `Condition`, ho = { kind: String, children: [[`Identifier`, `Feature`, `FeatureFunction`, `FeatureRange`, `SupportsDeclaration`]] };
function go(e3) {
  return this.lookupTypeNonSC(1) === 1 && po.has(this.lookupTypeNonSC(2)) ? this.Feature(e3) : this.FeatureRange(e3);
}
var _o = { media: go, container: go, supports() {
  return this.SupportsDeclaration();
} };
function vo(e3 = `media`) {
  let t2 = this.createList();
  scan: for (; !this.eof; ) switch (this.tokenType) {
    case 25:
    case 13:
      this.next();
      continue;
    case 1:
      t2.push(this.Identifier());
      break;
    case 21: {
      let n2 = this.parseWithFallback(() => _o[e3].call(this, e3), () => null);
      n2 || (n2 = this.parseWithFallback(() => {
        this.eat(21);
        let t3 = this.Condition(e3);
        return this.eat(22), t3;
      }, () => this.GeneralEnclosed(e3))), t2.push(n2);
      break;
    }
    case 2: {
      let n2 = this.parseWithFallback(() => this.FeatureFunction(e3), () => null);
      n2 || (n2 = this.GeneralEnclosed(e3)), t2.push(n2);
      break;
    }
    default:
      break scan;
  }
  return t2.isEmpty && this.error(`Condition is expected`), { type: `Condition`, loc: this.getLocationFromList(t2), kind: e3, children: t2 };
}
function yo(e3) {
  e3.children.forEach((e4) => {
    e4.type === `Condition` ? (this.token(21, `(`), this.node(e4), this.token(22, `)`)) : this.node(e4);
  });
}
var bo = e({ generate: () => Fo, name: () => jo, parse: () => Po, structure: () => No, walkContext: () => Mo }), xo = 33, So = 35, Co = 36, wo = 38, To = 42, Eo = 43, Do = 47;
function Oo() {
  return this.Raw(this.consumeUntilExclamationMarkOrSemicolon, true);
}
function ko() {
  return this.Raw(this.consumeUntilExclamationMarkOrSemicolon, false);
}
function Ao() {
  let e3 = this.tokenIndex, t2 = this.Value();
  return t2.type !== `Raw` && this.eof === false && this.tokenType !== 17 && this.isDelim(xo) === false && this.isBalanceEdge(e3) === false && this.error(), t2;
}
var jo = `Declaration`, Mo = `declaration`, No = { important: [Boolean, String], property: String, value: [`Value`, `Raw`] };
function Po() {
  let e3 = this.tokenStart, t2 = this.tokenIndex, n2 = Io.call(this), r2 = Ot(n2), i2 = r2 ? this.parseCustomProperty : this.parseValue, a2 = r2 ? ko : Oo, o2 = false, s2;
  this.skipSC(), this.eat(16);
  let c2 = this.tokenIndex;
  if (r2 || this.skipSC(), s2 = i2 ? this.parseWithFallback(Ao, a2) : a2.call(this, this.tokenIndex), r2 && s2.type === `Value` && s2.children.isEmpty) {
    for (let e4 = c2 - this.tokenIndex; e4 <= 0; e4++) if (this.lookupType(e4) === 13) {
      s2.children.appendData({ type: `WhiteSpace`, loc: null, value: ` ` });
      break;
    }
  }
  return this.isDelim(xo) && (o2 = Lo.call(this), this.skipSC()), this.eof === false && this.tokenType !== 17 && this.isBalanceEdge(t2) === false && this.error(), { type: `Declaration`, loc: this.getLocation(e3, this.tokenStart), important: o2, property: n2, value: s2 };
}
function Fo(e3) {
  this.token(1, e3.property), this.token(16, `:`), this.node(e3.value), e3.important && (this.token(9, `!`), this.token(1, e3.important === true ? `important` : e3.important));
}
function Io() {
  let e3 = this.tokenStart;
  if (this.tokenType === 9) switch (this.charCodeAt(this.tokenStart)) {
    case To:
    case Co:
    case Eo:
    case So:
    case wo:
      this.next();
      break;
    case Do:
      this.next(), this.isDelim(Do) && this.next();
      break;
  }
  return this.tokenType === 4 ? this.eat(4) : this.eat(1), this.substrToCursor(e3);
}
function Lo() {
  this.eat(9), this.skipSC();
  let e3 = this.consume(1);
  return e3 === `important` ? true : e3;
}
var Ro = e({ generate: () => Wo, name: () => Vo, parse: () => Uo, structure: () => Ho }), zo = 38;
function Bo() {
  return this.Raw(this.consumeUntilSemicolonIncluded, true);
}
var Vo = `DeclarationList`, Ho = { children: [[`Declaration`, `Atrule`, `Rule`]] };
function Uo() {
  let e3 = this.createList();
  scan: for (; !this.eof; ) switch (this.tokenType) {
    case 13:
    case 25:
    case 17:
      this.next();
      break;
    case 3:
      e3.push(this.parseWithFallback(this.Atrule.bind(this, true), Bo));
      break;
    default:
      this.isDelim(zo) ? e3.push(this.parseWithFallback(this.Rule, Bo)) : e3.push(this.parseWithFallback(this.Declaration, Bo));
  }
  return { type: `DeclarationList`, loc: this.getLocationFromList(e3), children: e3 };
}
function Wo(e3) {
  this.children(e3, (e4) => {
    e4.type === `Declaration` && this.token(17, `;`);
  });
}
var Go = e({ generate: () => Yo, name: () => Ko, parse: () => Jo, structure: () => qo }), Ko = `Dimension`, qo = { value: String, unit: String };
function Jo() {
  let e3 = this.tokenStart, t2 = this.consumeNumber(12);
  return { type: `Dimension`, loc: this.getLocation(e3, this.tokenStart), value: t2, unit: this.substring(e3 + t2.length, this.tokenStart) };
}
function Yo(e3) {
  this.token(12, e3.value + e3.unit);
}
var Xo = e({ generate: () => ts, name: () => Qo, parse: () => es, structure: () => $o }), Zo = 47, Qo = `Feature`, $o = { kind: String, name: String, value: [`Identifier`, `Number`, `Dimension`, `Ratio`, `Function`, null] };
function es(e3) {
  let t2 = this.tokenStart, n2, r2 = null;
  if (this.eat(21), this.skipSC(), n2 = this.consume(1), this.skipSC(), this.tokenType !== 22) {
    switch (this.eat(16), this.skipSC(), this.tokenType) {
      case 10:
        r2 = this.lookupNonWSType(1) === 9 ? this.Ratio() : this.Number();
        break;
      case 12:
        r2 = this.Dimension();
        break;
      case 1:
        r2 = this.Identifier();
        break;
      case 2:
        r2 = this.parseWithFallback(() => {
          let e4 = this.Function(this.readSequence, this.scope.Value);
          return this.skipSC(), this.isDelim(Zo) && this.error(), e4;
        }, () => this.Ratio());
        break;
      default:
        this.error(`Number, dimension, ratio or identifier is expected`);
    }
    this.skipSC();
  }
  return this.eof || this.eat(22), { type: `Feature`, loc: this.getLocation(t2, this.tokenStart), kind: e3, name: n2, value: r2 };
}
function ts(e3) {
  this.token(21, `(`), this.token(1, e3.name), e3.value !== null && (this.token(16, `:`), this.node(e3.value)), this.token(22, `)`);
}
var ns = e({ generate: () => ss, name: () => rs, parse: () => os, structure: () => is }), rs = `FeatureFunction`, is = { kind: String, feature: String, value: [`Declaration`, `Selector`] };
function as(e3, t2) {
  let n2 = (this.features[e3] || {})[t2];
  return typeof n2 != `function` && this.error(`Unknown feature ${t2}()`), n2;
}
function os(e3 = `unknown`) {
  let t2 = this.tokenStart, n2 = this.consumeFunctionName(), r2 = as.call(this, e3, n2.toLowerCase());
  this.skipSC();
  let i2 = this.parseWithFallback(() => {
    let e4 = this.tokenIndex, t3 = r2.call(this);
    return this.eof === false && this.isBalanceEdge(e4) === false && this.error(), t3;
  }, () => this.Raw(null, false));
  return this.eof || this.eat(22), { type: `FeatureFunction`, loc: this.getLocation(t2, this.tokenStart), kind: e3, feature: n2, value: i2 };
}
function ss(e3) {
  this.token(2, e3.feature + `(`), this.node(e3.value), this.token(22, `)`);
}
var cs = e({ generate: () => vs, name: () => ps, parse: () => _s, structure: () => ms }), ls = 47, us = 60, ds = 61, fs = 62, ps = `FeatureRange`, ms = { kind: String, left: [`Identifier`, `Number`, `Dimension`, `Ratio`, `Function`], leftComparison: String, middle: [`Identifier`, `Number`, `Dimension`, `Ratio`, `Function`], rightComparison: [String, null], right: [`Identifier`, `Number`, `Dimension`, `Ratio`, `Function`, null] };
function hs() {
  switch (this.skipSC(), this.tokenType) {
    case 10:
      return this.isDelim(ls, this.lookupOffsetNonSC(1)) ? this.Ratio() : this.Number();
    case 12:
      return this.Dimension();
    case 1:
      return this.Identifier();
    case 2:
      return this.parseWithFallback(() => {
        let e3 = this.Function(this.readSequence, this.scope.Value);
        return this.skipSC(), this.isDelim(ls) && this.error(), e3;
      }, () => this.Ratio());
    default:
      this.error(`Number, dimension, ratio or identifier is expected`);
  }
}
function gs(e3) {
  if (this.skipSC(), this.isDelim(us) || this.isDelim(fs)) {
    let e4 = this.source[this.tokenStart];
    return this.next(), this.isDelim(ds) ? (this.next(), e4 + `=`) : e4;
  }
  if (this.isDelim(ds)) return `=`;
  this.error(`Expected ${e3 ? `":", ` : ``}"<", ">", "=" or ")"`);
}
function _s(e3 = `unknown`) {
  let t2 = this.tokenStart;
  this.skipSC(), this.eat(21);
  let n2 = hs.call(this), r2 = gs.call(this, n2.type === `Identifier`), i2 = hs.call(this), a2 = null, o2 = null;
  return this.lookupNonWSType(0) !== 22 && (a2 = gs.call(this), o2 = hs.call(this)), this.skipSC(), this.eat(22), { type: `FeatureRange`, loc: this.getLocation(t2, this.tokenStart), kind: e3, left: n2, leftComparison: r2, middle: i2, rightComparison: a2, right: o2 };
}
function vs(e3) {
  this.token(21, `(`), this.node(e3.left), this.tokenize(e3.leftComparison), this.node(e3.middle), e3.right && (this.tokenize(e3.rightComparison), this.node(e3.right)), this.token(22, `)`);
}
var ys = e({ generate: () => ws, name: () => bs, parse: () => Cs, structure: () => Ss, walkContext: () => xs }), bs = `Function`, xs = `function`, Ss = { name: String, children: [[]] };
function Cs(e3, t2) {
  let n2 = this.tokenStart, r2 = this.consumeFunctionName(), i2 = r2.toLowerCase(), a2;
  return a2 = t2.hasOwnProperty(i2) ? t2[i2].call(this, t2) : e3.call(this, t2), this.eof || this.eat(22), { type: `Function`, loc: this.getLocation(n2, this.tokenStart), name: r2, children: a2 };
}
function ws(e3) {
  this.token(2, e3.name + `(`), this.children(e3), this.token(22, `)`);
}
var Ts = e({ generate: () => ks, name: () => Es, parse: () => Os, structure: () => Ds }), Es = `GeneralEnclosed`, Ds = { kind: String, function: [String, null], children: [[]] };
function Os(e3) {
  let t2 = this.tokenStart, n2 = null;
  this.tokenType === 2 ? n2 = this.consumeFunctionName() : this.eat(21);
  let r2 = this.parseWithFallback(() => {
    let e4 = this.tokenIndex, t3 = this.readSequence(this.scope.Value);
    return this.eof === false && this.isBalanceEdge(e4) === false && this.error(), t3;
  }, () => this.createSingleNodeList(this.Raw(null, false)));
  return this.eof || this.eat(22), { type: `GeneralEnclosed`, loc: this.getLocation(t2, this.tokenStart), kind: e3, function: n2, children: r2 };
}
function ks(e3) {
  e3.function ? this.token(2, e3.function + `(`) : this.token(21, `(`), this.children(e3), this.token(22, `)`);
}
var As = e({ generate: () => Ps, name: () => js, parse: () => Ns, structure: () => Ms, xxx: () => `XXX` }), js = `Hash`, Ms = { value: String };
function Ns() {
  let e3 = this.tokenStart;
  return this.eat(4), { type: `Hash`, loc: this.getLocation(e3, this.tokenStart), value: this.substrToCursor(e3 + 1) };
}
function Ps(e3) {
  this.token(4, `#` + e3.value);
}
var Fs = e({ generate: () => zs, name: () => Is, parse: () => Rs, structure: () => Ls }), Is = `Identifier`, Ls = { name: String };
function Rs() {
  return { type: `Identifier`, loc: this.getLocation(this.tokenStart, this.tokenEnd), name: this.consume(1) };
}
function zs(e3) {
  this.token(1, e3.name);
}
var Bs = e({ generate: () => Ws, name: () => Vs, parse: () => Us, structure: () => Hs }), Vs = `IdSelector`, Hs = { name: String };
function Us() {
  let e3 = this.tokenStart;
  return this.eat(4), { type: `IdSelector`, loc: this.getLocation(e3, this.tokenStart), name: this.substrToCursor(e3 + 1) };
}
function Ws(e3) {
  this.token(9, `#` + e3.name);
}
var Gs = e({ generate: () => Xs, name: () => qs, parse: () => Ys, structure: () => Js }), Ks = 46, qs = `Layer`, Js = { name: String };
function Ys() {
  let e3 = this.tokenStart, t2 = this.consume(1);
  for (; this.isDelim(Ks); ) this.eat(9), t2 += `.` + this.consume(1);
  return { type: `Layer`, loc: this.getLocation(e3, this.tokenStart), name: t2 };
}
function Xs(e3) {
  this.tokenize(e3.name);
}
var Zs = e({ generate: () => tc, name: () => Qs, parse: () => ec, structure: () => $s }), Qs = `LayerList`, $s = { children: [[`Layer`]] };
function ec() {
  let e3 = this.createList();
  for (this.skipSC(); !this.eof && (e3.push(this.Layer()), this.lookupTypeNonSC(0) === 18); ) this.skipSC(), this.next(), this.skipSC();
  return { type: `LayerList`, loc: this.getLocationFromList(e3), children: e3 };
}
function tc(e3) {
  this.children(e3, () => this.token(18, `,`));
}
var nc = e({ generate: () => oc, name: () => rc, parse: () => ac, structure: () => ic }), rc = `MediaQuery`, ic = { modifier: [String, null], mediaType: [String, null], condition: [`Condition`, null] };
function ac() {
  let e3 = this.tokenStart, t2 = null, n2 = null, r2 = null;
  if (this.skipSC(), this.tokenType === 1 && this.lookupTypeNonSC(1) !== 21) {
    let e4 = this.consume(1), i2 = e4.toLowerCase();
    switch (i2 === `not` || i2 === `only` ? (this.skipSC(), t2 = i2, n2 = this.consume(1)) : n2 = e4, this.lookupTypeNonSC(0)) {
      case 1:
        this.skipSC(), this.eatIdent(`and`), r2 = this.Condition(`media`);
        break;
      case 23:
      case 17:
      case 18:
      case 0:
        break;
      default:
        this.error(`Identifier or parenthesis is expected`);
    }
  } else switch (this.tokenType) {
    case 1:
    case 21:
    case 2:
      r2 = this.Condition(`media`);
      break;
    case 23:
    case 17:
    case 0:
      break;
    default:
      this.error(`Identifier or parenthesis is expected`);
  }
  return { type: `MediaQuery`, loc: this.getLocation(e3, this.tokenStart), modifier: t2, mediaType: n2, condition: r2 };
}
function oc(e3) {
  e3.mediaType ? (e3.modifier && this.token(1, e3.modifier), this.token(1, e3.mediaType), e3.condition && (this.token(1, `and`), this.node(e3.condition))) : e3.condition && this.node(e3.condition);
}
var sc = e({ generate: () => dc, name: () => cc, parse: () => uc, structure: () => lc }), cc = `MediaQueryList`, lc = { children: [[`MediaQuery`]] };
function uc() {
  let e3 = this.createList();
  for (this.skipSC(); !this.eof && (e3.push(this.MediaQuery()), this.tokenType === 18); ) this.next();
  return { type: `MediaQueryList`, loc: this.getLocationFromList(e3), children: e3 };
}
function dc(e3) {
  this.children(e3, () => this.token(18, `,`));
}
var fc = e({ generate: () => _c, name: () => mc, parse: () => gc, structure: () => hc }), pc = 38, mc = `NestingSelector`, hc = {};
function gc() {
  let e3 = this.tokenStart;
  return this.eatDelim(pc), { type: `NestingSelector`, loc: this.getLocation(e3, this.tokenStart) };
}
function _c() {
  this.token(9, `&`);
}
var vc = e({ generate: () => xc, name: () => `Nth`, parse: () => bc, structure: () => yc }), yc = { nth: [`AnPlusB`, `Identifier`], selector: [`SelectorList`, null] };
function bc() {
  this.skipSC();
  let e3 = this.tokenStart, t2 = e3, n2 = null, r2;
  return r2 = this.lookupValue(0, `odd`) || this.lookupValue(0, `even`) ? this.Identifier() : this.AnPlusB(), t2 = this.tokenStart, this.skipSC(), this.lookupValue(0, `of`) && (this.next(), n2 = this.SelectorList(), t2 = this.tokenStart), { type: `Nth`, loc: this.getLocation(e3, t2), nth: r2, selector: n2 };
}
function xc(e3) {
  this.node(e3.nth), e3.selector !== null && (this.token(1, `of`), this.node(e3.selector));
}
var Sc = e({ generate: () => Ec, name: () => Cc, parse: () => Tc, structure: () => wc }), Cc = `Number`, wc = { value: String };
function Tc() {
  return { type: `Number`, loc: this.getLocation(this.tokenStart, this.tokenEnd), value: this.consume(10) };
}
function Ec(e3) {
  this.token(10, e3.value);
}
var Dc = e({ generate: () => jc, name: () => Oc, parse: () => Ac, structure: () => kc }), Oc = `Operator`, kc = { value: String };
function Ac() {
  let e3 = this.tokenStart;
  return this.next(), { type: `Operator`, loc: this.getLocation(e3, this.tokenStart), value: this.substrToCursor(e3) };
}
function jc(e3) {
  this.tokenize(e3.value);
}
var Mc = e({ generate: () => Ic, name: () => Nc, parse: () => Fc, structure: () => Pc }), Nc = `Parentheses`, Pc = { children: [[]] };
function Fc(e3, t2) {
  let n2 = this.tokenStart, r2 = null;
  return this.eat(21), r2 = e3.call(this, t2), this.eof || this.eat(22), { type: `Parentheses`, loc: this.getLocation(n2, this.tokenStart), children: r2 };
}
function Ic(e3) {
  this.token(21, `(`), this.children(e3), this.token(22, `)`);
}
var Lc = e({ generate: () => Vc, name: () => Rc, parse: () => Bc, structure: () => zc }), Rc = `Percentage`, zc = { value: String };
function Bc() {
  return { type: `Percentage`, loc: this.getLocation(this.tokenStart, this.tokenEnd), value: this.consumeNumber(11) };
}
function Vc(e3) {
  this.token(11, e3.value + `%`);
}
var Hc = e({ generate: () => qc, name: () => Uc, parse: () => Kc, structure: () => Gc, walkContext: () => Wc }), Uc = `PseudoClassSelector`, Wc = `function`, Gc = { name: String, children: [[`Raw`], null] };
function Kc() {
  let e3 = this.tokenStart, t2 = null, n2, r2;
  return this.eat(16), this.tokenType === 2 ? (n2 = this.consumeFunctionName(), r2 = n2.toLowerCase(), this.lookupNonWSType(0) == 22 ? t2 = this.createList() : hasOwnProperty.call(this.pseudo, r2) ? (this.skipSC(), t2 = this.pseudo[r2].call(this), this.skipSC()) : (t2 = this.createList(), t2.push(this.Raw(null, false))), this.eat(22)) : n2 = this.consume(1), { type: `PseudoClassSelector`, loc: this.getLocation(e3, this.tokenStart), name: n2, children: t2 };
}
function qc(e3) {
  this.token(16, `:`), e3.children === null ? this.token(1, e3.name) : (this.token(2, e3.name + `(`), this.children(e3), this.token(22, `)`));
}
var Jc = e({ generate: () => $c, name: () => Yc, parse: () => Qc, structure: () => Zc, walkContext: () => Xc }), Yc = `PseudoElementSelector`, Xc = `function`, Zc = { name: String, children: [[`Raw`], null] };
function Qc() {
  let e3 = this.tokenStart, t2 = null, n2, r2;
  return this.eat(16), this.eat(16), this.tokenType === 2 ? (n2 = this.consumeFunctionName(), r2 = n2.toLowerCase(), this.lookupNonWSType(0) == 22 ? t2 = this.createList() : hasOwnProperty.call(this.pseudo, r2) ? (this.skipSC(), t2 = this.pseudo[r2].call(this), this.skipSC()) : (t2 = this.createList(), t2.push(this.Raw(null, false))), this.eat(22)) : n2 = this.consume(1), { type: `PseudoElementSelector`, loc: this.getLocation(e3, this.tokenStart), name: n2, children: t2 };
}
function $c(e3) {
  this.token(16, `:`), this.token(16, `:`), e3.children === null ? this.token(1, e3.name) : (this.token(2, e3.name + `(`), this.children(e3), this.token(22, `)`));
}
var el = e({ generate: () => ol, name: () => rl, parse: () => al, structure: () => il }), tl = 47;
function nl() {
  switch (this.skipSC(), this.tokenType) {
    case 10:
      return this.Number();
    case 2:
      return this.Function(this.readSequence, this.scope.Value);
    default:
      this.error(`Number of function is expected`);
  }
}
var rl = `Ratio`, il = { left: [`Number`, `Function`], right: [`Number`, `Function`, null] };
function al() {
  let e3 = this.tokenStart, t2 = nl.call(this), n2 = null;
  return this.skipSC(), this.isDelim(tl) && (this.eatDelim(tl), n2 = nl.call(this)), { type: `Ratio`, loc: this.getLocation(e3, this.tokenStart), left: t2, right: n2 };
}
function ol(e3) {
  this.node(e3.left), this.token(9, `/`), e3.right ? this.node(e3.right) : this.node(10, 1);
}
var sl = e({ generate: () => dl, name: () => `Raw`, parse: () => ul, structure: () => ll });
function cl() {
  return this.tokenIndex > 0 && this.lookupType(-1) === 13 ? this.tokenIndex > 1 ? this.getTokenStart(this.tokenIndex - 1) : this.firstCharOffset : this.tokenStart;
}
var ll = { value: String };
function ul(e3, t2) {
  let n2 = this.getTokenStart(this.tokenIndex), r2;
  return this.skipUntilBalanced(this.tokenIndex, e3 || this.consumeUntilBalanceEnd), r2 = t2 && this.tokenStart > n2 ? cl.call(this) : this.tokenStart, { type: `Raw`, loc: this.getLocation(n2, r2), value: this.substring(n2, r2) };
}
function dl(e3) {
  this.tokenize(e3.value);
}
var fl = e({ generate: () => yl, name: () => hl, parse: () => vl, structure: () => _l, walkContext: () => gl });
function pl() {
  return this.Raw(this.consumeUntilLeftCurlyBracket, true);
}
function ml() {
  let e3 = this.SelectorList();
  return e3.type !== `Raw` && this.eof === false && this.tokenType !== 23 && this.error(), e3;
}
var hl = `Rule`, gl = `rule`, _l = { prelude: [`SelectorList`, `Raw`], block: [`Block`] };
function vl() {
  let e3 = this.tokenIndex, t2 = this.tokenStart, n2, r2;
  return n2 = this.parseRulePrelude ? this.parseWithFallback(ml, pl) : pl.call(this, e3), r2 = this.Block(true), { type: `Rule`, loc: this.getLocation(t2, this.tokenStart), prelude: n2, block: r2 };
}
function yl(e3) {
  this.node(e3.prelude), this.node(e3.block);
}
var bl = e({ generate: () => wl, name: () => xl, parse: () => Cl, structure: () => Sl }), xl = `Scope`, Sl = { root: [`SelectorList`, `Raw`, null], limit: [`SelectorList`, `Raw`, null] };
function Cl() {
  let e3 = null, t2 = null;
  this.skipSC();
  let n2 = this.tokenStart;
  return this.tokenType === 21 && (this.next(), this.skipSC(), e3 = this.parseWithFallback(this.SelectorList, () => this.Raw(false, true)), this.skipSC(), this.eat(22)), this.lookupNonWSType(0) === 1 && (this.skipSC(), this.eatIdent(`to`), this.skipSC(), this.eat(21), this.skipSC(), t2 = this.parseWithFallback(this.SelectorList, () => this.Raw(false, true)), this.skipSC(), this.eat(22)), { type: `Scope`, loc: this.getLocation(n2, this.tokenStart), root: e3, limit: t2 };
}
function wl(e3) {
  e3.root && (this.token(21, `(`), this.node(e3.root), this.token(22, `)`)), e3.limit && (this.token(1, `to`), this.token(21, `(`), this.node(e3.limit), this.token(22, `)`));
}
var Tl = e({ generate: () => kl, name: () => El, parse: () => Ol, structure: () => Dl }), El = `Selector`, Dl = { children: [[`TypeSelector`, `IdSelector`, `ClassSelector`, `AttributeSelector`, `PseudoClassSelector`, `PseudoElementSelector`, `Combinator`]] };
function Ol() {
  let e3 = this.readSequence(this.scope.Selector);
  return this.getFirstListNode(e3) === null && this.error(`Selector is expected`), { type: `Selector`, loc: this.getLocationFromList(e3), children: e3 };
}
function kl(e3) {
  this.children(e3);
}
var Al = e({ generate: () => Fl, name: () => jl, parse: () => Pl, structure: () => Nl, walkContext: () => Ml }), jl = `SelectorList`, Ml = `selector`, Nl = { children: [[`Selector`, `Raw`]] };
function Pl() {
  let e3 = this.createList();
  for (; !this.eof; ) {
    if (e3.push(this.Selector()), this.tokenType === 18) {
      this.next();
      continue;
    }
    break;
  }
  return { type: `SelectorList`, loc: this.getLocationFromList(e3), children: e3 };
}
function Fl(e3) {
  this.children(e3, () => this.token(18, `,`));
}
var Il = e({ decode: () => Bl, encode: () => Vl }), Ll = 92, Rl = 34, zl = 39;
function Bl(e3) {
  let t2 = e3.length, n2 = e3.charCodeAt(0), r2 = n2 === Rl || n2 === zl ? 1 : 0, i2 = r2 === 1 && t2 > 1 && e3.charCodeAt(t2 - 1) === n2 ? t2 - 2 : t2 - 1, a2 = ``;
  for (let n3 = r2; n3 <= i2; n3++) {
    let r3 = e3.charCodeAt(n3);
    if (r3 === Ll) {
      if (n3 === i2) {
        n3 !== t2 - 1 && (a2 = e3.substr(n3 + 1));
        break;
      }
      if (r3 = e3.charCodeAt(++n3), h(Ll, r3)) {
        let t3 = n3 - 1, r4 = C(e3, t3);
        n3 = r4 - 1, a2 += ce(e3.substring(t3 + 1, r4));
      } else r3 === 13 && e3.charCodeAt(n3 + 1) === 10 && n3++;
    } else a2 += e3[n3];
  }
  return a2;
}
function Vl(e3, t2) {
  let n2 = t2 ? `'` : `"`, r2 = t2 ? zl : Rl, i2 = ``, o2 = false;
  for (let t3 = 0; t3 < e3.length; t3++) {
    let n3 = e3.charCodeAt(t3);
    if (n3 === 0) {
      i2 += `\uFFFD`;
      continue;
    }
    if (n3 <= 31 || n3 === 127) {
      i2 += `\\` + n3.toString(16), o2 = true;
      continue;
    }
    n3 === r2 || n3 === Ll ? (i2 += `\\` + e3.charAt(t3), o2 = false) : (o2 && (a(n3) || m(n3)) && (i2 += ` `), i2 += e3.charAt(t3), o2 = false);
  }
  return n2 + i2 + n2;
}
var Hl = e({ generate: () => Kl, name: () => Ul, parse: () => Gl, structure: () => Wl }), Ul = `String`, Wl = { value: String };
function Gl() {
  return { type: `String`, loc: this.getLocation(this.tokenStart, this.tokenEnd), value: Bl(this.consume(5)) };
}
function Kl(e3) {
  this.token(5, Vl(e3.value));
}
var ql = e({ generate: () => eu, name: () => Xl, parse: () => $l, structure: () => Ql, walkContext: () => Zl }), Jl = 33;
function Yl() {
  return this.Raw(null, false);
}
var Xl = `StyleSheet`, Zl = `stylesheet`, Ql = { children: [[`Comment`, `CDO`, `CDC`, `Atrule`, `Rule`, `Raw`]] };
function $l() {
  let e3 = this.tokenStart, t2 = this.createList(), n2;
  scan: for (; !this.eof; ) {
    switch (this.tokenType) {
      case 13:
        this.next();
        continue;
      case 25:
        if (this.charCodeAt(this.tokenStart + 2) !== Jl) {
          this.next();
          continue;
        }
        n2 = this.Comment();
        break;
      case 14:
        n2 = this.CDO();
        break;
      case 15:
        n2 = this.CDC();
        break;
      case 3:
        n2 = this.parseWithFallback(this.Atrule, Yl);
        break;
      default:
        n2 = this.parseWithFallback(this.Rule, Yl);
    }
    t2.push(n2);
  }
  return { type: `StyleSheet`, loc: this.getLocation(e3, this.tokenStart), children: t2 };
}
function eu(e3) {
  this.children(e3);
}
var tu = e({ generate: () => au, name: () => nu, parse: () => iu, structure: () => ru }), nu = `SupportsDeclaration`, ru = { declaration: `Declaration` };
function iu() {
  let e3 = this.tokenStart;
  this.eat(21), this.skipSC();
  let t2 = this.Declaration();
  return this.eof || this.eat(22), { type: `SupportsDeclaration`, loc: this.getLocation(e3, this.tokenStart), declaration: t2 };
}
function au(e3) {
  this.token(21, `(`), this.node(e3.declaration), this.token(22, `)`);
}
var ou = e({ generate: () => pu, name: () => uu, parse: () => fu, structure: () => du }), su = 42, cu = 124;
function lu() {
  this.tokenType !== 1 && this.isDelim(su) === false && this.error(`Identifier or asterisk is expected`), this.next();
}
var uu = `TypeSelector`, du = { name: String };
function fu() {
  let e3 = this.tokenStart;
  return this.isDelim(cu) ? (this.next(), lu.call(this)) : (lu.call(this), this.isDelim(cu) && (this.next(), lu.call(this))), { type: `TypeSelector`, loc: this.getLocation(e3, this.tokenStart), name: this.substrToCursor(e3) };
}
function pu(e3) {
  this.tokenize(e3.name);
}
var mu = e({ generate: () => Tu, name: () => Su, parse: () => wu, structure: () => Cu }), hu = 43, gu = 45, _u = 63;
function vu(e3, t2) {
  let n2 = 0;
  for (let r2 = this.tokenStart + e3; r2 < this.tokenEnd; r2++) {
    let i2 = this.charCodeAt(r2);
    if (i2 === gu && t2 && n2 !== 0) return vu.call(this, e3 + n2 + 1, false), -1;
    a(i2) || this.error(t2 && n2 !== 0 ? `Hyphen minus` + (n2 < 6 ? ` or hex digit` : ``) + ` is expected` : n2 < 6 ? `Hex digit is expected` : `Unexpected input`, r2), ++n2 > 6 && this.error(`Too many hex digits`, r2);
  }
  return this.next(), n2;
}
function yu(e3) {
  let t2 = 0;
  for (; this.isDelim(_u); ) ++t2 > e3 && this.error(`Too many question marks`), this.next();
}
function bu(e3) {
  this.charCodeAt(this.tokenStart) !== e3 && this.error((e3 === hu ? `Plus sign` : `Hyphen minus`) + ` is expected`);
}
function xu() {
  let e3 = 0;
  switch (this.tokenType) {
    case 10:
      if (e3 = vu.call(this, 1, true), this.isDelim(_u)) {
        yu.call(this, 6 - e3);
        break;
      }
      if (this.tokenType === 12 || this.tokenType === 10) {
        bu.call(this, gu), vu.call(this, 1, false);
        break;
      }
      break;
    case 12:
      e3 = vu.call(this, 1, true), e3 > 0 && yu.call(this, 6 - e3);
      break;
    default:
      if (this.eatDelim(hu), this.tokenType === 1) {
        e3 = vu.call(this, 0, true), e3 > 0 && yu.call(this, 6 - e3);
        break;
      }
      if (this.isDelim(_u)) {
        this.next(), yu.call(this, 5);
        break;
      }
      this.error(`Hex digit or question mark is expected`);
  }
}
var Su = `UnicodeRange`, Cu = { value: String };
function wu() {
  let e3 = this.tokenStart;
  return this.eatIdent(`u`), xu.call(this), { type: `UnicodeRange`, loc: this.getLocation(e3, this.tokenStart), value: this.substrToCursor(e3) };
}
function Tu(e3) {
  this.tokenize(e3.value);
}
var Eu = e({ decode: () => Nu, encode: () => Pu }), Du = 32, Ou = 92, ku = 34, Au = 39, ju = 40, Mu = 41;
function Nu(e3) {
  let t2 = e3.length, n2 = 4, r2 = e3.charCodeAt(t2 - 1) === Mu ? t2 - 2 : t2 - 1, i2 = ``;
  for (; n2 < r2 && m(e3.charCodeAt(n2)); ) n2++;
  for (; n2 < r2 && m(e3.charCodeAt(r2)); ) r2--;
  for (let a2 = n2; a2 <= r2; a2++) {
    let n3 = e3.charCodeAt(a2);
    if (n3 === Ou) {
      if (a2 === r2) {
        a2 !== t2 - 1 && (i2 = e3.substr(a2 + 1));
        break;
      }
      if (n3 = e3.charCodeAt(++a2), h(Ou, n3)) {
        let t3 = a2 - 1, n4 = C(e3, t3);
        a2 = n4 - 1, i2 += ce(e3.substring(t3 + 1, n4));
      } else n3 === 13 && e3.charCodeAt(a2 + 1) === 10 && a2++;
    } else i2 += e3[a2];
  }
  return i2;
}
function Pu(e3) {
  let t2 = ``, n2 = false;
  for (let r2 = 0; r2 < e3.length; r2++) {
    let i2 = e3.charCodeAt(r2);
    if (i2 === 0) {
      t2 += `\uFFFD`;
      continue;
    }
    if (i2 <= 31 || i2 === 127) {
      t2 += `\\` + i2.toString(16), n2 = true;
      continue;
    }
    i2 === Du || i2 === Ou || i2 === ku || i2 === Au || i2 === ju || i2 === Mu ? (t2 += `\\` + e3.charAt(r2), n2 = false) : (n2 && a(i2) && (t2 += ` `), t2 += e3.charAt(r2), n2 = false);
  }
  return `url(` + t2 + `)`;
}
var Fu = e({ generate: () => Ru, name: () => `Url`, parse: () => Lu, structure: () => Iu }), Iu = { value: String };
function Lu() {
  let e3 = this.tokenStart, t2;
  switch (this.tokenType) {
    case 7:
      t2 = Nu(this.consume(7));
      break;
    case 2:
      this.cmpStr(this.tokenStart, this.tokenEnd, `url(`) || this.error("Function name must be `url`"), this.eat(2), this.skipSC(), t2 = Bl(this.consume(5)), this.skipSC(), this.eof || this.eat(22);
      break;
    default:
      this.error(`Url or Function is expected`);
  }
  return { type: `Url`, loc: this.getLocation(e3, this.tokenStart), value: t2 };
}
function Ru(e3) {
  this.token(7, Pu(e3.value));
}
var zu = e({ generate: () => Uu, name: () => Bu, parse: () => Hu, structure: () => Vu }), Bu = `Value`, Vu = { children: [[]] };
function Hu() {
  let e3 = this.tokenStart, t2 = this.readSequence(this.scope.Value);
  return { type: `Value`, loc: this.getLocation(e3, this.tokenStart), children: t2 };
}
function Uu(e3) {
  this.children(e3);
}
var Wu = e({ generate: () => Yu, name: () => Ku, parse: () => Ju, structure: () => qu }), Gu = Object.freeze({ type: `WhiteSpace`, loc: null, value: ` ` }), Ku = `WhiteSpace`, qu = { value: String };
function Ju() {
  return this.eat(13), Gu;
}
function Yu(e3) {
  this.token(13, e3.value);
}
var Xu = e({ AnPlusB: () => Ii, Atrule: () => Ki, AtrulePrelude: () => ea, AttributeSelector: () => oa, Block: () => ya, Brackets: () => Aa, CDC: () => Fa, CDO: () => za, ClassSelector: () => Ua, Combinator: () => Ya, Comment: () => io, Condition: () => fo, Declaration: () => bo, DeclarationList: () => Ro, Dimension: () => Go, Feature: () => Xo, FeatureFunction: () => ns, FeatureRange: () => cs, Function: () => ys, GeneralEnclosed: () => Ts, Hash: () => As, IdSelector: () => Bs, Identifier: () => Fs, Layer: () => Gs, LayerList: () => Zs, MediaQuery: () => nc, MediaQueryList: () => sc, NestingSelector: () => fc, Nth: () => vc, Number: () => Sc, Operator: () => Dc, Parentheses: () => Mc, Percentage: () => Lc, PseudoClassSelector: () => Hc, PseudoElementSelector: () => Jc, Ratio: () => el, Raw: () => sl, Rule: () => fl, Scope: () => bl, Selector: () => Tl, SelectorList: () => Al, String: () => Hl, StyleSheet: () => ql, SupportsDeclaration: () => tu, TypeSelector: () => ou, UnicodeRange: () => mu, Url: () => Fu, Value: () => zu, WhiteSpace: () => Wu }), Zu = { generic: true, cssWideKeywords: Mt, ...Fi, node: Xu }, Qu = 35, $u = 42, ed = 43, td = 45, nd = 47, rd = 117;
function id(e3) {
  switch (this.tokenType) {
    case 4:
      return this.Hash();
    case 18:
      return this.Operator();
    case 21:
      return this.Parentheses(this.readSequence, e3.recognizer);
    case 19:
      return this.Brackets(this.readSequence, e3.recognizer);
    case 5:
      return this.String();
    case 12:
      return this.Dimension();
    case 11:
      return this.Percentage();
    case 10:
      return this.Number();
    case 2:
      return this.cmpStr(this.tokenStart, this.tokenEnd, `url(`) ? this.Url() : this.Function(this.readSequence, e3.recognizer);
    case 7:
      return this.Url();
    case 1:
      return this.cmpChar(this.tokenStart, rd) && this.cmpChar(this.tokenStart + 1, ed) ? this.UnicodeRange() : this.Identifier();
    case 9: {
      let e4 = this.charCodeAt(this.tokenStart);
      if (e4 === nd || e4 === $u || e4 === ed || e4 === td) return this.Operator();
      e4 === Qu && this.error(`Hex or identifier is expected`, this.tokenStart + 1);
      break;
    }
  }
}
var ad = { getNode: id }, od = 35, sd = 38, cd = 42, ld = 43, ud = 47, dd = 46, fd = 62, pd = 124, md = 126;
function hd(e3, t2) {
  t2.last !== null && t2.last.type !== `Combinator` && e3 !== null && e3.type !== `Combinator` && t2.push({ type: `Combinator`, loc: null, name: ` ` });
}
function gd() {
  switch (this.tokenType) {
    case 19:
      return this.AttributeSelector();
    case 4:
      return this.IdSelector();
    case 16:
      return this.lookupType(1) === 16 ? this.PseudoElementSelector() : this.PseudoClassSelector();
    case 1:
      return this.TypeSelector();
    case 10:
    case 11:
      return this.Percentage();
    case 12:
      this.charCodeAt(this.tokenStart) === dd && this.error(`Identifier is expected`, this.tokenStart + 1);
      break;
    case 9:
      switch (this.charCodeAt(this.tokenStart)) {
        case ld:
        case fd:
        case md:
        case ud:
          return this.Combinator();
        case dd:
          return this.ClassSelector();
        case cd:
        case pd:
          return this.TypeSelector();
        case od:
          return this.IdSelector();
        case sd:
          return this.NestingSelector();
      }
      break;
  }
}
var _d = { onWhiteSpace: hd, getNode: gd };
function vd() {
  return this.createSingleNodeList(this.Raw(null, false));
}
function yd() {
  let e3 = this.createList();
  if (this.skipSC(), e3.push(this.Identifier()), this.skipSC(), this.tokenType === 18) {
    e3.push(this.Operator());
    let t2 = this.tokenIndex, n2 = this.parseCustomProperty ? this.Value(null) : this.Raw(this.consumeUntilExclamationMarkOrSemicolon, false);
    if (n2.type === `Value` && n2.children.isEmpty) {
      for (let e4 = t2 - this.tokenIndex; e4 <= 0; e4++) if (this.lookupType(e4) === 13) {
        n2.children.appendData({ type: `WhiteSpace`, loc: null, value: ` ` });
        break;
      }
    }
    e3.push(n2);
  }
  return e3;
}
function bd(e3) {
  return e3 !== null && e3.type === `Operator` && (e3.value[e3.value.length - 1] === `-` || e3.value[e3.value.length - 1] === `+`);
}
var xd = { getNode: id, onWhiteSpace(e3, t2) {
  bd(e3) && (e3.value = ` ` + e3.value), bd(t2.last) && (t2.last.value += ` `);
}, expression: vd, var: yd }, Sd = e({ AtrulePrelude: () => ad, Selector: () => _d, Value: () => xd }), Cd = /* @__PURE__ */ new Set([`none`, `and`, `not`, `or`]), wd = { parse: { prelude() {
  let e3 = this.createList();
  if (this.tokenType === 1) {
    let t2 = this.substring(this.tokenStart, this.tokenEnd);
    Cd.has(t2.toLowerCase()) || e3.push(this.Identifier());
  }
  return e3.push(this.Condition(`container`)), e3;
}, block(e3 = false) {
  return this.Block(e3);
} } }, Td = { parse: { prelude: null, block() {
  return this.Block(true);
} } };
function Ed(e3, t2) {
  return this.parseWithFallback(() => {
    try {
      return e3.call(this);
    } finally {
      this.skipSC(), this.lookupNonWSType(0) !== 22 && this.error();
    }
  }, t2 || (() => this.Raw(null, true)));
}
var Dd = { layer() {
  this.skipSC();
  let e3 = this.createList(), t2 = Ed.call(this, this.Layer);
  return (t2.type !== `Raw` || t2.value !== ``) && e3.push(t2), e3;
}, supports() {
  this.skipSC();
  let e3 = this.createList(), t2 = Ed.call(this, this.Declaration, () => Ed.call(this, () => this.Condition(`supports`)));
  return (t2.type !== `Raw` || t2.value !== ``) && e3.push(t2), e3;
} }, Od = { parse: { prelude() {
  let e3 = this.createList();
  switch (this.tokenType) {
    case 5:
      e3.push(this.String());
      break;
    case 7:
    case 2:
      e3.push(this.Url());
      break;
    default:
      this.error(`String or url() is expected`);
  }
  return this.skipSC(), this.tokenType === 1 && this.cmpStr(this.tokenStart, this.tokenEnd, `layer`) ? e3.push(this.Identifier()) : this.tokenType === 2 && this.cmpStr(this.tokenStart, this.tokenEnd, `layer(`) && e3.push(this.Function(null, Dd)), this.skipSC(), this.tokenType === 2 && this.cmpStr(this.tokenStart, this.tokenEnd, `supports(`) && e3.push(this.Function(null, Dd)), (this.lookupNonWSType(0) === 1 || this.lookupNonWSType(0) === 21) && e3.push(this.MediaQueryList()), e3;
}, block: null } }, kd = { parse: { prelude() {
  return this.createSingleNodeList(this.LayerList());
}, block() {
  return this.Block(false);
} } }, Ad = { parse: { prelude() {
  return this.createSingleNodeList(this.MediaQueryList());
}, block(e3 = false) {
  return this.Block(e3);
} } }, jd = { parse: { prelude() {
  return this.createSingleNodeList(this.SelectorList());
}, block() {
  return this.Block(true);
} } }, Md = { parse: { prelude() {
  return this.createSingleNodeList(this.SelectorList());
}, block() {
  return this.Block(true);
} } }, Nd = { parse: { prelude() {
  return this.createSingleNodeList(this.Scope());
}, block(e3 = false) {
  return this.Block(e3);
} } }, Pd = { parse: { prelude: null, block(e3 = false) {
  return this.Block(e3);
} } }, Fd = { parse: { prelude() {
  return this.createSingleNodeList(this.Condition(`supports`));
}, block(e3 = false) {
  return this.Block(e3);
} } }, Id = { container: wd, "font-face": Td, import: Od, layer: kd, media: Ad, nest: jd, page: Md, scope: Nd, "starting-style": Pd, supports: Fd };
function Ld() {
  let e3 = this.createList();
  this.skipSC();
  loop: for (; !this.eof; ) {
    switch (this.tokenType) {
      case 1:
        e3.push(this.Identifier());
        break;
      case 5:
        e3.push(this.String());
        break;
      case 18:
        e3.push(this.Operator());
        break;
      case 22:
        break loop;
      default:
        this.error(`Identifier, string or comma is expected`);
    }
    this.skipSC();
  }
  return e3;
}
var $ = { parse() {
  return this.createSingleNodeList(this.SelectorList());
} }, Rd = { parse() {
  return this.createSingleNodeList(this.Selector());
} }, zd = { parse() {
  return this.createSingleNodeList(this.Identifier());
} }, Bd = { parse: Ld }, Vd = { parse() {
  return this.createSingleNodeList(this.Nth());
} }, Hd = { parseContext: { default: `StyleSheet`, stylesheet: `StyleSheet`, atrule: `Atrule`, atrulePrelude(e3) {
  return this.AtrulePrelude(e3.atrule ? String(e3.atrule) : null);
}, mediaQueryList: `MediaQueryList`, mediaQuery: `MediaQuery`, condition(e3) {
  return this.Condition(e3.kind);
}, rule: `Rule`, selectorList: `SelectorList`, selector: `Selector`, block() {
  return this.Block(true);
}, declarationList: `DeclarationList`, declaration: `Declaration`, value: `Value` }, features: { supports: { selector() {
  return this.Selector();
} }, container: { style() {
  return this.Declaration();
} } }, scope: Sd, atrule: Id, pseudo: { dir: zd, has: $, lang: Bd, matches: $, is: $, "-moz-any": $, "-webkit-any": $, where: $, not: $, "nth-child": Vd, "nth-last-child": Vd, "nth-last-of-type": Vd, "nth-of-type": Vd, slotted: Rd, host: Rd, "host-context": Rd }, node: e({ AnPlusB: () => Wi, Atrule: () => Qi, AtrulePrelude: () => ia, AttributeSelector: () => _a, Block: () => Oa, Brackets: () => Na, CDC: () => La, CDO: () => Va, ClassSelector: () => qa, Combinator: () => no, Comment: () => lo, Condition: () => vo, Declaration: () => Po, DeclarationList: () => Uo, Dimension: () => Jo, Feature: () => es, FeatureFunction: () => os, FeatureRange: () => _s, Function: () => Cs, GeneralEnclosed: () => Os, Hash: () => Ns, IdSelector: () => Us, Identifier: () => Rs, Layer: () => Ys, LayerList: () => ec, MediaQuery: () => ac, MediaQueryList: () => uc, NestingSelector: () => gc, Nth: () => bc, Number: () => Tc, Operator: () => Ac, Parentheses: () => Fc, Percentage: () => Bc, PseudoClassSelector: () => Kc, PseudoElementSelector: () => Qc, Ratio: () => al, Raw: () => ul, Rule: () => vl, Scope: () => Cl, Selector: () => Ol, SelectorList: () => Pl, String: () => Gl, StyleSheet: () => $l, SupportsDeclaration: () => iu, TypeSelector: () => fu, UnicodeRange: () => wu, Url: () => Lu, Value: () => Hu, WhiteSpace: () => Ju }) }, Ud = { node: Xu }, Wd = Pi({ ...Zu, ...Hd, ...Ud }), Gd = `3.2.1`;
function Kd(e3) {
  let t2 = {};
  for (let n2 of Object.keys(e3)) {
    let r2 = e3[n2];
    r2 && (Array.isArray(r2) || r2 instanceof k ? r2 = r2.map(Kd) : r2.constructor === Object && (r2 = Kd(r2))), t2[n2] = r2;
  }
  return t2;
}
var qd = e({ decode: () => Yd, encode: () => Xd }), Jd = 92;
function Yd(e3) {
  let t2 = e3.length - 1, n2 = ``;
  for (let r2 = 0; r2 < e3.length; r2++) {
    let i2 = e3.charCodeAt(r2);
    if (i2 === Jd) {
      if (r2 === t2) break;
      if (i2 = e3.charCodeAt(++r2), h(Jd, i2)) {
        let t3 = r2 - 1, i3 = C(e3, t3);
        r2 = i3 - 1, n2 += ce(e3.substring(t3 + 1, i3));
      } else i2 === 13 && e3.charCodeAt(r2 + 1) === 10 && r2++;
    } else n2 += e3[r2];
  }
  return n2;
}
function Xd(e3) {
  let t2 = ``;
  if (e3.length === 1 && e3.charCodeAt(0) === 45) return `\\-`;
  for (let n2 = 0; n2 < e3.length; n2++) {
    let r2 = e3.charCodeAt(n2);
    if (r2 === 0) {
      t2 += `\uFFFD`;
      continue;
    }
    if (r2 <= 31 || r2 === 127 || r2 >= 48 && r2 <= 57 && (n2 === 0 || n2 === 1 && e3.charCodeAt(0) === 45)) {
      t2 += `\\` + r2.toString(16) + ` `;
      continue;
    }
    d(r2) ? t2 += e3.charAt(n2) : t2 += `\\` + e3.charAt(n2);
  }
  return t2;
}
var Zd = e({ Lexer: () => Oi, List: () => k, OffsetToLocation: () => ge, TokenStream: () => be, clone: () => Kd, createLexer: () => nf, createSyntax: () => Pi, definitionSyntax: () => Mr, find: () => af, findAll: () => sf, findLast: () => of, fork: () => uf, fromPlainObject: () => lf, generate: () => ef, ident: () => qd, isCustomProperty: () => Ot, keyword: () => Tt, lexer: () => tf, parse: () => $d, property: () => Et, string: () => Il, toPlainObject: () => cf, tokenNames: () => le, tokenTypes: () => n, tokenize: () => Qd, url: () => Eu, vendorPrefix: () => Dt, version: () => Gd, walk: () => rf }), { tokenize: Qd, parse: $d, generate: ef, lexer: tf, createLexer: nf, walk: rf, find: af, findLast: of, findAll: sf, toPlainObject: cf, fromPlainObject: lf, fork: uf } = Wd;
export {
  rf as i,
  Zd as n,
  $d as r,
  ef as t
};
