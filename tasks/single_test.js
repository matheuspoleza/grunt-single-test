/*
 * grunt-single-test
 * https://github.com/matheuspoleza/grunt-single-test
 *
 * Copyright (c) 2016 matheuspoleza
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  let FilesControl = require('./lib/FilesControl')(grunt);
  let TextReplace = require('./lib/TextReplace')(grunt);
  let TaskControl = require('./lib/TaskControl')(grunt);

  const ERRORS = {
    1: 'Describe option is not defined.',
    2: 'Describe was not found. Please put a exists test.'
  };

  function SingleTest() {
    let self = this;
    let options = self.options({});
    let describeOption = grunt.option('describe');

    if(typeof describeOption === 'undefined') {
      grunt.fail.warn(ERRORS[1]);
    }

    this.files.forEach((filepath) => {
      let searchFilepath = FilesControl.retrieveFileSearch(filepath, describeOption);

      if(searchFilepath.length === 0) {
        grunt.fail.warn(ERRORS[2]);
      }

      TextReplace.replace(options.language, describeOption, searchFilepath);
    });
  }

  // Register single test task
  grunt.registerMultiTask('single_test', 'run single tests', SingleTest );

};
