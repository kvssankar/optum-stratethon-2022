const router = require("express").Router();
const Doctor = require("../models/Doctor");
var generator = require("generate-password");
const jwt = require("jsonwebtoken");
const { sendmail } = require("../utils/sendmail");
const verify = require("../verify");

router.post("/sendloginotp", async (req, res) => {
  let otp = generator.generate({
    length: 6,
    numbers: true,
  });
  try {
    let doctor = await Doctor.findOne({ email: req.body.email });
    let isNewDoctor = 2;
    if (!doctor) {
      doctor = new Doctor({
        email: req.body.email,
        otp,
      });
      isNewDoctor = 1;
    }
    doctor.otp = otp;
    await doctor.save();
    await sendmail(
      req.body.email,
      "OTP for login",
      `Your OTP for login is ${otp}`
    );
    res.json({ status: 0, data: isNewDoctor, mssg: "OTP sent to your email" });
  } catch (err) {
    res.status(400).json({ status: 1, err: err });
  }
});

router.post("/login", async (req, res) => {
  let doctor = await Doctor.findOne({ email: req.body.email });
  const token = jwt.sign(
    { _id: doctor._id, email: doctor.email },
    process.env.JWT_SECRET
  );
  if (!req.body.otp) {
    return res.status(400).json({ status: 1, mssg: "Please enter OTP" });
  }
  if (req.body.otp === doctor.otp) {
    if (doctor.age) {
      return res.json({ data: doctor, token });
    }
  }
  if (req.body.otp !== doctor.otp) {
    //await Doctor.findByIdAndDelete(doctor._id);
    res.status(500).json({ status: 1, mssg: "Incorrect OTP" });
  }
  doctor.address = req.body.address;
  doctor.age = req.body.age;
  doctor.name = req.body.name;
  doctor.category = req.body.category;
  doctor.gender = req.body.gender;
  doctor = await doctor.save();
  return res.json({ data: doctor, token });
});

router.post("changenotavailable", verify, async (req, res) => {
  const doctor = await Doctor.findById(req.body._id);
  doctor.not_available = req.body.not_available;
  await doctor.save();
});

module.exports = router;
