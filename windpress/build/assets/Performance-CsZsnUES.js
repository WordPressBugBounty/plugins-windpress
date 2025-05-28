import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$4 } from "../chunks/PageCard-ClQ5nvIh.min.js";
import { g as useToast, u as useSettingsStore, e as useBusyStore, j as _sfc_main$6, k as _sfc_main$7, c as _sfc_main$8, _ as _sfc_main$9, a as _sfc_main$a, l as generateCache } from "./dashboard-DFjbSBbe.js";
import { _ as _sfc_main$5 } from "../chunks/Separator-DL2CTyeG.min.js";
import { _ as _sfc_main$3 } from "../chunks/FormField-CM8zfsCf.min.js";
import { d as dayjs } from "../chunks/dayjs.min-Cq8rXz9i.min.js";
import { a as useApi } from "./worker-BNiBfqYd.js";
import { m as defineComponent, V as ref, a4 as onBeforeMount, X as createBlock, Y as withCtx, j as createVNode, u as unref, ak as createSlots, Z as createBaseVNode, $ as createCommentVNode, _ as createElementBlock, a2 as toDisplayString, a3 as createTextVNode, a1 as openBlock } from "../chunks/runtime-core.esm-bundler-hRyeZ98I.min.js";
import "../chunks/runtime-dom.esm-bundler-CDtJyD_r.min.js";
import "../chunks/index-SE8wVPz0.min.js";
import "../chunks/isObject-DL0QMHX-.min.js";
import "../chunks/preload-helper-BVFHbGtQ.min.js";
import "../chunks/index-CRz5lG2j.min.js";
import "../chunks/source-map-generator-DcyUj2ax.min.js";
import "../chunks/chunk-HTB5LLOP-DSy4Fbcf.min.js";
import "../chunks/floating-ui.core-DVHbxLT3.min.js";
import "./virtualRef-B1iNroDN.js";
import "../chunks/set-3tkuNXe_.min.js";
import "../chunks/_toKey-BRkTT7LT.min.js";
import "../chunks/get-DXxw6yUY.min.js";
import "../chunks/_initCloneObject-B2RCRi0h.min.js";
import "../chunks/package-CEcllWIE.min.js";
import "../chunks/fuse-Gm-adH5Q.min.js";
import "../chunks/index-BmWe5YW7.min.js";
import "../chunks/index-0ko3lTyl.min.js";
import "../chunks/index.browser-BBNxE1As.min.js";
import "../chunks/redaxios.module-Dyf46lvQ.min.js";
import "../chunks/index-EVinwGpQ.min.js";
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
    localeOptions = { minimumFractionDigits: options.minimumFractionDigits };
  }
  if (options.maximumFractionDigits !== void 0) {
    localeOptions = { maximumFractionDigits: options.maximumFractionDigits, ...localeOptions };
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
const _hoisted_1 = { class: "flex gap-2 items-center" };
const _hoisted_2 = { class: "flex gap-2 items-center" };
const _hoisted_3 = { class: "font-semibold" };
const _hoisted_4 = {
  key: 0,
  class: "flex gap-1"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
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
          }, null, 8, ["title"]),
          createVNode(_component_UPageCard, { variant: "subtle" }, {
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
                    ui: { label: "whitespace-nowrap" },
                    class: "flex-row-reverse gap-2"
                  }, null, 8, ["modelValue", "label"])
                ]),
                _: 1
              }, 8, ["label", "description"]),
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
                    ui: { label: "whitespace-nowrap" },
                    class: "flex-row-reverse gap-2"
                  }, null, 8, ["modelValue", "label"])
                ]),
                _: 1
              }, 8, ["label", "description"]),
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
                    ui: { label: "whitespace-nowrap" },
                    class: "flex-row-reverse gap-2"
                  }, null, 8, ["modelValue", "label"])
                ]),
                _: 1
              }, 8, ["label", "description"]),
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
                      }, 8, ["disabled", "loading"])
                    ]),
                    _: 1
                  }, 8, ["text"])
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
                              createVNode(_component_UIcon, { name: "lucide:external-link" })
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ])) : createCommentVNode("", true)
                      ]),
                      css_cache.value.file_size ? (openBlock(), createBlock(_component_UBadge, {
                        key: 0,
                        color: "success",
                        variant: "subtle"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(prettyBytes)(css_cache.value.file_size, { maximumFractionDigits: 2, space: true })), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["label"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
