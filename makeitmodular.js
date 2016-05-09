var asynciomodule = require('./asynciomodule');

var path = process.argv[2];
var fileExtensionFilter = process.argv[3];

var data = asynciomodule(path, fileExtensionFilter, function(err, names){
  names.forEach(function(name){
    console.log(name);
  });
});
