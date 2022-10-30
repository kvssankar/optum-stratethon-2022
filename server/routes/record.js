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

router.get("/session/:sid", async (req, res) => {
  try {
    const records = await Record.find({ ENCOUNTER: req.params.sid })
      .populate("session_id")
      .sort({ created_at: -1 })
      .limit(10);
    return res.json(records);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", verify, async (req, res) => {
  const record = new Record({
    patient_id: req.body.patient_id,
    doctor_id: req.body.doctor_id,
    session_id: req.body.session_id,
    description: req.body.description,
  });
  try {
    const savedRecord = await record.save();
    res.json(savedRecord);
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

router.get("/datewise/:sid", async (req, res) => {
  try {
    const records = await Record.find({ ENCOUNTER: req.params.sid });
    const groupedRecords = new Map();
    await records.forEach((record) => {
      const date = record.DATE;
      console.log(date);
      if (groupedRecords.has(date)) {
        groupedRecords.get(date).push(record);
      } else {
        groupedRecords.set(date, [record]);
      }
    });
    //convert map to object
    const groupedRecordsObj = {};
    groupedRecords.forEach((value, key) => {
      groupedRecordsObj[key] = value;
    });
    return res.json(groupedRecordsObj);
  } catch (err) {
    console.log(err);
  }
});

router.post("/addfile", async (req, res) => {
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

module.exports = router;
