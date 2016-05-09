var http = require('http');
var url = process.argv[2];

http.get(url, function(response){
  var totalResp = "";
  response.setEncoding("utf8");

  response.on("data", function(data){
    totalResp += data;
  });

  response.on("error", function(err){

  });

  response.on("end", function(){
    console.log(totalResp.length);
    console.log(totalResp);
  });
});
