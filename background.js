// Copyright (c) 2014 Olivier COUPELON.

var latestPages = new Array();

var callback = function(details) {
  latestPages.push(details.url);
  if (latestPages.length > 10) {
    latestPages.shift();
  }
};
var filter = {urls: ["*://etat-civil.bas-rhin.fr/adeloch/cg67_img_load.php*",
    "*://archivesenligne.tarn.fr/affichage.php*",
    "*://www.archives-aube.fr/arkotheque/arkotheque_img_print.php*",
    "*://www.archinoe.fr/*",
    "*://www.archives43.fr/arkotheque/visionneuse/print_view.php*"]};

chrome.webRequest.onBeforeRequest.addListener(
        callback, filter);