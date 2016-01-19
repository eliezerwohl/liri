module.exports = function(searchItem){
var track = searchItem
var spotify = require('spotify');

// console.log(track)
spotify.search({ type: 'track', query: track }, function(err, response) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    else{
    console.log(response.tracks.items[0].artists[0].name)
    console.log(response.tracks.items[0].name)
    console.log(response.tracks.items[0].album.name)
    console.log(response.tracks.items[0].external_urls.spotify)
  }
});
}