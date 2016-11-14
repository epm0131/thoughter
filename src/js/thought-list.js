(function() {
  'use strict';

  window.thought = window.thought || {};
  
  window.thought.listThought = listThought;

  function listThought(thoughts) {
    if(!Array.isArray(thoughts)) {
      return;
    }

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
