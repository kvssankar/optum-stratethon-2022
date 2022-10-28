const router = require("express").Router();
const Patient = require("../models/Patient");
var generator = require("generate-password");
const jwt = require("jsonwebtoken");
const { sendmail } = require("../utils/sendmail");

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

router.post("/login", async (req, res) => {
  let patient = await Patient.findOne({ email: req.body.email });
  const token = jwt.sign(
    { _id: patient._id, email: patient.email },
    process.env.JWT_SECRET
  );
  if (!req.body.otp) {
    return res.status(400).json({ status: 1, mssg: "Please enter OTP" });
  }
  if (req.body.otp === patient.otp) {
    if (patient.age) {
      return res.json({ data: patient, token });
    }
  }
  if (req.body.otp !== patient.otp) {
    await Patient.findByIdAndDelete(patient._id);
    res.status(500).json({ status: 1, mssg: "Incorrect OTP" });
  }

  patient.address = req.body.address;
  patient.age = req.body.age;
  patient.name = req.body.name;
  patient = await patient.save();
  res.json({ data: patient, token });
});

module.exports = router;
