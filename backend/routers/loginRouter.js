//-------------- EXPRESS ---------------//
const express = require("express");
const router = express.Router();
//--------------- AUTH ----------------//
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
//-------------- DOTENV ----------------//
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
//------------- SECRET --------------//
const secret = process.env.SECRET;

//--------------- MIDDLEWARE ------------//
router.use(cookieParser());

//------------ MODEL -----------------//
const User = require("../models/userModel");

//------------- ROUTE ---------------//
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  //* 1- Check user's email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({
      message: "ERROR 401 - Incorrect email. Unauthorized access",
    });
  }
  //* 2 - Check user's password and compare it to hash in database

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "ERROR 401 - Incorrect password.Unauthorized access",
    });
  }

  //* 3 - Authentification
  // *! 3.1 - Generate a token with jsonwebtoken
  const token = jwt.sign({ id: user._id }, secret, { expiresIn: "180s" }); // test 3 min
  // *! 3.2 - Store token in a cookie called "jwt" and send it to client in response with a message of successful login
  return res
    .cookie("jwt", token, { httpOnly: true, secure: false })
    .status(200)
    .json({ message: "You logged in successfully" });
});

module.exports = router;
