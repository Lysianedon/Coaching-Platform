//---------------- EXPRESS ------------------//
const express = require("express");
const router = express.Router();
const auth = require('../middlewares/auth');
//----------------- COOKIES -----------------//
const cookieParser = require("cookie-parser");

//-------------- MIDDLEWARES -----------------//
router.use(cookieParser());

//---------------- ROUTE ---------------------//
router.get("/", (_req, res) => {
  return res
    .clearCookie("jwt")
    .status(200)
    .json({
      message: "You have successfully logged out!",
    })
});

module.exports = router;
