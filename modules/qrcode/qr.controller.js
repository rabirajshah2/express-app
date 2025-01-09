const qrcode = require("qrcode");

const createQr = async (url) => {
  const data = String(url);
  const qr = await qrcode.toDataURL(data);
  return `<img src = "${qr}" />`;
};

module.exports = { createQr };
