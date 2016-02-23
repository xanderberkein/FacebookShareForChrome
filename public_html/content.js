//This is part of Facebook Share for Chrome
//
//Written by: Xander Berkein
//
//Copyright (c) Xander Berkein 2016, All Rights Reserved
//

//$('body').append($("<div>").css("id","fbs_header")
//        .append($("<p>").css("id","fbs_check")
//            .append($("img").css("src","CheckmarkGreenKlein").css("id","fbs_afbCheck"))
//            .text("Successfully shared on Facebook!"))
//            .append($("<img>").css("src","cancelgrey.png").css("id","fbs_dismiss")));
    
$("body").append('<div id="fbs_header"><p id="fbs_check"><img src="CheckmarkGreenKlein.png" alt="afbCheck" id="fbs_afbCheck"/>Successfully shared on Facebook!</p><img src="cancelgrey.png" alt="" id="fbs_dismiss"/></div>');

var checkmark = chrome.extension.getURL("CheckmarkGreenKlein.png");
$("#fbs_afbCheck").src = checkmark;

var cancel = chrome.extension.getUrl("cancelgrey.png");
$("#fbs_dismiss").src = cancel;

//<div id="fbs_header">
//            <p id="fbs_check">
//            <img src="CheckmarkGreenKlein.png" alt="afbCheck" id="fbs_afbCheck"/>
//            Successfully shared on Facebook!
//            </p>
//        <img src="cancelgrey.png" alt="" id="fbs_dismiss"/>
//        </div>