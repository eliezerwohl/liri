var movie = require("./api/movie.js");
var spotify = require("./api/spotify.js");
var twitter = require("./api/twitter.js");
var command = process.argv[2]
var searchItem = []
for (var i = 3; i < process.argv.length; i++) {
  searchItem += " " + process.argv[i]};

// console.log(searchItem)

switch(command) {
  case "music":
  case "spotify":
  case "spotify-this-song":
  if (searchItem == ""){
      searchItem = "what’s my age again";
    }
    result = spotify(searchItem);
    break;

  case "twitter":
  case "twits":
  case "my-tweets":
    result = twitter(searchItem);
    break;

  case "do-what-it-says":
  case "do":
    result = console.log("do what it says")
    break;

  case "movie":
  case "movie-this":
    if (searchItem == ""){
      searchItem = "Mr. Nobody";
    }
    result = movie(searchItem);
    break;

    default:
    result = console.log("please try another search");
  }
