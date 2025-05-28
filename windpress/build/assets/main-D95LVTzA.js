import { l as logger } from "./logger-DmkfWO2A.js";
import { settingsState } from "./constant-Cbl61Ovh.js";
import "./virtualRef-B1iNroDN.js";
import "../chunks/index-SE8wVPz0.min.js";
import "../chunks/isObject-DL0QMHX-.min.js";
import "../chunks/runtime-core.esm-bundler-hRyeZ98I.min.js";
import "../chunks/set-3tkuNXe_.min.js";
import "../chunks/_toKey-BRkTT7LT.min.js";
import "../chunks/get-DXxw6yUY.min.js";
const channel = new BroadcastChannel("windpress");
(function() {
  const __xhr = window.XMLHttpRequest;
  function XMLHttpRequest() {
    const xhr = new __xhr();
    if (!settingsState("module.generate-cache.on-save", true).value) {
      return xhr;
    }
    const open = xhr.open;
    xhr.open = function(method, url) {
      if (method === "POST" && url.includes("admin-ajax.php")) {
        const onreadystatechange = xhr.onreadystatechange;
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.data && response.data.action) {
              if (response.data.action === "bricks_save_post") {
                channel.postMessage({
                  task: "generate-cache",
                  source: "windpress/integration",
                  target: "windpress/compiler",
                  data: {
                    kind: "incremental",
                    incremental: {
                      providers: [
                        "bricks"
                      ]
                    }
                  }
                });
              }
            }
          }
          if (onreadystatechange) {
            onreadystatechange.apply(this, arguments);
          }
        };
      }
      open.apply(this, arguments);
    };
    return xhr;
  }
  window.XMLHttpRequest = XMLHttpRequest;
})();
logger("Module loaded!", { module: "generate-cache" });
