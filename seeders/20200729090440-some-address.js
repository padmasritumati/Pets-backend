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
          latitude:52.141310,
          longitude:5.019130,
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
          latitude:52.132000,
          longitude:5.026900,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          house_number: 862,
          street: "duivenkamp",
          city: "maarssen",
          postcode:"3607BK",
          country:"Netherlands",
          latitude:52.132000,
          longitude:5.026900,
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
          latitude:52.141310,
          longitude:5.019130,
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