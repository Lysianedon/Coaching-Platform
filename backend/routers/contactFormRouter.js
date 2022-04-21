//-------------- EXPRESS ---------------//
const express = require("express");
const router = express.Router();
//-------------- NODEMAILER -------------//
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
// Body parser
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//------------- SET UP NODEMAILER ----------//
let transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: 587,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Check connection configuration
transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

//----------------- ROUTES ------------------//
router.post("/", (req, res) => {
  const { name, email, tel, subject, message } = req.body;
  mailOptions = {
    from: name,
    to: process.env.USER,
    subject: "Formulaire de contact",
    // html: `<p>Nom: ${name}</p>
    //            <p>Email: ${email}</p>
    //            <p>Téléphone: ${tel}</p>
    //            <p>Subject: ${subject}</p>
    //            <p>Message: ${message}</p>`,
    text: "Hello",
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send("error");
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.status(200).send("success");
  });
});

module.exports = router;
