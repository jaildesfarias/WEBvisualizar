const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const RoupaInfantil = sequelize.define(
  'RoupaInfantil',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tamanho: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: 'RoupaInfantil',
    timestamps: false,
  }
);

sequelize
  .sync()
  .then(async () => {
    console.log('Tabela RoupaInfantil criada com sucesso!');
  
  
  const count = await RoupaInfantil.count();
  
  if (count === 0) {
  
      await RoupaInfantil.bulkCreate([
        { nome: 'Camiseta', tamanho: 'M', cor: 'Azul', preco: 20 },
        { nome: 'Calça', tamanho: 'P', cor: 'Vermelha', preco: 30 },
      ]);
      
      console.log('Dados inseridos na tabela RoupaInfantil!');
    } else {
      console.log('A tabela RoupaInfantil já contém registros. Nenhum dado foi inserido.');
    }
  })
  .catch((error) => {
    console.log('Erro ao criar tabela RoupaInfantil:', error);
  });

module.exports = RoupaInfantil;
