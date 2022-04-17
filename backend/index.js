//--------- EXPRESS AND MONGOOSE -------------//
const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//----------------- CORS --------------------//
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    "Access-Control-Allow-Credentials": true
    // origin: "*",
  })
);

//--------- SET UP EJS -------------//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Set EJS as templating engine
app.set("view engine", "ejs");
const fs = require("fs");
const path = require("path");
app.use(express.static("/backend/routers"));

//-------------- DOTENV ----------------------//
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
//-------------- COOKIE PARSER ---------------//
const cookieParser = require("cookie-parser");

//--------------- MIDDLEWARES ----------------//
app.use(cookieParser());
app.use(express.json());


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

//--------------- ROUTES -------------------//
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/contact", contactRouter);
app.use("/questionnaire", questionnaireRouter);
app.use("/dashboard", dashboardRouter);
//---------------- ROUTES -----------------//
app.get("*", (_req, res) => {
  res.status(404).send("Error 404 - Not found");
});

//------------- START SERVER -------------//
app.listen(port, () => {
  console.log(`Server listening at : http://localhost:${port}`);
});
