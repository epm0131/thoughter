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
 });//it namespace
 });//describe (main suite)
}()); //iife
