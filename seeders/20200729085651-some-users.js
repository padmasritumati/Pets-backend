"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          full_name: "Lucy",
          email: "lucytest2020@gmail.com",
          password: bcrypt.hashSync("2608", SALT_ROUNDS),
          phone: "9440059968",
          image:
            "https://res.cloudinary.com/dsuvhhlxm/image/upload/v1597404570/pet_image/girl2_ei9nax.png",
          petOwner: false,
          petSitter: true,
          address:"Maarssen,Zebraspoor,420",
          latitude:52.141720,
          longitude:5.018690,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "PadmaSri",
          email: "tumatipadmasri98@gmail.com",
          password: bcrypt.hashSync("2608", SALT_ROUNDS),
          phone: "685805082",
          image:
            "https://res.cloudinary.com/dsuvhhlxm/image/upload/v1597404560/pet_image/girl1_yziyq3.jpg",
          petOwner: true,
          petSitter: false,
          address:"Maarssen,Zebraspoor,422",
          latitude:52.141720,
          longitude:5.018690,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Daniel ",
          email: "daniel@gmai.com",
          password: bcrypt.hashSync("2608", SALT_ROUNDS),
          phone: "685805082",
          image:
            "https://res.cloudinary.com/dsuvhhlxm/image/upload/v1597404580/pet_image/boy_m4vjt3.webp",
          petOwner: false,
          petSitter: true,
          address:"Maarssen,Zebraspoor,421",
          latitude:52.141720,
          longitude:5.018690,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
