(function() {
  'use strict';

  window.thought = window.thought || {};

  window.thought.searchThoughts = searchThoughts;

  /**
   * Use this function to pull thoughts from the API
   * @param  {Number} thoughts number of thoughts to get from server - defaults to 10
   * @return {Promise}  the ajax call promise.
   */

  function searchThoughts(thoughts) {
    if(typeof(thoughts) !== 'number' || thoughts < 0) {
      thoughts = 10;
    }//if

    return $.ajax({
      url: 'https://thoughter.herokuapp.com/api/Thoughts',
      method: 'GET',
      dataType: 'json',
    })

    .done(function handleSuccess(thoughts) {
      console.log(thoughts);
    });


 }//searchThoughts






}());
