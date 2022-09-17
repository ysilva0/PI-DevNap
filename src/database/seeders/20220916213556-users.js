'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('users', [
      {name: 'Lucas', email:'lucas@email.com', password: 'Lucas123'}
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});

  }
};
