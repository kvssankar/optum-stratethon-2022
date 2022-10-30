//initialise the express framework
const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();
const path = require("path");

//
// const fs = require("fs");
// const Patient = require("./models/Patient");
// const Session = require("./models/Session");
// const { Record } = require("./models/Record");
//

app.use(express.json());

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization,auth-token"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/api/patient", require("./routes/patient"));
app.use("/api/doctor", require("./routes/doctor"));
app.use("/api/record", require("./routes/record"));
app.use("/api/session", require("./routes/session"));
app.use("/api/upload", require("./routes/upload"));

const connect = mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// //write a function to read json file lab_tests_patient_1.json
// const readJsonFile = async () => {
//   const filePath = path.join(__dirname, "lab_tests_patient_1.json");
//   console.log(filePath);
//   const fileContent = fs.readFileSync(filePath);
//   var jsessions = JSON.parse(fileContent);
//   // var np = new Patient({
//   //   name: "patient_1",
//   //   age: 40,
//   //   gender: "Male",
//   //   email: "kvs.sankar001@gmail.com",
//   //   otp: "1234",
//   //   address: "Bangalore",
//   //   PATIENT: "34c8b604-96de-49b6-b88d-ee1d2669c6fd",
//   // });
//   // np = await np.save();
//   var pid = "635cff1b8cd6723eda38dae9";
//   // for (var i = 0; i < jsessions.length; i++) {
//   //   var session = new Session({
//   //     patient_id: pid,
//   //     doctor_id: "634fa78396fa0a877a4597f3",
//   //     disease: jsessions[i].DESCRIPTION,
//   //     description: jsessions[i].DESCRIPTION,
//   //     started_at: new Date(jsessions[i].START),
//   //     ended_at: new Date(jsessions[i].START).setDate(
//   //       new Date(jsessions[i].START).getDate() + 1
//   //     ),
//   //     ENCOUNTER: jsessions[i].ENCOUNTER,
//   //     START: jsessions[i].START,
//   //     PATIENT: jsessions[i].PATIENT,
//   //     ENCOUNTERCLASS: jsessions[i].ENCOUNTERCLASS,
//   //     CODE: jsessions[i].CODE,
//   //     DESCRIPTION: jsessions[i].DESCRIPTION,
//   //     BASE_ENCOUNTER_COST: jsessions[i].BASE_ENCOUNTER_COST,
//   //     TOTAL_CLAIM_COST: jsessions[i].TOTAL_CLAIM_COST,
//   //     PAYER_COVERAGE: jsessions[i].PAYER_COVERAGE,
//   //     REASONCODE: jsessions[i].REASONCODE,
//   //     REASONDESCRIPTION: jsessions[i].REASONDESCRIPTION,
//   //     diff_days: jsessions[i].diff_days,
//   //     diff_days_1: jsessions[i].diff_days_1,
//   //     Medication: jsessions[i].Medication,
//   //     Condition: jsessions[i].Condition,
//   //   });
//   //   session = await session.save();
//   // }
//   for (var i = 0; i < jsessions.length; i++) {
//     var record = new Record({
//       patient_id: pid,
//       session_id: "635cff1b8cd6723eda38dae9",
//       doctor_id: "634fa78396fa0a877a4597f3",
//       disease: jsessions[i].DESCRIPTION,
//       description: jsessions[i].DESCRIPTION,
//       DATE: jsessions[i].DATE,
//       PATIENT: jsessions[i].PATIENT,
//       ENCOUNTER: jsessions[i].ENCOUNTER,
//       CODE: jsessions[i].CODE,
//       DESCRIPTION: jsessions[i].DESCRIPTION,
//       VALUE: jsessions[i].VALUE,
//       UNITS: jsessions[i].UNITS,
//       TYPE: jsessions[i].TYPE,
//     });
//     record = await record.save();
//   }
// };

const root = path.resolve(__dirname, "build");
app.use(express.static(root));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"));
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running on port 8000");
});
