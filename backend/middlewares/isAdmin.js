//------------------- JWT -------------------//
const jwt = require("jsonwebtoken");
//----------------- SECRET ------------------//
const secret = process.env.REACT_APP_SECRET;
//----------------- MODEL ---------------------//
const User = require("../models/userModel.js");

// AUTHENTICATION/AUTHORIZATION - FOR ADMIN ONLY

const isAdmin = async (req, res, next) => {
  // Find user
  let user;
  const token = req.cookies.jwt;
  const data = jwt.verify(token, secret);

  try {
    user = await User.findById(data.id);
    req.userId = data.id;
    req.userRole = data.role;
    req.verifiedUserInfo = data;
  } catch (error) {
    console.log(error);
    console.log("erreur token !!");
    return res.status(400).json({ message: "An error occurred." });
  }

  if (user.isAdmin === false) {
    return res.status(401).json({
      message: "Access denied. You must be an admin to access this page.",
    });
  }

  next();
};

module.exports = isAdmin;
