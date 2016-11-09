(function() {
  'use strict';

  window.thought = window.thought || {};

  $(window)
      .on('hashchange', function (eventObj) {
        $('main').hide();
        var currentHash = window.location.hash;
        $(currentHash).show();
      });
}());
