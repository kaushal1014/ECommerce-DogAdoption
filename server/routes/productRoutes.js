const express = require('express');
const router = express.Router();

// Import controller functions
const { getAllProducts, addProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const Product = require('../models/Products'); // Assuming your Product model is here

// Define routes
router.get('/', getAllProducts); // Get all products
router.post('/', addProduct); // Add a new product
router.put('/:id', updateProduct); // Update a product by ID
router.delete('/:id', deleteProduct); // Delete a product by ID

// Get a specific product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Find product by ID
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product); // Return the product as JSON
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

module.exports = router;
