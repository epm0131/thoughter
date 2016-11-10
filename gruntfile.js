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
    sass: {
      stylesOfProject: {
        files: {
          'build/css/style.css': 'src/sass/main.scss'
        }
      }
    },



  });//grunt.initConfig{}

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask( 'default', ['jshint', 'sass', ] );

};//module.exports {}
