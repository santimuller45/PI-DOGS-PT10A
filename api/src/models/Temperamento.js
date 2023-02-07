const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('temperamento', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    }
  },{timestamps:false});
};