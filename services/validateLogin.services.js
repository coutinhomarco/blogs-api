const { User } = require('../models');

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  if (email === '') return res.status(400).json({ message: '"email" is not allowed to be empty' });
  if (!email) return res.status(400).json({ message: '"email" is required' });
  const alreadyExists = await User.findOne({ where: { email } });
  if (!alreadyExists) return res.status(400).json({ message: 'Invalid fields' });
  next();
};

const validatePassword = async (req, res, next) => {
  const { password } = req.body;
  if (password === '') {
    return (
      res.status(400).json({ message: '"password" is not allowed to be empty' })); 
}
  if (!password) return res.status(400).json({ message: '"password" is required' });
  if (password.length !== 6) {
    return (res.status(400).json({ message: '"password" length must be 6 characters long' }));
  }
  next();
};

module.exports = [validatePassword, validateEmail];