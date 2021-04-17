const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

const port = 3000;

server.set("view engine", "ejs")
server.set("views", path.join(__dirname, "views"))

// Habilitar arquivos estáticos
server.use(express.static("public"))

// Usar o req.body
server.use(express.urlencoded({
  extended: true
}))

// Usar o req.body
server.use(express.urlencoded({ extended: true }))

// Habilitar rotas
server.use(routes)

server.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`)
});