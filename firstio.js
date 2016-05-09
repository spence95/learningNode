var fs = require('fs');
var path = process.argv[2];

var fileContents = fs.readFileSync(path.toString()).toString();

var numNewLines = fileContents.split("\n");
console.log(numNewLines.length - 1);
