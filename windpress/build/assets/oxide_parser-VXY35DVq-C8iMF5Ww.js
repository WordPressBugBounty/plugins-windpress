function e(e2) {
  return m(x.getCandidates(n(e2)));
}
function t() {
  let e2 = { __proto__: null, __wbg___wbindgen_string_get_395e606bd0ee4427: function(e3, t2) {
    let n2 = l(t2), r2 = typeof n2 == `string` ? n2 : void 0;
    var i2 = f(r2) ? 0 : p(r2, x.__wbindgen_export, x.__wbindgen_export2), o2 = b;
    a().setInt32(e3 + 4, o2, true), a().setInt32(e3 + 0, i2, true);
  }, __wbg___wbindgen_throw_6ddd609b62940d55: function(e3, t2) {
    throw Error(o(e3, t2));
  }, __wbg_from_4bdf88943703fd48: function(e3) {
    return n(Array.from(l(e3)));
  }, __wbg_get_a8ee5c45dabc1b3b: function(e3, t2) {
    let r2 = l(e3)[t2 >>> 0];
    return n(r2);
  }, __wbg_isArray_33b91feb269ff46e: function(e3) {
    return Array.isArray(l(e3));
  }, __wbg_length_b3416cf66a5452c8: function(e3) {
    return l(e3).length;
  }, __wbg_new_a70fbab9066b301f: function() {
    return n([]);
  }, __wbg_new_with_length_3259a525196bd8cc: function(e3) {
    return n(Array(e3 >>> 0));
  }, __wbg_set_282384002438957f: function(e3, t2, n2) {
    l(e3)[t2 >>> 0] = m(n2);
  }, __wbindgen_cast_0000000000000001: function(e3, t2) {
    return n(o(e3, t2));
  }, __wbindgen_object_drop_ref: function(e3) {
    m(e3);
  } };
  return { __proto__: null, "./oxide_parser_bg.js": e2 };
}
function n(e2) {
  d === u.length && u.push(u.length + 1);
  let t2 = d;
  return d = u[t2], u[t2] = e2, t2;
}
function r(e2) {
  e2 < 1028 || (u[e2] = d, d = e2);
}
var i = null;
function a() {
  return (i === null || i.buffer.detached === true || i.buffer.detached === void 0 && i.buffer !== x.memory.buffer) && (i = new DataView(x.memory.buffer)), i;
}
function o(e2, t2) {
  return e2 >>>= 0, v(e2, t2);
}
var s = null;
function c() {
  return (s === null || s.byteLength === 0) && (s = new Uint8Array(x.memory.buffer)), s;
}
function l(e2) {
  return u[e2];
}
var u = Array(1024).fill(void 0);
u.push(void 0, null, true, false);
var d = u.length;
function f(e2) {
  return e2 == null;
}
function p(e2, t2, n2) {
  if (n2 === void 0) {
    let n3 = y.encode(e2), r3 = t2(n3.length, 1) >>> 0;
    return c().subarray(r3, r3 + n3.length).set(n3), b = n3.length, r3;
  }
  let r2 = e2.length, i2 = t2(r2, 1) >>> 0, a2 = c(), o2 = 0;
  for (; o2 < r2; o2++) {
    let t3 = e2.charCodeAt(o2);
    if (t3 > 127) break;
    a2[i2 + o2] = t3;
  }
  if (o2 !== r2) {
    o2 !== 0 && (e2 = e2.slice(o2)), i2 = n2(i2, r2, r2 = o2 + e2.length * 3, 1) >>> 0;
    let t3 = c().subarray(i2 + o2, i2 + r2), a3 = y.encodeInto(e2, t3);
    o2 += a3.written, i2 = n2(i2, r2, o2, 1) >>> 0;
  }
  return b = o2, i2;
}
function m(e2) {
  let t2 = l(e2);
  return r(e2), t2;
}
var h = new TextDecoder(`utf-8`, { ignoreBOM: true, fatal: true });
h.decode();
var g = 2146435072, _ = 0;
function v(e2, t2) {
  return _ += t2, _ >= g && (h = new TextDecoder(`utf-8`, { ignoreBOM: true, fatal: true }), h.decode(), _ = t2), h.decode(c().subarray(e2, e2 + t2));
}
var y = new TextEncoder();
`encodeInto` in y || (y.encodeInto = function(e2, t2) {
  let n2 = y.encode(e2);
  return t2.set(n2), { read: e2.length, written: n2.length };
});
var b = 0, x;
function S(e2, t2) {
  return x = e2.exports, i = null, s = null, x;
}
async function C(e2, t2) {
  if (typeof Response == `function` && e2 instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == `function`) try {
      return await WebAssembly.instantiateStreaming(e2, t2);
    } catch (t3) {
      if (e2.ok && n2(e2.type) && e2.headers.get(`Content-Type`) !== `application/wasm`) console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", t3);
      else throw t3;
    }
    let r2 = await e2.arrayBuffer();
    return await WebAssembly.instantiate(r2, t2);
  } else {
    let n3 = await WebAssembly.instantiate(e2, t2);
    return n3 instanceof WebAssembly.Instance ? { instance: n3, module: e2 } : n3;
  }
  function n2(e3) {
    switch (e3) {
      case `basic`:
      case `cors`:
      case `default`:
        return true;
    }
    return false;
  }
}
function w(e2) {
  if (x !== void 0) return x;
  e2 !== void 0 && (Object.getPrototypeOf(e2) === Object.prototype ? { module: e2 } = e2 : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  let n2 = t();
  return e2 instanceof WebAssembly.Module || (e2 = new WebAssembly.Module(e2)), S(new WebAssembly.Instance(e2, n2), e2);
}
async function T(e2) {
  if (x !== void 0) return x;
  e2 !== void 0 && (Object.getPrototypeOf(e2) === Object.prototype ? { module_or_path: e2 } = e2 : console.warn(`using deprecated parameters for the initialization function; pass a single object instead`)), e2 === void 0 && (e2 = new URL(`` + new URL(`oxide_parser_bg-Bg6G-fZC.wasm`, import.meta.url).href, `` + import.meta.url));
  let n2 = t();
  (typeof e2 == `string` || typeof Request == `function` && e2 instanceof Request || typeof URL == `function` && e2 instanceof URL) && (e2 = fetch(e2));
  let { instance: r2, module: i2 } = await C(await e2, n2);
  return S(r2, i2);
}
export {
  T as default,
  e as getCandidates,
  w as initSync
};
