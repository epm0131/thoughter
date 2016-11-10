(function() {
  'use strict';

  var expect = chai.expect;

  describe('What you are thinking', function() {
    it('should know that the namespace exists', function() {
      expect(window.thought).to.be.a('object');

    describe('Search peoples thoughts', function() {
      it('should make an ajax call and grab a thought', function(doneCallback) {
        var xhrPromise = window.thought.searchThoughts();
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
            doneCallback();
          })
   });//it make an ajax call
   });//describe thoughts

   describe('adds thoughts to a page', function() {
     it('should add thoughts to the page when given an array', function(){
       window.thought.addThoughtsToPage([
         {id: 1},
         {id: 2},
       ]);

       var thoughtLi =$('ul.list li')
       expect(thought.length).to.equal(1);
     });
   })
 });//it namespace
 });//describe (main suite)
}()); //iife
