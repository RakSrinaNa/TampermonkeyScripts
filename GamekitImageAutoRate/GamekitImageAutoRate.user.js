// ==UserScript==
// @name         GamekitImageAutoRate
// @namespace    fr.mrcraftcod
// @version      0.1
// @description  Continuously rate every pictures with 3 stars
// @author       MrCraftCod
// @match        https://gamekit.com/image/star/*
// @match        https://dogry.pl/image/star/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/MrCraftCod/TampermonkeyScripts/master/GamekitImageAutoRate/GamekitImageAutoRate.user.js
// @downloadURL  https://raw.githubusercontent.com/MrCraftCod/TampermonkeyScripts/master/GamekitImageAutoRate/GamekitImageAutoRate.user.js
// ==/UserScript==

(function() {
    'use strict';

    function tryRate()
    {
        var button = $('[data-rating="6"]');
        if(!button || button === null || button === undefined)
            setTimeout(tryRate, 100);
        else
            button.click();
    }

    $(document).ready(function(){
        tryRate();
    });
})();
