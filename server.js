const http = require("http");
const server = http.createServer();
server.on("request", (request, response) => {
    // handle requests
})
server.listen(8080);