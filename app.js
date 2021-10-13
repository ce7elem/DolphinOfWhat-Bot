const {TwitterApi} = require('twitter-api-v2');
const dotenv = require('dotenv').config()
const {emojis} = require('./emojis.js')


const twitter_client = new TwitterApi({ 
  appKey: process.env.TW_API_KEY,
  appSecret: process.env.TW_API_SECRET,
  accessToken: process.env.TW_ACCESS_TOKEN,
  accessSecret: process.env.TW_TOKEN_SECRET 
});

let dolphin_too_much_char =
`                😂😂
              😂  😂
        😂😂😂     😂😂😂
      😂                 😂
    😂                    😂
  😂😂  👁                  😂
😂                          😂
  😂😂😂😂😂😂     😂        😂
        😂   😂😂  😂😂      😂
          😂     😂😂  😂    😂
                       😂    😂
                       😂  😂
                     😂😂  😂
                   😂     😂
                     😂 😂
                       😂

`
let dolphin = `
.                        😂😂
                             😂😂😂😂😂😂😂
😂           😂😂😂😂😂😂😂👁️😂😂
     😂😂😂😂😂😂😂😂😂😂😂😂😂😂
     😂😂😂😂😂😂😂😂😂😂😂😂
😂                        😂😂`


const emoji = emojis[Math.floor(Math.random() * Math.floor(emojis.length))]

let tweet ="Hey. I'm the dolphin of " + emoji.name + dolphin.replace(/😂/g, emoji.char);
console.log(tweet);

try {
	twitter_client.appLogin()
	twitter_client.v1.tweet(tweet)
} 
catch(e) {
	console.log(e)
}
