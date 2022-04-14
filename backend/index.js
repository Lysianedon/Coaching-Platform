//--------- EXPRESS AND MONGOOSE -------------//
const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");

//-------------- DOTENV ----------------------//
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

//------------ CONNECT TO MONGODB -------------//
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDB"));

//--------------- MIDDLEWARE ----------------//
app.use(express.json());

//--------------- ROUTERS ------------------//
const contactRouter = require("/routers/contactRouter")
const questionnaireRouter = require("/routers/questionnaireRouter")
const dashboarRouter = require("/routers/dashboardRouter")
const loginRouter = require("/routers/loginRouter")
const logoutRouter = require("/routers/logoutRouter")

//--------------- ROUTES -------------------//
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/contact", contactRouter);
app.use("/questionnaire", questionnaireRouter);
app.use('/dashboard', dashboardRouter);
//---------------- ROUTES -----------------//
app.get("*", (_req, res) => {
  res.status(404).send("Error 404 - Not found");
});
//------------- START SERVER -------------//
app.listen(port, () => {
  console.log(`Server listening at : http://localhost:${port}`);
});



