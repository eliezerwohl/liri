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
  for (var i = 0; i < 20; i++) {
    console.log(response[i].text);
    console.log(response[i].created_at)
  };
  // console.log(response[1].text);  // Raw response object. 

  // var jsonTweets = JSON.parse(tweets);
  // var jsonResponse = JSON.parse(response);
  // console.log(jsonResponse);
  // console.log(jsonTweets)
});
}

