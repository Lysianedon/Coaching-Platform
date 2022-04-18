const mongoose = require("mongoose");

const ressourcesSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  name: { type: "String", minlength: 1, maxlength: 100, required: true },
  //   type: { type: "String", minlength: 1, maxlength: 50, required: true },
});

const Ressources = mongoose.model("Ressources", ressourcesSchema);

module.exports = Ressources;
