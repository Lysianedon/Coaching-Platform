//-------------- EXPRESS ---------------//
const express = require("express");
const router = express.Router();
// //-------------- NODEMAILER -------------//
// const nodemailer = require("nodemailer");

// //------------- SET UP NODEMAILER ----------//
// let transporter = nodemailer.createTransport({
//   host: process.env.HOST,
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.USER,
//     pass: process.env.PASS,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });

// // Check connection configuration
// transporter.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// //----------------- ROUTES ------------------//
// router.post("/", (req, res) => {
//   const { name, email, tel, subject, message } = req.body;
//   mailOptions = {
//     from: name,
//     to: process.env.USER,
//     subject: "Formulaire de contact",
//     html: `<p>Nom: ${name}</p>
//                <p>Email: ${email}</p>
//                <p>Téléphone: ${tel}</p>
//                <p>Subject: ${subject}</p>
//                <p>Message: ${message}</p>`,
//   };
//   transporter.sendMail(email, (error) => {
//     if (error) {
//       res.json({ message: "An error occurred." });
//     } else {
//       res.json({ message: "Message successfully sent !" });
//     }
//   });
// });

module.exports = router;
