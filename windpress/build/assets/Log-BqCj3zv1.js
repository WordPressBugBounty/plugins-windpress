import { _ as _sfc_main$1, b as _sfc_main$4, a as _sfc_main$5, __tla as __tla_0 } from "../chunks/DashboardSidebarCollapse-N6oWsqgQ.min.js";
import { _ as _sfc_main$2, __tla as __tla_1 } from "../chunks/Tooltip-CWu-A6cz.min.js";
import { z as _sfc_main$3, __tla as __tla_2 } from "./dashboard-BV7BosO9.js";
import { u as useLogStore, __tla as __tla_3 } from "./worker-B7IhHYfh.js";
import { d as dayjs } from "../chunks/dayjs.min-cRKnGEpx.min.js";
import { d as defineComponent, r as ref, j as watch, D as createBlock, G as withCtx, a5 as createBaseVNode, U as createElementBlock, O as createCommentVNode, u as unref, F as Fragment, V as renderList, N as createVNode, E as openBlock, a1 as toDisplayString, a0 as createTextVNode, n as nextTick } from "../chunks/runtime-core.esm-bundler-Lvl5fE5g.min.js";
import "../chunks/index-EGYp46NU.min.js";
import "../chunks/isObject-8EXUDN8T.min.js";
import "../chunks/runtime-dom.esm-bundler-C4OjapvR.min.js";
import "../chunks/preload-helper-BVFHbGtQ.min.js";
import "../chunks/index-BhcUEIkR.min.js";
import "../chunks/index-C1H1LqHQ.min.js";
import { __tla as __tla_4 } from "./cssesc-B11S6O1g.js";
import "../chunks/index-Dfa4cJMK.min.js";
import "../chunks/floating-ui.core-XFSvPU2w.min.js";
import "./virtualRef-Bpw7yQLf.js";
import "../chunks/set-CQpYICWN.min.js";
import "../chunks/_toKey-C72hUfwS.min.js";
import "../chunks/get-C5gQxxub.min.js";
import "../chunks/_initCloneObject-DnPaCxTN.min.js";
import { __tla as __tla_5 } from "./build-NIM0v7Ss.js";
import { __tla as __tla_6 } from "../chunks/index-DTKbWT1p.min.js";
import "../chunks/index-CvyxREt8.min.js";
import "./resolve-config-CRc6hA6o.js";
import "../chunks/fuse-Gm-adH5Q.min.js";
import "../chunks/index.browser-BBNxE1As.min.js";
import { __tla as __tla_7 } from "../chunks/index-ggmHCP0X.min.js";
import "./build-DXi0iG-9.js";
import "./pre-process-Q0cZU5CN.js";
import "../chunks/index-Z7Z9gSAB.min.js";
import "../chunks/index-DF05Pvpc.min.js";
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
  })()
]).then(async () => {
  const _hoisted_1 = {
    class: "whitespace-nowrap logs-container"
  };
  const _hoisted_2 = {
    class: "flex flex-col gap-4 sm:gap-6 lg:gap-12 mx-auto"
  };
  const _hoisted_3 = {
    key: 0,
    role: "group",
    class: "flex flex-col"
  };
  const _hoisted_4 = [
    "title"
  ];
  const _hoisted_5 = {
    class: "mr-4"
  };
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
  const _hoisted_11 = [
    "innerHTML"
  ];
  _sfc_main = defineComponent({
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
        const _component_UDashboardPanel = _sfc_main$1;
        return openBlock(), createBlock(_component_UDashboardPanel, {
          id: "logs",
          ui: {
            root: "min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]",
            body: "bg-(--ui-text) text-(--ui-bg) dark:text-(--ui-text) dark:bg-(--ui-bg)"
          }
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
                }, 8, [
                  "text"
                ])
              ]),
              _: 1
            }, 8, [
              "title"
            ])
          ]),
          body: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                unref(log).logs.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(log).logs, (history) => {
                    var _a;
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
                      ((_a = history.options) == null ? void 0 : _a.raw) ? (openBlock(), createElementBlock("span", {
                        key: 0,
                        innerHTML: history.message
                      }, null, 8, _hoisted_11)) : (openBlock(), createElementBlock(Fragment, {
                        key: 1
                      }, [
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
});
export {
  __tla,
  _sfc_main as default
};
