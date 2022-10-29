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
    new mongoose.Schema(
      {
        date: {
          type: Date,
        },
        time: {
          type: Number,
        },
      },
      { _id: false }
    ),
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
