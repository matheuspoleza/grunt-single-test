/*
 * grunt-unittest-runner
 * https://github.com/matheuspoleza/grunt-unittest-runner
 *
 * Copyright (c) 2016 matheuspoleza
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['spec/tmp']
    },

    copy : {
      main : {
        files : [
           {expand: true, src: ['spec/expected/**/*.js'], dest: 'spec/tmp' },
           {expand: true, src: ['spec/fixtures/**/*.js'], dest: 'spec/tmp' }
        ]
      }
    },

    // Configuration to be run (and then tested).
    single_test: {
      options: {
        language: 'mocha',
        testTaskName: 'karma'
      },
      files: 'spec/fixtures/**/*.js'
    },

    jasmine_node: {
      options: {
        forceExit: true,
        match: '.',
        matchall: false,
        extensions: 'js',
        specNameMatcher: 'spec'
      },
      all: ['spec/']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-copy');
  grunt.loadNpmTasks('grunt-jasmine-node');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['copy', 'jasmine_node', 'clean']);

  grunt.registerTask('karma', ['clean']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['single_test']);

};
