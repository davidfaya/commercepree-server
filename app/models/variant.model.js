module.exports = (sequelize, Sequelize) => {
    const ProductVariant = sequelize.define("product_variant", {
      cost: {
        type: Sequelize.DECIMAL(10, 2)
      },
      depth: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      shipping_cost: {
        type: Sequelize.DECIMAL(10, 2)
      },
      height: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      inventory_level: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DECIMAL(10, 2)
      },
      sale_price: {
        type: Sequelize.DECIMAL(10, 2)
      },
      tax_code: {
        type: Sequelize.STRING
      },
      sku: {
        type: Sequelize.STRING
      },
      sort_order: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.DECIMAL(10, 2)
      },
      width: {
        type: Sequelize.DECIMAL(10, 2)
      },
    });

  
    return ProductVariant;
  };
  