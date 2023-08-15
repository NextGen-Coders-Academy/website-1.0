'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [{
      name: 'Unit 1: Intro to Programming',
      description: 'Covers the basics of programming concepts, algorithms, and data structures using JavaScript',
      startDate: '2023-11-13',
      endDate: '2023-12-15',
      hours: 120,
      isFullTime: true,
      courseType: 'Online'
    }, {
      name: 'Unit 2: Full stack MEN',
      description: 'Embark on a comprehensive journey through modern software development with the Men Stack Course. Learn to harness the power of MongoDB, Express.js, and Node.js to create dynamic, efficient, and scalable web applications from the ground up.',
      startDate: '2023-12-18',
      endDate: '2024-01-19',
      hours: 120,
      isFullTime: true,
      courseType: 'Online'
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {})
  }
};
