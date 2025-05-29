const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Welcome to Home Page</h1>');
    } else if (req.url == '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>About Us</h1>');
    } else {
        res.writeHead(404, {'Content-type': 'text/plain'})
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Listening in port 3000');
})
