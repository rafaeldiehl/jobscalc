const express = require("express");
const server = express();
const port = 3000;

server.get('/', (req, res) => {
  console.log('Alguém acessou a rota /');
  return res.send('Hello World! 🚀');
});

server.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});