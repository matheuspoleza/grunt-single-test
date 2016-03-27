/*
 * grunt-single-test
 * https://github.com/matheuspoleza/grunt-single-test
 *
 * Copyright (c) 2016 matheuspoleza
 * Licensed under the MIT license.
 */

'use strict';

module.exports = (grunt) => {

  let FilesSearch = require('./lib/files-search')(grunt);
  let FileContent = require('./lib/file-content')(grunt);
  let TaskManager = require('./lib/task-manager')(grunt);

  let commandLineArg = grunt.option('describe');
  let singleTestConfig = grunt.config.get('single_test');

  // Register single test task
  grunt.registerTask('single_test', 'run single tests', function(){
    let done = this.async();

    let specTask = new TaskManager(singleTestConfig.options.testTaskName);

    specTask.on('end', () => {
      FileContent.removeChanges();
    });

    FilesSearch.find(singleTestConfig.files, commandLineArg, (searchFilepath) => {
      FileContent.replace(singleTestConfig.options.language, commandLineArg, searchFilepath);
      specTask.run();
    });
  } );

};
