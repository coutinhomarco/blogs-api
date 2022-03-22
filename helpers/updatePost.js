module.exports = (body) => {
  const { title, content } = body;
  if (body.categoryIds) return { code: 404, message: 'Categories cannot be edited' };
  if (!title) return { code: 404, message: '"title" is required' };
  if (!content) return { code: 404, message: '"content" is required' };
};