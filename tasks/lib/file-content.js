/*
 * grunt-single-test
 * https://github.com/matheuspoleza/grunt-single-test
 *
 * Copyright (c) 2016 matheuspoleza
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){

  class FileContent {
    constructor(grunt) {
      this.jasmineSintax = {
        all: "describe('",
        only: "fdescribe('"
      };

      this.mochaSintax = {
        all: "describe('",
        only: "describe.only('"
      };
    }

    replace(framework, search, filepath) {
      let frameworkSintax = framework === 'jasmine' ? this.jasmineSintax : this.mochaSintax;
      let oldDescribe = frameworkSintax.all + search;
      let newDescribe = frameworkSintax.only + search;
      let oldContent  = grunt.file.read(filepath);
      let newContent = oldContent.replace(oldDescribe, newDescribe)

      grunt.file.write(filepath, newContent);

      this.oldContent = oldContent;
      this.filepath = filepath;
    }

    removeChanges() {
      grunt.file.write(this.filepath, this.oldContent);
    }
  }

  return new FileContent();
};
