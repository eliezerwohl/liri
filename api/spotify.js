module.exports = function(searchItem){
var track = searchItem
var spotify = require('spotify');
 
spotify.search({ type: 'track', query: track }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    else{
    console.log(track)
  }
});
}