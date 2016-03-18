/*
 * grunt-single-test
 * https://github.com/matheuspoleza/grunt-single-test
 *
 * Copyright (c) 2016 matheuspoleza
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  let SingleTestPlugin = require('./lib/single-test-plugin')(grunt);

  // Register single test task
  grunt.registerMultiTask('single_test', 'run single tests', function(){
    SingleTestPlugin().run();
  } );

};
