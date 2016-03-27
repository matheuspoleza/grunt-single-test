/*
 * grunt-single-test
 * https://github.com/matheuspoleza/grunt-single-test
 *
 * Copyright (c) 2016 matheuspoleza
 * Licensed under the MIT license.
 */

'use strict';

module.exports = (grunt) => {

  let glob = require('glob');
  let FileContent = require('./file-content')(grunt);

  class FileSearch {

    isMaskFilepath(files){
      if(typeof files === 'string')
        return files.indexOf('*.js') !== -1;

      if(files.length === 1)
        return files[0].indexOf('*.js') !== -1;

      return false;
    }

    find(files, option, callback) {
      let match = (data) => {
        return grunt.file.read(data).indexOf(option) !== -1;
      };

      let getFilterContent = (err,array) => {
        let changedFile = array.filter(match);
        callback(changedFile[0]);
      };

      if(this.isMaskFilepath(files))
        glob(files, getFilterContent);
      else
        getFilterContent(files);
    }
  }

  return new FileSearch();
};
