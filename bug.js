const http = require('http');

const server = http.createServer((req, res) => {
  // Without this line, the request will hang.
  // res.writeHead(200);

  // This will cause the response to hang.
  // This is an uncommon error, because it depends on the specific timing of events.
  setTimeout(() => {
    res.writeHead(200);
    res.end('Hello World!');
  }, 5000);
});

server.listen(3000);