const http = require('http');
http.createServer((req, res) => {
  res.write('welcome to my first cicd pipeline project');
  res.end();
}).listen(3000);
