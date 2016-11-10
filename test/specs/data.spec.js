(function() {
  'use strict';

  var expect = chai.expect;

  describe('What you are thinking', function() {
    it('should know that the namespace exists', function() {
      expect(window.thought).to.be.an('object');

    describe('Search peoples thoughts', function() {
      it('should make an ajax call and grab a thought from the server', function(doneCallback) {
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
          })
   });//it make an ajax call
   });//describe thoughts

   describe('should add the collection of thoughts to the page', function() {
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
