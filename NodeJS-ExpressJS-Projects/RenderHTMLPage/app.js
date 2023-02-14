const express = require("express");

const app = express();
const path = require("path");

const portNumber = 3000;

app.get("/", (req, res) => {
  res.send(
    `<h1>HTML Rendering Page using Node JS & Express JS</h1>
    <h2><a href="http://localhost:3000/home" target="_blank">Visit => localhost:3000/home</a></h2>`
  );
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname + "/home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname + "/contact.html"));
});

app.listen(portNumber, () => {
  console.log(`Listening to port number : ${portNumber}`);
});
