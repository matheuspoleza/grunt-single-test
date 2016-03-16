/*
 * grunt-single-test
 * https://github.com/matheuspoleza/grunt-single-test
 *
 * Copyright (c) 2016 matheuspoleza
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){

  function FilesControl(){
    this.changedFile = '';
  }

  FilesControl.prototype.retrieveFileSearch = function(f, option){
    var self = this;

    self.changedFile = f.src.filter(function(data){
      var content = grunt.file.read(data);
      return content.indexOf(option) > 0;
    });

    return self.changedFile;
  }

  return new FilesControl();
};
