var database = require("../database/config");

function buscarUsuario(idUsuario) {

  var instrucaoSql = `SELECT * FROM usuario a WHERE idUsuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(idUsuario) {
  
  var instrucaoSql = `INSERT INTO ( idUsuario) usuario VALUES ( ${idUsuario})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarUsuario,
  cadastrar
}
