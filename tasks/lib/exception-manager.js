/*
 * grunt-single-test
 * https://github.com/matheuspoleza/grunt-single-test
 *
 * Copyright (c) 2016 matheuspoleza
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  class ExceptionManager {
    constructor() {
      this.errorsText = {
        1: 'Describe option is not defined.',
        2: 'Describe was not found. Please put a exists test.'
      };
    }

    verifyParams(describeOption) {
      if(typeof describeOption === 'undefined') {
        this.grunt.fail.warn(this.errorsText[1]);
      }
    }

    verifySearch(searchFilepath) {
      if(searchFilepath.length === 0) {
        this.grunt.fail.warn(this.errorsTexts[2]);
      }
    }
  }

  return new ExceptionManager();
}
