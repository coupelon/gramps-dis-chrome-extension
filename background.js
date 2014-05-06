// Copyright (c) 2014 Olivier COUPELON.

var latestPages = new Array();

var callback = function(details) {
  latestPages.push(details.url);
  if (latestPages.length > 10) {
    latestPages.shift();
  }
};
var filter = {urls: ["*://etat-civil.bas-rhin.fr/adeloch/cg67_img_load.php*",
  "*://www.archivesdepartementales.puydedome.fr/archives/permalink*"]};

chrome.webRequest.onBeforeRequest.addListener(
        callback, filter);