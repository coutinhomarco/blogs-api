const { User } = require('../models');

const validateName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json(
      { message: '"displayName" length must be at least 8 characters long' },
);
  }
  next();
};

const validateEmail = async (req, res, next) => {
  const regex = /[\w]+@[\w]+.com/i;
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: '"email" is required' });
  const alreadyExists = await User.findOne({ where: { email } });
  if (alreadyExists) return res.status(409).json({ message: 'User already registered' });
  if (!regex.test(email)) return res.status(400).json({ message: '"email" must be a valid email' });
  next();
};

const validatePassword = async (req, res, next) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ message: '"password" is required' });
  if (password.length !== 6) {
    return (res.status(400).json({ message: '"password" length must be 6 characters long' }));
  }
  next();
};

module.exports = [validatePassword, validateName, validateEmail];