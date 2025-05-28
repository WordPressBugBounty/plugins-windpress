import { u as useStorage } from "../chunks/index-SE8wVPz0.min.js";
import { s as set } from "../chunks/set-3tkuNXe_.min.js";
import { g as get } from "../chunks/get-DXxw6yUY.min.js";
import { V as ref, W as customRef } from "../chunks/runtime-core.esm-bundler-hRyeZ98I.min.js";
function createVirtualRef(initialState, options) {
  const state = (options == null ? void 0 : options.persist) ? useStorage(options.persist, initialState) : ref(initialState);
  const customRefs = {};
  function getVirtualRef(path, initialValue) {
    if (!customRefs[path]) {
      customRefs[path] = customRef((track, trigger) => {
        return {
          get() {
            track();
            return get(state.value, path, initialValue);
          },
          set(value) {
            set(state.value, path, value);
            trigger();
          }
        };
      });
    }
    return customRefs[path];
  }
  return {
    state,
    getVirtualRef
  };
}
export {
  createVirtualRef as c
};
