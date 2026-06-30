const { writeFileSync } = require("fs");
const http = require("http");
const { URLSearchParams } = require("url");

const server = http.createServer((req, res) => {

  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  // ignore browser noise
  if (req.url === "/favicon.ico") return res.end();

  // HOME PAGE
  if (req.url === "/" && req.method === "GET") {
    return res.end(`
      <html>
        <body>
          <h1>User Form</h1>

          <form action="/submit" method="POST">
            <label>Name:</label>
            <input type="text" name="name" />
            <br><br>

            <label>
              <input type="radio" name="gender" value="male" /> Male
            </label>

            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>

            <br><br>

            <button type="submit">Submit</button>
          </form>

          <a href="/about">About</a>
        </body>
      </html>
    `);
  }

  // SUBMIT PAGE
  if (req.method === "POST" && req.url === "/submit") {

    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => { 

      // convert buffer → string
      const bodyString = Buffer.concat(body).toString();//jodera console ma string banaunxa 

      console.log("RAW:", bodyString); // input ma lekhako lekhna console ma 
      const params = new URLSearchParams(bodyString)
      const bodyObject = Object.fromEntries(params)
      console.log(bodyObject);
      

     
      writeFileSync("user.txt", JSON.stringify(bodyObject)); // user.txt bhitra input ko kura lekhxa

      // redirect
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });

    return;
  }

  // ABOUT PAGE
  if (req.url === "/about") {
    return res.end(`
      <html>
        <body>
          <h1>About Page</h1>
          <a href="/">Home</a>
        </body>
      </html>
    `);
  }

  // 404
  res.statusCode = 404;
  res.end("Page Not Found");
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});