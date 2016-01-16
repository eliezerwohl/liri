module.exports = function(){
var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'overkill' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    else{
    console.log(data)
  }
});
}