const router = require("express").Router();
const userIndex = require("../modules/users/user.index");

router.get("/", (req, res) => {
  res.json({ msg: "Hello routes folder" });
});

router.get("/rabi", (req, res) => {
  res.json({ msg: "Hello rabi from routes folder" });
});

router.use("/users", userIndex);

module.exports = router;
