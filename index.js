const fs = require("fs");
const http = require("http");
const WebSocket = require("ws");
const server = http.createServer();
const wsServer = new WebSocket.Server({ server });
server.on("request", (request, response) => {
    const fileSrc = fs.createReadStream("./public/index.html");
    fileSrc.pipe(response);
})
wsServer.on("connection", ws => {

})
server.listen(8080);