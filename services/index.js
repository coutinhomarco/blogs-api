const { validateGetOne } = require('./validateGet.services.js');
const validateLogin = require('./validateLogin.services.js');
const validateUser = require('./validateUser.services.js');

module.exports = { 
  validateGetOne,
  validateLogin,
  validateUser,
};
