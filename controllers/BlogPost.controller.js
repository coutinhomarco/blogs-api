const { BlogPost, User, Category } = require('../models');
const updatePostHelper = require('../helpers/updatePost');

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
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ] },
    );
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

const getOnePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await BlogPost.findOne({ where: { id },
      include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] });
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const { id: userId } = req.tokenData;
    const { id } = req.params;
    const helperReturn = updatePostHelper(req.body);
    console.log(helperReturn);
    if (helperReturn) return res.status(helperReturn.code).json(helperReturn.data);
    if (Number(id) !== Number(userId)) {
      return (
        res.status(401).json({ message: 'Unauthorized user' })); 
}
    await BlogPost.update(req.body, { where: { id } });
    const endPointReturn = await BlogPost.findOne({ where: { id },
      include: [{ model: Category, as: 'categories', through: { attributes: [] } }] });
    return res.status(200).json(endPointReturn);
  } catch (error) {
    next(error);
  }
};

module.exports = { createBlogPost, getPosts, getOnePost, updatePost };