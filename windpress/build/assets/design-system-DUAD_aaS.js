import { A as Aa } from "../chunks/index-BkUw_IqI.min.js";
import { l as loadModule } from "./cssesc-Dhzqn1Ra.js";
import { p as preprocess, l as loadStylesheet } from "./pre-process-DDmkQORd.js";
async function loadDesignSystem({ entrypoint = "/main.css", volume = {}, ...opts } = {}) {
  opts = { entrypoint, volume, ...opts };
  opts.volume[opts.entrypoint] = (await preprocess(opts)).css;
  return Aa(opts.volume[opts.entrypoint], {
    ...opts,
    loadModule: async (modulePath, base, resourceHint) => loadModule(modulePath, base, resourceHint, opts.volume),
    loadStylesheet: async (id, base) => loadStylesheet(id, base, opts.volume)
  });
}
export {
  loadDesignSystem as l
};
