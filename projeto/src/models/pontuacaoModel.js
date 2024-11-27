var database = require("../database/config");


function finalizar(fkUsuario, certas, erradas, tentativa) {
    console.log(
      "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
      fkUsuario,
      certas,
      erradas,
      tentativa
    );
    var instrucao = `
          INSERT INTO resultado (fkUsuario, certas, erradas, tentativa)
          VALUES (
              ${fkUsuario},
              ${certas},
              ${erradas},
              ${tentativa} + COALESCE(
                  (SELECT max(r.tentativa) 
                  FROM resultado r 
                  WHERE fkUsuario = ${fkUsuario} ), 
                  0
              )
          );
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }
  
  module.exports = {
    finalizar
  };