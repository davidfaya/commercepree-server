module.exports = (sequelize, Sequelize) => {
    const ProductOptionValue = sequelize.define("product_option_value", {
      is_default: {
        type: Sequelize.STRING
      },
      label: {
        type: Sequelize.STRING
      },
      sort_order: {
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.STRING
      }
      
    });

  
    return ProductOptionValue;
  };
  