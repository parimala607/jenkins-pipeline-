const http = require('http');
http.createServer((req, res) => {
  res.write('welcome to my first jenkins pipeline');
  res.end();
}).listen(3000);
