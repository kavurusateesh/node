// Nodejs Installation  process

1) Download Node.js from the official Node.js web site: https://nodejs.org

2) Install next next process

// -------
http module

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);