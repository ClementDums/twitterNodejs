const fs = require("fs");
const http = require("http");
const WebSocket = require("ws");



const index = http.createServer();
const wsServer = new WebSocket.Server({ server: index });
// const wss = new WebSocket.Server({ index: index });

index.on("request", (request, response) => {
    const fileSrc = fs.createReadStream("./public/index.html");
    fileSrc.pipe(response);
});

index.listen(5000);

module.exports = {index, wsServer}
