const express = require("express");
const QRCode = require("qrcode");
const mysql = require("mysql2");

const router = express.Router();

const mysqlConfig = {
  host: "localhost",
  user: "root",
  password: process.env.DB_PASS,
  database: "qrcodes",
};
const dbPool = mysql.createPool(mysqlConfig).promise();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/qrcode", async (req, res) => {
  try {
    const [response] = await dbPool.execute(
      "SELECT * FROM qrcodes WHERE id=?",
      [req.query.id],
    );
    res.render("qrcode", { qrCode: response[0].qrcode });
  } catch (err) {
    res.redirect("/");
  }
});

router.post("/qrcode", async (req, res) => {
  const qrCodeText = req.body.text;
  try {
    const qrCodePath = await QRCode.toDataURL(qrCodeText);
    const [response] = await dbPool.execute(
      "INSERT INTO qrcodes (qrcode) VALUES (?)",
      [qrCodePath],
    );
    res.redirect(`./qrcode?id=${response.insertId}`);
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

router.get("/error", (req, res) => {
  res.render("error");
});

module.exports = router;
