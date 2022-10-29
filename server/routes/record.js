const router = require("express").Router();
const Record = require("../models/Record");
const verify = require("../verify");

router.get("/:rid", async (req, res) => {
  try {
    const record = await Record.find({ _id: req.params.rid });
    res.json(record);
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

router.get("/patient/:pid/", async (req, res) => {
  try {
    const record = await Record.find({
      patient_id: req.params.pid,
    });
    res.json(record);
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

router.post("/create", verify, async (req, res) => {
  console.log("&&&&&&&&&&&&&&&&&&&&&&&&");
  console.log(req.body);
  const record = new Record({
    patient_id: req.body.patient_id,
    doctor_id: req.body.doctor_id,
    session_id: req.body.session_id,
    file: [
      {
        name: req.body.filename,
        url: req.body.filelocation,
      },
    ],
    description: req.body.description,
  });
  try {
    const savedRecord = await record.save();
    res.json(savedRecord);
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

router.get("/get-sessions/:sid", async (req, res) => {
  console.log("HERE GETTIGN DATA");
  try {
    const sessions = await Record.find({ session_id: req.params.sid }).populate(
      "session_id"
    );
    return res.json(sessions);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
