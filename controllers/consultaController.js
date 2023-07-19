const RoupaInfantil = require('../models/roupa');

const consultaController = {
  realizarConsulta: async (req, res) => {
    try {
      
      const { nome, tamanho, cor, preco } = req.query;
  
      const resultado = await RoupaInfantil.findAll({
        where: {
          nome: nome || null,
          tamanho: tamanho || null,
          cor: cor || null,
          preco: preco || null,
        },
      });

      res.render('resultado', { resultado });
    } catch (error) {
      console.error('Erro ao realizar consulta:', error);
      res.status(500).send('Erro ao realizar consulta');
    }
  },
};

module.exports = consultaController;
