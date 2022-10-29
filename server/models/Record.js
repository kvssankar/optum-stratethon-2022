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
<<<<<<< HEAD
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
=======
>>>>>>> b39513b5c25f1bdc595cc4f2420e5da2fd5bce15
  description: {
    type: String,
  },
  files: [FileSchema],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Record = mongoose.model("Record", RecordSchema);

module.exports = Record;
