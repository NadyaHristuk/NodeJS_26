const http = require('http');

// http
// 	.createServer(function(req, res) {
// 		res.writeHead(200, { 'Content-Type': 'text/plain' });
// 		res.write('HTTP server running on port 3002');
// 		res.end();
// 	})
// 	.listen(3002);

// http
//   .createServer(function(req, res) {
//     console.log("HTTP server running on port 3003");
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     // res.write("Hello World!");
//     res.end("<h1>im alive</h1>");
//   })
//   .listen(3003);

const server = http.createServer((req, res) => {
	const { headers, url, method } = req;

	console.log('headers', headers);
	console.log('url', url);
	console.log('method', method);

	res.writeHead(201, {
		'Set-Cookie': 'token=token'
	});

	return res.end('Hello');
});

server.listen(3002, () => {
	console.log('Server started listening');
});
