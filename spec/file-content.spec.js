'use strict';

let grunt = require('grunt');
let FileContent = require('../tasks/lib/file-content')(grunt);
let expect = require('chai').expect;

describe('On call replace function', function () {
    it('should emit the event before the callback', function () {
      let framework = 'mocha';
      let args = 'First Test';
      let filepath = 'fixtures/first-test.js';
      let expectFilePath = 'expected/jasmine/first-test.js';

      let oldFile = grunt.file.read(filepath);
      let newFile = grunt.file.read(expectFilePath);

      FileContent.replace(framework, args, filepath);
      expect(oldFile).to.deep.equal(newFile);
    });
});
