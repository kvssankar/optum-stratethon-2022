const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  doctor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
  },
  records: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Record",
    },
  ],
  lab_tests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LabTest",
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
  ended_at: {
    type: Date,
  },
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
