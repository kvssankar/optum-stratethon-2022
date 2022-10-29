const router = require("express").Router();
const Patient = require("../models/Patient");
const axios = require("axios");
var generator = require("generate-password");
const { sendmail } = require("../utils/sendmail");

router.post("/login", async (req, res) => {
  try {
    const patient = await Patient.findOne({ email: req.body.email });
    if (!patient.age) {
      return res.status(400).send("Email not found, please register");
    }
    if (patient.otp === req.body.otp) {
      return res.status(200).send(patient);
    } else {
      return res.status(400).json({ status: 1, mssg: "Incorrect OTP" });
    }
  } catch (err) {
    res.status(400).json({ status: 1, err: err });
  }
});

router.post("/sendloginotp", async (req, res) => {
  let otp = generator.generate({
    length: 6,
    numbers: true,
  });
  try {
    let patient = await Patient.findOne({ email: req.body.email });
    if (!patient) {
      patient = new Patient({
        email: req.body.email,
        otp,
      });
    }
    patient.otp = otp;
    await patient.save();
    console.log(patient);
    await sendmail(
      req.body.email,
      "OTP for login",
      `Your OTP for login is ${otp}`
    );
    res.json({ status: 0, mssg: "OTP sent to your email" });
  } catch (err) {
    res.status(400).json({ status: 1, err: err });
  }
});

router.post("/register", async (req, res) => {
  let patient = await Patient.findOne({ email: req.body.email });
  if (!req.body.otp) {
    return res.status(400).json({ status: 1, mssg: "Please enter OTP" });
  }
  if (patient.age) {
    return res.status(400).send("Email already exists");
  }
  if (req.body.otp !== patient.otp) {
    await Patient.findByIdAndDelete(patient._id);
    res.status(500).json({ status: 1, mssg: "Incorrect OTP" });
  }
  patient.address = req.body.address;
  patient.age = req.body.age;
  patient.name = req.body.name;
  patient = await patient.save();
  res.json(patient);
});

module.exports = router;
