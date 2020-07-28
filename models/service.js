'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user)
    }
  };
  service.init({
    boarding: DataTypes.BOOLEAN,
    houseSitting:DataTypes.BOOLEAN,
    dropInVisits:DataTypes.BOOLEAN,
    doggyDayCare:DataTypes.BOOLEAN,
    dogWalking:DataTypes.BOOLEAN,
    boardingRate: DataTypes.INTEGER,
    houseSittingRate:DataTypes.INTEGER,
    dropInVisitsRate:DataTypes.INTEGER,
    doggyDayCareRate:DataTypes.INTEGER,
    dogWalkingRate:DataTypes.INTEGER,
    small:DataTypes.BOOLEAN,
    medium:DataTypes.BOOLEAN,
    large:DataTypes.BOOLEAN,
    gaint:DataTypes.BOOLEAN,
    cat:DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'service',
  });
  return service;
};