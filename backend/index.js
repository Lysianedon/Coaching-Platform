//----------------- EXPRESS ------------------//
const express = require("express");
const app = express();
const port = 8000;

//--------------- MIDDLEWARE ----------------//
app.use(express.json());

//------------- START SERVER -------------//
app.listen(port, () => {
  console.log(`Server listening at : http//localhost:${port}`);
});
