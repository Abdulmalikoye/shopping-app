const mongoose = require("mongoose");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  isVeryFied: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    default: crypto.randomBytes(32).toString("hex"),
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
