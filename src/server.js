const express = require("express");
const routes = require("./routes");

const server = express();

const port = 3000;

server.set("view engine", "ejs");

// Habilitar arquivos estáticos
server.use(express.static("public"));

// Usar o req.body
server.use(express.urlencoded({
  extended: true
}))

// Usar o req.body
server.use(express.urlencoded({ extended: true }))

// Habilitar rotas
server.use(routes);

server.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});