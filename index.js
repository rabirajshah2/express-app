require("dotenv").config();
const express = require("express");
const routerIndex = require("./routes/index");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({ msg: "hello you are in the main  index  file" });
});

// Middleware to handle every requests
app.use((req, res, next) => {
  req.query.country = "Nepal";
  next();
});

// application level middleware start
app.use(morgan("tiny")); // aru le banako middleware ho tsaile npm i morgan garyau ani require("morgan")
app.use(express.json()); // turn on json body used to data from the body
app.use("/resources", express.static("public"));
// application level middleware end

app.use("/api", routerIndex);

// Application level exception handling location by using middleware
app.use((err, req, res, next) => {
  const error = err.toString() || "something went wrong";
  res.status(500).json({ data: null, msg: error });
});

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
