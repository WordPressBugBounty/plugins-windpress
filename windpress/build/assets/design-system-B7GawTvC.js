import { C as Ca } from "../chunks/index-BMiidzjj.min.js";
import { l as loadModule } from "./cssesc-Dk8RdEx_.js";
import { p as preprocess, l as loadStylesheet } from "./pre-process-DUd5xNxE.js";
async function loadDesignSystem({ entrypoint = "/main.css", volume = {}, ...opts } = {}) {
  opts = { entrypoint, volume, ...opts };
  opts.volume[opts.entrypoint] = (await preprocess(opts)).css;
  return Ca(opts.volume[opts.entrypoint], {
    ...opts,
    loadModule: async (modulePath, base, resourceHint) => loadModule(modulePath, base, resourceHint, opts.volume),
    loadStylesheet: async (id, base) => loadStylesheet(id, base, opts.volume)
  });
}
export {
  loadDesignSystem as l
};
