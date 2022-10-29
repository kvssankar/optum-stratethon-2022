const router = require("express").Router();
const Session = require("../models/Session");

router.get("/:sid", async (req, res) => {
  try {
    const session = await Session.find({ _id: req.params.sid });
    res.json(session);
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

router.get("/patient/:pid/", async (req, res) => {
  try {
    const session = await Session.find({
      patient_id: req.params.pid,
    });
    res.json(session);
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

router.get("/doctor/:did/", async (req, res) => {
  try {
    const session = await Session.find({ doctor_id: req.params.did });
    res.json(session);
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

router.post("/create", async (req, res) => {
  const session = new Session({
    patient_id: req.body.patient_id,
    time: req.body.time,
    date: req.body.date,
    status: req.body.status,
  });
  try {
    const savedSession = await session.save();
    res.json(savedSession);
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

router.post("/assigndoctor", async (req, res) => {
  try {
    const session = await Session.updateOne(
      { _id: req.body.session_id },
      { $set: { doctor_id: req.body.doctor_id } }
    );
    res.json(session);
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
    res.json(session);
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

module.exports = router;
