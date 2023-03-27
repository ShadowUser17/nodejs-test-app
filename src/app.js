const process = require('node:process');
const http = require('node:http');

if(process.argv.length == 4) {
  const hostname = process.argv[2];
  const port = process.argv[3];

  const server = http.createServer((req, res) => {
    const ip = res.socket.remoteAddress;
    const port = res.socket.remotePort;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`Request from ${ip}:${port}\n`)
    res.end();
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

} else {
  console.error('Invalid arguments!');
}
