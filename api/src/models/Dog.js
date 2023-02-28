const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura: {
      type: DataTypes.JSON,
      allowNull: false
    },
    peso: {
      type: DataTypes.JSON,
      allowNull: false
    },
    añosDeVida: {
      type: DataTypes.STRING
    }
  },
  {timestamps:false});
};
