const router = require("express").Router();
const Doctor = require("../models/Doctor");
const { sendmail } = require("../utils/sendmail");

router.post("/login", async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ email: req.body.email });
    if (!doctor.age) {
      return res.status(400).send("Email not found, please register");
    }
    if (doctor.otp === req.body.otp) {
      return res.status(200).send(doctor);
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
    let doctor = await Doctor.findOne({ email: req.body.email });
    if (!doctor) {
      doctor = new Doctor({
        email: req.body.email,
        otp,
      });
    }
    doctor.otp = otp;
    await doctor.save();
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
  let doctor = await Doctor.findOne({ email: req.body.email });
  if (doctor.age) {
    return res.status(400).send("Email already exists");
  }
  if (req.body.otp !== doctor.otp) {
    await Doctor.findByIdAndDelete(doctor._id);
    res.status(500).json({ status: 1, mssg: "Incorrect OTP" });
  }
  doctor.address = req.body.address;
  doctor.age = req.body.age;
  doctor.name = req.body.name;
  doctor.category = req.body.category;
  doctor = await doctor.save();
  res.json(doctor);
});

module.exports = router;
