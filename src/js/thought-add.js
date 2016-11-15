(function() {
  'use strict';

  window.thought = window.thought || {};

  $('.newThought')
  .on('submit', function submitNewThought(event) {
    event.preventDefault();
    $('.btn btn-primary').trigger('reset');
    window.thought.addNewThought($('.form-control').val());
    console.log('hi');
  });






}());
