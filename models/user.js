'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order, {
        foreignKey: 'usuarioId'
      });
      this.hasOne(models.Payment, {
        foreignKey: 'usuarioId'
      });
    }
  };
  Usuario.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rol: DataTypes.BOOLEAN,
    age: DataTypes.INTEGER,
    createdAt: DataTypes.DATA,
    updatedAt:DataTypes.DATA

  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};