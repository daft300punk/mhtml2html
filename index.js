#!/usr/bin/env node

'use strict';

var mhtml2html = require('./mhtml2html');
var fs         = require('fs');

// Ensure that an input and output path is provided.
if (process.argv[2] === undefined || process.argv[3] === undefined) {
    throw new Error("Path is required. Usage : mhtml2html <input.mhtml> <output.html>");
}

// Read the file provided and return the html document as a string.
fs.readFile(process.argv[2], 'utf8', function (err, data) {
    if (err) {
        throw err;
    }

    fs.writeFile(process.argv[3], mhtml2html.convert(data).documentElement.innerHTML, function(err) {
        if(err) {
            return console.log(err);
        }
    });
});