var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

router.get("/ultimas/:idUsuario", function (req, res) {
pontuacaoController.buscarUltimaspontuacao(req, res);
});

router.get("/tempultimaso-real/:idUsuario", function (req, res) {
pontuacaoController.buscarpontuacaoEmTempoReal(req, res);
})

module.exports = router;