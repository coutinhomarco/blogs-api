const validateGetUser = require('./validateGetUser.services.js');
const validateLogin = require('./validateLogin.services.js');
const { validatePost } = require('./validatePostBlog.services.js');
const validateUser = require('./validateUser.services.js');

module.exports = { 
  validateGetUser,
  validateLogin,
  validatePost,
  validateUser,
};
