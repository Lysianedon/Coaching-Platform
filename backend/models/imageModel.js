const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: { type: String, minlength: 1, maxlength: 30, required: true },
  description: { type: String, minlength: 1, maxlength: 100, required: true },
  img: {
    data: Buffer,
    contentType: String,
  },
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
