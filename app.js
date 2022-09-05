const express = require("express");
const app = express();
const path = require("path");
const puerto = 3030;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/babbage", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/babbage.html"));
});

app.get("/berners-lee", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/berners-lee.html"));
});

app.get("/clarke", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/clarke.html"));
});

app.get("/hamilton", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/hamilton.html"));
});

app.get("/404", (req, res) => {
  res.send("Error página no encontrada");
});

app.listen(3030, () => {
  console.log(`Servidor Corriendo en el puerto ${puerto}`);
});
