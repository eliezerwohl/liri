var secretKeys = require("../keys.js");
module.exports = function twitter(){
var Twitter = require('twitter');
 var client = new Twitter({
  consumer_key: secretKeys.twitterKeys.consumer_key,
  consumer_secret: secretKeys.twitterKeys.consumer_secret,
  access_token_key: secretKeys.twitterKeys.access_token_key,
  access_token_secret: secretKeys.twitterKeys.access_token_secret
});
 client.get('statuses/user_timeline', function(tweets, response){
  console.log(tweets);  // The favorites. 
  // console.log(response);  // Raw response object. 
});
}

