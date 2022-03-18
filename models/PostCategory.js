const option = {
  timestamps: false,
  tableName: 'PostsCategories',
  underscored: false,
};
module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {}, option);
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'postId', 
      otherKey: 'categoryId',
      through: PostCategory,
      as: 'categories',
    });
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategory,
      as: 'blogPosts',
    }); 
};
  return PostCategory;
};