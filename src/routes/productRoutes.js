const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require('../../server/controllers/productController');


// Route to create a product
router.post('/', createProduct);

// Route to get all products
router.get('/', getProducts);

// Route to update a product by ID
router.put('/:id', updateProduct);

// Route to delete a product by ID
router.delete('/:id', deleteProduct);

module.exports = router;
