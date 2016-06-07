// ==UserScript==
// @name         Gamekit SeeAll
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  Add a button to reveal all quests in GameKit
// @author       MrCraftCod
// @match        https://gamekit.com/*/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/MrCraftCod/TampermonkeyScripts/master/GamekitSeeAll.js
// @downloadURL  https://raw.githubusercontent.com/MrCraftCod/TampermonkeyScripts/master/GamekitSeeAll.js
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function(){
        $(".fast-menu__nav").append('<a href="#" id="revealAll" done="false">Reveal quests</a>');
        $('#revealAll').click(function(){
            revealAll();
        });
    });
})();

function revealAll(){
    if($('#revealAll').attr("done") === "true")
        return;
    $(".item").each(function(){
        var active = $(this).hasClass("active");
        $(this).find(".pad").each(function(){
            $(this).find("p:not([style],[class])").each(function(){
                appendText($(this).clone().children().remove().end().text(), active);
                $('#revealAll').attr("done", true);
                $('#revealAll').hide();
            });
        });
    });
}

function appendText(text, active){
    $("article>.game>.row>ul").append("<li" + (active ? ' style="color:green;"' : "") + ">" + text + "</li>");
}