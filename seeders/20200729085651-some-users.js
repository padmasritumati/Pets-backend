"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          full_name: "test",
          email: "test@test.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          phone:"9440059968",
          image:"https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg",
          petOwner:false,
          petSitter:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          full_name: "dummy",
          email: "dummy@dummy.com",
          password: bcrypt.hashSync("dummy", SALT_ROUNDS),
          phone:"685805082",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1_G-3xFgntEcEnlWzDQcANjsPlmlSU92Suw&usqp=CAU",
          petOwner:false,
          petSitter:true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};