const express = require("express");
const server = express();
const port = 3000;

// Habilitar arquivos estáticos
server.use(express.static("public"));

server.get('/', (req, res) => {
  return res.sendFile(__dirname + "/views/index.html");
});

server.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});