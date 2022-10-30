const cron = require("node-cron");
const axios = require("axios");
const Patient = require("./models/Patient");
// ...

// Schedule tasks to be run on the server.
cron.schedule("*", async function () {
  const patients = await Patient.find({});
  for (let i = 0; i < patients.length; i++) {
    axios
      .get(`${process.env.FAST_API_ENDPOINT}/healthcheck/${patients[i]._id}`)
      .then((res) => {
        if (res.data.status === -1) {
          sendmail({
            to: patient[i].email,
            subject: "Need Rehospitalization",
            text: `Patient ${patient.name} needs to be rehospitalized. Please contact your nearest hospital soon.`,
          });
        }
      });
  }
});
