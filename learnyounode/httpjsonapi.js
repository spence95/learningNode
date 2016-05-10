var http = require('http');
var url = require('url');

var port = process.argv[2];
var server = http.createServer(function(req, res){
  if(req.method == 'GET'){
    var parsedUrl = url.parse(req.url, true);
    var splitUpPath = parsedUrl.pathname.split('/');
    if(splitUpPath[2] == 'parsetime'){
      var date = new Date(parsedUrl.query.iso);
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();

      var json = {}
      json["hour"] = hour;
      json["minute"] = minute;
      json["second"] = second;

      res.writeHead(200, {'Content-Type': 'application/json'});

      return res.end(JSON.stringify(json));
    }
    else if(splitUpPath[2] == 'unixtime'){
      var json = {}
      var date = new Date(parsedUrl.query.iso);
      json["unixtime"] = date.getTime();

      return res.end(JSON.stringify(json));
    }
  }
});

server.listen(port);
