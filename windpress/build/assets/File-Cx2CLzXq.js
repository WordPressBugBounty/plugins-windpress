import { i as injectRovingFocusGroupContext, u as useId, a as useCollection, P as Primitive, g as getFocusIntent, w as wrapArray, f as focusFirst, b as findValuesBetween, c as createContext, d as useTypeahead, e as useDirection, h as useVModel, j as createEventHook, _ as _sfc_main$d, M as MAP_KEY_TO_FOCUS_INTENT, k as getActiveElement, m as handleAndDispatchCustomEvent, n as getAllKeys, o as getTag, p as useBusyStore, q as cloneDeep, r as useForwardPropsEmits, t as tv, s as useAppConfig, v as _sfc_main$e, x as get, y as useLocale, z as usePortal, A as omit, B as isArrayOfArray, C as _sfc_main$f, D as _sfc_main$g, E as ContextMenu, F as _sfc_main$h, G as pickLinkProps, H as _sfc_main$i, I as _sfc_main$j, J as _sfc_main$k, K as useSettingsStore, L as _sfc_main$m, N as _sfc_main$n, O as _sfc_main$o, Q as _sfc_main$q, R as _sfc_main$s, S as useOverlay, T as useToast, U as _sfc_main$t, __tla as __tla_0 } from "./dashboard-DWpnNbvC.js";
import { _ as _sfc_main$l, a as _sfc_main$p, b as _sfc_main$u, __tla as __tla_1 } from "../chunks/DashboardSidebarCollapse-juViNcQk.min.js";
import { r as reactivePick, h as createReusableTemplate, f as reactiveOmit, d as useColorMode, i as computedAsync, j as useBreakpoints, k as breakpointsTailwind } from "../chunks/index-BhzJUfF8.min.js";
import { d as defineStore, a as useApi, w, __tla as __tla_2 } from "./worker-Bam-hQuc.js";
import { U as Uint8Array$1, f as isBuffer, S as Stack, j as isTypedArray } from "../chunks/_initCloneObject-DnPaCxTN.min.js";
import { a as MapCache, e as eq, i as isArray } from "../chunks/_toKey-C72hUfwS.min.js";
import { S as Symbol$1, i as isObjectLike } from "../chunks/isObject-8EXUDN8T.min.js";
import { d as defineComponent, f as computed, m as onMounted, x as onUnmounted, D as createBlock, E as openBlock, G as withCtx, N as createVNode, u as unref, H as renderSlot, n as nextTick, r as ref, L as toRefs, A as mergeProps, l as reactive, a4 as useSlots, U as createElementBlock, F as Fragment, V as renderList, a6 as normalizeClass, a7 as createBaseVNode, O as createCommentVNode, a2 as createTextVNode, a3 as toDisplayString, q as toRef, a1 as resolveDynamicComponent, aa as createSlots, _ as normalizeProps, $ as guardReactiveProps, j as watch, s as shallowRef, ad as resolveComponent, ac as Suspense } from "../chunks/runtime-core.esm-bundler-B3Nza2bI.min.js";
import { w as withKeys, a as withModifiers } from "../chunks/runtime-dom.esm-bundler-MZPCDE9A.min.js";
import { c as path, __tla as __tla_3 } from "./cssesc-DkbcYlXT.js";
import "../chunks/index-D-_5JoM7.min.js";
import { __tla as __tla_4 } from "../chunks/index-Bl9ik6kS.min.js";
import { d as getVariableList, n as naturalExpand } from "./intellisense-DQDOfCvw.js";
import { l as loadDesignSystem } from "./design-system-maAqXts2.js";
import { n as nanoid } from "../chunks/index.browser-BBNxE1As.min.js";
import { d as dayjs } from "../chunks/dayjs.min-BMFJOwvH.min.js";
import { _ as __vitePreload } from "../chunks/preload-helper-BVFHbGtQ.min.js";
import { c as createHighlighterCore, a as createOnigurumaEngine } from "../chunks/index-C1eb-OTL.min.js";
import { _ as _sfc_main$r, __tla as __tla_5 } from "../chunks/FormField-DUOYno_i.min.js";
import "../chunks/index-BhcUEIkR.min.js";
import "../chunks/floating-ui.core-CE8FN91a.min.js";
import "./virtualRef-BJdFt_DC.js";
import "../chunks/set-CQpYICWN.min.js";
import "../chunks/get-C5gQxxub.min.js";
import { __tla as __tla_6 } from "./build-DlKo8pDN.js";
import { __tla as __tla_7 } from "../chunks/index-BKnPtYW1.min.js";
import "../chunks/index-Dfa4cJMK.min.js";
import "../chunks/index-CvyxREt8.min.js";
import "./resolve-config-CDvWJYyX.js";
import "../chunks/fuse-Gm-adH5Q.min.js";
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
  })()
]).then(async () => {
  const _sfc_main$c = defineComponent({
    __name: "RovingFocusItem",
    props: {
      tabStopId: {},
      focusable: {
        type: Boolean,
        default: true
      },
      active: {
        type: Boolean
      },
      allowShiftKey: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {
        default: "span"
      }
    },
    setup(__props) {
      const props = __props;
      const context = injectRovingFocusGroupContext();
      const randomId = useId();
      const id = computed(() => props.tabStopId || randomId);
      const isCurrentTabStop = computed(() => context.currentTabStopId.value === id.value);
      const { getItems, CollectionItem } = useCollection();
      onMounted(() => {
        if (props.focusable) context.onFocusableItemAdd();
      });
      onUnmounted(() => {
        if (props.focusable) context.onFocusableItemRemove();
      });
      function handleKeydown(event) {
        if (event.key === "Tab" && event.shiftKey) {
          context.onItemShiftTab();
          return;
        }
        if (event.target !== event.currentTarget) return;
        const focusIntent = getFocusIntent(event, context.orientation.value, context.dir.value);
        if (focusIntent !== void 0) {
          if (event.metaKey || event.ctrlKey || event.altKey || (props.allowShiftKey ? false : event.shiftKey)) return;
          event.preventDefault();
          let candidateNodes = [
            ...getItems().map((i) => i.ref).filter((i) => i.dataset.disabled !== "")
          ];
          if (focusIntent === "last") {
            candidateNodes.reverse();
          } else if (focusIntent === "prev" || focusIntent === "next") {
            if (focusIntent === "prev") candidateNodes.reverse();
            const currentIndex = candidateNodes.indexOf(event.currentTarget);
            candidateNodes = context.loop.value ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
          }
          nextTick(() => focusFirst(candidateNodes));
        }
      }
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(CollectionItem), null, {
          default: withCtx(() => [
            createVNode(unref(Primitive), {
              tabindex: isCurrentTabStop.value ? 0 : -1,
              "data-orientation": unref(context).orientation.value,
              "data-active": _ctx.active ? "" : void 0,
              "data-disabled": !_ctx.focusable ? "" : void 0,
              as: _ctx.as,
              "as-child": _ctx.asChild,
              onMousedown: _cache[0] || (_cache[0] = (event) => {
                if (!_ctx.focusable) event.preventDefault();
                else unref(context).onItemFocus(id.value);
              }),
              onFocus: _cache[1] || (_cache[1] = ($event) => unref(context).onItemFocus(id.value)),
              onKeydown: handleKeydown
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, [
              "tabindex",
              "data-orientation",
              "data-active",
              "data-disabled",
              "as",
              "as-child"
            ])
          ]),
          _: 3
        });
      };
    }
  });
  function flatten(items) {
    return items.reduce((acc, item) => {
      acc.push(item);
      if (item.children) acc.push(...flatten(item.children));
      return acc;
    }, []);
  }
  function useSelectionBehavior(modelValue, props) {
    const firstValue = ref();
    const onSelectItem = (val, condition) => {
      if (props.multiple && Array.isArray(modelValue.value)) {
        if (props.selectionBehavior === "replace") {
          modelValue.value = [
            val
          ];
          firstValue.value = val;
        } else {
          const index = modelValue.value.findIndex((v) => condition(v));
          if (index !== -1) modelValue.value = modelValue.value.filter((_, i) => i !== index);
          else modelValue.value = [
            ...modelValue.value,
            val
          ];
        }
      } else {
        if (props.selectionBehavior === "replace") {
          modelValue.value = {
            ...val
          };
        } else {
          if (!Array.isArray(modelValue.value) && condition(modelValue.value)) modelValue.value = void 0;
          else modelValue.value = {
            ...val
          };
        }
      }
      return modelValue.value;
    };
    function handleMultipleReplace(intent, currentElement, getItems, options) {
      var _a;
      if (!(firstValue == null ? void 0 : firstValue.value) || !props.multiple || !Array.isArray(modelValue.value)) return;
      const collection = getItems().filter((i) => i.ref.dataset.disabled !== "");
      const lastValue = (_a = collection.find((i) => i.ref === currentElement)) == null ? void 0 : _a.value;
      if (!lastValue) return;
      let value = null;
      switch (intent) {
        case "prev":
        case "next": {
          value = findValuesBetween(options, firstValue.value, lastValue);
          break;
        }
        case "first": {
          value = findValuesBetween(options, firstValue.value, options == null ? void 0 : options[0]);
          break;
        }
        case "last": {
          value = findValuesBetween(options, firstValue.value, options == null ? void 0 : options[options.length - 1]);
          break;
        }
      }
      modelValue.value = value;
    }
    return {
      firstValue,
      onSelectItem,
      handleMultipleReplace
    };
  }
  const [injectTreeRootContext, provideTreeRootContext] = createContext("TreeRoot");
  const _sfc_main$b = defineComponent({
    __name: "TreeRoot",
    props: {
      modelValue: {},
      defaultValue: {},
      items: {},
      expanded: {},
      defaultExpanded: {},
      getKey: {},
      getChildren: {
        type: Function,
        default: (val) => val.children
      },
      selectionBehavior: {
        default: "toggle"
      },
      multiple: {
        type: Boolean
      },
      dir: {},
      disabled: {
        type: Boolean
      },
      propagateSelect: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {
        default: "ul"
      }
    },
    emits: [
      "update:modelValue",
      "update:expanded"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const { items, multiple, disabled, propagateSelect, dir: propDir } = toRefs(props);
      const { handleTypeaheadSearch } = useTypeahead();
      const dir = useDirection(propDir);
      const rovingFocusGroupRef = ref();
      const isVirtual = ref(false);
      const virtualKeydownHook = createEventHook();
      const modelValue = useVModel(props, "modelValue", emits, {
        defaultValue: props.defaultValue ?? (multiple.value ? [] : void 0),
        passive: props.modelValue === void 0,
        deep: true
      });
      const expanded = useVModel(props, "expanded", emits, {
        defaultValue: props.defaultExpanded ?? [],
        passive: props.expanded === void 0,
        deep: true
      });
      const { onSelectItem, handleMultipleReplace } = useSelectionBehavior(modelValue, props);
      const selectedKeys = computed(() => {
        if (multiple.value && Array.isArray(modelValue.value)) return modelValue.value.map((i) => props.getKey(i));
        else return [
          props.getKey(modelValue.value ?? {})
        ];
      });
      function flattenItems(items2, level = 1, parentItem) {
        return items2.reduce((acc, item, index) => {
          const key = props.getKey(item);
          const children = props.getChildren(item);
          const isExpanded = expanded.value.includes(key);
          const flattenedItem = {
            _id: key,
            value: item,
            index,
            level,
            parentItem,
            hasChildren: !!children,
            bind: {
              "value": item,
              level,
              "aria-setsize": items2.length,
              "aria-posinset": index + 1
            }
          };
          acc.push(flattenedItem);
          if (children && isExpanded) acc.push(...flattenItems(children, level + 1, item));
          return acc;
        }, []);
      }
      const expandedItems = computed(() => {
        const items2 = props.items;
        expanded.value.map((i) => i);
        return flattenItems(items2 ?? []);
      });
      function handleKeydown(event) {
        var _a;
        if (isVirtual.value) {
          virtualKeydownHook.trigger(event);
        } else {
          const collections = ((_a = rovingFocusGroupRef.value) == null ? void 0 : _a.getItems()) ?? [];
          handleTypeaheadSearch(event.key, collections);
        }
      }
      function handleKeydownNavigation(event) {
        if (isVirtual.value) return;
        const intent = MAP_KEY_TO_FOCUS_INTENT[event.key];
        nextTick(() => {
          var _a;
          handleMultipleReplace(intent, getActiveElement(), (_a = rovingFocusGroupRef.value) == null ? void 0 : _a.getItems, expandedItems.value.map((i) => i.value));
        });
      }
      provideTreeRootContext({
        modelValue,
        selectedKeys,
        onSelect: (val) => {
          var _a;
          const condition = (baseValue) => props.getKey(baseValue ?? {}) === props.getKey(val);
          const exist = props.multiple && Array.isArray(modelValue.value) ? ((_a = modelValue.value) == null ? void 0 : _a.findIndex(condition)) !== -1 : void 0;
          onSelectItem(val, condition);
          if (props.propagateSelect && props.multiple && Array.isArray(modelValue.value)) {
            const children = flatten(props.getChildren(val) ?? []);
            if (exist) {
              modelValue.value = [
                ...modelValue.value
              ].filter((i) => !children.some((child) => props.getKey(i ?? {}) === props.getKey(child)));
            } else {
              modelValue.value = [
                ...modelValue.value,
                ...children
              ];
            }
          }
        },
        expanded,
        onToggle(val) {
          const children = val ? props.getChildren(val) : void 0;
          if (!children) return;
          const key = props.getKey(val) ?? val;
          if (expanded.value.includes(key)) expanded.value = expanded.value.filter((val2) => val2 !== key);
          else expanded.value.push(key);
        },
        getKey: props.getKey,
        getChildren: props.getChildren,
        items,
        expandedItems,
        disabled,
        multiple,
        dir,
        propagateSelect,
        isVirtual,
        virtualKeydownHook,
        handleMultipleReplace
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$d), {
          ref_key: "rovingFocusGroupRef",
          ref: rovingFocusGroupRef,
          "as-child": "",
          orientation: "vertical",
          dir: unref(dir)
        }, {
          default: withCtx(() => [
            createVNode(unref(Primitive), {
              role: "tree",
              as: _ctx.as,
              "as-child": _ctx.asChild,
              "aria-multiselectable": unref(multiple) ? true : void 0,
              onKeydown: [
                handleKeydown,
                withKeys(withModifiers(handleKeydownNavigation, [
                  "shift"
                ]), [
                  "up",
                  "down"
                ])
              ]
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default", {
                  flattenItems: expandedItems.value,
                  modelValue: unref(modelValue),
                  expanded: unref(expanded)
                })
              ]),
              _: 3
            }, 8, [
              "as",
              "as-child",
              "aria-multiselectable",
              "onKeydown"
            ])
          ]),
          _: 3
        }, 8, [
          "dir"
        ]);
      };
    }
  });
  const TREE_SELECT = "tree.select";
  const TREE_TOGGLE = "tree.toggle";
  const _sfc_main$a = defineComponent({
    ...{
      inheritAttrs: false
    },
    __name: "TreeItem",
    props: {
      value: {},
      level: {},
      asChild: {
        type: Boolean
      },
      as: {
        default: "li"
      }
    },
    emits: [
      "select",
      "toggle"
    ],
    setup(__props, { expose: __expose, emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const rootContext = injectTreeRootContext();
      const { getItems } = useCollection();
      const hasChildren = computed(() => !!rootContext.getChildren(props.value));
      const isExpanded = computed(() => {
        const key = rootContext.getKey(props.value);
        return rootContext.expanded.value.includes(key);
      });
      const isSelected = computed(() => {
        const key = rootContext.getKey(props.value);
        return rootContext.selectedKeys.value.includes(key);
      });
      const isIndeterminate = computed(() => {
        if (rootContext.propagateSelect.value && isSelected.value && hasChildren.value && Array.isArray(rootContext.modelValue.value)) {
          const children = flatten(rootContext.getChildren(props.value) || []);
          return !children.every((child) => rootContext.modelValue.value.find((v) => rootContext.getKey(v) === rootContext.getKey(child)));
        } else {
          return void 0;
        }
      });
      function handleKeydownRight(ev) {
        if (!hasChildren.value) return;
        if (isExpanded.value) {
          const collection = getItems().map((i) => i.ref);
          const currentElement = getActiveElement();
          const currentIndex = collection.indexOf(currentElement);
          const list = [
            ...collection
          ].slice(currentIndex);
          const nextElement = list.find((el) => Number(el.getAttribute("data-indent")) === props.level + 1);
          if (nextElement) nextElement.focus();
        } else {
          handleToggleCustomEvent(ev);
        }
      }
      function handleKeydownLeft(ev) {
        if (isExpanded.value) {
          handleToggleCustomEvent(ev);
        } else {
          const collection = getItems().map((i) => i.ref);
          const currentElement = getActiveElement();
          const currentIndex = collection.indexOf(currentElement);
          const list = [
            ...collection
          ].slice(0, currentIndex).reverse();
          const parentElement = list.find((el) => Number(el.getAttribute("data-indent")) === props.level - 1);
          if (parentElement) parentElement.focus();
        }
      }
      async function handleSelect(ev) {
        emits("select", ev);
        if (ev == null ? void 0 : ev.defaultPrevented) return;
        rootContext.onSelect(props.value);
      }
      async function handleToggle(ev) {
        emits("toggle", ev);
        if (ev == null ? void 0 : ev.defaultPrevented) return;
        rootContext.onToggle(props.value);
      }
      async function handleSelectCustomEvent(ev) {
        if (!ev) return;
        const eventDetail = {
          originalEvent: ev,
          value: props.value,
          isExpanded: isExpanded.value,
          isSelected: isSelected.value
        };
        handleAndDispatchCustomEvent(TREE_SELECT, handleSelect, eventDetail);
      }
      async function handleToggleCustomEvent(ev) {
        if (!ev) return;
        const eventDetail = {
          originalEvent: ev,
          value: props.value,
          isExpanded: isExpanded.value,
          isSelected: isSelected.value
        };
        handleAndDispatchCustomEvent(TREE_TOGGLE, handleToggle, eventDetail);
      }
      __expose({
        isExpanded,
        isSelected,
        isIndeterminate,
        handleToggle: () => rootContext.onToggle(props.value),
        handleSelect: () => rootContext.onSelect(props.value)
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$c), {
          "as-child": "",
          value: _ctx.value,
          "allow-shift-key": ""
        }, {
          default: withCtx(() => [
            createVNode(unref(Primitive), mergeProps(_ctx.$attrs, {
              role: "treeitem",
              as: _ctx.as,
              "as-child": _ctx.asChild,
              "aria-selected": isSelected.value,
              "aria-expanded": hasChildren.value ? isExpanded.value : void 0,
              "aria-level": _ctx.level,
              "data-indent": _ctx.level,
              "data-selected": isSelected.value ? "" : void 0,
              "data-expanded": isExpanded.value ? "" : void 0,
              onKeydown: [
                withKeys(withModifiers(handleSelectCustomEvent, [
                  "self",
                  "prevent"
                ]), [
                  "enter",
                  "space"
                ]),
                _cache[0] || (_cache[0] = withKeys(withModifiers((ev) => unref(rootContext).dir.value === "ltr" ? handleKeydownRight(ev) : handleKeydownLeft(ev), [
                  "prevent"
                ]), [
                  "right"
                ])),
                _cache[1] || (_cache[1] = withKeys(withModifiers((ev) => unref(rootContext).dir.value === "ltr" ? handleKeydownLeft(ev) : handleKeydownRight(ev), [
                  "prevent"
                ]), [
                  "left"
                ]))
              ],
              onClick: _cache[2] || (_cache[2] = withModifiers((ev) => {
                handleSelectCustomEvent(ev);
                handleToggleCustomEvent(ev);
              }, [
                "stop"
              ]))
            }), {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default", {
                  isExpanded: isExpanded.value,
                  isSelected: isSelected.value,
                  isIndeterminate: isIndeterminate.value,
                  handleSelect: () => unref(rootContext).onSelect(_ctx.value),
                  handleToggle: () => unref(rootContext).onToggle(_ctx.value)
                })
              ]),
              _: 3
            }, 16, [
              "as",
              "as-child",
              "aria-selected",
              "aria-expanded",
              "aria-level",
              "data-indent",
              "data-selected",
              "data-expanded",
              "onKeydown"
            ])
          ]),
          _: 3
        }, 8, [
          "value"
        ]);
      };
    }
  });
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache();
    while (++index < length) {
      this.add(values[index]);
    }
  }
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;
  function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while (++index < arrLength) {
      var arrValue = array[index], othValue = other[index];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== void 0) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      if (seen) {
        if (!arraySome(other, function(othValue2, othIndex) {
          if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
  }
  function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index] = [
        key,
        value
      ];
    });
    return result;
  }
  function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
  var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
  var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
          return false;
        }
        return true;
      case boolTag:
      case dateTag:
      case numberTag:
        return eq(+object, +other);
      case errorTag:
        return object.name == other.name && object.message == other.message;
      case regexpTag:
      case stringTag:
        return object == other + "";
      case mapTag:
        var convert = mapToArray;
      case setTag:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
        convert || (convert = setToArray);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG;
        stack.set(object, other);
        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result;
      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  var COMPARE_PARTIAL_FLAG$1 = 1;
  var objectProto$1 = Object.prototype;
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
        return false;
      }
    }
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor, othCtor = other.constructor;
      if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
  }
  var COMPARE_PARTIAL_FLAG = 1;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
      if (!isBuffer(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack());
      return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack());
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  function isEqual(value, other) {
    return baseIsEqual(value, other);
  }
  const useVolumeStore = defineStore("volume", () => {
    const api = useApi();
    const busyStore = useBusyStore();
    const data = reactive({
      entries: []
    });
    const initData = reactive({
      entries: []
    });
    const activeViewEntryRelativePath = ref(null);
    function cleanPath(path2) {
      path2 = path2.replace(/[^a-zA-Z0-9._/-]+/g, "");
      path2 = path2.replace(/\.{2,}/g, ".");
      path2 = path2.replace(/\/{2,}/g, "/");
      path2 = path2.replace(/^[._/ -]+|[._/ -]+$/g, "");
      return path2;
    }
    function addNewEntry(filePath) {
      let filePathParts = filePath.split("/").map(cleanPath).join("/");
      filePathParts = cleanPath(filePathParts);
      const existingEntryIndex = data.entries.findIndex((entry) => entry.relative_path === filePathParts);
      if (existingEntryIndex !== -1) {
        if (data.entries[existingEntryIndex].hidden === false) {
          throw new Error(wp.i18n.__(`A file named "${filePathParts}" already exists`, "windpress"));
        }
        data.entries[existingEntryIndex].hidden = false;
        data.entries[existingEntryIndex].content = `/* file: ${filePathParts} */

`;
      } else {
        data.entries.push({
          name: filePathParts.split("/").pop() || "",
          content: `/* file: ${filePathParts} */

`,
          relative_path: `${filePathParts}`,
          handler: "internal"
        });
      }
      activeViewEntryRelativePath.value = `${filePathParts}`;
    }
    function softDeleteEntry(entry) {
      const entryIndex = data.entries.findIndex((e) => e.relative_path === entry.relative_path);
      data.entries[entryIndex].content = "";
      data.entries[entryIndex].hidden = true;
      if (activeViewEntryRelativePath.value === entry.relative_path) {
        activeViewEntryRelativePath.value = null;
      }
    }
    function renameEntry(entry, filePath) {
      const entryIndex = data.entries.findIndex((e) => e.relative_path === entry.relative_path);
      let filePathParts = filePath.split("/").map(cleanPath).join("/");
      filePathParts = cleanPath(filePathParts);
      const existingEntryIndex = data.entries.findIndex((e) => e.relative_path === filePathParts);
      if (existingEntryIndex !== -1) {
        if (data.entries[existingEntryIndex].hidden === false) {
          throw new Error(wp.i18n.__(`A file named "${filePathParts}" already exists`, "windpress"));
        }
        data.entries[existingEntryIndex].hidden = false;
        data.entries[existingEntryIndex].content = data.entries[entryIndex].content;
        if (data.entries[existingEntryIndex].signature) {
          delete data.entries[existingEntryIndex].signature;
        }
      } else {
        const newEntry = cloneDeep(data.entries[entryIndex]);
        newEntry.relative_path = filePathParts;
        newEntry.name = filePathParts.split("/").pop() || "";
        newEntry.content = data.entries[entryIndex].content;
        newEntry.hidden = false;
        newEntry.signature = void 0;
        data.entries.push(newEntry);
      }
      softDeleteEntry(entry);
    }
    function resetEntry(entry) {
      const entryIndex = data.entries.findIndex((e) => e.relative_path === entry.relative_path);
      data.entries[entryIndex].content = "";
    }
    function getKVEntries() {
      return data.entries.reduce((acc, entry) => {
        acc[`/${entry.relative_path}`] = entry.content;
        return acc;
      }, {});
    }
    async function doPull() {
      busyStore.add("volume.doPull");
      return await api.request("/admin/volume/index", {
        method: "GET"
      }).then((response) => response.data).then((res) => {
        const entries = res.entries;
        data.entries = entries;
        updateInitValues();
      }).catch((error) => {
      }).finally(() => {
        busyStore.remove("volume.doPull");
      });
    }
    async function doPush() {
      busyStore.add("volume.doPush");
      return api.request("/admin/volume/store", {
        method: "POST",
        data: {
          volume: {
            entries: data.entries
          }
        }
      }).then((response) => {
        updateInitValues();
        return {
          message: response.data.message,
          success: true
        };
      }).catch((error) => {
        throw new Error(error.response ? error.response.data.message : error.message);
      }).finally(() => {
        busyStore.remove("volume.doPush");
      });
    }
    function updateInitValues() {
      if (data.entries.length === 0) {
        return;
      }
      if (activeViewEntryRelativePath.value === null) {
        activeViewEntryRelativePath.value = "main.css";
      }
      if (!hasChanged.value) return;
      initData.entries = cloneDeep(data.entries);
    }
    const hasChanged = computed(() => !isEqual(data.entries, initData.entries));
    function entryHasChanged(key) {
      const entry = data.entries.find((e) => e.relative_path === key);
      const initEntry = initData.entries.find((e) => e.relative_path === key);
      return !isEqual(entry, initEntry);
    }
    function initPull() {
      if (data.entries.length === 0) {
        doPull();
      }
    }
    return {
      data,
      activeViewEntryRelativePath,
      hasChanged,
      addNewEntry,
      getKVEntries,
      doPull,
      doPush,
      entryHasChanged,
      softDeleteEntry,
      resetEntry,
      renameEntry,
      cleanPath,
      initPull
    };
  });
  const theme$1 = {
    "slots": {
      "root": "relative isolate",
      "item": "",
      "listWithChildren": "ms-4.5 border-s border-default",
      "itemWithChildren": "ps-1.5 -ms-px",
      "link": "relative group w-full flex items-center text-sm before:absolute before:inset-y-px before:inset-x-0 before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
      "linkLeadingIcon": "shrink-0",
      "linkLabel": "truncate",
      "linkTrailing": "ms-auto inline-flex gap-1.5 items-center",
      "linkTrailingIcon": "shrink-0 transform transition-transform duration-200 group-data-expanded:rotate-180"
    },
    "variants": {
      "color": {
        "primary": {
          "link": "focus-visible:before:ring-primary"
        },
        "secondary": {
          "link": "focus-visible:before:ring-secondary"
        },
        "success": {
          "link": "focus-visible:before:ring-success"
        },
        "info": {
          "link": "focus-visible:before:ring-info"
        },
        "warning": {
          "link": "focus-visible:before:ring-warning"
        },
        "error": {
          "link": "focus-visible:before:ring-error"
        },
        "neutral": {
          "link": "focus-visible:before:ring-inverted"
        }
      },
      "size": {
        "xs": {
          "link": "px-2 py-1 text-xs gap-1",
          "linkLeadingIcon": "size-4",
          "linkTrailingIcon": "size-4"
        },
        "sm": {
          "link": "px-2.5 py-1.5 text-xs gap-1.5",
          "linkLeadingIcon": "size-4",
          "linkTrailingIcon": "size-4"
        },
        "md": {
          "link": "px-2.5 py-1.5 text-sm gap-1.5",
          "linkLeadingIcon": "size-5",
          "linkTrailingIcon": "size-5"
        },
        "lg": {
          "link": "px-3 py-2 text-sm gap-2",
          "linkLeadingIcon": "size-5",
          "linkTrailingIcon": "size-5"
        },
        "xl": {
          "link": "px-3 py-2 text-base gap-2",
          "linkLeadingIcon": "size-6",
          "linkTrailingIcon": "size-6"
        }
      },
      "selected": {
        "true": {
          "link": "before:bg-elevated"
        },
        "false": {
          "link": [
            "hover:not-disabled:text-highlighted hover:not-disabled:before:bg-elevated/50",
            "transition-colors before:transition-colors"
          ]
        }
      },
      "disabled": {
        "true": {
          "link": "cursor-not-allowed opacity-75"
        }
      }
    },
    "compoundVariants": [
      {
        "color": "primary",
        "selected": true,
        "class": {
          "link": "text-primary"
        }
      },
      {
        "color": "secondary",
        "selected": true,
        "class": {
          "link": "text-secondary"
        }
      },
      {
        "color": "success",
        "selected": true,
        "class": {
          "link": "text-success"
        }
      },
      {
        "color": "info",
        "selected": true,
        "class": {
          "link": "text-info"
        }
      },
      {
        "color": "warning",
        "selected": true,
        "class": {
          "link": "text-warning"
        }
      },
      {
        "color": "error",
        "selected": true,
        "class": {
          "link": "text-error"
        }
      },
      {
        "color": "neutral",
        "selected": true,
        "class": {
          "link": "text-highlighted"
        }
      }
    ],
    "defaultVariants": {
      "color": "primary",
      "size": "md"
    }
  };
  const _hoisted_1$7 = [
    "disabled"
  ];
  const _sfc_main$9 = {
    __name: "Tree",
    props: {
      as: {
        type: null,
        required: false
      },
      color: {
        type: null,
        required: false
      },
      size: {
        type: null,
        required: false
      },
      valueKey: {
        type: null,
        required: false,
        default: "value"
      },
      labelKey: {
        type: null,
        required: false,
        default: "label"
      },
      trailingIcon: {
        type: String,
        required: false
      },
      expandedIcon: {
        type: String,
        required: false
      },
      collapsedIcon: {
        type: String,
        required: false
      },
      items: {
        type: null,
        required: false
      },
      modelValue: {
        type: null,
        required: false
      },
      defaultValue: {
        type: null,
        required: false
      },
      multiple: {
        type: Boolean,
        required: false
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: null,
        required: false
      },
      expanded: {
        type: Array,
        required: false
      },
      defaultExpanded: {
        type: Array,
        required: false
      },
      selectionBehavior: {
        type: String,
        required: false
      },
      propagateSelect: {
        type: Boolean,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      }
    },
    emits: [
      "update:expanded",
      "update:modelValue"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const slots = useSlots();
      const appConfig = useAppConfig();
      const rootProps = useForwardPropsEmits(reactivePick(props, "as", "modelValue", "defaultValue", "items", "multiple", "expanded", "disabled", "propagateSelect"), emits);
      const [DefineTreeTemplate, ReuseTreeTemplate] = createReusableTemplate();
      const ui = computed(() => {
        var _a;
        return tv({
          extend: tv(theme$1),
          ...((_a = appConfig.ui) == null ? void 0 : _a.tree) || {}
        })({
          color: props.color,
          size: props.size
        });
      });
      function getItemLabel(item) {
        return get(item, props.labelKey);
      }
      function getItemValue(item) {
        return get(item, props.valueKey) ?? get(item, props.labelKey);
      }
      function getDefaultOpenedItems(item) {
        var _a;
        const currentItem = item.defaultExpanded ? getItemValue(item) : null;
        const childItems = ((_a = item.children) == null ? void 0 : _a.flatMap((child) => getDefaultOpenedItems(child))) ?? [];
        return [
          currentItem,
          ...childItems
        ].filter(Boolean);
      }
      const defaultExpanded = computed(() => {
        var _a;
        return props.defaultExpanded ?? ((_a = props.items) == null ? void 0 : _a.flatMap((item) => getDefaultOpenedItems(item)));
      });
      return (_ctx, _cache) => {
        var _a;
        return openBlock(), createElementBlock(Fragment, null, [
          createVNode(unref(DefineTreeTemplate), null, {
            default: withCtx(({ items, level }) => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(items, (item, index) => {
                var _a2, _b, _c, _d;
                return openBlock(), createElementBlock("li", {
                  key: `${level}-${index}`,
                  class: normalizeClass(level > 0 ? ui.value.itemWithChildren({
                    class: [
                      (_a2 = props.ui) == null ? void 0 : _a2.itemWithChildren,
                      (_b = item.ui) == null ? void 0 : _b.itemWithChildren
                    ]
                  }) : ui.value.item({
                    class: [
                      (_c = props.ui) == null ? void 0 : _c.item,
                      (_d = item.ui) == null ? void 0 : _d.item
                    ]
                  }))
                }, [
                  createVNode(unref(_sfc_main$a), {
                    "as-child": "",
                    level,
                    value: item,
                    onToggle: item.onToggle,
                    onSelect: item.onSelect
                  }, {
                    default: withCtx(({ isExpanded, isSelected }) => {
                      var _a3, _b2, _c2, _d2, _e;
                      return [
                        createBaseVNode("button", {
                          disabled: item.disabled || __props.disabled,
                          class: normalizeClass(ui.value.link({
                            class: [
                              (_a3 = props.ui) == null ? void 0 : _a3.link,
                              (_b2 = item.ui) == null ? void 0 : _b2.link,
                              item.class
                            ],
                            selected: isSelected,
                            disabled: item.disabled || __props.disabled
                          }))
                        }, [
                          renderSlot(_ctx.$slots, item.slot || "item", mergeProps({
                            ref_for: true
                          }, {
                            index,
                            level,
                            expanded: isExpanded,
                            selected: isSelected
                          }, {
                            item
                          }), () => {
                            var _a4, _b3, _c3, _d3, _e2;
                            return [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", mergeProps({
                                ref_for: true
                              }, {
                                index,
                                level,
                                expanded: isExpanded,
                                selected: isSelected
                              }, {
                                item
                              }), () => {
                                var _a5, _b4, _c4, _d4, _e3;
                                return [
                                  item.icon ? (openBlock(), createBlock(_sfc_main$e, {
                                    key: 0,
                                    name: item.icon,
                                    class: normalizeClass(ui.value.linkLeadingIcon({
                                      class: [
                                        (_a5 = props.ui) == null ? void 0 : _a5.linkLeadingIcon,
                                        (_b4 = item.ui) == null ? void 0 : _b4.linkLeadingIcon
                                      ]
                                    }))
                                  }, null, 8, [
                                    "name",
                                    "class"
                                  ])) : ((_c4 = item.children) == null ? void 0 : _c4.length) ? (openBlock(), createBlock(_sfc_main$e, {
                                    key: 1,
                                    name: isExpanded ? __props.expandedIcon ?? unref(appConfig).ui.icons.folderOpen : __props.collapsedIcon ?? unref(appConfig).ui.icons.folder,
                                    class: normalizeClass(ui.value.linkLeadingIcon({
                                      class: [
                                        (_d4 = props.ui) == null ? void 0 : _d4.linkLeadingIcon,
                                        (_e3 = item.ui) == null ? void 0 : _e3.linkLeadingIcon
                                      ]
                                    }))
                                  }, null, 8, [
                                    "name",
                                    "class"
                                  ])) : createCommentVNode("", true)
                                ];
                              }),
                              getItemLabel(item) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createElementBlock("span", {
                                key: 0,
                                class: normalizeClass(ui.value.linkLabel({
                                  class: [
                                    (_a4 = props.ui) == null ? void 0 : _a4.linkLabel,
                                    (_b3 = item.ui) == null ? void 0 : _b3.linkLabel
                                  ]
                                }))
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", mergeProps({
                                  ref_for: true
                                }, {
                                  item,
                                  index,
                                  level,
                                  expanded: isExpanded,
                                  selected: isSelected
                                }, {
                                  item
                                }), () => [
                                  createTextVNode(toDisplayString(getItemLabel(item)), 1)
                                ])
                              ], 2)) : createCommentVNode("", true),
                              item.trailingIcon || ((_c3 = item.children) == null ? void 0 : _c3.length) || !!slots[item.slot ? `${item.slot}-trailing` : "item-trailing"] ? (openBlock(), createElementBlock("span", {
                                key: 1,
                                class: normalizeClass(ui.value.linkTrailing({
                                  class: [
                                    (_d3 = props.ui) == null ? void 0 : _d3.linkTrailing,
                                    (_e2 = item.ui) == null ? void 0 : _e2.linkTrailing
                                  ]
                                }))
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", mergeProps({
                                  ref_for: true
                                }, {
                                  item,
                                  index,
                                  level,
                                  expanded: isExpanded,
                                  selected: isSelected
                                }, {
                                  item
                                }), () => {
                                  var _a5, _b4, _c4, _d4, _e3;
                                  return [
                                    item.trailingIcon ? (openBlock(), createBlock(_sfc_main$e, {
                                      key: 0,
                                      name: item.trailingIcon,
                                      class: normalizeClass(ui.value.linkTrailingIcon({
                                        class: [
                                          (_a5 = props.ui) == null ? void 0 : _a5.linkTrailingIcon,
                                          (_b4 = item.ui) == null ? void 0 : _b4.linkTrailingIcon
                                        ]
                                      }))
                                    }, null, 8, [
                                      "name",
                                      "class"
                                    ])) : ((_c4 = item.children) == null ? void 0 : _c4.length) ? (openBlock(), createBlock(_sfc_main$e, {
                                      key: 1,
                                      name: __props.trailingIcon ?? unref(appConfig).ui.icons.chevronDown,
                                      class: normalizeClass(ui.value.linkTrailingIcon({
                                        class: [
                                          (_d4 = props.ui) == null ? void 0 : _d4.linkTrailingIcon,
                                          (_e3 = item.ui) == null ? void 0 : _e3.linkTrailingIcon
                                        ]
                                      }))
                                    }, null, 8, [
                                      "name",
                                      "class"
                                    ])) : createCommentVNode("", true)
                                  ];
                                })
                              ], 2)) : createCommentVNode("", true)
                            ];
                          })
                        ], 10, _hoisted_1$7),
                        ((_c2 = item.children) == null ? void 0 : _c2.length) && isExpanded ? (openBlock(), createElementBlock("ul", {
                          key: 0,
                          class: normalizeClass(ui.value.listWithChildren({
                            class: [
                              (_d2 = props.ui) == null ? void 0 : _d2.listWithChildren,
                              (_e = item.ui) == null ? void 0 : _e.listWithChildren
                            ]
                          }))
                        }, [
                          createVNode(unref(ReuseTreeTemplate), {
                            items: item.children,
                            level: level + 1
                          }, null, 8, [
                            "items",
                            "level"
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ];
                    }),
                    _: 2
                  }, 1032, [
                    "level",
                    "value",
                    "onToggle",
                    "onSelect"
                  ])
                ], 2);
              }), 128))
            ]),
            _: 3
          }),
          createVNode(unref(_sfc_main$b), mergeProps(unref(rootProps), {
            class: ui.value.root({
              class: [
                (_a = props.ui) == null ? void 0 : _a.root,
                props.class
              ]
            }),
            "get-key": getItemValue,
            "default-expanded": defaultExpanded.value,
            "selection-behavior": __props.selectionBehavior
          }), {
            default: withCtx(() => [
              createVNode(unref(ReuseTreeTemplate), {
                items: __props.items,
                level: 0
              }, null, 8, [
                "items"
              ])
            ]),
            _: 1
          }, 16, [
            "class",
            "default-expanded",
            "selection-behavior"
          ])
        ], 64);
      };
    }
  };
  const _sfc_main$8 = {
    __name: "ContextMenuContent",
    props: {
      items: {
        type: null,
        required: false
      },
      portal: {
        type: [
          Boolean,
          String
        ],
        required: false,
        skipCheck: true
      },
      sub: {
        type: Boolean,
        required: false
      },
      labelKey: {
        type: null,
        required: true
      },
      checkedIcon: {
        type: String,
        required: false
      },
      loadingIcon: {
        type: String,
        required: false
      },
      externalIcon: {
        type: [
          Boolean,
          String
        ],
        required: false
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: null,
        required: true
      },
      uiOverride: {
        type: null,
        required: false
      },
      loop: {
        type: Boolean,
        required: false
      },
      alignOffset: {
        type: Number,
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
      }
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "closeAutoFocus"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const slots = useSlots();
      const { dir } = useLocale();
      const appConfig = useAppConfig();
      const portalProps = usePortal(toRef(() => props.portal));
      const contentProps = useForwardPropsEmits(reactiveOmit(props, "sub", "items", "portal", "labelKey", "checkedIcon", "loadingIcon", "externalIcon", "class", "ui", "uiOverride"), emits);
      const proxySlots = omit(slots, [
        "default"
      ]);
      const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate();
      const childrenIcon = computed(() => dir.value === "rtl" ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight);
      const groups = computed(() => {
        var _a;
        return ((_a = props.items) == null ? void 0 : _a.length) ? isArrayOfArray(props.items) ? props.items : [
          props.items
        ] : [];
      });
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock(Fragment, null, [
          createVNode(unref(DefineItemTemplate), null, {
            default: withCtx(({ item, active, index }) => [
              renderSlot(_ctx.$slots, item.slot || "item", {
                item,
                index
              }, () => {
                var _a, _b, _c, _d, _e, _f;
                return [
                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                    item,
                    active,
                    index
                  }, () => {
                    var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h;
                    return [
                      item.loading ? (openBlock(), createBlock(_sfc_main$e, {
                        key: 0,
                        name: __props.loadingIcon || unref(appConfig).ui.icons.loading,
                        class: normalizeClass(__props.ui.itemLeadingIcon({
                          class: [
                            (_a2 = __props.uiOverride) == null ? void 0 : _a2.itemLeadingIcon,
                            (_b2 = item.ui) == null ? void 0 : _b2.itemLeadingIcon
                          ],
                          color: item == null ? void 0 : item.color,
                          loading: true
                        }))
                      }, null, 8, [
                        "name",
                        "class"
                      ])) : item.icon ? (openBlock(), createBlock(_sfc_main$e, {
                        key: 1,
                        name: item.icon,
                        class: normalizeClass(__props.ui.itemLeadingIcon({
                          class: [
                            (_c2 = __props.uiOverride) == null ? void 0 : _c2.itemLeadingIcon,
                            (_d2 = item.ui) == null ? void 0 : _d2.itemLeadingIcon
                          ],
                          color: item == null ? void 0 : item.color,
                          active
                        }))
                      }, null, 8, [
                        "name",
                        "class"
                      ])) : item.avatar ? (openBlock(), createBlock(_sfc_main$f, mergeProps({
                        key: 2,
                        size: ((_e2 = item.ui) == null ? void 0 : _e2.itemLeadingAvatarSize) || ((_f2 = props.uiOverride) == null ? void 0 : _f2.itemLeadingAvatarSize) || __props.ui.itemLeadingAvatarSize()
                      }, item.avatar, {
                        class: __props.ui.itemLeadingAvatar({
                          class: [
                            (_g = __props.uiOverride) == null ? void 0 : _g.itemLeadingAvatar,
                            (_h = item.ui) == null ? void 0 : _h.itemLeadingAvatar
                          ],
                          active
                        })
                      }), null, 16, [
                        "size",
                        "class"
                      ])) : createCommentVNode("", true)
                    ];
                  }),
                  unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"] ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(__props.ui.itemLabel({
                      class: [
                        (_a = __props.uiOverride) == null ? void 0 : _a.itemLabel,
                        (_b = item.ui) == null ? void 0 : _b.itemLabel
                      ],
                      active
                    }))
                  }, [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                      item,
                      active,
                      index
                    }, () => [
                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                    ]),
                    item.target === "_blank" && __props.externalIcon !== false ? (openBlock(), createBlock(_sfc_main$e, {
                      key: 0,
                      name: typeof __props.externalIcon === "string" ? __props.externalIcon : unref(appConfig).ui.icons.external,
                      class: normalizeClass(__props.ui.itemLabelExternalIcon({
                        class: [
                          (_c = __props.uiOverride) == null ? void 0 : _c.itemLabelExternalIcon,
                          (_d = item.ui) == null ? void 0 : _d.itemLabelExternalIcon
                        ],
                        color: item == null ? void 0 : item.color,
                        active
                      }))
                    }, null, 8, [
                      "name",
                      "class"
                    ])) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true),
                  createBaseVNode("span", {
                    class: normalizeClass(__props.ui.itemTrailing({
                      class: [
                        (_e = __props.uiOverride) == null ? void 0 : _e.itemTrailing,
                        (_f = item.ui) == null ? void 0 : _f.itemTrailing
                      ]
                    }))
                  }, [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                      item,
                      active,
                      index
                    }, () => {
                      var _a2, _b2, _c2, _d2, _e2, _f2;
                      return [
                        ((_a2 = item.children) == null ? void 0 : _a2.length) ? (openBlock(), createBlock(_sfc_main$e, {
                          key: 0,
                          name: childrenIcon.value,
                          class: normalizeClass(__props.ui.itemTrailingIcon({
                            class: [
                              (_b2 = __props.uiOverride) == null ? void 0 : _b2.itemTrailingIcon,
                              (_c2 = item.ui) == null ? void 0 : _c2.itemTrailingIcon
                            ],
                            color: item == null ? void 0 : item.color,
                            active
                          }))
                        }, null, 8, [
                          "name",
                          "class"
                        ])) : ((_d2 = item.kbds) == null ? void 0 : _d2.length) ? (openBlock(), createElementBlock("span", {
                          key: 1,
                          class: normalizeClass(__props.ui.itemTrailingKbds({
                            class: [
                              (_e2 = __props.uiOverride) == null ? void 0 : _e2.itemTrailingKbds,
                              (_f2 = item.ui) == null ? void 0 : _f2.itemTrailingKbds
                            ]
                          }))
                        }, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(item.kbds, (kbd, kbdIndex) => {
                            var _a3, _b3;
                            return openBlock(), createBlock(_sfc_main$g, mergeProps({
                              key: kbdIndex,
                              size: ((_a3 = item.ui) == null ? void 0 : _a3.itemTrailingKbdsSize) || ((_b3 = props.uiOverride) == null ? void 0 : _b3.itemTrailingKbdsSize) || __props.ui.itemTrailingKbdsSize(),
                              ref_for: true
                            }, typeof kbd === "string" ? {
                              value: kbd
                            } : kbd), null, 16, [
                              "size"
                            ]);
                          }), 128))
                        ], 2)) : createCommentVNode("", true)
                      ];
                    }),
                    createVNode(unref(ContextMenu).ItemIndicator, {
                      "as-child": ""
                    }, {
                      default: withCtx(() => {
                        var _a2, _b2;
                        return [
                          createVNode(_sfc_main$e, {
                            name: __props.checkedIcon || unref(appConfig).ui.icons.check,
                            class: normalizeClass(__props.ui.itemTrailingIcon({
                              class: [
                                (_a2 = __props.uiOverride) == null ? void 0 : _a2.itemTrailingIcon,
                                (_b2 = item.ui) == null ? void 0 : _b2.itemTrailingIcon
                              ],
                              color: item == null ? void 0 : item.color
                            }))
                          }, null, 8, [
                            "name",
                            "class"
                          ])
                        ];
                      }),
                      _: 2
                    }, 1024)
                  ], 2)
                ];
              })
            ]),
            _: 3
          }),
          createVNode(unref(ContextMenu).Portal, normalizeProps(guardReactiveProps(unref(portalProps))), {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(__props.sub ? unref(ContextMenu).SubContent : unref(ContextMenu).Content), mergeProps({
                class: props.class
              }, unref(contentProps)), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "content-top"),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(groups.value, (group, groupIndex) => {
                    var _a;
                    return openBlock(), createBlock(unref(ContextMenu).Group, {
                      key: `group-${groupIndex}`,
                      class: normalizeClass(__props.ui.group({
                        class: (_a = __props.uiOverride) == null ? void 0 : _a.group
                      }))
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(group, (item, index) => {
                          var _a2, _b, _c, _d, _e, _f, _g;
                          return openBlock(), createElementBlock(Fragment, {
                            key: `group-${groupIndex}-${index}`
                          }, [
                            item.type === "label" ? (openBlock(), createBlock(unref(ContextMenu).Label, {
                              key: 0,
                              class: normalizeClass(__props.ui.label({
                                class: [
                                  (_a2 = __props.uiOverride) == null ? void 0 : _a2.label,
                                  (_b = item.ui) == null ? void 0 : _b.label,
                                  item.class
                                ]
                              }))
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ReuseItemTemplate), {
                                  item,
                                  index
                                }, null, 8, [
                                  "item",
                                  "index"
                                ])
                              ]),
                              _: 2
                            }, 1032, [
                              "class"
                            ])) : item.type === "separator" ? (openBlock(), createBlock(unref(ContextMenu).Separator, {
                              key: 1,
                              class: normalizeClass(__props.ui.separator({
                                class: [
                                  (_c = __props.uiOverride) == null ? void 0 : _c.separator,
                                  (_d = item.ui) == null ? void 0 : _d.separator,
                                  item.class
                                ]
                              }))
                            }, null, 8, [
                              "class"
                            ])) : ((_e = item == null ? void 0 : item.children) == null ? void 0 : _e.length) ? (openBlock(), createBlock(unref(ContextMenu).Sub, {
                              key: 2,
                              open: item.open,
                              "default-open": item.defaultOpen
                            }, {
                              default: withCtx(() => {
                                var _a3, _b2;
                                return [
                                  createVNode(unref(ContextMenu).SubTrigger, {
                                    as: "button",
                                    type: "button",
                                    disabled: item.disabled,
                                    "text-value": unref(get)(item, props.labelKey),
                                    class: normalizeClass(__props.ui.item({
                                      class: [
                                        (_a3 = __props.uiOverride) == null ? void 0 : _a3.item,
                                        (_b2 = item.ui) == null ? void 0 : _b2.item,
                                        item.class
                                      ],
                                      color: item == null ? void 0 : item.color
                                    }))
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseItemTemplate), {
                                        item,
                                        index
                                      }, null, 8, [
                                        "item",
                                        "index"
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, [
                                    "disabled",
                                    "text-value",
                                    "class"
                                  ]),
                                  createVNode(_sfc_main$8, mergeProps({
                                    sub: "",
                                    class: props.class,
                                    ui: __props.ui,
                                    "ui-override": __props.uiOverride,
                                    portal: __props.portal,
                                    items: item.children,
                                    "align-offset": -4,
                                    "label-key": __props.labelKey,
                                    "checked-icon": __props.checkedIcon,
                                    "loading-icon": __props.loadingIcon,
                                    "external-icon": __props.externalIcon,
                                    ref_for: true
                                  }, item.content), createSlots({
                                    _: 2
                                  }, [
                                    renderList(unref(proxySlots), (_, name) => {
                                      return {
                                        name,
                                        fn: withCtx((slotData) => [
                                          renderSlot(_ctx.$slots, name, mergeProps({
                                            ref_for: true
                                          }, slotData))
                                        ])
                                      };
                                    })
                                  ]), 1040, [
                                    "class",
                                    "ui",
                                    "ui-override",
                                    "portal",
                                    "items",
                                    "label-key",
                                    "checked-icon",
                                    "loading-icon",
                                    "external-icon"
                                  ])
                                ];
                              }),
                              _: 2
                            }, 1032, [
                              "open",
                              "default-open"
                            ])) : item.type === "checkbox" ? (openBlock(), createBlock(unref(ContextMenu).CheckboxItem, {
                              key: 3,
                              "model-value": item.checked,
                              disabled: item.disabled,
                              "text-value": unref(get)(item, props.labelKey),
                              class: normalizeClass(__props.ui.item({
                                class: [
                                  (_f = __props.uiOverride) == null ? void 0 : _f.item,
                                  (_g = item.ui) == null ? void 0 : _g.item,
                                  item.class
                                ],
                                color: item == null ? void 0 : item.color
                              })),
                              "onUpdate:modelValue": item.onUpdateChecked,
                              onSelect: item.onSelect
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ReuseItemTemplate), {
                                  item,
                                  index
                                }, null, 8, [
                                  "item",
                                  "index"
                                ])
                              ]),
                              _: 2
                            }, 1032, [
                              "model-value",
                              "disabled",
                              "text-value",
                              "class",
                              "onUpdate:modelValue",
                              "onSelect"
                            ])) : (openBlock(), createBlock(unref(ContextMenu).Item, {
                              key: 4,
                              "as-child": "",
                              disabled: item.disabled,
                              "text-value": unref(get)(item, props.labelKey),
                              onSelect: item.onSelect
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$h, mergeProps({
                                  ref_for: true
                                }, unref(pickLinkProps)(item), {
                                  custom: ""
                                }), {
                                  default: withCtx(({ active, ...slotProps }) => {
                                    var _a3, _b2;
                                    return [
                                      createVNode(_sfc_main$i, mergeProps({
                                        ref_for: true
                                      }, slotProps, {
                                        class: __props.ui.item({
                                          class: [
                                            (_a3 = __props.uiOverride) == null ? void 0 : _a3.item,
                                            (_b2 = item.ui) == null ? void 0 : _b2.item,
                                            item.class
                                          ],
                                          active,
                                          color: item == null ? void 0 : item.color
                                        })
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(unref(ReuseItemTemplate), {
                                            item,
                                            active,
                                            index
                                          }, null, 8, [
                                            "item",
                                            "active",
                                            "index"
                                          ])
                                        ]),
                                        _: 2
                                      }, 1040, [
                                        "class"
                                      ])
                                    ];
                                  }),
                                  _: 2
                                }, 1040)
                              ]),
                              _: 2
                            }, 1032, [
                              "disabled",
                              "text-value",
                              "onSelect"
                            ]))
                          ], 64);
                        }), 128))
                      ]),
                      _: 2
                    }, 1032, [
                      "class"
                    ]);
                  }), 128)),
                  renderSlot(_ctx.$slots, "default"),
                  renderSlot(_ctx.$slots, "content-bottom")
                ]),
                _: 3
              }, 16, [
                "class"
              ]))
            ]),
            _: 3
          }, 16)
        ], 64);
      };
    }
  };
  const theme = {
    "slots": {
      "content": "min-w-32 bg-default shadow-lg rounded-md ring ring-default divide-y divide-default overflow-y-auto scroll-py-1 data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-context-menu-content-transform-origin)",
      "group": "p-1 isolate",
      "label": "w-full flex items-center font-semibold text-highlighted",
      "separator": "-mx-1 my-1 h-px bg-border",
      "item": "group relative w-full flex items-center select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75",
      "itemLeadingIcon": "shrink-0",
      "itemLeadingAvatar": "shrink-0",
      "itemLeadingAvatarSize": "",
      "itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
      "itemTrailingIcon": "shrink-0",
      "itemTrailingKbds": "hidden lg:inline-flex items-center shrink-0",
      "itemTrailingKbdsSize": "",
      "itemLabel": "truncate",
      "itemLabelExternalIcon": "inline-block size-3 align-top text-dimmed"
    },
    "variants": {
      "color": {
        "primary": "",
        "secondary": "",
        "success": "",
        "info": "",
        "warning": "",
        "error": "",
        "neutral": ""
      },
      "active": {
        "true": {
          "item": "text-highlighted before:bg-elevated",
          "itemLeadingIcon": "text-default"
        },
        "false": {
          "item": [
            "text-default data-highlighted:text-highlighted data-[state=open]:text-highlighted data-highlighted:before:bg-elevated/50 data-[state=open]:before:bg-elevated/50",
            "transition-colors before:transition-colors"
          ],
          "itemLeadingIcon": [
            "text-dimmed group-data-highlighted:text-default group-data-[state=open]:text-default",
            "transition-colors"
          ]
        }
      },
      "loading": {
        "true": {
          "itemLeadingIcon": "animate-spin"
        }
      },
      "size": {
        "xs": {
          "label": "p-1 text-xs gap-1",
          "item": "p-1 text-xs gap-1",
          "itemLeadingIcon": "size-4",
          "itemLeadingAvatarSize": "3xs",
          "itemTrailingIcon": "size-4",
          "itemTrailingKbds": "gap-0.5",
          "itemTrailingKbdsSize": "sm"
        },
        "sm": {
          "label": "p-1.5 text-xs gap-1.5",
          "item": "p-1.5 text-xs gap-1.5",
          "itemLeadingIcon": "size-4",
          "itemLeadingAvatarSize": "3xs",
          "itemTrailingIcon": "size-4",
          "itemTrailingKbds": "gap-0.5",
          "itemTrailingKbdsSize": "sm"
        },
        "md": {
          "label": "p-1.5 text-sm gap-1.5",
          "item": "p-1.5 text-sm gap-1.5",
          "itemLeadingIcon": "size-5",
          "itemLeadingAvatarSize": "2xs",
          "itemTrailingIcon": "size-5",
          "itemTrailingKbds": "gap-0.5",
          "itemTrailingKbdsSize": "md"
        },
        "lg": {
          "label": "p-2 text-sm gap-2",
          "item": "p-2 text-sm gap-2",
          "itemLeadingIcon": "size-5",
          "itemLeadingAvatarSize": "2xs",
          "itemTrailingIcon": "size-5",
          "itemTrailingKbds": "gap-1",
          "itemTrailingKbdsSize": "md"
        },
        "xl": {
          "label": "p-2 text-base gap-2",
          "item": "p-2 text-base gap-2",
          "itemLeadingIcon": "size-6",
          "itemLeadingAvatarSize": "xs",
          "itemTrailingIcon": "size-6",
          "itemTrailingKbds": "gap-1",
          "itemTrailingKbdsSize": "lg"
        }
      }
    },
    "compoundVariants": [
      {
        "color": "primary",
        "active": false,
        "class": {
          "item": "text-primary data-highlighted:text-primary data-highlighted:before:bg-primary/10 data-[state=open]:before:bg-primary/10",
          "itemLeadingIcon": "text-primary/75 group-data-highlighted:text-primary group-data-[state=open]:text-primary"
        }
      },
      {
        "color": "secondary",
        "active": false,
        "class": {
          "item": "text-secondary data-highlighted:text-secondary data-highlighted:before:bg-secondary/10 data-[state=open]:before:bg-secondary/10",
          "itemLeadingIcon": "text-secondary/75 group-data-highlighted:text-secondary group-data-[state=open]:text-secondary"
        }
      },
      {
        "color": "success",
        "active": false,
        "class": {
          "item": "text-success data-highlighted:text-success data-highlighted:before:bg-success/10 data-[state=open]:before:bg-success/10",
          "itemLeadingIcon": "text-success/75 group-data-highlighted:text-success group-data-[state=open]:text-success"
        }
      },
      {
        "color": "info",
        "active": false,
        "class": {
          "item": "text-info data-highlighted:text-info data-highlighted:before:bg-info/10 data-[state=open]:before:bg-info/10",
          "itemLeadingIcon": "text-info/75 group-data-highlighted:text-info group-data-[state=open]:text-info"
        }
      },
      {
        "color": "warning",
        "active": false,
        "class": {
          "item": "text-warning data-highlighted:text-warning data-highlighted:before:bg-warning/10 data-[state=open]:before:bg-warning/10",
          "itemLeadingIcon": "text-warning/75 group-data-highlighted:text-warning group-data-[state=open]:text-warning"
        }
      },
      {
        "color": "error",
        "active": false,
        "class": {
          "item": "text-error data-highlighted:text-error data-highlighted:before:bg-error/10 data-[state=open]:before:bg-error/10",
          "itemLeadingIcon": "text-error/75 group-data-highlighted:text-error group-data-[state=open]:text-error"
        }
      },
      {
        "color": "primary",
        "active": true,
        "class": {
          "item": "text-primary before:bg-primary/10",
          "itemLeadingIcon": "text-primary"
        }
      },
      {
        "color": "secondary",
        "active": true,
        "class": {
          "item": "text-secondary before:bg-secondary/10",
          "itemLeadingIcon": "text-secondary"
        }
      },
      {
        "color": "success",
        "active": true,
        "class": {
          "item": "text-success before:bg-success/10",
          "itemLeadingIcon": "text-success"
        }
      },
      {
        "color": "info",
        "active": true,
        "class": {
          "item": "text-info before:bg-info/10",
          "itemLeadingIcon": "text-info"
        }
      },
      {
        "color": "warning",
        "active": true,
        "class": {
          "item": "text-warning before:bg-warning/10",
          "itemLeadingIcon": "text-warning"
        }
      },
      {
        "color": "error",
        "active": true,
        "class": {
          "item": "text-error before:bg-error/10",
          "itemLeadingIcon": "text-error"
        }
      }
    ],
    "defaultVariants": {
      "size": "md"
    }
  };
  const _sfc_main$7 = {
    __name: "ContextMenu",
    props: {
      size: {
        type: null,
        required: false
      },
      items: {
        type: null,
        required: false
      },
      checkedIcon: {
        type: String,
        required: false
      },
      loadingIcon: {
        type: String,
        required: false
      },
      externalIcon: {
        type: [
          Boolean,
          String
        ],
        required: false,
        default: true
      },
      content: {
        type: Object,
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
      labelKey: {
        type: null,
        required: false,
        default: "label"
      },
      disabled: {
        type: Boolean,
        required: false
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: null,
        required: false
      },
      modal: {
        type: Boolean,
        required: false,
        default: true
      }
    },
    emits: [
      "update:open"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emits = __emit;
      const slots = useSlots();
      const appConfig = useAppConfig();
      const rootProps = useForwardPropsEmits(reactivePick(props, "modal"), emits);
      const contentProps = toRef(() => props.content);
      const proxySlots = omit(slots, [
        "default"
      ]);
      const ui = computed(() => {
        var _a;
        return tv({
          extend: tv(theme),
          ...((_a = appConfig.ui) == null ? void 0 : _a.contextMenu) || {}
        })({
          size: props.size
        });
      });
      return (_ctx, _cache) => {
        return openBlock(), createBlock(unref(_sfc_main$k), normalizeProps(guardReactiveProps(unref(rootProps))), {
          default: withCtx(() => {
            var _a;
            return [
              !!slots.default ? (openBlock(), createBlock(unref(_sfc_main$j), {
                key: 0,
                "as-child": "",
                disabled: __props.disabled,
                class: normalizeClass(props.class)
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 8, [
                "disabled",
                "class"
              ])) : createCommentVNode("", true),
              createVNode(_sfc_main$8, mergeProps({
                class: ui.value.content({
                  class: [
                    !slots.default && props.class,
                    (_a = props.ui) == null ? void 0 : _a.content
                  ]
                }),
                ui: ui.value,
                "ui-override": props.ui
              }, contentProps.value, {
                items: __props.items,
                portal: __props.portal,
                "label-key": __props.labelKey,
                "checked-icon": __props.checkedIcon,
                "loading-icon": __props.loadingIcon,
                "external-icon": __props.externalIcon
              }), createSlots({
                _: 2
              }, [
                renderList(unref(proxySlots), (_, name) => {
                  return {
                    name,
                    fn: withCtx((slotData) => [
                      renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotData)))
                    ])
                  };
                })
              ]), 1040, [
                "class",
                "ui",
                "ui-override",
                "items",
                "portal",
                "label-key",
                "checked-icon",
                "loading-icon",
                "external-icon"
              ])
            ];
          }),
          _: 3
        }, 16);
      };
    }
  };
  const _hoisted_1$6 = {
    class: "overflow-y-auto divide-y divide-(--ui-border)"
  };
  const _hoisted_2$2 = {
    class: "flex items-center gap-1.5 w-full"
  };
  const _sfc_main$6 = defineComponent({
    __name: "FileExplorer",
    emits: [
      "delete",
      "rename",
      "reset"
    ],
    setup(__props, { emit: __emit }) {
      const volumeStore2 = useVolumeStore();
      const emit = __emit;
      const selectedFilePath = ref(void 0);
      watch(selectedFilePath, (value) => {
        volumeStore2.activeViewEntryRelativePath = (value == null ? void 0 : value.value) ?? null;
      });
      function recursiveTreeNodeWalkAndInsert(trees, entry, rootPath) {
        const relativePath = rootPath ? path.relative(rootPath, entry.relative_path) : entry.relative_path;
        const parts = relativePath.split("/");
        const currentPart = parts.shift();
        const isFile = parts.length === 0;
        if (isFile) {
          trees.push({
            label: currentPart,
            value: entry.relative_path,
            icon: `vscode-icons:file-type-${entry.relative_path === "main.css" ? "tailwind" : path.extname(entry.relative_path).replace(".", "")}`,
            slot: "tree-file",
            entry
          });
          return;
        }
        let tree = trees.find((tree2) => tree2.label === currentPart);
        if (!tree) {
          tree = {
            label: currentPart,
            children: [],
            onSelect: (e) => {
              e.preventDefault();
            }
          };
          trees.push(tree);
        }
        recursiveTreeNodeWalkAndInsert(tree.children || (tree.children = []), entry, rootPath ? path.join(rootPath, currentPart || "") : currentPart || "");
      }
      const files = computed(() => {
        let trees = [];
        volumeStore2.data.entries.forEach((entry) => {
          if (entry.hidden) {
            return;
          }
          recursiveTreeNodeWalkAndInsert(trees, entry);
        });
        trees.sort((a, b) => {
          if (a.children && !b.children) {
            return -1;
          }
          if (!a.children && b.children) {
            return 1;
          }
          return a.label && b.label ? a.label.localeCompare(b.label) : 0;
        });
        return trees;
      });
      watch(() => volumeStore2.activeViewEntryRelativePath, (value) => {
        if (!value) {
          selectedFilePath.value = void 0;
          return;
        }
        switchToEntry(value);
      });
      function switchToEntry(value) {
        const walk = (tree) => {
          if (tree.value === value) {
            selectedFilePath.value = tree;
            return true;
          }
          if (tree.children) {
            for (const child of tree.children) {
              if (walk(child)) {
                return true;
              }
            }
          }
          return false;
        };
        for (const tree of files.value) {
          if (walk(tree)) {
            break;
          }
        }
      }
      onMounted(() => {
        if (volumeStore2.activeViewEntryRelativePath) {
          switchToEntry(volumeStore2.activeViewEntryRelativePath);
        }
      });
      return (_ctx, _cache) => {
        const _component_UIcon = _sfc_main$e;
        const _component_UContextMenu = _sfc_main$7;
        const _component_UTree = _sfc_main$9;
        return openBlock(), createElementBlock("div", _hoisted_1$6, [
          createVNode(_component_UTree, {
            items: files.value,
            modelValue: selectedFilePath.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedFilePath.value = $event)
          }, {
            "tree-file": withCtx(({ item }) => [
              createVNode(_component_UContextMenu, {
                items: [
                  {
                    label: "Reset",
                    icon: "lucide:file-minus-2",
                    disabled: item.entry.relative_path !== "main.css",
                    onSelect: () => {
                      emit("reset", item.entry);
                    }
                  },
                  {
                    label: "Rename",
                    icon: "i-lucide-edit",
                    disabled: item.entry.relative_path === "main.css",
                    onSelect: () => {
                      emit("rename", item.entry);
                    }
                  },
                  {
                    label: "Delete",
                    icon: "i-lucide-trash-2",
                    disabled: item.entry.relative_path === "main.css",
                    onSelect: () => {
                      emit("delete", item.entry);
                    }
                  }
                ]
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2$2, [
                    item.icon ? (openBlock(), createBlock(_component_UIcon, {
                      key: 0,
                      name: item.icon,
                      class: "shrink-0 size-5"
                    }, null, 8, [
                      "name"
                    ])) : createCommentVNode("", true),
                    createTextVNode(" " + toDisplayString(item.label), 1)
                  ])
                ]),
                _: 2
              }, 1032, [
                "items"
              ])
            ]),
            _: 1
          }, 8, [
            "items",
            "modelValue"
          ])
        ]);
      };
    }
  });
  const _hoisted_1$5 = {
    class: "flex-1 overflow-y-auto"
  };
  const _sfc_main$5 = defineComponent({
    __name: "FileEditor",
    props: {
      entry: {}
    },
    emits: [
      "close",
      "save",
      "delete",
      "reset"
    ],
    setup(__props, { emit: __emit }) {
      const volumeStore2 = useVolumeStore();
      const settingsStore = useSettingsStore();
      const colorMode = useColorMode();
      const props = __props;
      const emit = __emit;
      const MONACO_EDITOR_OPTIONS = {
        automaticLayout: true,
        formatOnType: false,
        formatOnPaste: false,
        fontSize: 14
      };
      const editorElementRef = shallowRef();
      function handleEditorMount(editor, monaco) {
        monaco.languages.css.cssDefaults.setOptions(Object.assign(monaco.languages.css.cssDefaults.options, {
          data: {
            useDefaultDataProvider: true,
            dataProviders: {
              tailwindcss: {
                version: 1.1,
                atDirectives: [
                  {
                    name: "@theme",
                    status: "standard",
                    description: wp.i18n.__("Theme variables are special CSS variables defined using the `@theme` directive that influence which utility classes exist in your project.", "windpress"),
                    references: [
                      {
                        name: wp.i18n.__("Docs: Theme variables", "windpress"),
                        url: "https://tailwindcss.com/docs/theme"
                      }
                    ]
                  },
                  {
                    name: "@plugin",
                    status: "standard",
                    description: wp.i18n.__("Use the `@plugin` directive to load a legacy JavaScript-based plugin.", "windpress"),
                    references: [
                      {
                        name: wp.i18n.__("Docs: Functions & Directives", "windpress"),
                        url: "https://tailwindcss.com/docs/functions-and-directives#plugin-directive"
                      },
                      {
                        name: wp.i18n.__("Docs: Tailwind CSS plugins", "windpress"),
                        url: "https://wind.press/docs/configuration/file-main-css#tailwind-css-plugins"
                      }
                    ]
                  },
                  {
                    name: "@config",
                    status: "standard",
                    description: wp.i18n.__("Use the `@config` directive to load a legacy JavaScript-based configuration file.", "windpress"),
                    references: [
                      {
                        name: wp.i18n.__("Docs: Functions & Directives", "windpress"),
                        url: "https://tailwindcss.com/docs/functions-and-directives#config-directive"
                      },
                      {
                        name: wp.i18n.__("Docs: Tailwind CSS configuration", "windpress"),
                        url: "https://wind.press/docs/configuration/file-main-css#tailwind-css-configuration"
                      }
                    ]
                  },
                  {
                    name: "@tailwind",
                    status: "standard",
                    description: wp.i18n.__("Use the `@tailwind` directive to insert Tailwind's `base`, `components`, `utilities` and `variants` styles into your CSS.", "windpress"),
                    references: [
                      {
                        name: wp.i18n.__("Docs: Tailwind CSS functions & directives", "windpress"),
                        url: "https://v3.tailwindcss.com/docs/functions-and-directives#tailwind"
                      }
                    ]
                  },
                  {
                    name: "@apply",
                    status: "standard",
                    description: wp.i18n.__("Use the `@apply` directive to inline any existing utility classes into your own custom CSS.", "windpress"),
                    references: [
                      {
                        name: wp.i18n.__("Docs: Tailwind CSS functions & directives", "windpress"),
                        url: "https://tailwindcss.com/docs/functions-and-directives#apply-directive"
                      }
                    ]
                  },
                  {
                    name: "@utility",
                    status: "standard",
                    description: wp.i18n.__("Use the `@utility` directive to add custom utilities to your project that work with variants like `hover`, `focus` and `lg``.", "windpress"),
                    references: [
                      {
                        name: wp.i18n.__("Docs: Tailwind CSS functions & directives", "windpress"),
                        url: "https://tailwindcss.com/docs/functions-and-directives#utility-directive"
                      }
                    ]
                  },
                  {
                    name: "@custom-variant",
                    status: "standard",
                    description: wp.i18n.__("Use the `@custom-variant` directive to add a custom variant in your project.", "windpress"),
                    references: [
                      {
                        name: wp.i18n.__("Docs: Tailwind CSS functions & directives", "windpress"),
                        url: "https://tailwindcss.com/docs/functions-and-directives#custom-variant-directive"
                      }
                    ]
                  },
                  {
                    name: "@variant",
                    status: "standard",
                    description: wp.i18n.__("Use the `@variant` directive to apply a Tailwind variant to styles in your CSS.", "windpress"),
                    references: [
                      {
                        name: wp.i18n.__("Docs: Tailwind CSS functions & directives", "windpress"),
                        url: "https://tailwindcss.com/docs/functions-and-directives#variant-directive"
                      }
                    ]
                  },
                  {
                    name: "@source",
                    status: "standard",
                    description: wp.i18n.__("Use the `@source` directive to scan additional source files.", "windpress"),
                    references: [
                      {
                        name: wp.i18n.__("Docs: Scanning additional Sources", "windpress"),
                        url: "https://wind.press/docs/configuration/file-main-css#scanning-additional-sources"
                      }
                    ]
                  }
                ]
              }
            }
          }
        }));
        editorElementRef.value = editor;
        monaco.languages.registerCompletionItemProvider("css", {
          async provideCompletionItems(model, position) {
            const wordInfo = model.getWordUntilPosition(position);
            let variables = [];
            if (Number(settingsStore.virtualOptions("general.tailwindcss.version", 4).value) === 4) {
              variables = (await getVariableList(await loadDesignSystem({
                volume: volumeStore2.getKVEntries()
              }))).map((entry) => {
                return {
                  kind: entry.key.includes("--color") ? monaco.languages.CompletionItemKind.Color : monaco.languages.CompletionItemKind.Variable,
                  label: entry.key,
                  insertText: entry.key,
                  detail: entry.value,
                  range: {
                    startLineNumber: position.lineNumber,
                    startColumn: wordInfo.startColumn,
                    endLineNumber: position.lineNumber,
                    endColumn: wordInfo.endColumn
                  },
                  sortText: naturalExpand(entry.index)
                };
              });
            }
            return {
              suggestions: variables
            };
          }
        });
        monaco.editor.addEditorAction({
          id: "save",
          label: wp.i18n.__("Save", "windpress"),
          keybindings: [
            monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS
          ],
          run: () => {
            emit("save");
          }
        });
      }
      return (_ctx, _cache) => {
        const _component_UButton = _sfc_main$n;
        const _component_UTooltip = _sfc_main$m;
        const _component_UIcon = _sfc_main$e;
        const _component_UBadge = _sfc_main$o;
        const _component_UDashboardNavbar = _sfc_main$p;
        const _component_vue_monaco_editor = resolveComponent("vue-monaco-editor");
        const _component_UDashboardPanel = _sfc_main$l;
        return openBlock(), createBlock(_component_UDashboardPanel, {
          id: "explorer-2",
          class: "min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]"
        }, {
          default: withCtx(() => {
            var _a;
            return [
              createVNode(_component_UDashboardNavbar, {
                title: (_a = _ctx.entry) == null ? void 0 : _a.relative_path,
                toggle: false
              }, {
                leading: withCtx(() => [
                  createVNode(_component_UTooltip, {
                    text: _ctx.i18n.__("Close", "windpress")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UButton, {
                        icon: "i-lucide-x",
                        color: "neutral",
                        variant: "ghost",
                        class: "-ms-1.5",
                        onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "text"
                  ])
                ]),
                title: withCtx(() => {
                  var _a2, _b, _c;
                  return [
                    createVNode(_component_UIcon, {
                      name: `vscode-icons:file-type-${((_a2 = _ctx.entry) == null ? void 0 : _a2.relative_path) === "main.css" ? "tailwind" : unref(path).extname(((_b = _ctx.entry) == null ? void 0 : _b.relative_path) ?? "").replace(".", "")}`,
                      class: "size-5"
                    }, null, 8, [
                      "name"
                    ]),
                    createTextVNode(" " + toDisplayString((_c = _ctx.entry) == null ? void 0 : _c.relative_path) + " ", 1),
                    props.entry.readonly ? (openBlock(), createBlock(_component_UBadge, {
                      key: 0,
                      label: _ctx.i18n.__("read-only", "windpress"),
                      color: "warning",
                      variant: "outline"
                    }, null, 8, [
                      "label"
                    ])) : createCommentVNode("", true)
                  ];
                }),
                right: withCtx(() => {
                  var _a2, _b, _c, _d, _e, _f;
                  return [
                    ((_a2 = _ctx.entry) == null ? void 0 : _a2.relative_path) !== "main.css" && !(Number(unref(settingsStore).virtualOptions("general.tailwindcss.version", 4).value) === 3 && (((_b = _ctx.entry) == null ? void 0 : _b.relative_path) === "tailwind.config.js" || ((_c = _ctx.entry) == null ? void 0 : _c.relative_path) === "wizard.js")) ? (openBlock(), createBlock(_component_UTooltip, {
                      key: 0,
                      text: _ctx.i18n.__("Delete", "windpress")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UButton, {
                          icon: "i-lucide-trash",
                          color: "neutral",
                          variant: "ghost",
                          onClick: _cache[1] || (_cache[1] = ($event) => emit("delete", _ctx.entry))
                        })
                      ]),
                      _: 1
                    }, 8, [
                      "text"
                    ])) : createCommentVNode("", true),
                    ((_d = _ctx.entry) == null ? void 0 : _d.relative_path) === "main.css" || Number(unref(settingsStore).virtualOptions("general.tailwindcss.version", 4).value) === 3 && (((_e = _ctx.entry) == null ? void 0 : _e.relative_path) === "tailwind.config.js" || ((_f = _ctx.entry) == null ? void 0 : _f.relative_path) === "wizard.js") ? (openBlock(), createBlock(_component_UTooltip, {
                      key: 1,
                      text: _ctx.i18n.__("Reset to default", "windpress")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UButton, {
                          icon: "lucide:file-minus-2",
                          color: "neutral",
                          variant: "ghost",
                          onClick: _cache[2] || (_cache[2] = ($event) => emit("reset", _ctx.entry))
                        })
                      ]),
                      _: 1
                    }, 8, [
                      "text"
                    ])) : createCommentVNode("", true),
                    createVNode(_component_UTooltip, {
                      text: _ctx.i18n.__("Save", "windpress")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UButton, {
                          icon: "i-lucide-save",
                          color: "primary",
                          variant: "subtle",
                          onClick: _cache[3] || (_cache[3] = ($event) => emit("save"))
                        })
                      ]),
                      _: 1
                    }, 8, [
                      "text"
                    ])
                  ];
                }),
                _: 1
              }, 8, [
                "title"
              ]),
              createBaseVNode("div", _hoisted_1$5, [
                createVNode(_component_vue_monaco_editor, {
                  value: props.entry.content,
                  "onUpdate:value": _cache[4] || (_cache[4] = ($event) => props.entry.content = $event),
                  language: props.entry.relative_path.endsWith(".css") ? "css" : "javascript",
                  saveViewState: false,
                  options: {
                    ...MONACO_EDITOR_OPTIONS,
                    readOnly: props.entry.readonly
                  },
                  onMount: handleEditorMount,
                  theme: unref(colorMode) === "dark" ? "vs-dark" : "vs"
                }, null, 8, [
                  "value",
                  "language",
                  "options",
                  "theme"
                ])
              ])
            ];
          }),
          _: 1
        });
      };
    }
  });
  const _hoisted_1$4 = {
    class: "flex"
  };
  const _hoisted_2$1 = [
    "innerHTML"
  ];
  const _hoisted_3$1 = {
    class: "flex gap-2"
  };
  const _sfc_main$4 = defineComponent({
    __name: "ConfirmFileActionModal",
    props: {
      filePath: {},
      fileContent: {},
      actionYes: {},
      actionNo: {}
    },
    emits: [
      "close"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const colorMode = useColorMode();
      let shikiHighlighter = ref(null);
      (async () => {
        shikiHighlighter.value = await createHighlighterCore({
          themes: [
            __vitePreload(() => import("../chunks/dark-plus-DP7-e98C.min.js"), true ? [] : void 0, import.meta.url),
            __vitePreload(() => import("../chunks/light-plus-D6etIKYp.min.js"), true ? [] : void 0, import.meta.url)
          ],
          langs: [
            __vitePreload(() => import("../chunks/css-NxIBojpu.min.js"), true ? [] : void 0, import.meta.url),
            __vitePreload(() => import("../chunks/javascript-BYtKZKC7.min.js"), true ? [] : void 0, import.meta.url)
          ],
          engine: createOnigurumaEngine(__vitePreload(() => import("../chunks/wasm-CmTHlobv.min.js"), true ? [] : void 0, import.meta.url))
        });
      })();
      const snippet = computedAsync(async () => {
        if (!props.fileContent || !shikiHighlighter.value) {
          return;
        }
        const fileExt = path.extname(props.filePath).replace(".", "");
        return shikiHighlighter.value.codeToHtml(props.fileContent, {
          lang: fileExt === "css" ? "css" : "javascript",
          theme: colorMode.value === "dark" ? "dark-plus" : "light-plus"
        });
      });
      const emit = __emit;
      return (_ctx, _cache) => {
        const _component_UButton = _sfc_main$n;
        const _component_UModal = _sfc_main$q;
        return openBlock(), createBlock(_component_UModal, {
          close: {
            onClick: () => emit("close", false)
          }
        }, createSlots({
          title: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.i18n.sprintf(_ctx.i18n.__('Are you sure you want to %s the "%s" file?', "windpress"), _ctx.actionYes, _ctx.filePath)), 1)
          ]),
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_3$1, [
              createVNode(_component_UButton, {
                color: "neutral",
                variant: "soft",
                label: _ctx.i18n.__("cancel", "windpress"),
                onClick: _cache[0] || (_cache[0] = ($event) => emit("close", false)),
                class: "capitalize"
              }, null, 8, [
                "label"
              ]),
              createVNode(_component_UButton, {
                color: "error",
                variant: "soft",
                label: _ctx.actionYes,
                onClick: _cache[1] || (_cache[1] = ($event) => emit("close", true)),
                class: "capitalize"
              }, null, 8, [
                "label"
              ])
            ])
          ]),
          _: 2
        }, [
          _ctx.fileContent ? {
            name: "body",
            fn: withCtx(() => [
              (openBlock(), createBlock(Suspense, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$4, [
                    createBaseVNode("div", {
                      innerHTML: unref(snippet),
                      class: "flex [&>pre]:p-4 [&>pre]:mr-6"
                    }, null, 8, _hoisted_2$1)
                  ])
                ]),
                _: 1
              }))
            ]),
            key: "0"
          } : void 0
        ]), 1032, [
          "close"
        ]);
      };
    }
  });
  const _hoisted_1$3 = {
    class: "flex flex-col gap-4 text-(--ui-text)"
  };
  const _hoisted_2 = {
    class: "font-bold uppercase my-2"
  };
  const _hoisted_3 = {
    class: "w-full"
  };
  const _hoisted_4 = {
    class: "font-semibold w-1/3"
  };
  const _hoisted_5 = {
    class: ""
  };
  const _hoisted_6 = {
    class: "font-semibold w-1/5"
  };
  const _hoisted_7 = {
    class: ""
  };
  const _hoisted_8 = {
    class: "font-semibold w-1/5"
  };
  const _hoisted_9 = {
    class: ""
  };
  const _hoisted_10 = {
    class: "font-semibold w-1/5"
  };
  const _hoisted_11 = {
    class: ""
  };
  const _hoisted_12 = {
    class: "flex gap-2"
  };
  const _sfc_main$3 = defineComponent({
    __name: "ConfirmVolumeImportModal",
    props: {
      data: {}
    },
    emits: [
      "close"
    ],
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      return (_ctx, _cache) => {
        const _component_UButton = _sfc_main$n;
        const _component_UModal = _sfc_main$q;
        return openBlock(), createBlock(_component_UModal, {
          close: {
            onClick: () => emit("close", false)
          }
        }, {
          title: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.i18n.__("Import SFS volume", "windpress")), 1)
          ]),
          body: withCtx(() => [
            createBaseVNode("div", _hoisted_1$3, [
              createBaseVNode("div", null, [
                createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.i18n.__("File info", "windpress")), 1),
                createBaseVNode("table", _hoisted_3, [
                  createBaseVNode("tbody", null, [
                    createBaseVNode("tr", null, [
                      createBaseVNode("td", _hoisted_4, toDisplayString(_ctx.i18n.__("WindPress version", "windpress")), 1),
                      _cache[2] || (_cache[2] = createBaseVNode("td", {
                        class: ""
                      }, ":", -1)),
                      createBaseVNode("td", _hoisted_5, toDisplayString(props.data._version), 1)
                    ]),
                    createBaseVNode("tr", null, [
                      createBaseVNode("td", _hoisted_6, toDisplayString(_ctx.i18n.__("WP Version", "windpress")), 1),
                      _cache[3] || (_cache[3] = createBaseVNode("td", {
                        class: ""
                      }, ":", -1)),
                      createBaseVNode("td", _hoisted_7, toDisplayString(props.data._wp_version), 1)
                    ]),
                    createBaseVNode("tr", null, [
                      createBaseVNode("td", _hoisted_8, toDisplayString(_ctx.i18n.__("Exported on", "windpress")), 1),
                      _cache[4] || (_cache[4] = createBaseVNode("td", {
                        class: ""
                      }, ":", -1)),
                      createBaseVNode("td", _hoisted_9, toDisplayString(unref(dayjs)(props.data._timestamp).format("YYYY-MM-DD HH:mm:ss")), 1)
                    ]),
                    createBaseVNode("tr", null, [
                      createBaseVNode("td", _hoisted_10, toDisplayString(_ctx.i18n.__("Entries", "windpress")), 1),
                      _cache[5] || (_cache[5] = createBaseVNode("td", {
                        class: ""
                      }, ":", -1)),
                      createBaseVNode("td", _hoisted_11, toDisplayString(props.data.entries.length), 1)
                    ])
                  ])
                ])
              ]),
              createTextVNode(" " + toDisplayString(_ctx.i18n.__("This will overwrite all existing files. Are you sure you want to continue?", "windpress")), 1)
            ])
          ]),
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_12, [
              createVNode(_component_UButton, {
                color: "neutral",
                variant: "soft",
                label: _ctx.i18n.__("cancel", "windpress"),
                onClick: _cache[0] || (_cache[0] = ($event) => emit("close", false)),
                class: "capitalize"
              }, null, 8, [
                "label"
              ]),
              createVNode(_component_UButton, {
                color: "warning",
                variant: "soft",
                label: _ctx.i18n.__("Yes, continue", "windpress"),
                onClick: _cache[1] || (_cache[1] = ($event) => emit("close", true)),
                class: "capitalize"
              }, null, 8, [
                "label"
              ])
            ])
          ]),
          _: 1
        }, 8, [
          "close"
        ]);
      };
    }
  });
  const _hoisted_1$2 = {
    class: "flex gap-2"
  };
  const _sfc_main$2 = defineComponent({
    __name: "NewFileFormModal",
    emits: [
      "close"
    ],
    setup(__props, { emit: __emit }) {
      const volumeStore2 = useVolumeStore();
      const emit = __emit;
      const filePath = ref("");
      const error = ref(false);
      watch(() => filePath.value, () => {
        error.value = false;
      });
      function confirm() {
        error.value = false;
        if (!filePath.value) {
          error.value = wp.i18n.__("Filename is required", "windpress");
          return;
        }
        if (!filePath.value.endsWith(".css") && !filePath.value.endsWith(".js")) {
          error.value = wp.i18n.__("File extension must be .css or .js", "windpress");
          return;
        }
        if (!/^[a-zA-Z0-9_.\-\/]+$/.test(filePath.value)) {
          error.value = wp.i18n.__("Only alphanumeric, dash, underscore, forward slash, and dot are allowed", "windpress");
          return;
        }
        if (volumeStore2.data.entries.find((entry) => entry.relative_path === `${filePath.value}` && entry.hidden !== true)) {
          error.value = wp.i18n.sprintf(wp.i18n.__('A file named "%s" already exists', "windpress"), filePath.value);
          return;
        }
        emit("close", filePath.value);
      }
      return (_ctx, _cache) => {
        const _component_UInput = _sfc_main$s;
        const _component_UFormField = _sfc_main$r;
        const _component_UButton = _sfc_main$n;
        const _component_UModal = _sfc_main$q;
        return openBlock(), createBlock(_component_UModal, {
          close: {
            onClick: () => emit("close")
          }
        }, {
          title: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.i18n.__("Create New File", "windpress")), 1)
          ]),
          body: withCtx(() => [
            createVNode(_component_UFormField, {
              label: "Filename",
              required: "",
              description: _ctx.i18n.__("Filename may include a path. (css or js)", "windpress"),
              error: error.value
            }, {
              default: withCtx(() => [
                createVNode(_component_UInput, {
                  modelValue: filePath.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filePath.value = $event),
                  placeholder: "theme/color.css",
                  class: "w-full"
                }, null, 8, [
                  "modelValue"
                ])
              ]),
              _: 1
            }, 8, [
              "description",
              "error"
            ])
          ]),
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_1$2, [
              createVNode(_component_UButton, {
                color: "neutral",
                variant: "soft",
                label: _ctx.i18n.__("cancel", "windpress"),
                onClick: _cache[1] || (_cache[1] = ($event) => emit("close")),
                class: "capitalize"
              }, null, 8, [
                "label"
              ]),
              createVNode(_component_UButton, {
                color: "primary",
                variant: "soft",
                label: _ctx.i18n.__("Submit", "windpress"),
                onClick: confirm,
                class: "capitalize"
              }, null, 8, [
                "label"
              ])
            ])
          ]),
          _: 1
        }, 8, [
          "close"
        ]);
      };
    }
  });
  const _hoisted_1$1 = {
    class: "flex gap-2"
  };
  const _sfc_main$1 = defineComponent({
    __name: "RenameFileFormModal",
    props: {
      filePath: {}
    },
    emits: [
      "close"
    ],
    setup(__props, { emit: __emit }) {
      const volumeStore2 = useVolumeStore();
      const emit = __emit;
      const props = __props;
      const filePath = ref(props.filePath);
      const error = ref(false);
      watch(() => filePath.value, () => {
        error.value = false;
      });
      function confirm() {
        error.value = false;
        if (!filePath.value) {
          error.value = wp.i18n.__("Filename is required", "windpress");
          return;
        }
        if (!filePath.value.endsWith(".css") && !filePath.value.endsWith(".js")) {
          error.value = wp.i18n.__("File extension must be .css or .js", "windpress");
          return;
        }
        if (!/^[a-zA-Z0-9_.\-\/]+$/.test(filePath.value)) {
          error.value = wp.i18n.__("Only alphanumeric, dash, underscore, forward slash, and dot are allowed", "windpress");
          return;
        }
        if (volumeStore2.data.entries.find((entry) => entry.relative_path === `${filePath.value}` && entry.hidden !== true)) {
          error.value = wp.i18n.sprintf(wp.i18n.__('A file named "%s" already exists', "windpress"), filePath.value);
          return;
        }
        emit("close", filePath.value);
      }
      return (_ctx, _cache) => {
        const _component_UInput = _sfc_main$s;
        const _component_UFormField = _sfc_main$r;
        const _component_UButton = _sfc_main$n;
        const _component_UModal = _sfc_main$q;
        return openBlock(), createBlock(_component_UModal, {
          close: {
            onClick: () => emit("close")
          }
        }, {
          title: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.i18n.__("Rename File", "windpress")), 1)
          ]),
          body: withCtx(() => [
            createVNode(_component_UFormField, {
              label: "Old Filename",
              description: _ctx.i18n.__("The previous filename", "windpress"),
              class: "mb-2"
            }, {
              default: withCtx(() => [
                createVNode(_component_UInput, {
                  value: props.filePath,
                  disabled: true,
                  class: "w-full"
                }, null, 8, [
                  "value"
                ])
              ]),
              _: 1
            }, 8, [
              "description"
            ]),
            createVNode(_component_UFormField, {
              label: "New Filename",
              required: "",
              description: _ctx.i18n.__("Filename may include a path. (css or js)", "windpress"),
              error: error.value
            }, {
              default: withCtx(() => [
                createVNode(_component_UInput, {
                  modelValue: filePath.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filePath.value = $event),
                  placeholder: "theme/color.css",
                  class: "w-full"
                }, null, 8, [
                  "modelValue"
                ])
              ]),
              _: 1
            }, 8, [
              "description",
              "error"
            ])
          ]),
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_1$1, [
              createVNode(_component_UButton, {
                color: "neutral",
                variant: "soft",
                label: _ctx.i18n.__("cancel", "windpress"),
                onClick: _cache[1] || (_cache[1] = ($event) => emit("close")),
                class: "capitalize"
              }, null, 8, [
                "label"
              ]),
              createVNode(_component_UButton, {
                color: "primary",
                variant: "soft",
                label: _ctx.i18n.__("Submit", "windpress"),
                onClick: confirm,
                class: "capitalize"
              }, null, 8, [
                "label"
              ])
            ])
          ]),
          _: 1
        }, 8, [
          "close"
        ]);
      };
    }
  });
  const volumeStore = useVolumeStore();
  const toast = useToast();
  const overlay = useOverlay();
  async function deleteFile(entry) {
    if (entry.readonly) {
      toast.add({
        title: wp.i18n.__("Error", "windpress"),
        description: wp.i18n.sprintf(wp.i18n.__('File "%s" is read-only and not deletable', "windpress"), entry.relative_path),
        color: "error",
        icon: "i-lucide-trash"
      });
      return;
    }
    if (entry.relative_path === "main.css") {
      toast.add({
        title: wp.i18n.__("Error", "windpress"),
        description: wp.i18n.sprintf(wp.i18n.__('File "%s" is required for the WindPress to work and not deletable', "windpress"), entry.relative_path),
        color: "error",
        icon: "i-lucide-trash"
      });
      return;
    }
    const deleteModal = overlay.create(_sfc_main$4, {
      destroyOnClose: true,
      props: {
        filePath: entry.relative_path,
        fileContent: entry.content,
        actionYes: wp.i18n.__("delete", "windpress")
      }
    });
    const shouldDelete = await deleteModal.open().result;
    if (!shouldDelete) {
      toast.add({
        title: wp.i18n.__("Canceled", "windpress"),
        description: wp.i18n.sprintf(wp.i18n.__('File "%s" is not deleted', "windpress"), entry.relative_path),
        color: "info",
        icon: "i-lucide-trash"
      });
      return;
    }
    volumeStore.softDeleteEntry(entry);
    toast.add({
      title: wp.i18n.__("Success", "windpress"),
      description: wp.i18n.sprintf(wp.i18n.__('File "%s" deleted', "windpress"), entry.relative_path),
      color: "success",
      icon: "i-lucide-trash"
    });
  }
  async function resetFile(entry) {
    const resetModal = overlay.create(_sfc_main$4, {
      destroyOnClose: true,
      props: {
        filePath: entry.relative_path,
        fileContent: entry.content,
        actionYes: wp.i18n.__("reset", "windpress")
      }
    });
    const shouldReset = await resetModal.open().result;
    if (!shouldReset) {
      toast.add({
        title: wp.i18n.__("Canceled", "windpress"),
        description: wp.i18n.sprintf(wp.i18n.__('File "%s" is not reset', "windpress"), entry.relative_path),
        color: "info",
        icon: "lucide:file-minus-2"
      });
      return;
    }
    volumeStore.resetEntry(entry);
    toast.add({
      title: wp.i18n.__("Success", "windpress"),
      description: wp.i18n.sprintf(wp.i18n.__('File "%s" reset', "windpress"), entry.relative_path),
      color: "success",
      icon: "lucide:file-minus-2"
    });
    save().then(() => {
      volumeStore.doPull();
    });
  }
  async function save() {
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
    if (toast.toasts.value.find((t) => t.id === "file-editor.doSave")) {
      toast.update("file-editor.doSave", {
        ...toastData
      });
    } else {
      toast.add({
        id: "file-editor.doSave",
        ...toastData
      });
    }
    return volumeStore.doPush().then(() => {
      toast.update("file-editor.doSave", {
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
      toast.update("file-editor.doSave", {
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
  function exportVolume() {
    const data = {
      entries: volumeStore.data.entries,
      _windpress: true,
      _version: window.windpress._version,
      _wp_version: window.windpress._wp_version,
      _timestamp: (/* @__PURE__ */ new Date()).getTime(),
      _uid: nanoid(),
      _type: "sfs"
    };
    const compressed = w.compressToUint8Array(JSON.stringify(data));
    const blob = new Blob([
      compressed
    ], {
      type: "application/octet-stream"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sfs-${dayjs().format("YYYYMMDDHHmmss")}.windpress`;
    a.click();
    URL.revokeObjectURL(url);
    toast.add({
      title: wp.i18n.__("Exported", "windpress"),
      description: wp.i18n.__("SFS volume data exported", "windpress"),
      color: "success",
      icon: "i-lucide-download"
    });
  }
  async function importVolume(event) {
    const target = event.target;
    if (!target || !target.files || target.files.length === 0) {
      return;
    }
    const file = target.files[0];
    if (!file) {
      return;
    }
    if (!file.name.endsWith(".windpress")) {
      toast.add({
        title: wp.i18n.__("SFS Import", "windpress"),
        description: wp.i18n.__("Invalid file format", "windpress"),
        color: "error",
        icon: "i-lucide-upload"
      });
      return;
    }
    let data;
    try {
      data = JSON.parse(w.decompressFromUint8Array(new Uint8Array(await file.arrayBuffer())) || "{}");
      if (!data._windpress || data._type !== "sfs") {
        throw new Error(wp.i18n.__("File is not a valid WindPress file", "windpress"));
      }
    } catch (error) {
      toast.add({
        title: wp.i18n.__("SFS Import", "windpress"),
        description: error instanceof Error ? error.message : wp.i18n.__("An unknown error occurred", "windpress"),
        color: "error",
        icon: "i-lucide-upload"
      });
      return;
    }
    const importConfirmModal = overlay.create(_sfc_main$3, {
      destroyOnClose: true,
      props: {
        data
      }
    });
    const shouldImport = await importConfirmModal.open().result;
    if (!shouldImport) {
      toast.add({
        title: wp.i18n.__("Canceled", "windpress"),
        description: wp.i18n.__("SFS import canceled", "windpress"),
        color: "info",
        icon: "i-lucide-upload"
      });
      target.value = "";
      return;
    }
    toast.add({
      id: "file-import.doImport",
      title: wp.i18n.__("Importing...", "windpress"),
      description: wp.i18n.__("Please wait while we import the data.", "windpress"),
      icon: "lucide:loader-circle",
      close: false,
      duration: 0,
      color: "neutral",
      ui: {
        icon: "animate-spin"
      }
    });
    await new Promise((resolve) => setTimeout(resolve, 500));
    try {
      const entries = data.entries.map((entry) => {
        if (entry.signature && entry.handler === "internal") {
          const { signature: _signature, ...rest } = entry;
          return rest;
        }
        return entry;
      });
      volumeStore.data.entries = entries;
      toast.update("file-import.doImport", {
        title: wp.i18n.__("Success", "windpress"),
        description: wp.i18n.__("SFS data imported. Remember to save the changes.", "windpress"),
        color: "success",
        icon: "i-lucide-upload",
        duration: void 0,
        close: true,
        ui: {
          icon: void 0
        }
      });
      target.value = "";
    } catch (error) {
      toast.update("file-import.doImport", {
        title: wp.i18n.__("Error", "windpress"),
        description: error instanceof Error ? error.message : wp.i18n.__("An unknown error occurred", "windpress"),
        color: "error",
        icon: "i-lucide-upload",
        close: true,
        duration: void 0,
        ui: {
          icon: void 0
        }
      });
      target.value = "";
    }
  }
  async function addNewFile() {
    const newFileModal = overlay.create(_sfc_main$2, {
      destroyOnClose: true
    });
    const newFileName = await newFileModal.open().result;
    if (!newFileName) {
      toast.add({
        title: wp.i18n.__("Canceled", "windpress"),
        description: wp.i18n.__("New file creation canceled", "windpress"),
        color: "info",
        icon: "i-lucide-plus"
      });
      return;
    }
    try {
      volumeStore.addNewEntry(newFileName);
      toast.add({
        title: wp.i18n.__("Success", "windpress"),
        description: wp.i18n.sprintf(wp.i18n.__('File "%s" created', "windpress"), newFileName),
        color: "success",
        icon: "i-lucide-plus"
      });
    } catch (error) {
      toast.add({
        title: wp.i18n.__("Error", "windpress"),
        description: error instanceof Error ? error.message : wp.i18n.__("An unknown error occurred", "windpress"),
        color: "error",
        icon: "i-lucide-plus"
      });
    }
  }
  async function renameFile(entry) {
    const newFileName = await overlay.create(_sfc_main$1, {
      destroyOnClose: true,
      props: {
        filePath: entry.relative_path
      }
    }).open().result;
    if (!newFileName) {
      toast.add({
        title: wp.i18n.__("Canceled", "windpress"),
        description: wp.i18n.__("File rename canceled", "windpress"),
        color: "info",
        icon: "i-lucide-edit"
      });
      return;
    }
    try {
      volumeStore.renameEntry(entry, newFileName);
      toast.add({
        title: wp.i18n.__("Success", "windpress"),
        description: wp.i18n.sprintf(wp.i18n.__('File "%s" renamed to "%s"', "windpress"), entry.relative_path, newFileName),
        color: "success",
        icon: "i-lucide-edit"
      });
    } catch (error) {
      toast.add({
        title: wp.i18n.__("Error", "windpress"),
        description: error instanceof Error ? error.message : wp.i18n.__("An unknown error occurred", "windpress"),
        color: "error",
        icon: "i-lucide-edit"
      });
    }
  }
  function useFileAction() {
    return {
      deleteFile,
      resetFile,
      save,
      exportVolume,
      importVolume,
      addNewFile,
      renameFile
    };
  }
  const _hoisted_1 = {
    key: 1,
    class: "hidden lg:flex flex-1 items-center justify-center"
  };
  _sfc_main = defineComponent({
    __name: "File",
    setup(__props) {
      const volumeStore2 = useVolumeStore();
      const fileAction = useFileAction();
      const importFileField = ref(null);
      const isFilePanelOpen = computed({
        get() {
          return !!volumeStore2.activeViewEntryRelativePath;
        },
        set(value) {
          if (!value) {
            volumeStore2.activeViewEntryRelativePath = null;
          }
        }
      });
      const currentEntry = computed(() => {
        const entry = volumeStore2.data.entries.find((entry2) => entry2.relative_path === volumeStore2.activeViewEntryRelativePath);
        if (entry) {
          return entry;
        } else {
          console.error(wp.i18n.__("Entry not found: ", "windpress"), volumeStore2.activeViewEntryRelativePath);
          volumeStore2.activeViewEntryRelativePath = "main.css";
          return volumeStore2.data.entries.find((entry2) => entry2.relative_path === volumeStore2.activeViewEntryRelativePath);
        }
      });
      const breakpoints = useBreakpoints(breakpointsTailwind);
      const isMobile = breakpoints.smaller("lg");
      return (_ctx, _cache) => {
        const _component_UDashboardSidebarCollapse = _sfc_main$u;
        const _component_UButton = _sfc_main$n;
        const _component_UTooltip = _sfc_main$m;
        const _component_UDashboardNavbar = _sfc_main$p;
        const _component_UDashboardPanel = _sfc_main$l;
        const _component_UIcon = _sfc_main$e;
        const _component_USlideover = _sfc_main$t;
        return openBlock(), createElementBlock(Fragment, null, [
          createVNode(_component_UDashboardPanel, {
            id: "explorer-1",
            "default-size": 25,
            "min-size": 20,
            "max-size": 30,
            resizable: "",
            class: "min-h-[calc(100svh-var(--wp-admin--admin-bar--height))]"
          }, {
            default: withCtx(() => [
              createVNode(_component_UDashboardNavbar, {
                title: _ctx.i18n.__("Explorer", "windpress")
              }, {
                leading: withCtx(() => [
                  createVNode(_component_UDashboardSidebarCollapse)
                ]),
                right: withCtx(() => [
                  createVNode(_component_UTooltip, {
                    "delay-duration": 0,
                    text: _ctx.i18n.__("Add new file", "windpress")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UButton, {
                        color: "primary",
                        variant: "subtle",
                        icon: "i-lucide-plus",
                        onClick: _cache[0] || (_cache[0] = ($event) => unref(fileAction).addNewFile())
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "text"
                  ]),
                  createVNode(_component_UTooltip, {
                    "delay-duration": 0,
                    text: _ctx.i18n.__("Export SFS volume", "windpress")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "outline",
                        icon: "i-lucide-download",
                        onClick: _cache[1] || (_cache[1] = ($event) => unref(fileAction).exportVolume())
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "text"
                  ]),
                  createVNode(_component_UTooltip, {
                    "delay-duration": 0,
                    text: _ctx.i18n.__("Import SFS volume", "windpress")
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "outline",
                        icon: "i-lucide-upload",
                        onClick: _cache[2] || (_cache[2] = ($event) => {
                          var _a;
                          return (_a = importFileField.value) == null ? void 0 : _a.click();
                        })
                      }),
                      createBaseVNode("input", {
                        ref_key: "importFileField",
                        ref: importFileField,
                        type: "file",
                        onChange: _cache[3] || (_cache[3] = (...args) => unref(fileAction).importVolume && unref(fileAction).importVolume(...args)),
                        style: {
                          "display": "none"
                        },
                        accept: ".windpress"
                      }, null, 544)
                    ]),
                    _: 1
                  }, 8, [
                    "text"
                  ])
                ]),
                _: 1
              }, 8, [
                "title"
              ]),
              createVNode(_sfc_main$6, {
                onRename: _cache[4] || (_cache[4] = (entry) => unref(fileAction).renameFile(entry)),
                onDelete: _cache[5] || (_cache[5] = (entry) => unref(fileAction).deleteFile(entry)),
                onReset: _cache[6] || (_cache[6] = (entry) => unref(fileAction).resetFile(entry))
              })
            ]),
            _: 1
          }),
          unref(volumeStore2).activeViewEntryRelativePath ? (openBlock(), createBlock(_sfc_main$5, {
            key: 0,
            onClose: _cache[7] || (_cache[7] = ($event) => unref(volumeStore2).activeViewEntryRelativePath = null),
            entry: currentEntry.value,
            onDelete: _cache[8] || (_cache[8] = (entry) => unref(fileAction).deleteFile(entry)),
            onSave: _cache[9] || (_cache[9] = ($event) => unref(fileAction).save()),
            onReset: _cache[10] || (_cache[10] = (entry) => unref(fileAction).resetFile(entry))
          }, null, 8, [
            "entry"
          ])) : (openBlock(), createElementBlock("div", _hoisted_1, [
            createVNode(_component_UIcon, {
              name: "lucide:file-pen",
              class: "size-32 text-(--ui-text-dimmed)"
            })
          ])),
          unref(isMobile) ? (openBlock(), createBlock(_component_USlideover, {
            key: 2,
            open: isFilePanelOpen.value,
            "onUpdate:open": _cache[11] || (_cache[11] = ($event) => isFilePanelOpen.value = $event)
          }, {
            content: withCtx(() => [
              createVNode(_sfc_main$6)
            ]),
            _: 1
          }, 8, [
            "open"
          ])) : createCommentVNode("", true)
        ], 64);
      };
    }
  });
});
export {
  __tla,
  _sfc_main as default
};
