const { login, createUser,
  getUsers, getOne } = require('./User.controller.js');
const { createCategory, getCategories } = require('./Categories.controller.js');
const { createBlogPost, getPosts } = require('./BlogPost.controller.js');

module.exports = { 
  login,
  createUser,
  getUsers,
  getOne,
  createCategory,
  getCategories,
  createBlogPost,
  getPosts,
};
