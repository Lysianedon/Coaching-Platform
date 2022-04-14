const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
    lowercase: true,
  },

  lastName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
    lowercase: true,
  },

  email: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
    lowercase: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 100,
  },

  currentMood: {
    type: String,
    maxlength: 100,
  },

  desiredMood: {
    type: String,
    maxlength: 100,
  },
  isAdmin: false,
  ressources: [{ type: mongoose.Types.ObjectId, ref: "Ressources" }],
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

const User = mongoose.model("User", userSchema);

//Exporting the model:
module.exports = User;
