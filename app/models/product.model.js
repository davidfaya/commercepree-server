module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      BIN: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      calculated_price: {
        type: Sequelize.DECIMAL(10, 2)
      },
      calculated_weight: {
        type: Sequelize.DECIMAL(10, 2)
      },
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
      image: {
        type: Sequelize.STRING
      },
      inventory_level: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
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
      type: {
        type: Sequelize.STRING
      },
      upc: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.DECIMAL(10, 2)
      },
      width: {
        type: Sequelize.DECIMAL(10, 2)
      },
    });

  
    return Product;
  };
  