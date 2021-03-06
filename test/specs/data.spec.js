(function() {
  'use strict';

  var expect = chai.expect;

  // var fixtures = $('#fixtures').html();

 describe('What you are thinking', function() {
  it('should know that the namespace exists', function() {
      expect(window.thought).to.be.an('object');

  describe('Search peoples thoughts', function() {
      xit('should make an ajax call and grab a thought from the server', function(doneCallback) {
        var xhrPromise = window.thought.searchThoughts(); //this confirms that a promise did in fact come back.
        expect(xhrPromise).to.be.an('object');
        expect(xhrPromise.done).to.be.a('function');
        expect(xhrPromise.fail).to.be.a('function');

        xhrPromise
          .done(function handleSuccess(data) {
            console.log(data);
            doneCallback();
          })
          .fail(function handleFailure(xhrPromise) {
            console.log(xhrPromise);
            doneCallback('Something went very wrong');
          });
      });//it make an ajax call
  });//describe thoughts

  describe('should add the collection of thoughts to the page', function() {
    //  afterEach(function() {
    //    $('.#fixtures').html(fixtures);
    //  });

     xit('should add thoughts to the page when given an array', function(){
       window.thought.addThoughtsToPage([
         {id: 1, name: 'foobar'},
         {id: 2, name: 'batbaz'},
       ]);
       var thoughtLi =$('ul.list li');
       expect(thoughtLi.length).to.equal(2);
     });//it - given array

     xit('should not add thoughts if given an empty array', function() {
       window.thought.addReposToPage([]);
       var thoughtLi =$('ul.list li');
       expect(thoughtLi.length).to.equal(0);
     });//it empty array
   });//describe collection
  });//it namespace
  });//describe (main suite)
}()); //iife
