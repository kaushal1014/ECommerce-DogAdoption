const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');


const Product = require('../models/Products');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only images are allowed!'), false);
  }
};

const upload = multer({ storage, fileFilter });


router.use('/uploads', express.static(path.join(__dirname, '../uploads'))); 

// Define routes
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Add a new product with an image
router.post('/', upload.single('image'), async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded!' });
    }

    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required' });
    }
  
    // Create the new product with the image path (req.file.path)
    const imagePath = req.file ? req.file.path.replace(/\\/g, '/') : null;

    const newProduct = new Product({
      name:name,
      description:description,
      image: imagePath,
      price:price,
    });

    await newProduct.save();
    console.log('New Product:', newProduct);
    res.status(201).json({ message: 'Product added successfully!' });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Error adding product' });
  }
});

// Update an existing product with an image
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const imagePath = req.file ? req.file.path.replace(/\\/g, '/') : null; 

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        price,
        description,
        image: imagePath, 
      },
      { new: true }
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
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

module.exports = router;
