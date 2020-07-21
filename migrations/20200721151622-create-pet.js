'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      type_of_pet: {
        type: Sequelize.STRING
      },
      breed: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.INTEGER
      },
      age_years: {
        type: Sequelize.INTEGER
      },
      age_months: {
        type: Sequelize.INTEGER
      },
      sex: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pets');
  }
};