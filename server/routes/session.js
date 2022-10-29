const router = require("express").Router();
const Session = require("../models/Session");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
const LabTest = require("../models/labTest");
const verify = require("../verify");
const axios = require("axios").create();

router.get("/:sid", async (req, res) => {
  try {
    const session = await Session.find({ _id: req.params.sid })
      .populate("doctor_id")
      .populate("patient_id");
    console.log("**********************");
    console.log(session, "here are sessions");
    console.log("**********************");
    res.json({ data: session });
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

router.get("/patient/:pid/", verify, async (req, res) => {
  try {
    console.log(req.params.pid);
    const sessions = await Session.find({
      patient_id: req.params.pid,
    });
    res.json({ data: sessions });
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

router.post("/patient/getSessions/", verify, async (req, res) => {
  try {
    console.log(req.body.patient_id);
    const sessions = await Session.find({
      patient_id: req.body.patient_id,
    })
      .populate("doctor_id")
      .populate("patient_id");
    console.log(sessions);
    res.json({ data: sessions });
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

router.get("/doctor/:did/", verify, async (req, res) => {
  try {
    const sessions = await Session.find({ doctor_id: req.params.did });
    let date_ob = new Date();
    res.json({ data: sessions, date: date_ob });
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

router.post("/doctor/getSessions", async (req, res) => {
  try {
    const sessions = await Session.find({
      doctor_id: req.body.doctor_id,
    })
      .populate("patient_id")
      .populate("doctor_id");
    let date_ob = new Date();
    console.log(sessions);
    res.json({ data: sessions, date: date_ob });
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

router.post("/create", verify, async (req, res) => {
  console.log(req.body.time);
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
  console.log(doctors);
  if (doctors.length === 0) {
    return res.status(500).json({ status: 1, err: "No doctors available" });
  }
  let doctor = doctors[Math.floor(Math.random() * doctors.length)];
  doctor.not_available.push({ date: req.body.date, time: req.body.time });
  await doctor.save();
  const session = new Session({
    patient_id: req.user._id,
    disease: req.body.disease,
    description: req.body.description,
    doctor_id: doctor._id,
    started_at: req.body.date,
    time: Number(req.body.time),
  });
  try {
    const savedSession = await session.save();
    res.json({ data: savedSession });
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

router.post("/end", async (req, res) => {
  try {
    const session = await Session.updateOne(
      { _id: req.body.session_id },
      { $set: { ended_at: Date.now() } }
    );
    res.json({ data: session });
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
          console.log("HI in if");
        } catch (err) {
          console.log({ message: "Error in creating first request" });
        }
      } else {
        try {
          response = await axios({
            url: "http://65.2.141.113:5000/lungs",
            method: "post",
          });
          console.log("HI in else");
        } catch (err) {
          console.log({ message: "Error in creating second request" });
        }
      }
      const labTest = new LabTest({
        name: req.body.name,
        patient_id: req.body.patient_id,
        fileUrl: req.body.fileUrl,
        description: "Type number 1",
        consultationRequired: "True",
      });
      console.log("HI2");
      console.log(labTest);
      console.log("H3");
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
    console.log("**********************");
    console.log(labtest, "here are sessions");
    console.log("**********************");
    res.json({ data: labtest });
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

module.exports = router;
