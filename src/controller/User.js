const bcrypt = require("bcrypt");
const User = require("../models/User");
const saltRounds = 10;

let createUser = async (req, res) => {
  try {
    let { name, email, password, address, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      address,
      phoneNumber,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { createUser };
