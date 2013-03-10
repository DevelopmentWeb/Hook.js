// $('p').css('color','red');

var bgUrl = chrome.extension.getURL("hook-bg.png");
var spinnerUrl = chrome.extension.getURL("hook-spinner.gif");
var scriptUrl = chrome.extension.getURL("hook.js");

var hookDiv = [
    '<div id="hookjs-plugin" style="display:none; background: url(\''+bgUrl+'\') repeat;">'
      ,'<div id="loader">'
      ,'<div class="spinner" style="background: url(\''+spinnerUrl+'\') no-repeat">'
      ,'</div>'
      ,'</div>'
      ,'<span id="hook-text">Reloading...</span>'
    ,'</div>'
    ,'<script src="'+scriptUrl+'"></script>'
    ].join("\n");

$('body').prepend(hookDiv);

setTimeout(function() {
  $('#hookjs-plugin').css('display','block');
}, 200);