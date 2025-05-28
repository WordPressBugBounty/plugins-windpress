import { l as logger } from "./logger-DmkfWO2A.js";
import { uniIframe } from "./constant-DeVUt7A7.js";
import { d as decodeVFSContainer } from "./vfs-CPNgPHio.js";
import "../chunks/index-BMiidzjj.min.js";
import { __tla as __tla_0 } from "./cssesc-Dk8RdEx_.js";
import "../chunks/index-BmWe5YW7.min.js";
import "../chunks/remapping.umd-Cxi90pr4.min.js";
import { __tla as __tla_1 } from "../chunks/index-CZV-ReBk.min.js";
import { g as getVariableList } from "./intellisense-CRkIqNUQ.js";
import "../chunks/redaxios.module-Dyf46lvQ.min.js";
import { l as loadDesignSystem } from "./design-system-B7GawTvC.js";
import "../chunks/chunk-HTB5LLOP-DSy4Fbcf.min.js";
import "../chunks/preload-helper-BVFHbGtQ.min.js";
import "../chunks/source-map-generator-DcyUj2ax.min.js";
import "../chunks/index-BmLSY3Qb.min.js";
import "../chunks/index-0ko3lTyl.min.js";
import "../chunks/index-CvyxREt8.min.js";
import "./pre-process-DUd5xNxE.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  function naturalExpand(value, total = null) {
    const length = typeof total === "number" ? total.toString().length : 8;
    return ("0".repeat(length) + value).slice(-length);
  }
  (async function() {
    const vfsContainer = uniIframe.contentWindow.document.querySelector('script#windpress\\:vfs[type="text/plain"]');
    const volume = decodeVFSContainer(vfsContainer.textContent);
    window.Builderius.API.monaco.languages.registerCompletionItemProvider("builderius-css", {
      async provideCompletionItems(model, position) {
        const wordInfo = model.getWordUntilPosition(position);
        const variables = getVariableList(await loadDesignSystem({
          volume
        })).map((entry) => {
          return {
            kind: entry.key.includes("--color") ? window.Builderius.API.monaco.languages.CompletionItemKind.Color : window.Builderius.API.monaco.languages.CompletionItemKind.Variable,
            label: entry.key,
            insertText: entry.key,
            detail: entry.value,
            range: {
              startLineNumber: position.lineNumber,
              startColumn: wordInfo.startColumn,
              endLineNumber: position.lineNumber,
              endColumn: wordInfo.endColumn
            },
            sortText: naturalExpand(entry.index)
          };
        });
        return {
          suggestions: variables
        };
      }
    });
  })();
  const channel = new BroadcastChannel("windpress");
  channel.addEventListener("message", async (e) => {
    const data = e.data;
    const source = "windpress/autocomplete";
    const task = "windpress.code-editor.saved.done";
    if (data.source === source && data.task === task) {
      setTimeout(() => {
      }, 1e3);
    }
  });
  logger("Module loaded!", {
    module: "generate-cache"
  });
});
