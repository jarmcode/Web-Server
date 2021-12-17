const http = require("http");

http
  .createServer((req, res) => {
    //console.log(req);

    //res.writeHead(200, { "Content-Type": "application/json" });
    //res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    //res.writeHead(200, { "Content-Type": "application/csv" });

    //res.write("id, nombre\n");
    //res.write("1, Jorge\n");
    //res.write("2, Andres\n");
    res.write("Hola mundo");
    res.end();
  })
  .listen(8080);

console.log("Escuchando en el puerto", 8080);
