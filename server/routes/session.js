const router = require("express").Router();
const Session = require("../models/Session");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
const LabTest = require("../models/labTest");
const verify = require("../verify");
const axios = require("axios").create();
const { sendmail } = require("../utils/sendmail");

router.get("/:sid", async (req, res) => {
  try {
    const session = await Session.findOne({ ENCOUNTER: req.params.sid })
      .populate("doctor_id")
      .populate("patient_id");
    res.json({ data: session });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 1, err });
  }
});

router.get("/patient/:pid/", verify, async (req, res) => {
  try {
    const sessions = await Session.find({
      patient_id: req.params.pid,
    })
      .sort({ started_at: 1 })
      .populate("doctor_id")
      .populate("patient_id");
    res.json({ data: sessions });
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

router.get("/doctor/:did/", async (req, res) => {
  try {
    const sessions = await Session.find({ doctor_id: req.params.did })
      .sort({ started_at: 1 })
      .populate("patient_id")
      .populate("doctor_id");
    let date_ob = new Date();
    res.json({ data: sessions, date: date_ob });
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

router.post("/", verify, async (req, res) => {
  const doctors = await Doctor.find({
    not_available: {
      $nin: [
        {
          date: req.body.date,
          time: req.body.time,
        },
      ],
    },

    category: req.body.category,
  });
  if (doctors.length === 0) {
    return res.status(500).json({ status: 1, mssg: "No doctors available" });
  }
  let doctor = doctors[Math.floor(Math.random() * doctors.length)];
  doctor.not_available.push({ date: req.body.date, time: req.body.time });
  await doctor.save();
  const session = new Session({
    patient_id: req.user._id,
    disease: req.body.disease,
    description: req.body.description,
    doctor_id: doctor._id,
    started_at: {
      date: req.body.date,
      time: req.body.time,
    },
  });
  try {
    const savedSession = await session.save();
    res.json({ data: savedSession });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 1, err });
  }
});

router.post("/end", async (req, res) => {
  try {
    const session = await Session.updateOne(
      { _id: req.body.session_id },
      { $set: { ended_at: Date.now() } }
    ).populate("patient_id");
    try {
      await sendmail(
        session.patient_id.email,
        "Session Ended, kindly fill Survey  ",
        "Hello, Kindly help us improve our services by filling this survey. <a href='http://localhost:3000/survey'>Survey</a>"
      );
      res.json({ data: session });
    } catch (err) {}
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

//lab test

router.post("/labtest/perform", async (req, res) => {
  try {
    try {
      const response = null;
      if ((req.body.type = "eyes")) {
        try {
          response = await axios({
            url: "http://65.2.141.113:5000/eyes",
            method: "post",
          });
        } catch (err) {}
      } else {
        try {
          response = await axios({
            url: "http://65.2.141.113:5000/lungs",
            method: "post",
          });
        } catch (err) {}
      }
      const labTest = new LabTest({
        name: req.body.name,
        patient_id: req.body.patient_id,
        fileUrl: req.body.fileUrl,
        description: "Type number 1",
        consultationRequired: "True",
      });
      const newLabTest = await labTest.save();
      return res.json({ data: newLabTest });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  } catch (err) {
    return res.status(500).json({ status: 1, message: "hi" });
  }
});

router.post("/labtests/get", async (req, res) => {
  try {
    const labtest = await LabTest.find({ patient_id: req.body.patient_id });
    res.json({ data: labtest });
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

module.exports = router;
