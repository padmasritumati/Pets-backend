'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "services",
      [
        {
          boarding:true,
          houseSitting:false,
          dropInVisits:false,
          doggyDayCare:false,
          dogWalking:true,
          boardingRate:20,
          houseSittingRate:20,
          dropInVisitsRate:10,
          doggyDayCareRate:17,
          dogWalkingRate:10,
          small:true,
          medium:true,
          large:false,
          gaint:false,
          cat:false,
          userId:1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          boarding:false,
          houseSitting:true,
          dropInVisits:true,
          doggyDayCare:true,
          dogWalking:false,
          boardingRate:20,
          houseSittingRate:20,
          dropInVisitsRate:10,
          doggyDayCareRate:17,
          dogWalkingRate:10,
          small:false,
          medium:false,
          large:true,
          gaint:true,
          cat:true,
          userId:2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          boarding:false,
          houseSitting:true,
          dropInVisits:true,
          doggyDayCare:true,
          dogWalking:false,
          boardingRate:20,
          houseSittingRate:20,
          dropInVisitsRate:10,
          doggyDayCareRate:17,
          dogWalkingRate:10,
          small:false,
          medium:false,
          large:true,
          gaint:true,
          cat:true,
          userId:3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          boarding:true,
          houseSitting:true,
          dropInVisits:true,
          doggyDayCare:true,
          dogWalking:true,
          boardingRate:20,
          houseSittingRate:20,
          dropInVisitsRate:10,
          doggyDayCareRate:17,
          dogWalkingRate:10,
          small:true,
          medium:true,
          large:true,
          gaint:true,
          cat:true,
          userId:4,
          createdAt: new Date(),
          updatedAt: new Date()
        }

      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("services", null, {});
  }
};