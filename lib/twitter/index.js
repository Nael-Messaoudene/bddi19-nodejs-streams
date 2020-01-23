const request = require("request");
const splitter = require("./splitter");
const parser = require("./parser");
const logger = require("./logger");
const countryFilter = require("./countryFilter");

const httpStream = request.get(`${process.env.TWITTER_API_STREAM_URL}/statuses/filter.json?track=football`, {
  oauth: {
      consumer_key: process.env.TWITTER_API_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_API_CONSUMER_SECRET,
      token: process.env.TWITTER_API_TOKEN,
      token_secret: process.env.TWITTER_API_TOKEN_SECRET
  }
});

const tweetStream = httpStream
  .pipe(splitter)
  .pipe(parser);
  // .pipe(countryFilter);

module.exports = tweetStream;
