module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignores: [ 'node_modules/**' ]
      },//option
      source: {
        files: {
          src: [ 'src/js/**/*.js' ]
        }//files
      },//source
      test: {
        files: {
          src: [ 'test/specs/**/*.js' ]
        }//files
      }//test
    },//jshint



  });//grunt.initConfig{}

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask( 'default', ['jshint'] );

};//module.exports {}
