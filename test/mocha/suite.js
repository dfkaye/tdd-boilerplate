// mocha/suite.js

var boilerplate;
var assert;

if (typeof require == 'function') {
  // enable to re-use in a browser without require.js
  boilerplate = require('../../index.js');
  assert = require('assert');
}

describe('smoke test', function() {
  it('should pass', function () {
    assert.equal(boilerplate(), 'boilerplate');
  });
});