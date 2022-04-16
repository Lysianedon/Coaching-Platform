//---------------------- JWT ----------------//
const jwt = require("jsonwebtoken");
//----------------- SECRET ------------------//
const secret = process.env.SECRET;
//----------------- MODEL ---------------------//
const User = require("../models/userModel.js");

// AUTHENTICATION/AUTHORIZATION - FOR ADMIN ONLY

async function isAdmin(req, res, next) {
  //Find user :
  let user;
  const token = req.cookies.jwt;
  const data = jwt.verify(token, secret);

  try {
    user = await User.findById(data.id);
    req.userId = data.id;
    req.userRole = data.role;
    req.verifiedUserInfos = data;
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "A problem happened." });
  }

  if (user.isAdmin === false) {
    return res.status(401).json({
      error: "Access denied. You must be an admin to access this page.",
    });
  }

  next();
}

module.exports = isAdmin;
