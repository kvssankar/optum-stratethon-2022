const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  not_available: [
    {
      date: {
        type: Date,
      },
      time: {
        type: Number,
      },
    },
  ],
  category: {
    type: String,
  },
  otp: {
    type: String,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
