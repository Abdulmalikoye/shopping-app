const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const port = 3000;

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Mongodb connected");
});
app.listen(port, () => {
  console.log("The server is running on port 3000");
});
