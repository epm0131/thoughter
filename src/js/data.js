(function() {
  'use strict';

  window.thought = window.thought || {};

  window.thought.searchThoughts = searchThoughts;

  function searchThoughts() {
    return $.ajax({
      url: 'https://thoughter.herokuapp.com/api/Thoughts',
      method: 'GET',
      dataType: 'json'
    })

 };






}());
