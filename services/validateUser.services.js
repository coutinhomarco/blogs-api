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
  const { email } = req.body;
  const alreadyExists = await User.findOne({ where: { email } });
  if (alreadyExists) return res.status(409).json({ message: 'User already registered' });
  const regex = /[\w]+@[\w]+.com/i;
  if (!email) return res.status(400).json({ message: '"email" is required' });
  if (!regex.test(email)) return res.status(400).json({ message: '"email" must be a valid email' });
  next();
};

const validatePassword = async (req, _res, next) => {
  const { password } = req.body;
  if (!password) return { code: 400, data: { message: '"password" is required' } };
  if (password.length !== 6) {
    return (
      { code: 400, data: { message: '"password" length must be 6 characters long' } }
    ); 
  }
  next();
};

module.exports = [validateName, validateEmail, validatePassword];