const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const path = require('path'); // Required for multer storage
const multer = require('multer'); // Required for image upload
const productRoutes = require('./routes/productRoutes');
const Users = require('./models/Users');
const port = process.env.PORT || 4000;
const Contact= require("./models/Contact");

// Middleware setup for CORS and JSON parsing
app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend to communicate
  methods: ['GET', 'POST'],
  credentials: true, // If you need cookies or sessions
}));



app.use(express.json()); // Parse incoming JSON request bodies
//app.use('/', express.static('uploads'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
  // Check if this points to the correct folder

// Set up multer storage and file filter for image upload
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const fileFilter = (req, file, cb) => {
  // Accept only image files
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only images are allowed!'), false);
  }
};

const upload = multer({ storage, fileFilter }); // Initialize multer with storage and filter

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/e-commerce")
  .then(() => console.log("Connected to MongoDB successfully."))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Define routes
const router = express.Router();

// Basic test routes
router.get("/", async (req, res) => {
  console.log(path.join(__dirname, 'uploads')); 
  return res.send("Hi");
});

router.get("/signup", async (req, res) => {
  return res.send("Hello");
});

// Signup Route
router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Validate input
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  try {
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

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

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful!" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


router.post('/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, subject, message } = req.body;

    // Create a new contact message
    const newContact = new Contact({ firstName, lastName, email, phone, subject, message });

    // Save to the database
    await newContact.save();

    res.status(201).json({ message: 'Your message has been received. We will get back to you soon!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while saving your message. Please try again.' });
  }
});


// Register the router for the API routes
app.use("/", router);

// Product routes with image upload
app.use('/api/products', productRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
