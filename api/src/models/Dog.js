const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    peso: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    añosDeVida: {
      type: DataTypes.INTEGER
    }
  },{timestamps:false});
};
