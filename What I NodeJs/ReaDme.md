# JavaScript on Server (Nepali Roman)

Yo README file ma **server-side JavaScript** ko barema Roman Nepali ma explain garnecha. JavaScript kasari **server ma** run garne, ani web server ko backend ko kaam kasari garnecha bhanne barema janne ho.

## Table of Contents

- [Introduction](#introduction)
- [How JavaScript Works on the Server](#how-javascript-works-on-the-server)
- [Benefits of Server-Side JavaScript](#benefits-of-server-side-javascript)
- [Common Frameworks](#common-frameworks)
- [Example Code](#example-code)
- [Conclusion](#conclusion)

---

## Introduction

**Server-side JavaScript** le backend ko kaam garnecha. Aajkal **Node.js** ko madat le JavaScript server ma run garna sakinchha, jasma **Express.js** jasto framework haru pani use garincha. JavaScript server ma run garda, **HTTP requests** ko response, **database queries**, ani **business logic** handle garincha.

---

## How JavaScript Works on the Server

1. **Node.js**: JavaScript ko **runtime environment** ho jun server ma JavaScript chalaucha. 
2. **Event-Driven**: Server ma request aayo bhane, Node.js le **event** ko through response handle garnecha, jun asynchronous garincha.
3. **Non-blocking I/O**: Node.js le data fetch garne, file read/write garne etc. **non-blocking** tarikale garincha, jasle server ko performance **badhauncha**.
4. **Request/Response**: JavaScript server le **request** receive garne, ani **response** send garne. Jasto ki user ko form submission ya API call ko response.

---

## Benefits of Server-Side JavaScript

1. **Single Language**: Frontend ra backend development ko lagi ekai language (JavaScript) use garna milcha.
2. **Fast Performance**: Node.js ko **V8 engine** le JavaScript lai fast garnecha, jasma event-driven model le efficient banaucha.
3. **Scalability**: Node.js le easily **horizontal scaling** garna milcha. Multiple servers setup garera load balance garna sajilo cha.
4. **Real-Time Applications**: WebSockets ya **Socket.io** ko madat le **real-time apps** banauna milcha, jasto ki chat applications, live updates, etc.
5. **NPM Ecosystem**: Node.js sanga **NPM** aauchha, jasma thousands of packages haru available cha, jasle development faster garnecha.

---

## Common Frameworks

1. **Express.js**: Node.js ko popular framework ho, jun lightweight ra flexible cha. API development ko lagi best choice ho.
2. **Koa.js**: Express ko successor ho, jasma modern features haru cha, jasto async/await.
3. **NestJS**: Angular jasto TypeScript based framework ho, jun large-scale applications ko lagi suitable cha.
4. **Hapi.js**: API development ko lagi robust framework ho, jasma security features built-in cha.

---

## Example Code

Yaha ek simple **Node.js** server ko example cha jun **Express.js** ko madat le baneko cha:

```javascript
// Import Express module
const express = require('express');
const app = express();

// Middleware to handle JSON
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, Server-side JavaScript!');
});

// API route to handle POST request
app.post('/submit', (req, res) => {
  const userData = req.body;
  res.send(`Received data: ${JSON.stringify(userData)}`);
});

// Server listening on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
