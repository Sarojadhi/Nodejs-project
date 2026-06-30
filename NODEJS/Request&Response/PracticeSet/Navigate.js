const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  let content = "";

  if (req.url.toLowerCase() === "/home") {
    content = "<h1>Welcome to Home</h1>";
  } 
  else if (req.url.toLowerCase() === "/men") {
    content = "<h1>Welcome to Men</h1>";
  } 
  else if (req.url.toLowerCase() === "/women") {
    content = "<h1>Welcome to Women</h1>";
  } 
  else if (req.url.toLowerCase() === "/kids") {
    content = "<h1>Welcome to Kids</h1>";
  } 
  else if (req.url.toLowerCase() === "/cart") {
    content = "<h1>Welcome to Cart</h1>";
  } 
  else {
    content = "<h1>404 Page Not Found</h1>";
  }

  res.end(`
    <html>
    <head>
      <title>Navigate</title>
      <style>
        body {
          font-family: Arial;
          margin: 0;
          padding: 0;
          text-align: center;
        }

        nav {
          background: #222;
          padding: 10px;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          display: inline-block;
          margin: 0 10px;
        }

        a {
          color: white;
          text-decoration: none;
        }

        a:hover {
          color: yellow;
        }

        h1 {
          margin-top: 40px;
        }
      </style>
    </head>

    <body>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/men">Men</a></li>
          <li><a href="/women">Women</a></li>
          <li><a href="/kids">Kids</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>

      ${content}
    </body>
    </html>
  `);
});

server.listen(4000, () => {
  console.log("server working on 4000");
});