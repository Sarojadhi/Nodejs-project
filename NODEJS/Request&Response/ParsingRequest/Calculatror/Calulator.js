
      const {sumReqHandler} =   require('./sum')
const a = (req,res)=>{

    console.log(req.url,req.method);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
                   <head><title>Project Set</title></head>
        <body><h1>Welcome to home page </h1></body>
        <a href="/calculator" >GO to calculator </a>
       </html>
       `);
        return res.end();

    } else if (req.url.toLowerCase() === '/calculator') {
        res.setHeader('Content-Type', 'text/html');
       res.write(`<html>
                   <head><title>Project Set</title></head>
        <body><h1>THis is a calculator page  </h1></body>
         <div>
        <form action="/calculateResult" method="POST">
        <input type="number" placeholder="first Number" name = "first">
        <input type="number" placeholder="Second Number" name = "second">
        <input type="submit" value = "submit">
        </form>
         </div>
        <a href="/" >GO to home </a>
       </html>
       `);
       

        return res.end();
       }else if (req.url.toLowerCase() === '/calculateresult' && req.method ==='POST') {

           return sumReqHandler(req,res)

       
    } else {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>sendingResponse</title></head>');
        res.write('<body><h1>This is a 404</h1></body>');
        res.write(' <a href="/" >GO to home </a>');
        

        res.write('</html>');
        return res.end();
    }
}
exports.a = a ;