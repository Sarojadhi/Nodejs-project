const { writeFileSync } = require("fs");
const http = require("http");
const { url } = require("inspector");

const server = http.createServer((req, res) => {
  console.log(req.url);
  

  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    return res.end(`
            <html>
                <head>
                    <title>User Info</title>
                </head>
                <body>
                    <h1>User Form</h1>

                    <form action="/submit" method="POST">
                        <label>Name:</label>
                        <input type="text" name="name" placeholder="Enter your name" />
                        <br><br>

                        <label>Gender:</label>
                        <br>

                        <label>
                            <input type="radio" name="gender" value="male" />
                            Male
                        </label>

                        <label>
                            <input type="radio" name="gender" value="female" />
                            Female
                        </label>

                        <br><br>

                        <button type="submit">Submit</button>
                    </form>

                    <a href="/about">Go to About</a>
                </body>
            </html>
        `);
  } else if (req.method === "POST" && req.url.toLowerCase() === "/submit") {
    writeFileSync("user.txt","Form Submited");
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();

  } else {
    return res.end(`
            <html>
                <head>
                    <title>About Page</title>
                </head>
                <body>
                    <h1>This is a About Page</h1>
                    <a href="/">Go Home</a>
                </body>
            </html>
        `);
  }
});
const PORT=5000;
server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
