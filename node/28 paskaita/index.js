const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const qrCodeRoute = require("./src/routes/qrcode");

const server = express();

server.set("views", path.join(__dirname, "src/views"));
server.set("view engine", "ejs");

server.use(express.static(path.join(__dirname, "src/public")));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cors());
server.use("/", qrCodeRoute);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
