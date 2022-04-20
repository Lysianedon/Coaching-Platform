//-------------- EXPRESS ---------------//
const express = require("express");
const router = express.Router();
//------------ LIBRARIES ------------ //
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

// Test 2
// const gridfs = require("gridfs-stream");

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

// ------------ SET UP MULTER --------------//
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(null, 'uploads')
    cb(null, __dirname);
  },
  filename: (req, file, cb) => {
    // cb(null, file.fieldname + '-' + Date.now())
    cb(null, new Date().toISOString() + file.fieldname);
  },
});

const upload = multer({ storage });

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
  const { content, deadline, accomplished } = req.body;
  newTask = {
    userId,
    content,
    deadline,
    accomplished,
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

//DOWNLOAD FILES/RESSOURCES FROM DASHBOARD (USER AND ADMIN) :
router.get("/user/files", (req, res) => {
  Image.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      res.render("imagesPage", { items: items });
    }
  });
});

// Step 8 - the POST handler for processing the uploaded file
router.post("/user/files", upload.single("image"), async (req, res) => {
  const obj = {
    name: req.body.name,
    description: req.body.description,
    img: {
      data: fs.readFileSync(path.join(__dirname + "/" + req.file.filename)),
      // contentType: 'application/pdf'
    },
    userId: "62587d8a2451d60a3bc4a53b",
  };
  const uploadedFile = await Image.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      // item.save();
      res.redirect("http://localhost:8000/dashboard/user/files");
    }
  });
});

// DOWNLOAD FROM ICONE ----------------------------------------
router.get("/test", (req, res) => {
  // Check file exist on MongoDB

  // var filename = req.query.filename;
  var filename = "dff";

  gfs.exist({ filename: filename }, (err, file) => {
    if (err || !file) {
      res.status(404).send("File Not Found");
      return;
    }

    var readstream = gfs.createReadStream({ filename: filename });
    readstream.pipe(res);
  });
});

module.exports = router;