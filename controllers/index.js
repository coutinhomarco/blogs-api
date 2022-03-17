const { login, createUser,
  getUsers, getOne } = require('./User.controller.js');
const { createCategory } = require('./Categories.controller.js');

module.exports = { 
  login,
  createUser,
  getUsers,
  getOne,
  createCategory,
};
