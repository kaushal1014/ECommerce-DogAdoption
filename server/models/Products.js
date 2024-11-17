// Import mongoose
const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number },
  date: { type: Date, default: Date.now },
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

// Export the model
module.exports = Product;
