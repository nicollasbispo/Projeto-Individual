var pontuacaoModel = require("../models/pontuacaoModel");

function finalizar(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  var certas = req.body.certasServer;
  var erradas = req.body.erradasServer;
  var tentativa = req.body.tentativaServer;

  if (idUsuario == undefined) {
    res.status(400).send("Seu idUsuario está undefined!");
  } else if (certas == undefined) {
    res.status(400).send("As respostas certas está indefinida!");
  } else if (erradas == undefined) {
    res.status(400).send("As respostas erradas está indefinida!");
  }else if (tentativa == undefined) {
    res.status(400).send("As respostas erradas está indefinida!");
  } else{
    pontuacaoModel.finalizar(idUsuario, certas, erradas, tentativa ).then(function (resposta) {
      res.status(200).send("Quiz finalizado");
    });
  }
}

module.exports = {
  finalizar,
};