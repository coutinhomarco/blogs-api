module.exports = (body) => {
  const { title, content } = body;
  if (body.categoryIds) return { code: 400, message: 'Categories cannot be edited' };
  if (!title) return { code: 400, message: '"title" is required' };
  if (!content) return { code: 400, message: '"content" is required' };
};