// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id' });
Product.hasMany(Tag, {
  foreignKey: 'tag_id',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id' });

// ProductTag.belongsToMany(Product, { through: Product, foreignKey: 'product_id', constraints: false });
// ProductTag.belongsToMany(Tag, { through: Tag, foreignKey: 'tag_id', constraints: false });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
