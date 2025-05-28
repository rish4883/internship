const http = require('http')

const server = http.createServer((req,res) => {
	if (req.url == '/')  {
		res.writeHead(200, {'Content-Type': 'text/html'})
		res.end('<h1>Home Page</h1>');
	} else if (req.url == '/about') {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('About Page')
	} else {
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end('404 page Not found');
	}
})

server.listen(4000, () => {
	console.log('listening');
});