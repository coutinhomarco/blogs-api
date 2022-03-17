const { User } = require('../models');

const validateGetOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { validateGetOne };