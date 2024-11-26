var dashboardModel = require("../models/dashboardModel");

function atualizarGrafico(req, res) {
    console.log(`Atualizando grafico com dados recentes...`);
    const { idUsuario } = req.body;
    
    dashboardModel.atualizarGrafico(idUsuario)                                     
      .then(function (resultado) {                              
        if (resultado.length > 0) {                             
          console.log(resultado);                               
          res.status(200).json(resultado);                      
        } else {                                                
          res.status(204).send("Nenhum resultado encontrado!"); 
        }
      })
      .catch(function (erro) {                                             
        console.log(erro);                                                 
        console.log("Houve um erro ao buscar os dados.", erro.sqlMessage); 
        res.status(500).json(erro.sqlMessage);                             
      });
  }
  

module.exports = {
atualizarGrafico
};