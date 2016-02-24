//This is part of Facebook Share for Chrome
//
//Written by: Xander Berkein
//
//Copyright (c) Xander Berkein 2016, All Rights Reserved
//


$("body").append('<div id="fbs_header"><p id="fbs_check"><img src="CheckmarkGreenKlein.png" alt="afbCheck" id="fbs_afbCheck"/>Successfully shared on Facebook!</p><img src="cancelgrey.png" alt="cancel" id="fbs_dismiss"/></div>');

var checkmark = chrome.extension.getURL("images/CheckmarkGreenKlein.png");

$("#fbs_afbCheck").attr("src", checkmark);

var cancel = chrome.extension.getURL("images/cancelgrey.png");
$("#fbs_dismiss").attr("src", cancel);

//<div id="fbs_header">
//            <p id="fbs_check">
//            <img src="CheckmarkGreenKlein.png" alt="afbCheck" id="fbs_afbCheck"/>
//            Successfully shared on Facebook!
//            </p>
//        <img src="cancelgrey.png" alt="" id="fbs_dismiss"/>
//        </div>


//listen for shareIt = success
chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            if (request.shareIt == "success") {
                fbs_showSuccesHeader();
            }
        }
);

$("#fbs_dismiss").on("click", function () {
    $("#fbs_header").slideUp();
});

function fbs_showSuccesHeader() {
    $("#fbs_header").slideDown();
    setTimeout(function () {
        $("#fbs_header").slideUp();
    }, 5000);
}
