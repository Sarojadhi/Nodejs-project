const http = require('http');
const server = http.createServer((req,res)=>{
   //  console.log(req);
        console.log(req.url);

    res.write('server is responding');
    res.end();
});

server.listen(3000,()=>
{
    console.log('server running in port 3000');
    
});

// server.listen(3000);