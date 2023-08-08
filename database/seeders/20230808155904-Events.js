'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [{
      name: 'Q&A Session',
      date: '2023-08-08T17:00:00',
      description: 'Q&A with Eric Fithian!',
      zoomLink: 'zoom.com/qighac',
    },
    {
      name: 'Q&A Session',
      date: '2023-08-13T17:00:00',
      description: 'Q&A with Eric Fithian!',
      zoomLink: 'zoom.com/qighac'
    }
  ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {});
  }
};
