const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
  },

  productId: Number,

  name: String,

  price: Number,

  image: String,

  quantity: {
    type: Number,
    default: 1,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;