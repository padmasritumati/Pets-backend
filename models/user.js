"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.booking);
      this.hasOne(models.pet);
      this.hasOne(models.review);
      this.hasOne(models.service);
    }
  }
  user.init(
    {
      full_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      image: DataTypes.STRING,
      petOwner: DataTypes.BOOLEAN,
      petSitter: DataTypes.BOOLEAN,
      address:DataTypes.STRING,
      latitude:DataTypes.DECIMAL,
      longitude:DataTypes.DECIMAL
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
