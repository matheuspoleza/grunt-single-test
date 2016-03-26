/*
 * grunt-single-test
 * https://github.com/matheuspoleza/grunt-single-test
 *
 * Copyright (c) 2016 matheuspoleza
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){

  let util         = require('util');
  let eventemitter = require('events').EventEmitter;

  class TaskManager {
    constructor(name) {
      eventemitter.call(this);
      this.name = name;
    }

    run() {
      grunt.task.run(this.name);
      this.emit('end');
    }
  }

  util.inherits(TaskManager, eventemitter);
  return TaskManager;
};
