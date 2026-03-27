import { O as e, g as t, k as n, mt as r, v as i, wt as a } from "./runtime-core.esm-bundler-CahM68iJ.js";
import { a as o } from "./vue-router-B3IuXUyS.js";
import { t as s } from "./preload-helper-Cb81DA_d.js";
let c;
let __tla = (async () => {
  c = n({
    __name: `[integration]`,
    setup(n2) {
      let c2 = o(), l = t(() => c2.params.integration), u = t(() => {
        switch (l.value) {
          case `gutenberg`:
            return e(() => s(() => import("./Gutenberg-CHXDMMZc.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `bricks`:
            return e(() => s(() => import("./Bricks-Dynf7ood.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `blockstudio`:
            return e(() => s(() => import("./Blockstudio-BSnz2lma.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `breakdance`:
            return e(() => s(() => import("./Breakdance-BiWpyWYU.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `builderius`:
            return e(() => s(() => import("./Builderius-S8lTCGcq.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `etch`:
            return e(() => s(() => import("./Etch-B0tDiCir.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `livecanvas`:
            return e(() => s(() => import("./LiveCanvas-siNQ5Rbs.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `oxygen`:
            return e(() => s(() => import("./Oxygen-DHt_0W3C.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `oxygen-classic`:
            return e(() => s(() => import("./OxygenClassic-B3emBM9_.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `wpcodebox2`:
            return e(() => s(() => import("./WPCodeBox2-sJZ3H08z.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `elementor`:
            return e(() => s(() => import("./Elementor-DhYrrmr3.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `greenshift`:
            return e(() => s(() => import("./GreenShift-Cksjnr9h.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `kadence`:
            return e(() => s(() => import("./Kadence-BrrUNqnV.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `timber`:
            return e(() => s(() => import("./Timber-BhX0QehD.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `metabox-views`:
            return e(() => s(() => import("./MetaBoxViews-D4mwZV2a.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          default:
            return e(() => s(() => import("./Generic-Dy-309Nv.js").then(async (m) => {
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
