const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Import controller functions
const { getAllProducts, addProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const Product = require('../models/Products'); // Assuming your Product model is here

// Set up multer storage and file filter for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder where images will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to avoid file overwriting
  }
});

const fileFilter = (req, file, cb) => {
  // Accept only image files
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only images are allowed!'), false);
  }
};

const upload = multer({ storage, fileFilter }); // Initialize multer with storage and filter

// Serve static files for the images folder (so that uploaded images can be accessed)
router.use('/uploads', express.static(path.join(__dirname, '../uploads')));  // Expose '/uploads' to access uploaded images

// Define routes
router.get('/', getAllProducts); // Get all products

// Add a new product with an image
router.post('/', upload.single('image'), async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    // Ensure the image was uploaded successfully
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded!' });
    }

    // Check if other fields like name and price are provided
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required' });
    }
  
    // Create the new product with the image path (req.file.path)
    const imagePath = req.file ? req.file.path.replace(/\\/g, '/') : null; // Normalize path for cross-platform compatibility

    const newProduct = new Product({
      name:name,
      description:description,
      image: imagePath,
      price:price,
    });

    // Save the new product to the database
    await newProduct.save();
    console.log('New Product:', newProduct);
    res.status(201).json({ message: 'Product added successfully!' });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Error adding product' });
  }
});

// Update an existing product with an image (optional)
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const imagePath = req.file ? req.file.path.replace(/\\/g, '/') : null; // Set the new image URL if an image is uploaded

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        price,
        description,
        image: imagePath, // Update the image URL if a new image is uploaded
      },
      { new: true } // Return the updated product
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated successfully!', product: updatedProduct });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Delete a product by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

// Get a specific product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Find product by ID
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product); // Return the product as JSON
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

module.exports = router;
