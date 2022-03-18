const { BlogPost, User, Category } = require('../models');

const createBlogPost = async (req, res, next) => {
  try {
    const { post } = req;
    return res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

const getPosts = async (_req, res, next) => {
  try {
    const posts = await BlogPost.findAll(
      { include: [
        { model: User, as: 'user' },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ] },
    );
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = { createBlogPost, getPosts };