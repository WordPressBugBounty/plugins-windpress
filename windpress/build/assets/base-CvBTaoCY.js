var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { pn as e, vn as t } from "./runtime-core.esm-bundler-Twwq1XF8.js";
import { U as n } from "./Button-DbU2pTtV.js";
import { l as r } from "./dist-ChpmCc7n.js";
function i(e2, t2 = {}, n2) {
  for (let r2 in e2) {
    let a2 = e2[r2], o2 = n2 ? `${n2}:${r2}` : r2;
    typeof a2 == `object` && a2 ? i(a2, t2, o2) : typeof a2 == `function` && (t2[o2] = a2);
  }
  return t2;
}
var a = (() => {
  if (console.createTask) return console.createTask;
  let e2 = { run: (e3) => e3() };
  return () => e2;
})();
function o(e2, t2, n2, r2) {
  for (let i2 = n2; i2 < e2.length; i2 += 1) try {
    let n3 = r2 ? r2.run(() => e2[i2](...t2)) : e2[i2](...t2);
    if (n3 && typeof n3.then == `function`) return Promise.resolve(n3).then(() => o(e2, t2, i2 + 1, r2));
  } catch (e3) {
    return Promise.reject(e3);
  }
}
function s(e2, t2, n2) {
  if (e2.length > 0) return o(e2, t2, 0, a(n2));
}
function c(e2, t2, n2) {
  if (e2.length > 0) {
    let r2 = a(n2);
    return Promise.all(e2.map((e3) => r2.run(() => e3(...t2))));
  }
}
function l(e2, t2) {
  for (let n2 of [...e2]) n2(t2);
}
var u = class {
  constructor() {
    __publicField(this, "_hooks");
    __publicField(this, "_before");
    __publicField(this, "_after");
    __publicField(this, "_deprecatedHooks");
    __publicField(this, "_deprecatedMessages");
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
  }
  hook(e2, t2, n2 = {}) {
    if (!e2 || typeof t2 != `function`) return () => {
    };
    let r2 = e2, i2;
    for (; this._deprecatedHooks[e2]; ) i2 = this._deprecatedHooks[e2], e2 = i2.to;
    if (i2 && !n2.allowDeprecated) {
      let e3 = i2.message;
      e3 || (e3 = `${r2} hook has been deprecated` + (i2.to ? `, please use ${i2.to}` : ``)), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e3) || (console.warn(e3), this._deprecatedMessages.add(e3));
    }
    if (!t2.name) try {
      Object.defineProperty(t2, "name", { get: () => `_` + e2.replace(/\W+/g, `_`) + `_hook_cb`, configurable: true });
    } catch {
    }
    return this._hooks[e2] = this._hooks[e2] || [], this._hooks[e2].push(t2), () => {
      t2 && (t2 = (this.removeHook(e2, t2), void 0));
    };
  }
  hookOnce(e2, t2) {
    let n2, r2 = (...e3) => (typeof n2 == `function` && n2(), n2 = void 0, r2 = void 0, t2(...e3));
    return n2 = this.hook(e2, r2), n2;
  }
  removeHook(e2, t2) {
    let n2 = this._hooks[e2];
    if (n2) {
      let r2 = n2.indexOf(t2);
      r2 !== -1 && n2.splice(r2, 1), n2.length === 0 && (this._hooks[e2] = void 0);
    }
  }
  clearHook(e2) {
    this._hooks[e2] = void 0;
  }
  deprecateHook(e2, t2) {
    this._deprecatedHooks[e2] = typeof t2 == `string` ? { to: t2 } : t2;
    let n2 = this._hooks[e2] || [];
    this._hooks[e2] = void 0;
    for (let t3 of n2) this.hook(e2, t3);
  }
  deprecateHooks(e2) {
    for (let t2 in e2) this.deprecateHook(t2, e2[t2]);
  }
  addHooks(e2) {
    let t2 = i(e2), n2 = Object.keys(t2).map((e3) => this.hook(e3, t2[e3]));
    return () => {
      for (let e3 of n2) e3();
      n2.length = 0;
    };
  }
  removeHooks(e2) {
    let t2 = i(e2);
    for (let e3 in t2) this.removeHook(e3, t2[e3]);
  }
  removeAllHooks() {
    this._hooks = {};
  }
  callHook(e2, ...t2) {
    return this.callHookWith(s, e2, t2);
  }
  callHookParallel(e2, ...t2) {
    return this.callHookWith(c, e2, t2);
  }
  callHookWith(e2, t2, n2) {
    let r2 = this._before || this._after ? { name: t2, args: n2, context: {} } : void 0;
    this._before && l(this._before, r2);
    let i2 = e2(this._hooks[t2] ? [...this._hooks[t2]] : [], n2, t2);
    return i2 instanceof Promise ? i2.finally(() => {
      this._after && r2 && l(this._after, r2);
    }) : (this._after && r2 && l(this._after, r2), i2);
  }
  beforeEach(e2) {
    return this._before = this._before || [], this._before.push(e2), () => {
      if (this._before !== void 0) {
        let t2 = this._before.indexOf(e2);
        t2 !== -1 && this._before.splice(t2, 1);
      }
    };
  }
  afterEach(e2) {
    return this._after = this._after || [], this._after.push(e2), () => {
      if (this._after !== void 0) {
        let t2 = this._after.indexOf(e2);
        t2 !== -1 && this._after.splice(t2, 1);
      }
    };
  }
};
function d() {
  return new u();
}
var f = () => {
  if (!n.colorMode) return { forced: true };
  let { store: e2, system: t2 } = r();
  return { get preference() {
    return e2.value === `auto` ? `system` : e2.value;
  }, set preference(t3) {
    e2.value = t3 === `system` ? `auto` : t3;
  }, get value() {
    return e2.value === `auto` ? t2.value : e2.value;
  }, forced: false };
}, p = (e2, n2 = {}) => {
  let r2 = t(n2?.default?.() ?? null);
  return { value: r2.value, get: () => r2.value, set: () => {
  }, update: () => {
  }, refresh: () => Promise.resolve(r2.value), remove: () => {
  } };
}, m = {}, h = (e2, n2) => {
  if (m[e2]) return m[e2];
  let r2 = t(n2());
  return m[e2] = r2, r2;
}, g = d();
function _() {
  return { isHydrating: true, payload: { serverRendered: false }, hooks: g, hook: g.hook };
}
function v(t2, n2) {
  e(_().hook(t2, n2));
}
function y(e2) {
  return { install(t2) {
    t2.runWithContext(() => e2({ vueApp: t2 }));
  } };
}
export {
  v as a,
  _ as i,
  f as n,
  h as o,
  p as r,
  d as s,
  y as t
};
