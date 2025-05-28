import { g as getDefaultExportFromCjs } from "../chunks/index-BmWe5YW7.min.js";
import { r as requireLib } from "../chunks/index-CvyxREt8.min.js";
const ZERO = 48;
const NINE = 57;
function compare(a, z) {
  let aLen = a.length;
  let zLen = z.length;
  let minLen = aLen < zLen ? aLen : zLen;
  for (let i = 0; i < minLen; i++) {
    let aCode = a.charCodeAt(i);
    let zCode = z.charCodeAt(i);
    if (aCode >= ZERO && aCode <= NINE && zCode >= ZERO && zCode <= NINE) {
      let aStart = i;
      let aEnd = i + 1;
      let zStart = i;
      let zEnd = i + 1;
      aCode = a.charCodeAt(aEnd);
      while (aCode >= ZERO && aCode <= NINE) aCode = a.charCodeAt(++aEnd);
      zCode = z.charCodeAt(zEnd);
      while (zCode >= ZERO && zCode <= NINE) zCode = z.charCodeAt(++zEnd);
      let aNumber = a.slice(aStart, aEnd);
      let zNumber = z.slice(zStart, zEnd);
      let diff = Number(aNumber) - Number(zNumber);
      if (diff) return diff;
      if (aNumber < zNumber) return -1;
      if (aNumber > zNumber) return 1;
      continue;
    }
    if (aCode === zCode) continue;
    return aCode - zCode;
  }
  return a.length - z.length;
}
class DefaultMap extends Map {
  constructor(factory) {
    super();
    this.factory = factory;
  }
  get(key) {
    let value = super.get(key);
    if (value === void 0) {
      value = this.factory(key, this);
      this.set(key, value);
    }
    return value;
  }
}
const BACKSLASH$1 = 92;
const OPEN_CURLY = 123;
const CLOSE_CURLY = 125;
const OPEN_PAREN$1 = 40;
const CLOSE_PAREN$1 = 41;
const OPEN_BRACKET = 91;
const CLOSE_BRACKET = 93;
const DOUBLE_QUOTE$1 = 34;
const SINGLE_QUOTE$1 = 39;
const closingBracketStack = new Uint8Array(256);
function segment(input, separator2) {
  let stackPos = 0;
  let parts = [];
  let lastPos = 0;
  let len = input.length;
  let separatorCode = separator2.charCodeAt(0);
  for (let idx = 0; idx < len; idx++) {
    let char = input.charCodeAt(idx);
    if (stackPos === 0 && char === separatorCode) {
      parts.push(input.slice(lastPos, idx));
      lastPos = idx + 1;
      continue;
    }
    switch (char) {
      case BACKSLASH$1:
        idx += 1;
        break;
      // Strings should be handled as-is until the end of the string. No need to
      // worry about balancing parens, brackets, or curlies inside a string.
      case SINGLE_QUOTE$1:
      case DOUBLE_QUOTE$1:
        while (++idx < len) {
          let nextChar = input.charCodeAt(idx);
          if (nextChar === BACKSLASH$1) {
            idx += 1;
            continue;
          }
          if (nextChar === char) {
            break;
          }
        }
        break;
      case OPEN_PAREN$1:
        closingBracketStack[stackPos] = CLOSE_PAREN$1;
        stackPos++;
        break;
      case OPEN_BRACKET:
        closingBracketStack[stackPos] = CLOSE_BRACKET;
        stackPos++;
        break;
      case OPEN_CURLY:
        closingBracketStack[stackPos] = CLOSE_CURLY;
        stackPos++;
        break;
      case CLOSE_BRACKET:
      case CLOSE_CURLY:
      case CLOSE_PAREN$1:
        if (stackPos > 0 && char === closingBracketStack[stackPos - 1]) {
          stackPos--;
        }
        break;
    }
  }
  parts.push(input.slice(lastPos));
  return parts;
}
function word(value) {
  return {
    kind: "word",
    value
  };
}
function fun(value, nodes) {
  return {
    kind: "function",
    value,
    nodes
  };
}
function separator(value) {
  return {
    kind: "separator",
    value
  };
}
function walk(ast, visit, parent = null) {
  for (let i = 0; i < ast.length; i++) {
    let node = ast[i];
    let replacedNode = false;
    let replacedNodeOffset = 0;
    let status = visit(node, {
      parent,
      replaceWith(newNode) {
        if (replacedNode) return;
        replacedNode = true;
        if (Array.isArray(newNode)) {
          if (newNode.length === 0) {
            ast.splice(i, 1);
            replacedNodeOffset = 0;
          } else if (newNode.length === 1) {
            ast[i] = newNode[0];
            replacedNodeOffset = 1;
          } else {
            ast.splice(i, 1, ...newNode);
            replacedNodeOffset = newNode.length;
          }
        } else {
          ast[i] = newNode;
        }
      }
    }) ?? 0;
    if (replacedNode) {
      if (status === 0) {
        i--;
      } else {
        i += replacedNodeOffset - 1;
      }
      continue;
    }
    if (status === 2) return 2;
    if (status === 1) continue;
    if (node.kind === "function") {
      if (walk(node.nodes, visit, node) === 2) {
        return 2;
      }
    }
  }
}
function toCss(ast) {
  let css = "";
  for (const node of ast) {
    switch (node.kind) {
      case "word":
      case "separator": {
        css += node.value;
        break;
      }
      case "function": {
        css += node.value + "(" + toCss(node.nodes) + ")";
      }
    }
  }
  return css;
}
const BACKSLASH = 92;
const CLOSE_PAREN = 41;
const COLON = 58;
const COMMA = 44;
const DOUBLE_QUOTE = 34;
const EQUALS = 61;
const GREATER_THAN = 62;
const LESS_THAN = 60;
const NEWLINE = 10;
const OPEN_PAREN = 40;
const SINGLE_QUOTE = 39;
const SLASH = 47;
const SPACE = 32;
const TAB = 9;
function parse(input) {
  input = input.replaceAll("\r\n", "\n");
  let ast = [];
  let stack = [];
  let parent = null;
  let buffer = "";
  let peekChar;
  for (let i = 0; i < input.length; i++) {
    let currentChar = input.charCodeAt(i);
    switch (currentChar) {
      // Current character is a `\` therefore the next character is escaped,
      // consume it together with the next character and continue.
      case BACKSLASH: {
        buffer += input[i] + input[i + 1];
        i++;
        break;
      }
      // Space and commas are bundled into separators
      //
      // E.g.:
      //
      // ```css
      // foo(bar, baz)
      //        ^^
      // ```
      case COLON:
      case COMMA:
      case EQUALS:
      case GREATER_THAN:
      case LESS_THAN:
      case NEWLINE:
      case SLASH:
      case SPACE:
      case TAB: {
        if (buffer.length > 0) {
          let node2 = word(buffer);
          if (parent) {
            parent.nodes.push(node2);
          } else {
            ast.push(node2);
          }
          buffer = "";
        }
        let start = i;
        let end = i + 1;
        for (; end < input.length; end++) {
          peekChar = input.charCodeAt(end);
          if (peekChar !== COLON && peekChar !== COMMA && peekChar !== EQUALS && peekChar !== GREATER_THAN && peekChar !== LESS_THAN && peekChar !== NEWLINE && peekChar !== SLASH && peekChar !== SPACE && peekChar !== TAB) {
            break;
          }
        }
        i = end - 1;
        let node = separator(input.slice(start, end));
        if (parent) {
          parent.nodes.push(node);
        } else {
          ast.push(node);
        }
        break;
      }
      // Start of a string.
      case SINGLE_QUOTE:
      case DOUBLE_QUOTE: {
        let start = i;
        for (let j = i + 1; j < input.length; j++) {
          peekChar = input.charCodeAt(j);
          if (peekChar === BACKSLASH) {
            j += 1;
          } else if (peekChar === currentChar) {
            i = j;
            break;
          }
        }
        buffer += input.slice(start, i + 1);
        break;
      }
      // Start of a function call.
      //
      // E.g.:
      //
      // ```css
      // foo(bar, baz)
      //    ^
      // ```
      case OPEN_PAREN: {
        let node = fun(buffer, []);
        buffer = "";
        if (parent) {
          parent.nodes.push(node);
        } else {
          ast.push(node);
        }
        stack.push(node);
        parent = node;
        break;
      }
      // End of a function call.
      //
      // E.g.:
      //
      // ```css
      // foo(bar, baz)
      //             ^
      // ```
      case CLOSE_PAREN: {
        let tail = stack.pop();
        if (buffer.length > 0) {
          let node = word(buffer);
          tail == null ? void 0 : tail.nodes.push(node);
          buffer = "";
        }
        if (stack.length > 0) {
          parent = stack[stack.length - 1];
        } else {
          parent = null;
        }
        break;
      }
      // Everything else will be collected in the buffer
      default: {
        buffer += String.fromCharCode(currentChar);
      }
    }
  }
  if (buffer.length > 0) {
    ast.push(word(buffer));
  }
  return ast;
}
function withAlpha(value, alpha2) {
  if (alpha2 === null) return value;
  let alphaAsNumber = Number(alpha2);
  if (!Number.isNaN(alphaAsNumber)) {
    alpha2 = `${alphaAsNumber * 100}%`;
  }
  if (alpha2 === "100%") {
    return value;
  }
  return `color-mix(in oklab, ${value} ${alpha2}, transparent)`;
}
const CSS_FUNCTIONS = {
  "--alpha": alpha,
  "--spacing": spacing,
  "--theme": theme,
  theme: legacyTheme
};
function alpha(_designSystem, _source, value, ...rest) {
  let [color, alpha2] = segment(value, "/").map((v) => v.trim());
  if (!color || !alpha2) {
    throw new Error(
      `The --alpha(\u2026) function requires a color and an alpha value, e.g.: \`--alpha(${color || "var(--my-color)"} / ${alpha2 || "50%"})\``
    );
  }
  if (rest.length > 0) {
    throw new Error(
      `The --alpha(\u2026) function only accepts one argument, e.g.: \`--alpha(${color || "var(--my-color)"} / ${alpha2 || "50%"})\``
    );
  }
  return withAlpha(color, alpha2);
}
function spacing(designSystem, _source, value, ...rest) {
  if (!value) {
    throw new Error(`The --spacing(\u2026) function requires an argument, but received none.`);
  }
  if (rest.length > 0) {
    throw new Error(
      `The --spacing(\u2026) function only accepts a single argument, but received ${rest.length + 1}.`
    );
  }
  let multiplier = designSystem.theme.resolve(null, ["--spacing"]);
  if (!multiplier) {
    throw new Error(
      "The --spacing(\u2026) function requires that the `--spacing` theme variable exists, but it was not found."
    );
  }
  return `calc(${multiplier} * ${value})`;
}
function theme(designSystem, source, path, ...fallback) {
  if (!path.startsWith("--")) {
    throw new Error(`The --theme(\u2026) function can only be used with CSS variables from your theme.`);
  }
  let inline = false;
  if (path.endsWith(" inline")) {
    inline = true;
    path = path.slice(0, -7);
  }
  if (source.kind === "at-rule") {
    inline = true;
  }
  let resolvedValue = designSystem.resolveThemeValue(path, inline);
  if (!resolvedValue) {
    if (fallback.length > 0) return fallback.join(", ");
    throw new Error(
      `Could not resolve value for theme function: \`theme(${path})\`. Consider checking if the variable name is correct or provide a fallback value to silence this error.`
    );
  }
  if (fallback.length === 0) {
    return resolvedValue;
  }
  let joinedFallback = fallback.join(", ");
  if (joinedFallback === "initial") return resolvedValue;
  if (resolvedValue === "initial") return joinedFallback;
  if (resolvedValue.startsWith("var(") || resolvedValue.startsWith("theme(") || resolvedValue.startsWith("--theme(")) {
    let valueAst = parse(resolvedValue);
    injectFallbackForInitialFallback(valueAst, joinedFallback);
    return toCss(valueAst);
  }
  return resolvedValue;
}
function legacyTheme(designSystem, _source, path, ...fallback) {
  path = eventuallyUnquote(path);
  let resolvedValue = designSystem.resolveThemeValue(path);
  if (!resolvedValue && fallback.length > 0) {
    return fallback.join(", ");
  }
  if (!resolvedValue) {
    throw new Error(
      `Could not resolve value for theme function: \`theme(${path})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`
    );
  }
  return resolvedValue;
}
new RegExp(
  Object.keys(CSS_FUNCTIONS).map((x) => `${x}\\(`).join("|")
);
function eventuallyUnquote(value) {
  if (value[0] !== "'" && value[0] !== '"') return value;
  let unquoted = "";
  let quoteChar = value[0];
  for (let i = 1; i < value.length - 1; i++) {
    let currentChar = value[i];
    let nextChar = value[i + 1];
    if (currentChar === "\\" && (nextChar === quoteChar || nextChar === "\\")) {
      unquoted += nextChar;
      i++;
    } else {
      unquoted += currentChar;
    }
  }
  return unquoted;
}
function injectFallbackForInitialFallback(ast, fallback) {
  walk(ast, (node) => {
    if (node.kind !== "function") return;
    if (node.value !== "var" && node.value !== "theme" && node.value !== "--theme") return;
    if (node.nodes.length === 1) {
      node.nodes.push({
        kind: "word",
        value: `, ${fallback}`
      });
    } else {
      let lastNode = node.nodes[node.nodes.length - 1];
      if (lastNode.kind === "word" && lastNode.value === "initial") {
        lastNode.value = fallback;
      }
    }
  });
}
new DefaultMap((input) => {
  let ast = parse(input);
  let drop = /* @__PURE__ */ new Set();
  walk(ast, (node, { parent }) => {
    let parentArray = parent === null ? ast : parent.nodes ?? [];
    if (node.kind === "word" && // Operators
    (node.value === "+" || node.value === "-" || node.value === "*" || node.value === "/")) {
      let idx = parentArray.indexOf(node) ?? -1;
      if (idx === -1) return;
      let previous = parentArray[idx - 1];
      if ((previous == null ? void 0 : previous.kind) !== "separator" || previous.value !== " ") return;
      let next = parentArray[idx + 1];
      if ((next == null ? void 0 : next.kind) !== "separator" || next.value !== " ") return;
      drop.add(previous);
      drop.add(next);
    } else if (node.kind === "separator" && node.value.trim() === "/") {
      node.value = "/";
    } else if (node.kind === "separator" && node.value.length > 0 && node.value.trim() === "") {
      if (parentArray[0] === node || parentArray[parentArray.length - 1] === node) {
        drop.add(node);
      }
    } else if (node.kind === "separator" && node.value.trim() === ",") {
      node.value = ",";
    }
  });
  if (drop.size > 0) {
    walk(ast, (node, { replaceWith }) => {
      if (drop.has(node)) {
        drop.delete(node);
        replaceWith([]);
      }
    });
  }
  recursivelyEscapeUnderscores(ast);
  return toCss(ast);
});
new DefaultMap((input) => {
  let ast = parse(input);
  if (ast.length === 3 && // &
  ast[0].kind === "word" && ast[0].value === "&" && // :
  ast[1].kind === "separator" && ast[1].value === ":" && // is(…)
  ast[2].kind === "function" && ast[2].value === "is") {
    return toCss(ast[2].nodes);
  }
  return input;
});
function recursivelyEscapeUnderscores(ast) {
  for (let node of ast) {
    switch (node.kind) {
      case "function": {
        if (node.value === "url" || node.value.endsWith("_url")) {
          node.value = escapeUnderscore(node.value);
          break;
        }
        if (node.value === "var" || node.value.endsWith("_var") || node.value === "theme" || node.value.endsWith("_theme")) {
          node.value = escapeUnderscore(node.value);
          for (let i = 0; i < node.nodes.length; i++) {
            recursivelyEscapeUnderscores([node.nodes[i]]);
          }
          break;
        }
        node.value = escapeUnderscore(node.value);
        recursivelyEscapeUnderscores(node.nodes);
        break;
      }
      case "separator":
        node.value = escapeUnderscore(node.value);
        break;
      case "word": {
        if (node.value[0] !== "-" || node.value[1] !== "-") {
          node.value = escapeUnderscore(node.value);
        }
        break;
      }
      default:
        never(node);
    }
  }
}
new DefaultMap((value) => {
  let ast = parse(value);
  return ast.length === 1 && ast[0].kind === "function" && ast[0].value === "var";
});
function never(value) {
  throw new Error(`Unexpected value: ${value}`);
}
function escapeUnderscore(value) {
  return value.replaceAll("_", String.raw`\_`).replaceAll(" ", "_");
}
function compileCandidates(rawCandidates, designSystem, { onInvalidCandidate } = {}) {
  let nodeSorting = /* @__PURE__ */ new Map();
  let astNodes = [];
  let matches = /* @__PURE__ */ new Map();
  for (let rawCandidate of rawCandidates) {
    if (designSystem.invalidCandidates.has(rawCandidate)) {
      onInvalidCandidate == null ? void 0 : onInvalidCandidate(rawCandidate);
      continue;
    }
    let candidates = designSystem.parseCandidate(rawCandidate);
    if (candidates.length === 0) {
      onInvalidCandidate == null ? void 0 : onInvalidCandidate(rawCandidate);
      continue;
    }
    matches.set(rawCandidate, candidates);
  }
  let variantOrderMap = designSystem.getVariantOrder();
  for (let [rawCandidate, candidates] of matches) {
    let found = false;
    for (let candidate of candidates) {
      let rules = designSystem.compileAstNodes(candidate);
      if (rules.length === 0) continue;
      found = true;
      for (let { node, propertySort } of rules) {
        let variantOrder = 0n;
        for (let variant of candidate.variants) {
          variantOrder |= 1n << BigInt(variantOrderMap.get(variant));
        }
        nodeSorting.set(node, {
          properties: propertySort,
          variants: variantOrder,
          candidate: rawCandidate
        });
        astNodes.push(node);
      }
    }
    if (!found) {
      onInvalidCandidate == null ? void 0 : onInvalidCandidate(rawCandidate);
    }
  }
  astNodes.sort((a, z) => {
    let aSorting = nodeSorting.get(a);
    let zSorting = nodeSorting.get(z);
    if (aSorting.variants - zSorting.variants !== 0n) {
      return Number(aSorting.variants - zSorting.variants);
    }
    let offset = 0;
    while (offset < aSorting.properties.order.length && offset < zSorting.properties.order.length && aSorting.properties.order[offset] === zSorting.properties.order[offset]) {
      offset += 1;
    }
    return (
      // Sort by lowest property index first
      (aSorting.properties.order[offset] ?? Infinity) - (zSorting.properties.order[offset] ?? Infinity) || // Sort by most properties first, then by least properties
      zSorting.properties.count - aSorting.properties.count || // Sort alphabetically
      compare(aSorting.candidate, zSorting.candidate)
    );
  });
  return {
    astNodes,
    nodeSorting
  };
}
var libExports = requireLib();
const parseValue = /* @__PURE__ */ getDefaultExportFromCjs(libExports);
function getUtilityList(design) {
  return design.getClassList().map((classEntry) => ({
    kind: "utility",
    selector: classEntry[0]
  }));
}
function getVariantList(design) {
  return design.getVariants().map((classEntry) => ({
    kind: "variant",
    selector: classEntry.name
  }));
}
function unsupportedUtilityList() {
  return [
    {
      kind: "utility",
      selector: "flex"
    }
  ];
}
function defaultSort(arrayOfTuples) {
  return arrayOfTuples.sort(([, a], [, z]) => {
    if (a === z) return 0;
    if (a === null) return -1;
    if (z === null) return 1;
    return bigSign(a - z);
  }).map(([className]) => className);
}
function bigSign(value) {
  if (value > 0n) {
    return 1;
  } else if (value === 0n) {
    return 0;
  } else {
    return -1;
  }
}
async function getVariableList(design) {
  return Array.from(design.theme.entries()).map(
    (entry, index) => {
      const variable = entry[0];
      let isCalculated = false;
      let calculatedValue = null;
      const defaultValue = entry[1].value;
      if (typeof defaultValue === "string" && defaultValue.includes("rem")) {
        calculatedValue = `${parseFloat(defaultValue) * 16}px`;
        isCalculated = true;
      }
      return {
        key: variable,
        value: isCalculated ? calculatedValue : defaultValue,
        index
      };
    }
  );
}
async function sortClasses(design, classList) {
  return defaultSort(design.getClassOrder(classList));
}
function addPixelEquivalentsToValue(value, rootFontSize) {
  if (!(value == null ? void 0 : value.includes("rem"))) {
    return value;
  }
  const commentPool = [];
  parseValue(value).walk((node) => {
    if (node.type !== "word") {
      return true;
    }
    const unit = parseValue.unit(node.value);
    if (!unit || unit.unit !== "rem" && unit.unit !== "rem;") {
      return false;
    }
    const commentStr = ` /* ${parseFloat(unit.number) * rootFontSize}px */`;
    commentPool.push({
      content: commentStr,
      sourceEndIndex: node.sourceEndIndex
    });
    return false;
  });
  let offset = 0;
  commentPool.forEach((comment) => {
    value = value.slice(0, comment.sourceEndIndex + offset) + comment.content + value.slice(comment.sourceEndIndex + offset);
    offset += comment.content.length;
  });
  return value;
}
async function candidatesToCss(design, classes) {
  let css = design.candidatesToCss(classes);
  css = css.map((value) => value ? addPixelEquivalentsToValue(value, 16) : value);
  return css;
}
function getClassList(design) {
  const classList = getUtilityList(design).concat(
    getVariantList(design).concat(unsupportedUtilityList())
  );
  const excludeUtilities = (classEntity) => {
    return classEntity.selector !== "*";
  };
  const prepareClass = (classEntity) => {
    const astNodes = compileCandidates([classEntity.selector], design).astNodes;
    const nodes = astNodes.flatMap((node) => "nodes" in node ? node.nodes : []);
    let css = design.candidatesToCss([classEntity.selector]).at(0);
    if (css) {
      css = css.replaceAll(/([0-9.]+)rem/g, (_match, p1) => {
        return `${parseFloat(p1) * 16}px`;
      });
    }
    css = css == null ? void 0 : css.replaceAll(/\\/g, "");
    return {
      ...classEntity,
      declarations: nodes == null ? void 0 : nodes.filter(
        (node) => node.kind === "declaration"
      ),
      css
    };
  };
  const sortselectors = (a, z) => {
    if (a.selector.startsWith("-") && !z.selector.startsWith("-")) {
      return 1;
    } else if (!a.selector.startsWith("-") && z.selector.startsWith("-")) {
      return -1;
    } else {
      return compare(a.selector, z.selector);
    }
  };
  return classList.filter(excludeUtilities).map(prepareClass).sort(sortselectors);
}
function naturalExpand(value, total) {
  const length = 8;
  return ("0".repeat(length) + value).slice(-8);
}
export {
  getClassList as a,
  bigSign as b,
  candidatesToCss as c,
  addPixelEquivalentsToValue as d,
  getVariableList as g,
  naturalExpand as n,
  sortClasses as s
};
