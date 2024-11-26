var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

router.post("/finalizar", function (req, res) {
pontuacaoController.finalizar(req, res);
});

module.exports = router;