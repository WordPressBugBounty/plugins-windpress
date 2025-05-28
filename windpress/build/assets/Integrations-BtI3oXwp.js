import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$4 } from "../chunks/PageCard-ClQ5nvIh.min.js";
import { _ as _sfc_main$3 } from "../chunks/FormField-CM8zfsCf.min.js";
import { u as useSettingsStore } from "./dashboard-DFjbSBbe.js";
import { a as useApi } from "./worker-BNiBfqYd.js";
import { m as defineComponent, V as ref, a4 as onBeforeMount, X as createBlock, Y as withCtx, j as createVNode, _ as createElementBlock, a0 as renderList, F as Fragment, a1 as openBlock, u as unref } from "../chunks/runtime-core.esm-bundler-hRyeZ98I.min.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Integrations",
  setup(__props) {
    const settingsStore = useSettingsStore();
    const api = useApi();
    const providers = ref([]);
    async function pullProviders() {
      await api.get("admin/settings/cache/providers").then((resp) => {
        providers.value = resp.data.providers.sort((a, b) => a.id.localeCompare(b.id));
      });
    }
    onBeforeMount(() => {
      pullProviders();
    });
    return (_ctx, _cache) => {
      const _component_UPageCard = _sfc_main$2;
      const _component_USwitch = _sfc_main$4;
      const _component_UFormField = _sfc_main$3;
      const _component_UForm = _sfc_main$1;
      return openBlock(), createBlock(_component_UForm, {
        id: "integrations",
        state: {}
      }, {
        default: withCtx(() => [
          createVNode(_component_UPageCard, {
            title: _ctx.i18n.__("Integrations", "windpress"),
            description: _ctx.i18n.__("Enable or disable integrations with other services.", "windpress"),
            variant: "naked",
            class: "mb-4"
          }, null, 8, ["title", "description"]),
          createVNode(_component_UPageCard, {
            variant: "subtle",
            ui: { container: "divide-y divide-(--ui-border)" }
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(providers.value, (provider) => {
                return openBlock(), createBlock(_component_UFormField, {
                  key: provider.id,
                  name: provider.id,
                  label: provider.name,
                  description: provider.description,
                  class: "flex items-center justify-between not-last:pb-4 gap-4"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_USwitch, {
                      modelValue: unref(settingsStore).virtualOptions(`integration.${provider.id}.enabled`, true).value,
                      "onUpdate:modelValue": ($event) => unref(settingsStore).virtualOptions(`integration.${provider.id}.enabled`, true).value = $event,
                      label: `[${provider.id}]`,
                      ui: { label: "whitespace-nowrap text-(--ui-text-muted) font-normal" },
                      class: "flex-row-reverse gap-2"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                  ]),
                  _: 2
                }, 1032, ["name", "label", "description"]);
              }), 128))
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
