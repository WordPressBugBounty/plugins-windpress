var e = `bottom`, t = `right`, n = `left`, r = `auto`, i = [`top`, e, t, n], a = `start`, o = `clippingParents`, s = `viewport`, c = `popper`, l = `reference`, u = i.reduce(function(e2, t2) {
  return e2.concat([t2 + `-` + a, t2 + `-end`]);
}, []), d = [].concat(i, [r]).reduce(function(e2, t2) {
  return e2.concat([t2, t2 + `-` + a, t2 + `-end`]);
}, []), f = [`beforeRead`, `read`, `afterRead`, `beforeMain`, `main`, `afterMain`, `beforeWrite`, `write`, `afterWrite`];
function p(e2) {
  return e2 ? (e2.nodeName || ``).toLowerCase() : null;
}
function m(e2) {
  if (e2 == null) return window;
  if (e2.toString() !== `[object Window]`) {
    var t2 = e2.ownerDocument;
    return t2 && t2.defaultView || window;
  }
  return e2;
}
function h(e2) {
  return e2 instanceof m(e2).Element || e2 instanceof Element;
}
function g(e2) {
  return e2 instanceof m(e2).HTMLElement || e2 instanceof HTMLElement;
}
function _(e2) {
  return typeof ShadowRoot > `u` ? false : e2 instanceof m(e2).ShadowRoot || e2 instanceof ShadowRoot;
}
function v(e2) {
  var t2 = e2.state;
  Object.keys(t2.elements).forEach(function(e3) {
    var n2 = t2.styles[e3] || {}, r2 = t2.attributes[e3] || {}, i2 = t2.elements[e3];
    !g(i2) || !p(i2) || (Object.assign(i2.style, n2), Object.keys(r2).forEach(function(e4) {
      var t3 = r2[e4];
      t3 === false ? i2.removeAttribute(e4) : i2.setAttribute(e4, t3 === true ? `` : t3);
    }));
  });
}
function y(e2) {
  var t2 = e2.state, n2 = { popper: { position: t2.options.strategy, left: `0`, top: `0`, margin: `0` }, arrow: { position: `absolute` }, reference: {} };
  return Object.assign(t2.elements.popper.style, n2.popper), t2.styles = n2, t2.elements.arrow && Object.assign(t2.elements.arrow.style, n2.arrow), function() {
    Object.keys(t2.elements).forEach(function(e3) {
      var r2 = t2.elements[e3], i2 = t2.attributes[e3] || {}, a2 = Object.keys(t2.styles.hasOwnProperty(e3) ? t2.styles[e3] : n2[e3]).reduce(function(e4, t3) {
        return e4[t3] = ``, e4;
      }, {});
      !g(r2) || !p(r2) || (Object.assign(r2.style, a2), Object.keys(i2).forEach(function(e4) {
        r2.removeAttribute(e4);
      }));
    });
  };
}
var b = { name: `applyStyles`, enabled: true, phase: `write`, fn: v, effect: y, requires: [`computeStyles`] }, x = Math.max, S = Math.min, C = Math.round;
function w() {
  var e2 = navigator.userAgentData;
  return e2 != null && e2.brands && Array.isArray(e2.brands) ? e2.brands.map(function(e3) {
    return e3.brand + `/` + e3.version;
  }).join(` `) : navigator.userAgent;
}
function T() {
  return !/^((?!chrome|android).)*safari/i.test(w());
}
function E(e2, t2, n2) {
  t2 === void 0 && (t2 = false), n2 === void 0 && (n2 = false);
  var r2 = e2.getBoundingClientRect(), i2 = 1, a2 = 1;
  t2 && g(e2) && (i2 = e2.offsetWidth > 0 && C(r2.width) / e2.offsetWidth || 1, a2 = e2.offsetHeight > 0 && C(r2.height) / e2.offsetHeight || 1);
  var o2 = (h(e2) ? m(e2) : window).visualViewport, s2 = !T() && n2, c2 = (r2.left + (s2 && o2 ? o2.offsetLeft : 0)) / i2, l2 = (r2.top + (s2 && o2 ? o2.offsetTop : 0)) / a2, u2 = r2.width / i2, d2 = r2.height / a2;
  return { width: u2, height: d2, top: l2, right: c2 + u2, bottom: l2 + d2, left: c2, x: c2, y: l2 };
}
function D(e2) {
  var t2 = m(e2);
  return { scrollLeft: t2.pageXOffset, scrollTop: t2.pageYOffset };
}
function O(e2) {
  return { scrollLeft: e2.scrollLeft, scrollTop: e2.scrollTop };
}
function k(e2) {
  return e2 === m(e2) || !g(e2) ? D(e2) : O(e2);
}
function A(e2) {
  return ((h(e2) ? e2.ownerDocument : e2.document) || window.document).documentElement;
}
function j(e2) {
  return E(A(e2)).left + D(e2).scrollLeft;
}
function M(e2) {
  return m(e2).getComputedStyle(e2);
}
function N(e2) {
  var t2 = M(e2), n2 = t2.overflow, r2 = t2.overflowX, i2 = t2.overflowY;
  return /auto|scroll|overlay|hidden/.test(n2 + i2 + r2);
}
function P(e2) {
  var t2 = e2.getBoundingClientRect(), n2 = C(t2.width) / e2.offsetWidth || 1, r2 = C(t2.height) / e2.offsetHeight || 1;
  return n2 !== 1 || r2 !== 1;
}
function F(e2, t2, n2) {
  n2 === void 0 && (n2 = false);
  var r2 = g(t2), i2 = g(t2) && P(t2), a2 = A(t2), o2 = E(e2, i2, n2), s2 = { scrollLeft: 0, scrollTop: 0 }, c2 = { x: 0, y: 0 };
  return (r2 || !r2 && !n2) && ((p(t2) !== `body` || N(a2)) && (s2 = k(t2)), g(t2) ? (c2 = E(t2, true), c2.x += t2.clientLeft, c2.y += t2.clientTop) : a2 && (c2.x = j(a2))), { x: o2.left + s2.scrollLeft - c2.x, y: o2.top + s2.scrollTop - c2.y, width: o2.width, height: o2.height };
}
function I(e2) {
  var t2 = E(e2), n2 = e2.offsetWidth, r2 = e2.offsetHeight;
  return Math.abs(t2.width - n2) <= 1 && (n2 = t2.width), Math.abs(t2.height - r2) <= 1 && (r2 = t2.height), { x: e2.offsetLeft, y: e2.offsetTop, width: n2, height: r2 };
}
function L(e2) {
  return p(e2) === `html` ? e2 : e2.assignedSlot || e2.parentNode || (_(e2) ? e2.host : null) || A(e2);
}
function R(e2) {
  return [`html`, `body`, `#document`].indexOf(p(e2)) >= 0 ? e2.ownerDocument.body : g(e2) && N(e2) ? e2 : R(L(e2));
}
function z(e2, t2) {
  t2 === void 0 && (t2 = []);
  var n2 = R(e2), r2 = n2 === e2.ownerDocument?.body, i2 = m(n2), a2 = r2 ? [i2].concat(i2.visualViewport || [], N(n2) ? n2 : []) : n2, o2 = t2.concat(a2);
  return r2 ? o2 : o2.concat(z(L(a2)));
}
function B(e2) {
  return [`table`, `td`, `th`].indexOf(p(e2)) >= 0;
}
function V(e2) {
  return !g(e2) || M(e2).position === `fixed` ? null : e2.offsetParent;
}
function ee(e2) {
  var t2 = /firefox/i.test(w());
  if (/Trident/i.test(w()) && g(e2) && M(e2).position === `fixed`) return null;
  var n2 = L(e2);
  for (_(n2) && (n2 = n2.host); g(n2) && [`html`, `body`].indexOf(p(n2)) < 0; ) {
    var r2 = M(n2);
    if (r2.transform !== `none` || r2.perspective !== `none` || r2.contain === `paint` || [`transform`, `perspective`].indexOf(r2.willChange) !== -1 || t2 && r2.willChange === `filter` || t2 && r2.filter && r2.filter !== `none`) return n2;
    n2 = n2.parentNode;
  }
  return null;
}
function te(e2) {
  for (var t2 = m(e2), n2 = V(e2); n2 && B(n2) && M(n2).position === `static`; ) n2 = V(n2);
  return n2 && (p(n2) === `html` || p(n2) === `body` && M(n2).position === `static`) ? t2 : n2 || ee(e2) || t2;
}
function ne(e2) {
  var t2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Set(), r2 = [];
  e2.forEach(function(e3) {
    t2.set(e3.name, e3);
  });
  function i2(e3) {
    n2.add(e3.name), [].concat(e3.requires || [], e3.requiresIfExists || []).forEach(function(e4) {
      if (!n2.has(e4)) {
        var r3 = t2.get(e4);
        r3 && i2(r3);
      }
    }), r2.push(e3);
  }
  return e2.forEach(function(e3) {
    n2.has(e3.name) || i2(e3);
  }), r2;
}
function H(e2) {
  var t2 = ne(e2);
  return f.reduce(function(e3, n2) {
    return e3.concat(t2.filter(function(e4) {
      return e4.phase === n2;
    }));
  }, []);
}
function re(e2) {
  var t2;
  return function() {
    return t2 || (t2 = new Promise(function(n2) {
      Promise.resolve().then(function() {
        t2 = void 0, n2(e2());
      });
    })), t2;
  };
}
function ie(e2) {
  var t2 = e2.reduce(function(e3, t3) {
    var n2 = e3[t3.name];
    return e3[t3.name] = n2 ? Object.assign({}, n2, t3, { options: Object.assign({}, n2.options, t3.options), data: Object.assign({}, n2.data, t3.data) }) : t3, e3;
  }, {});
  return Object.keys(t2).map(function(e3) {
    return t2[e3];
  });
}
function ae(e2, t2) {
  var n2 = m(e2), r2 = A(e2), i2 = n2.visualViewport, a2 = r2.clientWidth, o2 = r2.clientHeight, s2 = 0, c2 = 0;
  if (i2) {
    a2 = i2.width, o2 = i2.height;
    var l2 = T();
    (l2 || !l2 && t2 === `fixed`) && (s2 = i2.offsetLeft, c2 = i2.offsetTop);
  }
  return { width: a2, height: o2, x: s2 + j(e2), y: c2 };
}
function oe(e2) {
  var t2 = A(e2), n2 = D(e2), r2 = e2.ownerDocument?.body, i2 = x(t2.scrollWidth, t2.clientWidth, r2 ? r2.scrollWidth : 0, r2 ? r2.clientWidth : 0), a2 = x(t2.scrollHeight, t2.clientHeight, r2 ? r2.scrollHeight : 0, r2 ? r2.clientHeight : 0), o2 = -n2.scrollLeft + j(e2), s2 = -n2.scrollTop;
  return M(r2 || t2).direction === `rtl` && (o2 += x(t2.clientWidth, r2 ? r2.clientWidth : 0) - i2), { width: i2, height: a2, x: o2, y: s2 };
}
function U(e2, t2) {
  var n2 = t2.getRootNode && t2.getRootNode();
  if (e2.contains(t2)) return true;
  if (n2 && _(n2)) {
    var r2 = t2;
    do {
      if (r2 && e2.isSameNode(r2)) return true;
      r2 = r2.parentNode || r2.host;
    } while (r2);
  }
  return false;
}
function se(e2) {
  return Object.assign({}, e2, { left: e2.x, top: e2.y, right: e2.x + e2.width, bottom: e2.y + e2.height });
}
function ce(e2, t2) {
  var n2 = E(e2, false, t2 === `fixed`);
  return n2.top += e2.clientTop, n2.left += e2.clientLeft, n2.bottom = n2.top + e2.clientHeight, n2.right = n2.left + e2.clientWidth, n2.width = e2.clientWidth, n2.height = e2.clientHeight, n2.x = n2.left, n2.y = n2.top, n2;
}
function W(e2, t2, n2) {
  return t2 === `viewport` ? se(ae(e2, n2)) : h(t2) ? ce(t2, n2) : se(oe(A(e2)));
}
function le(e2) {
  var t2 = z(L(e2)), n2 = [`absolute`, `fixed`].indexOf(M(e2).position) >= 0 && g(e2) ? te(e2) : e2;
  return h(n2) ? t2.filter(function(e3) {
    return h(e3) && U(e3, n2) && p(e3) !== `body`;
  }) : [];
}
function ue(e2, t2, n2, r2) {
  var i2 = t2 === `clippingParents` ? le(e2) : [].concat(t2), a2 = [].concat(i2, [n2]), o2 = a2[0], s2 = a2.reduce(function(t3, n3) {
    var i3 = W(e2, n3, r2);
    return t3.top = x(i3.top, t3.top), t3.right = S(i3.right, t3.right), t3.bottom = S(i3.bottom, t3.bottom), t3.left = x(i3.left, t3.left), t3;
  }, W(e2, o2, r2));
  return s2.width = s2.right - s2.left, s2.height = s2.bottom - s2.top, s2.x = s2.left, s2.y = s2.top, s2;
}
function G(e2) {
  return e2.split(`-`)[0];
}
function K(e2) {
  return e2.split(`-`)[1];
}
function q(e2) {
  return [`top`, `bottom`].indexOf(e2) >= 0 ? `x` : `y`;
}
function de(r2) {
  var i2 = r2.reference, o2 = r2.element, s2 = r2.placement, c2 = s2 ? G(s2) : null, l2 = s2 ? K(s2) : null, u2 = i2.x + i2.width / 2 - o2.width / 2, d2 = i2.y + i2.height / 2 - o2.height / 2, f2;
  switch (c2) {
    case `top`:
      f2 = { x: u2, y: i2.y - o2.height };
      break;
    case e:
      f2 = { x: u2, y: i2.y + i2.height };
      break;
    case t:
      f2 = { x: i2.x + i2.width, y: d2 };
      break;
    case n:
      f2 = { x: i2.x - o2.width, y: d2 };
      break;
    default:
      f2 = { x: i2.x, y: i2.y };
  }
  var p2 = c2 ? q(c2) : null;
  if (p2 != null) {
    var m2 = p2 === `y` ? `height` : `width`;
    switch (l2) {
      case a:
        f2[p2] = f2[p2] - (i2[m2] / 2 - o2[m2] / 2);
        break;
      case `end`:
        f2[p2] = f2[p2] + (i2[m2] / 2 - o2[m2] / 2);
        break;
      default:
    }
  }
  return f2;
}
function fe() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function pe(e2) {
  return Object.assign({}, fe(), e2);
}
function me(e2, t2) {
  return t2.reduce(function(t3, n2) {
    return t3[n2] = e2, t3;
  }, {});
}
function J(e2, t2) {
  t2 === void 0 && (t2 = {});
  var n2 = t2, r2 = n2.placement, a2 = r2 === void 0 ? e2.placement : r2, u2 = n2.strategy, d2 = u2 === void 0 ? e2.strategy : u2, f2 = n2.boundary, p2 = f2 === void 0 ? o : f2, m2 = n2.rootBoundary, g2 = m2 === void 0 ? s : m2, _2 = n2.elementContext, v2 = _2 === void 0 ? c : _2, y2 = n2.altBoundary, b2 = y2 === void 0 ? false : y2, x2 = n2.padding, S2 = x2 === void 0 ? 0 : x2, C2 = pe(typeof S2 == `number` ? me(S2, i) : S2), w2 = v2 === `popper` ? l : c, T2 = e2.rects.popper, D2 = e2.elements[b2 ? w2 : v2], O2 = ue(h(D2) ? D2 : D2.contextElement || A(e2.elements.popper), p2, g2, d2), k2 = E(e2.elements.reference), j2 = de({ reference: k2, element: T2, strategy: `absolute`, placement: a2 }), M2 = se(Object.assign({}, T2, j2)), N2 = v2 === `popper` ? M2 : k2, P2 = { top: O2.top - N2.top + C2.top, bottom: N2.bottom - O2.bottom + C2.bottom, left: O2.left - N2.left + C2.left, right: N2.right - O2.right + C2.right }, F2 = e2.modifiersData.offset;
  if (v2 === `popper` && F2) {
    var I2 = F2[a2];
    Object.keys(P2).forEach(function(e3) {
      var t3 = [`right`, `bottom`].indexOf(e3) >= 0 ? 1 : -1, n3 = [`top`, `bottom`].indexOf(e3) >= 0 ? `y` : `x`;
      P2[e3] += I2[n3] * t3;
    });
  }
  return P2;
}
var he = { placement: `bottom`, modifiers: [], strategy: `absolute` };
function ge() {
  return ![...arguments].some(function(e2) {
    return !(e2 && typeof e2.getBoundingClientRect == `function`);
  });
}
function Y(e2) {
  e2 === void 0 && (e2 = {});
  var t2 = e2, n2 = t2.defaultModifiers, r2 = n2 === void 0 ? [] : n2, i2 = t2.defaultOptions, a2 = i2 === void 0 ? he : i2;
  return function(e3, t3, n3) {
    n3 === void 0 && (n3 = a2);
    var i3 = { placement: `bottom`, orderedModifiers: [], options: Object.assign({}, he, a2), modifiersData: {}, elements: { reference: e3, popper: t3 }, attributes: {}, styles: {} }, o2 = [], s2 = false, c2 = { state: i3, setOptions: function(n4) {
      var o3 = typeof n4 == `function` ? n4(i3.options) : n4;
      u2(), i3.options = Object.assign({}, a2, i3.options, o3), i3.scrollParents = { reference: h(e3) ? z(e3) : e3.contextElement ? z(e3.contextElement) : [], popper: z(t3) };
      var s3 = H(ie([].concat(r2, i3.options.modifiers)));
      return i3.orderedModifiers = s3.filter(function(e4) {
        return e4.enabled;
      }), l2(), c2.update();
    }, forceUpdate: function() {
      if (!s2) {
        var e4 = i3.elements, t4 = e4.reference, n4 = e4.popper;
        if (ge(t4, n4)) {
          i3.rects = { reference: F(t4, te(n4), i3.options.strategy === `fixed`), popper: I(n4) }, i3.reset = false, i3.placement = i3.options.placement, i3.orderedModifiers.forEach(function(e5) {
            return i3.modifiersData[e5.name] = Object.assign({}, e5.data);
          });
          for (var r3 = 0; r3 < i3.orderedModifiers.length; r3++) {
            if (i3.reset === true) {
              i3.reset = false, r3 = -1;
              continue;
            }
            var a3 = i3.orderedModifiers[r3], o3 = a3.fn, l3 = a3.options, u3 = l3 === void 0 ? {} : l3, d2 = a3.name;
            typeof o3 == `function` && (i3 = o3({ state: i3, options: u3, name: d2, instance: c2 }) || i3);
          }
        }
      }
    }, update: re(function() {
      return new Promise(function(e4) {
        c2.forceUpdate(), e4(i3);
      });
    }), destroy: function() {
      u2(), s2 = true;
    } };
    if (!ge(e3, t3)) return c2;
    c2.setOptions(n3).then(function(e4) {
      !s2 && n3.onFirstUpdate && n3.onFirstUpdate(e4);
    });
    function l2() {
      i3.orderedModifiers.forEach(function(e4) {
        var t4 = e4.name, n4 = e4.options, r3 = n4 === void 0 ? {} : n4, a3 = e4.effect;
        if (typeof a3 == `function`) {
          var s3 = a3({ state: i3, name: t4, instance: c2, options: r3 });
          o2.push(s3 || function() {
          });
        }
      });
    }
    function u2() {
      o2.forEach(function(e4) {
        return e4();
      }), o2 = [];
    }
    return c2;
  };
}
var X = { passive: true };
function _e(e2) {
  var t2 = e2.state, n2 = e2.instance, r2 = e2.options, i2 = r2.scroll, a2 = i2 === void 0 ? true : i2, o2 = r2.resize, s2 = o2 === void 0 ? true : o2, c2 = m(t2.elements.popper), l2 = [].concat(t2.scrollParents.reference, t2.scrollParents.popper);
  return a2 && l2.forEach(function(e3) {
    e3.addEventListener(`scroll`, n2.update, X);
  }), s2 && c2.addEventListener(`resize`, n2.update, X), function() {
    a2 && l2.forEach(function(e3) {
      e3.removeEventListener(`scroll`, n2.update, X);
    }), s2 && c2.removeEventListener(`resize`, n2.update, X);
  };
}
var ve = { name: `eventListeners`, enabled: true, phase: `write`, fn: function() {
}, effect: _e, data: {} };
function ye(e2) {
  var t2 = e2.state, n2 = e2.name;
  t2.modifiersData[n2] = de({ reference: t2.rects.reference, element: t2.rects.popper, strategy: `absolute`, placement: t2.placement });
}
var be = { name: `popperOffsets`, enabled: true, phase: `read`, fn: ye, data: {} }, xe = { top: `auto`, right: `auto`, bottom: `auto`, left: `auto` };
function Se(e2, t2) {
  var n2 = e2.x, r2 = e2.y, i2 = t2.devicePixelRatio || 1;
  return { x: C(n2 * i2) / i2 || 0, y: C(r2 * i2) / i2 || 0 };
}
function Ce(r2) {
  var i2, a2 = r2.popper, o2 = r2.popperRect, s2 = r2.placement, c2 = r2.variation, l2 = r2.offsets, u2 = r2.position, d2 = r2.gpuAcceleration, f2 = r2.adaptive, p2 = r2.roundOffsets, h2 = r2.isFixed, g2 = l2.x, _2 = g2 === void 0 ? 0 : g2, v2 = l2.y, y2 = v2 === void 0 ? 0 : v2, b2 = typeof p2 == `function` ? p2({ x: _2, y: y2 }) : { x: _2, y: y2 };
  _2 = b2.x, y2 = b2.y;
  var x2 = l2.hasOwnProperty(`x`), S2 = l2.hasOwnProperty(`y`), C2 = n, w2 = `top`, T2 = window;
  if (f2) {
    var E2 = te(a2), D2 = `clientHeight`, O2 = `clientWidth`;
    if (E2 === m(a2) && (E2 = A(a2), M(E2).position !== `static` && u2 === `absolute` && (D2 = `scrollHeight`, O2 = `scrollWidth`)), E2 = E2, s2 === `top` || (s2 === `left` || s2 === `right`) && c2 === `end`) {
      w2 = e;
      var k2 = h2 && E2 === T2 && T2.visualViewport ? T2.visualViewport.height : E2[D2];
      y2 -= k2 - o2.height, y2 *= d2 ? 1 : -1;
    }
    if (s2 === `left` || (s2 === `top` || s2 === `bottom`) && c2 === `end`) {
      C2 = t;
      var j2 = h2 && E2 === T2 && T2.visualViewport ? T2.visualViewport.width : E2[O2];
      _2 -= j2 - o2.width, _2 *= d2 ? 1 : -1;
    }
  }
  var N2 = Object.assign({ position: u2 }, f2 && xe), P2 = p2 === true ? Se({ x: _2, y: y2 }, m(a2)) : { x: _2, y: y2 };
  if (_2 = P2.x, y2 = P2.y, d2) {
    var F2;
    return Object.assign({}, N2, (F2 = {}, F2[w2] = S2 ? `0` : ``, F2[C2] = x2 ? `0` : ``, F2.transform = (T2.devicePixelRatio || 1) <= 1 ? `translate(` + _2 + `px, ` + y2 + `px)` : `translate3d(` + _2 + `px, ` + y2 + `px, 0)`, F2));
  }
  return Object.assign({}, N2, (i2 = {}, i2[w2] = S2 ? y2 + `px` : ``, i2[C2] = x2 ? _2 + `px` : ``, i2.transform = ``, i2));
}
function we(e2) {
  var t2 = e2.state, n2 = e2.options, r2 = n2.gpuAcceleration, i2 = r2 === void 0 ? true : r2, a2 = n2.adaptive, o2 = a2 === void 0 ? true : a2, s2 = n2.roundOffsets, c2 = s2 === void 0 ? true : s2, l2 = { placement: G(t2.placement), variation: K(t2.placement), popper: t2.elements.popper, popperRect: t2.rects.popper, gpuAcceleration: i2, isFixed: t2.options.strategy === `fixed` };
  t2.modifiersData.popperOffsets != null && (t2.styles.popper = Object.assign({}, t2.styles.popper, Ce(Object.assign({}, l2, { offsets: t2.modifiersData.popperOffsets, position: t2.options.strategy, adaptive: o2, roundOffsets: c2 })))), t2.modifiersData.arrow != null && (t2.styles.arrow = Object.assign({}, t2.styles.arrow, Ce(Object.assign({}, l2, { offsets: t2.modifiersData.arrow, position: `absolute`, adaptive: false, roundOffsets: c2 })))), t2.attributes.popper = Object.assign({}, t2.attributes.popper, { "data-popper-placement": t2.placement });
}
var Te = { name: `computeStyles`, enabled: true, phase: `beforeWrite`, fn: we, data: {} };
function Ee(e2, t2, n2) {
  var r2 = G(e2), i2 = [`left`, `top`].indexOf(r2) >= 0 ? -1 : 1, a2 = typeof n2 == `function` ? n2(Object.assign({}, t2, { placement: e2 })) : n2, o2 = a2[0], s2 = a2[1];
  return o2 || (o2 = 0), s2 = (s2 || 0) * i2, [`left`, `right`].indexOf(r2) >= 0 ? { x: s2, y: o2 } : { x: o2, y: s2 };
}
function De(e2) {
  var t2 = e2.state, n2 = e2.options, r2 = e2.name, i2 = n2.offset, a2 = i2 === void 0 ? [0, 0] : i2, o2 = d.reduce(function(e3, n3) {
    return e3[n3] = Ee(n3, t2.rects, a2), e3;
  }, {}), s2 = o2[t2.placement], c2 = s2.x, l2 = s2.y;
  t2.modifiersData.popperOffsets != null && (t2.modifiersData.popperOffsets.x += c2, t2.modifiersData.popperOffsets.y += l2), t2.modifiersData[r2] = o2;
}
var Oe = { name: `offset`, enabled: true, phase: `main`, requires: [`popperOffsets`], fn: De }, ke = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
function Ae(e2) {
  return e2.replace(/left|right|bottom|top/g, function(e3) {
    return ke[e3];
  });
}
var je = { start: `end`, end: `start` };
function Me(e2) {
  return e2.replace(/start|end/g, function(e3) {
    return je[e3];
  });
}
function Ne(e2, t2) {
  t2 === void 0 && (t2 = {});
  var n2 = t2, r2 = n2.placement, a2 = n2.boundary, o2 = n2.rootBoundary, s2 = n2.padding, c2 = n2.flipVariations, l2 = n2.allowedAutoPlacements, f2 = l2 === void 0 ? d : l2, p2 = K(r2), m2 = p2 ? c2 ? u : u.filter(function(e3) {
    return K(e3) === p2;
  }) : i, h2 = m2.filter(function(e3) {
    return f2.indexOf(e3) >= 0;
  });
  h2.length === 0 && (h2 = m2);
  var g2 = h2.reduce(function(t3, n3) {
    return t3[n3] = J(e2, { placement: n3, boundary: a2, rootBoundary: o2, padding: s2 })[G(n3)], t3;
  }, {});
  return Object.keys(g2).sort(function(e3, t3) {
    return g2[e3] - g2[t3];
  });
}
function Pe(e2) {
  if (G(e2) === `auto`) return [];
  var t2 = Ae(e2);
  return [Me(e2), t2, Me(t2)];
}
function Fe(r2) {
  var i2 = r2.state, o2 = r2.options, s2 = r2.name;
  if (!i2.modifiersData[s2]._skip) {
    for (var c2 = o2.mainAxis, l2 = c2 === void 0 ? true : c2, u2 = o2.altAxis, d2 = u2 === void 0 ? true : u2, f2 = o2.fallbackPlacements, p2 = o2.padding, m2 = o2.boundary, h2 = o2.rootBoundary, g2 = o2.altBoundary, _2 = o2.flipVariations, v2 = _2 === void 0 ? true : _2, y2 = o2.allowedAutoPlacements, b2 = i2.options.placement, x2 = G(b2) === b2, S2 = f2 || (x2 || !v2 ? [Ae(b2)] : Pe(b2)), C2 = [b2].concat(S2).reduce(function(e2, t2) {
      return e2.concat(G(t2) === `auto` ? Ne(i2, { placement: t2, boundary: m2, rootBoundary: h2, padding: p2, flipVariations: v2, allowedAutoPlacements: y2 }) : t2);
    }, []), w2 = i2.rects.reference, T2 = i2.rects.popper, E2 = /* @__PURE__ */ new Map(), D2 = true, O2 = C2[0], k2 = 0; k2 < C2.length; k2++) {
      var A2 = C2[k2], j2 = G(A2), M2 = K(A2) === a, N2 = [`top`, e].indexOf(j2) >= 0, P2 = N2 ? `width` : `height`, F2 = J(i2, { placement: A2, boundary: m2, rootBoundary: h2, altBoundary: g2, padding: p2 }), I2 = N2 ? M2 ? t : n : M2 ? e : `top`;
      w2[P2] > T2[P2] && (I2 = Ae(I2));
      var L2 = Ae(I2), R2 = [];
      if (l2 && R2.push(F2[j2] <= 0), d2 && R2.push(F2[I2] <= 0, F2[L2] <= 0), R2.every(function(e2) {
        return e2;
      })) {
        O2 = A2, D2 = false;
        break;
      }
      E2.set(A2, R2);
    }
    if (D2) for (var z2 = v2 ? 3 : 1, B2 = function(e2) {
      var t2 = C2.find(function(t3) {
        var n2 = E2.get(t3);
        if (n2) return n2.slice(0, e2).every(function(e3) {
          return e3;
        });
      });
      if (t2) return O2 = t2, `break`;
    }, V2 = z2; V2 > 0 && B2(V2) !== `break`; V2--) ;
    i2.placement !== O2 && (i2.modifiersData[s2]._skip = true, i2.placement = O2, i2.reset = true);
  }
}
var Ie = { name: `flip`, enabled: true, phase: `main`, fn: Fe, requiresIfExists: [`offset`], data: { _skip: false } };
function Le(e2) {
  return e2 === `x` ? `y` : `x`;
}
function Re(e2, t2, n2) {
  return x(e2, S(t2, n2));
}
function ze(e2, t2, n2) {
  var r2 = Re(e2, t2, n2);
  return r2 > n2 ? n2 : r2;
}
function Be(r2) {
  var i2 = r2.state, a2 = r2.options, o2 = r2.name, s2 = a2.mainAxis, c2 = s2 === void 0 ? true : s2, l2 = a2.altAxis, u2 = l2 === void 0 ? false : l2, d2 = a2.boundary, f2 = a2.rootBoundary, p2 = a2.altBoundary, m2 = a2.padding, h2 = a2.tether, g2 = h2 === void 0 ? true : h2, _2 = a2.tetherOffset, v2 = _2 === void 0 ? 0 : _2, y2 = J(i2, { boundary: d2, rootBoundary: f2, padding: m2, altBoundary: p2 }), b2 = G(i2.placement), C2 = K(i2.placement), w2 = !C2, T2 = q(b2), E2 = Le(T2), D2 = i2.modifiersData.popperOffsets, O2 = i2.rects.reference, k2 = i2.rects.popper, A2 = typeof v2 == `function` ? v2(Object.assign({}, i2.rects, { placement: i2.placement })) : v2, j2 = typeof A2 == `number` ? { mainAxis: A2, altAxis: A2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, A2), M2 = i2.modifiersData.offset ? i2.modifiersData.offset[i2.placement] : null, N2 = { x: 0, y: 0 };
  if (D2) {
    if (c2) {
      var P2 = T2 === `y` ? `top` : n, F2 = T2 === `y` ? e : t, L2 = T2 === `y` ? `height` : `width`, R2 = D2[T2], z2 = R2 + y2[P2], B2 = R2 - y2[F2], V2 = g2 ? -k2[L2] / 2 : 0, ee2 = C2 === `start` ? O2[L2] : k2[L2], ne2 = C2 === `start` ? -k2[L2] : -O2[L2], H2 = i2.elements.arrow, re2 = g2 && H2 ? I(H2) : { width: 0, height: 0 }, ie2 = i2.modifiersData[`arrow#persistent`] ? i2.modifiersData[`arrow#persistent`].padding : fe(), ae2 = ie2[P2], oe2 = ie2[F2], U2 = Re(0, O2[L2], re2[L2]), se2 = w2 ? O2[L2] / 2 - V2 - U2 - ae2 - j2.mainAxis : ee2 - U2 - ae2 - j2.mainAxis, ce2 = w2 ? -O2[L2] / 2 + V2 + U2 + oe2 + j2.mainAxis : ne2 + U2 + oe2 + j2.mainAxis, W2 = i2.elements.arrow && te(i2.elements.arrow), le2 = W2 ? T2 === `y` ? W2.clientTop || 0 : W2.clientLeft || 0 : 0, ue2 = M2?.[T2] ?? 0, de2 = R2 + se2 - ue2 - le2, pe2 = R2 + ce2 - ue2, me2 = Re(g2 ? S(z2, de2) : z2, R2, g2 ? x(B2, pe2) : B2);
      D2[T2] = me2, N2[T2] = me2 - R2;
    }
    if (u2) {
      var he2 = T2 === `x` ? `top` : n, ge2 = T2 === `x` ? e : t, Y2 = D2[E2], X2 = E2 === `y` ? `height` : `width`, _e2 = Y2 + y2[he2], ve2 = Y2 - y2[ge2], ye2 = [`top`, n].indexOf(b2) !== -1, be2 = M2?.[E2] ?? 0, xe2 = ye2 ? _e2 : Y2 - O2[X2] - k2[X2] - be2 + j2.altAxis, Se2 = ye2 ? Y2 + O2[X2] + k2[X2] - be2 - j2.altAxis : ve2, Ce2 = g2 && ye2 ? ze(xe2, Y2, Se2) : Re(g2 ? xe2 : _e2, Y2, g2 ? Se2 : ve2);
      D2[E2] = Ce2, N2[E2] = Ce2 - Y2;
    }
    i2.modifiersData[o2] = N2;
  }
}
var Ve = { name: `preventOverflow`, enabled: true, phase: `main`, fn: Be, requiresIfExists: [`offset`] }, He = function(e2, t2) {
  return e2 = typeof e2 == `function` ? e2(Object.assign({}, t2.rects, { placement: t2.placement })) : e2, pe(typeof e2 == `number` ? me(e2, i) : e2);
};
function Ue(r2) {
  var i2, a2 = r2.state, o2 = r2.name, s2 = r2.options, c2 = a2.elements.arrow, l2 = a2.modifiersData.popperOffsets, u2 = G(a2.placement), d2 = q(u2), f2 = [`left`, `right`].indexOf(u2) >= 0 ? `height` : `width`;
  if (!(!c2 || !l2)) {
    var p2 = He(s2.padding, a2), m2 = I(c2), h2 = d2 === `y` ? `top` : n, g2 = d2 === `y` ? e : t, _2 = a2.rects.reference[f2] + a2.rects.reference[d2] - l2[d2] - a2.rects.popper[f2], v2 = l2[d2] - a2.rects.reference[d2], y2 = te(c2), b2 = y2 ? d2 === `y` ? y2.clientHeight || 0 : y2.clientWidth || 0 : 0, x2 = _2 / 2 - v2 / 2, S2 = p2[h2], C2 = b2 - m2[f2] - p2[g2], w2 = b2 / 2 - m2[f2] / 2 + x2, T2 = Re(S2, w2, C2), E2 = d2;
    a2.modifiersData[o2] = (i2 = {}, i2[E2] = T2, i2.centerOffset = T2 - w2, i2);
  }
}
function We(e2) {
  var t2 = e2.state, n2 = e2.options.element, r2 = n2 === void 0 ? `[data-popper-arrow]` : n2;
  r2 != null && (typeof r2 == `string` && (r2 = t2.elements.popper.querySelector(r2), !r2) || U(t2.elements.popper, r2) && (t2.elements.arrow = r2));
}
var Ge = { name: `arrow`, enabled: true, phase: `main`, fn: Ue, effect: We, requires: [`popperOffsets`], requiresIfExists: [`preventOverflow`] };
function Ke(e2, t2, n2) {
  return n2 === void 0 && (n2 = { x: 0, y: 0 }), { top: e2.top - t2.height - n2.y, right: e2.right - t2.width + n2.x, bottom: e2.bottom - t2.height + n2.y, left: e2.left - t2.width - n2.x };
}
function qe(r2) {
  return [`top`, t, e, n].some(function(e2) {
    return r2[e2] >= 0;
  });
}
function Je(e2) {
  var t2 = e2.state, n2 = e2.name, r2 = t2.rects.reference, i2 = t2.rects.popper, a2 = t2.modifiersData.preventOverflow, o2 = J(t2, { elementContext: `reference` }), s2 = J(t2, { altBoundary: true }), c2 = Ke(o2, r2), l2 = Ke(s2, i2, a2), u2 = qe(c2), d2 = qe(l2);
  t2.modifiersData[n2] = { referenceClippingOffsets: c2, popperEscapeOffsets: l2, isReferenceHidden: u2, hasPopperEscaped: d2 }, t2.attributes.popper = Object.assign({}, t2.attributes.popper, { "data-popper-reference-hidden": u2, "data-popper-escaped": d2 });
}
var Ye = Y({ defaultModifiers: [ve, be, Te, b, Oe, Ie, Ve, Ge, { name: `hide`, enabled: true, phase: `main`, requiresIfExists: [`preventOverflow`], fn: Je }] }), Xe = `tippy-box`, Ze = `tippy-content`, Qe = `tippy-backdrop`, $e = `tippy-arrow`, et = `tippy-svg-arrow`, Z = { passive: true, capture: true }, tt = function() {
  return document.body;
};
function nt(e2, t2, n2) {
  return Array.isArray(e2) ? e2[t2] ?? (Array.isArray(n2) ? n2[t2] : n2) : e2;
}
function rt(e2, t2) {
  var n2 = {}.toString.call(e2);
  return n2.indexOf(`[object`) === 0 && n2.indexOf(t2 + `]`) > -1;
}
function it(e2, t2) {
  return typeof e2 == `function` ? e2.apply(void 0, t2) : e2;
}
function at(e2, t2) {
  if (t2 === 0) return e2;
  var n2;
  return function(r2) {
    clearTimeout(n2), n2 = setTimeout(function() {
      e2(r2);
    }, t2);
  };
}
function ot(e2) {
  return e2.split(/\s+/).filter(Boolean);
}
function st(e2) {
  return [].concat(e2);
}
function ct(e2, t2) {
  e2.indexOf(t2) === -1 && e2.push(t2);
}
function lt(e2) {
  return e2.filter(function(t2, n2) {
    return e2.indexOf(t2) === n2;
  });
}
function ut(e2) {
  return e2.split(`-`)[0];
}
function dt(e2) {
  return [].slice.call(e2);
}
function ft(e2) {
  return Object.keys(e2).reduce(function(t2, n2) {
    return e2[n2] !== void 0 && (t2[n2] = e2[n2]), t2;
  }, {});
}
function pt() {
  return document.createElement(`div`);
}
function mt(e2) {
  return [`Element`, `Fragment`].some(function(t2) {
    return rt(e2, t2);
  });
}
function ht(e2) {
  return rt(e2, `NodeList`);
}
function gt(e2) {
  return rt(e2, `MouseEvent`);
}
function _t(e2) {
  return !!(e2 && e2._tippy && e2._tippy.reference === e2);
}
function vt(e2) {
  return mt(e2) ? [e2] : ht(e2) ? dt(e2) : Array.isArray(e2) ? e2 : dt(document.querySelectorAll(e2));
}
function yt(e2, t2) {
  e2.forEach(function(e3) {
    e3 && (e3.style.transitionDuration = t2 + `ms`);
  });
}
function bt(e2, t2) {
  e2.forEach(function(e3) {
    e3 && e3.setAttribute(`data-state`, t2);
  });
}
function xt(e2) {
  var t2, n2 = st(e2)[0];
  return n2 != null && (t2 = n2.ownerDocument) != null && t2.body ? n2.ownerDocument : document;
}
function St(e2, t2) {
  var n2 = t2.clientX, r2 = t2.clientY;
  return e2.every(function(e3) {
    var t3 = e3.popperRect, i2 = e3.popperState, a2 = e3.props.interactiveBorder, o2 = ut(i2.placement), s2 = i2.modifiersData.offset;
    if (!s2) return true;
    var c2 = o2 === `bottom` ? s2.top.y : 0, l2 = o2 === `top` ? s2.bottom.y : 0, u2 = o2 === `right` ? s2.left.x : 0, d2 = o2 === `left` ? s2.right.x : 0, f2 = t3.top - r2 + c2 > a2, p2 = r2 - t3.bottom - l2 > a2, m2 = t3.left - n2 + u2 > a2, h2 = n2 - t3.right - d2 > a2;
    return f2 || p2 || m2 || h2;
  });
}
function Ct(e2, t2, n2) {
  var r2 = t2 + `EventListener`;
  [`transitionend`, `webkitTransitionEnd`].forEach(function(t3) {
    e2[r2](t3, n2);
  });
}
function wt(e2, t2) {
  for (var n2 = t2; n2; ) {
    if (e2.contains(n2)) return true;
    n2 = n2.getRootNode == null ? void 0 : n2.getRootNode()?.host;
  }
  return false;
}
var Q = { isTouch: false }, Tt = 0;
function Et() {
  Q.isTouch || (Q.isTouch = true, window.performance && document.addEventListener(`mousemove`, Dt));
}
function Dt() {
  var e2 = performance.now();
  e2 - Tt < 20 && (Q.isTouch = false, document.removeEventListener(`mousemove`, Dt)), Tt = e2;
}
function Ot() {
  var e2 = document.activeElement;
  if (_t(e2)) {
    var t2 = e2._tippy;
    e2.blur && !t2.state.isVisible && e2.blur();
  }
}
function kt() {
  document.addEventListener(`touchstart`, Et, Z), window.addEventListener(`blur`, Ot);
}
var At = typeof window < `u` && typeof document < `u` ? !!window.msCrypto : false, $ = Object.assign({ appendTo: tt, aria: { content: `auto`, expanded: `auto` }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: ``, offset: [0, 10], onAfterUpdate: function() {
}, onBeforeUpdate: function() {
}, onCreate: function() {
}, onDestroy: function() {
}, onHidden: function() {
}, onHide: function() {
}, onMount: function() {
}, onShow: function() {
}, onShown: function() {
}, onTrigger: function() {
}, onUntrigger: function() {
}, onClickOutside: function() {
}, placement: `top`, plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: `mouseenter focus`, triggerTarget: null }, { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false }, { allowHTML: false, animation: `fade`, arrow: true, content: ``, inertia: false, maxWidth: 350, role: `tooltip`, theme: ``, zIndex: 9999 }), jt = Object.keys($), Mt = function(e2) {
  Object.keys(e2).forEach(function(t2) {
    $[t2] = e2[t2];
  });
};
function Nt(e2) {
  var t2 = (e2.plugins || []).reduce(function(t3, n2) {
    var r2 = n2.name, i2 = n2.defaultValue;
    return r2 && (t3[r2] = e2[r2] === void 0 ? $[r2] ?? i2 : e2[r2]), t3;
  }, {});
  return Object.assign({}, e2, t2);
}
function Pt(e2, t2) {
  return (t2 ? Object.keys(Nt(Object.assign({}, $, { plugins: t2 }))) : jt).reduce(function(t3, n2) {
    var r2 = (e2.getAttribute(`data-tippy-` + n2) || ``).trim();
    if (!r2) return t3;
    if (n2 === `content`) t3[n2] = r2;
    else try {
      t3[n2] = JSON.parse(r2);
    } catch {
      t3[n2] = r2;
    }
    return t3;
  }, {});
}
function Ft(e2, t2) {
  var n2 = Object.assign({}, t2, { content: it(t2.content, [e2]) }, t2.ignoreAttributes ? {} : Pt(e2, t2.plugins));
  return n2.aria = Object.assign({}, $.aria, n2.aria), n2.aria = { expanded: n2.aria.expanded === `auto` ? t2.interactive : n2.aria.expanded, content: n2.aria.content === `auto` ? t2.interactive ? null : `describedby` : n2.aria.content }, n2;
}
var It = function() {
  return `innerHTML`;
};
function Lt(e2, t2) {
  e2[It()] = t2;
}
function Rt(e2) {
  var t2 = pt();
  return e2 === true ? t2.className = $e : (t2.className = et, mt(e2) ? t2.appendChild(e2) : Lt(t2, e2)), t2;
}
function zt(e2, t2) {
  mt(t2.content) ? (Lt(e2, ``), e2.appendChild(t2.content)) : typeof t2.content != `function` && (t2.allowHTML ? Lt(e2, t2.content) : e2.textContent = t2.content);
}
function Bt(e2) {
  var t2 = e2.firstElementChild, n2 = dt(t2.children);
  return { box: t2, content: n2.find(function(e3) {
    return e3.classList.contains(Ze);
  }), arrow: n2.find(function(e3) {
    return e3.classList.contains($e) || e3.classList.contains(et);
  }), backdrop: n2.find(function(e3) {
    return e3.classList.contains(Qe);
  }) };
}
function Vt(e2) {
  var t2 = pt(), n2 = pt();
  n2.className = Xe, n2.setAttribute(`data-state`, `hidden`), n2.setAttribute(`tabindex`, `-1`);
  var r2 = pt();
  r2.className = Ze, r2.setAttribute(`data-state`, `hidden`), zt(r2, e2.props), t2.appendChild(n2), n2.appendChild(r2), i2(e2.props, e2.props);
  function i2(n3, r3) {
    var i3 = Bt(t2), a2 = i3.box, o2 = i3.content, s2 = i3.arrow;
    r3.theme ? a2.setAttribute(`data-theme`, r3.theme) : a2.removeAttribute(`data-theme`), typeof r3.animation == `string` ? a2.setAttribute(`data-animation`, r3.animation) : a2.removeAttribute(`data-animation`), r3.inertia ? a2.setAttribute(`data-inertia`, ``) : a2.removeAttribute(`data-inertia`), a2.style.maxWidth = typeof r3.maxWidth == `number` ? r3.maxWidth + `px` : r3.maxWidth, r3.role ? a2.setAttribute(`role`, r3.role) : a2.removeAttribute(`role`), (n3.content !== r3.content || n3.allowHTML !== r3.allowHTML) && zt(o2, e2.props), r3.arrow ? s2 ? n3.arrow !== r3.arrow && (a2.removeChild(s2), a2.appendChild(Rt(r3.arrow))) : a2.appendChild(Rt(r3.arrow)) : s2 && a2.removeChild(s2);
  }
  return { popper: t2, onUpdate: i2 };
}
Vt.$$tippy = true;
var Ht = 1, Ut = [], Wt = [];
function Gt(e2, t2) {
  var n2 = Ft(e2, Object.assign({}, $, Nt(ft(t2)))), r2, i2, a2, o2 = false, s2 = false, c2 = false, l2 = false, u2, d2, f2, p2 = [], m2 = at(oe2, n2.interactiveDebounce), h2, g2 = Ht++, _2 = null, v2 = lt(n2.plugins), y2 = { id: g2, reference: e2, popper: pt(), popperInstance: _2, props: n2, state: { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, plugins: v2, clearDelayTimeouts: pe2, setProps: me2, setContent: J2, show: he2, hide: ge2, hideWithInteractivity: Y2, enable: de2, disable: fe2, unmount: X2, destroy: _e2 };
  if (!n2.render) return y2;
  var b2 = n2.render(y2), x2 = b2.popper, S2 = b2.onUpdate;
  x2.setAttribute(`data-tippy-root`, ``), x2.id = `tippy-` + y2.id, y2.popper = x2, e2._tippy = y2, x2._tippy = y2;
  var C2 = v2.map(function(e3) {
    return e3.fn(y2);
  }), w2 = e2.hasAttribute(`aria-expanded`);
  return re2(), F2(), M2(), N2(`onCreate`, [y2]), n2.showOnCreate && K2(), x2.addEventListener(`mouseenter`, function() {
    y2.props.interactive && y2.state.isVisible && y2.clearDelayTimeouts();
  }), x2.addEventListener(`mouseleave`, function() {
    y2.props.interactive && y2.props.trigger.indexOf(`mouseenter`) >= 0 && k2().addEventListener(`mousemove`, m2);
  }), y2;
  function T2() {
    var e3 = y2.props.touch;
    return Array.isArray(e3) ? e3 : [e3, 0];
  }
  function E2() {
    return T2()[0] === `hold`;
  }
  function D2() {
    var e3;
    return !!((e3 = y2.props.render) != null && e3.$$tippy);
  }
  function O2() {
    return h2 || e2;
  }
  function k2() {
    var e3 = O2().parentNode;
    return e3 ? xt(e3) : document;
  }
  function A2() {
    return Bt(x2);
  }
  function j2(e3) {
    return y2.state.isMounted && !y2.state.isVisible || Q.isTouch || u2 && u2.type === `focus` ? 0 : nt(y2.props.delay, +!e3, $.delay);
  }
  function M2(e3) {
    e3 === void 0 && (e3 = false), x2.style.pointerEvents = y2.props.interactive && !e3 ? `` : `none`, x2.style.zIndex = `` + y2.props.zIndex;
  }
  function N2(e3, t3, n3) {
    if (n3 === void 0 && (n3 = true), C2.forEach(function(n4) {
      n4[e3] && n4[e3].apply(n4, t3);
    }), n3) {
      var r3;
      (r3 = y2.props)[e3].apply(r3, t3);
    }
  }
  function P2() {
    var t3 = y2.props.aria;
    if (t3.content) {
      var n3 = `aria-` + t3.content, r3 = x2.id;
      st(y2.props.triggerTarget || e2).forEach(function(e3) {
        var t4 = e3.getAttribute(n3);
        if (y2.state.isVisible) e3.setAttribute(n3, t4 ? t4 + ` ` + r3 : r3);
        else {
          var i3 = t4 && t4.replace(r3, ``).trim();
          i3 ? e3.setAttribute(n3, i3) : e3.removeAttribute(n3);
        }
      });
    }
  }
  function F2() {
    w2 || !y2.props.aria.expanded || st(y2.props.triggerTarget || e2).forEach(function(e3) {
      y2.props.interactive ? e3.setAttribute(`aria-expanded`, y2.state.isVisible && e3 === O2() ? `true` : `false`) : e3.removeAttribute(`aria-expanded`);
    });
  }
  function I2() {
    k2().removeEventListener(`mousemove`, m2), Ut = Ut.filter(function(e3) {
      return e3 !== m2;
    });
  }
  function L2(t3) {
    if (!(Q.isTouch && (c2 || t3.type === `mousedown`))) {
      var n3 = t3.composedPath && t3.composedPath()[0] || t3.target;
      if (!(y2.props.interactive && wt(x2, n3))) {
        if (st(y2.props.triggerTarget || e2).some(function(e3) {
          return wt(e3, n3);
        })) {
          if (Q.isTouch || y2.state.isVisible && y2.props.trigger.indexOf(`click`) >= 0) return;
        } else N2(`onClickOutside`, [y2, t3]);
        y2.props.hideOnClick === true && (y2.clearDelayTimeouts(), y2.hide(), s2 = true, setTimeout(function() {
          s2 = false;
        }), y2.state.isMounted || V2());
      }
    }
  }
  function R2() {
    c2 = true;
  }
  function z2() {
    c2 = false;
  }
  function B2() {
    var e3 = k2();
    e3.addEventListener(`mousedown`, L2, true), e3.addEventListener(`touchend`, L2, Z), e3.addEventListener(`touchstart`, z2, Z), e3.addEventListener(`touchmove`, R2, Z);
  }
  function V2() {
    var e3 = k2();
    e3.removeEventListener(`mousedown`, L2, true), e3.removeEventListener(`touchend`, L2, Z), e3.removeEventListener(`touchstart`, z2, Z), e3.removeEventListener(`touchmove`, R2, Z);
  }
  function ee2(e3, t3) {
    ne2(e3, function() {
      !y2.state.isVisible && x2.parentNode && x2.parentNode.contains(x2) && t3();
    });
  }
  function te2(e3, t3) {
    ne2(e3, t3);
  }
  function ne2(e3, t3) {
    var n3 = A2().box;
    function r3(e4) {
      e4.target === n3 && (Ct(n3, `remove`, r3), t3());
    }
    if (e3 === 0) return t3();
    Ct(n3, `remove`, d2), Ct(n3, `add`, r3), d2 = r3;
  }
  function H2(t3, n3, r3) {
    r3 === void 0 && (r3 = false), st(y2.props.triggerTarget || e2).forEach(function(e3) {
      e3.addEventListener(t3, n3, r3), p2.push({ node: e3, eventType: t3, handler: n3, options: r3 });
    });
  }
  function re2() {
    E2() && (H2(`touchstart`, ae2, { passive: true }), H2(`touchend`, U2, { passive: true })), ot(y2.props.trigger).forEach(function(e3) {
      if (e3 !== `manual`) switch (H2(e3, ae2), e3) {
        case `mouseenter`:
          H2(`mouseleave`, U2);
          break;
        case `focus`:
          H2(At ? `focusout` : `blur`, se2);
          break;
        case `focusin`:
          H2(`focusout`, se2);
          break;
      }
    });
  }
  function ie2() {
    p2.forEach(function(e3) {
      var t3 = e3.node, n3 = e3.eventType, r3 = e3.handler, i3 = e3.options;
      t3.removeEventListener(n3, r3, i3);
    }), p2 = [];
  }
  function ae2(e3) {
    var t3 = false;
    if (!(!y2.state.isEnabled || ce2(e3) || s2)) {
      var n3 = u2?.type === `focus`;
      u2 = e3, h2 = e3.currentTarget, F2(), !y2.state.isVisible && gt(e3) && Ut.forEach(function(t4) {
        return t4(e3);
      }), e3.type === `click` && (y2.props.trigger.indexOf(`mouseenter`) < 0 || o2) && y2.props.hideOnClick !== false && y2.state.isVisible ? t3 = true : K2(e3), e3.type === `click` && (o2 = !t3), t3 && !n3 && q2(e3);
    }
  }
  function oe2(e3) {
    var t3 = e3.target, r3 = O2().contains(t3) || x2.contains(t3);
    e3.type === `mousemove` && r3 || St(G2().concat(x2).map(function(e4) {
      var t4 = e4._tippy.popperInstance?.state;
      return t4 ? { popperRect: e4.getBoundingClientRect(), popperState: t4, props: n2 } : null;
    }).filter(Boolean), e3) && (I2(), q2(e3));
  }
  function U2(e3) {
    if (!(ce2(e3) || y2.props.trigger.indexOf(`click`) >= 0 && o2)) {
      if (y2.props.interactive) {
        y2.hideWithInteractivity(e3);
        return;
      }
      q2(e3);
    }
  }
  function se2(e3) {
    y2.props.trigger.indexOf(`focusin`) < 0 && e3.target !== O2() || y2.props.interactive && e3.relatedTarget && x2.contains(e3.relatedTarget) || q2(e3);
  }
  function ce2(e3) {
    return Q.isTouch ? E2() !== e3.type.indexOf(`touch`) >= 0 : false;
  }
  function W2() {
    le2();
    var t3 = y2.props, n3 = t3.popperOptions, r3 = t3.placement, i3 = t3.offset, a3 = t3.getReferenceClientRect, o3 = t3.moveTransition, s3 = D2() ? Bt(x2).arrow : null, c3 = a3 ? { getBoundingClientRect: a3, contextElement: a3.contextElement || O2() } : e2, l3 = [{ name: `offset`, options: { offset: i3 } }, { name: `preventOverflow`, options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: `flip`, options: { padding: 5 } }, { name: `computeStyles`, options: { adaptive: !o3 } }, { name: `$$tippy`, enabled: true, phase: `beforeWrite`, requires: [`computeStyles`], fn: function(e3) {
      var t4 = e3.state;
      if (D2()) {
        var n4 = A2().box;
        [`placement`, `reference-hidden`, `escaped`].forEach(function(e4) {
          e4 === `placement` ? n4.setAttribute(`data-placement`, t4.placement) : t4.attributes.popper[`data-popper-` + e4] ? n4.setAttribute(`data-` + e4, ``) : n4.removeAttribute(`data-` + e4);
        }), t4.attributes.popper = {};
      }
    } }];
    D2() && s3 && l3.push({ name: `arrow`, options: { element: s3, padding: 3 } }), l3.push.apply(l3, n3?.modifiers || []), y2.popperInstance = Ye(c3, x2, Object.assign({}, n3, { placement: r3, onFirstUpdate: f2, modifiers: l3 }));
  }
  function le2() {
    y2.popperInstance && (y2.popperInstance = (y2.popperInstance.destroy(), null));
  }
  function ue2() {
    var e3 = y2.props.appendTo, t3, n3 = O2();
    t3 = y2.props.interactive && e3 === tt || e3 === `parent` ? n3.parentNode : it(e3, [n3]), t3.contains(x2) || t3.appendChild(x2), y2.state.isMounted = true, W2();
  }
  function G2() {
    return dt(x2.querySelectorAll(`[data-tippy-root]`));
  }
  function K2(e3) {
    y2.clearDelayTimeouts(), e3 && N2(`onTrigger`, [y2, e3]), B2();
    var t3 = j2(true), n3 = T2(), i3 = n3[0], a3 = n3[1];
    Q.isTouch && i3 === `hold` && a3 && (t3 = a3), t3 ? r2 = setTimeout(function() {
      y2.show();
    }, t3) : y2.show();
  }
  function q2(e3) {
    if (y2.clearDelayTimeouts(), N2(`onUntrigger`, [y2, e3]), !y2.state.isVisible) {
      V2();
      return;
    }
    if (!(y2.props.trigger.indexOf(`mouseenter`) >= 0 && y2.props.trigger.indexOf(`click`) >= 0 && [`mouseleave`, `mousemove`].indexOf(e3.type) >= 0 && o2)) {
      var t3 = j2(false);
      t3 ? i2 = setTimeout(function() {
        y2.state.isVisible && y2.hide();
      }, t3) : a2 = requestAnimationFrame(function() {
        y2.hide();
      });
    }
  }
  function de2() {
    y2.state.isEnabled = true;
  }
  function fe2() {
    y2.hide(), y2.state.isEnabled = false;
  }
  function pe2() {
    clearTimeout(r2), clearTimeout(i2), cancelAnimationFrame(a2);
  }
  function me2(t3) {
    if (!y2.state.isDestroyed) {
      N2(`onBeforeUpdate`, [y2, t3]), ie2();
      var n3 = y2.props, r3 = Ft(e2, Object.assign({}, n3, ft(t3), { ignoreAttributes: true }));
      y2.props = r3, re2(), n3.interactiveDebounce !== r3.interactiveDebounce && (I2(), m2 = at(oe2, r3.interactiveDebounce)), n3.triggerTarget && !r3.triggerTarget ? st(n3.triggerTarget).forEach(function(e3) {
        e3.removeAttribute(`aria-expanded`);
      }) : r3.triggerTarget && e2.removeAttribute(`aria-expanded`), F2(), M2(), S2 && S2(n3, r3), y2.popperInstance && (W2(), G2().forEach(function(e3) {
        requestAnimationFrame(e3._tippy.popperInstance.forceUpdate);
      })), N2(`onAfterUpdate`, [y2, t3]);
    }
  }
  function J2(e3) {
    y2.setProps({ content: e3 });
  }
  function he2() {
    var e3 = y2.state.isVisible, t3 = y2.state.isDestroyed, n3 = !y2.state.isEnabled, r3 = Q.isTouch && !y2.props.touch, i3 = nt(y2.props.duration, 0, $.duration);
    if (!(e3 || t3 || n3 || r3) && !O2().hasAttribute(`disabled`) && (N2(`onShow`, [y2], false), y2.props.onShow(y2) !== false)) {
      if (y2.state.isVisible = true, D2() && (x2.style.visibility = `visible`), M2(), B2(), y2.state.isMounted || (x2.style.transition = `none`), D2()) {
        var a3 = A2(), o3 = a3.box, s3 = a3.content;
        yt([o3, s3], 0);
      }
      f2 = function() {
        var e4;
        if (!(!y2.state.isVisible || l2)) {
          if (l2 = true, x2.offsetHeight, x2.style.transition = y2.props.moveTransition, D2() && y2.props.animation) {
            var t4 = A2(), n4 = t4.box, r4 = t4.content;
            yt([n4, r4], i3), bt([n4, r4], `visible`);
          }
          P2(), F2(), ct(Wt, y2), (e4 = y2.popperInstance) == null || e4.forceUpdate(), N2(`onMount`, [y2]), y2.props.animation && D2() && te2(i3, function() {
            y2.state.isShown = true, N2(`onShown`, [y2]);
          });
        }
      }, ue2();
    }
  }
  function ge2() {
    var e3 = !y2.state.isVisible, t3 = y2.state.isDestroyed, n3 = !y2.state.isEnabled, r3 = nt(y2.props.duration, 1, $.duration);
    if (!(e3 || t3 || n3) && (N2(`onHide`, [y2], false), y2.props.onHide(y2) !== false)) {
      if (y2.state.isVisible = false, y2.state.isShown = false, l2 = false, o2 = false, D2() && (x2.style.visibility = `hidden`), I2(), V2(), M2(true), D2()) {
        var i3 = A2(), a3 = i3.box, s3 = i3.content;
        y2.props.animation && (yt([a3, s3], r3), bt([a3, s3], `hidden`));
      }
      P2(), F2(), y2.props.animation ? D2() && ee2(r3, y2.unmount) : y2.unmount();
    }
  }
  function Y2(e3) {
    k2().addEventListener(`mousemove`, m2), ct(Ut, m2), m2(e3);
  }
  function X2() {
    y2.state.isVisible && y2.hide(), y2.state.isMounted && (le2(), G2().forEach(function(e3) {
      e3._tippy.unmount();
    }), x2.parentNode && x2.parentNode.removeChild(x2), Wt = Wt.filter(function(e3) {
      return e3 !== y2;
    }), y2.state.isMounted = false, N2(`onHidden`, [y2]));
  }
  function _e2() {
    y2.state.isDestroyed || (y2.clearDelayTimeouts(), y2.unmount(), ie2(), delete e2._tippy, y2.state.isDestroyed = true, N2(`onDestroy`, [y2]));
  }
}
function Kt(e2, t2) {
  t2 === void 0 && (t2 = {});
  var n2 = $.plugins.concat(t2.plugins || []);
  kt();
  var r2 = Object.assign({}, t2, { plugins: n2 }), i2 = vt(e2).reduce(function(e3, t3) {
    var n3 = t3 && Gt(t3, r2);
    return n3 && e3.push(n3), e3;
  }, []);
  return mt(e2) ? i2[0] : i2;
}
Kt.defaultProps = $, Kt.setDefaultProps = Mt, Kt.currentInput = Q, Object.assign({}, b, { effect: function(e2) {
  var t2 = e2.state, n2 = { popper: { position: t2.options.strategy, left: `0`, top: `0`, margin: `0` }, arrow: { position: `absolute` }, reference: {} };
  Object.assign(t2.elements.popper.style, n2.popper), t2.styles = n2, t2.elements.arrow && Object.assign(t2.elements.arrow.style, n2.arrow);
} });
var qt = { clientX: 0, clientY: 0 }, Jt = [];
function Yt(e2) {
  qt = { clientX: e2.clientX, clientY: e2.clientY };
}
function Xt(e2) {
  e2.addEventListener(`mousemove`, Yt);
}
function Zt(e2) {
  e2.removeEventListener(`mousemove`, Yt);
}
var Qt = { name: `followCursor`, defaultValue: false, fn: function(e2) {
  var t2 = e2.reference, n2 = xt(e2.props.triggerTarget || t2), r2 = false, i2 = false, a2 = true, o2 = e2.props;
  function s2() {
    return e2.props.followCursor === `initial` && e2.state.isVisible;
  }
  function c2() {
    n2.addEventListener(`mousemove`, d2);
  }
  function l2() {
    n2.removeEventListener(`mousemove`, d2);
  }
  function u2() {
    r2 = true, e2.setProps({ getReferenceClientRect: null }), r2 = false;
  }
  function d2(n3) {
    var r3 = n3.target ? t2.contains(n3.target) : true, i3 = e2.props.followCursor, a3 = n3.clientX, o3 = n3.clientY, s3 = t2.getBoundingClientRect(), c3 = a3 - s3.left, l3 = o3 - s3.top;
    (r3 || !e2.props.interactive) && e2.setProps({ getReferenceClientRect: function() {
      var e3 = t2.getBoundingClientRect(), n4 = a3, r4 = o3;
      i3 === `initial` && (n4 = e3.left + c3, r4 = e3.top + l3);
      var s4 = i3 === `horizontal` ? e3.top : r4, u3 = i3 === `vertical` ? e3.right : n4, d3 = i3 === `horizontal` ? e3.bottom : r4, f3 = i3 === `vertical` ? e3.left : n4;
      return { width: u3 - f3, height: d3 - s4, top: s4, right: u3, bottom: d3, left: f3 };
    } });
  }
  function f2() {
    e2.props.followCursor && (Jt.push({ instance: e2, doc: n2 }), Xt(n2));
  }
  function p2() {
    Jt = Jt.filter(function(t3) {
      return t3.instance !== e2;
    }), Jt.filter(function(e3) {
      return e3.doc === n2;
    }).length === 0 && Zt(n2);
  }
  return { onCreate: f2, onDestroy: p2, onBeforeUpdate: function() {
    o2 = e2.props;
  }, onAfterUpdate: function(t3, n3) {
    var a3 = n3.followCursor;
    r2 || a3 !== void 0 && o2.followCursor !== a3 && (p2(), a3 ? (f2(), e2.state.isMounted && !i2 && !s2() && c2()) : (l2(), u2()));
  }, onMount: function() {
    e2.props.followCursor && !i2 && (a2 && (a2 = (d2(qt), false)), s2() || c2());
  }, onTrigger: function(e3, t3) {
    gt(t3) && (qt = { clientX: t3.clientX, clientY: t3.clientY }), i2 = t3.type === `focus`;
  }, onHidden: function() {
    e2.props.followCursor && (u2(), l2(), a2 = true);
  } };
} };
Kt.setDefaultProps({ render: Vt });
export {
  Kt as n,
  Qt as t
};
