
//This is part of Facebook Share for Chrome
//
//Written by: Xander Berkein
//
//Copyright (c) Xander Berkein 2016, All Rights Reserved
//

var appid = "1708806532697008";

$(document).ready(function () {
    loadFacebookData();
    $("#where").css("display", "inherit");
});


// login (connecting to fb)

var inlogurl = "https://www.facebook.com/dialog/oauth?client_id="
        + appid
        + "&response_type=token&scope=email,user_friends&display=popup&redirect_uri=http://www.facebook.com/connect/login_success.html";

$("#login").on("click", function () {
    chrome.windows.create({'url': inlogurl, 'type': 'popup'}, function (window) {
    });

    var checker = false;
    //dev
    var checkNumberOfCalls = 0;

    waitForToken();

    function waitForToken() {

        chrome.tabs.query({url: "https://www.facebook.com/connect/login_success.html*"}, function (arrayOfTabs) {
            if (arrayOfTabs.length > 0) {
                //dev
                checkNumberOfCalls++;
                localStorage.checkNumberOfCalls = checkNumberOfCalls.toString();
                //
                checker = true;
                var params = arrayOfTabs[0].url.split('#')[1];
                var access = params.split('&')[0].split('=')[1];
                console.log(access);
                localStorage.accessToken = access;

                $("#login").toggle(true);
                $("#ingelogd").fadeTo(0, 1);
                location.reload();
                chrome.tabs.remove(arrayOfTabs[0].id);
            }

        });

        if (!checker) {
            setTimeout(function () {
                waitForToken();
            }, 250);
        }
    }

});



var image = false;

$('#url').change(function () {
    if (this.checked) {
        $("#please").css("display", "none");
        chrome.extension.getBackgroundPage().deselectImage();
    }
    if (!this.checked) {
        $("#please").css("display", "inherit");
    }
});

$('#picture').change(function () {
    if (this.checked) {
        $("#please").css("display", "inherit");
    }
    if (!this.checked) {
        $("#please").css("display", "none");
        
    }
});

//share via message
$("#message").on("click", function () {
    var taburl;
    chrome.tabs.query({active: true, currentWindow: true}, function (tab) {
        taburl = tab[0].url.toString();

        chrome.extension.getBackgroundPage().share("message", taburl);

    });


});


//share via wall
$("#post").on("click", function () {

    var taburl;
    chrome.tabs.query({active: true, currentWindow: true}, function (tab) {
        taburl = tab[0].url.toString();

        chrome.extension.getBackgroundPage().share("wall", taburl);

    });

});


function loadFacebookData() {

//https://graph.facebook.com/me/picture?access_token=
//https://graph.facebook.com/me?fields=id,name,first_name,picture&access_token=CAAYSJoZAfC7ABAG5ajMWtAl1ntRdEZBF7UtgcN45KKamVyEvCTOweqclWFP1IheV37UDO7LSZBU2nVfRwJhZBNY3VBeP1Og7zf9NHRdlO3HIrZCUV1pj6ggZBZBREXsyJZCHF58SikOI8ZAeq7u2XJe1sc6ZAwjUZAAhQrg829sO2Oao17e5e4BadGsSwtGUsloRqUH5gZAOYdatDgZDZD

    var data;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            status = xhttp.status;
            if (status == 200) {
                data = $.parseJSON(xhttp.responseText);
                $("img#afb").attr("src", data.picture.data.url);
                $("span#name").html(data.first_name);
            } else
                loginToFacebook();
        }

//        $("#dev").text(xhttp.readyState + " " + xhttp.status);
    }
    ;
    xhttp.open("GET", "https://graph.facebook.com/me?fields=picture,first_name&access_token=" + localStorage.accessToken, false);
    xhttp.send();

}

//listen for share=success
chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            if (request.share == "success") {
                success();
            }
        }
);

function loginToFacebook() {
    $("#ingelogd").fadeTo(0, 0);
    $("#login").toggle(true);
}

function success() {
    $("#succes").toggle(true);
    $("img.checkmark").addClass("clip-animation");
    setTimeout(function () {
        $("#succes").fadeOut(500);
    }, 5000);
}






