const router = require("express").Router();
const Record = require("../models/Record");

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

router.post("/create", async (req, res) => {
  const record = new Record({
    patient_id: req.body.patient_id,
    file: req.body.file,
  });
  try {
    const savedRecord = await record.save();
    res.json(savedRecord);
  } catch (err) {
    res.status(500).json({ status: 1, err });
  }
});

module.exports = router;
