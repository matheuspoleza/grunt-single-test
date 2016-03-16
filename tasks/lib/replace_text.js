/*
 * grunt-single-test
 * https://github.com/matheuspoleza/grunt-single-test
 *
 * Copyright (c) 2016 matheuspoleza
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){

  function ReplaceText(framework, search, filepath){
    this.oldContent = grunt.file.read(filepath);
    this.filepath = filepath;
    this.search = search;
    this.jasmineSintax = {
      all: "describe('",
      only: "fdescribe('"
    };
    this.mochaSintax = {
      all: "describe('",
      only: "describe.only('"
    };
    grunt.log.writeln(framework);
    this.frameworkSintax = framework === 'jasmine' ? this.jasmineSintax : this.mochaSintax;
  }

  ReplaceText.prototype.replace = function(filepath){
    var self = this;

    var oldDescribe = self.frameworkSintax.all + self.search;
    var newDescribe = self.frameworkSintax.only + self.search;

    self.oldContent = self.oldContent.replace(oldDescribe, newDescribe);
    grunt.file.write(filepath, self.oldContent);
  }

  ReplaceText.prototype.remove = function(filepath){
    var self = this;
    grunt.file.write(filepath, self.oldContent);
  }

  return ReplaceText;
};
