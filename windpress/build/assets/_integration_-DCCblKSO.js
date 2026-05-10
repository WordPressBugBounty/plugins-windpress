import { O as e, g as t, k as n, mt as r, v as i, wt as a } from "./runtime-core.esm-bundler-DrBnbzvJ.js";
import { a as o } from "./vue-router-BxR_FKjN.js";
import { t as s } from "./preload-helper-DYZqtPCf.js";
let c;
let __tla = (async () => {
  c = n({
    __name: `[integration]`,
    setup(n2) {
      let c2 = o(), l = t(() => c2.params.integration), u = t(() => {
        switch (l.value) {
          case `gutenberg`:
            return e(() => s(() => import("./Gutenberg-CGlJynCK.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `bricks`:
            return e(() => s(() => import("./Bricks-BIoLo5Ty.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `blockstudio`:
            return e(() => s(() => import("./Blockstudio-BTHTgfx7.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `breakdance`:
            return e(() => s(() => import("./Breakdance-CmySb2ud.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `builderius`:
            return e(() => s(() => import("./Builderius-CWfTQgdf.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `etch`:
            return e(() => s(() => import("./Etch-C_LVRlHW.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `livecanvas`:
            return e(() => s(() => import("./LiveCanvas-D5hfoM2j.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `oxygen`:
            return e(() => s(() => import("./Oxygen-Cuz7HAEt.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `oxygen-classic`:
            return e(() => s(() => import("./OxygenClassic-DVuWWYA6.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `wpcodebox2`:
            return e(() => s(() => import("./WPCodeBox2-aH0LSLjc.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `elementor`:
            return e(() => s(() => import("./Elementor-BMLl1JIg.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `greenshift`:
            return e(() => s(() => import("./GreenShift-5LFeZ-PH.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `kadence`:
            return e(() => s(() => import("./Kadence-BOVafv7Q.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `timber`:
            return e(() => s(() => import("./Timber-C81B8V8q.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          case `metabox-views`:
            return e(() => s(() => import("./MetaBoxViews-TLmPZFB-.js").then(async (m) => {
              await m.__tla;
              return m;
            }), [], import.meta.url));
          default:
            return e(() => s(() => import("./Generic-DBzYQuz3.js").then(async (m) => {
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
