import { O as e, g as t, k as n, mt as r, v as i, wt as a } from "./runtime-core.esm-bundler-Twwq1XF8.js";
import { m as o } from "./useApi-CROJJdhE-DpbaUaur.js";
import { t as s } from "./preload-helper-CtT0-S4g.js";
let c;
let __tla = (async () => {
  c = n({
    __name: `[integration]`,
    setup(n2) {
      let c2 = o(), l = t(() => c2.params.integration), u = t(() => {
        switch (l.value) {
          case `gutenberg`:
            return e(() => s(() => import("./Gutenberg-Bd1MdiNr.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `bricks`:
            return e(() => s(() => import("./Bricks-EwpEuGXR.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `blockstudio`:
            return e(() => s(() => import("./Blockstudio-AODrL4Tx.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `breakdance`:
            return e(() => s(() => import("./Breakdance-DHfKmBsK.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `builderius`:
            return e(() => s(() => import("./Builderius-BId-uc71.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `etch`:
            return e(() => s(() => import("./Etch-DO3Vy9Gr.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `livecanvas`:
            return e(() => s(() => import("./LiveCanvas-y6_17YLK.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `oxygen`:
            return e(() => s(() => import("./Oxygen-LCH5w-JI.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `oxygen-classic`:
            return e(() => s(() => import("./OxygenClassic-CKGl_t60.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `wpcodebox2`:
            return e(() => s(() => import("./WPCodeBox2-CGim921B.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `elementor`:
            return e(() => s(() => import("./Elementor-nOpxIiCi.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `greenshift`:
            return e(() => s(() => import("./GreenShift-C2ER2Ud4.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `kadence`:
            return e(() => s(() => import("./Kadence-CrN1keRP.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `timber`:
            return e(() => s(() => import("./Timber--fAiVL5u.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `metabox-views`:
            return e(() => s(() => import("./MetaBoxViews-DcP7hkOl.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          default:
            return e(() => s(() => import("./Generic-Cx3TdJ9w.js").then(async (m) => {
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
