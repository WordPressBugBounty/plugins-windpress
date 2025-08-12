import{c as s}from"./virtualRef-B0Bh2_0Y.js";import{l as o}from"./logger-BTW-zIW3.js";import{L as n}from"./windpress--0tAtoYM.min.js";import"./index-CIOqSYBG.min.js";import"./isObject-K1YoVIH1.min.js";import"./runtime-core.esm-bundler-B89S94Fk.min.js";import"./set-Dt5k9sTt.min.js";import"./_toKey-BxB36GnB.min.js";import"./get-DBhW7rda.min.js";const a=document.createRange().createContextualFragment(`
    <button id="windpressbuilderius-settings-navbar" data-tooltip-content="WindPress \u2014 Builderius settings" data-tooltip-place="bottom" class="uniPanelButton">
        <span class="">
            ${n}
        </span>
    </button>
`),{getVirtualRef:i}=s({},{persist:"windpress.ui.state"}),r=document.querySelector(".uniTopPanel__rightCol");r.prepend(a);const e=document.querySelector("#windpressbuilderius-settings-navbar");function d(){const t=i("window.minimized",!1).value;i("window.minimized",!1).value=!t,t?e.classList.add("active"):e.classList.remove("active")}e.addEventListener("click",t=>{d()}),o("Module loaded!",{module:"settings"});
