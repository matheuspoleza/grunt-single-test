/*
 * grunt-single-test
 * https://github.com/matheuspoleza/grunt-single-test
 *
 * Copyright (c) 2016 matheuspoleza
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){

  let glob = require('glob');

  class FileSearch {

    find(files, option, callback) {

      let contentMach = (data) => {
        return grunt.file.read(data).indexOf(option) !== -1;
      };

      let getFilterContent = (err,array) => {
        let changedFile = array.filter(contentMach);
        callback(changedFile[0]);
      };

      if(typeof files === 'string')
        glob(files, getFilterContent);
      else
        getFilterContent(files);
    }
  }

  return new FileSearch();
};
