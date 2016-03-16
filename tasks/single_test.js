/*
 * grunt-single-test
 * https://github.com/matheuspoleza/grunt-single-test
 *
 * Copyright (c) 2016 matheuspoleza
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var files_control = require('./lib/files_control')(grunt);
  var ReplaceText = require('./lib/replace_text')(grunt);

  var ERRORS = {
    1: 'Describe option is not defined.',
    2: 'Describe was not found. Please put a exists test.'
  };

  // Register single test task
  grunt.registerMultiTask('single_test', 'run single tests', function() {
    var self = this;
    var name = self.name || 'single_test';
    var options = this.options({});
    var describeOption = grunt.option('describe');

    if(typeof grunt.option('describe') === 'undefined') {
      grunt.fail.warn(ERRORS[1]);
    }

    this.files.forEach(function(filepath) {
      var searchFilepath = files_control.retrieveFileSearch(filepath, describeOption);

      if(searchFilepath.length === 0) {
        grunt.fail.warn(ERRORS[2]);
      }

      var changer = new ReplaceText(options.language, describeOption, searchFilepath);
      changer.replace(filepath);
    });
  });

};
