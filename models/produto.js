var sequelize = require("sequelize")
var banco = require("./../configs/bancoConfig")

var produto = banco.define("produto",{
    idproduto: {
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    marca: {
        type: sequelize.STRING(20),
        allowNull: false,
    },
    ano: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    usado: {
        type: sequelize.BOOLEAN,
        allowNull: false,
    }
},{
    freezeTableName: true,
    timestamps: false
})

//produtp.sync()

module.exports = produto