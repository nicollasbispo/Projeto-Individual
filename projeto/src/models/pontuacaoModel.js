var database = require("../database/config");

function buscarUltimasMedidas(idUsuario, limite_linhas) {

    var instrucaoSql = `SELECT 
      pontuacao
                FROM resultado
                    WHERE fkUsuario = ${idUsuario}
                    ORDER BY idUsuario DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    buscarUltimasMedidas,
    
}
