const { User } = require('../models');

const getUser = async (req, res, next) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = getUser;