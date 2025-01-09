const router = require("express").Router();
const qrController = require("./qr.controller");

router.post("/", async (req, res, next) => {
  try {
    console.log(req.query);
    const { url } = req.query;
    if (!url) throw new Error("url not found");
    const data = await qrController.createQr(url);
    res.status(200).send(data);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
