const { Category } = require('../models');

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    const teste = await Category.create({ name });
    return res.status(201).json(teste);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createCategory,
};