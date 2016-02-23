//This is part of Facebook Share for Chrome
//
//Written by: Xander Berkein
//
//Copyright (c) Xander Berkein 2016, All Rights Reserved
//

//listen for image = true
//chrome.runtime.onMessage.addListener(
//        function (request, sender, sendResponse) {
//            if (request.image == "true") {
//
//                console.log("content.js geladen");
//                imageHover();
//            }
//            if (request.image == "false") {
//                imageUnHover();
//            }
//        }
//);
//
//
//function imageHover() {
//    $("img").addClass("fbse_img");
//    $("a").addClass("fbse_img");
//    izi();
//}
//
//function imageUnHover() {
//    unizi();
//    console.log("terug in imageHOver(3)");
//    $("img").removeClass("fbse_img");
//    $("a").removeClass("fbse_img");
//}
//
//
//$('body').append($("<div>").attr("id", "fbse_hover")
//        .append($("<p>").text("Share on Facebook!").attr("id", "fbse_hoverp")));
//
//
//function izi() {
//    $(".fbse_img").on('mousemove', function (e) {
//        $('#fbse_hover').css({
//            left: e.pageX - 85,
//            top: e.pageY - 70
//        }).fadeIn(100);
//    });
//    $(".fbse_img").on('mouseout', function () {
////        setTimeout(function () {
////            if(!$('.fbse_img').is(":hover")){
//                $('#fbse_hover').fadeOut(100);
////            };
////        }, 500);
//    });
//
//}
//
//function unizi() {
//    $(".fbse_img").off();
//}

