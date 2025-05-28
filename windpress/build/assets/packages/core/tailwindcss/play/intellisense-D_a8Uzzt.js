import { l as loadDesignSystem } from "../../../../design-system-B7GawTvC.js";
import { d as decodeVFSContainer } from "../../../../vfs-CPNgPHio.js";
import { c as candidatesToCss, s as sortClasses, a as getClassList } from "../../../../intellisense-CRkIqNUQ.js";
import { F as Fuse } from "../../../../../chunks/fuse-Gm-adH5Q.min.js";
import { p as parse, w as walk } from "../../../../../chunks/index-CRz5lG2j.min.js";
import { s as set } from "../../../../../chunks/set-3tkuNXe_.min.js";
import "../../../../../chunks/index-BMiidzjj.min.js";
import "../../../../../chunks/chunk-HTB5LLOP-DSy4Fbcf.min.js";
import "../../../../../chunks/index-BmWe5YW7.min.js";
import "../../../../../chunks/index-0ko3lTyl.min.js";
import "../../../../cssesc-Dk8RdEx_.js";
import "../../../../../chunks/preload-helper-BVFHbGtQ.min.js";
import "../../../../../chunks/source-map-generator-DcyUj2ax.min.js";
import "../../../../../chunks/index-BmLSY3Qb.min.js";
import "../../../../pre-process-DUd5xNxE.js";
import "../../../../../chunks/index-CvyxREt8.min.js";
import "../../../../../chunks/_toKey-BRkTT7LT.min.js";
import "../../../../../chunks/isObject-DL0QMHX-.min.js";
async function classnameToCss(design2, input) {
  let classes = input.split(/\s+/).filter((x) => x !== "" && x !== "|");
  let css = await candidatesToCss(design2, classes);
  return Array.isArray(css) ? css.join(" ") : css;
}
async function classSorter(design2, input) {
  let classes = input.split(/\s+/).filter((x) => x !== "" && x !== "|");
  return (await sortClasses(design2, classes)).join(" ");
}
let classLists = [];
let previousTimestamp = 0;
function getColor(declarations) {
  const color = declarations == null ? void 0 : declarations.find(
    (declaration) => declaration.property.includes("color")
  );
  return (color == null ? void 0 : color.value) || null;
}
function getUserClassList(volume2) {
  const classNames = /* @__PURE__ */ new Set();
  const unescapedClassName = (s) => s.replace(/\\([0-9a-fA-F]{1,6}) ?/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16))).replace(/\\([^\s])/g, "$1");
  for (const file of Object.keys(volume2)) {
    if (file.endsWith(".css")) {
      const ast = parse(volume2[file]);
      walk(ast, {
        visit: "Selector",
        enter(node) {
          walk(node, {
            visit: "ClassSelector",
            enter(classNode) {
              classNames.add(unescapedClassName(classNode.name));
            }
          });
        }
      });
    }
  }
  return Array.from(classNames).map((className) => {
    return {
      kind: "user",
      selector: className
    };
  });
}
function searchClassList(volume2, design2, query, lastTimestamp2 = 0) {
  let forceReload = false;
  if (lastTimestamp2 > previousTimestamp) {
    previousTimestamp = lastTimestamp2;
    forceReload = true;
  }
  if (classLists.length === 0 || forceReload) {
    classLists = [
      ...getClassList(design2),
      ...getUserClassList(volume2)
    ];
  }
  if (query === "") {
    return classLists.map((classList) => {
      return {
        value: classList.selector,
        color: getColor(classList.declarations)
      };
    });
  }
  let segment = query.split(":");
  let prefix = segment.slice(0, -1).join(":");
  let q = segment.pop() || "";
  let importantModifier = "";
  if (q.startsWith("!")) {
    q = q.slice(1);
    importantModifier = "!";
  }
  let opacityModifier = false;
  if (q.includes("/")) {
    let [_q, opacity] = q.split("/");
    if (opacity === "") {
      q = _q;
      opacityModifier = opacity;
    } else if (isNaN(Number(opacity)) || Number(opacity) < 0 || Number(opacity) > 100) {
      q = [_q, opacity].join("/");
    } else {
      q = _q;
      opacityModifier = parseInt(opacity.toString());
    }
  }
  let filteredClassList = classLists.filter((classList) => classList.selector.includes(q));
  if (opacityModifier !== false) {
    let tempFilteredClassList = [];
    const loopIncrement = opacityModifier === "" ? 5 : 1;
    const loopStart = opacityModifier === "" || Number(opacityModifier) > 9 ? 0 : Math.floor((Number(opacityModifier) * 10 + 1) / 10) * 10;
    const loopEnd = opacityModifier === "" || Number(opacityModifier) > 9 ? 100 : Math.ceil((Number(opacityModifier) * 10 + 1) / 10) * 10;
    filteredClassList.forEach((classList) => {
      for (let i = loopStart; i <= loopEnd; i += loopIncrement) {
        tempFilteredClassList.push({
          ...classList,
          selector: classList.selector + "/" + i
        });
      }
    });
    filteredClassList = tempFilteredClassList;
  }
  const fuse = new Fuse(filteredClassList, {
    keys: ["selector"],
    threshold: 0.4
  });
  return fuse.search(q).map(({ item }) => {
    return {
      value: [prefix, (importantModifier ? "!" : "") + item.selector].filter(Boolean).join(":"),
      color: getColor(item.declarations)
    };
  });
}
const channel = new BroadcastChannel("windpress");
const vfsContainer = document.querySelector('script#windpress\\:vfs[type="text/plain"]');
let design;
let volume;
let lastTimestamp = 0;
async function updateDesign() {
  volume = decodeVFSContainer((vfsContainer == null ? void 0 : vfsContainer.textContent) || "e30=");
  design = await loadDesignSystem({ volume });
  const currTimestamp = Date.now();
  lastTimestamp = currTimestamp;
  channel.postMessage({
    source: "windpress/intellisense",
    target: "any",
    task: `windpress.code-editor.saved.done`
  });
}
updateDesign();
channel.addEventListener("message", async (e) => {
  const data = e.data;
  const source = "windpress/dashboard";
  const target = "windpress/intellisense";
  const task = "windpress.code-editor.saved";
  if (data.source === source && data.target === target && data.task === task) {
    updateDesign();
  }
});
set(window, "windpress.module.autocomplete.query", (q) => searchClassList(volume, design, q, lastTimestamp));
set(window, "windpress.module.classnameToCss.generate", async (input) => classnameToCss(design, input));
set(window, "windpress.module.classSorter.sort", async (input) => classSorter(design, input));
