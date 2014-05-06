// Copyright (c) 2014 Olivier COUPELON.

//This function from http://www.pakzilla.com/2012/03/20/how-to-copy-to-clipboard-in-chrome-extension/
function copyToClipboard(text){
  var copyDiv = document.createElement('div');
  copyDiv.contentEditable = true;
  document.body.appendChild(copyDiv);
  copyDiv.innerHTML = text;
  copyDiv.unselectable = "off";
  copyDiv.focus();
  document.execCommand('SelectAll');
  document.execCommand("Copy", false, null);
  document.body.removeChild(copyDiv);
}

var latestPages = function showLatestPages(bg) {
  var first = document.createElement("h1");
  first.innerHTML = "Derni&egrave;res pages consult&eacute;es";
  document.body.appendChild(first);
  var latestElement = bg.latestPages.length - 1;
  for (var i = latestElement; i >= 0; i--) {
    var div = document.createElement("div");
    div.innerHTML = bg.latestPages[i];
    if (i == latestElement) {
      div.className = 'line lastline';
    } else {
      div.className = 'line';
    }
    document.body.appendChild(div);
  }
  var copy = document.createElement("button");
  copy.innerHTML = 'Copier la derni&egrave;re page';
  copy.className = 'button'
  copy.onclick = function(){
    copyToClipboard(bg.latestPages[latestElement]);
    return false;
  };
  document.body.appendChild(copy);
}

var copyLatestPage = function copyToClipboardLatestPage(bg) {
  var latestElement = bg.latestPages.length - 1;
  copyToClipboard(bg.latestPages[latestElement]);
}

document.addEventListener('DOMContentLoaded', function () {
  chrome.runtime.getBackgroundPage(latestPages);
})

chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
  chrome.runtime.getBackgroundPage(copyLatestPage);
})