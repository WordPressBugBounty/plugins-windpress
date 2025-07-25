import { c as compile } from "../../../../build-cXr_Ks6R.js";
import { d as decodeVFSContainer } from "../../../../vfs-CPNgPHio.js";
import { I as Instrumentation } from "../../../../instrumentation-DB2mxz-d.js";
import "../../../../../chunks/index-BMiidzjj.min.js";
import "../../../../../chunks/chunk-HTB5LLOP-DSy4Fbcf.min.js";
import "../../../../../chunks/index-BmWe5YW7.min.js";
import "../../../../../chunks/index-0ko3lTyl.min.js";
import "../../../../cssesc-Dk8RdEx_.js";
import "../../../../../chunks/preload-helper-BVFHbGtQ.min.js";
import "../../../../../chunks/source-map-generator-DcyUj2ax.min.js";
import "../../../../../chunks/index-BmLSY3Qb.min.js";
import "../../../../../chunks/index-k3bFsCPD.min.js";
import "../../../../pre-process-DUd5xNxE.js";
import "../../../../../chunks/remapping.umd-Cxi90pr4.min.js";
console.warn(
  "The compiler of Tailwind CSS should not be used in production. To use Tailwind CSS in production, use the cached CSS: https://wind.press/docs/guide/concepts/cache"
);
let classes = /* @__PURE__ */ new Set();
let sheet = document.createElement("style");
let buildQueue = Promise.resolve();
let nextBuildId = 1;
let I = new Instrumentation();
let lastVFS = "";
let compiler;
async function createCompiler() {
  I.start(`Create compiler`);
  I.start("Reading VFS");
  let script = document.querySelector('script#windpress\\:vfs[type="text/plain"]');
  if (!script) {
    throw new Error('Script element with id "windpress:vfs" and type "text/plain" not found.');
  }
  let vfs = (script == null ? void 0 : script.textContent) || "";
  I.end("Reading VFS", {
    size: vfs.length,
    changed: lastVFS !== vfs
  });
  if (lastVFS === vfs) return;
  lastVFS = vfs;
  I.start("Compile CSS");
  try {
    compiler = await compile({
      // candidates: Array.from(candidates) as string[],
      entrypoint: "/main.css",
      volume: decodeVFSContainer(lastVFS || "e30=")
    });
  } finally {
    I.end("Compile CSS");
    I.end(`Create compiler`);
  }
  classes.clear();
}
async function build(kind) {
  if (!compiler) return;
  let newClasses = /* @__PURE__ */ new Set();
  I.start(`Collect classes`);
  for (let element of document.querySelectorAll("[class]")) {
    for (let c of element.classList) {
      if (classes.has(c)) continue;
      classes.add(c);
      newClasses.add(c);
    }
  }
  I.end(`Collect classes`, {
    count: newClasses.size
  });
  if (newClasses.size === 0 && kind === "incremental") return;
  I.start(`Build utilities`);
  sheet.textContent = compiler.build(Array.from(newClasses));
  I.end(`Build utilities`);
}
function rebuild(kind) {
  async function run() {
    if (!compiler && kind !== "full") {
      return;
    }
    let buildId = nextBuildId++;
    I.start(`Build #${buildId} (${kind})`);
    if (kind === "full") {
      await createCompiler();
    }
    I.start(`Build`);
    await build(kind);
    I.end(`Build`);
    I.end(`Build #${buildId} (${kind})`);
  }
  buildQueue = buildQueue.then(run).catch((err) => I.error(err));
}
let scriptObserver = new MutationObserver(() => rebuild("full"));
function observeScript(script) {
  console.debug("Observing script element:", script);
  scriptObserver.observe(script, {
    attributes: true,
    attributeFilter: ["type", "src"],
    characterData: true,
    subtree: true,
    childList: true
  });
}
const observer = new MutationObserver((records) => {
  let full = 0;
  let incremental = 0;
  for (let record of records) {
    for (let node of record.addedNodes) {
      if (node.nodeType !== 1) continue;
      if (node === sheet) continue;
      incremental++;
    }
    if (record.type === "attributes") {
      incremental++;
    }
    if (record.target instanceof HTMLScriptElement && record.target.id === "windpress:vfs" && record.target.type === "text/plain") {
      observeScript(record.target);
      full++;
    }
  }
  if (full > 0) {
    return rebuild("full");
  } else if (incremental > 0) {
    return rebuild("incremental");
  }
});
if (!window["__windpress__disable_playObserver"]) {
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
    childList: true,
    subtree: true
  });
  rebuild("full");
  document.head.append(sheet);
} else {
  console.warn("Play Observer is disabled.");
}
(() => {
  const channel = new BroadcastChannel("windpress");
  channel.addEventListener("message", async (e) => {
    const data = e.data;
    const source = "windpress/dashboard";
    const target = "windpress/observer";
    const task = "windpress.code-editor.saved";
    if (data.source === source && data.target === target && data.task === task) {
      let script = document.querySelector('script#windpress\\:vfs[type="text/plain"]');
      if (script) {
        script.textContent = data.payload.volume;
      }
    }
  });
})();
try {
  window.twPlayObserver = observer;
} catch (e) {
}
