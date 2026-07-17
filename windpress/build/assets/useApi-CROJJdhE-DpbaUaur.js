import { J as e } from "./runtime-core.esm-bundler-Twwq1XF8.js";
function t(e2) {
  return typeof e2 == `object` || `displayName` in e2 || `props` in e2 || `__vccOpts` in e2;
}
function n(e2) {
  return e2.__esModule || e2[Symbol.toStringTag] === `Module` || e2.default && t(e2.default);
}
var r = Object.assign;
function i(e2, t2) {
  let n2 = {};
  for (let r2 in t2) {
    let i2 = t2[r2];
    n2[r2] = o(i2) ? i2.map(e2) : e2(i2);
  }
  return n2;
}
var a = () => {
}, o = Array.isArray;
function s(e2, t2) {
  let n2 = {};
  for (let r2 in e2) n2[r2] = r2 in t2 ? t2[r2] : e2[r2];
  return n2;
}
var c = /* @__PURE__ */ Symbol(``);
function l(e2, t2) {
  return r(Error(), { type: e2, [c]: true }, t2);
}
function u(e2, t2) {
  return e2 instanceof Error && c in e2 && (t2 == null || !!(e2.type & t2));
}
var d = /* @__PURE__ */ Symbol(``), f = /* @__PURE__ */ Symbol(``), p = /* @__PURE__ */ Symbol(``), m = /* @__PURE__ */ Symbol(``), h = /* @__PURE__ */ Symbol(``);
function g() {
  return e(p);
}
function _(t2) {
  return e(m);
}
export {
  n as a,
  d as c,
  m as d,
  p as f,
  f as g,
  g as h,
  o as i,
  s as l,
  _ as m,
  r as n,
  u as o,
  h as p,
  l as r,
  t as s,
  i as t,
  a as u
};
