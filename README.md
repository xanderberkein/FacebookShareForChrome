# Facebook Share For Chrome

Facebook Share for Chrome is a Chrome extension that makes it easy to share a page, image or link with your friends on Facebook. 

By right clicking on an image, link or anywhere on the page you want to share, you get the possibility to share the content via personal message or by sharing it on someones wall. You can also copy the link of the image/page you want to share, and manually send it to them.

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
