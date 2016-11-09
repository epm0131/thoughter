(function() {
  'use strict';

  window.ns = window.ns || {};

  $(window)
      .on('hashchange', function (eventObj) {
        $('main').hide();

        var currentHash = window.location.hash;
        $(currentHash).show();







      } );
}());
