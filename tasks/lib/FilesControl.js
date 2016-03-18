/*
 * grunt-single-test
 * https://github.com/matheuspoleza/grunt-single-test
 *
 * Copyright (c) 2016 matheuspoleza
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){

  class FilesControl {
    constructor() {
      this.changedFile = '';
    }

    retrieveFileSearch(f, option) {
      this.changedFile = f.src.filter( (data) => {
        let content = grunt.file.read(data);
        return content.indexOf(option) > 0;
      });

      return this.changedFile;
    }
  }

  return new FilesControl();

};
