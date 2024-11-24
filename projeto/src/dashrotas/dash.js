var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/:idUsuario", function (req, res) {
  dashController.buscarUsuario(req, res);
});

router.post("/cadastrar", function (req, res) {
  dashController.cadastrar(req, res);
})

module.exports = router;