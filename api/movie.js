module.exports = function movie(searchItem){
var request = require('request');
var movieInput =  searchItem;


request("http://www.omdbapi.com/?t="
  + movieInput
  +"&y=&plot=short&r=json", function(error, response, body) {
  // console.log(response)
  var movieObject = JSON.parse(body);
  console.log(movieObject);
});


}