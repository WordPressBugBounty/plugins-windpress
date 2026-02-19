import{t as e}from"./virtualRef-ZiMdoc2r.js";import{t as o}from"./logger-C0ovfSUp.js";import{t as n}from"./windpress-C2RZ3D9H.min.js";var s="#oxygen-topbar .oxygen-toolbar-menus:has(.oxygen-dom-tree-button)",r=document.createRange().createContextualFragment(`
    <div class="windpressoxygen-settings-button">
        ${n}
    </div>
`),{getVirtualRef:m}=e({},{persist:"windpress.ui.state"}),t=document.querySelector(s);t.insertBefore(r,t.firstChild),window.tippy(".windpressoxygen-settings-button",{content:"WindPress is detected",animation:"shift-toward",placement:"bottom"}),document.querySelector(".windpressoxygen-settings-button"),o("Module loaded!",{module:"settings"});
