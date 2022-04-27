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
  host: process.env.REACT_APP_HOST,
  port: 587,
  auth: {
    user: process.env.REACT_APP_USER,
    pass: process.env.REACT_APP_PASS,
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
  const { name, email, tel, message } = req.body.data;
  console.log(req.body);
  mailOptions = {
    from: name,
    to: process.env.REACT_APP_USER,
    subject: "Formulaire de contact",
    html: `<p>Nom: ${name}</p>
               <p>Email: ${email}</p>
               <p>Téléphone: ${tel ? tel : "Non renseigné"}</p>
               <p>Message: ${message}</p>`,
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
