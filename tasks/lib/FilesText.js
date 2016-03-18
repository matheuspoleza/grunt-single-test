/*
 * grunt-single-test
 * https://github.com/matheuspoleza/grunt-single-test
 *
 * Copyright (c) 2016 matheuspoleza
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){

  const JASMINE_SINTAX = {
    all: "describe('",
    only: "fdescribe('"
  };

  const MOCHA_SINTAX = {
    all: "describe('",
    only: "describe.only('"
  };

  class FilesText {
    constructor() {
      this.jasmineSintax = JASMINE_SINTAX;
      this.mochaSintax = MOCHA_SINTAX;
    }

    replace(framework, search, filepath) {
      let frameworkSintax = framework === 'jasmine' ? this.jasmineSintax : this.mochaSintax;
      let oldDescribe = frameworkSintax.all + search;
      let newDescribe = frameworkSintax.only + search;
      let newContent  = grunt.file.read(filepath);

      grunt.file.write(filepath, newContent);

      this.oldContent = newContent.replace(oldDescribe, newDescribe);
      this.filepath = filepath;
    }

    remove() {
      grunt.file.write(this.filepath, this.oldContent);
    }
  }

  return new FilesText();
};
