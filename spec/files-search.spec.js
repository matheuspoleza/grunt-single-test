'use strict';

const grunt = require('grunt');
let FilesSearch = require('../tasks/lib/files-search')(grunt);

let FILES_MASK = 'spec/tmp/spec/fixtures/**/*.js';
let FIRST_TEST_FILEPATH   = 'spec/tmp/spec/fixtures/first-test.js';
let SECOND_TEST_FILEPATH  = 'spec/tmp/spec/fixtures/second-test.js';

let singleTestConfig = {
  options: {
    language: 'jasmine',
    testTaskName: 'karma'
  },
  files : FILES_MASK
};

describe('on verify files mask', () => {

  it('should return true with mask string', () => {
    expect(FilesSearch.isMaskFilepath(singleTestConfig.files)).toBeTruthy();
  });

  it('should return true with mask in array', () => {
    let filesArray = [FILES_MASK];
    expect(FilesSearch.isMaskFilepath(filesArray)).toBeTruthy();
  });

  it('should return false with one file string', () => {
    singleTestConfig.files = FIRST_TEST_FILEPATH;
    expect(FilesSearch.isMaskFilepath(singleTestConfig.files)).toBeFalsy();
  });

  it('should return false when its files array', () => {
    let filesArray = [FIRST_TEST_FILEPATH, SECOND_TEST_FILEPATH];
    expect(FilesSearch.isMaskFilepath(filesArray)).toBeFalsy();
  });

  it('should return false when its one file array', () => {
    let filesArray = [FIRST_TEST_FILEPATH];
    expect(FilesSearch.isMaskFilepath(filesArray)).toBeFalsy();
  });

  afterEach(() => {
    singleTestConfig.files = FILES_MASK;
  });
});

describe('on try to find', () => {

  it('should return first test filepath', (done) => {
    let argOption = 'First Test';
    FilesSearch.find(singleTestConfig.files, argOption, (data) => {
      expect(data).toEqual(FIRST_TEST_FILEPATH);
      done();
    });
  });

  it('should return second test filepath', (done) => {
    let argOption = 'Second Test';
    FilesSearch.find(singleTestConfig.files, argOption, (data) => {
      expect(data).toEqual(SECOND_TEST_FILEPATH);
      done();
    });
  });

  it('should undefined filepath when its not found', (done) => {
    let argOption = 'Third Test';
    FilesSearch.find(singleTestConfig.files, argOption, (data) => {
      expect(typeof data).toEqual('undefined');
      done();
    });
  });

  it('should get undefined files is not defined', (done) => {
    let argOption;
    FilesSearch.find(singleTestConfig.files, argOption, (data) => {
      expect(typeof data).toEqual('undefined');
      done();
    });
  });

});
