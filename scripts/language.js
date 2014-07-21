require([
  '$api/models',
  '/strings/main.lang'
], function(models, mainStrings) {
  'use strict';

  //Setup a short-hand to get translation
  var s = SP.bind(mainStrings.get, mainStrings);

  var doLanguage = function() {
  	$("h1").html(s('app-name'));
  	$("h2").html(s('greeting'));
  	$("#playlist").attr("placeholder", s('playlist'));
    $("#spotify_playlist").attr("placeholder", s('playlistSpotify'));
  	$("#convert").html(s("convert"));

  };

  exports.doLanguage = doLanguage;
});
