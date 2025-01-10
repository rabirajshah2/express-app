const router = require("express").Router();
const qrController = require("./qr.controller");

const checkUser = (req, res, next) => {
  req.query.role = "user";
  next();
};

//Middleware to specific requests
router.get("/", checkUser, async (req, res, next) => {
  try {
    console.log({ get: req.query });
    res.json({ data: null, msg: "Welcome to  QR code " });
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log({ post: req.query });
    const { url } = req.query;
    if (!url) throw new Error("url not found");
    const result = await qrController.createQr(url);
    res.status(200).send(result);
    // res.status(200).json({ data: result, msg: "QR code has been generated" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
