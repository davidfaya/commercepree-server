const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
console.log(dbConfig.DB)
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  port: dbConfig.PORT,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);

db.product = require("./product.model.js")(sequelize, Sequelize);
db.category = require("./category.model.js")(sequelize, Sequelize);
db.variant = require("./variant.model.js")(sequelize, Sequelize);
db.product_option = require("./option.model.js")(sequelize, Sequelize);
db.product_option_value = require("./option.value.model.js")(sequelize, Sequelize);


db.product.belongsToMany(db.category, {
  through: "productCategory",
  as: "categories",
  foreignKey: "categoryId",
});

db.category.belongsToMany(db.product, {
  through: "productCategory",
  as: "products",
  foreignKey: "productId",
});

db.product.hasMany(db.variant, {as:"variants"})
db.product.hasMany(db.product_option, {as:"options"})
db.product_option.hasMany(db.product_option_value, {as:"values"})

module.exports = db;
