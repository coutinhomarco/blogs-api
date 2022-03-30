module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, notNull: true, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, notNull: true },
  },
  {
    timestamps: false,
    tableName: 'Categories',
    underscored: false,
  });

  return Category;
};