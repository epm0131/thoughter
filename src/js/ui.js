(function() {
  'use strict';

window.thought = window.thought || {};

window.thought.addThoughtsToPage = addThoughtsToPage;

function addThoughtsToPage(thoughts) {
  thoughts.forEach(function addLi(thought) {
    $('ul.list').append('<li>' + thought.createTime + thought.content + '</li>');
  });
}//addThoughtsToPage

$('.btn btn-primary').on('submit', function createThought(event) {
  event.preventDefault();
  var thoughtValues = {};
  thoughtValues.content = $('#yourthought').val();
}






}());
