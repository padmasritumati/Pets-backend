"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "addresses",
      [
        {
          house_number: 420,
          street: "zebraspoor",
          city: "maarssen",
          postcode: "3605GX",
          country: "Netherlands",
          userId: 1,
          latitude: 52.1417089,
          longitude: 5.0187138,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          house_number: 4,
          street: "duivenkamp",
          city: "maarssen",
          postcode: "3607BK",
          country: "Netherlands",
          userId: 2,
          latitude: 52.1302586,
          longitude: 5.0263534,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("addresses", null, {});
  },
};
