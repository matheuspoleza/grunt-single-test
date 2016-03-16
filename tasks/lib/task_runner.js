/*
 * grunt-single-test
 * https://github.com/matheuspoleza/grunt-single-test
 *
 * Copyright (c) 2016 matheuspoleza
 * Licensed under the MIT license.
 */

'use strict';

var eventemitter = require('events').EventEmitter;

module.exports = function(grunt){

  function Runner(){
    eventemitter.call(this);
  }

  Runner.prototype.run = function(name){
    grunt.task.run(name);
    this.$emit('task done');
  }

  return new Runner();
};
