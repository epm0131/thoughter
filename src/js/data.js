(function() {
  'use strict';

  window.thought = window.thought || {};

  window.thought.searchThoughts = searchThoughts;
  /**
   * Use this function to pull thoughts from the API
   * @param {Array}
   * @return {[type]} [description] 
   */
  function searchThoughts() {
    return $.ajax({
      url: 'https://thoughter.herokuapp.com/api/Thoughts',
      method: 'GET',
      dataType: 'json'
    })

 };






}());
