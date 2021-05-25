module.exports = (sequelize, Sequelize) => {
    const ProductOption = sequelize.define("product_option", {
      display_name: {
        type: Sequelize.STRING
      },
      sort_order: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      }
      
    });

  
    return ProductOption;
  };
  