import { An as e, B as t, Bn as n, C as r, Cn as i, D as a, Fn as o, Gn as s, Hn as c, Ht as l, In as u, Jn as d, Kn as f, L as p, Ln as m, Mn as ee, Nn as h, On as te, Ot as g, Pn as _, Qn as v, R as y, Rn as b, Tt as x, Un as ne, Vn as re, Wn as S, Xn as C, Yn as w, at as ie, c as ae, ct as oe, ft as se, jn as T, k as ce, kn as le, n as ue, o as de, p as fe, pt as pe, qn as me, rr as E, t as he, tt as ge, vt as _e, x as ve, zn as ye, zt as be } from "./runtime-core.esm-bundler-Twwq1XF8.js";
var D = void 0, xe = typeof window < `u` && window.trustedTypes;
if (xe) try {
  D = xe.createPolicy(`vue`, { createHTML: (e3) => e3 });
} catch {
}
var Se = D ? (e3) => D.createHTML(e3) : (e3) => e3, Ce = `http://www.w3.org/2000/svg`, we = `http://www.w3.org/1998/Math/MathML`, O = typeof document < `u` ? document : null, Te = O && O.createElement(`template`), Ee = { insert: (e3, t2, n2) => {
  t2.insertBefore(e3, n2 || null);
}, remove: (e3) => {
  let t2 = e3.parentNode;
  t2 && t2.removeChild(e3);
}, createElement: (e3, t2, n2, r2) => {
  let i2 = t2 === `svg` ? O.createElementNS(Ce, e3) : t2 === `mathml` ? O.createElementNS(we, e3) : n2 ? O.createElement(e3, { is: n2 }) : O.createElement(e3);
  return e3 === `select` && r2 && r2.multiple != null && i2.setAttribute(`multiple`, r2.multiple), i2;
}, createText: (e3) => O.createTextNode(e3), createComment: (e3) => O.createComment(e3), setText: (e3, t2) => {
  e3.nodeValue = t2;
}, setElementText: (e3, t2) => {
  e3.textContent = t2;
}, parentNode: (e3) => e3.parentNode, nextSibling: (e3) => e3.nextSibling, querySelector: (e3) => O.querySelector(e3), setScopeId(e3, t2) {
  e3.setAttribute(t2, ``);
}, insertStaticContent(e3, t2, n2, r2, i2, a2) {
  let o2 = n2 ? n2.previousSibling : t2.lastChild;
  if (i2 && (i2 === a2 || i2.nextSibling)) for (; t2.insertBefore(i2.cloneNode(true), n2), !(i2 === a2 || !(i2 = i2.nextSibling)); ) ;
  else {
    Te.innerHTML = Se(r2 === `svg` ? `<svg>${e3}</svg>` : r2 === `mathml` ? `<math>${e3}</math>` : e3);
    let i3 = Te.content;
    if (r2 === `svg` || r2 === `mathml`) {
      let e4 = i3.firstChild;
      for (; e4.firstChild; ) i3.appendChild(e4.firstChild);
      i3.removeChild(e4);
    }
    t2.insertBefore(i3, n2);
  }
  return [o2 ? o2.nextSibling : t2.firstChild, n2 ? n2.previousSibling : t2.lastChild];
} }, k = `transition`, A = `animation`, j = /* @__PURE__ */ Symbol(`_vtc`), De = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Oe = h({}, ue, De), ke = ((e3) => (e3.displayName = `Transition`, e3.props = Oe, e3))((e3, { slots: n2 }) => t(he, je(e3), n2)), M = (e3, t2 = []) => {
  b(e3) ? e3.forEach((e4) => e4(...t2)) : e3 && e3(...t2);
}, Ae = (e3) => e3 ? b(e3) ? e3.some((e4) => e4.length > 1) : e3.length > 1 : false;
function je(e3) {
  let t2 = {};
  for (let n3 in e3) n3 in De || (t2[n3] = e3[n3]);
  if (e3.css === false) return t2;
  let { name: n2 = `v`, type: r2, duration: i2, enterFromClass: a2 = `${n2}-enter-from`, enterActiveClass: o2 = `${n2}-enter-active`, enterToClass: s2 = `${n2}-enter-to`, appearFromClass: c2 = a2, appearActiveClass: l2 = o2, appearToClass: u2 = s2, leaveFromClass: d2 = `${n2}-leave-from`, leaveActiveClass: f2 = `${n2}-leave-active`, leaveToClass: p2 = `${n2}-leave-to` } = e3, m2 = Me(i2), ee2 = m2 && m2[0], te2 = m2 && m2[1], { onBeforeEnter: g2, onEnter: _2, onEnterCancelled: v2, onLeave: y2, onLeaveCancelled: b2, onBeforeAppear: x2 = g2, onAppear: ne2 = _2, onAppearCancelled: re2 = v2 } = t2, S2 = (e4, t3, n3, r3) => {
    e4._enterCancelled = r3, F(e4, t3 ? u2 : s2), F(e4, t3 ? l2 : o2), n3 && n3();
  }, C2 = (e4, t3) => {
    e4._isLeaving = false, F(e4, d2), F(e4, p2), F(e4, f2), t3 && t3();
  }, w2 = (e4) => (t3, n3) => {
    let i3 = e4 ? ne2 : _2, o3 = () => S2(t3, e4, n3);
    M(i3, [t3, o3]), Ne(() => {
      F(t3, e4 ? c2 : a2), P(t3, e4 ? u2 : s2), Ae(i3) || Fe(t3, r2, ee2, o3);
    });
  };
  return h(t2, { onBeforeEnter(e4) {
    M(g2, [e4]), P(e4, a2), P(e4, o2);
  }, onBeforeAppear(e4) {
    M(x2, [e4]), P(e4, c2), P(e4, l2);
  }, onEnter: w2(false), onAppear: w2(true), onLeave(e4, t3) {
    e4._isLeaving = true;
    let n3 = () => C2(e4, t3);
    P(e4, d2), e4._enterCancelled ? (P(e4, f2), I(e4)) : (I(e4), P(e4, f2)), Ne(() => {
      e4._isLeaving && (F(e4, d2), P(e4, p2), Ae(y2) || Fe(e4, r2, te2, n3));
    }), M(y2, [e4, n3]);
  }, onEnterCancelled(e4) {
    S2(e4, false, void 0, true), M(v2, [e4]);
  }, onAppearCancelled(e4) {
    S2(e4, true, void 0, true), M(re2, [e4]);
  }, onLeaveCancelled(e4) {
    C2(e4), M(b2, [e4]);
  } });
}
function Me(e3) {
  if (e3 == null) return null;
  if (re(e3)) return [N(e3.enter), N(e3.leave)];
  {
    let t2 = N(e3);
    return [t2, t2];
  }
}
function N(e3) {
  return E(e3);
}
function P(e3, t2) {
  t2.split(/\s+/).forEach((t3) => t3 && e3.classList.add(t3)), (e3[j] || (e3[j] = /* @__PURE__ */ new Set())).add(t2);
}
function F(e3, t2) {
  t2.split(/\s+/).forEach((t3) => t3 && e3.classList.remove(t3));
  let n2 = e3[j];
  n2 && (n2.delete(t2), n2.size || (e3[j] = void 0));
}
function Ne(e3) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e3);
  });
}
var Pe = 0;
function Fe(e3, t2, n2, r2) {
  let i2 = e3._endId = ++Pe, a2 = () => {
    i2 === e3._endId && r2();
  };
  if (n2 != null) return setTimeout(a2, n2);
  let { type: o2, timeout: s2, propCount: c2 } = Ie(e3, t2);
  if (!o2) return r2();
  let l2 = o2 + `end`, u2 = 0, d2 = () => {
    e3.removeEventListener(l2, f2), a2();
  }, f2 = (t3) => {
    t3.target === e3 && ++u2 >= c2 && d2();
  };
  setTimeout(() => {
    u2 < c2 && d2();
  }, s2 + 1), e3.addEventListener(l2, f2);
}
function Ie(e3, t2) {
  let n2 = window.getComputedStyle(e3), r2 = (e4) => (n2[e4] || ``).split(`, `), i2 = r2(`${k}Delay`), a2 = r2(`${k}Duration`), o2 = Le(i2, a2), s2 = r2(`${A}Delay`), c2 = r2(`${A}Duration`), l2 = Le(s2, c2), u2 = null, d2 = 0, f2 = 0;
  t2 === k ? o2 > 0 && (u2 = k, d2 = o2, f2 = a2.length) : t2 === A ? l2 > 0 && (u2 = A, d2 = l2, f2 = c2.length) : (d2 = Math.max(o2, l2), u2 = d2 > 0 ? o2 > l2 ? k : A : null, f2 = u2 ? u2 === k ? a2.length : c2.length : 0);
  let p2 = u2 === k && /\b(?:transform|all)(?:,|$)/.test(r2(`${k}Property`).toString());
  return { type: u2, timeout: d2, propCount: f2, hasTransform: p2 };
}
function Le(e3, t2) {
  for (; e3.length < t2.length; ) e3 = e3.concat(e3);
  return Math.max(...t2.map((t3, n2) => Re(t3) + Re(e3[n2])));
}
function Re(e3) {
  return e3 === `auto` ? 0 : Number(e3.slice(0, -1).replace(`,`, `.`)) * 1e3;
}
function I(e3) {
  return (e3 ? e3.ownerDocument : document).body.offsetHeight;
}
function ze(e3, t2, n2) {
  let r2 = e3[j];
  r2 && (t2 = (t2 ? [t2, ...r2] : [...r2]).join(` `)), t2 == null ? e3.removeAttribute(`class`) : n2 ? e3.setAttribute(`class`, t2) : e3.className = t2;
}
var L = /* @__PURE__ */ Symbol(`_vod`), R = /* @__PURE__ */ Symbol(`_vsh`), Be = { name: `show`, beforeMount(e3, { value: t2 }, { transition: n2 }) {
  e3[L] = e3.style.display === `none` ? `` : e3.style.display, n2 && t2 ? n2.beforeEnter(e3) : z(e3, t2);
}, mounted(e3, { value: t2 }, { transition: n2 }) {
  n2 && t2 && n2.enter(e3);
}, updated(e3, { value: t2, oldValue: n2 }, { transition: r2 }) {
  !t2 != !n2 && (r2 ? t2 ? (r2.beforeEnter(e3), z(e3, true), r2.enter(e3)) : r2.leave(e3, () => {
    z(e3, false);
  }) : z(e3, t2));
}, beforeUnmount(e3, { value: t2 }) {
  z(e3, t2);
} };
function z(e3, t2) {
  e3.style.display = t2 ? e3[L] : `none`, e3[R] = !t2;
}
function Ve() {
  Be.getSSRProps = ({ value: e3 }) => {
    if (!e3) return { style: { display: `none` } };
  };
}
var He = /* @__PURE__ */ Symbol(``);
function Ue(t2) {
  let n2 = p();
  if (!n2) return;
  let r2 = n2.ut = (e3 = t2(n2.proxy)) => {
    Array.from(document.querySelectorAll(`[data-v-owner="${n2.uid}"]`)).forEach((t3) => V(t3, e3));
  }, i2 = () => {
    let e3 = t2(n2.proxy);
    n2.ce ? V(n2.ce, e3) : B(n2.subTree, e3), r2(e3);
  };
  ie(() => {
    _e(i2);
  }), oe(() => {
    l(i2, e, { flush: `post` });
    let t3 = new MutationObserver(i2);
    t3.observe(n2.subTree.el.parentNode, { childList: true }), se(() => t3.disconnect());
  });
}
function B(e3, t2) {
  if (e3.shapeFlag & 128) {
    let n2 = e3.suspense;
    e3 = n2.activeBranch, n2.pendingBranch && !n2.isHydrating && n2.effects.push(() => {
      B(n2.activeBranch, t2);
    });
  }
  for (; e3.component; ) e3 = e3.component.subTree;
  if (e3.shapeFlag & 1 && e3.el) V(e3.el, t2);
  else if (e3.type === de) e3.children.forEach((e4) => B(e4, t2));
  else if (e3.type === ae) {
    let { el: n2, anchor: r2 } = e3;
    for (; n2 && (V(n2, t2), n2 !== r2); ) n2 = n2.nextSibling;
  }
}
function V(e3, t2) {
  if (e3.nodeType === 1) {
    let n2 = e3.style, r2 = ``;
    for (let e4 in t2) {
      let i2 = v(t2[e4]);
      n2.setProperty(`--${e4}`, i2), r2 += `--${e4}: ${i2};`;
    }
    n2[He] = r2;
  }
}
var We = /(?:^|;)\s*display\s*:/;
function Ge(e3, t2, n2) {
  let r2 = e3.style, i2 = f(n2), a2 = false;
  if (n2 && !i2) {
    if (t2) if (f(t2)) for (let e4 of t2.split(`;`)) {
      let t3 = e4.slice(0, e4.indexOf(`:`)).trim();
      n2[t3] ?? H(r2, t3, ``);
    }
    else for (let e4 in t2) n2[e4] ?? H(r2, e4, ``);
    for (let i3 in n2) {
      i3 === `display` && (a2 = true);
      let o2 = n2[i3];
      o2 == null ? H(r2, i3, ``) : Ye(e3, i3, !f(t2) && t2 ? t2[i3] : void 0, o2) || H(r2, i3, o2);
    }
  } else if (i2) {
    if (t2 !== n2) {
      let e4 = r2[He];
      e4 && (n2 += `;` + e4), r2.cssText = n2, a2 = We.test(n2);
    }
  } else t2 && e3.removeAttribute(`style`);
  L in e3 && (e3[L] = a2 ? r2.display : ``, e3[R] && (r2.display = `none`));
}
var Ke = /\s*!important$/;
function H(e3, t2, n2) {
  if (b(n2)) n2.forEach((n3) => H(e3, t2, n3));
  else if (n2 ?? (n2 = ``), t2.startsWith(`--`)) e3.setProperty(t2, n2);
  else {
    let r2 = Je(e3, t2);
    Ke.test(n2) ? e3.setProperty(o(r2), n2.replace(Ke, ``), `important`) : e3[r2] = n2;
  }
}
var qe = [`Webkit`, `Moz`, `ms`], U = {};
function Je(e3, t2) {
  let n2 = U[t2];
  if (n2) return n2;
  let r2 = T(t2);
  if (r2 !== `filter` && r2 in e3) return U[t2] = r2;
  r2 = ee(r2);
  for (let n3 = 0; n3 < qe.length; n3++) {
    let i2 = qe[n3] + r2;
    if (i2 in e3) return U[t2] = i2;
  }
  return t2;
}
function Ye(e3, t2, n2, r2) {
  return e3.tagName === `TEXTAREA` && (t2 === `width` || t2 === `height`) && f(r2) && n2 === r2;
}
var Xe = `http://www.w3.org/1999/xlink`;
function Ze(e3, t2, n2, r2, i2, a2 = s(t2)) {
  r2 && t2.startsWith(`xlink:`) ? n2 == null ? e3.removeAttributeNS(Xe, t2.slice(6, t2.length)) : e3.setAttributeNS(Xe, t2, n2) : n2 == null || a2 && !u(n2) ? e3.removeAttribute(t2) : e3.setAttribute(t2, a2 ? `` : me(n2) ? String(n2) : n2);
}
function Qe(e3, t2, n2, r2, i2) {
  if (t2 === `innerHTML` || t2 === `textContent`) {
    n2 != null && (e3[t2] = t2 === `innerHTML` ? Se(n2) : n2);
    return;
  }
  let a2 = e3.tagName;
  if (t2 === `value` && a2 !== `PROGRESS` && !a2.includes(`-`)) {
    let r3 = a2 === `OPTION` ? e3.getAttribute(`value`) || `` : e3.value, i3 = n2 == null ? e3.type === `checkbox` ? `on` : `` : String(n2);
    (r3 !== i3 || !(`_value` in e3)) && (e3.value = i3), n2 ?? e3.removeAttribute(t2), e3._value = n2;
    return;
  }
  let o2 = false;
  if (n2 === `` || n2 == null) {
    let r3 = typeof e3[t2];
    r3 === `boolean` ? n2 = u(n2) : n2 == null && r3 === `string` ? (n2 = ``, o2 = true) : r3 === `number` && (n2 = 0, o2 = true);
  }
  try {
    e3[t2] = n2;
  } catch {
  }
  o2 && e3.removeAttribute(i2 || t2);
}
function W(e3, t2, n2, r2) {
  e3.addEventListener(t2, n2, r2);
}
function $e(e3, t2, n2, r2) {
  e3.removeEventListener(t2, n2, r2);
}
var et = /* @__PURE__ */ Symbol(`_vei`);
function tt(e3, t2, n2, r2, i2 = null) {
  let a2 = e3[et] || (e3[et] = {}), o2 = a2[t2];
  if (r2 && o2) o2.value = r2;
  else {
    let [n3, s2] = it(t2);
    r2 ? W(e3, n3, a2[t2] = ct(r2, i2), s2) : o2 && ($e(e3, n3, o2, s2), a2[t2] = void 0);
  }
}
var nt = /(Once|Passive|Capture)$/, rt = /^on:?(?:Once|Passive|Capture)$/;
function it(e3) {
  let t2, n2;
  for (; (n2 = e3.match(nt)) && !rt.test(e3); ) t2 || (t2 = {}), e3 = e3.slice(0, e3.length - n2[1].length), t2[n2[1].toLowerCase()] = true;
  return [e3[2] === `:` ? e3.slice(3) : o(e3.slice(2)), t2];
}
var at = 0, ot = Promise.resolve(), st = () => at || (at = (ot.then(() => at = 0), Date.now()));
function ct(e3, t2) {
  let n2 = (e4) => {
    if (!e4._vts) e4._vts = Date.now();
    else if (e4._vts <= n2.attached) return;
    let r2 = n2.value;
    if (b(r2)) {
      let n3 = e4.stopImmediatePropagation;
      e4.stopImmediatePropagation = () => {
        n3.call(e4), e4._stopped = true;
      };
      let i2 = r2.slice(), a2 = [e4];
      for (let n4 = 0; n4 < i2.length && !e4._stopped; n4++) {
        let e5 = i2[n4];
        e5 && fe(e5, t2, 5, a2);
      }
    } else fe(r2, t2, 5, [e4]);
  };
  return n2.value = e3, n2.attached = st(), n2;
}
var lt = (e3) => e3.charCodeAt(0) === 111 && e3.charCodeAt(1) === 110 && e3.charCodeAt(2) > 96 && e3.charCodeAt(2) < 123, ut = (e3, t2, r2, i2, a2, o2) => {
  let s2 = a2 === `svg`;
  t2 === `class` ? ze(e3, i2, s2) : t2 === `style` ? Ge(e3, r2, i2) : c(t2) ? n(t2) || tt(e3, t2, r2, i2, o2) : (t2[0] === `.` ? (t2 = t2.slice(1), true) : t2[0] === `^` ? (t2 = t2.slice(1), false) : dt(e3, t2, i2, s2)) ? (Qe(e3, t2, i2), !e3.tagName.includes(`-`) && (t2 === `value` || t2 === `checked` || t2 === `selected`) && Ze(e3, t2, i2, s2, o2, t2 !== `value`)) : e3._isVueCE && (ft(e3, t2) || e3._def.__asyncLoader && (/[A-Z]/.test(t2) || !f(i2))) ? Qe(e3, T(t2), i2, o2, t2) : (t2 === `true-value` ? e3._trueValue = i2 : t2 === `false-value` && (e3._falseValue = i2), Ze(e3, t2, i2, s2));
};
function dt(e3, t2, n2, r2) {
  if (r2) return !!(t2 === `innerHTML` || t2 === `textContent` || t2 in e3 && lt(t2) && ye(n2));
  if (t2 === `spellcheck` || t2 === `draggable` || t2 === `translate` || t2 === `autocorrect` || t2 === `sandbox` && e3.tagName === `IFRAME` || t2 === `form` || t2 === `list` && e3.tagName === `INPUT` || t2 === `type` && e3.tagName === `TEXTAREA`) return false;
  if (t2 === `width` || t2 === `height`) {
    let t3 = e3.tagName;
    if (t3 === `IMG` || t3 === `VIDEO` || t3 === `CANVAS` || t3 === `SOURCE`) return false;
  }
  return lt(t2) && f(n2) ? false : t2 in e3;
}
function ft(e3, t2) {
  let n2 = e3._def.props;
  if (!n2) return false;
  let r2 = T(t2);
  return Array.isArray(n2) ? n2.some((e4) => T(e4) === r2) : Object.keys(n2).some((e4) => T(e4) === r2);
}
var pt = {};
function mt(e3, t2, n2) {
  let r2 = ce(e3, t2);
  ne(r2) && (r2 = h({}, r2, t2));
  class i2 extends _t {
    constructor(e4) {
      super(r2, e4, n2);
    }
  }
  return i2.def = r2, i2;
}
var ht = ((e3, t2) => mt(e3, t2, Qt)), gt = typeof HTMLElement < `u` ? HTMLElement : class {
}, _t = class e2 extends gt {
  constructor(e3, t2 = {}, n2 = Zt) {
    super(), this._def = e3, this._props = t2, this._createApp = n2, this._isVueCE = true, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = false, this._resolved = false, this._patching = false, this._dirty = false, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && n2 !== Zt ? this._root = this.shadowRoot : e3.shadowRoot === false ? this._root = this : (this.attachShadow(h({}, e3.shadowRootOptions, { mode: `open` })), this._root = this.shadowRoot);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = true;
    let t2 = this;
    for (; t2 && (t2 = t2.assignedSlot || t2.parentNode || t2.host); ) if (t2 instanceof e2) {
      this._parent = t2;
      break;
    }
    this._instance || (this._resolved ? this._mount(this._def) : t2 && t2._pendingResolve ? this._pendingResolve = t2._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(e3 = this._parent) {
    e3 && (this._instance.parent = e3._instance, this._inheritParentContext(e3));
  }
  _inheritParentContext(e3 = this._parent) {
    e3 && this._app && Object.setPrototypeOf(this._app._context.provides, e3._instance.provides);
  }
  disconnectedCallback() {
    this._connected = false, ge(() => {
      this._connected || (this._ob && (this._ob = (this._ob.disconnect(), null)), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets = (this._teleportTargets.clear(), void 0)));
    });
  }
  _processMutations(e3) {
    for (let t2 of e3) this._setAttr(t2.attributeName);
  }
  _resolveDef() {
    if (this._pendingResolve) return;
    for (let e4 = 0; e4 < this.attributes.length; e4++) this._setAttr(this.attributes[e4].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: true });
    let e3 = (e4, t3 = false) => {
      this._resolved = true, this._pendingResolve = void 0;
      let { props: n2, styles: r2 } = e4, i2;
      if (n2 && !b(n2)) for (let e5 in n2) {
        let t4 = n2[e5];
        (t4 === Number || t4 && t4.type === Number) && (e5 in this._props && (this._props[e5] = E(this._props[e5])), (i2 || (i2 = /* @__PURE__ */ Object.create(null)))[T(e5)] = true);
      }
      this._numberProps = i2, this._resolveProps(e4), this.shadowRoot && this._applyStyles(r2), this._mount(e4);
    }, t2 = this._def.__asyncLoader;
    t2 ? this._pendingResolve = t2().then((t3) => {
      t3.configureApp = this._def.configureApp, e3(this._def = t3, true);
    }) : e3(this._def);
  }
  _mount(e3) {
    this._app = this._createApp(e3), this._inheritParentContext(), e3.configureApp && e3.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    let t2 = this._instance && this._instance.exposed;
    if (t2) for (let e4 in t2) _(this, e4) || Object.defineProperty(this, e4, { get: () => te(t2[e4]) });
  }
  _resolveProps(e3) {
    let { props: t2 } = e3, n2 = b(t2) ? t2 : Object.keys(t2 || {});
    for (let e4 of Object.keys(this)) e4[0] !== `_` && n2.includes(e4) && this._setProp(e4, this[e4]);
    for (let e4 of n2.map(T)) Object.defineProperty(this, e4, { get() {
      return this._getProp(e4);
    }, set(t3) {
      this._setProp(e4, t3, true, !this._patching);
    } });
  }
  _setAttr(e3) {
    if (e3.startsWith(`data-v-`)) return;
    let t2 = this.hasAttribute(e3), n2 = t2 ? this.getAttribute(e3) : pt, r2 = T(e3);
    t2 && this._numberProps && this._numberProps[r2] && (n2 = E(n2)), this._setProp(r2, n2, false, true);
  }
  _getProp(e3) {
    return this._props[e3];
  }
  _setProp(e3, t2, n2 = true, r2 = false) {
    if (t2 !== this._props[e3] && (this._dirty = true, t2 === pt ? delete this._props[e3] : (this._props[e3] = t2, e3 === `key` && this._app && (this._app._ceVNode.key = t2)), r2 && this._instance && this._update(), n2)) {
      let n3 = this._ob;
      n3 && (this._processMutations(n3.takeRecords()), n3.disconnect()), t2 === true ? this.setAttribute(o(e3), ``) : typeof t2 == `string` || typeof t2 == `number` ? this.setAttribute(o(e3), t2 + ``) : t2 || this.removeAttribute(o(e3)), n3 && n3.observe(this, { attributes: true });
    }
  }
  _update() {
    let e3 = this._createVNode();
    this._app && (e3.appContext = this._app._context), Yt(e3, this._root);
  }
  _createVNode() {
    let e3 = {};
    this.shadowRoot || (e3.onVnodeMounted = e3.onVnodeUpdated = this._renderSlots.bind(this));
    let t2 = a(this._def, h(e3, this._props));
    return this._instance || (t2.ce = (e4) => {
      this._instance = e4, e4.ce = this, e4.isCE = true;
      let t3 = (e5, t4) => {
        this.dispatchEvent(new CustomEvent(e5, ne(t4[0]) ? h({ detail: t4 }, t4[0]) : { detail: t4 }));
      };
      e4.emit = (e5, ...n2) => {
        t3(e5, n2), o(e5) !== e5 && t3(o(e5), n2);
      }, this._setParent();
    }), t2;
  }
  _applyStyles(e3, t2, n2) {
    if (!e3) return;
    if (t2) {
      if (t2 === this._def || this._styleChildren.has(t2)) return;
      this._styleChildren.add(t2);
    }
    let r2 = this._nonce, i2 = this.shadowRoot, a2 = n2 ? this._getStyleAnchor(n2) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(i2), o2 = null;
    for (let s2 = e3.length - 1; s2 >= 0; s2--) {
      let c2 = document.createElement(`style`);
      r2 && c2.setAttribute(`nonce`, r2), c2.textContent = e3[s2], i2.insertBefore(c2, o2 || a2), o2 = c2, s2 === 0 && (n2 || this._styleAnchors.set(this._def, c2), t2 && this._styleAnchors.set(t2, c2));
    }
  }
  _getStyleAnchor(e3) {
    if (!e3) return null;
    let t2 = this._styleAnchors.get(e3);
    return t2 && t2.parentNode === this.shadowRoot ? t2 : (t2 && this._styleAnchors.delete(e3), null);
  }
  _getRootStyleInsertionAnchor(e3) {
    for (let t2 = 0; t2 < e3.childNodes.length; t2++) {
      let n2 = e3.childNodes[t2];
      if (!(n2 instanceof HTMLStyleElement)) return n2;
    }
    return null;
  }
  _parseSlots() {
    let e3 = this._slots = {}, t2;
    for (; t2 = this.firstChild; ) {
      let n2 = t2.nodeType === 1 && t2.getAttribute(`slot`) || `default`;
      (e3[n2] || (e3[n2] = [])).push(t2), this.removeChild(t2);
    }
  }
  _renderSlots() {
    let e3 = this._getSlots(), t2 = this._instance.type.__scopeId;
    for (let n2 = 0; n2 < e3.length; n2++) {
      let r2 = e3[n2], i2 = r2.getAttribute(`name`) || `default`, a2 = this._slots[i2], o2 = r2.parentNode;
      if (a2) for (let e4 of a2) {
        if (t2 && e4.nodeType === 1) {
          let n3 = t2 + `-s`, r3 = document.createTreeWalker(e4, 1);
          e4.setAttribute(n3, ``);
          let i3;
          for (; i3 = r3.nextNode(); ) i3.setAttribute(n3, ``);
        }
        o2.insertBefore(e4, r2);
      }
      else for (; r2.firstChild; ) o2.insertBefore(r2.firstChild, r2);
      o2.removeChild(r2);
    }
  }
  _getSlots() {
    let e3 = [this];
    this._teleportTargets && e3.push(...this._teleportTargets);
    let t2 = /* @__PURE__ */ new Set();
    for (let n2 of e3) {
      let e4 = n2.querySelectorAll(`slot`);
      for (let n3 = 0; n3 < e4.length; n3++) t2.add(e4[n3]);
    }
    return Array.from(t2);
  }
  _injectChildStyle(e3, t2) {
    this._applyStyles(e3.styles, e3, t2);
  }
  _beginPatch() {
    this._patching = true, this._dirty = false;
  }
  _endPatch() {
    this._patching = false, this._dirty && this._instance && this._update();
  }
  _hasShadowRoot() {
    return this._def.shadowRoot !== false;
  }
  _removeChildStyle(e3) {
  }
};
function vt(e3) {
  let t2 = p();
  return t2 && t2.ce || null;
}
function yt() {
  let e3 = vt();
  return e3 && e3.shadowRoot;
}
function bt(e3 = `$style`) {
  {
    let t2 = p();
    if (!t2) return le;
    let n2 = t2.type.__cssModules;
    return n2 && n2[e3] || le;
  }
}
var xt = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ new WeakMap(), G = /* @__PURE__ */ Symbol(`_moveCb`), Ct = /* @__PURE__ */ Symbol(`_enterCb`), wt = ((e3) => (delete e3.props.mode, e3))({ name: `TransitionGroup`, props: h({}, Oe, { tag: String, moveClass: String }), setup(e3, { slots: t2 }) {
  let n2 = p(), r2 = be(), o2, s2;
  return pe(() => {
    if (!o2.length) return;
    let t3 = e3.moveClass || `${e3.name || `v`}-move`;
    if (!kt(o2[0].el, n2.vnode.el, t3)) {
      o2 = [];
      return;
    }
    o2.forEach(Tt), o2.forEach(Et);
    let r3 = o2.filter(Dt);
    I(n2.vnode.el), r3.forEach((e4) => {
      let n3 = e4.el, r4 = n3.style;
      P(n3, t3), r4.transform = r4.webkitTransform = r4.transitionDuration = ``;
      let i2 = n3[G] = (e5) => {
        e5 && e5.target !== n3 || (!e5 || e5.propertyName.endsWith(`transform`)) && (n3.removeEventListener(`transitionend`, i2), n3[G] = null, F(n3, t3));
      };
      n3.addEventListener(`transitionend`, i2);
    }), o2 = [];
  }), () => {
    let c2 = i(e3), l2 = je(c2), u2 = c2.tag || de;
    if (o2 = [], s2) for (let e4 = 0; e4 < s2.length; e4++) {
      let t3 = s2[e4];
      t3.el && t3.el instanceof Element && !t3.el[R] && (o2.push(t3), g(t3, x(t3, l2, r2, n2)), xt.set(t3, Ot(t3.el)));
    }
    s2 = t2.default ? y(t2.default()) : [];
    for (let e4 = 0; e4 < s2.length; e4++) {
      let t3 = s2[e4];
      t3.key != null && g(t3, x(t3, l2, r2, n2));
    }
    return a(u2, null, s2);
  };
} });
function Tt(e3) {
  let t2 = e3.el;
  t2[G] && t2[G](), t2[Ct] && t2[Ct]();
}
function Et(e3) {
  St.set(e3, Ot(e3.el));
}
function Dt(e3) {
  let t2 = xt.get(e3), n2 = St.get(e3), r2 = t2.left - n2.left, i2 = t2.top - n2.top;
  if (r2 || i2) {
    let t3 = e3.el, n3 = t3.style, a2 = t3.getBoundingClientRect(), o2 = 1, s2 = 1;
    return t3.offsetWidth && (o2 = a2.width / t3.offsetWidth), t3.offsetHeight && (s2 = a2.height / t3.offsetHeight), (!Number.isFinite(o2) || o2 === 0) && (o2 = 1), (!Number.isFinite(s2) || s2 === 0) && (s2 = 1), Math.abs(o2 - 1) < 0.01 && (o2 = 1), Math.abs(s2 - 1) < 0.01 && (s2 = 1), n3.transform = n3.webkitTransform = `translate(${r2 / o2}px,${i2 / s2}px)`, n3.transitionDuration = `0s`, e3;
  }
}
function Ot(e3) {
  let t2 = e3.getBoundingClientRect();
  return { left: t2.left, top: t2.top };
}
function kt(e3, t2, n2) {
  let r2 = e3.cloneNode(), i2 = e3[j];
  i2 && i2.forEach((e4) => {
    e4.split(/\s+/).forEach((e5) => e5 && r2.classList.remove(e5));
  }), n2.split(/\s+/).forEach((e4) => e4 && r2.classList.add(e4)), r2.style.display = `none`;
  let a2 = t2.nodeType === 1 ? t2 : t2.parentNode;
  a2.appendChild(r2);
  let { hasTransform: o2 } = Ie(r2);
  return a2.removeChild(r2), o2;
}
var K = (e3) => {
  let t2 = e3.props[`onUpdate:modelValue`] || false;
  return b(t2) ? (e4) => m(t2, e4) : t2;
};
function At(e3) {
  e3.target.composing = true;
}
function jt(e3) {
  let t2 = e3.target;
  t2.composing && (t2.composing = false, t2.dispatchEvent(new Event(`input`)));
}
var q = /* @__PURE__ */ Symbol(`_assign`);
function Mt(e3, t2, n2) {
  return t2 && (e3 = e3.trim()), n2 && (e3 = C(e3)), e3;
}
var J = { created(e3, { modifiers: { lazy: t2, trim: n2, number: r2 } }, i2) {
  e3[q] = K(i2);
  let a2 = r2 || i2.props && i2.props.type === `number`;
  W(e3, t2 ? `change` : `input`, (t3) => {
    t3.target.composing || e3[q](Mt(e3.value, n2, a2));
  }), (n2 || a2) && W(e3, `change`, () => {
    e3.value = Mt(e3.value, n2, a2);
  }), t2 || (W(e3, `compositionstart`, At), W(e3, `compositionend`, jt), W(e3, `change`, jt));
}, mounted(e3, { value: t2 }) {
  e3.value = t2 ?? ``;
}, beforeUpdate(e3, { value: t2, oldValue: n2, modifiers: { lazy: r2, trim: i2, number: a2 } }, o2) {
  if (e3[q] = K(o2), e3.composing) return;
  let s2 = (a2 || e3.type === `number`) && !/^0\d/.test(e3.value) ? C(e3.value) : e3.value, c2 = t2 ?? ``;
  if (s2 === c2) return;
  let l2 = e3.getRootNode();
  (l2 instanceof Document || l2 instanceof ShadowRoot) && l2.activeElement === e3 && e3.type !== `range` && (r2 && t2 === n2 || i2 && e3.value.trim() === c2) || (e3.value = c2);
} }, Y = { deep: true, created(e3, t2, n2) {
  e3[q] = K(n2), W(e3, `change`, () => {
    let t3 = e3._modelValue, n3 = Z(e3), r2 = e3.checked, i2 = e3[q];
    if (b(t3)) {
      let e4 = w(t3, n3), a2 = e4 !== -1;
      if (r2 && !a2) i2(t3.concat(n3));
      else if (!r2 && a2) {
        let n4 = [...t3];
        n4.splice(e4, 1), i2(n4);
      }
    } else if (S(t3)) {
      let e4 = new Set(t3);
      r2 ? e4.add(n3) : e4.delete(n3), i2(e4);
    } else i2(It(e3, r2));
  });
}, mounted: Nt, beforeUpdate(e3, t2, n2) {
  e3[q] = K(n2), Nt(e3, t2, n2);
} };
function Nt(e3, { value: t2, oldValue: n2 }, r2) {
  e3._modelValue = t2;
  let i2;
  if (b(t2)) i2 = w(t2, r2.props.value) > -1;
  else if (S(t2)) i2 = t2.has(r2.props.value);
  else {
    if (t2 === n2) return;
    i2 = d(t2, It(e3, true));
  }
  e3.checked !== i2 && (e3.checked = i2);
}
var X = { created(e3, { value: t2 }, n2) {
  e3.checked = d(t2, n2.props.value), e3[q] = K(n2), W(e3, `change`, () => {
    e3[q](Z(e3));
  });
}, beforeUpdate(e3, { value: t2, oldValue: n2 }, r2) {
  e3[q] = K(r2), t2 !== n2 && (e3.checked = d(t2, r2.props.value));
} }, Pt = { deep: true, created(e3, { value: t2, modifiers: { number: n2 } }, r2) {
  e3._modelValue = t2, W(e3, `change`, () => {
    let t3 = Array.prototype.filter.call(e3.options, (e4) => e4.selected).map((e4) => n2 ? C(Z(e4)) : Z(e4));
    e3[q](e3.multiple ? S(e3._modelValue) ? new Set(t3) : t3 : t3[0]), e3._assigning = true, ge(() => {
      e3._assigning = false;
    });
  }), e3[q] = K(r2);
}, mounted(e3, { value: t2 }) {
  Ft(e3, t2);
}, beforeUpdate(e3, { value: t2 }, n2) {
  e3._modelValue = t2, e3[q] = K(n2);
}, updated(e3, { value: t2 }) {
  e3._assigning || Ft(e3, t2);
} };
function Ft(e3, t2) {
  let n2 = e3.multiple, r2 = b(t2);
  if (!(n2 && !r2 && !S(t2))) {
    for (let i2 = 0, a2 = e3.options.length; i2 < a2; i2++) {
      let a3 = e3.options[i2], o2 = Z(a3);
      if (n2) if (r2) {
        let e4 = typeof o2;
        e4 === `string` || e4 === `number` ? a3.selected = t2.some((e5) => String(e5) === String(o2)) : a3.selected = w(t2, o2) > -1;
      } else a3.selected = t2.has(o2);
      else if (d(Z(a3), t2)) {
        e3.selectedIndex !== i2 && (e3.selectedIndex = i2);
        return;
      }
    }
    !n2 && e3.selectedIndex !== -1 && (e3.selectedIndex = -1);
  }
}
function Z(e3) {
  return `_value` in e3 ? e3._value : e3.value;
}
function It(e3, t2) {
  let n2 = t2 ? `_trueValue` : `_falseValue`;
  return n2 in e3 ? e3[n2] : t2;
}
var Lt = { created(e3, t2, n2) {
  Q(e3, t2, n2, null, `created`);
}, mounted(e3, t2, n2) {
  Q(e3, t2, n2, null, `mounted`);
}, beforeUpdate(e3, t2, n2, r2) {
  Q(e3, t2, n2, r2, `beforeUpdate`);
}, updated(e3, t2, n2, r2) {
  Q(e3, t2, n2, r2, `updated`);
} };
function Rt(e3, t2) {
  switch (e3) {
    case `SELECT`:
      return Pt;
    case `TEXTAREA`:
      return J;
    default:
      switch (t2) {
        case `checkbox`:
          return Y;
        case `radio`:
          return X;
        default:
          return J;
      }
  }
}
function Q(e3, t2, n2, r2, i2) {
  let a2 = Rt(e3.tagName, n2.props && n2.props.type)[i2];
  a2 && a2(e3, t2, n2, r2);
}
function zt() {
  J.getSSRProps = ({ value: e3 }) => ({ value: e3 }), X.getSSRProps = ({ value: e3 }, t2) => {
    if (t2.props && d(t2.props.value, e3)) return { checked: true };
  }, Y.getSSRProps = ({ value: e3 }, t2) => {
    if (b(e3)) {
      if (t2.props && w(e3, t2.props.value) > -1) return { checked: true };
    } else if (S(e3)) {
      if (t2.props && e3.has(t2.props.value)) return { checked: true };
    } else if (e3) return { checked: true };
  }, Lt.getSSRProps = (e3, t2) => {
    if (typeof t2.type != `string`) return;
    let n2 = Rt(t2.type.toUpperCase(), t2.props && t2.props.type);
    if (n2.getSSRProps) return n2.getSSRProps(e3, t2);
  };
}
var Bt = [`ctrl`, `shift`, `alt`, `meta`], Vt = { stop: (e3) => e3.stopPropagation(), prevent: (e3) => e3.preventDefault(), self: (e3) => e3.target !== e3.currentTarget, ctrl: (e3) => !e3.ctrlKey, shift: (e3) => !e3.shiftKey, alt: (e3) => !e3.altKey, meta: (e3) => !e3.metaKey, left: (e3) => `button` in e3 && e3.button !== 0, middle: (e3) => `button` in e3 && e3.button !== 1, right: (e3) => `button` in e3 && e3.button !== 2, exact: (e3, t2) => Bt.some((n2) => e3[`${n2}Key`] && !t2.includes(n2)) }, Ht = (e3, t2) => {
  if (!e3) return e3;
  let n2 = e3._withMods || (e3._withMods = {}), r2 = t2.join(`.`);
  return n2[r2] || (n2[r2] = ((n3, ...r3) => {
    for (let e4 = 0; e4 < t2.length; e4++) {
      let r4 = Vt[t2[e4]];
      if (r4 && r4(n3, t2)) return;
    }
    return e3(n3, ...r3);
  }));
}, Ut = { esc: `escape`, space: ` `, up: `arrow-up`, left: `arrow-left`, right: `arrow-right`, down: `arrow-down`, delete: `backspace` }, Wt = (e3, t2) => {
  let n2 = e3._withKeys || (e3._withKeys = {}), r2 = t2.join(`.`);
  return n2[r2] || (n2[r2] = ((n3) => {
    if (!(`key` in n3)) return;
    let r3 = o(n3.key);
    if (t2.some((e4) => e4 === r3 || Ut[e4] === r3)) return e3(n3);
  }));
}, Gt = h({ patchProp: ut }, Ee), $, Kt = false;
function qt() {
  return $ || ($ = r(Gt));
}
function Jt() {
  return $ = Kt ? $ : ve(Gt), Kt = true, $;
}
var Yt = ((...e3) => {
  qt().render(...e3);
}), Xt = ((...e3) => {
  Jt().hydrate(...e3);
}), Zt = ((...e3) => {
  let t2 = qt().createApp(...e3), { mount: n2 } = t2;
  return t2.mount = (e4) => {
    let r2 = en(e4);
    if (!r2) return;
    let i2 = t2._component;
    !ye(i2) && !i2.render && !i2.template && (i2.template = r2.innerHTML), r2.nodeType === 1 && (r2.textContent = ``);
    let a2 = n2(r2, false, $t(r2));
    return r2 instanceof Element && (r2.removeAttribute(`v-cloak`), r2.setAttribute(`data-v-app`, ``)), a2;
  }, t2;
}), Qt = ((...e3) => {
  let t2 = Jt().createApp(...e3), { mount: n2 } = t2;
  return t2.mount = (e4) => {
    let t3 = en(e4);
    if (t3) return n2(t3, true, $t(t3));
  }, t2;
});
function $t(e3) {
  if (e3 instanceof SVGElement) return `svg`;
  if (typeof MathMLElement == `function` && e3 instanceof MathMLElement) return `mathml`;
}
function en(e3) {
  return f(e3) ? document.querySelector(e3) : e3;
}
var tn = false, nn = () => {
  tn || (tn = true, zt(), Ve());
};
export {
  Wt as C,
  Be as S,
  Y as _,
  Qt as a,
  Pt as b,
  Xt as c,
  ut as d,
  Yt as f,
  yt as g,
  vt as h,
  Zt as i,
  nn as l,
  Ue as m,
  wt as n,
  mt as o,
  bt as p,
  _t as r,
  ht as s,
  ke as t,
  Ee as u,
  Lt as v,
  Ht as w,
  J as x,
  X as y
};
