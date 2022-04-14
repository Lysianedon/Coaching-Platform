//-------------- EXPRESS ---------------//
const express = require("express");
const router = express.Router();

//------------- AUTHENTIFICATION -------//
const dotenv = require("dotenv");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");
//------------ DOTENV ----------------//
dotenv.config({ path: "../config.env" });

//------------ SECRET ----------------//
// const secret = process.env.SECRET;
//----------- MIDDLEWARES ------------//

//----------- MODELS -----------------//
const User = require("../models/userModel");
const Task = require("../models/taskModel");

//--------------- ROUTES -------------//

//GET THE USER'S INFOS (TO DISPLAY THEM IN THE DASHBOARD):
router.get("/user", async (req, res) => {
  //Ajouter le req.verifiedUserInfos dans le middleware protect crée par Jess

  //Find user :
  let user;

  try {
    user = await User.findById(req.verifiedUserInfos.id).populate(
      "ressources",
      "appointments"
    );
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "A problem happened." });
  }
  return res.json(user);
});

router.get("/admin/list", async (req, res) => {
  let adminList,
    adminID = "A compléter";

  //Get list of tasks with admin's ID :

  try {
    adminList = await Task.findById(adminID);
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "A problem happened." });
  }

  return res.json({ adminCheclist });
});

module.exports = router;
