'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.movehtml = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },

    default_options: function (test) {
        test.expect(2);

        var dest, expect, actual, expected;
        dest = 'tmp/targetDir/sample.html';
        expect = 'test/expected/targetDir/sample.html';
        actual = grunt.file.read(dest);
        expected = grunt.file.read(expect);
        test.equal(actual, expected, 'dest file not match');

        var src, deleted;
        src = 'test/fixtures/sample.html';
        deleted = !grunt.file.exists(src);
        test.ok(deleted, 'source file should be deleted');

        test.done();
    }
};
