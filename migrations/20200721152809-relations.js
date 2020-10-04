"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    //adding a column to bookings table one to one relationship, user to booking
    await queryInterface.addColumn("bookings", "sitter_userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    //adding a column to pets table one to many relationship,user to pets
    await queryInterface.addColumn("pets", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    //adding a column to review table one to one relationship,user to review
    await queryInterface.addColumn("reviews", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    //adding a column to service table one to one relationship user to service
    await queryInterface.addColumn("services", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    //adding a column to booking table one to one relationship,pet to booking
    await queryInterface.addColumn("bookings", "petId", {
      type: Sequelize.INTEGER,
      references: {
        model: "pets",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.removeColumn("bookings", "sitter_userId");
    await queryInterface.removeColumn("pets", "userId");
    await queryInterface.removeColumn("reviews", "userId");
    await queryInterface.removeColumn("services", "userId");
    await queryInterface.removeColumn("bookings", "petId");

  },
};
