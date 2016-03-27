# grunt-single-test

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](http://gruntjs.com/)
[![Build Status](https://travis-ci.org/matheuspoleza/grunt-single-test.svg?branch=master)](https://travis-ci.org/matheuspoleza/grunt-single-test)
[![Dependency Status](https://david-dm.org/matheuspoleza/grunt-single-test.svg)](https://david-dm.org/matheuspoleza/grunt-single-test.js)
[![devDependency Status](https://david-dm.org/ContaAzul/creditcard.js/dev-status.svg)](https://david-dm.org/matheuspoleza/grunt-single-test#info=devDependencies)

> :runner:  The Grunt Plugin for single test runner. Works with jasmine and mocha.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-single-test --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-single-test');
```

## The "single_test" task

### Overview
In your project's Gruntfile, add a section named `single_test` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  single_test: {
    options: {
      framework : 'jasmine or mocha'
    },
    files: ['path_to_your_tests/**/*.js'],
  },
});
```

### Options

#### options.framework
Type: `String`
Default value: `jasmine`

A string value that is used set framework tests language.

### Console params

#### --describe
Type: `String`

A string value that is used grep describe text. Default value is empty and nothing happens.

### Usage Examples

```js
grunt.initConfig({
  single_test: {
    options: {
      framework: 'jasmine'
    },
    files: ['spec/**/*.js'],
  },
});
```

```js
grunt.registerTask('single', ['single_test']);
```

```js
grunt --describe='First Test'
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
