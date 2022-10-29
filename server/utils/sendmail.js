const nodemailer = require("nodemailer");

const sendmail = (email, subject, message) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kvs.sankar23@gmail.com",
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  var mailOptions = {
    from: "kvs,sankar23@gmail.com",
    to: email,
    subject: subject,
    html: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    }
  });
};

module.exports = { sendmail };
