import { t as e } from "./chunk-DlkHe4MQ.js";
import { D as t, Ut as n, Zn as r, _ as i, b as a, g as o, k as s, mt as c, qt as l, tr as u, v as d, vn as f, w as p, xt as m, y as h } from "./runtime-core.esm-bundler-C_RgxGrN.js";
import { c as g } from "./vue.runtime.esm-bundler-CFaGDlW9.js";
import { t as _, v } from "./Button-C1y42oVo.js";
import { o as y } from "./dist-BVQ2eZ4j.js";
import { t as ee } from "./DropdownMenu-Crf7DwtN.js";
import { t as te } from "./Input-VRzwsNLL.js";
import { n as b } from "./index.browser-DL6dchOu.js";
function ne(e2, t2) {
  let n2 = f([]), r2 = o(() => {
    let e3 = [];
    function t3(n3) {
      for (let r3 of n3) r3.value && e3.push(r3.value), r3.children && r3.children.length > 0 && t3(r3.children);
    }
    return t3(n2.value), e3;
  });
  function i2(e3) {
    return Object.entries(e3 || {}).map(([e4, t3]) => {
      if (e4 === `$value`) return null;
      let n3 = { value: b(7), var: { key: e4, value: t3 }, defaultExpanded: true, onToggle: (e5) => {
        e5.preventDefault();
      } };
      if (typeof t3 == `object` && t3) {
        n3.children = i2(t3);
        let e5 = t3;
        e5.$value === void 0 ? n3.var.value = `` : n3.var.value = e5.$value;
      } else n3.var.value = t3;
      return n3;
    }).filter((e4) => e4 !== null);
  }
  function a2() {
    try {
      let r3 = (e3) => {
        if (!e3.var?.key) return null;
        if (e3.children && e3.children.length > 0) {
          let t3 = {};
          return e3.children.forEach((e4) => {
            let n3 = r3(e4);
            n3 && Object.assign(t3, n3);
          }), e3.var.value !== void 0 && e3.var.value !== null && (t3.$value = e3.var.value), { [e3.var.key]: t3 };
        } else if (e3.var.value !== void 0 && e3.var.value !== null) return { [e3.var.key]: e3.var.value };
        return null;
      }, i3 = {};
      n2.value.forEach((e3) => {
        let t3 = r3(e3);
        t3 && Object.assign(i3, t3);
      }), t2.value.namespaces[e2] = i3;
    } catch (e3) {
      console.error(`Error updating theme from items:`, e3);
    }
  }
  function s2(e3, t3) {
    for (let n3 of e3) {
      if (n3.value === t3) return n3;
      if (n3.children && n3.children.length > 0) {
        let e4 = s2(n3.children, t3);
        if (e4) return e4;
      }
    }
  }
  function c2(e3, t3) {
    for (let n3 of e3) {
      if (n3.children && n3.children.includes(t3)) return n3;
      if (n3.children) {
        let e4 = c2(n3.children, t3);
        if (e4) return e4;
      }
    }
  }
  function l2(e3, t3 = true) {
    let r3 = e3.split(`-`), i3 = n2.value, a3 = null;
    for (let e4 = 0; e4 < r3.length; e4++) {
      let n3 = r3[e4], o2 = e4 === r3.length - 1, s3 = i3.find((e5) => e5.var.key === n3);
      if (!s3) {
        if (!t3) return null;
        let e5 = { value: b(7), var: { key: n3, value: `` }, defaultExpanded: true, children: [], onToggle: (e6) => {
          e6.preventDefault();
        } };
        i3.push(e5), s3 = e5;
      }
      a3 = s3, o2 || (a3.children || (a3.children = []), i3 = a3.children);
    }
    return a3;
  }
  function u2(e3, t3, r3) {
    let i3 = s2(n2.value, e3);
    if (!i3) {
      console.error(`Item not found for uid:`, e3);
      return;
    }
    let a3 = { value: b(7), var: { key: t3 || ``, value: r3 === void 0 ? `` : r3 }, defaultExpanded: true, children: [], onToggle: (e4) => {
      e4.preventDefault();
    } };
    i3.children ? i3.children.push(a3) : i3.children = [a3];
  }
  function d2(e3, t3, r3) {
    let i3 = { value: b(7), var: { key: t3 || ``, value: r3 === void 0 ? `` : r3 }, defaultExpanded: true, children: [], onToggle: (e4) => {
      e4.preventDefault();
    } };
    if (!e3) {
      n2.value.push(i3);
      return;
    }
    let a3 = s2(n2.value, e3);
    if (!a3) return;
    let o2 = c2(n2.value, a3);
    if (o2 && o2.children) {
      let e4 = o2.children?.indexOf(a3);
      e4 !== void 0 && e4 >= 0 && o2.children.splice(e4 + 1, 0, i3);
    } else {
      let e4 = n2.value.indexOf(a3);
      e4 >= 0 && n2.value.splice(e4 + 1, 0, i3);
    }
  }
  function p2(e3) {
    let t3 = s2(n2.value, e3);
    if (!t3) {
      console.error(`Item not found for uid:`, e3);
      return;
    }
    let r3 = c2(n2.value, t3);
    if (r3 && r3.children) {
      let e4 = r3.children.indexOf(t3);
      e4 >= 0 && r3.children.splice(e4, 1);
    } else {
      let e4 = n2.value.indexOf(t3);
      e4 >= 0 && n2.value.splice(e4, 1);
    }
  }
  function m2() {
    n2.value = i2(t2.value.namespaces[e2]);
  }
  return { expandedTree: r2, items: n2, namespaceToTree: i2, updateThemeFromItems: a2, findItemByUid: s2, findOrCreateItemByKey: l2, addChild: u2, addNext: d2, deleteItem: p2, initializeItems: m2 };
}
function re(e2) {
  if (Array.isArray(e2)) return e2;
}
function ie(e2, t2) {
  var n2 = e2 == null ? null : typeof Symbol < `u` && e2[Symbol.iterator] || e2[`@@iterator`];
  if (n2 != null) {
    var r2, i2, a2, o2, s2 = [], c2 = true, l2 = false;
    try {
      if (a2 = (n2 = n2.call(e2)).next, t2 === 0) {
        if (Object(n2) !== n2) return;
        c2 = false;
      } else for (; !(c2 = (r2 = a2.call(n2)).done) && (s2.push(r2.value), s2.length !== t2); c2 = true) ;
    } catch (e3) {
      l2 = true, i2 = e3;
    } finally {
      try {
        if (!c2 && n2.return != null && (o2 = n2.return(), Object(o2) !== o2)) return;
      } finally {
        if (l2) throw i2;
      }
    }
    return s2;
  }
}
function x(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
  return r2;
}
function S(e2, t2) {
  if (e2) {
    if (typeof e2 == `string`) return x(e2, t2);
    var n2 = {}.toString.call(e2).slice(8, -1);
    return n2 === `Object` && e2.constructor && (n2 = e2.constructor.name), n2 === `Map` || n2 === `Set` ? Array.from(e2) : n2 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? x(e2, t2) : void 0;
  }
}
function ae() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oe(e2, t2) {
  return re(e2) || ie(e2, t2) || S(e2, t2) || ae();
}
var se = e(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.bind = void 0;
  function t2(e3, t3) {
    var n2 = t3.type, r2 = t3.listener, i2 = t3.options;
    return e3.addEventListener(n2, r2, i2), function() {
      e3.removeEventListener(n2, r2, i2);
    };
  }
  e2.bind = t2;
})), ce = e(((e2) => {
  var t2 = e2 && e2.__assign || function() {
    return t2 = Object.assign || function(e3) {
      for (var t3, n3 = 1, r3 = arguments.length; n3 < r3; n3++) for (var i3 in t3 = arguments[n3], t3) Object.prototype.hasOwnProperty.call(t3, i3) && (e3[i3] = t3[i3]);
      return e3;
    }, t2.apply(this, arguments);
  };
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.bindAll = void 0;
  var n2 = se();
  function r2(e3) {
    if (e3 !== void 0) return typeof e3 == `boolean` ? { capture: e3 } : e3;
  }
  function i2(e3, n3) {
    return n3 == null ? e3 : t2(t2({}, e3), { options: t2(t2({}, r2(n3)), r2(e3.options)) });
  }
  function a2(e3, t3, r3) {
    var a3 = t3.map(function(t4) {
      var a4 = i2(t4, r3);
      return (0, n2.bind)(e3, a4);
    });
    return function() {
      a3.forEach(function(e4) {
        return e4();
      });
    };
  }
  e2.bindAll = a2;
})), C = e(((e2) => {
  Object.defineProperty(e2, `__esModule`, { value: true }), e2.bindAll = e2.bind = void 0;
  var t2 = se();
  Object.defineProperty(e2, `bind`, { enumerable: true, get: function() {
    return t2.bind;
  } });
  var n2 = ce();
  Object.defineProperty(e2, `bindAll`, { enumerable: true, get: function() {
    return n2.bindAll;
  } });
}))(), le = `data-pdnd-honey-pot`;
function w(e2) {
  return e2 instanceof Element && e2.hasAttribute(`data-pdnd-honey-pot`);
}
function T(e2) {
  var t2 = oe(document.elementsFromPoint(e2.x, e2.y), 2), n2 = t2[0], r2 = t2[1];
  return n2 ? w(n2) ? r2 ?? null : n2 : null;
}
function E(e2) {
  "@babel/helpers - typeof";
  return E = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && typeof Symbol == `function` && e3.constructor === Symbol && e3 !== Symbol.prototype ? `symbol` : typeof e3;
  }, E(e2);
}
function ue(e2, t2) {
  if (E(e2) != `object` || !e2) return e2;
  var n2 = e2[Symbol.toPrimitive];
  if (n2 !== void 0) {
    var r2 = n2.call(e2, t2 || `default`);
    if (E(r2) != `object`) return r2;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t2 === `string` ? String : Number)(e2);
}
function de(e2) {
  var t2 = ue(e2, `string`);
  return E(t2) == `symbol` ? t2 : t2 + ``;
}
function D(e2, t2, n2) {
  return (t2 = de(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
var fe = 2147483647;
function O(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function k(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] == null ? {} : arguments[t2];
    t2 % 2 ? O(Object(n2), true).forEach(function(t3) {
      D(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : O(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
var A = 2, j = A / 2;
function pe(e2) {
  return { x: Math.floor(e2.x), y: Math.floor(e2.y) };
}
function me(e2) {
  return { x: e2.x - j, y: e2.y - j };
}
function he(e2) {
  return { x: Math.max(e2.x, 0), y: Math.max(e2.y, 0) };
}
function ge(e2) {
  return { x: Math.min(e2.x, window.innerWidth - A), y: Math.min(e2.y, window.innerHeight - A) };
}
function M(e2) {
  var t2 = e2.client, n2 = ge(he(me(pe(t2))));
  return DOMRect.fromRect({ x: n2.x, y: n2.y, width: A, height: A });
}
function N(e2) {
  var t2 = e2.clientRect;
  return { left: `${t2.left}px`, top: `${t2.top}px`, width: `${t2.width}px`, height: `${t2.height}px` };
}
function _e(e2) {
  var t2 = e2.client, n2 = e2.clientRect;
  return t2.x >= n2.x && t2.x <= n2.x + n2.width && t2.y >= n2.y && t2.y <= n2.y + n2.height;
}
function ve(e2) {
  var t2 = e2.initial, n2 = document.createElement(`div`);
  n2.setAttribute(le, `true`);
  var r2 = M({ client: t2 });
  Object.assign(n2.style, k(k({ backgroundColor: `transparent`, position: `fixed`, padding: 0, margin: 0, boxSizing: `border-box` }, N({ clientRect: r2 })), {}, { pointerEvents: `auto`, zIndex: fe })), document.body.appendChild(n2);
  var i2 = (0, C.bind)(window, { type: `pointermove`, listener: function(e3) {
    r2 = M({ client: { x: e3.clientX, y: e3.clientY } }), Object.assign(n2.style, N({ clientRect: r2 }));
  }, options: { capture: true } });
  return function(e3) {
    var t3 = e3.current;
    if (i2(), _e({ client: t3, clientRect: r2 })) {
      n2.remove();
      return;
    }
    function a2() {
      o2(), n2.remove();
    }
    var o2 = (0, C.bindAll)(window, [{ type: `pointerdown`, listener: a2 }, { type: `pointermove`, listener: a2 }, { type: `focusin`, listener: a2 }, { type: `focusout`, listener: a2 }, { type: `dragstart`, listener: a2 }, { type: `dragenter`, listener: a2 }, { type: `dragover`, listener: a2 }], { capture: true });
  };
}
function ye() {
  var e2 = null;
  function t2() {
    return e2 = null, (0, C.bind)(window, { type: `pointermove`, listener: function(t3) {
      e2 = { x: t3.clientX, y: t3.clientY };
    }, options: { capture: true } });
  }
  function n2() {
    var t3 = null;
    return function(n3) {
      var r2 = n3.eventName, i2 = n3.payload;
      if (r2 === `onDragStart`) {
        var a2 = i2.location.initial.input;
        t3 = ve({ initial: e2 ?? { x: a2.clientX, y: a2.clientY } });
      }
      if (r2 === `onDrop`) {
        var o2, s2 = i2.location.current.input;
        (o2 = t3) == null || o2({ current: { x: s2.clientX, y: s2.clientY } }), t3 = null, e2 = null;
      }
    };
  }
  return { bindEvents: t2, getOnPostDispatch: n2 };
}
function be(e2) {
  if (Array.isArray(e2)) return x(e2);
}
function xe(e2) {
  if (typeof Symbol < `u` && e2[Symbol.iterator] != null || e2[`@@iterator`] != null) return Array.from(e2);
}
function Se() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function P(e2) {
  return be(e2) || xe(e2) || S(e2) || Se();
}
function F(e2) {
  var t2 = null;
  return function() {
    if (!t2) {
      var n2 = [...arguments];
      t2 = { result: e2.apply(this, n2) };
    }
    return t2.result;
  };
}
var Ce = F(function() {
  return navigator.userAgent.includes(`Firefox`);
}), I = F(function() {
  var e2 = navigator.userAgent;
  return e2.includes(`AppleWebKit`) && !e2.includes(`Chrome`);
}), L = { isLeavingWindow: /* @__PURE__ */ Symbol(`leaving`), isEnteringWindow: /* @__PURE__ */ Symbol(`entering`) };
function we(e2) {
  var t2 = e2.dragLeave;
  return I() ? t2.hasOwnProperty(L.isLeavingWindow) : false;
}
(function() {
  if (typeof window > `u` || !I()) return;
  function e2() {
    return { enterCount: 0, isOverWindow: false };
  }
  var t2 = e2();
  function n2() {
    t2 = e2();
  }
  (0, C.bindAll)(window, [{ type: `dragstart`, listener: function() {
    t2.enterCount = 0, t2.isOverWindow = true;
  } }, { type: `drop`, listener: n2 }, { type: `dragend`, listener: n2 }, { type: `dragenter`, listener: function(e3) {
    !t2.isOverWindow && t2.enterCount === 0 && (e3[L.isEnteringWindow] = true), t2.isOverWindow = true, t2.enterCount++;
  } }, { type: `dragleave`, listener: function(e3) {
    t2.enterCount--, t2.isOverWindow && t2.enterCount === 0 && (e3[L.isLeavingWindow] = true, t2.isOverWindow = false);
  } }], { capture: true });
})();
function Te(e2) {
  return `nodeName` in e2;
}
function Ee(e2) {
  return Te(e2) && e2.ownerDocument !== document;
}
function De(e2) {
  var t2 = e2.dragLeave, n2 = t2.type, r2 = t2.relatedTarget;
  return n2 === `dragleave` ? I() ? we({ dragLeave: t2 }) : r2 == null ? true : Ce() ? Ee(r2) : r2 instanceof HTMLIFrameElement : false;
}
function Oe(e2) {
  var t2 = e2.onDragEnd;
  return [{ type: `pointermove`, listener: /* @__PURE__ */ (function() {
    var e3 = 0;
    return function() {
      if (e3 < 20) {
        e3++;
        return;
      }
      t2();
    };
  })() }, { type: `pointerdown`, listener: t2 }];
}
function R(e2) {
  return { altKey: e2.altKey, button: e2.button, buttons: e2.buttons, ctrlKey: e2.ctrlKey, metaKey: e2.metaKey, shiftKey: e2.shiftKey, clientX: e2.clientX, clientY: e2.clientY, pageX: e2.pageX, pageY: e2.pageY };
}
var z = (function(e2) {
  var t2 = [], n2 = null, r2 = function() {
    t2 = [...arguments], !n2 && (n2 = requestAnimationFrame(function() {
      n2 = null, e2.apply(void 0, t2);
    }));
  };
  return r2.cancel = function() {
    n2 && (n2 = (cancelAnimationFrame(n2), null));
  }, r2;
})(function(e2) {
  return e2();
}), B = /* @__PURE__ */ (function() {
  var e2 = null;
  function t2(t3) {
    e2 = { frameId: requestAnimationFrame(function() {
      e2 = null, t3();
    }), fn: t3 };
  }
  function n2() {
    e2 && (e2 = (cancelAnimationFrame(e2.frameId), e2.fn(), null));
  }
  return { schedule: t2, flush: n2 };
})();
function ke(e2) {
  var t2 = e2.source, n2 = e2.initial, r2 = e2.dispatchEvent, i2 = { dropTargets: [] };
  function a2(e3) {
    r2(e3), i2 = { dropTargets: e3.payload.location.current.dropTargets };
  }
  return { start: function(e3) {
    var r3 = e3.nativeSetDragImage, o2 = { current: n2, previous: i2, initial: n2 };
    a2({ eventName: `onGenerateDragPreview`, payload: { source: t2, location: o2, nativeSetDragImage: r3 } }), B.schedule(function() {
      a2({ eventName: `onDragStart`, payload: { source: t2, location: o2 } });
    });
  }, dragUpdate: function(e3) {
    var r3 = e3.current;
    B.flush(), z.cancel(), a2({ eventName: `onDropTargetChange`, payload: { source: t2, location: { initial: n2, previous: i2, current: r3 } } });
  }, drag: function(e3) {
    var r3 = e3.current;
    z(function() {
      B.flush(), a2({ eventName: `onDrag`, payload: { source: t2, location: { initial: n2, previous: i2, current: r3 } } });
    });
  }, drop: function(e3) {
    var r3 = e3.current, o2 = e3.updatedSourcePayload;
    B.flush(), z.cancel(), a2({ eventName: `onDrop`, payload: { source: o2 ?? t2, location: { current: r3, previous: i2, initial: n2 } } });
  } };
}
var V = { isActive: false };
function H() {
  return !V.isActive;
}
function Ae(e2) {
  return e2.dataTransfer ? e2.dataTransfer.setDragImage.bind(e2.dataTransfer) : null;
}
function je(e2) {
  var t2 = e2.current, n2 = e2.next;
  if (t2.length !== n2.length) return true;
  for (var r2 = 0; r2 < t2.length; r2++) if (t2[r2].element !== n2[r2].element) return true;
  return false;
}
function Me(e2) {
  var t2 = e2.event, n2 = e2.dragType, r2 = e2.getDropTargetsOver, i2 = e2.dispatchEvent;
  if (!H()) return;
  var a2 = Ne({ event: t2, dragType: n2, getDropTargetsOver: r2 });
  V.isActive = true;
  var o2 = { current: a2 };
  U({ event: t2, current: a2.dropTargets });
  var s2 = ke({ source: n2.payload, dispatchEvent: i2, initial: a2 });
  function c2(e3) {
    var t3 = je({ current: o2.current.dropTargets, next: e3.dropTargets });
    o2.current = e3, t3 && s2.dragUpdate({ current: o2.current });
  }
  function l2(e3) {
    var t3 = R(e3), i3 = r2({ target: w(e3.target) ? T({ x: t3.clientX, y: t3.clientY }) : e3.target, input: t3, source: n2.payload, current: o2.current.dropTargets });
    i3.length && (e3.preventDefault(), U({ event: e3, current: i3 })), c2({ dropTargets: i3, input: t3 });
  }
  function u2() {
    o2.current.dropTargets.length && c2({ dropTargets: [], input: o2.current.input }), s2.drop({ current: o2.current, updatedSourcePayload: null }), d2();
  }
  function d2() {
    V.isActive = false, f2();
  }
  var f2 = (0, C.bindAll)(window, [{ type: `dragover`, listener: function(e3) {
    l2(e3), s2.drag({ current: o2.current });
  } }, { type: `dragenter`, listener: l2 }, { type: `dragleave`, listener: function(e3) {
    De({ dragLeave: e3 }) && (c2({ input: o2.current.input, dropTargets: [] }), n2.startedFrom === `external` && u2());
  } }, { type: `drop`, listener: function(e3) {
    if (o2.current = { dropTargets: o2.current.dropTargets, input: R(e3) }, !o2.current.dropTargets.length) {
      u2();
      return;
    }
    e3.preventDefault(), U({ event: e3, current: o2.current.dropTargets }), s2.drop({ current: o2.current, updatedSourcePayload: n2.type === `external` ? n2.getDropPayload(e3) : null }), d2();
  } }, { type: `dragend`, listener: function(e3) {
    o2.current = { dropTargets: o2.current.dropTargets, input: R(e3) }, u2();
  } }].concat(P(Oe({ onDragEnd: u2 }))), { capture: true });
  s2.start({ nativeSetDragImage: Ae(t2) });
}
function U(e2) {
  var t2 = e2.event, n2 = e2.current[0]?.dropEffect;
  n2 != null && t2.dataTransfer && (t2.dataTransfer.dropEffect = n2);
}
function Ne(e2) {
  var t2 = e2.event, n2 = e2.dragType, r2 = e2.getDropTargetsOver, i2 = R(t2);
  return n2.startedFrom === `external` ? { input: i2, dropTargets: [] } : { input: i2, dropTargets: r2({ input: i2, source: n2.payload, target: t2.target, current: [] }) };
}
var W = { canStart: H, start: Me }, G = /* @__PURE__ */ new Map();
function Pe(e2) {
  var t2 = e2.typeKey, n2 = e2.mount, r2 = G.get(t2);
  if (r2) return r2.usageCount++, r2;
  var i2 = { typeKey: t2, unmount: n2(), usageCount: 1 };
  return G.set(t2, i2), i2;
}
function Fe(e2) {
  var t2 = Pe(e2);
  return function() {
    t2.usageCount--, !(t2.usageCount > 0) && (t2.unmount(), G.delete(e2.typeKey));
  };
}
function K() {
  var e2 = [...arguments];
  return function() {
    e2.forEach(function(e3) {
      return e3();
    });
  };
}
function q(e2, t2) {
  var n2 = t2.attribute, r2 = t2.value;
  return e2.setAttribute(n2, r2), function() {
    return e2.removeAttribute(n2);
  };
}
function Ie(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function J(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] == null ? {} : arguments[t2];
    t2 % 2 ? Ie(Object(n2), true).forEach(function(t3) {
      D(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Ie(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Y(e2, t2) {
  var n2 = typeof Symbol < `u` && e2[Symbol.iterator] || e2[`@@iterator`];
  if (!n2) {
    if (Array.isArray(e2) || (n2 = Le(e2)) || t2 && e2 && typeof e2.length == `number`) {
      n2 && (e2 = n2);
      var r2 = 0, i2 = function() {
      };
      return { s: i2, n: function() {
        return r2 >= e2.length ? { done: true } : { done: false, value: e2[r2++] };
      }, e: function(e3) {
        throw e3;
      }, f: i2 };
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a2, o2 = true, s2 = false;
  return { s: function() {
    n2 = n2.call(e2);
  }, n: function() {
    var e3 = n2.next();
    return o2 = e3.done, e3;
  }, e: function(e3) {
    s2 = true, a2 = e3;
  }, f: function() {
    try {
      o2 || n2.return == null || n2.return();
    } finally {
      if (s2) throw a2;
    }
  } };
}
function Le(e2, t2) {
  if (e2) {
    if (typeof e2 == `string`) return Re(e2, t2);
    var n2 = {}.toString.call(e2).slice(8, -1);
    return n2 === `Object` && e2.constructor && (n2 = e2.constructor.name), n2 === `Map` || n2 === `Set` ? Array.from(e2) : n2 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Re(e2, t2) : void 0;
  }
}
function Re(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
  return r2;
}
function X(e2) {
  return e2.slice(0).reverse();
}
function ze(e2) {
  var t2 = e2.typeKey, n2 = e2.defaultDropEffect, r2 = /* @__PURE__ */ new WeakMap(), i2 = `data-drop-target-for-${t2}`, a2 = `[${i2}]`;
  function o2(e3) {
    return r2.set(e3.element, e3), function() {
      return r2.delete(e3.element);
    };
  }
  function s2(e3) {
    return F(K(q(e3.element, { attribute: i2, value: `true` }), o2(e3)));
  }
  function c2(e3) {
    var t3 = e3.source, i3 = e3.target, o3 = e3.input, s3 = e3.result, l3 = s3 === void 0 ? [] : s3;
    if (i3 == null) return l3;
    if (!(i3 instanceof Element)) return i3 instanceof Node ? c2({ source: t3, target: i3.parentElement, input: o3, result: l3 }) : l3;
    var u3 = i3.closest(a2);
    if (u3 == null) return l3;
    var d3 = r2.get(u3);
    if (d3 == null) return l3;
    var f3 = { input: o3, source: t3, element: d3.element };
    if (d3.canDrop && !d3.canDrop(f3)) return c2({ source: t3, target: d3.element.parentElement, input: o3, result: l3 });
    var p2 = d3.getData?.call(d3, f3) ?? {}, m2 = d3.getDropEffect?.call(d3, f3) ?? n2, h2 = { data: p2, element: d3.element, dropEffect: m2, isActiveDueToStickiness: false };
    return c2({ source: t3, target: d3.element.parentElement, input: o3, result: [].concat(P(l3), [h2]) });
  }
  function l2(e3) {
    var t3 = e3.eventName, n3 = e3.payload, i3 = Y(n3.location.current.dropTargets), a3;
    try {
      for (i3.s(); !(a3 = i3.n()).done; ) {
        var o3, s3 = a3.value, c3 = r2.get(s3.element), l3 = J(J({}, n3), {}, { self: s3 });
        c3 == null || (o3 = c3[t3]) == null || o3.call(c3, l3);
      }
    } catch (e4) {
      i3.e(e4);
    } finally {
      i3.f();
    }
  }
  var u2 = { onGenerateDragPreview: l2, onDrag: l2, onDragStart: l2, onDrop: l2, onDropTargetChange: function(e3) {
    var t3 = e3.payload, n3 = new Set(t3.location.current.dropTargets.map(function(e4) {
      return e4.element;
    })), i3 = /* @__PURE__ */ new Set(), a3 = Y(t3.location.previous.dropTargets), o3;
    try {
      for (a3.s(); !(o3 = a3.n()).done; ) {
        var s3, c3 = o3.value;
        i3.add(c3.element);
        var l3 = r2.get(c3.element), u3 = n3.has(c3.element), d3 = J(J({}, t3), {}, { self: c3 });
        if (l3 == null || (s3 = l3.onDropTargetChange) == null || s3.call(l3, d3), !u3) {
          var f3;
          l3 == null || (f3 = l3.onDragLeave) == null || f3.call(l3, d3);
        }
      }
    } catch (e4) {
      a3.e(e4);
    } finally {
      a3.f();
    }
    var p2 = Y(t3.location.current.dropTargets), m2;
    try {
      for (p2.s(); !(m2 = p2.n()).done; ) {
        var h2, g2, _2 = m2.value;
        if (!i3.has(_2.element)) {
          var v2 = J(J({}, t3), {}, { self: _2 }), y2 = r2.get(_2.element);
          y2 == null || (h2 = y2.onDropTargetChange) == null || h2.call(y2, v2), y2 == null || (g2 = y2.onDragEnter) == null || g2.call(y2, v2);
        }
      }
    } catch (e4) {
      p2.e(e4);
    } finally {
      p2.f();
    }
  } };
  function d2(e3) {
    u2[e3.eventName](e3);
  }
  function f2(e3) {
    var t3 = e3.source, n3 = e3.target, i3 = e3.input, a3 = e3.current, o3 = c2({ source: t3, target: n3, input: i3 });
    if (o3.length >= a3.length) return o3;
    for (var s3 = X(a3), l3 = X(o3), u3 = [], d3 = 0; d3 < s3.length; d3++) {
      var f3, p2 = s3[d3], m2 = l3[d3];
      if (m2 != null) {
        u3.push(m2);
        continue;
      }
      var h2 = u3[d3 - 1], g2 = s3[d3 - 1];
      if (h2?.element !== g2?.element) break;
      var _2 = r2.get(p2.element);
      if (!_2) break;
      var v2 = { input: i3, source: t3, element: _2.element };
      if (_2.canDrop && !_2.canDrop(v2) || !((f3 = _2.getIsSticky) != null && f3.call(_2, v2))) break;
      u3.push(J(J({}, p2), {}, { isActiveDueToStickiness: true }));
    }
    return X(u3);
  }
  return { dropTargetForConsumers: s2, getIsOver: f2, dispatchEvent: d2 };
}
function Be(e2, t2) {
  var n2 = typeof Symbol < `u` && e2[Symbol.iterator] || e2[`@@iterator`];
  if (!n2) {
    if (Array.isArray(e2) || (n2 = Ve(e2)) || t2 && e2 && typeof e2.length == `number`) {
      n2 && (e2 = n2);
      var r2 = 0, i2 = function() {
      };
      return { s: i2, n: function() {
        return r2 >= e2.length ? { done: true } : { done: false, value: e2[r2++] };
      }, e: function(e3) {
        throw e3;
      }, f: i2 };
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a2, o2 = true, s2 = false;
  return { s: function() {
    n2 = n2.call(e2);
  }, n: function() {
    var e3 = n2.next();
    return o2 = e3.done, e3;
  }, e: function(e3) {
    s2 = true, a2 = e3;
  }, f: function() {
    try {
      o2 || n2.return == null || n2.return();
    } finally {
      if (s2) throw a2;
    }
  } };
}
function Ve(e2, t2) {
  if (e2) {
    if (typeof e2 == `string`) return He(e2, t2);
    var n2 = {}.toString.call(e2).slice(8, -1);
    return n2 === `Object` && e2.constructor && (n2 = e2.constructor.name), n2 === `Map` || n2 === `Set` ? Array.from(e2) : n2 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? He(e2, t2) : void 0;
  }
}
function He(e2, t2) {
  (t2 == null || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
  return r2;
}
function Ue(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function We(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = arguments[t2] == null ? {} : arguments[t2];
    t2 % 2 ? Ue(Object(n2), true).forEach(function(t3) {
      D(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Ue(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Ge() {
  var e2 = /* @__PURE__ */ new Set(), t2 = null;
  function n2(e3) {
    t2 && (!e3.canMonitor || e3.canMonitor(t2.canMonitorArgs)) && t2.active.add(e3);
  }
  function r2(r3) {
    var i3 = We({}, r3);
    e2.add(i3), n2(i3);
    function a2() {
      e2.delete(i3), t2 && t2.active.delete(i3);
    }
    return F(a2);
  }
  function i2(r3) {
    var i3 = r3.eventName, a2 = r3.payload;
    if (i3 === `onGenerateDragPreview`) {
      t2 = { canMonitorArgs: { initial: a2.location.initial, source: a2.source }, active: /* @__PURE__ */ new Set() };
      var o2 = Be(e2), s2;
      try {
        for (o2.s(); !(s2 = o2.n()).done; ) {
          var c2 = s2.value;
          n2(c2);
        }
      } catch (e3) {
        o2.e(e3);
      } finally {
        o2.f();
      }
    }
    if (t2) {
      for (var l2 = Array.from(t2.active), u2 = 0, d2 = l2; u2 < d2.length; u2++) {
        var f2 = d2[u2];
        if (t2.active.has(f2)) {
          var p2;
          (p2 = f2[i3]) == null || p2.call(f2, a2);
        }
      }
      i3 === `onDrop` && (t2.active.clear(), t2 = null);
    }
  }
  return { dispatchEvent: i2, monitorForConsumers: r2 };
}
function Ke(e2) {
  var t2 = e2.typeKey, n2 = e2.mount, r2 = e2.dispatchEventToSource, i2 = e2.onPostDispatch, a2 = e2.defaultDropEffect, o2 = Ge(), s2 = ze({ typeKey: t2, defaultDropEffect: a2 });
  function c2(e3) {
    r2?.(e3), s2.dispatchEvent(e3), o2.dispatchEvent(e3), i2?.(e3);
  }
  function l2(e3) {
    var t3 = e3.event, n3 = e3.dragType;
    W.start({ event: t3, dragType: n3, getDropTargetsOver: s2.getIsOver, dispatchEvent: c2 });
  }
  function u2() {
    function e3() {
      return n2({ canStart: W.canStart, start: l2 });
    }
    return Fe({ typeKey: t2, mount: e3 });
  }
  return { registerUsage: u2, dropTarget: s2.dropTargetForConsumers, monitor: o2.monitorForConsumers };
}
var qe = F(function() {
  return navigator.userAgent.toLocaleLowerCase().includes(`android`);
}), Je = `pdnd:android-fallback`, Ye = `text/plain`, Xe = `application/vnd.pdnd`, Z = /* @__PURE__ */ new WeakMap();
function Ze(e2) {
  return Z.set(e2.element, e2), function() {
    Z.delete(e2.element);
  };
}
var Qe = ye(), Q = Ke({ typeKey: `element`, defaultDropEffect: `move`, mount: function(e2) {
  return K(Qe.bindEvents(), (0, C.bind)(document, { type: `dragstart`, listener: function(t2) {
    if (e2.canStart(t2) && !t2.defaultPrevented && t2.dataTransfer) {
      var n2 = t2.target;
      if (n2 instanceof HTMLElement) {
        var r2 = Z.get(n2);
        if (r2) {
          var i2 = R(t2), a2 = { element: r2.element, dragHandle: r2.dragHandle ?? null, input: i2 };
          if (r2.canDrag && !r2.canDrag(a2)) {
            t2.preventDefault();
            return;
          }
          if (r2.dragHandle) {
            var o2 = T({ x: i2.clientX, y: i2.clientY });
            if (!r2.dragHandle.contains(o2)) {
              t2.preventDefault();
              return;
            }
          }
          var s2 = r2.getInitialDataForExternal?.call(r2, a2) ?? null;
          if (s2) for (var c2 = 0, l2 = Object.entries(s2); c2 < l2.length; c2++) {
            var u2 = oe(l2[c2], 2), d2 = u2[0], f2 = u2[1];
            t2.dataTransfer.setData(d2, f2 ?? ``);
          }
          qe() && !t2.dataTransfer.types.includes(`text/plain`) && !t2.dataTransfer.types.includes(`text/uri-list`) && t2.dataTransfer.setData(Ye, Je), t2.dataTransfer.setData(Xe, ``);
          var p2 = { type: `element`, payload: { element: r2.element, dragHandle: r2.dragHandle ?? null, data: r2.getInitialData?.call(r2, a2) ?? {} }, startedFrom: `internal` };
          e2.start({ event: t2, dragType: p2 });
        }
      }
    }
  } }));
}, dispatchEventToSource: function(e2) {
  var t2, n2, r2 = e2.eventName, i2 = e2.payload;
  (t2 = Z.get(i2.source.element)) == null || (n2 = t2[r2]) == null || n2.call(t2, i2);
}, onPostDispatch: Qe.getOnPostDispatch() }), $e = Q.dropTarget, $ = Q.monitor;
function et(e2) {
  return F(K(Q.registerUsage(), Ze(e2), q(e2.element, { attribute: `draggable`, value: `true` })));
}
function tt(e2, t2, r2) {
  let i2 = f(null), a2 = f(null);
  function o2(e3) {
    return e3.instruction ? e3.instruction : e3.type ? { type: e3.type, currentLevel: e3.currentLevel, indentPerLevel: e3.indentPerLevel, desiredLevel: e3.desiredLevel } : null;
  }
  function s2(e3, t3) {
    for (let n2 = 0; n2 < e3.length; n2++) {
      if (e3[n2].value === t3) return e3.splice(n2, 1), true;
      if (e3[n2].children && s2(e3[n2].children, t3)) return true;
    }
    return false;
  }
  function c2(e3, t3, n2) {
    for (let r3 = 0; r3 < e3.length; r3++) {
      if (e3[r3].value === t3) return e3.splice(r3, 0, n2), true;
      if (e3[r3].children && c2(e3[r3].children, t3, n2)) return true;
    }
    return false;
  }
  function l2(e3, t3, n2) {
    for (let r3 = 0; r3 < e3.length; r3++) {
      if (e3[r3].value === t3) return e3.splice(r3 + 1, 0, n2), true;
      if (e3[r3].children && l2(e3[r3].children, t3, n2)) return true;
    }
    return false;
  }
  function u2(e3, t3, n2) {
    for (let r3 = 0; r3 < e3.length; r3++) {
      if (e3[r3].value === t3) return e3[r3].children || (e3[r3].children = []), e3[r3].children.unshift(n2), true;
      if (e3[r3].children && u2(e3[r3].children, t3, n2)) return true;
    }
    return false;
  }
  function d2(e3, t3, n2 = []) {
    for (let r3 of e3) {
      if (r3.value === t3) return n2;
      if (r3.children) {
        let e4 = d2(r3.children, t3, [...n2, r3.value]);
        if (e4) return e4;
      }
    }
  }
  function p2(n2, i3, o3) {
    let f2 = r2(e2.value, n2), p3 = r2(e2.value, i3);
    if (!f2 || !p3) {
      console.warn(`Source or target item not found in current namespace - cross-namespace drag operations are not supported`, { sourceItem: !!f2, targetItem: !!p3, itemId: n2, targetId: i3 });
      return;
    }
    if (s2(e2.value, n2), o3.type === `reorder-above`) c2(e2.value, i3, f2);
    else if (o3.type === `reorder-below`) l2(e2.value, i3, f2);
    else if (o3.type === `make-child`) u2(e2.value, i3, f2);
    else if (o3.type === `reparent`) {
      let t3 = d2(e2.value, i3);
      if (t3 && o3.desiredLevel !== void 0 && t3.length > o3.desiredLevel) {
        let n3 = t3[o3.desiredLevel];
        l2(e2.value, n3, f2);
      }
    }
    t2(), a2.value = n2, setTimeout(() => {
      a2.value = null;
    }, 1e3);
  }
  function m2(t3, n2) {
    let i3 = r2(e2.value, t3);
    if (!i3) return false;
    function a3(e3) {
      if (!e3.children) return false;
      for (let t4 of e3.children) if (t4.value === n2 || a3(t4)) return true;
      return false;
    }
    return a3(i3);
  }
  function h2(e3) {
    return i2.value ? e3 === i2.value || m2(i2.value, e3) : false;
  }
  function g2(e3) {
    return a2.value === e3;
  }
  return n((e3) => {
    let t3 = K($({ onDrop(e4) {
      let { location: t4, source: n2 } = e4;
      if (!t4.current.dropTargets.length) return;
      let r3 = n2.data.id, i3 = t4.current.dropTargets[0], a3 = i3.data.id, s3 = o2(i3.data);
      s3 !== null && p2(r3, a3, s3);
    } }));
    e3(() => {
      t3();
    });
  }), n((e3) => {
    let t3 = K($({ onDragStart({ source: e4 }) {
      i2.value = e4.data.id;
    }, onDrop(e4) {
      let { location: t4, source: n2 } = e4;
      if (i2.value = null, !t4.current.dropTargets.length) return;
      let r3 = n2.data.id, a3 = t4.current.dropTargets[0], s3 = a3.data.id, c3 = o2(a3.data);
      c3 === null ? p2(r3, s3, { type: `reorder-below` }) : p2(r3, s3, c3);
    } }));
    e3(() => {
      i2.value = null, t3();
    });
  }), { draggedItemId: i2, recentlyMovedItemId: a2, shouldBeDimmed: h2, wasRecentlyMoved: g2, isDescendantOf: m2, handleDragAndDrop: p2 };
}
var nt = { key: 2, class: `absolute text-primary bg-primary/30 backdrop-blur-md px-4 py-2 rounded-lg pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium whitespace-nowrap z-10 transition-all duration-150 ease-out` }, rt = s({ __name: `DraggableTreeItem`, props: { item: {}, level: {}, hasChildren: { type: Boolean }, isLast: { type: Boolean }, isDescendantOf: { type: Function }, onDelete: { type: Function } }, setup(e2) {
  function t2(e3, t3) {
    let { input: n2, element: r2, indentPerLevel: i2, currentLevel: a2 } = t3, o3 = r2.getBoundingClientRect(), s3 = n2.clientY - o3.top, c2 = n2.clientX - o3.left, l3 = o3.height, u3 = `reorder-below`;
    return u3 = s3 < l3 * 0.33 ? `reorder-above` : s3 > l3 * 0.67 ? `reorder-below` : c2 > i2 * 2 ? `make-child` : `reorder-below`, { ...e3, instruction: { type: u3, currentLevel: a2, indentPerLevel: i2 } };
  }
  function o2(e3) {
    return e3.instruction || null;
  }
  let s2 = e2, l2 = f(), u2 = f(), d2 = f(), p2 = f(false), g2 = f(false), _2 = f(null);
  function v2(e3) {
    if (e3.key === `Delete` && s2.onDelete) {
      let t3 = e3.target;
      if (t3.tagName === `INPUT` || t3.tagName === `TEXTAREA` || t3.isContentEditable) return;
      e3.preventDefault(), s2.onDelete(s2.item.value);
    }
  }
  return n((e3) => {
    let n2 = y(l2), r2 = y(u2), i2 = y(d2);
    if (!n2 || !r2 || !i2) return;
    let a2 = { id: s2.item.value, level: s2.level }, c2 = i2.querySelector(`.drag-and-drop-handler`);
    if (!c2) {
      console.warn(`No drag handle found for item:`, s2.item.value);
      return;
    }
    let f2 = K(et({ element: c2, getInitialData: () => a2, onGenerateDragPreview: ({ nativeSetDragImage: e4 }) => {
      if (e4) {
        let t3 = document.createElement(`div`);
        t3.className = `bg-default border border-default rounded-lg p-2 shadow-lg opacity-90 max-w-md font-sans`;
        let n3 = i2.cloneNode(true);
        if (n3.className = `m-0 py-2 px-0 [&_*]:!bg-default [&_*]:!text-highlighted`, t3.appendChild(n3), s2.hasChildren && s2.item.children?.length) {
          let e5 = document.createElement(`div`);
          e5.className = `ml-4 pl-2 border-l-2 border-default`;
          let n4 = document.createElement(`div`);
          n4.className = `text-sm text-dimmed py-1`, n4.textContent = `+ ${s2.item.children.length} nested item${s2.item.children.length > 1 ? `s` : ``}`, e5.appendChild(n4), t3.appendChild(e5);
        }
        document.body.appendChild(t3);
        let r3 = c2.getBoundingClientRect();
        e4(t3, r3.width / 2, r3.height / 2), setTimeout(() => {
          document.body.contains(t3) && document.body.removeChild(t3);
        }, 100);
      }
    }, onDragStart: () => {
      p2.value = true;
    }, onDrop: () => {
      p2.value = false;
    } }), $e({ element: n2, getData: ({ input: e4, element: n3 }) => t2({ id: s2.item.value }, { input: e4, element: n3, indentPerLevel: 16, currentLevel: s2.level, block: [] }), canDrop: ({ source: e4 }) => {
      let t3 = e4.data.id, n3 = s2.item.value;
      return !(t3 === n3 || s2.isDescendantOf && s2.isDescendantOf(t3, n3));
    }, onDrag: ({ self: e4 }) => {
      _2.value = o2(e4.data);
    }, onDragEnter: ({ source: e4 }) => {
      e4.data.id !== s2.item.value && (g2.value = true);
    }, onDragLeave: () => {
      g2.value = false, _2.value = null;
    }, onDrop: () => {
      g2.value = false, _2.value = null;
    }, getIsSticky: () => true }));
    e3(() => f2());
  }), (e3, t3) => (c(), a(`div`, { ref_key: `outerDropZoneRef`, ref: l2, class: r([`relative w-full px-2.5 py-1.5 transition-all duration-200 ease-out`, { "bg-elevated": g2.value }]), onKeydown: v2, tabindex: `0` }, [_2.value ? (c(), a(`div`, { key: 0, class: r([`absolute pointer-events-none border-primary transition-all duration-150 ease-out`, { "!border-b-2 -bottom-px left-1 right-0": _2.value.type === `reorder-below`, "!border-t-2 -top-px left-1 right-0": _2.value.type === `reorder-above`, "!border-2 rounded top-0 bottom-0 bg-primary/10 w-full -left-px": _2.value.type === `make-child` }]) }, null, 2)) : h(``, true), _2.value && (_2.value.type === `reorder-below` || _2.value.type === `reorder-above`) ? (c(), a(`div`, { key: 1, class: r([`absolute pointer-events-none w-2 h-2 border-2 border-primary bg-transparent rounded-full -left-1 z-10 transition-all duration-150 ease-out`, { "-bottom-1": _2.value.type === `reorder-below`, "-top-1": _2.value.type === `reorder-above` }]) }, null, 2)) : h(``, true), _2.value && _2.value.type === `make-child` ? (c(), a(`div`, nt, ` Drop to nest inside `)) : h(``, true), i(`div`, { ref_key: `dropZoneRef`, ref: u2, class: `relative w-full transition-all duration-200 ease-out` }, [i(`div`, { ref_key: `draggableRef`, ref: d2, class: r([`relative w-full py-4 transition-all duration-200 ease-out`, { "is-being-dragged": p2.value }]) }, [m(e3.$slots, `default`)], 2)], 512)], 34));
} }), it = { class: `flex items-center gap-2 w-full` }, at = { class: `drag-and-drop-handler bg-elevated rounded p-1 hover:bg-accented cursor-grab` }, ot = { class: `pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal` }, st = { class: `inline-flex bg-default px-1` }, ct = { class: `w-full` }, lt = { class: `inline-flex bg-default px-1` }, ut = s({ __name: `WizardTreeItem`, props: { item: {}, level: {}, shouldBeDimmed: { type: Function }, wasRecentlyMoved: { type: Function }, isDescendantOf: { type: Function }, onAddNext: { type: Function }, onAddChild: { type: Function }, onDelete: { type: Function } }, setup(e2) {
  function n2(e3) {
    e3.stopPropagation(), e3.stopImmediatePropagation();
  }
  return (a2, o2) => {
    let s2 = v, f2 = te, h2 = _, y2 = ee;
    return c(), d(rt, { item: e2.item, level: e2.level, "has-children": !!(e2.item.children && e2.item.children.length > 0), "is-last": false, "is-descendant-of": e2.isDescendantOf, "on-delete": e2.onDelete, class: r([{ "opacity-30": e2.shouldBeDimmed(e2.item.value || ``), "ring-2 ring-primary ring-offset-2 bg-primary/5": e2.wasRecentlyMoved(e2.item.value || ``) }, `transition-all duration-300 ease-out rounded-lg`]) }, { default: l(() => [i(`div`, it, [i(`div`, at, [t(s2, { name: `lucide:grip-vertical`, class: `size-4 text-dimmed` })]), m(a2.$slots, `leading`, { item: e2.item }), i(`div`, null, [t(f2, { modelValue: e2.item.var.key, "onUpdate:modelValue": [o2[0] || (o2[0] = (t2) => e2.item.var.key = t2), o2[1] || (o2[1] = (t2) => {
      let n3 = t2.replace(/[^a-zA-Z0-9\\-_]/g, ``);
      e2.item.var.key = n3;
    })], onKeydown: [g(n2, [`left`]), g(n2, [`right`])], placeholder: ``, ui: { base: `peer` } }, { default: l(() => [i(`label`, ot, [i(`span`, st, u(a2.i18n.__(`Name`)), 1)])]), _: 1 }, 8, [`modelValue`])]), m(a2.$slots, `before-value`, { item: e2.item }), i(`div`, ct, [t(f2, { modelValue: e2.item.var.value, "onUpdate:modelValue": [o2[2] || (o2[2] = (t2) => e2.item.var.value = t2), o2[3] || (o2[3] = (t2) => {
      e2.item.var.value = t2;
    })], onKeydown: [g(n2, [`left`]), g(n2, [`right`])], placeholder: ``, ui: { base: `peer`, root: `block` } }, p({ default: l(() => [i(`label`, { class: r([`pointer-events-none absolute left-0 -top-2.5 text-highlighted text-xs font-medium px-1.5 transition-all peer-focus:-top-2.5 peer-focus:text-highlighted peer-focus:text-xs peer-focus:font-medium peer-placeholder-shown:text-sm peer-placeholder-shown:text-dimmed peer-placeholder-shown:top-1.5 peer-placeholder-shown:font-normal`, { "peer-placeholder-shown:ps-9 peer-focus:ps-1.5": a2.$slots[`value-leading`] }]) }, [i(`span`, lt, u(a2.i18n.__(`Value`)), 1)], 2)]), _: 2 }, [a2.$slots[`value-leading`] ? { name: `leading`, fn: l(() => [m(a2.$slots, `value-leading`, { item: e2.item })]), key: `0` } : void 0]), 1032, [`modelValue`])]), i(`div`, null, [t(y2, { items: [{ label: a2.i18n.__(`Add (next)`, `windpress`), icon: `i-lucide-plus`, onSelect() {
      e2.onAddNext(e2.item.value || ``);
    } }, { label: a2.i18n.__(`Add (child)`, `windpress`), icon: `lucide:corner-down-right`, onSelect() {
      e2.onAddChild(e2.item.value || ``);
    } }, ...e2.onDelete ? [{ label: `Delete`, icon: `i-lucide-trash-2`, onSelect() {
      e2.onDelete(e2.item.value || ``);
    } }] : []], ui: { content: `w-48` } }, { default: l(() => [t(h2, { icon: `lucide:ellipsis`, color: `neutral`, variant: `ghost` })]), _: 1 }, 8, [`items`])])])]), _: 3 }, 8, [`item`, `level`, `has-children`, `is-descendant-of`, `on-delete`, `class`]);
  };
} });
export {
  tt as n,
  ne as r,
  ut as t
};
