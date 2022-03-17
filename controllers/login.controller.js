const jwtGenerate = require('../helpers/jwtGenerate');
const { User } = require('../models');

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

module.exports = login;