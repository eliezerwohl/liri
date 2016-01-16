var movie = require("./api/movie.js");
var spotify = require("./api/spotify.js");
var twitter = require("./api/twitter.js");

var command = process.argv[2]
console.log(command)

switch(command) {
  case "music":
  case "spotify":
  case "spotify-this-song":
    result = spotify();
    break;

  case "twitter":
  case "twits":
  case "my-tweets":
    result = twitter();
    break;

  case "do-what-it-says":
  case "do":
    result = console.log("do what it says")
    break;

  case "movie":
  case "movie-this":
    result = movie();
    break;

    default:
    result = console.log("please try another search");
  }
