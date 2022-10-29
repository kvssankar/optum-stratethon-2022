const { S3Client, AbortMultipartUploadCommand } = require("@aws-sdk/client-s3");
var multer = require("multer");
var multerS3 = require("multer-s3");

var router = require("express").Router();

const s3 = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "healthcare-doofin",
    acl: "public-read",
    key: function (req, file, cb) {
      cb(null, file.originalname); //use Date.now() for unique file keys
    },
  }),
});

router.post("/", upload.single("file"), async (req, res) => {
  res.json({
    filename: req.file.originalname,
    filelocation: req.file.location,
  });
});

module.exports = router;
