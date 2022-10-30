const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  otp: {
    type: String,
  },
  chronic_diseases: [
    {
      disease: String,
      session_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Session",
      },
    },
  ],
  address: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  PATIENT: String,
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
