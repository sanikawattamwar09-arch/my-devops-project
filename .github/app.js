JavaScript
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello! This app is running inside a Docker container managed by DevOps automation.\n');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
