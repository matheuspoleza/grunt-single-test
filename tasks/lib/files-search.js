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

    find(filesArray, option, callback) {
      let files = filesArray;

      if(typeof filesArray !== 'object'){
        glob(filesArray, (er, f) => {
          files = f;
        });
      }

      let changedFile = files.filter( (data) => {
        let content = grunt.file.read(data);
        return content.indexOf(option) > 0;
      });

      callback(changedFile[0]);
    }
  }

  return new FileSearch();
};
