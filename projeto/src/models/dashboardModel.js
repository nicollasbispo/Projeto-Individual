var database = require("../database/config");


function atualizarGrafico(fkUsuario) {
    console.log(
      "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
      fkUsuario,
      // certas,
      // erradas,
      // tentativa
    );
    var instrucao = `
SELECT fkUsuario, certas, erradas, tentativa FROM resultado join usuario on usuario.idUsuario = resultado.fkUsuario
where fkUsuario = ${fkUsuario};`;
      //WHERE idUsuario = ${idUsuario}
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }
  
  module.exports = {
    atualizarGrafico
  };

  // where fkUsuario = ${fkUsuario} AND certas = ${certas} AND erradas = ${erradas} AND tentativa = ${tentativa}
  //idUsuario, certas, erradas, tentativa