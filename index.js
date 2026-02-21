#!/usr/bin/env node

const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    console.log("request made");
    res.end();
});

server.listen(8080, "localhost", () => {
    console.log("Listening for requests on port 8080");
})