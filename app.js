// $('p').css('color','red');

var bgUrl = chrome.extension.getURL("hook-bg.png");
var spinnerUrl = chrome.extension.getURL("hook-spinner.gif");
var scriptUrl = chrome.extension.getURL("hook.js");

var hookDiv = [
    '<div id="hook" style="background: url(\''+bgUrl+'\') repeat">'
      ,'<div id="loader">'
      ,'<div class="spinner" style="background: url(\''+spinnerUrl+'\') no-repeat">'
      ,'</div>'
      ,'</div>'
      ,'<span id="hook-text">Reloading...</span>'
    ,'</div>'
    ,'<script src="'+scriptUrl+'"></script>'
    ].join("\n");

$('body').prepend(hookDiv);


