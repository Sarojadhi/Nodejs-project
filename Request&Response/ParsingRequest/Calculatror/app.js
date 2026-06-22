const http = require('http');
const {a} = require('./Calulator')
 const server = http.createServer(a);

 const PORT = 3000; 
  server.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
    
  }) 