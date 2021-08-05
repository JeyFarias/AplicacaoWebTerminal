var express = require("express")
var produtoControlador = require("./../controllers/produtoControlador")

var rotas = express.Router()

//rotas da API
rotas.post("/",produtoControlador.inserir)
rotas.get("/:id",produtoControlador.buscarUm)
rotas.get("/",produtoControlador.buscarVarios)
rotas.put("/:id",produtoControlador.atualizar)
rotas.delete("/:id",produtoControlador.remover)

module.exports = rotas
