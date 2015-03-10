/*
 * grunt-movehtml
 * https://github.com/weilao/grunt-movehtml
 *
 * Copyright (c) 2014 Weilao
 * Licensed under the MIT license.
 */

'use strict';
var Path = require('path');

function updateReference(destpath, srcpath, htmlContent) {
    var relativePath = Path.relative(
        Path.dirname(destpath),
        Path.dirname(srcpath)
    );

    htmlContent = htmlContent.replace(/(url\(|['"])([^'")]*?.\.(png|jpg|gif|css|js|ico|html|json))(['")])/g, function () {
        var prefix, url, postfix;

        prefix = arguments[1];
        url = arguments[2];
        postfix = arguments[4];

        return prefix + Path.join(
                relativePath,
                Path.dirname(url),
                Path.basename(url)
            ).replace(/\\/g, '/') + postfix;
    });
    return htmlContent;
}

module.exports = function (grunt) {
    grunt.registerMultiTask('movehtml', 'Move html file and update reference.', function () {

        this.files.forEach(function (f) {

            f.src
                .filter(function (filepath) {
                    // Warn on and remove invalid source files (if nonull was set).
                    if (!grunt.file.exists(filepath)) {
                        grunt.log.warn('Source file "' + filepath + '" not found.');
                        return false;
                    } else {
                        return true;
                    }
                })
                .forEach(function (srcpath) {
                    var destpath, content;
                    destpath = f.dest;

                    content = grunt.file.read(srcpath);
                    content = updateReference(destpath, srcpath, content);

                    grunt.file.write(destpath, content);
                    grunt.log.writeln('File "' + f.dest + '" created.');

                    grunt.file.delete(srcpath);
                    grunt.log.writeln('File "' + srcpath + '" deleted.');
                });

        });
    });
};