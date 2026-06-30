const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url,);

    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {

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

                    <a href="/product">Go to Product</a>
                </body>
            </html>
        `);

    } 
    
    else   {

        return res.end(`
            <html>
                <head>
                    <title>Product Page</title>
                </head>
                <body>
                    <h1>This is a Product Page</h1>
                    <a href="/">Go Home</a>
                </body>
            </html>
        `);

    
    
        }
  
});

server.listen(3000, () => {
    console.log('server running on port 3000');
});