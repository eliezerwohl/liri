module.exports = function movie(searchItem){
var request = require('request');
var movieInput =  searchItem;


request("http://www.omdbapi.com/?t="
  + movieInput
  +"&y=&plot=long&tomatoes=true&r=json", function(error, response, body) {

  // console.log(response)
  var movieObject = JSON.parse(body);
  // console.log(movieObject);
    console.log(movieObject.Title)
    console.log(movieObject.Year)
    console.log(movieObject.imdbRating)
    console.log(movieObject.Country)
    console.log(movieObject.Language)
    console.log(movieObject.Plot)
    console.log(movieObject.Actors)
    console.log(movieObject.tomatoUserRating)
    console.log(movieObject.tomatoURL)

//   Title
// Year
// IMDB Rating
// Country
// Language
// Plot
// Actors
// Rotten Tomatoes Rating
// Rotton Tomatoes UrL

});


}