import { o as e } from "./chunk-CDGyQ605.js";
import { Ht as t, tt as n, vn as r } from "./runtime-core.esm-bundler-DrBnbzvJ.js";
import { t as i } from "./debounce-CDlgCFbb.js";
import { t as a } from "./preload-helper-DYZqtPCf.js";
import { t as o } from "./logger-DDCO5Eq-.js";
import { n as ee, t as s } from "./tippy.esm-BM7Jrbjn.js";
import { n as te, t as ne } from "./dist-CnmMLal_.js";
import { n as c, t as l } from "./highlight-in-textarea-Bd_TO65t.js";
import { t as u } from "./tribute.min-Bw2L9-D8.js";
import { a as d, i as f, n as p, o as re, r as ie } from "./constant-C2o27I8N.js";
(async () => {
  var ae = e(u(), 1), m = null;
  (async () => {
    m = await te({
      themes: [
        a(() => import("./dark-plus-DFfF31dX.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url),
        a(() => import("./light-plus-CPnO7ha4.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url)
      ],
      langs: [
        a(() => import("./css-CfUXbuaZ.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), [], import.meta.url)
      ],
      engine: ne(a(() => import("./wasm-DB77wBvQ.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), [], import.meta.url))
    });
  })();
  var h = document.createRange().createContextualFragment(`
    <textarea id="windpressoxygen-plc-input" class="windpressoxygen-plc-input" rows="2" spellcheck="false"></textarea>
`).querySelector(`#windpressoxygen-plc-input`), g = document.createElement(`div`);
  g.classList.add(`windpressoxygen-plc-input-container`), g.appendChild(h);
  var _ = document.createRange().createContextualFragment(`
    <div class="windpressoxygen-plc-action-container">
        <div class="actions">
        </div>
    </div>
`).querySelector(`.windpressoxygen-plc-action-container`).querySelector(`.actions`), v = document.createRange().createContextualFragment(`
    <span id="windpressoxygen-plc-class-sort" class="bricks-svg-wrapper windpressoxygen-plc-class-sort" data-balloon="Automatic Class Sorting" data-balloon-pos="bottom-right">
        <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" class="bricks-svg icon icon-tabler icons-tabler-outline icon-tabler-reorder"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M17 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M5 11v-3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v3" /><path d="M16.5 8.5l2.5 2.5l2.5 -2.5" /></svg>    
    </span>
`).querySelector(`#windpressoxygen-plc-class-sort`);
  _.appendChild(v);
  var y = r(false), b = r(null), x = p, S = ie, C = re, w = false, T = null, E = /* @__PURE__ */ new Set(), D = null;
  c(h);
  var O = [];
  wp.hooks.addAction(`windpressoxygen-autocomplete-items-refresh`, `windpressoxygen`, () => {
    O = wp.hooks.applyFilters(`windpressoxygen-autocomplete-items`, [], h.value);
  }), wp.hooks.doAction(`windpressoxygen-autocomplete-items-refresh`);
  var k = new ae.default({
    menuContainer: document.querySelector(`#app`),
    containerClass: `windpressoxygen-tribute-container`,
    autocompleteMode: true,
    menuItemLimit: 50,
    noMatchTemplate: ``,
    values: async function(e2, t2) {
      t2(await wp.hooks.applyFilters(`windpressoxygen-autocomplete-items-query`, O, e2));
    },
    lookup: `value`,
    itemClass: `class-item`,
    menuItemTemplate: function(e2) {
      let t2 = ``;
      return e2.original.color !== void 0 && (t2 += `background-color: ${e2.original.color};`), e2.original.fontWeight !== void 0 && (t2 += `font-weight: ${e2.original.fontWeight};`), `
            <span class="class-name" data-tribute-class-name="${e2.original.value}">${e2.string}</span>
            <span class="class-hint" style="${t2}"></span>
        `;
    }
  });
  k.setMenuContainer = function(e2) {
    this.menuContainer = e2;
  };
  var A = k.events.callbacks;
  k.events.callbacks = function() {
    return {
      ...A.call(this),
      up: (e2, t2) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e2.preventDefault(), e2.stopPropagation();
          let t3 = this.tribute.current.filteredItems.length, n2 = this.tribute.menuSelected;
          t3 > n2 && n2 > 0 ? (this.tribute.menuSelected--, this.setActiveLi()) : n2 === 0 && (this.tribute.menuSelected = t3 - 1, this.setActiveLi(), this.tribute.menu.scrollTop = this.tribute.menu.scrollHeight), B();
        }
      },
      down: (e2, t2) => {
        if (this.tribute.isActive && this.tribute.current.filteredItems) {
          e2.preventDefault(), e2.stopPropagation();
          let t3 = this.tribute.current.filteredItems.length - 1, n2 = this.tribute.menuSelected;
          t3 > n2 ? (this.tribute.menuSelected++, this.setActiveLi()) : t3 === n2 && (this.tribute.menuSelected = 0, this.setActiveLi(), this.tribute.menu.scrollTop = 0), B();
        }
      }
    };
  }, k.attach(h), b.value = C.activeElementId, y.value = X(), C.$onAction(({ name: e2, args: t2, after: n2 }) => {
    (e2 === `activateElement` || e2 === `activateElementMutation`) && (b.value = t2[0]), (e2 === `setLeftSidebarState` || e2 === `setRightSidebarState`) && (y.value = t2[0] === `elementproperties`), e2 === `setPanelState` && n2(() => {
      y.value = X(), J();
    });
  }), x.$onAction(({ name: e2, args: t2, after: n2 }) => {
    se(e2, t2[0]) && n2(() => {
      w || (j(), F(), J());
    });
  }), S.$onAction(({ name: e2, after: t2 }) => {
    e2 === `setOxygenSelectors` && t2(() => {
      w || (j(), F(), J());
    });
  }), t([
    b,
    y
  ], (e2, t2) => {
    (!t2 || e2[0] !== t2[0]) && n(() => {
      j(), F();
    }), e2[0] && J();
  }, {
    immediate: true
  }), new MutationObserver(() => {
    Z() && Y();
  }).observe(document.querySelector(`#app`), {
    childList: true,
    subtree: true
  }), D = new l(h, {
    highlight: [
      {
        highlight: /(?<=\s|^)(?:(?!\s).)+(?=\s|$)/g,
        className: `word`
      },
      {
        highlight: /(?<=\s)\s/g,
        className: `multispace`,
        blank: true
      }
    ]
  });
  async function j() {
    let e2 = U().join(` `);
    h.value !== e2 && (h.value = e2);
  }
  async function M() {
    return H() !== null;
  }
  var N = i(P, 250);
  async function P() {
    if (!await M()) {
      o(`Upstream path not found!`, {
        module: `plain-classes`,
        type: `error`
      });
      return;
    }
    h.focus(), ce();
    try {
      let e2 = K(W());
      await x.unthrottledPropertyChanged({
        elementId: b.value,
        path: `meta.classes`,
        value: e2,
        meta: {
          snapshotLabel: `Update plain classes`
        }
      }), q(), J();
    } finally {
      le();
    }
  }
  h.addEventListener(`input`, function(e2) {
    N();
  });
  function F() {
    n(() => {
      try {
        D.handleInput();
      } catch {
      }
      c.update(h), k.hideMenu();
    });
  }
  var I = new MutationObserver(function(e2) {
    e2.forEach(function(e3) {
      e3.type === `childList` && e3.addedNodes.length > 0 && e3.addedNodes.forEach((e4) => {
        let t2 = e4.querySelector(`.class-name`).dataset.tributeClassName;
        e4.addEventListener(`mouseenter`, (e5) => {
          R(t2);
        }), e4.addEventListener(`mouseleave`, (e5) => {
          z();
        }), e4.addEventListener(`click`, (e5) => {
          z(), R(t2);
        });
      });
    });
  }), L = null;
  h.addEventListener(`tribute-active-true`, function(e2) {
    L === null && (L = document.querySelector(`.windpressoxygen-tribute-container>ul`)), n(() => {
      L && I.observe(L, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: [
          `class`
        ]
      });
    });
  });
  function R(e2) {
    let t2 = d.querySelector(`[data-node-id="${b.value}"]`);
    t2 && (t2.classList.add(e2), t2.dataset.tributeClassName = e2);
  }
  function z() {
    V();
  }
  function B() {
    let e2 = k.menu.querySelector(`li.highlight>span.class-name`);
    z(), R(e2.dataset.tributeClassName);
  }
  function V() {
    let e2 = d.querySelector(`[data-node-id="${b.value}"]`);
    e2 && e2.dataset.tributeClassName && (e2.classList.remove(e2.dataset.tributeClassName), e2.dataset.tributeClassName = ``);
  }
  function H() {
    return x.document.tree._lookupTable[Z()] || null;
  }
  function U() {
    return (H()?.data?.properties?.meta?.classes || []).map((e2) => G(e2)?.name || e2);
  }
  function W() {
    return [
      ...new Set(h.value.trim().split(/\s+/).filter(Boolean))
    ];
  }
  function G(e2) {
    return S.oxySelectors.find((t2) => t2.id === e2);
  }
  function K(e2) {
    let t2 = new Map(S.oxySelectors.map((e3) => [
      e3.name,
      e3
    ])), n2 = [], r2 = e2.map((e3) => {
      let r3 = t2.get(e3);
      return r3 || (r3 = {
        id: crypto.randomUUID(),
        name: e3,
        children: [],
        locked: false,
        collection: `Default`,
        type: `class`
      }, E.add(r3.id), t2.set(e3, r3), n2.push(r3)), r3.id;
    });
    return n2.length > 0 && S.setOxygenSelectors([
      ...S.oxySelectors,
      ...n2
    ]), r2;
  }
  function q() {
    if (E.size === 0) return;
    let e2 = oe(), t2 = new Set([
      ...E
    ].filter((t3) => !e2.has(t3)));
    if (t2.size === 0) return;
    t2.forEach((e3) => E.delete(e3));
    let n2 = S.oxySelectors.filter((e3) => !t2.has(e3.id));
    n2.length !== S.oxySelectors.length && S.setOxygenSelectors(n2);
  }
  function oe() {
    let e2 = /* @__PURE__ */ new Set();
    return Object.values(x.document.tree._lookupTable || {}).forEach((t2) => {
      (t2?.data?.properties?.meta?.classes || []).forEach((t3) => {
        e2.add(t3);
      });
    }), e2;
  }
  function J() {
    n(() => {
      Y(), setTimeout(Y, 100), setTimeout(Y, 300);
    });
  }
  function Y() {
    if (!Z()) return;
    let e2 = document.querySelector(`.breakdance-element-properties-panel .oxy-class-selector`);
    e2 && e2.nextElementSibling !== g && e2.insertAdjacentElement(`afterend`, g);
  }
  function se(e2, t2) {
    return [
      `propertyChangedMutation`,
      `throttledPropertyChanged`,
      `unthrottledPropertyChanged`
    ].includes(e2) ? t2?.elementId === b.value && t2?.path === `meta.classes` : false;
  }
  function X() {
    return [
      C.panelState.leftSidebarPanel,
      C.panelState.rightSidebarPanel
    ].includes(`elementproperties`);
  }
  function Z() {
    return C.activeElementId !== b.value && (b.value = C.activeElementId), b.value;
  }
  function ce() {
    w = true, T !== null && clearTimeout(T);
  }
  function le() {
    T = setTimeout(() => {
      w = false, T = null;
    }, 100);
  }
  h.addEventListener(`highlights-updated`, function(e2) {
    $();
  });
  var Q = ee(document.createElement(`div`), {
    plugins: [
      s
    ],
    allowHTML: true,
    arrow: false,
    duration: [
      500,
      0
    ],
    followCursor: true,
    trigger: `manual`
  });
  function $() {
    let e2 = document.querySelector(`.hit-container`);
    if (e2 === null) return;
    Q.reference = e2;
    async function n2(e3) {
      let t2 = e3.textContent, n3 = await f.contentWindow.windpress.module.classnameToCss.generate(t2);
      if (n3 === null || n3.trim() === ``) return null;
      Q.setContent(m.codeToHtml(n3, {
        lang: `css`,
        theme: document.querySelector(`div#app.theme--light`) === null ? `dark-plus` : `light-plus`
      })), Q.show();
    }
    let a2 = r(null), o2 = i(function(e3) {
      let t2 = e3.clientX, n3 = e3.clientY;
      a2.value = document.elementsFromPoint(t2, n3).find((e4) => e4.matches(`mark[class="word"]`)) || null;
    }, 10);
    e2.addEventListener(`mousemove`, o2), e2.addEventListener(`mouseleave`, function(e3) {
      o2.cancel(), a2.value = null;
    }), t(a2, (e3, t2) => {
      e3 && e3 !== t2 ? n2(e3) : Q.hide();
    });
  }
  o(`Module loaded!`, {
    module: `plain-classes`
  });
})();
