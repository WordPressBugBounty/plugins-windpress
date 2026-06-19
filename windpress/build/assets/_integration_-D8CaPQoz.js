import { O as e, g as t, k as n, mt as r, v as i, wt as a } from "./runtime-core.esm-bundler-Ci9kEgM7.js";
import { a as o } from "./vue-router-Ds7Bu_8X.js";
import { t as s } from "./preload-helper-CwQZjUKM.js";
let c;
let __tla = (async () => {
  c = n({
    __name: `[integration]`,
    setup(n2) {
      let c2 = o(), l = t(() => c2.params.integration), u = t(() => {
        switch (l.value) {
          case `gutenberg`:
            return e(() => s(() => import("./Gutenberg-BzO5rsTA.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `bricks`:
            return e(() => s(() => import("./Bricks-D1l3XRXX.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `blockstudio`:
            return e(() => s(() => import("./Blockstudio-C_9wmX2R.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `breakdance`:
            return e(() => s(() => import("./Breakdance-DjaVoe_c.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `builderius`:
            return e(() => s(() => import("./Builderius-BZ1JtYue.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `etch`:
            return e(() => s(() => import("./Etch-EA2g73Zn.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `livecanvas`:
            return e(() => s(() => import("./LiveCanvas-Pxgvgc9o.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `oxygen`:
            return e(() => s(() => import("./Oxygen-CvpNL6EC.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `oxygen-classic`:
            return e(() => s(() => import("./OxygenClassic-BIRqO1RR.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `wpcodebox2`:
            return e(() => s(() => import("./WPCodeBox2-CizNgh0G.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `elementor`:
            return e(() => s(() => import("./Elementor-COAKpi1J.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `greenshift`:
            return e(() => s(() => import("./GreenShift-CUZYeUVN.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `kadence`:
            return e(() => s(() => import("./Kadence-6YGuf_68.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `timber`:
            return e(() => s(() => import("./Timber-Bpzf0LmX.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `metabox-views`:
            return e(() => s(() => import("./MetaBoxViews-BK-e17o6.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          default:
            return e(() => s(() => import("./Generic-C1wUCtUK.js").then(async (m) => {
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
