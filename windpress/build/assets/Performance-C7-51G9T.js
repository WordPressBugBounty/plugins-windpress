import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$4, __tla as __tla_0 } from "../chunks/PageCard-DtXttDk4.min.js";
import { T as useToast, K as useSettingsStore, p as useBusyStore, F as _sfc_main$6, v as _sfc_main$7, O as _sfc_main$8, L as _sfc_main$9, N as _sfc_main$a, a7 as generateCache, __tla as __tla_1 } from "./dashboard-DWpnNbvC.js";
import { _ as _sfc_main$5, __tla as __tla_2 } from "../chunks/Separator-DcsJgf9L.min.js";
import { _ as _sfc_main$3, __tla as __tla_3 } from "../chunks/FormField-DUOYno_i.min.js";
import { d as dayjs } from "../chunks/dayjs.min-BMFJOwvH.min.js";
import { a as useApi, __tla as __tla_4 } from "./worker-Bam-hQuc.js";
import { d as defineComponent, r as ref, a0 as onBeforeMount, D as createBlock, G as withCtx, N as createVNode, u as unref, aa as createSlots, a7 as createBaseVNode, O as createCommentVNode, U as createElementBlock, a3 as toDisplayString, a2 as createTextVNode, E as openBlock } from "../chunks/runtime-core.esm-bundler-B3Nza2bI.min.js";
import "../chunks/runtime-dom.esm-bundler-MZPCDE9A.min.js";
import "../chunks/index-BhzJUfF8.min.js";
import "../chunks/isObject-8EXUDN8T.min.js";
import "../chunks/preload-helper-BVFHbGtQ.min.js";
import "../chunks/index-BhcUEIkR.min.js";
import "../chunks/index-D-_5JoM7.min.js";
import { __tla as __tla_5 } from "./cssesc-DkbcYlXT.js";
import "../chunks/index-Dfa4cJMK.min.js";
import "../chunks/floating-ui.core-CE8FN91a.min.js";
import "./virtualRef-BJdFt_DC.js";
import "../chunks/set-CQpYICWN.min.js";
import "../chunks/_toKey-C72hUfwS.min.js";
import "../chunks/get-C5gQxxub.min.js";
import "../chunks/_initCloneObject-DnPaCxTN.min.js";
import { __tla as __tla_6 } from "./build-DlKo8pDN.js";
import { __tla as __tla_7 } from "../chunks/index-BKnPtYW1.min.js";
import "../chunks/index-CvyxREt8.min.js";
import "./resolve-config-CDvWJYyX.js";
import "../chunks/fuse-Gm-adH5Q.min.js";
import "../chunks/index.browser-BBNxE1As.min.js";
import { __tla as __tla_8 } from "../chunks/index-Bl9ik6kS.min.js";
import "./build-C987KgkU.js";
import "./pre-process-QQBu2FRt.js";
import "../chunks/index-DP3Svjvz.min.js";
import "../chunks/index-Ca_nMnsa.min.js";
let _sfc_main;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_8;
    } catch {
    }
  })()
]).then(async () => {
  const BYTE_UNITS = [
    "B",
    "kB",
    "MB",
    "GB",
    "TB",
    "PB",
    "EB",
    "ZB",
    "YB"
  ];
  const BIBYTE_UNITS = [
    "B",
    "KiB",
    "MiB",
    "GiB",
    "TiB",
    "PiB",
    "EiB",
    "ZiB",
    "YiB"
  ];
  const BIT_UNITS = [
    "b",
    "kbit",
    "Mbit",
    "Gbit",
    "Tbit",
    "Pbit",
    "Ebit",
    "Zbit",
    "Ybit"
  ];
  const BIBIT_UNITS = [
    "b",
    "kibit",
    "Mibit",
    "Gibit",
    "Tibit",
    "Pibit",
    "Eibit",
    "Zibit",
    "Yibit"
  ];
  const toLocaleString = (number, locale, options) => {
    let result = number;
    if (typeof locale === "string" || Array.isArray(locale)) {
      result = number.toLocaleString(locale, options);
    } else if (locale === true || options !== void 0) {
      result = number.toLocaleString(void 0, options);
    }
    return result;
  };
  const log10 = (numberOrBigInt) => {
    if (typeof numberOrBigInt === "number") {
      return Math.log10(numberOrBigInt);
    }
    const string = numberOrBigInt.toString(10);
    return string.length + Math.log10("0." + string.slice(0, 15));
  };
  const log = (numberOrBigInt) => {
    if (typeof numberOrBigInt === "number") {
      return Math.log(numberOrBigInt);
    }
    return log10(numberOrBigInt) * Math.log(10);
  };
  const divide = (numberOrBigInt, divisor) => {
    if (typeof numberOrBigInt === "number") {
      return numberOrBigInt / divisor;
    }
    const integerPart = numberOrBigInt / BigInt(divisor);
    const remainder = numberOrBigInt % BigInt(divisor);
    return Number(integerPart) + Number(remainder) / divisor;
  };
  function prettyBytes(number, options) {
    if (typeof number !== "bigint" && !Number.isFinite(number)) {
      throw new TypeError(`Expected a finite number, got ${typeof number}: ${number}`);
    }
    options = {
      bits: false,
      binary: false,
      space: true,
      ...options
    };
    const UNITS = options.bits ? options.binary ? BIBIT_UNITS : BIT_UNITS : options.binary ? BIBYTE_UNITS : BYTE_UNITS;
    const separator = options.space ? " " : "";
    if (options.signed && (typeof number === "number" ? number === 0 : number === 0n)) {
      return ` 0${separator}${UNITS[0]}`;
    }
    const isNegative = number < 0;
    const prefix = isNegative ? "-" : options.signed ? "+" : "";
    if (isNegative) {
      number = -number;
    }
    let localeOptions;
    if (options.minimumFractionDigits !== void 0) {
      localeOptions = {
        minimumFractionDigits: options.minimumFractionDigits
      };
    }
    if (options.maximumFractionDigits !== void 0) {
      localeOptions = {
        maximumFractionDigits: options.maximumFractionDigits,
        ...localeOptions
      };
    }
    if (number < 1) {
      const numberString2 = toLocaleString(number, options.locale, localeOptions);
      return prefix + numberString2 + separator + UNITS[0];
    }
    const exponent = Math.min(Math.floor(options.binary ? log(number) / Math.log(1024) : log10(number) / 3), UNITS.length - 1);
    number = divide(number, (options.binary ? 1024 : 1e3) ** exponent);
    if (!localeOptions) {
      number = number.toPrecision(3);
    }
    const numberString = toLocaleString(Number(number), options.locale, localeOptions);
    const unit = UNITS[exponent];
    return prefix + numberString + separator + unit;
  }
  const _hoisted_1 = {
    class: "flex gap-2 items-center"
  };
  const _hoisted_2 = {
    class: "flex gap-2 items-center"
  };
  const _hoisted_3 = {
    class: "font-semibold"
  };
  const _hoisted_4 = {
    key: 0,
    class: "flex gap-1"
  };
  _sfc_main = defineComponent({
    __name: "Performance",
    setup(__props) {
      const api = useApi();
      useToast();
      const settingsStore = useSettingsStore();
      const busyStore = useBusyStore();
      const css_cache = ref({
        last_generated: null,
        last_full_build: null,
        file_url: null,
        file_size: null
      });
      function pullCacheInfo() {
        api.get("admin/settings/cache/index").then((resp) => {
          css_cache.value = resp.data.cache;
        });
      }
      async function doGenerateCache() {
        generateCache((res) => {
          pullCacheInfo();
        });
      }
      onBeforeMount(() => {
        pullCacheInfo();
      });
      return (_ctx, _cache) => {
        const _component_UPageCard = _sfc_main$2;
        const _component_USwitch = _sfc_main$4;
        const _component_UFormField = _sfc_main$3;
        const _component_USeparator = _sfc_main$5;
        const _component_UIcon = _sfc_main$7;
        const _component_ULink = _sfc_main$6;
        const _component_UBadge = _sfc_main$8;
        const _component_UButton = _sfc_main$a;
        const _component_UTooltip = _sfc_main$9;
        const _component_UForm = _sfc_main$1;
        return openBlock(), createBlock(_component_UForm, {
          id: "performance",
          state: {}
        }, {
          default: withCtx(() => [
            createVNode(_component_UPageCard, {
              title: _ctx.i18n.__("Performance", "windpress"),
              variant: "naked",
              orientation: "horizontal",
              class: "mb-4"
            }, null, 8, [
              "title"
            ]),
            createVNode(_component_UPageCard, {
              variant: "subtle"
            }, {
              default: withCtx(() => [
                createVNode(_component_UFormField, {
                  label: _ctx.i18n.__("Use cached CSS", "windpress"),
                  description: _ctx.i18n.__("Serve the cached CSS file when available instead of generating the style dynamically using the Compiler.", "windpress"),
                  class: "flex items-center justify-between gap-4"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_USwitch, {
                      modelValue: unref(settingsStore).virtualOptions("performance.cache.enabled", false).value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(settingsStore).virtualOptions("performance.cache.enabled", false).value = $event),
                      label: _ctx.i18n.__("Enable Cached CSS", "windpress"),
                      ui: {
                        label: "whitespace-nowrap"
                      },
                      class: "flex-row-reverse gap-2"
                    }, null, 8, [
                      "modelValue",
                      "label"
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "label",
                  "description"
                ]),
                createVNode(_component_USeparator),
                createVNode(_component_UFormField, {
                  label: _ctx.i18n.__("Admin always uses Compiler", "windpress"),
                  description: _ctx.i18n.__("Exclude the Admin from the cached CSS to ensure they always use the Compiler.", "windpress"),
                  class: "flex items-center justify-between gap-4"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_USwitch, {
                      modelValue: unref(settingsStore).virtualOptions("performance.cache.exclude_admin", false).value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(settingsStore).virtualOptions("performance.cache.exclude_admin", false).value = $event),
                      label: _ctx.i18n.__("Exclude Admin", "windpress"),
                      ui: {
                        label: "whitespace-nowrap"
                      },
                      class: "flex-row-reverse gap-2"
                    }, null, 8, [
                      "modelValue",
                      "label"
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "label",
                  "description"
                ]),
                createVNode(_component_USeparator),
                createVNode(_component_UFormField, {
                  label: _ctx.i18n.__("Cached CSS loading method", "windpress"),
                  description: _ctx.i18n.__("Load cached CSS as an inline instead of an external file.", "windpress"),
                  class: "flex items-center justify-between gap-4"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_USwitch, {
                      modelValue: unref(settingsStore).virtualOptions("performance.cache.inline_load", false).value,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(settingsStore).virtualOptions("performance.cache.inline_load", false).value = $event),
                      label: _ctx.i18n.__("Inline Cached CSS", "windpress"),
                      ui: {
                        label: "whitespace-nowrap"
                      },
                      class: "flex-row-reverse gap-2"
                    }, null, 8, [
                      "modelValue",
                      "label"
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "label",
                  "description"
                ]),
                createVNode(_component_USeparator),
                createVNode(_component_UFormField, {
                  label: _ctx.i18n.__("Generate the cached CSS", "windpress"),
                  class: "flex items-center justify-between gap-4"
                }, createSlots({
                  default: withCtx(() => [
                    createVNode(_component_UTooltip, {
                      "delay-duration": 0,
                      text: _ctx.i18n.__("Generate the cached CSS file", "windpress")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UButton, {
                          color: "primary",
                          variant: "subtle",
                          onClick: doGenerateCache,
                          disabled: unref(busyStore).isBusy,
                          loading: unref(busyStore).isBusy && unref(busyStore).hasTask("settings.performance.cached_css.generate")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(busyStore).isBusy && unref(busyStore).hasTask("settings.performance.cached_css.generate") ? _ctx.i18n.__("Generating...", "windpress") : _ctx.i18n.__("Generate", "windpress")), 1)
                          ]),
                          _: 1
                        }, 8, [
                          "disabled",
                          "loading"
                        ])
                      ]),
                      _: 1
                    }, 8, [
                      "text"
                    ])
                  ]),
                  _: 2
                }, [
                  css_cache.value.last_generated ? {
                    name: "description",
                    fn: withCtx(() => [
                      createBaseVNode("div", _hoisted_1, [
                        createBaseVNode("div", _hoisted_2, [
                          createBaseVNode("span", _hoisted_3, toDisplayString(_ctx.i18n.__("Last Generated", "windpress")) + ": ", 1),
                          css_cache.value.file_size ? (openBlock(), createElementBlock("span", _hoisted_4, [
                            createTextVNode(toDisplayString(unref(dayjs)(css_cache.value.last_generated * 1e3).format("YYYY-MM-DD HH:mm:ss")) + " ", 1),
                            createVNode(_component_ULink, {
                              to: css_cache.value.file_url,
                              target: "_blank",
                              class: "underline"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UIcon, {
                                  name: "lucide:external-link"
                                })
                              ]),
                              _: 1
                            }, 8, [
                              "to"
                            ])
                          ])) : createCommentVNode("", true)
                        ]),
                        css_cache.value.file_size ? (openBlock(), createBlock(_component_UBadge, {
                          key: 0,
                          color: "success",
                          variant: "subtle"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(prettyBytes)(css_cache.value.file_size, {
                              maximumFractionDigits: 2,
                              space: true
                            })), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, [
                  "label"
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        });
      };
    }
  });
});
export {
  __tla,
  _sfc_main as default
};
