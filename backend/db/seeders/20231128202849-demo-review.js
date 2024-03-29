'use strict';

const { Review } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const demoReviews = [
  {
    "userId": 3,
    "spotId": 1,
    "review": "This was an awesome spot!",
    "stars": 5
  },
  {
    "userId": 2,
    "spotId": 2,
    "review": "BEAUTIFUL!! Lorem leo.",
    "stars": 5
  },
  {
    "userId": 1,
    "spotId": 3,
    "review": "Very Nice! Lorem vel.",
    "stars": 5
  },
  {
    "userId": 2,
    "spotId": 4,
    "review": "Was OKAY. Eget.",
    "stars": 3
  },
  {
    "userId": 2,
    "spotId": 1,
    "review": "This was a CLEAN spot!",
    "stars": 4
  }
]
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Review.bulkCreate(demoReviews, { validate: true })
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,
      { [Op.or]: demoReviews }, {});
  }
};
