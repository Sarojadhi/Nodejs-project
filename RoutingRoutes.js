const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>sendingResponse</title></head>');
        res.write('<body><h1>This is a heading</h1></body>');
        res.write('</html>');
        return res.end();

    } else if (req.url.toLowerCase() === '/product') {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>sendingResponse</title></head>');
        res.write('<body><h1>This is a product</h1></body>');
        res.write('</html>');
        return res.end();

    } else {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>sendingResponse</title></head>');
        res.write('<body><h1>This is a 404</h1></body>');
        res.write('</html>');
        return res.end();
    }
});

server.listen(3000, () => {
    console.log('server running on port 3000');
});