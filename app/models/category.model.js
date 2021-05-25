module.exports = (sequelize, Sequelize) => {
    const ProductCategory= sequelize.define("product_category", {
      description: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      visible: {
        type: Sequelize.STRING
      },
      parent_id: {
        type: Sequelize.INTEGER
      }
      
    });

  
    return ProductCategory;
  };
  