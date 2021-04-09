const express = require("express");
const server = express();
const routes = require("./routes");

const port = 3000;

// Habilitar arquivos estáticos
server.use(express.static("public"));

// Habilitar rotas
server.use(routes);

server.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});