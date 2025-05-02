import { e as el } from "../chunks/index-C1H1LqHQ.min.js";
import { l as loadModule } from "./cssesc-B11S6O1g.js";
import { p as preprocess, l as loadStylesheet } from "./pre-process-Q0cZU5CN.js";
async function loadDesignSystem({ entrypoint = "/main.css", volume = {}, ...opts } = {}) {
  opts = { entrypoint, volume, ...opts };
  opts.volume[opts.entrypoint] = (await preprocess(opts)).css;
  return el(opts.volume[opts.entrypoint], {
    ...opts,
    loadModule: async (modulePath, base, resourceHint) => loadModule(modulePath, base, resourceHint, opts.volume),
    loadStylesheet: async (id, base) => loadStylesheet(id, base, opts.volume)
  });
}
export {
  loadDesignSystem as l
};
