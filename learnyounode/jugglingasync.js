var http = require('http');
var firstURL = process.argv[2];
var secondURL = process.argv[3];
var thirdURL = process.argv[4];

http.get(firstURL, function(response){
  var totalResp = "";
  response.setEncoding("utf8");

  response.on("data", function(data){
    totalResp += data;
  });

  response.on("error", function(err){

  });

  response.on("end", function(){
    console.log(totalResp);
    http.get(secondURL, function(response){
      var totalResp = "";
      response.setEncoding("utf8");

      response.on("data", function(data){
        totalResp += data;
      });

      response.on("error", function(err){

      });

      response.on("end", function(){
        console.log(totalResp);
        http.get(thirdURL, function(response){
          var totalResp = "";
          response.setEncoding("utf8");

          response.on("data", function(data){
            totalResp += data;
          });

          response.on("error", function(err){

          });

          response.on("end", function(){
            console.log(totalResp);
          });
        });
      });
    });

  });
});
