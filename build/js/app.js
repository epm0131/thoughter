(function() {
  'use strict';

  window.thought = window.thought || {};

  window.thought.searchThoughts = searchThoughts;
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

 }






}());

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

(function() {
  'use strict';

window.thought = window.thought || {};

window.thought.addThoughtsToPage = addThoughtsToPage;

function addThoughtsToPage(thoughts) {
  thoughts.forEach(function addLi(thought) {
    $('ul.list').append('<li>' + thought.createTime + thought.content + '</li>');
  });
}






}());
