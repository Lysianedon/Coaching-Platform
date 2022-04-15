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

//  GOOGLE
// const { google } = require('googleapis');
// const {GOOGLE_CALENDAR} = process.env.GOOGLE_CALENDAR;
// const parsedCredentialsGoogleCalendar = JSON.parse(GOOGLE_CALENDAR);
//----------- MODELS -----------------//
const User = require("../models/userModel");
const Task = require("../models/taskModel");

//--------------- ROUTES -------------//

//GET THE USER'S INFOS (TO DISPLAY THEM IN THE DASHBOARD):
router.get("/user", async (req, res) => {

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
    adminID = "62587d8a2451d60a3bc4a53b";

  //Get list of tasks with admin's ID :
  try {
    adminList = await Task.find({userId :adminID});

  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "A problem happened."});
  }
  return res.json({ adminList });
});

//DELETE A TASK IN ADMIN'S TO DO LIST:
router.delete('/admin/list', async (req,res)=> {
    //The content must be unique, otherwise an error msg is displayed : "Task already exists"
    let deletedTask = req.body;

    try {
        deletedTask = await Task.findOneAndDelete({content : deletedTask.content});
      
    } catch (error) {
        console.log(error);
        return res.status(400).json({message : "A problem happened."})
    }
    return res.json({deletedTask})
})

//ADD A NEW TASK INTO ADMIN'S TO DO LIST:
router.post('/admin/list', async (req,res)=> {

    let newTask = req.body, addedTask;
    const adminID = "62587d8a2451d60a3bc4a53b";

    try {
        newTask = await Task.create(newTask);
        addedTask = await Task.findOneAndUpdate({content : newTask.content}, {userId : adminID }, {new : true});

    } catch (error) {
        console.log(error);
        return res.status(400).json({message : "A problem happened."})
    }
    return res.status(201).json({addedTask});
})

//MODIFY A TASK IN ADMIN'S TO DO LIST :
router.put('/admin/list', async (req,res) => {

    let taskToModify = req.body, modifiedTask;

    try {
        modifiedTask = await Task.findOneAndUpdate({content : taskToModify.initialContent}, {content : taskToModify.updatedContent }, {new : true});
    } catch (error) {
        console.log(error);
        return res.status(400).json({message : "A problem happened."})
    }
    return res.status(201).json({modifiedTask});
})

//GET THE USER'S TO DO LIST: 
router.get('/:user/list', (req,res) => {

    const userID = req.verifiedUserInfos.id;
    let usersList;

    try {
        usersList = await User.findById(userID)
    } catch (error) {
        console.log(error);
        return res.status(400).json({message : "A problem happened."})
    }

})

// --------------------------------- TEST GOOGLE CALENDAR ---------------------------------------------

// const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
// const GOOGLE_PRIVATE_KEY=parsedCredentialsGoogleCalendar.private_key_id
// const GOOGLE_CLIENT_EMAIL = "paulineagenda@civil-icon-347323.iam.gserviceaccount.com"
// const GOOGLE_PROJECT_NUMBER = "189087728637"
// const GOOGLE_CALENDAR_ID = "don.lysiane@gmail.com"

// router.get('/', (req, res) => {
//   const jwtClient = new google.auth.JWT(
//     GOOGLE_CLIENT_EMAIL,
//     null,
//     GOOGLE_PRIVATE_KEY,
//     SCOPES
//   );

//   const calendar = google.calendar({
//     version: 'v3',
//     project: GOOGLE_PROJECT_NUMBER,
//     auth: jwtClient
//   });

//   calendar.events.list({
//     calendarId: GOOGLE_CALENDAR_ID,
//     timeMin: (new Date()).toISOString(),
//     maxResults: 10,
//     singleEvents: true,
//     orderBy: 'startTime',
//   }, (error, result) => {
//     if (error) {
//       res.send(JSON.stringify({ error: error }));
//     } else {
//       if (result.data.items.length) {
//         res.send(JSON.stringify({ events: result.data.items }));
//       } else {
//         res.send(JSON.stringify({ message: 'No upcoming events found.' }));
//       }
//     }
//   });
// });

// --------------------------------- FIN TEST GOOGLE CALENDAR -----------------------------------------


//Exporting the module

module.exports = router;
