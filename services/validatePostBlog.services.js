const { BlogPost, Category } = require('../models');

const validateCategories = async (categoryIds) => {
  const CategoriesRegistered = await Category.findAll();
  const registeredIds = await CategoriesRegistered.map(({ id }) => id);
  return categoryIds.every((ids) => registeredIds.includes(ids));
};

const postValidations = ({ title, content, categoryIds }) => {
  if (!title) return { code: 400, message: '"title" is required' };
  if (!content) return { code: 400, message: '"content" is required' };
  if (!categoryIds) return { code: 400, message: '"categoryIds" is required' };
};

const validatePost = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.tokenData;
    const published = new Date();
    const updated = published;
    const value = postValidations(req.body);
    const allCategoriesExists = await validateCategories(categoryIds);
    if (value) return res.status(value.code).json({ message: value.message });
    if (!allCategoriesExists) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }
    const post = await BlogPost.create({ title, content, userId: id, updated, published });
    req.post = post;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { validatePost };