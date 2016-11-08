(function() {
  'use strict';

  window.ns = window.ns || {};

  $(window)
      .on('hashchange', function (eventObj) {

        console.log('hash changed', window.location);

      } )
}());
