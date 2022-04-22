//--------- EXPRESS AND MONGOOSE ------------//
const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
const multer = require("multer");

//------ BODY PARSER AND COOKIE PARSER ------//
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
//----------------- CORS --------------------//
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const fs = require("fs");
const path = require("path");
//-------------- DOTENV ----------------------//
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

//--------------- MIDDLEWARES ----------------//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));

//------------ CONNECT TO MONGODB -------------//
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"));

//--------------- ROUTERS ------------------//
const contactRouter = require("./routers/contactRouter");
const questionnaireRouter = require("./routers/questionnaireRouter");
const dashboardRouter = require("./routers/dashboardRouter");
const loginRouter = require("./routers/loginRouter");
const logoutRouter = require("./routers/logoutRouter");

const contactFormRouter = require("./routers/contactFormRouter");

app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/contact", contactRouter);
app.use("/questionnaire", questionnaireRouter);
app.use("/dashboard", dashboardRouter);
//------------ Test -------------------//
app.use("/contact-form", contactFormRouter);

//---------------- ROUTES -----------------//
app.get("*", (_req, res) => {
  res.status(404).send("Error 404 - Not found");
});

//------------- START SERVER -------------//
app.listen(port, () => {
  console.log(`Server listening at : http://localhost:${port}`);
});
