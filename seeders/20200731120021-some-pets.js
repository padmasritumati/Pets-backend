"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "pets",
      [
        {
          type: "dog",
          name: "tommy",
          weight: 13,
          breed: "beagle",
          ageInYears: 2,
          ageInMonths: 6,
          sex: "male",
          userId: 2,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTton39cvcbIL-WYlbriIh5KQ_Mx-QYS4_RFA&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "cat",
          name: "tom",
          weight: 4,
          breed: "American Shorthair",
          ageInYears: 2,
          ageInMonths: 6,
          sex: "male",
          userId: 2,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqPGxGUn4-1oMQrG1xwwYKfCdP3IJ2aSZFVQ&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pets", null, {});
  },
};
