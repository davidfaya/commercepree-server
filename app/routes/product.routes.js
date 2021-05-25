module.exports = app => {
    const products = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Products
    router.post("/", products.create);
  
    // Retrieve all Products
    router.get("/", products.findAll);
  
    // Retrieve a single Products with id
    router.get("/:id", products.findOne);
  
    // Update a Products with id
    router.put("/:id", products.update);
  
    // Delete a Products with id
    router.delete("/:id", products.delete);
  
    
    app.use('/api/products', router);
  };
  