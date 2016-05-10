var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, res){
  if(req.method == 'POST'){
      req.pipe(map(function(mapchunk){
        return mapchunk.toString().toUpperCase();
      })).pipe(res);
  }
});

server.listen(process.argv[2]);
