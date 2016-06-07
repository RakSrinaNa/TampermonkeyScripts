// ==UserScript==
// @name         Gamekit SeeAll
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Reveal all the quests for a game in gamekit.
// @author       MrCraftCod
// @match        https://gamekit.com/*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function(){
        setTimeout(function(){
            $(".item").each(function(){
                $(this).find(".pad").each(function(){
                    appendText($(this).text());
                });
            });
        }, 1000);
    });
})();

function appendText(text){
    $("article>.game>.row>ul").append("<li>" + text + "</li>");
}
