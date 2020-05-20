// ==UserScript==
// @name         WhatsApp Dark Mode
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Turn your WhatsApp Web Dark
// @author       Deblyn Prado
// @match        https://web.whatsapp.com/
// @grant        none
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @downloadURL  https://github.com/moderntribe/tampermonkey-scripts/raw/master/liveagent/liveagent-clickafy-urls.user.js

// ==/UserScript==

(function() {
    'use strict';

    var $ = window.jQuery;
    $('body').addClass("dark");
})();