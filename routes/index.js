const router = require("express").Router();
const userIndex = require("../modules/users/user.index");
const qrRouter = require("../modules/qrcode/qr.route");

router.get("/", (req, res) => {
  res.json({ msg: "Hello routes folder" });
});

router.get("/rabi", (req, res) => {
  res.json({ msg: "Hello rabi from routes folder" });
});

router.use("/users", userIndex);

router.use("/qr", qrRouter);

module.exports = router;
