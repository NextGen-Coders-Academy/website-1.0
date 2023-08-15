'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('enrollments', [{
      courseId: 1,
      employeeId: 1,
      isCurrent: true
    }, {
      courseId: 1,
      studentId: 2,
      enrollmentDate: '2023-11-01',
      isCurrent: true
    }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('enrollments', null, {})
  }
};
