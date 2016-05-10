var net = require('net');
var date = new Date();

var server = net.createServer(function (socket){

  var day = date.getDate().toString();
  if(day.length == 1){
    day = "0" + day;
  }

  var month = (date.getMonth() + 1).toString();
  if(month.length == 1){
    month = "0" + month;
  }



  var currentDate = date.getFullYear() + "-" + month
  + "-" + day + " " + date.getHours() + ":" + date.getMinutes() + "\n";

  return socket.end(currentDate);
});

server.listen(process.argv[2]);
