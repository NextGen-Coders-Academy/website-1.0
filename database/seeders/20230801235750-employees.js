'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('employees', [{
      firstName: 'Troy',
      lastName: 'Swayzee',
      title: 'Software Engineer / Instructor',
      bio: 'troy troy troy troy troy',
      startDate: '2023-08-01',
      endDate: null
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('employees', null, {});
  }
};
