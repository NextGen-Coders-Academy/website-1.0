'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students', [{
      firstName: 'test',
      lastName: 'test',
      email: 'test@test.com',
      location: 'Seattle, WA',
      bio: 'test test test'
    },{
      firstName: 'test2',
      lastName: 'test2',
      email: 'test2@test.com',
      location: 'Boston, MA',
      bio: 'test2 test2 test2'
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {})
  }
};
