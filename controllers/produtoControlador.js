var produto = require("./../models/produto")

var produtoControlador = {}

//Create  - POST
produtoControlador.inserir = function(req,res){
    produtocontrolador.create({
        descricao: req.body.descricao,
        preco: req.body.preco,
        validade: req.body.validade
    }).then(
        function(dados){
            res.status(200).send(`produto da marca ${req.body.marca} inserido com sucesso!`)
            //res.sendStatus(200)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao inserir o produto: "+erro)
        }
    )
}

//Read - GET
produtoControlador.buscarVarios = function(req,res){
    produto.findAll({
        raw: true
    }).then(
        function(dados){
            res.status(200).send(dados)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao buscar por produtos: "+erro)
        }
    )
}

//Read - GET 2
produtoControlador.buscarUm = function(req,res){
    produto.findAll({
        raw: true,
        where: {
            idproduto: req.params.id
        }
    }).then(
        function(dados){
            res.status(200).send(dados)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao buscar por produto: "+erro)
        }
    )
}

//Update - PUT
produtoControlador.atualizar = function(req,res){
    produto.update({
        validade: req.body.validade,
    },{
        where:{
            idproduto: req.params.id
        }
    }).then(
        function(dados){
            res.sendStatus(200)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao atualizar um produto: "+erro)
        }
    )
}

//Delete - DELETE
produtoControlador.remover = function(req,res){
    produto.destroy({
        where:{
            idproduto: req.params.id
        }
    }).then(
        function(dados){
            res.sendStatus(200)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao remover um produto: "+erro)
        }
    )
}

module.exports = produtoControlador