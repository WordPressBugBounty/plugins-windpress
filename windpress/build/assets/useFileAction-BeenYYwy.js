import { o as e } from "./chunk-DlkHe4MQ.js";
import { $n as t, D as n, E as r, Ht as i, Lt as a, On as o, Rt as s, Tn as c, Ut as l, Zn as u, _ as d, b as f, bt as p, ct as m, er as h, et as g, ft as _, g as v, gn as y, k as b, l as x, mt as S, o as C, qt as w, tr as T, tt as E, u as D, v as O, vn as k, w as A, wn as j, wt as ee, xt as M, y as N, z as te } from "./runtime-core.esm-bundler-C_RgxGrN.js";
import { l as P } from "./vue.runtime.esm-bundler-CFaGDlW9.js";
import { i as ne } from "./log-DwuCDoY0.js";
import { C as re, F, H as ie, I as ae, R as oe, T as I, U as se, _ as ce, b as le, g as ue, h as de, m as fe, p as pe, q as me, t as L, v as R, x as z, y as he, z as ge } from "./Button-C1y42oVo.js";
import { A as _e, b as ve, l as ye, n as be, o as xe, v as B, y as Se } from "./dist-BVQ2eZ4j.js";
import { A as Ce, D as V, F as we, I as H, O as U, P as W, R as Te, V as G, z as Ee } from "./namespaced-DqTNyUG4.js";
import { t as De } from "./clamp-DWsB7m9b.js";
import { C as Oe, c as K, d as ke, f as Ae, g as je, h as Me, i as Ne, l as Pe, o as Fe, p as Ie, u as Le, v as Re, w as ze, y as q } from "./Tooltip-C9kG7ywk.js";
import { r as Be } from "./VisuallyHiddenInput-BGsNpXMC.js";
import { t as Ve } from "./useOverlay-Db99omlQ.js";
import { n as He } from "./useToast-CD4zU2hG.js";
import { t as J } from "./Modal-CCmWsnAZ.js";
import { t as Ue } from "./Input-VRzwsNLL.js";
import { t as We } from "./api-3yDUayxW.js";
import { n as Ge } from "./index.browser-DL6dchOu.js";
import { n as Ke, r as qe, t as Je } from "./settings-CqVcAWve.js";
import { t as Ye } from "./isEqual-YKT5lZh8.js";
import { t as Y } from "./preload-helper-Cb81DA_d.js";
import { t as Xe } from "./dist-B8hXUid8.js";
import { t as Ze } from "./path-browserify-CWnXpqR1.js";
import { n as Qe } from "./vfs-DziqLF6T.js";
import { n as $e, t as et } from "./dist-C1tIstmk.js";
import { t as tt } from "./dayjs.min-40BoQqrT.js";
import { t as nt } from "./FormField-CQLWucec.js";
let Pt, $, cn;
let __tla = (async () => {
  var rt = [
    ` `,
    `Enter`,
    `ArrowUp`,
    `ArrowDown`
  ], it = [
    ` `,
    `Enter`
  ];
  function X(e2, t2, n2) {
    return e2 === void 0 ? false : Array.isArray(e2) ? e2.some((e3) => at(e3, t2, n2)) : at(e2, t2, n2);
  }
  function at(e2, t2, n2) {
    return e2 === void 0 || t2 === void 0 ? false : typeof e2 == `string` ? e2 === t2 : typeof n2 == `function` ? n2(e2, t2) : typeof n2 == `string` ? e2?.[n2] === t2?.[n2] : ie(e2, t2);
  }
  function ot(e2) {
    return e2 == null || e2 === `` || Array.isArray(e2) && e2.length === 0;
  }
  let st, Z, ct, lt, ut, dt, ft, Q, pt, mt, ht, gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn;
  st = {
    key: 0,
    value: ``
  };
  [Z, ct] = I(`SelectRoot`);
  lt = b({
    inheritAttrs: false,
    __name: `SelectRoot`,
    props: {
      open: {
        type: Boolean,
        required: false,
        default: void 0
      },
      defaultOpen: {
        type: Boolean,
        required: false
      },
      defaultValue: {
        type: null,
        required: false
      },
      modelValue: {
        type: null,
        required: false,
        default: void 0
      },
      by: {
        type: [
          String,
          Function
        ],
        required: false
      },
      dir: {
        type: String,
        required: false
      },
      multiple: {
        type: Boolean,
        required: false
      },
      autocomplete: {
        type: String,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      },
      name: {
        type: String,
        required: false
      },
      required: {
        type: Boolean,
        required: false
      }
    },
    emits: [
      `update:modelValue`,
      `update:open`
    ],
    setup(e2, { emit: t2 }) {
      let n2 = e2, r2 = t2, { required: i2, disabled: a2, multiple: s2, dir: l2 } = c(n2), u2 = ve(n2, `modelValue`, r2, {
        defaultValue: n2.defaultValue ?? (s2.value ? [] : void 0),
        passive: n2.modelValue === void 0,
        deep: true
      }), d2 = ve(n2, `open`, r2, {
        defaultValue: n2.defaultOpen,
        passive: n2.open === void 0
      }), m2 = k(), h2 = k(), _2 = k({
        x: 0,
        y: 0
      }), y2 = v(() => s2.value && Array.isArray(u2.value) ? u2.value?.length === 0 : Oe(u2.value));
      V({
        isProvider: true
      });
      let b2 = Te(l2), x2 = Be(m2), T2 = k(/* @__PURE__ */ new Set()), E2 = v(() => Array.from(T2.value).map((e3) => e3.value).join(`;`));
      function D2(e3) {
        if (s2.value) {
          let t3 = Array.isArray(u2.value) ? [
            ...u2.value
          ] : [], r3 = t3.findIndex((t4) => at(t4, e3, n2.by));
          r3 === -1 ? t3.push(e3) : t3.splice(r3, 1), u2.value = [
            ...t3
          ];
        } else u2.value = e3;
      }
      function A2(e3) {
        return Array.from(T2.value).find((t3) => X(e3, t3.value, n2.by));
      }
      return ct({
        triggerElement: m2,
        onTriggerChange: (e3) => {
          m2.value = e3;
        },
        valueElement: h2,
        onValueElementChange: (e3) => {
          h2.value = e3;
        },
        contentId: ``,
        modelValue: u2,
        onValueChange: D2,
        by: n2.by,
        open: d2,
        multiple: s2,
        required: i2,
        onOpenChange: (e3) => {
          d2.value = e3;
        },
        dir: b2,
        triggerPointerDownPosRef: _2,
        disabled: a2,
        isEmptyModelValue: y2,
        optionsSet: T2,
        onOptionAdd: (e3) => {
          let t3 = A2(e3.value);
          t3 && T2.value.delete(t3), T2.value.add(e3);
        },
        onOptionRemove: (e3) => {
          let t3 = A2(e3.value);
          t3 && T2.value.delete(t3);
        }
      }), (e3, t3) => (S(), O(o(Le), null, {
        default: w(() => [
          M(e3.$slots, `default`, {
            modelValue: o(u2),
            open: o(d2)
          }),
          o(x2) ? (S(), O(ut, {
            key: E2.value,
            "aria-hidden": `true`,
            tabindex: `-1`,
            multiple: o(s2),
            required: o(i2),
            name: e3.name,
            autocomplete: e3.autocomplete,
            disabled: o(a2),
            value: o(u2)
          }, {
            default: w(() => [
              o(Oe)(o(u2)) ? (S(), f(`option`, st)) : N(`v-if`, true),
              (S(true), f(C, null, p(Array.from(T2.value), (e4) => (S(), f(`option`, g({
                key: e4.value ?? ``
              }, {
                ref_for: true
              }, e4), null, 16))), 128))
            ]),
            _: 1
          }, 8, [
            `multiple`,
            `required`,
            `name`,
            `autocomplete`,
            `disabled`,
            `value`
          ])) : N(`v-if`, true)
        ]),
        _: 3
      }));
    }
  });
  ut = b({
    __name: `BubbleSelect`,
    props: {
      autocomplete: {
        type: String,
        required: false
      },
      autofocus: {
        type: Boolean,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      },
      form: {
        type: String,
        required: false
      },
      multiple: {
        type: Boolean,
        required: false
      },
      name: {
        type: String,
        required: false
      },
      required: {
        type: Boolean,
        required: false
      },
      size: {
        type: Number,
        required: false
      },
      value: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2, n2 = k(), r2 = Z();
      i(() => t2.value, (e3, t3) => {
        let r3 = window.HTMLSelectElement.prototype, i2 = Object.getOwnPropertyDescriptor(r3, `value`).set;
        if (e3 !== t3 && i2 && n2.value) {
          let t4 = new Event(`change`, {
            bubbles: true
          });
          i2.call(n2.value, e3), n2.value.dispatchEvent(t4);
        }
      });
      function a2(e3) {
        r2.onValueChange(e3.target.value);
      }
      return (e3, r3) => (S(), O(o(ke), {
        "as-child": ``
      }, {
        default: w(() => [
          d(`select`, g({
            ref_key: `selectElement`,
            ref: n2
          }, t2, {
            onInput: a2
          }), [
            M(e3.$slots, `default`)
          ], 16)
        ]),
        _: 3
      }));
    }
  });
  dt = b({
    __name: `SelectPopperPosition`,
    props: {
      side: {
        type: null,
        required: false
      },
      sideOffset: {
        type: Number,
        required: false
      },
      sideFlip: {
        type: Boolean,
        required: false
      },
      align: {
        type: null,
        required: false,
        default: `start`
      },
      alignOffset: {
        type: Number,
        required: false
      },
      alignFlip: {
        type: Boolean,
        required: false
      },
      avoidCollisions: {
        type: Boolean,
        required: false
      },
      collisionBoundary: {
        type: null,
        required: false
      },
      collisionPadding: {
        type: [
          Number,
          Object
        ],
        required: false,
        default: 10
      },
      arrowPadding: {
        type: Number,
        required: false
      },
      hideShiftedArrow: {
        type: Boolean,
        required: false
      },
      sticky: {
        type: String,
        required: false
      },
      hideWhenDetached: {
        type: Boolean,
        required: false
      },
      positionStrategy: {
        type: String,
        required: false
      },
      updatePositionStrategy: {
        type: String,
        required: false
      },
      disableUpdateOnLayoutShift: {
        type: Boolean,
        required: false
      },
      prioritizePosition: {
        type: Boolean,
        required: false
      },
      reference: {
        type: null,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      let t2 = re(e2);
      return (e3, n2) => (S(), O(o(K), g(o(t2), {
        style: {
          boxSizing: `border-box`,
          "--reka-select-content-transform-origin": `var(--reka-popper-transform-origin)`,
          "--reka-select-content-available-width": `var(--reka-popper-available-width)`,
          "--reka-select-content-available-height": `var(--reka-popper-available-height)`,
          "--reka-select-trigger-width": `var(--reka-popper-anchor-width)`,
          "--reka-select-trigger-height": `var(--reka-popper-anchor-height)`
        }
      }), {
        default: w(() => [
          M(e3.$slots, `default`)
        ]),
        _: 3
      }, 16));
    }
  });
  ft = {
    onViewportChange: () => {
    },
    itemTextRefCallback: () => {
    },
    itemRefCallback: () => {
    }
  };
  [Q, pt] = I(`SelectContent`);
  mt = b({
    __name: `SelectContentImpl`,
    props: {
      position: {
        type: String,
        required: false,
        default: `item-aligned`
      },
      bodyLock: {
        type: Boolean,
        required: false,
        default: true
      },
      side: {
        type: null,
        required: false
      },
      sideOffset: {
        type: Number,
        required: false
      },
      sideFlip: {
        type: Boolean,
        required: false
      },
      align: {
        type: null,
        required: false,
        default: `start`
      },
      alignOffset: {
        type: Number,
        required: false
      },
      alignFlip: {
        type: Boolean,
        required: false
      },
      avoidCollisions: {
        type: Boolean,
        required: false
      },
      collisionBoundary: {
        type: null,
        required: false
      },
      collisionPadding: {
        type: [
          Number,
          Object
        ],
        required: false
      },
      arrowPadding: {
        type: Number,
        required: false
      },
      hideShiftedArrow: {
        type: Boolean,
        required: false
      },
      sticky: {
        type: String,
        required: false
      },
      hideWhenDetached: {
        type: Boolean,
        required: false
      },
      positionStrategy: {
        type: String,
        required: false
      },
      updatePositionStrategy: {
        type: String,
        required: false
      },
      disableUpdateOnLayoutShift: {
        type: Boolean,
        required: false
      },
      prioritizePosition: {
        type: Boolean,
        required: false
      },
      reference: {
        type: null,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      },
      disableOutsidePointerEvents: {
        type: Boolean,
        required: false,
        default: true
      }
    },
    emits: [
      `closeAutoFocus`,
      `escapeKeyDown`,
      `pointerDownOutside`
    ],
    setup(e2, { emit: t2 }) {
      let r2 = e2, a2 = t2, s2 = Z();
      H(), Ee(r2.bodyLock);
      let { CollectionSlot: c2, getItems: u2 } = V(), d2 = k();
      we(d2);
      let { search: f2, handleTypeaheadSearch: p2 } = W(), m2 = k(), h2 = k(), _2 = k(), y2 = k(false), b2 = k(false), x2 = k(false);
      function C2() {
        h2.value && d2.value && U([
          h2.value,
          d2.value
        ]);
      }
      i(y2, () => {
        C2();
      });
      let { onOpenChange: T2, triggerPointerDownPosRef: E2 } = s2;
      l((e3) => {
        if (!d2.value) return;
        let t3 = {
          x: 0,
          y: 0
        }, n2 = (e4) => {
          t3 = {
            x: Math.abs(Math.round(e4.pageX) - (E2.value?.x ?? 0)),
            y: Math.abs(Math.round(e4.pageY) - (E2.value?.y ?? 0))
          };
        }, r3 = (e4) => {
          e4.pointerType !== `touch` && (t3.x <= 10 && t3.y <= 10 ? e4.preventDefault() : d2.value?.contains(e4.target) || T2(false), document.removeEventListener(`pointermove`, n2), E2.value = null);
        };
        E2.value !== null && (document.addEventListener(`pointermove`, n2), document.addEventListener(`pointerup`, r3, {
          capture: true,
          once: true
        })), e3(() => {
          document.removeEventListener(`pointermove`, n2), document.removeEventListener(`pointerup`, r3, {
            capture: true
          });
        });
      });
      function D2(e3) {
        let t3 = e3.ctrlKey || e3.altKey || e3.metaKey;
        if (e3.key === `Tab` && e3.preventDefault(), !t3 && e3.key.length === 1 && p2(e3.key, u2()), [
          `ArrowUp`,
          `ArrowDown`,
          `Home`,
          `End`
        ].includes(e3.key)) {
          let t4 = [
            ...u2().map((e4) => e4.ref)
          ];
          if ([
            `ArrowUp`,
            `End`
          ].includes(e3.key) && (t4 = t4.slice().reverse()), [
            `ArrowUp`,
            `ArrowDown`
          ].includes(e3.key)) {
            let n2 = e3.target, r3 = t4.indexOf(n2);
            t4 = t4.slice(r3 + 1);
          }
          setTimeout(() => U(t4)), e3.preventDefault();
        }
      }
      let A2 = re(v(() => r2.position === `popper` ? r2 : {}).value);
      return pt({
        content: d2,
        viewport: m2,
        onViewportChange: (e3) => {
          m2.value = e3;
        },
        itemRefCallback: (e3, t3, n2) => {
          let r3 = !b2.value && !n2, i2 = X(s2.modelValue.value, t3, s2.by);
          if (s2.multiple.value) {
            if (x2.value) return;
            (i2 || r3) && (h2.value = e3, i2 && (x2.value = true));
          } else (i2 || r3) && (h2.value = e3);
          r3 && (b2.value = true);
        },
        selectedItem: h2,
        selectedItemText: _2,
        onItemLeave: () => {
          d2.value?.focus();
        },
        itemTextRefCallback: (e3, t3, n2) => {
          let r3 = !b2.value && !n2;
          (X(s2.modelValue.value, t3, s2.by) || r3) && (_2.value = e3);
        },
        focusSelectedItem: C2,
        position: r2.position,
        isPositioned: y2,
        searchRef: f2
      }), (e3, t3) => (S(), O(o(c2), null, {
        default: w(() => [
          n(o(Ce), {
            "as-child": ``,
            onMountAutoFocus: t3[6] || (t3[6] = P(() => {
            }, [
              `prevent`
            ])),
            onUnmountAutoFocus: t3[7] || (t3[7] = (e4) => {
              a2(`closeAutoFocus`, e4), !e4.defaultPrevented && (o(s2).triggerElement.value?.focus({
                preventScroll: true
              }), e4.preventDefault());
            })
          }, {
            default: w(() => [
              n(o(Ie), {
                "as-child": ``,
                "disable-outside-pointer-events": e3.disableOutsidePointerEvents,
                onFocusOutside: t3[2] || (t3[2] = P(() => {
                }, [
                  `prevent`
                ])),
                onDismiss: t3[3] || (t3[3] = (e4) => o(s2).onOpenChange(false)),
                onEscapeKeyDown: t3[4] || (t3[4] = (e4) => a2(`escapeKeyDown`, e4)),
                onPointerDownOutside: t3[5] || (t3[5] = (e4) => a2(`pointerDownOutside`, e4))
              }, {
                default: w(() => [
                  (S(), O(ee(e3.position === `popper` ? dt : _t), g({
                    ...e3.$attrs,
                    ...o(A2)
                  }, {
                    id: o(s2).contentId,
                    ref: (e4) => {
                      let t4 = o(xe)(e4);
                      t4?.hasAttribute(`data-reka-popper-content-wrapper`) ? d2.value = t4.firstElementChild : d2.value = t4;
                    },
                    role: `listbox`,
                    "data-state": o(s2).open.value ? `open` : `closed`,
                    dir: o(s2).dir.value,
                    style: {
                      display: `flex`,
                      flexDirection: `column`,
                      outline: `none`
                    },
                    onContextmenu: t3[0] || (t3[0] = P(() => {
                    }, [
                      `prevent`
                    ])),
                    onPlaced: t3[1] || (t3[1] = (e4) => y2.value = true),
                    onKeydown: D2
                  }), {
                    default: w(() => [
                      M(e3.$slots, `default`)
                    ]),
                    _: 3
                  }, 16, [
                    `id`,
                    `data-state`,
                    `dir`,
                    `onKeydown`
                  ]))
                ]),
                _: 3
              }, 8, [
                `disable-outside-pointer-events`
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      }));
    }
  });
  [ht, gt] = I(`SelectItemAlignedPosition`);
  _t = b({
    inheritAttrs: false,
    __name: `SelectItemAlignedPosition`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    emits: [
      `placed`
    ],
    setup(e2, { emit: t2 }) {
      let r2 = e2, i2 = t2, { getItems: a2 } = V(), s2 = Z(), c2 = Q(), l2 = k(false), u2 = k(true), d2 = k(), { forwardRef: p2, currentElement: _2 } = q(), { viewport: v2, selectedItem: y2, selectedItemText: b2, focusSelectedItem: x2 } = c2;
      function C2() {
        if (s2.triggerElement.value && s2.valueElement.value && d2.value && _2.value && v2?.value && y2?.value && b2?.value) {
          let e3 = s2.triggerElement.value.getBoundingClientRect(), t3 = _2.value.getBoundingClientRect(), n2 = s2.valueElement.value.getBoundingClientRect(), r3 = b2.value.getBoundingClientRect();
          if (s2.dir.value !== `rtl`) {
            let i3 = r3.left - t3.left, a3 = n2.left - i3, o3 = e3.left - a3, s3 = e3.width + o3, c4 = Math.max(s3, t3.width), l3 = window.innerWidth - 10, u4 = De(a3, 10, Math.max(10, l3 - c4));
            d2.value.style.minWidth = `${s3}px`, d2.value.style.left = `${u4}px`;
          } else {
            let i3 = t3.right - r3.right, a3 = window.innerWidth - n2.right - i3, o3 = window.innerWidth - e3.right - a3, s3 = e3.width + o3, c4 = Math.max(s3, t3.width), l3 = window.innerWidth - 10, u4 = De(a3, 10, Math.max(10, l3 - c4));
            d2.value.style.minWidth = `${s3}px`, d2.value.style.right = `${u4}px`;
          }
          let o2 = a2().map((e4) => e4.ref), c3 = window.innerHeight - 20, u3 = v2.value.scrollHeight, f2 = window.getComputedStyle(_2.value), p3 = Number.parseInt(f2.borderTopWidth, 10), m2 = Number.parseInt(f2.paddingTop, 10), h2 = Number.parseInt(f2.borderBottomWidth, 10), g2 = Number.parseInt(f2.paddingBottom, 10), x3 = p3 + m2 + u3 + g2 + h2, S2 = Math.min(y2.value.offsetHeight * 5, x3), C3 = window.getComputedStyle(v2.value), w2 = Number.parseInt(C3.paddingTop, 10), T3 = Number.parseInt(C3.paddingBottom, 10), E2 = e3.top + e3.height / 2 - 10, D3 = c3 - E2, O2 = y2.value.offsetHeight / 2, k2 = y2.value.offsetTop + O2, A2 = p3 + m2 + k2, j2 = x3 - A2;
          if (A2 <= E2) {
            let e4 = y2.value === o2[o2.length - 1];
            d2.value.style.bottom = `0px`;
            let t4 = _2.value.clientHeight - v2.value.offsetTop - v2.value.offsetHeight, n3 = A2 + Math.max(D3, O2 + (e4 ? T3 : 0) + t4 + h2);
            d2.value.style.height = `${n3}px`;
          } else {
            let e4 = y2.value === o2[0];
            d2.value.style.top = `0px`;
            let t4 = Math.max(E2, p3 + v2.value.offsetTop + (e4 ? w2 : 0) + O2) + j2;
            d2.value.style.height = `${t4}px`, v2.value.scrollTop = A2 - E2 + v2.value.offsetTop;
          }
          d2.value.style.margin = `10px 0`, d2.value.style.minHeight = `${S2}px`, d2.value.style.maxHeight = `${c3}px`, i2(`placed`), requestAnimationFrame(() => l2.value = true);
        }
      }
      let T2 = k(``);
      m(async () => {
        await E(), C2(), _2.value && (T2.value = window.getComputedStyle(_2.value).zIndex);
      });
      function D2(e3) {
        e3 && u2.value === true && (C2(), x2?.(), u2.value = false);
      }
      return B(s2.triggerElement, () => {
        C2();
      }), gt({
        contentWrapper: d2,
        shouldExpandOnScrollRef: l2,
        onScrollButtonChange: D2
      }), (e3, t3) => (S(), f(`div`, {
        ref_key: `contentWrapperElement`,
        ref: d2,
        style: h({
          display: `flex`,
          flexDirection: `column`,
          position: `fixed`,
          zIndex: T2.value
        })
      }, [
        n(o(z), g({
          ref: o(p2),
          style: {
            boxSizing: `border-box`,
            maxHeight: `100%`
          }
        }, {
          ...e3.$attrs,
          ...r2
        }), {
          default: w(() => [
            M(e3.$slots, `default`)
          ]),
          _: 3
        }, 16)
      ], 4));
    }
  });
  vt = b({
    __name: `SelectArrow`,
    props: {
      width: {
        type: Number,
        required: false,
        default: 10
      },
      height: {
        type: Number,
        required: false,
        default: 5
      },
      rounded: {
        type: Boolean,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `svg`
      }
    },
    setup(e2) {
      let n2 = e2, r2 = Q(ft);
      return (e3, i2) => o(r2).position === `popper` ? (S(), O(o(Fe), t(g({
        key: 0
      }, n2)), {
        default: w(() => [
          M(e3.$slots, `default`)
        ]),
        _: 3
      }, 16)) : N(`v-if`, true);
    }
  });
  yt = b({
    inheritAttrs: false,
    __name: `SelectProvider`,
    props: {
      context: {
        type: Object,
        required: true
      }
    },
    setup(e2) {
      return ct(e2.context), pt(ft), (e3, t2) => M(e3.$slots, `default`);
    }
  });
  bt = {
    key: 1
  };
  xt = b({
    inheritAttrs: false,
    __name: `SelectContent`,
    props: {
      forceMount: {
        type: Boolean,
        required: false
      },
      position: {
        type: String,
        required: false
      },
      bodyLock: {
        type: Boolean,
        required: false
      },
      side: {
        type: null,
        required: false
      },
      sideOffset: {
        type: Number,
        required: false
      },
      sideFlip: {
        type: Boolean,
        required: false
      },
      align: {
        type: null,
        required: false
      },
      alignOffset: {
        type: Number,
        required: false
      },
      alignFlip: {
        type: Boolean,
        required: false
      },
      avoidCollisions: {
        type: Boolean,
        required: false
      },
      collisionBoundary: {
        type: null,
        required: false
      },
      collisionPadding: {
        type: [
          Number,
          Object
        ],
        required: false
      },
      arrowPadding: {
        type: Number,
        required: false
      },
      hideShiftedArrow: {
        type: Boolean,
        required: false
      },
      sticky: {
        type: String,
        required: false
      },
      hideWhenDetached: {
        type: Boolean,
        required: false
      },
      positionStrategy: {
        type: String,
        required: false
      },
      updatePositionStrategy: {
        type: String,
        required: false
      },
      disableUpdateOnLayoutShift: {
        type: Boolean,
        required: false
      },
      prioritizePosition: {
        type: Boolean,
        required: false
      },
      reference: {
        type: null,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      },
      disableOutsidePointerEvents: {
        type: Boolean,
        required: false
      }
    },
    emits: [
      `closeAutoFocus`,
      `escapeKeyDown`,
      `pointerDownOutside`
    ],
    setup(e2, { emit: r2 }) {
      let a2 = e2, s2 = Re(a2, r2), c2 = Z(), l2 = k();
      m(() => {
        l2.value = new DocumentFragment();
      });
      let u2 = k(), d2 = v(() => a2.forceMount || c2.open.value), p2 = k(d2.value);
      return i(d2, () => {
        setTimeout(() => p2.value = d2.value);
      }), (e3, r3) => d2.value || p2.value || u2.value?.present ? (S(), O(o(Me), {
        key: 0,
        ref_key: `presenceRef`,
        ref: u2,
        present: d2.value
      }, {
        default: w(() => [
          n(mt, t(te({
            ...o(s2),
            ...e3.$attrs
          })), {
            default: w(() => [
              M(e3.$slots, `default`)
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 8, [
        `present`
      ])) : l2.value ? (S(), f(`div`, bt, [
        (S(), O(D, {
          to: l2.value
        }, [
          n(yt, {
            context: o(c2)
          }, {
            default: w(() => [
              M(e3.$slots, `default`)
            ]),
            _: 3
          }, 8, [
            `context`
          ])
        ], 8, [
          `to`
        ]))
      ])) : N(`v-if`, true);
    }
  });
  [St, Ct] = I(`SelectGroup`);
  wt = b({
    __name: `SelectGroup`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2, n2 = je(void 0, `reka-select-group`);
      return Ct({
        id: n2
      }), (e3, r2) => (S(), O(o(z), g({
        role: `group`
      }, t2, {
        "aria-labelledby": o(n2)
      }), {
        default: w(() => [
          M(e3.$slots, `default`)
        ]),
        _: 3
      }, 16, [
        `aria-labelledby`
      ]));
    }
  });
  [Tt, Et] = I(`SelectItem`);
  Dt = b({
    __name: `SelectItem`,
    props: {
      value: {
        type: null,
        required: true
      },
      disabled: {
        type: Boolean,
        required: false
      },
      textValue: {
        type: String,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    emits: [
      `select`
    ],
    setup(e2, { emit: t2 }) {
      let r2 = e2, i2 = t2, { disabled: a2 } = c(r2), s2 = Z(), l2 = Q(), { forwardRef: u2, currentElement: d2 } = q(), { CollectionItem: f2 } = V(), p2 = v(() => X(s2.modelValue?.value, r2.value, s2.by)), h2 = k(false), g2 = k(r2.textValue ?? ``), _2 = je(void 0, `reka-select-item-text`);
      async function y2(e3) {
        e3.defaultPrevented || ze(`select.select`, b2, {
          originalEvent: e3,
          value: r2.value
        });
      }
      async function b2(e3) {
        await E(), i2(`select`, e3), !e3.defaultPrevented && (a2.value || (s2.onValueChange(r2.value), s2.multiple.value || s2.onOpenChange(false)));
      }
      async function x2(e3) {
        await E(), !e3.defaultPrevented && (a2.value ? l2.onItemLeave?.() : e3.currentTarget?.focus({
          preventScroll: true
        }));
      }
      async function C2(e3) {
        await E(), !e3.defaultPrevented && e3.currentTarget === G() && l2.onItemLeave?.();
      }
      async function T2(e3) {
        await E(), !e3.defaultPrevented && (l2.searchRef?.value !== `` && e3.key === ` ` || (it.includes(e3.key) && y2(e3), e3.key === ` ` && e3.preventDefault()));
      }
      if (r2.value === ``) throw Error(`A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.`);
      return m(() => {
        d2.value && l2.itemRefCallback(d2.value, r2.value, r2.disabled);
      }), Et({
        value: r2.value,
        disabled: a2,
        textId: _2,
        isSelected: p2,
        onItemTextChange: (e3) => {
          g2.value = ((g2.value || e3?.textContent) ?? ``).trim();
        }
      }), (e3, t3) => (S(), O(o(f2), {
        value: {
          textValue: g2.value
        }
      }, {
        default: w(() => [
          n(o(z), {
            ref: o(u2),
            role: `option`,
            "aria-labelledby": o(_2),
            "data-highlighted": h2.value ? `` : void 0,
            "aria-selected": p2.value,
            "data-state": p2.value ? `checked` : `unchecked`,
            "aria-disabled": o(a2) || void 0,
            "data-disabled": o(a2) ? `` : void 0,
            tabindex: o(a2) ? void 0 : -1,
            as: e3.as,
            "as-child": e3.asChild,
            onFocus: t3[0] || (t3[0] = (e4) => h2.value = true),
            onBlur: t3[1] || (t3[1] = (e4) => h2.value = false),
            onPointerup: y2,
            onPointerdown: t3[2] || (t3[2] = (e4) => {
              e4.currentTarget.focus({
                preventScroll: true
              });
            }),
            onTouchend: t3[3] || (t3[3] = P(() => {
            }, [
              `prevent`,
              `stop`
            ])),
            onPointermove: x2,
            onPointerleave: C2,
            onKeydown: T2
          }, {
            default: w(() => [
              M(e3.$slots, `default`)
            ]),
            _: 3
          }, 8, [
            `aria-labelledby`,
            `data-highlighted`,
            `aria-selected`,
            `data-state`,
            `aria-disabled`,
            `data-disabled`,
            `tabindex`,
            `as`,
            `as-child`
          ])
        ]),
        _: 3
      }, 8, [
        `value`
      ]));
    }
  });
  Ot = b({
    __name: `SelectItemIndicator`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `span`
      }
    },
    setup(e2) {
      let t2 = e2, n2 = Tt();
      return (e3, r2) => o(n2).isSelected.value ? (S(), O(o(z), g({
        key: 0,
        "aria-hidden": `true`
      }, t2), {
        default: w(() => [
          M(e3.$slots, `default`)
        ]),
        _: 3
      }, 16)) : N(`v-if`, true);
    }
  });
  kt = b({
    inheritAttrs: false,
    __name: `SelectItemText`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `span`
      }
    },
    setup(e2) {
      let t2 = e2, n2 = Z(), r2 = Q(), i2 = Tt(), { forwardRef: a2, currentElement: s2 } = q(), c2 = v(() => ({
        value: i2.value,
        disabled: i2.disabled.value,
        textContent: s2.value?.textContent ?? i2.value?.toString() ?? ``
      }));
      return m(() => {
        s2.value && (i2.onItemTextChange(s2.value), r2.itemTextRefCallback(s2.value, i2.value, i2.disabled.value), n2.onOptionAdd(c2.value));
      }), _(() => {
        n2.onOptionRemove(c2.value);
      }), (e3, n3) => (S(), O(o(z), g({
        id: o(i2).textId,
        ref: o(a2)
      }, {
        ...t2,
        ...e3.$attrs
      }), {
        default: w(() => [
          M(e3.$slots, `default`)
        ]),
        _: 3
      }, 16, [
        `id`
      ]));
    }
  });
  At = b({
    __name: `SelectLabel`,
    props: {
      for: {
        type: String,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `div`
      }
    },
    setup(e2) {
      let t2 = e2, n2 = St({
        id: ``
      });
      return (e3, r2) => (S(), O(o(z), g(t2, {
        id: o(n2).id
      }), {
        default: w(() => [
          M(e3.$slots, `default`)
        ]),
        _: 3
      }, 16, [
        `id`
      ]));
    }
  });
  jt = b({
    __name: `SelectPortal`,
    props: {
      to: {
        type: null,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      },
      defer: {
        type: Boolean,
        required: false
      },
      forceMount: {
        type: Boolean,
        required: false
      }
    },
    setup(e2) {
      let n2 = e2;
      return (e3, r2) => (S(), O(o(Ae), t(te(n2)), {
        default: w(() => [
          M(e3.$slots, `default`)
        ]),
        _: 3
      }, 16));
    }
  });
  Mt = b({
    __name: `SelectSeparator`,
    props: {
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false
      }
    },
    setup(e2) {
      let t2 = e2;
      return (e3, n2) => (S(), O(o(z), g({
        "aria-hidden": `true`
      }, t2), {
        default: w(() => [
          M(e3.$slots, `default`)
        ]),
        _: 3
      }, 16));
    }
  });
  Nt = b({
    __name: `SelectTrigger`,
    props: {
      disabled: {
        type: Boolean,
        required: false
      },
      reference: {
        type: null,
        required: false
      },
      asChild: {
        type: Boolean,
        required: false
      },
      as: {
        type: null,
        required: false,
        default: `button`
      }
    },
    setup(e2) {
      let t2 = e2, r2 = Z(), { forwardRef: i2, currentElement: a2 } = q(), s2 = v(() => r2.disabled?.value || t2.disabled);
      r2.contentId || (r2.contentId = je(void 0, `reka-select-content`)), m(() => {
        r2.onTriggerChange(a2.value);
      });
      let { getItems: c2 } = V(), { search: l2, handleTypeaheadSearch: u2, resetTypeahead: d2 } = W();
      function f2() {
        s2.value || (r2.onOpenChange(true), d2());
      }
      function p2(e3) {
        f2(), r2.triggerPointerDownPosRef.value = {
          x: Math.round(e3.pageX),
          y: Math.round(e3.pageY)
        };
      }
      return (e3, t3) => (S(), O(o(Pe), {
        "as-child": ``,
        reference: e3.reference
      }, {
        default: w(() => [
          n(o(z), {
            ref: o(i2),
            role: `combobox`,
            type: e3.as === `button` ? `button` : void 0,
            "aria-controls": o(r2).contentId,
            "aria-expanded": o(r2).open.value || false,
            "aria-required": o(r2).required?.value,
            "aria-autocomplete": `none`,
            disabled: s2.value,
            dir: o(r2)?.dir.value,
            "data-state": o(r2)?.open.value ? `open` : `closed`,
            "data-disabled": s2.value ? `` : void 0,
            "data-placeholder": o(ot)(o(r2).modelValue?.value) ? `` : void 0,
            "as-child": e3.asChild,
            as: e3.as,
            onClick: t3[0] || (t3[0] = (e4) => {
              e4?.currentTarget?.focus();
            }),
            onPointerdown: t3[1] || (t3[1] = (e4) => {
              if (e4.pointerType === `touch`) return e4.preventDefault();
              let t4 = e4.target;
              t4.hasPointerCapture(e4.pointerId) && t4.releasePointerCapture(e4.pointerId), e4.button === 0 && e4.ctrlKey === false && (p2(e4), e4.preventDefault());
            }),
            onPointerup: t3[2] || (t3[2] = P((e4) => {
              e4.pointerType === `touch` && p2(e4);
            }, [
              `prevent`
            ])),
            onKeydown: t3[3] || (t3[3] = (e4) => {
              let t4 = o(l2) !== ``;
              !(e4.ctrlKey || e4.altKey || e4.metaKey) && e4.key.length === 1 && t4 && e4.key === ` ` || (o(u2)(e4.key, o(c2)()), o(rt).includes(e4.key) && (f2(), e4.preventDefault()));
            })
          }, {
            default: w(() => [
              M(e3.$slots, `default`)
            ]),
            _: 3
          }, 8, [
            `type`,
            `aria-controls`,
            `aria-expanded`,
            `aria-required`,
            `disabled`,
            `dir`,
            `data-state`,
            `data-disabled`,
            `data-placeholder`,
            `as-child`,
            `as`
          ])
        ]),
        _: 3
      }, 8, [
        `reference`
      ]));
    }
  });
  $ = ne(`volume`, () => {
    let e2 = We(), t2 = qe(), n2 = y({
      entries: []
    }), r2 = y({
      entries: []
    }), a2 = k(null), o2 = Se(`windpress.dashboard.store.volume.activeViewEntryRelativePath`, null);
    function s2(e3) {
      return e3 = e3.replace(/[^a-zA-Z0-9._/-]+/g, ``), e3 = e3.replace(/\.{2,}/g, `.`), e3 = e3.replace(/\/{2,}/g, `/`), e3 = e3.replace(/^[._/ -]+|[._/ -]+$/g, ``), e3;
    }
    function c2(e3, t3 = `internal`) {
      let r3 = e3.split(`/`);
      t3 === void 0 || t3 === `internal` ? (r3 = r3.map((e4) => s2(e4)).join(`/`), r3 = s2(r3)) : r3 = r3.join(`/`);
      let i2 = n2.entries.findIndex((e4) => e4.relative_path === r3);
      if (i2 !== -1) {
        if (n2.entries[i2].hidden === false) throw Error(wp.i18n.__(`A file named "${r3}" already exists`, `windpress`));
        n2.entries[i2].hidden = false, n2.entries[i2].content = `/* file: ${r3} */

`, n2.entries[i2].handler = t3;
      } else n2.entries.push({
        name: r3.split(`/`).pop() || ``,
        content: `/* file: ${r3} */

`,
        relative_path: `${r3}`,
        handler: t3 || `internal`
      });
      a2.value = `${r3}`;
    }
    function l2(e3) {
      let t3 = n2.entries.findIndex((t4) => t4.relative_path === e3.relative_path);
      n2.entries[t3].content = ``, n2.entries[t3].hidden = true, a2.value === e3.relative_path && (a2.value = null);
    }
    function u2(e3, t3) {
      let r3 = n2.entries.findIndex((t4) => t4.relative_path === e3.relative_path), i2 = t3.split(`/`).map(s2).join(`/`);
      i2 = s2(i2);
      let a3 = n2.entries.findIndex((e4) => e4.relative_path === i2);
      if (a3 !== -1) {
        if (n2.entries[a3].hidden === false) throw Error(wp.i18n.__(`A file named "${i2}" already exists`, `windpress`));
        n2.entries[a3].hidden = false, n2.entries[a3].content = n2.entries[r3].content, n2.entries[a3].signature && delete n2.entries[a3].signature;
      } else {
        let e4 = Ke(n2.entries[r3]);
        e4.relative_path = i2, e4.name = i2.split(`/`).pop() || ``, e4.content = n2.entries[r3].content, e4.hidden = false, e4.signature = void 0, n2.entries.push(e4);
      }
      l2(e3);
    }
    function d2(e3) {
      let t3 = n2.entries.findIndex((t4) => t4.relative_path === e3.relative_path);
      n2.entries[t3].content = ``;
    }
    function f2() {
      return n2.entries.reduce((e3, t3) => (e3[`/${t3.relative_path}`] = t3.content, e3), {});
    }
    async function p2() {
      return t2.add(`volume.doPull`), await e2.request(`/admin/volume/index`, {
        method: `GET`
      }).then((e3) => e3.data).then((e3) => {
        n2.entries = e3.entries, h2();
      }).catch((e3) => {
      }).finally(() => {
        t2.remove(`volume.doPull`);
      });
    }
    async function m2() {
      return t2.add(`volume.doPush`), e2.request(`/admin/volume/store`, {
        method: `POST`,
        data: {
          volume: {
            entries: n2.entries
          }
        }
      }).then((e3) => (h2(), {
        message: e3.data.message,
        success: true
      })).catch((e3) => {
        throw Error(e3.response ? e3.response.data.message : e3.message);
      }).finally(() => {
        t2.remove(`volume.doPush`);
      });
    }
    i(a2, (e3) => {
      o2.value = e3;
    });
    function h2() {
      n2.entries.length !== 0 && (a2.value = n2.entries.some((e3) => e3.relative_path === o2.value) ? o2.value : `main.css`, g2.value && (r2.entries = Ke(n2.entries)));
    }
    let g2 = v(() => !Ye(n2.entries, r2.entries));
    function _2(e3) {
      return !Ye(n2.entries.find((t3) => t3.relative_path === e3), r2.entries.find((t3) => t3.relative_path === e3));
    }
    async function b2() {
      return n2.entries.length === 0 ? p2() : Promise.resolve();
    }
    return {
      data: n2,
      initData: r2,
      activeViewEntryRelativePath: a2,
      hasChanged: g2,
      addNewEntry: c2,
      getKVEntries: f2,
      doPull: p2,
      doPush: m2,
      entryHasChanged: _2,
      softDeleteEntry: l2,
      resetEntry: d2,
      renameEntry: u2,
      cleanPath: s2,
      initPull: b2
    };
  });
  Pt = ne(`themeJson`, () => {
    let e2 = We(), t2 = qe(), n2 = k({});
    async function r2() {
      return t2.add(`themeJson.doPush`), e2.request(`/admin/theme-json/store`, {
        method: `POST`,
        data: {
          data: btoa(JSON.stringify(n2.value, null, window.windpress.is_debug ? 2 : void 0))
        }
      }).then((e3) => ({
        message: e3.data.message,
        success: true
      })).catch((e3) => {
        throw Error(e3.response ? e3.response.data.message : e3.message);
      }).finally(() => {
        t2.remove(`themeJson.doPush`);
      });
    }
    return {
      themeJson: n2,
      doPush: r2
    };
  });
  Ft = e(tt(), 1);
  It = e(Ze(), 1);
  Lt = {
    class: `flex`
  };
  Rt = [
    `innerHTML`
  ];
  zt = {
    class: `flex gap-2`
  };
  Bt = b({
    __name: `ConfirmFileActionModal`,
    props: {
      filePath: {},
      fileContent: {},
      actionYes: {},
      actionNo: {}
    },
    emits: [
      `close`
    ],
    setup(e2, { emit: t2 }) {
      let i2 = e2, a2 = ye(), s2 = k(null);
      (async () => {
        s2.value = await $e({
          themes: [
            Y(() => import("./dark-plus-Ckwk5c-G.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url),
            Y(() => import("./light-plus-DwL9ko6V.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url)
          ],
          langs: [
            Y(() => import("./css-BdG0pVBb.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url),
            Y(() => import("./javascript-Yr-P-0p0.js").then(async (m2) => {
              await m2.__tla;
              return m2;
            }), [], import.meta.url)
          ],
          engine: et(Y(() => import("./wasm-XUuNH_hH.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), [], import.meta.url))
        });
      })();
      let c2 = be(async () => {
        if (!i2.fileContent || !s2.value) return;
        let e3 = It.default.extname(i2.filePath).replace(`.`, ``);
        return s2.value.codeToHtml(i2.fileContent, {
          lang: e3 === `css` ? `css` : `javascript`,
          theme: a2.value === `dark` ? `dark-plus` : `light-plus`
        });
      }), l2 = t2;
      return (t3, i3) => {
        let a3 = L, s3 = J;
        return S(), O(s3, {
          close: {
            onClick: () => l2(`close`, false)
          }
        }, A({
          title: w(() => [
            r(T(t3.i18n.sprintf(t3.i18n.__(`Are you sure you want to %s the "%s" file?`, `windpress`), e2.actionYes, e2.filePath)), 1)
          ]),
          footer: w(() => [
            d(`div`, zt, [
              n(a3, {
                color: `neutral`,
                variant: `soft`,
                label: t3.i18n.__(`cancel`, `windpress`),
                onClick: i3[0] || (i3[0] = (e3) => l2(`close`, false)),
                class: `capitalize`
              }, null, 8, [
                `label`
              ]),
              n(a3, {
                color: `error`,
                variant: `soft`,
                label: e2.actionYes,
                onClick: i3[1] || (i3[1] = (e3) => l2(`close`, true)),
                class: `capitalize`
              }, null, 8, [
                `label`
              ])
            ])
          ]),
          _: 2
        }, [
          e2.fileContent ? {
            name: `body`,
            fn: w(() => [
              (S(), O(x, null, {
                default: w(() => [
                  d(`div`, Lt, [
                    d(`div`, {
                      innerHTML: o(c2),
                      class: `flex [&>pre]:p-4 [&>pre]:mr-6`
                    }, null, 8, Rt)
                  ])
                ]),
                _: 1
              }))
            ]),
            key: `0`
          } : void 0
        ]), 1032, [
          `close`
        ]);
      };
    }
  });
  Vt = {
    class: `flex flex-col gap-4 text-(--ui-text)`
  };
  Ht = {
    class: `font-bold uppercase my-2`
  };
  Ut = {
    class: `w-full`
  };
  Wt = {
    class: `font-semibold w-1/3`
  };
  Gt = {
    class: ``
  };
  Kt = {
    class: `font-semibold w-1/5`
  };
  qt = {
    class: ``
  };
  Jt = {
    class: `font-semibold w-1/5`
  };
  Yt = {
    class: ``
  };
  Xt = {
    class: `font-semibold w-1/5`
  };
  Zt = {
    class: ``
  };
  Qt = {
    class: `flex gap-2`
  };
  $t = b({
    __name: `ConfirmVolumeImportModal`,
    props: {
      data: {}
    },
    emits: [
      `close`
    ],
    setup(e2, { emit: t2 }) {
      let i2 = e2, a2 = t2;
      return (e3, t3) => {
        let s2 = L, c2 = J;
        return S(), O(c2, {
          close: {
            onClick: () => a2(`close`, false)
          }
        }, {
          title: w(() => [
            r(T(e3.i18n.__(`Import SFS volume`, `windpress`)), 1)
          ]),
          body: w(() => [
            d(`div`, Vt, [
              d(`div`, null, [
                d(`div`, Ht, T(e3.i18n.__(`File info`, `windpress`)), 1),
                d(`table`, Ut, [
                  d(`tbody`, null, [
                    d(`tr`, null, [
                      d(`td`, Wt, T(e3.i18n.__(`WindPress version`, `windpress`)), 1),
                      t3[2] || (t3[2] = d(`td`, {
                        class: ``
                      }, `:`, -1)),
                      d(`td`, Gt, T(i2.data._version), 1)
                    ]),
                    d(`tr`, null, [
                      d(`td`, Kt, T(e3.i18n.__(`WP Version`, `windpress`)), 1),
                      t3[3] || (t3[3] = d(`td`, {
                        class: ``
                      }, `:`, -1)),
                      d(`td`, qt, T(i2.data._wp_version), 1)
                    ]),
                    d(`tr`, null, [
                      d(`td`, Jt, T(e3.i18n.__(`Exported on`, `windpress`)), 1),
                      t3[4] || (t3[4] = d(`td`, {
                        class: ``
                      }, `:`, -1)),
                      d(`td`, Yt, T(o(Ft.default)(i2.data._timestamp).format(`YYYY-MM-DD HH:mm:ss`)), 1)
                    ]),
                    d(`tr`, null, [
                      d(`td`, Xt, T(e3.i18n.__(`Entries`, `windpress`)), 1),
                      t3[5] || (t3[5] = d(`td`, {
                        class: ``
                      }, `:`, -1)),
                      d(`td`, Zt, T(i2.data.entries.length), 1)
                    ])
                  ])
                ])
              ]),
              r(` ` + T(e3.i18n.__(`This will overwrite all existing files. Are you sure you want to continue?`, `windpress`)), 1)
            ])
          ]),
          footer: w(() => [
            d(`div`, Qt, [
              n(s2, {
                color: `neutral`,
                variant: `soft`,
                label: e3.i18n.__(`cancel`, `windpress`),
                onClick: t3[0] || (t3[0] = (e4) => a2(`close`, false)),
                class: `capitalize`
              }, null, 8, [
                `label`
              ]),
              n(s2, {
                color: `warning`,
                variant: `soft`,
                label: e3.i18n.__(`Yes, continue`, `windpress`),
                onClick: t3[1] || (t3[1] = (e4) => a2(`close`, true)),
                class: `capitalize`
              }, null, 8, [
                `label`
              ])
            ])
          ]),
          _: 1
        }, 8, [
          `close`
        ]);
      };
    }
  });
  en = {
    slots: {
      base: [
        `relative group rounded-md inline-flex items-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75`,
        `transition-colors`
      ],
      leading: `absolute inset-y-0 start-0 flex items-center`,
      leadingIcon: `shrink-0 text-dimmed`,
      leadingAvatar: `shrink-0`,
      leadingAvatarSize: ``,
      trailing: `absolute inset-y-0 end-0 flex items-center`,
      trailingIcon: `shrink-0 text-dimmed`,
      value: `truncate pointer-events-none`,
      placeholder: `truncate text-dimmed`,
      arrow: `fill-bg stroke-default`,
      content: `max-h-60 w-(--reka-select-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-select-content-transform-origin) pointer-events-auto flex flex-col`,
      viewport: `relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1`,
      group: `p-1 isolate`,
      empty: `text-center text-muted`,
      label: `font-semibold text-highlighted`,
      separator: `-mx-1 my-1 h-px bg-border`,
      item: [
        `group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50`,
        `transition-colors before:transition-colors`
      ],
      itemLeadingIcon: [
        `shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default`,
        `transition-colors`
      ],
      itemLeadingAvatar: `shrink-0`,
      itemLeadingAvatarSize: ``,
      itemLeadingChip: `shrink-0`,
      itemLeadingChipSize: ``,
      itemTrailing: `ms-auto inline-flex gap-1.5 items-center`,
      itemTrailingIcon: `shrink-0`,
      itemWrapper: `flex-1 flex flex-col min-w-0`,
      itemLabel: `truncate`,
      itemDescription: `truncate text-muted`
    },
    variants: {
      fieldGroup: {
        horizontal: `not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]`,
        vertical: `not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]`
      },
      size: {
        xs: {
          base: `px-2 py-1 text-xs gap-1`,
          leading: `ps-2`,
          trailing: `pe-2`,
          leadingIcon: `size-4`,
          leadingAvatarSize: `3xs`,
          trailingIcon: `size-4`,
          label: `p-1 text-[10px]/3 gap-1`,
          item: `p-1 text-xs gap-1`,
          itemLeadingIcon: `size-4`,
          itemLeadingAvatarSize: `3xs`,
          itemLeadingChip: `size-4`,
          itemLeadingChipSize: `sm`,
          itemTrailingIcon: `size-4`,
          empty: `p-2 text-xs`
        },
        sm: {
          base: `px-2.5 py-1.5 text-xs gap-1.5`,
          leading: `ps-2.5`,
          trailing: `pe-2.5`,
          leadingIcon: `size-4`,
          leadingAvatarSize: `3xs`,
          trailingIcon: `size-4`,
          label: `p-1.5 text-[10px]/3 gap-1.5`,
          item: `p-1.5 text-xs gap-1.5`,
          itemLeadingIcon: `size-4`,
          itemLeadingAvatarSize: `3xs`,
          itemLeadingChip: `size-4`,
          itemLeadingChipSize: `sm`,
          itemTrailingIcon: `size-4`,
          empty: `p-2.5 text-xs`
        },
        md: {
          base: `px-2.5 py-1.5 text-sm gap-1.5`,
          leading: `ps-2.5`,
          trailing: `pe-2.5`,
          leadingIcon: `size-5`,
          leadingAvatarSize: `2xs`,
          trailingIcon: `size-5`,
          label: `p-1.5 text-xs gap-1.5`,
          item: `p-1.5 text-sm gap-1.5`,
          itemLeadingIcon: `size-5`,
          itemLeadingAvatarSize: `2xs`,
          itemLeadingChip: `size-5`,
          itemLeadingChipSize: `md`,
          itemTrailingIcon: `size-5`,
          empty: `p-2.5 text-sm`
        },
        lg: {
          base: `px-3 py-2 text-sm gap-2`,
          leading: `ps-3`,
          trailing: `pe-3`,
          leadingIcon: `size-5`,
          leadingAvatarSize: `2xs`,
          trailingIcon: `size-5`,
          label: `p-2 text-xs gap-2`,
          item: `p-2 text-sm gap-2`,
          itemLeadingIcon: `size-5`,
          itemLeadingAvatarSize: `2xs`,
          itemLeadingChip: `size-5`,
          itemLeadingChipSize: `md`,
          itemTrailingIcon: `size-5`,
          empty: `p-3 text-sm`
        },
        xl: {
          base: `px-3 py-2 text-base gap-2`,
          leading: `ps-3`,
          trailing: `pe-3`,
          leadingIcon: `size-6`,
          leadingAvatarSize: `xs`,
          trailingIcon: `size-6`,
          label: `p-2 text-sm gap-2`,
          item: `p-2 text-base gap-2`,
          itemLeadingIcon: `size-6`,
          itemLeadingAvatarSize: `xs`,
          itemLeadingChip: `size-6`,
          itemLeadingChipSize: `lg`,
          itemTrailingIcon: `size-6`,
          empty: `p-3 text-base`
        }
      },
      variant: {
        outline: `text-highlighted bg-default ring ring-inset ring-accented hover:bg-elevated disabled:bg-default`,
        soft: `text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50`,
        subtle: `text-highlighted bg-elevated ring ring-inset ring-accented hover:bg-accented/75 disabled:bg-elevated`,
        ghost: `text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent`,
        none: `text-highlighted bg-transparent`
      },
      color: {
        primary: ``,
        secondary: ``,
        success: ``,
        info: ``,
        warning: ``,
        error: ``,
        neutral: ``
      },
      leading: {
        true: ``
      },
      trailing: {
        true: ``
      },
      loading: {
        true: ``
      },
      highlight: {
        true: ``
      },
      fixed: {
        false: ``
      },
      type: {
        file: `file:me-1.5 file:font-medium file:text-muted file:outline-none`
      }
    },
    compoundVariants: [
      {
        color: `primary`,
        variant: [
          `outline`,
          `subtle`
        ],
        class: `focus:ring-2 focus:ring-inset focus:ring-primary`
      },
      {
        color: `secondary`,
        variant: [
          `outline`,
          `subtle`
        ],
        class: `focus:ring-2 focus:ring-inset focus:ring-secondary`
      },
      {
        color: `success`,
        variant: [
          `outline`,
          `subtle`
        ],
        class: `focus:ring-2 focus:ring-inset focus:ring-success`
      },
      {
        color: `info`,
        variant: [
          `outline`,
          `subtle`
        ],
        class: `focus:ring-2 focus:ring-inset focus:ring-info`
      },
      {
        color: `warning`,
        variant: [
          `outline`,
          `subtle`
        ],
        class: `focus:ring-2 focus:ring-inset focus:ring-warning`
      },
      {
        color: `error`,
        variant: [
          `outline`,
          `subtle`
        ],
        class: `focus:ring-2 focus:ring-inset focus:ring-error`
      },
      {
        color: `primary`,
        highlight: true,
        class: `ring ring-inset ring-primary`
      },
      {
        color: `secondary`,
        highlight: true,
        class: `ring ring-inset ring-secondary`
      },
      {
        color: `success`,
        highlight: true,
        class: `ring ring-inset ring-success`
      },
      {
        color: `info`,
        highlight: true,
        class: `ring ring-inset ring-info`
      },
      {
        color: `warning`,
        highlight: true,
        class: `ring ring-inset ring-warning`
      },
      {
        color: `error`,
        highlight: true,
        class: `ring ring-inset ring-error`
      },
      {
        color: `neutral`,
        variant: [
          `outline`,
          `subtle`
        ],
        class: `focus:ring-2 focus:ring-inset focus:ring-inverted`
      },
      {
        color: `neutral`,
        highlight: true,
        class: `ring ring-inset ring-inverted`
      },
      {
        leading: true,
        size: `xs`,
        class: `ps-7`
      },
      {
        leading: true,
        size: `sm`,
        class: `ps-8`
      },
      {
        leading: true,
        size: `md`,
        class: `ps-9`
      },
      {
        leading: true,
        size: `lg`,
        class: `ps-10`
      },
      {
        leading: true,
        size: `xl`,
        class: `ps-11`
      },
      {
        trailing: true,
        size: `xs`,
        class: `pe-7`
      },
      {
        trailing: true,
        size: `sm`,
        class: `pe-8`
      },
      {
        trailing: true,
        size: `md`,
        class: `pe-9`
      },
      {
        trailing: true,
        size: `lg`,
        class: `pe-10`
      },
      {
        trailing: true,
        size: `xl`,
        class: `pe-11`
      },
      {
        loading: true,
        leading: true,
        class: {
          leadingIcon: `animate-spin`
        }
      },
      {
        loading: true,
        leading: false,
        trailing: true,
        class: {
          trailingIcon: `animate-spin`
        }
      },
      {
        fixed: false,
        size: `xs`,
        class: `md:text-xs`
      },
      {
        fixed: false,
        size: `sm`,
        class: `md:text-xs`
      },
      {
        fixed: false,
        size: `md`,
        class: `md:text-sm`
      },
      {
        fixed: false,
        size: `lg`,
        class: `md:text-sm`
      }
    ],
    defaultVariants: {
      size: `md`,
      color: `primary`,
      variant: `outline`
    }
  };
  tn = Object.assign({
    inheritAttrs: false
  }, {
    __name: `Select`,
    props: {
      id: {
        type: String,
        required: false
      },
      placeholder: {
        type: String,
        required: false
      },
      color: {
        type: null,
        required: false
      },
      variant: {
        type: null,
        required: false
      },
      size: {
        type: null,
        required: false
      },
      trailingIcon: {
        type: null,
        required: false
      },
      selectedIcon: {
        type: null,
        required: false
      },
      content: {
        type: Object,
        required: false
      },
      arrow: {
        type: [
          Boolean,
          Object
        ],
        required: false
      },
      portal: {
        type: [
          Boolean,
          String
        ],
        required: false,
        skipCheck: true,
        default: true
      },
      valueKey: {
        type: null,
        required: false,
        default: `value`
      },
      labelKey: {
        type: null,
        required: false,
        default: `label`
      },
      descriptionKey: {
        type: null,
        required: false,
        default: `description`
      },
      items: {
        type: null,
        required: false
      },
      defaultValue: {
        type: null,
        required: false
      },
      modelValue: {
        type: null,
        required: false
      },
      modelModifiers: {
        type: null,
        required: false
      },
      multiple: {
        type: Boolean,
        required: false
      },
      highlight: {
        type: Boolean,
        required: false
      },
      autofocus: {
        type: Boolean,
        required: false
      },
      autofocusDelay: {
        type: Number,
        required: false,
        default: 0
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      open: {
        type: Boolean,
        required: false
      },
      defaultOpen: {
        type: Boolean,
        required: false
      },
      autocomplete: {
        type: String,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      },
      name: {
        type: String,
        required: false
      },
      required: {
        type: Boolean,
        required: false
      },
      icon: {
        type: null,
        required: false
      },
      avatar: {
        type: Object,
        required: false
      },
      leading: {
        type: Boolean,
        required: false
      },
      leadingIcon: {
        type: null,
        required: false
      },
      trailing: {
        type: Boolean,
        required: false
      },
      loading: {
        type: Boolean,
        required: false
      },
      loadingIcon: {
        type: null,
        required: false
      }
    },
    emits: [
      `change`,
      `blur`,
      `focus`,
      `update:modelValue`,
      `update:open`
    ],
    setup(e2, { expose: i2, emit: c2 }) {
      let l2 = e2, h2 = c2, _2 = a(), y2 = me(), b2 = le(`select`, l2), x2 = Re(_e(l2, `open`, `defaultOpen`, `disabled`, `autocomplete`, `required`, `multiple`), h2), E2 = Ne(j(() => l2.portal)), D2 = j(() => se(l2.content, {
        side: `bottom`,
        sideOffset: 8,
        collisionPadding: 8,
        position: `popper`
      })), k2 = j(() => se(l2.arrow, {
        rounded: true
      })), { emitFormChange: A2, emitFormInput: ee2, emitFormBlur: P2, emitFormFocus: ne2, size: re2, color: ie2, id: I2, name: L2, highlight: z2, disabled: ve2, ariaAttrs: ye2 } = pe(l2), { orientation: be2, size: xe2 } = fe(l2), { isLeading: B2, isTrailing: Se2, leadingIconName: Ce2, trailingIconName: V2 } = de(j(() => se(l2, {
        trailingIcon: y2.ui.icons.chevronDown
      }))), we2 = v(() => xe2.value || re2.value), H2 = v(() => he({
        extend: he(en),
        ...y2.ui?.select || {}
      })({
        color: ie2.value,
        variant: l2.variant,
        size: we2?.value,
        loading: l2.loading,
        highlight: z2.value,
        leading: B2.value || !!l2.avatar || !!_2.leading,
        trailing: Se2.value || !!_2.trailing,
        fieldGroup: be2.value
      })), U2 = v(() => l2.items?.length ? oe(l2.items) ? l2.items : [
        l2.items
      ] : []), W2 = v(() => U2.value.flatMap((e3) => e3));
      function Te2(e3) {
        if (l2.multiple && Array.isArray(e3)) {
          let t2 = e3.map((e4) => ae(W2.value, e4, {
            labelKey: l2.labelKey,
            valueKey: l2.valueKey
          })).filter((e4) => e4 != null && e4 !== ``);
          return t2.length > 0 ? t2.join(`, `) : void 0;
        }
        return ae(W2.value, e3, {
          labelKey: l2.labelKey,
          valueKey: l2.valueKey
        });
      }
      let G2 = s(`triggerRef`);
      function Ee2() {
        l2.autofocus && G2.value?.$el?.focus({
          focusVisible: true
        });
      }
      m(() => {
        setTimeout(() => {
          Ee2();
        }, l2.autofocusDelay);
      });
      function De2(e3) {
        l2.modelModifiers?.trim && (typeof e3 == `string` || e3 == null) && (e3 = e3?.trim() ?? null), l2.modelModifiers?.number && (e3 = ge(e3)), l2.modelModifiers?.nullable && (e3 ?? (e3 = null)), l2.modelModifiers?.optional && !l2.modelModifiers?.nullable && e3 !== null && (e3 ?? (e3 = void 0)), h2(`change`, new Event(`change`, {
          target: {
            value: e3
          }
        })), A2(), ee2();
      }
      function Oe2(e3) {
        e3 ? (h2(`focus`, new FocusEvent(`focus`)), ne2()) : (h2(`blur`, new FocusEvent(`blur`)), P2());
      }
      function K2(e3) {
        return typeof e3 == `object` && !!e3;
      }
      let ke2 = s(`viewportRef`);
      return i2({
        triggerRef: j(() => G2.value?.$el),
        viewportRef: j(() => ke2.value)
      }), (i3, a2) => (S(), O(o(lt), g({
        name: o(L2)
      }, o(x2), {
        autocomplete: e2.autocomplete,
        disabled: o(ve2),
        "default-value": e2.defaultValue,
        "model-value": e2.modelValue,
        "onUpdate:modelValue": De2,
        "onUpdate:open": Oe2
      }), {
        default: w(({ modelValue: a3, open: s2 }) => [
          n(o(Nt), g({
            id: o(I2),
            ref_key: `triggerRef`,
            ref: G2,
            "data-slot": `base`,
            class: H2.value.base({
              class: [
                o(b2)?.base,
                l2.class
              ]
            })
          }, {
            ...i3.$attrs,
            ...o(ye2)
          }), {
            default: w(() => [
              o(B2) || e2.avatar || _2.leading ? (S(), f(`span`, {
                key: 0,
                "data-slot": `leading`,
                class: u(H2.value.leading({
                  class: o(b2)?.leading
                }))
              }, [
                M(i3.$slots, `leading`, {
                  modelValue: a3,
                  open: s2,
                  ui: H2.value
                }, () => [
                  o(B2) && o(Ce2) ? (S(), O(R, {
                    key: 0,
                    name: o(Ce2),
                    "data-slot": `leadingIcon`,
                    class: u(H2.value.leadingIcon({
                      class: o(b2)?.leadingIcon
                    }))
                  }, null, 8, [
                    `name`,
                    `class`
                  ])) : e2.avatar ? (S(), O(ue, g({
                    key: 1,
                    size: o(b2)?.itemLeadingAvatarSize || H2.value.itemLeadingAvatarSize()
                  }, e2.avatar, {
                    "data-slot": `itemLeadingAvatar`,
                    class: H2.value.itemLeadingAvatar({
                      class: o(b2)?.itemLeadingAvatar
                    })
                  }), null, 16, [
                    `size`,
                    `class`
                  ])) : N(``, true)
                ])
              ], 2)) : N(``, true),
              M(i3.$slots, `default`, {
                modelValue: a3,
                open: s2,
                ui: H2.value
              }, () => [
                (S(true), f(C, null, p([
                  Te2(a3)
                ], (t2) => (S(), f(C, {
                  key: t2
                }, [
                  t2 == null ? (S(), f(`span`, {
                    key: 1,
                    "data-slot": `placeholder`,
                    class: u(H2.value.placeholder({
                      class: o(b2)?.placeholder
                    }))
                  }, T(e2.placeholder ?? `\xA0`), 3)) : (S(), f(`span`, {
                    key: 0,
                    "data-slot": `value`,
                    class: u(H2.value.value({
                      class: o(b2)?.value
                    }))
                  }, T(t2), 3))
                ], 64))), 128))
              ]),
              o(Se2) || _2.trailing ? (S(), f(`span`, {
                key: 1,
                "data-slot": `trailing`,
                class: u(H2.value.trailing({
                  class: o(b2)?.trailing
                }))
              }, [
                M(i3.$slots, `trailing`, {
                  modelValue: a3,
                  open: s2,
                  ui: H2.value
                }, () => [
                  o(V2) ? (S(), O(R, {
                    key: 0,
                    name: o(V2),
                    "data-slot": `trailingIcon`,
                    class: u(H2.value.trailingIcon({
                      class: o(b2)?.trailingIcon
                    }))
                  }, null, 8, [
                    `name`,
                    `class`
                  ])) : N(``, true)
                ])
              ], 2)) : N(``, true)
            ]),
            _: 2
          }, 1040, [
            `id`,
            `class`
          ]),
          n(o(jt), t(te(o(E2))), {
            default: w(() => [
              n(o(xt), g({
                "data-slot": `content`,
                class: H2.value.content({
                  class: o(b2)?.content
                })
              }, D2.value), {
                default: w(() => [
                  M(i3.$slots, `content-top`),
                  d(`div`, {
                    ref_key: `viewportRef`,
                    ref: ke2,
                    role: `presentation`,
                    "data-slot": `viewport`,
                    class: u(H2.value.viewport({
                      class: o(b2)?.viewport
                    }))
                  }, [
                    (S(true), f(C, null, p(U2.value, (t2, a4) => (S(), O(o(wt), {
                      key: `group-${a4}`,
                      "data-slot": `group`,
                      class: u(H2.value.group({
                        class: o(b2)?.group
                      }))
                    }, {
                      default: w(() => [
                        (S(true), f(C, null, p(t2, (t3, s3) => (S(), f(C, {
                          key: `group-${a4}-${s3}`
                        }, [
                          K2(t3) && t3.type === `label` ? (S(), O(o(At), {
                            key: 0,
                            "data-slot": `label`,
                            class: u(H2.value.label({
                              class: [
                                o(b2)?.label,
                                t3.ui?.label,
                                t3.class
                              ]
                            }))
                          }, {
                            default: w(() => [
                              r(T(o(F)(t3, l2.labelKey)), 1)
                            ]),
                            _: 2
                          }, 1032, [
                            `class`
                          ])) : K2(t3) && t3.type === `separator` ? (S(), O(o(Mt), {
                            key: 1,
                            "data-slot": `separator`,
                            class: u(H2.value.separator({
                              class: [
                                o(b2)?.separator,
                                t3.ui?.separator,
                                t3.class
                              ]
                            }))
                          }, null, 8, [
                            `class`
                          ])) : (S(), O(o(Dt), {
                            key: 2,
                            "data-slot": `item`,
                            class: u(H2.value.item({
                              class: [
                                o(b2)?.item,
                                K2(t3) && t3.ui?.item,
                                K2(t3) && t3.class
                              ]
                            })),
                            disabled: K2(t3) && t3.disabled,
                            value: K2(t3) ? o(F)(t3, l2.valueKey) : t3,
                            onSelect: (e3) => K2(t3) && t3.onSelect?.(e3)
                          }, {
                            default: w(() => [
                              M(i3.$slots, `item`, {
                                item: t3,
                                index: s3,
                                ui: H2.value
                              }, () => [
                                M(i3.$slots, `item-leading`, {
                                  item: t3,
                                  index: s3,
                                  ui: H2.value
                                }, () => [
                                  K2(t3) && t3.icon ? (S(), O(R, {
                                    key: 0,
                                    name: t3.icon,
                                    "data-slot": `itemLeadingIcon`,
                                    class: u(H2.value.itemLeadingIcon({
                                      class: [
                                        o(b2)?.itemLeadingIcon,
                                        t3.ui?.itemLeadingIcon
                                      ]
                                    }))
                                  }, null, 8, [
                                    `name`,
                                    `class`
                                  ])) : K2(t3) && t3.avatar ? (S(), O(ue, g({
                                    key: 1,
                                    size: t3.ui?.itemLeadingAvatarSize || o(b2)?.itemLeadingAvatarSize || H2.value.itemLeadingAvatarSize()
                                  }, {
                                    ref_for: true
                                  }, t3.avatar, {
                                    "data-slot": `itemLeadingAvatar`,
                                    class: H2.value.itemLeadingAvatar({
                                      class: [
                                        o(b2)?.itemLeadingAvatar,
                                        t3.ui?.itemLeadingAvatar
                                      ]
                                    })
                                  }), null, 16, [
                                    `size`,
                                    `class`
                                  ])) : K2(t3) && t3.chip ? (S(), O(ce, g({
                                    key: 2,
                                    size: t3.ui?.itemLeadingChipSize || o(b2)?.itemLeadingChipSize || H2.value.itemLeadingChipSize(),
                                    inset: ``,
                                    standalone: ``
                                  }, {
                                    ref_for: true
                                  }, t3.chip, {
                                    "data-slot": `itemLeadingChip`,
                                    class: H2.value.itemLeadingChip({
                                      class: [
                                        o(b2)?.itemLeadingChip,
                                        t3.ui?.itemLeadingChip
                                      ]
                                    })
                                  }), null, 16, [
                                    `size`,
                                    `class`
                                  ])) : N(``, true)
                                ]),
                                d(`span`, {
                                  "data-slot": `itemWrapper`,
                                  class: u(H2.value.itemWrapper({
                                    class: [
                                      o(b2)?.itemWrapper,
                                      K2(t3) && t3.ui?.itemWrapper
                                    ]
                                  }))
                                }, [
                                  n(o(kt), {
                                    "data-slot": `itemLabel`,
                                    class: u(H2.value.itemLabel({
                                      class: [
                                        o(b2)?.itemLabel,
                                        K2(t3) && t3.ui?.itemLabel
                                      ]
                                    }))
                                  }, {
                                    default: w(() => [
                                      M(i3.$slots, `item-label`, {
                                        item: t3,
                                        index: s3
                                      }, () => [
                                        r(T(K2(t3) ? o(F)(t3, l2.labelKey) : t3), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, [
                                    `class`
                                  ]),
                                  K2(t3) && (o(F)(t3, l2.descriptionKey) || _2[`item-description`]) ? (S(), f(`span`, {
                                    key: 0,
                                    "data-slot": `itemDescription`,
                                    class: u(H2.value.itemDescription({
                                      class: [
                                        o(b2)?.itemDescription,
                                        K2(t3) && t3.ui?.itemDescription
                                      ]
                                    }))
                                  }, [
                                    M(i3.$slots, `item-description`, {
                                      item: t3,
                                      index: s3
                                    }, () => [
                                      r(T(o(F)(t3, l2.descriptionKey)), 1)
                                    ])
                                  ], 2)) : N(``, true)
                                ], 2),
                                d(`span`, {
                                  "data-slot": `itemTrailing`,
                                  class: u(H2.value.itemTrailing({
                                    class: [
                                      o(b2)?.itemTrailing,
                                      K2(t3) && t3.ui?.itemTrailing
                                    ]
                                  }))
                                }, [
                                  M(i3.$slots, `item-trailing`, {
                                    item: t3,
                                    index: s3,
                                    ui: H2.value
                                  }),
                                  n(o(Ot), {
                                    "as-child": ``
                                  }, {
                                    default: w(() => [
                                      n(R, {
                                        name: e2.selectedIcon || o(y2).ui.icons.check,
                                        "data-slot": `itemTrailingIcon`,
                                        class: u(H2.value.itemTrailingIcon({
                                          class: [
                                            o(b2)?.itemTrailingIcon,
                                            K2(t3) && t3.ui?.itemTrailingIcon
                                          ]
                                        }))
                                      }, null, 8, [
                                        `name`,
                                        `class`
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ], 2)
                              ])
                            ]),
                            _: 2
                          }, 1032, [
                            `class`,
                            `disabled`,
                            `value`,
                            `onSelect`
                          ]))
                        ], 64))), 128))
                      ]),
                      _: 2
                    }, 1032, [
                      `class`
                    ]))), 128))
                  ], 2),
                  M(i3.$slots, `content-bottom`),
                  e2.arrow ? (S(), O(o(vt), g({
                    key: 0
                  }, k2.value, {
                    "data-slot": `arrow`,
                    class: H2.value.arrow({
                      class: o(b2)?.arrow
                    })
                  }), null, 16, [
                    `class`
                  ])) : N(``, true)
                ]),
                _: 3
              }, 16, [
                `class`
              ])
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 16, [
        `name`,
        `autocomplete`,
        `disabled`,
        `default-value`,
        `model-value`
      ]));
    }
  });
  nn = {
    class: `flex flex-col gap-4`
  };
  rn = {
    class: `flex gap-2`
  };
  an = b({
    __name: `NewFileFormModal`,
    emits: [
      `close`
    ],
    setup(e2, { emit: t2 }) {
      let a2 = $(), o2 = We(), s2 = t2, c2 = k(``), l2 = k(), u2 = k([]), f2 = k(false), p2 = k(false);
      i(() => c2.value, () => {
        p2.value = false;
      }), m(async () => {
        try {
          f2.value = true, u2.value = (await o2.request(`/admin/volume/handlers`, {
            method: `GET`
          })).data.handlers;
        } catch (e3) {
          console.error(e3);
        } finally {
          f2.value = false;
        }
      });
      function h2() {
        if (p2.value = false, !c2.value) {
          p2.value = wp.i18n.__(`Filename is required`, `windpress`);
          return;
        }
        if (!c2.value.endsWith(`.css`) && !c2.value.endsWith(`.js`)) {
          p2.value = wp.i18n.__(`File extension must be .css or .js`, `windpress`);
          return;
        }
        if (!/^[a-zA-Z0-9_.\-/]+$/.test(c2.value) && (l2.value === `internal` || !l2.value)) {
          p2.value = wp.i18n.__(`Only alphanumeric, dash, underscore, forward slash, and dot are allowed`, `windpress`);
          return;
        }
        if (a2.data.entries.find((e3) => e3.relative_path === `${c2.value}` && e3.hidden !== true)) {
          p2.value = wp.i18n.sprintf(wp.i18n.__(`A file named "%s" already exists`, `windpress`), c2.value);
          return;
        }
        s2(`close`, {
          filePath: c2.value,
          handler: l2.value
        });
      }
      return (e3, t3) => {
        let i2 = Ue, a3 = nt, o3 = L, m2 = tn, g2 = J;
        return S(), O(g2, {
          close: {
            onClick: () => s2(`close`)
          }
        }, {
          title: w(() => [
            r(T(e3.i18n.__(`Create New File`, `windpress`)), 1)
          ]),
          body: w(() => [
            d(`div`, nn, [
              n(a3, {
                label: `Filename`,
                required: ``,
                description: e3.i18n.__(`Filename may include a path. (css or js)`, `windpress`),
                error: p2.value
              }, {
                default: w(() => [
                  n(i2, {
                    modelValue: c2.value,
                    "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => c2.value = e4),
                    placeholder: `theme/color.css`,
                    class: `w-full`
                  }, null, 8, [
                    `modelValue`
                  ])
                ]),
                _: 1
              }, 8, [
                `description`,
                `error`
              ]),
              u2.value.length > 0 ? (S(), O(a3, {
                key: 0,
                label: e3.i18n.__(`Handler`, `windpress`),
                description: e3.i18n.__(`The handler determines how the file is processed and served.`, `windpress`),
                help: e3.i18n.__(`If no handler is selected, the internal handler will be used.`, `windpress`)
              }, {
                default: w(() => [
                  n(m2, {
                    items: u2.value,
                    loading: f2.value,
                    "value-key": `value`,
                    class: `w-full`,
                    placeholder: `Choose Handler...`,
                    modelValue: l2.value,
                    "onUpdate:modelValue": t3[4] || (t3[4] = (e4) => l2.value = e4)
                  }, A({
                    _: 2
                  }, [
                    l2.value ? {
                      name: `trailing`,
                      fn: w(() => [
                        n(o3, {
                          color: `neutral`,
                          variant: `link`,
                          size: `sm`,
                          icon: `i-lucide-circle-x`,
                          "aria-label": `Clear input`,
                          onClick: t3[1] || (t3[1] = P((e4) => l2.value = void 0, [
                            `prevent`,
                            `stop`
                          ])),
                          onMousedown: t3[2] || (t3[2] = P(() => {
                          }, [
                            `prevent`,
                            `stop`
                          ])),
                          onTouchstart: t3[3] || (t3[3] = P(() => {
                          }, [
                            `prevent`,
                            `stop`
                          ])),
                          class: `pointer-events-auto`
                        })
                      ]),
                      key: `0`
                    } : void 0
                  ]), 1032, [
                    `items`,
                    `loading`,
                    `modelValue`
                  ])
                ]),
                _: 1
              }, 8, [
                `label`,
                `description`,
                `help`
              ])) : N(``, true)
            ])
          ]),
          footer: w(() => [
            d(`div`, rn, [
              n(o3, {
                color: `neutral`,
                variant: `soft`,
                label: e3.i18n.__(`cancel`, `windpress`),
                onClick: t3[5] || (t3[5] = (e4) => s2(`close`)),
                class: `capitalize`
              }, null, 8, [
                `label`
              ]),
              n(o3, {
                color: `primary`,
                variant: `soft`,
                label: e3.i18n.__(`Submit`, `windpress`),
                onClick: h2,
                class: `capitalize`
              }, null, 8, [
                `label`
              ])
            ])
          ]),
          _: 1
        }, 8, [
          `close`
        ]);
      };
    }
  });
  on = {
    class: `flex gap-2`
  };
  sn = b({
    __name: `RenameFileFormModal`,
    props: {
      filePath: {}
    },
    emits: [
      `close`
    ],
    setup(e2, { emit: t2 }) {
      let a2 = $(), o2 = t2, s2 = e2, c2 = k(s2.filePath), l2 = k(false);
      i(() => c2.value, () => {
        l2.value = false;
      });
      function u2() {
        if (l2.value = false, !c2.value) {
          l2.value = wp.i18n.__(`Filename is required`, `windpress`);
          return;
        }
        if (!c2.value.endsWith(`.css`) && !c2.value.endsWith(`.js`)) {
          l2.value = wp.i18n.__(`File extension must be .css or .js`, `windpress`);
          return;
        }
        if (!/^[a-zA-Z0-9_.\-/]+$/.test(c2.value)) {
          l2.value = wp.i18n.__(`Only alphanumeric, dash, underscore, forward slash, and dot are allowed`, `windpress`);
          return;
        }
        if (a2.data.entries.find((e3) => e3.relative_path === `${c2.value}` && e3.hidden !== true)) {
          l2.value = wp.i18n.sprintf(wp.i18n.__(`A file named "%s" already exists`, `windpress`), c2.value);
          return;
        }
        o2(`close`, c2.value);
      }
      return (e3, t3) => {
        let i2 = Ue, a3 = nt, f2 = L, p2 = J;
        return S(), O(p2, {
          close: {
            onClick: () => o2(`close`)
          }
        }, {
          title: w(() => [
            r(T(e3.i18n.__(`Rename File`, `windpress`)), 1)
          ]),
          body: w(() => [
            n(a3, {
              label: `Old Filename`,
              description: e3.i18n.__(`The previous filename`, `windpress`),
              class: `mb-2`
            }, {
              default: w(() => [
                n(i2, {
                  value: s2.filePath,
                  disabled: true,
                  class: `w-full`
                }, null, 8, [
                  `value`
                ])
              ]),
              _: 1
            }, 8, [
              `description`
            ]),
            n(a3, {
              label: `New Filename`,
              required: ``,
              description: e3.i18n.__(`Filename may include a path. (css or js)`, `windpress`),
              error: l2.value
            }, {
              default: w(() => [
                n(i2, {
                  modelValue: c2.value,
                  "onUpdate:modelValue": t3[0] || (t3[0] = (e4) => c2.value = e4),
                  placeholder: `theme/color.css`,
                  class: `w-full`
                }, null, 8, [
                  `modelValue`
                ])
              ]),
              _: 1
            }, 8, [
              `description`,
              `error`
            ])
          ]),
          footer: w(() => [
            d(`div`, on, [
              n(f2, {
                color: `neutral`,
                variant: `soft`,
                label: e3.i18n.__(`cancel`, `windpress`),
                onClick: t3[1] || (t3[1] = (e4) => o2(`close`)),
                class: `capitalize`
              }, null, 8, [
                `label`
              ]),
              n(f2, {
                color: `primary`,
                variant: `soft`,
                label: e3.i18n.__(`Submit`, `windpress`),
                onClick: u2,
                class: `capitalize`
              }, null, 8, [
                `label`
              ])
            ])
          ]),
          _: 1
        }, 8, [
          `close`
        ]);
      };
    }
  });
  cn = function() {
    let e2 = $(), t2 = Je(), n2 = Pt(), r2 = He(), i2 = Ve();
    async function a2(t3) {
      if (t3.readonly) {
        r2.add({
          title: wp.i18n.__(`Error`, `windpress`),
          description: wp.i18n.sprintf(wp.i18n.__(`File "%s" is read-only and not deletable`, `windpress`), t3.relative_path),
          color: `error`,
          icon: `i-lucide-trash`
        });
        return;
      }
      if (t3.relative_path === `main.css`) {
        r2.add({
          title: wp.i18n.__(`Error`, `windpress`),
          description: wp.i18n.sprintf(wp.i18n.__(`File "%s" is required for the WindPress to work and not deletable`, `windpress`), t3.relative_path),
          color: `error`,
          icon: `i-lucide-trash`
        });
        return;
      }
      if (!await i2.create(Bt, {
        destroyOnClose: true,
        props: {
          filePath: t3.relative_path,
          fileContent: t3.content,
          actionYes: wp.i18n.__(`delete`, `windpress`)
        }
      }).open().result) {
        r2.add({
          title: wp.i18n.__(`Canceled`, `windpress`),
          description: wp.i18n.sprintf(wp.i18n.__(`File "%s" is not deleted`, `windpress`), t3.relative_path),
          color: `info`,
          icon: `i-lucide-trash`
        });
        return;
      }
      e2.softDeleteEntry(t3), r2.add({
        title: wp.i18n.__(`Success`, `windpress`),
        description: wp.i18n.sprintf(wp.i18n.__(`File "%s" deleted`, `windpress`), t3.relative_path),
        color: `success`,
        icon: `i-lucide-trash`
      });
    }
    async function o2(t3) {
      if (!await i2.create(Bt, {
        destroyOnClose: true,
        props: {
          filePath: t3.relative_path,
          fileContent: t3.content,
          actionYes: wp.i18n.__(`reset`, `windpress`)
        }
      }).open().result) {
        r2.add({
          title: wp.i18n.__(`Canceled`, `windpress`),
          description: wp.i18n.sprintf(wp.i18n.__(`File "%s" is not reset`, `windpress`), t3.relative_path),
          color: `info`,
          icon: `lucide:file-minus-2`
        });
        return;
      }
      e2.resetEntry(t3), r2.add({
        title: wp.i18n.__(`Success`, `windpress`),
        description: wp.i18n.sprintf(wp.i18n.__(`File "%s" reset`, `windpress`), t3.relative_path),
        color: `success`,
        icon: `lucide:file-minus-2`
      }), s2().then(() => {
        e2.doPull();
      });
    }
    async function s2() {
      let i3 = {
        title: wp.i18n.__(`Saving...`, `windpress`),
        description: wp.i18n.__(`Please wait while we save your changes.`, `windpress`),
        duration: 0,
        icon: `lucide:loader-circle`,
        close: false,
        color: `neutral`,
        ui: {
          icon: `animate-spin`
        }
      };
      return r2.toasts.value.find((e3) => e3.id === `file-editor.doSave`) ? r2.update(`file-editor.doSave`, {
        ...i3
      }) : r2.add({
        id: `file-editor.doSave`,
        ...i3
      }), e2.doPush().then(() => {
        r2.update(`file-editor.doSave`, {
          title: wp.i18n.__(`Saved`, `windpress`),
          description: wp.i18n.__(`Your changes have been saved.`, `windpress`),
          icon: `i-lucide-save`,
          color: `success`,
          duration: void 0,
          close: true,
          ui: {
            icon: void 0
          }
        }), Number(t2.virtualOptions(`general.tailwindcss.version`, 4).value) === 4 && n2.doPush();
      }).catch((e3) => {
        r2.update(`file-editor.doSave`, {
          title: wp.i18n.__(`Error`, `windpress`),
          description: wp.i18n.__(`An error occurred while saving your changes.`, `windpress`),
          icon: `i-lucide-save`,
          color: `error`,
          duration: void 0,
          close: true,
          ui: {
            icon: void 0
          }
        });
      }).finally(() => {
        let t3 = new BroadcastChannel(`windpress`);
        [
          `windpress/observer`,
          `windpress/intellisense`
        ].forEach((n3) => {
          t3.postMessage({
            source: `windpress/dashboard`,
            target: n3,
            task: `windpress.code-editor.saved`,
            payload: {
              volume: Qe(e2.getKVEntries())
            }
          });
        }), t3.close();
      });
    }
    function c2() {
      let t3 = {
        entries: e2.data.entries,
        _windpress: true,
        _version: window.windpress._version,
        _wp_version: window.windpress._wp_version,
        _timestamp: (/* @__PURE__ */ new Date()).getTime(),
        _uid: Ge(),
        _type: `sfs`
      }, n3 = Xe.compressToUint8Array(JSON.stringify(t3)), i3 = new Blob([
        n3
      ], {
        type: `application/octet-stream`
      }), a3 = URL.createObjectURL(i3), o3 = document.createElement(`a`);
      o3.href = a3, o3.download = `sfs-${(0, Ft.default)().format(`YYYYMMDDHHmmss`)}.windpress`, o3.click(), URL.revokeObjectURL(a3), r2.add({
        title: wp.i18n.__(`Exported`, `windpress`),
        description: wp.i18n.__(`SFS volume data exported`, `windpress`),
        color: `success`,
        icon: `i-lucide-download`
      });
    }
    async function l2(t3) {
      let n3 = t3.target;
      if (!n3 || !n3.files || n3.files.length === 0) return;
      let a3 = n3.files[0];
      if (!a3) return;
      if (!a3.name.endsWith(`.windpress`)) {
        r2.add({
          title: wp.i18n.__(`SFS Import`, `windpress`),
          description: wp.i18n.__(`Invalid file format`, `windpress`),
          color: `error`,
          icon: `i-lucide-upload`
        });
        return;
      }
      let o3;
      try {
        if (o3 = JSON.parse(Xe.decompressFromUint8Array(new Uint8Array(await a3.arrayBuffer())) || `{}`), !o3._windpress || o3._type !== `sfs`) throw Error(wp.i18n.__(`File is not a valid WindPress file`, `windpress`));
      } catch (e3) {
        r2.add({
          title: wp.i18n.__(`SFS Import`, `windpress`),
          description: e3 instanceof Error ? e3.message : wp.i18n.__(`An unknown error occurred`, `windpress`),
          color: `error`,
          icon: `i-lucide-upload`
        });
        return;
      }
      if (!await i2.create($t, {
        destroyOnClose: true,
        props: {
          data: o3
        }
      }).open().result) {
        r2.add({
          title: wp.i18n.__(`Canceled`, `windpress`),
          description: wp.i18n.__(`SFS import canceled`, `windpress`),
          color: `info`,
          icon: `i-lucide-upload`
        }), n3.value = ``;
        return;
      }
      r2.add({
        id: `file-import.doImport`,
        title: wp.i18n.__(`Importing...`, `windpress`),
        description: wp.i18n.__(`Please wait while we import the data.`, `windpress`),
        icon: `lucide:loader-circle`,
        close: false,
        duration: 0,
        color: `neutral`,
        ui: {
          icon: `animate-spin`
        }
      }), await new Promise((e3) => setTimeout(e3, 500));
      try {
        let t4 = o3.entries.map((e3) => {
          if (e3.signature && e3.handler === `internal`) {
            let { signature: t5, ...n4 } = e3;
            return n4;
          }
          return e3;
        });
        e2.data.entries = t4, r2.update(`file-import.doImport`, {
          title: wp.i18n.__(`Success`, `windpress`),
          description: wp.i18n.__(`SFS data imported. Remember to save the changes.`, `windpress`),
          color: `success`,
          icon: `i-lucide-upload`,
          duration: void 0,
          close: true,
          ui: {
            icon: void 0
          }
        }), n3.value = ``;
      } catch (e3) {
        r2.update(`file-import.doImport`, {
          title: wp.i18n.__(`Error`, `windpress`),
          description: e3 instanceof Error ? e3.message : wp.i18n.__(`An unknown error occurred`, `windpress`),
          color: `error`,
          icon: `i-lucide-upload`,
          close: true,
          duration: void 0,
          ui: {
            icon: void 0
          }
        }), n3.value = ``;
      }
    }
    async function u2() {
      let t3 = await i2.create(an, {
        destroyOnClose: true
      }).open().result;
      if (!t3) {
        r2.add({
          title: wp.i18n.__(`Canceled`, `windpress`),
          description: wp.i18n.__(`New file creation canceled`, `windpress`),
          color: `info`,
          icon: `i-lucide-plus`
        });
        return;
      }
      try {
        e2.addNewEntry(t3.filePath, t3.handler), r2.add({
          title: wp.i18n.__(`Success`, `windpress`),
          description: wp.i18n.sprintf(wp.i18n.__(`File "%s" created`, `windpress`), t3.filePath),
          color: `success`,
          icon: `i-lucide-plus`
        });
      } catch (e3) {
        r2.add({
          title: wp.i18n.__(`Error`, `windpress`),
          description: e3 instanceof Error ? e3.message : wp.i18n.__(`An unknown error occurred`, `windpress`),
          color: `error`,
          icon: `i-lucide-plus`
        });
      }
    }
    async function d2(t3) {
      let n3 = await i2.create(sn, {
        destroyOnClose: true,
        props: {
          filePath: t3.relative_path
        }
      }).open().result;
      if (!n3) {
        r2.add({
          title: wp.i18n.__(`Canceled`, `windpress`),
          description: wp.i18n.__(`File rename canceled`, `windpress`),
          color: `info`,
          icon: `i-lucide-edit`
        });
        return;
      }
      try {
        e2.renameEntry(t3, n3), r2.add({
          title: wp.i18n.__(`Success`, `windpress`),
          description: wp.i18n.sprintf(wp.i18n.__(`File "%s" renamed to "%s"`, `windpress`), t3.relative_path, n3),
          color: `success`,
          icon: `i-lucide-edit`
        });
      } catch (e3) {
        r2.add({
          title: wp.i18n.__(`Error`, `windpress`),
          description: e3 instanceof Error ? e3.message : wp.i18n.__(`An unknown error occurred`, `windpress`),
          color: `error`,
          icon: `i-lucide-edit`
        });
      }
    }
    return {
      deleteFile: a2,
      resetFile: o2,
      save: s2,
      exportVolume: c2,
      importVolume: l2,
      addNewFile: u2,
      renameFile: d2
    };
  };
})();
export {
  __tla,
  Pt as n,
  $ as r,
  cn as t
};
