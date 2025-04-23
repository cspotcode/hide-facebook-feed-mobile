// ==UserScript==
// @name         Hide FB Feed on Mobile
// @version      2025-04-23
// @description  
// @author       cspotcode
// @match        https://www.facebook.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=facebook.com
// @grant        none
// @run-at       document-end
// @noframes
// ==/UserScript==

(function() {
function injectStyles(styles) {
    const head = document.querySelector('head');
    const style = document.createElement('style');
    style.innerHTML = styles;
    head.appendChild(style);
}

function init() {
    injectStyles(`
        body.tampermonkey-hide-feed div[data-mcomponent=MScreen]>div[data-type=vscroller]>div:nth-child(n+6) {
            display: none !important;
        }
    `);
}

let hidden = false;
function detectFeedShouldBeHidden() {
    const logo = document.querySelector('div[data-mcomponent=MScreen]>div[data-type=vscroller] div[aria-label="Facebook logo"]');
    const shouldBeHidden = logo != null;
    if(shouldBeHidden != hidden) {
        hidden = shouldBeHidden;
        const cls = 'tampermonkey-hide-feed';
        if(hidden) {
            document.querySelector('body').classList.add(cls);
        } else {
            document.querySelector('body').classList.remove(cls);
        }
    }
}

init();
setInterval(detectFeedShouldBeHidden, 1000);
detectFeedShouldBeHidden();
})();
