// ==UserScript==
// @name         Gamekit SeeAll
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Add a button to reveal all quests in GameKit
// @author       MrCraftCod
// @match        https://gamekit.com/*/*
// @grant        none
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
        $(this).find(".pad").each(function(){
            appendText($(this).text());
            $('#revealAll').attr("done", true);
            $('#revealAll').hide();
        });
    });
}

function appendText(text){
    $("article>.game>.row>ul").append("<li>" + text + "</li>");
}