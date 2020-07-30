'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "addresses",
      [
        {
          house_number: 420,
          street: "zebraspoor",
          city: "maarssen",
          postcode:"3605GX",
          country:"Netherlands",
          userId:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          house_number: 4,
          street: "duivenkamp",
          city: "maarssen",
          postcode:"3607BK",
          country:"Netherlands",
          userId:2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          house_number: 862,
          street: "duivenkamp",
          city: "maarssen",
          postcode:"3607BK",
          country:"Netherlands",
          userId:3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          house_number: 520,
          street: "zebraspoor",
          city: "maarssen",
          postcode:"3605GX",
          country:"Netherlands",
          userId:4,
          createdAt: new Date(),
          updatedAt: new Date()
        }

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("addresses", null, {});
  }
};