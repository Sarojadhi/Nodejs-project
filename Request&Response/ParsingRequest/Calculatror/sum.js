const { URLSearchParams } = require("node:url");

const sumReqHandler = (req, res) => {

console.log("form sum.js", req.url);
const body = [];

req.on('data', chunk => {
    body.push(chunk);
    console.log(chunk);
    
});

req.on('end', () => {
    const bodyStr = Buffer.concat(body).toString();
    console.log(bodyStr);

    const params = new URLSearchParams(bodyStr);
    console.log(params);

    const bodyoj = Object.fromEntries(params);
    console.log(bodyoj);

    const result = Number(bodyoj.first) + Number(bodyoj.second);
    console.log(result);

    res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
                   <head><title>Project Set</title></head>
        <body><h1>The sum of two number is ${result}</h1></body>
        <a href="/calculator" >GO to calculator </a><br><br>
        <a href="/" >Home</a>
       </html>
       `);
     return res.end();
    });

    };

    exports.sumReqHandler = sumReqHandler;