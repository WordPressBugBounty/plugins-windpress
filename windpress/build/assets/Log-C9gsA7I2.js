import { _ as _sfc_main$1, a as _sfc_main$4, b as _sfc_main$5 } from "../chunks/DashboardSidebarCollapse-tuKBWJ2n.min.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$6, c as _sfc_main$7 } from "./dashboard-DFjbSBbe.js";
import { u as useLogStore } from "./worker-BNiBfqYd.js";
import { d as dayjs } from "../chunks/dayjs.min-Cq8rXz9i.min.js";
import { m as defineComponent, V as ref, w as watch, X as createBlock, Y as withCtx, Z as createBaseVNode, _ as createElementBlock, $ as createCommentVNode, u as unref, F as Fragment, a0 as renderList, j as createVNode, a1 as openBlock, a2 as toDisplayString, a3 as createTextVNode, n as nextTick } from "../chunks/runtime-core.esm-bundler-hRyeZ98I.min.js";
import "../chunks/index-SE8wVPz0.min.js";
import "../chunks/isObject-DL0QMHX-.min.js";
import "../chunks/preload-helper-BVFHbGtQ.min.js";
import "../chunks/index-CRz5lG2j.min.js";
import "../chunks/source-map-generator-DcyUj2ax.min.js";
import "../chunks/runtime-dom.esm-bundler-CDtJyD_r.min.js";
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
const _hoisted_1 = { class: "whitespace-nowrap logs-container" };
const _hoisted_2 = { class: "flex flex-col gap-4 sm:gap-6 lg:gap-12 mx-auto" };
const _hoisted_3 = {
  key: 0,
  role: "group",
  class: "flex flex-col"
};
const _hoisted_4 = ["title"];
const _hoisted_5 = { class: "mr-4" };
const _hoisted_6 = {
  key: 0,
  class: "text-(--ui-error)"
};
const _hoisted_7 = {
  key: 1,
  class: "text-(--ui-warning)"
};
const _hoisted_8 = {
  key: 2,
  class: "text-(--ui-info)"
};
const _hoisted_9 = {
  key: 3,
  class: "text-(--ui-success)"
};
const _hoisted_10 = {
  key: 4,
  class: ""
};
const _hoisted_11 = ["innerHTML"];
const _hoisted_12 = { class: "p-6 max-w-[800px] max-h-[400px] overflow-auto" };
const _hoisted_13 = { class: "gap-2 flex flex-wrap" };
const _hoisted_14 = { class: "" };
const _hoisted_15 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Log",
  setup(__props) {
    const log = useLogStore();
    const logHistoryPanel = ref(null);
    watch(log.logs, () => {
      if (!logHistoryPanel.value) {
        const logsContainer = document.querySelector(".logs-container");
        if (logsContainer) {
          logHistoryPanel.value = logsContainer.parentElement;
        } else {
          return;
        }
      }
      let isScrolledToBottom = logHistoryPanel.value && logHistoryPanel.value.scrollHeight - logHistoryPanel.value.clientHeight <= logHistoryPanel.value.scrollTop + 1;
      nextTick(() => {
        if (isScrolledToBottom) {
          if (logHistoryPanel.value) {
            logHistoryPanel.value.scrollTop = logHistoryPanel.value.scrollHeight - logHistoryPanel.value.clientHeight;
          }
        }
      });
    });
    return (_ctx, _cache) => {
      const _component_UDashboardSidebarCollapse = _sfc_main$4;
      const _component_UButton = _sfc_main$3;
      const _component_UTooltip = _sfc_main$2;
      const _component_UDashboardNavbar = _sfc_main$5;
      const _component_UBadge = _sfc_main$7;
      const _component_UPopover = _sfc_main$6;
      const _component_UDashboardPanel = _sfc_main$1;
      return openBlock(), createBlock(_component_UDashboardPanel, {
        id: "logs",
        ui: { root: "min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]", body: "bg-(--ui-text) text-(--ui-bg) dark:text-(--ui-text) dark:bg-(--ui-bg)" }
      }, {
        header: withCtx(() => [
          createVNode(_component_UDashboardNavbar, {
            title: _ctx.i18n.__("Logs", "windpress")
          }, {
            leading: withCtx(() => [
              createVNode(_component_UDashboardSidebarCollapse)
            ]),
            right: withCtx(() => [
              createVNode(_component_UTooltip, {
                text: _ctx.i18n.__("Clear logs", "windpress")
              }, {
                default: withCtx(() => [
                  createVNode(_component_UButton, {
                    icon: "lucide:paintbrush",
                    color: "neutral",
                    variant: "ghost",
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(log).clear())
                  })
                ]),
                _: 1
              }, 8, ["text"])
            ]),
            _: 1
          }, 8, ["title"])
        ]),
        body: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              unref(log).logs.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(log).logs, (history) => {
                  var _a, _b, _c;
                  return openBlock(), createElementBlock("div", {
                    key: history.id,
                    class: "font-mono"
                  }, [
                    createBaseVNode("span", {
                      title: history.id,
                      class: "text-(--ui-bg)/50 dark:text-(--ui-text)/50"
                    }, "[" + toDisplayString(unref(dayjs)(history.timestamp).format("HH:mm:ss.SSS")) + "]", 9, _hoisted_4),
                    createBaseVNode("span", _hoisted_5, [
                      history.type === "error" ? (openBlock(), createElementBlock("span", _hoisted_6, "[ERROR]")) : history.type === "warning" ? (openBlock(), createElementBlock("span", _hoisted_7, "[WARNING]")) : history.type === "info" ? (openBlock(), createElementBlock("span", _hoisted_8, "[INFO]")) : history.type === "success" ? (openBlock(), createElementBlock("span", _hoisted_9, "[SUCCESS]")) : history.type === "debug" ? (openBlock(), createElementBlock("span", _hoisted_10, "[DEBUG]")) : createCommentVNode("", true)
                    ]),
                    ((_a = history.options) == null ? void 0 : _a.raw) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      ((_b = history.options) == null ? void 0 : _b.candidates) && ((_c = history.options) == null ? void 0 : _c.candidates.length) > 0 ? (openBlock(), createBlock(_component_UPopover, {
                        key: 0,
                        mode: "hover"
                      }, {
                        content: withCtx(() => {
                          var _a2;
                          return [
                            createBaseVNode("div", _hoisted_12, [
                              createBaseVNode("div", _hoisted_13, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList((_a2 = history.options) == null ? void 0 : _a2.candidates, (candidate) => {
                                  return openBlock(), createElementBlock("div", _hoisted_14, [
                                    createVNode(_component_UBadge, {
                                      color: "neutral",
                                      variant: "outline"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(candidate), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]);
                                }), 256))
                              ])
                            ])
                          ];
                        }),
                        default: withCtx(() => [
                          createBaseVNode("span", {
                            innerHTML: history.message
                          }, null, 8, _hoisted_11)
                        ]),
                        _: 2
                      }, 1024)) : (openBlock(), createElementBlock("span", {
                        key: 1,
                        innerHTML: history.message
                      }, null, 8, _hoisted_15))
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(history.message), 1)
                    ], 64))
                  ]);
                }), 128))
              ])) : createCommentVNode("", true)
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
