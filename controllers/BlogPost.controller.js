const createBlogPost = async (req, res, next) => {
  try {
    const { post } = req;
    return res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};
module.exports = { createBlogPost };