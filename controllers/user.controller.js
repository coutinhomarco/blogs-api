const jwtGenerate = require('../helpers/jwtGenerate');
const { User } = require('../models');

const create = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    const jwtToken = jwtGenerate({ id: newUser.id });
    return res.status(201).json({ token: jwtToken });
  } catch (error) {
    next(error);
  }
};

module.exports = { create };