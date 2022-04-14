//-------------- EXPRESS ---------------//
const express = require ("express");
const router = express.Router()

//------------- AUTHENTIFICATION -------//
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")
//------------ DOTENV ----------------//
dotenv.config({path: "../config.env"})

//------------ SECRET ----------------//
const secret = process.env.SECRET
//----------- MIDDLEWARES ------------//

//--------------- ROUTES -------------//

module.exports = router;