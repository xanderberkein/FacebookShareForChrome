
//This is part of Facebook Share for Chrome
//
//Written by: Xander Berkein
//
//Copyright (c) Xander Berkein 2016, All Rights Reserved
//

var tabShared;

// On context menu click -- callback
function shareOnClick(info, tab) {
    //bepaal url van wat geshared moet worden
    var url;
    console.log("dit is het:::::" + tab + tab.id + tab.url);
//    localStorage.tabShared = tab.id;
    tabShared = tab;

    if (info.srcUrl != null) {
        url = info.srcUrl;
    } else if (info.linkUrl != null) {
        url = info.linkUrl;
    } else {
        url = info.pageUrl;
    }

    var method = info.menuItemId.slice(0, -1);

    if (method != "copy") {
        share(method, url);
    }

    //copy to clipboard
    else {
        var sandbox = $('#fbse_dummy').val(url).select();
        document.execCommand('copy');
        sandbox.val('');
    }

    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
}


//creeer context menu aangepast naar hetgeen waarop men klikte
var contexts = ["page", ["image", "link"]];

for (var i = 0; i < contexts.length; i++) {
    var context = [contexts[i]];
    var title = "Share this " + context + " on Facebook!";
    if (i === 1) {
        context = contexts[i];
        title = "Share this image/link on Facebook!";
    }
    var id = chrome.contextMenus.create({"title": title, "contexts": context});

//        if (isLoggedIn()) {
//2 childs onder het context menu -> share via bericht of op wall
    var title1 = "Share in a message";
    var id1 = "message" + i.toString();
    var title2 = "Share on my/someones wall";
    var id2 = "wall" + i.toString();
    var title3 = "Copy link to clipboard";
    var id3 = "copy" + i.toString();
    var child1 = chrome.contextMenus.create(
            {"title": title1, "parentId": id, "id": id1, "contexts": context, "onclick": shareOnClick});
    var child2 = chrome.contextMenus.create(
            {"title": title2, "parentId": id, "id": id2, "contexts": context, "onclick": shareOnClick});
    var child3 = chrome.contextMenus.create(
            {"title": title3, "parentId": id, "id": id3, "contexts": context, "onclick": shareOnClick});

    console.log("'" + context + "' item:" + id);
}



var appid = "1708806532697008";

var messageurl = "http://www.facebook.com/dialog/send?app_id=" + appid + "&display=popup&link=";

var posturl = "https://www.facebook.com/dialog/share?app_id=" + appid + "&display=popup&href=";

var redirecturl = "&redirect_uri=http://on.fb.me/IKFRtL/";


function share(method, url) {

    //geen & errors
    url = url.replace(/&/g, "%26");
    url = url.replace(/#/g, "%23");
    url = url.replace(/:/g, "%3A");
    url = url.replace(/@/g, "%40");

    //method: 0 = message, 1 = wall
    var firsturl = (method === "message" ? messageurl : posturl);

    console.log(firsturl + url + redirecturl);

    chrome.windows.create({'url': firsturl + url + redirecturl, 'type': 'popup'}, function (window) {
    });


    var checker = false;
    waitForShared();

    function waitForShared() {

        chrome.tabs.query({url: "http://on.fb.me/IKFRtL*"}, function (arrayOfTabs) {
            if (arrayOfTabs.length > 0) {
                checker = true;
                chrome.tabs.remove(arrayOfTabs[0].id);
                chrome.runtime.sendMessage({
                    share: "success"
                });
                //send message to right tab: shareIt: success
                chrome.tabs.sendMessage(tabShared.id, {shareIt: "success"});
                console.log("dit is het twee: " + tabShared.id + tabShared.url)

            }

        });

        if (!checker) {
            setTimeout(function () {
                waitForShared();
            }, 250);
        }
    }
}



