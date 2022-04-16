//---------------------- JWT ----------------//
const jwt = require("jsonwebtoken");
//----------------- SECRET ------------------//
const secret = process.env.SECRET;

// AUTHENTICATION/AUTHORIZATION - FOR ALL AUTHENTICATED USERS

// * 1 - First, we check if incoming request has our cookie (called "jwt") ; if no cookie, access to controller prohibited
const auth = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    res.status(403).json({
      message: "Forbidden access. Login first. 1er if",
    });
  }
  // * 2 - If cookie, check token to obtain data and declare new properties in the request object to make it easier for us to access token's data
  try {
    const data = jwt.verify(token, secret);
    // *! 4 - Create req.userId and assign the value of the id in the token (optional : same for req.userRole)
    req.userId = data.id;
    req.userRole = data.role;
    req.verifiedUserInfos = data;
  } catch (error) {
    return res.status(403).json({
      message: "Forbidden access. Login first. 2e if",
    });
  }
  // *! 5 - Access given to controller
  next();
};

module.exports = auth;
