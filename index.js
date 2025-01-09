require("dotenv").config();
const express = require("express");
const routerIndex = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({ msg: "hello you are in the main  index  file" });
});

app.use("/api", routerIndex);

app.use((err, req, res, next) => {
  const error = err.toString() || "something went wrong";
  res.status(500).json({ msg: error });
});

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
