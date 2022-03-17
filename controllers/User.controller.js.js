const jwtGenerate = require('../helpers/jwtGenerate');
const { User } = require('../models');

const createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    const jwtToken = jwtGenerate({ id: newUser.id, name: newUser.name, email: newUser.email });
    return res.status(201).json({ token: jwtToken });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    const jwtToken = jwtGenerate({ id: user.id, name: user.name, email: user.email });
    return res.status(200).json({ token: jwtToken });
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser, getUser, login };