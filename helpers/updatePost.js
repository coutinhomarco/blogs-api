module.exports = (body) => {
  const { title, content } = body;
  if (body.categoryIds) return { code: 400, data: { message: 'Categories cannot be edited' } };
  if (!title) return { code: 400, data: { message: '"title" is required' } };
  if (!content) return { code: 400, data: { message: '"content" is required' } };
};