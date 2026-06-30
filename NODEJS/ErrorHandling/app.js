const http = require("http");
// const errorHandler = require('./error');
const LogicalError = require('./logicalError');
// const  runtimeErrorHandler= require('./runtimeError')
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // console.log(errorHa endler);
  LogicalError();
  // console.log(runtimeErrorHandler);
  // runtimeErrorHandler();
  res.end("Server is running");
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
}); 