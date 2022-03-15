'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var url = require('url');
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream('secret.log', { flags: 'w' });
var log_stdout = process.stdout;

http.createServer(function (req, res) {
    var queryObject = url.parse(req.url, true);
    if (queryObject.pathname == '/serv/') {
        console.log(queryObject.query.text);
    }
}).listen(port);

console.log = function (d) {
    d = util.format(d);
    if (d != 'undefined') {
        log_file.write(new Date().toUTCString() + ' - ' + d + '\r\n');
    }
    //log_stdout.write(d + '\r\n');
};

