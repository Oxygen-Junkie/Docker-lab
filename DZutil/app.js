'use strict';
var fs = require('fs');

var text = fs.readfilesync('public/secret.log', utf - 8)
text.split(/\r?\n/).forEach(line => { console.log(${line});})

