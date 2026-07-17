import { t as e } from "./rolldown-runtime-DAXXjFlN.js";
var t = e(((e2, t2) => {
  var n2 = /^[a-f0-9?-]+$/i;
  t2.exports = function(e3) {
    for (var t3 = [], r2 = e3, i2, a2, o2, s, c, l, u, d, f = 0, p = r2.charCodeAt(f), m = r2.length, h = [{ nodes: t3 }], g = 0, _, v = ``, y = ``, b = ``; f < m; ) if (p <= 32) {
      i2 = f;
      do
        i2 += 1, p = r2.charCodeAt(i2);
      while (p <= 32);
      s = r2.slice(f, i2), o2 = t3[t3.length - 1], p === 41 && g ? b = s : o2 && o2.type === `div` ? (o2.after = s, o2.sourceEndIndex += s.length) : p === 44 || p === 58 || p === 47 && r2.charCodeAt(i2 + 1) !== 42 && (!_ || _ && _.type === `function` && _.value !== `calc`) ? y = s : t3.push({ type: `space`, sourceIndex: f, sourceEndIndex: i2, value: s }), f = i2;
    } else if (p === 39 || p === 34) {
      i2 = f, a2 = p === 39 ? `'` : `"`, s = { type: `string`, sourceIndex: f, quote: a2 };
      do
        if (c = false, i2 = r2.indexOf(a2, i2 + 1), ~i2) for (l = i2; r2.charCodeAt(l - 1) === 92; ) --l, c = !c;
        else r2 += a2, i2 = r2.length - 1, s.unclosed = true;
      while (c);
      s.value = r2.slice(f + 1, i2), s.sourceEndIndex = s.unclosed ? i2 : i2 + 1, t3.push(s), f = i2 + 1, p = r2.charCodeAt(f);
    } else if (p === 47 && r2.charCodeAt(f + 1) === 42) i2 = r2.indexOf(`*/`, f), s = { type: `comment`, sourceIndex: f, sourceEndIndex: i2 + 2 }, i2 === -1 && (s.unclosed = true, i2 = r2.length, s.sourceEndIndex = i2), s.value = r2.slice(f + 2, i2), t3.push(s), f = i2 + 2, p = r2.charCodeAt(f);
    else if ((p === 47 || p === 42) && _ && _.type === `function` && _.value === `calc`) s = r2[f], t3.push({ type: `word`, sourceIndex: f - y.length, sourceEndIndex: f + s.length, value: s }), f += 1, p = r2.charCodeAt(f);
    else if (p === 47 || p === 44 || p === 58) s = r2[f], t3.push({ type: `div`, sourceIndex: f - y.length, sourceEndIndex: f + s.length, value: s, before: y, after: `` }), y = ``, f += 1, p = r2.charCodeAt(f);
    else if (p === 40) {
      i2 = f;
      do
        i2 += 1, p = r2.charCodeAt(i2);
      while (p <= 32);
      if (d = f, s = { type: `function`, sourceIndex: f - v.length, value: v, before: r2.slice(d + 1, i2) }, f = i2, v === `url` && p !== 39 && p !== 34) {
        --i2;
        do
          if (c = false, i2 = r2.indexOf(`)`, i2 + 1), ~i2) for (l = i2; r2.charCodeAt(l - 1) === 92; ) --l, c = !c;
          else r2 += `)`, i2 = r2.length - 1, s.unclosed = true;
        while (c);
        u = i2;
        do
          --u, p = r2.charCodeAt(u);
        while (p <= 32);
        d < u ? (f === u + 1 ? s.nodes = [] : s.nodes = [{ type: `word`, sourceIndex: f, sourceEndIndex: u + 1, value: r2.slice(f, u + 1) }], s.unclosed && u + 1 !== i2 ? (s.after = ``, s.nodes.push({ type: `space`, sourceIndex: u + 1, sourceEndIndex: i2, value: r2.slice(u + 1, i2) })) : (s.after = r2.slice(u + 1, i2), s.sourceEndIndex = i2)) : (s.after = ``, s.nodes = []), f = i2 + 1, s.sourceEndIndex = s.unclosed ? i2 : f, p = r2.charCodeAt(f), t3.push(s);
      } else g += 1, s.after = ``, s.sourceEndIndex = f + 1, t3.push(s), h.push(s), t3 = s.nodes = [], _ = s;
      v = ``;
    } else if (p === 41 && g) f += 1, p = r2.charCodeAt(f), _.after = b, _.sourceEndIndex += b.length, b = ``, --g, h[h.length - 1].sourceEndIndex = f, h.pop(), _ = h[g], t3 = _.nodes;
    else {
      i2 = f;
      do
        p === 92 && (i2 += 1), i2 += 1, p = r2.charCodeAt(i2);
      while (i2 < m && !(p <= 32 || p === 39 || p === 34 || p === 44 || p === 58 || p === 47 || p === 40 || p === 42 && _ && _.type === `function` && _.value === `calc` || p === 47 && _.type === `function` && _.value === `calc` || p === 41 && g));
      s = r2.slice(f, i2), p === 40 ? v = s : (s.charCodeAt(0) === 117 || s.charCodeAt(0) === 85) && s.charCodeAt(1) === 43 && n2.test(s.slice(2)) ? t3.push({ type: `unicode-range`, sourceIndex: f, sourceEndIndex: i2, value: s }) : t3.push({ type: `word`, sourceIndex: f, sourceEndIndex: i2, value: s }), f = i2;
    }
    for (f = h.length - 1; f; --f) h[f].unclosed = true, h[f].sourceEndIndex = r2.length;
    return h[0].nodes;
  };
})), n = e(((e2, t2) => {
  t2.exports = function e3(t3, n2, r2) {
    var i2, a2, o2, s;
    for (i2 = 0, a2 = t3.length; i2 < a2; i2 += 1) o2 = t3[i2], r2 || (s = n2(o2, i2, t3)), s !== false && o2.type === `function` && Array.isArray(o2.nodes) && e3(o2.nodes, n2, r2), r2 && n2(o2, i2, t3);
  };
})), r = e(((e2, t2) => {
  function n2(e3, t3) {
    var n3 = e3.type, i2 = e3.value, a2, o2;
    return t3 && (o2 = t3(e3)) !== void 0 ? o2 : n3 === `word` || n3 === `space` ? i2 : n3 === `string` ? (a2 = e3.quote || ``, a2 + i2 + (e3.unclosed ? `` : a2)) : n3 === `comment` ? `/*` + i2 + (e3.unclosed ? `` : `*/`) : n3 === `div` ? (e3.before || ``) + i2 + (e3.after || ``) : Array.isArray(e3.nodes) ? (a2 = r2(e3.nodes, t3), n3 === `function` ? i2 + `(` + (e3.before || ``) + a2 + (e3.after || ``) + (e3.unclosed ? `` : `)`) : a2) : i2;
  }
  function r2(e3, t3) {
    var r3, i2;
    if (Array.isArray(e3)) {
      for (r3 = ``, i2 = e3.length - 1; ~i2; --i2) r3 = n2(e3[i2], t3) + r3;
      return r3;
    }
    return n2(e3, t3);
  }
  t2.exports = r2;
})), i = e(((e2, t2) => {
  function n2(e3) {
    var t3 = e3.charCodeAt(0), n3;
    if (t3 === 43 || t3 === 45) {
      if (n3 = e3.charCodeAt(1), n3 >= 48 && n3 <= 57) return true;
      var r2 = e3.charCodeAt(2);
      return n3 === 46 && r2 >= 48 && r2 <= 57;
    }
    return t3 === 46 ? (n3 = e3.charCodeAt(1), n3 >= 48 && n3 <= 57) : t3 >= 48 && t3 <= 57;
  }
  t2.exports = function(e3) {
    var t3 = 0, r2 = e3.length, i2, a2, o2;
    if (r2 === 0 || !n2(e3)) return false;
    for (i2 = e3.charCodeAt(t3), (i2 === 43 || i2 === 45) && t3++; t3 < r2 && (i2 = e3.charCodeAt(t3), !(i2 < 48 || i2 > 57)); ) t3 += 1;
    if (i2 = e3.charCodeAt(t3), a2 = e3.charCodeAt(t3 + 1), i2 === 46 && a2 >= 48 && a2 <= 57) for (t3 += 2; t3 < r2 && (i2 = e3.charCodeAt(t3), !(i2 < 48 || i2 > 57)); ) t3 += 1;
    if (i2 = e3.charCodeAt(t3), a2 = e3.charCodeAt(t3 + 1), o2 = e3.charCodeAt(t3 + 2), (i2 === 101 || i2 === 69) && (a2 >= 48 && a2 <= 57 || (a2 === 43 || a2 === 45) && o2 >= 48 && o2 <= 57)) for (t3 += a2 === 43 || a2 === 45 ? 3 : 2; t3 < r2 && (i2 = e3.charCodeAt(t3), !(i2 < 48 || i2 > 57)); ) t3 += 1;
    return { number: e3.slice(0, t3), unit: e3.slice(t3) };
  };
})), a = e(((e2, a2) => {
  var o2 = t(), s = n(), c = r();
  function l(e3) {
    return this instanceof l ? (this.nodes = o2(e3), this) : new l(e3);
  }
  l.prototype.toString = function() {
    return Array.isArray(this.nodes) ? c(this.nodes) : ``;
  }, l.prototype.walk = function(e3, t2) {
    return s(this.nodes, e3, t2), this;
  }, l.unit = i(), l.walk = s, l.stringify = c, a2.exports = l;
})), o = e(((e2, t2) => {
  (function(n2, r2) {
    typeof e2 == `object` && t2 !== void 0 ? t2.exports = function(e3, t3, n3, r3, i2) {
      for (t3 = t3.split ? t3.split(`.`) : t3, r3 = 0; r3 < t3.length; r3++) e3 = e3 ? e3[t3[r3]] : i2;
      return e3 === i2 ? n3 : e3;
    } : typeof define == `function` && define.amd ? define(function() {
      return function(e3, t3, n3, r3, i2) {
        for (t3 = t3.split ? t3.split(`.`) : t3, r3 = 0; r3 < t3.length; r3++) e3 = e3 ? e3[t3[r3]] : i2;
        return e3 === i2 ? n3 : e3;
      };
    }) : n2.dlv = function(e3, t3, n3, r3, i2) {
      for (t3 = t3.split ? t3.split(`.`) : t3, r3 = 0; r3 < t3.length; r3++) e3 = e3 ? e3[t3[r3]] : i2;
      return e3 === i2 ? n3 : e3;
    };
  })(e2);
}));
export {
  a as n,
  o as t
};
