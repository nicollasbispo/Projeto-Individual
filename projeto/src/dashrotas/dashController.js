var dashModel = require("../models/dashModel");

function buscarUsuario(req, res) {
  var idUsuario = req.params.idUsuario;

  dashModel.buscarUsuario(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os usuario: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var idUsuario = req.body.idUsuario;

   if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    dashModel.cadastrar( idUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarUsuario,
  cadastrar
}