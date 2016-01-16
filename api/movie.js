module.exports = function movie(){
var request = require('request');
var movieInput =  process.argv[3]
console.log(process.argv[3])

request("http://www.omdbapi.com/?t=a clockwork orange&y=&plot=short&r=json", function(error, response, body) {
  // console.log(response)
  var weatherObject = JSON.parse(body);
  console.log(weatherObject);
});




console.log("omdb file");
}