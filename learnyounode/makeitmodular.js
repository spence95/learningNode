var asynciomodule = require('./asynciomodule');

var path = process.argv[2];
var fileExtensionFilter = process.argv[3];

var data =
asynciomodule(path, fileExtensionFilter, function(err, names){
  if(err){
    console.log("An Error Occured: " + err);
  }
  names.forEach(function(name){
    console.log(name);
  });
});
