const fs = require("fs");
const http = require("http");
const WebSocket = require("ws");
const server = http.createServer();
const Twitter = require("twitter");
const dotenv = require("dotenv").dotenv.config();
const TwitterStream = require("./TwitterStream");

const wsServer = new WebSocket.Server({ server });
server.on("request", (request, response) => {
    const fileSrc = fs.createReadStream("./public/index.html");
    fileSrc.pipe(response);
})
wsServer.on("connection", ws => {

})
server.listen(8080);

const twitterClient = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
const stream = new TwitterStream(twitterClient);
stream.track("javascript");