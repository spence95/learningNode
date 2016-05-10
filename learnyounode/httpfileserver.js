var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var fileLocation = process.argv[3];

var httpServer = http.createServer(function(req, res){
  var stream = fs.createReadStream(fileLocation);
  stream.pipe(res);
});
httpServer.listen(port);
