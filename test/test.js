var assert = require('assert');
var strongPass = require('../src/strong-pass');

describe('test group', function() {

    it('test1', function () {
        assert.equal(strongPass("fdfsd"), 21);
    });

    it('test2', function () {
        assert.equal(strongPass("fs3FSFSd"), 12);
    });

});
