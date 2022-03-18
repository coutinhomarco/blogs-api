module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {},
  {
    timestamps: false,
    tableName: 'PostsCategories',
    underscored: false,
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.BlogPost,
      { foreignKey: 'postId', otherKey: 'categoryId', through: PostCategory, as: 'posts' });
    models.Category.belongsToMany(models.Category,
      { foreignKey: 'categoryId', otherKey: 'postId', through: PostCategory, as: 'categoryIds' });
  };

  return PostCategory;
};