
var sum = 0;
var i = 0;
process.argv.forEach(function(argument) {
  if(i > 1){
    sum += parseInt(argument);
  }
  i += 1;
});
console.log(sum);
