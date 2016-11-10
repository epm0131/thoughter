module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({

    clean: [ 'build/' ],

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
        }//files
      }//stylesOfProject
    },//sass

    copy: {
      html: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: [ 'index.html' ],
            dest: 'build/'
          }//files
        ]//files
      },//html

      vendorjs: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/jquery/dist',
            src: [ 'jquery.js' ],
            dest: 'build/js/'
          }//files
        ]
      },//vendorjs
    },//copy

    concat: {
      js: {
        src: [ 'src/js/**/*.js' ],
        dest: 'build/js/app.js'
      }//js
    },//concat

    connect: {
      testing: {
        options: {
          port: 8080,
          base: '.'
        }//options
      }//testing
    },//connect

    mocha: {
      all: {
        options: {
          urls: [
            'http://localhost8080/test/thoughter.html'
          ]
        }//options
      }//all
    }//mocha

  });//grunt.initConfig{}

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask( 'test', [ 'jshint', 'connect', 'mocha' ] );
  grunt.registerTask( 'default', [ 'clean', 'test', 'sass', 'copy', 'concat' ] );

};//module.exports {}
