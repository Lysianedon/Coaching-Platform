//-------------- EXPRESS ---------------//
const express = require("express");
const router = express.Router();
//--------------- AUTH ----------------//
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//----------- MIDDLEWARE --------------//
const auth = require("../middlewares/auth");

//------------- SECRET --------------//
const secret = process.env.SECRET;

//------------ MODEL -----------------//
const User = require("../models/userModel");

//------------- ROUTE ---------------//
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  //* 1- Check user's email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({
      message: "Incorrect email or password",
    });
  }
  //* 2 - Check user's password and compare it to hash in database

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Incorrect email or password",
    });
  }

  //* 3 - Authentification
  // *! 3.1 - Generate a token with jsonwebtoken
  const token = jwt.sign({ id: user._id }, secret, { expiresIn: "30m" }); // test 3 min
  // *! 3.2 - Store token in a cookie called "jwt" and send it to client in response with a message of successful login
    return res.cookie("jwt", token, { httpOnly: true, secure: false }).status(200).json({ message: "You logged in successfully" })
});
  


module.exports = router;




// //-------------- EXPRESS ---------------//
// const express = require("express");
// const router = express.Router();
// //--------------- AUTH ----------------//
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// //------------- SECRET --------------//
// const secret = process.env.SECRET;

// //------------ MODEL -----------------//
// const User = require("../models/userModel");

// //------------- ROUTE ---------------//
// router.post("/", async (req, res) => {
//   const { email, password } = req.body;

//   //* 1- Check user's email
//   const user = await User.findOne({ email });
//   if (!user) {
//     return res.status(401).json({
//       message: "Incorrect email or password",
//     });
//   }
//   //* 2 - Check user's password and compare it to hash in database

//   const isPasswordValid = await bcrypt.compare(password, user.password);

//   if (!isPasswordValid) {
//     return res.status(401).json({
//       message: "Incorrect email or password",
//     });
//   }

//   //* 3 - Authentification
//   // *! 3.1 - Generate a token with jsonwebtoken
//   const token = jwt.sign({ id: user._id }, secret, { expiresIn: "30m" }); // 30 min
//   // *! 3.2 - Store token in a cookie called "jwt" and send it to client in response with a message of successful login
//   return res
//     .cookie("jwt", token, { httpOnly: true, secure: false })
//     .status(200)
//     .json({ message: "You logged in successfully" });
// });

// module.exports = router;
