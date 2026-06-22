# Node.js Calculator Project

A simple calculator web application built with Node.js core modules. This project demonstrates how to create an HTTP server, handle routes, process form data, and perform calculations without using external frameworks like Express.

## Features

* HTTP server using Node.js
* Routing with GET and POST requests
* HTML form handling
* Parsing form data using `URLSearchParams`
* Addition of two numbers
* Modular code structure

## Project Structure

```text
Nodejs-project/
│
├── app.js
├── Calculator.js
├── sum.js
└── README.md

```

## Usage

Start the server:

```bash
node app.js
```

The server will run on:

```text
http://localhost:3000
```

## Available Routes

### Home Page

```text
GET /
```

Displays the home page with a link to the calculator.

### Calculator Page

```text
GET /calculator
```

Displays a form to enter two numbers.

### Calculate Result

```text
POST /calculateResult
```

Processes the form data and returns the sum of the two numbers.

## Technologies Used

* Node.js
* HTTP Module
* URLSearchParams
* JavaScript

## Learning Objectives

This project helps in understanding:

* Creating an HTTP server
* Handling requests and responses
* GET and POST methods
* Streams and Buffers
* Parsing request body
* Modular programming using CommonJS
* Working with forms in Node.js
