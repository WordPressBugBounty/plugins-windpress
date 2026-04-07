var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _rt_instances, e_fn, t_fn, n_fn, _a2;
import { o as e, t } from "./chunk-DlkHe4MQ.js";
import { t as n } from "./chunk-X4GG3EDV-DB6k4nCN.js";
import { n as r } from "./lib-cHtfzwLt.js";
import { t as i } from "./path-browserify-CWnXpqR1.js";
import { n as a, r as o, t as s, u as c } from "./cssesc-rnxSVAQr.js";
var l = new Set(`black.silver.gray.white.maroon.red.purple.fuchsia.green.lime.olive.yellow.navy.blue.teal.aqua.aliceblue.antiquewhite.aqua.aquamarine.azure.beige.bisque.black.blanchedalmond.blue.blueviolet.brown.burlywood.cadetblue.chartreuse.chocolate.coral.cornflowerblue.cornsilk.crimson.cyan.darkblue.darkcyan.darkgoldenrod.darkgray.darkgreen.darkgrey.darkkhaki.darkmagenta.darkolivegreen.darkorange.darkorchid.darkred.darksalmon.darkseagreen.darkslateblue.darkslategray.darkslategrey.darkturquoise.darkviolet.deeppink.deepskyblue.dimgray.dimgrey.dodgerblue.firebrick.floralwhite.forestgreen.fuchsia.gainsboro.ghostwhite.gold.goldenrod.gray.green.greenyellow.grey.honeydew.hotpink.indianred.indigo.ivory.khaki.lavender.lavenderblush.lawngreen.lemonchiffon.lightblue.lightcoral.lightcyan.lightgoldenrodyellow.lightgray.lightgreen.lightgrey.lightpink.lightsalmon.lightseagreen.lightskyblue.lightslategray.lightslategrey.lightsteelblue.lightyellow.lime.limegreen.linen.magenta.maroon.mediumaquamarine.mediumblue.mediumorchid.mediumpurple.mediumseagreen.mediumslateblue.mediumspringgreen.mediumturquoise.mediumvioletred.midnightblue.mintcream.mistyrose.moccasin.navajowhite.navy.oldlace.olive.olivedrab.orange.orangered.orchid.palegoldenrod.palegreen.paleturquoise.palevioletred.papayawhip.peachpuff.peru.pink.plum.powderblue.purple.rebeccapurple.red.rosybrown.royalblue.saddlebrown.salmon.sandybrown.seagreen.seashell.sienna.silver.skyblue.slateblue.slategray.slategrey.snow.springgreen.steelblue.tan.teal.thistle.tomato.turquoise.violet.wheat.white.whitesmoke.yellow.yellowgreen.transparent.currentcolor.canvas.canvastext.linktext.visitedtext.activetext.buttonface.buttontext.buttonborder.field.fieldtext.highlight.highlighttext.selecteditem.selecteditemtext.mark.marktext.graytext.accentcolor.accentcolortext`.split(`.`)), u = /^(rgba?|hsla?|hwb|color|(ok)?(lab|lch)|light-dark|color-mix)\(/i;
function d(e3) {
  return e3.charCodeAt(0) === 35 || u.test(e3) || l.has(e3.toLowerCase());
}
var f = [`calc`, `min`, `max`, `clamp`, `mod`, `rem`, `sin`, `cos`, `tan`, `asin`, `acos`, `atan`, `atan2`, `pow`, `sqrt`, `hypot`, `log`, `exp`, `round`];
function p(e3) {
  return e3.indexOf(`(`) !== -1 && f.some((t2) => e3.includes(`${t2}(`));
}
function m(e3) {
  if (!f.some((t3) => e3.includes(t3))) return e3;
  let t2 = ``, n2 = [], r2 = null, i2 = null;
  for (let a2 = 0; a2 < e3.length; a2++) {
    let o2 = e3.charCodeAt(a2);
    if (o2 >= 48 && o2 <= 57 || r2 !== null && (o2 === 37 || o2 >= 97 && o2 <= 122 || o2 >= 65 && o2 <= 90) ? r2 = a2 : (i2 = r2, r2 = null), o2 === 40) {
      t2 += e3[a2];
      let r3 = a2;
      for (let t3 = a2 - 1; t3 >= 0; t3--) {
        let n3 = e3.charCodeAt(t3);
        if (n3 >= 48 && n3 <= 57) r3 = t3;
        else if (n3 >= 97 && n3 <= 122) r3 = t3;
        else break;
      }
      let i3 = e3.slice(r3, a2);
      if (f.includes(i3)) {
        n2.unshift(true);
        continue;
      } else if (n2[0] && i3 === ``) {
        n2.unshift(true);
        continue;
      }
      n2.unshift(false);
      continue;
    } else if (o2 === 41) t2 += e3[a2], n2.shift();
    else if (o2 === 44 && n2[0]) {
      t2 += `, `;
      continue;
    } else {
      if (o2 === 32 && n2[0] && t2.charCodeAt(t2.length - 1) === 32) continue;
      if ((o2 === 43 || o2 === 42 || o2 === 47 || o2 === 45) && n2[0]) {
        let n3 = t2.trimEnd(), r3 = n3.charCodeAt(n3.length - 1), o3 = n3.charCodeAt(n3.length - 2), s2 = e3.charCodeAt(a2 + 1);
        if ((r3 === 101 || r3 === 69) && o3 >= 48 && o3 <= 57) {
          t2 += e3[a2];
          continue;
        } else if (r3 === 43 || r3 === 42 || r3 === 47 || r3 === 45) {
          t2 += e3[a2];
          continue;
        } else if (r3 === 40 || r3 === 44) {
          t2 += e3[a2];
          continue;
        } else e3.charCodeAt(a2 - 1) === 32 ? t2 += `${e3[a2]} ` : r3 >= 48 && r3 <= 57 || s2 >= 48 && s2 <= 57 || r3 === 41 || s2 === 40 || s2 === 43 || s2 === 42 || s2 === 47 || s2 === 45 || i2 !== null && i2 === a2 - 1 ? t2 += ` ${e3[a2]} ` : t2 += e3[a2];
      } else t2 += e3[a2];
    }
  }
  return t2;
}
var h = new Uint8Array(256);
function g(e3, t2) {
  let n2 = 0, r2 = [], i2 = 0, a2 = e3.length, o2 = t2.charCodeAt(0);
  for (let t3 = 0; t3 < a2; t3++) {
    let s2 = e3.charCodeAt(t3);
    if (n2 === 0 && s2 === o2) {
      r2.push(e3.slice(i2, t3)), i2 = t3 + 1;
      continue;
    }
    switch (s2) {
      case 92:
        t3 += 1;
        break;
      case 39:
      case 34:
        for (; ++t3 < a2; ) {
          let n3 = e3.charCodeAt(t3);
          if (n3 === 92) {
            t3 += 1;
            continue;
          }
          if (n3 === s2) break;
        }
        break;
      case 40:
        h[n2] = 41, n2++;
        break;
      case 91:
        h[n2] = 93, n2++;
        break;
      case 123:
        h[n2] = 125, n2++;
        break;
      case 93:
      case 125:
      case 41:
        n2 > 0 && s2 === h[n2 - 1] && n2--;
        break;
    }
  }
  return r2.push(e3.slice(i2)), r2;
}
var _ = { color: d, length: ue, percentage: E, ratio: ce, number: ae, integer: D, url: b, position: de, "bg-size": fe, "line-width": x, image: ee, "family-name": te, "generic-name": w, "absolute-size": ne, "relative-size": re, angle: me, vector: ge };
function v(e3, t2) {
  if (e3.startsWith(`var(`)) return null;
  for (let n2 of t2) if (_[n2]?.(e3)) return n2;
  return null;
}
var y = /^url\(.*\)$/;
function b(e3) {
  return y.test(e3);
}
function x(e3) {
  return g(e3, ` `).every((e4) => ue(e4) || ae(e4) || e4 === `thin` || e4 === `medium` || e4 === `thick`);
}
var S = /^(?:element|image|cross-fade|image-set)\(/, C = /^(repeating-)?(conic|linear|radial)-gradient\(/;
function ee(e3) {
  let t2 = 0;
  for (let n2 of g(e3, `,`)) if (!n2.startsWith(`var(`)) {
    if (b(n2)) {
      t2 += 1;
      continue;
    }
    if (C.test(n2)) {
      t2 += 1;
      continue;
    }
    if (S.test(n2)) {
      t2 += 1;
      continue;
    }
    return false;
  }
  return t2 > 0;
}
function w(e3) {
  return e3 === `serif` || e3 === `sans-serif` || e3 === `monospace` || e3 === `cursive` || e3 === `fantasy` || e3 === `system-ui` || e3 === `ui-serif` || e3 === `ui-sans-serif` || e3 === `ui-monospace` || e3 === `ui-rounded` || e3 === `math` || e3 === `emoji` || e3 === `fangsong`;
}
function te(e3) {
  let t2 = 0;
  for (let n2 of g(e3, `,`)) {
    let e4 = n2.charCodeAt(0);
    if (e4 >= 48 && e4 <= 57) return false;
    n2.startsWith(`var(`) || (t2 += 1);
  }
  return t2 > 0;
}
function ne(e3) {
  return e3 === `xx-small` || e3 === `x-small` || e3 === `small` || e3 === `medium` || e3 === `large` || e3 === `x-large` || e3 === `xx-large` || e3 === `xxx-large`;
}
function re(e3) {
  return e3 === `larger` || e3 === `smaller`;
}
var T = /[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/, ie = RegExp(`^${T.source}$`);
function ae(e3) {
  return ie.test(e3) || p(e3);
}
var oe = RegExp(`^${T.source}%$`);
function E(e3) {
  return oe.test(e3) || p(e3);
}
var se = RegExp(`^${T.source}\\s*/\\s*${T.source}$`);
function ce(e3) {
  return se.test(e3) || p(e3);
}
var le = RegExp(`^${T.source}(${`cm.mm.Q.in.pc.pt.px.em.ex.ch.rem.lh.rlh.vw.vh.vmin.vmax.vb.vi.svw.svh.lvw.lvh.dvw.dvh.cqw.cqh.cqi.cqb.cqmin.cqmax`.split(`.`).join(`|`)})$`);
function ue(e3) {
  return le.test(e3) || p(e3);
}
function de(e3) {
  let t2 = 0;
  for (let n2 of g(e3, ` `)) {
    if (n2 === `center` || n2 === `top` || n2 === `right` || n2 === `bottom` || n2 === `left`) {
      t2 += 1;
      continue;
    }
    if (!n2.startsWith(`var(`)) {
      if (ue(n2) || E(n2)) {
        t2 += 1;
        continue;
      }
      return false;
    }
  }
  return t2 > 0;
}
function fe(e3) {
  let t2 = 0;
  for (let n2 of g(e3, `,`)) {
    if (n2 === `cover` || n2 === `contain`) {
      t2 += 1;
      continue;
    }
    let e4 = g(n2, ` `);
    if (e4.length !== 1 && e4.length !== 2) return false;
    if (e4.every((e5) => e5 === `auto` || ue(e5) || E(e5))) {
      t2 += 1;
      continue;
    }
  }
  return t2 > 0;
}
var pe = RegExp(`^${T.source}(${[`deg`, `rad`, `grad`, `turn`].join(`|`)})$`);
function me(e3) {
  return pe.test(e3);
}
var he = RegExp(`^${T.source} +${T.source} +${T.source}$`);
function ge(e3) {
  return he.test(e3);
}
function D(e3) {
  let t2 = Number(e3);
  return Number.isInteger(t2) && t2 >= 0 && String(t2) === String(e3);
}
function _e(e3) {
  let t2 = Number(e3);
  return Number.isInteger(t2) && t2 > 0 && String(t2) === String(e3);
}
function O(e3) {
  return ye(e3, 0.25);
}
function ve(e3) {
  return ye(e3, 0.25);
}
function ye(e3, t2) {
  let n2 = Number(e3);
  return n2 >= 0 && n2 % t2 === 0 && String(n2) === String(e3);
}
function be(e3) {
  return { __BARE_VALUE__: e3 };
}
var k = be((e3) => {
  if (D(e3.value)) return e3.value;
}), A = be((e3) => {
  if (D(e3.value)) return `${e3.value}%`;
}), xe = be((e3) => {
  if (D(e3.value)) return `${e3.value}px`;
}), Se = be((e3) => {
  if (D(e3.value)) return `${e3.value}ms`;
}), Ce = be((e3) => {
  if (D(e3.value)) return `${e3.value}deg`;
}), we = be((e3) => {
  if (e3.fraction === null) return;
  let [t2, n2] = g(e3.fraction, `/`);
  if (!(!D(t2) || !D(n2))) return e3.fraction;
}), Te = be((e3) => {
  if (D(Number(e3.value))) return `repeat(${e3.value}, minmax(0, 1fr))`;
}), Ee = { accentColor: ({ theme: e3 }) => e3(`colors`), animation: { none: `none`, spin: `spin 1s linear infinite`, ping: `ping 1s cubic-bezier(0, 0, 0.2, 1) infinite`, pulse: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`, bounce: `bounce 1s infinite` }, aria: { busy: `busy="true"`, checked: `checked="true"`, disabled: `disabled="true"`, expanded: `expanded="true"`, hidden: `hidden="true"`, pressed: `pressed="true"`, readonly: `readonly="true"`, required: `required="true"`, selected: `selected="true"` }, aspectRatio: { auto: `auto`, square: `1 / 1`, video: `16 / 9`, ...we }, backdropBlur: ({ theme: e3 }) => e3(`blur`), backdropBrightness: ({ theme: e3 }) => ({ ...e3(`brightness`), ...A }), backdropContrast: ({ theme: e3 }) => ({ ...e3(`contrast`), ...A }), backdropGrayscale: ({ theme: e3 }) => ({ ...e3(`grayscale`), ...A }), backdropHueRotate: ({ theme: e3 }) => ({ ...e3(`hueRotate`), ...Ce }), backdropInvert: ({ theme: e3 }) => ({ ...e3(`invert`), ...A }), backdropOpacity: ({ theme: e3 }) => ({ ...e3(`opacity`), ...A }), backdropSaturate: ({ theme: e3 }) => ({ ...e3(`saturate`), ...A }), backdropSepia: ({ theme: e3 }) => ({ ...e3(`sepia`), ...A }), backgroundColor: ({ theme: e3 }) => e3(`colors`), backgroundImage: { none: `none`, "gradient-to-t": `linear-gradient(to top, var(--tw-gradient-stops))`, "gradient-to-tr": `linear-gradient(to top right, var(--tw-gradient-stops))`, "gradient-to-r": `linear-gradient(to right, var(--tw-gradient-stops))`, "gradient-to-br": `linear-gradient(to bottom right, var(--tw-gradient-stops))`, "gradient-to-b": `linear-gradient(to bottom, var(--tw-gradient-stops))`, "gradient-to-bl": `linear-gradient(to bottom left, var(--tw-gradient-stops))`, "gradient-to-l": `linear-gradient(to left, var(--tw-gradient-stops))`, "gradient-to-tl": `linear-gradient(to top left, var(--tw-gradient-stops))` }, backgroundOpacity: ({ theme: e3 }) => e3(`opacity`), backgroundPosition: { bottom: `bottom`, center: `center`, left: `left`, "left-bottom": `left bottom`, "left-top": `left top`, right: `right`, "right-bottom": `right bottom`, "right-top": `right top`, top: `top` }, backgroundSize: { auto: `auto`, cover: `cover`, contain: `contain` }, blur: { 0: `0`, none: ``, sm: `4px`, DEFAULT: `8px`, md: `12px`, lg: `16px`, xl: `24px`, "2xl": `40px`, "3xl": `64px` }, borderColor: ({ theme: e3 }) => ({ DEFAULT: `currentcolor`, ...e3(`colors`) }), borderOpacity: ({ theme: e3 }) => e3(`opacity`), borderRadius: { none: `0px`, sm: `0.125rem`, DEFAULT: `0.25rem`, md: `0.375rem`, lg: `0.5rem`, xl: `0.75rem`, "2xl": `1rem`, "3xl": `1.5rem`, full: `9999px` }, borderSpacing: ({ theme: e3 }) => e3(`spacing`), borderWidth: { DEFAULT: `1px`, 0: `0px`, 2: `2px`, 4: `4px`, 8: `8px`, ...xe }, boxShadow: { sm: `0 1px 2px 0 rgb(0 0 0 / 0.05)`, DEFAULT: `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`, md: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`, lg: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`, xl: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`, "2xl": `0 25px 50px -12px rgb(0 0 0 / 0.25)`, inner: `inset 0 2px 4px 0 rgb(0 0 0 / 0.05)`, none: `none` }, boxShadowColor: ({ theme: e3 }) => e3(`colors`), brightness: { 0: `0`, 50: `.5`, 75: `.75`, 90: `.9`, 95: `.95`, 100: `1`, 105: `1.05`, 110: `1.1`, 125: `1.25`, 150: `1.5`, 200: `2`, ...A }, caretColor: ({ theme: e3 }) => e3(`colors`), colors: () => ({ ...n }), columns: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, "3xs": `16rem`, "2xs": `18rem`, xs: `20rem`, sm: `24rem`, md: `28rem`, lg: `32rem`, xl: `36rem`, "2xl": `42rem`, "3xl": `48rem`, "4xl": `56rem`, "5xl": `64rem`, "6xl": `72rem`, "7xl": `80rem`, ...k }, container: {}, content: { none: `none` }, contrast: { 0: `0`, 50: `.5`, 75: `.75`, 100: `1`, 125: `1.25`, 150: `1.5`, 200: `2`, ...A }, cursor: { auto: `auto`, default: `default`, pointer: `pointer`, wait: `wait`, text: `text`, move: `move`, help: `help`, "not-allowed": `not-allowed`, none: `none`, "context-menu": `context-menu`, progress: `progress`, cell: `cell`, crosshair: `crosshair`, "vertical-text": `vertical-text`, alias: `alias`, copy: `copy`, "no-drop": `no-drop`, grab: `grab`, grabbing: `grabbing`, "all-scroll": `all-scroll`, "col-resize": `col-resize`, "row-resize": `row-resize`, "n-resize": `n-resize`, "e-resize": `e-resize`, "s-resize": `s-resize`, "w-resize": `w-resize`, "ne-resize": `ne-resize`, "nw-resize": `nw-resize`, "se-resize": `se-resize`, "sw-resize": `sw-resize`, "ew-resize": `ew-resize`, "ns-resize": `ns-resize`, "nesw-resize": `nesw-resize`, "nwse-resize": `nwse-resize`, "zoom-in": `zoom-in`, "zoom-out": `zoom-out` }, divideColor: ({ theme: e3 }) => e3(`borderColor`), divideOpacity: ({ theme: e3 }) => e3(`borderOpacity`), divideWidth: ({ theme: e3 }) => ({ ...e3(`borderWidth`), ...xe }), dropShadow: { sm: `0 1px 1px rgb(0 0 0 / 0.05)`, DEFAULT: [`0 1px 2px rgb(0 0 0 / 0.1)`, `0 1px 1px rgb(0 0 0 / 0.06)`], md: [`0 4px 3px rgb(0 0 0 / 0.07)`, `0 2px 2px rgb(0 0 0 / 0.06)`], lg: [`0 10px 8px rgb(0 0 0 / 0.04)`, `0 4px 3px rgb(0 0 0 / 0.1)`], xl: [`0 20px 13px rgb(0 0 0 / 0.03)`, `0 8px 5px rgb(0 0 0 / 0.08)`], "2xl": `0 25px 25px rgb(0 0 0 / 0.15)`, none: `0 0 #0000` }, fill: ({ theme: e3 }) => e3(`colors`), flex: { 1: `1 1 0%`, auto: `1 1 auto`, initial: `0 1 auto`, none: `none` }, flexBasis: ({ theme: e3 }) => ({ auto: `auto`, "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, "1/12": `8.333333%`, "2/12": `16.666667%`, "3/12": `25%`, "4/12": `33.333333%`, "5/12": `41.666667%`, "6/12": `50%`, "7/12": `58.333333%`, "8/12": `66.666667%`, "9/12": `75%`, "10/12": `83.333333%`, "11/12": `91.666667%`, full: `100%`, ...e3(`spacing`) }), flexGrow: { 0: `0`, DEFAULT: `1`, ...k }, flexShrink: { 0: `0`, DEFAULT: `1`, ...k }, fontFamily: { sans: [`ui-sans-serif`, `system-ui`, `sans-serif`, `"Apple Color Emoji"`, `"Segoe UI Emoji"`, `"Segoe UI Symbol"`, `"Noto Color Emoji"`], serif: [`ui-serif`, `Georgia`, `Cambria`, `"Times New Roman"`, `Times`, `serif`], mono: [`ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, `"Liberation Mono"`, `"Courier New"`, `monospace`] }, fontSize: { xs: [`0.75rem`, { lineHeight: `1rem` }], sm: [`0.875rem`, { lineHeight: `1.25rem` }], base: [`1rem`, { lineHeight: `1.5rem` }], lg: [`1.125rem`, { lineHeight: `1.75rem` }], xl: [`1.25rem`, { lineHeight: `1.75rem` }], "2xl": [`1.5rem`, { lineHeight: `2rem` }], "3xl": [`1.875rem`, { lineHeight: `2.25rem` }], "4xl": [`2.25rem`, { lineHeight: `2.5rem` }], "5xl": [`3rem`, { lineHeight: `1` }], "6xl": [`3.75rem`, { lineHeight: `1` }], "7xl": [`4.5rem`, { lineHeight: `1` }], "8xl": [`6rem`, { lineHeight: `1` }], "9xl": [`8rem`, { lineHeight: `1` }] }, fontWeight: { thin: `100`, extralight: `200`, light: `300`, normal: `400`, medium: `500`, semibold: `600`, bold: `700`, extrabold: `800`, black: `900` }, gap: ({ theme: e3 }) => e3(`spacing`), gradientColorStops: ({ theme: e3 }) => e3(`colors`), gradientColorStopPositions: { "0%": `0%`, "5%": `5%`, "10%": `10%`, "15%": `15%`, "20%": `20%`, "25%": `25%`, "30%": `30%`, "35%": `35%`, "40%": `40%`, "45%": `45%`, "50%": `50%`, "55%": `55%`, "60%": `60%`, "65%": `65%`, "70%": `70%`, "75%": `75%`, "80%": `80%`, "85%": `85%`, "90%": `90%`, "95%": `95%`, "100%": `100%`, ...A }, grayscale: { 0: `0`, DEFAULT: `100%`, ...A }, gridAutoColumns: { auto: `auto`, min: `min-content`, max: `max-content`, fr: `minmax(0, 1fr)` }, gridAutoRows: { auto: `auto`, min: `min-content`, max: `max-content`, fr: `minmax(0, 1fr)` }, gridColumn: { auto: `auto`, "span-1": `span 1 / span 1`, "span-2": `span 2 / span 2`, "span-3": `span 3 / span 3`, "span-4": `span 4 / span 4`, "span-5": `span 5 / span 5`, "span-6": `span 6 / span 6`, "span-7": `span 7 / span 7`, "span-8": `span 8 / span 8`, "span-9": `span 9 / span 9`, "span-10": `span 10 / span 10`, "span-11": `span 11 / span 11`, "span-12": `span 12 / span 12`, "span-full": `1 / -1` }, gridColumnEnd: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13`, ...k }, gridColumnStart: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13`, ...k }, gridRow: { auto: `auto`, "span-1": `span 1 / span 1`, "span-2": `span 2 / span 2`, "span-3": `span 3 / span 3`, "span-4": `span 4 / span 4`, "span-5": `span 5 / span 5`, "span-6": `span 6 / span 6`, "span-7": `span 7 / span 7`, "span-8": `span 8 / span 8`, "span-9": `span 9 / span 9`, "span-10": `span 10 / span 10`, "span-11": `span 11 / span 11`, "span-12": `span 12 / span 12`, "span-full": `1 / -1` }, gridRowEnd: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13`, ...k }, gridRowStart: { auto: `auto`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, 13: `13`, ...k }, gridTemplateColumns: { none: `none`, subgrid: `subgrid`, 1: `repeat(1, minmax(0, 1fr))`, 2: `repeat(2, minmax(0, 1fr))`, 3: `repeat(3, minmax(0, 1fr))`, 4: `repeat(4, minmax(0, 1fr))`, 5: `repeat(5, minmax(0, 1fr))`, 6: `repeat(6, minmax(0, 1fr))`, 7: `repeat(7, minmax(0, 1fr))`, 8: `repeat(8, minmax(0, 1fr))`, 9: `repeat(9, minmax(0, 1fr))`, 10: `repeat(10, minmax(0, 1fr))`, 11: `repeat(11, minmax(0, 1fr))`, 12: `repeat(12, minmax(0, 1fr))`, ...Te }, gridTemplateRows: { none: `none`, subgrid: `subgrid`, 1: `repeat(1, minmax(0, 1fr))`, 2: `repeat(2, minmax(0, 1fr))`, 3: `repeat(3, minmax(0, 1fr))`, 4: `repeat(4, minmax(0, 1fr))`, 5: `repeat(5, minmax(0, 1fr))`, 6: `repeat(6, minmax(0, 1fr))`, 7: `repeat(7, minmax(0, 1fr))`, 8: `repeat(8, minmax(0, 1fr))`, 9: `repeat(9, minmax(0, 1fr))`, 10: `repeat(10, minmax(0, 1fr))`, 11: `repeat(11, minmax(0, 1fr))`, 12: `repeat(12, minmax(0, 1fr))`, ...Te }, height: ({ theme: e3 }) => ({ auto: `auto`, "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, full: `100%`, screen: `100vh`, svh: `100svh`, lvh: `100lvh`, dvh: `100dvh`, min: `min-content`, max: `max-content`, fit: `fit-content`, ...e3(`spacing`) }), hueRotate: { 0: `0deg`, 15: `15deg`, 30: `30deg`, 60: `60deg`, 90: `90deg`, 180: `180deg`, ...Ce }, inset: ({ theme: e3 }) => ({ auto: `auto`, "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, full: `100%`, ...e3(`spacing`) }), invert: { 0: `0`, DEFAULT: `100%`, ...A }, keyframes: { spin: { to: { transform: `rotate(360deg)` } }, ping: { "75%, 100%": { transform: `scale(2)`, opacity: `0` } }, pulse: { "50%": { opacity: `.5` } }, bounce: { "0%, 100%": { transform: `translateY(-25%)`, animationTimingFunction: `cubic-bezier(0.8,0,1,1)` }, "50%": { transform: `none`, animationTimingFunction: `cubic-bezier(0,0,0.2,1)` } } }, letterSpacing: { tighter: `-0.05em`, tight: `-0.025em`, normal: `0em`, wide: `0.025em`, wider: `0.05em`, widest: `0.1em` }, lineHeight: { none: `1`, tight: `1.25`, snug: `1.375`, normal: `1.5`, relaxed: `1.625`, loose: `2`, 3: `.75rem`, 4: `1rem`, 5: `1.25rem`, 6: `1.5rem`, 7: `1.75rem`, 8: `2rem`, 9: `2.25rem`, 10: `2.5rem` }, listStyleType: { none: `none`, disc: `disc`, decimal: `decimal` }, listStyleImage: { none: `none` }, margin: ({ theme: e3 }) => ({ auto: `auto`, ...e3(`spacing`) }), lineClamp: { 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, ...k }, maxHeight: ({ theme: e3 }) => ({ none: `none`, full: `100%`, screen: `100vh`, svh: `100svh`, lvh: `100lvh`, dvh: `100dvh`, min: `min-content`, max: `max-content`, fit: `fit-content`, ...e3(`spacing`) }), maxWidth: ({ theme: e3 }) => ({ none: `none`, xs: `20rem`, sm: `24rem`, md: `28rem`, lg: `32rem`, xl: `36rem`, "2xl": `42rem`, "3xl": `48rem`, "4xl": `56rem`, "5xl": `64rem`, "6xl": `72rem`, "7xl": `80rem`, full: `100%`, min: `min-content`, max: `max-content`, fit: `fit-content`, prose: `65ch`, ...e3(`spacing`) }), minHeight: ({ theme: e3 }) => ({ full: `100%`, screen: `100vh`, svh: `100svh`, lvh: `100lvh`, dvh: `100dvh`, min: `min-content`, max: `max-content`, fit: `fit-content`, ...e3(`spacing`) }), minWidth: ({ theme: e3 }) => ({ full: `100%`, min: `min-content`, max: `max-content`, fit: `fit-content`, ...e3(`spacing`) }), objectPosition: { bottom: `bottom`, center: `center`, left: `left`, "left-bottom": `left bottom`, "left-top": `left top`, right: `right`, "right-bottom": `right bottom`, "right-top": `right top`, top: `top` }, opacity: { 0: `0`, 5: `0.05`, 10: `0.1`, 15: `0.15`, 20: `0.2`, 25: `0.25`, 30: `0.3`, 35: `0.35`, 40: `0.4`, 45: `0.45`, 50: `0.5`, 55: `0.55`, 60: `0.6`, 65: `0.65`, 70: `0.7`, 75: `0.75`, 80: `0.8`, 85: `0.85`, 90: `0.9`, 95: `0.95`, 100: `1`, ...A }, order: { first: `-9999`, last: `9999`, none: `0`, 1: `1`, 2: `2`, 3: `3`, 4: `4`, 5: `5`, 6: `6`, 7: `7`, 8: `8`, 9: `9`, 10: `10`, 11: `11`, 12: `12`, ...k }, outlineColor: ({ theme: e3 }) => e3(`colors`), outlineOffset: { 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px`, ...xe }, outlineWidth: { 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px`, ...xe }, padding: ({ theme: e3 }) => e3(`spacing`), placeholderColor: ({ theme: e3 }) => e3(`colors`), placeholderOpacity: ({ theme: e3 }) => e3(`opacity`), ringColor: ({ theme: e3 }) => ({ DEFAULT: `currentcolor`, ...e3(`colors`) }), ringOffsetColor: ({ theme: e3 }) => e3(`colors`), ringOffsetWidth: { 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px`, ...xe }, ringOpacity: ({ theme: e3 }) => ({ DEFAULT: `0.5`, ...e3(`opacity`) }), ringWidth: { DEFAULT: `3px`, 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px`, ...xe }, rotate: { 0: `0deg`, 1: `1deg`, 2: `2deg`, 3: `3deg`, 6: `6deg`, 12: `12deg`, 45: `45deg`, 90: `90deg`, 180: `180deg`, ...Ce }, saturate: { 0: `0`, 50: `.5`, 100: `1`, 150: `1.5`, 200: `2`, ...A }, scale: { 0: `0`, 50: `.5`, 75: `.75`, 90: `.9`, 95: `.95`, 100: `1`, 105: `1.05`, 110: `1.1`, 125: `1.25`, 150: `1.5`, ...A }, screens: { sm: `40rem`, md: `48rem`, lg: `64rem`, xl: `80rem`, "2xl": `96rem` }, scrollMargin: ({ theme: e3 }) => e3(`spacing`), scrollPadding: ({ theme: e3 }) => e3(`spacing`), sepia: { 0: `0`, DEFAULT: `100%`, ...A }, skew: { 0: `0deg`, 1: `1deg`, 2: `2deg`, 3: `3deg`, 6: `6deg`, 12: `12deg`, ...Ce }, space: ({ theme: e3 }) => e3(`spacing`), spacing: { px: `1px`, 0: `0px`, 0.5: `0.125rem`, 1: `0.25rem`, 1.5: `0.375rem`, 2: `0.5rem`, 2.5: `0.625rem`, 3: `0.75rem`, 3.5: `0.875rem`, 4: `1rem`, 5: `1.25rem`, 6: `1.5rem`, 7: `1.75rem`, 8: `2rem`, 9: `2.25rem`, 10: `2.5rem`, 11: `2.75rem`, 12: `3rem`, 14: `3.5rem`, 16: `4rem`, 20: `5rem`, 24: `6rem`, 28: `7rem`, 32: `8rem`, 36: `9rem`, 40: `10rem`, 44: `11rem`, 48: `12rem`, 52: `13rem`, 56: `14rem`, 60: `15rem`, 64: `16rem`, 72: `18rem`, 80: `20rem`, 96: `24rem` }, stroke: ({ theme: e3 }) => ({ none: `none`, ...e3(`colors`) }), strokeWidth: { 0: `0`, 1: `1`, 2: `2`, ...k }, supports: {}, data: {}, textColor: ({ theme: e3 }) => e3(`colors`), textDecorationColor: ({ theme: e3 }) => e3(`colors`), textDecorationThickness: { auto: `auto`, "from-font": `from-font`, 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px`, ...xe }, textIndent: ({ theme: e3 }) => e3(`spacing`), textOpacity: ({ theme: e3 }) => e3(`opacity`), textUnderlineOffset: { auto: `auto`, 0: `0px`, 1: `1px`, 2: `2px`, 4: `4px`, 8: `8px`, ...xe }, transformOrigin: { center: `center`, top: `top`, "top-right": `top right`, right: `right`, "bottom-right": `bottom right`, bottom: `bottom`, "bottom-left": `bottom left`, left: `left`, "top-left": `top left` }, transitionDelay: { 0: `0s`, 75: `75ms`, 100: `100ms`, 150: `150ms`, 200: `200ms`, 300: `300ms`, 500: `500ms`, 700: `700ms`, 1e3: `1000ms`, ...Se }, transitionDuration: { DEFAULT: `150ms`, 0: `0s`, 75: `75ms`, 100: `100ms`, 150: `150ms`, 200: `200ms`, 300: `300ms`, 500: `500ms`, 700: `700ms`, 1e3: `1000ms`, ...Se }, transitionProperty: { none: `none`, all: `all`, DEFAULT: `color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter`, colors: `color, background-color, border-color, outline-color, text-decoration-color, fill, stroke`, opacity: `opacity`, shadow: `box-shadow`, transform: `transform` }, transitionTimingFunction: { DEFAULT: `cubic-bezier(0.4, 0, 0.2, 1)`, linear: `linear`, in: `cubic-bezier(0.4, 0, 1, 1)`, out: `cubic-bezier(0, 0, 0.2, 1)`, "in-out": `cubic-bezier(0.4, 0, 0.2, 1)` }, translate: ({ theme: e3 }) => ({ "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, full: `100%`, ...e3(`spacing`) }), size: ({ theme: e3 }) => ({ auto: `auto`, "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, "1/12": `8.333333%`, "2/12": `16.666667%`, "3/12": `25%`, "4/12": `33.333333%`, "5/12": `41.666667%`, "6/12": `50%`, "7/12": `58.333333%`, "8/12": `66.666667%`, "9/12": `75%`, "10/12": `83.333333%`, "11/12": `91.666667%`, full: `100%`, min: `min-content`, max: `max-content`, fit: `fit-content`, ...e3(`spacing`) }), width: ({ theme: e3 }) => ({ auto: `auto`, "1/2": `50%`, "1/3": `33.333333%`, "2/3": `66.666667%`, "1/4": `25%`, "2/4": `50%`, "3/4": `75%`, "1/5": `20%`, "2/5": `40%`, "3/5": `60%`, "4/5": `80%`, "1/6": `16.666667%`, "2/6": `33.333333%`, "3/6": `50%`, "4/6": `66.666667%`, "5/6": `83.333333%`, "1/12": `8.333333%`, "2/12": `16.666667%`, "3/12": `25%`, "4/12": `33.333333%`, "5/12": `41.666667%`, "6/12": `50%`, "7/12": `58.333333%`, "8/12": `66.666667%`, "9/12": `75%`, "10/12": `83.333333%`, "11/12": `91.666667%`, full: `100%`, screen: `100vw`, svw: `100svw`, lvw: `100lvw`, dvw: `100dvw`, min: `min-content`, max: `max-content`, fit: `fit-content`, ...e3(`spacing`) }), willChange: { auto: `auto`, scroll: `scroll-position`, contents: `contents`, transform: `transform` }, zIndex: { auto: `auto`, 0: `0`, 10: `10`, 20: `20`, 30: `30`, 40: `40`, 50: `50`, ...k } }, De = `4.2.2`;
function Oe(e3) {
  let t2 = [0];
  for (let n3 = 0; n3 < e3.length; n3++) e3.charCodeAt(n3) === 10 && t2.push(n3 + 1);
  function n2(e4) {
    let n3 = 0, r3 = t2.length;
    for (; r3 > 0; ) {
      let i3 = (r3 | 0) >> 1, a2 = n3 + i3;
      t2[a2] <= e4 ? (n3 = a2 + 1, r3 = r3 - i3 - 1) : r3 = i3;
    }
    --n3;
    let i2 = e4 - t2[n3];
    return { line: n3 + 1, column: i2 };
  }
  function r2({ line: e4, column: n3 }) {
    --e4, e4 = Math.min(Math.max(e4, 0), t2.length - 1);
    let r3 = t2[e4], i2 = t2[e4 + 1] ?? r3;
    return Math.min(Math.max(r3 + n3, 0), i2);
  }
  return { find: n2, findOffset: r2 };
}
var ke = 92, Ae = 47, je = 42, Me = 34, Ne = 39, Pe = 58, Fe = 59, j = 10, Ie = 13, Le = 32, Re = 9, ze = 123, Be = 125, Ve = 40, He = 41, Ue = 91, We = 93, Ge = 45, Ke = 64, qe = 33, Je = class e2 extends Error {
  constructor(t2, n2) {
    if (n2) {
      let e3 = n2[0], r2 = Oe(e3.code).find(n2[1]);
      t2 = `${e3.file}:${r2.line}:${r2.column + 1}: ${t2}`;
    }
    super(t2);
    __publicField(this, "loc");
    this.name = `CssSyntaxError`, this.loc = n2, Error.captureStackTrace && Error.captureStackTrace(this, e2);
  }
};
function Ye(e3, t2) {
  let n2 = t2?.from ? { file: t2.from, code: e3 } : null;
  e3[0] === `\uFEFF` && (e3 = ` ` + e3.slice(1));
  let r2 = [], i2 = [], a2 = [], o2 = null, s2 = null, c2 = ``, l2 = ``, u2 = 0, d2;
  for (let t3 = 0; t3 < e3.length; t3++) {
    let f2 = e3.charCodeAt(t3);
    if (!(f2 === Ie && (d2 = e3.charCodeAt(t3 + 1), d2 === j))) if (f2 === ke) c2 === `` && (u2 = t3), c2 += e3.slice(t3, t3 + 2), t3 += 1;
    else if (f2 === Ae && e3.charCodeAt(t3 + 1) === je) {
      let r3 = t3;
      for (let n3 = t3 + 2; n3 < e3.length; n3++) if (d2 = e3.charCodeAt(n3), d2 === ke) n3 += 1;
      else if (d2 === je && e3.charCodeAt(n3 + 1) === Ae) {
        t3 = n3 + 1;
        break;
      }
      let a3 = e3.slice(r3, t3 + 1);
      if (a3.charCodeAt(2) === qe) {
        let e4 = wt(a3.slice(2, -2));
        i2.push(e4), n2 && (e4.src = [n2, r3, t3 + 1], e4.dst = [n2, r3, t3 + 1]);
      }
    } else if (f2 === Ne || f2 === Me) {
      let r3 = Qe(e3, t3, f2, n2);
      c2 += e3.slice(t3, r3 + 1), t3 = r3;
    } else {
      if ((f2 === Le || f2 === j || f2 === Re) && (d2 = e3.charCodeAt(t3 + 1)) && (d2 === Le || d2 === j || d2 === Re || d2 === Ie && (d2 = e3.charCodeAt(t3 + 2)) && d2 == j)) continue;
      if (f2 === j) {
        if (c2.length === 0) continue;
        d2 = c2.charCodeAt(c2.length - 1), d2 !== Le && d2 !== j && d2 !== Re && (c2 += ` `);
      } else if (f2 === Ge && e3.charCodeAt(t3 + 1) === Ge && c2.length === 0) {
        let i3 = ``, a3 = t3, s3 = -1;
        for (let r3 = t3 + 2; r3 < e3.length; r3++) if (d2 = e3.charCodeAt(r3), d2 === ke) r3 += 1;
        else if (d2 === Ne || d2 === Me) r3 = Qe(e3, r3, d2, n2);
        else if (d2 === Ae && e3.charCodeAt(r3 + 1) === je) {
          for (let t4 = r3 + 2; t4 < e3.length; t4++) if (d2 = e3.charCodeAt(t4), d2 === ke) t4 += 1;
          else if (d2 === je && e3.charCodeAt(t4 + 1) === Ae) {
            r3 = t4 + 1;
            break;
          }
        } else if (s3 === -1 && d2 === Pe) s3 = c2.length + r3 - a3;
        else if (d2 === Fe && i3.length === 0) {
          c2 += e3.slice(a3, r3), t3 = r3;
          break;
        } else if (d2 === Ve) i3 += `)`;
        else if (d2 === Ue) i3 += `]`;
        else if (d2 === ze) i3 += `}`;
        else if ((d2 === Be || e3.length - 1 === r3) && i3.length === 0) {
          t3 = r3 - 1, c2 += e3.slice(a3, r3);
          break;
        } else (d2 === He || d2 === We || d2 === Be) && i3.length > 0 && e3[r3] === i3[i3.length - 1] && (i3 = i3.slice(0, -1));
        let l3 = Ze(c2, s3);
        if (!l3) throw new Je(`Invalid custom property, expected a value`, n2 ? [n2, a3, t3] : null);
        n2 && (l3.src = [n2, a3, t3], l3.dst = [n2, a3, t3]), o2 ? o2.nodes.push(l3) : r2.push(l3), c2 = ``;
      } else if (f2 === Fe && c2.charCodeAt(0) === Ke) s2 = Xe(c2), n2 && (s2.src = [n2, u2, t3], s2.dst = [n2, u2, t3]), o2 ? o2.nodes.push(s2) : r2.push(s2), c2 = ``, s2 = null;
      else if (f2 === Fe && l2[l2.length - 1] !== `)`) {
        let e4 = Ze(c2);
        if (!e4) {
          if (c2.length === 0) continue;
          throw new Je(`Invalid declaration: \`${c2.trim()}\``, n2 ? [n2, u2, t3] : null);
        }
        n2 && (e4.src = [n2, u2, t3], e4.dst = [n2, u2, t3]), o2 ? o2.nodes.push(e4) : r2.push(e4), c2 = ``;
      } else if (f2 === ze && l2[l2.length - 1] !== `)`) l2 += `}`, s2 = B(c2.trim()), n2 && (s2.src = [n2, u2, t3], s2.dst = [n2, u2, t3]), o2 && o2.nodes.push(s2), a2.push(o2), o2 = s2, c2 = ``, s2 = null;
      else if (f2 === Be && l2[l2.length - 1] !== `)`) {
        if (l2 === ``) throw new Je(`Missing opening {`, n2 ? [n2, t3, t3] : null);
        if (l2 = l2.slice(0, -1), c2.length > 0) if (c2.charCodeAt(0) === Ke) s2 = Xe(c2), n2 && (s2.src = [n2, u2, t3], s2.dst = [n2, u2, t3]), o2 ? o2.nodes.push(s2) : r2.push(s2), c2 = ``, s2 = null;
        else {
          let e5 = c2.indexOf(`:`);
          if (o2) {
            let r3 = Ze(c2, e5);
            if (!r3) throw new Je(`Invalid declaration: \`${c2.trim()}\``, n2 ? [n2, u2, t3] : null);
            n2 && (r3.src = [n2, u2, t3], r3.dst = [n2, u2, t3]), o2.nodes.push(r3);
          }
        }
        let e4 = a2.pop() ?? null;
        e4 === null && o2 && r2.push(o2), o2 = e4, c2 = ``, s2 = null;
      } else if (f2 === Ve) l2 += `)`, c2 += `(`;
      else if (f2 === He) {
        if (l2[l2.length - 1] !== `)`) throw new Je(`Missing opening (`, n2 ? [n2, t3, t3] : null);
        l2 = l2.slice(0, -1), c2 += `)`;
      } else {
        if (c2.length === 0 && (f2 === Le || f2 === j || f2 === Re)) continue;
        c2 === `` && (u2 = t3), c2 += String.fromCharCode(f2);
      }
    }
  }
  if (c2.charCodeAt(0) === Ke) {
    let t3 = Xe(c2);
    n2 && (t3.src = [n2, u2, e3.length], t3.dst = [n2, u2, e3.length]), r2.push(t3);
  }
  if (l2.length > 0 && o2) {
    if (o2.kind === `rule`) throw new Je(`Missing closing } at ${o2.selector}`, o2.src ? [o2.src[0], o2.src[1], o2.src[1]] : null);
    if (o2.kind === `at-rule`) throw new Je(`Missing closing } at ${o2.name} ${o2.params}`, o2.src ? [o2.src[0], o2.src[1], o2.src[1]] : null);
  }
  return i2.length > 0 ? i2.concat(r2) : r2;
}
function Xe(e3, t2 = []) {
  let n2 = e3, r2 = ``;
  for (let t3 = 5; t3 < e3.length; t3++) {
    let i2 = e3.charCodeAt(t3);
    if (i2 === Le || i2 === Re || i2 === Ve) {
      n2 = e3.slice(0, t3), r2 = e3.slice(t3);
      break;
    }
  }
  return z(n2.trim(), r2.trim(), t2);
}
function Ze(e3, t2 = e3.indexOf(`:`)) {
  if (t2 === -1) return null;
  let n2 = e3.indexOf(`!important`, t2 + 1);
  return V(e3.slice(0, t2).trim(), e3.slice(t2 + 1, n2 === -1 ? e3.length : n2).trim(), n2 !== -1);
}
function Qe(e3, t2, n2, r2 = null) {
  let i2;
  for (let a2 = t2 + 1; a2 < e3.length; a2++) if (i2 = e3.charCodeAt(a2), i2 === ke) a2 += 1;
  else {
    if (i2 === n2) return a2;
    if (i2 === Fe && (e3.charCodeAt(a2 + 1) === j || e3.charCodeAt(a2 + 1) === Ie && e3.charCodeAt(a2 + 2) === j)) throw new Je(`Unterminated string: ${e3.slice(t2, a2 + 1) + String.fromCharCode(n2)}`, r2 ? [r2, t2, a2 + 1] : null);
    if (i2 === j || i2 === Ie && e3.charCodeAt(a2 + 1) === j) throw new Je(`Unterminated string: ${e3.slice(t2, a2) + String.fromCharCode(n2)}`, r2 ? [r2, t2, a2 + 1] : null);
  }
  return t2;
}
function $e(e3) {
  if (arguments.length === 0) throw TypeError("`CSS.escape` requires an argument.");
  let t2 = String(e3), n2 = t2.length, r2 = -1, i2, a2 = ``, o2 = t2.charCodeAt(0);
  if (n2 === 1 && o2 === 45) return `\\` + t2;
  for (; ++r2 < n2; ) {
    if (i2 = t2.charCodeAt(r2), i2 === 0) {
      a2 += `\uFFFD`;
      continue;
    }
    if (i2 >= 1 && i2 <= 31 || i2 === 127 || r2 === 0 && i2 >= 48 && i2 <= 57 || r2 === 1 && i2 >= 48 && i2 <= 57 && o2 === 45) {
      a2 += `\\` + i2.toString(16) + ` `;
      continue;
    }
    if (i2 >= 128 || i2 === 45 || i2 === 95 || i2 >= 48 && i2 <= 57 || i2 >= 65 && i2 <= 90 || i2 >= 97 && i2 <= 122) {
      a2 += t2.charAt(r2);
      continue;
    }
    a2 += `\\` + t2.charAt(r2);
  }
  return a2;
}
function et(e3) {
  return e3.replace(/\\([\dA-Fa-f]{1,6}[\t\n\f\r ]?|[\S\s])/g, (e4) => e4.length > 2 ? String.fromCodePoint(Number.parseInt(e4.slice(1).trim(), 16)) : e4[1]);
}
var tt = /* @__PURE__ */ new Map([[`--font`, [`--font-weight`, `--font-size`]], [`--inset`, [`--inset-shadow`, `--inset-ring`]], [`--text`, [`--text-color`, `--text-decoration-color`, `--text-decoration-thickness`, `--text-indent`, `--text-shadow`, `--text-underline-offset`]], [`--grid-column`, [`--grid-column-start`, `--grid-column-end`]], [`--grid-row`, [`--grid-row-start`, `--grid-row-end`]]]);
function nt(e3, t2) {
  return (tt.get(t2) ?? []).some((t3) => e3 === t3 || e3.startsWith(`${t3}-`));
}
var rt = (_a2 = class {
  constructor(e3 = /* @__PURE__ */ new Map(), t2 = /* @__PURE__ */ new Set([])) {
    __privateAdd(this, _rt_instances);
    __publicField(this, "prefix", null);
    this.values = e3, this.keyframes = t2;
  }
  get size() {
    return this.values.size;
  }
  add(e3, t2, n2 = 0, r2) {
    if (e3.endsWith(`-*`)) {
      if (t2 !== `initial`) throw Error(`Invalid theme value \`${t2}\` for namespace \`${e3}\``);
      e3 === `--*` ? this.values.clear() : this.clearNamespace(e3.slice(0, -2), 0);
    }
    if (n2 & 4) {
      let t3 = this.values.get(e3);
      if (t3 && !(t3.options & 4)) return;
    }
    t2 === `initial` ? this.values.delete(e3) : this.values.set(e3, { value: t2, options: n2, src: r2 });
  }
  keysInNamespaces(e3) {
    let t2 = [];
    for (let n2 of e3) {
      let e4 = `${n2}-`;
      for (let r2 of this.values.keys()) r2.startsWith(e4) && r2.indexOf(`--`, 2) === -1 && (nt(r2, n2) || t2.push(r2.slice(e4.length)));
    }
    return t2;
  }
  get(e3) {
    for (let t2 of e3) {
      let e4 = this.values.get(t2);
      if (e4) return e4.value;
    }
    return null;
  }
  hasDefault(e3) {
    return (this.getOptions(e3) & 4) == 4;
  }
  getOptions(e3) {
    return e3 = et(__privateMethod(this, _rt_instances, e_fn).call(this, e3)), this.values.get(e3)?.options ?? 0;
  }
  entries() {
    return this.prefix ? Array.from(this.values, (e3) => (e3[0] = this.prefixKey(e3[0]), e3)) : this.values.entries();
  }
  prefixKey(e3) {
    return this.prefix ? `--${this.prefix}-${e3.slice(2)}` : e3;
  }
  clearNamespace(e3, t2) {
    let n2 = tt.get(e3) ?? [];
    e: for (let r2 of this.values.keys()) if (r2.startsWith(e3)) {
      if (t2 !== 0 && (this.getOptions(r2) & t2) !== t2) continue;
      for (let e4 of n2) if (r2.startsWith(e4)) continue e;
      this.values.delete(r2);
    }
  }
  markUsedVariable(e3) {
    let t2 = et(__privateMethod(this, _rt_instances, e_fn).call(this, e3)), n2 = this.values.get(t2);
    if (!n2) return false;
    let r2 = n2.options & 16;
    return n2.options |= 16, !r2;
  }
  resolve(e3, t2, n2 = 0) {
    let r2 = __privateMethod(this, _rt_instances, t_fn).call(this, e3, t2);
    if (!r2) return null;
    let i2 = this.values.get(r2);
    return (n2 | i2.options) & 1 ? i2.value : __privateMethod(this, _rt_instances, n_fn).call(this, r2);
  }
  resolveValue(e3, t2) {
    let n2 = __privateMethod(this, _rt_instances, t_fn).call(this, e3, t2);
    return n2 ? this.values.get(n2).value : null;
  }
  resolveWith(e3, t2, n2 = []) {
    let r2 = __privateMethod(this, _rt_instances, t_fn).call(this, e3, t2);
    if (!r2) return null;
    let i2 = {};
    for (let e4 of n2) {
      let t3 = `${r2}${e4}`, n3 = this.values.get(t3);
      n3 && (n3.options & 1 ? i2[e4] = n3.value : i2[e4] = __privateMethod(this, _rt_instances, n_fn).call(this, t3));
    }
    let a2 = this.values.get(r2);
    return a2.options & 1 ? [a2.value, i2] : [__privateMethod(this, _rt_instances, n_fn).call(this, r2), i2];
  }
  namespace(e3) {
    let t2 = /* @__PURE__ */ new Map(), n2 = `${e3}-`;
    for (let [r2, i2] of this.values) r2 === e3 ? t2.set(null, i2.value) : r2.startsWith(`${n2}-`) ? t2.set(r2.slice(e3.length), i2.value) : r2.startsWith(n2) && t2.set(r2.slice(n2.length), i2.value);
    return t2;
  }
  addKeyframes(e3) {
    this.keyframes.add(e3);
  }
  getKeyframes() {
    return Array.from(this.keyframes);
  }
}, _rt_instances = new WeakSet(), e_fn = function(e3) {
  return this.prefix ? `--${e3.slice(3 + this.prefix.length)}` : e3;
}, t_fn = function(e3, t2) {
  for (let n2 of t2) {
    let t3 = e3 === null ? n2 : `${n2}-${e3}`;
    if (!this.values.has(t3)) if (e3 !== null && e3.includes(`.`)) {
      if (t3 = `${n2}-${e3.replaceAll(`.`, `_`)}`, !this.values.has(t3)) continue;
    } else continue;
    if (!nt(t3, n2)) return t3;
  }
  return null;
}, n_fn = function(e3) {
  let t2 = this.values.get(e3);
  if (!t2) return null;
  let n2 = null;
  return t2.options & 2 && (n2 = t2.value), `var(${$e(this.prefixKey(e3))}${n2 ? `, ${n2}` : ``})`;
}, _a2), M = class extends Map {
  constructor(e3) {
    super(), this.factory = e3;
  }
  get(e3) {
    let t2 = super.get(e3);
    return t2 === void 0 && (t2 = this.factory(e3, this), this.set(e3, t2)), t2;
  }
};
function N(e3) {
  return { kind: `word`, value: e3 };
}
function it(e3, t2) {
  return { kind: `function`, value: e3, nodes: t2 };
}
function at(e3) {
  return { kind: `separator`, value: e3 };
}
function P(e3) {
  let t2 = ``;
  for (let n2 of e3) switch (n2.kind) {
    case `word`:
    case `separator`:
      t2 += n2.value;
      break;
    case `function`:
      t2 += n2.value + `(` + P(n2.nodes) + `)`;
  }
  return t2;
}
var ot = 92, st = 41, ct = 58, lt = 44, ut = 34, dt = 61, ft = 62, pt = 60, mt = 10, ht = 40, gt = 39, _t = 47, vt = 32, yt = 9;
function F(e3) {
  e3 = e3.replaceAll(`\r
`, `
`);
  let t2 = [], n2 = [], r2 = null, i2 = ``, a2;
  for (let o2 = 0; o2 < e3.length; o2++) {
    let s2 = e3.charCodeAt(o2);
    switch (s2) {
      case ot:
        i2 += e3[o2] + e3[o2 + 1], o2++;
        break;
      case _t: {
        if (i2.length > 0) {
          let e4 = N(i2);
          r2 ? r2.nodes.push(e4) : t2.push(e4), i2 = ``;
        }
        let n3 = N(e3[o2]);
        r2 ? r2.nodes.push(n3) : t2.push(n3);
        break;
      }
      case ct:
      case lt:
      case dt:
      case ft:
      case pt:
      case mt:
      case vt:
      case yt: {
        if (i2.length > 0) {
          let e4 = N(i2);
          r2 ? r2.nodes.push(e4) : t2.push(e4), i2 = ``;
        }
        let n3 = o2, s3 = o2 + 1;
        for (; s3 < e3.length && (a2 = e3.charCodeAt(s3), !(a2 !== ct && a2 !== lt && a2 !== dt && a2 !== ft && a2 !== pt && a2 !== mt && a2 !== vt && a2 !== yt)); s3++) ;
        o2 = s3 - 1;
        let c2 = at(e3.slice(n3, s3));
        r2 ? r2.nodes.push(c2) : t2.push(c2);
        break;
      }
      case gt:
      case ut: {
        let t3 = o2;
        for (let t4 = o2 + 1; t4 < e3.length; t4++) if (a2 = e3.charCodeAt(t4), a2 === ot) t4 += 1;
        else if (a2 === s2) {
          o2 = t4;
          break;
        }
        i2 += e3.slice(t3, o2 + 1);
        break;
      }
      case ht: {
        let e4 = it(i2, []);
        i2 = ``, r2 ? r2.nodes.push(e4) : t2.push(e4), n2.push(e4), r2 = e4;
        break;
      }
      case st: {
        let e4 = n2.pop();
        if (i2.length > 0) {
          let t3 = N(i2);
          e4?.nodes.push(t3), i2 = ``;
        }
        r2 = n2.length > 0 ? n2[n2.length - 1] : null;
        break;
      }
      default:
        i2 += String.fromCharCode(s2);
    }
  }
  return i2.length > 0 && t2.push(N(i2)), t2;
}
var bt = ((e3) => (e3[e3.Continue = 0] = `Continue`, e3[e3.Skip = 1] = `Skip`, e3[e3.Stop = 2] = `Stop`, e3[e3.Replace = 3] = `Replace`, e3[e3.ReplaceSkip = 4] = `ReplaceSkip`, e3[e3.ReplaceStop = 5] = `ReplaceStop`, e3))(bt || {}), I = { Continue: { kind: 0 }, Skip: { kind: 1 }, Stop: { kind: 2 }, Replace: (e3) => ({ kind: 3, nodes: Array.isArray(e3) ? e3 : [e3] }), ReplaceSkip: (e3) => ({ kind: 4, nodes: Array.isArray(e3) ? e3 : [e3] }), ReplaceStop: (e3) => ({ kind: 5, nodes: Array.isArray(e3) ? e3 : [e3] }) };
function L(e3, t2) {
  typeof t2 == `function` ? xt(e3, t2) : xt(e3, t2.enter, t2.exit);
}
function xt(e3, t2 = () => I.Continue, n2 = () => I.Continue) {
  let r2 = { value: [e3, 0, null], prev: null }, i2 = { parent: null, depth: 0, path() {
    let e4 = [], t3 = r2;
    for (; t3; ) {
      let n3 = t3.value[2];
      n3 && e4.push(n3), t3 = t3.prev;
    }
    return e4.reverse(), e4;
  } };
  for (; r2 !== null; ) {
    let e4 = r2.value, a2 = e4[0], o2 = e4[1], s2 = e4[2];
    if (o2 >= a2.length) {
      r2 = r2.prev, --i2.depth;
      continue;
    }
    if (i2.parent = s2, o2 >= 0) {
      let n3 = a2[o2], s3 = t2(n3, i2) ?? I.Continue;
      switch (s3.kind) {
        case 0:
          n3.nodes && n3.nodes.length > 0 && (i2.depth += 1, r2 = { value: [n3.nodes, 0, n3], prev: r2 }), e4[1] = ~o2;
          continue;
        case 2:
          return;
        case 1:
          e4[1] = ~o2;
          continue;
        case 3:
          a2.splice(o2, 1, ...s3.nodes);
          continue;
        case 5:
          a2.splice(o2, 1, ...s3.nodes);
          return;
        case 4:
          a2.splice(o2, 1, ...s3.nodes), e4[1] += s3.nodes.length;
          continue;
        default:
          throw Error(`Invalid \`WalkAction.${bt[s3.kind] ?? `Unknown(${s3.kind})`}\` in enter.`);
      }
    }
    let c2 = ~o2, l2 = a2[c2], u2 = n2(l2, i2) ?? I.Continue;
    switch (u2.kind) {
      case 0:
        e4[1] = c2 + 1;
        continue;
      case 2:
        return;
      case 3:
        a2.splice(c2, 1, ...u2.nodes), e4[1] = c2 + u2.nodes.length;
        continue;
      case 5:
        a2.splice(c2, 1, ...u2.nodes);
        return;
      case 4:
        a2.splice(c2, 1, ...u2.nodes), e4[1] = c2 + u2.nodes.length;
        continue;
      default:
        throw Error(`Invalid \`WalkAction.${bt[u2.kind] ?? `Unknown(${u2.kind})`}\` in exit.`);
    }
  }
}
function St(e3) {
  let t2 = [];
  return L(F(e3), (e4) => {
    if (!(e4.kind !== `function` || e4.value !== `var`)) return L(e4.nodes, (e5) => {
      e5.kind !== `word` || e5.value[0] !== `-` || e5.value[1] !== `-` || t2.push(e5.value);
    }), I.Skip;
  }), t2;
}
var Ct = 64;
function R(e3, t2 = []) {
  return { kind: `rule`, selector: e3, nodes: t2 };
}
function z(e3, t2 = ``, n2 = []) {
  return { kind: `at-rule`, name: e3, params: t2, nodes: n2 };
}
function B(e3, t2 = []) {
  return e3.charCodeAt(0) === Ct ? Xe(e3, t2) : R(e3, t2);
}
function V(e3, t2, n2 = false) {
  return { kind: `declaration`, property: e3, value: t2, important: n2 };
}
function wt(e3) {
  return { kind: `comment`, value: e3 };
}
function Tt(e3, t2) {
  return { kind: `context`, context: e3, nodes: t2 };
}
function H(e3) {
  return { kind: `at-root`, nodes: e3 };
}
function U(e3) {
  switch (e3.kind) {
    case `rule`:
      return { kind: e3.kind, selector: e3.selector, nodes: e3.nodes.map(U), src: e3.src, dst: e3.dst };
    case `at-rule`:
      return { kind: e3.kind, name: e3.name, params: e3.params, nodes: e3.nodes.map(U), src: e3.src, dst: e3.dst };
    case `at-root`:
      return { kind: e3.kind, nodes: e3.nodes.map(U), src: e3.src, dst: e3.dst };
    case `context`:
      return { kind: e3.kind, context: { ...e3.context }, nodes: e3.nodes.map(U), src: e3.src, dst: e3.dst };
    case `declaration`:
      return { kind: e3.kind, property: e3.property, value: e3.value, important: e3.important, src: e3.src, dst: e3.dst };
    case `comment`:
      return { kind: e3.kind, value: e3.value, src: e3.src, dst: e3.dst };
    default:
      throw Error(`Unknown node kind: ${e3.kind}`);
  }
}
function Et(e3) {
  return { depth: e3.depth, get context() {
    let t2 = {};
    for (let n2 of e3.path()) n2.kind === `context` && Object.assign(t2, n2.context);
    return Object.defineProperty(this, `context`, { value: t2 }), t2;
  }, get parent() {
    let e4 = this.path().pop() ?? null;
    return Object.defineProperty(this, `parent`, { value: e4 }), e4;
  }, path() {
    return e3.path().filter((e4) => e4.kind !== `context`);
  } };
}
function Dt(e3, t2, n2 = 3) {
  let r2 = [], i2 = /* @__PURE__ */ new Set(), a2 = new M(() => /* @__PURE__ */ new Set()), o2 = new M(() => /* @__PURE__ */ new Set()), s2 = /* @__PURE__ */ new Set(), c2 = /* @__PURE__ */ new Set(), l2 = [], u2 = [], d2 = new M(() => /* @__PURE__ */ new Set());
  function f2(e4, p3, m2 = {}, h2 = 0) {
    if (e4.kind === `declaration`) {
      if (e4.property === `--tw-sort` || e4.value === void 0 || e4.value === null) return;
      if (m2.theme && e4.property[0] === `-` && e4.property[1] === `-`) {
        if (e4.value === `initial`) {
          e4.value = void 0;
          return;
        }
        m2.keyframes || a2.get(p3).add(e4);
      }
      if (e4.value.includes(`var(`)) if (m2.theme && e4.property[0] === `-` && e4.property[1] === `-`) for (let t3 of St(e4.value)) d2.get(t3).add(e4.property);
      else t2.trackUsedVariables(e4.value);
      if (e4.property === `animation`) for (let t3 of At(e4.value)) c2.add(t3);
      n2 & 2 && e4.value.includes(`color-mix(`) && !m2.supportsColorMix && !m2.keyframes && o2.get(p3).add(e4), p3.push(e4);
    } else if (e4.kind === `rule`) {
      let t3 = [];
      for (let n4 of e4.nodes) f2(n4, t3, m2, h2 + 1);
      let n3 = {}, r3 = /* @__PURE__ */ new Set();
      for (let e5 of t3) {
        if (e5.kind !== `declaration`) continue;
        let t4 = `${e5.property}:${e5.value}:${e5.important}`;
        n3[t4] ?? (n3[t4] = []), n3[t4].push(e5);
      }
      for (let e5 in n3) for (let t4 = 0; t4 < n3[e5].length - 1; ++t4) r3.add(n3[e5][t4]);
      if (r3.size > 0 && (t3 = t3.filter((e5) => !r3.has(e5))), t3.length === 0) return;
      e4.selector === `&` ? p3.push(...t3) : p3.push({ ...e4, nodes: t3 });
    } else if (e4.kind === `at-rule` && e4.name === `@property` && h2 === 0) {
      if (i2.has(e4.params)) return;
      if (n2 & 1) {
        let t4 = e4.params, n3 = null, r3 = false;
        for (let t5 of e4.nodes) t5.kind === `declaration` && (t5.property === `initial-value` ? n3 = t5.value : t5.property === `inherits` && (r3 = t5.value === `true`));
        let i3 = V(t4, n3 ?? `initial`);
        i3.src = e4.src, r3 ? l2.push(i3) : u2.push(i3);
      }
      i2.add(e4.params);
      let t3 = { ...e4, nodes: [] };
      for (let n3 of e4.nodes) f2(n3, t3.nodes, m2, h2 + 1);
      p3.push(t3);
    } else if (e4.kind === `at-rule`) {
      e4.name === `@keyframes` ? m2 = { ...m2, keyframes: true } : e4.name === `@supports` && e4.params.includes(`color-mix(`) && (m2 = { ...m2, supportsColorMix: true });
      let t3 = { ...e4, nodes: [] };
      for (let n3 of e4.nodes) f2(n3, t3.nodes, m2, h2 + 1);
      e4.name === `@keyframes` && m2.theme && s2.add(t3), (t3.nodes.length > 0 || t3.name === `@layer` || t3.name === `@charset` || t3.name === `@custom-media` || t3.name === `@namespace` || t3.name === `@import`) && p3.push(t3);
    } else if (e4.kind === `at-root`) for (let t3 of e4.nodes) {
      let e5 = [];
      f2(t3, e5, m2, 0);
      for (let t4 of e5) r2.push(t4);
    }
    else if (e4.kind === `context`) {
      if (e4.context.reference) return;
      for (let t3 of e4.nodes) f2(t3, p3, { ...m2, ...e4.context }, h2);
    } else e4.kind === `comment` && p3.push(e4);
  }
  let p2 = [];
  for (let t3 of e3) f2(t3, p2, {}, 0);
  e: for (let [e4, n3] of a2) for (let r3 of n3) {
    if (kt(r3.property, t2.theme, d2)) {
      if (r3.property.startsWith(t2.theme.prefixKey(`--animate-`))) for (let e5 of At(r3.value)) c2.add(e5);
      continue;
    }
    let n4 = e4.indexOf(r3);
    if (e4.splice(n4, 1), e4.length === 0) {
      let t3 = Ot(p2, (t4) => t4.kind === `rule` && t4.nodes === e4);
      if (!t3 || t3.length === 0) continue e;
      t3.unshift({ kind: `at-root`, nodes: p2 });
      do {
        let e5 = t3.pop();
        if (!e5) break;
        let n5 = t3[t3.length - 1];
        if (!n5 || n5.kind !== `at-root` && n5.kind !== `at-rule`) break;
        let r4 = n5.nodes.indexOf(e5);
        if (r4 === -1) break;
        n5.nodes.splice(r4, 1);
      } while (true);
      continue e;
    }
  }
  for (let e4 of s2) if (!c2.has(e4.params)) {
    let t3 = r2.indexOf(e4);
    r2.splice(t3, 1);
  }
  if (p2 = p2.concat(r2), n2 & 2) for (let [e4, n3] of o2) for (let r3 of n3) {
    let n4 = e4.indexOf(r3);
    if (n4 === -1 || r3.value == null) continue;
    let i3 = F(r3.value), a3 = false;
    if (L(i3, (e5) => {
      if (e5.kind !== `function` || e5.value !== `color-mix`) return;
      let n5 = false, r4 = false;
      if (L(e5.nodes, (e6) => {
        if (e6.kind == `word` && e6.value.toLowerCase() === `currentcolor`) {
          r4 = true, a3 = true;
          return;
        }
        let i4 = e6, o4 = null, s4 = /* @__PURE__ */ new Set();
        do {
          if (i4.kind !== `function` || i4.value !== `var`) return;
          let e7 = i4.nodes[0];
          if (!e7 || e7.kind !== `word`) return;
          let c3 = e7.value;
          if (s4.has(c3)) {
            n5 = true;
            return;
          }
          if (s4.add(c3), a3 = true, o4 = t2.theme.resolveValue(null, [e7.value]), !o4) {
            n5 = true;
            return;
          }
          if (o4.toLowerCase() === `currentcolor`) {
            r4 = true;
            return;
          }
          i4 = o4.startsWith(`var(`) ? F(o4)[0] : null;
        } while (i4);
        return I.Replace({ kind: `word`, value: o4 });
      }), n5 || r4) {
        let t3 = e5.nodes.findIndex((e6) => e6.kind === `separator` && e6.value.trim().includes(`,`));
        if (t3 === -1) return;
        let n6 = e5.nodes.length > t3 ? e5.nodes[t3 + 1] : null;
        return n6 ? I.Replace(n6) : void 0;
      } else if (a3) {
        let t3 = e5.nodes[2];
        t3.kind === `word` && (t3.value === `oklab` || t3.value === `oklch` || t3.value === `lab` || t3.value === `lch`) && (t3.value = `srgb`);
      }
    }), !a3) continue;
    let o3 = { ...r3, value: P(i3) }, s3 = B(`@supports (color: color-mix(in lab, red, red))`, [r3]);
    s3.src = r3.src, e4.splice(n4, 1, o3, s3);
  }
  if (n2 & 1) {
    let e4 = [];
    if (l2.length > 0) {
      let t3 = B(`:root, :host`, l2);
      t3.src = l2[0].src, e4.push(t3);
    }
    if (u2.length > 0) {
      let t3 = B(`*, ::before, ::after, ::backdrop`, u2);
      t3.src = u2[0].src, e4.push(t3);
    }
    if (e4.length > 0) {
      let t3 = p2.findIndex((e5) => !(e5.kind === `comment` || e5.kind === `at-rule` && (e5.name === `@charset` || e5.name === `@import`))), n3 = z(`@layer`, `properties`, []);
      n3.src = e4[0].src, p2.splice(t3 < 0 ? p2.length : t3, 0, n3);
      let r3 = B(`@layer properties`, [z(`@supports`, `((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b))))`, e4)]);
      r3.src = e4[0].src, r3.nodes[0].src = e4[0].src, p2.push(r3);
    }
  }
  return p2;
}
function W(e3, t2) {
  let n2 = 0, r2 = { file: null, code: `` };
  function i2(e4, a3 = 0) {
    let o2 = ``, s2 = `  `.repeat(a3);
    if (e4.kind === `declaration`) {
      if (o2 += `${s2}${e4.property}: ${e4.value}${e4.important ? ` !important` : ``};
`, t2) {
        n2 += s2.length;
        let t3 = n2;
        n2 += e4.property.length, n2 += 2, n2 += e4.value?.length ?? 0, e4.important && (n2 += 11);
        let i3 = n2;
        n2 += 2, e4.dst = [r2, t3, i3];
      }
    } else if (e4.kind === `rule`) {
      if (o2 += `${s2}${e4.selector} {
`, t2) {
        n2 += s2.length;
        let t3 = n2;
        n2 += e4.selector.length, n2 += 1, e4.dst = [r2, t3, n2], n2 += 2;
      }
      for (let t3 of e4.nodes) o2 += i2(t3, a3 + 1);
      o2 += `${s2}}
`, t2 && (n2 += s2.length, n2 += 2);
    } else if (e4.kind === `at-rule`) {
      if (e4.nodes.length === 0) {
        let i3 = `${s2}${e4.name} ${e4.params};
`;
        if (t2) {
          n2 += s2.length;
          let t3 = n2;
          n2 += e4.name.length, n2 += 1, n2 += e4.params.length;
          let i4 = n2;
          n2 += 2, e4.dst = [r2, t3, i4];
        }
        return i3;
      }
      if (o2 += `${s2}${e4.name}${e4.params ? ` ${e4.params} ` : ` `}{
`, t2) {
        n2 += s2.length;
        let t3 = n2;
        n2 += e4.name.length, e4.params && (n2 += 1, n2 += e4.params.length), n2 += 1, e4.dst = [r2, t3, n2], n2 += 2;
      }
      for (let t3 of e4.nodes) o2 += i2(t3, a3 + 1);
      o2 += `${s2}}
`, t2 && (n2 += s2.length, n2 += 2);
    } else if (e4.kind === `comment`) {
      if (o2 += `${s2}/*${e4.value}*/
`, t2) {
        n2 += s2.length;
        let t3 = n2;
        n2 += 2 + e4.value.length + 2, e4.dst = [r2, t3, n2], n2 += 1;
      }
    } else if (e4.kind === `context` || e4.kind === `at-root`) return ``;
    return o2;
  }
  let a2 = ``;
  for (let t3 of e3) a2 += i2(t3, 0);
  return r2.code = a2, a2;
}
function Ot(e3, t2) {
  let n2 = [];
  return L(e3, (e4, r2) => {
    if (t2(e4)) return n2 = r2.path(), n2.push(e4), I.Stop;
  }), n2;
}
function kt(e3, t2, n2, r2 = /* @__PURE__ */ new Set()) {
  if (r2.has(e3) || (r2.add(e3), t2.getOptions(e3) & 24)) return true;
  {
    let i2 = n2.get(e3) ?? [];
    for (let e4 of i2) if (kt(e4, t2, n2, r2)) return true;
  }
  return false;
}
function At(e3) {
  return e3.split(/[\s,]+/);
}
function jt(e3) {
  if (e3.indexOf(`(`) === -1) return Mt(e3);
  let t2 = F(e3);
  return Nt(t2), e3 = P(t2), e3 = m(e3), e3;
}
function Mt(e3, t2 = false) {
  let n2 = ``;
  for (let r2 = 0; r2 < e3.length; r2++) {
    let i2 = e3[r2];
    i2 === `\\` && e3[r2 + 1] === `_` ? (n2 += `_`, r2 += 1) : i2 === `_` && !t2 ? n2 += ` ` : n2 += i2;
  }
  return n2;
}
function Nt(e3) {
  for (let t2 of e3) switch (t2.kind) {
    case `function`:
      if (t2.value === `url` || t2.value.endsWith(`_url`)) {
        t2.value = Mt(t2.value);
        break;
      }
      if (t2.value === `var` || t2.value.endsWith(`_var`) || t2.value === `theme` || t2.value.endsWith(`_theme`)) {
        t2.value = Mt(t2.value);
        for (let e4 = 0; e4 < t2.nodes.length; e4++) {
          if (e4 == 0 && t2.nodes[e4].kind === `word`) {
            t2.nodes[e4].value = Mt(t2.nodes[e4].value, true);
            continue;
          }
          Nt([t2.nodes[e4]]);
        }
        break;
      }
      t2.value = Mt(t2.value), Nt(t2.nodes);
      break;
    case `separator`:
    case `word`:
      t2.value = Mt(t2.value);
      break;
    default:
      Pt(t2);
  }
}
function Pt(e3) {
  throw Error(`Unexpected value: ${e3}`);
}
var Ft = new Uint8Array(256);
function It(e3) {
  let t2 = 0, n2 = e3.length;
  for (let r2 = 0; r2 < n2; r2++) {
    let i2 = e3.charCodeAt(r2);
    switch (i2) {
      case 92:
        r2 += 1;
        break;
      case 39:
      case 34:
        for (; ++r2 < n2; ) {
          let t3 = e3.charCodeAt(r2);
          if (t3 === 92) {
            r2 += 1;
            continue;
          }
          if (t3 === i2) break;
        }
        break;
      case 40:
        Ft[t2] = 41, t2++;
        break;
      case 91:
        Ft[t2] = 93, t2++;
        break;
      case 123:
        break;
      case 93:
      case 125:
      case 41:
        if (t2 === 0) return false;
        t2 > 0 && i2 === Ft[t2 - 1] && t2--;
        break;
      case 59:
        if (t2 === 0) return false;
        break;
    }
  }
  return true;
}
var Lt = 58, Rt = 45, zt = 97, Bt = 122, Vt = /^[a-zA-Z0-9_.%-]+$/;
function Ht(e3) {
  switch (e3.kind) {
    case `arbitrary`:
      return { kind: e3.kind, property: e3.property, value: e3.value, modifier: e3.modifier ? { kind: e3.modifier.kind, value: e3.modifier.value } : null, variants: e3.variants.map(Ut), important: e3.important, raw: e3.raw };
    case `static`:
      return { kind: e3.kind, root: e3.root, variants: e3.variants.map(Ut), important: e3.important, raw: e3.raw };
    case `functional`:
      return { kind: e3.kind, root: e3.root, value: e3.value ? e3.value.kind === `arbitrary` ? { kind: e3.value.kind, dataType: e3.value.dataType, value: e3.value.value } : { kind: e3.value.kind, value: e3.value.value, fraction: e3.value.fraction } : null, modifier: e3.modifier ? { kind: e3.modifier.kind, value: e3.modifier.value } : null, variants: e3.variants.map(Ut), important: e3.important, raw: e3.raw };
    default:
      throw Error(`Unknown candidate kind`);
  }
}
function Ut(e3) {
  switch (e3.kind) {
    case `arbitrary`:
      return { kind: e3.kind, selector: e3.selector, relative: e3.relative };
    case `static`:
      return { kind: e3.kind, root: e3.root };
    case `functional`:
      return { kind: e3.kind, root: e3.root, value: e3.value ? { kind: e3.value.kind, value: e3.value.value } : null, modifier: e3.modifier ? { kind: e3.modifier.kind, value: e3.modifier.value } : null };
    case `compound`:
      return { kind: e3.kind, root: e3.root, variant: Ut(e3.variant), modifier: e3.modifier ? { kind: e3.modifier.kind, value: e3.modifier.value } : null };
    default:
      throw Error(`Unknown variant kind`);
  }
}
function* Wt(e3, t2) {
  let n2 = g(e3, `:`);
  if (t2.theme.prefix) {
    if (n2.length === 1 || n2[0] !== t2.theme.prefix) return null;
    n2.shift();
  }
  let r2 = n2.pop(), i2 = [];
  for (let e4 = n2.length - 1; e4 >= 0; --e4) {
    let r3 = t2.parseVariant(n2[e4]);
    if (r3 === null) return;
    i2.push(r3);
  }
  let a2 = false;
  r2[r2.length - 1] === `!` ? (a2 = true, r2 = r2.slice(0, -1)) : r2[0] === `!` && (a2 = true, r2 = r2.slice(1)), t2.utilities.has(r2, `static`) && !r2.includes(`[`) && (yield { kind: `static`, root: r2, variants: i2, important: a2, raw: e3 });
  let [o2, s2 = null, c2] = g(r2, `/`);
  if (c2) return;
  let l2 = s2 === null ? null : Gt(s2);
  if (s2 !== null && l2 === null) return;
  if (o2[0] === `[`) {
    if (o2[o2.length - 1] !== `]`) return;
    let t3 = o2.charCodeAt(1);
    if (t3 !== Rt && !(t3 >= zt && t3 <= Bt)) return;
    o2 = o2.slice(1, -1);
    let n3 = o2.indexOf(`:`);
    if (n3 === -1 || n3 === 0 || n3 === o2.length - 1) return;
    let r3 = o2.slice(0, n3), s3 = jt(o2.slice(n3 + 1));
    if (!It(s3)) return;
    yield { kind: `arbitrary`, property: r3, value: s3, modifier: l2, variants: i2, important: a2, raw: e3 };
    return;
  }
  let u2;
  if (o2[o2.length - 1] === `]`) {
    let e4 = o2.indexOf(`-[`);
    if (e4 === -1) return;
    let n3 = o2.slice(0, e4);
    if (!t2.utilities.has(n3, `functional`)) return;
    u2 = [[n3, o2.slice(e4 + 1)]];
  } else if (o2[o2.length - 1] === `)`) {
    let e4 = o2.indexOf(`-(`);
    if (e4 === -1) return;
    let n3 = o2.slice(0, e4);
    if (!t2.utilities.has(n3, `functional`)) return;
    let r3 = o2.slice(e4 + 2, -1), i3 = g(r3, `:`), a3 = null;
    if (i3.length === 2 && (a3 = i3[0], r3 = i3[1]), r3[0] !== `-` || r3[1] !== `-` || !It(r3)) return;
    u2 = [[n3, a3 === null ? `[var(${r3})]` : `[${a3}:var(${r3})]`]];
  } else u2 = qt(o2, (e4) => t2.utilities.has(e4, `functional`));
  for (let [t3, n3] of u2) {
    let r3 = { kind: `functional`, root: t3, modifier: l2, value: null, variants: i2, important: a2, raw: e3 };
    if (n3 === null) {
      yield r3;
      continue;
    }
    {
      let e4 = n3.indexOf(`[`);
      if (e4 !== -1) {
        if (n3[n3.length - 1] !== `]`) return;
        let t4 = jt(n3.slice(e4 + 1, -1));
        if (!It(t4)) continue;
        let i3 = null;
        for (let e5 = 0; e5 < t4.length; e5++) {
          let n4 = t4.charCodeAt(e5);
          if (n4 === Lt) {
            i3 = t4.slice(0, e5), t4 = t4.slice(e5 + 1);
            break;
          }
          if (!(n4 === Rt || n4 >= zt && n4 <= Bt)) break;
        }
        if (t4.length === 0 || t4.trim().length === 0 || i3 === ``) continue;
        r3.value = { kind: `arbitrary`, dataType: i3 || null, value: t4 };
      } else {
        let e5 = s2 === null || r3.modifier?.kind === `arbitrary` ? null : `${n3}/${s2}`;
        if (!Vt.test(n3)) continue;
        r3.value = { kind: `named`, value: n3, fraction: e5 };
      }
    }
    yield r3;
  }
}
function Gt(e3) {
  if (e3[0] === `[` && e3[e3.length - 1] === `]`) {
    let t2 = jt(e3.slice(1, -1));
    return !It(t2) || t2.length === 0 || t2.trim().length === 0 ? null : { kind: `arbitrary`, value: t2 };
  }
  return e3[0] === `(` && e3[e3.length - 1] === `)` ? (e3 = e3.slice(1, -1), e3[0] !== `-` || e3[1] !== `-` || !It(e3) ? null : (e3 = `var(${e3})`, { kind: `arbitrary`, value: jt(e3) })) : Vt.test(e3) ? { kind: `named`, value: e3 } : null;
}
function Kt(e3, t2) {
  if (e3[0] === `[` && e3[e3.length - 1] === `]`) {
    if (e3[1] === `@` && e3.includes(`&`)) return null;
    let t3 = jt(e3.slice(1, -1));
    if (!It(t3) || t3.length === 0 || t3.trim().length === 0) return null;
    let n2 = t3[0] === `>` || t3[0] === `+` || t3[0] === `~`;
    return !n2 && t3[0] !== `@` && !t3.includes(`&`) && (t3 = `&:is(${t3})`), { kind: `arbitrary`, selector: t3, relative: n2 };
  }
  {
    let [n2, r2 = null, i2] = g(e3, `/`);
    if (i2) return null;
    let a2 = qt(n2, (e4) => t2.variants.has(e4));
    for (let [e4, n3] of a2) switch (t2.variants.kind(e4)) {
      case `static`:
        return n3 !== null || r2 !== null ? null : { kind: `static`, root: e4 };
      case `functional`: {
        let t3 = r2 === null ? null : Gt(r2);
        if (r2 !== null && t3 === null) return null;
        if (n3 === null) return { kind: `functional`, root: e4, modifier: t3, value: null };
        if (n3[n3.length - 1] === `]`) {
          if (n3[0] !== `[`) continue;
          let r3 = jt(n3.slice(1, -1));
          return !It(r3) || r3.length === 0 || r3.trim().length === 0 ? null : { kind: `functional`, root: e4, modifier: t3, value: { kind: `arbitrary`, value: r3 } };
        }
        if (n3[n3.length - 1] === `)`) {
          if (n3[0] !== `(`) continue;
          let r3 = jt(n3.slice(1, -1));
          return !It(r3) || r3.length === 0 || r3.trim().length === 0 || r3[0] !== `-` || r3[1] !== `-` ? null : { kind: `functional`, root: e4, modifier: t3, value: { kind: `arbitrary`, value: `var(${r3})` } };
        }
        if (!Vt.test(n3)) continue;
        return { kind: `functional`, root: e4, modifier: t3, value: { kind: `named`, value: n3 } };
      }
      case `compound`: {
        if (n3 === null) return null;
        r2 && (e4 === `not` || e4 === `has` || e4 === `in`) && (n3 = `${n3}/${r2}`, r2 = null);
        let i3 = t2.parseVariant(n3);
        if (i3 === null || !t2.variants.compoundsWith(e4, i3)) return null;
        let a3 = r2 === null ? null : Gt(r2);
        return r2 !== null && a3 === null ? null : { kind: `compound`, root: e4, modifier: a3, variant: i3 };
      }
    }
  }
  return null;
}
function* qt(e3, t2) {
  t2(e3) && (yield [e3, null]);
  let n2 = e3.lastIndexOf(`-`);
  for (; n2 > 0; ) {
    let r2 = e3.slice(0, n2);
    if (t2(r2)) {
      let i2 = [r2, e3.slice(n2 + 1)];
      if (i2[1] === `` || i2[0] === `@` && t2(`@`) && e3[n2] === `-`) break;
      yield i2;
    }
    n2 = e3.lastIndexOf(`-`, n2 - 1);
  }
  e3[0] === `@` && t2(`@`) && (yield [`@`, e3.slice(1)]);
}
function Jt(e3, t2) {
  let n2 = [];
  for (let e4 of t2.variants) n2.unshift(Xt(e4));
  e3.theme.prefix && n2.unshift(e3.theme.prefix);
  let r2 = ``;
  if (t2.kind === `static` && (r2 += t2.root), t2.kind === `functional` && (r2 += t2.root, t2.value)) if (t2.value.kind === `arbitrary`) {
    if (t2.value !== null) {
      let e4 = rn(t2.value.value), n3 = e4 ? t2.value.value.slice(4, -1) : t2.value.value, [i2, a2] = e4 ? [`(`, `)`] : [`[`, `]`];
      t2.value.dataType ? r2 += `-${i2}${t2.value.dataType}:${Qt(n3)}${a2}` : r2 += `-${i2}${Qt(n3)}${a2}`;
    }
  } else t2.value.kind === `named` && (r2 += `-${t2.value.value}`);
  return t2.kind === `arbitrary` && (r2 += `[${t2.property}:${Qt(t2.value)}]`), (t2.kind === `arbitrary` || t2.kind === `functional`) && (r2 += Yt(t2.modifier)), t2.important && (r2 += `!`), n2.push(r2), n2.join(`:`);
}
function Yt(e3) {
  if (e3 === null) return ``;
  let t2 = rn(e3.value), n2 = t2 ? e3.value.slice(4, -1) : e3.value, [r2, i2] = t2 ? [`(`, `)`] : [`[`, `]`];
  return e3.kind === `arbitrary` ? `/${r2}${Qt(n2)}${i2}` : e3.kind === `named` ? `/${e3.value}` : ``;
}
function Xt(e3) {
  if (e3.kind === `static`) return e3.root;
  if (e3.kind === `arbitrary`) return `[${Qt(en(e3.selector))}]`;
  let t2 = ``;
  if (e3.kind === `functional`) {
    t2 += e3.root;
    let n2 = e3.root !== `@`;
    if (e3.value) if (e3.value.kind === `arbitrary`) {
      let r2 = rn(e3.value.value), i2 = r2 ? e3.value.value.slice(4, -1) : e3.value.value, [a2, o2] = r2 ? [`(`, `)`] : [`[`, `]`];
      t2 += `${n2 ? `-` : ``}${a2}${Qt(i2)}${o2}`;
    } else e3.value.kind === `named` && (t2 += `${n2 ? `-` : ``}${e3.value.value}`);
  }
  return e3.kind === `compound` && (t2 += e3.root, t2 += `-`, t2 += Xt(e3.variant)), (e3.kind === `functional` || e3.kind === `compound`) && (t2 += Yt(e3.modifier)), t2;
}
var Zt = new M((e3) => {
  let t2 = F(e3), n2 = /* @__PURE__ */ new Set();
  return L(t2, (e4, r2) => {
    let i2 = r2.parent === null ? t2 : r2.parent.nodes ?? [];
    if (e4.kind === `word` && (e4.value === `+` || e4.value === `-` || e4.value === `*` || e4.value === `/`)) {
      let t3 = i2.indexOf(e4) ?? -1;
      if (t3 === -1) return;
      let r3 = i2[t3 - 1];
      if (r3?.kind !== `separator` || r3.value !== ` `) return;
      let a2 = i2[t3 + 1];
      if (a2?.kind !== `separator` || a2.value !== ` `) return;
      n2.add(r3), n2.add(a2);
    } else e4.kind === `separator` && e4.value.length > 0 && e4.value.trim() === `` ? (i2[0] === e4 || i2[i2.length - 1] === e4) && n2.add(e4) : e4.kind === `separator` && e4.value.trim() === `,` && (e4.value = `,`);
  }), n2.size > 0 && L(t2, (e4) => {
    if (n2.has(e4)) return n2.delete(e4), I.ReplaceSkip([]);
  }), tn(t2), P(t2);
});
function Qt(e3) {
  return Zt.get(e3);
}
var $t = new M((e3) => {
  let t2 = F(e3);
  return t2.length === 3 && t2[0].kind === `word` && t2[0].value === `&` && t2[1].kind === `separator` && t2[1].value === `:` && t2[2].kind === `function` && t2[2].value === `is` ? P(t2[2].nodes) : e3;
});
function en(e3) {
  return $t.get(e3);
}
function tn(e3) {
  for (let t2 of e3) switch (t2.kind) {
    case `function`:
      if (t2.value === `url` || t2.value.endsWith(`_url`)) {
        t2.value = on(t2.value);
        break;
      }
      if (t2.value === `var` || t2.value.endsWith(`_var`) || t2.value === `theme` || t2.value.endsWith(`_theme`)) {
        t2.value = on(t2.value);
        for (let e4 = 0; e4 < t2.nodes.length; e4++) tn([t2.nodes[e4]]);
        break;
      }
      t2.value = on(t2.value), tn(t2.nodes);
      break;
    case `separator`:
      t2.value = on(t2.value);
      break;
    case `word`:
      (t2.value[0] !== `-` || t2.value[1] !== `-`) && (t2.value = on(t2.value));
      break;
    default:
      an(t2);
  }
}
var nn = new M((e3) => {
  let t2 = F(e3);
  return t2.length === 1 && t2[0].kind === `function` && t2[0].value === `var`;
});
function rn(e3) {
  return nn.get(e3);
}
function an(e3) {
  throw Error(`Unexpected value: ${e3}`);
}
function on(e3) {
  return e3.replaceAll(`_`, String.raw`\_`).replaceAll(` `, `_`);
}
function sn(e3, t2, n2) {
  if (e3 === t2) return 0;
  let r2 = e3.indexOf(`(`), i2 = t2.indexOf(`(`), a2 = r2 === -1 ? e3.replace(/[\d.]+/g, ``) : e3.slice(0, r2), o2 = i2 === -1 ? t2.replace(/[\d.]+/g, ``) : t2.slice(0, i2), s2 = (a2 === o2 ? 0 : a2 < o2 ? -1 : 1) || (n2 === `asc` ? parseInt(e3) - parseInt(t2) : parseInt(t2) - parseInt(e3));
  return Number.isNaN(s2) ? e3 < t2 ? -1 : 1 : s2;
}
var cn = /* @__PURE__ */ new Set([`inset`, `inherit`, `initial`, `revert`, `unset`]), ln = /^-?(\d+|\.\d+)(.*?)$/g;
function un(e3, t2) {
  return g(e3, `,`).map((e4) => {
    e4 = e4.trim();
    let n2 = g(e4, ` `).filter((e5) => e5.trim() !== ``), r2 = null, i2 = null, a2 = null;
    for (let e5 of n2) cn.has(e5) || (ln.test(e5) ? (i2 === null ? i2 = e5 : a2 === null && (a2 = e5), ln.lastIndex = 0) : r2 === null && (r2 = e5));
    if (i2 === null || a2 === null) return e4;
    let o2 = t2(r2 ?? `currentcolor`);
    return r2 === null ? `${e4} ${o2}` : e4.replace(r2, o2);
  }).join(`, `);
}
var dn = `0,0.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,11,12,14,16,20,24,28,32,36,40,44,48,52,56,60,64,72,80,96`.split(`,`), fn = class {
  constructor() {
    __publicField(this, "utilities", new M(() => []));
    __publicField(this, "completions", /* @__PURE__ */ new Map());
  }
  static(e3, t2) {
    this.utilities.get(e3).push({ kind: `static`, compileFn: t2 });
  }
  functional(e3, t2, n2) {
    this.utilities.get(e3).push({ kind: `functional`, compileFn: t2, options: n2 });
  }
  has(e3, t2) {
    return this.utilities.has(e3) && this.utilities.get(e3).some((e4) => e4.kind === t2);
  }
  get(e3) {
    return this.utilities.has(e3) ? this.utilities.get(e3) : [];
  }
  getCompletions(e3) {
    return this.has(e3, `static`) ? this.completions.get(e3)?.() ?? [{ supportsNegative: false, values: [], modifiers: [] }] : this.completions.get(e3)?.() ?? [];
  }
  suggest(e3, t2) {
    let n2 = this.completions.get(e3);
    n2 ? this.completions.set(e3, () => [...n2?.(), ...t2?.()]) : this.completions.set(e3, t2);
  }
  keys(e3) {
    let t2 = [];
    for (let [n2, r2] of this.utilities.entries()) for (let i2 of r2) if (i2.kind === e3) {
      t2.push(n2);
      break;
    }
    return t2;
  }
};
function G(e3, t2, n2) {
  return z(`@property`, e3, [V(`syntax`, n2 ? `"${n2}"` : `"*"`), V(`inherits`, `false`), ...t2 ? [V(`initial-value`, t2)] : []]);
}
function K(e3, t2) {
  if (t2 === null) return e3;
  let n2 = Number(t2);
  return Number.isNaN(n2) || (t2 = `${n2 * 100}%`), t2 === `100%` ? e3 : `color-mix(in oklab, ${e3} ${t2}, transparent)`;
}
function pn(e3, t2) {
  let n2 = Number(t2);
  return Number.isNaN(n2) || (t2 = `${n2 * 100}%`), `oklab(from ${e3} l a b / ${t2})`;
}
function q(e3, t2, n2) {
  if (!t2) return e3;
  if (t2.kind === `arbitrary`) return K(e3, t2.value);
  let r2 = n2.resolve(t2.value, [`--opacity`]);
  return r2 ? K(e3, r2) : ve(t2.value) ? K(e3, `${t2.value}%`) : null;
}
function J(e3, t2, n2) {
  let r2 = null;
  switch (e3.value.value) {
    case `inherit`:
      r2 = `inherit`;
      break;
    case `transparent`:
      r2 = `transparent`;
      break;
    case `current`:
      r2 = `currentcolor`;
      break;
    default:
      r2 = t2.resolve(e3.value.value, n2);
      break;
  }
  return r2 ? q(r2, e3.modifier, t2) : null;
}
var mn = /(\d+)_(\d+)/g;
function hn(e3) {
  let t2 = new fn();
  function n2(n3, r3) {
    function* i3(t3) {
      for (let n4 of e3.keysInNamespaces(t3)) yield n4.replace(mn, (e4, t4, n5) => `${t4}.${n5}`);
    }
    let a3 = `1/2.1/3.2/3.1/4.2/4.3/4.1/5.2/5.3/5.4/5.1/6.2/6.3/6.4/6.5/6.1/12.2/12.3/12.4/12.5/12.6/12.7/12.8/12.9/12.10/12.11/12`.split(`.`);
    t2.suggest(n3, () => {
      let e4 = [];
      for (let t3 of r3()) {
        if (typeof t3 == `string`) {
          e4.push({ values: [t3], modifiers: [] });
          continue;
        }
        let n4 = [...t3.values ?? [], ...i3(t3.valueThemeKeys ?? [])], r4 = [...t3.modifiers ?? [], ...i3(t3.modifierThemeKeys ?? [])];
        t3.supportsFractions && n4.push(...a3), t3.hasDefaultValue && n4.unshift(null), e4.push({ supportsNegative: t3.supportsNegative, values: n4, modifiers: r4 });
      }
      return e4;
    });
  }
  function r2(e4, n3) {
    t2.static(e4, () => n3.map((e5) => typeof e5 == `function` ? e5() : V(e5[0], e5[1])));
  }
  function i2(r3, i3) {
    i3.staticValues && (i3.staticValues = Object.assign(/* @__PURE__ */ Object.create(null), i3.staticValues));
    function a3({ negative: t3 }) {
      return (n3) => {
        let r4 = null, a4 = null;
        if (n3.value) if (n3.value.kind === `arbitrary`) {
          if (n3.modifier) return;
          r4 = n3.value.value, a4 = n3.value.dataType;
        } else {
          if (r4 = e3.resolve(n3.value.fraction ?? n3.value.value, i3.themeKeys ?? []), r4 === null && i3.supportsFractions && n3.value.fraction) {
            let [e4, t4] = g(n3.value.fraction, `/`);
            if (!D(e4) || !D(t4)) return;
            r4 = `calc(${e4} / ${t4} * 100%)`;
          }
          if (r4 === null && t3 && i3.handleNegativeBareValue) {
            if (r4 = i3.handleNegativeBareValue(n3.value), !r4?.includes(`/`) && n3.modifier) return;
            if (r4 !== null) return i3.handle(r4, null);
          }
          if (r4 === null && i3.handleBareValue && (r4 = i3.handleBareValue(n3.value), !r4?.includes(`/`) && n3.modifier)) return;
          if (r4 === null && !t3 && i3.staticValues && !n3.modifier) {
            let e4 = i3.staticValues[n3.value.value];
            if (e4) return e4.map(U);
          }
        }
        else {
          if (n3.modifier) return;
          r4 = i3.defaultValue === void 0 ? e3.resolve(null, i3.themeKeys ?? []) : i3.defaultValue;
        }
        if (r4 !== null) return i3.handle(t3 ? `calc(${r4} * -1)` : r4, a4);
      };
    }
    if (i3.supportsNegative && t2.functional(`-${r3}`, a3({ negative: true })), t2.functional(r3, a3({ negative: false })), n2(r3, () => [{ supportsNegative: i3.supportsNegative, valueThemeKeys: i3.themeKeys ?? [], hasDefaultValue: i3.defaultValue !== void 0 && i3.defaultValue !== null, supportsFractions: i3.supportsFractions }]), i3.staticValues && Object.keys(i3.staticValues).length > 0) {
      let e4 = Object.keys(i3.staticValues);
      n2(r3, () => [{ values: e4 }]);
    }
  }
  function a2(r3, i3) {
    t2.functional(r3, (t3) => {
      if (!t3.value) return;
      let n3 = null;
      if (t3.value.kind === `arbitrary` ? (n3 = t3.value.value, n3 = q(n3, t3.modifier, e3)) : n3 = J(t3, e3, i3.themeKeys), n3 !== null) return i3.handle(n3);
    }), n2(r3, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: i3.themeKeys, modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`) }]);
  }
  function o2(r3, a3, o3, { supportsNegative: s3 = false, supportsFractions: c3 = false, staticValues: l3 } = {}) {
    s3 && t2.static(`-${r3}-px`, () => o3(`-1px`)), t2.static(`${r3}-px`, () => o3(`1px`)), i2(r3, { themeKeys: a3, supportsFractions: c3, supportsNegative: s3, defaultValue: null, handleBareValue: ({ value: t3 }) => {
      let n3 = e3.resolve(null, [`--spacing`]);
      return !n3 || !O(t3) ? null : `calc(${n3} * ${t3})`;
    }, handleNegativeBareValue: ({ value: t3 }) => {
      let n3 = e3.resolve(null, [`--spacing`]);
      return !n3 || !O(t3) ? null : `calc(${n3} * -${t3})`;
    }, handle: o3, staticValues: l3 }), n2(r3, () => [{ values: e3.get([`--spacing`]) ? dn : [], supportsNegative: s3, supportsFractions: c3, valueThemeKeys: a3 }]);
  }
  r2(`sr-only`, [[`position`, `absolute`], [`width`, `1px`], [`height`, `1px`], [`padding`, `0`], [`margin`, `-1px`], [`overflow`, `hidden`], [`clip-path`, `inset(50%)`], [`white-space`, `nowrap`], [`border-width`, `0`]]), r2(`not-sr-only`, [[`position`, `static`], [`width`, `auto`], [`height`, `auto`], [`padding`, `0`], [`margin`, `0`], [`overflow`, `visible`], [`clip-path`, `none`], [`white-space`, `normal`]]), r2(`pointer-events-none`, [[`pointer-events`, `none`]]), r2(`pointer-events-auto`, [[`pointer-events`, `auto`]]), r2(`visible`, [[`visibility`, `visible`]]), r2(`invisible`, [[`visibility`, `hidden`]]), r2(`collapse`, [[`visibility`, `collapse`]]), r2(`static`, [[`position`, `static`]]), r2(`fixed`, [[`position`, `fixed`]]), r2(`absolute`, [[`position`, `absolute`]]), r2(`relative`, [[`position`, `relative`]]), r2(`sticky`, [[`position`, `sticky`]]);
  for (let [e4, t3] of [[`inset`, `inset`], [`inset-x`, `inset-inline`], [`inset-y`, `inset-block`], [`inset-s`, `inset-inline-start`], [`inset-e`, `inset-inline-end`], [`inset-bs`, `inset-block-start`], [`inset-be`, `inset-block-end`], [`top`, `top`], [`right`, `right`], [`bottom`, `bottom`], [`left`, `left`]]) r2(`${e4}-auto`, [[t3, `auto`]]), r2(`${e4}-full`, [[t3, `100%`]]), r2(`-${e4}-full`, [[t3, `-100%`]]), o2(e4, [`--inset`, `--spacing`], (e5) => [V(t3, e5)], { supportsNegative: true, supportsFractions: true });
  r2(`isolate`, [[`isolation`, `isolate`]]), r2(`isolation-auto`, [[`isolation`, `auto`]]), i2(`z`, { supportsNegative: true, handleBareValue: ({ value: e4 }) => D(e4) ? e4 : null, themeKeys: [`--z-index`], handle: (e4) => [V(`z-index`, e4)], staticValues: { auto: [V(`z-index`, `auto`)] } }), n2(`z`, () => [{ supportsNegative: true, values: [`0`, `10`, `20`, `30`, `40`, `50`], valueThemeKeys: [`--z-index`] }]), i2(`order`, { supportsNegative: true, handleBareValue: ({ value: e4 }) => D(e4) ? e4 : null, themeKeys: [`--order`], handle: (e4) => [V(`order`, e4)], staticValues: { first: [V(`order`, `-9999`)], last: [V(`order`, `9999`)] } }), n2(`order`, () => [{ supportsNegative: true, values: Array.from({ length: 12 }, (e4, t3) => `${t3 + 1}`), valueThemeKeys: [`--order`] }]), i2(`col`, { supportsNegative: true, handleBareValue: ({ value: e4 }) => D(e4) ? e4 : null, themeKeys: [`--grid-column`], handle: (e4) => [V(`grid-column`, e4)], staticValues: { auto: [V(`grid-column`, `auto`)] } }), i2(`col-span`, { handleBareValue: ({ value: e4 }) => D(e4) ? e4 : null, handle: (e4) => [V(`grid-column`, `span ${e4} / span ${e4}`)], staticValues: { full: [V(`grid-column`, `1 / -1`)] } }), i2(`col-start`, { supportsNegative: true, handleBareValue: ({ value: e4 }) => D(e4) ? e4 : null, themeKeys: [`--grid-column-start`], handle: (e4) => [V(`grid-column-start`, e4)], staticValues: { auto: [V(`grid-column-start`, `auto`)] } }), i2(`col-end`, { supportsNegative: true, handleBareValue: ({ value: e4 }) => D(e4) ? e4 : null, themeKeys: [`--grid-column-end`], handle: (e4) => [V(`grid-column-end`, e4)], staticValues: { auto: [V(`grid-column-end`, `auto`)] } }), n2(`col-span`, () => [{ values: Array.from({ length: 12 }, (e4, t3) => `${t3 + 1}`), valueThemeKeys: [] }]), n2(`col-start`, () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (e4, t3) => `${t3 + 1}`), valueThemeKeys: [`--grid-column-start`] }]), n2(`col-end`, () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (e4, t3) => `${t3 + 1}`), valueThemeKeys: [`--grid-column-end`] }]), i2(`row`, { supportsNegative: true, handleBareValue: ({ value: e4 }) => D(e4) ? e4 : null, themeKeys: [`--grid-row`], handle: (e4) => [V(`grid-row`, e4)], staticValues: { auto: [V(`grid-row`, `auto`)] } }), i2(`row-span`, { themeKeys: [], handleBareValue: ({ value: e4 }) => D(e4) ? e4 : null, handle: (e4) => [V(`grid-row`, `span ${e4} / span ${e4}`)], staticValues: { full: [V(`grid-row`, `1 / -1`)] } }), i2(`row-start`, { supportsNegative: true, handleBareValue: ({ value: e4 }) => D(e4) ? e4 : null, themeKeys: [`--grid-row-start`], handle: (e4) => [V(`grid-row-start`, e4)], staticValues: { auto: [V(`grid-row-start`, `auto`)] } }), i2(`row-end`, { supportsNegative: true, handleBareValue: ({ value: e4 }) => D(e4) ? e4 : null, themeKeys: [`--grid-row-end`], handle: (e4) => [V(`grid-row-end`, e4)], staticValues: { auto: [V(`grid-row-end`, `auto`)] } }), n2(`row-span`, () => [{ values: Array.from({ length: 12 }, (e4, t3) => `${t3 + 1}`), valueThemeKeys: [] }]), n2(`row-start`, () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (e4, t3) => `${t3 + 1}`), valueThemeKeys: [`--grid-row-start`] }]), n2(`row-end`, () => [{ supportsNegative: true, values: Array.from({ length: 13 }, (e4, t3) => `${t3 + 1}`), valueThemeKeys: [`--grid-row-end`] }]), r2(`float-start`, [[`float`, `inline-start`]]), r2(`float-end`, [[`float`, `inline-end`]]), r2(`float-right`, [[`float`, `right`]]), r2(`float-left`, [[`float`, `left`]]), r2(`float-none`, [[`float`, `none`]]), r2(`clear-start`, [[`clear`, `inline-start`]]), r2(`clear-end`, [[`clear`, `inline-end`]]), r2(`clear-right`, [[`clear`, `right`]]), r2(`clear-left`, [[`clear`, `left`]]), r2(`clear-both`, [[`clear`, `both`]]), r2(`clear-none`, [[`clear`, `none`]]);
  for (let [e4, t3] of [[`m`, `margin`], [`mx`, `margin-inline`], [`my`, `margin-block`], [`ms`, `margin-inline-start`], [`me`, `margin-inline-end`], [`mbs`, `margin-block-start`], [`mbe`, `margin-block-end`], [`mt`, `margin-top`], [`mr`, `margin-right`], [`mb`, `margin-bottom`], [`ml`, `margin-left`]]) r2(`${e4}-auto`, [[t3, `auto`]]), o2(e4, [`--margin`, `--spacing`], (e5) => [V(t3, e5)], { supportsNegative: true });
  r2(`box-border`, [[`box-sizing`, `border-box`]]), r2(`box-content`, [[`box-sizing`, `content-box`]]), i2(`line-clamp`, { themeKeys: [`--line-clamp`], handleBareValue: ({ value: e4 }) => D(e4) ? e4 : null, handle: (e4) => [V(`overflow`, `hidden`), V(`display`, `-webkit-box`), V(`-webkit-box-orient`, `vertical`), V(`-webkit-line-clamp`, e4)], staticValues: { none: [V(`overflow`, `visible`), V(`display`, `block`), V(`-webkit-box-orient`, `horizontal`), V(`-webkit-line-clamp`, `unset`)] } }), n2(`line-clamp`, () => [{ values: [`1`, `2`, `3`, `4`, `5`, `6`], valueThemeKeys: [`--line-clamp`] }]), r2(`block`, [[`display`, `block`]]), r2(`inline-block`, [[`display`, `inline-block`]]), r2(`inline`, [[`display`, `inline`]]), r2(`hidden`, [[`display`, `none`]]), r2(`inline-flex`, [[`display`, `inline-flex`]]), r2(`table`, [[`display`, `table`]]), r2(`inline-table`, [[`display`, `inline-table`]]), r2(`table-caption`, [[`display`, `table-caption`]]), r2(`table-cell`, [[`display`, `table-cell`]]), r2(`table-column`, [[`display`, `table-column`]]), r2(`table-column-group`, [[`display`, `table-column-group`]]), r2(`table-footer-group`, [[`display`, `table-footer-group`]]), r2(`table-header-group`, [[`display`, `table-header-group`]]), r2(`table-row-group`, [[`display`, `table-row-group`]]), r2(`table-row`, [[`display`, `table-row`]]), r2(`flow-root`, [[`display`, `flow-root`]]), r2(`flex`, [[`display`, `flex`]]), r2(`grid`, [[`display`, `grid`]]), r2(`inline-grid`, [[`display`, `inline-grid`]]), r2(`contents`, [[`display`, `contents`]]), r2(`list-item`, [[`display`, `list-item`]]), r2(`field-sizing-content`, [[`field-sizing`, `content`]]), r2(`field-sizing-fixed`, [[`field-sizing`, `fixed`]]), i2(`aspect`, { themeKeys: [`--aspect`], handleBareValue: ({ fraction: e4 }) => {
    if (e4 === null) return null;
    let [t3, n3] = g(e4, `/`);
    return !O(t3) || !O(n3) ? null : e4;
  }, handle: (e4) => [V(`aspect-ratio`, e4)], staticValues: { auto: [V(`aspect-ratio`, `auto`)], square: [V(`aspect-ratio`, `1 / 1`)] } });
  for (let [e4, t3] of [[`full`, `100%`], [`svw`, `100svw`], [`lvw`, `100lvw`], [`dvw`, `100dvw`], [`svh`, `100svh`], [`lvh`, `100lvh`], [`dvh`, `100dvh`], [`min`, `min-content`], [`max`, `max-content`], [`fit`, `fit-content`]]) r2(`size-${e4}`, [[`--tw-sort`, `size`], [`width`, t3], [`height`, t3]]), r2(`w-${e4}`, [[`width`, t3]]), r2(`h-${e4}`, [[`height`, t3]]), r2(`min-w-${e4}`, [[`min-width`, t3]]), r2(`min-h-${e4}`, [[`min-height`, t3]]), r2(`max-w-${e4}`, [[`max-width`, t3]]), r2(`max-h-${e4}`, [[`max-height`, t3]]);
  r2(`size-auto`, [[`--tw-sort`, `size`], [`width`, `auto`], [`height`, `auto`]]), r2(`w-auto`, [[`width`, `auto`]]), r2(`h-auto`, [[`height`, `auto`]]), r2(`min-w-auto`, [[`min-width`, `auto`]]), r2(`min-h-auto`, [[`min-height`, `auto`]]), r2(`h-lh`, [[`height`, `1lh`]]), r2(`min-h-lh`, [[`min-height`, `1lh`]]), r2(`max-h-lh`, [[`max-height`, `1lh`]]), r2(`w-screen`, [[`width`, `100vw`]]), r2(`min-w-screen`, [[`min-width`, `100vw`]]), r2(`max-w-screen`, [[`max-width`, `100vw`]]), r2(`h-screen`, [[`height`, `100vh`]]), r2(`min-h-screen`, [[`min-height`, `100vh`]]), r2(`max-h-screen`, [[`max-height`, `100vh`]]), r2(`max-w-none`, [[`max-width`, `none`]]), r2(`max-h-none`, [[`max-height`, `none`]]), o2(`size`, [`--size`, `--spacing`], (e4) => [V(`--tw-sort`, `size`), V(`width`, e4), V(`height`, e4)], { supportsFractions: true });
  for (let [e4, t3, n3] of [[`w`, [`--width`, `--spacing`, `--container`], `width`], [`min-w`, [`--min-width`, `--spacing`, `--container`], `min-width`], [`max-w`, [`--max-width`, `--spacing`, `--container`], `max-width`], [`h`, [`--height`, `--spacing`], `height`], [`min-h`, [`--min-height`, `--height`, `--spacing`], `min-height`], [`max-h`, [`--max-height`, `--height`, `--spacing`], `max-height`]]) o2(e4, t3, (e5) => [V(n3, e5)], { supportsFractions: true });
  for (let [e4, t3] of [[`full`, `100%`], [`min`, `min-content`], [`max`, `max-content`], [`fit`, `fit-content`]]) r2(`inline-${e4}`, [[`inline-size`, t3]]), r2(`block-${e4}`, [[`block-size`, t3]]), r2(`min-inline-${e4}`, [[`min-inline-size`, t3]]), r2(`min-block-${e4}`, [[`min-block-size`, t3]]), r2(`max-inline-${e4}`, [[`max-inline-size`, t3]]), r2(`max-block-${e4}`, [[`max-block-size`, t3]]);
  for (let [e4, t3] of [[`svw`, `100svw`], [`lvw`, `100lvw`], [`dvw`, `100dvw`]]) r2(`inline-${e4}`, [[`inline-size`, t3]]), r2(`min-inline-${e4}`, [[`min-inline-size`, t3]]), r2(`max-inline-${e4}`, [[`max-inline-size`, t3]]);
  for (let [e4, t3] of [[`svh`, `100svh`], [`lvh`, `100lvh`], [`dvh`, `100dvh`]]) r2(`block-${e4}`, [[`block-size`, t3]]), r2(`min-block-${e4}`, [[`min-block-size`, t3]]), r2(`max-block-${e4}`, [[`max-block-size`, t3]]);
  r2(`inline-auto`, [[`inline-size`, `auto`]]), r2(`block-auto`, [[`block-size`, `auto`]]), r2(`min-inline-auto`, [[`min-inline-size`, `auto`]]), r2(`min-block-auto`, [[`min-block-size`, `auto`]]), r2(`block-lh`, [[`block-size`, `1lh`]]), r2(`min-block-lh`, [[`min-block-size`, `1lh`]]), r2(`max-block-lh`, [[`max-block-size`, `1lh`]]), r2(`inline-screen`, [[`inline-size`, `100vw`]]), r2(`min-inline-screen`, [[`min-inline-size`, `100vw`]]), r2(`max-inline-screen`, [[`max-inline-size`, `100vw`]]), r2(`block-screen`, [[`block-size`, `100vh`]]), r2(`min-block-screen`, [[`min-block-size`, `100vh`]]), r2(`max-block-screen`, [[`max-block-size`, `100vh`]]), r2(`max-inline-none`, [[`max-inline-size`, `none`]]), r2(`max-block-none`, [[`max-block-size`, `none`]]);
  for (let [e4, t3, n3] of [[`inline`, [`--spacing`, `--container`], `inline-size`], [`min-inline`, [`--spacing`, `--container`], `min-inline-size`], [`max-inline`, [`--spacing`, `--container`], `max-inline-size`], [`block`, [`--spacing`], `block-size`], [`min-block`, [`--spacing`], `min-block-size`], [`max-block`, [`--spacing`], `max-block-size`]]) o2(e4, t3, (e5) => [V(n3, e5)], { supportsFractions: true });
  t2.static(`container`, () => {
    let t3 = [...e3.namespace(`--breakpoint`).values()];
    t3.sort((e4, t4) => sn(e4, t4, `asc`));
    let n3 = [V(`--tw-sort`, `--tw-container-component`), V(`width`, `100%`)];
    for (let e4 of t3) n3.push(z(`@media`, `(width >= ${e4})`, [V(`max-width`, e4)]));
    return n3;
  }), r2(`flex-auto`, [[`flex`, `auto`]]), r2(`flex-initial`, [[`flex`, `0 auto`]]), r2(`flex-none`, [[`flex`, `none`]]), t2.functional(`flex`, (e4) => {
    if (e4.value) {
      if (e4.value.kind === `arbitrary`) return e4.modifier ? void 0 : [V(`flex`, e4.value.value)];
      if (e4.value.fraction) {
        let [t3, n3] = g(e4.value.fraction, `/`);
        return !D(t3) || !D(n3) ? void 0 : [V(`flex`, `calc(${e4.value.fraction} * 100%)`)];
      }
      if (D(e4.value.value)) return e4.modifier ? void 0 : [V(`flex`, e4.value.value)];
    }
  }), n2(`flex`, () => [{ supportsFractions: true }, { values: Array.from({ length: 12 }, (e4, t3) => `${t3 + 1}`) }]), i2(`shrink`, { defaultValue: `1`, handleBareValue: ({ value: e4 }) => D(e4) ? e4 : null, handle: (e4) => [V(`flex-shrink`, e4)] }), i2(`grow`, { defaultValue: `1`, handleBareValue: ({ value: e4 }) => D(e4) ? e4 : null, handle: (e4) => [V(`flex-grow`, e4)] }), n2(`shrink`, () => [{ values: [`0`], valueThemeKeys: [], hasDefaultValue: true }]), n2(`grow`, () => [{ values: [`0`], valueThemeKeys: [], hasDefaultValue: true }]), r2(`basis-auto`, [[`flex-basis`, `auto`]]), r2(`basis-full`, [[`flex-basis`, `100%`]]), o2(`basis`, [`--flex-basis`, `--spacing`, `--container`], (e4) => [V(`flex-basis`, e4)], { supportsFractions: true }), r2(`table-auto`, [[`table-layout`, `auto`]]), r2(`table-fixed`, [[`table-layout`, `fixed`]]), r2(`caption-top`, [[`caption-side`, `top`]]), r2(`caption-bottom`, [[`caption-side`, `bottom`]]), r2(`border-collapse`, [[`border-collapse`, `collapse`]]), r2(`border-separate`, [[`border-collapse`, `separate`]]);
  let s2 = () => H([G(`--tw-border-spacing-x`, `0`, `<length>`), G(`--tw-border-spacing-y`, `0`, `<length>`)]);
  o2(`border-spacing`, [`--border-spacing`, `--spacing`], (e4) => [s2(), V(`--tw-border-spacing-x`, e4), V(`--tw-border-spacing-y`, e4), V(`border-spacing`, `var(--tw-border-spacing-x) var(--tw-border-spacing-y)`)]), o2(`border-spacing-x`, [`--border-spacing`, `--spacing`], (e4) => [s2(), V(`--tw-border-spacing-x`, e4), V(`border-spacing`, `var(--tw-border-spacing-x) var(--tw-border-spacing-y)`)]), o2(`border-spacing-y`, [`--border-spacing`, `--spacing`], (e4) => [s2(), V(`--tw-border-spacing-y`, e4), V(`border-spacing`, `var(--tw-border-spacing-x) var(--tw-border-spacing-y)`)]), i2(`origin`, { themeKeys: [`--transform-origin`], handle: (e4) => [V(`transform-origin`, e4)], staticValues: { center: [V(`transform-origin`, `center`)], top: [V(`transform-origin`, `top`)], "top-right": [V(`transform-origin`, `100% 0`)], right: [V(`transform-origin`, `100%`)], "bottom-right": [V(`transform-origin`, `100% 100%`)], bottom: [V(`transform-origin`, `bottom`)], "bottom-left": [V(`transform-origin`, `0 100%`)], left: [V(`transform-origin`, `0`)], "top-left": [V(`transform-origin`, `0 0`)] } }), i2(`perspective-origin`, { themeKeys: [`--perspective-origin`], handle: (e4) => [V(`perspective-origin`, e4)], staticValues: { center: [V(`perspective-origin`, `center`)], top: [V(`perspective-origin`, `top`)], "top-right": [V(`perspective-origin`, `100% 0`)], right: [V(`perspective-origin`, `100%`)], "bottom-right": [V(`perspective-origin`, `100% 100%`)], bottom: [V(`perspective-origin`, `bottom`)], "bottom-left": [V(`perspective-origin`, `0 100%`)], left: [V(`perspective-origin`, `0`)], "top-left": [V(`perspective-origin`, `0 0`)] } }), i2(`perspective`, { themeKeys: [`--perspective`], handle: (e4) => [V(`perspective`, e4)], staticValues: { none: [V(`perspective`, `none`)] } });
  let c2 = () => H([G(`--tw-translate-x`, `0`), G(`--tw-translate-y`, `0`), G(`--tw-translate-z`, `0`)]);
  r2(`translate-none`, [[`translate`, `none`]]), r2(`-translate-full`, [c2, [`--tw-translate-x`, `-100%`], [`--tw-translate-y`, `-100%`], [`translate`, `var(--tw-translate-x) var(--tw-translate-y)`]]), r2(`translate-full`, [c2, [`--tw-translate-x`, `100%`], [`--tw-translate-y`, `100%`], [`translate`, `var(--tw-translate-x) var(--tw-translate-y)`]]), o2(`translate`, [`--translate`, `--spacing`], (e4) => [c2(), V(`--tw-translate-x`, e4), V(`--tw-translate-y`, e4), V(`translate`, `var(--tw-translate-x) var(--tw-translate-y)`)], { supportsNegative: true, supportsFractions: true });
  for (let e4 of [`x`, `y`]) r2(`-translate-${e4}-full`, [c2, [`--tw-translate-${e4}`, `-100%`], [`translate`, `var(--tw-translate-x) var(--tw-translate-y)`]]), r2(`translate-${e4}-full`, [c2, [`--tw-translate-${e4}`, `100%`], [`translate`, `var(--tw-translate-x) var(--tw-translate-y)`]]), o2(`translate-${e4}`, [`--translate`, `--spacing`], (t3) => [c2(), V(`--tw-translate-${e4}`, t3), V(`translate`, `var(--tw-translate-x) var(--tw-translate-y)`)], { supportsNegative: true, supportsFractions: true });
  o2(`translate-z`, [`--translate`, `--spacing`], (e4) => [c2(), V(`--tw-translate-z`, e4), V(`translate`, `var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)`)], { supportsNegative: true }), r2(`translate-3d`, [c2, [`translate`, `var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)`]]);
  let l2 = () => H([G(`--tw-scale-x`, `1`), G(`--tw-scale-y`, `1`), G(`--tw-scale-z`, `1`)]);
  r2(`scale-none`, [[`scale`, `none`]]);
  function u2({ negative: t3 }) {
    return (n3) => {
      if (!n3.value || n3.modifier) return;
      let r3;
      return n3.value.kind === `arbitrary` ? (r3 = n3.value.value, r3 = t3 ? `calc(${r3} * -1)` : r3, [V(`scale`, r3)]) : (r3 = e3.resolve(n3.value.value, [`--scale`]), !r3 && D(n3.value.value) && (r3 = `${n3.value.value}%`), r3 ? (r3 = t3 ? `calc(${r3} * -1)` : r3, [l2(), V(`--tw-scale-x`, r3), V(`--tw-scale-y`, r3), V(`--tw-scale-z`, r3), V(`scale`, `var(--tw-scale-x) var(--tw-scale-y)`)]) : void 0);
    };
  }
  t2.functional(`-scale`, u2({ negative: true })), t2.functional(`scale`, u2({ negative: false })), n2(`scale`, () => [{ supportsNegative: true, values: [`0`, `50`, `75`, `90`, `95`, `100`, `105`, `110`, `125`, `150`, `200`], valueThemeKeys: [`--scale`] }]);
  for (let e4 of [`x`, `y`, `z`]) i2(`scale-${e4}`, { supportsNegative: true, themeKeys: [`--scale`], handleBareValue: ({ value: e5 }) => D(e5) ? `${e5}%` : null, handle: (t3) => [l2(), V(`--tw-scale-${e4}`, t3), V(`scale`, `var(--tw-scale-x) var(--tw-scale-y)${e4 === `z` ? ` var(--tw-scale-z)` : ``}`)] }), n2(`scale-${e4}`, () => [{ supportsNegative: true, values: [`0`, `50`, `75`, `90`, `95`, `100`, `105`, `110`, `125`, `150`, `200`], valueThemeKeys: [`--scale`] }]);
  r2(`scale-3d`, [l2, [`scale`, `var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)`]]), r2(`rotate-none`, [[`rotate`, `none`]]);
  function d2({ negative: t3 }) {
    return (n3) => {
      if (!n3.value || n3.modifier) return;
      let r3;
      if (n3.value.kind === `arbitrary`) {
        r3 = n3.value.value;
        let e4 = n3.value.dataType ?? v(r3, [`angle`, `vector`]);
        if (e4 === `vector`) return [V(`rotate`, `${r3} var(--tw-rotate)`)];
        if (e4 !== `angle`) return [V(`rotate`, t3 ? `calc(${r3} * -1)` : r3)];
      } else if (r3 = e3.resolve(n3.value.value, [`--rotate`]), !r3 && D(n3.value.value) && (r3 = `${n3.value.value}deg`), !r3) return;
      return [V(`rotate`, t3 ? `calc(${r3} * -1)` : r3)];
    };
  }
  t2.functional(`-rotate`, d2({ negative: true })), t2.functional(`rotate`, d2({ negative: false })), n2(`rotate`, () => [{ supportsNegative: true, values: [`0`, `1`, `2`, `3`, `6`, `12`, `45`, `90`, `180`], valueThemeKeys: [`--rotate`] }]);
  {
    let e4 = [`var(--tw-rotate-x,)`, `var(--tw-rotate-y,)`, `var(--tw-rotate-z,)`, `var(--tw-skew-x,)`, `var(--tw-skew-y,)`].join(` `), a3 = () => H([G(`--tw-rotate-x`), G(`--tw-rotate-y`), G(`--tw-rotate-z`), G(`--tw-skew-x`), G(`--tw-skew-y`)]);
    for (let t3 of [`x`, `y`, `z`]) i2(`rotate-${t3}`, { supportsNegative: true, themeKeys: [`--rotate`], handleBareValue: ({ value: e5 }) => D(e5) ? `${e5}deg` : null, handle: (n3) => [a3(), V(`--tw-rotate-${t3}`, `rotate${t3.toUpperCase()}(${n3})`), V(`transform`, e4)] }), n2(`rotate-${t3}`, () => [{ supportsNegative: true, values: [`0`, `1`, `2`, `3`, `6`, `12`, `45`, `90`, `180`], valueThemeKeys: [`--rotate`] }]);
    i2(`skew`, { supportsNegative: true, themeKeys: [`--skew`], handleBareValue: ({ value: e5 }) => D(e5) ? `${e5}deg` : null, handle: (t3) => [a3(), V(`--tw-skew-x`, `skewX(${t3})`), V(`--tw-skew-y`, `skewY(${t3})`), V(`transform`, e4)] }), i2(`skew-x`, { supportsNegative: true, themeKeys: [`--skew`], handleBareValue: ({ value: e5 }) => D(e5) ? `${e5}deg` : null, handle: (t3) => [a3(), V(`--tw-skew-x`, `skewX(${t3})`), V(`transform`, e4)] }), i2(`skew-y`, { supportsNegative: true, themeKeys: [`--skew`], handleBareValue: ({ value: e5 }) => D(e5) ? `${e5}deg` : null, handle: (t3) => [a3(), V(`--tw-skew-y`, `skewY(${t3})`), V(`transform`, e4)] }), n2(`skew`, () => [{ supportsNegative: true, values: [`0`, `1`, `2`, `3`, `6`, `12`], valueThemeKeys: [`--skew`] }]), n2(`skew-x`, () => [{ supportsNegative: true, values: [`0`, `1`, `2`, `3`, `6`, `12`], valueThemeKeys: [`--skew`] }]), n2(`skew-y`, () => [{ supportsNegative: true, values: [`0`, `1`, `2`, `3`, `6`, `12`], valueThemeKeys: [`--skew`] }]), t2.functional(`transform`, (t3) => {
      if (t3.modifier) return;
      let n3 = null;
      if (t3.value ? t3.value.kind === `arbitrary` && (n3 = t3.value.value) : n3 = e4, n3 !== null) return [a3(), V(`transform`, n3)];
    }), n2(`transform`, () => [{ hasDefaultValue: true }]), r2(`transform-cpu`, [[`transform`, e4]]), r2(`transform-gpu`, [[`transform`, `translateZ(0) ${e4}`]]), r2(`transform-none`, [[`transform`, `none`]]);
  }
  r2(`transform-flat`, [[`transform-style`, `flat`]]), r2(`transform-3d`, [[`transform-style`, `preserve-3d`]]), r2(`transform-content`, [[`transform-box`, `content-box`]]), r2(`transform-border`, [[`transform-box`, `border-box`]]), r2(`transform-fill`, [[`transform-box`, `fill-box`]]), r2(`transform-stroke`, [[`transform-box`, `stroke-box`]]), r2(`transform-view`, [[`transform-box`, `view-box`]]), r2(`backface-visible`, [[`backface-visibility`, `visible`]]), r2(`backface-hidden`, [[`backface-visibility`, `hidden`]]);
  for (let e4 of `auto.default.pointer.wait.text.move.help.not-allowed.none.context-menu.progress.cell.crosshair.vertical-text.alias.copy.no-drop.grab.grabbing.all-scroll.col-resize.row-resize.n-resize.e-resize.s-resize.w-resize.ne-resize.nw-resize.se-resize.sw-resize.ew-resize.ns-resize.nesw-resize.nwse-resize.zoom-in.zoom-out`.split(`.`)) r2(`cursor-${e4}`, [[`cursor`, e4]]);
  i2(`cursor`, { themeKeys: [`--cursor`], handle: (e4) => [V(`cursor`, e4)] });
  for (let e4 of [`auto`, `none`, `manipulation`]) r2(`touch-${e4}`, [[`touch-action`, e4]]);
  let f2 = () => H([G(`--tw-pan-x`), G(`--tw-pan-y`), G(`--tw-pinch-zoom`)]);
  for (let e4 of [`x`, `left`, `right`]) r2(`touch-pan-${e4}`, [f2, [`--tw-pan-x`, `pan-${e4}`], [`touch-action`, `var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)`]]);
  for (let e4 of [`y`, `up`, `down`]) r2(`touch-pan-${e4}`, [f2, [`--tw-pan-y`, `pan-${e4}`], [`touch-action`, `var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)`]]);
  r2(`touch-pinch-zoom`, [f2, [`--tw-pinch-zoom`, `pinch-zoom`], [`touch-action`, `var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)`]]);
  for (let e4 of [`none`, `text`, `all`, `auto`]) r2(`select-${e4}`, [[`-webkit-user-select`, e4], [`user-select`, e4]]);
  r2(`resize-none`, [[`resize`, `none`]]), r2(`resize-x`, [[`resize`, `horizontal`]]), r2(`resize-y`, [[`resize`, `vertical`]]), r2(`resize`, [[`resize`, `both`]]), r2(`snap-none`, [[`scroll-snap-type`, `none`]]);
  let p2 = () => H([G(`--tw-scroll-snap-strictness`, `proximity`, `*`)]);
  for (let e4 of [`x`, `y`, `both`]) r2(`snap-${e4}`, [p2, [`scroll-snap-type`, `${e4} var(--tw-scroll-snap-strictness)`]]);
  r2(`snap-mandatory`, [p2, [`--tw-scroll-snap-strictness`, `mandatory`]]), r2(`snap-proximity`, [p2, [`--tw-scroll-snap-strictness`, `proximity`]]), r2(`snap-align-none`, [[`scroll-snap-align`, `none`]]), r2(`snap-start`, [[`scroll-snap-align`, `start`]]), r2(`snap-end`, [[`scroll-snap-align`, `end`]]), r2(`snap-center`, [[`scroll-snap-align`, `center`]]), r2(`snap-normal`, [[`scroll-snap-stop`, `normal`]]), r2(`snap-always`, [[`scroll-snap-stop`, `always`]]);
  for (let [e4, t3] of [[`scroll-m`, `scroll-margin`], [`scroll-mx`, `scroll-margin-inline`], [`scroll-my`, `scroll-margin-block`], [`scroll-ms`, `scroll-margin-inline-start`], [`scroll-me`, `scroll-margin-inline-end`], [`scroll-mbs`, `scroll-margin-block-start`], [`scroll-mbe`, `scroll-margin-block-end`], [`scroll-mt`, `scroll-margin-top`], [`scroll-mr`, `scroll-margin-right`], [`scroll-mb`, `scroll-margin-bottom`], [`scroll-ml`, `scroll-margin-left`]]) o2(e4, [`--scroll-margin`, `--spacing`], (e5) => [V(t3, e5)], { supportsNegative: true });
  for (let [e4, t3] of [[`scroll-p`, `scroll-padding`], [`scroll-px`, `scroll-padding-inline`], [`scroll-py`, `scroll-padding-block`], [`scroll-ps`, `scroll-padding-inline-start`], [`scroll-pe`, `scroll-padding-inline-end`], [`scroll-pbs`, `scroll-padding-block-start`], [`scroll-pbe`, `scroll-padding-block-end`], [`scroll-pt`, `scroll-padding-top`], [`scroll-pr`, `scroll-padding-right`], [`scroll-pb`, `scroll-padding-bottom`], [`scroll-pl`, `scroll-padding-left`]]) o2(e4, [`--scroll-padding`, `--spacing`], (e5) => [V(t3, e5)]);
  r2(`list-inside`, [[`list-style-position`, `inside`]]), r2(`list-outside`, [[`list-style-position`, `outside`]]), i2(`list`, { themeKeys: [`--list-style-type`], handle: (e4) => [V(`list-style-type`, e4)], staticValues: { none: [V(`list-style-type`, `none`)], disc: [V(`list-style-type`, `disc`)], decimal: [V(`list-style-type`, `decimal`)] } }), i2(`list-image`, { themeKeys: [`--list-style-image`], handle: (e4) => [V(`list-style-image`, e4)], staticValues: { none: [V(`list-style-image`, `none`)] } }), r2(`appearance-none`, [[`appearance`, `none`]]), r2(`appearance-auto`, [[`appearance`, `auto`]]), r2(`scheme-normal`, [[`color-scheme`, `normal`]]), r2(`scheme-dark`, [[`color-scheme`, `dark`]]), r2(`scheme-light`, [[`color-scheme`, `light`]]), r2(`scheme-light-dark`, [[`color-scheme`, `light dark`]]), r2(`scheme-only-dark`, [[`color-scheme`, `only dark`]]), r2(`scheme-only-light`, [[`color-scheme`, `only light`]]), i2(`columns`, { themeKeys: [`--columns`, `--container`], handleBareValue: ({ value: e4 }) => D(e4) ? e4 : null, handle: (e4) => [V(`columns`, e4)], staticValues: { auto: [V(`columns`, `auto`)] } }), n2(`columns`, () => [{ values: Array.from({ length: 12 }, (e4, t3) => `${t3 + 1}`), valueThemeKeys: [`--columns`, `--container`] }]);
  for (let e4 of [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`]) r2(`break-before-${e4}`, [[`break-before`, e4]]);
  for (let e4 of [`auto`, `avoid`, `avoid-page`, `avoid-column`]) r2(`break-inside-${e4}`, [[`break-inside`, e4]]);
  for (let e4 of [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`]) r2(`break-after-${e4}`, [[`break-after`, e4]]);
  r2(`grid-flow-row`, [[`grid-auto-flow`, `row`]]), r2(`grid-flow-col`, [[`grid-auto-flow`, `column`]]), r2(`grid-flow-dense`, [[`grid-auto-flow`, `dense`]]), r2(`grid-flow-row-dense`, [[`grid-auto-flow`, `row dense`]]), r2(`grid-flow-col-dense`, [[`grid-auto-flow`, `column dense`]]), i2(`auto-cols`, { themeKeys: [`--grid-auto-columns`], handle: (e4) => [V(`grid-auto-columns`, e4)], staticValues: { auto: [V(`grid-auto-columns`, `auto`)], min: [V(`grid-auto-columns`, `min-content`)], max: [V(`grid-auto-columns`, `max-content`)], fr: [V(`grid-auto-columns`, `minmax(0, 1fr)`)] } }), i2(`auto-rows`, { themeKeys: [`--grid-auto-rows`], handle: (e4) => [V(`grid-auto-rows`, e4)], staticValues: { auto: [V(`grid-auto-rows`, `auto`)], min: [V(`grid-auto-rows`, `min-content`)], max: [V(`grid-auto-rows`, `max-content`)], fr: [V(`grid-auto-rows`, `minmax(0, 1fr)`)] } }), i2(`grid-cols`, { themeKeys: [`--grid-template-columns`], handleBareValue: ({ value: e4 }) => _e(e4) ? `repeat(${e4}, minmax(0, 1fr))` : null, handle: (e4) => [V(`grid-template-columns`, e4)], staticValues: { none: [V(`grid-template-columns`, `none`)], subgrid: [V(`grid-template-columns`, `subgrid`)] } }), i2(`grid-rows`, { themeKeys: [`--grid-template-rows`], handleBareValue: ({ value: e4 }) => _e(e4) ? `repeat(${e4}, minmax(0, 1fr))` : null, handle: (e4) => [V(`grid-template-rows`, e4)], staticValues: { none: [V(`grid-template-rows`, `none`)], subgrid: [V(`grid-template-rows`, `subgrid`)] } }), n2(`grid-cols`, () => [{ values: Array.from({ length: 12 }, (e4, t3) => `${t3 + 1}`), valueThemeKeys: [`--grid-template-columns`] }]), n2(`grid-rows`, () => [{ values: Array.from({ length: 12 }, (e4, t3) => `${t3 + 1}`), valueThemeKeys: [`--grid-template-rows`] }]), r2(`flex-row`, [[`flex-direction`, `row`]]), r2(`flex-row-reverse`, [[`flex-direction`, `row-reverse`]]), r2(`flex-col`, [[`flex-direction`, `column`]]), r2(`flex-col-reverse`, [[`flex-direction`, `column-reverse`]]), r2(`flex-wrap`, [[`flex-wrap`, `wrap`]]), r2(`flex-nowrap`, [[`flex-wrap`, `nowrap`]]), r2(`flex-wrap-reverse`, [[`flex-wrap`, `wrap-reverse`]]), r2(`place-content-center`, [[`place-content`, `center`]]), r2(`place-content-start`, [[`place-content`, `start`]]), r2(`place-content-end`, [[`place-content`, `end`]]), r2(`place-content-center-safe`, [[`place-content`, `safe center`]]), r2(`place-content-end-safe`, [[`place-content`, `safe end`]]), r2(`place-content-between`, [[`place-content`, `space-between`]]), r2(`place-content-around`, [[`place-content`, `space-around`]]), r2(`place-content-evenly`, [[`place-content`, `space-evenly`]]), r2(`place-content-baseline`, [[`place-content`, `baseline`]]), r2(`place-content-stretch`, [[`place-content`, `stretch`]]), r2(`place-items-center`, [[`place-items`, `center`]]), r2(`place-items-start`, [[`place-items`, `start`]]), r2(`place-items-end`, [[`place-items`, `end`]]), r2(`place-items-center-safe`, [[`place-items`, `safe center`]]), r2(`place-items-end-safe`, [[`place-items`, `safe end`]]), r2(`place-items-baseline`, [[`place-items`, `baseline`]]), r2(`place-items-stretch`, [[`place-items`, `stretch`]]), r2(`content-normal`, [[`align-content`, `normal`]]), r2(`content-center`, [[`align-content`, `center`]]), r2(`content-start`, [[`align-content`, `flex-start`]]), r2(`content-end`, [[`align-content`, `flex-end`]]), r2(`content-center-safe`, [[`align-content`, `safe center`]]), r2(`content-end-safe`, [[`align-content`, `safe flex-end`]]), r2(`content-between`, [[`align-content`, `space-between`]]), r2(`content-around`, [[`align-content`, `space-around`]]), r2(`content-evenly`, [[`align-content`, `space-evenly`]]), r2(`content-baseline`, [[`align-content`, `baseline`]]), r2(`content-stretch`, [[`align-content`, `stretch`]]), r2(`items-center`, [[`align-items`, `center`]]), r2(`items-start`, [[`align-items`, `flex-start`]]), r2(`items-end`, [[`align-items`, `flex-end`]]), r2(`items-center-safe`, [[`align-items`, `safe center`]]), r2(`items-end-safe`, [[`align-items`, `safe flex-end`]]), r2(`items-baseline`, [[`align-items`, `baseline`]]), r2(`items-baseline-last`, [[`align-items`, `last baseline`]]), r2(`items-stretch`, [[`align-items`, `stretch`]]), r2(`justify-normal`, [[`justify-content`, `normal`]]), r2(`justify-center`, [[`justify-content`, `center`]]), r2(`justify-start`, [[`justify-content`, `flex-start`]]), r2(`justify-end`, [[`justify-content`, `flex-end`]]), r2(`justify-center-safe`, [[`justify-content`, `safe center`]]), r2(`justify-end-safe`, [[`justify-content`, `safe flex-end`]]), r2(`justify-between`, [[`justify-content`, `space-between`]]), r2(`justify-around`, [[`justify-content`, `space-around`]]), r2(`justify-evenly`, [[`justify-content`, `space-evenly`]]), r2(`justify-baseline`, [[`justify-content`, `baseline`]]), r2(`justify-stretch`, [[`justify-content`, `stretch`]]), r2(`justify-items-normal`, [[`justify-items`, `normal`]]), r2(`justify-items-center`, [[`justify-items`, `center`]]), r2(`justify-items-start`, [[`justify-items`, `start`]]), r2(`justify-items-end`, [[`justify-items`, `end`]]), r2(`justify-items-center-safe`, [[`justify-items`, `safe center`]]), r2(`justify-items-end-safe`, [[`justify-items`, `safe end`]]), r2(`justify-items-stretch`, [[`justify-items`, `stretch`]]), o2(`gap`, [`--gap`, `--spacing`], (e4) => [V(`gap`, e4)]), o2(`gap-x`, [`--gap`, `--spacing`], (e4) => [V(`column-gap`, e4)]), o2(`gap-y`, [`--gap`, `--spacing`], (e4) => [V(`row-gap`, e4)]), o2(`space-x`, [`--space`, `--spacing`], (e4) => [H([G(`--tw-space-x-reverse`, `0`)]), R(`:where(& > :not(:last-child))`, [V(`--tw-sort`, `row-gap`), V(`--tw-space-x-reverse`, `0`), V(`margin-inline-start`, `calc(${e4} * var(--tw-space-x-reverse))`), V(`margin-inline-end`, `calc(${e4} * calc(1 - var(--tw-space-x-reverse)))`)])], { supportsNegative: true }), o2(`space-y`, [`--space`, `--spacing`], (e4) => [H([G(`--tw-space-y-reverse`, `0`)]), R(`:where(& > :not(:last-child))`, [V(`--tw-sort`, `column-gap`), V(`--tw-space-y-reverse`, `0`), V(`margin-block-start`, `calc(${e4} * var(--tw-space-y-reverse))`), V(`margin-block-end`, `calc(${e4} * calc(1 - var(--tw-space-y-reverse)))`)])], { supportsNegative: true }), r2(`space-x-reverse`, [() => H([G(`--tw-space-x-reverse`, `0`)]), () => R(`:where(& > :not(:last-child))`, [V(`--tw-sort`, `row-gap`), V(`--tw-space-x-reverse`, `1`)])]), r2(`space-y-reverse`, [() => H([G(`--tw-space-y-reverse`, `0`)]), () => R(`:where(& > :not(:last-child))`, [V(`--tw-sort`, `column-gap`), V(`--tw-space-y-reverse`, `1`)])]), r2(`accent-auto`, [[`accent-color`, `auto`]]), a2(`accent`, { themeKeys: [`--accent-color`, `--color`], handle: (e4) => [V(`accent-color`, e4)] }), a2(`caret`, { themeKeys: [`--caret-color`, `--color`], handle: (e4) => [V(`caret-color`, e4)] }), a2(`divide`, { themeKeys: [`--divide-color`, `--border-color`, `--color`], handle: (e4) => [R(`:where(& > :not(:last-child))`, [V(`--tw-sort`, `divide-color`), V(`border-color`, e4)])] }), r2(`place-self-auto`, [[`place-self`, `auto`]]), r2(`place-self-start`, [[`place-self`, `start`]]), r2(`place-self-end`, [[`place-self`, `end`]]), r2(`place-self-center`, [[`place-self`, `center`]]), r2(`place-self-end-safe`, [[`place-self`, `safe end`]]), r2(`place-self-center-safe`, [[`place-self`, `safe center`]]), r2(`place-self-stretch`, [[`place-self`, `stretch`]]), r2(`self-auto`, [[`align-self`, `auto`]]), r2(`self-start`, [[`align-self`, `flex-start`]]), r2(`self-end`, [[`align-self`, `flex-end`]]), r2(`self-center`, [[`align-self`, `center`]]), r2(`self-end-safe`, [[`align-self`, `safe flex-end`]]), r2(`self-center-safe`, [[`align-self`, `safe center`]]), r2(`self-stretch`, [[`align-self`, `stretch`]]), r2(`self-baseline`, [[`align-self`, `baseline`]]), r2(`self-baseline-last`, [[`align-self`, `last baseline`]]), r2(`justify-self-auto`, [[`justify-self`, `auto`]]), r2(`justify-self-start`, [[`justify-self`, `flex-start`]]), r2(`justify-self-end`, [[`justify-self`, `flex-end`]]), r2(`justify-self-center`, [[`justify-self`, `center`]]), r2(`justify-self-end-safe`, [[`justify-self`, `safe flex-end`]]), r2(`justify-self-center-safe`, [[`justify-self`, `safe center`]]), r2(`justify-self-stretch`, [[`justify-self`, `stretch`]]);
  for (let e4 of [`auto`, `hidden`, `clip`, `visible`, `scroll`]) r2(`overflow-${e4}`, [[`overflow`, e4]]), r2(`overflow-x-${e4}`, [[`overflow-x`, e4]]), r2(`overflow-y-${e4}`, [[`overflow-y`, e4]]);
  for (let e4 of [`auto`, `contain`, `none`]) r2(`overscroll-${e4}`, [[`overscroll-behavior`, e4]]), r2(`overscroll-x-${e4}`, [[`overscroll-behavior-x`, e4]]), r2(`overscroll-y-${e4}`, [[`overscroll-behavior-y`, e4]]);
  r2(`scroll-auto`, [[`scroll-behavior`, `auto`]]), r2(`scroll-smooth`, [[`scroll-behavior`, `smooth`]]), r2(`truncate`, [[`overflow`, `hidden`], [`text-overflow`, `ellipsis`], [`white-space`, `nowrap`]]), r2(`text-ellipsis`, [[`text-overflow`, `ellipsis`]]), r2(`text-clip`, [[`text-overflow`, `clip`]]), r2(`hyphens-none`, [[`-webkit-hyphens`, `none`], [`hyphens`, `none`]]), r2(`hyphens-manual`, [[`-webkit-hyphens`, `manual`], [`hyphens`, `manual`]]), r2(`hyphens-auto`, [[`-webkit-hyphens`, `auto`], [`hyphens`, `auto`]]), r2(`whitespace-normal`, [[`white-space`, `normal`]]), r2(`whitespace-nowrap`, [[`white-space`, `nowrap`]]), r2(`whitespace-pre`, [[`white-space`, `pre`]]), r2(`whitespace-pre-line`, [[`white-space`, `pre-line`]]), r2(`whitespace-pre-wrap`, [[`white-space`, `pre-wrap`]]), r2(`whitespace-break-spaces`, [[`white-space`, `break-spaces`]]), r2(`text-wrap`, [[`text-wrap`, `wrap`]]), r2(`text-nowrap`, [[`text-wrap`, `nowrap`]]), r2(`text-balance`, [[`text-wrap`, `balance`]]), r2(`text-pretty`, [[`text-wrap`, `pretty`]]), r2(`break-normal`, [[`overflow-wrap`, `normal`], [`word-break`, `normal`]]), r2(`break-all`, [[`word-break`, `break-all`]]), r2(`break-keep`, [[`word-break`, `keep-all`]]), r2(`wrap-anywhere`, [[`overflow-wrap`, `anywhere`]]), r2(`wrap-break-word`, [[`overflow-wrap`, `break-word`]]), r2(`wrap-normal`, [[`overflow-wrap`, `normal`]]);
  for (let [e4, t3] of [[`rounded`, [`border-radius`]], [`rounded-s`, [`border-start-start-radius`, `border-end-start-radius`]], [`rounded-e`, [`border-start-end-radius`, `border-end-end-radius`]], [`rounded-t`, [`border-top-left-radius`, `border-top-right-radius`]], [`rounded-r`, [`border-top-right-radius`, `border-bottom-right-radius`]], [`rounded-b`, [`border-bottom-right-radius`, `border-bottom-left-radius`]], [`rounded-l`, [`border-top-left-radius`, `border-bottom-left-radius`]], [`rounded-ss`, [`border-start-start-radius`]], [`rounded-se`, [`border-start-end-radius`]], [`rounded-ee`, [`border-end-end-radius`]], [`rounded-es`, [`border-end-start-radius`]], [`rounded-tl`, [`border-top-left-radius`]], [`rounded-tr`, [`border-top-right-radius`]], [`rounded-br`, [`border-bottom-right-radius`]], [`rounded-bl`, [`border-bottom-left-radius`]]]) i2(e4, { themeKeys: [`--radius`], handle: (e5) => t3.map((t4) => V(t4, e5)), staticValues: { none: t3.map((e5) => V(e5, `0`)), full: t3.map((e5) => V(e5, `calc(infinity * 1px)`)) } });
  r2(`border-solid`, [[`--tw-border-style`, `solid`], [`border-style`, `solid`]]), r2(`border-dashed`, [[`--tw-border-style`, `dashed`], [`border-style`, `dashed`]]), r2(`border-dotted`, [[`--tw-border-style`, `dotted`], [`border-style`, `dotted`]]), r2(`border-double`, [[`--tw-border-style`, `double`], [`border-style`, `double`]]), r2(`border-hidden`, [[`--tw-border-style`, `hidden`], [`border-style`, `hidden`]]), r2(`border-none`, [[`--tw-border-style`, `none`], [`border-style`, `none`]]);
  {
    let a3 = function(r3, i3) {
      t2.functional(r3, (t3) => {
        if (!t3.value) {
          if (t3.modifier) return;
          let n3 = e3.get([`--default-border-width`]) ?? `1px`, r4 = i3.width(n3);
          return r4 ? [o3(), ...r4] : void 0;
        }
        if (t3.value.kind === `arbitrary`) {
          let n3 = t3.value.value;
          switch (t3.value.dataType ?? v(n3, [`color`, `line-width`, `length`])) {
            case `line-width`:
            case `length`: {
              if (t3.modifier) return;
              let e4 = i3.width(n3);
              return e4 ? [o3(), ...e4] : void 0;
            }
            default:
              return n3 = q(n3, t3.modifier, e3), n3 === null ? void 0 : i3.color(n3);
          }
        }
        {
          let n3 = J(t3, e3, [`--border-color`, `--color`]);
          if (n3) return i3.color(n3);
        }
        {
          if (t3.modifier) return;
          let n3 = e3.resolve(t3.value.value, [`--border-width`]);
          if (n3) {
            let e4 = i3.width(n3);
            return e4 ? [o3(), ...e4] : void 0;
          }
          if (D(t3.value.value)) {
            let e4 = i3.width(`${t3.value.value}px`);
            return e4 ? [o3(), ...e4] : void 0;
          }
        }
      }), n2(r3, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--border-color`, `--color`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`), hasDefaultValue: true }, { values: [`0`, `2`, `4`, `8`], valueThemeKeys: [`--border-width`] }]);
    }, o3 = () => H([G(`--tw-border-style`, `solid`)]);
    a3(`border`, { width: (e4) => [V(`border-style`, `var(--tw-border-style)`), V(`border-width`, e4)], color: (e4) => [V(`border-color`, e4)] }), a3(`border-x`, { width: (e4) => [V(`border-inline-style`, `var(--tw-border-style)`), V(`border-inline-width`, e4)], color: (e4) => [V(`border-inline-color`, e4)] }), a3(`border-y`, { width: (e4) => [V(`border-block-style`, `var(--tw-border-style)`), V(`border-block-width`, e4)], color: (e4) => [V(`border-block-color`, e4)] }), a3(`border-s`, { width: (e4) => [V(`border-inline-start-style`, `var(--tw-border-style)`), V(`border-inline-start-width`, e4)], color: (e4) => [V(`border-inline-start-color`, e4)] }), a3(`border-e`, { width: (e4) => [V(`border-inline-end-style`, `var(--tw-border-style)`), V(`border-inline-end-width`, e4)], color: (e4) => [V(`border-inline-end-color`, e4)] }), a3(`border-bs`, { width: (e4) => [V(`border-block-start-style`, `var(--tw-border-style)`), V(`border-block-start-width`, e4)], color: (e4) => [V(`border-block-start-color`, e4)] }), a3(`border-be`, { width: (e4) => [V(`border-block-end-style`, `var(--tw-border-style)`), V(`border-block-end-width`, e4)], color: (e4) => [V(`border-block-end-color`, e4)] }), a3(`border-t`, { width: (e4) => [V(`border-top-style`, `var(--tw-border-style)`), V(`border-top-width`, e4)], color: (e4) => [V(`border-top-color`, e4)] }), a3(`border-r`, { width: (e4) => [V(`border-right-style`, `var(--tw-border-style)`), V(`border-right-width`, e4)], color: (e4) => [V(`border-right-color`, e4)] }), a3(`border-b`, { width: (e4) => [V(`border-bottom-style`, `var(--tw-border-style)`), V(`border-bottom-width`, e4)], color: (e4) => [V(`border-bottom-color`, e4)] }), a3(`border-l`, { width: (e4) => [V(`border-left-style`, `var(--tw-border-style)`), V(`border-left-width`, e4)], color: (e4) => [V(`border-left-color`, e4)] }), i2(`divide-x`, { defaultValue: e3.get([`--default-border-width`]) ?? `1px`, themeKeys: [`--divide-width`, `--border-width`], handleBareValue: ({ value: e4 }) => D(e4) ? `${e4}px` : null, handle: (e4) => [H([G(`--tw-divide-x-reverse`, `0`)]), R(`:where(& > :not(:last-child))`, [V(`--tw-sort`, `divide-x-width`), o3(), V(`--tw-divide-x-reverse`, `0`), V(`border-inline-style`, `var(--tw-border-style)`), V(`border-inline-start-width`, `calc(${e4} * var(--tw-divide-x-reverse))`), V(`border-inline-end-width`, `calc(${e4} * calc(1 - var(--tw-divide-x-reverse)))`)])] }), i2(`divide-y`, { defaultValue: e3.get([`--default-border-width`]) ?? `1px`, themeKeys: [`--divide-width`, `--border-width`], handleBareValue: ({ value: e4 }) => D(e4) ? `${e4}px` : null, handle: (e4) => [H([G(`--tw-divide-y-reverse`, `0`)]), R(`:where(& > :not(:last-child))`, [V(`--tw-sort`, `divide-y-width`), o3(), V(`--tw-divide-y-reverse`, `0`), V(`border-bottom-style`, `var(--tw-border-style)`), V(`border-top-style`, `var(--tw-border-style)`), V(`border-top-width`, `calc(${e4} * var(--tw-divide-y-reverse))`), V(`border-bottom-width`, `calc(${e4} * calc(1 - var(--tw-divide-y-reverse)))`)])] }), n2(`divide-x`, () => [{ values: [`0`, `2`, `4`, `8`], valueThemeKeys: [`--divide-width`, `--border-width`], hasDefaultValue: true }]), n2(`divide-y`, () => [{ values: [`0`, `2`, `4`, `8`], valueThemeKeys: [`--divide-width`, `--border-width`], hasDefaultValue: true }]), r2(`divide-x-reverse`, [() => H([G(`--tw-divide-x-reverse`, `0`)]), () => R(`:where(& > :not(:last-child))`, [V(`--tw-divide-x-reverse`, `1`)])]), r2(`divide-y-reverse`, [() => H([G(`--tw-divide-y-reverse`, `0`)]), () => R(`:where(& > :not(:last-child))`, [V(`--tw-divide-y-reverse`, `1`)])]);
    for (let e4 of [`solid`, `dashed`, `dotted`, `double`, `none`]) r2(`divide-${e4}`, [() => R(`:where(& > :not(:last-child))`, [V(`--tw-sort`, `divide-style`), V(`--tw-border-style`, e4), V(`border-style`, e4)])]);
  }
  r2(`bg-auto`, [[`background-size`, `auto`]]), r2(`bg-cover`, [[`background-size`, `cover`]]), r2(`bg-contain`, [[`background-size`, `contain`]]), i2(`bg-size`, { handle(e4) {
    if (e4) return [V(`background-size`, e4)];
  } }), r2(`bg-fixed`, [[`background-attachment`, `fixed`]]), r2(`bg-local`, [[`background-attachment`, `local`]]), r2(`bg-scroll`, [[`background-attachment`, `scroll`]]), r2(`bg-top`, [[`background-position`, `top`]]), r2(`bg-top-left`, [[`background-position`, `left top`]]), r2(`bg-top-right`, [[`background-position`, `right top`]]), r2(`bg-bottom`, [[`background-position`, `bottom`]]), r2(`bg-bottom-left`, [[`background-position`, `left bottom`]]), r2(`bg-bottom-right`, [[`background-position`, `right bottom`]]), r2(`bg-left`, [[`background-position`, `left`]]), r2(`bg-right`, [[`background-position`, `right`]]), r2(`bg-center`, [[`background-position`, `center`]]), i2(`bg-position`, { handle(e4) {
    if (e4) return [V(`background-position`, e4)];
  } }), r2(`bg-repeat`, [[`background-repeat`, `repeat`]]), r2(`bg-no-repeat`, [[`background-repeat`, `no-repeat`]]), r2(`bg-repeat-x`, [[`background-repeat`, `repeat-x`]]), r2(`bg-repeat-y`, [[`background-repeat`, `repeat-y`]]), r2(`bg-repeat-round`, [[`background-repeat`, `round`]]), r2(`bg-repeat-space`, [[`background-repeat`, `space`]]), r2(`bg-none`, [[`background-image`, `none`]]);
  {
    let e4 = function(e5) {
      let t3 = `in oklab`;
      if (e5?.kind === `named`) switch (e5.value) {
        case `longer`:
        case `shorter`:
        case `increasing`:
        case `decreasing`:
          t3 = `in oklch ${e5.value} hue`;
          break;
        default:
          t3 = `in ${e5.value}`;
      }
      else e5?.kind === `arbitrary` && (t3 = e5.value);
      return t3;
    }, r3 = function({ negative: t3 }) {
      return (n3) => {
        if (!n3.value) return;
        if (n3.value.kind === `arbitrary`) {
          if (n3.modifier) return;
          let e5 = n3.value.value;
          switch (n3.value.dataType ?? v(e5, [`angle`])) {
            case `angle`:
              return e5 = t3 ? `calc(${e5} * -1)` : `${e5}`, [V(`--tw-gradient-position`, e5), V(`background-image`, `linear-gradient(var(--tw-gradient-stops,${e5}))`)];
            default:
              return t3 ? void 0 : [V(`--tw-gradient-position`, e5), V(`background-image`, `linear-gradient(var(--tw-gradient-stops,${e5}))`)];
          }
        }
        let r4 = n3.value.value;
        if (!t3 && o3.has(r4)) r4 = o3.get(r4);
        else if (D(r4)) r4 = t3 ? `calc(${r4}deg * -1)` : `${r4}deg`;
        else return;
        let i4 = e4(n3.modifier);
        return [V(`--tw-gradient-position`, `${r4}`), B(`@supports (background-image: linear-gradient(in lab, red, red))`, [V(`--tw-gradient-position`, `${r4} ${i4}`)]), V(`background-image`, `linear-gradient(var(--tw-gradient-stops))`)];
      };
    }, i3 = function({ negative: t3 }) {
      return (n3) => {
        if (n3.value?.kind === `arbitrary`) {
          if (n3.modifier) return;
          let e5 = n3.value.value;
          return [V(`--tw-gradient-position`, e5), V(`background-image`, `conic-gradient(var(--tw-gradient-stops,${e5}))`)];
        }
        let r4 = e4(n3.modifier);
        if (!n3.value) return [V(`--tw-gradient-position`, r4), V(`background-image`, `conic-gradient(var(--tw-gradient-stops))`)];
        let i4 = n3.value.value;
        if (D(i4)) return i4 = t3 ? `calc(${i4}deg * -1)` : `${i4}deg`, [V(`--tw-gradient-position`, `from ${i4} ${r4}`), V(`background-image`, `conic-gradient(var(--tw-gradient-stops))`)];
      };
    }, a3 = [`oklab`, `oklch`, `srgb`, `hsl`, `longer`, `shorter`, `increasing`, `decreasing`], o3 = /* @__PURE__ */ new Map([[`to-t`, `to top`], [`to-tr`, `to top right`], [`to-r`, `to right`], [`to-br`, `to bottom right`], [`to-b`, `to bottom`], [`to-bl`, `to bottom left`], [`to-l`, `to left`], [`to-tl`, `to top left`]]);
    t2.functional(`-bg-linear`, r3({ negative: true })), t2.functional(`bg-linear`, r3({ negative: false })), n2(`bg-linear`, () => [{ values: [...o3.keys()], modifiers: a3 }, { values: [`0`, `30`, `60`, `90`, `120`, `150`, `180`, `210`, `240`, `270`, `300`, `330`], supportsNegative: true, modifiers: a3 }]), t2.functional(`-bg-conic`, i3({ negative: true })), t2.functional(`bg-conic`, i3({ negative: false })), n2(`bg-conic`, () => [{ hasDefaultValue: true, modifiers: a3 }, { values: [`0`, `30`, `60`, `90`, `120`, `150`, `180`, `210`, `240`, `270`, `300`, `330`], supportsNegative: true, modifiers: a3 }]), t2.functional(`bg-radial`, (t3) => {
      if (!t3.value) return [V(`--tw-gradient-position`, e4(t3.modifier)), V(`background-image`, `radial-gradient(var(--tw-gradient-stops))`)];
      if (t3.value.kind === `arbitrary`) {
        if (t3.modifier) return;
        let e5 = t3.value.value;
        return [V(`--tw-gradient-position`, e5), V(`background-image`, `radial-gradient(var(--tw-gradient-stops,${e5}))`)];
      }
    }), n2(`bg-radial`, () => [{ hasDefaultValue: true, modifiers: a3 }]);
  }
  t2.functional(`bg`, (t3) => {
    if (t3.value) {
      if (t3.value.kind === `arbitrary`) {
        let n3 = t3.value.value;
        switch (t3.value.dataType ?? v(n3, [`image`, `color`, `percentage`, `position`, `bg-size`, `length`, `url`])) {
          case `percentage`:
          case `position`:
            return t3.modifier ? void 0 : [V(`background-position`, n3)];
          case `bg-size`:
          case `length`:
          case `size`:
            return t3.modifier ? void 0 : [V(`background-size`, n3)];
          case `image`:
          case `url`:
            return t3.modifier ? void 0 : [V(`background-image`, n3)];
          default:
            return n3 = q(n3, t3.modifier, e3), n3 === null ? void 0 : [V(`background-color`, n3)];
        }
      }
      {
        let n3 = J(t3, e3, [`--background-color`, `--color`]);
        if (n3) return [V(`background-color`, n3)];
      }
      {
        if (t3.modifier) return;
        let n3 = e3.resolve(t3.value.value, [`--background-image`]);
        if (n3) return [V(`background-image`, n3)];
      }
    }
  }), n2(`bg`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--background-color`, `--color`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`) }, { values: [], valueThemeKeys: [`--background-image`] }]);
  let m2 = () => H([G(`--tw-gradient-position`), G(`--tw-gradient-from`, `#0000`, `<color>`), G(`--tw-gradient-via`, `#0000`, `<color>`), G(`--tw-gradient-to`, `#0000`, `<color>`), G(`--tw-gradient-stops`), G(`--tw-gradient-via-stops`), G(`--tw-gradient-from-position`, `0%`, `<length-percentage>`), G(`--tw-gradient-via-position`, `50%`, `<length-percentage>`), G(`--tw-gradient-to-position`, `100%`, `<length-percentage>`)]);
  function h2(r3, i3) {
    t2.functional(r3, (t3) => {
      if (t3.value) {
        if (t3.value.kind === `arbitrary`) {
          let n3 = t3.value.value;
          switch (t3.value.dataType ?? v(n3, [`color`, `length`, `percentage`])) {
            case `length`:
            case `percentage`:
              return t3.modifier ? void 0 : i3.position(n3);
            default:
              return n3 = q(n3, t3.modifier, e3), n3 === null ? void 0 : i3.color(n3);
          }
        }
        {
          let n3 = J(t3, e3, [`--background-color`, `--color`]);
          if (n3) return i3.color(n3);
        }
        {
          if (t3.modifier) return;
          let n3 = e3.resolve(t3.value.value, [`--gradient-color-stop-positions`]);
          if (n3) return i3.position(n3);
          if (t3.value.value[t3.value.value.length - 1] === `%` && D(t3.value.value.slice(0, -1))) return i3.position(t3.value.value);
        }
      }
    }), n2(r3, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--background-color`, `--color`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`) }, { values: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}%`), valueThemeKeys: [`--gradient-color-stop-positions`] }]);
  }
  h2(`from`, { color: (e4) => [m2(), V(`--tw-sort`, `--tw-gradient-from`), V(`--tw-gradient-from`, e4), V(`--tw-gradient-stops`, `var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))`)], position: (e4) => [m2(), V(`--tw-gradient-from-position`, e4)] }), r2(`via-none`, [[`--tw-gradient-via-stops`, `initial`]]), h2(`via`, { color: (e4) => [m2(), V(`--tw-sort`, `--tw-gradient-via`), V(`--tw-gradient-via`, e4), V(`--tw-gradient-via-stops`, `var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)`), V(`--tw-gradient-stops`, `var(--tw-gradient-via-stops)`)], position: (e4) => [m2(), V(`--tw-gradient-via-position`, e4)] }), h2(`to`, { color: (e4) => [m2(), V(`--tw-sort`, `--tw-gradient-to`), V(`--tw-gradient-to`, e4), V(`--tw-gradient-stops`, `var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))`)], position: (e4) => [m2(), V(`--tw-gradient-to-position`, e4)] }), r2(`mask-none`, [[`mask-image`, `none`]]), t2.functional(`mask`, (e4) => {
    if (!e4.value || e4.modifier || e4.value.kind !== `arbitrary`) return;
    let t3 = e4.value.value;
    switch (e4.value.dataType ?? v(t3, [`image`, `percentage`, `position`, `bg-size`, `length`, `url`])) {
      case `percentage`:
      case `position`:
        return e4.modifier ? void 0 : [V(`mask-position`, t3)];
      case `bg-size`:
      case `length`:
      case `size`:
        return [V(`mask-size`, t3)];
      default:
        return [V(`mask-image`, t3)];
    }
  }), r2(`mask-add`, [[`mask-composite`, `add`]]), r2(`mask-subtract`, [[`mask-composite`, `subtract`]]), r2(`mask-intersect`, [[`mask-composite`, `intersect`]]), r2(`mask-exclude`, [[`mask-composite`, `exclude`]]), r2(`mask-alpha`, [[`mask-mode`, `alpha`]]), r2(`mask-luminance`, [[`mask-mode`, `luminance`]]), r2(`mask-match`, [[`mask-mode`, `match-source`]]), r2(`mask-type-alpha`, [[`mask-type`, `alpha`]]), r2(`mask-type-luminance`, [[`mask-type`, `luminance`]]), r2(`mask-auto`, [[`mask-size`, `auto`]]), r2(`mask-cover`, [[`mask-size`, `cover`]]), r2(`mask-contain`, [[`mask-size`, `contain`]]), i2(`mask-size`, { handle(e4) {
    if (e4) return [V(`mask-size`, e4)];
  } }), r2(`mask-top`, [[`mask-position`, `top`]]), r2(`mask-top-left`, [[`mask-position`, `left top`]]), r2(`mask-top-right`, [[`mask-position`, `right top`]]), r2(`mask-bottom`, [[`mask-position`, `bottom`]]), r2(`mask-bottom-left`, [[`mask-position`, `left bottom`]]), r2(`mask-bottom-right`, [[`mask-position`, `right bottom`]]), r2(`mask-left`, [[`mask-position`, `left`]]), r2(`mask-right`, [[`mask-position`, `right`]]), r2(`mask-center`, [[`mask-position`, `center`]]), i2(`mask-position`, { handle(e4) {
    if (e4) return [V(`mask-position`, e4)];
  } }), r2(`mask-repeat`, [[`mask-repeat`, `repeat`]]), r2(`mask-no-repeat`, [[`mask-repeat`, `no-repeat`]]), r2(`mask-repeat-x`, [[`mask-repeat`, `repeat-x`]]), r2(`mask-repeat-y`, [[`mask-repeat`, `repeat-y`]]), r2(`mask-repeat-round`, [[`mask-repeat`, `round`]]), r2(`mask-repeat-space`, [[`mask-repeat`, `space`]]), r2(`mask-clip-border`, [[`mask-clip`, `border-box`]]), r2(`mask-clip-padding`, [[`mask-clip`, `padding-box`]]), r2(`mask-clip-content`, [[`mask-clip`, `content-box`]]), r2(`mask-clip-fill`, [[`mask-clip`, `fill-box`]]), r2(`mask-clip-stroke`, [[`mask-clip`, `stroke-box`]]), r2(`mask-clip-view`, [[`mask-clip`, `view-box`]]), r2(`mask-no-clip`, [[`mask-clip`, `no-clip`]]), r2(`mask-origin-border`, [[`mask-origin`, `border-box`]]), r2(`mask-origin-padding`, [[`mask-origin`, `padding-box`]]), r2(`mask-origin-content`, [[`mask-origin`, `content-box`]]), r2(`mask-origin-fill`, [[`mask-origin`, `fill-box`]]), r2(`mask-origin-stroke`, [[`mask-origin`, `stroke-box`]]), r2(`mask-origin-view`, [[`mask-origin`, `view-box`]]);
  let _2 = () => H([G(`--tw-mask-linear`, `linear-gradient(#fff, #fff)`), G(`--tw-mask-radial`, `linear-gradient(#fff, #fff)`), G(`--tw-mask-conic`, `linear-gradient(#fff, #fff)`)]);
  function y2(r3, i3) {
    t2.functional(r3, (t3) => {
      if (t3.value) {
        if (t3.value.kind === `arbitrary`) {
          let n3 = t3.value.value;
          switch (t3.value.dataType ?? v(n3, [`length`, `percentage`, `color`])) {
            case `color`:
              return n3 = q(n3, t3.modifier, e3), n3 === null ? void 0 : i3.color(n3);
            case `percentage`:
              return t3.modifier || !D(n3.slice(0, -1)) ? void 0 : i3.position(n3);
            default:
              return t3.modifier ? void 0 : i3.position(n3);
          }
        }
        {
          let n3 = J(t3, e3, [`--background-color`, `--color`]);
          if (n3) return i3.color(n3);
        }
        {
          if (t3.modifier) return;
          let n3 = v(t3.value.value, [`number`, `percentage`]);
          if (!n3) return;
          switch (n3) {
            case `number`: {
              let n4 = e3.resolve(null, [`--spacing`]);
              return !n4 || !O(t3.value.value) ? void 0 : i3.position(`calc(${n4} * ${t3.value.value})`);
            }
            case `percentage`:
              return D(t3.value.value.slice(0, -1)) ? i3.position(t3.value.value) : void 0;
            default:
              return;
          }
        }
      }
    }), n2(r3, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--background-color`, `--color`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`) }, { values: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}%`), valueThemeKeys: [`--gradient-color-stop-positions`] }]), n2(r3, () => [{ values: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}%`) }, { values: e3.get([`--spacing`]) ? dn : [] }, { values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--background-color`, `--color`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`) }]);
  }
  let b2 = () => H([G(`--tw-mask-left`, `linear-gradient(#fff, #fff)`), G(`--tw-mask-right`, `linear-gradient(#fff, #fff)`), G(`--tw-mask-bottom`, `linear-gradient(#fff, #fff)`), G(`--tw-mask-top`, `linear-gradient(#fff, #fff)`)]);
  function x2(e4, t3, n3) {
    y2(e4, { color(e5) {
      let r3 = [_2(), b2(), V(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), V(`mask-composite`, `intersect`), V(`--tw-mask-linear`, `var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)`)];
      for (let i3 of [`top`, `right`, `bottom`, `left`]) n3[i3] && (r3.push(V(`--tw-mask-${i3}`, `linear-gradient(to ${i3}, var(--tw-mask-${i3}-from-color) var(--tw-mask-${i3}-from-position), var(--tw-mask-${i3}-to-color) var(--tw-mask-${i3}-to-position))`)), r3.push(H([G(`--tw-mask-${i3}-from-position`, `0%`), G(`--tw-mask-${i3}-to-position`, `100%`), G(`--tw-mask-${i3}-from-color`, `black`), G(`--tw-mask-${i3}-to-color`, `transparent`)])), r3.push(V(`--tw-mask-${i3}-${t3}-color`, e5)));
      return r3;
    }, position(e5) {
      let r3 = [_2(), b2(), V(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), V(`mask-composite`, `intersect`), V(`--tw-mask-linear`, `var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)`)];
      for (let i3 of [`top`, `right`, `bottom`, `left`]) n3[i3] && (r3.push(V(`--tw-mask-${i3}`, `linear-gradient(to ${i3}, var(--tw-mask-${i3}-from-color) var(--tw-mask-${i3}-from-position), var(--tw-mask-${i3}-to-color) var(--tw-mask-${i3}-to-position))`)), r3.push(H([G(`--tw-mask-${i3}-from-position`, `0%`), G(`--tw-mask-${i3}-to-position`, `100%`), G(`--tw-mask-${i3}-from-color`, `black`), G(`--tw-mask-${i3}-to-color`, `transparent`)])), r3.push(V(`--tw-mask-${i3}-${t3}-position`, e5)));
      return r3;
    } });
  }
  x2(`mask-x-from`, `from`, { top: false, right: true, bottom: false, left: true }), x2(`mask-x-to`, `to`, { top: false, right: true, bottom: false, left: true }), x2(`mask-y-from`, `from`, { top: true, right: false, bottom: true, left: false }), x2(`mask-y-to`, `to`, { top: true, right: false, bottom: true, left: false }), x2(`mask-t-from`, `from`, { top: true, right: false, bottom: false, left: false }), x2(`mask-t-to`, `to`, { top: true, right: false, bottom: false, left: false }), x2(`mask-r-from`, `from`, { top: false, right: true, bottom: false, left: false }), x2(`mask-r-to`, `to`, { top: false, right: true, bottom: false, left: false }), x2(`mask-b-from`, `from`, { top: false, right: false, bottom: true, left: false }), x2(`mask-b-to`, `to`, { top: false, right: false, bottom: true, left: false }), x2(`mask-l-from`, `from`, { top: false, right: false, bottom: false, left: true }), x2(`mask-l-to`, `to`, { top: false, right: false, bottom: false, left: true });
  let S2 = () => H([G(`--tw-mask-linear-position`, `0deg`), G(`--tw-mask-linear-from-position`, `0%`), G(`--tw-mask-linear-to-position`, `100%`), G(`--tw-mask-linear-from-color`, `black`), G(`--tw-mask-linear-to-color`, `transparent`)]);
  i2(`mask-linear`, { defaultValue: null, supportsNegative: true, supportsFractions: false, handleBareValue(e4) {
    return D(e4.value) ? `calc(1deg * ${e4.value})` : null;
  }, handleNegativeBareValue(e4) {
    return D(e4.value) ? `calc(1deg * -${e4.value})` : null;
  }, handle: (e4) => [_2(), S2(), V(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), V(`mask-composite`, `intersect`), V(`--tw-mask-linear`, `linear-gradient(var(--tw-mask-linear-stops, var(--tw-mask-linear-position)))`), V(`--tw-mask-linear-position`, e4)] }), n2(`mask-linear`, () => [{ supportsNegative: true, values: [`0`, `1`, `2`, `3`, `6`, `12`, `45`, `90`, `180`] }]), y2(`mask-linear-from`, { color: (e4) => [_2(), S2(), V(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), V(`mask-composite`, `intersect`), V(`--tw-mask-linear-stops`, `var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)`), V(`--tw-mask-linear`, `linear-gradient(var(--tw-mask-linear-stops))`), V(`--tw-mask-linear-from-color`, e4)], position: (e4) => [_2(), S2(), V(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), V(`mask-composite`, `intersect`), V(`--tw-mask-linear-stops`, `var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)`), V(`--tw-mask-linear`, `linear-gradient(var(--tw-mask-linear-stops))`), V(`--tw-mask-linear-from-position`, e4)] }), y2(`mask-linear-to`, { color: (e4) => [_2(), S2(), V(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), V(`mask-composite`, `intersect`), V(`--tw-mask-linear-stops`, `var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)`), V(`--tw-mask-linear`, `linear-gradient(var(--tw-mask-linear-stops))`), V(`--tw-mask-linear-to-color`, e4)], position: (e4) => [_2(), S2(), V(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), V(`mask-composite`, `intersect`), V(`--tw-mask-linear-stops`, `var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)`), V(`--tw-mask-linear`, `linear-gradient(var(--tw-mask-linear-stops))`), V(`--tw-mask-linear-to-position`, e4)] });
  let C2 = () => H([G(`--tw-mask-radial-from-position`, `0%`), G(`--tw-mask-radial-to-position`, `100%`), G(`--tw-mask-radial-from-color`, `black`), G(`--tw-mask-radial-to-color`, `transparent`), G(`--tw-mask-radial-shape`, `ellipse`), G(`--tw-mask-radial-size`, `farthest-corner`), G(`--tw-mask-radial-position`, `center`)]);
  r2(`mask-circle`, [[`--tw-mask-radial-shape`, `circle`]]), r2(`mask-ellipse`, [[`--tw-mask-radial-shape`, `ellipse`]]), r2(`mask-radial-closest-side`, [[`--tw-mask-radial-size`, `closest-side`]]), r2(`mask-radial-farthest-side`, [[`--tw-mask-radial-size`, `farthest-side`]]), r2(`mask-radial-closest-corner`, [[`--tw-mask-radial-size`, `closest-corner`]]), r2(`mask-radial-farthest-corner`, [[`--tw-mask-radial-size`, `farthest-corner`]]), r2(`mask-radial-at-top`, [[`--tw-mask-radial-position`, `top`]]), r2(`mask-radial-at-top-left`, [[`--tw-mask-radial-position`, `top left`]]), r2(`mask-radial-at-top-right`, [[`--tw-mask-radial-position`, `top right`]]), r2(`mask-radial-at-bottom`, [[`--tw-mask-radial-position`, `bottom`]]), r2(`mask-radial-at-bottom-left`, [[`--tw-mask-radial-position`, `bottom left`]]), r2(`mask-radial-at-bottom-right`, [[`--tw-mask-radial-position`, `bottom right`]]), r2(`mask-radial-at-left`, [[`--tw-mask-radial-position`, `left`]]), r2(`mask-radial-at-right`, [[`--tw-mask-radial-position`, `right`]]), r2(`mask-radial-at-center`, [[`--tw-mask-radial-position`, `center`]]), i2(`mask-radial-at`, { defaultValue: null, supportsNegative: false, supportsFractions: false, handle: (e4) => [V(`--tw-mask-radial-position`, e4)] }), i2(`mask-radial`, { defaultValue: null, supportsNegative: false, supportsFractions: false, handle: (e4) => [_2(), C2(), V(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), V(`mask-composite`, `intersect`), V(`--tw-mask-radial`, `radial-gradient(var(--tw-mask-radial-stops, var(--tw-mask-radial-size)))`), V(`--tw-mask-radial-size`, e4)] }), y2(`mask-radial-from`, { color: (e4) => [_2(), C2(), V(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), V(`mask-composite`, `intersect`), V(`--tw-mask-radial-stops`, `var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)`), V(`--tw-mask-radial`, `radial-gradient(var(--tw-mask-radial-stops))`), V(`--tw-mask-radial-from-color`, e4)], position: (e4) => [_2(), C2(), V(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), V(`mask-composite`, `intersect`), V(`--tw-mask-radial-stops`, `var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)`), V(`--tw-mask-radial`, `radial-gradient(var(--tw-mask-radial-stops))`), V(`--tw-mask-radial-from-position`, e4)] }), y2(`mask-radial-to`, { color: (e4) => [_2(), C2(), V(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), V(`mask-composite`, `intersect`), V(`--tw-mask-radial-stops`, `var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)`), V(`--tw-mask-radial`, `radial-gradient(var(--tw-mask-radial-stops))`), V(`--tw-mask-radial-to-color`, e4)], position: (e4) => [_2(), C2(), V(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), V(`mask-composite`, `intersect`), V(`--tw-mask-radial-stops`, `var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)`), V(`--tw-mask-radial`, `radial-gradient(var(--tw-mask-radial-stops))`), V(`--tw-mask-radial-to-position`, e4)] });
  let ee2 = () => H([G(`--tw-mask-conic-position`, `0deg`), G(`--tw-mask-conic-from-position`, `0%`), G(`--tw-mask-conic-to-position`, `100%`), G(`--tw-mask-conic-from-color`, `black`), G(`--tw-mask-conic-to-color`, `transparent`)]);
  i2(`mask-conic`, { defaultValue: null, supportsNegative: true, supportsFractions: false, handleBareValue(e4) {
    return D(e4.value) ? `calc(1deg * ${e4.value})` : null;
  }, handleNegativeBareValue(e4) {
    return D(e4.value) ? `calc(1deg * -${e4.value})` : null;
  }, handle: (e4) => [_2(), ee2(), V(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), V(`mask-composite`, `intersect`), V(`--tw-mask-conic`, `conic-gradient(var(--tw-mask-conic-stops, var(--tw-mask-conic-position)))`), V(`--tw-mask-conic-position`, e4)] }), n2(`mask-conic`, () => [{ supportsNegative: true, values: [`0`, `1`, `2`, `3`, `6`, `12`, `45`, `90`, `180`] }]), y2(`mask-conic-from`, { color: (e4) => [_2(), ee2(), V(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), V(`mask-composite`, `intersect`), V(`--tw-mask-conic-stops`, `from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)`), V(`--tw-mask-conic`, `conic-gradient(var(--tw-mask-conic-stops))`), V(`--tw-mask-conic-from-color`, e4)], position: (e4) => [_2(), ee2(), V(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), V(`mask-composite`, `intersect`), V(`--tw-mask-conic-stops`, `from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)`), V(`--tw-mask-conic`, `conic-gradient(var(--tw-mask-conic-stops))`), V(`--tw-mask-conic-from-position`, e4)] }), y2(`mask-conic-to`, { color: (e4) => [_2(), ee2(), V(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), V(`mask-composite`, `intersect`), V(`--tw-mask-conic-stops`, `from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)`), V(`--tw-mask-conic`, `conic-gradient(var(--tw-mask-conic-stops))`), V(`--tw-mask-conic-to-color`, e4)], position: (e4) => [_2(), ee2(), V(`mask-image`, `var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)`), V(`mask-composite`, `intersect`), V(`--tw-mask-conic-stops`, `from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)`), V(`--tw-mask-conic`, `conic-gradient(var(--tw-mask-conic-stops))`), V(`--tw-mask-conic-to-position`, e4)] }), r2(`box-decoration-slice`, [[`-webkit-box-decoration-break`, `slice`], [`box-decoration-break`, `slice`]]), r2(`box-decoration-clone`, [[`-webkit-box-decoration-break`, `clone`], [`box-decoration-break`, `clone`]]), r2(`bg-clip-text`, [[`background-clip`, `text`]]), r2(`bg-clip-border`, [[`background-clip`, `border-box`]]), r2(`bg-clip-padding`, [[`background-clip`, `padding-box`]]), r2(`bg-clip-content`, [[`background-clip`, `content-box`]]), r2(`bg-origin-border`, [[`background-origin`, `border-box`]]), r2(`bg-origin-padding`, [[`background-origin`, `padding-box`]]), r2(`bg-origin-content`, [[`background-origin`, `content-box`]]);
  for (let e4 of [`normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`]) r2(`bg-blend-${e4}`, [[`background-blend-mode`, e4]]), r2(`mix-blend-${e4}`, [[`mix-blend-mode`, e4]]);
  r2(`mix-blend-plus-darker`, [[`mix-blend-mode`, `plus-darker`]]), r2(`mix-blend-plus-lighter`, [[`mix-blend-mode`, `plus-lighter`]]), r2(`fill-none`, [[`fill`, `none`]]), t2.functional(`fill`, (t3) => {
    if (!t3.value) return;
    if (t3.value.kind === `arbitrary`) {
      let n4 = q(t3.value.value, t3.modifier, e3);
      return n4 === null ? void 0 : [V(`fill`, n4)];
    }
    let n3 = J(t3, e3, [`--fill`, `--color`]);
    if (n3) return [V(`fill`, n3)];
  }), n2(`fill`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--fill`, `--color`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`) }]), r2(`stroke-none`, [[`stroke`, `none`]]), t2.functional(`stroke`, (t3) => {
    if (t3.value) {
      if (t3.value.kind === `arbitrary`) {
        let n3 = t3.value.value;
        switch (t3.value.dataType ?? v(n3, [`color`, `number`, `length`, `percentage`])) {
          case `number`:
          case `length`:
          case `percentage`:
            return t3.modifier ? void 0 : [V(`stroke-width`, n3)];
          default:
            return n3 = q(t3.value.value, t3.modifier, e3), n3 === null ? void 0 : [V(`stroke`, n3)];
        }
      }
      {
        let n3 = J(t3, e3, [`--stroke`, `--color`]);
        if (n3) return [V(`stroke`, n3)];
      }
      {
        let n3 = e3.resolve(t3.value.value, [`--stroke-width`]);
        if (n3) return [V(`stroke-width`, n3)];
        if (D(t3.value.value)) return [V(`stroke-width`, t3.value.value)];
      }
    }
  }), n2(`stroke`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--stroke`, `--color`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`) }, { values: [`0`, `1`, `2`, `3`], valueThemeKeys: [`--stroke-width`] }]), r2(`object-contain`, [[`object-fit`, `contain`]]), r2(`object-cover`, [[`object-fit`, `cover`]]), r2(`object-fill`, [[`object-fit`, `fill`]]), r2(`object-none`, [[`object-fit`, `none`]]), r2(`object-scale-down`, [[`object-fit`, `scale-down`]]), i2(`object`, { themeKeys: [`--object-position`], handle: (e4) => [V(`object-position`, e4)], staticValues: { top: [V(`object-position`, `top`)], "top-left": [V(`object-position`, `left top`)], "top-right": [V(`object-position`, `right top`)], bottom: [V(`object-position`, `bottom`)], "bottom-left": [V(`object-position`, `left bottom`)], "bottom-right": [V(`object-position`, `right bottom`)], left: [V(`object-position`, `left`)], right: [V(`object-position`, `right`)], center: [V(`object-position`, `center`)] } });
  for (let [e4, t3] of [[`p`, `padding`], [`px`, `padding-inline`], [`py`, `padding-block`], [`ps`, `padding-inline-start`], [`pe`, `padding-inline-end`], [`pbs`, `padding-block-start`], [`pbe`, `padding-block-end`], [`pt`, `padding-top`], [`pr`, `padding-right`], [`pb`, `padding-bottom`], [`pl`, `padding-left`]]) o2(e4, [`--padding`, `--spacing`], (e5) => [V(t3, e5)]);
  r2(`text-left`, [[`text-align`, `left`]]), r2(`text-center`, [[`text-align`, `center`]]), r2(`text-right`, [[`text-align`, `right`]]), r2(`text-justify`, [[`text-align`, `justify`]]), r2(`text-start`, [[`text-align`, `start`]]), r2(`text-end`, [[`text-align`, `end`]]), o2(`indent`, [`--text-indent`, `--spacing`], (e4) => [V(`text-indent`, e4)], { supportsNegative: true }), r2(`align-baseline`, [[`vertical-align`, `baseline`]]), r2(`align-top`, [[`vertical-align`, `top`]]), r2(`align-middle`, [[`vertical-align`, `middle`]]), r2(`align-bottom`, [[`vertical-align`, `bottom`]]), r2(`align-text-top`, [[`vertical-align`, `text-top`]]), r2(`align-text-bottom`, [[`vertical-align`, `text-bottom`]]), r2(`align-sub`, [[`vertical-align`, `sub`]]), r2(`align-super`, [[`vertical-align`, `super`]]), i2(`align`, { themeKeys: [], handle: (e4) => [V(`vertical-align`, e4)] }), t2.functional(`font`, (t3) => {
    if (!(!t3.value || t3.modifier)) {
      if (t3.value.kind === `arbitrary`) {
        let e4 = t3.value.value;
        switch (t3.value.dataType ?? v(e4, [`number`, `generic-name`, `family-name`])) {
          case `generic-name`:
          case `family-name`:
            return [V(`font-family`, e4)];
          default:
            return [H([G(`--tw-font-weight`)]), V(`--tw-font-weight`, e4), V(`font-weight`, e4)];
        }
      }
      {
        let n3 = e3.resolveWith(t3.value.value, [`--font`], [`--font-feature-settings`, `--font-variation-settings`]);
        if (n3) {
          let [e4, t4 = {}] = n3;
          return [V(`font-family`, e4), V(`font-feature-settings`, t4[`--font-feature-settings`]), V(`font-variation-settings`, t4[`--font-variation-settings`])];
        }
      }
      {
        let n3 = e3.resolve(t3.value.value, [`--font-weight`]);
        if (n3) return [H([G(`--tw-font-weight`)]), V(`--tw-font-weight`, n3), V(`font-weight`, n3)];
      }
    }
  }), n2(`font`, () => [{ values: [], valueThemeKeys: [`--font`] }, { values: [], valueThemeKeys: [`--font-weight`] }]), i2(`font-features`, { themeKeys: [], handle: (e4) => [V(`font-feature-settings`, e4)] }), r2(`uppercase`, [[`text-transform`, `uppercase`]]), r2(`lowercase`, [[`text-transform`, `lowercase`]]), r2(`capitalize`, [[`text-transform`, `capitalize`]]), r2(`normal-case`, [[`text-transform`, `none`]]), r2(`italic`, [[`font-style`, `italic`]]), r2(`not-italic`, [[`font-style`, `normal`]]), r2(`underline`, [[`text-decoration-line`, `underline`]]), r2(`overline`, [[`text-decoration-line`, `overline`]]), r2(`line-through`, [[`text-decoration-line`, `line-through`]]), r2(`no-underline`, [[`text-decoration-line`, `none`]]), r2(`font-stretch-normal`, [[`font-stretch`, `normal`]]), r2(`font-stretch-ultra-condensed`, [[`font-stretch`, `ultra-condensed`]]), r2(`font-stretch-extra-condensed`, [[`font-stretch`, `extra-condensed`]]), r2(`font-stretch-condensed`, [[`font-stretch`, `condensed`]]), r2(`font-stretch-semi-condensed`, [[`font-stretch`, `semi-condensed`]]), r2(`font-stretch-semi-expanded`, [[`font-stretch`, `semi-expanded`]]), r2(`font-stretch-expanded`, [[`font-stretch`, `expanded`]]), r2(`font-stretch-extra-expanded`, [[`font-stretch`, `extra-expanded`]]), r2(`font-stretch-ultra-expanded`, [[`font-stretch`, `ultra-expanded`]]), i2(`font-stretch`, { handleBareValue: ({ value: e4 }) => {
    if (!e4.endsWith(`%`)) return null;
    let t3 = Number(e4.slice(0, -1));
    return !D(t3) || Number.isNaN(t3) || t3 < 50 || t3 > 200 ? null : e4;
  }, handle: (e4) => [V(`font-stretch`, e4)] }), n2(`font-stretch`, () => [{ values: [`50%`, `75%`, `90%`, `95%`, `100%`, `105%`, `110%`, `125%`, `150%`, `200%`] }]), a2(`placeholder`, { themeKeys: [`--background-color`, `--color`], handle: (e4) => [R(`&::placeholder`, [V(`--tw-sort`, `placeholder-color`), V(`color`, e4)])] }), r2(`decoration-solid`, [[`text-decoration-style`, `solid`]]), r2(`decoration-double`, [[`text-decoration-style`, `double`]]), r2(`decoration-dotted`, [[`text-decoration-style`, `dotted`]]), r2(`decoration-dashed`, [[`text-decoration-style`, `dashed`]]), r2(`decoration-wavy`, [[`text-decoration-style`, `wavy`]]), r2(`decoration-auto`, [[`text-decoration-thickness`, `auto`]]), r2(`decoration-from-font`, [[`text-decoration-thickness`, `from-font`]]), t2.functional(`decoration`, (t3) => {
    if (t3.value) {
      if (t3.value.kind === `arbitrary`) {
        let n3 = t3.value.value;
        switch (t3.value.dataType ?? v(n3, [`color`, `length`, `percentage`])) {
          case `length`:
          case `percentage`:
            return t3.modifier ? void 0 : [V(`text-decoration-thickness`, n3)];
          default:
            return n3 = q(n3, t3.modifier, e3), n3 === null ? void 0 : [V(`text-decoration-color`, n3)];
        }
      }
      {
        let n3 = e3.resolve(t3.value.value, [`--text-decoration-thickness`]);
        if (n3) return t3.modifier ? void 0 : [V(`text-decoration-thickness`, n3)];
        if (D(t3.value.value)) return t3.modifier ? void 0 : [V(`text-decoration-thickness`, `${t3.value.value}px`)];
      }
      {
        let n3 = J(t3, e3, [`--text-decoration-color`, `--color`]);
        if (n3) return [V(`text-decoration-color`, n3)];
      }
    }
  }), n2(`decoration`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--text-decoration-color`, `--color`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`) }, { values: [`0`, `1`, `2`], valueThemeKeys: [`--text-decoration-thickness`] }]), i2(`animate`, { themeKeys: [`--animate`], handle: (e4) => [V(`animation`, e4)], staticValues: { none: [V(`animation`, `none`)] } });
  {
    let a3 = [`var(--tw-blur,)`, `var(--tw-brightness,)`, `var(--tw-contrast,)`, `var(--tw-grayscale,)`, `var(--tw-hue-rotate,)`, `var(--tw-invert,)`, `var(--tw-saturate,)`, `var(--tw-sepia,)`, `var(--tw-drop-shadow,)`].join(` `), o3 = [`var(--tw-backdrop-blur,)`, `var(--tw-backdrop-brightness,)`, `var(--tw-backdrop-contrast,)`, `var(--tw-backdrop-grayscale,)`, `var(--tw-backdrop-hue-rotate,)`, `var(--tw-backdrop-invert,)`, `var(--tw-backdrop-opacity,)`, `var(--tw-backdrop-saturate,)`, `var(--tw-backdrop-sepia,)`].join(` `), s3 = () => H([G(`--tw-blur`), G(`--tw-brightness`), G(`--tw-contrast`), G(`--tw-grayscale`), G(`--tw-hue-rotate`), G(`--tw-invert`), G(`--tw-opacity`), G(`--tw-saturate`), G(`--tw-sepia`), G(`--tw-drop-shadow`), G(`--tw-drop-shadow-color`), G(`--tw-drop-shadow-alpha`, `100%`, `<percentage>`), G(`--tw-drop-shadow-size`)]), c3 = () => H([G(`--tw-backdrop-blur`), G(`--tw-backdrop-brightness`), G(`--tw-backdrop-contrast`), G(`--tw-backdrop-grayscale`), G(`--tw-backdrop-hue-rotate`), G(`--tw-backdrop-invert`), G(`--tw-backdrop-opacity`), G(`--tw-backdrop-saturate`), G(`--tw-backdrop-sepia`)]);
    t2.functional(`filter`, (e4) => {
      if (!e4.modifier) {
        if (e4.value === null) return [s3(), V(`filter`, a3)];
        if (e4.value.kind === `arbitrary`) return [V(`filter`, e4.value.value)];
        switch (e4.value.value) {
          case `none`:
            return [V(`filter`, `none`)];
        }
      }
    }), t2.functional(`backdrop-filter`, (e4) => {
      if (!e4.modifier) {
        if (e4.value === null) return [c3(), V(`-webkit-backdrop-filter`, o3), V(`backdrop-filter`, o3)];
        if (e4.value.kind === `arbitrary`) return [V(`-webkit-backdrop-filter`, e4.value.value), V(`backdrop-filter`, e4.value.value)];
        switch (e4.value.value) {
          case `none`:
            return [V(`-webkit-backdrop-filter`, `none`), V(`backdrop-filter`, `none`)];
        }
      }
    }), i2(`blur`, { themeKeys: [`--blur`], handle: (e4) => [s3(), V(`--tw-blur`, `blur(${e4})`), V(`filter`, a3)], staticValues: { none: [s3(), V(`--tw-blur`, ` `), V(`filter`, a3)] } }), i2(`backdrop-blur`, { themeKeys: [`--backdrop-blur`, `--blur`], handle: (e4) => [c3(), V(`--tw-backdrop-blur`, `blur(${e4})`), V(`-webkit-backdrop-filter`, o3), V(`backdrop-filter`, o3)], staticValues: { none: [c3(), V(`--tw-backdrop-blur`, ` `), V(`-webkit-backdrop-filter`, o3), V(`backdrop-filter`, o3)] } }), i2(`brightness`, { themeKeys: [`--brightness`], handleBareValue: ({ value: e4 }) => D(e4) ? `${e4}%` : null, handle: (e4) => [s3(), V(`--tw-brightness`, `brightness(${e4})`), V(`filter`, a3)] }), i2(`backdrop-brightness`, { themeKeys: [`--backdrop-brightness`, `--brightness`], handleBareValue: ({ value: e4 }) => D(e4) ? `${e4}%` : null, handle: (e4) => [c3(), V(`--tw-backdrop-brightness`, `brightness(${e4})`), V(`-webkit-backdrop-filter`, o3), V(`backdrop-filter`, o3)] }), n2(`brightness`, () => [{ values: [`0`, `50`, `75`, `90`, `95`, `100`, `105`, `110`, `125`, `150`, `200`], valueThemeKeys: [`--brightness`] }]), n2(`backdrop-brightness`, () => [{ values: [`0`, `50`, `75`, `90`, `95`, `100`, `105`, `110`, `125`, `150`, `200`], valueThemeKeys: [`--backdrop-brightness`, `--brightness`] }]), i2(`contrast`, { themeKeys: [`--contrast`], handleBareValue: ({ value: e4 }) => D(e4) ? `${e4}%` : null, handle: (e4) => [s3(), V(`--tw-contrast`, `contrast(${e4})`), V(`filter`, a3)] }), i2(`backdrop-contrast`, { themeKeys: [`--backdrop-contrast`, `--contrast`], handleBareValue: ({ value: e4 }) => D(e4) ? `${e4}%` : null, handle: (e4) => [c3(), V(`--tw-backdrop-contrast`, `contrast(${e4})`), V(`-webkit-backdrop-filter`, o3), V(`backdrop-filter`, o3)] }), n2(`contrast`, () => [{ values: [`0`, `50`, `75`, `100`, `125`, `150`, `200`], valueThemeKeys: [`--contrast`] }]), n2(`backdrop-contrast`, () => [{ values: [`0`, `50`, `75`, `100`, `125`, `150`, `200`], valueThemeKeys: [`--backdrop-contrast`, `--contrast`] }]), i2(`grayscale`, { themeKeys: [`--grayscale`], handleBareValue: ({ value: e4 }) => D(e4) ? `${e4}%` : null, defaultValue: `100%`, handle: (e4) => [s3(), V(`--tw-grayscale`, `grayscale(${e4})`), V(`filter`, a3)] }), i2(`backdrop-grayscale`, { themeKeys: [`--backdrop-grayscale`, `--grayscale`], handleBareValue: ({ value: e4 }) => D(e4) ? `${e4}%` : null, defaultValue: `100%`, handle: (e4) => [c3(), V(`--tw-backdrop-grayscale`, `grayscale(${e4})`), V(`-webkit-backdrop-filter`, o3), V(`backdrop-filter`, o3)] }), n2(`grayscale`, () => [{ values: [`0`, `25`, `50`, `75`, `100`], valueThemeKeys: [`--grayscale`], hasDefaultValue: true }]), n2(`backdrop-grayscale`, () => [{ values: [`0`, `25`, `50`, `75`, `100`], valueThemeKeys: [`--backdrop-grayscale`, `--grayscale`], hasDefaultValue: true }]), i2(`hue-rotate`, { supportsNegative: true, themeKeys: [`--hue-rotate`], handleBareValue: ({ value: e4 }) => D(e4) ? `${e4}deg` : null, handle: (e4) => [s3(), V(`--tw-hue-rotate`, `hue-rotate(${e4})`), V(`filter`, a3)] }), i2(`backdrop-hue-rotate`, { supportsNegative: true, themeKeys: [`--backdrop-hue-rotate`, `--hue-rotate`], handleBareValue: ({ value: e4 }) => D(e4) ? `${e4}deg` : null, handle: (e4) => [c3(), V(`--tw-backdrop-hue-rotate`, `hue-rotate(${e4})`), V(`-webkit-backdrop-filter`, o3), V(`backdrop-filter`, o3)] }), n2(`hue-rotate`, () => [{ values: [`0`, `15`, `30`, `60`, `90`, `180`], valueThemeKeys: [`--hue-rotate`] }]), n2(`backdrop-hue-rotate`, () => [{ values: [`0`, `15`, `30`, `60`, `90`, `180`], valueThemeKeys: [`--backdrop-hue-rotate`, `--hue-rotate`] }]), i2(`invert`, { themeKeys: [`--invert`], handleBareValue: ({ value: e4 }) => D(e4) ? `${e4}%` : null, defaultValue: `100%`, handle: (e4) => [s3(), V(`--tw-invert`, `invert(${e4})`), V(`filter`, a3)] }), i2(`backdrop-invert`, { themeKeys: [`--backdrop-invert`, `--invert`], handleBareValue: ({ value: e4 }) => D(e4) ? `${e4}%` : null, defaultValue: `100%`, handle: (e4) => [c3(), V(`--tw-backdrop-invert`, `invert(${e4})`), V(`-webkit-backdrop-filter`, o3), V(`backdrop-filter`, o3)] }), n2(`invert`, () => [{ values: [`0`, `25`, `50`, `75`, `100`], valueThemeKeys: [`--invert`], hasDefaultValue: true }]), n2(`backdrop-invert`, () => [{ values: [`0`, `25`, `50`, `75`, `100`], valueThemeKeys: [`--backdrop-invert`, `--invert`], hasDefaultValue: true }]), i2(`saturate`, { themeKeys: [`--saturate`], handleBareValue: ({ value: e4 }) => D(e4) ? `${e4}%` : null, handle: (e4) => [s3(), V(`--tw-saturate`, `saturate(${e4})`), V(`filter`, a3)] }), i2(`backdrop-saturate`, { themeKeys: [`--backdrop-saturate`, `--saturate`], handleBareValue: ({ value: e4 }) => D(e4) ? `${e4}%` : null, handle: (e4) => [c3(), V(`--tw-backdrop-saturate`, `saturate(${e4})`), V(`-webkit-backdrop-filter`, o3), V(`backdrop-filter`, o3)] }), n2(`saturate`, () => [{ values: [`0`, `50`, `100`, `150`, `200`], valueThemeKeys: [`--saturate`] }]), n2(`backdrop-saturate`, () => [{ values: [`0`, `50`, `100`, `150`, `200`], valueThemeKeys: [`--backdrop-saturate`, `--saturate`] }]), i2(`sepia`, { themeKeys: [`--sepia`], handleBareValue: ({ value: e4 }) => D(e4) ? `${e4}%` : null, defaultValue: `100%`, handle: (e4) => [s3(), V(`--tw-sepia`, `sepia(${e4})`), V(`filter`, a3)] }), i2(`backdrop-sepia`, { themeKeys: [`--backdrop-sepia`, `--sepia`], handleBareValue: ({ value: e4 }) => D(e4) ? `${e4}%` : null, defaultValue: `100%`, handle: (e4) => [c3(), V(`--tw-backdrop-sepia`, `sepia(${e4})`), V(`-webkit-backdrop-filter`, o3), V(`backdrop-filter`, o3)] }), n2(`sepia`, () => [{ values: [`0`, `50`, `100`], valueThemeKeys: [`--sepia`], hasDefaultValue: true }]), n2(`backdrop-sepia`, () => [{ values: [`0`, `50`, `100`], valueThemeKeys: [`--backdrop-sepia`, `--sepia`], hasDefaultValue: true }]), r2(`drop-shadow-none`, [s3, [`--tw-drop-shadow`, ` `], [`filter`, a3]]), t2.functional(`drop-shadow`, (t3) => {
      let n3;
      if (t3.modifier && (t3.modifier.kind === `arbitrary` ? n3 = t3.modifier.value : D(t3.modifier.value) && (n3 = `${t3.modifier.value}%`)), !t3.value) {
        let t4 = e3.get([`--drop-shadow`]), r3 = e3.resolve(null, [`--drop-shadow`]);
        return t4 === null || r3 === null ? void 0 : [s3(), V(`--tw-drop-shadow-alpha`, n3), ...bn(`--tw-drop-shadow-size`, t4, n3, (e4) => `var(--tw-drop-shadow-color, ${e4})`), V(`--tw-drop-shadow`, g(r3, `,`).map((e4) => `drop-shadow(${e4})`).join(` `)), V(`filter`, a3)];
      }
      if (t3.value.kind === `arbitrary`) {
        let r3 = t3.value.value;
        switch (t3.value.dataType ?? v(r3, [`color`])) {
          case `color`:
            return r3 = q(r3, t3.modifier, e3), r3 === null ? void 0 : [s3(), V(`--tw-drop-shadow-color`, K(r3, `var(--tw-drop-shadow-alpha)`)), V(`--tw-drop-shadow`, `var(--tw-drop-shadow-size)`)];
          default:
            return t3.modifier && !n3 ? void 0 : [s3(), V(`--tw-drop-shadow-alpha`, n3), ...bn(`--tw-drop-shadow-size`, r3, n3, (e4) => `var(--tw-drop-shadow-color, ${e4})`), V(`--tw-drop-shadow`, `var(--tw-drop-shadow-size)`), V(`filter`, a3)];
        }
      }
      {
        let r3 = e3.get([`--drop-shadow-${t3.value.value}`]), i3 = e3.resolve(t3.value.value, [`--drop-shadow`]);
        if (r3 && i3) return t3.modifier && !n3 ? void 0 : n3 ? [s3(), V(`--tw-drop-shadow-alpha`, n3), ...bn(`--tw-drop-shadow-size`, r3, n3, (e4) => `var(--tw-drop-shadow-color, ${e4})`), V(`--tw-drop-shadow`, `var(--tw-drop-shadow-size)`), V(`filter`, a3)] : [s3(), V(`--tw-drop-shadow-alpha`, n3), ...bn(`--tw-drop-shadow-size`, r3, n3, (e4) => `var(--tw-drop-shadow-color, ${e4})`), V(`--tw-drop-shadow`, g(i3, `,`).map((e4) => `drop-shadow(${e4})`).join(` `)), V(`filter`, a3)];
      }
      {
        let n4 = J(t3, e3, [`--drop-shadow-color`, `--color`]);
        if (n4) return n4 === `inherit` ? [s3(), V(`--tw-drop-shadow-color`, `inherit`), V(`--tw-drop-shadow`, `var(--tw-drop-shadow-size)`)] : [s3(), V(`--tw-drop-shadow-color`, K(n4, `var(--tw-drop-shadow-alpha)`)), V(`--tw-drop-shadow`, `var(--tw-drop-shadow-size)`)];
      }
    }), n2(`drop-shadow`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--drop-shadow-color`, `--color`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`) }, { valueThemeKeys: [`--drop-shadow`] }]), i2(`backdrop-opacity`, { themeKeys: [`--backdrop-opacity`, `--opacity`], handleBareValue: ({ value: e4 }) => ve(e4) ? `${e4}%` : null, handle: (e4) => [c3(), V(`--tw-backdrop-opacity`, `opacity(${e4})`), V(`-webkit-backdrop-filter`, o3), V(`backdrop-filter`, o3)] }), n2(`backdrop-opacity`, () => [{ values: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`), valueThemeKeys: [`--backdrop-opacity`, `--opacity`] }]);
  }
  {
    let a3 = `var(--tw-ease, ${e3.resolve(null, [`--default-transition-timing-function`]) ?? `ease`})`, o3 = `var(--tw-duration, ${e3.resolve(null, [`--default-transition-duration`]) ?? `0s`})`;
    i2(`transition`, { defaultValue: `color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events`, themeKeys: [`--transition-property`], handle: (e4) => [V(`transition-property`, e4), V(`transition-timing-function`, a3), V(`transition-duration`, o3)], staticValues: { none: [V(`transition-property`, `none`)], all: [V(`transition-property`, `all`), V(`transition-timing-function`, a3), V(`transition-duration`, o3)], colors: [V(`transition-property`, `color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to`), V(`transition-timing-function`, a3), V(`transition-duration`, o3)], opacity: [V(`transition-property`, `opacity`), V(`transition-timing-function`, a3), V(`transition-duration`, o3)], shadow: [V(`transition-property`, `box-shadow`), V(`transition-timing-function`, a3), V(`transition-duration`, o3)], transform: [V(`transition-property`, `transform, translate, scale, rotate`), V(`transition-timing-function`, a3), V(`transition-duration`, o3)] } }), r2(`transition-discrete`, [[`transition-behavior`, `allow-discrete`]]), r2(`transition-normal`, [[`transition-behavior`, `normal`]]), i2(`delay`, { handleBareValue: ({ value: e4 }) => D(e4) ? `${e4}ms` : null, themeKeys: [`--transition-delay`], handle: (e4) => [V(`transition-delay`, e4)] });
    {
      let n3 = () => H([G(`--tw-duration`)]);
      r2(`duration-initial`, [n3, [`--tw-duration`, `initial`]]), t2.functional(`duration`, (t3) => {
        if (t3.modifier || !t3.value) return;
        let r3 = null;
        if (t3.value.kind === `arbitrary` ? r3 = t3.value.value : (r3 = e3.resolve(t3.value.fraction ?? t3.value.value, [`--transition-duration`]), r3 === null && D(t3.value.value) && (r3 = `${t3.value.value}ms`)), r3 !== null) return [n3(), V(`--tw-duration`, r3), V(`transition-duration`, r3)];
      });
    }
    n2(`delay`, () => [{ values: [`75`, `100`, `150`, `200`, `300`, `500`, `700`, `1000`], valueThemeKeys: [`--transition-delay`] }]), n2(`duration`, () => [{ values: [`75`, `100`, `150`, `200`, `300`, `500`, `700`, `1000`], valueThemeKeys: [`--transition-duration`] }]);
  }
  {
    let e4 = () => H([G(`--tw-ease`)]);
    i2(`ease`, { themeKeys: [`--ease`], handle: (t3) => [e4(), V(`--tw-ease`, t3), V(`transition-timing-function`, t3)], staticValues: { initial: [e4(), V(`--tw-ease`, `initial`)], linear: [e4(), V(`--tw-ease`, `linear`), V(`transition-timing-function`, `linear`)] } });
  }
  r2(`will-change-auto`, [[`will-change`, `auto`]]), r2(`will-change-scroll`, [[`will-change`, `scroll-position`]]), r2(`will-change-contents`, [[`will-change`, `contents`]]), r2(`will-change-transform`, [[`will-change`, `transform`]]), i2(`will-change`, { themeKeys: [], handle: (e4) => [V(`will-change`, e4)] }), r2(`content-none`, [[`--tw-content`, `none`], [`content`, `none`]]), i2(`content`, { themeKeys: [`--content`], handle: (e4) => [H([G(`--tw-content`, `""`)]), V(`--tw-content`, e4), V(`content`, `var(--tw-content)`)] });
  {
    let e4 = `var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,)`, t3 = () => H([G(`--tw-contain-size`), G(`--tw-contain-layout`), G(`--tw-contain-paint`), G(`--tw-contain-style`)]);
    r2(`contain-none`, [[`contain`, `none`]]), r2(`contain-content`, [[`contain`, `content`]]), r2(`contain-strict`, [[`contain`, `strict`]]), r2(`contain-size`, [t3, [`--tw-contain-size`, `size`], [`contain`, e4]]), r2(`contain-inline-size`, [t3, [`--tw-contain-size`, `inline-size`], [`contain`, e4]]), r2(`contain-layout`, [t3, [`--tw-contain-layout`, `layout`], [`contain`, e4]]), r2(`contain-paint`, [t3, [`--tw-contain-paint`, `paint`], [`contain`, e4]]), r2(`contain-style`, [t3, [`--tw-contain-style`, `style`], [`contain`, e4]]), i2(`contain`, { themeKeys: [], handle: (e5) => [V(`contain`, e5)] });
  }
  r2(`forced-color-adjust-none`, [[`forced-color-adjust`, `none`]]), r2(`forced-color-adjust-auto`, [[`forced-color-adjust`, `auto`]]), o2(`leading`, [`--leading`, `--spacing`], (e4) => [H([G(`--tw-leading`)]), V(`--tw-leading`, e4), V(`line-height`, e4)], { staticValues: { none: [H([G(`--tw-leading`)]), V(`--tw-leading`, `1`), V(`line-height`, `1`)] } }), i2(`tracking`, { supportsNegative: true, themeKeys: [`--tracking`], handle: (e4) => [H([G(`--tw-tracking`)]), V(`--tw-tracking`, e4), V(`letter-spacing`, e4)] }), r2(`antialiased`, [[`-webkit-font-smoothing`, `antialiased`], [`-moz-osx-font-smoothing`, `grayscale`]]), r2(`subpixel-antialiased`, [[`-webkit-font-smoothing`, `auto`], [`-moz-osx-font-smoothing`, `auto`]]);
  {
    let e4 = `var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)`, t3 = () => H([G(`--tw-ordinal`), G(`--tw-slashed-zero`), G(`--tw-numeric-figure`), G(`--tw-numeric-spacing`), G(`--tw-numeric-fraction`)]);
    r2(`normal-nums`, [[`font-variant-numeric`, `normal`]]), r2(`ordinal`, [t3, [`--tw-ordinal`, `ordinal`], [`font-variant-numeric`, e4]]), r2(`slashed-zero`, [t3, [`--tw-slashed-zero`, `slashed-zero`], [`font-variant-numeric`, e4]]), r2(`lining-nums`, [t3, [`--tw-numeric-figure`, `lining-nums`], [`font-variant-numeric`, e4]]), r2(`oldstyle-nums`, [t3, [`--tw-numeric-figure`, `oldstyle-nums`], [`font-variant-numeric`, e4]]), r2(`proportional-nums`, [t3, [`--tw-numeric-spacing`, `proportional-nums`], [`font-variant-numeric`, e4]]), r2(`tabular-nums`, [t3, [`--tw-numeric-spacing`, `tabular-nums`], [`font-variant-numeric`, e4]]), r2(`diagonal-fractions`, [t3, [`--tw-numeric-fraction`, `diagonal-fractions`], [`font-variant-numeric`, e4]]), r2(`stacked-fractions`, [t3, [`--tw-numeric-fraction`, `stacked-fractions`], [`font-variant-numeric`, e4]]);
  }
  {
    let a3 = () => H([G(`--tw-outline-style`, `solid`)]);
    t2.static(`outline-hidden`, () => [V(`--tw-outline-style`, `none`), V(`outline-style`, `none`), z(`@media`, `(forced-colors: active)`, [V(`outline`, `2px solid transparent`), V(`outline-offset`, `2px`)])]), r2(`outline-none`, [[`--tw-outline-style`, `none`], [`outline-style`, `none`]]), r2(`outline-solid`, [[`--tw-outline-style`, `solid`], [`outline-style`, `solid`]]), r2(`outline-dashed`, [[`--tw-outline-style`, `dashed`], [`outline-style`, `dashed`]]), r2(`outline-dotted`, [[`--tw-outline-style`, `dotted`], [`outline-style`, `dotted`]]), r2(`outline-double`, [[`--tw-outline-style`, `double`], [`outline-style`, `double`]]), t2.functional(`outline`, (t3) => {
      if (t3.value === null) {
        if (t3.modifier) return;
        let n3 = e3.get([`--default-outline-width`]) ?? `1px`;
        return [a3(), V(`outline-style`, `var(--tw-outline-style)`), V(`outline-width`, n3)];
      }
      if (t3.value.kind === `arbitrary`) {
        let n3 = t3.value.value;
        switch (t3.value.dataType ?? v(n3, [`color`, `length`, `number`, `percentage`])) {
          case `length`:
          case `number`:
          case `percentage`:
            return t3.modifier ? void 0 : [a3(), V(`outline-style`, `var(--tw-outline-style)`), V(`outline-width`, n3)];
          default:
            return n3 = q(n3, t3.modifier, e3), n3 === null ? void 0 : [V(`outline-color`, n3)];
        }
      }
      {
        let n3 = J(t3, e3, [`--outline-color`, `--color`]);
        if (n3) return [V(`outline-color`, n3)];
      }
      {
        if (t3.modifier) return;
        let n3 = e3.resolve(t3.value.value, [`--outline-width`]);
        if (n3) return [a3(), V(`outline-style`, `var(--tw-outline-style)`), V(`outline-width`, n3)];
        if (D(t3.value.value)) return [a3(), V(`outline-style`, `var(--tw-outline-style)`), V(`outline-width`, `${t3.value.value}px`)];
      }
    }), n2(`outline`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--outline-color`, `--color`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`), hasDefaultValue: true }, { values: [`0`, `1`, `2`, `4`, `8`], valueThemeKeys: [`--outline-width`] }]), i2(`outline-offset`, { supportsNegative: true, themeKeys: [`--outline-offset`], handleBareValue: ({ value: e4 }) => D(e4) ? `${e4}px` : null, handle: (e4) => [V(`outline-offset`, e4)] }), n2(`outline-offset`, () => [{ supportsNegative: true, values: [`0`, `1`, `2`, `4`, `8`], valueThemeKeys: [`--outline-offset`] }]);
  }
  i2(`opacity`, { themeKeys: [`--opacity`], handleBareValue: ({ value: e4 }) => ve(e4) ? `${e4}%` : null, handle: (e4) => [V(`opacity`, e4)] }), n2(`opacity`, () => [{ values: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`), valueThemeKeys: [`--opacity`] }]), i2(`underline-offset`, { supportsNegative: true, themeKeys: [`--text-underline-offset`], handleBareValue: ({ value: e4 }) => D(e4) ? `${e4}px` : null, handle: (e4) => [V(`text-underline-offset`, e4)], staticValues: { auto: [V(`text-underline-offset`, `auto`)] } }), n2(`underline-offset`, () => [{ supportsNegative: true, values: [`0`, `1`, `2`, `4`, `8`], valueThemeKeys: [`--text-underline-offset`] }]), t2.functional(`text`, (t3) => {
    if (t3.value) {
      if (t3.value.kind === `arbitrary`) {
        let n3 = t3.value.value;
        switch (t3.value.dataType ?? v(n3, [`color`, `length`, `percentage`, `absolute-size`, `relative-size`])) {
          case `size`:
          case `length`:
          case `percentage`:
          case `absolute-size`:
          case `relative-size`:
            if (t3.modifier) {
              let r3 = t3.modifier.kind === `arbitrary` ? t3.modifier.value : e3.resolve(t3.modifier.value, [`--leading`]);
              if (!r3 && O(t3.modifier.value)) {
                let n4 = e3.resolve(null, [`--spacing`]);
                if (!n4) return null;
                r3 = `calc(${n4} * ${t3.modifier.value})`;
              }
              return !r3 && t3.modifier.value === `none` && (r3 = `1`), r3 ? [V(`font-size`, n3), V(`line-height`, r3)] : null;
            }
            return [V(`font-size`, n3)];
          default:
            return n3 = q(n3, t3.modifier, e3), n3 === null ? void 0 : [V(`color`, n3)];
        }
      }
      {
        let n3 = J(t3, e3, [`--text-color`, `--color`]);
        if (n3) return [V(`color`, n3)];
      }
      {
        let n3 = e3.resolveWith(t3.value.value, [`--text`], [`--line-height`, `--letter-spacing`, `--font-weight`]);
        if (n3) {
          let [r3, i3 = {}] = Array.isArray(n3) ? n3 : [n3];
          if (t3.modifier) {
            let n4 = t3.modifier.kind === `arbitrary` ? t3.modifier.value : e3.resolve(t3.modifier.value, [`--leading`]);
            if (!n4 && O(t3.modifier.value)) {
              let r4 = e3.resolve(null, [`--spacing`]);
              if (!r4) return null;
              n4 = `calc(${r4} * ${t3.modifier.value})`;
            }
            if (!n4 && t3.modifier.value === `none` && (n4 = `1`), !n4) return null;
            let i4 = [V(`font-size`, r3)];
            return n4 && i4.push(V(`line-height`, n4)), i4;
          }
          return typeof i3 == `string` ? [V(`font-size`, r3), V(`line-height`, i3)] : [V(`font-size`, r3), V(`line-height`, i3[`--line-height`] ? `var(--tw-leading, ${i3[`--line-height`]})` : void 0), V(`letter-spacing`, i3[`--letter-spacing`] ? `var(--tw-tracking, ${i3[`--letter-spacing`]})` : void 0), V(`font-weight`, i3[`--font-weight`] ? `var(--tw-font-weight, ${i3[`--font-weight`]})` : void 0)];
        }
      }
    }
  }), n2(`text`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--text-color`, `--color`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`) }, { values: [], valueThemeKeys: [`--text`], modifiers: [], modifierThemeKeys: [`--leading`] }]);
  let w2 = () => H([G(`--tw-text-shadow-color`), G(`--tw-text-shadow-alpha`, `100%`, `<percentage>`)]);
  r2(`text-shadow-initial`, [w2, [`--tw-text-shadow-color`, `initial`]]), t2.functional(`text-shadow`, (t3) => {
    let n3;
    if (t3.modifier && (t3.modifier.kind === `arbitrary` ? n3 = t3.modifier.value : D(t3.modifier.value) && (n3 = `${t3.modifier.value}%`)), !t3.value) {
      let t4 = e3.get([`--text-shadow`]);
      return t4 === null ? void 0 : [w2(), V(`--tw-text-shadow-alpha`, n3), ...yn(`text-shadow`, t4, n3, (e4) => `var(--tw-text-shadow-color, ${e4})`)];
    }
    if (t3.value.kind === `arbitrary`) {
      let r3 = t3.value.value;
      switch (t3.value.dataType ?? v(r3, [`color`])) {
        case `color`:
          return r3 = q(r3, t3.modifier, e3), r3 === null ? void 0 : [w2(), V(`--tw-text-shadow-color`, K(r3, `var(--tw-text-shadow-alpha)`))];
        default:
          return [w2(), V(`--tw-text-shadow-alpha`, n3), ...yn(`text-shadow`, r3, n3, (e4) => `var(--tw-text-shadow-color, ${e4})`)];
      }
    }
    switch (t3.value.value) {
      case `none`:
        return t3.modifier ? void 0 : [w2(), V(`text-shadow`, `none`)];
      case `inherit`:
        return t3.modifier ? void 0 : [w2(), V(`--tw-text-shadow-color`, `inherit`)];
    }
    {
      let r3 = e3.get([`--text-shadow-${t3.value.value}`]);
      if (r3) return [w2(), V(`--tw-text-shadow-alpha`, n3), ...yn(`text-shadow`, r3, n3, (e4) => `var(--tw-text-shadow-color, ${e4})`)];
    }
    {
      let n4 = J(t3, e3, [`--text-shadow-color`, `--color`]);
      if (n4) return [w2(), V(`--tw-text-shadow-color`, K(n4, `var(--tw-text-shadow-alpha)`))];
    }
  }), n2(`text-shadow`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--text-shadow-color`, `--color`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`) }, { values: [`none`] }, { valueThemeKeys: [`--text-shadow`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`), hasDefaultValue: e3.get([`--text-shadow`]) !== null }]);
  {
    let i3 = function(e4) {
      return `var(--tw-ring-inset,) 0 0 0 calc(${e4} + var(--tw-ring-offset-width)) var(--tw-ring-color, ${l3})`;
    }, a3 = function(e4) {
      return `inset 0 0 0 ${e4} var(--tw-inset-ring-color, currentcolor)`;
    }, o3 = [`var(--tw-inset-shadow)`, `var(--tw-inset-ring-shadow)`, `var(--tw-ring-offset-shadow)`, `var(--tw-ring-shadow)`, `var(--tw-shadow)`].join(`, `), s3 = `0 0 #0000`, c3 = () => H([G(`--tw-shadow`, s3), G(`--tw-shadow-color`), G(`--tw-shadow-alpha`, `100%`, `<percentage>`), G(`--tw-inset-shadow`, s3), G(`--tw-inset-shadow-color`), G(`--tw-inset-shadow-alpha`, `100%`, `<percentage>`), G(`--tw-ring-color`), G(`--tw-ring-shadow`, s3), G(`--tw-inset-ring-color`), G(`--tw-inset-ring-shadow`, s3), G(`--tw-ring-inset`), G(`--tw-ring-offset-width`, `0px`, `<length>`), G(`--tw-ring-offset-color`, `#fff`), G(`--tw-ring-offset-shadow`, s3)]);
    r2(`shadow-initial`, [c3, [`--tw-shadow-color`, `initial`]]), t2.functional(`shadow`, (t3) => {
      let n3;
      if (t3.modifier && (t3.modifier.kind === `arbitrary` ? n3 = t3.modifier.value : D(t3.modifier.value) && (n3 = `${t3.modifier.value}%`)), !t3.value) {
        let t4 = e3.get([`--shadow`]);
        return t4 === null ? void 0 : [c3(), V(`--tw-shadow-alpha`, n3), ...yn(`--tw-shadow`, t4, n3, (e4) => `var(--tw-shadow-color, ${e4})`), V(`box-shadow`, o3)];
      }
      if (t3.value.kind === `arbitrary`) {
        let r3 = t3.value.value;
        switch (t3.value.dataType ?? v(r3, [`color`])) {
          case `color`:
            return r3 = q(r3, t3.modifier, e3), r3 === null ? void 0 : [c3(), V(`--tw-shadow-color`, K(r3, `var(--tw-shadow-alpha)`))];
          default:
            return [c3(), V(`--tw-shadow-alpha`, n3), ...yn(`--tw-shadow`, r3, n3, (e4) => `var(--tw-shadow-color, ${e4})`), V(`box-shadow`, o3)];
        }
      }
      switch (t3.value.value) {
        case `none`:
          return t3.modifier ? void 0 : [c3(), V(`--tw-shadow`, s3), V(`box-shadow`, o3)];
        case `inherit`:
          return t3.modifier ? void 0 : [c3(), V(`--tw-shadow-color`, `inherit`)];
      }
      {
        let r3 = e3.get([`--shadow-${t3.value.value}`]);
        if (r3) return [c3(), V(`--tw-shadow-alpha`, n3), ...yn(`--tw-shadow`, r3, n3, (e4) => `var(--tw-shadow-color, ${e4})`), V(`box-shadow`, o3)];
      }
      {
        let n4 = J(t3, e3, [`--box-shadow-color`, `--color`]);
        if (n4) return [c3(), V(`--tw-shadow-color`, K(n4, `var(--tw-shadow-alpha)`))];
      }
    }), n2(`shadow`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--box-shadow-color`, `--color`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`) }, { values: [`none`] }, { valueThemeKeys: [`--shadow`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`), hasDefaultValue: e3.get([`--shadow`]) !== null }]), r2(`inset-shadow-initial`, [c3, [`--tw-inset-shadow-color`, `initial`]]), t2.functional(`inset-shadow`, (t3) => {
      let n3;
      if (t3.modifier && (t3.modifier.kind === `arbitrary` ? n3 = t3.modifier.value : D(t3.modifier.value) && (n3 = `${t3.modifier.value}%`)), !t3.value) {
        let t4 = e3.get([`--inset-shadow`]);
        return t4 === null ? void 0 : [c3(), V(`--tw-inset-shadow-alpha`, n3), ...yn(`--tw-inset-shadow`, t4, n3, (e4) => `var(--tw-inset-shadow-color, ${e4})`), V(`box-shadow`, o3)];
      }
      if (t3.value.kind === `arbitrary`) {
        let r3 = t3.value.value;
        switch (t3.value.dataType ?? v(r3, [`color`])) {
          case `color`:
            return r3 = q(r3, t3.modifier, e3), r3 === null ? void 0 : [c3(), V(`--tw-inset-shadow-color`, K(r3, `var(--tw-inset-shadow-alpha)`))];
          default:
            return [c3(), V(`--tw-inset-shadow-alpha`, n3), ...yn(`--tw-inset-shadow`, r3, n3, (e4) => `var(--tw-inset-shadow-color, ${e4})`, `inset`), V(`box-shadow`, o3)];
        }
      }
      switch (t3.value.value) {
        case `none`:
          return t3.modifier ? void 0 : [c3(), V(`--tw-inset-shadow`, s3), V(`box-shadow`, o3)];
        case `inherit`:
          return t3.modifier ? void 0 : [c3(), V(`--tw-inset-shadow-color`, `inherit`)];
      }
      {
        let r3 = e3.get([`--inset-shadow-${t3.value.value}`]);
        if (r3) return [c3(), V(`--tw-inset-shadow-alpha`, n3), ...yn(`--tw-inset-shadow`, r3, n3, (e4) => `var(--tw-inset-shadow-color, ${e4})`), V(`box-shadow`, o3)];
      }
      {
        let n4 = J(t3, e3, [`--box-shadow-color`, `--color`]);
        if (n4) return [c3(), V(`--tw-inset-shadow-color`, K(n4, `var(--tw-inset-shadow-alpha)`))];
      }
    }), n2(`inset-shadow`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--box-shadow-color`, `--color`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`) }, { values: [`none`] }, { valueThemeKeys: [`--inset-shadow`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`), hasDefaultValue: e3.get([`--inset-shadow`]) !== null }]), r2(`ring-inset`, [c3, [`--tw-ring-inset`, `inset`]]);
    let l3 = e3.get([`--default-ring-color`]) ?? `currentcolor`;
    t2.functional(`ring`, (t3) => {
      if (!t3.value) {
        if (t3.modifier) return;
        let n3 = e3.get([`--default-ring-width`]) ?? `1px`;
        return [c3(), V(`--tw-ring-shadow`, i3(n3)), V(`box-shadow`, o3)];
      }
      if (t3.value.kind === `arbitrary`) {
        let n3 = t3.value.value;
        switch (t3.value.dataType ?? v(n3, [`color`, `length`])) {
          case `length`:
            return t3.modifier ? void 0 : [c3(), V(`--tw-ring-shadow`, i3(n3)), V(`box-shadow`, o3)];
          default:
            return n3 = q(n3, t3.modifier, e3), n3 === null ? void 0 : [V(`--tw-ring-color`, n3)];
        }
      }
      {
        let n3 = J(t3, e3, [`--ring-color`, `--color`]);
        if (n3) return [V(`--tw-ring-color`, n3)];
      }
      {
        if (t3.modifier) return;
        let n3 = e3.resolve(t3.value.value, [`--ring-width`]);
        if (n3 === null && D(t3.value.value) && (n3 = `${t3.value.value}px`), n3) return [c3(), V(`--tw-ring-shadow`, i3(n3)), V(`box-shadow`, o3)];
      }
    }), n2(`ring`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--ring-color`, `--color`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`) }, { values: [`0`, `1`, `2`, `4`, `8`], valueThemeKeys: [`--ring-width`], hasDefaultValue: true }]), t2.functional(`inset-ring`, (t3) => {
      if (!t3.value) return t3.modifier ? void 0 : [c3(), V(`--tw-inset-ring-shadow`, a3(`1px`)), V(`box-shadow`, o3)];
      if (t3.value.kind === `arbitrary`) {
        let n3 = t3.value.value;
        switch (t3.value.dataType ?? v(n3, [`color`, `length`])) {
          case `length`:
            return t3.modifier ? void 0 : [c3(), V(`--tw-inset-ring-shadow`, a3(n3)), V(`box-shadow`, o3)];
          default:
            return n3 = q(n3, t3.modifier, e3), n3 === null ? void 0 : [V(`--tw-inset-ring-color`, n3)];
        }
      }
      {
        let n3 = J(t3, e3, [`--ring-color`, `--color`]);
        if (n3) return [V(`--tw-inset-ring-color`, n3)];
      }
      {
        if (t3.modifier) return;
        let n3 = e3.resolve(t3.value.value, [`--ring-width`]);
        if (n3 === null && D(t3.value.value) && (n3 = `${t3.value.value}px`), n3) return [c3(), V(`--tw-inset-ring-shadow`, a3(n3)), V(`box-shadow`, o3)];
      }
    }), n2(`inset-ring`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--ring-color`, `--color`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`) }, { values: [`0`, `1`, `2`, `4`, `8`], valueThemeKeys: [`--ring-width`], hasDefaultValue: true }]);
    let u3 = `var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`;
    t2.functional(`ring-offset`, (t3) => {
      if (t3.value) {
        if (t3.value.kind === `arbitrary`) {
          let n3 = t3.value.value;
          switch (t3.value.dataType ?? v(n3, [`color`, `length`])) {
            case `length`:
              return t3.modifier ? void 0 : [V(`--tw-ring-offset-width`, n3), V(`--tw-ring-offset-shadow`, u3)];
            default:
              return n3 = q(n3, t3.modifier, e3), n3 === null ? void 0 : [V(`--tw-ring-offset-color`, n3)];
          }
        }
        {
          let n3 = e3.resolve(t3.value.value, [`--ring-offset-width`]);
          if (n3) return t3.modifier ? void 0 : [V(`--tw-ring-offset-width`, n3), V(`--tw-ring-offset-shadow`, u3)];
          if (D(t3.value.value)) return t3.modifier ? void 0 : [V(`--tw-ring-offset-width`, `${t3.value.value}px`), V(`--tw-ring-offset-shadow`, u3)];
        }
        {
          let n3 = J(t3, e3, [`--ring-offset-color`, `--color`]);
          if (n3) return [V(`--tw-ring-offset-color`, n3)];
        }
      }
    });
  }
  return n2(`ring-offset`, () => [{ values: [`current`, `inherit`, `transparent`], valueThemeKeys: [`--ring-offset-color`, `--color`], modifiers: Array.from({ length: 21 }, (e4, t3) => `${t3 * 5}`) }, { values: [`0`, `1`, `2`, `4`, `8`], valueThemeKeys: [`--ring-offset-width`] }]), t2.functional(`@container`, (e4) => {
    let t3 = null;
    if (e4.value === null ? t3 = `inline-size` : e4.value.kind === `arbitrary` ? t3 = e4.value.value : e4.value.kind === `named` && e4.value.value === `normal` && (t3 = `normal`), t3 !== null) return e4.modifier ? [V(`container-type`, t3), V(`container-name`, e4.modifier.value)] : [V(`container-type`, t3)];
  }), n2(`@container`, () => [{ values: [`normal`], valueThemeKeys: [], hasDefaultValue: true }]), t2;
}
var gn = [`number`, `integer`, `ratio`, `percentage`];
function _n(e3) {
  let t2 = et(e3.params);
  return Pn(t2) ? (n2) => {
    let r2 = { "--value": { usedSpacingInteger: false, usedSpacingNumber: false, themeKeys: /* @__PURE__ */ new Set(), literals: /* @__PURE__ */ new Set() }, "--modifier": { usedSpacingInteger: false, usedSpacingNumber: false, themeKeys: /* @__PURE__ */ new Set(), literals: /* @__PURE__ */ new Set() } };
    L(e3.nodes, (e4) => {
      if (e4.kind !== `declaration` || !e4.value || !e4.value.includes(`--value(`) && !e4.value.includes(`--modifier(`)) return;
      let t3 = F(e4.value);
      L(t3, (e5) => {
        if (e5.kind !== `function`) return;
        if (e5.value === `--spacing` && !(r2[`--modifier`].usedSpacingNumber && r2[`--value`].usedSpacingNumber)) return L(e5.nodes, (e6) => {
          var _a3, _b;
          if (e6.kind !== `function` || e6.value !== `--value` && e6.value !== `--modifier`) return;
          let t5 = e6.value;
          for (let n3 of e6.nodes) if (n3.kind === `word`) {
            if (n3.value === `integer`) (_a3 = r2[t5]).usedSpacingInteger || (_a3.usedSpacingInteger = true);
            else if (n3.value === `number` && ((_b = r2[t5]).usedSpacingNumber || (_b.usedSpacingNumber = true), r2[`--modifier`].usedSpacingNumber && r2[`--value`].usedSpacingNumber)) return I.Stop;
          }
        }), I.Continue;
        if (e5.value !== `--value` && e5.value !== `--modifier`) return;
        let t4 = g(P(e5.nodes), `,`);
        for (let [e6, n3] of t4.entries()) n3 = n3.replace(/\\\*/g, `*`), n3 = n3.replace(/--(.*?)\s--(.*?)/g, `--$1-*--$2`), n3 = n3.replace(/\s+/g, ``), n3 = n3.replace(/(-\*){2,}/g, `-*`), n3[0] === `-` && n3[1] === `-` && !n3.includes(`-*`) && (n3 += `-*`), t4[e6] = n3;
        e5.nodes = F(t4.join(`,`));
        for (let t5 of e5.nodes) if (t5.kind === `word` && (t5.value[0] === `"` || t5.value[0] === `'`) && t5.value[0] === t5.value[t5.value.length - 1]) {
          let n3 = t5.value.slice(1, -1);
          r2[e5.value].literals.add(n3);
        } else if (t5.kind === `word` && t5.value[0] === `-` && t5.value[1] === `-`) {
          let n3 = t5.value.replace(/-\*.*$/g, ``);
          r2[e5.value].themeKeys.add(n3);
        } else if (t5.kind === `word` && !(t5.value[0] === `[` && t5.value[t5.value.length - 1] === `]`) && !gn.includes(t5.value)) {
          console.warn(`Unsupported bare value data type: "${t5.value}".
Only valid data types are: ${gn.map((e6) => `"${e6}"`).join(`, `)}.
`);
          let n3 = t5.value, r3 = structuredClone(e5);
          L(r3.nodes, (e6) => {
            if (e6.kind === `word` && e6.value === n3) return I.ReplaceSkip({ kind: `word`, value: `\xB6` });
          });
          let i2 = `^`.repeat(P([t5]).length), a2 = P([r3]).indexOf(`\xB6`), o2 = ["```css", P([e5]), ` `.repeat(a2) + i2, "```"].join(`
`);
          console.warn(o2);
        }
      }), e4.value = P(t3);
    }), n2.utilities.functional(t2.slice(0, -2), (t3) => {
      let r3 = U(e3), i2 = t3.value, a2 = t3.modifier;
      if (i2 === null) return;
      let o2 = false, s2 = false, c2 = false, l2 = false, u2 = /* @__PURE__ */ new Map(), d2 = false;
      if (L([r3], (e4, t4) => {
        let r4 = t4.parent;
        if (r4?.kind !== `rule` && r4?.kind !== `at-rule` || e4.kind !== `declaration` || !e4.value) return;
        let f2 = false, p2 = F(e4.value);
        if (L(p2, (t5) => {
          if (t5.kind === `function`) {
            if (t5.value === `--value`) {
              o2 = true;
              let a3 = vn(i2, t5, n2);
              return a3 ? (s2 = true, a3.ratio ? d2 = true : u2.set(e4, r4), I.ReplaceSkip(a3.nodes)) : (o2 || (o2 = false), f2 = true, I.Stop);
            } else if (t5.value === `--modifier`) {
              if (a2 === null) return f2 = true, I.Stop;
              c2 = true;
              let e5 = vn(a2, t5, n2);
              return e5 ? (l2 = true, I.ReplaceSkip(e5.nodes)) : (c2 || (c2 = false), f2 = true, I.Stop);
            }
          }
        }), f2) return I.ReplaceSkip([]);
        e4.value = P(p2);
      }), o2 && !s2 || c2 && !l2 || d2 && l2 || a2 && !d2 && !l2) return null;
      if (d2) for (let [e4, t4] of u2) {
        let n3 = t4.nodes.indexOf(e4);
        n3 !== -1 && t4.nodes.splice(n3, 1);
      }
      return r3.nodes;
    }), n2.utilities.suggest(t2.slice(0, -2), () => {
      let e4 = [], t3 = [];
      for (let [i2, { literals: a2, usedSpacingNumber: o2, usedSpacingInteger: s2, themeKeys: c2 }] of [[e4, r2[`--value`]], [t3, r2[`--modifier`]]]) {
        for (let e5 of a2) i2.push(e5);
        if (o2) i2.push(...dn);
        else if (s2) for (let e5 of dn) D(e5) && i2.push(e5);
        for (let e5 of n2.theme.keysInNamespaces(c2)) i2.push(e5.replace(mn, (e6, t4, n3) => `${t4}.${n3}`));
      }
      return [{ values: e4, modifiers: t3 }];
    });
  } : Nn(t2) ? (n2) => {
    n2.utilities.static(t2, () => e3.nodes.map(U));
  } : null;
}
function vn(e3, t2, n2) {
  for (let r2 of t2.nodes) {
    if (e3.kind === `named` && r2.kind === `word` && (r2.value[0] === `'` || r2.value[0] === `"`) && r2.value[r2.value.length - 1] === r2.value[0] && r2.value.slice(1, -1) === e3.value) return { nodes: F(e3.value) };
    if (e3.kind === `named` && r2.kind === `word` && r2.value[0] === `-` && r2.value[1] === `-`) {
      let t3 = r2.value;
      if (t3.endsWith(`-*`)) {
        t3 = t3.slice(0, -2);
        let r3 = n2.theme.resolve(e3.value, [t3]);
        if (r3) return { nodes: F(r3) };
      } else {
        let r3 = t3.split(`-*`);
        if (r3.length <= 1) continue;
        let i2 = [r3.shift()], a2 = n2.theme.resolveWith(e3.value, i2, r3);
        if (a2) {
          let [, e4 = {}] = a2;
          {
            let t4 = e4[r3.pop()];
            if (t4) return { nodes: F(t4) };
          }
        }
      }
    } else if (e3.kind === `named` && r2.kind === `word`) {
      if (!gn.includes(r2.value)) continue;
      let t3 = r2.value === `ratio` && `fraction` in e3 ? e3.fraction : e3.value;
      if (!t3) continue;
      let n3 = v(t3, [r2.value]);
      if (n3 === null) continue;
      if (n3 === `ratio`) {
        let [e4, n4] = g(t3, `/`).map(Number);
        if (!D(e4) || !D(n4)) continue;
      } else if (n3 === `number` && !O(t3) || n3 === `percentage` && !D(t3.slice(0, -1))) continue;
      if (n3 === `ratio`) {
        let [e4, n4] = g(t3, `/`);
        return { nodes: F(`${e4.trim()} / ${n4.trim()}`), ratio: true };
      }
      return { nodes: F(t3), ratio: false };
    } else if (e3.kind === `arbitrary` && r2.kind === `word` && r2.value[0] === `[` && r2.value[r2.value.length - 1] === `]`) {
      let t3 = r2.value.slice(1, -1);
      if (t3 === `*`) return { nodes: F(e3.value) };
      if (`dataType` in e3 && e3.dataType && e3.dataType !== t3) continue;
      if (`dataType` in e3 && e3.dataType || v(e3.value, [t3]) !== null) return { nodes: F(e3.value) };
    }
  }
}
function yn(e3, t2, n2, r2, i2 = ``) {
  let a2 = false, o2 = un(t2, (e4) => n2 == null ? r2(e4) : e4.startsWith(`current`) ? r2(K(e4, n2)) : ((e4.startsWith(`var(`) || n2.startsWith(`var(`)) && (a2 = true), r2(pn(e4, n2))));
  function s2(e4) {
    return i2 ? g(e4, `,`).map((e5) => i2.trim() + ` ` + e5.trim()).join(`, `) : e4;
  }
  return a2 ? [V(e3, s2(un(t2, r2))), B(`@supports (color: lab(from red l a b))`, [V(e3, s2(o2))])] : [V(e3, s2(o2))];
}
function bn(e3, t2, n2, r2, i2 = ``) {
  let a2 = false, o2 = g(t2, `,`).map((e4) => un(e4, (e5) => n2 == null ? r2(e5) : e5.startsWith(`current`) ? r2(K(e5, n2)) : ((e5.startsWith(`var(`) || n2.startsWith(`var(`)) && (a2 = true), r2(pn(e5, n2))))).map((e4) => `drop-shadow(${e4})`).join(` `);
  return a2 ? [V(e3, i2 + g(t2, `,`).map((e4) => `drop-shadow(${un(e4, r2)})`).join(` `)), B(`@supports (color: lab(from red l a b))`, [V(e3, i2 + o2)])] : [V(e3, i2 + o2)];
}
var xn = /^-?[a-z][a-zA-Z0-9_-]*/, Sn = 37, Cn = 47, wn = 46, Tn = 97, En = 122, Dn = 65, On = 90, kn = 48, An = 57, jn = 95, Mn = 45;
function Nn(e3) {
  let t2 = xn.exec(e3);
  if (t2 === null) return false;
  let n2 = t2[0], r2 = e3.slice(n2.length);
  if (r2.length === 0 && n2.endsWith(`-`)) return false;
  if (r2.length === 0) return true;
  let i2 = false;
  for (let e4 = 0; e4 < r2.length; e4++) {
    let t3 = r2.charCodeAt(e4);
    switch (t3) {
      case Sn: {
        if (e4 !== r2.length - 1) return false;
        let t4 = (r2[e4 - 1] || n2[n2.length - 1] || ``).charCodeAt(0);
        if (t4 < kn || t4 > An) return false;
        break;
      }
      case Cn:
        if (e4 === r2.length - 1 || i2) return false;
        i2 = true;
        break;
      case wn: {
        let t4 = (r2[e4 - 1] || n2[n2.length - 1] || ``).charCodeAt(0);
        if (t4 < kn || t4 > An) return false;
        let i3 = (r2[e4 + 1] || ``).charCodeAt(0);
        if (i3 < kn || i3 > An) return false;
        break;
      }
      case jn:
      case Mn:
        continue;
      default:
        if (t3 >= Tn && t3 <= En || t3 >= Dn && t3 <= On || t3 >= kn && t3 <= An) continue;
        return false;
    }
  }
  return true;
}
function Pn(e3) {
  if (!e3.endsWith(`-*`)) return false;
  e3 = e3.slice(0, -2);
  let t2 = xn.exec(e3);
  if (t2 === null) return false;
  let n2 = t2[0];
  return e3.slice(n2.length).length === 0;
}
var Fn = { "--alpha": In, "--spacing": Ln, "--theme": Rn, theme: zn };
function In(e3, t2, n2, ...r2) {
  let [i2, a2] = g(n2, `/`).map((e4) => e4.trim());
  if (!i2 || !a2) throw Error(`The --alpha(\u2026) function requires a color and an alpha value, e.g.: \`--alpha(${i2 || `var(--my-color)`} / ${a2 || `50%`})\``);
  if (r2.length > 0) throw Error(`The --alpha(\u2026) function only accepts one argument, e.g.: \`--alpha(${i2 || `var(--my-color)`} / ${a2 || `50%`})\``);
  return K(i2, a2);
}
function Ln(e3, t2, n2, ...r2) {
  if (!n2) throw Error(`The --spacing(\u2026) function requires an argument, but received none.`);
  if (r2.length > 0) throw Error(`The --spacing(\u2026) function only accepts a single argument, but received ${r2.length + 1}.`);
  let i2 = e3.theme.resolve(null, [`--spacing`]);
  if (!i2) throw Error("The --spacing(\u2026) function requires that the `--spacing` theme variable exists, but it was not found.");
  return `calc(${i2} * ${n2})`;
}
function Rn(e3, t2, n2, ...r2) {
  if (!n2.startsWith(`--`)) throw Error(`The --theme(\u2026) function can only be used with CSS variables from your theme.`);
  let i2 = false;
  n2.endsWith(` inline`) && (i2 = true, n2 = n2.slice(0, -7)), t2.kind === `at-rule` && (i2 = true);
  let a2 = e3.resolveThemeValue(n2, i2);
  if (!a2) {
    if (r2.length > 0) return r2.join(`, `);
    throw Error(`Could not resolve value for theme function: \`theme(${n2})\`. Consider checking if the variable name is correct or provide a fallback value to silence this error.`);
  }
  if (r2.length === 0) return a2;
  let o2 = r2.join(`, `);
  if (o2 === `initial`) return a2;
  if (a2 === `initial`) return o2;
  if (a2.startsWith(`var(`) || a2.startsWith(`theme(`) || a2.startsWith(`--theme(`)) {
    let e4 = F(a2);
    return Wn(e4, o2), P(e4);
  }
  return a2;
}
function zn(e3, t2, n2, ...r2) {
  n2 = Un(n2);
  let i2 = e3.resolveThemeValue(n2);
  if (!i2 && r2.length > 0) return r2.join(`, `);
  if (!i2) throw Error(`Could not resolve value for theme function: \`theme(${n2})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`);
  return i2;
}
var Bn = new RegExp(Object.keys(Fn).map((e3) => `${e3}\\(`).join(`|`));
function Vn(e3, t2) {
  let n2 = 0;
  return L(e3, (e4) => {
    if (e4.kind === `declaration` && e4.value && Bn.test(e4.value)) {
      n2 |= 8, e4.value = Hn(e4.value, e4, t2);
      return;
    }
    e4.kind === `at-rule` && (e4.name === `@media` || e4.name === `@custom-media` || e4.name === `@container` || e4.name === `@supports`) && Bn.test(e4.params) && (n2 |= 8, e4.params = Hn(e4.params, e4, t2));
  }), n2;
}
function Hn(e3, t2, n2) {
  let r2 = F(e3);
  return L(r2, (e4) => {
    if (e4.kind === `function` && e4.value in Fn) {
      let r3 = g(P(e4.nodes).trim(), `,`).map((e5) => e5.trim()), i2 = Fn[e4.value](n2, t2, ...r3);
      return I.Replace(F(i2));
    }
  }), P(r2);
}
function Un(e3) {
  if (e3[0] !== `'` && e3[0] !== `"`) return e3;
  let t2 = ``, n2 = e3[0];
  for (let r2 = 1; r2 < e3.length - 1; r2++) {
    let i2 = e3[r2], a2 = e3[r2 + 1];
    i2 === `\\` && (a2 === n2 || a2 === `\\`) ? (t2 += a2, r2++) : t2 += i2;
  }
  return t2;
}
function Wn(e3, t2) {
  L(e3, (e4) => {
    if (e4.kind === `function` && !(e4.value !== `var` && e4.value !== `theme` && e4.value !== `--theme`)) if (e4.nodes.length === 1) e4.nodes.push({ kind: `word`, value: `, ${t2}` });
    else {
      let n2 = e4.nodes[e4.nodes.length - 1];
      n2.kind === `word` && n2.value === `initial` && (n2.value = t2);
    }
  });
}
function Gn(e3, t2) {
  let n2 = e3.length, r2 = t2.length, i2 = n2 < r2 ? n2 : r2;
  for (let n3 = 0; n3 < i2; n3++) {
    let r3 = e3.charCodeAt(n3), i3 = t2.charCodeAt(n3);
    if (r3 >= 48 && r3 <= 57 && i3 >= 48 && i3 <= 57) {
      let a2 = n3, o2 = n3 + 1, s2 = n3, c2 = n3 + 1;
      for (r3 = e3.charCodeAt(o2); r3 >= 48 && r3 <= 57; ) r3 = e3.charCodeAt(++o2);
      for (i3 = t2.charCodeAt(c2); i3 >= 48 && i3 <= 57; ) i3 = t2.charCodeAt(++c2);
      let l2 = e3.slice(a2, o2), u2 = t2.slice(s2, c2), d2 = Number(l2) - Number(u2);
      if (d2) return d2;
      if (l2 < u2) return -1;
      if (l2 > u2) return 1;
      continue;
    }
    if (r3 !== i3) return r3 - i3;
  }
  return e3.length - t2.length;
}
function Kn(e3) {
  if (e3[0] !== `[` || e3[e3.length - 1] !== `]`) return null;
  let t2 = 1, n2 = t2, r2 = e3.length - 1;
  for (; qn(e3.charCodeAt(t2)); ) t2++;
  for (n2 = t2; t2 < r2; t2++) {
    let n3 = e3.charCodeAt(t2);
    if (n3 === 92) {
      t2++;
      continue;
    }
    if (!(n3 >= 65 && n3 <= 90) && !(n3 >= 97 && n3 <= 122) && !(n3 >= 48 && n3 <= 57) && !(n3 === 45 || n3 === 95)) break;
  }
  if (n2 === t2) return null;
  let i2 = e3.slice(n2, t2);
  for (; qn(e3.charCodeAt(t2)); ) t2++;
  if (t2 === r2) return { attribute: i2, operator: null, quote: null, value: null, sensitivity: null };
  let a2 = null, o2 = e3.charCodeAt(t2);
  if (o2 === 61) a2 = `=`, t2++;
  else if ((o2 === 126 || o2 === 124 || o2 === 94 || o2 === 36 || o2 === 42) && e3.charCodeAt(t2 + 1) === 61) a2 = e3[t2] + `=`, t2 += 2;
  else return null;
  for (; qn(e3.charCodeAt(t2)); ) t2++;
  if (t2 === r2) return null;
  let s2 = ``, c2 = null;
  if (o2 = e3.charCodeAt(t2), o2 === 39 || o2 === 34) {
    c2 = e3[t2], t2++, n2 = t2;
    for (let n3 = t2; n3 < r2; n3++) {
      let r3 = e3.charCodeAt(n3);
      r3 === o2 ? t2 = n3 + 1 : r3 === 92 && n3++;
    }
    s2 = e3.slice(n2, t2 - 1);
  } else {
    for (n2 = t2; t2 < r2 && !qn(e3.charCodeAt(t2)); ) t2++;
    s2 = e3.slice(n2, t2);
  }
  for (; qn(e3.charCodeAt(t2)); ) t2++;
  if (t2 === r2) return { attribute: i2, operator: a2, quote: c2, value: s2, sensitivity: null };
  let l2 = null;
  switch (e3.charCodeAt(t2)) {
    case 105:
    case 73:
      l2 = `i`, t2++;
      break;
    case 115:
    case 83:
      l2 = `s`, t2++;
      break;
    default:
      return null;
  }
  for (; qn(e3.charCodeAt(t2)); ) t2++;
  return t2 === r2 ? { attribute: i2, operator: a2, quote: c2, value: s2, sensitivity: l2 } : null;
}
function qn(e3) {
  switch (e3) {
    case 32:
    case 9:
    case 10:
    case 13:
      return true;
    default:
      return false;
  }
}
function Jn(e3, t2 = null) {
  return Array.isArray(e3) && e3.length === 2 && typeof e3[1] == `object` ? t2 ? e3[1][t2] ?? null : e3[0] : Array.isArray(e3) && t2 === null ? e3.join(`, `) : typeof e3 == `string` && t2 === null ? e3 : null;
}
function Yn(e3, { theme: t2 }, n2) {
  for (let t3 of n2) {
    let n3 = er([t3]);
    n3 && e3.theme.clearNamespace(`--${n3}`, 4);
  }
  for (let [n3, r2] of Xn(t2)) {
    if (typeof r2 != `string` && typeof r2 != `number`) continue;
    if (typeof r2 == `string` && (r2 = r2.replace(/<alpha-value>/g, `1`)), n3[0] === `opacity` && (typeof r2 == `number` || typeof r2 == `string`)) {
      let e4 = typeof r2 == `string` ? parseFloat(r2) : r2;
      e4 >= 0 && e4 <= 1 && (r2 = e4 * 100 + `%`);
    }
    let t3 = er(n3);
    t3 && e3.theme.add(`--${t3}`, `` + r2, 7);
  }
  if (Object.hasOwn(t2, `fontFamily`)) {
    {
      let n3 = Jn(t2.fontFamily.sans);
      n3 && e3.theme.hasDefault(`--font-sans`) && (e3.theme.add(`--default-font-family`, n3, 5), e3.theme.add(`--default-font-feature-settings`, Jn(t2.fontFamily.sans, `fontFeatureSettings`) ?? `normal`, 5), e3.theme.add(`--default-font-variation-settings`, Jn(t2.fontFamily.sans, `fontVariationSettings`) ?? `normal`, 5));
    }
    {
      let n3 = Jn(t2.fontFamily.mono);
      n3 && e3.theme.hasDefault(`--font-mono`) && (e3.theme.add(`--default-mono-font-family`, n3, 5), e3.theme.add(`--default-mono-font-feature-settings`, Jn(t2.fontFamily.mono, `fontFeatureSettings`) ?? `normal`, 5), e3.theme.add(`--default-mono-font-variation-settings`, Jn(t2.fontFamily.mono, `fontVariationSettings`) ?? `normal`, 5));
    }
  }
  return t2;
}
function Xn(e3) {
  let t2 = [];
  return rr(e3, [], (e4, n2) => {
    if (tr(e4)) return t2.push([n2, e4]), 1;
    if (nr(e4)) {
      t2.push([n2, e4[0]]);
      for (let r2 of Reflect.ownKeys(e4[1])) t2.push([[...n2, `-${r2}`], e4[1][r2]]);
      return 1;
    }
    if (Array.isArray(e4) && e4.every((e5) => typeof e5 == `string`)) return n2[0] === `fontSize` ? (t2.push([n2, e4[0]]), e4.length >= 2 && t2.push([[...n2, `-line-height`], e4[1]])) : t2.push([n2, e4.join(`, `)]), 1;
  }), t2;
}
var Zn = { borderWidth: `border-width`, outlineWidth: `outline-width`, ringColor: `ring-color`, ringWidth: `ring-width`, transitionDuration: `transition-duration`, transitionTimingFunction: `transition-timing-function` }, Qn = { animation: `animate`, aspectRatio: `aspect`, borderRadius: `radius`, boxShadow: `shadow`, colors: `color`, containers: `container`, fontFamily: `font`, fontSize: `text`, letterSpacing: `tracking`, lineHeight: `leading`, maxWidth: `container`, screens: `breakpoint`, transitionTimingFunction: `ease` }, $n = /^[a-zA-Z0-9-_%/.]+$/;
function er(e3) {
  let t2 = Zn[e3[0]];
  if (t2 && e3[1] === `DEFAULT`) return `default-${t2}`;
  if (e3[0] === `container`) return null;
  for (let t3 of e3) if (!$n.test(t3)) return null;
  let n2 = Qn[e3[0]];
  return n2 && (e3 = e3.slice(), e3[0] = n2), e3.map((e4, t3, n3) => e4 === `1` && t3 !== n3.length - 1 ? `` : e4).map((e4, t3) => (e4 = e4.replaceAll(`.`, `_`), (t3 === 0 || e4.startsWith(`-`) || e4 === `lineHeight`) && (e4 = e4.replace(/([a-z])([A-Z])/g, (e5, t4, n3) => `${t4}-${n3.toLowerCase()}`)), e4)).filter((t3, n3) => t3 !== `DEFAULT` || n3 !== e3.length - 1).join(`-`);
}
function tr(e3) {
  return typeof e3 == `number` || typeof e3 == `string`;
}
function nr(e3) {
  if (!Array.isArray(e3) || e3.length !== 2 || typeof e3[0] != `string` && typeof e3[0] != `number` || e3[1] === void 0 || e3[1] === null || typeof e3[1] != `object`) return false;
  for (let t2 of Reflect.ownKeys(e3[1])) if (typeof t2 != `string` || typeof e3[1][t2] != `string` && typeof e3[1][t2] != `number`) return false;
  return true;
}
function rr(e3, t2 = [], n2) {
  for (let r2 of Reflect.ownKeys(e3)) {
    let i2 = e3[r2];
    if (i2 == null) continue;
    let a2 = [...t2, r2], o2 = n2(i2, a2) ?? 0;
    if (o2 !== 1 && (o2 === 2 || !(!Array.isArray(i2) && typeof i2 != `object`) && rr(i2, a2, n2) === 2)) return 2;
  }
}
var ir = /^(?<value>[-+]?(?:\d*\.)?\d+)(?<unit>[a-z]+|%)?$/i, ar = new M((e3) => {
  let t2 = ir.exec(e3);
  if (!t2) return null;
  let n2 = t2.groups?.value;
  if (n2 === void 0) return null;
  let r2 = Number(n2);
  if (Number.isNaN(r2)) return null;
  let i2 = t2.groups?.unit;
  return i2 === void 0 ? [r2, null] : [r2, i2];
});
function or(e3, t2 = null) {
  let n2 = false, r2 = F(e3);
  return L(r2, { exit(e4) {
    if (e4.kind === `word` && e4.value !== `0`) {
      let r3 = sr(e4.value, t2);
      return r3 === null || r3 === e4.value ? void 0 : (n2 = true, I.ReplaceSkip(N(r3)));
    } else if (e4.kind === `function` && (e4.value === `calc` || e4.value === ``)) {
      if (e4.nodes.length !== 5) return;
      let t3 = ar.get(e4.nodes[0].value), r3 = e4.nodes[2].value, i2 = ar.get(e4.nodes[4].value);
      if (r3 === `*` && (t3?.[0] === 0 && t3?.[1] === null || i2?.[0] === 0 && i2?.[1] === null)) return n2 = true, I.ReplaceSkip(N(`0`));
      if (t3 === null || i2 === null) return;
      switch (r3) {
        case `*`:
          if (t3[1] === i2[1] || t3[1] === null && i2[1] !== null || t3[1] !== null && i2[1] === null) return n2 = true, I.ReplaceSkip(N(`${t3[0] * i2[0]}${t3[1] ?? ``}`));
          break;
        case `+`:
          if (t3[1] === i2[1]) return n2 = true, I.ReplaceSkip(N(`${t3[0] + i2[0]}${t3[1] ?? ``}`));
          break;
        case `-`:
          if (t3[1] === i2[1]) return n2 = true, I.ReplaceSkip(N(`${t3[0] - i2[0]}${t3[1] ?? ``}`));
          break;
        case `/`:
          if (i2[0] !== 0 && (t3[1] === null && i2[1] === null || t3[1] !== null && i2[1] === null)) return n2 = true, I.ReplaceSkip(N(`${t3[0] / i2[0]}${t3[1] ?? ``}`));
          break;
      }
    }
  } }), n2 ? P(r2) : e3;
}
function sr(e3, t2 = null) {
  let n2 = ar.get(e3);
  if (n2 === null) return null;
  let [r2, i2] = n2;
  if (i2 === null) return `${r2}`;
  if (r2 === 0 && ue(e3)) return `0`;
  switch (i2.toLowerCase()) {
    case `in`:
      return `${r2 * 96}px`;
    case `cm`:
      return `${r2 * 96 / 2.54}px`;
    case `mm`:
      return `${r2 * 96 / 2.54 / 10}px`;
    case `q`:
      return `${r2 * 96 / 2.54 / 10 / 4}px`;
    case `pc`:
      return `${r2 * 96 / 6}px`;
    case `pt`:
      return `${r2 * 96 / 72}px`;
    case `rem`:
      return t2 === null ? null : `${r2 * t2}px`;
    case `grad`:
      return `${r2 * 0.9}deg`;
    case `rad`:
      return `${r2 * 180 / Math.PI}deg`;
    case `turn`:
      return `${r2 * 360}deg`;
    case `ms`:
      return `${r2 / 1e3}s`;
    case `khz`:
      return `${r2 * 1e3}hz`;
    default:
      return `${r2}${i2}`;
  }
}
function cr(e3, t2 = `top`, n2 = `right`, r2 = `bottom`, i2 = `left`) {
  return lr(`${e3}-${t2}`, `${e3}-${n2}`, `${e3}-${r2}`, `${e3}-${i2}`);
}
function lr(e3 = `top`, t2 = `right`, n2 = `bottom`, r2 = `left`) {
  return { 1: [[e3, 0], [t2, 0], [n2, 0], [r2, 0]], 2: [[e3, 0], [t2, 1], [n2, 0], [r2, 1]], 3: [[e3, 0], [t2, 1], [n2, 2], [r2, 1]], 4: [[e3, 0], [t2, 1], [n2, 2], [r2, 3]] };
}
function ur(e3, t2) {
  return { 1: [[e3, 0], [t2, 0]], 2: [[e3, 0], [t2, 1]] };
}
var dr = { inset: lr(), margin: cr(`margin`), padding: cr(`padding`), gap: ur(`row-gap`, `column-gap`) }, fr = { "inset-block": ur(`top`, `bottom`), "inset-inline": ur(`left`, `right`), "margin-block": ur(`margin-top`, `margin-bottom`), "margin-inline": ur(`margin-left`, `margin-right`), "padding-block": ur(`padding-top`, `padding-bottom`), "padding-inline": ur(`padding-left`, `padding-right`) }, pr = { "border-block": [`border-bottom`, `border-top`], "border-block-color": [`border-bottom-color`, `border-top-color`], "border-block-style": [`border-bottom-style`, `border-top-style`], "border-block-width": [`border-bottom-width`, `border-top-width`], "border-inline": [`border-left`, `border-right`], "border-inline-color": [`border-left-color`, `border-right-color`], "border-inline-style": [`border-left-style`, `border-right-style`], "border-inline-width": [`border-left-width`, `border-right-width`] };
function mr(e3, t2) {
  if (t2 & 2) {
    if (e3.property in fr) {
      let t3 = g(e3.value, ` `);
      return fr[e3.property][t3.length]?.map(([n2, r2]) => V(n2, t3[r2], e3.important));
    }
    if (e3.property in pr) return pr[e3.property]?.map((t3) => V(t3, e3.value, e3.important));
  }
  if (e3.property in dr) {
    let t3 = g(e3.value, ` `);
    return dr[e3.property][t3.length]?.map(([n2, r2]) => V(n2, t3[r2], e3.important));
  }
  return null;
}
function hr(e3) {
  return { kind: `combinator`, value: e3 };
}
function gr(e3, t2) {
  return { kind: `function`, value: e3, nodes: t2 };
}
function _r(e3) {
  return { kind: `selector`, value: e3 };
}
function vr(e3) {
  return { kind: `separator`, value: e3 };
}
function yr(e3) {
  return { kind: `value`, value: e3 };
}
function br(e3) {
  let t2 = ``;
  for (let n2 of e3) switch (n2.kind) {
    case `combinator`:
    case `selector`:
    case `separator`:
    case `value`:
      t2 += n2.value;
      break;
    case `function`:
      t2 += n2.value + `(` + br(n2.nodes) + `)`;
  }
  return t2;
}
var xr = 92, Sr = 93, Cr = 41, wr = 58, Tr = 44, Er = 34, Dr = 46, Or = 62, kr = 10, Ar = 35, jr = 91, Mr = 40, Nr = 43, Pr = 39, Fr = 32, Ir = 9, Lr = 126, Rr = 38, zr = 42;
function Br(e3) {
  e3 = e3.replaceAll(`\r
`, `
`);
  let t2 = [], n2 = [], r2 = null, i2 = ``, a2;
  for (let o2 = 0; o2 < e3.length; o2++) {
    let s2 = e3.charCodeAt(o2);
    switch (s2) {
      case Tr:
      case Or:
      case kr:
      case Fr:
      case Nr:
      case Ir:
      case Lr: {
        if (i2.length > 0) {
          let e4 = _r(i2);
          r2 ? r2.nodes.push(e4) : t2.push(e4), i2 = ``;
        }
        let n3 = o2, s3 = o2 + 1;
        for (; s3 < e3.length && (a2 = e3.charCodeAt(s3), !(a2 !== Tr && a2 !== Or && a2 !== kr && a2 !== Fr && a2 !== Nr && a2 !== Ir && a2 !== Lr)); s3++) ;
        o2 = s3 - 1;
        let c2 = e3.slice(n3, s3), l2 = c2.trim() === `,` ? vr(c2) : hr(c2);
        r2 ? r2.nodes.push(l2) : t2.push(l2);
        break;
      }
      case Mr: {
        let s3 = gr(i2, []);
        if (i2 = ``, s3.value !== `:not` && s3.value !== `:where` && s3.value !== `:has` && s3.value !== `:is`) {
          let n3 = o2 + 1, c2 = 0;
          for (let t3 = o2 + 1; t3 < e3.length; t3++) {
            if (a2 = e3.charCodeAt(t3), a2 === Mr) {
              c2++;
              continue;
            }
            if (a2 === Cr) {
              if (c2 === 0) {
                o2 = t3;
                break;
              }
              c2--;
            }
          }
          let l2 = o2;
          s3.nodes.push(yr(e3.slice(n3, l2))), i2 = ``, o2 = l2, r2 ? r2.nodes.push(s3) : t2.push(s3);
          break;
        }
        r2 ? r2.nodes.push(s3) : t2.push(s3), n2.push(s3), r2 = s3;
        break;
      }
      case Cr: {
        let e4 = n2.pop();
        if (i2.length > 0) {
          let t3 = _r(i2);
          e4.nodes.push(t3), i2 = ``;
        }
        r2 = n2.length > 0 ? n2[n2.length - 1] : null;
        break;
      }
      case Dr:
      case wr:
      case Ar:
        if (i2.length > 0) {
          let e4 = _r(i2);
          r2 ? r2.nodes.push(e4) : t2.push(e4);
        }
        i2 = e3[o2];
        break;
      case jr: {
        if (i2.length > 0) {
          let e4 = _r(i2);
          r2 ? r2.nodes.push(e4) : t2.push(e4);
        }
        i2 = ``;
        let n3 = o2, s3 = 0;
        for (let t3 = o2 + 1; t3 < e3.length; t3++) {
          if (a2 = e3.charCodeAt(t3), a2 === jr) {
            s3++;
            continue;
          }
          if (a2 === Sr) {
            if (s3 === 0) {
              o2 = t3;
              break;
            }
            s3--;
          }
        }
        i2 += e3.slice(n3, o2 + 1);
        break;
      }
      case Pr:
      case Er: {
        let t3 = o2;
        for (let t4 = o2 + 1; t4 < e3.length; t4++) if (a2 = e3.charCodeAt(t4), a2 === xr) t4 += 1;
        else if (a2 === s2) {
          o2 = t4;
          break;
        }
        i2 += e3.slice(t3, o2 + 1);
        break;
      }
      case Rr:
      case zr:
        if (i2.length > 0) {
          let e4 = _r(i2);
          r2 ? r2.nodes.push(e4) : t2.push(e4), i2 = ``;
        }
        r2 ? r2.nodes.push(_r(e3[o2])) : t2.push(_r(e3[o2]));
        break;
      case xr:
        i2 += e3[o2] + e3[o2 + 1], o2 += 1;
        break;
      default:
        i2 += e3[o2];
    }
  }
  return i2.length > 0 && t2.push(_r(i2)), t2;
}
function Y(e3, t2) {
  for (let t3 in e3) delete e3[t3];
  return Object.assign(e3, t2);
}
function Vr(e3) {
  let t2 = [];
  for (let n2 of g(e3, `.`)) {
    if (!n2.includes(`[`)) {
      t2.push(n2);
      continue;
    }
    let e4 = 0;
    for (; ; ) {
      let r2 = n2.indexOf(`[`, e4), i2 = n2.indexOf(`]`, r2);
      if (r2 === -1 || i2 === -1) break;
      r2 > e4 && t2.push(n2.slice(e4, r2)), t2.push(n2.slice(r2 + 1, i2)), e4 = i2 + 1;
    }
    e4 <= n2.length - 1 && t2.push(n2.slice(e4));
  }
  return t2;
}
function Hr(e3, t2) {
  var _a3, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l, _m;
  let n2 = e3;
  return (_a3 = n2.storage)[Ur] ?? (_a3[Ur] = Wr()), (_b = n2.storage)[Kr] ?? (_b[Kr] = qr(n2)), (_c = n2.storage)[Zr] ?? (_c[Zr] = Qr()), (_d = n2.storage)[ei] ?? (_d[ei] = ti()), (_e2 = n2.storage)[ri] ?? (_e2[ri] = ii()), (_f = n2.storage)[di] ?? (_f[di] = fi(n2)), (_g = n2.storage)[_i] ?? (_g[_i] = vi(n2, t2)), (_h = n2.storage)[Z] ?? (_h[Z] = Ni(n2)), (_i2 = n2.storage)[Ii] ?? (_i2[Ii] = Li()), (_j = n2.storage)[Ri] ?? (_j[Ri] = zi(n2)), (_k = n2.storage)[Bi] ?? (_k[Bi] = Vi(n2)), (_l = n2.storage)[Hi] ?? (_l[Hi] = Ui(n2)), (_m = n2.storage)[Wi] ?? (_m[Wi] = Gi(n2)), n2;
}
var Ur = /* @__PURE__ */ Symbol();
function Wr() {
  return new M((e3) => new M((t2) => ({ rem: e3, features: t2 })));
}
function Gr(e3, t2) {
  let n2 = 0;
  return t2?.collapse && (n2 |= 1), t2?.logicalToPhysical && (n2 |= 2), Hr(e3, t2).storage[Ur].get(t2?.rem ?? null).get(n2);
}
var Kr = /* @__PURE__ */ Symbol();
function qr(e3) {
  return new M((t2) => new M((n2) => ({ features: n2, designSystem: e3, signatureOptions: t2 })));
}
function Jr(e3, t2, n2) {
  let r2 = 0;
  return n2?.collapse && (r2 |= 1), Hr(e3).storage[Kr].get(t2).get(r2);
}
function Yr(e3, t2, n2) {
  let r2 = Jr(e3, Gr(e3, n2), n2), i2 = Hr(e3), a2 = /* @__PURE__ */ new Set(), o2 = i2.storage[Zr].get(r2);
  for (let e4 of t2) a2.add(o2.get(e4));
  return a2.size <= 1 || !(r2.features & 1) ? Array.from(a2) : Xr(r2, Array.from(a2));
}
function Xr(e3, t2) {
  if (t2.length <= 1) return t2;
  let n2 = e3.designSystem, r2 = new M((e4) => new M((e5) => /* @__PURE__ */ new Set())), i2 = e3.designSystem.theme.prefix ? `${e3.designSystem.theme.prefix}:` : ``;
  for (let e4 of t2) {
    let t3 = g(e4, `:`), n3 = t3.pop(), a3 = n3.endsWith(`!`);
    a3 && (n3 = n3.slice(0, -1));
    let o3 = t3.length > 0 ? `${t3.join(`:`)}:` : ``, s2 = a3 ? `!` : ``;
    r2.get(o3).get(s2).add(`${i2}${n3}`);
  }
  let a2 = /* @__PURE__ */ new Set();
  for (let [e4, t3] of r2.entries()) for (let [n3, r3] of t3.entries()) for (let t4 of o2(Array.from(r3))) i2 && t4.startsWith(i2) && (t4 = t4.slice(i2.length)), a2.add(`${e4}${t4}${n3}`);
  return Array.from(a2);
  function o2(t3) {
    let r3 = e3.signatureOptions, i3 = n2.storage[Ri].get(r3), a3 = n2.storage[Ii].get(r3), o3 = t3.map((e4) => i3.get(e4));
    if (o3.some((e4) => e4.has(`line-height`))) {
      let e4 = n2.theme.keysInNamespaces([`--text`]);
      if (e4.length > 0) {
        let t4 = /* @__PURE__ */ new Set(), r4 = /* @__PURE__ */ new Set();
        for (let a5 of o3) if (a5.has(`line-height`)) for (let o4 of a5.get(`line-height`)) {
          if (r4.has(o4)) continue;
          r4.add(o4);
          let a6 = n2.storage[_i]?.get(o4) ?? null;
          if (a6 !== null) if (O(a6)) {
            t4.add(a6);
            for (let t5 of e4) i3.get(`text-${t5}/${a6}`);
          } else {
            t4.add(o4);
            for (let t5 of e4) i3.get(`text-${t5}/[${o4}]`);
          }
        }
        let a4 = /* @__PURE__ */ new Set();
        for (let e5 of o3) if (e5.has(`font-size`)) {
          for (let n3 of e5.get(`font-size`)) if (!a4.has(n3)) {
            a4.add(n3);
            for (let e6 of t4) O(e6) ? i3.get(`text-[${n3}]/${e6}`) : i3.get(`text-[${n3}]/[${e6}]`);
          }
        }
      }
    }
    let s2 = new M((e4) => {
      let t4 = new M((e5) => new M((e6) => /* @__PURE__ */ new Set())), r4 = new Set(i3.get(e4).keys());
      if (r4.size === 0) return t4;
      for (let a4 of X(n2, e4)) if (!(a4.kind !== `functional` || a4.value?.kind !== `named`)) {
        for (let e5 of n2.utilities.keys(`functional`)) {
          if (e5 === a4.root) continue;
          let o4 = gi(n2, { ...Ht(a4), root: e5 }), s3 = i3.get(o4);
          for (let [e6, n3] of s3) if (r4.has(e6)) for (let r5 of n3) t4.get(e6).get(r5).add(o4);
        }
        return t4;
      }
      return t4;
    }), c2 = o3.map((e4, n3) => {
      let r4 = null;
      for (let i4 of e4.keys()) {
        let o4 = /* @__PURE__ */ new Set();
        for (let e5 of a3.get(i4).values()) for (let t4 of e5) o4.add(t4);
        for (let r5 of e4.get(i4)) for (let e5 of s2.get(t3[n3]).get(i4).get(r5)) o4.add(e5);
        if (r4 = r4 === null ? o4 : Ji(r4, o4), r4.size === 0) return r4;
      }
      return r4 ?? /* @__PURE__ */ new Set();
    }), l2 = new M((e4) => /* @__PURE__ */ new Set([e4]));
    for (let e4 = 0; e4 < c2.length; e4++) {
      let t4 = c2[e4];
      for (let n3 = e4 + 1; n3 < c2.length; n3++) {
        let r4 = c2[n3];
        for (let i4 of t4) if (r4.has(i4)) {
          l2.get(e4).add(n3), l2.get(n3).add(e4);
          break;
        }
      }
    }
    if (l2.size === 0) return t3;
    let u2 = new M((e4) => e4.split(`,`).map(Number));
    for (let e4 of l2.values()) {
      let t4 = Array.from(e4).sort((e5, t5) => e5 - t5);
      u2.get(t4.join(`,`));
    }
    let d2 = new Set(t3), f2 = /* @__PURE__ */ new Set();
    for (let e4 of u2.values()) for (let i4 of qi(e4)) {
      if (i4.some((e6) => f2.has(t3[e6]))) continue;
      let e5 = i4.flatMap((e6) => c2[e6]).reduce(Ji), a4 = n2.storage[Z].get(r3).get(i4.map((e6) => t3[e6]).sort((e6, t4) => e6.localeCompare(t4)).join(` `));
      for (let o4 of e5) if (n2.storage[Z].get(r3).get(o4) === a4) {
        d2.add(o4);
        for (let e6 of i4) t3[e6] !== o4 && f2.add(t3[e6]);
        break;
      }
    }
    for (let e4 of f2) d2.delete(e4);
    return Array.from(d2);
  }
}
var Zr = /* @__PURE__ */ Symbol();
function Qr() {
  return new M((e3) => {
    let t2 = e3.designSystem, n2 = t2.theme.prefix ? `${t2.theme.prefix}:` : ``, r2 = t2.storage[ei].get(e3), i2 = t2.storage[ri].get(e3);
    return new M((e4, a2) => {
      for (let o2 of t2.parseCandidate(e4)) {
        let s2 = o2.variants.slice().reverse().flatMap((e5) => r2.get(e5)), c2 = o2.important;
        if (c2 || s2.length > 0) {
          let e5 = a2.get(t2.printCandidate({ ...o2, variants: [], important: false }));
          return t2.theme.prefix !== null && s2.length > 0 && (e5 = e5.slice(n2.length)), s2.length > 0 && (e5 = `${s2.map((e6) => t2.printVariant(e6)).join(`:`)}:${e5}`), c2 && (e5 += `!`), t2.theme.prefix !== null && s2.length > 0 && (e5 = `${n2}${e5}`), e5;
        }
        let l2 = i2.get(e4);
        if (l2 !== e4) return l2;
      }
      return e4;
    });
  });
}
var $r = [ci, Di, ji, wi], ei = /* @__PURE__ */ Symbol();
function ti() {
  return new M((e3) => new M((t2) => {
    let n2 = [t2];
    for (let t3 of $r) for (let r2 of n2.splice(0)) {
      let i2 = t3(Ut(r2), e3);
      if (Array.isArray(i2)) {
        n2.push(...i2);
        continue;
      } else n2.push(i2);
    }
    return n2;
  }));
}
var ni = [oi, si, li, yi, xi, Ci, Ti, Ei, Mi], ri = /* @__PURE__ */ Symbol();
function ii() {
  return new M((e3) => {
    let t2 = e3.designSystem;
    return new M((n2) => {
      for (let r2 of t2.parseCandidate(n2)) {
        let i2 = Ht(r2);
        for (let t3 of ni) i2 = t3(i2, e3);
        let a2 = t2.printCandidate(i2);
        if (n2 !== a2) return a2;
      }
      return n2;
    });
  });
}
var ai = [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`];
function oi(e3) {
  if (e3.kind === `static` && e3.root.startsWith(`bg-gradient-to-`)) {
    let t2 = e3.root.slice(15);
    return ai.includes(t2) && (e3.root = `bg-linear-to-${t2}`), e3;
  }
  return e3;
}
function si(e3, t2) {
  let n2 = t2.designSystem.storage[di];
  if (e3.kind === `arbitrary`) {
    let [t3, r2] = n2(e3.value, +(e3.modifier === null));
    t3 !== e3.value && (e3.value = t3, r2 !== null && (e3.modifier = r2));
  } else if (e3.kind === `functional` && e3.value?.kind === `arbitrary`) {
    let [t3, r2] = n2(e3.value.value, +(e3.modifier === null));
    t3 !== e3.value.value && (e3.value.value = t3, r2 !== null && (e3.modifier = r2));
  }
  return e3;
}
function ci(e3, t2) {
  let n2 = t2.designSystem.storage[di], r2 = hi(e3);
  for (let [e4] of r2) if (e4.kind === `arbitrary`) {
    let [t3] = n2(e4.selector, 2);
    t3 !== e4.selector && (e4.selector = t3);
  } else if (e4.kind === `functional` && e4.value?.kind === `arbitrary`) {
    let [t3] = n2(e4.value.value, 2);
    t3 !== e4.value.value && (e4.value.value = t3);
  }
  return e3;
}
function li(e3, t2) {
  return e3.kind === `arbitrary` ? e3.value = ui(e3.value, t2.designSystem) : e3.kind === `functional` && e3.value?.kind === `arbitrary` && (e3.value.value = ui(e3.value.value, t2.designSystem)), e3;
}
function ui(e3, t2) {
  let n2 = t2.theme.prefix ? `--${t2.theme.prefix}-spacing` : `--spacing`, r2 = F(e3);
  return L(r2, (e4) => {
    if (!(e4.kind !== `function` || e4.value !== `calc`) && e4.nodes.length === 5 && !(e4.nodes[2].kind !== `word` || e4.nodes[2].value !== `*`) && !(e4.nodes[0].kind !== `function` || e4.nodes[0].value !== `var` || e4.nodes[0].nodes.length !== 1 || e4.nodes[0].nodes[0].kind !== `word` || e4.nodes[0].nodes[0].value !== n2)) return I.Replace(F(`--spacing(${P([e4.nodes[4]])})`));
  }), P(r2);
}
var di = /* @__PURE__ */ Symbol();
function fi(e3) {
  return t2(e3);
  function t2(e4) {
    function t3(e5, t4 = 0) {
      let n3 = F(e5);
      if (t4 & 2) return [pi(n3, i2), null];
      let a2 = 0, o2 = 0;
      if (L(n3, (e6) => {
        e6.kind === `function` && e6.value === `theme` && (a2 += 1, L(e6.nodes, (e7) => e7.kind === `separator` && e7.value.includes(`,`) ? I.Stop : e7.kind === `word` && e7.value === `/` ? (o2 += 1, I.Stop) : I.Skip));
      }), a2 === 0) return [e5, null];
      if (o2 === 0) return [pi(n3, r2), null];
      if (o2 > 1) return [pi(n3, i2), null];
      let s2 = null;
      return [pi(n3, (e6, a3) => {
        let o3 = g(e6, `/`).map((e7) => e7.trim());
        if (o3.length > 2) return null;
        if (n3.length === 1 && o3.length === 2 && t4 & 1) {
          let [t5, n4] = o3;
          if (/^\d+%$/.test(n4)) s2 = { kind: `named`, value: n4.slice(0, -1) };
          else if (/^0?\.\d+$/.test(n4)) {
            let e7 = Number(n4) * 100;
            s2 = { kind: Number.isInteger(e7) ? `named` : `arbitrary`, value: e7.toString() };
          } else s2 = { kind: `arbitrary`, value: n4 };
          e6 = t5;
        }
        return r2(e6, a3) || i2(e6, a3);
      }), s2];
    }
    function n2(t4, n3 = true) {
      let r3 = `--${er(Vr(t4))}`;
      return e4.theme.get([r3]) ? n3 && e4.theme.prefix ? `--${e4.theme.prefix}-${r3.slice(2)}` : r3 : null;
    }
    function r2(t4, r3) {
      let i3 = n2(t4);
      if (i3) return r3 ? `var(${i3}, ${r3})` : `var(${i3})`;
      let a2 = Vr(t4);
      if (a2[0] === `spacing` && e4.theme.get([`--spacing`])) {
        let e5 = a2[1];
        return O(e5) ? `--spacing(${e5})` : null;
      }
      return null;
    }
    function i2(e5, t4) {
      let r3 = g(e5, `/`).map((e6) => e6.trim());
      e5 = r3.shift();
      let i3 = n2(e5, false);
      if (!i3) return null;
      let a2 = r3.length > 0 ? `/${r3.join(`/`)}` : ``;
      return t4 ? `--theme(${i3}${a2}, ${t4})` : `--theme(${i3}${a2})`;
    }
    return t3;
  }
}
function pi(e3, t2) {
  return L(e3, (e4, n2) => {
    if (e4.kind === `function` && e4.value === `theme`) {
      if (e4.nodes.length < 1) return;
      e4.nodes[0].kind === `separator` && e4.nodes[0].value.trim() === `` && e4.nodes.shift();
      let r2 = e4.nodes[0];
      if (r2.kind !== `word`) return;
      let i2 = r2.value, a2 = 1;
      for (let t3 = a2; t3 < e4.nodes.length && !e4.nodes[t3].value.includes(`,`); t3++) i2 += P([e4.nodes[t3]]), a2 = t3 + 1;
      i2 = mi(i2);
      let o2 = e4.nodes.slice(a2 + 1), s2 = o2.length > 0 ? t2(i2, P(o2)) : t2(i2);
      if (s2 === null) return;
      if (n2.parent) {
        let t3 = n2.parent.nodes.indexOf(e4) - 1;
        for (; t3 !== -1; ) {
          let e5 = n2.parent.nodes[t3];
          if (e5.kind === `separator` && e5.value.trim() === ``) {
            --t3;
            continue;
          }
          /^[-+*/]$/.test(e5.value.trim()) && (s2 = `(${s2})`);
          break;
        }
      }
      return I.Replace(F(s2));
    }
  }), P(e3);
}
function mi(e3) {
  if (e3[0] !== `'` && e3[0] !== `"`) return e3;
  let t2 = ``, n2 = e3[0];
  for (let r2 = 1; r2 < e3.length - 1; r2++) {
    let i2 = e3[r2], a2 = e3[r2 + 1];
    i2 === `\\` && (a2 === n2 || a2 === `\\`) ? (t2 += a2, r2++) : t2 += i2;
  }
  return t2;
}
function* hi(e3) {
  function* t2(e4, n2 = null) {
    yield [e4, n2], e4.kind === `compound` && (yield* t2(e4.variant, e4));
  }
  yield* t2(e3, null);
}
function X(e3, t2) {
  return e3.parseCandidate(e3.theme.prefix && !t2.startsWith(`${e3.theme.prefix}:`) ? `${e3.theme.prefix}:${t2}` : t2);
}
function gi(e3, t2) {
  let n2 = e3.printCandidate(t2);
  return e3.theme.prefix && n2.startsWith(`${e3.theme.prefix}:`) ? n2.slice(e3.theme.prefix.length + 1) : n2;
}
var _i = /* @__PURE__ */ Symbol();
function vi(e3, t2) {
  let n2 = e3.resolveThemeValue(`--spacing`);
  if (n2 === void 0) return null;
  n2 = or(n2, t2?.rem ?? null);
  let r2 = ar.get(n2);
  if (!r2) return null;
  let [i2, a2] = r2;
  return new M((e4) => {
    if (i2 === 0) return null;
    let n3 = ar.get(or(e4, t2?.rem ?? null));
    if (!n3) return null;
    let [r3, o2] = n3;
    return o2 === a2 ? r3 / i2 : null;
  });
}
function yi(e3, t2) {
  if (e3.kind !== `arbitrary` && !(e3.kind === `functional` && e3.value?.kind === `arbitrary`)) return e3;
  let n2 = t2.designSystem, r2 = n2.storage[Bi].get(t2.signatureOptions), i2 = n2.storage[Z].get(t2.signatureOptions), a2 = n2.printCandidate(e3), o2 = i2.get(a2);
  if (typeof o2 != `string`) return e3;
  for (let t3 of s2(o2, e3)) {
    let r3 = n2.printCandidate(t3);
    if (i2.get(r3) === o2 && bi(n2, e3, t3)) return t3;
  }
  return e3;
  function* s2(e4, a3) {
    let o3 = r2.get(e4);
    if (!(o3.length > 1)) {
      if (o3.length === 0 && a3.modifier) {
        let e5 = { ...a3, modifier: null }, t3 = i2.get(n2.printCandidate(e5));
        if (typeof t3 == `string`) for (let n3 of s2(t3, e5)) yield Object.assign({}, n3, { modifier: a3.modifier });
      }
      if (o3.length === 1) for (let e5 of X(n2, o3[0])) yield e5;
      else if (o3.length === 0) {
        let e5 = a3.kind === `arbitrary` ? a3.value : a3.value?.value ?? null;
        if (e5 === null) return;
        if (t2.signatureOptions.rem !== null && a3.kind === `functional` && a3.value?.kind === `arbitrary`) {
          let t3 = n2.storage[_i]?.get(e5) ?? null;
          t3 !== null && O(t3) && (yield Object.assign({}, a3, { value: { kind: `named`, value: t3, fraction: null } }));
        }
        let r3 = n2.storage[_i]?.get(e5) ?? null, i3 = ``;
        r3 !== null && r3 < 0 && (i3 = `-`, r3 = Math.abs(r3));
        for (let t3 of Array.from(n2.utilities.keys(`functional`)).sort((e6, t4) => (e6[0] === `-`) - +(t4[0] === `-`))) {
          i3 && (t3 = `${i3}${t3}`);
          for (let r4 of X(n2, `${t3}-${e5}`)) yield r4;
          if (a3.modifier) for (let r4 of X(n2, `${t3}-${e5}${a3.modifier}`)) yield r4;
          if (r3 !== null) {
            for (let e6 of X(n2, `${t3}-${r3}`)) yield e6;
            if (a3.modifier) for (let e6 of X(n2, `${t3}-${r3}${Yt(a3.modifier)}`)) yield e6;
          }
          for (let r4 of X(n2, `${t3}-[${e5}]`)) yield r4;
          if (a3.modifier) for (let r4 of X(n2, `${t3}-[${e5}]${Yt(a3.modifier)}`)) yield r4;
        }
      }
    }
  }
}
function bi(e3, t2, n2) {
  let r2 = null;
  if (t2.kind === `functional` && t2.value?.kind === `arbitrary` && t2.value.value.includes(`var(--`) ? r2 = t2.value.value : t2.kind === `arbitrary` && t2.value.includes(`var(--`) && (r2 = t2.value), r2 === null) return true;
  let i2 = e3.candidatesToCss([e3.printCandidate(n2)]).join(`
`), a2 = true;
  return L(F(r2), (e4) => {
    if (e4.kind === `function` && e4.value === `var`) {
      let t3 = e4.nodes[0].value;
      if (!RegExp(`var\\(${t3}[,)]\\s*`, `g`).test(i2) || i2.includes(`${t3}:`)) return a2 = false, I.Stop;
    }
  }), a2;
}
function xi(e3, t2) {
  if (e3.kind !== `functional` || e3.value?.kind !== `named`) return e3;
  let n2 = t2.designSystem, r2 = n2.storage[Bi].get(t2.signatureOptions), i2 = n2.storage[Z].get(t2.signatureOptions), a2 = n2.printCandidate(e3), o2 = i2.get(a2);
  if (typeof o2 != `string`) return e3;
  for (let t3 of s2(o2, e3)) {
    let e4 = n2.printCandidate(t3);
    if (i2.get(e4) === o2) return t3;
  }
  return e3;
  function* s2(e4, t3) {
    let a3 = r2.get(e4);
    if (!(a3.length > 1)) {
      if (a3.length === 0 && t3.modifier) {
        let e5 = { ...t3, modifier: null }, r3 = i2.get(n2.printCandidate(e5));
        if (typeof r3 == `string`) for (let n3 of s2(r3, e5)) yield Object.assign({}, n3, { modifier: t3.modifier });
      }
      if (a3.length === 1) for (let e5 of X(n2, a3[0])) yield e5;
    }
  }
}
var Si = /* @__PURE__ */ new Map([[`order-none`, `order-0`], [`break-words`, `wrap-break-word`]]);
function Ci(e3, t2) {
  let n2 = t2.designSystem, r2 = n2.storage[Z].get(t2.signatureOptions), i2 = gi(n2, e3), a2 = Si.get(i2) ?? null;
  if (a2 === null) return e3;
  let o2 = r2.get(i2);
  if (typeof o2 != `string`) return e3;
  let s2 = r2.get(a2);
  if (typeof s2 != `string` || o2 !== s2) return e3;
  let [c2] = X(n2, a2);
  return c2;
}
function wi(e3, t2) {
  let n2 = t2.designSystem, r2 = n2.storage[Hi], i2 = n2.storage[Wi], a2 = hi(e3);
  for (let [e4] of a2) {
    if (e4.kind === `compound`) continue;
    let t3 = n2.printVariant(e4), a3 = r2.get(t3);
    if (typeof a3 != `string`) continue;
    let o2 = i2.get(a3);
    if (o2.length !== 1) continue;
    let s2 = o2[0], c2 = n2.parseVariant(s2);
    c2 !== null && Y(e4, c2);
  }
  return e3;
}
function Ti(e3, t2) {
  let n2 = t2.designSystem, r2 = n2.storage[Z].get(t2.signatureOptions);
  if (e3.kind === `functional` && e3.value?.kind === `arbitrary` && e3.value.dataType !== null) {
    let t3 = n2.printCandidate({ ...e3, value: { ...e3.value, dataType: null } });
    r2.get(n2.printCandidate(e3)) === r2.get(t3) && (e3.value.dataType = null);
  }
  return e3;
}
function Ei(e3, t2) {
  if (e3.kind !== `functional` || e3.value?.kind !== `arbitrary`) return e3;
  let n2 = t2.designSystem, r2 = n2.storage[Z].get(t2.signatureOptions), i2 = r2.get(n2.printCandidate(e3));
  if (i2 === null) return e3;
  for (let t3 of Oi(e3)) if (r2.get(n2.printCandidate({ ...e3, value: t3 })) === i2) return e3.value = t3, e3;
  return e3;
}
function Di(e3) {
  let t2 = hi(e3);
  for (let [e4] of t2) if (e4.kind === `functional` && e4.root === `data` && e4.value?.kind === `arbitrary` && !e4.value.value.includes(`=`)) e4.value = { kind: `named`, value: e4.value.value };
  else if (e4.kind === `functional` && e4.root === `aria` && e4.value?.kind === `arbitrary` && (e4.value.value.endsWith(`=true`) || e4.value.value.endsWith(`="true"`) || e4.value.value.endsWith(`='true'`))) {
    let [t3, n2] = g(e4.value.value, `=`);
    if (t3[t3.length - 1] === `~` || t3[t3.length - 1] === `|` || t3[t3.length - 1] === `^` || t3[t3.length - 1] === `$` || t3[t3.length - 1] === `*`) continue;
    e4.value = { kind: `named`, value: e4.value.value.slice(0, e4.value.value.indexOf(`=`)) };
  } else e4.kind === `functional` && e4.root === `supports` && e4.value?.kind === `arbitrary` && /^[a-z-][a-z0-9-]*$/i.test(e4.value.value) && (e4.value = { kind: `named`, value: e4.value.value });
  return e3;
}
function* Oi(e3, t2 = e3.value?.value ?? ``, n2 = /* @__PURE__ */ new Set()) {
  if (n2.has(t2)) return;
  if (n2.add(t2), yield { kind: `named`, value: t2, fraction: null }, t2.endsWith(`%`) && O(t2.slice(0, -1)) && (yield { kind: `named`, value: t2.slice(0, -1), fraction: null }), t2.includes(`/`)) {
    let [e4, n3] = t2.split(`/`);
    D(e4) && D(n3) && (yield { kind: `named`, value: e4, fraction: `${e4}/${n3}` });
  }
  let r2 = /* @__PURE__ */ new Set();
  for (let e4 of t2.matchAll(/(\d+\/\d+)|(\d+\.?\d+)/g)) r2.add(e4[0].trim());
  let i2 = Array.from(r2).sort((e4, t3) => e4.length - t3.length);
  for (let t3 of i2) yield* Oi(e3, t3, n2);
}
function ki(e3) {
  return !e3.some((e4) => e4.kind === `separator` && e4.value.trim() === `,`);
}
function Ai(e3) {
  let t2 = e3.value.trim();
  return e3.kind === `selector` && t2[0] === `[` && t2[t2.length - 1] === `]`;
}
function ji(e3, t2) {
  let n2 = [e3], r2 = t2.designSystem, i2 = r2.storage[Hi], a2 = hi(e3);
  for (let [e4, t3] of a2) if (e4.kind === `compound` && (e4.root === `has` || e4.root === `not` || e4.root === `in`) && e4.modifier !== null && `modifier` in e4.variant && (e4.variant.modifier = e4.modifier, e4.modifier = null), e4.kind === `arbitrary`) {
    if (e4.relative) continue;
    let n3 = Br(e4.selector.trim());
    if (!ki(n3)) continue;
    if (t3 === null && n3.length === 3 && n3[0].kind === `selector` && n3[0].value === `&` && n3[1].kind === `combinator` && n3[1].value.trim() === `>` && n3[2].kind === `selector` && n3[2].value === `*`) {
      Y(e4, r2.parseVariant(`*`));
      continue;
    }
    if (t3 === null && n3.length === 3 && n3[0].kind === `selector` && n3[0].value === `&` && n3[1].kind === `combinator` && n3[1].value.trim() === `` && n3[2].kind === `selector` && n3[2].value === `*`) {
      Y(e4, r2.parseVariant(`**`));
      continue;
    }
    if (t3 === null && n3.length === 3 && n3[1].kind === `combinator` && n3[1].value.trim() === `` && n3[2].kind === `selector` && n3[2].value === `&`) {
      n3.pop(), n3.pop(), Y(e4, r2.parseVariant(`in-[${br(n3)}]`));
      continue;
    }
    if (t3 === null && n3[0].kind === `selector` && (n3[0].value === `@media` || n3[0].value === `@supports`)) {
      let t4 = i2.get(r2.printVariant(e4)), a4 = F(br(n3)), o3 = false;
      if (L(a4, (e5) => {
        if (e5.kind === `word` && e5.value === `not`) return o3 = true, I.Replace([]);
      }), a4 = F(P(a4)), L(a4, (e5) => {
        e5.kind === `separator` && e5.value !== ` ` && e5.value.trim() === `` && (e5.value = ` `);
      }), o3) {
        let n4 = r2.parseVariant(`not-[${P(a4)}]`);
        if (n4 === null) continue;
        if (t4 === i2.get(r2.printVariant(n4))) {
          Y(e4, n4);
          continue;
        }
      }
    }
    let a3 = null;
    t3 === null && n3.length === 3 && n3[0].kind === `selector` && n3[0].value.trim() === `&` && n3[1].kind === `combinator` && n3[1].value.trim() === `>` && n3[2].kind === `selector` && (Ai(n3[2]) || n3[2].value[0] === `:`) && (n3 = [n3[2]], a3 = r2.parseVariant(`*`)), t3 === null && n3.length === 3 && n3[0].kind === `selector` && n3[0].value.trim() === `&` && n3[1].kind === `combinator` && n3[1].value.trim() === `` && n3[2].kind === `selector` && (Ai(n3[2]) || n3[2].value[0] === `:`) && (n3 = [n3[2]], a3 = r2.parseVariant(`**`));
    let o2 = n3.filter((e5) => !(e5.kind === `selector` && e5.value.trim() === `&`));
    if (o2.length !== 1) continue;
    let s2 = o2[0];
    if (s2.kind === `function` && s2.value === `:is`) {
      if (!ki(s2.nodes) || s2.nodes.length !== 1 || !Ai(s2.nodes[0])) continue;
      s2 = s2.nodes[0];
    }
    if (s2.kind === `function` && s2.value[0] === `:` || s2.kind === `selector` && s2.value[0] === `:`) {
      let t4 = s2, n4 = false;
      if (t4.kind === `function` && t4.value === `:not`) {
        if (n4 = true, t4.nodes.length !== 1 || t4.nodes[0].kind !== `selector` && t4.nodes[0].kind !== `function` || t4.nodes[0].value[0] !== `:`) continue;
        t4 = t4.nodes[0];
      }
      let o3 = ((a4) => {
        if (a4 === `:nth-child` && t4.kind === `function` && t4.nodes.length === 1 && t4.nodes[0].kind === `value` && t4.nodes[0].value === `odd`) return n4 ? (n4 = false, `even`) : `odd`;
        if (a4 === `:nth-child` && t4.kind === `function` && t4.nodes.length === 1 && t4.nodes[0].kind === `value` && t4.nodes[0].value === `even`) return n4 ? (n4 = false, `odd`) : `even`;
        for (let [e5, n5] of [[`:nth-child`, `nth`], [`:nth-last-child`, `nth-last`], [`:nth-of-type`, `nth-of-type`], [`:nth-last-of-type`, `nth-of-last-type`]]) if (a4 === e5 && t4.kind === `function` && t4.nodes.length === 1) return t4.nodes.length === 1 && t4.nodes[0].kind === `value` && D(t4.nodes[0].value) ? `${n5}-${t4.nodes[0].value}` : `${n5}-[${br(t4.nodes)}]`;
        return n4 && i2.get(r2.printVariant(e4)) === i2.get(`not-[${a4}]`) ? `[&${a4}]` : null;
      })(t4.value);
      if (o3 === null) {
        if (a3) return Y(e4, { kind: `arbitrary`, selector: s2.value, relative: false }), [a3, e4];
        continue;
      }
      n4 && (o3 = `not-${o3}`);
      let c2 = r2.parseVariant(o3);
      if (c2 === null) continue;
      Y(e4, c2);
    } else if (Ai(s2)) {
      let t4 = Kn(s2.value);
      if (t4 === null) continue;
      if (t4.attribute.startsWith(`data-`)) {
        let n4 = t4.attribute.slice(5);
        Y(e4, { kind: `functional`, root: `data`, modifier: null, value: t4.value === null ? { kind: `named`, value: n4 } : { kind: `arbitrary`, value: `${n4}${t4.operator}${t4.quote ?? ``}${t4.value}${t4.quote ?? ``}${t4.sensitivity ? ` ${t4.sensitivity}` : ``}` } });
      } else if (t4.attribute.startsWith(`aria-`)) {
        let n4 = t4.attribute.slice(5);
        Y(e4, { kind: `functional`, root: `aria`, modifier: null, value: t4.value === null ? { kind: `arbitrary`, value: n4 } : t4.operator === `=` && t4.value === `true` && t4.sensitivity === null ? { kind: `named`, value: n4 } : { kind: `arbitrary`, value: `${t4.attribute}${t4.operator}${t4.quote ?? ``}${t4.value}${t4.quote ?? ``}${t4.sensitivity ? ` ${t4.sensitivity}` : ``}` } });
      } else Y(e4, { kind: `arbitrary`, selector: s2.value, relative: false });
    }
    if (a3) return [a3, e4];
  }
  return n2;
}
function Mi(e3, t2) {
  if (e3.kind !== `functional` && e3.kind !== `arbitrary` || e3.modifier === null) return e3;
  let n2 = t2.designSystem, r2 = n2.storage[Z].get(t2.signatureOptions), i2 = r2.get(n2.printCandidate(e3)), a2 = e3.modifier;
  if (i2 === r2.get(n2.printCandidate({ ...e3, modifier: null }))) return e3.modifier = null, e3;
  {
    let t3 = { kind: `named`, value: a2.value.endsWith(`%`) ? a2.value.includes(`.`) ? `${Number(a2.value.slice(0, -1))}` : a2.value.slice(0, -1) : a2.value, fraction: null };
    if (i2 === r2.get(n2.printCandidate({ ...e3, modifier: t3 }))) return e3.modifier = t3, e3;
  }
  {
    let t3 = { kind: `named`, value: `${parseFloat(a2.value) * 100}`, fraction: null };
    if (i2 === r2.get(n2.printCandidate({ ...e3, modifier: t3 }))) return e3.modifier = t3, e3;
  }
  return e3;
}
var Z = /* @__PURE__ */ Symbol();
function Ni(e3) {
  return new M((t2) => new M((n2) => {
    try {
      n2 = e3.theme.prefix && !n2.startsWith(e3.theme.prefix) ? `${e3.theme.prefix}:${n2}` : n2;
      let r2 = [R(`.x`, [z(`@apply`, n2)])];
      return Ki(e3, () => {
        for (let t3 of e3.parseCandidate(n2)) e3.compileAstNodes(t3, 1);
        ga(r2, e3);
      }), Pi(e3, r2, t2), W(r2);
    } catch {
      return /* @__PURE__ */ Symbol();
    }
  }));
}
function Pi(e3, t2, n2) {
  let { rem: r2 } = n2;
  return L(t2, { enter(t3, i2) {
    if (t3.kind === `declaration`) {
      if (t3.value === void 0 || t3.property === `--tw-sort` || t3.property.startsWith(`--tw-`) && (i2.parent?.nodes ?? []).some((e4) => e4.kind === `declaration` && t3.value === e4.value && t3.important === e4.important && !e4.property.startsWith(`--tw-`))) return I.Replace([]);
      if (n2.features & 1) {
        let e4 = mr(t3, n2.features);
        if (e4) return I.Replace(e4);
      }
      t3.value.includes(`var(`) && (t3.value = Fi(t3.value, e3)), t3.value = or(t3.value, r2), t3.value = Qt(t3.value);
    } else {
      if (t3.kind === `context` || t3.kind === `at-root`) return I.Replace(t3.nodes);
      if (t3.kind === `comment` || t3.kind === `at-rule` && t3.name === `@property`) return I.Replace([]);
    }
  }, exit(e4) {
    if (e4.kind === `rule` || e4.kind === `at-rule`) {
      if (e4.nodes.length > 1) {
        let t3 = /* @__PURE__ */ new Set();
        for (let n3 = e4.nodes.length - 1; n3 >= 0; n3--) {
          let r3 = e4.nodes[n3];
          r3.kind === `declaration` && r3.value !== void 0 && (t3.has(r3.property) && e4.nodes.splice(n3, 1), t3.add(r3.property));
        }
      }
      e4.nodes.sort((e5, t3) => e5.kind !== `declaration` || t3.kind !== `declaration` ? 0 : e5.property.localeCompare(t3.property));
    }
  } }), t2;
}
function Fi(e3, t2) {
  let n2 = false, r2 = F(e3), i2 = /* @__PURE__ */ new Set();
  return L(r2, (e4) => {
    if (e4.kind !== `function` || e4.value !== `var` || e4.nodes.length !== 1 && e4.nodes.length < 3) return;
    let r3 = e4.nodes[0].value;
    t2.theme.prefix && r3.startsWith(`--${t2.theme.prefix}-`) && (r3 = r3.slice(`--${t2.theme.prefix}-`.length));
    let a2 = t2.resolveThemeValue(r3);
    if (!i2.has(r3) && (i2.add(r3), a2 !== void 0 && (e4.nodes.length === 1 && (n2 = true, e4.nodes.push(...F(`,${a2}`))), e4.nodes.length >= 3)) && P(e4.nodes) === `${e4.nodes[0].value},${a2}`) return n2 = true, I.Replace(F(a2));
  }), n2 ? P(r2) : e3;
}
var Ii = /* @__PURE__ */ Symbol();
function Li() {
  return new M((e3) => new M((e4) => new M((e5) => /* @__PURE__ */ new Set())));
}
var Ri = /* @__PURE__ */ Symbol();
function zi(e3) {
  return new M((t2) => new M((n2) => {
    let r2 = new M((e4) => /* @__PURE__ */ new Set());
    e3.theme.prefix && !n2.startsWith(e3.theme.prefix) && (n2 = `${e3.theme.prefix}:${n2}`);
    let i2 = e3.parseCandidate(n2);
    return i2.length === 0 || L(Pi(e3, e3.compileAstNodes(i2[0]).map((e4) => U(e4.node)), t2), (i3) => {
      i3.kind === `declaration` && (r2.get(i3.property).add(i3.value), e3.storage[Ii].get(t2).get(i3.property).get(i3.value).add(n2));
    }), r2;
  }));
}
var Bi = /* @__PURE__ */ Symbol();
function Vi(e3) {
  return new M((t2) => {
    let n2 = e3.storage[Z].get(t2), r2 = new M(() => []);
    for (let [i2, a2] of e3.getClassList()) {
      let o2 = n2.get(i2);
      if (typeof o2 == `string`) {
        if (i2[0] === `-` && i2.endsWith(`-0`)) {
          let e4 = n2.get(i2.slice(1));
          if (typeof e4 == `string` && o2 === e4) continue;
        }
        r2.get(o2).push(i2), e3.storage[Ri].get(t2).get(i2);
        for (let o3 of a2.modifiers) {
          if (O(o3)) continue;
          let a3 = `${i2}/${o3}`, s2 = n2.get(a3);
          typeof s2 == `string` && (r2.get(s2).push(a3), e3.storage[Ri].get(t2).get(a3));
        }
      }
    }
    return r2;
  });
}
var Hi = /* @__PURE__ */ Symbol();
function Ui(e3) {
  return new M((t2) => {
    try {
      t2 = e3.theme.prefix && !t2.startsWith(e3.theme.prefix) ? `${e3.theme.prefix}:${t2}` : t2;
      let n2 = [R(`.x`, [z(`@apply`, `${t2}:flex`)])];
      return ga(n2, e3), L(n2, (e4) => {
        if (e4.kind === `at-rule` && e4.params.includes(` `)) e4.params = e4.params.replaceAll(` `, ``);
        else if (e4.kind === `rule`) {
          let t3 = Br(e4.selector), n3 = false;
          L(t3, (e5) => {
            if (e5.kind === `separator` && e5.value !== ` `) e5.value = e5.value.trim(), n3 = true;
            else if (e5.kind === `function` && e5.value === `:is`) {
              if (e5.nodes.length === 1) return n3 = true, I.Replace(e5.nodes);
              if (e5.nodes.length === 2 && e5.nodes[0].kind === `selector` && e5.nodes[0].value === `*` && e5.nodes[1].kind === `selector` && e5.nodes[1].value[0] === `:`) return n3 = true, I.Replace(e5.nodes[1]);
            } else e5.kind === `function` && e5.value[0] === `:` && e5.nodes[0]?.kind === `selector` && e5.nodes[0]?.value[0] === `:` && (n3 = true, e5.nodes.unshift({ kind: `selector`, value: `*` }));
          }), n3 && (e4.selector = br(t3));
        }
      }), W(n2);
    } catch {
      return /* @__PURE__ */ Symbol();
    }
  });
}
var Wi = /* @__PURE__ */ Symbol();
function Gi(e3) {
  let t2 = e3.storage[Hi], n2 = new M(() => []);
  for (let [r2, i2] of e3.variants.entries()) if (i2.kind === `static`) {
    let e4 = t2.get(r2);
    if (typeof e4 != `string`) continue;
    n2.get(e4).push(r2);
  }
  return n2;
}
function Ki(e3, t2) {
  let n2 = e3.theme.values.get, r2 = /* @__PURE__ */ new Set();
  e3.theme.values.get = (t3) => {
    let i2 = n2.call(e3.theme.values, t3);
    return i2 === void 0 || i2.options & 1 && (r2.add(i2), i2.options &= -2), i2;
  };
  try {
    return t2();
  } finally {
    e3.theme.values.get = n2;
    for (let e4 of r2) e4.options |= 1;
  }
}
function* qi(e3) {
  let t2 = e3.length, n2 = 1n << BigInt(t2);
  for (let r2 = t2; r2 >= 2; r2--) {
    let i2 = (1n << BigInt(r2)) - 1n;
    for (; i2 < n2; ) {
      let n3 = [];
      for (let r4 = 0; r4 < t2; r4++) i2 >> BigInt(r4) & 1n && n3.push(e3[r4]);
      yield n3;
      let r3 = i2 & -i2, a2 = i2 + r3;
      i2 = ((a2 ^ i2) >> 2n) / r3 | a2;
    }
  }
}
function Ji(e3, t2) {
  if (typeof e3.intersection == `function`) return e3.intersection(t2);
  if (e3.size === 0 || t2.size === 0) return /* @__PURE__ */ new Set();
  let n2 = new Set(e3);
  for (let e4 of t2) n2.has(e4) || n2.delete(e4);
  return n2;
}
var Yi = /^\d+\/\d+$/;
function Xi(e3) {
  let t2 = new M((e4) => ({ name: e4, utility: e4, fraction: false, modifiers: [] }));
  for (let n3 of e3.utilities.keys(`static`)) {
    if (e3.utilities.getCompletions(n3).length === 0) continue;
    let r2 = t2.get(n3);
    r2.fraction = false, r2.modifiers = [];
  }
  for (let n3 of e3.utilities.keys(`functional`)) {
    let r2 = e3.utilities.getCompletions(n3);
    for (let e4 of r2) for (let r3 of e4.values) {
      let i2 = r3 !== null && Yi.test(r3), a2 = r3 === null ? n3 : `${n3}-${r3}`, o2 = t2.get(a2);
      if (o2.utility = n3, o2.fraction || (o2.fraction = i2), o2.modifiers.push(...e4.modifiers), e4.supportsNegative) {
        let r4 = t2.get(`-${a2}`);
        r4.utility = `-${n3}`, r4.fraction || (r4.fraction = i2), r4.modifiers.push(...e4.modifiers);
      }
      o2.modifiers = Array.from(new Set(o2.modifiers));
    }
  }
  if (t2.size === 0) return [];
  let n2 = Array.from(t2.values());
  return n2.sort((e4, t3) => Gn(e4.name, t3.name)), Zi(n2);
}
function Zi(e3) {
  let t2 = [], n2 = null, r2 = /* @__PURE__ */ new Map(), i2 = new M(() => []);
  for (let a3 of e3) {
    let { utility: e4, fraction: o2 } = a3;
    n2 || (n2 = { utility: e4, items: [] }, r2.set(e4, n2)), e4 !== n2.utility && (t2.push(n2), n2 = { utility: e4, items: [] }, r2.set(e4, n2)), o2 ? i2.get(e4).push(a3) : n2.items.push(a3);
  }
  n2 && t2[t2.length - 1] !== n2 && t2.push(n2);
  for (let [e4, t3] of i2) {
    let n3 = r2.get(e4);
    n3 && n3.items.push(...t3);
  }
  let a2 = [];
  for (let e4 of t2) for (let t3 of e4.items) a2.push([t3.name, { modifiers: t3.modifiers }]);
  return a2;
}
function Qi(e3) {
  let t2 = [];
  for (let [n2, r2] of e3.variants.entries()) {
    let i2 = function({ value: t3, modifier: r3 } = {}) {
      let i3 = n2;
      t3 && (i3 += a2 ? `-${t3}` : t3), r3 && (i3 += `/${r3}`);
      let o3 = e3.parseVariant(i3);
      if (!o3) return [];
      let s2 = R(`.__placeholder__`, []);
      if (da(s2, o3, e3.variants) === null) return [];
      let c2 = [];
      return L(s2.nodes, { exit(e4, t4) {
        if (e4.kind !== `rule` && e4.kind !== `at-rule` || e4.nodes.length > 0) return;
        let n3 = t4.path();
        n3.push(e4), n3.sort((e5, t5) => {
          let n4 = e5.kind === `at-rule`, r5 = t5.kind === `at-rule`;
          return n4 && !r5 ? -1 : !n4 && r5 ? 1 : 0;
        });
        let r4 = n3.flatMap((e5) => e5.kind === `rule` ? e5.selector === `&` ? [] : [e5.selector] : e5.kind === `at-rule` ? [`${e5.name} ${e5.params}`] : []), i4 = ``;
        for (let e5 = r4.length - 1; e5 >= 0; e5--) i4 = i4 === `` ? r4[e5] : `${r4[e5]} { ${i4} }`;
        c2.push(i4);
      } }), c2;
    };
    if (r2.kind === `arbitrary`) continue;
    let a2 = n2 !== `@`, o2 = e3.variants.getCompletions(n2);
    switch (r2.kind) {
      case `static`:
        t2.push({ name: n2, values: o2, isArbitrary: false, hasDash: a2, selectors: i2 });
        break;
      case `functional`:
        t2.push({ name: n2, values: o2, isArbitrary: true, hasDash: a2, selectors: i2 });
        break;
      case `compound`:
        t2.push({ name: n2, values: o2, isArbitrary: true, hasDash: a2, selectors: i2 });
        break;
    }
  }
  return t2;
}
function $i(e3, t2) {
  let { astNodes: n2, nodeSorting: r2 } = la(Array.from(t2), e3), i2 = new Map(t2.map((e4) => [e4, null])), a2 = 0n;
  for (let e4 of n2) {
    let t3 = r2.get(e4)?.candidate;
    t3 && i2.set(t3, i2.get(t3) ?? a2++);
  }
  return t2.map((e4) => [e4, i2.get(e4) ?? null]);
}
var ea = /^@?[a-z0-9][a-zA-Z0-9_-]*(?<![_-])$/, ta = class {
  constructor() {
    __publicField(this, "compareFns", /* @__PURE__ */ new Map());
    __publicField(this, "variants", /* @__PURE__ */ new Map());
    __publicField(this, "completions", /* @__PURE__ */ new Map());
    __publicField(this, "groupOrder", null);
    __publicField(this, "lastOrder", 0);
  }
  static(e3, t2, { compounds: n2, order: r2 } = {}) {
    this.set(e3, { kind: `static`, applyFn: t2, compoundsWith: 0, compounds: n2 ?? 2, order: r2 });
  }
  fromAst(e3, t2, n2) {
    let r2 = [], i2 = false;
    L(t2, (e4) => {
      e4.kind === `rule` ? r2.push(e4.selector) : e4.kind === `at-rule` && e4.name === `@variant` ? i2 = true : e4.kind === `at-rule` && e4.name !== `@slot` && r2.push(`${e4.name} ${e4.params}`);
    }), this.static(e3, (e4) => {
      let r3 = t2.map(U);
      i2 && oa(r3, n2), aa(r3, e4.nodes), e4.nodes = r3;
    }, { compounds: na(r2) });
  }
  functional(e3, t2, { compounds: n2, order: r2 } = {}) {
    this.set(e3, { kind: `functional`, applyFn: t2, compoundsWith: 0, compounds: n2 ?? 2, order: r2 });
  }
  compound(e3, t2, n2, { compounds: r2, order: i2 } = {}) {
    this.set(e3, { kind: `compound`, applyFn: n2, compoundsWith: t2, compounds: r2 ?? 2, order: i2 });
  }
  group(e3, t2) {
    this.groupOrder = this.nextOrder(), t2 && this.compareFns.set(this.groupOrder, t2), e3(), this.groupOrder = null;
  }
  has(e3) {
    return this.variants.has(e3);
  }
  get(e3) {
    return this.variants.get(e3);
  }
  kind(e3) {
    return this.variants.get(e3)?.kind;
  }
  compoundsWith(e3, t2) {
    let n2 = this.variants.get(e3), r2 = typeof t2 == `string` ? this.variants.get(t2) : t2.kind === `arbitrary` ? { compounds: na([t2.selector]) } : this.variants.get(t2.root);
    return !(!n2 || !r2 || n2.kind !== `compound` || r2.compounds === 0 || n2.compoundsWith === 0 || (n2.compoundsWith & r2.compounds) === 0);
  }
  suggest(e3, t2) {
    this.completions.set(e3, t2);
  }
  getCompletions(e3) {
    return this.completions.get(e3)?.() ?? [];
  }
  compare(e3, t2) {
    if (e3 === t2) return 0;
    if (e3 === null) return -1;
    if (t2 === null) return 1;
    if (e3.kind === `arbitrary` && t2.kind === `arbitrary`) return e3.selector < t2.selector ? -1 : 1;
    if (e3.kind === `arbitrary`) return 1;
    if (t2.kind === `arbitrary`) return -1;
    let n2 = this.variants.get(e3.root).order, r2 = n2 - this.variants.get(t2.root).order;
    if (r2 !== 0) return r2;
    if (e3.kind === `compound` && t2.kind === `compound`) {
      let n3 = this.compare(e3.variant, t2.variant);
      return n3 === 0 ? e3.modifier && t2.modifier ? e3.modifier.value < t2.modifier.value ? -1 : 1 : e3.modifier ? 1 : t2.modifier ? -1 : 0 : n3;
    }
    let i2 = this.compareFns.get(n2);
    if (i2 !== void 0) return i2(e3, t2);
    if (e3.root !== t2.root) return e3.root < t2.root ? -1 : 1;
    let a2 = e3.value, o2 = t2.value;
    return a2 === null ? -1 : o2 === null || a2.kind === `arbitrary` && o2.kind !== `arbitrary` ? 1 : a2.kind !== `arbitrary` && o2.kind === `arbitrary` || a2.value < o2.value ? -1 : 1;
  }
  keys() {
    return this.variants.keys();
  }
  entries() {
    return this.variants.entries();
  }
  set(e3, { kind: t2, applyFn: n2, compounds: r2, compoundsWith: i2, order: a2 }) {
    let o2 = this.variants.get(e3);
    o2 ? Object.assign(o2, { kind: t2, applyFn: n2, compounds: r2 }) : (a2 === void 0 && (this.lastOrder = this.nextOrder(), a2 = this.lastOrder), this.variants.set(e3, { kind: t2, applyFn: n2, order: a2, compoundsWith: i2, compounds: r2 }));
  }
  nextOrder() {
    return this.groupOrder ?? this.lastOrder + 1;
  }
};
function na(e3) {
  let t2 = 0;
  for (let n2 of e3) {
    if (n2[0] === `@`) {
      if (!n2.startsWith(`@media`) && !n2.startsWith(`@supports`) && !n2.startsWith(`@container`)) return 0;
      t2 |= 1;
      continue;
    }
    if (n2.includes(`::`)) return 0;
    t2 |= 2;
  }
  return t2;
}
function ra(e3) {
  let t2 = new ta();
  function n2(e4, n3, { compounds: r3 } = {}) {
    r3 ?? (r3 = na(n3)), t2.static(e4, (e5) => {
      e5.nodes = n3.map((t3) => B(t3, e5.nodes));
    }, { compounds: r3 });
  }
  n2(`*`, [`:is(& > *)`], { compounds: 0 }), n2(`**`, [`:is(& *)`], { compounds: 0 });
  function r2(e4, t3) {
    return t3.map((t4) => {
      t4 = t4.trim();
      let n3 = g(t4, ` `);
      return n3[0] === `not` ? n3.slice(1).join(` `) : e4 === `@container` ? n3[0][0] === `(` ? `not ${t4}` : n3[1] === `not` ? `${n3[0]} ${n3.slice(2).join(` `)}` : `${n3[0]} not ${n3.slice(1).join(` `)}` : `not ${t4}`;
    });
  }
  let i2 = [`@media`, `@supports`, `@container`];
  function a2(e4) {
    for (let t3 of i2) {
      if (t3 !== e4.name) continue;
      let n3 = g(e4.params, `,`);
      return n3.length > 1 ? null : (n3 = r2(e4.name, n3), z(e4.name, n3.join(`, `)));
    }
    return null;
  }
  function o2(e4) {
    return e4.includes(`::`) ? null : `&:not(${g(e4, `,`).map((e5) => (e5 = e5.replaceAll(`&`, `*`), e5)).join(`, `)})`;
  }
  t2.compound(`not`, 3, (e4, t3) => {
    if (t3.variant.kind === `arbitrary` && t3.variant.relative || t3.modifier) return null;
    let n3 = false;
    if (L([e4], (t4, r3) => {
      if (t4.kind !== `rule` && t4.kind !== `at-rule` || t4.nodes.length > 0) return I.Continue;
      let i3 = [], s2 = [], c2 = r3.path();
      c2.push(t4);
      for (let e5 of c2) e5.kind === `at-rule` ? i3.push(e5) : e5.kind === `rule` && s2.push(e5);
      if (i3.length > 1 || s2.length > 1) return I.Stop;
      let l2 = [];
      for (let e5 of s2) {
        let t5 = o2(e5.selector);
        if (!t5) return n3 = false, I.Stop;
        l2.push(R(t5, []));
      }
      for (let e5 of i3) {
        let t5 = a2(e5);
        if (!t5) return n3 = false, I.Stop;
        l2.push(t5);
      }
      return Object.assign(e4, R(`&`, l2)), n3 = true, I.Skip;
    }), e4.kind === `rule` && e4.selector === `&` && e4.nodes.length === 1 && Object.assign(e4, e4.nodes[0]), !n3) return null;
  }), t2.suggest(`not`, () => Array.from(t2.keys()).filter((e4) => t2.compoundsWith(`not`, e4))), t2.compound(`group`, 2, (t3, n3) => {
    if (n3.variant.kind === `arbitrary` && n3.variant.relative) return null;
    let r3 = n3.modifier ? `:where(.${e3.prefix ? `${e3.prefix}\\:` : ``}group\\/${n3.modifier.value})` : `:where(.${e3.prefix ? `${e3.prefix}\\:` : ``}group)`, i3 = false;
    if (L([t3], (e4, t4) => {
      if (e4.kind !== `rule`) return I.Continue;
      for (let e5 of t4.path()) if (e5.kind === `rule`) return i3 = false, I.Stop;
      let n4 = e4.selector.replaceAll(`&`, r3);
      g(n4, `,`).length > 1 && (n4 = `:is(${n4})`), e4.selector = `&:is(${n4} *)`, i3 = true;
    }), !i3) return null;
  }), t2.suggest(`group`, () => Array.from(t2.keys()).filter((e4) => t2.compoundsWith(`group`, e4))), t2.compound(`peer`, 2, (t3, n3) => {
    if (n3.variant.kind === `arbitrary` && n3.variant.relative) return null;
    let r3 = n3.modifier ? `:where(.${e3.prefix ? `${e3.prefix}\\:` : ``}peer\\/${n3.modifier.value})` : `:where(.${e3.prefix ? `${e3.prefix}\\:` : ``}peer)`, i3 = false;
    if (L([t3], (e4, t4) => {
      if (e4.kind !== `rule`) return I.Continue;
      for (let e5 of t4.path()) if (e5.kind === `rule`) return i3 = false, I.Stop;
      let n4 = e4.selector.replaceAll(`&`, r3);
      g(n4, `,`).length > 1 && (n4 = `:is(${n4})`), e4.selector = `&:is(${n4} ~ *)`, i3 = true;
    }), !i3) return null;
  }), t2.suggest(`peer`, () => Array.from(t2.keys()).filter((e4) => t2.compoundsWith(`peer`, e4))), n2(`first-letter`, [`&::first-letter`]), n2(`first-line`, [`&::first-line`]), n2(`marker`, [`& *::marker`, `&::marker`, `& *::-webkit-details-marker`, `&::-webkit-details-marker`]), n2(`selection`, [`& *::selection`, `&::selection`]), n2(`file`, [`&::file-selector-button`]), n2(`placeholder`, [`&::placeholder`]), n2(`backdrop`, [`&::backdrop`]), n2(`details-content`, [`&::details-content`]);
  {
    let e4 = function() {
      return H([z(`@property`, `--tw-content`, [V(`syntax`, `"*"`), V(`initial-value`, `""`), V(`inherits`, `false`)])]);
    };
    t2.static(`before`, (t3) => {
      t3.nodes = [R(`&::before`, [e4(), V(`content`, `var(--tw-content)`), ...t3.nodes])];
    }, { compounds: 0 }), t2.static(`after`, (t3) => {
      t3.nodes = [R(`&::after`, [e4(), V(`content`, `var(--tw-content)`), ...t3.nodes])];
    }, { compounds: 0 });
  }
  n2(`first`, [`&:first-child`]), n2(`last`, [`&:last-child`]), n2(`only`, [`&:only-child`]), n2(`odd`, [`&:nth-child(odd)`]), n2(`even`, [`&:nth-child(even)`]), n2(`first-of-type`, [`&:first-of-type`]), n2(`last-of-type`, [`&:last-of-type`]), n2(`only-of-type`, [`&:only-of-type`]), n2(`visited`, [`&:visited`]), n2(`target`, [`&:target`]), n2(`open`, [`&:is([open], :popover-open, :open)`]), n2(`default`, [`&:default`]), n2(`checked`, [`&:checked`]), n2(`indeterminate`, [`&:indeterminate`]), n2(`placeholder-shown`, [`&:placeholder-shown`]), n2(`autofill`, [`&:autofill`]), n2(`optional`, [`&:optional`]), n2(`required`, [`&:required`]), n2(`valid`, [`&:valid`]), n2(`invalid`, [`&:invalid`]), n2(`user-valid`, [`&:user-valid`]), n2(`user-invalid`, [`&:user-invalid`]), n2(`in-range`, [`&:in-range`]), n2(`out-of-range`, [`&:out-of-range`]), n2(`read-only`, [`&:read-only`]), n2(`empty`, [`&:empty`]), n2(`focus-within`, [`&:focus-within`]), t2.static(`hover`, (e4) => {
    e4.nodes = [R(`&:hover`, [z(`@media`, `(hover: hover)`, e4.nodes)])];
  }), n2(`focus`, [`&:focus`]), n2(`focus-visible`, [`&:focus-visible`]), n2(`active`, [`&:active`]), n2(`enabled`, [`&:enabled`]), n2(`disabled`, [`&:disabled`]), n2(`inert`, [`&:is([inert], [inert] *)`]), t2.compound(`in`, 2, (e4, t3) => {
    if (t3.modifier) return null;
    let n3 = false;
    if (L([e4], (e5, t4) => {
      if (e5.kind !== `rule`) return I.Continue;
      for (let e6 of t4.path()) if (e6.kind === `rule`) return n3 = false, I.Stop;
      e5.selector = `:where(${e5.selector.replaceAll(`&`, `*`)}) &`, n3 = true;
    }), !n3) return null;
  }), t2.suggest(`in`, () => Array.from(t2.keys()).filter((e4) => t2.compoundsWith(`in`, e4))), t2.compound(`has`, 2, (e4, t3) => {
    if (t3.modifier) return null;
    let n3 = false;
    if (L([e4], (e5, t4) => {
      if (e5.kind !== `rule`) return I.Continue;
      for (let e6 of t4.path()) if (e6.kind === `rule`) return n3 = false, I.Stop;
      e5.selector = `&:has(${e5.selector.replaceAll(`&`, `*`)})`, n3 = true;
    }), !n3) return null;
  }), t2.suggest(`has`, () => Array.from(t2.keys()).filter((e4) => t2.compoundsWith(`has`, e4))), t2.functional(`aria`, (e4, t3) => {
    if (!t3.value || t3.modifier) return null;
    t3.value.kind === `arbitrary` ? e4.nodes = [R(`&[aria-${ia(t3.value.value)}]`, e4.nodes)] : e4.nodes = [R(`&[aria-${t3.value.value}="true"]`, e4.nodes)];
  }), t2.suggest(`aria`, () => [`busy`, `checked`, `disabled`, `expanded`, `hidden`, `pressed`, `readonly`, `required`, `selected`]), t2.functional(`data`, (e4, t3) => {
    if (!t3.value || t3.modifier) return null;
    e4.nodes = [R(`&[data-${ia(t3.value.value)}]`, e4.nodes)];
  }), t2.functional(`nth`, (e4, t3) => {
    if (!t3.value || t3.modifier || t3.value.kind === `named` && !D(t3.value.value)) return null;
    e4.nodes = [R(`&:nth-child(${t3.value.value})`, e4.nodes)];
  }), t2.functional(`nth-last`, (e4, t3) => {
    if (!t3.value || t3.modifier || t3.value.kind === `named` && !D(t3.value.value)) return null;
    e4.nodes = [R(`&:nth-last-child(${t3.value.value})`, e4.nodes)];
  }), t2.functional(`nth-of-type`, (e4, t3) => {
    if (!t3.value || t3.modifier || t3.value.kind === `named` && !D(t3.value.value)) return null;
    e4.nodes = [R(`&:nth-of-type(${t3.value.value})`, e4.nodes)];
  }), t2.functional(`nth-last-of-type`, (e4, t3) => {
    if (!t3.value || t3.modifier || t3.value.kind === `named` && !D(t3.value.value)) return null;
    e4.nodes = [R(`&:nth-last-of-type(${t3.value.value})`, e4.nodes)];
  }), t2.functional(`supports`, (e4, t3) => {
    if (!t3.value || t3.modifier) return null;
    let n3 = t3.value.value;
    if (n3 === null) return null;
    if (/^[\w-]*\s*\(/.test(n3)) {
      e4.nodes = [z(`@supports`, n3.replace(/\b(and|or|not)\b/g, ` $1 `), e4.nodes)];
      return;
    }
    n3.includes(`:`) || (n3 = `${n3}: var(--tw)`), (n3[0] !== `(` || n3[n3.length - 1] !== `)`) && (n3 = `(${n3})`), e4.nodes = [z(`@supports`, n3, e4.nodes)];
  }, { compounds: 1 }), n2(`motion-safe`, [`@media (prefers-reduced-motion: no-preference)`]), n2(`motion-reduce`, [`@media (prefers-reduced-motion: reduce)`]), n2(`contrast-more`, [`@media (prefers-contrast: more)`]), n2(`contrast-less`, [`@media (prefers-contrast: less)`]);
  {
    let n3 = function(e4, t3, n4, r3) {
      if (e4 === t3) return 0;
      let i3 = r3.get(e4);
      if (i3 === null) return n4 === `asc` ? -1 : 1;
      let a3 = r3.get(t3);
      return a3 === null ? n4 === `asc` ? 1 : -1 : sn(i3, a3, n4);
    };
    {
      let r3 = e3.namespace(`--breakpoint`), i3 = new M((t3) => {
        switch (t3.kind) {
          case `static`:
            return e3.resolveValue(t3.root, [`--breakpoint`]) ?? null;
          case `functional`: {
            if (!t3.value || t3.modifier) return null;
            let n4 = null;
            return t3.value.kind === `arbitrary` ? n4 = t3.value.value : t3.value.kind === `named` && (n4 = e3.resolveValue(t3.value.value, [`--breakpoint`])), !n4 || n4.includes(`var(`) ? null : n4;
          }
          case `arbitrary`:
          case `compound`:
            return null;
        }
      });
      t2.group(() => {
        t2.functional(`max`, (e4, t3) => {
          if (t3.modifier) return null;
          let n4 = i3.get(t3);
          if (n4 === null) return null;
          e4.nodes = [z(`@media`, `(width < ${n4})`, e4.nodes)];
        }, { compounds: 1 });
      }, (e4, t3) => n3(e4, t3, `desc`, i3)), t2.suggest(`max`, () => Array.from(r3.keys()).filter((e4) => e4 !== null)), t2.group(() => {
        for (let [n4, r4] of e3.namespace(`--breakpoint`)) n4 !== null && t2.static(n4, (e4) => {
          e4.nodes = [z(`@media`, `(width >= ${r4})`, e4.nodes)];
        }, { compounds: 1 });
        t2.functional(`min`, (e4, t3) => {
          if (t3.modifier) return null;
          let n4 = i3.get(t3);
          if (n4 === null) return null;
          e4.nodes = [z(`@media`, `(width >= ${n4})`, e4.nodes)];
        }, { compounds: 1 });
      }, (e4, t3) => n3(e4, t3, `asc`, i3)), t2.suggest(`min`, () => Array.from(r3.keys()).filter((e4) => e4 !== null));
    }
    {
      let r3 = e3.namespace(`--container`), i3 = new M((t3) => {
        switch (t3.kind) {
          case `functional`: {
            if (t3.value === null) return null;
            let n4 = null;
            return t3.value.kind === `arbitrary` ? n4 = t3.value.value : t3.value.kind === `named` && (n4 = e3.resolveValue(t3.value.value, [`--container`])), !n4 || n4.includes(`var(`) ? null : n4;
          }
          case `static`:
          case `arbitrary`:
          case `compound`:
            return null;
        }
      });
      t2.group(() => {
        t2.functional(`@max`, (e4, t3) => {
          let n4 = i3.get(t3);
          if (n4 === null) return null;
          e4.nodes = [z(`@container`, t3.modifier ? `${t3.modifier.value} (width < ${n4})` : `(width < ${n4})`, e4.nodes)];
        }, { compounds: 1 });
      }, (e4, t3) => n3(e4, t3, `desc`, i3)), t2.suggest(`@max`, () => Array.from(r3.keys()).filter((e4) => e4 !== null)), t2.group(() => {
        t2.functional(`@`, (e4, t3) => {
          let n4 = i3.get(t3);
          if (n4 === null) return null;
          e4.nodes = [z(`@container`, t3.modifier ? `${t3.modifier.value} (width >= ${n4})` : `(width >= ${n4})`, e4.nodes)];
        }, { compounds: 1 }), t2.functional(`@min`, (e4, t3) => {
          let n4 = i3.get(t3);
          if (n4 === null) return null;
          e4.nodes = [z(`@container`, t3.modifier ? `${t3.modifier.value} (width >= ${n4})` : `(width >= ${n4})`, e4.nodes)];
        }, { compounds: 1 });
      }, (e4, t3) => n3(e4, t3, `asc`, i3)), t2.suggest(`@min`, () => Array.from(r3.keys()).filter((e4) => e4 !== null)), t2.suggest(`@`, () => Array.from(r3.keys()).filter((e4) => e4 !== null));
    }
  }
  return n2(`portrait`, [`@media (orientation: portrait)`]), n2(`landscape`, [`@media (orientation: landscape)`]), n2(`ltr`, [`&:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)`]), n2(`rtl`, [`&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)`]), n2(`dark`, [`@media (prefers-color-scheme: dark)`]), n2(`starting`, [`@starting-style`]), n2(`print`, [`@media print`]), n2(`forced-colors`, [`@media (forced-colors: active)`]), n2(`inverted-colors`, [`@media (inverted-colors: inverted)`]), n2(`pointer-none`, [`@media (pointer: none)`]), n2(`pointer-coarse`, [`@media (pointer: coarse)`]), n2(`pointer-fine`, [`@media (pointer: fine)`]), n2(`any-pointer-none`, [`@media (any-pointer: none)`]), n2(`any-pointer-coarse`, [`@media (any-pointer: coarse)`]), n2(`any-pointer-fine`, [`@media (any-pointer: fine)`]), n2(`noscript`, [`@media (scripting: none)`]), t2;
}
function ia(e3) {
  if (e3.includes(`=`)) {
    let [t2, ...n2] = g(e3, `=`), r2 = n2.join(`=`).trim();
    if (r2[0] === `'` || r2[0] === `"`) return e3;
    if (r2.length > 1) {
      let e4 = r2[r2.length - 1];
      if (r2[r2.length - 2] === ` ` && (e4 === `i` || e4 === `I` || e4 === `s` || e4 === `S`)) return `${t2}="${r2.slice(0, -2)}" ${e4}`;
    }
    return `${t2}="${r2}"`;
  }
  return e3;
}
function aa(e3, t2) {
  L(e3, (e4) => {
    if (e4.kind === `at-rule` && e4.name === `@slot`) return I.ReplaceSkip(t2);
    if (e4.kind === `at-rule` && (e4.name === `@keyframes` || e4.name === `@property`)) return Object.assign(e4, H([z(e4.name, e4.params, e4.nodes)])), I.Skip;
  });
}
function oa(e3, t2) {
  let n2 = 0;
  return L(e3, (e4) => {
    if (e4.kind !== `at-rule` || e4.name !== `@variant`) return;
    let r2 = R(`&`, e4.nodes), i2 = e4.params, a2 = t2.parseVariant(i2);
    if (a2 === null) throw Error(`Cannot use \`@variant\` with unknown variant: ${i2}`);
    if (da(r2, a2, t2.variants) === null) throw Error(`Cannot use \`@variant\` with variant: ${i2}`);
    return n2 |= 32, I.Replace(r2);
  }), n2;
}
function sa(e3, t2) {
  let n2 = hn(e3), r2 = ra(e3), i2 = new M((e4) => Kt(e4, u2)), a2 = new M((e4) => Array.from(Wt(e4, u2))), o2 = new M((e4) => new M((t3) => {
    let n3 = ua(t3, u2, e4);
    try {
      Vn(n3.map(({ node: e5 }) => e5), u2), oa(n3.map(({ node: e5 }) => e5), u2);
    } catch {
      return [];
    }
    return n3;
  })), s2 = new M((t3) => {
    for (let n3 of St(t3)) e3.markUsedVariable(n3);
  });
  function c2(e4) {
    let n3 = [];
    for (let r3 of e4) {
      let e5 = true, { astNodes: i3 } = la([r3], u2, { onInvalidCandidate() {
        e5 = false;
      } });
      t2 && L(i3, (e6) => (e6.src ?? (e6.src = t2), I.Continue)), i3 = Dt(i3, u2, 0), n3.push(e5 ? i3 : []);
    }
    return n3;
  }
  function l2(e4) {
    return c2(e4).map((e5) => e5.length > 0 ? W(e5) : null);
  }
  let u2 = { theme: e3, utilities: n2, variants: r2, invalidCandidates: /* @__PURE__ */ new Set(), important: false, candidatesToCss: l2, candidatesToAst: c2, getClassOrder(e4) {
    return $i(this, e4);
  }, getClassList() {
    return Xi(this);
  }, getVariants() {
    return Qi(this);
  }, parseCandidate(e4) {
    return a2.get(e4);
  }, parseVariant(e4) {
    return i2.get(e4);
  }, compileAstNodes(e4, t3 = 1) {
    return o2.get(t3).get(e4);
  }, printCandidate(e4) {
    return Jt(u2, e4);
  }, printVariant(e4) {
    return Xt(e4);
  }, getVariantOrder() {
    let e4 = Array.from(i2.values());
    e4.sort((e5, t4) => this.variants.compare(e5, t4));
    let t3 = /* @__PURE__ */ new Map(), n3, r3 = 0;
    for (let i3 of e4) i3 !== null && (n3 !== void 0 && this.variants.compare(n3, i3) !== 0 && r3++, t3.set(i3, r3), n3 = i3);
    return t3;
  }, resolveThemeValue(t3, n3 = true) {
    let r3 = t3.lastIndexOf(`/`), i3 = null;
    r3 !== -1 && (i3 = t3.slice(r3 + 1).trim(), t3 = t3.slice(0, r3).trim());
    let a3 = e3.resolve(null, [t3], +!!n3) ?? void 0;
    return i3 && a3 ? K(a3, i3) : a3;
  }, trackUsedVariables(e4) {
    s2.get(e4);
  }, canonicalizeCandidates(e4, t3) {
    return Yr(this, e4, t3);
  }, storage: {} };
  return u2;
}
var ca = `container-type.pointer-events.visibility.position.inset.inset-inline.inset-block.inset-inline-start.inset-inline-end.inset-block-start.inset-block-end.top.right.bottom.left.isolation.z-index.order.grid-column.grid-column-start.grid-column-end.grid-row.grid-row-start.grid-row-end.float.clear.--tw-container-component.margin.margin-inline.margin-block.margin-inline-start.margin-inline-end.margin-block-start.margin-block-end.margin-top.margin-right.margin-bottom.margin-left.box-sizing.display.field-sizing.aspect-ratio.height.max-height.min-height.width.max-width.min-width.flex.flex-shrink.flex-grow.flex-basis.table-layout.caption-side.border-collapse.border-spacing.transform-origin.translate.--tw-translate-x.--tw-translate-y.--tw-translate-z.scale.--tw-scale-x.--tw-scale-y.--tw-scale-z.rotate.--tw-rotate-x.--tw-rotate-y.--tw-rotate-z.--tw-skew-x.--tw-skew-y.transform.animation.cursor.touch-action.--tw-pan-x.--tw-pan-y.--tw-pinch-zoom.resize.scroll-snap-type.--tw-scroll-snap-strictness.scroll-snap-align.scroll-snap-stop.scroll-margin.scroll-margin-inline.scroll-margin-block.scroll-margin-inline-start.scroll-margin-inline-end.scroll-margin-block-start.scroll-margin-block-end.scroll-margin-top.scroll-margin-right.scroll-margin-bottom.scroll-margin-left.scroll-padding.scroll-padding-inline.scroll-padding-block.scroll-padding-inline-start.scroll-padding-inline-end.scroll-padding-block-start.scroll-padding-block-end.scroll-padding-top.scroll-padding-right.scroll-padding-bottom.scroll-padding-left.list-style-position.list-style-type.list-style-image.appearance.columns.break-before.break-inside.break-after.grid-auto-columns.grid-auto-flow.grid-auto-rows.grid-template-columns.grid-template-rows.flex-direction.flex-wrap.place-content.place-items.align-content.align-items.justify-content.justify-items.gap.column-gap.row-gap.--tw-space-x-reverse.--tw-space-y-reverse.divide-x-width.divide-y-width.--tw-divide-y-reverse.divide-style.divide-color.place-self.align-self.justify-self.overflow.overflow-x.overflow-y.overscroll-behavior.overscroll-behavior-x.overscroll-behavior-y.scroll-behavior.border-radius.border-start-radius.border-end-radius.border-top-radius.border-right-radius.border-bottom-radius.border-left-radius.border-start-start-radius.border-start-end-radius.border-end-end-radius.border-end-start-radius.border-top-left-radius.border-top-right-radius.border-bottom-right-radius.border-bottom-left-radius.border-width.border-inline-width.border-block-width.border-inline-start-width.border-inline-end-width.border-block-start-width.border-block-end-width.border-top-width.border-right-width.border-bottom-width.border-left-width.border-style.border-inline-style.border-block-style.border-inline-start-style.border-inline-end-style.border-block-start-style.border-block-end-style.border-top-style.border-right-style.border-bottom-style.border-left-style.border-color.border-inline-color.border-block-color.border-inline-start-color.border-inline-end-color.border-block-start-color.border-block-end-color.border-top-color.border-right-color.border-bottom-color.border-left-color.background-color.background-image.--tw-gradient-position.--tw-gradient-stops.--tw-gradient-via-stops.--tw-gradient-from.--tw-gradient-from-position.--tw-gradient-via.--tw-gradient-via-position.--tw-gradient-to.--tw-gradient-to-position.mask-image.--tw-mask-top.--tw-mask-top-from-color.--tw-mask-top-from-position.--tw-mask-top-to-color.--tw-mask-top-to-position.--tw-mask-right.--tw-mask-right-from-color.--tw-mask-right-from-position.--tw-mask-right-to-color.--tw-mask-right-to-position.--tw-mask-bottom.--tw-mask-bottom-from-color.--tw-mask-bottom-from-position.--tw-mask-bottom-to-color.--tw-mask-bottom-to-position.--tw-mask-left.--tw-mask-left-from-color.--tw-mask-left-from-position.--tw-mask-left-to-color.--tw-mask-left-to-position.--tw-mask-linear.--tw-mask-linear-position.--tw-mask-linear-from-color.--tw-mask-linear-from-position.--tw-mask-linear-to-color.--tw-mask-linear-to-position.--tw-mask-radial.--tw-mask-radial-shape.--tw-mask-radial-size.--tw-mask-radial-position.--tw-mask-radial-from-color.--tw-mask-radial-from-position.--tw-mask-radial-to-color.--tw-mask-radial-to-position.--tw-mask-conic.--tw-mask-conic-position.--tw-mask-conic-from-color.--tw-mask-conic-from-position.--tw-mask-conic-to-color.--tw-mask-conic-to-position.box-decoration-break.background-size.background-attachment.background-clip.background-position.background-repeat.background-origin.mask-composite.mask-mode.mask-type.mask-size.mask-clip.mask-position.mask-repeat.mask-origin.fill.stroke.stroke-width.object-fit.object-position.padding.padding-inline.padding-block.padding-inline-start.padding-inline-end.padding-block-start.padding-block-end.padding-top.padding-right.padding-bottom.padding-left.text-align.text-indent.vertical-align.font-family.font-feature-settings.font-size.line-height.font-weight.letter-spacing.text-wrap.overflow-wrap.word-break.text-overflow.hyphens.white-space.color.text-transform.font-style.font-stretch.font-variant-numeric.text-decoration-line.text-decoration-color.text-decoration-style.text-decoration-thickness.text-underline-offset.-webkit-font-smoothing.placeholder-color.caret-color.accent-color.color-scheme.opacity.background-blend-mode.mix-blend-mode.box-shadow.--tw-shadow.--tw-shadow-color.--tw-ring-shadow.--tw-ring-color.--tw-inset-shadow.--tw-inset-shadow-color.--tw-inset-ring-shadow.--tw-inset-ring-color.--tw-ring-offset-width.--tw-ring-offset-color.outline.outline-width.outline-offset.outline-color.--tw-blur.--tw-brightness.--tw-contrast.--tw-drop-shadow.--tw-grayscale.--tw-hue-rotate.--tw-invert.--tw-saturate.--tw-sepia.filter.--tw-backdrop-blur.--tw-backdrop-brightness.--tw-backdrop-contrast.--tw-backdrop-grayscale.--tw-backdrop-hue-rotate.--tw-backdrop-invert.--tw-backdrop-opacity.--tw-backdrop-saturate.--tw-backdrop-sepia.backdrop-filter.transition-property.transition-behavior.transition-delay.transition-duration.transition-timing-function.will-change.contain.content.forced-color-adjust`.split(`.`);
function la(e3, t2, { onInvalidCandidate: n2, respectImportant: r2 } = {}) {
  let i2 = /* @__PURE__ */ new Map(), a2 = [], o2 = /* @__PURE__ */ new Map();
  for (let r3 of e3) {
    if (t2.invalidCandidates.has(r3)) {
      n2?.(r3);
      continue;
    }
    let e4 = t2.parseCandidate(r3);
    if (e4.length === 0) {
      n2?.(r3);
      continue;
    }
    o2.set(r3, e4);
  }
  let s2 = 0;
  (r2 ?? true) && (s2 |= 1);
  let c2 = t2.getVariantOrder();
  for (let [e4, r3] of o2) {
    let o3 = false;
    for (let n3 of r3) {
      let r4 = t2.compileAstNodes(n3, s2);
      if (r4.length !== 0) {
        o3 = true;
        for (let { node: t3, propertySort: o4 } of r4) {
          let r5 = 0n;
          for (let e5 of n3.variants) r5 |= 1n << BigInt(c2.get(e5));
          i2.set(t3, { properties: o4, variants: r5, candidate: e4 }), a2.push(t3);
        }
      }
    }
    o3 || n2?.(e4);
  }
  return a2.sort((e4, t3) => {
    let n3 = i2.get(e4), r3 = i2.get(t3);
    if (n3.variants - r3.variants !== 0n) return Number(n3.variants - r3.variants);
    let a3 = 0;
    for (; a3 < n3.properties.order.length && a3 < r3.properties.order.length && n3.properties.order[a3] === r3.properties.order[a3]; ) a3 += 1;
    return (n3.properties.order[a3] ?? 1 / 0) - (r3.properties.order[a3] ?? 1 / 0) || r3.properties.count - n3.properties.count || Gn(n3.candidate, r3.candidate);
  }), { astNodes: a2, nodeSorting: i2 };
}
function ua(e3, t2, n2) {
  let r2 = pa(e3, t2);
  if (r2.length === 0) return [];
  let i2 = t2.important && !!(n2 & 1), a2 = [], o2 = `.${$e(e3.raw)}`;
  for (let n3 of r2) {
    let r3 = ha(n3);
    (e3.important || i2) && ma(n3);
    let s2 = { kind: `rule`, selector: o2, nodes: n3 };
    for (let n4 of e3.variants) if (da(s2, n4, t2.variants) === null) return [];
    a2.push({ node: s2, propertySort: r3 });
  }
  return a2;
}
function da(e3, t2, n2, r2 = 0) {
  if (t2.kind === `arbitrary`) {
    if (t2.relative && r2 === 0) return null;
    e3.nodes = [B(t2.selector, e3.nodes)];
    return;
  }
  let { applyFn: i2 } = n2.get(t2.root);
  if (t2.kind === `compound`) {
    let a2 = z(`@slot`);
    if (da(a2, t2.variant, n2, r2 + 1) === null || t2.root === `not` && a2.nodes.length > 1) return null;
    for (let e4 of a2.nodes) if (e4.kind !== `rule` && e4.kind !== `at-rule` || i2(e4, t2) === null) return null;
    L(a2.nodes, (t3) => {
      if ((t3.kind === `rule` || t3.kind === `at-rule`) && t3.nodes.length <= 0) return t3.nodes = e3.nodes, I.Skip;
    }), e3.nodes = a2.nodes;
    return;
  }
  if (i2(e3, t2) === null) return null;
}
function fa(e3) {
  let t2 = e3.options?.types ?? [];
  return t2.length > 1 && t2.includes(`any`);
}
function pa(e3, t2) {
  if (e3.kind === `arbitrary`) {
    let n3 = e3.value;
    return e3.modifier && (n3 = q(n3, e3.modifier, t2.theme)), n3 === null ? [] : [[V(e3.property, n3)]];
  }
  let n2 = t2.utilities.get(e3.root) ?? [], r2 = [], i2 = n2.filter((e4) => !fa(e4));
  for (let t3 of i2) {
    if (t3.kind !== e3.kind) continue;
    let n3 = t3.compileFn(e3);
    if (n3 !== void 0) {
      if (n3 === null) return r2;
      r2.push(n3);
    }
  }
  if (r2.length > 0) return r2;
  let a2 = n2.filter((e4) => fa(e4));
  for (let t3 of a2) {
    if (t3.kind !== e3.kind) continue;
    let n3 = t3.compileFn(e3);
    if (n3 !== void 0) {
      if (n3 === null) return r2;
      r2.push(n3);
    }
  }
  return r2;
}
function ma(e3) {
  for (let t2 of e3) t2.kind !== `at-root` && (t2.kind === `declaration` ? t2.important = true : (t2.kind === `rule` || t2.kind === `at-rule`) && ma(t2.nodes));
}
function ha(e3) {
  let t2 = /* @__PURE__ */ new Set(), n2 = 0, r2 = e3.slice(), i2 = false;
  for (; r2.length > 0; ) {
    let e4 = r2.shift();
    if (e4.kind === `declaration`) {
      if (e4.value === void 0 || (n2++, i2)) continue;
      if (e4.property === `--tw-sort`) {
        let n3 = ca.indexOf(e4.value ?? ``);
        if (n3 !== -1) {
          t2.add(n3), i2 = true;
          continue;
        }
      }
      let r3 = ca.indexOf(e4.property);
      r3 !== -1 && t2.add(r3);
    } else if (e4.kind === `rule` || e4.kind === `at-rule`) for (let t3 of e4.nodes) r2.push(t3);
  }
  return { order: Array.from(t2).sort((e4, t3) => e4 - t3), count: n2 };
}
function ga(e3, t2) {
  let n2 = 0, r2 = B(`&`, e3), i2 = /* @__PURE__ */ new Set(), a2 = new M(() => /* @__PURE__ */ new Set()), o2 = new M(() => /* @__PURE__ */ new Set());
  L([r2], (e4, r3) => {
    if (e4.kind === `at-rule`) {
      if (e4.name === `@keyframes`) return L(e4.nodes, (e5) => {
        if (e5.kind === `at-rule` && e5.name === `@apply`) throw Error("You cannot use `@apply` inside `@keyframes`.");
      }), I.Skip;
      if (e4.name === `@utility`) {
        let n3 = e4.params.replace(/-\*$/, ``);
        o2.get(n3).add(e4), L(e4.nodes, (n4) => {
          if (!(n4.kind !== `at-rule` || n4.name !== `@apply`)) {
            i2.add(e4);
            for (let r4 of _a(n4, t2)) a2.get(e4).add(r4);
          }
        });
        return;
      }
      if (e4.name === `@apply`) {
        if (r3.parent === null) return;
        n2 |= 1, i2.add(r3.parent);
        for (let n3 of _a(e4, t2)) for (let e5 of r3.path()) i2.has(e5) && a2.get(e5).add(n3);
      }
    }
  });
  let s2 = /* @__PURE__ */ new Set(), c2 = [], l2 = /* @__PURE__ */ new Set();
  function u2(e4, n3 = []) {
    if (!s2.has(e4)) {
      if (l2.has(e4)) {
        let r3 = n3[(n3.indexOf(e4) + 1) % n3.length];
        throw e4.kind === `at-rule` && e4.name === `@utility` && r3.kind === `at-rule` && r3.name === `@utility` && L(e4.nodes, (e5) => {
          if (e5.kind !== `at-rule` || e5.name !== `@apply`) return;
          let n4 = e5.params.split(/\s+/g);
          for (let e6 of n4) for (let n5 of t2.parseCandidate(e6)) switch (n5.kind) {
            case `arbitrary`:
              break;
            case `static`:
            case `functional`:
              if (r3.params.replace(/-\*$/, ``) === n5.root) throw Error(`You cannot \`@apply\` the \`${e6}\` utility here because it creates a circular dependency.`);
              break;
            default:
          }
        }), Error(`Circular dependency detected:

${W([e4])}
Relies on:

${W([r3])}`);
      }
      l2.add(e4);
      for (let t3 of a2.get(e4)) for (let r3 of o2.get(t3)) n3.push(e4), u2(r3, n3), n3.pop();
      s2.add(e4), l2.delete(e4), c2.push(e4);
    }
  }
  for (let e4 of i2) u2(e4);
  for (let e4 of c2) `nodes` in e4 && L(e4.nodes, (e5) => {
    if (e5.kind !== `at-rule` || e5.name !== `@apply`) return;
    let n3 = e5.params.split(/(\s+)/g), r3 = {}, i3 = 0;
    for (let [e6, t3] of n3.entries()) e6 % 2 == 0 && (r3[t3] = i3), i3 += t3.length;
    {
      let n4 = la(Object.keys(r3), t2, { respectImportant: false, onInvalidCandidate: (e6) => {
        if (t2.theme.prefix && !e6.startsWith(t2.theme.prefix)) throw Error(`Cannot apply unprefixed utility class \`${e6}\`. Did you mean \`${t2.theme.prefix}:${e6}\`?`);
        if (t2.invalidCandidates.has(e6)) throw Error(`Cannot apply utility class \`${e6}\` because it has been explicitly disabled: https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-excluding-classes`);
        let n5 = g(e6, `:`);
        if (n5.length > 1) {
          let r4 = n5.pop();
          if (t2.candidatesToCss([r4])[0]) {
            let r5 = t2.candidatesToCss(n5.map((e7) => `${e7}:[--tw-variant-check:1]`)), i5 = n5.filter((e7, t3) => r5[t3] === null);
            if (i5.length > 0) {
              if (i5.length === 1) throw Error(`Cannot apply utility class \`${e6}\` because the ${i5.map((e7) => `\`${e7}\``)} variant does not exist.`);
              {
                let t3 = new Intl.ListFormat(`en`, { style: `long`, type: `conjunction` });
                throw Error(`Cannot apply utility class \`${e6}\` because the ${t3.format(i5.map((e7) => `\`${e7}\``))} variants do not exist.`);
              }
            }
          }
        }
        throw t2.theme.size === 0 ? Error(`Cannot apply unknown utility class \`${e6}\`. Are you using CSS modules or similar and missing \`@reference\`? https://tailwindcss.com/docs/functions-and-directives#reference-directive`) : Error(`Cannot apply unknown utility class \`${e6}\``);
      } }), i4 = e5.src, a3 = n4.astNodes.map((e6) => {
        let t3 = n4.nodeSorting.get(e6)?.candidate, a4 = t3 ? r3[t3] : void 0;
        if (e6 = U(e6), !i4 || !t3 || a4 === void 0) return L([e6], (e7) => {
          e7.src = i4;
        }), e6;
        let o4 = [i4[0], i4[1], i4[2]];
        return o4[1] += 7 + a4, o4[2] = o4[1] + t3.length, L([e6], (e7) => {
          e7.src = o4;
        }), e6;
      }), o3 = [];
      for (let e6 of a3) if (e6.kind === `rule`) for (let t3 of e6.nodes) o3.push(t3);
      else o3.push(e6);
      return I.Replace(o3);
    }
  });
  return n2;
}
function* _a(e3, t2) {
  for (let n2 of e3.params.split(/\s+/g)) for (let e4 of t2.parseCandidate(n2)) switch (e4.kind) {
    case `arbitrary`:
      break;
    case `static`:
    case `functional`:
      yield e4.root;
      break;
    default:
  }
}
async function va(e3, t2, n2, r2 = 0, i2 = false) {
  let a2 = 0, o2 = [];
  return L(e3, (e4) => {
    if (e4.kind === `at-rule` && (e4.name === `@import` || e4.name === `@reference`)) {
      let s2 = ya(F(e4.params));
      if (s2 === null) return;
      e4.name === `@reference` && (s2.media = `reference`), a2 |= 2;
      let { uri: c2, layer: l2, media: u2, supports: d2 } = s2;
      if (c2.startsWith(`data:`) || c2.startsWith(`http://`) || c2.startsWith(`https://`)) return;
      let f2 = Tt({}, []);
      return o2.push((async () => {
        if (r2 > 100) throw Error(`Exceeded maximum recursion depth while resolving \`${c2}\` in \`${t2}\`)`);
        let a3 = await n2(c2, t2), o3 = Ye(a3.content, { from: i2 ? a3.path : void 0 });
        await va(o3, a3.base, n2, r2 + 1, i2), f2.nodes = ba(e4, [Tt({ base: a3.base }, o3)], l2, u2, d2);
      })()), I.ReplaceSkip(f2);
    }
  }), o2.length > 0 && await Promise.all(o2), a2;
}
function ya(e3) {
  let t2, n2 = null, r2 = null, i2 = null;
  for (let a2 = 0; a2 < e3.length; a2++) {
    let o2 = e3[a2];
    if (o2.kind !== `separator`) {
      if (o2.kind === `word` && !t2) {
        if (!o2.value || o2.value[0] !== `"` && o2.value[0] !== `'`) return null;
        t2 = o2.value.slice(1, -1);
        continue;
      }
      if (o2.kind === `function` && o2.value.toLowerCase() === `url` || !t2) return null;
      if ((o2.kind === `word` || o2.kind === `function`) && o2.value.toLowerCase() === `layer`) {
        if (n2) return null;
        if (i2) throw Error("`layer(\u2026)` in an `@import` should come before any other functions or conditions");
        n2 = `nodes` in o2 ? P(o2.nodes) : ``;
        continue;
      }
      if (o2.kind === `function` && o2.value.toLowerCase() === `supports`) {
        if (i2) return null;
        i2 = P(o2.nodes);
        continue;
      }
      r2 = P(e3.slice(a2));
      break;
    }
  }
  return t2 ? { uri: t2, layer: n2, media: r2, supports: i2 } : null;
}
function ba(e3, t2, n2, r2, i2) {
  let a2 = t2;
  if (n2 !== null) {
    let t3 = z(`@layer`, n2, a2);
    t3.src = e3.src, a2 = [t3];
  }
  if (r2 !== null) {
    let t3 = z(`@media`, r2, a2);
    t3.src = e3.src, a2 = [t3];
  }
  if (i2 !== null) {
    let t3 = z(`@supports`, i2[0] === `(` ? i2 : `(${i2})`, a2);
    t3.src = e3.src, a2 = [t3];
  }
  return a2;
}
function xa(e3) {
  if (Object.prototype.toString.call(e3) !== `[object Object]`) return false;
  let t2 = Object.getPrototypeOf(e3);
  return t2 === null || Object.getPrototypeOf(t2) === null;
}
function Sa(e3, t2, n2, r2 = []) {
  for (let i2 of t2) if (i2 != null) for (let t3 of Reflect.ownKeys(i2)) {
    r2.push(t3);
    let a2 = n2(e3[t3], i2[t3], r2);
    a2 === void 0 ? !xa(e3[t3]) || !xa(i2[t3]) ? e3[t3] = i2[t3] : e3[t3] = Sa({}, [e3[t3], i2[t3]], n2, r2) : e3[t3] = a2, r2.pop();
  }
  return e3;
}
function Ca(e3, t2, n2) {
  return function(r2, i2) {
    let a2 = r2.lastIndexOf(`/`), o2 = null;
    a2 !== -1 && (o2 = r2.slice(a2 + 1).trim(), r2 = r2.slice(0, a2).trim());
    let s2 = (() => {
      let i3 = Vr(r2), [a3, o3] = wa(e3.theme, i3), s3 = n2(Ta(t2() ?? {}, i3) ?? null);
      if (typeof s3 == `string` && (s3 = s3.replace(`<alpha-value>`, `1`)), typeof a3 != `object`) return typeof o3 != `object` && o3 & 4 ? s3 ?? a3 : a3;
      if (typeof s3 == `object` && s3 && !Array.isArray(s3)) {
        let e4 = Sa({}, [s3], (e5, t3) => t3);
        if (a3 === null && Object.hasOwn(s3, `__CSS_VALUES__`)) {
          let t3 = {};
          for (let n3 in s3.__CSS_VALUES__) t3[n3] = s3[n3], delete e4[n3];
          a3 = t3;
        }
        for (let t3 in a3) t3 !== `__CSS_VALUES__` && (s3?.__CSS_VALUES__?.[t3] & 4 && Ta(e4, t3.split(`-`)) !== void 0 || (e4[et(t3)] = a3[t3]));
        return e4;
      }
      if (Array.isArray(a3) && Array.isArray(o3) && Array.isArray(s3)) {
        let e4 = a3[0], t3 = a3[1];
        o3[0] & 4 && (e4 = s3[0] ?? e4);
        for (let e5 of Object.keys(t3)) o3[1][e5] & 4 && (t3[e5] = s3[1][e5] ?? t3[e5]);
        return [e4, t3];
      }
      return a3 ?? s3;
    })();
    return o2 && typeof s2 == `string` && (s2 = K(s2, o2)), s2 ?? i2;
  };
}
function wa(e3, t2) {
  if (t2.length === 1 && t2[0].startsWith(`--`)) return [e3.get([t2[0]]), e3.getOptions(t2[0])];
  let n2 = er(t2), r2 = /* @__PURE__ */ new Map(), i2 = new M(() => /* @__PURE__ */ new Map()), a2 = e3.namespace(`--${n2}`);
  if (a2.size === 0) return [null, 0];
  let o2 = /* @__PURE__ */ new Map();
  for (let [t3, s3] of a2) {
    if (!t3 || !t3.includes(`--`)) {
      r2.set(t3, s3), o2.set(t3, e3.getOptions(t3 ? `--${n2}-${t3}` : `--${n2}`));
      continue;
    }
    let a3 = t3.indexOf(`--`), c3 = t3.slice(0, a3), l3 = t3.slice(a3 + 2);
    l3 = l3.replace(/-([a-z])/g, (e4, t4) => t4.toUpperCase()), i2.get(c3 === `` ? null : c3).set(l3, [s3, e3.getOptions(`--${n2}${t3}`)]);
  }
  let s2 = e3.getOptions(`--${n2}`);
  for (let [e4, t3] of i2) {
    let n3 = r2.get(e4);
    if (typeof n3 != `string`) continue;
    let i3 = {}, a3 = {};
    for (let [e5, [n4, r3]] of t3) i3[e5] = n4, a3[e5] = r3;
    r2.set(e4, [n3, i3]), o2.set(e4, [s2, a3]);
  }
  let c2 = {}, l2 = {};
  for (let [e4, t3] of r2) Ea(c2, [e4 ?? `DEFAULT`], t3);
  for (let [e4, t3] of o2) Ea(l2, [e4 ?? `DEFAULT`], t3);
  return t2[t2.length - 1] === `DEFAULT` ? [c2?.DEFAULT ?? null, l2.DEFAULT ?? 0] : `DEFAULT` in c2 && Object.keys(c2).length === 1 ? [c2.DEFAULT, l2.DEFAULT ?? 0] : (c2.__CSS_VALUES__ = l2, [c2, l2]);
}
function Ta(e3, t2) {
  for (let n2 = 0; n2 < t2.length; ++n2) {
    let r2 = t2[n2];
    if (typeof e3 != `object` || !e3 || !Object.hasOwn(e3, r2)) {
      if (t2[n2 + 1] === void 0) return;
      t2[n2 + 1] = `${r2}-${t2[n2 + 1]}`;
      continue;
    }
    e3 = e3[r2];
  }
  return e3;
}
function Ea(e3, t2, n2) {
  for (let n3 of t2.slice(0, -1)) e3[n3] === void 0 && (e3[n3] = {}), e3 = e3[n3];
  e3[t2[t2.length - 1]] = n2;
}
var Da = /^[a-z@][a-zA-Z0-9/%._-]*$/;
function Oa({ designSystem: e3, ast: t2, resolvedConfig: n2, featuresRef: r2, referenceMode: i2, src: a2 }) {
  let o2 = { addBase(n3) {
    if (i2) return;
    let o3 = ka(n3);
    r2.current |= Vn(o3, e3);
    let s2 = z(`@layer`, `base`, o3);
    L([s2], (e4) => {
      e4.src = a2;
    }), t2.push(s2);
  }, addVariant(t3, n3) {
    if (!ea.test(t3)) throw Error(`\`addVariant('${t3}')\` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number.`);
    if (typeof n3 == `string`) {
      if (n3.includes(`:merge(`)) return;
    } else if (Array.isArray(n3)) {
      if (n3.some((e4) => e4.includes(`:merge(`))) return;
    } else if (typeof n3 == `object`) {
      let e4 = function(t4, n4) {
        return Object.entries(t4).some(([t5, r3]) => t5.includes(n4) || typeof r3 == `object` && e4(r3, n4));
      };
      if (e4(n3, `:merge(`)) return;
    }
    typeof n3 == `string` || Array.isArray(n3) ? e3.variants.static(t3, (e4) => {
      e4.nodes = Aa(n3, e4.nodes);
    }, { compounds: na(typeof n3 == `string` ? [n3] : n3) }) : typeof n3 == `object` && e3.variants.fromAst(t3, ka(n3), e3);
  }, matchVariant(t3, n3, r3) {
    function i3(e4, t4, r4) {
      return Aa(n3(e4, { modifier: t4?.value ?? null }), r4);
    }
    try {
      let e4 = n3(`a`, { modifier: null });
      if (typeof e4 == `string` && e4.includes(`:merge(`) || Array.isArray(e4) && e4.some((e5) => e5.includes(`:merge(`))) return;
    } catch {
    }
    let a3 = Object.keys(r3?.values ?? {});
    e3.variants.group(() => {
      e3.variants.functional(t3, (e4, t4) => {
        if (!t4.value) {
          if (r3?.values && `DEFAULT` in r3.values) {
            e4.nodes = i3(r3.values.DEFAULT, t4.modifier, e4.nodes);
            return;
          }
          return null;
        }
        if (t4.value.kind === `arbitrary`) e4.nodes = i3(t4.value.value, t4.modifier, e4.nodes);
        else if (t4.value.kind === `named` && r3?.values) {
          if (!Object.hasOwn(r3.values, t4.value.value)) return null;
          let n4 = r3.values[t4.value.value];
          if (typeof n4 != `string`) return null;
          e4.nodes = i3(n4, t4.modifier, e4.nodes);
        } else return null;
      });
    }, (e4, t4) => {
      if (e4.kind !== `functional` || t4.kind !== `functional`) return 0;
      let n4 = e4.value ? e4.value.value : `DEFAULT`, i4 = t4.value ? t4.value.value : `DEFAULT`, o3 = (r3?.values && Object.hasOwn(r3.values, n4) ? r3.values[n4] : void 0) ?? n4, s2 = (r3?.values && Object.hasOwn(r3.values, i4) ? r3.values[i4] : void 0) ?? i4;
      if (r3 && typeof r3.sort == `function`) return r3.sort({ value: o3, modifier: e4.modifier?.value ?? null }, { value: s2, modifier: t4.modifier?.value ?? null });
      let c2 = a3.indexOf(n4), l2 = a3.indexOf(i4);
      return c2 = c2 === -1 ? a3.length : c2, l2 = l2 === -1 ? a3.length : l2, c2 === l2 ? o3 < s2 ? -1 : 1 : c2 - l2;
    }), e3.variants.suggest(t3, () => Object.keys(r3?.values ?? {}).filter((e4) => e4 !== `DEFAULT`));
  }, addUtilities(n3) {
    n3 = Array.isArray(n3) ? n3 : [n3];
    let o3 = n3.flatMap((e4) => Object.entries(e4));
    o3 = o3.flatMap(([e4, t3]) => g(e4, `,`).map((e5) => [e5.trim(), t3]));
    let s2 = new M(() => []);
    for (let [e4, n4] of o3) {
      if (e4.startsWith(`@keyframes `)) {
        if (!i2) {
          let r4 = B(e4, ka(n4));
          L([r4], (e5) => {
            e5.src = a2;
          }), t2.push(r4);
        }
        continue;
      }
      let r3 = Br(e4), o4 = false;
      if (L(r3, (e5) => {
        if (e5.kind === `selector` && e5.value[0] === `.` && Da.test(e5.value.slice(1))) {
          let t3 = e5.value;
          e5.value = `&`;
          let i3 = br(r3), a3 = t3.slice(1), c2 = i3 === `&` ? ka(n4) : [B(i3, ka(n4))];
          s2.get(a3).push(...c2), o4 = true, e5.value = t3;
          return;
        }
        if (e5.kind === `function` && e5.value === `:not`) return I.Skip;
      }), !o4) throw Error(`\`addUtilities({ '${e4}' : \u2026 })\` defines an invalid utility selector. Utilities must be a single class name and start with a lowercase letter, eg. \`.scrollbar-none\`.`);
    }
    for (let [t3, n4] of s2) e3.theme.prefix && L(n4, (t4) => {
      if (t4.kind === `rule`) {
        let n5 = Br(t4.selector);
        L(n5, (t5) => {
          t5.kind === `selector` && t5.value[0] === `.` && (t5.value = `.${e3.theme.prefix}\\:${t5.value.slice(1)}`);
        }), t4.selector = br(n5);
      }
    }), e3.utilities.static(t3, (i3) => {
      let a3 = n4.map(U);
      return ja(a3, t3, i3.raw), r2.current |= ga(a3, e3), a3;
    });
  }, matchUtilities(t3, n3) {
    let i3 = n3?.type ? Array.isArray(n3?.type) ? n3.type : [n3.type] : [`any`];
    for (let [a3, o3] of Object.entries(t3)) {
      let t4 = function({ negative: t5 }) {
        return (s2) => {
          if (s2.value?.kind === `arbitrary` && i3.length > 0 && !i3.includes(`any`) && (s2.value.dataType && !i3.includes(s2.value.dataType) || !s2.value.dataType && !v(s2.value.value, i3))) return;
          let c2 = i3.includes(`color`), l2 = null, u2 = false;
          {
            let e4 = n3?.values ?? {};
            c2 && (e4 = Object.assign({ inherit: `inherit`, transparent: `transparent`, current: `currentcolor` }, e4)), s2.value ? s2.value.kind === `arbitrary` ? l2 = s2.value.value : s2.value.fraction && Object.hasOwn(e4, s2.value.fraction) ? (l2 = e4[s2.value.fraction], u2 = true) : Object.hasOwn(e4, s2.value.value) ? l2 = e4[s2.value.value] : e4.__BARE_VALUE__ && (l2 = e4.__BARE_VALUE__(s2.value) ?? null, u2 = (s2.value.fraction !== null && l2?.includes(`/`)) ?? false) : l2 = e4.DEFAULT ?? null;
          }
          if (l2 === null) return;
          let d2;
          {
            let e4 = n3?.modifiers ?? null;
            d2 = s2.modifier ? e4 === `any` || s2.modifier.kind === `arbitrary` ? s2.modifier.value : e4 && Object.hasOwn(e4, s2.modifier.value) ? e4[s2.modifier.value] : c2 && !Number.isNaN(Number(s2.modifier.value)) ? `${s2.modifier.value}%` : null : null;
          }
          if (s2.modifier && d2 === null && !u2) return s2.value?.kind === `arbitrary` ? null : void 0;
          c2 && d2 !== null && (l2 = K(l2, d2)), t5 && (l2 = `calc(${l2} * -1)`);
          let f2 = ka(o3(l2, { modifier: d2 }));
          return ja(f2, a3, s2.raw), r2.current |= ga(f2, e3), f2;
        };
      };
      if (!Da.test(a3)) throw Error(`\`matchUtilities({ '${a3}' : \u2026 })\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter, eg. \`scrollbar\`.`);
      n3?.supportsNegativeValues && e3.utilities.functional(`-${a3}`, t4({ negative: true }), { types: i3 }), e3.utilities.functional(a3, t4({ negative: false }), { types: i3 }), e3.utilities.suggest(a3, () => {
        let e4 = n3?.values ?? {}, t5 = new Set(Object.keys(e4));
        t5.delete(`__BARE_VALUE__`), t5.delete(`__CSS_VALUES__`), t5.has(`DEFAULT`) && (t5.delete(`DEFAULT`), t5.add(null));
        let r3 = n3?.modifiers ?? {}, i4 = r3 === `any` ? [] : Object.keys(r3);
        return [{ supportsNegative: n3?.supportsNegativeValues ?? false, values: Array.from(t5), modifiers: i4 }];
      });
    }
  }, addComponents(e4, t3) {
    this.addUtilities(e4, t3);
  }, matchComponents(e4, t3) {
    this.matchUtilities(e4, t3);
  }, theme: Ca(e3, () => n2.theme ?? {}, (e4) => e4), prefix(e4) {
    return e4;
  }, config(e4, t3) {
    let r3 = n2;
    if (!e4) return r3;
    let i3 = Vr(e4);
    for (let e5 = 0; e5 < i3.length; ++e5) {
      let n3 = i3[e5];
      if (r3[n3] === void 0) return t3;
      r3 = r3[n3];
    }
    return r3 ?? t3;
  } };
  return o2.addComponents = o2.addComponents.bind(o2), o2.matchComponents = o2.matchComponents.bind(o2), o2;
}
function ka(e3) {
  let t2 = [];
  e3 = Array.isArray(e3) ? e3 : [e3];
  let n2 = e3.flatMap((e4) => Object.entries(e4));
  for (let [e4, r2] of n2) if (r2 != null && r2 !== false) if (typeof r2 != `object`) {
    if (!e4.startsWith(`--`)) {
      if (r2 === `@slot`) {
        t2.push(B(e4, [z(`@slot`)]));
        continue;
      }
      e4 = e4.replace(/([A-Z])/g, `-$1`).toLowerCase();
    }
    t2.push(V(e4, String(r2)));
  } else if (Array.isArray(r2)) for (let n3 of r2) typeof n3 == `string` ? t2.push(V(e4, n3)) : t2.push(B(e4, ka(n3)));
  else t2.push(B(e4, ka(r2)));
  return t2;
}
function Aa(e3, t2) {
  return (typeof e3 == `string` ? [e3] : e3).flatMap((e4) => {
    if (e4.trim().endsWith(`}`)) {
      let n2 = Ye(e4.replace(`}`, `{@slot}}`));
      return aa(n2, t2), n2;
    } else return B(e4, t2);
  });
}
function ja(e3, t2, n2) {
  L(e3, (e4) => {
    if (e4.kind === `rule`) {
      let r2 = Br(e4.selector);
      L(r2, (e5) => {
        e5.kind === `selector` && e5.value === `.${t2}` && (e5.value = `.${$e(n2)}`);
      }), e4.selector = br(r2);
    }
  });
}
function Ma(e3, t2) {
  for (let n2 of Na(t2)) e3.theme.addKeyframes(n2);
}
function Na(e3) {
  let t2 = [];
  if (`keyframes` in e3.theme) for (let [n2, r2] of Object.entries(e3.theme.keyframes)) t2.push(z(`@keyframes`, n2, ka(r2)));
  return t2;
}
function Pa(e3) {
  return { theme: { ...Ee, colors: ({ theme: e4 }) => e4(`color`, {}), extend: { fontSize: ({ theme: e4 }) => ({ ...e4(`text`, {}) }), boxShadow: ({ theme: e4 }) => ({ ...e4(`shadow`, {}) }), animation: ({ theme: e4 }) => ({ ...e4(`animate`, {}) }), aspectRatio: ({ theme: e4 }) => ({ ...e4(`aspect`, {}) }), borderRadius: ({ theme: e4 }) => ({ ...e4(`radius`, {}) }), screens: ({ theme: e4 }) => ({ ...e4(`breakpoint`, {}) }), letterSpacing: ({ theme: e4 }) => ({ ...e4(`tracking`, {}) }), lineHeight: ({ theme: e4 }) => ({ ...e4(`leading`, {}) }), transitionDuration: { DEFAULT: e3.get([`--default-transition-duration`]) ?? null }, transitionTimingFunction: { DEFAULT: e3.get([`--default-transition-timing-function`]) ?? null }, maxWidth: ({ theme: e4 }) => ({ ...e4(`container`, {}) }) } } };
}
var Fa = { blocklist: [], future: {}, experimental: {}, prefix: ``, important: false, darkMode: null, theme: {}, plugins: [], content: { files: [] } };
function Ia(e3, t2) {
  let n2 = { design: e3, configs: [], plugins: [], content: { files: [] }, theme: {}, extend: {}, result: structuredClone(Fa) };
  for (let e4 of t2) Ra(n2, e4);
  for (let e4 of n2.configs) `darkMode` in e4 && e4.darkMode !== void 0 && (n2.result.darkMode = e4.darkMode ?? null), `prefix` in e4 && e4.prefix !== void 0 && (n2.result.prefix = e4.prefix ?? ``), `blocklist` in e4 && e4.blocklist !== void 0 && (n2.result.blocklist = e4.blocklist ?? []), `important` in e4 && e4.important !== void 0 && (n2.result.important = e4.important ?? false);
  let r2 = za(n2);
  return { resolvedConfig: { ...n2.result, content: n2.content, theme: n2.theme, plugins: n2.plugins }, replacedThemeKeys: r2 };
}
function La(e3, t2) {
  if (Array.isArray(e3) && xa(e3[0])) return e3.concat(t2);
  if (Array.isArray(t2) && xa(t2[0]) && xa(e3)) return [e3, ...t2];
  if (Array.isArray(t2)) return t2;
}
function Ra(e3, { config: t2, base: n2, path: r2, reference: i2, src: a2 }) {
  let o2 = [];
  for (let e4 of t2.plugins ?? []) `__isOptionsFunction` in e4 ? o2.push({ ...e4(), reference: i2, src: a2 }) : `handler` in e4 ? o2.push({ ...e4, reference: i2, src: a2 }) : o2.push({ handler: e4, reference: i2, src: a2 });
  if (Array.isArray(t2.presets) && t2.presets.length === 0) throw Error("Error in the config file/plugin/preset. An empty preset (`preset: []`) is not currently supported.");
  for (let o3 of t2.presets ?? []) Ra(e3, { path: r2, base: n2, config: o3, reference: i2, src: a2 });
  for (let t3 of o2) e3.plugins.push(t3), t3.config && Ra(e3, { path: r2, base: n2, config: t3.config, reference: !!t3.reference, src: t3.src ?? a2 });
  let s2 = t2.content ?? [], c2 = Array.isArray(s2) ? s2 : s2.files;
  for (let t3 of c2) e3.content.files.push(typeof t3 == `object` ? t3 : { base: n2, pattern: t3 });
  e3.configs.push(t2);
}
function za(e3) {
  var _a3;
  let t2 = /* @__PURE__ */ new Set(), r2 = Ca(e3.design, () => e3.theme, a2), i2 = Object.assign(r2, { theme: r2, colors: n });
  function a2(e4) {
    return typeof e4 == `function` ? e4(i2) ?? null : e4 ?? null;
  }
  for (let n2 of e3.configs) {
    let r3 = n2.theme ?? {}, i3 = r3.extend ?? {};
    for (let e4 in r3) e4 !== `extend` && t2.add(e4);
    Object.assign(e3.theme, r3);
    for (let t3 in i3) (_a3 = e3.extend)[t3] ?? (_a3[t3] = []), e3.extend[t3].push(i3[t3]);
  }
  delete e3.theme.extend;
  for (let t3 in e3.extend) {
    let n2 = [e3.theme[t3], ...e3.extend[t3]];
    e3.theme[t3] = () => Sa({}, n2.map(a2), La);
  }
  for (let t3 in e3.theme) e3.theme[t3] = a2(e3.theme[t3]);
  if (e3.theme.screens && typeof e3.theme.screens == `object`) for (let t3 of Object.keys(e3.theme.screens)) {
    let n2 = e3.theme.screens[t3];
    n2 && typeof n2 == `object` && (`raw` in n2 || `max` in n2 || `min` in n2 && (e3.theme.screens[t3] = n2.min));
  }
  return t2;
}
function Ba(e3, t2) {
  let n2 = e3.theme.container || {};
  if (typeof n2 != `object` || !n2) return;
  let r2 = Va(n2, t2);
  r2.length !== 0 && t2.utilities.static(`container`, () => r2.map(U));
}
function Va({ center: e3, padding: t2, screens: n2 }, r2) {
  let i2 = [], a2 = null;
  if (e3 && i2.push(V(`margin-inline`, `auto`)), (typeof t2 == `string` || typeof t2 == `object` && t2 && `DEFAULT` in t2) && i2.push(V(`padding-inline`, typeof t2 == `string` ? t2 : t2.DEFAULT)), typeof n2 == `object` && n2) {
    a2 = /* @__PURE__ */ new Map();
    let e4 = Array.from(r2.theme.namespace(`--breakpoint`).entries());
    if (e4.sort((e5, t3) => sn(e5[1], t3[1], `asc`)), e4.length > 0) {
      let [t3] = e4[0];
      i2.push(z(`@media`, `(width >= --theme(--breakpoint-${t3}))`, [V(`max-width`, `none`)]));
    }
    for (let [e5, t3] of Object.entries(n2)) {
      if (typeof t3 == `object`) if (`min` in t3) t3 = t3.min;
      else continue;
      a2.set(e5, z(`@media`, `(width >= ${t3})`, [V(`max-width`, t3)]));
    }
  }
  if (typeof t2 == `object` && t2) {
    let e4 = Object.entries(t2).filter(([e5]) => e5 !== `DEFAULT`).map(([e5, t3]) => [e5, r2.theme.resolveValue(e5, [`--breakpoint`]), t3]).filter(Boolean);
    e4.sort((e5, t3) => sn(e5[1], t3[1], `asc`));
    for (let [t3, , n3] of e4) if (a2 && a2.has(t3)) a2.get(t3).nodes.push(V(`padding-inline`, n3));
    else {
      if (a2) continue;
      i2.push(z(`@media`, `(width >= theme(--breakpoint-${t3}))`, [V(`padding-inline`, n3)]));
    }
  }
  if (a2) for (let [, e4] of a2) i2.push(e4);
  return i2;
}
function Ha({ addVariant: e3, config: t2 }) {
  let n2 = t2(`darkMode`, null), [r2, i2 = `.dark`] = Array.isArray(n2) ? n2 : [n2];
  if (r2 === `variant`) {
    let e4;
    if (Array.isArray(i2) || typeof i2 == `function` ? e4 = i2 : typeof i2 == `string` && (e4 = [i2]), Array.isArray(e4)) for (let t3 of e4) t3 === `.dark` ? (r2 = false, console.warn('When using `variant` for `darkMode`, you must provide a selector.\nExample: `darkMode: ["variant", ".your-selector &"]`')) : t3.includes(`&`) || (r2 = false, console.warn('When using `variant` for `darkMode`, your selector must contain `&`.\nExample `darkMode: ["variant", ".your-selector &"]`'));
    i2 = e4;
  }
  r2 === null || (r2 === `selector` ? e3(`dark`, `&:where(${i2}, ${i2} *)`) : r2 === `media` ? e3(`dark`, `@media (prefers-color-scheme: dark)`) : r2 === `variant` ? e3(`dark`, i2) : r2 === `class` && e3(`dark`, `&:is(${i2} *)`));
}
function Ua(e3) {
  for (let [t2, n2] of [[`t`, `top`], [`tr`, `top right`], [`r`, `right`], [`br`, `bottom right`], [`b`, `bottom`], [`bl`, `bottom left`], [`l`, `left`], [`tl`, `top left`]]) e3.utilities.suggest(`bg-gradient-to-${t2}`, () => []), e3.utilities.static(`bg-gradient-to-${t2}`, () => [V(`--tw-gradient-position`, `to ${n2} in oklab`), V(`background-image`, `linear-gradient(var(--tw-gradient-stops))`)]);
  e3.utilities.suggest(`bg-left-top`, () => []), e3.utilities.static(`bg-left-top`, () => [V(`background-position`, `left top`)]), e3.utilities.suggest(`bg-right-top`, () => []), e3.utilities.static(`bg-right-top`, () => [V(`background-position`, `right top`)]), e3.utilities.suggest(`bg-left-bottom`, () => []), e3.utilities.static(`bg-left-bottom`, () => [V(`background-position`, `left bottom`)]), e3.utilities.suggest(`bg-right-bottom`, () => []), e3.utilities.static(`bg-right-bottom`, () => [V(`background-position`, `right bottom`)]), e3.utilities.suggest(`object-left-top`, () => []), e3.utilities.static(`object-left-top`, () => [V(`object-position`, `left top`)]), e3.utilities.suggest(`object-right-top`, () => []), e3.utilities.static(`object-right-top`, () => [V(`object-position`, `right top`)]), e3.utilities.suggest(`object-left-bottom`, () => []), e3.utilities.static(`object-left-bottom`, () => [V(`object-position`, `left bottom`)]), e3.utilities.suggest(`object-right-bottom`, () => []), e3.utilities.static(`object-right-bottom`, () => [V(`object-position`, `right bottom`)]), e3.utilities.suggest(`max-w-screen`, () => []), e3.utilities.functional(`max-w-screen`, (t2) => {
    if (!t2.value || t2.value.kind === `arbitrary`) return;
    let n2 = e3.theme.resolve(t2.value.value, [`--breakpoint`]);
    if (n2) return [V(`max-width`, n2)];
  }), e3.utilities.suggest(`overflow-ellipsis`, () => []), e3.utilities.static(`overflow-ellipsis`, () => [V(`text-overflow`, `ellipsis`)]), e3.utilities.suggest(`decoration-slice`, () => []), e3.utilities.static(`decoration-slice`, () => [V(`-webkit-box-decoration-break`, `slice`), V(`box-decoration-break`, `slice`)]), e3.utilities.suggest(`decoration-clone`, () => []), e3.utilities.static(`decoration-clone`, () => [V(`-webkit-box-decoration-break`, `clone`), V(`box-decoration-break`, `clone`)]), e3.utilities.suggest(`flex-shrink`, () => []), e3.utilities.functional(`flex-shrink`, (e4) => {
    if (!e4.modifier) {
      if (!e4.value) return [V(`flex-shrink`, `1`)];
      if (e4.value.kind === `arbitrary` || D(e4.value.value)) return [V(`flex-shrink`, e4.value.value)];
    }
  }), e3.utilities.suggest(`flex-grow`, () => []), e3.utilities.functional(`flex-grow`, (e4) => {
    if (!e4.modifier) {
      if (!e4.value) return [V(`flex-grow`, `1`)];
      if (e4.value.kind === `arbitrary` || D(e4.value.value)) return [V(`flex-grow`, e4.value.value)];
    }
  }), e3.utilities.suggest(`order-none`, () => []), e3.utilities.static(`order-none`, () => [V(`order`, `0`)]), e3.utilities.suggest(`break-words`, () => []), e3.utilities.static(`break-words`, () => [V(`overflow-wrap`, `break-word`)]);
  for (let [t2, n2] of [[`start`, `inset-inline-start`], [`end`, `inset-inline-end`]]) {
    let r2 = function({ negative: t3 }) {
      return (r3) => {
        if (!r3.value) {
          if (r3.modifier) return;
          let i3 = e3.theme.resolve(null, [`--inset`, `--spacing`]);
          return i3 === null ? void 0 : [V(n2, t3 ? `calc(${i3} * -1)` : i3)];
        }
        if (r3.value.kind === `arbitrary`) {
          if (r3.modifier) return;
          let e4 = r3.value.value;
          return [V(n2, t3 ? `calc(${e4} * -1)` : e4)];
        }
        let i2 = e3.theme.resolve(r3.value.fraction ?? r3.value.value, [`--inset`, `--spacing`]);
        if (i2 === null && r3.value.fraction) {
          let [e4, t4] = g(r3.value.fraction, `/`);
          if (!D(e4) || !D(t4)) return;
          i2 = `calc(${r3.value.fraction} * 100%)`;
        }
        if (i2 === null && t3) {
          let t4 = e3.theme.resolve(null, [`--spacing`]);
          if (t4 && O(r3.value.value) && (i2 = `calc(${t4} * -${r3.value.value})`, i2 !== null)) return [V(n2, i2)];
        }
        if (i2 === null) {
          let t4 = e3.theme.resolve(null, [`--spacing`]);
          t4 && O(r3.value.value) && (i2 = `calc(${t4} * ${r3.value.value})`);
        }
        if (i2 !== null) return [V(n2, t3 ? `calc(${i2} * -1)` : i2)];
      };
    };
    e3.utilities.static(`${t2}-auto`, () => [V(n2, `auto`)]), e3.utilities.static(`${t2}-full`, () => [V(n2, `100%`)]), e3.utilities.static(`-${t2}-full`, () => [V(n2, `-100%`)]), e3.utilities.static(`${t2}-px`, () => [V(n2, `1px`)]), e3.utilities.static(`-${t2}-px`, () => [V(n2, `-1px`)]), e3.utilities.functional(`-${t2}`, r2({ negative: true })), e3.utilities.functional(t2, r2({ negative: false }));
  }
}
function Wa(e3, t2) {
  let n2 = e3.theme.screens || {}, r2 = t2.variants.get(`min`)?.order ?? 0, i2 = [];
  for (let [e4, a2] of Object.entries(n2)) {
    let n3 = function(n4) {
      t2.variants.static(e4, (e5) => {
        e5.nodes = [z(`@media`, l2, e5.nodes)];
      }, { order: n4 });
    }, o2 = t2.variants.get(e4), s2 = t2.theme.resolveValue(e4, [`--breakpoint`]);
    if (o2 && s2 && !t2.theme.hasDefault(`--breakpoint-${e4}`)) continue;
    let c2 = true;
    typeof a2 == `string` && (c2 = false);
    let l2 = Ga(a2);
    c2 ? i2.push(n3) : n3(r2);
  }
  if (i2.length !== 0) {
    for (let [, e4] of t2.variants.variants) e4.order > r2 && (e4.order += i2.length);
    t2.variants.compareFns = new Map(Array.from(t2.variants.compareFns).map(([e4, t3]) => (e4 > r2 && (e4 += i2.length), [e4, t3])));
    for (let [e4, t3] of i2.entries()) t3(r2 + e4 + 1);
  }
}
function Ga(e3) {
  return (Array.isArray(e3) ? e3 : [e3]).map((e4) => typeof e4 == `string` ? { min: e4 } : e4 && typeof e4 == `object` ? e4 : null).map((e4) => {
    if (e4 === null) return null;
    if (`raw` in e4) return e4.raw;
    let t2 = ``;
    return e4.max !== void 0 && (t2 += `${e4.max} >= `), t2 += `width`, e4.min !== void 0 && (t2 += ` >= ${e4.min}`), `(${t2})`;
  }).filter(Boolean).join(`, `);
}
function Ka(e3, t2) {
  let n2 = e3.theme.aria || {}, r2 = e3.theme.supports || {}, i2 = e3.theme.data || {};
  if (Object.keys(n2).length > 0) {
    let e4 = t2.variants.get(`aria`), r3 = e4?.applyFn, i3 = e4?.compounds;
    t2.variants.functional(`aria`, (e5, t3) => {
      let i4 = t3.value;
      return i4 && i4.kind === `named` && i4.value in n2 ? r3?.(e5, { ...t3, value: { kind: `arbitrary`, value: n2[i4.value] } }) : r3?.(e5, t3);
    }, { compounds: i3 });
  }
  if (Object.keys(r2).length > 0) {
    let e4 = t2.variants.get(`supports`), n3 = e4?.applyFn, i3 = e4?.compounds;
    t2.variants.functional(`supports`, (e5, t3) => {
      let i4 = t3.value;
      return i4 && i4.kind === `named` && i4.value in r2 ? n3?.(e5, { ...t3, value: { kind: `arbitrary`, value: r2[i4.value] } }) : n3?.(e5, t3);
    }, { compounds: i3 });
  }
  if (Object.keys(i2).length > 0) {
    let e4 = t2.variants.get(`data`), n3 = e4?.applyFn, r3 = e4?.compounds;
    t2.variants.functional(`data`, (e5, t3) => {
      let r4 = t3.value;
      return r4 && r4.kind === `named` && r4.value in i2 ? n3?.(e5, { ...t3, value: { kind: `arbitrary`, value: i2[r4.value] } }) : n3?.(e5, t3);
    }, { compounds: r3 });
  }
}
var qa = /^[a-z]+$/;
async function Ja({ designSystem: e3, base: t2, ast: n2, loadModule: r2, sources: i2 }) {
  let a2 = 0, o2 = [], s2 = [];
  L(n2, (e4, t3) => {
    if (e4.kind !== `at-rule`) return;
    let n3 = Et(t3);
    if (e4.name === `@plugin`) {
      if (n3.parent !== null) throw Error("`@plugin` cannot be nested.");
      let t4 = e4.params.slice(1, -1);
      if (t4.length === 0) throw Error("`@plugin` must have a path.");
      let r3 = {};
      for (let t5 of e4.nodes ?? []) {
        if (t5.kind !== `declaration`) throw Error(`Unexpected \`@plugin\` option:

${W([t5])}

\`@plugin\` options must be a flat list of declarations.`);
        if (t5.value === void 0) continue;
        let e5 = t5.value, n4 = g(e5, `,`).map((e6) => {
          if (e6 = e6.trim(), e6 === `null`) return null;
          if (e6 === `true`) return true;
          if (e6 === `false`) return false;
          if (Number.isNaN(Number(e6))) {
            if (e6[0] === `"` && e6[e6.length - 1] === `"` || e6[0] === `'` && e6[e6.length - 1] === `'`) return e6.slice(1, -1);
            if (e6[0] === `{` && e6[e6.length - 1] === `}`) throw Error(`Unexpected \`@plugin\` option: Value of declaration \`${W([t5]).trim()}\` is not supported.

Using an object as a plugin option is currently only supported in JavaScript configuration files.`);
          } else return Number(e6);
          return e6;
        });
        r3[t5.property] = n4.length === 1 ? n4[0] : n4;
      }
      return o2.push([{ id: t4, base: n3.context.base, reference: !!n3.context.reference, src: e4.src }, Object.keys(r3).length > 0 ? r3 : null]), a2 |= 4, I.Replace([]);
    }
    if (e4.name === `@config`) {
      if (e4.nodes.length > 0) throw Error("`@config` cannot have a body.");
      if (n3.parent !== null) throw Error("`@config` cannot be nested.");
      return s2.push({ id: e4.params.slice(1, -1), base: n3.context.base, reference: !!n3.context.reference, src: e4.src }), a2 |= 4, I.Replace([]);
    }
  }), Ua(e3);
  let c2 = e3.resolveThemeValue;
  if (e3.resolveThemeValue = function(r3, o3) {
    return r3.startsWith(`--`) ? c2(r3, o3) : (a2 |= Ya({ designSystem: e3, base: t2, ast: n2, sources: i2, configs: [], pluginDetails: [] }), e3.resolveThemeValue(r3, o3));
  }, !o2.length && !s2.length) return 0;
  let [l2, u2] = await Promise.all([Promise.all(s2.map(async ({ id: e4, base: t3, reference: n3, src: i3 }) => {
    let a3 = await r2(e4, t3, `config`);
    return { path: e4, base: a3.base, config: a3.module, reference: n3, src: i3 };
  })), Promise.all(o2.map(async ([{ id: e4, base: t3, reference: n3, src: i3 }, a3]) => {
    let o3 = await r2(e4, t3, `plugin`);
    return { path: e4, base: o3.base, plugin: o3.module, options: a3, reference: n3, src: i3 };
  }))]);
  return a2 |= Ya({ designSystem: e3, base: t2, ast: n2, sources: i2, configs: l2, pluginDetails: u2 }), a2;
}
function Ya({ designSystem: e3, base: t2, ast: n2, sources: r2, configs: i2, pluginDetails: a2 }) {
  let o2 = 0, s2 = [...a2.map((e4) => {
    if (!e4.options) return { config: { plugins: [e4.plugin] }, base: e4.base, reference: e4.reference, src: e4.src };
    if (`__isOptionsFunction` in e4.plugin) return { config: { plugins: [e4.plugin(e4.options)] }, base: e4.base, reference: e4.reference, src: e4.src };
    throw Error(`The plugin "${e4.path}" does not accept options`);
  }), ...i2], { resolvedConfig: c2 } = Ia(e3, [{ config: Pa(e3.theme), base: t2, reference: true, src: void 0 }, ...s2, { config: { plugins: [Ha] }, base: t2, reference: true, src: void 0 }]), { resolvedConfig: l2, replacedThemeKeys: u2 } = Ia(e3, s2), d2 = { designSystem: e3, ast: n2, resolvedConfig: c2, featuresRef: { set current(e4) {
    o2 |= e4;
  } } }, f2 = Oa({ ...d2, referenceMode: false, src: void 0 }), p2 = e3.resolveThemeValue;
  e3.resolveThemeValue = function(e4, t3) {
    if (e4[0] === `-` && e4[1] === `-`) return p2(e4, t3);
    let n3 = f2.theme(e4, void 0);
    if (Array.isArray(n3) && n3.length === 2) return n3[0];
    if (Array.isArray(n3)) return n3.join(`, `);
    if (typeof n3 == `object` && n3 && `DEFAULT` in n3) return n3.DEFAULT;
    if (typeof n3 == `string`) return n3;
  };
  for (let { handler: e4, reference: t3, src: n3 } of c2.plugins) e4(Oa({ ...d2, referenceMode: t3 ?? false, src: n3 }));
  if (Yn(e3, l2, u2), Ma(e3, l2), Ka(l2, e3), Wa(l2, e3), Ba(l2, e3), !e3.theme.prefix && c2.prefix) {
    if (c2.prefix.endsWith(`-`) && (c2.prefix = c2.prefix.slice(0, -1), console.warn(`The prefix "${c2.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only and is written as a variant before all utilities. We have fixed up the prefix for you. Remove the trailing \`-\` to silence this warning.`)), !qa.test(c2.prefix)) throw Error(`The prefix "${c2.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
    e3.theme.prefix = c2.prefix;
  }
  if (!e3.important && c2.important === true && (e3.important = true), typeof c2.important == `string`) {
    let e4 = c2.important;
    L(n2, (t3, n3) => {
      if (t3.kind !== `at-rule` || t3.name !== `@tailwind` || t3.params !== `utilities`) return;
      let r3 = Et(n3);
      return r3.parent?.kind === `rule` && r3.parent.selector === e4 ? I.Stop : I.ReplaceStop(R(e4, [t3]));
    });
  }
  for (let t3 of c2.blocklist) e3.invalidCandidates.add(t3);
  for (let e4 of c2.content.files) {
    if (`raw` in e4) throw Error(`Error in the config file/plugin/preset. The \`content\` key contains a \`raw\` entry:

${JSON.stringify(e4, null, 2)}

This feature is not currently supported.`);
    let t3 = false;
    e4.pattern[0] == `!` && (t3 = true, e4.pattern = e4.pattern.slice(1)), r2.push({ ...e4, negated: t3 });
  }
  return o2;
}
function Xa({ ast: e3 }) {
  let t2 = new M((e4) => Oe(e4.code)), n2 = new M((e4) => ({ url: e4.file, content: e4.code, ignore: false })), r2 = { file: null, sources: [], mappings: [] };
  L(e3, (e4) => {
    if (!e4.src || !e4.dst) return;
    let i2 = n2.get(e4.src[0]);
    if (!i2.content) return;
    let a2 = t2.get(e4.src[0]), o2 = t2.get(e4.dst[0]), s2 = i2.content.slice(e4.src[1], e4.src[2]), c2 = 0;
    for (let t3 of s2.split(`
`)) {
      if (t3.trim() !== ``) {
        let t4 = a2.find(e4.src[1] + c2), n3 = o2.find(e4.dst[1]);
        r2.mappings.push({ name: null, originalPosition: { source: i2, ...t4 }, generatedPosition: n3 });
      }
      c2 += t3.length, c2 += 1;
    }
    let l2 = a2.find(e4.src[2]), u2 = o2.find(e4.dst[2]);
    r2.mappings.push({ name: null, originalPosition: { source: i2, ...l2 }, generatedPosition: u2 });
  });
  for (let e4 of t2.keys()) r2.sources.push(n2.get(e4));
  return r2.mappings.sort((e4, t3) => e4.generatedPosition.line - t3.generatedPosition.line || e4.generatedPosition.column - t3.generatedPosition.column || (e4.originalPosition?.line ?? 0) - (t3.originalPosition?.line ?? 0) || (e4.originalPosition?.column ?? 0) - (t3.originalPosition?.column ?? 0)), r2;
}
var Za = /^(-?\d+)\.\.(-?\d+)(?:\.\.(-?\d+))?$/;
function Qa(e3) {
  let t2 = e3.indexOf(`{`);
  if (t2 === -1) return [e3];
  let n2 = [], r2 = e3.slice(0, t2), i2 = e3.slice(t2), a2 = 0, o2 = i2.lastIndexOf(`}`);
  for (let e4 = 0; e4 < i2.length; e4++) {
    let t3 = i2[e4];
    if (t3 === `{`) a2++;
    else if (t3 === `}` && (a2--, a2 === 0)) {
      o2 = e4;
      break;
    }
  }
  if (o2 === -1) throw Error(`The pattern \`${e3}\` is not balanced.`);
  let s2 = i2.slice(1, o2), c2 = i2.slice(o2 + 1), l2;
  l2 = $a(s2) ? eo(s2) : g(s2, `,`), l2 = l2.flatMap((e4) => Qa(e4));
  let u2 = Qa(c2);
  for (let e4 of u2) for (let t3 of l2) n2.push(r2 + t3 + e4);
  return n2;
}
function $a(e3) {
  return Za.test(e3);
}
function eo(e3) {
  let t2 = e3.match(Za);
  if (!t2) return [e3];
  let [, n2, r2, i2] = t2, a2 = i2 ? parseInt(i2, 10) : void 0, o2 = [];
  if (/^-?\d+$/.test(n2) && /^-?\d+$/.test(r2)) {
    let e4 = parseInt(n2, 10), t3 = parseInt(r2, 10);
    if (a2 === void 0 && (a2 = e4 <= t3 ? 1 : -1), a2 === 0) throw Error(`Step cannot be zero in sequence expansion.`);
    let i3 = e4 < t3;
    i3 && a2 < 0 && (a2 = -a2), !i3 && a2 > 0 && (a2 = -a2);
    for (let n3 = e4; i3 ? n3 <= t3 : n3 >= t3; n3 += a2) o2.push(n3.toString());
  }
  return o2;
}
function to(e3, t2) {
  let n2 = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Set(), i2 = [];
  function a2(o2, s2 = []) {
    if (e3.has(o2) && !n2.has(o2)) {
      r2.has(o2) && t2.onCircularDependency?.(s2, o2), r2.add(o2);
      for (let t3 of e3.get(o2) ?? []) s2.push(o2), a2(t3, s2), s2.pop();
      n2.add(o2), r2.delete(o2), i2.push(o2);
    }
  }
  for (let t3 of e3.keys()) a2(t3);
  return i2;
}
var no = /^[a-z]+$/, ro = ((e3) => (e3[e3.None = 0] = `None`, e3[e3.AtProperty = 1] = `AtProperty`, e3[e3.ColorMix = 2] = `ColorMix`, e3[e3.All = 3] = `All`, e3))(ro || {});
function io() {
  throw Error("No `loadModule` function provided to `compile`");
}
function ao() {
  throw Error("No `loadStylesheet` function provided to `compile`");
}
function oo(e3) {
  let t2 = 0, n2 = null;
  for (let r2 of g(e3, ` `)) r2 === `reference` ? t2 |= 2 : r2 === `inline` ? t2 |= 1 : r2 === `default` ? t2 |= 4 : r2 === `static` ? t2 |= 8 : r2.startsWith(`prefix(`) && r2.endsWith(`)`) && (n2 = r2.slice(7, -1));
  return [t2, n2];
}
var so = ((e3) => (e3[e3.None = 0] = `None`, e3[e3.AtApply = 1] = `AtApply`, e3[e3.AtImport = 2] = `AtImport`, e3[e3.JsPluginCompat = 4] = `JsPluginCompat`, e3[e3.ThemeFunction = 8] = `ThemeFunction`, e3[e3.Utilities = 16] = `Utilities`, e3[e3.Variants = 32] = `Variants`, e3[e3.AtTheme = 64] = `AtTheme`, e3))(so || {});
async function co(e3, { base: t2 = ``, from: n2, loadModule: r2 = io, loadStylesheet: i2 = ao } = {}) {
  let a2 = 0;
  e3 = [Tt({ base: t2 }, e3)], a2 |= await va(e3, t2, i2, 0, n2 !== void 0);
  let o2 = null, s2 = new rt(), c2 = /* @__PURE__ */ new Map(), l2 = /* @__PURE__ */ new Map(), u2 = [], d2 = null, f2 = null, p2 = [], m2 = [], h2 = [], _2 = [], v2 = null;
  L(e3, (e4, t3) => {
    if (e4.kind !== `at-rule`) return;
    let n3 = Et(t3);
    if (e4.name === `@tailwind` && (e4.params === `utilities` || e4.params.startsWith(`utilities`))) {
      if (f2 !== null || n3.context.reference) return I.Replace([]);
      let t4 = g(e4.params, ` `);
      for (let e5 of t4) if (e5.startsWith(`source(`)) {
        let t5 = e5.slice(7, -1);
        if (t5 === `none`) {
          v2 = t5;
          continue;
        }
        if (t5[0] === `"` && t5[t5.length - 1] !== `"` || t5[0] === `'` && t5[t5.length - 1] !== `'` || t5[0] !== `'` && t5[0] !== `"`) throw Error("`source(\u2026)` paths must be quoted.");
        v2 = { base: n3.context.sourceBase ?? n3.context.base, pattern: t5.slice(1, -1) };
      }
      f2 = e4, a2 |= 16;
    }
    if (e4.name === `@utility`) {
      if (n3.parent !== null) throw Error("`@utility` cannot be nested.");
      if (e4.nodes.length === 0) throw Error(`\`@utility ${e4.params}\` is empty. Utilities should include at least one property.`);
      let t4 = _n(e4);
      if (t4 === null) {
        if (!e4.params.endsWith(`-*`)) {
          if (e4.params.endsWith(`*`)) throw Error(`\`@utility ${e4.params}\` defines an invalid utility name. A functional utility must end in \`-*\`.`);
          if (e4.params.includes(`*`)) throw Error(`\`@utility ${e4.params}\` defines an invalid utility name. The dynamic portion marked by \`-*\` must appear once at the end.`);
        }
        throw Error(`\`@utility ${e4.params}\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter.`);
      }
      u2.push(t4);
    }
    if (e4.name === `@source`) {
      if (e4.nodes.length > 0) throw Error("`@source` cannot have a body.");
      if (n3.parent !== null) throw Error("`@source` cannot be nested.");
      let t4 = false, r3 = false, i3 = e4.params;
      if (i3[0] === `n` && i3.startsWith(`not `) && (t4 = true, i3 = i3.slice(4)), i3[0] === `i` && i3.startsWith(`inline(`) && (r3 = true, i3 = i3.slice(7, -1).trim()), i3[0] === `"` && i3[i3.length - 1] !== `"` || i3[0] === `'` && i3[i3.length - 1] !== `'` || i3[0] !== `'` && i3[0] !== `"`) throw Error("`@source` paths must be quoted.");
      let a3 = i3.slice(1, -1);
      if (r3) {
        let e5 = t4 ? _2 : h2, n4 = g(a3, ` `);
        for (let t5 of n4) for (let n5 of Qa(t5)) e5.push(n5);
      } else m2.push({ base: n3.context.base, pattern: a3, negated: t4 });
      return I.ReplaceSkip([]);
    }
    if (e4.name === `@variant` && (n3.parent === null ? e4.nodes.length === 0 ? e4.name = `@custom-variant` : (L(e4.nodes, (t4) => {
      if (t4.kind === `at-rule` && t4.name === `@slot`) return e4.name = `@custom-variant`, I.Stop;
    }), e4.name === `@variant` && p2.push(e4)) : p2.push(e4)), e4.name === `@custom-variant`) {
      if (n3.parent !== null) throw Error("`@custom-variant` cannot be nested.");
      let [t4, r3] = g(e4.params, ` `);
      if (!ea.test(t4)) throw Error(`\`@custom-variant ${t4}\` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number.`);
      if (e4.nodes.length > 0 && r3) throw Error(`\`@custom-variant ${t4}\` cannot have both a selector and a body.`);
      if (e4.nodes.length === 0) {
        if (!r3) throw Error(`\`@custom-variant ${t4}\` has no selector or body.`);
        let e5 = g(r3.slice(1, -1), `,`);
        if (e5.length === 0 || e5.some((e6) => e6.trim() === ``)) throw Error(`\`@custom-variant ${t4} (${e5.join(`,`)})\` selector is invalid.`);
        let n4 = [], i3 = [];
        for (let t5 of e5) t5 = t5.trim(), t5[0] === `@` ? n4.push(t5) : i3.push(t5);
        c2.set(t4, (e6) => {
          e6.variants.static(t4, (e7) => {
            let t5 = [];
            i3.length > 0 && t5.push(R(i3.join(`, `), e7.nodes));
            for (let r4 of n4) t5.push(B(r4, e7.nodes));
            e7.nodes = t5;
          }, { compounds: na([...i3, ...n4]) });
        }), l2.set(t4, /* @__PURE__ */ new Set());
      } else {
        let n4 = /* @__PURE__ */ new Set();
        L(e4.nodes, (e5) => {
          e5.kind === `at-rule` && e5.name === `@variant` && n4.add(e5.params);
        }), c2.set(t4, (n5) => {
          n5.variants.fromAst(t4, e4.nodes, n5);
        }), l2.set(t4, n4);
      }
      return I.ReplaceSkip([]);
    }
    if (e4.name === `@media`) {
      let t4 = g(e4.params, ` `), r3 = [];
      for (let i3 of t4) if (i3.startsWith(`source(`)) {
        let t5 = i3.slice(7, -1);
        L(e4.nodes, (e5) => {
          if (e5.kind === `at-rule` && e5.name === `@tailwind` && e5.params === `utilities`) return e5.params += ` source(${t5})`, I.ReplaceStop([Tt({ sourceBase: n3.context.base }, [e5])]);
        });
      } else if (i3.startsWith(`theme(`)) {
        let t5 = i3.slice(6, -1), n4 = t5.includes(`reference`);
        L(e4.nodes, (e5) => {
          if (e5.kind !== `context`) {
            if (e5.kind !== `at-rule`) {
              if (n4) throw Error('Files imported with `@import "\u2026" theme(reference)` must only contain `@theme` blocks.\nUse `@reference "\u2026";` instead.');
              return I.Continue;
            }
            if (e5.name === `@theme`) return e5.params += ` ` + t5, I.Skip;
          }
        });
      } else if (i3.startsWith(`prefix(`)) {
        let t5 = i3.slice(7, -1);
        L(e4.nodes, (e5) => {
          if (e5.kind === `at-rule` && e5.name === `@theme`) return e5.params += ` prefix(${t5})`, I.Skip;
        });
      } else i3 === `important` ? o2 = true : i3 === `reference` ? e4.nodes = [Tt({ reference: true }, e4.nodes)] : r3.push(i3);
      if (r3.length > 0) e4.params = r3.join(` `);
      else if (t4.length > 0) return I.Replace(e4.nodes);
      return I.Continue;
    }
    if (e4.name === `@theme`) {
      let [t4, r3] = oo(e4.params);
      if (a2 |= 64, n3.context.reference && (t4 |= 2), r3) {
        if (!no.test(r3)) throw Error(`The prefix "${r3}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);
        s2.prefix = r3;
      }
      return L(e4.nodes, (n4) => {
        if (n4.kind === `at-rule` && n4.name === `@keyframes`) return s2.addKeyframes(n4), I.Skip;
        if (n4.kind === `comment`) return;
        if (n4.kind === `declaration` && n4.property.startsWith(`--`)) {
          s2.add(et(n4.property), n4.value ?? ``, t4, n4.src);
          return;
        }
        let r4 = W([z(e4.name, e4.params, [n4])]).split(`
`).map((e5, t5, n5) => `${t5 === 0 || t5 >= n5.length - 2 ? ` ` : `>`} ${e5}`).join(`
`);
        throw Error(`\`@theme\` blocks must only contain custom properties or \`@keyframes\`.

${r4}`);
      }), d2 ? I.ReplaceSkip([]) : (d2 = R(`:root, :host`, []), d2.src = e4.src, I.ReplaceSkip(d2));
    }
  });
  let y2 = sa(s2, f2?.src);
  if (o2 && (y2.important = o2), _2.length > 0) for (let e4 of _2) y2.invalidCandidates.add(e4);
  a2 |= await Ja({ designSystem: y2, base: t2, ast: e3, loadModule: r2, sources: m2 });
  for (let e4 of c2.keys()) y2.variants.static(e4, () => {
  });
  for (let e4 of to(l2, { onCircularDependency(e5, t3) {
    let n3 = W(e5.map((n4, r3) => z(`@custom-variant`, n4, [z(`@variant`, e5[r3 + 1] ?? t3, [])]))).replaceAll(`;`, ` { \u2026 }`).replace(`@custom-variant ${t3} {`, `@custom-variant ${t3} { /* \u2190 */`);
    throw Error(`Circular dependency detected in custom variants:

${n3}`);
  } })) c2.get(e4)?.(y2);
  for (let e4 of u2) e4(y2);
  if (d2) {
    let t3 = [];
    for (let [e4, n4] of y2.theme.entries()) {
      if (n4.options & 2) continue;
      let r3 = V($e(e4), n4.value);
      r3.src = n4.src, t3.push(r3);
    }
    let n3 = y2.theme.getKeyframes();
    for (let t4 of n3) e3.push(Tt({ theme: true }, [H([t4])]));
    d2.nodes = [Tt({ theme: true }, t3)];
  }
  if (a2 |= oa(e3, y2), a2 |= Vn(e3, y2), a2 |= ga(e3, y2), f2) {
    let e4 = f2;
    e4.kind = `context`, e4.context = {};
  }
  return L(e3, (e4) => {
    if (e4.kind === `at-rule`) return e4.name === `@utility` ? I.Replace([]) : I.Skip;
  }), { designSystem: y2, ast: e3, sources: m2, root: v2, utilitiesNode: f2, features: a2, inlineCandidates: h2 };
}
async function lo(e3, t2 = {}) {
  let { designSystem: n2, ast: r2, sources: i2, root: a2, utilitiesNode: o2, features: s2, inlineCandidates: c2 } = await co(e3, t2);
  r2.unshift(wt(`! tailwindcss v${De} | MIT License | https://tailwindcss.com `));
  function l2(e4) {
    n2.invalidCandidates.add(e4);
  }
  let u2 = /* @__PURE__ */ new Set(), d2 = null, f2 = 0, p2 = false;
  for (let e4 of c2) n2.invalidCandidates.has(e4) || (u2.add(e4), p2 = true);
  return { sources: i2, root: a2, features: s2, build(i3) {
    if (s2 === 0) return e3;
    if (!o2) return d2 ?? (d2 = Dt(r2, n2, t2.polyfills)), d2;
    let a3 = p2, c3 = false;
    p2 = false;
    let m2 = u2.size;
    for (let e4 of i3) if (!n2.invalidCandidates.has(e4)) if (e4[0] === `-` && e4[1] === `-`) {
      let t3 = n2.theme.markUsedVariable(e4);
      a3 || (a3 = t3), c3 || (c3 = t3);
    } else u2.add(e4), a3 || (a3 = u2.size !== m2);
    if (!a3) return d2 ?? (d2 = Dt(r2, n2, t2.polyfills)), d2;
    let h2 = la(u2, n2, { onInvalidCandidate: l2 }).astNodes;
    return t2.from && L(h2, (e4) => {
      e4.src ?? (e4.src = o2.src);
    }), !c3 && f2 === h2.length ? (d2 ?? (d2 = Dt(r2, n2, t2.polyfills)), d2) : (f2 = h2.length, o2.nodes = h2, d2 = Dt(r2, n2, t2.polyfills), d2);
  } };
}
async function uo(e3, t2 = {}) {
  let n2 = Ye(e3, { from: t2.from }), r2 = await lo(n2, t2), i2 = n2, a2 = e3;
  return { ...r2, build(e4) {
    let n3 = r2.build(e4);
    return n3 === i2 || (a2 = W(n3, !!t2.from), i2 = n3), a2;
  }, buildSourceMap() {
    return Xa({ ast: i2 });
  } };
}
async function fo(e3, t2 = {}) {
  return (await co(Ye(e3, { from: t2.from }), t2)).designSystem;
}
var Q = e(i(), 1), po = { "/tailwindcss": `@import './tailwindcss/index.css';`, "/tailwindcss/index.css": `@layer theme, base, components, utilities;

@layer theme {
  @theme default {
    --font-sans:
      ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
    --font-mono:
      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;

    --color-red-50: oklch(97.1% 0.013 17.38);
    --color-red-100: oklch(93.6% 0.032 17.717);
    --color-red-200: oklch(88.5% 0.062 18.334);
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-700: oklch(50.5% 0.213 27.518);
    --color-red-800: oklch(44.4% 0.177 26.899);
    --color-red-900: oklch(39.6% 0.141 25.723);
    --color-red-950: oklch(25.8% 0.092 26.042);

    --color-orange-50: oklch(98% 0.016 73.684);
    --color-orange-100: oklch(95.4% 0.038 75.164);
    --color-orange-200: oklch(90.1% 0.076 70.697);
    --color-orange-300: oklch(83.7% 0.128 66.29);
    --color-orange-400: oklch(75% 0.183 55.934);
    --color-orange-500: oklch(70.5% 0.213 47.604);
    --color-orange-600: oklch(64.6% 0.222 41.116);
    --color-orange-700: oklch(55.3% 0.195 38.402);
    --color-orange-800: oklch(47% 0.157 37.304);
    --color-orange-900: oklch(40.8% 0.123 38.172);
    --color-orange-950: oklch(26.6% 0.079 36.259);

    --color-amber-50: oklch(98.7% 0.022 95.277);
    --color-amber-100: oklch(96.2% 0.059 95.617);
    --color-amber-200: oklch(92.4% 0.12 95.746);
    --color-amber-300: oklch(87.9% 0.169 91.605);
    --color-amber-400: oklch(82.8% 0.189 84.429);
    --color-amber-500: oklch(76.9% 0.188 70.08);
    --color-amber-600: oklch(66.6% 0.179 58.318);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-amber-800: oklch(47.3% 0.137 46.201);
    --color-amber-900: oklch(41.4% 0.112 45.904);
    --color-amber-950: oklch(27.9% 0.077 45.635);

    --color-yellow-50: oklch(98.7% 0.026 102.212);
    --color-yellow-100: oklch(97.3% 0.071 103.193);
    --color-yellow-200: oklch(94.5% 0.129 101.54);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-400: oklch(85.2% 0.199 91.936);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-yellow-600: oklch(68.1% 0.162 75.834);
    --color-yellow-700: oklch(55.4% 0.135 66.442);
    --color-yellow-800: oklch(47.6% 0.114 61.907);
    --color-yellow-900: oklch(42.1% 0.095 57.708);
    --color-yellow-950: oklch(28.6% 0.066 53.813);

    --color-lime-50: oklch(98.6% 0.031 120.757);
    --color-lime-100: oklch(96.7% 0.067 122.328);
    --color-lime-200: oklch(93.8% 0.127 124.321);
    --color-lime-300: oklch(89.7% 0.196 126.665);
    --color-lime-400: oklch(84.1% 0.238 128.85);
    --color-lime-500: oklch(76.8% 0.233 130.85);
    --color-lime-600: oklch(64.8% 0.2 131.684);
    --color-lime-700: oklch(53.2% 0.157 131.589);
    --color-lime-800: oklch(45.3% 0.124 130.933);
    --color-lime-900: oklch(40.5% 0.101 131.063);
    --color-lime-950: oklch(27.4% 0.072 132.109);

    --color-green-50: oklch(98.2% 0.018 155.826);
    --color-green-100: oklch(96.2% 0.044 156.743);
    --color-green-200: oklch(92.5% 0.084 155.995);
    --color-green-300: oklch(87.1% 0.15 154.449);
    --color-green-400: oklch(79.2% 0.209 151.711);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-green-600: oklch(62.7% 0.194 149.214);
    --color-green-700: oklch(52.7% 0.154 150.069);
    --color-green-800: oklch(44.8% 0.119 151.328);
    --color-green-900: oklch(39.3% 0.095 152.535);
    --color-green-950: oklch(26.6% 0.065 152.934);

    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-100: oklch(95% 0.052 163.051);
    --color-emerald-200: oklch(90.5% 0.093 164.15);
    --color-emerald-300: oklch(84.5% 0.143 164.978);
    --color-emerald-400: oklch(76.5% 0.177 163.223);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-emerald-700: oklch(50.8% 0.118 165.612);
    --color-emerald-800: oklch(43.2% 0.095 166.913);
    --color-emerald-900: oklch(37.8% 0.077 168.94);
    --color-emerald-950: oklch(26.2% 0.051 172.552);

    --color-teal-50: oklch(98.4% 0.014 180.72);
    --color-teal-100: oklch(95.3% 0.051 180.801);
    --color-teal-200: oklch(91% 0.096 180.426);
    --color-teal-300: oklch(85.5% 0.138 181.071);
    --color-teal-400: oklch(77.7% 0.152 181.912);
    --color-teal-500: oklch(70.4% 0.14 182.503);
    --color-teal-600: oklch(60% 0.118 184.704);
    --color-teal-700: oklch(51.1% 0.096 186.391);
    --color-teal-800: oklch(43.7% 0.078 188.216);
    --color-teal-900: oklch(38.6% 0.063 188.416);
    --color-teal-950: oklch(27.7% 0.046 192.524);

    --color-cyan-50: oklch(98.4% 0.019 200.873);
    --color-cyan-100: oklch(95.6% 0.045 203.388);
    --color-cyan-200: oklch(91.7% 0.08 205.041);
    --color-cyan-300: oklch(86.5% 0.127 207.078);
    --color-cyan-400: oklch(78.9% 0.154 211.53);
    --color-cyan-500: oklch(71.5% 0.143 215.221);
    --color-cyan-600: oklch(60.9% 0.126 221.723);
    --color-cyan-700: oklch(52% 0.105 223.128);
    --color-cyan-800: oklch(45% 0.085 224.283);
    --color-cyan-900: oklch(39.8% 0.07 227.392);
    --color-cyan-950: oklch(30.2% 0.056 229.695);

    --color-sky-50: oklch(97.7% 0.013 236.62);
    --color-sky-100: oklch(95.1% 0.026 236.824);
    --color-sky-200: oklch(90.1% 0.058 230.902);
    --color-sky-300: oklch(82.8% 0.111 230.318);
    --color-sky-400: oklch(74.6% 0.16 232.661);
    --color-sky-500: oklch(68.5% 0.169 237.323);
    --color-sky-600: oklch(58.8% 0.158 241.966);
    --color-sky-700: oklch(50% 0.134 242.749);
    --color-sky-800: oklch(44.3% 0.11 240.79);
    --color-sky-900: oklch(39.1% 0.09 240.876);
    --color-sky-950: oklch(29.3% 0.066 243.157);

    --color-blue-50: oklch(97% 0.014 254.604);
    --color-blue-100: oklch(93.2% 0.032 255.585);
    --color-blue-200: oklch(88.2% 0.059 254.128);
    --color-blue-300: oklch(80.9% 0.105 251.813);
    --color-blue-400: oklch(70.7% 0.165 254.624);
    --color-blue-500: oklch(62.3% 0.214 259.815);
    --color-blue-600: oklch(54.6% 0.245 262.881);
    --color-blue-700: oklch(48.8% 0.243 264.376);
    --color-blue-800: oklch(42.4% 0.199 265.638);
    --color-blue-900: oklch(37.9% 0.146 265.522);
    --color-blue-950: oklch(28.2% 0.091 267.935);

    --color-indigo-50: oklch(96.2% 0.018 272.314);
    --color-indigo-100: oklch(93% 0.034 272.788);
    --color-indigo-200: oklch(87% 0.065 274.039);
    --color-indigo-300: oklch(78.5% 0.115 274.713);
    --color-indigo-400: oklch(67.3% 0.182 276.935);
    --color-indigo-500: oklch(58.5% 0.233 277.117);
    --color-indigo-600: oklch(51.1% 0.262 276.966);
    --color-indigo-700: oklch(45.7% 0.24 277.023);
    --color-indigo-800: oklch(39.8% 0.195 277.366);
    --color-indigo-900: oklch(35.9% 0.144 278.697);
    --color-indigo-950: oklch(25.7% 0.09 281.288);

    --color-violet-50: oklch(96.9% 0.016 293.756);
    --color-violet-100: oklch(94.3% 0.029 294.588);
    --color-violet-200: oklch(89.4% 0.057 293.283);
    --color-violet-300: oklch(81.1% 0.111 293.571);
    --color-violet-400: oklch(70.2% 0.183 293.541);
    --color-violet-500: oklch(60.6% 0.25 292.717);
    --color-violet-600: oklch(54.1% 0.281 293.009);
    --color-violet-700: oklch(49.1% 0.27 292.581);
    --color-violet-800: oklch(43.2% 0.232 292.759);
    --color-violet-900: oklch(38% 0.189 293.745);
    --color-violet-950: oklch(28.3% 0.141 291.089);

    --color-purple-50: oklch(97.7% 0.014 308.299);
    --color-purple-100: oklch(94.6% 0.033 307.174);
    --color-purple-200: oklch(90.2% 0.063 306.703);
    --color-purple-300: oklch(82.7% 0.119 306.383);
    --color-purple-400: oklch(71.4% 0.203 305.504);
    --color-purple-500: oklch(62.7% 0.265 303.9);
    --color-purple-600: oklch(55.8% 0.288 302.321);
    --color-purple-700: oklch(49.6% 0.265 301.924);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-purple-900: oklch(38.1% 0.176 304.987);
    --color-purple-950: oklch(29.1% 0.149 302.717);

    --color-fuchsia-50: oklch(97.7% 0.017 320.058);
    --color-fuchsia-100: oklch(95.2% 0.037 318.852);
    --color-fuchsia-200: oklch(90.3% 0.076 319.62);
    --color-fuchsia-300: oklch(83.3% 0.145 321.434);
    --color-fuchsia-400: oklch(74% 0.238 322.16);
    --color-fuchsia-500: oklch(66.7% 0.295 322.15);
    --color-fuchsia-600: oklch(59.1% 0.293 322.896);
    --color-fuchsia-700: oklch(51.8% 0.253 323.949);
    --color-fuchsia-800: oklch(45.2% 0.211 324.591);
    --color-fuchsia-900: oklch(40.1% 0.17 325.612);
    --color-fuchsia-950: oklch(29.3% 0.136 325.661);

    --color-pink-50: oklch(97.1% 0.014 343.198);
    --color-pink-100: oklch(94.8% 0.028 342.258);
    --color-pink-200: oklch(89.9% 0.061 343.231);
    --color-pink-300: oklch(82.3% 0.12 346.018);
    --color-pink-400: oklch(71.8% 0.202 349.761);
    --color-pink-500: oklch(65.6% 0.241 354.308);
    --color-pink-600: oklch(59.2% 0.249 0.584);
    --color-pink-700: oklch(52.5% 0.223 3.958);
    --color-pink-800: oklch(45.9% 0.187 3.815);
    --color-pink-900: oklch(40.8% 0.153 2.432);
    --color-pink-950: oklch(28.4% 0.109 3.907);

    --color-rose-50: oklch(96.9% 0.015 12.422);
    --color-rose-100: oklch(94.1% 0.03 12.58);
    --color-rose-200: oklch(89.2% 0.058 10.001);
    --color-rose-300: oklch(81% 0.117 11.638);
    --color-rose-400: oklch(71.2% 0.194 13.428);
    --color-rose-500: oklch(64.5% 0.246 16.439);
    --color-rose-600: oklch(58.6% 0.253 17.585);
    --color-rose-700: oklch(51.4% 0.222 16.935);
    --color-rose-800: oklch(45.5% 0.188 13.697);
    --color-rose-900: oklch(41% 0.159 10.272);
    --color-rose-950: oklch(27.1% 0.105 12.094);

    --color-slate-50: oklch(98.4% 0.003 247.858);
    --color-slate-100: oklch(96.8% 0.007 247.896);
    --color-slate-200: oklch(92.9% 0.013 255.508);
    --color-slate-300: oklch(86.9% 0.022 252.894);
    --color-slate-400: oklch(70.4% 0.04 256.788);
    --color-slate-500: oklch(55.4% 0.046 257.417);
    --color-slate-600: oklch(44.6% 0.043 257.281);
    --color-slate-700: oklch(37.2% 0.044 257.287);
    --color-slate-800: oklch(27.9% 0.041 260.031);
    --color-slate-900: oklch(20.8% 0.042 265.755);
    --color-slate-950: oklch(12.9% 0.042 264.695);

    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-800: oklch(27.8% 0.033 256.848);
    --color-gray-900: oklch(21% 0.034 264.665);
    --color-gray-950: oklch(13% 0.028 261.692);

    --color-zinc-50: oklch(98.5% 0 0);
    --color-zinc-100: oklch(96.7% 0.001 286.375);
    --color-zinc-200: oklch(92% 0.004 286.32);
    --color-zinc-300: oklch(87.1% 0.006 286.286);
    --color-zinc-400: oklch(70.5% 0.015 286.067);
    --color-zinc-500: oklch(55.2% 0.016 285.938);
    --color-zinc-600: oklch(44.2% 0.017 285.786);
    --color-zinc-700: oklch(37% 0.013 285.805);
    --color-zinc-800: oklch(27.4% 0.006 286.033);
    --color-zinc-900: oklch(21% 0.006 285.885);
    --color-zinc-950: oklch(14.1% 0.005 285.823);

    --color-neutral-50: oklch(98.5% 0 0);
    --color-neutral-100: oklch(97% 0 0);
    --color-neutral-200: oklch(92.2% 0 0);
    --color-neutral-300: oklch(87% 0 0);
    --color-neutral-400: oklch(70.8% 0 0);
    --color-neutral-500: oklch(55.6% 0 0);
    --color-neutral-600: oklch(43.9% 0 0);
    --color-neutral-700: oklch(37.1% 0 0);
    --color-neutral-800: oklch(26.9% 0 0);
    --color-neutral-900: oklch(20.5% 0 0);
    --color-neutral-950: oklch(14.5% 0 0);

    --color-stone-50: oklch(98.5% 0.001 106.423);
    --color-stone-100: oklch(97% 0.001 106.424);
    --color-stone-200: oklch(92.3% 0.003 48.717);
    --color-stone-300: oklch(86.9% 0.005 56.366);
    --color-stone-400: oklch(70.9% 0.01 56.259);
    --color-stone-500: oklch(55.3% 0.013 58.071);
    --color-stone-600: oklch(44.4% 0.011 73.639);
    --color-stone-700: oklch(37.4% 0.01 67.558);
    --color-stone-800: oklch(26.8% 0.007 34.298);
    --color-stone-900: oklch(21.6% 0.006 56.043);
    --color-stone-950: oklch(14.7% 0.004 49.25);

    --color-mauve-50: oklch(98.5% 0 0);
    --color-mauve-100: oklch(96% 0.003 325.6);
    --color-mauve-200: oklch(92.2% 0.005 325.62);
    --color-mauve-300: oklch(86.5% 0.012 325.68);
    --color-mauve-400: oklch(71.1% 0.019 323.02);
    --color-mauve-500: oklch(54.2% 0.034 322.5);
    --color-mauve-600: oklch(43.5% 0.029 321.78);
    --color-mauve-700: oklch(36.4% 0.029 323.89);
    --color-mauve-800: oklch(26.3% 0.024 320.12);
    --color-mauve-900: oklch(21.2% 0.019 322.12);
    --color-mauve-950: oklch(14.5% 0.008 326);

    --color-olive-50: oklch(98.8% 0.003 106.5);
    --color-olive-100: oklch(96.6% 0.005 106.5);
    --color-olive-200: oklch(93% 0.007 106.5);
    --color-olive-300: oklch(88% 0.011 106.6);
    --color-olive-400: oklch(73.7% 0.021 106.9);
    --color-olive-500: oklch(58% 0.031 107.3);
    --color-olive-600: oklch(46.6% 0.025 107.3);
    --color-olive-700: oklch(39.4% 0.023 107.4);
    --color-olive-800: oklch(28.6% 0.016 107.4);
    --color-olive-900: oklch(22.8% 0.013 107.4);
    --color-olive-950: oklch(15.3% 0.006 107.1);

    --color-mist-50: oklch(98.7% 0.002 197.1);
    --color-mist-100: oklch(96.3% 0.002 197.1);
    --color-mist-200: oklch(92.5% 0.005 214.3);
    --color-mist-300: oklch(87.2% 0.007 219.6);
    --color-mist-400: oklch(72.3% 0.014 214.4);
    --color-mist-500: oklch(56% 0.021 213.5);
    --color-mist-600: oklch(45% 0.017 213.2);
    --color-mist-700: oklch(37.8% 0.015 216);
    --color-mist-800: oklch(27.5% 0.011 216.9);
    --color-mist-900: oklch(21.8% 0.008 223.9);
    --color-mist-950: oklch(14.8% 0.004 228.8);

    --color-taupe-50: oklch(98.6% 0.002 67.8);
    --color-taupe-100: oklch(96% 0.002 17.2);
    --color-taupe-200: oklch(92.2% 0.005 34.3);
    --color-taupe-300: oklch(86.8% 0.007 39.5);
    --color-taupe-400: oklch(71.4% 0.014 41.2);
    --color-taupe-500: oklch(54.7% 0.021 43.1);
    --color-taupe-600: oklch(43.8% 0.017 39.3);
    --color-taupe-700: oklch(36.7% 0.016 35.7);
    --color-taupe-800: oklch(26.8% 0.011 36.5);
    --color-taupe-900: oklch(21.4% 0.009 43.1);
    --color-taupe-950: oklch(14.7% 0.004 49.3);

    --color-black: #000;
    --color-white: #fff;

    --spacing: 0.25rem;

    --breakpoint-sm: 40rem;
    --breakpoint-md: 48rem;
    --breakpoint-lg: 64rem;
    --breakpoint-xl: 80rem;
    --breakpoint-2xl: 96rem;

    --container-3xs: 16rem;
    --container-2xs: 18rem;
    --container-xs: 20rem;
    --container-sm: 24rem;
    --container-md: 28rem;
    --container-lg: 32rem;
    --container-xl: 36rem;
    --container-2xl: 42rem;
    --container-3xl: 48rem;
    --container-4xl: 56rem;
    --container-5xl: 64rem;
    --container-6xl: 72rem;
    --container-7xl: 80rem;

    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --text-6xl: 3.75rem;
    --text-6xl--line-height: 1;
    --text-7xl: 4.5rem;
    --text-7xl--line-height: 1;
    --text-8xl: 6rem;
    --text-8xl--line-height: 1;
    --text-9xl: 8rem;
    --text-9xl--line-height: 1;

    --font-weight-thin: 100;
    --font-weight-extralight: 200;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-extrabold: 800;
    --font-weight-black: 900;

    --tracking-tighter: -0.05em;
    --tracking-tight: -0.025em;
    --tracking-normal: 0em;
    --tracking-wide: 0.025em;
    --tracking-wider: 0.05em;
    --tracking-widest: 0.1em;

    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    --leading-loose: 2;

    --radius-xs: 0.125rem;
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;
    --radius-4xl: 2rem;

    --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);
    --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-md:
      0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg:
      0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl:
      0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

    --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);
    --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);
    --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);

    --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);
    --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);
    --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);
    --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);
    --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);
    --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);

    --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);
    --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);
    --text-shadow-sm:
      0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075),
      0px 2px 2px rgb(0 0 0 / 0.075);
    --text-shadow-md:
      0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1),
      0px 2px 4px rgb(0 0 0 / 0.1);
    --text-shadow-lg:
      0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1),
      0px 4px 8px rgb(0 0 0 / 0.1);

    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

    --animate-spin: spin 1s linear infinite;
    --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --animate-bounce: bounce 1s infinite;

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes ping {
      75%,
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @keyframes pulse {
      50% {
        opacity: 0.5;
      }
    }

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }

      50% {
        transform: none;
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }

    --blur-xs: 4px;
    --blur-sm: 8px;
    --blur-md: 12px;
    --blur-lg: 16px;
    --blur-xl: 24px;
    --blur-2xl: 40px;
    --blur-3xl: 64px;

    --perspective-dramatic: 100px;
    --perspective-near: 300px;
    --perspective-normal: 500px;
    --perspective-midrange: 800px;
    --perspective-distant: 1200px;

    --aspect-video: 16 / 9;

    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: --theme(--font-sans, initial);
    --default-font-feature-settings: --theme(
      --font-sans--font-feature-settings,
      initial
    );
    --default-font-variation-settings: --theme(
      --font-sans--font-variation-settings,
      initial
    );
    --default-mono-font-family: --theme(--font-mono, initial);
    --default-mono-font-feature-settings: --theme(
      --font-mono--font-feature-settings,
      initial
    );
    --default-mono-font-variation-settings: --theme(
      --font-mono--font-variation-settings,
      initial
    );
  }

  /* Deprecated */
  @theme default inline reference {
    --blur: 8px;
    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
    --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);
    --radius: 0.25rem;
    --max-width-prose: 65ch;
  }
}

@layer base {
  /*
  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
  2. Remove default margins and padding
  3. Reset all borders.
*/

  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    box-sizing: border-box; /* 1 */
    margin: 0; /* 2 */
    padding: 0; /* 2 */
    border: 0 solid; /* 3 */
  }

  /*
  1. Use a consistent sensible line-height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  3. Use a more readable tab size.
  4. Use the user's configured \`sans\` font-family by default.
  5. Use the user's configured \`sans\` font-feature-settings by default.
  6. Use the user's configured \`sans\` font-variation-settings by default.
  7. Disable tap highlights on iOS.
*/

  html,
  :host {
    line-height: 1.5; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    tab-size: 4; /* 3 */
    font-family: --theme(
      --default-font-family,
      ui-sans-serif,
      system-ui,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji"
    ); /* 4 */
    font-feature-settings: --theme(
      --default-font-feature-settings,
      normal
    ); /* 5 */
    font-variation-settings: --theme(
      --default-font-variation-settings,
      normal
    ); /* 6 */
    -webkit-tap-highlight-color: transparent; /* 7 */
  }

  /*
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  3. Reset the default border style to a 1px solid border.
*/

  hr {
    height: 0; /* 1 */
    color: inherit; /* 2 */
    border-top-width: 1px; /* 3 */
  }

  /*
  Add the correct text decoration in Chrome, Edge, and Safari.
*/

  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  /*
  Remove the default font size and weight for headings.
*/

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  /*
  Reset links to optimize for opt-in styling instead of opt-out.
*/

  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }

  /*
  Add the correct font weight in Edge and Safari.
*/

  b,
  strong {
    font-weight: bolder;
  }

  /*
  1. Use the user's configured \`mono\` font-family by default.
  2. Use the user's configured \`mono\` font-feature-settings by default.
  3. Use the user's configured \`mono\` font-variation-settings by default.
  4. Correct the odd \`em\` font sizing in all browsers.
*/

  code,
  kbd,
  samp,
  pre {
    font-family: --theme(
      --default-mono-font-family,
      ui-monospace,
      SFMono-Regular,
      Menlo,
      Monaco,
      Consolas,
      "Liberation Mono",
      "Courier New",
      monospace
    ); /* 1 */
    font-feature-settings: --theme(
      --default-mono-font-feature-settings,
      normal
    ); /* 2 */
    font-variation-settings: --theme(
      --default-mono-font-variation-settings,
      normal
    ); /* 3 */
    font-size: 1em; /* 4 */
  }

  /*
  Add the correct font size in all browsers.
*/

  small {
    font-size: 80%;
  }

  /*
  Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /*
  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  3. Remove gaps between table borders by default.
*/

  table {
    text-indent: 0; /* 1 */
    border-color: inherit; /* 2 */
    border-collapse: collapse; /* 3 */
  }

  /*
  Use the modern Firefox focus style for all focusable elements.
*/

  :-moz-focusring {
    outline: auto;
  }

  /*
  Add the correct vertical alignment in Chrome and Firefox.
*/

  progress {
    vertical-align: baseline;
  }

  /*
  Add the correct display in Chrome and Safari.
*/

  summary {
    display: list-item;
  }

  /*
  Make lists unstyled by default.
*/

  ol,
  ul,
  menu {
    list-style: none;
  }

  /*
  1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
  2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
      This can trigger a poorly considered lint error in some tools but is included by design.
*/

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block; /* 1 */
    vertical-align: middle; /* 2 */
  }

  /*
  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  /*
  1. Inherit font styles in all browsers.
  2. Remove border radius in all browsers.
  3. Remove background color in all browsers.
  4. Ensure consistent opacity for disabled states in all browsers.
*/

  button,
  input,
  select,
  optgroup,
  textarea,
  ::file-selector-button {
    font: inherit; /* 1 */
    font-feature-settings: inherit; /* 1 */
    font-variation-settings: inherit; /* 1 */
    letter-spacing: inherit; /* 1 */
    color: inherit; /* 1 */
    border-radius: 0; /* 2 */
    background-color: transparent; /* 3 */
    opacity: 1; /* 4 */
  }

  /*
  Restore default font weight.
*/

  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }

  /*
  Restore indentation.
*/

  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }

  /*
  Restore space after button.
*/

  ::file-selector-button {
    margin-inline-end: 4px;
  }

  /*
  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
*/

  ::placeholder {
    opacity: 1;
  }

  /*
  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not
  crash when using \`color-mix(\u2026)\` with \`currentcolor\`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)
*/

  @supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or
    (contain-intrinsic-size: 1px) /* Safari 17+ */ {
    ::placeholder {
      color: color-mix(in oklab, currentcolor 50%, transparent);
    }
  }

  /*
  Prevent resizing textareas horizontally by default.
*/

  textarea {
    resize: vertical;
  }

  /*
  Remove the inner padding in Chrome and Safari on macOS.
*/

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /*
  1. Ensure date/time inputs have the same height when empty in iOS Safari.
  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.
*/

  ::-webkit-date-and-time-value {
    min-height: 1lh; /* 1 */
    text-align: inherit; /* 2 */
  }

  /*
  Prevent height from changing on date/time inputs in macOS Safari when the input is set to \`display: block\`.
*/

  ::-webkit-datetime-edit {
    display: inline-flex;
  }

  /*
  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.
*/

  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }

  ::-webkit-datetime-edit,
  ::-webkit-datetime-edit-year-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-minute-field,
  ::-webkit-datetime-edit-second-field,
  ::-webkit-datetime-edit-millisecond-field,
  ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }

  /*
  Center dropdown marker shown on inputs with paired \`<datalist>\`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)
*/

  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }

  /*
  Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

  :-moz-ui-invalid {
    box-shadow: none;
  }

  /*
  Correct the inability to style the border radius in iOS Safari.
*/

  button,
  input:where([type="button"], [type="reset"], [type="submit"]),
  ::file-selector-button {
    appearance: button;
  }

  /*
  Correct the cursor style of increment and decrement buttons in Safari.
*/

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  /*
  Make elements with the HTML hidden attribute stay hidden by default.
*/

  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}

@layer utilities {
  @tailwind utilities;
}
`, "/tailwindcss/theme.css": `@theme default {
  --font-sans:
    ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
  --font-serif: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
  --font-mono:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;

  --color-red-50: oklch(97.1% 0.013 17.38);
  --color-red-100: oklch(93.6% 0.032 17.717);
  --color-red-200: oklch(88.5% 0.062 18.334);
  --color-red-300: oklch(80.8% 0.114 19.571);
  --color-red-400: oklch(70.4% 0.191 22.216);
  --color-red-500: oklch(63.7% 0.237 25.331);
  --color-red-600: oklch(57.7% 0.245 27.325);
  --color-red-700: oklch(50.5% 0.213 27.518);
  --color-red-800: oklch(44.4% 0.177 26.899);
  --color-red-900: oklch(39.6% 0.141 25.723);
  --color-red-950: oklch(25.8% 0.092 26.042);

  --color-orange-50: oklch(98% 0.016 73.684);
  --color-orange-100: oklch(95.4% 0.038 75.164);
  --color-orange-200: oklch(90.1% 0.076 70.697);
  --color-orange-300: oklch(83.7% 0.128 66.29);
  --color-orange-400: oklch(75% 0.183 55.934);
  --color-orange-500: oklch(70.5% 0.213 47.604);
  --color-orange-600: oklch(64.6% 0.222 41.116);
  --color-orange-700: oklch(55.3% 0.195 38.402);
  --color-orange-800: oklch(47% 0.157 37.304);
  --color-orange-900: oklch(40.8% 0.123 38.172);
  --color-orange-950: oklch(26.6% 0.079 36.259);

  --color-amber-50: oklch(98.7% 0.022 95.277);
  --color-amber-100: oklch(96.2% 0.059 95.617);
  --color-amber-200: oklch(92.4% 0.12 95.746);
  --color-amber-300: oklch(87.9% 0.169 91.605);
  --color-amber-400: oklch(82.8% 0.189 84.429);
  --color-amber-500: oklch(76.9% 0.188 70.08);
  --color-amber-600: oklch(66.6% 0.179 58.318);
  --color-amber-700: oklch(55.5% 0.163 48.998);
  --color-amber-800: oklch(47.3% 0.137 46.201);
  --color-amber-900: oklch(41.4% 0.112 45.904);
  --color-amber-950: oklch(27.9% 0.077 45.635);

  --color-yellow-50: oklch(98.7% 0.026 102.212);
  --color-yellow-100: oklch(97.3% 0.071 103.193);
  --color-yellow-200: oklch(94.5% 0.129 101.54);
  --color-yellow-300: oklch(90.5% 0.182 98.111);
  --color-yellow-400: oklch(85.2% 0.199 91.936);
  --color-yellow-500: oklch(79.5% 0.184 86.047);
  --color-yellow-600: oklch(68.1% 0.162 75.834);
  --color-yellow-700: oklch(55.4% 0.135 66.442);
  --color-yellow-800: oklch(47.6% 0.114 61.907);
  --color-yellow-900: oklch(42.1% 0.095 57.708);
  --color-yellow-950: oklch(28.6% 0.066 53.813);

  --color-lime-50: oklch(98.6% 0.031 120.757);
  --color-lime-100: oklch(96.7% 0.067 122.328);
  --color-lime-200: oklch(93.8% 0.127 124.321);
  --color-lime-300: oklch(89.7% 0.196 126.665);
  --color-lime-400: oklch(84.1% 0.238 128.85);
  --color-lime-500: oklch(76.8% 0.233 130.85);
  --color-lime-600: oklch(64.8% 0.2 131.684);
  --color-lime-700: oklch(53.2% 0.157 131.589);
  --color-lime-800: oklch(45.3% 0.124 130.933);
  --color-lime-900: oklch(40.5% 0.101 131.063);
  --color-lime-950: oklch(27.4% 0.072 132.109);

  --color-green-50: oklch(98.2% 0.018 155.826);
  --color-green-100: oklch(96.2% 0.044 156.743);
  --color-green-200: oklch(92.5% 0.084 155.995);
  --color-green-300: oklch(87.1% 0.15 154.449);
  --color-green-400: oklch(79.2% 0.209 151.711);
  --color-green-500: oklch(72.3% 0.219 149.579);
  --color-green-600: oklch(62.7% 0.194 149.214);
  --color-green-700: oklch(52.7% 0.154 150.069);
  --color-green-800: oklch(44.8% 0.119 151.328);
  --color-green-900: oklch(39.3% 0.095 152.535);
  --color-green-950: oklch(26.6% 0.065 152.934);

  --color-emerald-50: oklch(97.9% 0.021 166.113);
  --color-emerald-100: oklch(95% 0.052 163.051);
  --color-emerald-200: oklch(90.5% 0.093 164.15);
  --color-emerald-300: oklch(84.5% 0.143 164.978);
  --color-emerald-400: oklch(76.5% 0.177 163.223);
  --color-emerald-500: oklch(69.6% 0.17 162.48);
  --color-emerald-600: oklch(59.6% 0.145 163.225);
  --color-emerald-700: oklch(50.8% 0.118 165.612);
  --color-emerald-800: oklch(43.2% 0.095 166.913);
  --color-emerald-900: oklch(37.8% 0.077 168.94);
  --color-emerald-950: oklch(26.2% 0.051 172.552);

  --color-teal-50: oklch(98.4% 0.014 180.72);
  --color-teal-100: oklch(95.3% 0.051 180.801);
  --color-teal-200: oklch(91% 0.096 180.426);
  --color-teal-300: oklch(85.5% 0.138 181.071);
  --color-teal-400: oklch(77.7% 0.152 181.912);
  --color-teal-500: oklch(70.4% 0.14 182.503);
  --color-teal-600: oklch(60% 0.118 184.704);
  --color-teal-700: oklch(51.1% 0.096 186.391);
  --color-teal-800: oklch(43.7% 0.078 188.216);
  --color-teal-900: oklch(38.6% 0.063 188.416);
  --color-teal-950: oklch(27.7% 0.046 192.524);

  --color-cyan-50: oklch(98.4% 0.019 200.873);
  --color-cyan-100: oklch(95.6% 0.045 203.388);
  --color-cyan-200: oklch(91.7% 0.08 205.041);
  --color-cyan-300: oklch(86.5% 0.127 207.078);
  --color-cyan-400: oklch(78.9% 0.154 211.53);
  --color-cyan-500: oklch(71.5% 0.143 215.221);
  --color-cyan-600: oklch(60.9% 0.126 221.723);
  --color-cyan-700: oklch(52% 0.105 223.128);
  --color-cyan-800: oklch(45% 0.085 224.283);
  --color-cyan-900: oklch(39.8% 0.07 227.392);
  --color-cyan-950: oklch(30.2% 0.056 229.695);

  --color-sky-50: oklch(97.7% 0.013 236.62);
  --color-sky-100: oklch(95.1% 0.026 236.824);
  --color-sky-200: oklch(90.1% 0.058 230.902);
  --color-sky-300: oklch(82.8% 0.111 230.318);
  --color-sky-400: oklch(74.6% 0.16 232.661);
  --color-sky-500: oklch(68.5% 0.169 237.323);
  --color-sky-600: oklch(58.8% 0.158 241.966);
  --color-sky-700: oklch(50% 0.134 242.749);
  --color-sky-800: oklch(44.3% 0.11 240.79);
  --color-sky-900: oklch(39.1% 0.09 240.876);
  --color-sky-950: oklch(29.3% 0.066 243.157);

  --color-blue-50: oklch(97% 0.014 254.604);
  --color-blue-100: oklch(93.2% 0.032 255.585);
  --color-blue-200: oklch(88.2% 0.059 254.128);
  --color-blue-300: oklch(80.9% 0.105 251.813);
  --color-blue-400: oklch(70.7% 0.165 254.624);
  --color-blue-500: oklch(62.3% 0.214 259.815);
  --color-blue-600: oklch(54.6% 0.245 262.881);
  --color-blue-700: oklch(48.8% 0.243 264.376);
  --color-blue-800: oklch(42.4% 0.199 265.638);
  --color-blue-900: oklch(37.9% 0.146 265.522);
  --color-blue-950: oklch(28.2% 0.091 267.935);

  --color-indigo-50: oklch(96.2% 0.018 272.314);
  --color-indigo-100: oklch(93% 0.034 272.788);
  --color-indigo-200: oklch(87% 0.065 274.039);
  --color-indigo-300: oklch(78.5% 0.115 274.713);
  --color-indigo-400: oklch(67.3% 0.182 276.935);
  --color-indigo-500: oklch(58.5% 0.233 277.117);
  --color-indigo-600: oklch(51.1% 0.262 276.966);
  --color-indigo-700: oklch(45.7% 0.24 277.023);
  --color-indigo-800: oklch(39.8% 0.195 277.366);
  --color-indigo-900: oklch(35.9% 0.144 278.697);
  --color-indigo-950: oklch(25.7% 0.09 281.288);

  --color-violet-50: oklch(96.9% 0.016 293.756);
  --color-violet-100: oklch(94.3% 0.029 294.588);
  --color-violet-200: oklch(89.4% 0.057 293.283);
  --color-violet-300: oklch(81.1% 0.111 293.571);
  --color-violet-400: oklch(70.2% 0.183 293.541);
  --color-violet-500: oklch(60.6% 0.25 292.717);
  --color-violet-600: oklch(54.1% 0.281 293.009);
  --color-violet-700: oklch(49.1% 0.27 292.581);
  --color-violet-800: oklch(43.2% 0.232 292.759);
  --color-violet-900: oklch(38% 0.189 293.745);
  --color-violet-950: oklch(28.3% 0.141 291.089);

  --color-purple-50: oklch(97.7% 0.014 308.299);
  --color-purple-100: oklch(94.6% 0.033 307.174);
  --color-purple-200: oklch(90.2% 0.063 306.703);
  --color-purple-300: oklch(82.7% 0.119 306.383);
  --color-purple-400: oklch(71.4% 0.203 305.504);
  --color-purple-500: oklch(62.7% 0.265 303.9);
  --color-purple-600: oklch(55.8% 0.288 302.321);
  --color-purple-700: oklch(49.6% 0.265 301.924);
  --color-purple-800: oklch(43.8% 0.218 303.724);
  --color-purple-900: oklch(38.1% 0.176 304.987);
  --color-purple-950: oklch(29.1% 0.149 302.717);

  --color-fuchsia-50: oklch(97.7% 0.017 320.058);
  --color-fuchsia-100: oklch(95.2% 0.037 318.852);
  --color-fuchsia-200: oklch(90.3% 0.076 319.62);
  --color-fuchsia-300: oklch(83.3% 0.145 321.434);
  --color-fuchsia-400: oklch(74% 0.238 322.16);
  --color-fuchsia-500: oklch(66.7% 0.295 322.15);
  --color-fuchsia-600: oklch(59.1% 0.293 322.896);
  --color-fuchsia-700: oklch(51.8% 0.253 323.949);
  --color-fuchsia-800: oklch(45.2% 0.211 324.591);
  --color-fuchsia-900: oklch(40.1% 0.17 325.612);
  --color-fuchsia-950: oklch(29.3% 0.136 325.661);

  --color-pink-50: oklch(97.1% 0.014 343.198);
  --color-pink-100: oklch(94.8% 0.028 342.258);
  --color-pink-200: oklch(89.9% 0.061 343.231);
  --color-pink-300: oklch(82.3% 0.12 346.018);
  --color-pink-400: oklch(71.8% 0.202 349.761);
  --color-pink-500: oklch(65.6% 0.241 354.308);
  --color-pink-600: oklch(59.2% 0.249 0.584);
  --color-pink-700: oklch(52.5% 0.223 3.958);
  --color-pink-800: oklch(45.9% 0.187 3.815);
  --color-pink-900: oklch(40.8% 0.153 2.432);
  --color-pink-950: oklch(28.4% 0.109 3.907);

  --color-rose-50: oklch(96.9% 0.015 12.422);
  --color-rose-100: oklch(94.1% 0.03 12.58);
  --color-rose-200: oklch(89.2% 0.058 10.001);
  --color-rose-300: oklch(81% 0.117 11.638);
  --color-rose-400: oklch(71.2% 0.194 13.428);
  --color-rose-500: oklch(64.5% 0.246 16.439);
  --color-rose-600: oklch(58.6% 0.253 17.585);
  --color-rose-700: oklch(51.4% 0.222 16.935);
  --color-rose-800: oklch(45.5% 0.188 13.697);
  --color-rose-900: oklch(41% 0.159 10.272);
  --color-rose-950: oklch(27.1% 0.105 12.094);

  --color-slate-50: oklch(98.4% 0.003 247.858);
  --color-slate-100: oklch(96.8% 0.007 247.896);
  --color-slate-200: oklch(92.9% 0.013 255.508);
  --color-slate-300: oklch(86.9% 0.022 252.894);
  --color-slate-400: oklch(70.4% 0.04 256.788);
  --color-slate-500: oklch(55.4% 0.046 257.417);
  --color-slate-600: oklch(44.6% 0.043 257.281);
  --color-slate-700: oklch(37.2% 0.044 257.287);
  --color-slate-800: oklch(27.9% 0.041 260.031);
  --color-slate-900: oklch(20.8% 0.042 265.755);
  --color-slate-950: oklch(12.9% 0.042 264.695);

  --color-gray-50: oklch(98.5% 0.002 247.839);
  --color-gray-100: oklch(96.7% 0.003 264.542);
  --color-gray-200: oklch(92.8% 0.006 264.531);
  --color-gray-300: oklch(87.2% 0.01 258.338);
  --color-gray-400: oklch(70.7% 0.022 261.325);
  --color-gray-500: oklch(55.1% 0.027 264.364);
  --color-gray-600: oklch(44.6% 0.03 256.802);
  --color-gray-700: oklch(37.3% 0.034 259.733);
  --color-gray-800: oklch(27.8% 0.033 256.848);
  --color-gray-900: oklch(21% 0.034 264.665);
  --color-gray-950: oklch(13% 0.028 261.692);

  --color-zinc-50: oklch(98.5% 0 0);
  --color-zinc-100: oklch(96.7% 0.001 286.375);
  --color-zinc-200: oklch(92% 0.004 286.32);
  --color-zinc-300: oklch(87.1% 0.006 286.286);
  --color-zinc-400: oklch(70.5% 0.015 286.067);
  --color-zinc-500: oklch(55.2% 0.016 285.938);
  --color-zinc-600: oklch(44.2% 0.017 285.786);
  --color-zinc-700: oklch(37% 0.013 285.805);
  --color-zinc-800: oklch(27.4% 0.006 286.033);
  --color-zinc-900: oklch(21% 0.006 285.885);
  --color-zinc-950: oklch(14.1% 0.005 285.823);

  --color-neutral-50: oklch(98.5% 0 0);
  --color-neutral-100: oklch(97% 0 0);
  --color-neutral-200: oklch(92.2% 0 0);
  --color-neutral-300: oklch(87% 0 0);
  --color-neutral-400: oklch(70.8% 0 0);
  --color-neutral-500: oklch(55.6% 0 0);
  --color-neutral-600: oklch(43.9% 0 0);
  --color-neutral-700: oklch(37.1% 0 0);
  --color-neutral-800: oklch(26.9% 0 0);
  --color-neutral-900: oklch(20.5% 0 0);
  --color-neutral-950: oklch(14.5% 0 0);

  --color-stone-50: oklch(98.5% 0.001 106.423);
  --color-stone-100: oklch(97% 0.001 106.424);
  --color-stone-200: oklch(92.3% 0.003 48.717);
  --color-stone-300: oklch(86.9% 0.005 56.366);
  --color-stone-400: oklch(70.9% 0.01 56.259);
  --color-stone-500: oklch(55.3% 0.013 58.071);
  --color-stone-600: oklch(44.4% 0.011 73.639);
  --color-stone-700: oklch(37.4% 0.01 67.558);
  --color-stone-800: oklch(26.8% 0.007 34.298);
  --color-stone-900: oklch(21.6% 0.006 56.043);
  --color-stone-950: oklch(14.7% 0.004 49.25);

  --color-mauve-50: oklch(98.5% 0 0);
  --color-mauve-100: oklch(96% 0.003 325.6);
  --color-mauve-200: oklch(92.2% 0.005 325.62);
  --color-mauve-300: oklch(86.5% 0.012 325.68);
  --color-mauve-400: oklch(71.1% 0.019 323.02);
  --color-mauve-500: oklch(54.2% 0.034 322.5);
  --color-mauve-600: oklch(43.5% 0.029 321.78);
  --color-mauve-700: oklch(36.4% 0.029 323.89);
  --color-mauve-800: oklch(26.3% 0.024 320.12);
  --color-mauve-900: oklch(21.2% 0.019 322.12);
  --color-mauve-950: oklch(14.5% 0.008 326);

  --color-olive-50: oklch(98.8% 0.003 106.5);
  --color-olive-100: oklch(96.6% 0.005 106.5);
  --color-olive-200: oklch(93% 0.007 106.5);
  --color-olive-300: oklch(88% 0.011 106.6);
  --color-olive-400: oklch(73.7% 0.021 106.9);
  --color-olive-500: oklch(58% 0.031 107.3);
  --color-olive-600: oklch(46.6% 0.025 107.3);
  --color-olive-700: oklch(39.4% 0.023 107.4);
  --color-olive-800: oklch(28.6% 0.016 107.4);
  --color-olive-900: oklch(22.8% 0.013 107.4);
  --color-olive-950: oklch(15.3% 0.006 107.1);

  --color-mist-50: oklch(98.7% 0.002 197.1);
  --color-mist-100: oklch(96.3% 0.002 197.1);
  --color-mist-200: oklch(92.5% 0.005 214.3);
  --color-mist-300: oklch(87.2% 0.007 219.6);
  --color-mist-400: oklch(72.3% 0.014 214.4);
  --color-mist-500: oklch(56% 0.021 213.5);
  --color-mist-600: oklch(45% 0.017 213.2);
  --color-mist-700: oklch(37.8% 0.015 216);
  --color-mist-800: oklch(27.5% 0.011 216.9);
  --color-mist-900: oklch(21.8% 0.008 223.9);
  --color-mist-950: oklch(14.8% 0.004 228.8);

  --color-taupe-50: oklch(98.6% 0.002 67.8);
  --color-taupe-100: oklch(96% 0.002 17.2);
  --color-taupe-200: oklch(92.2% 0.005 34.3);
  --color-taupe-300: oklch(86.8% 0.007 39.5);
  --color-taupe-400: oklch(71.4% 0.014 41.2);
  --color-taupe-500: oklch(54.7% 0.021 43.1);
  --color-taupe-600: oklch(43.8% 0.017 39.3);
  --color-taupe-700: oklch(36.7% 0.016 35.7);
  --color-taupe-800: oklch(26.8% 0.011 36.5);
  --color-taupe-900: oklch(21.4% 0.009 43.1);
  --color-taupe-950: oklch(14.7% 0.004 49.3);

  --color-black: #000;
  --color-white: #fff;

  --spacing: 0.25rem;

  --breakpoint-sm: 40rem;
  --breakpoint-md: 48rem;
  --breakpoint-lg: 64rem;
  --breakpoint-xl: 80rem;
  --breakpoint-2xl: 96rem;

  --container-3xs: 16rem;
  --container-2xs: 18rem;
  --container-xs: 20rem;
  --container-sm: 24rem;
  --container-md: 28rem;
  --container-lg: 32rem;
  --container-xl: 36rem;
  --container-2xl: 42rem;
  --container-3xl: 48rem;
  --container-4xl: 56rem;
  --container-5xl: 64rem;
  --container-6xl: 72rem;
  --container-7xl: 80rem;

  --text-xs: 0.75rem;
  --text-xs--line-height: calc(1 / 0.75);
  --text-sm: 0.875rem;
  --text-sm--line-height: calc(1.25 / 0.875);
  --text-base: 1rem;
  --text-base--line-height: calc(1.5 / 1);
  --text-lg: 1.125rem;
  --text-lg--line-height: calc(1.75 / 1.125);
  --text-xl: 1.25rem;
  --text-xl--line-height: calc(1.75 / 1.25);
  --text-2xl: 1.5rem;
  --text-2xl--line-height: calc(2 / 1.5);
  --text-3xl: 1.875rem;
  --text-3xl--line-height: calc(2.25 / 1.875);
  --text-4xl: 2.25rem;
  --text-4xl--line-height: calc(2.5 / 2.25);
  --text-5xl: 3rem;
  --text-5xl--line-height: 1;
  --text-6xl: 3.75rem;
  --text-6xl--line-height: 1;
  --text-7xl: 4.5rem;
  --text-7xl--line-height: 1;
  --text-8xl: 6rem;
  --text-8xl--line-height: 1;
  --text-9xl: 8rem;
  --text-9xl--line-height: 1;

  --font-weight-thin: 100;
  --font-weight-extralight: 200;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;

  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0em;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;

  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;

  --radius-xs: 0.125rem;
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-4xl: 2rem;

  --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);
  --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);
  --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);

  --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);
  --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);
  --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);
  --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);
  --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);
  --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);

  --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);
  --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);
  --text-shadow-sm:
    0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075);
  --text-shadow-md:
    0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1), 0px 2px 4px rgb(0 0 0 / 0.1);
  --text-shadow-lg:
    0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1), 0px 4px 8px rgb(0 0 0 / 0.1);

  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  --animate-spin: spin 1s linear infinite;
  --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  --animate-bounce: bounce 1s infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  --blur-xs: 4px;
  --blur-sm: 8px;
  --blur-md: 12px;
  --blur-lg: 16px;
  --blur-xl: 24px;
  --blur-2xl: 40px;
  --blur-3xl: 64px;

  --perspective-dramatic: 100px;
  --perspective-near: 300px;
  --perspective-normal: 500px;
  --perspective-midrange: 800px;
  --perspective-distant: 1200px;

  --aspect-video: 16 / 9;

  --default-transition-duration: 150ms;
  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --default-font-family: --theme(--font-sans, initial);
  --default-font-feature-settings: --theme(--font-sans--font-feature-settings, initial);
  --default-font-variation-settings: --theme(--font-sans--font-variation-settings, initial);
  --default-mono-font-family: --theme(--font-mono, initial);
  --default-mono-font-feature-settings: --theme(--font-mono--font-feature-settings, initial);
  --default-mono-font-variation-settings: --theme(--font-mono--font-variation-settings, initial);
}

/* Deprecated */
@theme default inline reference {
  --blur: 8px;
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);
  --radius: 0.25rem;
  --max-width-prose: 65ch;
}
`, "/tailwindcss/preflight.css": `/*
  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
  2. Remove default margins and padding
  3. Reset all borders.
*/

*,
::after,
::before,
::backdrop,
::file-selector-button {
  box-sizing: border-box; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 2 */
  border: 0 solid; /* 3 */
}

/*
  1. Use a consistent sensible line-height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  3. Use a more readable tab size.
  4. Use the user's configured \`sans\` font-family by default.
  5. Use the user's configured \`sans\` font-feature-settings by default.
  6. Use the user's configured \`sans\` font-variation-settings by default.
  7. Disable tap highlights on iOS.
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  tab-size: 4; /* 3 */
  font-family: --theme(
    --default-font-family,
    ui-sans-serif,
    system-ui,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji'
  ); /* 4 */
  font-feature-settings: --theme(--default-font-feature-settings, normal); /* 5 */
  font-variation-settings: --theme(--default-font-variation-settings, normal); /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  3. Reset the default border style to a 1px solid border.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
  Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

/*
  Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
  Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
}

/*
  Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
  1. Use the user's configured \`mono\` font-family by default.
  2. Use the user's configured \`mono\` font-feature-settings by default.
  3. Use the user's configured \`mono\` font-variation-settings by default.
  4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: --theme(
    --default-mono-font-family,
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    'Liberation Mono',
    'Courier New',
    monospace
  ); /* 1 */
  font-feature-settings: --theme(--default-mono-font-feature-settings, normal); /* 2 */
  font-variation-settings: --theme(--default-mono-font-variation-settings, normal); /* 3 */
  font-size: 1em; /* 4 */
}

/*
  Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
  Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
  Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
  Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
  Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
  Make lists unstyled by default.
*/

ol,
ul,
menu {
  list-style: none;
}

/*
  1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
  2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
      This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/*
  1. Inherit font styles in all browsers.
  2. Remove border radius in all browsers.
  3. Remove background color in all browsers.
  4. Ensure consistent opacity for disabled states in all browsers.
*/

button,
input,
select,
optgroup,
textarea,
::file-selector-button {
  font: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  border-radius: 0; /* 2 */
  background-color: transparent; /* 3 */
  opacity: 1; /* 4 */
}

/*
  Restore default font weight.
*/

:where(select:is([multiple], [size])) optgroup {
  font-weight: bolder;
}

/*
  Restore indentation.
*/

:where(select:is([multiple], [size])) optgroup option {
  padding-inline-start: 20px;
}

/*
  Restore space after button.
*/

::file-selector-button {
  margin-inline-end: 4px;
}

/*
  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
*/

::placeholder {
  opacity: 1;
}

/*
  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not
  crash when using \`color-mix(\u2026)\` with \`currentcolor\`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)
*/

@supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or
  (contain-intrinsic-size: 1px) /* Safari 17+ */ {
  ::placeholder {
    color: color-mix(in oklab, currentcolor 50%, transparent);
  }
}

/*
  Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
  Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
  1. Ensure date/time inputs have the same height when empty in iOS Safari.
  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.
*/

::-webkit-date-and-time-value {
  min-height: 1lh; /* 1 */
  text-align: inherit; /* 2 */
}

/*
  Prevent height from changing on date/time inputs in macOS Safari when the input is set to \`display: block\`.
*/

::-webkit-datetime-edit {
  display: inline-flex;
}

/*
  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.
*/

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-datetime-edit,
::-webkit-datetime-edit-year-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-minute-field,
::-webkit-datetime-edit-second-field,
::-webkit-datetime-edit-millisecond-field,
::-webkit-datetime-edit-meridiem-field {
  padding-block: 0;
}

/*
  Center dropdown marker shown on inputs with paired \`<datalist>\`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)
*/

::-webkit-calendar-picker-indicator {
  line-height: 1;
}

/*
  Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
  Correct the inability to style the border radius in iOS Safari.
*/

button,
input:where([type='button'], [type='reset'], [type='submit']),
::file-selector-button {
  appearance: button;
}

/*
  Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
  Make elements with the HTML hidden attribute stay hidden by default.
*/

[hidden]:where(:not([hidden='until-found'])) {
  display: none !important;
}
`, "/tailwindcss/utilities.css": `@tailwind utilities;
` };
async function mo(e3) {
  return await fetch(e3).then((e4) => e4.text());
}
async function ho(e3, t2 = `/`, n2 = {}) {
  t2 || (t2 = `/`);
  let r2 = e3;
  if (e3.startsWith(`fetch:`) && c(e3.substring(6))) return { base: Q.default.dirname(e3), content: await mo(new URL(e3.substring(6)).toString()), path: e3 };
  {
    for (let [e4, t3] of Object.entries(po)) Object.keys(n2).includes(e4) || (n2[e4] = t3);
    !e3.startsWith(`/`) && (Object.keys(po).includes(Q.default.resolve(e3)) || Object.keys(po).includes(Q.default.resolve(e3).concat(`.css`))) && (t2 = `/`, e3 = Q.default.resolve(e3)), e3.startsWith(`.`) && (e3 = Q.default.resolve(t2, e3)), e3.startsWith(`/`) && (e3.endsWith(`.css`) || (Object.keys(n2).some((t3) => t3.includes(e3.concat(`.css`))) ? e3 = e3.concat(`.css`) : Object.keys(n2).some((t3) => t3.includes(e3.concat(`/index.css`))) && (e3 = e3.concat(`/index.css`))));
    let i2 = Q.default.resolve(t2, e3);
    if (n2[i2]) return { base: Q.default.dirname(e3), content: n2[i2], path: e3 };
    let a2 = new URL(e3, `https://esm.sh`);
    i2 = a2.pathname;
    let o2 = false, s2 = null, c2 = null, l2 = [i2];
    i2.endsWith(`.css`) || (l2.push(i2 + `.css`), l2.push(i2 + `/index.css`)), i2 = i2.concat(a2.search);
    for (let t3 of l2) try {
      c2 = t3;
      let r3 = await fetch(`https://esm.sh${t3}`);
      if (!r3.ok) throw Error();
      let a3 = r3.headers.get(`content-type`) || ``;
      if (!a3.includes(`text/css`)) throw Error(`Response is not a CSS file: ${a3}`);
      let s3 = await r3.text();
      s3 = s3.replace(/@config\s+['|"](.*)['|"]/g, (t4, n3) => `@config 'https://esm.sh${Q.default.resolve(Q.default.dirname(e3))}${Q.default.resolve(n3)}'`).replace(/@plugin\s+['|"](.*)['|"]/g, (t4, n3) => `@plugin 'https://esm.sh${Q.default.resolve(Q.default.dirname(e3))}${Q.default.resolve(n3)}'`), n2[t3] = s3, i2 = t3, o2 = true;
      break;
    } catch (e4) {
      s2 = e4;
    }
    if (s2) if (o2) console.warn(`Warning: The stylesheet '${r2}' was successfully fetched from the CDN using fallback path '${c2}'.`);
    else throw Error(r2.startsWith(`.`) ? `Cannot find stylesheet '${r2}' on the Simple File System` : `Cannot find stylesheet '${r2}' on the CDN`);
    return { base: Q.default.dirname(e3), content: n2[i2], path: e3 };
  }
}
var go = t(((e3, t2) => {
  e3.__esModule = true, e3.default = i2;
  function n2(e4) {
    for (var t3 = e4.toLowerCase(), n3 = ``, r3 = false, i3 = 0; i3 < 6 && t3[i3] !== void 0; i3++) {
      var a2 = t3.charCodeAt(i3), o2 = a2 >= 97 && a2 <= 102 || a2 >= 48 && a2 <= 57;
      if (r3 = a2 === 32, !o2) break;
      n3 += t3[i3];
    }
    if (n3.length !== 0) {
      var s2 = parseInt(n3, 16);
      return s2 >= 55296 && s2 <= 57343 || s2 === 0 || s2 > 1114111 ? [`\uFFFD`, n3.length + +!!r3] : [String.fromCodePoint(s2), n3.length + +!!r3];
    }
  }
  var r2 = /\\/;
  function i2(e4) {
    if (!r2.test(e4)) return e4;
    for (var t3 = ``, i3 = 0; i3 < e4.length; i3++) {
      if (e4[i3] === `\\`) {
        var a2 = n2(e4.slice(i3 + 1, i3 + 7));
        if (a2 !== void 0) {
          t3 += a2[0], i3 += a2[1];
          continue;
        }
        if (e4[i3 + 1] === `\\`) {
          t3 += `\\`, i3++;
          continue;
        }
        e4.length === i3 + 1 && (t3 += e4[i3]);
        continue;
      }
      t3 += e4[i3];
    }
    return t3;
  }
  t2.exports = e3.default;
})), _o = t(((e3, t2) => {
  e3.__esModule = true, e3.default = n2;
  function n2(e4) {
    for (var t3 = [...arguments].slice(1); t3.length > 0; ) {
      var n3 = t3.shift();
      if (!e4[n3]) return;
      e4 = e4[n3];
    }
    return e4;
  }
  t2.exports = e3.default;
})), vo = t(((e3, t2) => {
  e3.__esModule = true, e3.default = n2;
  function n2(e4) {
    for (var t3 = [...arguments].slice(1); t3.length > 0; ) {
      var n3 = t3.shift();
      e4[n3] || (e4[n3] = {}), e4 = e4[n3];
    }
  }
  t2.exports = e3.default;
})), yo = t(((e3, t2) => {
  e3.__esModule = true, e3.default = n2;
  function n2(e4) {
    for (var t3 = ``, n3 = e4.indexOf(`/*`), r2 = 0; n3 >= 0; ) {
      t3 += e4.slice(r2, n3);
      var i2 = e4.indexOf(`*/`, n3 + 2);
      if (i2 < 0) return t3;
      r2 = i2 + 2, n3 = e4.indexOf(`/*`, r2);
    }
    return t3 += e4.slice(r2), t3;
  }
  t2.exports = e3.default;
})), bo = t(((e3) => {
  e3.__esModule = true, e3.unesc = e3.stripComments = e3.getProp = e3.ensureObject = void 0, e3.unesc = t2(go()).default, e3.getProp = t2(_o()).default, e3.ensureObject = t2(vo()).default, e3.stripComments = t2(yo()).default;
  function t2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
})), xo = t(((e3, t2) => {
  e3.__esModule = true, e3.default = void 0;
  var n2 = bo();
  function r2(e4, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e4, r3.key, r3);
    }
  }
  function i2(e4, t3, n3) {
    return t3 && r2(e4.prototype, t3), n3 && r2(e4, n3), Object.defineProperty(e4, `prototype`, { writable: false }), e4;
  }
  var a2 = function e4(t3, n3) {
    if (typeof t3 != `object` || !t3) return t3;
    var r3 = new t3.constructor();
    for (var i3 in t3) if (t3.hasOwnProperty(i3)) {
      var a3 = t3[i3];
      i3 === `parent` && typeof a3 == `object` ? n3 && (r3[i3] = n3) : a3 instanceof Array ? r3[i3] = a3.map(function(t4) {
        return e4(t4, r3);
      }) : r3[i3] = e4(a3, r3);
    }
    return r3;
  };
  e3.default = (function() {
    function e4(e5) {
      e5 === void 0 && (e5 = {}), Object.assign(this, e5), this.spaces = this.spaces || {}, this.spaces.before = this.spaces.before || ``, this.spaces.after = this.spaces.after || ``;
    }
    var t3 = e4.prototype;
    return t3.remove = function() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }, t3.replaceWith = function() {
      if (this.parent) {
        for (var e5 in arguments) this.parent.insertBefore(this, arguments[e5]);
        this.remove();
      }
      return this;
    }, t3.next = function() {
      return this.parent.at(this.parent.index(this) + 1);
    }, t3.prev = function() {
      return this.parent.at(this.parent.index(this) - 1);
    }, t3.clone = function(e5) {
      e5 === void 0 && (e5 = {});
      var t4 = a2(this);
      for (var n3 in e5) t4[n3] = e5[n3];
      return t4;
    }, t3.appendToPropertyAndEscape = function(e5, t4, n3) {
      this.raws || (this.raws = {});
      var r3 = this[e5], i3 = this.raws[e5];
      this[e5] = r3 + t4, i3 || n3 !== t4 ? this.raws[e5] = (i3 || r3) + n3 : delete this.raws[e5];
    }, t3.setPropertyAndEscape = function(e5, t4, n3) {
      this.raws || (this.raws = {}), this[e5] = t4, this.raws[e5] = n3;
    }, t3.setPropertyWithoutEscape = function(e5, t4) {
      this[e5] = t4, this.raws && delete this.raws[e5];
    }, t3.isAtPosition = function(e5, t4) {
      if (this.source && this.source.start && this.source.end) return !(this.source.start.line > e5 || this.source.end.line < e5 || this.source.start.line === e5 && this.source.start.column > t4 || this.source.end.line === e5 && this.source.end.column < t4);
    }, t3.stringifyProperty = function(e5) {
      return this.raws && this.raws[e5] || this[e5];
    }, t3.valueToString = function() {
      return String(this.stringifyProperty(`value`));
    }, t3.toString = function() {
      return [this.rawSpaceBefore, this.valueToString(), this.rawSpaceAfter].join(``);
    }, i2(e4, [{ key: `rawSpaceBefore`, get: function() {
      var e5 = this.raws && this.raws.spaces && this.raws.spaces.before;
      return e5 === void 0 && (e5 = this.spaces && this.spaces.before), e5 || ``;
    }, set: function(e5) {
      (0, n2.ensureObject)(this, `raws`, `spaces`), this.raws.spaces.before = e5;
    } }, { key: `rawSpaceAfter`, get: function() {
      var e5 = this.raws && this.raws.spaces && this.raws.spaces.after;
      return e5 === void 0 && (e5 = this.spaces.after), e5 || ``;
    }, set: function(e5) {
      (0, n2.ensureObject)(this, `raws`, `spaces`), this.raws.spaces.after = e5;
    } }]), e4;
  })(), t2.exports = e3.default;
})), $ = t(((e3) => {
  e3.__esModule = true, e3.UNIVERSAL = e3.TAG = e3.STRING = e3.SELECTOR = e3.ROOT = e3.PSEUDO = e3.NESTING = e3.ID = e3.COMMENT = e3.COMBINATOR = e3.CLASS = e3.ATTRIBUTE = void 0, e3.TAG = `tag`, e3.STRING = `string`, e3.SELECTOR = `selector`, e3.ROOT = `root`, e3.PSEUDO = `pseudo`, e3.NESTING = `nesting`, e3.ID = `id`, e3.COMMENT = `comment`, e3.COMBINATOR = `combinator`, e3.CLASS = `class`, e3.ATTRIBUTE = `attribute`, e3.UNIVERSAL = `universal`;
})), So = t(((e3, t2) => {
  e3.__esModule = true, e3.default = void 0;
  var n2 = o2(xo()), r2 = a2($());
  function i2(e4) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (i2 = function(e5) {
      return e5 ? n3 : t3;
    })(e4);
  }
  function a2(e4, t3) {
    if (!t3 && e4 && e4.__esModule) return e4;
    if (e4 === null || typeof e4 != `object` && typeof e4 != `function`) return { default: e4 };
    var n3 = i2(t3);
    if (n3 && n3.has(e4)) return n3.get(e4);
    var r3 = {}, a3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o3 in e4) if (o3 !== `default` && Object.prototype.hasOwnProperty.call(e4, o3)) {
      var s3 = a3 ? Object.getOwnPropertyDescriptor(e4, o3) : null;
      s3 && (s3.get || s3.set) ? Object.defineProperty(r3, o3, s3) : r3[o3] = e4[o3];
    }
    return r3.default = e4, n3 && n3.set(e4, r3), r3;
  }
  function o2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function s2(e4, t3) {
    var n3 = typeof Symbol < `u` && e4[Symbol.iterator] || e4[`@@iterator`];
    if (n3) return (n3 = n3.call(e4)).next.bind(n3);
    if (Array.isArray(e4) || (n3 = c2(e4)) || t3 && e4 && typeof e4.length == `number`) {
      n3 && (e4 = n3);
      var r3 = 0;
      return function() {
        return r3 >= e4.length ? { done: true } : { done: false, value: e4[r3++] };
      };
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function c2(e4, t3) {
    if (e4) {
      if (typeof e4 == `string`) return l2(e4, t3);
      var n3 = Object.prototype.toString.call(e4).slice(8, -1);
      if (n3 === `Object` && e4.constructor && (n3 = e4.constructor.name), n3 === `Map` || n3 === `Set`) return Array.from(e4);
      if (n3 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3)) return l2(e4, t3);
    }
  }
  function l2(e4, t3) {
    (t3 == null || t3 > e4.length) && (t3 = e4.length);
    for (var n3 = 0, r3 = Array(t3); n3 < t3; n3++) r3[n3] = e4[n3];
    return r3;
  }
  function u2(e4, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e4, r3.key, r3);
    }
  }
  function d2(e4, t3, n3) {
    return t3 && u2(e4.prototype, t3), n3 && u2(e4, n3), Object.defineProperty(e4, `prototype`, { writable: false }), e4;
  }
  function f2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, p2(e4, t3);
  }
  function p2(e4, t3) {
    return p2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, p2(e4, t3);
  }
  e3.default = (function(e4) {
    f2(t3, e4);
    function t3(t4) {
      var n4 = e4.call(this, t4) || this;
      return n4.nodes || (n4.nodes = []), n4;
    }
    var n3 = t3.prototype;
    return n3.append = function(e5) {
      return e5.parent = this, this.nodes.push(e5), this;
    }, n3.prepend = function(e5) {
      for (var t4 in e5.parent = this, this.nodes.unshift(e5), this.indexes) this.indexes[t4]++;
      return this;
    }, n3.at = function(e5) {
      return this.nodes[e5];
    }, n3.index = function(e5) {
      return typeof e5 == `number` ? e5 : this.nodes.indexOf(e5);
    }, n3.removeChild = function(e5) {
      e5 = this.index(e5), this.at(e5).parent = void 0, this.nodes.splice(e5, 1);
      var t4;
      for (var n4 in this.indexes) t4 = this.indexes[n4], t4 >= e5 && (this.indexes[n4] = t4 - 1);
      return this;
    }, n3.removeAll = function() {
      for (var e5 = s2(this.nodes), t4; !(t4 = e5()).done; ) {
        var n4 = t4.value;
        n4.parent = void 0;
      }
      return this.nodes = [], this;
    }, n3.empty = function() {
      return this.removeAll();
    }, n3.insertAfter = function(e5, t4) {
      var n4;
      t4.parent = this;
      for (var r3 = this.index(e5), i3 = [], a3 = 2; a3 < arguments.length; a3++) i3.push(arguments[a3]);
      (n4 = this.nodes).splice.apply(n4, [r3 + 1, 0, t4].concat(i3)), t4.parent = this;
      var o3;
      for (var s3 in this.indexes) o3 = this.indexes[s3], r3 < o3 && (this.indexes[s3] = o3 + arguments.length - 1);
      return this;
    }, n3.insertBefore = function(e5, t4) {
      var n4;
      t4.parent = this;
      for (var r3 = this.index(e5), i3 = [], a3 = 2; a3 < arguments.length; a3++) i3.push(arguments[a3]);
      (n4 = this.nodes).splice.apply(n4, [r3, 0, t4].concat(i3)), t4.parent = this;
      var o3;
      for (var s3 in this.indexes) o3 = this.indexes[s3], o3 >= r3 && (this.indexes[s3] = o3 + arguments.length - 1);
      return this;
    }, n3._findChildAtPosition = function(e5, t4) {
      var n4 = void 0;
      return this.each(function(r3) {
        if (r3.atPosition) {
          var i3 = r3.atPosition(e5, t4);
          if (i3) return n4 = i3, false;
        } else if (r3.isAtPosition(e5, t4)) return n4 = r3, false;
      }), n4;
    }, n3.atPosition = function(e5, t4) {
      if (this.isAtPosition(e5, t4)) return this._findChildAtPosition(e5, t4) || this;
    }, n3._inferEndPosition = function() {
      this.last && this.last.source && this.last.source.end && (this.source = this.source || {}, this.source.end = this.source.end || {}, Object.assign(this.source.end, this.last.source.end));
    }, n3.each = function(e5) {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach++;
      var t4 = this.lastEach;
      if (this.indexes[t4] = 0, this.length) {
        for (var n4, r3; this.indexes[t4] < this.length && (n4 = this.indexes[t4], r3 = e5(this.at(n4), n4), r3 !== false); ) this.indexes[t4] += 1;
        if (delete this.indexes[t4], r3 === false) return false;
      }
    }, n3.walk = function(e5) {
      return this.each(function(t4, n4) {
        var r3 = e5(t4, n4);
        if (r3 !== false && t4.length && (r3 = t4.walk(e5)), r3 === false) return false;
      });
    }, n3.walkAttributes = function(e5) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.ATTRIBUTE) return e5.call(t4, n4);
      });
    }, n3.walkClasses = function(e5) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.CLASS) return e5.call(t4, n4);
      });
    }, n3.walkCombinators = function(e5) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.COMBINATOR) return e5.call(t4, n4);
      });
    }, n3.walkComments = function(e5) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.COMMENT) return e5.call(t4, n4);
      });
    }, n3.walkIds = function(e5) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.ID) return e5.call(t4, n4);
      });
    }, n3.walkNesting = function(e5) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.NESTING) return e5.call(t4, n4);
      });
    }, n3.walkPseudos = function(e5) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.PSEUDO) return e5.call(t4, n4);
      });
    }, n3.walkTags = function(e5) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.TAG) return e5.call(t4, n4);
      });
    }, n3.walkUniversals = function(e5) {
      var t4 = this;
      return this.walk(function(n4) {
        if (n4.type === r2.UNIVERSAL) return e5.call(t4, n4);
      });
    }, n3.split = function(e5) {
      var t4 = this, n4 = [];
      return this.reduce(function(r3, i3, a3) {
        var o3 = e5.call(t4, i3);
        return n4.push(i3), o3 ? (r3.push(n4), n4 = []) : a3 === t4.length - 1 && r3.push(n4), r3;
      }, []);
    }, n3.map = function(e5) {
      return this.nodes.map(e5);
    }, n3.reduce = function(e5, t4) {
      return this.nodes.reduce(e5, t4);
    }, n3.every = function(e5) {
      return this.nodes.every(e5);
    }, n3.some = function(e5) {
      return this.nodes.some(e5);
    }, n3.filter = function(e5) {
      return this.nodes.filter(e5);
    }, n3.sort = function(e5) {
      return this.nodes.sort(e5);
    }, n3.toString = function() {
      return this.map(String).join(``);
    }, d2(t3, [{ key: `first`, get: function() {
      return this.at(0);
    } }, { key: `last`, get: function() {
      return this.at(this.length - 1);
    } }, { key: `length`, get: function() {
      return this.nodes.length;
    } }]), t3;
  })(n2.default), t2.exports = e3.default;
})), Co = t(((e3, t2) => {
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(So()), r2 = $();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e4, r3.key, r3);
    }
  }
  function o2(e4, t3, n3) {
    return t3 && a2(e4.prototype, t3), n3 && a2(e4, n3), Object.defineProperty(e4, `prototype`, { writable: false }), e4;
  }
  function s2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, c2(e4, t3);
  }
  function c2(e4, t3) {
    return c2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, c2(e4, t3);
  }
  e3.default = (function(e4) {
    s2(t3, e4);
    function t3(t4) {
      var n4 = e4.call(this, t4) || this;
      return n4.type = r2.ROOT, n4;
    }
    var n3 = t3.prototype;
    return n3.toString = function() {
      var e5 = this.reduce(function(e6, t4) {
        return e6.push(String(t4)), e6;
      }, []).join(`,`);
      return this.trailingComma ? e5 + `,` : e5;
    }, n3.error = function(e5, t4) {
      return this._error ? this._error(e5, t4) : Error(e5);
    }, o2(t3, [{ key: `errorGenerator`, set: function(e5) {
      this._error = e5;
    } }]), t3;
  })(n2.default), t2.exports = e3.default;
})), wo = t(((e3, t2) => {
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(So()), r2 = $();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, o2(e4, t3);
  }
  function o2(e4, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, o2(e4, t3);
  }
  e3.default = (function(e4) {
    a2(t3, e4);
    function t3(t4) {
      var n3 = e4.call(this, t4) || this;
      return n3.type = r2.SELECTOR, n3;
    }
    return t3;
  })(n2.default), t2.exports = e3.default;
})), To = t(((e3, t2) => {
  e3.__esModule = true, e3.default = void 0;
  var n2 = o2(s()), r2 = bo(), i2 = o2(xo()), a2 = $();
  function o2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function c2(e4, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e4, r3.key, r3);
    }
  }
  function l2(e4, t3, n3) {
    return t3 && c2(e4.prototype, t3), n3 && c2(e4, n3), Object.defineProperty(e4, `prototype`, { writable: false }), e4;
  }
  function u2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, d2(e4, t3);
  }
  function d2(e4, t3) {
    return d2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, d2(e4, t3);
  }
  e3.default = (function(e4) {
    u2(t3, e4);
    function t3(t4) {
      var n3 = e4.call(this, t4) || this;
      return n3.type = a2.CLASS, n3._constructed = true, n3;
    }
    var i3 = t3.prototype;
    return i3.valueToString = function() {
      return `.` + e4.prototype.valueToString.call(this);
    }, l2(t3, [{ key: `value`, get: function() {
      return this._value;
    }, set: function(e5) {
      if (this._constructed) {
        var t4 = (0, n2.default)(e5, { isIdentifier: true });
        t4 === e5 ? this.raws && delete this.raws.value : ((0, r2.ensureObject)(this, `raws`), this.raws.value = t4);
      }
      this._value = e5;
    } }]), t3;
  })(i2.default), t2.exports = e3.default;
})), Eo = t(((e3, t2) => {
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(xo()), r2 = $();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, o2(e4, t3);
  }
  function o2(e4, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, o2(e4, t3);
  }
  e3.default = (function(e4) {
    a2(t3, e4);
    function t3(t4) {
      var n3 = e4.call(this, t4) || this;
      return n3.type = r2.COMMENT, n3;
    }
    return t3;
  })(n2.default), t2.exports = e3.default;
})), Do = t(((e3, t2) => {
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(xo()), r2 = $();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, o2(e4, t3);
  }
  function o2(e4, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, o2(e4, t3);
  }
  e3.default = (function(e4) {
    a2(t3, e4);
    function t3(t4) {
      var n4 = e4.call(this, t4) || this;
      return n4.type = r2.ID, n4;
    }
    var n3 = t3.prototype;
    return n3.valueToString = function() {
      return `#` + e4.prototype.valueToString.call(this);
    }, t3;
  })(n2.default), t2.exports = e3.default;
})), Oo = t(((e3, t2) => {
  e3.__esModule = true, e3.default = void 0;
  var n2 = a2(s()), r2 = bo(), i2 = a2(xo());
  function a2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function o2(e4, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e4, r3.key, r3);
    }
  }
  function c2(e4, t3, n3) {
    return t3 && o2(e4.prototype, t3), n3 && o2(e4, n3), Object.defineProperty(e4, `prototype`, { writable: false }), e4;
  }
  function l2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, u2(e4, t3);
  }
  function u2(e4, t3) {
    return u2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, u2(e4, t3);
  }
  e3.default = (function(e4) {
    l2(t3, e4);
    function t3() {
      return e4.apply(this, arguments) || this;
    }
    var i3 = t3.prototype;
    return i3.qualifiedName = function(e5) {
      return this.namespace ? this.namespaceString + `|` + e5 : e5;
    }, i3.valueToString = function() {
      return this.qualifiedName(e4.prototype.valueToString.call(this));
    }, c2(t3, [{ key: `namespace`, get: function() {
      return this._namespace;
    }, set: function(e5) {
      if (e5 === true || e5 === `*` || e5 === `&`) {
        this._namespace = e5, this.raws && delete this.raws.namespace;
        return;
      }
      var t4 = (0, n2.default)(e5, { isIdentifier: true });
      this._namespace = e5, t4 === e5 ? this.raws && delete this.raws.namespace : ((0, r2.ensureObject)(this, `raws`), this.raws.namespace = t4);
    } }, { key: `ns`, get: function() {
      return this._namespace;
    }, set: function(e5) {
      this.namespace = e5;
    } }, { key: `namespaceString`, get: function() {
      if (this.namespace) {
        var e5 = this.stringifyProperty(`namespace`);
        return e5 === true ? `` : e5;
      } else return ``;
    } }]), t3;
  })(i2.default), t2.exports = e3.default;
})), ko = t(((e3, t2) => {
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(Oo()), r2 = $();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, o2(e4, t3);
  }
  function o2(e4, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, o2(e4, t3);
  }
  e3.default = (function(e4) {
    a2(t3, e4);
    function t3(t4) {
      var n3 = e4.call(this, t4) || this;
      return n3.type = r2.TAG, n3;
    }
    return t3;
  })(n2.default), t2.exports = e3.default;
})), Ao = t(((e3, t2) => {
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(xo()), r2 = $();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, o2(e4, t3);
  }
  function o2(e4, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, o2(e4, t3);
  }
  e3.default = (function(e4) {
    a2(t3, e4);
    function t3(t4) {
      var n3 = e4.call(this, t4) || this;
      return n3.type = r2.STRING, n3;
    }
    return t3;
  })(n2.default), t2.exports = e3.default;
})), jo = t(((e3, t2) => {
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(So()), r2 = $();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, o2(e4, t3);
  }
  function o2(e4, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, o2(e4, t3);
  }
  e3.default = (function(e4) {
    a2(t3, e4);
    function t3(t4) {
      var n4 = e4.call(this, t4) || this;
      return n4.type = r2.PSEUDO, n4;
    }
    var n3 = t3.prototype;
    return n3.toString = function() {
      var e5 = this.length ? `(` + this.map(String).join(`,`) + `)` : ``;
      return [this.rawSpaceBefore, this.stringifyProperty(`value`), e5, this.rawSpaceAfter].join(``);
    }, t3;
  })(n2.default), t2.exports = e3.default;
})), Mo = t(((e3) => {
  e3.__esModule = true, e3.default = void 0, e3.unescapeValue = v2;
  var t2 = c2(s()), n2 = c2(go()), i2 = c2(Oo()), a2 = $(), o2;
  function c2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function l2(e4, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r2 = t3[n3];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, `value` in r2 && (r2.writable = true), Object.defineProperty(e4, r2.key, r2);
    }
  }
  function u2(e4, t3, n3) {
    return t3 && l2(e4.prototype, t3), n3 && l2(e4, n3), Object.defineProperty(e4, `prototype`, { writable: false }), e4;
  }
  function d2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, f2(e4, t3);
  }
  function f2(e4, t3) {
    return f2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, f2(e4, t3);
  }
  var p2 = r(), m2 = /^('|")([^]*)\1$/, h2 = p2(function() {
  }, `Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead.`), g2 = p2(function() {
  }, `Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead.`), _2 = p2(function() {
  }, `Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.`);
  function v2(e4) {
    var t3 = false, r2 = null, i3 = e4, a3 = i3.match(m2);
    return a3 && (r2 = a3[1], i3 = a3[2]), i3 = (0, n2.default)(i3), i3 !== e4 && (t3 = true), { deprecatedUsage: t3, unescaped: i3, quoteMark: r2 };
  }
  function y2(e4) {
    if (e4.quoteMark !== void 0 || e4.value === void 0) return e4;
    _2();
    var t3 = v2(e4.value), n3 = t3.quoteMark, r2 = t3.unescaped;
    return e4.raws || (e4.raws = {}), e4.raws.value === void 0 && (e4.raws.value = e4.value), e4.value = r2, e4.quoteMark = n3, e4;
  }
  var b2 = (function(e4) {
    d2(n3, e4);
    function n3(t3) {
      var n4;
      return t3 === void 0 && (t3 = {}), n4 = e4.call(this, y2(t3)) || this, n4.type = a2.ATTRIBUTE, n4.raws = n4.raws || {}, Object.defineProperty(n4.raws, `unquoted`, { get: p2(function() {
        return n4.value;
      }, `attr.raws.unquoted is deprecated. Call attr.value instead.`), set: p2(function() {
        return n4.value;
      }, `Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.`) }), n4._constructed = true, n4;
    }
    var r2 = n3.prototype;
    return r2.getQuotedValue = function(e5) {
      e5 === void 0 && (e5 = {});
      var n4 = x2[this._determineQuoteMark(e5)];
      return (0, t2.default)(this._value, n4);
    }, r2._determineQuoteMark = function(e5) {
      return e5.smart ? this.smartQuoteMark(e5) : this.preferredQuoteMark(e5);
    }, r2.setValue = function(e5, t3) {
      t3 === void 0 && (t3 = {}), this._value = e5, this._quoteMark = this._determineQuoteMark(t3), this._syncRawValue();
    }, r2.smartQuoteMark = function(e5) {
      var r3 = this.value, i3 = r3.replace(/[^']/g, ``).length, a3 = r3.replace(/[^"]/g, ``).length;
      if (i3 + a3 === 0) {
        var o3 = (0, t2.default)(r3, { isIdentifier: true });
        if (o3 === r3) return n3.NO_QUOTE;
        var s2 = this.preferredQuoteMark(e5);
        if (s2 === n3.NO_QUOTE) {
          var c3 = this.quoteMark || e5.quoteMark || n3.DOUBLE_QUOTE, l3 = x2[c3];
          if ((0, t2.default)(r3, l3).length < o3.length) return c3;
        }
        return s2;
      } else if (a3 === i3) return this.preferredQuoteMark(e5);
      else if (a3 < i3) return n3.DOUBLE_QUOTE;
      else return n3.SINGLE_QUOTE;
    }, r2.preferredQuoteMark = function(e5) {
      var t3 = e5.preferCurrentQuoteMark ? this.quoteMark : e5.quoteMark;
      return t3 === void 0 && (t3 = e5.preferCurrentQuoteMark ? e5.quoteMark : this.quoteMark), t3 === void 0 && (t3 = n3.DOUBLE_QUOTE), t3;
    }, r2._syncRawValue = function() {
      var e5 = (0, t2.default)(this._value, x2[this.quoteMark]);
      e5 === this._value ? this.raws && delete this.raws.value : this.raws.value = e5;
    }, r2._handleEscapes = function(e5, n4) {
      if (this._constructed) {
        var r3 = (0, t2.default)(n4, { isIdentifier: true });
        r3 === n4 ? delete this.raws[e5] : this.raws[e5] = r3;
      }
    }, r2._spacesFor = function(e5) {
      var t3 = { before: ``, after: `` }, n4 = this.spaces[e5] || {}, r3 = this.raws.spaces && this.raws.spaces[e5] || {};
      return Object.assign(t3, n4, r3);
    }, r2._stringFor = function(e5, t3, n4) {
      t3 === void 0 && (t3 = e5), n4 === void 0 && (n4 = S2);
      var r3 = this._spacesFor(t3);
      return n4(this.stringifyProperty(e5), r3);
    }, r2.offsetOf = function(e5) {
      var t3 = 1, n4 = this._spacesFor(`attribute`);
      if (t3 += n4.before.length, e5 === `namespace` || e5 === `ns`) return this.namespace ? t3 : -1;
      if (e5 === `attributeNS` || (t3 += this.namespaceString.length, this.namespace && (t3 += 1), e5 === `attribute`)) return t3;
      t3 += this.stringifyProperty(`attribute`).length, t3 += n4.after.length;
      var r3 = this._spacesFor(`operator`);
      t3 += r3.before.length;
      var i3 = this.stringifyProperty(`operator`);
      if (e5 === `operator`) return i3 ? t3 : -1;
      t3 += i3.length, t3 += r3.after.length;
      var a3 = this._spacesFor(`value`);
      t3 += a3.before.length;
      var o3 = this.stringifyProperty(`value`);
      if (e5 === `value`) return o3 ? t3 : -1;
      t3 += o3.length, t3 += a3.after.length;
      var s2 = this._spacesFor(`insensitive`);
      return t3 += s2.before.length, e5 === `insensitive` && this.insensitive ? t3 : -1;
    }, r2.toString = function() {
      var e5 = this, t3 = [this.rawSpaceBefore, `[`];
      return t3.push(this._stringFor(`qualifiedAttribute`, `attribute`)), this.operator && (this.value || this.value === ``) && (t3.push(this._stringFor(`operator`)), t3.push(this._stringFor(`value`)), t3.push(this._stringFor(`insensitiveFlag`, `insensitive`, function(t4, n4) {
        return t4.length > 0 && !e5.quoted && n4.before.length === 0 && !(e5.spaces.value && e5.spaces.value.after) && (n4.before = ` `), S2(t4, n4);
      }))), t3.push(`]`), t3.push(this.rawSpaceAfter), t3.join(``);
    }, u2(n3, [{ key: `quoted`, get: function() {
      var e5 = this.quoteMark;
      return e5 === `'` || e5 === `"`;
    }, set: function(e5) {
      g2();
    } }, { key: `quoteMark`, get: function() {
      return this._quoteMark;
    }, set: function(e5) {
      if (!this._constructed) {
        this._quoteMark = e5;
        return;
      }
      this._quoteMark !== e5 && (this._quoteMark = e5, this._syncRawValue());
    } }, { key: `qualifiedAttribute`, get: function() {
      return this.qualifiedName(this.raws.attribute || this.attribute);
    } }, { key: `insensitiveFlag`, get: function() {
      return this.insensitive ? `i` : ``;
    } }, { key: `value`, get: function() {
      return this._value;
    }, set: function(e5) {
      if (this._constructed) {
        var t3 = v2(e5), n4 = t3.deprecatedUsage, r3 = t3.unescaped, i3 = t3.quoteMark;
        if (n4 && h2(), r3 === this._value && i3 === this._quoteMark) return;
        this._value = r3, this._quoteMark = i3, this._syncRawValue();
      } else this._value = e5;
    } }, { key: `insensitive`, get: function() {
      return this._insensitive;
    }, set: function(e5) {
      e5 || (this._insensitive = false, this.raws && (this.raws.insensitiveFlag === `I` || this.raws.insensitiveFlag === `i`) && (this.raws.insensitiveFlag = void 0)), this._insensitive = e5;
    } }, { key: `attribute`, get: function() {
      return this._attribute;
    }, set: function(e5) {
      this._handleEscapes(`attribute`, e5), this._attribute = e5;
    } }]), n3;
  })(i2.default);
  e3.default = b2, b2.NO_QUOTE = null, b2.SINGLE_QUOTE = `'`, b2.DOUBLE_QUOTE = `"`;
  var x2 = (o2 = { "'": { quotes: `single`, wrap: true }, '"': { quotes: `double`, wrap: true } }, o2[null] = { isIdentifier: true }, o2);
  function S2(e4, t3) {
    return `` + t3.before + e4 + t3.after;
  }
})), No = t(((e3, t2) => {
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(Oo()), r2 = $();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, o2(e4, t3);
  }
  function o2(e4, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, o2(e4, t3);
  }
  e3.default = (function(e4) {
    a2(t3, e4);
    function t3(t4) {
      var n3 = e4.call(this, t4) || this;
      return n3.type = r2.UNIVERSAL, n3.value = `*`, n3;
    }
    return t3;
  })(n2.default), t2.exports = e3.default;
})), Po = t(((e3, t2) => {
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(xo()), r2 = $();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, o2(e4, t3);
  }
  function o2(e4, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, o2(e4, t3);
  }
  e3.default = (function(e4) {
    a2(t3, e4);
    function t3(t4) {
      var n3 = e4.call(this, t4) || this;
      return n3.type = r2.COMBINATOR, n3;
    }
    return t3;
  })(n2.default), t2.exports = e3.default;
})), Fo = t(((e3, t2) => {
  e3.__esModule = true, e3.default = void 0;
  var n2 = i2(xo()), r2 = $();
  function i2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function a2(e4, t3) {
    e4.prototype = Object.create(t3.prototype), e4.prototype.constructor = e4, o2(e4, t3);
  }
  function o2(e4, t3) {
    return o2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e5, t4) {
      return e5.__proto__ = t4, e5;
    }, o2(e4, t3);
  }
  e3.default = (function(e4) {
    a2(t3, e4);
    function t3(t4) {
      var n3 = e4.call(this, t4) || this;
      return n3.type = r2.NESTING, n3.value = `&`, n3;
    }
    return t3;
  })(n2.default), t2.exports = e3.default;
})), Io = t(((e3, t2) => {
  e3.__esModule = true, e3.default = n2;
  function n2(e4) {
    return e4.sort(function(e5, t3) {
      return e5 - t3;
    });
  }
  t2.exports = e3.default;
})), Lo = t(((e3) => {
  e3.__esModule = true, e3.word = e3.tilde = e3.tab = e3.str = e3.space = e3.slash = e3.singleQuote = e3.semicolon = e3.plus = e3.pipe = e3.openSquare = e3.openParenthesis = e3.newline = e3.greaterThan = e3.feed = e3.equals = e3.doubleQuote = e3.dollar = e3.cr = e3.comment = e3.comma = e3.combinator = e3.colon = e3.closeSquare = e3.closeParenthesis = e3.caret = e3.bang = e3.backslash = e3.at = e3.asterisk = e3.ampersand = void 0, e3.ampersand = 38, e3.asterisk = 42, e3.at = 64, e3.comma = 44, e3.colon = 58, e3.semicolon = 59, e3.openParenthesis = 40, e3.closeParenthesis = 41, e3.openSquare = 91, e3.closeSquare = 93, e3.dollar = 36, e3.tilde = 126, e3.caret = 94, e3.plus = 43, e3.equals = 61, e3.pipe = 124, e3.greaterThan = 62, e3.space = 32;
  var t2 = 39;
  e3.singleQuote = t2, e3.doubleQuote = 34, e3.slash = 47, e3.bang = 33, e3.backslash = 92, e3.cr = 13, e3.feed = 12, e3.newline = 10, e3.tab = 9, e3.str = t2, e3.comment = -1, e3.word = -2, e3.combinator = -3;
})), Ro = t(((e3) => {
  e3.__esModule = true, e3.FIELDS = void 0, e3.default = p2;
  var t2 = a2(Lo()), n2, r2;
  function i2(e4) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (i2 = function(e5) {
      return e5 ? n3 : t3;
    })(e4);
  }
  function a2(e4, t3) {
    if (!t3 && e4 && e4.__esModule) return e4;
    if (e4 === null || typeof e4 != `object` && typeof e4 != `function`) return { default: e4 };
    var n3 = i2(t3);
    if (n3 && n3.has(e4)) return n3.get(e4);
    var r3 = {}, a3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o3 in e4) if (o3 !== `default` && Object.prototype.hasOwnProperty.call(e4, o3)) {
      var s3 = a3 ? Object.getOwnPropertyDescriptor(e4, o3) : null;
      s3 && (s3.get || s3.set) ? Object.defineProperty(r3, o3, s3) : r3[o3] = e4[o3];
    }
    return r3.default = e4, n3 && n3.set(e4, r3), r3;
  }
  for (var o2 = (n2 = {}, n2[t2.tab] = true, n2[t2.newline] = true, n2[t2.cr] = true, n2[t2.feed] = true, n2), s2 = (r2 = {}, r2[t2.space] = true, r2[t2.tab] = true, r2[t2.newline] = true, r2[t2.cr] = true, r2[t2.feed] = true, r2[t2.ampersand] = true, r2[t2.asterisk] = true, r2[t2.bang] = true, r2[t2.comma] = true, r2[t2.colon] = true, r2[t2.semicolon] = true, r2[t2.openParenthesis] = true, r2[t2.closeParenthesis] = true, r2[t2.openSquare] = true, r2[t2.closeSquare] = true, r2[t2.singleQuote] = true, r2[t2.doubleQuote] = true, r2[t2.plus] = true, r2[t2.pipe] = true, r2[t2.tilde] = true, r2[t2.greaterThan] = true, r2[t2.equals] = true, r2[t2.dollar] = true, r2[t2.caret] = true, r2[t2.slash] = true, r2), c2 = {}, l2 = `0123456789abcdefABCDEF`, u2 = 0; u2 < l2.length; u2++) c2[l2.charCodeAt(u2)] = true;
  function d2(e4, n3) {
    var r3 = n3, i3;
    do {
      if (i3 = e4.charCodeAt(r3), s2[i3]) return r3 - 1;
      i3 === t2.backslash ? r3 = f2(e4, r3) + 1 : r3++;
    } while (r3 < e4.length);
    return r3 - 1;
  }
  function f2(e4, n3) {
    var r3 = n3, i3 = e4.charCodeAt(r3 + 1);
    if (!o2[i3]) if (c2[i3]) {
      var a3 = 0;
      do
        r3++, a3++, i3 = e4.charCodeAt(r3 + 1);
      while (c2[i3] && a3 < 6);
      a3 < 6 && i3 === t2.space && r3++;
    } else r3++;
    return r3;
  }
  e3.FIELDS = { TYPE: 0, START_LINE: 1, START_COL: 2, END_LINE: 3, END_COL: 4, START_POS: 5, END_POS: 6 };
  function p2(e4) {
    var n3 = [], r3 = e4.css.valueOf(), i3 = r3.length, a3 = -1, o3 = 1, s3 = 0, c3 = 0, l3, u3, f3, p3, m2, h2, g2, _2, v2, y2, b2, x2, S2;
    function C2(t3, n4) {
      if (e4.safe) r3 += n4, v2 = r3.length - 1;
      else throw e4.error(`Unclosed ` + t3, o3, s3 - a3, s3);
    }
    for (; s3 < i3; ) {
      switch (l3 = r3.charCodeAt(s3), l3 === t2.newline && (a3 = s3, o3 += 1), l3) {
        case t2.space:
        case t2.tab:
        case t2.newline:
        case t2.cr:
        case t2.feed:
          v2 = s3;
          do
            v2 += 1, l3 = r3.charCodeAt(v2), l3 === t2.newline && (a3 = v2, o3 += 1);
          while (l3 === t2.space || l3 === t2.newline || l3 === t2.tab || l3 === t2.cr || l3 === t2.feed);
          S2 = t2.space, p3 = o3, f3 = v2 - a3 - 1, c3 = v2;
          break;
        case t2.plus:
        case t2.greaterThan:
        case t2.tilde:
        case t2.pipe:
          v2 = s3;
          do
            v2 += 1, l3 = r3.charCodeAt(v2);
          while (l3 === t2.plus || l3 === t2.greaterThan || l3 === t2.tilde || l3 === t2.pipe);
          S2 = t2.combinator, p3 = o3, f3 = s3 - a3, c3 = v2;
          break;
        case t2.asterisk:
        case t2.ampersand:
        case t2.bang:
        case t2.comma:
        case t2.equals:
        case t2.dollar:
        case t2.caret:
        case t2.openSquare:
        case t2.closeSquare:
        case t2.colon:
        case t2.semicolon:
        case t2.openParenthesis:
        case t2.closeParenthesis:
          v2 = s3, S2 = l3, p3 = o3, f3 = s3 - a3, c3 = v2 + 1;
          break;
        case t2.singleQuote:
        case t2.doubleQuote:
          x2 = l3 === t2.singleQuote ? `'` : `"`, v2 = s3;
          do
            for (m2 = false, v2 = r3.indexOf(x2, v2 + 1), v2 === -1 && C2(`quote`, x2), h2 = v2; r3.charCodeAt(h2 - 1) === t2.backslash; ) --h2, m2 = !m2;
          while (m2);
          S2 = t2.str, p3 = o3, f3 = s3 - a3, c3 = v2 + 1;
          break;
        default:
          l3 === t2.slash && r3.charCodeAt(s3 + 1) === t2.asterisk ? (v2 = r3.indexOf(`*/`, s3 + 2) + 1, v2 === 0 && C2(`comment`, `*/`), u3 = r3.slice(s3, v2 + 1), _2 = u3.split(`
`), g2 = _2.length - 1, g2 > 0 ? (y2 = o3 + g2, b2 = v2 - _2[g2].length) : (y2 = o3, b2 = a3), S2 = t2.comment, o3 = y2, p3 = y2, f3 = v2 - b2) : l3 === t2.slash ? (v2 = s3, S2 = l3, p3 = o3, f3 = s3 - a3, c3 = v2 + 1) : (v2 = d2(r3, s3), S2 = t2.word, p3 = o3, f3 = v2 - a3), c3 = v2 + 1;
          break;
      }
      n3.push([S2, o3, s3 - a3, p3, f3, s3, c3]), b2 && (b2 = (a3 = b2, null)), s3 = c3;
    }
    return n3;
  }
})), zo = t(((e3, t2) => {
  e3.__esModule = true, e3.default = void 0;
  var n2 = C2(Co()), r2 = C2(wo()), i2 = C2(To()), a2 = C2(Eo()), o2 = C2(Do()), s2 = C2(ko()), c2 = C2(Ao()), l2 = C2(jo()), u2 = S2(Mo()), d2 = C2(No()), f2 = C2(Po()), p2 = C2(Fo()), m2 = C2(Io()), h2 = S2(Ro()), g2 = S2(Lo()), _2 = S2($()), v2 = bo(), y2, b2;
  function x2(e4) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (x2 = function(e5) {
      return e5 ? n3 : t3;
    })(e4);
  }
  function S2(e4, t3) {
    if (!t3 && e4 && e4.__esModule) return e4;
    if (e4 === null || typeof e4 != `object` && typeof e4 != `function`) return { default: e4 };
    var n3 = x2(t3);
    if (n3 && n3.has(e4)) return n3.get(e4);
    var r3 = {}, i3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a3 in e4) if (a3 !== `default` && Object.prototype.hasOwnProperty.call(e4, a3)) {
      var o3 = i3 ? Object.getOwnPropertyDescriptor(e4, a3) : null;
      o3 && (o3.get || o3.set) ? Object.defineProperty(r3, a3, o3) : r3[a3] = e4[a3];
    }
    return r3.default = e4, n3 && n3.set(e4, r3), r3;
  }
  function C2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function ee2(e4, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e4, r3.key, r3);
    }
  }
  function w2(e4, t3, n3) {
    return t3 && ee2(e4.prototype, t3), n3 && ee2(e4, n3), Object.defineProperty(e4, `prototype`, { writable: false }), e4;
  }
  var te2 = (y2 = {}, y2[g2.space] = true, y2[g2.cr] = true, y2[g2.feed] = true, y2[g2.newline] = true, y2[g2.tab] = true, y2), ne2 = Object.assign({}, te2, (b2 = {}, b2[g2.comment] = true, b2));
  function re2(e4) {
    return { line: e4[h2.FIELDS.START_LINE], column: e4[h2.FIELDS.START_COL] };
  }
  function T2(e4) {
    return { line: e4[h2.FIELDS.END_LINE], column: e4[h2.FIELDS.END_COL] };
  }
  function ie2(e4, t3, n3, r3) {
    return { start: { line: e4, column: t3 }, end: { line: n3, column: r3 } };
  }
  function ae2(e4) {
    return ie2(e4[h2.FIELDS.START_LINE], e4[h2.FIELDS.START_COL], e4[h2.FIELDS.END_LINE], e4[h2.FIELDS.END_COL]);
  }
  function oe2(e4, t3) {
    if (e4) return ie2(e4[h2.FIELDS.START_LINE], e4[h2.FIELDS.START_COL], t3[h2.FIELDS.END_LINE], t3[h2.FIELDS.END_COL]);
  }
  function E2(e4, t3) {
    var n3 = e4[t3];
    if (typeof n3 == `string`) return n3.indexOf(`\\`) !== -1 && ((0, v2.ensureObject)(e4, `raws`), e4[t3] = (0, v2.unesc)(n3), e4.raws[t3] === void 0 && (e4.raws[t3] = n3)), e4;
  }
  function se2(e4, t3) {
    for (var n3 = -1, r3 = []; (n3 = e4.indexOf(t3, n3 + 1)) !== -1; ) r3.push(n3);
    return r3;
  }
  function ce2() {
    var e4 = Array.prototype.concat.apply([], arguments);
    return e4.filter(function(t3, n3) {
      return n3 === e4.indexOf(t3);
    });
  }
  e3.default = (function() {
    function e4(e5, t4) {
      t4 === void 0 && (t4 = {}), this.rule = e5, this.options = Object.assign({ lossy: false, safe: false }, t4), this.position = 0, this.css = typeof this.rule == `string` ? this.rule : this.rule.selector, this.tokens = (0, h2.default)({ css: this.css, error: this._errorGenerator(), safe: this.options.safe });
      var i3 = oe2(this.tokens[0], this.tokens[this.tokens.length - 1]);
      this.root = new n2.default({ source: i3 }), this.root.errorGenerator = this._errorGenerator();
      var a3 = new r2.default({ source: { start: { line: 1, column: 1 } }, sourceIndex: 0 });
      this.root.append(a3), this.current = a3, this.loop();
    }
    var t3 = e4.prototype;
    return t3._errorGenerator = function() {
      var e5 = this;
      return function(t4, n3) {
        return typeof e5.rule == `string` ? Error(t4) : e5.rule.error(t4, n3);
      };
    }, t3.attribute = function() {
      var e5 = [], t4 = this.currToken;
      for (this.position++; this.position < this.tokens.length && this.currToken[h2.FIELDS.TYPE] !== g2.closeSquare; ) e5.push(this.currToken), this.position++;
      if (this.currToken[h2.FIELDS.TYPE] !== g2.closeSquare) return this.expected(`closing square bracket`, this.currToken[h2.FIELDS.START_POS]);
      var n3 = e5.length, r3 = { source: ie2(t4[1], t4[2], this.currToken[3], this.currToken[4]), sourceIndex: t4[h2.FIELDS.START_POS] };
      if (n3 === 1 && !~[g2.word].indexOf(e5[0][h2.FIELDS.TYPE])) return this.expected(`attribute`, e5[0][h2.FIELDS.START_POS]);
      for (var i3 = 0, a3 = ``, o3 = ``, s3 = null, c3 = false; i3 < n3; ) {
        var l3 = e5[i3], d3 = this.content(l3), f3 = e5[i3 + 1];
        switch (l3[h2.FIELDS.TYPE]) {
          case g2.space:
            if (c3 = true, this.options.lossy) break;
            if (s3) {
              (0, v2.ensureObject)(r3, `spaces`, s3);
              var p3 = r3.spaces[s3].after || ``;
              r3.spaces[s3].after = p3 + d3;
              var m3 = (0, v2.getProp)(r3, `raws`, `spaces`, s3, `after`) || null;
              m3 && (r3.raws.spaces[s3].after = m3 + d3);
            } else a3 += d3, o3 += d3;
            break;
          case g2.asterisk:
            f3[h2.FIELDS.TYPE] === g2.equals ? (r3.operator = d3, s3 = `operator`) : (!r3.namespace || s3 === `namespace` && !c3) && f3 && (a3 && (a3 = ((0, v2.ensureObject)(r3, `spaces`, `attribute`), r3.spaces.attribute.before = a3, ``)), o3 && (o3 = ((0, v2.ensureObject)(r3, `raws`, `spaces`, `attribute`), r3.raws.spaces.attribute.before = a3, ``)), r3.namespace = (r3.namespace || ``) + d3, (0, v2.getProp)(r3, `raws`, `namespace`) && (r3.raws.namespace += d3), s3 = `namespace`), c3 = false;
            break;
          case g2.dollar:
            if (s3 === `value`) {
              var _3 = (0, v2.getProp)(r3, `raws`, `value`);
              r3.value += `$`, _3 && (r3.raws.value = _3 + `$`);
              break;
            }
          case g2.caret:
            f3[h2.FIELDS.TYPE] === g2.equals && (r3.operator = d3, s3 = `operator`), c3 = false;
            break;
          case g2.combinator:
            if (d3 === `~` && f3[h2.FIELDS.TYPE] === g2.equals && (r3.operator = d3, s3 = `operator`), d3 !== `|`) {
              c3 = false;
              break;
            }
            f3[h2.FIELDS.TYPE] === g2.equals ? (r3.operator = d3, s3 = `operator`) : !r3.namespace && !r3.attribute && (r3.namespace = true), c3 = false;
            break;
          case g2.word:
            if (f3 && this.content(f3) === `|` && e5[i3 + 2] && e5[i3 + 2][h2.FIELDS.TYPE] !== g2.equals && !r3.operator && !r3.namespace) r3.namespace = d3, s3 = `namespace`;
            else if (!r3.attribute || s3 === `attribute` && !c3) a3 && (a3 = ((0, v2.ensureObject)(r3, `spaces`, `attribute`), r3.spaces.attribute.before = a3, ``)), o3 && (o3 = ((0, v2.ensureObject)(r3, `raws`, `spaces`, `attribute`), r3.raws.spaces.attribute.before = o3, ``)), r3.attribute = (r3.attribute || ``) + d3, (0, v2.getProp)(r3, `raws`, `attribute`) && (r3.raws.attribute += d3), s3 = `attribute`;
            else if (!r3.value && r3.value !== `` || s3 === `value` && !(c3 || r3.quoteMark)) {
              var y3 = (0, v2.unesc)(d3), b3 = (0, v2.getProp)(r3, `raws`, `value`) || ``, x3 = r3.value || ``;
              r3.value = x3 + y3, r3.quoteMark = null, (y3 !== d3 || b3) && ((0, v2.ensureObject)(r3, `raws`), r3.raws.value = (b3 || x3) + d3), s3 = `value`;
            } else {
              var S3 = d3 === `i` || d3 === `I`;
              (r3.value || r3.value === ``) && (r3.quoteMark || c3) ? (r3.insensitive = S3, (!S3 || d3 === `I`) && ((0, v2.ensureObject)(r3, `raws`), r3.raws.insensitiveFlag = d3), s3 = `insensitive`, a3 && (a3 = ((0, v2.ensureObject)(r3, `spaces`, `insensitive`), r3.spaces.insensitive.before = a3, ``)), o3 && (o3 = ((0, v2.ensureObject)(r3, `raws`, `spaces`, `insensitive`), r3.raws.spaces.insensitive.before = o3, ``))) : (r3.value || r3.value === ``) && (s3 = `value`, r3.value += d3, r3.raws.value && (r3.raws.value += d3));
            }
            c3 = false;
            break;
          case g2.str:
            if (!r3.attribute || !r3.operator) return this.error(`Expected an attribute followed by an operator preceding the string.`, { index: l3[h2.FIELDS.START_POS] });
            var C3 = (0, u2.unescapeValue)(d3), ee3 = C3.unescaped, w3 = C3.quoteMark;
            r3.value = ee3, r3.quoteMark = w3, s3 = `value`, (0, v2.ensureObject)(r3, `raws`), r3.raws.value = d3, c3 = false;
            break;
          case g2.equals:
            if (!r3.attribute) return this.expected(`attribute`, l3[h2.FIELDS.START_POS], d3);
            if (r3.value) return this.error(`Unexpected "=" found; an operator was already defined.`, { index: l3[h2.FIELDS.START_POS] });
            r3.operator = r3.operator ? r3.operator + d3 : d3, s3 = `operator`, c3 = false;
            break;
          case g2.comment:
            if (s3) if (c3 || f3 && f3[h2.FIELDS.TYPE] === g2.space || s3 === `insensitive`) {
              var te3 = (0, v2.getProp)(r3, `spaces`, s3, `after`) || ``, ne3 = (0, v2.getProp)(r3, `raws`, `spaces`, s3, `after`) || te3;
              (0, v2.ensureObject)(r3, `raws`, `spaces`, s3), r3.raws.spaces[s3].after = ne3 + d3;
            } else {
              var re3 = r3[s3] || ``, T3 = (0, v2.getProp)(r3, `raws`, s3) || re3;
              (0, v2.ensureObject)(r3, `raws`), r3.raws[s3] = T3 + d3;
            }
            else o3 += d3;
            break;
          default:
            return this.error(`Unexpected "` + d3 + `" found.`, { index: l3[h2.FIELDS.START_POS] });
        }
        i3++;
      }
      E2(r3, `attribute`), E2(r3, `namespace`), this.newNode(new u2.default(r3)), this.position++;
    }, t3.parseWhitespaceEquivalentTokens = function(e5) {
      e5 < 0 && (e5 = this.tokens.length);
      var t4 = this.position, n3 = [], r3 = ``, i3 = void 0;
      do
        if (te2[this.currToken[h2.FIELDS.TYPE]]) this.options.lossy || (r3 += this.content());
        else if (this.currToken[h2.FIELDS.TYPE] === g2.comment) {
          var o3 = {};
          r3 && (r3 = (o3.before = r3, ``)), i3 = new a2.default({ value: this.content(), source: ae2(this.currToken), sourceIndex: this.currToken[h2.FIELDS.START_POS], spaces: o3 }), n3.push(i3);
        }
      while (++this.position < e5);
      if (r3) {
        if (i3) i3.spaces.after = r3;
        else if (!this.options.lossy) {
          var s3 = this.tokens[t4], l3 = this.tokens[this.position - 1];
          n3.push(new c2.default({ value: ``, source: ie2(s3[h2.FIELDS.START_LINE], s3[h2.FIELDS.START_COL], l3[h2.FIELDS.END_LINE], l3[h2.FIELDS.END_COL]), sourceIndex: s3[h2.FIELDS.START_POS], spaces: { before: r3, after: `` } }));
        }
      }
      return n3;
    }, t3.convertWhitespaceNodesToSpace = function(e5, t4) {
      var n3 = this;
      t4 === void 0 && (t4 = false);
      var r3 = ``, i3 = ``;
      return e5.forEach(function(e6) {
        var a3 = n3.lossySpace(e6.spaces.before, t4), o3 = n3.lossySpace(e6.rawSpaceBefore, t4);
        r3 += a3 + n3.lossySpace(e6.spaces.after, t4 && a3.length === 0), i3 += a3 + e6.value + n3.lossySpace(e6.rawSpaceAfter, t4 && o3.length === 0);
      }), i3 === r3 && (i3 = void 0), { space: r3, rawSpace: i3 };
    }, t3.isNamedCombinator = function(e5) {
      return e5 === void 0 && (e5 = this.position), this.tokens[e5 + 0] && this.tokens[e5 + 0][h2.FIELDS.TYPE] === g2.slash && this.tokens[e5 + 1] && this.tokens[e5 + 1][h2.FIELDS.TYPE] === g2.word && this.tokens[e5 + 2] && this.tokens[e5 + 2][h2.FIELDS.TYPE] === g2.slash;
    }, t3.namedCombinator = function() {
      if (this.isNamedCombinator()) {
        var e5 = this.content(this.tokens[this.position + 1]), t4 = (0, v2.unesc)(e5).toLowerCase(), n3 = {};
        t4 !== e5 && (n3.value = `/` + e5 + `/`);
        var r3 = new f2.default({ value: `/` + t4 + `/`, source: ie2(this.currToken[h2.FIELDS.START_LINE], this.currToken[h2.FIELDS.START_COL], this.tokens[this.position + 2][h2.FIELDS.END_LINE], this.tokens[this.position + 2][h2.FIELDS.END_COL]), sourceIndex: this.currToken[h2.FIELDS.START_POS], raws: n3 });
        return this.position += 3, r3;
      } else this.unexpected();
    }, t3.combinator = function() {
      var e5 = this;
      if (this.content() === `|`) return this.namespace();
      var t4 = this.locateNextMeaningfulToken(this.position);
      if (t4 < 0 || this.tokens[t4][h2.FIELDS.TYPE] === g2.comma || this.tokens[t4][h2.FIELDS.TYPE] === g2.closeParenthesis) {
        var n3 = this.parseWhitespaceEquivalentTokens(t4);
        if (n3.length > 0) {
          var r3 = this.current.last;
          if (r3) {
            var i3 = this.convertWhitespaceNodesToSpace(n3), a3 = i3.space, o3 = i3.rawSpace;
            o3 !== void 0 && (r3.rawSpaceAfter += o3), r3.spaces.after += a3;
          } else n3.forEach(function(t5) {
            return e5.newNode(t5);
          });
        }
        return;
      }
      var s3 = this.currToken, c3 = void 0;
      t4 > this.position && (c3 = this.parseWhitespaceEquivalentTokens(t4));
      var l3;
      if (this.isNamedCombinator() ? l3 = this.namedCombinator() : this.currToken[h2.FIELDS.TYPE] === g2.combinator ? (l3 = new f2.default({ value: this.content(), source: ae2(this.currToken), sourceIndex: this.currToken[h2.FIELDS.START_POS] }), this.position++) : te2[this.currToken[h2.FIELDS.TYPE]] || c3 || this.unexpected(), l3) {
        if (c3) {
          var u3 = this.convertWhitespaceNodesToSpace(c3), d3 = u3.space, p3 = u3.rawSpace;
          l3.spaces.before = d3, l3.rawSpaceBefore = p3;
        }
      } else {
        var m3 = this.convertWhitespaceNodesToSpace(c3, true), _3 = m3.space, v3 = m3.rawSpace;
        v3 || (v3 = _3);
        var y3 = {}, b3 = { spaces: {} };
        _3.endsWith(` `) && v3.endsWith(` `) ? (y3.before = _3.slice(0, _3.length - 1), b3.spaces.before = v3.slice(0, v3.length - 1)) : _3[0] === ` ` && v3[0] === ` ` ? (y3.after = _3.slice(1), b3.spaces.after = v3.slice(1)) : b3.value = v3, l3 = new f2.default({ value: ` `, source: oe2(s3, this.tokens[this.position - 1]), sourceIndex: s3[h2.FIELDS.START_POS], spaces: y3, raws: b3 });
      }
      return this.currToken && this.currToken[h2.FIELDS.TYPE] === g2.space && (l3.spaces.after = this.optionalSpace(this.content()), this.position++), this.newNode(l3);
    }, t3.comma = function() {
      if (this.position === this.tokens.length - 1) {
        this.root.trailingComma = true, this.position++;
        return;
      }
      this.current._inferEndPosition();
      var e5 = new r2.default({ source: { start: re2(this.tokens[this.position + 1]) }, sourceIndex: this.tokens[this.position + 1][h2.FIELDS.START_POS] });
      this.current.parent.append(e5), this.current = e5, this.position++;
    }, t3.comment = function() {
      var e5 = this.currToken;
      this.newNode(new a2.default({ value: this.content(), source: ae2(e5), sourceIndex: e5[h2.FIELDS.START_POS] })), this.position++;
    }, t3.error = function(e5, t4) {
      throw this.root.error(e5, t4);
    }, t3.missingBackslash = function() {
      return this.error(`Expected a backslash preceding the semicolon.`, { index: this.currToken[h2.FIELDS.START_POS] });
    }, t3.missingParenthesis = function() {
      return this.expected(`opening parenthesis`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.missingSquareBracket = function() {
      return this.expected(`opening square bracket`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.unexpected = function() {
      return this.error(`Unexpected '` + this.content() + `'. Escaping special characters with \\ may help.`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.unexpectedPipe = function() {
      return this.error(`Unexpected '|'.`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.namespace = function() {
      var e5 = this.prevToken && this.content(this.prevToken) || true;
      if (this.nextToken[h2.FIELDS.TYPE] === g2.word) return this.position++, this.word(e5);
      if (this.nextToken[h2.FIELDS.TYPE] === g2.asterisk) return this.position++, this.universal(e5);
      this.unexpectedPipe();
    }, t3.nesting = function() {
      if (this.nextToken && this.content(this.nextToken) === `|`) {
        this.position++;
        return;
      }
      var e5 = this.currToken;
      this.newNode(new p2.default({ value: this.content(), source: ae2(e5), sourceIndex: e5[h2.FIELDS.START_POS] })), this.position++;
    }, t3.parentheses = function() {
      var e5 = this.current.last, t4 = 1;
      if (this.position++, e5 && e5.type === _2.PSEUDO) {
        var n3 = new r2.default({ source: { start: re2(this.tokens[this.position]) }, sourceIndex: this.tokens[this.position][h2.FIELDS.START_POS] }), i3 = this.current;
        for (e5.append(n3), this.current = n3; this.position < this.tokens.length && t4; ) this.currToken[h2.FIELDS.TYPE] === g2.openParenthesis && t4++, this.currToken[h2.FIELDS.TYPE] === g2.closeParenthesis && t4--, t4 ? this.parse() : (this.current.source.end = T2(this.currToken), this.current.parent.source.end = T2(this.currToken), this.position++);
        this.current = i3;
      } else {
        for (var a3 = this.currToken, o3 = `(`, s3; this.position < this.tokens.length && t4; ) this.currToken[h2.FIELDS.TYPE] === g2.openParenthesis && t4++, this.currToken[h2.FIELDS.TYPE] === g2.closeParenthesis && t4--, s3 = this.currToken, o3 += this.parseParenthesisToken(this.currToken), this.position++;
        e5 ? e5.appendToPropertyAndEscape(`value`, o3, o3) : this.newNode(new c2.default({ value: o3, source: ie2(a3[h2.FIELDS.START_LINE], a3[h2.FIELDS.START_COL], s3[h2.FIELDS.END_LINE], s3[h2.FIELDS.END_COL]), sourceIndex: a3[h2.FIELDS.START_POS] }));
      }
      if (t4) return this.expected(`closing parenthesis`, this.currToken[h2.FIELDS.START_POS]);
    }, t3.pseudo = function() {
      for (var e5 = this, t4 = ``, n3 = this.currToken; this.currToken && this.currToken[h2.FIELDS.TYPE] === g2.colon; ) t4 += this.content(), this.position++;
      if (!this.currToken) return this.expected([`pseudo-class`, `pseudo-element`], this.position - 1);
      if (this.currToken[h2.FIELDS.TYPE] === g2.word) this.splitWord(false, function(r3, i3) {
        t4 += r3, e5.newNode(new l2.default({ value: t4, source: oe2(n3, e5.currToken), sourceIndex: n3[h2.FIELDS.START_POS] })), i3 > 1 && e5.nextToken && e5.nextToken[h2.FIELDS.TYPE] === g2.openParenthesis && e5.error(`Misplaced parenthesis.`, { index: e5.nextToken[h2.FIELDS.START_POS] });
      });
      else return this.expected([`pseudo-class`, `pseudo-element`], this.currToken[h2.FIELDS.START_POS]);
    }, t3.space = function() {
      var e5 = this.content();
      this.position === 0 || this.prevToken[h2.FIELDS.TYPE] === g2.comma || this.prevToken[h2.FIELDS.TYPE] === g2.openParenthesis || this.current.nodes.every(function(e6) {
        return e6.type === `comment`;
      }) ? (this.spaces = this.optionalSpace(e5), this.position++) : this.position === this.tokens.length - 1 || this.nextToken[h2.FIELDS.TYPE] === g2.comma || this.nextToken[h2.FIELDS.TYPE] === g2.closeParenthesis ? (this.current.last.spaces.after = this.optionalSpace(e5), this.position++) : this.combinator();
    }, t3.string = function() {
      var e5 = this.currToken;
      this.newNode(new c2.default({ value: this.content(), source: ae2(e5), sourceIndex: e5[h2.FIELDS.START_POS] })), this.position++;
    }, t3.universal = function(e5) {
      var t4 = this.nextToken;
      if (t4 && this.content(t4) === `|`) return this.position++, this.namespace();
      var n3 = this.currToken;
      this.newNode(new d2.default({ value: this.content(), source: ae2(n3), sourceIndex: n3[h2.FIELDS.START_POS] }), e5), this.position++;
    }, t3.splitWord = function(e5, t4) {
      for (var n3 = this, r3 = this.nextToken, a3 = this.content(); r3 && ~[g2.dollar, g2.caret, g2.equals, g2.word].indexOf(r3[h2.FIELDS.TYPE]); ) {
        this.position++;
        var c3 = this.content();
        if (a3 += c3, c3.lastIndexOf(`\\`) === c3.length - 1) {
          var l3 = this.nextToken;
          l3 && l3[h2.FIELDS.TYPE] === g2.space && (a3 += this.requiredSpace(this.content(l3)), this.position++);
        }
        r3 = this.nextToken;
      }
      var u3 = se2(a3, `.`).filter(function(e6) {
        var t5 = a3[e6 - 1] === `\\`, n4 = /^\d+\.\d+%$/.test(a3);
        return !t5 && !n4;
      }), d3 = se2(a3, `#`).filter(function(e6) {
        return a3[e6 - 1] !== `\\`;
      }), f3 = se2(a3, `#{`);
      f3.length && (d3 = d3.filter(function(e6) {
        return !~f3.indexOf(e6);
      }));
      var p3 = (0, m2.default)(ce2([0].concat(u3, d3)));
      p3.forEach(function(r4, c4) {
        var l4 = p3[c4 + 1] || a3.length, f4 = a3.slice(r4, l4);
        if (c4 === 0 && t4) return t4.call(n3, f4, p3.length);
        var m3, g3 = n3.currToken, _3 = g3[h2.FIELDS.START_POS] + p3[c4], v3 = ie2(g3[1], g3[2] + r4, g3[3], g3[2] + (l4 - 1));
        if (~u3.indexOf(r4)) {
          var y3 = { value: f4.slice(1), source: v3, sourceIndex: _3 };
          m3 = new i2.default(E2(y3, `value`));
        } else if (~d3.indexOf(r4)) {
          var b3 = { value: f4.slice(1), source: v3, sourceIndex: _3 };
          m3 = new o2.default(E2(b3, `value`));
        } else {
          var x3 = { value: f4, source: v3, sourceIndex: _3 };
          E2(x3, `value`), m3 = new s2.default(x3);
        }
        n3.newNode(m3, e5), e5 = null;
      }), this.position++;
    }, t3.word = function(e5) {
      var t4 = this.nextToken;
      return t4 && this.content(t4) === `|` ? (this.position++, this.namespace()) : this.splitWord(e5);
    }, t3.loop = function() {
      for (; this.position < this.tokens.length; ) this.parse(true);
      return this.current._inferEndPosition(), this.root;
    }, t3.parse = function(e5) {
      switch (this.currToken[h2.FIELDS.TYPE]) {
        case g2.space:
          this.space();
          break;
        case g2.comment:
          this.comment();
          break;
        case g2.openParenthesis:
          this.parentheses();
          break;
        case g2.closeParenthesis:
          e5 && this.missingParenthesis();
          break;
        case g2.openSquare:
          this.attribute();
          break;
        case g2.dollar:
        case g2.caret:
        case g2.equals:
        case g2.word:
          this.word();
          break;
        case g2.colon:
          this.pseudo();
          break;
        case g2.comma:
          this.comma();
          break;
        case g2.asterisk:
          this.universal();
          break;
        case g2.ampersand:
          this.nesting();
          break;
        case g2.slash:
        case g2.combinator:
          this.combinator();
          break;
        case g2.str:
          this.string();
          break;
        case g2.closeSquare:
          this.missingSquareBracket();
        case g2.semicolon:
          this.missingBackslash();
        default:
          this.unexpected();
      }
    }, t3.expected = function(e5, t4, n3) {
      if (Array.isArray(e5)) {
        var r3 = e5.pop();
        e5 = e5.join(`, `) + ` or ` + r3;
      }
      var i3 = /^[aeiou]/.test(e5[0]) ? `an` : `a`;
      return n3 ? this.error(`Expected ` + i3 + ` ` + e5 + `, found "` + n3 + `" instead.`, { index: t4 }) : this.error(`Expected ` + i3 + ` ` + e5 + `.`, { index: t4 });
    }, t3.requiredSpace = function(e5) {
      return this.options.lossy ? ` ` : e5;
    }, t3.optionalSpace = function(e5) {
      return this.options.lossy ? `` : e5;
    }, t3.lossySpace = function(e5, t4) {
      return this.options.lossy ? t4 ? ` ` : `` : e5;
    }, t3.parseParenthesisToken = function(e5) {
      var t4 = this.content(e5);
      return e5[h2.FIELDS.TYPE] === g2.space ? this.requiredSpace(t4) : t4;
    }, t3.newNode = function(e5, t4) {
      return t4 && (/^ +$/.test(t4) && (this.options.lossy || (this.spaces = (this.spaces || ``) + t4), t4 = true), e5.namespace = t4, E2(e5, `namespace`)), this.spaces && (this.spaces = (e5.spaces.before = this.spaces, ``)), this.current.append(e5);
    }, t3.content = function(e5) {
      return e5 === void 0 && (e5 = this.currToken), this.css.slice(e5[h2.FIELDS.START_POS], e5[h2.FIELDS.END_POS]);
    }, t3.locateNextMeaningfulToken = function(e5) {
      e5 === void 0 && (e5 = this.position + 1);
      for (var t4 = e5; t4 < this.tokens.length; ) if (ne2[this.tokens[t4][h2.FIELDS.TYPE]]) {
        t4++;
        continue;
      } else return t4;
      return -1;
    }, w2(e4, [{ key: `currToken`, get: function() {
      return this.tokens[this.position];
    } }, { key: `nextToken`, get: function() {
      return this.tokens[this.position + 1];
    } }, { key: `prevToken`, get: function() {
      return this.tokens[this.position - 1];
    } }]), e4;
  })(), t2.exports = e3.default;
})), Bo = t(((e3, t2) => {
  e3.__esModule = true, e3.default = void 0;
  var n2 = r2(zo());
  function r2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  e3.default = (function() {
    function e4(e5, t4) {
      this.func = e5 || function() {
      }, this.funcRes = null, this.options = t4;
    }
    var t3 = e4.prototype;
    return t3._shouldUpdateSelector = function(e5, t4) {
      return t4 === void 0 && (t4 = {}), Object.assign({}, this.options, t4).updateSelector === false ? false : typeof e5 != `string`;
    }, t3._isLossy = function(e5) {
      return e5 === void 0 && (e5 = {}), Object.assign({}, this.options, e5).lossless === false;
    }, t3._root = function(e5, t4) {
      return t4 === void 0 && (t4 = {}), new n2.default(e5, this._parseOptions(t4)).root;
    }, t3._parseOptions = function(e5) {
      return { lossy: this._isLossy(e5) };
    }, t3._run = function(e5, t4) {
      var n3 = this;
      return t4 === void 0 && (t4 = {}), new Promise(function(r3, i2) {
        try {
          var a2 = n3._root(e5, t4);
          Promise.resolve(n3.func(a2)).then(function(r4) {
            var i3 = void 0;
            return n3._shouldUpdateSelector(e5, t4) && (i3 = a2.toString(), e5.selector = i3), { transform: r4, root: a2, string: i3 };
          }).then(r3, i2);
        } catch (e6) {
          i2(e6);
          return;
        }
      });
    }, t3._runSync = function(e5, t4) {
      t4 === void 0 && (t4 = {});
      var n3 = this._root(e5, t4), r3 = this.func(n3);
      if (r3 && typeof r3.then == `function`) throw Error(`Selector processor returned a promise to a synchronous call.`);
      var i2 = void 0;
      return t4.updateSelector && typeof e5 != `string` && (i2 = n3.toString(), e5.selector = i2), { transform: r3, root: n3, string: i2 };
    }, t3.ast = function(e5, t4) {
      return this._run(e5, t4).then(function(e6) {
        return e6.root;
      });
    }, t3.astSync = function(e5, t4) {
      return this._runSync(e5, t4).root;
    }, t3.transform = function(e5, t4) {
      return this._run(e5, t4).then(function(e6) {
        return e6.transform;
      });
    }, t3.transformSync = function(e5, t4) {
      return this._runSync(e5, t4).transform;
    }, t3.process = function(e5, t4) {
      return this._run(e5, t4).then(function(e6) {
        return e6.string || e6.root.toString();
      });
    }, t3.processSync = function(e5, t4) {
      var n3 = this._runSync(e5, t4);
      return n3.string || n3.root.toString();
    }, e4;
  })(), t2.exports = e3.default;
})), Vo = t(((e3) => {
  e3.__esModule = true, e3.universal = e3.tag = e3.string = e3.selector = e3.root = e3.pseudo = e3.nesting = e3.id = e3.comment = e3.combinator = e3.className = e3.attribute = void 0;
  var t2 = p2(Mo()), n2 = p2(To()), r2 = p2(Po()), i2 = p2(Eo()), a2 = p2(Do()), o2 = p2(Fo()), s2 = p2(jo()), c2 = p2(Co()), l2 = p2(wo()), u2 = p2(Ao()), d2 = p2(ko()), f2 = p2(No());
  function p2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  e3.attribute = function(e4) {
    return new t2.default(e4);
  }, e3.className = function(e4) {
    return new n2.default(e4);
  }, e3.combinator = function(e4) {
    return new r2.default(e4);
  }, e3.comment = function(e4) {
    return new i2.default(e4);
  }, e3.id = function(e4) {
    return new a2.default(e4);
  }, e3.nesting = function(e4) {
    return new o2.default(e4);
  }, e3.pseudo = function(e4) {
    return new s2.default(e4);
  }, e3.root = function(e4) {
    return new c2.default(e4);
  }, e3.selector = function(e4) {
    return new l2.default(e4);
  }, e3.string = function(e4) {
    return new u2.default(e4);
  }, e3.tag = function(e4) {
    return new d2.default(e4);
  }, e3.universal = function(e4) {
    return new f2.default(e4);
  };
})), Ho = t(((e3) => {
  e3.__esModule = true, e3.isComment = e3.isCombinator = e3.isClassName = e3.isAttribute = void 0, e3.isContainer = d2, e3.isIdentifier = void 0, e3.isNamespace = f2, e3.isNesting = void 0, e3.isNode = i2, e3.isPseudo = void 0, e3.isPseudoClass = u2, e3.isPseudoElement = l2, e3.isUniversal = e3.isTag = e3.isString = e3.isSelector = e3.isRoot = void 0;
  var t2 = $(), n2, r2 = (n2 = {}, n2[t2.ATTRIBUTE] = true, n2[t2.CLASS] = true, n2[t2.COMBINATOR] = true, n2[t2.COMMENT] = true, n2[t2.ID] = true, n2[t2.NESTING] = true, n2[t2.PSEUDO] = true, n2[t2.ROOT] = true, n2[t2.SELECTOR] = true, n2[t2.STRING] = true, n2[t2.TAG] = true, n2[t2.UNIVERSAL] = true, n2);
  function i2(e4) {
    return typeof e4 == `object` && r2[e4.type];
  }
  function a2(e4, t3) {
    return i2(t3) && t3.type === e4;
  }
  var o2 = a2.bind(null, t2.ATTRIBUTE);
  e3.isAttribute = o2, e3.isClassName = a2.bind(null, t2.CLASS), e3.isCombinator = a2.bind(null, t2.COMBINATOR), e3.isComment = a2.bind(null, t2.COMMENT), e3.isIdentifier = a2.bind(null, t2.ID), e3.isNesting = a2.bind(null, t2.NESTING);
  var s2 = a2.bind(null, t2.PSEUDO);
  e3.isPseudo = s2, e3.isRoot = a2.bind(null, t2.ROOT), e3.isSelector = a2.bind(null, t2.SELECTOR), e3.isString = a2.bind(null, t2.STRING);
  var c2 = a2.bind(null, t2.TAG);
  e3.isTag = c2, e3.isUniversal = a2.bind(null, t2.UNIVERSAL);
  function l2(e4) {
    return s2(e4) && e4.value && (e4.value.startsWith(`::`) || e4.value.toLowerCase() === `:before` || e4.value.toLowerCase() === `:after` || e4.value.toLowerCase() === `:first-letter` || e4.value.toLowerCase() === `:first-line`);
  }
  function u2(e4) {
    return s2(e4) && !l2(e4);
  }
  function d2(e4) {
    return !!(i2(e4) && e4.walk);
  }
  function f2(e4) {
    return o2(e4) || c2(e4);
  }
})), Uo = t(((e3) => {
  e3.__esModule = true;
  var t2 = $();
  Object.keys(t2).forEach(function(n3) {
    n3 === `default` || n3 === `__esModule` || n3 in e3 && e3[n3] === t2[n3] || (e3[n3] = t2[n3]);
  });
  var n2 = Vo();
  Object.keys(n2).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e3 && e3[t3] === n2[t3] || (e3[t3] = n2[t3]);
  });
  var r2 = Ho();
  Object.keys(r2).forEach(function(t3) {
    t3 === `default` || t3 === `__esModule` || t3 in e3 && e3[t3] === r2[t3] || (e3[t3] = r2[t3]);
  });
})), Wo = t(((e3, t2) => {
  e3.__esModule = true, e3.default = void 0;
  var n2 = o2(Bo()), r2 = a2(Uo());
  function i2(e4) {
    if (typeof WeakMap != `function`) return null;
    var t3 = /* @__PURE__ */ new WeakMap(), n3 = /* @__PURE__ */ new WeakMap();
    return (i2 = function(e5) {
      return e5 ? n3 : t3;
    })(e4);
  }
  function a2(e4, t3) {
    if (!t3 && e4 && e4.__esModule) return e4;
    if (e4 === null || typeof e4 != `object` && typeof e4 != `function`) return { default: e4 };
    var n3 = i2(t3);
    if (n3 && n3.has(e4)) return n3.get(e4);
    var r3 = {}, a3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o3 in e4) if (o3 !== `default` && Object.prototype.hasOwnProperty.call(e4, o3)) {
      var s3 = a3 ? Object.getOwnPropertyDescriptor(e4, o3) : null;
      s3 && (s3.get || s3.set) ? Object.defineProperty(r3, o3, s3) : r3[o3] = e4[o3];
    }
    return r3.default = e4, n3 && n3.set(e4, r3), r3;
  }
  function o2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  var s2 = function(e4) {
    return new n2.default(e4);
  };
  Object.assign(s2, r2), delete s2.__esModule, e3.default = s2, t2.exports = e3.default;
})), Go = e(t(((e3, t2) => {
  var { AtRule: n2, Rule: r2 } = o(), i2 = Wo();
  function a2(e4, t3) {
    let n3;
    try {
      i2((e5) => {
        n3 = e5;
      }).processSync(e4);
    } catch (n4) {
      throw e4.includes(`:`) ? t3 ? t3.error(`Missed semicolon`) : n4 : t3 ? t3.error(n4.message) : n4;
    }
    return n3.at(0);
  }
  function s2(e4, t3) {
    let n3 = false;
    return e4.each((e5) => {
      if (e5.type === `nesting`) {
        let r3 = t3.clone({});
        e5.value === `&` ? e5.replaceWith(r3) : e5.replaceWith(a2(e5.value.replace(`&`, r3.toString()))), n3 = true;
      } else `nodes` in e5 && e5.nodes && s2(e5, t3) && (n3 = true);
    }), n3;
  }
  function c2(e4, t3) {
    let n3 = [];
    for (let r3 of e4.selectors) {
      let o2 = a2(r3, e4);
      for (let e5 of t3.selectors) {
        if (!e5) continue;
        let r4 = a2(e5, t3);
        s2(r4, o2) || (r4.prepend(i2.combinator({ value: ` ` })), r4.prepend(o2.clone({}))), n3.push(r4.toString());
      }
    }
    return n3;
  }
  function l2(e4, t3) {
    if (e4.prev()?.type !== `comment`) return t3.after(e4), e4;
    let n3 = e4.prev();
    return e4.parent.toString().match(/[*]\/ *\n.*{/) ? t3.after(e4).after(n3) : t3.after(e4), e4;
  }
  function u2(e4) {
    return function t3(n3, r3, i3, a3 = i3) {
      let o2 = [];
      if (r3.each((s3) => {
        s3.type === `rule` && i3 ? a3 && (s3.selectors = c2(n3, s3)) : s3.type === `atrule` && s3.nodes ? e4[s3.name] ? t3(n3, s3, a3) : r3[_2] !== false && o2.push(s3) : o2.push(s3);
      }), i3 && o2.length) {
        let e5 = n3.clone({ nodes: [] });
        for (let t4 of o2) e5.append(t4);
        r3.prepend(e5);
      }
    };
  }
  function d2(e4, t3, n3) {
    let i3 = new r2({ nodes: [], selector: e4 });
    return i3.append(t3), n3.after(i3), i3;
  }
  function f2(e4, t3, n3, r3 = true) {
    return t3.length ? (n3 = d2(e4, t3, n3), r3 && (t3 = []), [n3, t3]) : [n3, t3];
  }
  function p2(e4, t3 = ``) {
    let n3 = e4.concat(t3), r3 = {};
    for (let e5 of n3) r3[e5.replace(/^@/, ``)] = true;
    return r3;
  }
  function m2(e4) {
    e4 = e4.trim();
    let t3 = e4.match(/^\((.*)\)$/);
    if (!t3) return { selector: e4, type: `basic` };
    let n3 = t3[1].match(/^(with(?:out)?):(.+)$/);
    if (n3) {
      let e5 = n3[1] === `with`, t4 = Object.fromEntries(n3[2].trim().split(/\s+/).map((e6) => [e6, true]));
      if (e5 && t4.all) return { type: `noop` };
      let r3 = (e6) => !!t4[e6];
      return t4.all ? r3 = () => true : e5 && (r3 = (e6) => e6 === `all` ? false : !t4[e6]), { escapes: r3, type: `withrules` };
    }
    return { type: `unknown` };
  }
  function h2(e4) {
    let t3 = [], r3 = e4.parent;
    for (; r3 && r3 instanceof n2; ) t3.push(r3), r3 = r3.parent;
    return t3;
  }
  function g2(e4) {
    let t3 = e4[v2];
    if (!t3) e4.after(e4.nodes);
    else {
      let n3 = e4.nodes, r3, i3 = -1, a3, o2, s3, c3 = h2(e4);
      if (c3.forEach((e5, n4) => {
        if (t3(e5.name)) r3 = e5, i3 = n4, o2 = s3;
        else {
          let t4 = s3;
          s3 = e5.clone({ nodes: [] }), t4 && s3.append(t4), a3 || (a3 = s3);
        }
      }), r3 ? o2 ? (a3.append(n3), r3.after(o2)) : r3.after(n3) : e4.after(n3), e4.next() && r3) {
        let t4;
        c3.slice(0, i3 + 1).forEach((n4, r4, i4) => {
          let a4 = t4;
          t4 = n4.clone({ nodes: [] }), a4 && t4.append(a4);
          let o3 = [], s4 = (i4[r4 - 1] || e4).next();
          for (; s4; ) o3.push(s4), s4 = s4.next();
          t4.append(o3);
        }), t4 && (o2 || n3[n3.length - 1]).after(t4);
      }
    }
    e4.remove();
  }
  var _2 = /* @__PURE__ */ Symbol(`rootRuleMergeSel`), v2 = /* @__PURE__ */ Symbol(`rootRuleEscapes`);
  function y2(e4) {
    let { params: t3 } = e4, { escapes: n3, selector: i3, type: a3 } = m2(t3);
    if (a3 === `unknown`) throw e4.error(`Unknown @${e4.name} parameter ${JSON.stringify(t3)}`);
    if (a3 === `basic` && i3) {
      let t4 = new r2({ nodes: e4.nodes, selector: i3 });
      e4.removeAll(), e4.append(t4);
    }
    e4[v2] = n3, e4[_2] = n3 ? !n3(`all`) : a3 === `noop`;
  }
  var b2 = /* @__PURE__ */ Symbol(`hasRootRule`);
  t2.exports = (e4 = {}) => {
    let t3 = p2([`media`, `supports`, `layer`, `container`, `starting-style`], e4.bubble), n3 = u2(t3), r3 = p2([`document`, `font-face`, `keyframes`, `-webkit-keyframes`, `-moz-keyframes`], e4.unwrap), i3 = (e4.rootRuleName || `at-root`).replace(/^@/, ``), a3 = e4.preserveEmpty;
    return { Once(e5) {
      e5.walkAtRules(i3, (t4) => {
        y2(t4), e5[b2] = true;
      });
    }, postcssPlugin: `postcss-nested`, RootExit(e5) {
      e5[b2] && (e5.walkAtRules(i3, g2), e5[b2] = false);
    }, Rule(e5) {
      let o2 = false, s3 = e5, u3 = false, d3 = [];
      e5.each((a4) => {
        switch (a4.type) {
          case `atrule`:
            [s3, d3] = f2(e5.selector, d3, s3), a4.name === i3 ? (o2 = true, n3(e5, a4, true, a4[_2]), s3 = l2(a4, s3)) : t3[a4.name] ? (u3 = true, o2 = true, n3(e5, a4, true), s3 = l2(a4, s3)) : r3[a4.name] ? (u3 = true, o2 = true, n3(e5, a4, false), s3 = l2(a4, s3)) : u3 && d3.push(a4);
            break;
          case `decl`:
            u3 && d3.push(a4);
            break;
          case `rule`:
            [s3, d3] = f2(e5.selector, d3, s3), u3 = true, o2 = true, a4.selectors = c2(e5, a4), s3 = l2(a4, s3);
            break;
        }
      }), f2(e5.selector, d3, s3, false), o2 && a3 !== true && (e5.raws.semicolon = true, e5.nodes.length === 0 && e5.remove());
    } };
  }, t2.exports.postcss = true;
}))(), 1);
async function Ko({ entrypoint: e3 = `/main.css`, volume: t2 = {}, ...n2 } = {}) {
  return n2 = { entrypoint: e3, volume: t2, ...n2 }, { css: (await a().use((0, Go.default)()).process(n2.volume[n2.entrypoint], { from: n2.entrypoint, parser: n2.parser || null })).css };
}
var qo = class extends Map {
  constructor(e3) {
    super(), this.factory = e3;
  }
  get(e3) {
    let t2 = super.get(e3);
    return t2 === void 0 && (t2 = this.factory(e3, this), this.set(e3, t2)), t2;
  }
};
export {
  fo as a,
  ho as i,
  Ko as n,
  uo as o,
  Wo as r,
  qo as t
};
