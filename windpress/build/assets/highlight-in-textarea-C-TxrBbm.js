var e = /* @__PURE__ */ new Map();
function t(t2) {
  var o2 = e.get(t2);
  o2 && o2.destroy();
}
function o(t2) {
  var o2 = e.get(t2);
  o2 && o2.update();
}
var r = null;
"undefined" == typeof window ? ((r = function(e2) {
  return e2;
}).destroy = function(e2) {
  return e2;
}, r.update = function(e2) {
  return e2;
}) : ((r = function(t2, o2) {
  return t2 && Array.prototype.forEach.call(t2.length ? t2 : [t2], function(t3) {
    return function(t4) {
      if (t4 && t4.nodeName && "TEXTAREA" === t4.nodeName && !e.has(t4)) {
        var o3, r2 = null, n2 = window.getComputedStyle(t4), i = (o3 = t4.value, function() {
          a({ testForHeightReduction: "" === o3 || !t4.value.startsWith(o3), restoreTextAlign: null }), o3 = t4.value;
        }), l = (function(o4) {
          t4.removeEventListener("autosize:destroy", l), t4.removeEventListener("autosize:update", s), t4.removeEventListener("input", i), window.removeEventListener("resize", s), Object.keys(o4).forEach(function(e2) {
            return t4.style[e2] = o4[e2];
          }), e.delete(t4);
        }).bind(t4, { height: t4.style.height, resize: t4.style.resize, textAlign: t4.style.textAlign, overflowY: t4.style.overflowY, overflowX: t4.style.overflowX, wordWrap: t4.style.wordWrap });
        t4.addEventListener("autosize:destroy", l), t4.addEventListener("autosize:update", s), t4.addEventListener("input", i), window.addEventListener("resize", s), t4.style.overflowX = "hidden", t4.style.wordWrap = "break-word", e.set(t4, { destroy: l, update: s }), s();
      }
      function a(e2) {
        var o4, i2, l2 = e2.restoreTextAlign, s2 = void 0 === l2 ? null : l2, d = e2.testForHeightReduction, u = void 0 === d || d, c = n2.overflowY;
        if (0 !== t4.scrollHeight && ("vertical" === n2.resize ? t4.style.resize = "none" : "both" === n2.resize && (t4.style.resize = "horizontal"), u && (o4 = function(e3) {
          for (var t5 = []; e3 && e3.parentNode && e3.parentNode instanceof Element; ) e3.parentNode.scrollTop && t5.push([e3.parentNode, e3.parentNode.scrollTop]), e3 = e3.parentNode;
          return function() {
            return t5.forEach(function(e4) {
              var t6 = e4[0], o5 = e4[1];
              t6.style.scrollBehavior = "auto", t6.scrollTop = o5, t6.style.scrollBehavior = null;
            });
          };
        }(t4), t4.style.height = ""), i2 = "content-box" === n2.boxSizing ? t4.scrollHeight - (parseFloat(n2.paddingTop) + parseFloat(n2.paddingBottom)) : t4.scrollHeight + parseFloat(n2.borderTopWidth) + parseFloat(n2.borderBottomWidth), "none" !== n2.maxHeight && i2 > parseFloat(n2.maxHeight) ? ("hidden" === n2.overflowY && (t4.style.overflow = "scroll"), i2 = parseFloat(n2.maxHeight)) : "hidden" !== n2.overflowY && (t4.style.overflow = "hidden"), t4.style.height = i2 + "px", s2 && (t4.style.textAlign = s2), o4 && o4(), r2 !== i2 && (t4.dispatchEvent(new Event("autosize:resized", { bubbles: true })), r2 = i2), c !== n2.overflow && !s2)) {
          var v = n2.textAlign;
          "hidden" === n2.overflow && (t4.style.textAlign = "start" === v ? "end" : "start"), a({ restoreTextAlign: v, testForHeightReduction: true });
        }
      }
      function s() {
        a({ testForHeightReduction: true, restoreTextAlign: null });
      }
    }(t3);
  }), t2;
}).destroy = function(e2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], t), e2;
}, r.update = function(e2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], o), e2;
});
var n = r;
function HighlightInTextarea(el, config) {
  this.init(el, config);
}
HighlightInTextarea.instance = function(el, config) {
  return new HighlightInTextarea(el, config);
};
HighlightInTextarea.prototype = {
  ID: "hit",
  init: function(el, config) {
    if (typeof el === "string") {
      this.el = document.querySelector(el);
    } else {
      this.el = el;
    }
    if (this.getType(config) === "custom") {
      this.highlight = config;
      this.generate();
    } else {
      console.error("valid config object not provided");
    }
  },
  // returns identifier strings that aren't necessarily "real" JavaScript types
  getType: function(instance) {
    let type = typeof instance;
    if (!instance) {
      return "falsey";
    } else if (Array.isArray(instance)) {
      if (instance.length === 2 && typeof instance[0] === "number" && typeof instance[1] === "number") {
        return "range";
      } else {
        return "array";
      }
    } else if (type === "object") {
      if (instance instanceof RegExp) {
        return "regexp";
      } else if (instance.hasOwnProperty("highlight")) {
        return "custom";
      }
    } else if (type === "function" || type === "string") {
      return type;
    }
    return "other";
  },
  generate: function() {
    this.el.classList.add(this.ID + "-input", this.ID + "-content");
    this.el.addEventListener("input", this.handleInput.bind(this));
    this.el.addEventListener("scroll", this.handleScroll.bind(this));
    this.highlights = document.createElement("div");
    this.highlights.classList.add(
      this.ID + "-highlights",
      this.ID + "-content"
    );
    this.backdrop = document.createElement("div");
    this.backdrop.classList.add(this.ID + "-backdrop");
    this.backdrop.append(this.highlights);
    this.container = document.createElement("div");
    this.container.classList.add(this.ID + "-container");
    this.el.parentNode.insertBefore(this.container, this.el.nextSibling);
    this.container.append(this.backdrop);
    this.container.append(this.el);
    this.container.addEventListener(
      "scroll",
      this.blockContainerScroll.bind(this)
    );
    this.handleInput();
  },
  handleInput: function() {
    let input = this.el.value;
    let ranges = this.getRanges(input, this.highlight);
    let unstaggeredRanges = this.removeStaggeredRanges(ranges);
    let boundaries = this.getBoundaries(unstaggeredRanges);
    this.renderMarks(boundaries);
  },
  getRanges: function(input, highlight) {
    let type = this.getType(highlight);
    switch (type) {
      case "array":
        return this.getArrayRanges(input, highlight);
      case "function":
        return this.getFunctionRanges(input, highlight);
      case "regexp":
        return this.getRegExpRanges(input, highlight);
      case "string":
        return this.getStringRanges(input, highlight);
      case "range":
        return this.getRangeRanges(input, highlight);
      case "custom":
        return this.getCustomRanges(input, highlight);
      default:
        if (!highlight) {
          return [];
        } else {
          console.error("unrecognized highlight type");
        }
    }
  },
  getArrayRanges: function(input, arr) {
    let ranges = arr.map(this.getRanges.bind(this, input));
    return Array.prototype.concat.apply([], ranges);
  },
  getFunctionRanges: function(input, func) {
    return this.getRanges(input, func(input));
  },
  getRegExpRanges: function(input, regex) {
    let ranges = [];
    let match;
    while (match = regex.exec(input), match !== null) {
      ranges.push([match.index, match.index + match[0].length]);
      if (!regex.global) {
        break;
      }
    }
    return ranges;
  },
  getStringRanges: function(input, str) {
    let ranges = [];
    let inputLower = input.toLowerCase();
    let strLower = str.toLowerCase();
    let index = 0;
    while (index = inputLower.indexOf(strLower, index), index !== -1) {
      ranges.push([index, index + strLower.length]);
      index += strLower.length;
    }
    return ranges;
  },
  getRangeRanges: function(input, range) {
    return [range];
  },
  getCustomRanges: function(input, custom) {
    let ranges = this.getRanges(input, custom.highlight);
    if (custom.className) {
      ranges.forEach(function(range) {
        if (range.className) {
          range.className = custom.className + " " + range.className;
        } else {
          range.className = custom.className;
        }
      });
    }
    if (custom.blank) {
      ranges.forEach(function(range) {
        range.blank = custom.blank;
      });
    }
    return ranges;
  },
  // prevent staggered overlaps (clean nesting is fine)
  removeStaggeredRanges: function(ranges) {
    let unstaggeredRanges = [];
    ranges.forEach(function(range) {
      let isStaggered = unstaggeredRanges.some(function(unstaggeredRange) {
        let isStartInside = range[0] > unstaggeredRange[0] && range[0] < unstaggeredRange[1];
        let isStopInside = range[1] > unstaggeredRange[0] && range[1] < unstaggeredRange[1];
        return isStartInside !== isStopInside;
      });
      if (!isStaggered) {
        unstaggeredRanges.push(range);
      }
    });
    return unstaggeredRanges;
  },
  getBoundaries: function(ranges) {
    let boundaries = [];
    ranges.forEach(function(range) {
      boundaries.push({
        type: "start",
        index: range[0],
        className: range.className,
        blank: range.blank
      });
      boundaries.push({
        type: "stop",
        index: range[1]
      });
    });
    this.sortBoundaries(boundaries);
    return boundaries;
  },
  sortBoundaries: function(boundaries) {
    boundaries.sort(function(a, b) {
      if (a.index !== b.index) {
        return b.index - a.index;
      } else if (a.type === "stop" && b.type === "start") {
        return 1;
      } else if (a.type === "start" && b.type === "stop") {
        return -1;
      } else {
        return 0;
      }
    });
  },
  renderMarks: function(boundaries) {
    let input = this.el.value;
    const originalInput = input;
    boundaries.forEach(function(boundary, index) {
      let markup;
      if (boundary.type === "start") {
        markup = "{{hit-mark-start|" + index + "}}";
      } else {
        markup = "{{hit-mark-stop}}";
      }
      input = input.slice(0, boundary.index) + markup + input.slice(boundary.index);
    });
    input = input.replace(/\n({{hit-mark-stop}})?$/, "\n$1");
    input = input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    input = input.replace(
      /{{hit-mark-start\|(\d+)}}/g,
      function(match, subMatch) {
        const className = boundaries[+subMatch].className;
        if (className) {
          let openMark = '<mark class="' + className + '"';
          if (className === "word") {
            let dw = originalInput.slice(boundaries[+subMatch].index, boundaries[+subMatch - 1].index);
            dw = dw.replace(/"/g, "&quot;");
            openMark += ' data-word="' + dw + '"';
          }
          return openMark + ">";
        } else {
          return "<mark>";
        }
      }
    );
    input = input.replace(/{{hit-mark-stop}}/g, "</mark>");
    input += '<mark class="placeholder"> \u26A1 </mark>';
    this.highlights.innerHTML = input;
    this.el.dispatchEvent(new CustomEvent("highlights-updated"));
  },
  handleScroll: function() {
    this.backdrop.scrollTop = this.el.scrollTop;
    let scrollLeft = this.el.scrollLeft;
    if (scrollLeft > 0) {
      this.backdrop.style.transform = "translateX(" + -scrollLeft + "px)";
    } else {
      this.backdrop.style.transform = "";
    }
  },
  // in Chrome, page up/down in the textarea will shift stuff within the
  // container (despite the CSS), this immediately reverts the shift
  blockContainerScroll: function() {
    this.container.scrollLeft = 0;
  },
  destroy: function() {
    this.container.parentElement.replaceChild(this.el, this.container);
    this.el.classList.remove(this.ID + "-content", this.ID + "-input");
  }
};
export {
  HighlightInTextarea as H,
  n
};
