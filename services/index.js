const validateGetUser = require('./validateGetUser.services.js');
const validateLogin = require('./validateLogin.services.js');
const validatePostBlog = require('./validatePostBlog.services.js');
const validateUser = require('./validateUser.services.js');
const { validatePost } = require('./validatePostBlog.services');

module.exports = { 
  validateGetUser,
  validateLogin,
  validatePostBlog,
  validateUser,
  validatePost, 
};
