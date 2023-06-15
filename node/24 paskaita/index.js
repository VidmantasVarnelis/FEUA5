const express = require("express");
const mysql = require("mysql2");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { authenticate } = require("./middleware");
require("dotenv").config();

const server = express();
server.use(express.json());
server.use(cors());

const mysqlConfig = {
  host: "localhost",
  user: "root",
  password: process.env.DB_PASS,
  database: "tweets",
};

const userSchema = Joi.object({
  name: Joi.string().trim(),
  email: Joi.string().email().trim().lowercase().required(),
  password: Joi.string().required(),
});

const dbPool = mysql.createPool(mysqlConfig).promise();

server.get("/", authenticate, (req, res) => {
  console.log(req.user);
  res.status(200).send({ message: "Authorized" });
});

server.post("/login", async (req, res) => {
  let payload = req.body;

  try {
    payload = await userSchema.validateAsync(payload);
  } catch (error) {
    console.error(error);

    return res.status(400).send({ error: "All fields are required" });
  }

  try {
    const [data] = await dbPool.execute(
      `
        SELECT * FROM users
        WHERE email = ?
    `,
      [payload.email],
    );

    if (!data.length) {
      return res.status(400).send({ error: "Email or password did not match" });
    }

    const isPasswordMatching = await bcrypt.compare(
      payload.password,
      data[0].password,
    );

    if (isPasswordMatching) {
      const token = jwt.sign(
        {
          email: data[0].email,
          id: data[0].id,
        },
        process.env.JWT_SECRET,
      );
      return res.status(200).send({ token });
    }

    return res.status(400).send({ error: "Email or password did not match" });
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
});

server.post("/register", async (req, res) => {
  let payload = req.body;

  try {
    payload = await userSchema.validateAsync(payload);
  } catch (error) {
    console.error(error);

    return res.status(400).send({ error: "All fields are required" });
  }

  try {
    const encryptedPassword = await bcrypt.hash(payload.password, 10);
    const [response] = await dbPool.execute(
      `
            INSERT INTO users (name, email, password)
            VALUES (?, ?, ?)
        `,
      [payload.name, payload.email, encryptedPassword],
    );
    const token = jwt.sign(
      {
        email: payload.email,
        id: response.insertId,
        name: payload.name,
      },
      process.env.JWT_SECRET,
    );
    return res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
});

server.get("/tweets", authenticate, async (req, res) => {
  try {
    const [tweets] = await dbPool.execute(
      "SELECT tweets.id, content, tweets.created_at, tweets.updated_at, name, email FROM tweets JOIN users ON users.id=tweets.user_id",
    );
    return res.json(tweets);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
});

server.get("/user-tweets", authenticate, async (req, res) => {
  try {
    const [tweets] = await dbPool.execute(
      "SELECT id, content, created_at, updated_at FROM tweets WHERE user_id=?",
      [req.user.id],
    );
    return res.json(tweets);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
});

server.listen(process.env.PORT, () =>
  console.log(`Server is listening to ${process.env.PORT} port`),
);
