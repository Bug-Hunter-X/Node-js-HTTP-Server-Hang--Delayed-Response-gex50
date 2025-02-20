const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);

  setTimeout(() => {
    res.end('Hello World!');
  }, 5000);
});

server.listen(3000);