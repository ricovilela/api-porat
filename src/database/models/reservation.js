const uuid = require("uuid");

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservation extends Model {
    static associate(models) { }
  };
  reservation.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    people: DataTypes.STRING,
    forbook: DataTypes.DATEONLY,
    atbook: DataTypes.STRING,
    confirm: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'reservation',
  });

  reservation.addHook('beforeCreate', (reservation, options) => {
    reservation.id = uuid.v4()
  })

  return reservation;
};