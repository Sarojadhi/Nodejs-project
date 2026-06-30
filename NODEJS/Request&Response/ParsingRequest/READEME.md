# Node.js Calculator Project

A simple calculator application built using Node.js core modules. This project demonstrates HTTP server creation, routing, handling GET and POST requests, parsing form data, and using npm packages.

## Features

* HTTP server with Node.js
* GET and POST request handling
* HTML forms
* URLSearchParams for parsing request bodies
* Modular code structure
* npm package management
* Custom npm scripts
* Automatic server restart with nodemon

## Project Structure

```text
Nodejs-project/
│
├── app.js
├── Calculator.js
├── sum.js
├── package.json
├── package-lock.json
└── README.md
```

## Prerequisites

Make sure Node.js and npm are installed:

```bash
node -v
npm -v
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Sarojadhi/Nodejs-project.git
```

Move into the project directory:

```bash
cd Nodejs-project
```

Initialize npm:

```bash
npm init -y
```

Install dependencies:

```bash
npm install
```

## Installing Packages

Install nodemon as a development dependency:

```bash
npm install --save-dev nodemon
```

Install a package:

```bash
npm install package-name
```

Example:

```bash
npm install express
```

## package.json

Example scripts:

```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}
```

## Running the Application

Start normally:

```bash
npm start
```

Start in development mode with nodemon:

```bash
npm run dev
```

Or:

```bash
npx nodemon app.js
```

## Available Routes

### Home Page

```text
GET /
```

Displays the home page.

### Calculator Page

```text
GET /calculator
```

Displays a form for entering two numbers.

### Calculate Result

```text
POST /calculateResult
```

Returns the sum of the entered numbers.

## npm Commands

Initialize project:

```bash
npm init
```

Install package:

```bash
npm install <package-name>
```

Install development package:

```bash
npm install --save-dev <package-name>
```

Remove package:

```bash
npm uninstall <package-name>
```

List installed packages:

```bash
npm list
```

Update packages:

```bash
npm update
```

## Technologies Used

* Node.js
* npm
* JavaScript
* HTTP Module
* URLSearchParams
* Nodemon

## Learning Topics Covered

* Node.js Modules
* HTTP Server
* Routing
* GET and POST Requests
* Streams and Buffers
* URLSearchParams
* npm
* npm Packages
* package.json
* npm Scripts
* nodemon
* Module Export and Import

## License

This project is licensed under the MIT License.
