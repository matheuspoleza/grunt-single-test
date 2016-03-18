/*
 * grunt-single-test
 * https://github.com/matheuspoleza/grunt-single-test
 *
 * Copyright (c) 2016 matheuspoleza
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){

  let FilesSearch = require('./files-search')(grunt);
  let FileContent = require('./file-content')(grunt);
  let TaskManager = require('./task-manager')(grunt);

  class SingleTestPlugin {
    constructor(files, options, args) {
      this.options = options;
      this.files = files;
      this.args = args;
    }

    run() {
      this.files.forEach((filepath) => {
        let searchFilepath = FilesSearch.find(filepath, this.args);
        FileContent.replace(this.options.language, this.args, searchFilepath);
      });
    }
  }

  return new SingleTestPlugin();
}
