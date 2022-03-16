const { DataTypes } = require('sequelize');

const atributes = { 
  id: {
  type: DataTypes.INTEGER,
  allowNull: false,
  primaryKey: true,
  autoIncrement: true,
  }, 
  displayName: {
  type: DataTypes.STRING,
  allowNull: false,
  },
  email: {
 type: DataTypes.STRING,
 allowNull: false,
 unique: true,
  },
  password: {
 type: DataTypes.STRING,
 allowNull: false,
  },
  image: {
 type: DataTypes.STRING,
 allowNull: true,
} };

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    ...atributes,
  },
  {
    timestamps: false,
    tableName: 'Users',
    underscored: false,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'user' });
  };

  return User;
};