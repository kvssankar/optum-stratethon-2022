const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const RecordSchema = new mongoose.Schema({
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  doctor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor",
    required: true,
  },
  session_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Session",
    required: true,
  },
  description: {
    type: String,
  },
  files: [FileSchema],
  created_at: {
    type: Date,
    default: Date.now,
  },
  DESCRIPTION: String,
  VALUE: String,
  UNITS: String,
  TYPE: String,
  CODE: String,
  PATIENT: String,
  DATE: String,
  ENCOUNTER: String,
});

const File = mongoose.model("File", FileSchema);
const Record = mongoose.model("Record", RecordSchema);

module.exports = { Record, File };
