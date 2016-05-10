var http = require('http');
var port = 8124;
var statusOK = 200;
http.createServer(function (request, response) {
  response.writeHead(statusOK, {'Content-Type': 'text/plain'});
  response.end('Hello World');
  console.log('Hello World');
}).listen(port);

console.log('Server running at http://127.0.0.1:' + port);
