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
  telephone: {
    type: String,
    minlength: 10,
    maxlength: 30,
  },
  currentMood: {
    type: String,
    maxlength: 100,
  },
  desiredMood: {
    type: String,
    maxlength: 100,
  },
  isAdmin: { type: Boolean, default: false },
  ressources: [{ type: mongoose.Types.ObjectId, ref: "Ressources" }],
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
  tasks: [{ type: mongoose.Types.ObjectId, ref: "Task" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
