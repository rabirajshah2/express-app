require("dotenv").config();
const express = require("express");
const routerIndex = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({ msg: "hello you are in the main  index  file" });
});

app.use("/api", routerIndex);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "Invalid Path" });
});

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
