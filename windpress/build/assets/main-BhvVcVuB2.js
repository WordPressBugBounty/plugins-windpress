import { t as e } from "./virtualRef-02PlKd5f.js";
import { t } from "./logger-DDCO5Eq-.js";
import { t as n } from "./windpress-paV8bhqe.js";
var r = `#oxygen-topbar .oxygen-toolbar-menus:has(.oxygen-dom-tree-button)`, i = document.createRange().createContextualFragment(`
    <div class="windpressoxygen-settings-button">
        ${n}
    </div>
`), { getVirtualRef: a } = e({}, { persist: `windpress.ui.state` }), o = document.querySelector(r);
o.insertBefore(i, o.firstChild), window.tippy(`.windpressoxygen-settings-button`, { content: `WindPress is detected`, animation: `shift-toward`, placement: `bottom` }), document.querySelector(`.windpressoxygen-settings-button`), t(`Module loaded!`, { module: `settings` });
