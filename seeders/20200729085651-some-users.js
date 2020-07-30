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
          email: "test@.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          phone:"9440059968",
          image:"https://res.cloudinary.com/dsuvhhlxm/image/upload/v1596137242/pet_image/WhatsApp_Image_2020-07-30_at_9.23.15_PM_h9wm9e.jpg",
          petOwner:false,
          petSitter:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          full_name: "test1",
          email: "test1@.com",
          password: bcrypt.hashSync("test1", SALT_ROUNDS),
          phone:"685805082",
          image:"https://res.cloudinary.com/dsuvhhlxm/image/upload/v1596137276/pet_image/WhatsApp_Image_2020-07-30_at_9.23.15_PM_1_jmmpnk.jpg",
          petOwner:false,
          petSitter:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          full_name: "test2",
          email: "test2@.com",
          password: bcrypt.hashSync("test1", SALT_ROUNDS),
          phone:"685805082",
          image:" https://res.cloudinary.com/dsuvhhlxm/image/upload/v1596137287/pet_image/WhatsApp_Image_2020-07-30_at_9.23.15_PM_2_vbepkf.jpg",
          petOwner:true,
          petSitter:false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          full_name: "test3",
          email: "test3@.com",
          password: bcrypt.hashSync("test1", SALT_ROUNDS),
          phone:"685805082",
          image:" https://res.cloudinary.com/dsuvhhlxm/image/upload/v1596137298/pet_image/WhatsApp_Image_2020-07-30_at_9.23.15_PM_3_d5kkx5.jpg",
          petOwner:true,
          petSitter:false,
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