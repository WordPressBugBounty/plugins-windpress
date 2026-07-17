import { a as e, o as t, t as n } from "./rolldown-runtime-DAXXjFlN.js";
import { n as r, t as i } from "./dist-DUC9kpkj.js";
import { t as a } from "./preload-helper-CtT0-S4g.js";
import { n as o } from "./base64-oxnRbpjD.js";
import { a as s, c, i as l, t as u } from "./lib-BfAoLx_4.js";
import { t as d } from "./path-browserify-BXFVjck0.js";
let L, g, R, m, J, w, K, v, Y, p;
let __tla = (async () => {
  var f = t(d(), 1);
  p = function(e2) {
    try {
      let t2 = new URL(e2);
      return t2.protocol === `http:` || t2.protocol === `https:`;
    } catch {
      return false;
    }
  };
  m = async function(e2, t2, n2, r2 = {}) {
    let i2;
    if (e2.startsWith(`.`) || e2.startsWith(`/`)) return g(e2, t2, n2, r2);
    if (n2 === `plugin`) {
      e2.startsWith(`http`) || (e2 = `https://esm.sh/${e2}`);
      try {
        i2 = await h(e2, t2, n2);
      } catch (t3) {
        throw t3 instanceof Error ? Error(`The ${n2} file "${e2}" could not be loaded. ${t3.message}`) : Error(`The ${n2} file "${e2}" could not be loaded.`);
      }
    }
    if (!i2) throw Error(`The ${n2} file "${e2}" is not a valid module.`);
    return {
      module: i2,
      base: t2
    };
  };
  async function h(e2, t2, n2) {
    return await a(() => import(e2).then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e3) => e3.default ?? e3), [], import.meta.url);
  }
  g = async function(e2, t2 = `/`, n2, r2 = {}) {
    t2 ?? (t2 = `/`);
    let i2 = f.default.resolve(t2, e2);
    if (!r2[i2]) throw Error(`The ${n2} file "${f.default.resolve(`/`, e2)}" does not exist in the volume.`);
    let s2 = _(r2[i2], e2, r2);
    return {
      module: await a(() => import(`data:text/javascript;base64,${o(s2)}`).then(async (m2) => {
        await m2.__tla;
        return m2;
      }).then((e3) => e3.default ?? e3), [], import.meta.url),
      base: f.default.dirname(e2)
    };
  };
  function _(e2, t2, n2 = {}) {
    let r2 = e2.replace(/module.exports\s*=\s*/, `export default `).replace(/import\s+({[^}]+})\s+from\s+['"](.+)['"]/g, (e3, t3, n3) => `import ${t3.replace(/\n/g, ``)} from '${n3}'`).split(`
`).map((e3) => e3.replace(/\bimport\s+(.+)\s+from\s+['"](.+)['"]/g, (e4, t3, n3) => (!n3.startsWith(`http`) && !n3.startsWith(`.`) && !n3.startsWith(`/`) && (n3 = `https://esm.sh/${n3}`), `const ${t3.indexOf(`{`) === -1 ? `{default: ${t3}}` : t3.replace(/\s+as\s+/, `: `)} = await import('${n3}')`)).replace(/\brequire\(['"]([^'"]*)['"]\)/g, (e4, t3) => (!t3.startsWith(`http`) && !t3.startsWith(`.`) && !t3.startsWith(`/`) && (t3 = `https://esm.sh/${t3}`), `(await import('${t3}')).default`))).join(`
`), i2 = /import\s*(?:[^'"]*\s*from\s*)?['"]([^'"]+)['"]|import\(\s*['"]([^'"]+)['"]\s*\)/g, a2 = [], o2, s2 = 0;
    for (; (o2 = i2.exec(r2)) !== null; ) {
      let [e3, r3, i3] = o2, s3 = r3 || i3;
      if (p(s3) || !s3.startsWith(`.`) && !s3.startsWith(`/`)) continue;
      let c2 = f.default.resolve(f.default.dirname(t2), s3);
      if (!n2[c2]) throw Error(`${t2}: The module file "${c2}" does not exist in the volume.`);
      a2.push({
        start: o2.index + e3.indexOf(s3),
        end: o2.index + e3.indexOf(s3) + s3.length,
        replacement: new URL(s3, window.windpress.user_data.data_dir.url).href
      });
    }
    return a2.forEach(({ start: e3, end: t3, replacement: n3 }) => {
      r2 = r2.slice(0, e3 + s2) + n3 + r2.slice(t3 + s2), s2 += n3.length - (t3 - e3);
    }), r2;
  }
  let y, b, x, S, C, T, E, D, O, k, A, j, M, N, P, F, I, z, B, V, H, U, W, G, q;
  v = n(((e2, t2) => {
    var n2 = String, r2 = function() {
      return {
        isColorSupported: false,
        reset: n2,
        bold: n2,
        dim: n2,
        italic: n2,
        underline: n2,
        inverse: n2,
        hidden: n2,
        strikethrough: n2,
        black: n2,
        red: n2,
        green: n2,
        yellow: n2,
        blue: n2,
        magenta: n2,
        cyan: n2,
        white: n2,
        gray: n2,
        bgBlack: n2,
        bgRed: n2,
        bgGreen: n2,
        bgYellow: n2,
        bgBlue: n2,
        bgMagenta: n2,
        bgCyan: n2,
        bgWhite: n2,
        blackBright: n2,
        redBright: n2,
        greenBright: n2,
        yellowBright: n2,
        blueBright: n2,
        magentaBright: n2,
        cyanBright: n2,
        whiteBright: n2,
        bgBlackBright: n2,
        bgRedBright: n2,
        bgGreenBright: n2,
        bgYellowBright: n2,
        bgBlueBright: n2,
        bgMagentaBright: n2,
        bgCyanBright: n2,
        bgWhiteBright: n2
      };
    };
    t2.exports = r2(), t2.exports.createColors = r2;
  }));
  y = n(((e2, t2) => {
    var n2 = v(), r2 = c(), i2 = class e3 extends Error {
      constructor(t3, n3, r3, i3, a2, o2) {
        super(t3), this.name = `CssSyntaxError`, this.reason = t3, a2 && (this.file = a2), i3 && (this.source = i3), o2 && (this.plugin = o2), n3 !== void 0 && r3 !== void 0 && (typeof n3 == `number` ? (this.line = n3, this.column = r3) : (this.line = n3.line, this.column = n3.column, this.endLine = r3.line, this.endColumn = r3.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, e3);
      }
      setMessage() {
        this.message = this.plugin ? this.plugin + `: ` : ``, this.message += this.file ? this.file : `<css input>`, this.line !== void 0 && (this.message += `:` + this.line + `:` + this.column), this.message += `: ` + this.reason;
      }
      showSourceCode(e4) {
        if (!this.source) return ``;
        let t3 = this.source;
        e4 ?? (e4 = n2.isColorSupported);
        let i3 = (e5) => e5, a2 = (e5) => e5, o2 = (e5) => e5;
        if (e4) {
          let { bold: e5, gray: t4, red: s3 } = n2.createColors(true);
          a2 = (t5) => e5(s3(t5)), i3 = (e6) => t4(e6), r2 && (o2 = (e6) => r2(e6));
        }
        let s2 = t3.split(/\r?\n/), c2 = Math.max(this.line - 3, 0), l2 = Math.min(this.line + 2, s2.length), u2 = String(l2).length;
        return s2.slice(c2, l2).map((e5, t4) => {
          let n3 = c2 + 1 + t4, r3 = ` ` + (` ` + n3).slice(-u2) + ` | `;
          if (n3 === this.line) {
            if (e5.length > 160) {
              let t6 = Math.max(0, this.column - 20), n4 = Math.max(this.column + 20, this.endColumn + 20), s3 = e5.slice(t6, n4), c3 = i3(r3.replace(/\d/g, ` `)) + e5.slice(0, Math.min(this.column - 1, 19)).replace(/[^\t]/g, ` `);
              return a2(`>`) + i3(r3) + o2(s3) + `
 ` + c3 + a2(`^`);
            }
            let t5 = i3(r3.replace(/\d/g, ` `)) + e5.slice(0, this.column - 1).replace(/[^\t]/g, ` `);
            return a2(`>`) + i3(r3) + o2(e5) + `
 ` + t5 + a2(`^`);
          }
          return ` ` + i3(r3) + o2(e5);
        }).join(`
`);
      }
      toString() {
        let e4 = this.showSourceCode();
        return e4 && (e4 = `

` + e4 + `
`), this.name + `: ` + this.message + e4;
      }
    };
    t2.exports = i2, i2.default = i2;
  }));
  b = n(((e2, t2) => {
    var n2 = /(<)(\/?style\b)/gi, r2 = /(<)(!--)/g;
    function i2(e3) {
      return typeof e3 != `string` || !e3.includes(`<`) ? e3 : e3.replace(n2, `\\3c $2`).replace(r2, `\\3c $2`);
    }
    var a2 = {
      after: `
`,
      beforeClose: `
`,
      beforeComment: `
`,
      beforeDecl: `
`,
      beforeOpen: ` `,
      beforeRule: `
`,
      colon: `: `,
      commentLeft: ` `,
      commentRight: ` `,
      emptyBody: ``,
      indent: `    `,
      semicolon: false
    };
    function o2(e3) {
      return e3[0].toUpperCase() + e3.slice(1);
    }
    function s2(e3, t3) {
      let n3 = `@` + t3.name, r3 = t3.params ? e3.rawValue(t3, `params`) : ``;
      return t3.raws.afterName === void 0 ? r3 && (n3 += ` `) : n3 += t3.raws.afterName, n3 + r3;
    }
    function c2(e3, t3, n3) {
      let r3 = n3.nodes, i3 = r3.length - 1;
      for (; i3 > 0 && r3[i3].type === `comment`; ) --i3;
      let a3 = e3.raw(n3, `semicolon`), o3 = n3.type === `document`;
      for (let e4 = r3.length - 1; e4 >= 0; e4--) t3.push({
        document: o3,
        node: r3[e4],
        semicolon: i3 !== e4 || a3
      });
    }
    function l2(e3, t3, n3, r3) {
      let a3 = e3.raw(n3, `between`, `beforeOpen`);
      e3.builder(i2(r3 + a3) + `{`, n3, `start`);
      let o3 = n3.nodes && n3.nodes.length, s3 = () => {
        let t4 = o3 ? e3.raw(n3, `after`) : e3.raw(n3, `after`, `emptyBody`);
        t4 && e3.builder(i2(t4)), e3.builder(`}`, n3, `end`), n3.type === `rule` && n3.raws.ownSemicolon && e3.builder(i2(n3.raws.ownSemicolon), n3, `end`);
      };
      o3 ? (t3.push(s3), c2(e3, t3, n3)) : s3();
    }
    var u2 = class e3 {
      constructor(e4) {
        this.builder = e4;
      }
      atrule(e4, t3) {
        let n3 = s2(this, e4);
        if (e4.nodes) this.block(e4, n3);
        else {
          let r3 = (e4.raws.between || ``) + (t3 ? `;` : ``);
          this.builder(i2(n3 + r3), e4);
        }
      }
      beforeAfter(e4, t3) {
        let n3;
        n3 = e4.type === `decl` ? this.raw(e4, null, `beforeDecl`) : e4.type === `comment` ? this.raw(e4, null, `beforeComment`) : t3 === `before` ? this.raw(e4, null, `beforeRule`) : this.raw(e4, null, `beforeClose`);
        let r3 = e4.parent, i3 = 0;
        for (; r3 && r3.type !== `root`; ) i3 += 1, r3 = r3.parent;
        if (n3.includes(`
`)) {
          let t4 = this.raw(e4, null, `indent`);
          if (t4.length) for (let e5 = 0; e5 < i3; e5++) n3 += t4;
        }
        return n3;
      }
      block(e4, t3) {
        let n3 = this.raw(e4, `between`, `beforeOpen`);
        this.builder(i2(t3 + n3) + `{`, e4, `start`);
        let r3;
        e4.nodes && e4.nodes.length ? (this.body(e4), r3 = this.raw(e4, `after`)) : r3 = this.raw(e4, `after`, `emptyBody`), r3 && this.builder(i2(r3)), this.builder(`}`, e4, `end`);
      }
      body(t3) {
        let n3 = e3.prototype, r3 = [
          `atrule`,
          `block`,
          `body`,
          `rule`,
          `stringify`
        ].every((e4) => this[e4] === n3[e4]), a3 = [];
        for (c2(this, a3, t3); a3.length > 0; ) {
          let e4 = a3.pop();
          if (typeof e4 == `function`) {
            e4();
            continue;
          }
          let t4 = e4.node, n4 = this.raw(t4, `before`);
          n4 && this.builder(e4.document ? n4 : i2(n4)), r3 && t4.type === `rule` ? l2(this, a3, t4, this.rawValue(t4, `selector`)) : r3 && t4.type === `atrule` && t4.nodes ? l2(this, a3, t4, s2(this, t4)) : this.stringify(t4, e4.semicolon);
        }
      }
      comment(e4) {
        let t3 = this.raw(e4, `left`, `commentLeft`), n3 = this.raw(e4, `right`, `commentRight`);
        this.builder(i2(`/*` + t3 + e4.text + n3 + `*/`), e4);
      }
      decl(e4, t3) {
        let n3 = e4.raws, r3 = this.raw(e4, `between`, `colon`), a3 = e4.prop + r3 + this.rawValue(e4, `value`);
        e4.important && (a3 += n3.important || ` !important`), t3 && (a3 += `;`), this.builder(i2(a3), e4);
      }
      document(e4) {
        this.body(e4);
      }
      raw(e4, t3, n3) {
        let r3;
        if (n3 || (n3 = t3), t3 && (r3 = e4.raws[t3], r3 !== void 0)) return r3;
        let i3 = e4.parent;
        if (n3 === `before` && (!i3 || i3.type === `root` && i3.first === e4 || i3 && i3.type === `document`)) return ``;
        if (!i3) return a2[n3];
        let s3 = e4.root(), c3 = s3.rawCache || (s3.rawCache = {});
        if (c3[n3] !== void 0) return c3[n3];
        if (n3 === `before` || n3 === `after`) return this.beforeAfter(e4, n3);
        {
          let i4 = `raw` + o2(n3);
          this[i4] ? r3 = this[i4](s3, e4) : s3.walk((e5) => {
            if (r3 = e5.raws[t3], r3 !== void 0) return false;
          });
        }
        return r3 === void 0 && (r3 = a2[n3]), c3[n3] = r3, r3;
      }
      rawBeforeClose(e4) {
        let t3;
        return e4.walk((e5) => {
          if (e5.nodes && e5.nodes.length > 0 && e5.raws.after !== void 0) return t3 = e5.raws.after, t3.includes(`
`) && (t3 = t3.replace(/[^\n]+$/, ``)), false;
        }), t3 && (t3 = t3.replace(/\S/g, ``)), t3;
      }
      rawBeforeComment(e4, t3) {
        let n3;
        return e4.walkComments((e5) => {
          if (e5.raws.before !== void 0) return n3 = e5.raws.before, n3.includes(`
`) && (n3 = n3.replace(/[^\n]+$/, ``)), false;
        }), n3 === void 0 ? n3 = this.raw(t3, null, `beforeDecl`) : n3 && (n3 = n3.replace(/\S/g, ``)), n3;
      }
      rawBeforeDecl(e4, t3) {
        let n3;
        return e4.walkDecls((e5) => {
          if (e5.raws.before !== void 0) return n3 = e5.raws.before, n3.includes(`
`) && (n3 = n3.replace(/[^\n]+$/, ``)), false;
        }), n3 === void 0 ? n3 = this.raw(t3, null, `beforeRule`) : n3 && (n3 = n3.replace(/\S/g, ``)), n3;
      }
      rawBeforeOpen(e4) {
        let t3;
        return e4.walk((e5) => {
          if (e5.type !== `decl` && (t3 = e5.raws.between, t3 !== void 0)) return false;
        }), t3;
      }
      rawBeforeRule(e4) {
        let t3;
        return e4.walk((n3) => {
          if (n3.nodes && (n3.parent !== e4 || e4.first !== n3) && n3.raws.before !== void 0) return t3 = n3.raws.before, t3.includes(`
`) && (t3 = t3.replace(/[^\n]+$/, ``)), false;
        }), t3 && (t3 = t3.replace(/\S/g, ``)), t3;
      }
      rawColon(e4) {
        let t3;
        return e4.walkDecls((e5) => {
          if (e5.raws.between !== void 0) return t3 = e5.raws.between.replace(/[^\s:]/g, ``), false;
        }), t3;
      }
      rawEmptyBody(e4) {
        let t3;
        return e4.walk((e5) => {
          if (e5.nodes && e5.nodes.length === 0 && (t3 = e5.raws.after, t3 !== void 0)) return false;
        }), t3;
      }
      rawIndent(e4) {
        if (e4.raws.indent) return e4.raws.indent;
        let t3;
        return e4.walk((n3) => {
          let r3 = n3.parent;
          if (r3 && r3 !== e4 && r3.parent && r3.parent === e4 && n3.raws.before !== void 0) {
            let e5 = n3.raws.before.split(`
`);
            return t3 = e5[e5.length - 1], t3 = t3.replace(/\S/g, ``), false;
          }
        }), t3;
      }
      rawSemicolon(e4) {
        let t3;
        return e4.walk((e5) => {
          if (e5.nodes && e5.nodes.length && e5.last.type === `decl` && (t3 = e5.raws.semicolon, t3 !== void 0)) return false;
        }), t3;
      }
      rawValue(e4, t3) {
        let n3 = e4[t3], r3 = e4.raws[t3];
        return r3 && r3.value === n3 ? r3.raw : n3;
      }
      root(e4) {
        if (this.body(e4), e4.raws.after) {
          let t3 = e4.raws.after, n3 = e4.parent && e4.parent.type === `document`;
          this.builder(n3 ? t3 : i2(t3));
        }
      }
      rule(e4) {
        this.block(e4, this.rawValue(e4, `selector`)), e4.raws.ownSemicolon && this.builder(i2(e4.raws.ownSemicolon), e4, `end`);
      }
      stringify(e4, t3) {
        if (!this[e4.type]) throw Error(`Unknown AST node type ` + e4.type + `. Maybe you need to change PostCSS stringifier.`);
        this[e4.type](e4, t3);
      }
    };
    t2.exports = u2, u2.default = u2;
  }));
  x = n(((e2, t2) => {
    var n2 = b();
    function r2(e3, t3) {
      new n2(t3).stringify(e3);
    }
    t2.exports = r2, r2.default = r2;
  }));
  S = n(((e2, t2) => {
    t2.exports.isClean = /* @__PURE__ */ Symbol(`isClean`), t2.exports.my = /* @__PURE__ */ Symbol(`my`);
  }));
  C = n(((e2, t2) => {
    var n2 = y(), r2 = b(), i2 = x(), { isClean: a2, my: o2 } = S();
    function s2(e3, t3) {
      let n3 = new e3.constructor(), r3 = [
        [
          e3,
          n3,
          t3
        ]
      ];
      for (; r3.length > 0; ) {
        let [e4, t4, n4] = r3.pop();
        for (let i3 in e4) {
          if (!Object.prototype.hasOwnProperty.call(e4, i3) || i3 === `proxyCache`) continue;
          let a3 = e4[i3], o3 = typeof a3;
          if (i3 === `parent` && o3 === `object`) n4 && (t4[i3] = n4);
          else if (i3 === `source`) t4[i3] = a3;
          else if (Array.isArray(a3)) {
            let e5 = [];
            t4[i3] = e5;
            for (let n5 of a3) {
              let i4 = new n5.constructor();
              e5.push(i4), r3.push([
                n5,
                i4,
                t4
              ]);
            }
          } else {
            if (o3 === `object` && a3 !== null) {
              let e5 = new a3.constructor();
              r3.push([
                a3,
                e5,
                void 0
              ]), a3 = e5;
            }
            t4[i3] = a3;
          }
        }
      }
      return n3;
    }
    function c2(e3, t3) {
      if (t3 && t3.offset !== void 0) return t3.offset;
      let n3 = 1, r3 = 1, i3 = 0;
      for (let a3 = 0; a3 < e3.length; a3++) {
        if (r3 === t3.line && n3 === t3.column) {
          i3 = a3;
          break;
        }
        e3[a3] === `
` ? (n3 = 1, r3 += 1) : n3 += 1;
      }
      return i3;
    }
    var l2 = class e3 {
      get proxyOf() {
        return this;
      }
      constructor(e4 = {}) {
        this.raws = {}, this[a2] = false, this[o2] = true;
        for (let t3 of Object.keys(e4)) if (t3 !== `__proto__`) if (t3 === `nodes`) {
          this.nodes = [];
          for (let n3 of e4[t3]) typeof n3.clone == `function` && n3.parent ? this.append(n3.clone()) : this.append(n3);
        } else this[t3] = e4[t3];
      }
      addToError(e4) {
        if (e4.postcssNode = this, e4.stack && this.source && /\n\s{4}at /.test(e4.stack)) {
          let t3 = this.source;
          e4.stack = e4.stack.replace(/\n\s{4}at /, `$&${t3.input.from}:${t3.start.line}:${t3.start.column}$&`);
        }
        return e4;
      }
      after(e4) {
        return this.parent.insertAfter(this, e4), this;
      }
      assign(e4 = {}) {
        for (let t3 in e4) this[t3] = e4[t3];
        return this;
      }
      before(e4) {
        return this.parent.insertBefore(this, e4), this;
      }
      cleanRaws(e4) {
        delete this.raws.before, delete this.raws.after, e4 || delete this.raws.between;
      }
      clone(e4 = {}) {
        let t3 = s2(this);
        for (let n3 in e4) t3[n3] = e4[n3];
        return t3;
      }
      cloneAfter(e4 = {}) {
        let t3 = this.clone(e4);
        return this.parent.insertAfter(this, t3), t3;
      }
      cloneBefore(e4 = {}) {
        let t3 = this.clone(e4);
        return this.parent.insertBefore(this, t3), t3;
      }
      error(e4, t3 = {}) {
        if (this.source) {
          let { end: n3, start: r3 } = this.rangeBy(t3);
          return this.source.input.error(e4, {
            column: r3.column,
            line: r3.line
          }, {
            column: n3.column,
            line: n3.line
          }, t3);
        }
        return new n2(e4);
      }
      getProxyProcessor() {
        return {
          get(e4, t3) {
            return t3 === `proxyOf` ? e4 : t3 === `root` ? () => e4.root().toProxy() : e4[t3];
          },
          set(e4, t3, n3) {
            return e4[t3] === n3 ? true : (e4[t3] = n3, (t3 === `prop` || t3 === `value` || t3 === `name` || t3 === `params` || t3 === `important` || t3 === `text`) && e4.markDirty(), true);
          }
        };
      }
      markClean() {
        this[a2] = true;
      }
      markDirty() {
        if (this[a2]) {
          this[a2] = false;
          let e4 = this;
          for (; e4 = e4.parent; ) e4[a2] = false;
        }
      }
      next() {
        if (!this.parent) return;
        let e4 = this.parent.index(this);
        return this.parent.nodes[e4 + 1];
      }
      positionBy(e4 = {}) {
        let t3 = `document` in this.source.input ? this.source.input.document : this.source.input.css, n3 = {
          column: this.source.start.column,
          line: this.source.start.line,
          offset: c2(t3, this.source.start)
        };
        if (e4.index) n3 = this.positionInside(e4.index);
        else if (e4.word) {
          let r3 = t3.slice(c2(t3, this.source.start), c2(t3, this.source.end)).indexOf(e4.word);
          r3 !== -1 && (n3 = this.positionInside(r3));
        }
        return n3;
      }
      positionInside(e4) {
        let t3 = this.source.start.column, n3 = this.source.start.line, r3 = `document` in this.source.input ? this.source.input.document : this.source.input.css, i3 = c2(r3, this.source.start), a3 = i3 + e4;
        for (let e5 = i3; e5 < a3; e5++) r3[e5] === `
` ? (t3 = 1, n3 += 1) : t3 += 1;
        return {
          column: t3,
          line: n3,
          offset: a3
        };
      }
      prev() {
        if (!this.parent) return;
        let e4 = this.parent.index(this);
        return this.parent.nodes[e4 - 1];
      }
      rangeBy(e4 = {}) {
        let t3 = `document` in this.source.input ? this.source.input.document : this.source.input.css, n3 = {
          column: this.source.start.column,
          line: this.source.start.line,
          offset: c2(t3, this.source.start)
        }, r3 = this.source.end ? {
          column: this.source.end.column + 1,
          line: this.source.end.line,
          offset: typeof this.source.end.offset == `number` ? this.source.end.offset : c2(t3, this.source.end) + 1
        } : {
          column: n3.column + 1,
          line: n3.line,
          offset: n3.offset + 1
        };
        if (e4.word) {
          let i3 = t3.slice(c2(t3, this.source.start), c2(t3, this.source.end)).indexOf(e4.word);
          i3 !== -1 && (n3 = this.positionInside(i3), r3 = this.positionInside(i3 + e4.word.length));
        } else e4.start ? n3 = {
          column: e4.start.column,
          line: e4.start.line,
          offset: c2(t3, e4.start)
        } : typeof e4.index == `number` && (n3 = this.positionInside(e4.index)), e4.end ? r3 = {
          column: e4.end.column,
          line: e4.end.line,
          offset: c2(t3, e4.end)
        } : typeof e4.endIndex == `number` ? r3 = this.positionInside(e4.endIndex) : typeof e4.index == `number` && (r3 = this.positionInside(e4.index + 1));
        return (r3.line < n3.line || r3.line === n3.line && r3.column <= n3.column) && (r3 = {
          column: n3.column + 1,
          line: n3.line,
          offset: n3.offset + 1
        }), {
          end: r3,
          start: n3
        };
      }
      raw(e4, t3) {
        return new r2().raw(this, e4, t3);
      }
      remove() {
        return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
      }
      replaceWith(...e4) {
        if (this.parent) {
          let t3 = this, n3 = false;
          for (let r3 of e4) r3 === this ? n3 = true : n3 ? (this.parent.insertAfter(t3, r3), t3 = r3) : this.parent.insertBefore(t3, r3);
          n3 || this.remove();
        }
        return this;
      }
      root() {
        let e4 = this;
        for (; e4.parent && e4.parent.type !== `document`; ) e4 = e4.parent;
        return e4;
      }
      toJSON(t3, n3) {
        let r3 = n3 == null;
        n3 || (n3 = /* @__PURE__ */ new Map());
        let i3 = [], a3 = [
          [
            this,
            i3,
            0
          ]
        ];
        for (let t4 = 0; t4 < a3.length; t4++) {
          let [r4, i4, o4] = a3[t4], s3 = {};
          i4[o4] = s3;
          for (let t5 in r4) {
            if (!Object.prototype.hasOwnProperty.call(r4, t5) || t5 === `parent` || t5 === `proxyCache`) continue;
            let i5 = r4[t5];
            if (Array.isArray(i5)) {
              let r5 = [];
              s3[t5] = r5;
              for (let t6 = 0; t6 < i5.length; t6++) {
                let o5 = i5[t6];
                typeof o5 == `object` && o5.toJSON ? o5.toJSON === e3.prototype.toJSON ? a3.push([
                  o5,
                  r5,
                  t6
                ]) : r5[t6] = o5.toJSON(null, n3) : r5[t6] = o5;
              }
            } else if (typeof i5 == `object` && i5.toJSON) i5.toJSON === e3.prototype.toJSON ? a3.push([
              i5,
              s3,
              t5
            ]) : s3[t5] = i5.toJSON(null, n3);
            else if (t5 === `source`) {
              if (i5 == null) continue;
              let e4 = n3.get(i5.input);
              e4 ?? (e4 = n3.size, n3.set(i5.input, e4)), s3[t5] = {
                end: i5.end,
                inputId: e4,
                start: i5.start
              };
            } else s3[t5] = i5;
          }
        }
        let o3 = i3[0];
        return r3 && (o3.inputs = [
          ...n3.keys()
        ].map((e4) => e4.toJSON())), o3;
      }
      toProxy() {
        return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
      }
      toString(e4 = i2) {
        e4.stringify && (e4 = e4.stringify);
        let t3 = ``;
        return e4(this, (e5) => {
          t3 += e5;
        }), t3;
      }
      warn(e4, t3, n3 = {}) {
        let r3 = {
          node: this
        };
        for (let e5 in n3) r3[e5] = n3[e5];
        return e4.warn(t3, r3);
      }
    };
    t2.exports = l2, l2.default = l2;
  }));
  w = n(((e2, t2) => {
    var n2 = C(), r2 = class extends n2 {
      constructor(e3) {
        super(e3), this.type = `comment`;
      }
    };
    t2.exports = r2, r2.default = r2;
  }));
  T = n(((e2, t2) => {
    var n2 = C(), r2 = class extends n2 {
      get variable() {
        return this.prop.startsWith(`--`) || this.prop[0] === `$`;
      }
      constructor(e3) {
        e3 && e3.value !== void 0 && typeof e3.value != `string` && (e3 = {
          ...e3,
          value: String(e3.value)
        }), super(e3), this.type = `decl`;
      }
    };
    t2.exports = r2, r2.default = r2;
  }));
  E = n(((e2, t2) => {
    var n2 = w(), r2 = T(), i2 = C(), { isClean: a2, my: o2 } = S(), s2, c2, l2, u2;
    function d2(e3) {
      let t3 = e3.slice();
      for (; t3.length > 0; ) {
        let e4 = t3.pop();
        if (delete e4.source, e4.nodes) {
          e4.nodes = e4.nodes.slice();
          for (let n3 of e4.nodes) t3.push(n3);
        }
      }
      return e3.slice();
    }
    function f2(e3) {
      let t3 = [
        e3
      ];
      for (; t3.length > 0; ) {
        let e4 = t3.pop();
        if (e4[a2] = false, e4.proxyOf.nodes) for (let n3 of e4.proxyOf.nodes) t3.push(n3);
      }
    }
    var p2 = class e3 extends i2 {
      get first() {
        if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
      }
      get last() {
        if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
      }
      append(...e4) {
        for (let t3 of e4) {
          let e5 = this.normalize(t3, this.last);
          for (let t4 of e5) this.proxyOf.nodes.push(t4);
        }
        return this.markDirty(), this;
      }
      cleanRaws(t3) {
        let n3 = [
          this
        ];
        for (; n3.length > 0; ) {
          let r3 = n3.pop();
          if (r3 !== this && r3.cleanRaws !== e3.prototype.cleanRaws) {
            r3.cleanRaws(t3);
            continue;
          }
          if (i2.prototype.cleanRaws.call(r3, t3), r3.nodes) for (let e4 of r3.nodes) n3.push(e4);
        }
      }
      each(e4) {
        if (!this.proxyOf.nodes) return;
        let t3 = this.getIterator(), n3, r3;
        for (; this.indexes[t3] < this.proxyOf.nodes.length && (n3 = this.indexes[t3], r3 = e4(this.proxyOf.nodes[n3], n3), r3 !== false); ) this.indexes[t3] += 1;
        return delete this.indexes[t3], r3;
      }
      every(e4) {
        return this.nodes.every(e4);
      }
      getIterator() {
        this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
        let e4 = this.lastEach;
        return this.indexes[e4] = 0, e4;
      }
      getProxyProcessor() {
        return {
          get(e4, t3) {
            return t3 === `proxyOf` ? e4 : e4[t3] ? t3 === `each` || typeof t3 == `string` && t3.startsWith(`walk`) ? (...n3) => e4[t3](...n3.map((e5) => typeof e5 == `function` ? (t4, n4) => e5(t4.toProxy(), n4) : e5)) : t3 === `every` || t3 === `some` ? (n3) => e4[t3]((e5, ...t4) => n3(e5.toProxy(), ...t4)) : t3 === `root` ? () => e4.root().toProxy() : t3 === `nodes` ? e4.nodes.map((e5) => e5.toProxy()) : t3 === `first` || t3 === `last` ? e4[t3].toProxy() : e4[t3] : e4[t3];
          },
          set(e4, t3, n3) {
            return e4[t3] === n3 ? true : (e4[t3] = n3, (t3 === `name` || t3 === `params` || t3 === `selector`) && e4.markDirty(), true);
          }
        };
      }
      index(e4) {
        return typeof e4 == `number` ? e4 : (e4.proxyOf && (e4 = e4.proxyOf), this.proxyOf.nodes.indexOf(e4));
      }
      insertAfter(e4, t3) {
        let n3 = this.index(e4), r3 = this.normalize(t3, this.proxyOf.nodes[n3]).reverse();
        n3 = this.index(e4);
        for (let e5 of r3) this.proxyOf.nodes.splice(n3 + 1, 0, e5);
        let i3;
        for (let e5 in this.indexes) i3 = this.indexes[e5], n3 < i3 && (this.indexes[e5] = i3 + r3.length);
        return this.markDirty(), this;
      }
      insertBefore(e4, t3) {
        let n3 = this.index(e4), r3 = n3 === 0 && `prepend`, i3 = this.normalize(t3, this.proxyOf.nodes[n3], r3).reverse();
        n3 = this.index(e4);
        for (let e5 of i3) this.proxyOf.nodes.splice(n3, 0, e5);
        let a3;
        for (let e5 in this.indexes) a3 = this.indexes[e5], n3 <= a3 && (this.indexes[e5] = a3 + i3.length);
        return this.markDirty(), this;
      }
      normalize(t3, i3) {
        if (typeof t3 == `string`) t3 = d2(c2(t3).nodes);
        else if (t3 === void 0) t3 = [];
        else if (Array.isArray(t3)) {
          t3 = t3.slice(0);
          for (let e4 of t3) e4.parent && e4.parent.removeChild(e4, `ignore`);
        } else if (t3.type === `root` && this.type !== `document`) {
          t3 = t3.nodes.slice(0);
          for (let e4 of t3) e4.parent && e4.parent.removeChild(e4, `ignore`);
        } else if (t3.type) t3 = [
          t3
        ];
        else if (t3.prop) {
          if (t3.value === void 0) throw Error(`Value field is missed in node creation`);
          typeof t3.value != `string` && (t3.value = String(t3.value)), t3 = [
            new r2(t3)
          ];
        } else if (t3.selector || t3.selectors) t3 = [
          new u2(t3)
        ];
        else if (t3.name) t3 = [
          new s2(t3)
        ];
        else if (t3.text) t3 = [
          new n2(t3)
        ];
        else throw Error(`Unknown node type in node creation`);
        return t3.map((t4) => (t4[o2] || e3.rebuild(t4), t4 = t4.proxyOf, t4.parent && t4.parent.removeChild(t4), t4[a2] && f2(t4), t4.raws || (t4.raws = {}), t4.raws.before === void 0 && i3 && i3.raws.before !== void 0 && (t4.raws.before = i3.raws.before.replace(/\S/g, ``)), t4.parent = this.proxyOf, t4));
      }
      prepend(...e4) {
        e4 = e4.reverse();
        for (let t3 of e4) {
          let e5 = this.normalize(t3, this.first, `prepend`).reverse();
          for (let t4 of e5) this.proxyOf.nodes.unshift(t4);
          for (let t4 in this.indexes) this.indexes[t4] = this.indexes[t4] + e5.length;
        }
        return this.markDirty(), this;
      }
      push(e4) {
        return e4.parent = this, this.proxyOf.nodes.push(e4), this;
      }
      removeAll() {
        for (let e4 of this.proxyOf.nodes) e4.parent = void 0;
        return this.proxyOf.nodes = [], this.markDirty(), this;
      }
      removeChild(e4) {
        e4 = this.index(e4), this.proxyOf.nodes[e4].parent = void 0, this.proxyOf.nodes.splice(e4, 1);
        let t3;
        for (let n3 in this.indexes) t3 = this.indexes[n3], t3 >= e4 && (this.indexes[n3] = t3 - 1);
        return this.markDirty(), this;
      }
      replaceValues(e4, t3, n3) {
        return n3 || (n3 = t3, t3 = {}), this.walkDecls((r3) => {
          t3.props && !t3.props.includes(r3.prop) || t3.fast && !r3.value.includes(t3.fast) || (r3.value = r3.value.replace(e4, n3));
        }), this.markDirty(), this;
      }
      some(e4) {
        return this.nodes.some(e4);
      }
      walk(e4) {
        if (!this.proxyOf.nodes) return;
        let t3 = [
          {
            iterator: this.getIterator(),
            node: this.proxyOf
          }
        ];
        for (; t3.length > 0; ) {
          let { iterator: n3, node: r3 } = t3[t3.length - 1], i3 = r3.indexes[n3];
          if (i3 >= r3.proxyOf.nodes.length) {
            delete r3.indexes[n3], t3.pop();
            let e5 = t3[t3.length - 1];
            e5 && (e5.node.indexes[e5.iterator] += 1);
            continue;
          }
          let a3 = r3.proxyOf.nodes[i3], o3;
          try {
            o3 = e4(a3, i3);
          } catch (e5) {
            throw a3.addToError(e5);
          }
          if (o3 === false) {
            for (let e5 of t3) delete e5.node.indexes[e5.iterator];
            return false;
          }
          a3.walk && a3.proxyOf.nodes ? t3.push({
            iterator: a3.getIterator(),
            node: a3
          }) : r3.indexes[n3] += 1;
        }
      }
      walkAtRules(e4, t3) {
        return t3 ? e4 instanceof RegExp ? this.walk((n3, r3) => {
          if (n3.type === `atrule` && e4.test(n3.name)) return t3(n3, r3);
        }) : this.walk((n3, r3) => {
          if (n3.type === `atrule` && n3.name === e4) return t3(n3, r3);
        }) : (t3 = e4, this.walk((e5, n3) => {
          if (e5.type === `atrule`) return t3(e5, n3);
        }));
      }
      walkComments(e4) {
        return this.walk((t3, n3) => {
          if (t3.type === `comment`) return e4(t3, n3);
        });
      }
      walkDecls(e4, t3) {
        return t3 ? e4 instanceof RegExp ? this.walk((n3, r3) => {
          if (n3.type === `decl` && e4.test(n3.prop)) return t3(n3, r3);
        }) : this.walk((n3, r3) => {
          if (n3.type === `decl` && n3.prop === e4) return t3(n3, r3);
        }) : (t3 = e4, this.walk((e5, n3) => {
          if (e5.type === `decl`) return t3(e5, n3);
        }));
      }
      walkRules(e4, t3) {
        return t3 ? e4 instanceof RegExp ? this.walk((n3, r3) => {
          if (n3.type === `rule` && e4.test(n3.selector)) return t3(n3, r3);
        }) : this.walk((n3, r3) => {
          if (n3.type === `rule` && n3.selector === e4) return t3(n3, r3);
        }) : (t3 = e4, this.walk((e5, n3) => {
          if (e5.type === `rule`) return t3(e5, n3);
        }));
      }
    };
    p2.registerParse = (e3) => {
      c2 = e3;
    }, p2.registerRule = (e3) => {
      u2 = e3;
    }, p2.registerAtRule = (e3) => {
      s2 = e3;
    }, p2.registerRoot = (e3) => {
      l2 = e3;
    }, t2.exports = p2, p2.default = p2, p2.rebuild = (e3) => {
      let t3 = [
        e3
      ];
      for (; t3.length > 0; ) {
        let e4 = t3.pop();
        if (e4.type === `atrule` ? Object.setPrototypeOf(e4, s2.prototype) : e4.type === `rule` ? Object.setPrototypeOf(e4, u2.prototype) : e4.type === `decl` ? Object.setPrototypeOf(e4, r2.prototype) : e4.type === `comment` ? Object.setPrototypeOf(e4, n2.prototype) : e4.type === `root` && Object.setPrototypeOf(e4, l2.prototype), e4[o2] = true, e4.nodes) for (let n3 of e4.nodes) t3.push(n3);
      }
    };
  }));
  D = n(((e2, t2) => {
    var n2 = E(), r2 = class extends n2 {
      constructor(e3) {
        super(e3), this.type = `atrule`;
      }
      append(...e3) {
        return this.proxyOf.nodes || (this.nodes = []), super.append(...e3);
      }
      prepend(...e3) {
        return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e3);
      }
    };
    t2.exports = r2, r2.default = r2, n2.registerAtRule(r2);
  }));
  O = n(((e2, t2) => {
    var n2 = E(), r2, i2, a2 = class extends n2 {
      constructor(e3) {
        super({
          type: `document`,
          ...e3
        }), this.nodes || (this.nodes = []);
      }
      toResult(e3 = {}) {
        return new r2(new i2(), this, e3).stringify();
      }
    };
    a2.registerLazyResult = (e3) => {
      r2 = e3;
    }, a2.registerProcessor = (e3) => {
      i2 = e3;
    }, t2.exports = a2, a2.default = a2;
  }));
  k = n(((e2, t2) => {
    t2.exports = {
      nanoid: (e3 = 21) => {
        let t3 = ``, n2 = e3 | 0;
        for (; n2-- > 0; ) t3 += `useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[Math.random() * 64 | 0];
        return t3;
      },
      customAlphabet: (e3, t3 = 21) => (n2 = t3) => {
        let r2 = ``, i2 = n2 | 0;
        for (; i2-- > 0; ) r2 += e3[Math.random() * e3.length | 0];
        return r2;
      }
    };
  }));
  A = n(((e2, t2) => {
    r();
    var { existsSync: n2, readFileSync: a2 } = u(), { dirname: o2, isAbsolute: s2, join: l2, relative: f2, sep: p2 } = d(), { SourceMapConsumer: m2, SourceMapGenerator: h2 } = c();
    function g2(e3) {
      return i ? i.from(e3, `base64`).toString() : window.atob(e3);
    }
    var _2 = class {
      constructor(e3, t3) {
        if (t3.map === false) return;
        t3.unsafeMap && (this.unsafeMap = true), this.loadAnnotation(e3), this.inline = this.startWith(this.annotation, `data:`);
        let n3 = t3.map ? t3.map.prev : void 0, r2 = this.loadMap(t3.from, n3);
        !this.mapFile && t3.from && (this.mapFile = t3.from), this.mapFile && (this.root = o2(this.mapFile)), r2 && (this.text = r2);
      }
      consumer() {
        return this.consumerCache || (this.consumerCache = new m2(this.json || this.text)), this.consumerCache;
      }
      decodeInline(e3) {
        let t3 = /^data:application\/json;charset=utf-?8;base64,/, n3 = /^data:application\/json;base64,/, r2 = e3.match(/^data:application\/json;charset=utf-?8,/) || e3.match(/^data:application\/json,/);
        if (r2) return decodeURIComponent(e3.substr(r2[0].length));
        let i2 = e3.match(t3) || e3.match(n3);
        if (i2) return g2(e3.substr(i2[0].length));
        let a3 = e3.slice(22);
        throw a3 = a3.slice(0, a3.indexOf(`,`)), Error(`Unsupported source map encoding ` + a3);
      }
      getAnnotationURL(e3) {
        return e3.replace(/^\/\*\s*# sourceMappingURL=/, ``).trim();
      }
      isMap(e3) {
        return typeof e3 == `object` ? typeof e3.mappings == `string` || typeof e3._mappings == `string` || Array.isArray(e3.sections) : false;
      }
      loadAnnotation(e3) {
        let t3 = e3.match(/\/\*\s*# sourceMappingURL=/g);
        if (!t3) return;
        let n3 = e3.lastIndexOf(t3.pop()), r2 = e3.indexOf(`*/`, n3);
        n3 > -1 && r2 > -1 && (this.annotation = this.getAnnotationURL(e3.substring(n3, r2)));
      }
      loadFile(e3, t3, r2) {
        if (!r2 && !this.unsafeMap) {
          if (!/\.map$/i.test(e3)) return;
          if (t3) {
            let n3 = f2(o2(t3), e3);
            if (n3 === `..` || n3.startsWith(`..` + p2) || s2(n3)) return;
          }
        }
        if (this.root = o2(e3), n2(e3)) return this.mapFile = e3, a2(e3, `utf-8`).toString().trim();
      }
      loadMap(e3, t3) {
        if (t3 === false) return false;
        if (t3) {
          if (typeof t3 == `string`) return t3;
          if (typeof t3 == `function`) {
            let n3 = t3(e3);
            if (n3) {
              let t4 = this.loadFile(n3, e3, true);
              if (!t4) throw Error(`Unable to load previous source map: ` + n3.toString());
              return t4;
            }
          } else if (t3 instanceof m2) return h2.fromSourceMap(t3).toString();
          else if (t3 instanceof h2) return t3.toString();
          else if (this.isMap(t3)) return JSON.stringify(t3);
          else throw Error(`Unsupported previous source map format: ` + t3.toString());
        } else if (this.inline) return this.decodeInline(this.annotation);
        else if (this.annotation) {
          let t4 = this.annotation;
          e3 && (t4 = l2(o2(e3), t4));
          let n3 = this.loadFile(t4, e3, false);
          if (n3) try {
            this.json = JSON.parse(n3.replace(/^\)]}'[^\n]*\n/, ``));
          } catch {
            return;
          }
          return n3;
        }
      }
      startWith(e3, t3) {
        return e3 ? e3.substr(0, t3.length) === t3 : false;
      }
      withContent() {
        return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
      }
    };
    t2.exports = _2, _2.default = _2;
  }));
  j = n(((t2, n2) => {
    var { nanoid: r2 } = k(), { isAbsolute: i2, resolve: a2 } = d(), { SourceMapConsumer: o2, SourceMapGenerator: u2 } = c(), { fileURLToPath: f2, pathToFileURL: p2 } = (l(), e(s)), m2 = y(), h2 = A(), g2 = c(), _2 = /* @__PURE__ */ Symbol(`lineToIndexCache`), v2 = !!(o2 && u2), b2 = !!(a2 && i2);
    function x2(e2) {
      if (e2[_2]) return e2[_2];
      let t3 = e2.css.split(`
`), n3 = Array(t3.length), r3 = 0;
      for (let e3 = 0, i3 = t3.length; e3 < i3; e3++) n3[e3] = r3, r3 += t3[e3].length + 1;
      return e2[_2] = n3, n3;
    }
    var S2 = class {
      get from() {
        return this.file || this.id;
      }
      constructor(e2, t3 = {}) {
        if (e2 == null || typeof e2 == `object` && !e2.toString) throw Error(`PostCSS received ${e2} instead of CSS string`);
        if (this.css = e2.toString(), this.css[0] === `\uFEFF` || this.css[0] === `\uFFFE` ? (this.hasBOM = true, this.css = this.css.slice(1)) : this.hasBOM = false, this.document = this.css, t3.document && (this.document = t3.document.toString()), t3.from && (!b2 || /^\w+:\/\//.test(t3.from) || i2(t3.from) ? this.file = t3.from : this.file = a2(t3.from)), b2 && v2) {
          let e3 = new h2(this.css, t3);
          if (e3.text) {
            this.map = e3;
            let t4 = e3.consumer().file;
            !this.file && t4 && (this.file = this.mapResolve(t4));
          }
        }
        this.file || (this.id = `<input css ` + r2(6) + `>`), this.map && (this.map.file = this.from);
      }
      error(e2, t3, n3, r3 = {}) {
        let i3, a3, o3, s2, c2;
        if (t3 && typeof t3 == `object`) {
          let e3 = t3, r4 = n3;
          if (typeof e3.offset == `number`) {
            s2 = e3.offset;
            let r5 = this.fromOffset(s2);
            t3 = r5.line, n3 = r5.col;
          } else t3 = e3.line, n3 = e3.column, s2 = this.fromLineAndColumn(t3, n3);
          if (typeof r4.offset == `number`) {
            o3 = r4.offset;
            let e4 = this.fromOffset(o3);
            a3 = e4.line, i3 = e4.col;
          } else a3 = r4.line, i3 = r4.column, o3 = this.fromLineAndColumn(r4.line, r4.column);
        } else if (n3) s2 = this.fromLineAndColumn(t3, n3);
        else {
          s2 = t3;
          let e3 = this.fromOffset(s2);
          t3 = e3.line, n3 = e3.col;
        }
        let l2 = this.origin(t3, n3, a3, i3);
        return c2 = l2 ? new m2(e2, l2.endLine === void 0 ? l2.line : {
          column: l2.column,
          line: l2.line
        }, l2.endLine === void 0 ? l2.column : {
          column: l2.endColumn,
          line: l2.endLine
        }, l2.source, l2.file, r3.plugin) : new m2(e2, a3 === void 0 ? t3 : {
          column: n3,
          line: t3
        }, a3 === void 0 ? n3 : {
          column: i3,
          line: a3
        }, this.css, this.file, r3.plugin), c2.input = {
          column: n3,
          endColumn: i3,
          endLine: a3,
          endOffset: o3,
          line: t3,
          offset: s2,
          source: this.css
        }, this.file && (p2 && (c2.input.url = p2(this.file).toString()), c2.input.file = this.file), c2;
      }
      fromLineAndColumn(e2, t3) {
        return x2(this)[e2 - 1] + t3 - 1;
      }
      fromOffset(e2) {
        let t3 = x2(this), n3 = t3[t3.length - 1], r3 = 0;
        if (e2 >= n3) r3 = t3.length - 1;
        else {
          let n4 = t3.length - 2, i3;
          for (; r3 < n4; ) if (i3 = r3 + (n4 - r3 >> 1), e2 < t3[i3]) n4 = i3 - 1;
          else if (e2 >= t3[i3 + 1]) r3 = i3 + 1;
          else {
            r3 = i3;
            break;
          }
        }
        return {
          col: e2 - t3[r3] + 1,
          line: r3 + 1
        };
      }
      mapResolve(e2) {
        return /^\w+:\/\//.test(e2) ? e2 : a2(this.map.consumer().sourceRoot || this.map.root || `.`, e2);
      }
      origin(e2, t3, n3, r3) {
        if (!this.map) return false;
        let a3 = this.map.consumer(), o3 = a3.originalPositionFor({
          column: t3 - 1,
          line: e2
        });
        if (!o3.source) return false;
        let s2;
        if (typeof n3 == `number`) {
          let e3 = a3.originalPositionFor({
            column: r3 - 1,
            line: n3
          });
          e3.source && (s2 = e3);
        }
        let c2;
        c2 = i2(o3.source) ? p2(o3.source) : new URL(o3.source, this.map.consumer().sourceRoot || p2(this.map.mapFile));
        let l2 = {
          column: o3.column + 1,
          endColumn: s2 && s2.column + 1,
          endLine: s2 && s2.line,
          line: o3.line,
          url: c2.toString()
        };
        if (c2.protocol === `file:`) if (f2) l2.file = f2(c2);
        else throw Error(`file: protocol is not available in this PostCSS build`);
        let u3 = a3.sourceContentFor(o3.source);
        return u3 && (l2.source = u3), l2;
      }
      toJSON() {
        let e2 = {};
        for (let t3 of [
          `hasBOM`,
          `css`,
          `file`,
          `id`
        ]) this[t3] != null && (e2[t3] = this[t3]);
        return this.map && (e2.map = {
          ...this.map
        }, e2.map.consumerCache && (e2.map.consumerCache = void 0)), e2;
      }
    };
    n2.exports = S2, S2.default = S2, g2 && g2.registerInput && g2.registerInput(S2);
  }));
  M = n(((e2, t2) => {
    var n2 = E(), r2, i2, a2 = class extends n2 {
      constructor(e3) {
        super(e3), this.type = `root`, this.nodes || (this.nodes = []);
      }
      normalize(e3, t3, n3) {
        let r3 = /* @__PURE__ */ new Set();
        for (let t4 of Array.isArray(e3) ? e3 : [
          e3
        ]) t4 && typeof t4 == `object` && !t4.parent && t4.raws && t4.raws.before !== void 0 && r3.add(t4.raws);
        let i3 = super.normalize(e3);
        if (t3) {
          if (n3 === `prepend`) this.nodes.length > 1 ? t3.raws.before = this.nodes[1].raws.before : delete t3.raws.before;
          else if (this.first !== t3) for (let e4 of i3) r3.has(e4.raws) || (e4.raws.before = t3.raws.before);
        }
        return i3;
      }
      removeChild(e3, t3) {
        let n3 = this.index(e3);
        return !t3 && n3 === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n3].raws.before), super.removeChild(e3);
      }
      toResult(e3 = {}) {
        return new r2(new i2(), this, e3).stringify();
      }
    };
    a2.registerLazyResult = (e3) => {
      r2 = e3;
    }, a2.registerProcessor = (e3) => {
      i2 = e3;
    }, t2.exports = a2, a2.default = a2, n2.registerRoot(a2);
  }));
  N = n(((e2, t2) => {
    var n2 = {
      comma(e3) {
        return n2.split(e3, [
          `,`
        ], true);
      },
      space(e3) {
        return n2.split(e3, [
          ` `,
          `
`,
          `	`
        ]);
      },
      split(e3, t3, n3) {
        let r2 = [], i2 = ``, a2 = false, o2 = 0, s2 = false, c2 = ``, l2 = false;
        for (let n4 of e3) l2 ? l2 = false : n4 === `\\` ? l2 = true : s2 ? n4 === c2 && (s2 = false) : n4 === `"` || n4 === `'` ? (s2 = true, c2 = n4) : n4 === `(` ? o2 += 1 : n4 === `)` ? o2 > 0 && --o2 : o2 === 0 && t3.includes(n4) && (a2 = true), a2 ? (i2 !== `` && r2.push(i2.trim()), i2 = ``, a2 = false) : i2 += n4;
        return (n3 || i2 !== ``) && r2.push(i2.trim()), r2;
      }
    };
    t2.exports = n2, n2.default = n2;
  }));
  P = n(((e2, t2) => {
    var n2 = E(), r2 = N(), i2 = class extends n2 {
      get selectors() {
        return r2.comma(this.selector);
      }
      set selectors(e3) {
        let t3 = this.selector ? this.selector.match(/,\s*/) : null, n3 = t3 ? t3[0] : `,` + this.raw(`between`, `beforeOpen`);
        this.selector = e3.join(n3);
      }
      constructor(e3) {
        super(e3), this.type = `rule`, this.nodes || (this.nodes = []);
      }
    };
    t2.exports = i2, i2.default = i2, n2.registerRule(i2);
  }));
  F = n(((e2, t2) => {
    var n2 = D(), r2 = w(), i2 = T(), a2 = j(), o2 = A(), s2 = M(), c2 = P();
    function l2(e3, t3) {
      return e3.inputs ? e3.inputs.map((e4) => {
        let t4 = {
          ...e4,
          __proto__: a2.prototype
        };
        return t4.map && (t4.map = {
          ...t4.map,
          __proto__: o2.prototype
        }), t4;
      }) : t3;
    }
    function u2(e3, t3, a3) {
      let o3 = {
        ...e3
      };
      if (delete o3.inputs, delete o3.nodes, o3.source) {
        let { inputId: e4, ...n3 } = o3.source;
        o3.source = n3, e4 != null && (o3.source.input = t3[e4]);
      }
      let l3;
      if (o3.type === `root`) l3 = new s2(o3);
      else if (o3.type === `decl`) l3 = new i2(o3);
      else if (o3.type === `rule`) l3 = new c2(o3);
      else if (o3.type === `comment`) l3 = new r2(o3);
      else if (o3.type === `atrule`) l3 = new n2(o3);
      else throw Error(`Unknown node type: ` + e3.type);
      if (a3) {
        l3.nodes = a3;
        for (let e4 of a3) e4.parent = l3;
      }
      return l3;
    }
    function d2(e3, t3) {
      if (Array.isArray(e3)) return e3.map((e4) => d2(e4));
      let n3, r3 = [
        {
          childIndex: 0,
          children: [],
          inputs: l2(e3, t3),
          json: e3
        }
      ];
      for (; r3.length > 0; ) {
        let e4 = r3[r3.length - 1], t4 = e4.json.nodes;
        if (t4 && e4.childIndex < t4.length) {
          let n4 = t4[e4.childIndex];
          e4.childIndex += 1, r3.push({
            childIndex: 0,
            children: [],
            inputs: l2(n4, e4.inputs),
            json: n4
          });
          continue;
        }
        r3.pop();
        let i3 = u2(e4.json, e4.inputs, t4 ? e4.children : void 0);
        r3.length > 0 ? r3[r3.length - 1].children.push(i3) : n3 = i3;
      }
      return n3;
    }
    t2.exports = d2, d2.default = d2;
  }));
  I = n(((t2, n2) => {
    r();
    var { dirname: a2, relative: o2, resolve: u2, sep: f2 } = d(), { SourceMapConsumer: p2, SourceMapGenerator: m2 } = c(), { pathToFileURL: h2 } = (l(), e(s)), g2 = j(), _2 = !!(p2 && m2), v2 = !!(a2 && u2 && o2 && f2);
    n2.exports = class {
      constructor(e2, t3, n3, r2) {
        this.stringify = e2, this.mapOpts = n3.map || {}, this.root = t3, this.opts = n3, this.css = r2, this.originalCSS = r2, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
      }
      addAnnotation() {
        let e2;
        e2 = this.isInline() ? `data:application/json;base64,` + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == `string` ? this.mapOpts.annotation : typeof this.mapOpts.annotation == `function` ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + `.map`;
        let t3 = `
`;
        this.css.includes(`\r
`) && (t3 = `\r
`), this.css += t3 + `/*# sourceMappingURL=` + e2 + ` */`;
      }
      applyPrevMaps() {
        for (let e2 of this.previous()) {
          let t3 = this.toUrl(this.path(e2.file)), n3 = e2.root || a2(e2.file), r2;
          this.mapOpts.sourcesContent === false ? (r2 = new p2(e2.text), r2.sourcesContent && (r2.sourcesContent = null)) : r2 = e2.consumer(), this.map.applySourceMap(r2, t3, this.toUrl(this.path(n3)));
        }
      }
      clearAnnotation() {
        if (this.mapOpts.annotation !== false) {
          if (this.root) {
            let e2;
            for (let t3 = this.root.nodes.length - 1; t3 >= 0; t3--) e2 = this.root.nodes[t3], e2.type === `comment` && e2.text.startsWith(`# sourceMappingURL=`) && this.root.removeChild(t3);
          } else if (this.css) {
            let e2;
            for (; (e2 = this.css.lastIndexOf(`/*#`)) !== -1; ) {
              let t3 = this.css.indexOf(`*/`, e2 + 3);
              if (t3 === -1) break;
              for (; e2 > 0 && this.css[e2 - 1] === `
`; ) e2--;
              this.css = this.css.slice(0, e2) + this.css.slice(t3 + 2);
            }
          }
        }
      }
      generate() {
        if (this.clearAnnotation(), v2 && _2 && this.isMap()) return this.generateMap();
        {
          let e2 = ``;
          return this.stringify(this.root, (t3) => {
            e2 += t3;
          }), [
            e2
          ];
        }
      }
      generateMap() {
        if (this.root) this.generateString();
        else if (this.previous().length === 1) {
          let e2 = this.previous()[0].consumer();
          e2.file = this.outputFile(), this.map = m2.fromSourceMap(e2, {
            ignoreInvalidMapping: true
          });
        } else this.map = new m2({
          file: this.outputFile(),
          ignoreInvalidMapping: true
        }), this.map.addMapping({
          generated: {
            column: 0,
            line: 1
          },
          original: {
            column: 0,
            line: 1
          },
          source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : `<no source>`
        });
        return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [
          this.css
        ] : [
          this.css,
          this.map
        ];
      }
      generateString() {
        this.css = ``, this.map = new m2({
          file: this.outputFile(),
          ignoreInvalidMapping: true
        });
        let e2 = 1, t3 = 1, n3 = `<no source>`, r2 = {
          generated: {
            column: 0,
            line: 0
          },
          original: {
            column: 0,
            line: 0
          },
          source: ``
        }, i2, a3;
        this.stringify(this.root, (o3, s2, c2) => {
          if (this.css += o3, s2 && c2 !== `end` && (r2.generated.line = e2, r2.generated.column = t3 - 1, s2.source && s2.source.start ? (r2.source = this.sourcePath(s2), r2.original.line = s2.source.start.line, r2.original.column = s2.source.start.column - 1, this.map.addMapping(r2)) : (r2.source = n3, r2.original.line = 1, r2.original.column = 0, this.map.addMapping(r2))), a3 = o3.match(/\n/g), a3 ? (e2 += a3.length, i2 = o3.lastIndexOf(`
`), t3 = o3.length - i2) : t3 += o3.length, s2 && c2 !== `start`) {
            let i3 = s2.parent || {
              raws: {}
            };
            (!(s2.type === `decl` || s2.type === `atrule` && !s2.nodes) || s2 !== i3.last || i3.raws.semicolon) && (s2.source && s2.source.end ? (r2.source = this.sourcePath(s2), r2.original.line = s2.source.end.line, r2.original.column = s2.source.end.column - 1, r2.generated.line = e2, r2.generated.column = t3 - 2, this.map.addMapping(r2)) : (r2.source = n3, r2.original.line = 1, r2.original.column = 0, r2.generated.line = e2, r2.generated.column = t3 - 1, this.map.addMapping(r2)));
          }
        });
      }
      isAnnotation() {
        return this.isInline() ? true : this.mapOpts.annotation === void 0 ? !this.previous().length || this.previous().some((e2) => e2.annotation) : this.mapOpts.annotation;
      }
      isInline() {
        if (this.mapOpts.inline !== void 0) return this.mapOpts.inline;
        let e2 = this.mapOpts.annotation;
        return e2 !== void 0 && e2 !== true ? false : !this.previous().length || this.previous().some((e3) => e3.inline);
      }
      isMap() {
        return this.opts.map === void 0 ? this.previous().length > 0 : !!this.opts.map;
      }
      isSourcesContent() {
        return this.mapOpts.sourcesContent === void 0 ? !this.previous().length || this.previous().some((e2) => e2.withContent()) : this.mapOpts.sourcesContent;
      }
      outputFile() {
        return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : `to.css`;
      }
      path(e2) {
        if (this.mapOpts.absolute || e2.charCodeAt(0) === 60 || /^\w+:\/\//.test(e2)) return e2;
        let t3 = this.memoizedPaths.get(e2);
        if (t3) return t3;
        let n3 = this.opts.to ? a2(this.opts.to) : `.`;
        typeof this.mapOpts.annotation == `string` && (n3 = a2(u2(n3, this.mapOpts.annotation)));
        let r2 = o2(n3, e2);
        return this.memoizedPaths.set(e2, r2), r2;
      }
      previous() {
        if (!this.previousMaps) if (this.previousMaps = [], this.root) this.root.walk((e2) => {
          if (e2.source && e2.source.input.map) {
            let t3 = e2.source.input.map;
            this.previousMaps.includes(t3) || this.previousMaps.push(t3);
          }
        });
        else {
          let e2 = new g2(this.originalCSS, this.opts);
          e2.map && this.previousMaps.push(e2.map);
        }
        return this.previousMaps;
      }
      setSourcesContent() {
        let e2 = {};
        if (this.root) this.root.walk((t3) => {
          if (t3.source) {
            let n3 = t3.source.input.from;
            if (n3 && !e2[n3]) {
              e2[n3] = true;
              let r2 = this.usesFileUrls ? this.toFileUrl(n3) : this.toUrl(this.path(n3));
              this.map.setSourceContent(r2, t3.source.input.css);
            }
          }
        });
        else if (this.css) {
          let e3 = this.opts.from ? this.toUrl(this.path(this.opts.from)) : `<no source>`;
          this.map.setSourceContent(e3, this.css);
        }
      }
      sourcePath(e2) {
        return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e2.source.input.from) : this.toUrl(this.path(e2.source.input.from));
      }
      toBase64(e2) {
        return i ? i.from(e2).toString(`base64`) : window.btoa(unescape(encodeURIComponent(e2)));
      }
      toFileUrl(e2) {
        let t3 = this.memoizedFileURLs.get(e2);
        if (t3) return t3;
        if (h2) {
          let t4 = h2(e2).toString();
          return this.memoizedFileURLs.set(e2, t4), t4;
        } else throw Error("`map.absolute` option is not available in this PostCSS build");
      }
      toUrl(e2) {
        let t3 = this.memoizedURLs.get(e2);
        if (t3) return t3;
        f2 === `\\` && (e2 = e2.replace(/\\/g, `/`));
        let n3 = encodeURI(e2).replace(/[#?]/g, encodeURIComponent);
        return this.memoizedURLs.set(e2, n3), n3;
      }
    };
  }));
  L = n(((e2, t2) => {
    var n2 = /[\t\n\f\r "#'()/;[\\\]{}]/g, r2 = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, i2 = /.[\r\n"'(/\\]/, a2 = /[\da-f]/i;
    t2.exports = function(e3, t3 = {}) {
      let o2 = e3.css.valueOf(), s2 = t3.ignoreErrors, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2, v2 = o2.length, y2 = 0, b2 = [], x2 = [], S2 = -1;
      function C2() {
        return y2;
      }
      function w2(t4) {
        throw e3.error(`Unclosed ` + t4, y2);
      }
      function T2() {
        return x2.length === 0 && y2 >= v2;
      }
      function E2(e4) {
        if (x2.length) return x2.pop();
        if (y2 >= v2) return;
        let t4 = e4 ? e4.ignoreUnclosed : false;
        switch (c2 = o2.charCodeAt(y2), c2) {
          case 10:
          case 32:
          case 9:
          case 13:
          case 12:
            d2 = y2;
            do
              d2 += 1, c2 = o2.charCodeAt(d2);
            while (c2 === 32 || c2 === 10 || c2 === 9 || c2 === 13 || c2 === 12);
            p2 = [
              `space`,
              o2.slice(y2, d2)
            ], y2 = d2 - 1;
            break;
          case 91:
          case 93:
          case 123:
          case 125:
          case 58:
          case 59:
          case 41: {
            let e5 = String.fromCharCode(c2);
            p2 = [
              e5,
              e5,
              y2
            ];
            break;
          }
          case 40:
            if (_2 = b2.length ? b2.pop()[1] : ``, g2 = o2.charCodeAt(y2 + 1), _2 === `url` && g2 !== 39 && g2 !== 34 && g2 !== 32 && g2 !== 10 && g2 !== 9 && g2 !== 12 && g2 !== 13) {
              d2 = y2;
              do {
                if (m2 = false, d2 = o2.indexOf(`)`, d2 + 1), d2 === -1) if (s2 || t4) {
                  d2 = y2;
                  break;
                } else w2(`bracket`);
                for (h2 = d2; o2.charCodeAt(h2 - 1) === 92; ) --h2, m2 = !m2;
              } while (m2);
              p2 = [
                `brackets`,
                o2.slice(y2, d2 + 1),
                y2,
                d2
              ], y2 = d2;
            } else y2 <= S2 ? p2 = [
              `(`,
              `(`,
              y2
            ] : (d2 = o2.indexOf(`)`, y2 + 1), l2 = o2.slice(y2, d2 + 1), d2 === -1 || i2.test(l2) ? (S2 = d2 === -1 ? v2 : d2, p2 = [
              `(`,
              `(`,
              y2
            ]) : (p2 = [
              `brackets`,
              l2,
              y2,
              d2
            ], y2 = d2));
            break;
          case 39:
          case 34:
            f2 = c2 === 39 ? `'` : `"`, d2 = y2;
            do {
              if (m2 = false, d2 = o2.indexOf(f2, d2 + 1), d2 === -1) if (s2 || t4) {
                d2 = y2 + 1;
                break;
              } else w2(`string`);
              for (h2 = d2; o2.charCodeAt(h2 - 1) === 92; ) --h2, m2 = !m2;
            } while (m2);
            p2 = [
              `string`,
              o2.slice(y2, d2 + 1),
              y2,
              d2
            ], y2 = d2;
            break;
          case 64:
            n2.lastIndex = y2 + 1, n2.test(o2), d2 = n2.lastIndex === 0 ? o2.length - 1 : n2.lastIndex - 2, p2 = [
              `at-word`,
              o2.slice(y2, d2 + 1),
              y2,
              d2
            ], y2 = d2;
            break;
          case 92:
            for (d2 = y2, u2 = true; o2.charCodeAt(d2 + 1) === 92; ) d2 += 1, u2 = !u2;
            if (c2 = o2.charCodeAt(d2 + 1), u2 && c2 !== 47 && c2 !== 32 && c2 !== 10 && c2 !== 9 && c2 !== 13 && c2 !== 12 && (d2 += 1, a2.test(o2.charAt(d2)))) {
              for (; a2.test(o2.charAt(d2 + 1)); ) d2 += 1;
              o2.charCodeAt(d2 + 1) === 32 && (d2 += 1);
            }
            p2 = [
              `word`,
              o2.slice(y2, d2 + 1),
              y2,
              d2
            ], y2 = d2;
            break;
          default:
            c2 === 47 && o2.charCodeAt(y2 + 1) === 42 ? (d2 = o2.indexOf(`*/`, y2 + 2) + 1, d2 === 0 && (s2 || t4 ? d2 = o2.length : w2(`comment`)), p2 = [
              `comment`,
              o2.slice(y2, d2 + 1),
              y2,
              d2
            ], y2 = d2) : (r2.lastIndex = y2 + 1, r2.test(o2), d2 = r2.lastIndex === 0 ? o2.length - 1 : r2.lastIndex - 2, p2 = [
              `word`,
              o2.slice(y2, d2 + 1),
              y2,
              d2
            ], b2.push(p2), y2 = d2);
            break;
        }
        return y2++, p2;
      }
      function D2(e4) {
        x2.push(e4);
      }
      return {
        back: D2,
        endOfFile: T2,
        nextToken: E2,
        position: C2
      };
    };
  }));
  R = n(((e2, t2) => {
    var n2 = D(), r2 = w(), i2 = T(), a2 = M(), o2 = P(), s2 = L(), c2 = {
      empty: true,
      space: true
    };
    function l2(e3) {
      for (let t3 = e3.length - 1; t3 >= 0; t3--) {
        let n3 = e3[t3], r3 = n3[3] || n3[2];
        if (r3) return r3;
      }
    }
    function u2(e3, t3, n3) {
      let r3 = ``;
      for (let i3 = t3; i3 < n3; i3++) r3 += e3[i3][1];
      return r3;
    }
    t2.exports = class {
      constructor(e3) {
        this.input = e3, this.root = new a2(), this.current = this.root, this.spaces = ``, this.semicolon = false, this.createTokenizer(), this.root.source = {
          input: e3,
          start: {
            column: 1,
            line: 1,
            offset: 0
          }
        };
      }
      atrule(e3) {
        let t3 = new n2();
        t3.name = e3[1].slice(1), t3.name === `` && this.unnamedAtrule(t3, e3), this.init(t3, e3[2]);
        let r3, i3, a3, o3 = false, s3 = false, c3 = [], l3 = [];
        for (; !this.tokenizer.endOfFile(); ) {
          if (e3 = this.tokenizer.nextToken(), r3 = e3[0], r3 === `(` || r3 === `[` ? l3.push(r3 === `(` ? `)` : `]`) : r3 === `{` && l3.length > 0 ? l3.push(`}`) : r3 === l3[l3.length - 1] && l3.pop(), l3.length === 0) if (r3 === `;`) {
            t3.source.end = this.getPosition(e3[2]), t3.source.end.offset++, this.semicolon = true;
            break;
          } else if (r3 === `{`) {
            s3 = true;
            break;
          } else if (r3 === `}`) {
            if (c3.length > 0) {
              for (a3 = c3.length - 1, i3 = c3[a3]; i3 && i3[0] === `space`; ) i3 = c3[--a3];
              i3 && (t3.source.end = this.getPosition(i3[3] || i3[2]), t3.source.end.offset++);
            }
            this.end(e3);
            break;
          } else c3.push(e3);
          else c3.push(e3);
          if (this.tokenizer.endOfFile()) {
            o3 = true;
            break;
          }
        }
        t3.raws.between = this.spacesAndCommentsFromEnd(c3), c3.length ? (t3.raws.afterName = this.spacesAndCommentsFromStart(c3), this.raw(t3, `params`, c3), o3 && (e3 = c3[c3.length - 1], t3.source.end = this.getPosition(e3[3] || e3[2]), t3.source.end.offset++, this.spaces = t3.raws.between, t3.raws.between = ``)) : (t3.raws.afterName = ``, t3.params = ``), s3 && (t3.nodes = [], this.current = t3);
      }
      checkMissedSemicolon(e3) {
        let t3 = this.colon(e3);
        if (t3 === false) return;
        let n3 = 0, r3;
        for (let i3 = t3 - 1; i3 >= 0 && (r3 = e3[i3], !(r3[0] !== `space` && (n3 += 1, n3 === 2))); i3--) ;
        throw this.input.error(`Missed semicolon`, r3[0] === `word` ? r3[3] + 1 : r3[2]);
      }
      colon(e3) {
        let t3 = 0, n3, r3, i3;
        for (let [a3, o3] of e3.entries()) {
          if (r3 = o3, i3 = r3[0], i3 === `(` && (t3 += 1), i3 === `)` && --t3, t3 === 0 && i3 === `:`) if (!n3) this.doubleColon(r3);
          else if (n3[0] === `word` && n3[1] === `progid`) continue;
          else return a3;
          n3 = r3;
        }
        return false;
      }
      comment(e3) {
        let t3 = new r2();
        this.init(t3, e3[2]), t3.source.end = this.getPosition(e3[3] || e3[2]), t3.source.end.offset++;
        let n3 = e3[1].slice(2, -2);
        if (!n3.trim()) t3.text = ``, t3.raws.left = n3, t3.raws.right = ``;
        else {
          let e4 = n3.match(/^(\s*)([^]*\S)(\s*)$/);
          t3.text = e4[2], t3.raws.left = e4[1], t3.raws.right = e4[3];
        }
      }
      createTokenizer() {
        this.tokenizer = s2(this.input);
      }
      decl(e3, t3) {
        let n3 = new i2();
        this.init(n3, e3[0][2]);
        let r3 = e3[e3.length - 1];
        r3[0] === `;` && (this.semicolon = true, e3.pop()), n3.source.end = this.getPosition(r3[3] || r3[2] || l2(e3)), n3.source.end.offset++;
        let a3 = 0;
        for (; e3[a3][0] !== `word`; ) a3 === e3.length - 1 && this.unknownWord([
          e3[a3]
        ]), a3++;
        n3.raws.before += u2(e3, 0, a3), n3.source.start = this.getPosition(e3[a3][2]);
        let o3 = a3;
        for (; a3 < e3.length; ) {
          let t4 = e3[a3][0];
          if (t4 === `:` || t4 === `space` || t4 === `comment`) break;
          a3++;
        }
        n3.prop = u2(e3, o3, a3);
        let s3 = a3, c3;
        for (; a3 < e3.length && (c3 = e3[a3], a3++, c3[0] !== `:`); ) c3[0] === `word` && /\w/.test(c3[1]) && this.unknownWord([
          c3
        ]);
        n3.raws.between = u2(e3, s3, a3), (n3.prop[0] === `_` || n3.prop[0] === `*`) && (n3.raws.before += n3.prop[0], n3.prop = n3.prop.slice(1));
        let d2 = a3;
        for (; a3 < e3.length; ) {
          let t4 = e3[a3][0];
          if (t4 !== `space` && t4 !== `comment`) break;
          a3++;
        }
        let f2 = e3.slice(d2, a3);
        e3 = e3.slice(a3), this.precheckMissedSemicolon(e3);
        for (let t4 = e3.length - 1; t4 >= 0; t4--) {
          if (c3 = e3[t4], c3[1].toLowerCase() === `!important`) {
            n3.important = true;
            let r4 = this.stringFrom(e3, t4);
            r4 = this.spacesFromEnd(e3) + r4, r4 !== ` !important` && (n3.raws.important = r4);
            break;
          } else if (c3[1].toLowerCase() === `important`) {
            let r4 = e3.slice(0), i3 = ``;
            for (let e4 = t4; e4 > 0; e4--) {
              let t5 = r4[e4][0];
              if (i3.trim().startsWith(`!`) && t5 !== `space`) break;
              i3 = r4.pop()[1] + i3;
            }
            i3.trim().startsWith(`!`) && (n3.important = true, n3.raws.important = i3, e3 = r4);
          }
          if (c3[0] !== `space` && c3[0] !== `comment`) break;
        }
        e3.some((e4) => e4[0] !== `space` && e4[0] !== `comment`) && (n3.raws.between += f2.map((e4) => e4[1]).join(``), f2 = []), this.raw(n3, `value`, f2.concat(e3), t3), n3.value.includes(`:`) && !t3 && this.checkMissedSemicolon(e3);
      }
      doubleColon(e3) {
        throw this.input.error(`Double colon`, {
          offset: e3[2]
        }, {
          offset: e3[2] + e3[1].length
        });
      }
      emptyRule(e3) {
        let t3 = new o2();
        this.init(t3, e3[2]), t3.selector = ``, t3.raws.between = ``, this.current = t3;
      }
      end(e3) {
        this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = false, this.current.raws.after = (this.current.raws.after || ``) + this.spaces, this.spaces = ``, this.current.parent ? (this.current.source.end = this.getPosition(e3[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e3);
      }
      endFile() {
        this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || ``) + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
      }
      freeSemicolon(e3) {
        if (this.spaces += e3[1], this.current.nodes) {
          let t3 = this.current.nodes[this.current.nodes.length - 1];
          t3 && t3.type === `rule` && !t3.raws.ownSemicolon && (t3.raws.ownSemicolon = this.spaces, this.spaces = ``, t3.source.end = this.getPosition(e3[2]), t3.source.end.offset += t3.raws.ownSemicolon.length);
        }
      }
      getPosition(e3) {
        let t3 = this.input.fromOffset(e3);
        return {
          column: t3.col,
          line: t3.line,
          offset: e3
        };
      }
      init(e3, t3) {
        this.current.push(e3), e3.source = {
          input: this.input,
          start: this.getPosition(t3)
        }, e3.raws.before = this.spaces, this.spaces = ``, e3.type !== `comment` && (this.semicolon = false);
      }
      other(e3) {
        let t3 = false, n3 = null, r3 = false, i3 = null, a3 = [], o3 = e3[1].startsWith(`--`), s3 = [], c3 = e3;
        for (; c3; ) {
          if (n3 = c3[0], s3.push(c3), n3 === `(` || n3 === `[`) i3 || (i3 = c3), a3.push(n3 === `(` ? `)` : `]`);
          else if (o3 && r3 && n3 === `{`) i3 || (i3 = c3), a3.push(`}`);
          else if (a3.length === 0) if (n3 === `;`) if (r3) {
            this.decl(s3, o3);
            return;
          } else break;
          else if (n3 === `{`) {
            this.rule(s3);
            return;
          } else if (n3 === `}`) {
            this.tokenizer.back(s3.pop()), t3 = true;
            break;
          } else n3 === `:` && (r3 = true);
          else n3 === a3[a3.length - 1] && (a3.pop(), a3.length === 0 && (i3 = null));
          c3 = this.tokenizer.nextToken();
        }
        if (this.tokenizer.endOfFile() && (t3 = true), a3.length > 0 && this.unclosedBracket(i3), t3 && r3) {
          if (!o3) for (; s3.length && (c3 = s3[s3.length - 1][0], !(c3 !== `space` && c3 !== `comment`)); ) this.tokenizer.back(s3.pop());
          this.decl(s3, o3);
        } else this.unknownWord(s3);
      }
      parse() {
        let e3;
        for (; !this.tokenizer.endOfFile(); ) switch (e3 = this.tokenizer.nextToken(), e3[0]) {
          case `space`:
            this.spaces += e3[1];
            break;
          case `;`:
            this.freeSemicolon(e3);
            break;
          case `}`:
            this.end(e3);
            break;
          case `comment`:
            this.comment(e3);
            break;
          case `at-word`:
            this.atrule(e3);
            break;
          case `{`:
            this.emptyRule(e3);
            break;
          default:
            this.other(e3);
            break;
        }
        this.endFile();
      }
      precheckMissedSemicolon() {
      }
      raw(e3, t3, n3, r3) {
        let i3, a3, o3 = n3.length, s3 = ``, l3 = true, u3, d2;
        for (let e4 = 0; e4 < o3; e4 += 1) i3 = n3[e4], a3 = i3[0], a3 === `space` && e4 === o3 - 1 && !r3 ? l3 = false : a3 === `comment` ? (d2 = n3[e4 - 1] ? n3[e4 - 1][0] : `empty`, u3 = n3[e4 + 1] ? n3[e4 + 1][0] : `empty`, !c2[d2] && !c2[u3] ? s3.slice(-1) === `,` ? l3 = false : s3 += i3[1] : l3 = false) : s3 += i3[1];
        if (!l3) {
          let r4 = n3.reduce((e4, t4) => e4 + t4[1], ``);
          e3.raws[t3] = {
            raw: r4,
            value: s3
          };
        }
        e3[t3] = s3;
      }
      rule(e3) {
        e3.pop();
        let t3 = new o2();
        this.init(t3, e3[0][2]), t3.raws.between = this.spacesAndCommentsFromEnd(e3), this.raw(t3, `selector`, e3), this.current = t3;
      }
      spacesAndCommentsFromEnd(e3) {
        let t3, n3 = ``;
        for (; e3.length && (t3 = e3[e3.length - 1][0], !(t3 !== `space` && t3 !== `comment`)); ) n3 = e3.pop()[1] + n3;
        return n3;
      }
      spacesAndCommentsFromStart(e3) {
        let t3, n3 = ``;
        for (; e3.length && (t3 = e3[0][0], !(t3 !== `space` && t3 !== `comment`)); ) n3 += e3.shift()[1];
        return n3;
      }
      spacesFromEnd(e3) {
        let t3, n3 = ``;
        for (; e3.length && (t3 = e3[e3.length - 1][0], t3 === `space`); ) n3 = e3.pop()[1] + n3;
        return n3;
      }
      stringFrom(e3, t3) {
        let n3 = ``;
        for (let r3 = t3; r3 < e3.length; r3++) n3 += e3[r3][1];
        return e3.splice(t3, e3.length - t3), n3;
      }
      unclosedBlock() {
        let e3 = this.current.source.start;
        throw this.input.error(`Unclosed block`, e3.line, e3.column);
      }
      unclosedBracket(e3) {
        throw this.input.error(`Unclosed bracket`, {
          offset: e3[2]
        }, {
          offset: e3[2] + 1
        });
      }
      unexpectedClose(e3) {
        throw this.input.error(`Unexpected }`, {
          offset: e3[2]
        }, {
          offset: e3[2] + 1
        });
      }
      unknownWord(e3) {
        throw this.input.error(`Unknown word ` + e3[0][1], {
          offset: e3[0][2]
        }, {
          offset: e3[0][2] + e3[0][1].length
        });
      }
      unnamedAtrule(e3, t3) {
        throw this.input.error(`At-rule without name`, {
          offset: t3[2]
        }, {
          offset: t3[2] + t3[1].length
        });
      }
    };
  }));
  z = n(((e2, t2) => {
    var n2 = E(), r2 = j(), i2 = R();
    function a2(e3, t3) {
      let n3 = new i2(new r2(e3, t3));
      try {
        n3.parse();
      } catch (e4) {
        throw e4;
      }
      return n3.root;
    }
    t2.exports = a2, a2.default = a2, n2.registerParse(a2);
  }));
  B = n(((e2, t2) => {
    var n2 = class {
      constructor(e3, t3 = {}) {
        if (this.type = `warning`, this.text = e3, t3.node && t3.node.source) {
          let e4 = t3.node.rangeBy(t3);
          this.line = e4.start.line, this.column = e4.start.column, this.endLine = e4.end.line, this.endColumn = e4.end.column;
        }
        for (let e4 in t3) this[e4] = t3[e4];
      }
      toString() {
        return this.node ? this.node.error(this.text, {
          index: this.index,
          plugin: this.plugin,
          word: this.word
        }).message : this.plugin ? this.plugin + `: ` + this.text : this.text;
      }
    };
    t2.exports = n2, n2.default = n2;
  }));
  V = n(((e2, t2) => {
    var n2 = B(), r2 = class {
      get content() {
        return this.css;
      }
      constructor(e3, t3, n3) {
        this.processor = e3, this.messages = [], this.root = t3, this.opts = n3, this.css = ``, this.map = void 0;
      }
      toString() {
        return this.css;
      }
      warn(e3, t3 = {}) {
        t3.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t3.plugin = this.lastPlugin.postcssPlugin);
        let r3 = new n2(e3, t3);
        return this.messages.push(r3), r3;
      }
      warnings() {
        return this.messages.filter((e3) => e3.type === `warning`);
      }
    };
    t2.exports = r2, r2.default = r2;
  }));
  H = n(((e2, t2) => {
    var n2 = {};
    t2.exports = function(e3) {
      n2[e3] || (n2[e3] = true, typeof console < `u` && console.warn && console.warn(e3));
    };
  }));
  U = n(((e2, t2) => {
    var n2 = E(), r2 = O(), i2 = I(), a2 = z(), o2 = V(), s2 = M(), c2 = x(), { isClean: l2, my: u2 } = S();
    H();
    var d2 = {
      atrule: `AtRule`,
      comment: `Comment`,
      decl: `Declaration`,
      document: `Document`,
      root: `Root`,
      rule: `Rule`
    }, f2 = {
      AtRule: true,
      AtRuleExit: true,
      Comment: true,
      CommentExit: true,
      Declaration: true,
      DeclarationExit: true,
      Document: true,
      DocumentExit: true,
      Once: true,
      OnceExit: true,
      postcssPlugin: true,
      prepare: true,
      Root: true,
      RootExit: true,
      Rule: true,
      RuleExit: true
    }, p2 = {
      Once: true,
      postcssPlugin: true,
      prepare: true
    }, m2 = 0;
    function h2(e3) {
      return typeof e3 == `object` && typeof e3.then == `function`;
    }
    function g2(e3) {
      let t3 = false, n3 = d2[e3.type];
      return e3.type === `decl` ? t3 = e3.prop.toLowerCase() : e3.type === `atrule` && (t3 = e3.name.toLowerCase()), t3 && e3.append ? [
        n3,
        n3 + `-` + t3,
        m2,
        n3 + `Exit`,
        n3 + `Exit-` + t3
      ] : t3 ? [
        n3,
        n3 + `-` + t3,
        n3 + `Exit`,
        n3 + `Exit-` + t3
      ] : e3.append ? [
        n3,
        m2,
        n3 + `Exit`
      ] : [
        n3,
        n3 + `Exit`
      ];
    }
    function _2(e3) {
      let t3;
      return t3 = e3.type === `document` ? [
        `Document`,
        m2,
        `DocumentExit`
      ] : e3.type === `root` ? [
        `Root`,
        m2,
        `RootExit`
      ] : g2(e3), {
        eventIndex: 0,
        events: t3,
        iterator: 0,
        node: e3,
        visitorIndex: 0,
        visitors: []
      };
    }
    function v2(e3) {
      let t3 = [
        e3
      ];
      for (; t3.length > 0; ) {
        let e4 = t3.pop();
        if (e4[l2] = false, e4.nodes) for (let n3 of e4.nodes) t3.push(n3);
      }
      return e3;
    }
    var y2 = {}, b2 = class e3 {
      get content() {
        return this.stringify().content;
      }
      get css() {
        return this.stringify().css;
      }
      get map() {
        return this.stringify().map;
      }
      get messages() {
        return this.sync().messages;
      }
      get opts() {
        return this.result.opts;
      }
      get processor() {
        return this.result.processor;
      }
      get root() {
        return this.sync().root;
      }
      get [Symbol.toStringTag]() {
        return `LazyResult`;
      }
      constructor(t3, r3, i3) {
        this.stringified = false, this.processed = false;
        let s3;
        if (typeof r3 == `object` && r3 && (r3.type === `root` || r3.type === `document`)) s3 = v2(r3);
        else if (r3 instanceof e3 || r3 instanceof o2) s3 = v2(r3.root), r3.map && (i3.map === void 0 && (i3.map = {}), i3.map.inline || (i3.map.inline = false), i3.map.prev = r3.map);
        else {
          let e4 = a2;
          i3.syntax && (e4 = i3.syntax.parse), i3.parser && (e4 = i3.parser), e4.parse && (e4 = e4.parse);
          try {
            s3 = e4(r3, i3);
          } catch (e5) {
            this.processed = true, this.error = e5;
          }
          s3 && !s3[u2] && n2.rebuild(s3);
        }
        this.result = new o2(t3, s3, i3), this.helpers = {
          ...y2,
          postcss: y2,
          result: this.result
        }, this.plugins = this.processor.plugins.map((e4) => typeof e4 == `object` && e4.prepare ? {
          ...e4,
          ...e4.prepare(this.result)
        } : e4);
      }
      async() {
        return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
      }
      catch(e4) {
        return this.async().catch(e4);
      }
      finally(e4) {
        return this.async().then(e4, e4);
      }
      getAsyncError() {
        throw Error(`Use process(css).then(cb) to work with async plugins`);
      }
      handleError(e4, t3) {
        let n3 = this.result.lastPlugin;
        try {
          t3 && t3.addToError(e4), this.error = e4, e4.name === `CssSyntaxError` && !e4.plugin ? (e4.plugin = n3.postcssPlugin, e4.setMessage()) : n3.postcssVersion;
        } catch (e5) {
          console && console.error && console.error(e5);
        }
        return e4;
      }
      prepareVisitors() {
        this.listeners = {};
        let e4 = (e5, t3, n3) => {
          this.listeners[t3] || (this.listeners[t3] = []), this.listeners[t3].push([
            e5,
            n3
          ]);
        };
        for (let t3 of this.plugins) if (typeof t3 == `object`) for (let n3 in t3) {
          if (!f2[n3] && /^[A-Z]/.test(n3)) throw Error(`Unknown event ${n3} in ${t3.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
          if (!p2[n3]) if (typeof t3[n3] == `object`) for (let r3 in t3[n3]) r3 === `*` ? e4(t3, n3, t3[n3][r3]) : e4(t3, n3 + `-` + r3.toLowerCase(), t3[n3][r3]);
          else typeof t3[n3] == `function` && e4(t3, n3, t3[n3]);
        }
        this.hasListener = Object.keys(this.listeners).length > 0;
      }
      async runAsync() {
        this.plugin = 0;
        for (let e4 = 0; e4 < this.plugins.length; e4++) {
          let t3 = this.plugins[e4], n3 = this.runOnRoot(t3);
          if (h2(n3)) try {
            await n3;
          } catch (e5) {
            throw this.handleError(e5);
          }
        }
        if (this.prepareVisitors(), this.hasListener) {
          let e4 = this.result.root;
          for (; !e4[l2]; ) {
            e4[l2] = true;
            let t3 = [
              _2(e4)
            ];
            for (; t3.length > 0; ) {
              let e5 = this.visitTick(t3);
              if (h2(e5)) try {
                await e5;
              } catch (e6) {
                let n3 = t3[t3.length - 1].node;
                throw this.handleError(e6, n3);
              }
            }
          }
          if (this.listeners.OnceExit) for (let [t3, n3] of this.listeners.OnceExit) {
            this.result.lastPlugin = t3;
            try {
              if (e4.type === `document`) {
                let t4 = e4.nodes.map((e5) => n3(e5, this.helpers));
                await Promise.all(t4);
              } else await n3(e4, this.helpers);
            } catch (e5) {
              throw this.handleError(e5);
            }
          }
        }
        return this.processed = true, this.stringify();
      }
      runOnRoot(e4) {
        this.result.lastPlugin = e4;
        try {
          if (typeof e4 == `object` && e4.Once) {
            if (this.result.root.type === `document`) {
              let t3 = this.result.root.nodes.map((t4) => e4.Once(t4, this.helpers));
              return h2(t3[0]) ? Promise.all(t3) : t3;
            }
            return e4.Once(this.result.root, this.helpers);
          } else if (typeof e4 == `function`) return e4(this.result.root, this.result);
        } catch (e5) {
          throw this.handleError(e5);
        }
      }
      stringify() {
        if (this.error) throw this.error;
        if (this.stringified) return this.result;
        this.stringified = true, this.sync();
        let e4 = this.result.opts, t3 = c2;
        e4.syntax && (t3 = e4.syntax.stringify), e4.stringifier && (t3 = e4.stringifier), t3.stringify && (t3 = t3.stringify);
        let n3 = this.result.root.source;
        if (e4.map === void 0 && !(n3 && n3.input && n3.input.map)) {
          let e5 = ``;
          return t3(this.result.root, (t4) => {
            e5 += t4;
          }), this.result.css = e5, this.result;
        }
        let r3 = new i2(t3, this.result.root, this.result.opts).generate();
        return this.result.css = r3[0], this.result.map = r3[1], this.result;
      }
      sync() {
        if (this.error) throw this.error;
        if (this.processed) return this.result;
        if (this.processed = true, this.processing) throw this.getAsyncError();
        for (let e4 of this.plugins) if (h2(this.runOnRoot(e4))) throw this.getAsyncError();
        if (this.prepareVisitors(), this.hasListener) {
          let e4 = this.result.root;
          for (; !e4[l2]; ) e4[l2] = true, this.walkSync(e4);
          if (this.listeners.OnceExit) if (e4.type === `document`) for (let t3 of e4.nodes) this.visitSync(this.listeners.OnceExit, t3);
          else this.visitSync(this.listeners.OnceExit, e4);
        }
        return this.result;
      }
      then(e4, t3) {
        return this.async().then(e4, t3);
      }
      toString() {
        return this.css;
      }
      visitSync(e4, t3) {
        for (let [n3, r3] of e4) {
          this.result.lastPlugin = n3;
          let e5;
          try {
            e5 = r3(t3, this.helpers);
          } catch (e6) {
            throw this.handleError(e6, t3.proxyOf);
          }
          if (t3.type !== `root` && t3.type !== `document` && !t3.parent) return true;
          if (h2(e5)) throw this.getAsyncError();
        }
      }
      visitTick(e4) {
        let t3 = e4[e4.length - 1], { node: n3, visitors: r3 } = t3;
        if (n3.type !== `root` && n3.type !== `document` && !n3.parent) {
          e4.pop();
          return;
        }
        if (r3.length > 0 && t3.visitorIndex < r3.length) {
          let [e5, i4] = r3[t3.visitorIndex];
          t3.visitorIndex += 1, t3.visitorIndex === r3.length && (t3.visitors = [], t3.visitorIndex = 0), this.result.lastPlugin = e5;
          try {
            return i4(n3.toProxy(), this.helpers);
          } catch (e6) {
            throw this.handleError(e6, n3);
          }
        }
        if (t3.iterator !== 0) {
          let r4 = t3.iterator, i4;
          for (; i4 = n3.nodes[n3.indexes[r4]]; ) if (n3.indexes[r4] += 1, !i4[l2]) {
            i4[l2] = true, e4.push(_2(i4));
            return;
          }
          t3.iterator = 0, delete n3.indexes[r4];
        }
        let i3 = t3.events;
        for (; t3.eventIndex < i3.length; ) {
          let e5 = i3[t3.eventIndex];
          if (t3.eventIndex += 1, e5 === m2) {
            n3.nodes && n3.nodes.length && (n3[l2] = true, t3.iterator = n3.getIterator());
            return;
          } else if (this.listeners[e5]) {
            t3.visitors = this.listeners[e5];
            return;
          }
        }
        e4.pop();
      }
      walkSync(e4) {
        e4[l2] = true;
        let t3 = [
          {
            eventIndex: 0,
            events: g2(e4),
            iterator: 0,
            node: e4
          }
        ];
        for (; t3.length > 0; ) {
          let e5 = t3[t3.length - 1], n3 = e5.node;
          if (e5.iterator !== 0) {
            let r3 = e5.iterator, i3, a3 = false;
            for (; i3 = n3.nodes[n3.indexes[r3]]; ) if (n3.indexes[r3] += 1, !i3[l2]) {
              i3[l2] = true, t3.push({
                eventIndex: 0,
                events: g2(i3),
                iterator: 0,
                node: i3
              }), a3 = true;
              break;
            }
            if (a3) continue;
            e5.iterator = 0, delete n3.indexes[r3];
          }
          if (e5.eventIndex < e5.events.length) {
            let r3 = e5.events[e5.eventIndex];
            if (e5.eventIndex += 1, r3 === m2) n3.nodes && n3.nodes.length && (e5.iterator = n3.getIterator());
            else {
              let e6 = this.listeners[r3];
              e6 && this.visitSync(e6, n3.toProxy()) && t3.pop();
            }
            continue;
          }
          t3.pop();
        }
      }
      warnings() {
        return this.sync().warnings();
      }
    };
    b2.registerPostcss = (e3) => {
      y2 = e3;
    }, t2.exports = b2, b2.default = b2, s2.registerLazyResult(b2), r2.registerLazyResult(b2);
  }));
  W = n(((e2, t2) => {
    var n2 = I(), r2 = z(), i2 = V(), a2 = x();
    H();
    var o2 = class {
      get content() {
        return this.result.css;
      }
      get css() {
        return this.result.css;
      }
      get map() {
        return this.result.map;
      }
      get messages() {
        return [];
      }
      get opts() {
        return this.result.opts;
      }
      get processor() {
        return this.result.processor;
      }
      get root() {
        if (this._root) return this._root;
        let e3, t3 = r2;
        try {
          e3 = t3(this._css, this._opts);
        } catch (e4) {
          this.error = e4;
        }
        if (this.error) throw this.error;
        return this._root = e3, e3;
      }
      get [Symbol.toStringTag]() {
        return `NoWorkResult`;
      }
      constructor(e3, t3, r3) {
        t3 = t3.toString(), this.stringified = false, this._processor = e3, this._css = t3, this._opts = r3, this._map = void 0;
        let o3 = a2;
        this.result = new i2(this._processor, void 0, this._opts), this.result.css = t3;
        let s2 = this;
        Object.defineProperty(this.result, "root", {
          get() {
            return s2.root;
          }
        });
        let c2 = new n2(o3, void 0, this._opts, t3);
        if (c2.isMap()) {
          let [e4, t4] = c2.generate();
          e4 && (this.result.css = e4), t4 && (this.result.map = t4);
        } else c2.clearAnnotation(), this.result.css = c2.css;
      }
      async() {
        return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
      }
      catch(e3) {
        return this.async().catch(e3);
      }
      finally(e3) {
        return this.async().then(e3, e3);
      }
      sync() {
        if (this.error) throw this.error;
        return this.result;
      }
      then(e3, t3) {
        return this.async().then(e3, t3);
      }
      toString() {
        return this._css;
      }
      warnings() {
        return [];
      }
    };
    t2.exports = o2, o2.default = o2;
  }));
  G = n(((e2, t2) => {
    var n2 = O(), r2 = U(), i2 = W(), a2 = M(), o2 = class {
      constructor(e3 = []) {
        this.version = `8.5.19`, this.plugins = this.normalize(e3);
      }
      normalize(e3) {
        let t3 = [];
        for (let n3 of e3) if (n3.postcss === true ? n3 = n3() : n3.postcss && (n3 = n3.postcss), typeof n3 == `object` && Array.isArray(n3.plugins)) t3 = t3.concat(n3.plugins);
        else if (typeof n3 == `object` && n3.postcssPlugin) t3.push(n3);
        else if (typeof n3 == `function`) t3.push(n3);
        else if (!(typeof n3 == `object` && (n3.parse || n3.stringify))) throw Error(n3 + ` is not a PostCSS plugin`);
        return t3;
      }
      process(e3, t3 = {}) {
        return !this.plugins.length && !t3.parser && !t3.stringifier && !t3.syntax ? new i2(this, e3, t3) : new r2(this, e3, t3);
      }
      use(e3) {
        return this.plugins = this.plugins.concat(this.normalize([
          e3
        ])), this;
      }
    };
    t2.exports = o2, o2.default = o2, a2.registerProcessor(o2), n2.registerProcessor(o2);
  }));
  K = n(((e2, t2) => {
    var n2 = D(), r2 = w(), i2 = E(), a2 = y(), o2 = T(), s2 = O(), c2 = F(), l2 = j(), u2 = U(), d2 = N(), f2 = C(), p2 = z(), m2 = G(), h2 = V(), g2 = M(), _2 = P(), v2 = x(), b2 = B();
    function S2(...e3) {
      return e3.length === 1 && Array.isArray(e3[0]) && (e3 = e3[0]), new m2(e3);
    }
    S2.plugin = function(e3, t3) {
      let n3 = false;
      function r3(...r4) {
        console && console.warn && !n3 && (n3 = true, console.warn(e3 + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`), {}.LANG && {}.LANG.startsWith(`cn`) && console.warn(e3 + `: \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:
https://www.w3ctech.com/topic/2226`));
        let i4 = t3(...r4);
        return i4.postcssPlugin = e3, i4.postcssVersion = new m2().version, i4;
      }
      let i3;
      return Object.defineProperty(r3, "postcss", {
        get() {
          return i3 || (i3 = r3()), i3;
        }
      }), r3.process = function(e4, t4, n4) {
        return S2([
          r3(n4)
        ]).process(e4, t4);
      }, r3;
    }, S2.stringify = v2, S2.parse = p2, S2.fromJSON = c2, S2.list = d2, S2.comment = (e3) => new r2(e3), S2.atRule = (e3) => new n2(e3), S2.decl = (e3) => new o2(e3), S2.rule = (e3) => new _2(e3), S2.root = (e3) => new g2(e3), S2.document = (e3) => new s2(e3), S2.CssSyntaxError = a2, S2.Declaration = o2, S2.Container = i2, S2.Processor = m2, S2.Document = s2, S2.Comment = r2, S2.Warning = b2, S2.AtRule = n2, S2.Result = h2, S2.Input = l2, S2.Rule = _2, S2.Root = g2, S2.Node = f2, u2.registerPostcss(S2), t2.exports = S2, S2.default = S2;
  }));
  q = t(K(), 1);
  J = q.default;
  q.default.stringify, q.default.fromJSON, q.default.plugin, q.default.parse, q.default.list, q.default.document, q.default.comment, q.default.atRule, q.default.rule, q.default.decl, q.default.root, q.default.CssSyntaxError, q.default.Declaration, q.default.Container, q.default.Processor, q.default.Document, q.default.Comment, q.default.Warning, q.default.AtRule, q.default.Result, q.default.Input, q.default.Rule, q.default.Root, q.default.Node;
  Y = n(((e2, t2) => {
    var n2 = {}.hasOwnProperty, r2 = function(e3, t3) {
      if (!e3) return t3;
      var r3 = {};
      for (var i3 in t3) r3[i3] = n2.call(e3, i3) ? e3[i3] : t3[i3];
      return r3;
    }, i2 = /[ -,\.\/:-@\[-\^`\{-~]/, a2 = /[ -,\.\/:-@\[\]\^`\{-~]/, o2 = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g, s2 = function e3(t3, n3) {
      n3 = r2(n3, e3.options), n3.quotes != `single` && n3.quotes != `double` && (n3.quotes = `single`);
      for (var s3 = n3.quotes == `double` ? `"` : `'`, c2 = n3.isIdentifier, l2 = t3.charAt(0), u2 = ``, d2 = 0, f2 = t3.length; d2 < f2; ) {
        var p2 = t3.charAt(d2++), m2 = p2.charCodeAt(), h2 = void 0;
        if (m2 < 32 || m2 > 126) {
          if (m2 >= 55296 && m2 <= 56319 && d2 < f2) {
            var g2 = t3.charCodeAt(d2++);
            (g2 & 64512) == 56320 ? m2 = ((m2 & 1023) << 10) + (g2 & 1023) + 65536 : d2--;
          }
          h2 = `\\` + m2.toString(16).toUpperCase() + ` `;
        } else h2 = n3.escapeEverything ? i2.test(p2) ? `\\` + p2 : `\\` + m2.toString(16).toUpperCase() + ` ` : /[\t\n\f\r\x0B]/.test(p2) ? `\\` + m2.toString(16).toUpperCase() + ` ` : p2 == `\\` || !c2 && (p2 == `"` && s3 == p2 || p2 == `'` && s3 == p2) || c2 && a2.test(p2) ? `\\` + p2 : p2;
        u2 += h2;
      }
      return c2 && (/^-[-\d]/.test(u2) ? u2 = `\\-` + u2.slice(1) : /\d/.test(l2) && (u2 = `\\3` + l2 + ` ` + u2.slice(1))), u2 = u2.replace(o2, function(e4, t4, n4) {
        return t4 && t4.length % 2 ? e4 : (t4 || ``) + n4;
      }), !c2 && n3.wrap ? s3 + u2 + s3 : u2;
    };
    s2.options = {
      escapeEverything: false,
      isIdentifier: false,
      quotes: `single`,
      wrap: false
    }, s2.version = `3.0.0`, t2.exports = s2;
  }));
})();
export {
  __tla,
  L as a,
  g as c,
  R as i,
  m as l,
  J as n,
  w as o,
  K as r,
  v as s,
  Y as t,
  p as u
};
