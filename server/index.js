const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const productRoutes = require('./routes/productRoutes');
const port = process.env.PORT || 4000;






// Create the Users model
const Users = require('./models/Users');

const router = express.Router();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend to communicate
  methods: ['GET', 'POST'],
  credentials: true, // If you need cookies or sessions
}));

// Middleware to parse JSON bodies
app.use(express.json()); // <-- This is necessary to parse the incoming JSON request body

// Database Connection with MongoDB
mongoose
  .connect("mongodb://localhost:27017/e-commerce")
  .then(() => console.log("Connected to MongoDB successfully."))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Define Routes
router.get("/", async (req, res) => {
  return res.send("Hi");
});

router.get("/signup", async (req, res) => {
  return res.send("Hello");
});

// Signup Route
router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(req.body); // Log the body to check if it's being received properly

  // Check if all required fields are provided
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Check if the email is in a valid format (optional)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  try {
    // Check if the user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the user
    const newUser = new Users({
      name: `${firstName} ${lastName}`,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body); // Log the body to check if it's being received properly

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Find the user by email
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Compare the hashed password with the provided password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Send a success response (you can add a token here if you want)
    res.status(200).json({ message: "Login successful!" });

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});




// Register the Router
app.use("/", router);
app.use('/api/products', productRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
