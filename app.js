const express = require("express");
var hbs = require("hbs");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

//Servir Contenido Estático
app.use(express.static("public"));

/**app.get("/", (req, res) => {
  res.send("Home page");
});*/

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Jorge",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  //res.sendFile(__dirname + "/public/generic.html");
  res.render("generic", {
    nombre: "Jorge Andrés",
    titulo: "Curso Node",
  });
});

app.get("/elements", (req, res) => {
  //res.sendFile(__dirname + "/public/elements.html");
  res.render("elements", {
    nombre: "Jorge Andres",
    titulo: "Curso Node",
  });
});

/*app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
