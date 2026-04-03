// Load environment variables
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();

// ================= MIDDLEWARES =================
app.use(express.json());
app.use(cors());

// ================= MONGODB CONNECTION =================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("Connection Error:", err));

// ================= USER SCHEMA =================
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.pre("findOneAndDelete", async function (next) {
  try {
    const user = await this.model.findOne(this.getFilter());

    if (user) {
      await mongoose.model("Cart").deleteMany({ userEmail: user.email });
      console.log("Cart deleted for:", user.email);
    }

    next();
  } catch (error) {
    next(error);
  }
});
const User = mongoose.model("User", userSchema);

// ================= CART SCHEMA =================
const cartSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  productId: Number,
  name: String,
  price: Number,
  image: String,
  quantity: { type: Number, default: 1 }
});

const Cart = mongoose.model("Cart", cartSchema);

// ================= REGISTER =================
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    await new User({
      name,
      email,
      password: hashedPassword
    }).save();

    res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// ================= LOGIN =================
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid password" });

    res.status(200).json({
      message: "Login Successful",
      email: user.email
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// ================= ADD TO CART =================
app.post("/cart/add", async (req, res) => {
  try {
    const { userEmail, productId, name, price, image } = req.body;

    const existingItem = await Cart.findOne({ userEmail, productId });

    if (existingItem) {
      existingItem.quantity += 1;
      await existingItem.save();
      return res.json(existingItem);
    }

    const newItem = new Cart({
      userEmail,
      productId,
      name,
      price,
      image
    });

    await newItem.save();
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// ================= GET USER CART =================
app.get("/cart/:email", async (req, res) => {
  try {
    const cartItems = await Cart.find({ userEmail: req.params.email });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// DELETE using query params
// ================= DELETE USER + CART =================
app.delete("/cart", async (req, res) => {
  try { const { _id, userEmail } = req.query; 
  if (!_id || !userEmail) { 
    return res.status(400).json(
      { message: "Missing _id or userEmail" }); } 
      const deleted = await Cart.findOneAndDelete({ 
        userEmail, _id: new mongoose.Types.ObjectId(_id), }); 
      if (!deleted) return res.status(404).json({ message: "Item not found" }); res.json({ message: "Item removed", deleted }); } catch (error) { console.error(error);
      res.status(500).json({ message: "Server Error" }); }
});
// ================= SERVER =================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});