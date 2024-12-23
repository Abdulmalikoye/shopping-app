const express = require("express");

const userController = require("../controller/User");
const app = require("../index");

const router = express.Router();
router.post("/users", userController.createUser);

module.exports = router;
