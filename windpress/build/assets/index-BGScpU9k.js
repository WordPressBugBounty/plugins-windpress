import { f as find_tw_candidates, m as minimatch, __tla as __tla_0 } from "../chunks/index-CZV-ReBk.min.js";
import { c as createLogComposable, a as useApi, __tla as __tla_1 } from "./worker-BNiBfqYd.js";
import "../chunks/index-BmWe5YW7.min.js";
import "../chunks/index-0ko3lTyl.min.js";
import "../chunks/index-BMiidzjj.min.js";
import "../chunks/chunk-HTB5LLOP-DSy4Fbcf.min.js";
import { __tla as __tla_2 } from "../chunks/index-k3bFsCPD.min.js";
import "../chunks/preload-helper-BVFHbGtQ.min.js";
import "./pre-process-DUd5xNxE.js";
import "../chunks/index-BmLSY3Qb.min.js";
import "../chunks/remapping.umd-Cxi90pr4.min.js";
import "../chunks/index-CvyxREt8.min.js";
import "../chunks/source-map-generator-DcyUj2ax.min.js";
import "../chunks/runtime-core.esm-bundler-hRyeZ98I.min.js";
import "../chunks/isObject-DL0QMHX-.min.js";
import "../chunks/index.browser-BBNxE1As.min.js";
import "../chunks/index-SE8wVPz0.min.js";
import "../chunks/redaxios.module-Dyf46lvQ.min.js";
import "../chunks/index-EVinwGpQ.min.js";
import "../chunks/get-DXxw6yUY.min.js";
import "../chunks/_toKey-BRkTT7LT.min.js";
import { __tla as __tla_3 } from "./cssesc-Dk8RdEx_.js";
import { d } from "./vfs-CPNgPHio.js";
import { c, o } from "./build-cXr_Ks6R.js";
import { a, g, n, s } from "./intellisense-CRkIqNUQ.js";
import { l } from "./cssesc-Dk8RdEx_.js";
import { l as l2 } from "./design-system-B7GawTvC.js";
let loadSource;
let __tla = Promise.all([
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
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })()
]).then(async () => {
  var RE_SCOPED = /^(@[^\/]+\/[^@\/]+)(?:@([^\/]+))?(\/.*)?$/;
  var RE_NON_SCOPED = /^([^@\/]+)(?:@([^\/]+))?(\/.*)?$/;
  function parse(input) {
    const m = RE_SCOPED.exec(input) || RE_NON_SCOPED.exec(input);
    if (!m) {
      throw new Error(`[parse-package-name] invalid package name: ${input}`);
    }
    return {
      name: m[1] || "",
      version: m[2] || "latest",
      path: m[3] || ""
    };
  }
  loadSource = async function(sources) {
    const logStore = createLogComposable();
    let contents = [];
    const promises = sources.map(async (source) => {
      if (source.negated) {
        return;
      }
      let logId2;
      if (source.pattern.startsWith("jsdelivr:")) {
        logId2 = logStore.add({
          message: `Loading source: jsDelivr (${source.pattern})`,
          type: "info",
          group: "source"
        });
        contents.push(...await jsDelivrProvider(source));
      } else if (source.pattern.startsWith("http")) {
        logId2 = logStore.add({
          message: `Loading source: Network (${source.pattern})`,
          type: "info",
          group: "source"
        });
        contents.push(...await httpFileProvider(source));
      } else if (source.pattern.startsWith("wp-content:")) {
        logId2 = logStore.add({
          message: `Loading source: WP Content (${source.pattern})`,
          type: "info",
          group: "source"
        });
        contents.push(...await wpContentProvider(source));
      }
      if (logId2) {
        let currentLog2 = logStore.logs.value.find((log) => log.id === logId2);
        if (currentLog2) {
          currentLog2.message += " - done";
        }
      }
    });
    await Promise.all(promises);
    const candidates_pool = [];
    let logId = logStore.add({
      message: "Scanning sources...",
      type: "info",
      group: "source"
    });
    contents.forEach((content) => {
      const candidates = find_tw_candidates(content);
      candidates_pool.push(...candidates);
    });
    let currentLog = logStore.logs.value.find((log) => log.id === logId);
    if (currentLog) {
      currentLog.message += " - done";
    }
    return Array.from(new Set(candidates_pool));
  };
  async function jsDelivrProvider(source) {
    const contents_pool = [];
    let sourcePath = source.pattern.slice(String("jsdelivr:").length);
    let { name: packageName, version: packageVersion, path: pathPattern } = parse(sourcePath);
    let files = await fetch(`https://data.jsdelivr.com/v1/packages/npm/${packageName}@${packageVersion}?structure=flat`).then((response) => response.json()).then((data) => data.files).then((files2) => files2.map((file) => file.name)).then((files2) => files2.filter((file) => minimatch(file, pathPattern)));
    const promises = files.map(async (file) => {
      let content = await fetch(`https://cdn.jsdelivr.net/npm/${packageName}@${packageVersion}${file}`).then((response) => response.text());
      contents_pool.push(content);
    });
    await Promise.all(promises);
    return contents_pool;
  }
  async function httpFileProvider(source) {
    let content = await fetch(source.pattern).then((response) => response.text());
    return [
      content
    ];
  }
  async function wpContentProvider(source) {
    let sourcePath = source.pattern.slice(String("wp-content:").length);
    const scan = await useApi().post("admin/local-file-provider/scan", {
      path: sourcePath
    }).then((resp) => resp.data);
    return scan.contents.map((c2) => c2.content);
  }
});
export {
  __tla,
  c as compile,
  d as decodeVFSContainer,
  find_tw_candidates,
  a as getClassList,
  g as getVariableList,
  l2 as loadDesignSystem,
  l as loadModule,
  loadSource,
  n as naturalExpand,
  o as optimize,
  s as sortClasses
};
