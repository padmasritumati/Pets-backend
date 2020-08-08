'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user)
      this.hasOne(models.booking)
    }
  };
  
  pet.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    breed: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    ageInYears: DataTypes.INTEGER,
    ageInMonths: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    image:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pet',
  });
  return pet;
};