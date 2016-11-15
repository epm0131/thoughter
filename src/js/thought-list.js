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
