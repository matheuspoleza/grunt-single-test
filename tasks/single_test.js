/*
 * grunt-single-test
 * https://github.com/matheuspoleza/grunt-single-test
 *
 * Copyright (c) 2016 matheuspoleza
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  var JASMINE_SINTAX = {
    all : "describe('",
    only: "fdescribe('"
  };
  var MOCHA_SINTAX = {
    all : "describe('",
    only: "fdescribe('"
  };
  var frameworkSintax;
  grunt.registerMultiTask('single_test', 'Grunt task to run single tests', function() {
    // Iterate over all specified file groups.
    var options = this.options({});

    this.files.forEach(function(f) {
      f.src.filter(function(filepath){
        var decoradorScenario = options.framework === 'jasmine' ? JASMINE_SINTAX : MOCHA_SINTAX;
        var grepText = decoradorScenario.all + grunt.option('describe');
        var content = grunt.file.read(filepath);
        var newContent = content.replace(grepText, decoradorScenario.only + grunt.option('describe'));

        if(content !== newContent) {
          // Changed test file
          grunt.file.write(filepath, newContent);
          // Print a success message.
          grunt.log.writeln('File "' + filepath + '" changed.');
        }
      });
    });
  });

};
