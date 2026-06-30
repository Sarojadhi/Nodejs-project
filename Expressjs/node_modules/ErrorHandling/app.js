const http = require("http");
// const errorHandler = require('./error');
const  runtimeErrorHandler= require('./runtimeError')
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // console.log(errorHandler);
  console.log(runtimeErrorHandler);
  runtimeErrorHandler();
  res.end("Server is running");
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
}); 