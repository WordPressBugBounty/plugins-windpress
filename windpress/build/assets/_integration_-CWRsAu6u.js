import { O as e, g as t, k as n, mt as r, v as i, wt as a } from "./runtime-core.esm-bundler-C_RgxGrN.js";
import { a as o } from "./vue-router-duOdSZkK.js";
import { t as s } from "./preload-helper-Cb81DA_d.js";
let c;
let __tla = (async () => {
  c = n({
    __name: `[integration]`,
    setup(n2) {
      let c2 = o(), l = t(() => c2.params.integration), u = t(() => {
        switch (l.value) {
          case `gutenberg`:
            return e(() => s(() => import("./Gutenberg-Df-616Ka.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `bricks`:
            return e(() => s(() => import("./Bricks-Ck_iDwnv.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `blockstudio`:
            return e(() => s(() => import("./Blockstudio-BW1ppJh6.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `breakdance`:
            return e(() => s(() => import("./Breakdance-vkve0Exs.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `builderius`:
            return e(() => s(() => import("./Builderius-DKxoHWOZ.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `etch`:
            return e(() => s(() => import("./Etch-BwMUL2vR.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `livecanvas`:
            return e(() => s(() => import("./LiveCanvas-CABdZx8s.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `oxygen`:
            return e(() => s(() => import("./Oxygen-CD5PtoOW.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `oxygen-classic`:
            return e(() => s(() => import("./OxygenClassic-BR5SgSuv.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `wpcodebox2`:
            return e(() => s(() => import("./WPCodeBox2-COruARkz.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `elementor`:
            return e(() => s(() => import("./Elementor-DpLMgIKY.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `greenshift`:
            return e(() => s(() => import("./GreenShift-BVG0LVJD.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `kadence`:
            return e(() => s(() => import("./Kadence-7hFlwnkk.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `timber`:
            return e(() => s(() => import("./Timber-DXptVbiB.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `metabox-views`:
            return e(() => s(() => import("./MetaBoxViews-DQGDR2ca.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          default:
            return e(() => s(() => import("./Generic-2yjCfZ2J.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
        }
      });
      return (e2, t2) => (r(), i(a(u.value)));
    }
  });
})();
export {
  __tla,
  c as default
};
