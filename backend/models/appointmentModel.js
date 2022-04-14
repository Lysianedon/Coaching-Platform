const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  date: {
    type: Date,
    required: true,
  },
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);
module.exports = Appointment;
