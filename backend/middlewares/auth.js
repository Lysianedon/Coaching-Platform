//---------------------- JWT ----------------//
const jwt = require("jsonwebtoken");
//----------------- SECRET ------------------//
const secret = process.env.REACT_APP_SECRET;

// AUTHENTICATION/AUTHORIZATION - FOR ALL AUTHENTICATED USERS

// * 1 - First, we check if incoming request has our cookie (called "jwt") ; if no cookie, access to controller prohibited
const auth = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(403).json({
      message: "Forbidden access. Login first.",
    });
  }

  // * 2 - If cookie, check token to obtain data and declare new properties in the request object to make it easier for us to access token's data
  try {
    const data = jwt.verify(token, secret);
    // We create a req.userId and assign the value of the id in the token (optional : same for req.userRole)
    req.userId = data.id;
    req.userRole = data.role;
    req.verifiedUserInfo = data;
  } catch (error) {
    return res.status(403).json({
      message: "Forbidden access. Login first.",
    });
  }
  // * 3 - Access given to controller
  next();
};

module.exports = auth;
