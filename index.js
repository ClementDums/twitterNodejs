const {server, wsServer} = require("./server");
const stream = require("./twitterInit");
const {tweetExtractor, stringify, filter} = require("./transforms");
const SocketStream = require("./socketStream");

wsServer.on("connection", ws => {
    ws.on("message", message => {

    });
    const socketStr = new SocketStream(ws);
    stream.pipe(stringify).pipe(filter).pipe(socketStr);
});

