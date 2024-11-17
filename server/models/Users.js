// Import mongoose
const mongoose = require('mongoose');

// Define the Users schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// Create the Users model
const Users = mongoose.model('Users', userSchema);

// Export the model
module.exports = Users;
