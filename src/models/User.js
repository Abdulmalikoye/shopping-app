const mongoose = require("mongoose");

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
});
const User = mongoose.model("User", userSchema);

module.exports = User;
