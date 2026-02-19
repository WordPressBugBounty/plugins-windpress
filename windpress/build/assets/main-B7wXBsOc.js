import{t as n}from"./virtualRef-ZiMdoc2r.js";import{t as s}from"./logger-C0ovfSUp.js";import{t as a}from"./windpress-C2RZ3D9H.min.js";var o=document.createRange().createContextualFragment(`
    <button id="windpressbuilderius-settings-navbar" data-tooltip-content="WindPress \u2014 Builderius settings" data-tooltip-place="bottom" class="uniPanelButton">
        <span class="">
            ${a}
        </span>
    </button>
`),{getVirtualRef:i}=n({},{persist:"windpress.ui.state"});document.querySelector(".uniTopPanel__rightCol").prepend(o);var t=document.querySelector("#windpressbuilderius-settings-navbar");function r(){let e=i("window.minimized",!1).value;i("window.minimized",!1).value=!e,e?t.classList.add("active"):t.classList.remove("active")}t.addEventListener("click",e=>{r()}),s("Module loaded!",{module:"settings"});
