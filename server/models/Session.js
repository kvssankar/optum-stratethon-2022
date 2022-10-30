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
  disease: {
    type: String,
  },
  description: {
    type: String,
  },
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
  started_at: {
    date: Date,
    time: Number,
  },
  ended_at: {
    type: Date,
  },
  ENCOUNTER: String,
  START: Number,
  PATIENT: String,
  ENCOUNTERCLASS: String,
  CODE: Number,
  DESCRIPTION: String,
  BASE_ENCOUNTER_COST: Number,
  TOTAL_CLAIM_COST: Number,
  PAYER_COVERAGE: Number,
  REASONCODE: Number,
  REASONDESCRIPTION: String,
  diff_days: Number,
  diff_days_1: Number,
  Medication: String,
  Condition: String,
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
