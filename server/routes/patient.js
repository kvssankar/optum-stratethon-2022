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
    let isNewPatient = 2;
    if (!patient) {
      patient = new Patient({
        email: req.body.email,
        otp,
      });
      isNewPatient = 1;
    }
    patient.otp = otp;
    await patient.save();
    await sendmail(
      req.body.email,
      "OTP for login",
      `Your OTP for login is ${otp}`
    );
    res.json({ status: 0, data: isNewPatient, mssg: "OTP sent to your email" });
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
    //await Patient.findByIdAndDelete(patient._id);
    return res.status(500).json({ status: 1, mssg: "Incorrect OTP" });
  }

  patient.address = req.body.address;
  patient.age = req.body.age;
  patient.name = req.body.name;
  patient.gender = req.body.gender;
  patient = await patient.save();
  return res.json({ data: patient, token });
});

module.exports = router;
