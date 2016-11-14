(function() {
  'use strict';

  window.thought = window.thought || {};

  window.thought.searchThoughts = searchThoughts;
  window.thought.postThoughts = postThoughts;
  /**
   * Use this function to pull thoughts from the API
   * @return {Promise}  the ajax call promise.
   */
  function searchThoughts() {
    return $.ajax({
      url: 'https://thoughter.herokuapp.com/api/Thoughts',
      method: 'GET',
      dataType: 'json',
      data: { foo: 'bar '} //example - goes into the body
    });

 }//searchThoughts

  function postThoughts(thoughtValues) {
    $.ajax({
      url: 'https://thoughter.herokuapp.com/api/Thoughts',
      method: 'POST'
      dataType: 'json',
      data: JSON.stringify({
        id: 'thoughtValues.id',
        createTime: 'thoughtValues.createTime',
        content: 'thoughtValues.content'
      }),
      headers: {
        'Content-Type': 'application/json'
      },//headers
    });//ajax
  }//postThoughts






}());
