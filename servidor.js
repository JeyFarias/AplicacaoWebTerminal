var express = require("express")
var rotas = require("./routes/produtoroutes")

var servidor = express()
const PORTA = 8082

servidor.use(express.urlencoded({extended:true}))
servidor.use(rotas)

servidor.listen(PORTA,function(){
    console.log('Servidor executando na $(PORTA) ...')
})
