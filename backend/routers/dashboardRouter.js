//-------------- EXPRESS ---------------//
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

//------------ LIBRARIES ------------//
const fs = require('fs');
const path = require('path');

//test 2
const gridfs = require('gridfs-stream');
//----------- MIDDLEWARES ------------//
const auth = require("../middlewares/auth");
const isAdmin = require('../middlewares/isAdmin');
const {validateTaskJoi, validateUserJoi} = require('../middlewares/joiValidation');

//----------- MODELS -----------------//
const User = require("../models/userModel");
const Task = require("../models/taskModel");
const Ressources = require('../models/ressourcesModel');
const { findOneAndDelete, findOneAndUpdate } = require("../models/userModel");
const imgModel = require('../models/imageModel');
//------------- MULTER -------------//
const multer = require('multer');
// -------SET UP MULTER --------------//
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		// cb(null, 'uploads')
    cb(null, __dirname);
	},
	filename: (req, file, cb) => {
    // cb(null, file.fieldname + '-' + Date.now())
    cb(null, new Date().toISOString() + file.fieldname)
  }
});

const upload = multer({ storage });

//----------------- ROUTES -------------//

//*************** USER ******************//

//GET THE USER'S INFOS (TO DISPLAY THEM IN THE DASHBOARD):
router.get("/user", auth, async (req, res) => {
  //Find user :
  let user;

  try {
    user = await User.findById(req.userId).populate(
      // "ressources",
      "tasks"
    );
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "A problem happened." });
  }
  return res.json({user});
});

//GET THE ADMIN'S INFOS (TO DISPLAY THEM IN THE DASHBOARD):
router.get("/admin",isAdmin, async (req, res) => {
  //Find user :
  let user;

  try {
    user = await User.findById(req.userId).populate(
      // "ressources",
      "tasks"
    );
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "A problem happened." });
  }
  return res.json({user});
});

//GET ADMIN'S TO DO LIST:
router.get("/admin/list",isAdmin, async (req, res) => {
  let adminList,
    adminID = "62587d8a2451d60a3bc4a53b";

  //Get list of tasks with admin's ID :
  try {
    adminList = await Task.find({ userId: adminID });
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "A problem happened." });
  }
  return res.json({ adminList });
});

//DELETE A TASK IN ADMIN'S TO DO LIST:
router.delete("/admin/list",isAdmin, async (req, res) => {
  //The content must be unique, otherwise an error msg is displayed : "Task already exists"
  let deletedTask = req.body;

  try {
    deletedTask = await Task.findOneAndDelete({ content: deletedTask.content });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "A problem happened." });
  }
  return res.json({ deletedTask });
});

//ADD A NEW TASK INTO ADMIN'S TO DO LIST:
router.post("/admin/list",isAdmin, async (req, res) => {
  let newTask = req.body,
    addedTask;
  const adminID = "62587d8a2451d60a3bc4a53b";

  try {
    newTask = await Task.create(newTask);
    addedTask = await Task.findOneAndUpdate(
      { content: newTask.content },
      { userId: adminID },
      { new: true }
    );
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "A problem happened." });
  }
  return res.status(201).json({ addedTask });
});

//MODIFY A TASK IN ADMIN'S TO DO LIST :
router.put("/admin/list",isAdmin, async (req, res) => {
  let taskToModify = req.body,
    modifiedTask;

  try {
    modifiedTask = await Task.findOneAndUpdate(
      { content: taskToModify.initialContent },
      { content: taskToModify.updatedContent },
      { new: true }
    );
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "A problem happened." });
  }
  return res.status(201).json({ modifiedTask });
});

//GET THE USER'S TO DO LIST:
router.get("/user/list", auth, async (req, res) => {
  const userId = req.userId;
  // const userId = "62587d8a2451d60a3bc4a53b";
  let usersList;
  try {
    usersList = await Task.find({userId});
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "A problem happened." });
  }
  return res.json({ usersList });
});

//DELETE A TASK FROM A USER'S TO DO LIST:
router.delete('/user/list',auth, async (req,res)=> {

  const userId = req.userId;
  const taskToDelete = req.body.content;
  let deletedTask;
  try {
     deletedTask = await Task.findOneAndDelete({content : taskToDelete}, {userId});
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "A problem happened." });
  }
  return res.json({deletedTask});
})

router.post('/user/list',auth, validateTaskJoi, async (req,res)=> {
  //Joi validation

  let newTask = req.body, addedTask, updatedUser;
  const userId = req.userId;
  const {content, deadline, accomplished} = req.body;
  newTask = {
    content,
    deadline,
    accomplished,
    userId 
  }

  try {
    addedTask = await Task.create(newTask);
    addedTask = await Task.findById(addedTask._id);
    updatedUser = await User.findByIdAndUpdate(userId, {
      $push :{
        tasks : addedTask._id
      }
    })
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "A problem happened." });
  }
  return res.json({addedTask});
})

//MODIFY A USER'S TASK IN THE TO DO LIST :
router.put('/user/list', auth, async (req,res)=> {
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
  return res.status(400).json({ message: "A problem happened." });
}
return res.status(201).json({ modifiedTask });
})

//DOWNLOAD FILES/RESSOURCES FROM DASHBOARD (USER AND ADMIN) :
router.get('/user/files', (req, res) => {
  imgModel.find({}, (err, items) => {
      if (err) {
          console.log(err);
          res.status(500).send('An error occurred', err);
      }
      else {
          res.render('imagesPage', { items: items });
      }
  });
});

// Step 8 - the POST handler for processing the uploaded file
router.post('/user/files', upload.single('image'), async (req, res) => {

	const obj = {
		name: req.body.name,
		description: req.body.description,
		img: {
			data: fs.readFileSync(path.join(__dirname  + '/' + req.file.filename)),
			// contentType: 'application/pdf'
		},
    userId : "62587d8a2451d60a3bc4a53b"
	}
	const uploadedFile = await imgModel.create(obj, (err, item) => {
		if (err) {
			console.log(err);
		}
		else {
			// item.save();
			res.redirect('http://localhost:8000/dashboard/user/files');
		}
	});
});

// DOWNLOAD FROM ICONE ----------------------------------------
router.get('/test', (req, res) => {
	// Check file exist on MongoDB
	
	// var filename = req.query.filename;
	var filename = 'dff';
	
	gfs.exist({ filename: filename }, (err, file) => {
		if (err || !file) {
			res.status(404).send('File Not Found');
			return
		} 
		
		var readstream = gfs.createReadStream({ filename: filename });
		readstream.pipe(res);            
	});
});	


//Exporting the module

module.exports = router;
