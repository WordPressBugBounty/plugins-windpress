import { _ as _sfc_main$2, b as _sfc_main$3, a as _sfc_main$4, __tla as __tla_0 } from "../chunks/DashboardSidebarCollapse-juViNcQk.min.js";
import { Y as tv, s as useAppConfig, P as Primitive, T as useToast, K as useSettingsStore, p as useBusyStore, Z as useRouter, $ as _sfc_main$5, __tla as __tla_1 } from "./dashboard-DWpnNbvC.js";
import { f as computed, D as createBlock, E as openBlock, G as withCtx, H as renderSlot, a7 as createBaseVNode, a6 as normalizeClass, u as unref, d as defineComponent, N as createVNode, ad as resolveComponent } from "../chunks/runtime-core.esm-bundler-B3Nza2bI.min.js";
import "../chunks/index-BhzJUfF8.min.js";
import "../chunks/isObject-8EXUDN8T.min.js";
import "../chunks/preload-helper-BVFHbGtQ.min.js";
import "../chunks/index-BhcUEIkR.min.js";
import "../chunks/runtime-dom.esm-bundler-MZPCDE9A.min.js";
import { __tla as __tla_2 } from "./worker-Bam-hQuc.js";
import { __tla as __tla_3 } from "./cssesc-DkbcYlXT.js";
import "../chunks/index-Dfa4cJMK.min.js";
import "../chunks/index.browser-BBNxE1As.min.js";
import { __tla as __tla_4 } from "../chunks/index-Bl9ik6kS.min.js";
import "./build-C987KgkU.js";
import "../chunks/index-D-_5JoM7.min.js";
import { __tla as __tla_5 } from "../chunks/index-BKnPtYW1.min.js";
import "./pre-process-QQBu2FRt.js";
import "../chunks/index-DP3Svjvz.min.js";
import "../chunks/index-CvyxREt8.min.js";
import { __tla as __tla_6 } from "./build-DlKo8pDN.js";
import "./resolve-config-CDvWJYyX.js";
import "../chunks/index-Ca_nMnsa.min.js";
import "../chunks/get-C5gQxxub.min.js";
import "../chunks/_toKey-C72hUfwS.min.js";
import "../chunks/floating-ui.core-CE8FN91a.min.js";
import "./virtualRef-BJdFt_DC.js";
import "../chunks/set-CQpYICWN.min.js";
import "../chunks/_initCloneObject-DnPaCxTN.min.js";
import "../chunks/fuse-Gm-adH5Q.min.js";
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
  })()
]).then(async () => {
  const theme = {
    "slots": {
      "root": "shrink-0 flex items-center justify-between border-b border-default px-4 sm:px-6 gap-1.5 overflow-x-auto min-h-[49px]",
      "left": "flex items-center gap-1.5",
      "right": "flex items-center gap-1.5"
    }
  };
  const _sfc_main$1 = {
    __name: "DashboardToolbar",
    props: {
      as: {
        type: null,
        required: false
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: null,
        required: false
      }
    },
    setup(__props) {
      const props = __props;
      const appConfig = useAppConfig();
      const ui = computed(() => {
        var _a;
        return tv({
          extend: tv(theme),
          ...((_a = appConfig.uiPro) == null ? void 0 : _a.dashboardToolbar) || {}
        })();
      });
      return (_ctx, _cache) => {
        var _a;
        return openBlock(), createBlock(unref(Primitive), {
          as: __props.as,
          class: normalizeClass(ui.value.root({
            class: [
              (_a = props.ui) == null ? void 0 : _a.root,
              props.class
            ]
          }))
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, () => {
              var _a2, _b;
              return [
                createBaseVNode("div", {
                  class: normalizeClass(ui.value.left({
                    class: [
                      (_a2 = props.ui) == null ? void 0 : _a2.left
                    ]
                  }))
                }, [
                  renderSlot(_ctx.$slots, "left")
                ], 2),
                createBaseVNode("div", {
                  class: normalizeClass(ui.value.right({
                    class: [
                      (_b = props.ui) == null ? void 0 : _b.right
                    ]
                  }))
                }, [
                  renderSlot(_ctx.$slots, "right")
                ], 2)
              ];
            })
          ]),
          _: 3
        }, 8, [
          "as",
          "class"
        ]);
      };
    }
  };
  const _hoisted_1 = {
    class: "flex flex-col gap-4 sm:gap-6 lg:gap-12 w-full lg:max-w-2xl mx-auto"
  };
  _sfc_main = defineComponent({
    __name: "Settings",
    setup(__props) {
      const router = useRouter();
      const toast = useToast();
      const settingsStore = useSettingsStore();
      const busyStore = useBusyStore();
      async function saveSetting() {
        const toastData = {
          title: wp.i18n.__("Saving...", "windpress"),
          description: wp.i18n.__("Please wait while we save your changes.", "windpress"),
          duration: 0,
          icon: "lucide:loader-circle",
          close: false,
          color: "neutral",
          ui: {
            icon: "animate-spin"
          }
        };
        if (toast.toasts.value.find((t) => t.id === "settings.doSave")) {
          toast.update("settings.doSave", {
            ...toastData
          });
        } else {
          toast.add({
            id: "settings.doSave",
            ...toastData
          });
        }
        return settingsStore.doPush().then(() => {
          toast.update("settings.doSave", {
            title: wp.i18n.__("Saved", "windpress"),
            description: wp.i18n.__("Your changes have been saved.", "windpress"),
            icon: "i-lucide-save",
            color: "success",
            duration: void 0,
            close: true,
            ui: {
              icon: void 0
            }
          });
        }).catch((err) => {
          toast.update("settings.doSave", {
            title: wp.i18n.__("Error", "windpress"),
            description: wp.i18n.__("An error occurred while saving your changes.", "windpress"),
            icon: "i-lucide-save",
            color: "error",
            duration: void 0,
            close: true,
            ui: {
              icon: void 0
            }
          });
        }).finally(() => {
        });
      }
      const links = [
        [
          {
            label: wp.i18n.__("General", "windpress"),
            to: router.resolve({
              name: "settings.general"
            }),
            icon: "lucide:settings",
            exact: true
          },
          {
            label: wp.i18n.__("Performance", "windpress"),
            to: router.resolve({
              name: "settings.performance"
            }),
            icon: "lucide:rocket",
            exact: true
          },
          {
            label: wp.i18n.__("Integrations", "windpress"),
            to: router.resolve({
              name: "settings.integrations"
            }),
            icon: "lucide:package",
            exact: true
          }
        ],
        [
          {
            label: wp.i18n.__("Save", "windpress"),
            icon: "lucide:save",
            color: "primary",
            onSelect: saveSetting,
            disabled: busyStore.isBusy
          }
        ]
      ];
      return (_ctx, _cache) => {
        const _component_UDashboardSidebarCollapse = _sfc_main$3;
        const _component_UDashboardNavbar = _sfc_main$4;
        const _component_UNavigationMenu = _sfc_main$5;
        const _component_UDashboardToolbar = _sfc_main$1;
        const _component_RouterView = resolveComponent("RouterView");
        const _component_UDashboardPanel = _sfc_main$2;
        return openBlock(), createBlock(_component_UDashboardPanel, {
          id: "settings",
          ui: {
            body: "lg:py-12"
          }
        }, {
          header: withCtx(() => [
            createVNode(_component_UDashboardNavbar, {
              title: _ctx.i18n.__("Settings", "windpress")
            }, {
              leading: withCtx(() => [
                createVNode(_component_UDashboardSidebarCollapse)
              ]),
              _: 1
            }, 8, [
              "title"
            ]),
            createVNode(_component_UDashboardToolbar, null, {
              default: withCtx(() => [
                createVNode(_component_UNavigationMenu, {
                  items: links,
                  highlight: "",
                  class: "-mx-1 flex-1"
                })
              ]),
              _: 1
            })
          ]),
          body: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createVNode(_component_RouterView)
            ])
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
