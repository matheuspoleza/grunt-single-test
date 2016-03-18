/*
 * grunt-single-test
 * https://github.com/matheuspoleza/grunt-single-test
 *
 * Copyright (c) 2016 matheuspoleza
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){

  let eventemitter = require('events').EventEmitter;

  class TaskManager {
    constructor() {
      eventemitter.call(this);
    }

    run(name) {
      grunt.task.run(name);
      this.$emit('task done');
    }
  }

  return new TaskManager();
};
