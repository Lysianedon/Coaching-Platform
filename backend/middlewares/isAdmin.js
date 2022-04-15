//----------------- MODEL ---------------------//
const User = require("../models/userModel.js");
//---------------- MIDDLEWARE ----------------//
const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.params.dashbord.admin);

  if (user.isAdmin) {
    next();
  } else {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = isAdmin;
