const http = require ('http');
const server = http.createServer((req,res)=>
{
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>sendingResponse</title>');
    res.write('<body><h1> This is a heading </h1></body>');
    res.write('</head>');
    res.write('</html>');
    res.end();
    
});
server.listen(3000,()=>
{
console.log('server running in the port 3000');

});