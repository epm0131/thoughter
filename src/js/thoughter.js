(function() {
  'use strict';

  window.thought = window.thought || {};

  $(window)
      .on('hashchange', function() {
        $('main').hide();
        var currentHash = window.location.hash;
        $(currentHash).show();
      });
}());
