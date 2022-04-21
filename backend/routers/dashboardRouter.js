//-------------- EXPRESS ---------------//
const express = require("express");
const router = express.Router();
//------------ LIBRARIES ------------ //
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
upload = multer({ dest: `public/uploads/` });

//--------------- MIDDLEWARES ------------//
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");
const {
  validateTaskJoi,
  validateUserJoi,
} = require("../middlewares/joiValidation");
//---------------- MODELS -----------------//
const User = require("../models/userModel");
const Task = require("../models/taskModel");
const Ressources = require("../models/ressourcesModel");
// -------SET UP MULTER --------------//
const Image = require("../models/imageModel");

//--------------------------------------- ROUTES -------------------------------------
//------------------------------------------------------------------------------------

//*************** USER INFOS ******************//

// GET USER'S INFO (TO DISPLAY THEM IN THE DASHBOARD):
router.get("/user", auth, async (req, res) => {
  // Find user :
  let user;

  try {
    user = await User.findById(req.userId).populate(
      // "ressources",
      "tasks"
    );
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "An error occurred." });
  }
  return res.json({ user });
});

// GET USER'S TO DO LIST:
router.get("/user/list", auth, async (req, res) => {
  const userId = req.userId;
  let usersList;

  try {
    usersList = await Task.find({ userId });
  } catch (error) {
    // console.log(error);
    return res.status(400).json({ message: "An error occurred." });
  }
  return res.json({ usersList });
});

// DELETE A TASK FROM USER'S TO DO LIST:
router.delete("/user/list", auth, async (req, res) => {
  const userId = req.userId;
  const taskToDelete = req.body.content;
  let deletedTask;
  console.log(taskToDelete);
  if (!taskToDelete) {
    return res.status(404).json({error : "No task found"});
  }

  try {
    deletedTask = await Task.findOneAndDelete(
      { content: taskToDelete },
      { userId }
    );
  } catch (error) {
    // console.log(error);
    return res.status(400).json({ message: "An error occurred." });
  }
  return res.json({ deletedTask });
});

// CREATE A TASK IN USER'S TO DO LIST
router.post("/user/list", auth, validateTaskJoi, async (req, res) => {
  let newTask = req.body,
    addedTask,
    updatedUser;
  const userId = req.userId;
  const { content } = req.body;
  console.log(content);
  newTask = {
    userId,
    content,
    accomplished : false
  };

  try {
    addedTask = await Task.create(newTask);
    addedTask = await Task.findById(addedTask._id);
    updatedUser = await User.findByIdAndUpdate(userId, {
      $push: {
        tasks: addedTask._id,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "An error occurred." });
  }
  return res.json({ addedTask });
});

// MODIFY A TASK IN USER'S TO DO LIST :
router.put("/user/list", auth, async (req, res) => {
  let taskToModify = req.body,
    modifiedTask;
  const userId = req.userId;

  try {
    modifiedTask = await Task.findOneAndUpdate(
      { content: taskToModify.initialContent, userId },
      { content: taskToModify.updatedContent },
      { new: true }
    );

    if (modifiedTask === null) {
      return res.status(404).json({ message: "Task not found." });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "An error occurred." });
  }
  return res.status(201).json({ modifiedTask });
});

// ------------ADMIN'S REQUESTS ON COACHEES ---------------------

//* GET LIST OF ALL USERS
router.get("/admin/users", auth, isAdmin, async (_req, res) => {
  let users;

  try {
    users = await User.find();
  } catch (error) {
    return res.status(400).json({ message: "An error occurred." });
  }
  return res.json({ users });
});

//* CREATE A NEW USER
router.post(
  "/admin/users",
  auth,
  isAdmin,
  validateUserJoi,
  async (req, res) => {
    let user;
    const { password } = req.body;
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log("hashed password: ", hashedPassword);

    try {
      user = await User.create({
        password: hashedPassword,
        ...req.body,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "An error occurred",
      });
    }
    res.status(201).json({
      message: "New user created",
      description: user,
    });
  }
);

//* UPDATE A USER
router.put("/admin/users", auth, isAdmin, async (req, res) => {
  let user;
  const { _id, firstName, lastName, email } = req.body;
  try {
    user = await User.findByIdAndUpdate(_id, {
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
  } catch (error) {
    return res.status(400).json({ message: "An error occured." });
  }
  return res
    .status(201)
    .json({ message: "Account successfully updated !", user }); // Updated contact doesn't appear in Postman but effective in MongoDB !
});

//* DELETE A USER
router.delete("/admin/users", auth, isAdmin, async (req, res) => {
  let user;
  const id = req.body._id;
  try {
    user = await User.findByIdAndDelete(id);
  } catch (error) {
    return res.status(400).json({ message: "An error occured." });
  }
  return res
    .status(201)
    .json({ message: "Account successfully deleted !", user });
});

// --------------------- HANDLING FILES -------------------------------------
// ----------------------- DOWNLOAD A FILE ----------------------------------
router.get("/user/files/download",auth, async (req, res) => {
  //Get the user's file by its name and userID

  //If admin, permettre de telecharger tous les fichiers en regardant seulement filename / Si user : regarder userID and filename

  //Côté front : créer une icone pour chaque fichier uploadé, et telechargement au double clic ou en cliquant sur telecharger
  const filename = req.body.filename;
  return res.download(path.join(`/Users/lysianedon/Documents/KONEXIO/Coaching-Platform/backend/public/uploads/${filename}`))
});

// ----------------------- UPLOAD A FILE ----------------------------------
router.post('/user/files/upload', upload.single("image"),auth, async (req,res) => {

  //Check size file : si too big, on refuse => creer middleware pour cela ?
  const {username, filename} = req.body;
  
  console.log(req.file.originalname);
  fs.renameSync(
      req.file.path,
      path.join(req.file.destination, req.file.originalname)
  )
  //Creer ressource dans MongoDB : userId, filename(=req.file.originalname), size
  return res.status(201).json({success : "Image received ! "})
})

module.exports = router;