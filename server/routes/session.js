const router = require("express").Router();
const Session = require("../models/Session");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
const verify = require("../verify");

router.get("/:sid", verify, async (req, res) => {
  try {
    const session = await Session.find({ _id: req.params.sid });
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
    });
    console.log(sessions);
    res.json({ data: sessions });
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

router.get("/doctor/:did/", verify, async (req, res) => {
  try {
    const sessions = await Session.find({ doctor_id: req.params.did });
    res.json({ data: sessions });
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

router.post("/create", verify, async (req, res) => {
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

module.exports = router;
