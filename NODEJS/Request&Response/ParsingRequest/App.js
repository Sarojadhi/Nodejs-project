const http = require("http");
const handler = require("./UseingModule");

const server = http.createServer(handler);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});