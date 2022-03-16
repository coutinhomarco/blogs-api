'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', 
     { 
       id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
       }, 
       userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        },
      }, 
       title: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       content: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      published: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      updated: {
        type: Sequelize.STRING,
        allowNull: true,
      },
     });
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('BlogPosts');

  }
};
