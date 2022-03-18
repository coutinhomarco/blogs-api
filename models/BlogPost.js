const { DataTypes } = require('sequelize');

const atributes = { 
  id: {
  type: DataTypes.INTEGER,
  allowNull: false,
  primaryKey: true,
  autoIncrement: true,
}, 
userId: {
 type: DataTypes.INTEGER,
 allowNull: false,
 onUpdate: 'CASCADE',
 onDelete: 'CASCADE',
 references: {
   model: 'Users',
   key: 'id',
 },
}, 
title: {
  type: DataTypes.STRING,
  allowNull: false,
},
content: {
 type: DataTypes.STRING,
 allowNull: false,
},
published: {
 type: DataTypes.DATE,
 allowNull: false,
},
updated: {
 type: DataTypes.DATE,
 allowNull: false,
} };

module.exports = (sequelize, _DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    ...atributes,
  },
  {
    timestamps: false,
    tableName: 'BlogPosts',
    underscored: false,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user',
    });
  };
  
  return BlogPost;
};