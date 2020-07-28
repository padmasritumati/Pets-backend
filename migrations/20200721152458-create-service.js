'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      boarding: {
        type: Sequelize.BOOLEAN
      },
      houseSitting: {
        type: Sequelize.BOOLEAN
      },
      dropInVisits: {
        type: Sequelize.BOOLEAN
      },
      doggyDayCare: {
        type: Sequelize.BOOLEAN
      },
      dogWalking: {
        type: Sequelize.BOOLEAN
      },
      boardingRate: {
        type: Sequelize.INTEGER
      },
      houseSittingRate: {
        type: Sequelize.INTEGER
      },
      dropInVisitsRate: {
        type: Sequelize.INTEGER
      },
      doggyDayCareRate: {
        type: Sequelize.INTEGER
      },
      dogWalkingRate: {
        type: Sequelize.INTEGER
      },
      small: {
        type: Sequelize.BOOLEAN
      },
      medium: {
        type: Sequelize.BOOLEAN
      },
      large: {
        type: Sequelize.BOOLEAN
      },
      gaint: {
        type: Sequelize.BOOLEAN
      },
      cat: {
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
    await queryInterface.dropTable('services');
  }
};