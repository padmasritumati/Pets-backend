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
    type_of_pet: DataTypes.STRING,
    breed: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    age_years: DataTypes.INTEGER,
    age_months: DataTypes.INTEGER,
    sex: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'pet',
  });
  return pet;
};