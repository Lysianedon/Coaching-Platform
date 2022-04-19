//-------------- EXPRESS ---------------//
const express = require("express");
const router = express.Router();
//----------------- CORS ---------------//
const cors = require("cors");
//--------------- AUTH ----------------//
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//------------- SECRET --------------//
const secret = process.env.SECRET;

//------------ MODEL -----------------//
const User = require("../models/userModel");

//------------- ROUTE ---------------//
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  //* 1- Check user's email
  const user = await User.findOne({ email });
  console.log("user::: ", user);
  if (!user) {
    return res.status(401).json({
      message: "Incorrect email or password",
      error: true,
    });
  }
  //* 2 - Check user's password and compare it to hash in database

  const isPasswordValid = await bcrypt.compare(password, user.password);
  console.log("isPasswordvalid::: ",isPasswordValid);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Incorrect email or password",
      error: true,
    });
  }

  //* 3 - Authentification
  // *! 3.1 - Generate a token with jsonwebtoken
  const token = jwt.sign({ id: user._id }, secret, { expiresIn: "60m" }); // test 60 min
  console.log("token:::", token);
  // *! 3.2 - Store token in a cookie called "jwt" and send it to client in response with a message of successful login
  return res
    .cookie("jwt", token, { httpOnly: false, secure: false })
    .status(200)
    .json({ success: "You logged in successfully" });
});

module.exports = router;
