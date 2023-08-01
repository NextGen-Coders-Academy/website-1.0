'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('test', [
      {
        name: 'troy',
      },
      {
        name: 'eric',
      },
      {
        name: 'jess',
      },
      {
        name: 'john',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('test', null, {});
  }
};
