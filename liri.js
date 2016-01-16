var command = process.argv[2]
console.log(command)

switch(command) {
  case "music":
  case "spotify":
  case "spotify-this-song":
    result = console.log("spotify music")
    break;

  case "twitter":
  case "twits":
  case "my-tweets":
    result = console.log("twitter stuff")
    break;

  case "do-what-it-says":
  case "do":
    result = console.log("do what it says")
    break;

  case "movie":
  case "movie-this":
    result = console.log("movie stuff")
    break;
    
    default:
    result = console.log("please try another search");
  }
