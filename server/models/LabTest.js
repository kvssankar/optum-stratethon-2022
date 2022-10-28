const mongoose = require("mongoose");

const LabTestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  lab_tester_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LabTester",
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const LabTest = mongoose.model("LabTest", LabTestSchema);

module.exports = LabTest;
