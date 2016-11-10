(function() {
  'use strict';

window.thought = window.thought || {};

window.thought.addThoughtsToPage = addThoughtsToPage;

function addThoughtsToPage(thoughts) {
  thoughts.forEach(function addLi(thought) {
    $('ul.list').append('<li>' + thought.content + '</li>');
  });
}






}());
