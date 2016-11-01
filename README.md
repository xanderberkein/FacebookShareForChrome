# Facebook Share For Chrome

Facebook Share for Chrome is a Chrome extension that makes it easy to share a page, image or link with your friends on Facebook. 

By right clicking on an image, link or anywhere on the page you want to share, you get the possibility to share the content via personal message or by sharing it on someone's wall. You can also copy the link of the image/page you want to share, and manually send it to them.

The extension also generates a little icon next to the urlbar in Chrome. Clicking on the icon makes you able to login to Chrome and it lets you share the page you are visiting in a message or on someone's wall.

## Install

To install the extension, drag the *FacebookShareForChrome1-0.crx*-file into an open Chrome window. Accept the Chrome-warning and the extension is ready to use.

## Source files
To compile your own version of this extension, you will need a [Facebook app id](https://developers.facebook.com/apps/). Insert your app id in "config.js". For example: 

```javascript
var config =  {
    "appid": "578465186878451"
};
```

After inserting your Facebook app id, open chrome://extensions in Chrome, enable *developer mode* and drag the *src*-folder of the extension into the Chrome windows. The extension is now installed and ready to use.
