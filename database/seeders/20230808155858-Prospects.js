'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('prospects', [{
      firstName: 'test',
      lastName: 'test',
      email: 'test@test.com',
      location: 'Seattle, WA',
      bio: 'testing',
      status: 'prospect',
    },
    {
      firstName: 'test2',
      lastName: 'test2',
      email: 'test2@test.com',
      location: 'Manhattan, NY',
      bio: 'testing 2',
      status: 'prospect',
    }
  ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('prospects', null, {});
  }
};
