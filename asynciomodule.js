var fs = require('fs');

module.exports = function(path, fileExtensionFilter, callback){
  fs.readdir(path, function(err, list){
    if(err){
      callback(err);
    }
      names = []
      list.forEach(function(fileName){
        if(fileName.split(".")[1] === fileExtensionFilter){
          names.push(fileName);
        }
      });
      callback(null, names);

  });
}
