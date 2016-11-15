(function() {
  'use strict';

  window.thought = window.thought || {};

  $(window)
  .on('hashchange', function() {
    $('main').hide();
    var currentHash = window.location.hash;
    $(currentHash).show();
  });

  if(window.location.hash === '#recent-thoughts') {
    window.thought.searchThoughts(20)
    .done(function handleSuccess(thoughtData) {
      window.thought.listThought(thoughtData);
    });
  }

}());
