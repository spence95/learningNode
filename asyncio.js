var fs = require('fs');
var path = process.argv[2];

fs.readFile(path.toString(), function(err, buffer){
  var numNewLines = buffer.toString().split("\n");
  console.log(numNewLines.length - 1);
});
