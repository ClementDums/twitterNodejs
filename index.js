const http = require("http");
const WebSocket = require("ws");
const server = http.createServer();
const wsServer = new WebSocket.Server({ server });
server.on("request", (request, response) => {
    // handle requests
    // handle http requests
})
wsServer.on("connection", ws => {
    // handle ws connection
})
server.listen(8080);