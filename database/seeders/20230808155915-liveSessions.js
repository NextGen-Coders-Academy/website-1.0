'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('live_sessions', [{
      prospectId: 2,
      eventId: 1,
      isPresent: false
    }, {
      prospectId: 1,
      eventId: 1,
      isPresent: false
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('live_sessions', null, {});
  }
};
