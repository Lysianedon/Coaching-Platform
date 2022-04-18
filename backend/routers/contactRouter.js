//-------------- EXPRESS ---------------//
const express = require("express");
const router = express.Router();
//------------------ PATH --------------------//
const path = require("path");
//---------- NODEMAILER  CONFIG ----------------//
const nodeMailer = require("nodemailer");
// Create an SMTP transporter
const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});
//--------------- MIDDLEWARES -----------------//
router.use(express.urlencoded({ extended: true }));
router.use(express.static(path.join(__dirname, "public")));

// Create a sendMail function
async function mainMail(name, email, subject, message) {
  const transporter = await nodeMail.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });
  const mailOption = {
    from: process.env.GMAIL_USER,
    to: process.env.EMAIL,
    subject: subject,
    html: `You got a message from 
    Email : ${email}
    Name: ${name}
    Message: ${message}`,
  };
  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve("Message Sent Successfully!");
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
//--------------- ROUTES -------------//
// app.get("/", (req, res) => {
//   res.render(index.html);
// });

// Make the contact form accessible from a browser
router.get("/", (_req, res) => {
  res.render(contact.html); // To modify
});

// Setup send mail route
router.post("/", async (req, res, next) => {
  const { yourname, youremail, yoursubject, yourmessage } = req.body;
  try {
    await mainMail(yourname, youremail, yoursubject, yourmessage);
    res.send("Your message was successfully sent!");
  } catch (error) {
    res.send("Your message could not be sent");
  }
});

module.exports = router;
