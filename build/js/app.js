(function() {
  'use strict';

  window.thought = window.thought || {};

  window.thought.searchThoughts = searchThoughts;
  window.thought.addNewThought = addNewThought;

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
/**
 * A new thought will post to the API
 * @param {String} newThought The message can consist of a string or a number
 * @return {Promise}     Promise from Ajax call
*/
function addNewThought(newThought) {
  if(typeof(newThought) !== 'string') {
    return;
  }

  return $.ajax({
       url: 'https://thoughter.herokuapp.com/api/Thoughts',
       method: 'POST',
       dataType: 'json',
       data: JSON.stringify({
         'content': newThought
       }),
       headers: {
         'Content-Type': 'application/json'
       }
   })
   .done(function handleSuccess(newThought) {
     console.log(newThought);
   })
   .fail(function handleFailure(xhr) {
     console.log(xhr);
   });
}//addNewThought




}());

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

(function() {
  'use strict';

  window.thought = window.thought || {};

  window.thought.listThought = listThought;

  /**
   * Will post the thoughts to the browser
   * @param  {Array} thoughts thoughts that are sent to the api server
   */

  function listThought(thoughts) {
    if(!Array.isArray(thoughts)) {
      return;
    }

    $('.recent-thoughts').html('');
    thoughts.forEach(function appendThoughts(thought){
      $('.list')
        .append(
          '<li>' +
          thought.createTime + ' ' +
          thought.content +
          '</li>'
        );
    });
  }//listThought




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

    if(window.location.hash === '#recent-thoughts') {
      window.thought.searchThoughts(20)
        .done(function handleSuccess(thoughtData) {
          window.thought.listThought(thoughtData);
        });
    }

}());
