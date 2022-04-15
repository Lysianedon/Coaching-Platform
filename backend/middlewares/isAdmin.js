//---------------- JWT ------------------------//
const jwt = require("jsonwebtoken");
//----------------- MODEL ---------------------//
const User = require("../models/userModel.js");
//----------------- SECRET ------------------//
const secret = process.env.SECRET;

//---------------- MIDDLEWARE ----------------//
const isAdmin = async (req, res, next) => {
  try {
    jwt.verify(req.cookies.jwtCookie, secret);
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const user = await User.findById(data.id);
  const userObject = user.toObject();

  if (userObject.isAdmin) {
    user.last_request = Date.now();
    next();
  } else {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = isAdmin;
