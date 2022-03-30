const Auth = require('./Auth.middleware.js');
const errorHandler = require('./errorHandler.middleware.js');

module.exports = { 
  Auth,
  errorHandler,
};
