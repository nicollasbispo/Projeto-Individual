var express = require("express");
var router = express.Router();

var dashboardControllers = require("../controllers/dashboardControllers")


// router.post("/atualizarGrafico", dashboardController.atualizarGrafico);
router.get("/atualizarGrafico/:idUsuario", function (req, res) {
    dashboardControllers.atualizarGrafico(req, res);
    //  res.render("dashboard");
});

module.exports = router;