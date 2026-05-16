const mongoose = require("mongoose");
const Cart = require("../models/Cart");

const deleteCartMiddleware = async function (next) {
  try {
    const user = await this.model.findOne(this.getFilter());

    if (user) {
      await Cart.deleteMany({ userEmail: user.email });

      console.log("Cart deleted for:", user.email);
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = deleteCartMiddleware;