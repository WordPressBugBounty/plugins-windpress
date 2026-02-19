var zn=Object.defineProperty;var zr=e=>{throw TypeError(e)};var jn=(e,r,o)=>r in e?zn(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o;var Ee=(e,r,o)=>jn(e,typeof r!="symbol"?r+"":r,o),Nn=(e,r,o)=>r.has(e)||zr("Cannot "+o);var jr=(e,r,o)=>r.has(e)?zr("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,o);var Ne=(e,r,o)=>(Nn(e,r,"access private method"),o);var be,Cr,Jt,Zt,Tn;import{o as Nr,t as Z}from"./chunk-DsGVJDuR.min.js";import{t as Pr}from"./chunk-X4GG3EDV-BkqDNkXm.min.js";import{n as Pn}from"./lib-Bqt-Z818.min.js";import{t as In}from"./path-browserify-CSssTpx0.min.js";import{d as Fn,n as Ln,r as Dn,t as er}from"./cssesc-CRHfs1n9.js";var Mn=new Set("black.silver.gray.white.maroon.red.purple.fuchsia.green.lime.olive.yellow.navy.blue.teal.aqua.aliceblue.antiquewhite.aqua.aquamarine.azure.beige.bisque.black.blanchedalmond.blue.blueviolet.brown.burlywood.cadetblue.chartreuse.chocolate.coral.cornflowerblue.cornsilk.crimson.cyan.darkblue.darkcyan.darkgoldenrod.darkgray.darkgreen.darkgrey.darkkhaki.darkmagenta.darkolivegreen.darkorange.darkorchid.darkred.darksalmon.darkseagreen.darkslateblue.darkslategray.darkslategrey.darkturquoise.darkviolet.deeppink.deepskyblue.dimgray.dimgrey.dodgerblue.firebrick.floralwhite.forestgreen.fuchsia.gainsboro.ghostwhite.gold.goldenrod.gray.green.greenyellow.grey.honeydew.hotpink.indianred.indigo.ivory.khaki.lavender.lavenderblush.lawngreen.lemonchiffon.lightblue.lightcoral.lightcyan.lightgoldenrodyellow.lightgray.lightgreen.lightgrey.lightpink.lightsalmon.lightseagreen.lightskyblue.lightslategray.lightslategrey.lightsteelblue.lightyellow.lime.limegreen.linen.magenta.maroon.mediumaquamarine.mediumblue.mediumorchid.mediumpurple.mediumseagreen.mediumslateblue.mediumspringgreen.mediumturquoise.mediumvioletred.midnightblue.mintcream.mistyrose.moccasin.navajowhite.navy.oldlace.olive.olivedrab.orange.orangered.orchid.palegoldenrod.palegreen.paleturquoise.palevioletred.papayawhip.peachpuff.peru.pink.plum.powderblue.purple.rebeccapurple.red.rosybrown.royalblue.saddlebrown.salmon.sandybrown.seagreen.seashell.sienna.silver.skyblue.slateblue.slategray.slategrey.snow.springgreen.steelblue.tan.teal.thistle.tomato.turquoise.violet.wheat.white.whitesmoke.yellow.yellowgreen.transparent.currentcolor.canvas.canvastext.linktext.visitedtext.activetext.buttonface.buttontext.buttonborder.field.fieldtext.highlight.highlighttext.selecteditem.selecteditemtext.mark.marktext.graytext.accentcolor.accentcolortext".split(".")),Rn=/^(rgba?|hsla?|hwb|color|(ok)?(lab|lch)|light-dark|color-mix)\(/i;function Vn(e){return e.charCodeAt(0)===35||Rn.test(e)||Mn.has(e.toLowerCase())}var tr=["calc","min","max","clamp","mod","rem","sin","cos","tan","asin","acos","atan","atan2","pow","sqrt","hypot","log","exp","round"];function wt(e){return e.indexOf("(")!==-1&&tr.some(r=>e.includes(`${r}(`))}function Kn(e){if(!tr.some(s=>e.includes(s)))return e;let r="",o=[],t=null,n=null;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);if(i>=48&&i<=57||t!==null&&(i===37||i>=97&&i<=122||i>=65&&i<=90)?t=s:(n=t,t=null),i===40){r+=e[s];let a=s;for(let d=s-1;d>=0;d--){let p=e.charCodeAt(d);if(p>=48&&p<=57)a=d;else if(p>=97&&p<=122)a=d;else break}let l=e.slice(a,s);if(tr.includes(l)){o.unshift(!0);continue}else if(o[0]&&l===""){o.unshift(!0);continue}o.unshift(!1);continue}else if(i===41)r+=e[s],o.shift();else if(i===44&&o[0]){r+=", ";continue}else{if(i===32&&o[0]&&r.charCodeAt(r.length-1)===32)continue;if((i===43||i===42||i===47||i===45)&&o[0]){let a=r.trimEnd(),l=a.charCodeAt(a.length-1),d=a.charCodeAt(a.length-2),p=e.charCodeAt(s+1);if((l===101||l===69)&&d>=48&&d<=57){r+=e[s];continue}else if(l===43||l===42||l===47||l===45){r+=e[s];continue}else if(l===40||l===44){r+=e[s];continue}else e.charCodeAt(s-1)===32?r+=`${e[s]} `:l>=48&&l<=57||p>=48&&p<=57||l===41||p===40||p===43||p===42||p===47||p===45||n!==null&&n===s-1?r+=` ${e[s]} `:r+=e[s]}else r+=e[s]}}return r}var yt=new Uint8Array(256);function W(e,r){let o=0,t=[],n=0,s=e.length,i=r.charCodeAt(0);for(let a=0;a<s;a++){let l=e.charCodeAt(a);if(o===0&&l===i){t.push(e.slice(n,a)),n=a+1;continue}switch(l){case 92:a+=1;break;case 39:case 34:for(;++a<s;){let d=e.charCodeAt(a);if(d===92){a+=1;continue}if(d===l)break}break;case 40:yt[o]=41,o++;break;case 91:yt[o]=93,o++;break;case 123:yt[o]=125,o++;break;case 93:case 125:case 41:o>0&&l===yt[o-1]&&o--;break}}return t.push(e.slice(n)),t}var rr={color:Vn,length:rt,percentage:or,ratio:ti,number:Fr,integer:D,url:Ir,position:oi,"bg-size":ni,"line-width":Wn,image:Yn,"family-name":Gn,"generic-name":Qn,"absolute-size":Hn,"relative-size":Jn,angle:ai,vector:si};function ae(e,r){var o;if(e.startsWith("var("))return null;for(let t of r)if((o=rr[t])!=null&&o.call(rr,e))return t;return null}var Un=/^url\(.*\)$/;function Ir(e){return Un.test(e)}function Wn(e){return W(e," ").every(r=>rt(r)||Fr(r)||r==="thin"||r==="medium"||r==="thick")}var qn=/^(?:element|image|cross-fade|image-set)\(/,Bn=/^(repeating-)?(conic|linear|radial)-gradient\(/;function Yn(e){let r=0;for(let o of W(e,","))if(!o.startsWith("var(")){if(Ir(o)){r+=1;continue}if(Bn.test(o)){r+=1;continue}if(qn.test(o)){r+=1;continue}return!1}return r>0}function Qn(e){return e==="serif"||e==="sans-serif"||e==="monospace"||e==="cursive"||e==="fantasy"||e==="system-ui"||e==="ui-serif"||e==="ui-sans-serif"||e==="ui-monospace"||e==="ui-rounded"||e==="math"||e==="emoji"||e==="fangsong"}function Gn(e){let r=0;for(let o of W(e,",")){let t=o.charCodeAt(0);if(t>=48&&t<=57)return!1;o.startsWith("var(")||(r+=1)}return r>0}function Hn(e){return e==="xx-small"||e==="x-small"||e==="small"||e==="medium"||e==="large"||e==="x-large"||e==="xx-large"||e==="xxx-large"}function Jn(e){return e==="larger"||e==="smaller"}var Pe=/[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/,Zn=RegExp(`^${Pe.source}$`);function Fr(e){return Zn.test(e)||wt(e)}var Xn=RegExp(`^${Pe.source}%$`);function or(e){return Xn.test(e)||wt(e)}var ei=RegExp(`^${Pe.source}s*/s*${Pe.source}$`);function ti(e){return ei.test(e)||wt(e)}var ri=RegExp(`^${Pe.source}(${"cm.mm.Q.in.pc.pt.px.em.ex.ch.rem.lh.rlh.vw.vh.vmin.vmax.vb.vi.svw.svh.lvw.lvh.dvw.dvh.cqw.cqh.cqi.cqb.cqmin.cqmax".split(".").join("|")})$`);function rt(e){return ri.test(e)||wt(e)}function oi(e){let r=0;for(let o of W(e," ")){if(o==="center"||o==="top"||o==="right"||o==="bottom"||o==="left"){r+=1;continue}if(!o.startsWith("var(")){if(rt(o)||or(o)){r+=1;continue}return!1}}return r>0}function ni(e){let r=0;for(let o of W(e,",")){if(o==="cover"||o==="contain"){r+=1;continue}let t=W(o," ");if(t.length!==1&&t.length!==2)return!1;if(t.every(n=>n==="auto"||rt(n)||or(n))){r+=1;continue}}return r>0}var ii=RegExp(`^${Pe.source}(${["deg","rad","grad","turn"].join("|")})$`);function ai(e){return ii.test(e)}var li=RegExp(`^${Pe.source} +${Pe.source} +${Pe.source}$`);function si(e){return li.test(e)}function D(e){let r=Number(e);return Number.isInteger(r)&&r>=0&&String(r)===String(e)}function Lr(e){let r=Number(e);return Number.isInteger(r)&&r>0&&String(r)===String(e)}function pe(e){return Dr(e,.25)}function nr(e){return Dr(e,.25)}function Dr(e,r){let o=Number(e);return o>=0&&o%r===0&&String(o)===String(e)}function qe(e){return{__BARE_VALUE__:e}}var Se=qe(e=>{if(D(e.value))return e.value}),he=qe(e=>{if(D(e.value))return`${e.value}%`}),Re=qe(e=>{if(D(e.value))return`${e.value}px`}),Mr=qe(e=>{if(D(e.value))return`${e.value}ms`}),xt=qe(e=>{if(D(e.value))return`${e.value}deg`}),ui=qe(e=>{if(e.fraction===null)return;let[r,o]=W(e.fraction,"/");if(!(!D(r)||!D(o)))return e.fraction}),Rr=qe(e=>{if(D(Number(e.value)))return`repeat(${e.value}, minmax(0, 1fr))`}),ci={accentColor:({theme:e})=>e("colors"),animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",pulse:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",bounce:"bounce 1s infinite"},aria:{busy:'busy="true"',checked:'checked="true"',disabled:'disabled="true"',expanded:'expanded="true"',hidden:'hidden="true"',pressed:'pressed="true"',readonly:'readonly="true"',required:'required="true"',selected:'selected="true"'},aspectRatio:{auto:"auto",square:"1 / 1",video:"16 / 9",...ui},backdropBlur:({theme:e})=>e("blur"),backdropBrightness:({theme:e})=>({...e("brightness"),...he}),backdropContrast:({theme:e})=>({...e("contrast"),...he}),backdropGrayscale:({theme:e})=>({...e("grayscale"),...he}),backdropHueRotate:({theme:e})=>({...e("hueRotate"),...xt}),backdropInvert:({theme:e})=>({...e("invert"),...he}),backdropOpacity:({theme:e})=>({...e("opacity"),...he}),backdropSaturate:({theme:e})=>({...e("saturate"),...he}),backdropSepia:({theme:e})=>({...e("sepia"),...he}),backgroundColor:({theme:e})=>e("colors"),backgroundImage:{none:"none","gradient-to-t":"linear-gradient(to top, var(--tw-gradient-stops))","gradient-to-tr":"linear-gradient(to top right, var(--tw-gradient-stops))","gradient-to-r":"linear-gradient(to right, var(--tw-gradient-stops))","gradient-to-br":"linear-gradient(to bottom right, var(--tw-gradient-stops))","gradient-to-b":"linear-gradient(to bottom, var(--tw-gradient-stops))","gradient-to-bl":"linear-gradient(to bottom left, var(--tw-gradient-stops))","gradient-to-l":"linear-gradient(to left, var(--tw-gradient-stops))","gradient-to-tl":"linear-gradient(to top left, var(--tw-gradient-stops))"},backgroundOpacity:({theme:e})=>e("opacity"),backgroundPosition:{bottom:"bottom",center:"center",left:"left","left-bottom":"left bottom","left-top":"left top",right:"right","right-bottom":"right bottom","right-top":"right top",top:"top"},backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{0:"0",none:"",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},borderColor:({theme:e})=>({DEFAULT:"currentcolor",...e("colors")}),borderOpacity:({theme:e})=>e("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},borderSpacing:({theme:e})=>e("spacing"),borderWidth:{DEFAULT:"1px",0:"0px",2:"2px",4:"4px",8:"8px",...Re},boxShadow:{sm:"0 1px 2px 0 rgb(0 0 0 / 0.05)",DEFAULT:"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",lg:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",xl:"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","2xl":"0 25px 50px -12px rgb(0 0 0 / 0.25)",inner:"inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",none:"none"},boxShadowColor:({theme:e})=>e("colors"),brightness:{0:"0",50:".5",75:".75",90:".9",95:".95",100:"1",105:"1.05",110:"1.1",125:"1.25",150:"1.5",200:"2",...he},caretColor:({theme:e})=>e("colors"),colors:()=>({...Pr}),columns:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",...Se},container:{},content:{none:"none"},contrast:{0:"0",50:".5",75:".75",100:"1",125:"1.25",150:"1.5",200:"2",...he},cursor:{auto:"auto",default:"default",pointer:"pointer",wait:"wait",text:"text",move:"move",help:"help","not-allowed":"not-allowed",none:"none","context-menu":"context-menu",progress:"progress",cell:"cell",crosshair:"crosshair","vertical-text":"vertical-text",alias:"alias",copy:"copy","no-drop":"no-drop",grab:"grab",grabbing:"grabbing","all-scroll":"all-scroll","col-resize":"col-resize","row-resize":"row-resize","n-resize":"n-resize","e-resize":"e-resize","s-resize":"s-resize","w-resize":"w-resize","ne-resize":"ne-resize","nw-resize":"nw-resize","se-resize":"se-resize","sw-resize":"sw-resize","ew-resize":"ew-resize","ns-resize":"ns-resize","nesw-resize":"nesw-resize","nwse-resize":"nwse-resize","zoom-in":"zoom-in","zoom-out":"zoom-out"},divideColor:({theme:e})=>e("borderColor"),divideOpacity:({theme:e})=>e("borderOpacity"),divideWidth:({theme:e})=>({...e("borderWidth"),...Re}),dropShadow:{sm:"0 1px 1px rgb(0 0 0 / 0.05)",DEFAULT:["0 1px 2px rgb(0 0 0 / 0.1)","0 1px 1px rgb(0 0 0 / 0.06)"],md:["0 4px 3px rgb(0 0 0 / 0.07)","0 2px 2px rgb(0 0 0 / 0.06)"],lg:["0 10px 8px rgb(0 0 0 / 0.04)","0 4px 3px rgb(0 0 0 / 0.1)"],xl:["0 20px 13px rgb(0 0 0 / 0.03)","0 8px 5px rgb(0 0 0 / 0.08)"],"2xl":"0 25px 25px rgb(0 0 0 / 0.15)",none:"0 0 #0000"},fill:({theme:e})=>e("colors"),flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({auto:"auto","1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%","1/12":"8.333333%","2/12":"16.666667%","3/12":"25%","4/12":"33.333333%","5/12":"41.666667%","6/12":"50%","7/12":"58.333333%","8/12":"66.666667%","9/12":"75%","10/12":"83.333333%","11/12":"91.666667%",full:"100%",...e("spacing")}),flexGrow:{0:"0",DEFAULT:"1",...Se},flexShrink:{0:"0",DEFAULT:"1",...Se},fontFamily:{sans:["ui-sans-serif","system-ui","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"]},fontSize:{xs:["0.75rem",{lineHeight:"1rem"}],sm:["0.875rem",{lineHeight:"1.25rem"}],base:["1rem",{lineHeight:"1.5rem"}],lg:["1.125rem",{lineHeight:"1.75rem"}],xl:["1.25rem",{lineHeight:"1.75rem"}],"2xl":["1.5rem",{lineHeight:"2rem"}],"3xl":["1.875rem",{lineHeight:"2.25rem"}],"4xl":["2.25rem",{lineHeight:"2.5rem"}],"5xl":["3rem",{lineHeight:"1"}],"6xl":["3.75rem",{lineHeight:"1"}],"7xl":["4.5rem",{lineHeight:"1"}],"8xl":["6rem",{lineHeight:"1"}],"9xl":["8rem",{lineHeight:"1"}]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:({theme:e})=>e("spacing"),gradientColorStops:({theme:e})=>e("colors"),gradientColorStopPositions:{"0%":"0%","5%":"5%","10%":"10%","15%":"15%","20%":"20%","25%":"25%","30%":"30%","35%":"35%","40%":"40%","45%":"45%","50%":"50%","55%":"55%","60%":"60%","65%":"65%","70%":"70%","75%":"75%","80%":"80%","85%":"85%","90%":"90%","95%":"95%","100%":"100%",...he},grayscale:{0:"0",DEFAULT:"100%",...he},gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},gridColumn:{auto:"auto","span-1":"span 1 / span 1","span-2":"span 2 / span 2","span-3":"span 3 / span 3","span-4":"span 4 / span 4","span-5":"span 5 / span 5","span-6":"span 6 / span 6","span-7":"span 7 / span 7","span-8":"span 8 / span 8","span-9":"span 9 / span 9","span-10":"span 10 / span 10","span-11":"span 11 / span 11","span-12":"span 12 / span 12","span-full":"1 / -1"},gridColumnEnd:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13",...Se},gridColumnStart:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13",...Se},gridRow:{auto:"auto","span-1":"span 1 / span 1","span-2":"span 2 / span 2","span-3":"span 3 / span 3","span-4":"span 4 / span 4","span-5":"span 5 / span 5","span-6":"span 6 / span 6","span-7":"span 7 / span 7","span-8":"span 8 / span 8","span-9":"span 9 / span 9","span-10":"span 10 / span 10","span-11":"span 11 / span 11","span-12":"span 12 / span 12","span-full":"1 / -1"},gridRowEnd:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13",...Se},gridRowStart:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13",...Se},gridTemplateColumns:{none:"none",subgrid:"subgrid",1:"repeat(1, minmax(0, 1fr))",2:"repeat(2, minmax(0, 1fr))",3:"repeat(3, minmax(0, 1fr))",4:"repeat(4, minmax(0, 1fr))",5:"repeat(5, minmax(0, 1fr))",6:"repeat(6, minmax(0, 1fr))",7:"repeat(7, minmax(0, 1fr))",8:"repeat(8, minmax(0, 1fr))",9:"repeat(9, minmax(0, 1fr))",10:"repeat(10, minmax(0, 1fr))",11:"repeat(11, minmax(0, 1fr))",12:"repeat(12, minmax(0, 1fr))",...Rr},gridTemplateRows:{none:"none",subgrid:"subgrid",1:"repeat(1, minmax(0, 1fr))",2:"repeat(2, minmax(0, 1fr))",3:"repeat(3, minmax(0, 1fr))",4:"repeat(4, minmax(0, 1fr))",5:"repeat(5, minmax(0, 1fr))",6:"repeat(6, minmax(0, 1fr))",7:"repeat(7, minmax(0, 1fr))",8:"repeat(8, minmax(0, 1fr))",9:"repeat(9, minmax(0, 1fr))",10:"repeat(10, minmax(0, 1fr))",11:"repeat(11, minmax(0, 1fr))",12:"repeat(12, minmax(0, 1fr))",...Rr},height:({theme:e})=>({auto:"auto","1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%",full:"100%",screen:"100vh",svh:"100svh",lvh:"100lvh",dvh:"100dvh",min:"min-content",max:"max-content",fit:"fit-content",...e("spacing")}),hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg",...xt},inset:({theme:e})=>({auto:"auto","1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%",full:"100%",...e("spacing")}),invert:{0:"0",DEFAULT:"100%",...he},keyframes:{spin:{to:{transform:"rotate(360deg)"}},ping:{"75%, 100%":{transform:"scale(2)",opacity:"0"}},pulse:{"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2",3:".75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},listStyleType:{none:"none",disc:"disc",decimal:"decimal"},listStyleImage:{none:"none"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),lineClamp:{1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",...Se},maxHeight:({theme:e})=>({none:"none",full:"100%",screen:"100vh",svh:"100svh",lvh:"100lvh",dvh:"100dvh",min:"min-content",max:"max-content",fit:"fit-content",...e("spacing")}),maxWidth:({theme:e})=>({none:"none",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch",...e("spacing")}),minHeight:({theme:e})=>({full:"100%",screen:"100vh",svh:"100svh",lvh:"100lvh",dvh:"100dvh",min:"min-content",max:"max-content",fit:"fit-content",...e("spacing")}),minWidth:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",...e("spacing")}),objectPosition:{bottom:"bottom",center:"center",left:"left","left-bottom":"left bottom","left-top":"left top",right:"right","right-bottom":"right bottom","right-top":"right top",top:"top"},opacity:{0:"0",5:"0.05",10:"0.1",15:"0.15",20:"0.2",25:"0.25",30:"0.3",35:"0.35",40:"0.4",45:"0.45",50:"0.5",55:"0.55",60:"0.6",65:"0.65",70:"0.7",75:"0.75",80:"0.8",85:"0.85",90:"0.9",95:"0.95",100:"1",...he},order:{first:"-9999",last:"9999",none:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",...Se},outlineColor:({theme:e})=>e("colors"),outlineOffset:{0:"0px",1:"1px",2:"2px",4:"4px",8:"8px",...Re},outlineWidth:{0:"0px",1:"1px",2:"2px",4:"4px",8:"8px",...Re},padding:({theme:e})=>e("spacing"),placeholderColor:({theme:e})=>e("colors"),placeholderOpacity:({theme:e})=>e("opacity"),ringColor:({theme:e})=>({DEFAULT:"currentcolor",...e("colors")}),ringOffsetColor:({theme:e})=>e("colors"),ringOffsetWidth:{0:"0px",1:"1px",2:"2px",4:"4px",8:"8px",...Re},ringOpacity:({theme:e})=>({DEFAULT:"0.5",...e("opacity")}),ringWidth:{DEFAULT:"3px",0:"0px",1:"1px",2:"2px",4:"4px",8:"8px",...Re},rotate:{0:"0deg",1:"1deg",2:"2deg",3:"3deg",6:"6deg",12:"12deg",45:"45deg",90:"90deg",180:"180deg",...xt},saturate:{0:"0",50:".5",100:"1",150:"1.5",200:"2",...he},scale:{0:"0",50:".5",75:".75",90:".9",95:".95",100:"1",105:"1.05",110:"1.1",125:"1.25",150:"1.5",...he},screens:{sm:"40rem",md:"48rem",lg:"64rem",xl:"80rem","2xl":"96rem"},scrollMargin:({theme:e})=>e("spacing"),scrollPadding:({theme:e})=>e("spacing"),sepia:{0:"0",DEFAULT:"100%",...he},skew:{0:"0deg",1:"1deg",2:"2deg",3:"3deg",6:"6deg",12:"12deg",...xt},space:({theme:e})=>e("spacing"),spacing:{px:"1px",0:"0px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",11:"2.75rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},stroke:({theme:e})=>({none:"none",...e("colors")}),strokeWidth:{0:"0",1:"1",2:"2",...Se},supports:{},data:{},textColor:({theme:e})=>e("colors"),textDecorationColor:({theme:e})=>e("colors"),textDecorationThickness:{auto:"auto","from-font":"from-font",0:"0px",1:"1px",2:"2px",4:"4px",8:"8px",...Re},textIndent:({theme:e})=>e("spacing"),textOpacity:({theme:e})=>e("opacity"),textUnderlineOffset:{auto:"auto",0:"0px",1:"1px",2:"2px",4:"4px",8:"8px",...Re},transformOrigin:{center:"center",top:"top","top-right":"top right",right:"right","bottom-right":"bottom right",bottom:"bottom","bottom-left":"bottom left",left:"left","top-left":"top left"},transitionDelay:{0:"0s",75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms",...Mr},transitionDuration:{DEFAULT:"150ms",0:"0s",75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms",...Mr},transitionProperty:{none:"none",all:"all",DEFAULT:"color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",colors:"color, background-color, border-color, outline-color, text-decoration-color, fill, stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},translate:({theme:e})=>({"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%",full:"100%",...e("spacing")}),size:({theme:e})=>({auto:"auto","1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%","1/12":"8.333333%","2/12":"16.666667%","3/12":"25%","4/12":"33.333333%","5/12":"41.666667%","6/12":"50%","7/12":"58.333333%","8/12":"66.666667%","9/12":"75%","10/12":"83.333333%","11/12":"91.666667%",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",...e("spacing")}),width:({theme:e})=>({auto:"auto","1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%","1/12":"8.333333%","2/12":"16.666667%","3/12":"25%","4/12":"33.333333%","5/12":"41.666667%","6/12":"50%","7/12":"58.333333%","8/12":"66.666667%","9/12":"75%","10/12":"83.333333%","11/12":"91.666667%",full:"100%",screen:"100vw",svw:"100svw",lvw:"100lvw",dvw:"100dvw",min:"min-content",max:"max-content",fit:"fit-content",...e("spacing")}),willChange:{auto:"auto",scroll:"scroll-position",contents:"contents",transform:"transform"},zIndex:{auto:"auto",0:"0",10:"10",20:"20",30:"30",40:"40",50:"50",...Se}},di="4.2.0";function Vr(e){let r=[0];for(let n=0;n<e.length;n++)e.charCodeAt(n)===10&&r.push(n+1);function o(n){let s=0,i=r.length;for(;i>0;){let l=(i|0)>>1,d=s+l;r[d]<=n?(s=d+1,i=i-l-1):i=l}--s;let a=n-r[s];return{line:s+1,column:a}}function t({line:n,column:s}){--n,n=Math.min(Math.max(n,0),r.length-1);let i=r[n],a=r[n+1]??i;return Math.min(Math.max(i+s,0),a)}return{find:o,findOffset:t}}var ot=92,$t=47,St=42,Kr=34,Ur=39,fi=58,Tt=59,Te=10,At=13,nt=32,it=9,Wr=123,ir=125,ar=40,qr=41,pi=91,hi=93,Br=45,lr=64,mi=33,Ie=class An extends Error{constructor(o,t){if(t){let n=t[0],s=Vr(n.code).find(t[1]);o=`${n.file}:${s.line}:${s.column+1}: ${o}`}super(o);Ee(this,"loc");this.name="CssSyntaxError",this.loc=t,Error.captureStackTrace&&Error.captureStackTrace(this,An)}};function Ot(e,r){let o=r!=null&&r.from?{file:r.from,code:e}:null;e[0]==="\uFEFF"&&(e=" "+e.slice(1));let t=[],n=[],s=[],i=null,a=null,l="",d="",p=0,h;for(let g=0;g<e.length;g++){let b=e.charCodeAt(g);if(!(b===At&&(h=e.charCodeAt(g+1),h===Te)))if(b===ot)l===""&&(p=g),l+=e.slice(g,g+2),g+=1;else if(b===$t&&e.charCodeAt(g+1)===St){let m=g;for(let k=g+2;k<e.length;k++)if(h=e.charCodeAt(k),h===ot)k+=1;else if(h===St&&e.charCodeAt(k+1)===$t){g=k+1;break}let w=e.slice(m,g+1);if(w.charCodeAt(2)===mi){let k=lo(w.slice(2,-2));n.push(k),o&&(k.src=[o,m,g+1],k.dst=[o,m,g+1])}}else if(b===Ur||b===Kr){let m=Yr(e,g,b,o);l+=e.slice(g,m+1),g=m}else{if((b===nt||b===Te||b===it)&&(h=e.charCodeAt(g+1))&&(h===nt||h===Te||h===it||h===At&&(h=e.charCodeAt(g+2))&&h==Te))continue;if(b===Te){if(l.length===0)continue;h=l.charCodeAt(l.length-1),h!==nt&&h!==Te&&h!==it&&(l+=" ")}else if(b===Br&&e.charCodeAt(g+1)===Br&&l.length===0){let m="",w=g,k=-1;for(let y=g+2;y<e.length;y++)if(h=e.charCodeAt(y),h===ot)y+=1;else if(h===Ur||h===Kr)y=Yr(e,y,h,o);else if(h===$t&&e.charCodeAt(y+1)===St){for(let S=y+2;S<e.length;S++)if(h=e.charCodeAt(S),h===ot)S+=1;else if(h===St&&e.charCodeAt(S+1)===$t){y=S+1;break}}else if(k===-1&&h===fi)k=l.length+y-w;else if(h===Tt&&m.length===0){l+=e.slice(w,y),g=y;break}else if(h===ar)m+=")";else if(h===pi)m+="]";else if(h===Wr)m+="}";else if((h===ir||e.length-1===y)&&m.length===0){g=y-1,l+=e.slice(w,y);break}else(h===qr||h===hi||h===ir)&&m.length>0&&e[y]===m[m.length-1]&&(m=m.slice(0,-1));let A=sr(l,k);if(!A)throw new Ie("Invalid custom property, expected a value",o?[o,w,g]:null);o&&(A.src=[o,w,g],A.dst=[o,w,g]),i?i.nodes.push(A):t.push(A),l=""}else if(b===Tt&&l.charCodeAt(0)===lr)a=Et(l),o&&(a.src=[o,p,g],a.dst=[o,p,g]),i?i.nodes.push(a):t.push(a),l="",a=null;else if(b===Tt&&d[d.length-1]!==")"){let m=sr(l);if(!m){if(l.length===0)continue;throw new Ie(`Invalid declaration: \`${l.trim()}\``,o?[o,p,g]:null)}o&&(m.src=[o,p,g],m.dst=[o,p,g]),i?i.nodes.push(m):t.push(m),l=""}else if(b===Wr&&d[d.length-1]!==")")d+="}",a=ce(l.trim()),o&&(a.src=[o,p,g],a.dst=[o,p,g]),i&&i.nodes.push(a),s.push(i),i=a,l="",a=null;else if(b===ir&&d[d.length-1]!==")"){if(d==="")throw new Ie("Missing opening {",o?[o,g,g]:null);if(d=d.slice(0,-1),l.length>0)if(l.charCodeAt(0)===lr)a=Et(l),o&&(a.src=[o,p,g],a.dst=[o,p,g]),i?i.nodes.push(a):t.push(a),l="",a=null;else{let w=l.indexOf(":");if(i){let k=sr(l,w);if(!k)throw new Ie(`Invalid declaration: \`${l.trim()}\``,o?[o,p,g]:null);o&&(k.src=[o,p,g],k.dst=[o,p,g]),i.nodes.push(k)}}let m=s.pop()??null;m===null&&i&&t.push(i),i=m,l="",a=null}else if(b===ar)d+=")",l+="(";else if(b===qr){if(d[d.length-1]!==")")throw new Ie("Missing opening (",o?[o,g,g]:null);d=d.slice(0,-1),l+=")"}else{if(l.length===0&&(b===nt||b===Te||b===it))continue;l===""&&(p=g),l+=String.fromCharCode(b)}}}if(l.charCodeAt(0)===lr){let g=Et(l);o&&(g.src=[o,p,e.length],g.dst=[o,p,e.length]),t.push(g)}if(d.length>0&&i){if(i.kind==="rule")throw new Ie(`Missing closing } at ${i.selector}`,i.src?[i.src[0],i.src[1],i.src[1]]:null);if(i.kind==="at-rule")throw new Ie(`Missing closing } at ${i.name} ${i.params}`,i.src?[i.src[0],i.src[1],i.src[1]]:null)}return n.length>0?n.concat(t):t}function Et(e,r=[]){let o=e,t="";for(let n=5;n<e.length;n++){let s=e.charCodeAt(n);if(s===nt||s===it||s===ar){o=e.slice(0,n),t=e.slice(n);break}}return J(o.trim(),t.trim(),r)}function sr(e,r=e.indexOf(":")){if(r===-1)return null;let o=e.indexOf("!important",r+1);return c(e.slice(0,r).trim(),e.slice(r+1,o===-1?e.length:o).trim(),o!==-1)}function Yr(e,r,o,t=null){let n;for(let s=r+1;s<e.length;s++)if(n=e.charCodeAt(s),n===ot)s+=1;else{if(n===o)return s;if(n===Tt&&(e.charCodeAt(s+1)===Te||e.charCodeAt(s+1)===At&&e.charCodeAt(s+2)===Te))throw new Ie(`Unterminated string: ${e.slice(r,s+1)+String.fromCharCode(o)}`,t?[t,r,s+1]:null);if(n===Te||n===At&&e.charCodeAt(s+1)===Te)throw new Ie(`Unterminated string: ${e.slice(r,s)+String.fromCharCode(o)}`,t?[t,r,s+1]:null)}return r}function _t(e){if(arguments.length===0)throw TypeError("`CSS.escape` requires an argument.");let r=String(e),o=r.length,t=-1,n,s="",i=r.charCodeAt(0);if(o===1&&i===45)return"\\"+r;for(;++t<o;){if(n=r.charCodeAt(t),n===0){s+="\uFFFD";continue}if(n>=1&&n<=31||n===127||t===0&&n>=48&&n<=57||t===1&&n>=48&&n<=57&&i===45){s+="\\"+n.toString(16)+" ";continue}if(n>=128||n===45||n===95||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122){s+=r.charAt(t);continue}s+="\\"+r.charAt(t)}return s}function at(e){return e.replace(/\\([\dA-Fa-f]{1,6}[\t\n\f\r ]?|[\S\s])/g,r=>r.length>2?String.fromCodePoint(Number.parseInt(r.slice(1).trim(),16)):r[1])}var Qr=new Map([["--font",["--font-weight","--font-size"]],["--inset",["--inset-shadow","--inset-ring"]],["--text",["--text-color","--text-decoration-color","--text-decoration-thickness","--text-indent","--text-shadow","--text-underline-offset"]],["--grid-column",["--grid-column-start","--grid-column-end"]],["--grid-row",["--grid-row-start","--grid-row-end"]]]);function Gr(e,r){return(Qr.get(r)??[]).some(o=>e===o||e.startsWith(`${o}-`))}var gi=(Tn=class{constructor(e=new Map,r=new Set([])){jr(this,be);Ee(this,"prefix",null);this.values=e,this.keyframes=r}get size(){return this.values.size}add(e,r,o=0,t){if(e.endsWith("-*")){if(r!=="initial")throw Error(`Invalid theme value \`${r}\` for namespace \`${e}\``);e==="--*"?this.values.clear():this.clearNamespace(e.slice(0,-2),0)}if(o&4){let n=this.values.get(e);if(n&&!(n.options&4))return}r==="initial"?this.values.delete(e):this.values.set(e,{value:r,options:o,src:t})}keysInNamespaces(e){let r=[];for(let o of e){let t=`${o}-`;for(let n of this.values.keys())n.startsWith(t)&&n.indexOf("--",2)===-1&&(Gr(n,o)||r.push(n.slice(t.length)))}return r}get(e){for(let r of e){let o=this.values.get(r);if(o)return o.value}return null}hasDefault(e){return(this.getOptions(e)&4)==4}getOptions(e){var r;return e=at(Ne(this,be,Cr).call(this,e)),((r=this.values.get(e))==null?void 0:r.options)??0}entries(){return this.prefix?Array.from(this.values,e=>(e[0]=this.prefixKey(e[0]),e)):this.values.entries()}prefixKey(e){return this.prefix?`--${this.prefix}-${e.slice(2)}`:e}clearNamespace(e,r){let o=Qr.get(e)??[];e:for(let t of this.values.keys())if(t.startsWith(e)){if(r!==0&&(this.getOptions(t)&r)!==r)continue;for(let n of o)if(t.startsWith(n))continue e;this.values.delete(t)}}markUsedVariable(e){let r=at(Ne(this,be,Cr).call(this,e)),o=this.values.get(r);if(!o)return!1;let t=o.options&16;return o.options|=16,!t}resolve(e,r,o=0){let t=Ne(this,be,Jt).call(this,e,r);if(!t)return null;let n=this.values.get(t);return(o|n.options)&1?n.value:Ne(this,be,Zt).call(this,t)}resolveValue(e,r){let o=Ne(this,be,Jt).call(this,e,r);return o?this.values.get(o).value:null}resolveWith(e,r,o=[]){let t=Ne(this,be,Jt).call(this,e,r);if(!t)return null;let n={};for(let i of o){let a=`${t}${i}`,l=this.values.get(a);l&&(l.options&1?n[i]=l.value:n[i]=Ne(this,be,Zt).call(this,a))}let s=this.values.get(t);return s.options&1?[s.value,n]:[Ne(this,be,Zt).call(this,t),n]}namespace(e){let r=new Map,o=`${e}-`;for(let[t,n]of this.values)t===e?r.set(null,n.value):t.startsWith(`${o}-`)?r.set(t.slice(e.length),n.value):t.startsWith(o)&&r.set(t.slice(o.length),n.value);return r}addKeyframes(e){this.keyframes.add(e)}getKeyframes(){return Array.from(this.keyframes)}},be=new WeakSet,Cr=function(e){return this.prefix?`--${e.slice(3+this.prefix.length)}`:e},Jt=function(e,r){for(let o of r){let t=e===null?o:`${o}-${e}`;if(!this.values.has(t))if(e!==null&&e.includes(".")){if(t=`${o}-${e.replaceAll(".","_")}`,!this.values.has(t))continue}else continue;if(!Gr(t,o))return t}return null},Zt=function(e){let r=this.values.get(e);if(!r)return null;let o=null;return r.options&2&&(o=r.value),`var(${_t(this.prefixKey(e))}${o?`, ${o}`:""})`},Tn),q=class extends Map{constructor(e){super(),this.factory=e}get(e){let r=super.get(e);return r===void 0&&(r=this.factory(e,this),this.set(e,r)),r}};function Ae(e){return{kind:"word",value:e}}function vi(e,r){return{kind:"function",value:e,nodes:r}}function ki(e){return{kind:"separator",value:e}}function ne(e){let r="";for(let o of e)switch(o.kind){case"word":case"separator":r+=o.value;break;case"function":r+=o.value+"("+ne(o.nodes)+")"}return r}var Hr=92,bi=41,Jr=58,Zr=44,wi=34,Xr=61,eo=62,to=60,ro=10,yi=40,xi=39,$i=47,oo=32,no=9;function te(e){e=e.replaceAll(`\r
`,`
`);let r=[],o=[],t=null,n="",s;for(let i=0;i<e.length;i++){let a=e.charCodeAt(i);switch(a){case Hr:n+=e[i]+e[i+1],i++;break;case $i:{if(n.length>0){let d=Ae(n);t?t.nodes.push(d):r.push(d),n=""}let l=Ae(e[i]);t?t.nodes.push(l):r.push(l);break}case Jr:case Zr:case Xr:case eo:case to:case ro:case oo:case no:{if(n.length>0){let h=Ae(n);t?t.nodes.push(h):r.push(h),n=""}let l=i,d=i+1;for(;d<e.length&&(s=e.charCodeAt(d),!(s!==Jr&&s!==Zr&&s!==Xr&&s!==eo&&s!==to&&s!==ro&&s!==oo&&s!==no));d++);i=d-1;let p=ki(e.slice(l,d));t?t.nodes.push(p):r.push(p);break}case xi:case wi:{let l=i;for(let d=i+1;d<e.length;d++)if(s=e.charCodeAt(d),s===Hr)d+=1;else if(s===a){i=d;break}n+=e.slice(l,i+1);break}case yi:{let l=vi(n,[]);n="",t?t.nodes.push(l):r.push(l),o.push(l),t=l;break}case bi:{let l=o.pop();if(n.length>0){let d=Ae(n);l==null||l.nodes.push(d),n=""}t=o.length>0?o[o.length-1]:null;break}default:n+=String.fromCharCode(a)}}return n.length>0&&r.push(Ae(n)),r}var ur=(e=>(e[e.Continue=0]="Continue",e[e.Skip=1]="Skip",e[e.Stop=2]="Stop",e[e.Replace=3]="Replace",e[e.ReplaceSkip=4]="ReplaceSkip",e[e.ReplaceStop=5]="ReplaceStop",e))(ur||{}),M={Continue:{kind:0},Skip:{kind:1},Stop:{kind:2},Replace:e=>({kind:3,nodes:Array.isArray(e)?e:[e]}),ReplaceSkip:e=>({kind:4,nodes:Array.isArray(e)?e:[e]}),ReplaceStop:e=>({kind:5,nodes:Array.isArray(e)?e:[e]})};function R(e,r){typeof r=="function"?io(e,r):io(e,r.enter,r.exit)}function io(e,r=()=>M.Continue,o=()=>M.Continue){let t={value:[e,0,null],prev:null},n={parent:null,depth:0,path(){let s=[],i=t;for(;i;){let a=i.value[2];a&&s.push(a),i=i.prev}return s.reverse(),s}};for(;t!==null;){let s=t.value,i=s[0],a=s[1],l=s[2];if(a>=i.length){t=t.prev,--n.depth;continue}if(n.parent=l,a>=0){let g=i[a],b=r(g,n)??M.Continue;switch(b.kind){case 0:g.nodes&&g.nodes.length>0&&(n.depth+=1,t={value:[g.nodes,0,g],prev:t}),s[1]=~a;continue;case 2:return;case 1:s[1]=~a;continue;case 3:i.splice(a,1,...b.nodes);continue;case 5:i.splice(a,1,...b.nodes);return;case 4:i.splice(a,1,...b.nodes),s[1]+=b.nodes.length;continue;default:throw Error(`Invalid \`WalkAction.${ur[b.kind]??`Unknown(${b.kind})`}\` in enter.`)}}let d=~a,p=i[d],h=o(p,n)??M.Continue;switch(h.kind){case 0:s[1]=d+1;continue;case 2:return;case 3:i.splice(d,1,...h.nodes),s[1]=d+h.nodes.length;continue;case 5:i.splice(d,1,...h.nodes);return;case 4:i.splice(d,1,...h.nodes),s[1]=d+h.nodes.length;continue;default:throw Error(`Invalid \`WalkAction.${ur[h.kind]??`Unknown(${h.kind})`}\` in exit.`)}}}function ao(e){let r=[];return R(te(e),o=>{if(!(o.kind!=="function"||o.value!=="var"))return R(o.nodes,t=>{t.kind!=="word"||t.value[0]!=="-"||t.value[1]!=="-"||r.push(t.value)}),M.Skip}),r}var Si=64;function X(e,r=[]){return{kind:"rule",selector:e,nodes:r}}function J(e,r="",o=[]){return{kind:"at-rule",name:e,params:r,nodes:o}}function ce(e,r=[]){return e.charCodeAt(0)===Si?Et(e,r):X(e,r)}function c(e,r,o=!1){return{kind:"declaration",property:e,value:r,important:o}}function lo(e){return{kind:"comment",value:e}}function Be(e,r){return{kind:"context",context:e,nodes:r}}function G(e){return{kind:"at-root",nodes:e}}function ye(e){switch(e.kind){case"rule":return{kind:e.kind,selector:e.selector,nodes:e.nodes.map(ye),src:e.src,dst:e.dst};case"at-rule":return{kind:e.kind,name:e.name,params:e.params,nodes:e.nodes.map(ye),src:e.src,dst:e.dst};case"at-root":return{kind:e.kind,nodes:e.nodes.map(ye),src:e.src,dst:e.dst};case"context":return{kind:e.kind,context:{...e.context},nodes:e.nodes.map(ye),src:e.src,dst:e.dst};case"declaration":return{kind:e.kind,property:e.property,value:e.value,important:e.important,src:e.src,dst:e.dst};case"comment":return{kind:e.kind,value:e.value,src:e.src,dst:e.dst};default:throw Error(`Unknown node kind: ${e.kind}`)}}function cr(e){return{depth:e.depth,get context(){let r={};for(let o of e.path())o.kind==="context"&&Object.assign(r,o.context);return Object.defineProperty(this,"context",{value:r}),r},get parent(){let r=this.path().pop()??null;return Object.defineProperty(this,"parent",{value:r}),r},path(){return e.path().filter(r=>r.kind!=="context")}}}function lt(e,r,o=3){let t=[],n=new Set,s=new q(()=>new Set),i=new q(()=>new Set),a=new Set,l=new Set,d=[],p=[],h=new q(()=>new Set);function g(m,w,k={},A=0){if(m.kind==="declaration"){if(m.property==="--tw-sort"||m.value===void 0||m.value===null)return;if(k.theme&&m.property[0]==="-"&&m.property[1]==="-"){if(m.value==="initial"){m.value=void 0;return}k.keyframes||s.get(w).add(m)}if(m.value.includes("var("))if(k.theme&&m.property[0]==="-"&&m.property[1]==="-")for(let y of ao(m.value))h.get(y).add(m.property);else r.trackUsedVariables(m.value);if(m.property==="animation")for(let y of uo(m.value))l.add(y);o&2&&m.value.includes("color-mix(")&&!k.supportsColorMix&&!k.keyframes&&i.get(w).add(m),w.push(m)}else if(m.kind==="rule"){let y=[];for(let _ of m.nodes)g(_,y,k,A+1);let S={},x=new Set;for(let _ of y){if(_.kind!=="declaration")continue;let O=`${_.property}:${_.value}:${_.important}`;S[O]??(S[O]=[]),S[O].push(_)}for(let _ in S)for(let O=0;O<S[_].length-1;++O)x.add(S[_][O]);if(x.size>0&&(y=y.filter(_=>!x.has(_))),y.length===0)return;m.selector==="&"?w.push(...y):w.push({...m,nodes:y})}else if(m.kind==="at-rule"&&m.name==="@property"&&A===0){if(n.has(m.params))return;if(o&1){let S=m.params,x=null,_=!1;for(let E of m.nodes)E.kind==="declaration"&&(E.property==="initial-value"?x=E.value:E.property==="inherits"&&(_=E.value==="true"));let O=c(S,x??"initial");O.src=m.src,_?d.push(O):p.push(O)}n.add(m.params);let y={...m,nodes:[]};for(let S of m.nodes)g(S,y.nodes,k,A+1);w.push(y)}else if(m.kind==="at-rule"){m.name==="@keyframes"?k={...k,keyframes:!0}:m.name==="@supports"&&m.params.includes("color-mix(")&&(k={...k,supportsColorMix:!0});let y={...m,nodes:[]};for(let S of m.nodes)g(S,y.nodes,k,A+1);m.name==="@keyframes"&&k.theme&&a.add(y),(y.nodes.length>0||y.name==="@layer"||y.name==="@charset"||y.name==="@custom-media"||y.name==="@namespace"||y.name==="@import")&&w.push(y)}else if(m.kind==="at-root")for(let y of m.nodes){let S=[];g(y,S,k,0);for(let x of S)t.push(x)}else if(m.kind==="context"){if(m.context.reference)return;for(let y of m.nodes)g(y,w,{...k,...m.context},A)}else m.kind==="comment"&&w.push(m)}let b=[];for(let m of e)g(m,b,{},0);e:for(let[m,w]of s)for(let k of w){if(so(k.property,r.theme,h)){if(k.property.startsWith(r.theme.prefixKey("--animate-")))for(let y of uo(k.value))l.add(y);continue}let A=m.indexOf(k);if(m.splice(A,1),m.length===0){let y=Ti(b,S=>S.kind==="rule"&&S.nodes===m);if(!y||y.length===0)continue e;y.unshift({kind:"at-root",nodes:b});do{let S=y.pop();if(!S)break;let x=y[y.length-1];if(!x||x.kind!=="at-root"&&x.kind!=="at-rule")break;let _=x.nodes.indexOf(S);if(_===-1)break;x.nodes.splice(_,1)}while(!0);continue e}}for(let m of a)if(!l.has(m.params)){let w=t.indexOf(m);t.splice(w,1)}if(b=b.concat(t),o&2)for(let[m,w]of i)for(let k of w){let A=m.indexOf(k);if(A===-1||k.value==null)continue;let y=te(k.value),S=!1;if(R(y,O=>{if(O.kind!=="function"||O.value!=="color-mix")return;let E=!1,u=!1;if(R(O.nodes,f=>{if(f.kind=="word"&&f.value.toLowerCase()==="currentcolor"){u=!0,S=!0;return}let v=f,T=null,$=new Set;do{if(v.kind!=="function"||v.value!=="var")return;let C=v.nodes[0];if(!C||C.kind!=="word")return;let j=C.value;if($.has(j)){E=!0;return}if($.add(j),S=!0,T=r.theme.resolveValue(null,[C.value]),!T){E=!0;return}if(T.toLowerCase()==="currentcolor"){u=!0;return}v=T.startsWith("var(")?te(T)[0]:null}while(v);return M.Replace({kind:"word",value:T})}),E||u){let f=O.nodes.findIndex(T=>T.kind==="separator"&&T.value.trim().includes(","));if(f===-1)return;let v=O.nodes.length>f?O.nodes[f+1]:null;return v?M.Replace(v):void 0}else if(S){let f=O.nodes[2];f.kind==="word"&&(f.value==="oklab"||f.value==="oklch"||f.value==="lab"||f.value==="lch")&&(f.value="srgb")}}),!S)continue;let x={...k,value:ne(y)},_=ce("@supports (color: color-mix(in lab, red, red))",[k]);_.src=k.src,m.splice(A,1,x,_)}if(o&1){let m=[];if(d.length>0){let w=ce(":root, :host",d);w.src=d[0].src,m.push(w)}if(p.length>0){let w=ce("*, ::before, ::after, ::backdrop",p);w.src=p[0].src,m.push(w)}if(m.length>0){let w=b.findIndex(y=>!(y.kind==="comment"||y.kind==="at-rule"&&(y.name==="@charset"||y.name==="@import"))),k=J("@layer","properties",[]);k.src=m[0].src,b.splice(w<0?b.length:w,0,k);let A=ce("@layer properties",[J("@supports","((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b))))",m)]);A.src=m[0].src,A.nodes[0].src=m[0].src,b.push(A)}}return b}function _e(e,r){let o=0,t={file:null,code:""};function n(i,a=0){var p;let l="",d="  ".repeat(a);if(i.kind==="declaration"){if(l+=`${d}${i.property}: ${i.value}${i.important?" !important":""};
`,r){o+=d.length;let h=o;o+=i.property.length,o+=2,o+=((p=i.value)==null?void 0:p.length)??0,i.important&&(o+=11);let g=o;o+=2,i.dst=[t,h,g]}}else if(i.kind==="rule"){if(l+=`${d}${i.selector} {
`,r){o+=d.length;let h=o;o+=i.selector.length,o+=1,i.dst=[t,h,o],o+=2}for(let h of i.nodes)l+=n(h,a+1);l+=`${d}}
`,r&&(o+=d.length,o+=2)}else if(i.kind==="at-rule"){if(i.nodes.length===0){let h=`${d}${i.name} ${i.params};
`;if(r){o+=d.length;let g=o;o+=i.name.length,o+=1,o+=i.params.length;let b=o;o+=2,i.dst=[t,g,b]}return h}if(l+=`${d}${i.name}${i.params?` ${i.params} `:" "}{
`,r){o+=d.length;let h=o;o+=i.name.length,i.params&&(o+=1,o+=i.params.length),o+=1,i.dst=[t,h,o],o+=2}for(let h of i.nodes)l+=n(h,a+1);l+=`${d}}
`,r&&(o+=d.length,o+=2)}else if(i.kind==="comment"){if(l+=`${d}/*${i.value}*/
`,r){o+=d.length;let h=o;o+=2+i.value.length+2,i.dst=[t,h,o],o+=1}}else if(i.kind==="context"||i.kind==="at-root")return"";return l}let s="";for(let i of e)s+=n(i,0);return t.code=s,s}function Ti(e,r){let o=[];return R(e,(t,n)=>{if(r(t))return o=n.path(),o.push(t),M.Stop}),o}function so(e,r,o,t=new Set){if(t.has(e)||(t.add(e),r.getOptions(e)&24))return!0;{let n=o.get(e)??[];for(let s of n)if(so(s,r,o,t))return!0}return!1}function uo(e){return e.split(/[\s,]+/)}function Ye(e){if(e.indexOf("(")===-1)return He(e);let r=te(e);return dr(r),e=ne(r),e=Kn(e),e}function He(e,r=!1){let o="";for(let t=0;t<e.length;t++){let n=e[t];n==="\\"&&e[t+1]==="_"?(o+="_",t+=1):n==="_"&&!r?o+=" ":o+=n}return o}function dr(e){for(let r of e)switch(r.kind){case"function":if(r.value==="url"||r.value.endsWith("_url")){r.value=He(r.value);break}if(r.value==="var"||r.value.endsWith("_var")||r.value==="theme"||r.value.endsWith("_theme")){r.value=He(r.value);for(let o=0;o<r.nodes.length;o++){if(o==0&&r.nodes[o].kind==="word"){r.nodes[o].value=He(r.nodes[o].value,!0);continue}dr([r.nodes[o]])}break}r.value=He(r.value),dr(r.nodes);break;case"separator":case"word":r.value=He(r.value);break;default:Ai(r)}}function Ai(e){throw Error(`Unexpected value: ${e}`)}var fr=new Uint8Array(256);function Ve(e){let r=0,o=e.length;for(let t=0;t<o;t++){let n=e.charCodeAt(t);switch(n){case 92:t+=1;break;case 39:case 34:for(;++t<o;){let s=e.charCodeAt(t);if(s===92){t+=1;continue}if(s===n)break}break;case 40:fr[r]=41,r++;break;case 91:fr[r]=93,r++;break;case 123:break;case 93:case 125:case 41:if(r===0)return!1;r>0&&n===fr[r-1]&&r--;break;case 59:if(r===0)return!1;break}}return!0}var Oi=58,co=45,fo=97,po=122,pr=/^[a-zA-Z0-9_.%-]+$/;function Ei(e){switch(e.kind){case"arbitrary":return{kind:e.kind,property:e.property,value:e.value,modifier:e.modifier?{kind:e.modifier.kind,value:e.modifier.value}:null,variants:e.variants.map(st),important:e.important,raw:e.raw};case"static":return{kind:e.kind,root:e.root,variants:e.variants.map(st),important:e.important,raw:e.raw};case"functional":return{kind:e.kind,root:e.root,value:e.value?e.value.kind==="arbitrary"?{kind:e.value.kind,dataType:e.value.dataType,value:e.value.value}:{kind:e.value.kind,value:e.value.value,fraction:e.value.fraction}:null,modifier:e.modifier?{kind:e.modifier.kind,value:e.modifier.value}:null,variants:e.variants.map(st),important:e.important,raw:e.raw};default:throw Error("Unknown candidate kind")}}function st(e){switch(e.kind){case"arbitrary":return{kind:e.kind,selector:e.selector,relative:e.relative};case"static":return{kind:e.kind,root:e.root};case"functional":return{kind:e.kind,root:e.root,value:e.value?{kind:e.value.kind,value:e.value.value}:null,modifier:e.modifier?{kind:e.modifier.kind,value:e.modifier.value}:null};case"compound":return{kind:e.kind,root:e.root,variant:st(e.variant),modifier:e.modifier?{kind:e.modifier.kind,value:e.modifier.value}:null};default:throw Error("Unknown variant kind")}}function*_i(e,r){var h;let o=W(e,":");if(r.theme.prefix){if(o.length===1||o[0]!==r.theme.prefix)return null;o.shift()}let t=o.pop(),n=[];for(let g=o.length-1;g>=0;--g){let b=r.parseVariant(o[g]);if(b===null)return;n.push(b)}let s=!1;t[t.length-1]==="!"?(s=!0,t=t.slice(0,-1)):t[0]==="!"&&(s=!0,t=t.slice(1)),r.utilities.has(t,"static")&&!t.includes("[")&&(yield{kind:"static",root:t,variants:n,important:s,raw:e});let[i,a=null,l]=W(t,"/");if(l)return;let d=a===null?null:hr(a);if(a!==null&&d===null)return;if(i[0]==="["){if(i[i.length-1]!=="]")return;let g=i.charCodeAt(1);if(g!==co&&!(g>=fo&&g<=po))return;i=i.slice(1,-1);let b=i.indexOf(":");if(b===-1||b===0||b===i.length-1)return;let m=i.slice(0,b),w=Ye(i.slice(b+1));if(!Ve(w))return;yield{kind:"arbitrary",property:m,value:w,modifier:d,variants:n,important:s,raw:e};return}let p;if(i[i.length-1]==="]"){let g=i.indexOf("-[");if(g===-1)return;let b=i.slice(0,g);if(!r.utilities.has(b,"functional"))return;p=[[b,i.slice(g+1)]]}else if(i[i.length-1]===")"){let g=i.indexOf("-(");if(g===-1)return;let b=i.slice(0,g);if(!r.utilities.has(b,"functional"))return;let m=i.slice(g+2,-1),w=W(m,":"),k=null;if(w.length===2&&(k=w[0],m=w[1]),m[0]!=="-"||m[1]!=="-"||!Ve(m))return;p=[[b,k===null?`[var(${m})]`:`[${k}:var(${m})]`]]}else p=ho(i,g=>r.utilities.has(g,"functional"));for(let[g,b]of p){let m={kind:"functional",root:g,modifier:d,value:null,variants:n,important:s,raw:e};if(b===null){yield m;continue}{let w=b.indexOf("[");if(w!==-1){if(b[b.length-1]!=="]")return;let k=Ye(b.slice(w+1,-1));if(!Ve(k))continue;let A=null;for(let y=0;y<k.length;y++){let S=k.charCodeAt(y);if(S===Oi){A=k.slice(0,y),k=k.slice(y+1);break}if(!(S===co||S>=fo&&S<=po))break}if(k.length===0||k.trim().length===0||A==="")continue;m.value={kind:"arbitrary",dataType:A||null,value:k}}else{let k=a===null||((h=m.modifier)==null?void 0:h.kind)==="arbitrary"?null:`${b}/${a}`;if(!pr.test(b))continue;m.value={kind:"named",value:b,fraction:k}}}yield m}}function hr(e){if(e[0]==="["&&e[e.length-1]==="]"){let r=Ye(e.slice(1,-1));return!Ve(r)||r.length===0||r.trim().length===0?null:{kind:"arbitrary",value:r}}return e[0]==="("&&e[e.length-1]===")"?(e=e.slice(1,-1),e[0]!=="-"||e[1]!=="-"||!Ve(e)?null:(e=`var(${e})`,{kind:"arbitrary",value:Ye(e)})):pr.test(e)?{kind:"named",value:e}:null}function Ci(e,r){if(e[0]==="["&&e[e.length-1]==="]"){if(e[1]==="@"&&e.includes("&"))return null;let o=Ye(e.slice(1,-1));if(!Ve(o)||o.length===0||o.trim().length===0)return null;let t=o[0]===">"||o[0]==="+"||o[0]==="~";return!t&&o[0]!=="@"&&!o.includes("&")&&(o=`&:is(${o})`),{kind:"arbitrary",selector:o,relative:t}}{let[o,t=null,n]=W(e,"/");if(n)return null;let s=ho(o,i=>r.variants.has(i));for(let[i,a]of s)switch(r.variants.kind(i)){case"static":return a!==null||t!==null?null:{kind:"static",root:i};case"functional":{let l=t===null?null:hr(t);if(t!==null&&l===null)return null;if(a===null)return{kind:"functional",root:i,modifier:l,value:null};if(a[a.length-1]==="]"){if(a[0]!=="[")continue;let d=Ye(a.slice(1,-1));return!Ve(d)||d.length===0||d.trim().length===0?null:{kind:"functional",root:i,modifier:l,value:{kind:"arbitrary",value:d}}}if(a[a.length-1]===")"){if(a[0]!=="(")continue;let d=Ye(a.slice(1,-1));return!Ve(d)||d.length===0||d.trim().length===0||d[0]!=="-"||d[1]!=="-"?null:{kind:"functional",root:i,modifier:l,value:{kind:"arbitrary",value:`var(${d})`}}}if(!pr.test(a))continue;return{kind:"functional",root:i,modifier:l,value:{kind:"named",value:a}}}case"compound":{if(a===null)return null;t&&(i==="not"||i==="has"||i==="in")&&(a=`${a}/${t}`,t=null);let l=r.parseVariant(a);if(l===null||!r.variants.compoundsWith(i,l))return null;let d=t===null?null:hr(t);return t!==null&&d===null?null:{kind:"compound",root:i,modifier:d,variant:l}}}}return null}function*ho(e,r){r(e)&&(yield[e,null]);let o=e.lastIndexOf("-");for(;o>0;){let t=e.slice(0,o);if(r(t)){let n=[t,e.slice(o+1)];if(n[1]===""||n[0]==="@"&&r("@")&&e[o]==="-")break;yield n}o=e.lastIndexOf("-",o-1)}e[0]==="@"&&r("@")&&(yield["@",e.slice(1)])}function zi(e,r){let o=[];for(let n of r.variants)o.unshift(mr(n));e.theme.prefix&&o.unshift(e.theme.prefix);let t="";if(r.kind==="static"&&(t+=r.root),r.kind==="functional"&&(t+=r.root,r.value))if(r.value.kind==="arbitrary"){if(r.value!==null){let n=vr(r.value.value),s=n?r.value.value.slice(4,-1):r.value.value,[i,a]=n?["(",")"]:["[","]"];r.value.dataType?t+=`-${i}${r.value.dataType}:${Qe(s)}${a}`:t+=`-${i}${Qe(s)}${a}`}}else r.value.kind==="named"&&(t+=`-${r.value.value}`);return r.kind==="arbitrary"&&(t+=`[${r.property}:${Qe(r.value)}]`),(r.kind==="arbitrary"||r.kind==="functional")&&(t+=Ct(r.modifier)),r.important&&(t+="!"),o.push(t),o.join(":")}function Ct(e){if(e===null)return"";let r=vr(e.value),o=r?e.value.slice(4,-1):e.value,[t,n]=r?["(",")"]:["[","]"];return e.kind==="arbitrary"?`/${t}${Qe(o)}${n}`:e.kind==="named"?`/${e.value}`:""}function mr(e){if(e.kind==="static")return e.root;if(e.kind==="arbitrary")return`[${Qe(Pi(e.selector))}]`;let r="";if(e.kind==="functional"){r+=e.root;let o=e.root!=="@";if(e.value)if(e.value.kind==="arbitrary"){let t=vr(e.value.value),n=t?e.value.value.slice(4,-1):e.value.value,[s,i]=t?["(",")"]:["[","]"];r+=`${o?"-":""}${s}${Qe(n)}${i}`}else e.value.kind==="named"&&(r+=`${o?"-":""}${e.value.value}`)}return e.kind==="compound"&&(r+=e.root,r+="-",r+=mr(e.variant)),(e.kind==="functional"||e.kind==="compound")&&(r+=Ct(e.modifier)),r}var ji=new q(e=>{let r=te(e),o=new Set;return R(r,(t,n)=>{let s=n.parent===null?r:n.parent.nodes??[];if(t.kind==="word"&&(t.value==="+"||t.value==="-"||t.value==="*"||t.value==="/")){let i=s.indexOf(t)??-1;if(i===-1)return;let a=s[i-1];if((a==null?void 0:a.kind)!=="separator"||a.value!==" ")return;let l=s[i+1];if((l==null?void 0:l.kind)!=="separator"||l.value!==" ")return;o.add(a),o.add(l)}else t.kind==="separator"&&t.value.length>0&&t.value.trim()===""?(s[0]===t||s[s.length-1]===t)&&o.add(t):t.kind==="separator"&&t.value.trim()===","&&(t.value=",")}),o.size>0&&R(r,t=>{if(o.has(t))return o.delete(t),M.ReplaceSkip([])}),gr(r),ne(r)});function Qe(e){return ji.get(e)}var Ni=new q(e=>{let r=te(e);return r.length===3&&r[0].kind==="word"&&r[0].value==="&"&&r[1].kind==="separator"&&r[1].value===":"&&r[2].kind==="function"&&r[2].value==="is"?ne(r[2].nodes):e});function Pi(e){return Ni.get(e)}function gr(e){for(let r of e)switch(r.kind){case"function":if(r.value==="url"||r.value.endsWith("_url")){r.value=ut(r.value);break}if(r.value==="var"||r.value.endsWith("_var")||r.value==="theme"||r.value.endsWith("_theme")){r.value=ut(r.value);for(let o=0;o<r.nodes.length;o++)gr([r.nodes[o]]);break}r.value=ut(r.value),gr(r.nodes);break;case"separator":r.value=ut(r.value);break;case"word":(r.value[0]!=="-"||r.value[1]!=="-")&&(r.value=ut(r.value));break;default:Fi(r)}}var Ii=new q(e=>{let r=te(e);return r.length===1&&r[0].kind==="function"&&r[0].value==="var"});function vr(e){return Ii.get(e)}function Fi(e){throw Error(`Unexpected value: ${e}`)}function ut(e){return e.replaceAll("_",String.raw`\_`).replaceAll(" ","_")}function zt(e,r,o){if(e===r)return 0;let t=e.indexOf("("),n=r.indexOf("("),s=t===-1?e.replace(/[\d.]+/g,""):e.slice(0,t),i=n===-1?r.replace(/[\d.]+/g,""):r.slice(0,n),a=(s===i?0:s<i?-1:1)||(o==="asc"?parseInt(e)-parseInt(r):parseInt(r)-parseInt(e));return Number.isNaN(a)?e<r?-1:1:a}var Li=new Set(["inset","inherit","initial","revert","unset"]),mo=/^-?(\d+|\.\d+)(.*?)$/g;function jt(e,r){return W(e,",").map(o=>{o=o.trim();let t=W(o," ").filter(l=>l.trim()!==""),n=null,s=null,i=null;for(let l of t)Li.has(l)||(mo.test(l)?(s===null?s=l:i===null&&(i=l),mo.lastIndex=0):n===null&&(n=l));if(s===null||i===null)return o;let a=r(n??"currentcolor");return n===null?`${o} ${a}`:o.replace(n,a)}).join(", ")}var Nt="0,0.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,11,12,14,16,20,24,28,32,36,40,44,48,52,56,60,64,72,80,96".split(","),Di=class{constructor(){Ee(this,"utilities",new q(()=>[]));Ee(this,"completions",new Map)}static(e,r){this.utilities.get(e).push({kind:"static",compileFn:r})}functional(e,r,o){this.utilities.get(e).push({kind:"functional",compileFn:r,options:o})}has(e,r){return this.utilities.has(e)&&this.utilities.get(e).some(o=>o.kind===r)}get(e){return this.utilities.has(e)?this.utilities.get(e):[]}getCompletions(e){var r,o;return this.has(e,"static")?((r=this.completions.get(e))==null?void 0:r())??[{supportsNegative:!1,values:[],modifiers:[]}]:((o=this.completions.get(e))==null?void 0:o())??[]}suggest(e,r){let o=this.completions.get(e);o?this.completions.set(e,()=>[...o==null?void 0:o(),...r==null?void 0:r()]):this.completions.set(e,r)}keys(e){let r=[];for(let[o,t]of this.utilities.entries())for(let n of t)if(n.kind===e){r.push(o);break}return r}};function P(e,r,o){return J("@property",e,[c("syntax",o?`"${o}"`:'"*"'),c("inherits","false"),...r?[c("initial-value",r)]:[]])}function de(e,r){if(r===null)return e;let o=Number(r);return Number.isNaN(o)||(r=`${o*100}%`),r==="100%"?e:`color-mix(in oklab, ${e} ${r}, transparent)`}function go(e,r){let o=Number(r);return Number.isNaN(o)||(r=`${o*100}%`),`oklab(from ${e} l a b / ${r})`}function se(e,r,o){if(!r)return e;if(r.kind==="arbitrary")return de(e,r.value);let t=o.resolve(r.value,["--opacity"]);return t?de(e,t):nr(r.value)?de(e,`${r.value}%`):null}function fe(e,r,o){let t=null;switch(e.value.value){case"inherit":t="inherit";break;case"transparent":t="transparent";break;case"current":t="currentcolor";break;default:t=r.resolve(e.value.value,o);break}return t?se(t,e.modifier,r):null}var vo=/(\d+)_(\d+)/g;function Mi(e){let r=new Di;function o(u,f){function*v($){for(let C of e.keysInNamespaces($))yield C.replace(vo,(j,z,F)=>`${z}.${F}`)}let T="1/2.1/3.2/3.1/4.2/4.3/4.1/5.2/5.3/5.4/5.1/6.2/6.3/6.4/6.5/6.1/12.2/12.3/12.4/12.5/12.6/12.7/12.8/12.9/12.10/12.11/12".split(".");r.suggest(u,()=>{let $=[];for(let C of f()){if(typeof C=="string"){$.push({values:[C],modifiers:[]});continue}let j=[...C.values??[],...v(C.valueThemeKeys??[])],z=[...C.modifiers??[],...v(C.modifierThemeKeys??[])];C.supportsFractions&&j.push(...T),C.hasDefaultValue&&j.unshift(null),$.push({supportsNegative:C.supportsNegative,values:j,modifiers:z})}return $})}function t(u,f){r.static(u,()=>f.map(v=>typeof v=="function"?v():c(v[0],v[1])))}function n(u,f){function v({negative:T}){return $=>{let C=null,j=null;if($.value)if($.value.kind==="arbitrary"){if($.modifier)return;C=$.value.value,j=$.value.dataType}else{if(C=e.resolve($.value.fraction??$.value.value,f.themeKeys??[]),C===null&&f.supportsFractions&&$.value.fraction){let[z,F]=W($.value.fraction,"/");if(!D(z)||!D(F))return;C=`calc(${z} / ${F} * 100%)`}if(C===null&&T&&f.handleNegativeBareValue){if(C=f.handleNegativeBareValue($.value),!(C!=null&&C.includes("/"))&&$.modifier)return;if(C!==null)return f.handle(C,null)}if(C===null&&f.handleBareValue&&(C=f.handleBareValue($.value),!(C!=null&&C.includes("/"))&&$.modifier))return;if(C===null&&!T&&f.staticValues&&!$.modifier){let z=f.staticValues[$.value.value];if(z)return z.map(ye)}}else{if($.modifier)return;C=f.defaultValue===void 0?e.resolve(null,f.themeKeys??[]):f.defaultValue}if(C!==null)return f.handle(T?`calc(${C} * -1)`:C,j)}}if(f.supportsNegative&&r.functional(`-${u}`,v({negative:!0})),r.functional(u,v({negative:!1})),o(u,()=>[{supportsNegative:f.supportsNegative,valueThemeKeys:f.themeKeys??[],hasDefaultValue:f.defaultValue!==void 0&&f.defaultValue!==null,supportsFractions:f.supportsFractions}]),f.staticValues&&Object.keys(f.staticValues).length>0){let T=Object.keys(f.staticValues);o(u,()=>[{values:T}])}}function s(u,f){r.functional(u,v=>{if(!v.value)return;let T=null;if(v.value.kind==="arbitrary"?(T=v.value.value,T=se(T,v.modifier,e)):T=fe(v,e,f.themeKeys),T!==null)return f.handle(T)}),o(u,()=>[{values:["current","inherit","transparent"],valueThemeKeys:f.themeKeys,modifiers:Array.from({length:21},(v,T)=>`${T*5}`)}])}function i(u,f,v,{supportsNegative:T=!1,supportsFractions:$=!1,staticValues:C}={}){T&&r.static(`-${u}-px`,()=>v("-1px")),r.static(`${u}-px`,()=>v("1px")),n(u,{themeKeys:f,supportsFractions:$,supportsNegative:T,defaultValue:null,handleBareValue:({value:j})=>{let z=e.resolve(null,["--spacing"]);return!z||!pe(j)?null:`calc(${z} * ${j})`},handleNegativeBareValue:({value:j})=>{let z=e.resolve(null,["--spacing"]);return!z||!pe(j)?null:`calc(${z} * -${j})`},handle:v,staticValues:C}),o(u,()=>[{values:e.get(["--spacing"])?Nt:[],supportsNegative:T,supportsFractions:$,valueThemeKeys:f}])}t("sr-only",[["position","absolute"],["width","1px"],["height","1px"],["padding","0"],["margin","-1px"],["overflow","hidden"],["clip-path","inset(50%)"],["white-space","nowrap"],["border-width","0"]]),t("not-sr-only",[["position","static"],["width","auto"],["height","auto"],["padding","0"],["margin","0"],["overflow","visible"],["clip-path","none"],["white-space","normal"]]),t("pointer-events-none",[["pointer-events","none"]]),t("pointer-events-auto",[["pointer-events","auto"]]),t("visible",[["visibility","visible"]]),t("invisible",[["visibility","hidden"]]),t("collapse",[["visibility","collapse"]]),t("static",[["position","static"]]),t("fixed",[["position","fixed"]]),t("absolute",[["position","absolute"]]),t("relative",[["position","relative"]]),t("sticky",[["position","sticky"]]);for(let[u,f]of[["inset","inset"],["inset-x","inset-inline"],["inset-y","inset-block"],["inset-s","inset-inline-start"],["inset-e","inset-inline-end"],["inset-bs","inset-block-start"],["inset-be","inset-block-end"],["top","top"],["right","right"],["bottom","bottom"],["left","left"]])t(`${u}-auto`,[[f,"auto"]]),t(`${u}-full`,[[f,"100%"]]),t(`-${u}-full`,[[f,"-100%"]]),i(u,["--inset","--spacing"],v=>[c(f,v)],{supportsNegative:!0,supportsFractions:!0});t("isolate",[["isolation","isolate"]]),t("isolation-auto",[["isolation","auto"]]),n("z",{supportsNegative:!0,handleBareValue:({value:u})=>D(u)?u:null,themeKeys:["--z-index"],handle:u=>[c("z-index",u)],staticValues:{auto:[c("z-index","auto")]}}),o("z",()=>[{supportsNegative:!0,values:["0","10","20","30","40","50"],valueThemeKeys:["--z-index"]}]),n("order",{supportsNegative:!0,handleBareValue:({value:u})=>D(u)?u:null,themeKeys:["--order"],handle:u=>[c("order",u)],staticValues:{first:[c("order","-9999")],last:[c("order","9999")]}}),o("order",()=>[{supportsNegative:!0,values:Array.from({length:12},(u,f)=>`${f+1}`),valueThemeKeys:["--order"]}]),n("col",{supportsNegative:!0,handleBareValue:({value:u})=>D(u)?u:null,themeKeys:["--grid-column"],handle:u=>[c("grid-column",u)],staticValues:{auto:[c("grid-column","auto")]}}),n("col-span",{handleBareValue:({value:u})=>D(u)?u:null,handle:u=>[c("grid-column",`span ${u} / span ${u}`)],staticValues:{full:[c("grid-column","1 / -1")]}}),n("col-start",{supportsNegative:!0,handleBareValue:({value:u})=>D(u)?u:null,themeKeys:["--grid-column-start"],handle:u=>[c("grid-column-start",u)],staticValues:{auto:[c("grid-column-start","auto")]}}),n("col-end",{supportsNegative:!0,handleBareValue:({value:u})=>D(u)?u:null,themeKeys:["--grid-column-end"],handle:u=>[c("grid-column-end",u)],staticValues:{auto:[c("grid-column-end","auto")]}}),o("col-span",()=>[{values:Array.from({length:12},(u,f)=>`${f+1}`),valueThemeKeys:[]}]),o("col-start",()=>[{supportsNegative:!0,values:Array.from({length:13},(u,f)=>`${f+1}`),valueThemeKeys:["--grid-column-start"]}]),o("col-end",()=>[{supportsNegative:!0,values:Array.from({length:13},(u,f)=>`${f+1}`),valueThemeKeys:["--grid-column-end"]}]),n("row",{supportsNegative:!0,handleBareValue:({value:u})=>D(u)?u:null,themeKeys:["--grid-row"],handle:u=>[c("grid-row",u)],staticValues:{auto:[c("grid-row","auto")]}}),n("row-span",{themeKeys:[],handleBareValue:({value:u})=>D(u)?u:null,handle:u=>[c("grid-row",`span ${u} / span ${u}`)],staticValues:{full:[c("grid-row","1 / -1")]}}),n("row-start",{supportsNegative:!0,handleBareValue:({value:u})=>D(u)?u:null,themeKeys:["--grid-row-start"],handle:u=>[c("grid-row-start",u)],staticValues:{auto:[c("grid-row-start","auto")]}}),n("row-end",{supportsNegative:!0,handleBareValue:({value:u})=>D(u)?u:null,themeKeys:["--grid-row-end"],handle:u=>[c("grid-row-end",u)],staticValues:{auto:[c("grid-row-end","auto")]}}),o("row-span",()=>[{values:Array.from({length:12},(u,f)=>`${f+1}`),valueThemeKeys:[]}]),o("row-start",()=>[{supportsNegative:!0,values:Array.from({length:13},(u,f)=>`${f+1}`),valueThemeKeys:["--grid-row-start"]}]),o("row-end",()=>[{supportsNegative:!0,values:Array.from({length:13},(u,f)=>`${f+1}`),valueThemeKeys:["--grid-row-end"]}]),t("float-start",[["float","inline-start"]]),t("float-end",[["float","inline-end"]]),t("float-right",[["float","right"]]),t("float-left",[["float","left"]]),t("float-none",[["float","none"]]),t("clear-start",[["clear","inline-start"]]),t("clear-end",[["clear","inline-end"]]),t("clear-right",[["clear","right"]]),t("clear-left",[["clear","left"]]),t("clear-both",[["clear","both"]]),t("clear-none",[["clear","none"]]);for(let[u,f]of[["m","margin"],["mx","margin-inline"],["my","margin-block"],["ms","margin-inline-start"],["me","margin-inline-end"],["mbs","margin-block-start"],["mbe","margin-block-end"],["mt","margin-top"],["mr","margin-right"],["mb","margin-bottom"],["ml","margin-left"]])t(`${u}-auto`,[[f,"auto"]]),i(u,["--margin","--spacing"],v=>[c(f,v)],{supportsNegative:!0});t("box-border",[["box-sizing","border-box"]]),t("box-content",[["box-sizing","content-box"]]),n("line-clamp",{themeKeys:["--line-clamp"],handleBareValue:({value:u})=>D(u)?u:null,handle:u=>[c("overflow","hidden"),c("display","-webkit-box"),c("-webkit-box-orient","vertical"),c("-webkit-line-clamp",u)],staticValues:{none:[c("overflow","visible"),c("display","block"),c("-webkit-box-orient","horizontal"),c("-webkit-line-clamp","unset")]}}),o("line-clamp",()=>[{values:["1","2","3","4","5","6"],valueThemeKeys:["--line-clamp"]}]),t("block",[["display","block"]]),t("inline-block",[["display","inline-block"]]),t("inline",[["display","inline"]]),t("hidden",[["display","none"]]),t("inline-flex",[["display","inline-flex"]]),t("table",[["display","table"]]),t("inline-table",[["display","inline-table"]]),t("table-caption",[["display","table-caption"]]),t("table-cell",[["display","table-cell"]]),t("table-column",[["display","table-column"]]),t("table-column-group",[["display","table-column-group"]]),t("table-footer-group",[["display","table-footer-group"]]),t("table-header-group",[["display","table-header-group"]]),t("table-row-group",[["display","table-row-group"]]),t("table-row",[["display","table-row"]]),t("flow-root",[["display","flow-root"]]),t("flex",[["display","flex"]]),t("grid",[["display","grid"]]),t("inline-grid",[["display","inline-grid"]]),t("contents",[["display","contents"]]),t("list-item",[["display","list-item"]]),t("field-sizing-content",[["field-sizing","content"]]),t("field-sizing-fixed",[["field-sizing","fixed"]]),n("aspect",{themeKeys:["--aspect"],handleBareValue:({fraction:u})=>{if(u===null)return null;let[f,v]=W(u,"/");return!pe(f)||!pe(v)?null:u},handle:u=>[c("aspect-ratio",u)],staticValues:{auto:[c("aspect-ratio","auto")],square:[c("aspect-ratio","1 / 1")]}});for(let[u,f]of[["full","100%"],["svw","100svw"],["lvw","100lvw"],["dvw","100dvw"],["svh","100svh"],["lvh","100lvh"],["dvh","100dvh"],["min","min-content"],["max","max-content"],["fit","fit-content"]])t(`size-${u}`,[["--tw-sort","size"],["width",f],["height",f]]),t(`w-${u}`,[["width",f]]),t(`h-${u}`,[["height",f]]),t(`min-w-${u}`,[["min-width",f]]),t(`min-h-${u}`,[["min-height",f]]),t(`max-w-${u}`,[["max-width",f]]),t(`max-h-${u}`,[["max-height",f]]);t("size-auto",[["--tw-sort","size"],["width","auto"],["height","auto"]]),t("w-auto",[["width","auto"]]),t("h-auto",[["height","auto"]]),t("min-w-auto",[["min-width","auto"]]),t("min-h-auto",[["min-height","auto"]]),t("h-lh",[["height","1lh"]]),t("min-h-lh",[["min-height","1lh"]]),t("max-h-lh",[["max-height","1lh"]]),t("w-screen",[["width","100vw"]]),t("min-w-screen",[["min-width","100vw"]]),t("max-w-screen",[["max-width","100vw"]]),t("h-screen",[["height","100vh"]]),t("min-h-screen",[["min-height","100vh"]]),t("max-h-screen",[["max-height","100vh"]]),t("max-w-none",[["max-width","none"]]),t("max-h-none",[["max-height","none"]]),i("size",["--size","--spacing"],u=>[c("--tw-sort","size"),c("width",u),c("height",u)],{supportsFractions:!0});for(let[u,f,v]of[["w",["--width","--spacing","--container"],"width"],["min-w",["--min-width","--spacing","--container"],"min-width"],["max-w",["--max-width","--spacing","--container"],"max-width"],["h",["--height","--spacing"],"height"],["min-h",["--min-height","--height","--spacing"],"min-height"],["max-h",["--max-height","--height","--spacing"],"max-height"]])i(u,f,T=>[c(v,T)],{supportsFractions:!0});for(let[u,f]of[["full","100%"],["min","min-content"],["max","max-content"],["fit","fit-content"]])t(`inline-${u}`,[["inline-size",f]]),t(`block-${u}`,[["block-size",f]]),t(`min-inline-${u}`,[["min-inline-size",f]]),t(`min-block-${u}`,[["min-block-size",f]]),t(`max-inline-${u}`,[["max-inline-size",f]]),t(`max-block-${u}`,[["max-block-size",f]]);for(let[u,f]of[["svw","100svw"],["lvw","100lvw"],["dvw","100dvw"]])t(`inline-${u}`,[["inline-size",f]]),t(`min-inline-${u}`,[["min-inline-size",f]]),t(`max-inline-${u}`,[["max-inline-size",f]]);for(let[u,f]of[["svh","100svh"],["lvh","100lvh"],["dvh","100dvh"]])t(`block-${u}`,[["block-size",f]]),t(`min-block-${u}`,[["min-block-size",f]]),t(`max-block-${u}`,[["max-block-size",f]]);t("inline-auto",[["inline-size","auto"]]),t("block-auto",[["block-size","auto"]]),t("min-inline-auto",[["min-inline-size","auto"]]),t("min-block-auto",[["min-block-size","auto"]]),t("block-lh",[["block-size","1lh"]]),t("min-block-lh",[["min-block-size","1lh"]]),t("max-block-lh",[["max-block-size","1lh"]]),t("inline-screen",[["inline-size","100vw"]]),t("min-inline-screen",[["min-inline-size","100vw"]]),t("max-inline-screen",[["max-inline-size","100vw"]]),t("block-screen",[["block-size","100vh"]]),t("min-block-screen",[["min-block-size","100vh"]]),t("max-block-screen",[["max-block-size","100vh"]]),t("max-inline-none",[["max-inline-size","none"]]),t("max-block-none",[["max-block-size","none"]]);for(let[u,f,v]of[["inline",["--spacing","--container"],"inline-size"],["min-inline",["--spacing","--container"],"min-inline-size"],["max-inline",["--spacing","--container"],"max-inline-size"],["block",["--spacing"],"block-size"],["min-block",["--spacing"],"min-block-size"],["max-block",["--spacing"],"max-block-size"]])i(u,f,T=>[c(v,T)],{supportsFractions:!0});r.static("container",()=>{let u=[...e.namespace("--breakpoint").values()];u.sort((v,T)=>zt(v,T,"asc"));let f=[c("--tw-sort","--tw-container-component"),c("width","100%")];for(let v of u)f.push(J("@media",`(width >= ${v})`,[c("max-width",v)]));return f}),t("flex-auto",[["flex","auto"]]),t("flex-initial",[["flex","0 auto"]]),t("flex-none",[["flex","none"]]),r.functional("flex",u=>{if(u.value){if(u.value.kind==="arbitrary")return u.modifier?void 0:[c("flex",u.value.value)];if(u.value.fraction){let[f,v]=W(u.value.fraction,"/");return!D(f)||!D(v)?void 0:[c("flex",`calc(${u.value.fraction} * 100%)`)]}if(D(u.value.value))return u.modifier?void 0:[c("flex",u.value.value)]}}),o("flex",()=>[{supportsFractions:!0},{values:Array.from({length:12},(u,f)=>`${f+1}`)}]),n("shrink",{defaultValue:"1",handleBareValue:({value:u})=>D(u)?u:null,handle:u=>[c("flex-shrink",u)]}),n("grow",{defaultValue:"1",handleBareValue:({value:u})=>D(u)?u:null,handle:u=>[c("flex-grow",u)]}),o("shrink",()=>[{values:["0"],valueThemeKeys:[],hasDefaultValue:!0}]),o("grow",()=>[{values:["0"],valueThemeKeys:[],hasDefaultValue:!0}]),t("basis-auto",[["flex-basis","auto"]]),t("basis-full",[["flex-basis","100%"]]),i("basis",["--flex-basis","--spacing","--container"],u=>[c("flex-basis",u)],{supportsFractions:!0}),t("table-auto",[["table-layout","auto"]]),t("table-fixed",[["table-layout","fixed"]]),t("caption-top",[["caption-side","top"]]),t("caption-bottom",[["caption-side","bottom"]]),t("border-collapse",[["border-collapse","collapse"]]),t("border-separate",[["border-collapse","separate"]]);let a=()=>G([P("--tw-border-spacing-x","0","<length>"),P("--tw-border-spacing-y","0","<length>")]);i("border-spacing",["--border-spacing","--spacing"],u=>[a(),c("--tw-border-spacing-x",u),c("--tw-border-spacing-y",u),c("border-spacing","var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]),i("border-spacing-x",["--border-spacing","--spacing"],u=>[a(),c("--tw-border-spacing-x",u),c("border-spacing","var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]),i("border-spacing-y",["--border-spacing","--spacing"],u=>[a(),c("--tw-border-spacing-y",u),c("border-spacing","var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]),n("origin",{themeKeys:["--transform-origin"],handle:u=>[c("transform-origin",u)],staticValues:{center:[c("transform-origin","center")],top:[c("transform-origin","top")],"top-right":[c("transform-origin","100% 0")],right:[c("transform-origin","100%")],"bottom-right":[c("transform-origin","100% 100%")],bottom:[c("transform-origin","bottom")],"bottom-left":[c("transform-origin","0 100%")],left:[c("transform-origin","0")],"top-left":[c("transform-origin","0 0")]}}),n("perspective-origin",{themeKeys:["--perspective-origin"],handle:u=>[c("perspective-origin",u)],staticValues:{center:[c("perspective-origin","center")],top:[c("perspective-origin","top")],"top-right":[c("perspective-origin","100% 0")],right:[c("perspective-origin","100%")],"bottom-right":[c("perspective-origin","100% 100%")],bottom:[c("perspective-origin","bottom")],"bottom-left":[c("perspective-origin","0 100%")],left:[c("perspective-origin","0")],"top-left":[c("perspective-origin","0 0")]}}),n("perspective",{themeKeys:["--perspective"],handle:u=>[c("perspective",u)],staticValues:{none:[c("perspective","none")]}});let l=()=>G([P("--tw-translate-x","0"),P("--tw-translate-y","0"),P("--tw-translate-z","0")]);t("translate-none",[["translate","none"]]),t("-translate-full",[l,["--tw-translate-x","-100%"],["--tw-translate-y","-100%"],["translate","var(--tw-translate-x) var(--tw-translate-y)"]]),t("translate-full",[l,["--tw-translate-x","100%"],["--tw-translate-y","100%"],["translate","var(--tw-translate-x) var(--tw-translate-y)"]]),i("translate",["--translate","--spacing"],u=>[l(),c("--tw-translate-x",u),c("--tw-translate-y",u),c("translate","var(--tw-translate-x) var(--tw-translate-y)")],{supportsNegative:!0,supportsFractions:!0});for(let u of["x","y"])t(`-translate-${u}-full`,[l,[`--tw-translate-${u}`,"-100%"],["translate","var(--tw-translate-x) var(--tw-translate-y)"]]),t(`translate-${u}-full`,[l,[`--tw-translate-${u}`,"100%"],["translate","var(--tw-translate-x) var(--tw-translate-y)"]]),i(`translate-${u}`,["--translate","--spacing"],f=>[l(),c(`--tw-translate-${u}`,f),c("translate","var(--tw-translate-x) var(--tw-translate-y)")],{supportsNegative:!0,supportsFractions:!0});i("translate-z",["--translate","--spacing"],u=>[l(),c("--tw-translate-z",u),c("translate","var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)")],{supportsNegative:!0}),t("translate-3d",[l,["translate","var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)"]]);let d=()=>G([P("--tw-scale-x","1"),P("--tw-scale-y","1"),P("--tw-scale-z","1")]);t("scale-none",[["scale","none"]]);function p({negative:u}){return f=>{if(!f.value||f.modifier)return;let v;return f.value.kind==="arbitrary"?(v=f.value.value,v=u?`calc(${v} * -1)`:v,[c("scale",v)]):(v=e.resolve(f.value.value,["--scale"]),!v&&D(f.value.value)&&(v=`${f.value.value}%`),v?(v=u?`calc(${v} * -1)`:v,[d(),c("--tw-scale-x",v),c("--tw-scale-y",v),c("--tw-scale-z",v),c("scale","var(--tw-scale-x) var(--tw-scale-y)")]):void 0)}}r.functional("-scale",p({negative:!0})),r.functional("scale",p({negative:!1})),o("scale",()=>[{supportsNegative:!0,values:["0","50","75","90","95","100","105","110","125","150","200"],valueThemeKeys:["--scale"]}]);for(let u of["x","y","z"])n(`scale-${u}`,{supportsNegative:!0,themeKeys:["--scale"],handleBareValue:({value:f})=>D(f)?`${f}%`:null,handle:f=>[d(),c(`--tw-scale-${u}`,f),c("scale",`var(--tw-scale-x) var(--tw-scale-y)${u==="z"?" var(--tw-scale-z)":""}`)]}),o(`scale-${u}`,()=>[{supportsNegative:!0,values:["0","50","75","90","95","100","105","110","125","150","200"],valueThemeKeys:["--scale"]}]);t("scale-3d",[d,["scale","var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)"]]),t("rotate-none",[["rotate","none"]]);function h({negative:u}){return f=>{if(!f.value||f.modifier)return;let v;if(f.value.kind==="arbitrary"){v=f.value.value;let T=f.value.dataType??ae(v,["angle","vector"]);if(T==="vector")return[c("rotate",`${v} var(--tw-rotate)`)];if(T!=="angle")return[c("rotate",u?`calc(${v} * -1)`:v)]}else if(v=e.resolve(f.value.value,["--rotate"]),!v&&D(f.value.value)&&(v=`${f.value.value}deg`),!v)return;return[c("rotate",u?`calc(${v} * -1)`:v)]}}r.functional("-rotate",h({negative:!0})),r.functional("rotate",h({negative:!1})),o("rotate",()=>[{supportsNegative:!0,values:["0","1","2","3","6","12","45","90","180"],valueThemeKeys:["--rotate"]}]);{let u=["var(--tw-rotate-x,)","var(--tw-rotate-y,)","var(--tw-rotate-z,)","var(--tw-skew-x,)","var(--tw-skew-y,)"].join(" "),f=()=>G([P("--tw-rotate-x"),P("--tw-rotate-y"),P("--tw-rotate-z"),P("--tw-skew-x"),P("--tw-skew-y")]);for(let v of["x","y","z"])n(`rotate-${v}`,{supportsNegative:!0,themeKeys:["--rotate"],handleBareValue:({value:T})=>D(T)?`${T}deg`:null,handle:T=>[f(),c(`--tw-rotate-${v}`,`rotate${v.toUpperCase()}(${T})`),c("transform",u)]}),o(`rotate-${v}`,()=>[{supportsNegative:!0,values:["0","1","2","3","6","12","45","90","180"],valueThemeKeys:["--rotate"]}]);n("skew",{supportsNegative:!0,themeKeys:["--skew"],handleBareValue:({value:v})=>D(v)?`${v}deg`:null,handle:v=>[f(),c("--tw-skew-x",`skewX(${v})`),c("--tw-skew-y",`skewY(${v})`),c("transform",u)]}),n("skew-x",{supportsNegative:!0,themeKeys:["--skew"],handleBareValue:({value:v})=>D(v)?`${v}deg`:null,handle:v=>[f(),c("--tw-skew-x",`skewX(${v})`),c("transform",u)]}),n("skew-y",{supportsNegative:!0,themeKeys:["--skew"],handleBareValue:({value:v})=>D(v)?`${v}deg`:null,handle:v=>[f(),c("--tw-skew-y",`skewY(${v})`),c("transform",u)]}),o("skew",()=>[{supportsNegative:!0,values:["0","1","2","3","6","12"],valueThemeKeys:["--skew"]}]),o("skew-x",()=>[{supportsNegative:!0,values:["0","1","2","3","6","12"],valueThemeKeys:["--skew"]}]),o("skew-y",()=>[{supportsNegative:!0,values:["0","1","2","3","6","12"],valueThemeKeys:["--skew"]}]),r.functional("transform",v=>{if(v.modifier)return;let T=null;if(v.value?v.value.kind==="arbitrary"&&(T=v.value.value):T=u,T!==null)return[f(),c("transform",T)]}),o("transform",()=>[{hasDefaultValue:!0}]),t("transform-cpu",[["transform",u]]),t("transform-gpu",[["transform",`translateZ(0) ${u}`]]),t("transform-none",[["transform","none"]])}t("transform-flat",[["transform-style","flat"]]),t("transform-3d",[["transform-style","preserve-3d"]]),t("transform-content",[["transform-box","content-box"]]),t("transform-border",[["transform-box","border-box"]]),t("transform-fill",[["transform-box","fill-box"]]),t("transform-stroke",[["transform-box","stroke-box"]]),t("transform-view",[["transform-box","view-box"]]),t("backface-visible",[["backface-visibility","visible"]]),t("backface-hidden",[["backface-visibility","hidden"]]);for(let u of"auto.default.pointer.wait.text.move.help.not-allowed.none.context-menu.progress.cell.crosshair.vertical-text.alias.copy.no-drop.grab.grabbing.all-scroll.col-resize.row-resize.n-resize.e-resize.s-resize.w-resize.ne-resize.nw-resize.se-resize.sw-resize.ew-resize.ns-resize.nesw-resize.nwse-resize.zoom-in.zoom-out".split("."))t(`cursor-${u}`,[["cursor",u]]);n("cursor",{themeKeys:["--cursor"],handle:u=>[c("cursor",u)]});for(let u of["auto","none","manipulation"])t(`touch-${u}`,[["touch-action",u]]);let g=()=>G([P("--tw-pan-x"),P("--tw-pan-y"),P("--tw-pinch-zoom")]);for(let u of["x","left","right"])t(`touch-pan-${u}`,[g,["--tw-pan-x",`pan-${u}`],["touch-action","var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);for(let u of["y","up","down"])t(`touch-pan-${u}`,[g,["--tw-pan-y",`pan-${u}`],["touch-action","var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);t("touch-pinch-zoom",[g,["--tw-pinch-zoom","pinch-zoom"],["touch-action","var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);for(let u of["none","text","all","auto"])t(`select-${u}`,[["-webkit-user-select",u],["user-select",u]]);t("resize-none",[["resize","none"]]),t("resize-x",[["resize","horizontal"]]),t("resize-y",[["resize","vertical"]]),t("resize",[["resize","both"]]),t("snap-none",[["scroll-snap-type","none"]]);let b=()=>G([P("--tw-scroll-snap-strictness","proximity","*")]);for(let u of["x","y","both"])t(`snap-${u}`,[b,["scroll-snap-type",`${u} var(--tw-scroll-snap-strictness)`]]);t("snap-mandatory",[b,["--tw-scroll-snap-strictness","mandatory"]]),t("snap-proximity",[b,["--tw-scroll-snap-strictness","proximity"]]),t("snap-align-none",[["scroll-snap-align","none"]]),t("snap-start",[["scroll-snap-align","start"]]),t("snap-end",[["scroll-snap-align","end"]]),t("snap-center",[["scroll-snap-align","center"]]),t("snap-normal",[["scroll-snap-stop","normal"]]),t("snap-always",[["scroll-snap-stop","always"]]);for(let[u,f]of[["scroll-m","scroll-margin"],["scroll-mx","scroll-margin-inline"],["scroll-my","scroll-margin-block"],["scroll-ms","scroll-margin-inline-start"],["scroll-me","scroll-margin-inline-end"],["scroll-mbs","scroll-margin-block-start"],["scroll-mbe","scroll-margin-block-end"],["scroll-mt","scroll-margin-top"],["scroll-mr","scroll-margin-right"],["scroll-mb","scroll-margin-bottom"],["scroll-ml","scroll-margin-left"]])i(u,["--scroll-margin","--spacing"],v=>[c(f,v)],{supportsNegative:!0});for(let[u,f]of[["scroll-p","scroll-padding"],["scroll-px","scroll-padding-inline"],["scroll-py","scroll-padding-block"],["scroll-ps","scroll-padding-inline-start"],["scroll-pe","scroll-padding-inline-end"],["scroll-pbs","scroll-padding-block-start"],["scroll-pbe","scroll-padding-block-end"],["scroll-pt","scroll-padding-top"],["scroll-pr","scroll-padding-right"],["scroll-pb","scroll-padding-bottom"],["scroll-pl","scroll-padding-left"]])i(u,["--scroll-padding","--spacing"],v=>[c(f,v)]);t("list-inside",[["list-style-position","inside"]]),t("list-outside",[["list-style-position","outside"]]),n("list",{themeKeys:["--list-style-type"],handle:u=>[c("list-style-type",u)],staticValues:{none:[c("list-style-type","none")],disc:[c("list-style-type","disc")],decimal:[c("list-style-type","decimal")]}}),n("list-image",{themeKeys:["--list-style-image"],handle:u=>[c("list-style-image",u)],staticValues:{none:[c("list-style-image","none")]}}),t("appearance-none",[["appearance","none"]]),t("appearance-auto",[["appearance","auto"]]),t("scheme-normal",[["color-scheme","normal"]]),t("scheme-dark",[["color-scheme","dark"]]),t("scheme-light",[["color-scheme","light"]]),t("scheme-light-dark",[["color-scheme","light dark"]]),t("scheme-only-dark",[["color-scheme","only dark"]]),t("scheme-only-light",[["color-scheme","only light"]]),n("columns",{themeKeys:["--columns","--container"],handleBareValue:({value:u})=>D(u)?u:null,handle:u=>[c("columns",u)],staticValues:{auto:[c("columns","auto")]}}),o("columns",()=>[{values:Array.from({length:12},(u,f)=>`${f+1}`),valueThemeKeys:["--columns","--container"]}]);for(let u of["auto","avoid","all","avoid-page","page","left","right","column"])t(`break-before-${u}`,[["break-before",u]]);for(let u of["auto","avoid","avoid-page","avoid-column"])t(`break-inside-${u}`,[["break-inside",u]]);for(let u of["auto","avoid","all","avoid-page","page","left","right","column"])t(`break-after-${u}`,[["break-after",u]]);t("grid-flow-row",[["grid-auto-flow","row"]]),t("grid-flow-col",[["grid-auto-flow","column"]]),t("grid-flow-dense",[["grid-auto-flow","dense"]]),t("grid-flow-row-dense",[["grid-auto-flow","row dense"]]),t("grid-flow-col-dense",[["grid-auto-flow","column dense"]]),n("auto-cols",{themeKeys:["--grid-auto-columns"],handle:u=>[c("grid-auto-columns",u)],staticValues:{auto:[c("grid-auto-columns","auto")],min:[c("grid-auto-columns","min-content")],max:[c("grid-auto-columns","max-content")],fr:[c("grid-auto-columns","minmax(0, 1fr)")]}}),n("auto-rows",{themeKeys:["--grid-auto-rows"],handle:u=>[c("grid-auto-rows",u)],staticValues:{auto:[c("grid-auto-rows","auto")],min:[c("grid-auto-rows","min-content")],max:[c("grid-auto-rows","max-content")],fr:[c("grid-auto-rows","minmax(0, 1fr)")]}}),n("grid-cols",{themeKeys:["--grid-template-columns"],handleBareValue:({value:u})=>Lr(u)?`repeat(${u}, minmax(0, 1fr))`:null,handle:u=>[c("grid-template-columns",u)],staticValues:{none:[c("grid-template-columns","none")],subgrid:[c("grid-template-columns","subgrid")]}}),n("grid-rows",{themeKeys:["--grid-template-rows"],handleBareValue:({value:u})=>Lr(u)?`repeat(${u}, minmax(0, 1fr))`:null,handle:u=>[c("grid-template-rows",u)],staticValues:{none:[c("grid-template-rows","none")],subgrid:[c("grid-template-rows","subgrid")]}}),o("grid-cols",()=>[{values:Array.from({length:12},(u,f)=>`${f+1}`),valueThemeKeys:["--grid-template-columns"]}]),o("grid-rows",()=>[{values:Array.from({length:12},(u,f)=>`${f+1}`),valueThemeKeys:["--grid-template-rows"]}]),t("flex-row",[["flex-direction","row"]]),t("flex-row-reverse",[["flex-direction","row-reverse"]]),t("flex-col",[["flex-direction","column"]]),t("flex-col-reverse",[["flex-direction","column-reverse"]]),t("flex-wrap",[["flex-wrap","wrap"]]),t("flex-nowrap",[["flex-wrap","nowrap"]]),t("flex-wrap-reverse",[["flex-wrap","wrap-reverse"]]),t("place-content-center",[["place-content","center"]]),t("place-content-start",[["place-content","start"]]),t("place-content-end",[["place-content","end"]]),t("place-content-center-safe",[["place-content","safe center"]]),t("place-content-end-safe",[["place-content","safe end"]]),t("place-content-between",[["place-content","space-between"]]),t("place-content-around",[["place-content","space-around"]]),t("place-content-evenly",[["place-content","space-evenly"]]),t("place-content-baseline",[["place-content","baseline"]]),t("place-content-stretch",[["place-content","stretch"]]),t("place-items-center",[["place-items","center"]]),t("place-items-start",[["place-items","start"]]),t("place-items-end",[["place-items","end"]]),t("place-items-center-safe",[["place-items","safe center"]]),t("place-items-end-safe",[["place-items","safe end"]]),t("place-items-baseline",[["place-items","baseline"]]),t("place-items-stretch",[["place-items","stretch"]]),t("content-normal",[["align-content","normal"]]),t("content-center",[["align-content","center"]]),t("content-start",[["align-content","flex-start"]]),t("content-end",[["align-content","flex-end"]]),t("content-center-safe",[["align-content","safe center"]]),t("content-end-safe",[["align-content","safe flex-end"]]),t("content-between",[["align-content","space-between"]]),t("content-around",[["align-content","space-around"]]),t("content-evenly",[["align-content","space-evenly"]]),t("content-baseline",[["align-content","baseline"]]),t("content-stretch",[["align-content","stretch"]]),t("items-center",[["align-items","center"]]),t("items-start",[["align-items","flex-start"]]),t("items-end",[["align-items","flex-end"]]),t("items-center-safe",[["align-items","safe center"]]),t("items-end-safe",[["align-items","safe flex-end"]]),t("items-baseline",[["align-items","baseline"]]),t("items-baseline-last",[["align-items","last baseline"]]),t("items-stretch",[["align-items","stretch"]]),t("justify-normal",[["justify-content","normal"]]),t("justify-center",[["justify-content","center"]]),t("justify-start",[["justify-content","flex-start"]]),t("justify-end",[["justify-content","flex-end"]]),t("justify-center-safe",[["justify-content","safe center"]]),t("justify-end-safe",[["justify-content","safe flex-end"]]),t("justify-between",[["justify-content","space-between"]]),t("justify-around",[["justify-content","space-around"]]),t("justify-evenly",[["justify-content","space-evenly"]]),t("justify-baseline",[["justify-content","baseline"]]),t("justify-stretch",[["justify-content","stretch"]]),t("justify-items-normal",[["justify-items","normal"]]),t("justify-items-center",[["justify-items","center"]]),t("justify-items-start",[["justify-items","start"]]),t("justify-items-end",[["justify-items","end"]]),t("justify-items-center-safe",[["justify-items","safe center"]]),t("justify-items-end-safe",[["justify-items","safe end"]]),t("justify-items-stretch",[["justify-items","stretch"]]),i("gap",["--gap","--spacing"],u=>[c("gap",u)]),i("gap-x",["--gap","--spacing"],u=>[c("column-gap",u)]),i("gap-y",["--gap","--spacing"],u=>[c("row-gap",u)]),i("space-x",["--space","--spacing"],u=>[G([P("--tw-space-x-reverse","0")]),X(":where(& > :not(:last-child))",[c("--tw-sort","row-gap"),c("--tw-space-x-reverse","0"),c("margin-inline-start",`calc(${u} * var(--tw-space-x-reverse))`),c("margin-inline-end",`calc(${u} * calc(1 - var(--tw-space-x-reverse)))`)])],{supportsNegative:!0}),i("space-y",["--space","--spacing"],u=>[G([P("--tw-space-y-reverse","0")]),X(":where(& > :not(:last-child))",[c("--tw-sort","column-gap"),c("--tw-space-y-reverse","0"),c("margin-block-start",`calc(${u} * var(--tw-space-y-reverse))`),c("margin-block-end",`calc(${u} * calc(1 - var(--tw-space-y-reverse)))`)])],{supportsNegative:!0}),t("space-x-reverse",[()=>G([P("--tw-space-x-reverse","0")]),()=>X(":where(& > :not(:last-child))",[c("--tw-sort","row-gap"),c("--tw-space-x-reverse","1")])]),t("space-y-reverse",[()=>G([P("--tw-space-y-reverse","0")]),()=>X(":where(& > :not(:last-child))",[c("--tw-sort","column-gap"),c("--tw-space-y-reverse","1")])]),t("accent-auto",[["accent-color","auto"]]),s("accent",{themeKeys:["--accent-color","--color"],handle:u=>[c("accent-color",u)]}),s("caret",{themeKeys:["--caret-color","--color"],handle:u=>[c("caret-color",u)]}),s("divide",{themeKeys:["--divide-color","--border-color","--color"],handle:u=>[X(":where(& > :not(:last-child))",[c("--tw-sort","divide-color"),c("border-color",u)])]}),t("place-self-auto",[["place-self","auto"]]),t("place-self-start",[["place-self","start"]]),t("place-self-end",[["place-self","end"]]),t("place-self-center",[["place-self","center"]]),t("place-self-end-safe",[["place-self","safe end"]]),t("place-self-center-safe",[["place-self","safe center"]]),t("place-self-stretch",[["place-self","stretch"]]),t("self-auto",[["align-self","auto"]]),t("self-start",[["align-self","flex-start"]]),t("self-end",[["align-self","flex-end"]]),t("self-center",[["align-self","center"]]),t("self-end-safe",[["align-self","safe flex-end"]]),t("self-center-safe",[["align-self","safe center"]]),t("self-stretch",[["align-self","stretch"]]),t("self-baseline",[["align-self","baseline"]]),t("self-baseline-last",[["align-self","last baseline"]]),t("justify-self-auto",[["justify-self","auto"]]),t("justify-self-start",[["justify-self","flex-start"]]),t("justify-self-end",[["justify-self","flex-end"]]),t("justify-self-center",[["justify-self","center"]]),t("justify-self-end-safe",[["justify-self","safe flex-end"]]),t("justify-self-center-safe",[["justify-self","safe center"]]),t("justify-self-stretch",[["justify-self","stretch"]]);for(let u of["auto","hidden","clip","visible","scroll"])t(`overflow-${u}`,[["overflow",u]]),t(`overflow-x-${u}`,[["overflow-x",u]]),t(`overflow-y-${u}`,[["overflow-y",u]]);for(let u of["auto","contain","none"])t(`overscroll-${u}`,[["overscroll-behavior",u]]),t(`overscroll-x-${u}`,[["overscroll-behavior-x",u]]),t(`overscroll-y-${u}`,[["overscroll-behavior-y",u]]);t("scroll-auto",[["scroll-behavior","auto"]]),t("scroll-smooth",[["scroll-behavior","smooth"]]),t("truncate",[["overflow","hidden"],["text-overflow","ellipsis"],["white-space","nowrap"]]),t("text-ellipsis",[["text-overflow","ellipsis"]]),t("text-clip",[["text-overflow","clip"]]),t("hyphens-none",[["-webkit-hyphens","none"],["hyphens","none"]]),t("hyphens-manual",[["-webkit-hyphens","manual"],["hyphens","manual"]]),t("hyphens-auto",[["-webkit-hyphens","auto"],["hyphens","auto"]]),t("whitespace-normal",[["white-space","normal"]]),t("whitespace-nowrap",[["white-space","nowrap"]]),t("whitespace-pre",[["white-space","pre"]]),t("whitespace-pre-line",[["white-space","pre-line"]]),t("whitespace-pre-wrap",[["white-space","pre-wrap"]]),t("whitespace-break-spaces",[["white-space","break-spaces"]]),t("text-wrap",[["text-wrap","wrap"]]),t("text-nowrap",[["text-wrap","nowrap"]]),t("text-balance",[["text-wrap","balance"]]),t("text-pretty",[["text-wrap","pretty"]]),t("break-normal",[["overflow-wrap","normal"],["word-break","normal"]]),t("break-all",[["word-break","break-all"]]),t("break-keep",[["word-break","keep-all"]]),t("wrap-anywhere",[["overflow-wrap","anywhere"]]),t("wrap-break-word",[["overflow-wrap","break-word"]]),t("wrap-normal",[["overflow-wrap","normal"]]);for(let[u,f]of[["rounded",["border-radius"]],["rounded-s",["border-start-start-radius","border-end-start-radius"]],["rounded-e",["border-start-end-radius","border-end-end-radius"]],["rounded-t",["border-top-left-radius","border-top-right-radius"]],["rounded-r",["border-top-right-radius","border-bottom-right-radius"]],["rounded-b",["border-bottom-right-radius","border-bottom-left-radius"]],["rounded-l",["border-top-left-radius","border-bottom-left-radius"]],["rounded-ss",["border-start-start-radius"]],["rounded-se",["border-start-end-radius"]],["rounded-ee",["border-end-end-radius"]],["rounded-es",["border-end-start-radius"]],["rounded-tl",["border-top-left-radius"]],["rounded-tr",["border-top-right-radius"]],["rounded-br",["border-bottom-right-radius"]],["rounded-bl",["border-bottom-left-radius"]]])n(u,{themeKeys:["--radius"],handle:v=>f.map(T=>c(T,v)),staticValues:{none:f.map(v=>c(v,"0")),full:f.map(v=>c(v,"calc(infinity * 1px)"))}});t("border-solid",[["--tw-border-style","solid"],["border-style","solid"]]),t("border-dashed",[["--tw-border-style","dashed"],["border-style","dashed"]]),t("border-dotted",[["--tw-border-style","dotted"],["border-style","dotted"]]),t("border-double",[["--tw-border-style","double"],["border-style","double"]]),t("border-hidden",[["--tw-border-style","hidden"],["border-style","hidden"]]),t("border-none",[["--tw-border-style","none"],["border-style","none"]]);{let u=function(v,T){r.functional(v,$=>{if(!$.value){if($.modifier)return;let C=e.get(["--default-border-width"])??"1px",j=T.width(C);return j?[f(),...j]:void 0}if($.value.kind==="arbitrary"){let C=$.value.value;switch($.value.dataType??ae(C,["color","line-width","length"])){case"line-width":case"length":{if($.modifier)return;let j=T.width(C);return j?[f(),...j]:void 0}default:return C=se(C,$.modifier,e),C===null?void 0:T.color(C)}}{let C=fe($,e,["--border-color","--color"]);if(C)return T.color(C)}{if($.modifier)return;let C=e.resolve($.value.value,["--border-width"]);if(C){let j=T.width(C);return j?[f(),...j]:void 0}if(D($.value.value)){let j=T.width(`${$.value.value}px`);return j?[f(),...j]:void 0}}}),o(v,()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--border-color","--color"],modifiers:Array.from({length:21},($,C)=>`${C*5}`),hasDefaultValue:!0},{values:["0","2","4","8"],valueThemeKeys:["--border-width"]}])},f=()=>G([P("--tw-border-style","solid")]);u("border",{width:v=>[c("border-style","var(--tw-border-style)"),c("border-width",v)],color:v=>[c("border-color",v)]}),u("border-x",{width:v=>[c("border-inline-style","var(--tw-border-style)"),c("border-inline-width",v)],color:v=>[c("border-inline-color",v)]}),u("border-y",{width:v=>[c("border-block-style","var(--tw-border-style)"),c("border-block-width",v)],color:v=>[c("border-block-color",v)]}),u("border-s",{width:v=>[c("border-inline-start-style","var(--tw-border-style)"),c("border-inline-start-width",v)],color:v=>[c("border-inline-start-color",v)]}),u("border-e",{width:v=>[c("border-inline-end-style","var(--tw-border-style)"),c("border-inline-end-width",v)],color:v=>[c("border-inline-end-color",v)]}),u("border-bs",{width:v=>[c("border-block-start-style","var(--tw-border-style)"),c("border-block-start-width",v)],color:v=>[c("border-block-start-color",v)]}),u("border-be",{width:v=>[c("border-block-end-style","var(--tw-border-style)"),c("border-block-end-width",v)],color:v=>[c("border-block-end-color",v)]}),u("border-t",{width:v=>[c("border-top-style","var(--tw-border-style)"),c("border-top-width",v)],color:v=>[c("border-top-color",v)]}),u("border-r",{width:v=>[c("border-right-style","var(--tw-border-style)"),c("border-right-width",v)],color:v=>[c("border-right-color",v)]}),u("border-b",{width:v=>[c("border-bottom-style","var(--tw-border-style)"),c("border-bottom-width",v)],color:v=>[c("border-bottom-color",v)]}),u("border-l",{width:v=>[c("border-left-style","var(--tw-border-style)"),c("border-left-width",v)],color:v=>[c("border-left-color",v)]}),n("divide-x",{defaultValue:e.get(["--default-border-width"])??"1px",themeKeys:["--divide-width","--border-width"],handleBareValue:({value:v})=>D(v)?`${v}px`:null,handle:v=>[G([P("--tw-divide-x-reverse","0")]),X(":where(& > :not(:last-child))",[c("--tw-sort","divide-x-width"),f(),c("--tw-divide-x-reverse","0"),c("border-inline-style","var(--tw-border-style)"),c("border-inline-start-width",`calc(${v} * var(--tw-divide-x-reverse))`),c("border-inline-end-width",`calc(${v} * calc(1 - var(--tw-divide-x-reverse)))`)])]}),n("divide-y",{defaultValue:e.get(["--default-border-width"])??"1px",themeKeys:["--divide-width","--border-width"],handleBareValue:({value:v})=>D(v)?`${v}px`:null,handle:v=>[G([P("--tw-divide-y-reverse","0")]),X(":where(& > :not(:last-child))",[c("--tw-sort","divide-y-width"),f(),c("--tw-divide-y-reverse","0"),c("border-bottom-style","var(--tw-border-style)"),c("border-top-style","var(--tw-border-style)"),c("border-top-width",`calc(${v} * var(--tw-divide-y-reverse))`),c("border-bottom-width",`calc(${v} * calc(1 - var(--tw-divide-y-reverse)))`)])]}),o("divide-x",()=>[{values:["0","2","4","8"],valueThemeKeys:["--divide-width","--border-width"],hasDefaultValue:!0}]),o("divide-y",()=>[{values:["0","2","4","8"],valueThemeKeys:["--divide-width","--border-width"],hasDefaultValue:!0}]),t("divide-x-reverse",[()=>G([P("--tw-divide-x-reverse","0")]),()=>X(":where(& > :not(:last-child))",[c("--tw-divide-x-reverse","1")])]),t("divide-y-reverse",[()=>G([P("--tw-divide-y-reverse","0")]),()=>X(":where(& > :not(:last-child))",[c("--tw-divide-y-reverse","1")])]);for(let v of["solid","dashed","dotted","double","none"])t(`divide-${v}`,[()=>X(":where(& > :not(:last-child))",[c("--tw-sort","divide-style"),c("--tw-border-style",v),c("border-style",v)])])}t("bg-auto",[["background-size","auto"]]),t("bg-cover",[["background-size","cover"]]),t("bg-contain",[["background-size","contain"]]),n("bg-size",{handle(u){if(u)return[c("background-size",u)]}}),t("bg-fixed",[["background-attachment","fixed"]]),t("bg-local",[["background-attachment","local"]]),t("bg-scroll",[["background-attachment","scroll"]]),t("bg-top",[["background-position","top"]]),t("bg-top-left",[["background-position","left top"]]),t("bg-top-right",[["background-position","right top"]]),t("bg-bottom",[["background-position","bottom"]]),t("bg-bottom-left",[["background-position","left bottom"]]),t("bg-bottom-right",[["background-position","right bottom"]]),t("bg-left",[["background-position","left"]]),t("bg-right",[["background-position","right"]]),t("bg-center",[["background-position","center"]]),n("bg-position",{handle(u){if(u)return[c("background-position",u)]}}),t("bg-repeat",[["background-repeat","repeat"]]),t("bg-no-repeat",[["background-repeat","no-repeat"]]),t("bg-repeat-x",[["background-repeat","repeat-x"]]),t("bg-repeat-y",[["background-repeat","repeat-y"]]),t("bg-repeat-round",[["background-repeat","round"]]),t("bg-repeat-space",[["background-repeat","space"]]),t("bg-none",[["background-image","none"]]);{let u=function(C){let j="in oklab";if((C==null?void 0:C.kind)==="named")switch(C.value){case"longer":case"shorter":case"increasing":case"decreasing":j=`in oklch ${C.value} hue`;break;default:j=`in ${C.value}`}else(C==null?void 0:C.kind)==="arbitrary"&&(j=C.value);return j},f=function({negative:C}){return j=>{if(!j.value)return;if(j.value.kind==="arbitrary"){if(j.modifier)return;let U=j.value.value;return(j.value.dataType??ae(U,["angle"]))==="angle"?(U=C?`calc(${U} * -1)`:`${U}`,[c("--tw-gradient-position",U),c("background-image",`linear-gradient(var(--tw-gradient-stops,${U}))`)]):C?void 0:[c("--tw-gradient-position",U),c("background-image",`linear-gradient(var(--tw-gradient-stops,${U}))`)]}let z=j.value.value;if(!C&&$.has(z))z=$.get(z);else if(D(z))z=C?`calc(${z}deg * -1)`:`${z}deg`;else return;let F=u(j.modifier);return[c("--tw-gradient-position",`${z}`),ce("@supports (background-image: linear-gradient(in lab, red, red))",[c("--tw-gradient-position",`${z} ${F}`)]),c("background-image","linear-gradient(var(--tw-gradient-stops))")]}},v=function({negative:C}){return j=>{var U;if(((U=j.value)==null?void 0:U.kind)==="arbitrary"){if(j.modifier)return;let ee=j.value.value;return[c("--tw-gradient-position",ee),c("background-image",`conic-gradient(var(--tw-gradient-stops,${ee}))`)]}let z=u(j.modifier);if(!j.value)return[c("--tw-gradient-position",z),c("background-image","conic-gradient(var(--tw-gradient-stops))")];let F=j.value.value;if(D(F))return F=C?`calc(${F}deg * -1)`:`${F}deg`,[c("--tw-gradient-position",`from ${F} ${z}`),c("background-image","conic-gradient(var(--tw-gradient-stops))")]}},T=["oklab","oklch","srgb","hsl","longer","shorter","increasing","decreasing"],$=new Map([["to-t","to top"],["to-tr","to top right"],["to-r","to right"],["to-br","to bottom right"],["to-b","to bottom"],["to-bl","to bottom left"],["to-l","to left"],["to-tl","to top left"]]);r.functional("-bg-linear",f({negative:!0})),r.functional("bg-linear",f({negative:!1})),o("bg-linear",()=>[{values:[...$.keys()],modifiers:T},{values:["0","30","60","90","120","150","180","210","240","270","300","330"],supportsNegative:!0,modifiers:T}]),r.functional("-bg-conic",v({negative:!0})),r.functional("bg-conic",v({negative:!1})),o("bg-conic",()=>[{hasDefaultValue:!0,modifiers:T},{values:["0","30","60","90","120","150","180","210","240","270","300","330"],supportsNegative:!0,modifiers:T}]),r.functional("bg-radial",C=>{if(!C.value)return[c("--tw-gradient-position",u(C.modifier)),c("background-image","radial-gradient(var(--tw-gradient-stops))")];if(C.value.kind==="arbitrary"){if(C.modifier)return;let j=C.value.value;return[c("--tw-gradient-position",j),c("background-image",`radial-gradient(var(--tw-gradient-stops,${j}))`)]}}),o("bg-radial",()=>[{hasDefaultValue:!0,modifiers:T}])}r.functional("bg",u=>{if(u.value){if(u.value.kind==="arbitrary"){let f=u.value.value;switch(u.value.dataType??ae(f,["image","color","percentage","position","bg-size","length","url"])){case"percentage":case"position":return u.modifier?void 0:[c("background-position",f)];case"bg-size":case"length":case"size":return u.modifier?void 0:[c("background-size",f)];case"image":case"url":return u.modifier?void 0:[c("background-image",f)];default:return f=se(f,u.modifier,e),f===null?void 0:[c("background-color",f)]}}{let f=fe(u,e,["--background-color","--color"]);if(f)return[c("background-color",f)]}{if(u.modifier)return;let f=e.resolve(u.value.value,["--background-image"]);if(f)return[c("background-image",f)]}}}),o("bg",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--background-color","--color"],modifiers:Array.from({length:21},(u,f)=>`${f*5}`)},{values:[],valueThemeKeys:["--background-image"]}]);let m=()=>G([P("--tw-gradient-position"),P("--tw-gradient-from","#0000","<color>"),P("--tw-gradient-via","#0000","<color>"),P("--tw-gradient-to","#0000","<color>"),P("--tw-gradient-stops"),P("--tw-gradient-via-stops"),P("--tw-gradient-from-position","0%","<length-percentage>"),P("--tw-gradient-via-position","50%","<length-percentage>"),P("--tw-gradient-to-position","100%","<length-percentage>")]);function w(u,f){r.functional(u,v=>{if(v.value){if(v.value.kind==="arbitrary"){let T=v.value.value;switch(v.value.dataType??ae(T,["color","length","percentage"])){case"length":case"percentage":return v.modifier?void 0:f.position(T);default:return T=se(T,v.modifier,e),T===null?void 0:f.color(T)}}{let T=fe(v,e,["--background-color","--color"]);if(T)return f.color(T)}{if(v.modifier)return;let T=e.resolve(v.value.value,["--gradient-color-stop-positions"]);if(T)return f.position(T);if(v.value.value[v.value.value.length-1]==="%"&&D(v.value.value.slice(0,-1)))return f.position(v.value.value)}}}),o(u,()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--background-color","--color"],modifiers:Array.from({length:21},(v,T)=>`${T*5}`)},{values:Array.from({length:21},(v,T)=>`${T*5}%`),valueThemeKeys:["--gradient-color-stop-positions"]}])}w("from",{color:u=>[m(),c("--tw-sort","--tw-gradient-from"),c("--tw-gradient-from",u),c("--tw-gradient-stops","var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")],position:u=>[m(),c("--tw-gradient-from-position",u)]}),t("via-none",[["--tw-gradient-via-stops","initial"]]),w("via",{color:u=>[m(),c("--tw-sort","--tw-gradient-via"),c("--tw-gradient-via",u),c("--tw-gradient-via-stops","var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)"),c("--tw-gradient-stops","var(--tw-gradient-via-stops)")],position:u=>[m(),c("--tw-gradient-via-position",u)]}),w("to",{color:u=>[m(),c("--tw-sort","--tw-gradient-to"),c("--tw-gradient-to",u),c("--tw-gradient-stops","var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")],position:u=>[m(),c("--tw-gradient-to-position",u)]}),t("mask-none",[["mask-image","none"]]),r.functional("mask",u=>{if(!u.value||u.modifier||u.value.kind!=="arbitrary")return;let f=u.value.value;switch(u.value.dataType??ae(f,["image","percentage","position","bg-size","length","url"])){case"percentage":case"position":return u.modifier?void 0:[c("mask-position",f)];case"bg-size":case"length":case"size":return[c("mask-size",f)];default:return[c("mask-image",f)]}}),t("mask-add",[["mask-composite","add"]]),t("mask-subtract",[["mask-composite","subtract"]]),t("mask-intersect",[["mask-composite","intersect"]]),t("mask-exclude",[["mask-composite","exclude"]]),t("mask-alpha",[["mask-mode","alpha"]]),t("mask-luminance",[["mask-mode","luminance"]]),t("mask-match",[["mask-mode","match-source"]]),t("mask-type-alpha",[["mask-type","alpha"]]),t("mask-type-luminance",[["mask-type","luminance"]]),t("mask-auto",[["mask-size","auto"]]),t("mask-cover",[["mask-size","cover"]]),t("mask-contain",[["mask-size","contain"]]),n("mask-size",{handle(u){if(u)return[c("mask-size",u)]}}),t("mask-top",[["mask-position","top"]]),t("mask-top-left",[["mask-position","left top"]]),t("mask-top-right",[["mask-position","right top"]]),t("mask-bottom",[["mask-position","bottom"]]),t("mask-bottom-left",[["mask-position","left bottom"]]),t("mask-bottom-right",[["mask-position","right bottom"]]),t("mask-left",[["mask-position","left"]]),t("mask-right",[["mask-position","right"]]),t("mask-center",[["mask-position","center"]]),n("mask-position",{handle(u){if(u)return[c("mask-position",u)]}}),t("mask-repeat",[["mask-repeat","repeat"]]),t("mask-no-repeat",[["mask-repeat","no-repeat"]]),t("mask-repeat-x",[["mask-repeat","repeat-x"]]),t("mask-repeat-y",[["mask-repeat","repeat-y"]]),t("mask-repeat-round",[["mask-repeat","round"]]),t("mask-repeat-space",[["mask-repeat","space"]]),t("mask-clip-border",[["mask-clip","border-box"]]),t("mask-clip-padding",[["mask-clip","padding-box"]]),t("mask-clip-content",[["mask-clip","content-box"]]),t("mask-clip-fill",[["mask-clip","fill-box"]]),t("mask-clip-stroke",[["mask-clip","stroke-box"]]),t("mask-clip-view",[["mask-clip","view-box"]]),t("mask-no-clip",[["mask-clip","no-clip"]]),t("mask-origin-border",[["mask-origin","border-box"]]),t("mask-origin-padding",[["mask-origin","padding-box"]]),t("mask-origin-content",[["mask-origin","content-box"]]),t("mask-origin-fill",[["mask-origin","fill-box"]]),t("mask-origin-stroke",[["mask-origin","stroke-box"]]),t("mask-origin-view",[["mask-origin","view-box"]]);let k=()=>G([P("--tw-mask-linear","linear-gradient(#fff, #fff)"),P("--tw-mask-radial","linear-gradient(#fff, #fff)"),P("--tw-mask-conic","linear-gradient(#fff, #fff)")]);function A(u,f){r.functional(u,v=>{if(v.value){if(v.value.kind==="arbitrary"){let T=v.value.value;switch(v.value.dataType??ae(T,["length","percentage","color"])){case"color":return T=se(T,v.modifier,e),T===null?void 0:f.color(T);case"percentage":return v.modifier||!D(T.slice(0,-1))?void 0:f.position(T);default:return v.modifier?void 0:f.position(T)}}{let T=fe(v,e,["--background-color","--color"]);if(T)return f.color(T)}{if(v.modifier)return;let T=ae(v.value.value,["number","percentage"]);if(!T)return;switch(T){case"number":{let $=e.resolve(null,["--spacing"]);return!$||!pe(v.value.value)?void 0:f.position(`calc(${$} * ${v.value.value})`)}case"percentage":return D(v.value.value.slice(0,-1))?f.position(v.value.value):void 0;default:return}}}}),o(u,()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--background-color","--color"],modifiers:Array.from({length:21},(v,T)=>`${T*5}`)},{values:Array.from({length:21},(v,T)=>`${T*5}%`),valueThemeKeys:["--gradient-color-stop-positions"]}]),o(u,()=>[{values:Array.from({length:21},(v,T)=>`${T*5}%`)},{values:e.get(["--spacing"])?Nt:[]},{values:["current","inherit","transparent"],valueThemeKeys:["--background-color","--color"],modifiers:Array.from({length:21},(v,T)=>`${T*5}`)}])}let y=()=>G([P("--tw-mask-left","linear-gradient(#fff, #fff)"),P("--tw-mask-right","linear-gradient(#fff, #fff)"),P("--tw-mask-bottom","linear-gradient(#fff, #fff)"),P("--tw-mask-top","linear-gradient(#fff, #fff)")]);function S(u,f,v){A(u,{color(T){let $=[k(),y(),c("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),c("mask-composite","intersect"),c("--tw-mask-linear","var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")];for(let C of["top","right","bottom","left"])v[C]&&($.push(c(`--tw-mask-${C}`,`linear-gradient(to ${C}, var(--tw-mask-${C}-from-color) var(--tw-mask-${C}-from-position), var(--tw-mask-${C}-to-color) var(--tw-mask-${C}-to-position))`)),$.push(G([P(`--tw-mask-${C}-from-position`,"0%"),P(`--tw-mask-${C}-to-position`,"100%"),P(`--tw-mask-${C}-from-color`,"black"),P(`--tw-mask-${C}-to-color`,"transparent")])),$.push(c(`--tw-mask-${C}-${f}-color`,T)));return $},position(T){let $=[k(),y(),c("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),c("mask-composite","intersect"),c("--tw-mask-linear","var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")];for(let C of["top","right","bottom","left"])v[C]&&($.push(c(`--tw-mask-${C}`,`linear-gradient(to ${C}, var(--tw-mask-${C}-from-color) var(--tw-mask-${C}-from-position), var(--tw-mask-${C}-to-color) var(--tw-mask-${C}-to-position))`)),$.push(G([P(`--tw-mask-${C}-from-position`,"0%"),P(`--tw-mask-${C}-to-position`,"100%"),P(`--tw-mask-${C}-from-color`,"black"),P(`--tw-mask-${C}-to-color`,"transparent")])),$.push(c(`--tw-mask-${C}-${f}-position`,T)));return $}})}S("mask-x-from","from",{top:!1,right:!0,bottom:!1,left:!0}),S("mask-x-to","to",{top:!1,right:!0,bottom:!1,left:!0}),S("mask-y-from","from",{top:!0,right:!1,bottom:!0,left:!1}),S("mask-y-to","to",{top:!0,right:!1,bottom:!0,left:!1}),S("mask-t-from","from",{top:!0,right:!1,bottom:!1,left:!1}),S("mask-t-to","to",{top:!0,right:!1,bottom:!1,left:!1}),S("mask-r-from","from",{top:!1,right:!0,bottom:!1,left:!1}),S("mask-r-to","to",{top:!1,right:!0,bottom:!1,left:!1}),S("mask-b-from","from",{top:!1,right:!1,bottom:!0,left:!1}),S("mask-b-to","to",{top:!1,right:!1,bottom:!0,left:!1}),S("mask-l-from","from",{top:!1,right:!1,bottom:!1,left:!0}),S("mask-l-to","to",{top:!1,right:!1,bottom:!1,left:!0});let x=()=>G([P("--tw-mask-linear-position","0deg"),P("--tw-mask-linear-from-position","0%"),P("--tw-mask-linear-to-position","100%"),P("--tw-mask-linear-from-color","black"),P("--tw-mask-linear-to-color","transparent")]);n("mask-linear",{defaultValue:null,supportsNegative:!0,supportsFractions:!1,handleBareValue(u){return D(u.value)?`calc(1deg * ${u.value})`:null},handleNegativeBareValue(u){return D(u.value)?`calc(1deg * -${u.value})`:null},handle:u=>[k(),x(),c("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),c("mask-composite","intersect"),c("--tw-mask-linear","linear-gradient(var(--tw-mask-linear-stops, var(--tw-mask-linear-position)))"),c("--tw-mask-linear-position",u)]}),o("mask-linear",()=>[{supportsNegative:!0,values:["0","1","2","3","6","12","45","90","180"]}]),A("mask-linear-from",{color:u=>[k(),x(),c("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),c("mask-composite","intersect"),c("--tw-mask-linear-stops","var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),c("--tw-mask-linear","linear-gradient(var(--tw-mask-linear-stops))"),c("--tw-mask-linear-from-color",u)],position:u=>[k(),x(),c("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),c("mask-composite","intersect"),c("--tw-mask-linear-stops","var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),c("--tw-mask-linear","linear-gradient(var(--tw-mask-linear-stops))"),c("--tw-mask-linear-from-position",u)]}),A("mask-linear-to",{color:u=>[k(),x(),c("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),c("mask-composite","intersect"),c("--tw-mask-linear-stops","var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),c("--tw-mask-linear","linear-gradient(var(--tw-mask-linear-stops))"),c("--tw-mask-linear-to-color",u)],position:u=>[k(),x(),c("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),c("mask-composite","intersect"),c("--tw-mask-linear-stops","var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),c("--tw-mask-linear","linear-gradient(var(--tw-mask-linear-stops))"),c("--tw-mask-linear-to-position",u)]});let _=()=>G([P("--tw-mask-radial-from-position","0%"),P("--tw-mask-radial-to-position","100%"),P("--tw-mask-radial-from-color","black"),P("--tw-mask-radial-to-color","transparent"),P("--tw-mask-radial-shape","ellipse"),P("--tw-mask-radial-size","farthest-corner"),P("--tw-mask-radial-position","center")]);t("mask-circle",[["--tw-mask-radial-shape","circle"]]),t("mask-ellipse",[["--tw-mask-radial-shape","ellipse"]]),t("mask-radial-closest-side",[["--tw-mask-radial-size","closest-side"]]),t("mask-radial-farthest-side",[["--tw-mask-radial-size","farthest-side"]]),t("mask-radial-closest-corner",[["--tw-mask-radial-size","closest-corner"]]),t("mask-radial-farthest-corner",[["--tw-mask-radial-size","farthest-corner"]]),t("mask-radial-at-top",[["--tw-mask-radial-position","top"]]),t("mask-radial-at-top-left",[["--tw-mask-radial-position","top left"]]),t("mask-radial-at-top-right",[["--tw-mask-radial-position","top right"]]),t("mask-radial-at-bottom",[["--tw-mask-radial-position","bottom"]]),t("mask-radial-at-bottom-left",[["--tw-mask-radial-position","bottom left"]]),t("mask-radial-at-bottom-right",[["--tw-mask-radial-position","bottom right"]]),t("mask-radial-at-left",[["--tw-mask-radial-position","left"]]),t("mask-radial-at-right",[["--tw-mask-radial-position","right"]]),t("mask-radial-at-center",[["--tw-mask-radial-position","center"]]),n("mask-radial-at",{defaultValue:null,supportsNegative:!1,supportsFractions:!1,handle:u=>[c("--tw-mask-radial-position",u)]}),n("mask-radial",{defaultValue:null,supportsNegative:!1,supportsFractions:!1,handle:u=>[k(),_(),c("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),c("mask-composite","intersect"),c("--tw-mask-radial","radial-gradient(var(--tw-mask-radial-stops, var(--tw-mask-radial-size)))"),c("--tw-mask-radial-size",u)]}),A("mask-radial-from",{color:u=>[k(),_(),c("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),c("mask-composite","intersect"),c("--tw-mask-radial-stops","var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),c("--tw-mask-radial","radial-gradient(var(--tw-mask-radial-stops))"),c("--tw-mask-radial-from-color",u)],position:u=>[k(),_(),c("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),c("mask-composite","intersect"),c("--tw-mask-radial-stops","var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),c("--tw-mask-radial","radial-gradient(var(--tw-mask-radial-stops))"),c("--tw-mask-radial-from-position",u)]}),A("mask-radial-to",{color:u=>[k(),_(),c("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),c("mask-composite","intersect"),c("--tw-mask-radial-stops","var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),c("--tw-mask-radial","radial-gradient(var(--tw-mask-radial-stops))"),c("--tw-mask-radial-to-color",u)],position:u=>[k(),_(),c("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),c("mask-composite","intersect"),c("--tw-mask-radial-stops","var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),c("--tw-mask-radial","radial-gradient(var(--tw-mask-radial-stops))"),c("--tw-mask-radial-to-position",u)]});let O=()=>G([P("--tw-mask-conic-position","0deg"),P("--tw-mask-conic-from-position","0%"),P("--tw-mask-conic-to-position","100%"),P("--tw-mask-conic-from-color","black"),P("--tw-mask-conic-to-color","transparent")]);n("mask-conic",{defaultValue:null,supportsNegative:!0,supportsFractions:!1,handleBareValue(u){return D(u.value)?`calc(1deg * ${u.value})`:null},handleNegativeBareValue(u){return D(u.value)?`calc(1deg * -${u.value})`:null},handle:u=>[k(),O(),c("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),c("mask-composite","intersect"),c("--tw-mask-conic","conic-gradient(var(--tw-mask-conic-stops, var(--tw-mask-conic-position)))"),c("--tw-mask-conic-position",u)]}),o("mask-conic",()=>[{supportsNegative:!0,values:["0","1","2","3","6","12","45","90","180"]}]),A("mask-conic-from",{color:u=>[k(),O(),c("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),c("mask-composite","intersect"),c("--tw-mask-conic-stops","from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),c("--tw-mask-conic","conic-gradient(var(--tw-mask-conic-stops))"),c("--tw-mask-conic-from-color",u)],position:u=>[k(),O(),c("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),c("mask-composite","intersect"),c("--tw-mask-conic-stops","from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),c("--tw-mask-conic","conic-gradient(var(--tw-mask-conic-stops))"),c("--tw-mask-conic-from-position",u)]}),A("mask-conic-to",{color:u=>[k(),O(),c("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),c("mask-composite","intersect"),c("--tw-mask-conic-stops","from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),c("--tw-mask-conic","conic-gradient(var(--tw-mask-conic-stops))"),c("--tw-mask-conic-to-color",u)],position:u=>[k(),O(),c("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),c("mask-composite","intersect"),c("--tw-mask-conic-stops","from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),c("--tw-mask-conic","conic-gradient(var(--tw-mask-conic-stops))"),c("--tw-mask-conic-to-position",u)]}),t("box-decoration-slice",[["-webkit-box-decoration-break","slice"],["box-decoration-break","slice"]]),t("box-decoration-clone",[["-webkit-box-decoration-break","clone"],["box-decoration-break","clone"]]),t("bg-clip-text",[["background-clip","text"]]),t("bg-clip-border",[["background-clip","border-box"]]),t("bg-clip-padding",[["background-clip","padding-box"]]),t("bg-clip-content",[["background-clip","content-box"]]),t("bg-origin-border",[["background-origin","border-box"]]),t("bg-origin-padding",[["background-origin","padding-box"]]),t("bg-origin-content",[["background-origin","content-box"]]);for(let u of["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"])t(`bg-blend-${u}`,[["background-blend-mode",u]]),t(`mix-blend-${u}`,[["mix-blend-mode",u]]);t("mix-blend-plus-darker",[["mix-blend-mode","plus-darker"]]),t("mix-blend-plus-lighter",[["mix-blend-mode","plus-lighter"]]),t("fill-none",[["fill","none"]]),r.functional("fill",u=>{if(!u.value)return;if(u.value.kind==="arbitrary"){let v=se(u.value.value,u.modifier,e);return v===null?void 0:[c("fill",v)]}let f=fe(u,e,["--fill","--color"]);if(f)return[c("fill",f)]}),o("fill",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--fill","--color"],modifiers:Array.from({length:21},(u,f)=>`${f*5}`)}]),t("stroke-none",[["stroke","none"]]),r.functional("stroke",u=>{if(u.value){if(u.value.kind==="arbitrary"){let f=u.value.value;switch(u.value.dataType??ae(f,["color","number","length","percentage"])){case"number":case"length":case"percentage":return u.modifier?void 0:[c("stroke-width",f)];default:return f=se(u.value.value,u.modifier,e),f===null?void 0:[c("stroke",f)]}}{let f=fe(u,e,["--stroke","--color"]);if(f)return[c("stroke",f)]}{let f=e.resolve(u.value.value,["--stroke-width"]);if(f)return[c("stroke-width",f)];if(D(u.value.value))return[c("stroke-width",u.value.value)]}}}),o("stroke",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--stroke","--color"],modifiers:Array.from({length:21},(u,f)=>`${f*5}`)},{values:["0","1","2","3"],valueThemeKeys:["--stroke-width"]}]),t("object-contain",[["object-fit","contain"]]),t("object-cover",[["object-fit","cover"]]),t("object-fill",[["object-fit","fill"]]),t("object-none",[["object-fit","none"]]),t("object-scale-down",[["object-fit","scale-down"]]),n("object",{themeKeys:["--object-position"],handle:u=>[c("object-position",u)],staticValues:{top:[c("object-position","top")],"top-left":[c("object-position","left top")],"top-right":[c("object-position","right top")],bottom:[c("object-position","bottom")],"bottom-left":[c("object-position","left bottom")],"bottom-right":[c("object-position","right bottom")],left:[c("object-position","left")],right:[c("object-position","right")],center:[c("object-position","center")]}});for(let[u,f]of[["p","padding"],["px","padding-inline"],["py","padding-block"],["ps","padding-inline-start"],["pe","padding-inline-end"],["pbs","padding-block-start"],["pbe","padding-block-end"],["pt","padding-top"],["pr","padding-right"],["pb","padding-bottom"],["pl","padding-left"]])i(u,["--padding","--spacing"],v=>[c(f,v)]);t("text-left",[["text-align","left"]]),t("text-center",[["text-align","center"]]),t("text-right",[["text-align","right"]]),t("text-justify",[["text-align","justify"]]),t("text-start",[["text-align","start"]]),t("text-end",[["text-align","end"]]),i("indent",["--text-indent","--spacing"],u=>[c("text-indent",u)],{supportsNegative:!0}),t("align-baseline",[["vertical-align","baseline"]]),t("align-top",[["vertical-align","top"]]),t("align-middle",[["vertical-align","middle"]]),t("align-bottom",[["vertical-align","bottom"]]),t("align-text-top",[["vertical-align","text-top"]]),t("align-text-bottom",[["vertical-align","text-bottom"]]),t("align-sub",[["vertical-align","sub"]]),t("align-super",[["vertical-align","super"]]),n("align",{themeKeys:[],handle:u=>[c("vertical-align",u)]}),r.functional("font",u=>{if(!(!u.value||u.modifier)){if(u.value.kind==="arbitrary"){let f=u.value.value;switch(u.value.dataType??ae(f,["number","generic-name","family-name"])){case"generic-name":case"family-name":return[c("font-family",f)];default:return[G([P("--tw-font-weight")]),c("--tw-font-weight",f),c("font-weight",f)]}}{let f=e.resolveWith(u.value.value,["--font"],["--font-feature-settings","--font-variation-settings"]);if(f){let[v,T={}]=f;return[c("font-family",v),c("font-feature-settings",T["--font-feature-settings"]),c("font-variation-settings",T["--font-variation-settings"])]}}{let f=e.resolve(u.value.value,["--font-weight"]);if(f)return[G([P("--tw-font-weight")]),c("--tw-font-weight",f),c("font-weight",f)]}}}),o("font",()=>[{values:[],valueThemeKeys:["--font"]},{values:[],valueThemeKeys:["--font-weight"]}]),n("font-features",{themeKeys:[],handle:u=>[c("font-feature-settings",u)]}),t("uppercase",[["text-transform","uppercase"]]),t("lowercase",[["text-transform","lowercase"]]),t("capitalize",[["text-transform","capitalize"]]),t("normal-case",[["text-transform","none"]]),t("italic",[["font-style","italic"]]),t("not-italic",[["font-style","normal"]]),t("underline",[["text-decoration-line","underline"]]),t("overline",[["text-decoration-line","overline"]]),t("line-through",[["text-decoration-line","line-through"]]),t("no-underline",[["text-decoration-line","none"]]),t("font-stretch-normal",[["font-stretch","normal"]]),t("font-stretch-ultra-condensed",[["font-stretch","ultra-condensed"]]),t("font-stretch-extra-condensed",[["font-stretch","extra-condensed"]]),t("font-stretch-condensed",[["font-stretch","condensed"]]),t("font-stretch-semi-condensed",[["font-stretch","semi-condensed"]]),t("font-stretch-semi-expanded",[["font-stretch","semi-expanded"]]),t("font-stretch-expanded",[["font-stretch","expanded"]]),t("font-stretch-extra-expanded",[["font-stretch","extra-expanded"]]),t("font-stretch-ultra-expanded",[["font-stretch","ultra-expanded"]]),n("font-stretch",{handleBareValue:({value:u})=>{if(!u.endsWith("%"))return null;let f=Number(u.slice(0,-1));return!D(f)||Number.isNaN(f)||f<50||f>200?null:u},handle:u=>[c("font-stretch",u)]}),o("font-stretch",()=>[{values:["50%","75%","90%","95%","100%","105%","110%","125%","150%","200%"]}]),s("placeholder",{themeKeys:["--background-color","--color"],handle:u=>[X("&::placeholder",[c("--tw-sort","placeholder-color"),c("color",u)])]}),t("decoration-solid",[["text-decoration-style","solid"]]),t("decoration-double",[["text-decoration-style","double"]]),t("decoration-dotted",[["text-decoration-style","dotted"]]),t("decoration-dashed",[["text-decoration-style","dashed"]]),t("decoration-wavy",[["text-decoration-style","wavy"]]),t("decoration-auto",[["text-decoration-thickness","auto"]]),t("decoration-from-font",[["text-decoration-thickness","from-font"]]),r.functional("decoration",u=>{if(u.value){if(u.value.kind==="arbitrary"){let f=u.value.value;switch(u.value.dataType??ae(f,["color","length","percentage"])){case"length":case"percentage":return u.modifier?void 0:[c("text-decoration-thickness",f)];default:return f=se(f,u.modifier,e),f===null?void 0:[c("text-decoration-color",f)]}}{let f=e.resolve(u.value.value,["--text-decoration-thickness"]);if(f)return u.modifier?void 0:[c("text-decoration-thickness",f)];if(D(u.value.value))return u.modifier?void 0:[c("text-decoration-thickness",`${u.value.value}px`)]}{let f=fe(u,e,["--text-decoration-color","--color"]);if(f)return[c("text-decoration-color",f)]}}}),o("decoration",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--text-decoration-color","--color"],modifiers:Array.from({length:21},(u,f)=>`${f*5}`)},{values:["0","1","2"],valueThemeKeys:["--text-decoration-thickness"]}]),n("animate",{themeKeys:["--animate"],handle:u=>[c("animation",u)],staticValues:{none:[c("animation","none")]}});{let u=["var(--tw-blur,)","var(--tw-brightness,)","var(--tw-contrast,)","var(--tw-grayscale,)","var(--tw-hue-rotate,)","var(--tw-invert,)","var(--tw-saturate,)","var(--tw-sepia,)","var(--tw-drop-shadow,)"].join(" "),f=["var(--tw-backdrop-blur,)","var(--tw-backdrop-brightness,)","var(--tw-backdrop-contrast,)","var(--tw-backdrop-grayscale,)","var(--tw-backdrop-hue-rotate,)","var(--tw-backdrop-invert,)","var(--tw-backdrop-opacity,)","var(--tw-backdrop-saturate,)","var(--tw-backdrop-sepia,)"].join(" "),v=()=>G([P("--tw-blur"),P("--tw-brightness"),P("--tw-contrast"),P("--tw-grayscale"),P("--tw-hue-rotate"),P("--tw-invert"),P("--tw-opacity"),P("--tw-saturate"),P("--tw-sepia"),P("--tw-drop-shadow"),P("--tw-drop-shadow-color"),P("--tw-drop-shadow-alpha","100%","<percentage>"),P("--tw-drop-shadow-size")]),T=()=>G([P("--tw-backdrop-blur"),P("--tw-backdrop-brightness"),P("--tw-backdrop-contrast"),P("--tw-backdrop-grayscale"),P("--tw-backdrop-hue-rotate"),P("--tw-backdrop-invert"),P("--tw-backdrop-opacity"),P("--tw-backdrop-saturate"),P("--tw-backdrop-sepia")]);r.functional("filter",$=>{if(!$.modifier){if($.value===null)return[v(),c("filter",u)];if($.value.kind==="arbitrary")return[c("filter",$.value.value)];if($.value.value==="none")return[c("filter","none")]}}),r.functional("backdrop-filter",$=>{if(!$.modifier){if($.value===null)return[T(),c("-webkit-backdrop-filter",f),c("backdrop-filter",f)];if($.value.kind==="arbitrary")return[c("-webkit-backdrop-filter",$.value.value),c("backdrop-filter",$.value.value)];if($.value.value==="none")return[c("-webkit-backdrop-filter","none"),c("backdrop-filter","none")]}}),n("blur",{themeKeys:["--blur"],handle:$=>[v(),c("--tw-blur",`blur(${$})`),c("filter",u)],staticValues:{none:[v(),c("--tw-blur"," "),c("filter",u)]}}),n("backdrop-blur",{themeKeys:["--backdrop-blur","--blur"],handle:$=>[T(),c("--tw-backdrop-blur",`blur(${$})`),c("-webkit-backdrop-filter",f),c("backdrop-filter",f)],staticValues:{none:[T(),c("--tw-backdrop-blur"," "),c("-webkit-backdrop-filter",f),c("backdrop-filter",f)]}}),n("brightness",{themeKeys:["--brightness"],handleBareValue:({value:$})=>D($)?`${$}%`:null,handle:$=>[v(),c("--tw-brightness",`brightness(${$})`),c("filter",u)]}),n("backdrop-brightness",{themeKeys:["--backdrop-brightness","--brightness"],handleBareValue:({value:$})=>D($)?`${$}%`:null,handle:$=>[T(),c("--tw-backdrop-brightness",`brightness(${$})`),c("-webkit-backdrop-filter",f),c("backdrop-filter",f)]}),o("brightness",()=>[{values:["0","50","75","90","95","100","105","110","125","150","200"],valueThemeKeys:["--brightness"]}]),o("backdrop-brightness",()=>[{values:["0","50","75","90","95","100","105","110","125","150","200"],valueThemeKeys:["--backdrop-brightness","--brightness"]}]),n("contrast",{themeKeys:["--contrast"],handleBareValue:({value:$})=>D($)?`${$}%`:null,handle:$=>[v(),c("--tw-contrast",`contrast(${$})`),c("filter",u)]}),n("backdrop-contrast",{themeKeys:["--backdrop-contrast","--contrast"],handleBareValue:({value:$})=>D($)?`${$}%`:null,handle:$=>[T(),c("--tw-backdrop-contrast",`contrast(${$})`),c("-webkit-backdrop-filter",f),c("backdrop-filter",f)]}),o("contrast",()=>[{values:["0","50","75","100","125","150","200"],valueThemeKeys:["--contrast"]}]),o("backdrop-contrast",()=>[{values:["0","50","75","100","125","150","200"],valueThemeKeys:["--backdrop-contrast","--contrast"]}]),n("grayscale",{themeKeys:["--grayscale"],handleBareValue:({value:$})=>D($)?`${$}%`:null,defaultValue:"100%",handle:$=>[v(),c("--tw-grayscale",`grayscale(${$})`),c("filter",u)]}),n("backdrop-grayscale",{themeKeys:["--backdrop-grayscale","--grayscale"],handleBareValue:({value:$})=>D($)?`${$}%`:null,defaultValue:"100%",handle:$=>[T(),c("--tw-backdrop-grayscale",`grayscale(${$})`),c("-webkit-backdrop-filter",f),c("backdrop-filter",f)]}),o("grayscale",()=>[{values:["0","25","50","75","100"],valueThemeKeys:["--grayscale"],hasDefaultValue:!0}]),o("backdrop-grayscale",()=>[{values:["0","25","50","75","100"],valueThemeKeys:["--backdrop-grayscale","--grayscale"],hasDefaultValue:!0}]),n("hue-rotate",{supportsNegative:!0,themeKeys:["--hue-rotate"],handleBareValue:({value:$})=>D($)?`${$}deg`:null,handle:$=>[v(),c("--tw-hue-rotate",`hue-rotate(${$})`),c("filter",u)]}),n("backdrop-hue-rotate",{supportsNegative:!0,themeKeys:["--backdrop-hue-rotate","--hue-rotate"],handleBareValue:({value:$})=>D($)?`${$}deg`:null,handle:$=>[T(),c("--tw-backdrop-hue-rotate",`hue-rotate(${$})`),c("-webkit-backdrop-filter",f),c("backdrop-filter",f)]}),o("hue-rotate",()=>[{values:["0","15","30","60","90","180"],valueThemeKeys:["--hue-rotate"]}]),o("backdrop-hue-rotate",()=>[{values:["0","15","30","60","90","180"],valueThemeKeys:["--backdrop-hue-rotate","--hue-rotate"]}]),n("invert",{themeKeys:["--invert"],handleBareValue:({value:$})=>D($)?`${$}%`:null,defaultValue:"100%",handle:$=>[v(),c("--tw-invert",`invert(${$})`),c("filter",u)]}),n("backdrop-invert",{themeKeys:["--backdrop-invert","--invert"],handleBareValue:({value:$})=>D($)?`${$}%`:null,defaultValue:"100%",handle:$=>[T(),c("--tw-backdrop-invert",`invert(${$})`),c("-webkit-backdrop-filter",f),c("backdrop-filter",f)]}),o("invert",()=>[{values:["0","25","50","75","100"],valueThemeKeys:["--invert"],hasDefaultValue:!0}]),o("backdrop-invert",()=>[{values:["0","25","50","75","100"],valueThemeKeys:["--backdrop-invert","--invert"],hasDefaultValue:!0}]),n("saturate",{themeKeys:["--saturate"],handleBareValue:({value:$})=>D($)?`${$}%`:null,handle:$=>[v(),c("--tw-saturate",`saturate(${$})`),c("filter",u)]}),n("backdrop-saturate",{themeKeys:["--backdrop-saturate","--saturate"],handleBareValue:({value:$})=>D($)?`${$}%`:null,handle:$=>[T(),c("--tw-backdrop-saturate",`saturate(${$})`),c("-webkit-backdrop-filter",f),c("backdrop-filter",f)]}),o("saturate",()=>[{values:["0","50","100","150","200"],valueThemeKeys:["--saturate"]}]),o("backdrop-saturate",()=>[{values:["0","50","100","150","200"],valueThemeKeys:["--backdrop-saturate","--saturate"]}]),n("sepia",{themeKeys:["--sepia"],handleBareValue:({value:$})=>D($)?`${$}%`:null,defaultValue:"100%",handle:$=>[v(),c("--tw-sepia",`sepia(${$})`),c("filter",u)]}),n("backdrop-sepia",{themeKeys:["--backdrop-sepia","--sepia"],handleBareValue:({value:$})=>D($)?`${$}%`:null,defaultValue:"100%",handle:$=>[T(),c("--tw-backdrop-sepia",`sepia(${$})`),c("-webkit-backdrop-filter",f),c("backdrop-filter",f)]}),o("sepia",()=>[{values:["0","50","100"],valueThemeKeys:["--sepia"],hasDefaultValue:!0}]),o("backdrop-sepia",()=>[{values:["0","50","100"],valueThemeKeys:["--backdrop-sepia","--sepia"],hasDefaultValue:!0}]),t("drop-shadow-none",[v,["--tw-drop-shadow"," "],["filter",u]]),r.functional("drop-shadow",$=>{let C;if($.modifier&&($.modifier.kind==="arbitrary"?C=$.modifier.value:D($.modifier.value)&&(C=`${$.modifier.value}%`)),!$.value){let j=e.get(["--drop-shadow"]),z=e.resolve(null,["--drop-shadow"]);return j===null||z===null?void 0:[v(),c("--tw-drop-shadow-alpha",C),...Pt("--tw-drop-shadow-size",j,C,F=>`var(--tw-drop-shadow-color, ${F})`),c("--tw-drop-shadow",W(z,",").map(F=>`drop-shadow(${F})`).join(" ")),c("filter",u)]}if($.value.kind==="arbitrary"){let j=$.value.value;return($.value.dataType??ae(j,["color"]))==="color"?(j=se(j,$.modifier,e),j===null?void 0:[v(),c("--tw-drop-shadow-color",de(j,"var(--tw-drop-shadow-alpha)")),c("--tw-drop-shadow","var(--tw-drop-shadow-size)")]):$.modifier&&!C?void 0:[v(),c("--tw-drop-shadow-alpha",C),...Pt("--tw-drop-shadow-size",j,C,z=>`var(--tw-drop-shadow-color, ${z})`),c("--tw-drop-shadow","var(--tw-drop-shadow-size)"),c("filter",u)]}{let j=e.get([`--drop-shadow-${$.value.value}`]),z=e.resolve($.value.value,["--drop-shadow"]);if(j&&z)return $.modifier&&!C?void 0:C?[v(),c("--tw-drop-shadow-alpha",C),...Pt("--tw-drop-shadow-size",j,C,F=>`var(--tw-drop-shadow-color, ${F})`),c("--tw-drop-shadow","var(--tw-drop-shadow-size)"),c("filter",u)]:[v(),c("--tw-drop-shadow-alpha",C),...Pt("--tw-drop-shadow-size",j,C,F=>`var(--tw-drop-shadow-color, ${F})`),c("--tw-drop-shadow",W(z,",").map(F=>`drop-shadow(${F})`).join(" ")),c("filter",u)]}{let j=fe($,e,["--drop-shadow-color","--color"]);if(j)return j==="inherit"?[v(),c("--tw-drop-shadow-color","inherit"),c("--tw-drop-shadow","var(--tw-drop-shadow-size)")]:[v(),c("--tw-drop-shadow-color",de(j,"var(--tw-drop-shadow-alpha)")),c("--tw-drop-shadow","var(--tw-drop-shadow-size)")]}}),o("drop-shadow",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--drop-shadow-color","--color"],modifiers:Array.from({length:21},($,C)=>`${C*5}`)},{valueThemeKeys:["--drop-shadow"]}]),n("backdrop-opacity",{themeKeys:["--backdrop-opacity","--opacity"],handleBareValue:({value:$})=>nr($)?`${$}%`:null,handle:$=>[T(),c("--tw-backdrop-opacity",`opacity(${$})`),c("-webkit-backdrop-filter",f),c("backdrop-filter",f)]}),o("backdrop-opacity",()=>[{values:Array.from({length:21},($,C)=>`${C*5}`),valueThemeKeys:["--backdrop-opacity","--opacity"]}])}{let u=`var(--tw-ease, ${e.resolve(null,["--default-transition-timing-function"])??"ease"})`,f=`var(--tw-duration, ${e.resolve(null,["--default-transition-duration"])??"0s"})`;n("transition",{defaultValue:"color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events",themeKeys:["--transition-property"],handle:v=>[c("transition-property",v),c("transition-timing-function",u),c("transition-duration",f)],staticValues:{none:[c("transition-property","none")],all:[c("transition-property","all"),c("transition-timing-function",u),c("transition-duration",f)],colors:[c("transition-property","color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to"),c("transition-timing-function",u),c("transition-duration",f)],opacity:[c("transition-property","opacity"),c("transition-timing-function",u),c("transition-duration",f)],shadow:[c("transition-property","box-shadow"),c("transition-timing-function",u),c("transition-duration",f)],transform:[c("transition-property","transform, translate, scale, rotate"),c("transition-timing-function",u),c("transition-duration",f)]}}),t("transition-discrete",[["transition-behavior","allow-discrete"]]),t("transition-normal",[["transition-behavior","normal"]]),n("delay",{handleBareValue:({value:v})=>D(v)?`${v}ms`:null,themeKeys:["--transition-delay"],handle:v=>[c("transition-delay",v)]});{let v=()=>G([P("--tw-duration")]);t("duration-initial",[v,["--tw-duration","initial"]]),r.functional("duration",T=>{if(T.modifier||!T.value)return;let $=null;if(T.value.kind==="arbitrary"?$=T.value.value:($=e.resolve(T.value.fraction??T.value.value,["--transition-duration"]),$===null&&D(T.value.value)&&($=`${T.value.value}ms`)),$!==null)return[v(),c("--tw-duration",$),c("transition-duration",$)]})}o("delay",()=>[{values:["75","100","150","200","300","500","700","1000"],valueThemeKeys:["--transition-delay"]}]),o("duration",()=>[{values:["75","100","150","200","300","500","700","1000"],valueThemeKeys:["--transition-duration"]}])}{let u=()=>G([P("--tw-ease")]);n("ease",{themeKeys:["--ease"],handle:f=>[u(),c("--tw-ease",f),c("transition-timing-function",f)],staticValues:{initial:[u(),c("--tw-ease","initial")],linear:[u(),c("--tw-ease","linear"),c("transition-timing-function","linear")]}})}t("will-change-auto",[["will-change","auto"]]),t("will-change-scroll",[["will-change","scroll-position"]]),t("will-change-contents",[["will-change","contents"]]),t("will-change-transform",[["will-change","transform"]]),n("will-change",{themeKeys:[],handle:u=>[c("will-change",u)]}),t("content-none",[["--tw-content","none"],["content","none"]]),n("content",{themeKeys:["--content"],handle:u=>[G([P("--tw-content",'""')]),c("--tw-content",u),c("content","var(--tw-content)")]});{let u="var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,)",f=()=>G([P("--tw-contain-size"),P("--tw-contain-layout"),P("--tw-contain-paint"),P("--tw-contain-style")]);t("contain-none",[["contain","none"]]),t("contain-content",[["contain","content"]]),t("contain-strict",[["contain","strict"]]),t("contain-size",[f,["--tw-contain-size","size"],["contain",u]]),t("contain-inline-size",[f,["--tw-contain-size","inline-size"],["contain",u]]),t("contain-layout",[f,["--tw-contain-layout","layout"],["contain",u]]),t("contain-paint",[f,["--tw-contain-paint","paint"],["contain",u]]),t("contain-style",[f,["--tw-contain-style","style"],["contain",u]]),n("contain",{themeKeys:[],handle:v=>[c("contain",v)]})}t("forced-color-adjust-none",[["forced-color-adjust","none"]]),t("forced-color-adjust-auto",[["forced-color-adjust","auto"]]),i("leading",["--leading","--spacing"],u=>[G([P("--tw-leading")]),c("--tw-leading",u),c("line-height",u)],{staticValues:{none:[G([P("--tw-leading")]),c("--tw-leading","1"),c("line-height","1")]}}),n("tracking",{supportsNegative:!0,themeKeys:["--tracking"],handle:u=>[G([P("--tw-tracking")]),c("--tw-tracking",u),c("letter-spacing",u)]}),t("antialiased",[["-webkit-font-smoothing","antialiased"],["-moz-osx-font-smoothing","grayscale"]]),t("subpixel-antialiased",[["-webkit-font-smoothing","auto"],["-moz-osx-font-smoothing","auto"]]);{let u="var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)",f=()=>G([P("--tw-ordinal"),P("--tw-slashed-zero"),P("--tw-numeric-figure"),P("--tw-numeric-spacing"),P("--tw-numeric-fraction")]);t("normal-nums",[["font-variant-numeric","normal"]]),t("ordinal",[f,["--tw-ordinal","ordinal"],["font-variant-numeric",u]]),t("slashed-zero",[f,["--tw-slashed-zero","slashed-zero"],["font-variant-numeric",u]]),t("lining-nums",[f,["--tw-numeric-figure","lining-nums"],["font-variant-numeric",u]]),t("oldstyle-nums",[f,["--tw-numeric-figure","oldstyle-nums"],["font-variant-numeric",u]]),t("proportional-nums",[f,["--tw-numeric-spacing","proportional-nums"],["font-variant-numeric",u]]),t("tabular-nums",[f,["--tw-numeric-spacing","tabular-nums"],["font-variant-numeric",u]]),t("diagonal-fractions",[f,["--tw-numeric-fraction","diagonal-fractions"],["font-variant-numeric",u]]),t("stacked-fractions",[f,["--tw-numeric-fraction","stacked-fractions"],["font-variant-numeric",u]])}{let u=()=>G([P("--tw-outline-style","solid")]);r.static("outline-hidden",()=>[c("--tw-outline-style","none"),c("outline-style","none"),J("@media","(forced-colors: active)",[c("outline","2px solid transparent"),c("outline-offset","2px")])]),t("outline-none",[["--tw-outline-style","none"],["outline-style","none"]]),t("outline-solid",[["--tw-outline-style","solid"],["outline-style","solid"]]),t("outline-dashed",[["--tw-outline-style","dashed"],["outline-style","dashed"]]),t("outline-dotted",[["--tw-outline-style","dotted"],["outline-style","dotted"]]),t("outline-double",[["--tw-outline-style","double"],["outline-style","double"]]),r.functional("outline",f=>{if(f.value===null){if(f.modifier)return;let v=e.get(["--default-outline-width"])??"1px";return[u(),c("outline-style","var(--tw-outline-style)"),c("outline-width",v)]}if(f.value.kind==="arbitrary"){let v=f.value.value;switch(f.value.dataType??ae(v,["color","length","number","percentage"])){case"length":case"number":case"percentage":return f.modifier?void 0:[u(),c("outline-style","var(--tw-outline-style)"),c("outline-width",v)];default:return v=se(v,f.modifier,e),v===null?void 0:[c("outline-color",v)]}}{let v=fe(f,e,["--outline-color","--color"]);if(v)return[c("outline-color",v)]}{if(f.modifier)return;let v=e.resolve(f.value.value,["--outline-width"]);if(v)return[u(),c("outline-style","var(--tw-outline-style)"),c("outline-width",v)];if(D(f.value.value))return[u(),c("outline-style","var(--tw-outline-style)"),c("outline-width",`${f.value.value}px`)]}}),o("outline",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--outline-color","--color"],modifiers:Array.from({length:21},(f,v)=>`${v*5}`),hasDefaultValue:!0},{values:["0","1","2","4","8"],valueThemeKeys:["--outline-width"]}]),n("outline-offset",{supportsNegative:!0,themeKeys:["--outline-offset"],handleBareValue:({value:f})=>D(f)?`${f}px`:null,handle:f=>[c("outline-offset",f)]}),o("outline-offset",()=>[{supportsNegative:!0,values:["0","1","2","4","8"],valueThemeKeys:["--outline-offset"]}])}n("opacity",{themeKeys:["--opacity"],handleBareValue:({value:u})=>nr(u)?`${u}%`:null,handle:u=>[c("opacity",u)]}),o("opacity",()=>[{values:Array.from({length:21},(u,f)=>`${f*5}`),valueThemeKeys:["--opacity"]}]),n("underline-offset",{supportsNegative:!0,themeKeys:["--text-underline-offset"],handleBareValue:({value:u})=>D(u)?`${u}px`:null,handle:u=>[c("text-underline-offset",u)],staticValues:{auto:[c("text-underline-offset","auto")]}}),o("underline-offset",()=>[{supportsNegative:!0,values:["0","1","2","4","8"],valueThemeKeys:["--text-underline-offset"]}]),r.functional("text",u=>{if(u.value){if(u.value.kind==="arbitrary"){let f=u.value.value;switch(u.value.dataType??ae(f,["color","length","percentage","absolute-size","relative-size"])){case"size":case"length":case"percentage":case"absolute-size":case"relative-size":if(u.modifier){let v=u.modifier.kind==="arbitrary"?u.modifier.value:e.resolve(u.modifier.value,["--leading"]);if(!v&&pe(u.modifier.value)){let T=e.resolve(null,["--spacing"]);if(!T)return null;v=`calc(${T} * ${u.modifier.value})`}return!v&&u.modifier.value==="none"&&(v="1"),v?[c("font-size",f),c("line-height",v)]:null}return[c("font-size",f)];default:return f=se(f,u.modifier,e),f===null?void 0:[c("color",f)]}}{let f=fe(u,e,["--text-color","--color"]);if(f)return[c("color",f)]}{let f=e.resolveWith(u.value.value,["--text"],["--line-height","--letter-spacing","--font-weight"]);if(f){let[v,T={}]=Array.isArray(f)?f:[f];if(u.modifier){let $=u.modifier.kind==="arbitrary"?u.modifier.value:e.resolve(u.modifier.value,["--leading"]);if(!$&&pe(u.modifier.value)){let j=e.resolve(null,["--spacing"]);if(!j)return null;$=`calc(${j} * ${u.modifier.value})`}if(!$&&u.modifier.value==="none"&&($="1"),!$)return null;let C=[c("font-size",v)];return $&&C.push(c("line-height",$)),C}return typeof T=="string"?[c("font-size",v),c("line-height",T)]:[c("font-size",v),c("line-height",T["--line-height"]?`var(--tw-leading, ${T["--line-height"]})`:void 0),c("letter-spacing",T["--letter-spacing"]?`var(--tw-tracking, ${T["--letter-spacing"]})`:void 0),c("font-weight",T["--font-weight"]?`var(--tw-font-weight, ${T["--font-weight"]})`:void 0)]}}}}),o("text",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--text-color","--color"],modifiers:Array.from({length:21},(u,f)=>`${f*5}`)},{values:[],valueThemeKeys:["--text"],modifiers:[],modifierThemeKeys:["--leading"]}]);let E=()=>G([P("--tw-text-shadow-color"),P("--tw-text-shadow-alpha","100%","<percentage>")]);t("text-shadow-initial",[E,["--tw-text-shadow-color","initial"]]),r.functional("text-shadow",u=>{let f;if(u.modifier&&(u.modifier.kind==="arbitrary"?f=u.modifier.value:D(u.modifier.value)&&(f=`${u.modifier.value}%`)),!u.value){let v=e.get(["--text-shadow"]);return v===null?void 0:[E(),c("--tw-text-shadow-alpha",f),...Fe("text-shadow",v,f,T=>`var(--tw-text-shadow-color, ${T})`)]}if(u.value.kind==="arbitrary"){let v=u.value.value;return(u.value.dataType??ae(v,["color"]))==="color"?(v=se(v,u.modifier,e),v===null?void 0:[E(),c("--tw-text-shadow-color",de(v,"var(--tw-text-shadow-alpha)"))]):[E(),c("--tw-text-shadow-alpha",f),...Fe("text-shadow",v,f,T=>`var(--tw-text-shadow-color, ${T})`)]}switch(u.value.value){case"none":return u.modifier?void 0:[E(),c("text-shadow","none")];case"inherit":return u.modifier?void 0:[E(),c("--tw-text-shadow-color","inherit")]}{let v=e.get([`--text-shadow-${u.value.value}`]);if(v)return[E(),c("--tw-text-shadow-alpha",f),...Fe("text-shadow",v,f,T=>`var(--tw-text-shadow-color, ${T})`)]}{let v=fe(u,e,["--text-shadow-color","--color"]);if(v)return[E(),c("--tw-text-shadow-color",de(v,"var(--tw-text-shadow-alpha)"))]}}),o("text-shadow",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--text-shadow-color","--color"],modifiers:Array.from({length:21},(u,f)=>`${f*5}`)},{values:["none"]},{valueThemeKeys:["--text-shadow"],modifiers:Array.from({length:21},(u,f)=>`${f*5}`),hasDefaultValue:e.get(["--text-shadow"])!==null}]);{let u=function(z){return`var(--tw-ring-inset,) 0 0 0 calc(${z} + var(--tw-ring-offset-width)) var(--tw-ring-color, ${C})`},f=function(z){return`inset 0 0 0 ${z} var(--tw-inset-ring-color, currentcolor)`},v=["var(--tw-inset-shadow)","var(--tw-inset-ring-shadow)","var(--tw-ring-offset-shadow)","var(--tw-ring-shadow)","var(--tw-shadow)"].join(", "),T="0 0 #0000",$=()=>G([P("--tw-shadow",T),P("--tw-shadow-color"),P("--tw-shadow-alpha","100%","<percentage>"),P("--tw-inset-shadow",T),P("--tw-inset-shadow-color"),P("--tw-inset-shadow-alpha","100%","<percentage>"),P("--tw-ring-color"),P("--tw-ring-shadow",T),P("--tw-inset-ring-color"),P("--tw-inset-ring-shadow",T),P("--tw-ring-inset"),P("--tw-ring-offset-width","0px","<length>"),P("--tw-ring-offset-color","#fff"),P("--tw-ring-offset-shadow",T)]);t("shadow-initial",[$,["--tw-shadow-color","initial"]]),r.functional("shadow",z=>{let F;if(z.modifier&&(z.modifier.kind==="arbitrary"?F=z.modifier.value:D(z.modifier.value)&&(F=`${z.modifier.value}%`)),!z.value){let U=e.get(["--shadow"]);return U===null?void 0:[$(),c("--tw-shadow-alpha",F),...Fe("--tw-shadow",U,F,ee=>`var(--tw-shadow-color, ${ee})`),c("box-shadow",v)]}if(z.value.kind==="arbitrary"){let U=z.value.value;return(z.value.dataType??ae(U,["color"]))==="color"?(U=se(U,z.modifier,e),U===null?void 0:[$(),c("--tw-shadow-color",de(U,"var(--tw-shadow-alpha)"))]):[$(),c("--tw-shadow-alpha",F),...Fe("--tw-shadow",U,F,ee=>`var(--tw-shadow-color, ${ee})`),c("box-shadow",v)]}switch(z.value.value){case"none":return z.modifier?void 0:[$(),c("--tw-shadow",T),c("box-shadow",v)];case"inherit":return z.modifier?void 0:[$(),c("--tw-shadow-color","inherit")]}{let U=e.get([`--shadow-${z.value.value}`]);if(U)return[$(),c("--tw-shadow-alpha",F),...Fe("--tw-shadow",U,F,ee=>`var(--tw-shadow-color, ${ee})`),c("box-shadow",v)]}{let U=fe(z,e,["--box-shadow-color","--color"]);if(U)return[$(),c("--tw-shadow-color",de(U,"var(--tw-shadow-alpha)"))]}}),o("shadow",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--box-shadow-color","--color"],modifiers:Array.from({length:21},(z,F)=>`${F*5}`)},{values:["none"]},{valueThemeKeys:["--shadow"],modifiers:Array.from({length:21},(z,F)=>`${F*5}`),hasDefaultValue:e.get(["--shadow"])!==null}]),t("inset-shadow-initial",[$,["--tw-inset-shadow-color","initial"]]),r.functional("inset-shadow",z=>{let F;if(z.modifier&&(z.modifier.kind==="arbitrary"?F=z.modifier.value:D(z.modifier.value)&&(F=`${z.modifier.value}%`)),!z.value){let U=e.get(["--inset-shadow"]);return U===null?void 0:[$(),c("--tw-inset-shadow-alpha",F),...Fe("--tw-inset-shadow",U,F,ee=>`var(--tw-inset-shadow-color, ${ee})`),c("box-shadow",v)]}if(z.value.kind==="arbitrary"){let U=z.value.value;return(z.value.dataType??ae(U,["color"]))==="color"?(U=se(U,z.modifier,e),U===null?void 0:[$(),c("--tw-inset-shadow-color",de(U,"var(--tw-inset-shadow-alpha)"))]):[$(),c("--tw-inset-shadow-alpha",F),...Fe("--tw-inset-shadow",U,F,ee=>`var(--tw-inset-shadow-color, ${ee})`,"inset"),c("box-shadow",v)]}switch(z.value.value){case"none":return z.modifier?void 0:[$(),c("--tw-inset-shadow",T),c("box-shadow",v)];case"inherit":return z.modifier?void 0:[$(),c("--tw-inset-shadow-color","inherit")]}{let U=e.get([`--inset-shadow-${z.value.value}`]);if(U)return[$(),c("--tw-inset-shadow-alpha",F),...Fe("--tw-inset-shadow",U,F,ee=>`var(--tw-inset-shadow-color, ${ee})`),c("box-shadow",v)]}{let U=fe(z,e,["--box-shadow-color","--color"]);if(U)return[$(),c("--tw-inset-shadow-color",de(U,"var(--tw-inset-shadow-alpha)"))]}}),o("inset-shadow",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--box-shadow-color","--color"],modifiers:Array.from({length:21},(z,F)=>`${F*5}`)},{values:["none"]},{valueThemeKeys:["--inset-shadow"],modifiers:Array.from({length:21},(z,F)=>`${F*5}`),hasDefaultValue:e.get(["--inset-shadow"])!==null}]),t("ring-inset",[$,["--tw-ring-inset","inset"]]);let C=e.get(["--default-ring-color"])??"currentcolor";r.functional("ring",z=>{if(!z.value){if(z.modifier)return;let F=e.get(["--default-ring-width"])??"1px";return[$(),c("--tw-ring-shadow",u(F)),c("box-shadow",v)]}if(z.value.kind==="arbitrary"){let F=z.value.value;return(z.value.dataType??ae(F,["color","length"]))==="length"?z.modifier?void 0:[$(),c("--tw-ring-shadow",u(F)),c("box-shadow",v)]:(F=se(F,z.modifier,e),F===null?void 0:[c("--tw-ring-color",F)])}{let F=fe(z,e,["--ring-color","--color"]);if(F)return[c("--tw-ring-color",F)]}{if(z.modifier)return;let F=e.resolve(z.value.value,["--ring-width"]);if(F===null&&D(z.value.value)&&(F=`${z.value.value}px`),F)return[$(),c("--tw-ring-shadow",u(F)),c("box-shadow",v)]}}),o("ring",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--ring-color","--color"],modifiers:Array.from({length:21},(z,F)=>`${F*5}`)},{values:["0","1","2","4","8"],valueThemeKeys:["--ring-width"],hasDefaultValue:!0}]),r.functional("inset-ring",z=>{if(!z.value)return z.modifier?void 0:[$(),c("--tw-inset-ring-shadow",f("1px")),c("box-shadow",v)];if(z.value.kind==="arbitrary"){let F=z.value.value;return(z.value.dataType??ae(F,["color","length"]))==="length"?z.modifier?void 0:[$(),c("--tw-inset-ring-shadow",f(F)),c("box-shadow",v)]:(F=se(F,z.modifier,e),F===null?void 0:[c("--tw-inset-ring-color",F)])}{let F=fe(z,e,["--ring-color","--color"]);if(F)return[c("--tw-inset-ring-color",F)]}{if(z.modifier)return;let F=e.resolve(z.value.value,["--ring-width"]);if(F===null&&D(z.value.value)&&(F=`${z.value.value}px`),F)return[$(),c("--tw-inset-ring-shadow",f(F)),c("box-shadow",v)]}}),o("inset-ring",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--ring-color","--color"],modifiers:Array.from({length:21},(z,F)=>`${F*5}`)},{values:["0","1","2","4","8"],valueThemeKeys:["--ring-width"],hasDefaultValue:!0}]);let j="var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)";r.functional("ring-offset",z=>{if(z.value){if(z.value.kind==="arbitrary"){let F=z.value.value;return(z.value.dataType??ae(F,["color","length"]))==="length"?z.modifier?void 0:[c("--tw-ring-offset-width",F),c("--tw-ring-offset-shadow",j)]:(F=se(F,z.modifier,e),F===null?void 0:[c("--tw-ring-offset-color",F)])}{let F=e.resolve(z.value.value,["--ring-offset-width"]);if(F)return z.modifier?void 0:[c("--tw-ring-offset-width",F),c("--tw-ring-offset-shadow",j)];if(D(z.value.value))return z.modifier?void 0:[c("--tw-ring-offset-width",`${z.value.value}px`),c("--tw-ring-offset-shadow",j)]}{let F=fe(z,e,["--ring-offset-color","--color"]);if(F)return[c("--tw-ring-offset-color",F)]}}})}return o("ring-offset",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--ring-offset-color","--color"],modifiers:Array.from({length:21},(u,f)=>`${f*5}`)},{values:["0","1","2","4","8"],valueThemeKeys:["--ring-offset-width"]}]),r.functional("@container",u=>{let f=null;if(u.value===null?f="inline-size":u.value.kind==="arbitrary"?f=u.value.value:u.value.kind==="named"&&u.value.value==="normal"&&(f="normal"),f!==null)return u.modifier?[c("container-type",f),c("container-name",u.modifier.value)]:[c("container-type",f)]}),o("@container",()=>[{values:["normal"],valueThemeKeys:[],hasDefaultValue:!0}]),r}var kr=["number","integer","ratio","percentage"];function Ri(e){let r=at(e.params);return Ji(r)?o=>{let t={"--value":{usedSpacingInteger:!1,usedSpacingNumber:!1,themeKeys:new Set,literals:new Set},"--modifier":{usedSpacingInteger:!1,usedSpacingNumber:!1,themeKeys:new Set,literals:new Set}};R(e.nodes,n=>{if(n.kind!=="declaration"||!n.value||!n.value.includes("--value(")&&!n.value.includes("--modifier("))return;let s=te(n.value);R(s,i=>{if(i.kind!=="function")return;if(i.value==="--spacing"&&!(t["--modifier"].usedSpacingNumber&&t["--value"].usedSpacingNumber))return R(i.nodes,l=>{var p,h;if(l.kind!=="function"||l.value!=="--value"&&l.value!=="--modifier")return;let d=l.value;for(let g of l.nodes)if(g.kind==="word"){if(g.value==="integer")(p=t[d]).usedSpacingInteger||(p.usedSpacingInteger=!0);else if(g.value==="number"&&((h=t[d]).usedSpacingNumber||(h.usedSpacingNumber=!0),t["--modifier"].usedSpacingNumber&&t["--value"].usedSpacingNumber))return M.Stop}}),M.Continue;if(i.value!=="--value"&&i.value!=="--modifier")return;let a=W(ne(i.nodes),",");for(let[l,d]of a.entries())d=d.replace(/\\\*/g,"*"),d=d.replace(/--(.*?)\s--(.*?)/g,"--$1-*--$2"),d=d.replace(/\s+/g,""),d=d.replace(/(-\*){2,}/g,"-*"),d[0]==="-"&&d[1]==="-"&&!d.includes("-*")&&(d+="-*"),a[l]=d;i.nodes=te(a.join(","));for(let l of i.nodes)if(l.kind==="word"&&(l.value[0]==='"'||l.value[0]==="'")&&l.value[0]===l.value[l.value.length-1]){let d=l.value.slice(1,-1);t[i.value].literals.add(d)}else if(l.kind==="word"&&l.value[0]==="-"&&l.value[1]==="-"){let d=l.value.replace(/-\*.*$/g,"");t[i.value].themeKeys.add(d)}else if(l.kind==="word"&&!(l.value[0]==="["&&l.value[l.value.length-1]==="]")&&!kr.includes(l.value)){console.warn(`Unsupported bare value data type: "${l.value}".
Only valid data types are: ${kr.map(m=>`"${m}"`).join(", ")}.
`);let d=l.value,p=structuredClone(i);R(p.nodes,m=>{if(m.kind==="word"&&m.value===d)return M.ReplaceSkip({kind:"word",value:"\xB6"})});let h="^".repeat(ne([l]).length),g=ne([p]).indexOf("\xB6"),b=["```css",ne([i])," ".repeat(g)+h,"```"].join(`
`);console.warn(b)}}),n.value=ne(s)}),o.utilities.functional(r.slice(0,-2),n=>{let s=ye(e),i=n.value,a=n.modifier;if(i===null)return;let l=!1,d=!1,p=!1,h=!1,g=new Map,b=!1;if(R([s],(m,w)=>{let k=w.parent;if((k==null?void 0:k.kind)!=="rule"&&(k==null?void 0:k.kind)!=="at-rule"||m.kind!=="declaration"||!m.value)return;let A=!1,y=te(m.value);if(R(y,S=>{if(S.kind==="function"){if(S.value==="--value"){l=!0;let x=ko(i,S,o);return x?(d=!0,x.ratio?b=!0:g.set(m,k),M.ReplaceSkip(x.nodes)):(l||(l=!1),A=!0,M.Stop)}else if(S.value==="--modifier"){if(a===null)return A=!0,M.Stop;p=!0;let x=ko(a,S,o);return x?(h=!0,M.ReplaceSkip(x.nodes)):(p||(p=!1),A=!0,M.Stop)}}}),A)return M.ReplaceSkip([]);m.value=ne(y)}),l&&!d||p&&!h||b&&h||a&&!b&&!h)return null;if(b)for(let[m,w]of g){let k=w.nodes.indexOf(m);k!==-1&&w.nodes.splice(k,1)}return s.nodes}),o.utilities.suggest(r.slice(0,-2),()=>{let n=[],s=[];for(let[i,{literals:a,usedSpacingNumber:l,usedSpacingInteger:d,themeKeys:p}]of[[n,t["--value"]],[s,t["--modifier"]]]){for(let h of a)i.push(h);if(l)i.push(...Nt);else if(d)for(let h of Nt)D(h)&&i.push(h);for(let h of o.theme.keysInNamespaces(p))i.push(h.replace(vo,(g,b,m)=>`${b}.${m}`))}return[{values:n,modifiers:s}]})}:Hi(r)?o=>{o.utilities.static(r,()=>e.nodes.map(ye))}:null}function ko(e,r,o){for(let t of r.nodes){if(e.kind==="named"&&t.kind==="word"&&(t.value[0]==="'"||t.value[0]==='"')&&t.value[t.value.length-1]===t.value[0]&&t.value.slice(1,-1)===e.value)return{nodes:te(e.value)};if(e.kind==="named"&&t.kind==="word"&&t.value[0]==="-"&&t.value[1]==="-"){let n=t.value;if(n.endsWith("-*")){n=n.slice(0,-2);let s=o.theme.resolve(e.value,[n]);if(s)return{nodes:te(s)}}else{let s=n.split("-*");if(s.length<=1)continue;let i=[s.shift()],a=o.theme.resolveWith(e.value,i,s);if(a){let[,l={}]=a;{let d=l[s.pop()];if(d)return{nodes:te(d)}}}}}else if(e.kind==="named"&&t.kind==="word"){if(!kr.includes(t.value))continue;let n=t.value==="ratio"&&"fraction"in e?e.fraction:e.value;if(!n)continue;let s=ae(n,[t.value]);if(s===null)continue;if(s==="ratio"){let[i,a]=W(n,"/").map(Number);if(!D(i)||!D(a))continue}else if(s==="number"&&!pe(n)||s==="percentage"&&!D(n.slice(0,-1)))continue;if(s==="ratio"){let[i,a]=W(n,"/");return{nodes:te(`${i.trim()} / ${a.trim()}`),ratio:!0}}return{nodes:te(n),ratio:!1}}else if(e.kind==="arbitrary"&&t.kind==="word"&&t.value[0]==="["&&t.value[t.value.length-1]==="]"){let n=t.value.slice(1,-1);if(n==="*")return{nodes:te(e.value)};if("dataType"in e&&e.dataType&&e.dataType!==n)continue;if("dataType"in e&&e.dataType||ae(e.value,[n])!==null)return{nodes:te(e.value)}}}}function Fe(e,r,o,t,n=""){let s=!1,i=jt(r,l=>o==null?t(l):l.startsWith("current")?t(de(l,o)):((l.startsWith("var(")||o.startsWith("var("))&&(s=!0),t(go(l,o))));function a(l){return n?W(l,",").map(d=>n.trim()+" "+d.trim()).join(", "):l}return s?[c(e,a(jt(r,t))),ce("@supports (color: lab(from red l a b))",[c(e,a(i))])]:[c(e,a(i))]}function Pt(e,r,o,t,n=""){let s=!1,i=W(r,",").map(a=>jt(a,l=>o==null?t(l):l.startsWith("current")?t(de(l,o)):((l.startsWith("var(")||o.startsWith("var("))&&(s=!0),t(go(l,o))))).map(a=>`drop-shadow(${a})`).join(" ");return s?[c(e,n+W(r,",").map(a=>`drop-shadow(${jt(a,t)})`).join(" ")),ce("@supports (color: lab(from red l a b))",[c(e,n+i)])]:[c(e,n+i)]}var bo=/^-?[a-z][a-zA-Z0-9_-]*/,Vi=37,Ki=47,Ui=46,Wi=97,qi=122,Bi=65,Yi=90,It=48,Ft=57,Qi=95,Gi=45;function Hi(e){let r=bo.exec(e);if(r===null)return!1;let o=r[0],t=e.slice(o.length);if(t.length===0&&o.endsWith("-"))return!1;if(t.length===0)return!0;let n=!1;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);switch(i){case Vi:{if(s!==t.length-1)return!1;let a=(t[s-1]||o[o.length-1]||"").charCodeAt(0);if(a<It||a>Ft)return!1;break}case Ki:if(s===t.length-1||n)return!1;n=!0;break;case Ui:{let a=(t[s-1]||o[o.length-1]||"").charCodeAt(0);if(a<It||a>Ft)return!1;let l=(t[s+1]||"").charCodeAt(0);if(l<It||l>Ft)return!1;break}case Qi:case Gi:continue;default:if(i>=Wi&&i<=qi||i>=Bi&&i<=Yi||i>=It&&i<=Ft)continue;return!1}}return!0}function Ji(e){if(!e.endsWith("-*"))return!1;e=e.slice(0,-2);let r=bo.exec(e);if(r===null)return!1;let o=r[0],t=e.slice(o.length);return t.length===0&&o.endsWith("-")?!1:t.length===0}var br={"--alpha":Zi,"--spacing":Xi,"--theme":ea,theme:ta};function Zi(e,r,o,...t){let[n,s]=W(o,"/").map(i=>i.trim());if(!n||!s)throw Error(`The --alpha(\u2026) function requires a color and an alpha value, e.g.: \`--alpha(${n||"var(--my-color)"} / ${s||"50%"})\``);if(t.length>0)throw Error(`The --alpha(\u2026) function only accepts one argument, e.g.: \`--alpha(${n||"var(--my-color)"} / ${s||"50%"})\``);return de(n,s)}function Xi(e,r,o,...t){if(!o)throw Error("The --spacing(\u2026) function requires an argument, but received none.");if(t.length>0)throw Error(`The --spacing(\u2026) function only accepts a single argument, but received ${t.length+1}.`);let n=e.theme.resolve(null,["--spacing"]);if(!n)throw Error("The --spacing(\u2026) function requires that the `--spacing` theme variable exists, but it was not found.");return`calc(${n} * ${o})`}function ea(e,r,o,...t){if(!o.startsWith("--"))throw Error("The --theme(\u2026) function can only be used with CSS variables from your theme.");let n=!1;o.endsWith(" inline")&&(n=!0,o=o.slice(0,-7)),r.kind==="at-rule"&&(n=!0);let s=e.resolveThemeValue(o,n);if(!s){if(t.length>0)return t.join(", ");throw Error(`Could not resolve value for theme function: \`theme(${o})\`. Consider checking if the variable name is correct or provide a fallback value to silence this error.`)}if(t.length===0)return s;let i=t.join(", ");if(i==="initial")return s;if(s==="initial")return i;if(s.startsWith("var(")||s.startsWith("theme(")||s.startsWith("--theme(")){let a=te(s);return oa(a,i),ne(a)}return s}function ta(e,r,o,...t){o=ra(o);let n=e.resolveThemeValue(o);if(!n&&t.length>0)return t.join(", ");if(!n)throw Error(`Could not resolve value for theme function: \`theme(${o})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`);return n}var wo=new RegExp(Object.keys(br).map(e=>`${e}\\(`).join("|"));function wr(e,r){let o=0;return R(e,t=>{if(t.kind==="declaration"&&t.value&&wo.test(t.value)){o|=8,t.value=yo(t.value,t,r);return}t.kind==="at-rule"&&(t.name==="@media"||t.name==="@custom-media"||t.name==="@container"||t.name==="@supports")&&wo.test(t.params)&&(o|=8,t.params=yo(t.params,t,r))}),o}function yo(e,r,o){let t=te(e);return R(t,n=>{if(n.kind==="function"&&n.value in br){let s=W(ne(n.nodes).trim(),",").map(a=>a.trim()),i=br[n.value](o,r,...s);return M.Replace(te(i))}}),ne(t)}function ra(e){if(e[0]!=="'"&&e[0]!=='"')return e;let r="",o=e[0];for(let t=1;t<e.length-1;t++){let n=e[t],s=e[t+1];n==="\\"&&(s===o||s==="\\")?(r+=s,t++):r+=n}return r}function oa(e,r){R(e,o=>{if(o.kind==="function"&&!(o.value!=="var"&&o.value!=="theme"&&o.value!=="--theme"))if(o.nodes.length===1)o.nodes.push({kind:"word",value:`, ${r}`});else{let t=o.nodes[o.nodes.length-1];t.kind==="word"&&t.value==="initial"&&(t.value=r)}})}function xo(e,r){let o=e.length,t=r.length,n=o<t?o:t;for(let s=0;s<n;s++){let i=e.charCodeAt(s),a=r.charCodeAt(s);if(i>=48&&i<=57&&a>=48&&a<=57){let l=s,d=s+1,p=s,h=s+1;for(i=e.charCodeAt(d);i>=48&&i<=57;)i=e.charCodeAt(++d);for(a=r.charCodeAt(h);a>=48&&a<=57;)a=r.charCodeAt(++h);let g=e.slice(l,d),b=r.slice(p,h),m=Number(g)-Number(b);if(m)return m;if(g<b)return-1;if(g>b)return 1;continue}if(i!==a)return i-a}return e.length-r.length}function na(e){if(e[0]!=="["||e[e.length-1]!=="]")return null;let r=1,o=r,t=e.length-1;for(;Je(e.charCodeAt(r));)r++;for(o=r;r<t;r++){let p=e.charCodeAt(r);if(p===92){r++;continue}if(!(p>=65&&p<=90)&&!(p>=97&&p<=122)&&!(p>=48&&p<=57)&&!(p===45||p===95))break}if(o===r)return null;let n=e.slice(o,r);for(;Je(e.charCodeAt(r));)r++;if(r===t)return{attribute:n,operator:null,quote:null,value:null,sensitivity:null};let s=null,i=e.charCodeAt(r);if(i===61)s="=",r++;else if((i===126||i===124||i===94||i===36||i===42)&&e.charCodeAt(r+1)===61)s=e[r]+"=",r+=2;else return null;for(;Je(e.charCodeAt(r));)r++;if(r===t)return null;let a="",l=null;if(i=e.charCodeAt(r),i===39||i===34){l=e[r],r++,o=r;for(let p=r;p<t;p++){let h=e.charCodeAt(p);h===i?r=p+1:h===92&&p++}a=e.slice(o,r-1)}else{for(o=r;r<t&&!Je(e.charCodeAt(r));)r++;a=e.slice(o,r)}for(;Je(e.charCodeAt(r));)r++;if(r===t)return{attribute:n,operator:s,quote:l,value:a,sensitivity:null};let d=null;switch(e.charCodeAt(r)){case 105:case 73:d="i",r++;break;case 115:case 83:d="s",r++;break;default:return null}for(;Je(e.charCodeAt(r));)r++;return r===t?{attribute:n,operator:s,quote:l,value:a,sensitivity:d}:null}function Je(e){switch(e){case 32:case 9:case 10:case 13:return!0;default:return!1}}function Ze(e,r=null){return Array.isArray(e)&&e.length===2&&typeof e[1]=="object"?r?e[1][r]??null:e[0]:Array.isArray(e)&&r===null?e.join(", "):typeof e=="string"&&r===null?e:null}function ia(e,{theme:r},o){for(let t of o){let n=Lt([t]);n&&e.theme.clearNamespace(`--${n}`,4)}for(let[t,n]of aa(r)){if(typeof n!="string"&&typeof n!="number")continue;if(typeof n=="string"&&(n=n.replace(/<alpha-value>/g,"1")),t[0]==="opacity"&&(typeof n=="number"||typeof n=="string")){let i=typeof n=="string"?parseFloat(n):n;i>=0&&i<=1&&(n=i*100+"%")}let s=Lt(t);s&&e.theme.add(`--${s}`,""+n,7)}if(Object.hasOwn(r,"fontFamily")){{let t=Ze(r.fontFamily.sans);t&&e.theme.hasDefault("--font-sans")&&(e.theme.add("--default-font-family",t,5),e.theme.add("--default-font-feature-settings",Ze(r.fontFamily.sans,"fontFeatureSettings")??"normal",5),e.theme.add("--default-font-variation-settings",Ze(r.fontFamily.sans,"fontVariationSettings")??"normal",5))}{let t=Ze(r.fontFamily.mono);t&&e.theme.hasDefault("--font-mono")&&(e.theme.add("--default-mono-font-family",t,5),e.theme.add("--default-mono-font-feature-settings",Ze(r.fontFamily.mono,"fontFeatureSettings")??"normal",5),e.theme.add("--default-mono-font-variation-settings",Ze(r.fontFamily.mono,"fontVariationSettings")??"normal",5))}}return r}function aa(e){let r=[];return $o(e,[],(o,t)=>{if(ca(o))return r.push([t,o]),1;if(da(o)){r.push([t,o[0]]);for(let n of Reflect.ownKeys(o[1]))r.push([[...t,`-${n}`],o[1][n]]);return 1}if(Array.isArray(o)&&o.every(n=>typeof n=="string"))return t[0]==="fontSize"?(r.push([t,o[0]]),o.length>=2&&r.push([[...t,"-line-height"],o[1]])):r.push([t,o.join(", ")]),1}),r}var la={borderWidth:"border-width",outlineWidth:"outline-width",ringColor:"ring-color",ringWidth:"ring-width",transitionDuration:"transition-duration",transitionTimingFunction:"transition-timing-function"},sa={animation:"animate",aspectRatio:"aspect",borderRadius:"radius",boxShadow:"shadow",colors:"color",containers:"container",fontFamily:"font",fontSize:"text",letterSpacing:"tracking",lineHeight:"leading",maxWidth:"container",screens:"breakpoint",transitionTimingFunction:"ease"},ua=/^[a-zA-Z0-9-_%/\.]+$/;function Lt(e){let r=la[e[0]];if(r&&e[1]==="DEFAULT")return`default-${r}`;if(e[0]==="container")return null;for(let t of e)if(!ua.test(t))return null;let o=sa[e[0]];return o&&(e=e.slice(),e[0]=o),e.map((t,n,s)=>t==="1"&&n!==s.length-1?"":t).map((t,n)=>(t=t.replaceAll(".","_"),(n===0||t.startsWith("-")||t==="lineHeight")&&(t=t.replace(/([a-z])([A-Z])/g,(s,i,a)=>`${i}-${a.toLowerCase()}`)),t)).filter((t,n)=>t!=="DEFAULT"||n!==e.length-1).join("-")}function ca(e){return typeof e=="number"||typeof e=="string"}function da(e){if(!Array.isArray(e)||e.length!==2||typeof e[0]!="string"&&typeof e[0]!="number"||e[1]===void 0||e[1]===null||typeof e[1]!="object")return!1;for(let r of Reflect.ownKeys(e[1]))if(typeof r!="string"||typeof e[1][r]!="string"&&typeof e[1][r]!="number")return!1;return!0}function $o(e,r=[],o){for(let t of Reflect.ownKeys(e)){let n=e[t];if(n==null)continue;let s=[...r,t],i=o(n,s)??0;if(i!==1&&(i===2||!(!Array.isArray(n)&&typeof n!="object")&&$o(n,s,o)===2))return 2}}var fa=/^(?<value>[-+]?(?:\d*\.)?\d+)(?<unit>[a-z]+|%)?$/i,ct=new q(e=>{var s,i;let r=fa.exec(e);if(!r)return null;let o=(s=r.groups)==null?void 0:s.value;if(o===void 0)return null;let t=Number(o);if(Number.isNaN(t))return null;let n=(i=r.groups)==null?void 0:i.unit;return n===void 0?[t,null]:[t,n]});function yr(e,r=null){let o=!1,t=te(e);return R(t,{exit(n){if(n.kind==="word"&&n.value!=="0"){let s=pa(n.value,r);return s===null||s===n.value?void 0:(o=!0,M.ReplaceSkip(Ae(s)))}else if(n.kind==="function"&&(n.value==="calc"||n.value==="")){if(n.nodes.length!==5)return;let s=ct.get(n.nodes[0].value),i=n.nodes[2].value,a=ct.get(n.nodes[4].value);if(i==="*"&&((s==null?void 0:s[0])===0&&(s==null?void 0:s[1])===null||(a==null?void 0:a[0])===0&&(a==null?void 0:a[1])===null))return o=!0,M.ReplaceSkip(Ae("0"));if(s===null||a===null)return;switch(i){case"*":if(s[1]===a[1]||s[1]===null&&a[1]!==null||s[1]!==null&&a[1]===null)return o=!0,M.ReplaceSkip(Ae(`${s[0]*a[0]}${s[1]??""}`));break;case"+":if(s[1]===a[1])return o=!0,M.ReplaceSkip(Ae(`${s[0]+a[0]}${s[1]??""}`));break;case"-":if(s[1]===a[1])return o=!0,M.ReplaceSkip(Ae(`${s[0]-a[0]}${s[1]??""}`));break;case"/":if(a[0]!==0&&(s[1]===null&&a[1]===null||s[1]!==null&&a[1]===null))return o=!0,M.ReplaceSkip(Ae(`${s[0]/a[0]}${s[1]??""}`));break}}}}),o?ne(t):e}function pa(e,r=null){let o=ct.get(e);if(o===null)return null;let[t,n]=o;if(n===null)return`${t}`;if(t===0&&rt(e))return"0";switch(n.toLowerCase()){case"in":return`${t*96}px`;case"cm":return`${t*96/2.54}px`;case"mm":return`${t*96/2.54/10}px`;case"q":return`${t*96/2.54/10/4}px`;case"pc":return`${t*96/6}px`;case"pt":return`${t*96/72}px`;case"rem":return r===null?null:`${t*r}px`;case"grad":return`${t*.9}deg`;case"rad":return`${t*180/Math.PI}deg`;case"turn":return`${t*360}deg`;case"ms":return`${t/1e3}s`;case"khz":return`${t*1e3}hz`;default:return`${t}${n}`}}function So(e,r="top",o="right",t="bottom",n="left"){return To(`${e}-${r}`,`${e}-${o}`,`${e}-${t}`,`${e}-${n}`)}function To(e="top",r="right",o="bottom",t="left"){return{1:[[e,0],[r,0],[o,0],[t,0]],2:[[e,0],[r,1],[o,0],[t,1]],3:[[e,0],[r,1],[o,2],[t,1]],4:[[e,0],[r,1],[o,2],[t,3]]}}function Ge(e,r){return{1:[[e,0],[r,0]],2:[[e,0],[r,1]]}}var Ao={inset:To(),margin:So("margin"),padding:So("padding"),gap:Ge("row-gap","column-gap")},Oo={"inset-block":Ge("top","bottom"),"inset-inline":Ge("left","right"),"margin-block":Ge("margin-top","margin-bottom"),"margin-inline":Ge("margin-left","margin-right"),"padding-block":Ge("padding-top","padding-bottom"),"padding-inline":Ge("padding-left","padding-right")},Eo={"border-block":["border-bottom","border-top"],"border-block-color":["border-bottom-color","border-top-color"],"border-block-style":["border-bottom-style","border-top-style"],"border-block-width":["border-bottom-width","border-top-width"],"border-inline":["border-left","border-right"],"border-inline-color":["border-left-color","border-right-color"],"border-inline-style":["border-left-style","border-right-style"],"border-inline-width":["border-left-width","border-right-width"]};function ha(e,r){var o,t,n;if(r&2){if(e.property in Oo){let s=W(e.value," ");return(o=Oo[e.property][s.length])==null?void 0:o.map(([i,a])=>c(i,s[a],e.important))}if(e.property in Eo)return(t=Eo[e.property])==null?void 0:t.map(s=>c(s,e.value,e.important))}if(e.property in Ao){let s=W(e.value," ");return(n=Ao[e.property][s.length])==null?void 0:n.map(([i,a])=>c(i,s[a],e.important))}return null}function ma(e){return{kind:"combinator",value:e}}function ga(e,r){return{kind:"function",value:e,nodes:r}}function Ke(e){return{kind:"selector",value:e}}function va(e){return{kind:"separator",value:e}}function ka(e){return{kind:"value",value:e}}function Ue(e){let r="";for(let o of e)switch(o.kind){case"combinator":case"selector":case"separator":case"value":r+=o.value;break;case"function":r+=o.value+"("+Ue(o.nodes)+")"}return r}var _o=92,ba=93,Co=41,wa=58,zo=44,ya=34,xa=46,jo=62,No=10,$a=35,Po=91,Io=40,Fo=43,Sa=39,Lo=32,Do=9,Mo=126,Ta=38,Aa=42;function dt(e){e=e.replaceAll(`\r
`,`
`);let r=[],o=[],t=null,n="",s;for(let i=0;i<e.length;i++){let a=e.charCodeAt(i);switch(a){case zo:case jo:case No:case Lo:case Fo:case Do:case Mo:{if(n.length>0){let g=Ke(n);t?t.nodes.push(g):r.push(g),n=""}let l=i,d=i+1;for(;d<e.length&&(s=e.charCodeAt(d),!(s!==zo&&s!==jo&&s!==No&&s!==Lo&&s!==Fo&&s!==Do&&s!==Mo));d++);i=d-1;let p=e.slice(l,d),h=p.trim()===","?va(p):ma(p);t?t.nodes.push(h):r.push(h);break}case Io:{let l=ga(n,[]);if(n="",l.value!==":not"&&l.value!==":where"&&l.value!==":has"&&l.value!==":is"){let d=i+1,p=0;for(let g=i+1;g<e.length;g++){if(s=e.charCodeAt(g),s===Io){p++;continue}if(s===Co){if(p===0){i=g;break}p--}}let h=i;l.nodes.push(ka(e.slice(d,h))),n="",i=h,t?t.nodes.push(l):r.push(l);break}t?t.nodes.push(l):r.push(l),o.push(l),t=l;break}case Co:{let l=o.pop();if(n.length>0){let d=Ke(n);l.nodes.push(d),n=""}t=o.length>0?o[o.length-1]:null;break}case xa:case wa:case $a:if(n.length>0){let l=Ke(n);t?t.nodes.push(l):r.push(l)}n=e[i];break;case Po:{if(n.length>0){let p=Ke(n);t?t.nodes.push(p):r.push(p)}n="";let l=i,d=0;for(let p=i+1;p<e.length;p++){if(s=e.charCodeAt(p),s===Po){d++;continue}if(s===ba){if(d===0){i=p;break}d--}}n+=e.slice(l,i+1);break}case Sa:case ya:{let l=i;for(let d=i+1;d<e.length;d++)if(s=e.charCodeAt(d),s===_o)d+=1;else if(s===a){i=d;break}n+=e.slice(l,i+1);break}case Ta:case Aa:if(n.length>0){let l=Ke(n);t?t.nodes.push(l):r.push(l),n=""}t?t.nodes.push(Ke(e[i])):r.push(Ke(e[i]));break;case _o:n+=e[i]+e[i+1],i+=1;break;default:n+=e[i]}}return n.length>0&&r.push(Ke(n)),r}function Ce(e,r){for(let o in e)delete e[o];return Object.assign(e,r)}function Dt(e){let r=[];for(let o of W(e,".")){if(!o.includes("[")){r.push(o);continue}let t=0;for(;;){let n=o.indexOf("[",t),s=o.indexOf("]",n);if(n===-1||s===-1)break;n>t&&r.push(o.slice(t,n)),r.push(o.slice(n+1,s)),t=s+1}t<=o.length-1&&r.push(o.slice(t))}return r}function xr(e,r){var t,n,s,i,a,l,d,p,h,g,b,m,w;let o=e;return(t=o.storage)[Mt]??(t[Mt]=Oa()),(n=o.storage)[Rt]??(n[Rt]=_a(o)),(s=o.storage)[Vt]??(s[Vt]=Na()),(i=o.storage)[Kt]??(i[Kt]=Ia()),(a=o.storage)[Ut]??(a[Ut]=La()),(l=o.storage)[ft]??(l[ft]=Ka(o)),(d=o.storage)[Xe]??(d[Xe]=qa(o,r)),(p=o.storage)[xe]??(p[xe]=ol(o)),(h=o.storage)[pt]??(h[pt]=il()),(g=o.storage)[et]??(g[et]=al(o)),(b=o.storage)[ht]??(b[ht]=ll(o)),(m=o.storage)[tt]??(m[tt]=sl(o)),(w=o.storage)[Yt]??(w[Yt]=ul(o)),o}var Mt=Symbol();function Oa(){return new q(e=>new q(r=>({rem:e,features:r})))}function Ea(e,r){let o=0;return r!=null&&r.collapse&&(o|=1),r!=null&&r.logicalToPhysical&&(o|=2),xr(e,r).storage[Mt].get((r==null?void 0:r.rem)??null).get(o)}var Rt=Symbol();function _a(e){return new q(r=>new q(o=>({features:o,designSystem:e,signatureOptions:r})))}function Ca(e,r,o){let t=0;return o!=null&&o.collapse&&(t|=1),xr(e).storage[Rt].get(r).get(t)}function za(e,r,o){let t=Ca(e,Ea(e,o),o),n=xr(e),s=new Set,i=n.storage[Vt].get(t);for(let a of r)s.add(i.get(a));return s.size<=1||!(t.features&1)?Array.from(s):ja(t,Array.from(s))}function ja(e,r){if(r.length<=1)return r;let o=e.designSystem,t=new q(a=>new q(l=>new Set)),n=e.designSystem.theme.prefix?`${e.designSystem.theme.prefix}:`:"";for(let a of r){let l=W(a,":"),d=l.pop(),p=d.endsWith("!");p&&(d=d.slice(0,-1));let h=l.length>0?`${l.join(":")}:`:"",g=p?"!":"";t.get(h).get(g).add(`${n}${d}`)}let s=new Set;for(let[a,l]of t.entries())for(let[d,p]of l.entries())for(let h of i(Array.from(p)))n&&h.startsWith(n)&&(h=h.slice(n.length)),s.add(`${a}${h}${d}`);return Array.from(s);function i(a){var A;let l=e.signatureOptions,d=o.storage[et].get(l),p=o.storage[pt].get(l),h=a.map(y=>d.get(y));if(h.some(y=>y.has("line-height"))){let y=o.theme.keysInNamespaces(["--text"]);if(y.length>0){let S=new Set,x=new Set;for(let O of h)if(O.has("line-height"))for(let E of O.get("line-height")){if(x.has(E))continue;x.add(E);let u=((A=o.storage[Xe])==null?void 0:A.get(E))??null;if(u!==null)if(pe(u)){S.add(u);for(let f of y)d.get(`text-${f}/${u}`)}else{S.add(E);for(let f of y)d.get(`text-${f}/[${E}]`)}}let _=new Set;for(let O of h)if(O.has("font-size")){for(let E of O.get("font-size"))if(!_.has(E)){_.add(E);for(let u of S)pe(u)?d.get(`text-[${E}]/${u}`):d.get(`text-[${E}]/[${u}]`)}}}}let g=h.map(y=>{let S=null;for(let x of y.keys()){let _=new Set;for(let O of p.get(x).values())for(let E of O)_.add(E);if(S=S===null?_:Uo(S,_),S.size===0)return S}return S}),b=new q(y=>new Set([y]));for(let y=0;y<g.length;y++){let S=g[y];for(let x=y+1;x<g.length;x++){let _=g[x];for(let O of S)if(_.has(O)){b.get(y).add(x),b.get(x).add(y);break}}}if(b.size===0)return a;let m=new q(y=>y.split(",").map(Number));for(let y of b.values()){let S=Array.from(y).sort((x,_)=>x-_);m.get(S.join(","))}let w=new Set(a),k=new Set;for(let y of m.values())for(let S of dl(y)){if(S.some(O=>k.has(a[O])))continue;let x=S.flatMap(O=>g[O]).reduce(Uo),_=o.storage[xe].get(l).get(S.map(O=>a[O]).sort((O,E)=>O.localeCompare(E)).join(" "));for(let O of x)if(o.storage[xe].get(l).get(O)===_){for(let E of S)k.add(a[E]);w.add(O);break}}for(let y of k)w.delete(y);return Array.from(w)}}var Vt=Symbol();function Na(){return new q(e=>{let r=e.designSystem,o=r.theme.prefix?`${r.theme.prefix}:`:"",t=r.storage[Kt].get(e),n=r.storage[Ut].get(e);return new q((s,i)=>{for(let a of r.parseCandidate(s)){let l=a.variants.slice().reverse().flatMap(h=>t.get(h)),d=a.important;if(d||l.length>0){let h=i.get(r.printCandidate({...a,variants:[],important:!1}));return r.theme.prefix!==null&&l.length>0&&(h=h.slice(o.length)),l.length>0&&(h=`${l.map(g=>r.printVariant(g)).join(":")}:${h}`),d&&(h+="!"),r.theme.prefix!==null&&l.length>0&&(h=`${o}${h}`),h}let p=n.get(s);if(p!==s)return p}return s})})}var Pa=[Va,el,tl,Ja],Kt=Symbol();function Ia(){return new q(e=>new q(r=>{let o=[r];for(let t of Pa)for(let n of o.splice(0)){let s=t(st(n),e);if(Array.isArray(s)){o.push(...s);continue}else o.push(s)}return o}))}var Fa=[Ma,Ra,Ba,Qa,Ha,Za,Xa,rl],Ut=Symbol();function La(){return new q(e=>{let r=e.designSystem;return new q(o=>{for(let t of r.parseCandidate(o)){let n=Ei(t);for(let i of Fa)n=i(n,e);let s=r.printCandidate(n);if(o!==s)return s}return o})})}var Da=["t","tr","r","br","b","bl","l","tl"];function Ma(e){if(e.kind==="static"&&e.root.startsWith("bg-gradient-to-")){let r=e.root.slice(15);return Da.includes(r)&&(e.root=`bg-linear-to-${r}`),e}return e}function Ra(e,r){var t;let o=r.designSystem.storage[ft];if(e.kind==="arbitrary"){let[n,s]=o(e.value,e.modifier===null?1:0);n!==e.value&&(e.value=n,s!==null&&(e.modifier=s))}else if(e.kind==="functional"&&((t=e.value)==null?void 0:t.kind)==="arbitrary"){let[n,s]=o(e.value.value,e.modifier===null?1:0);n!==e.value.value&&(e.value.value=n,s!==null&&(e.modifier=s))}return e}function Va(e,r){var n;let o=r.designSystem.storage[ft],t=qt(e);for(let[s]of t)if(s.kind==="arbitrary"){let[i]=o(s.selector,2);i!==s.selector&&(s.selector=i)}else if(s.kind==="functional"&&((n=s.value)==null?void 0:n.kind)==="arbitrary"){let[i]=o(s.value.value,2);i!==s.value.value&&(s.value.value=i)}return e}var ft=Symbol();function Ka(e){return r(e);function r(o){function t(a,l=0){let d=te(a);if(l&2)return[Wt(d,i),null];let p=0,h=0;if(R(d,b=>{b.kind==="function"&&b.value==="theme"&&(p+=1,R(b.nodes,m=>m.kind==="separator"&&m.value.includes(",")?M.Stop:m.kind==="word"&&m.value==="/"?(h+=1,M.Stop):M.Skip))}),p===0)return[a,null];if(h===0)return[Wt(d,s),null];if(h>1)return[Wt(d,i),null];let g=null;return[Wt(d,(b,m)=>{let w=W(b,"/").map(k=>k.trim());if(w.length>2)return null;if(d.length===1&&w.length===2&&l&1){let[k,A]=w;if(/^\d+%$/.test(A))g={kind:"named",value:A.slice(0,-1)};else if(/^0?\.\d+$/.test(A)){let y=Number(A)*100;g={kind:Number.isInteger(y)?"named":"arbitrary",value:y.toString()}}else g={kind:"arbitrary",value:A};b=k}return s(b,m)||i(b,m)}),g]}function n(a,l=!0){let d=`--${Lt(Dt(a))}`;return o.theme.get([d])?l&&o.theme.prefix?`--${o.theme.prefix}-${d.slice(2)}`:d:null}function s(a,l){let d=n(a);if(d)return l?`var(${d}, ${l})`:`var(${d})`;let p=Dt(a);if(p[0]==="spacing"&&o.theme.get(["--spacing"])){let h=p[1];return pe(h)?`--spacing(${h})`:null}return null}function i(a,l){let d=W(a,"/").map(g=>g.trim());a=d.shift();let p=n(a,!1);if(!p)return null;let h=d.length>0?`/${d.join("/")}`:"";return l?`--theme(${p}${h}, ${l})`:`--theme(${p}${h})`}return t}}function Wt(e,r){return R(e,(o,t)=>{if(o.kind==="function"&&o.value==="theme"){if(o.nodes.length<1)return;o.nodes[0].kind==="separator"&&o.nodes[0].value.trim()===""&&o.nodes.shift();let n=o.nodes[0];if(n.kind!=="word")return;let s=n.value,i=1;for(let d=i;d<o.nodes.length&&!o.nodes[d].value.includes(",");d++)s+=ne([o.nodes[d]]),i=d+1;s=Ua(s);let a=o.nodes.slice(i+1),l=a.length>0?r(s,ne(a)):r(s);if(l===null)return;if(t.parent){let d=t.parent.nodes.indexOf(o)-1;for(;d!==-1;){let p=t.parent.nodes[d];if(p.kind==="separator"&&p.value.trim()===""){--d;continue}/^[-+*/]$/.test(p.value.trim())&&(l=`(${l})`);break}}return M.Replace(te(l))}}),ne(e)}function Ua(e){if(e[0]!=="'"&&e[0]!=='"')return e;let r="",o=e[0];for(let t=1;t<e.length-1;t++){let n=e[t],s=e[t+1];n==="\\"&&(s===o||s==="\\")?(r+=s,t++):r+=n}return r}function*qt(e){function*r(o,t=null){yield[o,t],o.kind==="compound"&&(yield*r(o.variant,o))}yield*r(e,null)}function Le(e,r){return e.parseCandidate(e.theme.prefix&&!r.startsWith(`${e.theme.prefix}:`)?`${e.theme.prefix}:${r}`:r)}function Wa(e,r){let o=e.printCandidate(r);return e.theme.prefix&&o.startsWith(`${e.theme.prefix}:`)?o.slice(e.theme.prefix.length+1):o}var Xe=Symbol();function qa(e,r){let o=e.resolveThemeValue("--spacing");if(o===void 0)return null;o=yr(o,(r==null?void 0:r.rem)??null);let t=ct.get(o);if(!t)return null;let[n,s]=t;return new q(i=>{if(n===0)return null;let a=ct.get(yr(i,(r==null?void 0:r.rem)??null));if(!a)return null;let[l,d]=a;return d===s?l/n:null})}function Ba(e,r){var l;if(e.kind!=="arbitrary"&&!(e.kind==="functional"&&((l=e.value)==null?void 0:l.kind)==="arbitrary"))return e;let o=r.designSystem,t=o.storage[ht].get(r.signatureOptions),n=o.storage[xe].get(r.signatureOptions),s=o.printCandidate(e),i=n.get(s);if(typeof i!="string")return e;for(let d of a(i,e)){let p=o.printCandidate(d);if(n.get(p)===i&&Ya(o,e,d))return d}return e;function*a(d,p){var g,b,m,w;let h=t.get(d);if(!(h.length>1)){if(h.length===0&&p.modifier){let k={...p,modifier:null},A=n.get(o.printCandidate(k));if(typeof A=="string")for(let y of a(A,k))yield Object.assign({},y,{modifier:p.modifier})}if(h.length===1)for(let k of Le(o,h[0]))yield k;else if(h.length===0){let k=p.kind==="arbitrary"?p.value:((g=p.value)==null?void 0:g.value)??null;if(k===null)return;if(r.signatureOptions.rem!==null&&p.kind==="functional"&&((b=p.value)==null?void 0:b.kind)==="arbitrary"){let S=((m=o.storage[Xe])==null?void 0:m.get(k))??null;S!==null&&pe(S)&&(yield Object.assign({},p,{value:{kind:"named",value:S,fraction:null}}))}let A=((w=o.storage[Xe])==null?void 0:w.get(k))??null,y="";A!==null&&A<0&&(y="-",A=Math.abs(A));for(let S of Array.from(o.utilities.keys("functional")).sort((x,_)=>(x[0]==="-")-+(_[0]==="-"))){y&&(S=`${y}${S}`);for(let x of Le(o,`${S}-${k}`))yield x;if(p.modifier)for(let x of Le(o,`${S}-${k}${p.modifier}`))yield x;if(A!==null){for(let x of Le(o,`${S}-${A}`))yield x;if(p.modifier)for(let x of Le(o,`${S}-${A}${Ct(p.modifier)}`))yield x}for(let x of Le(o,`${S}-[${k}]`))yield x;if(p.modifier)for(let x of Le(o,`${S}-[${k}]${Ct(p.modifier)}`))yield x}}}}}function Ya(e,r,o){var i;let t=null;if(r.kind==="functional"&&((i=r.value)==null?void 0:i.kind)==="arbitrary"&&r.value.value.includes("var(--")?t=r.value.value:r.kind==="arbitrary"&&r.value.includes("var(--")&&(t=r.value),t===null)return!0;let n=e.candidatesToCss([e.printCandidate(o)]).join(`
`),s=!0;return R(te(t),a=>{if(a.kind==="function"&&a.value==="var"){let l=a.nodes[0].value;if(!RegExp(`var\\(${l}[,)]\\s*`,"g").test(n)||n.includes(`${l}:`))return s=!1,M.Stop}}),s}function Qa(e,r){var l;if(e.kind!=="functional"||((l=e.value)==null?void 0:l.kind)!=="named")return e;let o=r.designSystem,t=o.storage[ht].get(r.signatureOptions),n=o.storage[xe].get(r.signatureOptions),s=o.printCandidate(e),i=n.get(s);if(typeof i!="string")return e;for(let d of a(i,e)){let p=o.printCandidate(d);if(n.get(p)===i)return d}return e;function*a(d,p){let h=t.get(d);if(!(h.length>1)){if(h.length===0&&p.modifier){let g={...p,modifier:null},b=n.get(o.printCandidate(g));if(typeof b=="string")for(let m of a(b,g))yield Object.assign({},m,{modifier:p.modifier})}if(h.length===1)for(let g of Le(o,h[0]))yield g}}}var Ga=new Map([["order-none","order-0"],["break-words","wrap-break-word"]]);function Ha(e,r){let o=r.designSystem,t=o.storage[xe].get(r.signatureOptions),n=Wa(o,e),s=Ga.get(n)??null;if(s===null)return e;let i=t.get(n);if(typeof i!="string")return e;let a=t.get(s);if(typeof a!="string"||i!==a)return e;let[l]=Le(o,s);return l}function Ja(e,r){let o=r.designSystem,t=o.storage[tt],n=o.storage[Yt],s=qt(e);for(let[i]of s){if(i.kind==="compound")continue;let a=o.printVariant(i),l=t.get(a);if(typeof l!="string")continue;let d=n.get(l);if(d.length!==1)continue;let p=d[0],h=o.parseVariant(p);h!==null&&Ce(i,h)}return e}function Za(e,r){var n;let o=r.designSystem,t=o.storage[xe].get(r.signatureOptions);if(e.kind==="functional"&&((n=e.value)==null?void 0:n.kind)==="arbitrary"&&e.value.dataType!==null){let s=o.printCandidate({...e,value:{...e.value,dataType:null}});t.get(o.printCandidate(e))===t.get(s)&&(e.value.dataType=null)}return e}function Xa(e,r){var s;if(e.kind!=="functional"||((s=e.value)==null?void 0:s.kind)!=="arbitrary")return e;let o=r.designSystem,t=o.storage[xe].get(r.signatureOptions),n=t.get(o.printCandidate(e));if(n===null)return e;for(let i of Ro(e))if(t.get(o.printCandidate({...e,value:i}))===n)return e.value=i,e;return e}function el(e){var o,t,n;let r=qt(e);for(let[s]of r)if(s.kind==="functional"&&s.root==="data"&&((o=s.value)==null?void 0:o.kind)==="arbitrary"&&!s.value.value.includes("="))s.value={kind:"named",value:s.value.value};else if(s.kind==="functional"&&s.root==="aria"&&((t=s.value)==null?void 0:t.kind)==="arbitrary"&&(s.value.value.endsWith("=true")||s.value.value.endsWith('="true"')||s.value.value.endsWith("='true'"))){let[i,a]=W(s.value.value,"=");if(i[i.length-1]==="~"||i[i.length-1]==="|"||i[i.length-1]==="^"||i[i.length-1]==="$"||i[i.length-1]==="*")continue;s.value={kind:"named",value:s.value.value.slice(0,s.value.value.indexOf("="))}}else s.kind==="functional"&&s.root==="supports"&&((n=s.value)==null?void 0:n.kind)==="arbitrary"&&/^[a-z-][a-z0-9-]*$/i.test(s.value.value)&&(s.value={kind:"named",value:s.value.value});return e}function*Ro(e,r=(t=>(t=e.value)==null?void 0:t.value)()??"",o=new Set){if(o.has(r))return;if(o.add(r),yield{kind:"named",value:r,fraction:null},r.endsWith("%")&&pe(r.slice(0,-1))&&(yield{kind:"named",value:r.slice(0,-1),fraction:null}),r.includes("/")){let[i,a]=r.split("/");D(i)&&D(a)&&(yield{kind:"named",value:i,fraction:`${i}/${a}`})}let n=new Set;for(let i of r.matchAll(/(\d+\/\d+)|(\d+\.?\d+)/g))n.add(i[0].trim());let s=Array.from(n).sort((i,a)=>i.length-a.length);for(let i of s)yield*Ro(e,i,o)}function Vo(e){return!e.some(r=>r.kind==="separator"&&r.value.trim()===",")}function Bt(e){let r=e.value.trim();return e.kind==="selector"&&r[0]==="["&&r[r.length-1]==="]"}function tl(e,r){let o=[e],t=r.designSystem,n=t.storage[tt],s=qt(e);for(let[i,a]of s)if(i.kind==="compound"&&(i.root==="has"||i.root==="not"||i.root==="in")&&i.modifier!==null&&"modifier"in i.variant&&(i.variant.modifier=i.modifier,i.modifier=null),i.kind==="arbitrary"){if(i.relative)continue;let l=dt(i.selector.trim());if(!Vo(l))continue;if(a===null&&l.length===3&&l[0].kind==="selector"&&l[0].value==="&"&&l[1].kind==="combinator"&&l[1].value.trim()===">"&&l[2].kind==="selector"&&l[2].value==="*"){Ce(i,t.parseVariant("*"));continue}if(a===null&&l.length===3&&l[0].kind==="selector"&&l[0].value==="&"&&l[1].kind==="combinator"&&l[1].value.trim()===""&&l[2].kind==="selector"&&l[2].value==="*"){Ce(i,t.parseVariant("**"));continue}if(a===null&&l.length===3&&l[1].kind==="combinator"&&l[1].value.trim()===""&&l[2].kind==="selector"&&l[2].value==="&"){l.pop(),l.pop(),Ce(i,t.parseVariant(`in-[${Ue(l)}]`));continue}if(a===null&&l[0].kind==="selector"&&(l[0].value==="@media"||l[0].value==="@supports")){let g=n.get(t.printVariant(i)),b=te(Ue(l)),m=!1;if(R(b,w=>{if(w.kind==="word"&&w.value==="not")return m=!0,M.Replace([])}),b=te(ne(b)),R(b,w=>{w.kind==="separator"&&w.value!==" "&&w.value.trim()===""&&(w.value=" ")}),m){let w=t.parseVariant(`not-[${ne(b)}]`);if(w===null)continue;if(g===n.get(t.printVariant(w))){Ce(i,w);continue}}}let d=null;a===null&&l.length===3&&l[0].kind==="selector"&&l[0].value.trim()==="&"&&l[1].kind==="combinator"&&l[1].value.trim()===">"&&l[2].kind==="selector"&&(Bt(l[2])||l[2].value[0]===":")&&(l=[l[2]],d=t.parseVariant("*")),a===null&&l.length===3&&l[0].kind==="selector"&&l[0].value.trim()==="&"&&l[1].kind==="combinator"&&l[1].value.trim()===""&&l[2].kind==="selector"&&(Bt(l[2])||l[2].value[0]===":")&&(l=[l[2]],d=t.parseVariant("**"));let p=l.filter(g=>!(g.kind==="selector"&&g.value.trim()==="&"));if(p.length!==1)continue;let h=p[0];if(h.kind==="function"&&h.value===":is"){if(!Vo(h.nodes)||h.nodes.length!==1||!Bt(h.nodes[0]))continue;h=h.nodes[0]}if(h.kind==="function"&&h.value[0]===":"||h.kind==="selector"&&h.value[0]===":"){let g=h,b=!1;if(g.kind==="function"&&g.value===":not"){if(b=!0,g.nodes.length!==1||g.nodes[0].kind!=="selector"&&g.nodes[0].kind!=="function"||g.nodes[0].value[0]!==":")continue;g=g.nodes[0]}let m=(k=>{if(k===":nth-child"&&g.kind==="function"&&g.nodes.length===1&&g.nodes[0].kind==="value"&&g.nodes[0].value==="odd")return b?(b=!1,"even"):"odd";if(k===":nth-child"&&g.kind==="function"&&g.nodes.length===1&&g.nodes[0].kind==="value"&&g.nodes[0].value==="even")return b?(b=!1,"odd"):"even";for(let[A,y]of[[":nth-child","nth"],[":nth-last-child","nth-last"],[":nth-of-type","nth-of-type"],[":nth-last-of-type","nth-of-last-type"]])if(k===A&&g.kind==="function"&&g.nodes.length===1)return g.nodes.length===1&&g.nodes[0].kind==="value"&&D(g.nodes[0].value)?`${y}-${g.nodes[0].value}`:`${y}-[${Ue(g.nodes)}]`;return b&&n.get(t.printVariant(i))===n.get(`not-[${k}]`)?`[&${k}]`:null})(g.value);if(m===null){if(d)return Ce(i,{kind:"arbitrary",selector:h.value,relative:!1}),[d,i];continue}b&&(m=`not-${m}`);let w=t.parseVariant(m);if(w===null)continue;Ce(i,w)}else if(Bt(h)){let g=na(h.value);if(g===null)continue;if(g.attribute.startsWith("data-")){let b=g.attribute.slice(5);Ce(i,{kind:"functional",root:"data",modifier:null,value:g.value===null?{kind:"named",value:b}:{kind:"arbitrary",value:`${b}${g.operator}${g.quote??""}${g.value}${g.quote??""}${g.sensitivity?` ${g.sensitivity}`:""}`}})}else if(g.attribute.startsWith("aria-")){let b=g.attribute.slice(5);Ce(i,{kind:"functional",root:"aria",modifier:null,value:g.value===null?{kind:"arbitrary",value:b}:g.operator==="="&&g.value==="true"&&g.sensitivity===null?{kind:"named",value:b}:{kind:"arbitrary",value:`${g.attribute}${g.operator}${g.quote??""}${g.value}${g.quote??""}${g.sensitivity?` ${g.sensitivity}`:""}`}})}else Ce(i,{kind:"arbitrary",selector:h.value,relative:!1})}if(d)return[d,i]}return o}function rl(e,r){if(e.kind!=="functional"&&e.kind!=="arbitrary"||e.modifier===null)return e;let o=r.designSystem,t=o.storage[xe].get(r.signatureOptions),n=t.get(o.printCandidate(e)),s=e.modifier;if(n===t.get(o.printCandidate({...e,modifier:null})))return e.modifier=null,e;{let i={kind:"named",value:s.value.endsWith("%")?s.value.includes(".")?`${Number(s.value.slice(0,-1))}`:s.value.slice(0,-1):s.value,fraction:null};if(n===t.get(o.printCandidate({...e,modifier:i})))return e.modifier=i,e}{let i={kind:"named",value:`${parseFloat(s.value)*100}`,fraction:null};if(n===t.get(o.printCandidate({...e,modifier:i})))return e.modifier=i,e}return e}var xe=Symbol();function ol(e){return new q(r=>new q(o=>{try{o=e.theme.prefix&&!o.startsWith(e.theme.prefix)?`${e.theme.prefix}:${o}`:o;let t=[X(".x",[J("@apply",o)])];return cl(e,()=>{for(let n of e.parseCandidate(o))e.compileAstNodes(n,1);gt(t,e)}),Ko(e,t,r),_e(t)}catch{return Symbol()}}))}function Ko(e,r,o){let{rem:t}=o;return R(r,{enter(n,s){var i;if(n.kind==="declaration"){if(n.value===void 0||n.property==="--tw-sort"||n.property.startsWith("--tw-")&&(((i=s.parent)==null?void 0:i.nodes)??[]).some(a=>a.kind==="declaration"&&n.value===a.value&&n.important===a.important&&!a.property.startsWith("--tw-")))return M.Replace([]);if(o.features&1){let a=ha(n,o.features);if(a)return M.Replace(a)}n.value.includes("var(")&&(n.value=nl(n.value,e)),n.value=yr(n.value,t),n.value=Qe(n.value)}else{if(n.kind==="context"||n.kind==="at-root")return M.Replace(n.nodes);if(n.kind==="comment"||n.kind==="at-rule"&&n.name==="@property")return M.Replace([])}},exit(n){if(n.kind==="rule"||n.kind==="at-rule"){if(n.nodes.length>1){let s=new Set;for(let i=n.nodes.length-1;i>=0;i--){let a=n.nodes[i];a.kind==="declaration"&&a.value!==void 0&&(s.has(a.property)&&n.nodes.splice(i,1),s.add(a.property))}}n.nodes.sort((s,i)=>s.kind!=="declaration"||i.kind!=="declaration"?0:s.property.localeCompare(i.property))}}}),r}function nl(e,r){let o=!1,t=te(e),n=new Set;return R(t,s=>{if(s.kind!=="function"||s.value!=="var"||s.nodes.length!==1&&s.nodes.length<3)return;let i=s.nodes[0].value;r.theme.prefix&&i.startsWith(`--${r.theme.prefix}-`)&&(i=i.slice(`--${r.theme.prefix}-`.length));let a=r.resolveThemeValue(i);if(!n.has(i)&&(n.add(i),a!==void 0&&(s.nodes.length===1&&(o=!0,s.nodes.push(...te(`,${a}`))),s.nodes.length>=3))&&ne(s.nodes)===`${s.nodes[0].value},${a}`)return o=!0,M.Replace(te(a))}),o?ne(t):e}var pt=Symbol();function il(){return new q(e=>new q(r=>new q(o=>new Set)))}var et=Symbol();function al(e){return new q(r=>new q(o=>{let t=new q(s=>new Set);e.theme.prefix&&!o.startsWith(e.theme.prefix)&&(o=`${e.theme.prefix}:${o}`);let n=e.parseCandidate(o);return n.length===0||R(Ko(e,e.compileAstNodes(n[0]).map(s=>ye(s.node)),r),s=>{s.kind==="declaration"&&(t.get(s.property).add(s.value),e.storage[pt].get(r).get(s.property).get(s.value).add(o))}),t}))}var ht=Symbol();function ll(e){return new q(r=>{let o=e.storage[xe].get(r),t=new q(()=>[]);for(let[n,s]of e.getClassList()){let i=o.get(n);if(typeof i=="string"){if(n[0]==="-"&&n.endsWith("-0")){let a=o.get(n.slice(1));if(typeof a=="string"&&i===a)continue}t.get(i).push(n),e.storage[et].get(r).get(n);for(let a of s.modifiers){if(pe(a))continue;let l=`${n}/${a}`,d=o.get(l);typeof d=="string"&&(t.get(d).push(l),e.storage[et].get(r).get(l))}}}return t})}var tt=Symbol();function sl(e){return new q(r=>{try{r=e.theme.prefix&&!r.startsWith(e.theme.prefix)?`${e.theme.prefix}:${r}`:r;let o=[X(".x",[J("@apply",`${r}:flex`)])];return gt(o,e),R(o,t=>{if(t.kind==="at-rule"&&t.params.includes(" "))t.params=t.params.replaceAll(" ","");else if(t.kind==="rule"){let n=dt(t.selector),s=!1;R(n,i=>{var a,l;if(i.kind==="separator"&&i.value!==" ")i.value=i.value.trim(),s=!0;else if(i.kind==="function"&&i.value===":is"){if(i.nodes.length===1)return s=!0,M.Replace(i.nodes);if(i.nodes.length===2&&i.nodes[0].kind==="selector"&&i.nodes[0].value==="*"&&i.nodes[1].kind==="selector"&&i.nodes[1].value[0]===":")return s=!0,M.Replace(i.nodes[1])}else i.kind==="function"&&i.value[0]===":"&&((a=i.nodes[0])==null?void 0:a.kind)==="selector"&&((l=i.nodes[0])==null?void 0:l.value[0])===":"&&(s=!0,i.nodes.unshift({kind:"selector",value:"*"}))}),s&&(t.selector=Ue(n))}}),_e(o)}catch{return Symbol()}})}var Yt=Symbol();function ul(e){let r=e.storage[tt],o=new q(()=>[]);for(let[t,n]of e.variants.entries())if(n.kind==="static"){let s=r.get(t);if(typeof s!="string")continue;o.get(s).push(t)}return o}function cl(e,r){let o=e.theme.values.get,t=new Set;e.theme.values.get=n=>{let s=o.call(e.theme.values,n);return s===void 0||s.options&1&&(t.add(s),s.options&=-2),s};try{return r()}finally{e.theme.values.get=o;for(let n of t)n.options|=1}}function*dl(e){let r=e.length,o=1n<<BigInt(r);for(let t=r;t>=2;t--){let n=(1n<<BigInt(t))-1n;for(;n<o;){let s=[];for(let l=0;l<r;l++)n>>BigInt(l)&1n&&s.push(e[l]);yield s;let i=n&-n,a=n+i;n=((a^n)>>2n)/i|a}}}function Uo(e,r){if(typeof e.intersection=="function")return e.intersection(r);if(e.size===0||r.size===0)return new Set;let o=new Set(e);for(let t of r)o.has(t)||o.delete(t);return o}var fl=/^\d+\/\d+$/;function pl(e){let r=new q(t=>({name:t,utility:t,fraction:!1,modifiers:[]}));for(let t of e.utilities.keys("static")){if(e.utilities.getCompletions(t).length===0)continue;let n=r.get(t);n.fraction=!1,n.modifiers=[]}for(let t of e.utilities.keys("functional")){let n=e.utilities.getCompletions(t);for(let s of n)for(let i of s.values){let a=i!==null&&fl.test(i),l=i===null?t:`${t}-${i}`,d=r.get(l);if(d.utility=t,d.fraction||(d.fraction=a),d.modifiers.push(...s.modifiers),s.supportsNegative){let p=r.get(`-${l}`);p.utility=`-${t}`,p.fraction||(p.fraction=a),p.modifiers.push(...s.modifiers)}d.modifiers=Array.from(new Set(d.modifiers))}}if(r.size===0)return[];let o=Array.from(r.values());return o.sort((t,n)=>xo(t.name,n.name)),hl(o)}function hl(e){let r=[],o=null,t=new Map,n=new q(()=>[]);for(let i of e){let{utility:a,fraction:l}=i;o||(o={utility:a,items:[]},t.set(a,o)),a!==o.utility&&(r.push(o),o={utility:a,items:[]},t.set(a,o)),l?n.get(a).push(i):o.items.push(i)}o&&r[r.length-1]!==o&&r.push(o);for(let[i,a]of n){let l=t.get(i);l&&l.items.push(...a)}let s=[];for(let i of r)for(let a of i.items)s.push([a.name,{modifiers:a.modifiers}]);return s}function ml(e){let r=[];for(let[o,t]of e.variants.entries()){let n=function({value:a,modifier:l}={}){let d=o;a&&(d+=s?`-${a}`:a),l&&(d+=`/${l}`);let p=e.parseVariant(d);if(!p)return[];let h=X(".__placeholder__",[]);if(Gt(h,p,e.variants)===null)return[];let g=[];return R(h.nodes,{exit(b,m){if(b.kind!=="rule"&&b.kind!=="at-rule"||b.nodes.length>0)return;let w=m.path();w.push(b),w.sort((y,S)=>{let x=y.kind==="at-rule",_=S.kind==="at-rule";return x&&!_?-1:!x&&_?1:0});let k=w.flatMap(y=>y.kind==="rule"?y.selector==="&"?[]:[y.selector]:y.kind==="at-rule"?[`${y.name} ${y.params}`]:[]),A="";for(let y=k.length-1;y>=0;y--)A=A===""?k[y]:`${k[y]} { ${A} }`;g.push(A)}}),g};if(t.kind==="arbitrary")continue;let s=o!=="@",i=e.variants.getCompletions(o);switch(t.kind){case"static":r.push({name:o,values:i,isArbitrary:!1,hasDash:s,selectors:n});break;case"functional":r.push({name:o,values:i,isArbitrary:!0,hasDash:s,selectors:n});break;case"compound":r.push({name:o,values:i,isArbitrary:!0,hasDash:s,selectors:n});break}}return r}function gl(e,r){var i;let{astNodes:o,nodeSorting:t}=Qt(Array.from(r),e),n=new Map(r.map(a=>[a,null])),s=0n;for(let a of o){let l=(i=t.get(a))==null?void 0:i.candidate;l&&n.set(l,n.get(l)??s++)}return r.map(a=>[a,n.get(a)??null])}var Wo=new RegExp("^@?[a-z0-9][a-zA-Z0-9_-]*(?<![_-])$"),vl=class{constructor(){Ee(this,"compareFns",new Map);Ee(this,"variants",new Map);Ee(this,"completions",new Map);Ee(this,"groupOrder",null);Ee(this,"lastOrder",0)}static(e,r,{compounds:o,order:t}={}){this.set(e,{kind:"static",applyFn:r,compoundsWith:0,compounds:o??2,order:t})}fromAst(e,r,o){let t=[],n=!1;R(r,s=>{s.kind==="rule"?t.push(s.selector):s.kind==="at-rule"&&s.name==="@variant"?n=!0:s.kind==="at-rule"&&s.name!=="@slot"&&t.push(`${s.name} ${s.params}`)}),this.static(e,s=>{let i=r.map(ye);n&&$r(i,o),Bo(i,s.nodes),s.nodes=i},{compounds:mt(t)})}functional(e,r,{compounds:o,order:t}={}){this.set(e,{kind:"functional",applyFn:r,compoundsWith:0,compounds:o??2,order:t})}compound(e,r,o,{compounds:t,order:n}={}){this.set(e,{kind:"compound",applyFn:o,compoundsWith:r,compounds:t??2,order:n})}group(e,r){this.groupOrder=this.nextOrder(),r&&this.compareFns.set(this.groupOrder,r),e(),this.groupOrder=null}has(e){return this.variants.has(e)}get(e){return this.variants.get(e)}kind(e){var r;return(r=this.variants.get(e))==null?void 0:r.kind}compoundsWith(e,r){let o=this.variants.get(e),t=typeof r=="string"?this.variants.get(r):r.kind==="arbitrary"?{compounds:mt([r.selector])}:this.variants.get(r.root);return!(!o||!t||o.kind!=="compound"||t.compounds===0||o.compoundsWith===0||(o.compoundsWith&t.compounds)===0)}suggest(e,r){this.completions.set(e,r)}getCompletions(e){var r;return((r=this.completions.get(e))==null?void 0:r())??[]}compare(e,r){if(e===r)return 0;if(e===null)return-1;if(r===null)return 1;if(e.kind==="arbitrary"&&r.kind==="arbitrary")return e.selector<r.selector?-1:1;if(e.kind==="arbitrary")return 1;if(r.kind==="arbitrary")return-1;let o=this.variants.get(e.root).order,t=o-this.variants.get(r.root).order;if(t!==0)return t;if(e.kind==="compound"&&r.kind==="compound"){let a=this.compare(e.variant,r.variant);return a===0?e.modifier&&r.modifier?e.modifier.value<r.modifier.value?-1:1:e.modifier?1:r.modifier?-1:0:a}let n=this.compareFns.get(o);if(n!==void 0)return n(e,r);if(e.root!==r.root)return e.root<r.root?-1:1;let s=e.value,i=r.value;return s===null?-1:i===null||s.kind==="arbitrary"&&i.kind!=="arbitrary"?1:s.kind!=="arbitrary"&&i.kind==="arbitrary"||s.value<i.value?-1:1}keys(){return this.variants.keys()}entries(){return this.variants.entries()}set(e,{kind:r,applyFn:o,compounds:t,compoundsWith:n,order:s}){let i=this.variants.get(e);i?Object.assign(i,{kind:r,applyFn:o,compounds:t}):(s===void 0&&(this.lastOrder=this.nextOrder(),s=this.lastOrder),this.variants.set(e,{kind:r,applyFn:o,order:s,compoundsWith:n,compounds:t}))}nextOrder(){return this.groupOrder??this.lastOrder+1}};function mt(e){let r=0;for(let o of e){if(o[0]==="@"){if(!o.startsWith("@media")&&!o.startsWith("@supports")&&!o.startsWith("@container"))return 0;r|=1;continue}if(o.includes("::"))return 0;r|=2}return r}function kl(e){let r=new vl;function o(a,l,{compounds:d}={}){d??(d=mt(l)),r.static(a,p=>{p.nodes=l.map(h=>ce(h,p.nodes))},{compounds:d})}o("*",[":is(& > *)"],{compounds:0}),o("**",[":is(& *)"],{compounds:0});function t(a,l){return l.map(d=>{d=d.trim();let p=W(d," ");return p[0]==="not"?p.slice(1).join(" "):a==="@container"?p[0][0]==="("?`not ${d}`:p[1]==="not"?`${p[0]} ${p.slice(2).join(" ")}`:`${p[0]} not ${p.slice(1).join(" ")}`:`not ${d}`})}let n=["@media","@supports","@container"];function s(a){for(let l of n){if(l!==a.name)continue;let d=W(a.params,",");return d.length>1?null:(d=t(a.name,d),J(a.name,d.join(", ")))}return null}function i(a){return a.includes("::")?null:`&:not(${W(a,",").map(l=>(l=l.replaceAll("&","*"),l)).join(", ")})`}r.compound("not",3,(a,l)=>{if(l.variant.kind==="arbitrary"&&l.variant.relative||l.modifier)return null;let d=!1;if(R([a],(p,h)=>{if(p.kind!=="rule"&&p.kind!=="at-rule"||p.nodes.length>0)return M.Continue;let g=[],b=[],m=h.path();m.push(p);for(let k of m)k.kind==="at-rule"?g.push(k):k.kind==="rule"&&b.push(k);if(g.length>1||b.length>1)return M.Stop;let w=[];for(let k of b){let A=i(k.selector);if(!A)return d=!1,M.Stop;w.push(X(A,[]))}for(let k of g){let A=s(k);if(!A)return d=!1,M.Stop;w.push(A)}return Object.assign(a,X("&",w)),d=!0,M.Skip}),a.kind==="rule"&&a.selector==="&"&&a.nodes.length===1&&Object.assign(a,a.nodes[0]),!d)return null}),r.suggest("not",()=>Array.from(r.keys()).filter(a=>r.compoundsWith("not",a))),r.compound("group",2,(a,l)=>{if(l.variant.kind==="arbitrary"&&l.variant.relative)return null;let d=l.modifier?`:where(.${e.prefix?`${e.prefix}\\:`:""}group\\/${l.modifier.value})`:`:where(.${e.prefix?`${e.prefix}\\:`:""}group)`,p=!1;if(R([a],(h,g)=>{if(h.kind!=="rule")return M.Continue;for(let m of g.path())if(m.kind==="rule")return p=!1,M.Stop;let b=h.selector.replaceAll("&",d);W(b,",").length>1&&(b=`:is(${b})`),h.selector=`&:is(${b} *)`,p=!0}),!p)return null}),r.suggest("group",()=>Array.from(r.keys()).filter(a=>r.compoundsWith("group",a))),r.compound("peer",2,(a,l)=>{if(l.variant.kind==="arbitrary"&&l.variant.relative)return null;let d=l.modifier?`:where(.${e.prefix?`${e.prefix}\\:`:""}peer\\/${l.modifier.value})`:`:where(.${e.prefix?`${e.prefix}\\:`:""}peer)`,p=!1;if(R([a],(h,g)=>{if(h.kind!=="rule")return M.Continue;for(let m of g.path())if(m.kind==="rule")return p=!1,M.Stop;let b=h.selector.replaceAll("&",d);W(b,",").length>1&&(b=`:is(${b})`),h.selector=`&:is(${b} ~ *)`,p=!0}),!p)return null}),r.suggest("peer",()=>Array.from(r.keys()).filter(a=>r.compoundsWith("peer",a))),o("first-letter",["&::first-letter"]),o("first-line",["&::first-line"]),o("marker",["& *::marker","&::marker","& *::-webkit-details-marker","&::-webkit-details-marker"]),o("selection",["& *::selection","&::selection"]),o("file",["&::file-selector-button"]),o("placeholder",["&::placeholder"]),o("backdrop",["&::backdrop"]),o("details-content",["&::details-content"]);{let a=function(){return G([J("@property","--tw-content",[c("syntax",'"*"'),c("initial-value",'""'),c("inherits","false")])])};r.static("before",l=>{l.nodes=[X("&::before",[a(),c("content","var(--tw-content)"),...l.nodes])]},{compounds:0}),r.static("after",l=>{l.nodes=[X("&::after",[a(),c("content","var(--tw-content)"),...l.nodes])]},{compounds:0})}o("first",["&:first-child"]),o("last",["&:last-child"]),o("only",["&:only-child"]),o("odd",["&:nth-child(odd)"]),o("even",["&:nth-child(even)"]),o("first-of-type",["&:first-of-type"]),o("last-of-type",["&:last-of-type"]),o("only-of-type",["&:only-of-type"]),o("visited",["&:visited"]),o("target",["&:target"]),o("open",["&:is([open], :popover-open, :open)"]),o("default",["&:default"]),o("checked",["&:checked"]),o("indeterminate",["&:indeterminate"]),o("placeholder-shown",["&:placeholder-shown"]),o("autofill",["&:autofill"]),o("optional",["&:optional"]),o("required",["&:required"]),o("valid",["&:valid"]),o("invalid",["&:invalid"]),o("user-valid",["&:user-valid"]),o("user-invalid",["&:user-invalid"]),o("in-range",["&:in-range"]),o("out-of-range",["&:out-of-range"]),o("read-only",["&:read-only"]),o("empty",["&:empty"]),o("focus-within",["&:focus-within"]),r.static("hover",a=>{a.nodes=[X("&:hover",[J("@media","(hover: hover)",a.nodes)])]}),o("focus",["&:focus"]),o("focus-visible",["&:focus-visible"]),o("active",["&:active"]),o("enabled",["&:enabled"]),o("disabled",["&:disabled"]),o("inert",["&:is([inert], [inert] *)"]),r.compound("in",2,(a,l)=>{if(l.modifier)return null;let d=!1;if(R([a],(p,h)=>{if(p.kind!=="rule")return M.Continue;for(let g of h.path())if(g.kind==="rule")return d=!1,M.Stop;p.selector=`:where(${p.selector.replaceAll("&","*")}) &`,d=!0}),!d)return null}),r.suggest("in",()=>Array.from(r.keys()).filter(a=>r.compoundsWith("in",a))),r.compound("has",2,(a,l)=>{if(l.modifier)return null;let d=!1;if(R([a],(p,h)=>{if(p.kind!=="rule")return M.Continue;for(let g of h.path())if(g.kind==="rule")return d=!1,M.Stop;p.selector=`&:has(${p.selector.replaceAll("&","*")})`,d=!0}),!d)return null}),r.suggest("has",()=>Array.from(r.keys()).filter(a=>r.compoundsWith("has",a))),r.functional("aria",(a,l)=>{if(!l.value||l.modifier)return null;l.value.kind==="arbitrary"?a.nodes=[X(`&[aria-${qo(l.value.value)}]`,a.nodes)]:a.nodes=[X(`&[aria-${l.value.value}="true"]`,a.nodes)]}),r.suggest("aria",()=>["busy","checked","disabled","expanded","hidden","pressed","readonly","required","selected"]),r.functional("data",(a,l)=>{if(!l.value||l.modifier)return null;a.nodes=[X(`&[data-${qo(l.value.value)}]`,a.nodes)]}),r.functional("nth",(a,l)=>{if(!l.value||l.modifier||l.value.kind==="named"&&!D(l.value.value))return null;a.nodes=[X(`&:nth-child(${l.value.value})`,a.nodes)]}),r.functional("nth-last",(a,l)=>{if(!l.value||l.modifier||l.value.kind==="named"&&!D(l.value.value))return null;a.nodes=[X(`&:nth-last-child(${l.value.value})`,a.nodes)]}),r.functional("nth-of-type",(a,l)=>{if(!l.value||l.modifier||l.value.kind==="named"&&!D(l.value.value))return null;a.nodes=[X(`&:nth-of-type(${l.value.value})`,a.nodes)]}),r.functional("nth-last-of-type",(a,l)=>{if(!l.value||l.modifier||l.value.kind==="named"&&!D(l.value.value))return null;a.nodes=[X(`&:nth-last-of-type(${l.value.value})`,a.nodes)]}),r.functional("supports",(a,l)=>{if(!l.value||l.modifier)return null;let d=l.value.value;if(d===null)return null;if(/^[\w-]*\s*\(/.test(d)){a.nodes=[J("@supports",d.replace(/\b(and|or|not)\b/g," $1 "),a.nodes)];return}d.includes(":")||(d=`${d}: var(--tw)`),(d[0]!=="("||d[d.length-1]!==")")&&(d=`(${d})`),a.nodes=[J("@supports",d,a.nodes)]},{compounds:1}),o("motion-safe",["@media (prefers-reduced-motion: no-preference)"]),o("motion-reduce",["@media (prefers-reduced-motion: reduce)"]),o("contrast-more",["@media (prefers-contrast: more)"]),o("contrast-less",["@media (prefers-contrast: less)"]);{let a=function(l,d,p,h){if(l===d)return 0;let g=h.get(l);if(g===null)return p==="asc"?-1:1;let b=h.get(d);return b===null?p==="asc"?1:-1:zt(g,b,p)};{let l=e.namespace("--breakpoint"),d=new q(p=>{switch(p.kind){case"static":return e.resolveValue(p.root,["--breakpoint"])??null;case"functional":{if(!p.value||p.modifier)return null;let h=null;return p.value.kind==="arbitrary"?h=p.value.value:p.value.kind==="named"&&(h=e.resolveValue(p.value.value,["--breakpoint"])),!h||h.includes("var(")?null:h}case"arbitrary":case"compound":return null}});r.group(()=>{r.functional("max",(p,h)=>{if(h.modifier)return null;let g=d.get(h);if(g===null)return null;p.nodes=[J("@media",`(width < ${g})`,p.nodes)]},{compounds:1})},(p,h)=>a(p,h,"desc",d)),r.suggest("max",()=>Array.from(l.keys()).filter(p=>p!==null)),r.group(()=>{for(let[p,h]of e.namespace("--breakpoint"))p!==null&&r.static(p,g=>{g.nodes=[J("@media",`(width >= ${h})`,g.nodes)]},{compounds:1});r.functional("min",(p,h)=>{if(h.modifier)return null;let g=d.get(h);if(g===null)return null;p.nodes=[J("@media",`(width >= ${g})`,p.nodes)]},{compounds:1})},(p,h)=>a(p,h,"asc",d)),r.suggest("min",()=>Array.from(l.keys()).filter(p=>p!==null))}{let l=e.namespace("--container"),d=new q(p=>{switch(p.kind){case"functional":{if(p.value===null)return null;let h=null;return p.value.kind==="arbitrary"?h=p.value.value:p.value.kind==="named"&&(h=e.resolveValue(p.value.value,["--container"])),!h||h.includes("var(")?null:h}case"static":case"arbitrary":case"compound":return null}});r.group(()=>{r.functional("@max",(p,h)=>{let g=d.get(h);if(g===null)return null;p.nodes=[J("@container",h.modifier?`${h.modifier.value} (width < ${g})`:`(width < ${g})`,p.nodes)]},{compounds:1})},(p,h)=>a(p,h,"desc",d)),r.suggest("@max",()=>Array.from(l.keys()).filter(p=>p!==null)),r.group(()=>{r.functional("@",(p,h)=>{let g=d.get(h);if(g===null)return null;p.nodes=[J("@container",h.modifier?`${h.modifier.value} (width >= ${g})`:`(width >= ${g})`,p.nodes)]},{compounds:1}),r.functional("@min",(p,h)=>{let g=d.get(h);if(g===null)return null;p.nodes=[J("@container",h.modifier?`${h.modifier.value} (width >= ${g})`:`(width >= ${g})`,p.nodes)]},{compounds:1})},(p,h)=>a(p,h,"asc",d)),r.suggest("@min",()=>Array.from(l.keys()).filter(p=>p!==null)),r.suggest("@",()=>Array.from(l.keys()).filter(p=>p!==null))}}return o("portrait",["@media (orientation: portrait)"]),o("landscape",["@media (orientation: landscape)"]),o("ltr",['&:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)']),o("rtl",['&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)']),o("dark",["@media (prefers-color-scheme: dark)"]),o("starting",["@starting-style"]),o("print",["@media print"]),o("forced-colors",["@media (forced-colors: active)"]),o("inverted-colors",["@media (inverted-colors: inverted)"]),o("pointer-none",["@media (pointer: none)"]),o("pointer-coarse",["@media (pointer: coarse)"]),o("pointer-fine",["@media (pointer: fine)"]),o("any-pointer-none",["@media (any-pointer: none)"]),o("any-pointer-coarse",["@media (any-pointer: coarse)"]),o("any-pointer-fine",["@media (any-pointer: fine)"]),o("noscript",["@media (scripting: none)"]),r}function qo(e){if(e.includes("=")){let[r,...o]=W(e,"="),t=o.join("=").trim();if(t[0]==="'"||t[0]==='"')return e;if(t.length>1){let n=t[t.length-1];if(t[t.length-2]===" "&&(n==="i"||n==="I"||n==="s"||n==="S"))return`${r}="${t.slice(0,-2)}" ${n}`}return`${r}="${t}"`}return e}function Bo(e,r){R(e,o=>{if(o.kind==="at-rule"&&o.name==="@slot")return M.ReplaceSkip(r);if(o.kind==="at-rule"&&(o.name==="@keyframes"||o.name==="@property"))return Object.assign(o,G([J(o.name,o.params,o.nodes)])),M.Skip})}function $r(e,r){let o=0;return R(e,t=>{if(t.kind!=="at-rule"||t.name!=="@variant")return;let n=X("&",t.nodes),s=t.params,i=r.parseVariant(s);if(i===null)throw Error(`Cannot use \`@variant\` with unknown variant: ${s}`);if(Gt(n,i,r.variants)===null)throw Error(`Cannot use \`@variant\` with variant: ${s}`);return o|=32,M.Replace(n)}),o}function bl(e,r){let o=Mi(e),t=kl(e),n=new q(h=>Ci(h,p)),s=new q(h=>Array.from(_i(h,p))),i=new q(h=>new q(g=>{let b=wl(g,p,h);try{wr(b.map(({node:m})=>m),p),$r(b.map(({node:m})=>m),p)}catch{return[]}return b})),a=new q(h=>{for(let g of ao(h))e.markUsedVariable(g)});function l(h){let g=[];for(let b of h){let m=!0,{astNodes:w}=Qt([b],p,{onInvalidCandidate(){m=!1}});r&&R(w,k=>(k.src??(k.src=r),M.Continue)),w=lt(w,p,0),g.push(m?w:[])}return g}function d(h){return l(h).map(g=>g.length>0?_e(g):null)}let p={theme:e,utilities:o,variants:t,invalidCandidates:new Set,important:!1,candidatesToCss:d,candidatesToAst:l,getClassOrder(h){return gl(this,h)},getClassList(){return pl(this)},getVariants(){return ml(this)},parseCandidate(h){return s.get(h)},parseVariant(h){return n.get(h)},compileAstNodes(h,g=1){return i.get(g).get(h)},printCandidate(h){return zi(p,h)},printVariant(h){return mr(h)},getVariantOrder(){let h=Array.from(n.values());h.sort((w,k)=>this.variants.compare(w,k));let g=new Map,b,m=0;for(let w of h)w!==null&&(b!==void 0&&this.variants.compare(b,w)!==0&&m++,g.set(w,m),b=w);return g},resolveThemeValue(h,g=!0){let b=h.lastIndexOf("/"),m=null;b!==-1&&(m=h.slice(b+1).trim(),h=h.slice(0,b).trim());let w=e.resolve(null,[h],g?1:0)??void 0;return m&&w?de(w,m):w},trackUsedVariables(h){a.get(h)},canonicalizeCandidates(h,g){return za(this,h,g)},storage:{}};return p}var Yo="container-type.pointer-events.visibility.position.inset.inset-inline.inset-block.inset-inline-start.inset-inline-end.inset-block-start.inset-block-end.top.right.bottom.left.isolation.z-index.order.grid-column.grid-column-start.grid-column-end.grid-row.grid-row-start.grid-row-end.float.clear.--tw-container-component.margin.margin-inline.margin-block.margin-inline-start.margin-inline-end.margin-block-start.margin-block-end.margin-top.margin-right.margin-bottom.margin-left.box-sizing.display.field-sizing.aspect-ratio.height.max-height.min-height.width.max-width.min-width.flex.flex-shrink.flex-grow.flex-basis.table-layout.caption-side.border-collapse.border-spacing.transform-origin.translate.--tw-translate-x.--tw-translate-y.--tw-translate-z.scale.--tw-scale-x.--tw-scale-y.--tw-scale-z.rotate.--tw-rotate-x.--tw-rotate-y.--tw-rotate-z.--tw-skew-x.--tw-skew-y.transform.animation.cursor.touch-action.--tw-pan-x.--tw-pan-y.--tw-pinch-zoom.resize.scroll-snap-type.--tw-scroll-snap-strictness.scroll-snap-align.scroll-snap-stop.scroll-margin.scroll-margin-inline.scroll-margin-block.scroll-margin-inline-start.scroll-margin-inline-end.scroll-margin-block-start.scroll-margin-block-end.scroll-margin-top.scroll-margin-right.scroll-margin-bottom.scroll-margin-left.scroll-padding.scroll-padding-inline.scroll-padding-block.scroll-padding-inline-start.scroll-padding-inline-end.scroll-padding-block-start.scroll-padding-block-end.scroll-padding-top.scroll-padding-right.scroll-padding-bottom.scroll-padding-left.list-style-position.list-style-type.list-style-image.appearance.columns.break-before.break-inside.break-after.grid-auto-columns.grid-auto-flow.grid-auto-rows.grid-template-columns.grid-template-rows.flex-direction.flex-wrap.place-content.place-items.align-content.align-items.justify-content.justify-items.gap.column-gap.row-gap.--tw-space-x-reverse.--tw-space-y-reverse.divide-x-width.divide-y-width.--tw-divide-y-reverse.divide-style.divide-color.place-self.align-self.justify-self.overflow.overflow-x.overflow-y.overscroll-behavior.overscroll-behavior-x.overscroll-behavior-y.scroll-behavior.border-radius.border-start-radius.border-end-radius.border-top-radius.border-right-radius.border-bottom-radius.border-left-radius.border-start-start-radius.border-start-end-radius.border-end-end-radius.border-end-start-radius.border-top-left-radius.border-top-right-radius.border-bottom-right-radius.border-bottom-left-radius.border-width.border-inline-width.border-block-width.border-inline-start-width.border-inline-end-width.border-block-start-width.border-block-end-width.border-top-width.border-right-width.border-bottom-width.border-left-width.border-style.border-inline-style.border-block-style.border-inline-start-style.border-inline-end-style.border-block-start-style.border-block-end-style.border-top-style.border-right-style.border-bottom-style.border-left-style.border-color.border-inline-color.border-block-color.border-inline-start-color.border-inline-end-color.border-block-start-color.border-block-end-color.border-top-color.border-right-color.border-bottom-color.border-left-color.background-color.background-image.--tw-gradient-position.--tw-gradient-stops.--tw-gradient-via-stops.--tw-gradient-from.--tw-gradient-from-position.--tw-gradient-via.--tw-gradient-via-position.--tw-gradient-to.--tw-gradient-to-position.mask-image.--tw-mask-top.--tw-mask-top-from-color.--tw-mask-top-from-position.--tw-mask-top-to-color.--tw-mask-top-to-position.--tw-mask-right.--tw-mask-right-from-color.--tw-mask-right-from-position.--tw-mask-right-to-color.--tw-mask-right-to-position.--tw-mask-bottom.--tw-mask-bottom-from-color.--tw-mask-bottom-from-position.--tw-mask-bottom-to-color.--tw-mask-bottom-to-position.--tw-mask-left.--tw-mask-left-from-color.--tw-mask-left-from-position.--tw-mask-left-to-color.--tw-mask-left-to-position.--tw-mask-linear.--tw-mask-linear-position.--tw-mask-linear-from-color.--tw-mask-linear-from-position.--tw-mask-linear-to-color.--tw-mask-linear-to-position.--tw-mask-radial.--tw-mask-radial-shape.--tw-mask-radial-size.--tw-mask-radial-position.--tw-mask-radial-from-color.--tw-mask-radial-from-position.--tw-mask-radial-to-color.--tw-mask-radial-to-position.--tw-mask-conic.--tw-mask-conic-position.--tw-mask-conic-from-color.--tw-mask-conic-from-position.--tw-mask-conic-to-color.--tw-mask-conic-to-position.box-decoration-break.background-size.background-attachment.background-clip.background-position.background-repeat.background-origin.mask-composite.mask-mode.mask-type.mask-size.mask-clip.mask-position.mask-repeat.mask-origin.fill.stroke.stroke-width.object-fit.object-position.padding.padding-inline.padding-block.padding-inline-start.padding-inline-end.padding-block-start.padding-block-end.padding-top.padding-right.padding-bottom.padding-left.text-align.text-indent.vertical-align.font-family.font-feature-settings.font-size.line-height.font-weight.letter-spacing.text-wrap.overflow-wrap.word-break.text-overflow.hyphens.white-space.color.text-transform.font-style.font-stretch.font-variant-numeric.text-decoration-line.text-decoration-color.text-decoration-style.text-decoration-thickness.text-underline-offset.-webkit-font-smoothing.placeholder-color.caret-color.accent-color.color-scheme.opacity.background-blend-mode.mix-blend-mode.box-shadow.--tw-shadow.--tw-shadow-color.--tw-ring-shadow.--tw-ring-color.--tw-inset-shadow.--tw-inset-shadow-color.--tw-inset-ring-shadow.--tw-inset-ring-color.--tw-ring-offset-width.--tw-ring-offset-color.outline.outline-width.outline-offset.outline-color.--tw-blur.--tw-brightness.--tw-contrast.--tw-drop-shadow.--tw-grayscale.--tw-hue-rotate.--tw-invert.--tw-saturate.--tw-sepia.filter.--tw-backdrop-blur.--tw-backdrop-brightness.--tw-backdrop-contrast.--tw-backdrop-grayscale.--tw-backdrop-hue-rotate.--tw-backdrop-invert.--tw-backdrop-opacity.--tw-backdrop-saturate.--tw-backdrop-sepia.backdrop-filter.transition-property.transition-behavior.transition-delay.transition-duration.transition-timing-function.will-change.contain.content.forced-color-adjust".split(".");function Qt(e,r,{onInvalidCandidate:o,respectImportant:t}={}){let n=new Map,s=[],i=new Map;for(let d of e){if(r.invalidCandidates.has(d)){o==null||o(d);continue}let p=r.parseCandidate(d);if(p.length===0){o==null||o(d);continue}i.set(d,p)}let a=0;(t??!0)&&(a|=1);let l=r.getVariantOrder();for(let[d,p]of i){let h=!1;for(let g of p){let b=r.compileAstNodes(g,a);if(b.length!==0){h=!0;for(let{node:m,propertySort:w}of b){let k=0n;for(let A of g.variants)k|=1n<<BigInt(l.get(A));n.set(m,{properties:w,variants:k,candidate:d}),s.push(m)}}}h||(o==null||o(d))}return s.sort((d,p)=>{let h=n.get(d),g=n.get(p);if(h.variants-g.variants!==0n)return Number(h.variants-g.variants);let b=0;for(;b<h.properties.order.length&&b<g.properties.order.length&&h.properties.order[b]===g.properties.order[b];)b+=1;return(h.properties.order[b]??1/0)-(g.properties.order[b]??1/0)||g.properties.count-h.properties.count||xo(h.candidate,g.candidate)}),{astNodes:s,nodeSorting:n}}function wl(e,r,o){let t=yl(e,r);if(t.length===0)return[];let n=r.important&&!!(o&1),s=[],i=`.${_t(e.raw)}`;for(let a of t){let l=xl(a);(e.important||n)&&Go(a);let d={kind:"rule",selector:i,nodes:a};for(let p of e.variants)if(Gt(d,p,r.variants)===null)return[];s.push({node:d,propertySort:l})}return s}function Gt(e,r,o,t=0){if(r.kind==="arbitrary"){if(r.relative&&t===0)return null;e.nodes=[ce(r.selector,e.nodes)];return}let{applyFn:n}=o.get(r.root);if(r.kind==="compound"){let s=J("@slot");if(Gt(s,r.variant,o,t+1)===null||r.root==="not"&&s.nodes.length>1)return null;for(let i of s.nodes)if(i.kind!=="rule"&&i.kind!=="at-rule"||n(i,r)===null)return null;R(s.nodes,i=>{if((i.kind==="rule"||i.kind==="at-rule")&&i.nodes.length<=0)return i.nodes=e.nodes,M.Skip}),e.nodes=s.nodes;return}if(n(e,r)===null)return null}function Qo(e){var o;let r=((o=e.options)==null?void 0:o.types)??[];return r.length>1&&r.includes("any")}function yl(e,r){if(e.kind==="arbitrary"){let i=e.value;return e.modifier&&(i=se(i,e.modifier,r.theme)),i===null?[]:[[c(e.property,i)]]}let o=r.utilities.get(e.root)??[],t=[],n=o.filter(i=>!Qo(i));for(let i of n){if(i.kind!==e.kind)continue;let a=i.compileFn(e);if(a!==void 0){if(a===null)return t;t.push(a)}}if(t.length>0)return t;let s=o.filter(i=>Qo(i));for(let i of s){if(i.kind!==e.kind)continue;let a=i.compileFn(e);if(a!==void 0){if(a===null)return t;t.push(a)}}return t}function Go(e){for(let r of e)r.kind!=="at-root"&&(r.kind==="declaration"?r.important=!0:(r.kind==="rule"||r.kind==="at-rule")&&Go(r.nodes))}function xl(e){let r=new Set,o=0,t=e.slice(),n=!1;for(;t.length>0;){let s=t.shift();if(s.kind==="declaration"){if(s.value===void 0||(o++,n))continue;if(s.property==="--tw-sort"){let a=Yo.indexOf(s.value??"");if(a!==-1){r.add(a),n=!0;continue}}let i=Yo.indexOf(s.property);i!==-1&&r.add(i)}else if(s.kind==="rule"||s.kind==="at-rule")for(let i of s.nodes)t.push(i)}return{order:Array.from(r).sort((s,i)=>s-i),count:o}}function gt(e,r){let o=0,t=ce("&",e),n=new Set,s=new q(()=>new Set),i=new q(()=>new Set);R([t],(h,g)=>{if(h.kind==="at-rule"){if(h.name==="@keyframes")return R(h.nodes,b=>{if(b.kind==="at-rule"&&b.name==="@apply")throw Error("You cannot use `@apply` inside `@keyframes`.")}),M.Skip;if(h.name==="@utility"){let b=h.params.replace(/-\*$/,"");i.get(b).add(h),R(h.nodes,m=>{if(!(m.kind!=="at-rule"||m.name!=="@apply")){n.add(h);for(let w of Ho(m,r))s.get(h).add(w)}});return}if(h.name==="@apply"){if(g.parent===null)return;o|=1,n.add(g.parent);for(let b of Ho(h,r))for(let m of g.path())n.has(m)&&s.get(m).add(b)}}});let a=new Set,l=[],d=new Set;function p(h,g=[]){if(!a.has(h)){if(d.has(h)){let b=g[(g.indexOf(h)+1)%g.length];throw h.kind==="at-rule"&&h.name==="@utility"&&b.kind==="at-rule"&&b.name==="@utility"&&R(h.nodes,m=>{if(m.kind!=="at-rule"||m.name!=="@apply")return;let w=m.params.split(/\s+/g);for(let k of w)for(let A of r.parseCandidate(k))switch(A.kind){case"arbitrary":break;case"static":case"functional":if(b.params.replace(/-\*$/,"")===A.root)throw Error(`You cannot \`@apply\` the \`${k}\` utility here because it creates a circular dependency.`);break;default:}}),Error(`Circular dependency detected:

${_e([h])}
Relies on:

${_e([b])}`)}d.add(h);for(let b of s.get(h))for(let m of i.get(b))g.push(h),p(m,g),g.pop();a.add(h),d.delete(h),l.push(h)}}for(let h of n)p(h);for(let h of l)"nodes"in h&&R(h.nodes,g=>{if(g.kind!=="at-rule"||g.name!=="@apply")return;let b=g.params.split(/(\s+)/g),m={},w=0;for(let[k,A]of b.entries())k%2==0&&(m[A]=w),w+=A.length;{let k=Qt(Object.keys(m),r,{respectImportant:!1,onInvalidCandidate:x=>{if(r.theme.prefix&&!x.startsWith(r.theme.prefix))throw Error(`Cannot apply unprefixed utility class \`${x}\`. Did you mean \`${r.theme.prefix}:${x}\`?`);if(r.invalidCandidates.has(x))throw Error(`Cannot apply utility class \`${x}\` because it has been explicitly disabled: https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-excluding-classes`);let _=W(x,":");if(_.length>1){let O=_.pop();if(r.candidatesToCss([O])[0]){let E=r.candidatesToCss(_.map(f=>`${f}:[--tw-variant-check:1]`)),u=_.filter((f,v)=>E[v]===null);if(u.length>0){if(u.length===1)throw Error(`Cannot apply utility class \`${x}\` because the ${u.map(f=>`\`${f}\``)} variant does not exist.`);{let f=new Intl.ListFormat("en",{style:"long",type:"conjunction"});throw Error(`Cannot apply utility class \`${x}\` because the ${f.format(u.map(v=>`\`${v}\``))} variants do not exist.`)}}}}throw r.theme.size===0?Error(`Cannot apply unknown utility class \`${x}\`. Are you using CSS modules or similar and missing \`@reference\`? https://tailwindcss.com/docs/functions-and-directives#reference-directive`):Error(`Cannot apply unknown utility class \`${x}\``)}}),A=g.src,y=k.astNodes.map(x=>{var u;let _=(u=k.nodeSorting.get(x))==null?void 0:u.candidate,O=_?m[_]:void 0;if(x=ye(x),!A||!_||O===void 0)return R([x],f=>{f.src=A}),x;let E=[A[0],A[1],A[2]];return E[1]+=7+O,E[2]=E[1]+_.length,R([x],f=>{f.src=E}),x}),S=[];for(let x of y)if(x.kind==="rule")for(let _ of x.nodes)S.push(_);else S.push(x);return M.Replace(S)}});return o}function*Ho(e,r){for(let o of e.params.split(/\s+/g))for(let t of r.parseCandidate(o))switch(t.kind){case"arbitrary":break;case"static":case"functional":yield t.root;break;default:}}async function Jo(e,r,o,t=0,n=!1){let s=0,i=[];return R(e,a=>{if(a.kind==="at-rule"&&(a.name==="@import"||a.name==="@reference")){let l=$l(te(a.params));if(l===null)return;a.name==="@reference"&&(l.media="reference"),s|=2;let{uri:d,layer:p,media:h,supports:g}=l;if(d.startsWith("data:")||d.startsWith("http://")||d.startsWith("https://"))return;let b=Be({},[]);return i.push((async()=>{if(t>100)throw Error(`Exceeded maximum recursion depth while resolving \`${d}\` in \`${r}\`)`);let m=await o(d,r),w=Ot(m.content,{from:n?m.path:void 0});await Jo(w,m.base,o,t+1,n),b.nodes=Sl(a,[Be({base:m.base},w)],p,h,g)})()),M.ReplaceSkip(b)}}),i.length>0&&await Promise.all(i),s}function $l(e){let r,o=null,t=null,n=null;for(let s=0;s<e.length;s++){let i=e[s];if(i.kind!=="separator"){if(i.kind==="word"&&!r){if(!i.value||i.value[0]!=='"'&&i.value[0]!=="'")return null;r=i.value.slice(1,-1);continue}if(i.kind==="function"&&i.value.toLowerCase()==="url"||!r)return null;if((i.kind==="word"||i.kind==="function")&&i.value.toLowerCase()==="layer"){if(o)return null;if(n)throw Error("`layer(\u2026)` in an `@import` should come before any other functions or conditions");o="nodes"in i?ne(i.nodes):"";continue}if(i.kind==="function"&&i.value.toLowerCase()==="supports"){if(n)return null;n=ne(i.nodes);continue}t=ne(e.slice(s));break}}return r?{uri:r,layer:o,media:t,supports:n}:null}function Sl(e,r,o,t,n){let s=r;if(o!==null){let i=J("@layer",o,s);i.src=e.src,s=[i]}if(t!==null){let i=J("@media",t,s);i.src=e.src,s=[i]}if(n!==null){let i=J("@supports",n[0]==="("?n:`(${n})`,s);i.src=e.src,s=[i]}return s}function vt(e){if(Object.prototype.toString.call(e)!=="[object Object]")return!1;let r=Object.getPrototypeOf(e);return r===null||Object.getPrototypeOf(r)===null}function Sr(e,r,o,t=[]){for(let n of r)if(n!=null)for(let s of Reflect.ownKeys(n)){t.push(s);let i=o(e[s],n[s],t);i===void 0?!vt(e[s])||!vt(n[s])?e[s]=n[s]:e[s]=Sr({},[e[s],n[s]],o,t):e[s]=i,t.pop()}return e}function Zo(e,r,o){return function(t,n){let s=t.lastIndexOf("/"),i=null;s!==-1&&(i=t.slice(s+1).trim(),t=t.slice(0,s).trim());let a=(()=>{var g;let l=Dt(t),[d,p]=Tl(e.theme,l),h=o(Xo(r()??{},l)??null);if(typeof h=="string"&&(h=h.replace("<alpha-value>","1")),typeof d!="object")return typeof p!="object"&&p&4?h??d:d;if(typeof h=="object"&&h&&!Array.isArray(h)){let b=Sr({},[h],(m,w)=>w);if(d===null&&Object.hasOwn(h,"__CSS_VALUES__")){let m={};for(let w in h.__CSS_VALUES__)m[w]=h[w],delete b[w];d=m}for(let m in d)m!=="__CSS_VALUES__"&&(((g=h==null?void 0:h.__CSS_VALUES__)==null?void 0:g[m])&4&&Xo(b,m.split("-"))!==void 0||(b[at(m)]=d[m]));return b}if(Array.isArray(d)&&Array.isArray(p)&&Array.isArray(h)){let b=d[0],m=d[1];p[0]&4&&(b=h[0]??b);for(let w of Object.keys(m))p[1][w]&4&&(m[w]=h[1][w]??m[w]);return[b,m]}return d??h})();return i&&typeof a=="string"&&(a=de(a,i)),a??n}}function Tl(e,r){if(r.length===1&&r[0].startsWith("--"))return[e.get([r[0]]),e.getOptions(r[0])];let o=Lt(r),t=new Map,n=new q(()=>new Map),s=e.namespace(`--${o}`);if(s.size===0)return[null,0];let i=new Map;for(let[p,h]of s){if(!p||!p.includes("--")){t.set(p,h),i.set(p,e.getOptions(p?`--${o}-${p}`:`--${o}`));continue}let g=p.indexOf("--"),b=p.slice(0,g),m=p.slice(g+2);m=m.replace(/-([a-z])/g,(w,k)=>k.toUpperCase()),n.get(b===""?null:b).set(m,[h,e.getOptions(`--${o}${p}`)])}let a=e.getOptions(`--${o}`);for(let[p,h]of n){let g=t.get(p);if(typeof g!="string")continue;let b={},m={};for(let[w,[k,A]]of h)b[w]=k,m[w]=A;t.set(p,[g,b]),i.set(p,[a,m])}let l={},d={};for(let[p,h]of t)en(l,[p??"DEFAULT"],h);for(let[p,h]of i)en(d,[p??"DEFAULT"],h);return r[r.length-1]==="DEFAULT"?[(l==null?void 0:l.DEFAULT)??null,d.DEFAULT??0]:"DEFAULT"in l&&Object.keys(l).length===1?[l.DEFAULT,d.DEFAULT??0]:(l.__CSS_VALUES__=d,[l,d])}function Xo(e,r){for(let o=0;o<r.length;++o){let t=r[o];if((e==null?void 0:e[t])===void 0){if(r[o+1]===void 0)return;r[o+1]=`${t}-${r[o+1]}`;continue}if(typeof e=="string")return;e=e[t]}return e}function en(e,r,o){for(let t of r.slice(0,-1))e[t]===void 0&&(e[t]={}),e=e[t];e[r[r.length-1]]=o}var tn=/^[a-z@][a-zA-Z0-9/%._-]*$/;function rn({designSystem:e,ast:r,resolvedConfig:o,featuresRef:t,referenceMode:n,src:s}){let i={addBase(a){if(n)return;let l=De(a);t.current|=wr(l,e);let d=J("@layer","base",l);R([d],p=>{p.src=s}),r.push(d)},addVariant(a,l){if(!Wo.test(a))throw Error(`\`addVariant('${a}')\` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number.`);if(typeof l=="string"){if(l.includes(":merge("))return}else if(Array.isArray(l)){if(l.some(d=>d.includes(":merge(")))return}else if(typeof l=="object"){let d=function(p,h){return Object.entries(p).some(([g,b])=>g.includes(h)||typeof b=="object"&&d(b,h))};if(d(l,":merge("))return}typeof l=="string"||Array.isArray(l)?e.variants.static(a,d=>{d.nodes=on(l,d.nodes)},{compounds:mt(typeof l=="string"?[l]:l)}):typeof l=="object"&&e.variants.fromAst(a,De(l),e)},matchVariant(a,l,d){function p(g,b,m){return on(l(g,{modifier:(b==null?void 0:b.value)??null}),m)}try{let g=l("a",{modifier:null});if(typeof g=="string"&&g.includes(":merge(")||Array.isArray(g)&&g.some(b=>b.includes(":merge(")))return}catch{}let h=Object.keys((d==null?void 0:d.values)??{});e.variants.group(()=>{e.variants.functional(a,(g,b)=>{if(!b.value){if(d!=null&&d.values&&"DEFAULT"in d.values){g.nodes=p(d.values.DEFAULT,b.modifier,g.nodes);return}return null}if(b.value.kind==="arbitrary")g.nodes=p(b.value.value,b.modifier,g.nodes);else if(b.value.kind==="named"&&(d!=null&&d.values)){let m=d.values[b.value.value];if(typeof m!="string")return null;g.nodes=p(m,b.modifier,g.nodes)}else return null})},(g,b)=>{var x,_,O,E;if(g.kind!=="functional"||b.kind!=="functional")return 0;let m=g.value?g.value.value:"DEFAULT",w=b.value?b.value.value:"DEFAULT",k=((x=d==null?void 0:d.values)==null?void 0:x[m])??m,A=((_=d==null?void 0:d.values)==null?void 0:_[w])??w;if(d&&typeof d.sort=="function")return d.sort({value:k,modifier:((O=g.modifier)==null?void 0:O.value)??null},{value:A,modifier:((E=b.modifier)==null?void 0:E.value)??null});let y=h.indexOf(m),S=h.indexOf(w);return y=y===-1?h.length:y,S=S===-1?h.length:S,y===S?k<A?-1:1:y-S}),e.variants.suggest(a,()=>Object.keys((d==null?void 0:d.values)??{}).filter(g=>g!=="DEFAULT"))},addUtilities(a){a=Array.isArray(a)?a:[a];let l=a.flatMap(p=>Object.entries(p));l=l.flatMap(([p,h])=>W(p,",").map(g=>[g.trim(),h]));let d=new q(()=>[]);for(let[p,h]of l){if(p.startsWith("@keyframes ")){if(!n){let m=ce(p,De(h));R([m],w=>{w.src=s}),r.push(m)}continue}let g=dt(p),b=!1;if(R(g,m=>{if(m.kind==="selector"&&m.value[0]==="."&&tn.test(m.value.slice(1))){let w=m.value;m.value="&";let k=Ue(g),A=w.slice(1),y=k==="&"?De(h):[ce(k,De(h))];d.get(A).push(...y),b=!0,m.value=w;return}if(m.kind==="function"&&m.value===":not")return M.Skip}),!b)throw Error(`\`addUtilities({ '${p}' : \u2026 })\` defines an invalid utility selector. Utilities must be a single class name and start with a lowercase letter, eg. \`.scrollbar-none\`.`)}for(let[p,h]of d)e.theme.prefix&&R(h,g=>{if(g.kind==="rule"){let b=dt(g.selector);R(b,m=>{m.kind==="selector"&&m.value[0]==="."&&(m.value=`.${e.theme.prefix}\\:${m.value.slice(1)}`)}),g.selector=Ue(b)}}),e.utilities.static(p,g=>{let b=h.map(ye);return nn(b,p,g.raw),t.current|=gt(b,e),b})},matchUtilities(a,l){let d=l!=null&&l.type?Array.isArray(l==null?void 0:l.type)?l.type:[l.type]:["any"];for(let[p,h]of Object.entries(a)){let g=function({negative:b}){return m=>{var x,_;if(((x=m.value)==null?void 0:x.kind)==="arbitrary"&&d.length>0&&!d.includes("any")&&(m.value.dataType&&!d.includes(m.value.dataType)||!m.value.dataType&&!ae(m.value.value,d)))return;let w=d.includes("color"),k=null,A=!1;{let O=(l==null?void 0:l.values)??{};w&&(O=Object.assign({inherit:"inherit",transparent:"transparent",current:"currentcolor"},O)),m.value?m.value.kind==="arbitrary"?k=m.value.value:m.value.fraction&&O[m.value.fraction]?(k=O[m.value.fraction],A=!0):O[m.value.value]?k=O[m.value.value]:O.__BARE_VALUE__&&(k=O.__BARE_VALUE__(m.value)??null,A=(m.value.fraction!==null&&(k==null?void 0:k.includes("/")))??!1):k=O.DEFAULT??null}if(k===null)return;let y;{let O=(l==null?void 0:l.modifiers)??null;y=m.modifier?O==="any"||m.modifier.kind==="arbitrary"?m.modifier.value:O!=null&&O[m.modifier.value]?O[m.modifier.value]:w&&!Number.isNaN(Number(m.modifier.value))?`${m.modifier.value}%`:null:null}if(m.modifier&&y===null&&!A)return((_=m.value)==null?void 0:_.kind)==="arbitrary"?null:void 0;w&&y!==null&&(k=de(k,y)),b&&(k=`calc(${k} * -1)`);let S=De(h(k,{modifier:y}));return nn(S,p,m.raw),t.current|=gt(S,e),S}};if(!tn.test(p))throw Error(`\`matchUtilities({ '${p}' : \u2026 })\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter, eg. \`scrollbar\`.`);l!=null&&l.supportsNegativeValues&&e.utilities.functional(`-${p}`,g({negative:!0}),{types:d}),e.utilities.functional(p,g({negative:!1}),{types:d}),e.utilities.suggest(p,()=>{let b=(l==null?void 0:l.values)??{},m=new Set(Object.keys(b));m.delete("__BARE_VALUE__"),m.delete("__CSS_VALUES__"),m.has("DEFAULT")&&(m.delete("DEFAULT"),m.add(null));let w=(l==null?void 0:l.modifiers)??{},k=w==="any"?[]:Object.keys(w);return[{supportsNegative:(l==null?void 0:l.supportsNegativeValues)??!1,values:Array.from(m),modifiers:k}]})}},addComponents(a,l){this.addUtilities(a,l)},matchComponents(a,l){this.matchUtilities(a,l)},theme:Zo(e,()=>o.theme??{},a=>a),prefix(a){return a},config(a,l){let d=o;if(!a)return d;let p=Dt(a);for(let h=0;h<p.length;++h){let g=p[h];if(d[g]===void 0)return l;d=d[g]}return d??l}};return i.addComponents=i.addComponents.bind(i),i.matchComponents=i.matchComponents.bind(i),i}function De(e){let r=[];e=Array.isArray(e)?e:[e];let o=e.flatMap(t=>Object.entries(t));for(let[t,n]of o)if(n!=null&&n!==!1)if(typeof n!="object"){if(!t.startsWith("--")){if(n==="@slot"){r.push(ce(t,[J("@slot")]));continue}t=t.replace(/([A-Z])/g,"-$1").toLowerCase()}r.push(c(t,String(n)))}else if(Array.isArray(n))for(let s of n)typeof s=="string"?r.push(c(t,s)):r.push(ce(t,De(s)));else r.push(ce(t,De(n)));return r}function on(e,r){return(typeof e=="string"?[e]:e).flatMap(o=>{if(o.trim().endsWith("}")){let t=Ot(o.replace("}","{@slot}}"));return Bo(t,r),t}else return ce(o,r)})}function nn(e,r,o){R(e,t=>{if(t.kind==="rule"){let n=dt(t.selector);R(n,s=>{s.kind==="selector"&&s.value===`.${r}`&&(s.value=`.${_t(o)}`)}),t.selector=Ue(n)}})}function Al(e,r){for(let o of Ol(r))e.theme.addKeyframes(o)}function Ol(e){let r=[];if("keyframes"in e.theme)for(let[o,t]of Object.entries(e.theme.keyframes))r.push(J("@keyframes",o,De(t)));return r}function El(e){return{theme:{...ci,colors:({theme:r})=>r("color",{}),extend:{fontSize:({theme:r})=>({...r("text",{})}),boxShadow:({theme:r})=>({...r("shadow",{})}),animation:({theme:r})=>({...r("animate",{})}),aspectRatio:({theme:r})=>({...r("aspect",{})}),borderRadius:({theme:r})=>({...r("radius",{})}),screens:({theme:r})=>({...r("breakpoint",{})}),letterSpacing:({theme:r})=>({...r("tracking",{})}),lineHeight:({theme:r})=>({...r("leading",{})}),transitionDuration:{DEFAULT:e.get(["--default-transition-duration"])??null},transitionTimingFunction:{DEFAULT:e.get(["--default-transition-timing-function"])??null},maxWidth:({theme:r})=>({...r("container",{})})}}}}var _l={blocklist:[],future:{},experimental:{},prefix:"",important:!1,darkMode:null,theme:{},plugins:[],content:{files:[]}};function an(e,r){let o={design:e,configs:[],plugins:[],content:{files:[]},theme:{},extend:{},result:structuredClone(_l)};for(let n of r)Tr(o,n);for(let n of o.configs)"darkMode"in n&&n.darkMode!==void 0&&(o.result.darkMode=n.darkMode??null),"prefix"in n&&n.prefix!==void 0&&(o.result.prefix=n.prefix??""),"blocklist"in n&&n.blocklist!==void 0&&(o.result.blocklist=n.blocklist??[]),"important"in n&&n.important!==void 0&&(o.result.important=n.important??!1);let t=zl(o);return{resolvedConfig:{...o.result,content:o.content,theme:o.theme,plugins:o.plugins},replacedThemeKeys:t}}function Cl(e,r){if(Array.isArray(e)&&vt(e[0]))return e.concat(r);if(Array.isArray(r)&&vt(r[0])&&vt(e))return[e,...r];if(Array.isArray(r))return r}function Tr(e,{config:r,base:o,path:t,reference:n,src:s}){let i=[];for(let d of r.plugins??[])"__isOptionsFunction"in d?i.push({...d(),reference:n,src:s}):"handler"in d?i.push({...d,reference:n,src:s}):i.push({handler:d,reference:n,src:s});if(Array.isArray(r.presets)&&r.presets.length===0)throw Error("Error in the config file/plugin/preset. An empty preset (`preset: []`) is not currently supported.");for(let d of r.presets??[])Tr(e,{path:t,base:o,config:d,reference:n,src:s});for(let d of i)e.plugins.push(d),d.config&&Tr(e,{path:t,base:o,config:d.config,reference:!!d.reference,src:d.src??s});let a=r.content??[],l=Array.isArray(a)?a:a.files;for(let d of l)e.content.files.push(typeof d=="object"?d:{base:o,pattern:d});e.configs.push(r)}function zl(e){var s;let r=new Set,o=Zo(e.design,()=>e.theme,n),t=Object.assign(o,{theme:o,colors:Pr});function n(i){return typeof i=="function"?i(t)??null:i??null}for(let i of e.configs){let a=i.theme??{},l=a.extend??{};for(let d in a)d!=="extend"&&r.add(d);for(let d in Object.assign(e.theme,a),l)(s=e.extend)[d]??(s[d]=[]),e.extend[d].push(l[d])}for(let i in delete e.theme.extend,e.extend){let a=[e.theme[i],...e.extend[i]];e.theme[i]=()=>Sr({},a.map(n),Cl)}for(let i in e.theme)e.theme[i]=n(e.theme[i]);if(e.theme.screens&&typeof e.theme.screens=="object")for(let i of Object.keys(e.theme.screens)){let a=e.theme.screens[i];a&&typeof a=="object"&&("raw"in a||"max"in a||"min"in a&&(e.theme.screens[i]=a.min))}return r}function jl(e,r){let o=e.theme.container||{};if(typeof o!="object"||!o)return;let t=Nl(o,r);t.length!==0&&r.utilities.static("container",()=>t.map(ye))}function Nl({center:e,padding:r,screens:o},t){let n=[],s=null;if(e&&n.push(c("margin-inline","auto")),(typeof r=="string"||typeof r=="object"&&r&&"DEFAULT"in r)&&n.push(c("padding-inline",typeof r=="string"?r:r.DEFAULT)),typeof o=="object"&&o){s=new Map;let i=Array.from(t.theme.namespace("--breakpoint").entries());if(i.sort((a,l)=>zt(a[1],l[1],"asc")),i.length>0){let[a]=i[0];n.push(J("@media",`(width >= --theme(--breakpoint-${a}))`,[c("max-width","none")]))}for(let[a,l]of Object.entries(o)){if(typeof l=="object")if("min"in l)l=l.min;else continue;s.set(a,J("@media",`(width >= ${l})`,[c("max-width",l)]))}}if(typeof r=="object"&&r){let i=Object.entries(r).filter(([a])=>a!=="DEFAULT").map(([a,l])=>[a,t.theme.resolveValue(a,["--breakpoint"]),l]).filter(Boolean);i.sort((a,l)=>zt(a[1],l[1],"asc"));for(let[a,,l]of i)if(s&&s.has(a))s.get(a).nodes.push(c("padding-inline",l));else{if(s)continue;n.push(J("@media",`(width >= theme(--breakpoint-${a}))`,[c("padding-inline",l)]))}}if(s)for(let[,i]of s)n.push(i);return n}function Pl({addVariant:e,config:r}){let o=r("darkMode",null),[t,n=".dark"]=Array.isArray(o)?o:[o];if(t==="variant"){let s;if(Array.isArray(n)||typeof n=="function"?s=n:typeof n=="string"&&(s=[n]),Array.isArray(s))for(let i of s)i===".dark"?(t=!1,console.warn('When using `variant` for `darkMode`, you must provide a selector.\nExample: `darkMode: ["variant", ".your-selector &"]`')):i.includes("&")||(t=!1,console.warn('When using `variant` for `darkMode`, your selector must contain `&`.\nExample `darkMode: ["variant", ".your-selector &"]`'));n=s}t===null||(t==="selector"?e("dark",`&:where(${n}, ${n} *)`):t==="media"?e("dark","@media (prefers-color-scheme: dark)"):t==="variant"?e("dark",n):t==="class"&&e("dark",`&:is(${n} *)`))}function Il(e){for(let[r,o]of[["t","top"],["tr","top right"],["r","right"],["br","bottom right"],["b","bottom"],["bl","bottom left"],["l","left"],["tl","top left"]])e.utilities.suggest(`bg-gradient-to-${r}`,()=>[]),e.utilities.static(`bg-gradient-to-${r}`,()=>[c("--tw-gradient-position",`to ${o} in oklab`),c("background-image","linear-gradient(var(--tw-gradient-stops))")]);e.utilities.suggest("bg-left-top",()=>[]),e.utilities.static("bg-left-top",()=>[c("background-position","left top")]),e.utilities.suggest("bg-right-top",()=>[]),e.utilities.static("bg-right-top",()=>[c("background-position","right top")]),e.utilities.suggest("bg-left-bottom",()=>[]),e.utilities.static("bg-left-bottom",()=>[c("background-position","left bottom")]),e.utilities.suggest("bg-right-bottom",()=>[]),e.utilities.static("bg-right-bottom",()=>[c("background-position","right bottom")]),e.utilities.suggest("object-left-top",()=>[]),e.utilities.static("object-left-top",()=>[c("object-position","left top")]),e.utilities.suggest("object-right-top",()=>[]),e.utilities.static("object-right-top",()=>[c("object-position","right top")]),e.utilities.suggest("object-left-bottom",()=>[]),e.utilities.static("object-left-bottom",()=>[c("object-position","left bottom")]),e.utilities.suggest("object-right-bottom",()=>[]),e.utilities.static("object-right-bottom",()=>[c("object-position","right bottom")]),e.utilities.suggest("max-w-screen",()=>[]),e.utilities.functional("max-w-screen",r=>{if(!r.value||r.value.kind==="arbitrary")return;let o=e.theme.resolve(r.value.value,["--breakpoint"]);if(o)return[c("max-width",o)]}),e.utilities.suggest("overflow-ellipsis",()=>[]),e.utilities.static("overflow-ellipsis",()=>[c("text-overflow","ellipsis")]),e.utilities.suggest("decoration-slice",()=>[]),e.utilities.static("decoration-slice",()=>[c("-webkit-box-decoration-break","slice"),c("box-decoration-break","slice")]),e.utilities.suggest("decoration-clone",()=>[]),e.utilities.static("decoration-clone",()=>[c("-webkit-box-decoration-break","clone"),c("box-decoration-break","clone")]),e.utilities.suggest("flex-shrink",()=>[]),e.utilities.functional("flex-shrink",r=>{if(!r.modifier){if(!r.value)return[c("flex-shrink","1")];if(r.value.kind==="arbitrary"||D(r.value.value))return[c("flex-shrink",r.value.value)]}}),e.utilities.suggest("flex-grow",()=>[]),e.utilities.functional("flex-grow",r=>{if(!r.modifier){if(!r.value)return[c("flex-grow","1")];if(r.value.kind==="arbitrary"||D(r.value.value))return[c("flex-grow",r.value.value)]}}),e.utilities.suggest("order-none",()=>[]),e.utilities.static("order-none",()=>[c("order","0")]),e.utilities.suggest("break-words",()=>[]),e.utilities.static("break-words",()=>[c("overflow-wrap","break-word")]);for(let[r,o]of[["start","inset-inline-start"],["end","inset-inline-end"]]){let t=function({negative:n}){return s=>{if(!s.value){if(s.modifier)return;let a=e.theme.resolve(null,["--inset","--spacing"]);return a===null?void 0:[c(o,n?`calc(${a} * -1)`:a)]}if(s.value.kind==="arbitrary"){if(s.modifier)return;let a=s.value.value;return[c(o,n?`calc(${a} * -1)`:a)]}let i=e.theme.resolve(s.value.fraction??s.value.value,["--inset","--spacing"]);if(i===null&&s.value.fraction){let[a,l]=W(s.value.fraction,"/");if(!D(a)||!D(l))return;i=`calc(${s.value.fraction} * 100%)`}if(i===null&&n){let a=e.theme.resolve(null,["--spacing"]);if(a&&pe(s.value.value)&&(i=`calc(${a} * -${s.value.value})`,i!==null))return[c(o,i)]}if(i===null){let a=e.theme.resolve(null,["--spacing"]);a&&pe(s.value.value)&&(i=`calc(${a} * ${s.value.value})`)}if(i!==null)return[c(o,n?`calc(${i} * -1)`:i)]}};e.utilities.static(`${r}-auto`,()=>[c(o,"auto")]),e.utilities.static(`${r}-full`,()=>[c(o,"100%")]),e.utilities.static(`-${r}-full`,()=>[c(o,"-100%")]),e.utilities.static(`${r}-px`,()=>[c(o,"1px")]),e.utilities.static(`-${r}-px`,()=>[c(o,"-1px")]),e.utilities.functional(`-${r}`,t({negative:!0})),e.utilities.functional(r,t({negative:!1}))}}function Fl(e,r){var s;let o=e.theme.screens||{},t=((s=r.variants.get("min"))==null?void 0:s.order)??0,n=[];for(let[i,a]of Object.entries(o)){let l=function(b){r.variants.static(i,m=>{m.nodes=[J("@media",g,m.nodes)]},{order:b})},d=r.variants.get(i),p=r.theme.resolveValue(i,["--breakpoint"]);if(d&&p&&!r.theme.hasDefault(`--breakpoint-${i}`))continue;let h=!0;typeof a=="string"&&(h=!1);let g=Ll(a);h?n.push(l):l(t)}if(n.length!==0){for(let[,i]of r.variants.variants)i.order>t&&(i.order+=n.length);r.variants.compareFns=new Map(Array.from(r.variants.compareFns).map(([i,a])=>(i>t&&(i+=n.length),[i,a])));for(let[i,a]of n.entries())a(t+i+1)}}function Ll(e){return(Array.isArray(e)?e:[e]).map(r=>typeof r=="string"?{min:r}:r&&typeof r=="object"?r:null).map(r=>{if(r===null)return null;if("raw"in r)return r.raw;let o="";return r.max!==void 0&&(o+=`${r.max} >= `),o+="width",r.min!==void 0&&(o+=` >= ${r.min}`),`(${o})`}).filter(Boolean).join(", ")}function Dl(e,r){let o=e.theme.aria||{},t=e.theme.supports||{},n=e.theme.data||{};if(Object.keys(o).length>0){let s=r.variants.get("aria"),i=s==null?void 0:s.applyFn,a=s==null?void 0:s.compounds;r.variants.functional("aria",(l,d)=>{let p=d.value;return p&&p.kind==="named"&&p.value in o?i==null?void 0:i(l,{...d,value:{kind:"arbitrary",value:o[p.value]}}):i==null?void 0:i(l,d)},{compounds:a})}if(Object.keys(t).length>0){let s=r.variants.get("supports"),i=s==null?void 0:s.applyFn,a=s==null?void 0:s.compounds;r.variants.functional("supports",(l,d)=>{let p=d.value;return p&&p.kind==="named"&&p.value in t?i==null?void 0:i(l,{...d,value:{kind:"arbitrary",value:t[p.value]}}):i==null?void 0:i(l,d)},{compounds:a})}if(Object.keys(n).length>0){let s=r.variants.get("data"),i=s==null?void 0:s.applyFn,a=s==null?void 0:s.compounds;r.variants.functional("data",(l,d)=>{let p=d.value;return p&&p.kind==="named"&&p.value in n?i==null?void 0:i(l,{...d,value:{kind:"arbitrary",value:n[p.value]}}):i==null?void 0:i(l,d)},{compounds:a})}}var Ml=/^[a-z]+$/;async function Rl({designSystem:e,base:r,ast:o,loadModule:t,sources:n}){let s=0,i=[],a=[];R(o,(h,g)=>{if(h.kind!=="at-rule")return;let b=cr(g);if(h.name==="@plugin"){if(b.parent!==null)throw Error("`@plugin` cannot be nested.");let m=h.params.slice(1,-1);if(m.length===0)throw Error("`@plugin` must have a path.");let w={};for(let k of h.nodes??[]){if(k.kind!=="declaration")throw Error(`Unexpected \`@plugin\` option:

${_e([k])}

\`@plugin\` options must be a flat list of declarations.`);if(k.value===void 0)continue;let A=k.value,y=W(A,",").map(S=>{if(S=S.trim(),S==="null")return null;if(S==="true")return!0;if(S==="false")return!1;if(Number.isNaN(Number(S))){if(S[0]==='"'&&S[S.length-1]==='"'||S[0]==="'"&&S[S.length-1]==="'")return S.slice(1,-1);if(S[0]==="{"&&S[S.length-1]==="}")throw Error(`Unexpected \`@plugin\` option: Value of declaration \`${_e([k]).trim()}\` is not supported.

Using an object as a plugin option is currently only supported in JavaScript configuration files.`)}else return Number(S);return S});w[k.property]=y.length===1?y[0]:y}return i.push([{id:m,base:b.context.base,reference:!!b.context.reference,src:h.src},Object.keys(w).length>0?w:null]),s|=4,M.Replace([])}if(h.name==="@config"){if(h.nodes.length>0)throw Error("`@config` cannot have a body.");if(b.parent!==null)throw Error("`@config` cannot be nested.");return a.push({id:h.params.slice(1,-1),base:b.context.base,reference:!!b.context.reference,src:h.src}),s|=4,M.Replace([])}}),Il(e);let l=e.resolveThemeValue;if(e.resolveThemeValue=function(h,g){return h.startsWith("--")?l(h,g):(s|=ln({designSystem:e,base:r,ast:o,sources:n,configs:[],pluginDetails:[]}),e.resolveThemeValue(h,g))},!i.length&&!a.length)return 0;let[d,p]=await Promise.all([Promise.all(a.map(async({id:h,base:g,reference:b,src:m})=>{let w=await t(h,g,"config");return{path:h,base:w.base,config:w.module,reference:b,src:m}})),Promise.all(i.map(async([{id:h,base:g,reference:b,src:m},w])=>{let k=await t(h,g,"plugin");return{path:h,base:k.base,plugin:k.module,options:w,reference:b,src:m}}))]);return s|=ln({designSystem:e,base:r,ast:o,sources:n,configs:d,pluginDetails:p}),s}function ln({designSystem:e,base:r,ast:o,sources:t,configs:n,pluginDetails:s}){let i=0,a=[...s.map(m=>{if(!m.options)return{config:{plugins:[m.plugin]},base:m.base,reference:m.reference,src:m.src};if("__isOptionsFunction"in m.plugin)return{config:{plugins:[m.plugin(m.options)]},base:m.base,reference:m.reference,src:m.src};throw Error(`The plugin "${m.path}" does not accept options`)}),...n],{resolvedConfig:l}=an(e,[{config:El(e.theme),base:r,reference:!0,src:void 0},...a,{config:{plugins:[Pl]},base:r,reference:!0,src:void 0}]),{resolvedConfig:d,replacedThemeKeys:p}=an(e,a),h={designSystem:e,ast:o,resolvedConfig:l,featuresRef:{set current(m){i|=m}}},g=rn({...h,referenceMode:!1,src:void 0}),b=e.resolveThemeValue;e.resolveThemeValue=function(m,w){if(m[0]==="-"&&m[1]==="-")return b(m,w);let k=g.theme(m,void 0);if(Array.isArray(k)&&k.length===2)return k[0];if(Array.isArray(k))return k.join(", ");if(typeof k=="object"&&k&&"DEFAULT"in k)return k.DEFAULT;if(typeof k=="string")return k};for(let{handler:m,reference:w,src:k}of l.plugins)m(rn({...h,referenceMode:w??!1,src:k}));if(ia(e,d,p),Al(e,d),Dl(d,e),Fl(d,e),jl(d,e),!e.theme.prefix&&l.prefix){if(l.prefix.endsWith("-")&&(l.prefix=l.prefix.slice(0,-1),console.warn(`The prefix "${l.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only and is written as a variant before all utilities. We have fixed up the prefix for you. Remove the trailing \`-\` to silence this warning.`)),!Ml.test(l.prefix))throw Error(`The prefix "${l.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);e.theme.prefix=l.prefix}if(!e.important&&l.important===!0&&(e.important=!0),typeof l.important=="string"){let m=l.important;R(o,(w,k)=>{var y;if(w.kind!=="at-rule"||w.name!=="@tailwind"||w.params!=="utilities")return;let A=cr(k);return((y=A.parent)==null?void 0:y.kind)==="rule"&&A.parent.selector===m?M.Stop:M.ReplaceStop(X(m,[w]))})}for(let m of l.blocklist)e.invalidCandidates.add(m);for(let m of l.content.files){if("raw"in m)throw Error(`Error in the config file/plugin/preset. The \`content\` key contains a \`raw\` entry:

${JSON.stringify(m,null,2)}

This feature is not currently supported.`);let w=!1;m.pattern[0]=="!"&&(w=!0,m.pattern=m.pattern.slice(1)),t.push({...m,negated:w})}return i}function Vl({ast:e}){let r=new q(n=>Vr(n.code)),o=new q(n=>({url:n.file,content:n.code,ignore:!1})),t={file:null,sources:[],mappings:[]};R(e,n=>{if(!n.src||!n.dst)return;let s=o.get(n.src[0]);if(!s.content)return;let i=r.get(n.src[0]),a=r.get(n.dst[0]),l=s.content.slice(n.src[1],n.src[2]),d=0;for(let g of l.split(`
`)){if(g.trim()!==""){let b=i.find(n.src[1]+d),m=a.find(n.dst[1]);t.mappings.push({name:null,originalPosition:{source:s,...b},generatedPosition:m})}d+=g.length,d+=1}let p=i.find(n.src[2]),h=a.find(n.dst[2]);t.mappings.push({name:null,originalPosition:{source:s,...p},generatedPosition:h})});for(let n of r.keys())t.sources.push(o.get(n));return t.mappings.sort((n,s)=>{var i,a,l,d;return n.generatedPosition.line-s.generatedPosition.line||n.generatedPosition.column-s.generatedPosition.column||(((i=n.originalPosition)==null?void 0:i.line)??0)-(((a=s.originalPosition)==null?void 0:a.line)??0)||(((l=n.originalPosition)==null?void 0:l.column)??0)-(((d=s.originalPosition)==null?void 0:d.column)??0)}),t}var sn=/^(-?\d+)\.\.(-?\d+)(?:\.\.(-?\d+))?$/;function Ar(e){let r=e.indexOf("{");if(r===-1)return[e];let o=[],t=e.slice(0,r),n=e.slice(r),s=0,i=n.lastIndexOf("}");for(let h=0;h<n.length;h++){let g=n[h];if(g==="{")s++;else if(g==="}"&&(s--,s===0)){i=h;break}}if(i===-1)throw Error(`The pattern \`${e}\` is not balanced.`);let a=n.slice(1,i),l=n.slice(i+1),d;d=Kl(a)?Ul(a):W(a,","),d=d.flatMap(h=>Ar(h));let p=Ar(l);for(let h of p)for(let g of d)o.push(t+g+h);return o}function Kl(e){return sn.test(e)}function Ul(e){let r=e.match(sn);if(!r)return[e];let[,o,t,n]=r,s=n?parseInt(n,10):void 0,i=[];if(/^-?\d+$/.test(o)&&/^-?\d+$/.test(t)){let a=parseInt(o,10),l=parseInt(t,10);if(s===void 0&&(s=a<=l?1:-1),s===0)throw Error("Step cannot be zero in sequence expansion.");let d=a<l;d&&s<0&&(s=-s),!d&&s>0&&(s=-s);for(let p=a;d?p<=l:p>=l;p+=s)i.push(p.toString())}return i}function Wl(e,r){let o=new Set,t=new Set,n=[];function s(i,a=[]){var l;if(e.has(i)&&!o.has(i)){t.has(i)&&((l=r.onCircularDependency)==null||l.call(r,a,i)),t.add(i);for(let d of e.get(i)??[])a.push(i),s(d,a),a.pop();o.add(i),t.delete(i),n.push(i)}}for(let i of e.keys())s(i);return n}var ql=/^[a-z]+$/,Bl=(e=>(e[e.None=0]="None",e[e.AtProperty=1]="AtProperty",e[e.ColorMix=2]="ColorMix",e[e.All=3]="All",e))(Bl||{});function Yl(){throw Error("No `loadModule` function provided to `compile`")}function Ql(){throw Error("No `loadStylesheet` function provided to `compile`")}function Gl(e){let r=0,o=null;for(let t of W(e," "))t==="reference"?r|=2:t==="inline"?r|=1:t==="default"?r|=4:t==="static"?r|=8:t.startsWith("prefix(")&&t.endsWith(")")&&(o=t.slice(7,-1));return[r,o]}var Hl=(e=>(e[e.None=0]="None",e[e.AtApply=1]="AtApply",e[e.AtImport=2]="AtImport",e[e.JsPluginCompat=4]="JsPluginCompat",e[e.ThemeFunction=8]="ThemeFunction",e[e.Utilities=16]="Utilities",e[e.Variants=32]="Variants",e[e.AtTheme=64]="AtTheme",e))(Hl||{});async function un(e,{base:r="",from:o,loadModule:t=Yl,loadStylesheet:n=Ql}={}){var S;let s=0;e=[Be({base:r},e)],s|=await Jo(e,r,n,0,o!==void 0);let i=null,a=new gi,l=new Map,d=new Map,p=[],h=null,g=null,b=[],m=[],w=[],k=[],A=null;R(e,(x,_)=>{if(x.kind!=="at-rule")return;let O=cr(_);if(x.name==="@tailwind"&&(x.params==="utilities"||x.params.startsWith("utilities"))){if(g!==null||O.context.reference)return M.Replace([]);let E=W(x.params," ");for(let u of E)if(u.startsWith("source(")){let f=u.slice(7,-1);if(f==="none"){A=f;continue}if(f[0]==='"'&&f[f.length-1]!=='"'||f[0]==="'"&&f[f.length-1]!=="'"||f[0]!=="'"&&f[0]!=='"')throw Error("`source(\u2026)` paths must be quoted.");A={base:O.context.sourceBase??O.context.base,pattern:f.slice(1,-1)}}g=x,s|=16}if(x.name==="@utility"){if(O.parent!==null)throw Error("`@utility` cannot be nested.");if(x.nodes.length===0)throw Error(`\`@utility ${x.params}\` is empty. Utilities should include at least one property.`);let E=Ri(x);if(E===null){if(!x.params.endsWith("-*")){if(x.params.endsWith("*"))throw Error(`\`@utility ${x.params}\` defines an invalid utility name. A functional utility must end in \`-*\`.`);if(x.params.includes("*"))throw Error(`\`@utility ${x.params}\` defines an invalid utility name. The dynamic portion marked by \`-*\` must appear once at the end.`)}throw Error(`\`@utility ${x.params}\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter.`)}p.push(E)}if(x.name==="@source"){if(x.nodes.length>0)throw Error("`@source` cannot have a body.");if(O.parent!==null)throw Error("`@source` cannot be nested.");let E=!1,u=!1,f=x.params;if(f[0]==="n"&&f.startsWith("not ")&&(E=!0,f=f.slice(4)),f[0]==="i"&&f.startsWith("inline(")&&(u=!0,f=f.slice(7,-1).trim()),f[0]==='"'&&f[f.length-1]!=='"'||f[0]==="'"&&f[f.length-1]!=="'"||f[0]!=="'"&&f[0]!=='"')throw Error("`@source` paths must be quoted.");let v=f.slice(1,-1);if(u){let T=E?k:w,$=W(v," ");for(let C of $)for(let j of Ar(C))T.push(j)}else m.push({base:O.context.base,pattern:v,negated:E});return M.ReplaceSkip([])}if(x.name==="@variant"&&(O.parent===null?x.nodes.length===0?x.name="@custom-variant":(R(x.nodes,E=>{if(E.kind==="at-rule"&&E.name==="@slot")return x.name="@custom-variant",M.Stop}),x.name==="@variant"&&b.push(x)):b.push(x)),x.name==="@custom-variant"){if(O.parent!==null)throw Error("`@custom-variant` cannot be nested.");let[E,u]=W(x.params," ");if(!Wo.test(E))throw Error(`\`@custom-variant ${E}\` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number.`);if(x.nodes.length>0&&u)throw Error(`\`@custom-variant ${E}\` cannot have both a selector and a body.`);if(x.nodes.length===0){if(!u)throw Error(`\`@custom-variant ${E}\` has no selector or body.`);let f=W(u.slice(1,-1),",");if(f.length===0||f.some($=>$.trim()===""))throw Error(`\`@custom-variant ${E} (${f.join(",")})\` selector is invalid.`);let v=[],T=[];for(let $ of f)$=$.trim(),$[0]==="@"?v.push($):T.push($);l.set(E,$=>{$.variants.static(E,C=>{let j=[];T.length>0&&j.push(X(T.join(", "),C.nodes));for(let z of v)j.push(ce(z,C.nodes));C.nodes=j},{compounds:mt([...T,...v])})}),d.set(E,new Set)}else{let f=new Set;R(x.nodes,v=>{v.kind==="at-rule"&&v.name==="@variant"&&f.add(v.params)}),l.set(E,v=>{v.variants.fromAst(E,x.nodes,v)}),d.set(E,f)}return M.ReplaceSkip([])}if(x.name==="@media"){let E=W(x.params," "),u=[];for(let f of E)if(f.startsWith("source(")){let v=f.slice(7,-1);R(x.nodes,T=>{if(T.kind==="at-rule"&&T.name==="@tailwind"&&T.params==="utilities")return T.params+=` source(${v})`,M.ReplaceStop([Be({sourceBase:O.context.base},[T])])})}else if(f.startsWith("theme(")){let v=f.slice(6,-1),T=v.includes("reference");R(x.nodes,$=>{if($.kind!=="context"){if($.kind!=="at-rule"){if(T)throw Error('Files imported with `@import "\u2026" theme(reference)` must only contain `@theme` blocks.\nUse `@reference "\u2026";` instead.');return M.Continue}if($.name==="@theme")return $.params+=" "+v,M.Skip}})}else if(f.startsWith("prefix(")){let v=f.slice(7,-1);R(x.nodes,T=>{if(T.kind==="at-rule"&&T.name==="@theme")return T.params+=` prefix(${v})`,M.Skip})}else f==="important"?i=!0:f==="reference"?x.nodes=[Be({reference:!0},x.nodes)]:u.push(f);if(u.length>0)x.params=u.join(" ");else if(E.length>0)return M.Replace(x.nodes);return M.Continue}if(x.name==="@theme"){let[E,u]=Gl(x.params);if(s|=64,O.context.reference&&(E|=2),u){if(!ql.test(u))throw Error(`The prefix "${u}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);a.prefix=u}return R(x.nodes,f=>{if(f.kind==="at-rule"&&f.name==="@keyframes")return a.addKeyframes(f),M.Skip;if(f.kind==="comment")return;if(f.kind==="declaration"&&f.property.startsWith("--")){a.add(at(f.property),f.value??"",E,f.src);return}let v=_e([J(x.name,x.params,[f])]).split(`
`).map((T,$,C)=>`${$===0||$>=C.length-2?" ":">"} ${T}`).join(`
`);throw Error(`\`@theme\` blocks must only contain custom properties or \`@keyframes\`.

${v}`)}),h?M.ReplaceSkip([]):(h=X(":root, :host",[]),h.src=x.src,M.ReplaceSkip(h))}});let y=bl(a,g==null?void 0:g.src);if(i&&(y.important=i),k.length>0)for(let x of k)y.invalidCandidates.add(x);s|=await Rl({designSystem:y,base:r,ast:e,loadModule:t,sources:m});for(let x of l.keys())y.variants.static(x,()=>{});for(let x of Wl(d,{onCircularDependency(_,O){let E=_e(_.map((u,f)=>J("@custom-variant",u,[J("@variant",_[f+1]??O,[])]))).replaceAll(";"," { \u2026 }").replace(`@custom-variant ${O} {`,`@custom-variant ${O} { /* \u2190 */`);throw Error(`Circular dependency detected in custom variants:

${E}`)}}))(S=l.get(x))==null||S(y);for(let x of p)x(y);if(h){let x=[];for(let[O,E]of y.theme.entries()){if(E.options&2)continue;let u=c(_t(O),E.value);u.src=E.src,x.push(u)}let _=y.theme.getKeyframes();for(let O of _)e.push(Be({theme:!0},[G([O])]));h.nodes=[Be({theme:!0},x)]}if(s|=$r(e,y),s|=wr(e,y),s|=gt(e,y),g){let x=g;x.kind="context",x.context={}}return R(e,x=>{if(x.kind==="at-rule")return x.name==="@utility"?M.Replace([]):M.Skip}),{designSystem:y,ast:e,sources:m,root:A,utilitiesNode:g,features:s,inlineCandidates:w}}async function Jl(e,r={}){let{designSystem:o,ast:t,sources:n,root:s,utilitiesNode:i,features:a,inlineCandidates:l}=await un(e,r);t.unshift(lo(`! tailwindcss v${di} | MIT License | https://tailwindcss.com `));function d(m){o.invalidCandidates.add(m)}let p=new Set,h=null,g=0,b=!1;for(let m of l)o.invalidCandidates.has(m)||(p.add(m),b=!0);return{sources:n,root:s,features:a,build(m){if(a===0)return e;if(!i)return h??(h=lt(t,o,r.polyfills)),h;let w=b,k=!1;b=!1;let A=p.size;for(let S of m)if(!o.invalidCandidates.has(S))if(S[0]==="-"&&S[1]==="-"){let x=o.theme.markUsedVariable(S);w||(w=x),k||(k=x)}else p.add(S),w||(w=p.size!==A);if(!w)return h??(h=lt(t,o,r.polyfills)),h;let y=Qt(p,o,{onInvalidCandidate:d}).astNodes;return r.from&&R(y,S=>{S.src??(S.src=i.src)}),!k&&g===y.length?(h??(h=lt(t,o,r.polyfills)),h):(g=y.length,i.nodes=y,h=lt(t,o,r.polyfills),h)}}}async function Zl(e,r={}){let o=Ot(e,{from:r.from}),t=await Jl(o,r),n=o,s=e;return{...t,build(i){let a=t.build(i);return a===n||(s=_e(a,!!r.from),n=a),s},buildSourceMap(){return Vl({ast:n})}}}async function Xl(e,r={}){return(await un(Ot(e,{from:r.from}),r)).designSystem}var es=`@theme default {
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
`,ts=`/*
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
`,rs=`@tailwind utilities;
`,os=`@layer theme, base, components, utilities;

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
`,ke=Nr(In(),1),Or={"/tailwindcss":"@import './tailwindcss/index.css';","/tailwindcss/index.css":os,"/tailwindcss/theme.css":es,"/tailwindcss/preflight.css":ts,"/tailwindcss/utilities.css":rs};async function ns(e){return await fetch(e).then(r=>r.text())}async function is(e,r="/",o={}){r||(r="/");let t=e;if(e.startsWith("fetch:")&&Fn(e.substring(6)))return{base:ke.default.dirname(e),content:await ns(new URL(e.substring(6)).toString()),path:e};{for(let[p,h]of Object.entries(Or))Object.keys(o).includes(p)||(o[p]=h);!e.startsWith("/")&&(Object.keys(Or).includes(ke.default.resolve(e))||Object.keys(Or).includes(ke.default.resolve(e).concat(".css")))&&(r="/",e=ke.default.resolve(e)),e.startsWith(".")&&(e=ke.default.resolve(r,e)),e.startsWith("/")&&(e.endsWith(".css")||(Object.keys(o).some(p=>p.includes(e.concat(".css")))?e=e.concat(".css"):Object.keys(o).some(p=>p.includes(e.concat("/index.css")))&&(e=e.concat("/index.css"))));let n=ke.default.resolve(r,e);if(o[n])return{base:ke.default.dirname(e),content:o[n],path:e};let s=new URL(e,"https://esm.sh");n=s.pathname;let i=!1,a=null,l=null,d=[n];n.endsWith(".css")||(d.push(n+".css"),d.push(n+"/index.css")),n=n.concat(s.search);for(let p of d)try{l=p;let h=await fetch(`https://esm.sh${p}`);if(!h.ok)throw Error();let g=h.headers.get("content-type")||"";if(!g.includes("text/css"))throw Error(`Response is not a CSS file: ${g}`);let b=await h.text();b=b.replace(/@config\s+['|"](.*)['|"]/g,(m,w)=>`@config 'https://esm.sh${ke.default.resolve(ke.default.dirname(e))}${ke.default.resolve(w)}'`).replace(/@plugin\s+['|"](.*)['|"]/g,(m,w)=>`@plugin 'https://esm.sh${ke.default.resolve(ke.default.dirname(e))}${ke.default.resolve(w)}'`),o[p]=b,n=p,i=!0;break}catch(h){a=h}if(a)if(i)console.warn(`Warning: The stylesheet '${t}' was successfully fetched from the CDN using fallback path '${l}'.`);else throw Error(t.startsWith(".")?`Cannot find stylesheet '${t}' on the Simple File System`:`Cannot find stylesheet '${t}' on the CDN`);return{base:ke.default.dirname(e),content:o[n],path:e}}}var cn=Z(((e,r)=>{e.__esModule=!0,e.default=n;function o(s){for(var i=s.toLowerCase(),a="",l=!1,d=0;d<6&&i[d]!==void 0;d++){var p=i.charCodeAt(d),h=p>=97&&p<=102||p>=48&&p<=57;if(l=p===32,!h)break;a+=i[d]}if(a.length!==0){var g=parseInt(a,16);return g>=55296&&g<=57343||g===0||g>1114111?["\uFFFD",a.length+(l?1:0)]:[String.fromCodePoint(g),a.length+(l?1:0)]}}var t=/\\/;function n(s){if(!t.test(s))return s;for(var i="",a=0;a<s.length;a++){if(s[a]==="\\"){var l=o(s.slice(a+1,a+7));if(l!==void 0){i+=l[0],a+=l[1];continue}if(s[a+1]==="\\"){i+="\\",a++;continue}s.length===a+1&&(i+=s[a]);continue}i+=s[a]}return i}r.exports=e.default})),as=Z(((e,r)=>{e.__esModule=!0,e.default=o;function o(t){for(var n=[...arguments].slice(1);n.length>0;){var s=n.shift();if(!t[s])return;t=t[s]}return t}r.exports=e.default})),ls=Z(((e,r)=>{e.__esModule=!0,e.default=o;function o(t){for(var n=[...arguments].slice(1);n.length>0;){var s=n.shift();t[s]||(t[s]={}),t=t[s]}}r.exports=e.default})),ss=Z(((e,r)=>{e.__esModule=!0,e.default=o;function o(t){for(var n="",s=t.indexOf("/*"),i=0;s>=0;){n+=t.slice(i,s);var a=t.indexOf("*/",s+2);if(a<0)return n;i=a+2,s=t.indexOf("/*",i)}return n+=t.slice(i),n}r.exports=e.default})),Ht=Z((e=>{e.__esModule=!0,e.unesc=e.stripComments=e.getProp=e.ensureObject=void 0,e.unesc=r(cn()).default,e.getProp=r(as()).default,e.ensureObject=r(ls()).default,e.stripComments=r(ss()).default;function r(o){return o&&o.__esModule?o:{default:o}}})),We=Z(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=Ht();function t(i,a){for(var l=0;l<a.length;l++){var d=a[l];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(i,d.key,d)}}function n(i,a,l){return a&&t(i.prototype,a),l&&t(i,l),Object.defineProperty(i,"prototype",{writable:!1}),i}var s=function i(a,l){if(typeof a!="object"||!a)return a;var d=new a.constructor;for(var p in a)if(a.hasOwnProperty(p)){var h=a[p];p==="parent"&&typeof h=="object"?l&&(d[p]=l):h instanceof Array?d[p]=h.map(function(g){return i(g,d)}):d[p]=i(h,d)}return d};e.default=(function(){function i(l){l===void 0&&(l={}),Object.assign(this,l),this.spaces=this.spaces||{},this.spaces.before=this.spaces.before||"",this.spaces.after=this.spaces.after||""}var a=i.prototype;return a.remove=function(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this},a.replaceWith=function(){if(this.parent){for(var l in arguments)this.parent.insertBefore(this,arguments[l]);this.remove()}return this},a.next=function(){return this.parent.at(this.parent.index(this)+1)},a.prev=function(){return this.parent.at(this.parent.index(this)-1)},a.clone=function(l){l===void 0&&(l={});var d=s(this);for(var p in l)d[p]=l[p];return d},a.appendToPropertyAndEscape=function(l,d,p){this.raws||(this.raws={});var h=this[l],g=this.raws[l];this[l]=h+d,g||p!==d?this.raws[l]=(g||h)+p:delete this.raws[l]},a.setPropertyAndEscape=function(l,d,p){this.raws||(this.raws={}),this[l]=d,this.raws[l]=p},a.setPropertyWithoutEscape=function(l,d){this[l]=d,this.raws&&delete this.raws[l]},a.isAtPosition=function(l,d){if(this.source&&this.source.start&&this.source.end)return!(this.source.start.line>l||this.source.end.line<l||this.source.start.line===l&&this.source.start.column>d||this.source.end.line===l&&this.source.end.column<d)},a.stringifyProperty=function(l){return this.raws&&this.raws[l]||this[l]},a.valueToString=function(){return String(this.stringifyProperty("value"))},a.toString=function(){return[this.rawSpaceBefore,this.valueToString(),this.rawSpaceAfter].join("")},n(i,[{key:"rawSpaceBefore",get:function(){var l=this.raws&&this.raws.spaces&&this.raws.spaces.before;return l===void 0&&(l=this.spaces&&this.spaces.before),l||""},set:function(l){(0,o.ensureObject)(this,"raws","spaces"),this.raws.spaces.before=l}},{key:"rawSpaceAfter",get:function(){var l=this.raws&&this.raws.spaces&&this.raws.spaces.after;return l===void 0&&(l=this.spaces.after),l||""},set:function(l){(0,o.ensureObject)(this,"raws","spaces"),this.raws.spaces.after=l}}]),i})(),r.exports=e.default})),me=Z((e=>{e.__esModule=!0,e.UNIVERSAL=e.TAG=e.STRING=e.SELECTOR=e.ROOT=e.PSEUDO=e.NESTING=e.ID=e.COMMENT=e.COMBINATOR=e.CLASS=e.ATTRIBUTE=void 0,e.TAG="tag",e.STRING="string",e.SELECTOR="selector",e.ROOT="root",e.PSEUDO="pseudo",e.NESTING="nesting",e.ID="id",e.COMMENT="comment",e.COMBINATOR="combinator",e.CLASS="class",e.ATTRIBUTE="attribute",e.UNIVERSAL="universal"})),Er=Z(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=i(We()),t=s(me());function n(m){if(typeof WeakMap!="function")return null;var w=new WeakMap,k=new WeakMap;return(n=function(A){return A?k:w})(m)}function s(m,w){if(!w&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var k=n(w);if(k&&k.has(m))return k.get(m);var A={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var S in m)if(S!=="default"&&Object.prototype.hasOwnProperty.call(m,S)){var x=y?Object.getOwnPropertyDescriptor(m,S):null;x&&(x.get||x.set)?Object.defineProperty(A,S,x):A[S]=m[S]}return A.default=m,k&&k.set(m,A),A}function i(m){return m&&m.__esModule?m:{default:m}}function a(m,w){var k=typeof Symbol<"u"&&m[Symbol.iterator]||m["@@iterator"];if(k)return(k=k.call(m)).next.bind(k);if(Array.isArray(m)||(k=l(m))||w&&m&&typeof m.length=="number"){k&&(m=k);var A=0;return function(){return A>=m.length?{done:!0}:{done:!1,value:m[A++]}}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(m,w){if(m){if(typeof m=="string")return d(m,w);var k=Object.prototype.toString.call(m).slice(8,-1);if(k==="Object"&&m.constructor&&(k=m.constructor.name),k==="Map"||k==="Set")return Array.from(m);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return d(m,w)}}function d(m,w){(w==null||w>m.length)&&(w=m.length);for(var k=0,A=Array(w);k<w;k++)A[k]=m[k];return A}function p(m,w){for(var k=0;k<w.length;k++){var A=w[k];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(m,A.key,A)}}function h(m,w,k){return w&&p(m.prototype,w),k&&p(m,k),Object.defineProperty(m,"prototype",{writable:!1}),m}function g(m,w){m.prototype=Object.create(w.prototype),m.prototype.constructor=m,b(m,w)}function b(m,w){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(k,A){return k.__proto__=A,k},b(m,w)}e.default=(function(m){g(w,m);function w(A){var y=m.call(this,A)||this;return y.nodes||(y.nodes=[]),y}var k=w.prototype;return k.append=function(A){return A.parent=this,this.nodes.push(A),this},k.prepend=function(A){for(var y in A.parent=this,this.nodes.unshift(A),this.indexes)this.indexes[y]++;return this},k.at=function(A){return this.nodes[A]},k.index=function(A){return typeof A=="number"?A:this.nodes.indexOf(A)},k.removeChild=function(A){A=this.index(A),this.at(A).parent=void 0,this.nodes.splice(A,1);var y;for(var S in this.indexes)y=this.indexes[S],y>=A&&(this.indexes[S]=y-1);return this},k.removeAll=function(){for(var A=a(this.nodes),y;!(y=A()).done;){var S=y.value;S.parent=void 0}return this.nodes=[],this},k.empty=function(){return this.removeAll()},k.insertAfter=function(A,y){var S;y.parent=this;for(var x=this.index(A),_=[],O=2;O<arguments.length;O++)_.push(arguments[O]);(S=this.nodes).splice.apply(S,[x+1,0,y].concat(_)),y.parent=this;var E;for(var u in this.indexes)E=this.indexes[u],x<E&&(this.indexes[u]=E+arguments.length-1);return this},k.insertBefore=function(A,y){var S;y.parent=this;for(var x=this.index(A),_=[],O=2;O<arguments.length;O++)_.push(arguments[O]);(S=this.nodes).splice.apply(S,[x,0,y].concat(_)),y.parent=this;var E;for(var u in this.indexes)E=this.indexes[u],E>=x&&(this.indexes[u]=E+arguments.length-1);return this},k._findChildAtPosition=function(A,y){var S=void 0;return this.each(function(x){if(x.atPosition){var _=x.atPosition(A,y);if(_)return S=_,!1}else if(x.isAtPosition(A,y))return S=x,!1}),S},k.atPosition=function(A,y){if(this.isAtPosition(A,y))return this._findChildAtPosition(A,y)||this},k._inferEndPosition=function(){this.last&&this.last.source&&this.last.source.end&&(this.source=this.source||{},this.source.end=this.source.end||{},Object.assign(this.source.end,this.last.source.end))},k.each=function(A){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach++;var y=this.lastEach;if(this.indexes[y]=0,this.length){for(var S,x;this.indexes[y]<this.length&&(S=this.indexes[y],x=A(this.at(S),S),x!==!1);)this.indexes[y]+=1;if(delete this.indexes[y],x===!1)return!1}},k.walk=function(A){return this.each(function(y,S){var x=A(y,S);if(x!==!1&&y.length&&(x=y.walk(A)),x===!1)return!1})},k.walkAttributes=function(A){var y=this;return this.walk(function(S){if(S.type===t.ATTRIBUTE)return A.call(y,S)})},k.walkClasses=function(A){var y=this;return this.walk(function(S){if(S.type===t.CLASS)return A.call(y,S)})},k.walkCombinators=function(A){var y=this;return this.walk(function(S){if(S.type===t.COMBINATOR)return A.call(y,S)})},k.walkComments=function(A){var y=this;return this.walk(function(S){if(S.type===t.COMMENT)return A.call(y,S)})},k.walkIds=function(A){var y=this;return this.walk(function(S){if(S.type===t.ID)return A.call(y,S)})},k.walkNesting=function(A){var y=this;return this.walk(function(S){if(S.type===t.NESTING)return A.call(y,S)})},k.walkPseudos=function(A){var y=this;return this.walk(function(S){if(S.type===t.PSEUDO)return A.call(y,S)})},k.walkTags=function(A){var y=this;return this.walk(function(S){if(S.type===t.TAG)return A.call(y,S)})},k.walkUniversals=function(A){var y=this;return this.walk(function(S){if(S.type===t.UNIVERSAL)return A.call(y,S)})},k.split=function(A){var y=this,S=[];return this.reduce(function(x,_,O){var E=A.call(y,_);return S.push(_),E?(x.push(S),S=[]):O===y.length-1&&x.push(S),x},[])},k.map=function(A){return this.nodes.map(A)},k.reduce=function(A,y){return this.nodes.reduce(A,y)},k.every=function(A){return this.nodes.every(A)},k.some=function(A){return this.nodes.some(A)},k.filter=function(A){return this.nodes.filter(A)},k.sort=function(A){return this.nodes.sort(A)},k.toString=function(){return this.map(String).join("")},h(w,[{key:"first",get:function(){return this.at(0)}},{key:"last",get:function(){return this.at(this.length-1)}},{key:"length",get:function(){return this.nodes.length}}]),w})(o.default),r.exports=e.default})),dn=Z(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=n(Er()),t=me();function n(d){return d&&d.__esModule?d:{default:d}}function s(d,p){for(var h=0;h<p.length;h++){var g=p[h];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(d,g.key,g)}}function i(d,p,h){return p&&s(d.prototype,p),h&&s(d,h),Object.defineProperty(d,"prototype",{writable:!1}),d}function a(d,p){d.prototype=Object.create(p.prototype),d.prototype.constructor=d,l(d,p)}function l(d,p){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(h,g){return h.__proto__=g,h},l(d,p)}e.default=(function(d){a(p,d);function p(g){var b=d.call(this,g)||this;return b.type=t.ROOT,b}var h=p.prototype;return h.toString=function(){var g=this.reduce(function(b,m){return b.push(String(m)),b},[]).join(",");return this.trailingComma?g+",":g},h.error=function(g,b){return this._error?this._error(g,b):Error(g)},i(p,[{key:"errorGenerator",set:function(g){this._error=g}}]),p})(o.default),r.exports=e.default})),fn=Z(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=n(Er()),t=me();function n(a){return a&&a.__esModule?a:{default:a}}function s(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,i(a,l)}function i(a,l){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,p){return d.__proto__=p,d},i(a,l)}e.default=(function(a){s(l,a);function l(d){var p=a.call(this,d)||this;return p.type=t.SELECTOR,p}return l})(o.default),r.exports=e.default})),pn=Z(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=i(er()),t=Ht(),n=i(We()),s=me();function i(h){return h&&h.__esModule?h:{default:h}}function a(h,g){for(var b=0;b<g.length;b++){var m=g[b];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(h,m.key,m)}}function l(h,g,b){return g&&a(h.prototype,g),b&&a(h,b),Object.defineProperty(h,"prototype",{writable:!1}),h}function d(h,g){h.prototype=Object.create(g.prototype),h.prototype.constructor=h,p(h,g)}function p(h,g){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(b,m){return b.__proto__=m,b},p(h,g)}e.default=(function(h){d(g,h);function g(m){var w=h.call(this,m)||this;return w.type=s.CLASS,w._constructed=!0,w}var b=g.prototype;return b.valueToString=function(){return"."+h.prototype.valueToString.call(this)},l(g,[{key:"value",get:function(){return this._value},set:function(m){if(this._constructed){var w=(0,o.default)(m,{isIdentifier:!0});w===m?this.raws&&delete this.raws.value:((0,t.ensureObject)(this,"raws"),this.raws.value=w)}this._value=m}}]),g})(n.default),r.exports=e.default})),hn=Z(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=n(We()),t=me();function n(a){return a&&a.__esModule?a:{default:a}}function s(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,i(a,l)}function i(a,l){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,p){return d.__proto__=p,d},i(a,l)}e.default=(function(a){s(l,a);function l(d){var p=a.call(this,d)||this;return p.type=t.COMMENT,p}return l})(o.default),r.exports=e.default})),mn=Z(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=n(We()),t=me();function n(a){return a&&a.__esModule?a:{default:a}}function s(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,i(a,l)}function i(a,l){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,p){return d.__proto__=p,d},i(a,l)}e.default=(function(a){s(l,a);function l(p){var h=a.call(this,p)||this;return h.type=t.ID,h}var d=l.prototype;return d.valueToString=function(){return"#"+a.prototype.valueToString.call(this)},l})(o.default),r.exports=e.default})),_r=Z(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=s(er()),t=Ht(),n=s(We());function s(p){return p&&p.__esModule?p:{default:p}}function i(p,h){for(var g=0;g<h.length;g++){var b=h[g];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(p,b.key,b)}}function a(p,h,g){return h&&i(p.prototype,h),g&&i(p,g),Object.defineProperty(p,"prototype",{writable:!1}),p}function l(p,h){p.prototype=Object.create(h.prototype),p.prototype.constructor=p,d(p,h)}function d(p,h){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(g,b){return g.__proto__=b,g},d(p,h)}e.default=(function(p){l(h,p);function h(){return p.apply(this,arguments)||this}var g=h.prototype;return g.qualifiedName=function(b){return this.namespace?this.namespaceString+"|"+b:b},g.valueToString=function(){return this.qualifiedName(p.prototype.valueToString.call(this))},a(h,[{key:"namespace",get:function(){return this._namespace},set:function(b){if(b===!0||b==="*"||b==="&"){this._namespace=b,this.raws&&delete this.raws.namespace;return}var m=(0,o.default)(b,{isIdentifier:!0});this._namespace=b,m===b?this.raws&&delete this.raws.namespace:((0,t.ensureObject)(this,"raws"),this.raws.namespace=m)}},{key:"ns",get:function(){return this._namespace},set:function(b){this.namespace=b}},{key:"namespaceString",get:function(){if(this.namespace){var b=this.stringifyProperty("namespace");return b===!0?"":b}else return""}}]),h})(n.default),r.exports=e.default})),gn=Z(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=n(_r()),t=me();function n(a){return a&&a.__esModule?a:{default:a}}function s(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,i(a,l)}function i(a,l){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,p){return d.__proto__=p,d},i(a,l)}e.default=(function(a){s(l,a);function l(d){var p=a.call(this,d)||this;return p.type=t.TAG,p}return l})(o.default),r.exports=e.default})),vn=Z(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=n(We()),t=me();function n(a){return a&&a.__esModule?a:{default:a}}function s(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,i(a,l)}function i(a,l){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,p){return d.__proto__=p,d},i(a,l)}e.default=(function(a){s(l,a);function l(d){var p=a.call(this,d)||this;return p.type=t.STRING,p}return l})(o.default),r.exports=e.default})),kn=Z(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=n(Er()),t=me();function n(a){return a&&a.__esModule?a:{default:a}}function s(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,i(a,l)}function i(a,l){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,p){return d.__proto__=p,d},i(a,l)}e.default=(function(a){s(l,a);function l(p){var h=a.call(this,p)||this;return h.type=t.PSEUDO,h}var d=l.prototype;return d.toString=function(){var p=this.length?"("+this.map(String).join(",")+")":"";return[this.rawSpaceBefore,this.stringifyProperty("value"),p,this.rawSpaceAfter].join("")},l})(o.default),r.exports=e.default})),bn=Z((e=>{e.__esModule=!0,e.default=void 0,e.unescapeValue=k;var r=i(er()),o=i(cn()),t=i(_r()),n=me(),s;function i(_){return _&&_.__esModule?_:{default:_}}function a(_,O){for(var E=0;E<O.length;E++){var u=O[E];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(_,u.key,u)}}function l(_,O,E){return O&&a(_.prototype,O),E&&a(_,E),Object.defineProperty(_,"prototype",{writable:!1}),_}function d(_,O){_.prototype=Object.create(O.prototype),_.prototype.constructor=_,p(_,O)}function p(_,O){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(E,u){return E.__proto__=u,E},p(_,O)}var h=Pn(),g=/^('|")([^]*)\1$/,b=h(function(){},"Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead."),m=h(function(){},"Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead."),w=h(function(){},"Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");function k(_){var O=!1,E=null,u=_,f=u.match(g);return f&&(E=f[1],u=f[2]),u=(0,o.default)(u),u!==_&&(O=!0),{deprecatedUsage:O,unescaped:u,quoteMark:E}}function A(_){if(_.quoteMark!==void 0||_.value===void 0)return _;w();var O=k(_.value),E=O.quoteMark,u=O.unescaped;return _.raws||(_.raws={}),_.raws.value===void 0&&(_.raws.value=_.value),_.value=u,_.quoteMark=E,_}var y=(function(_){d(O,_);function O(u){var f;return u===void 0&&(u={}),f=_.call(this,A(u))||this,f.type=n.ATTRIBUTE,f.raws=f.raws||{},Object.defineProperty(f.raws,"unquoted",{get:h(function(){return f.value},"attr.raws.unquoted is deprecated. Call attr.value instead."),set:h(function(){return f.value},"Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")}),f._constructed=!0,f}var E=O.prototype;return E.getQuotedValue=function(u){u===void 0&&(u={});var f=S[this._determineQuoteMark(u)];return(0,r.default)(this._value,f)},E._determineQuoteMark=function(u){return u.smart?this.smartQuoteMark(u):this.preferredQuoteMark(u)},E.setValue=function(u,f){f===void 0&&(f={}),this._value=u,this._quoteMark=this._determineQuoteMark(f),this._syncRawValue()},E.smartQuoteMark=function(u){var f=this.value,v=f.replace(/[^']/g,"").length,T=f.replace(/[^"]/g,"").length;if(v+T===0){var $=(0,r.default)(f,{isIdentifier:!0});if($===f)return O.NO_QUOTE;var C=this.preferredQuoteMark(u);if(C===O.NO_QUOTE){var j=this.quoteMark||u.quoteMark||O.DOUBLE_QUOTE,z=S[j];if((0,r.default)(f,z).length<$.length)return j}return C}else return T===v?this.preferredQuoteMark(u):T<v?O.DOUBLE_QUOTE:O.SINGLE_QUOTE},E.preferredQuoteMark=function(u){var f=u.preferCurrentQuoteMark?this.quoteMark:u.quoteMark;return f===void 0&&(f=u.preferCurrentQuoteMark?u.quoteMark:this.quoteMark),f===void 0&&(f=O.DOUBLE_QUOTE),f},E._syncRawValue=function(){var u=(0,r.default)(this._value,S[this.quoteMark]);u===this._value?this.raws&&delete this.raws.value:this.raws.value=u},E._handleEscapes=function(u,f){if(this._constructed){var v=(0,r.default)(f,{isIdentifier:!0});v===f?delete this.raws[u]:this.raws[u]=v}},E._spacesFor=function(u){var f={before:"",after:""},v=this.spaces[u]||{},T=this.raws.spaces&&this.raws.spaces[u]||{};return Object.assign(f,v,T)},E._stringFor=function(u,f,v){f===void 0&&(f=u),v===void 0&&(v=x);var T=this._spacesFor(f);return v(this.stringifyProperty(u),T)},E.offsetOf=function(u){var f=1,v=this._spacesFor("attribute");if(f+=v.before.length,u==="namespace"||u==="ns")return this.namespace?f:-1;if(u==="attributeNS"||(f+=this.namespaceString.length,this.namespace&&(f+=1),u==="attribute"))return f;f+=this.stringifyProperty("attribute").length,f+=v.after.length;var T=this._spacesFor("operator");f+=T.before.length;var $=this.stringifyProperty("operator");if(u==="operator")return $?f:-1;f+=$.length,f+=T.after.length;var C=this._spacesFor("value");f+=C.before.length;var j=this.stringifyProperty("value");if(u==="value")return j?f:-1;f+=j.length,f+=C.after.length;var z=this._spacesFor("insensitive");return f+=z.before.length,u==="insensitive"&&this.insensitive?f:-1},E.toString=function(){var u=this,f=[this.rawSpaceBefore,"["];return f.push(this._stringFor("qualifiedAttribute","attribute")),this.operator&&(this.value||this.value==="")&&(f.push(this._stringFor("operator")),f.push(this._stringFor("value")),f.push(this._stringFor("insensitiveFlag","insensitive",function(v,T){return v.length>0&&!u.quoted&&T.before.length===0&&!(u.spaces.value&&u.spaces.value.after)&&(T.before=" "),x(v,T)}))),f.push("]"),f.push(this.rawSpaceAfter),f.join("")},l(O,[{key:"quoted",get:function(){var u=this.quoteMark;return u==="'"||u==='"'},set:function(u){m()}},{key:"quoteMark",get:function(){return this._quoteMark},set:function(u){if(!this._constructed){this._quoteMark=u;return}this._quoteMark!==u&&(this._quoteMark=u,this._syncRawValue())}},{key:"qualifiedAttribute",get:function(){return this.qualifiedName(this.raws.attribute||this.attribute)}},{key:"insensitiveFlag",get:function(){return this.insensitive?"i":""}},{key:"value",get:function(){return this._value},set:function(u){if(this._constructed){var f=k(u),v=f.deprecatedUsage,T=f.unescaped,$=f.quoteMark;if(v&&b(),T===this._value&&$===this._quoteMark)return;this._value=T,this._quoteMark=$,this._syncRawValue()}else this._value=u}},{key:"insensitive",get:function(){return this._insensitive},set:function(u){u||(this._insensitive=!1,this.raws&&(this.raws.insensitiveFlag==="I"||this.raws.insensitiveFlag==="i")&&(this.raws.insensitiveFlag=void 0)),this._insensitive=u}},{key:"attribute",get:function(){return this._attribute},set:function(u){this._handleEscapes("attribute",u),this._attribute=u}}]),O})(t.default);e.default=y,y.NO_QUOTE=null,y.SINGLE_QUOTE="'",y.DOUBLE_QUOTE='"';var S=(s={"'":{quotes:"single",wrap:!0},'"':{quotes:"double",wrap:!0}},s[null]={isIdentifier:!0},s);function x(_,O){return""+O.before+_+O.after}})),wn=Z(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=n(_r()),t=me();function n(a){return a&&a.__esModule?a:{default:a}}function s(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,i(a,l)}function i(a,l){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,p){return d.__proto__=p,d},i(a,l)}e.default=(function(a){s(l,a);function l(d){var p=a.call(this,d)||this;return p.type=t.UNIVERSAL,p.value="*",p}return l})(o.default),r.exports=e.default})),yn=Z(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=n(We()),t=me();function n(a){return a&&a.__esModule?a:{default:a}}function s(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,i(a,l)}function i(a,l){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,p){return d.__proto__=p,d},i(a,l)}e.default=(function(a){s(l,a);function l(d){var p=a.call(this,d)||this;return p.type=t.COMBINATOR,p}return l})(o.default),r.exports=e.default})),xn=Z(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=n(We()),t=me();function n(a){return a&&a.__esModule?a:{default:a}}function s(a,l){a.prototype=Object.create(l.prototype),a.prototype.constructor=a,i(a,l)}function i(a,l){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,p){return d.__proto__=p,d},i(a,l)}e.default=(function(a){s(l,a);function l(d){var p=a.call(this,d)||this;return p.type=t.NESTING,p.value="&",p}return l})(o.default),r.exports=e.default})),us=Z(((e,r)=>{e.__esModule=!0,e.default=o;function o(t){return t.sort(function(n,s){return n-s})}r.exports=e.default})),$n=Z((e=>{e.__esModule=!0,e.word=e.tilde=e.tab=e.str=e.space=e.slash=e.singleQuote=e.semicolon=e.plus=e.pipe=e.openSquare=e.openParenthesis=e.newline=e.greaterThan=e.feed=e.equals=e.doubleQuote=e.dollar=e.cr=e.comment=e.comma=e.combinator=e.colon=e.closeSquare=e.closeParenthesis=e.caret=e.bang=e.backslash=e.at=e.asterisk=e.ampersand=void 0,e.ampersand=38,e.asterisk=42,e.at=64,e.comma=44,e.colon=58,e.semicolon=59,e.openParenthesis=40,e.closeParenthesis=41,e.openSquare=91,e.closeSquare=93,e.dollar=36,e.tilde=126,e.caret=94,e.plus=43,e.equals=61,e.pipe=124,e.greaterThan=62,e.space=32;var r=39;e.singleQuote=r,e.doubleQuote=34,e.slash=47,e.bang=33,e.backslash=92,e.cr=13,e.feed=12,e.newline=10,e.tab=9,e.str=r,e.comment=-1,e.word=-2,e.combinator=-3})),cs=Z((e=>{e.__esModule=!0,e.FIELDS=void 0,e.default=b;var r=s($n()),o,t;function n(m){if(typeof WeakMap!="function")return null;var w=new WeakMap,k=new WeakMap;return(n=function(A){return A?k:w})(m)}function s(m,w){if(!w&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var k=n(w);if(k&&k.has(m))return k.get(m);var A={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var S in m)if(S!=="default"&&Object.prototype.hasOwnProperty.call(m,S)){var x=y?Object.getOwnPropertyDescriptor(m,S):null;x&&(x.get||x.set)?Object.defineProperty(A,S,x):A[S]=m[S]}return A.default=m,k&&k.set(m,A),A}for(var i=(o={},o[r.tab]=!0,o[r.newline]=!0,o[r.cr]=!0,o[r.feed]=!0,o),a=(t={},t[r.space]=!0,t[r.tab]=!0,t[r.newline]=!0,t[r.cr]=!0,t[r.feed]=!0,t[r.ampersand]=!0,t[r.asterisk]=!0,t[r.bang]=!0,t[r.comma]=!0,t[r.colon]=!0,t[r.semicolon]=!0,t[r.openParenthesis]=!0,t[r.closeParenthesis]=!0,t[r.openSquare]=!0,t[r.closeSquare]=!0,t[r.singleQuote]=!0,t[r.doubleQuote]=!0,t[r.plus]=!0,t[r.pipe]=!0,t[r.tilde]=!0,t[r.greaterThan]=!0,t[r.equals]=!0,t[r.dollar]=!0,t[r.caret]=!0,t[r.slash]=!0,t),l={},d="0123456789abcdefABCDEF",p=0;p<d.length;p++)l[d.charCodeAt(p)]=!0;function h(m,w){var k=w,A;do{if(A=m.charCodeAt(k),a[A])return k-1;A===r.backslash?k=g(m,k)+1:k++}while(k<m.length);return k-1}function g(m,w){var k=w,A=m.charCodeAt(k+1);if(!i[A])if(l[A]){var y=0;do k++,y++,A=m.charCodeAt(k+1);while(l[A]&&y<6);y<6&&A===r.space&&k++}else k++;return k}e.FIELDS={TYPE:0,START_LINE:1,START_COL:2,END_LINE:3,END_COL:4,START_POS:5,END_POS:6};function b(m){var w=[],k=m.css.valueOf(),A=k.length,y=-1,S=1,x=0,_=0,O,E,u,f,v,T,$,C,j,z,F,U,ee;function ze(V,K){if(m.safe)k+=K,j=k.length-1;else throw m.error("Unclosed "+V,S,x-y,x)}for(;x<A;){switch(O=k.charCodeAt(x),O===r.newline&&(y=x,S+=1),O){case r.space:case r.tab:case r.newline:case r.cr:case r.feed:j=x;do j+=1,O=k.charCodeAt(j),O===r.newline&&(y=j,S+=1);while(O===r.space||O===r.newline||O===r.tab||O===r.cr||O===r.feed);ee=r.space,f=S,u=j-y-1,_=j;break;case r.plus:case r.greaterThan:case r.tilde:case r.pipe:j=x;do j+=1,O=k.charCodeAt(j);while(O===r.plus||O===r.greaterThan||O===r.tilde||O===r.pipe);ee=r.combinator,f=S,u=x-y,_=j;break;case r.asterisk:case r.ampersand:case r.bang:case r.comma:case r.equals:case r.dollar:case r.caret:case r.openSquare:case r.closeSquare:case r.colon:case r.semicolon:case r.openParenthesis:case r.closeParenthesis:j=x,ee=O,f=S,u=x-y,_=j+1;break;case r.singleQuote:case r.doubleQuote:U=O===r.singleQuote?"'":'"',j=x;do for(v=!1,j=k.indexOf(U,j+1),j===-1&&ze("quote",U),T=j;k.charCodeAt(T-1)===r.backslash;)--T,v=!v;while(v);ee=r.str,f=S,u=x-y,_=j+1;break;default:O===r.slash&&k.charCodeAt(x+1)===r.asterisk?(j=k.indexOf("*/",x+2)+1,j===0&&ze("comment","*/"),E=k.slice(x,j+1),C=E.split(`
`),$=C.length-1,$>0?(z=S+$,F=j-C[$].length):(z=S,F=y),ee=r.comment,S=z,f=z,u=j-F):O===r.slash?(j=x,ee=O,f=S,u=x-y,_=j+1):(j=h(k,x),ee=r.word,f=S,u=j-y),_=j+1;break}w.push([ee,S,x-y,f,u,x,_]),F&&(F=(y=F,null)),x=_}return w}})),ds=Z(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=E(dn()),t=E(fn()),n=E(pn()),s=E(hn()),i=E(mn()),a=E(gn()),l=E(vn()),d=E(kn()),p=O(bn()),h=E(wn()),g=E(yn()),b=E(xn()),m=E(us()),w=O(cs()),k=O($n()),A=O(me()),y=Ht(),S,x;function _(V){if(typeof WeakMap!="function")return null;var K=new WeakMap,N=new WeakMap;return(_=function(L){return L?N:K})(V)}function O(V,K){if(!K&&V&&V.__esModule)return V;if(V===null||typeof V!="object"&&typeof V!="function")return{default:V};var N=_(K);if(N&&N.has(V))return N.get(V);var L={},H=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var I in V)if(I!=="default"&&Object.prototype.hasOwnProperty.call(V,I)){var B=H?Object.getOwnPropertyDescriptor(V,I):null;B&&(B.get||B.set)?Object.defineProperty(L,I,B):L[I]=V[I]}return L.default=V,N&&N.set(V,L),L}function E(V){return V&&V.__esModule?V:{default:V}}function u(V,K){for(var N=0;N<K.length;N++){var L=K[N];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(V,L.key,L)}}function f(V,K,N){return K&&u(V.prototype,K),N&&u(V,N),Object.defineProperty(V,"prototype",{writable:!1}),V}var v=(S={},S[k.space]=!0,S[k.cr]=!0,S[k.feed]=!0,S[k.newline]=!0,S[k.tab]=!0,S),T=Object.assign({},v,(x={},x[k.comment]=!0,x));function $(V){return{line:V[w.FIELDS.START_LINE],column:V[w.FIELDS.START_COL]}}function C(V){return{line:V[w.FIELDS.END_LINE],column:V[w.FIELDS.END_COL]}}function j(V,K,N,L){return{start:{line:V,column:K},end:{line:N,column:L}}}function z(V){return j(V[w.FIELDS.START_LINE],V[w.FIELDS.START_COL],V[w.FIELDS.END_LINE],V[w.FIELDS.END_COL])}function F(V,K){if(V)return j(V[w.FIELDS.START_LINE],V[w.FIELDS.START_COL],K[w.FIELDS.END_LINE],K[w.FIELDS.END_COL])}function U(V,K){var N=V[K];if(typeof N=="string")return N.indexOf("\\")!==-1&&((0,y.ensureObject)(V,"raws"),V[K]=(0,y.unesc)(N),V.raws[K]===void 0&&(V.raws[K]=N)),V}function ee(V,K){for(var N=-1,L=[];(N=V.indexOf(K,N+1))!==-1;)L.push(N);return L}function ze(){var V=Array.prototype.concat.apply([],arguments);return V.filter(function(K,N){return N===V.indexOf(K)})}e.default=(function(){function V(N,L){L===void 0&&(L={}),this.rule=N,this.options=Object.assign({lossy:!1,safe:!1},L),this.position=0,this.css=typeof this.rule=="string"?this.rule:this.rule.selector,this.tokens=(0,w.default)({css:this.css,error:this._errorGenerator(),safe:this.options.safe});var H=F(this.tokens[0],this.tokens[this.tokens.length-1]);this.root=new o.default({source:H}),this.root.errorGenerator=this._errorGenerator();var I=new t.default({source:{start:{line:1,column:1}},sourceIndex:0});this.root.append(I),this.current=I,this.loop()}var K=V.prototype;return K._errorGenerator=function(){var N=this;return function(L,H){return typeof N.rule=="string"?Error(L):N.rule.error(L,H)}},K.attribute=function(){var N=[],L=this.currToken;for(this.position++;this.position<this.tokens.length&&this.currToken[w.FIELDS.TYPE]!==k.closeSquare;)N.push(this.currToken),this.position++;if(this.currToken[w.FIELDS.TYPE]!==k.closeSquare)return this.expected("closing square bracket",this.currToken[w.FIELDS.START_POS]);var H=N.length,I={source:j(L[1],L[2],this.currToken[3],this.currToken[4]),sourceIndex:L[w.FIELDS.START_POS]};if(H===1&&!~[k.word].indexOf(N[0][w.FIELDS.TYPE]))return this.expected("attribute",N[0][w.FIELDS.START_POS]);for(var B=0,re="",oe="",Y=null,ie=!1;B<H;){var ue=N[B],Q=this.content(ue),le=N[B+1];switch(ue[w.FIELDS.TYPE]){case k.space:if(ie=!0,this.options.lossy)break;if(Y){(0,y.ensureObject)(I,"spaces",Y);var je=I.spaces[Y].after||"";I.spaces[Y].after=je+Q;var Oe=(0,y.getProp)(I,"raws","spaces",Y,"after")||null;Oe&&(I.raws.spaces[Y].after=Oe+Q)}else re+=Q,oe+=Q;break;case k.asterisk:le[w.FIELDS.TYPE]===k.equals?(I.operator=Q,Y="operator"):(!I.namespace||Y==="namespace"&&!ie)&&le&&(re&&(re=((0,y.ensureObject)(I,"spaces","attribute"),I.spaces.attribute.before=re,"")),oe&&(oe=((0,y.ensureObject)(I,"raws","spaces","attribute"),I.raws.spaces.attribute.before=re,"")),I.namespace=(I.namespace||"")+Q,(0,y.getProp)(I,"raws","namespace")&&(I.raws.namespace+=Q),Y="namespace"),ie=!1;break;case k.dollar:if(Y==="value"){var ve=(0,y.getProp)(I,"raws","value");I.value+="$",ve&&(I.raws.value=ve+"$");break}case k.caret:le[w.FIELDS.TYPE]===k.equals&&(I.operator=Q,Y="operator"),ie=!1;break;case k.combinator:if(Q==="~"&&le[w.FIELDS.TYPE]===k.equals&&(I.operator=Q,Y="operator"),Q!=="|"){ie=!1;break}le[w.FIELDS.TYPE]===k.equals?(I.operator=Q,Y="operator"):!I.namespace&&!I.attribute&&(I.namespace=!0),ie=!1;break;case k.word:if(le&&this.content(le)==="|"&&N[B+2]&&N[B+2][w.FIELDS.TYPE]!==k.equals&&!I.operator&&!I.namespace)I.namespace=Q,Y="namespace";else if(!I.attribute||Y==="attribute"&&!ie)re&&(re=((0,y.ensureObject)(I,"spaces","attribute"),I.spaces.attribute.before=re,"")),oe&&(oe=((0,y.ensureObject)(I,"raws","spaces","attribute"),I.raws.spaces.attribute.before=oe,"")),I.attribute=(I.attribute||"")+Q,(0,y.getProp)(I,"raws","attribute")&&(I.raws.attribute+=Q),Y="attribute";else if(!I.value&&I.value!==""||Y==="value"&&!(ie||I.quoteMark)){var ge=(0,y.unesc)(Q),we=(0,y.getProp)(I,"raws","value")||"",$e=I.value||"";I.value=$e+ge,I.quoteMark=null,(ge!==Q||we)&&((0,y.ensureObject)(I,"raws"),I.raws.value=(we||$e)+Q),Y="value"}else{var Me=Q==="i"||Q==="I";(I.value||I.value==="")&&(I.quoteMark||ie)?(I.insensitive=Me,(!Me||Q==="I")&&((0,y.ensureObject)(I,"raws"),I.raws.insensitiveFlag=Q),Y="insensitive",re&&(re=((0,y.ensureObject)(I,"spaces","insensitive"),I.spaces.insensitive.before=re,"")),oe&&(oe=((0,y.ensureObject)(I,"raws","spaces","insensitive"),I.raws.spaces.insensitive.before=oe,""))):(I.value||I.value==="")&&(Y="value",I.value+=Q,I.raws.value&&(I.raws.value+=Q))}ie=!1;break;case k.str:if(!I.attribute||!I.operator)return this.error("Expected an attribute followed by an operator preceding the string.",{index:ue[w.FIELDS.START_POS]});var kt=(0,p.unescapeValue)(Q),Xt=kt.unescaped,bt=kt.quoteMark;I.value=Xt,I.quoteMark=bt,Y="value",(0,y.ensureObject)(I,"raws"),I.raws.value=Q,ie=!1;break;case k.equals:if(!I.attribute)return this.expected("attribute",ue[w.FIELDS.START_POS],Q);if(I.value)return this.error('Unexpected "=" found; an operator was already defined.',{index:ue[w.FIELDS.START_POS]});I.operator=I.operator?I.operator+Q:Q,Y="operator",ie=!1;break;case k.comment:if(Y)if(ie||le&&le[w.FIELDS.TYPE]===k.space||Y==="insensitive"){var On=(0,y.getProp)(I,"spaces",Y,"after")||"",En=(0,y.getProp)(I,"raws","spaces",Y,"after")||On;(0,y.ensureObject)(I,"raws","spaces",Y),I.raws.spaces[Y].after=En+Q}else{var _n=I[Y]||"",Cn=(0,y.getProp)(I,"raws",Y)||_n;(0,y.ensureObject)(I,"raws"),I.raws[Y]=Cn+Q}else oe+=Q;break;default:return this.error('Unexpected "'+Q+'" found.',{index:ue[w.FIELDS.START_POS]})}B++}U(I,"attribute"),U(I,"namespace"),this.newNode(new p.default(I)),this.position++},K.parseWhitespaceEquivalentTokens=function(N){N<0&&(N=this.tokens.length);var L=this.position,H=[],I="",B=void 0;do if(v[this.currToken[w.FIELDS.TYPE]])this.options.lossy||(I+=this.content());else if(this.currToken[w.FIELDS.TYPE]===k.comment){var re={};I&&(I=(re.before=I,"")),B=new s.default({value:this.content(),source:z(this.currToken),sourceIndex:this.currToken[w.FIELDS.START_POS],spaces:re}),H.push(B)}while(++this.position<N);if(I){if(B)B.spaces.after=I;else if(!this.options.lossy){var oe=this.tokens[L],Y=this.tokens[this.position-1];H.push(new l.default({value:"",source:j(oe[w.FIELDS.START_LINE],oe[w.FIELDS.START_COL],Y[w.FIELDS.END_LINE],Y[w.FIELDS.END_COL]),sourceIndex:oe[w.FIELDS.START_POS],spaces:{before:I,after:""}}))}}return H},K.convertWhitespaceNodesToSpace=function(N,L){var H=this;L===void 0&&(L=!1);var I="",B="";return N.forEach(function(re){var oe=H.lossySpace(re.spaces.before,L),Y=H.lossySpace(re.rawSpaceBefore,L);I+=oe+H.lossySpace(re.spaces.after,L&&oe.length===0),B+=oe+re.value+H.lossySpace(re.rawSpaceAfter,L&&Y.length===0)}),B===I&&(B=void 0),{space:I,rawSpace:B}},K.isNamedCombinator=function(N){return N===void 0&&(N=this.position),this.tokens[N+0]&&this.tokens[N+0][w.FIELDS.TYPE]===k.slash&&this.tokens[N+1]&&this.tokens[N+1][w.FIELDS.TYPE]===k.word&&this.tokens[N+2]&&this.tokens[N+2][w.FIELDS.TYPE]===k.slash},K.namedCombinator=function(){if(this.isNamedCombinator()){var N=this.content(this.tokens[this.position+1]),L=(0,y.unesc)(N).toLowerCase(),H={};L!==N&&(H.value="/"+N+"/");var I=new g.default({value:"/"+L+"/",source:j(this.currToken[w.FIELDS.START_LINE],this.currToken[w.FIELDS.START_COL],this.tokens[this.position+2][w.FIELDS.END_LINE],this.tokens[this.position+2][w.FIELDS.END_COL]),sourceIndex:this.currToken[w.FIELDS.START_POS],raws:H});return this.position+=3,I}else this.unexpected()},K.combinator=function(){var N=this;if(this.content()==="|")return this.namespace();var L=this.locateNextMeaningfulToken(this.position);if(L<0||this.tokens[L][w.FIELDS.TYPE]===k.comma||this.tokens[L][w.FIELDS.TYPE]===k.closeParenthesis){var H=this.parseWhitespaceEquivalentTokens(L);if(H.length>0){var I=this.current.last;if(I){var B=this.convertWhitespaceNodesToSpace(H),re=B.space,oe=B.rawSpace;oe!==void 0&&(I.rawSpaceAfter+=oe),I.spaces.after+=re}else H.forEach(function(Me){return N.newNode(Me)})}return}var Y=this.currToken,ie=void 0;L>this.position&&(ie=this.parseWhitespaceEquivalentTokens(L));var ue;if(this.isNamedCombinator()?ue=this.namedCombinator():this.currToken[w.FIELDS.TYPE]===k.combinator?(ue=new g.default({value:this.content(),source:z(this.currToken),sourceIndex:this.currToken[w.FIELDS.START_POS]}),this.position++):v[this.currToken[w.FIELDS.TYPE]]||ie||this.unexpected(),ue){if(ie){var Q=this.convertWhitespaceNodesToSpace(ie),le=Q.space,je=Q.rawSpace;ue.spaces.before=le,ue.rawSpaceBefore=je}}else{var Oe=this.convertWhitespaceNodesToSpace(ie,!0),ve=Oe.space,ge=Oe.rawSpace;ge||(ge=ve);var we={},$e={spaces:{}};ve.endsWith(" ")&&ge.endsWith(" ")?(we.before=ve.slice(0,ve.length-1),$e.spaces.before=ge.slice(0,ge.length-1)):ve[0]===" "&&ge[0]===" "?(we.after=ve.slice(1),$e.spaces.after=ge.slice(1)):$e.value=ge,ue=new g.default({value:" ",source:F(Y,this.tokens[this.position-1]),sourceIndex:Y[w.FIELDS.START_POS],spaces:we,raws:$e})}return this.currToken&&this.currToken[w.FIELDS.TYPE]===k.space&&(ue.spaces.after=this.optionalSpace(this.content()),this.position++),this.newNode(ue)},K.comma=function(){if(this.position===this.tokens.length-1){this.root.trailingComma=!0,this.position++;return}this.current._inferEndPosition();var N=new t.default({source:{start:$(this.tokens[this.position+1])},sourceIndex:this.tokens[this.position+1][w.FIELDS.START_POS]});this.current.parent.append(N),this.current=N,this.position++},K.comment=function(){var N=this.currToken;this.newNode(new s.default({value:this.content(),source:z(N),sourceIndex:N[w.FIELDS.START_POS]})),this.position++},K.error=function(N,L){throw this.root.error(N,L)},K.missingBackslash=function(){return this.error("Expected a backslash preceding the semicolon.",{index:this.currToken[w.FIELDS.START_POS]})},K.missingParenthesis=function(){return this.expected("opening parenthesis",this.currToken[w.FIELDS.START_POS])},K.missingSquareBracket=function(){return this.expected("opening square bracket",this.currToken[w.FIELDS.START_POS])},K.unexpected=function(){return this.error("Unexpected '"+this.content()+"'. Escaping special characters with \\ may help.",this.currToken[w.FIELDS.START_POS])},K.unexpectedPipe=function(){return this.error("Unexpected '|'.",this.currToken[w.FIELDS.START_POS])},K.namespace=function(){var N=this.prevToken&&this.content(this.prevToken)||!0;if(this.nextToken[w.FIELDS.TYPE]===k.word)return this.position++,this.word(N);if(this.nextToken[w.FIELDS.TYPE]===k.asterisk)return this.position++,this.universal(N);this.unexpectedPipe()},K.nesting=function(){if(this.nextToken&&this.content(this.nextToken)==="|"){this.position++;return}var N=this.currToken;this.newNode(new b.default({value:this.content(),source:z(N),sourceIndex:N[w.FIELDS.START_POS]})),this.position++},K.parentheses=function(){var N=this.current.last,L=1;if(this.position++,N&&N.type===A.PSEUDO){var H=new t.default({source:{start:$(this.tokens[this.position])},sourceIndex:this.tokens[this.position][w.FIELDS.START_POS]}),I=this.current;for(N.append(H),this.current=H;this.position<this.tokens.length&&L;)this.currToken[w.FIELDS.TYPE]===k.openParenthesis&&L++,this.currToken[w.FIELDS.TYPE]===k.closeParenthesis&&L--,L?this.parse():(this.current.source.end=C(this.currToken),this.current.parent.source.end=C(this.currToken),this.position++);this.current=I}else{for(var B=this.currToken,re="(",oe;this.position<this.tokens.length&&L;)this.currToken[w.FIELDS.TYPE]===k.openParenthesis&&L++,this.currToken[w.FIELDS.TYPE]===k.closeParenthesis&&L--,oe=this.currToken,re+=this.parseParenthesisToken(this.currToken),this.position++;N?N.appendToPropertyAndEscape("value",re,re):this.newNode(new l.default({value:re,source:j(B[w.FIELDS.START_LINE],B[w.FIELDS.START_COL],oe[w.FIELDS.END_LINE],oe[w.FIELDS.END_COL]),sourceIndex:B[w.FIELDS.START_POS]}))}if(L)return this.expected("closing parenthesis",this.currToken[w.FIELDS.START_POS])},K.pseudo=function(){for(var N=this,L="",H=this.currToken;this.currToken&&this.currToken[w.FIELDS.TYPE]===k.colon;)L+=this.content(),this.position++;if(!this.currToken)return this.expected(["pseudo-class","pseudo-element"],this.position-1);if(this.currToken[w.FIELDS.TYPE]===k.word)this.splitWord(!1,function(I,B){L+=I,N.newNode(new d.default({value:L,source:F(H,N.currToken),sourceIndex:H[w.FIELDS.START_POS]})),B>1&&N.nextToken&&N.nextToken[w.FIELDS.TYPE]===k.openParenthesis&&N.error("Misplaced parenthesis.",{index:N.nextToken[w.FIELDS.START_POS]})});else return this.expected(["pseudo-class","pseudo-element"],this.currToken[w.FIELDS.START_POS])},K.space=function(){var N=this.content();this.position===0||this.prevToken[w.FIELDS.TYPE]===k.comma||this.prevToken[w.FIELDS.TYPE]===k.openParenthesis||this.current.nodes.every(function(L){return L.type==="comment"})?(this.spaces=this.optionalSpace(N),this.position++):this.position===this.tokens.length-1||this.nextToken[w.FIELDS.TYPE]===k.comma||this.nextToken[w.FIELDS.TYPE]===k.closeParenthesis?(this.current.last.spaces.after=this.optionalSpace(N),this.position++):this.combinator()},K.string=function(){var N=this.currToken;this.newNode(new l.default({value:this.content(),source:z(N),sourceIndex:N[w.FIELDS.START_POS]})),this.position++},K.universal=function(N){var L=this.nextToken;if(L&&this.content(L)==="|")return this.position++,this.namespace();var H=this.currToken;this.newNode(new h.default({value:this.content(),source:z(H),sourceIndex:H[w.FIELDS.START_POS]}),N),this.position++},K.splitWord=function(N,L){for(var H=this,I=this.nextToken,B=this.content();I&&~[k.dollar,k.caret,k.equals,k.word].indexOf(I[w.FIELDS.TYPE]);){this.position++;var re=this.content();if(B+=re,re.lastIndexOf("\\")===re.length-1){var oe=this.nextToken;oe&&oe[w.FIELDS.TYPE]===k.space&&(B+=this.requiredSpace(this.content(oe)),this.position++)}I=this.nextToken}var Y=ee(B,".").filter(function(le){var je=B[le-1]==="\\",Oe=/^\d+\.\d+%$/.test(B);return!je&&!Oe}),ie=ee(B,"#").filter(function(le){return B[le-1]!=="\\"}),ue=ee(B,"#{");ue.length&&(ie=ie.filter(function(le){return!~ue.indexOf(le)}));var Q=(0,m.default)(ze([0].concat(Y,ie)));Q.forEach(function(le,je){var Oe=Q[je+1]||B.length,ve=B.slice(le,Oe);if(je===0&&L)return L.call(H,ve,Q.length);var ge,we=H.currToken,$e=we[w.FIELDS.START_POS]+Q[je],Me=j(we[1],we[2]+le,we[3],we[2]+(Oe-1));if(~Y.indexOf(le)){var kt={value:ve.slice(1),source:Me,sourceIndex:$e};ge=new n.default(U(kt,"value"))}else if(~ie.indexOf(le)){var Xt={value:ve.slice(1),source:Me,sourceIndex:$e};ge=new i.default(U(Xt,"value"))}else{var bt={value:ve,source:Me,sourceIndex:$e};U(bt,"value"),ge=new a.default(bt)}H.newNode(ge,N),N=null}),this.position++},K.word=function(N){var L=this.nextToken;return L&&this.content(L)==="|"?(this.position++,this.namespace()):this.splitWord(N)},K.loop=function(){for(;this.position<this.tokens.length;)this.parse(!0);return this.current._inferEndPosition(),this.root},K.parse=function(N){switch(this.currToken[w.FIELDS.TYPE]){case k.space:this.space();break;case k.comment:this.comment();break;case k.openParenthesis:this.parentheses();break;case k.closeParenthesis:N&&this.missingParenthesis();break;case k.openSquare:this.attribute();break;case k.dollar:case k.caret:case k.equals:case k.word:this.word();break;case k.colon:this.pseudo();break;case k.comma:this.comma();break;case k.asterisk:this.universal();break;case k.ampersand:this.nesting();break;case k.slash:case k.combinator:this.combinator();break;case k.str:this.string();break;case k.closeSquare:this.missingSquareBracket();case k.semicolon:this.missingBackslash();default:this.unexpected()}},K.expected=function(N,L,H){if(Array.isArray(N)){var I=N.pop();N=N.join(", ")+" or "+I}var B=/^[aeiou]/.test(N[0])?"an":"a";return H?this.error("Expected "+B+" "+N+', found "'+H+'" instead.',{index:L}):this.error("Expected "+B+" "+N+".",{index:L})},K.requiredSpace=function(N){return this.options.lossy?" ":N},K.optionalSpace=function(N){return this.options.lossy?"":N},K.lossySpace=function(N,L){return this.options.lossy?L?" ":"":N},K.parseParenthesisToken=function(N){var L=this.content(N);return N[w.FIELDS.TYPE]===k.space?this.requiredSpace(L):L},K.newNode=function(N,L){return L&&(/^ +$/.test(L)&&(this.options.lossy||(this.spaces=(this.spaces||"")+L),L=!0),N.namespace=L,U(N,"namespace")),this.spaces&&(this.spaces=(N.spaces.before=this.spaces,"")),this.current.append(N)},K.content=function(N){return N===void 0&&(N=this.currToken),this.css.slice(N[w.FIELDS.START_POS],N[w.FIELDS.END_POS])},K.locateNextMeaningfulToken=function(N){N===void 0&&(N=this.position+1);for(var L=N;L<this.tokens.length;)if(T[this.tokens[L][w.FIELDS.TYPE]]){L++;continue}else return L;return-1},f(V,[{key:"currToken",get:function(){return this.tokens[this.position]}},{key:"nextToken",get:function(){return this.tokens[this.position+1]}},{key:"prevToken",get:function(){return this.tokens[this.position-1]}}]),V})(),r.exports=e.default})),fs=Z(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=t(ds());function t(n){return n&&n.__esModule?n:{default:n}}e.default=(function(){function n(i,a){this.func=i||function(){},this.funcRes=null,this.options=a}var s=n.prototype;return s._shouldUpdateSelector=function(i,a){return a===void 0&&(a={}),Object.assign({},this.options,a).updateSelector===!1?!1:typeof i!="string"},s._isLossy=function(i){return i===void 0&&(i={}),Object.assign({},this.options,i).lossless===!1},s._root=function(i,a){return a===void 0&&(a={}),new o.default(i,this._parseOptions(a)).root},s._parseOptions=function(i){return{lossy:this._isLossy(i)}},s._run=function(i,a){var l=this;return a===void 0&&(a={}),new Promise(function(d,p){try{var h=l._root(i,a);Promise.resolve(l.func(h)).then(function(g){var b=void 0;return l._shouldUpdateSelector(i,a)&&(b=h.toString(),i.selector=b),{transform:g,root:h,string:b}}).then(d,p)}catch(g){p(g);return}})},s._runSync=function(i,a){a===void 0&&(a={});var l=this._root(i,a),d=this.func(l);if(d&&typeof d.then=="function")throw Error("Selector processor returned a promise to a synchronous call.");var p=void 0;return a.updateSelector&&typeof i!="string"&&(p=l.toString(),i.selector=p),{transform:d,root:l,string:p}},s.ast=function(i,a){return this._run(i,a).then(function(l){return l.root})},s.astSync=function(i,a){return this._runSync(i,a).root},s.transform=function(i,a){return this._run(i,a).then(function(l){return l.transform})},s.transformSync=function(i,a){return this._runSync(i,a).transform},s.process=function(i,a){return this._run(i,a).then(function(l){return l.string||l.root.toString()})},s.processSync=function(i,a){var l=this._runSync(i,a);return l.string||l.root.toString()},n})(),r.exports=e.default})),ps=Z((e=>{e.__esModule=!0,e.universal=e.tag=e.string=e.selector=e.root=e.pseudo=e.nesting=e.id=e.comment=e.combinator=e.className=e.attribute=void 0;var r=b(bn()),o=b(pn()),t=b(yn()),n=b(hn()),s=b(mn()),i=b(xn()),a=b(kn()),l=b(dn()),d=b(fn()),p=b(vn()),h=b(gn()),g=b(wn());function b(m){return m&&m.__esModule?m:{default:m}}e.attribute=function(m){return new r.default(m)},e.className=function(m){return new o.default(m)},e.combinator=function(m){return new t.default(m)},e.comment=function(m){return new n.default(m)},e.id=function(m){return new s.default(m)},e.nesting=function(m){return new i.default(m)},e.pseudo=function(m){return new a.default(m)},e.root=function(m){return new l.default(m)},e.selector=function(m){return new d.default(m)},e.string=function(m){return new p.default(m)},e.tag=function(m){return new h.default(m)},e.universal=function(m){return new g.default(m)}})),hs=Z((e=>{e.__esModule=!0,e.isComment=e.isCombinator=e.isClassName=e.isAttribute=void 0,e.isContainer=h,e.isIdentifier=void 0,e.isNamespace=g,e.isNesting=void 0,e.isNode=n,e.isPseudo=void 0,e.isPseudoClass=p,e.isPseudoElement=d,e.isUniversal=e.isTag=e.isString=e.isSelector=e.isRoot=void 0;var r=me(),o,t=(o={},o[r.ATTRIBUTE]=!0,o[r.CLASS]=!0,o[r.COMBINATOR]=!0,o[r.COMMENT]=!0,o[r.ID]=!0,o[r.NESTING]=!0,o[r.PSEUDO]=!0,o[r.ROOT]=!0,o[r.SELECTOR]=!0,o[r.STRING]=!0,o[r.TAG]=!0,o[r.UNIVERSAL]=!0,o);function n(b){return typeof b=="object"&&t[b.type]}function s(b,m){return n(m)&&m.type===b}var i=s.bind(null,r.ATTRIBUTE);e.isAttribute=i,e.isClassName=s.bind(null,r.CLASS),e.isCombinator=s.bind(null,r.COMBINATOR),e.isComment=s.bind(null,r.COMMENT),e.isIdentifier=s.bind(null,r.ID),e.isNesting=s.bind(null,r.NESTING);var a=s.bind(null,r.PSEUDO);e.isPseudo=a,e.isRoot=s.bind(null,r.ROOT),e.isSelector=s.bind(null,r.SELECTOR),e.isString=s.bind(null,r.STRING);var l=s.bind(null,r.TAG);e.isTag=l,e.isUniversal=s.bind(null,r.UNIVERSAL);function d(b){return a(b)&&b.value&&(b.value.startsWith("::")||b.value.toLowerCase()===":before"||b.value.toLowerCase()===":after"||b.value.toLowerCase()===":first-letter"||b.value.toLowerCase()===":first-line")}function p(b){return a(b)&&!d(b)}function h(b){return!!(n(b)&&b.walk)}function g(b){return i(b)||l(b)}})),ms=Z((e=>{e.__esModule=!0;var r=me();Object.keys(r).forEach(function(n){n==="default"||n==="__esModule"||n in e&&e[n]===r[n]||(e[n]=r[n])});var o=ps();Object.keys(o).forEach(function(n){n==="default"||n==="__esModule"||n in e&&e[n]===o[n]||(e[n]=o[n])});var t=hs();Object.keys(t).forEach(function(n){n==="default"||n==="__esModule"||n in e&&e[n]===t[n]||(e[n]=t[n])})})),Sn=Z(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=i(fs()),t=s(ms());function n(l){if(typeof WeakMap!="function")return null;var d=new WeakMap,p=new WeakMap;return(n=function(h){return h?p:d})(l)}function s(l,d){if(!d&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var p=n(d);if(p&&p.has(l))return p.get(l);var h={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var b in l)if(b!=="default"&&Object.prototype.hasOwnProperty.call(l,b)){var m=g?Object.getOwnPropertyDescriptor(l,b):null;m&&(m.get||m.set)?Object.defineProperty(h,b,m):h[b]=l[b]}return h.default=l,p&&p.set(l,h),h}function i(l){return l&&l.__esModule?l:{default:l}}var a=function(l){return new o.default(l)};Object.assign(a,t),delete a.__esModule,e.default=a,r.exports=e.default})),gs=Nr(Z(((e,r)=>{var{AtRule:o,Rule:t}=Dn(),n=Sn();function s(x,_){let O;try{n(E=>{O=E}).processSync(x)}catch(E){throw x.includes(":")?_?_.error("Missed semicolon"):E:_?_.error(E.message):E}return O.at(0)}function i(x,_){let O=!1;return x.each(E=>{if(E.type==="nesting"){let u=_.clone({});E.value==="&"?E.replaceWith(u):E.replaceWith(s(E.value.replace("&",u.toString()))),O=!0}else"nodes"in E&&E.nodes&&i(E,_)&&(O=!0)}),O}function a(x,_){let O=[];for(let E of x.selectors){let u=s(E,x);for(let f of _.selectors){if(!f)continue;let v=s(f,_);i(v,u)||(v.prepend(n.combinator({value:" "})),v.prepend(u.clone({}))),O.push(v.toString())}}return O}function l(x,_){var E;if(((E=x.prev())==null?void 0:E.type)!=="comment")return _.after(x),x;let O=x.prev();return x.parent.toString().match(/[*]\/ *\n.*{/)?_.after(x).after(O):_.after(x),x}function d(x){return function _(O,E,u,f=u){let v=[];if(E.each(T=>{T.type==="rule"&&u?f&&(T.selectors=a(O,T)):T.type==="atrule"&&T.nodes?x[T.name]?_(O,T,f):E[k]!==!1&&v.push(T):v.push(T)}),u&&v.length){let T=O.clone({nodes:[]});for(let $ of v)T.append($);E.prepend(T)}}}function p(x,_,O){let E=new t({nodes:[],selector:x});return E.append(_),O.after(E),E}function h(x,_,O,E=!0){return _.length?(O=p(x,_,O),E&&(_=[]),[O,_]):[O,_]}function g(x,_=""){let O=x.concat(_),E={};for(let u of O)E[u.replace(/^@/,"")]=!0;return E}function b(x){x=x.trim();let _=x.match(/^\((.*)\)$/);if(!_)return{selector:x,type:"basic"};let O=_[1].match(/^(with(?:out)?):(.+)$/);if(O){let E=O[1]==="with",u=Object.fromEntries(O[2].trim().split(/\s+/).map(v=>[v,!0]));if(E&&u.all)return{type:"noop"};let f=v=>!!u[v];return u.all?f=()=>!0:E&&(f=v=>v==="all"?!1:!u[v]),{escapes:f,type:"withrules"}}return{type:"unknown"}}function m(x){let _=[],O=x.parent;for(;O&&O instanceof o;)_.push(O),O=O.parent;return _}function w(x){let _=x[A];if(!_)x.after(x.nodes);else{let O=x.nodes,E,u=-1,f,v,T,$=m(x);if($.forEach((C,j)=>{if(_(C.name))E=C,u=j,v=T;else{let z=T;T=C.clone({nodes:[]}),z&&T.append(z),f||(f=T)}}),E?v?(f.append(O),E.after(v)):E.after(O):x.after(O),x.next()&&E){let C;$.slice(0,u+1).forEach((j,z,F)=>{let U=C;C=j.clone({nodes:[]}),U&&C.append(U);let ee=[],ze=(F[z-1]||x).next();for(;ze;)ee.push(ze),ze=ze.next();C.append(ee)}),C&&(v||O[O.length-1]).after(C)}}x.remove()}var k=Symbol("rootRuleMergeSel"),A=Symbol("rootRuleEscapes");function y(x){let{params:_}=x,{escapes:O,selector:E,type:u}=b(_);if(u==="unknown")throw x.error(`Unknown @${x.name} parameter ${JSON.stringify(_)}`);if(u==="basic"&&E){let f=new t({nodes:x.nodes,selector:E});x.removeAll(),x.append(f)}x[A]=O,x[k]=O?!O("all"):u==="noop"}var S=Symbol("hasRootRule");r.exports=(x={})=>{let _=g(["media","supports","layer","container","starting-style"],x.bubble),O=d(_),E=g(["document","font-face","keyframes","-webkit-keyframes","-moz-keyframes"],x.unwrap),u=(x.rootRuleName||"at-root").replace(/^@/,""),f=x.preserveEmpty;return{Once(v){v.walkAtRules(u,T=>{y(T),v[S]=!0})},postcssPlugin:"postcss-nested",RootExit(v){v[S]&&(v.walkAtRules(u,w),v[S]=!1)},Rule(v){let T=!1,$=v,C=!1,j=[];v.each(z=>{switch(z.type){case"atrule":[$,j]=h(v.selector,j,$),z.name===u?(T=!0,O(v,z,!0,z[k]),$=l(z,$)):_[z.name]?(C=!0,T=!0,O(v,z,!0),$=l(z,$)):E[z.name]?(C=!0,T=!0,O(v,z,!1),$=l(z,$)):C&&j.push(z);break;case"decl":C&&j.push(z);break;case"rule":[$,j]=h(v.selector,j,$),C=!0,T=!0,z.selectors=a(v,z),$=l(z,$);break}}),h(v.selector,j,$,!1),T&&f!==!0&&(v.raws.semicolon=!0,v.nodes.length===0&&v.remove())}}},r.exports.postcss=!0}))(),1);async function vs({entrypoint:e="/main.css",volume:r={},...o}={}){return o={entrypoint:e,volume:r,...o},{css:(await Ln().use((0,gs.default)()).process(o.volume[o.entrypoint],{from:o.entrypoint,parser:o.parser||null})).css}}var ks=class extends Map{constructor(e){super(),this.factory=e}get(e){let r=super.get(e);return r===void 0&&(r=this.factory(e,this),this.set(e,r)),r}};export{Zl as a,is as i,vs as n,Xl as o,Sn as r,ks as t};
