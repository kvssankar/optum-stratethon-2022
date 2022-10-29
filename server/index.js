//initialise the express framework
const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();

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

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running on port 8000");
});
