const bcrypt = require("bcrypt");

const dotenv = require("dotenv");
const User = require("../models/User");
const mailService = require("../util/mailService");
const saltRounds = 10;

dotenv.config();

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
    // Function for sending mail
    sendVerificationEmail(newUser);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

let sendVerificationEmail = async (user) => {
  const verificationLink = `http://localhost:3000/user/verifyUser?token=${user.verificationToken}`;
  const mailOptions = {
    from: "Shopping App <oyeyemiabdulmalik@gmail.com>",
    to: user.email,
    subject: "Verify your email address",
    text: `
    Hello, ${user.name},

    Please click on the link below to verfiy your email address:

    ${verificationLink}

    If you did not create an account, please disregard this email.

    Thank you,
    The Shopping App Team`,
  };
  try {
    mailService.transporter.sendMail(mailOptions);
    console.log("Email has been sent succefully");
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createUser };
