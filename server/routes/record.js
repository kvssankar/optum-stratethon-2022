const router = require("express").Router();
const { Record, File } = require("../models/Record");
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
  const file = new File({
    name: req.body.filename,
    url: req.body.filelocation,
  });

  const record = new Record({
    patient_id: req.body.patient_id,
    doctor_id: req.body.doctor_id,
    session_id: req.body.session_id,
    files: file,
    description: req.body.description,
  });
  try {
    const savedRecord = await record.save();
    res.json(savedRecord);
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

router.post("/add-file-to-record", async (req, res) => {
  const rid = req.body.rid;
  const file = new File({
    name: req.body.filename,
    url: req.body.filelocation,
  });
  try {
    const record = await Record.findByIdAndUpdate(
      rid,
      {
        $push: { files: file },
      },
      { safe: true, upsert: true, new: true }
    );
    return res.json(record);
  } catch (err) {
    console.log(err);
  }
});

router.get("/get-sessions/:sid", async (req, res) => {
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
