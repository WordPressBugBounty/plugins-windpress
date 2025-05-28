import { brxGlobalProp, brxIframe } from "./constant-Cbl61Ovh.js";
import { d as decodeVFSContainer } from "./vfs-CPNgPHio.js";
import "../chunks/index-BMiidzjj.min.js";
import { __tla as __tla_0 } from "./cssesc-Dk8RdEx_.js";
import "../chunks/index-BmWe5YW7.min.js";
import "../chunks/remapping.umd-Cxi90pr4.min.js";
import { __tla as __tla_1 } from "../chunks/index-CZV-ReBk.min.js";
import { g as getVariableList } from "./intellisense-CRkIqNUQ.js";
import { c as customAlphabet } from "../chunks/index.browser-BBNxE1As.min.js";
import "../chunks/redaxios.module-Dyf46lvQ.min.js";
import { l as loadDesignSystem } from "./design-system-B7GawTvC.js";
import { l as logger } from "./logger-DmkfWO2A.js";
import "./virtualRef-B1iNroDN.js";
import "../chunks/index-SE8wVPz0.min.js";
import "../chunks/isObject-DL0QMHX-.min.js";
import "../chunks/runtime-core.esm-bundler-hRyeZ98I.min.js";
import "../chunks/set-3tkuNXe_.min.js";
import "../chunks/_toKey-BRkTT7LT.min.js";
import "../chunks/get-DXxw6yUY.min.js";
import "../chunks/chunk-HTB5LLOP-DSy4Fbcf.min.js";
import "../chunks/preload-helper-BVFHbGtQ.min.js";
import "../chunks/source-map-generator-DcyUj2ax.min.js";
import "../chunks/index-BmLSY3Qb.min.js";
import "../chunks/index-0ko3lTyl.min.js";
import "../chunks/index-CvyxREt8.min.js";
import "./pre-process-DUd5xNxE.js";
Promise.all([
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
  })()
]).then(async () => {
  const randomId = () => customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 6)();
  function generateId() {
    let id = randomId();
    while (id.match(/^\d/)) {
      id = randomId();
    }
    return `windpress${id}`;
  }
  async function registerVariables() {
    brxGlobalProp.$_state.globalVariables = brxGlobalProp.$_state.globalVariables.filter((variable) => variable.category !== "windpress");
    if (!brxGlobalProp.$_state.globalVariablesCategories.find((category) => category.id === "windpress")) {
      brxGlobalProp.$_state.globalVariablesCategories.push({
        "id": "windpress",
        "name": "WindPress"
      });
    }
    const vfsContainer = brxIframe.contentWindow.document.querySelector('script#windpress\\:vfs[type="text/plain"]');
    const volume = decodeVFSContainer(vfsContainer.textContent);
    const variableLists = await getVariableList(await loadDesignSystem({
      volume
    }));
    variableLists.forEach((variable) => {
      brxGlobalProp.$_state.globalVariables.push({
        id: generateId(),
        name: variable.key.substring(2),
        value: variable.value,
        category: "windpress"
      });
    });
  }
  const channel = new BroadcastChannel("windpress");
  channel.addEventListener("message", async (e) => {
    const data = e.data;
    const source = "windpress/autocomplete";
    const task = "windpress.code-editor.saved.done";
    if (data.source === source && data.task === task) {
      setTimeout(() => {
        registerVariables();
      }, 1e3);
    }
  });
  registerVariables();
  function applyVariableOnHover() {
    var _a, _b, _c;
    if (brxGlobalProp.$_state.activePanel !== "element") {
      return;
    }
    const activeElement = (_a = brxGlobalProp.$_state) == null ? void 0 : _a.activeElement;
    const activeElementId = activeElement == null ? void 0 : activeElement.id;
    if (!activeElementId) {
      return;
    }
    const iframeWindow = (_b = brxIframe) == null ? void 0 : _b.contentWindow;
    if (!iframeWindow) {
      return;
    }
    const wrapper = document.querySelector(".expand .options-wrapper");
    const searchInput = wrapper == null ? void 0 : wrapper.querySelector(".searchable");
    const dropdown = wrapper == null ? void 0 : wrapper.querySelector(".dropdown");
    const hoveredItems = dropdown == null ? void 0 : dropdown.querySelectorAll(".variable-picker-item:not(.title)");
    const focusedInput = (_c = document.querySelector(".variable-picker-button.open")) == null ? void 0 : _c.previousElementSibling;
    if (!focusedInput || !(hoveredItems == null ? void 0 : hoveredItems.length) || !wrapper || !dropdown || !searchInput) {
      return;
    }
    const handleMouseEnter = (item) => {
      var _a2;
      const content = ((_a2 = item.querySelector("span:first-of-type")) == null ? void 0 : _a2.textContent) ?? "";
      if (!focusedInput || !content) {
        return;
      }
      triggerPreview(valueToVar(content));
    };
    const handleClick = (item) => {
      var _a2;
      const content = ((_a2 = item.querySelector("span:first-of-type")) == null ? void 0 : _a2.textContent) ?? "";
      if (!focusedInput || !content) {
        return;
      }
      const tempValue2 = valueToVar(content);
      focusedInput.value = tempValue2;
      focusedInput.click();
    };
    const observerCallBack = (entries, observer3) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains("open")) {
          const target = entry.target;
          target.click();
        }
      });
    };
    const reOpenDropdown = () => {
      triggerPreview(tempValue);
      const btn = focusedInput.nextElementSibling;
      observer2.observe(btn);
      wrapper.removeEventListener("mouseleave", reOpenDropdown);
    };
    const insertItems = (items, container) => {
      items.forEach((variable) => {
        const [key, value] = Object.entries(variable)[0] || [];
        container.insertAdjacentHTML("beforeend", `
                <li class="variable-picker-item">
                    <span>${key}</span>
                    <span class="option-value">${value}</span>
                </li>
            `);
      });
      const variableItems = customDropdown.querySelectorAll(".variable-picker-item");
      variableItems.forEach((item) => {
        item.addEventListener("mouseenter", () => handleMouseEnter(item));
        item.addEventListener("click", () => handleClick(item));
      });
    };
    const triggerPreview = (value) => {
      focusedInput.value = value;
      focusedInput.dispatchEvent(new Event("input"));
      focusedInput.focus();
    };
    const valueToVar = (value) => `var(--${value})`;
    const variables = [];
    dropdown.remove();
    hoveredItems.forEach((item) => {
      var _a2, _b2;
      const name = ((_a2 = item.querySelector("span:first-of-type")) == null ? void 0 : _a2.textContent) ?? "";
      const content = ((_b2 = item.querySelector("span.option-value")) == null ? void 0 : _b2.textContent) ?? "";
      variables.push({
        [name]: content
      });
    });
    const customDropdown = document.createElement("ul");
    customDropdown.classList.add("custom-dropdown");
    const styles = `
        max-height: calc(32px * 10);
        overflow: hidden;
        overflow-y: auto;
        position: relative;
        scrollbar-color: rgba(0, 0, 0, .4) rgba(0, 0, 0, .2);
        scrollbar-width: thin;
    `;
    customDropdown.setAttribute("style", styles);
    insertItems(variables, customDropdown);
    wrapper.appendChild(customDropdown);
    searchInput.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
    searchInput.addEventListener("input", (e) => {
      const filteredItems = variables.filter((variable) => {
        var _a2;
        const key = ((_a2 = Object.keys(variable)[0]) == null ? void 0 : _a2.toLowerCase()) ?? "";
        return key.includes(searchInput.value.toLowerCase());
      });
      customDropdown.innerHTML = "";
      insertItems(filteredItems, customDropdown);
    });
    let tempValue = (focusedInput == null ? void 0 : focusedInput.value) ?? " ";
    const observer2 = new IntersectionObserver(observerCallBack, {
      root: focusedInput.parentElement
    });
    wrapper.addEventListener("mouseleave", reOpenDropdown);
    observer2.disconnect();
  }
  const innerPanel = document.querySelector("#bricks-panel-inner:not(div.bricks-control-popup *)");
  if (!innerPanel) {
    logger("Inner panel not found, can't initialize preview of variables on hover", {
      module: "variables",
      type: "error"
    });
    throw new Error("Inner panel not found, can't initialize preview of variables on hover");
  }
  const observer = new MutationObserver(applyVariableOnHover);
  observer.observe(innerPanel, {
    subtree: true,
    childList: true,
    attributes: true
  });
  logger("Module loaded!", {
    module: "variables"
  });
});
