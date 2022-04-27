const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
  content: {
    type: String,
  },
  deadline: {
    type: Date,
  },
  
  accomplished: { type: Boolean, default: false },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
