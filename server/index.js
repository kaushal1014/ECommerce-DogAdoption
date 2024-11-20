const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const path = require('path');
const multer = require('multer');
const productRoutes = require('./routes/productRoutes');
const Users = require('./models/Users');
const Contact = require("./models/Contact");
const port = process.env.PORT || 4000;

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true,
}));

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/e-commerce")
  .then(() => console.log("Connected to MongoDB successfully."))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

const router = express.Router();


router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
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

    const newContact = new Contact({ firstName, lastName, email, phone, subject, message });

    await newContact.save();

    res.status(201).json({ message: 'Your message has been received. We will get back to you soon!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while saving your message. Please try again.' });
  }
});

app.use("/", router);
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
