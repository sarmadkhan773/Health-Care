require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const User = require("./models/User");
const Cart = require("./models/Cart");

const deleteCartMiddleware = require("./middleware/deleteCartMiddleware");

const app = express();

// ================= MIDDLEWARE =================
app.use(express.json());
app.use(cors());

// ================= MONGODB =================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log(err));

// ================= APPLY MIDDLEWARE =================
User.schema.pre("findOneAndDelete", deleteCartMiddleware);

// ================= REGISTER =================
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "User Registered Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// ================= LOGIN =================
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    res.status(200).json({
      message: "Login Successful",
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// ================= ADD TO CART =================
app.post("/cart/add", async (req, res) => {
  try {
    const {
      userEmail,
      productId,
      name,
      price,
      image,
    } = req.body;

    const existingItem = await Cart.findOne({
      userEmail,
      productId,
    });

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
      image,
    });

    await newItem.save();

    res.json(newItem);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// ================= GET CART =================
app.get("/cart/:email", async (req, res) => {
  try {
    const cartItems = await Cart.find({
      userEmail: req.params.email,
    });

    res.json(cartItems);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// ================= DELETE CART ITEM =================
app.delete("/cart", async (req, res) => {
  try {
    const { _id, userEmail } = req.query;

    if (!_id || !userEmail) {
      return res.status(400).json({
        message: "Missing _id or userEmail",
      });
    }

    const deleted = await Cart.findOneAndDelete({
      userEmail,
      _id: new mongoose.Types.ObjectId(_id),
    });

    if (!deleted) {
      return res.status(404).json({
        message: "Item not found",
      });
    }

    res.json({
      message: "Item removed",
      deleted,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

// ================= SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});