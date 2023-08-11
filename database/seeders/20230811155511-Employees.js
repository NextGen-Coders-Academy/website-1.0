'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('employees', [{
      firstName: 'Eric',
      lastName: 'Fithian',
      title: 'Bossman',
      bio: 'Eric Fithian Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum sapiente officiis modi at sunt excepturi expedita sint?',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1jnpk9r7eRX5QO0KCXz48ZCYDELfATU9XBKgIMsPc9A&s',
      startDate: '2023-08-01',
      endDate: null
    }, {
      firstName: 'Troy',
      lastName: 'Swayzee',
      title: 'Jack of All Trades, Master of None',
      bio: 'Troy Swayzee is a highly skilled software engineer and dedicated software engineering instructor known for his exceptional expertise and passion for technology.',
      image: 'https://media.licdn.com/dms/image/C5603AQEj-xKg4Hushg/profile-displayphoto-shrink_800_800/0/1563596272130?e=2147483647&v=beta&t=_tKl5gcB8kb0ioId6vHhDVrPTijl9jTEcKzqmZ8Dkhk',
      startDate: '2023-08-01',
      endDate: null
    },
  ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('employees', null, {});
  }
};
