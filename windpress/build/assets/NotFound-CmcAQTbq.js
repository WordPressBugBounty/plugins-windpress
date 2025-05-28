import { d as useRouter, a as _sfc_main$1 } from "./dashboard-DFjbSBbe.js";
import { m as defineComponent, _ as createElementBlock, Z as createBaseVNode, a2 as toDisplayString, j as createVNode, u as unref, a1 as openBlock } from "../chunks/runtime-core.esm-bundler-hRyeZ98I.min.js";
import "../chunks/preload-helper-BVFHbGtQ.min.js";
import "../chunks/index-CRz5lG2j.min.js";
import "../chunks/source-map-generator-DcyUj2ax.min.js";
import "../chunks/runtime-dom.esm-bundler-CDtJyD_r.min.js";
import "./worker-BNiBfqYd.js";
import "../chunks/index-BmWe5YW7.min.js";
import "../chunks/index-0ko3lTyl.min.js";
import "../chunks/index.browser-BBNxE1As.min.js";
import "../chunks/index-SE8wVPz0.min.js";
import "../chunks/isObject-DL0QMHX-.min.js";
import "../chunks/redaxios.module-Dyf46lvQ.min.js";
import "../chunks/index-EVinwGpQ.min.js";
import "../chunks/get-DXxw6yUY.min.js";
import "../chunks/_toKey-BRkTT7LT.min.js";
import "../chunks/chunk-HTB5LLOP-DSy4Fbcf.min.js";
import "../chunks/floating-ui.core-DVHbxLT3.min.js";
import "./virtualRef-B1iNroDN.js";
import "../chunks/set-3tkuNXe_.min.js";
import "../chunks/_initCloneObject-B2RCRi0h.min.js";
import "../chunks/package-CEcllWIE.min.js";
import "../chunks/fuse-Gm-adH5Q.min.js";
const _hoisted_1 = { class: "min-h-full w-full" };
const _hoisted_2 = { class: "h-full flex justify-center border border-b-0 border-(--ui-border-muted) relative p-4 z-[1]" };
const _hoisted_3 = { class: "h-full flex flex-col items-center justify-center text-center" };
const _hoisted_4 = { class: "mt-2 text-4xl sm:text-5xl font-bold text-(--ui-text-highlighted) text-balance" };
const _hoisted_5 = { class: "mt-4 text-lg text-(--ui-text-muted) text-balance" };
const _hoisted_6 = { class: "mt-8 flex items-center justify-center gap-6" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  setup(__props) {
    const router = useRouter();
    const homeLink = router.resolve({ name: "home" });
    return (_ctx, _cache) => {
      const _component_UButton = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _cache[0] || (_cache[0] = createBaseVNode("p", { class: "text-base font-semibold text-(--ui-primary)" }, " 404 ", -1)),
            createBaseVNode("h1", _hoisted_4, toDisplayString(_ctx.i18n.__("Page not found", "windpress")), 1),
            createBaseVNode("p", _hoisted_5, toDisplayString(_ctx.i18n.__("Sorry, we couldn\u2019t find the page you\u2019re looking for.", "windpress")), 1),
            createBaseVNode("div", _hoisted_6, [
              createVNode(_component_UButton, {
                to: unref(homeLink),
                size: "lg",
                color: "primary",
                variant: "solid",
                label: _ctx.i18n.__("Back to home", "windpress")
              }, null, 8, ["to", "label"])
            ])
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
