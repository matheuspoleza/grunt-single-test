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

  class TaskControl {
    constructor() {
      eventemitter.call(this);
    }

    run() {
      grunt.task.run(name);
      this.$emit('task done');
    }
  }

  return new TaskControl();
};
