// models/Contact.js
const mongoose = require('mongoose');

// Define the schema for contact messages
const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: /^\S+@\S+\.\S+$/, // Basic email validation
  },
  phone: {
    type: String,
    trim: true,
    match: /^\d{10,15}$/, // Optional phone validation (adjust as needed)
  },
  subject: {
    type: String,
    required: true,
    enum: ['adoption', 'volunteer', 'support', 'donation'], // Fixed list of valid subjects
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
